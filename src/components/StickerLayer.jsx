import { useEffect, useRef, useState } from 'react';
import { Check, Move, Trash2 } from 'lucide-react';
import { stickerBox, moveSticker, resizeSticker, gridGeometry, GRID_COLORS } from '../utils/canvasStickers';

// Stickers on a notepad page. Rendered twice by WorkingOutCanvas:
//   part="base"   — under the ink, so pen strokes land on top of a grid;
//   part="editor" — above the drawing surface: the small "move" badge on placed stickers and
//                   the frame (drag to move, corner handle to resize, ✓ / delete) while editing.
const useBoxSize = (ref) => {
  const [size, setSize] = useState({ w: 0, h: 0 });
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const measure = () => setSize({ w: el.clientWidth, h: el.clientHeight });
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [ref]);
  return size;
};

const GridSvg = ({ side }) => {
  const g = gridGeometry(side);
  const minor = g.lines.map((p) => `M${p} 0V${side}M0 ${p}H${side}`).join('');
  return (
    <svg width={side} height={side} viewBox={`0 0 ${side} ${side}`} style={{ display: 'block' }} aria-hidden="true">
      <rect width={side} height={side} fill={GRID_COLORS.fill} />
      <path d={minor} stroke={GRID_COLORS.minor} strokeWidth={g.minorWidth} fill="none" />
      <path d={`M${g.centre} 0V${side}M0 ${g.centre}H${side}`} stroke={GRID_COLORS.axis} strokeWidth={g.axisWidth} fill="none" />
    </svg>
  );
};

const ROUND_BTN = { width: 30, height: 30, borderRadius: '50%', border: '1px solid #c7d2fe', background: '#fff', color: '#4f46e5', display: 'grid', placeItems: 'center', cursor: 'pointer', padding: 0, boxShadow: '0 2px 6px rgba(30,27,75,0.18)' };

const StickerLayer = ({ part, stickers, editingId, onUpdate, onEdit, onDone, onDelete }) => {
  const rootRef = useRef(null);
  const gestureRef = useRef(null); // { id, kind: 'move' | 'resize', startX, startY, start }
  const { w, h } = useBoxSize(rootRef);

  const begin = (event, sticker, kind) => {
    event.stopPropagation();
    event.preventDefault();
    try { event.currentTarget.setPointerCapture(event.pointerId); } catch { /* may already be captured */ }
    gestureRef.current = { id: sticker.id, kind, startX: event.clientX, startY: event.clientY, start: sticker };
  };

  const drag = (event) => {
    const g = gestureRef.current;
    if (!g || !w || !h) return;
    if (g.kind === 'move') {
      onUpdate(g.id, moveSticker(g.start, event.clientX - g.startX, event.clientY - g.startY, w, h));
    } else {
      const rect = rootRef.current.getBoundingClientRect();
      onUpdate(g.id, resizeSticker(g.start, event.clientX - rect.left, event.clientY - rect.top, w, h));
    }
  };

  const end = () => { gestureRef.current = null; };

  return (
    <div ref={rootRef} style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: part === 'editor' ? 6 : undefined }}>
      {w > 0 && stickers.map((sticker) => {
        const { left, top, side } = stickerBox(sticker, w, h);
        if (part === 'base') {
          return <div key={sticker.id} style={{ position: 'absolute', left, top, width: side, height: side }}><GridSvg side={side} /></div>;
        }
        if (sticker.id !== editingId) {
          return (
            <button
              key={sticker.id}
              type="button"
              aria-label="Edit grid"
              title="Move or resize this grid"
              onClick={() => onEdit(sticker.id)}
              style={{ ...ROUND_BTN, position: 'absolute', left: left + 4, top: top + 4, width: 26, height: 26, pointerEvents: 'auto', opacity: 0.85 }}
            >
              <Move size={13} />
            </button>
          );
        }
        return (
          <div
            key={sticker.id}
            onPointerDown={(e) => begin(e, sticker, 'move')}
            onPointerMove={drag}
            onPointerUp={end}
            onPointerCancel={end}
            style={{ position: 'absolute', left, top, width: side, height: side, border: '2px dashed #6366f1', borderRadius: 2, boxSizing: 'border-box', pointerEvents: 'auto', cursor: 'move', touchAction: 'none' }}
          >
            <div style={{ position: 'absolute', top: 6, right: 6, display: 'flex', gap: 6 }} onPointerDown={(e) => e.stopPropagation()}>
              <button type="button" aria-label="Done" title="Done" onClick={onDone} style={{ ...ROUND_BTN, background: '#4f46e5', color: '#fff', borderColor: '#4f46e5' }}><Check size={16} /></button>
              <button type="button" aria-label="Delete grid" title="Delete grid" onClick={() => onDelete(sticker.id)} style={{ ...ROUND_BTN, color: '#e11d48', borderColor: '#fecdd3' }}><Trash2 size={15} /></button>
            </div>
            <div
              role="presentation"
              onPointerDown={(e) => begin(e, sticker, 'resize')}
              onPointerMove={drag}
              onPointerUp={end}
              onPointerCancel={end}
              title="Drag to resize"
              style={{ position: 'absolute', right: -14, bottom: -14, width: 30, height: 30, borderRadius: '50%', background: '#4f46e5', border: '3px solid #fff', boxShadow: '0 2px 6px rgba(30,27,75,0.3)', cursor: 'nwse-resize', touchAction: 'none' }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default StickerLayer;
