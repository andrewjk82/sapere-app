import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft, ArrowRight, CheckCircle2, XCircle, Clock,
  Lightbulb, RotateCcw, Trophy, ChevronDown, ChevronUp, Flag,
} from 'lucide-react';
import { collection, doc, getDoc, getDocs, query, setDoc, serverTimestamp, where } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { useAuth } from '../../context/AuthContext';
import { useToast } from '../../context/ToastContext';
import MathView from '../MathView';
import MathInput from '../MathInput';
import ChallengeSketchBoard from '../challenge/ChallengeSketchBoard';
import { gradeQuestion } from '../../utils/answerMatching';
import { parseSolutionSteps } from '../../utils/solutionSteps';
import { MATH_SYMBOLS } from '../../utils/challengeUtils';

// ─── Helpers ─────────────────────────────────────────────────────────────────

const shuffleArray = (arr) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const shuffleOptions = (q) => {
  if (!q.options?.length || q.type === 'short_answer') return q;
  const order = shuffleArray(q.options.map((_, i) => i));
  const newOptions = order.map(i => q.options[i]);
  const correctIdx = Number(q.answer);
  const newAnswer = Number.isInteger(correctIdx) ? String(order.indexOf(correctIdx)) : q.answer;
  return { ...q, options: newOptions, answer: newAnswer };
};

const useViewportWidth = () => {
  const [w, setW] = useState(() => window.innerWidth);
  useEffect(() => {
    const h = () => setW(window.innerWidth);
    window.addEventListener('resize', h);
    return () => window.removeEventListener('resize', h);
  }, []);
  return w;
};

const fmt = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;

// ─── Timer badge ──────────────────────────────────────────────────────────────
const TimerBadge = ({ seconds, total }) => {
  const pct = Math.max(0, seconds / total);
  const urgent = seconds <= 15;
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: '6px',
      padding: '6px 12px', borderRadius: '999px',
      background: urgent ? '#fef2f2' : '#f1f5f9',
      border: `1.5px solid ${urgent ? '#fecaca' : '#e2e8f0'}`,
      fontWeight: 900, fontSize: '0.9rem',
      color: urgent ? '#dc2626' : '#374151',
      transition: 'all 0.3s',
    }}>
      <Clock size={14} color={urgent ? '#dc2626' : '#64748b'} />
      <span style={{ fontVariantNumeric: 'tabular-nums', minWidth: '38px' }}>{fmt(seconds)}</span>
    </div>
  );
};

// ─── Step-by-step solution ────────────────────────────────────────────────────
const SolutionSteps = ({ question, userAnswer, isCorrect }) => {
  const [expanded, setExpanded] = useState(true);
  const steps = parseSolutionSteps(question);
  const [revealedSteps, setRevealedSteps] = useState(0);

  useEffect(() => { setRevealedSteps(0); }, [question?.id]);

  const isMC = question?.options?.length > 0 && question.type !== 'short_answer';
  const correctDisplay = isMC
    ? (question.options?.[Number(question.answer)] ?? String(question.answer))
    : String(question.answer ?? '');
  const userDisplay = isMC
    ? (question.options?.[Number(userAnswer)] ?? String(userAnswer ?? '—'))
    : String(userAnswer ?? '—');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {/* Your answer vs correct */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
        <div style={{
          padding: '14px', borderRadius: '16px',
          background: isCorrect ? '#f0fdf4' : '#fef2f2',
          border: `1px solid ${isCorrect ? '#bbf7d0' : '#fecaca'}`,
        }}>
          <div style={{ fontSize: '0.65rem', fontWeight: 800, color: isCorrect ? '#16a34a' : '#dc2626', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px' }}>Your answer</div>
          <MathView content={userDisplay} style={{ fontWeight: 700, color: '#1e293b', fontSize: '0.95rem' }} />
        </div>
        <div style={{ padding: '14px', borderRadius: '16px', background: '#f0fdf4', border: '1px solid #bbf7d0' }}>
          <div style={{ fontSize: '0.65rem', fontWeight: 800, color: '#16a34a', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px' }}>Correct answer</div>
          <MathView content={correctDisplay} style={{ fontWeight: 700, color: '#166534', fontSize: '0.95rem' }} />
        </div>
      </div>

      {/* Step-by-step */}
      {steps.length > 0 && (
        <div style={{ background: '#f8fafc', borderRadius: '18px', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
          <button
            onClick={() => setExpanded(e => !e)}
            style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 18px', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 800, color: '#1e1b4b', fontSize: '0.88rem' }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Lightbulb size={15} color="#7c3aed" /> Step-by-step solution
            </span>
            {expanded ? <ChevronUp size={15} color="#94a3b8" /> : <ChevronDown size={15} color="#94a3b8" />}
          </button>

          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }}
                style={{ overflow: 'hidden' }}
              >
                <div style={{ padding: '0 18px 18px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {steps.map((step, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: i <= revealedSteps ? 1 : 0.15, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      style={{
                        display: 'grid', gridTemplateColumns: '28px 1fr', gap: '12px',
                        alignItems: 'flex-start',
                        cursor: i > revealedSteps ? 'pointer' : 'default',
                      }}
                      onClick={() => { if (i > revealedSteps) setRevealedSteps(i); }}
                    >
                      <div style={{
                        width: '28px', height: '28px', borderRadius: '50%', flexShrink: 0,
                        background: i <= revealedSteps ? '#7c3aed' : '#e2e8f0',
                        color: i <= revealedSteps ? '#fff' : '#94a3b8',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontWeight: 900, fontSize: '0.75rem', transition: 'all 0.2s',
                      }}>
                        {i + 1}
                      </div>
                      <div>
                        {step.explanation && (
                          <div style={{ fontSize: '0.82rem', color: '#475569', fontWeight: 600, marginBottom: step.workingOut ? '6px' : 0, lineHeight: 1.5 }}>
                            {step.explanation}
                          </div>
                        )}
                        {step.workingOut && i <= revealedSteps && (
                          <div style={{ background: '#fff', borderRadius: '10px', padding: '8px 12px', border: '1px solid #e0e7ff' }}>
                            <MathView content={`$${step.workingOut}$`} style={{ fontWeight: 700, color: '#1e1b4b', fontSize: '0.9rem' }} />
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}

                  {revealedSteps < steps.length - 1 && (
                    <button
                      onClick={() => setRevealedSteps(s => Math.min(s + 1, steps.length - 1))}
                      style={{ alignSelf: 'flex-start', padding: '7px 14px', borderRadius: '10px', border: 'none', background: '#ede9fe', color: '#7c3aed', fontWeight: 800, fontSize: '0.8rem', cursor: 'pointer' }}
                    >
                      Show next step
                    </button>
                  )}
                  {revealedSteps >= steps.length - 1 && steps.length > 1 && (
                    <button
                      onClick={() => setRevealedSteps(steps.length - 1)}
                      style={{ alignSelf: 'flex-start', padding: '7px 14px', borderRadius: '10px', border: 'none', background: '#f0fdf4', color: '#16a34a', fontWeight: 800, fontSize: '0.8rem', cursor: 'default' }}
                    >
                      All steps shown ✓
                    </button>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      {/* Plain solution fallback */}
      {steps.length === 0 && question?.s && (
        <div style={{ padding: '14px 18px', borderRadius: '16px', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
          <div style={{ fontSize: '0.68rem', fontWeight: 800, color: '#7c3aed', textTransform: 'uppercase', marginBottom: '8px' }}>Solution</div>
          <MathView content={question.s} style={{ fontSize: '0.88rem', lineHeight: 1.6, color: '#1e293b' }} />
        </div>
      )}
    </div>
  );
};

// ─── Results screen ───────────────────────────────────────────────────────────
const ResultsScreen = ({ questions, answers, typeLabel, onRestart, onBack, onReview }) => {
  const correct = answers.filter(a => a.correct).length;
  const total = answers.length;
  const pct = Math.round((correct / total) * 100);

  const emoji = pct >= 90 ? '🏆' : pct >= 70 ? '🎉' : pct >= 50 ? '💪' : '📚';
  const message = pct >= 90 ? 'Outstanding work!' : pct >= 70 ? 'Great job!' : pct >= 50 ? 'Good effort — keep going!' : 'Keep practising — you\'ve got this!';

  return (
    <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '520px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', padding: '32px 24px', borderRadius: '28px', background: pct >= 70 ? 'linear-gradient(135deg, #f0fdf4, #dcfce7)' : 'linear-gradient(135deg, #f5f3ff, #ede9fe)', border: `1.5px solid ${pct >= 70 ? '#86efac' : '#c4b5fd'}` }}>
        <div style={{ fontSize: '3rem', marginBottom: '8px' }}>{emoji}</div>
        <div style={{ fontSize: '2.5rem', fontWeight: 900, color: pct >= 70 ? '#15803d' : '#7c3aed', marginBottom: '4px' }}>{pct}%</div>
        <div style={{ fontWeight: 900, fontSize: '1.1rem', color: '#1e1b4b', marginBottom: '4px' }}>{message}</div>
        <div style={{ color: '#64748b', fontWeight: 700, fontSize: '0.88rem' }}>
          {correct} out of {total} correct · {typeLabel}
        </div>
      </div>

      {/* Q breakdown dots */}
      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', justifyContent: 'center' }}>
        {answers.map((a, i) => (
          <div key={i} title={`Q${i + 1}`} style={{
            width: '32px', height: '32px', borderRadius: '10px',
            background: a.correct ? '#bbf7d0' : '#fecaca',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '0.7rem', fontWeight: 900, color: a.correct ? '#15803d' : '#dc2626',
          }}>
            {i + 1}
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <button onClick={onReview} style={{ padding: '14px', borderRadius: '16px', border: 'none', background: '#ede9fe', color: '#7c3aed', fontWeight: 900, fontSize: '0.95rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
          <Lightbulb size={17} /> Review step-by-step solutions
        </button>
        <button onClick={onRestart} style={{ padding: '14px', borderRadius: '16px', border: '1px solid #e2e8f0', background: '#fff', color: '#374151', fontWeight: 800, fontSize: '0.95rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
          <RotateCcw size={17} /> Try again
        </button>
        <button onClick={onBack} style={{ padding: '14px', borderRadius: '16px', border: 'none', background: '#f1f5f9', color: '#64748b', fontWeight: 800, fontSize: '0.95rem', cursor: 'pointer' }}>
          Back to types
        </button>
      </div>
    </motion.div>
  );
};

// ─── Review mode (post-session step-by-step) ──────────────────────────────────
const ReviewMode = ({ questions, answers, onDone }) => {
  const [idx, setIdx] = useState(0);
  const q = questions[idx];
  const a = answers[idx];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      {/* header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <button onClick={onDone} style={{ width: '36px', height: '36px', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#fff', cursor: 'pointer', display: 'grid', placeItems: 'center', color: '#64748b' }}>
          <ArrowLeft size={16} />
        </button>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '0.68rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase' }}>Review</div>
          <div style={{ fontWeight: 900, color: '#1e1b4b' }}>Question {idx + 1} of {questions.length}</div>
        </div>
        <div style={{ display: 'flex', gap: '6px' }}>
          <button disabled={idx === 0} onClick={() => setIdx(i => i - 1)} style={{ width: '34px', height: '34px', borderRadius: '10px', border: '1px solid #e2e8f0', background: '#fff', cursor: idx === 0 ? 'not-allowed' : 'pointer', display: 'grid', placeItems: 'center', color: idx === 0 ? '#cbd5e1' : '#475569' }}>
            <ArrowLeft size={14} />
          </button>
          <button disabled={idx + 1 >= questions.length} onClick={() => setIdx(i => i + 1)} style={{ width: '34px', height: '34px', borderRadius: '10px', border: '1px solid #e2e8f0', background: '#fff', cursor: idx + 1 >= questions.length ? 'not-allowed' : 'pointer', display: 'grid', placeItems: 'center', color: idx + 1 >= questions.length ? '#cbd5e1' : '#475569' }}>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>

      {/* dots */}
      <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
        {answers.map((ans, i) => (
          <button key={i} onClick={() => setIdx(i)} style={{ width: '26px', height: '7px', borderRadius: '999px', border: 'none', cursor: 'pointer', background: i === idx ? '#7c3aed' : ans.correct ? '#86efac' : '#fca5a5', opacity: i === idx ? 1 : 0.6 }} />
        ))}
      </div>

      {/* question */}
      <div style={{ padding: '20px', borderRadius: '20px', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
        <div style={{ fontSize: '0.68rem', fontWeight: 800, color: '#7c3aed', textTransform: 'uppercase', marginBottom: '10px' }}>
          {q?.source || q?.t || ''}
        </div>
        <MathView content={q?.q || q?.question || ''} style={{ fontSize: '1rem', lineHeight: 1.7, color: '#1e1b4b', fontWeight: 500 }} />
      </div>

      {q && <SolutionSteps question={{ ...q, question: q.q || q.question, answer: q.a || q.answer, s: q.s || q.solution, solutionSteps: q.solutionSteps }} userAnswer={a?.userAnswer} isCorrect={a?.correct} />}
    </div>
  );
};

// ─── Main session ─────────────────────────────────────────────────────────────
const HscTypePracticeSession = ({ type, profile, initialStats, onBack }) => {
  const { user } = useAuth();
  const { showToast } = useToast();
  const viewportW = useViewportWidth();
  const isWide = viewportW >= 980;

  const [stage, setStage] = useState('loading'); // loading | quiz | result | review
  const [questions, setQuestions] = useState([]);
  const [idx, setIdx] = useState(0);
  const [draft, setDraft] = useState(null);
  const [showHint, setShowHint] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(null);
  const [questionStartTime, setQuestionStartTime] = useState(null);
  const sketchRef = useRef(null);
  const mathInputRef = useRef(null);

  // ── Load questions for this type ───────────────────────────────────────────
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        // Load index doc to get question IDs
        const indexSnap = await getDoc(doc(db, 'question_type_index', type.slug));
        if (!indexSnap.exists() || !cancelled === false) {
          // Fallback: query directly
          const qSnap = await getDocs(query(collection(db, 'questions'), where('questionType', '==', type.slug)));
          if (cancelled) return;
          const qs = shuffleArray(qSnap.docs.map(d => ({ id: d.id, ...d.data() }))).slice(0, 15).map(shuffleOptions);
          setQuestions(qs);
          setStage(qs.length > 0 ? 'quiz' : 'empty');
          return;
        }
        const { ids = [] } = indexSnap.data();
        if (cancelled) return;

        // Fetch up to 10 random questions from the index
        const sample = shuffleArray(ids).slice(0, 10);
        const fetched = await Promise.all(sample.map(id => getDoc(doc(db, 'questions', id))));
        if (cancelled) return;

        const qs = fetched
          .filter(s => s.exists())
          .map(s => shuffleOptions({ id: s.id, ...s.data() }));

        setQuestions(qs);
        setStage(qs.length > 0 ? 'quiz' : 'empty');
      } catch (e) {
        console.warn('Failed to load questions for type:', e);
        if (!cancelled) setStage('empty');
      }
    })();
    return () => { cancelled = true; };
  }, [type.slug]);

  const q = questions[idx];
  const isMC = q && q.options?.length > 0 && q.type !== 'short_answer';
  const timeLimit = q?.timeLimit || null; // null = no timer for this question

  // ── Reset per question ─────────────────────────────────────────────────────
  useEffect(() => {
    if (!q) return;
    setDraft(isMC ? null : '');
    setShowHint(false);
    setShowFeedback(false);
    setTimeLeft(timeLimit);
    setQuestionStartTime(timeLimit ? Date.now() : null);
  }, [idx, q?.id]);

  // ── Countdown timer (only runs when question has a timeLimit) ──────────────
  const showFeedbackRef = useRef(showFeedback);
  useEffect(() => { showFeedbackRef.current = showFeedback; }, [showFeedback]);

  useEffect(() => {
    if (stage !== 'quiz' || !questionStartTime || !timeLimit || showFeedback) return;
    const endTime = questionStartTime + timeLimit * 1000;
    const timer = setInterval(() => {
      if (showFeedbackRef.current) { clearInterval(timer); return; }
      const rem = Math.max(0, Math.ceil((endTime - Date.now()) / 1000));
      setTimeLeft(rem);
      if (rem <= 0) {
        clearInterval(timer);
        if (!showFeedbackRef.current) submitAnswer('');
      }
    }, 200);
    return () => clearInterval(timer);
  }, [questionStartTime, showFeedback, timeLimit, stage]);

  // ── Submit ─────────────────────────────────────────────────────────────────
  const submitAnswer = useCallback((forcedAnswer) => {
    const userAnswer = forcedAnswer !== undefined ? forcedAnswer : draft;
    if (userAnswer === null || userAnswer === undefined || userAnswer === '') {
      if (isMC) { showToast('Select an answer first.', 'info'); return; }
    }
    const question = { ...q, question: q.q || q.question, answer: q.a || q.answer };
    const { correct } = gradeQuestion(question, userAnswer);
    const timedOut = forcedAnswer === '';
    setAnswers(prev => [...prev, { userAnswer, correct, timedOut, questionId: q.id }]);
    setShowFeedback(true);
  }, [draft, q, isMC, showToast]);

  // ── Advance ────────────────────────────────────────────────────────────────
  const advance = useCallback(async () => {
    if (idx + 1 < questions.length) {
      setIdx(i => i + 1);
    } else {
      // Session complete — save stats
      const newAnswers = [...answers];
      const correct = newAnswers.filter(a => a.correct).length;
      const total = newAnswers.length;
      const updatedStats = {
        correct: (initialStats?.correct || 0) + correct,
        total: (initialStats?.total || 0) + total,
        lastPlayedAt: serverTimestamp(),
      };
      if (user?.uid) {
        try {
          await setDoc(
            doc(db, 'users', user.uid, 'hsc_type_stats', 'main'),
            { [type.slug]: updatedStats },
            { merge: true }
          );
        } catch (e) { console.warn('Failed to save hsc type stats:', e); }
      }
      setStage('result');
    }
  }, [idx, questions.length, answers, initialStats, user?.uid, type.slug]);

  // ── Restart ────────────────────────────────────────────────────────────────
  const restart = useCallback(() => {
    setIdx(0);
    setAnswers([]);
    setDraft(null);
    setShowFeedback(false);
    setStage('loading');
    // Re-shuffle by re-triggering the load effect
    setQuestions(prev => shuffleArray(prev).slice(0, 10).map(shuffleOptions));
    setTimeout(() => setStage('quiz'), 50);
  }, []);

  // ── Render loading ─────────────────────────────────────────────────────────
  if (stage === 'loading') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '300px', gap: '12px' }}>
        <div style={{ width: '36px', height: '36px', border: '3px solid #e2e8f0', borderTopColor: '#7c3aed', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
        <div style={{ color: '#64748b', fontWeight: 700 }}>Loading questions…</div>
      </div>
    );
  }

  if (stage === 'empty') {
    return (
      <div style={{ textAlign: 'center', padding: '48px', color: '#94a3b8' }}>
        <div style={{ fontWeight: 900, fontSize: '1.1rem', marginBottom: '8px' }}>No questions yet</div>
        <div style={{ fontWeight: 600 }}>Run the import script to populate this type.</div>
        <button onClick={() => onBack(null)} style={{ marginTop: '20px', padding: '10px 20px', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#fff', cursor: 'pointer', fontWeight: 800 }}>
          Back
        </button>
      </div>
    );
  }

  if (stage === 'result') {
    const correct = answers.filter(a => a.correct).length;
    const total = answers.length;
    const updatedStats = {
      correct: (initialStats?.correct || 0) + correct,
      total: (initialStats?.total || 0) + total,
    };
    return (
      <ResultsScreen
        questions={questions}
        answers={answers}
        typeLabel={type.label}
        onRestart={restart}
        onBack={() => onBack(updatedStats)}
        onReview={() => setStage('review')}
      />
    );
  }

  if (stage === 'review') {
    return <ReviewMode questions={questions} answers={answers} onDone={() => setStage('result')} />;
  }

  if (!q) return null;

  const isCorrect = showFeedback ? answers[answers.length - 1]?.correct : null;

  // ── Quiz UI ────────────────────────────────────────────────────────────────
  const quizPanel = (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', flex: 1, minWidth: 0 }}>
      {/* header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
        <button onClick={() => onBack(null)} style={{ width: '36px', height: '36px', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#fff', cursor: 'pointer', display: 'grid', placeItems: 'center', color: '#64748b', flexShrink: 0 }}>
          <ArrowLeft size={16} />
        </button>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '0.68rem', fontWeight: 800, color: '#7c3aed', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{type.label}</div>
          <div style={{ fontWeight: 900, color: '#1e1b4b', fontSize: '0.95rem' }}>Question {idx + 1} of {questions.length}</div>
        </div>
        {!showFeedback && timeLimit && <TimerBadge seconds={timeLeft ?? timeLimit} total={timeLimit} />}
      </div>

      {/* progress */}
      <div style={{ display: 'flex', gap: '4px' }}>
        {questions.map((_, i) => {
          const a = answers[i];
          const bg = i < answers.length ? (a?.correct ? '#86efac' : '#fca5a5') : i === idx ? '#c4b5fd' : '#e2e8f0';
          return <div key={i} style={{ flex: 1, height: '6px', borderRadius: '999px', background: bg, transition: 'background 0.2s' }} />;
        })}
      </div>

      {/* question */}
      <div style={{ padding: '20px', borderRadius: '20px', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
        {q.source && (
          <div style={{ fontSize: '0.65rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>{q.source}</div>
        )}
        <MathView content={q.q || q.question || ''} style={{ fontSize: '1rem', lineHeight: 1.75, color: '#1e1b4b', fontWeight: 500 }} />
      </div>

      {/* hint */}
      {!showFeedback && q.h && (
        <div>
          {!showHint ? (
            <button onClick={() => setShowHint(true)} style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '7px 14px', borderRadius: '10px', border: '1px solid #e0e7ff', background: '#f5f3ff', color: '#7c3aed', fontWeight: 800, fontSize: '0.8rem', cursor: 'pointer' }}>
              <Lightbulb size={13} /> Show hint
            </button>
          ) : (
            <div style={{ padding: '12px 16px', borderRadius: '12px', background: '#fefce8', border: '1px solid #fde68a' }}>
              <div style={{ fontSize: '0.68rem', fontWeight: 800, color: '#b45309', textTransform: 'uppercase', marginBottom: '4px' }}>Hint</div>
              <MathView content={q.h} style={{ fontSize: '0.85rem', color: '#92400e', fontWeight: 600 }} />
            </div>
          )}
        </div>
      )}

      {/* MC options */}
      {isMC && !showFeedback && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {q.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => setDraft(String(i))}
              style={{
                padding: '13px 16px', borderRadius: '14px', border: '2px solid', cursor: 'pointer', textAlign: 'left', fontWeight: 700, fontSize: '0.9rem', transition: 'all 0.15s',
                borderColor: draft === String(i) ? '#7c3aed' : '#e2e8f0',
                background: draft === String(i) ? '#f5f3ff' : '#fff',
                color: draft === String(i) ? '#7c3aed' : '#374151',
              }}
            >
              <span style={{ fontWeight: 900, marginRight: '8px', color: draft === String(i) ? '#7c3aed' : '#94a3b8' }}>
                {String.fromCharCode(65 + i)}.
              </span>
              <MathView content={String(opt)} inline style={{ display: 'inline' }} />
            </button>
          ))}
        </div>
      )}

      {/* Text input */}
      {!isMC && !showFeedback && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            {MATH_SYMBOLS.slice(0, 10).map(sym => (
              <button key={sym.label} onClick={() => { if (mathInputRef.current?.insert) mathInputRef.current.insert(sym.latex); }} style={{ padding: '5px 10px', borderRadius: '8px', border: '1px solid #e2e8f0', background: '#fff', cursor: 'pointer', fontWeight: 800, fontSize: '0.85rem', color: '#475569' }} title={sym.label}>{sym.label}</button>
            ))}
          </div>
          <MathInput ref={mathInputRef} value={draft || ''} onChange={setDraft} placeholder="Type your answer…" />
        </div>
      )}

      {/* Feedback */}
      {showFeedback && (
        <AnimatePresence>
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
            {/* result banner */}
            <div style={{
              padding: '12px 16px', borderRadius: '14px', marginBottom: '12px',
              background: isCorrect ? '#f0fdf4' : answers[answers.length - 1]?.timedOut ? '#fffbeb' : '#fef2f2',
              border: `1.5px solid ${isCorrect ? '#86efac' : answers[answers.length - 1]?.timedOut ? '#fde68a' : '#fca5a5'}`,
              display: 'flex', alignItems: 'center', gap: '10px',
            }}>
              {isCorrect ? <CheckCircle2 size={18} color="#16a34a" /> : <XCircle size={18} color={answers[answers.length - 1]?.timedOut ? '#d97706' : '#dc2626'} />}
              <span style={{ fontWeight: 900, color: isCorrect ? '#15803d' : answers[answers.length - 1]?.timedOut ? '#b45309' : '#dc2626' }}>
                {isCorrect ? 'Correct!' : answers[answers.length - 1]?.timedOut ? "Time's up!" : 'Not quite — check the solution below'}
              </span>
            </div>

            <SolutionSteps
              question={{ ...q, question: q.q || q.question, answer: q.a || q.answer, s: q.s || q.solution }}
              userAnswer={answers[answers.length - 1]?.userAnswer}
              isCorrect={isCorrect}
            />

            <button
              onClick={advance}
              style={{ width: '100%', marginTop: '14px', padding: '14px', borderRadius: '16px', border: 'none', background: 'linear-gradient(135deg, #7c3aed, #4f46e5)', color: '#fff', fontWeight: 900, fontSize: '0.95rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
            >
              {idx + 1 < questions.length ? (<>Next question <ArrowRight size={16} /></>) : (<><Trophy size={16} /> See results</>)}
            </button>
          </motion.div>
        </AnimatePresence>
      )}

      {/* Submit button */}
      {!showFeedback && (
        <button
          onClick={() => submitAnswer()}
          disabled={isMC ? draft === null : !draft?.trim()}
          style={{
            padding: '14px', borderRadius: '16px', border: 'none', cursor: (isMC ? draft !== null : draft?.trim()) ? 'pointer' : 'not-allowed',
            background: (isMC ? draft !== null : draft?.trim()) ? 'linear-gradient(135deg, #7c3aed, #4f46e5)' : '#e2e8f0',
            color: (isMC ? draft !== null : draft?.trim()) ? '#fff' : '#94a3b8',
            fontWeight: 900, fontSize: '0.95rem', transition: 'all 0.2s',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
          }}
        >
          Submit answer
        </button>
      )}
    </div>
  );

  return (
    <div style={{ display: isWide ? 'flex' : 'flex', flexDirection: isWide ? 'row' : 'column', gap: '20px', alignItems: 'flex-start' }}>
      {/* quiz panel */}
      <div style={{ flex: isWide ? '0 0 52%' : 1, maxWidth: isWide ? '52%' : '100%' }}>
        {quizPanel}
      </div>

      {/* sketch board */}
      {isWide && (
        <div style={{ flex: 1, position: 'sticky', top: '16px', minHeight: '500px' }}>
          <ChallengeSketchBoard ref={sketchRef} key={q?.id} showSplitScreen placement="side" />
        </div>
      )}
      {!isWide && !showFeedback && (
        <div style={{ width: '100%', minHeight: '280px' }}>
          <ChallengeSketchBoard ref={sketchRef} key={q?.id} showSplitScreen placement="tablet" />
        </div>
      )}
    </div>
  );
};

export default HscTypePracticeSession;
