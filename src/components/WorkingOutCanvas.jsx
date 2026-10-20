import React, { useRef, useState, useImperativeHandle, forwardRef, useEffect, useCallback } from 'react';
import { flushSync } from 'react-dom';
import { PenTool, PenLine, Highlighter, Eraser, MousePointer2, RotateCcw, RotateCw, Trash2, ChevronLeft, ChevronRight, Grid3x3, Minus, Square, Circle, LassoSelect, ClipboardPaste } from 'lucide-react';
import StickerLayer from './StickerLayer';
import LassoOverlay from './LassoOverlay';
import { useLassoTool } from '../utils/useLassoTool';
import { drawPenSegments, drawTip } from '../utils/inkRender';
import { eraseStrokesAlong, STROKE_ERASE_RADIUS } from '../utils/strokeErase';
import { isScribbleEraseOn, scribbleTargets } from '../utils/scribbleErase';
import { recognizeShape, isHoldToShapeOn, HOLD_MS, HOLD_MOVE } from '../utils/shapeSnap';
import { snapAngle } from '../utils/lassoSelect';
import { loadPadSettings, savePadSettings } from '../utils/padSettings';
import { newGridSticker, cleanStickerPages, drawGridSticker, stickerBox, STICKER_MAX_PER_PAGE } from '../utils/canvasStickers';
import {
  PAGE_W, PAGE_H, EXPORT_SCALE, SNAP_ZOOM, fitScale, clampPos, zoomAt, pageCentre, viewForCentre, backingScale, classifyTwoFinger, classifyMultiTap,
} from '../utils/padView';

// ⬆ Bump this every time you modify the canvas so you can confirm the deployed version
const CANVAS_VERSION = 'v10.10-pen-memory';

// Minimum squared distance between captured points (~1.4px).
const MIN_DIST_SQ = 2;

const COLORS = ['#1e1b4b', '#4b5563', '#ef4444', '#2563eb', '#16a34a', '#7c3aed'];
const HIGHLIGHTER_COLORS = [
  { name: 'Pastel yellow', value: 'rgba(255, 224, 130, 0.48)' },
  { name: 'Pastel pink', value: 'rgba(255, 183, 197, 0.48)' },
  { name: 'Pastel mint', value: 'rgba(166, 226, 190, 0.48)' },
  { name: 'Pastel blue', value: 'rgba(160, 210, 255, 0.48)' },
  { name: 'Pastel lavender', value: 'rgba(207, 180, 255, 0.48)' },
];

const SKETCH_GUARD_CLASS = 'sapere-sketch-active';
const SKETCH_GUARD_COUNT = 'sapereSketchActiveCount';
const SKETCH_GUARD_STYLE = `
  body.${SKETCH_GUARD_CLASS},
  body.${SKETCH_GUARD_CLASS} * {
    -webkit-touch-callout: none !important;
    -webkit-user-select: none !important;
    user-select: none !important;
    -webkit-tap-highlight-color: transparent !important;
  }

  body.${SKETCH_GUARD_CLASS} input,
  body.${SKETCH_GUARD_CLASS} textarea,
  body.${SKETCH_GUARD_CLASS} [contenteditable="true"] {
    -webkit-touch-callout: default !important;
    -webkit-user-select: text !important;
    user-select: text !important;
  }
`;

// ─── Rendering primitives ───────────────────────────────────────────────────
// A stroke = { points: [[x, y, width], ...], color, width, isEraser, completed }
//
// Three canvases keep the live stroke pinned to the pointer with zero lag:
//   bg    — all completed strokes
//   live  — current stroke's SETTLED segments (incremental, never cleared)
//   tip   — current stroke's leading tip only (cleared + redrawn every frame,
//           extended with predicted points so ink reaches/leads the pointer)

// drawPenSegments / drawTip live in utils/inkRender (shared with the PDF pen).

// Draw eraser segments [startIdx .. end) (destination-out).
function drawEraserSegments(ctx, pts, startIdx, width, dpr) {
  if (!ctx || !pts || pts.length === 0) return;
  ctx.save();
  ctx.globalCompositeOperation = 'destination-out';
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.lineWidth = width * 6 * dpr;
  ctx.strokeStyle = 'rgba(0,0,0,1)';

  if (pts.length === 1) {
    ctx.fillStyle = 'rgba(0,0,0,1)';
    ctx.beginPath();
    ctx.arc(pts[0][0] * dpr, pts[0][1] * dpr, width * 3 * dpr, 0, Math.PI * 2);
    ctx.fill();
  } else {
    const from = Math.max(1, startIdx);
    ctx.beginPath();
    ctx.moveTo(pts[from - 1][0] * dpr, pts[from - 1][1] * dpr);
    for (let i = from; i < pts.length; i++) {
      ctx.lineTo(pts[i][0] * dpr, pts[i][1] * dpr);
    }
    ctx.stroke();
  }
  ctx.restore();
}

// Replay a fully-committed stroke (background redraw + export).
function replayStroke(ctx, stroke, dpr) {
  if (!stroke?.points?.length) return;
  if (stroke.isEraser) {
    drawEraserSegments(ctx, stroke.points, 1, stroke.width, dpr);
  } else {
    drawStroke(ctx, stroke, dpr, true);
  }
}

function drawStroke(ctx, stroke, dpr, includeTip = false) {
  if (stroke?.shape) {
    const pts = stroke.points || [];
    if (!ctx || pts.length < 2) return;
    ctx.save();
    ctx.globalCompositeOperation = 'source-over';
    ctx.strokeStyle = stroke.color;
    ctx.lineWidth = Math.max(0.6, pts[0][2] || stroke.width) * dpr;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.beginPath();
    ctx.moveTo(pts[0][0] * dpr, pts[0][1] * dpr);
    for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i][0] * dpr, pts[i][1] * dpr);
    ctx.stroke();
    ctx.restore();
    return;
  }
  drawPenSegments(ctx, stroke.points, 1, stroke.color, dpr, includeTip);
}

function makeShapePoints(shape, start, end, width) {
  const lineWidth = width * 1.25;
  const point = (x, y) => [x, y, lineWidth];
  if (shape === 'line') return [point(start.x, start.y), point(end.x, end.y)];
  if (shape === 'rectangle') {
    return [
      point(start.x, start.y), point(end.x, start.y), point(end.x, end.y),
      point(start.x, end.y), point(start.x, start.y),
    ];
  }
  const cx = (start.x + end.x) / 2;
  const cy = (start.y + end.y) / 2;
  const rx = Math.abs(end.x - start.x) / 2;
  const ry = Math.abs(end.y - start.y) / 2;
  return Array.from({ length: 49 }, (_, i) => {
    const angle = (i / 48) * Math.PI * 2;
    return point(cx + Math.cos(angle) * rx, cy + Math.sin(angle) * ry);
  });
}

const pageHasInk = (pageStrokes = []) =>
  Array.isArray(pageStrokes) && pageStrokes.some(stroke =>
    !stroke?.isEraser && Array.isArray(stroke.points) && stroke.points.length > 0
  );

/**
 * Ink amount without OCR/AI — stroke count + polyline path length.
 * Levels:
 *   empty       — no pen ink
 *   light       — a dot / short scribble (not real working out)
 *   substantial — enough ink to look like steps were written
 *
 * Thresholds are CSS-pixel path lengths across freehand strokes (eraser ignored).
 */
export const analyzeInkPages = (pagesStrokes = []) => {
  let strokeCount = 0;
  let pathLength = 0;
  let pointCount = 0;

  const pages = Array.isArray(pagesStrokes) ? pagesStrokes : [];
  for (const page of pages) {
    if (!Array.isArray(page)) continue;
    for (const stroke of page) {
      if (stroke?.isEraser || !Array.isArray(stroke?.points) || stroke.points.length === 0) continue;
      strokeCount += 1;
      const pts = stroke.points;
      pointCount += pts.length;
      for (let i = 1; i < pts.length; i++) {
        const a = pts[i - 1];
        const b = pts[i];
        if (!a || !b) continue;
        const dx = (Number(b[0]) || 0) - (Number(a[0]) || 0);
        const dy = (Number(b[1]) || 0) - (Number(a[1]) || 0);
        pathLength += Math.hypot(dx, dy);
      }
      // Single-point tap still counts as a tiny mark.
      if (pts.length === 1) pathLength += 4;
    }
  }

  const roundedLen = Math.round(pathLength);
  let level = 'empty';
  if (strokeCount > 0) {
    // substantial: long total path, or several strokes with some length, or many samples
    if (
      roundedLen >= 280
      || (strokeCount >= 4 && roundedLen >= 120)
      || pointCount >= 80
    ) {
      level = 'substantial';
    } else {
      level = 'light';
    }
  }

  return {
    level, // 'empty' | 'light' | 'substantial'
    strokeCount,
    pathLength: roundedLen,
    pointCount,
    hasContent: level !== 'empty',
  };
};

const WorkingOutCanvas = React.memo(forwardRef(({ questionType, isSubmitted, isGraph: isGraphProp, onPageChange, onInkChange, hideTitle = false, maxPages = 0 }, ref) => {
  const bgCanvasRef = useRef(null);
  const liveCanvasRef = useRef(null);
  const displayCanvasRef = useRef(null); // top layer: tip + pointer events
  const bgCtxRef = useRef(null);
  const liveCtxRef = useRef(null);
  const tipCtxRef = useRef(null);

  // Live-stroke session refs
  const isDrawingRef = useRef(false);
  const activePointerIdRef = useRef(null);
  const currentStrokeRef = useRef(null);
  const liveDrawnIdxRef = useRef(1);   // next segment index not yet settled
  const predictedPtsRef = useRef([]);  // predicted [x,y] points for the tip
  const rectRef = useRef(null);        // { left, top, sx, sy } cached at pointerdown: screen px → page units
  const lastSampleRef = useRef({ x: 0, y: 0, t: 0 });
  const smoothWRef = useRef(3);        // low-pass-filtered line width
  const penSeenRef = useRef(false);    // a pen/stylus has been used → reject palm
  const rafIdRef = useRef(0);          // pending requestAnimationFrame id for live render
  const canceledPenStrokeRef = useRef(null);
  const canvasWrapperRef = useRef(null);
  // The page is a fixed A4 sheet in a viewport: `view` = { zoom, pos } (pos = the page's top-left in screen px),
  // `viewSize` = the viewport's size. Everything drawn lives in page units (see utils/padView).
  const viewportRef = useRef(null);
  const [viewSize, setViewSize] = useState({ w: 0, h: 0 });
  const [view, setViewState] = useState({ zoom: 1, pos: { x: 0, y: 0 } });
  const viewRef = useRef(view);
  const viewSizeRef = useRef(viewSize);
  const pendingCentreRef = useRef(null);   // a saved view waiting for the viewport to be measured
  const backScaleRef = useRef(1);      // canvas px per page unit currently backing the canvases
  const [backScale, setBackScale] = useState(1);
  // Whole-stroke eraser gesture: { pointerId, last: {x, y}, base: strokes at pointerdown, current: strokes now }.
  const strokeEraseRef = useRef(null);
  const holdRef = useRef({ timer: 0, stroke: null, x: 0, y: 0 });   // draw-and-hold: timer + where the pen last moved (client px)

  // Background bookkeeping
  const bgRenderedRef = useRef([]);
  // Set when strokes are swapped in wholesale (page switch / loaded draft): a lone stroke landing on an
  // empty page looks like "one stroke appended" and would otherwise skip the repaint.
  const forceRedrawRef = useRef(false);
  const strokesRef = useRef([]);
  // Strokes left out of the background repaint while a lasso selection is being dragged (shown on the live layer).
  const hiddenStrokesRef = useRef(null);

  const handlersRef = useRef({});
  // Screen px → page units for a canvas currently at `canvas`'s on-screen box.
  const snapRect = (canvas) => {
    const r = canvas.getBoundingClientRect();
    return { left: r.left, top: r.top, sx: r.width > 0 ? PAGE_W / r.width : 1, sy: r.height > 0 ? PAGE_H / r.height : 1 };
  };

  // Tool state mirrored to refs so the once-attached handlers see fresh values
  const isSubmittedRef = useRef(false);
  const activeToolRef = useRef('pen');
  const eraserModeRef = useRef('area');
  const palmGuardRef = useRef(false);
  const strokeColorRef = useRef('#1e1b4b');
  const highlighterColorRef = useRef(HIGHLIGHTER_COLORS[0].value);
  const strokeWidthRef = useRef(3);

  const [strokes, setStrokes] = useState([]);
  const [undoStack, setUndoStack] = useState([]);
  const [redoStack, setRedoStack] = useState([]);
  // A new action records the state before it (undo) and drops anything that was undone (redo).
  const pushUndo = (before) => { setUndoStack(prev => [...prev, before]); setRedoStack([]); };
  const resetHistory = () => { setUndoStack([]); setRedoStack([]); };
  const [currentPage, setCurrentPage] = useState(0);
  const [pages, setPages] = useState([[]]);
  const initialIsGraph = isGraphProp !== undefined ? isGraphProp : questionType === 'graph_sketch';
  const [pageTypes, setPageTypes] = useState([initialIsGraph]);
  // Stickers (e.g. an axes grid) per page, parallel to `pages`; edited in place, not part of the stroke history.
  const [stickerPages, setStickerPages] = useState([[]]);
  const [editingStickerId, setEditingStickerId] = useState(null);

  // The pen settings the student chose last (tool, colours, width, eraser mode) — read once per pad.
  const [remembered] = useState(loadPadSettings);
  const [activeTool, setActiveTool] = useState(remembered.tool);
  const [eraserMode, setEraserMode] = useState(remembered.eraserMode);
  const [confirmClear, setConfirmClear] = useState(false);
  const [palmGuard, setPalmGuard] = useState(false); // default: accept all input
  const [strokeColor, setStrokeColor] = useState(remembered.color);
  const [highlighterColor, setHighlighterColor] = useState(remembered.highlighter);
  const [strokeWidth, setStrokeWidth] = useState(remembered.width);
  useEffect(() => {
    savePadSettings({ tool: activeTool, eraserMode, color: strokeColor, highlighter: highlighterColor, width: strokeWidth });
  }, [activeTool, eraserMode, strokeColor, highlighterColor, strokeWidth]);

  strokesRef.current = strokes;
  // ─── View: zoom / pan of the A4 page inside the pane ───────────────────────
  const fit = fitScale(viewSize.w, viewSize.h);
  const cssScale = fit * view.zoom;
  const pagePos = clampPos(view.pos, cssScale, viewSize.w, viewSize.h);
  viewRef.current = view;
  viewSizeRef.current = viewSize;
  const cssScaleRef = useRef(1);
  cssScaleRef.current = cssScale || 1;
  const pagePosRef = useRef({ x: 0, y: 0 });
  pagePosRef.current = pagePos;

  const setView = useCallback((next) => {
    viewRef.current = next;
    setViewState(next);
  }, []);
  const resetView = useCallback(() => setView({ zoom: 1, pos: { x: 0, y: 0 } }), [setView]);
  // Zoom to `nextZoom` about a screen point (viewport coords); `base` = the view the gesture started from.
  const zoomTo = useCallback((nextZoom, anchor, base = viewRef.current, pan = { x: 0, y: 0 }) => {
    const vs = viewSizeRef.current;
    const f = fitScale(vs.w, vs.h);
    const moved = zoomAt(base, nextZoom, anchor, f, vs.w, vs.h);
    setView({ zoom: moved.zoom, pos: clampPos({ x: moved.pos.x + pan.x, y: moved.pos.y + pan.y }, f * moved.zoom, vs.w, vs.h) });
  }, [setView]);

  // Canvas resolution follows the zoom, but only in coarse steps and after the gesture settles (no re-render per frame).
  const dprRef = useRef(typeof window !== 'undefined' ? (window.devicePixelRatio || 1) : 1);
  useEffect(() => {
    if (!(cssScale > 0)) return undefined;
    const target = backingScale(cssScale, dprRef.current);
    const current = backScaleRef.current;
    if (backScale === 1 && current === 1 && target !== 1) { setBackScale(target); return undefined; } // first measurement
    if (Math.abs(target / current - 1) < 0.1) return undefined;
    const timer = window.setTimeout(() => setBackScale(target), 160);
    return () => window.clearTimeout(timer);
  }, [cssScale, backScale]);
  // Page navigation reads and writes these synchronously: two page changes (or a stroke and a
  // page change) can land before React re-renders, and the render-time values would be stale —
  // that lost the last stroke of a page and let one fast swipe add a run of blank pages.
  const pagesRef = useRef(pages);
  const currentPageRef = useRef(currentPage);
  pagesRef.current = pages;
  currentPageRef.current = currentPage;
  // Lets a host (homework drafts) autosave without polling. Ref'd so a new
  // callback identity each parent render doesn't re-fire the effect.
  const onInkChangeRef = useRef(onInkChange);
  onInkChangeRef.current = onInkChange;
  useEffect(() => { onInkChangeRef.current?.(); }, [strokes, pages, stickerPages]);
  useEffect(() => { setEditingStickerId(null); }, [currentPage]);
  const pageStickers = stickerPages[currentPage] || [];

  const updateSticker = (id, next) => setStickerPages((prev) => {
    const all = prev.slice();
    all[currentPage] = (all[currentPage] || []).map((st) => (st.id === id ? next : st));
    return all;
  });
  const deleteSticker = (id) => {
    setStickerPages((prev) => {
      const all = prev.slice();
      all[currentPage] = (all[currentPage] || []).filter((st) => st.id !== id);
      return all;
    });
    setEditingStickerId(null);
  };
  const addGridSticker = () => {
    const canvas = displayCanvasRef.current;
    if (!canvas || isSubmitted || pageStickers.length >= STICKER_MAX_PER_PAGE) return;
    const sticker = newGridSticker(`g${Date.now().toString(36)}${Math.random().toString(36).slice(2, 5)}`, PAGE_W, PAGE_H);
    setStickerPages((prev) => {
      const all = prev.slice();
      all[currentPage] = [...(all[currentPage] || []), sticker];
      return all;
    });
    setEditingStickerId(sticker.id);
  };

  isSubmittedRef.current = isSubmitted;
  activeToolRef.current = activeTool;
  eraserModeRef.current = eraserMode;
  palmGuardRef.current = palmGuard;
  strokeColorRef.current = strokeColor;
  highlighterColorRef.current = highlighterColor;
  strokeWidthRef.current = strokeWidth;

  const isGraph = pageTypes[currentPage] ?? (isGraphProp !== undefined ? isGraphProp : questionType === 'graph_sketch');

  // Controlled mode (ExamPrep): the parent drives the paper type via the
  // `isGraph` prop. Because pageTypes[currentPage] is always a defined boolean
  // (seeded at mount), it takes precedence in the `isGraph` derivation above and
  // the `?? isGraphProp` fallback never fires — so prop changes were silently
  // ignored and the Grid/Lined toggle did nothing. Sync the prop into the
  // current page's type so controlled toggling works again. Uncontrolled callers
  // (ChallengeSketchBoard) pass no prop, so this is a no-op for them.
  useEffect(() => {
    if (isGraphProp === undefined) return;
    setPageTypes(prev => {
      if (prev[currentPage] === isGraphProp) return prev;
      const next = [...prev];
      next[currentPage] = isGraphProp;
      return next;
    });
  }, [isGraphProp, currentPage]);

  // ─── Cached drawing contexts ──────────────────────────────────────────────
  // NOTE: `desynchronized: true` promotes each canvas to an opaque hardware
  // overlay plane on some devices, which makes the stacked lower canvases
  // render as a solid black rectangle (no alpha compositing). We keep alpha
  // compositing instead so the white pad background shows through.
  const getBgCtx = () => {
    if (!bgCtxRef.current && bgCanvasRef.current) {
      bgCtxRef.current = bgCanvasRef.current.getContext('2d', { alpha: true });
    }
    return bgCtxRef.current;
  };
  const getLiveCtx = () => {
    if (!liveCtxRef.current && liveCanvasRef.current) {
      liveCtxRef.current = liveCanvasRef.current.getContext('2d', { alpha: true });
    }
    return liveCtxRef.current;
  };
  const getTipCtx = () => {
    if (!tipCtxRef.current && displayCanvasRef.current) {
      tipCtxRef.current = displayCanvasRef.current.getContext('2d', { alpha: true });
    }
    return tipCtxRef.current;
  };

  const clearCanvas = (canvas, ctx) => {
    if (canvas && ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const cancelLiveRender = () => {
    if (rafIdRef.current) {
      cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = 0;
    }
  };

  // ─── Background: full replay (undo / page switch / resize) ────────────────
  const redrawBackground = useCallback(() => {
    const ctx = getBgCtx();
    const canvas = bgCanvasRef.current;
    if (!ctx || !canvas || canvas.width === 0) return;
    const dpr = backScaleRef.current;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const hidden = hiddenStrokesRef.current;
    strokesRef.current.forEach(s => { if (!hidden || !hidden.has(s)) replayStroke(ctx, s, dpr); });
    bgRenderedRef.current = strokesRef.current;
  }, []);

  // ─── Incremental live render ──────────────────────────────────────────────
  // Settled segments → live canvas (drawn once, never touched again).
  // Leading tip → tip canvas (cleared + redrawn every frame, +predicted).
  const flushLive = useCallback(() => {
    const stroke = currentStrokeRef.current;
    if (!stroke) return;
    const dpr = backScaleRef.current;
    const pts = stroke.points;

    if (stroke.isEraser) {
      drawEraserSegments(getBgCtx(), pts, liveDrawnIdxRef.current, stroke.width, dpr);
      liveDrawnIdxRef.current = pts.length;
      return;
    }

    if (stroke.shape) {
      clearCanvas(liveCanvasRef.current, getLiveCtx());
      clearCanvas(displayCanvasRef.current, getTipCtx());
      drawStroke(getLiveCtx(), stroke, dpr);
      liveDrawnIdxRef.current = pts.length;
      return;
    }

    drawPenSegments(getLiveCtx(), pts, liveDrawnIdxRef.current, stroke.color, dpr, false);
    liveDrawnIdxRef.current = pts.length;

    const tipCtx = getTipCtx();
    clearCanvas(displayCanvasRef.current, tipCtx);
    drawTip(tipCtx, stroke, dpr, predictedPtsRef.current);
  }, []);

  // ─── Lasso tool (select → move / copy / cut / paste / delete) ─────────────────────────────────
  const noticeRef = useRef(null);                        // set once the history label exists (flashHistory below)
  const pageKeyRef = useRef('');
  const padIdRef = useRef(`pad${Math.random().toString(36).slice(2, 7)}`);
  pageKeyRef.current = `${padIdRef.current}:${currentPage}`;
  const lasso = useLassoTool({
    activeTool, strokes, strokesRef, setStrokes, pushUndo, isSubmittedRef,
    displayCanvasRef, liveCanvasRef, getLiveCtx, getTipCtx,
    redrawBackground, hiddenStrokesRef, forceRedrawRef, backScaleRef, cssScaleRef,
    drawStroke, pageKeyRef, noticeRef, canvasWrapperRef,
  });

  // ─── Canvas sizing ────────────────────────────────────────────────────────
  // The canvases always cover the whole A4 page; only their resolution follows the zoom (bounded).
  useEffect(() => {
    const display = displayCanvasRef.current;
    const live = liveCanvasRef.current;
    const bg = bgCanvasRef.current;
    if (!display || !live || !bg) return;
    const newW = Math.round(PAGE_W * backScale);
    const newH = Math.round(PAGE_H * backScale);
    backScaleRef.current = backScale;
    [display, live, bg].forEach(c => {
      if (c.width !== newW || c.height !== newH) { c.width = newW; c.height = newH; }
    });
    redrawBackground();
  }, [backScale, redrawBackground]);

  // Measure the viewport (the pane the page sits in).
  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return undefined;
    const measure = (sync) => {
      const { width, height } = el.getBoundingClientRect();
      if (width === 0 || height === 0) return;
      const update = () => {
        const prev = viewSizeRef.current;
        if (pendingCentreRef.current) {
          setView(viewForCentre(pendingCentreRef.current, viewRef.current.zoom, { w: width, h: height }));
          pendingCentreRef.current = null;
        } else if (prev.w > 0 && (prev.w !== width || prev.h !== height) && viewRef.current.zoom > SNAP_ZOOM) {
          // Zoomed in and the pane changed size (rotation, split divider, toolbar): keep the same part of the page in the middle.
          const centre = pageCentre(viewRef.current, prev);
          setView(viewForCentre(centre, viewRef.current.zoom, { w: width, h: height }));
        }
        setViewSize((p) => (p.w === width && p.h === height ? p : { w: width, h: height }));
      };
      // flushSync from the observer: the page is rescaled in the same frame the pane changes size (no one-frame lag).
      if (sync) flushSync(update); else update();
    };
    measure(false);
    const ro = new ResizeObserver(() => measure(true));
    ro.observe(el);
    return () => ro.disconnect();
  }, [setView]);

  useEffect(() => {
    const body = document.body;
    const nextCount = Number(body.dataset[SKETCH_GUARD_COUNT] || 0) + 1;
    body.dataset[SKETCH_GUARD_COUNT] = String(nextCount);
    body.classList.add(SKETCH_GUARD_CLASS);

    const isEditableTarget = (target) =>
      target?.closest?.('input, textarea, select, option, [contenteditable="true"]');

    const isTapTarget = (target) =>
      target?.closest?.('button, a, label, [role="button"]');

    const isStylusTouch = (e) =>
      Array.from(e.touches || e.changedTouches || []).some(touch => touch.touchType === 'stylus');

    const blockSelectionMenu = (e) => {
      if (isEditableTarget(e.target)) return;
      e.preventDefault();
    };

    // Track whether the current touch sequence started on the drawing surface.
    // Toolbar taps and the question pane should remain free to scroll/tap.
    let touchStartedInCanvas = false;

    const isOnDrawingSurface = (target) =>
      displayCanvasRef.current?.contains(target);

    const resetTouchStart = () => {
      touchStartedInCanvas = false;
    };

    // Document-level touchstart: only track WHERE the touch began and block
    // touchstart defaults on the drawing surface (e.g. context menu, callout).
    // We intentionally do NOT add a document touchmove listener here — that
    // would force iOS Safari to wait for JS on every touchmove across the whole
    // page, breaking native scroll on sibling elements (e.g. the left column).
    const blockTouchStart = (e) => {
      if (e.type === 'touchstart') {
        touchStartedInCanvas = isOnDrawingSurface(e.target);
      }
      if (isEditableTarget(e.target)) return;
      if (!touchStartedInCanvas) return;
      if (isTapTarget(e.target) && !isStylusTouch(e)) return;
      e.preventDefault();
    };

    // Canvas-wrapper-level touchmove: only touches that started inside the
    // canvas wrapper bubble through here, so we can safely call preventDefault
    // without blocking scroll on any other part of the page.
    const blockCanvasScroll = (e) => {
      if (isEditableTarget(e.target)) return;
      // The toolbar lives inside this wrapper too. An Apple Pencil sends touchmove events even during a plain tap,
      // and a prevented touchmove makes Safari drop the click — so buttons only ever worked with a finger.
      if (isTapTarget(e.target)) return;
      e.preventDefault();
    };

    const wrapper = canvasWrapperRef.current;

    document.addEventListener('selectstart', blockSelectionMenu, { capture: true });
    document.addEventListener('contextmenu', blockSelectionMenu, { capture: true });
    document.addEventListener('touchstart', blockTouchStart, { capture: true, passive: false });
    document.addEventListener('touchend', resetTouchStart, { capture: true, passive: true });
    document.addEventListener('touchcancel', resetTouchStart, { capture: true, passive: true });
    if (wrapper) {
      wrapper.addEventListener('touchmove', blockCanvasScroll, { passive: false });
      wrapper.addEventListener('gesturestart', blockCanvasScroll, { passive: false });
    }

    return () => {
      document.removeEventListener('selectstart', blockSelectionMenu, { capture: true });
      document.removeEventListener('contextmenu', blockSelectionMenu, { capture: true });
      document.removeEventListener('touchstart', blockTouchStart, { capture: true });
      document.removeEventListener('touchend', resetTouchStart, { capture: true });
      document.removeEventListener('touchcancel', resetTouchStart, { capture: true });
      if (wrapper) {
        wrapper.removeEventListener('touchmove', blockCanvasScroll);
        wrapper.removeEventListener('gesturestart', blockCanvasScroll);
      }
      const count = Math.max(0, Number(body.dataset[SKETCH_GUARD_COUNT] || 1) - 1);
      if (count === 0) {
        delete body.dataset[SKETCH_GUARD_COUNT];
        body.classList.remove(SKETCH_GUARD_CLASS);
      } else {
        body.dataset[SKETCH_GUARD_COUNT] = String(count);
      }
    };
  }, []);

  // Background redraws only on non-append changes (undo / clear / page switch).
  useEffect(() => {
    const prev = bgRenderedRef.current;
    const isAppend =
      strokes.length === prev.length + 1 &&
      prev.every((s, i) => s === strokes[i]);
    if (!isAppend || forceRedrawRef.current) redrawBackground();
    forceRedrawRef.current = false;
    bgRenderedRef.current = strokes;
  }, [strokes, redrawBackground]);

  // Notify parent when current page type changes (page switch or type toggle).
  const onPageChangeRef = useRef(onPageChange);
  onPageChangeRef.current = onPageChange;
  useEffect(() => {
    onPageChangeRef.current?.();
  }, [currentPage, pageTypes]);

  // ─── Native pointer listeners (non-passive → preventDefault works) ────────
  useEffect(() => {
    const canvas = displayCanvasRef.current;
    if (!canvas) return;
    const win = canvas.ownerDocument?.defaultView || window;
    const down = (e) => handlersRef.current.onPointerDown(e);
    const move = (e) => handlersRef.current.onPointerMove(e);
    const up   = (e) => handlersRef.current.onPointerUp(e);
    const cancel = (e) => handlersRef.current.onPointerCancel(e);
    canvas.addEventListener('pointerdown',   down, { passive: false });
    win.addEventListener('pointermove',      move, { passive: false });
    win.addEventListener('pointerrawupdate', move, { passive: false });
    win.addEventListener('pointerup',        up,   { passive: false });
    win.addEventListener('pointercancel',    cancel, { passive: false });
    win.addEventListener('blur',             cancel);
    return () => {
      canvas.removeEventListener('pointerdown',   down);
      win.removeEventListener('pointermove',      move);
      win.removeEventListener('pointerrawupdate', move);
      win.removeEventListener('pointerup',        up);
      win.removeEventListener('pointercancel',    cancel);
      win.removeEventListener('blur',             cancel);
    };
  }, []);

  // ─── Width model: pen → pressure, finger/mouse → velocity ─────────────────
  const widthFor = (stroke, pressure, velocity) => {
    if (stroke.isEraser) return stroke.width;
    const baseW = stroke.width * 1.25;
    if (stroke.penStyle === 'highlighter') return baseW * 2.4;
    if (stroke.penStyle === 'ballpoint' || stroke.shape) return baseW;
    let target;
    if (stroke.hasRealPressure) {
      target = baseW * (0.55 + Math.min(1, pressure) * 1.1);
    } else {
      const f = Math.max(0.6, Math.min(1.3, 1.3 - velocity * 0.14));
      target = baseW * f;
    }
    smoothWRef.current = smoothWRef.current * 0.55 + target * 0.45;
    return smoothWRef.current;
  };

  const appendPointerSamples = (e, { minDistSq = MIN_DIST_SQ } = {}) => {
    const rect = rectRef.current;
    const stroke = currentStrokeRef.current;
    if (!rect || !stroke) return false;
    if (stroke.shape) {
      const x = (e.clientX - rect.left) * rect.sx;
      const y = (e.clientY - rect.top) * rect.sy;
      let end = { x, y };
      let start = stroke.start;
      if (stroke.holdScale) {
        // a rectangle / ellipse made by holding: it grows and shrinks about its centre as the pen moves in and out
        const h = stroke.holdScale;
        const k = Math.max(0.2, Math.hypot(x - h.cx, y - h.cy) / h.d0);
        start = { x: h.cx - h.rx * k, y: h.cy - h.ry * k };
        end = { x: h.cx + h.rx * k, y: h.cy + h.ry * k };
      } else if (stroke.holdLine) {
        // a line made by holding snaps to every 15° when the pen is close to it
        const ang = Math.atan2(y - start.y, x - start.x);
        const r = Math.hypot(x - start.x, y - start.y);
        const snapped = snapAngle(ang);
        end = { x: start.x + Math.cos(snapped) * r, y: start.y + Math.sin(snapped) * r };
      }
      stroke.points = makeShapePoints(stroke.shape, start, end, stroke.width);
      return true;
    }
    const pts = stroke.points;
    const events = (typeof e.getCoalescedEvents === 'function' && e.getCoalescedEvents().length)
      ? e.getCoalescedEvents()
      : [e];
    let appended = false;

    for (const ev of events) {
      const sampleTime = ev.timeStamp || e.timeStamp || performance.now();
      const lastSample = lastSampleRef.current;
      if (sampleTime + 0.5 < lastSample.t) continue;

      const x = (ev.clientX - rect.left) * rect.sx;
      const y = (ev.clientY - rect.top) * rect.sy;
      const last = pts[pts.length - 1];
      const dx = x - last[0], dy = y - last[1];
      const distSq = dx * dx + dy * dy;
      if (distSq < minDistSq) continue;

      const dt = Math.max(1, sampleTime - lastSample.t);
      const velocity = Math.sqrt(distSq) / dt;
      const pressure = ev.pressure > 0 ? ev.pressure : 0.5;
      const w = widthFor(stroke, pressure, velocity);

      pts.push([x, y, w]);
      lastSampleRef.current = { x, y, t: sampleTime };
      appended = true;
    }

    return appended;
  };

  // ─── Stroke-eraser: scrub the pen across strokes to remove each one it touches ───
  // The whole scrub is one undo step. `current` is tracked here because strokesRef
  // only catches up on the next render.
  const eraseStrokesTo = (from, to) => {
    const gesture = strokeEraseRef.current;
    if (!gesture) return;
    const next = eraseStrokesAlong(gesture.current, from, to, STROKE_ERASE_RADIUS / Math.max(0.3, cssScaleRef.current));
    if (next !== gesture.current) {
      gesture.current = next;
      strokesRef.current = next;
      setStrokes(next);
    }
  };

  const finishStrokeErase = (e) => {
    const gesture = strokeEraseRef.current;
    if (!gesture || (e?.pointerId != null && e.pointerId !== gesture.pointerId)) return false;
    strokeEraseRef.current = null;
    try { displayCanvasRef.current?.releasePointerCapture?.(gesture.pointerId); } catch { /* already released */ }
    if (gesture.current !== gesture.base) pushUndo(gesture.base);
    return true;
  };

  // Discard an in-progress stroke without committing (used when a pen press
  // preempts a stray palm/touch stroke).
  const clearHold = () => { window.clearTimeout(holdRef.current.timer); holdRef.current.timer = 0; holdRef.current.stroke = null; };

  // Draw and hold: the pen rests at the end of a stroke → it turns into the straight line / rectangle / ellipse it
  // was aiming for (if it clearly was one); keep dragging to resize it. The result is one ordinary stroke (one undo).
  const snapHeldStroke = (stroke) => {
    holdRef.current.timer = 0;
    if (currentStrokeRef.current !== stroke || !isDrawingRef.current || stroke.shape || stroke.isEraser) return;
    const found = recognizeShape(stroke.points);
    if (!found) return;
    const pen = stroke.points[stroke.points.length - 1];
    const { start, end } = found;
    stroke.shape = found.shape;
    stroke.start = start;
    stroke.hasRealPressure = false;
    if (found.shape === 'line') {
      stroke.holdLine = true;
    } else {
      const cx = (start.x + end.x) / 2; const cy = (start.y + end.y) / 2;
      stroke.holdScale = { cx, cy, rx: Math.abs(end.x - start.x) / 2, ry: Math.abs(end.y - start.y) / 2, d0: Math.max(1, Math.hypot(pen[0] - cx, pen[1] - cy)) };
    }
    stroke.points = makeShapePoints(found.shape, start, end, stroke.width);
    flushLive();
    if (navigator.vibrate) { try { navigator.vibrate(8); } catch { /* not supported */ } }
  };
  const armHold = (stroke, clientX, clientY) => {
    window.clearTimeout(holdRef.current.timer);
    holdRef.current.stroke = stroke;
    holdRef.current.x = clientX; holdRef.current.y = clientY;
    holdRef.current.timer = window.setTimeout(() => snapHeldStroke(stroke), HOLD_MS);
  };

  const discardCurrentStroke = () => {
    clearHold();
    cancelLiveRender();
    currentStrokeRef.current = null;
    isDrawingRef.current = false;
    activePointerIdRef.current = null;
    predictedPtsRef.current = [];
    clearCanvas(liveCanvasRef.current, getLiveCtx());
    clearCanvas(displayCanvasRef.current, getTipCtx());
  };

  // Commit a stroke: draw it onto the bg, clear overlays, push to state.
  const finalizeStroke = (stroke, finalE) => {
    if (!stroke) return;
    clearHold();
    cancelLiveRender();
    const dpr = backScaleRef.current;
    // Capture the genuine final point so quick taps / short flicks never vanish.
    const rect = rectRef.current;
    if (finalE && !stroke.shape && rect && typeof finalE.clientX === 'number') {
      const x = (finalE.clientX - rect.left) * rect.sx;
      const y = (finalE.clientY - rect.top) * rect.sy;
      const pts = stroke.points;
      const last = pts[pts.length - 1];
      const dx = x - last[0], dy = y - last[1];
      if (dx * dx + dy * dy >= 0.25) pts.push([x, y, last[2]]);
    }
    stroke.completed = true;
    delete stroke.holdScale; delete stroke.holdLine;   // only needed while the pen is still down
    // Scribble-to-erase (opt-in, Settings): a dense zigzag over existing ink erases that ink instead of adding a stroke.
    if (!stroke.isEraser && isScribbleEraseOn()) {
      const hits = scribbleTargets(stroke.points, strokesRef.current);
      if (hits.length > 0) {
        const before = strokesRef.current;
        const drop = new Set(hits);
        const after = before.filter((_, i) => !drop.has(i));
        strokesRef.current = after;
        clearCanvas(liveCanvasRef.current, getLiveCtx());
        clearCanvas(displayCanvasRef.current, getTipCtx());
        pushUndo(before);
        setStrokes(after);   // not an append → the background is repainted without the erased strokes
        return;
      }
    }
    if (stroke.isEraser) {
      drawEraserSegments(getBgCtx(), stroke.points, liveDrawnIdxRef.current, stroke.width, dpr);
    } else {
      // Commit to bg FIRST, then clear the live + tip overlays → zero flash.
      drawStroke(getBgCtx(), stroke, dpr, true);
      clearCanvas(liveCanvasRef.current, getLiveCtx());
      clearCanvas(displayCanvasRef.current, getTipCtx());
    }
    const before = strokesRef.current;
    const after = [...before, stroke];
    strokesRef.current = after; // so a page change right after this stroke keeps it
    pushUndo(before);
    setStrokes(after);
  };

  // ─── Pointer handlers ─────────────────────────────────────────────────────
  const onPointerDown = (e) => {
    // Suppress the OS gesture (text-selection / Copy-Paste callout) for ANY
    // touch on the canvas — including a rejected palm rest, which would
    // otherwise pop up the edit menu while a student writes with the pen.
    if (e.cancelable !== false) e.preventDefault();
    if (isSubmittedRef.current) return;
    const canvas = displayCanvasRef.current;
    if (!canvas) return;

    const isPen = e.pointerType === 'pen';
    const isTouch = e.pointerType === 'touch';

    // First pen/stylus contact → auto-enable palm rejection.
    if (isPen && !penSeenRef.current) {
      penSeenRef.current = true;
      setPalmGuard(true);
    }
    // Palm rejection: ignore finger input once a pen is in use (or toggled on).
    if (isTouch && (palmGuardRef.current || penSeenRef.current)) return;

    // Resolve any still-active stroke before starting a new one.
    if (isDrawingRef.current && currentStrokeRef.current) {
      const cur = currentStrokeRef.current;
      if (isPen) {
        // A pen press ALWAYS wins. Commit a stray pen stroke (missed pointerup),
        // discard a touch stroke (palm). The new pen stroke is never dropped.
        if (cur.hasRealPressure) {
          isDrawingRef.current = false;
          currentStrokeRef.current = null;
          finalizeStroke(cur, null);
        } else {
          discardCurrentStroke();
        }
      } else {
        return; // genuine secondary finger → ignore
      }
    }

    e.preventDefault();
    const rect = snapRect(canvas);
    rectRef.current = rect;
    const pt = { x: (e.clientX - rect.left) * rect.sx, y: (e.clientY - rect.top) * rect.sy };

    try {
      canvas.setPointerCapture(e.pointerId);
    } catch (err) {
      console.debug('Pointer capture unavailable for working-out canvas:', err);
    }
    activePointerIdRef.current = e.pointerId;

    const canceled = canceledPenStrokeRef.current;
    if (
      isPen &&
      canceled &&
      e.timeStamp - canceled.t < 180 &&
      canceled.stroke &&
      !canceled.stroke.isEraser
    ) {
      canceledPenStrokeRef.current = null;
      currentStrokeRef.current = canceled.stroke;
      isDrawingRef.current = true;
      liveDrawnIdxRef.current = canceled.liveDrawnIdx;
      predictedPtsRef.current = [];
      lastSampleRef.current = canceled.lastSample;
      appendPointerSamples(e, { minDistSq: 0.25 });
      flushLive();
      return;
    }
    if (canceled?.stroke) {
      const pending = canceled.stroke;
      canceledPenStrokeRef.current = null;
      if (currentStrokeRef.current === pending) currentStrokeRef.current = null;
      finalizeStroke(pending, null);
    }
    canceledPenStrokeRef.current = null;

    if (activeToolRef.current === 'lasso') {
      lasso.begin(e, rect);
      activePointerIdRef.current = null;
      return;
    }

    if (activeToolRef.current === 'eraser' && eraserModeRef.current === 'stroke') {
      strokeEraseRef.current = { pointerId: e.pointerId, last: pt, base: strokesRef.current, current: strokesRef.current };
      eraseStrokesTo(pt, pt);
      activePointerIdRef.current = null;
      return;
    }

    const activeTool = activeToolRef.current;
    const isEraser = activeTool === 'eraser';
    const shape = ['line', 'rectangle', 'circle'].includes(activeTool) ? activeTool : null;
    const penStyle = activeTool === 'ballpoint' || activeTool === 'highlighter' ? activeTool : 'standard';
    const hasRealPressure = isPen && activeTool === 'pen';
    const stroke = {
      points: [],
      color: activeTool === 'highlighter' ? highlighterColorRef.current : strokeColorRef.current,
      width: strokeWidthRef.current,
      isEraser,
      penStyle,
      shape,
      start: shape ? pt : null,
      hasRealPressure,
      completed: false,
    };
    const pressure = hasRealPressure && e.pressure > 0 ? e.pressure : 0.5;
    smoothWRef.current = strokeWidthRef.current * 1.25 * (isEraser ? 1 : (0.55 + pressure * 1.1));
    stroke.points = shape
      ? makeShapePoints(shape, pt, pt, strokeWidthRef.current)
      : [[pt.x, pt.y, widthFor(stroke, pressure, 0)]];

    isDrawingRef.current = true;
    liveDrawnIdxRef.current = 1;
    predictedPtsRef.current = [];
    lastSampleRef.current = { x: pt.x, y: pt.y, t: e.timeStamp };
    currentStrokeRef.current = stroke;
    if (!isTouch && !shape && !isEraser && penStyle !== 'highlighter' && isHoldToShapeOn()) armHold(stroke, e.clientX, e.clientY);
  };

  const onPointerMove = (e) => {
    if (lasso.isActive(e.pointerId)) {
      if (e.cancelable !== false) e.preventDefault();
      lasso.move(e);
      return;
    }
    const erase = strokeEraseRef.current;
    if (erase && e.pointerId === erase.pointerId) {
      if (e.cancelable !== false) e.preventDefault();
      const events = (typeof e.getCoalescedEvents === 'function' && e.getCoalescedEvents().length) ? e.getCoalescedEvents() : [e];
      const origin = rectRef.current;
      if (!origin) return;
      for (const ev of events) {
        const point = { x: (ev.clientX - origin.left) * origin.sx, y: (ev.clientY - origin.top) * origin.sy };
        eraseStrokesTo(erase.last, point);
        erase.last = point;
      }
      return;
    }
    const isActivePointer =
      isDrawingRef.current &&
      currentStrokeRef.current &&
      e.pointerId === activePointerIdRef.current;
    // isRejectedPalm: only block palm touches that are inside the canvas itself,
    // NOT touches on the answer input or other page elements. Calling
    // preventDefault on moves outside the canvas blocks iOS soft-keyboard focus.
    const isRejectedPalm = e.pointerType === 'touch' && (palmGuardRef.current || penSeenRef.current)
      && displayCanvasRef.current?.contains(e.target);
    if ((isActivePointer || isRejectedPalm) && e.cancelable !== false) e.preventDefault();
    if (!isActivePointer) return;

    const rect = rectRef.current;
    if (!rect) return;
    const appended = appendPointerSamples(e);
    // Draw and hold: the timer restarts whenever the pen has moved noticeably since it last rested.
    if (holdRef.current.stroke && !holdRef.current.stroke.shape && Math.hypot(e.clientX - holdRef.current.x, e.clientY - holdRef.current.y) > HOLD_MOVE) {
      armHold(holdRef.current.stroke, e.clientX, e.clientY);
    }

    // Predicted points — extend the tip ahead of the pointer to hide latency.
    if (typeof e.getPredictedEvents === 'function') {
      const pred = e.getPredictedEvents();
      predictedPtsRef.current = pred.map(ev => [(ev.clientX - rect.left) * rect.sx, (ev.clientY - rect.top) * rect.sy]);
    } else {
      predictedPtsRef.current = [];
    }

    // Render on the next animation frame instead of synchronously inside the
    // pointer handler. This keeps the input handler short so iPadOS does not
    // throttle/drop pointer events during fast writing — coalesced events
    // still capture every sample, the screen just repaints once per frame.
    if ((appended || predictedPtsRef.current.length > 0) && !rafIdRef.current) {
      rafIdRef.current = requestAnimationFrame(() => {
        rafIdRef.current = 0;
        flushLive();
      });
    }
  };

  const onPointerUp = (e) => {
    if (lasso.end(e)) {
      try { displayCanvasRef.current?.releasePointerCapture?.(e.pointerId); } catch { /* already released */ }
      if (e.cancelable !== false) e.preventDefault();
      return;
    }
    if (finishStrokeErase(e)) { if (e.cancelable !== false) e.preventDefault(); return; }
    if (!isDrawingRef.current || !currentStrokeRef.current) return;
    if (e.pointerId != null && e.pointerId !== activePointerIdRef.current) return;

    if (e.cancelable !== false) e.preventDefault();
    appendPointerSamples(e, { minDistSq: 0.25 });
    canceledPenStrokeRef.current = null;
    isDrawingRef.current = false;
    activePointerIdRef.current = null;
    predictedPtsRef.current = [];
    const stroke = currentStrokeRef.current;
    currentStrokeRef.current = null;
    try {
      displayCanvasRef.current?.releasePointerCapture?.(e.pointerId);
    } catch (err) {
      console.debug('Pointer capture release skipped for working-out canvas:', err);
    }
    finalizeStroke(stroke, e);
  };

  const onPointerCancel = (e) => {
    if (lasso.cancel(e)) return;
    if (finishStrokeErase(e)) return;
    if (!isDrawingRef.current || !currentStrokeRef.current) return;
    if (e?.pointerId != null && e.pointerId !== activePointerIdRef.current) return;
    if (e?.cancelable !== false) e?.preventDefault?.();

    const stroke = currentStrokeRef.current;
    const wasPenStroke = stroke.hasRealPressure && !stroke.isEraser;

    if (wasPenStroke) {
      canceledPenStrokeRef.current = {
        stroke,
        t: e?.timeStamp || performance.now(),
        liveDrawnIdx: liveDrawnIdxRef.current,
        lastSample: lastSampleRef.current,
      };
      predictedPtsRef.current = [];
      isDrawingRef.current = false;
      activePointerIdRef.current = null;
      currentStrokeRef.current = stroke;
      setTimeout(() => {
        if (canceledPenStrokeRef.current?.stroke === stroke) {
          const pending = canceledPenStrokeRef.current.stroke;
          canceledPenStrokeRef.current = null;
          currentStrokeRef.current = null;
          finalizeStroke(pending, null);
        }
      }, 220);
      return;
    }

    isDrawingRef.current = false;
    activePointerIdRef.current = null;
    predictedPtsRef.current = [];
    currentStrokeRef.current = null;
    try {
      displayCanvasRef.current?.releasePointerCapture?.(e?.pointerId);
    } catch (err) {
      console.debug('Pointer capture release skipped for working-out canvas:', err);
    }
    finalizeStroke(stroke, null);
  };

  handlersRef.current = { onPointerDown, onPointerMove, onPointerUp, onPointerCancel };

  // Both return whether anything changed (the finger-tap path only flashes a label when it did).
  const handleUndo = () => {
    if (!undoStack.length) return false;
    const prev = undoStack[undoStack.length - 1];
    const current = strokesRef.current;   // read before it is replaced: the updaters below run later
    setRedoStack(r => [...r, current]);
    setUndoStack(u => u.slice(0, -1));
    strokesRef.current = prev;
    setStrokes(prev);
    return true;
  };

  const handleRedo = () => {
    if (!redoStack.length) return false;
    const next = redoStack[redoStack.length - 1];
    const current = strokesRef.current;
    setUndoStack(u => [...u, current]);
    setRedoStack(r => r.slice(0, -1));
    // Redoing one stroke looks like an append (length + 1, same prefix), and appends skip the redraw
    // because a live stroke is already on screen. This one is not, so force it.
    forceRedrawRef.current = true;
    strokesRef.current = next;
    setStrokes(next);
    return true;
  };

  // Two-finger tap = undo, three-finger tap = redo: a small "Undo" / "Redo" label flashes on the pad so an
  // accidental tap is noticed.
  const [historyFlash, setHistoryFlash] = useState(null);   // { label, id } | null
  const historyFlashTimerRef = useRef(0);
  const flashHistory = (label) => {
    window.clearTimeout(historyFlashTimerRef.current);
    setHistoryFlash({ label, id: Date.now() });
    historyFlashTimerRef.current = window.setTimeout(() => setHistoryFlash(null), 650);
  };
  useEffect(() => () => window.clearTimeout(historyFlashTimerRef.current), []);
  noticeRef.current = flashHistory;

  // Keyboard (iPad keyboard / laptop): ⌘Z / Ctrl+Z undo, ⇧⌘Z / Ctrl+Y redo — not while typing in a field.
  const historyKeysRef = useRef({});
  historyKeysRef.current = {
    undo: handleUndo,
    redo: handleRedo,
    tap: (action) => {
      const done = action === 'undo' ? handleUndo() : handleRedo();
      if (done) flashHistory(action === 'undo' ? 'Undo' : 'Redo');
    },
  };
  useEffect(() => {
    const onKey = (e) => {
      if (!(e.metaKey || e.ctrlKey) || e.altKey) return;
      const wrapper = canvasWrapperRef.current;
      if (!wrapper || wrapper.offsetParent === null) return;     // this pad is not on screen
      if (e.target?.closest?.('input, textarea, select, [contenteditable="true"]')) return;
      const key = String(e.key).toLowerCase();
      if (key === 'z' && !e.shiftKey) { e.preventDefault(); historyKeysRef.current.undo(); }
      else if ((key === 'z' && e.shiftKey) || key === 'y') { e.preventDefault(); historyKeysRef.current.redo(); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const handleClear = () => {
    if (!confirmClear) { setConfirmClear(true); return; }
    setConfirmClear(false);
    pushUndo(strokesRef.current);
    setStrokes([]);
  };

  const addPage = () => {
    const all = [...pagesRef.current];
    if (maxPages > 0 && all.length >= maxPages) return;
    all[currentPageRef.current] = strokesRef.current;
    all.push([]);
    const idx = all.length - 1;
    pagesRef.current = all;
    currentPageRef.current = idx;
    strokesRef.current = [];
    setPages(all);
    setPageTypes(prev => [...prev, false]);
    setCurrentPage(idx);
    setStrokes([]);
    resetHistory();
  };

  const goToPage = (idx) => {
    const all = [...pagesRef.current];
    const cur = currentPageRef.current;
    if (idx < 0 || idx >= all.length || idx === cur) return;
    all[cur] = strokesRef.current;
    pagesRef.current = all;
    currentPageRef.current = idx;
    strokesRef.current = all[idx] || [];
    setPages(all);
    setCurrentPage(idx);
    forceRedrawRef.current = true;
    setStrokes(all[idx] || []);
    resetHistory();
  };

  // Keep latest page-nav actions for the gesture listener (stable mount effect).
  const pageNavRef = useRef({
    currentPage: () => 0,
    pageCount: () => 1,
    currentHasInk: () => false,
    isSubmitted: false,
    addPage: () => {},
    goToPage: () => {},
    discardStroke: () => {},
  });
  pageNavRef.current = {
    currentPage: () => currentPageRef.current,
    pageCount: () => pagesRef.current.length,
    currentHasInk: () => pageHasInk(strokesRef.current),
    isSubmitted: !!isSubmitted,
    addPage,
    goToPage,
    discardStroke: discardCurrentStroke,
  };

  // Two-finger vertical swipe (or trackpad wheel) → page change.
  // Used on Exam Prep, Challenge, Secret Note, Topic practice — all share this canvas.
  // Swipe fingers up / scroll down → next page (create if at end).
  // Swipe fingers down / scroll up → previous page.
  // Capture-phase + multi-pointer tracking so parent scroll views (e.g. Secret Note)
  // do not steal the gesture before we see it.
  useEffect(() => {
    const wrapper = canvasWrapperRef.current;
    if (!wrapper) return undefined;

    const WHEEL_PX = 80;
    let gesture = null; // see gestureStart
    let wheelAcc = 0;
    let wheelResetTimer = 0;
    // pointerId → { x, y } for touch pointers that began on this board
    const activeTouches = new Map();
    let boardActive = false; // at least one touch/pointer started inside wrapper

    const isInsideBoard = (target) =>
      !!(target && (wrapper === target || wrapper.contains(target)));

    // One page per swipe / scroll burst: trackpad momentum keeps sending wheel events.
    const NAV_COOLDOWN_MS = 450;
    let lastNavAt = 0;
    const coolingDown = () => performance.now() - lastNavAt < NAV_COOLDOWN_MS;

    const goNext = () => {
      const nav = pageNavRef.current;
      if (nav.isSubmitted || coolingDown()) return;
      const page = nav.currentPage();
      if (page < nav.pageCount() - 1) {
        nav.discardStroke?.();
        nav.goToPage(page + 1);
      } else {
        // Past the last page: a new page only after something was written on this one.
        if (!nav.currentHasInk()) return;
        nav.discardStroke?.();
        nav.addPage();
      }
      lastNavAt = performance.now();
    };

    const goPrev = () => {
      const nav = pageNavRef.current;
      if (nav.isSubmitted || coolingDown()) return;
      const page = nav.currentPage();
      if (page <= 0) return;
      nav.discardStroke?.();
      nav.goToPage(page - 1);
      lastNavAt = performance.now();
    };

    // ── Two-finger gestures ─────────────────────────────────────────────
    // Fit zoom: a vertical slide changes page, pinching zooms. Zoomed in: pinch zooms, sliding pans.
    // `gesture` = { mode: null | 'nav' | 'zoom', x0, y0, d0, base, fired }. Points are client coords.
    const centroidOf = (pts) => ({
      x: pts.reduce((sum, p) => sum + p.x, 0) / pts.length,
      y: pts.reduce((sum, p) => sum + p.y, 0) / pts.length,
    });
    const distanceOf = (pts) => Math.max(1, Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y));
    const touchPoints = (touchList) => Array.from(touchList, (t) => ({ x: t.clientX, y: t.clientY }));
    const viewportOrigin = () => {
      const r = viewportRef.current?.getBoundingClientRect();
      return r ? { x: r.left, y: r.top } : { x: 0, y: 0 };
    };

    const gestureStart = (pts) => {
      const c = centroidOf(pts);
      gesture = { mode: null, x0: c.x, y0: c.y, d0: distanceOf(pts), base: { zoom: viewRef.current.zoom, pos: pagePosRef.current }, fired: false };
      pageNavRef.current.discardStroke?.();
    };

    const gestureMove = (pts) => {
      if (!gesture || pts.length < 2) return;
      const c = centroidOf(pts);
      const ratio = distanceOf(pts) / gesture.d0;
      const dy = c.y - gesture.y0;
      if (!gesture.mode) gesture.mode = classifyTwoFinger({ zoom: gesture.base.zoom, ratio, dy });
      if (gesture.mode === 'nav') {
        if (!gesture.fired) {
          gesture.fired = true;
          if (dy < 0) goNext(); else goPrev();
        }
      } else if (gesture.mode === 'zoom') {
        const o = viewportOrigin();
        zoomTo(gesture.base.zoom * ratio, { x: gesture.x0 - o.x, y: gesture.y0 - o.y }, gesture.base, { x: c.x - gesture.x0, y: c.y - gesture.y0 });
      }
    };

    // ── Finger taps: two = undo, three = redo (see classifyMultiTap) ────
    // One record per touch sequence (first finger down → last finger up). Touch events only: they carry
    // touchType, so an Apple Pencil touch anywhere in the sequence cancels it.
    let tap = null; // { t0, starts: Map(identifier → {x, y}), fingers, maxMove, stylus }
    const tapMoved = (touchList) => {
      if (!tap) return;
      for (const t of touchList) {
        const s = tap.starts.get(t.identifier);
        if (s) tap.maxMove = Math.max(tap.maxMove, Math.hypot(t.clientX - s.x, t.clientY - s.y));
      }
    };
    const tapStart = (e) => {
      // Every finger on the screen is new → a new sequence, even if the last one's touchend never reached us
      // (its target left the DOM, or the touch ended outside the pad). A stale record would otherwise keep an
      // old start time and no tap could ever be short enough again.
      if (!tap || e.touches.length === e.changedTouches.length) tap = { t0: performance.now(), starts: new Map(), fingers: 0, maxMove: 0, stylus: false };
      for (const t of e.changedTouches) {
        tap.starts.set(t.identifier, { x: t.clientX, y: t.clientY });
        if (t.touchType === 'stylus') tap.stylus = true;
      }
      tap.fingers = Math.max(tap.fingers, e.touches.length);
    };
    const tapEnd = (e) => {
      if (!tap) return;
      tapMoved(e.changedTouches);
      if (e.type === 'touchcancel') tap.stylus = true;   // the system took the touches: never act on it
      if (e.touches.length > 0) return;
      const action = classifyMultiTap({ fingers: tap.fingers, durationMs: performance.now() - tap.t0, maxMovePx: tap.maxMove, stylus: tap.stylus });
      tap = null;
      if (action && !pageNavRef.current.isSubmitted) historyKeysRef.current.tap?.(action);
    };

    // ── Touch path (iPad / phones) ──────────────────────────────────────
    const onTouchStart = (e) => {
      if (!isInsideBoard(e.target) && !boardActive) return;
      // Count touches that are over our board (or already tracked).
      if (isInsideBoard(e.target) || e.touches.length >= 2) boardActive = true;
      if (!boardActive) return;
      tapStart(e);

      if (e.touches.length >= 2) {
        gestureStart(touchPoints(e.touches));
        // Stop parent scroll containers (Secret Note left column, etc.)
        if (e.cancelable !== false) e.preventDefault();
      }
    };

    const onTouchMove = (e) => {
      if (boardActive) tapMoved(e.changedTouches);
      if (!boardActive || !gesture || e.touches.length < 2) return;
      if (e.cancelable !== false) e.preventDefault();
      gestureMove(touchPoints(e.touches));
    };

    const onTouchEnd = (e) => {
      if (e.touches.length < 2) {
        gesture = null;
      }
      if (e.touches.length === 0) boardActive = false;
    };

    // ── Pointer path (when first finger is pointer-captured on canvas,
    // touch events can be flaky — track multi-touch via pointers too) ───
    const onPointerDown = (e) => {
      if (e.pointerType !== 'touch') return;
      if (!isInsideBoard(e.target)) return;
      boardActive = true;
      activeTouches.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (activeTouches.size >= 2) gestureStart([...activeTouches.values()]);
    };

    const onPointerMove = (e) => {
      if (e.pointerType !== 'touch') return;
      if (!activeTouches.has(e.pointerId)) return;
      activeTouches.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (activeTouches.size < 2 || !gesture) return;
      if (e.cancelable !== false) e.preventDefault();
      gestureMove([...activeTouches.values()]);
    };

    const onPointerUp = (e) => {
      if (e.pointerType !== 'touch') return;
      activeTouches.delete(e.pointerId);
      if (activeTouches.size < 2) {
        gesture = null;
      }
      if (activeTouches.size === 0) boardActive = false;
    };

    // Trackpad: pinch arrives as ctrl+wheel (zoom); a plain scroll pans when zoomed, else changes page.
    const onWheel = (e) => {
      if (e.target?.closest?.('button, select')) return;
      if (!isInsideBoard(e.target)) return;
      if (pageNavRef.current.isSubmitted) return;
      if (e.cancelable !== false) e.preventDefault();
      if (e.ctrlKey) {
        const o = viewportOrigin();
        zoomTo(viewRef.current.zoom * Math.exp(-e.deltaY * 0.01), { x: e.clientX - o.x, y: e.clientY - o.y });
        return;
      }
      if (viewRef.current.zoom > SNAP_ZOOM) {
        const vs = viewSizeRef.current;
        const f = fitScale(vs.w, vs.h);
        const cur = viewRef.current;
        const pos = pagePosRef.current;
        setView({ zoom: cur.zoom, pos: clampPos({ x: pos.x - e.deltaX, y: pos.y - e.deltaY }, f * cur.zoom, vs.w, vs.h) });
        return;
      }
      wheelAcc += e.deltaY;
      if (wheelAcc >= WHEEL_PX) {
        wheelAcc = 0;
        goNext();
      } else if (wheelAcc <= -WHEEL_PX) {
        wheelAcc = 0;
        goPrev();
      }
      window.clearTimeout(wheelResetTimer);
      wheelResetTimer = window.setTimeout(() => { wheelAcc = 0; }, 220);
    };

    const touchOpts = { capture: true, passive: false };
    const touchEndOpts = { capture: true, passive: true };

    // Capture on wrapper so we win against parent overflow scroll (Secret Note).
    wrapper.addEventListener('touchstart', onTouchStart, touchOpts);
    wrapper.addEventListener('touchmove', onTouchMove, touchOpts);
    wrapper.addEventListener('touchend', onTouchEnd, touchEndOpts);
    wrapper.addEventListener('touchcancel', onTouchEnd, touchEndOpts);
    // Tap ends on window: a lift whose target left the pad (or the DOM) still finishes the sequence.
    window.addEventListener('touchend', tapEnd, touchEndOpts);
    window.addEventListener('touchcancel', tapEnd, touchEndOpts);
    wrapper.addEventListener('wheel', onWheel, { capture: true, passive: false });
    // Window-level pointer tracking: first finger may have setPointerCapture on canvas.
    window.addEventListener('pointerdown', onPointerDown, true);
    window.addEventListener('pointermove', onPointerMove, true);
    window.addEventListener('pointerup', onPointerUp, true);
    window.addEventListener('pointercancel', onPointerUp, true);

    return () => {
      wrapper.removeEventListener('touchstart', onTouchStart, true);
      wrapper.removeEventListener('touchmove', onTouchMove, true);
      wrapper.removeEventListener('touchend', onTouchEnd, true);
      wrapper.removeEventListener('touchcancel', onTouchEnd, true);
      window.removeEventListener('touchend', tapEnd, true);
      window.removeEventListener('touchcancel', tapEnd, true);
      wrapper.removeEventListener('wheel', onWheel, true);
      window.removeEventListener('pointerdown', onPointerDown, true);
      window.removeEventListener('pointermove', onPointerMove, true);
      window.removeEventListener('pointerup', onPointerUp, true);
      window.removeEventListener('pointercancel', onPointerUp, true);
      window.clearTimeout(wheelResetTimer);
    };
  }, [zoomTo, setView]);

  useImperativeHandle(ref, () => {
    const drawBackground = (ctx, dpr) => {
      if (isGraph) {
        ctx.strokeStyle = '#e2e8f0'; ctx.lineWidth = 1;
        const step = 20 * dpr;
        ctx.beginPath();
        const w = ctx.canvas.width; const h = ctx.canvas.height;
        for (let x = 0; x < w; x += step) { ctx.moveTo(x, 0); ctx.lineTo(x, h); }
        for (let y = 0; y < h; y += step) { ctx.moveTo(0, y); ctx.lineTo(w, y); }
        ctx.stroke();
        ctx.strokeStyle = '#94a3b8'; ctx.lineWidth = 2 * dpr;
        ctx.beginPath();
        ctx.moveTo(w / 2, 0); ctx.lineTo(w / 2, h);
        ctx.moveTo(0, h / 2); ctx.lineTo(w, h / 2);
        ctx.stroke();
      } else {
        ctx.strokeStyle = '#dbeafe'; ctx.lineWidth = 1;
        const step = 32 * dpr;
        const h = ctx.canvas.height;
        ctx.beginPath();
        for (let y = 31 * dpr; y < h; y += step) { ctx.moveTo(0, y); ctx.lineTo(ctx.canvas.width, y); }
        ctx.stroke();
      }
    };

    const getCompositeDataURL = (pageStrokes, stickers = []) => {
      const displayCanvas = displayCanvasRef.current;
      if (!displayCanvas) return null;
      // Always the whole A4 page at a fixed size, whatever the pane looked like.
      const tempCanvas = document.createElement('canvas');
      tempCanvas.width = Math.round(PAGE_W * EXPORT_SCALE);
      tempCanvas.height = Math.round(PAGE_H * EXPORT_SCALE);
      const ctx = tempCanvas.getContext('2d');
      const dpr = EXPORT_SCALE;
      ctx.fillStyle = '#fff';
      ctx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);
      drawBackground(ctx, dpr);
      // Stickers sit under the ink, same as on screen.
      const cssW = tempCanvas.width / dpr;
      const cssH = tempCanvas.height / dpr;
      stickers.forEach((st) => {
        const { left, top, side } = stickerBox(st, cssW, cssH);
        drawGridSticker(ctx, left * dpr, top * dpr, side * dpr);
      });
      (pageStrokes || []).forEach(s => replayStroke(ctx, s, dpr));
      return tempCanvas.toDataURL('image/png');
    };

    // 캡처 시점에 아직 finalizeStroke 안 된 진행 중 스트로크도 포함.
    // setStrokes가 큐에 있어도 React re-render 전에 submit하면 누락될 수 있음.
    const getCurrentPageStrokes = () => {
      const inProgress = currentStrokeRef.current;
      const committed = strokesRef.current;
      if (inProgress && !inProgress.isEraser && inProgress.points?.length > 0) {
        return [...committed, { ...inProgress, completed: true }];
      }
      return committed;
    };

    return {
      hasContent: () => {
        const all = [...pagesRef.current];
        all[currentPageRef.current] = getCurrentPageStrokes();
        return all.some(pageHasInk);
      },
      /** empty | light | substantial — path-length heuristic, no OCR. */
      getInkLevel: () => {
        const all = [...pagesRef.current];
        all[currentPageRef.current] = getCurrentPageStrokes();
        return analyzeInkPages(all).level;
      },
      getInkStats: () => {
        const all = [...pagesRef.current];
        all[currentPageRef.current] = getCurrentPageStrokes();
        return analyzeInkPages(all);
      },
      exportImage: ({ force = false } = {}) => {
        const pageStrokes = getCurrentPageStrokes();
        return Promise.resolve(
          (force || pageHasInk(pageStrokes)) ? getCompositeDataURL(pageStrokes, stickerPages[currentPage] || []) : null
        );
      },
      exportPageImages: async ({ force = false } = {}) => {
        const all = [...pagesRef.current];
        all[currentPageRef.current] = getCurrentPageStrokes();
        return all
          .map((ps, index) => ({ ps, index }))
          .filter(({ ps, index }) => (force ? index === currentPageRef.current || pageHasInk(ps) : pageHasInk(ps)))
          .map(({ ps, index }) => getCompositeDataURL(ps || [], stickerPages[index] || []));
      },
      getPagesData: () => {
        const all = [...pagesRef.current];
        all[currentPageRef.current] = getCurrentPageStrokes();
        const data = { pages: all, pageTypes: [...pageTypes], currentPage: currentPageRef.current, stickers: all.map((_, i) => stickerPages[i] || []) };
        // Where the reader was looking (only when zoomed in; the fitted page is the default): restored on load.
        const vs = viewSizeRef.current;
        if (viewRef.current.zoom > SNAP_ZOOM && vs.w > 0) {
          const centre = pageCentre(viewRef.current, vs);
          data.view = { zoom: viewRef.current.zoom, cx: Math.round(centre.x), cy: Math.round(centre.y) };
        }
        return data;
      },
      loadPagesData: (data) => {
        if (!Array.isArray(data?.pages) || data.pages.length === 0) return;
        const nextPages = data.pages.map((p) => (Array.isArray(p) ? p : []));
        const idx = Math.min(Math.max(0, Number(data.currentPage) || 0), nextPages.length - 1);
        setPages(nextPages);
        setStickerPages(cleanStickerPages(data.stickers, nextPages.length));
        setPageTypes(
          Array.isArray(data.pageTypes) && data.pageTypes.length === nextPages.length
            ? data.pageTypes
            : nextPages.map(() => false),
        );
        setCurrentPage(idx);
        forceRedrawRef.current = true;
        setStrokes(nextPages[idx]);
        resetHistory();
        const saved = data.view;
        if (saved && Number(saved.zoom) > SNAP_ZOOM && Number.isFinite(saved.cx) && Number.isFinite(saved.cy)) {
          const vs = viewSizeRef.current;
          if (vs.w > 0) {
            setView(viewForCentre({ x: saved.cx, y: saved.cy }, saved.zoom, vs));
          } else {
            pendingCentreRef.current = { x: saved.cx, y: saved.cy };
            setView({ zoom: saved.zoom, pos: { x: 0, y: 0 } });
          }
        } else {
          pendingCentreRef.current = null;
          resetView();
        }
      },
      clear: () => {
        resetView();
        setStrokes([]);
        setPages([[]]); setCurrentPage(0);
        setStickerPages([[]]);
        setPageTypes([initialIsGraph]);
        resetHistory();
      },
      getCurrentPageType: () => pageTypes[currentPage] ?? false,
      setCurrentPageType: (val) => {
        setPageTypes(prev => {
          const next = [...prev];
          next[currentPage] = val;
          return next;
        });
      },
    };
  }, [currentPage, isGraph, pageTypes, initialIsGraph, stickerPages, resetView, setView]);

  // Paper (ruled lines / graph grid) drawn with CSS on the page element, scaled with the page.
  const u = cssScale || 1;
  const bgStyle = isGraph ? {
    backgroundImage: `linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)`,
    backgroundSize: `${20 * u}px ${20 * u}px`,
    backgroundPosition: `calc(50% - ${10 * u}px) calc(50% + ${10 * u}px)`,
  } : {
    backgroundImage: 'linear-gradient(to bottom, transparent calc(100% - 1px), #dbeafe calc(100% - 1px))',
    backgroundSize: `100% ${32 * u}px`,
    backgroundPosition: `0 ${8 * u}px`,
    backgroundColor: '#fff',
  };

  return (
    <div ref={canvasWrapperRef} className="working-out-canvas" style={{ display: 'flex', flexDirection: 'column', height: '100%', minHeight: '400px', width: '100%', borderRadius: '24px', overflow: 'hidden', border: '1px solid #e2e8f0', background: '#fff', position: 'relative', touchAction: 'manipulation', userSelect: 'none', WebkitUserSelect: 'none', WebkitTouchCallout: 'none' }}>
      <style>{SKETCH_GUARD_STYLE}</style>
      {!isSubmitted && (
        <div style={hideTitle
          ? { display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '4px', padding: '6px 8px', background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }
          : { display: 'flex', flexDirection: 'column', background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
          {/* Row 1: drawing tools (one line with row 2 when the title is hidden: `contents` lets both rows share the toolbar line) */}
          <div style={hideTitle ? { display: 'contents' } : { display: 'flex', padding: '8px 14px', gap: '6px', alignItems: 'center' }}>
            {hideTitle ? null : (
              <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#64748b', marginRight: 'auto', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '6px' }}>
                {isGraph ? 'Graphing Canvas' : 'Working Out Pad'}
                <span style={{ fontSize: '0.6rem', fontWeight: 700, color: '#a5b4fc', background: '#eef2ff', borderRadius: '4px', padding: '1px 5px', letterSpacing: '0.05em' }}>{CANVAS_VERSION}</span>
              </span>
            )}
            <button onClick={() => setPalmGuard(v => { if (v) penSeenRef.current = false; return !v; })} title={palmGuard ? 'Pen Only — tap to allow finger drawing' : 'All Touch — tap to draw with the pen only'} aria-label={palmGuard ? 'Pen Only' : 'All Touch'} style={{ height: '30px', padding: hideTitle ? '0 8px' : '0 10px', borderRadius: '8px', border: 'none', cursor: 'pointer', background: palmGuard ? '#ecfdf5' : '#f1f5f9', color: palmGuard ? '#047857' : '#64748b', fontSize: '0.72rem', fontWeight: 900, display: 'flex', alignItems: 'center', gap: '4px' }}>
              <MousePointer2 size={14} />
              {!hideTitle && (palmGuard ? 'Pen Only' : 'All Touch')}
            </button>
            {[
              { id: 'pen', label: 'Pen', Icon: PenTool },
              { id: 'ballpoint', label: 'Ballpoint pen', Icon: PenLine },
              { id: 'highlighter', label: 'Highlighter', Icon: Highlighter },
              { id: 'line', label: 'Straight line', Icon: Minus },
              { id: 'rectangle', label: 'Rectangle', Icon: Square },
              { id: 'circle', label: 'Circle or ellipse', Icon: Circle },
              { id: 'lasso', label: 'Lasso select — circle strokes to move, copy, cut or delete them', Icon: LassoSelect },
            ].map(({ id, label, Icon }) => {
              const selected = activeTool === id;
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => setActiveTool(id)}
                  title={label}
                  aria-label={label}
                  aria-pressed={selected}
                  style={{ width: '30px', height: '30px', borderRadius: '8px', border: 'none', cursor: 'pointer', background: selected ? '#e0e7ff' : '#f1f5f9', color: selected ? '#4f46e5' : '#64748b' }}
                >
                  <Icon size={15} />
                </button>
              );
            })}
            {activeTool === 'lasso' && lasso.canPaste && (
              <button
                type="button"
                onClick={() => lasso.paste()}
                title="Paste what you copied (⌘V)"
                aria-label="Paste"
                style={{ height: '30px', padding: '0 9px', borderRadius: '8px', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px', background: '#eef2ff', color: '#4338ca', fontWeight: 800, fontSize: '0.72rem' }}
              >
                <ClipboardPaste size={15} /> {!hideTitle && 'Paste'}
              </button>
            )}
            <button
              onClick={() => setActiveTool(tool => (tool === 'eraser' ? 'pen' : 'eraser'))}
              title={activeTool === 'eraser' ? 'Eraser — tap again for pen' : 'Eraser'}
              aria-label="Eraser"
              aria-pressed={activeTool === 'eraser'}
              style={{ height: '30px', padding: '0 10px', borderRadius: '8px', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px', background: activeTool === 'eraser' ? '#e0e7ff' : '#f1f5f9', color: activeTool === 'eraser' ? '#4f46e5' : '#64748b' }}
            >
              <Eraser size={15} />
              {activeTool === 'eraser' && (
                // Tapping the mode label switches area <-> stroke (the button itself goes back to the pen).
                <span
                  role="button"
                  aria-label={`Eraser mode: ${eraserMode}. Tap to change`}
                  onClick={(e) => { e.stopPropagation(); setEraserMode(prev => (prev === 'area' ? 'stroke' : 'area')); }}
                  style={{ fontSize: '0.65rem', fontWeight: 900, textTransform: 'uppercase', background: '#fff', padding: '5px 8px', margin: '-4px -4px -4px 0', borderRadius: '4px', cursor: 'pointer' }}
                >{eraserMode}</span>
              )}
            </button>
            <select value={strokeWidth} onChange={e => setStrokeWidth(Number(e.target.value))} style={{ height: '30px', borderRadius: '8px', border: '1px solid #e2e8f0', padding: hideTitle ? '0 2px' : '0 8px', fontSize: '0.78rem', fontWeight: 700 }}>
              <option value={1}>1 · Fine</option>
              <option value={2}>2 · Thin</option>
              <option value={3}>3 · Medium</option>
              <option value={4}>4 · Thick</option>
              <option value={5}>5 · Bold</option>
            </select>
            <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
              {activeTool === 'highlighter'
                ? HIGHLIGHTER_COLORS.map(({ name, value }) => (
                  <button key={name} onClick={() => setHighlighterColor(value)} aria-label={name} title={name} style={{ width: '20px', height: '20px', borderRadius: '50%', border: highlighterColor === value ? '2px solid #4f46e5' : '1px solid #e2e8f0', background: value, cursor: 'pointer' }} />
                ))
                : COLORS.map(c => (
                  <button key={c} onClick={() => setStrokeColor(c)} aria-label={`Ink color ${c}`} title={c === '#4b5563' ? 'Dark grey' : `Ink color ${c}`} style={{ width: '20px', height: '20px', borderRadius: '50%', border: strokeColor === c ? '2px solid #4f46e5' : '1px solid #e2e8f0', background: c, cursor: 'pointer' }} />
                ))}
            </div>
          </div>
          {/* Row 2: page navigation + undo + clear */}
          <div style={hideTitle ? { display: 'contents' } : { display: 'flex', padding: '6px 14px 8px', gap: '6px', alignItems: 'center', borderTop: '1px solid #e2e8f0' }}>
            <button onClick={handleUndo} disabled={!undoStack.length} aria-label="Undo" title="Undo" style={{ width: '30px', height: '30px', borderRadius: '8px', border: 'none', cursor: undoStack.length ? 'pointer' : 'default', background: '#f1f5f9', color: '#64748b', opacity: undoStack.length ? 1 : 0.4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <RotateCcw size={15} />
            </button>
            <button onClick={handleRedo} disabled={!redoStack.length} aria-label="Redo" title="Redo" style={{ width: '30px', height: '30px', borderRadius: '8px', border: 'none', cursor: redoStack.length ? 'pointer' : 'default', background: '#f1f5f9', color: '#64748b', opacity: redoStack.length ? 1 : 0.4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <RotateCw size={15} />
            </button>
            {!hideTitle && <div style={{ width: '1px', height: '20px', background: '#e2e8f0', margin: '0 2px' }} />}
            <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 0} style={{ width: '30px', height: '30px', borderRadius: '8px', border: 'none', cursor: 'pointer', background: '#f1f5f9', color: currentPage === 0 ? '#cbd5e1' : '#64748b', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ChevronLeft size={15} />
            </button>
            <button
              onClick={addPage}
              disabled={maxPages > 0 && pages.length >= maxPages}
              title={maxPages > 0 && pages.length >= maxPages ? `Page limit reached (${maxPages})` : 'Add page · two-finger swipe up = next · swipe down = previous'}
              style={{ height: '30px', padding: '0 10px', borderRadius: '8px', border: 'none', background: '#e0e7ff', color: '#4f46e5', fontWeight: 900, fontSize: '0.72rem', cursor: 'pointer', opacity: maxPages > 0 && pages.length >= maxPages ? 0.5 : 1 }}
            >
              {currentPage + 1}/{pages.length}{maxPages > 0 && pages.length >= maxPages ? ' max' : ' +'}
            </button>
            <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === pages.length - 1} style={{ width: '30px', height: '30px', borderRadius: '8px', border: 'none', cursor: 'pointer', background: '#f1f5f9', color: currentPage === pages.length - 1 ? '#cbd5e1' : '#64748b', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ChevronRight size={15} />
            </button>
            {!hideTitle && <div style={{ width: '1px', height: '20px', background: '#e2e8f0', margin: '0 2px' }} />}
            <button
              onClick={addGridSticker}
              disabled={pageStickers.length >= STICKER_MAX_PER_PAGE}
              title="Add an axes grid sticker — drag to move, drag the corner to resize"
              aria-label="Add grid sticker"
              style={{ height: '30px', padding: '0 10px', borderRadius: '8px', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px', background: '#f1f5f9', color: '#64748b', fontWeight: 800, fontSize: '0.72rem' }}
            >
              <Grid3x3 size={15} /> {!hideTitle && 'Grid'}
            </button>
            <div style={{ flex: 1, minWidth: 0 }} />
            {confirmClear ? (
              <>
                <span style={{ fontSize: '0.72rem', color: '#64748b' }}>Clear this page?</span>
                <button onClick={handleClear} style={{ height: '30px', padding: '0 12px', borderRadius: '8px', border: 'none', background: '#e11d48', color: '#fff', fontWeight: 700, fontSize: '0.72rem', cursor: 'pointer' }}>
                  Yes, clear
                </button>
                <button onClick={() => setConfirmClear(false)} style={{ height: '30px', padding: '0 10px', borderRadius: '8px', border: 'none', background: '#f1f5f9', color: '#64748b', fontWeight: 700, fontSize: '0.72rem', cursor: 'pointer' }}>
                  Cancel
                </button>
              </>
            ) : (
              <button onClick={handleClear} style={{ width: '30px', height: '30px', borderRadius: '8px', border: 'none', background: '#fff1f2', color: '#e11d48', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Trash2 size={15} />
              </button>
            )}
          </div>
        </div>
      )}

      {/* The pane is a viewport onto a fixed A4 page: the page keeps its shape whatever the pane size. */}
      <div ref={viewportRef} style={{ flex: 1, position: 'relative', overflow: 'hidden', touchAction: 'none', background: '#e2e8f0' }}>
        {historyFlash && (
          <div key={historyFlash.id} aria-live="polite" style={{ position: 'absolute', left: '50%', top: '50%', zIndex: 30, pointerEvents: 'none', padding: '8px 18px', borderRadius: '999px', background: 'rgba(15,23,42,0.78)', color: '#fff', fontSize: '0.9rem', fontWeight: 800, animation: 'padHistoryFlash 650ms ease-out forwards' }}>
            {historyFlash.label}
          </div>
        )}
        <div style={{ position: 'absolute', left: pagePos.x, top: pagePos.y, width: PAGE_W * u, height: PAGE_H * u, visibility: cssScale > 0 ? 'visible' : 'hidden', boxShadow: '0 1px 6px rgba(15,23,42,0.18)', overflow: 'hidden', ...bgStyle }}>
          {isGraph && (
            <>
              <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: '2px', background: '#94a3b8', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: '2px', background: '#94a3b8', transform: 'translateX(-50%)', pointerEvents: 'none' }} />
            </>
          )}
          <StickerLayer part="base" stickers={pageStickers} />
          <canvas
            ref={bgCanvasRef}
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
          />
          <canvas
            ref={liveCanvasRef}
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
          />
          <canvas
            ref={displayCanvasRef}
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', touchAction: 'none', userSelect: 'none', WebkitUserSelect: 'none', WebkitTouchCallout: 'none', cursor: activeTool === 'eraser' ? 'cell' : 'crosshair' }}
          />
          {!isSubmitted && activeTool === 'lasso' && (
            <LassoOverlay
              selection={lasso.selection}
              preview={lasso.preview}
              scale={u}
              canPaste={lasso.canPaste}
              inkColors={COLORS}
              highlighterColors={HIGHLIGHTER_COLORS}
              onCopy={lasso.copy}
              onCut={lasso.cut}
              onDelete={lasso.remove}
              onPaste={lasso.paste}
              onRecolor={lasso.recolor}
              onHandleDown={lasso.beginHandle}
            />
          )}
          {!isSubmitted && (
            <StickerLayer
              part="editor"
              stickers={pageStickers}
              editingId={editingStickerId}
              onUpdate={updateSticker}
              onEdit={setEditingStickerId}
              onDone={() => setEditingStickerId(null)}
              onDelete={deleteSticker}
            />
          )}
        </div>
        {view.zoom > SNAP_ZOOM && (
          <button
            type="button"
            onClick={resetView}
            aria-label="Show the whole page"
            title="Show the whole page"
            style={{ position: 'absolute', left: 10, bottom: 10, zIndex: 12, height: 32, padding: '0 12px', borderRadius: 999, border: 0, background: 'rgba(30,27,75,0.86)', color: '#fff', fontWeight: 800, fontSize: '0.76rem', cursor: 'pointer', boxShadow: '0 2px 8px rgba(15,23,42,0.3)' }}
          >
            {Math.round(view.zoom * 100)}% · Fit page
          </button>
        )}
        {isSubmitted && (
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}>
            <div style={{ background: 'white', padding: '10px 20px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', fontWeight: 800, color: '#6366f1' }}>Submission Locked</div>
          </div>
        )}
      </div>
    </div>
  );
}));

export default WorkingOutCanvas;
