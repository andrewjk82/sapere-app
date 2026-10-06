// Stickers placed on a notepad page (WorkingOutCanvas). A sticker is
// { id, type: 'grid', x, y, s }: x / y = top-left as a fraction of the canvas width / height,
// s = side as a fraction of the shorter canvas side, so it survives a different pane size.

export const GRID_CELLS = 20;
export const STICKER_MIN_PX = 80;
export const STICKER_MAX_PER_PAGE = 6;
const MAX_SIDE_RATIO = 1.5;   // never bigger than 1.5x the shorter canvas side
const KEEP_VISIBLE = 0.3;     // at least this part of a sticker stays on the page when dragged

const clamp = (n, lo, hi) => Math.max(lo, Math.min(hi, n));
const round = (n) => Math.round(n * 10000) / 10000;

export const stickerBox = (sticker, w, h) => ({
  left: sticker.x * w,
  top: sticker.y * h,
  side: sticker.s * Math.min(w, h),
});

const fromBox = (sticker, left, top, side, w, h) => ({
  ...sticker,
  x: round(left / w),
  y: round(top / h),
  s: round(side / Math.min(w, h)),
});

// A new grid, centred, about half the page.
export const newGridSticker = (id, w, h) => {
  const side = Math.min(w, h) * 0.55;
  return fromBox({ id, type: 'grid' }, (w - side) / 2, (h - side) / 2, side, w, h);
};

export const moveSticker = (sticker, dx, dy, w, h) => {
  const { left, top, side } = stickerBox(sticker, w, h);
  const keep = side * KEEP_VISIBLE;
  return fromBox(sticker,
    clamp(left + dx, keep - side, w - keep),
    clamp(top + dy, keep - side, h - keep),
    side, w, h);
};

// Drag the bottom-right handle to (px, py), canvas coordinates: the top-left corner stays put.
export const resizeSticker = (sticker, px, py, w, h) => {
  const { left, top } = stickerBox(sticker, w, h);
  const side = clamp(Math.max(px - left, py - top), STICKER_MIN_PX, Math.min(w, h) * MAX_SIDE_RATIO);
  return fromBox(sticker, left, top, side, w, h);
};

const isSticker = (s) => s && typeof s.id === 'string' && s.type === 'grid'
  && [s.x, s.y, s.s].every(Number.isFinite) && s.s > 0;

// Stored stickers → one clean array per page (length = pageCount).
export const cleanStickerPages = (stickers, pageCount) => Array.from({ length: Math.max(1, pageCount) }, (_, i) => (
  Array.isArray(stickers?.[i]) ? stickers[i].filter(isSticker).slice(0, STICKER_MAX_PER_PAGE) : []
));

// Geometry of the grid for a given side: the same numbers draw the on-screen SVG and the exported image.
export const gridGeometry = (side) => {
  const step = side / GRID_CELLS;
  const lines = Array.from({ length: GRID_CELLS + 1 }, (_, i) => i * step);
  return {
    step,
    lines,
    centre: side / 2,
    minorWidth: clamp(side * 0.0018, 0.6, 1.6),
    axisWidth: clamp(side * 0.0036, 1.4, 3.2),
  };
};

export const GRID_COLORS = { fill: 'rgba(255,255,255,0.92)', minor: '#dbe2ea', axis: '#94a3b8' };

// Canvas version, used when a page is exported as an image. Units: whatever `side` is in.
export const drawGridSticker = (ctx, left, top, side) => {
  const g = gridGeometry(side);
  ctx.save();
  ctx.fillStyle = GRID_COLORS.fill;
  ctx.fillRect(left, top, side, side);
  ctx.strokeStyle = GRID_COLORS.minor;
  ctx.lineWidth = g.minorWidth;
  ctx.beginPath();
  g.lines.forEach((p) => {
    ctx.moveTo(left + p, top); ctx.lineTo(left + p, top + side);
    ctx.moveTo(left, top + p); ctx.lineTo(left + side, top + p);
  });
  ctx.stroke();
  ctx.strokeStyle = GRID_COLORS.axis;
  ctx.lineWidth = g.axisWidth;
  ctx.beginPath();
  ctx.moveTo(left + g.centre, top); ctx.lineTo(left + g.centre, top + side);
  ctx.moveTo(left, top + g.centre); ctx.lineTo(left + side, top + g.centre);
  ctx.stroke();
  ctx.restore();
};
