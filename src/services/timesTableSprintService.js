/**
 * timesTableSprintService.js
 *
 * Weekly Times Table Sprint: 20 unique multiplication facts, timed to the
 * millisecond, unlimited attempts per week, best time counts.
 *
 * Traffic model — the leaderboard has to feel live without being polled:
 *   - `timestable_sprint_meta/{weekId}` is ONE small doc holding the whole
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
  runTransaction, serverTimestamp, getCountFromServer, addDoc,
} from 'firebase/firestore';
import { db } from '../firebase/config';
import { localCache } from './localCacheService';
import { trackRead, trackWrite } from './trafficTrackerService';
import { buildAvatarUrl, buildDisplayName } from '../utils/avatarUtils';
import { getSprintWeekId } from '../utils/sprintWeek';

export const RESULTS_COLLECTION = 'timestable_sprint_results';
export const META_COLLECTION = 'timestable_sprint_meta';
export const ATTEMPTS_COLLECTION = 'timestable_sprint_attempts';

export const SPRINT_QUESTION_COUNT = 20;
export const WRONG_ANSWER_PENALTY_MS = 3000;
export const TOP_N = 5;

/** Weekly XP payout by finishing rank; everyone else who played gets 5. */
export const SPRINT_XP_TIERS = [100, 50, 20];
export const SPRINT_XP_PARTICIPATION = 5;

const cacheKeyFor = (weekId) => `ttsprint:meta:${weekId}`;
const myBestKeyFor = (weekId, userId) => `ttsprint:mybest:${weekId}:${userId}`;

/**
 * The student's own best, mirrored locally after every run.
 *
 * Their own time can only change by running a sprint, which always writes
 * through here — so the dashboard card can show it without a Firestore read.
 */
export const readCachedMyBest = (weekId, userId) => {
  if (!weekId || !userId) return null;
  const cached = localCache.get(myBestKeyFor(weekId, userId));
  return Number.isFinite(Number(cached?.bestTimeMs)) ? cached : null;
};

const writeCachedMyBest = (weekId, userId, bestTimeMs, attemptsCount) => {
  localCache.set(myBestKeyFor(weekId, userId), { bestTimeMs, attemptsCount });
};

// ── Questions ──────────────────────────────────────────────────────────────

/**
 * Years 1–3 drill the basic tables (2–9); everyone else gets the full
 * Australian 12×12 grid. Unknown/unset year falls back to the wider range.
 */
export const getFactorRangeForYear = (year) => {
  const n = Number(String(year ?? '').replace(/[^0-9]/g, ''));
  return Number.isFinite(n) && n >= 1 && n <= 3 ? { min: 2, max: 9 } : { min: 2, max: 12 };
};

/**
 * 20 distinct multiplication facts. a×b and b×a are the same fact, so the
 * pool is built from unordered pairs and each pair is drawn at most once —
 * the displayed orientation is then randomised for variety.
 */
export const generateSprintQuestions = (year, count = SPRINT_QUESTION_COUNT) => {
  const { min, max } = getFactorRangeForYear(year);

  const pool = [];
  for (let a = min; a <= max; a++) {
    for (let b = a; b <= max; b++) pool.push([a, b]);
  }

  // Fisher–Yates, then take the first `count` — guarantees no repeats.
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }

  return pool.slice(0, Math.min(count, pool.length)).map(([a, b]) => {
    const flip = Math.random() < 0.5;
    const left = flip ? b : a;
    const right = flip ? a : b;
    return { pairKey: `${a}x${b}`, left, right, answer: a * b };
  });
};

// ── Leaderboard meta (cached + realtime) ───────────────────────────────────

/** Last known top 5 from localStorage — paints instantly, costs nothing. */
export const readCachedSprintMeta = (weekId) => {
  const cached = localCache.get(cacheKeyFor(weekId));
  return cached && Array.isArray(cached.top5) ? cached : null;
};

const writeCachedSprintMeta = (weekId, meta) => {
  localCache.set(cacheKeyFor(weekId), {
    weekId,
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
export const subscribeSprintMeta = (weekId, onChange) => {
  const cached = readCachedSprintMeta(weekId);
  if (cached) onChange(cached);

  return onSnapshot(
    doc(db, META_COLLECTION, weekId),
    (snap) => {
      const data = snap.exists()
        ? { weekId, ...snap.data() }
        : { weekId, version: 0, signature: '', top5: [], participantCount: 0 };
      // Cache hits are served locally by the SDK and cost nothing.
      if (!snap.metadata.fromCache) trackRead(1, 'ttsprint_meta');
      writeCachedSprintMeta(weekId, data);
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
const refreshTop5 = async (weekId) => {
  const queryStartedAt = Date.now();

  const snap = await getDocs(query(
    collection(db, RESULTS_COLLECTION),
    where('weekId', '==', weekId),
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
      where('weekId', '==', weekId),
    ));
    participantCount = agg.data().count || 0;
    trackRead(1, 'ttsprint_count');
  } catch {
    /* count is decorative — never fail a run over it */
  }

  let published = null;
  await runTransaction(db, async (tx) => {
    const metaRef = doc(db, META_COLLECTION, weekId);
    const current = (await tx.get(metaRef)).data() || null;

    // Another finisher published after our query started — theirs is fresher.
    if (current && Number(current.version) > queryStartedAt) return;
    // The podium is byte-for-byte what is already live: no write, no reads
    // for every other student's listener.
    if (current && current.signature === signature) return;

    published = {
      weekId,
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
export const fetchSprintRank = async (weekId, bestTimeMs) => {
  if (!Number.isFinite(bestTimeMs)) return null;
  try {
    const agg = await getCountFromServer(query(
      collection(db, RESULTS_COLLECTION),
      where('weekId', '==', weekId),
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
export const fetchMySprintResult = async (weekId, userId) => {
  if (!weekId || !userId) return null;
  try {
    const snap = await getDoc(doc(db, RESULTS_COLLECTION, `${weekId}_${userId}`));
    trackRead(1, 'ttsprint_my_result');
    if (!snap.exists()) return null;
    const data = snap.data();
    writeCachedMyBest(weekId, userId, Number(data.bestTimeMs), Number(data.attemptsCount) || 0);
    return data;
  } catch (err) {
    console.warn('[ttsprint] own result fetch failed:', err?.code || err);
    return null;
  }
};

// ── Submitting a run ───────────────────────────────────────────────────────

/**
 * Record a finished sprint. Only a faster time replaces the weekly best;
 * a slower run still counts as an attempt.
 *
 * @returns {{ improved, bestTimeMs, previousBestMs, attemptsCount, meta }}
 */
export const submitSprintRun = async ({
  userId, profile, timeMs, wrongCount = 0, weekId = getSprintWeekId(), currentMeta = null,
}) => {
  if (!userId) throw new Error('submitSprintRun requires a userId');

  const resultRef = doc(db, RESULTS_COLLECTION, `${weekId}_${userId}`);
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
      weekId,
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
  writeCachedMyBest(weekId, userId, bestTimeMs, attemptsCount);

  // Append-only audit trail. Never read on the hot path; failure is harmless.
  addDoc(collection(db, ATTEMPTS_COLLECTION), {
    userId, weekId, timeMs, wrongCount, createdAt: serverTimestamp(),
  }).then(() => trackWrite(1, 'ttsprint_attempt')).catch(() => {});

  let meta = currentMeta;
  if (improved && couldChangeTop5(currentMeta, userId, bestTimeMs)) {
    try {
      meta = (await refreshTop5(weekId)) || currentMeta;
    } catch (err) {
      console.warn('[ttsprint] top-5 refresh failed:', err?.code || err);
    }
  }

  return { improved, bestTimeMs, previousBestMs, attemptsCount, meta };
};
