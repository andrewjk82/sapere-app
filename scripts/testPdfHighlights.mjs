/**
 * PDF highlight helpers. Run via npm run test:pdf-highlights.
 */
import assert from 'node:assert';
import {
  toPagePoint, appendPoint, pointsToPath, strokeHit, eraseAt, cleanHighlights, addStroke, removeStroke,
  countHighlights, MAX_STROKES_PER_PAGE, HIGHLIGHT_WIDTH, PEN_WIDTH, penScribbleTargets, removeStrokes,
  emptyHistory, recordEdit, stepHistory,
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

const pen = (id, pts) => ({ id, color: '#1e293b', w: PEN_WIDTH, kind: 'pen', pts });
// A dense zigzag over the band y 0.10–0.14, x 0.10–0.30 (page-width units).
const zigzag = () => {
  const pts = [];
  for (let i = 0; i <= 16; i += 1) pts.push([0.1 + (i % 2) * 0.2, 0.1 + i * 0.0025]);
  return pts;
};
const word = (id, y) => pen(id, Array.from({ length: 20 }, (_, i) => [0.11 + i * 0.009, y + (i % 2) * 0.004]));

test('pen scribble scratches out the pen writing under it, never highlights or writing elsewhere', () => {
  const strokes = [word('w1', 0.115), stroke('hl', [[0.1, 0.12], [0.3, 0.12]]), word('far', 0.6)];
  assert.deepEqual(penScribbleTargets(zigzag(), strokes), ['w1']);
});

test('ordinary pen writing is not a scribble', () => {
  assert.deepEqual(penScribbleTargets(word('new', 0.115).pts, [word('w1', 0.115)]), []);
});

test('removeStrokes drops the given ids and empty pages; unchanged when nothing matches', () => {
  const pages = { 1: [pen('a', [[0.1, 0.1]]), pen('b', [[0.2, 0.2]])], 2: [pen('c', [[0.1, 0.1]])] };
  assert.deepEqual(removeStrokes(pages, 1, ['a'])[1].map((s) => s.id), ['b']);
  assert.equal(removeStrokes(pages, 2, ['c'])[2], undefined);
  assert.equal(removeStrokes(pages, 1, ['zzz']), pages);
});

test('undo / redo walk whole snapshots; a new edit drops the redo branch', () => {
  const p0 = {}, p1 = { 1: [pen('a', [[0.1, 0.1]])] }, p2 = { 1: [pen('a', [[0.1, 0.1]]), pen('b', [[0.2, 0.2]])] };
  let h = recordEdit(recordEdit(emptyHistory(), p0), p1);       // current = p2
  let step = stepHistory(h, p2, 'undo');
  assert.equal(step.pages, p1); h = step.history;
  step = stepHistory(h, p1, 'undo');
  assert.equal(step.pages, p0); h = step.history;
  assert.equal(stepHistory(h, p0, 'undo'), null);
  step = stepHistory(h, p0, 'redo');
  assert.equal(step.pages, p1); h = step.history;
  assert.equal(recordEdit(h, p1).redo.length, 0);
});

console.log(`\npdf highlights: ${passed} passed`);
