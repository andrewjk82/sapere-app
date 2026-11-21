import { useEffect, useMemo, useRef, useState } from 'react';
import { collection, doc, getDoc, onSnapshot, query, where, writeBatch, setDoc, deleteDoc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase/config';
import { CURRICULUM_DATA } from '../constants/curriculumData';
import useLiveDoc from '../hooks/useLiveDoc';
import { localCache } from '../services/localCacheService';
import ClassMonthCalendar from './ClassMonthCalendar';
import LessonWorkspace from './LessonWorkspace';
import ClassHomeworkModal from './ClassHomeworkModal';
import HomeworkRedo from './homework/HomeworkRedo';
import { useAuth } from '../context/AuthContext';
import { mistakesForLesson, MISTAKES_REVIEWED_FIELD } from '../utils/lessonMistakes';
import '../utils/clayStyle';
import './class-page.css';

// Teacher's "Class" page: the lesson happening now (or next today) on one screen.
// - One student: who they are, course progress, last lesson, today's plan, homework, Daily Practice.
// - A group (several session docs sharing groupId + time): every student at a glance, the papers worked through in
//   class (saved on each member's session as `papersCovered`) and what the group did last time.
// - Notes: a notepad on every lesson, autosaved to class_notes/{lesson key} — admin-only by rules, because students
//   can read their own session docs (private notes must not live there).
// - Month calendar (one student): pick a day to see/change its lessons, or add one on an empty day, in a modal.
// Reads: a live listener on the next 8 days of sessions, one getDocs for the lesson's history, the live
// admin_daily_summary for today and the earlier days of this week (cached for the tab).

const UPCOMING_CACHE = 'class-upcoming:v1';
const historyCacheKey = (k) => `class-history:v1:${k}`;
const dateKey = (d) => d.toLocaleDateString('en-CA');
const addDays = (d, n) => { const x = new Date(d); x.setDate(x.getDate() + n); return x; };

const parseClock = (value = '') => {
  const m = String(value).trim().match(/^(\d{1,2}):(\d{2})\s*(AM|PM)?$/i);
  if (!m) return null;
  let h = Number(m[1]);
  const ap = (m[3] || '').toUpperCase();
  if (ap === 'PM' && h < 12) h += 12;
  if (ap === 'AM' && h === 12) h = 0;
  return h * 60 + Number(m[2]);
};
const byTime = (a, b) => (a.date || '').localeCompare(b.date || '') || (parseClock(a.startTime) ?? 0) - (parseClock(b.startTime) ?? 0);

const sessionStudentId = (s) => s?.studentId || s?.groupStudents?.[0]?.studentId || '';
const firstName = (n = '') => String(n).trim().split(/\s+/)[0] || 'Student';

// Same rule as the Schedule grid: only sessions created as one class (same groupId) are a group.
const unitKey = (s) => (s.groupId ? `${s.groupId}|${s.date}|${s.startTime}|${s.endTime}` : s.id);
const toUnits = (sessions) => {
  const map = new Map();
  sessions.forEach((s) => {
    const k = unitKey(s);
    if (!map.has(k)) map.set(k, { key: k, date: s.date, startTime: s.startTime, endTime: s.endTime, subject: s.subject, groupId: s.groupId || '', sessions: [] });
    map.get(k).sessions.push(s);
  });
  return [...map.values()].map((u) => ({ ...u, isGroup: u.sessions.length > 1 })).sort(byTime);
};

const noteDocId = (key) => String(key || '').replace(/[^A-Za-z0-9_-]/g, '_').slice(0, 300);
const useLessonNote = (key) => {
  const live = useLiveDoc(['class_notes', noteDocId(key)], { enabled: Boolean(key) });
  // `loaded` waits for the server (or a saved copy that really has the note): a first, empty answer from the
  // device's own cache would otherwise open the pad blank and then hide a note that exists.
  return { text: live.data?.text || '', loaded: live.status === 'live' || live.status === 'offline' || Boolean(live.data) };
};
const LastNote = ({ lessonKey }) => {
  const note = useLessonNote(lessonKey);
  return note.text ? <p className="cls-note cls-note--mine">{note.text}</p> : null;
};

const shortDate = (key) => (key ? new Date(`${key}T12:00:00`).toLocaleDateString('en-AU', { weekday: 'short', day: 'numeric', month: 'short' }) : '');
const relative = (key) => {
  const n = Math.round((new Date(`${key}T12:00:00`) - new Date(`${dateKey(new Date())}T12:00:00`)) / 86400000);
  if (n === 0) return 'today';
  if (n === 1) return 'tomorrow';
  if (n === -1) return 'yesterday';
  return n < 0 ? `${-n} days ago` : `in ${n} days`;
};

const topicText = (t) => (t?.code ? `${t.code}${t.title ? ` ${t.title}` : ''}` : (t?.label || t?.title || t?.id || ''));
const homeworkOpen = (s) => Boolean(String(s.homework || '').trim())
  && !['checked', 'excused', 'deleted'].includes(s.homeworkStatus) && s.isHomeworkCompleted !== true;

const courseTopics = (student = {}) => {
  const years = Array.isArray(student.assignedYear) ? student.assignedYear : [student.assignedYear || student.year || student.level];
  const courses = Array.isArray(student.assignedCourse) ? student.assignedCourse : [student.assignedCourse || student.course];
  const year = years.find((y) => typeof y === 'string' && CURRICULUM_DATA[y]);
  if (!year) return { year: '', topics: [] };
  const data = CURRICULUM_DATA[year];
  let chapters;
  if (Array.isArray(data)) chapters = data;
  else {
    const course = courses.find((c) => Array.isArray(data[c])) || Object.keys(data).find((k) => Array.isArray(data[k]));
    chapters = course ? data[course] : [];
  }
  const topics = chapters.flatMap((chapter) => (Array.isArray(chapter.topics) && chapter.topics.length
    ? chapter.topics.map((topic) => ({ id: topic.id, code: topic.code || '', title: topic.title || '', chapterTitle: chapter.title }))
    : [{ id: chapter.id, code: '', title: chapter.title, chapterTitle: chapter.title }]));
  return { year, topics };
};

const pastSummaryCache = new Map();
const readPastSummary = async (key) => {
  if (pastSummaryCache.has(key)) return pastSummaryCache.get(key);
  const snap = await getDoc(doc(db, 'admin_daily_summary', key)).catch(() => null);
  const value = snap?.exists() ? snap.data().students || {} : {};
  pastSummaryCache.set(key, value);
  return value;
};

const dailyState = (item, calcEnabled) => {
  if (!item) return 'none';
  const dailyDone = item.dailyDone === true || item.dailyStatus === 'completed';
  const calcDone = item.calcDone === true || item.calcStatus === 'completed';
  if (dailyDone && (!calcEnabled || calcDone)) return 'done';
  if (dailyDone || calcDone || item.dailyEnded || item.calcEnded) return 'part';
  return 'none';
};

// Writes the same fields to every session doc of a lesson (one per student in a group).
const writeToUnit = (unit, fields) => {
  const batch = writeBatch(db);
  unit.sessions.forEach((s) => batch.update(doc(db, 'sessions', s.id), { ...fields, classUpdatedAt: serverTimestamp() }));
  return batch.commit();
};

function WeekDots({ week, small = false }) {
  return (
    <div className={`cls-week${small ? ' cls-week--sm' : ''}`}>
      {week.map((d) => (
        <span key={d.key} className={`cls-dot is-${d.state}`} title={`${shortDate(d.key)}: ${d.state}`}>
          {small ? '' : new Date(`${d.key}T12:00:00`).toLocaleDateString('en-AU', { weekday: 'narrow' })}
        </span>
      ))}
    </div>
  );
}

function NotePad({ unit, savedText, onClose }) {
  // `draft` is what has been typed here; until something is typed the pad shows the saved note, so a note that
  // arrives from the server a moment after the pad opened still appears.
  const [draft, setDraft] = useState(null);
  const text = draft ?? savedText;
  const [state, setState] = useState('saved');
  const timer = useRef(0);
  const latest = useRef(null);
  const ref = doc(db, 'class_notes', noteDocId(unit.key));

  const save = async (value) => {
    setState('saving');
    try {
      // The write is kept on the device and sent when the connection allows, so a slow server ack (the iPad's
      // usual stall) never leaves the pad stuck on "Saving…".
      const result = await Promise.race([
        setDoc(ref, {
          text: value, date: unit.date, startTime: unit.startTime || '', groupId: unit.groupId || '',
          studentIds: unit.sessions.map(sessionStudentId), updatedAt: serverTimestamp(),
        }, { merge: true }),
        new Promise((resolve) => { window.setTimeout(() => resolve('queued'), 4000); }),
      ]);
      setState(result === 'queued' ? 'queued' : 'saved');
    } catch { setState('error'); }
  };
  const onChange = (e) => {
    const v = e.target.value;
    setDraft(v); latest.current = v; setState('typing');
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => save(v), 1500);
  };
  const close = () => {
    window.clearTimeout(timer.current);
    if (latest.current !== null && state === 'typing') save(latest.current);
    onClose();
  };
  useEffect(() => () => window.clearTimeout(timer.current), []);
  const remove = async () => {
    if (!window.confirm('Delete this note? This cannot be undone.')) return;
    window.clearTimeout(timer.current);
    setState('saving');
    try {
      await deleteDoc(ref);
      setDraft(null); latest.current = null;
      onClose();
    } catch { setState('error'); }
  };

  return (
    <div className="cls-pad" role="dialog" aria-label="Lesson notes">
      <div className="cls-pad-head">
        <strong>Notes · {shortDate(unit.date)} {unit.startTime}</strong>
        <span className={`cls-pad-state is-${state}`}>
          {state === 'saving' ? 'Saving…' : state === 'queued' ? 'Saved on this device' : state === 'error' ? 'Not saved — check connection' : state === 'typing' ? '' : 'Saved'}
        </span>
        {(text || savedText) && <button type="button" className="cls-link cls-link--danger" onClick={remove}>Delete note</button>}
        <button type="button" className="cls-link" onClick={close}>Done</button>
      </div>
      <textarea
        autoFocus
        value={text}
        onChange={onChange}
        placeholder="Anything to remember about this lesson…"
      />
    </div>
  );
}

function PapersEditor({ unit }) {
  const saved = unit.sessions[0]?.papersCovered;
  const savedJson = JSON.stringify(Array.isArray(saved) ? saved : []);
  const [rows, setRows] = useState(() => (Array.isArray(saved) && saved.length ? saved : [{ title: '', detail: '' }]));
  const [state, setState] = useState('idle');
  const clean = rows.map((r) => ({ title: String(r.title || '').trim(), detail: String(r.detail || '').trim() })).filter((r) => r.title);
  const dirty = JSON.stringify(clean) !== savedJson;

  const update = (i, field, value) => setRows((list) => list.map((r, j) => (j === i ? { ...r, [field]: value } : r)));
  const save = async () => {
    setState('saving');
    try { await writeToUnit(unit, { papersCovered: clean }); setState('saved'); } catch { setState('error'); }
  };

  return (
    <div className="cls-papers">
      {rows.map((r, i) => (
        <div key={i} className="cls-paper-row">
          <input value={r.title} onChange={(e) => update(i, 'title', e.target.value)} placeholder="Paper (e.g. 2023 Trial, Ch 5 test)" aria-label="Paper" />
          <input value={r.detail} onChange={(e) => update(i, 'detail', e.target.value)} placeholder="Questions / notes" aria-label="Questions" />
          <button type="button" className="cls-x" aria-label="Remove paper" onClick={() => setRows((list) => (list.length > 1 ? list.filter((_, j) => j !== i) : [{ title: '', detail: '' }]))}>×</button>
        </div>
      ))}
      <div className="cls-paper-actions">
        <button type="button" className="cls-link" onClick={() => setRows((list) => [...list, { title: '', detail: '' }])}>+ Add paper</button>
        <span className="cls-muted">{state === 'saving' ? 'Saving…' : state === 'error' ? 'Not saved — try again' : !dirty && clean.length ? 'Saved' : ''}</span>
        <button type="button" className="cls-save" disabled={!dirty || state === 'saving'} onClick={save}>Save</button>
      </div>
    </div>
  );
}

const MistakeButtons = ({ mistakes, onCheck, showWho = false }) => (
  <>
    {mistakes.map((m) => {
      const count = Object.keys(m.item.marks || {}).length;
      const who = showWho ? ` · ${firstName(m.studentName)}` : '';
      const when = mistakes.filter((o) => o.studentId === m.studentId).length > 1 ? ` · ${shortDate(m.item.date)}` : '';
      return (
        <button key={m.item.sessionId} type="button" className="cls-act cls-act--mistake" onClick={() => onCheck(m)}>
          Check the mistake ({count}){who}{when}
        </button>
      );
    })}
  </>
);

const PaperList = ({ papers }) => (
  <ul className="cls-topics">
    {papers.map((p, i) => <li key={i}>{p.title}{p.detail ? <span className="cls-muted"> · {p.detail}</span> : null}</li>)}
  </ul>
);

export default function ClassPage({ students = [], onSelectStudent }) {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const tick = () => setNow(new Date());
    const t = window.setInterval(tick, 30000);
    // The iPad app is suspended in the background: catch up as soon as it is back on screen.
    const onVis = () => { if (document.visibilityState !== 'hidden') tick(); };
    document.addEventListener('visibilitychange', onVis);
    return () => { window.clearInterval(t); document.removeEventListener('visibilitychange', onVis); };
  }, []);
  const today = dateKey(now);

  // Stale-while-revalidate: the last lesson list is on the device (localStorage), so the page paints at once and
  // the live listener replaces it when the server answers. If the server never answers the saved list stays up.
  const [upcoming, setUpcoming] = useState(() => {
    const c = localCache.get(UPCOMING_CACHE);
    return Array.isArray(c?.list) ? c.list.filter((s) => (s.date || '') >= dateKey(new Date())) : null;
  });
  const [liveUpcoming, setLiveUpcoming] = useState(false);
  useEffect(() => {
    const end = dateKey(addDays(new Date(`${today}T12:00:00`), 7));
    const q = query(collection(db, 'sessions'), where('date', '>=', today), where('date', '<=', end));
    let unsub = () => {};
    const attach = () => {
      unsub();
      unsub = onSnapshot(q, { includeMetadataChanges: true }, (snap) => {
        const list = snap.docs.map((d) => ({ id: d.id, ...d.data() })).filter((s) => sessionStudentId(s) && s.attendance !== 'cancelled');
        setUpcoming(list);
        if (!snap.metadata.fromCache) { setLiveUpcoming(true); localCache.set(UPCOMING_CACHE, { savedAt: Date.now(), list }); }
      }, () => setUpcoming((prev) => prev || []));
    };
    const onVis = () => { if (document.visibilityState === 'hidden') { unsub(); unsub = () => {}; } else { setLiveUpcoming(false); attach(); } };
    attach();
    document.addEventListener('visibilitychange', onVis);
    return () => { unsub(); document.removeEventListener('visibilitychange', onVis); };
  }, [today]);

  const dayUnits = useMemo(() => {
    const units = toUnits(upcoming || []);
    const todays = units.filter((u) => u.date === today);
    if (todays.length) return todays;
    return units.length ? units.filter((u) => u.date === units[0].date) : [];
  }, [upcoming, today]);

  const autoPick = useMemo(() => {
    if (!dayUnits.length) return null;
    if (dayUnits[0].date !== today) return dayUnits[0];
    const mins = now.getHours() * 60 + now.getMinutes();
    // The lesson running now (end time is exclusive, so at 11:00 the 9–11 lesson is over and the 11:00 one is on);
    // between lessons, the next one; after the last, the last.
    const running = dayUnits.filter((u) => {
      const st = parseClock(u.startTime); const en = parseClock(u.endTime) ?? (st != null ? st + 90 : null);
      return st != null && mins >= st && mins < en;
    }).pop();
    return running || dayUnits.find((u) => (parseClock(u.startTime) ?? 0) > mins) || dayUnits[dayUnits.length - 1];
  }, [dayUnits, now, today]);

  // A manual pick holds only while the automatic choice stays the same; when the clock moves on to the next lesson
  // the page follows it again.
  const [picked, setPicked] = useState({ key: '', auto: '' });
  const unit = (picked.auto === autoPick?.key && dayUnits.find((u) => u.key === picked.key)) || autoPick;
  const [padOpen, setPadOpen] = useState(false);
  const [lessonOpen, setLessonOpen] = useState(false);
  const [hwOpen, setHwOpen] = useState(false);
  const [mistakeReview, setMistakeReview] = useState(null);   // { item, studentId, studentName }
  const { user } = useAuth();
  const note = useLessonNote(unit?.key || '');

  // History: the group's lessons (groupId) or the student's lessons.
  const historyKey = unit ? (unit.isGroup ? `g:${unit.groupId}` : `s:${sessionStudentId(unit.sessions[0])}`) : '';
  const [history, setHistory] = useState({ key: '', list: null, fresh: false });
  const [historyTry, setHistoryTry] = useState(0);
  useEffect(() => {
    if (!historyKey) return undefined;
    let cancelled = false;
    const [kind, id] = [historyKey.slice(0, 1), historyKey.slice(2)];
    // A live listener, not getDocs: on the iPad a one-off getDocs for this query can wait forever while listeners
    // keep working (the lesson list above is one). The listener also answers from the on-device copy first.
    const q = query(collection(db, 'sessions'), where(kind === 'g' ? 'groupId' : 'studentId', '==', id));
    const stall = window.setTimeout(() => {
      if (!cancelled) setHistory((h) => (h.key === historyKey && h.list ? h : { key: historyKey, list: null, fresh: false, failed: true }));
    }, 15000);
    const unsub = onSnapshot(q, { includeMetadataChanges: true }, (snap) => {
      if (cancelled) return;
      // Nothing saved on this device yet and the server has not answered: wait, do not claim "no lessons".
      if (snap.metadata.fromCache && snap.empty) return;
      window.clearTimeout(stall);
      const list = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
      const fresh = !snap.metadata.fromCache;
      if (fresh) localCache.set(historyCacheKey(historyKey), { savedAt: Date.now(), list });
      setHistory({ key: historyKey, list, fresh });
    }, () => { if (!cancelled) setHistory({ key: historyKey, list: null, fresh: false, failed: true }); });
    return () => { cancelled = true; window.clearTimeout(stall); unsub(); };
  }, [historyKey, historyTry]);
  const savedHistory = useMemo(() => {
    const c = historyKey ? localCache.get(historyCacheKey(historyKey)) : null;
    return Array.isArray(c?.list) ? c.list : null;
  }, [historyKey]);
  const here = history.key === historyKey ? history : null;
  const sessions = here?.list || savedHistory || null;
  const historyFailed = Boolean(here?.failed) && !sessions;
  const historyFresh = Boolean(here?.fresh);

  // Daily Practice for the week.
  const todaySummary = useLiveDoc(['admin_daily_summary', today]);
  const weekKeys = useMemo(() => {
    const d = new Date(`${today}T12:00:00`);
    const monday = addDays(d, -((d.getDay() + 6) % 7));
    return Array.from({ length: 7 }, (_, i) => dateKey(addDays(monday, i)));
  }, [today]);
  const [pastWeek, setPastWeek] = useState({});
  useEffect(() => {
    let cancelled = false;
    const keys = weekKeys.filter((k) => k < today);
    Promise.all(keys.map(readPastSummary)).then((vals) => {
      if (!cancelled) setPastWeek(Object.fromEntries(keys.map((k, i) => [k, vals[i]])));
    });
    return () => { cancelled = true; };
  }, [weekKeys, today]);
  const weekFor = (studentId, calcEnabled) => weekKeys.map((k) => {
    const summary = k === today ? (todaySummary.data?.students || {}) : (pastWeek[k] || {});
    return { key: k, future: k > today, state: k > today ? 'future' : dailyState(summary[studentId], calcEnabled) };
  });

  if (upcoming === null) return <div className="cls"><div className="cls-empty">Loading lessons…</div></div>;
  if (!unit) {
    return (
      <div className="cls">
        <header className="cls-top"><h2 className="cls-title">Class</h2></header>
        <div className="cls-empty">No lessons in the next 7 days.</div>
      </div>
    );
  }

  const mins = now.getHours() * 60 + now.getMinutes();
  const st = parseClock(unit.startTime);
  const isNow = unit.date === today && st != null && mins >= st && mins <= (parseClock(unit.endTime) ?? st + 90);
  const findStudent = (id) => students.find((s) => s.id === id || s.uid === id) || null;
  const unitLabel = (u) => (u.isGroup ? `Group (${u.sessions.length})` : firstName(u.sessions[0].studentName));

  const patchSessions = (fn) => {
    if (!sessions) return;
    const list = fn(sessions);
    localCache.set(historyCacheKey(historyKey), { savedAt: Date.now(), list });
    setHistory({ key: historyKey, list, fresh: historyFresh });
  };
  const lessonNav = dayUnits.length > 1 && (
          <nav className="cls-day-list" aria-label="Lessons">
            {dayUnits.map((u) => (
              <button key={u.key} type="button" className={`cls-day-item${u.key === unit.key ? ' is-on' : ''}`} onClick={() => { setPicked({ key: u.key, auto: autoPick?.key || '' }); setPadOpen(false); }}>
                <span>{u.startTime}</span>{unitLabel(u)}
              </button>
            ))}
          </nav>
        );
  const openLesson = () => setLessonOpen(true);
  // Earlier homework's wrong (✗ / ½) questions, to go through together in this lesson ("Check the mistake").
  const mistakes = (() => {
    if (!sessions || !unit) return [];
    const ids = [...new Set(unit.sessions.map(sessionStudentId))].filter(Boolean);
    return ids.flatMap((id) => mistakesForLesson(sessions, { studentId: id, lessonDate: unit.date })
      .map((item) => ({ item, studentId: id, studentName: unit.sessions.find((x) => sessionStudentId(x) === id)?.studentName || '' })));
  })();
  const markMistakesDone = async ({ item }) => {
    try {
      const at = new Date().toISOString();
      await updateDoc(doc(db, 'sessions', item.sessionId), { [MISTAKES_REVIEWED_FIELD]: at });
      patchSessions((list) => list.map((x) => (x.id === item.sessionId ? { ...x, [MISTAKES_REVIEWED_FIELD]: at } : x)));
      setMistakeReview(null);
    } catch (err) {
      console.error(err);
      window.alert('Could not save. Try again.');
    }
  };
  const shared = { lessonNav, openLesson, mistakes, onCheckMistake: setMistakeReview, onAssignHomework: () => setHwOpen(true), unit, sessions, patchSessions, isNow, today, weekFor, findStudent, onSelectStudent, offline: todaySummary.status === 'offline' };

  return (
    <div className="cls cls--clay">
      <header className="cls-top">
        <h2 className="cls-title">Class</h2>
        {unit.date !== today && <span className="cls-day">{shortDate(unit.date)}</span>}
        {historyFailed && (
          <span className="cls-sync" role="alert">
            Couldn’t load lessons.{' '}
            <button type="button" className="cls-link" onClick={() => { setHistory({ key: '', list: null, fresh: false }); setHistoryTry((n) => n + 1); }}>Retry</button>
          </span>
        )}
        {!historyFailed && (!liveUpcoming || (historyKey && !historyFresh)) && (
          <span className="cls-sync" role="status">{todaySummary.status === 'offline' ? 'Offline – saved data' : 'Updating…'}</span>
        )}
        <button type="button" className={`cls-pad-btn${padOpen ? ' is-on' : ''}${note.text ? ' has-notes' : ''}`} onClick={() => setPadOpen((v) => !v)}>
          Notes
        </button>
      </header>

      {padOpen && note.loaded && <NotePad key={unit.key} unit={unit} savedText={note.text} onClose={() => setPadOpen(false)} />}

      {unit.isGroup ? <GroupView key={unit.key} {...shared} /> : <SoloView key={unit.key} {...shared} />}

      {hwOpen && (
        <ClassHomeworkModal
          unit={unit}
          student={findStudent(sessionStudentId(unit.sessions[0]))}
          sessions={sessions || []}
          onSaved={patchSessions}
          onClose={() => setHwOpen(false)}
        />
      )}
      {mistakeReview && (
        <HomeworkRedo
          item={mistakeReview.item}
          user={user}
          teacher={{
            studentId: mistakeReview.studentId,
            studentName: mistakeReview.studentName,
            studentProfile: findStudent(mistakeReview.studentId),
            onDone: () => markMistakesDone(mistakeReview),
          }}
          onClose={() => setMistakeReview(null)}
        />
      )}
      {lessonOpen && (
        <LessonWorkspace
          session={unit.isGroup ? { ...unit.sessions[0], isGroupedClass: true, groupStudents: unit.sessions } : unit.sessions[0]}
          sessions={sessions || upcoming || []}
          students={students}
          onClose={() => setLessonOpen(false)}
        />
      )}
    </div>
  );
}

function LessonTime({ unit, isNow }) {
  return (
    <div className="cls-student-time">
      {isNow && <span className="cls-live">In class</span>}
      <strong>{unit.startTime}{unit.endTime ? `–${unit.endTime}` : ''}</strong>
      {unit.subject && <span>{unit.subject}</span>}
    </div>
  );
}

function SoloView({ lessonNav, openLesson, mistakes, onCheckMistake, onAssignHomework, unit, sessions, patchSessions, isNow, today, weekFor, findStudent, onSelectStudent, offline }) {
  const lesson = unit.sessions[0];
  const studentId = sessionStudentId(lesson);
  const student = findStudent(studentId);

  const past = useMemo(() => (sessions || []).filter((s) => s.id !== lesson.id && (s.date || '') < (lesson.date || '') && s.attendance !== 'cancelled').sort(byTime), [sessions, lesson]);
  const lastLesson = past[past.length - 1] || null;
  const nextLesson = useMemo(() => (sessions || []).filter((s) => s.id !== lesson.id && (s.date || '') > (lesson.date || '')).sort(byTime)[0] || null, [sessions, lesson]);
  const openHomework = useMemo(() => (sessions || []).filter((s) => s.id !== lesson.id && homeworkOpen(s)).sort((a, b) => (b.date || '').localeCompare(a.date || '')), [sessions, lesson]);

  const progress = (() => {
    const { year, topics } = courseTopics(student || {});
    if (!topics.length || !sessions) return { year, topics, index: -1 };
    const at = new Map(topics.map((t, i) => [t.id, i]));
    let index = -1;
    sessions.forEach((s) => (s.learnedTopics || []).forEach((t) => { const i = at.get(t?.id); if (i !== undefined && i > index) index = i; }));
    return { year, topics, index };
  })();
  const current = progress.index >= 0 ? progress.topics[progress.index] : null;
  const suggested = progress.index >= 0 ? progress.topics[progress.index + 1] || null : null;
  const pct = current ? Math.round(((progress.index + 1) / progress.topics.length) * 100) : 0;

  const week = weekFor(studentId, student?.calculationEnabled !== false);
  const todayDaily = week.find((d) => d.key === today)?.state || 'none';
  const course = Array.isArray(student?.assignedCourse) ? student.assignedCourse[0] : student?.assignedCourse;
  const school = student?.school || student?.schoolName || '';
  // The student's actual school year (profile), not the curriculum year they are being taught.
  const rawGrade = student?.year || student?.level || progress.year || '';
  const grade = rawGrade && !/year/i.test(String(rawGrade)) ? `Year ${rawGrade}` : rawGrade;
  const studentName = student?.name || lesson.studentName || 'Student';

  return (
    <>
      <section className="cls-student">
        <div className="cls-student-main">
          <h1>{studentName}</h1>
          <p>{[grade, school || 'School not set', course].filter(Boolean).join(' · ')}</p>
        </div>
        <LessonTime unit={unit} isNow={isNow} />
        {onSelectStudent && student && <button type="button" className="cls-link" onClick={() => onSelectStudent(student.id)}>Open profile</button>}
      </section>

      {lessonNav}

      <ClassMonthCalendar
        studentId={studentId}
        student={student}
        studentName={studentName}
        lessons={sessions || []}
        loading={!sessions}
        currentId={lesson.id}
        defaultDate={lesson.date}
        defaultSubject={lesson.subject}
        onChange={patchSessions}
      >
        <div className="cls-flow">
          <article className="cls-card">
            <h3>Last lesson{lastLesson ? <small>{shortDate(lastLesson.date)} · {relative(lastLesson.date)}</small> : null}</h3>
            {!sessions ? <p className="cls-muted">Loading…</p> : !lastLesson ? <p className="cls-muted">No earlier lesson recorded.</p> : (
              <>
                {(lastLesson.learnedTopics || []).length > 0
                  ? <ul className="cls-topics">{lastLesson.learnedTopics.map((t) => <li key={t.id || topicText(t)}>{topicText(t)}</li>)}</ul>
                  : <p className="cls-muted">No topics recorded.</p>}
                {lastLesson.notes && <p className="cls-note">{lastLesson.notes}</p>}
                <LastNote lessonKey={unitKey(lastLesson)} />
                {lastLesson.attendance && lastLesson.attendance !== 'present' && <p className="cls-flag">Attendance: {lastLesson.attendance}</p>}
              </>
            )}
          </article>

          <article
            className="cls-card cls-card--today cls-card--link"
            role="button"
            tabIndex={0}
            onClick={openLesson}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLesson(); } }}
            aria-label="Open lesson"
          >
            <h3>{unit.date === today ? 'Today' : shortDate(unit.date)}<span className="cls-open-pill">Open lesson</span></h3>
            {(lesson.learnedTopics || []).length > 0 ? (
              <ul className="cls-topics">{lesson.learnedTopics.map((t) => <li key={t.id || topicText(t)}>{topicText(t)}</li>)}</ul>
            ) : suggested ? (
              <p className="cls-plan"><span>Next in course</span>{topicText(suggested)}<em>{suggested.chapterTitle}</em></p>
            ) : <p className="cls-muted">No topic planned yet.</p>}
            {lesson.notes && <p className="cls-note">{lesson.notes}</p>}
            {openHomework.length > 0 && <p className="cls-check">Check homework from {shortDate(openHomework[0].date)} first.</p>}
          </article>

          <article className="cls-card cls-card--quiet">
            <h3>Next lesson</h3>
            {!sessions ? <p className="cls-muted">Loading…</p> : nextLesson
              ? <p>{shortDate(nextLesson.date)} · {nextLesson.startTime} <span className="cls-muted">({relative(nextLesson.date)})</span></p>
              : <p className="cls-muted">Not scheduled.</p>}
          </article>
        </div>
      </ClassMonthCalendar>

        <aside className="cls-side cls-side--row">
          <article className="cls-card">
            <h3>Progress</h3>
            {current ? (
              <>
                <p className="cls-big">{current.code || current.title}</p>
                <p className="cls-muted">{current.chapterTitle}</p>
                <div className="cls-bar" role="img" aria-label={`${pct}% of the course`}><i style={{ width: `${pct}%` }} /></div>
                <p className="cls-muted">{progress.index + 1} of {progress.topics.length} topics · {pct}%</p>
              </>
            ) : <p className="cls-muted">{sessions ? 'No topics recorded yet.' : 'Loading…'}</p>}
          </article>

          <article className="cls-card">
            <h3>Homework{openHomework.length ? <small>{openHomework.length} open</small> : null}</h3>
            {!sessions ? <p className="cls-muted">Loading…</p> : openHomework.length === 0 ? <p className="cls-muted">Nothing outstanding.</p> : (
              <ul className="cls-hw">
                {openHomework.slice(0, 4).map((s) => (
                  <li key={s.id}>
                    <span className={`cls-hw-state${s.homeworkStatus === 'submitted' ? ' is-in' : ''}`}>{s.homeworkStatus === 'submitted' ? 'Submitted' : 'Not in'}</span>
                    <span className="cls-hw-text">{String(s.homework).split('\n')[0]}</span>
                    <span className="cls-muted">{shortDate(s.date)}</span>
                  </li>
                ))}
              </ul>
            )}
            <div className="cls-hw-actions">
              <button type="button" className="cls-act" onClick={onAssignHomework}>Assign homework</button>
              <MistakeButtons mistakes={mistakes} onCheck={onCheckMistake} />
            </div>
          </article>

          <article className="cls-card">
            <h3>Daily Practice<small>{week.filter((d) => d.state === 'done').length}/{week.filter((d) => !d.future).length} this week</small></h3>
            <WeekDots week={week} />
            <p className="cls-muted">Today: {todayDaily === 'done' ? 'done' : todayDaily === 'part' ? 'started' : 'not yet'}{offline ? ' · offline' : ''}</p>
          </article>
        </aside>
    </>
  );
}

function GroupView({ lessonNav, openLesson, mistakes, onCheckMistake, onAssignHomework, unit, sessions, isNow, today, weekFor, findStudent, onSelectStudent, offline }) {
  const members = unit.sessions.map((s) => {
    const id = sessionStudentId(s);
    const student = findStudent(id);
    return { id, session: s, student, name: student?.name || s.studentName || 'Student' };
  }).sort((a, b) => a.name.localeCompare(b.name));

  // Earlier lessons of this group, one entry per lesson.
  const lastUnit = useMemo(() => {
    if (!sessions) return null;
    const units = toUnits(sessions.filter((s) => (s.date || '') < unit.date && s.attendance !== 'cancelled'));
    return units[units.length - 1] || null;
  }, [sessions, unit.date]);
  const lastPapers = lastUnit?.sessions.find((s) => Array.isArray(s.papersCovered) && s.papersCovered.length)?.papersCovered || [];
  const lastTopics = lastUnit?.sessions.find((s) => (s.learnedTopics || []).length)?.learnedTopics || [];
  const years = [...new Set(members.map((m) => m.student?.year || m.student?.level).filter(Boolean))];

  return (
    <>
      <section className="cls-student">
        <div className="cls-student-main">
          <h1>Group · {members.length} students</h1>
          <p>{[years.join(', '), unit.subject].filter(Boolean).join(' · ')}</p>
        </div>
        <LessonTime unit={unit} isNow={isNow} />
      </section>

      {lessonNav}

      <div className="cls-grid">
        <div className="cls-flow">
          <article className="cls-card">
            <h3>Last group lesson{lastUnit ? <small>{shortDate(lastUnit.date)} · {relative(lastUnit.date)}</small> : null}</h3>
            {!sessions ? <p className="cls-muted">Loading…</p> : !lastUnit ? <p className="cls-muted">No earlier lesson for this group.</p> : (
              <>
                {lastPapers.length > 0 ? <PaperList papers={lastPapers} /> : lastTopics.length > 0
                  ? <ul className="cls-topics">{lastTopics.map((t) => <li key={t.id || topicText(t)}>{topicText(t)}</li>)}</ul>
                  : <p className="cls-muted">No papers recorded.</p>}
                <LastNote lessonKey={lastUnit.key} />
              </>
            )}
          </article>

          <article className="cls-card cls-card--today">
            <h3>Papers covered {unit.date === today ? 'today' : `· ${shortDate(unit.date)}`}<button type="button" className="cls-open-pill" onClick={openLesson}>Open lesson</button></h3>
            <PapersEditor unit={unit} />
          </article>
        </div>

        <aside className="cls-side">
          <article className="cls-card">
            <h3>Students<small>Daily this week</small></h3>
            <ul className="cls-roster">
              {members.map((m) => {
                const week = weekFor(m.id, m.student?.calculationEnabled !== false);
                const hw = (sessions || []).filter((s) => sessionStudentId(s) === m.id && s.id !== m.session.id && homeworkOpen(s)).length;
                return (
                  <li key={m.id}>
                    <button type="button" className="cls-roster-name" onClick={() => onSelectStudent && m.student && onSelectStudent(m.student.id)}>
                      {m.name}
                      <span className="cls-muted">{[m.student?.year || m.student?.level, m.student?.school].filter(Boolean).join(' · ')}</span>
                    </button>
                    <WeekDots week={week} small />
                    {hw > 0 && <span className="cls-hw-state">{hw} HW</span>}
                  </li>
                );
              })}
            </ul>
            <div className="cls-hw-actions">
              <button type="button" className="cls-act" onClick={onAssignHomework}>Assign homework</button>
              <MistakeButtons mistakes={mistakes} onCheck={onCheckMistake} showWho />
            </div>
            {offline && <p className="cls-muted">Offline — showing saved data.</p>}
          </article>
        </aside>
      </div>
    </>
  );
}
