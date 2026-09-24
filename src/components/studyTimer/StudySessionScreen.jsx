import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Square, Plus, Check, X, ArrowLeft, Save } from 'lucide-react';
import { normalizeSubjectLabel } from '../../utils/subjectLabels';

/**
 * Full-screen study session view shown while the stopwatch runs.
 *
 * Deliberately a thin timer bar on top (not a big clock) so the on-screen
 * keyboard never covers it while the student types their plan. Below it is
 * a checklist of what they'll study today — 3 lines by default, more can be
 * added. `stage === 'review'` is the end-of-session pass: the same list,
 * framed as "tick off what you finished", before the timer actually stops.
 */
const StudySessionScreen = ({
  subject, color, elapsedLabel, phase, stage, items, onItemsChange,
  onPause, onResume, onRequestEnd, onBackToStudy, onSave, onFinish, finishing,
}) => {
  const inputRefs = useRef([]);
  const focusIdxRef = useRef(null);
  const isReview = stage === 'review';

  useEffect(() => {
    if (focusIdxRef.current == null) return;
    inputRefs.current[focusIdxRef.current]?.focus();
    focusIdxRef.current = null;
  }, [items.length]);

  const update = (idx, patch) => onItemsChange(items.map((it, i) => (i === idx ? { ...it, ...patch } : it)));
  const addLine = (afterIdx = items.length - 1) => {
    const next = [...items];
    next.splice(afterIdx + 1, 0, { text: '', done: false });
    focusIdxRef.current = afterIdx + 1;
    onItemsChange(next);
  };
  const removeLine = (idx) => {
    if (items.length <= 1) { update(idx, { text: '', done: false }); return; }
    onItemsChange(items.filter((_, i) => i !== idx));
  };

  const doneCount = items.filter((it) => it.done && it.text.trim()).length;
  const filledCount = items.filter((it) => it.text.trim()).length;

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}
      style={{ position: 'fixed', inset: 0, zIndex: 1000, background: '#f8f7fc', display: 'flex', flexDirection: 'column' }}
    >
      {/* Thin timer bar */}
      <div style={{
        flexShrink: 0, display: 'flex', alignItems: 'center', gap: 10, padding: '8px 14px',
        paddingTop: 'max(8px, env(safe-area-inset-top))',
        background: '#fff', borderBottom: `3px solid ${color}`, boxShadow: '0 2px 10px rgba(30,27,75,0.06)',
      }}>
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: phase === 'running' ? color : '#cbd5e1', flexShrink: 0 }} />
        <span style={{ fontWeight: 800, fontSize: '0.8rem', color, textTransform: 'uppercase', letterSpacing: '0.06em', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', minWidth: 0 }}>
          {normalizeSubjectLabel(subject)}
        </span>
        <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 900, fontSize: '1.15rem', color: '#1e1b4b', fontVariantNumeric: 'tabular-nums', marginLeft: 'auto' }}>
          {elapsedLabel}{phase === 'paused' ? <span style={{ fontSize: '0.7rem', color: '#f59e0b', marginLeft: 6 }}>PAUSED</span> : null}
        </span>
        {!isReview && (phase === 'running' ? (
          <button type="button" onClick={onPause} aria-label="Pause" style={iconBtn('#f59e0b')}><Pause size={15} fill="#fff" /></button>
        ) : (
          <button type="button" onClick={onResume} aria-label="Resume" style={iconBtn('#22c55e')}><Play size={15} fill="#fff" /></button>
        ))}
        {!isReview && (
          <button type="button" onClick={onRequestEnd} style={{ ...iconBtn('#ef4444'), width: 'auto', padding: '0 12px', gap: 6, fontWeight: 800, fontSize: '0.78rem' }}>
            <Square size={12} fill="#fff" /> End
          </button>
        )}
      </div>

      {/* Checklist */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '20px 16px 32px' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <h2 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 900, color: '#1e1b4b' }}>
            {isReview ? 'What did you finish?' : "Today's study plan"}
          </h2>
          <p style={{ margin: '4px 0 16px', color: '#64748b', fontWeight: 600, fontSize: '0.85rem' }}>
            {isReview
              ? 'Tick off everything you got done, then finish your session.'
              : 'Write down what you want to get through this session.'}
          </p>

          <div style={{ background: '#fff', borderRadius: 20, border: '1px solid #eceaf6', padding: '6px 4px', boxShadow: '0 8px 24px rgba(99,102,241,0.06)' }}>
            {items.map((it, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 10px', borderBottom: idx < items.length - 1 ? '1px solid #f1f0f7' : 'none' }}>
                <button
                  type="button"
                  aria-label={it.done ? 'Mark not done' : 'Mark done'}
                  onClick={() => update(idx, { done: !it.done })}
                  disabled={!it.text.trim()}
                  style={{
                    width: isReview ? 28 : 24, height: isReview ? 28 : 24, flexShrink: 0, borderRadius: 8, padding: 0,
                    border: it.done ? `2px solid ${color}` : '2px solid #cbd5e1',
                    background: it.done ? color : '#fff', color: '#fff', display: 'grid', placeItems: 'center',
                    cursor: it.text.trim() ? 'pointer' : 'default', opacity: it.text.trim() ? 1 : 0.5,
                  }}
                >
                  {it.done && <Check size={16} strokeWidth={3.5} />}
                </button>
                <input
                  ref={(el) => { inputRefs.current[idx] = el; }}
                  value={it.text}
                  placeholder={idx === 0 ? 'e.g. Finish Ex 5B Q1–10' : 'Add a task…'}
                  onChange={(e) => update(idx, { text: e.target.value })}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.nativeEvent.isComposing) { e.preventDefault(); addLine(idx); }
                    if (e.key === 'Backspace' && !it.text && items.length > 1) { e.preventDefault(); focusIdxRef.current = null; removeLine(idx); inputRefs.current[Math.max(0, idx - 1)]?.focus(); }
                  }}
                  style={{
                    flex: 1, minWidth: 0, border: 'none', outline: 'none', background: 'transparent',
                    fontSize: '1rem', fontWeight: 600, color: it.done ? '#94a3b8' : '#1e1b4b',
                    textDecoration: it.done ? 'line-through' : 'none', padding: '6px 0',
                  }}
                />
                {items.length > 1 && (
                  <button type="button" aria-label="Remove line" onClick={() => removeLine(idx)}
                    style={{ border: 'none', background: 'none', color: '#cbd5e1', cursor: 'pointer', padding: 4, display: 'grid', placeItems: 'center' }}>
                    <X size={16} />
                  </button>
                )}
              </div>
            ))}
            <button type="button" onClick={() => addLine()}
              style={{ display: 'flex', alignItems: 'center', gap: 8, width: '100%', border: 'none', background: 'none', padding: '12px 14px', color: '#64748b', fontWeight: 700, fontSize: '0.9rem', cursor: 'pointer' }}>
              <Plus size={16} /> Add line
            </button>
          </div>

          {!isReview && (
            <button type="button" onClick={onSave} style={{ ...pillBtn(color), marginTop: 18, width: '100%', justifyContent: 'center' }}>
              <Save size={16} /> Save
            </button>
          )}

          {isReview && (
            <>
              <p style={{ margin: '14px 4px 0', color: '#64748b', fontWeight: 700, fontSize: '0.85rem' }}>
                {filledCount > 0 ? `${doneCount} of ${filledCount} done` : 'No tasks written — you can still finish.'}
              </p>
              <div style={{ display: 'flex', gap: 10, marginTop: 18, flexWrap: 'wrap' }}>
                <button type="button" onClick={onBackToStudy} disabled={finishing}
                  style={{ ...pillBtn('#fff'), color: '#475569', border: '1px solid #e2e8f0', boxShadow: 'none' }}>
                  <ArrowLeft size={16} /> Keep studying
                </button>
                <button type="button" onClick={onFinish} disabled={finishing} style={{ ...pillBtn('#ef4444'), opacity: finishing ? 0.6 : 1 }}>
                  <Square size={14} fill="#fff" /> {finishing ? 'Saving…' : 'Finish session'}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const iconBtn = (bg) => ({
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 34, height: 34, borderRadius: 10,
  border: 'none', background: bg, color: '#fff', cursor: 'pointer', flexShrink: 0,
});

const pillBtn = (bg) => ({
  display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 20px', borderRadius: 16,
  border: 'none', background: bg, color: '#fff', fontWeight: 800, fontSize: '0.9rem', cursor: 'pointer',
  boxShadow: `0 10px 24px ${bg}55`,
});

export default StudySessionScreen;
