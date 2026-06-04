import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GraduationCap, Settings as SettingsIcon, Play, ArrowLeft, ArrowRight,
  Lock, Trophy, Sparkles, Clock, Lightbulb, RotateCcw, ChevronRight, CheckCircle2, XCircle,
  Flag, BookmarkPlus, X, Target, PenLine, LayoutGrid, AlignJustify,
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { CURRICULUM_DATA } from '../constants/curriculumData';
import MathView from './MathView';
import MathInput from './MathInput';
import { MATH_SYMBOLS } from '../utils/challengeUtils';

// Quick-insert buttons for the MathLive editor (`#?` = cursor placeholder).
const EXAM_QUICK_INSERTS = [
  { label: '√', latex: '\\sqrt{#?}', title: 'Square root' },
  { label: 'ⁿ√', latex: '\\sqrt[#?]{#?}', title: 'nth root' },
  { label: 'a/b', latex: '\\frac{#?}{#?}', title: 'Fraction' },
  { label: 'xⁿ', latex: '^{#?}', title: 'Exponent' },
  { label: 'π', latex: '\\pi', title: 'Pi' },
  { label: '±', latex: '\\pm', title: 'Plus or minus' },
  { label: '°', latex: '^{\\circ}', title: 'Degrees' },
  { label: '( )', latex: '(#?)', title: 'Brackets' },
];
import { gradeQuestion, answersMatch } from '../utils/answerMatching';
import { db } from '../firebase/config';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { getNoteCount, getDueCount } from '../utils/secretNote';
import SecretNoteView from './challenge/SecretNoteView';
import WorkingOutCanvas from './WorkingOutCanvas';
import {
  getStats, getTopicAnalysis,
  startRound, finishRound,
  ROUND_SIZE_CONST, EXAM_PREP_NOTE_KIND,
} from '../services/examPrepService';

const flattenChapters = (yearKey) => {
  const data = CURRICULUM_DATA[yearKey];
  if (!data) return [];
  if (Array.isArray(data)) return data;
  // Year 11/12 split by course — collapse all courses into one list.
  return Object.values(data).flat();
};

const allYearKeys = Object.keys(CURRICULUM_DATA);

// ── Student-side "ready to start" card ─────────────────────────────────
// Topic selection is the teacher's job (set in Student Detail → Challenge
// tab). The student just sees what's been chosen and presses Start.
const ChosenTopicsCard = ({ selection, onStart, loading }) => {
  // Flatten all selected chapters to their {id, title} pairs so we can
  // render them as chips for the student to see what's being tested.
  const allChapters = useMemo(() => {
    const list = [];
    allYearKeys.forEach((y) => {
      flattenChapters(y).forEach((ch) => { list.push({ ...ch, year: y }); });
    });
    return list;
  }, []);
  const selectedChips = selection.chapters
    .map((id) => allChapters.find((c) => c.id === id))
    .filter(Boolean);

  return (
    <div className="app-panel" style={{ padding: '28px', borderRadius: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{ width: '44px', height: '44px', borderRadius: '14px', background: 'linear-gradient(135deg, #a78bfa, #7c3aed)', display: 'grid', placeItems: 'center', color: '#fff' }}>
          <GraduationCap size={22} />
        </div>
        <div>
          <h3 style={{ margin: 0, fontWeight: 900, color: '#1e1b4b' }}>Ready when you are</h3>
          <p style={{ margin: '4px 0 0', color: '#64748b', fontSize: '0.9rem', fontWeight: 600 }}>
            {ROUND_SIZE_CONST} random questions from the topics your teacher set below.
          </p>
        </div>
      </div>

      {selectedChips.length === 0 ? (
        <div style={{ padding: '20px', background: '#fffbeb', border: '1px dashed #fcd34d', borderRadius: '14px', color: '#92400e', fontWeight: 700, textAlign: 'center', fontSize: '0.9rem' }}>
          Your teacher hasn't picked any exam topics yet. Ask them to set chapters in your profile.
        </div>
      ) : (
        <div>
          <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>
            {selectedChips.length} {selectedChips.length === 1 ? 'topic' : 'topics'} set by your teacher
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {selectedChips.map((ch) => (
              <span key={ch.id} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 12px', borderRadius: '999px', background: '#faf5ff', border: '1px solid #ddd6fe', color: '#5b21b6', fontWeight: 800, fontSize: '0.8rem' }}>
                {ch.year} · {ch.title}
              </span>
            ))}
          </div>
        </div>
      )}

      <button
        onClick={onStart}
        disabled={selectedChips.length === 0 || loading}
        className="app-button app-button--primary"
        style={{ padding: '18px', borderRadius: '20px', fontSize: '1rem', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '10px', background: (selectedChips.length === 0 || loading) ? '#cbd5e1' : 'linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)', cursor: (selectedChips.length === 0 || loading) ? 'not-allowed' : 'pointer' }}
      >
        <Play size={18} /> {loading ? 'Loading questions…' : 'Start round'}
      </button>
    </div>
  );
};

// ── Topic-analysis card (cumulative weak-area breakdown) ────────────────
const TopicAnalysisCard = ({ analysis }) => (
  <div className="app-panel" style={{ padding: '24px', borderRadius: '24px' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
      <Sparkles size={18} color="#7c3aed" />
      <h3 style={{ margin: 0, fontWeight: 900, color: '#1e1b4b', fontSize: '1rem' }}>Where to focus</h3>
    </div>
    {analysis.length === 0 ? (
      <p style={{ margin: 0, color: '#94a3b8', fontWeight: 700, fontSize: '0.9rem' }}>Finish a round to see your topic breakdown.</p>
    ) : (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {analysis.slice(0, 8).map((t) => {
          const color = t.attempted < 3 ? '#94a3b8' : t.pct < 50 ? '#ef4444' : t.pct < 75 ? '#f59e0b' : '#10b981';
          return (
            <div key={t.topicId}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '4px' }}>
                <span style={{ fontWeight: 700, color: '#1e293b' }}>{t.title}</span>
                <span style={{ fontWeight: 800, color }}>{t.pct}% · {t.correct}/{t.attempted}</span>
              </div>
              <div style={{ height: '6px', background: '#f1f5f9', borderRadius: '999px', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${t.pct}%`, background: color, transition: 'width 0.3s' }} />
              </div>
            </div>
          );
        })}
      </div>
    )}
  </div>
);

// ── Quiz view (one question at a time, self-contained) ─────────────────
const QuizView = ({ questions, onFinish, onReport }) => {
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState([]); // [{userAnswer, correct}]
  const [draft, setDraft] = useState(null);
  const [showHint, setShowHint] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [focusedBlank, setFocusedBlank] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [questionStartTime, setQuestionStartTime] = useState(null);
  const [showCanvas, setShowCanvas] = useState(true);
  const [isGraphPaper, setIsGraphPaper] = useState(false);
  const [sketchSnapshots, setSketchSnapshots] = useState({}); // { [questionId]: dataURL }
  const canvasRef = useRef(null);
  const examInputRef = useRef(null);
  const examMathRef = useRef(null);
  const examFracDenRef = useRef(null);
  const [zoomImage, setZoomImage] = useState(null);
  const [examFracMode, setExamFracMode] = useState(false);
  const [examFracWhole, setExamFracWhole] = useState('');
  const [examFracNum, setExamFracNum] = useState('');
  const [examFracDen, setExamFracDen] = useState('');
  const examFracNumRef = useRef(null);
  const commitExamFrac = (whole, num, den) => {
    if (!den) { setExamFracMode(false); examInputRef.current?.focus(); return; }
    const base = typeof draft === 'string' ? draft : '';
    const prefix = base.endsWith(num) ? base.slice(0, base.length - num.length) : base;
    const frac = `(${num || '0'})/(${den})`;
    setDraft(prefix + (whole ? `${whole} ${frac}` : frac));
    setExamFracMode(false); setExamFracWhole(''); setExamFracNum(''); setExamFracDen('');
    setTimeout(() => examInputRef.current?.focus(), 50);
  };

  const q = questions[idx];
  const total = questions.length;

  useEffect(() => {
    if (!q) return;
    if (q.subQuestions?.length > 0) {
      const init = {};
      q.subQuestions.forEach((sq, i) => { init[sq.id ?? i] = ''; });
      setDraft(init);
    }
    else if (q.type === 'multiple_choice') setDraft(null);
    else if (q.type === 'fill_blank') setDraft(Array((q.blanks || []).length).fill(''));
    else setDraft('');
    setShowHint(false);
    setShowFeedback(false);
    setFocusedBlank(0);
    setExamFracMode(false); setExamFracWhole(''); setExamFracNum(''); setExamFracDen('');
    const limit = q.timeLimit || 120;
    setTimeLeft(limit);
    setQuestionStartTime(Date.now());
  }, [idx, q?.id]);

  // Countdown timer — ref tracks whether feedback is showing to prevent
  // stale-closure double-fire after the timer hits zero.
  const showFeedbackRef = useRef(showFeedback);
  useEffect(() => { showFeedbackRef.current = showFeedback; }, [showFeedback]);

  useEffect(() => {
    if (!questionStartTime || showFeedback) return;
    const limit = (q?.timeLimit || 120) * 1000;
    const endTime = questionStartTime + limit;
    const timer = setInterval(() => {
      if (showFeedbackRef.current) { clearInterval(timer); return; }
      const remaining = Math.max(0, Math.ceil((endTime - Date.now()) / 1000));
      setTimeLeft(remaining);
      if (remaining <= 0) {
        clearInterval(timer);
        // Auto-submit with empty answer so the session advances
        if (!showFeedbackRef.current) {
          setAnswers((prev) => {
            const userAnswer = '';
            return [...prev, { userAnswer, correct: false, questionId: q?.id, topicId: q?.topicId, topicTitle: q?.topicTitle, timedOut: true }];
          });
          setShowFeedback(true);
        }
      }
    }, 200);
    return () => clearInterval(timer);
  }, [questionStartTime, showFeedback, q?.timeLimit, q?.id]);

  if (!q) return null;

  // Grade a multi-part question: correct only if every sub-answer matches.
  const subList = Array.isArray(q.subQuestions) ? q.subQuestions : [];
  const hasSubs = subList.length > 0;
  const gradeSub = (sq, i) => {
    const given = (draft && typeof draft === 'object') ? draft[sq.id ?? i] : '';
    const expected = sq.a ?? sq.answer ?? '';
    return answersMatch(given, expected);
  };
  const allSubsCorrect = () => hasSubs && subList.every((sq, i) => gradeSub(sq, i));

  const submit = () => {
    const userAnswer = draft;
    const correct = hasSubs ? allSubsCorrect() : gradeQuestion(q, userAnswer).correct;
    const next = [...answers, { userAnswer, correct, questionId: q.id, topicId: q.topicId, topicTitle: q.topicTitle }];
    setAnswers(next);
    setShowFeedback(true);
  };

  const advance = async () => {
    // Save sketch snapshot for the current question, then clear canvas
    if (canvasRef.current) {
      try {
        const dataURL = await canvasRef.current.exportImage({ force: false });
        if (dataURL && q?.id) {
          setSketchSnapshots(prev => ({ ...prev, [q.id]: dataURL }));
        }
      } catch (e) { /* ignore */ }
      canvasRef.current.clear();
    }
    if (idx + 1 >= total) {
      onFinish(answers);
    } else {
      setIdx(idx + 1);
    }
  };

  const canSubmit = (() => {
    if (hasSubs) return draft && typeof draft === 'object' && subList.every((sq, i) => String(draft[sq.id ?? i] || '').trim() !== '');
    if (q.type === 'multiple_choice') return draft !== null && draft !== undefined;
    if (q.type === 'fill_blank') return Array.isArray(draft) && draft.every((s) => String(s || '').trim() !== '');
    return String(draft || '').trim() !== '';
  })();

  const lastRes = showFeedback ? answers[answers.length - 1] : null;
  const correctMc = q.type === 'multiple_choice' ? Number(q.answer) : null;

  const [viewW, setViewW] = useState(() => (typeof window !== 'undefined' ? window.innerWidth : 1024));
  useEffect(() => {
    const onResize = () => setViewW(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  const isWide = viewW >= 860;

  const header = (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Exam Prep</div>
        <div style={{ fontSize: '1.1rem', fontWeight: 900, color: '#1e1b4b' }}>Question {idx + 1} of {total}</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <button
          onClick={() => onReport?.(q)}
          title="Report a problem with this question"
          style={{ width: '36px', height: '36px', borderRadius: '12px', border: '1px solid #fee2e2', background: '#fff1f2', color: '#e11d48', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}
        >
          <Flag size={16} />
        </button>
        <div style={{
          display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', fontWeight: 800,
          color: timeLeft <= 10 ? '#f43f5e' : timeLeft <= 30 ? '#f97316' : '#64748b',
          background: timeLeft <= 10 ? '#fff1f2' : timeLeft <= 30 ? '#fff7ed' : '#fff',
          padding: '6px 12px', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
          transition: 'background 0.3s, color 0.3s',
          minWidth: '70px', justifyContent: 'center',
        }}>
          <Clock size={14} /> {timeLeft}s
        </div>
      </div>
    </div>
  );

  const timeLimit = q?.timeLimit || 120;
  const timerPct = Math.min(100, (timeLeft / timeLimit) * 100);
  const timerBarColor = timeLeft <= 10 ? '#f43f5e' : timeLeft <= 30 ? '#f97316' : '#6366f1';
  const timerGlow = timeLeft <= 10 ? 'rgba(244,63,94,0.35)' : timeLeft <= 30 ? 'rgba(249,115,22,0.25)' : 'transparent';

  const progressBar = (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
      {/* Question progress */}
      <div style={{ width: '100%', height: '3px', background: '#e2e8f0', borderRadius: '999px', overflow: 'hidden' }}>
        <div style={{ height: '100%', width: `${((idx + (showFeedback ? 1 : 0)) / total) * 100}%`, background: '#a78bfa', borderRadius: '999px', transition: 'width 0.3s' }} />
      </div>
      {/* Timer bar */}
      <div style={{ width: '100%', height: '5px', background: '#e2e8f0', borderRadius: '999px', overflow: 'visible' }}>
        <motion.div
          initial={false}
          animate={{ width: `${timerPct}%`, backgroundColor: timerBarColor }}
          transition={{ duration: 0.2 }}
          style={{
            height: '100%', borderRadius: '999px',
            boxShadow: timeLeft <= 30 ? `0 0 8px 2px ${timerGlow}` : 'none',
            transition: 'box-shadow 0.3s',
          }}
        />
      </div>
    </div>
  );

  const questionCard = (
    <div style={{ background: '#fff', padding: '24px', borderRadius: '24px', border: '1px solid #e2e8f0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.68rem', fontWeight: 900, background: '#e0e7ff', color: '#4f46e5', padding: '5px 11px', borderRadius: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            {q.topicTitle || q.chapterTitle}
          </span>
          {q.source && (
            <span style={{ fontSize: '0.65rem', fontWeight: 900, background: '#fef3c7', color: '#92400e', padding: '5px 10px', borderRadius: '8px', letterSpacing: '0.03em' }}>
              📄 {q.source}
            </span>
          )}
        </div>
        {q.hint && (
          <button
            onClick={() => setShowHint((v) => !v)}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '7px',
              padding: '7px 14px', borderRadius: '20px', border: 'none', cursor: 'pointer',
              background: showHint
                ? 'linear-gradient(135deg, #fbbf24, #f59e0b)'
                : 'rgba(251,191,36,0.1)',
              color: showHint ? '#fff' : '#d97706',
              fontSize: '0.78rem', fontWeight: 800,
              boxShadow: showHint ? '0 4px 12px rgba(245,158,11,0.28)' : 'none',
              transition: 'all 0.2s',
            }}
          >
            <Lightbulb size={13} fill={showHint ? '#fff' : 'none'} />
            {showHint ? 'Hide Hint' : 'Show Hint'}
          </button>
        )}
      </div>
      <MathView content={q.question} graphData={q.requiresManualGrading || q.type === 'teacher_review' ? (showFeedback ? q.graphData : null) : q.graphData} style={{ fontSize: '1.1rem', lineHeight: 1.75, color: '#1e1b4b', fontWeight: 500 }} />
      <AnimatePresence>
        {showHint && q.hint && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -4 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -4 }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{
              marginTop: '16px',
              background: 'linear-gradient(135deg, #fffbeb, #fef9e7)',
              border: '1px solid #fde68a',
              borderLeft: '4px solid #f59e0b',
              borderRadius: '14px',
              padding: '14px 18px',
              display: 'flex', gap: '12px', alignItems: 'flex-start',
            }}>
              <div style={{
                width: '30px', height: '30px', borderRadius: '10px', flexShrink: 0,
                background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
                display: 'grid', placeItems: 'center',
                boxShadow: '0 4px 10px rgba(245,158,11,0.3)',
              }}>
                <Lightbulb size={14} style={{ color: '#fff' }} fill="#fff" />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: '0.62rem', fontWeight: 900, color: '#b45309', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '6px' }}>
                  Hint
                </div>
                <MathView content={q.hint} style={{ color: '#78350f', fontSize: '0.95rem', fontWeight: 600, lineHeight: 1.65 }} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  const answerArea = hasSubs ? (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      {subList.map((sq, sIdx) => {
        const key = sq.id ?? sIdx;
        const given = (draft && typeof draft === 'object') ? (draft[key] || '') : '';
        const correctSub = showFeedback && gradeSub(sq, sIdx);
        const wrongSub = showFeedback && !correctSub;
        const subOpts = sq.opts || sq.options || [];
        const isSubMC = (sq.type === 'multiple_choice') && subOpts.length > 0;
        return (
          <div key={key} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '18px', padding: '18px' }}>
            <MathView content={sq.question} graphData={sq.requiresManualGrading || sq.type === 'teacher_review' ? (showFeedback ? sq.graphData : null) : sq.graphData} style={{ fontWeight: 700, color: '#1e293b', fontSize: '1rem', marginBottom: '12px' }} />
            {isSubMC ? (
              <div style={{ display: 'grid', gap: '8px' }}>
                {subOpts.map((opt, oi) => {
                  const optText = typeof opt === 'string' ? opt : opt.text;
                  const selected = given === optText;
                  return (
                    <button key={oi} onClick={() => { if (showFeedback) return; setDraft((prev) => ({ ...(prev || {}), [key]: optText })); }} disabled={showFeedback}
                      style={{ padding: '12px 16px', borderRadius: '12px', border: `2px solid ${selected ? '#6366f1' : '#e2e8f0'}`, background: selected ? '#f5f3ff' : '#fff', textAlign: 'left', cursor: showFeedback ? 'default' : 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ fontWeight: 800, color: '#64748b' }}>{String.fromCharCode(65 + oi)}.</span>
                      <MathView content={optText} style={{ display: 'inline' }} />
                    </button>
                  );
                })}
              </div>
            ) : (
              <input
                type="text"
                value={given}
                readOnly={showFeedback}
                onChange={(e) => setDraft((prev) => ({ ...(prev || {}), [key]: e.target.value }))}
                placeholder="Type your answer…"
                style={{ width: '100%', boxSizing: 'border-box', padding: '14px 16px', borderRadius: '12px', fontWeight: 700, fontSize: '1.05rem', textAlign: 'center', fontFamily: '"KaTeX_Main", serif', border: `2px solid ${showFeedback ? (correctSub ? '#10b981' : '#ef4444') : '#a78bfa'}`, background: showFeedback ? (correctSub ? '#f0fdf4' : '#fff1f2') : '#fff' }}
              />
            )}
            {showFeedback && String(given).includes('/') && (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', marginTop: '8px' }}>
                <span style={{ fontSize: '0.62rem', fontWeight: 800, color: '#a78bfa', textTransform: 'uppercase' }}>You wrote</span>
                <MathView content={String(given)} style={{ fontSize: '1.2rem', color: '#1e1b4b' }} />
              </div>
            )}
            {showFeedback && wrongSub && (
              <div style={{ marginTop: '10px', padding: '8px 12px', borderRadius: '10px', background: '#f0fdf4', border: '1px solid #bbf7d0', color: '#166534', fontWeight: 800, fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                Correct: <MathView content={String(sq.a ?? sq.answer ?? '')} style={{ display: 'inline' }} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  ) : q.type === 'multiple_choice' ? (
    <div style={{ display: 'grid', gap: '10px' }}>
      {(q.options || []).map((opt, i) => {
        const optText = typeof opt === 'string' ? opt : opt.text;
        const optImage = (opt && typeof opt === 'object') ? (opt.imageUrl || opt.image || '') : '';
        const hasImage = !!optImage;
        const selected = draft === i;
        const isCorrect = showFeedback && i === correctMc;
        const isWrong = showFeedback && selected && !isCorrect;
        const letter = String.fromCharCode(65 + i);
        return (
          <button
            key={i}
            onClick={() => !showFeedback && setDraft(i)}
            disabled={showFeedback}
            style={{ padding: hasImage ? '14px' : '14px 22px', borderRadius: hasImage ? '20px' : '100px', border: `2px solid ${isCorrect ? '#10b981' : isWrong ? '#ef4444' : selected ? '#6366f1' : 'transparent'}`, background: isCorrect ? '#f0fdf4' : isWrong ? '#fef2f2' : selected ? '#f5f3ff' : '#fff', display: 'flex', alignItems: 'center', gap: '14px', cursor: showFeedback ? 'default' : 'pointer', boxShadow: '0 4px 12px rgba(0,0,0,0.03)', textAlign: 'left' }}
          >
            <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: isCorrect ? '#10b981' : selected ? '#6366f1' : '#f1f5f9', color: isCorrect || selected ? '#fff' : '#64748b', display: 'grid', placeItems: 'center', fontWeight: 800, fontSize: '0.85rem', flexShrink: 0 }}>
              {letter}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              {(!hasImage || (optText && optText !== letter)) && (
                <MathView content={optText} style={{ fontSize: '1rem', color: '#1e1b4b', fontWeight: 500 }} />
              )}
              {hasImage && (
                <img
                  src={optImage}
                  alt={`Option ${letter}`}
                  onClick={(e) => { e.stopPropagation(); setZoomImage(optImage); }}
                  style={{ width: '100%', maxWidth: '320px', maxHeight: '220px', objectFit: 'contain', marginTop: optText && optText !== letter ? '8px' : 0, display: 'block', borderRadius: '12px', background: '#fff', border: '1px solid #f1f5f9', cursor: 'zoom-in' }}
                />
              )}
            </div>
            {isCorrect && <CheckCircle2 size={20} color="#10b981" />}
            {isWrong && <XCircle size={20} color="#ef4444" />}
          </button>
        );
      })}
    </div>
  ) : q.type === 'fill_blank' ? (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', justifyContent: 'center' }}>
        {MATH_SYMBOLS.map((s) => (
          <button key={s} onClick={() => {
            if (showFeedback) return;
            const next = [...(draft || [])];
            next[focusedBlank] = (next[focusedBlank] || '') + s;
            setDraft(next);
          }} style={{ width: '40px', height: '40px', borderRadius: '10px', border: '1px solid #e2e8f0', background: '#fff', color: '#4f46e5', fontWeight: 800, cursor: 'pointer' }}>{s}</button>
        ))}
        <button onClick={() => {
          if (showFeedback) return;
          const next = [...(draft || [])];
          next[focusedBlank] = (next[focusedBlank] || '').slice(0, -1);
          setDraft(next);
        }} style={{ width: '56px', height: '40px', borderRadius: '10px', border: '1px solid #fee2e2', background: '#fff1f2', color: '#e11d48', fontWeight: 900, cursor: 'pointer' }}>DEL</button>
      </div>
      <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '18px', padding: '18px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {(q.blanks || []).map((b, i) => {
          const borderColor = !showFeedback ? (focusedBlank === i ? '#6366f1' : '#e2e8f0') : (gradeQuestion(q, draft).perBlank?.[i] ? '#10b981' : '#ef4444');
          return (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              {b.label && <div style={{ minWidth: '60px' }}><MathView content={b.label} style={{ fontWeight: 800, color: '#1e1b4b' }} /></div>}
              <input
                type="text" value={(draft || [])[i] || ''} readOnly={showFeedback} onFocus={() => setFocusedBlank(i)}
                onChange={(e) => { const next = [...(draft || [])]; next[i] = e.target.value; setDraft(next); }}
                style={{ flex: 1, padding: '12px 14px', borderRadius: '12px', border: `2px solid ${borderColor}`, fontWeight: 700, textAlign: 'center', fontFamily: '"KaTeX_Main", serif' }}
              />
              {showFeedback && !gradeQuestion(q, draft).perBlank?.[i] && (
                <div style={{ fontSize: '0.75rem', color: '#166534', fontWeight: 800, background: '#f0fdf4', padding: '4px 8px', borderRadius: '8px' }}>
                  <MathView content={String(b.answer || '')} style={{ display: 'inline' }} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  ) : (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {/* Quick-insert buttons for the MathLive editor */}
      {!showFeedback && (
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {EXAM_QUICK_INSERTS.map((b) => (
            <button key={b.label} type="button" onClick={() => examMathRef.current?.insert(b.latex)} title={b.title}
              style={{ minWidth: '46px', height: '42px', padding: '0 12px', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#fff', color: '#4f46e5', fontSize: '1.05rem', fontWeight: 800, cursor: 'pointer', fontFamily: '"KaTeX_Main", "Times New Roman", serif' }}>
              {b.label}
            </button>
          ))}
        </div>
      )}
      <MathInput
        ref={examMathRef}
        value={typeof draft === 'string' ? draft : ''}
        onChange={(latex) => !showFeedback && setDraft(latex)}
        onEnter={() => { if (draft && !showFeedback) submit(); }}
        readOnly={showFeedback}
        placeholder="Type your answer…  (use the buttons for √ and fractions)"
        autoFocus
        style={{ fontSize: '1.2rem', padding: '18px', borderRadius: '20px', border: `2px solid ${showFeedback ? (lastRes?.correct ? '#10b981' : '#ef4444') : '#e2e8f0'}` }}
      />
      {showFeedback && !lastRes?.correct && (
        <div style={{ padding: '10px 14px', borderRadius: '12px', background: '#f0fdf4', border: '1px solid #bbf7d0', color: '#166534', fontWeight: 800, fontSize: '0.9rem' }}>
          Correct: <MathView content={String(q.answer)} style={{ display: 'inline' }} />
        </div>
      )}
    </div>
  );

  const actionButton = !showFeedback ? (
    <button onClick={submit} disabled={!canSubmit} className="app-button app-button--primary" style={{ padding: '16px', borderRadius: '18px', background: !canSubmit ? '#cbd5e1' : 'linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)', cursor: !canSubmit ? 'not-allowed' : 'pointer' }}>
      Submit Answer
    </button>
  ) : (
    <button onClick={advance} className="app-button app-button--primary" style={{ padding: '16px', borderRadius: '18px', background: 'linear-gradient(135deg, #a78bfa, #7c3aed)', display: 'inline-flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
      {idx + 1 >= total ? 'Finish round' : 'Next question'} <ArrowRight size={18} />
    </button>
  );

  // Wide layout: question on left, canvas on right — both fill viewport height
  if (isWide && showCanvas) {
    return (
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '16px',
        height: 'calc(100vh - 80px)',
        alignItems: 'stretch',
      }}>
        {/* Left: question + answer + button */}
        <div className="app-panel" style={{
          padding: '28px', borderRadius: '28px',
          display: 'flex', flexDirection: 'column', gap: '16px',
          minWidth: 0, overflow: 'auto',
        }}>
          {header}
          {progressBar}
          {questionCard}
          {answerArea}
          <div style={{ flex: 1 }} />
          {actionButton}
        </div>
        {/* Right: canvas fills full height */}
        <div style={{ minWidth: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button
              onClick={() => {
                const newVal = !isGraphPaper;
                setIsGraphPaper(newVal);
                canvasRef.current?.setCurrentPageType(newVal);
              }}
              title={isGraphPaper ? 'Switch to lined paper' : 'Switch to grid paper'}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '5px',
                padding: '5px 12px', borderRadius: '10px', border: '1px solid #e2e8f0',
                background: isGraphPaper ? '#ede9fe' : '#f8fafc',
                color: isGraphPaper ? '#7c3aed' : '#64748b',
                fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer',
              }}
            >
              {isGraphPaper ? <AlignJustify size={13} /> : <LayoutGrid size={13} />}
              {isGraphPaper ? 'Lined' : 'Grid'}
            </button>
          </div>
          <div style={{ flex: 1, borderRadius: '20px', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
            <WorkingOutCanvas ref={canvasRef} questionType="short_answer" isSubmitted={false}
              onPageChange={() => setIsGraphPaper(canvasRef.current?.getCurrentPageType() ?? false)} />
          </div>
        </div>
      </div>
    );
  }

  // Narrow layout: stacked
  return (
    <div className="app-panel" style={{ padding: '28px', borderRadius: '28px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {header}
      {progressBar}
      {questionCard}
      {answerArea}
      {actionButton}
      <AnimatePresence>
        {showCanvas && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 500 }}
            exit={{ opacity: 0, height: 0 }}
            style={{ overflow: 'hidden', borderRadius: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}
          >
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button
                onClick={() => {
                  const newVal = !isGraphPaper;
                  setIsGraphPaper(newVal);
                  canvasRef.current?.setCurrentPageType(newVal);
                }}
                title={isGraphPaper ? 'Switch to lined paper' : 'Switch to grid paper'}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '5px',
                  padding: '5px 12px', borderRadius: '10px', border: '1px solid #e2e8f0',
                  background: isGraphPaper ? '#ede9fe' : '#f8fafc',
                  color: isGraphPaper ? '#7c3aed' : '#64748b',
                  fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer',
                }}
              >
                {isGraphPaper ? <AlignJustify size={13} /> : <LayoutGrid size={13} />}
                {isGraphPaper ? 'Lined' : 'Grid'}
              </button>
            </div>
            <div style={{ flex: 1, borderRadius: '20px', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
              <WorkingOutCanvas ref={canvasRef} questionType="short_answer" isSubmitted={false}
                onPageChange={() => setIsGraphPaper(canvasRef.current?.getCurrentPageType() ?? false)} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
    </div>
  );
};

// ── Review screen — question-by-question solution walkthrough ──────────
const ReviewView = ({ questions, answers, onDone }) => {
  const [idx, setIdx] = useState(0);
  const [expandedSteps, setExpandedSteps] = useState(true);
  const q = questions[idx];
  const ans = answers[idx];
  const total = questions.length;

  useEffect(() => { setExpandedSteps(true); }, [idx]);

  if (!q) return null;

  const isCorrect = ans?.correct;
  const solutionSteps = q.solutionSteps || [];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {/* header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <button onClick={onDone} style={{ width: '36px', height: '36px', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b', flexShrink: 0 }}>
          <ArrowLeft size={16} />
        </button>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Review</div>
          <div style={{ fontWeight: 900, color: '#1e1b4b', fontSize: '1rem' }}>Question {idx + 1} of {total}</div>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button disabled={idx === 0} onClick={() => setIdx(idx - 1)} style={{ width: '36px', height: '36px', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#fff', cursor: idx === 0 ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: idx === 0 ? '#cbd5e1' : '#475569' }}>
            <ArrowLeft size={16} />
          </button>
          <button disabled={idx + 1 >= total} onClick={() => setIdx(idx + 1)} style={{ width: '36px', height: '36px', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#fff', cursor: idx + 1 >= total ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: idx + 1 >= total ? '#cbd5e1' : '#475569' }}>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* progress dots */}
      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
        {questions.map((_, i) => {
          const a = answers[i];
          const color = a?.correct ? '#10b981' : '#ef4444';
          return (
            <button key={i} onClick={() => setIdx(i)} style={{ width: '28px', height: '8px', borderRadius: '999px', border: 'none', background: i === idx ? '#7c3aed' : color, cursor: 'pointer', opacity: i === idx ? 1 : 0.55, transition: 'all 0.15s' }} />
          );
        })}
      </div>

      {/* question card */}
      <div className="app-panel" style={{ padding: '22px', borderRadius: '22px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', flexWrap: 'wrap', gap: '8px' }}>
          <span style={{ fontSize: '0.7rem', fontWeight: 800, background: '#e0e7ff', color: '#6366f1', padding: '4px 10px', borderRadius: '8px', textTransform: 'uppercase' }}>
            {q.topicTitle || q.chapterTitle}
          </span>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '5px 12px', borderRadius: '999px', fontWeight: 800, fontSize: '0.82rem',
            background: isCorrect ? '#f0fdf4' : '#fef2f2', color: isCorrect ? '#16a34a' : '#dc2626',
            border: `1px solid ${isCorrect ? '#bbf7d0' : '#fecaca'}`,
          }}>
            {isCorrect ? <CheckCircle2 size={14} /> : <XCircle size={14} />}
            {isCorrect ? 'Correct' : 'Incorrect'}
          </span>
        </div>
        <MathView content={q.question} graphData={q.graphData} style={{ fontSize: '1.05rem', lineHeight: 1.7, color: '#1e1b4b', fontWeight: 500 }} />
      </div>

      {/* your answer vs correct */}
      {Array.isArray(q.subQuestions) && q.subQuestions.length > 0 ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {q.subQuestions.map((sq, sIdx) => {
            const key = sq.id ?? sIdx;
            const given = (ans?.userAnswer && typeof ans.userAnswer === 'object') ? (ans.userAnswer[key] || '') : '';
            const subOK = answersMatch(given, sq.a ?? sq.answer ?? '');
            return (
              <div key={key} style={{ padding: '14px 16px', borderRadius: '16px', background: '#fff', border: '1px solid #e2e8f0' }}>
                <MathView content={sq.question} style={{ fontSize: '0.92rem', fontWeight: 700, color: '#1e293b', marginBottom: '8px' }} />
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                  <div style={{ padding: '10px 12px', borderRadius: '12px', background: subOK ? '#f0fdf4' : '#fef2f2', border: `1px solid ${subOK ? '#bbf7d0' : '#fecaca'}` }}>
                    <div style={{ fontSize: '0.62rem', fontWeight: 800, color: subOK ? '#16a34a' : '#dc2626', textTransform: 'uppercase', marginBottom: '4px' }}>Your answer</div>
                    <MathView content={String(given || '—')} style={{ fontSize: '0.95rem', fontWeight: 700, color: '#1e293b' }} />
                  </div>
                  <div style={{ padding: '10px 12px', borderRadius: '12px', background: '#f0fdf4', border: '1px solid #bbf7d0' }}>
                    <div style={{ fontSize: '0.62rem', fontWeight: 800, color: '#16a34a', textTransform: 'uppercase', marginBottom: '4px' }}>Correct</div>
                    <MathView content={String(sq.a ?? sq.answer ?? '')} style={{ fontSize: '0.95rem', fontWeight: 700, color: '#166534' }} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
        <div style={{ padding: '16px', borderRadius: '18px', background: isCorrect ? '#f0fdf4' : '#fef2f2', border: `1px solid ${isCorrect ? '#bbf7d0' : '#fecaca'}` }}>
          <div style={{ fontSize: '0.68rem', fontWeight: 800, color: isCorrect ? '#16a34a' : '#dc2626', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>Your answer</div>
          <MathView
            content={
              q.type === 'multiple_choice'
                ? (q.options?.[ans?.userAnswer] ?? '—')
                : (Array.isArray(ans?.userAnswer) ? ans.userAnswer.join(', ') : String(ans?.userAnswer ?? '—'))
            }
            style={{ fontSize: '1rem', fontWeight: 700, color: '#1e293b' }}
          />
        </div>
        <div style={{ padding: '16px', borderRadius: '18px', background: '#f0fdf4', border: '1px solid #bbf7d0' }}>
          <div style={{ fontSize: '0.68rem', fontWeight: 800, color: '#16a34a', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>Correct answer</div>
          <MathView
            content={
              q.type === 'multiple_choice'
                ? (q.options?.[Number(q.answer)] ?? String(q.answer))
                : String(q.answer ?? '')
            }
            style={{ fontSize: '1rem', fontWeight: 700, color: '#166534' }}
          />
        </div>
      </div>
      )}

      {/* step-by-step solution */}
      {solutionSteps.length > 0 && (
        <div className="app-panel" style={{ padding: '20px', borderRadius: '22px', border: '1px solid #e0e7ff' }}>
          <button
            onClick={() => setExpandedSteps((v) => !v)}
            style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '10px', background: 'none', border: 'none', cursor: 'pointer', padding: 0, marginBottom: expandedSteps ? '16px' : 0 }}
          >
            <div style={{ width: '32px', height: '32px', borderRadius: '10px', background: 'linear-gradient(135deg, #a78bfa, #7c3aed)', display: 'grid', placeItems: 'center', color: '#fff', flexShrink: 0 }}>
              <Lightbulb size={16} />
            </div>
            <div style={{ flex: 1, textAlign: 'left' }}>
              <div style={{ fontWeight: 900, color: '#1e1b4b', fontSize: '0.95rem' }}>Step-by-step solution</div>
              <div style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 700 }}>{solutionSteps.length} steps</div>
            </div>
            <ChevronRight size={18} color="#94a3b8" style={{ transform: expandedSteps ? 'rotate(90deg)' : 'none', transition: 'transform 0.2s' }} />
          </button>

          <AnimatePresence initial={false}>
            {expandedSteps && (
              <motion.div
                key="steps"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                style={{ overflow: 'hidden' }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {solutionSteps.map((step, si) => (
                    <div key={si} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                      <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: 'linear-gradient(135deg, #a78bfa, #7c3aed)', color: '#fff', display: 'grid', placeItems: 'center', fontWeight: 900, fontSize: '0.75rem', flexShrink: 0, marginTop: '2px' }}>
                        {si + 1}
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        {step.explanation && (
                          <MathView content={step.explanation} style={{ fontSize: '0.9rem', color: '#1e293b', fontWeight: 600, lineHeight: 1.6, marginBottom: step.workingOut ? '8px' : 0 }} />
                        )}
                        {step.workingOut && (
                          <div style={{ padding: '10px 14px', borderRadius: '12px', background: '#f5f3ff', border: '1px solid #ddd6fe' }}>
                            <MathView content={/\$|\\\(|\\\[/.test(step.workingOut) ? step.workingOut : `$${step.workingOut}$`} style={{ fontSize: '1rem', fontWeight: 700, color: '#4f46e5' }} />
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      {/* hint (if any) */}
      {q.hint && (
        <div style={{ padding: '14px 18px', borderRadius: '16px', background: '#fffbeb', border: '1px solid #fef3c7' }}>
          <div style={{ fontSize: '0.68rem', fontWeight: 800, color: '#d97706', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px' }}>Hint</div>
          <MathView content={q.hint} style={{ color: '#92400e', fontSize: '0.9rem', fontWeight: 600 }} />
        </div>
      )}

      {/* nav buttons */}
      <div style={{ display: 'grid', gridTemplateColumns: idx + 1 >= total ? '1fr 1fr' : '1fr', gap: '10px' }}>
        {idx + 1 < total ? (
          <button onClick={() => setIdx(idx + 1)} className="app-button app-button--primary" style={{ padding: '16px', borderRadius: '18px', background: 'linear-gradient(135deg, #a78bfa, #7c3aed)', display: 'inline-flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
            Next question <ArrowRight size={16} />
          </button>
        ) : (
          <>
            <button onClick={onDone} className="app-button" style={{ padding: '16px', borderRadius: '18px', border: '1px solid #e2e8f0', background: '#fff', color: '#475569', fontWeight: 800, display: 'inline-flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
              <ArrowLeft size={16} /> Back to results
            </button>
            <button onClick={onDone} className="app-button app-button--primary" style={{ padding: '16px', borderRadius: '18px', background: 'linear-gradient(135deg, #a78bfa, #7c3aed)', display: 'inline-flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
              <CheckCircle2 size={16} /> Done reviewing
            </button>
          </>
        )}
      </div>
    </div>
  );
};

// ── Result screen ──────────────────────────────────────────────────────
const ResultPanel = ({ result, onRestart, onExit, onReview, cumulativeAnalysis }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <div className="app-panel" style={{ padding: '28px', borderRadius: '28px', textAlign: 'center', background: 'linear-gradient(135deg, #ede9fe, #fff)' }}>
      <div style={{ width: '72px', height: '72px', borderRadius: '50%', background: 'linear-gradient(135deg, #a78bfa, #7c3aed)', display: 'grid', placeItems: 'center', color: '#fff', margin: '0 auto 14px' }}>
        <Trophy size={34} />
      </div>
      <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#94a3b8', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Round complete</div>
      <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#1e1b4b', margin: '6px 0' }}>{result.correct} / {result.total}</div>
      {result.addedToNote > 0 && (
        <div style={{ marginTop: '10px', display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#fffbeb', border: '1px solid #fde68a', color: '#92400e', padding: '6px 12px', borderRadius: '999px', fontSize: '0.8rem', fontWeight: 800 }}>
          <BookmarkPlus size={14} /> {result.addedToNote} added to Secret Note
        </div>
      )}
    </div>

    <div className="app-panel" style={{ padding: '24px', borderRadius: '24px' }}>
      <h4 style={{ margin: '0 0 14px', color: '#1e1b4b', fontWeight: 900, fontSize: '0.95rem' }}>This round by topic</h4>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {Object.entries(result.perTopic || {}).map(([id, t]) => {
          const pct = t.attempted > 0 ? Math.round((t.correct / t.attempted) * 100) : 0;
          const color = pct < 50 ? '#ef4444' : pct < 75 ? '#f59e0b' : '#10b981';
          return (
            <div key={id}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '4px' }}>
                <span style={{ fontWeight: 700, color: '#1e293b' }}>{t.title}</span>
                <span style={{ fontWeight: 800, color }}>{t.correct}/{t.attempted} · {pct}%</span>
              </div>
              <div style={{ height: '6px', background: '#f1f5f9', borderRadius: '999px', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${pct}%`, background: color }} />
              </div>
            </div>
          );
        })}
      </div>
    </div>

    <TopicAnalysisCard analysis={cumulativeAnalysis} />

    <button onClick={onReview} className="app-button" style={{ padding: '16px', borderRadius: '18px', background: 'linear-gradient(135deg, #f0fdf4, #dcfce7)', color: '#166534', fontWeight: 800, border: '1px solid #bbf7d0', display: 'inline-flex', justifyContent: 'center', alignItems: 'center', gap: '8px', width: '100%' }}>
      <Lightbulb size={16} /> Review step-by-step solutions
    </button>

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
      <button onClick={onExit} className="app-button" style={{ padding: '16px', borderRadius: '18px', background: '#fff', color: '#475569', fontWeight: 800, border: '1px solid #e2e8f0', display: 'inline-flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
        <ArrowLeft size={16} /> Back to setup
      </button>
      <button onClick={onRestart} className="app-button app-button--primary" style={{ padding: '16px', borderRadius: '18px', background: 'linear-gradient(135deg, #a78bfa, #7c3aed)', display: 'inline-flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
        <RotateCcw size={16} /> Start a new round
      </button>
    </div>
  </div>
);

// Small viewport hook — re-renders on width breakpoints so the dashboard
// can swap layouts (column counts, padding, stacking) responsively.
const useViewport = () => {
  const get = () => (typeof window === 'undefined' ? 1024 : window.innerWidth);
  const [w, setW] = useState(get);
  useEffect(() => {
    const onResize = () => setW(get());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return {
    width: w,
    isNarrow: w < 560,   // phones
    isMid: w < 900,      // small tablets
  };
};

// ── Setup dashboard ────────────────────────────────────────────────────
// A single composed view that fills the page when stage === 'setup'. It
// reads like a dashboard: hero (stats + CTA) on top, two-column row with
// topics & secret-note side by side, and the topic analysis chart below.
const SetupDashboard = ({ stats, selection, analysis, noteCount, dueCount, loading, onStart, onOpenSecretNote }) => {
  const { isNarrow, isMid } = useViewport();
  const accuracy = stats.attempted > 0 ? Math.round((stats.correct / stats.attempted) * 100) : 0;
  // Flatten the curriculum once so we can render the teacher-set chapter
  // chips with a year prefix.
  const allChapters = useMemo(() => {
    const list = [];
    allYearKeys.forEach((y) => flattenChapters(y).forEach((ch) => list.push({ ...ch, year: y })));
    return list;
  }, []);
  const selectedChips = selection.chapters
    .map((id) => allChapters.find((c) => c.id === id))
    .filter(Boolean);
  const hasTopics = selectedChips.length > 0;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* HERO — full-bleed gradient with stats and the primary CTA */}
      <div
        style={{
          position: 'relative',
          padding: isNarrow ? '22px 20px 20px' : '32px 32px 28px',
          borderRadius: isNarrow ? '24px' : '32px',
          color: '#1e1b4b',
          overflow: 'hidden',
          background: 'linear-gradient(135deg, #a78bfa 0%, #c4b5fd 60%, #ddd6fe 100%)',
          boxShadow: '0 18px 36px -16px rgba(124,58,237,0.35)',
        }}
      >
        {/* decorative glow */}
        <div aria-hidden style={{ position: 'absolute', top: '-60px', right: '-40px', width: '220px', height: '220px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.22), transparent 70%)' }} />
        <div aria-hidden style={{ position: 'absolute', bottom: '-80px', left: '-40px', width: '260px', height: '260px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.12), transparent 70%)' }} />

        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Row 1: badge + title */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{ width: '52px', height: '52px', borderRadius: '16px', background: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(6px)', display: 'grid', placeItems: 'center', color: '#5b21b6' }}>
              <GraduationCap size={24} />
            </div>
            <div>
              <div style={{ fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#5b21b6' }}>Exam Prep</div>
              <h1 style={{ margin: '2px 0 0', fontSize: isNarrow ? '1.4rem' : '1.8rem', fontWeight: 900, letterSpacing: '-0.01em', color: '#1e1b4b' }}>Time to practise</h1>
            </div>
          </div>

          {/* Row 2: stat tiles (glassy) — 3 cols on tablets+, 3-compact on phones */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: isNarrow ? '6px' : '10px' }}>
            <GlassStat label="Sessions" value={stats.sessions} compact={isNarrow} />
            <GlassStat label="Accuracy" value={`${accuracy}%`} compact={isNarrow} />
            <GlassStat label="Attempted" value={stats.attempted} compact={isNarrow} />
          </div>

          {/* Row 3: CTA — stacks on narrow; primary button stretches */}
          <div style={{ display: 'flex', flexDirection: isNarrow ? 'column' : 'row', alignItems: isNarrow ? 'stretch' : 'center', gap: '12px', flexWrap: 'wrap' }}>
            <button
              onClick={onStart}
              disabled={!hasTopics || loading}
              style={{
                flex: 1, minWidth: '200px',
                padding: '16px 22px',
                borderRadius: '18px',
                border: 'none',
                background: !hasTopics || loading ? 'rgba(255,255,255,0.25)' : '#fff',
                color: !hasTopics || loading ? 'rgba(255,255,255,0.7)' : '#5b21b6',
                fontWeight: 900, fontSize: '1.05rem',
                cursor: !hasTopics || loading ? 'not-allowed' : 'pointer',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                boxShadow: !hasTopics || loading ? 'none' : '0 12px 24px rgba(15,23,42,0.18)',
                transition: 'transform 0.15s, box-shadow 0.15s',
              }}
              onMouseDown={(e) => { if (hasTopics && !loading) e.currentTarget.style.transform = 'scale(0.98)'; }}
              onMouseUp={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
            >
              <Play size={18} /> {loading ? 'Loading…' : 'Start round'}
              <span style={{ fontSize: '0.8rem', fontWeight: 800, opacity: 0.65 }}>· 15 Qs</span>
            </button>
            <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#5b21b6', lineHeight: 1.4, textAlign: isNarrow ? 'center' : 'left' }}>
              {hasTopics
                ? `${selectedChips.length} ${selectedChips.length === 1 ? 'topic' : 'topics'} set by your teacher`
                : 'Your teacher hasn\'t picked topics yet.'}
            </div>
          </div>
        </div>
      </div>

      {/* SECRET NOTE — full-width bar above topics */}
      <button
        onClick={onOpenSecretNote}
        disabled={noteCount === 0}
        style={{
          width: '100%',
          padding: '18px 24px', borderRadius: '22px', textAlign: 'left',
          cursor: noteCount === 0 ? 'default' : 'pointer',
          border: '1px solid ' + (noteCount > 0 ? '#fde68a' : '#e2e8f0'),
          background: noteCount > 0 ? 'linear-gradient(135deg, #fffbeb, #fef3c7)' : '#fff',
          display: 'flex', alignItems: 'center', gap: '14px',
          transition: 'transform 0.15s, box-shadow 0.15s',
        }}
        onMouseEnter={(e) => { if (noteCount > 0) { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 14px 28px rgba(0,0,0,0.06)'; } }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
      >
        <div style={{ width: '44px', height: '44px', borderRadius: '14px', background: noteCount > 0 ? '#fcd34d' : '#f1f5f9', display: 'grid', placeItems: 'center', color: noteCount > 0 ? '#78350f' : '#94a3b8', flexShrink: 0 }}>
          <BookmarkPlus size={20} />
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontWeight: 900, color: noteCount > 0 ? '#78350f' : '#475569', fontSize: '0.95rem' }}>Exam Prep Secret Note</div>
          <div style={{ fontSize: '0.8rem', color: noteCount > 0 ? '#92400e' : '#94a3b8', fontWeight: 700, marginTop: '2px' }}>
            {noteCount === 0 ? 'Mistakes you make will appear here for review.' : `${noteCount} ${noteCount === 1 ? 'note' : 'notes'} · ${dueCount} due now`}
          </div>
        </div>
        {noteCount > 0 && <ChevronRight size={18} color="#92400e" />}
      </button>

      {/* TOPICS — full width below Secret Note */}
      <div className="app-panel" style={{ padding: '22px 24px', borderRadius: '22px', background: '#fff', border: '1px solid #e2e8f0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
          <Target size={16} color="#7c3aed" />
          <h3 style={{ margin: 0, fontWeight: 900, color: '#1e1b4b', fontSize: '0.95rem' }}>Your exam topics</h3>
        </div>
        {!hasTopics ? (
          <div style={{ padding: '20px', background: '#f8fafc', borderRadius: '14px', color: '#94a3b8', fontWeight: 700, textAlign: 'center', fontSize: '0.9rem' }}>
            No topics yet — ask your teacher.
          </div>
        ) : (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {selectedChips.map((ch) => (
              <div key={ch.id} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 14px', borderRadius: '14px', background: 'linear-gradient(135deg, #f5f3ff, #ede9fe)', border: '1px solid #ddd6fe', fontWeight: 700, fontSize: '0.85rem' }}>
                <span style={{ fontSize: '0.65rem', fontWeight: 900, color: '#5b21b6', background: '#fff', padding: '2px 8px', borderRadius: '999px', letterSpacing: '0.05em' }}>
                  {ch.year.replace('Year ', 'Y')}
                </span>
                <span style={{ color: '#312e81' }}>{ch.title}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Where to focus — visual progress chart */}
      <div className="app-panel" style={{ padding: '22px 24px', borderRadius: '22px', background: '#fff', border: '1px solid #e2e8f0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
          <Sparkles size={16} color="#7c3aed" />
          <h3 style={{ margin: 0, fontWeight: 900, color: '#1e1b4b', fontSize: '0.95rem' }}>Where to focus</h3>
          <span style={{ marginLeft: 'auto', fontSize: '0.7rem', fontWeight: 800, color: '#94a3b8' }}>
            Weakest topics first
          </span>
        </div>
        {analysis.length === 0 ? (
          <div style={{ padding: '24px', background: '#f8fafc', borderRadius: '14px', color: '#94a3b8', fontWeight: 700, textAlign: 'center' }}>
            Finish a round to see your topic breakdown.
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {analysis.slice(0, 8).map((t) => {
              // Tier the row by % so the background tint instantly communicates
              // strong / weak topics at a glance.
              const tier = t.attempted < 3
                ? 'neutral'
                : t.pct < 50
                  ? 'weak'
                  : t.pct < 75
                    ? 'mid'
                    : 'strong';
              const palette = {
                neutral: { bg: '#f8fafc', border: '#e2e8f0', track: '#e2e8f0', accent: '#94a3b8' },
                weak:    { bg: '#fef2f2', border: '#fecaca', track: '#fee2e2', accent: '#ef4444' },
                mid:     { bg: '#fffbeb', border: '#fde68a', track: '#fef3c7', accent: '#f59e0b' },
                strong:  { bg: '#f0fdf4', border: '#bbf7d0', track: '#dcfce7', accent: '#10b981' },
              }[tier];
              return (
                <div
                  key={t.topicId}
                  style={{
                    display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 80px', gap: '14px', alignItems: 'center',
                    padding: '12px 16px', borderRadius: '14px',
                    background: palette.bg, border: `1px solid ${palette.border}`,
                  }}
                >
                  <div>
                    <div style={{ fontWeight: 800, color: '#1e293b', fontSize: '0.85rem', marginBottom: '6px' }}>{t.title}</div>
                    <div style={{ height: '8px', background: palette.track, borderRadius: '999px', overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${t.pct}%`, background: palette.accent, transition: 'width 0.4s' }} />
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '1.05rem', fontWeight: 900, color: palette.accent }}>{t.pct}%</div>
                    <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#94a3b8' }}>{t.correct}/{t.attempted}</div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

const GlassStat = ({ label, value, compact }) => (
  <div style={{
    background: 'rgba(255,255,255,0.55)',
    backdropFilter: 'blur(6px)',
    border: '1px solid rgba(255,255,255,0.7)',
    borderRadius: compact ? '12px' : '16px',
    padding: compact ? '8px 8px' : '12px 14px',
    textAlign: 'center',
  }}>
    <div style={{ fontSize: compact ? '0.6rem' : '0.65rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#5b21b6' }}>{label}</div>
    <div style={{ fontSize: compact ? '1.2rem' : '1.6rem', fontWeight: 900, marginTop: '2px', color: '#1e1b4b' }}>{value}</div>
  </div>
);

// ── Top-level ExamPrep page ────────────────────────────────────────────
const ExamPrep = ({ profile, onExamActiveChange }) => {
  const { user } = useAuth();
  const { showToast } = useToast();
  const uid = user?.uid;
  const enabled = profile?.examPrepEnabled === true;

  // Chapter selection is teacher-controlled: it lives on the student doc
  // (profile.examPrepSelection). The student no longer picks topics — they
  // just see what the teacher set and hit Start.
  const selection = useMemo(() => ({
    years: Array.isArray(profile?.examPrepSelection?.years) ? profile.examPrepSelection.years : [],
    chapters: Array.isArray(profile?.examPrepSelection?.chapters) ? profile.examPrepSelection.chapters : [],
    examPaperOnly: profile?.examPrepSelection?.examPaperOnly === true,
  }), [profile?.examPrepSelection]);
  const [stage, setStage] = useState('setup'); // 'setup' | 'quiz' | 'result' | 'review' | 'secretNote'
  const [lastAnswers, setLastAnswers] = useState([]);

  useEffect(() => {
    onExamActiveChange?.(stage === 'quiz');
  }, [stage, onExamActiveChange]);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [analysis, setAnalysis] = useState(() => uid ? getTopicAnalysis(uid) : []);
  const [stats, setStats] = useState(() => uid ? getStats(uid) : { sessions: 0, correct: 0, attempted: 0 });
  const [noteCount, setNoteCount] = useState(0);
  const [dueCount, setDueCount] = useState(0);
  const [reportTarget, setReportTarget] = useState(null);
  const [reportMessage, setReportMessage] = useState('');
  const [submittingReport, setSubmittingReport] = useState(false);

  useEffect(() => {
    if (!uid) return;
    setAnalysis(getTopicAnalysis(uid));
    setStats(getStats(uid));
    setNoteCount(getNoteCount(EXAM_PREP_NOTE_KIND, uid));
    setDueCount(getDueCount(EXAM_PREP_NOTE_KIND, uid));
  }, [uid, stage]);

  const submitReport = async () => {
    if (!reportTarget || !reportMessage.trim() || !user?.uid) return;
    setSubmittingReport(true);
    try {
      await addDoc(collection(db, 'reports'), {
        studentId: user.uid,
        studentName: user.displayName || user.email || 'Student',
        questionId: reportTarget.id || '',
        source: 'exam_prep',
        questionData: {
          id: reportTarget.id || '',
          question: reportTarget.question || '',
          answer: String(reportTarget.answer ?? ''),
          type: reportTarget.type || '',
          chapterId: reportTarget.chapterId || '',
          chapterTitle: reportTarget.chapterTitle || '',
          topicId: reportTarget.topicId || '',
          topicTitle: reportTarget.topicTitle || '',
        },
        message: reportMessage.trim(),
        status: 'open',
        createdAt: serverTimestamp(),
      });
      showToast('Report submitted — we will review it.', 'success');
      setReportTarget(null);
      setReportMessage('');
    } catch (err) {
      console.error(err);
      showToast('Failed to submit report.', 'error');
    } finally {
      setSubmittingReport(false);
    }
  };

  if (!enabled) {
    return (
      <div className="app-page" style={{ padding: '40px 20px' }}>
        <div className="app-panel" style={{ maxWidth: '520px', margin: '0 auto', padding: '40px 28px', textAlign: 'center', borderRadius: '28px' }}>
          <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#f1f5f9', display: 'grid', placeItems: 'center', margin: '0 auto 16px' }}>
            <Lock size={26} color="#94a3b8" />
          </div>
          <h2 style={{ margin: 0, color: '#1e1b4b', fontWeight: 900 }}>Exam Prep is locked</h2>
          <p style={{ color: '#64748b', fontWeight: 600, marginTop: '8px' }}>
            Ask your teacher to enable Exam Prep in your profile.
          </p>
        </div>
      </div>
    );
  }

  const handleStart = async () => {
    if (!uid) return;
    setLoading(true);
    try {
      const { questions: q } = await startRound(uid, selection);
      if (!q || q.length === 0) {
        alert('No questions found for the chosen chapters yet. Try adding more chapters.');
        return;
      }
      setQuestions(q);
      setStage('quiz');
    } finally {
      setLoading(false);
    }
  };

  const handleFinishRound = async (answers) => {
    if (!uid) return;
    const r = await finishRound(uid, answers, { questions });
    setResult(r);
    setLastAnswers(answers);
    setAnalysis(getTopicAnalysis(uid));
    setStats(getStats(uid));
    setStage('result');
  };

  const handleRestart = async () => {
    setResult(null);
    setQuestions([]);
    await handleStart();
  };

  return (
    <div className="app-page" style={{ padding: stage === 'quiz' ? 'clamp(8px, 1.5vw, 16px)' : 'clamp(16px, 3vw, 28px) clamp(12px, 3vw, 28px) 80px', minHeight: stage === 'quiz' ? '100vh' : undefined }}>
      <div style={{ maxWidth: stage === 'quiz' ? '100%' : 'min(1080px, 100%)', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {stage === 'setup' && (
          <SetupDashboard
            stats={stats}
            selection={selection}
            analysis={analysis}
            noteCount={noteCount}
            dueCount={dueCount}
            loading={loading}
            onStart={handleStart}
            onOpenSecretNote={() => setStage('secretNote')}
          />
        )}

        {stage === 'quiz' && questions.length > 0 && (
          <QuizView questions={questions} onFinish={handleFinishRound} onReport={(q) => setReportTarget(q)} />
        )}

        {stage === 'secretNote' && uid && (
          <SecretNoteView
            kind={EXAM_PREP_NOTE_KIND}
            uid={uid}
            user={user}
            studentName={user?.displayName || user?.email || 'Student'}
            onClose={() => setStage('setup')}
            isMobile={false}
          />
        )}

        {stage === 'result' && result && (
          <ResultPanel result={result} onRestart={handleRestart} onExit={() => setStage('setup')} onReview={() => setStage('review')} cumulativeAnalysis={analysis} />
        )}

        {stage === 'review' && questions.length > 0 && (
          <ReviewView questions={questions} answers={lastAnswers} onDone={() => setStage('result')} />
        )}
      </div>

      {/* Report-question modal */}
      <AnimatePresence>
        {reportTarget && (
          <div style={{ position: 'fixed', inset: 0, zIndex: 10000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setReportTarget(null)} style={{ position: 'absolute', inset: 0, background: 'rgba(15,23,42,0.7)', backdropFilter: 'blur(8px)' }} />
            <motion.div initial={{ scale: 0.94, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.94, opacity: 0 }} style={{ position: 'relative', maxWidth: '480px', width: '100%', background: '#fff', borderRadius: '24px', padding: '24px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.4)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                <div>
                  <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#94a3b8', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Report a problem</div>
                  <h3 style={{ margin: '4px 0 0', fontWeight: 900, color: '#1e1b4b' }}>Ask the teacher</h3>
                </div>
                <button onClick={() => setReportTarget(null)} style={{ border: 'none', background: '#f1f5f9', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}><X size={16} /></button>
              </div>
              <p style={{ margin: '0 0 12px', fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>
                Describe what's wrong, or write a question for the teacher about this problem. They'll see it in the Reports tab.
              </p>
              <textarea
                rows={4}
                value={reportMessage}
                onChange={(e) => setReportMessage(e.target.value)}
                placeholder="e.g. The answer doesn't look right, or I don't understand step 2…"
                style={{ width: '100%', padding: '14px 16px', borderRadius: '14px', border: '1px solid #e2e8f0', outline: 'none', fontFamily: 'inherit', fontSize: '0.95rem', resize: 'vertical', fontWeight: 500 }}
              />
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px', marginTop: '12px' }}>
                <button onClick={() => setReportTarget(null)} style={{ padding: '10px 16px', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#fff', color: '#475569', fontWeight: 700, cursor: 'pointer' }}>Cancel</button>
                <button onClick={submitReport} disabled={!reportMessage.trim() || submittingReport} style={{ padding: '10px 18px', borderRadius: '12px', border: 'none', background: !reportMessage.trim() ? '#cbd5e1' : 'linear-gradient(135deg, #a78bfa, #7c3aed)', color: '#fff', fontWeight: 800, cursor: !reportMessage.trim() ? 'not-allowed' : 'pointer' }}>
                  {submittingReport ? 'Sending…' : 'Send report'}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ExamPrep;
