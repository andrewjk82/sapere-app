// Which curriculum topics a student has already been given as homework, for the lesson modal's topic picker:
//   'open' — given, not checked yet (not submitted, or submitted and waiting for the teacher)
//   'done' — given and checked / excused
// Built from session rows only (the homework's single source of truth), so it can never drift from them.
import { getHomeworkStatus } from './homework.js';

// The few fields the picker needs from a session (what the device cache stores for older lessons).
export const toHistoryRow = (s) => ({
  id: s.id,
  studentId: s.studentId || '',
  date: s.date || '',
  status: getHomeworkStatus(s),
  topics: (Array.isArray(s.learnedTopics) ? s.learnedTopics : []).map((t) => t?.id).filter(Boolean),
});

// rows: history rows of ONE student (older cached rows + the live ones; a live row replaces a cached one with the
// same id). The lesson being edited and lessons after `today` are left out. → { [topicId]: { state, date } }
export const topicHomeworkStates = (rows, { excludeSessionId = '', today = '' } = {}) => {
  const byId = new Map();
  (rows || []).forEach((r) => { if (r?.id) byId.set(r.id, r); });
  const out = {};
  [...byId.values()]
    .filter((r) => r.id !== excludeSessionId && r.status !== 'deleted' && (!today || r.date <= today))
    .sort((a, b) => a.date.localeCompare(b.date))
    .forEach((r) => {
      const state = r.status === 'checked' || r.status === 'excused' ? 'done' : 'open';
      r.topics.forEach((id) => {
        const prev = out[id];
        // Given more than once: it stays 'open' while any of them is still unchecked.
        out[id] = { state: prev?.state === 'open' || state === 'open' ? 'open' : 'done', date: r.date };
      });
    });
  return out;
};
