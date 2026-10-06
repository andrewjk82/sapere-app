/** Answer-sound switch + result routing. Run via npm run test:answer-sound. */
import assert from 'node:assert';

let passed = 0;
const test = (name, fn) => { fn(); passed += 1; console.log(`  ✓ ${name}`); };
const memory = () => { const d = new Map(); return { getItem: (k) => (d.has(k) ? d.get(k) : null), setItem: (k, v) => d.set(k, String(v)) }; };

// No browser here: stub just enough that the module loads and every call is a safe no-op.
globalThis.localStorage = memory();
const { isAnswerSoundOn, setAnswerSoundOn, playAnswerResult, playCorrect, playWrong } = await import('../src/utils/answerSound.js');

test('on by default; off/on is remembered', () => {
  const s = memory();
  assert.equal(isAnswerSoundOn(s), true);
  setAnswerSoundOn(false, s);
  assert.equal(isAnswerSoundOn(s), false);
  setAnswerSoundOn(true, s);
  assert.equal(isAnswerSoundOn(s), true);
});

test('broken storage never throws and counts as on', () => {
  const bad = { getItem: () => { throw new Error('denied'); }, setItem: () => { throw new Error('denied'); } };
  assert.equal(isAnswerSoundOn(bad), true);
  setAnswerSoundOn(false, bad);
});

test('without Web Audio every play call is a silent no-op', () => {
  playCorrect(); playWrong();
  [true, false, null, undefined, 'x'].forEach((v) => playAnswerResult(v));
});

console.log(`\nanswer sound: ${passed} passed`);
