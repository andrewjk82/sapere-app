import { useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { ArrowLeft, CheckCircle2, Clock, PenLine, XCircle, BookOpenCheck } from 'lucide-react';
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
  const filterCounts = useMemo(() => items.reduce((counts, item) => {
    counts.all += 1;
    counts[item.status] = (counts[item.status] || 0) + 1;
    return counts;
  }, { all: 0 }), [items]);

  const months = [];
  for (const item of shown) {
    const label = monthLabel(item.date);
    if (months[months.length - 1]?.label !== label) months.push({ label, items: [] });
    months[months.length - 1].items.push(item);
  }

  return createPortal(
    <div style={{ position: 'fixed', inset: 0, zIndex: 10000, background: '#f7f7fc', display: 'flex', flexDirection: 'column', color: '#1e1b4b' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '16px clamp(18px, 4vw, 56px)', background: '#fff', borderBottom: '1px solid #eceaf5', boxShadow: '0 2px 10px rgba(30,27,75,0.03)' }}>
        <button type="button" onClick={onClose} aria-label="Back" style={{ width: 40, height: 40, border: '1px solid #e8e6f0', borderRadius: 13, background: '#fff', color: '#3730a3', cursor: 'pointer', display: 'grid', placeItems: 'center' }}>
          <ArrowLeft size={19} />
        </button>
        <div style={{ width: 42, height: 42, borderRadius: 14, background: '#f1edff', color: '#7c3aed', display: 'grid', placeItems: 'center' }}>
          <BookOpenCheck size={21} />
        </div>
        <div>
          <div style={{ fontWeight: 850, fontSize: '1.08rem', letterSpacing: '-0.02em' }}>Homework history</div>
          <div style={{ color: '#8b89a7', fontSize: '0.8rem', marginTop: 2 }}>{items.length} assignments</div>
        </div>
      </div>

      <div style={{ padding: '22px clamp(18px, 4vw, 56px) 0' }}>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {FILTERS.map(([key, label]) => {
            const active = filter === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setFilter(key)}
                aria-pressed={active}
                style={{ border: active ? '1px solid #6d45e8' : '1px solid #e8e6f0', borderRadius: 13, padding: '9px 13px', fontWeight: 750, fontSize: '0.82rem', cursor: 'pointer', background: active ? '#6d45e8' : '#fff', color: active ? '#fff' : '#5f5d78', boxShadow: active ? '0 4px 10px rgba(109,69,232,0.18)' : 'none', display: 'flex', alignItems: 'center', gap: 8 }}
              >
                {label}
                <span style={{ minWidth: 18, padding: '2px 5px', borderRadius: 7, background: active ? 'rgba(255,255,255,0.18)' : '#f1eff7', fontSize: '0.7rem', textAlign: 'center' }}>{filterCounts[key] || 0}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div style={{ flex: 1, minHeight: 0, overflowY: 'auto', padding: '10px clamp(18px, 4vw, 56px) 36px' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          {months.length === 0 && (
            <div style={{ textAlign: 'center', color: '#94a3b8', fontWeight: 700, padding: '48px 0' }}>No homework here yet.</div>
          )}
          {months.map((month) => (
            <section key={month.label}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.72rem', fontWeight: 850, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#8886a5', margin: '22px 2px 10px' }}>
                {month.label}
                <span style={{ height: 1, flex: 1, background: '#e8e6f0' }} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 420px), 1fr))', gap: 10 }}>
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
                      style={{ width: '100%', minWidth: 0, textAlign: 'left', display: 'flex', alignItems: 'center', gap: 14, padding: '16px 18px', borderRadius: 17, border: '1px solid #eae8f2', background: '#fff', cursor: openable ? 'pointer' : 'default', opacity: openable ? 1 : 0.82, boxShadow: '0 2px 8px rgba(30,27,75,0.025)', transition: 'transform 150ms ease, border-color 150ms ease, box-shadow 150ms ease' }}
                      onMouseEnter={(event) => {
                        if (!openable) return;
                        event.currentTarget.style.transform = 'translateY(-1px)';
                        event.currentTarget.style.borderColor = '#d5c8ff';
                        event.currentTarget.style.boxShadow = '0 8px 18px rgba(79,70,229,0.08)';
                      }}
                      onMouseLeave={(event) => {
                        event.currentTarget.style.transform = 'translateY(0)';
                        event.currentTarget.style.borderColor = '#eae8f2';
                        event.currentTarget.style.boxShadow = '0 2px 8px rgba(30,27,75,0.025)';
                      }}
                    >
                      <div style={{ width: 48, height: 48, flex: '0 0 48px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderRadius: 14, background: '#f4f1ff', color: '#6d45e8', textAlign: 'center', lineHeight: 1.05 }}>
                        <span style={{ fontSize: '0.95rem', fontWeight: 900 }}>{new Date(`${item.date}T12:00:00`).toLocaleDateString('en-AU', { day: '2-digit' })}</span>
                        <span style={{ fontSize: '0.6rem', fontWeight: 800, textTransform: 'uppercase', marginTop: 3 }}>{new Date(`${item.date}T12:00:00`).toLocaleDateString('en-AU', { month: 'short' })}</span>
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: '0.72rem', fontWeight: 750, color: '#8b89a7', marginBottom: 4 }}>{item.date}</div>
                        <div style={{ fontWeight: 760, color: '#28254f', lineHeight: 1.35, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                          {item.topics.map((t) => t.label).join(', ')}
                        </div>
                        {item.comment && (
                          <div style={{ fontSize: '0.78rem', color: '#4f46e5', fontWeight: 600, marginTop: 2 }}>“{item.comment}”</div>
                        )}
                      </div>
                      {item.status === 'checked' && item.wrongCount > 0 && (
                        <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#c2410c', background: '#fff7ed', borderRadius: 8, padding: '4px 7px', whiteSpace: 'nowrap' }}>{item.wrongCount} to redo</span>
                      )}
                      {item.mark && <span style={{ fontWeight: 900, color: '#1e1b4b', fontSize: '0.9rem' }}>{item.mark}</span>}
                      <span style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '6px 9px', borderRadius: 10, background: b.bg, color: b.color, fontSize: '0.7rem', fontWeight: 800, whiteSpace: 'nowrap' }}>
                        <BadgeIcon size={13} /> <span className="homework-history-status-label">{b.label}</span>
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
