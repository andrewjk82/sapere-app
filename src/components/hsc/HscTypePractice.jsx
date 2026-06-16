import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { doc, getDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { BookOpen, ChevronRight, Trophy, Zap, Clock } from 'lucide-react';
import HscTypePracticeSession from './HscTypePracticeSession';

// ─── Pastel green fill based on accuracy ─────────────────────────────────────
// 0%: white, 1–39%: lightest, 40–69%: light, 70–89%: medium, 90–100%: full
function accuracyStyle(pct) {
  if (pct === null || pct === undefined) return { bg: '#ffffff', border: '#e2e8f0', label: null };
  if (pct >= 90) return { bg: '#bbf7d0', border: '#86efac', label: '#14532d' };
  if (pct >= 70) return { bg: '#d1fae5', border: '#6ee7b7', label: '#166534' };
  if (pct >= 40) return { bg: '#ecfdf5', border: '#a7f3d0', label: '#16a34a' };
  if (pct > 0)   return { bg: '#f0fdf4', border: '#bbf7d0', label: '#22c55e' };
  return { bg: '#ffffff', border: '#e2e8f0', label: null };
}

// ─── Single type card ─────────────────────────────────────────────────────────
const TypeCard = ({ type, stats, onClick }) => {
  const pct = stats ? Math.round((stats.mastered / stats.total) * 100) : null;
  const attempted = stats?.total > 0;
  const { bg, border, label } = accuracyStyle(pct);

  return (
    <motion.div
      whileHover={{ y: -3, boxShadow: '0 12px 32px rgba(79,70,229,0.13)' }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      style={{
        background: bg,
        border: `1.5px solid ${border}`,
        borderRadius: '20px',
        padding: '20px',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        transition: 'background 0.3s, border 0.3s',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* accuracy fill bar at bottom */}
      {attempted && (
        <div style={{
          position: 'absolute', bottom: 0, left: 0,
          width: `${pct}%`, height: '4px',
          background: pct >= 90 ? '#22c55e' : pct >= 70 ? '#4ade80' : pct >= 40 ? '#86efac' : '#bbf7d0',
          borderRadius: '0 0 0 20px',
          transition: 'width 0.4s ease',
        }} />
      )}

      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '8px' }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 900, fontSize: '0.95rem', color: '#1e1b4b', lineHeight: 1.3, marginBottom: '4px' }}>
            {type.label}
          </div>
          <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600, lineHeight: 1.4 }}>
            {type.description}
          </div>
        </div>
        <div style={{
          width: '32px', height: '32px', borderRadius: '10px',
          background: attempted ? (pct >= 70 ? '#dcfce7' : '#e0e7ff') : '#f1f5f9',
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        }}>
          {attempted && pct >= 70
            ? <Trophy size={16} color="#16a34a" />
            : <BookOpen size={16} color={attempted ? '#6366f1' : '#94a3b8'} />}
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#94a3b8', background: '#f1f5f9', padding: '3px 8px', borderRadius: '6px' }}>
            {type.count} Q
          </span>
          {type.examLevel && type.examLevel !== 'Both' && (
            <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#7c3aed', background: '#f5f3ff', padding: '3px 8px', borderRadius: '6px' }}>
              {type.examLevel}
            </span>
          )}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          {attempted ? (
            <span style={{ fontSize: '0.88rem', fontWeight: 900, color: label || '#64748b' }}>
              {pct}%
            </span>
          ) : (
            <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#94a3b8' }}>Not started</span>
          )}
          <ChevronRight size={14} color="#94a3b8" />
        </div>
      </div>
    </motion.div>
  );
};

// ─── Main component ───────────────────────────────────────────────────────────
const HscTypePractice = ({ profile }) => {
  const [types, setTypes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({}); // typeSlug → { correct, total }
  const [activeType, setActiveType] = useState(null); // type object for session
  const [filterLevel, setFilterLevel] = useState('All'); // 'All' | 'Advanced' | 'Extension 1'

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

  // ── Session active ─────────────────────────────────────────────────────────
  if (activeType) {
    return (
      <HscTypePracticeSession
        type={activeType}
        profile={profile}
        initialStats={stats[activeType.slug]}
        onBack={(updatedStats) => {
          if (updatedStats) {
            setStats(prev => ({ ...prev, [activeType.slug]: updatedStats }));
          }
          setActiveType(null);
        }}
      />
    );
  }

  // ── Cards grid ─────────────────────────────────────────────────────────────
  const totalAttempted = Object.values(stats).filter(s => s?.total > 0).length;
  const totalMastered = Object.values(stats).filter(s => s?.total > 0 && s.mastered >= s.total).length;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <div style={{ fontSize: '0.72rem', fontWeight: 900, color: '#7c3aed', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '4px' }}>
            HSC Past Paper Practice
          </div>
          <h2 style={{ margin: 0, fontSize: '1.6rem', fontWeight: 900, color: '#1e1b4b' }}>
            Practice by Type
          </h2>
          <div style={{ fontSize: '0.82rem', color: '#64748b', fontWeight: 600, marginTop: '4px' }}>
            Questions from real HSC trial papers, grouped by technique
          </div>
        </div>

        {/* Progress summary */}
        {types.length > 0 && (
          <div style={{ display: 'flex', gap: '12px' }}>
            <div style={{ padding: '10px 16px', borderRadius: '14px', background: '#f5f3ff', border: '1px solid #e0e7ff', textAlign: 'center' }}>
              <div style={{ fontSize: '1.3rem', fontWeight: 900, color: '#7c3aed' }}>{totalAttempted}</div>
              <div style={{ fontSize: '0.68rem', fontWeight: 800, color: '#9ca3af', textTransform: 'uppercase' }}>Started</div>
            </div>
            <div style={{ padding: '10px 16px', borderRadius: '14px', background: '#f0fdf4', border: '1px solid #bbf7d0', textAlign: 'center' }}>
              <div style={{ fontSize: '1.3rem', fontWeight: 900, color: '#16a34a' }}>{totalMastered}</div>
              <div style={{ fontSize: '0.68rem', fontWeight: 800, color: '#9ca3af', textTransform: 'uppercase' }}>Mastered</div>
            </div>
          </div>
        )}
      </div>

      {/* Filter pills */}
      <div style={{ display: 'flex', gap: '8px' }}>
        {['All', 'Advanced', 'Extension 1'].map(level => (
          <button
            key={level}
            onClick={() => setFilterLevel(level)}
            style={{
              padding: '7px 16px', borderRadius: '999px', border: 'none', cursor: 'pointer',
              fontWeight: 800, fontSize: '0.8rem',
              background: filterLevel === level ? '#7c3aed' : '#f1f5f9',
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
            <div key={i} style={{ height: '130px', borderRadius: '20px', background: '#f1f5f9', animation: 'pulse 1.5s infinite' }} />
          ))}
        </div>
      ) : filteredTypes.length === 0 ? (
        <div style={{ padding: '48px', textAlign: 'center', color: '#94a3b8', fontWeight: 700 }}>
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
  );
};

export default HscTypePractice;
