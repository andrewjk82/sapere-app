import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { Lightbulb, CheckCircle2, XCircle } from 'lucide-react';
import { db } from '../../firebase/config';
import { useAuth } from '../../context/AuthContext';
import MathView from '../MathView';
import { gradeDnaStep } from '../../utils/dnaStepGrading';

// Question-specific Reasoning Blueprint pre-steps (Sapere_Question_DNA_v2.0
// §3-4) — pilot on one real FIN-GP-01 question (questions/bar2020-q14ai).
// Unlike DnaReasoningWarmup (DNA-generic, runs once per DNA), these steps use
// THIS question's own numbers and run once, immediately before the student
// sees the real multiple-choice options. The real answer is graded exactly
// as before by the existing MC flow in HscTypePracticeSession.jsx — this
// component never decides whether the final answer is correct.
function recordStepEvidence(dnaId, questionId, step, response, graded, hintsRevealed, retryCount, startedAt, uid) {
  if (!uid) return;
  addDoc(collection(db, 'users', uid, 'dna_step_evidence'), {
    dna_id: dnaId,
    question_id: questionId,
    step_id: step.step_id,
    student_id: uid,
    response,
    correct: graded.correct,
    error_type: graded.error_type || null,
    hint_used: hintsRevealed,
    retry_count: retryCount,
    time_spent_ms: startedAt ? Date.now() - startedAt : null,
    created_at: serverTimestamp(),
  }).catch((e) => console.warn('Failed to write dna_step_evidence:', e));
}

export default function QuestionReasoningSteps({ dnaId, questionId, blueprint, onDone }) {
  const { user } = useAuth();
  const [stepIndex, setStepIndex] = useState(0);
  const [value, setValue] = useState('');
  const [result, setResult] = useState(null);
  const [hintsRevealed, setHintsRevealed] = useState(0);
  const [retryCount, setRetryCount] = useState(0);
  const startRef = useRef(null);

  const step = blueprint[stepIndex];

  useEffect(() => {
    setValue('');
    setResult(null);
    setHintsRevealed(0);
    setRetryCount(0);
    startRef.current = Date.now();
  }, [step?.step_id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (result?.correct || value.trim() === '') return;
    const graded = gradeDnaStep(step, value.trim());
    setResult(graded);
    recordStepEvidence(dnaId, questionId, step, value.trim(), graded, hintsRevealed, retryCount, startRef.current, user?.uid);
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
    <div style={{ padding: '20px', borderRadius: '20px', background: '#f8fafc', border: '1px solid #e2e8f0', marginBottom: '14px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
        <span style={{ fontSize: '0.68rem', fontWeight: 800, color: '#7c3aed', background: '#f5f3ff', border: '1px solid #e0e7ff', borderRadius: '999px', padding: '3px 10px' }}>
          Reasoning step {stepIndex + 1} / {blueprint.length}
        </span>
        <span style={{ fontSize: '0.72rem', fontWeight: 600, color: '#94a3b8' }}>Work this out before you see the answer choices</span>
      </div>

      <div style={{ fontWeight: 800, color: '#1e1b4b', fontSize: '0.95rem', marginBottom: '14px' }}>
        <MathView content={step.objective} inline />
      </div>

      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '8px' }}>
        <input
          type="text"
          inputMode="decimal"
          placeholder="Enter your answer"
          value={value}
          disabled={result?.correct}
          onChange={(e) => setValue(e.target.value)}
          style={{ flex: 1, padding: '10px 12px', borderRadius: '10px', border: '1px solid #cbd5e1', fontSize: '0.9rem' }}
        />
        <button
          type="submit"
          disabled={result?.correct || value.trim() === ''}
          style={{ padding: '10px 18px', borderRadius: '10px', border: 'none', background: '#7c3aed', color: '#fff', fontWeight: 800, cursor: value.trim() ? 'pointer' : 'not-allowed' }}
        >
          Check
        </button>
      </form>

      {result && !result.correct && (
        <div style={{ marginTop: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <XCircle size={15} color="#dc2626" />
          <span style={{ fontSize: '0.85rem', color: '#dc2626', fontWeight: 700 }}>Not quite — try again.</span>
          {hintsRevealed < step.hints.length && (
            <button
              type="button"
              onClick={() => setHintsRevealed((h) => h + 1)}
              style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '4px 10px', borderRadius: '8px', border: '1px solid #e0e7ff', background: '#f5f3ff', color: '#7c3aed', fontWeight: 700, fontSize: '0.75rem', cursor: 'pointer' }}
            >
              <Lightbulb size={12} /> Hint ({hintsRevealed}/{step.hints.length})
            </button>
          )}
        </div>
      )}

      {hintsRevealed > 0 && !result?.correct && (
        <ul style={{ marginTop: '8px', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {step.hints.slice(0, hintsRevealed).map((h, i) => (
            <li key={i} style={{ fontSize: '0.8rem', color: '#475569' }}><MathView content={h} inline /></li>
          ))}
        </ul>
      )}

      <AnimatePresence>
        {result?.correct && (
          <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} style={{ marginTop: '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <CheckCircle2 size={16} color="#16a34a" />
              <span style={{ fontWeight: 900, fontSize: '0.85rem', color: '#15803d' }}>Correct</span>
            </div>
            <div style={{ fontSize: '0.85rem', color: '#166534', lineHeight: 1.5, marginBottom: '12px' }}>
              <MathView content={step.explanation} inline />
            </div>
            <button
              type="button"
              onClick={goNext}
              style={{ padding: '10px 18px', borderRadius: '12px', border: 'none', background: 'linear-gradient(135deg, #7c3aed, #4f46e5)', color: '#fff', fontWeight: 800, cursor: 'pointer' }}
            >
              {stepIndex + 1 === blueprint.length ? 'Now choose the final answer' : 'Next step'}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
