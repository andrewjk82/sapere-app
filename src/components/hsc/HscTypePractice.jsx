import { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { doc, getDoc, collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { ChevronRight, Trophy, Target, Compass } from 'lucide-react';
import HscTypePracticeSession from './HscTypePracticeSession';
import DnaMasteryPanel from './DnaMasteryPanel';

// Simple, modern card system for this page — Outfit for titles (matches the
// app's --font-heading token), Inter for body, purple accent kept consistent
// with the rest of Sapere1. Every card (Focus / Warmup / Type) shares the
// same shape: white surface, thin border, a small coloured accent, title,
// one line of meta. No separate visual language per section.
const HEADING = "'Outfit', sans-serif";

// ─── Question DNA — "Focus for you" ────────────────────────────────────────
// personal_priority = 0.55 * hsc priority + 0.45 * (100 - student mastery).
// Unattempted DNA (mastery 0) surfaces to the top when it's also high-priority
// — see tools/dna/dnaTaxonomy.js and the master-prompt ingestion pipeline
// this data was classified with (tools/dna/output/).
const priorityLabel = (score) => {
  if (score >= 90) return { text: 'Critical', color: '#dc2626' };
  if (score >= 80) return { text: 'High', color: '#c2410c' };
  if (score >= 65) return { text: 'Medium', color: '#a16207' };
  return { text: 'Maintain', color: '#64748b' };
};

const computeFocusDna = (dnaList, dnaStats) => {
  return dnaList
    .filter(d => (d.count || 0) > 0)
    .map(d => {
      const stat = dnaStats[d.dnaId];
      const mastery = stat?.total > 0 ? (100 * stat.correct / stat.total) : 0;
      const personalPriority = 0.55 * (d.priorityScore || 50) + 0.45 * (100 - mastery);
      return { ...d, mastery, personalPriority, attempted: !!stat?.total };
    })
    .sort((a, b) => b.personalPriority - a.personalPriority)
    .slice(0, 3);
};

// ─── Pastel green fill based on accuracy ─────────────────────────────────────
// 0%: white, 1–39%: lightest, 40–69%: light, 70–89%: medium, 90–100%: full
function accuracyStyle(pct) {
  if (pct === null || pct === undefined) return { bg: '#ffffff', border: '#e2e8f0', label: null };
  if (pct >= 90) return { bg: '#f0fdf4', border: '#86efac', label: '#15803d' };
  if (pct >= 70) return { bg: '#f0fdf4', border: '#a7f3d0', label: '#16a34a' };
  if (pct >= 40) return { bg: '#ffffff', border: '#a7f3d0', label: '#22c55e' };
  if (pct > 0)   return { bg: '#ffffff', border: '#bbf7d0', label: '#4ade80' };
  return { bg: '#ffffff', border: '#e2e8f0', label: null };
}

// ─── Section label — plain, consistent heading for each of the three tiers ──
const SectionLabel = ({ icon, title, caption }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
    {icon}
    <span style={{ fontFamily: HEADING, fontWeight: 600, fontSize: '0.95rem', color: '#1e1b4b' }}>{title}</span>
    <span style={{ fontSize: '0.78rem', color: '#94a3b8' }}>{caption}</span>
  </div>
);

// ─── Small spotlight card — shared shape for Focus + Warmup items ──────────
const SpotlightCard = ({ accent, eyebrow, title, meta, onClick }) => (
  <motion.button
    whileHover={{ y: -2, borderColor: accent }}
    onClick={onClick}
    style={{
      display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'flex-start',
      padding: '14px 16px', borderRadius: '14px', border: '1px solid #e2e8f0', borderLeft: `3px solid ${accent}`,
      background: '#fff', cursor: 'pointer', textAlign: 'left', minWidth: '190px', flex: '1 1 220px',
      transition: 'border-color 0.15s',
    }}
  >
    {eyebrow}
    <span style={{ fontFamily: HEADING, fontWeight: 600, fontSize: '0.92rem', color: '#1e1b4b', lineHeight: 1.3 }}>{title}</span>
    {meta}
  </motion.button>
);

// ─── Single type card ─────────────────────────────────────────────────────────
const TypeCard = ({ type, stats, onClick }) => {
  const pct = stats ? Math.round((stats.mastered / stats.total) * 100) : null;
  const attempted = stats?.total > 0;
  const { bg, border, label } = accuracyStyle(pct);

  return (
    <motion.div
      whileHover={{ y: -3, boxShadow: '0 10px 28px rgba(30,27,75,0.08)' }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      style={{
        background: bg,
        border: `1px solid ${border}`,
        borderRadius: '16px',
        padding: '20px',
        minHeight: '168px',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        transition: 'background 0.2s, border 0.2s',
      }}
    >
      <div style={{ fontFamily: HEADING, fontWeight: 600, fontSize: '1rem', color: '#1e1b4b', lineHeight: 1.3 }}>
        {type.label}
      </div>

      <div
        title={type.description}
        style={{
          fontSize: '0.8rem', color: '#64748b', lineHeight: 1.55, flex: 1,
          display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden',
        }}
      >
        {type.description}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '4px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 500 }}>{type.count} questions</span>
          {type.examLevel && type.examLevel !== 'Both' && (
            <span style={{ fontSize: '0.68rem', fontWeight: 600, color: '#7c3aed', background: '#f5f3ff', padding: '2px 8px', borderRadius: '6px' }}>
              {type.examLevel}
            </span>
          )}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          {attempted ? (
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: label || '#64748b' }}>{pct}%</span>
          ) : (
            <span style={{ fontSize: '0.75rem', fontWeight: 500, color: '#cbd5e1' }}>Not started</span>
          )}
          <ChevronRight size={14} color="#cbd5e1" />
        </div>
      </div>
    </motion.div>
  );
};

// ─── DNA reasoning-blueprint warmups — always visible, unlike "Focus for
// you" which only surfaces the top-3 by personal_priority (a low-priority
// DNA like FIN-GP-01 can have a blueprint but never rank into that top 3).
// See DnaReasoningWarmup.jsx / dnaTaxonomy.js reasoningBlueprint.
const ReasoningWarmupSection = ({ items, onSelect }) => {
  if (!items.length) return null;
  return (
    <div>
      <SectionLabel
        icon={<Compass size={16} color="#6366f1" />}
        title="Reasoning warmups"
        caption="a quick check before the real questions"
      />
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {items.map(d => (
          <SpotlightCard
            key={d.dnaId}
            accent="#6366f1"
            title={d.skill}
            onClick={() => onSelect(d)}
            meta={<span style={{ fontSize: '0.72rem', color: '#94a3b8' }}>{d.reasoningBlueprint.length} steps</span>}
          />
        ))}
      </div>
    </div>
  );
};

// ─── "Focus for you" section ────────────────────────────────────────────────
const FocusSection = ({ items, onSelect }) => {
  if (!items.length) return null;
  return (
    <div>
      <SectionLabel
        icon={<Target size={16} color="#dc2626" />}
        title="Focus for you"
        caption="highest HSC value where you have the biggest gap"
      />
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {items.map(d => {
          const badge = priorityLabel(d.priorityScore);
          return (
            <SpotlightCard
              key={d.dnaId}
              accent={badge.color}
              title={d.skill}
              onClick={() => onSelect(d)}
              eyebrow={<span style={{ fontSize: '0.68rem', fontWeight: 600, color: badge.color }}>{badge.text}</span>}
              meta={
                <span style={{ fontSize: '0.72rem', color: '#94a3b8' }}>
                  {d.attempted ? `${Math.round(d.mastery)}% mastered` : 'Not started'}
                </span>
              }
            />
          );
        })}
      </div>
    </div>
  );
};

// ─── Main component ───────────────────────────────────────────────────────────
const HscTypePractice = ({ profile }) => {
  const [types, setTypes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({}); // typeSlug → { correct, total }
  const [activeType, setActiveType] = useState(null); // type object for session
  const [filterLevel, setFilterLevel] = useState('All'); // 'All' | 'Advanced' | 'Extension 1'
  const [dnaList, setDnaList] = useState([]); // question_dna docs
  const [dnaStats, setDnaStats] = useState({}); // dnaId → { correct, total }

  // ── Load Question DNA taxonomy (static-ish, 33 tiny docs, one read each) ──
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const snap = await getDocs(collection(db, 'question_dna'));
        if (!cancelled) setDnaList(snap.docs.map(d => ({ dnaId: d.id, ...d.data() })));
      } catch (e) {
        console.warn('Failed to load question DNA:', e);
      }
    })();
    return () => { cancelled = true; };
  }, []);

  // ── Load per-DNA mastery stats for this student ────────────────────────────
  useEffect(() => {
    if (!profile?.uid) return;
    let cancelled = false;
    (async () => {
      try {
        const statsDoc = await getDoc(doc(db, 'users', profile.uid, 'hsc_dna_stats', 'main'));
        if (!cancelled && statsDoc.exists()) setDnaStats(statsDoc.data() || {});
      } catch (e) {
        console.warn('Failed to load hsc dna stats:', e);
      }
    })();
    return () => { cancelled = true; };
  }, [profile?.uid]);

  const focusDna = useMemo(() => computeFocusDna(dnaList, dnaStats), [dnaList, dnaStats]);
  const warmupDna = useMemo(() => dnaList.filter(d => d.reasoningBlueprint?.length), [dnaList]);

  // ── Load type definitions ──────────────────────────────────────────────────
  useEffect(() => {
    let cancelled = false;
    (async () => {
      setLoading(true);
      try {
        const snap = await getDocs(collection(db, 'question_types'));
        if (cancelled) return;
        const list = snap.docs
          .map(d => ({ id: d.id, ...d.data() }))
          .sort((a, b) => (b.count || 0) - (a.count || 0));
        setTypes(list);
      } catch (e) {
        console.warn('Failed to load question types:', e);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, []);

  // ── Load per-type accuracy stats for this student ─────────────────────────
  useEffect(() => {
    if (!profile?.uid) return;
    let cancelled = false;
    (async () => {
      try {
        const statsDoc = await getDoc(doc(db, 'users', profile.uid, 'hsc_type_stats', 'main'));
        if (!cancelled && statsDoc.exists()) {
          setStats(statsDoc.data() || {});
        }
      } catch (e) {
        console.warn('Failed to load hsc type stats:', e);
      }
    })();
    return () => { cancelled = true; };
  }, [profile?.uid]);

  const filteredTypes = types.filter(t => {
    if (filterLevel === 'All') return true;
    return t.examLevel === filterLevel || t.examLevel === 'Both';
  });

  const dnaLabels = useMemo(() => Object.fromEntries(dnaList.map(d => [d.dnaId, d.skill])), [dnaList]);

  // ── Session active — rendered as full-screen portal to hide sidebar ──────────
  const sessionPortal = activeType ? createPortal(
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9999,
      background: '#f8fafc',
      overflowY: 'auto',
      padding: 'clamp(16px, 3vw, 28px)',
    }}>
      <HscTypePracticeSession
        type={activeType}
        profile={profile}
        initialStats={activeType.dnaFocus ? dnaStats[activeType.slug] : stats[activeType.slug]}
        dnaLabels={dnaLabels}
        onBack={(updatedStats) => {
          if (updatedStats) {
            if (activeType.dnaFocus) {
              setDnaStats(prev => ({ ...prev, [activeType.slug]: updatedStats }));
            } else {
              setStats(prev => ({ ...prev, [activeType.slug]: updatedStats }));
            }
          }
          setActiveType(null);
        }}
      />
    </div>,
    document.body
  ) : null;

  // ── Cards grid ─────────────────────────────────────────────────────────────
  const totalAttempted = Object.values(stats).filter(s => s?.total > 0).length;
  const totalMastered = Object.values(stats).filter(s => s?.total > 0 && s.mastered >= s.total).length;

  return (
    <>
    {sessionPortal}
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#7c3aed', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '6px' }}>
            HSC Past Paper Practice
          </div>
          <h2 style={{ margin: 0, fontFamily: HEADING, fontSize: '1.7rem', fontWeight: 700, color: '#1e1b4b' }}>
            Practice by Type
          </h2>
          <div style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '6px' }}>
            Questions from real HSC trial papers, grouped by technique
          </div>
        </div>

        {/* Progress summary */}
        {types.length > 0 && (
          <div style={{ display: 'flex', gap: '10px' }}>
            <div style={{ padding: '10px 18px', borderRadius: '14px', background: '#fff', border: '1px solid #e2e8f0', textAlign: 'center' }}>
              <div style={{ fontFamily: HEADING, fontSize: '1.25rem', fontWeight: 700, color: '#1e1b4b' }}>{totalAttempted}</div>
              <div style={{ fontSize: '0.68rem', fontWeight: 600, color: '#94a3b8' }}>Started</div>
            </div>
            <div style={{ padding: '10px 18px', borderRadius: '14px', background: '#fff', border: '1px solid #e2e8f0', textAlign: 'center', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Trophy size={16} color="#16a34a" />
              <div>
                <div style={{ fontFamily: HEADING, fontSize: '1.25rem', fontWeight: 700, color: '#1e1b4b', lineHeight: 1.1 }}>{totalMastered}</div>
                <div style={{ fontSize: '0.68rem', fontWeight: 600, color: '#94a3b8' }}>Mastered</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Focus for you — DNA-level personal priority */}
      <FocusSection
        items={focusDna}
        onSelect={(d) => setActiveType({ slug: d.dnaId, label: d.skill, dnaFocus: true, reasoningBlueprint: d.reasoningBlueprint })}
      />

      {/* Reasoning warmups — always visible, regardless of Focus ranking */}
      <ReasoningWarmupSection
        items={warmupDna}
        onSelect={(d) => setActiveType({ slug: d.dnaId, label: d.skill, dnaFocus: true, reasoningBlueprint: d.reasoningBlueprint })}
      />

      {/* 6-axis reasoning profile — only renders once there's evidence */}
      <DnaMasteryPanel dnaLabels={dnaLabels} />

      {/* Filter pills */}
      <div style={{ display: 'flex', gap: '8px' }}>
        {['All', 'Advanced', 'Extension 1'].map(level => (
          <button
            key={level}
            onClick={() => setFilterLevel(level)}
            style={{
              padding: '7px 16px', borderRadius: '10px', border: '1px solid', cursor: 'pointer',
              fontWeight: 600, fontSize: '0.8rem',
              borderColor: filterLevel === level ? '#7c3aed' : '#e2e8f0',
              background: filterLevel === level ? '#7c3aed' : '#fff',
              color: filterLevel === level ? '#fff' : '#64748b',
              transition: 'all 0.15s',
            }}
          >
            {level}
          </button>
        ))}
      </div>

      {/* Cards */}
      {loading ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} style={{ height: '130px', borderRadius: '16px', background: '#f1f5f9', animation: 'pulse 1.5s infinite' }} />
          ))}
        </div>
      ) : filteredTypes.length === 0 ? (
        <div style={{ padding: '48px', textAlign: 'center', color: '#94a3b8', fontWeight: 600 }}>
          No question types found. Run the import script first.
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
          <AnimatePresence>
            {filteredTypes.map((type, i) => (
              <motion.div
                key={type.slug}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.03, duration: 0.25 }}
              >
                <TypeCard
                  type={type}
                  stats={stats[type.slug]}
                  onClick={() => setActiveType(type)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
    </>
  );
};

export default HscTypePractice;
