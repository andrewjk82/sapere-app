/**
 * Exam Prep — local-first data layer.
 *
 * Goal: minimise Firebase reads/writes by caching the entire candidate
 * question pool in IndexedDB, then serving endless random practice from
 * teacher-selected chapters with no network call after the first fetch.
 *
 * Progress is stored per-question in localStorage:
 *   - correct once → excluded from the draw until a full-deck reset
 *   - wrong / pending → can reappear
 *   - when every pool question is correct → statuses reset to "unsolved"
 *
 * Storage keys (all scoped by uid):
 *   examPrep:v1:<uid>:selection   { years, chapters, examPaperOnly }
 *   examPrep:v1:<uid>:pool        IDB { signature, questions, ... }
 *   examPrep:v1:<uid>:stats       lifetime sessions / correct / attempted
 *   examPrep:v1:<uid>:progress    per-question mastery cache (local)
 *   examPrep:v1:<uid>:history     Session[] recent practice sessions
 */
import { db } from '../firebase/config';
import { collection, query, where, getDocs, getDoc, doc, setDoc, serverTimestamp, documentId } from 'firebase/firestore';
import { addMistakes } from '../utils/secretNote';
import { idbGet, idbSet, idbDel } from '../utils/idbStore';
import { readChapterIndex } from './questionIndexService';

export const EXAM_PREP_NOTE_KIND = 'exam_prep';

/** @deprecated Fixed rounds removed — endless practice. Kept for any stray imports. */
const ROUND_SIZE = 0;
const POOL_TTL_MS = 1000 * 60 * 60 * 24; // 24h safety-net TTL (version-based invalidation is primary)
const HISTORY_CAP = 30;
const V = 'v1';

const k = (uid, suffix) => `examPrep:${V}:${uid}:${suffix}`;

const safeParse = (raw, fallback) => {
  if (!raw) return fallback;
  try { return JSON.parse(raw); } catch { return fallback; }
};

// ── Selection (years + chapters the student is preparing) ─────────────
export const getSelection = (uid) =>
  safeParse(localStorage.getItem(k(uid, 'selection')), { years: [], chapters: [] });

export const setSelection = (uid, selection) => {
  const normalised = {
    years: Array.isArray(selection?.years) ? selection.years : [],
    chapters: Array.isArray(selection?.chapters) ? selection.chapters : [],
    examPaperOnly: selection?.examPaperOnly === true,
  };
  localStorage.setItem(k(uid, 'selection'), JSON.stringify(normalised));
  // Invalidate the pool when selection changes — different scope, new pool.
  localStorage.removeItem(k(uid, 'pool'));
  localStorage.removeItem(k(uid, 'next'));
};

// ── Stats (lifetime counters across all practice) ─────────────────────
const blankStats = () => ({ sessions: 0, correct: 0, attempted: 0, byTopic: {} });

export const getStats = (uid) =>
  safeParse(localStorage.getItem(k(uid, 'stats')), blankStats());

const saveStats = (uid, stats) => {
  localStorage.setItem(k(uid, 'stats'), JSON.stringify(stats));
};

export const resetStats = (uid) => {
  localStorage.removeItem(k(uid, 'stats'));
  localStorage.removeItem(k(uid, 'history'));
  localStorage.removeItem(k(uid, 'progress'));
  // Mirror the reset to the server so it doesn't re-hydrate stale data.
  persistStateToServer(uid);
};

// ── Per-question progress (local mastery cache) ───────────────────────
// status: 'correct' | 'wrong'  (missing key = not yet attempted this cycle)
const blankProgress = () => ({
  byId: {},
  cycles: 0,
  updatedAt: 0,
});

export const getProgress = (uid) => {
  const raw = safeParse(localStorage.getItem(k(uid, 'progress')), null);
  if (!raw || typeof raw !== 'object') return blankProgress();
  return {
    byId: raw.byId && typeof raw.byId === 'object' ? raw.byId : {},
    cycles: Number(raw.cycles) || 0,
    updatedAt: Number(raw.updatedAt) || 0,
  };
};

const saveProgress = (uid, progress) => {
  progress.updatedAt = Date.now();
  localStorage.setItem(k(uid, 'progress'), JSON.stringify(progress));
};

/** All questions currently marked correct (excluded from draw until cycle reset). */
export const getMasteredIds = (uid) => {
  const { byId } = getProgress(uid);
  return new Set(
    Object.entries(byId)
      .filter(([, v]) => v?.status === 'correct')
      .map(([id]) => id),
  );
};

/**
 * Analyse local progress against the current pool.
 * Returns mastery X/Y, accuracy %, and per-chapter / per-topic breakdowns.
 */
export const getProgressAnalysis = (uid, pool = []) => {
  const progress = getProgress(uid);
  const stats = getStats(uid);
  const byId = progress.byId || {};
  const poolIds = new Set((pool || []).map((q) => String(q.id)));
  const total = poolIds.size;

  let mastered = 0;
  let wrongNow = 0;
  let unseen = 0;
  const byChapter = {}; // chapterId → deck mastery
  const byTopic = {}; // topicId → deck mastery + lifetime accuracy

  for (const q of pool || []) {
    const id = String(q.id);
    const entry = byId[id];
    const chapterId = q.chapterId || q.topicId || 'unknown';
    const chapterTitle = q.chapterTitle || q.topicTitle || 'Untitled';
    const topicId = q.topicId || q.chapterId || 'unknown';
    const topicTitle = q.topicTitle || q.chapterTitle || 'Untitled topic';

    byChapter[chapterId] = byChapter[chapterId] || {
      chapterId,
      title: chapterTitle,
      total: 0,
      mastered: 0,
      wrong: 0,
      attempted: 0,
      correctAttempts: 0,
    };
    byTopic[topicId] = byTopic[topicId] || {
      topicId,
      title: topicTitle,
      chapterId,
      chapterTitle,
      total: 0,
      mastered: 0,
      wrong: 0,
      attempted: 0,
      correctAttempts: 0,
    };

    const ch = byChapter[chapterId];
    const tp = byTopic[topicId];
    ch.total += 1;
    tp.total += 1;
    if (entry?.status === 'correct') {
      mastered += 1;
      ch.mastered += 1;
      ch.attempted += 1;
      tp.mastered += 1;
      tp.attempted += 1;
    } else if (entry?.status === 'wrong') {
      wrongNow += 1;
      ch.wrong += 1;
      ch.attempted += 1;
      tp.wrong += 1;
      tp.attempted += 1;
    } else {
      unseen += 1;
    }
    if (entry) {
      ch.correctAttempts += Number(entry.correctCount) || 0;
      tp.correctAttempts += Number(entry.correctCount) || 0;
    }
  }

  // Lifetime accuracy from cumulative stats (survives deck resets).
  const attempted = Number(stats.attempted) || 0;
  const correct = Number(stats.correct) || 0;
  const accuracy = attempted > 0 ? Math.round((correct / attempted) * 100) : 0;
  const remaining = Math.max(0, total - mastered);
  const lifeByTopic = stats.byTopic || {};

  const chapters = Object.values(byChapter)
    .map((c) => ({
      ...c,
      pct: c.total > 0 ? Math.round((c.mastered / c.total) * 100) : 0,
      // Weakness score: low mastery + has wrongs ranks higher for "focus"
      weakScore: c.total > 0
        ? (1 - c.mastered / c.total) * 100 + (c.wrong > 0 ? 10 : 0)
        : 0,
    }))
    .sort((a, b) => b.weakScore - a.weakScore || a.title.localeCompare(b.title));

  // Per-topic deck progress + lifetime accuracy (for bottom dashboard card).
  const topics = Object.values(byTopic)
    .map((t) => {
      const life = lifeByTopic[t.topicId] || {};
      const lifeAttempted = Number(life.attempted) || 0;
      const lifeCorrect = Number(life.correct) || 0;
      const accuracyPct = lifeAttempted > 0
        ? Math.round((lifeCorrect / lifeAttempted) * 100)
        : 0;
      const progressPct = t.total > 0 ? Math.round((t.mastered / t.total) * 100) : 0;
      return {
        ...t,
        title: life.title || t.title,
        lifeAttempted,
        lifeCorrect,
        accuracyPct,
        progressPct,
        remaining: Math.max(0, t.total - t.mastered),
        weakScore: t.total > 0
          ? (1 - t.mastered / t.total) * 100 + (t.wrong > 0 ? 10 : 0) + (lifeAttempted >= 2 && accuracyPct < 70 ? 15 : 0)
          : 0,
      };
    })
    .sort((a, b) => b.weakScore - a.weakScore || a.title.localeCompare(b.title));

  return {
    total,
    mastered,
    wrongNow,
    unseen,
    remaining,
    accuracy,
    lifetimeAttempted: attempted,
    lifetimeCorrect: correct,
    cycles: progress.cycles || 0,
    sessions: Number(stats.sessions) || 0,
    chapters,
    topics,
    byTopic: stats.byTopic || {},
  };
};

/** Reset every question to "not yet solved" so the deck can be practised again. */
export const resetMasteryCycle = (uid) => {
  const progress = getProgress(uid);
  const next = { byId: {}, cycles: (progress.cycles || 0) + 1, updatedAt: Date.now() };
  saveProgress(uid, next);
  return next;
};

/**
 * Record one answer into the local progress cache + lifetime stats.
 * Correct answers are locked out of the draw until a full-deck reset.
 * Wrong / pending answers stay eligible.
 */
export const recordAnswer = (uid, question, { correct, pending = false } = {}) => {
  if (!uid || !question?.id) return getProgress(uid);
  const qid = String(question.id);
  const progress = getProgress(uid);
  const prev = progress.byId[qid] || {
    status: 'unseen',
    attempts: 0,
    correctCount: 0,
    wrongCount: 0,
  };

  const isCorrect = correct === true && !pending;
  // Once correct in this cycle, stay correct (won't reappear until deck reset).
  const nextStatus = prev.status === 'correct' || isCorrect ? 'correct' : 'wrong';
  const entry = {
    status: nextStatus,
    attempts: (prev.attempts || 0) + 1,
    correctCount: (prev.correctCount || 0) + (isCorrect ? 1 : 0),
    wrongCount: (prev.wrongCount || 0) + (isCorrect ? 0 : 1),
    chapterId: question.chapterId || prev.chapterId || '',
    chapterTitle: question.chapterTitle || prev.chapterTitle || '',
    topicId: question.topicId || prev.topicId || '',
    topicTitle: question.topicTitle || prev.topicTitle || '',
    lastAt: Date.now(),
    pending: pending === true && nextStatus !== 'correct',
  };

  progress.byId[qid] = entry;
  saveProgress(uid, progress);

  // Lifetime counters (used for overall accuracy %).
  const stats = getStats(uid);
  stats.attempted = (Number(stats.attempted) || 0) + 1;
  if (isCorrect) stats.correct = (Number(stats.correct) || 0) + 1;
  const topicId = question.topicId || question.chapterId || 'unknown';
  const topicTitle = question.topicTitle || question.chapterTitle || 'Untitled topic';
  stats.byTopic[topicId] = stats.byTopic[topicId] || { title: topicTitle, correct: 0, attempted: 0 };
  stats.byTopic[topicId].title = topicTitle;
  stats.byTopic[topicId].attempted += 1;
  if (isCorrect) stats.byTopic[topicId].correct += 1;
  saveStats(uid, stats);

  return progress;
};

/** Eligible questions = pool minus those already correct this cycle. */
export const getEligibleQuestions = (pool, uid) => {
  const mastered = getMasteredIds(uid);
  return (pool || []).filter((q) => q?.id != null && !mastered.has(String(q.id)));
};

/**
 * Pick the next random question from non-mastered pool items.
 * If every question is mastered, reset the cycle and pick from the full pool.
 * @param {{ excludeId?: string }} [options] — skip this id when other items remain
 */
export const pickNextQuestion = (uid, pool, options = {}) => {
  const list = Array.isArray(pool) ? pool : [];
  if (list.length === 0) {
    return { question: null, pool: list, resetCycle: false, remaining: 0, mastered: 0, total: 0 };
  }

  let eligible = getEligibleQuestions(list, uid);
  let resetCycle = false;

  if (eligible.length === 0) {
    resetMasteryCycle(uid);
    resetCycle = true;
    eligible = [...list];
  }

  // Avoid immediate re-draw of the same question when others remain.
  let drawFrom = eligible;
  if (options.excludeId != null && eligible.length > 1) {
    const filtered = eligible.filter((q) => String(q.id) !== String(options.excludeId));
    if (filtered.length > 0) drawFrom = filtered;
  }

  const question = drawFrom[Math.floor(Math.random() * drawFrom.length)] || null;
  // remaining = non-mastered still in deck (including the one about to be shown).
  const remaining = getEligibleQuestions(list, uid).length;

  return {
    question,
    pool: list,
    resetCycle,
    remaining: resetCycle ? list.length : remaining,
    mastered: getMasteredIds(uid).size,
    total: list.length,
  };
};

// ── History (recent sessions, capped) ──────────────────────────────────
export const getHistory = (uid) =>
  safeParse(localStorage.getItem(k(uid, 'history')), []);

const pushHistory = (uid, session) => {
  const list = getHistory(uid);
  list.unshift(session);
  if (list.length > HISTORY_CAP) list.length = HISTORY_CAP;
  localStorage.setItem(k(uid, 'history'), JSON.stringify(list));
};

// ── Teacher approvals ───────────────────────────────────────────────────
// When a teacher approves a pending exam-prep answer (grading queue), the
// approval lands on the student's user doc (examPrepApprovals:
// [{ questionId, topicId, topicTitle }]). Applied here on the next load:
// the answer counts as correct so the student's accuracy is restored.
// Pending answers were already counted as attempted-but-not-correct in
// finishRound, so applying = +1 correct (overall and per-topic).
// Idempotency ledger: applying an approval is "+1 correct", which is NOT safe
// to repeat (unlike note removal). If applying succeeds but clearing the
// user-doc queue field fails (offline, second device), the next snapshot
// delivers the same entries again — this ledger makes re-application a no-op.
const appliedLedgerKey = (uid) => k(uid, 'appliedTeacherActions');
const getAppliedLedger = (uid) => new Set(safeParse(localStorage.getItem(appliedLedgerKey(uid)), []));
const saveAppliedLedger = (uid, set) => {
  localStorage.setItem(appliedLedgerKey(uid), JSON.stringify([...set].slice(-300)));
};
const actionKey = (prefix, a) => `${prefix}|${a?.questionId ?? ''}|${a?.approvedAt ?? a?.rejectedAt ?? ''}`;

export function applyTeacherApprovals(uid, approvals) {
  if (!Array.isArray(approvals) || approvals.length === 0) return 0;
  const ledger = getAppliedLedger(uid);
  const stats = getStats(uid);
  const progress = getProgress(uid);
  let applied = 0;
  for (const a of approvals) {
    if (!a || !a.questionId) continue;
    const key = actionKey('approve', a);
    if (ledger.has(key)) continue;
    ledger.add(key);
    stats.correct += 1;
    const topicId = a.topicId || 'unknown';
    stats.byTopic[topicId] = stats.byTopic[topicId] || { title: a.topicTitle || 'Untitled topic', correct: 0, attempted: 0 };
    stats.byTopic[topicId].correct += 1;
    if (stats.byTopic[topicId].attempted < stats.byTopic[topicId].correct) {
      stats.byTopic[topicId].attempted = stats.byTopic[topicId].correct;
    }
    // Mark mastered in local progress so the question leaves the draw.
    const qid = String(a.questionId);
    const prev = progress.byId[qid] || { attempts: 0, correctCount: 0, wrongCount: 0 };
    progress.byId[qid] = {
      ...prev,
      status: 'correct',
      correctCount: (prev.correctCount || 0) + 1,
      pending: false,
      topicId: a.topicId || prev.topicId || '',
      topicTitle: a.topicTitle || prev.topicTitle || '',
      lastAt: Date.now(),
    };
    applied += 1;
  }
  if (applied > 0) {
    if (stats.attempted < stats.correct) stats.attempted = stats.correct;
    saveStats(uid, stats);
    saveProgress(uid, progress);
    saveAppliedLedger(uid, ledger);
    persistStateToServer(uid);
  }
  return applied;
}

// Teacher rejected a pending answer. The answer was already counted as
// not-correct in finishRound, so stats don't change — this just records the
// outcome (idempotently) and returns the newly-seen entries so the app can
// tell the student their answer was confirmed incorrect.
export function applyTeacherRejections(uid, rejections) {
  if (!Array.isArray(rejections) || rejections.length === 0) return [];
  const ledger = getAppliedLedger(uid);
  const fresh = [];
  for (const r of rejections) {
    if (!r || !r.questionId) continue;
    const key = actionKey('reject', r);
    if (ledger.has(key)) continue;
    ledger.add(key);
    fresh.push(r);
  }
  if (fresh.length > 0) saveAppliedLedger(uid, ledger);
  return fresh;
}

// ── Cross-device sync (stats + history persisted to Firestore) ─────────
// localStorage stays the fast local cache; Firestore is the canonical store so
// a student's progress follows them across devices/browsers. The doc lives
// under the student's own user document: users/{uid}/examPrep/state.
const stateDocRef = (uid) => doc(db, 'users', uid, 'examPrep', 'state');

// Persist local stats + history + progress to Firestore (best-effort).
export const persistStateToServer = async (uid) => {
  if (!uid) return;
  try {
    await setDoc(stateDocRef(uid), {
      stats: getStats(uid),
      history: getHistory(uid),
      progress: getProgress(uid),
      updatedAt: serverTimestamp(),
    }, { merge: true });
  } catch (e) {
    console.warn('[examPrep] state persist failed (non-fatal):', e?.message || e);
  }
};

// Pull server-saved stats/history/progress into localStorage so the synchronous
// getters return cross-device values. Server wins when it has ≥ local sessions.
const hydratedUids = new Set();

export const hydrateExamPrepState = async (uid, { force = false } = {}) => {
  if (!uid) return false;
  if (!force && hydratedUids.has(uid)) return false; // already synced this session
  hydratedUids.add(uid);
  try {
    const snap = await getDoc(stateDocRef(uid));
    if (!snap.exists()) return false;
    const data = snap.data() || {};
    const serverStats = data.stats;
    if (!serverStats) return false;
    const serverHistory = Array.isArray(data.history) ? data.history : [];
    const localSessions = Number(getStats(uid).sessions) || 0;
    const serverSessions = Number(serverStats.sessions) || 0;
    if (serverSessions >= localSessions) {
      localStorage.setItem(k(uid, 'stats'), JSON.stringify(serverStats));
      localStorage.setItem(k(uid, 'history'), JSON.stringify(serverHistory.slice(0, HISTORY_CAP)));
      if (data.progress && typeof data.progress === 'object') {
        localStorage.setItem(k(uid, 'progress'), JSON.stringify({
          byId: data.progress.byId && typeof data.progress.byId === 'object' ? data.progress.byId : {},
          cycles: Number(data.progress.cycles) || 0,
          updatedAt: Number(data.progress.updatedAt) || Date.now(),
        }));
      }
      return true;
    }
    // Local is ahead (offline practice not yet pushed) — push it up instead.
    persistStateToServer(uid);
    return false;
  } catch (e) {
    // Let a transient failure retry on the next attempt this session.
    hydratedUids.delete(uid);
    console.warn('[examPrep] hydrate failed (non-fatal):', e?.message || e);
    return false;
  }
};

// ── Question pool (the cached candidate set) ──────────────────────────
const signatureFor = (selection) =>
  `${[...(selection.years || [])].sort().join('|')}::${[...(selection.chapters || [])].sort().join('|')}::${selection.examPaperOnly ? '1' : '0'}`;

// The question pool (and pre-fetched next round) can be large — hundreds of
// questions with embedded base64 diagrams. localStorage's ~5 MB quota throws
// QuotaExceededError on overflow, which used to block the round entirely.
// These now live in IndexedDB (large quota, stores structured data directly,
// no JSON string-length ceiling). All writes are best-effort: if persistence
// fails the round still runs from the in-memory pool.

// One-time cleanup: remove any legacy localStorage pool/next entries that an
// older build may have written (and that may be hogging the localStorage quota
// for everything else in the app). Safe to run on every load.
let legacyCleaned = false;
const purgeLegacyLocalStoragePool = () => {
  if (legacyCleaned) return;
  legacyCleaned = true;
  try {
    Object.keys(localStorage)
      .filter((kk) => kk.startsWith('examPrep:') && (kk.endsWith(':pool') || kk.endsWith(':next')))
      .forEach((kk) => localStorage.removeItem(kk));
  } catch { /* ignore */ }
};

const loadCachedPool = async (uid, selection, latestVersion) => {
  purgeLegacyLocalStoragePool();
  const cached = await idbGet(k(uid, 'pool'));
  if (!cached) return null;
  if (cached.signature !== signatureFor(selection)) return null;
  // Version-based invalidation: if the question bank hasn't changed since we
  // cached the pool, reuse it regardless of age — no re-fetch needed.
  if (latestVersion && cached.questionsVersion != null && cached.questionsVersion === latestVersion) {
    return cached.questions || [];
  }
  // Safety-net: time-based TTL (24h) when version data is unavailable.
  if (Date.now() - (cached.fetchedAt || 0) > POOL_TTL_MS) return null;
  return cached.questions || [];
};

/**
 * Read the locally cached question pool without any Firestore calls.
 * Used by FlameBuddy (and other UI) for offline-safe coaching copy.
 */
export const getCachedPoolQuestions = async (uid) => {
  if (!uid) return [];
  purgeLegacyLocalStoragePool();
  try {
    const cached = await idbGet(k(uid, 'pool'));
    return Array.isArray(cached?.questions) ? cached.questions : [];
  } catch {
    return [];
  }
};

const saveCachedPool = async (uid, selection, questions, questionsVersion) => {
  await idbSet(k(uid, 'pool'), {
    fetchedAt: Date.now(),
    signature: signatureFor(selection),
    questionsVersion: questionsVersion || 0,
    questions,
  });
};

/**
 * Fetch the candidate pool from Firestore once, then cache. Subsequent rounds
 * sample from the local cache for free.
 *
 * Cache invalidation strategy:
 *   1. Read sync_meta/questions.version (1 read) — if version matches the
 *      cached pool, skip re-fetch entirely (free ride, no matter how old).
 *   2. Safety-net 24h TTL when version data is unavailable.
 *   Previously: 6h time-based TTL → could re-fetch hundreds of docs every 6h.
 *   Now: only re-fetches when questions actually changed.
 */
export const ensurePool = async (uid, selection, { force = false } = {}) => {
  // 1 read: check if the question bank changed since we last built the pool.
  const syncSnap = await getDoc(doc(db, 'sync_meta', 'questions')).catch(() => null);
  const latestVersion = syncSnap?.data()?.version || 0;

  if (!force) {
    const cached = await loadCachedPool(uid, selection, latestVersion);
    // Only reuse a NON-empty cached pool. An empty cache (e.g. fetched before
    // the teacher added questions) should fall through to a fresh fetch rather
    // than block rounds until the TTL expires.
    if (cached && cached.length > 0) return cached;
  }
  if (!selection?.chapters?.length) {
    await saveCachedPool(uid, selection, [], latestVersion);
    return [];
  }

  const chapters = selection.chapters;
  const all = [];

  // Index-based fetch (read-quota optimisation):
  //   Old path read EVERY question doc in the selected chapters via
  //   `where('chapterId', 'in', chunk)` — e.g. ~1,275 reads for full Year 7.
  //   New path reads each chapter's question_index doc (1 read/chapter) to get
  //   the active question IDs, then fetches only those docs by document ID
  //   (~ceil(N/30) reads). Identical result set; ~90% fewer reads.
  //
  //   Chapters that have no question_index doc yet (legacy/unseeded) fall back
  //   to the original chapterId query so coverage is unchanged.
  const indexedIds = [];
  const unindexedChapters = [];
  await Promise.all(chapters.map(async (chapterId) => {
    const index = await readChapterIndex(chapterId);
    if (index && index.ids.length > 0) {
      indexedIds.push(...index.ids);
    } else {
      unindexedChapters.push(chapterId);
    }
  }));

  // Fetch indexed questions by document ID (Firestore `in` caps at 30 per query).
  // A stale ID that no longer exists simply isn't returned — no error, fewer rows.
  const uniqueIds = [...new Set(indexedIds.map(String))];
  for (let i = 0; i < uniqueIds.length; i += 30) {
    const batch = uniqueIds.slice(i, i + 30);
    const snap = await getDocs(query(
      collection(db, 'questions'),
      where(documentId(), 'in', batch),
    ));
    snap.forEach((d) => {
      const data = d.data();
      if (data?.isActive === false) return;
      all.push({ id: d.id, ...data });
    });
  }

  // Legacy fallback: chapters without an index doc keep the original full query.
  for (let i = 0; i < unindexedChapters.length; i += 30) {
    const chunk = unindexedChapters.slice(i, i + 30);
    const snap = await getDocs(query(
      collection(db, 'questions'),
      where('chapterId', 'in', chunk),
    ));
    snap.forEach((d) => {
      const data = d.data();
      if (data?.isActive === false) return;
      all.push({ id: d.id, ...data });
    });
  }
  // Dedupe by id — defensive: the indexed batch-fetch and the legacy fallback
  // are mutually exclusive per chapter, but guard against any ID appearing in
  // more than one chapter's index so a question is never offered twice.
  const seenIds = new Set();
  const deduped = all.filter((q) => {
    if (seenIds.has(q.id)) return false;
    seenIds.add(q.id);
    return true;
  });

  // Keep teacher_review / requiresManualGrading questions — they get queued in
  // grading_queue when the student submits, and appear in the teacher's Reports tab.
  // When examPaperOnly is set, restrict to questions sourced from HSC trial papers.
  const usable = deduped.filter((q) =>
    (!selection.examPaperOnly || Boolean(q.examPaper))
  );
  await saveCachedPool(uid, selection, usable, latestVersion);
  return usable;
};

// ── Random helpers ─────────────────────────────────────────────────────
const shuffle = (arr) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

/** @deprecated Use pickNextQuestion — kept so old callers don't crash. */
export const pickRound = (pool, n = 15) => shuffle(pool).slice(0, Math.max(1, n));

// Clear any legacy "next round" stash from older builds.
export const getNextRound = (uid) => idbGet(k(uid, 'next'));
export const stashNextRound = async (uid, questions) => {
  if (!Array.isArray(questions) || questions.length === 0) {
    await idbDel(k(uid, 'next'));
    return;
  }
  await idbSet(k(uid, 'next'), questions);
};
export const consumeNextRound = async (uid) => {
  const next = await getNextRound(uid);
  if (next) await idbDel(k(uid, 'next'));
  return next;
};

/**
 * Start endless practice: load the teacher-selected pool and pick the first
 * non-mastered random question. If the deck is fully mastered, resets first.
 */
export const startPractice = async (uid, selection) => {
  let pool = await ensurePool(uid, selection);
  if (pool.length === 0) {
    pool = await ensurePool(uid, selection, { force: true });
  }
  // Drop legacy pre-fetched rounds so they can't reintroduce fixed-15 behaviour.
  try { await idbDel(k(uid, 'next')); } catch { /* ignore */ }

  if (pool.length === 0) {
    return { question: null, pool: [], resetCycle: false, remaining: 0, total: 0, mastered: 0 };
  }

  const pick = pickNextQuestion(uid, pool);
  return {
    ...pick,
    analysis: getProgressAnalysis(uid, pool),
  };
};

/** @deprecated Alias — endless practice replaces fixed rounds. */
export const startRound = async (uid, selection) => {
  const r = await startPractice(uid, selection);
  // Old UI expected { questions: Question[] }. Hand a one-item array so a
  // missed call site still shows something instead of an empty screen.
  return {
    questions: r.question ? [r.question] : [],
    pool: r.pool,
    ...r,
  };
};

/**
 * End a practice session (student quit or left). Per-answer stats were already
 * written by recordAnswer; this only bumps session count, history, secret note,
 * and teacher-facing summary.
 */
export const endSession = async (uid, results, { questions = [] } = {}) => {
  const stats = getStats(uid);
  // Only count as a session if the student answered at least one question.
  const answered = Array.isArray(results) ? results.length : 0;
  if (answered > 0) {
    stats.sessions = (Number(stats.sessions) || 0) + 1;
    saveStats(uid, stats);
  }

  let correct = 0;
  const perTopic = {};
  results.forEach((res, i) => {
    const q = questions[i] || {};
    const topicId = q.topicId || q.chapterId || 'unknown';
    const topicTitle = q.topicTitle || q.chapterTitle || 'Untitled topic';
    perTopic[topicId] = perTopic[topicId] || { title: topicTitle, correct: 0, attempted: 0 };
    perTopic[topicId].title = topicTitle;
    perTopic[topicId].attempted += 1;
    if (res?.correct) {
      perTopic[topicId].correct += 1;
      correct += 1;
    }
  });

  if (answered > 0) {
    pushHistory(uid, {
      finishedAt: Date.now(),
      total: results.length,
      correct,
      perTopic,
      mode: 'endless',
    });
  }

  persistStateToServer(uid);

  const wrongQuestions = results
    .map((res, i) => (res?.correct ? null : questions[i]))
    .filter(Boolean);
  let addedToNote = 0;
  if (wrongQuestions.length > 0 && uid) {
    try {
      addedToNote = addMistakes(EXAM_PREP_NOTE_KIND, uid, wrongQuestions);
    } catch (err) {
      console.warn('Exam Prep secret-note write failed:', err);
    }
  }

  const progress = getProgress(uid);
  const mastery = {
    mastered: Object.values(progress.byId || {}).filter((v) => v?.status === 'correct').length,
  };

  if (uid) {
    try {
      await setDoc(doc(db, 'students', uid, 'exam_prep', 'summary'), {
        sessions: stats.sessions,
        attempted: stats.attempted,
        correct: stats.correct,
        byTopic: stats.byTopic,
        progressMastered: mastery.mastered,
        progressCycles: progress.cycles || 0,
        lastRound: {
          finishedAt: Date.now(),
          total: results.length,
          correct,
          perTopic,
          mode: 'endless',
        },
        updatedAt: serverTimestamp(),
      }, { merge: true });
    } catch (err) {
      console.warn('Exam Prep summary mirror failed:', err);
    }
  }

  return {
    correct,
    total: results.length,
    xp: 0,
    perTopic,
    addedToNote,
    analysis: getProgressAnalysis(uid, questions),
  };
};

/** @deprecated Use endSession. */
export const finishRound = endSession;

// ── Topic-analysis helper for the UI ───────────────────────────────────
/**
 * Returns topics sorted weakest-first (lowest accuracy %), so the student
 * sees where to focus during exam prep. Topics with < 3 attempts are
 * de-prioritised (sample too small).
 */
export const getTopicAnalysis = (uid) => {
  const { byTopic } = getStats(uid);
  return Object.entries(byTopic || {}).map(([topicId, t]) => ({
    topicId,
    title: t.title,
    attempted: t.attempted,
    correct: t.correct,
    pct: t.attempted > 0 ? Math.round((t.correct / t.attempted) * 100) : 0,
  })).sort((a, b) => {
    // 3+ attempts always rank above smaller samples; within each group,
    // lower percentage = weaker = listed first.
    const aSmall = a.attempted < 3 ? 1 : 0;
    const bSmall = b.attempted < 3 ? 1 : 0;
    if (aSmall !== bSmall) return aSmall - bSmall;
    return a.pct - b.pct;
  });
};

/** No fixed round size — endless practice. Export 0 for any leftover UI. */
export const ROUND_SIZE_CONST = 0;
