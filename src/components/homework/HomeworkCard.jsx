import { useMemo, useState } from 'react';
import { ArrowRight, ChevronDown, ChevronUp, CheckCircle2, Clock, History, PenLine } from 'lucide-react';
import SessionRing from '../challenge/SessionRing';
import { getHomeworkItems } from '../../utils/homework';
import HomeworkWorkspace from './HomeworkWorkspace';
import HomeworkSubmissionViewer from './HomeworkSubmissionViewer';

const BADGE = {
  todo: { label: 'To do', color: '#7c3aed', bg: '#f5f3ff', Icon: PenLine },
  submitted: { label: 'Submitted', color: '#b45309', bg: '#fffbeb', Icon: Clock },
  checked: { label: 'Checked', color: '#15803d', bg: '#f0fdf4', Icon: CheckCircle2 },
};

const Row = ({ item, onOpen }) => {
  const b = BADGE[item.status] || BADGE.todo;
  const BadgeIcon = b.Icon;
  return (
    <button
      type="button"
      onClick={() => onOpen(item)}
      style={{ width: '100%', textAlign: 'left', display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px', borderRadius: 14, border: '1px solid #eef2f7', background: '#fff', cursor: 'pointer' }}
    >
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#94a3b8' }}>{item.date}</div>
        <div style={{ fontWeight: 700, color: '#1e1b4b', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {item.topics.map((t) => t.label).join(', ')}
        </div>
      </div>
      <span style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '4px 10px', borderRadius: 999, background: b.bg, color: b.color, fontSize: '0.72rem', fontWeight: 800, whiteSpace: 'nowrap' }}>
        <BadgeIcon size={12} /> {b.label}
      </span>
    </button>
  );
};

// Rendered inside the Challenge page's card list, so it uses that page's
// cs__ card classes and ring icon to look like the Daily practice /
// Calculation / Teacher Feedback cards above it.
const HomeworkCard = ({ sessions, profile, user }) => {
  const items = useMemo(() => getHomeworkItems(sessions), [sessions]);
  const active = items.filter((i) => i.status !== 'checked');
  const history = items.filter((i) => i.status === 'checked');
  const [showHistory, setShowHistory] = useState(false);
  const [openItem, setOpenItem] = useState(null);

  if (items.length === 0) return null;

  const openSession = openItem ? (sessions || []).find((s) => s.id === openItem.sessionId) : null;
  const todoCount = active.filter((i) => i.status === 'todo').length;
  const latest = active[0] || null;
  const allChecked = active.length === 0;
  const otherActive = active.slice(1);

  return (
    <div className="cs__test-card">
      <div className="cs__test">
        <SessionRing kind="homework" done={allChecked} />
        <div className="cs__test-main">
          <div className="cs__test-titlerow">
            <h3>Homework</h3>
            {todoCount > 0 ? (
              <span className="cs__chip-state cs__chip-state--todo"><span className="cs__chip-dot" /> {todoCount} to do</span>
            ) : allChecked ? (
              <span className="cs__chip-state cs__chip-state--done"><CheckCircle2 size={13} /> All checked</span>
            ) : (
              <span className="cs__chip-state" style={{ color: '#0369a1', background: '#f0f9ff', borderColor: '#bae6fd' }}><Clock size={13} /> Submitted</span>
            )}
          </div>
          <p>
            {latest
              ? `${latest.date} · ${latest.topics.map((t) => t.label).join(', ')}`
              : `${history.length} homework checked by your teacher`}
          </p>
        </div>
        <div className="cs__test-actions">
          {latest ? (
            <button type="button" className="cs__primary cs__primary--begin" onClick={() => setOpenItem(latest)}>
              {latest.status === 'todo' ? 'Begin' : 'Open'} <ArrowRight size={16} />
            </button>
          ) : (
            <button type="button" className="cs__primary cs__primary--review" onClick={() => setShowHistory((v) => !v)}>
              <History size={16} /> History
            </button>
          )}
        </div>
      </div>

      {(otherActive.length > 0 || history.length > 0) && (
        <div style={{ borderTop: '1px solid #f1f5f9', background: '#fcfcfe', padding: '12px 22px 14px', display: 'flex', flexDirection: 'column', gap: 8 }}>
          {otherActive.map((item) => <Row key={item.sessionId} item={item} onOpen={setOpenItem} />)}
          {history.length > 0 && latest && (
            <button
              type="button"
              onClick={() => setShowHistory((v) => !v)}
              style={{ alignSelf: 'flex-start', display: 'flex', alignItems: 'center', gap: 4, border: 0, background: 'transparent', color: '#64748b', fontWeight: 700, fontSize: '0.8rem', cursor: 'pointer', padding: 0 }}
            >
              {showHistory ? <ChevronUp size={14} /> : <ChevronDown size={14} />} History ({history.length})
            </button>
          )}
          {showHistory && history.map((item) => <Row key={item.sessionId} item={item} onOpen={setOpenItem} />)}
        </div>
      )}

      {openItem && openSession && openItem.status !== 'checked' && (
        <HomeworkWorkspace
          session={openSession}
          profile={profile}
          user={user}
          status={openItem.status}
          onClose={() => setOpenItem(null)}
          onSubmitted={() => setOpenItem(null)}
        />
      )}
      {openItem && openItem.status === 'checked' && (
        <HomeworkSubmissionViewer sessionId={openItem.sessionId} mode="student" uid={user?.uid} onClose={() => setOpenItem(null)} />
      )}
    </div>
  );
};

export default HomeworkCard;
