/**
 * NSW school calendar helpers for the Learning path roadmap.
 *
 * Dates are UTC-midnight timestamps so day maths never drifts with the
 * viewer's timezone. Only 2026 has verified dates (NSW public schools,
 * Eastern division); any other calendar year reuses the same month/day
 * pattern until its dates are added to TERM_DATES.
 */

const DAY = 86400000;
const utc = (iso) => {
  const [y, m, d] = iso.split('-').map(Number);
  return Date.UTC(y, m - 1, d);
};

// First and last student day of each term (inclusive).
export const TERM_DATES = {
  2026: [
    ['2026-02-02', '2026-04-02'],
    ['2026-04-22', '2026-07-03'],
    ['2026-07-21', '2026-09-25'],
    ['2026-10-13', '2026-12-17'],
  ],
};

const HOLIDAY_LABELS = ['Summer holiday', 'Autumn holiday', 'Winter holiday', 'Spring holiday', 'Summer holiday'];

export const termDatesFor = (year) => {
  if (TERM_DATES[year]) return TERM_DATES[year];
  const base = TERM_DATES[2026];
  return base.map(([s, e]) => [s.replace('2026', String(year)), e.replace('2026', String(year))]);
};

/**
 * Timeline segments covering Jan 1 → Dec 31:
 * [{ type: 'holiday'|'term', id, label, start, end }]   end is exclusive.
 */
export const buildSegments = (year) => {
  const terms = termDatesFor(year).map(([s, e], i) => ({ id: `T${i + 1}`, start: utc(s), end: utc(e) + DAY }));
  const yearStart = Date.UTC(year, 0, 1);
  const yearEnd = Date.UTC(year + 1, 0, 1);
  const out = [];
  let cursor = yearStart;
  terms.forEach((t, i) => {
    if (t.start > cursor) out.push({ type: 'holiday', id: `H${i}`, label: HOLIDAY_LABELS[i], start: cursor, end: t.start });
    out.push({ type: 'term', id: t.id, label: t.id, start: t.start, end: t.end });
    cursor = t.end;
  });
  if (yearEnd > cursor) out.push({ type: 'holiday', id: 'H4', label: HOLIDAY_LABELS[4], start: cursor, end: yearEnd });
  return out;
};

export const todayUtc = (now = new Date()) => Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());

/** Where `ts` sits in the school year: current term/holiday, week number, % of teaching days elapsed. */
export const yearStatus = (year, ts) => {
  const segs = buildSegments(year);
  const terms = segs.filter((s) => s.type === 'term');
  const totalDays = terms.reduce((s, t) => s + (t.end - t.start) / DAY, 0);
  const elapsedDays = terms.reduce((s, t) => s + Math.max(0, Math.min(t.end, ts + DAY) - t.start) / DAY, 0);
  const current = segs.find((s) => ts >= s.start && ts < s.end) || null;
  const next = segs.find((s) => s.start > ts && s.type !== current?.type) || null;
  const week = current?.type === 'term' ? Math.floor((ts - current.start) / (7 * DAY)) + 1 : null;
  return {
    segs, terms, current, next, week,
    pct: Math.round((elapsedDays / totalDays) * 100),
    daysToNext: next ? Math.ceil((next.start - ts) / DAY) : null,
    daysLeftInSegment: current ? Math.ceil((current.end - ts) / DAY) : null,
  };
};

/**
 * Spread `count` equal-sized blocks over the teaching days of the year (holidays
 * skipped). Returns, per block, the pieces it occupies — a block that straddles a
 * holiday is split in two so the bar never paints over the break.
 * Piece: { start, end } UTC timestamps (end exclusive).
 */
export const spreadOverTerms = (year, count) => {
  const terms = buildSegments(year).filter((s) => s.type === 'term');
  const total = terms.reduce((s, t) => s + (t.end - t.start), 0);
  return Array.from({ length: count }, (_, i) => {
    const a = (i / count) * total;
    const b = ((i + 1) / count) * total;
    const pieces = [];
    let cursor = 0;
    terms.forEach((t) => {
      const len = t.end - t.start;
      const lo = Math.max(a, cursor);
      const hi = Math.min(b, cursor + len);
      if (hi > lo) pieces.push({ start: t.start + (lo - cursor), end: t.start + (hi - cursor), term: t.id });
      cursor += len;
    });
    return pieces;
  });
};

/** Fraction (0–1) of the teaching year elapsed at `ts` — used to compute expected pace. */
export const teachingFraction = (year, ts) => {
  const terms = buildSegments(year).filter((s) => s.type === 'term');
  const total = terms.reduce((s, t) => s + (t.end - t.start), 0);
  const done = terms.reduce((s, t) => s + Math.max(0, Math.min(t.end, ts + DAY) - t.start), 0);
  return total ? done / total : 0;
};
