import { useEffect, useMemo, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { BarChart3, Gauge } from 'lucide-react';
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

// Confidence calibration (Sapere_Question_DNA_v2.0 §10, added 2026-08-16) —
// derived from the same already-fetched evidence array, no new query. Only
// FINAL-answer evidence carries `confidence` (see HscTypePracticeSession.jsx).
// Reused across every DNA (not split per-DNA) since per-DNA sample sizes are
// usually too small to say anything meaningful about calibration.
const CONFIDENCE_LEVELS = ['confident', 'unsure', 'guessing'];
const CONFIDENCE_LABELS = { confident: 'Confident', unsure: 'Unsure', guessing: 'Guessing' };
const MIN_SAMPLE_FOR_INSIGHT = 3;

function aggregateConfidence(evidenceDocs) {
  const byLevel = {};
  for (const e of evidenceDocs) {
    if (e.step_id !== 'FINAL' || !CONFIDENCE_LEVELS.includes(e.confidence)) continue;
    if (!byLevel[e.confidence]) byLevel[e.confidence] = { correct: 0, total: 0 };
    byLevel[e.confidence].total += 1;
    if (e.correct) byLevel[e.confidence].correct += 1;
  }
  return byLevel;
}

const ConfidenceBar = ({ label, stat }) => {
  const pct = stat ? Math.round((100 * stat.correct) / stat.total) : null;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem' }}>
        <span style={{ color: '#64748b', fontWeight: 500 }}>{label}{stat ? ` (${stat.total})` : ''}</span>
        <span style={{ color: pct === null ? '#cbd5e1' : '#1e1b4b', fontWeight: 700 }}>
          {pct === null ? 'No data' : `${pct}% correct`}
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

// Simple, honest calibration read — only speaks up when there's enough
// sample to say something, and never for "unsure" (that level is expected
// to sit in the middle, nothing surprising either way).
function calibrationInsight(byLevel) {
  const confident = byLevel.confident;
  const guessing = byLevel.guessing;
  const insights = [];
  if (confident && confident.total >= MIN_SAMPLE_FOR_INSIGHT) {
    const pct = Math.round((100 * confident.correct) / confident.total);
    if (pct < 60) {
      insights.push(`You said "Confident" ${confident.total} times but were only right ${pct}% of the time — worth double-checking your reasoning even when an answer feels obvious.`);
    }
  }
  if (guessing && guessing.total >= MIN_SAMPLE_FOR_INSIGHT) {
    const pct = Math.round((100 * guessing.correct) / guessing.total);
    if (pct > 50) {
      insights.push(`You said "Guessing" ${guessing.total} times but were right ${pct}% of the time — you may understand more than you think.`);
    }
  }
  return insights;
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
  const byConfidence = useMemo(() => (evidence ? aggregateConfidence(evidence) : {}), [evidence]);
  const hasConfidenceData = Object.keys(byConfidence).length > 0;
  const insights = useMemo(() => (hasConfidenceData ? calibrationInsight(byConfidence) : []), [byConfidence, hasConfidenceData]);

  if (!evidence || byDna.size === 0) return null; // nothing to show yet — don't clutter the page with an empty panel

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
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

      {/* Confidence calibration (Sapere_Question_DNA_v2.0 §10, 2026-08-16) —
          only rendered once there's at least one FINAL answer with a
          self-reported confidence level (the selector is optional, so this
          can legitimately stay empty for a while). */}
      {hasConfidenceData && (
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
            <Gauge size={16} color="#0891b2" />
            <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: '0.95rem', color: '#1e1b4b' }}>Confidence check</span>
            <span style={{ fontSize: '0.78rem', color: '#94a3b8' }}>how your "how sure are you" answers match reality</span>
          </div>
          <div style={{ padding: '16px', borderRadius: '14px', border: '1px solid #e2e8f0', background: '#fff', display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '360px' }}>
            {CONFIDENCE_LEVELS.map((level) => (
              <ConfidenceBar key={level} label={CONFIDENCE_LABELS[level]} stat={byConfidence[level]} />
            ))}
          </div>
          {insights.length > 0 && (
            <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {insights.map((text, i) => (
                <div key={i} style={{ fontSize: '0.8rem', color: '#92400e', background: '#fffbeb', border: '1px solid #fde68a', borderRadius: '10px', padding: '8px 12px' }}>
                  {text}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DnaMasteryPanel;
