import { useRef, useState } from 'react';
import { Columns2, Rows2 } from 'lucide-react';
import { splitFraction } from '../utils/useSplitLayout';

/**
 * Worksheet + notepad split with a draggable divider. `layout` 'side' | 'stack' | 'tabs'
 * (from useSplitLayout). One stable element tree for every layout, so the panes (and the
 * notepad's ink) are never remounted when the layout changes; in 'tabs' the inactive pane is
 * hidden with visibility (not display:none) so it keeps its real size.
 */
export const SplitPanes = ({ layout, split, onSplitChange, first, second, activePane = 'first' }) => {
  const boxRef = useRef(null);
  const [dragging, setDragging] = useState(false);
  const split2 = layout === 'side' || layout === 'stack';
  const stacked = layout === 'stack';

  const onDividerDown = (e) => {
    e.preventDefault();
    const rect = boxRef.current?.getBoundingClientRect();
    if (!rect) return;
    setDragging(true);
    let last = split;
    const move = (ev) => { last = splitFraction(rect, { x: ev.clientX, y: ev.clientY }, layout); onSplitChange(last, false); };
    const up = () => {
      setDragging(false);
      onSplitChange(last, true);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
      window.removeEventListener('pointercancel', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
    window.addEventListener('pointercancel', up);
  };

  const tabStyle = (on) => ({ position: 'absolute', inset: 0, minWidth: 0, visibility: on ? 'visible' : 'hidden', pointerEvents: on ? 'auto' : 'none' });
  const firstStyle = !split2 ? tabStyle(activePane === 'first')
    : stacked ? { height: `${split * 100}%`, minHeight: 0, display: 'flex', flexDirection: 'column' }
      : { width: `${split * 100}%`, minWidth: 0, display: 'flex', flexDirection: 'column' };
  const secondStyle = !split2 ? tabStyle(activePane === 'second') : { flex: 1, minWidth: 0, minHeight: 0, display: 'flex', flexDirection: 'column' };

  return (
    <div ref={boxRef} style={{ flex: 1, minHeight: 0, minWidth: 0, display: 'flex', flexDirection: stacked ? 'column' : 'row', position: 'relative' }}>
      <div style={firstStyle}>{first}</div>
      {split2 && (
        <div
          role="separator"
          aria-orientation={stacked ? 'horizontal' : 'vertical'}
          aria-label="Drag to resize"
          onPointerDown={onDividerDown}
          style={{ flexShrink: 0, ...(stacked ? { height: 14, cursor: 'row-resize' } : { width: 14, cursor: 'col-resize' }), background: dragging ? '#c4b5fd' : '#e2e8f0', touchAction: 'none', display: 'grid', placeItems: 'center' }}
        >
          <span style={{ borderRadius: 3, background: dragging ? '#7c3aed' : '#94a3b8', ...(stacked ? { width: 44, height: 4 } : { width: 4, height: 44 }) }} />
        </div>
      )}
      <div style={secondStyle}>{second}</div>
      {/* While dragging, keep the PDF frame / notepad from swallowing the pointer. */}
      {dragging && <div style={{ position: 'absolute', inset: 0, zIndex: 20, cursor: stacked ? 'row-resize' : 'col-resize' }} />}
    </div>
  );
};

// Side by side / top & bottom picker for the header.
export const SplitLayoutToggle = ({ layout, onChange }) => {
  const btn = (value, Icon, label) => (
    <button
      type="button"
      aria-label={label}
      title={label}
      aria-pressed={layout === value}
      onClick={() => onChange(value)}
      style={{ border: 0, borderRadius: 8, width: 34, height: 30, display: 'grid', placeItems: 'center', cursor: 'pointer', background: layout === value ? '#7c3aed' : 'transparent', color: layout === value ? '#fff' : '#64748b' }}
    >
      <Icon size={17} />
    </button>
  );
  return (
    <div role="group" aria-label="Layout" style={{ display: 'inline-flex', gap: 2, padding: 2, borderRadius: 10, background: '#f1f5f9', flexShrink: 0 }}>
      {btn('side', Columns2, 'Side by side')}
      {btn('stack', Rows2, 'Worksheet on top')}
    </div>
  );
};
