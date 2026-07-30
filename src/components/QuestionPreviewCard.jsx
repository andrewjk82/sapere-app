import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lightbulb, ClipboardCheck } from 'lucide-react';
import MathView from './MathView';
import MathInput from './MathInput';
import { answersMatch } from '../utils/answerMatching';
import { resolveCorrectOptionIndex } from '../utils/mcOptionShuffle';

// Same quick-insert row QuestionBankPage.jsx offers for short-answer preview.
const QUICK_INSERTS = [
  { label: '√', latex: '\\sqrt{#?}', title: 'Square root' },
  { label: 'ⁿ√', latex: '\\sqrt[#?]{#?}', title: 'nth root' },
  { label: 'a/b', latex: '\\frac{#?}{#?}', title: 'Fraction' },
  { label: 'xⁿ', latex: '^{#?}', title: 'Exponent' },
  { label: 'π', latex: '\\pi', title: 'Pi' },
  { label: '±', latex: '\\pm', title: 'Plus or minus' },
  { label: '°', latex: '^{\\circ}', title: 'Degrees' },
  { label: '( )', latex: '(#?)', title: 'Brackets' },
  { label: '≤', latex: '\\le', title: 'Less than or equal to' },
  { label: '≥', latex: '\\ge', title: 'Greater than or equal to' },
];

// Split a long model-answer string into sentence-level lines for readability.
// Careful to skip periods inside math delimiters \(...\) and $$...$$.
const splitAnswerIntoLines = (text) => {
  if (typeof text !== 'string') return text;
  if (/\n/.test(text)) return text;
  const mathRe = /(\$\$[\s\S]*?\$\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\])/g;
  const tokens = text.split(mathRe);
  let result = '';
  for (let i = 0; i < tokens.length; i++) {
    if (i % 2 === 1) {
      result += tokens[i];
    } else {
      result += tokens[i].replace(/\.\s+(?=[A-Z])/g, '.\n');
    }
  }
  return result;
};

/**
 * Read-only question preview — the EXACT badge/diagram/options-with-
 * correct-highlight/solution-steps layout QuestionBankPage.jsx renders for
 * its single-question admin view, extracted so PendingReviewPanel.jsx (and
 * any other admin surface) can show a question the same familiar way
 * instead of a bespoke, plainer rendering. Always resolves the correct MC
 * option via resolveCorrectOptionIndex (mcOptionShuffle.js) — never
 * hand-roll this (see CLAUDE.md).
 */
const QuestionPreviewCard = ({ question: q }) => {
  const [showHint, setShowHint] = useState(false);
  const [previewAnswer, setPreviewAnswer] = useState('');
  const mathRef = useRef(null);

  if (!q) return null;

  const isFillBlank = q.type === 'fill_blank';
  const isShort = q.type === 'short_answer';
  const isMC = !isShort && !isFillBlank && !q.subQuestions?.length && (q.options || []).length > 0;
  const isTeacherReview = q.type === 'teacher_review' || q.requiresManualGrading === true;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ padding: '32px', borderRadius: '32px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)', background: '#fff', border: '1px solid #e2e8f0', position: 'relative' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', gap: '8px' }}>
          <span style={{ fontSize: '0.7rem', fontWeight: 800, background: '#e0e7ff', color: '#6366f1', padding: '4px 10px', borderRadius: '8px', textTransform: 'uppercase' }}>
            {q.difficulty || 'medium'} · {q.type?.replace('_', ' ') || 'question'}
          </span>
          {q.hint && (
            <button
              onClick={() => setShowHint((v) => !v)}
              style={{ background: showHint ? '#fef3c7' : '#fff7ed', border: 'none', padding: '6px 12px', borderRadius: '10px', color: '#d97706', fontSize: '0.75rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}
            >
              <Lightbulb size={14} /> {showHint ? 'Hide Hint' : 'Show Hint'}
            </button>
          )}
        </div>

        <MathView
          content={q.question}
          graphData={
            q.type === 'graph_sketch' || /^(sketch|draw)\b/i.test(String(q.question || '').trim())
              ? null
              : q.graphData
          }
          style={{ fontSize: '0.98rem', fontWeight: 500, color: '#1e1b4b', lineHeight: 1.7, margin: 0 }}
        />

        <AnimatePresence>
          {showHint && q.hint && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} style={{ overflow: 'hidden' }}>
              <div style={{ marginTop: '16px', padding: '16px', borderRadius: '16px', background: '#fffbeb', border: '1px solid #fef3c7' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#d97706', marginBottom: '8px' }}>
                  <Lightbulb size={16} />
                  <span style={{ fontWeight: 800, textTransform: 'uppercase', fontSize: '0.7rem', letterSpacing: '0.05em' }}>Hint</span>
                </div>
                <MathView content={q.hint} style={{ color: '#92400e', fontSize: '0.95rem', fontWeight: 600 }} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {q.questionImage && (
          <img src={q.questionImage} alt="Question" style={{ width: '100%', maxHeight: '240px', objectFit: 'contain', marginTop: '16px', borderRadius: '16px', background: '#f8fafc' }} />
        )}
      </div>

      {q.subQuestions?.length > 0 ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {q.subQuestions.map((sq, sIdx) => (
            <div key={sq.id || sIdx} style={{ padding: '24px', borderRadius: '24px', background: 'white', border: '1px solid #e2e8f0', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: '#6366f1', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', fontWeight: 900, flexShrink: 0 }}>
                  {String.fromCharCode(97 + sIdx)}
                </div>
                <MathView content={sq.question} graphData={sq.graphData} style={{ fontWeight: 700, color: '#1e293b', fontSize: '1rem' }} />
              </div>
              {sq.type === 'multiple_choice' ? (
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '12px' }}>
                  {(() => {
                    const sqCorrectIdx = resolveCorrectOptionIndex(
                      { ...sq, isManual: q.isManual ?? true }, sq.options || [],
                    );
                    return (sq.options || []).map((opt, oIdx) => {
                      const isCorrectOpt = oIdx === sqCorrectIdx;
                      return (
                        <div key={oIdx} style={{ padding: '14px 22px', display: 'flex', alignItems: 'center', gap: '14px', border: `2px solid ${isCorrectOpt ? '#10b981' : 'transparent'}`, borderRadius: '100px', background: isCorrectOpt ? '#f0fdf4' : '#fff', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
                          <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: isCorrectOpt ? '#10b981' : '#f1f5f9', color: isCorrectOpt ? '#fff' : '#64748b', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.85rem', flexShrink: 0 }}>
                            {String.fromCharCode(65 + oIdx)}
                          </div>
                          <MathView content={typeof opt === 'string' ? opt : opt.text} graphData={typeof opt === 'object' ? opt.graphData : null} style={{ flex: 1, fontSize: '1rem', color: '#1e1b4b', fontWeight: 500 }} />
                          {isCorrectOpt && <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#10b981', textTransform: 'uppercase', letterSpacing: '0.08em', flexShrink: 0 }}>Correct</span>}
                        </div>
                      );
                    });
                  })()}
                </div>
              ) : (
                <input type="text" placeholder="Type answer..." disabled style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '2px solid #f1f5f9', background: '#fff', fontWeight: 700, fontSize: '0.95rem' }} />
              )}

              {sq.type !== 'multiple_choice' && sq.answer != null && String(sq.answer).trim() !== '' && (
                <div style={{ marginTop: '12px', padding: '12px 16px', borderRadius: '12px', background: '#f0fdf4', border: '1px solid #bbf7d0', color: '#166534', fontWeight: 800, fontSize: '0.9rem' }}>
                  Answer: <MathView content={String(sq.answer)} style={{ display: 'inline', fontWeight: 800 }} />
                </div>
              )}

              {Array.isArray(sq.solutionSteps) && sq.solutionSteps.length > 0 && (
                <div style={{ marginTop: '12px', padding: '16px 20px', borderRadius: '16px', background: '#fafaff', border: '1px solid #e0e7ff' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                    <div style={{ width: '26px', height: '26px', borderRadius: '8px', background: 'linear-gradient(135deg, #a78bfa, #7c3aed)', display: 'grid', placeItems: 'center', color: '#fff' }}>
                      <Lightbulb size={13} />
                    </div>
                    <div style={{ fontWeight: 900, color: '#1e1b4b', fontSize: '0.85rem' }}>Step-by-step solution</div>
                    <span style={{ marginLeft: 'auto', fontSize: '0.68rem', fontWeight: 800, color: '#94a3b8' }}>{sq.solutionSteps.length} steps</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {sq.solutionSteps.map((step, si) => (
                      <div key={si} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                        <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'linear-gradient(135deg, #a78bfa, #7c3aed)', color: '#fff', display: 'grid', placeItems: 'center', fontWeight: 900, fontSize: '0.72rem', flexShrink: 0, marginTop: '2px' }}>
                          {si + 1}
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          {step.explanation && (
                            <MathView content={step.explanation} style={{ fontSize: '0.88rem', color: '#1e293b', fontWeight: 600, lineHeight: 1.6, marginBottom: step.workingOut ? '6px' : 0 }} />
                          )}
                          {step.workingOut && (
                            <div style={{ padding: '9px 13px', borderRadius: '10px', background: '#fff', border: '1px solid #eef2f7' }}>
                              <MathView content={step.workingOut} style={{ fontSize: '0.9rem', color: '#1e1b4b' }} />
                            </div>
                          )}
                          {step.graphData && (
                            <div style={{ marginTop: '6px', borderRadius: '12px', overflow: 'hidden', border: '1px solid #e2e8f0', background: '#fafbfd', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '4px 0' }}>
                              <MathView content="" graphData={step.graphData} style={{ minHeight: 'auto', margin: 0, lineHeight: 0 }} />
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {sq.solution && !(Array.isArray(sq.solutionSteps) && sq.solutionSteps.length > 0) && (
                <div style={{ marginTop: '12px', padding: '16px 20px', borderRadius: '16px', background: '#fafaff', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontSize: '0.68rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>Solution</div>
                  <MathView content={sq.solution} style={{ color: '#334155', fontSize: '0.9rem', lineHeight: 1.6 }} />
                </div>
              )}
            </div>
          ))}
        </div>
      ) : isShort ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {QUICK_INSERTS.map((b) => (
              <button
                key={b.label}
                type="button"
                onClick={() => mathRef.current?.insert(b.latex)}
                title={b.title}
                style={{ minWidth: '46px', height: '42px', padding: '0 12px', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#fff', color: '#4f46e5', fontSize: '1.05rem', fontWeight: 800, cursor: 'pointer', fontFamily: '"KaTeX_Main", "Times New Roman", serif' }}
              >
                {b.label}
              </button>
            ))}
          </div>
          <MathInput
            ref={mathRef}
            value={previewAnswer}
            onChange={setPreviewAnswer}
            placeholder="Type your answer…  (same editor students use)"
            style={{ fontSize: '1.4rem', padding: '22px', borderRadius: '24px' }}
          />
          {(() => {
            const typed = previewAnswer.trim();
            if (!typed || !q.answer) return null;
            const isMatch = answersMatch(typed, String(q.answer));
            const accepted = (q.acceptedAnswers || []).some((a) => answersMatch(typed, String(a)));
            const correct = isMatch || accepted;
            return (
              <div style={{ padding: '14px 18px', borderRadius: '14px', background: correct ? '#f0fdf4' : '#fef2f2', border: `2px solid ${correct ? '#10b981' : '#ef4444'}`, display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '1.3rem' }}>{correct ? '✅' : '❌'}</span>
                <span style={{ fontWeight: 900, color: correct ? '#166534' : '#991b1b', fontSize: '0.95rem' }}>
                  {correct ? 'Correct — matches the grading system' : 'Wrong — students typing this would be marked incorrect'}
                </span>
              </div>
            );
          })()}
          {q.answer && (
            <div style={{ padding: '12px 16px', borderRadius: '12px', background: '#f0fdf4', border: '1px solid #bbf7d0', color: '#166534', fontWeight: 800, fontSize: '0.9rem' }}>
              Answer: <MathView content={String(q.answer)} style={{ display: 'inline', fontWeight: 800 }} />
            </div>
          )}
        </div>
      ) : isFillBlank ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ padding: '20px 24px', borderRadius: '20px', background: '#fff', border: '1px solid #e2e8f0', display: 'flex', flexWrap: 'wrap', gap: '12px 18px', alignItems: 'center' }}>
            {(q.blanks || []).length === 0 ? (
              <span style={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.9rem' }}>No blanks defined for this question.</span>
            ) : (
              (q.blanks || []).map((b, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {b.label && <MathView content={b.label} style={{ fontWeight: 700, color: '#1e1b4b', fontSize: '1.05rem' }} />}
                  <input type="text" placeholder="—" disabled style={{ width: '110px', padding: '10px 14px', borderRadius: '12px', border: '2px solid #e2e8f0', background: '#f8fafc', textAlign: 'center', fontWeight: 700, fontSize: '0.95rem', fontFamily: '"KaTeX_Main", "Times New Roman", serif' }} />
                </div>
              ))
            )}
          </div>
          {(q.blanks || []).some((b) => (b.answer || '').trim()) && (
            <div style={{ padding: '12px 16px', borderRadius: '12px', background: '#f0fdf4', border: '1px solid #bbf7d0', color: '#166534', fontWeight: 700, fontSize: '0.9rem', display: 'flex', flexWrap: 'wrap', gap: '6px 14px' }}>
              <span style={{ fontWeight: 900 }}>Answers:</span>
              {(q.blanks || []).map((b, i) => (
                <span key={i} style={{ display: 'inline-flex', gap: '6px', alignItems: 'center' }}>
                  {b.label && <MathView content={b.label} style={{ display: 'inline', fontWeight: 700 }} />}
                  <MathView content={String(b.answer || '—')} style={{ display: 'inline', fontWeight: 800 }} />
                </span>
              ))}
            </div>
          )}
        </div>
      ) : isMC ? (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '12px' }}>
          {(q.options || []).map((opt, i) => {
            const optText = typeof opt === 'string' ? opt : opt.text;
            const isCorrect = i === resolveCorrectOptionIndex(q, q.options || []);
            return (
              <div key={i} style={{ padding: '16px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px', border: `2px solid ${isCorrect ? '#10b981' : 'transparent'}`, borderRadius: '100px', background: isCorrect ? '#f0fdf4' : '#fff', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', width: '100%' }}>
                  <div style={{ width: '34px', height: '34px', borderRadius: '50%', background: isCorrect ? '#10b981' : '#f1f5f9', color: isCorrect ? '#fff' : '#64748b', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: '"Inter", sans-serif', fontWeight: 700, fontSize: '0.85rem', flexShrink: 0 }}>
                    {String.fromCharCode(65 + i)}
                  </div>
                  <div style={{ flex: 1 }}>
                    <MathView content={optText} graphData={typeof opt === 'object' ? opt.graphData : null} style={{ fontWeight: 500, fontSize: '1.05rem', color: '#1e1b4b' }} />
                    {typeof opt === 'object' && opt.imageUrl && <img src={opt.imageUrl} alt="" style={{ maxHeight: '60px', marginTop: '8px', display: 'block', borderRadius: '8px' }} />}
                  </div>
                </div>
                {isCorrect && <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#10b981', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Correct</span>}
              </div>
            );
          })}
        </div>
      ) : isTeacherReview ? (
        <div style={{ padding: '24px', borderRadius: '24px', background: '#fefce8', border: '1px solid #fef08a', color: '#854d0e', fontSize: '0.95rem', boxShadow: '0 4px 12px rgba(254, 240, 138, 0.15)', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontWeight: 800, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#a16207', borderBottom: q.answer ? '1px dashed #fef08a' : 'none', paddingBottom: q.answer ? '12px' : '0px' }}>
            <ClipboardCheck size={18} />
            <span>Teacher reviews this question manually</span>
          </div>
          {q.answer && (
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontWeight: 900, color: '#713f12', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                Model Answer:
              </div>
              <div style={{ background: '#ffffff', padding: '18px 24px', borderRadius: '20px', border: '1px solid #fef08a', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.02)' }}>
                <MathView content={splitAnswerIntoLines(String(q.answer))} style={{ color: '#451a03', fontSize: '0.95rem', lineHeight: 1.8 }} />
              </div>
            </div>
          )}
        </div>
      ) : null}

      {Array.isArray(q.solutionSteps) && q.solutionSteps.length > 0 && (
        <div style={{ padding: '20px 24px', borderRadius: '20px', background: '#fff', border: '1px solid #e0e7ff' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <div style={{ width: '30px', height: '30px', borderRadius: '10px', background: 'linear-gradient(135deg, #a78bfa, #7c3aed)', display: 'grid', placeItems: 'center', color: '#fff' }}>
              <Lightbulb size={15} />
            </div>
            <div style={{ fontWeight: 900, color: '#1e1b4b', fontSize: '0.95rem' }}>Step-by-step solution</div>
            <span style={{ marginLeft: 'auto', fontSize: '0.72rem', fontWeight: 800, color: '#94a3b8' }}>{q.solutionSteps.length} steps</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {q.solutionSteps.map((step, si) => (
              <div key={si} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: 'linear-gradient(135deg, #a78bfa, #7c3aed)', color: '#fff', display: 'grid', placeItems: 'center', fontWeight: 900, fontSize: '0.75rem', flexShrink: 0, marginTop: '2px' }}>
                  {si + 1}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  {step.explanation && (
                    <MathView content={step.explanation} style={{ fontSize: '0.9rem', color: '#1e293b', fontWeight: 600, lineHeight: 1.6, marginBottom: step.workingOut ? '6px' : 0 }} />
                  )}
                  {step.workingOut && (
                    <div style={{ padding: '10px 14px', borderRadius: '12px', background: '#f8fafc', border: '1px solid #eef2f7' }}>
                      <MathView content={step.workingOut} style={{ fontSize: '0.95rem', color: '#1e1b4b' }} />
                    </div>
                  )}
                  {step.graphData && (step.graphData.svg || step.graphData.jsxGraph || step.graphData.geometry || step.graphData.diagramSvg || step.graphData.svgSnapshot || step.graphData.diagram || step.graphData.html) && (
                    <div style={{ marginTop: '8px', borderRadius: '12px', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
                      <MathView
                        content=""
                        graphData={step.graphData}
                        style={{
                          minHeight: (step.graphData?.geometry || step.graphData?.svg || step.graphData?.svgSnapshot || step.graphData?.diagramSvg || step.graphData?.jsxGraph)
                            ? 'auto'
                            : '240px',
                        }}
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {q.solution && !(Array.isArray(q.solutionSteps) && q.solutionSteps.length > 0) && (
        <div style={{ padding: '20px 24px', borderRadius: '20px', background: '#fff', border: '1px solid #e2e8f0' }}>
          <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>Solution</div>
          <MathView content={q.solution} style={{ color: '#334155', fontSize: '0.95rem', lineHeight: 1.6 }} />
        </div>
      )}
    </div>
  );
};

export default QuestionPreviewCard;
