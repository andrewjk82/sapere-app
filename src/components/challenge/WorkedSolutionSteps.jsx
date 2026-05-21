import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ChevronDown, CheckCircle2 } from 'lucide-react';
import MathView from '../MathView';
import { parseSolutionSteps } from '../../utils/solutionSteps';

// Worked solution displayed one step at a time. Resets when `questionId`
// changes (so navigating Prev / Next in review starts each new question
// with only Step 1 visible).
//
// Visual design: a soft purple-accented card. Each step is a numbered
// chip ("Step 1") followed by its body. A "Next step" pill reveals the
// next; when all steps are revealed the pill turns into a completed
// badge. New steps fade + slide in with a small spring.
const WorkedSolutionSteps = ({ question, graphData }) => {
  const steps = useMemo(() => parseSolutionSteps(question), [question]);
  // steps is now an array of { explanation, workingOut }
  const [revealed, setRevealed] = useState(1);
  const bottomRef = useRef(null);
  const shouldAutoScrollRef = useRef(false);

  useEffect(() => {
    if (!shouldAutoScrollRef.current) return undefined;
    shouldAutoScrollRef.current = false;

    const timer = window.setTimeout(() => {
      bottomRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'nearest',
      });
    }, 80);

    return () => window.clearTimeout(timer);
  }, [revealed]);

  if (!steps || steps.length === 0) return null;

  const totalSteps = steps.length;
  const visibleSteps = steps.slice(0, Math.min(revealed, totalSteps));
  const allRevealed = revealed >= totalSteps;
  const hasMultipleSteps = totalSteps > 1;

  return (
    <div
      style={{
        padding: '26px 28px',
        borderRadius: '24px',
        background: '#fff',
        border: '1px solid rgba(124, 58, 237, 0.14)',
        boxShadow: '0 14px 32px rgba(124, 58, 237, 0.08)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top accent stripe */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, #a78bfa 0%, #7c3aed 100%)' }} />

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px', gap: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '36px', height: '36px', borderRadius: '12px', background: 'linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%)', color: '#7c3aed', display: 'grid', placeItems: 'center' }}>
            <Sparkles size={18} />
          </div>
          <div>
            <div style={{ fontSize: '0.68rem', fontWeight: 900, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#7c3aed' }}>
              Worked solution
            </div>
            <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#64748b', marginTop: '2px' }}>
              {hasMultipleSteps
                ? `Step ${Math.min(revealed, totalSteps)} of ${totalSteps}`
                : 'Full solution'}
            </div>
          </div>
        </div>

        {hasMultipleSteps && allRevealed && (
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 12px', borderRadius: '999px', background: '#dcfce7', color: '#166534', fontWeight: 800, fontSize: '0.72rem', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
            <CheckCircle2 size={14} /> Complete
          </div>
        )}
      </div>

      {/* Steps list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <AnimatePresence initial={false}>
          {visibleSteps.map((step, i) => (
            <motion.div
              key={`step-${question?.id || ''}-${i}`}
              initial={{ opacity: 0, y: 10, scale: 0.99 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: 'spring', stiffness: 280, damping: 24, delay: i === revealed - 1 ? 0.05 : 0 }}
              style={{
                display: 'flex',
                gap: '14px',
                padding: '16px 18px',
                borderRadius: '16px',
                background: '#faf5ff',
                border: '1px solid #ede9fe',
                position: 'relative',
              }}
            >
              {/* Left purple accent bar */}
              <div style={{ position: 'absolute', left: 0, top: '12%', bottom: '12%', width: '3px', borderRadius: '3px', background: 'linear-gradient(180deg, #a78bfa 0%, #7c3aed 100%)' }} />

              <div style={{
                flex: '0 0 36px',
                height: '36px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)',
                color: '#fff',
                display: 'grid',
                placeItems: 'center',
                fontWeight: 900,
                fontSize: '0.95rem',
                boxShadow: '0 6px 14px rgba(124,58,237,0.28)',
                marginLeft: '6px',
                flexShrink: 0,
              }}>
                {i + 1}
              </div>

              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: '0.72rem', fontWeight: 900, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#7c3aed', marginBottom: '6px' }}>
                  Step {i + 1}
                </div>
                {step.explanation && (
                  <MathView
                    content={step.explanation}
                    graphData={i === totalSteps - 1 ? graphData : undefined}
                    style={{ color: '#1e1b4b', fontWeight: 500, fontSize: '1rem', lineHeight: 1.7 }}
                  />
                )}
                {step.workingOut && (
                  <div style={{
                    marginTop: '10px',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    background: '#fff',
                    border: '1px solid #ddd6fe',
                  }}>
                    <div style={{ fontSize: '0.65rem', fontWeight: 900, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#a78bfa', marginBottom: '6px' }}>
                      Working Out
                    </div>
                    <MathView
                      content={step.workingOut}
                      style={{ color: '#4c1d95', fontWeight: 500, fontSize: '0.98rem', lineHeight: 1.7 }}
                    />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Next step button (only if more steps remain) */}
      {hasMultipleSteps && !allRevealed && (
        <button
          onClick={() => {
            shouldAutoScrollRef.current = true;
            setRevealed((r) => Math.min(totalSteps, r + 1));
          }}
          style={{
            marginTop: '18px',
            width: '100%',
            padding: '14px 22px',
            borderRadius: '16px',
            background: 'linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
            fontWeight: 800,
            fontSize: '0.95rem',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            boxShadow: '0 12px 24px rgba(124,58,237,0.28)',
            letterSpacing: '0.02em',
            transition: 'transform 0.15s ease',
          }}
          onMouseDown={(e) => { e.currentTarget.style.transform = 'scale(0.98)'; }}
          onMouseUp={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
        >
          Next step <ChevronDown size={18} strokeWidth={2.5} />
        </button>
      )}

      <div ref={bottomRef} style={{ height: 1 }} />
    </div>
  );
};

export default WorkedSolutionSteps;
