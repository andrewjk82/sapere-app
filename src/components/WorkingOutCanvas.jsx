import React, { useRef, useState, useImperativeHandle, forwardRef, useEffect, useCallback } from 'react';
import { getStroke } from 'perfect-freehand';
import { PenTool, Eraser, MousePointer2, RotateCcw, Trash2, ChevronLeft, ChevronRight } from 'lucide-react';

// ⬆ Bump this every time you modify the canvas so you can confirm the deployed version
const CANVAS_VERSION = 'v8.1-fix';

const MIN_DIST_SQ = 4;      // Lowered for finer detail
const BAKE_EVERY = 80;      // Bake history snapshot less frequently
const LIVE_TAIL = 70;       // Max points processed live by getStroke
const BAKE_OVERLAP = 12;    // Slightly larger overlap for seam stability

const hasCoarsePointer = () =>
  typeof window !== 'undefined' && window.matchMedia?.('(pointer: coarse)').matches;

const COLORS = ['#1e1b4b', '#ef4444', '#2563eb', '#16a34a', '#7c3aed'];

const PF_OPTIONS = (size, hasRealPressure) => ({
  size,
  thinning: 0.5,
  smoothing: 0.5,
  streamline: 0.5,
  easing: (t) => t,
  simulatePressure: !hasRealPressure,
  last: false,
  start: { taper: 0, cap: true },
  end: { taper: 0, cap: true },
});

const PF_OPTIONS_FINAL = (size, hasRealPressure) => ({
  ...PF_OPTIONS(size, hasRealPressure),
  last: true,
  streamline: 0.5,
  smoothing: 0.6,
});

const toTuple = (pt, pressure) => [pt.x, pt.y, pressure];

// Draw a perfect-freehand polygon onto ctx
function drawPFOutline(ctx, outline, dpr) {
  if (!outline || outline.length < 3) return;
  ctx.beginPath();
  ctx.moveTo(outline[0][0] * dpr, outline[0][1] * dpr);
  for (let i = 1; i < outline.length; i++) {
    ctx.lineTo(outline[i][0] * dpr, outline[i][1] * dpr);
  }
  ctx.closePath();
  ctx.fill();
}

// Draw a committed stroke (uses cached outline)
function drawCommittedStroke(ctx, stroke, dpr) {
  if (!ctx || !stroke?.points || stroke.points.length === 0) return;
  ctx.save();
  if (stroke.isEraser) {
    ctx.globalCompositeOperation = 'destination-out';
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineWidth = stroke.width * 6 * dpr;
    ctx.strokeStyle = 'rgba(0,0,0,1)';
    const pts = stroke.points;
    ctx.beginPath();
    if (pts.length === 1) {
      ctx.arc(pts[0][0] * dpr, pts[0][1] * dpr, stroke.width * 3 * dpr, 0, Math.PI * 2);
      ctx.fillStyle = 'black';
      ctx.fill();
    } else {
      ctx.moveTo(pts[0][0] * dpr, pts[0][1] * dpr);
      for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i][0] * dpr, pts[i][1] * dpr);
      ctx.stroke();
    }
  } else {
    ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = stroke.color;
    drawPFOutline(ctx, stroke.outline, dpr);
  }
  ctx.restore();
}

const computeSize = (uiWidth) => Math.max(4, uiWidth * 2.6);
const pageHasInk = (pageStrokes = []) =>
  Array.isArray(pageStrokes) && pageStrokes.some(stroke =>
    !stroke?.isEraser && Array.isArray(stroke.points) && stroke.points.length > 0
  );

const WorkingOutCanvas = React.memo(forwardRef(({ questionType, isSubmitted }, ref) => {
  const displayCanvasRef = useRef(null);
  const bgCanvasRef = useRef(null);
  const rafRef = useRef(null);
  const isDrawingRef = useRef(false);
  const currentStrokeRef = useRef(null);
  const lastRenderedPointCountRef = useRef(0);
  const predictedPointsRef = useRef([]);
  // Snapshot baking: offscreen canvas holding baked history + cutoff index
  const liveSnapshotRef = useRef(null);
  const bakeCutoffRef = useRef(0);
  // Stable ref holding the latest pointer handlers — used by native event listeners
  const handlersRef = useRef({});

  // Tool state mirrored to refs so handlers (attached once) always see fresh values
  const isSubmittedRef = useRef(false);
  const activeToolRef = useRef('pen');
  const eraserModeRef = useRef('area');
  const palmGuardRef = useRef(false);
  const strokeColorRef = useRef('#1e1b4b');
  const strokeWidthRef = useRef(3);

  // Refs for values used inside RAF callbacks to avoid stale closures
  const strokesRef = useRef([]);

  const [strokes, setStrokes] = useState([]);
  const [undoStack, setUndoStack] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pages, setPages] = useState([[]]); // eslint-disable-line no-unused-vars

  const [activeTool, setActiveTool] = useState('pen');
  const [eraserMode, setEraserMode] = useState('area');
  const [palmGuard, setPalmGuard] = useState(() => hasCoarsePointer());
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

  // Keep strokesRef in sync without triggering re-renders in RAF
  useEffect(() => {
    strokesRef.current = strokes;
  }, [strokes]);

  // ─── Background canvas: only redraws when strokes array changes ──────────
  const redrawBackground = useCallback(() => {
    const canvas = bgCanvasRef.current;
    if (!canvas || canvas.width === 0) return;
    // desynchronized: true means we must specify it on first getContext call
    const ctx = canvas.getContext('2d', { desynchronized: true });
    const dpr = window.devicePixelRatio || 1;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    strokesRef.current.forEach(s => drawCommittedStroke(ctx, s, dpr));
  }, []);

  // ─── Foreground canvas: only draws the live in-progress stroke ───────────
  // Snapshot baking: baked history drawImage'd + getStroke only on last LIVE_TAIL points → O(1)/frame.
  const renderLiveStroke = useCallback(() => {
    const canvas = displayCanvasRef.current;
    if (!canvas || canvas.width === 0) return;
    // desynchronized: true — bypasses the browser's main compositing pipeline,
    // reducing touch-to-pixel latency on ProMotion displays.
    const ctx = canvas.getContext('2d', { desynchronized: true });
    const stroke = currentStrokeRef.current;
    const dpr = window.devicePixelRatio || 1;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (!stroke || stroke.points.length === 0) {
      predictedPointsRef.current = [];
      return;
    }

    if (stroke.isEraser) {
      const bgCanvas = bgCanvasRef.current;
      if (!bgCanvas) return;
      const bgCtx = bgCanvas.getContext('2d', { desynchronized: true });
      const pts = stroke.points;
      const from = Math.max(0, lastRenderedPointCountRef.current - 1);
      bgCtx.save();
      bgCtx.globalCompositeOperation = 'destination-out';
      bgCtx.lineCap = 'round';
      bgCtx.lineJoin = 'round';
      bgCtx.lineWidth = stroke.width * 6 * dpr;
      bgCtx.strokeStyle = 'rgba(0,0,0,1)';
      bgCtx.beginPath();
      bgCtx.moveTo(pts[from][0] * dpr, pts[from][1] * dpr);
      for (let i = from + 1; i < pts.length; i++) {
        bgCtx.lineTo(pts[i][0] * dpr, pts[i][1] * dpr);
      }
      bgCtx.stroke();
      bgCtx.restore();
      lastRenderedPointCountRef.current = pts.length;
      return;
    }

    const pts = stroke.points;
    const totalPoints = pts.length;

    // Baking - Strengthened stability: bake history to offscreen snapshot so live PF only processes LIVE_TAIL points.
    if (totalPoints > bakeCutoffRef.current + BAKE_EVERY + LIVE_TAIL) {
      const newCutoff = totalPoints - LIVE_TAIL;
      let snap = liveSnapshotRef.current;

      if (!snap || snap.width !== canvas.width || snap.height !== canvas.height) {
        snap = document.createElement('canvas');
        snap.width = canvas.width;
        snap.height = canvas.height;
        liveSnapshotRef.current = snap;
      }

      const snapCtx = snap.getContext('2d');
      snapCtx.clearRect(0, 0, snap.width, snap.height);
      snapCtx.fillStyle = stroke.color;

      const bakedOutline = getStroke(
        pts.slice(0, newCutoff),
        PF_OPTIONS(stroke.size, stroke.hasRealPressure)
      );
      drawPFOutline(snapCtx, bakedOutline, dpr);

      bakeCutoffRef.current = newCutoff;
    }

    ctx.save();
    ctx.globalCompositeOperation = 'source-over';

    if (liveSnapshotRef.current && bakeCutoffRef.current > 0) {
      ctx.drawImage(liveSnapshotRef.current, 0, 0);
    }

    const tailStart = Math.max(0, bakeCutoffRef.current - BAKE_OVERLAP);
    const tailPts = tailStart > 0 ? pts.slice(tailStart) : pts;
    const renderPoints = [...tailPts, ...predictedPointsRef.current];

    ctx.fillStyle = stroke.color;
    const liveOutline = getStroke(renderPoints, PF_OPTIONS(stroke.size, stroke.hasRealPressure));
    drawPFOutline(ctx, liveOutline, dpr);

    ctx.restore();
    lastRenderedPointCountRef.current = totalPoints;
  }, []);

  const requestRender = useCallback(() => {
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      renderLiveStroke();
    });
  }, [renderLiveStroke]);

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
    if (resized) { redrawBackground(); }
  }, [redrawBackground]);

  // Initial size sync + ResizeObserver
  useEffect(() => {
    syncSize();
    const ro = new ResizeObserver(syncSize);
    const display = displayCanvasRef.current;
    if (display) ro.observe(display);
    return () => ro.disconnect();
  }, [syncSize]);

  // Redraw background whenever strokes array changes (undo, new stroke, page switch)
  useEffect(() => {
    redrawBackground();
  }, [strokes, redrawBackground]);

  // Native pointer event listeners — bypasses React's passive event delegation so
  // preventDefault() actually works and events arrive before React's batching overhead.
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
    return () => {
      canvas.removeEventListener('pointerdown',   down);
      canvas.removeEventListener('pointermove',   move);
      canvas.removeEventListener('pointerup',     up);
      canvas.removeEventListener('pointercancel', up);
    };
  }, []);

  // ─── Pointer handlers ─────────────────────────────────────────────────────
  const toCanvasPoint = (e, rect = null) => {
    const r = rect || displayCanvasRef.current?.getBoundingClientRect();
    if (!r) return null;
    return { x: e.clientX - r.left, y: e.clientY - r.top };
  };

  const onPointerDown = (e) => {
    if (isSubmittedRef.current || (palmGuardRef.current && e.pointerType !== 'pen')) return;
    if (!displayCanvasRef.current) return;

    e.preventDefault();
    const pt = toCanvasPoint(e);
    if (!pt) return;

    try { displayCanvasRef.current.setPointerCapture(e.pointerId); } catch {}

    if (activeToolRef.current === 'eraser' && eraserModeRef.current === 'stroke') {
      const hitRadius = 15;
      const newStrokes = strokesRef.current.filter(s => {
        if (s.isEraser) return true;
        if (!s.points) return false;
        return !s.points.some(p => Math.hypot(p[0] - pt.x, p[1] - pt.y) < hitRadius);
      });
      if (newStrokes.length !== strokesRef.current.length) {
        setUndoStack(prev => [...prev, strokesRef.current]);
        setStrokes(newStrokes);
      }
      return;
    }

    isDrawingRef.current = true;
    lastRenderedPointCountRef.current = 0;
    liveSnapshotRef.current = null;
    bakeCutoffRef.current = 0;
    const hasRealPressure = e.pointerType === 'pen';
    const pressure = hasRealPressure && e.pressure > 0 ? e.pressure : 0.5;

    currentStrokeRef.current = {
      points: [toTuple(pt, pressure)],
      color: strokeColorRef.current,
      width: strokeWidthRef.current,
      size: computeSize(strokeWidthRef.current),
      hasRealPressure,
      isEraser: activeToolRef.current === 'eraser',
      completed: false,
    };
  };

  const onPointerMove = (e) => {
    if (!isDrawingRef.current || !currentStrokeRef.current) return;
    if (e.cancelable !== false) e.preventDefault();

    const events = typeof e.getCoalescedEvents === 'function' ? e.getCoalescedEvents() : null;
    const list = events && events.length > 0 ? events : [e];

    const pts = currentStrokeRef.current.points;
    const hasRealPressure = currentStrokeRef.current.hasRealPressure;
    const rect = displayCanvasRef.current?.getBoundingClientRect();

    let added = false;
    for (const ev of list) {
      const pt = toCanvasPoint(ev, rect);
      if (!pt) continue;
      const pressure = hasRealPressure && ev.pressure > 0 ? ev.pressure : 0.5;
      const last = pts[pts.length - 1];
      const dx = pt.x - last[0], dy = pt.y - last[1];
      if (dx * dx + dy * dy < MIN_DIST_SQ) continue;
      pts.push(toTuple(pt, pressure));
      added = true;
    }

    const predicted = typeof e.getPredictedEvents === 'function' ? e.getPredictedEvents() : [];
    predictedPointsRef.current = predicted
      .map(ev => {
        const pt = toCanvasPoint(ev, rect);
        if (!pt) return null;
        const pressure = hasRealPressure && ev.pressure > 0 ? ev.pressure : 0.5;
        return toTuple(pt, pressure);
      })
      .filter(Boolean);

    if (added || predictedPointsRef.current.length > 0) requestRender();
  };

  const onPointerUp = (e) => {
    if (!isDrawingRef.current || !currentStrokeRef.current) return;

    isDrawingRef.current = false;
    const finished = currentStrokeRef.current;
    if (!finished) return;

    // Final point capture to prevent missing last segments (crucial fix)
    if (e && typeof e.clientX === 'number') {
      const rect = displayCanvasRef.current?.getBoundingClientRect();
      const pt = toCanvasPoint(e, rect);
      if (pt) {
        const pts = finished.points;
        if (pts.length > 0) {
          const last = pts[pts.length - 1];
          const dx = pt.x - last[0], dy = pt.y - last[1];
          if (dx * dx + dy * dy >= MIN_DIST_SQ) {
            const pressure = finished.hasRealPressure && e.pressure > 0 ? e.pressure : 0.5;
            pts.push(toTuple(pt, pressure));
          }
        }
      }
    }

    finished.completed = true;

    if (!finished.isEraser) {
      finished.outline = getStroke(
        finished.points, 
        PF_OPTIONS_FINAL(finished.size, finished.hasRealPressure)
      );
    }

    // Cleanup session state
    currentStrokeRef.current = null;
    predictedPointsRef.current = [];
    liveSnapshotRef.current = null;
    bakeCutoffRef.current = 0;

    // Commit to background buffer
    const bgCanvas = bgCanvasRef.current;
    if (bgCanvas) {
      const dpr = window.devicePixelRatio || 1;
      drawCommittedStroke(bgCanvas.getContext('2d', { desynchronized: true }), finished, dpr);
    }

    // Clear live overlay
    const display = displayCanvasRef.current;
    if (display) {
      const ctx = display.getContext('2d', { desynchronized: true });
      ctx.clearRect(0, 0, display.width, display.height);
    }

    setUndoStack(prev => [...prev, strokesRef.current]);
    setStrokes(prev => [...prev, finished]);
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
      (pageStrokes || []).forEach(s => drawCommittedStroke(ctx, s, dpr));
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
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', willChange: 'transform' }}
        />
        <canvas
          ref={displayCanvasRef}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', touchAction: 'none', userSelect: 'none', WebkitUserSelect: 'none', WebkitTouchCallout: 'none', cursor: activeTool === 'eraser' ? 'cell' : 'crosshair', willChange: 'transform' }}
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
