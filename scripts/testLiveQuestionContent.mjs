/** Review screens: overlay the bank's current content on stored question snapshots. Run via npm run test:homework. */
import assert from 'node:assert';
import { applyLiveContent, liveLookupIds, REVIEW_LIVE_FIELDS } from '../src/utils/liveQuestionContent.js';

let passed = 0;
const test = (name, fn) => { fn(); passed += 1; console.log(`  ✓ ${name}`); };

test('generated and id-less questions are not looked up; ids are deduped', () => {
  assert.deepEqual(liveLookupIds([{ id: 'a' }, { id: 'gen-1' }, {}, { id: 'a' }, null]), ['a']);
});

test('live fields overwrite the snapshot', () => {
  const [q] = applyLiveContent([{ id: 'a', question: 'old', solution: 'old', userField: 1 }], [{ id: 'a', question: 'new', solution: 'new' }]);
  assert.deepEqual(q, { id: 'a', question: 'new', solution: 'new', userField: 1 });
});

test('a field the live copy lacks keeps the snapshot value', () => {
  const [q] = applyLiveContent([{ id: 'a', hint: 'keep', graphData: { svg: 'x' } }], [{ id: 'a', solution: 's' }]);
  assert.equal(q.hint, 'keep');
  assert.deepEqual(q.graphData, { svg: 'x' });
});

test('questions not found live are returned unchanged', () => {
  const snap = { id: 'b', question: 'q' };
  assert.equal(applyLiveContent([snap], [{ id: 'a', question: 'x' }])[0], snap);
});

test('custom field list is respected', () => {
  const [q] = applyLiveContent([{ id: 'a', question: 'old', options: ['1'] }], [{ id: 'a', question: 'new', options: ['2'] }], ['options']);
  assert.deepEqual(q, { id: 'a', question: 'old', options: ['2'] });
});

test('MC answer index is not taken when the options changed', () => {
  const [q] = applyLiveContent([{ id: 'a', options: ['1', '2', '3'], answer: '0', solution: 'old' }], [{ id: 'a', options: ['3', '1', '2'], answer: '1', solution: 'new' }]);
  assert.equal(q.answer, '0');
  assert.equal(q.solution, 'new');
});

test('MC answer is taken when the options are the same', () => {
  const [q] = applyLiveContent([{ id: 'a', options: ['1', { text: '2' }], answer: '0' }], [{ id: 'a', options: ['1', { text: '2' }], answer: '1' }]);
  assert.equal(q.answer, '1');
});

test('answer and options together are taken together', () => {
  const [q] = applyLiveContent([{ id: 'a', options: ['1', '2'], answer: '0' }], [{ id: 'a', options: ['2', '1'], answer: '1' }], ['options', 'answer']);
  assert.deepEqual([q.options, q.answer], [['2', '1'], '1']);
});

test('default field list', () => {
  assert.deepEqual(REVIEW_LIVE_FIELDS, ['solution', 'solutionSteps', 'hint', 'question', 'answer', 'subQuestions', 'graphData']);
});

console.log(`liveQuestionContent: ${passed} passed`);
