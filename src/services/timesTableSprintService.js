/**
 * timesTableSprintService.js
 *
 * Weekly Daily Challenge sprints (one leaderboard per sprint type per week —
 * see src/utils/sprintTypes.js): 20 questions, timed to the millisecond,
 * unlimited attempts per week, best time counts.
 *
 * Traffic model — the leaderboard has to feel live without being polled:
 *   - `timestable_sprint_meta/{boardId}` is ONE small doc holding the whole
 *     top 5. Clients attach a single onSnapshot to it, so Firestore only
 *     bills when the top 5 actually changes.
 *   - That doc is mirrored into localStorage, so a returning student paints
 *     the leaderboard instantly at zero cost while the listener attaches.
 *   - The top 5 is only recomputed (a bounded limit-5 query) by the client
 *     that just beat it — a student whose time cannot enter the top 5 does
 *     zero extra reads. `signature` makes "did the top 5 change?" a string
 *     comparison, so an unchanged podium is never rewritten.
 *
 * XP is NOT granted here. Weekly settlement runs server-side in
 * api/_lib/timesTableSprintSettlement.js so a client cannot mint XP.
 */

import {
  collection, doc, getDoc, getDocs, onSnapshot, query, where, orderBy, limit,
  runTransaction, serverTimestamp, getCountFromServer, addDoc, updateDoc,
} from 'firebase/firestore';
import { db } from '../firebase/config';
import { localCache } from './localCacheService';
import { trackRead, trackWrite } from './trafficTrackerService';
import { buildAvatarUrl, buildDisplayName } from '../utils/avatarUtils';
import { getPreviousSprintWeekId } from '../utils/sprintWeek';
import { SPRINT_TYPES, sprintBoardId } from '../utils/sprintTypes';

export const RESULTS_COLLECTION = 'timestable_sprint_results';
export const META_COLLECTION = 'timestable_sprint_meta';
export const ATTEMPTS_COLLECTION = 'timestable_sprint_attempts';

export const WRONG_ANSWER_PENALTY_MS = 3000;
export const TOP_N = 5;

const cacheKeyFor = (boardId) => `ttsprint:meta:${boardId}`;
const myBestKeyFor = (boardId, userId) => `ttsprint:mybest:${boardId}:${userId}`;

/**
 * The student's own best, mirrored locally after every run.
 *
 * Their own time can only change by running a sprint, which always writes
 * through here — so the dashboard card can show it without a Firestore read.
 */
export const readCachedMyBest = (boardId, userId) => {
  if (!boardId || !userId) return null;
  const cached = localCache.get(myBestKeyFor(boardId, userId));
  return Number.isFinite(Number(cached?.bestTimeMs)) ? cached : null;
};

const writeCachedMyBest = (boardId, userId, bestTimeMs, attemptsCount) => {
  localCache.set(myBestKeyFor(boardId, userId), { bestTimeMs, attemptsCount });
};

// "New" badge on the dashboard card — a one-time introduction, not a weekly
// thing, so it's keyed by uid only and never reset by the week rolling over.
const introSeenKeyFor = (userId) => `ttsprint:introSeen:${userId}`;

export const hasSeenSprintIntro = (userId) => {
  if (!userId) return true; // no student yet → don't flash "New" at nobody
  return Boolean(localCache.get(introSeenKeyFor(userId)));
};

export const markSprintIntroSeen = (userId) => {
  if (!userId) return;
  localCache.set(introSeenKeyFor(userId), true);
};

// ── Leaderboard meta (cached + realtime) ───────────────────────────────────

/** Last known top 5 from localStorage — paints instantly, costs nothing. */
export const readCachedSprintMeta = (boardId) => {
  const cached = localCache.get(cacheKeyFor(boardId));
  return cached && Array.isArray(cached.top5) ? cached : null;
};

const writeCachedSprintMeta = (boardId, meta) => {
  localCache.set(cacheKeyFor(boardId), {
    weekId: boardId,
    version: Number(meta?.version) || 0,
    signature: meta?.signature || '',
    top5: Array.isArray(meta?.top5) ? meta.top5 : [],
    participantCount: Number(meta?.participantCount) || 0,
  });
};

/**
 * Single realtime listener on the top-5 doc. Emits the cached value first so
 * the UI never flashes empty, then live updates. Returns an unsubscribe fn.
 */
export const subscribeSprintMeta = (boardId, onChange) => {
  const cached = readCachedSprintMeta(boardId);
  if (cached) onChange(cached);

  return onSnapshot(
    doc(db, META_COLLECTION, boardId),
    (snap) => {
      const data = snap.exists()
        ? { weekId: boardId, ...snap.data() }
        : { weekId: boardId, version: 0, signature: '', top5: [], participantCount: 0 };
      // Cache hits are served locally by the SDK and cost nothing.
      if (!snap.metadata.fromCache) trackRead(1, 'ttsprint_meta');
      writeCachedSprintMeta(boardId, data);
      onChange(data);
    },
    (err) => console.warn('[ttsprint] meta listener error:', err?.code || err),
  );
};

const signatureOf = (top5) =>
  top5.map((e) => `${e.userId}:${e.bestTimeMs}`).join('|');

/**
 * True when `newBestMs` could change the visible podium. Uses only the meta
 * doc the client already holds, so the common case (a mid-table time) is
 * decided without touching Firestore.
 */
const couldChangeTop5 = (meta, userId, newBestMs) => {
  const top5 = Array.isArray(meta?.top5) ? meta.top5 : [];
  if (top5.length < TOP_N) return true;
  if (top5.some((e) => e.userId === userId)) return true; // may reorder the podium
  return newBestMs < Number(top5[top5.length - 1]?.bestTimeMs ?? Infinity);
};

/**
 * Re-derive the top 5 from live results and publish it — but only if it
 * actually differs from what is already published.
 * @returns {Promise<object|null>} the new meta, or null when nothing changed.
 */
const refreshTop5 = async (boardId) => {
  const queryStartedAt = Date.now();

  const snap = await getDocs(query(
    collection(db, RESULTS_COLLECTION),
    where('weekId', '==', boardId),
    orderBy('bestTimeMs', 'asc'),
    limit(TOP_N),
  ));
  trackRead(snap.size || 1, 'ttsprint_top5');

  const top5 = snap.docs.map((d) => {
    const data = d.data();
    return {
      userId: data.userId,
      name: data.name || 'Student',
      avatarUrl: data.avatarUrl || '',
      year: data.year || '',
      bestTimeMs: Number(data.bestTimeMs) || 0,
    };
  });
  const signature = signatureOf(top5);

  let participantCount = 0;
  try {
    const agg = await getCountFromServer(query(
      collection(db, RESULTS_COLLECTION),
      where('weekId', '==', boardId),
    ));
    participantCount = agg.data().count || 0;
    trackRead(1, 'ttsprint_count');
  } catch {
    /* count is decorative — never fail a run over it */
  }

  let published = null;
  await runTransaction(db, async (tx) => {
    const metaRef = doc(db, META_COLLECTION, boardId);
    const current = (await tx.get(metaRef)).data() || null;

    // Another finisher published after our query started — theirs is fresher.
    if (current && Number(current.version) > queryStartedAt) return;
    // The podium is byte-for-byte what is already live: no write, no reads
    // for every other student's listener.
    if (current && current.signature === signature) return;

    published = {
      weekId: boardId,
      version: Date.now(),
      signature,
      top5,
      participantCount,
      updatedAt: serverTimestamp(),
    };
    tx.set(metaRef, published, { merge: true });
  });

  if (published) trackWrite(1, 'ttsprint_meta');
  return published;
};

// ── Ranking ────────────────────────────────────────────────────────────────

/**
 * The student's own placing. One count aggregation (billed as a single read),
 * used on the start screen and again after a run to animate the change.
 */
export const fetchSprintRank = async (boardId, bestTimeMs) => {
  if (!Number.isFinite(bestTimeMs)) return null;
  try {
    const agg = await getCountFromServer(query(
      collection(db, RESULTS_COLLECTION),
      where('weekId', '==', boardId),
      where('bestTimeMs', '<', bestTimeMs),
    ));
    trackRead(1, 'ttsprint_rank');
    return (agg.data().count || 0) + 1;
  } catch (err) {
    console.warn('[ttsprint] rank lookup failed:', err?.code || err);
    return null;
  }
};

/** This student's own result doc for the week — a point read by doc id. */
export const fetchMySprintResult = async (boardId, userId) => {
  if (!boardId || !userId) return null;
  try {
    const snap = await getDoc(doc(db, RESULTS_COLLECTION, `${boardId}_${userId}`));
    trackRead(1, 'ttsprint_my_result');
    if (!snap.exists()) return null;
    const data = snap.data();
    writeCachedMyBest(boardId, userId, Number(data.bestTimeMs), Number(data.attemptsCount) || 0);
    return data;
  } catch (err) {
    console.warn('[ttsprint] own result fetch failed:', err?.code || err);
    return null;
  }
};

// ── Weekly payout celebration (client checks once, server already paid) ────
// XP itself is minted by api/_lib/timesTableSprintSettlement.js — this only
// detects "was I just settled, and have I not seen the modal for that week
// yet" so the dashboard can congratulate the student once per settlement.
//
// The "seen" flag is stored on each board's result doc itself
// (`payoutSeen: true`, per board),
// not just in localStorage. A localStorage-only flag is device-scoped: it
// resets on a different device, a cleared cache, Safari ITP storage eviction,
// or the quota-exceeded eviction in localCacheService.js dropping this exact
// key — any of which made the modal reappear "every time the app opens"
// (2026-08 report) even though it had already been dismissed. localStorage
// is still checked first as a zero-read fast path; Firestore is the source
// of truth that survives all of the above.
const payoutSeenKeyFor = (userId) => `ttsprint:payoutSeen:${userId}`;

/**
 * After a weekly settlement: point-read last week's result doc on each of the
 * five boards (5 reads, once — skipped entirely once this week is marked seen
 * on this device) and return the settled, not-yet-acknowledged payouts.
 */
export const checkPendingSprintPayouts = async (userId) => {
  if (!userId) return null;
  const weekId = getPreviousSprintWeekId();
  if (localCache.get(payoutSeenKeyFor(userId)) === weekId) return null;

  const results = await Promise.all(SPRINT_TYPES.map(async (type) => {
    const boardId = sprintBoardId(type.id, weekId);
    return { type, boardId, result: await fetchMySprintResult(boardId, userId) };
  }));

  const settled = results.filter(({ result }) => result && Number.isFinite(Number(result.settledXp)));
  const items = settled
    .filter(({ result }) => !result.payoutSeen)
    .map(({ type, boardId, result }) => ({
      typeId: type.id,
      name: type.name,
      boardId,
      rank: Number.isFinite(Number(result.settledRank)) ? Number(result.settledRank) : null,
      xp: Number(result.settledXp),
      bestTimeMs: Number(result.bestTimeMs) || null,
    }));

  if (items.length === 0) {
    // Everything settled was already acknowledged (maybe on another device):
    // sync the local fast path so this device stops re-reading.
    if (settled.length > 0) localCache.set(payoutSeenKeyFor(userId), weekId);
    return null;
  }
  return { weekId, xp: items.reduce((sum, i) => sum + i.xp, 0), items };
};

export const markSprintPayoutSeen = (userId, weekId, boardIds = []) => {
  if (!userId || !weekId) return;
  localCache.set(payoutSeenKeyFor(userId), weekId);
  // Best-effort — the server-side flag is what makes this stick across
  // devices/storage resets. Rules allow a student to update their own row.
  boardIds.forEach((boardId) => {
    updateDoc(doc(db, RESULTS_COLLECTION, `${boardId}_${userId}`), { payoutSeen: true }).catch((err) => {
      console.warn('[ttsprint] payoutSeen sync failed:', err?.code || err);
    });
  });
};

/** Teacher/admin design QA — open the payout celebration without a real settlement. */
export const SPRINT_PAYOUT_PREVIEW_EVENT = 'sapere:sprint-payout-preview';

// ── Submitting a run ───────────────────────────────────────────────────────

/**
 * Record a finished sprint. Only a faster time replaces the weekly best;
 * a slower run still counts as an attempt.
 *
 * @returns {{ improved, bestTimeMs, previousBestMs, attemptsCount, meta }}
 */
export const submitSprintRun = async ({
  userId, profile, timeMs, wrongCount = 0, boardId, sprintType = 'times', currentMeta = null,
}) => {
  if (!userId) throw new Error('submitSprintRun requires a userId');
  if (!boardId) throw new Error('submitSprintRun requires a boardId');

  const resultRef = doc(db, RESULTS_COLLECTION, `${boardId}_${userId}`);
  const name = buildDisplayName(profile);
  const avatarUrl = buildAvatarUrl(profile, userId);
  const year = profile?.year || profile?.assignedYear || '';

  let improved = false;
  let previousBestMs = null;
  let bestTimeMs = timeMs;
  let attemptsCount = 1;

  await runTransaction(db, async (tx) => {
    const snap = await tx.get(resultRef);
    const prev = snap.exists() ? snap.data() : null;
    const prevBest = prev ? Number(prev.bestTimeMs) : Number.POSITIVE_INFINITY;

    previousBestMs = Number.isFinite(prevBest) ? prevBest : null;
    improved = timeMs < prevBest;
    bestTimeMs = improved ? timeMs : prevBest;
    attemptsCount = (Number(prev?.attemptsCount) || 0) + 1;

    tx.set(resultRef, {
      userId,
      weekId: boardId,
      sprintType,
      name,
      avatarUrl,
      year,
      bestTimeMs,
      attemptsCount,
      lastTimeMs: timeMs,
      lastWrongCount: wrongCount,
      // Tie-break for settlement: whoever reached the time first wins.
      ...(improved ? { bestAchievedAt: new Date().toISOString() } : {}),
      updatedAt: serverTimestamp(),
    }, { merge: true });
  });
  trackWrite(1, 'ttsprint_result');
  writeCachedMyBest(boardId, userId, bestTimeMs, attemptsCount);

  // Append-only audit trail. Never read on the hot path; failure is harmless.
  addDoc(collection(db, ATTEMPTS_COLLECTION), {
    userId, weekId: boardId, sprintType, timeMs, wrongCount, createdAt: serverTimestamp(),
  }).then(() => trackWrite(1, 'ttsprint_attempt')).catch(() => {});

  let meta = currentMeta;
  if (improved && couldChangeTop5(currentMeta, userId, bestTimeMs)) {
    try {
      meta = (await refreshTop5(boardId)) || currentMeta;
    } catch (err) {
      console.warn('[ttsprint] top-5 refresh failed:', err?.code || err);
    }
  }

  return { improved, bestTimeMs, previousBestMs, attemptsCount, meta };
};
