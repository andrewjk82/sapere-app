import React, { useRef, useState, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { toDirectImageUrl } from '../utils/cheatSheetUtils';

const MIN_SCALE = 1;
const MAX_SCALE = 4;
const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

// Pinch-to-zoom / scroll-to-zoom / double-tap-to-zoom / drag-to-pan for the
// cheat sheet full-screen preview. Before this, the only way a student could
// try to zoom in on a small infographic was the browser's own image
// drag/long-press gestures — which is what was surfacing stray native UI
// (link-drag preview banners etc.) instead of actually zooming anything.
// This owns the gesture entirely (touchAction: 'none', draggable=false) so
// the browser never gets a chance to run its own gesture on top of ours.
//
// A chapter's sheets can be stepped through: `preview.sheets` is the chapter's list
// ([{ url, title }]) and `preview.index` the one opened. Left/right buttons, the
// arrow keys, and a horizontal swipe (when not zoomed in) move between them.
const SWIPE_PX = 60;
const CheatSheetLightbox = ({ preview, onClose }) => {
  const sheets = Array.isArray(preview?.sheets) && preview.sheets.length > 0 ? preview.sheets : null;
  const [idx, setIdx] = useState(() => (sheets ? Math.min(Math.max(preview.index || 0, 0), sheets.length - 1) : 0));
  const current = sheets ? sheets[idx] : preview;
  const [failed, setFailed] = useState(false);
  const [transform, setTransform] = useState({ scale: 1, x: 0, y: 0 });
  const swipe = useRef(null); // { x, y } where a one-finger touch began (only used when not zoomed)
  const frameRef = useRef(null);
  const imgRef = useRef(null);
  const pointers = useRef(new Map()); // pointerId -> {x,y}
  const pinch = useRef(null); // { startDist, startScale, midClient, startTransform }
  const pan = useRef(null); // { startClientX, startClientY, startTransform }

  const isZoomed = transform.scale > 1.01;

  const applyClamped = useCallback((next) => {
    const frame = frameRef.current;
    if (!frame) return next;
    const rect = frame.getBoundingClientRect();
    // Keep the image from being dragged entirely off-screen: bound the pan
    // offset by how much larger the zoomed image is than the viewport.
    const maxX = Math.max(0, (rect.width * (next.scale - 1)) / 2);
    const maxY = Math.max(0, (rect.height * (next.scale - 1)) / 2);
    return { scale: next.scale, x: clamp(next.x, -maxX, maxX), y: clamp(next.y, -maxY, maxY) };
  }, []);

  const resetZoom = () => setTransform({ scale: 1, x: 0, y: 0 });

  const go = useCallback((delta) => {
    if (!sheets) return;
    setIdx((i) => {
      const next = i + delta;
      return next < 0 || next >= sheets.length ? i : next;
    });
  }, [sheets]);

  // A different sheet starts un-zoomed and un-failed.
  useEffect(() => {
    setFailed(false);
    setTransform({ scale: 1, x: 0, y: 0 });
  }, [idx]);

  useEffect(() => {
    if (!sheets) return undefined;
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') { go(-1); e.preventDefault(); }
      else if (e.key === 'ArrowRight') { go(1); e.preventDefault(); }
      else if (e.key === 'Escape') onClose?.();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [sheets, go, onClose]);

  const zoomAt = (clientX, clientY, targetScale) => {
    const frame = frameRef.current;
    if (!frame) return;
    const rect = frame.getBoundingClientRect();
    const cx = clientX - rect.left - rect.width / 2;
    const cy = clientY - rect.top - rect.height / 2;
    setTransform((prev) => {
      const scale = clamp(targetScale, MIN_SCALE, MAX_SCALE);
      if (scale <= MIN_SCALE) return { scale: MIN_SCALE, x: 0, y: 0 };
      // Anchor the point under the cursor/fingers so zooming feels centred
      // on the gesture, not the image origin.
      const ratio = scale / prev.scale;
      const x = (prev.x - cx) * ratio + cx;
      const y = (prev.y - cy) * ratio + cy;
      return applyClamped({ scale, x, y });
    });
  };

  const onWheel = (e) => {
    e.preventDefault();
    const next = clamp(transform.scale * (1 - e.deltaY * 0.0016), MIN_SCALE, MAX_SCALE);
    zoomAt(e.clientX, e.clientY, next);
  };

  const onDoubleClick = (e) => {
    e.preventDefault();
    if (isZoomed) resetZoom();
    else zoomAt(e.clientX, e.clientY, 2.4);
  };

  const onPointerDown = (e) => {
    e.currentTarget.setPointerCapture?.(e.pointerId);
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    swipe.current = pointers.current.size === 1 && !isZoomed ? { x: e.clientX, y: e.clientY } : null;
    if (pointers.current.size === 2) {
      const [a, b] = [...pointers.current.values()];
      pinch.current = {
        startDist: Math.hypot(a.x - b.x, a.y - b.y) || 1,
        startScale: transform.scale,
        mid: { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 },
        startTransform: transform,
      };
      pan.current = null;
      swipe.current = null;
    } else if (pointers.current.size === 1 && isZoomed) {
      pan.current = { startClientX: e.clientX, startClientY: e.clientY, startTransform: transform };
    }
  };

  const onPointerMove = (e) => {
    if (!pointers.current.has(e.pointerId)) return;
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });

    if (pointers.current.size === 2 && pinch.current) {
      const [a, b] = [...pointers.current.values()];
      const dist = Math.hypot(a.x - b.x, a.y - b.y) || 1;
      const scale = clamp((dist / pinch.current.startDist) * pinch.current.startScale, MIN_SCALE, MAX_SCALE);
      const frame = frameRef.current;
      if (!frame) return;
      const rect = frame.getBoundingClientRect();
      const cx = pinch.current.mid.x - rect.left - rect.width / 2;
      const cy = pinch.current.mid.y - rect.top - rect.height / 2;
      const ratio = scale / pinch.current.startTransform.scale;
      const x = (pinch.current.startTransform.x - cx) * ratio + cx;
      const y = (pinch.current.startTransform.y - cy) * ratio + cy;
      setTransform(applyClamped({ scale, x, y }));
    } else if (pointers.current.size === 1 && pan.current) {
      const dx = e.clientX - pan.current.startClientX;
      const dy = e.clientY - pan.current.startClientY;
      setTransform(applyClamped({
        scale: pan.current.startTransform.scale,
        x: pan.current.startTransform.x + dx,
        y: pan.current.startTransform.y + dy,
      }));
    }
  };

  const endPointer = (e) => {
    const start = swipe.current;
    swipe.current = null;
    if (start && e.type === 'pointerup' && pointers.current.size === 1) {
      const dx = e.clientX - start.x;
      const dy = e.clientY - start.y;
      if (Math.abs(dx) >= SWIPE_PX && Math.abs(dx) > Math.abs(dy) * 1.5) go(dx < 0 ? 1 : -1);
    }
    pointers.current.delete(e.pointerId);
    if (pointers.current.size < 2) pinch.current = null;
    if (pointers.current.size === 0) pan.current = null;
  };

  if (!preview) return null;

  return (
    <div className="app-modal" style={{ zIndex: 1200 }} onClick={onClose}>
      <motion.div
        className="app-modal__backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{ background: 'rgba(15, 15, 25, 0.86)' }}
      />
      <motion.div
        initial={{ scale: 0.94, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.94, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        style={{ position: 'relative', width: '94vw', height: '90vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
      >
        <button
          type="button"
          onClick={onClose}
          style={{ position: 'absolute', top: '-6px', right: '2px', zIndex: 2, background: '#fff', border: 'none', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 4px 14px rgba(0,0,0,0.25)' }}
          aria-label="Close cheat sheet"
        >
          <X size={18} color="#1e1b4b" />
        </button>

        {sheets && sheets.length > 1 && [
          { delta: -1, Icon: ChevronLeft, side: 'left', label: 'Previous cheat sheet', disabled: idx === 0 },
          { delta: 1, Icon: ChevronRight, side: 'right', label: 'Next cheat sheet', disabled: idx === sheets.length - 1 },
        ].map(({ delta, Icon, side, label, disabled }) => (
          <button
            key={side}
            type="button"
            onClick={() => go(delta)}
            disabled={disabled}
            aria-label={label}
            style={{
              position: 'absolute', top: '50%', [side]: '-14px', transform: 'translateY(-50%)', zIndex: 2,
              width: '44px', height: '44px', borderRadius: '50%', border: 'none',
              background: '#fff', boxShadow: '0 4px 14px rgba(0,0,0,0.3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: disabled ? 'default' : 'pointer', opacity: disabled ? 0.35 : 1,
            }}
          >
            <Icon size={24} color="#1e1b4b" />
          </button>
        ))}

        {failed ? (
          <div style={{ width: '360px', maxWidth: '80vw', padding: '32px 24px', borderRadius: '16px', background: '#fff', textAlign: 'center' }}>
            <p style={{ margin: 0, fontWeight: 800, color: '#1e1b4b', fontSize: '0.95rem' }}>Couldn't load this image</p>
            <p style={{ margin: '8px 0 0', fontSize: '0.8rem', color: '#64748b', wordBreak: 'break-all' }}>{current.url}</p>
            <p style={{ margin: '10px 0 0', fontSize: '0.75rem', color: '#94a3b8' }}>Check the URL in the chapter editor — it may be missing, private, or misspelled.</p>
          </div>
        ) : (
          <>
            <div
              ref={frameRef}
              onWheel={onWheel}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={endPointer}
              onPointerCancel={endPointer}
              onDoubleClick={onDoubleClick}
              style={{
                width: '100%', height: '100%', overflow: 'hidden', touchAction: 'none',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: isZoomed ? 'grab' : 'zoom-in',
              }}
            >
              <img
                ref={imgRef}
                key={current.url}
                src={toDirectImageUrl(current.url)}
                alt={`${current.title || preview.title} cheat sheet`}
                draggable={false}
                onError={() => setFailed(true)}
                style={{
                  maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto',
                  borderRadius: '16px', boxShadow: '0 20px 60px rgba(0,0,0,0.45)',
                  objectFit: 'contain', background: '#fff',
                  transform: `translate(${transform.x}px, ${transform.y}px) scale(${transform.scale})`,
                  transition: pointers.current.size > 0 ? 'none' : 'transform 0.18s ease-out',
                  userSelect: 'none',
                  WebkitUserSelect: 'none',
                }}
              />
            </div>
            <div style={{ marginTop: '10px', fontSize: '0.72rem', fontWeight: 700, color: 'rgba(255,255,255,0.65)', textAlign: 'center' }}>
              {sheets && sheets.length > 1 && <span style={{ marginRight: '10px', color: '#fff' }}>{idx + 1} / {sheets.length}</span>}
              {isZoomed ? 'Drag to pan · double-tap to reset' : 'Pinch, scroll, or double-tap to zoom in'}
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default CheatSheetLightbox;
