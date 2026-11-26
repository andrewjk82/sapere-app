import { useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { arrayRemove, arrayUnion, deleteField, doc, FieldPath, updateDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import { touchStudentsSyncMeta } from '../services/studentService';
import { courseTopics, deriveTopicStates, topicStatuses, summarize, STATE_LABEL } from '../utils/topicProgress';

// The Progress card on the Class page. Done = taught → homework in → checked → mistakes gone through (worked out from
// the lessons already loaded: no extra reads). Tap the card to see every topic and change any of them by hand
// (Done / Not done / back to Auto); a manual call is stored on the student as progressOverrides.

const todayKey = () => new Date().toLocaleDateString('en-CA');
const stamp = () => Date.now();

export default function ClassProgressCard({ student, sessions }) {
  const [open, setOpen] = useState(false);
  const [local, setLocal] = useState({});               // topicId → 'done' | 'open' | 'auto' (just changed, not yet in the roster)
  const [busy, setBusy] = useState('');
  const [error, setError] = useState('');
  const [expanded, setExpanded] = useState(null);       // chapterId

  const { topics, year } = useMemo(() => courseTopics(student || {}, sessions || []), [student, sessions]);
  const derived = useMemo(() => (sessions ? deriveTopicStates(sessions, todayKey()) : new Map()), [sessions]);

  const overrides = useMemo(() => {
    const base = { ...(student?.progressOverrides || {}) };
    Object.entries(local).forEach(([id, v]) => { if (v === 'auto') delete base[id]; else base[id] = v; });
    return base;
  }, [student?.progressOverrides, local]);
  const completed = useMemo(() => {
    const set = new Set(student?.completedChapters || []);
    Object.entries(local).forEach(([id, v]) => { if (v === 'done') set.add(id); else set.delete(id); });
    return [...set];
  }, [student?.completedChapters, local]);

  const statuses = useMemo(() => topicStatuses(topics, derived, { completed, overrides }), [topics, derived, completed, overrides]);
  const sum = useMemo(() => summarize(statuses), [statuses]);
  const pct = sum.total ? Math.round((sum.count.done / sum.total) * 100) : 0;
  const now = sum.furthest >= 0 ? statuses[sum.furthest] : null;
  const chapters = useMemo(() => {
    const map = new Map();
    statuses.forEach((t) => {
      if (!map.has(t.chapterId)) map.set(t.chapterId, { id: t.chapterId, title: t.chapterTitle, topics: [] });
      map.get(t.chapterId).topics.push(t);
    });
    return [...map.values()];
  }, [statuses]);
  const openChapter = expanded ?? now?.chapterId ?? chapters[0]?.id;

  const change = async (topic, mode) => {
    if (!student?.id || busy) return;
    setBusy(topic.id); setError('');
    const ref = doc(db, student.source === 'manual' ? 'students' : 'users', student.id);
    const ov = new FieldPath('progressOverrides', topic.id);
    const args = mode === 'done'
      ? ['completedChapters', arrayUnion(topic.id), ov, 'done', new FieldPath('chapterDates', topic.id, 'completedAt'), stamp()]
      : mode === 'open'
        ? ['completedChapters', arrayRemove(topic.id), ov, 'open']
        : ['completedChapters', arrayRemove(topic.id), ov, deleteField()];
    setLocal((cur) => ({ ...cur, [topic.id]: mode }));
    try {
      // A slow server ack must not block the screen: the write stays queued on the device and is sent later.
      await Promise.race([updateDoc(ref, ...args), new Promise((r) => { window.setTimeout(r, 8000); })]);
      touchStudentsSyncMeta(null, true).catch(() => {});
    } catch (err) {
      console.error('Progress change failed:', err);
      setLocal((cur) => { const next = { ...cur }; delete next[topic.id]; return next; });
      setError('Could not save. Check the connection and try again.');
    } finally { setBusy(''); }
  };

  const toggleKey = (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setOpen(true); } };
  const inProgress = sum.count.mistakes + sum.count.check + sum.count.notin;

  return (
    <>
      <article className="cls-card cls-card--link" role="button" tabIndex={0} onClick={() => setOpen(true)} onKeyDown={toggleKey} aria-label="Progress details">
        <h3>Progress<small>Details ›</small></h3>
        {!sessions ? <p className="cls-muted">Loading…</p> : sum.total === 0 ? <p className="cls-muted">No course set for this student.</p> : (
          <div className="cls-prog-body">
            <div className="cls-ring" role="img" aria-label={`${pct}% of ${year || 'the course'} done`}>
              <svg viewBox="0 0 160 160" width="100%" height="100%">
                <circle cx="80" cy="80" r="68" className="cls-ring-track" />
                <circle cx="80" cy="80" r="68" className="cls-ring-fill" strokeDasharray={`${(2 * Math.PI * 68 * pct) / 100} ${2 * Math.PI * 68}`} transform="rotate(-90 80 80)" />
              </svg>
              <div className="cls-ring-center"><strong>{pct}%</strong><span>{year ? `of ${year} done` : 'done'}</span></div>
            </div>
            <div className="cls-prog-meta">
              {now && <p className="cls-big">{now.code || now.title}</p>}
              {now && <p className="cls-muted">{now.chapterTitle}</p>}
              <p className="cls-muted"><strong>{sum.count.done}</strong> of {sum.total} topics done</p>
              {inProgress > 0 && (
                <p className="cls-muted cls-prog-line">
                  {[
                    sum.count.notin && `${sum.count.notin} not in`,
                    sum.count.check && `${sum.count.check} to check`,
                    sum.count.mistakes && `${sum.count.mistakes} mistakes to review`,
                  ].filter(Boolean).join(' · ')}
                </p>
              )}
            </div>
          </div>
        )}
      </article>

      {open && createPortal(
        <div className="cls-modal-back" onMouseDown={(e) => { if (e.target === e.currentTarget) setOpen(false); }}>
          <div className="cls-modal cls-modal--wide" role="dialog" aria-modal="true" aria-label="Progress">
            <div className="cls-modal-head">
              <h3>Progress</h3>
              <button type="button" className="cls-x" aria-label="Close" onClick={() => setOpen(false)}>×</button>
            </div>
            <p className="cls-muted cls-modal-for">
              {sum.count.done} of {sum.total} done · Done means taught, homework in, checked and mistakes gone through. Change any topic by hand.
            </p>
            {error && <p className="cls-flag" role="alert">{error}</p>}
            <div className="cls-prog-list">
              {chapters.map((ch) => {
                const doneN = ch.topics.filter((t) => t.state === 'done').length;
                const isOpen = ch.id === openChapter;
                return (
                  <div key={ch.id} className="cls-prog-ch">
                    <button type="button" className="cls-prog-ch-head" onClick={() => setExpanded(isOpen ? '' : ch.id)} aria-expanded={isOpen}>
                      <span>{isOpen ? '▾' : '▸'} {ch.title}</span>
                      <span className="cls-muted">{doneN}/{ch.topics.length}</span>
                    </button>
                    {isOpen && ch.topics.map((t) => (
                      <div key={t.id} className="cls-prog-row">
                        <span className="cls-prog-name"><strong>{t.code}</strong> {t.title}</span>
                        <span className={`cls-prog-state is-${t.state}`}>{STATE_LABEL[t.state]}{t.override ? ' · set by you' : ''}</span>
                        <span className="cls-prog-btns" role="group" aria-label={`Set ${t.code}`}>
                          <button type="button" className={t.override === 'done' ? 'is-on' : ''} disabled={busy === t.id} onClick={() => change(t, 'done')}>Done</button>
                          <button type="button" className={t.override === 'open' ? 'is-on' : ''} disabled={busy === t.id} onClick={() => change(t, 'open')}>Not done</button>
                          <button type="button" disabled={busy === t.id || !t.override} onClick={() => change(t, 'auto')}>Auto</button>
                        </span>
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
        </div>,
        document.body,
      )}
    </>
  );
}
