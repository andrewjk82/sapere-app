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

/** The index of the right option. Canonical MC answers are always an index (content/schema.js); -1 if it isn't one. */
export const correctIndexOf = (q) => {
  const n = Number(q?.answer);
  const len = Array.isArray(q?.options) ? q.options.length : 0;
  return String(q?.answer ?? '').trim() !== '' && Number.isInteger(n) && n >= 0 && n < len ? n : -1;
};

/**
 * Options are shown in their original order, so a pick is an index into q.options and is graded by index.
 * Matching the option TEXT (what the shuffled practice screens do) marks near-identical sentences such as
 * "Most people had their first cup of coffee at their home or at work." and its three variants all correct.
 */
export const isPickCorrect = (q, idx) => {
  if (idx === '' || idx === null || idx === undefined) return false;
  const right = correctIndexOf(q);
  if (right >= 0) return Number(idx) === right;
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

export const secondsLeft = (attempt, now = Date.now(), limit = TEST_SECONDS) => {
  const start = Number(attempt?.startedAt);
  return Math.max(0, limit - Math.floor((now - (Number.isFinite(start) ? start : now)) / 1000));
};

const optionText = (o) => (typeof o === 'string' ? o : (o?.text ?? ''));

/**
 * The shape the challenge review screen (components/challenge/ChallengeReviewView) expects, built from a finished
 * test: `questions` in test order, what the student picked as text, and a result per question.
 * Test answers are option INDEXES (options are never shuffled in a test), the review compares TEXT — so the right
 * option is passed as `_shuffledAnswer` and each part's `answer` becomes the right option's text.
 * `selectedOptionIdx` + an identity `_shuffledOrder` keep figure-only options (no text) displayable.
 */
export const toReviewItems = (questions, answers = {}) => {
  const out = { questions: [], userAnswers: [], answerResults: [] };
  questions.forEach((q) => {
    const a = answers[String(q.id)];
    if (q?.subQuestions?.length) {
      const picked = {};
      const partCorrect = [];
      const subs = q.subQuestions.map((sq, i) => {
        const k = subKey(sq, i);
        const idx = a?.[k];
        const has = idx !== undefined && idx !== null && idx !== '';
        picked[k] = has ? optionText(sq.options?.[Number(idx)]) : '';
        partCorrect.push(isPickCorrect(sq, idx));
        const ci = correctIndexOf(sq);
        return { ...sq, answer: ci >= 0 ? optionText(sq.options[ci]) : sq.answer };
      });
      out.questions.push({ ...q, subQuestions: subs });
      out.userAnswers.push(picked);
      // `partCorrect` is what the review shows per part: it must come from the grader, not from comparing answer text
      // (text matching ignores units, so "0.875 g" would count as "0.875 kg").
      out.answerResults.push({ correct: partCorrect.every(Boolean), partCorrect });
      return;
    }
    const has = a !== undefined && a !== null && a !== '';
    const ci = correctIndexOf(q);
    const opts = Array.isArray(q.options) ? q.options : [];
    out.questions.push({
      ...q,
      ...(ci >= 0 ? { _shuffledAnswer: optionText(opts[ci]), _shuffledAnswerIndex: ci } : {}),
      _shuffledOrder: opts.map((_, i) => i),
    });
    out.userAnswers.push(has ? optionText(opts[Number(a)]) : '');
    out.answerResults.push({ correct: isPickCorrect(q, a), selectedOptionIdx: has ? Number(a) : undefined });
  });
  return out;
};

/** One marker per question for the result screen's question map: 'right' | 'partial' | 'wrong' | 'blank'. */
export const questionOutcomes = (questions, answers = {}) => questions.map((q) => {
  const r = gradeQuestionMarks(q, answers[String(q.id)]);
  const answered = q?.subQuestions?.length
    ? q.subQuestions.some((sq, i) => answers[String(q.id)]?.[subKey(sq, i)] !== undefined)
    : answers[String(q.id)] !== undefined && answers[String(q.id)] !== null && answers[String(q.id)] !== '';
  if (r.marks === r.total) return 'right';
  if (!answered) return 'blank';
  return r.marks > 0 ? 'partial' : 'wrong';
});

/**
 * What one finished test missed, kept on the attempt so the weekly summary never needs the question bank:
 * `wrong` = ids of questions not fully right, `types` = { question type: [marks, total] }.
 */
export const attemptDetails = (questions, answers = {}) => {
  const wrong = []; const types = {};
  questions.forEach((q) => {
    const r = gradeQuestionMarks(q, answers[String(q.id)]);
    if (r.marks < r.total) wrong.push(String(q.id));
    const t = String(q.category || '').trim();
    if (t) { const e = types[t] || (types[t] = [0, 0]); e[0] += r.marks; e[1] += r.total; }
  });
  return { wrong, types };
};
