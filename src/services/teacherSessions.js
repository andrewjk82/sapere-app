import { collection, query, where } from 'firebase/firestore';
import { db } from '../firebase/config';
import { subscribeLive, resetLive } from './liveQueries';

// The teacher's shared lesson listeners (Class, Schedule, student pages).
const PAST_DAYS = 14;
const AHEAD_DAYS = 21;
const dayKey = (offset) => { const d = new Date(); d.setDate(d.getDate() + offset); return d.toLocaleDateString('en-CA'); };

/** Every lesson from 14 days ago to 21 days ahead. */
export const subscribeScheduleSessions = (onData, onError) => {
  const start = dayKey(-PAST_DAYS);
  const end = dayKey(AHEAD_DAYS);
  return subscribeLive(`sessions:window:${start}`, () => query(collection(db, 'sessions'), where('date', '>=', start), where('date', '<=', end)), onData, onError);
};

const historyKey = (field, id) => `sessions:${field}:${id}`;

/** All lessons of one student (field 'studentId') or one group (field 'groupId'). */
export const subscribeSessionHistory = (field, id, onData, onError) => subscribeLive(
  historyKey(field, id), () => query(collection(db, 'sessions'), where(field, '==', id)), onData, onError,
);

export const resetSessionHistory = (field, id) => resetLive(historyKey(field, id));
