/**
 * PDF highlight helpers. Run via npm run test:pdf-highlights.
 */
import assert from 'node:assert';
import {
  toPagePoint, appendPoint, pointsToPath, strokeHit, eraseAt, cleanHighlights, addStroke, removeStroke,
  countHighlights, MAX_STROKES_PER_PAGE, HIGHLIGHT_WIDTH,
} from '../src/utils/pdfHighlights.js';

let passed = 0;
const test = (name, fn) => { fn(); passed += 1; console.log(`  ✓ ${name}`); };
const stroke = (id, pts) => ({ id, color: '#facc15', w: HIGHLIGHT_WIDTH, pts });

test('points are in page-width units on both axes, independent of zoom', () => {
  const rect = { left: 100, top: 50, width: 500, height: 700 };
  assert.deepEqual(toPagePoint(350, 400, rect), [0.5, 0.7]);
  const zoomed = { left: 0, top: 0, width: 1000, height: 1400 };
  assert.deepEqual(toPagePoint(500, 700, zoomed), [0.5, 0.7]);
  assert.equal(toPagePoint(1, 1, { left: 0, top: 0, width: 0 }), null);
});

test('close points are dropped while drawing', () => {
  let pts = [[0.1, 0.1]];
  pts = appendPoint(pts, [0.1005, 0.1]);
  assert.equal(pts.length, 1);
  pts = appendPoint(pts, [0.2, 0.1]);
  assert.equal(pts.length, 2);
  assert.equal(appendPoint(pts, null), pts);
});

test('path for a line and for a single tap', () => {
  assert.equal(pointsToPath([[0.1, 0.2], [0.3, 0.2]]), 'M0.1 0.2L0.3 0.2');
  assert.match(pointsToPath([[0.1, 0.2]]), /^M0\.1 0\.2L0\.1001 0\.2$/);
  assert.equal(pointsToPath([]), '');
});

test('hit test uses the stroke thickness and the eraser radius', () => {
  const s = stroke('a', [[0.1, 0.1], [0.5, 0.1]]);
  assert.ok(strokeHit(s, 0.3, 0.1));
  assert.ok(strokeHit(s, 0.3, 0.12));      // within radius + half thickness
  assert.ok(!strokeHit(s, 0.3, 0.2));
  assert.ok(!strokeHit(s, 0.7, 0.1));
  assert.ok(strokeHit(stroke('dot', [[0.4, 0.4]]), 0.41, 0.4));
});

test('eraser removes only the touched strokes and keeps the same array when nothing is hit', () => {
  const list = [stroke('a', [[0.1, 0.1], [0.5, 0.1]]), stroke('b', [[0.1, 0.5], [0.5, 0.5]])];
  assert.deepEqual(eraseAt(list, 0.3, 0.1).map((s) => s.id), ['b']);
  assert.equal(eraseAt(list, 0.9, 0.9), list);
});

test('stored data is cleaned: bad strokes and empty pages dropped', () => {
  const cleaned = cleanHighlights({
    1: [stroke('ok', [[0.1, 0.1]]), { id: 'x' }, { id: 'y', color: '#fff', pts: [['a', 1]] }],
    2: [],
    3: 'nope',
  });
  assert.deepEqual(Object.keys(cleaned), ['1']);
  assert.equal(cleaned[1].length, 1);
  assert.deepEqual(cleanHighlights(null), {});
});

test('add / remove strokes per page; a page with none disappears; capped per page', () => {
  let pages = addStroke({}, 2, stroke('a', [[0, 0]]));
  pages = addStroke(pages, 2, stroke('b', [[0, 0]]));
  assert.equal(countHighlights(pages), 2);
  pages = removeStroke(pages, 2, 'a');
  assert.deepEqual(pages[2].map((s) => s.id), ['b']);
  pages = removeStroke(pages, 2, 'b');
  assert.deepEqual(pages, {});
  let many = {};
  for (let i = 0; i < MAX_STROKES_PER_PAGE + 5; i += 1) many = addStroke(many, 1, stroke(`s${i}`, [[0, 0]]));
  assert.equal(many[1].length, MAX_STROKES_PER_PAGE);
  assert.equal(many[1][many[1].length - 1].id, `s${MAX_STROKES_PER_PAGE + 4}`);
});

console.log(`\npdf highlights: ${passed} passed`);
