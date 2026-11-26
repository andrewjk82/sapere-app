import { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { collection, documentId, query, where } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { subscribeLive } from '../../services/liveQueries';
import { getQuestionsByIds } from '../../services/contentLoader';
import { examMistakes, markReviewed } from '../../utils/examMistakes';
import { useSplitLayout } from '../../utils/useSplitLayout';
import { SplitPanes, SplitLayoutToggle } from '../SplitPanes';
import WorkingOutCanvas from '../WorkingOutCanvas';
import { QuestionBody } from '../ScholarshipTest';
import './exam-mistakes.css';

const EXAM_NAME = { 'sch-oc': 'OC', 'sch-selective': 'Selective', 'sch-acer': 'Scholarship' };
const weekText = (w) => new Date(`${w}T12:00:00`).toLocaleDateString('en-AU', { day: 'numeric', month: 'short' });

// Full screen: one missed question at a time, question on the left, notepad on the right.
function ReviewPage({ items, onDone, onClose }) {
  const { layout, canChoose, setLayoutChoice, split, setSplit } = useSplitLayout();
  const [index, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [pane, setPane] = useState('question');
  const [loaded, setLoaded] = useState({ id: '', question: null });
  const item = items[Math.min(index, items.length - 1)];

  useEffect(() => {
    if (!item) return undefined;
    let cancelled = false;
    getQuestionsByIds([item.id]).then(({ docs }) => { if (!cancelled) setLoaded({ id: item.id, question: docs[0] || null }); });
    return () => { cancelled = true; };
  }, [item]);

  const go = (step) => { setShowAnswer(false); setPane('question'); setIndex((i) => Math.max(0, Math.min(items.length - 1, i + step))); };
  const ready = item && loaded.id === item.id;

  const questionPane = (
    <div className="exm-question">
      {!ready ? <p className="exm-muted">Loading…</p> : loaded.question ? (
        <QuestionBody key={`${item.id}:${showAnswer}`} q={loaded.question} review={showAnswer} />
      ) : <p className="exm-muted">This question is no longer in the question bank ({item.id}).</p>}
    </div>
  );
  const notePane = (
    <div className="exm-note">
      {item && <WorkingOutCanvas key={item.id} isSubmitted={false} hideTitle />}
    </div>
  );

  return createPortal(
    <div className="exm" role="dialog" aria-modal="true" aria-label="Exam mistakes">
      <header className="exm-top">
        <button type="button" className="exm-btn" onClick={onClose}>Back</button>
        {item && (
          <div className="exm-title">
            <b>{Math.min(index, items.length - 1) + 1} / {items.length} · {EXAM_NAME[item.examId] || item.examId}</b>
            <span>Missed by {item.who.map((w) => w.name).join(', ')} · week of {weekText(item.weekId)}</span>
          </div>
        )}
        {canChoose && <SplitLayoutToggle layout={layout} onChange={setLayoutChoice} />}
        {layout === 'tabs' && <button type="button" className="exm-btn" onClick={() => setPane(pane === 'question' ? 'note' : 'question')}>{pane === 'question' ? 'Notes' : 'Question'}</button>}
        {item && (
          <>
            <button type="button" className="exm-btn" disabled={index === 0} onClick={() => go(-1)}>‹ Prev</button>
            <button type="button" className="exm-btn" disabled={index >= items.length - 1} onClick={() => go(1)}>Next ›</button>
            <button type="button" className="exm-btn exm-btn--primary" onClick={() => setShowAnswer((v) => !v)}>{showAnswer ? 'Hide answer' : 'Show answer'}</button>
            <button type="button" className="exm-btn exm-btn--done" onClick={() => { onDone(item); setShowAnswer(false); }}>✓ Reviewed</button>
          </>
        )}
      </header>
      <div className="exm-body">
        {item ? (
          <SplitPanes layout={layout} split={split} onSplitChange={setSplit} first={questionPane} second={notePane} activePane={pane === 'question' ? 'first' : 'second'} />
        ) : <p className="exm-muted exm-empty">All reviewed. 🎉</p>}
      </div>
    </div>,
    document.body,
  );
}

// Button for the Class page: shows only when the lesson's students have missed exam questions.
// students: [{ id, name }] — profile ids. Their profiles are listened to (shared listener, one document each).
export default function ExamMistakesButton({ students }) {
  const ids = students.map((s) => s.id).filter(Boolean).join(',');
  const [profiles, setProfiles] = useState({});
  const [open, setOpen] = useState(false);
  const [reviewedTick, setReviewedTick] = useState(0);

  useEffect(() => {
    const stop = ids.split(',').filter(Boolean).map((id) => subscribeLive(
      `user:${id}`,
      () => query(collection(db, 'users'), where(documentId(), '==', id)),
      ({ docs }) => setProfiles((cur) => ({ ...cur, [id]: docs[0] || null })),
    ));
    return () => stop.forEach((fn) => fn());
  }, [ids]);

  const items = useMemo(
    () => examMistakes(students.map((s) => ({ id: s.id, name: s.name, specialWeekly: profiles[s.id]?.specialWeekly }))),
    // eslint-disable-next-line react-hooks/exhaustive-deps -- ids stands for students; reviewedTick re-reads this device's list
    [ids, profiles, reviewedTick],
  );
  const done = (item) => { item.who.forEach((w) => markReviewed(w.id, item.id)); setReviewedTick((n) => n + 1); };

  if (!items.length && !open) return null;
  return (
    <>
      <button type="button" className="exm-open" onClick={() => setOpen(true)}>Review exam mistakes ({items.length})</button>
      {open && <ReviewPage items={items} onDone={done} onClose={() => setOpen(false)} />}
    </>
  );
}
