/** Notepad lasso geometry. Run via npm run test:homework. */
import assert from 'node:assert';
import {
  pointInPolygon, polylineLength, selectInLasso, boxOf, pointInBox, translateStroke, clampShift,
  bakeErasers, hasErasers, setLassoClipboard, pasteStrokes, getLassoClipboard, clearLassoClipboard,
} from '../src/utils/lassoSelect.js';

let passed = 0;
const test = (name, fn) => { fn(); passed += 1; console.log(`  ✓ ${name}`); };
const line = (id, x0, y0, x1, y1, n = 20) => ({
  id, color: '#000', width: 3, isEraser: false,
  points: Array.from({ length: n + 1 }, (_, i) => [x0 + ((x1 - x0) * i) / n, y0 + ((y1 - y0) * i) / n, 3]),
});
const eraser = (x0, y0, x1, y1, width = 3) => ({ ...line('e', x0, y0, x1, y1, 10), isEraser: true, width });
const square = [[100, 100], [300, 100], [300, 300], [100, 300]];

test('point in polygon', () => {
  assert.ok(pointInPolygon(200, 200, square));
  assert.ok(!pointInPolygon(50, 200, square));
  assert.ok(!pointInPolygon(200, 350, square));
  const concave = [[0, 0], [100, 0], [100, 100], [50, 40], [0, 100]];
  assert.ok(pointInPolygon(20, 20, concave));
  assert.ok(!pointInPolygon(50, 90, concave));      // the notch
});

test('a stroke is selected when most of it is inside; others are not', () => {
  const inside = line('in', 120, 150, 280, 150);
  const mostly = line('mostly', 150, 200, 400, 200);        // 60% inside
  const barely = line('barely', 280, 200, 600, 200);        // ~6% inside
  const outside = line('out', 400, 400, 500, 500);
  const picked = selectInLasso([inside, mostly, barely, outside], square);
  assert.deepEqual(picked.map((s) => s.id), ['in', 'mostly']);
});

test('erasers are never selected; a degenerate loop selects nothing', () => {
  assert.deepEqual(selectInLasso([eraser(120, 150, 280, 150)], square), []);
  assert.deepEqual(selectInLasso([line('a', 120, 150, 280, 150)], [[0, 0], [10, 10]]), []);
});

test('box, hit box, translate and clamp to the page', () => {
  const s = line('a', 100, 100, 200, 140);
  const box = boxOf([s]);
  assert.ok(box.minX <= 100 && box.maxX >= 200 && box.minY <= 100 && box.maxY >= 140);
  assert.ok(pointInBox(150, 120, box));
  assert.ok(!pointInBox(250, 120, box));
  assert.ok(pointInBox(205, 120, box, 10));
  const moved = translateStroke(s, 10, -5);
  assert.deepEqual(moved.points[0], [110, 95, 3]);
  assert.deepEqual(s.points[0], [100, 100, 3]);               // original untouched
  // shoved far left / down: the box keeps at least 4 units on the page (its right edge / top edge)
  const c = clampShift(box, -5000, 5000, 794, 1123);
  assert.equal(box.maxX + c.dx, 4);
  assert.equal(box.minY + c.dy, 1123 - 4);
  // a modest move is left alone
  assert.deepEqual(clampShift(box, 30, -20, 794, 1123), { dx: 30, dy: -20 });
});

test('baking the area eraser cuts the stroke under it and drops the eraser', () => {
  const pen = line('pen', 100, 200, 300, 200, 40);
  const strokes = [pen, eraser(200, 190, 200, 210)];          // a vertical scrub across the middle
  assert.ok(hasErasers(strokes));
  const baked = bakeErasers(strokes);
  assert.ok(!hasErasers(baked));
  assert.equal(baked.length, 2);                              // two pieces, gap in the middle
  const [left, right] = baked;
  assert.ok(Math.max(...left.points.map((p) => p[0])) < 200 - 8);
  assert.ok(Math.min(...right.points.map((p) => p[0])) > 200 + 8);
});

test('an eraser only affects strokes drawn before it', () => {
  const later = line('later', 100, 200, 300, 200, 40);
  const baked = bakeErasers([eraser(200, 190, 200, 210), later]);
  assert.equal(baked.length, 1);
  assert.equal(baked[0], later);                              // untouched, same object
});

test('strokes far from the eraser keep their identity', () => {
  const far = line('far', 100, 500, 300, 500);
  const baked = bakeErasers([far, eraser(200, 190, 200, 210)]);
  assert.equal(baked[0], far);
});

test('copy / paste: fresh copies, nudged on the source page, same place elsewhere', () => {
  clearLassoClipboard();
  const a = line('a', 100, 100, 200, 120);
  setLassoClipboard([a], 'pad1:0');
  const same = pasteStrokes(getLassoClipboard(), 'pad1:0', 794, 1123);
  assert.notEqual(same.items[0], a);
  assert.deepEqual(same.items[0].points[0], [124, 124, 3]);   // +24 on the page it came from
  const again = pasteStrokes(getLassoClipboard(), 'pad1:0', 794, 1123);
  assert.deepEqual(again.items[0].points[0], [148, 148, 3]);  // each paste steps further
  const other = pasteStrokes(getLassoClipboard(), 'pad1:1', 794, 1123);
  assert.deepEqual(other.items[0].points[0], [100, 100, 3]);  // another page: same position
  assert.deepEqual(a.points[0], [100, 100, 3]);
  clearLassoClipboard();
  assert.equal(pasteStrokes(getLassoClipboard(), 'x', 794, 1123), null);
});

test('loop length', () => {
  assert.equal(polylineLength([[0, 0], [3, 4]]), 5);
});

console.log(`\nlasso: ${passed} passed`);
