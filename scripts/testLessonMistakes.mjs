/**
 * "Check the mistake" — earlier homework's ✗ / ½ found in the loaded sessions. Run via npm run test:homework.
 */
import assert from 'node:assert';
import { mistakesForLesson, mistakeItemFromSession, MISTAKES_REVIEWED_FIELD } from '../src/utils/lessonMistakes.js';

let passed = 0;
const test = (name, fn) => { fn(); passed += 1; console.log(`  ✓ ${name}`); };

const hw = (id, date, extra = {}) => ({
  id, studentId: 's1', date,
  learnedTopics: [{ id: 'y8-1a', label: 'Y8 1A' }, { label: 'no id' }],
  homeworkMarks: { 'y8-1a|1A|1': 'c', 'y8-1a|1A|2': 'x', 'y8-1a|1A|3': 'h' },
  homeworkScore: 1.5, homeworkTotal: 3, homeworkComment: ' redo 2 ',
  ...extra,
});

test('item: only ✗ / ½ marks, with score, comment and topics', () => {
  const item = mistakeItemFromSession(hw('h1', '2026-10-28'));
  assert.deepEqual(item.marks, { 'y8-1a|1A|2': 'x', 'y8-1a|1A|3': 'h' });
  assert.equal(item.mark, '1.5/3');
  assert.equal(item.comment, 'redo 2');
  assert.deepEqual(item.topics, [{ id: 'y8-1a', label: 'Y8 1A' }]);
  assert.equal(item.sessionId, 'h1');
});

test('no item when nothing was wrong', () => {
  assert.equal(mistakeItemFromSession(hw('h1', '2026-10-28', { homeworkMarks: { a: 'c' } })), null);
  assert.equal(mistakeItemFromSession({ id: 'h1' }), null);
  assert.equal(mistakeItemFromSession(null), null);
});

test('a lesson shows earlier homework of that student only, newest first', () => {
  const sessions = [
    hw('today', '2026-11-03'),
    hw('a', '2026-10-21'),
    hw('b', '2026-10-28'),
    hw('other', '2026-10-28', { studentId: 's2' }),
    hw('done', '2026-10-27', { [MISTAKES_REVIEWED_FIELD]: '2026-11-01T00:00:00Z' }),
    hw('old', '2026-08-01'),
    hw('nodate', ''),
  ];
  assert.deepEqual(mistakesForLesson(sessions, { studentId: 's1', lessonDate: '2026-11-03' }).map((i) => i.sessionId), ['b', 'a']);
  assert.deepEqual(mistakesForLesson(sessions, { studentId: 's1', lessonDate: '' }), []);
  assert.deepEqual(mistakesForLesson(undefined, { studentId: 's1', lessonDate: '2026-11-03' }), []);
});

console.log(`\n${passed} lesson-mistakes tests passed`);
