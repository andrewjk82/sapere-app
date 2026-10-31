/**
 * "Review the mistakes": the questions a student got wrong, gathered from their records for the teacher to go through
 * one at a time. Two sources:
 *   - Daily Study sessions (daily_stats / calc_stats). The stat document only says WHICH positions were wrong; the
 *     questions and the student's answers sit in its detail snapshot, so only recent sessions that have mistakes are read.
 *   - OC / Selective / Scholarship tests, from the weekly summary (utils/specialWeekly): the ids of missed questions.
 *     The student's chosen answer is not kept for those.
 */
import { weeksForTeacher } from './specialWeekly.js';
import { HUB_PAGES } from './examHub.js';

export const MAX_SESSIONS = 8;
export const MAX_QUESTIONS = 40;

const isWrong = (r) => !!r && typeof r === 'object' && r.correct === false && r.isPending !== true;

/** Newest first: finished sessions whose slim results contain a wrong answer. */
export const sessionsWithMistakes = (stats, max = MAX_SESSIONS) => (stats || [])
  .filter((s) => s && s.abandoned !== true && s.completed !== false && s.hasDetailSnapshot !== false
    && Array.isArray(s.answerResults) && s.answerResults.some(isWrong))
  .slice(0, max);

const sessionLabel = (stat) => `${stat.challengeType === 'calc' || stat.statCollection === 'calc_stats' ? 'Daily Calculation' : 'Daily Practice'} · ${stat.dateLabel || stat.date || ''}`.trim();

/** Wrong answers of one session, from its detail snapshot ({ questions, userAnswers, answerResults }). */
export const mistakesFromDetail = (detail, stat) => {
  const qs = detail?.questions || []; const res = detail?.answerResults || [];
  const out = [];
  res.forEach((r, i) => {
    const result = r && typeof r === 'object' ? r : { correct: r === true || r === 'correct' };
    if (!isWrong(result) || !qs[i]) return;
    out.push({ question: qs[i], userAnswer: detail.userAnswers?.[i] ?? '', result, label: sessionLabel(stat), source: 'session' });
  });
  return out;
};

/** One entry per question (the newest time it was missed first), with how many times it was missed. */
export const mergeMistakes = (entries, max = MAX_QUESTIONS) => {
  const seen = new Map();
  entries.forEach((e) => {
    const key = String(e.question?.id || e.question?.question || '');
    if (!key) return;
    const hit = seen.get(key);
    if (hit) hit.times += 1; else seen.set(key, { ...e, times: 1 });
  });
  return [...seen.values()].slice(0, max);
};

/** Missed OC / Selective / Scholarship question ids from the weekly summaries, newest week first: [{ id, label }]. */
export const specialMissed = (specialWeekly, max = MAX_QUESTIONS) => {
  const out = []; const seen = new Set();
  weeksForTeacher(specialWeekly).forEach((w) => {
    Object.entries(w.exams).forEach(([examId, e]) => {
      (e.wrong || []).forEach((id) => {
        if (seen.has(id) || out.length >= max) return;
        seen.add(id);
        out.push({ id, label: `${HUB_PAGES[examId]?.label || examId} test · week of ${w.weekId}` });
      });
    });
  });
  return out;
};

/** The arrays ChallengeReviewView takes, plus where each question came from (shown as its note). */
export const toReviewArrays = (items) => ({
  questions: items.map((e) => e.question),
  userAnswers: items.map((e) => e.userAnswer ?? ''),
  answerResults: items.map((e) => ({ ...(e.result || {}), correct: false })),
  questionComments: items.map((e) => [e.label, e.times > 1 ? `missed ${e.times} times` : '', e.source === 'special' ? 'the answer was not kept for this one' : ''].filter(Boolean).join(' · ')),
});
