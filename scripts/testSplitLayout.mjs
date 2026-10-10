// Worksheet + notepad split: side by side, stacked (tablet upright) or tabs (phone).
import assert from 'node:assert';
import { splitLayoutFor, splitFraction } from '../src/utils/useSplitLayout.js';

let passed = 0;
const test = (name, fn) => { fn(); passed += 1; console.log(`  ✓ ${name}`); };

test('iPad upright stacks, iPad sideways splits across', () => {
  assert.equal(splitLayoutFor(820, 1180, 900), 'stack');
  assert.equal(splitLayoutFor(1180, 820, 900), 'side');
  assert.equal(splitLayoutFor(744, 1133, 700), 'stack'); // iPad mini upright
});

test('phones keep tabs upright, split sideways only when wide enough', () => {
  assert.equal(splitLayoutFor(390, 844, 700), 'tabs');
  assert.equal(splitLayoutFor(844, 390, 700), 'side');
  assert.equal(splitLayoutFor(844, 390, 900), 'tabs');
});

test('divider share follows the pointer, clamped', () => {
  const rect = { left: 0, top: 100, width: 800, height: 1000 };
  assert.equal(splitFraction(rect, { x: 400, y: 0 }, 'side'), 0.5);
  assert.equal(splitFraction(rect, { x: 0, y: 700 }, 'stack'), 0.6);
  assert.equal(splitFraction(rect, { x: 0, y: 100 }, 'stack'), 0.25);
  assert.equal(splitFraction(rect, { x: 800, y: 0 }, 'side'), 0.75);
});

console.log(`\nsplit layout: ${passed} passed`);
