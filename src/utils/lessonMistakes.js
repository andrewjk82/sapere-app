// "Check the mistake" in the next lesson: the questions the teacher marked ✗ / ½ when
// checking homework, offered again in the student's next lesson to redo together.
//
// Costs nothing extra: the marks are already on each session doc (homeworkMarks, written
// when the homework is checked) and the teacher's Schedule already has those sessions in
// memory. The only write is "Done together" (homeworkMistakesReviewedAt on that homework's
// session), so the button disappears on every device. Pure — testable in node.

import { isWrongMark } from './homeworkRedo.js';

export const LESSON_MISTAKES_MAX_AGE_DAYS = 60;
export const MISTAKES_REVIEWED_FIELD = 'homeworkMistakesReviewedAt';
const DAY_MS = 24 * 60 * 60 * 1000;

const dayKey = (date) => {
  const pad = (n) => String(n).padStart(2, '0');
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
};

const daysBefore = (dateKey, days) => {
  const [y, m, d] = String(dateKey).split('-').map(Number);
  if (!y || !m || !d) return '';
  return dayKey(new Date(new Date(y, m - 1, d).getTime() - days * DAY_MS));
};

const fmt = (n) => (Number.isInteger(n) ? String(n) : Number(n).toFixed(1));

// One checked homework as the redo screen's item, or null when nothing was wrong.
export const mistakeItemFromSession = (session) => {
  const marks = Object.fromEntries(Object.entries(session?.homeworkMarks || {}).filter(([, m]) => isWrongMark(m)));
  if (!session?.id || Object.keys(marks).length === 0) return null;
  const score = Number(session.homeworkScore);
  const total = Number(session.homeworkTotal);
  return {
    sessionId: session.id,
    date: session.date || '',
    topics: (Array.isArray(session.learnedTopics) ? session.learnedTopics : [])
      .map((t) => ({ id: t?.id || '', label: t?.label || t?.title || t?.id || '' }))
      .filter((t) => t.id),
    marks,
    mark: session.homeworkScore != null && total > 0 ? `${fmt(score)}/${total}` : '',
    comment: String(session.homeworkComment || '').trim(),
  };
};

// The student's homework with ✗ / ½ from EARLIER lessons (not this lesson's own), within
// LESSON_MISTAKES_MAX_AGE_DAYS, not yet marked "Done together". Newest first.
export const mistakesForLesson = (sessions = [], { studentId, lessonDate } = {}) => {
  if (!studentId || !lessonDate) return [];
  const oldest = daysBefore(lessonDate, LESSON_MISTAKES_MAX_AGE_DAYS);
  return (Array.isArray(sessions) ? sessions : [])
    .filter((s) => s?.studentId === studentId && s.date && s.date < lessonDate && s.date >= oldest && !s[MISTAKES_REVIEWED_FIELD])
    .map(mistakeItemFromSession)
    .filter(Boolean)
    .sort((a, b) => b.date.localeCompare(a.date));
};
