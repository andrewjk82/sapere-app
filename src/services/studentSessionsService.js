/**
 * One shared, date-windowed realtime listener on a student's own `sessions` docs.
 *
 * Dashboard, the Daily Challenge start screen (homework card), the student Schedule and FlameBuddy each used to
 * run their own `where('studentId', '==', uid)` query — the student's ENTIRE lesson history (60+ docs and growing),
 * billed again on every app open and every re-attach after the tab had been hidden for a while. Every one of those
 * screens only needs recent and upcoming lessons, so:
 *
 *   - the listener reads `studentId == uid AND date >= today − SESSION_WINDOW_DAYS` (≈10 docs instead of 60+);
 *   - all screens share it (ref-counted), and it pauses while the app is hidden;
 *   - a week the student scrolls to before the window is fetched once, on demand (fetchStudentSessionsRange).
 *
 * The windowed query needs the composite index sessions(studentId ASC, date ASC). Until it exists Firestore answers
 * `failed-precondition`; we then fall back to the old full-history query for this page load, so nothing breaks.
 */
import { collection, getDocs, onSnapshot, query, where } from 'firebase/firestore';
import { db } from '../firebase/config';
import { setCachedSessions } from '../utils/sessionsCache';

export const SESSION_WINDOW_DAYS = 90;

const pad = (n) => String(n).padStart(2, '0');
const toDateKey = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;

/** First YYYY-MM-DD the shared listener covers. */
export const sessionWindowStart = (now = new Date()) => {
  const d = new Date(now);
  d.setDate(d.getDate() - SESSION_WINDOW_DAYS);
  return toDateKey(d);
};

let indexMissing = false; // set once the windowed query is refused; lasts for this page load
const entries = new Map(); // uid → { listeners:Set, docs:Array|null, unsub, onVis }

const isMissingIndex = (err) => err?.code === 'failed-precondition' || /requires an index/i.test(String(err?.message || ''));

const sessionsQuery = (uid) => (indexMissing
  ? query(collection(db, 'sessions'), where('studentId', '==', uid))
  : query(collection(db, 'sessions'), where('studentId', '==', uid), where('date', '>=', sessionWindowStart())));

const attach = (uid, entry) => {
  entry.unsub();
  entry.unsub = () => {};
  if (typeof document !== 'undefined' && document.visibilityState === 'hidden' && entry.docs) return;
  entry.unsub = onSnapshot(
    sessionsQuery(uid),
    (snap) => {
      const docs = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
      entry.docs = docs;
      setCachedSessions(uid, docs);
      entry.listeners.forEach(({ onData }) => onData(docs));
    },
    (err) => {
      if (!indexMissing && isMissingIndex(err)) {
        // The Firestore message contains a one-click link that creates the index.
        console.warn('[sessions] windowed query needs the sessions(studentId, date) index — using full history:', err?.message);
        indexMissing = true;
        attach(uid, entry);
        return;
      }
      console.warn('[sessions] listener failed:', err?.code || err);
      entry.listeners.forEach(({ onError }) => onError?.(err));
    },
  );
};

/**
 * Subscribe to the student's recent + upcoming sessions. onData receives the full array on every change (and
 * immediately, if the shared listener already has data). Returns an unsubscribe function.
 */
export const subscribeStudentSessions = (uid, onData, onError) => {
  if (!uid) return () => {};
  let entry = entries.get(uid);
  const listener = { onData, onError };
  if (!entry) {
    entry = { listeners: new Set(), docs: null, unsub: () => {}, onVis: null };
    entries.set(uid, entry);
    entry.listeners.add(listener);
    entry.onVis = () => {
      if (document.visibilityState === 'hidden') {
        entry.unsub();
        entry.unsub = () => {};
      } else {
        attach(uid, entry);
      }
    };
    if (typeof document !== 'undefined') document.addEventListener('visibilitychange', entry.onVis);
    attach(uid, entry);
  } else {
    entry.listeners.add(listener);
    if (entry.docs) onData(entry.docs);
  }
  return () => {
    entry.listeners.delete(listener);
    if (entry.listeners.size > 0) return;
    entry.unsub();
    if (typeof document !== 'undefined' && entry.onVis) document.removeEventListener('visibilitychange', entry.onVis);
    entries.delete(uid);
  };
};

/** One-shot read of the student's sessions in [startDate, endDate] (YYYY-MM-DD) — for weeks before the window. */
export const fetchStudentSessionsRange = async (uid, startDate, endDate) => {
  if (!uid || indexMissing) return []; // without the index the shared listener already has the full history
  const snap = await getDocs(query(
    collection(db, 'sessions'),
    where('studentId', '==', uid),
    where('date', '>=', startDate),
    where('date', '<=', endDate),
  ));
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
};
