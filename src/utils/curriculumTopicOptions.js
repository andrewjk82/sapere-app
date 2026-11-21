import { CURRICULUM_DATA } from '../constants/curriculumData';
import { groupMeta } from './lessonTopics';

// Which curriculum topics a student can be taught / given as homework (the "Today covered" picker's options).
// Shared by the Schedule lesson editor and the Class page.

export const getStudentDisplayYear = (student = {}) => {
  const years = Array.isArray(student.assignedYear) ? student.assignedYear : [student.assignedYear || student.year || student.level];
  return years.find(year => typeof year === 'string' && year.startsWith('Year ')) || 'Year 11';
};

// Chapters the student's year(s)/course(s) cover, each tagged with its group
// (one year, or year + course for Years 11–12) so the topic picker can tab by it.
export const getStudentCurriculumChapters = (student = {}) => {
  const years = Array.isArray(student.assignedYear) ? student.assignedYear : [student.assignedYear || student.year || student.level || 'Year 11'];
  const courses = Array.isArray(student.assignedCourse) ? student.assignedCourse : [student.assignedCourse || student.course || 'Advanced'];
  const chapters = [];

  years.forEach((year) => {
    const yearData = CURRICULUM_DATA[year];
    if (!yearData) return;
    if (Array.isArray(yearData)) {
      yearData.forEach((chapter) => chapters.push({ chapter, meta: groupMeta(year) }));
      return;
    }
    let added = 0;
    courses.forEach((course) => {
      if (!Array.isArray(yearData[course])) return;
      yearData[course].forEach((chapter) => chapters.push({ chapter, meta: groupMeta(year, course) }));
      added += 1;
    });
    if (added === 0) {
      const [firstCourse, firstChapters] = Object.entries(yearData).find(([, v]) => Array.isArray(v)) || [];
      if (firstChapters) firstChapters.forEach((chapter) => chapters.push({ chapter, meta: groupMeta(year, firstCourse) }));
    }
  });

  const seen = new Set();
  return chapters.filter(({ chapter }) => {
    if (!chapter?.id || seen.has(chapter.id)) return false;
    seen.add(chapter.id);
    return true;
  });
};

export const getAssignedCurriculumTopics = (student = {}) => {
  const assignedIds = new Set(Array.isArray(student.assignedChapters) ? student.assignedChapters : []);
  const completedIds = new Set(Array.isArray(student.completedChapters) ? student.completedChapters : []);
  const chapters = getStudentCurriculumChapters(student);
  const items = [];

  chapters.forEach(({ chapter, meta }) => {
    if (Array.isArray(chapter.topics) && chapter.topics.length > 0) {
      chapter.topics.forEach((topic) => {
        const isAssigned = assignedIds.has(topic.id) || assignedIds.has(chapter.id);
        const isCompleted = completedIds.has(topic.id) || completedIds.has(chapter.id);
        if (assignedIds.size > 0 && !isAssigned && !isCompleted) return;
        items.push({
          id: topic.id,
          label: `${topic.code ? `${topic.code} · ` : ''}${topic.group ? `${topic.group}: ` : ''}${topic.title}`,
          chapterTitle: chapter.title,
          completed: completedIds.has(topic.id),
          chapterId: chapter.id,
          code: topic.code || '',
          title: `${topic.group ? `${topic.group}: ` : ''}${topic.title}`,
          ...meta,
        });
      });
      return;
    }
    if (assignedIds.size === 0 || assignedIds.has(chapter.id) || completedIds.has(chapter.id)) {
      items.push({
        id: chapter.id,
        label: chapter.title,
        chapterTitle: chapter.title,
        completed: completedIds.has(chapter.id),
        chapterId: chapter.id,
        title: chapter.title,
        ...meta,
      });
    }
  });

  return items;
};
