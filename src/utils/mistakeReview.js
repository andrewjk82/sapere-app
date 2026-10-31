/**
 * "Review the mistakes" (teacher): the OC / Selective / Scholarship questions a student got wrong, gathered for the
 * teacher to go through one at a time. Source: the weekly summary the student's device sends (utils/specialWeekly),
 * which lists the ids of missed questions per exam. The student's chosen answer is not kept for those, and Daily
 * Study sessions are not part of this review.
 */
import { weeksForTeacher } from './specialWeekly.js';
import { HUB_PAGES } from './examHub.js';

export const MAX_QUESTIONS = 40;

/** Missed question ids from the weekly summaries, newest week first, each id once: [{ id, label, times }]. */
export const specialMissed = (specialWeekly, max = MAX_QUESTIONS) => {
  const byId = new Map();
  weeksForTeacher(specialWeekly).forEach((w) => {
    Object.entries(w.exams).forEach(([examId, e]) => {
      (e.wrong || []).forEach((id) => {
        const hit = byId.get(id);
        if (hit) { hit.times += 1; return; }
        if (byId.size < max) byId.set(id, { id, label: `${HUB_PAGES[examId]?.label || examId} test · week of ${w.weekId}`, times: 1 });
      });
    });
  });
  return [...byId.values()];
};

/** The arrays ChallengeReviewView takes; each question's note says which test and week it was missed in. */
export const toReviewArrays = (items) => ({
  questions: items.map((e) => e.question),
  userAnswers: items.map(() => ''),
  answerResults: items.map(() => ({ correct: false })),
  questionComments: items.map((e) => [e.label, e.times > 1 ? `missed in ${e.times} weeks` : '', 'the answer was not kept for this one'].filter(Boolean).join(' · ')),
});
