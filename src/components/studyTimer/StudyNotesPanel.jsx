import { useEffect, useState } from 'react';
import { NotebookPen, ChevronDown, ChevronUp, Check } from 'lucide-react';
import { fetchSubjectNotes } from '../../services/studyNotesService';
import { normalizeSubjectLabel } from '../../utils/subjectLabels';
import { DEFAULT_SUBJECT_COLOR } from '../../utils/subjectColors';

const formatDuration = (sec) => {
  const m = Math.round((sec || 0) / 60);
  if (m < 60) return `${m} min`;
  return `${Math.floor(m / 60)}h ${m % 60}m`;
};

const formatDate = (dateStr) => {
  if (!dateStr) return '';
  const d = new Date(`${dateStr}T00:00:00`);
  return Number.isNaN(d.getTime()) ? dateStr : d.toLocaleDateString('en-AU', { weekday: 'short', day: 'numeric', month: 'short' });
};

/**
 * Past session checklists for the selected subject. Collapsed by default and
 * loaded only when opened (one range read), then refreshed when a session of
 * that subject is finished (`refreshKey`).
 */
const StudyNotesPanel = ({ uid, subject, subjectColors = {}, refreshKey = 0 }) => {
  const color = subjectColors[subject] || DEFAULT_SUBJECT_COLOR;
  const [open, setOpen] = useState(false);
  // Results are keyed by subject+refreshKey, so switching subject or finishing
  // a session makes the stored list stale (→ null → refetch on open).
  const loadKey = `${subject}|${refreshKey}`;
  const [loaded, setLoaded] = useState({ key: null, notes: [], error: false });
  const notes = loaded.key === loadKey ? loaded.notes : null; // null = not loaded
  const error = loaded.key === loadKey && loaded.error;

  useEffect(() => {
    if (!open || notes !== null || !uid || !subject) return undefined;
    let cancelled = false;
    fetchSubjectNotes(uid, subject)
      .then((list) => { if (!cancelled) setLoaded({ key: loadKey, notes: list, error: false }); })
      .catch((e) => {
        console.warn('[studytime] notes fetch failed:', e?.code || e);
        if (!cancelled) setLoaded({ key: loadKey, notes: [], error: true });
      });
    return () => { cancelled = true; };
  }, [open, notes, uid, subject, loadKey]);

  return (
    <div style={{ borderRadius: 24, background: '#fff', border: '1px solid #eceaf6', boxShadow: '0 12px 30px rgba(99,102,241,0.06)', overflow: 'hidden' }}>
      <button type="button" onClick={() => setOpen((v) => !v)}
        style={{ display: 'flex', alignItems: 'center', gap: 10, width: '100%', padding: '16px 20px', border: 'none', background: 'none', cursor: 'pointer', textAlign: 'left' }}>
        <NotebookPen size={18} color={color} />
        <span style={{ fontWeight: 900, color: '#1e1b4b', fontSize: '0.95rem' }}>
          {normalizeSubjectLabel(subject)} notes
        </span>
        <span style={{ marginLeft: 'auto', color: '#94a3b8' }}>{open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}</span>
      </button>

      {open && (
        <div style={{ padding: '0 20px 18px', display: 'flex', flexDirection: 'column', gap: 12 }}>
          {notes === null && <p style={mutedText}>Loading…</p>}
          {notes !== null && notes.length === 0 && (
            <p style={mutedText}>{error ? 'Could not load notes — try again later.' : 'No notes yet. Start the timer to write your first study plan.'}</p>
          )}
          {(notes || []).map((n) => {
            const items = Array.isArray(n.items) ? n.items : [];
            const done = items.filter((it) => it.done).length;
            return (
              <div key={n.id} style={{ borderRadius: 16, border: '1px solid #f1f0f7', background: '#fcfbff', padding: '12px 14px' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 8, flexWrap: 'wrap' }}>
                  <span style={{ fontWeight: 800, color: '#1e1b4b', fontSize: '0.85rem' }}>{formatDate(n.date)}</span>
                  <span style={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.75rem' }}>{formatDuration(n.durationSec)}</span>
                  <span style={{ marginLeft: 'auto', color, fontWeight: 800, fontSize: '0.75rem' }}>{done}/{items.length} done</span>
                </div>
                {items.map((it, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '3px 0' }}>
                    <span style={{
                      width: 16, height: 16, borderRadius: 5, flexShrink: 0, display: 'grid', placeItems: 'center',
                      border: it.done ? `2px solid ${color}` : '2px solid #cbd5e1', background: it.done ? color : '#fff', color: '#fff',
                    }}>
                      {it.done && <Check size={11} strokeWidth={4} />}
                    </span>
                    <span style={{ fontSize: '0.88rem', fontWeight: 600, color: it.done ? '#94a3b8' : '#334155', textDecoration: it.done ? 'line-through' : 'none' }}>
                      {it.text}
                    </span>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

const mutedText = { margin: 0, color: '#94a3b8', fontWeight: 600, fontSize: '0.85rem' };

export default StudyNotesPanel;
