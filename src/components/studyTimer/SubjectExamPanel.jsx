import { useState } from 'react';
import { Pencil, X, Check, ChevronRight } from 'lucide-react';
import { normalizeSubjectLabel } from '../../utils/subjectLabels';
import { DEFAULT_SUBJECT_COLOR } from '../../utils/subjectColors';
import { normalizeExamEntry, ddayFor, formatExamDate } from '../../utils/examCountdown';

/**
 * Shows only the currently-selected subject's exam D-day — mirrors whichever
 * subject is active in SubjectStopwatch (see its onSubjectChange prop),
 * rather than listing every subject at once. Exam dates live on
 * users/{uid}.studySubjectExamDates, a map keyed by subject name (see
 * src/utils/examCountdown.js for the stored shape).
 *
 * Editing is a local draft — nothing is written to Firestore until Save is
 * pressed; Cancel discards the draft and reverts to the last saved value.
 */
const SubjectExamPanel = ({ subject, subjectColors = {}, examDates = {}, onSetExamDate, onOpenNotes }) => {
  const [draft, setDraft] = useState(null); // date string while editing, else null

  if (!subject) return null;

  const c = subjectColors[subject] || DEFAULT_SUBJECT_COLOR;
  const entry = normalizeExamEntry(examDates[subject]);
  const dday = ddayFor(entry);
  const editing = draft !== null;

  const startEditing = () => setDraft(entry?.date || '');
  const cancelEditing = () => setDraft(null);
  const save = () => {
    if (draft) onSetExamDate?.(subject, { date: draft, time: '' });
    setDraft(null);
  };

  const ddayColor = entry ? (dday <= 0 ? '#ef4444' : dday <= 7 ? '#f59e0b' : c) : '#cbd5e1';

  return (
    <div style={{
      borderRadius: 32, padding: '22px 28px 26px', background: '#fff',
      border: '1px solid #eceaf6', boxShadow: '0 12px 30px rgba(99,102,241,0.08)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: c }} />
        <span style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#94a3b8' }}>
          {normalizeSubjectLabel(subject)}
        </span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: onOpenNotes ? 'repeat(auto-fit, minmax(220px, 1fr))' : '1fr', gap: 12 }}>
        {/* Exam D-day */}
        <div style={tile}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, minWidth: 0 }}>
            <span style={tileLabel}>Exam</span>
            {editing ? (
              <input
                type="date"
                autoFocus
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                style={{
                  padding: '8px 10px', borderRadius: 10, border: '1px solid #e2e8f0',
                  fontSize: '0.85rem', outline: 'none', color: '#1e1b4b', background: '#fff',
                }}
              />
            ) : (
              <>
                <span style={{ ...tileValue, color: ddayColor }}>
                  {entry ? (dday > 0 ? `D-${dday}` : dday === 0 ? 'D-Day' : 'Past') : '—'}
                </span>
                <span style={tileMeta}>{entry ? formatExamDate(entry) : 'No date set'}</span>
              </>
            )}
          </div>

          {editing ? (
            <div style={{ display: 'flex', gap: 6, flexShrink: 0 }}>
              <button type="button" onClick={cancelEditing}
                aria-label={`Cancel editing exam date for ${normalizeSubjectLabel(subject)}`}
                style={roundBtn(false, c)}>
                <X size={15} />
              </button>
              <button type="button" onClick={save} disabled={!draft}
                aria-label={`Save exam date for ${normalizeSubjectLabel(subject)}`}
                style={{ ...roundBtn(true, c), opacity: draft ? 1 : 0.4, cursor: draft ? 'pointer' : 'not-allowed' }}>
                <Check size={15} />
              </button>
            </div>
          ) : (
            <button type="button" onClick={startEditing}
              aria-label={`Set exam date for ${normalizeSubjectLabel(subject)}`}
              style={roundBtn(false, c)}>
              <Pencil size={14} />
            </button>
          )}
        </div>

        {/* Study notes */}
        {onOpenNotes && (
          <button type="button" onClick={onOpenNotes} style={{ ...tile, cursor: 'pointer', textAlign: 'left', font: 'inherit' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, minWidth: 0 }}>
              <span style={tileLabel}>Notes</span>
              <span style={{ ...tileValue, color: '#1e1b4b' }}>Study log</span>
              <span style={tileMeta}>Plans &amp; hours studied</span>
            </div>
            <span style={roundBtn(false, c)}>
              <ChevronRight size={16} />
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

const tile = {
  borderRadius: 20, padding: '18px 20px', border: '1px solid #eef0f5', background: '#fafbfd',
  display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 14, minHeight: 104, boxSizing: 'border-box',
};
const tileLabel = { fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#94a3b8' };
const tileValue = { fontFamily: "'Outfit', sans-serif", fontSize: '1.5rem', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.01em' };
const tileMeta = { fontSize: '0.8rem', fontWeight: 600, color: '#64748b' };
const roundBtn = (filled, c) => ({
  width: 34, height: 34, borderRadius: '50%', flexShrink: 0, display: 'grid', placeItems: 'center', cursor: 'pointer',
  border: filled ? 'none' : '1px solid #e2e8f0', background: filled ? c : '#fff', color: filled ? '#fff' : c,
});

export default SubjectExamPanel;
