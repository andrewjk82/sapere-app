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

const DAY_MS = DAY;

/** Term intervals [{start,end}] for calendar years fromYear..toYear (end exclusive). */
const termsBetween = (fromYear, toYear) => {
  const out = [];
  for (let y = fromYear; y <= toYear; y++) {
    buildSegments(y).filter((s) => s.type === 'term').forEach((t) => out.push({ start: t.start, end: t.end }));
  }
  return out;
};

const HORIZON_YEARS = 6;

/** Teaching (in-term) calendar days between two timestamps — holidays count as zero. */
export const teachingDaysBetween = (a, b) => {
  if (b <= a) return 0;
  const y0 = new Date(a).getUTCFullYear();
  const y1 = new Date(b).getUTCFullYear();
  return termsBetween(y0, y1).reduce((sum, t) => sum + Math.max(0, Math.min(t.end, b) - Math.max(t.start, a)) / DAY_MS, 0);
};

/**
 * Move `days` teaching days forward from `ts`, skipping holidays.
 * A start that falls in a holiday jumps to the next term first.
 */
export const addTeachingDays = (ts, days) => {
  const y0 = new Date(ts).getUTCFullYear();
  let rest = days * DAY_MS;
  let cursor = ts;
  for (const t of termsBetween(y0, y0 + HORIZON_YEARS)) {
    if (t.end <= cursor) continue;
    const from = Math.max(cursor, t.start);
    const room = t.end - from;
    if (rest <= room) return from + rest;
    rest -= room;
    cursor = t.end;
  }
  return cursor;
};

/** Teaching days in one calendar year. */
export const termDaysInYear = (year) => teachingDaysBetween(Date.UTC(year, 0, 1), Date.UTC(year + 1, 0, 1));

/** Clip [a,b) to the term weeks of `year`: returns [{start,end}] (holidays are left out). */
export const termPieces = (year, a, b) =>
  buildSegments(year)
    .filter((s) => s.type === 'term')
    .map((t) => ({ start: Math.max(a, t.start), end: Math.min(b, t.end) }))
    .filter((p) => p.end > p.start);
