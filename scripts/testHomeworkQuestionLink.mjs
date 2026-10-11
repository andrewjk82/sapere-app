import assert from 'node:assert';
import { normaliseHomeworkReference, resolveHomeworkQuestion } from '../src/utils/homeworkQuestionLink.js';

let passed = 0;
const test = (name, fn) => { fn(); passed += 1; console.log(`  ✓ ${name}`); };

test('normalises the homework topic, exercise, and label', () => {
  assert.deepEqual(normaliseHomeworkReference({ topicId: ' y11e1-1a ', section: ' 1a ', label: ' 03(B) ' }), {
    topicId: 'y11e1-1a', exercise: '1a', question: '3b',
  });
});

test('resolves a unique source reference', () => {
  const index = { 'y11e1-1a|1a|3b': [{ questionId: 'cam-e1-1a-q3b', topicId: 'y11e1-1a' }] };
  assert.deepEqual(resolveHomeworkQuestion({ topicId: 'y11e1-1a', section: '1A', label: '3b' }, index), {
    status: 'matched', questionId: 'cam-e1-1a-q3b', topicId: 'y11e1-1a',
  });
});

test('does not match a missing or ambiguous source reference', () => {
  assert.deepEqual(resolveHomeworkQuestion({ topicId: 'y11e1-1a', section: '1A', label: '99' }, {}), { status: 'missing' });
  const duplicate = { 'y11e1-1a|1a|3b': [{ questionId: 'one', topicId: 'y11e1-1a' }, { questionId: 'two', topicId: 'y11e1-1a' }] };
  assert.deepEqual(resolveHomeworkQuestion({ topicId: 'y11e1-1a', section: '1A', label: '3b' }, duplicate), { status: 'ambiguous' });
});

console.log(`\nhomework question link: ${passed} passed`);
