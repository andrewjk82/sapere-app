import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft, ChevronRight, ArrowLeft, Clock, Lightbulb, Pencil, Plus, Trash2,
} from 'lucide-react';
import { db } from '../firebase/config';
import { collection, query, where, getDocs, doc, setDoc, updateDoc, serverTimestamp } from 'firebase/firestore';
import MathView from './MathView';
import MathInput from './MathInput';
import QuestionBankModal from './QuestionBankModal';

// Quick-insert buttons matching the student answer view.
const QB_QUICK_INSERTS = [
  { label: '√', latex: '\\sqrt{#?}', title: 'Square root' },
  { label: 'ⁿ√', latex: '\\sqrt[#?]{#?}', title: 'nth root' },
  { label: 'a/b', latex: '\\frac{#?}{#?}', title: 'Fraction' },
  { label: 'xⁿ', latex: '^{#?}', title: 'Exponent' },
  { label: 'π', latex: '\\pi', title: 'Pi' },
  { label: '±', latex: '\\pm', title: 'Plus or minus' },
  { label: '°', latex: '^{\\circ}', title: 'Degrees' },
  { label: '( )', latex: '(#?)', title: 'Brackets' },
];
import { useToast } from '../context/ToastContext';

/**
 * Full-page question-bank browser for a single chapter+topic.
 *
 * Mirrors the student challenge view (so the teacher sees questions exactly
 * as students do) but with no Submit button and no sketch board. Adds:
 *   - free Prev/Next navigation between questions in the topic
 *   - an Edit button that opens the existing question-edit form
 *
 * Routing model: this is rendered inline by Curriculum.jsx (no react-router
 * needed); `onBack` returns to the topics list.
 */
const QuestionBankPage = ({ chapter, topic, onBack }) => {
  const { showToast } = useToast();
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [editingQuestion, setEditingQuestion] = useState(null);
  const [previewAnswer, setPreviewAnswer] = useState(''); // teacher can test-type like a student
  const qbMathRef = useRef(null);
  const [creatingNew, setCreatingNew] = useState(false);

  const reload = useCallback(async () => {
    setLoading(true);
    try {
      // Exam paper chapters use examPaper field; regular chapters use chapterId.
      const isExamChapter = chapter.id?.startsWith('exam:');
      const examPaperKey = chapter.examPaper || chapter.id?.replace('exam:', '');
      const snap = await getDocs(
        isExamChapter
          ? query(collection(db, 'questions'), where('examPaper', '==', examPaperKey))
          : query(collection(db, 'questions'), where('chapterId', '==', chapter.id))
      );
      const all = snap.docs
        .map((d) => ({ id: d.id, ...d.data() }))
        .filter((q) => q.isActive !== false && (!topic?.id || q.topicId === topic.id));
      all.sort((a, b) => String(a.id).localeCompare(String(b.id)));
      setQuestions(all);
      setCurrentIdx((prev) => (prev >= all.length ? Math.max(0, all.length - 1) : prev));
    } catch (e) {
      console.error('Question bank load failed:', e);
      showToast('Failed to load questions', 'error');
    } finally {
      setLoading(false);
    }
  }, [chapter.id, topic?.id, showToast]);

  useEffect(() => { reload(); }, [reload]);

  const q = questions[currentIdx];
  const total = questions.length;
  const isFillBlank = q?.type === 'fill_blank';
  const isShort = q?.type === 'short_answer';
  const isMC = q && !isShort && !isFillBlank && !q.subQuestions?.length && (q.options || []).length > 0;
  const isTeacherReview = q?.type === 'teacher_review' || q?.requiresManualGrading === true;

  const goPrev = () => { setCurrentIdx((i) => Math.max(0, i - 1)); setShowHint(false); setPreviewAnswer(''); };
  const goNext = () => { setCurrentIdx((i) => Math.min(total - 1, i + 1)); setShowHint(false); setPreviewAnswer(''); };

  const handleDelete = async () => {
    if (!q) return;
    if (!window.confirm(`Delete this question (${q.id})?`)) return;
    try {
      await updateDoc(doc(db, 'questions', q.id), { isActive: false, updatedAt: serverTimestamp() });
      // Bump the global questions sync_meta so chapter-card counts on the
      // Curriculum page refresh on next visit instead of staying stale.
      await setDoc(doc(db, 'sync_meta', 'questions'), {
        version: Date.now(),
        updatedAt: serverTimestamp(),
      }, { merge: true }).catch(() => {});
      showToast('Question deleted', 'success');
      await reload();
    } catch (e) {
      console.error(e);
      showToast('Delete failed', 'error');
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc', padding: '24px 20px 80px' }}>
      <div style={{ maxWidth: '760px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {/* Top bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
          <button
            onClick={onBack}
            style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 14px', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#fff', color: '#475569', fontWeight: 700, cursor: 'pointer' }}
          >
            <ArrowLeft size={16} /> Back to topics
          </button>
          <div style={{ flex: 1, textAlign: 'center' }}>
            <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
              {chapter.title}
            </div>
            <div style={{ fontSize: '1rem', fontWeight: 900, color: '#1e1b4b' }}>{topic?.title || 'All topics'}</div>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              onClick={() => setCreatingNew(true)}
              style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 14px', borderRadius: '12px', border: 'none', background: '#6366f1', color: '#fff', fontWeight: 800, cursor: 'pointer', boxShadow: '0 4px 12px rgba(99,102,241,0.22)' }}
            >
              <Plus size={16} /> New
            </button>
          </div>
        </div>

        {loading ? (
          <div style={{ padding: '60px', textAlign: 'center', color: '#94a3b8', fontWeight: 700 }}>Loading questions…</div>
        ) : total === 0 ? (
          <div style={{ padding: '60px 30px', textAlign: 'center', background: '#fff', borderRadius: '24px', border: '1px dashed #cbd5e1' }}>
            <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#475569', marginBottom: '6px' }}>No questions yet</div>
            <div style={{ fontSize: '0.9rem', color: '#94a3b8', marginBottom: '20px' }}>Add the first question for this topic.</div>
            <button
              onClick={() => setCreatingNew(true)}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '12px 20px', borderRadius: '14px', border: 'none', background: '#6366f1', color: '#fff', fontWeight: 800, cursor: 'pointer' }}
            >
              <Plus size={16} /> Add question
            </button>
          </div>
        ) : (
          <>
            {/* Challenge-style header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Question Bank</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ fontSize: '1.1rem', fontWeight: 900, color: '#1e1b4b' }}>Question {currentIdx + 1} of {total}</div>
                  {q?.id && <span style={{ fontSize: '0.65rem', fontWeight: 700, color: '#94a3b8', background: '#f1f5f9', borderRadius: '6px', padding: '2px 7px', fontFamily: 'monospace', userSelect: 'all' }}>ID: {q.id}</span>}
                </div>
              </div>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#64748b', background: '#fff', padding: '6px 12px', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.03)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Clock size={14} /> {q?.timeLimit || 120}s
                </div>
                <button
                  onClick={() => setEditingQuestion(q)}
                  style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 14px', borderRadius: '12px', border: '1px solid #e0e7ff', background: '#eef2ff', color: '#4f46e5', fontWeight: 800, cursor: 'pointer' }}
                >
                  <Pencil size={14} /> Edit
                </button>
                <button
                  onClick={handleDelete}
                  title="Delete"
                  style={{ padding: '8px', borderRadius: '12px', border: '1px solid #fee2e2', background: '#fff1f2', color: '#e11d48', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <Trash2 size={14} />
                </button>
              </div>
            </div>

            {/* Progress bar */}
            <div style={{ width: '100%', height: '8px', background: '#e2e8f0', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${((currentIdx + 1) / total) * 100}%`, background: '#6366f1', transition: 'width 0.2s' }} />
            </div>

            {/* Question card */}
            <div style={{ padding: '32px', borderRadius: '32px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)', background: '#fff', border: '1px solid #e2e8f0', position: 'relative' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', gap: '8px' }}>
                <span style={{ fontSize: '0.7rem', fontWeight: 800, background: '#e0e7ff', color: '#6366f1', padding: '4px 10px', borderRadius: '8px', textTransform: 'uppercase' }}>
                  {q?.difficulty || 'medium'} · {q?.type?.replace('_', ' ') || 'question'}
                </span>
                {q?.hint && (
                  <button
                    onClick={() => setShowHint((v) => !v)}
                    style={{ background: showHint ? '#fef3c7' : '#fff7ed', border: 'none', padding: '6px 12px', borderRadius: '10px', color: '#d97706', fontSize: '0.75rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}
                  >
                    <Lightbulb size={14} /> {showHint ? 'Hide Hint' : 'Show Hint'}
                  </button>
                )}
              </div>

              <MathView
                content={q?.question}
                graphData={q?.graphData}
                style={{ fontSize: '1.15rem', fontWeight: 500, color: '#1e1b4b', lineHeight: 1.7, margin: 0 }}
              />

              <AnimatePresence>
                {showHint && q?.hint && (
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

              {q?.questionImage && (
                <img src={q.questionImage} alt="Question" style={{ width: '100%', maxHeight: '240px', objectFit: 'contain', marginTop: '16px', borderRadius: '16px', background: '#f8fafc' }} />
              )}
            </div>

            {/* Answer area (read-only, mirrors student view) */}
            {q?.subQuestions?.length > 0 ? (
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
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '8px' }}>
                        {(sq.options || []).map((opt, oIdx) => (
                          <div key={oIdx} style={{ padding: '12px 16px', borderRadius: '12px', border: '2px solid #f1f5f9', background: '#fff', color: '#64748b', fontWeight: 800, fontSize: '0.85rem' }}>
                            {String.fromCharCode(65 + oIdx)}. <MathView content={typeof opt === 'string' ? opt : opt.text} style={{ display: 'inline' }} />
                          </div>
                        ))}
                      </div>
                    ) : (
                      <input type="text" placeholder="Type answer..." disabled style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '2px solid #f1f5f9', background: '#fff', fontWeight: 700, fontSize: '0.95rem' }} />
                    )}
                  </div>
                ))}
              </div>
            ) : isShort ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {/* Quick-insert buttons + MathLive editor — identical to the student view */}
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
                  {QB_QUICK_INSERTS.map((b) => (
                    <button
                      key={b.label}
                      type="button"
                      onClick={() => qbMathRef.current?.insert(b.latex)}
                      title={b.title}
                      style={{ minWidth: '46px', height: '42px', padding: '0 12px', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#fff', color: '#4f46e5', fontSize: '1.05rem', fontWeight: 800, cursor: 'pointer', fontFamily: '"KaTeX_Main", "Times New Roman", serif' }}
                    >
                      {b.label}
                    </button>
                  ))}
                </div>
                <MathInput
                  ref={qbMathRef}
                  value={previewAnswer}
                  onChange={setPreviewAnswer}
                  placeholder="Type your answer…  (same editor students use)"
                  style={{ fontSize: '1.4rem', padding: '22px', borderRadius: '24px' }}
                />
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
                        {b.label && (
                          <MathView content={b.label} style={{ fontWeight: 700, color: '#1e1b4b', fontSize: '1.05rem' }} />
                        )}
                        <input
                          type="text"
                          placeholder="—"
                          disabled
                          style={{ width: '110px', padding: '10px 14px', borderRadius: '12px', border: '2px solid #e2e8f0', background: '#f8fafc', textAlign: 'center', fontWeight: 700, fontSize: '0.95rem', fontFamily: '"KaTeX_Main", "Times New Roman", serif' }}
                        />
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
                  const correctIdx = Number(q.answer);
                  const isCorrect = !Number.isNaN(correctIdx) && i === correctIdx;
                  return (
                    <div key={i} style={{ padding: '16px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px', border: `2px solid ${isCorrect ? '#10b981' : 'transparent'}`, borderRadius: '100px', background: isCorrect ? '#f0fdf4' : '#fff', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <div style={{ width: '34px', height: '34px', borderRadius: '50%', background: isCorrect ? '#10b981' : '#f1f5f9', color: isCorrect ? '#fff' : '#64748b', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: '"Inter", sans-serif', fontWeight: 700, fontSize: '0.85rem', flexShrink: 0 }}>
                          {String.fromCharCode(65 + i)}
                        </div>
                        <div style={{ flex: 1 }}>
                          <MathView content={optText} style={{ fontWeight: 500, fontSize: '1.05rem', color: '#1e1b4b' }} />
                          {typeof opt === 'object' && opt.imageUrl && <img src={opt.imageUrl} alt="" style={{ maxHeight: '60px', marginTop: '8px', display: 'block', borderRadius: '8px' }} />}
                        </div>
                      </div>
                      {isCorrect && <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#10b981', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Correct</span>}
                    </div>
                  );
                })}
              </div>
            ) : isTeacherReview ? (
              <div style={{ padding: '16px', borderRadius: '16px', background: '#fef9c3', color: '#854d0e', fontSize: '0.9rem', fontWeight: 700, textAlign: 'center' }}>
                Teacher reviews this question manually.
                {q.answer && (
                  <div style={{ marginTop: '8px', color: '#713f12', fontWeight: 600, fontSize: '0.85rem' }}>
                    Model answer: <MathView content={String(q.answer)} style={{ display: 'inline' }} />
                  </div>
                )}
              </div>
            ) : null}

            {/* Step-by-step solution */}
            {Array.isArray(q?.solutionSteps) && q.solutionSteps.length > 0 && (
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
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Solution preview (if any) */}
            {q?.solution && (
              <div style={{ padding: '20px 24px', borderRadius: '20px', background: '#fff', border: '1px solid #e2e8f0' }}>
                <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>Solution</div>
                <MathView content={q.solution} style={{ color: '#334155', fontSize: '0.95rem', lineHeight: 1.6 }} />
              </div>
            )}

            {/* Prev / Next nav */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px', marginTop: '8px' }}>
              <button
                onClick={goPrev}
                disabled={currentIdx === 0}
                style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '14px 22px', borderRadius: '20px', border: 'none', background: currentIdx === 0 ? '#e2e8f0' : '#fff', color: currentIdx === 0 ? '#94a3b8' : '#4f46e5', fontWeight: 800, cursor: currentIdx === 0 ? 'not-allowed' : 'pointer', boxShadow: currentIdx === 0 ? 'none' : '0 6px 16px rgba(0,0,0,0.04)' }}
              >
                <ChevronLeft size={18} /> Prev
              </button>
              <div style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: 700 }}>{currentIdx + 1} / {total}</div>
              <button
                onClick={goNext}
                disabled={currentIdx >= total - 1}
                style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '14px 22px', borderRadius: '20px', border: 'none', background: currentIdx >= total - 1 ? '#e2e8f0' : 'linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)', color: currentIdx >= total - 1 ? '#94a3b8' : '#fff', fontWeight: 800, cursor: currentIdx >= total - 1 ? 'not-allowed' : 'pointer', boxShadow: currentIdx >= total - 1 ? 'none' : '0 12px 24px rgba(124,58,237,0.25)' }}
              >
                Next <ChevronRight size={18} />
              </button>
            </div>
          </>
        )}
      </div>

      {/* Inline edit overlay — reuses the existing form */}
      <AnimatePresence>
        {(editingQuestion || creatingNew) && (
          <QuestionBankModal
            chapter={chapter}
            directEditQuestion={editingQuestion || { _new: true, topicId: topic?.id, topicTitle: topic?.title }}
            onClose={() => {
              setEditingQuestion(null);
              setCreatingNew(false);
              reload();
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default QuestionBankPage;
