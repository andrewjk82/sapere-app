// Shared per-subject color palette for the Study Timer. Colors are
// assigned randomly the first time a subject is seen and then persisted
// (users/{uid}.studySubjectColors), so the same subject always shows the
// same color across the stopwatch ring, chips, and stats.
export const SUBJECT_COLOR_PALETTE = [
  '#6366f1', '#8b5cf6', '#ec4899', '#f59e0b', '#22c55e',
  '#0ea5e9', '#ef4444', '#14b8a6', '#f97316', '#a855f7',
  '#eab308', '#06b6d4',
];

export const DEFAULT_SUBJECT_COLOR = '#6366f1';

/** A random palette color, optionally avoiding one (e.g. the last one assigned). */
export const randomSubjectColor = (avoid) => {
  const pool = avoid ? SUBJECT_COLOR_PALETTE.filter((c) => c !== avoid) : SUBJECT_COLOR_PALETTE;
  return pool[Math.floor(Math.random() * pool.length)] || DEFAULT_SUBJECT_COLOR;
};
