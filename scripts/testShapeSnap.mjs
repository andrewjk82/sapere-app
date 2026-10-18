/** Draw-and-hold shape recognition. Run via npm run test:homework. */
import assert from 'node:assert';
import { recognizeShape, isHoldToShapeOn, setHoldToShapeOn } from '../src/utils/shapeSnap.js';

let passed = 0;
const test = (name, fn) => { fn(); passed += 1; console.log(`  ✓ ${name}`); };
const jitter = (i, a = 1.2) => Math.sin(i * 12.9898) * a;
const polyline = (corners, perSide = 25) => {
  const out = [];
  for (let c = 0; c < corners.length - 1; c += 1) {
    for (let i = 0; i < perSide; i += 1) {
      const t = i / perSide;
      out.push([corners[c][0] + (corners[c + 1][0] - corners[c][0]) * t + jitter(out.length), corners[c][1] + (corners[c + 1][1] - corners[c][1]) * t + jitter(out.length + 7), 3]);
    }
  }
  const e = corners.at(-1); out.push([e[0], e[1], 3]);
  return out;
};
const ellipse = (cx, cy, rx, ry, n = 90, gap = 0) => Array.from({ length: n + 1 }, (_, i) => {
  const a = (i / n) * Math.PI * 2 * (1 - gap);
  return [cx + Math.cos(a) * rx + jitter(i), cy + Math.sin(a) * ry + jitter(i + 3), 3];
});

test('a wobbly straight stroke becomes a line between its ends', () => {
  const r = recognizeShape(polyline([[100, 100], [400, 130]]));
  assert.equal(r.shape, 'line');
  assert.ok(Math.abs(r.start.x - 100) < 3 && Math.abs(r.end.x - 400) < 3);
});

test('a hand-drawn rectangle (ends not quite meeting) becomes a rectangle', () => {
  const r = recognizeShape(polyline([[100, 100], [400, 104], [398, 300], [103, 296], [104, 108]]));
  assert.equal(r.shape, 'rectangle');
  assert.ok(Math.abs(r.end.x - r.start.x - 300) < 12 && Math.abs(r.end.y - r.start.y - 200) < 12);
});

test('circles and ovals become ellipses', () => {
  assert.equal(recognizeShape(ellipse(300, 300, 100, 100, 90, 0.03)).shape, 'circle');
  assert.equal(recognizeShape(ellipse(300, 300, 160, 70, 90, 0.03)).shape, 'circle');
});

test('curves, letters and dots are left alone', () => {
  const arc = Array.from({ length: 40 }, (_, i) => [100 + i * 8, 200 + Math.sin(i / 6) * 60, 3]);
  assert.equal(recognizeShape(arc), null);
  assert.equal(recognizeShape([[10, 10, 3], [11, 11, 3], [12, 11, 3], [12, 12, 3]]), null);
  const zig = Array.from({ length: 40 }, (_, i) => [100 + (i % 2) * 90, 100 + i * 4, 3]);
  assert.equal(recognizeShape(zig), null);
});

test('a flat closed scribble is not a shape', () => {
  assert.equal(recognizeShape(ellipse(300, 300, 100, 6, 60, 0)), null);
});

test('setting: on unless switched off; safe without storage', () => {
  const store = new Map();
  const storage = { getItem: (k) => store.get(k) ?? null, setItem: (k, v) => store.set(k, v) };
  assert.equal(isHoldToShapeOn(storage), true);
  setHoldToShapeOn(false, storage);
  assert.equal(isHoldToShapeOn(storage), false);
  setHoldToShapeOn(true, storage);
  assert.equal(isHoldToShapeOn(storage), true);
  assert.equal(isHoldToShapeOn({ getItem() { throw new Error('x'); } }), true);
});

console.log(`\nshape snap: ${passed} passed`);
