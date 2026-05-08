import React, { useRef, useState, useImperativeHandle, forwardRef, useEffect, useCallback } from 'react';
import { getStroke } from 'perfect-freehand';
import { PenTool, Eraser, MousePointer2, RotateCcw, Trash2, Plus, ChevronLeft, ChevronRight } from 'lucide-react';

const hasCoarsePointer = () =>
  typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(pointer: coarse)').matches;

const COLORS = ['#1e1b4b', '#ef4444', '#2563eb', '#16a34a', '#7c3aed'];

// perfect-freehand stroke options tuned for natural pen-on-paper feel
const getStrokeOptions = (size, hasRealPressure, completed) => ({
  size,
  thinning: 0.6,
  smoothing: 0.55,
  streamline: 0.45,
  easing: (t) => Math.sin((t * Math.PI) / 2),
  simulatePressure: !hasRealPressure,
  last: completed,
  start: { taper: 0, cap: true },
  end: { taper: 0, cap: true },
});

// Convert a point into perfect-freehand's [x, y, pressure] tuple format
const toTuple = (pt, pressure) => [pt.x, pt.y, pressure];

const WorkingOutCanvas = React.memo(forwardRef(({ questionType, isSubmitted }, ref) => {
  const displayCanvasRef = useRef(null);
  const rafRef = useRef(null);

  const isDrawingRef = useRef(false);
  const currentStrokeRef = useRef(null);

  // --- State ---
  const [strokes, setStrokes] = useState([]);
  const [undoStack, setUndoStack] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pages, setPages] = useState([[]]);

  const [activeTool, setActiveTool] = useState('pen');
  const [eraserMode, setEraserMode] = useState('area');
  const [palmGuard, setPalmGuard] = useState(() => hasCoarsePointer());
  const [strokeColor, setStrokeColor] = useState('#1e1b4b');
  const [strokeWidth, setStrokeWidth] = useState(3);

  const isGraph = questionType === 'graph_sketch';

  // --- Rendering ---
  const renderStroke = useCallback((ctx, stroke, dpr) => {
    if (!ctx || !stroke?.points || stroke.points.length === 0) return;

    ctx.save();

    if (stroke.isEraser) {
      // Eraser stays as a simple destination-out path — preserves performance & predictable feel
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
        for (let i = 1; i < pts.length; i++) {
          ctx.lineTo(pts[i][0] * dpr, pts[i][1] * dpr);
        }
        ctx.stroke();
      }
      ctx.restore();
      return;
    }

    // Pen — use perfect-freehand for natural ink outlines
    ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = stroke.color;

    // Use cached outline for committed strokes; recompute live for in-progress
    const outline = stroke.outline
      ? stroke.outline
      : getStroke(stroke.points, getStrokeOptions(stroke.size, stroke.hasRealPressure, !!stroke.completed));

    if (!outline || outline.length < 3) {
      ctx.restore();
      return;
    }

    ctx.beginPath();
    ctx.moveTo(outline[0][0] * dpr, outline[0][1] * dpr);
    for (let i = 1; i < outline.length; i++) {
      ctx.lineTo(outline[i][0] * dpr, outline[i][1] * dpr);
    }
    ctx.closePath();
    ctx.fill();

    ctx.restore();
  }, []);

  const render = useCallback(() => {
    const canvas = displayCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const dpr = window.devicePixelRatio || 1;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (Array.isArray(strokes)) {
      strokes.forEach(s => renderStroke(ctx, s, dpr));
    }

    if (currentStrokeRef.current) {
      renderStroke(ctx, currentStrokeRef.current, dpr);
    }
  }, [strokes, renderStroke]);

  const requestRender = useCallback(() => {
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      render();
    });
  }, [render]);

  const syncSize = useCallback(() => {
    const display = displayCanvasRef.current;
    if (!display) return;
    const { width, height } = display.getBoundingClientRect();
    if (width === 0 || height === 0) return;

    const dpr = window.devicePixelRatio || 1;
    const newW = Math.round(width * dpr);
    const newH = Math.round(height * dpr);

    if (display.width !== newW || display.height !== newH) {
      display.width = newW;
      display.height = newH;
    }
    requestRender();
  }, [requestRender]);

  useEffect(() => {
    syncSize();
    const ro = new ResizeObserver(syncSize);
    if (displayCanvasRef.current) ro.observe(displayCanvasRef.current);
    return () => {
      ro.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [syncSize]);

  useEffect(() => {
    render();
  }, [render]);

  // --- Pointer handlers ---
  const toCanvasPoint = (e) => {
    const rect = displayCanvasRef.current?.getBoundingClientRect();
    if (!rect) return null;
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };

  // perfect-freehand `size` is approximately the max line diameter at full pressure.
  // Map UI thickness (2/3/5) to a comfortable handwriting size range.
  const computeSize = (uiWidth) => Math.max(4, uiWidth * 2.6);

  const onPointerDown = (e) => {
    if (isSubmitted || (palmGuard && e.pointerType !== 'pen')) return;
    if (!displayCanvasRef.current) return;

    e.preventDefault();

    const pt = toCanvasPoint(e);
    if (!pt) return;

    try {
      displayCanvasRef.current.setPointerCapture(e.pointerId);
    } catch (err) {
      console.warn('Pointer capture failed:', err);
    }

    if (activeTool === 'eraser' && eraserMode === 'stroke') {
      const hitRadius = 15;
      const newStrokes = strokes.filter(s => {
        if (s.isEraser) return true;
        if (!s.points) return false;
        return !s.points.some(p => Math.hypot(p[0] - pt.x, p[1] - pt.y) < hitRadius);
      });
      if (newStrokes.length !== strokes.length) {
        setUndoStack(prev => [...prev, strokes]);
        setStrokes(newStrokes);
      }
      return;
    }

    isDrawingRef.current = true;
    const hasRealPressure = e.pointerType === 'pen';
    const pressure = hasRealPressure && e.pressure > 0 ? e.pressure : 0.5;

    currentStrokeRef.current = {
      points: [toTuple(pt, pressure)],
      color: strokeColor,
      width: strokeWidth,
      size: computeSize(strokeWidth),
      hasRealPressure,
      isEraser: activeTool === 'eraser',
      completed: false,
    };
    requestRender();
  };

  const onPointerMove = (e) => {
    if (!isDrawingRef.current || !currentStrokeRef.current) return;

    // Capture sub-frame pointer events for high-Hz devices (Apple Pencil 120Hz, etc.)
    const events = typeof e.getCoalescedEvents === 'function' ? e.getCoalescedEvents() : null;
    const list = events && events.length > 0 ? events : [e];

    const pts = currentStrokeRef.current.points;
    const hasRealPressure = currentStrokeRef.current.hasRealPressure;

    for (const ev of list) {
      const pt = toCanvasPoint(ev);
      if (!pt) continue;

      const last = pts[pts.length - 1];
      // Tighter threshold than before — perfect-freehand smooths/streamlines for us
      if (last && Math.hypot(pt.x - last[0], pt.y - last[1]) < 1) continue;

      const pressure = hasRealPressure && ev.pressure > 0 ? ev.pressure : 0.5;
      pts.push(toTuple(pt, pressure));
    }

    requestRender();
  };

  const onPointerUp = () => {
    if (!isDrawingRef.current) return;
    isDrawingRef.current = false;

    if (!currentStrokeRef.current) return;

    const finished = currentStrokeRef.current;
    finished.completed = true;
    // Cache the final outline polygon so future renders are O(n) fill, not O(n) compute
    if (!finished.isEraser) {
      finished.outline = getStroke(
        finished.points,
        getStrokeOptions(finished.size, finished.hasRealPressure, true)
      );
    }

    setUndoStack(prev => [...prev, strokes]);
    setStrokes(prev => [...prev, finished]);
    currentStrokeRef.current = null;
  };

  const handleUndo = () => {
    if (undoStack.length === 0) return;
    const prev = undoStack[undoStack.length - 1];
    setStrokes(prev);
    setUndoStack(undoStack.slice(0, -1));
  };

  const handleClear = () => {
    if (!window.confirm('Clear this page?')) return;
    setUndoStack(prev => [...prev, strokes]);
    setStrokes([]);
  };

  const addPage = () => {
    const nextPages = [...pages];
    nextPages[currentPage] = strokes;
    nextPages.push([]);
    setPages(nextPages);
    setCurrentPage(nextPages.length - 1);
    setStrokes([]);
    setUndoStack([]);
  };

  const goToPage = (idx) => {
    if (idx < 0 || idx >= pages.length) return;
    const nextPages = [...pages];
    nextPages[currentPage] = strokes;
    setPages(nextPages);
    setCurrentPage(idx);
    setStrokes(nextPages[idx] || []);
    setUndoStack([]);
  };

  useImperativeHandle(ref, () => ({
    exportImage: () => {
      render();
      return Promise.resolve(displayCanvasRef.current?.toDataURL('image/png') ?? null);
    },
    exportPageImages: async () => {
      const results = [];
      const originalStrokes = [...strokes];
      const all = [...pages];
      all[currentPage] = strokes;

      const canvas = displayCanvasRef.current;
      if (!canvas) return [];
      const ctx = canvas.getContext('2d');
      if (!ctx) return [];
      const dpr = window.devicePixelRatio || 1;

      for (let i = 0; i < all.length; i++) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const pageStrokes = all[i] || [];
        pageStrokes.forEach(s => renderStroke(ctx, s, dpr));
        results.push(canvas.toDataURL('image/png'));
      }

      setStrokes(originalStrokes);
      return results;
    },
    clear: () => {
      setStrokes([]);
      setPages([[]]);
      setCurrentPage(0);
      setUndoStack([]);
    }
  }));

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
    <div className="working-out-canvas" style={{ display: 'flex', flexDirection: 'column', height: '100%', minHeight: '400px', width: '100%', borderRadius: '24px', overflow: 'hidden', border: '1px solid #e2e8f0', background: '#fff', position: 'relative', touchAction: 'none' }}>
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

            <button onClick={() => setActiveTool('pen')} style={{ width: '34px', height: '34px', borderRadius: '10px', border: 'none', cursor: 'pointer', background: activeTool === 'pen' ? '#e0e7ff' : '#f1f5f9', color: activeTool === 'pen' ? '#4f46e5' : '#64748b' }}>
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
              style={{
                height: '34px',
                padding: '0 10px',
                borderRadius: '10px',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                background: activeTool === 'eraser' ? '#e0e7ff' : '#f1f5f9',
                color: activeTool === 'eraser' ? '#4f46e5' : '#64748b'
              }}
            >
              <Eraser size={17} />
              {activeTool === 'eraser' && (
                <span style={{ fontSize: '0.65rem', fontWeight: 900, textTransform: 'uppercase', background: '#fff', padding: '2px 6px', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                  {eraserMode}
                </span>
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
          ref={displayCanvasRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onPointerLeave={onPointerUp}
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
