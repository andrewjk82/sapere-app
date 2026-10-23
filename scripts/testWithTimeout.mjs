/** withTimeout. Run via npm run test:homework. */
import assert from 'node:assert';
import { withTimeout } from '../src/utils/withTimeout.js';

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

console.log(`\nwith timeout: ${passed} passed`);
