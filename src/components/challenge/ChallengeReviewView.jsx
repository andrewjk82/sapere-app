import { useState, useRef, useMemo } from 'react';
import { motion } from 'framer-motion';
import { X, CheckCircle2, XCircle, ArrowLeft, ArrowRight, Lightbulb } from 'lucide-react';
import MathView from '../MathView';
import ChallengeSketchBoard from './ChallengeSketchBoard';
import { getOptions, getOptionText } from '../../utils/challengeUtils';

// Resolve the "correct answer" display text — handles MC index answers and
// shuffled-option questions stored with `_shuffledAnswer`.
const getCorrectAnswerText = (q) => {
  if (!q) return '';
  if (q._shuffledAnswer !== undefined) return String(q._shuffledAnswer);
  if (q.type === 'multiple_choice' && q.isManual) {
    const opts = getOptions(q);
    const idx = parseInt(q.answer, 10);
    if (Number.isFinite(idx) && opts[idx]) return getOptionText(opts[idx]);
  }
  if (q.type === 'interactive_grid') return `${q.answer} panels shaded`;
  return String(q.answer ?? '');
};

// Format the student's answer for display.
const formatStudentAnswer = (q, raw) => {
  if (raw === null || raw === undefined || raw === '') return null;
  if (Array.isArray(raw)) return raw.length === 0 ? null : raw.join(', ');
  return String(raw);
};

// ChallengeReviewView — full-screen, per-question review. Same split layout
// as the quiz: question + worked solution on the left, scratch sketch pad on
// the right. Used after a challenge finishes AND from history (read-only).
//
// Step 2 of the rebuild: skeleton with question / your answer / correct
// answer / hint / full solution. Step 4 will replace the full-solution
// block with the step-by-step revealer. Step 5 will persist sketch strokes.
const ChallengeReviewView = ({
  questions = [],
  userAnswers = [],
  answerResults = [],
  startIdx = 0,
  onClose,
  isMobile = false,
}) => {
  const [idx, setIdx] = useState(() => Math.min(Math.max(0, startIdx), Math.max(0, questions.length - 1)));
  const padRef = useRef(null);

  const total = questions.length;
  const q = questions[idx] || {};
  const result = answerResults[idx];
  const isCorrect = result?.correct === true;
  const isPending = result?.isPending === true;
  const studentRaw = userAnswers[idx];
  const studentText = formatStudentAnswer(q, studentRaw);
  const correctText = useMemo(() => getCorrectAnswerText(q), [q]);

  const goPrev = () => setIdx((i) => Math.max(0, i - 1));
  const goNext = () => setIdx((i) => Math.min(total - 1, i + 1));

  // The same desktop split as ChallengeQuizView — sketch pad sticky on the right.
  const showSideCanvas = !isMobile;

  const statusBadge = isPending
    ? { bg: '#fef3c7', text: '#92400e', label: 'Pending review' }
    : isCorrect
      ? { bg: '#d1fae5', text: '#065f46', label: 'Correct' }
      : { bg: '#fee2e2', text: '#7f1d1d', label: 'Incorrect' };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: 'fixed',
        inset: 0,
        background: '#f8fafc',
        zIndex: 2200,
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: isMobile ? '16px' : '28px clamp(20px, 3vw, 48px)',
      }}
    >
      {/* Top bar */}
      <div style={{ width: '100%', maxWidth: 'min(1500px, calc(100vw - 64px))', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <div style={{ fontSize: '0.7rem', fontWeight: 900, color: '#7c3aed', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            Review
          </div>
          <div style={{ fontSize: '1.1rem', fontWeight: 900, color: '#1e1b4b', marginTop: '2px' }}>
            Question {idx + 1} of {total}
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ padding: '6px 14px', borderRadius: '999px', background: statusBadge.bg, color: statusBadge.text, fontSize: '0.75rem', fontWeight: 900, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
            {statusBadge.label}
          </span>
          <button
            onClick={onClose}
            aria-label="Close review"
            style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#fff', border: '1px solid rgba(15,23,42,0.06)', color: '#64748b', cursor: 'pointer', display: 'grid', placeItems: 'center', boxShadow: '0 6px 14px rgba(15,23,42,0.05)' }}
          >
            <X size={18} />
          </button>
        </div>
      </div>

      {/* Body — split layout */}
      <div style={{
        width: '100%',
        maxWidth: showSideCanvas ? 'min(1500px, calc(100vw - 64px))' : '720px',
        display: 'flex',
        flexDirection: showSideCanvas ? 'row' : 'column',
        gap: showSideCanvas ? '28px' : '20px',
        alignItems: 'flex-start',
      }}>
        {/* Left — question / your answer / correct answer / hint / solution */}
        <div style={{
          flex: showSideCanvas ? '0 1 640px' : 1,
          maxWidth: showSideCanvas ? '640px' : '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          minWidth: 0,
          ...(showSideCanvas ? { maxHeight: 'calc(100vh - 96px)', overflowY: 'auto', WebkitOverflowScrolling: 'touch' } : {}),
        }}>
          {/* Question card */}
          <div style={{ padding: '24px 26px', borderRadius: '24px', background: '#fff', border: '1px solid rgba(15,23,42,0.06)', boxShadow: '0 12px 28px rgba(15,23,42,0.04)' }}>
            <div style={{ fontSize: '0.68rem', fontWeight: 900, color: '#94a3b8', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '10px' }}>
              Question
            </div>
            <MathView
              content={q.question}
              graphData={q.graphData}
              style={{ fontSize: '1.05rem', fontWeight: 700, color: '#1e1b4b', lineHeight: 1.55 }}
            />
            {q.questionImage && (
              <img src={q.questionImage} alt="Question" style={{ width: '100%', maxHeight: '260px', objectFit: 'contain', marginTop: '14px', borderRadius: '14px', background: '#f8fafc' }} />
            )}
          </div>

          {/* Your answer */}
          <div style={{ padding: '20px 22px', borderRadius: '20px', background: isCorrect ? '#f0fdf4' : isPending ? '#fffbeb' : '#fef2f2', border: `1px solid ${isCorrect ? '#dcfce7' : isPending ? '#fef3c7' : '#fee2e2'}` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              {isPending
                ? null
                : isCorrect
                  ? <CheckCircle2 size={20} color="#10b981" />
                  : <XCircle size={20} color="#ef4444" />}
              <span style={{ fontSize: '0.68rem', fontWeight: 900, letterSpacing: '0.12em', textTransform: 'uppercase', color: statusBadge.text }}>
                Your answer
              </span>
            </div>
            {studentText
              ? <MathView content={studentText} style={{ color: '#1e1b4b', fontWeight: 800, fontSize: '0.98rem' }} />
              : <div style={{ color: '#64748b', fontStyle: 'italic', fontWeight: 600 }}>No answer recorded</div>}
          </div>

          {/* Correct answer (only when student got it wrong / different) */}
          {!isCorrect && !isPending && correctText && (
            <div style={{ padding: '20px 22px', borderRadius: '20px', background: '#fff', border: '1px solid #dcfce7' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <CheckCircle2 size={20} color="#10b981" />
                <span style={{ fontSize: '0.68rem', fontWeight: 900, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#065f46' }}>
                  Correct answer
                </span>
              </div>
              <MathView content={correctText} style={{ color: '#065f46', fontWeight: 800, fontSize: '0.98rem' }} />
            </div>
          )}

          {/* Hint */}
          {q.hint && (
            <div style={{ padding: '18px 22px', borderRadius: '20px', background: '#fffbeb', border: '1px solid #fef3c7' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px', color: '#b45309' }}>
                <Lightbulb size={18} />
                <span style={{ fontSize: '0.68rem', fontWeight: 900, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                  Hint
                </span>
              </div>
              <MathView content={q.hint} style={{ color: '#78350f', fontWeight: 600, fontSize: '0.95rem' }} />
            </div>
          )}

          {/* Worked solution — full text for now. Step 4 will split into steps. */}
          {q.solution && (
            <div style={{ padding: '24px 26px', borderRadius: '24px', background: '#fff', border: '1px solid rgba(124,58,237,0.12)', boxShadow: '0 10px 24px rgba(124,58,237,0.06)' }}>
              <div style={{ fontSize: '0.68rem', fontWeight: 900, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#7c3aed', marginBottom: '10px' }}>
                Worked solution
              </div>
              <MathView
                content={q.solution}
                graphData={q.graphData}
                style={{ color: '#1e1b4b', fontWeight: 600, fontSize: '0.98rem', lineHeight: 1.6 }}
              />
            </div>
          )}

          {/* Navigation footer */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', marginTop: '8px', padding: '4px 4px 20px' }}>
            <button
              onClick={goPrev}
              disabled={idx === 0}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '12px 20px', borderRadius: '16px',
                background: idx === 0 ? '#f1f5f9' : '#fff',
                color: idx === 0 ? '#cbd5e1' : '#475569',
                border: '1px solid rgba(15,23,42,0.06)',
                fontWeight: 800, fontSize: '0.9rem',
                cursor: idx === 0 ? 'not-allowed' : 'pointer',
                boxShadow: idx === 0 ? 'none' : '0 6px 16px rgba(15,23,42,0.05)',
              }}
            >
              <ArrowLeft size={16} /> Prev
            </button>

            <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
              {questions.map((_, i) => (
                <div
                  key={i}
                  onClick={() => setIdx(i)}
                  style={{
                    width: i === idx ? '20px' : '8px',
                    height: '8px',
                    borderRadius: '999px',
                    background: i === idx
                      ? '#7c3aed'
                      : answerResults[i]?.correct === true
                        ? '#86efac'
                        : answerResults[i]?.correct === false
                          ? '#fca5a5'
                          : '#e2e8f0',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                />
              ))}
            </div>

            <button
              onClick={goNext}
              disabled={idx >= total - 1}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                padding: '14px 26px', borderRadius: '20px',
                background: idx >= total - 1 ? '#e2e8f0' : 'linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)',
                color: idx >= total - 1 ? '#94a3b8' : '#fff',
                border: 'none',
                fontWeight: 800, fontSize: '0.95rem',
                cursor: idx >= total - 1 ? 'not-allowed' : 'pointer',
                boxShadow: idx >= total - 1 ? 'none' : '0 12px 24px rgba(124,58,237,0.28)',
                letterSpacing: '0.02em',
              }}
            >
              Next <ArrowRight size={18} strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* Right — scratch sketch pad */}
        {showSideCanvas && (
          <ChallengeSketchBoard
            placement="side"
            questionId={q.id || idx}
            questionType={q.type}
            isSubmitted={false}
            showSplitScreen
            ref={padRef}
          />
        )}
      </div>
    </motion.div>
  );
};

export default ChallengeReviewView;
