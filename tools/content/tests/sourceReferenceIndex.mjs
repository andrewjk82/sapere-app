import assert from 'node:assert';
import { buildSourceReferenceIndex } from '../sourceReferences.mjs';

const questions = [
  {
    id: 'cam-e1-1a-q3b',
    meta: { source: { bookId: 'cambridge-nsw-ext1-y11-2ed', chapter: '1', exercise: '1A', question: '3b' } },
  },
  {
    id: 'cam-e1-1a-q3c',
    inactive: true,
    meta: { source: { bookId: 'cambridge-nsw-ext1-y11-2ed', chapter: '1', exercise: '1A', question: '3c' } },
  },
  {
    id: 'parent',
    parts: [{ id: 'cam-e1-1a-q4a', meta: { source: { bookId: 'cambridge-nsw-ext1-y11-2ed', chapter: '1', exercise: '1A', question: '4a' } } }],
  },
];

const index = buildSourceReferenceIndex(questions, 'y11e1-cambridge-1a');
assert.deepEqual(index['y11e1-cambridge-1a|1a|3b'], [{ questionId: 'cam-e1-1a-q3b', topicId: 'y11e1-cambridge-1a' }]);
assert.deepEqual(index['y11e1-cambridge-1a|1a|4a'], [{ questionId: 'cam-e1-1a-q4a', topicId: 'y11e1-cambridge-1a' }]);
assert.equal(index['y11e1-cambridge-1a|1a|3c'], undefined);
console.log('source reference index: passed');
