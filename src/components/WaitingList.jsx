import { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase/config';
import { WAITING_COL, addWaiting, updateWaiting, removeWaiting } from '../services/waitingListService';
import './makeup.css';

// The Waiting list page (opened from the Class page). Shares the Make-up page's styles.
const YEARS = ['Kindergarten', ...Array.from({ length: 12 }, (_, i) => `Year ${i + 1}`)];
const EMPTY = { studentName: '', year: '', school: '', phone: '', preferredTime: '', note: '' };
// createdAt is null for a moment after adding (server time not back yet): treat as now.
const addedAt = (item) => item.createdAt?.toMillis?.() ?? Date.now();

function EntryModal({ entry, onClose, onSave }) {
  const [form, setForm] = useState(() => Object.fromEntries(Object.keys(EMPTY).map((k) => [k, entry?.[k] || ''])));
  const set = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  const title = entry ? 'Edit student' : 'Add student';
  const ready = form.studentName.trim();
  const submit = (e) => {
    e.preventDefault();
    if (ready) onSave(Object.fromEntries(Object.entries(form).map(([k, v]) => [k, v.trim()])));
  };
  return (
    <div className="mk-back" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <form className="mk-modal" role="dialog" aria-modal="true" aria-label={title} onSubmit={submit}>
        <h3>{title}</h3>
        <label>Student name<input value={form.studentName} onChange={set('studentName')} autoFocus /></label>
        <div className="mk-two">
          <label>Year<select value={form.year} onChange={set('year')}>
            <option value="">Choose…</option>
            {YEARS.map((y) => <option key={y}>{y}</option>)}
          </select></label>
          <label>School<input value={form.school} onChange={set('school')} /></label>
        </div>
        <label>Phone number<input type="tel" value={form.phone} onChange={set('phone')} /></label>
        <label>Preferred time<input value={form.preferredTime} onChange={set('preferredTime')} placeholder="e.g. Tue or Thu after 5 PM" /></label>
        <label>Note<input value={form.note} onChange={set('note')} /></label>
        <div className="mk-foot">
          <button type="button" className="mk-btn mk-btn--quiet" onClick={onClose}>Cancel</button>
          <button type="submit" className="mk-btn mk-btn--primary" disabled={!ready}>{entry ? 'Save' : 'Add to list'}</button>
        </div>
      </form>
    </div>
  );
}

export default function WaitingList({ onBack }) {
  const [items, setItems] = useState([]);
  const [error, setError] = useState('');
  const [editing, setEditing] = useState(null); // null = closed, 'new', or an entry
  const [confirmRemove, setConfirmRemove] = useState('');

  useEffect(() => onSnapshot(
    collection(db, WAITING_COL),
    (snap) => setItems(snap.docs.map((d) => ({ id: d.id, ...d.data() }))),
    (err) => { console.error(err); setError('Couldn’t load the waiting list.'); },
  ), []);

  // Writes are not awaited: the listener shows the change at once, even while offline.
  const run = (promise, message) => { setError(''); promise.catch((err) => { console.error(err); setError(message); }); };
  // Longest waiting first.
  const rows = [...items].sort((a, b) => addedAt(a) - addedAt(b));

  const remove = (item) => {
    if (confirmRemove !== item.id) { setConfirmRemove(item.id); return; }
    setConfirmRemove('');
    run(removeWaiting(item.id), 'Could not remove. Try again.');
  };

  return (
    <div className="cls cls--clay mk">
      <header className="cls-top">
        <h2 className="cls-title">Waiting list</h2>
        <button type="button" className="mk-btn mk-back-btn" onClick={onBack}>Back to Class</button>
        <button type="button" className="mk-btn mk-btn--primary" onClick={() => setEditing('new')}>+ Add student</button>
      </header>
      {error && <p className="cls-flag" role="alert">{error}</p>}

      <div className="mk-list">
        {rows.map((item) => (
          <article key={item.id} className="mk-ticket">
            <div className="mk-who">
              <span className="mk-av" aria-hidden="true">{(item.studentName || '?').charAt(0).toUpperCase()}</span>
              <div>
                <h3>{item.studentName}</h3>
                <p>{[item.year, item.school].filter(Boolean).join(' · ')}</p>
                {item.createdAt && <p>Added {new Date(addedAt(item)).toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' })}</p>}
              </div>
            </div>
            <div className="mk-mid">
              <dl className="mk-info">
                {item.preferredTime && <><dt>Preferred time</dt><dd>{item.preferredTime}</dd></>}
                {item.phone && <><dt>Phone</dt><dd><a href={`tel:${item.phone.replace(/[^\d+]/g, '')}`}>{item.phone}</a></dd></>}
                {item.note && <><dt>Note</dt><dd>{item.note}</dd></>}
              </dl>
            </div>
            <div className="mk-acts">
              <button type="button" className="mk-btn" onClick={() => setEditing(item)}>Edit</button>
              <button type="button" className={`mk-btn mk-btn--quiet${confirmRemove === item.id ? ' is-confirm' : ''}`} onClick={() => remove(item)} onBlur={() => setConfirmRemove('')}>
                {confirmRemove === item.id ? 'Tap again to remove' : 'Remove'}
              </button>
            </div>
          </article>
        ))}
        {rows.length === 0 && <div className="cls-empty">No one on the waiting list.</div>}
      </div>

      {editing && (
        <EntryModal
          entry={editing === 'new' ? null : editing}
          onClose={() => setEditing(null)}
          onSave={(fields) => {
            const id = editing === 'new' ? '' : editing.id;
            setEditing(null);
            run(id ? updateWaiting(id, fields) : addWaiting(fields), 'Could not save. Try again.');
          }}
        />
      )}
    </div>
  );
}
