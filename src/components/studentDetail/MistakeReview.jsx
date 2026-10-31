import { useMemo, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ClipboardCheck } from 'lucide-react';
import ChallengeReviewView from '../challenge/ChallengeReviewView';
import { loadMistakes } from '../../services/mistakeReviewService';
import { specialMissed, toReviewArrays } from '../../utils/mistakeReview';

/**
 * "Review the mistakes" (teacher): the OC / Selective / Scholarship questions this student got wrong, opened one at a
 * time with the step-by-step solution — the same review screen the student uses — so the two of them can go through
 * them together. Only for students who use those tests; no Firestore read at all (see services/mistakeReviewService).
 */
export default function MistakeReview({ student }) {
  const [state, setState] = useState({ status: 'idle', items: [] });   // idle | loading | open | empty
  const candidates = useMemo(() => specialMissed(student?.specialWeekly).length, [student?.specialWeekly]);

  const start = async () => {
    setState({ status: 'loading', items: [] });
    try {
      const items = await loadMistakes({ specialWeekly: student?.specialWeekly });
      setState({ status: items.length ? 'open' : 'empty', items });
    } catch (err) {
      console.warn('Mistake review failed:', err?.code || err);
      setState({ status: 'empty', items: [] });
    }
  };
  const close = () => setState({ status: 'idle', items: [] });
  // Only students with the special tests switched on (or that already have results) get the button.
  if (student?.scholarshipEnabled !== true && candidates === 0) return null;
  const arrays = state.status === 'open' ? toReviewArrays(state.items) : null;
  const overlay = { position: 'fixed', inset: 0, zIndex: 2200, display: 'grid', placeItems: 'center', background: 'rgba(15,23,42,0.55)', padding: 20 };
  const card = { background: '#fff', borderRadius: 18, padding: '28px 30px', textAlign: 'center', maxWidth: 380, width: '100%' };

  return (
    <>
      <button
        type="button"
        onClick={start}
        disabled={state.status === 'loading'}
        className="app-button"
        title="Go through the OC / Selective / Scholarship questions this student missed, one at a time, with step-by-step solutions"
        style={{ padding: '8px 16px', borderRadius: 12, background: '#fff1f2', color: '#be123c', fontWeight: 700, border: '1px solid #fecdd3', display: 'flex', alignItems: 'center', gap: 6, cursor: state.status === 'loading' ? 'default' : 'pointer' }}
      >
        <ClipboardCheck size={16} />
        {state.status === 'loading' ? 'Loading…' : 'Review the mistakes'}
        {candidates > 0 && state.status !== 'loading' && <span style={{ background: '#be123c', color: '#fff', borderRadius: 99, padding: '0 7px', fontSize: '0.72rem', lineHeight: '18px' }}>{candidates}</span>}
      </button>

      {state.status === 'loading' && (
        <div style={overlay}><div style={card}><div className="app-spinner" style={{ width: 36, height: 36, margin: '0 auto 12px' }} /><div style={{ fontWeight: 800, color: '#1e1b4b' }}>Gathering the mistakes…</div></div></div>
      )}
      {state.status === 'empty' && (
        <div style={overlay} onClick={close}>
          <div style={card} onClick={(e) => e.stopPropagation()}>
            <div style={{ fontWeight: 800, color: '#1e1b4b', fontSize: '1.05rem' }}>No mistakes to review</div>
            <p style={{ margin: '8px 0 16px', color: '#64748b', fontWeight: 600, fontSize: '0.9rem', lineHeight: 1.5 }}>
              No missed questions have been recorded yet. They arrive with the weekly summary, the first time the student opens the app after a week has ended.
            </p>
            <button type="button" onClick={close} style={{ padding: '10px 24px', borderRadius: 12, border: 0, background: '#6366f1', color: '#fff', fontWeight: 800, cursor: 'pointer' }}>Close</button>
          </div>
        </div>
      )}
      {arrays && (
        <AnimatePresence>
          <ChallengeReviewView
            questions={arrays.questions}
            userAnswers={arrays.userAnswers}
            answerResults={arrays.answerResults}
            questionComments={arrays.questionComments}
            noteTitle="Where this came from"
            startIdx={0}
            disableReport
            isMobile={false}
            onClose={close}
          />
        </AnimatePresence>
      )}
    </>
  );
}
