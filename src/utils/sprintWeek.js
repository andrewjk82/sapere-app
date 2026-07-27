/**
 * sprintWeek.js
 *
 * Week keys for the Times Table Sprint competition.
 *
 * Deliberately dependency-free so `api/_lib/*` (Node + admin SDK) can import
 * the exact same functions the client uses — the settlement job and the
 * student's browser must never disagree about which week a run belongs to.
 * Same precedent as api/_lib/weeklyReport.js importing src/constants/*.
 *
 * A week is Monday→Sunday in Sydney time and is identified by the Monday's
 * date string (e.g. "2026-07-27"), matching getWeekRangeSydney() in
 * api/_lib/weeklyReport.js and weekly_report/{weekId}.
 */

export const SPRINT_TZ = 'Australia/Sydney';

const sydneyDateStr = (date) => date.toLocaleDateString('en-CA', { timeZone: SPRINT_TZ });

/** Monday-anchored week id ("YYYY-MM-DD") for the week containing `now`. */
export const getSprintWeekId = (now = new Date()) => {
  const todayUTC = new Date(`${sydneyDateStr(now)}T00:00:00Z`);
  const dow = todayUTC.getUTCDay(); // 0 = Sunday
  const offsetToMon = dow === 0 ? 6 : dow - 1; // Sunday belongs to the week ending
  const monday = new Date(todayUTC);
  monday.setUTCDate(todayUTC.getUTCDate() - offsetToMon);
  return monday.toISOString().slice(0, 10);
};

/** Week id of the week before the one containing `now`. Used by settlement. */
export const getPreviousSprintWeekId = (now = new Date()) => {
  const monday = new Date(`${getSprintWeekId(now)}T00:00:00Z`);
  monday.setUTCDate(monday.getUTCDate() - 7);
  return monday.toISOString().slice(0, 10);
};

/**
 * Offset (ms) of the Sydney zone at a given instant. Derived from Intl rather
 * than hardcoded because Sydney observes DST (+10 / +11).
 */
const tzOffsetMs = (date) => {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: SPRINT_TZ,
    hour12: false,
    year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', second: '2-digit',
  }).formatToParts(date).reduce((acc, p) => {
    if (p.type !== 'literal') acc[p.type] = p.value;
    return acc;
  }, {});
  const asUTC = Date.UTC(
    Number(parts.year), Number(parts.month) - 1, Number(parts.day),
    Number(parts.hour) % 24, Number(parts.minute), Number(parts.second),
  );
  return asUTC - date.getTime();
};

/** UTC epoch ms for Sydney wall-clock midnight on the given "YYYY-MM-DD". */
const sydneyMidnightMs = (dateStr) => {
  const wall = Date.UTC(...dateStr.split('-').map((n, i) => (i === 1 ? Number(n) - 1 : Number(n))));
  // Two passes: the first offset may be the wrong side of a DST transition.
  let instant = wall - tzOffsetMs(new Date(wall));
  instant = wall - tzOffsetMs(new Date(instant));
  return instant;
};

/** Milliseconds until the current week ends (next Monday 00:00 Sydney). */
export const getMsUntilWeeklyReset = (now = new Date()) => {
  const nextMonday = new Date(`${getSprintWeekId(now)}T00:00:00Z`);
  nextMonday.setUTCDate(nextMonday.getUTCDate() + 7);
  return Math.max(0, sydneyMidnightMs(nextMonday.toISOString().slice(0, 10)) - now.getTime());
};

/** "3d 4h" / "4h 12m" / "12m 30s" — coarse countdown copy for the dashboard. */
export const formatResetCountdown = (ms) => {
  const total = Math.max(0, Math.floor(ms / 1000));
  const d = Math.floor(total / 86400);
  const h = Math.floor((total % 86400) / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  if (d > 0) return `${d}d ${h}h`;
  if (h > 0) return `${h}h ${m}m`;
  return `${m}m ${s}s`;
};

/** "12.480s" — sprint times are always shown to millisecond precision. */
export const formatSprintTime = (ms) => {
  if (!Number.isFinite(ms) || ms < 0) return '—';
  const totalSeconds = Math.floor(ms / 1000);
  const millis = String(Math.floor(ms % 1000)).padStart(3, '0');
  if (totalSeconds >= 60) {
    const mins = Math.floor(totalSeconds / 60);
    return `${mins}:${String(totalSeconds % 60).padStart(2, '0')}.${millis}`;
  }
  return `${totalSeconds}.${millis}s`;
};
