/**
 * Secret Note "caught up" clear-bonus regression.
 *
 * The bug: a diligent student who reviews every DUE note still can't earn the
 * clear bonus, because manual notes reschedule (not graduate) on the first
 * correct — the notebook is never empty same-day, and the bonus settles the
 * NEXT day when "0 due" is already gone. Fix: stamp the day the due queue is
 * cleared, and gate the bonus on that stamp (isCaughtUp) instead of emptiness.
 *
 * Runs in Node with a localStorage shim. secretNote.js pulls in the calc
 * generator (no Firebase), so it imports cleanly; the bonus service imports
 * Firebase, so its one-line isCaughtUp gate is re-expressed here against the
 * same helpers to prove the semantics.
 *
 * Usage: npm run test:secret-note-bonus
 */
import assert from 'node:assert';

// ── localStorage shim ──
const store = new Map();
globalThis.localStorage = {
  getItem: (k) => (store.has(k) ? store.get(k) : null),
  setItem: (k, v) => store.set(k, String(v)),
  removeItem: (k) => store.delete(k),
  clear: () => store.clear(),
};
globalThis.window = { localStorage: globalThis.localStorage };

const {
  addMistakes,
  recordResult,
  getNoteCount,
  getDueCount,
  markSecretNoteCaughtUp,
  clearSecretNoteCaughtUp,
  wasSecretNoteCaughtUp,
} = await import('../src/utils/secretNote.js');

// Mirror of secretNoteBonusService.isCaughtUp (kept in sync deliberately).
const isCaughtUp = (kind, uid, dateKey) =>
  getNoteCount(kind, uid) === 0 || wasSecretNoteCaughtUp(kind, uid, dateKey);

const today = new Date().toLocaleDateString('en-CA');
const yesterday = (() => { const d = new Date(); d.setDate(d.getDate() - 1); return d.toLocaleDateString('en-CA'); })();

let passed = 0;
const check = (name, fn) => {
  store.clear();
  try { fn(); console.log(`  ok ${name}`); passed += 1; }
  catch (e) { console.error(`  ✗ ${name}\n    ${e.message}`); process.exitCode = 1; }
};

const UID = 'u1';
const manualQ = (id) => ({ id, type: 'short_answer', answer: '42', question: `q${id}` });

console.log('\nSecret Note caught-up / clear-bonus\n');

check('diligent student: review all due → caught up even though notebook not empty', () => {
  addMistakes('daily', UID, [manualQ('a'), manualQ('b')]);
  assert.equal(getNoteCount('daily', UID), 2);
  assert.equal(getDueCount('daily', UID), 2, 'both due on add');

  // First correct on each → manual reschedules to +1 day (stays saved, not due).
  assert.equal(recordResult('daily', UID, 'a', true), 'kept');
  assert.equal(recordResult('daily', UID, 'b', true), 'kept');
  assert.equal(getNoteCount('daily', UID), 2, 'notebook NOT empty (rescheduled)');
  assert.equal(getDueCount('daily', UID), 0, 'nothing due now');

  // The review UI stamps caught-up when the due queue clears.
  markSecretNoteCaughtUp('daily', UID);
  assert.equal(isCaughtUp('daily', UID, today), true, 'eligible despite non-empty notebook');
});

check('graduated notebook (empty) is caught up without any stamp', () => {
  addMistakes('daily', UID, [manualQ('a')]);
  recordResult('daily', UID, 'a', true);   // streak 1, rescheduled
  recordResult('daily', UID, 'a', true);   // streak 2 → graduate
  assert.equal(getNoteCount('daily', UID), 0, 'graduated → empty');
  assert.equal(isCaughtUp('daily', UID, today), true);
});

check('untouched due notes → NOT caught up (no free bonus)', () => {
  addMistakes('daily', UID, [manualQ('a'), manualQ('b')]);
  // Student never reviews; nothing stamped.
  assert.equal(getDueCount('daily', UID), 2);
  assert.equal(isCaughtUp('daily', UID, today), false);
});

check('new mistake after catching up revokes the stamp', () => {
  addMistakes('daily', UID, [manualQ('a')]);
  recordResult('daily', UID, 'a', true);   // rescheduled, 0 due
  markSecretNoteCaughtUp('daily', UID);
  assert.equal(isCaughtUp('daily', UID, today), true);

  // Later daily test adds a fresh wrong answer → due now, stamp must clear.
  addMistakes('daily', UID, [manualQ('c')]);
  assert.equal(getDueCount('daily', UID), 1, 'new note is due');
  assert.equal(wasSecretNoteCaughtUp('daily', UID, today), false, 'stamp revoked by addMistakes');
  assert.equal(isCaughtUp('daily', UID, today), false);
});

check('stamp is per-day: yesterday caught up does not leak to today', () => {
  addMistakes('daily', UID, [manualQ('a')]);
  recordResult('daily', UID, 'a', true);
  markSecretNoteCaughtUp('daily', UID, yesterday);
  assert.equal(isCaughtUp('daily', UID, yesterday), true, 'yesterday eligible (settlement reads this)');
  assert.equal(wasSecretNoteCaughtUp('daily', UID, today), false, 'today not implied');
});

check('stamp is per-kind: daily caught up leaves calc untouched', () => {
  addMistakes('daily', UID, [manualQ('a')]);
  addMistakes('calc', UID, [manualQ('x')]);
  recordResult('daily', UID, 'a', true);
  markSecretNoteCaughtUp('daily', UID);
  assert.equal(isCaughtUp('daily', UID, today), true);
  assert.equal(isCaughtUp('calc', UID, today), false, 'calc still has a due note');
});

check('clearSecretNoteCaughtUp removes an existing stamp', () => {
  markSecretNoteCaughtUp('daily', UID);
  assert.equal(wasSecretNoteCaughtUp('daily', UID, today), true);
  clearSecretNoteCaughtUp('daily', UID);
  assert.equal(wasSecretNoteCaughtUp('daily', UID, today), false);
});

console.log(`\n${passed} checks passed.\n`);
