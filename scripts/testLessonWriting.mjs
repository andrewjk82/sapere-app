/**
 * Dashboard "Last lesson": topics written on per day. Usage: npm run test:last-study
 */
import assert from 'node:assert';
import { loadTopicWriting, recordTopicWriting, mergeNoteDates, pickLastLessonTopics } from '../src/utils/lessonWriting.js';

let passed = 0;
const test = (name, fn) => { fn(); passed += 1; console.log(`  ✓ ${name}`); };
const memory = () => {
  const data = {};
  return { getItem: (k) => (k in data ? data[k] : null), setItem: (k, v) => { data[k] = String(v); }, removeItem: (k) => { delete data[k]; } };
};
const day = (s) => new Date(`${s}T15:00:00`);

test('records each topic once per day, in first-written order, per student', () => {
  const store = memory();
  assert.equal(recordTopicWriting('u1', '3A', day('2026-10-20'), store), true);
  assert.equal(recordTopicWriting('u1', '3A', day('2026-10-20'), store), false);
  recordTopicWriting('u1', '3B', day('2026-10-20'), store);
  recordTopicWriting('u1', '3B', day('2026-10-22'), store);
  assert.deepEqual(loadTopicWriting('u1', store), { '2026-10-20': ['3A', '3B'], '2026-10-22': ['3B'] });
  assert.deepEqual(loadTopicWriting('u2', store), {});
  assert.equal(recordTopicWriting('', '3A', day('2026-10-20'), store), false);
  assert.equal(recordTopicWriting('u1', null, day('2026-10-20'), store), false);
});

test('keeps only the last 60 days; blocked storage is harmless', () => {
  const store = memory();
  for (let i = 0; i < 65; i += 1) recordTopicWriting('u1', 't', new Date(2026, 0, 1 + i, 12), store);
  const days = Object.keys(loadTopicWriting('u1', store)).sort();
  assert.equal(days.length, 60);
  assert.equal(days[0], new Date(2026, 0, 6).toLocaleDateString('en-CA'));
  const broken = { getItem: () => { throw new Error('x'); }, setItem: () => { throw new Error('x'); } };
  assert.deepEqual(loadTopicWriting('u1', broken), {});
  assert.doesNotThrow(() => recordTopicWriting('u1', '3A', new Date(), broken));
});

test('older notes fill in days the log does not cover', () => {
  const log = { '2026-10-22': ['3B'] };
  const merged = mergeNoteDates(log, [
    { topicId: '2A', date: '2026-10-13' }, { topicId: '2B', date: '2026-10-13' }, { topicId: '3C', date: '2026-10-22' },
  ]);
  assert.deepEqual(merged, { '2026-10-13': ['2A', '2B'], '2026-10-22': ['3B'] });
});

test('last lesson = most recent lesson day written on, else most recent writing day', () => {
  const log = { '2026-10-20': ['3A', '3B'], '2026-10-22': ['3B'], '2026-10-13': ['2A'] };
  // Lessons on the 13th and 20th; the 22nd was homework at home.
  assert.deepEqual(pickLastLessonTopics(log, ['2026-10-13', '2026-10-20', '2026-10-27']), { date: '2026-10-20', topicIds: ['3A', '3B'] });
  assert.deepEqual(pickLastLessonTopics(log, []), { date: '2026-10-22', topicIds: ['3B'] });
  assert.deepEqual(pickLastLessonTopics(log, ['2026-09-01']), { date: '2026-10-22', topicIds: ['3B'] });
  assert.equal(pickLastLessonTopics({}, ['2026-10-20']), null);
});

console.log(`\nlesson writing: ${passed} passed`);
