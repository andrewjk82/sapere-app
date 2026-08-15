import { useEffect, useMemo, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search, ListChecks } from 'lucide-react';
import { db } from '../../firebase/config';
import MathView from '../MathView';
import ReasoningStepCard from './ReasoningStepCard';

// Teacher-facing QA page: browse every question that has its own
// question-specific pre-steps (questions/{id}.reasoning_blueprint — the
// per-question sibling of the DNA-generic warmup pool shown in
// DnaWarmupReviewPage.jsx), so a teacher can review the actual question
// alongside its pre-steps without stepping through a live practice session.
//
// Query: `where('hasReasoningBlueprint', '==', true)` — a normal indexed
// equality query, NOT a scan of the questions collection (see
// tools/scripts/backfillReasoningBlueprintFlag.js, which backfilled this
// flag onto every question a reasoning_blueprint was actually added to).
// Bounded to however many questions carry the flag (154 as of 2026-08-16).
//
// Requested 2026-08-16, right after DnaWarmupReviewPage.jsx: "각 문제마다
// 사전단계도 선생님이 미리 확인할수 있으면 좋겟어" — same review need, one
// level down (per-question instead of per-DNA-generic-pool).

const HEADING = "'Outfit', sans-serif";

const QuestionCard = ({ q, expanded, onToggle }) => {
  const stepCount = q.reasoning_blueprint?.length || 0;
  const questionText = q.q || q.question || '(no question text)';
  return (
    <div style={{ borderRadius: '18px', background: '#fff', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
      <button
        onClick={onToggle}
        style={{
          width: '100%', display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '16px 18px',
          background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left',
        }}
      >
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: HEADING, fontWeight: 700, fontSize: '0.82rem', color: '#7c3aed' }}>
              {q.dnaId || 'unclassified'}
            </span>
            <span style={{ fontSize: '0.7rem', color: '#94a3b8' }}>·</span>
            <span style={{ fontSize: '0.72rem', color: '#94a3b8' }}>{q.id}</span>
            {q.type === 'teacher_review' && (
              <span style={{ fontSize: '0.66rem', fontWeight: 800, color: '#a16207', background: '#fffbeb', border: '1px solid #fde68a', borderRadius: '999px', padding: '1px 8px' }}>
                teacher_review
              </span>
            )}
          </div>
          <div style={{ fontSize: '0.87rem', color: '#1e293b', lineHeight: 1.45 }}>
            <MathView content={questionText} inline style={{ display: 'inline' }} />
          </div>
        </div>
        <span style={{
          display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.76rem', fontWeight: 800,
          color: '#7c3aed', background: '#f5f3ff', border: '1px solid #e0e7ff', borderRadius: '999px', padding: '4px 11px',
          flexShrink: 0, whiteSpace: 'nowrap', marginTop: '2px',
        }}>
          <ListChecks size={11} /> {stepCount} step{stepCount === 1 ? '' : 's'}
        </span>
        <ChevronDown size={18} color="#94a3b8" style={{ transform: expanded ? 'rotate(180deg)' : 'none', transition: 'transform 0.15s', flexShrink: 0, marginTop: '2px' }} />
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{ padding: '0 18px 18px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {q.reasoning_blueprint.map((step) => (
                <ReasoningStepCard key={step.step_id} step={step} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const QuestionPreStepsReviewPage = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [dnaFilter, setDnaFilter] = useState('All');
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const q = query(collection(db, 'questions'), where('hasReasoningBlueprint', '==', true));
        const snap = await getDocs(q);
        if (!cancelled) {
          setQuestions(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
        }
      } catch (e) {
        console.warn('Failed to load questions with pre-steps:', e);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, []);

  const dnaOptions = useMemo(() => {
    const set = new Set(questions.map((q) => q.dnaId).filter(Boolean));
    return ['All', ...Array.from(set).sort()];
  }, [questions]);

  const filtered = useMemo(() => {
    let list = questions;
    if (dnaFilter !== 'All') list = list.filter((q) => q.dnaId === dnaFilter);
    const s = search.trim().toLowerCase();
    if (s) {
      list = list.filter((q) =>
        q.id.toLowerCase().includes(s) ||
        (q.dnaId || '').toLowerCase().includes(s) ||
        (q.q || q.question || '').toLowerCase().includes(s)
      );
    }
    return [...list].sort((a, b) => (a.dnaId || '').localeCompare(b.dnaId || '') || a.id.localeCompare(b.id));
  }, [questions, dnaFilter, search]);

  return (
    <div style={{ maxWidth: '840px', margin: '0 auto', padding: '24px 16px' }}>
      <div style={{ marginBottom: '20px' }}>
        <h1 style={{ fontFamily: HEADING, fontWeight: 800, fontSize: '1.4rem', color: '#1e1b4b', margin: 0 }}>
          Question Pre-Steps Review
        </h1>
        <p style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '4px' }}>
          Every question that has its own question-specific pre-steps, alongside the real question they scaffold.
        </p>
      </div>

      <div style={{ display: 'flex', gap: '10px', marginBottom: '18px', flexWrap: 'wrap' }}>
        <div style={{ position: 'relative', flex: '1 1 240px' }}>
          <Search size={16} color="#94a3b8" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by question id, DNA, or question text…"
            style={{
              width: '100%', padding: '11px 14px 11px 38px', borderRadius: '14px',
              border: '1px solid #e2e8f0', fontSize: '0.88rem', outline: 'none', boxSizing: 'border-box',
            }}
          />
        </div>
        <select
          value={dnaFilter}
          onChange={(e) => setDnaFilter(e.target.value)}
          style={{
            padding: '11px 14px', borderRadius: '14px', border: '1px solid #e2e8f0',
            fontSize: '0.85rem', fontWeight: 600, color: '#374151', background: '#fff', cursor: 'pointer',
          }}
        >
          {dnaOptions.map((d) => (
            <option key={d} value={d}>{d === 'All' ? 'All DNAs' : d}</option>
          ))}
        </select>
      </div>

      {!loading && (
        <div style={{ fontSize: '0.78rem', color: '#94a3b8', marginBottom: '12px' }}>
          {filtered.length} of {questions.length} questions
        </div>
      )}

      {loading && (
        <div style={{ textAlign: 'center', padding: '40px', color: '#94a3b8', fontSize: '0.85rem' }}>Loading…</div>
      )}

      {!loading && filtered.length === 0 && (
        <div style={{ textAlign: 'center', padding: '40px', color: '#94a3b8', fontSize: '0.85rem' }}>
          {questions.length === 0 ? 'No questions have pre-steps yet.' : 'No question matches your search/filter.'}
        </div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {filtered.map((q) => (
          <QuestionCard
            key={q.id}
            q={q}
            expanded={expandedId === q.id}
            onToggle={() => setExpandedId((id) => (id === q.id ? null : q.id))}
          />
        ))}
      </div>
    </div>
  );
};

export default QuestionPreStepsReviewPage;
