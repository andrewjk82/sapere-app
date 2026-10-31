/** "Review the mistakes" (teacher), Special tests only: which ids are gathered and how the review is fed. Run via npm run test:homework. */
import assert from 'node:assert';
import { specialMissed, toReviewArrays, MAX_QUESTIONS } from '../src/utils/mistakeReview.js';

let passed = 0;
const test = (name, fn) => { fn(); passed += 1; console.log(`  ✓ ${name}`); };
const week = (exams) => ({ d1: { tests: 1, marks: 1, total: 2, secs: 60, exams: Object.fromEntries(Object.entries(exams).map(([id, wrong]) => [id, { tests: 1, marks: 1, total: 2, kinds: { topic: 1 }, types: {}, wrong }])) } });

test('missed questions come from the weekly summaries, newest week first, each id once, labelled by test and week', () => {
  const got = specialMissed({ w2026_10_19: week({ 'sch-oc': ['q1', 'q2'] }), w2026_10_26: week({ 'sch-oc': ['q2', 'q3'], 'sch-selective': ['s1'] }) });
  assert.deepEqual(got.map((m) => m.id), ['q2', 'q3', 's1', 'q1']);
  assert.equal(got[0].label, 'OC test · week of 2026-10-26');
  assert.equal(got[2].label, 'Selective test · week of 2026-10-26');
  assert.equal(got[0].times, 2);                                   // q2 was missed in both weeks
  assert.equal(got[1].times, 1);
});

test('nothing recorded yet is an empty list, not an error', () => {
  assert.deepEqual(specialMissed(null), []);
  assert.deepEqual(specialMissed({}), []);
  assert.deepEqual(specialMissed({ notAWeek: week({ 'sch-oc': ['q1'] }) }), []);
});

test('the review never lists more than MAX_QUESTIONS', () => {
  const ids = (p) => Array.from({ length: 30 }, (_, i) => `${p}${i}`);    // a week keeps at most 30 per test
  const got = specialMissed({ w2026_10_26: week({ 'sch-oc': ids('a'), 'sch-selective': ids('b') }), w2026_10_19: week({ 'sch-oc': ids('c') }) });
  assert.equal(got.length, MAX_QUESTIONS);
  assert.equal(got[0].id, 'a0');                                           // the newest week comes first
});

test('the review arrays line up, show every entry as wrong, and say where it came from', () => {
  const items = [
    { question: { id: 'a' }, label: 'OC test · week of 2026-10-26', times: 2 },
    { question: { id: 'b' }, label: 'Selective test · week of 2026-10-19', times: 1 },
  ];
  const r = toReviewArrays(items);
  assert.equal(r.questions.length, 2);
  assert.deepEqual(r.userAnswers, ['', '']);
  assert.ok(r.answerResults.every((x) => x.correct === false));
  assert.equal(r.questionComments[0], 'OC test · week of 2026-10-26 · missed in 2 weeks · the answer was not kept for this one');
  assert.equal(r.questionComments[1], 'Selective test · week of 2026-10-19 · the answer was not kept for this one');
});

console.log(`\nmistake review: ${passed} passed`);
