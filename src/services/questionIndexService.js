/**
 * questionIndexService.js
 * ─────────────────────────────────────────────────────────────────────────
 * Per-chapter index of active question IDs (question_index/{chapterId}).
 *
 * Why: the daily assignment used to fetch `limit(100)` per chapter with no
 * orderBy — Firestore returns the same first-100 docs by ID every time, so
 * questions beyond the window were never served. With this index the client
 * reads ONE doc per chapter, samples question IDs uniformly at random
 * (filtering already-seen IDs *before* fetching), then reads only the
 * sampled questions. Truly random coverage of the whole chapter at a
 * fraction of the reads.
 *
 * Consistency model:
 *  - Normal Question Bank CRUD updates the index incrementally AND stamps
 *    question_index/_meta.builtVersion = sync_meta/questions.version.
 *  - Legacy import tools only bump sync_meta/questions — the next admin
 *    session detects the version mismatch and rebuilds all indexes.
 *  - Students only read. A chapter with no index doc falls back to the old
 *    query path, so nothing breaks before the first build.
 * ─────────────────────────────────────────────────────────────────────────
 */

import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  query,
  where,
  writeBatch,
  arrayUnion,
  arrayRemove,
  serverTimestamp,
} from 'firebase/firestore';
import { db } from '../firebase/config';

const INDEX_COLLECTION = 'question_index';
const META_DOC_ID = '_meta';

const indexRef = (chapterId) => doc(db, INDEX_COLLECTION, chapterId);
const metaRef = () => doc(db, INDEX_COLLECTION, META_DOC_ID);
const questionsVersionRef = () => doc(db, 'sync_meta', 'questions');

/** Read a chapter's index. Returns { ids: string[] } or null when absent. */
export const readChapterIndex = async (chapterId) => {
  if (!chapterId) return null;
  try {
    const snap = await getDoc(indexRef(chapterId));
    if (!snap.exists()) return null;
    const ids = snap.data().ids;
    return Array.isArray(ids) ? { ids: ids.map(String) } : null;
  } catch {
    return null; // permission/network — caller falls back to legacy query
  }
};

/** Stamp both version docs so a freshly-synced index isn't flagged stale. */
const stampVersions = async () => {
  const version = Date.now();
  await Promise.all([
    setDoc(questionsVersionRef(), { version, updatedAt: serverTimestamp() }, { merge: true }),
    setDoc(metaRef(), { builtVersion: version, updatedAt: serverTimestamp() }, { merge: true }),
  ]);
};

/** Incremental: a question was created or (re)activated in a chapter. */
export const addQuestionToIndex = async (chapterId, questionId) => {
  if (!chapterId || !questionId) return;
  await setDoc(indexRef(chapterId), {
    ids: arrayUnion(String(questionId)),
    updatedAt: serverTimestamp(),
  }, { merge: true });
  await stampVersions();
};

/** Incremental: a question was deleted or deactivated. */
export const removeQuestionFromIndex = async (chapterId, questionId) => {
  if (!chapterId || !questionId) return;
  await setDoc(indexRef(chapterId), {
    ids: arrayRemove(String(questionId)),
    updatedAt: serverTimestamp(),
  }, { merge: true });
  await stampVersions();
};

/**
 * Incremental: a question was saved. Handles chapter moves (remove from the
 * old chapter's index, add to the new one) and active-flag changes.
 */
export const syncQuestionIndexOnSave = async ({ questionId, chapterId, prevChapterId, isActive = true }) => {
  if (!questionId) return;
  const ops = [];
  if (prevChapterId && prevChapterId !== chapterId) {
    ops.push(setDoc(indexRef(prevChapterId), {
      ids: arrayRemove(String(questionId)),
      updatedAt: serverTimestamp(),
    }, { merge: true }));
  }
  if (chapterId) {
    ops.push(setDoc(indexRef(chapterId), {
      ids: isActive !== false ? arrayUnion(String(questionId)) : arrayRemove(String(questionId)),
      updatedAt: serverTimestamp(),
    }, { merge: true }));
  }
  if (ops.length) {
    await Promise.all(ops);
    await stampVersions();
  }
};

/**
 * Full rebuild: scan the questions collection once, group active question
 * IDs by chapter, and write every index doc. Admin-only (rules). Returns
 * the number of chapters indexed.
 */
export const rebuildAllQuestionIndexes = async () => {
  const snap = await getDocs(collection(db, 'questions'));
  const byChapter = {};
  snap.docs.forEach((d) => {
    const data = d.data();
    if (data.isActive === false) return;
    const chapterId = data.chapterId || (data.examPaper ? `exam:${data.examPaper}` : null);
    if (!chapterId) return;
    if (!byChapter[chapterId]) byChapter[chapterId] = [];
    byChapter[chapterId].push(d.id);
  });

  // Batched writes (500/batch limit)
  const entries = Object.entries(byChapter);
  for (let i = 0; i < entries.length; i += 400) {
    const batch = writeBatch(db);
    entries.slice(i, i + 400).forEach(([chapterId, ids]) => {
      batch.set(indexRef(chapterId), {
        ids,
        count: ids.length,
        updatedAt: serverTimestamp(),
      });
    });
    await batch.commit();
  }
  await stampVersions();
  return entries.length;
};

/** Rebuild a single chapter's index from a fresh chapter scan. */
export const rebuildChapterIndex = async (chapterId) => {
  if (!chapterId) return 0;
  const snap = await getDocs(query(collection(db, 'questions'), where('chapterId', '==', chapterId)));
  const ids = snap.docs.filter((d) => d.data().isActive !== false).map((d) => d.id);
  await setDoc(indexRef(chapterId), { ids, count: ids.length, updatedAt: serverTimestamp() });
  await stampVersions();
  return ids.length;
};

/**
 * Admin session bootstrap: rebuild all indexes iff the question bank changed
 * outside the incremental hooks (legacy import tools bump sync_meta only).
 * Cost when in sync: 2 reads. Cost when stale: one full questions scan.
 */
export const ensureQuestionIndexFresh = async () => {
  try {
    const [versionSnap, metaSnap] = await Promise.all([
      getDoc(questionsVersionRef()),
      getDoc(metaRef()),
    ]);
    const bankVersion = Number(versionSnap.data()?.version) || 0;
    const builtVersion = Number(metaSnap.data()?.builtVersion) || 0;
    if (builtVersion >= bankVersion && metaSnap.exists()) return false;
    const chapters = await rebuildAllQuestionIndexes();
    console.info(`[questionIndex] rebuilt indexes for ${chapters} chapters`);
    return true;
  } catch (err) {
    console.warn('ensureQuestionIndexFresh failed (non-fatal):', err?.code || err);
    return false;
  }
};
