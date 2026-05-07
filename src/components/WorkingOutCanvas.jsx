import React, { useRef, useState, useImperativeHandle, forwardRef } from 'react';
import { ReactSketchCanvas } from 'react-sketch-canvas';
import { PenTool, Eraser, MousePointer2, RotateCcw, Trash2, Plus, ChevronLeft, ChevronRight } from 'lucide-react';

const hasCoarsePointer = () => (
  typeof window !== 'undefined'
  && window.matchMedia
  && window.matchMedia('(pointer: coarse)').matches
);

const distanceToSegment = (point, start, end) => {
  const dx = end.x - start.x;
  const dy = end.y - start.y;
  if (dx === 0 && dy === 0) {
    return Math.hypot(point.x - start.x, point.y - start.y);
  }

  const t = Math.max(0, Math.min(1, ((point.x - start.x) * dx + (point.y - start.y) * dy) / (dx * dx + dy * dy)));
  const projection = {
    x: start.x + t * dx,
    y: start.y + t * dy,
  };
  return Math.hypot(point.x - projection.x, point.y - projection.y);
};

const WorkingOutCanvas = forwardRef(({ questionType, isSubmitted }, ref) => {
  const canvasRef = useRef(null);
  const canvasAreaRef = useRef(null);
  const [activeTool, setActiveTool] = useState('pen');
  const [eraserMode, setEraserMode] = useState('area');
  const [palmGuard, setPalmGuard] = useState(() => hasCoarsePointer());
  const [paths, setPaths] = useState([]);
  const [pages, setPages] = useState([[]]);
  const [currentPage, setCurrentPage] = useState(0);
  const [strokeColor, setStrokeColor] = useState('#1e1b4b');
  const isAreaEraser = activeTool === 'eraser' && eraserMode === 'area';
  const isStrokeEraser = activeTool === 'eraser' && eraserMode === 'stroke';
  const allowedPointerType = palmGuard ? 'pen' : 'all';

  // Expose exportImage method to parent
  useImperativeHandle(ref, () => ({
    exportImage: async () => {
      if (canvasRef.current) {
        return await canvasRef.current.exportImage('png');
      }
      return null;
    },
    exportPageImages: async () => {
      if (!canvasRef.current) return [];

      const currentPaths = await canvasRef.current.exportPaths().catch(() => paths);
      const pageList = [...pages];
      pageList[currentPage] = currentPaths;
      const exportedPages = [];

      for (const pagePaths of pageList) {
        canvasRef.current.resetCanvas();
        await new Promise(resolve => window.requestAnimationFrame(resolve));
        canvasRef.current.loadPaths(pagePaths || []);
        await new Promise(resolve => window.requestAnimationFrame(() => window.requestAnimationFrame(resolve)));
        exportedPages.push(await canvasRef.current.exportImage('png'));
      }

      canvasRef.current.resetCanvas();
      await new Promise(resolve => window.requestAnimationFrame(resolve));
      canvasRef.current.loadPaths(currentPaths || []);
      setPages(pageList);
      setPaths(currentPaths || []);

      return exportedPages;
    },
    exportPaths: async () => {
      if (canvasRef.current) {
        const currentPaths = await canvasRef.current.exportPaths();
        const nextPages = [...pages];
        nextPages[currentPage] = currentPaths;
        return nextPages;
      }
      return null;
    },
    clear: () => {
      canvasRef.current?.clearCanvas();
      setPaths([]);
      setPages([[]]);
      setCurrentPage(0);
    }
  }));

  const handleClear = () => {
    if (window.confirm('Clear this page? Other pages will stay saved.')) {
      canvasRef.current?.clearCanvas();
      replacePaths([]);
    }
  };

  const handleUndo = () => {
    canvasRef.current?.undo();
  };

  const setDrawMode = () => {
    canvasRef.current?.eraseMode(false);
    setActiveTool('pen');
  };

  const setAreaEraserMode = () => {
    canvasRef.current?.eraseMode(true);
    setActiveTool('eraser');
    setEraserMode('area');
  };

  const setStrokeEraserMode = () => {
    canvasRef.current?.eraseMode(false);
    setActiveTool('eraser');
    setEraserMode('stroke');
  };

  const replacePaths = (nextPaths) => {
    canvasRef.current?.resetCanvas();
    setPaths(nextPaths);
    setPages(prev => {
      const next = [...prev];
      next[currentPage] = nextPaths;
      return next;
    });
    window.requestAnimationFrame(() => {
      canvasRef.current?.loadPaths(nextPaths);
    });
  };

  const handleCanvasChange = (nextPaths) => {
    setPaths(nextPaths);
    setPages(prev => {
      const next = [...prev];
      next[currentPage] = nextPaths;
      return next;
    });
  };

  const getCurrentPaths = async () => {
    if (!canvasRef.current) return paths;
    return await canvasRef.current.exportPaths().catch(() => paths);
  };

  const loadPage = (pageIndex, pageList = pages) => {
    const nextPaths = pageList[pageIndex] || [];
    canvasRef.current?.resetCanvas();
    setPaths(nextPaths);
    setCurrentPage(pageIndex);
    window.requestAnimationFrame(() => {
      canvasRef.current?.loadPaths(nextPaths);
    });
  };

  const goToPage = async (pageIndex) => {
    if (pageIndex < 0 || pageIndex >= pages.length || pageIndex === currentPage) return;
    const currentPaths = await getCurrentPaths();
    const nextPages = [...pages];
    nextPages[currentPage] = currentPaths;
    setPages(nextPages);
    loadPage(pageIndex, nextPages);
  };

  const addPage = async () => {
    const currentPaths = await getCurrentPaths();
    const nextPages = [...pages];
    nextPages[currentPage] = currentPaths;
    nextPages.push([]);
    setPages(nextPages);
    loadPage(nextPages.length - 1, nextPages);
  };

  const getCanvasPoint = (event) => {
    const rect = canvasAreaRef.current?.getBoundingClientRect();
    if (!rect) return null;
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
  };

  const eraseStrokeAt = (event) => {
    if (!isStrokeEraser || isSubmitted) return;
    if (palmGuard && event.pointerType !== 'pen') return;
    event.preventDefault();
    event.stopPropagation();

    const point = getCanvasPoint(event);
    if (!point || paths.length === 0) return;

    let bestIndex = -1;
    let bestDistance = Infinity;
    paths.forEach((path, index) => {
      if (!path?.drawMode || !Array.isArray(path.paths) || path.paths.length === 0) return;
      const points = path.paths;
      let pathDistance = Infinity;

      if (points.length === 1) {
        pathDistance = Math.hypot(point.x - points[0].x, point.y - points[0].y);
      } else {
        for (let i = 1; i < points.length; i += 1) {
          pathDistance = Math.min(pathDistance, distanceToSegment(point, points[i - 1], points[i]));
        }
      }

      if (pathDistance < bestDistance) {
        bestDistance = pathDistance;
        bestIndex = index;
      }
    });

    const threshold = 24;
    if (bestIndex >= 0 && bestDistance <= threshold) {
      replacePaths(paths.filter((_, index) => index !== bestIndex));
    }
  };

  // Grid pattern for graphing
  const isGraph = questionType === 'graph_sketch';
  
  const graphBackgroundStyles = isGraph ? {
    backgroundImage: `
      linear-gradient(to right, #e2e8f0 1px, transparent 1px),
      linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
    `,
    backgroundSize: '20px 20px',
    backgroundPosition: 'center center',
  } : {
    backgroundImage: `
      linear-gradient(to bottom, transparent 31px, #dbeafe 32px)
    `,
    backgroundSize: '100% 32px',
    backgroundPosition: '0 8px',
    backgroundColor: '#fff',
  };

  return (
    <div className="working-out-canvas" style={{ display: 'flex', flexDirection: 'column', height: '100%', minHeight: '400px', width: '100%', borderRadius: '24px', overflow: 'hidden', border: '1px solid #e2e8f0', background: '#fff', position: 'relative' }}>
      
      {/* Toolbar */}
      {!isSubmitted && (
        <div style={{ display: 'flex', padding: '12px 16px', background: '#f8fafc', borderBottom: '1px solid #e2e8f0', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#64748b', marginRight: 'auto', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            {isGraph ? 'Graphing Canvas' : 'Working Out Pad'}
          </span>
          
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => setPalmGuard(value => !value)}
              style={{
                height: '36px', padding: '0 12px', borderRadius: '10px',
                border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
                background: palmGuard ? '#ecfdf5' : '#f1f5f9',
                color: palmGuard ? '#047857' : '#64748b',
                fontSize: '0.72rem', fontWeight: 900,
                transition: 'all 0.2s'
              }}
              title={palmGuard ? 'Pen only: touch is ignored' : 'All touch input allowed'}
            >
              <MousePointer2 size={16} />
              {palmGuard ? 'Pen Only' : 'All Touch'}
            </button>
            <button 
              onClick={setDrawMode}
              style={{
                width: '36px', height: '36px', borderRadius: '10px',
                border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: activeTool === 'pen' ? '#e0e7ff' : '#f1f5f9',
                color: activeTool === 'pen' ? '#4f46e5' : '#64748b',
                transition: 'all 0.2s'
              }}
              title="Pen"
            >
              <PenTool size={18} />
            </button>
            <button 
              onClick={setAreaEraserMode}
              style={{
                height: '36px', padding: '0 12px', borderRadius: '10px',
                border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: isAreaEraser ? '#e0e7ff' : '#f1f5f9',
                color: isAreaEraser ? '#4f46e5' : '#64748b',
                fontSize: '0.72rem', fontWeight: 900, gap: '6px',
                transition: 'all 0.2s'
              }}
              title="Area eraser"
            >
              <Eraser size={18} />
              Area
            </button>
            <button
              onClick={setStrokeEraserMode}
              style={{
                height: '36px', padding: '0 12px', borderRadius: '10px',
                border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: isStrokeEraser ? '#e0e7ff' : '#f1f5f9',
                color: isStrokeEraser ? '#4f46e5' : '#64748b',
                fontSize: '0.72rem', fontWeight: 900, gap: '6px',
                transition: 'all 0.2s'
              }}
              title="Stroke eraser: tap a line to remove the whole stroke"
            >
              <Eraser size={18} />
              Stroke
            </button>
            <div style={{ width: '1px', background: '#cbd5e1', margin: '0 4px' }} />
            <button 
              onClick={handleUndo}
              style={{
                width: '36px', height: '36px', borderRadius: '10px',
                border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: '#f1f5f9', color: '#64748b',
                transition: 'all 0.2s'
              }}
              title="Undo"
            >
              <RotateCcw size={18} />
            </button>
            <div style={{ width: '1px', background: '#cbd5e1', margin: '0 4px' }} />
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 0}
              style={{
                width: '36px', height: '36px', borderRadius: '10px',
                border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: currentPage === 0 ? '#f8fafc' : '#f1f5f9',
                color: currentPage === 0 ? '#cbd5e1' : '#64748b',
                transition: 'all 0.2s'
              }}
              title="Previous page"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={addPage}
              style={{
                height: '36px', minWidth: '86px', padding: '0 12px', borderRadius: '10px',
                border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: '#e0e7ff',
                color: '#4f46e5',
                fontSize: '0.72rem', fontWeight: 900, gap: '6px',
                transition: 'all 0.2s'
              }}
              title="Add page"
            >
              <Plus size={16} />
              Page {currentPage + 1}/{pages.length}
            </button>
            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === pages.length - 1}
              style={{
                width: '36px', height: '36px', borderRadius: '10px',
                border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: currentPage === pages.length - 1 ? '#f8fafc' : '#f1f5f9',
                color: currentPage === pages.length - 1 ? '#cbd5e1' : '#64748b',
                transition: 'all 0.2s'
              }}
              title="Next page"
            >
              <ChevronRight size={18} />
            </button>
            <button 
              onClick={handleClear}
              style={{
                width: '36px', height: '36px', borderRadius: '10px',
                border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: '#fff1f2', color: '#e11d48',
                transition: 'all 0.2s'
              }}
              title="Clear Canvas"
            >
              <Trash2 size={18} />
            </button>
          </div>
        </div>
      )}

      {/* Canvas Area */}
      <div style={{ flex: 1, position: 'relative', background: '#f8fafc', touchAction: 'none', overflow: 'hidden' }}>
        <div
          style={{
            width: '100%',
            height: '100%',
            position: 'relative',
          }}
        >
          <div
            ref={canvasAreaRef}
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
              ...graphBackgroundStyles
            }}
          >
        {/* Draw main X and Y axes if it's a graph question */}
        {isGraph && (
          <>
            <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: '2px', background: '#94a3b8', transform: 'translateY(-50%)', pointerEvents: 'none', zIndex: 1 }} />
            <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: '2px', background: '#94a3b8', transform: 'translateX(-50%)', pointerEvents: 'none', zIndex: 1 }} />
            {/* Arrows */}
            <div style={{ position: 'absolute', top: '50%', right: '0', width: 0, height: 0, borderTop: '5px solid transparent', borderBottom: '5px solid transparent', borderLeft: '10px solid #94a3b8', transform: 'translateY(-50%)', pointerEvents: 'none', zIndex: 1 }} />
            <div style={{ position: 'absolute', left: '50%', top: '0', width: 0, height: 0, borderLeft: '5px solid transparent', borderRight: '5px solid transparent', borderBottom: '10px solid #94a3b8', transform: 'translateX(-50%)', pointerEvents: 'none', zIndex: 1 }} />
            <span style={{ position: 'absolute', top: '50%', right: '15px', fontSize: '14px', fontStyle: 'italic', fontWeight: 'bold', color: '#64748b', transform: 'translateY(-150%)', pointerEvents: 'none', zIndex: 1 }}>x</span>
            <span style={{ position: 'absolute', left: '50%', top: '15px', fontSize: '14px', fontStyle: 'italic', fontWeight: 'bold', color: '#64748b', transform: 'translateX(150%)', pointerEvents: 'none', zIndex: 1 }}>y</span>
          </>
        )}
        
        <ReactSketchCanvas
          ref={canvasRef}
          strokeWidth={isAreaEraser ? 20 : 3}
          eraserWidth={22}
          strokeColor={isAreaEraser ? 'transparent' : strokeColor}
          canvasColor="transparent"
          allowOnlyPointerType={isStrokeEraser ? 'mouse' : allowedPointerType}
          onChange={handleCanvasChange}
          style={{ width: '100%', height: '100%', border: 'none', position: 'relative', zIndex: 5 }}
        />

        {isStrokeEraser && !isSubmitted && (
          <div
            onPointerDown={eraseStrokeAt}
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 8,
              cursor: 'crosshair',
              touchAction: 'none',
              background: 'rgba(99, 102, 241, 0.015)'
            }}
            title="Tap a stroke to remove it"
          />
        )}
        
        {isSubmitted && (
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}>
            <div style={{ background: 'white', padding: '12px 24px', borderRadius: '16px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', fontWeight: 800, color: '#4f46e5' }}>
              Submission Locked
            </div>
          </div>
        )}
        </div>
        </div>
      </div>
    </div>
  );
});

export default WorkingOutCanvas;
