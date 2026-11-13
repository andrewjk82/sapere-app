// Older lessons of one student (before the schedule's own 14-day window), for the topic picker's
// "already given as homework" colours. Kept on the device for good:
//   - first time: one read of the student's lessons in [startDate, endDate]
//   - later: only the days after what is already stored are read (a lesson or two, usually none)
//   - homework still unchecked in the store is looked up again at most every RECHECK_MS (one read each), so a
//     check made on another device turns it from red to blue here too
// Checking / excusing / deleting a homework on this device makes the unchecked ones be looked up again.
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import { fetchStudentSessionsRange } from './studentSessionsService';
import { toHistoryRow } from '../utils/homeworkTopicHistory';

const RECHECK_MS = 12 * 60 * 60 * 1000;
const PREFIX = 'hwTopicHist:v2:';
const pending = new Map();   // studentId → promise (de-duplicates concurrent loads)

const readStored = (key) => { try { return JSON.parse(localStorage.getItem(key) || 'null'); } catch { return null; } };
const nextDay = (dateKey) => {
  const d = new Date(`${dateKey}T12:00:00`);
  d.setDate(d.getDate() + 1);
  return d.toLocaleDateString('en-CA');
};
const isOpen = (row) => row.status !== 'checked' && row.status !== 'excused' && row.status !== 'deleted';

const load = async (studentId, startDate, endDate) => {
  const key = PREFIX + studentId;
  const stored = readStored(key);
  let value = stored && Array.isArray(stored.rows) ? stored : { end: '', rows: [], recheckedAt: 0 };
  let changed = false;

  // New days since the last visit (or everything, the first time).
  const from = value.end ? nextDay(value.end) : startDate;
  if (from <= endDate) {
    const docs = await fetchStudentSessionsRange(studentId, from, endDate);
    const byId = new Map(value.rows.map((r) => [r.id, r]));
    docs.map(toHistoryRow).filter((r) => r.topics.length > 0).forEach((r) => byId.set(r.id, r));
    value = { ...value, end: endDate, rows: [...byId.values()], recheckedAt: value.recheckedAt || Date.now() };
    changed = true;
  }

  // Stored homework that was still unchecked: has it been checked since (possibly on another device)?
  if (Date.now() - (value.recheckedAt || 0) >= RECHECK_MS) {
    const open = value.rows.filter(isOpen);
    const fresh = await Promise.all(open.map((r) => getDoc(doc(db, 'sessions', r.id)).then((s) => (s.exists() ? toHistoryRow({ id: s.id, ...s.data() }) : { ...r, status: 'deleted' }), () => r)));
    const byId = new Map(value.rows.map((r) => [r.id, r]));
    fresh.forEach((r) => byId.set(r.id, r));
    value = { ...value, rows: [...byId.values()].filter((r) => r.status !== 'deleted' && r.topics.length > 0), recheckedAt: Date.now() };
    changed = true;
  }

  if (changed) { try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* full / private mode */ } }
  return value.rows;
};

export const loadOlderHomeworkRows = (studentId, startDate, endDate) => {
  if (!studentId || !startDate || !endDate || startDate > endDate) return Promise.resolve([]);
  if (pending.has(studentId)) return pending.get(studentId);
  const promise = load(studentId, startDate, endDate).finally(() => pending.delete(studentId));
  pending.set(studentId, promise);
  return promise;
};

// A homework was checked / excused / deleted on this device: the stored lessons stay, but the unchecked ones are
// looked up again the next time that student's lesson is opened (a few reads, not the whole history).
export const clearHomeworkTopicHistoryCache = () => {
  try {
    Object.keys(localStorage).forEach((k) => {
      if (k.startsWith('hwTopicHist:v1:')) { localStorage.removeItem(k); return; }
      if (!k.startsWith(PREFIX)) return;
      const value = readStored(k);
      if (value) localStorage.setItem(k, JSON.stringify({ ...value, recheckedAt: 0 }));
    });
  } catch { /* ignore */ }
};
