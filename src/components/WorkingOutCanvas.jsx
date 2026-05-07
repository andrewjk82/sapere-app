import React, { useRef, useState, useImperativeHandle, forwardRef, useEffect, useCallback } from 'react';
import { PenTool, Eraser, MousePointer2, RotateCcw, Trash2, Plus, ChevronLeft, ChevronRight } from 'lucide-react';

const hasCoarsePointer = () =>
  typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(pointer: coarse)').matches;

// ─── Colour swatches ────────────────────────────────────────────────────────
const COLORS = ['#1e1b4b', '#ef4444', '#2563eb', '#16a34a', '#7c3aed'];

const WorkingOutCanvas = React.memo(forwardRef(({ questionType, isSubmitted }, ref) => {
  const displayCanvasRef = useRef(null);   // what the user sees
  const offscreenRef     = useRef(null);   // off-screen canvas used for committed strokes
  const rafRef           = useRef(null);

  const isDrawingRef     = useRef(false);
  const lastPointRef     = useRef(null);
  const currentStrokeRef = useRef([]);     // points for the stroke in progress

  // ── Undo stack: each entry is an ImageData snapshot ─────────────────────
  const undoStackRef     = useRef([]);

  // ── Pages: each page stores an ImageData ────────────────────────────────
  const [pages,       setPages]       = useState([null]);   // null = blank
  const [currentPage, setCurrentPage] = useState(0);

  // ── Tool state ───────────────────────────────────────────────────────────
  const [activeTool,  setActiveTool]  = useState('pen');
  const [palmGuard,   setPalmGuard]   = useState(() => hasCoarsePointer());
  const [strokeColor, setStrokeColor] = useState('#1e1b4b');
  const [strokeWidth, setStrokeWidth] = useState(3);

  const isGraph = questionType === 'graph_sketch';

  // ── Canvas helpers ───────────────────────────────────────────────────────
  const getDisplayCtx  = () => displayCanvasRef.current?.getContext('2d');
  const getOffCtx      = () => offscreenRef.current?.getContext('2d');

  const syncSize = useCallback(() => {
    const display = displayCanvasRef.current;
    const off     = offscreenRef.current;
    if (!display || !off) return;

    const { width, height } = display.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    const w = Math.round(width  * dpr);
    const h = Math.round(height * dpr);

    // Preserve existing content when resizing
    let saved = null;
    if (off.width > 0 && off.height > 0) {
      saved = offscreenRef.current.getContext('2d').getImageData(0, 0, off.width, off.height);
    }

    display.width = off.width  = w;
    display.height = off.height = h;

    display.getContext('2d').scale(dpr, dpr);
    off.getContext('2d').scale(dpr, dpr);

    if (saved) {
      off.getContext('2d').putImageData(saved, 0, 0);
    }
    requestRender();
  }, []);

  useEffect(() => {
    offscreenRef.current = document.createElement('canvas');
    syncSize();

    const ro = new ResizeObserver(syncSize);
    if (displayCanvasRef.current) ro.observe(displayCanvasRef.current);
    return () => ro.disconnect();
  }, [syncSize]);

  // ── Render loop ──────────────────────────────────────────────────────────
  const requestRender = useCallback(() => {
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      render();
    });
  }, []);

  const render = () => {
    const display = displayCanvasRef.current;
    const off     = offscreenRef.current;
    if (!display || !off) return;

    const ctx = display.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const W   = display.width  / dpr;
    const H   = display.height / dpr;

    ctx.clearRect(0, 0, W, H);

    // Blit committed strokes
    ctx.drawImage(off, 0, 0, W, H);

    // Draw the live stroke on top
    const pts = currentStrokeRef.current;
    if (pts.length >= 2) {
      ctx.save();
      ctx.strokeStyle = activeTool === 'eraser' ? 'rgba(0,0,0,0)' : strokeColor;
      ctx.lineWidth   = activeTool === 'eraser' ? strokeWidth * 6 : strokeWidth;
      ctx.lineCap     = 'round';
      ctx.lineJoin    = 'round';
      ctx.globalCompositeOperation = activeTool === 'eraser' ? 'destination-out' : 'source-over';
      ctx.beginPath();
      ctx.moveTo(pts[0].x, pts[0].y);
      for (let i = 1; i < pts.length; i++) {
        const mx = (pts[i - 1].x + pts[i].x) / 2;
        const my = (pts[i - 1].y + pts[i].y) / 2;
        ctx.quadraticCurveTo(pts[i - 1].x, pts[i - 1].y, mx, my);
      }
      ctx.stroke();
      ctx.restore();
    } else if (pts.length === 1) {
      // Dot
      ctx.save();
      ctx.fillStyle = strokeColor;
      ctx.beginPath();
      ctx.arc(pts[0].x, pts[0].y, strokeWidth / 2, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  };

  // ── Pointer utilities ────────────────────────────────────────────────────
  const toCanvasPoint = (e) => {
    const rect = displayCanvasRef.current?.getBoundingClientRect();
    if (!rect) return null;
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };

  const shouldIgnore = (e) => {
    if (isSubmitted) return true;
    if (palmGuard && e.pointerType !== 'pen') return true;
    return false;
  };

  // ── Commit current stroke to off-screen ─────────────────────────────────
  const commitStroke = () => {
    const off = offscreenRef.current;
    const pts = currentStrokeRef.current;
    if (!off || pts.length === 0) return;

    const dpr = window.devicePixelRatio || 1;
    const W   = off.width  / dpr;
    const H   = off.height / dpr;

    const ctx = off.getContext('2d');
    ctx.save();
    ctx.lineCap     = 'round';
    ctx.lineJoin    = 'round';
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth   = strokeWidth;
    ctx.globalCompositeOperation = activeTool === 'eraser' ? 'destination-out' : 'source-over';

    if (pts.length === 1) {
      ctx.fillStyle = strokeColor;
      ctx.beginPath();
      ctx.arc(pts[0].x, pts[0].y, strokeWidth / 2, 0, Math.PI * 2);
      ctx.fill();
    } else {
      ctx.beginPath();
      ctx.moveTo(pts[0].x, pts[0].y);
      for (let i = 1; i < pts.length; i++) {
        const mx = (pts[i - 1].x + pts[i].x) / 2;
        const my = (pts[i - 1].y + pts[i].y) / 2;
        ctx.quadraticCurveTo(pts[i - 1].x, pts[i - 1].y, mx, my);
      }
      ctx.stroke();
    }
    ctx.restore();

    // Save undo snapshot AFTER commit
    undoStackRef.current.push(ctx.getImageData(0, 0, off.width, off.height));
    if (undoStackRef.current.length > 60) undoStackRef.current.shift();

    currentStrokeRef.current = [];
  };

  // ── Pointer handlers ─────────────────────────────────────────────────────
  const onPointerDown = useCallback((e) => {
    if (shouldIgnore(e)) return;
    e.preventDefault();
    displayCanvasRef.current?.setPointerCapture(e.pointerId);
    isDrawingRef.current = true;
    const pt = toCanvasPoint(e);
    if (!pt) return;
    currentStrokeRef.current = [pt];
    lastPointRef.current = pt;
    requestRender();
  }, [shouldIgnore, strokeColor, strokeWidth, activeTool]);

  const onPointerMove = useCallback((e) => {
    if (!isDrawingRef.current || shouldIgnore(e)) return;
    e.preventDefault();

    // ★ getCoalescedEvents captures ALL intermediate positions missed between frames
    const events = e.getCoalescedEvents ? e.getCoalescedEvents() : [e];
    for (const ce of events) {
      const pt = toCanvasPoint(ce);
      if (!pt) continue;
      const last = lastPointRef.current;
      // Minimum distance filter: avoids jitter but keeps all real movement
      if (last && Math.hypot(pt.x - last.x, pt.y - last.y) < 0.5) continue;
      currentStrokeRef.current.push(pt);
      lastPointRef.current = pt;
    }

    requestRender();
  }, [shouldIgnore]);

  const onPointerUp = useCallback((e) => {
    if (!isDrawingRef.current) return;
    isDrawingRef.current = false;
    // Capture final position
    const pt = toCanvasPoint(e);
    if (pt && currentStrokeRef.current.length > 0) {
      currentStrokeRef.current.push(pt);
    }
    commitStroke();
    requestRender();
  }, [strokeColor, strokeWidth, activeTool]);

  const onPointerCancel = useCallback(() => {
    if (!isDrawingRef.current) return;
    isDrawingRef.current = false;
    currentStrokeRef.current = [];
    requestRender();
  }, []);

  // ── Undo ─────────────────────────────────────────────────────────────────
  const handleUndo = () => {
    const off = offscreenRef.current;
    if (!off || undoStackRef.current.length === 0) return;
    undoStackRef.current.pop(); // remove latest
    const ctx = off.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    if (undoStackRef.current.length > 0) {
      ctx.putImageData(undoStackRef.current[undoStackRef.current.length - 1], 0, 0);
    } else {
      ctx.clearRect(0, 0, off.width / dpr, off.height / dpr);
    }
    requestRender();
  };

  // ── Clear ────────────────────────────────────────────────────────────────
  const handleClear = () => {
    if (!window.confirm('Clear this page?')) return;
    const off = offscreenRef.current;
    if (!off) return;
    const dpr = window.devicePixelRatio || 1;
    off.getContext('2d').clearRect(0, 0, off.width / dpr, off.height / dpr);
    undoStackRef.current = [];
    currentStrokeRef.current = [];
    requestRender();
  };

  // ── Pages ────────────────────────────────────────────────────────────────
  const captureCurrentPage = () => {
    const off = offscreenRef.current;
    if (!off) return null;
    return off.getContext('2d').getImageData(0, 0, off.width, off.height);
  };

  const restorePage = (imageData) => {
    const off = offscreenRef.current;
    if (!off) return;
    const ctx = off.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    ctx.clearRect(0, 0, off.width / dpr, off.height / dpr);
    if (imageData) ctx.putImageData(imageData, 0, 0);
    undoStackRef.current = imageData ? [imageData] : [];
    requestRender();
  };

  const goToPage = (newIndex) => {
    if (newIndex < 0 || newIndex >= pages.length || newIndex === currentPage) return;
    const saved = captureCurrentPage();
    setPages(prev => {
      const next = [...prev];
      next[currentPage] = saved;
      return next;
    });
    setCurrentPage(newIndex);
    restorePage(pages[newIndex]);
  };

  const addPage = () => {
    const saved = captureCurrentPage();
    setPages(prev => {
      const next = [...prev];
      next[currentPage] = saved;
      next.push(null);
      return next;
    });
    const newIndex = pages.length; // will be appended
    setCurrentPage(newIndex);
    restorePage(null);
  };

  // ── Export ───────────────────────────────────────────────────────────────
  useImperativeHandle(ref, () => ({
    exportImage: () => {
      // Render the current state and export as data URL
      render();
      return Promise.resolve(displayCanvasRef.current?.toDataURL('image/png') ?? null);
    },
    exportPageImages: async () => {
      // Save current page
      const saved = captureCurrentPage();
      const allPages = [...pages];
      allPages[currentPage] = saved;

      const results = [];
      for (const pageData of allPages) {
        const off = offscreenRef.current;
        const ctx = off.getContext('2d');
        const dpr = window.devicePixelRatio || 1;
        ctx.clearRect(0, 0, off.width / dpr, off.height / dpr);
        if (pageData) ctx.putImageData(pageData, 0, 0);
        render();
        results.push(displayCanvasRef.current?.toDataURL('image/png') ?? null);
      }

      // Restore current page
      restorePage(saved);
      return results;
    },
    clear: () => {
      const off = offscreenRef.current;
      if (!off) return;
      const dpr = window.devicePixelRatio || 1;
      off.getContext('2d').clearRect(0, 0, off.width / dpr, off.height / dpr);
      undoStackRef.current = [];
      currentStrokeRef.current = [];
      setPages([null]);
      setCurrentPage(0);
      requestRender();
    }
  }));

  // ── Background style ─────────────────────────────────────────────────────
  const bgStyle = isGraph ? {
    backgroundImage: `
      linear-gradient(to right, #e2e8f0 1px, transparent 1px),
      linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
    `,
    backgroundSize: '20px 20px',
  } : {
    backgroundImage: `linear-gradient(to bottom, transparent 31px, #dbeafe 32px)`,
    backgroundSize: '100% 32px',
    backgroundPosition: '0 8px',
    backgroundColor: '#fff',
  };

  return (
    <div
      className="working-out-canvas"
      style={{ display: 'flex', flexDirection: 'column', height: '100%', minHeight: '400px', width: '100%', borderRadius: '24px', overflow: 'hidden', border: '1px solid #e2e8f0', background: '#fff', position: 'relative' }}
    >
      {/* Toolbar */}
      {!isSubmitted && (
        <div style={{ display: 'flex', padding: '10px 14px', background: '#f8fafc', borderBottom: '1px solid #e2e8f0', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#64748b', marginRight: 'auto', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            {isGraph ? 'Graphing Canvas' : 'Working Out Pad'}
          </span>

          <div style={{ display: 'flex', gap: '6px', alignItems: 'center', flexWrap: 'wrap' }}>

            {/* Palm guard */}
            <button
              onClick={() => setPalmGuard(v => !v)}
              style={{ height: '34px', padding: '0 10px', borderRadius: '10px', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px', background: palmGuard ? '#ecfdf5' : '#f1f5f9', color: palmGuard ? '#047857' : '#64748b', fontSize: '0.72rem', fontWeight: 900 }}
              title={palmGuard ? 'Pen only (touch ignored)' : 'All touch allowed'}
            >
              <MousePointer2 size={15} />
              {palmGuard ? 'Pen Only' : 'All Touch'}
            </button>

            {/* Pen */}
            <button onClick={() => setActiveTool('pen')} style={{ width: '34px', height: '34px', borderRadius: '10px', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', background: activeTool === 'pen' ? '#e0e7ff' : '#f1f5f9', color: activeTool === 'pen' ? '#4f46e5' : '#64748b' }} title="Pen">
              <PenTool size={17} />
            </button>

            {/* Eraser */}
            <button onClick={() => setActiveTool(t => t === 'eraser' ? 'pen' : 'eraser')} style={{ width: '34px', height: '34px', borderRadius: '10px', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', background: activeTool === 'eraser' ? '#e0e7ff' : '#f1f5f9', color: activeTool === 'eraser' ? '#4f46e5' : '#64748b' }} title="Eraser">
              <Eraser size={17} />
            </button>

            {/* Stroke width */}
            <select value={strokeWidth} onChange={e => setStrokeWidth(Number(e.target.value))} style={{ height: '34px', borderRadius: '10px', border: '1px solid #e2e8f0', padding: '0 8px', fontSize: '0.78rem', fontWeight: 700, background: '#f8fafc', color: '#374151', cursor: 'pointer' }}>
              <option value={2}>Thin</option>
              <option value={3}>Normal</option>
              <option value={5}>Thick</option>
              <option value={9}>Bold</option>
            </select>

            {/* Colours */}
            {COLORS.map(c => (
              <button
                key={c}
                onClick={() => { setStrokeColor(c); setActiveTool('pen'); }}
                style={{ width: '24px', height: '24px', borderRadius: '50%', border: strokeColor === c ? '3px solid #4f46e5' : '2px solid transparent', background: c, cursor: 'pointer', outline: 'none', flexShrink: 0 }}
                title={c}
              />
            ))}

            <div style={{ width: '1px', background: '#cbd5e1', margin: '0 2px' }} />

            {/* Undo */}
            <button onClick={handleUndo} style={{ width: '34px', height: '34px', borderRadius: '10px', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f1f5f9', color: '#64748b' }} title="Undo">
              <RotateCcw size={17} />
            </button>

            <div style={{ width: '1px', background: '#cbd5e1', margin: '0 2px' }} />

            {/* Prev page */}
            <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 0} style={{ width: '34px', height: '34px', borderRadius: '10px', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', background: currentPage === 0 ? '#f8fafc' : '#f1f5f9', color: currentPage === 0 ? '#cbd5e1' : '#64748b' }}>
              <ChevronLeft size={17} />
            </button>

            {/* Page indicator + add */}
            <button onClick={addPage} style={{ height: '34px', minWidth: '80px', padding: '0 10px', borderRadius: '10px', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#e0e7ff', color: '#4f46e5', fontSize: '0.72rem', fontWeight: 900, gap: '5px' }}>
              <Plus size={14} />
              {currentPage + 1}/{pages.length}
            </button>

            {/* Next page */}
            <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === pages.length - 1} style={{ width: '34px', height: '34px', borderRadius: '10px', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', background: currentPage === pages.length - 1 ? '#f8fafc' : '#f1f5f9', color: currentPage === pages.length - 1 ? '#cbd5e1' : '#64748b' }}>
              <ChevronRight size={17} />
            </button>

            {/* Clear */}
            <button onClick={handleClear} style={{ width: '34px', height: '34px', borderRadius: '10px', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff1f2', color: '#e11d48' }} title="Clear">
              <Trash2 size={17} />
            </button>
          </div>
        </div>
      )}

      {/* Canvas area */}
      <div style={{ flex: 1, position: 'relative', overflow: 'hidden', ...bgStyle }}>
        {/* Graph axes */}
        {isGraph && (
          <>
            <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: '2px', background: '#94a3b8', transform: 'translateY(-50%)', pointerEvents: 'none', zIndex: 1 }} />
            <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: '2px', background: '#94a3b8', transform: 'translateX(-50%)', pointerEvents: 'none', zIndex: 1 }} />
            <span style={{ position: 'absolute', top: '50%', right: '18px', fontSize: '13px', fontStyle: 'italic', fontWeight: 'bold', color: '#64748b', transform: 'translateY(-150%)', pointerEvents: 'none', zIndex: 1 }}>x</span>
            <span style={{ position: 'absolute', left: '50%', top: '18px', fontSize: '13px', fontStyle: 'italic', fontWeight: 'bold', color: '#64748b', transform: 'translateX(150%)', pointerEvents: 'none', zIndex: 1 }}>y</span>
          </>
        )}

        <canvas
          ref={displayCanvasRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerCancel}
          onPointerLeave={onPointerCancel}
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            touchAction: 'none',
            cursor: activeTool === 'eraser' ? 'cell' : 'crosshair',
            zIndex: 5,
          }}
        />

        {isSubmitted && (
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.55)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}>
            <div style={{ background: 'white', padding: '12px 24px', borderRadius: '16px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', fontWeight: 800, color: '#4f46e5' }}>
              Submission Locked
            </div>
          </div>
        )}
      </div>
    </div>
  );
}));

export default WorkingOutCanvas;
