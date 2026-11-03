import { doc, getDoc, writeBatch, serverTimestamp, deleteField } from 'firebase/firestore';
import { db } from '../firebase/config';
import {
  normalizeQueue, queueAdd, queueDone, isFlushDue, planFlush, afterFlush, mergeMistakes,
  buildMistakeEntry, expiredItemIds, localDayKey,
} from '../utils/lessonMistakes';

// Teacher-only. See src/utils/lessonMistakes.js for the why.
const COLLECTION = 'lesson_mistakes';
const QUEUE_KEY = 'sapere:lessonMistakesQueue:v1';
const REMOTE_TTL_MS = 10 * 60 * 1000;
const MAX_BATCH_WRITES = 450; // Firestore allows 500 per batch

const readQueue = () => {
  try { return normalizeQueue(JSON.parse(localStorage.getItem(QUEUE_KEY) || 'null')); } catch { return normalizeQueue(null); }
};
const writeQueue = (queue) => {
  try { localStorage.setItem(QUEUE_KEY, JSON.stringify(queue)); } catch { /* storage full / blocked */ }
};

const remoteCache = new Map(); // studentId → { at, items }
const listeners = new Set();
const emit = () => listeners.forEach((fn) => { try { fn(); } catch { /* ignore */ } });
export const onLessonMistakesChange = (fn) => { listeners.add(fn); return () => listeners.delete(fn); };

// Called after homework is marked as checked. Nothing is written to Firestore here.
export const queueLessonMistakes = ({ studentId, sessionId, sessionDate, topics, grade }) => {
  const entry = buildMistakeEntry({ studentId, sessionId, sessionDate, topics, grade });
  if (!entry) return false;
  writeQueue(queueAdd(readQueue(), entry));
  emit();
  return true;
};

// "Done together" in the lesson: the homework stops showing (written with the next daily batch).
export const markLessonMistakesDone = ({ studentId, sessionId }) => {
  writeQueue(queueDone(readQueue(), { studentId, sessionId }));
  emit();
};

// One read per student, reused for 10 minutes; the local queue is merged on top.
export const loadLessonMistakes = async (studentId, { force = false } = {}) => {
  if (!studentId) return [];
  const cached = remoteCache.get(studentId);
  let items = cached?.items;
  if (force || !cached || Date.now() - cached.at > REMOTE_TTL_MS) {
    try {
      const snap = await getDoc(doc(db, COLLECTION, studentId));
      items = snap.exists() ? (snap.data().items || {}) : {};
      remoteCache.set(studentId, { at: Date.now(), items });
      // Old homework is tidied away with the next daily batch (no extra read for it).
      const expired = expiredItemIds(items);
      if (expired.length) {
        let queue = readQueue();
        expired.forEach((sessionId) => { if (!queue.ops[sessionId]) queue = queueDone(queue, { studentId, sessionId }); });
        writeQueue(queue);
      }
    } catch (err) {
      console.warn('[lessonMistakes] load failed:', err?.code || err?.message || err);
      items = cached?.items || {};
    }
  }
  return mergeMistakes(items, readQueue(), studentId);
};

let flushing = null;

// At most once a day (the first call on a new day with something queued): every queued
// add / done goes out in one batch, one doc per student. A failure keeps the queue for next time.
export const flushLessonMistakesIfDue = ({ force = false } = {}) => {
  if (flushing) return flushing;
  const queue = readQueue();
  const today = localDayKey();
  if (!(force ? Object.keys(queue.ops).length > 0 : isFlushDue(queue, today))) return Promise.resolve(false);
  flushing = (async () => {
    const plan = planFlush(queue);
    const studentIds = Object.keys(plan).slice(0, MAX_BATCH_WRITES);
    const batch = writeBatch(db);
    studentIds.forEach((studentId) => {
      const items = Object.fromEntries(Object.entries(plan[studentId])
        .map(([sessionId, data]) => [sessionId, data === null ? deleteField() : data]));
      batch.set(doc(db, COLLECTION, studentId), { studentId, items, updatedAt: serverTimestamp() }, { merge: true });
    });
    await batch.commit();
    const flushed = Object.fromEntries(Object.values(queue.ops)
      .filter((op) => studentIds.includes(op.studentId))
      .map((op) => [op.sessionId, op.at]));
    writeQueue(afterFlush(readQueue(), flushed, today));
    // Keep the in-memory copies in step without reading them again.
    studentIds.forEach((studentId) => {
      const cached = remoteCache.get(studentId);
      if (!cached) return;
      const items = { ...cached.items };
      Object.entries(plan[studentId]).forEach(([sessionId, data]) => {
        if (data === null) delete items[sessionId]; else items[sessionId] = data;
      });
      remoteCache.set(studentId, { at: cached.at, items });
    });
    return true;
  })()
    .catch((err) => { console.warn('[lessonMistakes] daily write failed, kept for next time:', err?.code || err?.message || err); return false; })
    .finally(() => { flushing = null; });
  return flushing;
};
