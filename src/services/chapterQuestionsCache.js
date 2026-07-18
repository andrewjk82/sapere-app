/**
 * chapterQuestionsCache.js
 *
 * Caches question objects locally so TopicPractice never re-hits Firestore
 * for a chapter/topic it has already downloaded at the current bank version.
 *
 * Traffic model (P1):
 *   - Topic practice: 1 topic-index read + N question docs (topic size only)
 *   - Full chapter:   1 chapter-index read + N question docs (when needed)
 *   - Cache hit:      0 reads (after 1 session version check)
 *   - Prefetch:       at most 1 chapter, skipped if already cached
 */

import {
  collection, query, where, getDoc, doc,
} from '../firebase/firestoreWrapper';
import {
  getDocs as getDocsRaw,
  getDoc as getDocRaw,
  documentId,
} from 'firebase/firestore';
import { db } from '../firebase/config';
import { trackRead } from './trafficTrackerService';
import { readChapterIndex } from './questionIndexService';

const CACHE_PREFIX = 'sapere:qcache';
const TOPIC_CACHE_PREFIX = 'sapere:tqcache';
const SESSION_VERSION_KEY = 'sapere:qcache:membershipVersion';
const IN_QUERY_LIMIT = 30;

/** Fields to keep in cache. Omits server-only metadata to save space. */
const KEEP_FIELDS = [
  'id', 'question', 'options', 'answer', 'type', 'topicId', 'chapterId',
  'examPaper', 'isActive', 'blanks', 'subQuestions', 'acceptedAnswers',
  'hint', 'solution', 'solutionSteps', 'solutionImage', 'questionImage', 'marks',
  'difficulty', 'source', 'graphData', 'timeLimit', 'requiresManualGrading',
];

const stripQuestion = (q) => {
  const out = {};
  KEEP_FIELDS.forEach((k) => { if (k in q) out[k] = q[k]; });
  return out;
};

const cacheKey = (uid, chapterId) => `${CACHE_PREFIX}:${uid}:${chapterId}`;
const topicCacheKey = (uid, chapterId, topicId) =>
  `${TOPIC_CACHE_PREFIX}:${uid}:${chapterId}:${topicId}`;

/** Read the confirmed remote content version for this session (sessionStorage). */
const getSessionVersion = () => {
  try { return Number(sessionStorage.getItem(SESSION_VERSION_KEY) || 0); } catch { return 0; }
};
const setSessionVersion = (v) => {
  try { sessionStorage.setItem(SESSION_VERSION_KEY, String(v)); } catch { /* private mode */ }
};

/**
 * Fetch sync_meta/questions.version from Firestore (1 read).
 * Keyed on content `version` so option/text edits invalidate caches.
 */
export const fetchRemoteMembershipVersion = async () => {
  try {
    const snap = await getDoc(doc(db, 'sync_meta', 'questions'));
    trackRead(1, 'version_meta');
    return Number(snap.data()?.version || snap.data()?.membershipVersion || 0);
  } catch {
    return 0;
  }
};

export const getConfirmedMembershipVersion = async (forceRefresh = false) => {
  if (!forceRefresh) {
    const cached = getSessionVersion();
    if (cached > 0) return cached;
  }
  const v = await fetchRemoteMembershipVersion();
  if (v > 0) setSessionVersion(v);
  return v;
};

const readCacheEntry = (key, confirmedVersion) => {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    const entry = JSON.parse(raw);
    if (!Array.isArray(entry?.questions)) return null;
    if (confirmedVersion > 0 && entry.membershipVersion !== confirmedVersion) return null;
    return entry.questions;
  } catch {
    return null;
  }
};

const writeCacheEntry = (key, questions, membershipVersion) => {
  try {
    const entry = { questions: questions.map(stripQuestion), membershipVersion, savedAt: Date.now() };
    localStorage.setItem(key, JSON.stringify(entry));
  } catch {
    /* localStorage full */
  }
};

/** Batched documentId-in fetches (max 30 per query). */
const fetchQuestionsByIds = async (ids, trackTag) => {
  const unique = [...new Set((ids || []).map(String).filter(Boolean))];
  if (!unique.length) return [];
  const batches = [];
  for (let i = 0; i < unique.length; i += IN_QUERY_LIMIT) {
    batches.push(unique.slice(i, i + IN_QUERY_LIMIT));
  }
  const snaps = await Promise.all(
    batches.map((batch) => getDocsRaw(
      query(collection(db, 'questions'), where(documentId(), 'in', batch)),
    )),
  );
  const docs = snaps.flatMap((snap) => snap.docs.map((d) => ({ id: d.id, ...d.data() })));
  trackRead(docs.length || 1, trackTag);
  return docs.filter((q) => q.isActive !== false);
};

/** Full chapter via question_index (preferred) or legacy chapterId query. */
const fetchChapterFromFirestore = async (chapterId) => {
  const isExam = chapterId?.startsWith('exam:');
  if (!isExam) {
    try {
      const index = await readChapterIndex(chapterId);
      if (index?.ids?.length) {
        trackRead(1, `question_index:${chapterId}`);
        return fetchQuestionsByIds(index.ids, `questions_by_id:${chapterId}`);
      }
    } catch {
      /* fall through */
    }
  }

  const examPaperKey = isExam ? chapterId.replace('exam:', '') : null;
  const snap = await getDocsRaw(
    isExam
      ? query(collection(db, 'questions'), where('examPaper', '==', examPaperKey))
      : query(collection(db, 'questions'), where('chapterId', '==', chapterId)),
  );
  trackRead(snap.size || 1, `questions_fetch:${chapterId}`);
  return snap.docs
    .map((d) => ({ id: d.id, ...d.data() }))
    .filter((q) => q.isActive !== false);
};

/**
 * Topic-scoped load: question_topic_index/{topicId} + ID batch gets.
 * Typical cost: 1 + ceil(topicSize/30) reads instead of entire chapter.
 */
const fetchTopicFromFirestore = async (chapterId, topicId) => {
  if (!topicId) return fetchChapterFromFirestore(chapterId);

  try {
    const topicSnap = await getDocRaw(doc(db, 'question_topic_index', topicId));
    trackRead(1, `topic_index:${topicId}`);
    if (topicSnap.exists()) {
      const data = topicSnap.data() || {};
      const ids = Array.isArray(data.ids) ? data.ids.map(String) : [];
      // If index is for a different chapter, ignore and fall back.
      if (!data.chapterId || String(data.chapterId) === String(chapterId)) {
        if (ids.length) {
          return fetchQuestionsByIds(ids, `questions_topic:${topicId}`);
        }
      }
    }
  } catch {
    /* fall through to chapter + filter */
  }

  // Fallback: load chapter (cached path) then filter client-side.
  const all = await fetchChapterFromFirestore(chapterId);
  return all.filter((q) => String(q.topicId || '') === String(topicId));
};

/**
 * Full chapter questions (cached). Prefer getTopicQuestions for practice.
 */
export const getChapterQuestions = async (uid, chapterId) => {
  const remoteVersion = await getConfirmedMembershipVersion();
  const key = cacheKey(uid || 'anon', chapterId);
  const cached = readCacheEntry(key, remoteVersion);
  if (cached) return cached;

  const questions = await fetchChapterFromFirestore(chapterId);
  writeCacheEntry(key, questions, remoteVersion);
  return questions;
};

/**
 * Topic practice entry point — only the topic's questions.
 */
export const getTopicQuestions = async (uid, chapterId, topicId) => {
  if (!topicId) return getChapterQuestions(uid, chapterId);

  const remoteVersion = await getConfirmedMembershipVersion();
  const key = topicCacheKey(uid || 'anon', chapterId, topicId);
  const cached = readCacheEntry(key, remoteVersion);
  if (cached) return cached;

  // Reuse full-chapter cache if present (filter free).
  const chapterCached = readCacheEntry(cacheKey(uid || 'anon', chapterId), remoteVersion);
  if (chapterCached) {
    const filtered = chapterCached.filter((q) => String(q.topicId || '') === String(topicId));
    writeCacheEntry(key, filtered, remoteVersion);
    return filtered;
  }

  const questions = await fetchTopicFromFirestore(chapterId, topicId);
  writeCacheEntry(key, questions, remoteVersion);
  return questions;
};

/**
 * Best-effort pre-warm. P1: only the first uncached chapter, never a fan-out
 * across the whole curriculum (was a spike amplifier after version bumps).
 */
export const prefetchChapterQuestions = async (uid, chapterIds) => {
  if (!uid || !chapterIds?.length) return;
  const remoteVersion = await getConfirmedMembershipVersion();
  const first = chapterIds.find((chapterId) => !readCacheEntry(cacheKey(uid, chapterId), remoteVersion));
  if (!first) return;
  try {
    const questions = await fetchChapterFromFirestore(first);
    writeCacheEntry(cacheKey(uid, first), questions, remoteVersion);
  } catch {
    /* non-fatal */
  }
};

export const invalidateAllChapterCaches = (uid) => {
  if (!uid) return;
  const prefixes = [
    `${CACHE_PREFIX}:${uid}:`,
    `${TOPIC_CACHE_PREFIX}:${uid}:`,
  ];
  try {
    const toRemove = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && prefixes.some((p) => key.startsWith(p))) toRemove.push(key);
    }
    toRemove.forEach((k) => localStorage.removeItem(k));
  } catch { /* ignore */ }
  try { sessionStorage.removeItem(SESSION_VERSION_KEY); } catch { /* ignore */ }
};
