import { useEffect, useState } from 'react';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { db } from '../firebase/config';
import { TIME_OPTIONS } from '../constants/timeOptions';
import { normalizeSubjectLabel } from '../utils/subjectLabels';
import { MAKEUP_COL, addMakeup, addMakeupLesson, removeMakeup, saveMakeupNote } from '../services/makeupService';

// The Make-up page (opened from the Class page): lessons still owed. An entry is deleted once the make-up has happened.
const shortDate = (key) => (key ? new Date(`${key}T12:00:00`).toLocaleDateString('en-AU', { weekday: 'short', day: 'numeric', month: 'short' }) : '');
const nameOf = (s) => s.name || s.displayName || `${s.firstName || ''} ${s.lastName || ''}`.trim();

function AddClassModal({ entry, students, onClose, onSave }) {
  const found = students.find((s) => entry.studentId && (s.id === entry.studentId || s.uid === entry.studentId))
    || students.find((s) => nameOf(s).toLowerCase() === entry.studentName.toLowerCase());
  const [form, setForm] = useState(() => ({
    studentId: entry.studentId || found?.id || '',
    subject: entry.subject || 'Maths',
    date: new Date().toLocaleDateString('en-CA'),
    startTime: '4:00 PM',
    endTime: '5:30 PM',
  }));
  const set = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  const backwards = TIME_OPTIONS.indexOf(form.endTime) <= TIME_OPTIONS.indexOf(form.startTime);
  const ready = form.studentId && form.date && form.subject.trim() && !backwards;

  const submit = (e) => {
    e.preventDefault();
    if (!ready) return;
    const student = students.find((s) => s.id === form.studentId || s.uid === form.studentId);
    onSave({
      ...form, entryId: entry.id, student, subject: normalizeSubjectLabel(form.subject.trim()),
      studentName: (student && nameOf(student)) || entry.studentName,
    });
  };

  return (
    <div className="cls-modal-back" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <form className="cls-modal" role="dialog" aria-modal="true" aria-label="Add class" onSubmit={submit}>
        <div className="cls-modal-head">
          <h3>Add class</h3>
          <button type="button" className="cls-x" aria-label="Close" onClick={onClose}>×</button>
        </div>
        <p className="cls-muted cls-modal-for">{entry.studentName}</p>
        <div className="cls-edit">
          {!found && (
            <label>Student<select value={form.studentId} onChange={set('studentId')}>
              <option value="">Choose a student…</option>
              {students.map((s) => <option key={s.id} value={s.id}>{nameOf(s)}</option>)}
            </select></label>
          )}
          <label>Subject<input value={form.subject} onChange={set('subject')} /></label>
          <label>Date<input type="date" value={form.date} onChange={set('date')} /></label>
          <label>Start<select value={form.startTime} onChange={set('startTime')}>{TIME_OPTIONS.map((t) => <option key={t}>{t}</option>)}</select></label>
          <label>End<select value={form.endTime} onChange={set('endTime')}>{TIME_OPTIONS.map((t) => <option key={t}>{t}</option>)}</select></label>
          <div className="cls-edit-actions">
            <button type="button" className="cls-link" onClick={onClose}>Cancel</button>
            <button type="submit" className="cls-save" disabled={!ready}>Add class</button>
          </div>
        </div>
        {backwards && <p className="cls-flag" role="alert">End time must be after start time.</p>}
      </form>
    </div>
  );
}

export default function MakeupClasses({ students = [], onBack }) {
  const [items, setItems] = useState([]);
  const [error, setError] = useState('');
  const [name, setName] = useState('');
  const [missed, setMissed] = useState('');
  const [note, setNote] = useState('');
  const [adding, setAdding] = useState(null);
  const [lessons, setLessons] = useState([]);

  // Every lesson booked from this page.
  useEffect(() => onSnapshot(
    query(collection(db, 'sessions'), where('makeupId', '>', '')),
    (snap) => setLessons(snap.docs.map((d) => ({ id: d.id, ...d.data() }))),
    (err) => { console.error(err); setError('Couldn’t load booked make-up lessons.'); },
  ), []);
  const bookedFor = (entryId) => lessons.filter((s) => s.makeupId === entryId && s.attendance !== 'cancelled')
    .sort((a, b) => (a.date || '').localeCompare(b.date || '') || TIME_OPTIONS.indexOf(a.startTime) - TIME_OPTIONS.indexOf(b.startTime));
  const book = (lesson) => {
    setAdding(null); setError('');
    addMakeupLesson(lesson).catch((err) => { console.error(err); setError('Could not add the class. Try again.'); });
  };

  useEffect(() => onSnapshot(
    collection(db, MAKEUP_COL),
    (snap) => { setItems(snap.docs.map((d) => ({ id: d.id, ...d.data() }))); setError(''); },
    (err) => { console.error(err); setError('Couldn’t load make-up classes.'); },
  ), []);

  // Oldest missed lesson first; entries without a date go last.
  const sorted = [...items].sort((a, b) => (a.missedDate || '9999').localeCompare(b.missedDate || '9999') || (a.studentName || '').localeCompare(b.studentName || ''));
  const names = [...new Set(students.map(nameOf).filter(Boolean))].sort((a, b) => a.localeCompare(b));

  // Not awaited: the listener shows the change at once, even while offline.
  const add = (e) => {
    e.preventDefault();
    const studentName = name.trim();
    if (!studentName) return;
    addMakeup({ studentName, missedDate: missed, note: note.trim() })
      .catch((err) => { console.error(err); setError('Could not save. Try again.'); });
    setName(''); setMissed(''); setNote('');
  };
  const remove = (item) => {
    if (!window.confirm(`Remove ${item.studentName} from make-up classes?`)) return;
    removeMakeup(item.id).catch((err) => { console.error(err); setError('Could not delete. Try again.'); });
  };

  const editNote = (item, value) => {
    if (value.trim() === (item.note || '')) return;
    saveMakeupNote(item.id, value.trim()).catch((err) => { console.error(err); setError('Could not save. Try again.'); });
  };

  return (
    <div className="cls cls--clay">
    <header className="cls-top">
      <h2 className="cls-title">Make-up classes</h2>
      <button type="button" className="cls-pad-btn" onClick={onBack}>Back to Class</button>
    </header>
    <section className="cls-card cls-makeup">
      <h3>To make up <small>{items.length ? `${items.length} waiting` : 'None waiting'}</small></h3>
      <form className="cls-makeup-form" onSubmit={add}>
        <input list="cls-makeup-names" value={name} onChange={(e) => setName(e.target.value)} placeholder="Student name" aria-label="Student name" />
        <datalist id="cls-makeup-names">{names.map((n) => <option key={n} value={n} />)}</datalist>
        <input type="date" value={missed} onChange={(e) => setMissed(e.target.value)} aria-label="Missed lesson date" title="Missed lesson date" />
        <input value={note} onChange={(e) => setNote(e.target.value)} placeholder="Note (e.g. make-up Sat 2pm)" aria-label="Note" />
        <button type="submit" disabled={!name.trim()}>Add</button>
      </form>
      {error && <p className="cls-flag" role="alert">{error}</p>}
      {sorted.length > 0 && (
        <ul>
          {sorted.map((item) => (
            <li key={item.id}>
              <strong>{item.studentName}</strong>
              {item.missedDate && <span>Missed {shortDate(item.missedDate)} {item.missedTime}</span>}
              <input key={item.note || ''} className="cls-makeup-note" defaultValue={item.note || ''} placeholder="Add a note…" aria-label={`Note for ${item.studentName}`}
                onBlur={(e) => editNote(item, e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') e.target.blur(); }} />
              <button type="button" className="cls-makeup-add" onClick={() => setAdding(item)}>Add class</button>
              <button type="button" onClick={() => remove(item)} aria-label={`Remove ${item.studentName}`}>Delete</button>
              {bookedFor(item.id).length > 0 && (
                <div className="cls-makeup-booked">
                  {bookedFor(item.id).map((s) => <span key={s.id}>Booked {shortDate(s.date)} {s.startTime}–{s.endTime}</span>)}
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </section>
    {adding && <AddClassModal entry={adding} students={students} onClose={() => setAdding(null)} onSave={book} />}
    </div>
  );
}
