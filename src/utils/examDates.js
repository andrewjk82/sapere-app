/**
 * When a student sits the NSW OC and Selective placement tests, worked out from their school year.
 *
 * Both tests are sat in a fixed school year, then the child starts the new school the year after:
 *   - OC (Opportunity Class, Year 5 entry): sat in Year 4 — results come out in September of Year 4.
 *   - Selective High School (Year 7 entry): sat in Year 6 — results come out in August of Year 6.
 * So a Year 2 student sits OC two calendar years from now, and a Year 5 student sits Selective next year.
 *
 * Dates are only published about a year ahead; for later years the page says "expected in May, not announced"
 * instead of inventing a day. Add a year to `dates` when the Department publishes it.
 *
 * Source (checked 2026-10-31): https://education.nsw.gov.au/schooling/parents-and-carers/choosing-a-school-setting/selective-high-schools/application-process
 * The Department says dates may change — recheck before the application window opens.
 */

export const PLACEMENT_SOURCE_URL = 'https://education.nsw.gov.au/schooling/parents-and-carers/choosing-a-school-setting/selective-high-schools/application-process';
export const PLACEMENT_DATES_CHECKED = '2026-10-31';

/** Keyed by the calendar year the test is SAT in. All dates are YYYY-MM-DD, NSW (Sydney) calendar days. */
export const PLACEMENT_TESTS = {
  'sch-oc': {
    name: 'OC Placement Test',
    short: 'OC',
    testYearLevel: 4,
    entry: 'Year 5',
    dates: {
      2027: { applyOpen: '2026-11-05', applyClose: '2027-02-15', start: '2027-05-11', end: '2027-05-12', makeup: '2027-06-10' },
    },
  },
  'sch-selective': {
    name: 'Selective High School Placement Test',
    short: 'Selective',
    testYearLevel: 6,
    entry: 'Year 7',
    dates: {
      2027: { applyOpen: '2026-11-05', applyClose: '2027-02-15', start: '2027-05-13', end: '2027-05-14', makeup: '2027-06-11' },
    },
  },
};

/** The school year number (1–12) from a profile. Profiles hold it as "Year 9", "9", "Y3", "Year1", "07", "10 "… */
export const yearNumberOf = (profile) => {
  for (const raw of [profile?.year, profile?.level, profile?.yearLevel]) {
    const m = String(raw ?? '').match(/\d{1,2}/);
    if (!m) continue;
    const n = Number(m[0]);
    if (n >= 1 && n <= 12) return n;
  }
  return null;
};

const DAY = 86400000;
const utcDay = (iso) => { const [y, m, d] = iso.split('-').map(Number); return Date.UTC(y, m - 1, d); };
const todayUtc = (now) => Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
/** Whole calendar days from today to `iso` (negative once it has passed). */
export const daysUntil = (iso, now = new Date()) => Math.round((utcDay(iso) - todayUtc(now)) / DAY);

/**
 * The student's next sitting of one placement test.
 * status:
 *   'upcoming'      dates published → `sitting` + `milestones` (not-yet-passed steps, soonest first), `daysLeft` to the test
 *   'unannounced'   will sit it in `testYear` but the Department has not published that year's dates yet
 *   'passed'        this year's sitting is over (`sitting` is null when we hold no dates for that year; otherwise
 *                   `sitting.makeupLeft` says whether the make-up is still ahead)
 *   'notApplicable' already past the test year
 *   'noYear'        the profile has no school year
 */
export const nextSitting = (examId, profile, now = new Date()) => {
  const t = PLACEMENT_TESTS[examId];
  if (!t) return null;
  const year = yearNumberOf(profile);
  if (year == null) return { status: 'noYear', test: t };
  const thisYear = now.getFullYear();
  if (year > t.testYearLevel) return { status: 'notApplicable', test: t, year };
  const testYear = thisYear + (t.testYearLevel - year);
  const d = t.dates[testYear];
  if (!d) {
    // This year's sitting that we hold no dates for: both tests are sat in May, so from June it is over.
    if (testYear === thisYear && now.getMonth() >= 5) return { status: 'passed', test: t, year, testYear, sitting: null, milestones: [] };
    return { status: 'unannounced', test: t, year, testYear, yearsAway: testYear - thisYear };
  }

  const toTest = daysUntil(d.start, now);
  const toEnd = daysUntil(d.end, now);
  const makeupLeft = d.makeup ? daysUntil(d.makeup, now) >= 0 : false;
  const steps = [
    { key: 'applyOpen', label: 'Applications open', date: d.applyOpen },
    { key: 'applyClose', label: 'Applications close', date: d.applyClose },
    { key: 'test', label: 'Test day', date: d.start, endDate: d.end },
    ...(d.makeup ? [{ key: 'makeup', label: 'Make-up test', date: d.makeup }] : []),
  ].map((s) => ({ ...s, daysLeft: daysUntil(s.date, now) }));

  if (toEnd < 0) {
    return { status: 'passed', test: t, year, testYear, sitting: { ...d, makeupLeft }, milestones: steps.filter((s) => s.key === 'makeup' && s.daysLeft >= 0) };
  }
  return { status: 'upcoming', test: t, year, testYear, sitting: d, daysLeft: toTest, milestones: steps.filter((s) => s.daysLeft >= 0), yearsAway: testYear - thisYear };
};

export const formatDay = (iso, opts = { day: 'numeric', month: 'short', year: 'numeric' }) => (
  new Date(`${iso}T00:00:00`).toLocaleDateString('en-AU', opts)
);

/** "D-193", "D-Day", or "D+3" for a day count. */
export const ddayLabel = (days) => (days === 0 ? 'D-Day' : days > 0 ? `D-${days}` : `D+${Math.abs(days)}`);
