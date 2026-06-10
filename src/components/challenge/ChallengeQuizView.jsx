import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Lightbulb, CheckCircle2, XCircle, Check, ArrowRight } from 'lucide-react';
import MathView from '../MathView';
import MathInput from '../MathInput';
import ChallengeSketchBoard from './ChallengeSketchBoard';
import { 
  MATH_SYMBOLS, 
  CHALLENGE_YEAR, 
  CHALLENGE_BLUEPRINT,
  getOptions,
  getOptionText,
  getOptionImage
} from '../../utils/challengeUtils';
import InteractiveFractionGrid from './InteractiveFractionGrid';
import { answersMatch } from '../../utils/answerMatching';

// Quick-insert buttons for the MathLive editor (`#?` = cursor placeholder).
const CHALLENGE_QUICK_INSERTS = [
  { label: '√', latex: '\\sqrt{#?}', title: 'Square root' },
  { label: 'ⁿ√', latex: '\\sqrt[#?]{#?}', title: 'nth root' },
  { label: 'a/b', latex: '\\frac{#?}{#?}', title: 'Fraction' },
  { label: 'xⁿ', latex: '^{#?}', title: 'Exponent' },
  { label: 'π', latex: '\\pi', title: 'Pi' },
  { label: '±', latex: '\\pm', title: 'Plus or minus' },
  { label: '°', latex: '^{\\circ}', title: 'Degrees' },
  { label: '( )', latex: '(#?)', title: 'Brackets' },
];

// ── Hint parser (mirrors SecretNoteView) ──────────────────────────────────
const parseHintSteps = (hint) => {
  if (!hint) return [];
  const numbered = hint.split(/\n(?=\d+[\.\)]\s)/);
  if (numbered.length > 1) return numbered.map((s) => s.replace(/^\d+[\.\)]\s*/, '').trim()).filter(Boolean);
  const stepped = hint.split(/\n(?=Step\s+\d+\s*[:–-])/i);
  if (stepped.length > 1) return stepped.map((s) => s.replace(/^Step\s+\d+\s*[:–-]\s*/i, '').trim()).filter(Boolean);
  const paras = hint.split(/\n{2,}/);
  if (paras.length > 1) return paras.map((s) => s.trim()).filter(Boolean);
  const lines = hint.split(/\n/).map((s) => s.trim()).filter(Boolean);
  if (lines.length > 1) return lines;
  return hint.trim() ? [hint.trim()] : [];
};

// ── StepwiseHint component ────────────────────────────────────────────────
const StepwiseHint = ({ hint, questionKey }) => {
  const steps = useMemo(() => parseHintSteps(hint), [hint]);
  const [revealed, setRevealed] = useState(0);
  const [open, setOpen] = useState(false);
  useEffect(() => { setRevealed(0); setOpen(false); }, [questionKey]);

  if (!steps.length) {
    return (
      <div style={{
        display: 'flex', alignItems: 'center', gap: '8px',
        padding: '12px 16px', borderRadius: '14px',
        background: '#f8fafc', border: '1.5px dashed #e2e8f0',
        color: '#94a3b8', fontSize: '0.84rem', fontWeight: 700,
      }}>
        <Lightbulb size={15} style={{ opacity: 0.4 }} />
        No hint provided for this question
      </div>
    );
  }

  if (!open) {
    return (
      <button
        onClick={() => { setOpen(true); setRevealed(1); }}
        style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          padding: '11px 16px', borderRadius: '14px', border: 'none',
          background: '#fef3c7', color: '#b45309',
          fontSize: '0.86rem', fontWeight: 800, cursor: 'pointer', width: '100%',
          justifyContent: 'center',
        }}
      >
        <Lightbulb size={15} />
        Show hint{steps.length > 1 ? ` (${steps.length} steps)` : ''}
      </button>
    );
  }

  const allRevealed = revealed >= steps.length;

  return (
    <div style={{
      background: '#fffbeb', border: '1px solid #fef3c7',
      borderRadius: '16px', padding: '14px 16px',
      display: 'flex', flexDirection: 'column', gap: '10px',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '2px' }}>
        <Lightbulb size={14} style={{ color: '#d97706', flexShrink: 0 }} />
        <span style={{ fontSize: '0.68rem', fontWeight: 900, color: '#d97706', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          Hint{steps.length > 1 ? ` · Step ${Math.min(revealed, steps.length)} of ${steps.length}` : ''}
        </span>
        {steps.length > 1 && (
          <div style={{ display: 'flex', gap: '4px', marginLeft: 'auto' }}>
            {steps.map((_, i) => (
              <div key={i} style={{
                width: '8px', height: '8px', borderRadius: '50%',
                background: i < revealed ? '#d97706' : '#fde68a',
                transition: 'background 0.2s',
              }} />
            ))}
          </div>
        )}
      </div>

      <AnimatePresence initial={false}>
        {steps.slice(0, revealed).map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              padding: '10px 13px', borderRadius: '12px',
              background: i === revealed - 1 ? '#fff' : 'rgba(255,255,255,0.6)',
              border: i === revealed - 1 ? '1px solid #fde68a' : '1px solid transparent',
              display: 'flex', gap: '10px', alignItems: 'flex-start',
            }}
          >
            {steps.length > 1 && (
              <div style={{
                width: '22px', height: '22px', borderRadius: '50%', flexShrink: 0,
                background: '#fde68a', color: '#92400e',
                display: 'grid', placeItems: 'center',
                fontSize: '0.7rem', fontWeight: 900,
              }}>{i + 1}</div>
            )}
            <MathView content={step} style={{ fontSize: '0.9rem', color: '#92400e', fontWeight: 600, lineHeight: 1.6, flex: 1 }} />
          </motion.div>
        ))}
      </AnimatePresence>

      {!allRevealed ? (
        <button
          onClick={() => setRevealed((r) => r + 1)}
          style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
            padding: '10px', borderRadius: '11px', border: 'none',
            background: '#fef3c7', color: '#d97706',
            fontSize: '0.84rem', fontWeight: 800, cursor: 'pointer',
          }}
        >
          <Lightbulb size={13} />
          {steps.length > 1 ? `Next hint (${revealed}/${steps.length})` : 'Show hint'}
        </button>
      ) : (
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '6px',
          padding: '8px 12px', borderRadius: '10px',
          background: '#fff7ed', color: '#d97706',
          fontSize: '0.78rem', fontWeight: 800,
        }}>
          <CheckCircle2 size={13} /> All hints shown
        </div>
      )}
    </div>
  );
};

const ChallengeQuizView = ({
  step,
  questions,
  currentIdx,
  TOTAL_QUESTIONS,
  timeLeft,
  countdown,
  selectedOption,
  setSelectedOption,
  selectedOptionIdx,
  isCorrect,
  subAnswers,
  setSubAnswers,
  userAnswers,
  showHint,
  setShowHint,
  isSubmittingCanvas,
  isMobile,
  showSplitScreen,
  showSideCanvas,
  isTabletCanvasLayout,
  flash,
  handleAnswer,
  nextQuestion,
  canvasRef,
  answerInputRef,
  shuffledOptions,
  questionComments = [],
  setQuestionComments,
}) => {
  const currentQuestion = questions[currentIdx] || {};
  // Use pre-shuffled options if provided, else fall back to question's own options
  const displayOptions = shuffledOptions && shuffledOptions.length > 0 ? shuffledOptions : getOptions(currentQuestion);
  const isFeedback = step === 'feedback';
  const leftColumnRef = useRef(null);
  const feedbackRef = useRef(null);
  const sideScrollTouchYRef = useRef(null);

  const splitScreenHeight = 'calc(100dvh - 80px)';

  // fill_blank: which blank the math symbol pad should write into.
  const [focusedBlankIdx, setFocusedBlankIdx] = useState(0);
  useEffect(() => { setFocusedBlankIdx(0); }, [currentIdx]);

  // Fullscreen image zoom (for graph-choice options that are hard to see small)
  const [zoomImage, setZoomImage] = useState(null);

  // Fraction input mode: triggered when user types "/"
  const [fracMode, setFracMode] = useState(false);
  const [fracWhole, setFracWhole] = useState('');
  const [fracNum, setFracNum] = useState('');
  const [fracDen, setFracDen] = useState('');
  const fracDenRef = useRef(null);
  const fracNumRef = useRef(null);
  const fracWholeRef = useRef(null);
  const mathInputRef = useRef(null);
  useEffect(() => { setFracMode(false); setFracWhole(''); setFracNum(''); setFracDen(''); }, [currentIdx]);

  const enterFracMode = (currentVal) => {
    setFracWhole('');
    setFracNum(currentVal);
    setFracDen('');
    setFracMode(true);
    setTimeout(() => fracDenRef.current?.focus(), 50);
  };
  const commitFraction = (whole, num, den) => {
    if (!den) { setFracMode(false); answerInputRef.current?.focus(); return; }
    const base = (selectedOption || '');
    const prefix = base.endsWith(num) ? base.slice(0, base.length - num.length) : base;
    const frac = `(${num || '0'})/(${den})`;
    setSelectedOption(prefix + (whole ? `${whole} ${frac}` : frac));
    setFracMode(false);
    setFracWhole(''); setFracNum(''); setFracDen('');
    setTimeout(() => answerInputRef.current?.focus(), 50);
  };

  const scrollLeftColumnBy = (deltaY) => {
    const node = leftColumnRef.current;
    if (!node || !Number.isFinite(deltaY) || deltaY === 0) return false;

    const maxScrollTop = node.scrollHeight - node.clientHeight;
    if (maxScrollTop <= 0) return false;

    const currentTop = node.scrollTop;
    const nextTop = Math.max(0, Math.min(maxScrollTop, currentTop + deltaY));
    if (nextTop === currentTop) return false;

    node.scrollTop = nextTop;
    return true;
  };

  const handleSideCanvasWheel = (event) => {
    if (!isFeedback) return;
    if (scrollLeftColumnBy(event.deltaY)) {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  const handleSideCanvasTouchStart = (event) => {
    if (!isFeedback) return;
    sideScrollTouchYRef.current = event.touches?.[0]?.clientY ?? null;
  };

  const handleSideCanvasTouchMove = (event) => {
    if (!isFeedback || sideScrollTouchYRef.current == null) return;
    const nextY = event.touches?.[0]?.clientY;
    if (typeof nextY !== 'number') return;

    const deltaY = sideScrollTouchYRef.current - nextY;
    if (scrollLeftColumnBy(deltaY)) {
      event.preventDefault();
      event.stopPropagation();
      sideScrollTouchYRef.current = nextY;
    }
  };

  const resetSideCanvasTouchScroll = () => {
    sideScrollTouchYRef.current = null;
  };

  useEffect(() => {
    if (!isFeedback) return undefined;
    const timer = window.setTimeout(() => {
      const feedbackNode = feedbackRef.current;
      const scrollNode = leftColumnRef.current;
      if (!feedbackNode) return;
      if (scrollNode && showSideCanvas) {
        scrollNode.scrollTo({
          top: Math.max(0, feedbackNode.offsetTop - 24),
          behavior: 'smooth',
        });
        return;
      }
      feedbackNode.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }, 80);
    return () => window.clearTimeout(timer);
  }, [isFeedback, currentIdx, showSideCanvas]);

  // Subtle full-screen pastel flash right after grading: green = correct,
  // red = wrong, amber = pending review. Animates 0.45 → 0 over ~650ms.
  const flashColor =
    flash === 'correct' ? '#bbf7d0' :
    flash === 'wrong' ? '#fecaca' :
    flash === 'pending' ? '#fde68a' : null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: '#f8fafc',
        zIndex: 2000,
        padding: isMobile ? '20px 16px' : '32px clamp(20px, 3vw, 48px)',
        paddingBottom: isMobile ? 'max(80px, env(safe-area-inset-bottom, 20px) + 80px)' : '48px',
        height: '100dvh',
        boxSizing: 'border-box',
        overflowY: showSideCanvas ? 'hidden' : 'auto',
        overscrollBehavior: 'contain',
        WebkitOverflowScrolling: 'touch',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <AnimatePresence>
        {flashColor && (
          <motion.div
            key={`flash-${currentIdx}-${flash}`}
            initial={{ opacity: 0.55 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: 'easeOut' }}
            style={{ position: 'fixed', inset: 0, background: flashColor, pointerEvents: 'none', zIndex: 2050 }}
          />
        )}
      </AnimatePresence>
      <div style={{ 
        maxWidth: showSplitScreen ? 'min(1500px, calc(100vw - 64px))' : '600px', 
        width: '100%', 
        display: 'flex', 
        flexDirection: showSideCanvas ? 'row' : 'column', 
        gap: showSideCanvas ? '28px' : (isMobile ? '20px' : '40px'),
        alignItems: showSideCanvas ? 'stretch' : 'flex-start',
        height: showSideCanvas ? splitScreenHeight : 'auto',
        maxHeight: showSideCanvas ? splitScreenHeight : 'none',
        minHeight: 0,
        overflow: showSideCanvas ? 'hidden' : 'visible',
        transition: 'all 0.3s ease'
      }}>
        <div ref={leftColumnRef} style={{
          flex: showSideCanvas ? '0 1 640px' : 1,
          maxWidth: showSideCanvas ? '640px' : (showSplitScreen ? '600px' : '100%'),
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          minWidth: 0,
          minHeight: 0,
          // In split view, keep the page fixed and let only this column scroll.
          // That prevents left-pane scrolling from moving the sketch surface
          // while the stylus is drawing on the right.
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
                paddingBottom: '56px'
              }
            : {}),
        }}>
          {/* Top Progress & Header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
            <div style={{ textAlign: 'left' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Challenge</span>
              <div style={{ fontSize: '1.1rem', fontWeight: 900, color: '#1e1b4b' }}>Question {currentIdx + 1} of {TOTAL_QUESTIONS}</div>
            </div>
            <div style={{ textAlign: 'right', display: 'flex', flexWrap: 'nowrap', alignItems: 'center', gap: '8px' }}>
               <div style={{
                 fontSize: '0.9rem', fontWeight: 800,
                 color: timeLeft <= 5 ? '#f43f5e' : timeLeft <= 10 ? '#f97316' : '#64748b',
                 background: timeLeft <= 5 ? '#fff1f2' : timeLeft <= 10 ? '#fff7ed' : '#fff',
                 padding: '8px 12px', borderRadius: '12px',
                 boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
                 display: 'flex', alignItems: 'center', gap: '6px',
                 transition: 'color 0.3s, background 0.3s',
               }}>
                 <Clock size={16} /> {timeLeft}s
               </div>
            </div>
          </div>

          {/* Time Progress Bar */}
          {(() => {
            const pct = (timeLeft / (currentQuestion?.timeLimit || 30)) * 100;
            const barColor = timeLeft <= 5 ? '#f43f5e' : timeLeft <= 10 ? '#f97316' : '#6366f1';
            const glowColor = timeLeft <= 5 ? 'rgba(244,63,94,0.35)' : timeLeft <= 10 ? 'rgba(249,115,22,0.25)' : 'transparent';
            return (
              <div style={{ width: '100%', height: '5px', background: '#e2e8f0', borderRadius: '999px', overflow: 'visible', marginBottom: '10px', position: 'relative' }}>
                <motion.div
                  initial={false}
                  animate={{ width: `${pct}%`, backgroundColor: barColor }}
                  transition={{ duration: 0.15 }}
                  style={{
                    height: '100%', borderRadius: '999px', position: 'relative',
                    boxShadow: timeLeft <= 10 ? `0 0 8px 2px ${glowColor}` : 'none',
                    transition: 'box-shadow 0.3s',
                  }}
                />
              </div>
            );
          })()}

          {/* Question Card */}
          <div className="app-panel" style={{ padding: '32px', borderRadius: '32px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)', position: 'relative' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
              {step === 'feedback' && (
                <span style={{ fontSize: '0.7rem', fontWeight: 800, background: '#e0e7ff', color: '#6366f1', padding: '4px 10px', borderRadius: '8px', textTransform: 'uppercase' }}>
                  {currentQuestion?.year || CHALLENGE_YEAR} • {currentQuestion?.chapterTitle || CHALLENGE_BLUEPRINT?.title || 'Numbers'}
                </span>
              )}
            </div>
            <MathView
              content={currentQuestion?.question}
              graphData={currentQuestion?.type === 'graph_sketch' ? (isFeedback ? currentQuestion?.graphData : null) : currentQuestion?.graphData}
              style={{ fontSize: '1.15rem', fontWeight: 500, color: '#1e1b4b', lineHeight: 1.7, margin: 0 }}
            />

            {/* Step-by-step hint — shown only while solving (hidden after feedback) */}
            {!isFeedback && (
              <StepwiseHint hint={currentQuestion?.hint} questionKey={`${currentIdx}-${currentQuestion?.id}`} />
            )}

            {currentQuestion?.questionImage && (
              <img src={currentQuestion.questionImage} alt="Question" style={{ width: '100%', maxHeight: '200px', objectFit: 'contain', marginTop: '16px', borderRadius: '16px', background: '#f8fafc' }} />
            )}
          </div>

          {currentQuestion?.subQuestions?.length > 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {currentQuestion.subQuestions.map((sq, sIdx) => (
                <div key={sq.id || sIdx} style={{ padding: '24px', borderRadius: '24px', background: 'white', border: '1px solid #e2e8f0', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: '#6366f1', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', fontWeight: 900, flexShrink: 0 }}>
                      {String.fromCharCode(97 + sIdx)}
                    </div>
                    <MathView content={sq.question} graphData={sq.type === 'graph_sketch' ? (isFeedback ? sq.graphData : null) : sq.graphData} style={{ fontWeight: 700, color: '#1e293b', fontSize: '1rem' }} />
                  </div>

                  {sq.type === 'multiple_choice' ? (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '8px' }}>
                      {(sq.options || []).map((opt, oIdx) => {
                        const isSelected = subAnswers[sq.id || sIdx] === (typeof opt === 'string' ? opt : opt.text);
                        const isCorrectAnswer = step === 'feedback' && (
                          (sq.isManual && String(oIdx) === String(sq.answer)) || (!sq.isManual && String(typeof opt === 'string' ? opt : opt.text) === String(sq.answer))
                        );
                        const isWrong = step === 'feedback' && isSelected && !isCorrectAnswer;

                        return (
                          <button
                            key={oIdx}
                            onClick={() => step !== 'feedback' && setSubAnswers(prev => ({ ...prev, [sq.id || sIdx]: (typeof opt === 'string' ? opt : opt.text) }))}
                            aria-disabled={isFeedback}
                            style={{
                              padding: '12px 16px',
                              borderRadius: '12px',
                              border: `2px solid ${isCorrectAnswer ? '#10b981' : isWrong ? '#ef4444' : isSelected ? '#6366f1' : '#f1f5f9'}`,
                              background: isCorrectAnswer ? '#f0fdf4' : isWrong ? '#fef2f2' : isSelected ? '#f5f3ff' : '#fff',
                              color: isCorrectAnswer ? '#166534' : isWrong ? '#991b1b' : isSelected ? '#4f46e5' : '#64748b',
                              fontWeight: 800,
                              fontSize: '0.85rem',
                              cursor: step === 'feedback' ? 'default' : 'pointer',
                              transition: 'all 0.2s',
                              textAlign: 'left'
                            }}
                          >
                            {String.fromCharCode(65 + oIdx)}. <MathView content={typeof opt === 'string' ? opt : opt.text} style={{ display: 'inline' }} />
                          </button>
                        );
                      })}
                    </div>
                  ) : (
                    <div style={{ position: 'relative' }}>
                      <input
                        type="text"
                        inputMode="text"
                        autoComplete="off"
                        autoCorrect="off"
                        autoCapitalize="off"
                        spellCheck={false}
                        readOnly={isFeedback}
                        value={subAnswers[sq.id || sIdx] || ''}
                        onChange={(e) => step !== 'feedback' && setSubAnswers(prev => ({ ...prev, [sq.id || sIdx]: e.target.value }))}
                        placeholder="Type answer..."
                        style={{ 
                          width: '100%',
                          padding: '12px 16px', 
                          borderRadius: '12px', 
                          border: `2px solid ${step === 'feedback' ? (String(subAnswers[sq.id || sIdx]).replace(/\s+/g, '').toLowerCase() === String(sq.answer).replace(/\s+/g, '').toLowerCase() ? '#10b981' : '#ef4444') : '#f1f5f9'}`, 
                          background: 'white',
                          fontWeight: 700,
                          fontSize: '0.95rem'
                        }}
                      />
                      {step === 'feedback' && String(subAnswers[sq.id || sIdx]).replace(/\s+/g, '').toLowerCase() !== String(sq.answer).replace(/\s+/g, '').toLowerCase() && (
                        <div style={{ marginTop: '8px', fontSize: '0.75rem', color: '#166534', fontWeight: 800, background: '#f0fdf4', padding: '4px 10px', borderRadius: '6px' }}>
                          Correct: <MathView content={String(sq.answer)} style={{ display: 'inline' }} />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
              
              {step !== 'feedback' && (
                <button 
                  onClick={() => handleAnswer(subAnswers)}
                  disabled={Object.keys(subAnswers).length < currentQuestion.subQuestions.length}
                  className="app-button app-button--primary"
                  style={{ padding: '20px', borderRadius: '24px', fontSize: '1.1rem', marginTop: '12px' }}
                >
                  Submit All Parts
                </button>
              )}
            </div>
          ) : currentQuestion?.type === 'fill_blank' ? (() => {
            const blanks = Array.isArray(currentQuestion.blanks) ? currentQuestion.blanks : [];
            const ensureArr = (val) => {
              if (Array.isArray(val)) return [...val, ...Array(Math.max(0, blanks.length - val.length)).fill('')].slice(0, blanks.length);
              return Array(blanks.length).fill('');
            };
            const answersArr = isFeedback ? ensureArr(userAnswers[currentIdx]) : ensureArr(selectedOption);
            const perBlank = currentQuestion.lastBlankResults || [];
            const updateBlank = (idx, val) => {
              if (isFeedback) return;
              const next = ensureArr(selectedOption);
              next[idx] = val;
              setSelectedOption(next);
            };
            const allFilled = answersArr.every((s) => String(s || '').trim() !== '');
            return (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {/* Math symbol toolbar — inserts into the focused blank */}
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '8px', justifyContent: 'center' }}>
                  {MATH_SYMBOLS.map((symbol) => (
                    <button
                      key={symbol}
                      onClick={(e) => {
                        e.preventDefault();
                        if (isFeedback) return;
                        const cur = ensureArr(selectedOption);
                        cur[focusedBlankIdx] = (cur[focusedBlankIdx] || '') + symbol;
                        setSelectedOption(cur);
                      }}
                      aria-disabled={isFeedback}
                      style={{ width: '44px', height: '44px', borderRadius: '12px', border: '1px solid #e2e8f0', background: symbol === '²' || symbol === '³' ? '#f5f3ff' : '#fff', color: '#4f46e5', fontSize: symbol === '√' ? '1.3rem' : '1.1rem', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 2px 6px rgba(0,0,0,0.03)', fontFamily: '"KaTeX_Main", "Times New Roman", serif', lineHeight: 1, padding: 0, paddingBottom: symbol === '√' ? '2px' : 0 }}
                    >
                      {symbol}
                    </button>
                  ))}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      if (isFeedback) return;
                      const cur = ensureArr(selectedOption);
                      cur[focusedBlankIdx] = (cur[focusedBlankIdx] || '').slice(0, -1);
                      setSelectedOption(cur);
                    }}
                    aria-disabled={isFeedback}
                    style={{ width: '64px', height: '44px', borderRadius: '12px', border: '1px solid #fee2e2', background: '#fff1f2', color: '#e11d48', fontSize: '0.8rem', fontWeight: 900, cursor: 'pointer', textTransform: 'uppercase' }}
                  >
                    Del
                  </button>
                </div>

                {/* Blanks */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '20px', borderRadius: '20px', background: '#fff', border: '1px solid #e2e8f0' }}>
                  {blanks.map((b, i) => {
                    const status = isFeedback ? (perBlank[i] ? 'correct' : 'wrong') : (focusedBlankIdx === i ? 'focus' : 'idle');
                    const borderColor = status === 'correct' ? '#10b981' : status === 'wrong' ? '#ef4444' : status === 'focus' ? '#6366f1' : '#e2e8f0';
                    const bg = status === 'correct' ? '#f0fdf4' : status === 'wrong' ? '#fef2f2' : '#fff';
                    return (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        {b.label && (
                          <div style={{ minWidth: '60px' }}>
                            <MathView content={b.label} style={{ fontWeight: 800, color: '#1e1b4b', fontSize: '1.1rem' }} />
                          </div>
                        )}
                        <input
                          type="text"
                          inputMode="text"
                          autoComplete="off"
                          autoCorrect="off"
                          autoCapitalize="off"
                          spellCheck={false}
                          readOnly={isFeedback}
                          value={answersArr[i] || ''}
                          onChange={(e) => updateBlank(i, e.target.value)}
                          onFocus={() => setFocusedBlankIdx(i)}
                          placeholder="—"
                          style={{ flex: 1, padding: '14px 16px', borderRadius: '14px', border: `2px solid ${borderColor}`, background: bg, fontWeight: 700, fontSize: '1.05rem', fontFamily: '"KaTeX_Main", "Times New Roman", serif', textAlign: 'center', outline: 'none', letterSpacing: '0.04em' }}
                        />
                        {isFeedback && !perBlank[i] && (
                          <div style={{ fontSize: '0.75rem', color: '#166534', fontWeight: 800, background: '#f0fdf4', padding: '4px 10px', borderRadius: '8px', whiteSpace: 'nowrap' }}>
                            <MathView content={String(b.answer || '')} style={{ display: 'inline' }} />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {!isFeedback && (
                  <button
                    onClick={() => handleAnswer(ensureArr(selectedOption))}
                    disabled={!allFilled}
                    className="app-button app-button--primary"
                    style={{ padding: '18px', borderRadius: '20px' }}
                  >
                    Submit Answer
                  </button>
                )}
              </div>
            );
          })() : currentQuestion?.type === 'short_answer' ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {/* Quick-insert buttons — insert proper LaTeX into the math field */}
              {!isFeedback && (
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
                  {CHALLENGE_QUICK_INSERTS.map((b) => (
                    <button
                      key={b.label}
                      type="button"
                      onClick={(e) => { e.preventDefault(); mathInputRef.current?.insert(b.latex); }}
                      title={b.title}
                      style={{ minWidth: '48px', height: '44px', padding: '0 12px', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#fff', color: '#4f46e5', fontSize: '1.1rem', fontWeight: 800, cursor: 'pointer', boxShadow: '0 2px 6px rgba(0,0,0,0.03)', fontFamily: '"KaTeX_Main", "Times New Roman", serif' }}
                    >
                      {b.label}
                    </button>
                  ))}
                </div>
              )}
              <MathInput
                ref={mathInputRef}
                value={step === 'feedback' ? (userAnswers[currentIdx] || '') : (selectedOption || '')}
                onChange={(latex) => { if (step !== 'feedback') setSelectedOption(latex); }}
                onEnter={() => { if (selectedOption) handleAnswer(selectedOption); }}
                readOnly={isFeedback}
                placeholder="Type your answer…  (use the buttons for √ and fractions)"
                autoFocus
                style={{ fontSize: '1.4rem', padding: '22px', borderRadius: '24px' }}
              />
              {step !== 'feedback' && (
                <button
                  onClick={() => handleAnswer(selectedOption)}
                  disabled={!selectedOption}
                  className="app-button app-button--primary"
                  style={{ padding: '18px', borderRadius: '20px' }}
                >
                  Submit Answer
                </button>
              )}
            </div>
          ) : (currentQuestion?.type === 'graph_sketch' || currentQuestion?.type === 'teacher_review' || (currentQuestion?.requiresManualGrading && /(draw|sketch|construct)/i.test(currentQuestion?.question || ''))) ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {/* Inline canvas for mobile / non-split-screen layouts so the
                  student always has somewhere to draw AND the export captures ink */}
              {!showSideCanvas && !isTabletCanvasLayout && (
                <ChallengeSketchBoard
                  placement="tablet"
                  questionId={currentQuestion?.id || currentIdx}
                  questionType={currentQuestion?.type === 'short_answer' ? 'teacher_review' : currentQuestion?.type}
                  isSubmitted={step === 'feedback'}
                  showSplitScreen={true}
                  ref={canvasRef}
                />
              )}
              <p style={{ color: '#64748b', fontSize: '0.9rem', textAlign: 'center', margin: 0 }}>
                Draw your answer on the canvas above, then submit for grading.
              </p>
              {step !== 'feedback' ? (
                <button
                  onClick={() => handleAnswer('Graph Submitted')}
                  disabled={isSubmittingCanvas}
                  className="app-button app-button--primary"
                  style={{ padding: '18px', borderRadius: '20px' }}
                >
                  {isSubmittingCanvas ? 'Saving Graph...' : 'Submit Graph for Review'}
                </button>
              ) : (
                <div style={{ textAlign: 'center', padding: '16px', background: '#fef3c7', borderRadius: '16px', color: '#d97706', fontWeight: 800 }}>
                  <Check size={20} style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '8px' }} />
                  Graph Submitted - Pending Review
                </div>
              )}
            </div>
          ) : currentQuestion?.type === 'interactive_grid' ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
              <InteractiveFractionGrid 
                gridConfig={currentQuestion.gridConfig || { type: 'rect', rows: 2, cols: 2 }}
                selectedCells={Array.isArray(step === 'feedback' ? userAnswers[currentIdx] : selectedOption) ? (step === 'feedback' ? userAnswers[currentIdx] : selectedOption) : []}
                onChange={setSelectedOption}
                disabled={step === 'feedback'}
              />
              <p style={{ color: '#64748b', fontSize: '0.95rem', textAlign: 'center', margin: 0, fontWeight: 600 }}>
                {step === 'feedback' ? '' : 'Tap the panels to shade the correct fraction.'}
              </p>
              {step !== 'feedback' && (
                <button 
                  onClick={() => handleAnswer(selectedOption)}
                  disabled={!Array.isArray(selectedOption) || selectedOption.length === 0}
                  className="app-button app-button--primary"
                  style={{ padding: '18px', borderRadius: '20px', width: '100%', maxWidth: '300px' }}
                >
                  Submit Shading
                </button>
              )}
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '12px' }}>
              {displayOptions.map((opt, i) => {
                const optText = getOptionText(opt);
                const optImage = getOptionImage(opt);
                const isSelected = selectedOptionIdx === i;

                let status = 'default';
                if (step === 'feedback') {
                  const effectiveAnswer = currentQuestion._shuffledAnswer !== undefined ? currentQuestion._shuffledAnswer : currentQuestion.answer;
                  const isCorrectChoice = answersMatch(optText, effectiveAnswer) || (currentQuestion._shuffledAnswer === undefined && currentQuestion.isManual && String(i) === String(currentQuestion.answer));
                  if (isCorrectChoice) status = 'correct';
                  else if (isSelected) status = 'wrong';
                }

                const hasImage = !!optImage;
                return (
                  <button
                    key={i}
                    onClick={() => step !== 'feedback' && handleAnswer(optText, i)}
                    aria-disabled={isFeedback}
                    className={`app-option-card ${status !== 'default' ? `app-option-card--${status}` : isSelected ? 'app-option-card--selected' : ''}`}
                    style={{
                      padding: hasImage ? '16px' : '16px 28px',
                      textAlign: 'left',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '16px',
                      border: '2px solid transparent',
                      transition: 'all 0.2s',
                      cursor: step === 'feedback' ? 'default' : 'pointer',
                      borderRadius: hasImage ? '24px' : '100px',
                      background: status === 'correct' ? '#f0fdf4' : status === 'wrong' ? '#fef2f2' : isSelected ? '#f5f3ff' : '#fff',
                      boxShadow: status === 'correct' ? '0 0 0 2px #10b981' : status === 'wrong' ? '0 0 0 2px #ef4444' : isSelected ? '0 0 0 2px #6366f1' : '0 4px 12px rgba(0,0,0,0.03)'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: 1, minWidth: 0 }}>
                      <div style={{
                        width: '34px', height: '34px', borderRadius: '50%',
                        background: status === 'correct' ? '#10b981' : status === 'wrong' ? '#ef4444' : isSelected ? '#6366f1' : '#f1f5f9',
                        color: isSelected || status !== 'default' ? 'white' : '#64748b',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontFamily: '"Inter", sans-serif', fontWeight: 700, fontSize: '0.85rem', flexShrink: 0,
                        letterSpacing: '0.02em',
                      }}>
                        {String.fromCharCode(65 + i)}
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        {(!hasImage || (optText && optText !== String.fromCharCode(65 + i))) && (
                          <MathView content={optText} style={{ fontWeight: 500, fontSize: '1.05rem', color: '#1e1b4b' }} />
                        )}
                        {hasImage && (
                          <img
                            src={optImage}
                            alt={`Option ${String.fromCharCode(65 + i)}`}
                            onClick={(e) => { e.stopPropagation(); setZoomImage(optImage); }}
                            style={{ width: '100%', maxWidth: '320px', maxHeight: '220px', objectFit: 'contain', marginTop: optText && optText !== String.fromCharCode(65 + i) ? '8px' : 0, display: 'block', borderRadius: '12px', background: '#fff', border: '1px solid #f1f5f9', cursor: 'zoom-in' }}
                          />
                        )}
                      </div>
                    </div>
                    <div style={{ flexShrink: 0 }}>
                      {status === 'correct' && <CheckCircle2 size={24} style={{ color: '#10b981' }} />}
                      {status === 'wrong' && <XCircle size={24} style={{ color: '#ef4444' }} />}
                    </div>
                  </button>
                );
              })}
            </div>
          )}

          {step === 'feedback' && (() => {
            const isPendingReview = currentQuestion?.type === 'graph_sketch' || currentQuestion?.type === 'teacher_review' || currentQuestion?.requiresManualGrading === true;
            const palette = isPendingReview
              ? { accent: '#f59e0b', text: '#78350f', iconBg: '#fef3c7', barBg: '#fef9e7', shadow: 'rgba(245,158,11,0.18)', label: 'Submitted for review', icon: <Clock size={32} color="#f59e0b" /> }
              : isCorrect
                ? { accent: '#10b981', text: '#065f46', iconBg: '#d1fae5', barBg: '#ecfdf5', shadow: 'rgba(16,185,129,0.20)', label: 'Correct', icon: <CheckCircle2 size={32} color="#10b981" /> }
                : { accent: '#ef4444', text: '#7f1d1d', iconBg: '#fee2e2', barBg: '#fef2f2', shadow: 'rgba(239,68,68,0.18)', label: 'Not quite', icon: <XCircle size={32} color="#ef4444" /> };
            const isLast = currentIdx === TOTAL_QUESTIONS - 1;
            return (
              <motion.div
                ref={feedbackRef}
                initial={{ opacity: 0, y: 8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ type: 'spring', stiffness: 320, damping: 26 }}
                style={{
                  marginTop: '10px',
                  padding: '36px 32px 34px',
                  borderRadius: '24px',
                  background: '#fff',
                  border: '1px solid rgba(15, 23, 42, 0.06)',
                  boxShadow: `0 18px 40px ${palette.shadow}, 0 1px 0 rgba(15,23,42,0.02)`,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '16px',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'visible',
                  flexShrink: 0,
                }}
              >
                {/* Top accent strip in the state colour */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: palette.accent, borderRadius: '24px 24px 0 0' }} />

                {/* Icon in a tinted circle */}
                <motion.div
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 380, damping: 18, delay: 0.05 }}
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: palette.iconBg,
                    display: 'grid',
                    placeItems: 'center',
                  }}
                >
                  {palette.icon}
                </motion.div>

                {/* Title */}
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: palette.text, letterSpacing: '-0.01em', lineHeight: 1 }}>
                  {palette.label}
                </div>

                {/* Thin animated countdown bar */}
                <div style={{ width: '180px', height: '3px', background: palette.barBg, borderRadius: '999px', overflow: 'hidden' }}>
                  <motion.div
                    key={`countdown-bar-${currentIdx}`}
                    initial={{ width: '100%' }}
                    animate={{ width: '0%' }}
                    transition={{ duration: 3, ease: 'linear' }}
                    style={{ height: '100%', background: palette.accent }}
                  />
                </div>

                {/* Small countdown label */}
                <div style={{ fontSize: '0.68rem', fontWeight: 800, color: palette.text, opacity: 0.55, textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                  {isLast
                    ? (countdown > 0 ? `Finishing in ${countdown}` : 'Finishing')
                    : (countdown > 0 ? `Next in ${countdown}` : 'Next')}
                </div>

                {/* Purple gradient pill Next button */}
                <button
                  onClick={nextQuestion}
                  style={{
                    marginTop: '4px',
                    minHeight: '56px',
                    padding: '16px 34px',
                    borderRadius: '22px',
                    fontSize: '1.05rem',
                    lineHeight: 1,
                    fontWeight: 800,
                    background: 'linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)',
                    color: '#fff',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 14px 28px rgba(124, 58, 237, 0.32), 0 4px 8px rgba(124, 58, 237, 0.18)',
                    letterSpacing: '0.01em',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '12px',
                    flexShrink: 0,
                    position: 'relative',
                    zIndex: 1,
                    transition: 'transform 0.15s ease, box-shadow 0.15s ease',
                  }}
                  onMouseDown={(e) => { e.currentTarget.style.transform = 'scale(0.97)'; }}
                  onMouseUp={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
                >
                  {isLast ? 'Finish' : 'Next'}
                  <ArrowRight size={20} strokeWidth={2.5} />
                </button>
              </motion.div>
            );
          })()}

          {/* Sketch pad — portrait layout: below the answer input */}
          {isTabletCanvasLayout && (
            <ChallengeSketchBoard
              placement="tablet"
              questionId={currentQuestion?.id || currentIdx}
              questionType={currentQuestion?.type}
              isSubmitted={step === 'feedback'}
              showSplitScreen={showSplitScreen}
              ref={canvasRef}
            />
          )}
        </div>

        {/* Right Side: Working Out Canvas */}
        {showSideCanvas && (
          <ChallengeSketchBoard
            placement="side"
            questionId={currentQuestion?.id || currentIdx}
            questionType={currentQuestion?.type}
            isSubmitted={step === 'feedback'}
            showSplitScreen={showSplitScreen}
            fillAvailableHeight
            scrollProxyHandlers={isFeedback ? {
              onWheel: handleSideCanvasWheel,
              onTouchStart: handleSideCanvasTouchStart,
              onTouchMove: handleSideCanvasTouchMove,
              onTouchEnd: resetSideCanvasTouchScroll,
              onTouchCancel: resetSideCanvasTouchScroll,
            } : undefined}
            ref={canvasRef}
          />
        )}
      </div>

      {/* Fullscreen zoom for graph-choice option images */}
      <AnimatePresence>
        {zoomImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomImage(null)}
            style={{ position: 'fixed', inset: 0, zIndex: 100000, background: 'rgba(15,23,42,0.88)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px', cursor: 'zoom-out' }}
          >
            <motion.img
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              src={zoomImage}
              alt="Enlarged option"
              onClick={(e) => e.stopPropagation()}
              style={{ maxWidth: '92vw', maxHeight: '88vh', objectFit: 'contain', borderRadius: '16px', background: '#fff', padding: '12px', boxShadow: '0 25px 60px rgba(0,0,0,0.5)' }}
            />
            <button
              onClick={() => setZoomImage(null)}
              style={{ position: 'absolute', top: '20px', right: '20px', width: '44px', height: '44px', borderRadius: '50%', border: 'none', background: 'rgba(255,255,255,0.15)', color: '#fff', fontSize: '1.4rem', fontWeight: 800, cursor: 'pointer' }}
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ChallengeQuizView;
