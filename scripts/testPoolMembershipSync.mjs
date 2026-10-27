import assert from 'node:assert/strict';
import { syncPoolMembership, isOffPeak } from '../api/_lib/poolMembershipSync.js';

const fakeDb = (initial) => {
  const state = { data: initial, writes: [] };
  return { state, collection: () => ({ doc: () => ({
    get: async () => ({ exists: state.data != null, data: () => state.data }),
    set: async (d, o) => { state.writes.push([d, o]); state.data = { ...state.data, ...d }; },
  }) }) };
};
const site = (allIds, ok = true) => async () => ({ ok, status: ok ? 200 : 503, json: async () => ({ allIds }) });

const db = fakeDb({ membershipVersion: 1, version: 5 });
let r = await syncPoolMembership(db, { fetchImpl: site('all-ids.aaaa1111.json'), now: () => 99 });
assert.equal(r.action, 'bumped');
assert.deepEqual(db.state.writes[0], [{ membershipVersion: 99, contentMembershipFile: 'all-ids.aaaa1111.json' }, { merge: true }]);

r = await syncPoolMembership(db, { fetchImpl: site('all-ids.aaaa1111.json'), now: () => 100 });
assert.equal(r.action, 'unchanged');
assert.equal(db.state.writes.length, 1);

r = await syncPoolMembership(db, { fetchImpl: site('all-ids.bbbb2222.json'), now: () => 101 });
assert.equal(r.action, 'bumped'); assert.equal(db.state.data.membershipVersion, 101);

for (const bad of [site('x', false), site('../evil'), site(undefined), async () => { throw new Error('boom'); }]) {
  r = await syncPoolMembership(db, { fetchImpl: bad });
  assert.equal(r.action, 'skipped');
}
assert.equal(db.state.writes.length, 2);

assert.deepEqual([21, 22, 23, 0, 5, 6, 15].map(isOffPeak), [false, true, true, true, true, false, false]);
console.log('pool membership sync: ok');
