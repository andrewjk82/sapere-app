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
/** True only when graphData actually carries a drawable payload. */
const hasDrawableGraph = (gd) => {
  if (!gd || typeof gd !== 'object') return false;
  return !!(
    gd.svg
    || gd.jsxGraph
    || gd.geometry
    || gd.diagramSvg
    || gd.svgSnapshot
    || gd.diagram
    || gd.html
  );
};

/**
 * Root graphData is for the question stem (or a sketch model answer).
 * Only attach it to a solution step when:
 *  - the step does not already own a graph, AND
 *  - this is the last step, AND
 *  - the stem deliberately hides the graph (sketch/draw) so the model
 *    answer still needs to appear somewhere.
 * Period / illustration MCQs keep the graph on the stem only.
 */
const stemHidesGraph = (q) => {
  if (!q) return false;
  if (q.type === 'graph_sketch') return true;
  return /^(sketch|draw)\b/i.test(String(q.question || q.text || '').trim());
};

const WorkedSolutionSteps = ({ question, graphData, compact = false }) => {
  const steps = useMemo(() => parseSolutionSteps(question), [question]);
  // steps is now an array of { explanation, workingOut }
  const [revealed, setRevealed] = useState(1);
  const bottomRef = useRef(null);
  const stepsViewportRef = useRef(null);
  const shouldAutoScrollRef = useRef(false);

  useEffect(() => {
    if (!shouldAutoScrollRef.current) return undefined;
    shouldAutoScrollRef.current = false;

    const timer = window.setTimeout(() => {
      if (stepsViewportRef.current) {
        stepsViewportRef.current.scrollTo({
          top: stepsViewportRef.current.scrollHeight,
          behavior: 'smooth',
        });
        return;
      }

      bottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 80);

    return () => window.clearTimeout(timer);
  }, [revealed]);

  // Reset reveal when the question changes (e.g. next sub-part in grading).
  useEffect(() => {
    setRevealed(1);
  }, [question?.id, question?.question, question?.text, question?.answer]);

  if (!steps || steps.length === 0) return null;

  const totalSteps = steps.length;
  const visibleSteps = steps.slice(0, Math.min(revealed, totalSteps));
  const allRevealed = revealed >= totalSteps;
  const hasMultipleSteps = totalSteps > 1;
  // Full review page: tall scrollable card. Embedded (grading queue / sub-parts):
  // auto-height so text can breathe in a narrow column.
  const scrollSteps = !compact;

  const shell = compact
    ? {
        padding: '14px 14px 12px',
        borderRadius: '16px',
        height: 'auto',
        minHeight: 0,
        maxHeight: 'none',
        boxShadow: '0 6px 16px rgba(124, 58, 237, 0.06)',
      }
    : {
        padding: '30px 32px',
        borderRadius: '24px',
        height: '64vh',
        minHeight: '420px',
        maxHeight: '760px',
        boxShadow: '0 14px 32px rgba(124, 58, 237, 0.08)',
      };

  const stepPad = compact ? '12px 12px 12px 14px' : '22px 24px';
  const numSize = compact ? 28 : 44;
  const bodyFs = compact ? '0.95rem' : '1.12rem';
  const workFs = compact ? '0.92rem' : '1.06rem';
  const stepGap = compact ? '10px' : '16px';

  return (
    <div
      style={{
        ...shell,
        background: '#fff',
        border: '1px solid rgba(124, 58, 237, 0.14)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Top accent stripe */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, #a78bfa 0%, #7c3aed 100%)' }} />

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: compact ? '10px' : '18px', gap: '10px', flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: compact ? '8px' : '10px' }}>
          <div style={{ width: compact ? '28px' : '36px', height: compact ? '28px' : '36px', borderRadius: compact ? '9px' : '12px', background: 'linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%)', color: '#7c3aed', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
            <Sparkles size={compact ? 14 : 18} />
          </div>
          <div>
            <div style={{ fontSize: compact ? '0.62rem' : '0.68rem', fontWeight: 900, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#7c3aed' }}>
              Worked solution
            </div>
            <div style={{ fontSize: compact ? '0.72rem' : '0.78rem', fontWeight: 700, color: '#64748b', marginTop: '2px' }}>
              Step {Math.min(revealed, totalSteps)} of {totalSteps}
            </div>
          </div>
        </div>

        {allRevealed && (
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '5px 10px', borderRadius: '999px', background: '#dcfce7', color: '#166534', fontWeight: 800, fontSize: '0.68rem', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
            <CheckCircle2 size={13} /> Complete
          </div>
        )}
      </div>

      {/* Steps list */}
      <div
        ref={stepsViewportRef}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: compact ? '10px' : '18px',
          flex: scrollSteps ? '1 1 auto' : '0 0 auto',
          minHeight: scrollSteps ? 0 : 'auto',
          overflowY: scrollSteps ? 'auto' : 'visible',
          overscrollBehaviorY: scrollSteps ? 'contain' : 'auto',
          touchAction: scrollSteps ? 'pan-y' : 'auto',
          WebkitOverflowScrolling: scrollSteps ? 'touch' : 'auto',
          paddingRight: scrollSteps ? '6px' : 0,
          marginRight: scrollSteps ? '-6px' : 0,
          scrollbarGutter: scrollSteps ? 'stable' : 'auto',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: compact ? '10px' : '18px' }}>
          <AnimatePresence initial={false}>
            {visibleSteps.map((step, i) => (
              <motion.div
                key={`step-${question?.id || ''}-${i}`}
                initial={{ opacity: 0, y: 10, scale: 0.99 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ type: 'spring', stiffness: 280, damping: 24, delay: i === revealed - 1 ? 0.05 : 0 }}
                style={{
                  display: 'flex',
                  gap: stepGap,
                  padding: stepPad,
                  borderRadius: compact ? '12px' : '16px',
                  background: '#faf5ff',
                  border: '1px solid #ede9fe',
                  position: 'relative',
                  alignItems: 'flex-start',
                }}
              >
                {/* Left purple accent bar */}
                <div style={{ position: 'absolute', left: 0, top: '12%', bottom: '12%', width: '3px', borderRadius: '3px', background: 'linear-gradient(180deg, #a78bfa 0%, #7c3aed 100%)' }} />

                <div style={{
                  flex: `0 0 ${numSize}px`,
                  width: numSize,
                  height: numSize,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)',
                  color: '#fff',
                  display: 'grid',
                  placeItems: 'center',
                  fontWeight: 900,
                  fontSize: compact ? '0.85rem' : '1.08rem',
                  boxShadow: '0 6px 14px rgba(124,58,237,0.28)',
                  marginLeft: compact ? '2px' : '6px',
                  flexShrink: 0,
                }}>
                  {i + 1}
                </div>

                <div style={{ flex: '1 1 auto', minWidth: 0, overflowWrap: 'anywhere', wordBreak: 'break-word' }}>
                  <div style={{ fontSize: compact ? '0.68rem' : '0.76rem', fontWeight: 900, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#7c3aed', marginBottom: compact ? '6px' : '8px' }}>
                    Step {i + 1}
                  </div>
                  {step.explanation && (
                    <div style={{ width: '100%', minWidth: 0 }}>
                      <MathView
                        content={step.explanation}
                        graphData={
                          hasDrawableGraph(step.graphData)
                            ? step.graphData
                            : (
                              i === totalSteps - 1
                              && stemHidesGraph(question)
                              && hasDrawableGraph(graphData)
                                ? graphData
                                : undefined
                            )
                        }
                        style={{
                          color: '#1e1b4b',
                          fontWeight: 500,
                          fontSize: bodyFs,
                          lineHeight: 1.65,
                          display: 'block',
                          width: '100%',
                          maxWidth: '100%',
                          overflowWrap: 'anywhere',
                          wordBreak: 'break-word',
                        }}
                      />
                    </div>
                  )}
                  {step.workingOut && (
                    <div style={{
                      marginTop: compact ? '10px' : '14px',
                      padding: compact ? '10px 12px' : '16px 18px',
                      borderRadius: '12px',
                      background: '#fff',
                      border: '1px solid #ddd6fe',
                      width: '100%',
                      boxSizing: 'border-box',
                    }}>
                      <div style={{ fontSize: '0.62rem', fontWeight: 900, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#a78bfa', marginBottom: '6px' }}>
                        Working Out
                      </div>
                      <MathView
                        content={step.workingOut}
                        style={{
                          color: '#4c1d95',
                          fontWeight: 500,
                          fontSize: workFs,
                          lineHeight: 1.65,
                          display: 'block',
                          width: '100%',
                          overflowWrap: 'anywhere',
                        }}
                      />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          <div ref={bottomRef} style={{ height: 1, flexShrink: 0 }} />
        </div>
      </div>

      <div style={{
        flexShrink: 0,
        background: '#fff',
        boxShadow: scrollSteps && !allRevealed ? '0 -12px 20px rgba(255,255,255,0.92)' : 'none',
      }}>
        {/* Next step button (only if more steps remain) */}
        {hasMultipleSteps && !allRevealed && (
          <button
            onClick={() => {
              shouldAutoScrollRef.current = true;
              setRevealed((r) => Math.min(totalSteps, r + 1));
            }}
            style={{
              marginTop: compact ? '10px' : '18px',
              width: '100%',
              padding: compact ? '11px 16px' : '14px 22px',
              borderRadius: compact ? '12px' : '16px',
              background: 'linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)',
              color: '#fff',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 800,
              fontSize: compact ? '0.85rem' : '0.95rem',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              boxShadow: '0 12px 24px rgba(124,58,237,0.28)',
              letterSpacing: '0.02em',
              transition: 'transform 0.15s ease',
            }}
            onMouseDown={(e) => { e.currentTarget.style.transform = 'scale(0.98)'; }}
            onMouseUp={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
          >
            Next step <ChevronDown size={compact ? 16 : 18} strokeWidth={2.5} />
          </button>
        )}
      </div>
    </div>
  );
};

export default WorkedSolutionSteps;
