// The notepad is a fixed A4 page (PAGE_W × PAGE_H "page units"). Ink is stored in page units, so
// it never depends on the size of the pane the pad sits in. The pane is a viewport onto the page:
// `fit` shows the whole page, `zoom` (≥ 1) magnifies it, `pos` is where the page's top-left lands
// inside the viewport (screen px).

export const PAGE_W = 794;
export const PAGE_H = 1123;           // 794 × 1123 ≈ A4 at 96 dpi (ratio 1.414)
export const PAGE_MARGIN = 8;         // px of desk around the page at fit
export const MIN_ZOOM = 1;
export const MAX_ZOOM = 4;
export const SNAP_ZOOM = 1.04;        // closer to 1 than this → exactly 1 (fit)
export const EXPORT_SCALE = 1.6;      // submitted page image = 1270 × 1797
export const MAX_BACKING_UNIT_PX = 3.4;   // canvas px per page unit never above this (iOS canvas memory)

export const clamp = (n, lo, hi) => Math.max(lo, Math.min(hi, n));

// Page scale (screen px per page unit) at zoom 1: the whole page visible.
export const fitScale = (vw, vh) => {
  if (!(vw > 0) || !(vh > 0)) return 0;
  return Math.min((vw - 2 * PAGE_MARGIN) / PAGE_W, (vh - 2 * PAGE_MARGIN) / PAGE_H);
};

export const clampZoom = (z) => {
  if (!Number.isFinite(z)) return 1;
  const c = clamp(z, MIN_ZOOM, MAX_ZOOM);
  return c < SNAP_ZOOM ? 1 : c;
};

// Keep the page covering the viewport (or centred when it is smaller than the viewport).
const clampAxis = (pos, size, view) => (size <= view - 2 * PAGE_MARGIN + 0.5
  ? (view - size) / 2
  : clamp(pos, view - size - PAGE_MARGIN, PAGE_MARGIN));
export const clampPos = (pos, scale, vw, vh) => ({
  x: clampAxis(pos.x, PAGE_W * scale, vw),
  y: clampAxis(pos.y, PAGE_H * scale, vh),
});

// Zoom to `nextZoom` keeping the page point under screen point `anchor` (viewport coords) fixed.
export const zoomAt = ({ zoom, pos }, nextZoom, anchor, fit, vw, vh) => {
  const z = clampZoom(nextZoom);
  if (!(fit > 0)) return { zoom: z, pos };
  const px = (anchor.x - pos.x) / (fit * zoom);   // page units under the anchor
  const py = (anchor.y - pos.y) / (fit * zoom);
  const scale = fit * z;
  return { zoom: z, pos: clampPos({ x: anchor.x - px * scale, y: anchor.y - py * scale }, scale, vw, vh) };
};

// Screen point → page units, for a page whose top-left is at (left, top) on screen at `scale`.
export const toPageUnits = (clientX, clientY, left, top, scale) => ({
  x: (clientX - left) / scale,
  y: (clientY - top) / scale,
});

// Canvas backing resolution (px per page unit): sharp for the screen, but bounded for memory.
export const backingScale = (cssScale, dpr = 1) => Math.max(0.5, Math.min(cssScale * dpr, MAX_BACKING_UNIT_PX));

// Two-finger gesture classification. Fit zoom: moving apart/together = pinch, a vertical slide = page change.
// Zoomed in: always pinch / pan. `ratio` = current finger distance / starting distance.
export const PINCH_RATIO = 0.08;
export const SWIPE_PX = 50;
// Finger taps (GoodNotes-style): two fingers = undo, three = redo. A tap is short and nearly still, so it
// never collides with a pinch / pan / page swipe, and anything involving the pencil is never a tap.
export const TAP_MAX_MS = 350;
export const TAP_MAX_MOVE_PX = 12;
export const classifyMultiTap = ({ fingers, durationMs, maxMovePx, stylus = false }) => {
  if (stylus || durationMs > TAP_MAX_MS || maxMovePx > TAP_MAX_MOVE_PX) return null;
  if (fingers === 2) return 'undo';
  if (fingers === 3) return 'redo';
  return null;
};

export const classifyTwoFinger = ({ zoom, ratio, dy }) => {
  if (zoom > SNAP_ZOOM) return 'zoom';
  if (Math.abs(ratio - 1) > PINCH_RATIO) return 'zoom';
  if (Math.abs(dy) >= SWIPE_PX) return 'nav';
  return null;
};
