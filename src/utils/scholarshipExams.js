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
