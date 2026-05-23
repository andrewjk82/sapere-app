import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GraduationCap, Settings as SettingsIcon, Play, ArrowLeft, ArrowRight,
  Lock, Trophy, Sparkles, Clock, Lightbulb, RotateCcw, ChevronRight, CheckCircle2, XCircle,
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { CURRICULUM_DATA } from '../constants/curriculumData';
import MathView from './MathView';
import { MATH_SYMBOLS } from '../utils/challengeUtils';
import { gradeQuestion } from '../utils/answerMatching';
import {
  getSelection, setSelection,
  getStats, getTopicAnalysis,
  startRound, finishRound,
  ROUND_SIZE_CONST,
} from '../services/examPrepService';

const flattenChapters = (yearKey) => {
  const data = CURRICULUM_DATA[yearKey];
  if (!data) return [];
  if (Array.isArray(data)) return data;
  // Year 11/12 split by course — collapse all courses into one list.
  return Object.values(data).flat();
};

const allYearKeys = Object.keys(CURRICULUM_DATA);

// ── Selection screen ────────────────────────────────────────────────────
const SelectionPanel = ({ uid, selection, onChange, onStart, hasPool }) => {
  const [activeYear, setActiveYear] = useState(selection.years[0] || 'Year 9');
  const yearChapters = flattenChapters(activeYear);

  const toggleYear = (y) => {
    const next = selection.years.includes(y)
      ? selection.years.filter((v) => v !== y)
      : [...selection.years, y];
    onChange({ ...selection, years: next });
  };
  const toggleChapter = (chId) => {
    const next = selection.chapters.includes(chId)
      ? selection.chapters.filter((v) => v !== chId)
      : [...selection.chapters, chId];
    onChange({ ...selection, chapters: next });
  };

  return (
    <div className="app-panel" style={{ padding: '28px', borderRadius: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{ width: '44px', height: '44px', borderRadius: '14px', background: 'linear-gradient(135deg, #a78bfa, #7c3aed)', display: 'grid', placeItems: 'center', color: '#fff' }}>
          <GraduationCap size={22} />
        </div>
        <div>
          <h3 style={{ margin: 0, fontWeight: 900, color: '#1e1b4b' }}>Exam Prep — Choose Topics</h3>
          <p style={{ margin: '4px 0 0', color: '#64748b', fontSize: '0.9rem', fontWeight: 600 }}>
            Pick the year(s) and chapters you're being tested on. {ROUND_SIZE_CONST} random questions per round.
          </p>
        </div>
      </div>

      <div>
        <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>Year</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {allYearKeys.map((y) => {
            const on = selection.years.includes(y);
            return (
              <button
                key={y}
                onClick={() => { toggleYear(y); setActiveYear(y); }}
                style={{ padding: '8px 14px', borderRadius: '999px', border: `1px solid ${on ? '#7c3aed' : '#e2e8f0'}`, background: on ? '#ede9fe' : '#fff', color: on ? '#5b21b6' : '#475569', fontWeight: 800, cursor: 'pointer', fontSize: '0.85rem' }}
              >
                {y}
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
          <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Chapters in {activeYear}</div>
          <div style={{ fontSize: '0.7rem', color: '#94a3b8', fontWeight: 700 }}>
            {selection.chapters.length} selected
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '10px' }}>
          {yearChapters.length === 0 ? (
            <div style={{ gridColumn: '1 / -1', padding: '20px', background: '#f8fafc', borderRadius: '12px', color: '#94a3b8', fontWeight: 700, textAlign: 'center' }}>
              No chapters defined for this year yet.
            </div>
          ) : yearChapters.map((ch) => {
            const on = selection.chapters.includes(ch.id);
            return (
              <label
                key={ch.id}
                style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 14px', borderRadius: '14px', border: `1.5px solid ${on ? '#a78bfa' : '#e2e8f0'}`, background: on ? '#faf5ff' : '#fff', cursor: 'pointer', userSelect: 'none' }}
              >
                <input
                  type="checkbox"
                  checked={on}
                  onChange={() => toggleChapter(ch.id)}
                  style={{ width: '18px', height: '18px', accentColor: '#7c3aed', cursor: 'pointer' }}
                />
                <span style={{ fontWeight: 700, color: on ? '#5b21b6' : '#334155', fontSize: '0.9rem', lineHeight: 1.3 }}>
                  {ch.title}
                </span>
              </label>
            );
          })}
        </div>
      </div>

      <button
        onClick={onStart}
        disabled={selection.chapters.length === 0}
        className="app-button app-button--primary"
        style={{ padding: '18px', borderRadius: '20px', fontSize: '1rem', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '10px', background: selection.chapters.length === 0 ? '#cbd5e1' : 'linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)', cursor: selection.chapters.length === 0 ? 'not-allowed' : 'pointer' }}
      >
        <Play size={18} /> {hasPool ? 'Start round' : 'Load pool & start'}
      </button>
    </div>
  );
};

// ── Topic-analysis card (cumulative weak-area breakdown) ────────────────
const TopicAnalysisCard = ({ analysis }) => (
  <div className="app-panel" style={{ padding: '24px', borderRadius: '24px' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
      <Sparkles size={18} color="#7c3aed" />
      <h3 style={{ margin: 0, fontWeight: 900, color: '#1e1b4b', fontSize: '1rem' }}>Where to focus</h3>
    </div>
    {analysis.length === 0 ? (
      <p style={{ margin: 0, color: '#94a3b8', fontWeight: 700, fontSize: '0.9rem' }}>Finish a round to see your topic breakdown.</p>
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

// ── Quiz view (one question at a time, self-contained) ─────────────────
const QuizView = ({ questions, onFinish }) => {
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState([]); // [{userAnswer, correct}]
  const [draft, setDraft] = useState(null);
  const [showHint, setShowHint] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [focusedBlank, setFocusedBlank] = useState(0);

  const q = questions[idx];
  const total = questions.length;

  useEffect(() => {
    if (!q) return;
    if (q.type === 'multiple_choice') setDraft(null);
    else if (q.type === 'fill_blank') setDraft(Array((q.blanks || []).length).fill(''));
    else setDraft('');
    setShowHint(false);
    setShowFeedback(false);
    setFocusedBlank(0);
  }, [idx, q?.id]);

  if (!q) return null;

  const submit = () => {
    const userAnswer = draft;
    const { correct } = gradeQuestion(q, userAnswer);
    const next = [...answers, { userAnswer, correct, questionId: q.id, topicId: q.topicId, topicTitle: q.topicTitle }];
    setAnswers(next);
    setShowFeedback(true);
  };

  const advance = () => {
    if (idx + 1 >= total) {
      onFinish(answers);
    } else {
      setIdx(idx + 1);
    }
  };

  const canSubmit = (() => {
    if (q.type === 'multiple_choice') return draft !== null && draft !== undefined;
    if (q.type === 'fill_blank') return Array.isArray(draft) && draft.every((s) => String(s || '').trim() !== '');
    return String(draft || '').trim() !== '';
  })();

  const lastRes = showFeedback ? answers[answers.length - 1] : null;
  const correctMc = q.type === 'multiple_choice' ? Number(q.answer) : null;

  return (
    <div className="app-panel" style={{ padding: '28px', borderRadius: '28px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Exam Prep</div>
          <div style={{ fontSize: '1.1rem', fontWeight: 900, color: '#1e1b4b' }}>Question {idx + 1} of {total}</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', fontWeight: 800, color: '#64748b', background: '#fff', padding: '6px 12px', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
          <Clock size={14} /> {q.timeLimit || 120}s
        </div>
      </div>
      <div style={{ width: '100%', height: '8px', background: '#e2e8f0', borderRadius: '4px', overflow: 'hidden' }}>
        <div style={{ height: '100%', width: `${((idx + (showFeedback ? 1 : 0)) / total) * 100}%`, background: '#7c3aed', transition: 'width 0.3s' }} />
      </div>

      {/* Question card */}
      <div style={{ background: '#fff', padding: '24px', borderRadius: '24px', border: '1px solid #e2e8f0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <span style={{ fontSize: '0.7rem', fontWeight: 800, background: '#e0e7ff', color: '#6366f1', padding: '4px 10px', borderRadius: '8px', textTransform: 'uppercase' }}>
            {q.topicTitle || q.chapterTitle}
          </span>
          {q.hint && (
            <button onClick={() => setShowHint((v) => !v)} style={{ background: showHint ? '#fef3c7' : '#fff7ed', border: 'none', padding: '6px 12px', borderRadius: '10px', color: '#d97706', fontSize: '0.75rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
              <Lightbulb size={14} /> {showHint ? 'Hide Hint' : 'Show Hint'}
            </button>
          )}
        </div>
        <MathView content={q.question} graphData={q.graphData} style={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#1e1b4b', fontWeight: 500 }} />
        <AnimatePresence>
          {showHint && q.hint && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} style={{ overflow: 'hidden' }}>
              <div style={{ marginTop: '14px', padding: '14px', borderRadius: '14px', background: '#fffbeb', border: '1px solid #fef3c7' }}>
                <MathView content={q.hint} style={{ color: '#92400e', fontSize: '0.9rem', fontWeight: 600 }} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Answer area */}
      {q.type === 'multiple_choice' ? (
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
              const ok = showFeedback && (lastRes?.userAnswer || [])[i] != null && lastRes.userAnswer[i] === draft[i] ? gradeQuestion(q, draft).perBlank?.[i] : null;
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
        // short_answer
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {MATH_SYMBOLS.map((s) => (
              <button key={s} onClick={() => !showFeedback && setDraft((draft || '') + s)} style={{ width: '40px', height: '40px', borderRadius: '10px', border: '1px solid #e2e8f0', background: '#fff', color: '#4f46e5', fontWeight: 800, cursor: 'pointer' }}>{s}</button>
            ))}
            <button onClick={() => !showFeedback && setDraft((draft || '').slice(0, -1))} style={{ width: '56px', height: '40px', borderRadius: '10px', border: '1px solid #fee2e2', background: '#fff1f2', color: '#e11d48', fontWeight: 900, cursor: 'pointer' }}>DEL</button>
          </div>
          <input
            type="text" value={draft || ''} readOnly={showFeedback}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="Type your answer…"
            style={{ padding: '20px', borderRadius: '20px', border: `2px solid ${showFeedback ? (lastRes?.correct ? '#10b981' : '#ef4444') : '#e2e8f0'}`, background: '#fff', fontWeight: 700, fontSize: '1.2rem', textAlign: 'center', fontFamily: '"KaTeX_Main", serif' }}
          />
          {showFeedback && !lastRes?.correct && (
            <div style={{ padding: '10px 14px', borderRadius: '12px', background: '#f0fdf4', border: '1px solid #bbf7d0', color: '#166534', fontWeight: 800, fontSize: '0.9rem' }}>
              Correct: <MathView content={String(q.answer)} style={{ display: 'inline' }} />
            </div>
          )}
        </div>
      )}

      {/* Action button */}
      {!showFeedback ? (
        <button onClick={submit} disabled={!canSubmit} className="app-button app-button--primary" style={{ padding: '16px', borderRadius: '18px', background: !canSubmit ? '#cbd5e1' : 'linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)', cursor: !canSubmit ? 'not-allowed' : 'pointer' }}>
          Submit Answer
        </button>
      ) : (
        <button onClick={advance} className="app-button app-button--primary" style={{ padding: '16px', borderRadius: '18px', background: 'linear-gradient(135deg, #a78bfa, #7c3aed)', display: 'inline-flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
          {idx + 1 >= total ? 'Finish round' : 'Next question'} <ArrowRight size={18} />
        </button>
      )}
    </div>
  );
};

// ── Result screen ──────────────────────────────────────────────────────
const ResultPanel = ({ result, onRestart, onExit, cumulativeAnalysis }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <div className="app-panel" style={{ padding: '28px', borderRadius: '28px', textAlign: 'center', background: 'linear-gradient(135deg, #ede9fe, #fff)' }}>
      <div style={{ width: '72px', height: '72px', borderRadius: '50%', background: 'linear-gradient(135deg, #a78bfa, #7c3aed)', display: 'grid', placeItems: 'center', color: '#fff', margin: '0 auto 14px' }}>
        <Trophy size={34} />
      </div>
      <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#94a3b8', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Round complete</div>
      <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#1e1b4b', margin: '6px 0' }}>{result.correct} / {result.total}</div>
      <div style={{ fontSize: '1rem', color: '#7c3aed', fontWeight: 800 }}>+{result.xp} XP earned</div>
    </div>

    <div className="app-panel" style={{ padding: '24px', borderRadius: '24px' }}>
      <h4 style={{ margin: '0 0 14px', color: '#1e1b4b', fontWeight: 900, fontSize: '0.95rem' }}>This round by topic</h4>
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

    <TopicAnalysisCard analysis={cumulativeAnalysis} />

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
      <button onClick={onExit} className="app-button" style={{ padding: '16px', borderRadius: '18px', background: '#fff', color: '#475569', fontWeight: 800, border: '1px solid #e2e8f0', display: 'inline-flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
        <ArrowLeft size={16} /> Back to setup
      </button>
      <button onClick={onRestart} className="app-button app-button--primary" style={{ padding: '16px', borderRadius: '18px', background: 'linear-gradient(135deg, #a78bfa, #7c3aed)', display: 'inline-flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
        <RotateCcw size={16} /> Start a new round
      </button>
    </div>
  </div>
);

// ── Top-level ExamPrep page ────────────────────────────────────────────
const ExamPrep = ({ profile }) => {
  const { user } = useAuth();
  const uid = user?.uid;
  const enabled = profile?.examPrepEnabled === true;

  const [selection, setSelectionState] = useState(() => uid ? getSelection(uid) : { years: [], chapters: [] });
  const [stage, setStage] = useState('setup'); // 'setup' | 'quiz' | 'result'
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [analysis, setAnalysis] = useState(() => uid ? getTopicAnalysis(uid) : []);
  const [stats, setStats] = useState(() => uid ? getStats(uid) : { sessions: 0, correct: 0, attempted: 0 });

  useEffect(() => {
    if (!uid) return;
    setSelectionState(getSelection(uid));
    setAnalysis(getTopicAnalysis(uid));
    setStats(getStats(uid));
  }, [uid]);

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

  const handleSelectionChange = (next) => {
    setSelectionState(next);
    if (uid) setSelection(uid, next);
  };

  const handleStart = async () => {
    if (!uid) return;
    setLoading(true);
    try {
      const { questions: q } = await startRound(uid, selection);
      if (!q || q.length === 0) {
        alert('No questions found for the chosen chapters yet. Try adding more chapters.');
        return;
      }
      setQuestions(q);
      setStage('quiz');
    } finally {
      setLoading(false);
    }
  };

  const handleFinishRound = async (answers) => {
    if (!uid) return;
    const r = await finishRound(uid, answers, { questions });
    setResult(r);
    setAnalysis(getTopicAnalysis(uid));
    setStats(getStats(uid));
    setStage('result');
  };

  const handleRestart = async () => {
    setResult(null);
    setQuestions([]);
    await handleStart();
  };

  return (
    <div className="app-page" style={{ padding: '24px 20px 80px' }}>
      <div style={{ maxWidth: '780px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {stage === 'setup' && (
          <>
            <div className="app-panel" style={{ padding: '24px 28px', borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
              <div>
                <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#94a3b8', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Cumulative</div>
                <h2 style={{ margin: '4px 0 0', fontWeight: 900, color: '#1e1b4b' }}>Exam Prep</h2>
              </div>
              <div style={{ display: 'flex', gap: '14px' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '0.65rem', fontWeight: 800, color: '#94a3b8', letterSpacing: '0.1em' }}>SESSIONS</div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#7c3aed' }}>{stats.sessions}</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '0.65rem', fontWeight: 800, color: '#94a3b8', letterSpacing: '0.1em' }}>ACCURACY</div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#10b981' }}>{stats.attempted > 0 ? Math.round((stats.correct / stats.attempted) * 100) : 0}%</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '0.65rem', fontWeight: 800, color: '#94a3b8', letterSpacing: '0.1em' }}>ATTEMPTED</div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#1e1b4b' }}>{stats.attempted}</div>
                </div>
              </div>
            </div>

            <SelectionPanel uid={uid} selection={selection} onChange={handleSelectionChange} onStart={handleStart} hasPool={false} />
            <TopicAnalysisCard analysis={analysis} />
            {loading && <div style={{ textAlign: 'center', color: '#7c3aed', fontWeight: 800 }}>Loading questions…</div>}
          </>
        )}

        {stage === 'quiz' && questions.length > 0 && (
          <QuizView questions={questions} onFinish={handleFinishRound} />
        )}

        {stage === 'result' && result && (
          <ResultPanel result={result} onRestart={handleRestart} onExit={() => setStage('setup')} cumulativeAnalysis={analysis} />
        )}
      </div>
    </div>
  );
};

export default ExamPrep;
