import assert from 'node:assert/strict';
import {
  FIRST_TRY, HINT_TRY, PRACTICE, nextAttempt, pointsForAttempt, applyPartResults, pointsForParts,
  questionCredit, sessionScore, retryHints, usesAnswerAttempts,
} from '../src/utils/answerAttempts.js';

let passed = 0;
const test = (name, fn) => {
  fn();
  passed += 1;
  console.log(`  ok ${name}`);
};
const mc = (extra) => ({ type: 'multiple_choice', question: 'Q', options: ['10', '12', '14', '16'], answer: 1, ...extra });

test('only Daily Practice retries', () => {
  assert.equal(usesAnswerAttempts('daily'), true);
  assert.equal(usesAnswerAttempts('calc'), false);
});

test('full points, then half, then none', () => {
  assert.deepEqual([FIRST_TRY, HINT_TRY, PRACTICE].map(pointsForAttempt), [1, 0.5, 0]);
  assert.equal(nextAttempt(FIRST_TRY, false), HINT_TRY);
  assert.equal(nextAttempt(HINT_TRY, false), PRACTICE);
  assert.equal(nextAttempt(PRACTICE, false), PRACTICE);
});

test('a part keeps the go it was solved on', () => {
  const first = applyPartResults({}, [{ id: 'a', correct: true }, { id: 'b', correct: false }, { id: 'c', pending: true }], FIRST_TRY);
  const second = applyPartResults(first, [{ id: 'a', correct: true }, { id: 'b', correct: true }, { id: 'c', pending: true }], HINT_TRY);
  assert.deepEqual(second, { a: FIRST_TRY, b: HINT_TRY });
  assert.equal(pointsForParts(second), 1.5);
});

test('the session score counts a second-go question as half', () => {
  assert.equal(sessionScore([
    { correct: true, pointsEarned: 1, totalPoints: 1, solvedOnAttempt: 1 },
    { correct: false, pointsEarned: 0.5, totalPoints: 1, solvedOnAttempt: 2 },
    { correct: false, pointsEarned: 0, totalPoints: 1, solvedOnAttempt: null },
  ]), 1.5);
  assert.equal(questionCredit({ pointsEarned: 1.5, totalPoints: 2, solvedOnAttempt: 2 }), 0.75);
  assert.equal(questionCredit({ pointsEarned: 1, totalPoints: 2, solvedOnAttempt: null }), 0);
});

test('Daily Calculation and older results score as before', () => {
  assert.equal(questionCredit({ correct: true, pointsEarned: 1, totalPoints: 1 }), 1);
  assert.equal(questionCredit({ correct: false, pointsEarned: 0, totalPoints: 1 }), 0);
  assert.equal(questionCredit({ correct: true }), 1);
  assert.equal(questionCredit('abandoned'), 0);
});

test('the hint comes first, step 1 stands in when there is none', () => {
  assert.deepEqual(retryHints(mc({ hint: 'Add them' })), [{ label: null, lines: ['Add them'] }]);
  const [hint] = retryHints(mc({ solutionSteps: [
    { explanation: 'Line up the tens', workingOut: '4 + 8' },
    { explanation: 'Add', workingOut: '= 12' },
  ] }));
  assert.deepEqual(hint.lines, ['Line up the tens', '4 + 8']);
});

test('step 1 never hands over the answer', () => {
  const oneStep = retryHints(mc({ solutionSteps: [{ explanation: 'Add the numbers', workingOut: '4 + 8 = 12' }] }));
  assert.deepEqual(oneStep[0].lines, ['Add the numbers']);
  const answerInWork = retryHints({ type: 'short_answer', question: 'Q', answer: '3.75', solutionSteps: [
    { explanation: 'Divide', workingOut: '15 / 4 = 3.75' },
    { explanation: 'Check', workingOut: '3.75 x 4 = 15' },
  ] });
  assert.deepEqual(answerInWork[0].lines, ['Divide']);
  const nothingSafe = retryHints({ type: 'short_answer', question: 'Q', answer: '3.75', solutionSteps: [{ explanation: 'It is 3.75', workingOut: '3.75' }] });
  assert.equal(nothingSafe.length, 1);
  assert.ok(!nothingSafe[0].lines.join().includes('3.75'));
});

test('a multi-part question gets hints only for the parts still open', () => {
  const q = { type: 'multipart', question: 'Q', subQuestions: [
    mc({ id: 'a', hint: 'Hint A' }), mc({ id: 'b', hint: 'Hint B' }),
  ] };
  assert.deepEqual(retryHints(q, { a: FIRST_TRY }), [{ label: 'b', lines: ['Hint B'] }]);
});

console.log(`answer attempts: ${passed} passed`);
