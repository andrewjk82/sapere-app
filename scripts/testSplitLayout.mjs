// Worksheet + notepad split: side by side, stacked, or tabs (phone); student choice per orientation.
import assert from 'node:assert';
import { readFileSync } from 'node:fs';
import { splitLayoutFor, splitFraction, clampSplit, orientationOf } from '../src/utils/useSplitLayout.js';

let passed = 0;
const test = (name, fn) => { fn(); passed += 1; console.log(`  ✓ ${name}`); };

test('a phone uses tabs in both orientations; a tablet never does', () => {
  assert.equal(splitLayoutFor(390, 844), 'tabs');
  assert.equal(splitLayoutFor(844, 390), 'tabs');
  assert.equal(splitLayoutFor(932, 430), 'tabs');
  assert.equal(splitLayoutFor(533, 853), 'stack');   // small Android tablet
  assert.equal(splitLayoutFor(853, 533), 'side');
  // iPad mini in a narrow Split View window: the window looks like a phone, the screen does not.
  assert.equal(splitLayoutFor(320, 1133, undefined, { w: 744, h: 1133 }), 'stack');
  assert.equal(splitLayoutFor(320, 700, { portrait: 'side' }, { w: 1133, h: 744 }), 'side');
  // A phone stays on tabs whatever the window says.
  assert.equal(splitLayoutFor(844, 390, undefined, { w: 390, h: 844 }), 'tabs');
});

test('defaults: upright stacks, sideways splits across, phones use tabs', () => {
  assert.equal(splitLayoutFor(820, 1180), 'stack');
  assert.equal(splitLayoutFor(1180, 820), 'side');
  assert.equal(splitLayoutFor(744, 1133), 'stack');
  assert.equal(splitLayoutFor(1180, 820), 'side');
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

// On a phone the inactive pane is hidden with visibility, and a child set to 'visible' shows through it
// (2026-11-05: the notepad page floated over the worksheet).
test('nothing inside a pane forces itself visible', () => {
  ['WorkingOutCanvas', 'PdfViewer'].forEach((name) => {
    const source = readFileSync(new URL(`../src/components/${name}.jsx`, import.meta.url), 'utf8');
    assert.ok(!/visibility:[^,}]*'visible'/.test(source), `${name} sets visibility: 'visible'; use 'inherit'`);
  });
});

console.log(`\nsplit layout: ${passed} passed`);
