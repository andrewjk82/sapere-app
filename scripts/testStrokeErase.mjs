/**
 * Notepad whole-stroke eraser helpers. Run via npm run test:stroke-erase.
 */
import assert from 'node:assert';
import { pointNearStroke, samplesAlong, eraseStrokesAlong } from '../src/utils/strokeErase.js';

let passed = 0;
const test = (name, fn) => { fn(); passed += 1; console.log(`  ✓ ${name}`); };
const line = (x1, y1, x2, y2, extra = {}) => ({ points: [[x1, y1, 3], [x2, y2, 3]], ...extra });

test('hit test follows the segments, not just the recorded points', () => {
  const s = line(0, 0, 200, 0);               // two far-apart points
  assert.ok(pointNearStroke(s.points, 100, 8)); // between them
  assert.ok(!pointNearStroke(s.points, 100, 30));
  assert.ok(pointNearStroke([[10, 10, 3]], 15, 10));
  assert.ok(!pointNearStroke([], 0, 0));
});

test('samples cover a long swipe with no gap larger than the step', () => {
  const pts = samplesAlong({ x: 0, y: 0 }, { x: 100, y: 0 }, 6);
  for (let i = 1; i < pts.length; i += 1) assert.ok(pts[i].x - pts[i - 1].x <= 6.01);
  assert.equal(pts[0].x, 0);
  assert.equal(pts[pts.length - 1].x, 100);
  assert.equal(samplesAlong({ x: 5, y: 5 }, { x: 5, y: 5 }).length, 2);
});

test('one swipe removes every stroke it crosses and leaves the others', () => {
  const a = line(50, 0, 50, 200);
  const b = line(120, 0, 120, 200);
  const c = line(190, 0, 190, 200);
  const far = line(50, 300, 190, 300);
  const out = eraseStrokesAlong([a, b, c, far], { x: 0, y: 100 }, { x: 140, y: 100 });
  assert.deepEqual(out, [c, far]);
});

test('nothing hit keeps the very same array; eraser strokes and malformed strokes are kept', () => {
  const list = [line(0, 0, 10, 10)];
  assert.equal(eraseStrokesAlong(list, { x: 500, y: 500 }, { x: 600, y: 500 }), list);
  const keep = [line(0, 0, 100, 0, { isEraser: true }), { color: 'x' }];
  assert.deepEqual(eraseStrokesAlong(keep, { x: 50, y: 0 }, { x: 60, y: 0 }), keep);
});

test('a single tap still erases the stroke under it', () => {
  const s = line(0, 0, 100, 0);
  assert.deepEqual(eraseStrokesAlong([s], { x: 50, y: 4 }, { x: 50, y: 4 }), []);
});

console.log(`\nstroke erase: ${passed} passed`);
