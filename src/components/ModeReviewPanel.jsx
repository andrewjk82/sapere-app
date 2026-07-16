import { useCallback, useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Zap, Flame, BookOpen, Calculator, PenLine, RefreshCw, Filter, User,
} from 'lucide-react';
import {
  fetchModeReviewSessions,
  loadModeReviewDetail,
  loadModeReviewWorkingOut,
} from '../services/modeReviewService';
import { getChallengeMode } from '../constants/challengeModes';
import ChallengeDetailModal from './studentDetail/ChallengeDetailModal';

const MODE_FILTERS = [
  { id: 'all', label: 'All modes' },
  { id: 'challenge', label: 'Challenge' },
  { id: 'extreme', label: 'Extreme' },
];

const TYPE_FILTERS = [
  { id: 'all', label: 'All types' },
  { id: 'daily', label: 'Daily Practice' },
  { id: 'calc', label: 'Calculation' },
];

function formatWhen(iso) {
  if (!iso) return '—';
  try {
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return String(iso).slice(0, 16);
    return d.toLocaleString('en-AU', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit',
    });
  } catch {
    return String(iso).slice(0, 16);
  }
}

function ModeBadge({ modeId }) {
  const mode = getChallengeMode(modeId);
  const isExtreme = modeId === 'extreme';
  const Icon = isExtreme ? Flame : Zap;
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        padding: '4px 10px',
        borderRadius: 999,
        fontWeight: 800,
        fontSize: '0.72rem',
        letterSpacing: '0.04em',
        textTransform: 'uppercase',
        color: isExtreme ? '#fecaca' : '#92400e',
        background: isExtreme
          ? 'linear-gradient(135deg, #7f1d1d 0%, #dc2626 100%)'
          : 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
        border: isExtreme ? '1px solid #b91c1c' : '1px solid #f59e0b',
      }}
    >
      <Icon size={12} />
      {mode.label}
    </span>
  );
}

const ModeReviewPanel = ({ searchQuery = '' }) => {
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modeFilter, setModeFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  const [openingId, setOpeningId] = useState(null);
  const [selectedChallenge, setSelectedChallenge] = useState(null);
  const [activePointer, setActivePointer] = useState(null);
  const [workingOutPreview, setWorkingOutPreview] = useState(null);
  const [reloadToken, setReloadToken] = useState(0);

  const load = useCallback(() => {
    setReloadToken((t) => t + 1);
  }, []);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const rows = await fetchModeReviewSessions();
        if (cancelled) return;
        setSessions(rows);
        setError(null);
        setLoading(false);
      } catch (err) {
        console.warn('[ModeReview] list failed:', err);
        if (cancelled) return;
        setError(err?.message || 'Failed to load Mode Review');
        setSessions([]);
        setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [reloadToken]);

  // Lazy-fill working-out images once detail is open (same pattern as StudentDetail).
  useEffect(() => {
    if (!selectedChallenge || !activePointer) return;
    const results = selectedChallenge.answerResults;
    if (!Array.isArray(results) || results.length === 0) return;
    const needs = results.some(
      (r) =>
        r?.hasWorkingOut &&
        !r.workingOut &&
        !(Array.isArray(r.workingOutPages) && r.workingOutPages.length > 0),
    );
    if (!needs) return;

    let cancelled = false;
    (async () => {
      const next = await loadModeReviewWorkingOut(activePointer, results);
      if (cancelled) return;
      setSelectedChallenge((prev) =>
        prev && prev.id === selectedChallenge.id
          ? { ...prev, answerResults: next }
          : prev,
      );
    })();
    return () => {
      cancelled = true;
    };
  }, [selectedChallenge, activePointer]);

  const filtered = useMemo(() => {
    const q = String(searchQuery || '').trim().toLowerCase();
    return sessions.filter((s) => {
      if (modeFilter !== 'all' && s.challengeMode !== modeFilter) return false;
      if (typeFilter !== 'all' && s.challengeType !== typeFilter) return false;
      if (!q) return true;
      const hay = `${s.studentName || ''} ${s.studentId || ''} ${s.statDocId || ''}`.toLowerCase();
      return hay.includes(q);
    });
  }, [sessions, modeFilter, typeFilter, searchQuery]);

  const handleOpen = async (pointer) => {
    if (openingId) return;
    setOpeningId(pointer.id);
    try {
      // Show modal immediately in loading state (hasDetailSnapshot, no questions yet).
      setActivePointer(pointer);
      setSelectedChallenge({
        id: pointer.statDocId,
        studentId: pointer.studentId,
        studentName: pointer.studentName,
        statCollection: pointer.statCollection,
        challengeType: pointer.challengeType,
        challengeMode: pointer.challengeMode,
        score: pointer.score,
        total: pointer.total,
        hasDetailSnapshot: true,
        detailSnapshotLoaded: false,
        questions: [],
        userAnswers: [],
        answerResults: [],
      });
      const detail = await loadModeReviewDetail(pointer);
      if (detail) {
        setSelectedChallenge(detail);
      } else {
        setSelectedChallenge((prev) =>
          prev
            ? { ...prev, detailSnapshotLoaded: true, hasDetailSnapshot: false }
            : null,
        );
      }
    } catch (err) {
      console.warn('[ModeReview] open detail failed:', err);
      setSelectedChallenge((prev) =>
        prev ? { ...prev, detailSnapshotLoaded: true, hasDetailSnapshot: false } : null,
      );
    } finally {
      setOpeningId(null);
    }
  };

  const closeDetail = () => {
    setSelectedChallenge(null);
    setActivePointer(null);
  };

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '80px 0' }}>
        <div className="sapere-loader" style={{ margin: '0 auto 16px' }} />
        <p style={{ color: '#94a3b8', fontWeight: 700 }}>Loading Mode Review…</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ textAlign: 'center', padding: '60px 20px' }}>
        <p style={{ color: '#e11d48', fontWeight: 800, marginBottom: 12 }}>{error}</p>
        <button
          type="button"
          onClick={load}
          style={{
            padding: '10px 18px',
            borderRadius: 12,
            border: 'none',
            background: '#6366f1',
            color: '#fff',
            fontWeight: 800,
            cursor: 'pointer',
          }}
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: 12,
          marginBottom: 20,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#64748b', fontWeight: 700, fontSize: '0.85rem' }}>
          <Filter size={16} />
          Filters
        </div>
        <div style={{ display: 'flex', background: '#f1f5f9', padding: 4, borderRadius: 12, gap: 2 }}>
          {MODE_FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setModeFilter(f.id)}
              style={{
                padding: '6px 12px',
                borderRadius: 10,
                border: 'none',
                background: modeFilter === f.id ? '#fff' : 'transparent',
                color: modeFilter === f.id ? '#6366f1' : '#64748b',
                fontWeight: 800,
                fontSize: '0.8rem',
                cursor: 'pointer',
                boxShadow: modeFilter === f.id ? '0 2px 8px rgba(0,0,0,0.06)' : 'none',
              }}
            >
              {f.label}
            </button>
          ))}
        </div>
        <div style={{ display: 'flex', background: '#f1f5f9', padding: 4, borderRadius: 12, gap: 2 }}>
          {TYPE_FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setTypeFilter(f.id)}
              style={{
                padding: '6px 12px',
                borderRadius: 10,
                border: 'none',
                background: typeFilter === f.id ? '#fff' : 'transparent',
                color: typeFilter === f.id ? '#6366f1' : '#64748b',
                fontWeight: 800,
                fontSize: '0.8rem',
                cursor: 'pointer',
                boxShadow: typeFilter === f.id ? '0 2px 8px rgba(0,0,0,0.06)' : 'none',
              }}
            >
              {f.label}
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={load}
          title="Refresh"
          style={{
            marginLeft: 'auto',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            padding: '8px 14px',
            borderRadius: 12,
            border: '1.5px solid #e2e8f0',
            background: '#fff',
            color: '#475569',
            fontWeight: 800,
            fontSize: '0.8rem',
            cursor: 'pointer',
          }}
        >
          <RefreshCw size={14} /> Refresh
        </button>
      </div>

      <p style={{ margin: '0 0 16px', color: '#94a3b8', fontWeight: 600, fontSize: '0.85rem' }}>
        Challenge & Extreme sessions only — opens existing history by ID (no extra snapshots).
        {' '}
        Showing {filtered.length}
        {filtered.length !== sessions.length ? ` of ${sessions.length}` : ''} recent.
      </p>

      {filtered.length === 0 ? (
        <div
          style={{
            textAlign: 'center',
            padding: '64px 24px',
            background: '#fff',
            borderRadius: 20,
            border: '1.5px dashed #e2e8f0',
          }}
        >
          <Zap size={40} style={{ opacity: 0.2, marginBottom: 12 }} />
          <p style={{ margin: 0, fontWeight: 800, color: '#1e293b' }}>No sessions yet</p>
          <p style={{ margin: '8px 0 0', color: '#94a3b8', fontWeight: 600, fontSize: '0.9rem' }}>
            When a student finishes Daily Practice or Calculation in Challenge or Extreme mode,
            it will show up here.
          </p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {filtered.map((s, i) => {
            const isCalc = s.challengeType === 'calc';
            const pct = s.total > 0 ? Math.round((100 * (s.score || 0)) / s.total) : null;
            const busy = openingId === s.id;
            return (
              <motion.button
                key={s.id}
                type="button"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(i * 0.02, 0.2) }}
                onClick={() => handleOpen(s)}
                disabled={busy}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 14,
                  width: '100%',
                  textAlign: 'left',
                  padding: '16px 18px',
                  borderRadius: 16,
                  border: '1.5px solid #e2e8f0',
                  background: '#fff',
                  cursor: busy ? 'wait' : 'pointer',
                  boxShadow: '0 2px 10px rgba(15,23,42,0.04)',
                  opacity: busy ? 0.7 : 1,
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 14,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: isCalc ? '#fffbeb' : '#eef2ff',
                    color: isCalc ? '#b45309' : '#4338ca',
                    flexShrink: 0,
                  }}
                >
                  {isCalc ? <Calculator size={20} /> : <BookOpen size={20} />}
                </div>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                    <span style={{ fontWeight: 900, color: '#0f172a', fontSize: '0.98rem' }}>
                      {s.studentName || 'Student'}
                    </span>
                    <ModeBadge modeId={s.challengeMode} />
                    <span
                      style={{
                        padding: '2px 8px',
                        borderRadius: 8,
                        fontSize: '0.7rem',
                        fontWeight: 800,
                        color: isCalc ? '#b45309' : '#4338ca',
                        background: isCalc ? '#fffbeb' : '#eef2ff',
                      }}
                    >
                      {isCalc ? 'Calculation' : 'Daily Practice'}
                    </span>
                    {s.hasWorkingOut && (
                      <span
                        title="Has working-out sketches"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 4,
                          color: '#64748b',
                          fontSize: '0.72rem',
                          fontWeight: 700,
                        }}
                      >
                        <PenLine size={12} /> Sketch
                      </span>
                    )}
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 14px', color: '#94a3b8', fontSize: '0.8rem', fontWeight: 600 }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                      <User size={12} />
                      {formatWhen(s.timestamp)}
                    </span>
                    <span style={{ fontFamily: 'ui-monospace, monospace', fontSize: '0.75rem' }}>
                      {s.statDocId}
                    </span>
                  </div>
                </div>

                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <div style={{ fontWeight: 900, fontSize: '1.15rem', color: '#0f172a' }}>
                    {s.score ?? 0}
                    <span style={{ color: '#94a3b8', fontWeight: 700 }}>/{s.total ?? 0}</span>
                  </div>
                  {pct != null && (
                    <div
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 800,
                        color: pct >= 80 ? '#16a34a' : pct >= 50 ? '#d97706' : '#dc2626',
                      }}
                    >
                      {pct}%
                    </div>
                  )}
                </div>
              </motion.button>
            );
          })}
        </div>
      )}

      {selectedChallenge && (
        <ChallengeDetailModal
          selectedChallenge={selectedChallenge}
          onClose={closeDetail}
          setWorkingOutPreview={setWorkingOutPreview}
        />
      )}

      {workingOutPreview && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 20,
            background: 'rgba(15,23,42,0.88)',
          }}
          onClick={() => setWorkingOutPreview(null)}
          role="presentation"
        >
          <img
            src={workingOutPreview}
            alt="Working out"
            style={{ maxWidth: '94vw', maxHeight: '90vh', borderRadius: 12, objectFit: 'contain' }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default ModeReviewPanel;
