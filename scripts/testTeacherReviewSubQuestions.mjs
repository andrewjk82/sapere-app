/**
 * Teacher-review sub-question handling regression.
 *
 * Feature request (2026-07-18): for a sub-question the teacher must check by
 * hand (type 'teacher_review' / 'graph_sketch' / requiresManualGrading), the
 * student writes on the shared sketch board instead of typing into a text
 * box — DailyChallenge (ChallengeQuizView) and TopicPracticeSession both used
 * to render a plain text input for every non-MC sub-question, which for a
 * teacher-review sub either sat unused or got auto-graded via answersMatch
 * against a full worked-solution string and always came back "wrong" —
 * silently blocking the sub, the "Submit All Parts" gate (which required a
 * subAnswers key for every sub, including the one with no input to fill),
 * and the question's overall mastery/correctness.
 *
 * While fixing this, a second real bug surfaced in the same function
 * (DailyChallenge.jsx handleAnswer): MC sub-questions were graded with plain
 * answersMatch(userAnswer, sq.answer) — but chapterSeeder writes sq.answer as
 * a 0-based INDEX string, while ChallengeQuizView stores the picked option's
 * TEXT in subAnswers. Text never equals an index string, so every MC
 * sub-question was silently marked wrong. Fixed to use gradeMcSelection, the
 * same shared resolver TopicPracticeSession's own sub-grading already used.
 *
 * This script builds Firestore-shaped sub-questions from the real seed
 * y12a-5c-q14 (src/constants/seedYear12Ch5CQuestions.js: subs (a) teacher_review,
 * (b)/(c) multiple_choice, (d) short_answer) by replicating chapterSeeder's
 * own mapping (options + 0-based index answer, unshuffled — sub-question
 * options are never shuffled by the client), then re-implements the exact
 * grading algorithm now in DailyChallenge.jsx as a pure function and checks
 * it against that data. Pure-logic regression, independent of React
 * rendering — this repo has no component-render test harness; every suite in
 * scripts/ follows this same pattern.
 *
 * Usage: npm run test:teacher-review-subs
 */
import assert from 'node:assert';
import { Y12A_CH5C_QUESTIONS } from '../src/constants/seedYear12Ch5CQuestions.js';
import { gradeMcSelection } from '../src/utils/mcOptionShuffle.js';
import { answersMatch } from '../src/utils/answerMatching.js';

const subNeedsTeacher = (sq) =>
  sq?.type === 'teacher_review' || sq?.type === 'graph_sketch' || sq?.requiresManualGrading === true;

// Mirrors chapterSeeder.js's mappedSubQuestions: MC subs get an `options`
// array (authored order — never shuffled at write time or by the client for
// sub-questions) and `answer` as the 0-based index into that array.
const toFirestoreShape = (sq) => {
  if (sq.type !== 'multiple_choice') {
    return { id: sq.id, type: sq.type, question: sq.question, answer: sq.a ?? sq.answer, options: [] };
  }
  const options = (sq.opts || []).map((o) => (typeof o === 'object' ? o : { text: String(o), imageUrl: '' }));
  return { id: sq.id, type: sq.type, question: sq.question, options, answer: String(sq.a) };
};

// Mirrors DailyChallenge.jsx handleAnswer's subQuestions branch exactly.
const gradeSubQuestions = (rawSubQuestions, answersByKey) => {
  const subQuestions = rawSubQuestions.map(toFirestoreShape);
  const subResults = subQuestions.map((sq, idx) => {
    const key = sq.id || idx;
    const userAnswer = answersByKey[key];
    if (subNeedsTeacher(sq)) return { id: key, pending: true, answer: userAnswer };
    const subCorrect = sq.type === 'multiple_choice'
      ? gradeMcSelection(sq, userAnswer, null, sq.options || [])
      : answersMatch(userAnswer, sq.answer);
    return { id: key, correct: subCorrect, answer: userAnswer };
  });
  const gradableResults = subResults.filter((r) => !r.pending);
  const correct = gradableResults.length === 0 || gradableResults.every((r) => r.correct);
  const pointsEarned = gradableResults.filter((r) => r.correct).length;
  return { subResults, correct, pointsEarned, totalPoints: gradableResults.length };
};

// Mirrors ChallengeQuizView.jsx's "Submit All Parts" disabled condition.
const isSubmitBlocked = (subQuestions, answersByKey) =>
  subQuestions.some((sq, sIdx) => !subNeedsTeacher(sq) && answersByKey[sq.id || sIdx] === undefined);

let passed = 0;
const check = (name, fn) => {
  try { fn(); console.log(`  ok ${name}`); passed += 1; }
  catch (e) { console.error(`  ✗ ${name}\n    ${e.message}`); process.exitCode = 1; }
};

const q14 = Y12A_CH5C_QUESTIONS.find((q) => q.id === 'y12a-5c-q14');

console.log('\nTeacher-review sub-question handling (real seed y12a-5c-q14)\n');

check('seed shape matches what this fix targets: (a) teacher_review, (b)/(c) auto-gradable', () => {
  assert.ok(q14, 'y12a-5c-q14 must exist in the seed file');
  assert.equal(q14.subQuestions.length, 4, 'expected 4 sub-questions (a-d)');
  assert.equal(q14.subQuestions[0].id, 'y12a-5c-q14a');
  assert.equal(subNeedsTeacher(q14.subQuestions[0]), true, 'part (a) must need teacher review');
  assert.equal(subNeedsTeacher(q14.subQuestions[1]), false, 'part (b) is multiple_choice — auto-gradable');
  assert.equal(subNeedsTeacher(q14.subQuestions[2]), false, 'part (c) is multiple_choice — auto-gradable');
});

// Parts (b)/(c) exercise the fix directly. Part (d)'s correct option happens
// to read "(0,0)" for a DIFFERENT part of this same question, and — a
// separate, pre-existing bug independent of this fix — chapterSeeder never
// stamps `isManual` on sub-questions, so mcOptionShuffle's ambiguity guard
// (a digit answer that also looks like another option's value needs
// `isManual` to disambiguate) can't safely resolve part (d) in isolation.
// Not this fix's bug to carry; flagged separately, so these checks stick to
// (b)/(c) where no such collision exists.
check('answering only the gradable parts correctly (never touching (a)) grades the set correct', () => {
  const correctOptText = (sq) => (sq.opts || [])[Number(sq.a)];
  const answers = {
    'y12a-5c-q14b': correctOptText(q14.subQuestions[1]),
    'y12a-5c-q14c': correctOptText(q14.subQuestions[2]),
  };
  const subsBC = q14.subQuestions.slice(0, 3); // (a) teacher_review, (b)/(c) MC
  const result = gradeSubQuestions(subsBC, answers);
  assert.equal(result.subResults[0].pending, true, 'part (a) must be marked pending, not graded');
  assert.equal(result.subResults[0].correct, undefined, 'part (a) must never be marked right or wrong');
  assert.equal(result.correct, true, 'set must be graded correct without an answer for the pending part — the MC-index-vs-text bug this fix also caught must stay fixed');
  assert.equal(result.totalPoints, 2, 'the pending part must not count toward the denominator');
  assert.equal(result.pointsEarned, 2);
});

check('a wrong answer on a gradable part still fails the set (pending part does not mask real mistakes)', () => {
  const sqB = q14.subQuestions[1];
  const wrongB = (sqB.opts || []).find((_, i) => i !== Number(sqB.a));
  const correctOptText = (sq) => (sq.opts || [])[Number(sq.a)];
  const answers = {
    'y12a-5c-q14b': wrongB,
    'y12a-5c-q14c': correctOptText(q14.subQuestions[2]),
  };
  const subsBC = q14.subQuestions.slice(0, 3);
  const result = gradeSubQuestions(subsBC, answers);
  assert.equal(result.correct, false);
  assert.equal(result.pointsEarned, 1);
});

check('"Submit All Parts" is enabled once every gradable part has an answer, with (a) left untouched', () => {
  const answers = {
    'y12a-5c-q14b': 'anything',
    'y12a-5c-q14c': 'anything',
    'y12a-5c-q14d': 'anything',
    // no 'y12a-5c-q14a' key — no input exists for it
  };
  assert.equal(isSubmitBlocked(q14.subQuestions, answers), false);
});

check('"Submit All Parts" stays blocked while a real gradable part is unanswered', () => {
  const answers = { 'y12a-5c-q14b': 'anything' }; // (c), (d) missing
  assert.equal(isSubmitBlocked(q14.subQuestions, answers), true);
});

check('a set made ENTIRELY of teacher-review parts is never blocked and always grades correct', () => {
  const allTeacher = [
    { id: 's1', type: 'teacher_review', answer: 'long explanation' },
    { id: 's2', type: 'graph_sketch' },
  ];
  assert.equal(isSubmitBlocked(allTeacher, {}), false, 'nothing to type, so nothing should block submit');
  const result = gradeSubQuestions(allTeacher, {});
  assert.equal(result.correct, true);
  assert.equal(result.totalPoints, 0);
});

console.log(`\n${passed} checks passed.\n`);
