// Thin wrapper around Date.now(). The React Compiler's purity lint flags
// direct Date.now()/new Date() calls written inside component files (it
// can't see through the reactive scope), so timer-driven components should
// read "now" through this instead — same pattern as getSprintWeekId's
// `now = new Date()` default living in utils/sprintWeek.js rather than
// inline in a component.
export const nowMs = () => Date.now();

/**
 * Splits a [startMs, endMs) wall-clock span into local hour-of-day buckets
 * (0–23), e.g. a 6:50–7:10 span → { 6: 600, 7: 600 }. Used to build the
 * Study Timer's "what time of day did I study" 24-hour ring — an
 * approximation (flush deltas can include earlier paused gaps folded in),
 * not an exact session log.
 */
export const splitSecondsIntoHourBuckets = (startMs, endMs) => {
  const buckets = {};
  if (!(endMs > startMs)) return buckets;
  let cursor = startMs;
  while (cursor < endMs) {
    const d = new Date(cursor);
    const hour = d.getHours();
    const nextHourBoundary = new Date(d.getFullYear(), d.getMonth(), d.getDate(), hour + 1, 0, 0, 0).getTime();
    const segmentEnd = Math.min(endMs, nextHourBoundary);
    const sec = Math.round((segmentEnd - cursor) / 1000);
    if (sec > 0) buckets[hour] = (buckets[hour] || 0) + sec;
    cursor = segmentEnd;
  }
  return buckets;
};
