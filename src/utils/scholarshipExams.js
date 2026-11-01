// Which Scholarship exams (chapters of CURRICULUM_DATA.Scholarship) a student gets. `scholarshipExams` on the profile is a
// list of exam ids; no list (older switch-on, before exams could be chosen) means every exam.
export const enabledScholarshipExams = (examIds, student) => (
  Array.isArray(student?.scholarshipExams) ? examIds.filter((id) => student.scholarshipExams.includes(id)) : [...examIds]
);

// The next list when the teacher ticks / unticks one exam; the last exam cannot be unticked (switch Scholarship off instead).
export const toggleScholarshipExam = (examIds, student, id) => {
  const chosen = enabledScholarshipExams(examIds, student);
  const next = chosen.includes(id) ? chosen.filter((x) => x !== id) : examIds.filter((x) => chosen.includes(x) || x === id);
  return next.length === 0 ? chosen : next;
};

// Which subjects (topics of one exam, e.g. OC English / Mathematics / Thinking Skills) a student practises.
// `scholarshipSubjects` on the profile is { [examId]: topicId[] }; no list for an exam means all of its subjects.
// `exam` is the CURRICULUM_DATA.Scholarship chapter.
export const subjectsChosen = (student, examId) => Array.isArray(student?.scholarshipSubjects?.[examId]);
export const enabledExamSubjects = (exam, student) => {
  const ids = (exam?.topics || []).map((t) => t.id);
  const list = student?.scholarshipSubjects?.[exam?.id];
  if (!Array.isArray(list)) return ids;
  const kept = ids.filter((id) => list.includes(id));
  return kept.length ? kept : ids;   // a list that no longer matches any subject never empties the page
};

// The next { [examId]: topicId[] } map when the teacher ticks / unticks one subject; the last subject stays on.
export const toggleExamSubject = (exam, student, topicId) => {
  const ids = (exam?.topics || []).map((t) => t.id);
  const chosen = enabledExamSubjects(exam, student);
  const next = chosen.includes(topicId) ? chosen.filter((x) => x !== topicId) : ids.filter((x) => chosen.includes(x) || x === topicId);
  return { ...(student?.scholarshipSubjects || {}), [exam.id]: next.length ? next : chosen };
};
