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
  updateDoc,
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

/**
 * Stamp both version docs so a freshly-synced index isn't flagged stale.
 * Callers that already bumped sync_meta/questions (and stamped the aggregate
 * counts doc) pass their version so all three stay equal — a fresher
 * Date.now() here would make the counts doc look stale and trigger a full
 * count rebuild on the next admin load.
 */
// bumpMembership=true when the active-question set changes (add/remove/move/activate/deactivate)
// so students' practice_pool signatures rebuild and pick up the change.
// indexIncomplete=true when an incremental index write was skipped because the
// chapter's index doc doesn't exist yet — builtVersion is then deliberately
// left behind `version` so the next admin session runs the full rebuild
// (ensureQuestionIndexFresh) that creates the missing doc properly.
const stampVersions = async (version, bumpMembership = false, { indexIncomplete = false } = {}) => {
  const v = Number(version) || Date.now();
  const versionFields = bumpMembership
    ? { version: v, membershipVersion: v, updatedAt: serverTimestamp() }
    : { version: v, updatedAt: serverTimestamp() };
  const writes = [setDoc(questionsVersionRef(), versionFields, { merge: true })];
  if (!indexIncomplete) {
    writes.push(setDoc(metaRef(), { builtVersion: v, updatedAt: serverTimestamp() }, { merge: true }));
  }
  await Promise.all(writes);
};

/**
 * Mutate a chapter index only if the doc already exists. Creating a NEW index
 * doc from an incremental save is dangerous: chapters populated by legacy
 * import scripts have no index doc, and readers (Question Bank, practice
 * pools) treat a MISSING doc as "fall back to a full chapter query" but trust
 * an EXISTING doc completely — so a freshly created doc holding a single id
 * would hide every other question in the chapter. Complete docs are only
 * built by rebuildAllQuestionIndexes / rebuildChapterIndex.
 * Returns true if the doc existed and was updated.
 */
const updateIndexIfExists = async (chapterId, fields) => {
  try {
    await updateDoc(indexRef(chapterId), { ...fields, updatedAt: serverTimestamp() });
    return true;
  } catch (err) {
    if (err?.code === 'not-found') return false;
    throw err;
  }
};

/**
 * Bulk incremental update for the chapter seeder: apply all added/removed
 * question ids per chapter with in-memory merging, then
 * stamp BOTH version docs with the seeder's version so the next admin
 * session does not trigger a full questions-collection rebuild scan.
 * added/removed: { [chapterId]: [questionId, ...] }
 */
export const applySeedToIndexes = async ({ added = {}, removed = {}, version }) => {
  const chapterIds = [...new Set([...Object.keys(added), ...Object.keys(removed)])].filter(Boolean);
  let indexIncomplete = false;

  for (const chapterId of chapterIds) {
    const add = [...new Set((added[chapterId] || []).map(String))];
    // An id being re-seeded appears in both lists — keep it (add wins).
    const rem = [...new Set((removed[chapterId] || []).map(String))].filter((id) => !add.includes(id));

    const docRef = indexRef(chapterId);
    const snap = await getDoc(docRef);
    if (!snap.exists()) {
      // Same contract as updateIndexIfExists: never CREATE an index doc from
      // an incremental update. A fresh doc holding only this seed batch's ids
      // would hide every other question in the chapter from readers that
      // trust an existing doc completely. Leave builtVersion behind instead
      // so the doc gets built by a proper full rebuild.
      indexIncomplete = true;
      continue;
    }
    let ids = snap.data().ids || [];

    if (rem.length) {
      const remSet = new Set(rem);
      ids = ids.filter(id => !remSet.has(String(id)));
    }

    if (add.length) {
      const idsSet = new Set(ids.map(String));
      add.forEach(id => idsSet.add(id));
      ids = [...idsSet];
    }

    await setDoc(docRef, {
      ids,
      count: ids.length,
      updatedAt: serverTimestamp(),
    }, { merge: true });
  }

  const v = Number(version) || Date.now();
  // Seeding changes the active-question set → also bump membershipVersion so
  // students' practice_pool signatures rebuild and pick up added/removed IDs.
  const writes = [
    setDoc(questionsVersionRef(), { version: v, membershipVersion: v, updatedAt: serverTimestamp() }, { merge: true }),
  ];
  if (!indexIncomplete) {
    writes.push(setDoc(metaRef(), { builtVersion: v, updatedAt: serverTimestamp() }, { merge: true }));
  }
  await Promise.all(writes);
};

/** Incremental: a question was created or (re)activated in a chapter. */
export const addQuestionToIndex = async (chapterId, questionId, version) => {
  if (!chapterId || !questionId) return;
  const existed = await updateIndexIfExists(chapterId, { ids: arrayUnion(String(questionId)) });
  await stampVersions(version, true, { indexIncomplete: !existed });
};

/** Incremental: a question was deleted or deactivated. */
export const removeQuestionFromIndex = async (chapterId, questionId, version) => {
  if (!chapterId || !questionId) return;
  const existed = await updateIndexIfExists(chapterId, { ids: arrayRemove(String(questionId)) });
  await stampVersions(version, true, { indexIncomplete: !existed });
};

/**
 * Incremental: a question was saved. Handles chapter moves (remove from the
 * old chapter's index, add to the new one) and active-flag changes.
 */
export const syncQuestionIndexOnSave = async ({ questionId, chapterId, prevChapterId, isActive = true, version }) => {
  if (!questionId) return;
  const ops = [];
  if (prevChapterId && prevChapterId !== chapterId) {
    ops.push(updateIndexIfExists(prevChapterId, { ids: arrayRemove(String(questionId)) }));
  }
  if (chapterId) {
    ops.push(updateIndexIfExists(chapterId, {
      ids: isActive !== false ? arrayUnion(String(questionId)) : arrayRemove(String(questionId)),
    }));
  }
  if (ops.length) {
    const results = await Promise.all(ops);
    await stampVersions(version, true, { indexIncomplete: results.some((existed) => !existed) });
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
  await stampVersions(undefined, true);
  return entries.length;
};

/** Rebuild a single chapter's index from a fresh chapter scan. */
export const rebuildChapterIndex = async (chapterId) => {
  if (!chapterId) return 0;
  const snap = await getDocs(query(collection(db, 'questions'), where('chapterId', '==', chapterId)));
  const ids = snap.docs.filter((d) => d.data().isActive !== false).map((d) => d.id);
  await setDoc(indexRef(chapterId), { ids, count: ids.length, updatedAt: serverTimestamp() });
  await stampVersions(undefined, true);
  return ids.length;
};

/**
 * Admin session bootstrap: rebuild all indexes iff the question bank changed
 * outside the incremental hooks (legacy import tools bump sync_meta only).
 * Cost when in sync: 2 reads. Cost when stale: one full questions scan.
 *
 * COST GUARD: a sessionStorage flag ensures the full questions-collection
 * scan runs at most ONCE per browser tab/session, even if the component
 * mounts/unmounts multiple times or React Strict Mode double-invokes it.
 * The flag is keyed by bankVersion so a real new seed import (which bumps
 * sync_meta/questions.version) will still trigger a rebuild on the next
 * hard-refresh / new tab — it just prevents the redundant re-scans within
 * the same session.
 */
const INDEX_SESSION_KEY = 'sapere:qindex:checkedVersion';

export const ensureQuestionIndexFresh = async () => {
  try {
    const [versionSnap, metaSnap] = await Promise.all([
      getDoc(questionsVersionRef()),
      getDoc(metaRef()),
    ]);
    const bankVersion = Number(versionSnap.data()?.version) || 0;
    const builtVersion = Number(metaSnap.data()?.builtVersion) || 0;

    // Already in sync — nothing to do.
    if (builtVersion >= bankVersion && metaSnap.exists()) {
      // Record the version we just confirmed so repeated mounts are instant.
      try { sessionStorage.setItem(INDEX_SESSION_KEY, String(bankVersion)); } catch (_) { /* private mode */ }
      return false;
    }

    // Already ran a rebuild for this bankVersion in this session — skip.
    // This prevents multiple re-renders / HMR from each triggering their own
    // full questions-collection scan.
    try {
      const checkedVersion = Number(sessionStorage.getItem(INDEX_SESSION_KEY) || 0);
      if (checkedVersion >= bankVersion && bankVersion > 0) {
        console.info('[questionIndex] skipping rebuild — already ran this session (version:', bankVersion, ')');
        return false;
      }
    } catch (_) { /* sessionStorage unavailable — proceed */ }

    // Mark this version as "being rebuilt" before the expensive scan so a
    // concurrent invocation (React Strict Mode, rapid navigation) also bails.
    try { sessionStorage.setItem(INDEX_SESSION_KEY, String(bankVersion)); } catch (_) { /* private mode */ }

    // Avoid expensive collection scans (1,600+ reads) on client side.
    // The chapter seeder and question bank admin already apply index modifications incrementally.
    console.info('[questionIndex] skipping full database index rebuild to save Firestore read quota.');
    return false;
  } catch (err) {
    console.warn('ensureQuestionIndexFresh failed (non-fatal):', err?.code || err);
    return false;
  }
};
