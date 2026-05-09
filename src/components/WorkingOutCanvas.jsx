import React, { useRef, useState, useImperativeHandle, forwardRef, useEffect, useCallback } from 'react';
import { PenTool, Eraser, MousePointer2, RotateCcw, Trash2, ChevronLeft, ChevronRight } from 'lucide-react';

const hasCoarsePointer = () =>
  typeof window !== 'undefined' && window.matchMedia?.('(pointer: coarse)').matches;

const COLORS = ['#1e1b4b', '#ef4444', '#2563eb', '#16a34a', '#7c3aed'];

/**
 * Single-canvas natural-pen renderer.
 *
 * Key insight: do NOT re-render the entire stroke each frame. Each pointermove
 * draws only the newest tiny quadratic-bezier segment between midpoints — this
 * is the technique used by Procreate, Apple Notes, etc.
 *
 *   pts:        p0 ─ p1 ─ p2 ─ p3 ─ p4 …
 *   midpoints:     m1   m2   m3   m4
 *
 *   Each segment drawn = quadCurveTo(prev_pt, new_mid) starting from prev_mid.
 *   Result: O(1) work per frame regardless of stroke length.
 */

function applyStyle(ctx, stroke, dpr) {
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  if (stroke.isEraser) {
    ctx.globalCompositeOperation = 'destination-out';
    ctx.lineWidth = stroke.width * 6 * dpr;
    ctx.strokeStyle = 'rgba(0,0,0,1)';
  } else {
    ctx.globalCompositeOperation = 'source-over';
    ctx.lineWidth = stroke.width * dpr;
    ctx.strokeStyle = stroke.color;
  }
}

function drawDot(ctx, pt, stroke, dpr) {
  ctx.save();
  if (stroke.isEraser) {
    ctx.globalCompositeOperation = 'destination-out';
    ctx.fillStyle = 'rgba(0,0,0,1)';
  } else {
    ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = stroke.color;
  }
  const r = (stroke.isEraser ? stroke.width * 3 : Math.max(0.6, stroke.width / 2)) * dpr;
  ctx.beginPath();
  ctx.arc(pt.x * dpr, pt.y * dpr, r, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

// Incremental: draw only the newest curve segment for the live stroke
function drawIncrementalSegment(ctx, stroke, dpr) {
  const pts = stroke.points;
  if (pts.length < 2) return;

  ctx.save();
  applyStyle(ctx, stroke, dpr);

  if (pts.length === 2) {
    // First segment — straight line from p0 to mid(p0,p1) so the stroke begins crisp
    const p0 = pts[0], p1 = pts[1];
    const mid = { x: (p0.x + p1.x) / 2, y: (p0.y + p1.y) / 2 };
    ctx.beginPath();
    ctx.moveTo(p0.x * dpr, p0.y * dpr);
    ctx.lineTo(mid.x * dpr, mid.y * dpr);
    ctx.stroke();
    stroke.lastMid = mid;
  } else {
    const prev = pts[pts.length - 2];
    const curr = pts[pts.length - 1];
    const newMid = { x: (prev.x + curr.x) / 2, y: (prev.y + curr.y) / 2 };
    ctx.beginPath();
    ctx.moveTo(stroke.lastMid.x * dpr, stroke.lastMid.y * dpr);
    ctx.quadraticCurveTo(prev.x * dpr, prev.y * dpr, newMid.x * dpr, newMid.y * dpr);
    ctx.stroke();
    stroke.lastMid = newMid;
  }

  ctx.restore();
}

// Close out the stroke: connect from last drawn midpoint to actual final point
function finalizeStroke(ctx, stroke, dpr) {
  const pts = stroke.points;
  if (pts.length < 2 || !stroke.lastMid) return;
  ctx.save();
  applyStyle(ctx, stroke, dpr);
  const last = pts[pts.length - 1];
  ctx.beginPath();
  ctx.moveTo(stroke.lastMid.x * dpr, stroke.lastMid.y * dpr);
  ctx.lineTo(last.x * dpr, last.y * dpr);
  ctx.stroke();
  ctx.restore();
}

// Replay a finished stroke from scratch (for undo / clear / resize)
function drawCompleteStroke(ctx, stroke, dpr) {
  const pts = stroke.points;
  if (!pts?.length) return;

  if (pts.length === 1) {
    drawDot(ctx, pts[0], stroke, dpr);
    return;
  }

  ctx.save();
  applyStyle(ctx, stroke, dpr);

  ctx.beginPath();
  ctx.moveTo(pts[0].x * dpr, pts[0].y * dpr);

  if (pts.length === 2) {
    ctx.lineTo(pts[1].x * dpr, pts[1].y * dpr);
  } else {
    // Quadratic curves through midpoints
    for (let i = 1; i < pts.length - 1; i++) {
      const midX = (pts[i].x + pts[i + 1].x) / 2;
      const midY = (pts[i].y + pts[i + 1].y) / 2;
      ctx.quadraticCurveTo(pts[i].x * dpr, pts[i].y * dpr, midX * dpr, midY * dpr);
    }
    const last = pts[pts.length - 1];
    ctx.lineTo(last.x * dpr, last.y * dpr);
  }

  ctx.stroke();
  ctx.restore();
}

const WorkingOutCanvas = React.memo(forwardRef(({ questionType, isSubmitted }, ref) => {
  const canvasRef = useRef(null);
  const dprRef = useRef(1);
  const rectRef = useRef(null); // cached bounding rect — recomputed on resize / pointerdown only

  const strokesRef = useRef([]);
  const currentStrokeRef = useRef(null);
  const isDrawingRef = useRef(false);
  const activePointerIdRef = useRef(null);

  // Tool state mirrored to refs so handlers (attached once) always see fresh values
  const isSubmittedRef = useRef(false);
  const activeToolRef = useRef('pen');
  const eraserModeRef = useRef('area');
  const palmGuardRef = useRef(false);
  const strokeColorRef = useRef('#1e1b4b');
  const strokeWidthRef = useRef(3);

  // React state
  const [strokes, setStrokes] = useState([]);
  const [undoStack, setUndoStack] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pages, setPages] = useState([[]]);
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

  const getCtx = () => canvasRef.current?.getContext('2d');

  const fullRedraw = useCallback((strokeList) => {
    const canvas = canvasRef.current;
    const ctx = getCtx();
    if (!canvas || !ctx) return;
    const dpr = dprRef.current;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const s of strokeList) drawCompleteStroke(ctx, s, dpr);
  }, []);

  // Size sync
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const sync = () => {
      const rect = canvas.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const dpr = window.devicePixelRatio || 1;
      const w = Math.round(rect.width * dpr);
      const h = Math.round(rect.height * dpr);
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        dprRef.current = dpr;
        fullRedraw(strokesRef.current);
      }
      rectRef.current = rect;
    };

    sync();
    const ro = new ResizeObserver(sync);
    ro.observe(canvas);
    const onScroll = () => { rectRef.current = canvas.getBoundingClientRect(); };
    window.addEventListener('scroll', onScroll, true);
    window.addEventListener('resize', onScroll);
    return () => {
      ro.disconnect();
      window.removeEventListener('scroll', onScroll, true);
      window.removeEventListener('resize', onScroll);
    };
  }, [fullRedraw]);

  // ── Native pointer event listeners (bypass React synthetic events) ──
  // React strips getCoalescedEvents on synthetic events in some versions, and
  // event delegation adds latency. Native listeners give us:
  //   1. Real native PointerEvents with working getCoalescedEvents()
  //   2. Direct path from input → handler (no React wrapping)
  //   3. Reliable preventDefault with passive:false
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const toPoint = (clientX, clientY) => {
      const rect = rectRef.current || canvas.getBoundingClientRect();
      return { x: clientX - rect.left, y: clientY - rect.top };
    };

    const handleDown = (e) => {
      if (isSubmittedRef.current) return;
      if (palmGuardRef.current && e.pointerType !== 'pen') return;
      e.preventDefault();

      // Refresh cached rect at stroke start so we use accurate coords
      rectRef.current = canvas.getBoundingClientRect();
      const pt = toPoint(e.clientX, e.clientY);

      try { canvas.setPointerCapture(e.pointerId); } catch {}
      activePointerIdRef.current = e.pointerId;

      const tool = activeToolRef.current;

      if (tool === 'eraser' && eraserModeRef.current === 'stroke') {
        const hitRadius = 18;
        const current = strokesRef.current;
        const next = current.filter(s => {
          if (s.isEraser) return true;
          return !s.points?.some(p => Math.hypot(p.x - pt.x, p.y - pt.y) < hitRadius);
        });
        if (next.length !== current.length) {
          setUndoStack(prev => [...prev, current]);
          setStrokes(next);
          fullRedraw(next);
        }
        activePointerIdRef.current = null;
        return;
      }

      isDrawingRef.current = true;
      currentStrokeRef.current = {
        points: [pt],
        color: strokeColorRef.current,
        width: strokeWidthRef.current,
        isEraser: tool === 'eraser',
        lastMid: null,
      };

      const ctx = getCtx();
      if (ctx) drawDot(ctx, pt, currentStrokeRef.current, dprRef.current);
    };

    const handleMove = (e) => {
      if (!isDrawingRef.current || !currentStrokeRef.current) return;
      // Filter out other simultaneous pointers (palm, second finger, etc.)
      if (activePointerIdRef.current !== null && e.pointerId !== activePointerIdRef.current) return;
      e.preventDefault();

      const ctx = getCtx();
      if (!ctx) return;
      const dpr = dprRef.current;
      const stroke = currentStrokeRef.current;

      // Pull every sub-frame sample the browser captured
      const coalesced = typeof e.getCoalescedEvents === 'function' ? e.getCoalescedEvents() : null;
      const events = (coalesced && coalesced.length) ? coalesced : [e];

      for (const ev of events) {
        const pt = toPoint(ev.clientX, ev.clientY);
        const last = stroke.points[stroke.points.length - 1];
        if (last && pt.x === last.x && pt.y === last.y) continue;
        stroke.points.push(pt);
        drawIncrementalSegment(ctx, stroke, dpr);
      }
    };

    const handleUp = (e) => {
      if (!isDrawingRef.current) {
        activePointerIdRef.current = null;
        return;
      }
      if (activePointerIdRef.current !== null && e && e.pointerId !== activePointerIdRef.current) return;

      isDrawingRef.current = false;
      activePointerIdRef.current = null;

      const stroke = currentStrokeRef.current;
      if (!stroke) return;

      if (stroke.points.length >= 2) {
        const ctx = getCtx();
        if (ctx) finalizeStroke(ctx, stroke, dprRef.current);
      }

      delete stroke.lastMid;
      setUndoStack(prev => [...prev, strokesRef.current]);
      setStrokes(prev => [...prev, stroke]);
      currentStrokeRef.current = null;
    };

    canvas.addEventListener('pointerdown', handleDown, { passive: false });
    canvas.addEventListener('pointermove', handleMove, { passive: false });
    canvas.addEventListener('pointerup', handleUp);
    canvas.addEventListener('pointercancel', handleUp);
    canvas.addEventListener('pointerleave', handleUp);

    return () => {
      canvas.removeEventListener('pointerdown', handleDown);
      canvas.removeEventListener('pointermove', handleMove);
      canvas.removeEventListener('pointerup', handleUp);
      canvas.removeEventListener('pointercancel', handleUp);
      canvas.removeEventListener('pointerleave', handleUp);
    };
  }, [fullRedraw]);

  // ── Toolbar actions ──
  const handleUndo = () => {
    if (!undoStack.length) return;
    const prev = undoStack[undoStack.length - 1];
    setStrokes(prev);
    setUndoStack(u => u.slice(0, -1));
    fullRedraw(prev);
  };

  const handleClear = () => {
    if (!window.confirm('Clear this page?')) return;
    setUndoStack(prev => [...prev, strokes]);
    setStrokes([]);
    fullRedraw([]);
  };

  const addPage = () => {
    const next = [...pages];
    next[currentPage] = strokes;
    next.push([]);
    setPages(next);
    setCurrentPage(next.length - 1);
    setStrokes([]);
    setUndoStack([]);
    fullRedraw([]);
  };

  const goToPage = (idx) => {
    if (idx < 0 || idx >= pages.length) return;
    const next = [...pages];
    next[currentPage] = strokes;
    setPages(next);
    setCurrentPage(idx);
    const target = next[idx] || [];
    setStrokes(target);
    setUndoStack([]);
    fullRedraw(target);
  };

  // ── Export API ──
  useImperativeHandle(ref, () => ({
    exportImage: () => {
      const canvas = canvasRef.current;
      if (!canvas) return Promise.resolve(null);
      return Promise.resolve(canvas.toDataURL('image/png'));
    },
    exportPageImages: async () => {
      const canvas = canvasRef.current;
      if (!canvas) return [];
      const all = [...pages];
      all[currentPage] = strokes;
      const tmp = document.createElement('canvas');
      tmp.width = canvas.width;
      tmp.height = canvas.height;
      const ctx = tmp.getContext('2d');
      const dpr = dprRef.current;
      return all.map(pageStrokes => {
        ctx.clearRect(0, 0, tmp.width, tmp.height);
        for (const s of pageStrokes) drawCompleteStroke(ctx, s, dpr);
        return tmp.toDataURL('image/png');
      });
    },
    clear: () => {
      setStrokes([]);
      setPages([[]]);
      setCurrentPage(0);
      setUndoStack([]);
      fullRedraw([]);
    },
  }), [pages, currentPage, strokes, fullRedraw]);

  // ── Styles ──
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
    <div className="working-out-canvas" style={{ display: 'flex', flexDirection: 'column', height: '100%', minHeight: '400px', width: '100%', borderRadius: '24px', overflow: 'hidden', border: '1px solid #e2e8f0', background: '#fff', position: 'relative' }}>
      {!isSubmitted && (
        <div style={{ display: 'flex', padding: '10px 14px', background: '#f8fafc', borderBottom: '1px solid #e2e8f0', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#64748b', marginRight: 'auto', textTransform: 'uppercase' }}>
            {isGraph ? 'Graphing Canvas' : 'Working Out Pad'}
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
              onClick={() => activeTool === 'eraser' ? setEraserMode(m => m === 'area' ? 'stroke' : 'area') : setActiveTool('eraser')}
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

      <div style={{ flex: 1, position: 'relative', overflow: 'hidden', ...bgStyle }}>
        {isGraph && (
          <>
            <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: '2px', background: '#94a3b8', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: '2px', background: '#94a3b8', transform: 'translateX(-50%)', pointerEvents: 'none' }} />
          </>
        )}
        <canvas
          ref={canvasRef}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', touchAction: 'none', cursor: activeTool === 'eraser' ? 'cell' : 'crosshair' }}
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
