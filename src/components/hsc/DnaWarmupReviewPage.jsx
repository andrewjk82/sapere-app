import { useEffect, useMemo, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search, Shuffle } from 'lucide-react';
import { db } from '../../firebase/config';
import ReasoningStepCard from './ReasoningStepCard';

// Teacher-facing QA page: browse every DNA's warmup pool (the randomized
// pre-question step bank in DnaReasoningWarmup.jsx) in one place, without
// having to start a student practice session and hope a specific step gets
// randomly drawn. Read-only — no editing here, this is purely for review.
//
// Requested 2026-08-16 after the CALC-DIFF-01 warmup pool expanded from a
// fixed 3 steps to a randomized pool of 24: there was no way to see the
// other 23 short of repeatedly restarting a session and getting lucky.

const HEADING = "'Outfit', sans-serif";

const DnaCard = ({ dna, expanded, onToggle }) => {
  const poolSize = dna.reasoningBlueprint?.length || 0;
  return (
    <div style={{ borderRadius: '18px', background: '#fff', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
      <button
        onClick={onToggle}
        style={{
          width: '100%', display: 'flex', alignItems: 'center', gap: '12px', padding: '16px 18px',
          background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left',
        }}
      >
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontFamily: HEADING, fontWeight: 700, fontSize: '0.98rem', color: '#1e1b4b' }}>
            {dna.skill || dna.dnaId}
          </div>
          <div style={{ fontSize: '0.76rem', color: '#94a3b8', marginTop: '2px' }}>
            {dna.dnaId} · {dna.family || '—'}
          </div>
        </div>
        <span style={{
          display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.76rem', fontWeight: 800,
          color: '#7c3aed', background: '#f5f3ff', border: '1px solid #e0e7ff', borderRadius: '999px', padding: '4px 11px',
        }}>
          <Shuffle size={11} /> {poolSize} in pool
        </span>
        <ChevronDown size={18} color="#94a3b8" style={{ transform: expanded ? 'rotate(180deg)' : 'none', transition: 'transform 0.15s', flexShrink: 0 }} />
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
              {dna.reasoningBlueprint.map((step) => (
                <ReasoningStepCard key={step.step_id} step={step} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const DnaWarmupReviewPage = () => {
  const [dnaList, setDnaList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const snap = await getDocs(collection(db, 'question_dna'));
        if (!cancelled) {
          setDnaList(snap.docs.map((d) => ({ dnaId: d.id, ...d.data() })));
        }
      } catch (e) {
        console.warn('Failed to load question DNA:', e);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, []);

  const withPool = useMemo(
    () => dnaList
      .filter((d) => d.reasoningBlueprint?.length)
      .sort((a, b) => (b.reasoningBlueprint.length - a.reasoningBlueprint.length)),
    [dnaList]
  );

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return withPool;
    return withPool.filter((d) =>
      d.dnaId.toLowerCase().includes(q) ||
      (d.skill || '').toLowerCase().includes(q) ||
      (d.family || '').toLowerCase().includes(q)
    );
  }, [withPool, search]);

  return (
    <div style={{ maxWidth: '840px', margin: '0 auto', padding: '24px 16px' }}>
      <div style={{ marginBottom: '20px' }}>
        <h1 style={{ fontFamily: HEADING, fontWeight: 800, fontSize: '1.4rem', color: '#1e1b4b', margin: 0 }}>
          DNA Warmup Review
        </h1>
        <p style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '4px' }}>
          Every step in each DNA's randomized warmup pool — students see 3 picked at random per session.
        </p>
      </div>

      <div style={{ position: 'relative', marginBottom: '18px' }}>
        <Search size={16} color="#94a3b8" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by DNA id, skill, or family…"
          style={{
            width: '100%', padding: '11px 14px 11px 38px', borderRadius: '14px',
            border: '1px solid #e2e8f0', fontSize: '0.88rem', outline: 'none', boxSizing: 'border-box',
          }}
        />
      </div>

      {loading && (
        <div style={{ textAlign: 'center', padding: '40px', color: '#94a3b8', fontSize: '0.85rem' }}>Loading…</div>
      )}

      {!loading && filtered.length === 0 && (
        <div style={{ textAlign: 'center', padding: '40px', color: '#94a3b8', fontSize: '0.85rem' }}>
          {withPool.length === 0 ? 'No DNA has a warmup pool yet.' : 'No DNA matches your search.'}
        </div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {filtered.map((dna) => (
          <DnaCard
            key={dna.dnaId}
            dna={dna}
            expanded={expandedId === dna.dnaId}
            onToggle={() => setExpandedId((id) => (id === dna.dnaId ? null : dna.dnaId))}
          />
        ))}
      </div>
    </div>
  );
};

export default DnaWarmupReviewPage;
