/** "Review the mistakes" (teacher): which sessions are read, what counts as a mistake, de-duplication. Run via npm run test:homework. */
import assert from 'node:assert';
import {
  sessionsWithMistakes, mistakesFromDetail, mergeMistakes, specialMissed, toReviewArrays, MAX_SESSIONS, MAX_QUESTIONS,
} from '../src/utils/mistakeReview.js';

let passed = 0;
const test = (name, fn) => { fn(); passed += 1; console.log(`  ✓ ${name}`); };
const stat = (id, results, extra = {}) => ({ id, date: id, dateLabel: `d${id}`, completed: true, hasDetailSnapshot: true, challengeType: 'daily', answerResults: results.map((c) => ({ correct: c })), ...extra });

test('only recent finished sessions that contain a mistake are read — a clean or abandoned session costs nothing', () => {
  const stats = [
    stat('5', [true, false]), stat('4', [true, true]), stat('3', [false], { abandoned: true }),
    stat('2', [false], { hasDetailSnapshot: false }), stat('1', [false, false], { challengeType: 'calc' }),
  ];
  assert.deepEqual(sessionsWithMistakes(stats).map((s) => s.id), ['5', '1']);
});

test('at most MAX_SESSIONS sessions are read, newest first', () => {
  const stats = Array.from({ length: 30 }, (_, i) => stat(String(30 - i), [false]));
  const got = sessionsWithMistakes(stats);
  assert.equal(got.length, MAX_SESSIONS);
  assert.equal(got[0].id, '30');
});

test('a mistake is a result marked wrong; pending (teacher-marked) answers are not mistakes', () => {
  const detail = {
    questions: [{ id: 'q1' }, { id: 'q2' }, { id: 'q3' }, { id: 'q4' }],
    userAnswers: ['a', 'b', 'c', 'd'],
    answerResults: [{ correct: true }, { correct: false }, { correct: false, isPending: true }, false],
  };
  const got = mistakesFromDetail(detail, stat('7', [], { dateLabel: 'Tue 27 Oct' }));
  assert.deepEqual(got.map((e) => e.question.id), ['q2', 'q4']);          // q3 is waiting for the teacher's mark; a bare `false` counts
  assert.equal(got[0].userAnswer, 'b');
  assert.equal(got[0].label, 'Daily Practice · Tue 27 Oct');
  assert.equal(mistakesFromDetail({ questions: [{ id: 'x' }], answerResults: [{ correct: false }] }, stat('1', [], { challengeType: 'calc', dateLabel: 'Mon' }))[0].label, 'Daily Calculation · Mon');
  assert.deepEqual(mistakesFromDetail(null, stat('1', [])), []);
});

test('a question missed in several sessions is reviewed once, newest first, with how often it was missed', () => {
  const e = (id, label) => ({ question: { id }, userAnswer: '', result: { correct: false }, label });
  const got = mergeMistakes([e('a', 'new'), e('b', 'new'), e('a', 'old'), e('a', 'older')]);
  assert.deepEqual(got.map((x) => [x.question.id, x.times, x.label]), [['a', 3, 'new'], ['b', 1, 'new']]);
  assert.equal(mergeMistakes(Array.from({ length: 100 }, (_, i) => e(`q${i}`, 'x'))).length, MAX_QUESTIONS);
  assert.deepEqual(mergeMistakes([{ question: {} }]), []);
});

test('missed special-test questions come from the weekly summaries, newest week first, each id once', () => {
  const week = (wrong) => ({ d1: { tests: 1, marks: 1, total: 2, secs: 60, exams: { 'sch-oc': { tests: 1, marks: 1, total: 2, kinds: { topic: 1 }, types: {}, wrong } } } });
  const got = specialMissed({ w2026_10_19: week(['q1', 'q2']), w2026_10_26: week(['q2', 'q3']) });
  assert.deepEqual(got.map((m) => m.id), ['q2', 'q3', 'q1']);
  assert.equal(got[0].label, 'OC test · week of 2026-10-26');
  assert.deepEqual(specialMissed(null), []);
});

test('the review arrays line up and every entry is shown as wrong, with where it came from', () => {
  const items = [
    { question: { id: 'a' }, userAnswer: 'x', result: { correct: false, topicId: 't' }, label: 'Daily Practice · Mon', source: 'session', times: 2 },
    { question: { id: 'b' }, userAnswer: '', result: { correct: false }, label: 'OC test · week of 2026-10-26', source: 'special', times: 1 },
  ];
  const r = toReviewArrays(items);
  assert.equal(r.questions.length, 2); assert.deepEqual(r.userAnswers, ['x', '']);
  assert.ok(r.answerResults.every((x) => x.correct === false));
  assert.equal(r.questionComments[0], 'Daily Practice · Mon · missed 2 times');
  assert.match(r.questionComments[1], /answer was not kept/);
});

console.log(`\nmistake review: ${passed} passed`);
