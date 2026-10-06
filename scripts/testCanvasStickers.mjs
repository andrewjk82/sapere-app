/**
 * Notepad sticker helpers. Run via npm run test:canvas-stickers.
 */
import assert from 'node:assert';
import {
  newGridSticker, moveSticker, resizeSticker, stickerBox, cleanStickerPages, gridGeometry, drawGridSticker,
  STICKER_MIN_PX, STICKER_MAX_PER_PAGE, GRID_CELLS,
} from '../src/utils/canvasStickers.js';

let passed = 0;
const test = (name, fn) => { fn(); passed += 1; console.log(`  ✓ ${name}`); };
const near = (a, b, eps = 0.6) => assert.ok(Math.abs(a - b) <= eps, `${a} !~ ${b}`);

test('a new grid is centred and about half the shorter side', () => {
  const s = newGridSticker('a', 800, 600);
  const box = stickerBox(s, 800, 600);
  near(box.side, 330);
  near(box.left + box.side / 2, 400);
  near(box.top + box.side / 2, 300);
});

test('moving keeps the sticker on the page (at least 30% visible)', () => {
  const s = newGridSticker('a', 800, 600);
  const far = moveSticker(s, 5000, 5000, 800, 600);
  const box = stickerBox(far, 800, 600);
  near(box.left, 800 - box.side * 0.3);
  near(box.top, 600 - box.side * 0.3);
  const back = moveSticker(s, -5000, -5000, 800, 600);
  near(stickerBox(back, 800, 600).left, box.side * 0.3 - box.side);
  const small = moveSticker(s, 10, -20, 800, 600);
  near(stickerBox(small, 800, 600).left, stickerBox(s, 800, 600).left + 10);
  near(stickerBox(small, 800, 600).top, stickerBox(s, 800, 600).top - 20);
});

test('resizing keeps the top-left corner and clamps the size', () => {
  const s = newGridSticker('a', 800, 600);
  const { left, top } = stickerBox(s, 800, 600);
  const bigger = resizeSticker(s, left + 400, top + 380, 800, 600);
  const b = stickerBox(bigger, 800, 600);
  near(b.left, left); near(b.top, top); near(b.side, 400);
  near(stickerBox(resizeSticker(s, left + 5, top + 5, 800, 600), 800, 600).side, STICKER_MIN_PX);
  near(stickerBox(resizeSticker(s, 99999, 99999, 800, 600), 800, 600).side, 900);
});

test('the same sticker scales with the pane size', () => {
  const s = newGridSticker('a', 800, 600);
  near(stickerBox(s, 400, 300).side, 165);
});

test('stored stickers are cleaned per page and capped', () => {
  const ok = { id: 'a', type: 'grid', x: 0.1, y: 0.1, s: 0.5 };
  const many = Array.from({ length: STICKER_MAX_PER_PAGE + 3 }, (_, i) => ({ ...ok, id: `s${i}` }));
  const cleaned = cleanStickerPages([[ok, { id: 'x' }, { ...ok, type: 'other' }, { ...ok, s: 0 }], many], 3);
  assert.equal(cleaned.length, 3);
  assert.deepEqual(cleaned[0], [ok]);
  assert.equal(cleaned[1].length, STICKER_MAX_PER_PAGE);
  assert.deepEqual(cleaned[2], []);
  assert.deepEqual(cleanStickerPages(undefined, 2), [[], []]);
  assert.deepEqual(cleanStickerPages('nope', 0), [[]]);
});

test('grid geometry: 20 cells, axes through the middle, widths scale with size but stay in range', () => {
  const g = gridGeometry(400);
  assert.equal(g.lines.length, GRID_CELLS + 1);
  near(g.lines[1] - g.lines[0], 20);
  near(g.centre, 200);
  assert.ok(gridGeometry(80).minorWidth >= 0.6 && gridGeometry(3000).minorWidth <= 1.6);
  assert.ok(gridGeometry(3000).axisWidth <= 3.2 && gridGeometry(80).axisWidth >= 1.4);
});

test('export drawing paints the background, the minor lines and both axes', () => {
  const calls = [];
  const ctx = new Proxy({}, { get: (_, name) => (...args) => { calls.push([name, ...args]); }, set: (_, name, value) => { calls.push(['set', name, value]); return true; } });
  drawGridSticker(ctx, 10, 20, 200);
  const moves = calls.filter((c) => c[0] === 'moveTo').length;
  assert.equal(moves, (GRID_CELLS + 1) * 2 + 2);
  assert.equal(calls.filter((c) => c[0] === 'fillRect').length, 1);
  assert.equal(calls.filter((c) => c[0] === 'stroke').length, 2);
});

console.log(`\nstickers: ${passed} passed`);
