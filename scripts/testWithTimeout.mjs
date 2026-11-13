/** withTimeout. Run via npm run test:homework. */
import assert from 'node:assert';
import { withTimeout, retryOnTimeout, shareInFlight } from '../src/utils/withTimeout.js';

let passed = 0;
const test = async (name, fn) => { await fn(); passed += 1; console.log(`  ✓ ${name}`); };
const later = (ms, v, fail) => new Promise((res, rej) => setTimeout(() => (fail ? rej(new Error(v)) : res(v)), ms));

await test('a fast promise resolves with its value', async () => assert.equal(await withTimeout(later(5, 'ok'), 200), 'ok'));
await test('a slow promise rejects with timeout', async () => {
  await assert.rejects(withTimeout(later(300, 'late'), 20), /timeout/);
});
await test('a failing promise keeps its own error', async () => {
  await assert.rejects(withTimeout(later(5, 'boom', true), 200), /boom/);
});
await test('a plain value works too', async () => assert.equal(await withTimeout(42, 50), 42));

await test('retryOnTimeout asks again after a stalled attempt', async () => {
  let calls = 0;
  const value = await retryOnTimeout(() => { calls += 1; return calls === 1 ? later(300, 'stalled') : later(5, 'second'); }, { ms: 30, tries: 2 });
  assert.equal(value, 'second'); assert.equal(calls, 2);
});
await test('retryOnTimeout gives up with timeout after the last try', async () => {
  let calls = 0;
  await assert.rejects(retryOnTimeout(() => { calls += 1; return later(300, 'never'); }, { ms: 20, tries: 3 }), /timeout/);
  assert.equal(calls, 3);
});
await test('retryOnTimeout does not retry a real error', async () => {
  let calls = 0;
  await assert.rejects(retryOnTimeout(() => { calls += 1; return later(5, 'denied', true); }, { ms: 50, tries: 3 }), /denied/);
  assert.equal(calls, 1);
});
await test('shareInFlight: a second caller joins the run under way', async () => {
  const map = new Map(); let runs = 0;
  const run = () => { runs += 1; return later(30, 'done'); };
  const [a, b] = await Promise.all([shareInFlight(map, 'k', run), shareInFlight(map, 'k', run)]);
  assert.equal(a, 'done'); assert.equal(b, 'done'); assert.equal(runs, 1); assert.equal(map.size, 0);
});
await test('shareInFlight: a failed run is forgotten so the next call starts fresh', async () => {
  const map = new Map(); let runs = 0;
  await assert.rejects(shareInFlight(map, 'k', () => { runs += 1; return later(5, 'boom', true); }), /boom/);
  assert.equal(await shareInFlight(map, 'k', () => { runs += 1; return 'ok'; }), 'ok');
  assert.equal(runs, 2);
});
await test('shareInFlight: different keys run separately', async () => {
  const map = new Map(); let runs = 0;
  await Promise.all([shareInFlight(map, 'a', () => { runs += 1; }), shareInFlight(map, 'b', () => { runs += 1; })]);
  assert.equal(runs, 2);
});

console.log(`\nwith timeout: ${passed} passed`);
