// Whole-stroke eraser for the notepad: everything the eraser path touches disappears.
// A stroke is { points: [[x, y, width], ...], isEraser, ... } in canvas pixels.

export const STROKE_ERASE_RADIUS = 14;
const SAMPLE_STEP = 6;

const distToSegmentSq = (px, py, ax, ay, bx, by) => {
  const dx = bx - ax;
  const dy = by - ay;
  const len2 = dx * dx + dy * dy;
  const t = len2 === 0 ? 0 : Math.max(0, Math.min(1, ((px - ax) * dx + (py - ay) * dy) / len2));
  const cx = ax + t * dx;
  const cy = ay + t * dy;
  return (px - cx) * (px - cx) + (py - cy) * (py - cy);
};

// Is (x, y) within r of the stroke's line? Checks the segments, so a fast stroke with
// widely spaced points is still hit between its points.
export const pointNearStroke = (points, x, y, r = STROKE_ERASE_RADIUS) => {
  if (!Array.isArray(points) || points.length === 0) return false;
  const r2 = r * r;
  if (points.length === 1) return (points[0][0] - x) ** 2 + (points[0][1] - y) ** 2 <= r2;
  for (let i = 1; i < points.length; i += 1) {
    if (distToSegmentSq(x, y, points[i - 1][0], points[i - 1][1], points[i][0], points[i][1]) <= r2) return true;
  }
  return false;
};

// Points along a → b, no further apart than `step`, so a quick swipe cannot skip over a stroke.
export const samplesAlong = (a, b, step = SAMPLE_STEP) => {
  const dist = Math.hypot(b.x - a.x, b.y - a.y);
  const n = Math.max(1, Math.ceil(dist / step));
  return Array.from({ length: n + 1 }, (_, i) => ({ x: a.x + ((b.x - a.x) * i) / n, y: a.y + ((b.y - a.y) * i) / n }));
};

// Strokes left after sweeping the eraser from a to b; the same array when nothing was hit.
export const eraseStrokesAlong = (strokes, a, b, r = STROKE_ERASE_RADIUS) => {
  const samples = samplesAlong(a, b);
  const kept = strokes.filter((s) => (
    s.isEraser || !s.points || !samples.some((p) => pointNearStroke(s.points, p.x, p.y, r))
  ));
  return kept.length === strokes.length ? strokes : kept;
};
