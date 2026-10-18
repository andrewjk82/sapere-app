import { Copy, Scissors, Trash2, ClipboardPaste } from 'lucide-react';
import { PAGE_W, PAGE_H } from '../utils/padView';
import { translateBox } from '../utils/lassoSelect';

const MENU_H = 40;
const PAD = 6;   // page units around the strokes

const menuButton = (danger) => ({
  display: 'inline-flex', alignItems: 'center', gap: 5, height: 32, padding: '0 10px', border: 0, borderRadius: 9,
  background: 'transparent', color: danger ? '#e11d48' : '#334155', fontWeight: 800, fontSize: '0.76rem', cursor: 'pointer',
});

/**
 * The lasso selection on top of the page: a dashed box around the selected strokes and a small menu
 * (Copy / Cut / Delete / Paste). Lives inside the page element, so it follows zoom and pan; `u` = screen px
 * per page unit. `shift` moves the box with a drag in progress, and the menu is hidden while dragging.
 */
const LassoOverlay = ({ selection, shift, scale: u, canPaste, onCopy, onCut, onDelete, onPaste }) => {
  if (!selection?.box) return null;
  const box = shift ? translateBox(selection.box, shift.dx, shift.dy) : selection.box;
  const x = box.minX - PAD; const y = box.minY - PAD;
  const w = box.maxX - box.minX + PAD * 2; const h = box.maxY - box.minY + PAD * 2;
  const above = y * u - MENU_H - 8 >= 4;
  const menuTop = above ? y * u - MENU_H - 8 : (y + h) * u + 8;
  const menuLeft = Math.min(Math.max(((x + w / 2) * u), 90), PAGE_W * u - 90);
  return (
    <>
      <svg
        viewBox={`0 0 ${PAGE_W} ${PAGE_H}`}
        preserveAspectRatio="none"
        aria-hidden="true"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 5 }}
      >
        <rect x={x} y={y} width={w} height={h} rx={6} fill="rgba(79,70,229,0.06)" stroke="#4f46e5" strokeWidth={1.6} strokeDasharray="7 5" vectorEffect="non-scaling-stroke" />
      </svg>
      {!shift && (
        <div
          role="toolbar"
          aria-label="Selection"
          style={{
            position: 'absolute', left: menuLeft, top: menuTop, transform: 'translateX(-50%)', zIndex: 6,
            display: 'flex', alignItems: 'center', gap: 2, padding: 4, borderRadius: 13,
            background: 'rgba(255,255,255,0.97)', border: '1px solid #e2e8f0', boxShadow: '0 6px 20px rgba(15,23,42,0.18)',
          }}
        >
          <button type="button" onClick={() => onCopy()} aria-label="Copy" title="Copy (⌘C)" style={menuButton(false)}><Copy size={15} /> Copy</button>
          <button type="button" onClick={() => onCut()} aria-label="Cut" title="Cut (⌘X)" style={menuButton(false)}><Scissors size={15} /> Cut</button>
          {canPaste && <button type="button" onClick={() => onPaste()} aria-label="Paste" title="Paste (⌘V)" style={menuButton(false)}><ClipboardPaste size={15} /> Paste</button>}
          <button type="button" onClick={() => onDelete()} aria-label="Delete selection" title="Delete" style={menuButton(true)}><Trash2 size={15} /> Delete</button>
        </div>
      )}
    </>
  );
};

export default LassoOverlay;

