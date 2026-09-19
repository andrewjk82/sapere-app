import { useState } from 'react';
import { Pencil, X, Check } from 'lucide-react';
import { normalizeSubjectLabel } from '../../utils/subjectLabels';
import { DEFAULT_SUBJECT_COLOR } from '../../utils/subjectColors';
import { normalizeExamEntry, ddayFor, formatExamDate, formatExamTime } from '../../utils/examCountdown';

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
const SubjectExamPanel = ({ subject, subjectColors = {}, examDates = {}, onSetExamDate }) => {
  const [draft, setDraft] = useState(null); // { date, time } while editing, else null

  if (!subject) return null;

  const c = subjectColors[subject] || DEFAULT_SUBJECT_COLOR;
  const entry = normalizeExamEntry(examDates[subject]);
  const dday = ddayFor(entry);
  const editing = draft !== null;

  const startEditing = () => setDraft({ date: entry?.date || '', time: entry?.time || '' });
  const cancelEditing = () => setDraft(null);
  const save = () => {
    if (draft.date) onSetExamDate?.(subject, draft);
    setDraft(null);
  };

  return (
    <div style={{
      borderRadius: 32, padding: '28px', background: '#fff',
      border: '1px solid #eceaf6', boxShadow: '0 12px 30px rgba(99,102,241,0.08)',
    }}>
      <div style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#94a3b8', marginBottom: 16 }}>
        Exam Countdown
      </div>

      <div style={{
        borderRadius: 24, padding: '20px 24px', border: `1px solid ${c}33`, background: `${c}0d`,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap',
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <span style={{ fontWeight: 800, fontSize: '0.95rem', color: c }}>{normalizeSubjectLabel(subject)}</span>
          {editing ? (
            <div style={{ display: 'flex', gap: 8, marginTop: 4, flexWrap: 'wrap' }}>
              <input
                type="date"
                autoFocus
                value={draft.date}
                onChange={(e) => setDraft((d) => ({ ...d, date: e.target.value }))}
                style={{
                  padding: '8px 10px', borderRadius: 10, border: `1px solid ${c}55`,
                  fontSize: '0.85rem', outline: 'none', color: '#1e1b4b',
                }}
              />
              <input
                type="time"
                value={draft.time}
                disabled={!draft.date}
                onChange={(e) => setDraft((d) => ({ ...d, time: e.target.value }))}
                style={{
                  padding: '8px 10px', borderRadius: 10, border: `1px solid ${c}55`,
                  fontSize: '0.85rem', outline: 'none', color: '#1e1b4b',
                  opacity: draft.date ? 1 : 0.5,
                }}
              />
            </div>
          ) : entry ? (
            <>
              <span style={{ fontSize: '1.6rem', fontWeight: 900, color: dday <= 0 ? '#ef4444' : dday <= 7 ? '#f59e0b' : c }}>
                {dday > 0 ? `D-${dday}` : dday === 0 ? 'D-Day' : 'Past'}
              </span>
              <span style={{ fontSize: '0.78rem', fontWeight: 600, color: '#64748b' }}>
                {formatExamDate(entry)}{entry.time ? ` · ${formatExamTime(entry)}` : ''}
              </span>
            </>
          ) : (
            <span style={{ fontSize: '0.82rem', fontWeight: 600, color: '#94a3b8' }}>No exam date set</span>
          )}
        </div>

        {editing ? (
          <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
            <button
              type="button"
              onClick={cancelEditing}
              aria-label={`Cancel editing exam date for ${normalizeSubjectLabel(subject)}`}
              style={{
                background: '#fff', border: `1px solid ${c}55`, cursor: 'pointer',
                width: 36, height: 36, borderRadius: '50%', display: 'grid', placeItems: 'center',
                color: c,
              }}
            >
              <X size={16} />
            </button>
            <button
              type="button"
              onClick={save}
              disabled={!draft.date}
              aria-label={`Save exam date for ${normalizeSubjectLabel(subject)}`}
              style={{
                background: draft.date ? c : '#e2e8f0', border: 'none', cursor: draft.date ? 'pointer' : 'not-allowed',
                width: 36, height: 36, borderRadius: '50%', display: 'grid', placeItems: 'center',
                color: '#fff', boxShadow: draft.date ? `0 6px 16px ${c}40` : 'none',
              }}
            >
              <Check size={16} />
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={startEditing}
            aria-label={`Set exam date for ${normalizeSubjectLabel(subject)}`}
            style={{
              background: c, border: 'none', cursor: 'pointer',
              width: 36, height: 36, borderRadius: '50%', display: 'grid', placeItems: 'center', flexShrink: 0,
              color: '#fff', boxShadow: `0 6px 16px ${c}40`,
            }}
          >
            <Pencil size={15} />
          </button>
        )}
      </div>
    </div>
  );
};

export default SubjectExamPanel;
