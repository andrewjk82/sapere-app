/**
 * Shared student sessions cache (localStorage via localCache).
 *
 * Source of truth is still Firestore `sessions`, but consumers (FlameBuddy,
 * Schedule hydrate) should prefer this cache so we don't re-query the full
 * history on every mount. Schedule writes the cache whenever its listener
 * receives data (i.e. only on real changes after the initial snapshot).
 */
import { localCache } from '../services/localCacheService';

export const sessionsCacheKey = (uid) => `student-sessions-v2-${uid || 'anon'}`;

const EVENT = 'sapere:sessions-cache-updated';

/** Slim fields needed by UI (keeps localStorage small). */
export const slimSession = (s) => {
  if (!s || typeof s !== 'object') return null;
  return {
    id: s.id || '',
    date: s.date || '',
    startTime: s.startTime || '',
    endTime: s.endTime || '',
    subject: s.subject || '',
    homework: s.homework || '',
    isHomeworkCompleted: Boolean(s.isHomeworkCompleted),
    studentId: s.studentId || '',
    studentName: s.studentName || '',
    groupId: s.groupId || '',
    attendance: s.attendance || '',
    notes: s.notes || '',
    // Optional fingerprint pieces for change detection
    updatedAt: s.updatedAt || s.lastUpdated || '',
  };
};

/**
 * Stable fingerprint so we can skip localCache writes when nothing meaningful changed.
 * Avoids redundant storage churn; does not reduce first snapshot cost.
 */
export const sessionsFingerprint = (sessions) => {
  const list = Array.isArray(sessions) ? sessions : [];
  return list
    .map((s) => {
      const x = slimSession(s) || {};
      return [x.id, x.date, x.startTime, x.endTime, x.subject, x.homework, x.isHomeworkCompleted ? 1 : 0, x.updatedAt].join('|');
    })
    .sort()
    .join(';;');
};

export const getCachedSessions = (uid) => {
  if (!uid) return null;
  const raw = localCache.get(sessionsCacheKey(uid));
  if (!raw || !Array.isArray(raw.sessions)) return null;
  return raw;
};

export const setCachedSessions = (uid, sessions, { notify = true } = {}) => {
  if (!uid) return;
  const slim = (Array.isArray(sessions) ? sessions : []).map(slimSession).filter(Boolean);
  const fingerprint = sessionsFingerprint(slim);
  const prev = localCache.get(sessionsCacheKey(uid));
  if (prev?.fingerprint === fingerprint) {
    // Still touch savedAt lightly? Skip — no change, no write, no event.
    return false;
  }
  localCache.set(sessionsCacheKey(uid), {
    savedAt: Date.now(),
    fingerprint,
    sessions: slim,
  });
  if (notify && typeof window !== 'undefined') {
    try {
      window.dispatchEvent(new CustomEvent(EVENT, { detail: { uid } }));
    } catch { /* ignore */ }
  }
  return true;
};

/** Parse "3:30 PM" + YYYY-MM-DD → ms (local). */
export const parseSessionStartMs = (s) => {
  try {
    if (!s?.date || !s?.startTime) return 0;
    const timeMatch = String(s.startTime).match(/(\d+):(\d+)\s*(AM|PM)/i);
    if (!timeMatch) return new Date(`${s.date}T12:00:00`).getTime();
    let hours = parseInt(timeMatch[1], 10);
    const minutes = parseInt(timeMatch[2], 10);
    const period = timeMatch[3].toUpperCase();
    if (period === 'PM' && hours !== 12) hours += 12;
    if (period === 'AM' && hours === 12) hours = 0;
    const [y, m, d] = s.date.split('-').map(Number);
    return new Date(y, m - 1, d, hours, minutes).getTime();
  } catch {
    return 0;
  }
};

/** Next upcoming session after `nowMs` (default now). */
export const pickNextSession = (sessions, nowMs = Date.now()) => {
  const list = Array.isArray(sessions) ? sessions : [];
  const upcoming = list
    .filter((s) => parseSessionStartMs(s) > nowMs)
    .sort((a, b) => parseSessionStartMs(a) - parseSessionStartMs(b));
  return upcoming[0] || null;
};

export const SESSIONS_CACHE_EVENT = EVENT;
