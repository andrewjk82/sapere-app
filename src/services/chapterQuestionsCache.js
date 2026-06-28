/**
 * chapterQuestionsCache.js
 *
 * Caches chapter question objects locally so TopicPracticeSession never hits
 * Firestore for a chapter it has already downloaded.
 *
 * Cache key:   sapere:qcache:{uid}:{chapterId}
 * Cache value: { questions: [...], membershipVersion: N, savedAt: T }
 *
 * Invalidation: compare local membershipVersion against
 * sync_meta/questions.membershipVersion (1 read per app session, stored in
 * sessionStorage so repeated navigation is free).
 *
 * Traffic model:
 *   - First visit to a chapter:  1 meta read + chapter questions read
 *   - Subsequent visits (same session):  0 reads (version already confirmed)
 *   - New session with unchanged questions: 1 meta read → cache hit
 *   - After teacher adds/removes questions: 1 meta read → version mismatch → re-fetch
 */

import {
  collection, query, where, getDocs, getDoc, doc,
} from 'firebase/firestore';
import { db } from '../firebase/config';

const CACHE_PREFIX = 'sapere:qcache';
const SESSION_VERSION_KEY = 'sapere:qcache:membershipVersion';

/** Fields to keep in cache. Omits server-only metadata to save space. */
const KEEP_FIELDS = [
  'id', 'question', 'options', 'answer', 'type', 'topicId', 'chapterId',
  'examPaper', 'isActive', 'blanks', 'subQuestions', 'acceptedAnswers',
  'hint', 'solution', 'solutionImage', 'questionImage', 'marks',
  'difficulty', 'source',
];

const stripQuestion = (q) => {
  const out = {};
  KEEP_FIELDS.forEach((k) => { if (k in q) out[k] = q[k]; });
  return out;
};

const cacheKey = (uid, chapterId) => `${CACHE_PREFIX}:${uid}:${chapterId}`;

/** Read the confirmed remote membershipVersion for this session (sessionStorage). */
const getSessionVersion = () => {
  try { return Number(sessionStorage.getItem(SESSION_VERSION_KEY) || 0); } catch { return 0; }
};
const setSessionVersion = (v) => {
  try { sessionStorage.setItem(SESSION_VERSION_KEY, String(v)); } catch { /* private mode */ }
};

/**
 * Fetch sync_meta/questions.version from Firestore (1 read).
 *
 * We key the cache on `version` (the CONTENT version) rather than
 * `membershipVersion`. `version` bumps on *any* question change — including a
 * pure content edit such as fixing a question's answer options — whereas
 * `membershipVersion` only bumps when the active-question SET changes
 * (add/remove/move). Keying on content version guarantees students always
 * refetch after a teacher edits question text/options, not just when questions
 * are added or removed. In steady state (no edits) `version` is stable, so the
 * cache still serves zero-read hits.
 */
export const fetchRemoteMembershipVersion = async () => {
  try {
    const snap = await getDoc(doc(db, 'sync_meta', 'questions'));
    return Number(snap.data()?.version || snap.data()?.membershipVersion || 0);
  } catch {
    return 0;
  }
};

/**
 * Get the confirmed remote membershipVersion.
 * Uses sessionStorage so we only hit Firestore once per browser tab.
 * Pass forceRefresh=true to re-read (e.g. after a teacher update).
 */
export const getConfirmedMembershipVersion = async (forceRefresh = false) => {
  if (!forceRefresh) {
    const cached = getSessionVersion();
    if (cached > 0) return cached;
  }
  const v = await fetchRemoteMembershipVersion();
  if (v > 0) setSessionVersion(v);
  return v;
};

/** Read the cached question list for a chapter. Returns null on miss or stale. */
const readCache = (uid, chapterId, confirmedVersion) => {
  try {
    const raw = localStorage.getItem(cacheKey(uid, chapterId));
    if (!raw) return null;
    const entry = JSON.parse(raw);
    if (!Array.isArray(entry?.questions)) return null;
    // If we have a confirmed remote version and it differs, cache is stale.
    if (confirmedVersion > 0 && entry.membershipVersion !== confirmedVersion) return null;
    return entry.questions;
  } catch {
    return null;
  }
};

/** Write question list to localStorage cache. Non-fatal on quota exceeded. */
const writeCache = (uid, chapterId, questions, membershipVersion) => {
  try {
    const entry = { questions: questions.map(stripQuestion), membershipVersion, savedAt: Date.now() };
    localStorage.setItem(cacheKey(uid, chapterId), JSON.stringify(entry));
  } catch {
    /* localStorage full — skip cache, Firestore remains source of truth */
  }
};

/** Fetch all active questions for a chapter from Firestore. */
const fetchFromFirestore = async (chapterId) => {
  const isExam = chapterId?.startsWith('exam:');
  const examPaperKey = isExam ? chapterId.replace('exam:', '') : null;
  const snap = await getDocs(
    isExam
      ? query(collection(db, 'questions'), where('examPaper', '==', examPaperKey))
      : query(collection(db, 'questions'), where('chapterId', '==', chapterId)),
  );
  return snap.docs
    .map((d) => ({ id: d.id, ...d.data() }))
    .filter((q) => q.isActive !== false);
};

/**
 * Main entry point for TopicPracticeSession.
 *
 * Returns all active questions for the chapter, using cache when valid.
 * Flow:
 *   1. Check sessionStorage for confirmed membershipVersion (0 reads if already done)
 *   2. If not known yet, fetch from sync_meta/questions (1 read)
 *   3. If cache exists and version matches → return cache (0 reads)
 *   4. Otherwise fetch from questions collection and store in cache
 */
export const getChapterQuestions = async (uid, chapterId) => {
  const remoteVersion = await getConfirmedMembershipVersion();
  const cached = readCache(uid, chapterId, remoteVersion);
  if (cached) return cached;

  const questions = await fetchFromFirestore(chapterId);
  writeCache(uid, chapterId, questions, remoteVersion);
  return questions;
};

/**
 * Pre-fetch and cache question for a list of chapterIds in the background.
 * Called by LearningPath when the student's assigned chapters are known.
 * Errors are silently swallowed — this is best-effort pre-warming.
 */
export const prefetchChapterQuestions = async (uid, chapterIds) => {
  if (!uid || !chapterIds?.length) return;
  const remoteVersion = await getConfirmedMembershipVersion();

  for (const chapterId of chapterIds) {
    // Skip if already cached at the current version
    if (readCache(uid, chapterId, remoteVersion)) continue;
    try {
      const questions = await fetchFromFirestore(chapterId);
      writeCache(uid, chapterId, questions, remoteVersion);
    } catch {
      /* non-fatal — student will fetch on first topic open */
    }
  }
};

/**
 * Invalidate all cached chapters for a user (call after confirmed version bump).
 * Leaves topic-progress (sapere:tp:*) keys untouched.
 */
export const invalidateAllChapterCaches = (uid) => {
  if (!uid) return;
  const prefix = `${CACHE_PREFIX}:${uid}:`;
  try {
    const toRemove = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key?.startsWith(prefix)) toRemove.push(key);
    }
    toRemove.forEach((k) => localStorage.removeItem(k));
  } catch { /* ignore */ }
  // Also clear the session-level version so the next read re-confirms
  try { sessionStorage.removeItem(SESSION_VERSION_KEY); } catch { /* ignore */ }
};
