import { useState } from 'react';
import { Copy, Scissors, Trash2, ClipboardPaste, Palette } from 'lucide-react';
import { PAGE_W, PAGE_H } from '../utils/padView';

const MENU_H = 40;
const PAD = 6;            // page units around the strokes
const HANDLE = 14;        // visible handle size (px); the touch target is bigger
const ROTATE_GAP = 30;    // px between the frame and the rotate handle

const menuButton = (danger, active = false) => ({
  display: 'inline-flex', alignItems: 'center', gap: 5, height: 32, padding: '0 10px', border: 0, borderRadius: 9,
  background: active ? '#eef2ff' : 'transparent', color: danger ? '#e11d48' : active ? '#4338ca' : '#334155',
  fontWeight: 800, fontSize: '0.76rem', cursor: 'pointer',
});

const isHighlighter = (s) => s.penStyle === 'highlighter';

/**
 * The lasso selection on top of the page: a dashed frame around the selected strokes with corner handles
 * (resize), a top handle (rotate) and a small menu (Copy / Cut / Paste / Delete / Colour). Lives inside the
 * page element, so it follows zoom and pan; `scale` = screen px per page unit. While a drag is in progress
 * `preview` ({ box, angle }) gives the frame's new look and the menu and handles step out of the way.
 */
const LassoOverlay = ({
  selection, preview, scale: u, canPaste, inkColors = [], highlighterColors = [],
  onCopy, onCut, onDelete, onPaste, onRecolor, onHandleDown,
}) => {
  // The palette belongs to one selection: a different selection starts with it closed.
  const [paletteFor, setPaletteFor] = useState(null);
  if (!selection?.box) return null;
  const paletteOpen = paletteFor === selection.items;
  const dragging = Boolean(preview);
  const box = preview?.box || selection.box;
  const angleDeg = ((preview?.angle || 0) * 180) / Math.PI;
  const x = box.minX - PAD; const y = box.minY - PAD;
  const w = box.maxX - box.minX + PAD * 2; const h = box.maxY - box.minY + PAD * 2;
  const cx = x + w / 2; const cy = y + h / 2;

  const hasInk = selection.items.some((s) => !isHighlighter(s));
  const hasMarker = selection.items.some(isHighlighter);

  // The rotate handle sits above the frame (below it when the frame is at the top of the page); the menu goes
  // on the other side, past the handle, so neither covers the other.
  const handleAbove = y * u - ROTATE_GAP >= 16;
  const rotateTop = handleAbove ? y * u - ROTATE_GAP : (y + h) * u + ROTATE_GAP;
  const menuHeight = paletteOpen ? MENU_H + 38 * (Number(hasInk) + Number(hasMarker)) : MENU_H;
  const belowTop = (y + h) * u + (handleAbove ? 24 : ROTATE_GAP + 26);
  const aboveTop = y * u - (handleAbove ? ROTATE_GAP + 26 : 24) - menuHeight;
  const menuTop = belowTop + menuHeight <= PAGE_H * u - 4 ? belowTop : Math.max(4, aboveTop);
  const menuLeft = Math.min(Math.max(cx * u, 130), PAGE_W * u - 130);

  const corners = [[x, y], [x + w, y], [x + w, y + h], [x, y + h]];
  const cursors = ['nwse-resize', 'nesw-resize', 'nwse-resize', 'nesw-resize'];

  const handleDown = (kind, corner) => (e) => {
    e.stopPropagation();
    if (e.cancelable !== false) e.preventDefault();
    try { e.currentTarget.setPointerCapture(e.pointerId); } catch { /* the window listeners still get the moves */ }
    setPaletteFor(null);
    onHandleDown?.(e, kind, corner);
  };
  const handleStyle = (left, top, cursor) => ({
    position: 'absolute', left, top, width: 34, height: 34, transform: 'translate(-50%, -50%)', zIndex: 7,
    display: 'grid', placeItems: 'center', cursor, touchAction: 'none', visibility: dragging ? 'hidden' : 'visible',
  });

  return (
    <>
      <svg
        viewBox={`0 0 ${PAGE_W} ${PAGE_H}`}
        preserveAspectRatio="none"
        aria-hidden="true"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 5 }}
      >
        <rect
          x={x} y={y} width={w} height={h} rx={6} fill="rgba(79,70,229,0.06)" stroke="#4f46e5" strokeWidth={1.6}
          strokeDasharray="7 5" vectorEffect="non-scaling-stroke" transform={angleDeg ? `rotate(${angleDeg} ${cx} ${cy})` : undefined}
        />
      </svg>

      {corners.map(([hx, hy], i) => (
        <div key={i} data-lasso-handle="resize" onPointerDown={handleDown('resize', i)} style={handleStyle(hx * u, hy * u, cursors[i])}>
          <span style={{ width: HANDLE, height: HANDLE, borderRadius: 4, background: '#fff', border: '2px solid #4f46e5', boxShadow: '0 1px 4px rgba(15,23,42,0.3)' }} />
        </div>
      ))}
      <div data-lasso-handle="rotate" onPointerDown={handleDown('rotate')} style={handleStyle(cx * u, rotateTop, 'grab')}>
        <span style={{ width: HANDLE + 2, height: HANDLE + 2, borderRadius: '50%', background: '#4f46e5', border: '2px solid #fff', boxShadow: '0 1px 4px rgba(15,23,42,0.35)' }} />
      </div>

      {!dragging && (
        <div
          role="toolbar"
          aria-label="Selection"
          style={{
            position: 'absolute', left: menuLeft, top: menuTop, transform: 'translateX(-50%)', zIndex: 8,
            display: 'flex', flexDirection: 'column', alignItems: 'stretch', gap: 2, padding: 4, borderRadius: 13,
            background: 'rgba(255,255,255,0.97)', border: '1px solid #e2e8f0', boxShadow: '0 6px 20px rgba(15,23,42,0.18)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <button type="button" onClick={() => onCopy()} aria-label="Copy" title="Copy (⌘C)" style={menuButton(false)}><Copy size={15} /> Copy</button>
            <button type="button" onClick={() => onCut()} aria-label="Cut" title="Cut (⌘X)" style={menuButton(false)}><Scissors size={15} /> Cut</button>
            {canPaste && <button type="button" onClick={() => onPaste()} aria-label="Paste" title="Paste (⌘V)" style={menuButton(false)}><ClipboardPaste size={15} /> Paste</button>}
            <button type="button" onClick={() => setPaletteFor((cur) => (cur === selection.items ? null : selection.items))} aria-label="Colour" aria-expanded={paletteOpen} title="Change colour" style={menuButton(false, paletteOpen)}><Palette size={15} /> Colour</button>
            <button type="button" onClick={() => onDelete()} aria-label="Delete selection" title="Delete" style={menuButton(true)}><Trash2 size={15} /> Delete</button>
          </div>
          {paletteOpen && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, padding: '6px 8px 4px' }}>
              {hasInk && (
                <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                  {inkColors.map((c) => (
                    <button key={c} type="button" aria-label={`Pen colour ${c}`} title={c} onClick={() => onRecolor(c, false)}
                      style={{ width: 22, height: 22, borderRadius: '50%', border: '1px solid #cbd5e1', background: c, cursor: 'pointer', padding: 0 }} />
                  ))}
                </div>
              )}
              {hasMarker && (
                <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                  {highlighterColors.map(({ name, value }) => (
                    <button key={name} type="button" aria-label={`Highlighter ${name}`} title={name} onClick={() => onRecolor(value, true)}
                      style={{ width: 22, height: 22, borderRadius: '50%', border: '1px solid #cbd5e1', background: value, cursor: 'pointer', padding: 0 }} />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default LassoOverlay;
