import { useMemo, useState } from 'react';
import { ChevronDown, ChevronUp, CheckCircle2, Clock, PenLine, ClipboardCheck } from 'lucide-react';
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
    <div className="cs__homework-wrap">
      <article className={`cs__test-card cs__test-card--homework ${todoCount > 0 ? 'cs__test-card--pending' : 'cs__test-card--completed'}`}>
        <button
          type="button"
          className="cs__tile-main"
          onClick={() => latest ? setOpenItem(latest) : setShowHistory((v) => !v)}
          aria-label={`Homework: ${todoCount > 0 ? `${todoCount} to do` : allChecked ? 'All checked' : 'Submitted'}`}
        >
          <span className="cs__tile-status">
            {todoCount > 0 ? `${todoCount} to do` : allChecked ? 'All checked' : 'Submitted'}
          </span>
          <ClipboardCheck className="cs__tile-watermark" aria-hidden="true" />
          <span className="cs__tile-title">Homework</span>
        </button>
      </article>

      {(otherActive.length > 0 || history.length > 0) && (
        <div className="cs__homework-extra">
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
