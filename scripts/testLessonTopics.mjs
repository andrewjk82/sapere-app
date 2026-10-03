/**
 * Lesson "Today covered" picker helpers. Usage: npm run test:lesson-topics
 */
import assert from 'node:assert';
import {
  groupMeta, groupTopicOptions, topicChipLabel, findPreviousCoveredSession, findNextTopic,
  splitHomeworkExtra, composeHomework,
} from '../src/utils/lessonTopics.js';

let passed = 0;
const test = (name, fn) => { fn(); passed += 1; console.log(`  ✓ ${name}`); };

const y7 = groupMeta('Year 7');
const e2 = groupMeta('Year 12', 'Extension 2');
const opt = (id, chapterId, code, title, meta, extra = {}) => ({ id, chapterId, code, title, label: `${code} · ${title}`, chapterTitle: chapterId, ...meta, ...extra });
const options = [
  opt('y7-1A', 'y7-1', '1A', 'The number line', y7),
  opt('y7-1B', 'y7-1', '1B', 'Addition', y7, { completed: true }),
  opt('y7-1C', 'y7-1', '1C', 'Standard algorithm', y7),
  opt('y7-2A', 'y7-2', '2A', 'Fractions', y7),
  opt('e2-1A', 'e2-1', '1A', 'Arithmetic of complex numbers', e2),
];

test('group meta: year, and year + course', () => {
  assert.deepEqual(y7, { groupKey: 'Year 7', groupLabel: 'Year 7', groupShort: 'Y7' });
  assert.deepEqual(e2, { groupKey: 'Year 12|Extension 2', groupLabel: 'Year 12 · Extension 2', groupShort: 'Y12 Ext 2' });
});

test('options group by year, then chapter, in order', () => {
  const groups = groupTopicOptions(options);
  assert.deepEqual(groups.map((g) => g.key), ['Year 7', 'Year 12|Extension 2']);
  assert.deepEqual(groups[0].chapters.map((c) => [c.id, c.topics.length]), [['y7-1', 3], ['y7-2', 1]]);
});

test('chip label adds the group only when asked', () => {
  assert.equal(topicChipLabel(options[0]), '1A');
  assert.equal(topicChipLabel(options[4], { withGroup: true }), 'Y12 Ext 2 1A');
});

test('previous covered session is the latest earlier one for that student', () => {
  const sessions = [
    { id: 'a', studentId: 's1', date: '2026-09-20', learnedTopics: [{ id: 'y7-1A' }] },
    { id: 'b', studentId: 's1', date: '2026-09-27', learnedTopics: [{ id: 'y7-1A' }] },
    { id: 'c', studentId: 's1', date: '2026-09-29', learnedTopics: [] },
    { id: 'd', studentId: 's2', date: '2026-09-30', learnedTopics: [{ id: 'y7-2A' }] },
    { id: 'cur', studentId: 's1', date: '2026-10-04', learnedTopics: [] },
  ];
  assert.equal(findPreviousCoveredSession(sessions, sessions[4]).id, 'b');
  assert.equal(findPreviousCoveredSession(sessions, { id: 'x', studentId: 's3', date: '2026-10-04' }), null);
});

test('next topic skips completed and picked ones, stays in the group', () => {
  assert.equal(findNextTopic(options, [{ id: 'y7-1A' }]).id, 'y7-1C');
  assert.equal(findNextTopic(options, [{ id: 'y7-1A' }], new Set(['y7-1C'])).id, 'y7-2A');
  assert.equal(findNextTopic(options, [{ id: 'y7-2A' }]), null);
  assert.equal(findNextTopic(options, [{ id: 'gone' }]), null);
});

test('homework text: topic lines + extra note, and split back apart', () => {
  const topics = [options[0], options[2]];
  const text = composeHomework(topics, '  Finish Q1-5  ');
  assert.equal(text, '1A · The number line\n1C · Standard algorithm\nFinish Q1-5');
  assert.equal(splitHomeworkExtra(text, topics), 'Finish Q1-5');
  assert.equal(composeHomework([], ''), '');
  assert.equal(splitHomeworkExtra('1A · The number line\n', topics), '');
});

console.log(`\n${passed} passed`);
