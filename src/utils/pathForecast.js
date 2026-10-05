import { addTeachingDays, buildSegments, termDaysInYear, teachingDaysBetween } from './schoolCalendar';

const DAY = 86400000;
const PACE_WINDOW_DAYS = 84; // look at the last 12 weeks of completions
const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));

/**
 * Progress-based forecast for one track (a student's chain of chapters).
 *
 * chapters: [{ id, title, done, pct, current, completedAt?, assignedAt? }] in curriculum order.
 *   pct       0–100 mastery of the chapter
 *   current   teacher has assigned it and it is not finished
 *   completedAt / assignedAt   ms timestamps, when recorded
 *
 * Past: finished chapters end where they were completed. Chapters with no recorded date are
 *   spread evenly before the first dated one and flagged `approx`. Chapters finished before
 *   the displayed year are only counted (`earlier`).
 * Future: each remaining chapter takes `daysPerChapter` teaching days, starting from today
 *   (the first in-progress chapter only needs the part that is still left), skipping holidays.
 *
 * Pace is measured from completions in the last 12 weeks (needs ≥ 2), otherwise estimated
 * from the size of the track.
 */
export const forecastTrack = ({ chapters, today, year }) => {
  const total = chapters.length;
  const terms = buildSegments(year).filter((s) => s.type === 'term');
  const yStart = terms[0]?.start ?? Date.UTC(year, 0, 1);
  const now = today + DAY;

  const done = chapters.filter((c) => c.done);
  const rest = chapters.filter((c) => !c.done);

  // ── pace ──
  const recent = done.filter((c) => c.completedAt && c.completedAt >= now - PACE_WINDOW_DAYS * DAY && c.completedAt <= now);
  let daysPerChapter;
  let basis;
  if (recent.length >= 2) {
    daysPerChapter = clamp(teachingDaysBetween(now - PACE_WINDOW_DAYS * DAY, now) / recent.length, 3, 60);
    basis = 'measured';
  } else {
    daysPerChapter = clamp(termDaysInYear(year) / Math.max(total, 1), 14, 49);
    basis = 'estimated';
  }

  // ── past ──
  const earlier = done.filter((c) => c.completedAt && c.completedAt < yStart).length;
  const undated = done.filter((c) => !c.completedAt);
  const dated = done.filter((c) => c.completedAt && c.completedAt >= yStart).sort((a, b) => a.completedAt - b.completedAt);

  const items = [];
  let cursor = yStart;
  if (undated.length) {
    const natural = addTeachingDays(yStart, undated.length * daysPerChapter);
    const limit = dated.length ? Math.max(yStart + DAY, dated[0].completedAt - DAY) : now;
    const end = Math.max(yStart + undated.length * DAY, Math.min(natural, limit));
    undated.forEach((c, i) => {
      const a = yStart + ((end - yStart) * i) / undated.length;
      const b = yStart + ((end - yStart) * (i + 1)) / undated.length;
      items.push({ chapter: c, state: 'done', start: a, end: b, approx: true });
    });
    cursor = end;
  }
  dated.forEach((c) => {
    const end = Math.min(now, Math.max(cursor + DAY, c.completedAt + DAY));
    items.push({ chapter: c, state: 'done', start: cursor, end, approx: false });
    cursor = end;
  });

  // ── future ──
  let from = Math.max(cursor, Math.min(cursor, now));
  from = Math.min(from, now);
  rest.forEach((c, i) => {
    const isFirst = i === 0;
    const state = c.current ? 'current' : 'planned';
    let start;
    let end;
    if (isFirst) {
      start = c.assignedAt ? clamp(c.assignedAt, from, now) : from;
      const left = clamp(1 - (c.pct || 0) / 100, 0.1, 1);
      end = addTeachingDays(now, daysPerChapter * left);
      if (end <= start) end = start + DAY;
    } else {
      start = items[items.length - 1].end;
      end = addTeachingDays(start, daysPerChapter);
    }
    items.push({ chapter: c, state, start, end, approx: false });
  });

  const lastRest = rest.length ? items[items.length - 1] : null;
  return { items, earlier, daysPerChapter, basis, finish: lastRest ? lastRest.end : null };
};
