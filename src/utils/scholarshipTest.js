/**
 * Scholarship test mode (ACER, Selective…): 10 unseen questions per test, a
 * 12-minute timer, answers only after submitting. When every question of the
 * topic has been used, the next round starts from the full set again.
 *
 * Everything is stored on the device (localStorage), per student and topic:
 *   { round, done: [questionId], attempts: [attempt], current: attempt | null }
 * attempt = { id, questionIds, answers: { [questionId]: idx | { [subKey]: idx } },
 *             startedAt, submittedAt?, durationSec?, marks?, total?, round }
 */
import { gradeMcSelection } from './mcOptionShuffle.js';

export const TEST_SIZE = 10;
export const TEST_SECONDS = 12 * 60;
const MAX_ATTEMPTS = 60;

export const testStorageKey = (uid, chapterId, topicId) => `sapere:schtest:${uid}:${chapterId}:${topicId}`;

const emptyState = () => ({ round: 1, done: [], attempts: [], current: null });

export const loadTestState = (uid, chapterId, topicId) => {
  try {
    const raw = localStorage.getItem(testStorageKey(uid, chapterId, topicId));
    const s = raw ? JSON.parse(raw) : null;
    if (!s || typeof s !== 'object') return emptyState();
    return {
      round: Number(s.round) || 1,
      done: Array.isArray(s.done) ? s.done.map(String) : [],
      attempts: Array.isArray(s.attempts) ? s.attempts : [],
      current: s.current && typeof s.current === 'object' ? s.current : null,
    };
  } catch { return emptyState(); }
};

export const saveTestState = (uid, chapterId, topicId, state) => {
  try {
    localStorage.setItem(testStorageKey(uid, chapterId, topicId), JSON.stringify({
      ...state,
      attempts: (state.attempts || []).slice(-MAX_ATTEMPTS),
    }));
    window.dispatchEvent(new Event('sapere:progress-updated'));
  } catch { /* storage full — the test still works for this session */ }
};

const shuffle = (arr, rng) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

/**
 * Pick the next test: unseen questions first. If fewer than `size` are left,
 * take all of them and fill up from a fresh round (the questions this test
 * just used are not repeated in it).
 * Returns { questionIds, round } — `round` is the round the test finishes in.
 */
export const pickTestQuestions = ({ allIds, done = [], round = 1, size = TEST_SIZE, rng = Math.random }) => {
  const ids = [...new Set(allIds.map(String))];
  const doneSet = new Set(done.map(String));
  const unseen = ids.filter((id) => !doneSet.has(id));
  if (unseen.length >= size) return { questionIds: shuffle(unseen, rng).slice(0, size), round };
  const taken = shuffle(unseen, rng);
  const takenSet = new Set(taken);
  const refill = shuffle(ids.filter((id) => !takenSet.has(id)), rng).slice(0, size - taken.length);
  return { questionIds: [...taken, ...refill], round: refill.length > 0 || unseen.length === 0 ? round + 1 : round, carried: taken };
};

/**
 * Mark a submitted test's questions as used. Questions carried over from the
 * old round close it; the rest belong to the round the test finished in.
 */
export const applyFinishedTest = (state, attempt) => {
  const ids = attempt.questionIds.map(String);
  if ((attempt.round || state.round) > state.round) {
    const carried = new Set((attempt.carried || []).map(String));
    return { ...state, round: attempt.round, done: ids.filter((id) => !carried.has(id)) };
  }
  return { ...state, done: [...new Set([...state.done, ...ids])] };
};

const optionTextAt = (opts, idx) => {
  if (idx === '' || idx === null || idx === undefined) return '';
  const o = opts?.[Number(idx)];
  if (o === undefined || o === null) return '';
  return typeof o === 'string' ? o : (o.text ?? '');
};

export const subKey = (sq, i) => String(sq?.id ?? i);

/** Options are shown in their original order, so a pick is an index into q.options. */
export const isPickCorrect = (q, idx) => {
  if (idx === '' || idx === null || idx === undefined) return false;
  const opts = Array.isArray(q?.options) ? q.options : [];
  return gradeMcSelection(q, optionTextAt(opts, idx), Number(idx), opts);
};

/** Marks for one question: one per MC part (a single MC question is one mark). */
export const gradeQuestionMarks = (q, answer) => {
  if (q?.subQuestions?.length) {
    const subs = q.subQuestions;
    const marks = subs.filter((sq, i) => isPickCorrect(sq, answer?.[subKey(sq, i)])).length;
    return { marks, total: subs.length };
  }
  return { marks: isPickCorrect(q, answer) ? 1 : 0, total: 1 };
};

export const gradeTest = (questions, answers) => questions.reduce((acc, q) => {
  const r = gradeQuestionMarks(q, answers?.[String(q.id)]);
  return { marks: acc.marks + r.marks, total: acc.total + r.total };
}, { marks: 0, total: 0 });

/** A topic can run as a timed test only when every question is auto-gradable MC. */
export const isTestable = (questions) => questions.length > 0 && questions.every((q) => (
  q?.subQuestions?.length
    ? q.subQuestions.every((sq) => (sq.options || []).length > 1)
    : (q?.options || []).length > 1
));

export const secondsLeft = (attempt, now = Date.now()) => {
  const start = Number(attempt?.startedAt);
  return Math.max(0, TEST_SECONDS - Math.floor((now - (Number.isFinite(start) ? start : now)) / 1000));
};
