/**
 * Homework retention: originals are deleted once purgeAfter <= today, the
 * submission keeps its thumbnails, and purgeAfter is removed so the doc is
 * never matched again. Fake Firestore — no network.
 * Usage: node scripts/testHomeworkRetention.mjs
 */
import assert from 'node:assert';
import { purgeCheckedHomeworkOriginals } from '../api/_lib/homeworkRetention.js';

const DELETE = Symbol('delete');
const TS = Symbol('ts');
const FieldValue = { delete: () => DELETE, serverTimestamp: () => TS };

const store = {
  homework_submissions: {
    old: { purgeAfter: '2026-09-01', thumbnails: ['t'], pages: { 0: {}, 1: {} } },
    today: { purgeAfter: '2026-09-28', thumbnails: ['t'], pages: { 0: {} } },
    future: { purgeAfter: '2026-10-30', thumbnails: ['t'], pages: { 0: {} } },
    pending: { thumbnails: ['t'], pages: { 0: {} } },
  },
};
const queries = [];

const pageRef = (subId, pageId) => ({ kind: 'page', subId, pageId });
const subRef = (subId) => ({
  kind: 'sub',
  subId,
  collection: (name) => {
    assert.equal(name, 'pages');
    return {
      get: async () => {
        const pages = store.homework_submissions[subId].pages;
        const docs = Object.keys(pages).map((pageId) => ({ ref: pageRef(subId, pageId) }));
        return { docs, size: docs.length };
      },
    };
  },
});

const db = {
  collection: (name) => {
    assert.equal(name, 'homework_submissions');
    return {
      where: (field, op, value) => {
        queries.push([field, op, value]);
        return {
          limit: (n) => ({
            get: async () => {
              const docs = Object.entries(store.homework_submissions)
                .filter(([, d]) => d.purgeAfter && d.purgeAfter <= value)
                .slice(0, n)
                .map(([id]) => ({ id, ref: subRef(id) }));
              return { docs, size: docs.length };
            },
          }),
        };
      },
    };
  },
  batch: () => {
    const ops = [];
    return {
      delete: (ref) => ops.push(['delete', ref]),
      update: (ref, data) => ops.push(['update', ref, data]),
      commit: async () => {
        ops.forEach(([op, ref, data]) => {
          const sub = store.homework_submissions[ref.subId];
          if (op === 'delete' && ref.kind === 'page') delete sub.pages[ref.pageId];
          if (op === 'update') {
            Object.entries(data).forEach(([k, v]) => {
              if (v === DELETE) delete sub[k];
              else sub[k] = v;
            });
          }
        });
      },
    };
  },
};

const result = await purgeCheckedHomeworkOriginals(db, FieldValue, { todayStr: '2026-09-28' });

assert.deepEqual(queries, [['purgeAfter', '<=', '2026-09-28']]);
assert.deepEqual(result, { purged: 2, pagesDeleted: 3 });
const s = store.homework_submissions;
assert.deepEqual(s.old.pages, {});
assert.deepEqual(s.today.pages, {});
assert.equal(s.old.purgeAfter, undefined);
assert.equal(s.old.originalsDeletedAt, TS);
assert.deepEqual(s.old.thumbnails, ['t']);
assert.equal(Object.keys(s.future.pages).length, 1);
assert.equal(s.future.purgeAfter, '2026-10-30');
assert.equal(Object.keys(s.pending.pages).length, 1);

const again = await purgeCheckedHomeworkOriginals(db, FieldValue, { todayStr: '2026-09-28' });
assert.deepEqual(again, { purged: 0, pagesDeleted: 0 });

console.log('homework retention: 11 assertions passed');
