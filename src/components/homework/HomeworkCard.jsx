import { useEffect, useMemo, useState } from 'react';
import { doc, getDocFromServer } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { CheckCircle2, Clock, PenLine, ClipboardCheck, History } from 'lucide-react';
import { getHomeworkItems, getHomeworkHistory, mergeFreshSessions, submittedSessionsToRecheck, getHomeworkStatus } from '../../utils/homework';
import HomeworkWorkspace from './HomeworkWorkspace';
import HomeworkSubmissionViewer from './HomeworkSubmissionViewer';
import HomeworkHistory from './HomeworkHistory';
import HomeworkRedo from './HomeworkRedo';
import { wrongQuestions } from '../../utils/homeworkRedo';

export const OPEN_HOMEWORK_FLAG = 'sapere:openHomework:v1';

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
const RECHECK_COOLDOWN_MS = 2 * 60 * 1000;
const FRESH_TTL_MS = 10 * 60 * 1000;
// Kept across the card remounting, but keyed by the signed-in student and expiring, so nothing outlives the account or goes stale.
const recheckedAt = new Map();   // `${uid}:${sessionId}` → when it was last re-read from the server
const freshSessions = new Map(); // `${uid}:${sessionId}` → { data, at }: the checked copy that re-read returned
const dropOtherAccounts = (uid) => {
  for (const key of [...recheckedAt.keys()]) if (!key.startsWith(`${uid}:`)) recheckedAt.delete(key);
  for (const key of [...freshSessions.keys()]) if (!key.startsWith(`${uid}:`)) freshSessions.delete(key);
};
const freshFor = (uid) => {
  const out = {};
  const now = Date.now();
  for (const [key, { data, at }] of freshSessions) {
    if (!uid || !key.startsWith(`${uid}:`)) continue;
    if (now - at > FRESH_TTL_MS) { freshSessions.delete(key); continue; }
    out[key.slice(uid.length + 1)] = data;
  }
  return out;
};

const HomeworkCard = ({ sessions: liveSessions, profile, user }) => {
  // The live listener can lag (cache while the connection is flaky) and keep showing "Submitted" after the teacher
  // checked it. A homework shown as Submitted is re-read straight from the server — at most 3 reads, at most once per 2 min each.
  const uid = user?.uid || '';
  if (uid) dropOtherAccounts(uid);
  const [fresh, setFresh] = useState(() => freshFor(uid));
  const recheckKey = submittedSessionsToRecheck(liveSessions).map((s) => s.id).join(',');
  useEffect(() => {
    if (!recheckKey || !uid) return undefined;
    let cancelled = false;
    (async () => {
      for (const id of recheckKey.split(',')) {
        const key = `${uid}:${id}`;
        if (Date.now() - (recheckedAt.get(key) || 0) < RECHECK_COOLDOWN_MS) continue;
        recheckedAt.set(key, Date.now());
        try {
          const snap = await getDocFromServer(doc(db, 'sessions', id));
          if (cancelled || !snap.exists()) continue;
          const data = snap.data();
          if (getHomeworkStatus(data) === 'checked') { freshSessions.set(key, { data, at: Date.now() }); setFresh((prev) => ({ ...prev, [id]: data })); }
        } catch { /* offline or blocked: keep what the listener has */ }
      }
    })();
    return () => { cancelled = true; };
  }, [recheckKey, uid]);
  const sessions = useMemo(() => mergeFreshSessions(liveSessions, fresh), [liveSessions, fresh]);

  const items = useMemo(() => getHomeworkItems(sessions), [sessions]);
  const pastCount = useMemo(() => getHomeworkHistory(sessions).length, [sessions]);
  const active = items.filter((i) => i.status !== 'checked');
  const [showHistory, setShowHistory] = useState(false);
  const [openItem, setOpenItem] = useState(null);
  const [redoItem, setRedoItem] = useState(null);
  // A checked homework with ✗/½ opens straight into the redo screen (worksheet | new notes);
  // the pages handed in are one tap away there. Everything else opens the plain viewer.
  const openHomework = (item) => {
    if (item?.status === 'checked' && wrongQuestions(item.marks, item.topics).length > 0) setRedoItem(item);
    else setOpenItem(item);
  };

  const latestToOpen = items.find((i) => i.status !== 'checked') || null;

  // The Dashboard's Homework banner sets this one-shot flag so the student lands straight in the homework, not on the Challenge list.
  const [autoOpen, setAutoOpen] = useState(() => {
    try { return sessionStorage.getItem(OPEN_HOMEWORK_FLAG) === '1'; } catch { return false; }
  });
  if (autoOpen && latestToOpen) {
    try { sessionStorage.removeItem(OPEN_HOMEWORK_FLAG); } catch { /* storage blocked */ }
    setAutoOpen(false);
    setOpenItem(latestToOpen);
  }

  if (items.length === 0) return null;

  const openSession = openItem ? (sessions || []).find((s) => s.id === openItem.sessionId) : null;
  const todoCount = active.filter((i) => i.status === 'todo').length;
  const latest = active[0] || null;
  const allChecked = active.length === 0;
  const otherActive = active.slice(1);

  return (
    <div className="cs__homework-wrap">
      <article className={`cs__test-card cs__test-card--interactive cs__test-card--with-note cs__test-card--homework ${todoCount > 0 ? 'cs__test-card--pending' : 'cs__test-card--completed'}`}>
        <button
          type="button"
          className="cs__tile-main"
          onClick={() => latest ? setOpenItem(latest) : setShowHistory(true)}
          aria-label={`Homework: ${todoCount > 0 ? `${todoCount} to do` : allChecked ? 'All checked' : 'Submitted'}`}
        >
          <span className="cs__tile-status">
            {todoCount > 0 ? `${todoCount} to do` : allChecked ? 'All checked' : 'Submitted'}
          </span>
          <ClipboardCheck className="cs__tile-watermark" aria-hidden="true" />
          <span className="cs__tile-title">Homework</span>
        </button>
        {/* Same footer strip as the Secret Note one on the cards beside it. */}
        <button type="button" className="cs__note-strip" onClick={() => setShowHistory(true)}>
          <History size={15} aria-hidden="true" />
          <span className="cs__note-main">
            <strong>Homework history</strong>
            <span className="cs__note-sub">{pastCount} past assignment{pastCount === 1 ? '' : 's'}</span>
          </span>
        </button>
      </article>

      {otherActive.length > 0 && (
        <div className="cs__homework-extra">
          {otherActive.map((item) => <Row key={item.sessionId} item={item} onOpen={setOpenItem} />)}
        </div>
      )}

      {showHistory && (
        <HomeworkHistory sessions={sessions} onOpen={openHomework} onClose={() => setShowHistory(false)} />
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
        <HomeworkSubmissionViewer
          sessionId={openItem.sessionId}
          mode="student"
          uid={user?.uid}
          info={openItem}
          onClose={() => setOpenItem(null)}
          onRedo={() => { setRedoItem(openItem); setOpenItem(null); }}
        />
      )}
      {redoItem && (
        <HomeworkRedo item={redoItem} user={user} profile={profile} onClose={() => setRedoItem(null)} />
      )}
    </div>
  );
};

export default HomeworkCard;
