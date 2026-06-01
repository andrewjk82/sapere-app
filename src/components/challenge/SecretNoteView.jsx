import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X, CheckCircle2, XCircle, Lightbulb, ArrowRight, ChevronDown,
  Sparkles, GraduationCap, MessageCircleQuestion, Send, BookLock, Flag,
} from 'lucide-react';
import MathView from '../MathView';
import ChallengeSketchBoard from './ChallengeSketchBoard';
import { db } from '../../firebase/config';
import { collection, addDoc, serverTimestamp, doc, setDoc, increment, getDoc } from 'firebase/firestore';

// XP awarded for each Secret Note question solved correctly.
const XP_PER_QUESTION = 1;
import { getOptions, getOptionText, MATH_SYMBOLS } from '../../utils/challengeUtils';
import { answersMatch } from '../../utils/answerMatching';
import {
  MISTAKE_TAGS,
  getNote,
  generateTwin,
  recordResult,
  recordTwinResult,
  setMistakeTag,
} from '../../utils/secretNote';

// ── Grading helpers ────────────────────────────────────────────────────────
// Normalise a maths answer for comparison: unicode superscripts → digits,
// drop ^ / $ / braces, unify minus signs, strip whitespace. So "3a²-10ab-8b²"
// and "3a^2 - 10ab - 8b^2" grade as equal.
const SUPERSCRIPTS = '⁰¹²³⁴⁵⁶⁷⁸⁹';
const norm = (s) => String(s ?? '')
  .replace(/\\frac\{([^{}]*)\}\{([^{}]*)\}/g, '($1)/($2)')
  .replace(/\\frac\{([^{}]*)\}\{([^{}]*)\}/g, '($1)/($2)')
  .replace(/\(([^()]+)\)\/\(([^()]+)\)/g, '$1/$2')
  .replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]/g, (c) => String(SUPERSCRIPTS.indexOf(c)))
  .replace(/[\^${}\\]/g, '')
  .replace(/[−–—]/g, '-')
  .replace(/\s+/g, '')
  .toLowerCase();

const shuffle = (arr) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

// Resolve the correct-answer TEXT and (for MC) a freshly shuffled option list.
const prepareQuestion = (q) => {
  const isMC = q.type === 'multiple_choice' || (Array.isArray(q.options) && q.type !== 'short_answer');
  if (isMC) {
    const opts = getOptions(q);
    let correctText;
    if (q.isManual && !Number.isNaN(parseInt(q.answer, 10))) {
      correctText = getOptionText(opts[parseInt(q.answer, 10)]);
    } else {
      correctText = String(q.answer);
    }
    return { mode: 'mc', options: shuffle(opts), correctText };
  }
  return { mode: 'text', options: [], correctText: String(q.answer) };
};

// ── Parse a hint string into ordered steps ────────────────────────────────
// Splits on blank lines, numbered prefixes (1. / Step 1:), or bullet chars.
const parseHintSteps = (hint) => {
  if (!hint) return [];
  // Try numbered steps first: "1. foo\n2. bar"
  const numbered = hint.split(/\n(?=\d+[\.\)]\s)/);
  if (numbered.length > 1) return numbered.map((s) => s.replace(/^\d+[\.\)]\s*/, '').trim()).filter(Boolean);
  // Try "Step N:" prefix
  const stepped = hint.split(/\n(?=Step\s+\d+\s*[:–-])/i);
  if (stepped.length > 1) return stepped.map((s) => s.replace(/^Step\s+\d+\s*[:–-]\s*/i, '').trim()).filter(Boolean);
  // Blank-line paragraphs
  const paras = hint.split(/\n{2,}/);
  if (paras.length > 1) return paras.map((s) => s.trim()).filter(Boolean);
  // Single newlines
  const lines = hint.split(/\n/).map((s) => s.trim()).filter(Boolean);
  if (lines.length > 1) return lines;
  // Single block
  return [hint.trim()];
};

// ── Step-by-step hint panel ───────────────────────────────────────────────
const StepwiseHint = ({ hint, accent }) => {
  const steps = useMemo(() => parseHintSteps(hint), [hint]);
  const [revealed, setRevealed] = useState(0);
  const [open, setOpen] = useState(false);

  // Reset when hint changes (new question)
  useEffect(() => { setRevealed(0); setOpen(false); }, [hint]);

  const hasHint = steps.length > 0;

  if (!hasHint) {
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

  const accentColor = accent?.from || '#a78bfa';
  const accentSoft = accent?.soft || '#ede9fe';
  const accentText = accent?.text || '#6d28d9';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      {/* Toggle button */}
      {!open ? (
        <button
          onClick={() => { setOpen(true); setRevealed(1); }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '11px 16px', borderRadius: '14px', border: 'none',
            background: accentSoft, color: accentText,
            fontSize: '0.86rem', fontWeight: 800, cursor: 'pointer', width: '100%',
            justifyContent: 'center',
          }}
        >
          <Lightbulb size={15} />
          Show hint {steps.length > 1 ? `(${steps.length} steps)` : ''}
        </button>
      ) : (
        <div style={{
          background: '#fffbeb', border: '1px solid #fef3c7',
          borderRadius: '16px', padding: '14px 16px',
          display: 'flex', flexDirection: 'column', gap: '10px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '2px' }}>
            <Lightbulb size={14} style={{ color: '#d97706', flexShrink: 0 }} />
            <span style={{ fontSize: '0.68rem', fontWeight: 900, color: '#d97706', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Hint {steps.length > 1 ? `· Step ${revealed} of ${steps.length}` : ''}
            </span>
            {/* Step dots */}
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

          {/* Revealed steps */}
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
                  }}>
                    {i + 1}
                  </div>
                )}
                <MathView content={step} style={{ fontSize: '0.9rem', color: '#92400e', fontWeight: 600, lineHeight: 1.6, flex: 1 }} />
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Next hint step button */}
          {revealed < steps.length ? (
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
      )}
    </div>
  );
};

// ── Worked solution step-by-step viewer ───────────────────────────────────
const WorkedSolution = ({ question }) => {
  const steps = question?.solutionSteps;
  const fallback = question?.solution;
  const [stepIdx, setStepIdx] = useState(0);

  // Reset when question changes
  useEffect(() => { setStepIdx(0); }, [question?.id]);

  // No steps and no fallback → nothing to show
  if ((!steps || steps.length === 0) && !fallback) return null;

  // Fallback: render old-style solution text
  if (!steps || steps.length === 0) {
    return (
      <div className="sn__solution">
        <div className="sn__solution-h"><Lightbulb size={14} /> Solution</div>
        <MathView content={fallback} style={{ color: '#475569', fontSize: '0.92rem' }} />
      </div>
    );
  }

  const total = steps.length;
  const current = steps[stepIdx];
  const isLast = stepIdx === total - 1;

  return (
    <div className="sn__ws">
      {/* Header */}
      <div className="sn__ws-header">
        <div className="sn__ws-icon"><Sparkles size={16} /></div>
        <div>
          <div className="sn__ws-label">Worked Solution</div>
          <div className="sn__ws-sub">Step {stepIdx + 1} of {total}</div>
        </div>
        {/* Step dots */}
        <div className="sn__ws-dots">
          {steps.map((_, i) => (
            <button
              key={i}
              onClick={() => setStepIdx(i)}
              className={`sn__ws-dot${i === stepIdx ? ' sn__ws-dot--on' : i < stepIdx ? ' sn__ws-dot--done' : ''}`}
            />
          ))}
        </div>
      </div>

      {/* Step card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={stepIdx}
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -12 }}
          transition={{ duration: 0.18 }}
          className="sn__ws-step"
        >
          <div className="sn__ws-num">{stepIdx + 1}</div>
          <div className="sn__ws-content">
            <div className="sn__ws-step-label">Step {stepIdx + 1}</div>
            {current.explanation && (
              <MathView content={current.explanation} style={{ fontSize: '0.95rem', color: '#1e1b4b', fontWeight: 600, lineHeight: 1.6 }} />
            )}
            {current.workingOut && (
              <div className="sn__ws-working">
                <div className="sn__ws-working-label">Working out</div>
                <MathView content={/\$|\\\(|\\\[/.test(current.workingOut) ? current.workingOut : `$${current.workingOut}$`} style={{ fontSize: '1rem', fontWeight: 700, color: '#4f46e5' }} />
              </div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Next step button */}
      {!isLast && (
        <button className="sn__ws-next" onClick={() => setStepIdx((i) => i + 1)}>
          Next step <ChevronDown size={16} />
        </button>
      )}
      {isLast && (
        <div className="sn__ws-done">
          <CheckCircle2 size={14} /> All steps complete
        </div>
      )}
    </div>
  );
};

// ── Full-screen shell (defined at module scope so it never remounts) ───────
const NoteShell = ({ headerGradient, title, subtitle, showProgress, progressPct, onClose, children, isMobile, wide }) => (
  <motion.div
    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
    style={{
      position: 'fixed', inset: 0, background: '#f5f3ff', zIndex: 2000,
      overflowY: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center',
      padding: isMobile ? '0 0 40px' : '0 0 60px',
    }}
  >
    <style>{secretNoteStyles}</style>
    <div className="sn__bar" style={{ background: headerGradient }}>
      <div className="sn__bar-l">
        <div className="sn__bar-ico"><BookLock size={20} /></div>
        <div>
          <div className="sn__bar-title">{title}</div>
          <div className="sn__bar-sub">{subtitle}</div>
        </div>
      </div>
      <button onClick={onClose} style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 16px', borderRadius: '20px', border: '2px solid rgba(255,255,255,0.5)', background: 'rgba(255,255,255,0.15)', color: '#fff', fontWeight: 800, fontSize: '0.85rem', cursor: 'pointer', backdropFilter: 'blur(4px)' }}>
        <X size={15} /> Exit
      </button>
    </div>
    {showProgress && (
      <div className="sn__progress-wrap">
        <div className="sn__progress" style={{ width: `${progressPct}%`, background: headerGradient }} />
      </div>
    )}
    <div className={`sn__body${wide ? ' sn__body--wide' : ''}`}>{children}</div>
  </motion.div>
);

// ── Main component ─────────────────────────────────────────────────────────
const SecretNoteView = ({ kind, uid, user, studentName, onClose, isMobile }) => {
  const accent = kind === 'calc'
    ? { from: '#fbbf24', to: '#f59e0b', soft: '#fef3c7', text: '#b45309' }
    : { from: '#a78bfa', to: '#8b5cf6', soft: '#ede9fe', text: '#6d28d9' };
  const title = kind === 'calc' ? 'Secret Note · Calculation' : 'Secret Note · Daily';

  // Frozen snapshot of the notebook for this session.
  const [queue] = useState(() => getNote(kind, uid));
  const [idx, setIdx] = useState(0);
  const [phase, setPhase] = useState(queue.length === 0 ? 'empty' : 'solve');
  const [answer, setAnswer] = useState('');
  const [selectedIdx, setSelectedIdx] = useState(null);
  const [graded, setGraded] = useState(null);   // bool: was original correct
  const [twinGraded, setTwinGraded] = useState(null);
  const [twin, setTwin] = useState(null);       // twin question object
  const [twinPrep, setTwinPrep] = useState(null);
  const [tag, setTag] = useState(null);         // mistake tag chosen this card
  const [summary, setSummary] = useState({ graduated: 0, kept: 0, xp: 0 });

  // Problem-report panel (flag a broken question)
  const [reportOpen, setReportOpen] = useState(false);
  const [reportMsg, setReportMsg] = useState('');
  const [reportSending, setReportSending] = useState(false);
  const [reportSentIds, setReportSentIds] = useState([]);

  // Teacher-review panel
  const [reviewOpen, setReviewOpen] = useState(false);
  const [reviewMsg, setReviewMsg] = useState('');
  const [reviewSending, setReviewSending] = useState(false);
  const [reviewSentIds, setReviewSentIds] = useState([]);
  const canvasRef = useRef(null);
  const solvePadRef = useRef(null);
  const answerInputRef = useRef(null);
  const snFracDenRef = useRef(null);
  const [snFracMode, setSnFracMode] = useState(false);
  const [snFracNum, setSnFracNum] = useState('');
  const [snFracDen, setSnFracDen] = useState('');
  useEffect(() => { setSnFracMode(false); setSnFracNum(''); setSnFracDen(''); }, [idx]);
  const snCommitFraction = (num, den) => {
    if (!den) { setSnFracMode(false); answerInputRef.current?.focus(); return; }
    const base = answer;
    const prefix = base.endsWith(num) ? base.slice(0, base.length - num.length) : base;
    setAnswer(prefix + `(${num || '0'})/(${den})`);
    setSnFracMode(false); setSnFracNum(''); setSnFracDen('');
    setTimeout(() => answerInputRef.current?.focus(), 50);
  };

  const [liveQueue, setLiveQueue] = useState(null);

  useEffect(() => {
    if (queue.length > 0 && !liveQueue) {
      let isMounted = true;
      const fetchLive = async () => {
        const qRef = collection(db, "questions");
        const live = await Promise.all(
          queue.map(async (item) => {
            const q = item.question;
            if (!q || !q.id) return item;
            try {
              const snap = await getDoc(doc(qRef, q.id));
              if (snap.exists()) {
                const data = snap.data();
                return {
                  ...item,
                  question: {
                    ...q,
                    solution: data.solution !== undefined ? data.solution : q.solution,
                    solutionSteps: data.solutionSteps !== undefined ? data.solutionSteps : q.solutionSteps,
                    hint: data.hint !== undefined ? data.hint : q.hint,
                    question: data.question !== undefined ? data.question : q.question,
                    answer: data.answer !== undefined ? data.answer : q.answer,
                    subQuestions: data.subQuestions !== undefined ? data.subQuestions : q.subQuestions,
                    graphData: data.graphData !== undefined ? data.graphData : q.graphData,
                  }
                };
              }
            } catch (err) {
              console.warn("Failed to fetch live question:", q.id, err);
            }
            return item;
          })
        );
        if (isMounted) setLiveQueue(live);
      };
      fetchLive();
    }
  }, [queue]);

  const activeQueue = liveQueue || queue;
  const item = activeQueue[idx] || null;
  const question = item?.question || null;
  const prep = useMemo(() => (question ? prepareQuestion(question) : null), [question]);

  const activeQ = phase === 'twinSolve' || phase === 'twinFeedback' ? twin : question;
  const activePrep = phase === 'twinSolve' || phase === 'twinFeedback' ? twinPrep : prep;
  const isFeedback = phase === 'feedback' || phase === 'twinFeedback';

  // ── Actions ──────────────────────────────────────────────────────────────
  // Reward effort: +1 XP for each Secret Note question solved correctly.
  const awardXp = (amount) => {
    if (!uid || !amount) return;
    try {
      setDoc(
        doc(db, 'users', uid),
        { totalXP: increment(amount), lastActive: new Date().toISOString() },
        { merge: true },
      ).catch((e) => console.warn('secret note XP award failed (non-fatal):', e));
      setDoc(
        doc(db, 'leaderboard', uid),
        { totalXP: increment(amount), lastUpdated: serverTimestamp() },
        { merge: true },
      ).catch(() => {});
    } catch (e) {
      console.warn('secret note XP award failed (non-fatal):', e);
    }
  };

  const submitOriginal = (textVal, optText) => {
    const val = optText != null ? optText : textVal;
    const correct = answersMatch(val, prep.correctText);
    const status = recordResult(kind, uid, question.id, correct);
    if (status === 'graduated') setSummary((s) => ({ ...s, graduated: s.graduated + 1 }));
    if (correct) {
      awardXp(XP_PER_QUESTION);
      setSummary((s) => ({ ...s, xp: s.xp + XP_PER_QUESTION }));
    }
    setGraded({ correct, status });
    setPhase('feedback');
  };

  const submitTwin = (textVal, optText) => {
    const val = optText != null ? optText : textVal;
    const correct = answersMatch(val, twinPrep.correctText);
    setTwinGraded(correct);
    const status = recordTwinResult(kind, uid, question.id, correct);
    if (status === 'graduated') setSummary((s) => ({ ...s, graduated: s.graduated + 1 }));
    setPhase('twinFeedback');
  };

  const startTwin = () => {
    const t = generateTwin(question);
    if (!t) { advance(); return; }
    setTwin(t);
    setTwinPrep(prepareQuestion(t));
    setAnswer('');
    setSelectedIdx(null);
    setPhase('twinSolve');
  };

  const advance = () => {
    // Tally non-graduated as kept (only once, at original feedback resolve).
    const next = idx + 1;
    setAnswer('');
    setSelectedIdx(null);
    setGraded(null);
    setTwinGraded(null);
    setTwin(null);
    setTwinPrep(null);
    setTag(null);
    if (next >= queue.length) {
      setPhase('done');
    } else {
      setIdx(next);
      setPhase('solve');
    }
  };

  const handleContinue = () => {
    const status = graded?.status;
    if (phase === 'feedback' && status === 'needTwin') {
      startTwin();
      return;
    }
    if (phase === 'feedback' && status === 'kept') {
      setSummary((s) => ({ ...s, kept: s.kept + 1 }));
    }
    if (phase === 'twinFeedback') {
      const tStatus = twinGraded ? 'graduated' : 'kept';
      if (tStatus === 'kept') setSummary((s) => ({ ...s, kept: s.kept + 1 }));
    }
    advance();
  };

  const pickTag = (tagId) => {
    setTag(tagId);
    setMistakeTag(kind, uid, question.id, tagId);
  };

  const sendReview = async () => {
    if (!question || reviewSending) return;
    setReviewSending(true);
    try {
      let canvasImage = null;
      try {
        canvasImage = await canvasRef.current?.exportImage?.({ force: true });
      } catch { /* canvas optional */ }
      await addDoc(collection(db, 'reports'), {
        studentId: uid,
        studentName: studentName || user?.displayName || user?.email || 'Student',
        source: 'secret_note',
        noteKind: kind,
        questionId: question.id || '',
        studentAnswer: '',
        questionData: {
          id: question.id || '',
          question: question.question || '',
          answer: String(question.answer ?? ''),
          type: question.type || '',
          chapterTitle: question.chapterTitle || '',
          topicId: question.topicId || '',
          topicCode: question.topicCode || '',
          topicTitle: question.topicTitle || '',
          isManual: !!question.isManual,
          options: getOptions(question).map((opt) =>
            typeof opt === 'object' ? { text: String(opt.text || '') } : String(opt ?? ''),
          ),
        },
        workingOut: canvasImage || null,
        message: reviewMsg.trim() || 'Secret Note review request',
        status: 'open',
        createdAt: serverTimestamp(),
      });
      setReviewSentIds((ids) => [...ids, question.id]);
      setReviewOpen(false);
      setReviewMsg('');
    } catch (e) {
      console.warn('secret note review request failed:', e);
    } finally {
      setReviewSending(false);
    }
  };

  // Lightweight "this question has a problem" report → same reports pipeline the
  // teacher reviews (and can delete the question from, which purges it from
  // everyone's Secret Note).
  const sendReport = async () => {
    if (!question || reportSending) return;
    setReportSending(true);
    try {
      await addDoc(collection(db, 'reports'), {
        studentId: uid,
        studentName: studentName || user?.displayName || user?.email || 'Student',
        source: 'secret_note',
        noteKind: kind,
        questionId: question.id || '',
        studentAnswer: '',
        questionData: {
          id: question.id || '',
          question: question.question || '',
          answer: String(question.answer ?? ''),
          type: question.type || '',
          chapterTitle: question.chapterTitle || '',
          topicId: question.topicId || '',
          topicCode: question.topicCode || '',
          topicTitle: question.topicTitle || '',
          isManual: !!question.isManual,
          options: getOptions(question).map((opt) =>
            typeof opt === 'object' ? { text: String(opt.text || '') } : String(opt ?? ''),
          ),
        },
        message: `⚠️ Problem report (Secret Note): ${reportMsg.trim() || 'This question looks wrong.'}`,
        status: 'open',
        createdAt: serverTimestamp(),
      });
      setReportSentIds((ids) => [...ids, question.id]);
      setReportOpen(false);
      setReportMsg('');
    } catch (e) {
      console.warn('secret note problem report failed:', e);
    } finally {
      setReportSending(false);
    }
  };

  // ── Render ───────────────────────────────────────────────────────────────
  const headerGradient = `linear-gradient(135deg, ${accent.from}, ${accent.to})`;
  const subtitle = phase === 'done' || phase === 'empty'
    ? `${queue.length} saved`
    : `Question ${idx + 1} of ${queue.length}`;
  const shellProps = {
    headerGradient, title, subtitle, onClose, isMobile,
    showProgress: phase !== 'empty' && phase !== 'done',
    progressPct: queue.length > 0 ? (idx / queue.length) * 100 : 0,
  };

  // Empty notebook
  if (phase === 'empty') {
    return (
      <NoteShell {...shellProps}>
        <div className="sn__card sn__center">
          <div className="sn__big-emoji">🎉</div>
          <h2 className="sn__h2">Notebook is clear!</h2>
          <p className="sn__muted">
            You have no mistakes saved for this test. Keep up the great work.
          </p>
          <button className="sn__btn sn__btn--primary" style={{ background: headerGradient }} onClick={onClose}>
            Back <ArrowRight size={16} />
          </button>
        </div>
      </NoteShell>
    );
  }

  // Session complete
  if (phase === 'done') {
    return (
      <NoteShell {...shellProps}>
        <div className="sn__card sn__center">
          <div className="sn__big-emoji">📒</div>
          <h2 className="sn__h2">Review complete</h2>
          <div className="sn__done-stats">
            <div className="sn__done-stat">
              <div className="sn__done-num" style={{ color: '#16a34a' }}>{summary.graduated}</div>
              <div className="sn__done-lbl">Graduated</div>
            </div>
            <div className="sn__done-stat">
              <div className="sn__done-num" style={{ color: accent.text }}>{summary.kept}</div>
              <div className="sn__done-lbl">Still practising</div>
            </div>
            <div className="sn__done-stat">
              <div className="sn__done-num" style={{ color: '#8b5cf6' }}>+{summary.xp}</div>
              <div className="sn__done-lbl">XP earned</div>
            </div>
          </div>
          <p className="sn__muted">
            Graduated questions left your notebook. The rest will come back on
            their next review day.
          </p>
          <button className="sn__btn sn__btn--primary" style={{ background: headerGradient }} onClick={onClose}>
            Done <ArrowRight size={16} />
          </button>
        </div>
      </NoteShell>
    );
  }

  const isTwinPhase = phase === 'twinSolve' || phase === 'twinFeedback';
  const feedbackCorrect = isTwinPhase ? twinGraded : graded?.correct;

  return (
    <NoteShell {...shellProps} wide={!isMobile}>
      {/* Question on the left, working-out pad on the right (desktop). */}
      <div className="sn__solve-row">
      <div className="sn__card">
        {isTwinPhase && (
          <div className="sn__twin-badge">
            <Sparkles size={13} /> Twin question — same idea, new numbers
          </div>
        )}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', marginBottom: '4px' }}>
          {activeQ?.topicTitle || activeQ?.chapterTitle ? (
            <div className="sn__topic" style={{ background: accent.soft, color: accent.text, marginBottom: 0 }}>
              {activeQ.topicCode ? `${activeQ.topicCode} · ` : ''}
              {activeQ.topicTitle || activeQ.chapterTitle}
            </div>
          ) : <span />}
          {/* Report a problem with this question (real question only, not twins) */}
          {!isTwinPhase && (
            reportSentIds.includes(question?.id) ? (
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '0.72rem', fontWeight: 800, color: '#16a34a', flexShrink: 0 }}>
                <CheckCircle2 size={13} /> Reported
              </span>
            ) : (
              <button
                onClick={() => setReportOpen(true)}
                title="Report a problem with this question"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', flexShrink: 0, padding: '6px 11px', borderRadius: '10px', border: '1px solid #fee2e2', background: '#fff1f2', color: '#e11d48', fontSize: '0.72rem', fontWeight: 800, cursor: 'pointer' }}
              >
                <Flag size={13} /> Report
              </button>
            )
          )}
        </div>

        <MathView
          content={activeQ?.question}
          graphData={activeQ?.requiresManualGrading || activeQ?.type === 'teacher_review' ? (isFeedback ? activeQ?.graphData : null) : activeQ?.graphData}
          style={{ fontSize: '1.2rem', fontWeight: 600, color: '#1e1b4b', lineHeight: 1.6 }}
        />

        {/* Step-by-step hint — always shown (not hidden in feedback) */}
        {!isFeedback && (
          <StepwiseHint hint={activeQ?.hint} accent={accent} />
        )}

        {/* Answer inputs */}
        {activePrep?.mode === 'mc' ? (
          <div className="sn__opts">
            {activePrep.options.map((opt, i) => {
              const optText = getOptionText(opt);
              const isSel = selectedIdx === i;
              let status = 'default';
              if (isFeedback) {
                if (answersMatch(optText, activePrep.correctText)) status = 'correct';
                else if (isSel) status = 'wrong';
              }
              return (
                <button
                  key={i}
                  disabled={isFeedback}
                  onClick={() => { if (!isFeedback) setSelectedIdx(i); }}
                  className={`sn__opt sn__opt--${status}${isSel && !isFeedback ? ' sn__opt--sel' : ''}`}
                >
                  <span className="sn__opt-letter">{String.fromCharCode(65 + i)}</span>
                  <MathView content={optText} style={{ fontWeight: 700, flex: 1 }} />
                  {status === 'correct' && <CheckCircle2 size={20} style={{ color: '#16a34a' }} />}
                  {status === 'wrong' && <XCircle size={20} style={{ color: '#ef4444' }} />}
                </button>
              );
            })}
          </div>
        ) : (
          <>
            {/* Math symbol pad — same keys as the daily challenge */}
            {!isFeedback && (
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '10px' }}>
                {MATH_SYMBOLS.map((symbol) => (
                  <button
                    key={symbol}
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      setAnswer((prev) => (prev || '') + symbol);
                      answerInputRef.current?.focus();
                    }}
                    style={{
                      width: '40px', height: '40px', borderRadius: '11px',
                      border: '1px solid #e2e8f0',
                      background: symbol === '²' || symbol === '³' ? '#f5f3ff' : '#fff',
                      color: '#4f46e5',
                      fontSize: symbol === '√' ? '1.2rem' : '1rem', fontWeight: 800,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      cursor: 'pointer', padding: 0, lineHeight: 1,
                      fontFamily: '"KaTeX_Main", "Times New Roman", serif',
                    }}
                  >
                    {symbol}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    setAnswer((prev) => (prev || '').slice(0, -1));
                    answerInputRef.current?.focus();
                  }}
                  style={{
                    width: '58px', height: '40px', borderRadius: '11px',
                    border: '1px solid #fee2e2', background: '#fff1f2', color: '#e11d48',
                    fontSize: '0.72rem', fontWeight: 900, textTransform: 'uppercase',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
                  }}
                >
                  Del
                </button>
              </div>
            )}
            {snFracMode && (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '10px', background: '#f5f3ff', borderRadius: '14px', border: '2px solid #a78bfa' }}>
                <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: '2px' }}>
                  <input value={snFracNum} onChange={(e) => setSnFracNum(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === 'Tab') { e.preventDefault(); snFracDenRef.current?.focus(); } if (e.key === 'Escape') { setSnFracMode(false); answerInputRef.current?.focus(); } }} style={{ width: Math.max(40, snFracNum.length * 16 + 20) + 'px', textAlign: 'center', border: 'none', borderBottom: '2px solid #7c3aed', outline: 'none', fontSize: '1.3rem', fontWeight: 700, fontFamily: '"KaTeX_Main","Times New Roman",serif', background: 'transparent', padding: '2px 4px' }} placeholder="a" />
                  <div style={{ width: '100%', height: '2px', background: '#1e1b4b', borderRadius: '2px' }} />
                  <input ref={snFracDenRef} value={snFracDen} onChange={(e) => setSnFracDen(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') snCommitFraction(snFracNum, snFracDen); if (e.key === 'Escape') { setSnFracMode(false); answerInputRef.current?.focus(); } }} style={{ width: Math.max(40, snFracDen.length * 16 + 20) + 'px', textAlign: 'center', border: 'none', borderBottom: '2px solid #7c3aed', outline: 'none', fontSize: '1.3rem', fontWeight: 700, fontFamily: '"KaTeX_Main","Times New Roman",serif', background: 'transparent', padding: '2px 4px' }} placeholder="b" autoFocus />
                </div>
                <button onClick={() => snCommitFraction(snFracNum, snFracDen)} style={{ padding: '6px 12px', borderRadius: '8px', border: 'none', background: '#7c3aed', color: '#fff', fontWeight: 800, fontSize: '0.82rem', cursor: 'pointer' }}>OK</button>
                <button onClick={() => { setSnFracMode(false); answerInputRef.current?.focus(); }} style={{ padding: '6px 8px', borderRadius: '8px', border: '1px solid #ddd6fe', background: '#fff', color: '#64748b', fontWeight: 800, fontSize: '0.82rem', cursor: 'pointer' }}>✕</button>
              </div>
            )}
            <input
              ref={answerInputRef}
              className="sn__input"
              type="text"
              disabled={isFeedback || snFracMode}
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder={snFracMode ? '' : 'Type your answer... (press / for fraction)'}
              onKeyDown={(e) => {
                if (e.key === '/') { e.preventDefault(); setSnFracNum(answer); setSnFracDen(''); setSnFracMode(true); setTimeout(() => snFracDenRef.current?.focus(), 50); return; }
                if (e.key === 'Enter' && answer.trim() && !isFeedback) {
                  isTwinPhase ? submitTwin(answer) : submitOriginal(answer);
                }
              }}
            />
          </>
        )}

        {/* Submit */}
        {!isFeedback && (
          <button
            className="sn__btn sn__btn--primary"
            style={{ background: headerGradient }}
            disabled={activePrep?.mode === 'mc' ? selectedIdx == null : !answer.trim()}
            onClick={() => {
              const optText = activePrep?.mode === 'mc'
                ? getOptionText(activePrep.options[selectedIdx])
                : null;
              isTwinPhase ? submitTwin(answer, optText) : submitOriginal(answer, optText);
            }}
          >
            Check answer
          </button>
        )}

        {/* Feedback */}
        <AnimatePresence>
          {isFeedback && (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
              <div className={`sn__fb ${feedbackCorrect ? 'sn__fb--ok' : 'sn__fb--no'}`}>
                <div className="sn__fb-head">
                  {feedbackCorrect
                    ? <CheckCircle2 size={20} style={{ color: '#16a34a' }} />
                    : <XCircle size={20} style={{ color: '#ef4444' }} />}
                  <span>{feedbackCorrect ? 'Correct!' : 'Not quite'}</span>
                </div>
                {!feedbackCorrect && (
                  <div className="sn__fb-answer">
                    Correct answer: <MathView content={activePrep.correctText} style={{ display: 'inline', fontWeight: 800 }} />
                  </div>
                )}
                <WorkedSolution question={activeQ} />
              </div>

              {/* Mistake tag — only on the original question feedback */}
              {phase === 'feedback' && (
                <div className="sn__tags">
                  <div className="sn__tags-q">Why did you get this wrong the first time?</div>
                  <div className="sn__tags-row">
                    {MISTAKE_TAGS.map((t) => (
                      <button
                        key={t.id}
                        className={`sn__tag${tag === t.id ? ' sn__tag--on' : ''}`}
                        onClick={() => pickTag(t.id)}
                      >
                        <span>{t.emoji}</span> {t.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <button
                className="sn__btn sn__btn--primary"
                style={{ background: headerGradient, marginTop: 14 }}
                onClick={handleContinue}
              >
                {phase === 'feedback' && graded?.status === 'needTwin'
                  ? (<>Try the twin question <Sparkles size={16} /></>)
                  : idx + 1 >= queue.length
                  ? (<>Finish review <GraduationCap size={16} /></>)
                  : (<>Next question <ArrowRight size={16} /></>)}
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Ask teacher */}
        {!isTwinPhase && (
          reviewSentIds.includes(question?.id) ? (
            <div className="sn__review-sent">
              <CheckCircle2 size={15} /> Sent to your teacher
            </div>
          ) : (
            <button className="sn__ask" onClick={() => setReviewOpen(true)}>
              <MessageCircleQuestion size={15} /> Ask the teacher about this
            </button>
          )
        )}
      </div>

        {!isMobile && (
          <div className="sn__solve-pad">
            <ChallengeSketchBoard
              placement="side"
              questionId={activeQ?.id}
              questionType={activeQ?.type}
              isSubmitted={false}
              showSplitScreen
              ref={solvePadRef}
            />
          </div>
        )}
      </div>

      {/* Teacher review panel */}
      <AnimatePresence>
        {reviewOpen && (
          <>
            <motion.div
              className="sn__rv-backdrop"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => !reviewSending && setReviewOpen(false)}
            />
            <motion.div
              className="sn__rv"
              initial={{ opacity: 0, x: "-50%", y: "-46%", scale: 0.96 }}
              animate={{ opacity: 1, x: "-50%", y: "-50%", scale: 1 }}
              exit={{ opacity: 0, x: "-50%", y: "-46%", scale: 0.96 }}
            >
              <div className="sn__rv-head" style={{ background: headerGradient }}>
                <span>Ask your teacher</span>
                <button onClick={() => !reviewSending && setReviewOpen(false)}><X size={16} /></button>
              </div>
              <div className="sn__rv-body">
                <p className="sn__muted" style={{ margin: '0 0 10px' }}>
                  Write out your attempt below and add a question — your teacher
                  will see both.
                </p>
                <div className="sn__rv-canvas">
                  <ChallengeSketchBoard
                    placement="tablet"
                    questionId={question?.id}
                    questionType={question?.type}
                    isSubmitted={false}
                    showSplitScreen
                    ref={canvasRef}
                  />
                </div>
                <textarea
                  className="sn__rv-msg"
                  placeholder="What part are you stuck on?"
                  value={reviewMsg}
                  onChange={(e) => setReviewMsg(e.target.value)}
                  rows={3}
                />
                <button
                  className="sn__btn sn__btn--primary"
                  style={{ background: headerGradient, width: '100%' }}
                  disabled={reviewSending}
                  onClick={sendReview}
                >
                  {reviewSending ? 'Sending...' : (<>Send to teacher <Send size={15} /></>)}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Problem-report panel */}
      <AnimatePresence>
        {reportOpen && (
          <>
            <motion.div
              className="sn__rv-backdrop"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => !reportSending && setReportOpen(false)}
            />
            <motion.div
              className="sn__rv"
              initial={{ opacity: 0, x: '-50%', y: '-46%', scale: 0.96 }}
              animate={{ opacity: 1, x: '-50%', y: '-50%', scale: 1 }}
              exit={{ opacity: 0, x: '-50%', y: '-46%', scale: 0.96 }}
            >
              <div className="sn__rv-head" style={{ background: 'linear-gradient(135deg, #f87171, #e11d48)' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}><Flag size={15} /> Report a problem</span>
                <button onClick={() => !reportSending && setReportOpen(false)}><X size={16} /></button>
              </div>
              <div className="sn__rv-body">
                <p className="sn__muted" style={{ margin: '0 0 10px' }}>
                  Is something wrong with this question (e.g. the answer looks
                  incorrect, or it doesn't make sense)? Tell your teacher — they
                  can fix or remove it.
                </p>
                <textarea
                  className="sn__rv-msg"
                  placeholder="What's wrong with this question?"
                  value={reportMsg}
                  onChange={(e) => setReportMsg(e.target.value)}
                  rows={3}
                />
                <button
                  className="sn__btn sn__btn--primary"
                  style={{ background: 'linear-gradient(135deg, #f87171, #e11d48)', width: '100%' }}
                  disabled={reportSending}
                  onClick={sendReport}
                >
                  {reportSending ? 'Sending...' : (<>Send report <Flag size={15} /></>)}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </NoteShell>
  );
};

// ── Styles ─────────────────────────────────────────────────────────────────
const secretNoteStyles = `
  .sn__bar {
    width: 100%; display: flex; align-items: center; justify-content: space-between;
    padding: 16px 22px; color: #fff;
  }
  .sn__bar-l { display: flex; align-items: center; gap: 12px; }
  .sn__bar-ico {
    width: 38px; height: 38px; border-radius: 12px; display: grid; place-items: center;
    background: rgba(255,255,255,0.22);
  }
  .sn__bar-title { font-weight: 900; font-size: 1.02rem; }
  .sn__bar-sub { font-size: 0.74rem; opacity: 0.85; font-weight: 700; }
  .sn__close {
    width: 34px; height: 34px; border-radius: 10px; border: 0; cursor: pointer;
    background: rgba(255,255,255,0.22); color: #fff; display: grid; place-items: center;
  }
  .sn__progress-wrap { width: 100%; height: 4px; background: rgba(0,0,0,0.06); }
  .sn__progress { height: 100%; transition: width 0.4s ease; }

  .sn__body { width: 100%; max-width: 620px; padding: 24px 18px 0; box-sizing: border-box; }
  /* Wider body when the solve layout shows the side working-out pad. */
  .sn__body--wide { max-width: min(1540px, calc(100vw - 48px)); }
  .sn__solve-row { display: flex; gap: 20px; align-items: stretch; width: 100%; flex-wrap: nowrap; }
  /* In split view the right sketch pad is sticky/tall; let the question card
     scroll on its own so the Submit button below the fold stays reachable. */
  .sn__solve-row .sn__card { flex: 0 1 600px; max-width: 600px; min-width: 0; max-height: calc(100vh - 48px); overflow-y: auto; -webkit-overflow-scrolling: touch; }
  .sn__solve-pad { flex: 1 1 340px; min-width: 300px; display: flex; }
  /* On narrow tablets (768–1099px) keep side-by-side but tighten the question card */
  @media (max-width: 1099px) {
    .sn__solve-row .sn__card { flex: 0 1 420px; max-width: 420px; }
    .sn__solve-pad { flex: 1 1 300px; min-width: 280px; }
  }
  .sn__card {
    background: #fff; border-radius: 28px; padding: 28px;
    border: 1px solid #ece9f6; box-shadow: 0 20px 44px rgba(91,33,182,0.08);
    display: flex; flex-direction: column; gap: 16px;
  }
  .sn__center { align-items: center; text-align: center; }
  .sn__big-emoji { font-size: 3rem; }
  .sn__h2 { font-size: 1.5rem; font-weight: 900; color: #1e1b4b; margin: 0; }
  .sn__muted { color: #6d6a85; font-size: 0.9rem; line-height: 1.55; margin: 0; }

  .sn__twin-badge {
    display: inline-flex; align-items: center; gap: 6px; align-self: flex-start;
    padding: 5px 12px; border-radius: 999px; font-size: 0.72rem; font-weight: 800;
    background: linear-gradient(135deg, #fce7f3, #ede9fe); color: #9333ea;
  }
  .sn__topic {
    align-self: flex-start; padding: 4px 12px; border-radius: 8px;
    font-size: 0.7rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.04em;
  }
  .sn__hint {
    display: flex; align-items: flex-start; gap: 7px;
    background: #fffbeb; border: 1px solid #fef3c7; color: #92400e;
    padding: 11px 14px; border-radius: 14px; font-size: 0.86rem; font-weight: 600;
  }

  .sn__opts { display: flex; flex-direction: column; gap: 10px; }
  .sn__opt {
    display: flex; align-items: center; gap: 14px;
    padding: 14px 18px; border-radius: 16px; cursor: pointer; text-align: left;
    background: #fff; border: 2px solid #f1f5f9; transition: all 0.15s ease;
  }
  .sn__opt-letter {
    width: 28px; height: 28px; border-radius: 50%; flex-shrink: 0;
    display: grid; place-items: center; font-weight: 900; font-size: 0.85rem;
    background: #f1f5f9; color: #64748b;
  }
  .sn__opt--sel { border-color: #8b5cf6; background: #f5f3ff; }
  .sn__opt--sel .sn__opt-letter { background: #8b5cf6; color: #fff; }
  .sn__opt--correct { border-color: #16a34a; background: #f0fdf4; }
  .sn__opt--correct .sn__opt-letter { background: #16a34a; color: #fff; }
  .sn__opt--wrong { border-color: #ef4444; background: #fef2f2; }
  .sn__opt--wrong .sn__opt-letter { background: #ef4444; color: #fff; }

  .sn__input {
    width: 100%; padding: 18px 20px; border-radius: 18px; border: 2px solid #e2e8f0;
    font-size: 1.2rem; font-weight: 700; text-align: center; box-sizing: border-box;
  }
  .sn__input:focus { outline: none; border-color: #8b5cf6; }

  .sn__btn {
    display: inline-flex; align-items: center; justify-content: center; gap: 8px;
    padding: 15px 24px; border-radius: 16px; border: 0; cursor: pointer;
    font-weight: 800; font-size: 0.95rem; color: #fff; width: 100%;
    transition: transform 0.15s ease, opacity 0.15s ease;
  }
  .sn__btn:disabled { opacity: 0.45; cursor: not-allowed; }
  .sn__btn:not(:disabled):hover { transform: translateY(-1px); }

  .sn__fb { padding: 18px; border-radius: 18px; margin-top: 4px; }
  .sn__fb--ok { background: #f0fdf4; border: 1px solid #dcfce7; }
  .sn__fb--no { background: #fef2f2; border: 1px solid #fee2e2; }
  .sn__fb-head { display: flex; align-items: center; gap: 8px; font-weight: 900; color: #1e1b4b; }
  .sn__xp-chip {
    margin-left: auto; padding: 4px 12px; border-radius: 999px;
    background: linear-gradient(135deg, #a78bfa, #8b5cf6); color: #fff;
    font-size: 0.74rem; font-weight: 900; letter-spacing: 0.02em;
  }
  .sn__fb-answer {
    margin-top: 10px; padding: 10px 14px; background: #fff; border-radius: 12px;
    font-size: 0.9rem; font-weight: 700; color: #b91c1c;
  }
  .sn__solution {
    margin-top: 10px; background: #fff; padding: 14px; border-radius: 14px;
  }
  .sn__solution-h {
    display: flex; align-items: center; gap: 6px; color: #6366f1;
    font-weight: 800; font-size: 0.72rem; text-transform: uppercase;
    letter-spacing: 0.05em; margin-bottom: 6px;
  }

  .sn__tags { margin-top: 14px; }
  .sn__tags-q { font-size: 0.84rem; font-weight: 800; color: #1e1b4b; margin-bottom: 10px; }
  .sn__tags-row { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
  .sn__tag {
    display: flex; align-items: center; gap: 7px;
    padding: 11px 12px; border-radius: 13px; cursor: pointer;
    background: #f8fafc; border: 2px solid #f1f5f9;
    font-size: 0.82rem; font-weight: 700; color: #475569; text-align: left;
    transition: all 0.15s ease;
  }
  .sn__tag--on { border-color: #8b5cf6; background: #f5f3ff; color: #6d28d9; }

  .sn__ask {
    display: inline-flex; align-items: center; justify-content: center; gap: 7px;
    padding: 12px; border-radius: 14px; cursor: pointer;
    background: #fff; border: 1.5px dashed #c4b5fd; color: #7c3aed;
    font-weight: 800; font-size: 0.85rem; width: 100%;
  }
  .sn__review-sent {
    display: inline-flex; align-items: center; justify-content: center; gap: 7px;
    padding: 12px; border-radius: 14px; background: #f0fdf4; border: 1px solid #dcfce7;
    color: #166534; font-weight: 800; font-size: 0.85rem;
  }

  .sn__done-stats { display: flex; gap: 24px; }
  .sn__done-stat { text-align: center; }
  .sn__done-num { font-size: 2.6rem; font-weight: 900; line-height: 1; }
  .sn__done-lbl { font-size: 0.72rem; font-weight: 800; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.08em; margin-top: 6px; }

  .sn__rv-backdrop { position: fixed; inset: 0; background: rgba(15,23,42,0.45); z-index: 2100; }
  /* Centering is done via the framer-motion x/y transform (see .sn__rv JSX)
     so it does not get overwritten by the entrance animation. */
  .sn__rv {
    position: fixed; left: 50%; top: 50%;
    z-index: 2101; width: calc(100vw - 32px); max-width: 520px; max-height: 88vh;
    background: #fff; border-radius: 26px; overflow: hidden;
    display: flex; flex-direction: column;
    box-shadow: 0 30px 60px rgba(0,0,0,0.3);
  }
  .sn__rv-head {
    display: flex; align-items: center; justify-content: space-between;
    padding: 16px 20px; color: #fff; font-weight: 900;
  }
  .sn__rv-head button { background: rgba(255,255,255,0.22); border: 0; color: #fff; width: 30px; height: 30px; border-radius: 9px; cursor: pointer; }
  .sn__rv-body { padding: 18px 20px 20px; overflow-y: auto; display: flex; flex-direction: column; gap: 12px; }
  .sn__rv-canvas { height: 320px; }
  .sn__rv-msg {
    width: 100%; box-sizing: border-box; padding: 12px 14px; border-radius: 14px;
    border: 1.5px solid #e2e8f0; font-size: 0.9rem; font-family: inherit; resize: vertical;
  }
  .sn__rv-msg:focus { outline: none; border-color: #8b5cf6; }

  @media (max-width: 540px) {
    .sn__card { padding: 22px 18px; border-radius: 22px; }
    .sn__tags-row { grid-template-columns: 1fr; }
  }

  @media (max-width: 1100px) {
    .sn__body--wide { max-width: 760px; }
    .sn__solve-row { flex-direction: column; }
    .sn__solve-row .sn__card { max-width: none; width: 100%; }
    .sn__solve-pad { min-width: 0; width: 100%; }
  }

  .sn__ws { margin-top: 10px; background: #fff; border-radius: 18px; padding: 18px; border: 1px solid #e0e7ff; display: flex; flex-direction: column; gap: 14px; }
  .sn__ws-header { display: flex; align-items: center; gap: 10px; }
  .sn__ws-icon { width: 32px; height: 32px; border-radius: 10px; background: linear-gradient(135deg,#a78bfa,#7c3aed); display: grid; place-items: center; color: #fff; flex-shrink: 0; }
  .sn__ws-label { font-weight: 900; color: #1e1b4b; font-size: 0.9rem; }
  .sn__ws-sub { font-size: 0.72rem; color: #94a3b8; font-weight: 700; }
  .sn__ws-dots { display: flex; gap: 5px; margin-left: auto; }
  .sn__ws-dot { width: 10px; height: 10px; border-radius: 50%; border: none; background: #e2e8f0; cursor: pointer; padding: 0; transition: all 0.15s; }
  .sn__ws-dot--on { background: #7c3aed; transform: scale(1.2); }
  .sn__ws-dot--done { background: #a78bfa; }
  .sn__ws-step { display: flex; gap: 14px; align-items: flex-start; padding: 16px; background: #f5f3ff; border-radius: 16px; border-left: 4px solid #7c3aed; }
  .sn__ws-num { width: 28px; height: 28px; border-radius: 50%; background: linear-gradient(135deg,#a78bfa,#7c3aed); color: #fff; display: grid; place-items: center; font-weight: 900; font-size: 0.8rem; flex-shrink: 0; margin-top: 2px; }
  .sn__ws-content { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 10px; }
  .sn__ws-step-label { font-size: 0.68rem; font-weight: 900; color: #7c3aed; text-transform: uppercase; letter-spacing: 0.1em; }
  .sn__ws-working { padding: 10px 14px; border-radius: 12px; background: #fff; border: 1px solid #ddd6fe; }
  .sn__ws-working-label { font-size: 0.65rem; font-weight: 900; color: #7c3aed; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 6px; }
  .sn__ws-next { display: inline-flex; align-items: center; justify-content: center; gap: 8px; padding: 13px 20px; border-radius: 14px; border: none; background: linear-gradient(135deg,#a78bfa,#7c3aed); color: #fff; font-weight: 800; font-size: 0.9rem; cursor: pointer; width: 100%; transition: transform 0.15s; }
  .sn__ws-next:hover { transform: translateY(-1px); }
  .sn__ws-done { display: inline-flex; align-items: center; justify-content: center; gap: 7px; padding: 11px; border-radius: 12px; background: #f0fdf4; border: 1px solid #bbf7d0; color: #166534; font-weight: 800; font-size: 0.85rem; }
`;

export default SecretNoteView;
