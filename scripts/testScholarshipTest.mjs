import assert from 'node:assert/strict';
import {
  pickTestQuestions, applyFinishedTest, gradeQuestionMarks, gradeTest, isTestable, secondsLeft, TEST_SECONDS,
} from '../src/utils/scholarshipTest.js';

const ids = Array.from({ length: 25 }, (_, i) => `q${i}`);
let state = { round: 1, done: [], attempts: [], current: null };

// Round 1: 10 + 10 unseen, never repeating.
const t1 = pickTestQuestions({ allIds: ids, done: state.done, round: state.round });
assert.equal(t1.questionIds.length, 10);
assert.equal(t1.round, 1);
state = applyFinishedTest(state, t1);
const t2 = pickTestQuestions({ allIds: ids, done: state.done, round: state.round });
assert.equal(t2.questionIds.filter((id) => t1.questionIds.includes(id)).length, 0);
state = applyFinishedTest(state, t2);
assert.equal(state.done.length, 20);

// 5 left → those 5 + 5 from round 2, none repeated within the test.
const t3 = pickTestQuestions({ allIds: ids, done: state.done, round: state.round });
assert.equal(t3.questionIds.length, 10);
assert.equal(new Set(t3.questionIds).size, 10);
assert.equal(t3.round, 2);
const leftover = ids.filter((id) => !state.done.includes(id));
assert.ok(leftover.every((id) => t3.questionIds.includes(id)), 'unseen questions come first');
state = applyFinishedTest(state, t3);
assert.equal(state.round, 2);
assert.equal(state.done.length, 5, 'only the refill counts toward round 2');

// Topic smaller than a test (ACER Reading has 8): whole set, then a new round.
let small = { round: 1, done: [], attempts: [] };
const s1 = pickTestQuestions({ allIds: ['a', 'b', 'c'], done: small.done, round: small.round });
assert.equal(s1.questionIds.length, 3);
assert.equal(s1.round, 1);
small = applyFinishedTest(small, s1);
const s2 = pickTestQuestions({ allIds: ['a', 'b', 'c'], done: small.done, round: small.round });
assert.equal(s2.questionIds.length, 3);
assert.equal(s2.round, 2);
small = applyFinishedTest(small, s2);
assert.equal(small.round, 2);
assert.equal(small.done.length, 3);

// Grading: answer is the option index, options shown in original order.
const mc = { id: 'm', type: 'multiple_choice', options: ['A', 'B', 'C', 'D'], answer: 3, isManual: true };
assert.deepEqual(gradeQuestionMarks(mc, 3), { marks: 1, total: 1 });
assert.deepEqual(gradeQuestionMarks(mc, 0), { marks: 0, total: 1 });
assert.deepEqual(gradeQuestionMarks(mc, undefined), { marks: 0, total: 1 });
const mp = { id: 'p', subQuestions: [
  { id: 'a', type: 'multiple_choice', options: ['1', '2', '3', '4'], answer: 1, isManual: true },
  { id: 'b', type: 'multiple_choice', options: ['x', 'y'], answer: 0, isManual: true },
] };
assert.deepEqual(gradeQuestionMarks(mp, { a: 1, b: 1 }), { marks: 1, total: 2 });
assert.deepEqual(gradeTest([mc, mp], { m: 3, p: { a: 1, b: 0 } }), { marks: 3, total: 3 });

assert.equal(isTestable([mc, mp]), true);
assert.equal(isTestable([{ id: 'w', type: 'teacher_review' }]), false);
assert.equal(secondsLeft({ startedAt: 1000 }, 1000), TEST_SECONDS);
assert.equal(secondsLeft({ startedAt: 0 }, (TEST_SECONDS + 5) * 1000), 0);

console.log('scholarship test: passed');

// Near-identical sentence options must not all count as correct (OC Test 2 Q11).
import { isPickCorrect, correctIndexOf } from '../src/utils/scholarshipTest.js';
const sent = { id: 's', type: 'multiple_choice', answer: '0', isManual: true, options: [
  'Most people had their first cup of coffee at their home or at work.',
  'Most people had their first cup of coffee at their work or at a coffee shop.',
  'Most people had their first cup of coffee at their home or while travelling.',
  'Most people had their first cup of coffee at their home or at a coffee shop.'] };
assert.equal(correctIndexOf(sent), 0);
assert.equal(isPickCorrect(sent, 0), true);
assert.deepEqual([1, 2, 3].map((i) => isPickCorrect(sent, i)), [false, false, false]);
assert.equal(correctIndexOf({ answer: '', options: ['a', 'b'] }), -1);
console.log('scholarship test: index grading passed');
