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
  'users/u1/daily_assignments': { '2026-09-01': {}, '2026-10-11': {}, '2026-10-12': {}, '2026-10-25': {}, next_prep: {} },
  // sync_meta mixes the per-day boot docs with permanent markers. The markers are
  // "old" only because nothing has changed them and MUST survive the purge.
  sync_meta: {
    'challenge_boot_u1_2026-05-19': { updatedAt: daysAgo(160) },
    'challenge_boot_u2_2026-09-01': { updatedAt: daysAgo(55) },
    'challenge_boot_u1_2026-10-25': { updatedAt: daysAgo(1) },
    students_admin: { updatedAt: daysAgo(400) },
    students_u1: { updatedAt: daysAgo(120) },
    hsc_users_u1: { updatedAt: daysAgo(90) },
    curriculum: { updatedAt: daysAgo(300) },
    questions: { updatedAt: daysAgo(500) },
    newQuestions: { updatedAt: daysAgo(200) },
  },
  timestable_sprint_attempts: {
    old1: { createdAt: daysAgo(120) },
    old2: { createdAt: daysAgo(91) },
    recent: { createdAt: daysAgo(89) },
  },
};
const deleted = [];

// `id` is exposed because the sync_meta purge filters the page by doc-id prefix.
const limitOf = (path, field, value) => (n) => ({
  get: async () => {
    const docs = Object.entries(store[path] || {})
      .filter(([id, d]) => (field === DOC_ID ? id : d[field]) < value)
      .sort(([, a], [, b]) => (field === DOC_ID ? 0 : a[field] - b[field]))
      .slice(0, n)
      .map(([id]) => ({ id, ref: { path: `${path}/${id}` } }));
    return { docs, size: docs.length };
  },
});

const coll = (path) => ({
  where: (field, op, value) => {
    assert.equal(op, '<');
    return {
      limit: limitOf(path, field, value),
      // the sync_meta purge sorts by the same field it filters on
      orderBy: (orderField) => {
        assert.equal(orderField, field);
        return { limit: limitOf(path, field, value) };
      },
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
  assert.deepEqual(RETENTION_DAYS, {
    traffic_logs: 30, system_logs: 30, notification_queue_6pm: 30, notifications: 90,
    daily_assignments: 14, challenge_boot: 30, timestable_sprint_attempts: 90,
  });
});

await test('queue cutoff is a date id', () => {
  assert.equal(cutoffDateId(now, 30), '2026-09-26');
});

await test('only expired docs are deleted (next_prep and the last 14 days kept), per student', async () => {
  const result = await purgeOldLogs(db, FieldPath, { now });
  assert.deepEqual(result, {
    traffic_logs: 2, system_logs: 1, notification_queue_6pm: 2, notifications: 3,
    daily_assignments: 2, challenge_boot: 2, timestable_sprint_attempts: 2,
  });
  assert.deepEqual(deleted.sort(), [
    'notification_queue_6pm/2026-08-01', 'notification_queue_6pm/2026-09-25',
    'sync_meta/challenge_boot_u1_2026-05-19', 'sync_meta/challenge_boot_u2_2026-09-01',
    'system_logs/b',
    'timestable_sprint_attempts/old1', 'timestable_sprint_attempts/old2',
    'traffic_logs/a', 'traffic_logs/b',
    'users/u1/daily_assignments/2026-09-01', 'users/u1/daily_assignments/2026-10-11',
    'users/u1/notifications/a', 'users/u2/notifications/a', 'users/u2/notifications/b',
  ]);
});

await test('the sync_meta purge never touches a doc outside the challenge_boot_ prefix', async () => {
  deleted.length = 0;
  await purgeOldLogs(db, FieldPath, { now });
  const touchedSyncMeta = deleted.filter((p) => p.startsWith('sync_meta/'));
  assert.ok(touchedSyncMeta.length > 0, 'expected the boot docs to be purged at all');
  touchedSyncMeta.forEach((p) => assert.ok(
    p.startsWith('sync_meta/challenge_boot_'),
    `purge deleted a permanent sync_meta marker: ${p}`,
  ));
  // students_*/hsc_*/curriculum/questions/newQuestions are all older than the window
  // and all still present.
  ['students_admin', 'students_u1', 'hsc_users_u1', 'curriculum', 'questions', 'newQuestions']
    .forEach((id) => assert.ok(!deleted.includes(`sync_meta/${id}`), id));
  // today's boot doc is kept too
  assert.ok(!deleted.includes('sync_meta/challenge_boot_u1_2026-10-25'));
});

await test('per-run limit is respected', async () => {
  deleted.length = 0;
  const result = await purgeOldLogs(db, FieldPath, { now, limit: 1 });
  assert.equal(result.traffic_logs, 1);
  assert.equal(result.notifications, 2); // one per student
});

console.log(`log retention: ${passed} passed`);
