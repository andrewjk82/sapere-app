import React, { useRef, useState, useImperativeHandle, forwardRef, useEffect, useCallback } from 'react';
import { PenTool, Eraser, MousePointer2, RotateCcw, Trash2, ChevronLeft, ChevronRight } from 'lucide-react';

const hasCoarsePointer = () =>
  typeof window !== 'undefined' && window.matchMedia?.('(pointer: coarse)').matches;

const COLORS = ['#1e1b4b', '#ef4444', '#2563eb', '#16a34a', '#7c3aed'];

// Pure helper — defined outside component so it's never recreated
function drawStrokeOnCtx(ctx, stroke, d) {
  if (!ctx || !stroke?.points?.length) return;
  ctx.save();
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';

  if (stroke.isEraser) {
    ctx.globalCompositeOperation = 'destination-out';
    ctx.lineWidth = stroke.width * 6 * d;
    ctx.strokeStyle = 'rgba(0,0,0,1)';
  } else {
    ctx.globalCompositeOperation = 'source-over';
    ctx.lineWidth = stroke.width * d;
    ctx.strokeStyle = stroke.color;
  }

  const pts = stroke.points;
  ctx.beginPath();
  if (pts.length === 1) {
    const r = stroke.isEraser ? stroke.width * 3 * d : Math.max(1, stroke.width / 2) * d;
    ctx.arc(pts[0].x * d, pts[0].y * d, r, 0, Math.PI * 2);
    ctx.fillStyle = stroke.isEraser ? 'rgba(0,0,0,1)' : stroke.color;
    ctx.fill();
  } else {
    ctx.moveTo(pts[0].x * d, pts[0].y * d);
    for (let i = 1; i < pts.length - 1; i++) {
      const ex = (pts[i].x + pts[i + 1].x) / 2 * d;
      const ey = (pts[i].y + pts[i + 1].y) / 2 * d;
      ctx.quadraticCurveTo(pts[i].x * d, pts[i].y * d, ex, ey);
    }
    const l = pts[pts.length - 1];
    ctx.lineTo(l.x * d, l.y * d);
    ctx.stroke();
  }
  ctx.restore();
}

const WorkingOutCanvas = React.memo(forwardRef(({ questionType, isSubmitted }, ref) => {
  // --- Two canvas layers ---
  // committedRef: permanent layer, redrawn only when strokes state changes
  // liveRef:      transparent overlay for the stroke currently being drawn
  const committedRef = useRef(null);
  const liveRef = useRef(null);

  // Refs that mirror state — safe to read inside stable callbacks / ResizeObserver
  const strokesRef = useRef([]);
  const activeToolRef = useRef('pen');
  const eraserModeRef = useRef('area');
  const palmGuardRef = useRef(null);
  const strokeColorRef = useRef('#1e1b4b');
  const strokeWidthRef = useRef(3);

  const isDrawingRef = useRef(false);
  const currentStrokeRef = useRef(null);

  // --- React state (UI + undo) ---
  const [strokes, setStrokes] = useState([]);
  const [undoStack, setUndoStack] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pages, setPages] = useState([[]]);
  const [activeTool, setActiveTool] = useState('pen');
  const [eraserMode, setEraserMode] = useState('area');
  const [palmGuard, setPalmGuard] = useState(() => hasCoarsePointer());
  const [strokeColor, setStrokeColor] = useState('#1e1b4b');
  const [strokeWidth, setStrokeWidth] = useState(3);

  // Sync refs with state on every render (cheap, no effect needed)
  strokesRef.current = strokes;
  activeToolRef.current = activeTool;
  eraserModeRef.current = eraserMode;
  palmGuardRef.current = palmGuard;
  strokeColorRef.current = strokeColor;
  strokeWidthRef.current = strokeWidth;

  const isGraph = questionType === 'graph_sketch';

  // --- Committed canvas operations ---
  const redrawCommitted = useCallback((strokeList) => {
    const canvas = committedRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const d = window.devicePixelRatio || 1;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const s of strokeList) drawStrokeOnCtx(ctx, s, d);
  }, []);

  // Redraw committed canvas only when strokes state changes — NOT on every React render
  useEffect(() => {
    redrawCommitted(strokes);
  }, [strokes, redrawCommitted]);

  // Size sync using a stable ResizeObserver (reads strokesRef to avoid stale closure)
  useEffect(() => {
    const committed = committedRef.current;
    const live = liveRef.current;
    if (!committed || !live) return;

    const syncSize = () => {
      const rect = committed.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const d = window.devicePixelRatio || 1;
      const w = Math.round(rect.width * d);
      const h = Math.round(rect.height * d);
      if (committed.width !== w || committed.height !== h) {
        committed.width = w;
        committed.height = h;
        live.width = w;
        live.height = h;
        redrawCommitted(strokesRef.current); // use ref for up-to-date value
      }
    };

    syncSize();
    const ro = new ResizeObserver(syncSize);
    ro.observe(committed);
    return () => ro.disconnect();
  }, [redrawCommitted]); // redrawCommitted is stable

  // --- Live canvas ---
  const drawLive = () => {
    const canvas = liveRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const d = window.devicePixelRatio || 1;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (currentStrokeRef.current) drawStrokeOnCtx(ctx, currentStrokeRef.current, d);
  };

  const clearLive = () => {
    const canvas = liveRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx?.clearRect(0, 0, canvas.width, canvas.height);
  };

  // --- Pointer events ---
  const toPoint = (e) => {
    const rect = liveRef.current?.getBoundingClientRect();
    if (!rect) return null;
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };

  const onPointerDown = useCallback((e) => {
    if (isSubmitted || (palmGuardRef.current && e.pointerType !== 'pen')) return;
    e.preventDefault();

    const pt = toPoint(e);
    if (!pt) return;

    try { liveRef.current?.setPointerCapture(e.pointerId); } catch {}

    const tool = activeToolRef.current;

    // Stroke-eraser: remove tapped strokes immediately
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
      }
      return;
    }

    isDrawingRef.current = true;
    currentStrokeRef.current = {
      points: [pt],
      color: strokeColorRef.current,
      width: strokeWidthRef.current,
      isEraser: tool === 'eraser',
    };
    drawLive();
  }, [isSubmitted]);

  const onPointerMove = useCallback((e) => {
    if (!isDrawingRef.current || !currentStrokeRef.current) return;

    // Collect coalesced events for sub-frame sampling on 120 Hz / Pencil
    const events = typeof e.getCoalescedEvents === 'function' ? e.getCoalescedEvents() : [e];
    let updated = false;

    for (const ev of events) {
      const pt = toPoint(ev);
      if (!pt) continue;
      const pts = currentStrokeRef.current.points;
      const last = pts[pts.length - 1];
      // No distance threshold — quadratic bezier handles smoothing
      if (!last || pt.x !== last.x || pt.y !== last.y) {
        pts.push(pt);
        updated = true;
      }
    }

    if (updated) drawLive();
  }, []);

  const onPointerUp = useCallback(() => {
    if (!isDrawingRef.current) return;
    isDrawingRef.current = false;

    if (currentStrokeRef.current?.points?.length) {
      const finished = { ...currentStrokeRef.current };
      currentStrokeRef.current = null;
      clearLive();
      // Committing to state triggers redrawCommitted via useEffect
      setUndoStack(prev => [...prev, strokesRef.current]);
      setStrokes(prev => [...prev, finished]);
    } else {
      currentStrokeRef.current = null;
      clearLive();
    }
  }, []);

  // --- Toolbar actions ---
  const handleUndo = () => {
    if (!undoStack.length) return;
    setStrokes(undoStack[undoStack.length - 1]);
    setUndoStack(prev => prev.slice(0, -1));
  };

  const handleClear = () => {
    if (!window.confirm('Clear this page?')) return;
    setUndoStack(prev => [...prev, strokes]);
    setStrokes([]);
  };

  const addPage = () => {
    const next = [...pages];
    next[currentPage] = strokes;
    next.push([]);
    setPages(next);
    setCurrentPage(next.length - 1);
    setStrokes([]);
    setUndoStack([]);
  };

  const goToPage = (idx) => {
    if (idx < 0 || idx >= pages.length) return;
    const next = [...pages];
    next[currentPage] = strokes;
    setPages(next);
    setCurrentPage(idx);
    setStrokes(next[idx] || []);
    setUndoStack([]);
  };

  // --- Export API ---
  useImperativeHandle(ref, () => ({
    exportImage: () => {
      const committed = committedRef.current;
      if (!committed) return Promise.resolve(null);
      const tmp = document.createElement('canvas');
      tmp.width = committed.width;
      tmp.height = committed.height;
      const ctx = tmp.getContext('2d');
      ctx.drawImage(committed, 0, 0);
      if (liveRef.current) ctx.drawImage(liveRef.current, 0, 0);
      return Promise.resolve(tmp.toDataURL('image/png'));
    },
    exportPageImages: async () => {
      const committed = committedRef.current;
      if (!committed) return [];
      const all = [...pages];
      all[currentPage] = strokes;
      const tmp = document.createElement('canvas');
      tmp.width = committed.width;
      tmp.height = committed.height;
      const ctx = tmp.getContext('2d');
      const d = window.devicePixelRatio || 1;
      return all.map(pageStrokes => {
        ctx.clearRect(0, 0, tmp.width, tmp.height);
        for (const s of pageStrokes) drawStrokeOnCtx(ctx, s, d);
        return tmp.toDataURL('image/png');
      });
    },
    clear: () => {
      setStrokes([]);
      setPages([[]]);
      setCurrentPage(0);
      setUndoStack([]);
    },
  }));

  // --- Styles ---
  const bgStyle = isGraph ? {
    backgroundImage: `linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)`,
    backgroundSize: '20px 20px',
  } : {
    backgroundImage: `linear-gradient(to bottom, transparent 31px, #dbeafe 32px)`,
    backgroundSize: '100% 32px',
    backgroundPosition: '0 8px',
    backgroundColor: '#fff',
  };

  const layerStyle = { position: 'absolute', inset: 0, width: '100%', height: '100%' };

  return (
    <div className="working-out-canvas" style={{ display: 'flex', flexDirection: 'column', height: '100%', minHeight: '400px', width: '100%', borderRadius: '24px', overflow: 'hidden', border: '1px solid #e2e8f0', background: '#fff', position: 'relative' }}>
      {!isSubmitted && (
        <div style={{ display: 'flex', padding: '10px 14px', background: '#f8fafc', borderBottom: '1px solid #e2e8f0', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#64748b', marginRight: 'auto', textTransform: 'uppercase' }}>
            {isGraph ? 'Graphing Canvas' : 'Working Out Pad'}
          </span>

          <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
            <button
              onClick={() => setPalmGuard(v => !v)}
              style={{ height: '34px', padding: '0 10px', borderRadius: '10px', border: 'none', cursor: 'pointer', background: palmGuard ? '#ecfdf5' : '#f1f5f9', color: palmGuard ? '#047857' : '#64748b', fontSize: '0.72rem', fontWeight: 900 }}
            >
              <MousePointer2 size={15} style={{ marginRight: '5px' }} />
              {palmGuard ? 'Pen Only' : 'All Touch'}
            </button>

            <button
              onClick={() => setActiveTool('pen')}
              style={{ width: '34px', height: '34px', borderRadius: '10px', border: 'none', cursor: 'pointer', background: activeTool === 'pen' ? '#e0e7ff' : '#f1f5f9', color: activeTool === 'pen' ? '#4f46e5' : '#64748b' }}
            >
              <PenTool size={17} />
            </button>

            <button
              onClick={() => {
                if (activeTool === 'eraser') {
                  setEraserMode(prev => prev === 'area' ? 'stroke' : 'area');
                } else {
                  setActiveTool('eraser');
                }
              }}
              style={{ height: '34px', padding: '0 10px', borderRadius: '10px', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', background: activeTool === 'eraser' ? '#e0e7ff' : '#f1f5f9', color: activeTool === 'eraser' ? '#4f46e5' : '#64748b' }}
            >
              <Eraser size={17} />
              {activeTool === 'eraser' && (
                <span style={{ fontSize: '0.65rem', fontWeight: 900, textTransform: 'uppercase', background: '#fff', padding: '2px 6px', borderRadius: '4px' }}>
                  {eraserMode}
                </span>
              )}
            </button>

            <select
              value={strokeWidth}
              onChange={e => setStrokeWidth(Number(e.target.value))}
              style={{ height: '34px', borderRadius: '10px', border: '1px solid #e2e8f0', padding: '0 8px', fontSize: '0.78rem', fontWeight: 700 }}
            >
              <option value={2}>Thin</option>
              <option value={3}>Normal</option>
              <option value={5}>Thick</option>
            </select>

            <div style={{ display: 'flex', gap: '4px' }}>
              {COLORS.map(c => (
                <button
                  key={c}
                  onClick={() => { setStrokeColor(c); setActiveTool('pen'); }}
                  style={{ width: '20px', height: '20px', borderRadius: '50%', border: strokeColor === c ? '2px solid #4f46e5' : '1px solid #e2e8f0', background: c, cursor: 'pointer' }}
                />
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

        {/* Layer 1: committed strokes — never touched by React re-renders */}
        <canvas ref={committedRef} style={{ ...layerStyle, pointerEvents: 'none' }} />

        {/* Layer 2: live stroke in progress — overlays committed */}
        <canvas
          ref={liveRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onPointerLeave={onPointerUp}
          style={{ ...layerStyle, touchAction: 'none', cursor: activeTool === 'eraser' ? 'cell' : 'crosshair' }}
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
