// Which curriculum topics a student wrote notes on, per day — kept in this browser only (localStorage), so the
// Dashboard can tell what was worked on in the last lesson without the teacher recording anything.
// Shape: { 'YYYY-MM-DD': [topicId, …] } in the order first written that day, last KEEP_DAYS days.

const keyOf = (uid) => `sapere:topicWriting:v1:${uid}`;
const KEEP_DAYS = 60;

export const localDateStr = (d) => new Date(d).toLocaleDateString('en-CA');

export const loadTopicWriting = (uid, storage = globalThis.localStorage) => {
  if (!uid) return {};
  try {
    const raw = JSON.parse(storage.getItem(keyOf(uid)));
    return raw && typeof raw === 'object' && !Array.isArray(raw) ? raw : {};
  } catch {
    return {};
  }
};

// → true when this is the first write on that topic today (the log changed).
export const recordTopicWriting = (uid, topicId, now = new Date(), storage = globalThis.localStorage) => {
  if (!uid || !topicId) return false;
  const log = loadTopicWriting(uid, storage);
  const day = localDateStr(now);
  const ids = Array.isArray(log[day]) ? log[day] : [];
  if (ids.includes(topicId)) return false;
  const next = { ...log, [day]: [...ids, topicId] };
  Object.keys(next).sort().reverse().slice(KEEP_DAYS).forEach((d) => { delete next[d]; });
  try { storage.setItem(keyOf(uid), JSON.stringify(next)); } catch { /* private mode / quota: not remembered */ }
  return true;
};

// Add days from older notes (topic → last saved date) that the log does not cover yet, e.g. notes written
// before this log existed. A day already in the log is left as it is.
export const mergeNoteDates = (log = {}, noteDates = []) => {
  const extra = {};
  noteDates.forEach(({ topicId, date }) => {
    if (!topicId || !date || log[date]) return;
    (extra[date] = extra[date] || []).push(topicId);
  });
  return { ...extra, ...log };
};

// The topics of the last lesson: the most recent lesson day (`lessonDates`, any order) the student wrote
// on; with none of those, the most recent day they wrote anything. → { date, topicIds } | null
export const pickLastLessonTopics = (log = {}, lessonDates = []) => {
  const written = Object.keys(log).filter((d) => Array.isArray(log[d]) && log[d].length > 0).sort().reverse();
  if (written.length === 0) return null;
  const lessons = new Set(lessonDates);
  const date = written.find((d) => lessons.has(d)) || written[0];
  return { date, topicIds: log[date] };
};
