/**
 * Homework marking helpers. Run via npm run test:homework.
 */
import assert from 'node:assert';
import { nextMark, markKey, scoreMarks, compactMarks } from '../src/utils/homeworkMarking.js';

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

console.log(`\nmarking: ${passed} passed`);
