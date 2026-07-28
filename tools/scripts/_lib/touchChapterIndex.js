/**
 * touchChapterIndex.js
 *
 * Cheap, safe way for one-off admin scripts to keep the chapter cache-
 * freshness signal correct after editing `questions` docs directly.
 *
 * Editing a question with the raw admin SDK
 * (db.collection('questions').doc(id).update(...)) bypasses the app's
 * normal index-maintenance path (chapterSeeder.js / questionIndexService.js),
 * so question_index/{chapterId}.updatedAt never moves — students keep
 * seeing their OLD cached copy of that chapter (chapterQuestionsCache keys
 * freshness off that exact field; see src/services/chapterQuestionsCache.js
 * and the 2026-07-28 traffic-spike incident it was written to prevent).
 *
 * This is much cheaper than a full tools/scripts/rebuildQuestionIndexes.js
 * run (which rescans the entire questions collection) when your script only
 * touched a handful of docs in one or two chapters.
 *
 * Contract: NEVER create a question_index doc that doesn't already exist —
 * a fresh doc holding only your edited ids would hide every other question
 * in that chapter from every reader that trusts an existing doc completely
 * (same rule questionIndexService.updateIndexIfExists follows). If the
 * chapter has no index doc yet, this is a no-op — run
 * rebuildQuestionIndexes.js for that chapter instead.
 *
 * Usage — after your script's writes, once per chapter touched:
 *   import { touchChapterIndex } from './_lib/touchChapterIndex.js';
 *   await touchChapterIndex(db, 'y10-8');
 *
 * Only bumps `updatedAt` (the content-freshness signal). It does NOT touch
 * `ids`/`count`, so it never needs to know what you added or removed — if
 * your script also changed which questions are active/assigned to the
 * chapter (not just their text/options/steps), run rebuildQuestionIndexes.js
 * instead so `ids` stays correct too.
 */

/** @returns {Promise<boolean>} true if the chapter's index doc was touched. */
export async function touchChapterIndex(db, chapterId) {
  if (!chapterId) return false;
  const ref = db.collection('question_index').doc(chapterId);
  const snap = await ref.get();
  if (!snap.exists) return false; // no index doc yet — nothing to touch, don't create one
  await ref.update({ updatedAt: new Date() });
  return true;
}

/** Touch several chapters at once; returns the ids that were actually touched. */
export async function touchChapterIndexes(db, chapterIds) {
  const unique = [...new Set((chapterIds || []).filter(Boolean))];
  const touched = await Promise.all(unique.map(async (id) => ((await touchChapterIndex(db, id)) ? id : null)));
  return touched.filter(Boolean);
}
