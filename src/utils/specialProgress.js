/**
 * Teacher-side reading of a student's stored OC / Selective / Scholarship weeks (utils/specialWeekly):
 * the score trend, the question types that need teaching, how much was practised, and what to worry about.
 * Pure functions over data already on the student's profile document — no reads.
 */
import { getSprintWeekId } from './sprintWeek.js';

export const pct = (marks, total) => (total > 0 ? Math.round((marks / total) * 100) : 0);

const RECENT_WEEKS = 4;
const MIN_TYPE_MARKS = 6;        // fewer marks than this says nothing about a type
const WEAK_TYPE_PCT = 40;
const LOW_SCORE_PCT = 50;
const RUSH_SECS_PER_MARK = 15;   // faster than this over a whole week looks like guessing
const RUSH_MIN_MARKS = 10;

const shiftWeek = (weekId, weeks) => {
  const d = new Date(`${weekId}T00:00:00Z`);
  d.setUTCDate(d.getUTCDate() + 7 * weeks);
  return d.toISOString().slice(0, 10);
};

/** `weeks` newest first (weeksForTeacher) → oldest first, with a percentage on each week and each exam. */
export const trendSeries = (weeks) => [...(weeks || [])].reverse().map((w) => ({
  weekId: w.weekId,
  tests: w.tests,
  marks: w.marks,
  total: w.total,
  secs: w.secs,
  pct: pct(w.marks, w.total),
  exams: Object.fromEntries(Object.entries(w.exams || {}).filter(([, e]) => e.total > 0).map(([id, e]) => [id, pct(e.marks, e.total)])),
}));

/**
 * Per exam, every question type with its score over all stored weeks and over the latest RECENT_WEEKS, weakest
 * recent score first. → { [examId]: [{ name, marks, total, pct, recentMarks, recentTotal, recentPct | null }] }
 */
export const typeBreakdown = (weeks) => {
  const out = {};
  (weeks || []).forEach((w, i) => {
    Object.entries(w.exams || {}).forEach(([examId, e]) => {
      const exam = out[examId] || (out[examId] = {});
      Object.entries(e.types || {}).forEach(([name, v]) => {
        const t = exam[name] || (exam[name] = { name, marks: 0, total: 0, recentMarks: 0, recentTotal: 0 });
        t.marks += Number(v?.[0]) || 0; t.total += Number(v?.[1]) || 0;
        if (i < RECENT_WEEKS) { t.recentMarks += Number(v?.[0]) || 0; t.recentTotal += Number(v?.[1]) || 0; }
      });
    });
  });
  return Object.fromEntries(Object.entries(out).map(([examId, types]) => [examId, Object.values(types)
    .filter((t) => t.total > 0)
    .map((t) => ({ ...t, pct: pct(t.marks, t.total), recentPct: t.recentTotal > 0 ? pct(t.recentMarks, t.recentTotal) : null }))
    .sort((a, b) => (a.recentPct ?? a.pct) - (b.recentPct ?? b.pct))]));
};

/** Totals over the latest RECENT_WEEKS stored weeks. */
export const recentVolume = (weeks) => {
  const recent = (weeks || []).slice(0, RECENT_WEEKS);
  const sum = (key) => recent.reduce((s, w) => s + (Number(w[key]) || 0), 0);
  const total = sum('total'); const secs = sum('secs');
  return { weeks: recent.length, tests: sum('tests'), marks: sum('marks'), total, secs, secsPerMark: total > 0 && secs > 0 ? Math.round(secs / total) : null };
};

/**
 * What the teacher should look at, most pressing first. `examLabel(examId)` names an exam.
 * → [{ tone: 'red' | 'amber', text }]
 */
export const buildAlerts = (weeks, { now = new Date(), examLabel = (id) => id } = {}) => {
  const alerts = [];
  if (!weeks?.length) return alerts;
  const [w0, w1, w2] = weeks;
  const lastFinished = shiftWeek(getSprintWeekId(now), -1);
  if (w0.weekId < lastFinished) {
    alerts.push({ tone: 'amber', text: 'No results for last week — no test was done, or the app has not been opened since the week ended.' });
  }
  const p0 = pct(w0.marks, w0.total);
  if (w1 && w2) {
    const p1 = pct(w1.marks, w1.total); const p2 = pct(w2.marks, w2.total);
    if (p0 < p1 && p1 < p2) alerts.push({ tone: 'red', text: `Score has fallen two weeks in a row (${p2}% → ${p1}% → ${p0}%).` });
  }
  if (p0 < LOW_SCORE_PCT) alerts.push({ tone: 'red', text: `Latest week scored ${p0}% (${w0.marks} of ${w0.total} marks).` });
  if (w0.total >= RUSH_MIN_MARKS && w0.secs > 0 && w0.secs / w0.total < RUSH_SECS_PER_MARK) {
    alerts.push({ tone: 'red', text: `About ${Math.round(w0.secs / w0.total)} seconds per mark in the latest week — likely guessing or giving up early.` });
  }
  Object.entries(typeBreakdown(weeks)).forEach(([examId, types]) => {
    types.filter((t) => t.recentTotal >= MIN_TYPE_MARKS && t.recentPct < WEAK_TYPE_PCT).slice(0, 3).forEach((t) => {
      alerts.push({ tone: 'amber', text: `${examLabel(examId)} · ${t.name}: ${t.recentPct}% over the last ${RECENT_WEEKS} weeks (${t.recentMarks} of ${t.recentTotal}).` });
    });
  });
  return alerts;
};
