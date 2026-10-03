/** Moved-topic progress migration. Usage: node scripts/testTopicMoves.mjs */
import assert from 'node:assert';
import { migrateMovedTopicProgress } from '../src/utils/topicMoves.js';

const mem = (init) => {
  const m = new Map(Object.entries(init));
  return { get length() { return m.size; }, key: (i) => [...m.keys()][i], getItem: (k) => (m.has(k) ? m.get(k) : null), setItem: (k, v) => m.set(k, String(v)), _m: m };
};
const s = mem({
  'sapere:tp:u1:y7-4:y7-4h': '{"a":1}',
  'sapere:tp:u1:y7-4:y7-4h:meta': '{"p":60}',
  'sapere:tp:u1:y7-4:y7-4a:meta': '{"p":10}',
  'sapere:tp:u2:y7-4:y7-4i:meta': '{"p":5}',
});
assert.equal(migrateMovedTopicProgress('u1', s), 2);
assert.equal(s.getItem('sapere:tp:u1:y7-4p2:y7-4h:meta'), '{"p":60}');
assert.equal(s.getItem('sapere:tp:u1:y7-4p2:y7-4a:meta'), null);
assert.equal(s.getItem('sapere:tp:u1:y7-4:y7-4h:meta'), '{"p":60}', 'original kept');
assert.equal(s.getItem('sapere:tp:u1:y7-4p2:y7-4i:meta'), null, 'other user untouched');
assert.equal(migrateMovedTopicProgress('u1', s), 0, 'runs once');
console.log('topic moves: 5 assertions passed');
