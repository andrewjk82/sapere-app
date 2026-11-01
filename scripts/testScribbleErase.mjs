// Scribble-to-erase geometry: what counts as a scribble, and which ink it removes.
import assert from 'node:assert';
import {
  isScribbleShape, scribbleErase, scribbleArea, inArea, cutPoints, countReversals, isScribbleEraseOn, setScribbleEraseOn, AREA_PAD,
} from '../src/utils/scribbleErase.js';

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

const lengthOf = (pts) => pts.reduce((sum, p, i) => (i ? sum + Math.hypot(p[0] - pts[i - 1][0], p[1] - pts[i - 1][1]) : 0), 0);

test('scratching over a word erases it, and only it', () => {
  const word = ink(line(100, 120, 260, 120));
  const neighbour = ink(line(100, 400, 260, 400));
  assert.deepEqual(scribbleErase(zigzag(95, 100, 175, 40, 8), [word, neighbour]), [neighbour]);
});

test('a stroke running out of the scribble keeps its outside parts, cut at the scribble', () => {
  const longLine = ink(line(0, 120, 780, 120, 60));      // runs far outside the scribble (x 95–270)
  const out = scribbleErase(zigzag(95, 100, 175, 40, 8), [longLine]);
  assert.equal(out.length, 2);
  const [left, right] = out;
  assert.ok(left.points.every((p) => p[0] <= 95 + AREA_PAD));
  assert.ok(right.points.every((p) => p[0] >= 270 - AREA_PAD - 2));
  assert.ok(Math.abs(left.points[left.points.length - 1][0] - 95) < 5, 'cut right at the scribble edge');
  assert.ok(Math.abs(lengthOf(left.points) + lengthOf(right.points) - (780 - 175)) < 12);
  assert.equal(left.color, '#000');
  assert.equal(left.points[0][2], 3, 'pen width kept');
});

test('letters right next to the scribble are not touched (it used to reach 24 units past it)', () => {
  const scratched = ink(line(110, 120, 250, 120));
  const before = ink(line(70, 105, 88, 135));             // 7 units left of the scribble
  const below = ink(line(110, 152, 250, 152));             // the next line, 12 units below
  const out = scribbleErase(zigzag(95, 100, 175, 40, 8), [before, scratched, below]);
  assert.deepEqual(out, [before, below]);
  assert.equal(out[0], before);
  assert.equal(out[1], below);
});

test('a long straight segment crossing the scribble is cut even with no point inside it', () => {
  const ruler = ink([[0, 120, 3], [780, 120, 3]]);        // a 2-point line (e.g. snapped shape)
  const out = scribbleErase(zigzag(95, 100, 175, 40, 8), [ruler]);
  assert.equal(out.length, 2);
});

test('scratching out one small digit with a few quick back-and-forths works', () => {
  const digit = ink(line(300, 300, 304, 318, 8));          // a "1", 18 units tall
  const small = zigzag(292, 296, 20, 26, 5, 4);            // 5 sweeps, few points (fast pen)
  assert.equal(isScribbleShape(small), true);
  assert.deepEqual(scribbleErase(small, [digit]), []);
});

test('a quick small scribble with rounded turns and few points is still a scribble', () => {
  // As recorded by the notepad on a single digit: 6 sweeps 19 units wide, ~4 points per sweep.
  const pts = [];
  for (let s = 0; s <= 5; s += 1) {
    for (let i = 0; i < 4; i += 1) {
      const e = (1 - Math.cos(Math.PI * i / 4)) / 2;
      pts.push([140 + (s % 2 === 0 ? e : 1 - e) * 19.5, 624 + (s + i / 4) / 6 * 25, 3]);
    }
  }
  assert.ok(countReversals(pts) >= 4);
  assert.equal(isScribbleShape(pts), true);
});

test('round-and-round (loop) scribbling works too', () => {
  const loops = Array.from({ length: 160 }, (_, i) => {
    const t = i / 160 * 10 * Math.PI;
    return [180 + t * 2 + 14 * Math.cos(t), 120 + 14 * Math.sin(t), 3];
  });
  assert.deepEqual(scribbleErase(loops, [ink(line(170, 120, 230, 120))]), []);
});

test('a zigzag over empty paper is just ink (shading, hatching)', () => {
  assert.equal(scribbleErase(zigzag(100, 600, 160, 40, 8), [ink(line(100, 120, 260, 120))]), null);
});

test('barely grazing ink keeps the scribble as ink', () => {
  const tip = ink(line(100, 99, 100, 60));                 // its end just touches the scribble's edge
  assert.equal(scribbleErase(zigzag(95, 100, 175, 40, 8), [tip]), null);
});

test('eraser strokes and empty strokes are ignored', () => {
  const eraser = { ...ink(line(100, 120, 260, 120)), isEraser: true };
  assert.equal(scribbleErase(zigzag(95, 100, 175, 40, 8), [eraser, { points: [] }, null]), null);
});

test('a tall narrow scribble through a column works too', () => {
  const digits = ink(line(200, 100, 200, 260));
  const vertical = zigzag(0, 0, 160, 40, 8).map(([x, y, w]) => [y + 180, x + 95, w]);   // swap axes → sweeps run vertically
  assert.deepEqual(scribbleErase(vertical, [digits]), []);
});

test('the scribbled area is the scribble outline', () => {
  const area = scribbleArea(zigzag(95, 100, 175, 40, 8));
  assert.ok(inArea(area, [180, 120]));
  assert.ok(!inArea(area, [180, 150]));
  assert.ok(!inArea(area, [60, 120]));
  assert.equal(scribbleArea(line(0, 0, 300, 0)), null);
  assert.equal(cutPoints([[500, 500, 3], [510, 500, 3]], area), null);
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
