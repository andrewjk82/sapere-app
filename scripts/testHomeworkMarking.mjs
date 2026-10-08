/**
 * Homework marking helpers. Run via npm run test:homework.
 */
import assert from 'node:assert';
import { nextMark, markKey, scoreMarks, compactMarks, groupMarksByTopic, buildCheckedNotification } from '../src/utils/homeworkMarking.js';

let passed = 0;
const test = (name, fn) => { fn(); passed += 1; console.log(`  ✓ ${name}`); };

test('tap cycles none → correct → wrong → half → none', () => {
  assert.equal(nextMark(undefined), 'c');
  assert.equal(nextMark('c'), 'x');
  assert.equal(nextMark('x'), 'h');
  assert.equal(nextMark('h'), undefined);
});

test('score counts only marked questions; half is 0.5', () => {
  assert.deepEqual(scoreMarks({ a: 'c', b: 'x', c: 'h', d: undefined }), { score: 1.5, total: 3 });
  assert.deepEqual(scoreMarks({}), { score: 0, total: 0 });
});

test('keys and compact map', () => {
  assert.equal(markKey('y10-1f', '1REVIEW', '3'), 'y10-1f|1REVIEW|3');
  assert.deepEqual(compactMarks({ a: 'c', b: undefined, c: 'zz', d: 'h' }), { a: 'c', d: 'h' });
});

test('marks are grouped by topic and section, labels in natural order', () => {
  const marks = {
    [markKey('y8-1a', 'Exercise 1A', '10')]: 'x',
    [markKey('y8-1a', 'Exercise 1A', '2')]: 'c',
    [markKey('y8-1a', 'Exercise 1A', '1')]: 'h',
    [markKey('y8-9a', 'Review 9A', '1.10')]: 'c',
    [markKey('y8-9a', 'Review 9A', '1.2')]: 'c',
    [markKey('y8-1a', 'Review exercise', '3')]: 'c',
    broken: 'c',
    [markKey('y8-1b', 'Exercise 1B', '1')]: undefined,
  };
  const grouped = groupMarksByTopic(marks);
  assert.deepEqual(Object.keys(grouped).sort(), ['y8-1a', 'y8-9a']);
  assert.deepEqual(grouped['y8-1a'].map((g) => g.section), ['Exercise 1A', 'Review exercise']);
  assert.deepEqual(grouped['y8-1a'][0].items.map((i) => `${i.label}${i.mark}`), ['1h', '2c', '10x']);
  assert.deepEqual(grouped['y8-9a'][0].items.map((i) => i.label), ['1.2', '1.10']);
  assert.deepEqual(groupMarksByTopic(undefined), {});
});

test('part-level labels sort naturally: 1a, 1b, 2c, 10a', () => {
  const marks = {
    [markKey('y11e1-11e', '11E', '10a')]: 'c',
    [markKey('y11e1-11e', '11E', '2c')]: 'x',
    [markKey('y11e1-11e', '11E', '1b')]: 'c',
    [markKey('y11e1-11e', '11E', '1a')]: 'h',
  };
  assert.deepEqual(groupMarksByTopic(marks)['y11e1-11e'][0].items.map((i) => i.label), ['1a', '1b', '2c', '10a']);
  assert.deepEqual(scoreMarks(marks), { score: 2.5, total: 4 });
});

test('checked notification: score, topics and a trimmed comment', () => {
  const n = buildCheckedNotification({ topics: [{ label: 'Y8 1A' }, { label: 'Y8 1B' }], grade: { score: 7.5, total: 10, comment: 'Nice work' } });
  assert.equal(n.subject, 'Homework checked: 7.5/10');
  assert.equal(n.text, 'Your teacher checked your homework (Y8 1A, Y8 1B).\nScore: 7.5/10\n“Nice work”');
  assert.equal(buildCheckedNotification({}).subject, 'Homework checked');
  assert.equal(buildCheckedNotification({ grade: { score: 0, total: 0 } }).text, 'Your teacher checked your homework.');
  assert.ok(buildCheckedNotification({ grade: { score: 1, total: 1, comment: 'x'.repeat(300) } }).text.endsWith('…”'));
});

console.log(`\nmarking: ${passed} passed`);
