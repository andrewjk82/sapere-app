// "Check the mistake" in the next lesson: the questions the teacher marked ✗ / ½ when
// checking homework, carried to the student's next lesson so they can be redone together.
//
// Cost: checking homework writes nothing extra right away. The wrong questions are queued
// on the teacher's device (this queue) and written once a day in ONE batch, one doc per
// student (lesson_mistakes/{studentId}). Opening a lesson reads that one doc. Everything in
// this file is pure (no Firestore, no storage) so it can be tested in node.

import { isWrongMark } from './homeworkRedo.js';

export const LESSON_MISTAKES_MAX_AGE_DAYS = 60;
const DAY_MS = 24 * 60 * 60 * 1000;

export const localDayKey = (date = new Date()) => {
  const pad = (n) => String(n).padStart(2, '0');
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
};

export const emptyQueue = () => ({ ops: {}, lastFlushDay: '' });

export const normalizeQueue = (raw) => {
  if (!raw || typeof raw !== 'object' || !raw.ops || typeof raw.ops !== 'object') return emptyQueue();
  return { ops: { ...raw.ops }, lastFlushDay: typeof raw.lastFlushDay === 'string' ? raw.lastFlushDay : '' };
};

export const wrongOnlyMarks = (marks = {}) => Object.fromEntries(
  Object.entries(marks || {}).filter(([, mark]) => isWrongMark(mark)),
);

const fmt = (n) => (Number.isInteger(n) ? String(n) : Number(n).toFixed(1));

// What is carried to the next lesson for one checked homework, or null when nothing was wrong.
export const buildMistakeEntry = ({ studentId, sessionId, sessionDate, topics = [], grade = null }) => {
  if (!studentId || !sessionId) return null;
  const marks = wrongOnlyMarks(grade?.marks);
  if (Object.keys(marks).length === 0) return null;
  return {
    studentId,
    sessionId,
    date: sessionDate || '',
    topics: (topics || [])
      .map((t) => ({ id: t?.id || '', label: t?.label || t?.title || t?.id || '' }))
      .filter((t) => t.id),
    marks,
    mark: grade?.total > 0 ? `${fmt(grade.score)}/${grade.total}` : '',
    comment: String(grade?.comment || '').trim(),
  };
};

// The queue holds the latest op per homework session: 'add' (carry it) or 'done' (redone in class).
export const queueAdd = (queue, entry, now = Date.now()) => {
  const q = normalizeQueue(queue);
  if (!entry) return q;
  return { ...q, ops: { ...q.ops, [entry.sessionId]: { op: 'add', ...entry, at: now } } };
};

export const queueDone = (queue, { studentId, sessionId }, now = Date.now()) => {
  const q = normalizeQueue(queue);
  if (!studentId || !sessionId) return q;
  return { ...q, ops: { ...q.ops, [sessionId]: { op: 'done', studentId, sessionId, at: now } } };
};

export const isFlushDue = (queue, today = localDayKey()) => {
  const q = normalizeQueue(queue);
  return Object.keys(q.ops).length > 0 && q.lastFlushDay !== today;
};

// The item as stored on the student's doc: queue bookkeeping (op / at / studentId) left out.
const stripOp = (entry) => {
  const data = { ...entry };
  delete data.op; delete data.at; delete data.studentId;
  return data;
};

// { [studentId]: { [sessionId]: itemData | null } } — null means delete that item.
export const planFlush = (queue) => {
  const plan = {};
  for (const entry of Object.values(normalizeQueue(queue).ops)) {
    if (!entry?.studentId || !entry?.sessionId) continue;
    const forStudent = plan[entry.studentId] || (plan[entry.studentId] = {});
    forStudent[entry.sessionId] = entry.op === 'add' ? stripOp(entry) : null;
  }
  return plan;
};

// After a successful flush: drop the ops that were written (an op queued again meanwhile is kept).
export const afterFlush = (queue, flushed, today = localDayKey()) => {
  const q = normalizeQueue(queue);
  const ops = { ...q.ops };
  for (const [sessionId, at] of Object.entries(flushed || {})) {
    if (ops[sessionId]?.at === at) delete ops[sessionId];
  }
  return { ops, lastFlushDay: today };
};

// The student's carried homework: what is in Firestore, with this device's not-yet-written
// queue on top (so the teacher who just checked sees it at once). Newest homework first.
export const mergeMistakes = (remoteItems = {}, queue, studentId) => {
  const byId = { ...(remoteItems || {}) };
  for (const entry of Object.values(normalizeQueue(queue).ops)) {
    if (entry?.studentId !== studentId) continue;
    if (entry.op === 'add') byId[entry.sessionId] = stripOp(entry);
    else delete byId[entry.sessionId];
  }
  return Object.entries(byId)
    .filter(([, item]) => item && item.marks && Object.keys(item.marks).length > 0)
    .map(([sessionId, item]) => ({ ...item, sessionId }))
    .sort((a, b) => String(b.date || '').localeCompare(String(a.date || '')));
};

// Shown on a lesson: homework set in an EARLIER lesson (its own lesson never shows it),
// and not older than LESSON_MISTAKES_MAX_AGE_DAYS before this lesson.
export const mistakesForLesson = (items = [], lessonDate = '') => {
  if (!lessonDate) return [];
  const [y, m, d] = String(lessonDate).split('-').map(Number);
  const oldest = (y && m && d)
    ? localDayKey(new Date(new Date(y, m - 1, d).getTime() - LESSON_MISTAKES_MAX_AGE_DAYS * DAY_MS))
    : '';
  return (items || []).filter((item) => item?.date && item.date < lessonDate && item.date >= oldest);
};

// Items older than the window are removed from the student's doc at flush time.
export const expiredItemIds = (remoteItems = {}, today = localDayKey()) => {
  const [y, m, d] = today.split('-').map(Number);
  const oldest = localDayKey(new Date(new Date(y, m - 1, d).getTime() - LESSON_MISTAKES_MAX_AGE_DAYS * DAY_MS));
  return Object.entries(remoteItems || {})
    .filter(([, item]) => item?.date && item.date < oldest)
    .map(([id]) => id);
};
