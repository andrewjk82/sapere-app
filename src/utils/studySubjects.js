// The student's study-timer subjects: assigned courses + their own, minus hidden, always at least one.
// Shared by the timer engine (context/StudyTimerContext) and the Study Timer page.
export const studySubjectsFor = (profile) => {
  const assigned = Array.isArray(profile?.assignedCourse)
    ? profile.assignedCourse
    : [profile?.assignedCourse].filter(Boolean);
  const custom = Array.isArray(profile?.customStudySubjects) ? profile.customStudySubjects : [];
  const hidden = new Set(Array.isArray(profile?.hiddenStudySubjects) ? profile.hiddenStudySubjects : []);
  const list = [...new Set([...assigned, ...custom].filter(Boolean))].filter((s) => !hidden.has(s));
  if (!hidden.has('General Study') && !list.includes('General Study')) list.push('General Study');
  // Never end up with zero chips — if the student hid everything, fall back.
  return list.length > 0 ? list : ['General Study'];
};

// The maths subject for the "Start Maths timer" shortcut: the first assigned course (every assigned course
// is a maths course), else the first subject on the list.
export const mathsSubjectFor = (profile, subjects = studySubjectsFor(profile)) => {
  const assigned = Array.isArray(profile?.assignedCourse) ? profile.assignedCourse : [profile?.assignedCourse];
  return assigned.find((s) => s && subjects.includes(s)) || subjects[0];
};
