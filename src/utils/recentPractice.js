// Last-two-weeks Daily Practice / Daily Calculation results, kept on the student's own users/{uid} doc as
// `recentPractice: { v, daily: { 'YYYY-MM-DD': entry }, calc: { ... } }`.
//
// Dashboard (week chart, today's calc), FlameBuddy (today's tasks, recent-performance briefing) each used to read
// the heavy daily_stats / calc_stats docs (full question arrays) on their own — ~35 reads per student per day, more
// on every reload. ProfileContext already holds a live listener on users/{uid}, so reading the summary from there
// costs nothing. finishQuiz writes it in the same transaction that already updates XP (no extra write), and a
// teacher reset deletes that day's entry. Until a student's first quiz after this shipped (`v` missing), callers
// fall back to their old reads.

export const RECENT_PRACTICE_VERSION = 1;
export const RECENT_PRACTICE_DAYS = 14;

const pad = (n) => String(n).padStart(2, '0');
const dateKeyDaysBefore = (dateKey, days) => {
  const d = new Date(`${dateKey}T12:00:00`);
  d.setDate(d.getDate() - days);
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
};

/** True once this student's summary exists, i.e. it can be trusted instead of reading stat docs. */
export const hasRecentPractice = (profile) => Number(profile?.recentPractice?.v) >= RECENT_PRACTICE_VERSION;

const slimTopicStats = (topicStats) => {
  if (!topicStats || typeof topicStats !== 'object') return null;
  const out = {};
  Object.entries(topicStats).forEach(([id, s]) => {
    if (!id || !s) return;
    out[id] = { id, label: String(s.label || id), correct: Number(s.correct) || 0, total: Number(s.total) || 0 };
  });
  return Object.keys(out).length ? out : null;
};

/**
 * The `recentPractice` value to merge into users/{uid} after a finished (or abandoned) session.
 * `deleteMarker` is Firestore's deleteField() — passed in so this module stays SDK-free and testable.
 */
export const buildRecentPracticePatch = (existing, {
  type, date, score, total, completed, topicStats, deleteMarker,
}) => {
  const kind = type === 'calc' ? 'calc' : 'daily';
  const entry = {
    score: Number(score) || 0,
    total: Number(total) || 0,
    completed: completed === true,
    ...(slimTopicStats(topicStats) ? { topicStats: slimTopicStats(topicStats) } : {}),
  };
  const cutoff = dateKeyDaysBefore(date, RECENT_PRACTICE_DAYS);
  const days = { [date]: entry };
  Object.keys(existing?.[kind] || {}).forEach((key) => {
    if (key < cutoff && key !== date && deleteMarker !== undefined) days[key] = deleteMarker;
  });
  return { v: RECENT_PRACTICE_VERSION, [kind]: days };
};

/** Entries of one kind, newest first: [{ id: date, score, total, completed, topicStats }]. */
export const recentPracticeList = (profile, type = 'daily') => {
  const map = profile?.recentPractice?.[type === 'calc' ? 'calc' : 'daily'] || {};
  return Object.entries(map)
    .filter(([, e]) => e && typeof e === 'object')
    .map(([id, e]) => ({ id, ...e }))
    .sort((a, b) => b.id.localeCompare(a.id));
};

/** One day's entry, or null when that day has no session. */
export const recentPracticeDay = (profile, type, date) => {
  const e = profile?.recentPractice?.[type === 'calc' ? 'calc' : 'daily']?.[date];
  return e && typeof e === 'object' ? e : null;
};
