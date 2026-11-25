import { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase/config';
import { MAKEUP_COL, addMakeup, removeMakeup, saveMakeupNote } from '../services/makeupService';

// The Make-up page (opened from the Class page): lessons still owed. An entry is deleted once the make-up has happened.
const shortDate = (key) => (key ? new Date(`${key}T12:00:00`).toLocaleDateString('en-AU', { weekday: 'short', day: 'numeric', month: 'short' }) : '');
const nameOf = (s) => s.name || s.displayName || '';

export default function MakeupClasses({ students = [], onBack }) {
  const [items, setItems] = useState([]);
  const [error, setError] = useState('');
  const [name, setName] = useState('');
  const [missed, setMissed] = useState('');
  const [note, setNote] = useState('');

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
              <button type="button" onClick={() => remove(item)} aria-label={`Remove ${item.studentName}`}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </section>
    </div>
  );
}
