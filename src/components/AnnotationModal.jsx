import { useCallback, useEffect, useRef, useState } from 'react';

const COLORS = ['#ef4444', '#3b82f6', '#10b981', '#f59e0b', '#000000'];
const SIZES = [2, 4, 8, 14];
// Cap the backing-store resolution so huge uploads don't blow up memory, while
// still rendering well above the on-screen size for crisp strokes on retina.
const MAX_DIM = 2000;
const FALLBACK_W = 1000;
const FALLBACK_H = 750;

/**
 * Shared teacher markup tool. Renders the student's submitted image with a
 * transparent drawing canvas on top, sized to the image's natural resolution
 * for sharp output. Calls onSave(mergedPngDataUrl) with the flattened result.
 */
const AnnotationModal = ({ item, saving, onCancel, onSave }) => {
  const validImages = (item?.answerImages || []).filter((u) => u && u.length > 100);
  const primaryImage = validImages[0] || (item?.answerImage?.length > 100 ? item.answerImage : null);

  const canvasRef = useRef(null);
  const drawing = useRef(false);
  const lastPos = useRef(null);
  const [color, setColor] = useState('#ef4444');
  const [size, setSize] = useState(4);

  // Size the backing store to the image's natural resolution (capped).
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (!primaryImage) {
      canvas.width = FALLBACK_W;
      canvas.height = FALLBACK_H;
      return;
    }
    const img = new Image();
    img.onload = () => {
      const scale = Math.min(MAX_DIM / img.naturalWidth, MAX_DIM / img.naturalHeight, 1);
      canvas.width = Math.round(img.naturalWidth * scale);
      canvas.height = Math.round(img.naturalHeight * scale);
    };
    img.src = primaryImage;
  }, [primaryImage]);

  // Map a pointer event to backing-store coordinates.
  const getPos = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY,
    };
  };

  const strokeTo = (ctx, from, to) => {
    // Quadratic curve through the midpoint for smoother lines.
    const mid = { x: (from.x + to.x) / 2, y: (from.y + to.y) / 2 };
    ctx.quadraticCurveTo(from.x, from.y, mid.x, mid.y);
    ctx.stroke();
  };

  const handleDown = useCallback((e) => {
    e.preventDefault();
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.setPointerCapture?.(e.pointerId);
    drawing.current = true;
    lastPos.current = getPos(e);
    // Dot for a single tap.
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(lastPos.current.x, lastPos.current.y, size / 2, 0, Math.PI * 2);
    ctx.fill();
  }, [color, size]);

  const handleMove = useCallback((e) => {
    if (!drawing.current) return;
    e.preventDefault();
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.strokeStyle = color;
    ctx.lineWidth = size;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    const events = e.getCoalescedEvents ? e.getCoalescedEvents() : [e];
    for (const ev of events) {
      const pos = getPos(ev);
      ctx.beginPath();
      ctx.moveTo(lastPos.current.x, lastPos.current.y);
      strokeTo(ctx, lastPos.current, pos);
      lastPos.current = pos;
    }
  }, [color, size]);

  const handleUp = useCallback(() => {
    drawing.current = false;
    lastPos.current = null;
  }, []);

  const clear = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
  };

  const handleSave = async () => {
    const annotCanvas = canvasRef.current;
    if (!annotCanvas) return;
    const out = document.createElement('canvas');
    out.width = annotCanvas.width;
    out.height = annotCanvas.height;
    const ctx = out.getContext('2d');
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, out.width, out.height);
    if (primaryImage) {
      await new Promise((resolve) => {
        const img = new Image();
        img.onload = () => { ctx.drawImage(img, 0, 0, out.width, out.height); resolve(); };
        img.onerror = resolve;
        img.src = primaryImage;
      });
    }
    ctx.drawImage(annotCanvas, 0, 0);
    onSave(out.toDataURL('image/png'));
  };

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 99999, background: 'rgba(15,23,42,0.92)', backdropFilter: 'blur(8px)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px', background: '#1e293b', padding: '10px 20px', borderRadius: '16px', flexWrap: 'wrap' }}>
        <span style={{ color: '#94a3b8', fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Colour</span>
        {COLORS.map((c) => (
          <button key={c} onClick={() => setColor(c)} style={{ width: '26px', height: '26px', borderRadius: '50%', background: c, border: color === c ? '3px solid #fff' : '3px solid transparent', cursor: 'pointer' }} />
        ))}
        <span style={{ color: '#94a3b8', fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginLeft: '8px' }}>Size</span>
        {SIZES.map((s) => (
          <button key={s} onClick={() => setSize(s)} style={{ width: '32px', height: '32px', borderRadius: '8px', background: size === s ? '#6366f1' : '#334155', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: s * 1.5, height: s * 1.5, borderRadius: '50%', background: '#fff' }} />
          </button>
        ))}
        <button onClick={clear} style={{ marginLeft: '8px', padding: '6px 14px', borderRadius: '10px', border: 'none', background: '#475569', color: '#fff', fontWeight: 800, fontSize: '0.78rem', cursor: 'pointer' }}>Clear</button>
        <button onClick={onCancel} style={{ padding: '6px 14px', borderRadius: '10px', border: 'none', background: '#475569', color: '#fff', fontWeight: 800, fontSize: '0.78rem', cursor: 'pointer' }}>Cancel</button>
        <button onClick={handleSave} disabled={saving} style={{ padding: '6px 20px', borderRadius: '10px', border: 'none', background: '#6366f1', color: '#fff', fontWeight: 900, fontSize: '0.85rem', cursor: saving ? 'wait' : 'pointer' }}>
          {saving ? 'Saving…' : 'Save & Send ✓'}
        </button>
      </div>

      <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.4)', background: '#fff', maxWidth: '100%', maxHeight: '70vh' }}>
        {primaryImage ? (
          <img src={primaryImage} alt="Student work" style={{ display: 'block', maxWidth: 'min(1200px, 100%)', maxHeight: '65vh', objectFit: 'contain', userSelect: 'none', pointerEvents: 'none' }} />
        ) : (
          <div style={{ width: FALLBACK_W / 1.4, height: FALLBACK_H / 1.4, background: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8', fontWeight: 700 }}>No student drawing — write feedback freehand</div>
        )}
        <canvas
          ref={canvasRef}
          onPointerDown={handleDown}
          onPointerMove={handleMove}
          onPointerUp={handleUp}
          onPointerLeave={handleUp}
          onPointerCancel={handleUp}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', cursor: 'crosshair', touchAction: 'none' }}
        />
      </div>
      <p style={{ color: '#64748b', fontSize: '0.8rem', marginTop: '10px' }}>Draw on the student's work — click Save &amp; Send to attach it to this submission</p>
    </div>
  );
};

export default AnnotationModal;
