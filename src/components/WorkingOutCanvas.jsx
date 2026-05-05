import React, { useRef, useState, useImperativeHandle, forwardRef } from 'react';
import { ReactSketchCanvas } from 'react-sketch-canvas';
import { PenTool, Eraser, RotateCcw, Trash2 } from 'lucide-react';

const WorkingOutCanvas = forwardRef(({ questionType, isSubmitted }, ref) => {
  const canvasRef = useRef(null);
  const [eraseMode, setEraseMode] = useState(false);
  const [strokeColor, setStrokeColor] = useState('#1e1b4b');

  // Expose exportImage method to parent
  useImperativeHandle(ref, () => ({
    exportImage: async () => {
      if (canvasRef.current) {
        return await canvasRef.current.exportImage('png');
      }
      return null;
    },
    exportPaths: async () => {
      if (canvasRef.current) {
        return await canvasRef.current.exportPaths();
      }
      return null;
    },
    clear: () => {
      canvasRef.current?.clearCanvas();
    }
  }));

  const handleClear = () => {
    if (window.confirm('Are you sure you want to clear the canvas?')) {
      canvasRef.current?.clearCanvas();
    }
  };

  const handleUndo = () => {
    canvasRef.current?.undo();
  };

  const setDrawMode = () => {
    canvasRef.current?.eraseMode(false);
    setEraseMode(false);
  };

  const setEraserMode = () => {
    canvasRef.current?.eraseMode(true);
    setEraseMode(true);
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
  } : {};

  return (
    <div className="working-out-canvas" style={{ display: 'flex', flexDirection: 'column', height: '100%', minHeight: '400px', width: '100%', borderRadius: '24px', overflow: 'hidden', border: '1px solid #e2e8f0', background: '#fff', position: 'relative' }}>
      
      {/* Toolbar */}
      {!isSubmitted && (
        <div style={{ display: 'flex', padding: '12px 16px', background: '#f8fafc', borderBottom: '1px solid #e2e8f0', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#64748b', marginRight: 'auto', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            {isGraph ? 'Graphing Canvas' : 'Working Out Pad'}
          </span>
          
          <div style={{ display: 'flex', gap: '8px' }}>
            <button 
              onClick={setDrawMode}
              style={{
                width: '36px', height: '36px', borderRadius: '10px',
                border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: !eraseMode ? '#e0e7ff' : '#f1f5f9',
                color: !eraseMode ? '#4f46e5' : '#64748b',
                transition: 'all 0.2s'
              }}
              title="Pen"
            >
              <PenTool size={18} />
            </button>
            <button 
              onClick={setEraserMode}
              style={{
                width: '36px', height: '36px', borderRadius: '10px',
                border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: eraseMode ? '#e0e7ff' : '#f1f5f9',
                color: eraseMode ? '#4f46e5' : '#64748b',
                transition: 'all 0.2s'
              }}
              title="Eraser"
            >
              <Eraser size={18} />
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
      <div style={{ flex: 1, position: 'relative', background: '#f8fafc', ...graphBackgroundStyles }}>
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
          strokeWidth={eraseMode ? 20 : 3}
          strokeColor={eraseMode ? 'transparent' : strokeColor}
          canvasColor="transparent"
          style={{ width: '100%', height: '100%', border: 'none', position: 'relative', zIndex: 5 }}
          readOnly={isSubmitted}
        />
        
        {isSubmitted && (
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}>
            <div style={{ background: 'white', padding: '12px 24px', borderRadius: '16px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', fontWeight: 800, color: '#4f46e5' }}>
              Submission Locked
            </div>
          </div>
        )}
      </div>
    </div>
  );
});

export default WorkingOutCanvas;
