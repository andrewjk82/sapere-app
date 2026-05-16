import React, { useRef, useState, useImperativeHandle, forwardRef, useEffect, useCallback } from 'react';
import { PenTool, Eraser, MousePointer2, RotateCcw, Trash2, ChevronLeft, ChevronRight } from 'lucide-react';

// ⬆ Bump this every time you modify the canvas so you can confirm the deployed version
const CANVAS_VERSION = 'v9.0-fast';

// Minimum squared distance between captured points (1.4px). Fast strokes have
// far-apart points anyway, so this only trims redundant near-duplicate samples.
const MIN_DIST_SQ = 2;

const COLORS = ['#1e1b4b', '#ef4444', '#2563eb', '#16a34a', '#7c3aed'];

const hasCoarsePointer = () =>
  typeof window !== 'undefined' && window.matchMedia?.('(pointer: coarse)').matches;

// ─── Rendering primitives ───────────────────────────────────────────────────
// A stroke = { points: [[x, y, width], ...], color, width, isEraser, completed }
// Live rendering is INCREMENTAL: each frame only the brand-new segments are
// drawn — old segments are never reprocessed. O(new points) per frame.

// Draw pen segments [startIdx .. end) onto ctx using quadratic-midpoint
// smoothing with per-segment variable width. startIdx is the first segment
// index to draw (segment i connects points[i-1] → points[i]; always ≥ 1).
function drawPenSegments(ctx, pts, startIdx, color, dpr, includeTip) {
  if (!ctx || !pts || pts.length === 0) return;
  ctx.save();
  ctx.globalCompositeOperation = 'source-over';
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';

  // Single point → round dot.
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
    // Curve runs from the previous midpoint to the current midpoint, with the
    // shared point p0 as the quadratic control — guarantees C1 continuity.
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

  // Final tip: from the last midpoint to the actual last point. Only drawn for
  // completed strokes (live rendering leaves a ~half-segment tail that catches
  // up on the next frame — invisible during motion).
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

// Draw eraser segments [startIdx .. end) onto ctx (destination-out).
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

// Replay a fully-committed stroke (used by background redraw + export).
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
  const displayCanvasRef = useRef(null);
  const bgCanvasRef = useRef(null);
  const displayCtxRef = useRef(null);
  const bgCtxRef = useRef(null);

  // Live-stroke session refs
  const isDrawingRef = useRef(false);
  const activePointerIdRef = useRef(null);
  const currentStrokeRef = useRef(null);
  const liveDrawnIdxRef = useRef(1);   // next segment index not yet drawn live
  const rectRef = useRef(null);        // canvas rect cached at pointerdown
  const lastSampleRef = useRef({ x: 0, y: 0, t: 0 });
  const smoothWRef = useRef(3);        // low-pass-filtered line width

  // Background bookkeeping
  const bgRenderedRef = useRef([]);    // strokes already painted on the bg canvas
  const strokesRef = useRef([]);

  // Stable ref holding the latest pointer handlers
  const handlersRef = useRef({});

  // Tool state mirrored to refs so handlers (attached once) see fresh values
  const isSubmittedRef = useRef(false);
  const activeToolRef = useRef('pen');
  const eraserModeRef = useRef('area');
  const palmGuardRef = useRef(false);
  const strokeColorRef = useRef('#1e1b4b');
  const strokeWidthRef = useRef(3);

  const [strokes, setStrokes] = useState([]);
  const [undoStack, setUndoStack] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pages, setPages] = useState([[]]); // eslint-disable-line no-unused-vars

  const [activeTool, setActiveTool] = useState('pen');
  const [eraserMode, setEraserMode] = useState('area');
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

  // ─── Cached drawing contexts (desynchronized → lower touch-to-pixel latency)
  const getDisplayCtx = () => {
    if (!displayCtxRef.current && displayCanvasRef.current) {
      displayCtxRef.current = displayCanvasRef.current.getContext('2d', { desynchronized: true });
    }
    return displayCtxRef.current;
  };
  const getBgCtx = () => {
    if (!bgCtxRef.current && bgCanvasRef.current) {
      bgCtxRef.current = bgCanvasRef.current.getContext('2d', { desynchronized: true });
    }
    return bgCtxRef.current;
  };

  // ─── Background canvas: full replay (undo / page switch / resize) ──────────
  const redrawBackground = useCallback(() => {
    const ctx = getBgCtx();
    const canvas = bgCanvasRef.current;
    if (!ctx || !canvas || canvas.width === 0) return;
    const dpr = window.devicePixelRatio || 1;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    strokesRef.current.forEach(s => replayStroke(ctx, s, dpr));
    bgRenderedRef.current = strokesRef.current;
  }, []);

  // ─── Incremental live render: only paints brand-new segments ──────────────
  const flushLive = useCallback(() => {
    const stroke = currentStrokeRef.current;
    if (!stroke) return;
    const dpr = window.devicePixelRatio || 1;
    const pts = stroke.points;
    if (stroke.isEraser) {
      drawEraserSegments(getBgCtx(), pts, liveDrawnIdxRef.current, stroke.width, dpr);
    } else {
      drawPenSegments(getDisplayCtx(), pts, liveDrawnIdxRef.current, stroke.color, dpr, false);
    }
    liveDrawnIdxRef.current = pts.length; // next segment to draw
  }, []);

  // ─── Canvas sizing ────────────────────────────────────────────────────────
  const syncSize = useCallback(() => {
    const display = displayCanvasRef.current;
    const bg = bgCanvasRef.current;
    if (!display || !bg) return;
    const { width, height } = display.getBoundingClientRect();
    if (width === 0 || height === 0) return;

    const dpr = window.devicePixelRatio || 1;
    const newW = Math.round(width * dpr);
    const newH = Math.round(height * dpr);

    let resized = false;
    if (display.width !== newW || display.height !== newH) { display.width = newW; display.height = newH; resized = true; }
    if (bg.width !== newW || bg.height !== newH) { bg.width = newW; bg.height = newH; resized = true; }
    if (resized) redrawBackground();
  }, [redrawBackground]);

  useEffect(() => {
    syncSize();
    const ro = new ResizeObserver(syncSize);
    const display = displayCanvasRef.current;
    if (display) ro.observe(display);
    return () => ro.disconnect();
  }, [syncSize]);

  // Background redraw only when strokes change in a non-append way (undo, clear,
  // page switch). A plain append is already painted by the pointerup handler.
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
    const down = (e) => handlersRef.current.onPointerDown(e);
    const move = (e) => handlersRef.current.onPointerMove(e);
    const up   = (e) => handlersRef.current.onPointerUp(e);
    canvas.addEventListener('pointerdown',   down, { passive: false });
    canvas.addEventListener('pointermove',   move, { passive: false });
    canvas.addEventListener('pointerup',     up,   { passive: false });
    canvas.addEventListener('pointercancel', up,   { passive: false });
    canvas.addEventListener('pointerleave',  up,   { passive: false });
    return () => {
      canvas.removeEventListener('pointerdown',   down);
      canvas.removeEventListener('pointermove',   move);
      canvas.removeEventListener('pointerup',     up);
      canvas.removeEventListener('pointercancel', up);
      canvas.removeEventListener('pointerleave',  up);
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
      // Faster movement → thinner line (natural ballpoint feel).
      const f = Math.max(0.6, Math.min(1.3, 1.3 - velocity * 0.14));
      target = baseW * f;
    }
    // Low-pass filter so the width never jitters.
    smoothWRef.current = smoothWRef.current * 0.55 + target * 0.45;
    return smoothWRef.current;
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

  // ─── Pointer handlers ─────────────────────────────────────────────────────
  const onPointerDown = (e) => {
    if (isSubmittedRef.current) return;
    if (isDrawingRef.current) return; // ignore secondary pointers (palm / 2nd finger)
    if (palmGuardRef.current && e.pointerType !== 'pen') return;
    const canvas = displayCanvasRef.current;
    if (!canvas) return;

    e.preventDefault();
    const rect = canvas.getBoundingClientRect();
    rectRef.current = rect;
    const pt = { x: e.clientX - rect.left, y: e.clientY - rect.top };

    try { canvas.setPointerCapture(e.pointerId); } catch {}
    activePointerIdRef.current = e.pointerId;

    // Stroke-eraser mode: tap to delete whole strokes, no live stroke.
    if (activeToolRef.current === 'eraser' && eraserModeRef.current === 'stroke') {
      eraseStrokeAt(pt);
      activePointerIdRef.current = null;
      return;
    }

    const isEraser = activeToolRef.current === 'eraser';
    const hasRealPressure = e.pointerType === 'pen';
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
    const w = widthFor(stroke, pressure, 0);
    stroke.points.push([pt.x, pt.y, w]);

    isDrawingRef.current = true;
    liveDrawnIdxRef.current = 1;
    lastSampleRef.current = { x: pt.x, y: pt.y, t: e.timeStamp };
    currentStrokeRef.current = stroke;
  };

  const onPointerMove = (e) => {
    if (!isDrawingRef.current || !currentStrokeRef.current) return;
    if (e.pointerId !== activePointerIdRef.current) return;
    if (e.cancelable !== false) e.preventDefault();

    const rect = rectRef.current;
    if (!rect) return;
    const stroke = currentStrokeRef.current;
    const pts = stroke.points;

    const list = (typeof e.getCoalescedEvents === 'function' && e.getCoalescedEvents().length)
      ? e.getCoalescedEvents()
      : [e];

    for (const ev of list) {
      const x = ev.clientX - rect.left;
      const y = ev.clientY - rect.top;
      const last = pts[pts.length - 1];
      const dx = x - last[0], dy = y - last[1];
      const distSq = dx * dx + dy * dy;
      if (distSq < MIN_DIST_SQ) continue;

      const sample = lastSampleRef.current;
      const dt = Math.max(1, ev.timeStamp - sample.t);
      const velocity = Math.sqrt(distSq) / dt; // px per ms
      const pressure = ev.pressure > 0 ? ev.pressure : 0.5;
      const w = widthFor(stroke, pressure, velocity);

      pts.push([x, y, w]);
      lastSampleRef.current = { x, y, t: ev.timeStamp };
    }

    flushLive();
  };

  const onPointerUp = (e) => {
    if (!isDrawingRef.current || !currentStrokeRef.current) return;
    if (e.pointerId != null && e.pointerId !== activePointerIdRef.current) return;

    isDrawingRef.current = false;
    activePointerIdRef.current = null;
    const stroke = currentStrokeRef.current;
    currentStrokeRef.current = null;
    if (!stroke) return;

    // Capture the genuine final point so quick taps / short flicks never vanish.
    const rect = rectRef.current;
    if (rect && typeof e.clientX === 'number') {
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const pts = stroke.points;
      const last = pts[pts.length - 1];
      const dx = x - last[0], dy = y - last[1];
      if (dx * dx + dy * dy >= 0.25) {
        pts.push([x, y, last[2]]);
      }
    }
    stroke.completed = true;

    const dpr = window.devicePixelRatio || 1;
    if (stroke.isEraser) {
      // Eraser already painted live onto the bg; flush any remaining tail.
      drawEraserSegments(getBgCtx(), stroke.points, liveDrawnIdxRef.current, stroke.width, dpr);
    } else {
      // Paint the finished pen stroke onto the bg, THEN clear the live overlay
      // (bg-first ordering → zero flash).
      drawPenSegments(getBgCtx(), stroke.points, 1, stroke.color, dpr, true);
      const dctx = getDisplayCtx();
      const dc = displayCanvasRef.current;
      if (dctx && dc) dctx.clearRect(0, 0, dc.width, dc.height);
    }

    setUndoStack(prev => [...prev, strokesRef.current]);
    setStrokes(prev => [...prev, stroke]);
  };

  handlersRef.current = { onPointerDown, onPointerMove, onPointerUp };

  const handleUndo = () => {
    if (!undoStack.length) return;
    const prev = undoStack[undoStack.length - 1];
    setStrokes(prev);
    setUndoStack(u => u.slice(0, -1));
  };

  const handleClear = () => {
    if (!window.confirm('Clear this page?')) return;
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
    <div className="working-out-canvas" style={{ display: 'flex', flexDirection: 'column', height: '100%', minHeight: '400px', width: '100%', borderRadius: '24px', overflow: 'hidden', border: '1px solid #e2e8f0', background: '#fff', position: 'relative', touchAction: 'none', userSelect: 'none', WebkitUserSelect: 'none', WebkitTouchCallout: 'none' }}>
      {!isSubmitted && (
        <div style={{ display: 'flex', padding: '10px 14px', background: '#f8fafc', borderBottom: '1px solid #e2e8f0', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#64748b', marginRight: 'auto', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '6px' }}>
            {isGraph ? 'Graphing Canvas' : 'Working Out Pad'}
            <span style={{ fontSize: '0.6rem', fontWeight: 700, color: '#a5b4fc', background: '#eef2ff', borderRadius: '4px', padding: '1px 5px', letterSpacing: '0.05em' }}>{CANVAS_VERSION}</span>
          </span>

          <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
            <button onClick={() => setPalmGuard(v => !v)} style={{ height: '34px', padding: '0 10px', borderRadius: '10px', border: 'none', cursor: 'pointer', background: palmGuard ? '#ecfdf5' : '#f1f5f9', color: palmGuard ? '#047857' : '#64748b', fontSize: '0.72rem', fontWeight: 900 }}>
              <MousePointer2 size={15} style={{ marginRight: '5px' }} />
              {palmGuard ? 'Pen Only' : 'All Touch'}
            </button>
            <button onClick={() => setActiveTool('pen')} style={{ width: '34px', height: '34px', borderRadius: '10px', border: 'none', cursor: 'pointer', background: activeTool === 'pen' ? '#e0e7ff' : '#f1f5f9', color: activeTool === 'pen' ? '#4f46e5' : '#64748b' }}>
              <PenTool size={17} />
            </button>
            <button
              onClick={() => {
                if (activeTool === 'eraser') { setEraserMode(prev => prev === 'area' ? 'stroke' : 'area'); }
                else { setActiveTool('eraser'); }
              }}
              style={{ height: '34px', padding: '0 10px', borderRadius: '10px', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', background: activeTool === 'eraser' ? '#e0e7ff' : '#f1f5f9', color: activeTool === 'eraser' ? '#4f46e5' : '#64748b' }}
            >
              <Eraser size={17} />
              {activeTool === 'eraser' && (
                <span style={{ fontSize: '0.65rem', fontWeight: 900, textTransform: 'uppercase', background: '#fff', padding: '2px 6px', borderRadius: '4px' }}>{eraserMode}</span>
              )}
            </button>
            <select value={strokeWidth} onChange={e => setStrokeWidth(Number(e.target.value))} style={{ height: '34px', borderRadius: '10px', border: '1px solid #e2e8f0', padding: '0 8px', fontSize: '0.78rem', fontWeight: 700 }}>
              <option value={2}>Thin</option>
              <option value={3}>Normal</option>
              <option value={5}>Thick</option>
            </select>
            <div style={{ display: 'flex', gap: '4px' }}>
              {COLORS.map(c => (
                <button key={c} onClick={() => { setStrokeColor(c); setActiveTool('pen'); }} style={{ width: '20px', height: '20px', borderRadius: '50%', border: strokeColor === c ? '2px solid #4f46e5' : '1px solid #e2e8f0', background: c, cursor: 'pointer' }} />
              ))}
            </div>
            <button onClick={handleUndo} style={{ width: '34px', height: '34px', borderRadius: '10px', border: 'none', cursor: 'pointer', background: '#f1f5f9' }}>
              <RotateCcw size={17} />
            </button>
            <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 0} style={{ width: '34px', height: '34px', borderRadius: '10px', border: 'none' }}>
              <ChevronLeft size={17} />
            </button>
            <button onClick={addPage} style={{ height: '34px', padding: '0 10px', borderRadius: '10px', border: 'none', background: '#e0e7ff', color: '#4f46e5', fontWeight: 900, fontSize: '0.72rem' }}>
              {currentPage + 1}/{pages.length} +
            </button>
            <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === pages.length - 1} style={{ width: '34px', height: '34px', borderRadius: '10px', border: 'none' }}>
              <ChevronRight size={17} />
            </button>
            <button onClick={handleClear} style={{ width: '34px', height: '34px', borderRadius: '10px', border: 'none', background: '#fff1f2', color: '#e11d48' }}>
              <Trash2 size={17} />
            </button>
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
