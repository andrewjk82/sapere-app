import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
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
import { MATH_SYMBOLS, notifyTeacherPendingReview } from '../utils/challengeUtils';
import { gradeQuestion } from '../utils/answerMatching';

// Quick-insert buttons for the MathLive editor (`#?` = cursor placeholder).
const EXAM_QUICK_INSERTS = [
  { label: '√',   latex: '\\sqrt{#?}',     title: 'Square root' },
  { label: 'a/b', latex: '\\frac{#?}{#?}', title: 'Fraction' },
  { label: 'xⁿ',  latex: '^{#?}',          title: 'Exponent' },
  { label: 'π',   latex: '\\pi',           title: 'Pi' },
  { label: '±',   latex: '\\pm',           title: 'Plus or minus' },
  { label: '°',   latex: '^{\\circ}',      title: 'Degrees' },
  { label: '( )', latex: '(#?)',           title: 'Brackets' },
  { label: '\u2264', latex: '\\le', title: 'Less than or equal to' },
  { label: '\u2265', latex: '\\ge', title: 'Greater than or equal to' },
];
import { db } from '../firebase/config';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { getNoteCount, getDueCount } from '../utils/secretNote';
import SecretNoteView from './challenge/SecretNoteView';
import WorkingOutCanvas from './WorkingOutCanvas';
import LessonPlayer from './lessons/LessonPlayer';
import { getLesson } from '../lessons/registry';
import {
  getStats, getTopicAnalysis, getProgressAnalysis,
  startPractice, pickNextQuestion, recordAnswer, endSession,
  hydrateExamPrepState, ensurePool,
  EXAM_PREP_NOTE_KIND,
} from '../services/examPrepService';

// Fisher–Yates shuffle (returns a new array).
const shuffleArray = (arr) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

// Shuffle a multiple-choice question's options and remap the answer index so
// the correct option follows its new position. MC answers in Exam Prep are
// stored/graded as the option index (see correctMc / gradeQuestion), so we keep
// `answer` pointing at the correct option after the reorder. Non-MC questions
// are returned unchanged.
const shuffleMcOptions = (q) => {
  if (q?.type !== 'multiple_choice' || !(q.options?.length > 1)) return q;
  const order = shuffleArray(q.options.map((_, i) => i));
  const newOptions = order.map((i) => q.options[i]);
  const correctIdx = Number(q.answer);
  const newAnswer = Number.isInteger(correctIdx) ? order.indexOf(correctIdx) : q.answer;
  return { ...q, options: newOptions, answer: newAnswer };
};

const flattenChapters = (yearKey) => {
  const data = CURRICULUM_DATA[yearKey];
  if (!data) return [];
  if (Array.isArray(data)) return data;
  // Year 11/12 split by course — collapse all courses into one list.
  return Object.values(data).flat();
};

const allYearKeys = Object.keys(CURRICULUM_DATA);

// ChosenTopicsCard removed — setup dashboard owns the start CTA.

// ── Topic-analysis card (cumulative weak-area breakdown) ────────────────
const TopicAnalysisCard = ({ analysis }) => (
  <div className="app-panel" style={{ padding: '24px', borderRadius: '24px' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
      <Sparkles size={18} color="#7c3aed" />
      <h3 style={{ margin: 0, fontWeight: 900, color: '#1e1b4b', fontSize: '1rem' }}>Where to focus</h3>
    </div>
    {analysis.length === 0 ? (
      <p style={{ margin: 0, color: '#94a3b8', fontWeight: 700, fontSize: '0.9rem' }}>Practise a few questions to see your topic breakdown.</p>
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

// ── Quiz view — endless practice (one live question; quit anytime) ─────
const QuizView = ({
  question: q,
  sessionNum = 1,
  mastery = { mastered: 0, total: 0, remaining: 0 },
  onAnswered,
  onRequestNext,
  onQuit,
  onReport,
  user,
}) => {
  const [draft, setDraft] = useState(null);
  const [showHint, setShowHint] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [lastRes, setLastRes] = useState(null); // { userAnswer, correct, pending, ... }
  const [focusedBlank, setFocusedBlank] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [questionStartTime, setQuestionStartTime] = useState(null);
  const [showCanvas, setShowCanvas] = useState(true);
  const [isGraphPaper, setIsGraphPaper] = useState(false);
  const [advancing, setAdvancing] = useState(false);
  const [showLesson, setShowLesson] = useState(false);
  const [viewW, setViewW] = useState(() => (typeof window !== 'undefined' ? window.innerWidth : 1024));
  const canvasRef = useRef(null);
  const mathInputRef = useRef(null);
  // Scroll container (wide left panel) + action button — after feedback, Next
  // can sit below the fold; sketch stays editable so we scroll/pin the CTA instead.
  const leftScrollRef = useRef(null);
  const actionBtnRef = useRef(null);
  const showFeedbackRef = useRef(showFeedback);

  const needsTeacher = q ? (q.type === 'teacher_review' || q.type === 'graph_sketch' || q.requiresManualGrading === true) : false;
  const lesson = getLesson(q?.topicId);
  const isWide = viewW >= 860;

  useEffect(() => {
    const onResize = () => setViewW(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    if (!q) return;
    if (q.type === 'multiple_choice') setDraft(null);
    else if (q.type === 'fill_blank') setDraft(Array((q.blanks || []).length).fill(''));
    else setDraft('');
    setShowHint(false);
    setShowFeedback(false);
    setLastRes(null);
    setFocusedBlank(0);
    setAdvancing(false);
    const limit = q.timeLimit || 120;
    setTimeLeft(limit);
    setQuestionStartTime(Date.now());
  }, [q?.id]);

  useEffect(() => { showFeedbackRef.current = showFeedback; }, [showFeedback]);

  // After answer reveal, bring feedback + Next into view. Sketch board stays
  // unlocked so students can correct work — only scroll/pin the CTA, not the pad.
  useEffect(() => {
    if (!showFeedback) return;
    let cancelled = false;
    let timeoutId = null;
    const rafId = requestAnimationFrame(() => {
      timeoutId = setTimeout(() => {
        if (cancelled) return;
        const left = leftScrollRef.current;
        if (left && left.scrollHeight > left.clientHeight) {
          left.scrollTo({ top: left.scrollHeight, behavior: 'smooth' });
        }
        actionBtnRef.current?.scrollIntoView?.({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
      }, 80);
    });
    return () => {
      cancelled = true;
      cancelAnimationFrame(rafId);
      if (timeoutId != null) clearTimeout(timeoutId);
    };
  }, [showFeedback, q?.id]);

  useEffect(() => {
    if (!q || !questionStartTime || showFeedback) return;
    const limit = (q?.timeLimit || 120) * 1000;
    const endTime = questionStartTime + limit;
    const timer = setInterval(() => {
      if (showFeedbackRef.current) { clearInterval(timer); return; }
      const remaining = Math.max(0, Math.ceil((endTime - Date.now()) / 1000));
      setTimeLeft(remaining);
      if (remaining <= 0) {
        clearInterval(timer);
        if (!showFeedbackRef.current) {
          const timed = {
            userAnswer: '',
            correct: false,
            questionId: q?.id,
            topicId: q?.topicId,
            topicTitle: q?.topicTitle,
            timedOut: true,
            pending: false,
          };
          setLastRes(timed);
          setShowFeedback(true);
          onAnswered?.(timed, q);
        }
      }
    }, 200);
    return () => clearInterval(timer);
  }, [questionStartTime, showFeedback, q?.timeLimit, q?.id, onAnswered, q]);

  if (!q) return null;

  const submit = async () => {
    if (showFeedbackRef.current || showFeedback) return;
    const userAnswer = draft;
    const { correct } = needsTeacher ? { correct: null } : gradeQuestion(q, userAnswer);

    // 손글씨 캡처는 setShowFeedback(리렌더로 캔버스 언마운트 가능)보다 먼저.
    let answerImages = [];
    const hasInk = canvasRef.current?.hasContent ? canvasRef.current.hasContent() : true;
    const alwaysCapture = q?.type === 'graph_sketch';
    if (needsTeacher && user?.uid && (hasInk || alwaysCapture)) {
      try {
        if (canvasRef.current?.exportPageImages) {
          answerImages = (await canvasRef.current.exportPageImages({ force: true })) || [];
        }
        if (answerImages.length === 0 && canvasRef.current?.exportImage) {
          const single = await canvasRef.current.exportImage({ force: true });
          if (single) answerImages = [single];
        }
      } catch { /* ignore — 빈 캔버스면 그대로 빈 배열 */ }
      answerImages = answerImages.filter((u) => u && u.length > 100);
    }

    const res = {
      userAnswer,
      correct,
      questionId: q.id,
      topicId: q.topicId,
      topicTitle: q.topicTitle,
      pending: needsTeacher,
    };
    setLastRes(res);
    setShowFeedback(true);
    onAnswered?.(res, q);

    if (needsTeacher && user?.uid) {
      const canvasDataUrl = answerImages[0] || null;

      addDoc(collection(db, 'grading_queue'), {
        userId: user.uid,
        userName: user.displayName || user.email || 'Student',
        userEmail: user.email || '',
        date: new Date().toLocaleDateString('en-CA'),
        questionId: q.id || null,
        questionText: q.question || q.text || '',
        questionType: q.type || 'short_answer',
        options: Array.isArray(q.options) ? q.options.map(o => typeof o === 'string' ? o : (o?.text || String(o))) : [],
        answerText: typeof userAnswer === 'string' ? userAnswer.trim() : null,
        answerImage: canvasDataUrl,
        answerImages,
        hasDrawing: answerImages.length > 0,
        status: 'pending',
        submittedAt: serverTimestamp(),
        challengeType: 'exam_prep',
        topicId: q.topicId || q.chapterId || '',
        topicTitle: q.topicTitle || '',
        chapterTitle: q.chapterTitle || '',
        correctAnswer: q.answer || '',
        solution: q.solution || '',
        requiresManualGrading: true,
      }).catch(err => console.warn('grading_queue write failed:', err));
      notifyTeacherPendingReview({
        studentId: user.uid,
        studentName: user.displayName || user.email || 'Student',
        studentEmail: user.email || '',
        questionText: q.question || q.text || '',
        challengeType: 'exam_prep',
        topicTitle: q.topicTitle || '',
        chapterTitle: q.chapterTitle || '',
      }).catch(() => {});
    }
  };

  const advance = async () => {
    if (advancing) return;
    setAdvancing(true);
    if (canvasRef.current) {
      try { canvasRef.current.clear?.(); } catch { /* ignore */ }
    }
    try {
      await onRequestNext?.();
    } finally {
      setAdvancing(false);
    }
  };

  const canSubmit = (() => {
    if (q.type === 'multiple_choice') return draft !== null && draft !== undefined;
    if (q.type === 'fill_blank') return Array.isArray(draft) && draft.every((s) => String(s || '').trim() !== '');
    if (needsTeacher) return true;
    return String(draft || '').trim() !== '';
  })();

  const correctMc = q.type === 'multiple_choice' ? Number(q.answer) : null;

  const masteryPct = mastery.total > 0 ? Math.round((mastery.mastered / mastery.total) * 100) : 0;

  const header = (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
      <div>
        <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Exam Prep · endless practice</div>
        <div style={{ fontSize: '1.1rem', fontWeight: 900, color: '#1e1b4b' }}>
          Question {sessionNum}
          <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#94a3b8', marginLeft: '8px' }}>
            · {mastery.mastered}/{mastery.total} mastered
          </span>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <button
          onClick={() => onQuit?.()}
          title="Stop practice and save progress"
          style={{
            height: '36px', padding: '0 12px', borderRadius: '12px', border: '1px solid #e2e8f0',
            background: '#fff', color: '#475569', fontWeight: 800, fontSize: '0.78rem', cursor: 'pointer',
            display: 'inline-flex', alignItems: 'center', gap: '6px',
          }}
        >
          <X size={14} /> Quit
        </button>
        <button
          onClick={async () => {
            let sketchDataUrl = null;
            try { sketchDataUrl = await canvasRef.current?.exportImage?.({ force: false }) || null; } catch { /* ignore */ }
            onReport?.(q, draft, sketchDataUrl);
          }}
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
      {/* Deck mastery (correct-once questions / full pool) */}
      <div style={{ width: '100%', height: '3px', background: '#e2e8f0', borderRadius: '999px', overflow: 'hidden' }}>
        <div style={{ height: '100%', width: `${masteryPct}%`, background: '#a78bfa', borderRadius: '999px', transition: 'width 0.3s' }} />
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
      <MathView content={q.question} graphData={(q.type === 'graph_sketch' || q.type === 'teacher_review' || (q.requiresManualGrading && /(draw|sketch|construct)/i.test(q.question || ''))) ? (showFeedback ? q.graphData : null) : q.graphData} style={{ fontSize: '0.98rem', lineHeight: 1.75, color: '#1e1b4b', fontWeight: 500 }} />

      {/* Watch the lecture — shown when this topic has an authored lesson */}
      {lesson && (
        <button
          onClick={() => setShowLesson(true)}
          style={{
            marginTop: '10px', alignSelf: 'flex-start',
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '8px 14px', borderRadius: '999px',
            background: '#fff', border: '1.5px solid #ddd6fe',
            color: '#7c3aed', fontSize: '0.8rem', fontWeight: 800, cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(124,58,237,0.1)',
          }}
        >
          <GraduationCap size={15} /> Watch the lecture
        </button>
      )}

      {showLesson && lesson && createPortal(
        <LessonPlayer lesson={lesson} onClose={() => setShowLesson(false)} />,
        document.body,
      )}
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

  const answerArea = q.type === 'multiple_choice' ? (
    <div style={{ display: 'grid', gap: '10px' }}>
      {(q.options || []).map((opt, i) => {
        const optText = typeof opt === 'string' ? opt : opt.text;
        const selected = draft === i;
        const isCorrect = showFeedback && i === correctMc;
        const isWrong = showFeedback && selected && !isCorrect;
        return (
          <button
            key={i}
            onClick={() => !showFeedback && setDraft(i)}
            disabled={showFeedback}
            style={{ padding: '14px 22px', borderRadius: '100px', border: `2px solid ${isCorrect ? '#10b981' : isWrong ? '#ef4444' : selected ? '#6366f1' : 'transparent'}`, background: isCorrect ? '#f0fdf4' : isWrong ? '#fef2f2' : selected ? '#f5f3ff' : '#fff', display: 'flex', alignItems: 'center', gap: '14px', cursor: showFeedback ? 'default' : 'pointer', boxShadow: '0 4px 12px rgba(0,0,0,0.03)', textAlign: 'left' }}
          >
            <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: isCorrect ? '#10b981' : selected ? '#6366f1' : '#f1f5f9', color: isCorrect || selected ? '#fff' : '#64748b', display: 'grid', placeItems: 'center', fontWeight: 800, fontSize: '0.85rem', flexShrink: 0 }}>
              {String.fromCharCode(65 + i)}
            </div>
            <MathView content={optText} style={{ flex: 1, fontSize: '1rem', color: '#1e1b4b', fontWeight: 500 }} />
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
      {/* Quick-insert buttons (same MathLive editor as Daily Challenge / Secret Note) */}
      {!showFeedback && (
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '4px' }}>
          {EXAM_QUICK_INSERTS.map((b) => (
            <button
              key={b.label}
              type="button"
              title={b.title}
              onClick={(e) => { e.preventDefault(); mathInputRef.current?.insert(b.latex); }}
              style={{ minWidth: '48px', height: '44px', padding: '0 12px', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#fff', color: '#4f46e5', fontSize: '1.1rem', fontWeight: 800, cursor: 'pointer', fontFamily: '"KaTeX_Main", "Times New Roman", serif' }}
            >
              {b.label}
            </button>
          ))}
        </div>
      )}
      <MathInput
        ref={mathInputRef}
        value={typeof draft === 'string' ? draft : ''}
        onChange={(latex) => { if (!showFeedback) setDraft(latex); }}
        onEnter={() => { if ((needsTeacher || String(draft || '').trim()) && !showFeedback) submit(); }}
        readOnly={showFeedback}
        placeholder={needsTeacher ? "Optional notes (draw on canvas)..." : "Type your answer…"}
        autoFocus
      />
    </div>
  );

  const feedbackPanel = showFeedback && (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
    >
      {/* Result banner */}
      {!lastRes?.pending && (
        <div style={{
          display: 'flex', alignItems: 'center', gap: '10px',
          padding: '14px 18px', borderRadius: '16px',
          background: lastRes?.correct ? '#f0fdf4' : '#fef2f2',
          border: `1.5px solid ${lastRes?.correct ? '#bbf7d0' : '#fecaca'}`,
        }}>
          {lastRes?.correct
            ? <CheckCircle2 size={22} color="#16a34a" />
            : <XCircle size={22} color="#dc2626" />}
          <div>
            <div style={{ fontWeight: 900, fontSize: '1rem', color: lastRes?.correct ? '#15803d' : '#dc2626' }}>
              {lastRes?.correct ? 'Correct!' : 'Incorrect'}
            </div>
            {!lastRes?.correct && q.answer != null && (
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#475569', marginTop: '2px' }}>
                Correct answer: <MathView content={
                  q.type === 'multiple_choice'
                    ? (typeof q.options?.[Number(q.answer)] === 'string' ? q.options[Number(q.answer)] : q.options?.[Number(q.answer)]?.text ?? String(q.answer))
                    : String(q.answer)
                } style={{ display: 'inline', color: '#15803d', fontWeight: 800 }} />
              </div>
            )}
          </div>
        </div>
      )}

      {/* Solution */}
      {(q.solution || (q.solutionSteps || []).length > 0) && (
        <div style={{ padding: '16px 18px', borderRadius: '16px', background: '#f5f3ff', border: '1px solid #ddd6fe' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
            <Lightbulb size={16} color="#7c3aed" />
            <span style={{ fontSize: '0.72rem', fontWeight: 900, color: '#7c3aed', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Solution</span>
          </div>
          {q.solution && !(Array.isArray(q.solutionSteps) && q.solutionSteps.length > 0) && (
            <MathView content={q.solution} style={{ fontSize: '0.92rem', color: '#3730a3', fontWeight: 600, lineHeight: 1.65 }} />
          )}
          {(q.solutionSteps || []).length > 0 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: q.solution ? '12px' : 0 }}>
              {q.solutionSteps.map((step, si) => (
                <div key={si} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'linear-gradient(135deg,#a78bfa,#7c3aed)', color: '#fff', display: 'grid', placeItems: 'center', fontWeight: 900, fontSize: '0.7rem', flexShrink: 0 }}>
                    {si + 1}
                  </div>
                  <div style={{ flex: 1 }}>
                    {step.explanation && <MathView content={step.explanation} style={{ fontSize: '0.88rem', color: '#1e293b', fontWeight: 600, lineHeight: 1.6 }} />}
                    {step.workingOut && (
                      <div style={{ marginTop: '6px', padding: '8px 12px', borderRadius: '10px', background: '#ede9fe', border: '1px solid #c4b5fd' }}>
                        <MathView content={/\$|\\\(|\\\[/.test(step.workingOut) ? step.workingOut : `$${step.workingOut}$`} style={{ fontSize: '0.95rem', fontWeight: 700, color: '#4f46e5' }} />
                      </div>
                    )}
                    {step.graphData && (
                      <div style={{ marginTop: '8px', borderRadius: '12px', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
                        <MathView content="" graphData={step.graphData} style={{ minHeight: step.graphData?.jsxGraph?.height ? `${step.graphData.jsxGraph.height}px` : '240px' }} />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </motion.div>
  );

  const actionButton = !showFeedback ? (
    <button onClick={submit} disabled={!canSubmit} className="app-button app-button--primary" style={{ width: '100%', padding: '16px', borderRadius: '18px', background: !canSubmit ? '#cbd5e1' : 'linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)', cursor: !canSubmit ? 'not-allowed' : 'pointer' }}>
      Submit Answer
    </button>
  ) : (
    <button onClick={advance} disabled={advancing} className="app-button app-button--primary" style={{ width: '100%', padding: '16px', borderRadius: '18px', background: 'linear-gradient(135deg, #a78bfa, #7c3aed)', display: 'inline-flex', justifyContent: 'center', alignItems: 'center', gap: '10px', opacity: advancing ? 0.7 : 1 }}>
      {advancing ? 'Loading…' : 'Next question'} <ArrowRight size={18} />
    </button>
  );

  // CTA row: wide layout pins it under the left scroll pane so Next is always
  // reachable without locking the sketch pad. Narrow uses sticky so page scroll
  // still works when the solution is long.
  const actionRow = (
    <div
      ref={actionBtnRef}
      style={{
        flexShrink: 0,
        paddingTop: '12px',
        marginTop: '4px',
        borderTop: '1px solid #f1f5f9',
        background: 'linear-gradient(180deg, rgba(255,255,255,0.92) 0%, #fff 40%)',
        // Narrow / page-scroll path: keep CTA reachable while reading solution
        // or scrolling the sketch area below.
        ...(isWide && showCanvas ? {} : {
          position: 'sticky',
          bottom: 8,
          zIndex: 6,
          paddingBottom: 4,
        }),
      }}
    >
      {actionButton}
    </div>
  );

  // Wide layout: question on left, canvas on right — both fill viewport height
  if (isWide && showCanvas) {
    return (
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '16px',
        height: 'calc(100vh - 80px)',
        maxHeight: 'calc(100dvh - 80px)',
        alignItems: 'stretch',
        minHeight: 0,
      }}>
        {/* Left: scrollable Q/A + pinned Submit/Next (sketch stays editable on right) */}
        <div className="app-panel" style={{
          padding: '28px', borderRadius: '28px',
          display: 'flex', flexDirection: 'column', gap: '0',
          minWidth: 0, minHeight: 0, overflow: 'hidden',
        }}>
          <div
            ref={leftScrollRef}
            style={{
              flex: 1,
              minHeight: 0,
              overflowY: 'auto',
              overflowX: 'hidden',
              WebkitOverflowScrolling: 'touch',
              overscrollBehavior: 'contain',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              paddingRight: '2px',
            }}
          >
            {header}
            {progressBar}
            {questionCard}
            {answerArea}
            {feedbackPanel}
          </div>
          {actionRow}
        </div>
        {/* Right: canvas fills full height — always unlocked for practice/correction */}
        <div style={{ minWidth: 0, minHeight: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ display: 'flex', justifyContent: 'flex-end', flexShrink: 0 }}>
            <button
              onClick={() => setIsGraphPaper(v => !v)}
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
          <div style={{ flex: 1, minHeight: 0, borderRadius: '20px', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
            <WorkingOutCanvas ref={canvasRef} questionType="short_answer" isSubmitted={false} isGraph={isGraphPaper} />
          </div>
        </div>
      </div>
    );
  }

  // Narrow layout: stacked — sticky CTA so Next stays reachable over long solutions
  return (
    <div className="app-panel" style={{ padding: '28px', borderRadius: '28px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {header}
      {progressBar}
      {questionCard}
      {answerArea}
      {feedbackPanel}
      {actionRow}
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
                onClick={() => setIsGraphPaper(v => !v)}
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
              <WorkingOutCanvas ref={canvasRef} questionType="short_answer" isSubmitted={false} isGraph={isGraphPaper} />
            </div>
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
  const [showLesson, setShowLesson] = useState(false);
  const q = questions[idx];
  const ans = answers[idx];
  const total = questions.length;

  useEffect(() => { setExpandedSteps(true); setShowLesson(false); }, [idx]);

  if (!q) return null;

  const isPending = ans?.pending === true;
  const isCorrect = !isPending && ans?.correct;
  const solutionSteps = q.solutionSteps || [];
  // Lesson for this question's topic, if one is registered.
  const lesson = getLesson(q.topicId);

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
          const color = a?.pending ? '#f59e0b' : a?.correct ? '#10b981' : '#ef4444';
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
            background: isPending ? '#fffbeb' : isCorrect ? '#f0fdf4' : '#fef2f2',
            color: isPending ? '#b45309' : isCorrect ? '#16a34a' : '#dc2626',
            border: `1px solid ${isPending ? '#fde68a' : isCorrect ? '#bbf7d0' : '#fecaca'}`,
          }}>
            {isPending ? '⏳' : isCorrect ? <CheckCircle2 size={14} /> : <XCircle size={14} />}
            {isPending ? 'Teacher marking' : isCorrect ? 'Correct' : 'Incorrect'}
          </span>
        </div>
        <MathView content={q.question} graphData={q.graphData} style={{ fontSize: '0.98rem', lineHeight: 1.7, color: '#1e1b4b', fontWeight: 500 }} />
      </div>

      {/* your answer vs correct */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
        <div style={{ padding: '16px', borderRadius: '18px', background: isPending ? '#fffbeb' : isCorrect ? '#f0fdf4' : '#fef2f2', border: `1px solid ${isPending ? '#fde68a' : isCorrect ? '#bbf7d0' : '#fecaca'}` }}>
          <div style={{ fontSize: '0.68rem', fontWeight: 800, color: isPending ? '#b45309' : isCorrect ? '#16a34a' : '#dc2626', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>Your answer</div>
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
                        {step.graphData && (
                          <div style={{ marginTop: '8px', borderRadius: '12px', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
                            <MathView content="" graphData={step.graphData} style={{ minHeight: step.graphData?.jsxGraph?.height ? `${step.graphData.jsxGraph.height}px` : '320px' }} />
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

      {/* Watch the step-by-step lesson for this topic, if one is registered. */}
      {lesson && (
        <button
          onClick={() => setShowLesson(true)}
          style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '10px', padding: '14px 22px', borderRadius: '18px', border: 'none', background: 'linear-gradient(135deg, #8b5cf6, #6d28d9)', color: '#fff', fontWeight: 800, fontSize: '0.95rem', cursor: 'pointer', boxShadow: '0 8px 20px rgba(109,40,217,0.28)', alignSelf: 'flex-start' }}
        >
          <GraduationCap size={18} /> Watch the lesson
        </button>
      )}

      {showLesson && lesson && createPortal(
        <LessonPlayer lesson={lesson} onClose={() => setShowLesson(false)} />,
        document.body
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

// ── Result screen (session end / quit) ─────────────────────────────────
const ResultPanel = ({ result, onRestart, onExit, onReview, cumulativeAnalysis, progressSummary }) => {
  const sessionEmpty = !result?.total;
  return (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <div className="app-panel" style={{ padding: '28px', borderRadius: '28px', textAlign: 'center', background: 'linear-gradient(135deg, #ede9fe, #fff)' }}>
      <div style={{ width: '72px', height: '72px', borderRadius: '50%', background: 'linear-gradient(135deg, #a78bfa, #7c3aed)', display: 'grid', placeItems: 'center', color: '#fff', margin: '0 auto 14px' }}>
        <Trophy size={34} />
      </div>
      <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#94a3b8', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
        {sessionEmpty ? 'Practice paused' : 'Session complete'}
      </div>
      <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#1e1b4b', margin: '6px 0' }}>
        {sessionEmpty ? '—' : `${result.correct} / ${result.total}`}
      </div>
      <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#64748b' }}>
        {sessionEmpty ? 'No answers this time — progress is still saved.' : 'correct this session'}
      </div>
      {progressSummary?.total > 0 && (
        <div style={{ marginTop: '14px', fontSize: '0.85rem', fontWeight: 800, color: '#5b21b6' }}>
          Deck: {progressSummary.mastered}/{progressSummary.total} mastered · {progressSummary.accuracy}% lifetime accuracy
        </div>
      )}
      {result.addedToNote > 0 && (
        <div style={{ marginTop: '10px', display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#fffbeb', border: '1px solid #fde68a', color: '#92400e', padding: '6px 12px', borderRadius: '999px', fontSize: '0.8rem', fontWeight: 800 }}>
          <BookmarkPlus size={14} /> {result.addedToNote} added to Secret Note
        </div>
      )}
    </div>

    {!sessionEmpty && Object.keys(result.perTopic || {}).length > 0 && (
      <div className="app-panel" style={{ padding: '24px', borderRadius: '24px' }}>
        <h4 style={{ margin: '0 0 14px', color: '#1e1b4b', fontWeight: 900, fontSize: '0.95rem' }}>This session by topic</h4>
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
    )}

    <TopicAnalysisCard analysis={cumulativeAnalysis} />

    {!sessionEmpty && (
      <button onClick={onReview} className="app-button" style={{ padding: '16px', borderRadius: '18px', background: 'linear-gradient(135deg, #f0fdf4, #dcfce7)', color: '#166534', fontWeight: 800, border: '1px solid #bbf7d0', display: 'inline-flex', justifyContent: 'center', alignItems: 'center', gap: '8px', width: '100%' }}>
        <Lightbulb size={16} /> Review step-by-step solutions
      </button>
    )}

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
      <button onClick={onExit} className="app-button" style={{ padding: '16px', borderRadius: '18px', background: '#fff', color: '#475569', fontWeight: 800, border: '1px solid #e2e8f0', display: 'inline-flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
        <ArrowLeft size={16} /> Back to setup
      </button>
      <button onClick={onRestart} className="app-button app-button--primary" style={{ padding: '16px', borderRadius: '18px', background: 'linear-gradient(135deg, #a78bfa, #7c3aed)', display: 'inline-flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
        <Play size={16} /> Continue practice
      </button>
    </div>
  </div>
  );
};

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

// ── Animated count-up number (dashboard charts) ───────────────────────
const useCountUp = (target, { duration = 1100, delay = 0, enabled = true } = {}) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!enabled) { setValue(0); return undefined; }
    const to = Math.max(0, Number(target) || 0);
    let raf = 0;
    let startAt = 0;
    const timeout = setTimeout(() => {
      startAt = performance.now();
      const tick = (now) => {
        const t = Math.min(1, (now - startAt) / duration);
        // ease-out cubic
        const eased = 1 - (1 - t) ** 3;
        setValue(Math.round(to * eased));
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, delay);
    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(raf);
    };
  }, [target, duration, delay, enabled]);
  return value;
};

/** SVG ring that draws from 0 → pct when mounted. Gradients live on SetupDashboard. */
const AnimatedRing = ({
  pct = 0,
  size = 88,
  stroke = 8,
  track = 'rgba(167,139,250,0.14)',
  color = 'url(#examPrepRingGrad)',
  delay = 0,
  children,
}) => {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const clamped = Math.max(0, Math.min(100, Number(pct) || 0));
  return (
    <div style={{ position: 'relative', width: size, height: size, flexShrink: 0 }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ transform: 'rotate(-90deg)', display: 'block' }}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={track} strokeWidth={stroke} />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          initial={{ strokeDashoffset: c }}
          animate={{ strokeDashoffset: c * (1 - clamped / 100) }}
          transition={{ duration: 1.15, delay, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>
      <div style={{
        position: 'absolute', inset: 0, display: 'flex', alignItems: 'center',
        justifyContent: 'center', flexDirection: 'column', pointerEvents: 'none',
      }}>
        {children}
      </div>
    </div>
  );
};

/** Horizontal bar that fills on enter. */
const AnimatedBar = ({ pct = 0, delay = 0, color = 'linear-gradient(90deg, #a78bfa, #7c3aed)', height = 8 }) => {
  const clamped = Math.max(0, Math.min(100, Number(pct) || 0));
  return (
    <div style={{
      width: '100%', height, borderRadius: 999, background: 'rgba(167,139,250,0.12)',
      overflow: 'hidden',
    }}>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${clamped}%` }}
        transition={{ duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }}
        style={{
          height: '100%', borderRadius: 999,
          background: color,
          boxShadow: clamped > 0 ? '0 0 12px rgba(124,58,237,0.35)' : 'none',
        }}
      />
    </div>
  );
};

/** Soft status colour — low samples stay neutral so empty decks don't look "failed". */
const topicTone = (pct, attempted = 0) => {
  if (attempted < 2) return { fg: '#64748b', bar: '#cbd5e1', bg: '#f8fafc' };
  if (pct < 50) return { fg: '#dc2626', bar: '#f87171', bg: '#fef2f2' };
  if (pct < 75) return { fg: '#d97706', bar: '#fbbf24', bg: '#fffbeb' };
  return { fg: '#059669', bar: '#34d399', bg: '#ecfdf5' };
};

// ── Setup dashboard — command-center + single goal CTA ────────────────
const SetupDashboard = ({ stats, selection, analysis, progressSummary, noteCount, dueCount, loading, onStart, onOpenSecretNote }) => {
  const { isNarrow } = useViewport();
  const [showChapters, setShowChapters] = useState(false);

  const accuracy = progressSummary?.accuracy
    ?? (stats.attempted > 0 ? Math.round((stats.correct / stats.attempted) * 100) : 0);
  const mastered = progressSummary?.mastered ?? 0;
  const poolTotal = progressSummary?.total ?? 0;
  const remaining = progressSummary?.remaining ?? Math.max(0, poolTotal - mastered);
  const masteryPct = poolTotal > 0 ? Math.round((mastered / poolTotal) * 100) : 0;
  const chapterFocus = (progressSummary?.chapters || []).filter((c) => c.total > 0);

  const allChapters = useMemo(() => {
    const list = [];
    allYearKeys.forEach((y) => flattenChapters(y).forEach((ch) => list.push({ ...ch, year: y })));
    return list;
  }, []);
  const selectedChips = selection.chapters.map((id) => allChapters.find((c) => c.id === id)).filter(Boolean);
  const hasTopics = selectedChips.length > 0;
  const today = new Date().toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' });

  // Weak topics first (lifetime); highlight top as recommended focus
  const weakTopics = analysis.filter((t) => t.attempted >= 1).slice(0, 5);
  const focusTopic = weakTopics[0] || null;

  const accN = useCountUp(accuracy, { delay: 60 });
  const masN = useCountUp(mastered, { delay: 120 });
  const remN = useCountUp(remaining, { delay: 160 });
  const totN = useCountUp(poolTotal, { delay: 120 });

  const card = {
    background: '#fff',
    border: '1px solid rgba(15, 23, 42, 0.06)',
    borderRadius: '20px',
    boxShadow: '0 1px 2px rgba(15,23,42,0.04), 0 8px 24px rgba(124,58,237,0.06)',
  };

  return (
    <div style={{ maxWidth: '960px', margin: '0 auto' }}>
      {/* Shared SVG gradients for rings */}
      <svg width={0} height={0} style={{ position: 'absolute', overflow: 'hidden' }} aria-hidden>
        <defs>
          <linearGradient id="examPrepRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c4b5fd" />
            <stop offset="55%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#6d28d9" />
          </linearGradient>
        </defs>
      </svg>

      {/* ── Header ── */}
      <div style={{
        display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
        gap: '16px', flexWrap: 'wrap', marginBottom: '18px',
      }}>
        <div>
          <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#7c3aed' }}>
            Exam Prep
          </div>
          <h1 style={{
            fontWeight: 800, fontSize: isNarrow ? '1.75rem' : '2rem', lineHeight: 1.15,
            color: '#0f172a', margin: '6px 0 0', letterSpacing: '-0.03em',
          }}>
            Practice deck
          </h1>
        </div>
        <div style={{ textAlign: isNarrow ? 'left' : 'right', fontSize: '0.8rem', color: '#94a3b8', fontWeight: 600, lineHeight: 1.5, paddingTop: '4px' }}>
          <div>{today}</div>
          <div>{stats.sessions || 0} session{(stats.sessions || 0) === 1 ? '' : 's'} · quit anytime</div>
        </div>
      </div>

      {/* Assigned chapters — quiet list (not loud chips) */}
      {hasTopics && (() => {
        // Group by year so "Y12" isn't repeated on every long title.
        const byYear = new Map();
        selectedChips.forEach((ch) => {
          const y = ch.year || 'Topics';
          if (!byYear.has(y)) byYear.set(y, []);
          byYear.get(y).push(ch);
        });
        // Shorten "Chapter 5: The exponential…" → "Ch 5 · The exponential…"
        const shortTitle = (title) => {
          const m = String(title || '').match(/^Chapter\s+(\d+)\s*[:–—-]\s*(.+)$/i);
          if (m) return `Ch ${m[1]} · ${m[2]}`;
          return title;
        };
        return (
          <div style={{
            display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: '6px 18px',
            marginBottom: '20px', paddingBottom: '16px',
            borderBottom: '1px solid rgba(15, 23, 42, 0.06)',
          }}>
            <span style={{
              fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em',
              textTransform: 'uppercase', color: '#94a3b8', flexShrink: 0,
            }}>
              Assigned
            </span>
            {[...byYear.entries()].map(([year, chapters]) => (
              <div key={year} style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: '4px 10px' }}>
                <span style={{
                  fontSize: '0.72rem', fontWeight: 800, color: '#64748b',
                  fontVariantNumeric: 'tabular-nums',
                }}>
                  {(year || '').replace(/^Year\s+/i, 'Y')}
                </span>
                {chapters.map((ch, i) => (
                  <span key={ch.id} style={{ display: 'inline-flex', alignItems: 'baseline', gap: '10px' }}>
                    {i > 0 && (
                      <span style={{ color: '#e2e8f0', fontWeight: 400, userSelect: 'none' }} aria-hidden>·</span>
                    )}
                    <span
                      title={ch.title}
                      style={{
                        fontSize: '0.84rem', fontWeight: 600, color: '#334155',
                        maxWidth: isNarrow ? '100%' : '280px',
                        overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                      }}
                    >
                      {shortTitle(ch.title)}
                    </span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        );
      })()}

      {/* ── Command card: goal + KPIs + CTA ── */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        style={{ ...card, padding: isNarrow ? '20px' : '24px 28px', marginBottom: '20px' }}
      >
        <div style={{
          display: 'grid',
          gridTemplateColumns: isNarrow ? '1fr' : '1fr auto',
          gap: isNarrow ? '20px' : '28px',
          alignItems: 'center',
        }}>
          {/* Left: goal + deck bar + metrics */}
          <div style={{ minWidth: 0 }}>
            <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#94a3b8', marginBottom: '6px' }}>
              This cycle
            </div>
            <div style={{ fontSize: isNarrow ? '1.25rem' : '1.4rem', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em', lineHeight: 1.25 }}>
              {poolTotal > 0
                ? (remaining === 0 ? 'Deck cleared — ready to reshuffle' : `Clear ${remaining} remaining question${remaining === 1 ? '' : 's'}`)
                : (hasTopics ? 'Loading your question deck…' : 'Waiting for teacher topics')}
            </div>
            <p style={{ margin: '8px 0 0', fontSize: '0.88rem', color: '#64748b', fontWeight: 500, lineHeight: 1.45, maxWidth: '36em' }}>
              Correct answers drop out until you finish the deck. Then everything resets so you can practise again.
            </p>

            {/* Deck progress */}
            <div style={{ marginTop: '18px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
                <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#475569' }}>Deck progress</span>
                <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#0f172a', fontVariantNumeric: 'tabular-nums' }}>
                  {poolTotal > 0 ? `${masN} / ${totN}` : '—'}
                  <span style={{ fontWeight: 600, color: '#94a3b8', marginLeft: '6px' }}>mastered</span>
                </span>
              </div>
              <AnimatedBar
                pct={masteryPct}
                delay={0.12}
                color="linear-gradient(90deg, #a78bfa 0%, #7c3aed 100%)"
                height={10}
              />
            </div>

            {/* KPI strip: accuracy ring + remaining number */}
            <div style={{
              display: 'flex', flexWrap: 'wrap', gap: isNarrow ? '16px' : '28px',
              marginTop: '20px', alignItems: 'center',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <AnimatedRing pct={accuracy} size={64} stroke={7} color="url(#examPrepRingGrad)" delay={0.08}>
                  <div style={{ fontWeight: 900, fontSize: '0.95rem', color: '#1e1b4b', lineHeight: 1 }}>
                    {accN}<span style={{ fontSize: '0.65em' }}>%</span>
                  </div>
                </AnimatedRing>
                <div>
                  <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.04em', textTransform: 'uppercase' }}>Accuracy</div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#64748b', marginTop: '2px' }}>Lifetime</div>
                </div>
              </div>

              <div style={{ width: '1px', height: '40px', background: 'rgba(15,23,42,0.08)', display: isNarrow ? 'none' : 'block' }} />

              <div>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.04em', textTransform: 'uppercase' }}>Remaining</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#0f172a', lineHeight: 1.1, fontVariantNumeric: 'tabular-nums', marginTop: '2px' }}>
                  {poolTotal > 0 ? remN : '—'}
                </div>
              </div>

              <div style={{ width: '1px', height: '40px', background: 'rgba(15,23,42,0.08)', display: isNarrow ? 'none' : 'block' }} />

              <div>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.04em', textTransform: 'uppercase' }}>Sessions</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#0f172a', lineHeight: 1.1, fontVariantNumeric: 'tabular-nums', marginTop: '2px' }}>
                  {stats.sessions || 0}
                </div>
              </div>
            </div>
          </div>

          {/* Right: unified action stack (same radius / padding language) */}
          <div style={{
            minWidth: isNarrow ? '100%' : '220px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            padding: '8px',
            borderRadius: '18px',
            background: 'rgba(248, 250, 252, 0.9)',
            border: '1px solid rgba(15, 23, 42, 0.06)',
          }}>
            <button
              onClick={onStart}
              disabled={!hasTopics || loading}
              style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                gap: '3px',
                width: '100%',
                padding: poolTotal > 0 ? '14px 18px 12px' : '16px 18px',
                borderRadius: '12px', border: 'none',
                background: !hasTopics || loading
                  ? '#e2e8f0'
                  : 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 55%, #6d28d9 100%)',
                color: !hasTopics || loading ? '#94a3b8' : '#fff',
                cursor: !hasTopics || loading ? 'not-allowed' : 'pointer',
                boxShadow: !hasTopics || loading ? 'none' : '0 8px 20px rgba(109,40,217,0.22)',
              }}
            >
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                fontWeight: 800, fontSize: '0.95rem', letterSpacing: '-0.01em',
              }}>
                <Play size={16} fill="currentColor" />
                {loading ? 'Loading…' : (poolTotal > 0 && remaining === 0 ? 'Practise again' : 'Continue practice')}
              </span>
              {poolTotal > 0 && !loading && (
                <span style={{
                  fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.01em',
                  color: !hasTopics ? '#94a3b8' : 'rgba(255,255,255,0.78)',
                }}>
                  {remaining} left in this cycle
                </span>
              )}
            </button>

            {noteCount > 0 ? (
              <button
                onClick={onOpenSecretNote}
                style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  border: '1px solid rgba(124, 58, 237, 0.16)',
                  background: '#fff',
                  color: '#5b21b6',
                  fontWeight: 700, fontSize: '0.88rem',
                  cursor: 'pointer',
                }}
              >
                <BookmarkPlus size={15} strokeWidth={2.25} />
                <span>{noteCount} note{noteCount > 1 ? 's' : ''}</span>
                {dueCount > 0 && (
                  <span style={{
                    marginLeft: '2px',
                    background: 'rgba(124, 58, 237, 0.1)',
                    color: '#6d28d9',
                    borderRadius: '999px',
                    padding: '2px 8px',
                    fontSize: '0.7rem',
                    fontWeight: 800,
                  }}>
                    {dueCount} due
                  </span>
                )}
              </button>
            ) : (
              <div style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                width: '100%',
                padding: '12px 16px',
                borderRadius: '12px',
                border: '1px dashed rgba(15, 23, 42, 0.08)',
                background: 'transparent',
                color: '#94a3b8',
                fontWeight: 600, fontSize: '0.82rem',
              }}>
                <BookmarkPlus size={14} />
                Notes appear after mistakes
              </div>
            )}
          </div>
        </div>
      </motion.div>

      {/* ── Weak topics (list, not card grid) ── */}
      <div style={{ ...card, padding: isNarrow ? '18px' : '22px 24px', marginBottom: '16px' }}>
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: '12px', marginBottom: '14px', flexWrap: 'wrap',
        }}>
          <div>
            <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#94a3b8' }}>
              Focus
            </div>
            <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', marginTop: '2px' }}>
              Weak topics
            </div>
          </div>
          {focusTopic && (
            <span style={{
              fontSize: '0.72rem', fontWeight: 700, color: '#7c3aed',
              background: 'rgba(139,92,246,0.1)', padding: '5px 10px', borderRadius: '999px',
            }}>
              Start with {focusTopic.title}
            </span>
          )}
        </div>

        {weakTopics.length === 0 ? (
          <div style={{
            padding: '28px 16px', textAlign: 'center', borderRadius: '14px',
            background: '#f8fafc', border: '1px dashed #e2e8f0',
            color: '#94a3b8', fontWeight: 600, fontSize: '0.9rem',
          }}>
            {hasTopics
              ? 'Practise a few questions — weak areas will show up here.'
              : 'Ask your teacher to assign exam chapters first.'}
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {weakTopics.map((t, i) => {
              const tone = topicTone(t.pct, t.attempted);
              const isTop = i === 0;
              return (
                <div
                  key={t.topicId}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: isNarrow ? '1fr auto' : '1fr 100px 56px',
                    gap: '12px',
                    alignItems: 'center',
                    padding: '12px 12px',
                    margin: '0 -4px',
                    borderRadius: '12px',
                    background: isTop ? 'rgba(139,92,246,0.06)' : 'transparent',
                    borderBottom: i < weakTopics.length - 1 ? '1px solid rgba(15,23,42,0.05)' : 'none',
                  }}
                >
                  <div style={{ minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      {isTop && (
                        <span style={{
                          fontSize: '0.62rem', fontWeight: 800, letterSpacing: '0.06em',
                          textTransform: 'uppercase', color: '#7c3aed',
                          background: 'rgba(139,92,246,0.12)', padding: '2px 7px', borderRadius: '6px',
                        }}>
                          Focus
                        </span>
                      )}
                      <span style={{
                        fontSize: '0.92rem', fontWeight: 700, color: '#0f172a',
                        overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                      }}>
                        {t.title}
                      </span>
                    </div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#94a3b8', marginTop: '3px' }}>
                      {t.correct}/{t.attempted} correct
                    </div>
                    {isNarrow && (
                      <div style={{ marginTop: '8px' }}>
                        <div style={{ height: '4px', borderRadius: 999, background: 'rgba(15,23,42,0.06)', overflow: 'hidden' }}>
                          <div style={{ height: '100%', width: `${t.pct}%`, borderRadius: 999, background: tone.bar }} />
                        </div>
                      </div>
                    )}
                  </div>
                  {!isNarrow && (
                    <div style={{ height: '5px', borderRadius: 999, background: 'rgba(15,23,42,0.06)', overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${t.pct}%`, borderRadius: 999, background: tone.bar }} />
                    </div>
                  )}
                  <div style={{
                    fontWeight: 900, fontSize: '0.95rem', color: tone.fg, textAlign: 'right',
                    fontVariantNumeric: 'tabular-nums',
                  }}>
                    {t.pct}%
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {focusTopic && hasTopics && (
          <button
            onClick={onStart}
            disabled={loading}
            style={{
              marginTop: '14px', width: '100%', padding: '12px', borderRadius: '12px',
              border: '1px solid rgba(124,58,237,0.2)', background: 'rgba(139,92,246,0.06)',
              color: '#5b21b6', fontWeight: 800, fontSize: '0.88rem', cursor: loading ? 'not-allowed' : 'pointer',
            }}
          >
            Practise focus topic →
          </button>
        )}
      </div>

      {/* ── Chapters (collapsed by default) ── */}
      {chapterFocus.length > 0 && (
        <div style={{ ...card, padding: isNarrow ? '14px 16px' : '16px 20px', marginBottom: '16px' }}>
          <button
            type="button"
            onClick={() => setShowChapters((v) => !v)}
            style={{
              width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              gap: '12px', background: 'none', border: 'none', cursor: 'pointer', padding: 0,
            }}
          >
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#94a3b8' }}>
                Chapters
              </div>
              <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0f172a', marginTop: '2px' }}>
                Mastery by chapter · {chapterFocus.length}
              </div>
            </div>
            <ChevronRight
              size={18}
              color="#94a3b8"
              style={{ transform: showChapters ? 'rotate(90deg)' : 'none', transition: 'transform 0.2s', flexShrink: 0 }}
            />
          </button>

          <AnimatePresence initial={false}>
            {showChapters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                style={{ overflow: 'hidden' }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0', marginTop: '12px', borderTop: '1px solid rgba(15,23,42,0.05)', paddingTop: '4px' }}>
                  {chapterFocus.map((c, i) => {
                    const tone = topicTone(c.pct, c.attempted || c.mastered + c.wrong);
                    return (
                      <div
                        key={c.chapterId}
                        style={{
                          display: 'grid',
                          gridTemplateColumns: isNarrow ? '1fr auto' : '1fr 120px 48px',
                          gap: '12px', alignItems: 'center',
                          padding: '12px 4px',
                          borderBottom: i < chapterFocus.length - 1 ? '1px solid rgba(15,23,42,0.05)' : 'none',
                        }}
                      >
                        <div style={{ minWidth: 0 }}>
                          <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#1e293b', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                            {c.title}
                          </div>
                          <div style={{ fontSize: '0.72rem', fontWeight: 600, color: '#94a3b8', marginTop: '2px' }}>
                            {c.mastered}/{c.total} mastered{c.wrong > 0 ? ` · ${c.wrong} wrong` : ''}
                          </div>
                        </div>
                        {!isNarrow && (
                          <div style={{ height: '4px', borderRadius: 999, background: 'rgba(15,23,42,0.06)', overflow: 'hidden' }}>
                            <div style={{ height: '100%', width: `${c.pct}%`, borderRadius: 999, background: tone.bar }} />
                          </div>
                        )}
                        <div style={{ fontWeight: 800, fontSize: '0.88rem', color: tone.fg, textAlign: 'right', fontVariantNumeric: 'tabular-nums' }}>
                          {c.pct}%
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      {!hasTopics && (
        <div style={{
          ...card, padding: '20px', textAlign: 'center',
          color: '#92400e', fontWeight: 650, fontSize: '0.9rem',
          background: '#fffbeb', borderColor: '#fde68a',
        }}>
          Your teacher hasn&apos;t assigned exam chapters yet. Ask them to set topics in your profile.
        </div>
      )}
    </div>
  );
};

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
  const [sessionQuestions, setSessionQuestions] = useState([]); // questions answered this session (for review)
  const [pool, setPool] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [sessionNum, setSessionNum] = useState(1);
  const [mastery, setMastery] = useState({ mastered: 0, total: 0, remaining: 0 });
  const [progressSummary, setProgressSummary] = useState(null);
  const sessionAnswersRef = useRef([]); // [{userAnswer, correct, ...}]
  const sessionQuestionsRef = useRef([]); // Question[] answered this session
  const poolRef = useRef([]);
  const currentQuestionRef = useRef(null);

  useEffect(() => {
    onExamActiveChange?.(stage === 'quiz');
  }, [stage, onExamActiveChange]);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [analysis, setAnalysis] = useState(() => uid ? getTopicAnalysis(uid) : []);
  const [stats, setStats] = useState(() => uid ? getStats(uid) : { sessions: 0, correct: 0, attempted: 0 });
  const [noteCount, setNoteCount] = useState(0);
  const [dueCount, setDueCount] = useState(0);
  const [reportTarget, setReportTarget] = useState(null);
  const reportTargetRef = useRef(null);
  const [reportMessage, setReportMessage] = useState('');
  const [submittingReport, setSubmittingReport] = useState(false);

  const refreshLocalStats = (poolOverride) => {
    if (!uid) return;
    setAnalysis(getTopicAnalysis(uid));
    setStats(getStats(uid));
    const p = poolOverride || poolRef.current || [];
    const summary = getProgressAnalysis(uid, p);
    setProgressSummary(summary);
    setMastery({
      mastered: summary.mastered,
      total: summary.total,
      remaining: summary.remaining,
    });
    setNoteCount(getNoteCount(EXAM_PREP_NOTE_KIND, uid));
    setDueCount(getDueCount(EXAM_PREP_NOTE_KIND, uid));
  };

  useEffect(() => {
    if (!uid) return;
    refreshLocalStats();
  }, [uid, stage]);

  // Prefetch pool on setup so mastery X/Y is accurate before Start.
  useEffect(() => {
    if (!uid || !selection.chapters?.length) return;
    let cancelled = false;
    (async () => {
      try {
        const p = await ensurePool(uid, selection);
        if (cancelled) return;
        poolRef.current = p;
        setPool(p);
        setProgressSummary(getProgressAnalysis(uid, p));
        setMastery({
          mastered: getProgressAnalysis(uid, p).mastered,
          total: p.length,
          remaining: getProgressAnalysis(uid, p).remaining,
        });
      } catch (e) {
        console.warn('[ExamPrep] pool prefetch failed:', e?.message || e);
      }
    })();
    return () => { cancelled = true; };
  }, [uid, selection.chapters?.join(','), selection.examPaperOnly]);

  // On login/device change, pull server-saved stats + history so progress
  // follows the student across devices, then refresh the on-screen values.
  useEffect(() => {
    if (!uid) return;
    let cancelled = false;
    (async () => {
      const hydrated = await hydrateExamPrepState(uid);
      if (hydrated && !cancelled) {
        refreshLocalStats();
      }
    })();
    return () => { cancelled = true; };
  }, [uid]);

  const submitReport = async () => {
    const target = reportTargetRef.current || reportTarget;
    if (!target || !reportMessage.trim() || !user?.uid) return;
    setSubmittingReport(true);
    try {
      await addDoc(collection(db, 'reports'), {
        studentId: user.uid,
        studentName: user.displayName || user.email || 'Student',
        questionId: target.id || '',
        source: 'exam_prep',
        questionData: {
          id: target.id || '',
          question: target.question || '',
          answer: String(target.answer ?? ''),
          type: target.type || '',
          chapterId: target.chapterId || '',
          chapterTitle: target.chapterTitle || '',
          topicId: target.topicId || '',
          topicTitle: target.topicTitle || '',
        },
        studentAnswer: target._studentAnswer !== undefined && target._studentAnswer !== null
          ? (typeof target._studentAnswer === 'string' ? target._studentAnswer : JSON.stringify(target._studentAnswer))
          : null,
        sketchDataUrl: target._sketchDataUrl || null,
        hasSketch: Boolean(target._sketchDataUrl),
        message: reportMessage.trim(),
        status: 'open',
        createdAt: serverTimestamp(),
      });
      showToast('Report submitted — we will review it.', 'success');
      reportTargetRef.current = null;
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
      const r = await startPractice(uid, selection);
      if (!r.question) {
        showToast('No questions found for the chosen topics yet. Ask your teacher to add questions.', 'warning', 6000);
        return;
      }
      if (r.resetCycle) {
        showToast('Deck complete — all questions reset. Practise again from the start!', 'success', 5000);
      }
      poolRef.current = r.pool || [];
      setPool(r.pool || []);
      const first = shuffleMcOptions(r.question);
      currentQuestionRef.current = first;
      setCurrentQuestion(first);
      sessionAnswersRef.current = [];
      sessionQuestionsRef.current = [];
      setSessionQuestions([]);
      setLastAnswers([]);
      setSessionNum(1);
      setMastery({
        mastered: r.mastered ?? 0,
        total: r.total ?? (r.pool?.length || 0),
        remaining: r.remaining ?? 0,
      });
      setProgressSummary(getProgressAnalysis(uid, r.pool || []));
      setStage('quiz');
    } catch (err) {
      console.error('[ExamPrep] startPractice failed:', err);
      showToast(`Could not start practice: ${err?.message || 'unknown error'}`, 'error', 6000);
    } finally {
      setLoading(false);
    }
  };

  const handleAnswered = (res, q) => {
    if (!uid || !q) return;
    // Guard against double-fire (timer + submit on the same question).
    const lastQ = sessionQuestionsRef.current[sessionQuestionsRef.current.length - 1];
    if (lastQ && String(lastQ.id) === String(q.id)) return;
    recordAnswer(uid, q, { correct: res?.correct === true, pending: res?.pending === true });
    sessionAnswersRef.current = [...sessionAnswersRef.current, res];
    sessionQuestionsRef.current = [...sessionQuestionsRef.current, q];
    setSessionQuestions(sessionQuestionsRef.current);
    const summary = getProgressAnalysis(uid, poolRef.current);
    setProgressSummary(summary);
    setMastery({
      mastered: summary.mastered,
      total: summary.total,
      remaining: summary.remaining,
    });
    setStats(getStats(uid));
    setAnalysis(getTopicAnalysis(uid));
  };

  const handleRequestNext = async () => {
    if (!uid) return;
    const excludeId = currentQuestionRef.current?.id;
    const pick = pickNextQuestion(uid, poolRef.current, { excludeId });
    if (pick.resetCycle) {
      showToast('You cleared the whole deck! Resetting — every question is available again.', 'success', 5500);
    }
    if (!pick.question) {
      await handleQuit();
      return;
    }
    const next = shuffleMcOptions(pick.question);
    currentQuestionRef.current = next;
    setCurrentQuestion(next);
    setSessionNum((n) => n + 1);
    setMastery({
      mastered: pick.mastered ?? getProgressAnalysis(uid, poolRef.current).mastered,
      total: pick.total ?? poolRef.current.length,
      remaining: pick.remaining ?? 0,
    });
  };

  const handleQuit = async () => {
    if (!uid) {
      setStage('setup');
      return;
    }
    const answers = sessionAnswersRef.current;
    const questionsForSession = sessionQuestionsRef.current;
    const r = await endSession(uid, answers, { questions: questionsForSession });
    setResult(r);
    setLastAnswers(answers);
    setSessionQuestions(questionsForSession);
    refreshLocalStats(poolRef.current);
    setStage(answers.length > 0 ? 'result' : 'setup');
    if (answers.length === 0) {
      showToast('Practice stopped. Progress is saved on this device.', 'success', 3500);
    }
  };

  const handleRestart = async () => {
    setResult(null);
    setCurrentQuestion(null);
    currentQuestionRef.current = null;
    sessionAnswersRef.current = [];
    sessionQuestionsRef.current = [];
    setSessionQuestions([]);
    await handleStart();
  };

  const inQuiz = stage === 'quiz';

  return (
    <div className="app-page" style={{ padding: inQuiz ? 'clamp(8px, 1.5vw, 16px)' : 'clamp(16px, 3vw, 28px) clamp(12px, 3vw, 28px) 80px', minHeight: inQuiz ? '100vh' : undefined }}>
      <div style={{ maxWidth: inQuiz ? '100%' : 'min(1080px, 100%)', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>

        {/* ── Exam Prep content ── */}
        {true && (
        <>
        {stage === 'setup' && (
          <SetupDashboard
            stats={stats}
            selection={selection}
            analysis={analysis}
            progressSummary={progressSummary}
            noteCount={noteCount}
            dueCount={dueCount}
            loading={loading}
            onStart={handleStart}
            onOpenSecretNote={() => setStage('secretNote')}
          />
        )}

        {stage === 'quiz' && currentQuestion && (
          <QuizView
            key={currentQuestion.id}
            question={currentQuestion}
            sessionNum={sessionNum}
            mastery={mastery}
            onAnswered={handleAnswered}
            onRequestNext={handleRequestNext}
            onQuit={handleQuit}
            user={user}
            onReport={(q, studentAnswer, sketchDataUrl) => {
              reportTargetRef.current = { ...q, _studentAnswer: studentAnswer, _sketchDataUrl: sketchDataUrl };
              setReportTarget(q);
            }}
          />
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
          <ResultPanel
            result={result}
            onRestart={handleRestart}
            onExit={() => setStage('setup')}
            onReview={() => setStage('review')}
            cumulativeAnalysis={analysis}
            progressSummary={progressSummary}
          />
        )}

        {stage === 'review' && sessionQuestions.length > 0 && (
          <ReviewView questions={sessionQuestions} answers={lastAnswers} onDone={() => setStage('result')} />
        )}
        </>
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
