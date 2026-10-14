// Freehand marks drawn over PDF pages (see PdfViewer). A stroke is
// { id, color, w, pts: [[x, y], ...], kind? } with BOTH axes in page-width units
// (x in 0..1, y in 0..height/width), so it stays glued to the page at any zoom.
// kind 'pen' = opaque writing drawn above the highlights; no kind = highlighter (older records).
import { scribbleTargets } from './scribbleErase.js';

export const HIGHLIGHT_COLORS = [
  { id: 'yellow', value: '#facc15', label: 'Yellow' },
  { id: 'green', value: '#4ade80', label: 'Green' },
  { id: 'pink', value: '#f472b6', label: 'Pink' },
];
export const HIGHLIGHT_WIDTH = 0.02;      // marker thickness, as a fraction of page width
export const HIGHLIGHT_OPACITY = 0.42;
export const PEN_COLORS = [
  { id: 'black', value: '#1e293b', label: 'Black' },
  { id: 'blue', value: '#2563eb', label: 'Blue' },
  { id: 'red', value: '#dc2626', label: 'Red' },
];
export const PEN_WIDTH = 0.0035;          // ≈ 2.5–3.5px on a phone/iPad-width page
export const isPenStroke = (stroke) => stroke?.kind === 'pen';
export const MIN_POINT_GAP = 0.0025;      // drop points closer than this while drawing
export const ERASE_RADIUS = 0.022;
export const MAX_STROKES_PER_PAGE = 1500;  // handwriting is many short strokes

const round = (n) => Math.round(n * 10000) / 10000;

export const toPagePoint = (clientX, clientY, rect) => (
  rect && rect.width > 0 ? [round((clientX - rect.left) / rect.width), round((clientY - rect.top) / rect.width)] : null
);

export const appendPoint = (points, point) => {
  if (!point) return points;
  const last = points[points.length - 1];
  if (last && Math.hypot(point[0] - last[0], point[1] - last[1]) < MIN_POINT_GAP) return points;
  return [...points, point];
};

// SVG path for a stroke; a lone tap becomes a short dash so it still shows as a dot.
export const pointsToPath = (points = []) => {
  if (points.length === 0) return '';
  const [first, ...rest] = points;
  if (rest.length === 0) return `M${first[0]} ${first[1]}L${round(first[0] + 0.0001)} ${first[1]}`;
  return `M${first[0]} ${first[1]}${rest.map(([x, y]) => `L${x} ${y}`).join('')}`;
};

const distToSegment = (px, py, ax, ay, bx, by) => {
  const dx = bx - ax;
  const dy = by - ay;
  const len2 = dx * dx + dy * dy;
  const t = len2 === 0 ? 0 : Math.max(0, Math.min(1, ((px - ax) * dx + (py - ay) * dy) / len2));
  return Math.hypot(px - (ax + t * dx), py - (ay + t * dy));
};

// Does (x, y) touch this stroke, counting its own half-thickness?
export const strokeHit = (stroke, x, y, radius = ERASE_RADIUS) => {
  const pts = stroke?.pts || [];
  const reach = radius + (stroke?.w || HIGHLIGHT_WIDTH) / 2;
  if (pts.length === 1) return Math.hypot(x - pts[0][0], y - pts[0][1]) <= reach;
  for (let i = 1; i < pts.length; i += 1) {
    if (distToSegment(x, y, pts[i - 1][0], pts[i - 1][1], pts[i][0], pts[i][1]) <= reach) return true;
  }
  return false;
};

export const eraseAt = (strokes = [], x, y, radius = ERASE_RADIUS) => {
  const kept = strokes.filter((stroke) => !strokeHit(stroke, x, y, radius));
  return kept.length === strokes.length ? strokes : kept;
};

const isStroke = (s) => s && typeof s.id === 'string' && typeof s.color === 'string'
  && Array.isArray(s.pts) && s.pts.length > 0 && s.pts.every((p) => Array.isArray(p) && Number.isFinite(p[0]) && Number.isFinite(p[1]));

// Stored pages → clean { [page]: strokes }: drops malformed strokes and empty pages.
export const cleanHighlights = (pages) => {
  const out = {};
  for (const [page, strokes] of Object.entries(pages && typeof pages === 'object' ? pages : {})) {
    const good = (Array.isArray(strokes) ? strokes : []).filter(isStroke).slice(-MAX_STROKES_PER_PAGE);
    if (good.length > 0) out[page] = good;
  }
  return out;
};

export const countHighlights = (pages = {}) => Object.values(pages).reduce((sum, list) => sum + list.length, 0);

export const addStroke = (pages = {}, page, stroke) => ({
  ...pages,
  [page]: [...(pages[page] || []), stroke].slice(-MAX_STROKES_PER_PAGE),
});

export const removeStroke = (pages = {}, page, id) => {
  const list = (pages[page] || []).filter((s) => s.id !== id);
  const next = { ...pages };
  if (list.length > 0) next[page] = list;
  else delete next[page];
  return next;
};

// Scribble-to-erase for the pen: the notepad's geometry (utils/scribbleErase, in A4 page units 794 wide)
// on PDF page-width units. Only pen writing can be scratched out — highlighting is often a zigzag on purpose.
const SCRIBBLE_UNITS = 794;
export const penScribbleTargets = (scribblePts, strokes = []) => {
  const scale = (pts) => pts.map(([x, y]) => [x * SCRIBBLE_UNITS, y * SCRIBBLE_UNITS]);
  const pens = strokes.filter(isPenStroke);
  const hits = scribbleTargets(scale(scribblePts || []), pens.map((s) => ({ points: scale(s.pts) })));
  return hits.map((i) => pens[i].id);
};

export const removeStrokes = (pages = {}, page, ids) => {
  const drop = new Set(ids);
  const list = (pages[page] || []).filter((s) => !drop.has(s.id));
  if (list.length === (pages[page] || []).length) return pages;
  const next = { ...pages };
  if (list.length > 0) next[page] = list;
  else delete next[page];
  return next;
};

// Undo / redo over whole-document snapshots (pages objects share untouched page arrays, so this is cheap).
export const HISTORY_LIMIT = 50;
export const emptyHistory = () => ({ undo: [], redo: [] });
export const recordEdit = (history, before) => ({ undo: [...history.undo.slice(-(HISTORY_LIMIT - 1)), before], redo: [] });
export const stepHistory = (history, current, direction) => {
  const from = direction === 'undo' ? history.undo : history.redo;
  if (from.length === 0) return null;
  const target = from[from.length - 1];
  return direction === 'undo'
    ? { pages: target, history: { undo: history.undo.slice(0, -1), redo: [...history.redo, current] } }
    : { pages: target, history: { undo: [...history.undo, current], redo: history.redo.slice(0, -1) } };
};
