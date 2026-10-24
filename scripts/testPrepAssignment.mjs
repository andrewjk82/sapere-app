import assert from 'node:assert/strict';
import { pickPrepAssignment, sameQuestionSet } from '../src/utils/prepAssignment.js';

const prepA = { version: 1, generatedAt: '2026-10-21T13:20:47Z', questionIds: ['a', 'b', 'c'] };
const prepB = { version: 2, generatedAt: '2026-10-23T12:27:19Z', questionIds: ['d', 'e', 'f'] };

// Jane 2026-10-24: stale local copy, server already used it and holds a newer prep.
let r = pickPrepAssignment({ serverPrep: prepB, localPrep: prepA });
assert.equal(r.prep, prepB);
assert.equal(r.clearLocal, true);

// Stale local copy, server prep gone → nothing to use, clear the copy.
r = pickPrepAssignment({ serverPrep: null, localPrep: prepA });
assert.equal(r.prep, null);
assert.equal(r.clearLocal, true);

// Local copy matches server → fine.
r = pickPrepAssignment({ serverPrep: prepA, localPrep: { ...prepA } });
assert.equal(r.prep, prepA);
assert.equal(r.clearLocal, false);

// Offline → local copy.
r = pickPrepAssignment({ serverReadFailed: true, localPrep: prepA });
assert.equal(r.prep, prepA);

// Prep equal to the previous day's assignment → refused.
const yesterday = { ...prepA, id: '2026-10-23', version: 999 };
r = pickPrepAssignment({ serverPrep: prepA, localPrep: prepA, previousAssignment: yesterday });
assert.equal(r.prep, null);
assert.equal(r.clearLocal, true);
r = pickPrepAssignment({ serverPrep: prepB, previousAssignment: yesterday });
assert.equal(r.prep, prepB);

// Same ids in a different order count as the same set.
assert.equal(sameQuestionSet({ questionIds: ['a', 'b'] }, { questions: [{ id: 'b' }, { id: 'a' }] }), true);
assert.equal(sameQuestionSet({ questionIds: ['a', 'b'] }, { questionIds: ['a', 'c'] }), false);

console.log('prepAssignment tests passed');
