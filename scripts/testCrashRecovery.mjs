/** Chunk-load recovery helpers. Run via npm run test:homework. */
import assert from 'node:assert';
import { chunkUrlsIn, isChunkLoadError, staticImportsIn, chunkUrlsInImporter } from '../src/utils/crashRecovery.js';

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

test('static imports of a built chunk (the files a failed chunk depends on)', () => {
  const code = 'import{a as b}from"./index-Y1q.js";import"./SplitPanes-x1.js";import{c}from "./seeds-misc-9.js";const d=()=>import("./Lazy-1.js");';
  assert.deepEqual(staticImportsIn(code), ['./index-Y1q.js', './SplitPanes-x1.js', './seeds-misc-9.js']);
});

test('the chunk a lazy importer loads, from its built source (Safari path)', () => {
  const importer = '()=>__vitePreload(()=>import("./Curriculum-Z1pDrncI.js"),__vite__mapDeps([0,1]))';
  assert.deepEqual(chunkUrlsInImporter(importer, `${O}/assets/index-Y1q.js`), [`${O}/assets/Curriculum-Z1pDrncI.js`]);
  assert.deepEqual(chunkUrlsInImporter("() => import('./components/Curriculum')", `${O}/src/App.jsx`), []); // dev source: no built file
  // the real build quotes with backticks
  const built = 'IK(()=>Fe(()=>import(`./Curriculum-DgQMuLg2.js`),__vite__mapDeps([8,1,9])))';
  assert.deepEqual(chunkUrlsInImporter(built, `${O}/assets/index-Y1q.js`), [`${O}/assets/Curriculum-DgQMuLg2.js`]);
});

console.log(`\ncrash recovery: ${passed} passed`);
