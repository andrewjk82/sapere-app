import { useMemo, useState } from 'react';
import { BookOpenCheck, ChevronDown, ChevronUp, CheckCircle2, Clock, PenLine } from 'lucide-react';
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

const HomeworkCard = ({ sessions, profile, user }) => {
  const items = useMemo(() => getHomeworkItems(sessions), [sessions]);
  const active = items.filter((i) => i.status !== 'checked');
  const history = items.filter((i) => i.status === 'checked');
  const [showHistory, setShowHistory] = useState(false);
  const [openItem, setOpenItem] = useState(null);

  if (items.length === 0) return null;

  const openSession = openItem ? (sessions || []).find((s) => s.id === openItem.sessionId) : null;

  return (
    <div className="app-panel" style={{ padding: 20, borderRadius: 24, marginBottom: 24 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
        <BookOpenCheck size={18} color="#7c3aed" />
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 800, color: '#1e1b4b' }}>Homework</h3>
        {active.length > 0 && (
          <span style={{ marginLeft: 'auto', fontSize: '0.75rem', fontWeight: 800, color: '#7c3aed' }}>{active.length} open</span>
        )}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {active.length === 0 ? (
          <div style={{ color: '#94a3b8', fontWeight: 600, fontSize: '0.88rem' }}>All caught up.</div>
        ) : (
          active.map((item) => <Row key={item.sessionId} item={item} onOpen={setOpenItem} />)
        )}
      </div>

      {history.length > 0 && (
        <>
          <button
            type="button"
            onClick={() => setShowHistory((v) => !v)}
            style={{ marginTop: 12, display: 'flex', alignItems: 'center', gap: 4, border: 0, background: 'transparent', color: '#64748b', fontWeight: 700, fontSize: '0.8rem', cursor: 'pointer' }}
          >
            {showHistory ? <ChevronUp size={14} /> : <ChevronDown size={14} />} History ({history.length})
          </button>
          {showHistory && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 8 }}>
              {history.map((item) => <Row key={item.sessionId} item={item} onOpen={setOpenItem} />)}
            </div>
          )}
        </>
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
