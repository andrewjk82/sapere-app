/**
 * studySessionSyncService.js
 *
 * Cross-device "is a study session already running elsewhere?" signal for
 * SubjectStopwatch. Deliberately NOT a realtime mirror — one small doc
 * (`users/{uid}/study_session/current`) written only on state transitions
 * (start/pause/resume/stop), and read only at natural check points (before
 * starting, on tab-foreground-return) — never via onSnapshot or polling.
 *
 * This doc is a coordination signal only. The source of truth for actual
 * study time remains `daily_stats`/`study_time_totals`, flushed by
 * studyTimeService — losing this doc loses nothing but the cross-device
 * "someone else is running" warning.
 */

import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase/config';
import { trackRead, trackWrite } from './trafficTrackerService';

const DEVICE_ID_KEY = 'sapere:device_id';

/** Stable per-browser id, persisted in localStorage — not tied to any uid. */
export const getDeviceId = () => {
  try {
    let id = window.localStorage.getItem(DEVICE_ID_KEY);
    if (!id) {
      id = (typeof crypto !== 'undefined' && crypto.randomUUID)
        ? crypto.randomUUID()
        : `dev_${Math.random().toString(36).slice(2)}${Date.now().toString(36)}`;
      window.localStorage.setItem(DEVICE_ID_KEY, id);
    }
    return id;
  } catch {
    return `dev_${Math.random().toString(36).slice(2)}`;
  }
};

const sessionDocRef = (uid) => doc(db, 'users', uid, 'study_session', 'current');

// Skip re-publishing a state we just wrote (e.g. StrictMode double-invoke).
let lastWrittenKey = null;

/**
 * Publish a state transition (start/pause/resume/stop). Fire-and-forget —
 * failures are logged, never thrown, since this is a best-effort signal.
 */
export const publishSessionTransition = async ({ uid, phase, subject, deviceId }) => {
  if (!uid || !deviceId) return;
  const key = `${uid}|${phase}|${subject}|${deviceId}`;
  if (lastWrittenKey === key) return;
  lastWrittenKey = key;
  try {
    await setDoc(sessionDocRef(uid), {
      phase, subject: subject || '', deviceId,
      updatedAt: serverTimestamp(),
      clientUpdatedMs: Date.now(),
    }, { merge: true });
    trackWrite(1, 'study_session_state');
  } catch (err) {
    console.warn('[studySessionSync] publish failed:', err?.code || err);
  }
};

/**
 * One point-read of the shared session doc. Call only at natural check
 * points (before Start, tab returning to foreground) — never on an interval.
 * @returns {{phase, subject, deviceId, clientUpdatedMs}|null}
 */
export const fetchRemoteSessionState = async (uid) => {
  if (!uid) return null;
  try {
    const snap = await getDoc(sessionDocRef(uid));
    trackRead(1, 'study_session_state');
    return snap.exists() ? snap.data() : null;
  } catch (err) {
    console.warn('[studySessionSync] fetch failed:', err?.code || err);
    return null;
  }
};
