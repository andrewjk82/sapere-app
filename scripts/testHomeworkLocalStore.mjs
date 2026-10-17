/** Homework device-store merge rules. Run via npm run test:homework. */
import assert from 'node:assert';
import { mergeHomeworkRecord } from '../src/utils/homeworkLocalStore.js';

let passed = 0;
const test = (name, fn) => { fn(); passed += 1; console.log(`  ✓ ${name}`); };

test('saving one topic keeps every other topic\'s draft', () => {
  const stored = { topicDrafts: { a: 'A-old', b: 'B' }, earlierCombinedDraft: 'E', submittedPages: [1] };
  const next = mergeHomeworkRecord(stored, { maps: { topicDrafts: { a: 'A-new' } } }, 5);
  assert.deepEqual(next.topicDrafts, { a: 'A-new', b: 'B' });
  assert.equal(next.earlierCombinedDraft, 'E');
  assert.deepEqual(next.submittedPages, [1]);
  assert.equal(next.updatedAt, 5);
});

test('a save from an empty in-memory map never wipes stored drafts', () => {
  const stored = { topicDrafts: { a: 'A', b: 'B' }, redoDrafts: { q1: 'Q1' }, redoStatus: { q1: 'right' } };
  const next = mergeHomeworkRecord(stored, { maps: { topicDrafts: {}, redoDrafts: {}, redoStatus: {} } });
  assert.deepEqual(next.topicDrafts, { a: 'A', b: 'B' });
  assert.deepEqual(next.redoDrafts, { q1: 'Q1' });
  assert.deepEqual(next.redoStatus, { q1: 'right' });
});

test('first save of a new homework', () => {
  const next = mergeHomeworkRecord(undefined, { maps: { topicDrafts: { a: 'A' } }, fields: { earlierCombinedDraft: 'E' } });
  assert.deepEqual(next.topicDrafts, { a: 'A' });
  assert.equal(next.earlierCombinedDraft, 'E');
});

console.log(`\nhomework device store: ${passed} passed`);
