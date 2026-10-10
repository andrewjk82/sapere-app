// "Scribble to erase" (as in GoodNotes): scratching over ink erases it. Pure geometry; the notepad
// decides when to ask. All points are page units ([x, y, width], see utils/padView).
//
// A stroke counts as a scribble only when it is a dense zigzag AND it covers existing ink — so
// shading a graph on an empty area, or writing "m" / "w" / "8", stays ordinary ink.

const KEY = 'sapere:scribbleErase:v1';
export const isScribbleEraseOn = (storage = globalThis.localStorage) => {
  try { return storage.getItem(KEY) !== 'off'; } catch { return true; }   // on unless the student turned it off
};
export const setScribbleEraseOn = (on, storage = globalThis.localStorage) => {
  try { storage.setItem(KEY, on ? 'on' : 'off'); } catch { /* private mode: not remembered */ }
};

export const MIN_POINTS = 12;
export const MIN_PATH = 150;          // total ink length (page units)
export const MIN_EXTENT = 40;         // longer side of the scribble's box
export const MIN_REVERSALS = 6;       // sharp back-and-forth turns
export const MIN_PATH_RATIO = 3;      // path length ÷ longer side (≥ 3 sweeps over the same span)
export const TURN_SAMPLE = 8;         // resample step for turn counting: ignores pen jitter
export const REVERSAL_COS = -0.2;     // angle between sweeps wider than ~100° counts as a reversal
export const COVER_DIST = 24;         // an ink point this close to the scribble line is "scratched"
export const COVER_FRACTION = 0.6;    // erase a stroke when this much of it is scratched

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

// Sharp turns along the (resampled) line: consecutive sweeps pointing back against each other.
export const countReversals = (pts) => {
  const s = resample(pts, TURN_SAMPLE);
  let count = 0;
  let prev = null;
  for (let i = 1; i < s.length; i += 1) {
    const v = [s[i][0] - s[i - 1][0], s[i][1] - s[i - 1][1]];
    const len = Math.hypot(v[0], v[1]);
    if (len === 0) continue;
    const u = [v[0] / len, v[1] / len];
    if (prev && prev[0] * u[0] + prev[1] * u[1] < REVERSAL_COS) count += 1;
    prev = u;
  }
  return count;
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

// Strokes (by index in `strokes`) the scribble scratched out, or [] when it should stay ordinary ink.
export const scribbleTargets = (scribblePts, strokes) => {
  if (!isScribbleShape(scribblePts)) return [];
  const line = resample(scribblePts, 6);
  const box = boxOf(scribblePts);
  const margin = COVER_DIST;
  const hits = [];
  (strokes || []).forEach((stroke, index) => {
    const pts = stroke?.points;
    if (stroke?.isEraser || !Array.isArray(pts) || pts.length === 0) return;
    const sb = boxOf(pts);
    if (sb.maxX < box.minX - margin || sb.minX > box.maxX + margin || sb.maxY < box.minY - margin || sb.minY > box.maxY + margin) return;
    let covered = 0;
    for (const p of pts) {
      if (p[0] < box.minX - margin || p[0] > box.maxX + margin || p[1] < box.minY - margin || p[1] > box.maxY + margin) continue;
      if (line.some((q) => Math.hypot(p[0] - q[0], p[1] - q[1]) <= COVER_DIST)) covered += 1;
    }
    if (covered / pts.length >= COVER_FRACTION) hits.push(index);
  });
  return hits;
};
