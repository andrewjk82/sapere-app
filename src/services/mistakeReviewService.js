import { getQuestionsByIds } from './contentLoader';
import { toReviewItems } from '../utils/scholarshipTest';
import { specialMissed } from '../utils/mistakeReview';

/**
 * The OC / Selective / Scholarship questions this student missed, ready for the review screen.
 * No Firestore at all: the ids come from the weekly summary already on the student document the page listens to, and
 * the questions from the content CDN.
 */
export const loadMistakes = async ({ specialWeekly }) => {
  const missed = specialMissed(specialWeekly);
  if (!missed.length) return [];
  const { docs } = await getQuestionsByIds(missed.map((m) => m.id));
  const byId = new Map(docs.map((d) => [String(d.id), d]));
  // toReviewItems turns the index answers into the right option's text, which is what the review compares.
  return missed
    .filter((m) => byId.has(String(m.id)))
    .map((m) => ({ ...m, question: toReviewItems([byId.get(String(m.id))], {}).questions[0] }));
};
