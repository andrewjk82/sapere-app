/**
 * Sprint settlement: each of the five boards settles independently with
 * 10/5/2/1 XP, re-runs never double-pay, ties go to whoever got there first,
 * and one board failing doesn't stop the others. Fake Firestore — no network.
 * Usage: node scripts/testSprintSettlement.mjs
 */
import assert from 'node:assert';
import { settleSprintWeek } from '../api/_lib/timesTableSprintSettlement.js';

const NOW = new Date('2026-10-05T03:00:00Z'); // Monday 2026-10-05 Sydney → previous week 2026-09-28
const WEEK = '2026-09-28';
const ADMIN_UID = 'MeohP8s0LkPWSTWgEbzc7uaWVEG2';

const makeDb = ({ failBoard } = {}) => {
  const data = { timestable_sprint_results: {}, timestable_sprint_settlement: {}, users: {}, leaderboard: {} };
  const ref = (col, id) => ({
    col, id,
    get: async () => ({ exists: id in data[col], data: () => data[col][id] }),
    set: async (v, opts) => { data[col][id] = opts?.merge ? { ...(data[col][id] || {}), ...v } : v; },
  });
  const db = {
    data,
    collection: (col) => ({
      doc: (id) => ref(col, id),
      where: (field, op, value) => ({
        orderBy: () => ({
          get: async () => {
            if (value === failBoard) throw new Error('boom');
            const docs = Object.entries(data[col])
              .filter(([, v]) => v[field] === value)
              .sort(([, a], [, b]) => a.bestTimeMs - b.bestTimeMs)
              .map(([id, v]) => ({ id, data: () => v }));
            return { docs };
          },
        }),
      }),
    }),
    runTransaction: async (fn) => fn({
      get: async (r) => r.get(),
      update: (r, v) => { data[r.col][r.id] = { ...data[r.col][r.id], ...v }; },
      set: (r, v, opts) => { data[r.col][r.id] = opts?.merge ? { ...(data[r.col][r.id] || {}), ...v } : v; },
    }),
  };
  return db;
};
const admin = { firestore: { FieldValue: { serverTimestamp: () => 'TS' } } };

const addResult = (db, boardId, userId, bestTimeMs, bestAchievedAt = '2026-09-30T00:00:00Z') => {
  db.data.timestable_sprint_results[`${boardId}_${userId}`] = { userId, weekId: boardId, bestTimeMs, bestAchievedAt, name: userId };
  db.data.users[userId] = db.data.users[userId] || { totalXP: 100 };
};

let passed = 0;
const test = async (name, fn) => { await fn(); passed += 1; console.log(`  ✓ ${name}`); };

console.log('sprint settlement');

await test('pays 10/5/2/1 per board and settles each board separately', async () => {
  const db = makeDb();
  ['a', 'b', 'c', 'd', 'e'].forEach((u, i) => addResult(db, `add:${WEEK}`, u, 20000 + i * 1000));
  addResult(db, WEEK, 'a', 30000); // times table: a alone → 1st
  addResult(db, `alg:${WEEK}`, 'b', 15000);
  addResult(db, `alg:${WEEK}`, ADMIN_UID, 1000); // teacher never ranks
  const r = await settleSprintWeek(db, admin, { now: NOW });
  assert.equal(r.weekId, WEEK);
  const xp = Object.fromEntries(Object.entries(db.data.users).map(([u, v]) => [u, v.totalXP - 100]));
  assert.deepEqual(xp, { a: 10 + 10, b: 5 + 10, c: 2, d: 1, e: 1, [ADMIN_UID]: 0 });
  assert.equal(db.data.timestable_sprint_results[`add:${WEEK}_c`].settledXp, 2);
  assert.equal(db.data.timestable_sprint_results[`add:${WEEK}_c`].settledRank, 3);
  for (const board of [WEEK, `add:${WEEK}`, `sub:${WEEK}`, `div:${WEEK}`, `alg:${WEEK}`]) {
    assert.equal(db.data.timestable_sprint_settlement[board].status, 'complete', board);
  }
});

await test('re-running never pays twice', async () => {
  const db = makeDb();
  addResult(db, `div:${WEEK}`, 'a', 9000);
  await settleSprintWeek(db, admin, { now: NOW });
  await settleSprintWeek(db, admin, { now: NOW });
  assert.equal(db.data.users.a.totalXP, 110);
});

await test('tie goes to whoever reached the time first', async () => {
  const db = makeDb();
  addResult(db, `sub:${WEEK}`, 'late', 12000, '2026-10-01T00:00:00Z');
  addResult(db, `sub:${WEEK}`, 'early', 12000, '2026-09-29T00:00:00Z');
  await settleSprintWeek(db, admin, { now: NOW });
  assert.equal(db.data.users.early.totalXP, 110);
  assert.equal(db.data.users.late.totalXP, 105);
});

await test('one board failing does not block the others', async () => {
  const db = makeDb({ failBoard: `add:${WEEK}` });
  addResult(db, `add:${WEEK}`, 'a', 9000);
  addResult(db, WEEK, 'b', 9000);
  const r = await settleSprintWeek(db, admin, { now: NOW });
  assert.equal(db.data.users.b.totalXP, 110);
  assert.equal(db.data.users.a.totalXP, 100);
  assert.ok(r.logs.some((l) => l.includes('Addition') && l.includes('boom')), r.logs.join('\n'));
});

console.log(`\n${passed} passed`);
