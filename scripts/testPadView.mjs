// A4 notepad view maths: fit, zoom about a point, pan limits, gesture classification.
import assert from 'node:assert';
import {
  PAGE_W, PAGE_H, fitScale, clampZoom, clampPos, zoomAt, toPageUnits, backingScale,
  classifyTwoFinger, classifyMultiTap, pageCentre, viewForCentre, MAX_ZOOM, MAX_BACKING_UNIT_PX,
} from '../src/utils/padView.js';

let passed = 0;
const test = (name, fn) => { fn(); passed += 1; console.log(`  ✓ ${name}`); };
const near = (a, b, eps = 1e-6) => assert.ok(Math.abs(a - b) <= eps, `${a} vs ${b}`);

test('fit shows the whole page, limited by the tighter side', () => {
  const tall = fitScale(600, 1000); // width-limited
  near(tall, (600 - 16) / PAGE_W);
  const wide = fitScale(1200, 500); // height-limited
  near(wide, (500 - 16) / PAGE_H);
  assert.equal(fitScale(0, 500), 0);
});

test('zoom clamps to 1–4 and snaps to fit near 1', () => {
  assert.equal(clampZoom(0.4), 1);
  assert.equal(clampZoom(1.02), 1);
  assert.equal(clampZoom(2.5), 2.5);
  assert.equal(clampZoom(9), MAX_ZOOM);
  assert.equal(clampZoom(NaN), 1);
});

test('at fit the page is centred; zoomed it cannot leave the viewport', () => {
  const vw = 600, vh = 1000, fit = fitScale(vw, vh);
  const centred = clampPos({ x: 0, y: 0 }, fit, vw, vh);
  near(centred.x, (vw - PAGE_W * fit) / 2);
  const s = fit * 3;
  const p = clampPos({ x: 500, y: 500 }, s, vw, vh);   // dragged far right/down
  assert.equal(p.x, 8); assert.equal(p.y, 8);
  const q = clampPos({ x: -99999, y: -99999 }, s, vw, vh);
  near(q.x, vw - PAGE_W * s - 8); near(q.y, vh - PAGE_H * s - 8);
});

test('zooming about a point keeps that page point under the finger', () => {
  const vw = 700, vh = 900, fit = fitScale(vw, vh);
  const start = { zoom: 1, pos: clampPos({ x: 0, y: 0 }, fit, vw, vh) };
  const anchor = { x: 350, y: 300 };
  const before = toPageUnits(anchor.x, anchor.y, start.pos.x, start.pos.y, fit * start.zoom);
  const next = zoomAt(start, 2.5, anchor, fit, vw, vh);
  const after = toPageUnits(anchor.x, anchor.y, next.pos.x, next.pos.y, fit * next.zoom);
  near(before.x, after.x, 0.01); near(before.y, after.y, 0.01);
  assert.equal(next.zoom, 2.5);
});

test('zooming back to fit recentres the page', () => {
  const vw = 700, vh = 900, fit = fitScale(vw, vh);
  const z = zoomAt({ zoom: 1, pos: clampPos({ x: 0, y: 0 }, fit, vw, vh) }, 3, { x: 100, y: 100 }, fit, vw, vh);
  const back = zoomAt(z, 1, { x: 100, y: 100 }, fit, vw, vh);
  assert.equal(back.zoom, 1);
  near(back.pos.x, (vw - PAGE_W * fit) / 2);
});

test('canvas resolution is bounded', () => {
  assert.equal(backingScale(10, 2), MAX_BACKING_UNIT_PX);
  near(backingScale(0.7, 2), 1.4);
  assert.ok(backingScale(0, 1) >= 0.5);
});

test('screen → page units is independent of the pane size', () => {
  // the same page spot, seen at two different scales
  const a = toPageUnits(100 + 0.5 * 397, 50 + 0.5 * 561, 100, 50, 0.5);
  const b = toPageUnits(10 + 1.0 * 397, 20 + 1.0 * 561, 10, 20, 1.0);
  near(a.x, 397); near(b.x, 397); near(a.y, 561); near(b.y, 561);
});

test('two-finger gestures: pinch vs page swipe', () => {
  assert.equal(classifyTwoFinger({ zoom: 1, ratio: 1, dy: -60 }), 'nav');
  assert.equal(classifyTwoFinger({ zoom: 1, ratio: 1.2, dy: 0 }), 'zoom');
  assert.equal(classifyTwoFinger({ zoom: 1, ratio: 1.03, dy: -10 }), null);
  assert.equal(classifyTwoFinger({ zoom: 2, ratio: 1, dy: -200 }), 'zoom'); // zoomed: pan, never page change
});

test('finger taps: two = undo, three = redo, never a drag / slow press / pencil', () => {
  assert.equal(classifyMultiTap({ fingers: 2, durationMs: 120, maxMovePx: 3 }), 'undo');
  assert.equal(classifyMultiTap({ fingers: 3, durationMs: 200, maxMovePx: 5 }), 'redo');
  assert.equal(classifyMultiTap({ fingers: 1, durationMs: 80, maxMovePx: 0 }), null);
  assert.equal(classifyMultiTap({ fingers: 4, durationMs: 80, maxMovePx: 0 }), null);
  assert.equal(classifyMultiTap({ fingers: 2, durationMs: 120, maxMovePx: 40 }), null);  // pinch / swipe
  assert.equal(classifyMultiTap({ fingers: 2, durationMs: 900, maxMovePx: 2 }), null);   // resting fingers
  assert.equal(classifyMultiTap({ fingers: 2, durationMs: 100, maxMovePx: 2, stylus: true }), null);
});

test('the page point in the middle survives a save → restore, also in a different-sized viewport', () => {
  const size = { w: 900, h: 700 };
  const centre = { x: 420, y: 560 };
  const view = viewForCentre(centre, 2.5, size);
  assert.equal(view.zoom, 2.5);
  const back = pageCentre(view, size);
  near(back.x, centre.x, 1e-6); near(back.y, centre.y, 1e-6);
  // a resized pane keeps the same page point in the middle
  const bigger = { w: 1100, h: 800 };
  const moved = pageCentre(viewForCentre(centre, 2.5, bigger), bigger);
  near(moved.x, centre.x, 1e-6); near(moved.y, centre.y, 1e-6);
});

test('a centre near the page edge is kept on the page; zoom 1 is the fitted page', () => {
  const size = { w: 900, h: 700 };
  const edge = pageCentre(viewForCentre({ x: 5, y: 5 }, 3, size), size);
  assert.ok(edge.x > 5 && edge.y > 5);            // cannot centre on a point the page cannot scroll to
  assert.deepEqual(viewForCentre({ x: 100, y: 100 }, 1, size), { zoom: 1, pos: { x: 0, y: 0 } });
  assert.deepEqual(viewForCentre({ x: 100, y: 100 }, 3, { w: 0, h: 0 }).pos, { x: 0, y: 0 });
});

console.log(`\npad view: ${passed} passed`);
