// Missed OC / Selective / Scholarship questions of the students in a lesson, from `specialWeekly` on their profile
// (utils/specialWeekly). Oldest first. "Reviewed together" is remembered on the teacher's device only (no writes).
import { weeksForTeacher } from './specialWeekly';

const doneKey = (studentId) => `sapere:examReviewed:v1:${studentId}`;
export const readReviewed = (studentId) => {
  try { return new Set(JSON.parse(localStorage.getItem(doneKey(studentId)) || '[]')); } catch { return new Set(); }
};
export const markReviewed = (studentId, questionId) => {
  const set = readReviewed(studentId);
  set.add(String(questionId));
  try { localStorage.setItem(doneKey(studentId), JSON.stringify([...set])); } catch { /* storage full: it shows again */ }
};

/** students: [{ id, name, specialWeekly }] → [{ id: questionId, weekId, examId, who: [{ id, name }] }], oldest first. */
export const examMistakes = (students, reviewedOf = readReviewed) => {
  const byQuestion = new Map();
  students.forEach((student) => {
    const reviewed = reviewedOf(student.id);
    [...weeksForTeacher(student.specialWeekly)].reverse().forEach((week) => {
      Object.entries(week.exams || {}).forEach(([examId, exam]) => {
        (exam.wrong || []).forEach((raw) => {
          const id = String(raw);
          if (reviewed.has(id)) return;
          const item = byQuestion.get(id) || { id, weekId: week.weekId, examId, who: [] };
          if (week.weekId < item.weekId) item.weekId = week.weekId;
          if (!item.who.some((w) => w.id === student.id)) item.who.push({ id: student.id, name: student.name });
          byQuestion.set(id, item);
        });
      });
    });
  });
  return [...byQuestion.values()].sort((a, b) => a.weekId.localeCompare(b.weekId));
};
