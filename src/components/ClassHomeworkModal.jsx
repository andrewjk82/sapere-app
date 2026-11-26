import { useMemo, useState } from 'react';
import { doc, writeBatch } from 'firebase/firestore';
import { db } from '../firebase/config';
import LessonTopicPicker from './schedule/LessonTopicPicker';
import { getAssignedCurriculumTopics, getStudentDisplayYear } from '../utils/curriculumTopicOptions';
import { findPreviousCoveredSession, findNextTopic, splitHomeworkExtra, composeHomework } from '../utils/lessonTopics';
import { toHistoryRow, topicHomeworkStates } from '../utils/homeworkTopicHistory';
import { useToast } from '../context/ToastContext';
import { notifyHomework } from '../utils/notifyHomework';

// "Assign homework" from the Class page: the same "Today covered" topic picker the Schedule lesson editor uses.
// The picked topics are the lesson's learnedTopics AND the homework (worksheet PDFs); the optional extra note is
// appended to the homework text. One batched write to the lesson's session doc(s) — one per student in a group — and
// the same "New homework assigned" notice the Schedule sends.

const esc = (v = '') => String(v).replace(/[<>&]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c]));
const todayKey = () => new Date().toLocaleDateString('en-CA');
const nextLessonDate = (sessions, studentId, after) => (sessions || [])
  .filter((s) => s.studentId === studentId && (s.date || '') > (after || ''))
  .map((s) => s.date).sort()[0] || '';

export default function ClassHomeworkModal({ unit, student, sessions, onSaved, onClose }) {
  const { showToast } = useToast();
  const lesson = unit.sessions[0];
  const studentId = lesson.studentId || lesson.groupStudents?.[0]?.studentId || '';
  const [selected, setSelected] = useState(() => (Array.isArray(lesson.learnedTopics) ? lesson.learnedTopics : []));
  const [extra, setExtra] = useState(() => splitHomeworkExtra(lesson.homework, Array.isArray(lesson.learnedTopics) ? lesson.learnedTopics : []));
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  const options = useMemo(() => (student ? getAssignedCurriculumTopics(student) : []), [student]);
  const nextUp = useMemo(() => {
    const prev = findPreviousCoveredSession(sessions || [], lesson);
    return prev ? findNextTopic(options, prev.learnedTopics, new Set(selected.map((t) => t.id))) : null;
  }, [sessions, lesson, options, selected]);
  const hwStates = useMemo(
    () => topicHomeworkStates((sessions || []).filter((s) => s.studentId === studentId).map(toHistoryRow), { excludeSessionId: lesson.id, today: todayKey() }),
    [sessions, studentId, lesson.id],
  );

  const toggle = (topic) => setSelected((cur) => (cur.some((t) => t.id === topic.id) ? cur.filter((t) => t.id !== topic.id) : [...cur, topic]));

  const save = async () => {
    setBusy(true); setError('');
    try {
      const homework = composeHomework(selected, extra);
      const stamp = new Date().toISOString();
      const patches = new Map();
      const batch = writeBatch(db);
      unit.sessions.forEach((s) => {
        const sid = s.studentId || studentId;
        const fields = {
          learnedTopics: selected, homework, reminderSent: false, updatedAt: stamp,
          homeworkDueDate: homework ? nextLessonDate(sessions, sid, lesson.date) : '',
        };
        patches.set(s.id, fields);
        batch.update(doc(db, 'sessions', s.id), fields);
      });
      // A slow server ack must not leave the button on "Saving…": the write stays queued on the device.
      const queued = await Promise.race([batch.commit().then(() => false), new Promise((r) => { window.setTimeout(() => r(true), 10000); })]);
      onSaved((list) => list.map((x) => (patches.has(x.id) ? { ...x, ...patches.get(x.id) } : x)));

      const hadHomework = unit.sessions.some((s) => Boolean(s.homework));
      const changed = unit.sessions.some((s) => (s.homework || '') !== homework);
      if (homework && changed) {
        const title = hadHomework ? 'Homework updated' : 'New homework assigned';
        const subject = lesson.subject || 'lesson';
        // Not awaited: email can take seconds, and the toast outlives this modal.
        notifyHomework(unit.sessions.map((s) => ({
          name: s.studentName || 'Student',
          payload: {
            studentId: s.studentId, email: s.studentEmail || '', subject: title,
            text: `${title} for your ${subject} session.\n\nDate: ${lesson.date}\nTime: ${lesson.startTime} - ${lesson.endTime}\n\nHomework:\n${homework}`,
            html: `<p>${esc(title)} for your <strong>${esc(subject)}</strong> session.</p><p>${esc(lesson.date)} · ${esc(lesson.startTime)} - ${esc(lesson.endTime)}</p><h3 style="margin:18px 0 8px; color:#1e1b4b;">Homework</h3><p style="white-space:pre-wrap; margin:0;">${esc(homework)}</p>`,
            metadata: { type: hadHomework ? 'homework_updated' : 'homework_assigned', sessionId: s.id, date: lesson.date, learnedTopics: selected, homework },
          },
        })), showToast);
      }
      if (queued) setError('');
      onClose();
    } catch (err) {
      console.error('Assign homework failed:', err);
      setError('Could not save. Check the connection and try again.');
    } finally { setBusy(false); }
  };

  return (
    <div className="cls-modal-back" onMouseDown={(e) => { if (e.target === e.currentTarget && !busy) onClose(); }}>
      <div className="cls-modal cls-modal--wide" role="dialog" aria-modal="true" aria-label="Assign homework">
        <div className="cls-modal-head">
          <h3>Assign homework</h3>
          <button type="button" className="cls-x" aria-label="Close" onClick={onClose}>×</button>
        </div>
        <p className="cls-muted cls-modal-for">
          {unit.sessions.length > 1 ? `Group · ${unit.sessions.length} students` : (lesson.studentName || student?.name || 'Student')} · {lesson.date} {lesson.startTime}
        </p>
        <p className="cls-modal-label">Today covered — these become the homework</p>
        <LessonTopicPicker
          key={`${lesson.id}:${options.length > 0}`}
          options={options}
          selected={selected}
          onToggle={toggle}
          nextUp={nextUp}
          homeworkStates={hwStates}
          emptyText={`No assigned curriculum found${student ? ` for ${getStudentDisplayYear(student)}` : ''}.`}
        />
        <p className="cls-modal-label">Extra note (optional)</p>
        <textarea className="cls-modal-text" rows={2} value={extra} onChange={(e) => setExtra(e.target.value)} placeholder="e.g. Exercise 5C Q1–10" />
        {error && <p className="cls-flag" role="alert">{error}</p>}
        <div className="cls-edit-actions cls-modal-actions">
          <button type="button" className="cls-link" onClick={onClose} disabled={busy}>Cancel</button>
          <button type="button" className="cls-save" disabled={busy} onClick={save}>{busy ? 'Saving…' : 'Save homework'}</button>
        </div>
      </div>
    </div>
  );
}
