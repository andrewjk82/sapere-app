/**
 * Log retention: only docs older than each collection's window are deleted, the
 * per-run limit holds, and notifications are purged per student. Fake Firestore — no network.
 * Usage: node scripts/testLogRetention.mjs
 */
import assert from 'node:assert';
import { purgeOldLogs, cutoffDateId, RETENTION_DAYS } from '../api/_lib/logRetention.js';

const now = new Date('2026-10-26T00:00:00Z');
const daysAgo = (n) => new Date(now.getTime() - n * 86400000);
const DOC_ID = Symbol('docId');
const FieldPath = { documentId: () => DOC_ID };

const store = {
  traffic_logs: { a: { timestamp: daysAgo(40) }, b: { timestamp: daysAgo(31) }, c: { timestamp: daysAgo(5) } },
  system_logs: { a: { timestamp: daysAgo(29) }, b: { timestamp: daysAgo(100) } },
  notification_queue_6pm: { '2026-08-01': {}, '2026-09-25': {}, '2026-10-25': {} },
  'users/u1/notifications': { a: { timestamp: daysAgo(91) }, b: { timestamp: daysAgo(10) } },
  'users/u2/notifications': { a: { timestamp: daysAgo(200) }, b: { timestamp: daysAgo(120) } },
};
const deleted = [];

const coll = (path) => ({
  where: (field, op, value) => {
    assert.equal(op, '<');
    return {
      limit: (n) => ({
        get: async () => {
          const docs = Object.entries(store[path] || {})
            .filter(([id, d]) => (field === DOC_ID ? id : d[field]) < value)
            .slice(0, n)
            .map(([id]) => ({ ref: { path: `${path}/${id}` } }));
          return { docs, size: docs.length };
        },
      }),
    };
  },
  listDocuments: async () => ['u1', 'u2'].map((uid) => ({ collection: (sub) => coll(`users/${uid}/${sub}`) })),
});

const db = {
  collection: coll,
  batch: () => {
    const ops = [];
    return { delete: (ref) => ops.push(ref.path), commit: async () => { deleted.push(...ops); } };
  },
};

let passed = 0;
const test = async (name, fn) => { await fn(); passed += 1; console.log(`  ✓ ${name}`); };

await test('retention windows are as agreed', () => {
  assert.deepEqual(RETENTION_DAYS, { traffic_logs: 30, system_logs: 30, notification_queue_6pm: 30, notifications: 90 });
});

await test('queue cutoff is a date id', () => {
  assert.equal(cutoffDateId(now, 30), '2026-09-26');
});

await test('only expired docs are deleted, per student for notifications', async () => {
  const result = await purgeOldLogs(db, FieldPath, { now });
  assert.deepEqual(result, { traffic_logs: 2, system_logs: 1, notification_queue_6pm: 2, notifications: 3 });
  assert.deepEqual(deleted.sort(), [
    'notification_queue_6pm/2026-08-01', 'notification_queue_6pm/2026-09-25',
    'system_logs/b', 'traffic_logs/a', 'traffic_logs/b',
    'users/u1/notifications/a', 'users/u2/notifications/a', 'users/u2/notifications/b',
  ]);
});

await test('per-run limit is respected', async () => {
  deleted.length = 0;
  const result = await purgeOldLogs(db, FieldPath, { now, limit: 1 });
  assert.equal(result.traffic_logs, 1);
  assert.equal(result.notifications, 2); // one per student
});

console.log(`log retention: ${passed} passed`);
