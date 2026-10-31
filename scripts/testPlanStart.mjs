/** Today's plan → page hand-off: one-shot, kind-checked, never fires later. Run via npm run test:homework. */
import assert from 'node:assert';

const store = new Map();
globalThis.sessionStorage = { getItem: (k) => (store.has(k) ? store.get(k) : null), setItem: (k, v) => store.set(k, String(v)), removeItem: (k) => store.delete(k) };
const { PLAN_START_KEY, requestPlanStart, takePlanStart } = await import('../src/utils/planStart.js');

let passed = 0;
const test = (name, fn) => { store.clear(); fn(); passed += 1; console.log(`  ✓ ${name}`); };

test('a request is taken once, then it is gone', () => {
  requestPlanStart('calc');
  assert.equal(takePlanStart(['daily', 'calc']), 'calc');
  assert.equal(takePlanStart(['daily', 'calc']), null);
  assert.equal(store.has(PLAN_START_KEY), false);
});

test('a page leaves requests meant for another page alone', () => {
  requestPlanStart('exam-prep');
  assert.equal(takePlanStart(['daily', 'calc']), null);          // Daily Study does not take Exam Prep's request
  assert.equal(takePlanStart(['exam-prep']), 'exam-prep');       // Exam Prep still finds it
});

test('a daily set request is addressed to its exam', () => {
  requestPlanStart('special:sch-oc');
  assert.equal(takePlanStart(['special:sch-selective']), null);
  assert.equal(takePlanStart(['special:sch-oc']), 'special:sch-oc');
});

test('nothing requested, or storage blocked, is just null', () => {
  assert.equal(takePlanStart(['daily']), null);
  const real = globalThis.sessionStorage;
  globalThis.sessionStorage = { getItem() { throw new Error('blocked'); }, setItem() { throw new Error('blocked'); }, removeItem() {} };
  assert.doesNotThrow(() => requestPlanStart('daily'));
  assert.equal(takePlanStart(['daily']), null);
  globalThis.sessionStorage = real;
});

console.log(`\nplan start: ${passed} passed`);
