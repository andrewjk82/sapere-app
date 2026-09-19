import { useState } from 'react';
import { Pencil, X } from 'lucide-react';
import { normalizeSubjectLabel } from '../../utils/subjectLabels';
import { DEFAULT_SUBJECT_COLOR } from '../../utils/subjectColors';

const todayMidnight = () => new Date(new Date().toDateString());

const ddayFor = (dateStr) => {
  if (!dateStr) return null;
  return Math.ceil((new Date(dateStr) - todayMidnight()) / 86400000);
};

const formatDate = (dateStr) => {
  if (!dateStr) return null;
  const d = new Date(`${dateStr}T00:00:00`);
  return d.toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' });
};

/**
 * Shows only the currently-selected subject's exam D-day — mirrors whichever
 * subject is active in SubjectStopwatch (see its onSubjectChange prop),
 * rather than listing every subject at once. Exam dates live on
 * users/{uid}.studySubjectExamDates, a map keyed by subject name.
 */
const SubjectExamPanel = ({ subject, subjectColors = {}, examDates = {}, onSetExamDate }) => {
  const [editing, setEditing] = useState(false);

  if (!subject) return null;

  const c = subjectColors[subject] || DEFAULT_SUBJECT_COLOR;
  const dateStr = examDates[subject] || '';
  const dday = ddayFor(dateStr);

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
            <input
              type="date"
              autoFocus
              value={dateStr}
              onChange={(e) => { onSetExamDate?.(subject, e.target.value); setEditing(false); }}
              style={{
                marginTop: 4, padding: '8px 10px', borderRadius: 10, border: `1px solid ${c}55`,
                fontSize: '0.85rem', outline: 'none', color: '#1e1b4b',
              }}
            />
          ) : dateStr ? (
            <>
              <span style={{ fontSize: '1.6rem', fontWeight: 900, color: dday <= 0 ? '#ef4444' : dday <= 7 ? '#f59e0b' : c }}>
                {dday > 0 ? `D-${dday}` : dday === 0 ? 'D-Day' : 'Past'}
              </span>
              <span style={{ fontSize: '0.78rem', fontWeight: 600, color: '#64748b' }}>{formatDate(dateStr)}</span>
            </>
          ) : (
            <span style={{ fontSize: '0.82rem', fontWeight: 600, color: '#94a3b8' }}>No exam date set</span>
          )}
        </div>

        <button
          type="button"
          onClick={() => setEditing((cur) => !cur)}
          aria-label={editing ? `Close exam date for ${normalizeSubjectLabel(subject)}` : `Set exam date for ${normalizeSubjectLabel(subject)}`}
          style={{
            background: editing ? '#fff' : c, border: editing ? `1px solid ${c}55` : 'none', cursor: 'pointer',
            width: 36, height: 36, borderRadius: '50%', display: 'grid', placeItems: 'center', flexShrink: 0,
            color: editing ? c : '#fff', boxShadow: editing ? 'none' : `0 6px 16px ${c}40`,
          }}
        >
          {editing ? <X size={16} /> : <Pencil size={15} />}
        </button>
      </div>
    </div>
  );
};

export default SubjectExamPanel;
