import assert from 'node:assert/strict';
import {
  buildRecentPracticePatch, hasRecentPractice, recentPracticeList, recentPracticeDay, RECENT_PRACTICE_DAYS,
} from '../src/utils/recentPractice.js';

const DEL = { __delete: true };
let passed = 0;
const test = (name, fn) => { fn(); passed += 1; console.log(`  ✓ ${name}`); };

test('patch writes the day, the version and slim topic stats', () => {
  const p = buildRecentPracticePatch(null, {
    type: 'daily', date: '2026-11-03', score: 7, total: 10, completed: true, deleteMarker: DEL,
    topicStats: { t1: { id: 't1', label: '3A Ratios', correct: 2, total: 3, extra: 'x' } },
  });
  assert.equal(p.v, 1);
  assert.deepEqual(p.daily['2026-11-03'], {
    score: 7, total: 10, completed: true, topicStats: { t1: { id: 't1', label: '3A Ratios', correct: 2, total: 3 } },
  });
  assert.equal(p.calc, undefined);
});

test('calc goes under calc; abandoned is completed:false', () => {
  const p = buildRecentPracticePatch({}, { type: 'calc', date: '2026-11-03', score: 0, total: 10, completed: false, deleteMarker: DEL });
  assert.deepEqual(p.calc['2026-11-03'], { score: 0, total: 10, completed: false });
});

test(`days older than ${RECENT_PRACTICE_DAYS} are deleted, recent ones untouched`, () => {
  const existing = { daily: { '2026-10-01': {}, '2026-10-19': {}, '2026-10-20': {}, '2026-11-02': {} } };
  const p = buildRecentPracticePatch(existing, { type: 'daily', date: '2026-11-03', score: 1, total: 1, completed: true, deleteMarker: DEL });
  assert.equal(p.daily['2026-10-01'], DEL);
  assert.equal(p.daily['2026-10-19'], DEL);
  assert.equal('2026-10-20' in p.daily, false); // exactly 14 days back is kept
  assert.equal('2026-11-02' in p.daily, false);
});

test('readers', () => {
  assert.equal(hasRecentPractice({}), false);
  assert.equal(hasRecentPractice({ recentPractice: { v: 1 } }), true);
  const profile = { recentPractice: { v: 1, daily: { '2026-11-01': { score: 1 }, '2026-11-03': { score: 3 } } } };
  assert.deepEqual(recentPracticeList(profile).map((e) => e.id), ['2026-11-03', '2026-11-01']);
  assert.equal(recentPracticeDay(profile, 'daily', '2026-11-03').score, 3);
  assert.equal(recentPracticeDay(profile, 'calc', '2026-11-03'), null);
});

console.log(`\nrecent practice: ${passed} passed`);
