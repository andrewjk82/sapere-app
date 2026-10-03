import { useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { ArrowLeft, CheckCircle2, Clock, PenLine, XCircle } from 'lucide-react';
import { getHomeworkHistory } from '../../utils/homework';

const BADGE = {
  todo: { label: 'To do', color: '#7c3aed', bg: '#f5f3ff', Icon: PenLine },
  submitted: { label: 'Submitted', color: '#b45309', bg: '#fffbeb', Icon: Clock },
  checked: { label: 'Checked', color: '#15803d', bg: '#f0fdf4', Icon: CheckCircle2 },
  missed: { label: 'Not submitted', color: '#64748b', bg: '#f1f5f9', Icon: XCircle },
};

const FILTERS = [
  ['all', 'All'],
  ['checked', 'Checked'],
  ['submitted', 'Submitted'],
  ['missed', 'Not submitted'],
];

const monthLabel = (date) => {
  const d = new Date(`${date}T12:00:00`);
  return Number.isNaN(d.getTime()) ? 'Earlier' : d.toLocaleDateString('en-AU', { month: 'long', year: 'numeric' });
};

/**
 * Every past homework, from the sessions the app already has in memory — no
 * Firestore reads. Opening one shows the pages kept on this device.
 */
const HomeworkHistory = ({ sessions, onOpen, onClose }) => {
  const items = useMemo(() => getHomeworkHistory(sessions), [sessions]);
  const [filter, setFilter] = useState('all');
  const shown = filter === 'all' ? items : items.filter((i) => i.status === filter);

  const months = [];
  for (const item of shown) {
    const label = monthLabel(item.date);
    if (months[months.length - 1]?.label !== label) months.push({ label, items: [] });
    months[months.length - 1].items.push(item);
  }

  return createPortal(
    <div style={{ position: 'fixed', inset: 0, zIndex: 10000, background: '#f8fafc', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', background: '#fff', borderBottom: '1px solid #e2e8f0' }}>
        <button type="button" onClick={onClose} aria-label="Back" style={{ border: 0, background: 'transparent', cursor: 'pointer', display: 'flex', padding: 6 }}>
          <ArrowLeft size={20} />
        </button>
        <div style={{ fontWeight: 800, color: '#1e1b4b' }}>Homework history</div>
      </div>

      <div style={{ display: 'flex', gap: 6, padding: '10px 14px', flexWrap: 'wrap', background: '#fff', borderBottom: '1px solid #eef2f7' }}>
        {FILTERS.map(([key, label]) => (
          <button
            key={key}
            type="button"
            onClick={() => setFilter(key)}
            style={{ border: 0, borderRadius: 999, padding: '6px 12px', fontWeight: 800, fontSize: '0.78rem', cursor: 'pointer', background: filter === key ? '#7c3aed' : '#f1f5f9', color: filter === key ? '#fff' : '#475569' }}
          >
            {label}
          </button>
        ))}
      </div>

      <div style={{ flex: 1, minHeight: 0, overflowY: 'auto', padding: '6px 14px 24px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          {months.length === 0 && (
            <div style={{ textAlign: 'center', color: '#94a3b8', fontWeight: 700, padding: '48px 0' }}>No homework here yet.</div>
          )}
          {months.map((month) => (
            <section key={month.label}>
              <div style={{ fontSize: '0.72rem', fontWeight: 900, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#94a3b8', margin: '16px 2px 8px' }}>
                {month.label}
              </div>
              <div style={{ display: 'grid', gap: 8 }}>
                {month.items.map((item) => {
                  const b = BADGE[item.status] || BADGE.todo;
                  const BadgeIcon = b.Icon;
                  const openable = item.status !== 'missed';
                  return (
                    <button
                      key={item.sessionId}
                      type="button"
                      disabled={!openable}
                      onClick={() => onOpen(item)}
                      style={{ width: '100%', textAlign: 'left', display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px', borderRadius: 14, border: '1px solid #eef2f7', background: '#fff', cursor: openable ? 'pointer' : 'default', opacity: openable ? 1 : 0.75 }}
                    >
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#94a3b8' }}>{item.date}</div>
                        <div style={{ fontWeight: 700, color: '#1e1b4b', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          {item.topics.map((t) => t.label).join(', ')}
                        </div>
                      </div>
                      {item.mark && <span style={{ fontWeight: 900, color: '#1e1b4b', fontSize: '0.9rem' }}>{item.mark}</span>}
                      <span style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '4px 10px', borderRadius: 999, background: b.bg, color: b.color, fontSize: '0.72rem', fontWeight: 800, whiteSpace: 'nowrap' }}>
                        <BadgeIcon size={12} /> {b.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default HomeworkHistory;
