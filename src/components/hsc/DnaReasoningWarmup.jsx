import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { Lightbulb, CheckCircle2, XCircle } from 'lucide-react';
import { db } from '../../firebase/config';
import { useAuth } from '../../context/AuthContext';
import MathView from '../MathView';
import { gradeDnaStep } from '../../utils/dnaStepGrading';

const WARMUP_SIZE = 3;

// Fisher-Yates shuffle + slice — pure given (pool, n), only ever called from
// inside a useState lazy initializer (runs once per mount, not per render),
// so the Math.random() impurity here is a non-issue for the React Compiler.
function pickRandomSteps(pool, n) {
  const arr = [...pool];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.slice(0, n);
}

// Fire-and-forget evidence write, kept as a plain module-level function (not
// inline in the component) since Date.now()/serverTimestamp() are impure and
// the React Compiler flags impure calls inside component/render bodies.
function recordStepEvidence(dnaId, step, response, graded, hintsRevealed, retryCount, startedAt, uid, scaffolded) {
  if (!uid) return;
  addDoc(collection(db, 'users', uid, 'dna_step_evidence'), {
    dna_id: dnaId,
    step_id: step.step_id,
    student_id: uid,
    response,
    correct: graded.correct,
    error_type: graded.error_type || null,
    hint_used: hintsRevealed,
    retry_count: retryCount,
    time_spent_ms: startedAt ? Date.now() - startedAt : null,
    mode: scaffolded ? 'scaffolded' : 'guided',
    created_at: serverTimestamp(),
  }).catch((e) => console.warn('Failed to write dna_step_evidence:', e));
}

/**
 * DNA reasoning-blueprint warmup (Sapere_Question_DNA_v2.0 §3-6, §10) —
 * pilot on FIN-GP-01. Runs BEFORE the student sees real questions in a DNA
 * focus session: a few DNA-generic recognition/strategy steps, graded
 * deterministically, with per-step evidence written to
 * users/{uid}/dna_step_evidence. Does not touch or duplicate the grading of
 * the actual question that follows (see HscTypePracticeSession.jsx) — this
 * is intentionally a thin layer on top, not a replacement.
 *
 * `blueprint` is the DNA's full warmup POOL (may hold many more items than
 * are shown in one sitting) — on mount, a random subset of WARMUP_SIZE is
 * drawn once and used for the whole session, so repeat visits don't always
 * see the same fixed steps. DNAs with a pool of WARMUP_SIZE or fewer just
 * get that pool shuffled (order still varies, but nothing is dropped).
 *
 * `scaffolded` (Sapere_Question_DNA_v2.0 §5 "Scaffolded — Practise", added
 * 2026-08-16) — set once a student has enough correct FINAL-answer evidence
 * for this DNA (see HscTypePracticeSession.jsx). Reuses the exact same
 * blueprint content as Guided mode; only the objective framing and hint
 * button are hidden, so the student has to reason from the options alone.
 * interaction_type stays 'select' either way — no new content or interaction
 * type needed.
 *
 * @param {{dnaId: string, blueprint: object[], scaffolded?: boolean, onDone: () => void}} props
 */
const DnaReasoningWarmup = ({ dnaId, blueprint: pool, scaffolded = false, onDone }) => {
  const { user } = useAuth();
  const [blueprint] = useState(() => pickRandomSteps(pool, Math.min(WARMUP_SIZE, pool.length)));
  const [stepIndex, setStepIndex] = useState(0);
  const [selectedId, setSelectedId] = useState(null);
  const [result, setResult] = useState(null); // {correct, error_type} | null
  const [hintsRevealed, setHintsRevealed] = useState(0);
  const [retryCount, setRetryCount] = useState(0);
  const startRef = useRef(null);

  const step = blueprint[stepIndex];

  useEffect(() => {
    setSelectedId(null);
    setResult(null);
    setHintsRevealed(0);
    setRetryCount(0);
    startRef.current = Date.now();
  }, [step?.step_id]);

  const handleSelect = (optionId) => {
    if (result?.correct) return;
    const graded = gradeDnaStep(step, optionId);
    setSelectedId(optionId);
    setResult(graded);
    recordStepEvidence(dnaId, step, optionId, graded, hintsRevealed, retryCount, startRef.current, user?.uid, scaffolded);
    if (!graded.correct) setRetryCount((c) => c + 1);
  };

  const goNext = () => {
    if (stepIndex + 1 < blueprint.length) {
      setStepIndex((i) => i + 1);
    } else {
      onDone();
    }
  };

  if (!step) return null;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', maxWidth: '640px', margin: '0 auto' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{ fontSize: '0.68rem', fontWeight: 800, color: '#7c3aed', background: '#f5f3ff', border: '1px solid #e0e7ff', borderRadius: '999px', padding: '3px 10px' }}>
          Warmup {stepIndex + 1} / {blueprint.length}{scaffolded ? ' · Scaffolded' : ''}
        </span>
        <span style={{ fontSize: '0.72rem', fontWeight: 600, color: '#94a3b8' }}>
          {scaffolded ? 'No prompt this time — work it out from the choices' : 'Quick check before the real questions'}
        </span>
      </div>

      <div style={{ padding: '20px', borderRadius: '20px', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
        {!scaffolded && (
          <div style={{ fontWeight: 800, color: '#1e1b4b', fontSize: '0.98rem', marginBottom: '14px' }}>
            <MathView content={step.objective} inline style={{ display: 'inline' }} />
          </div>
        )}

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {step.options.map((opt) => {
            const isSelected = selectedId === opt.id;
            const showAsCorrect = result && opt.id === step.expected_response && (isSelected || result.correct === false);
            const showAsWrong = result && isSelected && !result.correct;
            return (
              <button
                key={opt.id}
                onClick={() => handleSelect(opt.id)}
                disabled={result?.correct}
                style={{
                  padding: '13px 16px', borderRadius: '14px', border: '2px solid', cursor: result?.correct ? 'default' : 'pointer',
                  textAlign: 'left', fontWeight: 700, fontSize: '0.9rem', transition: 'all 0.15s',
                  borderColor: showAsCorrect ? '#86efac' : showAsWrong ? '#fca5a5' : isSelected ? '#7c3aed' : '#e2e8f0',
                  background: showAsCorrect ? '#f0fdf4' : showAsWrong ? '#fef2f2' : isSelected ? '#f5f3ff' : '#fff',
                  color: showAsCorrect ? '#166534' : showAsWrong ? '#dc2626' : isSelected ? '#7c3aed' : '#374151',
                }}
              >
                <MathView content={opt.label} inline style={{ display: 'inline' }} />
              </button>
            );
          })}
        </div>

        {!scaffolded && result && !result.correct && hintsRevealed < step.hints.length && (
          <button
            onClick={() => setHintsRevealed((h) => h + 1)}
            style={{ marginTop: '10px', display: 'flex', alignItems: 'center', gap: '6px', padding: '7px 14px', borderRadius: '10px', border: '1px solid #e0e7ff', background: '#f5f3ff', color: '#7c3aed', fontWeight: 800, fontSize: '0.8rem', cursor: 'pointer' }}
          >
            <Lightbulb size={13} /> Show a hint ({hintsRevealed}/{step.hints.length})
          </button>
        )}

        {!scaffolded && hintsRevealed > 0 && !result?.correct && (
          <ul style={{ marginTop: '10px', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {step.hints.slice(0, hintsRevealed).map((h, i) => (
              <li key={i} style={{ fontSize: '0.82rem', color: '#475569' }}>
                <MathView content={h} inline style={{ display: 'inline' }} />
              </li>
            ))}
          </ul>
        )}

        <AnimatePresence>
          {result && (
            <motion.div
              initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
              style={{
                marginTop: '14px', padding: '12px 16px', borderRadius: '14px',
                background: result.correct ? '#f0fdf4' : '#fef2f2',
                border: `1.5px solid ${result.correct ? '#86efac' : '#fca5a5'}`,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: result.correct ? '8px' : 0 }}>
                {result.correct ? <CheckCircle2 size={16} color="#16a34a" /> : <XCircle size={16} color="#dc2626" />}
                <span style={{ fontWeight: 900, fontSize: '0.85rem', color: result.correct ? '#15803d' : '#dc2626' }}>
                  {result.correct ? 'Correct' : 'Not quite — try again'}
                </span>
              </div>
              {result.correct && (
                <div style={{ fontSize: '0.85rem', color: '#166534', lineHeight: 1.5 }}>
                  <MathView content={step.explanation} inline style={{ display: 'inline' }} />
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {result?.correct && (
        <button
          onClick={goNext}
          style={{ padding: '14px', borderRadius: '16px', border: 'none', background: 'linear-gradient(135deg, #7c3aed, #4f46e5)', color: '#fff', fontWeight: 900, fontSize: '0.95rem', cursor: 'pointer' }}
        >
          {stepIndex + 1 === blueprint.length ? 'Start questions' : 'Next'}
        </button>
      )}
    </div>
  );
};

export default DnaReasoningWarmup;
