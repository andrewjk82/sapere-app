/**
 * Exam Prep — local-first data layer.
 *
 * Goal: minimise Firebase reads/writes by caching the entire candidate
 * question pool in localStorage, then random-sampling 15 questions per round
 * without any network call. Stats and selection live in localStorage too;
 * only XP redemption writes back to the student doc.
 *
 * Storage keys (all scoped by uid):
 *   examPrep:v1:<uid>:selection   { years: string[], chapters: string[] }
 *   examPrep:v1:<uid>:pool        { fetchedAt, signature, questions: [] }
 *   examPrep:v1:<uid>:next        Question[]  pre-picked next round
 *   examPrep:v1:<uid>:stats       { sessions, correct, attempted,
 *                                   byTopic: { [topicId]: { title, correct,
 *                                   attempted } } }
 *   examPrep:v1:<uid>:history     Session[]   recent rounds (capped)
 */
import { db } from '../firebase/config';
import { collection, query, where, getDocs, getDoc, doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { addMistakes } from '../utils/secretNote';
import { idbGet, idbSet, idbDel } from '../utils/idbStore';

export const EXAM_PREP_NOTE_KIND = 'exam_prep';

const ROUND_SIZE = 15;
const POOL_TTL_MS = 1000 * 60 * 60 * 6; // 6h — pool refresh
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

// ── Stats (cumulative across all rounds) ──────────────────────────────
const blankStats = () => ({ sessions: 0, correct: 0, attempted: 0, byTopic: {} });

export const getStats = (uid) =>
  safeParse(localStorage.getItem(k(uid, 'stats')), blankStats());

export const resetStats = (uid) => {
  localStorage.removeItem(k(uid, 'stats'));
  localStorage.removeItem(k(uid, 'history'));
  // Mirror the reset to the server so it doesn't re-hydrate stale data.
  persistStateToServer(uid);
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

// ── Cross-device sync (stats + history persisted to Firestore) ─────────
// localStorage stays the fast local cache; Firestore is the canonical store so
// a student's progress follows them across devices/browsers. The doc lives
// under the student's own user document: users/{uid}/examPrep/state.
const stateDocRef = (uid) => doc(db, 'users', uid, 'examPrep', 'state');

// Persist the current local stats + history to Firestore (best-effort).
export const persistStateToServer = async (uid) => {
  if (!uid) return;
  try {
    await setDoc(stateDocRef(uid), {
      stats: getStats(uid),
      history: getHistory(uid),
      updatedAt: serverTimestamp(),
    }, { merge: true });
  } catch (e) {
    console.warn('[examPrep] state persist failed (non-fatal):', e?.message || e);
  }
};

// Pull server-saved stats/history into localStorage so the synchronous getters
// (getStats/getHistory/getTopicAnalysis) return the cross-device values.
// The server is treated as canonical when it has at least as many sessions as
// the local copy — this restores progress on a fresh device while never
// clobbering newer local progress that hasn't been pushed yet.
// Track which uids have already been hydrated this page-load so navigating in
// and out of Exam Prep doesn't re-read the server doc each time. A full page
// reload resets this (module state is cleared), triggering one fresh sync.
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
      return true;
    }
    // Local is ahead (offline rounds not yet pushed) — push it up instead.
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

const loadCachedPool = async (uid, selection) => {
  purgeLegacyLocalStoragePool();
  const cached = await idbGet(k(uid, 'pool'));
  if (!cached) return null;
  if (cached.signature !== signatureFor(selection)) return null;
  if (Date.now() - (cached.fetchedAt || 0) > POOL_TTL_MS) return null;
  return cached.questions || [];
};

const saveCachedPool = async (uid, selection, questions) => {
  await idbSet(k(uid, 'pool'), {
    fetchedAt: Date.now(),
    signature: signatureFor(selection),
    questions,
  });
};

/**
 * Fetch the candidate pool from Firestore once, then cache. Subsequent rounds
 * sample from the local cache for free.
 */
export const ensurePool = async (uid, selection, { force = false } = {}) => {
  if (!force) {
    const cached = await loadCachedPool(uid, selection);
    // Only reuse a NON-empty cached pool. An empty cache (e.g. fetched before
    // the teacher added questions) should fall through to a fresh fetch rather
    // than block rounds until the TTL expires.
    if (cached && cached.length > 0) return cached;
  }
  if (!selection?.chapters?.length) {
    await saveCachedPool(uid, selection, []);
    return [];
  }
  // Firestore `in` is limited to 30. Chunk the chapter list.
  const chunks = [];
  const chapters = selection.chapters;
  for (let i = 0; i < chapters.length; i += 30) chunks.push(chapters.slice(i, i + 30));
  const all = [];
  for (const chunk of chunks) {
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
  // Keep teacher_review / requiresManualGrading questions — they get queued in
  // grading_queue when the student submits, and appear in the teacher's Reports tab.
  // When examPaperOnly is set, restrict to questions sourced from HSC trial papers.
  const usable = all.filter((q) =>
    (!selection.examPaperOnly || Boolean(q.examPaper))
  );
  await saveCachedPool(uid, selection, usable);
  return usable;
};

// ── Random batch picker ────────────────────────────────────────────────
const shuffle = (arr) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

export const pickRound = (pool, n = ROUND_SIZE) => shuffle(pool).slice(0, n);

// ── Pre-fetched "next round" (so the student can start immediately) ────
// Stored in IndexedDB (same reasoning as the pool — can include base64 images).
export const getNextRound = (uid) => idbGet(k(uid, 'next'));

export const stashNextRound = async (uid, questions) => {
  if (!Array.isArray(questions) || questions.length === 0) {
    await idbDel(k(uid, 'next'));
    return;
  }
  // Best-effort — never throws (round is already in-memory).
  await idbSet(k(uid, 'next'), questions);
};

export const consumeNextRound = async (uid) => {
  const next = await getNextRound(uid);
  if (next) await idbDel(k(uid, 'next'));
  return next;
};

/**
 * Get a fresh round to play right now. Reuses the pre-fetched next round
 * (instant start), and as a side-effect re-stashes a brand new next round
 * so the *following* session is also instant.
 */
export const startRound = async (uid, selection) => {
  // Make sure the pool is loaded once. Cheap if already cached.
  let pool = await ensurePool(uid, selection);
  // A previously-cached EMPTY pool (e.g. fetched before the teacher added
  // questions, or after a transient failure) would otherwise block the round
  // for the full cache TTL. If empty, force a fresh fetch before giving up.
  if (pool.length === 0) {
    pool = await ensurePool(uid, selection, { force: true });
  }
  if (pool.length === 0) return { questions: [], pool };

  const stashed = await consumeNextRound(uid);
  const round = (stashed && stashed.length > 0) ? stashed : pickRound(pool);
  // Stash a new "next" round for instant restart after this one finishes.
  // Fire-and-forget — it's a pre-fetch optimisation, not required for this run.
  stashNextRound(uid, pickRound(pool));
  return { questions: round, pool };
};

// ── Result recording + XP ──────────────────────────────────────────────
/**
 * Record the outcome of a finished round. Updates cumulative stats, pushes
 * a history entry, and returns the XP earned (0..10).
 */
export const finishRound = async (uid, results, { questions = [] } = {}) => {
  const stats = getStats(uid);
  stats.sessions += 1;

  let correct = 0;
  const perTopic = {}; // capture this round's per-topic so the UI can show it
  results.forEach((res, i) => {
    const q = questions[i] || {};
    const topicId = q.topicId || q.chapterId || 'unknown';
    const topicTitle = q.topicTitle || q.chapterTitle || 'Untitled topic';

    stats.byTopic[topicId] = stats.byTopic[topicId] || { title: topicTitle, correct: 0, attempted: 0 };
    stats.byTopic[topicId].title = topicTitle;
    stats.byTopic[topicId].attempted += 1;
    perTopic[topicId] = perTopic[topicId] || { title: topicTitle, correct: 0, attempted: 0 };
    perTopic[topicId].title = topicTitle;
    perTopic[topicId].attempted += 1;

    if (res?.correct) {
      stats.byTopic[topicId].correct += 1;
      perTopic[topicId].correct += 1;
      correct += 1;
    }
    stats.attempted += 1;
    stats.correct += correct ? 0 : 0; // tally added below in one go
  });
  // Re-add round correctness in a single pass (the per-iter mutation above
  // intentionally only tracks attempted; correctness is tallied here).
  stats.correct += correct;

  const total = results.length || 1;

  localStorage.setItem(k(uid, 'stats'), JSON.stringify(stats));
  pushHistory(uid, {
    finishedAt: Date.now(),
    total: results.length,
    correct,
    perTopic,
  });

  // Persist the updated stats + history to Firestore so progress follows the
  // student across devices. Best-effort; never blocks the result screen.
  persistStateToServer(uid);

  // Wrong questions roll into the Exam Prep Secret Note deck for review.
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

  // Mirror a compact summary to Firestore so the teacher app can see the
  // student's cumulative topic analysis without reading their device cache.
  if (uid) {
    try {
      await setDoc(doc(db, 'students', uid, 'exam_prep', 'summary'), {
        sessions: stats.sessions,
        attempted: stats.attempted,
        correct: stats.correct,
        byTopic: stats.byTopic,
        lastRound: {
          finishedAt: Date.now(),
          total: results.length,
          correct,
          perTopic,
        },
        updatedAt: serverTimestamp(),
      }, { merge: true });
    } catch (err) {
      console.warn('Exam Prep summary mirror failed:', err);
    }
  }

  return { correct, total: results.length, xp: 0, perTopic, addedToNote };
};

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

export const ROUND_SIZE_CONST = ROUND_SIZE;
