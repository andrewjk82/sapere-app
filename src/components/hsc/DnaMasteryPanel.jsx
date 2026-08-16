import { useEffect, useMemo, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { BarChart3 } from 'lucide-react';
import { db } from '../../firebase/config';
import { useAuth } from '../../context/AuthContext';

// 6-axis student model (Sapere_Question_DNA_v2.0 §8/§11) — reads this
// student's own users/{uid}/dna_step_evidence (small subcollection, bounded
// by how many reasoning steps they've actually done — a full read of one's
// own subcollection, not a cross-user scan) and aggregates correct/total
// per (dna_id, axis). All 6 axes are now wired up — recognition,
// strategy_selection, execution from reasoning-blueprint pre-steps;
// verification from a Guided/Scaffolded final answer; transfer from a
// Transfer-mode final answer; backward_reasoning from 5 real
// FIN-INTEREST-01 steps retagged 2026-08-16 as the §7/§12 Prototype B
// validation (present-value "reverse the growth relationship" steps —
// see tools/scripts/tagBackwardReasoningD5.mjs). This is deliberately
// "evidence, not a single score" — the whole point per doc §11 is that a
// student can be strong on execution and weak on strategy_selection, and
// that shouldn't collapse into one percentage.
const AXIS_LABELS = {
  recognition: 'Recognition',
  strategy_selection: 'Strategy selection',
  execution: 'Execution',
  verification: 'Verification',
  transfer: 'Transfer',
  backward_reasoning: 'Backward reasoning',
};
const AXIS_ORDER = ['recognition', 'strategy_selection', 'execution', 'verification', 'transfer', 'backward_reasoning'];

function aggregate(evidenceDocs) {
  const byDna = new Map(); // dna_id -> { axis -> {correct, total} }
  for (const e of evidenceDocs) {
    if (!e.dna_id || !e.axis) continue;
    if (!byDna.has(e.dna_id)) byDna.set(e.dna_id, {});
    const axes = byDna.get(e.dna_id);
    if (!axes[e.axis]) axes[e.axis] = { correct: 0, total: 0 };
    axes[e.axis].total += 1;
    if (e.correct) axes[e.axis].correct += 1;
  }
  return byDna;
}

const AxisBar = ({ label, stat }) => {
  const pct = stat ? Math.round((100 * stat.correct) / stat.total) : null;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem' }}>
        <span style={{ color: '#64748b', fontWeight: 500 }}>{label}</span>
        <span style={{ color: pct === null ? '#cbd5e1' : '#1e1b4b', fontWeight: 700 }}>
          {pct === null ? 'No data' : `${pct}%`}
        </span>
      </div>
      <div style={{ height: '6px', background: '#f1f5f9', borderRadius: '999px', overflow: 'hidden' }}>
        <div style={{
          height: '100%', width: `${pct ?? 0}%`, borderRadius: '999px',
          background: pct === null ? 'transparent' : pct >= 70 ? '#22c55e' : pct >= 40 ? '#f59e0b' : '#ef4444',
          transition: 'width 0.4s ease',
        }} />
      </div>
    </div>
  );
};

const DnaMasteryPanel = ({ dnaLabels = {} }) => {
  const { user } = useAuth();
  const [evidence, setEvidence] = useState(null); // null = loading

  useEffect(() => {
    if (!user?.uid) return;
    let cancelled = false;
    (async () => {
      try {
        const snap = await getDocs(collection(db, 'users', user.uid, 'dna_step_evidence'));
        if (!cancelled) setEvidence(snap.docs.map((d) => d.data()));
      } catch (e) {
        console.warn('Failed to load dna_step_evidence:', e);
        if (!cancelled) setEvidence([]);
      }
    })();
    return () => { cancelled = true; };
  }, [user?.uid]);

  const byDna = useMemo(() => (evidence ? aggregate(evidence) : new Map()), [evidence]);

  if (!evidence || byDna.size === 0) return null; // nothing to show yet — don't clutter the page with an empty panel

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
        <BarChart3 size={16} color="#0891b2" />
        <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: '0.95rem', color: '#1e1b4b' }}>Your reasoning profile</span>
        <span style={{ fontSize: '0.78rem', color: '#94a3b8' }}>from the reasoning steps you've completed</span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '12px' }}>
        {[...byDna.entries()].map(([dnaId, axes]) => (
          <div key={dnaId} style={{ padding: '16px', borderRadius: '14px', border: '1px solid #e2e8f0', background: '#fff', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: '0.85rem', color: '#1e1b4b' }}>
              {dnaLabels[dnaId] || dnaId}
            </div>
            {AXIS_ORDER.filter((axis) => axes[axis]).map((axis) => (
              <AxisBar key={axis} label={AXIS_LABELS[axis]} stat={axes[axis]} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DnaMasteryPanel;
