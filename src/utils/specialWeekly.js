/**
 * Weekly summary of a student's OC / Selective / Scholarship work, for the teacher.
 *
 * Every finished test is already kept on the student's device (utils/scholarshipTest). Once a week — the first time the
 * app is opened after a week has ended — the previous week's totals are sent to the student's own profile document in
 * ONE write, as `specialWeekly.w<monday>.<device>`. The teacher's student page already listens to that document, so it
 * costs the teacher no extra reads. Nothing is written while a week is still running, and nothing per question.
 *
 * Shape of one device's week:
 *   { tests, marks, total, secs, at,
 *     exams: { [examId]: { tests, marks, total, kinds: { topic, mock, daily }, types: { [type]: [marks, total] }, wrong: [questionId] } } }
 * A week with several devices is the sum of its devices (mergeWeek).
 */
import { getSprintWeekId } from './sprintWeek.js';

export const SCHTEST_PREFIX = 'sapere:schtest:';
export const KEEP_WEEKS = 12;
export const MAX_WRONG_IDS = 30;

/** 'sapere:schtest:<uid>:<[mock:|daily:]examId>:<topicId>' → { kind, examId, topicId } (null for any other key). */
export const parseTestKey = (uid, key) => {
  const prefix = `${SCHTEST_PREFIX}${uid}:`;
  if (!String(key).startsWith(prefix)) return null;
  const m = String(key).slice(prefix.length).match(/^(?:(mock|daily):)?(sch-[a-z]+):(.+)$/);
  return m ? { kind: m[1] || 'topic', examId: m[2], topicId: m[3] } : null;
};

/** Every submitted attempt of this student on this device. */
export const collectAttempts = (uid, storage = globalThis.localStorage) => {
  const out = [];
  if (!storage) return out;
  for (let i = 0; i < storage.length; i += 1) {
    const key = storage.key(i);
    const info = parseTestKey(uid, key);
    if (!info) continue;
    try {
      const st = JSON.parse(storage.getItem(key));
      (st?.attempts || []).forEach((attempt) => { if (attempt?.submittedAt && attempt.total > 0) out.push({ ...info, attempt }); });
    } catch { /* an unreadable entry is skipped */ }
  }
  return out;
};

const addTypes = (into, from) => Object.entries(from || {}).forEach(([k, v]) => {
  const e = into[k] || (into[k] = [0, 0]);
  e[0] += Number(v?.[0]) || 0; e[1] += Number(v?.[1]) || 0;
});
const addWrong = (into, ids) => (ids || []).forEach((id) => { if (into.length < MAX_WRONG_IDS && !into.includes(id)) into.push(id); });
const emptyExam = () => ({ tests: 0, marks: 0, total: 0, kinds: { topic: 0, mock: 0, daily: 0 }, types: {}, wrong: [] });

/** { [weekId]: summary } for the attempts given (a week is Monday–Sunday, Sydney time). */
export const buildWeeks = (items) => {
  const weeks = {};
  items.forEach(({ kind, examId, attempt }) => {
    const wk = getSprintWeekId(new Date(attempt.submittedAt));
    const w = weeks[wk] || (weeks[wk] = { tests: 0, marks: 0, total: 0, secs: 0, exams: {} });
    const e = w.exams[examId] || (w.exams[examId] = emptyExam());
    const k = attempt.kind || kind;
    w.tests += 1; w.marks += attempt.marks; w.total += attempt.total; w.secs += Number(attempt.durationSec) || 0;
    e.tests += 1; e.marks += attempt.marks; e.total += attempt.total; e.kinds[k] = (e.kinds[k] || 0) + 1;
    addTypes(e.types, attempt.types); addWrong(e.wrong, attempt.wrong);
  });
  return weeks;
};

/** Weeks that are over and have not been sent from this device, oldest first. */
export const pendingWeeks = (weeks, sent = {}, now = new Date()) => {
  const current = getSprintWeekId(now);
  return Object.keys(weeks).filter((w) => w < current && !sent[w]).sort();
};

/** Firestore field names cannot start with a digit or hold '-', so week 2026-10-26 is stored as w2026_10_26. */
export const weekKey = (weekId) => `w${weekId.replace(/-/g, '_')}`;
export const weekIdFromKey = (key) => key.slice(1).replace(/_/g, '-');
export const deviceKey = (id) => `d${String(id || 'x').replace(/[^A-Za-z0-9]/g, '').slice(0, 12) || 'x'}`;

/**
 * The one update for this device: the pending weeks, and removal of weeks older than KEEP_WEEKS so the profile
 * document does not grow without bound. `drop` is the deleteField() sentinel; `existingKeys` the weeks already stored.
 */
export const buildUploadPatch = ({ weeks, pending, deviceId, existingKeys = [], now = new Date(), drop }) => {
  const patch = {};
  pending.forEach((w) => { patch[`specialWeekly.${weekKey(w)}.${deviceKey(deviceId)}`] = { ...weeks[w], at: now.toISOString() }; });
  const cutoff = new Date(`${getSprintWeekId(now)}T00:00:00Z`); cutoff.setUTCDate(cutoff.getUTCDate() - 7 * KEEP_WEEKS);
  const cutoffId = cutoff.toISOString().slice(0, 10);
  existingKeys.forEach((k) => { if (weekIdFromKey(k) < cutoffId) patch[`specialWeekly.${k}`] = drop; });
  return patch;
};

/** Sum the devices of one stored week into one summary. */
export const mergeWeek = (weekObj) => {
  const out = { tests: 0, marks: 0, total: 0, secs: 0, exams: {} };
  Object.values(weekObj || {}).forEach((d) => {
    if (!d || typeof d !== 'object') return;
    out.tests += d.tests || 0; out.marks += d.marks || 0; out.total += d.total || 0; out.secs += d.secs || 0;
    Object.entries(d.exams || {}).forEach(([examId, e]) => {
      const x = out.exams[examId] || (out.exams[examId] = emptyExam());
      x.tests += e.tests || 0; x.marks += e.marks || 0; x.total += e.total || 0;
      Object.entries(e.kinds || {}).forEach(([k, n]) => { x.kinds[k] = (x.kinds[k] || 0) + n; });
      addTypes(x.types, e.types); addWrong(x.wrong, e.wrong);
    });
  });
  return out;
};

/** Stored `specialWeekly` → [{ weekId, ...summary }] newest first. */
export const weeksForTeacher = (specialWeekly) => Object.entries(specialWeekly || {})
  .filter(([k]) => /^w\d{4}_\d{2}_\d{2}$/.test(k))
  .map(([k, v]) => ({ weekId: weekIdFromKey(k), ...mergeWeek(v) }))
  .filter((w) => w.tests > 0)
  .sort((a, b) => b.weekId.localeCompare(a.weekId));
