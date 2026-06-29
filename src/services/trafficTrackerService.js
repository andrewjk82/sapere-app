import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase/config';

// Buffer to store accumulated traffic in memory before flushing
let buffer = {
  reads: 0,
  writes: 0,
  apiCalls: 0,
  pages: {},
};

let flushTimeout = null;
let currentUid = 'guest';
let currentRole = 'guest';

// Generate a simple session key to identify unique browser tabs/anonymous users
const sessionKey = (() => {
  try {
    let key = sessionStorage.getItem('sapere:session_tracker_key');
    if (!key) {
      key = 'sess_' + Math.random().toString(36).substring(2, 15);
      sessionStorage.setItem('sapere:session_tracker_key', key);
    }
    return key;
  } catch {
    return 'sess_fallback_' + Date.now();
  }
})();

/** Set user context for the tracker */
export const setTrafficUserContext = (uid, role) => {
  currentUid = uid || 'guest';
  currentRole = role || 'student';
};

/** Log read counts (e.g. from firestore document gets) */
export const trackRead = (count = 1, page = 'unknown') => {
  buffer.reads += count;
  if (page) {
    buffer.pages[page] = (buffer.pages[page] || 0) + count;
  }
  scheduleFlush();
};

/** Log write counts (e.g. from firestore doc set/add/update) */
export const trackWrite = (count = 1, page = 'unknown') => {
  buffer.writes += count;
  if (page) {
    buffer.pages[page] = (buffer.pages[page] || 0) + count;
  }
  scheduleFlush();
};

/** Log generic API / cron fetch counts */
export const trackApiCall = (page = 'unknown') => {
  buffer.apiCalls += 1;
  scheduleFlush();
};

/** Schedule buffer flush after 30 seconds of inactivity */
const scheduleFlush = () => {
  if (flushTimeout) return;
  flushTimeout = setTimeout(() => {
    flushBuffer();
  }, 30000); // 30 seconds interval
};

/** Flush memory buffer to Firestore traffic_logs collection in background */
export const flushBuffer = async () => {
  flushTimeout = null;
  if (buffer.reads === 0 && buffer.writes === 0 && buffer.apiCalls === 0) return;

  const logPayload = {
    uid: currentUid,
    role: currentRole,
    sessionKey,
    reads: buffer.reads,
    writes: buffer.writes,
    apiCalls: buffer.apiCalls,
    pages: { ...buffer.pages },
    timestamp: serverTimestamp(),
    userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'unknown',
  };

  // Reset local buffer immediately to prevent double-logging
  buffer = {
    reads: 0,
    writes: 0,
    apiCalls: 0,
    pages: {},
  };

  try {
    // Non-blocking background log
    await addDoc(collection(db, 'traffic_logs'), logPayload);
  } catch (error) {
    // Fail silently to avoid breaking the client app
    console.warn('[TrafficTracker] Failed to flush logs to database:', error.message);
  }
};

// Auto flush when browser tab is hidden or closed to preserve last metrics
if (typeof window !== 'undefined') {
  window.addEventListener('beforeunload', () => {
    flushBuffer();
  });
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
      flushBuffer();
    }
  });
}
