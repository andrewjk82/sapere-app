/** Notepad pen settings memory. Run via npm run test:homework. */
import assert from 'node:assert';
import { loadPadSettings, savePadSettings, cleanPadSettings, DEFAULT_PAD_SETTINGS, loadPenDevice, savePenDevice } from '../src/utils/padSettings.js';

let passed = 0;
const test = (name, fn) => { fn(); passed += 1; console.log(`  ✓ ${name}`); };
const memory = () => { const m = new Map(); return { getItem: (k) => m.get(k) ?? null, setItem: (k, v) => m.set(k, v), removeItem: (k) => m.delete(k) }; };

test('nothing saved → defaults', () => assert.deepEqual(loadPadSettings(memory()), DEFAULT_PAD_SETTINGS));

test('what was saved comes back', () => {
  const s = memory();
  savePadSettings({ tool: 'ballpoint', eraserMode: 'stroke', color: '#ef4444', highlighter: 'rgba(160, 210, 255, 0.48)', width: 5 }, s);
  assert.deepEqual(loadPadSettings(s), { tool: 'ballpoint', eraserMode: 'stroke', color: '#ef4444', highlighter: 'rgba(160, 210, 255, 0.48)', width: 5 });
});

test('the eraser and the lasso are not restored as the starting tool; the last drawing tool is kept', () => {
  const s = memory();
  savePadSettings({ ...DEFAULT_PAD_SETTINGS, tool: 'highlighter' }, s);
  savePadSettings({ ...DEFAULT_PAD_SETTINGS, tool: 'eraser', color: '#2563eb' }, s);
  assert.equal(loadPadSettings(s).tool, 'highlighter');
  assert.equal(loadPadSettings(s).color, '#2563eb');
  savePadSettings({ ...DEFAULT_PAD_SETTINGS, tool: 'lasso' }, s);
  assert.equal(loadPadSettings(s).tool, 'highlighter');
});

test('unknown or tampered values fall back to the defaults', () => {
  assert.deepEqual(cleanPadSettings({ tool: 'laser', eraserMode: 'x', color: 'red', highlighter: 'blue', width: 99 }), DEFAULT_PAD_SETTINGS);
  assert.deepEqual(cleanPadSettings(null), DEFAULT_PAD_SETTINGS);
  assert.equal(loadPadSettings({ getItem: () => '{not json' }).width, 3);
});

test('storage that throws is harmless', () => {
  const broken = { getItem() { throw new Error('x'); }, setItem() { throw new Error('x'); } };
  assert.deepEqual(loadPadSettings(broken), DEFAULT_PAD_SETTINGS);
  savePadSettings(DEFAULT_PAD_SETTINGS, broken);
});

test('a pen used on this device is remembered, and can be forgotten', () => {
  const s = memory();
  assert.equal(loadPenDevice(s), false);
  savePenDevice(true, s);
  assert.equal(loadPenDevice(s), true);
  savePenDevice(false, s);
  assert.equal(loadPenDevice(s), false);
  assert.equal(loadPenDevice({ getItem() { throw new Error('x'); } }), false);
});

console.log(`\npad settings: ${passed} passed`);
