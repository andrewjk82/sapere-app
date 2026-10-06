/**
 * Redo-wrong-questions helpers. Run via npm run test:homework.
 */
import assert from 'node:assert';
import { wrongQuestions, draftHasInk, redoState, redoSummary, shortTopicLabel, isWrongMark } from '../src/utils/homeworkRedo.js';

let passed = 0;
const test = (name, fn) => { fn(); passed += 1; console.log(`  ✓ ${name}`); };

const topics = [{ id: 'y8-1b', label: 'Y8 1B · Multiplication' }, { id: 'y8-1a', label: 'Y8 1A · Addition' }];
const marks = {
  'y8-1a|1A|10': 'x', 'y8-1a|1A|2': 'h', 'y8-1a|1A|3': 'c',
  'y8-1b|1B|1': 'x',
  'y8-9a|9A|1.10': 'x', 'y8-9a|9A|1.2': 'x',
  'broken': 'x', 'y8-1a|1A|9': undefined,
};

test('only wrong and half questions, in homework topic order then number order', () => {
  assert.deepEqual(wrongQuestions(marks, topics).map((q) => `${q.topicId}:${q.label}${q.mark}`),
    ['y8-1b:1x', 'y8-1a:2h', 'y8-1a:10x', 'y8-9a:1.2x', 'y8-9a:1.10x']);
  assert.deepEqual(wrongQuestions({}, topics), []);
  assert.deepEqual(wrongQuestions(undefined), []);
});

test('isWrongMark', () => {
  assert.ok(isWrongMark('x') && isWrongMark('h'));
  assert.ok(!isWrongMark('c') && !isWrongMark(undefined));
});

test('a draft has ink only if some page has strokes', () => {
  assert.equal(draftHasInk(null), false);
  assert.equal(draftHasInk({ pages: [[], []] }), false);
  assert.equal(draftHasInk({ pages: [[], [{ points: [] }]] }), true);
});

test('state: own verdict wins, else writing vs new', () => {
  const store = { drafts: { a: { pages: [[{}]] }, b: { pages: [[]] }, c: { pages: [[{}]] } }, status: { c: 'got', d: 'again', e: 'whatever' } };
  assert.equal(redoState('a', store), 'writing');
  assert.equal(redoState('b', store), 'new');
  assert.equal(redoState('c', store), 'got');
  assert.equal(redoState('d', store), 'again');
  assert.equal(redoState('e', store), 'new');
  assert.equal(redoState('x'), 'new');
  assert.equal(redoState('k', { ink: { k: true } }), 'writing');
  assert.equal(redoState('k', { ink: { k: true }, status: { k: 'got' } }), 'got');
});

test('summary counts each state', () => {
  const qs = [{ key: 'a' }, { key: 'b' }, { key: 'c' }, { key: 'd' }];
  assert.deepEqual(redoSummary(qs, { drafts: { a: { pages: [[{}]] } }, status: { b: 'got', c: 'again' } }),
    { total: 4, got: 1, again: 1, writing: 1, new: 1 });
});

test('short topic label', () => {
  assert.equal(shortTopicLabel({ label: 'Y8 1A · Addition' }), 'Y8 1A');
  assert.equal(shortTopicLabel({ id: 'x' }), 'x');
});

console.log(`\nredo: ${passed} passed`);
