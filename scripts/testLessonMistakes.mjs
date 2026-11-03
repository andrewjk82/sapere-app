/**
 * "Check the mistake" carry-over queue (pure helpers). Run via npm run test:homework.
 */
import assert from 'node:assert';
import {
  buildMistakeEntry, queueAdd, queueDone, isFlushDue, planFlush, afterFlush, mergeMistakes,
  mistakesForLesson, expiredItemIds, emptyQueue, normalizeQueue, wrongOnlyMarks,
} from '../src/utils/lessonMistakes.js';

let passed = 0;
const test = (name, fn) => { fn(); passed += 1; console.log(`  ✓ ${name}`); };

const grade = { score: 1.5, total: 3, marks: { 'y8-1a|1A|1': 'c', 'y8-1a|1A|2': 'x', 'y8-1a|1A|3': 'h' }, comment: ' redo 2 ' };
const entry = buildMistakeEntry({ studentId: 's1', sessionId: 'h1', sessionDate: '2026-10-28', topics: [{ id: 'y8-1a', label: 'Y8 1A' }, { label: 'no id' }], grade });

test('only wrong / half marks are carried, with score and comment', () => {
  assert.deepEqual(entry.marks, { 'y8-1a|1A|2': 'x', 'y8-1a|1A|3': 'h' });
  assert.equal(entry.mark, '1.5/3');
  assert.equal(entry.comment, 'redo 2');
  assert.deepEqual(entry.topics, [{ id: 'y8-1a', label: 'Y8 1A' }]);
  assert.deepEqual(wrongOnlyMarks(undefined), {});
});

test('nothing is carried when nothing was wrong or ids are missing', () => {
  assert.equal(buildMistakeEntry({ studentId: 's1', sessionId: 'h1', grade: { marks: { a: 'c' } } }), null);
  assert.equal(buildMistakeEntry({ studentId: '', sessionId: 'h1', grade }), null);
  assert.equal(buildMistakeEntry({ studentId: 's1', sessionId: 'h1', grade: null }), null);
});

test('flush is due at most once a day, and only with something queued', () => {
  const q = queueAdd(emptyQueue(), entry, 100);
  assert.ok(isFlushDue(q, '2026-11-03'));
  assert.ok(!isFlushDue({ ...q, lastFlushDay: '2026-11-03' }, '2026-11-03'));
  assert.ok(isFlushDue({ ...q, lastFlushDay: '2026-11-02' }, '2026-11-03'));
  assert.ok(!isFlushDue(emptyQueue(), '2026-11-03'));
  assert.deepEqual(normalizeQueue('junk'), emptyQueue());
});

test('plan: one doc per student, done → delete (null)', () => {
  let q = queueAdd(emptyQueue(), entry, 1);
  q = queueAdd(q, { ...entry, studentId: 's2', sessionId: 'h2' }, 2);
  q = queueDone(q, { studentId: 's1', sessionId: 'h0' }, 3);
  const plan = planFlush(q);
  assert.deepEqual(Object.keys(plan).sort(), ['s1', 's2']);
  assert.equal(plan.s1.h0, null);
  assert.deepEqual(plan.s1.h1.marks, entry.marks);
  assert.ok(!('studentId' in plan.s1.h1) && !('op' in plan.s1.h1) && !('at' in plan.s1.h1));
});

test('after flush, ops queued again meanwhile are kept', () => {
  let q = queueAdd(emptyQueue(), entry, 1);
  const flushed = { h1: 1 };
  q = queueDone(q, { studentId: 's1', sessionId: 'h1' }, 5); // changed while writing
  const next = afterFlush(q, flushed, '2026-11-03');
  assert.equal(next.ops.h1.op, 'done');
  assert.equal(next.lastFlushDay, '2026-11-03');
  assert.deepEqual(afterFlush(queueAdd(emptyQueue(), entry, 1), flushed, 'd').ops, {});
});

test('merge: local queue overrides remote; done hides it; newest first', () => {
  const remote = { h0: { date: '2026-10-20', marks: { k: 'x' } }, h9: { date: '2026-10-25', marks: { k: 'x' } }, empty: { date: '2026-10-26', marks: {} } };
  let q = queueAdd(emptyQueue(), entry, 1);
  q = queueDone(q, { studentId: 's1', sessionId: 'h9' }, 2);
  q = queueAdd(q, { ...entry, studentId: 'other', sessionId: 'h7' }, 3);
  assert.deepEqual(mergeMistakes(remote, q, 's1').map((i) => i.sessionId), ['h1', 'h0']);
});

test('a lesson shows homework from earlier lessons only, within 60 days', () => {
  const items = [{ sessionId: 'a', date: '2026-11-03' }, { sessionId: 'b', date: '2026-10-28' }, { sessionId: 'c', date: '2026-08-01' }, { sessionId: 'd' }];
  assert.deepEqual(mistakesForLesson(items, '2026-11-03').map((i) => i.sessionId), ['b']);
  assert.deepEqual(mistakesForLesson(items, ''), []);
});

test('expired items are found for tidying', () => {
  assert.deepEqual(expiredItemIds({ old: { date: '2026-08-01' }, ok: { date: '2026-10-01' } }, '2026-11-03'), ['old']);
});

console.log(`\n${passed} lesson-mistakes tests passed`);
