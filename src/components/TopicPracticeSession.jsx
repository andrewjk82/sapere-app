import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft, CheckCircle2, XCircle, Zap, BookOpen,
  ChevronRight, Play, RotateCcw, Trophy,
  Lightbulb, Check, X,
} from 'lucide-react';
import { db } from '../firebase/config';
import { collection, query, where, getDocs, doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { useAuth } from '../context/AuthContext';
import MathView from './MathView';
import { answersMatch } from '../utils/answerMatching';
import { MATH_SYMBOLS } from '../utils/challengeUtils';

const XP_PER_TOPIC = 15;

// ── Small helpers ────────────────────────────────────────────────────────────
const gradeQuestion = (q, userAnswer) => {
  if (!q) return false;
  if (q.subQuestions?.length > 0) {
    const subs = q.subQuestions;
    const correct = subs.filter((sq, i) => {
      const ua = userAnswer?.[sq.id ?? i] ?? '';
      if (sq.type === 'multiple_choice') return String(ua) === String(sq.answer);
      return answersMatch(String(ua), String(sq.answer ?? ''));
    });
    return correct.length === subs.length;
  }
  if (!q.answer && q.answer !== 0) return false;
  if (q.type === 'multiple_choice' || (q.options?.length && q.type !== 'short_answer' && q.type !== 'fill_blank')) {
    return String(userAnswer) === String(q.answer);
  }
  if (q.type === 'fill_blank') {
    const blanks = q.blanks || [];
    return blanks.every((b, i) => answersMatch(String(userAnswer?.[i] ?? ''), String(b.answer ?? '')));
  }
  return answersMatch(String(userAnswer ?? ''), String(q.answer));
};

const shortText = (str, max = 80) => {
  if (!str) return '';
  const s = String(str).replace(/\$+/g, '').replace(/\\[a-z]+\{[^}]*\}/g, '').replace(/[{}]/g, '').trim();
  return s.length > max ? s.slice(0, max) + '…' : s;
};

// ── Main component ───────────────────────────────────────────────────────────
const TopicPracticeSession = ({ topic, chapter, profile, onBack }) => {
  const { user } = useAuth();
  const [view, setView] = useState('list'); // 'list' | 'quiz' | 'done'
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [userAnswer, setUserAnswer] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [results, setResults] = useState([]);   // [{correct, answer, q}]
  const [showHint, setShowHint] = useState(false);
  const inputRef = useRef(null);

  // Load questions for this topic
  useEffect(() => {
    let cancelled = false;
    (async () => {
      setLoading(true);
      try {
        const snap = await getDocs(
          query(collection(db, 'questions'), where('chapterId', '==', chapter.id))
        );
        const all = snap.docs
          .map((d) => ({ id: d.id, ...d.data() }))
          .filter((q) => q.isActive !== false && q.topicId === topic.id);
        all.sort((a, b) => String(a.id).localeCompare(String(b.id)));
        if (!cancelled) setQuestions(all);
      } catch (e) {
        console.error('Failed to load topic questions:', e);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, [chapter.id, topic.id]);

  const q = questions[currentIdx];
  const total = questions.length;

  // Detect question type
  const isMC = q && !q.subQuestions?.length && (q.options?.length > 0) && q.type !== 'short_answer' && q.type !== 'fill_blank';
  const isShort = q?.type === 'short_answer' || (!q?.options?.length && !q?.subQuestions?.length && !q?.blanks?.length && q?.type !== 'fill_blank');
  const isFill = q?.type === 'fill_blank';
  const hasSubs = q?.subQuestions?.length > 0;

  // Init answer state when question changes
  useEffect(() => {
    setSubmitted(false);
    setIsCorrect(null);
    setShowHint(false);
    if (q) {
      if (hasSubs) {
        const init = {};
        (q.subQuestions || []).forEach((sq, i) => { init[sq.id ?? i] = ''; });
        setUserAnswer(init);
      } else if (isFill) {
        setUserAnswer((q.blanks || []).map(() => ''));
      } else {
        setUserAnswer('');
      }
    }
  }, [currentIdx, questions]);

  const handleSubmit = () => {
    if (submitted) return;
    const correct = gradeQuestion(q, userAnswer);
    setIsCorrect(correct);
    setSubmitted(true);
    setResults((prev) => [...prev, { correct, userAnswer, q }]);
  };

  const handleNext = () => {
    if (currentIdx < total - 1) {
      setCurrentIdx((i) => i + 1);
    } else {
      finishSession();
    }
  };

  const finishSession = useCallback(async () => {
    const correct = results.filter((r) => r.correct).length + (isCorrect ? 1 : 0);
    const total_ = results.length + 1;
    const pct = Math.round((correct / total_) * 100);
    const xp = pct >= 80 ? XP_PER_TOPIC : pct >= 50 ? Math.round(XP_PER_TOPIC * 0.6) : Math.round(XP_PER_TOPIC * 0.2);

    // Save progress
    if (user?.uid) {
      try {
        const ref = doc(db, 'topicProgress', `${user.uid}_${chapter.id}_${topic.id}`);
        await setDoc(ref, {
          userId: user.uid,
          chapterId: chapter.id,
          topicId: topic.id,
          progress: pct >= 80 ? 100 : pct,
          correctCount: correct,
          totalCount: total_,
          xpEarned: xp,
          updatedAt: serverTimestamp(),
        }, { merge: true });
      } catch (e) {
        console.error('Failed to save topic progress:', e);
      }
    }

    setView('done');
  }, [results, isCorrect, user, chapter.id, topic.id]);

  const handleRestart = () => {
    setCurrentIdx(0);
    setResults([]);
    setUserAnswer('');
    setSubmitted(false);
    setIsCorrect(null);
    setView('quiz');
  };

  // ── Math keyboard input ───────────────────────────────────────────────────
  const insertSymbol = (sym) => {
    if (hasSubs || isFill) return; // handled inline
    if (sym === '⌫') {
      setUserAnswer((v) => String(v).slice(0, -1));
    } else {
      setUserAnswer((v) => String(v) + sym);
    }
    inputRef.current?.focus();
  };

  // ── Render helpers ───────────────────────────────────────────────────────
  const stateColor = topic.state === 'done' ? '#10b981' : topic.state === 'current' ? '#7c3aed' : '#0ea5e9';

  const backBtn = (label, fn) => (
    <button
      onClick={fn}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: '6px',
        padding: '8px 14px', borderRadius: '12px', border: 'none',
        background: 'rgba(167,139,250,0.1)', color: '#7c3aed',
        fontSize: '0.82rem', fontWeight: 800, cursor: 'pointer',
        marginBottom: '20px',
      }}
    >
      <ArrowLeft size={15} /> {label}
    </button>
  );

  // ── LIST VIEW ─────────────────────────────────────────────────────────────
  if (view === 'list') {
    return (
      <motion.div
        initial={{ opacity: 0, x: 32 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 32 }}
        transition={{ type: 'spring', damping: 26, stiffness: 280 }}
        style={{ maxWidth: '760px', margin: '0 auto' }}
      >
        {backBtn('Back to chapter', onBack)}

        {/* Topic header */}
        <div style={{
          padding: '24px', borderRadius: '22px', marginBottom: '24px',
          background: `linear-gradient(135deg, ${stateColor}15, ${stateColor}08)`,
          border: `1px solid ${stateColor}30`,
        }}>
          <div style={{ fontSize: '0.62rem', fontWeight: 900, letterSpacing: '0.12em', textTransform: 'uppercase', color: stateColor, marginBottom: '6px' }}>
            {topic.code}
          </div>
          <h2 style={{ fontFamily: '"Outfit", sans-serif', fontSize: 'clamp(1.1rem, 3vw, 1.5rem)', fontWeight: 900, color: '#1e1b4b', margin: '0 0 10px' }}>
            {topic.title}
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '0.82rem', fontWeight: 800, color: '#64748b' }}>
              <BookOpen size={13} /> {loading ? '…' : total} question{total !== 1 ? 's' : ''}
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '0.82rem', fontWeight: 800, color: '#f59e0b' }}>
              <Zap size={13} /> Up to {XP_PER_TOPIC} XP
            </span>
            {topic.pct > 0 && (
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '0.82rem', fontWeight: 800, color: stateColor }}>
                <CheckCircle2 size={13} /> {topic.pct}% complete
              </span>
            )}
          </div>
          {topic.pct > 0 && (
            <div style={{ height: '5px', borderRadius: '999px', background: 'rgba(0,0,0,0.06)', marginTop: '12px', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${topic.pct}%`, borderRadius: '999px', background: stateColor }} />
            </div>
          )}
        </div>

        {loading ? (
          <div style={{ textAlign: 'center', padding: '60px', color: '#94a3b8', fontWeight: 700 }}>Loading questions…</div>
        ) : total === 0 ? (
          // Empty state
          <div style={{
            padding: '60px 30px', textAlign: 'center', borderRadius: '22px',
            background: '#fff', border: '1px dashed #e2e8f0',
          }}>
            <BookOpen size={40} style={{ color: '#cbd5e1', margin: '0 auto 12px', display: 'block' }} />
            <div style={{ fontWeight: 800, color: '#475569', fontSize: '1rem' }}>No practice questions yet</div>
            <div style={{ color: '#94a3b8', marginTop: '6px', fontSize: '0.88rem', fontWeight: 600 }}>
              Your teacher will add questions for this topic soon.
            </div>
          </div>
        ) : (
          <>
            {/* Start button */}
            <motion.button
              onClick={() => { setCurrentIdx(0); setResults([]); setView('quiz'); }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                width: '100%', padding: '18px', borderRadius: '18px', border: 'none',
                background: 'linear-gradient(135deg, #a78bfa, #7c3aed)',
                color: '#fff', fontFamily: '"Outfit", sans-serif',
                fontSize: '1.05rem', fontWeight: 900, cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                boxShadow: '0 12px 28px rgba(124,58,237,0.28)',
              }}
            >
              <Play size={20} fill="#fff" />
              {topic.pct > 0 ? 'Practice again' : 'Start practice'}
            </motion.button>
          </>
        )}
      </motion.div>
    );
  }

  // ── QUIZ VIEW ─────────────────────────────────────────────────────────────
  if (view === 'quiz') {
    const answered = results.length;
    const progressPct = Math.round((answered / total) * 100);

    const renderAnswerInput = () => {
      if (!q) return null;

      // Multiple choice
      if (isMC) {
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {(q.options || []).map((opt, i) => {
              const optText = typeof opt === 'string' ? opt : opt.text;
              const sel = userAnswer === String(i);
              const correct = submitted && String(i) === String(q.answer);
              const wrong = submitted && sel && !correct;
              return (
                <motion.button
                  key={i}
                  onClick={() => !submitted && setUserAnswer(String(i))}
                  whileHover={!submitted ? { y: -1 } : {}}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '14px',
                    padding: '14px 20px', borderRadius: '14px', border: 'none',
                    background: correct ? '#f0fdf4' : wrong ? '#fff1f2' : sel ? '#f5f3ff' : '#f8fafc',
                    border: `2px solid ${correct ? '#10b981' : wrong ? '#f43f5e' : sel ? '#a78bfa' : '#e2e8f0'}`,
                    cursor: submitted ? 'default' : 'pointer', textAlign: 'left', width: '100%',
                    transition: 'all 0.15s',
                  }}
                >
                  <div style={{
                    width: '32px', height: '32px', borderRadius: '50%', flexShrink: 0,
                    background: correct ? '#10b981' : wrong ? '#f43f5e' : sel ? '#7c3aed' : '#e2e8f0',
                    color: (correct || wrong || sel) ? '#fff' : '#64748b',
                    display: 'grid', placeItems: 'center',
                    fontWeight: 800, fontSize: '0.82rem',
                  }}>
                    {correct ? <Check size={16} /> : wrong ? <X size={16} /> : String.fromCharCode(65 + i)}
                  </div>
                  <MathView content={optText} style={{ fontSize: '0.98rem', fontWeight: 600, color: '#1e1b4b', flex: 1 }} />
                </motion.button>
              );
            })}
          </div>
        );
      }

      // Sub-questions
      if (hasSubs) {
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {(q.subQuestions || []).map((sq, i) => {
              const key = sq.id ?? i;
              const val = userAnswer?.[key] ?? '';
              const sqCorrect = submitted && answersMatch(String(val), String(sq.answer ?? ''));
              const sqWrong = submitted && !sqCorrect;
              return (
                <div key={i} style={{ padding: '16px 18px', borderRadius: '14px', background: '#f8fafc', border: `2px solid ${submitted ? (sqCorrect ? '#10b981' : '#f43f5e') : '#e2e8f0'}` }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                    <div style={{ width: '26px', height: '26px', borderRadius: '8px', background: '#7c3aed', color: '#fff', display: 'grid', placeItems: 'center', fontSize: '0.8rem', fontWeight: 900, flexShrink: 0 }}>
                      {String.fromCharCode(97 + i)}
                    </div>
                    <MathView content={sq.question} graphData={sq.graphData} style={{ fontWeight: 700, color: '#1e1b4b', fontSize: '0.95rem' }} />
                  </div>
                  {sq.type === 'multiple_choice' ? (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {(sq.options || []).map((opt, oi) => {
                        const optText = typeof opt === 'string' ? opt : opt.text;
                        const selO = val === String(oi);
                        const correctO = submitted && String(oi) === String(sq.answer);
                        const wrongO = submitted && selO && !correctO;
                        return (
                          <button
                            key={oi}
                            onClick={() => !submitted && setUserAnswer((prev) => ({ ...prev, [key]: String(oi) }))}
                            style={{
                              padding: '8px 14px', borderRadius: '10px', border: `2px solid ${correctO ? '#10b981' : wrongO ? '#f43f5e' : selO ? '#a78bfa' : '#e2e8f0'}`,
                              background: correctO ? '#f0fdf4' : wrongO ? '#fff1f2' : selO ? '#f5f3ff' : '#fff',
                              color: '#1e1b4b', fontWeight: 700, cursor: submitted ? 'default' : 'pointer', fontSize: '0.88rem',
                            }}
                          >
                            {String.fromCharCode(65 + oi)}. <MathView content={optText} style={{ display: 'inline' }} />
                          </button>
                        );
                      })}
                    </div>
                  ) : (
                    <input
                      type="text"
                      value={val}
                      onChange={(e) => !submitted && setUserAnswer((prev) => ({ ...prev, [key]: e.target.value }))}
                      placeholder="Type your answer…"
                      disabled={submitted}
                      style={{
                        width: '100%', padding: '10px 14px', borderRadius: '10px',
                        border: `2px solid ${submitted ? (sqCorrect ? '#10b981' : '#f43f5e') : '#e2e8f0'}`,
                        background: submitted ? (sqCorrect ? '#f0fdf4' : '#fff1f2') : '#fff',
                        fontWeight: 700, fontSize: '0.95rem', boxSizing: 'border-box',
                      }}
                    />
                  )}
                  {submitted && (
                    <div style={{ marginTop: '8px', fontSize: '0.8rem', fontWeight: 800, color: sqCorrect ? '#10b981' : '#f43f5e' }}>
                      {sqCorrect ? '✓ Correct' : `✗ Answer: `}
                      {!sqCorrect && <MathView content={String(sq.answer ?? '')} style={{ display: 'inline', color: '#10b981' }} />}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        );
      }

      // Fill in the blank
      if (isFill) {
        const blanks = q.blanks || [];
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', padding: '16px', background: '#f8fafc', borderRadius: '14px' }}>
              {blanks.map((b, i) => {
                const val = userAnswer?.[i] ?? '';
                const correct = submitted && answersMatch(String(val), String(b.answer ?? ''));
                const wrong = submitted && !correct;
                return (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {b.label && <MathView content={b.label} style={{ fontWeight: 700, color: '#1e1b4b' }} />}
                    <input
                      type="text"
                      value={val}
                      onChange={(e) => !submitted && setUserAnswer((prev) => { const a = [...(prev || [])]; a[i] = e.target.value; return a; })}
                      disabled={submitted}
                      placeholder="—"
                      style={{
                        width: '100px', padding: '10px', borderRadius: '10px', textAlign: 'center',
                        border: `2px solid ${submitted ? (correct ? '#10b981' : '#f43f5e') : '#a78bfa'}`,
                        background: submitted ? (correct ? '#f0fdf4' : '#fff1f2') : '#fff',
                        fontWeight: 800, fontSize: '1rem',
                      }}
                    />
                  </div>
                );
              })}
            </div>
            {submitted && (
              <div style={{ padding: '10px 14px', borderRadius: '10px', background: '#f0fdf4', border: '1px solid #bbf7d0', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <span style={{ fontWeight: 900, color: '#166534', fontSize: '0.82rem' }}>Answers:</span>
                {blanks.map((b, i) => (
                  <span key={i} style={{ fontSize: '0.82rem', fontWeight: 700, color: '#166534' }}>
                    {b.label && <MathView content={b.label} style={{ display: 'inline' }} />} <MathView content={String(b.answer ?? '')} style={{ display: 'inline', fontWeight: 900 }} />
                  </span>
                ))}
              </div>
            )}
          </div>
        );
      }

      // Short answer
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {/* Symbol keyboard */}
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {[...MATH_SYMBOLS, '⌫'].map((sym) => (
              <button
                key={sym}
                onClick={() => !submitted && insertSymbol(sym)}
                style={{
                  width: sym === '⌫' ? '52px' : '40px', height: '40px', borderRadius: '10px',
                  border: `1px solid ${sym === '⌫' ? '#fee2e2' : '#e2e8f0'}`,
                  background: sym === '⌫' ? '#fff1f2' : '#fff',
                  color: sym === '⌫' ? '#e11d48' : '#4f46e5',
                  fontSize: sym === '√' ? '1.15rem' : '0.95rem',
                  fontWeight: 800, cursor: 'pointer',
                  fontFamily: '"KaTeX_Main", "Times New Roman", serif',
                }}
              >
                {sym}
              </button>
            ))}
          </div>
          <input
            ref={inputRef}
            type="text"
            value={userAnswer ?? ''}
            onChange={(e) => !submitted && setUserAnswer(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && !submitted && userAnswer && handleSubmit()}
            disabled={submitted}
            placeholder="Type your answer…"
            style={{
              fontSize: '1.35rem', padding: '20px', borderRadius: '18px', textAlign: 'center',
              border: `2px solid ${submitted ? (isCorrect ? '#10b981' : '#f43f5e') : '#a78bfa'}`,
              background: submitted ? (isCorrect ? '#f0fdf4' : '#fff1f2') : '#fff',
              fontWeight: 700, fontFamily: '"KaTeX_Main", "Times New Roman", serif',
              letterSpacing: '0.04em', width: '100%', boxSizing: 'border-box',
            }}
          />
          {submitted && !isCorrect && q.answer != null && (
            <div style={{ padding: '12px 16px', borderRadius: '12px', background: '#f0fdf4', border: '1px solid #bbf7d0', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Check size={16} style={{ color: '#10b981', flexShrink: 0 }} />
              <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#166534' }}>Correct answer: </span>
              <MathView content={String(q.answer)} style={{ fontWeight: 900, color: '#10b981', fontSize: '1rem' }} />
            </div>
          )}
        </div>
      );
    };

    return (
      <motion.div
        initial={{ opacity: 0, x: 32 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 32 }}
        transition={{ type: 'spring', damping: 26, stiffness: 280 }}
        style={{ maxWidth: '760px', margin: '0 auto' }}
      >
        {/* Top bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
          <button
            onClick={() => setView('list')}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              padding: '8px 14px', borderRadius: '12px', border: 'none',
              background: 'rgba(167,139,250,0.1)', color: '#7c3aed',
              fontSize: '0.82rem', fontWeight: 800, cursor: 'pointer',
            }}
          >
            <ArrowLeft size={15} /> {topic.code}
          </button>
          <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#64748b' }}>
            {currentIdx + 1} / {total}
          </div>
        </div>

        {/* Progress bar */}
        <div style={{ height: '6px', borderRadius: '999px', background: '#e2e8f0', marginBottom: '20px', overflow: 'hidden' }}>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progressPct}%` }}
            style={{ height: '100%', borderRadius: '999px', background: 'linear-gradient(90deg, #a78bfa, #7c3aed)' }}
          />
        </div>

        {/* Question card */}
        <div style={{
          padding: '28px', borderRadius: '24px',
          background: '#fff', border: '1px solid #e2e8f0',
          boxShadow: '0 12px 32px rgba(15,23,42,0.06)',
          marginBottom: '16px',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <span style={{
              fontSize: '0.62rem', fontWeight: 900, letterSpacing: '0.1em', textTransform: 'uppercase',
              padding: '3px 9px', borderRadius: '7px', background: '#f5f3ff', color: '#7c3aed',
            }}>
              {q?.difficulty || 'medium'} · {(q?.type || 'question').replace('_', ' ')}
            </span>
            {q?.hint && (
              <button
                onClick={() => setShowHint((v) => !v)}
                style={{
                  display: 'flex', alignItems: 'center', gap: '5px',
                  padding: '5px 11px', borderRadius: '9px', border: 'none',
                  background: showHint ? '#fef3c7' : '#fff7ed',
                  color: '#d97706', fontSize: '0.75rem', fontWeight: 800, cursor: 'pointer',
                }}
              >
                <Lightbulb size={13} /> {showHint ? 'Hide' : 'Hint'}
              </button>
            )}
          </div>

          <MathView
            content={q?.question}
            graphData={q?.graphData}
            style={{ fontSize: '1.1rem', fontWeight: 600, color: '#1e1b4b', lineHeight: 1.7 }}
          />

          <AnimatePresence>
            {showHint && q?.hint && (
              <motion.div
                initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }} style={{ overflow: 'hidden' }}
              >
                <div style={{ marginTop: '14px', padding: '14px 16px', borderRadius: '12px', background: '#fffbeb', border: '1px solid #fef3c7' }}>
                  <div style={{ fontSize: '0.68rem', fontWeight: 900, color: '#d97706', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '6px' }}>💡 Hint</div>
                  <MathView content={q.hint} style={{ color: '#92400e', fontSize: '0.92rem', fontWeight: 600 }} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Answer area */}
        <div style={{ marginBottom: '20px' }}>
          {renderAnswerInput()}
        </div>

        {/* Feedback banner */}
        <AnimatePresence>
          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              style={{
                padding: '16px 20px', borderRadius: '16px', marginBottom: '16px',
                background: isCorrect ? '#f0fdf4' : '#fff1f2',
                border: `1px solid ${isCorrect ? '#86efac' : '#fca5a5'}`,
                display: 'flex', alignItems: 'center', gap: '10px',
              }}
            >
              {isCorrect
                ? <CheckCircle2 size={22} style={{ color: '#10b981', flexShrink: 0 }} />
                : <XCircle size={22} style={{ color: '#f43f5e', flexShrink: 0 }} />}
              <div>
                <div style={{ fontWeight: 900, fontSize: '0.95rem', color: isCorrect ? '#065f46' : '#be123c' }}>
                  {isCorrect ? 'Correct! 🎉' : 'Not quite'}
                </div>
                {!isCorrect && q?.solution && (
                  <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#9f1239', marginTop: '2px' }}>
                    <MathView content={q.solution} style={{ display: 'inline' }} />
                  </div>
                )}
              </div>
              {isCorrect && (
                <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.82rem', fontWeight: 900, color: '#f59e0b' }}>
                  <Zap size={14} /> +{Math.round(XP_PER_TOPIC / total)} XP
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Action button */}
        {!submitted ? (
          <motion.button
            onClick={handleSubmit}
            disabled={
              userAnswer === '' || userAnswer === null ||
              (hasSubs && Object.values(userAnswer || {}).every((v) => !v)) ||
              (isFill && (userAnswer || []).every((v) => !v))
            }
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            style={{
              width: '100%', padding: '18px', borderRadius: '18px', border: 'none',
              background: 'linear-gradient(135deg, #a78bfa, #7c3aed)',
              color: '#fff', fontFamily: '"Outfit", sans-serif',
              fontSize: '1rem', fontWeight: 900, cursor: 'pointer',
              boxShadow: '0 10px 24px rgba(124,58,237,0.25)',
              opacity: (!userAnswer && !hasSubs && !isFill) ? 0.5 : 1,
            }}
          >
            Submit answer
          </motion.button>
        ) : (
          <motion.button
            onClick={handleNext}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            style={{
              width: '100%', padding: '18px', borderRadius: '18px', border: 'none',
              background: currentIdx < total - 1
                ? 'linear-gradient(135deg, #a78bfa, #7c3aed)'
                : 'linear-gradient(135deg, #10b981, #059669)',
              color: '#fff', fontFamily: '"Outfit", sans-serif',
              fontSize: '1rem', fontWeight: 900, cursor: 'pointer',
              boxShadow: '0 10px 24px rgba(124,58,237,0.22)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
            }}
          >
            {currentIdx < total - 1 ? (
              <><ChevronRight size={18} /> Next question</>
            ) : (
              <><Trophy size={18} /> Finish session</>
            )}
          </motion.button>
        )}
      </motion.div>
    );
  }

  // ── DONE VIEW ─────────────────────────────────────────────────────────────
  if (view === 'done') {
    const allResults = results;
    const correctCount = allResults.filter((r) => r.correct).length;
    const pct = total ? Math.round((correctCount / total) * 100) : 0;
    const xp = pct >= 80 ? XP_PER_TOPIC : pct >= 50 ? Math.round(XP_PER_TOPIC * 0.6) : Math.round(XP_PER_TOPIC * 0.2);
    const grade = pct >= 80 ? { label: 'Excellent!', color: '#10b981', emoji: '🏆' }
      : pct >= 50 ? { label: 'Good effort', color: '#7c3aed', emoji: '⭐' }
      : { label: 'Keep practising', color: '#f59e0b', emoji: '💪' };

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        style={{ maxWidth: '760px', margin: '0 auto' }}
      >
        {/* Result card */}
        <div style={{
          padding: '40px 32px', borderRadius: '28px', textAlign: 'center',
          background: `linear-gradient(135deg, ${grade.color}18, ${grade.color}08)`,
          border: `1px solid ${grade.color}30`,
          marginBottom: '24px',
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '8px' }}>{grade.emoji}</div>
          <h2 style={{ fontFamily: '"Outfit", sans-serif', fontSize: '2rem', fontWeight: 900, color: '#1e1b4b', margin: '0 0 6px' }}>
            {grade.label}
          </h2>
          <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#64748b', marginBottom: '28px' }}>
            {topic.title}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '28px' }}>
            {[
              { label: 'Score', value: `${correctCount}/${total}`, sub: 'correct', color: grade.color },
              { label: 'Accuracy', value: `${pct}%`, sub: 'of questions', color: pct >= 80 ? '#10b981' : '#7c3aed' },
              { label: 'XP earned', value: `+${xp}`, sub: `of ${XP_PER_TOPIC} XP`, color: '#f59e0b' },
            ].map((item) => (
              <div key={item.label} style={{ padding: '16px', borderRadius: '16px', background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(255,255,255,0.5)' }}>
                <div style={{ fontSize: '0.62rem', fontWeight: 900, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#94a3b8', marginBottom: '4px' }}>{item.label}</div>
                <div style={{ fontFamily: '"Outfit", sans-serif', fontSize: '1.6rem', fontWeight: 900, color: item.color }}>{item.value}</div>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#94a3b8' }}>{item.sub}</div>
              </div>
            ))}
          </div>

          {/* Per-question results */}
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {allResults.map((r, i) => (
              <div
                key={i}
                style={{
                  width: '36px', height: '36px', borderRadius: '10px', display: 'grid', placeItems: 'center',
                  background: r.correct ? '#10b981' : '#f43f5e',
                  color: '#fff',
                }}
              >
                {r.correct ? <Check size={16} /> : <X size={16} />}
              </div>
            ))}
          </div>
        </div>

        {/* Action buttons */}
        <div style={{ display: 'flex', gap: '12px' }}>
          <button
            onClick={handleRestart}
            style={{
              flex: 1, padding: '16px', borderRadius: '16px', border: '2px solid #ddd6fe',
              background: '#fff', color: '#7c3aed', fontWeight: 900, fontSize: '0.95rem',
              cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
            }}
          >
            <RotateCcw size={16} /> Try again
          </button>
          <button
            onClick={onBack}
            style={{
              flex: 1, padding: '16px', borderRadius: '16px', border: 'none',
              background: 'linear-gradient(135deg, #a78bfa, #7c3aed)',
              color: '#fff', fontWeight: 900, fontSize: '0.95rem',
              cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
              boxShadow: '0 8px 20px rgba(124,58,237,0.22)',
            }}
          >
            <ArrowLeft size={16} /> Back to chapter
          </button>
        </div>
      </motion.div>
    );
  }

  return null;
};

export default TopicPracticeSession;
