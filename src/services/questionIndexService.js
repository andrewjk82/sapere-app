/**
 * questionIndexService.js
 * ─────────────────────────────────────────────────────────────────────────
 * A chapter's active question IDs, from the published content manifest
 * (/content/, built from content/chapters/*.json). The daily assignment,
 * practice pools and exam prep sample IDs from this, then fetch only the
 * sampled questions.
 *
 * The Firestore `question_index` collection this module used to maintain is
 * retired (the `questions` collection it indexed was deleted 2026-10-26).
 * ─────────────────────────────────────────────────────────────────────────
 */

import { getChapterIndex } from './contentLoader';

/**
 * Read a chapter's index. Returns { ids: string[], updatedAtMs: number } or
 * null when the chapter has no questions (or the content build is unreachable).
 * `updatedAtMs` changes whenever that one chapter's files change.
 */
export const readChapterIndex = async (chapterId) => {
  if (!chapterId) return null;
  try {
    return await getChapterIndex(chapterId);
  } catch {
    return null;
  }
};
