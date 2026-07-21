import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X, CheckCircle2, XCircle, Lightbulb, ArrowRight, ChevronDown,
  Sparkles, GraduationCap, MessageCircleQuestion, Send, BookLock,
} from 'lucide-react';
import MathView from '../MathView';
import MathInput from '../MathInput';
import ChallengeSketchBoard from './ChallengeSketchBoard';
import { db } from '../../firebase/config';
import { collection, addDoc, serverTimestamp, doc, setDoc, increment, getDoc } from 'firebase/firestore';

// Secret Note is review-only for leaderboard fairness.
// Daily Practice / Calculation are the only XP sources after the season reset.
// (Previously +1 XP per correct note farmed 60–80+ XP and inflated the board.)
const SECRET_NOTE_AWARDS_XP = false;
const XP_PER_QUESTION = 0;
import { getOptions, getOptionText } from '../../utils/challengeUtils';

const SN_QUICK_INSERTS = [
  { label: '√',   latex: '\\sqrt{#?}',        title: 'Square root' },
  { label: 'a/b', latex: '\\frac{#?}{#?}',    title: 'Fraction' },
  { label: 'xⁿ',  latex: '^{#?}',             title: 'Exponent' },
  { label: 'π',   latex: '\\pi',              title: 'Pi' },
  { label: '±',   latex: '\\pm',              title: 'Plus or minus' },
  { label: '°',   latex: '^{\\circ}',         title: 'Degrees' },
  { label: '( )', latex: '(#?)',              title: 'Brackets' },
  { label: '\u2264', latex: '\\le', title: 'Less than or equal to' },
  { label: '\u2265', latex: '\\ge', title: 'Greater than or equal to' },
];
import { answersMatch } from '../../utils/answerMatching';
import {
  prepareShuffledMcOptions,
  isDisplayedOptionCorrect,
  gradeMcSelection,
} from '../../utils/mcOptionShuffle';
import {
  MISTAKE_TAGS,
  getDueNote,
  getNoteCount,
  getNextDueAt,
  nextReviewPhrase,
  generateTwin,
  recordResult,
  recordTwinResult,
  setMistakeTag,
  markSecretNoteCaughtUp,
  pruneUngradable,
  canTwin,
  slimQuestion,
} from '../../utils/secretNote';
import { syncSecretNoteBlocklist } from '../../utils/secretNoteBlocklist';
import { tryAwardSecretNoteClearBonus } from '../../services/secretNoteBonusService';

// Build a preview-only queue straight from teacher-supplied questions — same
// item shape as addMistakes() (secretNote.js) so rendering/grading paths
// never notice the difference, but nothing here touches localStorage.
const buildPreviewQueue = (questions) => (questions || []).map((q, i) => ({
  question: { ...slimQuestion(q), id: q.id || q.question || q.text || `preview-${i}` },
  addedAt: Date.now(),
  sourceDate: new Date().toLocaleDateString('en-CA'),
  stage: 0,
  nextReviewAt: Date.now(),
  correctStreak: 0,
  twinPassed: false,
  mistakeTag: null,
}));

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

// Resolve the correct-answer TEXT and (for MC) a freshly shuffled option list.
// Shuffling + answer resolution goes through the shared mcOptionShuffle
// helpers — a hand-rolled shuffle here previously re-derived the "index vs
// value" and diagram-only-option logic those helpers already got right,
// and drifted out of sync with fixes made to Daily Challenge (see
// prepareShuffledMcOptions in src/utils/mcOptionShuffle.js).
const prepareQuestion = (q) => {
  const hasSubs = Array.isArray(q.subQuestions) && q.subQuestions.length > 0;

  // Multi-part questions: prepare each subQuestion
  if (hasSubs) {
    const subPrepped = q.subQuestions.map((sq) => {
      const isMC = sq.type === 'multiple_choice' || (Array.isArray(sq.options) && sq.options.length > 0 && sq.type !== 'short_answer');
      const rawKey = sq.answer ?? sq.a;
      if (isMC) {
        const shuffledOptions = prepareShuffledMcOptions(sq);
        return { id: sq.id ?? sq.text, mode: 'mc', options: shuffledOptions, correctText: sq._shuffledAnswer ?? '' };
      }
      return { id: sq.id ?? sq.text, mode: 'text', options: [], correctText: String(rawKey ?? '') };
    });
    return { hasSubs: true, subQuestions: subPrepped };
  }

  // Single-answer question
  const isMC = q.type === 'multiple_choice' || (Array.isArray(q.options) && q.options.length > 0 && q.type !== 'short_answer');
  const rawKey = q.answer ?? q.a;
  if (isMC) {
    const shuffledOptions = prepareShuffledMcOptions(q);
    return { hasSubs: false, mode: 'mc', options: shuffledOptions, correctText: q._shuffledAnswer ?? '' };
  }
  return { hasSubs: false, mode: 'text', options: [], correctText: String(rawKey ?? '') };
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
    className={`sn__shell${isMobile ? ' sn__shell--mobile' : ''}`}
    style={{
      position: 'fixed', inset: 0, background: isMobile ? '#fff' : '#f5f3ff', zIndex: 2000,
      // Mobile: one page scroll (header sticky, content flows). Desktop: same shell scroll.
      overflowY: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: isMobile ? 'stretch' : 'center',
      padding: isMobile ? '0 0 env(safe-area-inset-bottom, 0px)' : '0 0 60px',
      WebkitOverflowScrolling: 'touch',
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
      <button
        onClick={onClose}
        aria-label="Exit"
        style={{
          display: 'flex', alignItems: 'center', gap: isMobile ? 0 : '6px',
          padding: isMobile ? '8px' : '8px 16px',
          borderRadius: isMobile ? '12px' : '20px',
          border: '2px solid rgba(255,255,255,0.5)',
          background: 'rgba(255,255,255,0.15)',
          color: '#fff', fontWeight: 800, fontSize: '0.85rem',
          cursor: 'pointer', backdropFilter: 'blur(4px)', flexShrink: 0,
        }}
      >
        <X size={15} />{!isMobile && ' Exit'}
      </button>
    </div>
    {showProgress && (
      <div className="sn__progress-wrap">
        <div className="sn__progress" style={{ width: `${progressPct}%`, background: headerGradient }} />
      </div>
    )}
    <div className={`sn__body${wide ? ' sn__body--wide' : ''}${isMobile ? ' sn__body--mobile' : ''}`}>{children}</div>
  </motion.div>
);

// ── Main component ─────────────────────────────────────────────────────────
const SecretNoteView = ({ kind, uid, user, studentProfile, studentName, onClose, isMobile, previewQuestions }) => {
  const isPreview = Boolean(previewQuestions?.length);
  const accent = kind === 'calc'
    ? { from: '#fbbf24', to: '#f59e0b', soft: '#fef3c7', text: '#b45309' }
    : { from: '#a78bfa', to: '#8b5cf6', soft: '#ede9fe', text: '#6d28d9' };
  const title = kind === 'calc' ? 'Secret Note · Calculation' : 'Secret Note · Daily';

  // Drop already-stored notes that should never have been added (e.g.
  // teacher_review questions with an empty options array — see canGrade() in
  // secretNote.js) before computing the initial queue, so a broken note never
  // flashes on screen even for students who saved one before this fix shipped.
  // Session queue = items DUE now only (matches "N questions ready to review").
  // Future-scheduled cards stay in the notebook until nextReviewAt arrives.
  const [queue, setQueue] = useState(() => {
    if (isPreview) return buildPreviewQueue(previewQuestions);
    pruneUngradable(uid);
    return getDueNote(kind, uid);
  });
  const [idx, setIdx] = useState(0);
  const [phase, setPhase] = useState(() => {
    if (isPreview) return queue.length === 0 ? 'empty' : 'solve';
    return getDueNote(kind, uid).length === 0 ? 'empty' : 'solve';
  });
  const [savedTotal] = useState(() => (isPreview ? previewQuestions.length : getNoteCount(kind, uid)));

  // Blocklist: one getDoc on open (not a permanent App-level onSnapshot).
  // If server version changed, prune local notes and refresh the queue.
  useEffect(() => {
    if (!uid) return undefined;
    let cancelled = false;
    (async () => {
      const removed = await syncSecretNoteBlocklist(uid);
      if (cancelled || removed <= 0) return;
      const next = getDueNote(kind, uid);
      setQueue(next);
      setIdx(0);
      setPhase(next.length === 0 ? 'empty' : 'solve');
      setAnswer('');
      setSelectedIdx(null);
      setGraded(null);
      setTwin(null);
      setTwinPrep(null);
      setTwinGraded(null);
    })();
    return () => { cancelled = true; };
  }, [uid, kind]);

  const [answer, setAnswer] = useState('');
  const [selectedIdx, setSelectedIdx] = useState(null);
  const [graded, setGraded] = useState(null);   // bool: was original correct
  const [twinGraded, setTwinGraded] = useState(null);
  const [twin, setTwin] = useState(null);       // twin question object
  const [twinPrep, setTwinPrep] = useState(null);
  const [tag, setTag] = useState(null);         // mistake tag chosen this card
  const [summary, setSummary] = useState({ graduated: 0, kept: 0, xp: 0 });

  // Stamp "caught up today" the moment the due queue is cleared for this kind —
  // either the student reviewed everything due ('done'), or nothing was due when
  // they opened ('empty', whether the notebook is truly empty or only holds
  // future-scheduled cards). Tomorrow's clear-bonus settlement reads this stamp,
  // which is why a diligent student whose notes merely rescheduled still earns it.
  useEffect(() => {
    if (!uid) return;
    if (phase === 'empty' || phase === 'done') markSecretNoteCaughtUp(kind, uid);
  }, [phase, kind, uid]);

  // Clear-bonus is settled AFTER midnight for the previous day (not on empty).
  // Still safe to probe here — same-day empty notes are ineligible until tomorrow.
  useEffect(() => {
    if (!uid) return undefined;
    tryAwardSecretNoteClearBonus(uid, studentProfile).then((r) => {
      if (r?.awarded && r.xp > 0) {
        setSummary((s) => ({ ...s, xp: (s.xp || 0) + r.xp }));
      }
    }).catch(() => {});
    return undefined;
  }, [uid, studentProfile, phase]);

  // Teacher-review panel
  const [reviewOpen, setReviewOpen] = useState(false);
  const [reviewMsg, setReviewMsg] = useState('');
  const [reviewSending, setReviewSending] = useState(false);
  const [reviewSentIds, setReviewSentIds] = useState([]);
  const canvasRef = useRef(null);
  const solvePadRef = useRef(null);
  const mathInputRef = useRef(null);

  const [liveQueue, setLiveQueue] = useState(null);

  useEffect(() => {
    if (isPreview) return undefined; // bank question is already fresh — no refetch needed
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
  const activePrep = useMemo(
    () => phase === 'twinSolve' || phase === 'twinFeedback' ? twinPrep : prep,
    [phase, twinPrep, prep]
  );
  const isFeedback = phase === 'feedback' || phase === 'twinFeedback';

  // ── Actions ──────────────────────────────────────────────────────────────
  // Secret Note is review-only — no XP. Leaderboard XP comes only from Daily
  // Practice / Calculation. SECRET_NOTE_AWARDS_XP stays false unless product
  // deliberately re-enables a capped reward later.
  const awardXp = (amount) => {
    if (!SECRET_NOTE_AWARDS_XP || !uid || !amount || kind === 'exam_prep') return;
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

  const submitOriginal = (textVal, optText, optIdx) => {
    const hasSubs = prep?.hasSubs;
    let correct = true;

    if (hasSubs) {
      // Multi-part: all subQuestions must be correct
      correct = prep.subQuestions.every((subPrep, i) => {
        const subAnswer = answer?.[subPrep.id] ?? '';
        if (!subAnswer) return false;
        if (subPrep.mode === 'mc') {
          const chosenOptIdx = answer?.[`${subPrep.id}__idx`];
          return gradeMcSelection(activeQ.subQuestions[i], subAnswer, chosenOptIdx, subPrep.options);
        }
        return answersMatch(subAnswer, subPrep.correctText);
      });
    } else {
      // Single-answer
      const val = optText != null ? optText : textVal;
      correct = optText != null
        ? gradeMcSelection(question, val, optIdx, prep.options)
        : answersMatch(val, prep.correctText);
    }

    const status = isPreview
      ? (correct ? (canTwin(question) ? 'needTwin' : 'graduated') : 'kept')
      : recordResult(kind, uid, question.id, correct);
    if (status === 'graduated') setSummary((s) => ({ ...s, graduated: s.graduated + 1 }));
    let xpAwarded = 0;
    if (SECRET_NOTE_AWARDS_XP && correct && kind !== 'exam_prep' && XP_PER_QUESTION > 0) {
      xpAwarded = XP_PER_QUESTION;
      awardXp(XP_PER_QUESTION);
      setSummary((s) => ({ ...s, xp: s.xp + XP_PER_QUESTION }));
    }
    setGraded({ correct, status, xpAwarded });
    setPhase('feedback');
  };

  const submitTwin = (textVal, optText, optIdx) => {
    const val = optText != null ? optText : textVal;
    const correct = optText != null
      ? gradeMcSelection(twin, val, optIdx, twinPrep.options)
      : answersMatch(val, twinPrep.correctText);
    setTwinGraded(correct);
    const status = isPreview
      ? (correct ? 'graduated' : 'kept')
      : recordTwinResult(kind, uid, question.id, correct);
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
    setAnswer(''); // Will be initialized based on next question type
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
    if (!isPreview) setMistakeTag(kind, uid, question.id, tagId);
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
        studentAnswer: typeof answer === 'string' ? answer : (answer !== null && answer !== undefined ? JSON.stringify(answer) : ''),
        sketchDataUrl: canvasImage || null,
        hasSketch: Boolean(canvasImage),
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

  // Empty notebook — either nothing saved, or only future-scheduled reviews.
  if (phase === 'empty') {
    const scheduledOnly = savedTotal > 0;
    const whenBack = nextReviewPhrase(getNextDueAt(kind, uid));
    return (
      <NoteShell {...shellProps} subtitle={scheduledOnly ? `Caught up · ${savedTotal} come back ${whenBack}` : '0 saved'}>
        <div className="sn__card sn__center">
          <div className="sn__big-emoji">{scheduledOnly ? '✅' : '🎉'}</div>
          <h2 className="sn__h2">{scheduledOnly ? "You're all caught up!" : 'Notebook is clear!'}</h2>
          <p className="sn__muted">
            {scheduledOnly
              ? `Nothing to review right now. Your ${savedTotal} saved note${savedTotal === 1 ? '' : 's'} ${savedTotal === 1 ? 'is' : 'are'} spaced out to help you remember — ${savedTotal === 1 ? 'it comes' : 'they come'} back ${whenBack}.`
              : 'You have no mistakes saved for this test. Keep up the great work.'}
            {summary.xp > 0 ? ` Clear bonus: +${summary.xp} XP.` : ''}
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
            {SECRET_NOTE_AWARDS_XP && kind !== 'exam_prep' && (
              <div className="sn__done-stat">
                <div className="sn__done-num" style={{ color: '#8b5cf6' }}>+{summary.xp}</div>
                <div className="sn__done-lbl">XP earned</div>
              </div>
            )}
          </div>
          <p className="sn__muted">
            Graduated questions left your notebook. The rest will come back on
            their next review day. Secret Note is review-only — XP comes from Daily Practice.
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
        </div>

        {/* graph_sketch: graphData is the answer being constructed — hide it
            until feedback or the student sees the target before attempting it.
            teacher_review: graphData is normally the GIVEN diagram the
            question depends on (e.g. a figure to find the area of) — it must
            render immediately, not only after submitting. Conflating the two
            here previously hid required diagrams during solve (real report,
            2026-07-18). */}
        {!activePrep?.hasSubs && (
          <MathView
            content={activeQ?.question}
            graphData={activeQ?.type === 'graph_sketch' ? (isFeedback ? activeQ?.graphData : null) : activeQ?.graphData}
            style={{ fontSize: '1.0rem', fontWeight: 600, color: '#1e1b4b', lineHeight: 1.6 }}
          />
        )}

        {/* Step-by-step hint — always shown (not hidden in feedback) */}
        {!isFeedback && !activePrep?.hasSubs && (
          <StepwiseHint hint={activeQ?.hint} accent={accent} />
        )}

        {/* Multi-part questions: render each subQuestion */}
        {activePrep?.hasSubs && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {activeQ.subQuestions?.map((sq, idx) => {
              const subPrep = activePrep.subQuestions[idx];
              const subAnswer = answer?.[subPrep.id] ?? '';
              return (
                <div key={sq.id ?? idx} style={{ padding: '16px', background: '#f8fafc', borderRadius: '14px', border: '1px solid #e2e8f0' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '12px' }}>
                    <span style={{ width: '26px', height: '26px', borderRadius: '8px', background: '#eef2ff', color: '#4f46e5', display: 'grid', placeItems: 'center', fontWeight: 900, fontSize: '0.82rem', flexShrink: 0 }}>
                      {String.fromCharCode(97 + idx)}
                    </span>
                    <MathView content={sq.question || sq.text || ''} graphData={sq.graphData} style={{ fontSize: '0.98rem', fontWeight: 700, color: '#1e1b4b', lineHeight: 1.5, flex: 1 }} />
                  </div>

                  {/* Answer section */}
                  {isFeedback ? (
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                      <div style={{ padding: '12px 14px', borderRadius: '12px', background: '#eef2ff', border: '1px solid #c7d2fe' }}>
                        <div style={{ fontSize: '0.62rem', fontWeight: 900, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4f46e5', marginBottom: '6px' }}>Student's Answer</div>
                        <MathView content={subAnswer || 'No answer recorded'} style={{ color: '#312e81', fontWeight: 700, fontSize: '0.9rem' }} />
                      </div>
                      <div style={{ padding: '12px 14px', borderRadius: '12px', background: '#f0fdf4', border: '1px solid #bbf7d0' }}>
                        <div style={{ fontSize: '0.62rem', fontWeight: 900, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#15803d', marginBottom: '6px' }}>Correct Answer</div>
                        <MathView content={subPrep.correctText} style={{ color: '#166534', fontWeight: 700, fontSize: '0.9rem' }} />
                      </div>
                    </div>
                  ) : subPrep.mode === 'mc' ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {subPrep.options.map((opt, i) => {
                        const optText = getOptionText(opt);
                        const optGraphData = (opt && typeof opt === 'object') ? opt.graphData : null;
                        const isSel = answer?.[`${subPrep.id}__idx`] === i;
                        return (
                          <button
                            key={i}
                            disabled={isFeedback}
                            onClick={() => { if (!isFeedback) setAnswer((prev) => ({ ...prev, [subPrep.id]: optText, [`${subPrep.id}__idx`]: i })); }}
                            style={{
                              display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 14px', borderRadius: '12px',
                              background: isSel ? '#f5f3ff' : '#fff', border: isSel ? '2px solid #8b5cf6' : '1px solid #e2e8f0',
                              cursor: isFeedback ? 'default' : 'pointer', transition: 'all 0.15s',
                            }}
                          >
                            <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: isSel ? '#8b5cf6' : '#f1f5f9', color: isSel ? '#fff' : '#64748b', display: 'grid', placeItems: 'center', fontWeight: 900, fontSize: '0.8rem', flexShrink: 0 }}>
                              {String.fromCharCode(65 + i)}
                            </div>
                            <MathView content={optText} graphData={optGraphData} style={{ fontWeight: 600, flex: 1 }} />
                          </button>
                        );
                      })}
                    </div>
                  ) : (
                    <MathInput
                      value={subAnswer}
                      onChange={(latex) => { if (!isFeedback) setAnswer((prev) => ({ ...prev, [subPrep.id]: latex })); }}
                      readOnly={isFeedback}
                      placeholder={`Part ${String.fromCharCode(97 + idx)}…`}
                    />
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Answer inputs for single-answer questions */}
        {!activePrep?.hasSubs && activePrep?.mode === 'mc' ? (
          <div className="sn__opts">
            {activePrep.options.map((opt, i) => {
              const optText = getOptionText(opt);
              const optGraphData = (opt && typeof opt === 'object') ? opt.graphData : null;
              const isSel = selectedIdx === i;
              let status = 'default';
              if (isFeedback) {
                // Shared helper — never mark two options from a stale
                // pre-shuffle index, and falls back to shuffled position
                // for diagram-only (graphData, no text) options.
                if (isDisplayedOptionCorrect(activeQ, activePrep.options, i)) status = 'correct';
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
                  <MathView content={optText} graphData={optGraphData} style={{ fontWeight: 700, flex: 1 }} />
                  {status === 'correct' && <CheckCircle2 size={20} style={{ color: '#16a34a' }} />}
                  {status === 'wrong' && <XCircle size={20} style={{ color: '#ef4444' }} />}
                </button>
              );
            })}
          </div>
        ) : (
          <>
            {/* Quick-insert buttons (same as daily challenge) */}
            {!isFeedback && (
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '4px' }}>
                {SN_QUICK_INSERTS.map((b) => (
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
              value={typeof answer === 'string' ? answer : ''}
              onChange={(latex) => { if (!isFeedback) setAnswer(latex); }}
              onEnter={() => { if (typeof answer === 'string' && answer.trim() && !isFeedback) { isTwinPhase ? submitTwin(answer) : submitOriginal(answer); } }}
              readOnly={isFeedback}
              placeholder="Type your answer…"
              autoFocus
            />
          </>
        )}

        {/* Submit + Skip */}
        {!isFeedback && (
          <>
            {(() => {
              let isDisabled = true;
              if (activePrep?.hasSubs) {
                // Multi-part: all parts must be answered
                isDisabled = !activePrep.subQuestions.every((subPrep) => {
                  const subAnswer = answer?.[subPrep.id];
                  if (subPrep.mode === 'mc') return answer?.[`${subPrep.id}__idx`] != null;
                  return subAnswer?.trim();
                });
              } else if (activePrep?.mode === 'mc') {
                isDisabled = selectedIdx == null;
              } else {
                isDisabled = typeof answer !== 'string' || !answer.trim();
              }

              return (
                <button
                  className="sn__btn sn__btn--primary"
                  style={{ background: headerGradient }}
                  disabled={isDisabled}
                  onClick={() => {
                    if (activePrep?.hasSubs) {
                      isTwinPhase ? submitTwin(answer) : submitOriginal(answer);
                    } else {
                      const optText = activePrep?.mode === 'mc'
                        ? getOptionText(activePrep.options[selectedIdx])
                        : null;
                      isTwinPhase ? submitTwin(answer, optText, selectedIdx) : submitOriginal(answer, optText, selectedIdx);
                    }
                  }}
                >
                  Check answer
                </button>
              );
            })()}
            {/* Skip — move on without answering. The question stays in the
                notebook (no grading recorded) so it comes back next time. */}
            <button className="sn__skip" onClick={advance}>
              Skip this question <ArrowRight size={15} />
            </button>
          </>
        )}

        {/* Feedback */}
        <AnimatePresence>
          {isFeedback && (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
              {(() => {
                // For multi-part, show overall feedback + each part's correctness
                if (activePrep?.hasSubs) {
                  return (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      <div className={`sn__fb ${feedbackCorrect ? 'sn__fb--ok' : 'sn__fb--no'}`}>
                        <div className="sn__fb-head">
                          {feedbackCorrect
                            ? <CheckCircle2 size={20} style={{ color: '#16a34a' }} />
                            : <XCircle size={20} style={{ color: '#ef4444' }} />}
                          <span>
                            {feedbackCorrect
                              ? (phase === 'feedback' && graded?.xpAwarded > 0
                                ? `All correct! +${graded.xpAwarded} XP`
                                : 'All correct!')
                              : 'Not all parts correct'}
                          </span>
                        </div>
                        {feedbackCorrect && phase === 'feedback' && kind !== 'exam_prep' && !(graded?.xpAwarded > 0) && (
                          <div className="sn__fb-answer" style={{ color: '#64748b', fontWeight: 600 }}>
                            Review only — Secret Note does not award XP. Keep practising Daily Challenge for points.
                          </div>
                        )}
                      </div>

                      {/* Each part's feedback */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {activeQ.subQuestions?.map((sq, idx) => {
                          const subPrep = activePrep.subQuestions[idx];
                          const subAnswer = answer?.[subPrep.id] ?? '';
                          const subCorrect = subPrep.mode === 'mc'
                            ? gradeMcSelection(sq, subAnswer, answer?.[`${subPrep.id}__idx`], subPrep.options)
                            : answersMatch(subAnswer, subPrep.correctText);

                          return (
                            <div key={sq.id ?? idx} style={{ padding: '12px', background: subCorrect ? '#f0fdf4' : '#fef2f2', borderRadius: '12px', border: `1px solid ${subCorrect ? '#bbf7d0' : '#fee2e2'}` }}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                                {subCorrect ? <CheckCircle2 size={16} style={{ color: '#16a34a' }} /> : <XCircle size={16} style={{ color: '#ef4444' }} />}
                                <span style={{ fontSize: '0.82rem', fontWeight: 800, color: subCorrect ? '#166534' : '#b91c1c' }}>
                                  Part {String.fromCharCode(97 + idx)}
                                </span>
                              </div>
                              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '0.85rem' }}>
                                <div>
                                  <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#64748b', marginBottom: '4px' }}>Your answer</div>
                                  <MathView content={subAnswer || '—'} style={{ fontWeight: 600 }} />
                                </div>
                                <div>
                                  <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#64748b', marginBottom: '4px' }}>Correct</div>
                                  <MathView content={subPrep.correctText} style={{ fontWeight: 600, color: '#166534' }} />
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      <WorkedSolution question={activeQ} />
                    </div>
                  );
                }

                // Single-answer feedback
                return (
                  <div className={`sn__fb ${feedbackCorrect ? 'sn__fb--ok' : 'sn__fb--no'}`}>
                    <div className="sn__fb-head">
                      {feedbackCorrect
                        ? <CheckCircle2 size={20} style={{ color: '#16a34a' }} />
                        : <XCircle size={20} style={{ color: '#ef4444' }} />}
                      <span>
                        {feedbackCorrect
                          ? (phase === 'feedback' && graded?.xpAwarded > 0
                            ? `Correct! +${graded.xpAwarded} XP`
                            : 'Correct!')
                          : 'Not quite'}
                      </span>
                    </div>
                    {feedbackCorrect && phase === 'feedback' && kind !== 'exam_prep' && !(graded?.xpAwarded > 0) && (
                      <div className="sn__fb-answer" style={{ color: '#64748b', fontWeight: 600 }}>
                        Review only — Secret Note does not award XP. Keep practising Daily Challenge for points.
                      </div>
                    )}
                    {!feedbackCorrect && activePrep?.mode !== 'mc' && (
                      <div className="sn__fb-answer">
                        Correct answer: <MathView content={activePrep.correctText} style={{ display: 'inline', fontWeight: 800 }} />
                      </div>
                    )}
                    <WorkedSolution question={activeQ} />
                  </div>
                );
              })()}

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
        {!isTwinPhase && !isPreview && (
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

    </NoteShell>
  );
};

// ── Styles ─────────────────────────────────────────────────────────────────
const secretNoteStyles = `
  .sn__bar {
    width: 100%; display: flex; align-items: center; justify-content: space-between;
    padding: 16px 22px; color: #fff;
    flex-shrink: 0;
    position: sticky; top: 0; z-index: 5;
  }
  .sn__shell--mobile .sn__bar {
    padding: 12px 14px;
    padding-top: max(12px, env(safe-area-inset-top, 12px));
  }
  .sn__bar-l { display: flex; align-items: center; gap: 12px; min-width: 0; }
  .sn__bar-ico {
    width: 38px; height: 38px; border-radius: 12px; display: grid; place-items: center;
    background: rgba(255,255,255,0.22); flex-shrink: 0;
  }
  .sn__shell--mobile .sn__bar-ico { width: 34px; height: 34px; border-radius: 10px; }
  .sn__bar-title { font-weight: 900; font-size: 1.02rem; }
  .sn__shell--mobile .sn__bar-title { font-size: 0.95rem; }
  .sn__bar-sub { font-size: 0.74rem; opacity: 0.85; font-weight: 700; }
  .sn__close {
    width: 34px; height: 34px; border-radius: 10px; border: 0; cursor: pointer;
    background: rgba(255,255,255,0.22); color: #fff; display: grid; place-items: center;
  }
  .sn__progress-wrap { width: 100%; height: 4px; background: rgba(0,0,0,0.06); flex-shrink: 0; }
  .sn__progress { height: 100%; transition: width 0.4s ease; }

  .sn__body { width: 100%; max-width: 620px; padding: 24px 18px 0; box-sizing: border-box; }
  /* Wider body when the solve layout shows the side working-out pad. */
  .sn__body--wide { max-width: min(1540px, calc(100vw - 48px)); }
  /* Mobile: use full viewport width; no nested max-width “phone inside phone”. */
  .sn__body--mobile {
    max-width: none;
    width: 100%;
    flex: 1 1 auto;
    padding: 0;
    min-height: 0;
  }
  .sn__solve-row { display: flex; gap: 20px; align-items: stretch; width: 100%; flex-wrap: nowrap; }
  .sn__solve-pad { flex: 1 1 340px; min-width: 300px; display: flex; }

  /* Every non-phone width keeps the working-out pad on the RIGHT. The question
     card gets its own scroll (bounded to the viewport) so a long solution never
     pushes the Next button out of reach and the side pad stays in view. */
  @media (min-width: 768px) {
    .sn__solve-row .sn__card {
      flex: 0 1 600px; max-width: 600px; min-width: 0;
      max-height: calc(100vh - 48px); overflow-y: auto;
      -webkit-overflow-scrolling: touch;
    }
  }
  /* Narrow tablets: shrink both columns so they still fit side by side. */
  @media (min-width: 768px) and (max-width: 1100px) {
    .sn__solve-row .sn__card { flex: 1 1 0; max-width: none; }
    .sn__solve-pad { flex: 1 1 0; min-width: 260px; }
  }

  .sn__card {
    background: #fff; border-radius: 28px; padding: 28px;
    border: 1px solid #ece9f6; box-shadow: 0 20px 44px rgba(91,33,182,0.08);
    display: flex; flex-direction: column; gap: 16px;
  }
  /* Mobile card: edge-to-edge content area, no max-height / inner scrollbar. */
  .sn__shell--mobile .sn__solve-row {
    flex-direction: column;
    gap: 0;
    min-height: calc(100dvh - 88px);
  }
  .sn__shell--mobile .sn__solve-row .sn__card {
    flex: 1 1 auto;
    width: 100%;
    max-width: none;
    max-height: none;
    overflow: visible;
    border-radius: 0;
    border: none;
    border-top: 1px solid #f1f5f9;
    box-shadow: none;
    padding: 16px 16px calc(24px + env(safe-area-inset-bottom, 0px));
    min-height: calc(100dvh - 88px);
    box-sizing: border-box;
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

  .sn__skip {
    display: inline-flex; align-items: center; justify-content: center; gap: 7px;
    padding: 13px; border-radius: 14px; cursor: pointer; margin-top: -6px;
    background: #f8fafc; border: 1.5px solid #e2e8f0; color: #64748b;
    font-weight: 800; font-size: 0.88rem; width: 100%; transition: all 0.15s ease;
  }
  .sn__skip:hover { background: #f1f5f9; color: #475569; }

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
    .sn__tags-row { grid-template-columns: 1fr; }
  }

  /* Phones (isMobile < 768) render no side pad and use the mobile shell, which
     already stacks to a single column. Tablets (>= 768) always stay
     side-by-side — the working-out pad must remain on the right. */

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
