import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { pickExtraRoundIds } from '../src/utils/poolAllocation.js';
import { extraRoundXp, usesAnswerAttempts } from '../src/utils/answerAttempts.js';
import {
  addPendingRound, addRoundsToTotals, buildRound, fitDetail, loadPendingRounds, newestTotals, pendingXp, restorePendingRounds, takePendingRounds, unwrapLists,
} from '../src/utils/extraRoundStore.js';

let passed = 0;
const test = (name, fn) => {
  fn();
  passed += 1;
  console.log(`  ok ${name}`);
};
const pool = {
  chapter_pools: {
    a: { ids: ['a1', 'a2', 'a3', 'a4', 'a5', 'a6'], done: ['a1', 'a2'] },
    b: { ids: ['b1', 'b2', 'b3', 'b4'], done: ['b1'] },
  },
  chapter_accuracy: { a: { correct: 1, total: 2 } },
};

test('new questions first, spread across chapters, nothing excluded', () => {
  const ids = pickExtraRoundIds(pool, { excludeIds: ['a3'], count: 4 });
  assert.equal(ids.length, 4);
  assert.ok(!ids.includes('a3'));
  assert.ok(!ids.some((id) => ['a1', 'a2', 'b1'].includes(id)), 'done questions wait until new ones run out');
  assert.ok(ids.some((id) => id.startsWith('a')) && ids.some((id) => id.startsWith('b')));
  assert.equal(new Set(ids).size, 4);
});

test('it keeps going by reusing done questions when nothing new is left', () => {
  const ids = pickExtraRoundIds(pool, { excludeIds: ['a3', 'a4', 'a5', 'a6', 'b2', 'b3', 'b4'], count: 10 });
  assert.deepEqual([...ids].sort(), ['a1', 'a2', 'b1']);
});

test('mastered chapters hold back easy questions', () => {
  const strong = {
    chapter_pools: { a: { ids: ['e1', 'e2', 'e3', 'e4', 'h1', 'h2', 'h3', 'h4'], done: [], easy: ['e1', 'e2', 'e3', 'e4'] } },
    chapter_accuracy: { a: { correct: 95, total: 100 } },
  };
  const ids = pickExtraRoundIds(strong, { count: 4 });
  assert.deepEqual([...ids].sort(), ['h1', 'h2', 'h3', 'h4']);
});

test('an empty or missing pool gives nothing', () => {
  assert.deepEqual(pickExtraRoundIds(null, { count: 5 }), []);
  assert.deepEqual(pickExtraRoundIds({ chapter_pools: {} }, { count: 5 }), []);
});

test('half XP, and the same retry rules as Daily Practice', () => {
  assert.equal(extraRoundXp(50), 25);
  assert.equal(extraRoundXp(45), 23);
  assert.equal(usesAnswerAttempts('extra'), true);
});

const memory = () => {
  const data = new Map();
  return { getItem: (k) => (data.has(k) ? data.get(k) : null), setItem: (k, v) => data.set(k, v), removeItem: (k) => data.delete(k) };
};
const q = (id, extra = {}) => ({ id, chapterId: 'c', question: `Q${id}`, solutionSteps: [{ explanation: 'long' }], graphData: { svg: 'x' }, ...extra });
const round = (at, xp = 25, date = '2026-11-07') => buildRound({
  date, finishedAt: at, xp, score: 8, total: 10,
  questions: [q('a'), q('b')],
  userAnswers: ['x', ['p', 'q']],
  answerResults: [{ correct: true, chapterId: 'c', workingOut: 'data:image/png;base64,AAAA', workingOutPages: ['data:image/png;base64,BBB'] }, { correct: false, chapterId: 'c' }],
});

test('a round keeps no images or re-fetchable fields, and survives Firestore rules on arrays', () => {
  const r = round(1);
  assert.ok(!JSON.stringify(r).includes('base64'));
  assert.equal(r.detail.questions[0].solutionSteps, undefined);
  assert.deepEqual(r.detail.userAnswers[1], { list: ['p', 'q'] }, 'no array directly inside an array');
  assert.deepEqual(unwrapLists(r.detail.userAnswers), ['x', ['p', 'q']]);
  assert.deepEqual(r.shown, [{ id: 'a', chapterId: 'c', correct: true }, { id: 'b', chapterId: 'c', correct: false }]);
});

test('taking pending rounds clears them, so XP cannot be sent twice', () => {
  const s = memory();
  assert.equal(addPendingRound('u', round(1), s), true);
  assert.equal(addPendingRound('u', round(2), s), true);
  assert.equal(pendingXp('u', s), 50);
  assert.equal(takePendingRounds('u', s).length, 2);
  assert.deepEqual(takePendingRounds('u', s), []);
  assert.equal(pendingXp('u', s), 0);
});

test('a refused send puts the rounds back', () => {
  const s = memory();
  addPendingRound('u', round(3), s);
  restorePendingRounds('u', [round(1), round(2)], s);
  assert.deepEqual(loadPendingRounds('u', s).map((r) => r.finishedAt), [1, 2, 3]);
});

test('a full device falls back to the marks, then says so', () => {
  const full = memory();
  const setItem = full.setItem;
  full.setItem = (k, v) => { if (v.includes('detail')) throw new Error('quota'); setItem(k, v); };
  assert.equal(addPendingRound('u', round(1), full), true);
  assert.equal(loadPendingRounds('u', full)[0].detail, undefined);
  const none = memory();
  none.setItem = () => { throw new Error('quota'); };
  assert.equal(addPendingRound('u', round(1), none), false);
});

test("today's totals add up, take the newer source, and reset on a new date", () => {
  const first = addRoundsToTotals(null, '2026-11-07', [round(1), round(2)]);
  assert.deepEqual(first, { date: '2026-11-07', rounds: 2, xp: 50, score: 16, total: 20 });
  assert.equal(addRoundsToTotals(first, '2026-11-07', [round(3)]).rounds, 3);
  assert.equal(addRoundsToTotals(first, '2026-11-08', [round(4, 25, '2026-11-08')]).rounds, 1);
  const older = { date: '2026-11-07', rounds: 1 };
  assert.equal(newestTotals(older, first, '2026-11-07').rounds, 2);
  assert.equal(newestTotals(older, null, '2026-11-08'), null);
});

test('past the size limit a round keeps its marks but not its questions', () => {
  const { records } = fitDetail([round(1), round(2)], 0, JSON.stringify(round(1)).length + 10);
  assert.ok(records[0].detail);
  assert.equal(records[1].detail, undefined);
  assert.equal(records[1].detailDropped, true);
  assert.equal(records[1].xp, 25);
  assert.ok(records.every((r) => r.shown === undefined));
});

// The whole point of the design: playing more rounds must cost nothing more.
test('finishing a round touches no Firestore at all', () => {
  const src = readFileSync(new URL('../src/components/DailyChallenge.jsx', import.meta.url), 'utf8');
  const body = src.slice(src.indexOf('const finishExtraRound = () => {'), src.indexOf('const finishQuizInner = async'));
  ['doc(db', 'getDoc(', 'getDocs(', 'runTransaction', 'writeBatch', 'setDoc(', 'updatePoolAfterQuiz', 'notifyTeacher'].forEach((banned) => {
    assert.ok(!body.includes(banned), `${banned} must stay out of finishExtraRound`);
  });
  assert.ok(body.includes('addPendingRound'));
});

test('one send is a single pass with no reads', () => {
  const src = readFileSync(new URL('../src/services/extraRoundService.js', import.meta.url), 'utf8');
  ['getDoc', 'getDocs', 'runTransaction'].forEach((banned) => assert.ok(!src.includes(banned), banned));
  assert.equal(src.split('queueWriteGroups(').length - 1, 1);
  const pool = readFileSync(new URL('../src/services/practicePoolService.js', import.meta.url), 'utf8');
  const queue = pool.slice(pool.indexOf('export const queueExtraRoundDone'), pool.indexOf('// ─── update pool after quiz'));
  assert.ok(!queue.includes('transaction') && !queue.includes('getDoc('));
});

// Jordan, 2026-11-07: Year 1 and 2 pools hold almost nothing, because their Daily Practice is generated.
test('primary years top up an extra round with generated questions, as Daily Practice does', () => {
  const src = readFileSync(new URL('../src/services/dailyAssignmentService.js', import.meta.url), 'utf8');
  const build = src.slice(src.indexOf('export const buildExtraRound'), src.indexOf('export const prepareNextDailyAssignment'));
  assert.ok(build.includes('addGeneratedQuestions(targets, questions, used, questionCount)'));
  const pool = readFileSync(new URL('../src/services/practicePoolService.js', import.meta.url), 'utf8');
  assert.ok(pool.includes("String(id).startsWith('gen-')"));
});

test('starting a round is gated on finishing Daily Practice and writes nothing', () => {
  const src = readFileSync(new URL('../src/components/DailyChallenge.jsx', import.meta.url), 'utf8');
  const start = src.slice(src.indexOf('const startExtraRound = async'), src.indexOf('const requestStartCalc'));
  assert.ok(start.includes('if (!todayCompleted'));
  assert.ok(!start.includes('setDoc(') && !start.includes('writeBatch'));
});

console.log(`extra round: ${passed} passed`);
