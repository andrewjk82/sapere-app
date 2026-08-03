// Shared per-subject color palette for the Study Timer. Colors are
// assigned randomly the first time a subject is seen and then persisted
// (users/{uid}.studySubjectColors), so the same subject always shows the
// same color across the stopwatch ring, chips, and stats.
export const SUBJECT_COLOR_PALETTE = [
  '#6366f1', '#8b5cf6', '#ec4899', '#f59e0b', '#22c55e',
  '#0ea5e9', '#ef4444', '#14b8a6', '#f97316', '#a855f7',
  '#eab308', '#06b6d4', '#f43f5e', '#84cc16', '#d946ef',
  '#10b981', '#3b82f6', '#fb923c', '#c026d3', '#0d9488',
  '#e11d48', '#65a30d', '#7c3aed', '#0891b2',
];

export const DEFAULT_SUBJECT_COLOR = '#6366f1';

/** A random palette color, optionally avoiding one (e.g. the last one assigned). */
export const randomSubjectColor = (avoid) => {
  const pool = avoid ? SUBJECT_COLOR_PALETTE.filter((c) => c !== avoid) : SUBJECT_COLOR_PALETTE;
  return pool[Math.floor(Math.random() * pool.length)] || DEFAULT_SUBJECT_COLOR;
};
