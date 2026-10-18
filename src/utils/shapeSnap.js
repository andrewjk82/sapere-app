// "Draw and hold" (as in GoodNotes): a stroke the pen is held still at the end of turns into the clean
// shape it was aiming for — a straight line, a rectangle or an ellipse. Pure geometry on page units
// ([x, y, width] points, see utils/padView); the notepad decides when to ask.
import { resample } from './scribbleErase.js';

const KEY = 'sapere:holdToShape:v1';
export const isHoldToShapeOn = (storage = globalThis.localStorage) => {
  try { return storage.getItem(KEY) !== 'off'; } catch { return true; }   // on unless the student turned it off
};
export const setHoldToShapeOn = (on, storage = globalThis.localStorage) => {
  try { storage.setItem(KEY, on ? 'on' : 'off'); } catch { /* private mode: not remembered */ }
};

export const HOLD_MS = 600;           // pen held still this long → snap
export const HOLD_MOVE = 6;           // screen px the pen may wander and still count as still
export const MIN_PATH = 60;           // shorter marks are dots / letters, never shapes
export const MIN_EXTENT = 24;         // a closed shape needs at least this much on both sides
export const LINE_STRAIGHTNESS = 0.9; // chord ÷ path length of an open stroke
export const CLOSE_RATIO = 0.25;      // ends closer than this share of the path length = closed
export const ELLIPSE_MAX_ERR = 0.12;  // mean radial error of an ellipse fit (share of the radius)
export const RECT_MAX_ERR = 0.045;    // mean distance to the box outline (share of the box diagonal)

const dist = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1]);
const pathLength = (pts) => { let n = 0; for (let i = 1; i < pts.length; i += 1) n += dist(pts[i - 1], pts[i]); return n; };

// → { shape: 'line' | 'rectangle' | 'circle', start: {x, y}, end: {x, y} } or null when the stroke is not
// clearly one of them (then the stroke is left exactly as written). `circle` covers any ellipse.
export const recognizeShape = (points) => {
  if (!Array.isArray(points) || points.length < 4) return null;
  const len = pathLength(points);
  if (len < MIN_PATH) return null;
  const first = points[0]; const last = points[points.length - 1];
  const chord = dist(first, last);

  if (chord / len >= LINE_STRAIGHTNESS) {
    return { shape: 'line', start: { x: first[0], y: first[1] }, end: { x: last[0], y: last[1] } };
  }
  if (chord > len * CLOSE_RATIO) return null;                      // open and not straight: a curve, a letter…

  const pts = resample(points, Math.max(3, len / 80));
  let minX = Infinity; let minY = Infinity; let maxX = -Infinity; let maxY = -Infinity;
  for (const p of pts) { minX = Math.min(minX, p[0]); minY = Math.min(minY, p[1]); maxX = Math.max(maxX, p[0]); maxY = Math.max(maxY, p[1]); }
  const w = maxX - minX; const h = maxY - minY;
  if (w < MIN_EXTENT || h < MIN_EXTENT) return null;
  const cx = (minX + maxX) / 2; const cy = (minY + maxY) / 2; const rx = w / 2; const ry = h / 2;
  const diag = Math.hypot(w, h);

  let ellipseErr = 0; let rectErr = 0;
  for (const [x, y] of pts) {
    ellipseErr += Math.abs(Math.sqrt(((x - cx) / rx) ** 2 + ((y - cy) / ry) ** 2) - 1);
    rectErr += Math.min(x - minX, maxX - x, y - minY, maxY - y) / diag;
  }
  ellipseErr /= pts.length; rectErr /= pts.length;

  // The box outline fits a hand-drawn rectangle tightly; an ellipse stays clearly looser against it.
  const box = { start: { x: minX, y: minY }, end: { x: maxX, y: maxY } };
  if (rectErr <= RECT_MAX_ERR && rectErr < ellipseErr * 0.5) return { shape: 'rectangle', ...box };
  if (ellipseErr <= ELLIPSE_MAX_ERR) return { shape: 'circle', ...box };
  return null;
};
