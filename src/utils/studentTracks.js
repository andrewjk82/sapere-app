import { CURRICULUM_DATA } from '../constants/curriculumData';

const normalizeYear = (v) => {
  const n = parseInt(String(v || '').replace(/\D/g, ''), 10);
  return Number.isFinite(n) && n > 0 ? `Year ${n}` : String(v || '').trim();
};
const yearNum = (y) => parseInt(String(y).replace(/\D/g, ''), 10) || 0;

/**
 * The (year, course) tracks a student is working through — same rules as LearningPath:
 * a student can study any year level (a Year 9 may be on Year 12 Extension 1), so tracks
 * come from what the teacher assigned, never from the student's school grade.
 * Returns [{ key, year, course|null, chapters }] sorted by year.
 */
export const buildStudentTracks = (profile) => {
  const rawYears = Array.isArray(profile?.assignedYear) ? profile.assignedYear : [profile?.assignedYear || 'Year 3'];
  const years = [...new Set(rawYears.map(normalizeYear).filter(Boolean))];
  const courses = Array.isArray(profile?.assignedCourse) ? profile.assignedCourse : [profile?.assignedCourse || 'Advanced'];
  const assignedIds = [...(profile?.assignedChapters || []), ...(profile?.completedChapters || [])];

  const all = [];
  years.sort((a, b) => yearNum(a) - yearNum(b)).forEach((y) => {
    const data = CURRICULUM_DATA[y];
    if (data && !Array.isArray(data)) {
      courses.filter((c) => data[c]).forEach((c) => all.push({ key: `${y}|${c}`, year: y, course: c, chapters: data[c] }));
    } else if (Array.isArray(data) && data.length) {
      all.push({ key: y, year: y, course: null, chapters: data });
    }
  });
  // Once chapters are assigned, hide tracks the teacher never touched (stale year labels).
  const touched = all.filter((t) => t.chapters.some((c) => assignedIds.includes(c.id)));
  return assignedIds.length && touched.length ? touched : all;
};
