import assert from 'node:assert/strict';
import { markWhatsNewSeen, shouldShowWhatsNew } from '../src/utils/whatsNew.js';

const memory = () => {
  const data = new Map();
  return { getItem: (k) => (data.has(k) ? data.get(k) : null), setItem: (k, v) => data.set(k, v) };
};
const storage = memory();
assert.equal(shouldShowWhatsNew({ isAdmin: false, role: 'student', storage }), true);
assert.equal(shouldShowWhatsNew({ isAdmin: true, role: 'student', storage }), false);
assert.equal(shouldShowWhatsNew({ isAdmin: false, role: 'parent', storage }), false);
assert.equal(shouldShowWhatsNew({ isAdmin: false, role: undefined, storage }), false);
markWhatsNewSeen({ storage });
assert.equal(shouldShowWhatsNew({ isAdmin: false, role: 'student', storage }), false);
assert.equal(shouldShowWhatsNew({ isAdmin: false, role: 'student', storage, id: 'next' }), true);
const broken = { getItem: () => { throw new Error('blocked'); }, setItem: () => { throw new Error('blocked'); } };
assert.equal(shouldShowWhatsNew({ isAdmin: false, role: 'student', storage: broken }), false);
console.log('whats new: passed');
