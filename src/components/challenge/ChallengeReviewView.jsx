import { useState, useRef, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, XCircle, ArrowLeft, ArrowRight, Lightbulb, MessageCircle, Flag, PenLine } from 'lucide-react';
import { collection, addDoc, serverTimestamp, doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { useAuth } from '../../context/AuthContext';
import MathView from '../MathView';
import ChallengeSketchBoard from './ChallengeSketchBoard';
import WorkedSolutionSteps from './WorkedSolutionSteps';
import InteractiveFractionGrid from './InteractiveFractionGrid';
import { getOptions, getOptionText } from '../../utils/challengeUtils';
import { answersMatch } from '../../utils/answerMatching';

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
  questionComments = [],
  startIdx = 0,
  onClose,
  isMobile = false,
  isTabletLayout = false,
  statColName = null,
  sessionId = null,
}) => {
  const [idx, setIdx] = useState(() => Math.min(Math.max(0, startIdx), Math.max(0, questions.length - 1)));
  const padRef = useRef(null);
  const { user } = useAuth();

  // Report state
  const [reportingIdx, setReportingIdx] = useState(null); // which question is being reported
  const [reportMessage, setReportMessage] = useState('');
  const [isSubmittingReport, setIsSubmittingReport] = useState(false);
  const [reportedIdxs, setReportedIdxs] = useState(new Set()); // already submitted

  const handleReportSubmit = async () => {
    if (!reportMessage.trim() || reportingIdx === null) return;
    setIsSubmittingReport(true);
    try {
      const reportQ = questions[reportingIdx] || {};
      const result = answerResults[reportingIdx] || null;

      // workingOut 이미지는 Firestore 크기 제한으로 인해 answerResults에서 제거되고
      // working_out 서브컬렉션에 별도 저장됨 — 리포트 제출 시 직접 fetch
      let sketchDataUrl = result?.workingOut || result?.answerImage || null;
      let workingOutPages = Array.isArray(result?.workingOutPages) ? result.workingOutPages.filter(Boolean) : [];

      if (!sketchDataUrl && workingOutPages.length === 0 && result?.hasWorkingOut && user?.uid && statColName && sessionId) {
        try {
          const woSnap = await getDoc(doc(db, 'users', user.uid, statColName, sessionId, 'working_out', String(reportingIdx)));
          if (woSnap.exists()) {
            const woData = woSnap.data();
            sketchDataUrl = woData.workingOut || null;
            workingOutPages = Array.isArray(woData.workingOutPages) ? woData.workingOutPages.filter(Boolean) : [];
          }
        } catch (woErr) {
          console.warn('working_out fetch failed (non-fatal):', woErr?.code || woErr);
        }
      }

      // workingOutPages가 있으면 첫 번째 페이지를 sketchDataUrl로 사용 (단일 이미지 미리보기용)
      if (!sketchDataUrl && workingOutPages.length > 0) {
        sketchDataUrl = workingOutPages[0];
      }

      await addDoc(collection(db, 'reports'), {
        studentId: user?.uid || '',
        studentName: user?.displayName || user?.email || 'Student',
        questionId: reportQ.id || '',
        questionIndex: reportingIdx,
        studentAnswer: String(userAnswers[reportingIdx] ?? ''),
        answerResult: result,
        sketchDataUrl,
        workingOutPages,
        hasSketch: Boolean(sketchDataUrl) || workingOutPages.length > 0,
        source: 'review', // flagged during review, not during quiz
        // Direct stat pointers — review can happen days after the session, so
        // without these the admin's report-date probe would miss the attempt.
        ...(statColName && sessionId ? { statRoot: 'users', statCollection: statColName, statId: sessionId } : {}),
        questionData: {
          id: reportQ.id || '',
          question: reportQ.question || reportQ.text || '',
          answer: String(reportQ.answer ?? ''),
          type: reportQ.type || '',
          chapterId: reportQ.chapterId || '',
          chapterTitle: reportQ.chapterTitle || '',
          topicId: reportQ.topicId || '',
          topicCode: reportQ.topicCode || '',
          topicTitle: reportQ.topicTitle || '',
          isManual: !!reportQ.isManual,
          options: getOptions(reportQ).map(opt =>
            typeof opt === 'object' ? { text: String(opt.text || '') } : String(opt ?? '')
          ),
        },
        message: reportMessage,
        status: 'open',
        createdAt: serverTimestamp(),
      });
      setReportedIdxs(prev => new Set([...prev, reportingIdx]));
      setReportingIdx(null);
      setReportMessage('');
    } catch (e) {
      console.error('Report error:', e);
    } finally {
      setIsSubmittingReport(false);
    }
  };

  const total = questions.length;
  const q = questions[idx] || {};
  const result = answerResults[idx];
  const isCorrect = result?.correct === true;
  const isPending = result?.isPending === true;
  const studentRaw = userAnswers[idx];
  const studentText = formatStudentAnswer(q, studentRaw);
  const correctText = useMemo(() => getCorrectAnswerText(q), [q]);

  // Auto-wrap plain text (no $ signs) in $...$ so MathView renders LaTeX properly
  const wrapMath = (text) => {
    if (!text) return text;
    if (/\$/.test(text)) return text;
    // Only wrap if it looks like it contains math (^, _, \, fractions etc)
    if (/[\^_\\]|[0-9][a-zA-Z]|[a-zA-Z][0-9]/.test(text)) return `$${text}$`;
    return text;
  };

  const goPrev = () => setIdx((i) => Math.max(0, i - 1));
  const goNext = () => setIdx((i) => Math.min(total - 1, i + 1));

  // Track viewport width so the layout reacts to resize / orientation change.
  const [viewportWidth, setViewportWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200,
  );
  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    const onResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    window.addEventListener('orientationchange', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('orientationchange', onResize);
    };
  }, []);

  // The side-by-side layout needs genuine room for a 640px question column
  // PLUS the sketch pad. Below that it would squash the column and push the
  // Prev/Next buttons off-screen — so anything narrower falls back to a
  // single-column layout.
  const showSideCanvas = !isMobile && !isTabletLayout && viewportWidth >= 1100;
  const isReviewTabletLayout = !isMobile && !showSideCanvas;
  const singleColumnMaxWidth = isReviewTabletLayout ? 'min(920px, calc(100vw - 32px))' : '720px';

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
        height: '100dvh',
        boxSizing: 'border-box',
        overflowY: showSideCanvas ? 'hidden' : 'auto',
        overscrollBehavior: 'contain',
        WebkitOverflowScrolling: 'touch',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: isMobile ? '16px' : isReviewTabletLayout ? '20px 16px' : '28px clamp(20px, 3vw, 48px)',
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
        maxWidth: showSideCanvas ? 'min(1500px, calc(100vw - 64px))' : singleColumnMaxWidth,
        display: 'flex',
        flexDirection: showSideCanvas ? 'row' : 'column',
        gap: showSideCanvas ? '28px' : '20px',
        alignItems: showSideCanvas ? 'stretch' : 'flex-start',
        height: showSideCanvas ? 'calc(100dvh - 132px)' : 'auto',
        maxHeight: showSideCanvas ? 'calc(100dvh - 132px)' : 'none',
        minHeight: 0,
        // In single-column mode the body must keep its natural (tall) height —
        // otherwise the parent column-flex shrinks it, the page stops
        // scrolling and the worked solution / footer get clipped off-screen.
        flexShrink: 0,
        overflow: showSideCanvas ? 'hidden' : 'visible',
        paddingBottom: showSideCanvas ? 0 : 'max(48px, env(safe-area-inset-bottom, 0px) + 32px)',
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
          minHeight: 0,
          ...(showSideCanvas
            ? {
                height: '100%',
                maxHeight: '100%',
                overflowY: 'auto',
                overscrollBehaviorY: 'contain',
                touchAction: 'pan-y',
                WebkitOverflowScrolling: 'touch',
                scrollbarGutter: 'stable',
                alignSelf: 'stretch',
                paddingRight: '6px',
                paddingBottom: '56px',
              }
            : {}),
        }}>
          {/* Question card */}
          <div style={{ padding: '24px 26px', borderRadius: '24px', background: '#fff', border: '1px solid rgba(15,23,42,0.06)', boxShadow: '0 12px 28px rgba(15,23,42,0.04)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
              <div style={{ fontSize: '0.68rem', fontWeight: 900, color: '#94a3b8', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                Question
              </div>
              {reportedIdxs.has(idx) ? (
                <span style={{ fontSize: '0.68rem', fontWeight: 800, color: '#10b981', background: '#f0fdf4', padding: '4px 10px', borderRadius: '999px' }}>
                  ✓ Reported
                </span>
              ) : (
                <button
                  onClick={() => { setReportingIdx(idx); setReportMessage(''); }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '5px',
                    padding: '5px 12px', borderRadius: '999px',
                    border: '1.5px solid #fecaca', background: '#fff5f5',
                    color: '#ef4444', fontSize: '0.72rem', fontWeight: 800,
                    cursor: 'pointer', letterSpacing: '0.04em',
                  }}
                >
                  <Flag size={13} /> Report
                </button>
              )}
            </div>
            {(q.topicCode || q.topicTitle || q.chapterTitle) && (
              <div style={{
                display: 'inline-block', marginBottom: '12px',
                fontSize: '0.66rem', fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase',
                color: '#7c3aed', background: '#f5f3ff', padding: '5px 11px', borderRadius: '999px',
              }}>
                {[q.topicCode, q.topicTitle || q.chapterTitle].filter(Boolean).join(' · ')}
              </div>
            )}
            <MathView
              content={q.question}
              graphData={q.graphData}
              style={{ fontSize: '1.15rem', fontWeight: 500, color: '#1e1b4b', lineHeight: 1.7 }}
            />
            {q.questionImage && (
              <img src={q.questionImage} alt="Question" style={{ width: '100%', maxHeight: '260px', objectFit: 'contain', marginTop: '14px', borderRadius: '14px', background: '#f8fafc' }} />
            )}
          </div>

          {/* Your answer / sub-questions review */}
          {q.subQuestions?.length > 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {q.subQuestions.map((sq, sIdx) => {
                const sqKey = sq.id || sIdx;
                const rawSqAns = typeof studentRaw === 'object' && studentRaw !== null ? studentRaw[sqKey] : '';
                const sqAnsText = formatStudentAnswer(sq, rawSqAns);
                const isSqCorrect = answersMatch(sqAnsText || '', sq.answer);
                const showCorrect = !isSqCorrect && sq.answer;
                
                return (
                  <div key={sqKey} style={{ padding: '20px 22px', borderRadius: '20px', background: '#fff', border: '1px solid #e2e8f0', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                      <div style={{ width: '24px', height: '24px', borderRadius: '6px', background: '#7c3aed', color: '#fff', display: 'grid', placeItems: 'center', fontSize: '0.75rem', fontWeight: 900, flexShrink: 0 }}>
                        {String.fromCharCode(97 + sIdx)}
                      </div>
                      <MathView content={sq.question} graphData={sq.graphData} style={{ fontWeight: 700, color: '#1e1b4b', fontSize: '0.95rem' }} />
                    </div>
                    
                    {/* Student's answer for this sub-question */}
                    <div style={{ padding: '12px 14px', borderRadius: '12px', background: isSqCorrect ? '#f0fdf4' : '#fef2f2', border: `1px solid ${isSqCorrect ? '#dcfce7' : '#fee2e2'}`, display: 'flex', alignItems: 'center', gap: '8px', marginBottom: showCorrect ? '8px' : 0 }}>
                      {isSqCorrect ? <CheckCircle2 size={16} color="#10b981" /> : <XCircle size={16} color="#ef4444" />}
                      <span style={{ fontSize: '0.75rem', fontWeight: 800, color: isSqCorrect ? '#065f46' : '#991b1b', textTransform: 'uppercase', marginRight: '6px' }}>Your answer:</span>
                      {sqAnsText ? (
                        <MathView content={wrapMath(sqAnsText)} style={{ color: isSqCorrect ? '#065f46' : '#991b1b', fontWeight: 600, fontSize: '0.92rem' }} />
                      ) : (
                        <span style={{ color: '#94a3b8', fontStyle: 'italic', fontSize: '0.92rem' }}>No answer recorded</span>
                      )}
                    </div>
                    
                    {/* Correct answer if wrong */}
                    {showCorrect && (
                      <div style={{ padding: '12px 14px', borderRadius: '12px', background: '#f8fafc', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <CheckCircle2 size={16} color="#10b981" />
                        <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#065f46', textTransform: 'uppercase', marginRight: '6px' }}>Correct answer:</span>
                        <MathView content={wrapMath(String(sq.answer))} style={{ color: '#065f46', fontWeight: 600, fontSize: '0.92rem' }} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <>
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
                {q.type === 'interactive_grid' ? (
                  Array.isArray(studentRaw) && studentRaw.length > 0 ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-start' }}>
                      <InteractiveFractionGrid
                        gridConfig={q.gridConfig || { type: 'rect', rows: 2, cols: 2 }}
                        selectedCells={studentRaw}
                        onChange={() => {}}
                        disabled={true}
                      />
                      <div style={{ fontSize: '0.85rem', color: statusBadge.text, fontWeight: 700 }}>
                        {studentRaw.length} panel{studentRaw.length !== 1 ? 's' : ''} shaded
                      </div>
                    </div>
                  ) : (
                    <div style={{ color: '#64748b', fontStyle: 'italic', fontWeight: 600 }}>No panels shaded</div>
                  )
                ) : studentText ? (
                  <MathView content={wrapMath(studentText)} style={{ color: '#1e1b4b', fontWeight: 500, fontSize: '1.05rem' }} />
                ) : (
                  <div style={{ color: '#64748b', fontStyle: 'italic', fontWeight: 600 }}>No answer recorded</div>
                )}
              </div>

              {/* Correct answer (only when student got it wrong / different) */}
              {!isCorrect && !isPending && (q.type === 'interactive_grid' ? q.answer : correctText) && (
                <div style={{ padding: '20px 22px', borderRadius: '20px', background: '#fff', border: '1px solid #dcfce7' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                    <CheckCircle2 size={20} color="#10b981" />
                    <span style={{ fontSize: '0.68rem', fontWeight: 900, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#065f46' }}>
                      Correct answer
                    </span>
                  </div>
                  {q.type === 'interactive_grid' ? (
                    <div style={{ fontSize: '0.95rem', color: '#065f46', fontWeight: 800 }}>
                      Shade exactly {q.answer} panel{Number(q.answer) !== 1 ? 's' : ''}
                    </div>
                  ) : (
                    <MathView content={wrapMath(correctText)} style={{ color: '#065f46', fontWeight: 500, fontSize: '1.05rem' }} />
                  )}
                </div>
              )}
            </>
          )}

          {/* Student's working out — drawings saved on the sketch pad during the quiz */}
          {(() => {
            const pages = Array.isArray(result?.workingOutPages) ? result.workingOutPages.filter(Boolean) : [];
            const single = result?.workingOut ? [result.workingOut] : [];
            const images = pages.length > 0 ? pages : single;
            if (images.length === 0) return null;
            return (
              <div style={{ padding: '18px 22px', borderRadius: '20px', background: '#faf5ff', border: '1.5px solid #e9d5ff' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', color: '#7c3aed' }}>
                  <PenLine size={18} />
                  <span style={{ fontSize: '0.68rem', fontWeight: 900, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                    Student's working out
                  </span>
                  {images.length > 1 && (
                    <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#a78bfa' }}>{images.length} pages</span>
                  )}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {images.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`Working out ${i + 1}`}
                      style={{ width: '100%', borderRadius: '12px', background: '#fff', border: '1px solid #e2e8f0', display: 'block' }}
                    />
                  ))}
                </div>
              </div>
            );
          })()}

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

          {/* Student's note / Teacher comment */}
          {questionComments[idx] && (
            <div style={{ padding: '18px 22px', borderRadius: '20px', background: '#faf5ff', border: '1.5px solid #e9d5ff' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px', color: '#7c3aed' }}>
                <MessageCircle size={18} />
                <span style={{ fontSize: '0.68rem', fontWeight: 900, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                  Student's note
                </span>
              </div>
              <p style={{ margin: 0, color: '#4c1d95', fontWeight: 600, fontSize: '0.95rem', lineHeight: 1.55, whiteSpace: 'pre-wrap' }}>
                {questionComments[idx]}
              </p>
            </div>
          )}

          {/* Worked solution — revealed one step at a time. */}
          {q.subQuestions?.length > 0 ? (
            q.subQuestions.map((sq, sqIdx) => (
              (sq.solution || (Array.isArray(sq.solutionSteps) && sq.solutionSteps.length > 0)) && (
                <div key={sqIdx}>
                  <div style={{ fontSize: '0.72rem', fontWeight: 900, color: '#7c3aed', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
                    Part ({String.fromCharCode(97 + sqIdx)}) — Worked Solution
                  </div>
                  <WorkedSolutionSteps question={sq} graphData={sq.graphData} />
                </div>
              )
            ))
          ) : (
            (q.solution || (Array.isArray(q.solutionSteps) && q.solutionSteps.length > 0)) && (
              <WorkedSolutionSteps key={q.id || q.question || idx} question={q} graphData={q.graphData} />
            )
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

      {/* Report modal */}
      <AnimatePresence>
        {reportingIdx !== null && (
          <div style={{ position: 'fixed', inset: 0, zIndex: 3000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setReportingIdx(null)}
              style={{ position: 'absolute', inset: 0, background: 'rgba(15,23,42,0.7)', backdropFilter: 'blur(6px)' }}
            />
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 12 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.92, opacity: 0 }}
              style={{ position: 'relative', width: '100%', maxWidth: '420px', background: '#fff', borderRadius: '28px', padding: '32px', boxShadow: '0 32px 64px rgba(0,0,0,0.2)', display: 'flex', flexDirection: 'column', gap: '16px' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: '#fef2f2', display: 'grid', placeItems: 'center' }}>
                    <Flag size={20} style={{ color: '#ef4444' }} />
                  </div>
                  <div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 900, color: '#1e1b4b' }}>Report Question {reportingIdx + 1}</div>
                    <div style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 600 }}>Teacher will review & may adjust score</div>
                  </div>
                </div>
                <button onClick={() => setReportingIdx(null)} style={{ width: '32px', height: '32px', borderRadius: '50%', border: 'none', background: '#f1f5f9', color: '#64748b', cursor: 'pointer', display: 'grid', placeItems: 'center' }}>
                  <X size={16} />
                </button>
              </div>

              <div style={{ padding: '14px 16px', borderRadius: '14px', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                <div style={{ fontSize: '0.68rem', fontWeight: 900, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '6px' }}>Question</div>
                <MathView content={questions[reportingIdx]?.question} style={{ fontSize: '0.9rem', fontWeight: 700, color: '#1e1b4b' }} />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
                  What's the issue?
                </label>
                <textarea
                  autoFocus
                  value={reportMessage}
                  onChange={e => setReportMessage(e.target.value)}
                  placeholder="e.g. I got this right but it was marked wrong. / The answer options seem incorrect."
                  rows={3}
                  style={{ width: '100%', padding: '14px', borderRadius: '14px', border: '1.5px solid #e2e8f0', fontSize: '0.9rem', fontWeight: 600, color: '#1e1b4b', resize: 'none', outline: 'none', boxSizing: 'border-box', fontFamily: 'inherit', lineHeight: 1.5 }}
                  onFocus={e => { e.target.style.borderColor = '#ef4444'; }}
                  onBlur={e => { e.target.style.borderColor = '#e2e8f0'; }}
                />
              </div>

              <button
                onClick={handleReportSubmit}
                disabled={isSubmittingReport || !reportMessage.trim()}
                style={{
                  padding: '14px', borderRadius: '16px', border: 'none',
                  background: reportMessage.trim() ? '#ef4444' : '#f1f5f9',
                  color: reportMessage.trim() ? '#fff' : '#94a3b8',
                  fontWeight: 800, fontSize: '0.95rem',
                  cursor: reportMessage.trim() && !isSubmittingReport ? 'pointer' : 'not-allowed',
                  transition: 'all 0.2s',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                }}
              >
                <Flag size={16} />
                {isSubmittingReport ? 'Submitting…' : 'Submit Report'}
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ChallengeReviewView;
