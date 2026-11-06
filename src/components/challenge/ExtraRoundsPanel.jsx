import { useState } from 'react';
import { getDoc } from 'firebase/firestore';
import { fetchQuestionsByIds } from '../../services/dailyAssignmentService';
import { extraRoundsDocRef } from '../../services/extraRoundService';
import { applyLiveContent, liveLookupIds } from '../../utils/liveQuestionContent';
import { unwrapLists } from '../../utils/extraRoundStore';
import ChallengeReviewView from './ChallengeReviewView';

const time = (ms) => new Date(Number(ms)).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });

// One day's extra rounds, for the student and the teacher. The summary comes with the data the screen already has;
// the document is read once, and only when someone opens it. Questions come from the content files, not Firestore.
const ExtraRoundsPanel = ({ uid, date, summary, isMobile = false }) => {
  const [open, setOpen] = useState(false);
  const [rounds, setRounds] = useState(null);
  const [failed, setFailed] = useState(false);
  const [review, setReview] = useState(null);

  if (!uid || !date || !summary?.rounds) return null;

  const toggle = async (e) => {
    e.stopPropagation();
    setOpen((v) => !v);
    if (rounds || open) return;
    try {
      const snap = await getDoc(extraRoundsDocRef(uid, date));
      setRounds(snap.exists() ? snap.data().rounds || [] : []);
    } catch (err) {
      console.warn('Extra rounds failed to load:', err?.code || err);
      setFailed(true);
    }
  };

  const openRound = async (round) => {
    const detail = unwrapLists(round.detail);
    let live = [];
    try { live = await fetchQuestionsByIds(liveLookupIds(detail.questions)); } catch (err) { console.warn('Live questions failed:', err); }
    setReview({
      key: round.id,
      questions: applyLiveContent(detail.questions || [], live, ['solution', 'solutionSteps', 'hint', 'graphData', 'subQuestions']),
      userAnswers: detail.userAnswers || [],
      answerResults: detail.answerResults || [],
    });
  };

  return (
    <div onClick={(e) => e.stopPropagation()} style={{ padding: '10px 14px', borderRadius: 14, background: '#f5f3ff', border: '1px solid #ddd6fe', cursor: 'default' }}>
      <button type="button" onClick={toggle} aria-expanded={open} style={{ width: '100%', background: 'none', border: 'none', padding: 0, cursor: 'pointer', display: 'flex', justifyContent: 'space-between', gap: 10, color: '#5b21b6', fontWeight: 800, fontSize: '0.82rem', textAlign: 'left' }}>
        <span>Extra rounds: {summary.rounds}</span>
        <span>{summary.score}/{summary.total} · +{summary.xp} XP</span>
      </button>
      {open && (
        <div style={{ marginTop: 8, display: 'flex', flexDirection: 'column', gap: 6 }}>
          {failed && <div style={{ fontSize: '0.8rem', color: '#b91c1c' }}>Could not load. Please try again later.</div>}
          {!failed && !rounds && <div style={{ fontSize: '0.8rem', color: '#7c3aed' }}>Loading…</div>}
          {rounds?.length === 0 && <div style={{ fontSize: '0.8rem', color: '#7c3aed' }}>Details are not available.</div>}
          {rounds?.map((round, i) => (
            <button key={round.id || i} type="button" disabled={!round.detail} onClick={() => openRound(round)} style={{ display: 'flex', justifyContent: 'space-between', gap: 10, padding: '8px 10px', borderRadius: 10, border: '1px solid #e9e5ff', background: '#fff', color: '#1e1b4b', fontSize: '0.8rem', fontWeight: 700, cursor: round.detail ? 'pointer' : 'default', textAlign: 'left' }}>
              <span>Round {i + 1} · {time(round.finishedAt)}</span>
              <span>{round.score}/{round.total} · +{round.xp} XP{round.detail ? '' : ' (no details)'}</span>
            </button>
          ))}
        </div>
      )}
      {review && (
        <ChallengeReviewView
          key={review.key}
          questions={review.questions}
          userAnswers={review.userAnswers}
          answerResults={review.answerResults}
          startIdx={0}
          isMobile={isMobile}
          onClose={() => setReview(null)}
        />
      )}
    </div>
  );
};

export default ExtraRoundsPanel;
