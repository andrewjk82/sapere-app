/** Answer key device cache. Run via npm run test:homework. */
import assert from 'node:assert';
import { createAnswerKeyCache, ANSWER_KEY_TTL_MS } from '../src/utils/answerKeyCache.js';

const memAdapter = () => { const m = new Map(); return { get: async (k) => m.get(k), set: async (k, v) => { m.set(k, v); }, _m: m }; };
let t = 1_000_000; const now = () => t;
let passed = 0;
const test = async (name, fn) => { await fn(); passed += 1; console.log(`  ✓ ${name}`); };

await test('stores a key and returns it until the TTL passes', async () => {
  const c = createAnswerKeyCache(memAdapter(), { now });
  await c.set('y7-1a', { sections: [1] });
  assert.deepEqual(await c.get('y7-1a'), { sections: [1] });
  t += ANSWER_KEY_TTL_MS - 1;
  assert.ok(await c.get('y7-1a'));
  t += 2;
  assert.equal(await c.get('y7-1a'), null);
});

await test('a version bump drops old entries', async () => {
  const a = memAdapter();
  await createAnswerKeyCache(a, { now, version: 1 }).set('k', { x: 1 });
  assert.equal(await createAnswerKeyCache(a, { now, version: 2 }).get('k'), null);
});

await test('"no key" (null) is never stored', async () => {
  const a = memAdapter();
  const c = createAnswerKeyCache(a, { now });
  await c.set('missing', null);
  assert.equal(a._m.size, 0);
  assert.equal(await c.get('missing'), null);
});

await test('a broken store behaves like an empty cache', async () => {
  const bad = { get: async () => { throw new Error('boom'); }, set: async () => { throw new Error('boom'); } };
  const c = createAnswerKeyCache(bad, { now });
  assert.equal(await c.get('k'), null);
  await c.set('k', { x: 1 }); // must not throw
});

console.log(`\nanswer key cache: ${passed} passed`);
