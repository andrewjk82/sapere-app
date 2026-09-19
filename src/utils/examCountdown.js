// Shared helpers for the Study Planner's per-subject exam D-day feature.
// users/{uid}.studySubjectExamDates is a map keyed by subject name, each
// value either a plain "YYYY-MM-DD" string (pre-time-field data) or
// { date: "YYYY-MM-DD", time: "HH:mm" } once a time is set. Always read
// through normalizeExamEntry so both shapes work everywhere this is used
// (Study Planner card, Dashboard, Schedule calendar).

export const normalizeExamEntry = (raw) => {
  if (!raw) return null;
  if (typeof raw === 'string') return raw ? { date: raw, time: '' } : null;
  if (!raw.date) return null;
  return { date: raw.date, time: raw.time || '' };
};

const examTimestamp = (entry) => {
  const { date, time } = entry;
  return new Date(`${date}T${time || '00:00'}:00`);
};

// D-day counts whole calendar days remaining (ignores time-of-day) so
// "exam is today at 3pm" still reads D-Day, not D-1/D-0-with-drift.
export const ddayFor = (entry) => {
  if (!entry?.date) return null;
  const examMidnight = new Date(new Date(entry.date).toDateString());
  const todayMidnight = new Date(new Date().toDateString());
  return Math.ceil((examMidnight - todayMidnight) / 86400000);
};

export const isPastExam = (entry) => {
  if (!entry?.date) return false;
  return examTimestamp(entry).getTime() < Date.now();
};

export const formatExamDate = (entry) => {
  if (!entry?.date) return null;
  return new Date(`${entry.date}T00:00:00`).toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' });
};

export const formatExamTime = (entry) => {
  if (!entry?.time) return null;
  const [h, m] = entry.time.split(':').map(Number);
  return new Date(2000, 0, 1, h, m).toLocaleTimeString('en-AU', { hour: 'numeric', minute: '2-digit' });
};

/** Every not-yet-past exam across all subjects, soonest first — each one
 * auto-drops off this list once its date/time has passed. */
export const upcomingExams = (examDates = {}) => Object.entries(examDates)
  .map(([subject, raw]) => ({ subject, entry: normalizeExamEntry(raw) }))
  .filter(({ entry }) => entry && !isPastExam(entry))
  .map(({ subject, entry }) => ({ subject, entry, dday: ddayFor(entry) }))
  .sort((a, b) => a.entry.date.localeCompare(b.entry.date) || (a.entry.time || '').localeCompare(b.entry.time || ''));

/** The soonest not-yet-past exam across all subjects, or null. */
export const nextUpcomingExam = (examDates = {}) => upcomingExams(examDates)[0] || null;
