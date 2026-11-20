import { useMemo, useState } from 'react';
import { addDoc, collection, doc, getDocs, query, where, writeBatch } from 'firebase/firestore';
import { db } from '../firebase/config';
import { TIME_OPTIONS } from '../constants/timeOptions';

// Small month calendar of ONE student's lessons (Class page). A dot marks a lesson day; picking a day lists its
// lessons, which can be moved (date/time) or added to without leaving the page. Writes the same session fields the
// Schedule page does, and sends the same "schedule updated" notice.

const key = (d) => d.toLocaleDateString('en-CA');
const WEEK = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
const longDay = (k) => new Date(`${k}T12:00:00`).toLocaleDateString('en-AU', { weekday: 'long', day: 'numeric', month: 'long' });

const timeOptions = (...extra) => [...new Set([...TIME_OPTIONS, ...extra.filter(Boolean)])];

const notify = (student, studentId, subject, text) => {
  try {
    fetch('/api/send-notif', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ studentId, email: student?.email || '', subject, text }),
    }).catch(() => {});
  } catch { /* best effort */ }
};

export default function ClassMonthCalendar({ studentId, student, studentName, lessons, currentId, defaultDate, defaultSubject, onChange }) {
  const [month, setMonth] = useState(() => { const d = new Date(`${defaultDate}T12:00:00`); d.setDate(1); return d; });
  const [selected, setSelected] = useState(defaultDate);
  const [editing, setEditing] = useState('');
  const [adding, setAdding] = useState(false);
  const [form, setForm] = useState({ date: '', startTime: '', endTime: '' });
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  const todayKey = key(new Date());
  const byDay = useMemo(() => {
    const map = new Map();
    (lessons || []).filter((s) => s.attendance !== 'cancelled' && s.date).forEach((s) => {
      if (!map.has(s.date)) map.set(s.date, []);
      map.get(s.date).push(s);
    });
    map.forEach((list) => list.sort((a, b) => (a.startTime || '').localeCompare(b.startTime || '')));
    return map;
  }, [lessons]);

  const cells = useMemo(() => {
    const first = new Date(month);
    const lead = (first.getDay() + 6) % 7;
    const count = new Date(first.getFullYear(), first.getMonth() + 1, 0).getDate();
    return [...Array(lead).fill(null), ...Array.from({ length: count }, (_, i) => key(new Date(first.getFullYear(), first.getMonth(), i + 1, 12)))];
  }, [month]);

  const shiftMonth = (n) => setMonth((m) => new Date(m.getFullYear(), m.getMonth() + n, 1));
  const pickDay = (k) => { setSelected(k); setEditing(''); setAdding(false); setError(''); };
  const dayLessons = byDay.get(selected) || [];

  const startMove = (s) => {
    setAdding(false); setError('');
    setEditing(s.id);
    setForm({ date: s.date, startTime: s.startTime || '4:00 PM', endTime: s.endTime || '5:30 PM' });
  };
  const startAdd = () => {
    setEditing(''); setError(''); setAdding(true);
    const last = dayLessons[dayLessons.length - 1];
    setForm({ date: selected, startTime: last?.startTime || '4:00 PM', endTime: last?.endTime || '5:30 PM' });
  };

  const saveMove = async (s) => {
    if (!form.date) { setError('Pick a date.'); return; }
    setBusy(true); setError('');
    try {
      // A group lesson moves as one: every student's doc of the same class (same groupId, date and time).
      let docs = [s];
      if (s.groupId) {
        const snap = await getDocs(query(collection(db, 'sessions'), where('groupId', '==', s.groupId)));
        docs = snap.docs.map((d) => ({ id: d.id, ...d.data() }))
          .filter((x) => x.date === s.date && x.startTime === s.startTime && x.endTime === s.endTime);
        if (!docs.some((x) => x.id === s.id)) docs.push(s);
      }
      const fields = { date: form.date, startTime: form.startTime, endTime: form.endTime, reminderSent: false, updatedAt: new Date().toISOString() };
      const batch = writeBatch(db);
      docs.forEach((x) => batch.update(doc(db, 'sessions', x.id), fields));
      await batch.commit();
      const ids = new Set(docs.map((x) => x.id));
      onChange((list) => list.map((x) => (ids.has(x.id) ? { ...x, ...fields } : x)));
      notify(student, studentId, 'Your schedule has been updated',
        `Your ${s.subject || 'lesson'} session has moved to ${form.date} at ${form.startTime}.`);
      setSelected(form.date);
      { const d = new Date(`${form.date}T12:00:00`); setMonth(new Date(d.getFullYear(), d.getMonth(), 1)); }
      setEditing('');
    } catch {
      setError('Could not save. Check the connection and try again.');
    } finally { setBusy(false); }
  };

  const saveAdd = async () => {
    if (!form.date) { setError('Pick a date.'); return; }
    setBusy(true); setError('');
    try {
      const data = {
        subject: defaultSubject || 'Maths', studentId, studentName, studentEmail: String(student?.email || '').toLowerCase(),
        groupStudentNames: [studentName], groupId: `series_${Date.now()}`,
        date: form.date, startTime: form.startTime, endTime: form.endTime,
        notes: '', homework: '', recurring: false, isHomeworkCompleted: false, reminderSent: false,
        createdAt: new Date().toISOString(),
      };
      const ref = await addDoc(collection(db, 'sessions'), data);
      onChange((list) => [...list, { id: ref.id, ...data }]);
      notify(student, studentId, 'Your schedule has been updated',
        `Your ${data.subject} session has been scheduled for ${data.date} at ${data.startTime}.`);
      setSelected(form.date);
      setAdding(false);
    } catch {
      setError('Could not save. Check the connection and try again.');
    } finally { setBusy(false); }
  };

  const options = timeOptions(form.startTime, form.endTime);
  const editor = (onSave, label) => (
    <div className="cls-edit">
      <label>Date<input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} /></label>
      <label>Start<select value={form.startTime} onChange={(e) => setForm({ ...form, startTime: e.target.value })}>{options.map((t) => <option key={t}>{t}</option>)}</select></label>
      <label>End<select value={form.endTime} onChange={(e) => setForm({ ...form, endTime: e.target.value })}>{options.map((t) => <option key={t}>{t}</option>)}</select></label>
      <div className="cls-edit-actions">
        <button type="button" className="cls-link" onClick={() => { setEditing(''); setAdding(false); setError(''); }}>Cancel</button>
        <button type="button" className="cls-save" disabled={busy} onClick={onSave}>{busy ? 'Saving…' : label}</button>
      </div>
    </div>
  );

  return (
    <section className="cls-cal-row" aria-label="Lesson calendar">
      <div className="cls-card cls-cal">
        <div className="cls-cal-head">
          <strong>{month.toLocaleDateString('en-AU', { month: 'long', year: 'numeric' })}</strong>
          <span>
            <button type="button" aria-label="Previous month" onClick={() => shiftMonth(-1)}>‹</button>
            <button type="button" className="cls-cal-today" onClick={() => { setMonth(new Date(new Date().getFullYear(), new Date().getMonth(), 1)); pickDay(todayKey); }}>Today</button>
            <button type="button" aria-label="Next month" onClick={() => shiftMonth(1)}>›</button>
          </span>
        </div>
        <div className="cls-cal-grid">
          {WEEK.map((w, i) => <span key={i} className="cls-cal-wd">{w}</span>)}
          {cells.map((k, i) => {
            if (!k) return <span key={`b${i}`} />;
            const has = byDay.has(k);
            const past = k < todayKey;
            return (
              <button
                key={k}
                type="button"
                className={`cls-cal-day${k === selected ? ' is-sel' : ''}${k === todayKey ? ' is-today' : ''}${has ? ' has' : ''}${has && past ? ' is-past' : ''}`}
                onClick={() => pickDay(k)}
                aria-label={`${longDay(k)}${has ? ', lesson' : ''}`}
              >
                {Number(k.slice(8))}
              </button>
            );
          })}
        </div>
      </div>

      <div className="cls-card cls-cal-day-panel">
        <h3>{longDay(selected)}</h3>
        {dayLessons.length === 0 && !adding && <p className="cls-muted">No lesson this day.</p>}
        {dayLessons.map((s) => (
          <div key={s.id} className="cls-cal-lesson">
            <div className="cls-cal-lesson-row">
              <span>
                <strong>{s.startTime}{s.endTime ? `–${s.endTime}` : ''}</strong>
                <span className="cls-muted"> · {s.subject || 'Lesson'}{s.groupId && (s.groupStudentNames || []).length > 1 ? ' · group' : ''}</span>
                {s.id === currentId && <em className="cls-cal-cur">showing now</em>}
              </span>
              {editing !== s.id && <button type="button" className="cls-link" onClick={() => startMove(s)}>Change</button>}
            </div>
            {editing === s.id && editor(() => saveMove(s), 'Save change')}
          </div>
        ))}
        {adding && editor(saveAdd, 'Add lesson')}
        {error && <p className="cls-flag" role="alert">{error}</p>}
        {!adding && !editing && <button type="button" className="cls-link cls-cal-add" onClick={startAdd}>+ Add lesson on this day</button>}
      </div>
    </section>
  );
}
