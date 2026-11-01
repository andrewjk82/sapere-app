// "Scribble to erase" (as in GoodNotes): scratching over ink erases it. Pure geometry; the notepad
// decides when to ask. All points are page units ([x, y, width], see utils/padView).
//
// A stroke counts as a scribble only when it is a dense zigzag AND it covers existing ink — so
// shading a graph on an empty area, or writing "m" / "w" / "8", stays ordinary ink.
//
// Only the ink INSIDE the scribbled area (the scribble's outline) is erased: a stroke that runs
// out of it is cut at the outline and its outside parts stay. (It used to drop whole strokes that
// were 60% within 24 units of the scribble — a long stroke, or the letters next to it, vanished.)

const KEY = 'sapere:scribbleErase:v1';
export const isScribbleEraseOn = (storage = globalThis.localStorage) => {
  try { return storage.getItem(KEY) !== 'off'; } catch { return true; }   // on unless the student turned it off
};
export const setScribbleEraseOn = (on, storage = globalThis.localStorage) => {
  try { storage.setItem(KEY, on ? 'on' : 'off'); } catch { /* private mode: not remembered */ }
};

// Sized so scratching out a single digit (~18 units, handwriting is 15–25 tall) with 4–5
// back-and-forths works — it needed 45 units and 6+ reversals before, so short scribbles failed.
export const MIN_POINTS = 12;
export const MIN_PATH = 80;           // total ink length (page units)
export const MIN_EXTENT = 18;         // longer side of the scribble's box
export const MIN_REVERSALS = 4;       // back-and-forth turns
export const MIN_PATH_RATIO = 3;      // path length ÷ longer side (≥ 3 sweeps over the same span)
export const REVERSAL_SWEEP = 0.3;    // a turn counts once the pen went back this share of the scribble's width
export const AREA_PAD = 3;            // the scribbled area reaches this far past the scribble's outline (≈ a nib)
export const CUT_STEP = 3;            // strokes are checked at least every CUT_STEP units, so long segments are cut too
export const MIN_ERASED = 4;          // less scratched ink than this is a graze: the scribble stays ink
export const MIN_PIECE = 4;           // a cut-off stub shorter than this (a dot at the scribble's edge) goes too

const dist = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1]);

// Points every `step` units along the polyline (always keeps the last point).
export const resample = (pts, step) => {
  if (!pts.length) return [];
  const out = [[pts[0][0], pts[0][1]]];
  let carried = 0;
  for (let i = 1; i < pts.length; i += 1) {
    let a = pts[i - 1];
    const b = pts[i];
    let seg = dist(a, b);
    if (seg === 0) continue;
    while (carried + seg >= step) {
      const t = (step - carried) / seg;
      const p = [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
      out.push(p);
      a = p;
      seg = dist(a, b);
      carried = 0;
    }
    carried += seg;
  }
  const last = pts[pts.length - 1];
  const tail = out[out.length - 1];
  if (tail[0] !== last[0] || tail[1] !== last[1]) out.push([last[0], last[1]]);
  return out;
};

export const pathLength = (pts) => {
  let sum = 0;
  for (let i = 1; i < pts.length; i += 1) sum += dist(pts[i - 1], pts[i]);
  return sum;
};

const boxOf = (pts) => {
  let minX = Infinity; let minY = Infinity; let maxX = -Infinity; let maxY = -Infinity;
  for (const p of pts) {
    if (p[0] < minX) minX = p[0];
    if (p[0] > maxX) maxX = p[0];
    if (p[1] < minY) minY = p[1];
    if (p[1] > maxY) maxY = p[1];
  }
  return { minX, minY, maxX, maxY, w: maxX - minX, h: maxY - minY };
};

// Times the pen turned back along one axis (k = 0 for x, 1 for y): a turn counts once the pen has come
// back REVERSAL_SWEEP of the span from its furthest point, so jitter never counts and a small, quick
// scribble with rounded turns and few points still does. (Turn ANGLES between 8-unit samples missed
// those: a 20-unit sweep's rounded end spread over two samples, neither sharp enough.)
const axisReversals = (pts, k, span) => {
  const minMove = Math.max(2, span * REVERSAL_SWEEP);
  let count = 0;
  let dir = 0;
  let extreme = pts[0][k];
  for (const p of pts) {
    const v = p[k];
    if (dir === 0) {
      if (Math.abs(v - extreme) >= minMove) { dir = Math.sign(v - extreme); extreme = v; }
    } else if ((v - extreme) * dir > 0) {
      extreme = v;
    } else if ((extreme - v) * dir >= minMove) {
      count += 1;
      dir = -dir;
      extreme = v;
    }
  }
  return count;
};

// Back-and-forth turns, along whichever axis the sweeps run (diagonal sweeps turn on both).
export const countReversals = (pts) => {
  if (!Array.isArray(pts) || pts.length < 2) return 0;
  const { w, h } = boxOf(pts);
  return Math.max(axisReversals(pts, 0, w), axisReversals(pts, 1, h));
};

export const isScribbleShape = (pts) => {
  if (!Array.isArray(pts) || pts.length < MIN_POINTS) return false;
  const path = pathLength(pts);
  if (path < MIN_PATH) return false;
  const { w, h } = boxOf(pts);
  const extent = Math.max(w, h);
  if (extent < MIN_EXTENT || path / extent < MIN_PATH_RATIO) return false;
  return countReversals(pts) >= MIN_REVERSALS;
};

const cross = (o, a, b) => (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);

// Counter-clockwise convex hull (monotone chain).
const convexHull = (pts) => {
  const p = [...pts].map((q) => [q[0], q[1]]).sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  if (p.length < 3) return p;
  const lower = [];
  for (const q of p) {
    while (lower.length >= 2 && cross(lower[lower.length - 2], lower[lower.length - 1], q) <= 0) lower.pop();
    lower.push(q);
  }
  const upper = [];
  for (let i = p.length - 1; i >= 0; i -= 1) {
    const q = p[i];
    while (upper.length >= 2 && cross(upper[upper.length - 2], upper[upper.length - 1], q) <= 0) upper.pop();
    upper.push(q);
  }
  return lower.slice(0, -1).concat(upper.slice(0, -1));
};

// The area a scribble scratched: its outline (convex hull) grown by AREA_PAD. null = not a scribble.
export const scribbleArea = (scribblePts) => {
  if (!isScribbleShape(scribblePts)) return null;
  const hull = convexHull(scribblePts);
  if (hull.length < 3) return null;
  const box = boxOf(scribblePts);
  const edges = hull.map((a, i) => {
    const b = hull[(i + 1) % hull.length];
    return { a, b, len: dist(a, b) || 1 };
  });
  return { box, edges, pad: AREA_PAD };
};

export const inArea = (area, p) => {
  const { box, edges, pad } = area;
  if (p[0] < box.minX - pad || p[0] > box.maxX + pad || p[1] < box.minY - pad || p[1] > box.maxY + pad) return false;
  return edges.every(({ a, b, len }) => cross(a, b, p) / len >= -pad);   // inside every edge (CCW), within pad
};

const lerpPoint = (a, b, t) => a.map((v, k) => (k < b.length ? v + (b[k] - v) * t : v));

// Extra points so no segment is longer than CUT_STEP (pressure widths interpolated too).
const densify = (pts) => {
  const out = [pts[0]];
  for (let i = 1; i < pts.length; i += 1) {
    const a = pts[i - 1];
    const b = pts[i];
    const n = Math.ceil(dist(a, b) / CUT_STEP);
    for (let k = 1; k < n; k += 1) out.push(lerpPoint(a, b, k / n));
    out.push(b);
  }
  return out;
};

// Where segment out→inside crosses the area's outline.
const edgePoint = (area, outside, inside) => {
  let lo = 0;
  let hi = 1;
  for (let i = 0; i < 10; i += 1) {
    const mid = (lo + hi) / 2;
    if (inArea(area, lerpPoint(outside, inside, mid))) hi = mid; else lo = mid;
  }
  return lerpPoint(outside, inside, lo);
};

// Cuts one stroke's points at the area. null = untouched; otherwise { pieces, erased } where
// pieces are the outside runs (≥ MIN_PIECE long) and erased the scratched ink length (a dot counts 1).
export const cutPoints = (pts, area) => {
  if (!Array.isArray(pts) || pts.length === 0) return null;
  const sb = boxOf(pts);
  const { box, pad } = area;
  if (sb.maxX < box.minX - pad || sb.minX > box.maxX + pad || sb.maxY < box.minY - pad || sb.minY > box.maxY + pad) return null;
  if (pts.length === 1) return inArea(area, pts[0]) ? { pieces: [], erased: 1 } : null;
  const dense = densify(pts);
  const inside = dense.map((p) => inArea(area, p));
  if (!inside.some(Boolean)) return null;
  const pieces = [];
  let run = inside[0] ? null : [dense[0]];
  for (let i = 1; i < dense.length; i += 1) {
    const a = dense[i - 1];
    const b = dense[i];
    if (!inside[i - 1] && inside[i]) {
      run.push(edgePoint(area, a, b));
      pieces.push(run);
      run = null;
    } else if (inside[i - 1] && !inside[i]) {
      run = [edgePoint(area, b, a), b];
    } else if (!inside[i]) {
      run.push(b);
    }
  }
  if (run) pieces.push(run);
  const kept = pieces.filter((piece) => piece.length >= 2 && pathLength(piece) >= MIN_PIECE);
  const erased = pathLength(dense) - kept.reduce((sum, piece) => sum + pathLength(piece), 0);
  return { pieces: kept, erased };
};

// Notepad: the stroke list after the scribble scratched out the ink under it (cut strokes are
// replaced in place by their outside pieces), or null when the scribble should stay ordinary ink.
export const scribbleErase = (scribblePts, strokes) => {
  const area = scribbleArea(scribblePts);
  if (!area) return null;
  let erased = 0;
  const out = [];
  for (const stroke of strokes || []) {
    const cut = stroke && !stroke.isEraser ? cutPoints(stroke.points, area) : null;
    if (!cut) { out.push(stroke); continue; }
    erased += cut.erased;
    for (const piece of cut.pieces) out.push({ ...stroke, points: piece });
  }
  return erased >= MIN_ERASED ? out : null;
};
