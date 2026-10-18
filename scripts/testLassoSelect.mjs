/** Notepad lasso geometry. Run via npm run test:homework. */
import assert from 'node:assert';
import {
  pointInPolygon, polylineLength, selectInLasso, boxOf, pointInBox, translateStroke, clampShift,
  bakeErasers, hasErasers, setLassoClipboard, pasteStrokes, getLassoClipboard, clearLassoClipboard,
  scaleStroke, rotateStroke, scaleFromDrag, maxScaleInPage, snapAngle, recolorStrokes, MIN_SCALE, MAX_SCALE,
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

test('scaling about an anchor keeps the anchor fixed and scales width', () => {
  const s = line('a', 100, 100, 200, 100, 4);
  const big = scaleStroke(s, 100, 100, 2);
  assert.deepEqual(big.points[0], [100, 100, 6]);
  assert.deepEqual(big.points.at(-1), [300, 100, 6]);
  const tiny = scaleStroke(s, 100, 100, 0.1);
  assert.ok(tiny.points.every((p) => p[2] >= 0.4));         // never vanishes
  assert.deepEqual(s.points[0], [100, 100, 3]);             // original untouched
});

test('rotating 90° about the centre', () => {
  const s = line('a', 100, 200, 200, 200, 2);               // horizontal, centre (150, 200)
  const r = rotateStroke(s, 150, 200, Math.PI / 2);
  assert.ok(Math.abs(r.points[0][0] - 150) < 1e-9 && Math.abs(r.points[0][1] - 150) < 1e-9);
  assert.ok(Math.abs(r.points.at(-1)[0] - 150) < 1e-9 && Math.abs(r.points.at(-1)[1] - 250) < 1e-9);
  assert.equal(r.points[0][2], 3);                          // width unchanged
});

test('corner drag: 1 at the start, grows away from the anchor, shrinks toward it, stays in limits', () => {
  const anchor = { x: 100, y: 100 }; const start = { x: 200, y: 200 };
  assert.equal(scaleFromDrag(anchor, start, start), 1);
  assert.equal(scaleFromDrag(anchor, start, { x: 300, y: 300 }), 2);
  assert.equal(scaleFromDrag(anchor, start, { x: 150, y: 150 }), 0.5);
  assert.equal(scaleFromDrag(anchor, start, { x: 100, y: 100 }), MIN_SCALE);
  assert.equal(scaleFromDrag(anchor, start, { x: 9000, y: 9000 }), MAX_SCALE);
  assert.equal(scaleFromDrag(anchor, { x: 100, y: 100 }, { x: 5, y: 5 }), 1);     // degenerate start
});

test('the biggest scale that keeps the box on the page', () => {
  const box = { minX: 100, minY: 100, maxX: 200, maxY: 200 };
  const k = maxScaleInPage(box, 100, 100, 794, 1123);       // grows right / down from (100, 100)
  assert.ok(Math.abs(100 + 100 * k - (794 - 4)) < 1e-6);
  assert.equal(maxScaleInPage({ minX: 0, minY: 0, maxX: 10, maxY: 10 }, 0, 0, 794, 1123), MAX_SCALE);
});

test('angle snaps to 15° only when close', () => {
  const deg = (d) => (d * Math.PI) / 180;
  assert.equal(snapAngle(deg(14)), deg(15));
  assert.equal(snapAngle(deg(-31)), deg(-30));
  assert.equal(snapAngle(deg(20)), deg(20));
});

test('recolour: ink colours touch pen strokes only, highlighter colours touch highlighter strokes only', () => {
  const pen = { ...line('p', 0, 0, 10, 10), color: '#111' };
  const hl = { ...line('h', 0, 0, 10, 10), color: 'rgba(1,1,1,.4)', penStyle: 'highlighter' };
  const ink = recolorStrokes([pen, hl], '#ef4444', false);
  assert.equal(ink[0].color, '#ef4444'); assert.equal(ink[1], hl);
  const mark = recolorStrokes([pen, hl], 'rgba(9,9,9,.5)', true);
  assert.equal(mark[0], pen); assert.equal(mark[1].color, 'rgba(9,9,9,.5)');
});

test('loop length', () => {
  assert.equal(polylineLength([[0, 0], [3, 4]]), 5);
});

console.log(`\nlasso: ${passed} passed`);
