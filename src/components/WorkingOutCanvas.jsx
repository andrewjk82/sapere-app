import React, { useRef, useState, useImperativeHandle, forwardRef, useEffect, useCallback } from 'react';
import { PenTool, Eraser, MousePointer2, RotateCcw, Trash2, ChevronLeft, ChevronRight } from 'lucide-react';

// ⬆ Bump this every time you modify the canvas so you can confirm the deployed version
const CANVAS_VERSION = 'v9.9h-pen';

// Minimum squared distance between captured points (~1.4px).
const MIN_DIST_SQ = 2;

const COLORS = ['#1e1b4b', '#ef4444', '#2563eb', '#16a34a', '#7c3aed'];

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

// Draw pen segments [startIdx .. end) using quadratic-midpoint smoothing with
// per-segment variable width. Segment i connects points[i-1] → points[i].
function drawPenSegments(ctx, pts, startIdx, color, dpr, includeTip) {
  if (!ctx || !pts || pts.length === 0) return;
  ctx.save();
  ctx.globalCompositeOperation = 'source-over';
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';

  if (pts.length === 1) {
    const p = pts[0];
    ctx.beginPath();
    ctx.arc(p[0] * dpr, p[1] * dpr, Math.max(0.6, p[2] / 2) * dpr, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
    return;
  }

  const from = Math.max(1, startIdx);
  for (let i = from; i < pts.length; i++) {
    const p0 = pts[i - 1];
    const p1 = pts[i];
    const fromX = i === 1 ? p0[0] : (pts[i - 2][0] + p0[0]) / 2;
    const fromY = i === 1 ? p0[1] : (pts[i - 2][1] + p0[1]) / 2;
    const toX = (p0[0] + p1[0]) / 2;
    const toY = (p0[1] + p1[1]) / 2;
    ctx.lineWidth = Math.max(0.4, p0[2]) * dpr;
    ctx.beginPath();
    ctx.moveTo(fromX * dpr, fromY * dpr);
    ctx.quadraticCurveTo(p0[0] * dpr, p0[1] * dpr, toX * dpr, toY * dpr);
    ctx.stroke();
  }

  if (includeTip && pts.length >= 2) {
    const a = pts[pts.length - 2];
    const b = pts[pts.length - 1];
    ctx.lineWidth = Math.max(0.4, b[2]) * dpr;
    ctx.beginPath();
    ctx.moveTo(((a[0] + b[0]) / 2) * dpr, ((a[1] + b[1]) / 2) * dpr);
    ctx.lineTo(b[0] * dpr, b[1] * dpr);
    ctx.stroke();
  }

  ctx.restore();
}

// Draw the live leading tip: from the last settled midpoint, through the last
// real point, then on through predicted points. Lives on its own canvas that
// is fully cleared every frame, so prediction overshoot self-corrects.
function drawTip(ctx, stroke, dpr, predicted) {
  if (!ctx || !stroke) return;
  const pts = stroke.points;
  if (pts.length === 0) return;
  ctx.save();
  ctx.globalCompositeOperation = 'source-over';
  ctx.strokeStyle = stroke.color;
  ctx.fillStyle = stroke.color;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';

  if (pts.length === 1) {
    const p = pts[0];
    ctx.beginPath();
    ctx.arc(p[0] * dpr, p[1] * dpr, Math.max(0.6, p[2] / 2) * dpr, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
    return;
  }

  const n = pts.length - 1;
  const a = pts[n - 1];
  const b = pts[n];
  ctx.lineWidth = Math.max(0.4, b[2]) * dpr;
  ctx.beginPath();
  ctx.moveTo(((a[0] + b[0]) / 2) * dpr, ((a[1] + b[1]) / 2) * dpr);
  ctx.lineTo(b[0] * dpr, b[1] * dpr);
  for (let i = 0; i < predicted.length; i++) {
    ctx.lineTo(predicted[i][0] * dpr, predicted[i][1] * dpr);
  }
  ctx.stroke();
  ctx.restore();
}

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
    drawPenSegments(ctx, stroke.points, 1, stroke.color, dpr, true);
  }
}

const pageHasInk = (pageStrokes = []) =>
  Array.isArray(pageStrokes) && pageStrokes.some(stroke =>
    !stroke?.isEraser && Array.isArray(stroke.points) && stroke.points.length > 0
  );

const WorkingOutCanvas = React.memo(forwardRef(({ questionType, isSubmitted }, ref) => {
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
  const rectRef = useRef(null);        // canvas rect cached at pointerdown
  const lastSampleRef = useRef({ x: 0, y: 0, t: 0 });
  const smoothWRef = useRef(3);        // low-pass-filtered line width
  const penSeenRef = useRef(false);    // a pen/stylus has been used → reject palm
  const rafIdRef = useRef(0);          // pending requestAnimationFrame id for live render
  const canceledPenStrokeRef = useRef(null);

  // Background bookkeeping
  const bgRenderedRef = useRef([]);
  const strokesRef = useRef([]);

  const handlersRef = useRef({});

  // Tool state mirrored to refs so the once-attached handlers see fresh values
  const isSubmittedRef = useRef(false);
  const activeToolRef = useRef('pen');
  const eraserModeRef = useRef('area');
  const palmGuardRef = useRef(false);
  const strokeColorRef = useRef('#1e1b4b');
  const strokeWidthRef = useRef(3);

  const [strokes, setStrokes] = useState([]);
  const [undoStack, setUndoStack] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pages, setPages] = useState([[]]);

  const [activeTool, setActiveTool] = useState('pen');
  const [eraserMode, setEraserMode] = useState('area');
  const [confirmClear, setConfirmClear] = useState(false);
  const [palmGuard, setPalmGuard] = useState(false); // default: accept all input
  const [strokeColor, setStrokeColor] = useState('#1e1b4b');
  const [strokeWidth, setStrokeWidth] = useState(3);

  strokesRef.current = strokes;
  isSubmittedRef.current = isSubmitted;
  activeToolRef.current = activeTool;
  eraserModeRef.current = eraserMode;
  palmGuardRef.current = palmGuard;
  strokeColorRef.current = strokeColor;
  strokeWidthRef.current = strokeWidth;

  const isGraph = questionType === 'graph_sketch';

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
    const dpr = window.devicePixelRatio || 1;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    strokesRef.current.forEach(s => replayStroke(ctx, s, dpr));
    bgRenderedRef.current = strokesRef.current;
  }, []);

  // ─── Incremental live render ──────────────────────────────────────────────
  // Settled segments → live canvas (drawn once, never touched again).
  // Leading tip → tip canvas (cleared + redrawn every frame, +predicted).
  const flushLive = useCallback(() => {
    const stroke = currentStrokeRef.current;
    if (!stroke) return;
    const dpr = window.devicePixelRatio || 1;
    const pts = stroke.points;

    if (stroke.isEraser) {
      drawEraserSegments(getBgCtx(), pts, liveDrawnIdxRef.current, stroke.width, dpr);
      liveDrawnIdxRef.current = pts.length;
      return;
    }

    drawPenSegments(getLiveCtx(), pts, liveDrawnIdxRef.current, stroke.color, dpr, false);
    liveDrawnIdxRef.current = pts.length;

    const tipCtx = getTipCtx();
    clearCanvas(displayCanvasRef.current, tipCtx);
    drawTip(tipCtx, stroke, dpr, predictedPtsRef.current);
  }, []);

  // ─── Canvas sizing ────────────────────────────────────────────────────────
  const syncSize = useCallback(() => {
    const display = displayCanvasRef.current;
    const live = liveCanvasRef.current;
    const bg = bgCanvasRef.current;
    if (!display || !live || !bg) return;
    const { width, height } = display.getBoundingClientRect();
    if (width === 0 || height === 0) return;

    const dpr = window.devicePixelRatio || 1;
    const newW = Math.round(width * dpr);
    const newH = Math.round(height * dpr);

    let resized = false;
    [display, live, bg].forEach(c => {
      if (c.width !== newW || c.height !== newH) { c.width = newW; c.height = newH; resized = true; }
    });
    if (resized) redrawBackground();
  }, [redrawBackground]);

  useEffect(() => {
    syncSize();
    const ro = new ResizeObserver(syncSize);
    const display = displayCanvasRef.current;
    if (display) ro.observe(display);
    return () => ro.disconnect();
  }, [syncSize]);

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

    const blockPageTouch = (e) => {
      if (e.type === 'touchstart') {
        touchStartedInCanvas = isOnDrawingSurface(e.target);
      }
      // Always allow editable fields (keyboard inputs)
      if (isEditableTarget(e.target)) return;
      // Only block scroll when the touch sequence began inside the canvas
      if (!touchStartedInCanvas) return;
      // Allow finger taps on buttons/links even inside the canvas toolbar
      if (e.type === 'touchstart' && isTapTarget(e.target) && !isStylusTouch(e)) return;
      e.preventDefault();
    };

    document.addEventListener('selectstart', blockSelectionMenu, { capture: true });
    document.addEventListener('contextmenu', blockSelectionMenu, { capture: true });
    document.addEventListener('touchstart', blockPageTouch, { capture: true, passive: false });
    document.addEventListener('touchmove', blockPageTouch, { capture: true, passive: false });
    document.addEventListener('touchend', resetTouchStart, { capture: true, passive: true });
    document.addEventListener('touchcancel', resetTouchStart, { capture: true, passive: true });
    document.addEventListener('gesturestart', blockPageTouch, { capture: true, passive: false });

    return () => {
      document.removeEventListener('selectstart', blockSelectionMenu, { capture: true });
      document.removeEventListener('contextmenu', blockSelectionMenu, { capture: true });
      document.removeEventListener('touchstart', blockPageTouch, { capture: true });
      document.removeEventListener('touchmove', blockPageTouch, { capture: true });
      document.removeEventListener('touchend', resetTouchStart, { capture: true });
      document.removeEventListener('touchcancel', resetTouchStart, { capture: true });
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
    if (!isAppend) redrawBackground();
    bgRenderedRef.current = strokes;
  }, [strokes, redrawBackground]);

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
    const pts = stroke.points;
    const events = (typeof e.getCoalescedEvents === 'function' && e.getCoalescedEvents().length)
      ? e.getCoalescedEvents()
      : [e];
    let appended = false;

    for (const ev of events) {
      const sampleTime = ev.timeStamp || e.timeStamp || performance.now();
      const lastSample = lastSampleRef.current;
      if (sampleTime + 0.5 < lastSample.t) continue;

      const x = ev.clientX - rect.left;
      const y = ev.clientY - rect.top;
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

  // ─── Stroke-eraser: remove whole strokes under the tap ────────────────────
  const eraseStrokeAt = (pt) => {
    const hitR = 16;
    const next = strokesRef.current.filter(s => {
      if (s.isEraser || !s.points) return true;
      return !s.points.some(p => {
        const dx = p[0] - pt.x, dy = p[1] - pt.y;
        return dx * dx + dy * dy < hitR * hitR;
      });
    });
    if (next.length !== strokesRef.current.length) {
      setUndoStack(prev => [...prev, strokesRef.current]);
      setStrokes(next);
    }
  };

  // Discard an in-progress stroke without committing (used when a pen press
  // preempts a stray palm/touch stroke).
  const discardCurrentStroke = () => {
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
    cancelLiveRender();
    const dpr = window.devicePixelRatio || 1;
    // Capture the genuine final point so quick taps / short flicks never vanish.
    const rect = rectRef.current;
    if (finalE && rect && typeof finalE.clientX === 'number') {
      const x = finalE.clientX - rect.left;
      const y = finalE.clientY - rect.top;
      const pts = stroke.points;
      const last = pts[pts.length - 1];
      const dx = x - last[0], dy = y - last[1];
      if (dx * dx + dy * dy >= 0.25) pts.push([x, y, last[2]]);
    }
    stroke.completed = true;
    if (stroke.isEraser) {
      drawEraserSegments(getBgCtx(), stroke.points, liveDrawnIdxRef.current, stroke.width, dpr);
    } else {
      // Commit to bg FIRST, then clear the live + tip overlays → zero flash.
      drawPenSegments(getBgCtx(), stroke.points, 1, stroke.color, dpr, true);
      clearCanvas(liveCanvasRef.current, getLiveCtx());
      clearCanvas(displayCanvasRef.current, getTipCtx());
    }
    setUndoStack(prev => [...prev, strokesRef.current]);
    setStrokes(prev => [...prev, stroke]);
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
    const rect = canvas.getBoundingClientRect();
    rectRef.current = rect;
    const pt = { x: e.clientX - rect.left, y: e.clientY - rect.top };

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

    if (activeToolRef.current === 'eraser' && eraserModeRef.current === 'stroke') {
      eraseStrokeAt(pt);
      activePointerIdRef.current = null;
      return;
    }

    const isEraser = activeToolRef.current === 'eraser';
    const hasRealPressure = isPen;
    const stroke = {
      points: [],
      color: strokeColorRef.current,
      width: strokeWidthRef.current,
      isEraser,
      hasRealPressure,
      completed: false,
    };
    const pressure = hasRealPressure && e.pressure > 0 ? e.pressure : 0.5;
    smoothWRef.current = (strokeWidthRef.current * 1.25) * (isEraser ? 1 : (0.55 + pressure * 1.1));
    stroke.points.push([pt.x, pt.y, widthFor(stroke, pressure, 0)]);

    isDrawingRef.current = true;
    liveDrawnIdxRef.current = 1;
    predictedPtsRef.current = [];
    lastSampleRef.current = { x: pt.x, y: pt.y, t: e.timeStamp };
    currentStrokeRef.current = stroke;
  };

  const onPointerMove = (e) => {
    const isActivePointer =
      isDrawingRef.current &&
      currentStrokeRef.current &&
      e.pointerId === activePointerIdRef.current;
    const isRejectedPalm = e.pointerType === 'touch' && (palmGuardRef.current || penSeenRef.current);
    if ((isActivePointer || isRejectedPalm) && e.cancelable !== false) e.preventDefault();
    if (!isActivePointer) return;

    const rect = rectRef.current;
    if (!rect) return;
    const appended = appendPointerSamples(e);

    // Predicted points — extend the tip ahead of the pointer to hide latency.
    if (typeof e.getPredictedEvents === 'function') {
      const pred = e.getPredictedEvents();
      predictedPtsRef.current = pred.map(ev => [ev.clientX - rect.left, ev.clientY - rect.top]);
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

  const handleUndo = () => {
    if (!undoStack.length) return;
    const prev = undoStack[undoStack.length - 1];
    setStrokes(prev);
    setUndoStack(u => u.slice(0, -1));
  };

  const handleClear = () => {
    if (!confirmClear) { setConfirmClear(true); return; }
    setConfirmClear(false);
    setUndoStack(prev => [...prev, strokesRef.current]);
    setStrokes([]);
  };

  const addPage = () => {
    setPages(prev => {
      const next = [...prev];
      next[currentPage] = strokesRef.current;
      next.push([]);
      return next;
    });
    setCurrentPage(prev => prev + 1);
    setStrokes([]);
    setUndoStack([]);
  };

  const goToPage = (idx) => {
    setPages(prev => {
      if (idx < 0 || idx >= prev.length) return prev;
      const next = [...prev];
      next[currentPage] = strokesRef.current;
      setCurrentPage(idx);
      setStrokes(next[idx] || []);
      setUndoStack([]);
      return next;
    });
  };

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

    const getCompositeDataURL = (pageStrokes) => {
      const displayCanvas = displayCanvasRef.current;
      if (!displayCanvas) return null;
      const tempCanvas = document.createElement('canvas');
      tempCanvas.width = displayCanvas.width;
      tempCanvas.height = displayCanvas.height;
      const ctx = tempCanvas.getContext('2d');
      const dpr = window.devicePixelRatio || 1;
      ctx.fillStyle = '#fff';
      ctx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);
      drawBackground(ctx, dpr);
      (pageStrokes || []).forEach(s => replayStroke(ctx, s, dpr));
      return tempCanvas.toDataURL('image/png');
    };

    return {
      hasContent: () => {
        const all = [...pages];
        all[currentPage] = strokesRef.current;
        return all.some(pageHasInk);
      },
      exportImage: ({ force = false } = {}) => Promise.resolve(
        (force || pageHasInk(strokesRef.current)) ? getCompositeDataURL(strokesRef.current) : null
      ),
      exportPageImages: async ({ force = false } = {}) => {
        const all = [...pages];
        all[currentPage] = strokesRef.current;
        return all
          .filter((ps, index) => force ? index === currentPage || pageHasInk(ps) : pageHasInk(ps))
          .map(ps => getCompositeDataURL(ps || []));
      },
      clear: () => {
        setStrokes([]);
        setPages([[]]); setCurrentPage(0);
        setUndoStack([]);
      }
    };
  }, [pages, currentPage, isGraph]);

  const bgStyle = isGraph ? {
    backgroundImage: `linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)`,
    backgroundSize: '20px 20px',
  } : {
    backgroundImage: `linear-gradient(to bottom, transparent 31px, #dbeafe 32px)`,
    backgroundSize: '100% 32px',
    backgroundPosition: '0 8px',
    backgroundColor: '#fff',
  };

  return (
    <div className="working-out-canvas" style={{ display: 'flex', flexDirection: 'column', height: '100%', minHeight: '400px', width: '100%', borderRadius: '24px', overflow: 'hidden', border: '1px solid #e2e8f0', background: '#fff', position: 'relative', touchAction: 'manipulation', userSelect: 'none', WebkitUserSelect: 'none', WebkitTouchCallout: 'none' }}>
      <style>{SKETCH_GUARD_STYLE}</style>
      {!isSubmitted && (
        <div style={{ display: 'flex', flexDirection: 'column', background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
          {/* Row 1: drawing tools */}
          <div style={{ display: 'flex', padding: '8px 14px', gap: '6px', alignItems: 'center' }}>
            <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#64748b', marginRight: 'auto', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '6px' }}>
              {isGraph ? 'Graphing Canvas' : 'Working Out Pad'}
              <span style={{ fontSize: '0.6rem', fontWeight: 700, color: '#a5b4fc', background: '#eef2ff', borderRadius: '4px', padding: '1px 5px', letterSpacing: '0.05em' }}>{CANVAS_VERSION}</span>
            </span>
            <button onClick={() => setPalmGuard(v => { if (v) penSeenRef.current = false; return !v; })} style={{ height: '30px', padding: '0 10px', borderRadius: '8px', border: 'none', cursor: 'pointer', background: palmGuard ? '#ecfdf5' : '#f1f5f9', color: palmGuard ? '#047857' : '#64748b', fontSize: '0.72rem', fontWeight: 900, display: 'flex', alignItems: 'center', gap: '4px' }}>
              <MousePointer2 size={14} />
              {palmGuard ? 'Pen Only' : 'All Touch'}
            </button>
            <button onClick={() => setActiveTool('pen')} style={{ width: '30px', height: '30px', borderRadius: '8px', border: 'none', cursor: 'pointer', background: activeTool === 'pen' ? '#e0e7ff' : '#f1f5f9', color: activeTool === 'pen' ? '#4f46e5' : '#64748b' }}>
              <PenTool size={15} />
            </button>
            <button
              onClick={() => {
                if (activeTool === 'eraser') { setEraserMode(prev => prev === 'area' ? 'stroke' : 'area'); }
                else { setActiveTool('eraser'); }
              }}
              style={{ height: '30px', padding: '0 10px', borderRadius: '8px', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px', background: activeTool === 'eraser' ? '#e0e7ff' : '#f1f5f9', color: activeTool === 'eraser' ? '#4f46e5' : '#64748b' }}
            >
              <Eraser size={15} />
              {activeTool === 'eraser' && (
                <span style={{ fontSize: '0.65rem', fontWeight: 900, textTransform: 'uppercase', background: '#fff', padding: '2px 5px', borderRadius: '4px' }}>{eraserMode}</span>
              )}
            </button>
            <select value={strokeWidth} onChange={e => setStrokeWidth(Number(e.target.value))} style={{ height: '30px', borderRadius: '8px', border: '1px solid #e2e8f0', padding: '0 8px', fontSize: '0.78rem', fontWeight: 700 }}>
              <option value={2}>Thin</option>
              <option value={3}>Normal</option>
              <option value={5}>Thick</option>
            </select>
            <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
              {COLORS.map(c => (
                <button key={c} onClick={() => { setStrokeColor(c); setActiveTool('pen'); }} style={{ width: '20px', height: '20px', borderRadius: '50%', border: strokeColor === c ? '2px solid #4f46e5' : '1px solid #e2e8f0', background: c, cursor: 'pointer' }} />
              ))}
            </div>
          </div>
          {/* Row 2: page navigation + undo + clear */}
          <div style={{ display: 'flex', padding: '6px 14px 8px', gap: '6px', alignItems: 'center', borderTop: '1px solid #e2e8f0' }}>
            <button onClick={handleUndo} style={{ width: '30px', height: '30px', borderRadius: '8px', border: 'none', cursor: 'pointer', background: '#f1f5f9', color: '#64748b', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <RotateCcw size={15} />
            </button>
            <div style={{ width: '1px', height: '20px', background: '#e2e8f0', margin: '0 2px' }} />
            <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 0} style={{ width: '30px', height: '30px', borderRadius: '8px', border: 'none', cursor: 'pointer', background: '#f1f5f9', color: currentPage === 0 ? '#cbd5e1' : '#64748b', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ChevronLeft size={15} />
            </button>
            <button onClick={addPage} style={{ height: '30px', padding: '0 10px', borderRadius: '8px', border: 'none', background: '#e0e7ff', color: '#4f46e5', fontWeight: 900, fontSize: '0.72rem', cursor: 'pointer' }}>
              {currentPage + 1}/{pages.length} +
            </button>
            <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === pages.length - 1} style={{ width: '30px', height: '30px', borderRadius: '8px', border: 'none', cursor: 'pointer', background: '#f1f5f9', color: currentPage === pages.length - 1 ? '#cbd5e1' : '#64748b', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ChevronRight size={15} />
            </button>
            <div style={{ flex: 1 }} />
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

      <div style={{ flex: 1, position: 'relative', overflow: 'hidden', touchAction: 'none', ...bgStyle }}>
        {isGraph && (
          <>
            <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: '2px', background: '#94a3b8', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: '2px', background: '#94a3b8', transform: 'translateX(-50%)', pointerEvents: 'none' }} />
          </>
        )}
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
