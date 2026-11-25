import { useEffect, useState } from 'react';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { db } from '../firebase/config';
import { TIME_OPTIONS } from '../constants/timeOptions';
import { normalizeSubjectLabel } from '../utils/subjectLabels';
import { MAKEUP_COL, DEFAULT_HOURS, addMakeup, addMakeupLesson, lessonHours, removeMakeup, updateMakeup } from '../services/makeupService';
import './makeup.css';

// The Make-up page (opened from the Class page): hours still owed per student and the lessons booked for them.
// An entry is deleted ("Mark done") once the make-up has happened; its booked lessons stay in the schedule.
const HOUR_CHOICES = [0.5, 1, 1.5, 2, 2.5, 3, 4, 5, 6];
const LENGTHS = [1, 1.5, 2];
const today = () => new Date().toLocaleDateString('en-CA');
const shortDate = (key) => (key ? new Date(`${key}T12:00:00`).toLocaleDateString('en-AU', { weekday: 'short', day: 'numeric', month: 'short' }) : '');
const nameOf = (s) => s.name || s.displayName || `${s.firstName || ''} ${s.lastName || ''}`.trim();
const endAfter = (start, hours) => TIME_OPTIONS[TIME_OPTIONS.indexOf(start) + hours * 2];

function Modal({ title, sub, submitLabel, disabled, onSubmit, onClose, children }) {
  return (
    <div className="mk-back" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <form className="mk-modal" role="dialog" aria-modal="true" aria-label={title} onSubmit={(e) => { e.preventDefault(); if (!disabled) onSubmit(); }}>
        <h3>{title}</h3>
        {sub && <p>{sub}</p>}
        {children}
        <div className="mk-foot">
          <button type="button" className="mk-btn mk-btn--quiet" onClick={onClose}>Cancel</button>
          <button type="submit" className="mk-btn mk-btn--primary" disabled={disabled}>{submitLabel}</button>
        </div>
      </form>
    </div>
  );
}

function AddStudentModal({ students, onClose, onSave }) {
  const [form, setForm] = useState({ studentName: '', missedDate: today(), hours: String(DEFAULT_HOURS), note: '' });
  const set = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  const names = [...new Set(students.map(nameOf).filter(Boolean))].sort((a, b) => a.localeCompare(b));
  const submit = () => {
    const studentName = form.studentName.trim();
    const match = students.find((s) => nameOf(s).toLowerCase() === studentName.toLowerCase());
    onSave({ studentName, studentId: match?.id || '', missedDate: form.missedDate, hours: Number(form.hours), note: form.note.trim() });
  };
  return (
    <Modal title="Add student" submitLabel="Add to list" disabled={!form.studentName.trim()} onSubmit={submit} onClose={onClose}>
      <label>Student name<input list="mk-names" value={form.studentName} onChange={set('studentName')} autoFocus /></label>
      <datalist id="mk-names">{names.map((n) => <option key={n} value={n} />)}</datalist>
      <div className="mk-two">
        <label>Missed lesson<input type="date" value={form.missedDate} onChange={set('missedDate')} /></label>
        <label>Hours to make up<select value={form.hours} onChange={set('hours')}>{HOUR_CHOICES.map((h) => <option key={h} value={h}>{h}</option>)}</select></label>
      </div>
      <label>Note<input value={form.note} onChange={set('note')} /></label>
    </Modal>
  );
}

function AddClassModal({ entry, left, students, onClose, onSave }) {
  const found = students.find((s) => entry.studentId && (s.id === entry.studentId || s.uid === entry.studentId))
    || students.find((s) => nameOf(s).toLowerCase() === entry.studentName.toLowerCase());
  const [form, setForm] = useState(() => ({
    studentId: entry.studentId || found?.id || '',
    subject: entry.subject || 'Maths',
    date: today(),
    startTime: '4:00 PM',
    hours: LENGTHS.includes(left) ? left : 1,
  }));
  const set = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  const endTime = endAfter(form.startTime, form.hours);
  const ready = form.studentId && form.date && form.subject.trim() && endTime;

  const submit = () => {
    const student = students.find((s) => s.id === form.studentId || s.uid === form.studentId);
    onSave({
      entryId: entry.id, student, studentId: form.studentId, studentName: (student && nameOf(student)) || entry.studentName,
      subject: normalizeSubjectLabel(form.subject.trim()), date: form.date, startTime: form.startTime, endTime,
    });
  };

  return (
    <Modal title={`Add class for ${entry.studentName}`} sub={left > 0 ? `${left} h left to book` : 'All hours are booked'} submitLabel="Add class" disabled={!ready} onSubmit={submit} onClose={onClose}>
      {!found && (
        <label>Student account<select value={form.studentId} onChange={set('studentId')}>
          <option value="">Choose a student…</option>
          {students.map((s) => <option key={s.id} value={s.id}>{nameOf(s)}</option>)}
        </select></label>
      )}
      <label>Subject<input value={form.subject} onChange={set('subject')} /></label>
      <div className="mk-two">
        <label>Date<input type="date" value={form.date} onChange={set('date')} /></label>
        <label>Start<select value={form.startTime} onChange={set('startTime')}>{TIME_OPTIONS.map((t) => <option key={t}>{t}</option>)}</select></label>
      </div>
      <div className="mk-chips" role="group" aria-label="Length">
        {LENGTHS.map((h) => <button key={h} type="button" className="mk-chip" aria-pressed={form.hours === h} onClick={() => setForm((f) => ({ ...f, hours: h }))}>{h} h</button>)}
      </div>
      <p className="mk-ends" role="status">{endTime ? `${form.startTime} – ${endTime}` : 'This runs past the last time slot. Start earlier.'}</p>
    </Modal>
  );
}

const TABS = [['book', 'To book'], ['booked', 'Booked'], ['all', 'All']];

export default function MakeupClasses({ students = [], onBack }) {
  const [items, setItems] = useState([]);
  const [lessons, setLessons] = useState([]);
  const [error, setError] = useState('');
  const [tab, setTab] = useState('all');
  const [addingStudent, setAddingStudent] = useState(false);
  const [booking, setBooking] = useState(null);
  const [confirmDone, setConfirmDone] = useState('');

  useEffect(() => onSnapshot(
    collection(db, MAKEUP_COL),
    (snap) => setItems(snap.docs.map((d) => ({ id: d.id, ...d.data() }))),
    (err) => { console.error(err); setError('Couldn’t load make-up classes.'); },
  ), []);
  // Every lesson booked from this page.
  useEffect(() => onSnapshot(
    query(collection(db, 'sessions'), where('makeupId', '>', '')),
    (snap) => setLessons(snap.docs.map((d) => ({ id: d.id, ...d.data() }))),
    (err) => { console.error(err); setError('Couldn’t load booked make-up lessons.'); },
  ), []);

  // Writes are not awaited: the listeners show the change at once, even while offline.
  const run = (promise, message) => { setError(''); promise.catch((err) => { console.error(err); setError(message); }); };

  const rows = items.map((item) => {
    const booked = lessons.filter((s) => s.makeupId === item.id && s.attendance !== 'cancelled')
      .sort((a, b) => (a.date || '').localeCompare(b.date || '') || TIME_OPTIONS.indexOf(a.startTime) - TIME_OPTIONS.indexOf(b.startTime));
    const hours = item.hours || DEFAULT_HOURS;
    const got = booked.reduce((sum, s) => sum + lessonHours(s), 0);
    return { item, booked, hours, got, left: Math.max(0, hours - got) };
  // Oldest missed lesson first; entries without a date go last.
  }).sort((a, b) => (a.item.missedDate || '9999').localeCompare(b.item.missedDate || '9999') || (a.item.studentName || '').localeCompare(b.item.studentName || ''));
  const inTab = (key, row) => key === 'all' || (key === 'book') === row.left > 0;
  const shown = rows.filter((row) => inTab(tab, row));

  const done = (item) => {
    if (confirmDone !== item.id) { setConfirmDone(item.id); return; }
    setConfirmDone('');
    run(removeMakeup(item.id), 'Could not remove. Try again.');
  };

  return (
    <div className="cls cls--clay mk">
      <header className="cls-top">
        <h2 className="cls-title">Make-up classes</h2>
        <button type="button" className="mk-btn mk-back-btn" onClick={onBack}>Back to Class</button>
        <button type="button" className="mk-btn mk-btn--primary" onClick={() => setAddingStudent(true)}>+ Add student</button>
      </header>

      <nav className="mk-tabs" aria-label="Filter">
        {TABS.map(([key, label]) => (
          <button key={key} type="button" className="mk-chip" aria-pressed={tab === key} onClick={() => setTab(key)}>{label}<b>{rows.filter((r) => inTab(key, r)).length}</b></button>
        ))}
      </nav>
      {error && <p className="cls-flag" role="alert">{error}</p>}

      <div className="mk-list">
        {shown.map(({ item, booked, hours, got, left }) => (
          <article key={item.id} className="mk-ticket">
            <div className="mk-who">
              <span className="mk-av" aria-hidden="true">{(item.studentName || '?').charAt(0).toUpperCase()}</span>
              <div>
                <h3>{item.studentName}</h3>
                <p>{[item.subject, item.missedDate && `Missed ${shortDate(item.missedDate)}${item.missedTime ? `, ${item.missedTime}` : ''}`].filter(Boolean).join(' · ')}</p>
              </div>
            </div>
            <div className="mk-mid">
              <div className="mk-meterhead">
                <span>
                  <strong>{got} of </strong>
                  <select value={hours} onChange={(e) => run(updateMakeup(item.id, { hours: Number(e.target.value) }), 'Could not save. Try again.')} aria-label={`Hours to make up for ${item.studentName}`}>
                    {[...new Set([...HOUR_CHOICES, hours])].sort((a, b) => a - b).map((h) => <option key={h} value={h}>{h} h</option>)}
                  </select>
                  {' '}booked
                </span>
                <span className={`mk-pill ${left > 0 ? 'is-need' : 'is-ok'}`}>{left > 0 ? `${left} h left` : 'All booked'}</span>
              </div>
              <div className="mk-meter" aria-hidden="true">
                {Array.from({ length: Math.ceil(hours * 2) }, (_, i) => <i key={i} className={i < got * 2 ? 'on' : ''} />)}
              </div>
              {booked.length > 0 && (
                <div className="mk-slots">
                  {booked.map((s) => <span key={s.id}><b>{shortDate(s.date)}</b>{s.startTime} – {s.endTime}</span>)}
                </div>
              )}
              <input key={item.note || ''} className="mk-note" defaultValue={item.note || ''} placeholder="Add a note…" aria-label={`Note for ${item.studentName}`}
                onBlur={(e) => { const v = e.target.value.trim(); if (v !== (item.note || '')) run(updateMakeup(item.id, { note: v }), 'Could not save. Try again.'); }}
                onKeyDown={(e) => { if (e.key === 'Enter') e.target.blur(); }} />
            </div>
            <div className="mk-acts">
              <button type="button" className={`mk-btn${left > 0 ? ' mk-btn--primary' : ''}`} onClick={() => setBooking(item.id)}>Add class</button>
              <button type="button" className={`mk-btn mk-btn--quiet${confirmDone === item.id ? ' is-confirm' : ''}`} onClick={() => done(item)} onBlur={() => setConfirmDone('')}>
                {confirmDone === item.id ? 'Tap again to remove' : 'Mark done'}
              </button>
            </div>
          </article>
        ))}
        {shown.length === 0 && <div className="cls-empty">{rows.length ? 'Nothing here.' : 'No make-up classes waiting.'}</div>}
      </div>

      {addingStudent && <AddStudentModal students={students} onClose={() => setAddingStudent(false)} onSave={(fields) => { setAddingStudent(false); setTab('all'); run(addMakeup(fields), 'Could not save. Try again.'); }} />}
      {booking && rows.some((r) => r.item.id === booking) && (() => {
        const row = rows.find((r) => r.item.id === booking);
        return <AddClassModal entry={row.item} left={row.left} students={students} onClose={() => setBooking(null)} onSave={(lesson) => { setBooking(null); run(addMakeupLesson(lesson), 'Could not add the class. Try again.'); }} />;
      })()}
    </div>
  );
}
