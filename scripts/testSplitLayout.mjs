// Worksheet + notepad split: side by side, stacked, or tabs (phone); student choice per orientation.
import assert from 'node:assert';
import { splitLayoutFor, splitFraction, clampSplit, orientationOf } from '../src/utils/useSplitLayout.js';

let passed = 0;
const test = (name, fn) => { fn(); passed += 1; console.log(`  ✓ ${name}`); };

test('defaults: upright stacks, sideways splits across, phones use tabs', () => {
  assert.equal(splitLayoutFor(820, 1180), 'stack');
  assert.equal(splitLayoutFor(1180, 820), 'side');
  assert.equal(splitLayoutFor(744, 1133), 'stack');
  assert.equal(splitLayoutFor(390, 844), 'tabs');
  assert.equal(splitLayoutFor(844, 390), 'side');
});

test('the student\'s pick applies to its own orientation only', () => {
  const choice = { portrait: 'side', landscape: 'side' };
  assert.equal(splitLayoutFor(820, 1180, choice), 'side');
  assert.equal(splitLayoutFor(1180, 820, { portrait: 'side', landscape: 'stack' }), 'stack');
  assert.equal(splitLayoutFor(820, 1180, { landscape: 'stack' }), 'stack'); // portrait missing → default
  assert.equal(splitLayoutFor(390, 844, choice), 'tabs');                 // a phone stays on tabs
  assert.equal(splitLayoutFor(820, 1180, { portrait: 'junk' }), 'stack');
  assert.equal(orientationOf(820, 1180), 'portrait');
});

test('divider share follows the pointer, clamped to 20–80%', () => {
  const rect = { left: 0, top: 100, width: 800, height: 1000 };
  assert.equal(splitFraction(rect, { x: 400, y: 0 }, 'side'), 0.5);
  assert.equal(splitFraction(rect, { x: 0, y: 700 }, 'stack'), 0.6);
  assert.equal(splitFraction(rect, { x: 0, y: 100 }, 'stack'), 0.2);
  assert.equal(splitFraction(rect, { x: 800, y: 0 }, 'side'), 0.8);
  assert.equal(clampSplit(undefined), 0.5);
});

console.log(`\nsplit layout: ${passed} passed`);
