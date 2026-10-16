/** Chunk-load recovery helpers. Run via npm run test:homework. */
import assert from 'node:assert';
import { chunkUrlsIn, isChunkLoadError } from '../src/utils/crashRecovery.js';

let passed = 0;
const test = (name, fn) => { fn(); passed += 1; console.log(`  ✓ ${name}`); };
const O = 'https://sapere-app.vercel.app';

test('Chrome message: the failing chunk URL is found', () => {
  const msg = `Failed to fetch dynamically imported module: ${O}/assets/Curriculum-CS48dh-F.js`;
  assert.ok(isChunkLoadError(msg));
  assert.deepEqual(chunkUrlsIn(msg, O), [`${O}/assets/Curriculum-CS48dh-F.js`]);
});

test('Safari message has no URL: nothing to repair, no crash', () => {
  const msg = 'Importing a module script failed.';
  assert.ok(isChunkLoadError(msg));
  assert.deepEqual(chunkUrlsIn(msg, O), []);
});

test('only this site\'s assets are re-fetched', () => {
  const msg = `Failed to fetch dynamically imported module: https://evil.example/x.js and ${O}/assets/a-1.js?x=1`;
  assert.deepEqual(chunkUrlsIn(msg, O), [`${O}/assets/a-1.js`]);
});

test('empty / odd input', () => {
  assert.deepEqual(chunkUrlsIn('', O), []);
  assert.deepEqual(chunkUrlsIn(undefined, O), []);
});

console.log(`\ncrash recovery: ${passed} passed`);
