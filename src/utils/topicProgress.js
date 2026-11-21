import { CURRICULUM_DATA } from '../constants/curriculumData';
import { mistakeItemFromSession, MISTAKES_REVIEWED_FIELD } from './lessonMistakes';

// One student's progress through their course, worked out from the lessons themselves (no extra reads, no writes):
//   taught in a lesson (the picked topics ARE the homework) → submitted → teacher checked it → wrong questions gone
//   through together (or none were wrong) → DONE.
// The teacher can override any topic by hand (progressOverrides on the student: 'done' | 'open'); a topic ticked
// done the old way (completedChapters) still counts. Pure — no Firebase here.

// The student's main course flattened to topics in teaching order (Year 11/12 use the assigned course).
export const courseTopics = (student = {}) => {
  const years = Array.isArray(student.assignedYear) ? student.assignedYear : [student.assignedYear || student.year || student.level];
  const courses = Array.isArray(student.assignedCourse) ? student.assignedCourse : [student.assignedCourse || student.course];
  const year = years.find((y) => typeof y === 'string' && CURRICULUM_DATA[y]);
  if (!year) return { year: '', topics: [] };
  const data = CURRICULUM_DATA[year];
  let chapters;
  if (Array.isArray(data)) chapters = data;
  else {
    const course = courses.find((c) => Array.isArray(data[c])) || Object.keys(data).find((k) => Array.isArray(data[k]));
    chapters = course ? data[course] : [];
  }
  const topics = chapters.flatMap((chapter) => (Array.isArray(chapter.topics) && chapter.topics.length
    ? chapter.topics.map((topic) => ({ id: topic.id, code: topic.code || '', title: topic.title || '', chapterId: chapter.id, chapterTitle: chapter.title }))
    : [{ id: chapter.id, code: '', title: chapter.title, chapterId: chapter.id, chapterTitle: chapter.title }]));
  return { year, topics };
};

export const STATE_LABEL = {
  done: 'Done',
  mistakes: 'Mistakes to review',
  check: 'To check',
  notin: 'Not in',
  taught: 'Taught',
  none: 'Not started',
};

// Where the latest lesson that covered a topic has got to.
const sessionTopicState = (s) => {
  if (s.homeworkStatus === 'excused') return 'done';          // closed on purpose: nothing left to do
  if (s.homeworkStatus === 'deleted') return 'taught';        // taught, homework withdrawn
  const checked = s.homeworkStatus === 'checked' || s.isHomeworkCompleted === true;
  if (!checked) return s.homeworkStatus === 'submitted' ? 'check' : 'notin';
  if (mistakeItemFromSession(s) && !s[MISTAKES_REVIEWED_FIELD]) return 'mistakes';
  return 'done';
};

/** topicId → state, from the student's lessons up to `today` (YYYY-MM-DD). The latest lesson of a topic wins. */
export const deriveTopicStates = (sessions = [], today = '9999-99-99') => {
  const latest = new Map();
  (Array.isArray(sessions) ? sessions : []).forEach((s) => {
    if (!s?.date || s.date > today || s.attendance === 'cancelled') return;
    (Array.isArray(s.learnedTopics) ? s.learnedTopics : []).forEach((t) => {
      if (!t?.id) return;
      const prev = latest.get(t.id);
      if (!prev || s.date >= prev.date) latest.set(t.id, s);
    });
  });
  const out = new Map();
  latest.forEach((s, id) => out.set(id, sessionTopicState(s)));
  return out;
};

/**
 * Every course topic with its final state.
 * `override` 'done' / 'open' is the teacher's own call and beats everything; 'open' on something that looks done
 * shows it as "taught" (so it stays on the to-do list).
 */
export const topicStatuses = (topics, derived, { completed = [], overrides = {} } = {}) => {
  const done = new Set(completed);
  return topics.map((topic) => {
    // Ticked done by hand the old way: the topic itself, or its whole chapter.
    const manualDone = done.has(topic.id) || done.has(topic.chapterId);
    const auto = derived.get(topic.id) || (manualDone ? 'done' : 'none');
    const override = overrides[topic.id] === 'done' || overrides[topic.id] === 'open' ? overrides[topic.id] : '';
    let state = auto;
    if (override === 'done') state = 'done';
    else if (override === 'open') state = auto === 'done' || auto === 'none' ? (derived.has(topic.id) ? 'taught' : 'none') : auto;
    else if (manualDone && auto !== 'done') state = 'done';
    return { ...topic, state, auto, override };
  });
};

export const summarize = (statuses) => {
  const count = { done: 0, mistakes: 0, check: 0, notin: 0, taught: 0, none: 0 };
  statuses.forEach((t) => { count[t.state] += 1; });
  const furthest = statuses.reduce((best, t, i) => (t.state !== 'none' ? i : best), -1);
  return { count, total: statuses.length, furthest };
};

/** chapterId → { done, total } from topicStatuses(). */
export const byChapter = (statuses) => {
  const map = {};
  statuses.forEach((t) => {
    const c = map[t.chapterId] || (map[t.chapterId] = { done: 0, total: 0 });
    c.total += 1;
    if (t.state === 'done') c.done += 1;
  });
  return map;
};
