/**
 * questionCountsService.js
 * ─────────────────────────────────────────────────────────────────────────
 * Aggregated question counts in ONE Firestore doc: sync_meta/question_counts
 *   { counts: { [chapterId|topicId]: number }, version, updatedAt }
 *
 * Why: the admin Curriculum page used to fire ~1,600 getCountFromServer
 * aggregation queries (every chapter + topic across all years) on every
 * cache miss — and the cache was invalidated by EVERY question add/edit/
 * delete via sync_meta/questions.version. A single editing session could
 * burn tens of thousands of reads (the daily Spark quota is 50k).
 *
 * New model:
 *  - Readers fetch this one doc (1 read) and cache it in localStorage.
 *  - Write paths keep it in sync incrementally:
 *      · QuestionBank create/delete → applyCountDeltas (+1/−1 per id)
 *      · QuestionBank edit          → stampCountsVersion (counts unchanged)
 *      · Chapter seeder             → recountIds for the affected ids only
 *  - If a legacy path bumps sync_meta/questions without updating this doc,
 *    the Curriculum page falls back to ONE full aggregation rebuild and
 *    writes the result back here, so every other admin session reuses it.
 * ─────────────────────────────────────────────────────────────────────────
 */

import {
  collection,
  doc,
  getDoc,
  setDoc,
  query,
  where,
  increment,
  serverTimestamp,
  getCountFromServer,
} from 'firebase/firestore';
import { db } from '../firebase/config';

const countsRef = () => doc(db, 'sync_meta', 'question_counts');

/** Read the aggregate counts doc. Returns { counts, version } or null. */
export const readAggregatedCounts = async () => {
  try {
    const snap = await getDoc(countsRef());
    if (!snap.exists()) return null;
    const data = snap.data() || {};
    return {
      counts: data.counts && typeof data.counts === 'object' ? data.counts : {},
      version: Number(data.version) || 0,
    };
  } catch {
    return null; // permission/offline — caller falls back
  }
};

/** Replace the whole counts map (used after a full rebuild). */
export const writeAggregatedCounts = async (counts, version) => {
  await setDoc(countsRef(), {
    counts,
    version: Number(version) || Date.now(),
    updatedAt: serverTimestamp(),
  });
};

/**
 * Incremental update: deltas = { [id]: +1 | -1 | n }. Stamps the version so
 * readers know the doc reflects the same state as sync_meta/questions.
 * Non-fatal: count drift self-heals on the next full rebuild.
 */
export const applyCountDeltas = async (deltas, version) => {
  const entries = Object.entries(deltas || {}).filter(([id, d]) => id && d);
  const payload = {
    version: Number(version) || Date.now(),
    updatedAt: serverTimestamp(),
  };
  if (entries.length > 0) {
    payload.counts = Object.fromEntries(entries.map(([id, d]) => [id, increment(d)]));
  }
  try {
    await setDoc(countsRef(), payload, { merge: true });
  } catch (err) {
    console.warn('question_counts delta update failed (non-fatal):', err?.code || err);
  }
};

/** Edits don't change counts — just keep the version stamp in sync. */
export const stampCountsVersion = (version) => applyCountDeltas({}, version);

/**
 * Exact re-count for a small set of ids (e.g. after seeding a chapter):
 * one aggregation query per id, written into the aggregate doc with merge.
 */
export const recountIds = async ({ chapterIds = [], topicIds = [], version }) => {
  const counts = {};
  const run = async (ids, field) => {
    await Promise.all([...new Set(ids)].filter(Boolean).map(async (id) => {
      try {
        const snap = await getCountFromServer(
          query(collection(db, 'questions'), where(field, '==', id))
        );
        counts[id] = snap.data().count || 0;
      } catch { /* leave unset — old value stays */ }
    }));
  };
  await run(chapterIds, 'chapterId');
  await run(topicIds, 'topicId');
  try {
    await setDoc(countsRef(), {
      counts,
      version: Number(version) || Date.now(),
      updatedAt: serverTimestamp(),
    }, { merge: true });
  } catch (err) {
    console.warn('question_counts recount write failed (non-fatal):', err?.code || err);
  }
  return counts;
};
