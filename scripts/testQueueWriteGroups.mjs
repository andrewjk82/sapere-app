import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { queueWriteGroups } from '../src/utils/queueWriteGroups.js';

let passed = 0;
const test = async (name, fn) => {
  await fn();
  passed += 1;
  console.log(`  ok ${name}`);
};

// A batch whose commit never resolves: what a stalled connection looks like to the caller.
const stalledDevice = () => {
  const committed = [];
  return {
    committed,
    createBatch: () => {
      const writes = [];
      return {
        set: (name) => writes.push(name),
        commit: () => {
          committed.push(writes);
          return new Promise(() => {});
        },
      };
    },
  };
};

await test('every group reaches the device while the connection is stalled', () => {
  const device = stalledDevice();
  const results = queueWriteGroups(device.createBatch, [
    [(b) => b.set('stat'), (b) => b.set('summary')],
    [(b) => b.set('xp')],
  ]);
  assert.equal(results.length, 2);
  assert.deepEqual(device.committed, [['stat', 'summary'], ['xp']]);
});

await test('a group that throws while building does not stop the others', async () => {
  const device = stalledDevice();
  const boom = new Error('undefined field');
  const [first, second, third] = queueWriteGroups(device.createBatch, [
    [(b) => b.set('stat')],
    [() => { throw boom; }],
    [(b) => b.set('xp')],
  ]);
  await assert.rejects(second, boom);
  assert.ok(first instanceof Promise && third instanceof Promise);
  assert.deepEqual(device.committed, [['stat'], ['xp']]);
});

await test('commit results come back in group order', async () => {
  const createBatch = () => {
    const writes = [];
    return { set: (name) => writes.push(name), commit: async () => writes.join('+') };
  };
  const results = await Promise.all(queueWriteGroups(createBatch, [
    [(b) => b.set('a'), (b) => b.set('b')],
    [(b) => b.set('c')],
  ]));
  assert.deepEqual(results, ['a+b', 'c']);
});

// finishQuiz must never go back to waiting for the server between the writes of one result.
await test('finishQuiz queues its result writes before anything it waits on', () => {
  const source = readFileSync(new URL('../src/components/DailyChallenge.jsx', import.meta.url), 'utf8');
  const start = source.indexOf('const finishQuizInner = async');
  assert.ok(start > 0);
  const body = source.slice(start);
  const queued = body.indexOf('queueWriteGroups(');
  assert.ok(queued > 0, 'finishQuizInner calls queueWriteGroups');
  const between = body.slice(0, queued);
  assert.ok(!/await\s+(setDoc|updateDoc|runTransaction|getDoc)\b/.test(between), 'no server wait before the writes are queued');
  assert.ok(!body.includes('await runTransaction'), 'XP is not a transaction: a transaction cannot be queued offline');
  assert.ok(!body.includes('await updateAdminDailySummary'), 'teacher summary rides in the batch');
});

console.log(`queueWriteGroups: ${passed} passed`);
