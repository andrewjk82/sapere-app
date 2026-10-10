// Scribble-to-erase geometry: what counts as a scribble, and which ink it removes.
import assert from 'node:assert';
import { isScribbleShape, scribbleTargets, countReversals, isScribbleEraseOn, setScribbleEraseOn } from '../src/utils/scribbleErase.js';

let passed = 0;
const test = (name, fn) => { fn(); passed += 1; console.log(`  ✓ ${name}`); };

// A zigzag across a box, with a little pen wobble.
const zigzag = (x0, y0, w, h, sweeps, perSweep = 14) => {
  const pts = [];
  for (let s = 0; s <= sweeps; s += 1) {
    const toRight = s % 2 === 0;
    for (let i = 0; i <= perSweep; i += 1) {
      const t = i / perSweep;
      const x = x0 + (toRight ? t : 1 - t) * w + Math.sin(i * 1.7 + s) * 1.2;
      const y = y0 + (s + t) / (sweeps + 1) * h;
      pts.push([x, y, 3]);
    }
  }
  return pts;
};
const line = (x0, y0, x1, y1, n = 20) => Array.from({ length: n + 1 }, (_, i) => [x0 + (x1 - x0) * i / n, y0 + (y1 - y0) * i / n, 3]);
const ink = (points) => ({ points, color: '#000', width: 3, isEraser: false, completed: true });
const circle = (cx, cy, r, n = 40) => Array.from({ length: n + 1 }, (_, i) => [cx + r * Math.cos(i / n * 2 * Math.PI), cy + r * Math.sin(i / n * 2 * Math.PI), 3]);

test('a dense zigzag is a scribble', () => {
  assert.equal(isScribbleShape(zigzag(100, 100, 160, 40, 8)), true);
  assert.ok(countReversals(zigzag(100, 100, 160, 40, 8)) >= 6);
});

test('ordinary handwriting shapes are not', () => {
  assert.equal(isScribbleShape(line(0, 0, 300, 0)), false);                       // a line
  assert.equal(isScribbleShape(circle(100, 100, 40)), false);                       // a circle
  const m = [[0, 0, 3], [10, 40, 3], [20, 0, 3], [30, 40, 3], [40, 0, 3], [50, 40, 3]];   // "m"/"w": a few turns only
  assert.equal(isScribbleShape(m), false);
  assert.equal(isScribbleShape(zigzag(100, 100, 160, 40, 2)), false);               // 2-3 sweeps
  assert.equal(isScribbleShape(zigzag(100, 100, 12, 8, 8, 3)), false);              // tiny wiggle
});

test('scratching over a word erases it, and only it', () => {
  const word = ink(line(100, 120, 260, 120));
  const neighbour = ink(line(100, 400, 260, 400));
  const strokes = [word, neighbour];
  assert.deepEqual(scribbleTargets(zigzag(95, 100, 175, 40, 8), strokes), [0]);
});

test('a stroke only partly under the scribble stays', () => {
  const longLine = ink(line(0, 120, 780, 120, 60));      // runs far outside the scribble
  assert.deepEqual(scribbleTargets(zigzag(95, 100, 175, 40, 8), [longLine]), []);
});

test('a zigzag over empty paper is just ink (shading, hatching)', () => {
  assert.deepEqual(scribbleTargets(zigzag(100, 600, 160, 40, 8), [ink(line(100, 120, 260, 120))]), []);
});

test('eraser strokes and empty strokes are ignored', () => {
  const eraser = { ...ink(line(100, 120, 260, 120)), isEraser: true };
  assert.deepEqual(scribbleTargets(zigzag(95, 100, 175, 40, 8), [eraser, { points: [] }, null]), []);
});

test('a tall narrow scribble through a column works too', () => {
  const digits = ink(line(200, 100, 200, 260));
  const vertical = zigzag(0, 0, 160, 40, 8).map(([x, y, w]) => [y + 180, x + 95, w]);   // swap axes → sweeps run vertically
  assert.deepEqual(scribbleTargets(vertical, [digits]), [0]);
});

test('setting: on unless switched off; safe without storage', () => {
  const mem = new Map();
  const store = { getItem: (k) => (mem.has(k) ? mem.get(k) : null), setItem: (k, v) => mem.set(k, v) };
  assert.equal(isScribbleEraseOn(store), true);
  setScribbleEraseOn(false, store);
  assert.equal(isScribbleEraseOn(store), false);
  setScribbleEraseOn(true, store);
  assert.equal(isScribbleEraseOn(store), true);
  const broken = { getItem: () => { throw new Error('x'); }, setItem: () => { throw new Error('x'); } };
  assert.equal(isScribbleEraseOn(broken), true);
  assert.doesNotThrow(() => setScribbleEraseOn(false, broken));
});

console.log(`\nscribble erase: ${passed} passed`);
