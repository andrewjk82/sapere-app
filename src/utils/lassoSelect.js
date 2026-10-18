// Lasso selection for the notepad (WorkingOutCanvas). Pure geometry on strokes, in page units:
// a stroke = { points: [[x, y, width], ...], color, width, isEraser, penStyle, shape, ... } (see the canvas).
// Nothing here touches React or the DOM.

// ── Hit testing ──────────────────────────────────────────────────────────────

// Ray casting; `poly` = [[x, y], ...] (implicitly closed).
export const pointInPolygon = (x, y, poly) => {
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i, i += 1) {
    const [xi, yi] = poly[i];
    const [xj, yj] = poly[j];
    if ((yi > y) !== (yj > y) && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) inside = !inside;
  }
  return inside;
};

export const polylineLength = (pts) => {
  let len = 0;
  for (let i = 1; i < pts.length; i += 1) len += Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]);
  return len;
};

// A stroke is picked up when at least this share of its points lie inside the loop.
export const SELECT_FRACTION = 0.5;
// A loop shorter than this (page units) is a tap, not a selection.
export const MIN_LASSO_LENGTH = 40;
export const MIN_LASSO_POINTS = 6;

const isInk = (s) => s && !s.isEraser && Array.isArray(s.points) && s.points.length > 0;

export const selectInLasso = (strokes, polygon) => {
  if (!Array.isArray(polygon) || polygon.length < 3) return [];
  return (strokes || []).filter((s) => {
    if (!isInk(s)) return false;
    let inside = 0;
    for (const p of s.points) if (pointInPolygon(p[0], p[1], polygon)) inside += 1;
    return inside / s.points.length >= SELECT_FRACTION;
  });
};

// ── Boxes ────────────────────────────────────────────────────────────────────

export const strokeBox = (s) => {
  let minX = Infinity; let minY = Infinity; let maxX = -Infinity; let maxY = -Infinity;
  for (const p of s.points) {
    const half = (Number(p[2]) || 0) / 2;
    minX = Math.min(minX, p[0] - half); minY = Math.min(minY, p[1] - half);
    maxX = Math.max(maxX, p[0] + half); maxY = Math.max(maxY, p[1] + half);
  }
  return { minX, minY, maxX, maxY };
};

export const boxOf = (strokes) => {
  const box = { minX: Infinity, minY: Infinity, maxX: -Infinity, maxY: -Infinity };
  for (const s of strokes) {
    if (!isInk(s)) continue;
    const b = strokeBox(s);
    box.minX = Math.min(box.minX, b.minX); box.minY = Math.min(box.minY, b.minY);
    box.maxX = Math.max(box.maxX, b.maxX); box.maxY = Math.max(box.maxY, b.maxY);
  }
  return box.minX === Infinity ? null : box;
};

export const pointInBox = (x, y, box, pad = 0) => (
  Boolean(box) && x >= box.minX - pad && x <= box.maxX + pad && y >= box.minY - pad && y <= box.maxY + pad
);

export const translateBox = (box, dx, dy) => ({ minX: box.minX + dx, minY: box.minY + dy, maxX: box.maxX + dx, maxY: box.maxY + dy });

// Keeps a moved selection on the page: the largest shift that leaves `margin` of the box inside.
export const clampShift = (box, dx, dy, pageW, pageH, margin = 4) => ({
  dx: Math.min(Math.max(dx, margin - box.maxX), pageW - margin - box.minX),
  dy: Math.min(Math.max(dy, margin - box.maxY), pageH - margin - box.minY),
});

// ── Moving / copying ─────────────────────────────────────────────────────────

export const translateStroke = (s, dx, dy) => ({
  ...s,
  points: s.points.map((p) => [p[0] + dx, p[1] + dy, p[2]]),
  ...(s.start ? { start: { x: s.start.x + dx, y: s.start.y + dy } } : {}),
});

export const translateStrokes = (items, dx, dy) => items.map((s) => translateStroke(s, dx, dy));

// A copy that shares nothing with the original (new objects, new point arrays).
export const cloneStrokes = (items, dx = 0, dy = 0) => translateStrokes(items, dx, dy);

// ── Area eraser ──────────────────────────────────────────────────────────────
// The area eraser is stored as a "stroke" that erases everything drawn before it. Moving ink would leave
// the erased gap behind, so before selecting, each eraser is applied to the strokes under it (they are cut
// into the pieces that survive) and removed. Visually the same, up to the eraser's round ends.

const dist2ToSegment = (px, py, ax, ay, bx, by) => {
  const dx = bx - ax; const dy = by - ay;
  const len2 = dx * dx + dy * dy;
  const t = len2 === 0 ? 0 : Math.max(0, Math.min(1, ((px - ax) * dx + (py - ay) * dy) / len2));
  const cx = ax + t * dx; const cy = ay + t * dy;
  return (px - cx) ** 2 + (py - cy) ** 2;
};

// The eraser is drawn `width * 6` thick (see drawEraserSegments), so it reaches `width * 3` from its path.
export const eraserRadius = (eraser) => (Number(eraser.width) || 3) * 3;

const hitsEraser = (x, y, eraser, r2) => {
  const ep = eraser.points;
  if (ep.length === 1) return (x - ep[0][0]) ** 2 + (y - ep[0][1]) ** 2 <= r2;
  for (let i = 1; i < ep.length; i += 1) {
    if (dist2ToSegment(x, y, ep[i - 1][0], ep[i - 1][1], ep[i][0], ep[i][1]) <= r2) return true;
  }
  return false;
};

export const hasErasers = (strokes) => (strokes || []).some((s) => s?.isEraser);

const splitByEraser = (stroke, eraser) => {
  const r = eraserRadius(eraser);
  const r2 = r * r;
  const pts = stroke.points;
  const eb = boxOf([{ points: eraser.points }]);
  const sb = strokeBox(stroke);
  if (eb && (sb.maxX < eb.minX - r || sb.minX > eb.maxX + r || sb.maxY < eb.minY - r || sb.minY > eb.maxY + r)) return [stroke];
  const hit = pts.map((p) => hitsEraser(p[0], p[1], eraser, r2));
  // A long step can jump over a thin eraser mark: also test the middle of each step.
  const cut = pts.map((p, i) => {
    if (i === pts.length - 1 || hit[i] || hit[i + 1]) return false;
    return hitsEraser((p[0] + pts[i + 1][0]) / 2, (p[1] + pts[i + 1][1]) / 2, eraser, r2);
  });
  if (!hit.some(Boolean) && !cut.some(Boolean)) return [stroke];
  const pieces = [];
  let run = [];
  const flush = () => {
    if (run.length >= 2 || (run.length === 1 && pts.length === 1)) pieces.push({ ...stroke, points: run });
    run = [];
  };
  pts.forEach((p, i) => {
    if (hit[i]) { flush(); return; }
    run.push(p);
    if (cut[i]) flush();
  });
  flush();
  return pieces;
};

export const bakeErasers = (strokes) => {
  if (!hasErasers(strokes)) return strokes;
  let result = [];
  for (const s of strokes) {
    if (s?.isEraser) {
      if (s.points?.length) result = result.flatMap((prev) => splitByEraser(prev, s));
    } else {
      result.push(s);
    }
  }
  return result;
};

// ── Clipboard (in memory, shared by every notepad on the page) ───────────────

let clipboard = null;   // { items, box, sourceKey, pastes }
export const getLassoClipboard = () => clipboard;
export const setLassoClipboard = (items, sourceKey) => {
  const copy = cloneStrokes(items);
  const box = boxOf(copy);
  clipboard = box ? { items: copy, box, sourceKey, pastes: 0 } : null;
  return clipboard;
};

const PASTE_STEP = 24;
// What to paste: fresh copies, nudged down-right when pasting onto the page they came from (so they do not
// land exactly on top of the original), at the same spot on any other page.
export const pasteStrokes = (clip, targetKey, pageW, pageH) => {
  if (!clip?.items?.length) return null;
  const same = clip.sourceKey === targetKey;
  clip.pastes += 1;
  const step = same ? PASTE_STEP * ((clip.pastes - 1) % 8 + 1) : 0;
  const shift = clampShift(clip.box, step, step, pageW, pageH);
  const items = cloneStrokes(clip.items, shift.dx, shift.dy);
  return { items, box: boxOf(items) };
};
export const clearLassoClipboard = () => { clipboard = null; };
