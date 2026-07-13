import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft, CheckCircle2, XCircle, Zap, BookOpen,
  ChevronRight, Play, RotateCcw, Trophy,
  Lightbulb, Check, X, Flag,
} from 'lucide-react';
import { db } from '../firebase/config';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { getChapterQuestions } from '../services/chapterQuestionsCache';

// localStorage helpers for per-topic mastery (rings — no Firestore reads needed)
export const lsTopicKey = (uid, chapterId, topicId) => `sapere:tp:${uid}:${chapterId}:${topicId}`;
const loadMastered = (uid, chapterId, topicId) => {
  try {
    const raw = localStorage.getItem(lsTopicKey(uid, chapterId, topicId));
    return raw ? new Set(JSON.parse(raw)) : new Set();
  } catch { return new Set(); }
};
const saveMastered = (uid, chapterId, topicId, masteredSet, totalQuestions) => {
  try {
    const ids = [...masteredSet];
    localStorage.setItem(lsTopicKey(uid, chapterId, topicId), JSON.stringify(ids));
    const rawPct = totalQuestions > 0 ? Math.round((ids.length / totalQuestions) * 100) : 0;
    const pct = ids.length > 0 && rawPct === 0 ? 1 : rawPct;
    localStorage.setItem(`${lsTopicKey(uid, chapterId, topicId)}:meta`, JSON.stringify({ progress: pct, masteredCount: ids.length, totalQuestions }));
    // Notify LearningPath (same tab) to refresh chapter-level progress
    window.dispatchEvent(new Event('sapere:progress-updated'));
  } catch { /* storage full — ignore */ }
};
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import MathView from './MathView';
import { answersMatch } from '../utils/answerMatching';
import MathInput from './MathInput';
import ChallengeSketchBoard from './challenge/ChallengeSketchBoard';
import LessonPlayer from './lessons/LessonPlayer';
import { getLesson } from '../lessons/registry';
import { GraduationCap, Volume2 } from 'lucide-react';
import { parseSolutionSteps } from '../utils/solutionSteps';

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
// the correct option follows its new position. Sub-question MC options are
// shuffled too. Non-MC questions are returned unchanged.
const shuffleQuestionOptions = (q) => {
  const isMCQ = (qq) =>
    (qq.options?.length > 0) && qq.type !== 'short_answer' && qq.type !== 'fill_blank';

  const remap = (opts, answer) => {
    if (!opts || opts.length < 2) return { options: opts, answer };
    const order = shuffleArray(opts.map((_, i) => i));
    const newOptions = order.map((i) => opts[i]);
    const correctIdx = Number(answer);
    const newAnswer = Number.isInteger(correctIdx) ? String(order.indexOf(correctIdx)) : answer;
    return { options: newOptions, answer: newAnswer };
  };

  let next = { ...q };
  if (!q.subQuestions?.length && isMCQ(q)) {
    const { options, answer } = remap(q.options, q.answer);
    next.options = options;
    next.answer = answer;
  }
  if (q.subQuestions?.length) {
    next.subQuestions = q.subQuestions.map((sq) => {
      if (sq.type !== 'multiple_choice' || !(sq.options?.length > 1)) return sq;
      const { options, answer } = remap(sq.options, sq.answer);
      return { ...sq, options, answer };
    });
  }
  return next;
};

// Small viewport-width hook so the quiz can switch between the side-by-side
// canvas layout (wide) and a stacked layout (narrow).
const useViewportWidth = () => {
  const [w, setW] = useState(() => (typeof window === 'undefined' ? 1024 : window.innerWidth));
  useEffect(() => {
    const onResize = () => setW(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return w;
};

// Quick-insert buttons for the MathLive editor. `#?` is a placeholder the
// cursor lands in, so students can immediately type the radicand/numerator.
const QUICK_INSERTS = [
  { label: '√', latex: '\\sqrt{#?}', title: 'Square root' },
  { label: 'ⁿ√', latex: '\\sqrt[#?]{#?}', title: 'nth root' },
  { label: 'a/b', latex: '\\frac{#?}{#?}', title: 'Fraction' },
  { label: 'xⁿ', latex: '^{#?}', title: 'Exponent' },
  { label: 'π', latex: '\\pi', title: 'Pi' },
  { label: '±', latex: '\\pm', title: 'Plus or minus' },
  { label: '°', latex: '^{\\circ}', title: 'Degrees' },
  { label: '( )', latex: '(#?)', title: 'Brackets' },
  { label: '\u2264', latex: '\\le', title: 'Less than or equal to' },
  { label: '\u2265', latex: '\\ge', title: 'Greater than or equal to' },
];

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
  // Multiple accepted answers
  if (Array.isArray(q.acceptedAnswers) && q.acceptedAnswers.length > 0) {
    return q.acceptedAnswers.some((a) => answersMatch(String(userAnswer ?? ''), String(a ?? '')));
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
  const { showToast } = useToast();
  // Report-a-problem state. reportTargetRef freezes the question at click time
  // so the correct question is reported even if the view changes.
  const [reportOpen, setReportOpen] = useState(false);
  const [reportMessage, setReportMessage] = useState('');
  const [submittingReport, setSubmittingReport] = useState(false);
  const reportTargetRef = useRef(null);
  const [view, setView] = useState('quiz'); // 'quiz' | 'done'
  const [questions, setQuestions] = useState([]);
  const [allTopicQuestions, setAllTopicQuestions] = useState([]); // full set (for progress %)
  const [masteredIds, setMasteredIds] = useState(new Set()); // correctly answered question IDs
  const [loading, setLoading] = useState(true);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [userAnswer, setUserAnswer] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [results, setResults] = useState([]);   // [{correct, answer, q}]
  const [showHint, setShowHint] = useState(false);
  const inputRef = useRef(null);
  // Fraction input mode — pressing "/" builds a stacked a/b fraction.
  const [fracMode, setFracMode] = useState(false);
  const [fracWhole, setFracWhole] = useState('');
  const [fracNum, setFracNum] = useState('');
  const [fracDen, setFracDen] = useState('');
  const fracNumRef = useRef(null);
  const fracDenRef = useRef(null);
  const mathInputRef = useRef(null);
  const sketchRef = useRef(null);
  const viewportW = useViewportWidth();
  const isWide = viewportW >= 980;
  // Authored step-by-step lesson for this topic (only some topics have one).
  const lesson = getLesson(topic.id);
  const [showLesson, setShowLesson] = useState(false);

  // Load questions for this topic, filtering out already-mastered ones
  useEffect(() => {
    let cancelled = false;
    (async () => {
      setLoading(true);
      try {
        const allChapter = await getChapterQuestions(user?.uid, chapter.id);
        const all = allChapter.filter((q) => q.topicId === topic.id);

        // Load existing mastered IDs from localStorage (no Firestore read needed)
        const existingMastered = user?.uid
          ? loadMastered(user.uid, chapter.id, topic.id)
          : new Set();

        if (!cancelled) {
          setAllTopicQuestions(all);
          setMasteredIds(existingMastered);
          // Only show questions not yet mastered (wrong or never attempted)
          const unmastered = all.filter(q => !existingMastered.has(String(q.id)));
          const prepared = shuffleArray(unmastered).map(shuffleQuestionOptions);
          setQuestions(prepared);
        }
      } catch (e) {
        console.error('Failed to load topic questions:', e);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, [chapter.id, topic.id, user?.uid]);

  const q = questions[currentIdx];
  const steps = useMemo(() => parseSolutionSteps(q), [q]);
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
    setFracMode(false); setFracWhole(''); setFracNum(''); setFracDen('');
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
    // Sketch pad is always shown in topic practice — track blank boards for FlameBuddy.
    let hadWorkingOut = false;
    try { hadWorkingOut = sketchRef.current?.hasContent?.() === true; } catch { /* ignore */ }
    setResults((prev) => [...prev, {
      correct,
      userAnswer,
      q,
      sketchAvailable: true,
      hadWorkingOut,
    }]);

    // Persist mastery INCREMENTALLY — the moment a question is answered
    // correctly. Topics have hundreds of questions, so a student almost never
    // reaches the final question to trigger finishSession; saving here ensures
    // progress survives even if they exit mid-session.
    if (correct && q?.id && user?.uid && !masteredIds.has(String(q.id))) {
      const updated = new Set(masteredIds);
      updated.add(String(q.id));
      setMasteredIds(updated);
      saveMastered(user.uid, chapter.id, topic.id, updated, allTopicQuestions.length);
    }
  };

  const handleNext = () => {
    if (currentIdx < total - 1) {
      setCurrentIdx((i) => i + 1);
    } else {
      finishSession();
    }
  };

  const finishSession = useCallback(async () => {
    const allResults = [...results, { correct: isCorrect, q }].filter(r => r.q);
    const sessionCorrect = allResults.filter((r) => r.correct).length;
    const sessionTotal = allResults.length;
    const pct = sessionTotal ? Math.round((sessionCorrect / sessionTotal) * 100) : 0;
    const xp = pct >= 80 ? XP_PER_TOPIC : pct >= 50 ? Math.round(XP_PER_TOPIC * 0.6) : Math.round(XP_PER_TOPIC * 0.2);

    // Build new mastered set: existing + questions answered correctly this session
    const newlyMastered = allResults.filter(r => r.correct).map(r => String(r.q.id));
    const updatedMastered = new Set([...masteredIds, ...newlyMastered]);
    setMasteredIds(updatedMastered);

    const totalInTopic = allTopicQuestions.length;
    const masteredCount = updatedMastered.size;
    // Progress = % of all topic questions mastered
    const overallPct = totalInTopic > 0 ? Math.round((masteredCount / totalInTopic) * 100) : pct;

    if (user?.uid) {
      saveMastered(user.uid, chapter.id, topic.id, updatedMastered, totalInTopic);
    }

    // Flame coach: score + empty-sketch nags (same channel as Daily Challenge).
    if (user?.uid && sessionTotal > 0 && typeof window !== 'undefined') {
      const sketchQs = allResults.filter((r) => r.sketchAvailable === true);
      const emptyWorkingOutCount = sketchQs.filter((r) => r.hadWorkingOut === false).length;
      const withWorkingOutCount = sketchQs.filter((r) => r.hadWorkingOut === true).length;
      try {
        window.dispatchEvent(new CustomEvent('sapere:challenge-result', {
          detail: {
            uid: user.uid,
            score: sessionCorrect,
            total: sessionTotal,
            wrong: Math.max(0, sessionTotal - sessionCorrect),
            completed: true,
            challengeType: 'daily',
            sketchQuestionCount: sketchQs.length || sessionTotal,
            emptyWorkingOutCount: sketchQs.length ? emptyWorkingOutCount : 0,
            withWorkingOutCount,
          },
        }));
      } catch { /* ignore */ }
    }

    setView('done');
  }, [results, isCorrect, q, masteredIds, allTopicQuestions, user, chapter.id, topic.id]);

  const handleRestart = () => {
    // Re-show only unmastered questions (wrong or never attempted).
    const unmastered = allTopicQuestions.filter(q => !masteredIds.has(String(q.id)));
    setQuestions(shuffleArray(unmastered).map(shuffleQuestionOptions));
    setCurrentIdx(0);
    setResults([]);
    setUserAnswer('');
    setSubmitted(false);
    setIsCorrect(null);
    setView('quiz');
  };

  // ── Report a problem with the current question ─────────────────────────────
  const openReport = async () => {
    let sketchDataUrl = null;
    try { sketchDataUrl = await sketchRef.current?.exportImage?.({ force: false }) || null; } catch { /* ignore */ }
    reportTargetRef.current = {
      ...q,
      _studentAnswer: userAnswer,
      _sketchDataUrl: sketchDataUrl,
    };
    setReportMessage('');
    setReportOpen(true);
  };
  const submitReport = async () => {
    const target = reportTargetRef.current || q;
    if (!target || !reportMessage.trim() || !user?.uid) return;
    setSubmittingReport(true);
    try {
      await addDoc(collection(db, 'reports'), {
        studentId: user.uid,
        studentName: user.displayName || user.email || profile?.name || 'Student',
        questionId: target.id || '',
        source: 'topic_practice',
        questionData: {
          id: target.id || '',
          question: target.question || '',
          answer: String(target.answer ?? ''),
          type: target.type || '',
          chapterId: chapter?.id || '',
          chapterTitle: chapter?.title || '',
          topicId: topic?.id || '',
          topicCode: topic?.code || '',
          topicTitle: topic?.title || '',
          isManual: !!target.isManual,
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
      showToast('Report submitted — your teacher will review it.', 'success');
      reportTargetRef.current = null;
      setReportOpen(false);
      setReportMessage('');
    } catch (err) {
      console.error('Topic practice report failed:', err);
      showToast('Failed to submit report.', 'error');
    } finally {
      setSubmittingReport(false);
    }
  };

  // ── Fraction input mode (supports mixed numbers via the whole field) ───────
  const enterFracMode = (currentVal) => {
    setFracWhole('');
    setFracNum(String(currentVal ?? ''));
    setFracDen('');
    setFracMode(true);
    setTimeout(() => fracDenRef.current?.focus(), 50);
  };
  const commitFraction = (whole, num, den) => {
    if (!den) { setFracMode(false); inputRef.current?.focus(); return; }
    const base = String(userAnswer ?? '');
    const prefix = base.endsWith(num) ? base.slice(0, base.length - num.length) : base;
    // Mixed number: "w (a)/(b)" with a space; plain fraction: "(a)/(b)".
    const frac = `(${num || '0'})/(${den})`;
    setUserAnswer(prefix + (whole ? `${whole} ${frac}` : frac));
    setFracMode(false);
    setFracWhole(''); setFracNum(''); setFracDen('');
    setTimeout(() => inputRef.current?.focus(), 50);
  };
  const cancelFracMode = () => { setFracMode(false); inputRef.current?.focus(); };

  // ── Math keyboard input ───────────────────────────────────────────────────
  const insertSymbol = (sym) => {
    if (hasSubs || isFill) return; // handled inline
    if (sym === '⌫') {
      setUserAnswer((v) => String(v).slice(0, -1));
    } else if (sym === '/') {
      enterFracMode(userAnswer || '');
    } else {
      setUserAnswer((v) => String(v ?? '') + sym);
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

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {/* Learn step-by-step — shown whenever an authored lesson exists,
              regardless of whether practice questions have been added yet. */}
          {lesson && (
            <motion.button
              onClick={() => setShowLesson(true)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                width: '100%', padding: '16px', borderRadius: '18px',
                background: '#fff', border: '2px solid #ddd6fe',
                color: '#7c3aed', fontFamily: '"Outfit", sans-serif',
                fontSize: '1rem', fontWeight: 900, cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                boxShadow: '0 6px 18px rgba(124,58,237,0.10)',
              }}
            >
              <GraduationCap size={19} /> Learn step-by-step
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '0.72rem', fontWeight: 800, color: '#94a3b8' }}>
                <Volume2 size={12} /> with voice
              </span>
            </motion.button>
          )}

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
            // Start button
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
          )}
        </div>

        {/* Step-by-step lesson overlay */}
        {showLesson && lesson && (
          <LessonPlayer lesson={lesson} onClose={() => setShowLesson(false)} />
        )}
      </motion.div>
    );
  }

  // ── QUIZ VIEW ─────────────────────────────────────────────────────────────
  if (view === 'quiz') {
    if (loading) {
      return (
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          {backBtn('Back to chapter', onBack)}
          <div style={{ textAlign: 'center', padding: '80px', color: '#94a3b8', fontWeight: 700 }}>Loading questions…</div>
        </div>
      );
    }
    if (total === 0 && allTopicQuestions.length > 0) {
      // All questions mastered — nothing left to practice
      const overallPct = Math.round((masteredIds.size / allTopicQuestions.length) * 100);
      return (
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{ maxWidth: '760px', margin: '0 auto' }}
        >
          {backBtn('Back to chapter', onBack)}
          <div style={{ padding: '60px 30px', textAlign: 'center', borderRadius: '22px', background: 'linear-gradient(135deg, #ecfdf518, #d1fae508)', border: '1px solid #a7f3d040' }}>
            <div style={{ fontSize: '3rem', marginBottom: '12px' }}>🎉</div>
            <div style={{ fontFamily: '"Outfit", sans-serif', fontWeight: 900, color: '#059669', fontSize: '1.6rem', marginBottom: '6px' }}>Topic Complete!</div>
            <div style={{ color: '#64748b', marginTop: '6px', fontSize: '0.9rem', fontWeight: 700, marginBottom: '24px' }}>
              You've mastered all {allTopicQuestions.length} questions in <strong>{topic.title}</strong>.
            </div>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={() => {
                  // Allow re-practicing all questions (treat as practice run)
                  const allShuffled = shuffleArray([...allTopicQuestions]).map(shuffleQuestionOptions);
                  setQuestions(allShuffled);
                  setCurrentIdx(0);
                  setResults([]);
                  setUserAnswer('');
                  setSubmitted(false);
                  setIsCorrect(null);
                }}
                style={{ padding: '14px 24px', borderRadius: '14px', border: '2px solid #ddd6fe', background: '#fff', color: '#7c3aed', fontWeight: 900, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                <RotateCcw size={15} /> Practice again
              </button>
              <button
                onClick={onBack}
                style={{ padding: '14px 24px', borderRadius: '14px', border: 'none', background: 'linear-gradient(135deg, #a78bfa, #7c3aed)', color: '#fff', fontWeight: 900, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px', boxShadow: '0 4px 12px rgba(124,58,237,0.25)' }}
              >
                <ArrowLeft size={15} /> Back to chapter
              </button>
            </div>
          </div>
        </motion.div>
      );
    }

    if (total === 0) {
      return (
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          {backBtn('Back to chapter', onBack)}
          <div style={{ padding: '60px 30px', textAlign: 'center', borderRadius: '22px', background: '#fff', border: '1px dashed #e2e8f0' }}>
            <BookOpen size={40} style={{ color: '#cbd5e1', margin: '0 auto 12px', display: 'block' }} />
            <div style={{ fontWeight: 800, color: '#475569', fontSize: '1rem' }}>No practice questions yet</div>
            <div style={{ color: '#94a3b8', marginTop: '6px', fontSize: '0.88rem', fontWeight: 600 }}>
              Your teacher will add questions for this topic soon.
            </div>
          </div>
        </div>
      );
    }

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
                  <MathView content={optText} graphData={typeof opt === 'object' ? opt.graphData : null} style={{ fontSize: '0.98rem', fontWeight: 600, color: '#1e1b4b', flex: 1 }} />
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
                    <MathView content={sq.question} graphData={sq.type === 'graph_sketch' ? (submitted ? sq.graphData : null) : sq.graphData} style={{ fontWeight: 700, color: '#1e1b4b', fontSize: '0.95rem' }} />
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
                            {String.fromCharCode(65 + oi)}. <MathView content={optText} graphData={typeof opt === 'object' ? opt.graphData : null} style={{ display: 'inline' }} />
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

      // Short answer — MathLive math editor (handles fractions, surds, exponents)
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {/* Quick-insert buttons — insert proper LaTeX into the math field */}
          {!submitted && (
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
              {QUICK_INSERTS.map((b) => (
                <button
                  key={b.label}
                  type="button"
                  onClick={() => mathInputRef.current?.insert(b.latex)}
                  title={b.title}
                  style={{
                    minWidth: '46px', height: '42px', padding: '0 12px', borderRadius: '12px',
                    border: '1px solid #e2e8f0', background: '#fff', color: '#4f46e5',
                    fontSize: '1.05rem', fontWeight: 800, cursor: 'pointer',
                    fontFamily: '"KaTeX_Main", "Times New Roman", serif',
                  }}
                >
                  {b.label}
                </button>
              ))}
            </div>
          )}
          <MathInput
            ref={mathInputRef}
            value={typeof userAnswer === 'string' ? userAnswer : ''}
            onChange={(latex) => !submitted && setUserAnswer(latex)}
            onEnter={() => { if (!submitted && userAnswer) handleSubmit(); }}
            readOnly={submitted}
            placeholder="Type your answer…  (use the buttons for √ and fractions)"
            autoFocus
            style={{
              border: `2px solid ${submitted ? (isCorrect ? '#10b981' : '#f43f5e') : '#a78bfa'}`,
              background: submitted ? (isCorrect ? '#f0fdf4' : '#fff1f2') : '#fff',
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

    const leftPanel = (
      <div style={{ minWidth: 0, overflowY: 'auto', WebkitOverflowScrolling: 'touch', display: 'flex', flexDirection: 'column', paddingRight: isWide ? '4px' : 0 }}>
        {/* Progress bar */}
        <div style={{ height: '6px', borderRadius: '999px', background: '#e2e8f0', marginBottom: '20px', overflow: 'hidden', flexShrink: 0 }}>
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
              <span style={{
                fontSize: '0.62rem', fontWeight: 900, letterSpacing: '0.1em', textTransform: 'uppercase',
                padding: '3px 9px', borderRadius: '7px', background: '#f5f3ff', color: '#7c3aed',
              }}>
                {q?.difficulty || 'medium'} · {(q?.type || 'question').replace('_', ' ')}
              </span>
              {q?.source && (
                <span style={{
                  fontSize: '0.62rem', fontWeight: 900, letterSpacing: '0.06em',
                  padding: '3px 9px', borderRadius: '7px', background: '#fef3c7', color: '#92400e',
                }}>
                  📄 {q.source}
                </span>
              )}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
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
              <button
                onClick={openReport}
                title="Report a problem with this question"
                style={{
                  display: 'flex', alignItems: 'center', gap: '5px',
                  padding: '5px 11px', borderRadius: '9px', border: '1px solid #fee2e2',
                  background: '#fff1f2', color: '#e11d48', fontSize: '0.75rem', fontWeight: 800, cursor: 'pointer',
                }}
              >
                <Flag size={13} /> Report
              </button>
            </div>
          </div>

          <MathView
            content={q?.question}
            graphData={q?.type === 'graph_sketch' ? (submitted ? q?.graphData : null) : q?.graphData}
            style={{ fontSize: '0.98rem', fontWeight: 600, color: '#1e1b4b', lineHeight: 1.7 }}
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
                {!isCorrect && q?.answer != null && (
                  <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#9f1239', marginTop: '2px' }}>
                    Answer: <MathView content={String(q.answer)} style={{ display: 'inline', fontWeight: 800 }} />
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

        {/* Step-by-step solution — shown right after answering (practice space) */}
        <AnimatePresence>
          {submitted && steps.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              style={{ padding: '20px', borderRadius: '18px', marginBottom: '16px', background: '#fff', border: '1px solid #e0e7ff', boxShadow: '0 8px 24px rgba(99,102,241,0.06)' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '10px', background: 'linear-gradient(135deg, #a78bfa, #7c3aed)', display: 'grid', placeItems: 'center', color: '#fff', flexShrink: 0 }}>
                  <Lightbulb size={16} />
                </div>
                <div>
                  <div style={{ fontWeight: 900, color: '#1e1b4b', fontSize: '0.95rem' }}>Step-by-step solution</div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 700 }}>{steps.length} step{steps.length !== 1 ? 's' : ''}</div>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {steps.map((step, si) => (
                  <div key={si} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: 'linear-gradient(135deg, #a78bfa, #7c3aed)', color: '#fff', display: 'grid', placeItems: 'center', fontWeight: 900, fontSize: '0.75rem', flexShrink: 0, marginTop: '2px' }}>
                      {si + 1}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      {step.explanation && (
                        <MathView content={step.explanation} style={{ fontSize: '0.92rem', color: '#1e293b', fontWeight: 600, lineHeight: 1.6, marginBottom: step.workingOut ? '8px' : 0 }} />
                      )}
                      {step.workingOut && (
                        <div style={{ padding: '10px 14px', borderRadius: '12px', background: '#f5f3ff', border: '1px solid #ddd6fe' }}>
                          <MathView content={/\$|\\\(|\\\[/.test(step.workingOut) ? step.workingOut : `$${step.workingOut}$`} style={{ fontSize: '1rem', fontWeight: 700, color: '#4f46e5' }} />
                        </div>
                      )}
                      {step.graphData && (
                        <div style={{ marginTop: '8px', borderRadius: '12px', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
                          <MathView content="" graphData={step.graphData} style={{ minHeight: '240px' }} />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
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

        {/* Sketch board (stacked, narrow screens only) */}
        {!isWide && (
          <div style={{ marginTop: '16px', minHeight: '420px', display: 'flex' }}>
            <ChallengeSketchBoard
              ref={sketchRef}
              placement="tablet"
              questionId={q?.id}
              questionType={q?.type}
              isSubmitted={submitted}
              showSplitScreen
            />
          </div>
        )}
      </div>
    );

    return (
      <div style={{ position: 'fixed', inset: 0, zIndex: 1200, background: '#f6f7fb', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        {/* Header bar: back-to-topic-list (left), counter (center), exit-to-chapter (right) */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', padding: '12px 16px', borderBottom: '1px solid #e9e7f3', background: '#fff', flexShrink: 0 }}>
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
          <button
            onClick={onBack}
            title="Exit to chapter"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              padding: '8px 14px', borderRadius: '12px', border: '1px solid #fee2e2',
              background: '#fff1f2', color: '#e11d48',
              fontSize: '0.82rem', fontWeight: 800, cursor: 'pointer',
            }}
          >
            <X size={15} /> Exit
          </button>
        </div>

        {/* Body: question/answer (left) + sketch board (right, wide only) */}
        <div style={{
          flex: 1, minHeight: 0,
          display: 'grid',
          gridTemplateColumns: isWide ? '1fr 1fr' : '1fr',
          gap: '16px', padding: '16px',
          maxWidth: '1500px', width: '100%', margin: '0 auto', boxSizing: 'border-box',
          overflow: 'hidden',
        }}>
          {leftPanel}
          {isWide && (
            <div style={{ minWidth: 0, minHeight: 0, display: 'flex', flexDirection: 'column' }}>
              <ChallengeSketchBoard
                ref={sketchRef}
                placement="side"
                questionId={q?.id}
                questionType={q?.type}
                isSubmitted={submitted}
                showSplitScreen
                fillAvailableHeight
              />
            </div>
          )}
        </div>

        {/* Report-a-problem modal */}
        <AnimatePresence>
          {reportOpen && (
            <div style={{ position: 'fixed', inset: 0, zIndex: 1400, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
              <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onClick={() => !submittingReport && setReportOpen(false)}
                style={{ position: 'absolute', inset: 0, background: 'rgba(15,23,42,0.7)', backdropFilter: 'blur(6px)' }}
              />
              <motion.div
                initial={{ scale: 0.94, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.94, opacity: 0 }}
                style={{ position: 'relative', maxWidth: '460px', width: '100%', background: '#fff', borderRadius: '22px', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.4)' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', background: 'linear-gradient(135deg, #f87171, #e11d48)', color: '#fff' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontWeight: 900 }}><Flag size={16} /> Report a problem</span>
                  <button onClick={() => !submittingReport && setReportOpen(false)} style={{ border: 'none', background: 'rgba(255,255,255,0.25)', color: '#fff', width: '30px', height: '30px', borderRadius: '50%', cursor: 'pointer', display: 'grid', placeItems: 'center' }}><X size={15} /></button>
                </div>
                <div style={{ padding: '20px' }}>
                  <p style={{ margin: '0 0 12px', fontSize: '0.85rem', color: '#64748b', fontWeight: 600, lineHeight: 1.5 }}>
                    Is something wrong with this question (answer looks incorrect, doesn't make sense)? Tell your teacher — they'll see it in the Reports tab.
                  </p>
                  <textarea
                    rows={4}
                    value={reportMessage}
                    onChange={(e) => setReportMessage(e.target.value)}
                    placeholder="e.g. The answer doesn't look right, or I don't understand…"
                    style={{ width: '100%', padding: '14px 16px', borderRadius: '14px', border: '1px solid #e2e8f0', outline: 'none', fontFamily: 'inherit', fontSize: '0.95rem', resize: 'vertical', fontWeight: 500, boxSizing: 'border-box' }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px', marginTop: '12px' }}>
                    <button onClick={() => setReportOpen(false)} disabled={submittingReport} style={{ padding: '10px 16px', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#fff', color: '#475569', fontWeight: 700, cursor: 'pointer' }}>Cancel</button>
                    <button onClick={submitReport} disabled={!reportMessage.trim() || submittingReport} style={{ padding: '10px 18px', borderRadius: '12px', border: 'none', background: !reportMessage.trim() ? '#cbd5e1' : 'linear-gradient(135deg, #f87171, #e11d48)', color: '#fff', fontWeight: 800, cursor: !reportMessage.trim() ? 'not-allowed' : 'pointer' }}>
                      {submittingReport ? 'Sending…' : 'Send report'}
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // ── DONE VIEW ─────────────────────────────────────────────────────────────
  if (view === 'done') {
    const sessionResults = results;
    const sessionCorrect = sessionResults.filter((r) => r.correct).length;
    const sessionTotal = sessionResults.length;
    const sessionPct = sessionTotal ? Math.round((sessionCorrect / sessionTotal) * 100) : 0;
    const xp = sessionPct >= 80 ? XP_PER_TOPIC : sessionPct >= 50 ? Math.round(XP_PER_TOPIC * 0.6) : Math.round(XP_PER_TOPIC * 0.2);
    const grade = sessionPct >= 80 ? { label: 'Excellent!', color: '#10b981', emoji: '🏆' }
      : sessionPct >= 50 ? { label: 'Good effort', color: '#7c3aed', emoji: '⭐' }
      : { label: 'Keep practising', color: '#f59e0b', emoji: '💪' };

    const totalInTopic = allTopicQuestions.length;
    const masteredCount = masteredIds.size;
    const overallPct = totalInTopic > 0 ? Math.round((masteredCount / totalInTopic) * 100) : 0;
    const remainingCount = totalInTopic - masteredCount;
    const allMastered = remainingCount <= 0;

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
          <div style={{ fontSize: '3rem', marginBottom: '8px' }}>{allMastered ? '🎉' : grade.emoji}</div>
          <h2 style={{ fontFamily: '"Outfit", sans-serif', fontSize: '2rem', fontWeight: 900, color: '#1e1b4b', margin: '0 0 6px' }}>
            {allMastered ? 'Topic Complete!' : grade.label}
          </h2>
          <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#64748b', marginBottom: '28px' }}>
            {topic.title}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '28px' }}>
            {[
              { label: 'This round', value: `${sessionCorrect}/${sessionTotal}`, sub: 'correct', color: grade.color },
              { label: 'Mastered', value: `${masteredCount}/${totalInTopic}`, sub: `${overallPct}% complete`, color: '#10b981' },
              { label: 'XP earned', value: `+${xp}`, sub: `of ${XP_PER_TOPIC} XP`, color: '#f59e0b' },
            ].map((item) => (
              <div key={item.label} style={{ padding: '16px', borderRadius: '16px', background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(255,255,255,0.5)' }}>
                <div style={{ fontSize: '0.62rem', fontWeight: 900, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#94a3b8', marginBottom: '4px' }}>{item.label}</div>
                <div style={{ fontFamily: '"Outfit", sans-serif', fontSize: '1.6rem', fontWeight: 900, color: item.color }}>{item.value}</div>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#94a3b8' }}>{item.sub}</div>
              </div>
            ))}
          </div>

          {/* Overall mastery progress bar */}
          <div style={{ marginBottom: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
              <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Overall mastery</span>
              <span style={{ fontSize: '0.72rem', fontWeight: 900, color: '#10b981' }}>{overallPct}%</span>
            </div>
            <div style={{ height: '8px', borderRadius: '999px', background: '#e2e8f0', overflow: 'hidden' }}>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${overallPct}%` }}
                transition={{ delay: 0.3, duration: 0.7 }}
                style={{ height: '100%', borderRadius: '999px', background: 'linear-gradient(90deg, #10b981, #059669)' }}
              />
            </div>
            {!allMastered && (
              <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#94a3b8', marginTop: '5px', textAlign: 'right' }}>
                {remainingCount} question{remainingCount !== 1 ? 's' : ''} remaining
              </div>
            )}
          </div>

          {/* Per-question results */}
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {sessionResults.map((r, i) => (
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
          {!allMastered && (
            <button
              onClick={handleRestart}
              style={{
                flex: 1, padding: '16px', borderRadius: '16px', border: '2px solid #ddd6fe',
                background: '#fff', color: '#7c3aed', fontWeight: 900, fontSize: '0.95rem',
                cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
              }}
            >
              <RotateCcw size={16} /> Practice wrong answers
            </button>
          )}
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
