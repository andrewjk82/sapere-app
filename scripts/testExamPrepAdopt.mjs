/** Exam Prep: when the server copy of a student's stats replaces the device's. Run via npm run test:homework. */
import assert from 'node:assert';

import { shouldAdoptServerStats } from '../src/utils/examPrepSync.js';

let passed = 0;
const test = (name, fn) => { fn(); passed += 1; console.log(`  ✓ ${name}`); };

{
  test('answers given in a session that never ended are not wiped by the server copy', () => {
    // 5 more answers on this device, session count unchanged because the session did not end
    assert.equal(shouldAdoptServerStats({ attempted: 155, sessions: 36 }, { attempted: 150, sessions: 36 }), false);
  });
  test('a device that is behind takes the server copy', () => {
    assert.equal(shouldAdoptServerStats({ attempted: 40, sessions: 4 }, { attempted: 150, sessions: 36 }), true);
    assert.equal(shouldAdoptServerStats({ attempted: 0, sessions: 0 }, { attempted: 12, sessions: 1 }), true);
  });
  test('identical counts: the server copy (it carries the history and mastery too)', () => {
    assert.equal(shouldAdoptServerStats({ attempted: 150, sessions: 36 }, { attempted: 150, sessions: 36 }), true);
    assert.equal(shouldAdoptServerStats({ attempted: 150, sessions: 37 }, { attempted: 150, sessions: 36 }), false);
  });
  test('missing or malformed stats count as zero', () => {
    assert.equal(shouldAdoptServerStats(undefined, { attempted: 3 }), true);
    assert.equal(shouldAdoptServerStats({ attempted: 3 }, undefined), false);
    assert.equal(shouldAdoptServerStats({ attempted: 'x' }, { attempted: null }), true);
  });
}
console.log(`\nexam prep adopt: ${passed} passed`);
