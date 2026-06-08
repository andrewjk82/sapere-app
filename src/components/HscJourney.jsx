import React, { useMemo, useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, TrendingDown, Award, Target, FileText, Info, X, Search, BookOpen } from 'lucide-react';
import { calcProjectedMark, schoolRankToAvg } from '../constants/hscBandData';
import { NSW_SCHOOL_RANKINGS, findSchoolRank } from '../constants/nswSchoolRankings';

/**
 * HscJourney — the HSC past-paper "score graph journey" dashboard.
 *
 * Props:
 *   hscRecords      — array of { examDate, paper, score, total, percentage,
 *                     notes, topics?: [{ name, pct }] }
 *   profile         — student profile (for the year / course banner)
 *   curriculumSlot  — React node rendered when the toggle is on "Curriculum"
 */

// NSW HSC band from a percentage.
const bandFor = (pct) => {
  if (pct >= 90) return 6;
  if (pct >= 80) return 5;
  if (pct >= 70) return 4;
  if (pct >= 60) return 3;
  if (pct >= 50) return 2;
  return 1;
};

const BAND_COLOR = {
  6: '#f59e0b', 5: '#6366f1', 4: '#0ea5e9', 3: '#14b8a6', 2: '#94a3b8', 1: '#cbd5e1',
};

const fmtDate = (s) => {
  if (!s) return '';
  const d = new Date(`${s}T00:00:00`);
  if (Number.isNaN(d.getTime())) return s;
  return d.toLocaleDateString('en-AU', { day: 'numeric', month: 'short' });
};

const HscJourney = ({ hscRecords = [], profile = {}, curriculumSlot = null }) => {
  const [view, setView] = useState('papers'); // 'papers' | 'curriculum'
  const [paperSeed, setPaperSeed] = useState(() => Date.now());
  const [showRankModal, setShowRankModal] = useState(false);
  const [rankSearch, setRankSearch] = useState('');
  const highlightRef = useRef(null);

  useEffect(() => {
    if (showRankModal && highlightRef.current) {
      setTimeout(() => highlightRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 150);
    }
  }, [showRankModal]);

  // Chronologically ordered, scored papers only.
  const papers = useMemo(() => {
    return [...(hscRecords || [])]
      .filter((r) => r.examDate && Number(r.total) > 0)
      .map((r) => ({
        ...r,
        percentage: Number(r.percentage ?? ((Number(r.score) / Number(r.total)) * 100)),
        topics: Array.isArray(r.topics) ? r.topics.filter((t) => t && t.name) : [],
      }))
      .sort((a, b) => String(a.examDate).localeCompare(String(b.examDate)));
  }, [hscRecords]);

  const stats = useMemo(() => {
    if (papers.length === 0) return null;
    const latest = papers[papers.length - 1];
    const prev = papers.length > 1 ? papers[papers.length - 2] : null;
    const avg = papers.reduce((s, p) => s + p.percentage, 0) / papers.length;
    const best = papers.reduce((b, p) => (p.percentage > b.percentage ? p : b), papers[0]);
    const lastFour = papers.slice(-4);
    const rolling = lastFour.reduce((s, p) => s + p.percentage, 0) / lastFour.length;
    return {
      latest, prev, avg, best, rolling,
      projectedBand: bandFor(rolling),
      delta: prev ? latest.percentage - prev.percentage : null,
    };
  }, [papers]);

  // ── All hooks must be declared before any early return ──────────────────
  const modResult = useMemo(() => {
    if (!stats || papers.length === 0) return null;
    const course = Array.isArray(profile?.assignedCourse) ? profile.assignedCourse[0] : (profile?.assignedCourse || 'default');
    return calcProjectedMark({
      schoolRank: profile?.schoolSubjectRank,
      internalRank: profile?.internalRank,
      internalTotal: profile?.internalTotal,
      pastPaperAvg: stats.rolling ?? stats.avg,
      course,
    });
  }, [profile?.schoolSubjectRank, profile?.internalRank, profile?.internalTotal, profile?.assignedCourse, stats, papers.length]);

  const autoRank = useMemo(() => findSchoolRank(profile?.school), [profile?.school]);

  const filteredRankings = useMemo(() => {
    if (!rankSearch.trim()) return NSW_SCHOOL_RANKINGS;
    const q = rankSearch.toLowerCase();
    return NSW_SCHOOL_RANKINGS.filter((s) => s.school.toLowerCase().includes(q));
  }, [rankSearch]);

  const courseLabel = (() => {
    const c = Array.isArray(profile?.assignedCourse) ? profile.assignedCourse[0] : (profile?.assignedCourse || profile?.course || '');
    return c ? `Mathematics ${String(c).replace(/mathematics/i, '').trim() || c}`.replace(/\s+/g, ' ').trim() : 'Mathematics';
  })();
  const yearLabel = profile?.year || 'Year 12';

  // ── Toggle ──────────────────────────────────────────────────────────────
  const toggle = (
    <div style={{ display: 'inline-flex', padding: '5px', borderRadius: '14px', background: 'rgba(167,139,250,0.12)', gap: '4px' }}>
      {[['papers', 'Past papers'], ['curriculum', 'Curriculum']].map(([key, label]) => (
        <button
          key={key}
          onClick={() => setView(key)}
          style={{
            padding: '9px 16px', borderRadius: '10px', border: 'none', cursor: 'pointer',
            fontSize: '0.84rem', fontWeight: 800,
            background: view === key ? '#fff' : 'transparent',
            color: view === key ? '#1e1b4b' : '#8b7aa7',
            boxShadow: view === key ? '0 2px 8px rgba(91,33,182,0.10)' : 'none',
          }}
        >
          {label}
        </button>
      ))}
    </div>
  );

  // ── Banner ──────────────────────────────────────────────────────────────
  const banner = (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '20px' }}>
      <div>
        <div style={{ fontSize: '0.7rem', fontWeight: 900, letterSpacing: '0.16em', color: '#8b5cf6', textTransform: 'uppercase' }}>
          {yearLabel} · {view === 'curriculum' ? 'Curriculum' : 'HSC Prep'} · {courseLabel}
        </div>
        <h2 style={{ fontFamily: '"Outfit", sans-serif', fontSize: 'clamp(1.5rem, 4vw, 2.1rem)', color: '#1e1b4b', margin: '4px 0 0' }}>
          {view === 'curriculum' ? 'Your learning path' : 'Past paper journey'}
        </h2>
        <div style={{ color: '#6d6a85', marginTop: '6px', fontSize: '0.9rem', fontWeight: 600 }}>
          {view === 'curriculum'
            ? 'Work through each chapter and topic at your own pace'
            : papers.length > 0
              ? `${papers.length} paper${papers.length === 1 ? '' : 's'} completed · scores tracked by your teacher`
              : 'Your teacher will log each past paper you complete here'}
        </div>
      </div>
      {toggle}
    </div>
  );

  if (view === 'curriculum') {
    return (
      <div>
        {banner}
        {curriculumSlot}
      </div>
    );
  }

  // ── Empty state ─────────────────────────────────────────────────────────
  if (!stats) {
    return (
      <div>
        {banner}
        <div style={{
          padding: '60px 30px', borderRadius: '24px', textAlign: 'center',
          background: 'linear-gradient(135deg, #f8fafc, #eef2ff)', border: '1px dashed #c7d2fe',
        }}>
          <FileText size={40} style={{ color: '#a5b4fc', marginBottom: '12px' }} />
          <div style={{ fontWeight: 900, color: '#1e1b4b', fontSize: '1.1rem' }}>No past papers yet</div>
          <div style={{ color: '#64748b', fontWeight: 600, marginTop: '6px', fontSize: '0.9rem' }}>
            Once your teacher logs your first HSC past paper, your score journey will appear here.
          </div>
        </div>
      </div>
    );
  }

  const { latest, avg, best, projectedBand, delta } = stats;

  const displayBand = modResult ? bandFor(modResult.projectedMark) : projectedBand;
  const displayBandLabel = modResult ? `Band ${displayBand}` : `Band ${projectedBand}`;

  // ── KPI strip ───────────────────────────────────────────────────────────
  const kpiCard = (children, lead = false) => (
    <div style={{
      padding: '18px 20px', borderRadius: '20px', position: 'relative', overflow: 'hidden',
      background: lead ? 'linear-gradient(135deg, #1e1b4b, #312e81)' : 'rgba(255,255,255,0.9)',
      border: lead ? 'none' : '1px solid rgba(167,139,250,0.18)',
      boxShadow: lead ? '0 18px 40px rgba(30,27,75,0.25)' : '0 8px 24px rgba(91,33,182,0.05)',
      color: lead ? '#fff' : '#1e1b4b',
    }}>
      {children}
    </div>
  );
  const lbl = (text, lead) => (
    <div style={{ fontSize: '0.64rem', fontWeight: 900, letterSpacing: '0.12em', textTransform: 'uppercase', color: lead ? 'rgba(255,255,255,0.7)' : '#8b7aa7' }}>{text}</div>
  );
  const val = (text, lead) => (
    <div style={{ fontFamily: '"Outfit", sans-serif', fontSize: '2rem', fontWeight: 800, lineHeight: 1.05, marginTop: '4px', color: lead ? '#fff' : '#1e1b4b' }}>{text}</div>
  );

  const kpiStrip = (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '14px', marginBottom: '22px' }}>
      {kpiCard(
        <>
          {lbl('Projected HSC Band', true)}
          {val(displayBandLabel, true)}
          <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'rgba(255,255,255,0.8)', marginTop: '6px' }}>
            {modResult
              ? `HSC aligned mark: ${modResult.projectedMark.toFixed(0)}`
              : displayBand >= 6 ? 'Top band — hold it steady' : `Band ${displayBand + 1} in reach`}
          </div>
          {modResult && (
            <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.6)', fontWeight: 600, marginTop: '2px' }}>
              Internal {modResult.moderatedInternal.toFixed(0)} · External {modResult.externalEstimate.toFixed(0)}
              {modResult.rawExternalPct !== modResult.externalEstimate && (
                <span style={{ opacity: 0.7 }}> (raw {modResult.rawExternalPct.toFixed(0)}%)</span>
              )}
            </div>
          )}
          <div style={{ display: 'flex', gap: '6px', marginTop: '10px' }}>
            {[3, 4, 5, 6].map((b) => (
              <div key={b} style={{
                width: '26px', height: '26px', borderRadius: '8px', display: 'grid', placeItems: 'center',
                fontFamily: '"Outfit", sans-serif', fontSize: '0.72rem', fontWeight: 800,
                background: b === displayBand
                  ? 'linear-gradient(135deg, #c4b5fd, #f5d0fe)'
                  : b < displayBand ? 'rgba(245,208,254,0.32)' : 'rgba(255,255,255,0.08)',
                color: b === displayBand ? '#4c1d95' : b < displayBand ? '#fff' : 'rgba(255,255,255,0.4)',
              }}>{b}</div>
            ))}
          </div>
        </>, true,
      )}
      {kpiCard(
        <>
          <Target size={20} style={{ position: 'absolute', right: '16px', top: '14px', color: 'rgba(139,92,246,0.35)' }} />
          {lbl('Latest score')}
          {val(<>{Number(latest.score)}<span style={{ fontSize: '1rem', fontWeight: 700, color: '#8b7aa7' }}> / {Number(latest.total)}</span></>)}
          {delta != null && (
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '4px', marginTop: '6px',
              fontSize: '0.78rem', fontWeight: 800, padding: '2px 9px', borderRadius: '999px',
              background: delta >= 0 ? '#dcfce7' : '#fee2e2', color: delta >= 0 ? '#166534' : '#b91c1c',
            }}>
              {delta >= 0 ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
              {delta >= 0 ? '+' : ''}{delta.toFixed(0)} vs last
            </div>
          )}
        </>,
      )}
      {kpiCard(
        <>
          <TrendingUp size={20} style={{ position: 'absolute', right: '16px', top: '14px', color: 'rgba(139,92,246,0.35)' }} />
          {lbl('Term average')}
          {val(<>{avg.toFixed(0)}<span style={{ fontSize: '1rem', fontWeight: 700, color: '#8b7aa7' }}>%</span></>)}
          <div style={{ fontSize: '0.8rem', color: '#6d6a85', fontWeight: 600, marginTop: '6px' }}>over {papers.length} paper{papers.length === 1 ? '' : 's'}</div>
        </>,
      )}
      {kpiCard(
        <>
          <Award size={20} style={{ position: 'absolute', right: '16px', top: '14px', color: 'rgba(139,92,246,0.35)' }} />
          {lbl('Personal best')}
          {val(<>{best.percentage.toFixed(0)}<span style={{ fontSize: '1rem', fontWeight: 700, color: '#8b7aa7' }}>%</span></>)}
          <div style={{ fontSize: '0.8rem', color: '#6d6a85', fontWeight: 600, marginTop: '6px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {best.paper} · {fmtDate(best.examDate)}
          </div>
        </>,
      )}
    </div>
  );

  // ── Score trend chart ───────────────────────────────────────────────────
  const W = 760, H = 200, PX = 46, PY = 30;

  // Projected HSC mark recalculated at each paper using cumulative average
  const course = Array.isArray(profile?.assignedCourse) ? profile.assignedCourse[0] : (profile?.assignedCourse || 'default');
  const projectedPoints = (() => {
    if (!profile?.schoolSubjectRank || !profile?.internalRank || !profile?.internalTotal) return [];
    return papers.map((_, i) => {
      const avg = papers.slice(0, i + 1).reduce((s, p) => s + p.percentage, 0) / (i + 1);
      const r = calcProjectedMark({
        schoolRank: profile.schoolSubjectRank,
        internalRank: profile.internalRank,
        internalTotal: profile.internalTotal,
        pastPaperAvg: avg,
        course,
      });
      return r ? r.projectedMark : null;
    }).filter((v) => v != null);
  })();

  const allValues = [...papers.map((p) => p.percentage), ...projectedPoints];
  const minY = Math.max(0, Math.min(60, ...allValues) - 6);
  const maxY = Math.min(100, Math.max(95, ...allValues) + 4);
  const rangeY = Math.max(1, maxY - minY);
  const xFor = (i) => papers.length === 1 ? W / 2 : PX + (i * (W - PX * 2)) / (papers.length - 1);
  const yFor = (v) => PY + ((maxY - v) / rangeY) * (H - PY * 2);
  const linePath = papers.map((p, i) => `${i === 0 ? 'M' : 'L'} ${xFor(i)} ${yFor(p.percentage)}`).join(' ');
  const areaPath = papers.length <= 1 ? '' : `${linePath} L ${xFor(papers.length - 1)} ${H - PY} L ${xFor(0)} ${H - PY} Z`;
  const projectedPath = projectedPoints.map((v, i) => `${i === 0 ? 'M' : 'L'} ${xFor(i)} ${yFor(v)}`).join(' ');

  const chart = (
    <div style={{ height: '100%', padding: '24px 26px', borderRadius: '24px', background: 'rgba(255,255,255,0.92)', border: '1px solid rgba(167,139,250,0.18)', boxShadow: '0 22px 50px rgba(91,33,182,0.06)' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', marginBottom: '12px' }}>
        <div>
          <h3 style={{ fontFamily: '"Outfit", sans-serif', fontSize: '1.2rem', color: '#1e1b4b', margin: 0 }}>Score trend</h3>
          <div style={{ fontSize: '0.84rem', color: '#6d6a85', fontWeight: 600, marginTop: '2px' }}>
            Every saved past paper, plotted against HSC band thresholds.
          </div>
        </div>
        {projectedPoints.length > 0 && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.78rem', fontWeight: 800 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <svg width="28" height="10"><circle cx="6" cy="5" r="4" fill="#fff" stroke="#7c3aed" strokeWidth="2" /><line x1="10" y1="5" x2="28" y2="5" stroke="#7c3aed" strokeWidth="2.5" /></svg>
              <span style={{ color: '#4c1d95' }}>Raw score</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <svg width="28" height="10"><circle cx="6" cy="5" r="4" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" /><line x1="10" y1="5" x2="28" y2="5" stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="5 3" /></svg>
              <span style={{ color: '#92400e' }}>Projected HSC</span>
            </div>
          </div>
        )}
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', height: 'auto', display: 'block' }} role="img" aria-label="HSC score trend">
        <defs>
          <linearGradient id="hscJourneyLine" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7c3aed" /><stop offset="100%" stopColor="#a78bfa" />
          </linearGradient>
          <linearGradient id="hscJourneyArea" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.22" /><stop offset="100%" stopColor="#a78bfa" stopOpacity="0.01" />
          </linearGradient>
        </defs>
        {[90, 80, 70].map((th) => (
          th >= minY && th <= maxY && (
            <g key={th}>
              <line x1={PX} x2={W - PX} y1={yFor(th)} y2={yFor(th)} stroke="#e2e8f0" strokeWidth="1.5" strokeDasharray="4 5" />
              <text x={W - PX} y={yFor(th) - 5} textAnchor="end" fontSize="10.5" fontWeight="800" fill="#94a3b8">
                Band {bandFor(th)} ({th}%)
              </text>
            </g>
          )
        ))}
        {/* Projected HSC mark — amber line tracking per paper */}
        {projectedPath && (
          <path d={projectedPath} fill="none" stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="6 4" strokeLinejoin="round" strokeLinecap="round" />
        )}
        {projectedPoints.map((v, i) => (
          <g key={`proj-${i}`}>
            <circle cx={xFor(i)} cy={yFor(v)} r="4" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" />
            {i === projectedPoints.length - 1 && (
              <>
                <rect x={xFor(i) - 66} y={yFor(v) - 20} width="72" height="16" rx="4" fill="#fef3c7" />
                <text x={xFor(i) - 30} y={yFor(v) - 8} textAnchor="middle" fontSize="10.5" fontWeight="900" fill="#92400e">
                  HSC {v.toFixed(1)}
                </text>
              </>
            )}
          </g>
        ))}
        {areaPath && <path d={areaPath} fill="url(#hscJourneyArea)" />}
        {linePath && <path d={linePath} fill="none" stroke="url(#hscJourneyLine)" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />}
        {papers.map((p, i) => (
          <g key={i}>
            <circle cx={xFor(i)} cy={yFor(p.percentage)} r="5" fill="#fff" stroke="#7c3aed" strokeWidth="2.5" />
            <text x={xFor(i)} y={yFor(p.percentage) - 12} textAnchor="middle" fontSize="11" fontWeight="900" fill="#4c1d95">
              {p.percentage.toFixed(0)}
            </text>
            <text x={xFor(i)} y={H - 10} textAnchor="middle" fontSize="10" fontWeight="700" fill="#94a3b8">
              {fmtDate(p.examDate)}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );

  // ── Moderation breakdown card ───────────────────────────────────────────
  const hasRankData = profile?.schoolSubjectRank || profile?.internalRank;
  const effectiveSchoolRank = profile?.schoolSubjectRank || autoRank;
  const cohortAvg = schoolRankToAvg(effectiveSchoolRank);
  const hscSubjectLabel = profile?.hscSubject
    ? `Mathematics ${profile.hscSubject}`.replace('Mathematics Advanced', 'Mathematics Advanced').replace('Mathematics Mathematics', 'Mathematics')
    : null;
  const studentSchoolNorm = (profile?.school || '').toLowerCase().trim();

  const moderationCard = (
    <div style={{ height: '100%', padding: '22px 24px', borderRadius: '24px', background: 'rgba(255,255,255,0.92)', border: '1px solid rgba(167,139,250,0.18)', boxShadow: '0 8px 24px rgba(91,33,182,0.05)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <h3 style={{ fontFamily: '"Outfit", sans-serif', fontSize: '1.15rem', color: '#1e1b4b', margin: 0 }}>
            HSC Moderation Analysis
          </h3>
          <Info size={15} style={{ color: '#a78bfa' }} />
        </div>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
          {profile?.school && (
            <span
              onClick={() => setShowRankModal(true)}
              style={{
                padding: '4px 12px', borderRadius: '999px', background: '#ede9fe',
                fontSize: '0.76rem', fontWeight: 800, color: '#4c1d95',
                cursor: 'pointer', transition: 'background 0.15s',
                display: 'inline-flex', alignItems: 'center', gap: '6px',
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#ddd6fe'}
              onMouseLeave={(e) => e.currentTarget.style.background = '#ede9fe'}
              title="Click to view NSW school rankings"
            >
              {profile.school}
              {effectiveSchoolRank ? ` · #${effectiveSchoolRank}` : ''}
              {autoRank && !profile?.schoolSubjectRank && (
                <span style={{ fontSize: '0.65rem', opacity: 0.7 }}>auto</span>
              )}
            </span>
          )}
        </div>
      </div>

      {!hasRankData ? (
        <div style={{ padding: '18px', borderRadius: '16px', background: '#f8fafc', border: '1px dashed #c7d2fe', textAlign: 'center' }}>
          <div style={{ fontWeight: 700, color: '#64748b', fontSize: '0.88rem' }}>
            Moderation data not set. Ask your teacher to enter your school rank and internal rank.
          </div>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '12px' }}>
          {/* School rank */}
          <div style={{ padding: '16px', borderRadius: '16px', background: '#f5f3ff', border: '1px solid #ddd6fe' }}>
            <div style={{ fontSize: '0.65rem', fontWeight: 900, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#7c3aed', marginBottom: '4px' }}>School Rank</div>
            <div style={{ fontFamily: '"Outfit", sans-serif', fontSize: '1.6rem', fontWeight: 800, color: '#4c1d95', lineHeight: 1 }}>
              #{profile.schoolSubjectRank || '—'}
            </div>
            {cohortAvg && (
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#6d28d9', marginTop: '4px' }}>
                Cohort avg ~{cohortAvg}%
              </div>
            )}
          </div>

          {/* Internal rank */}
          <div style={{ padding: '16px', borderRadius: '16px', background: '#f0fdf4', border: '1px solid #bbf7d0' }}>
            <div style={{ fontSize: '0.65rem', fontWeight: 900, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#16a34a', marginBottom: '4px' }}>Internal Rank</div>
            <div style={{ fontFamily: '"Outfit", sans-serif', fontSize: '1.6rem', fontWeight: 800, color: '#15803d', lineHeight: 1 }}>
              {profile.internalRank || '—'}
              {profile.internalTotal ? <span style={{ fontSize: '0.9rem', color: '#4ade80' }}>/{profile.internalTotal}</span> : ''}
            </div>
            {modResult && (
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#166534', marginTop: '4px' }}>
                Top {100 - modResult.percentile + 1}% of school
              </div>
            )}
          </div>

          {/* Moderated internal */}
          {modResult && (
            <div style={{ padding: '16px', borderRadius: '16px', background: '#eff6ff', border: '1px solid #bfdbfe' }}>
              <div style={{ fontSize: '0.65rem', fontWeight: 900, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#2563eb', marginBottom: '4px' }}>Moderated Internal</div>
              <div style={{ fontFamily: '"Outfit", sans-serif', fontSize: '1.6rem', fontWeight: 800, color: '#1d4ed8', lineHeight: 1 }}>
                {modResult.moderatedInternal.toFixed(0)}%
              </div>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#3b82f6', marginTop: '4px' }}>
                After NSW scaling
              </div>
            </div>
          )}

          {/* External estimate */}
          {modResult && (
            <div style={{ padding: '16px', borderRadius: '16px', background: '#fdf4ff', border: '1px solid #f0abfc' }}>
              <div style={{ fontSize: '0.65rem', fontWeight: 900, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#a21caf', marginBottom: '4px' }}>External Estimate</div>
              <div style={{ fontFamily: '"Outfit", sans-serif', fontSize: '1.6rem', fontWeight: 800, color: '#86198f', lineHeight: 1 }}>
                {modResult.externalEstimate.toFixed(0)}%
              </div>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#c026d3', marginTop: '4px' }}>
                From past papers
              </div>
            </div>
          )}
        </div>
      )}

      {modResult && (
        <div style={{ marginTop: '14px', padding: '12px 16px', borderRadius: '12px', background: 'linear-gradient(135deg, #1e1b4b, #312e81)', color: '#fff' }}>
          <div style={{ fontSize: '0.72rem', fontWeight: 900, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: '4px' }}>
            Projected HSC Mark (50/50 formula)
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: '"Outfit", sans-serif', fontSize: '1.5rem', fontWeight: 800 }}>
              {modResult.projectedMark.toFixed(1)} / 100
            </span>

            <span style={{ padding: '4px 12px', borderRadius: '999px', background: 'rgba(196,181,253,0.3)', fontWeight: 900, fontSize: '0.85rem' }}>
              Band {bandFor(modResult.projectedMark)}
            </span>
          </div>
        </div>
      )}
    </div>
  );

  // ── Saved papers list ───────────────────────────────────────────────────
  const list = (
    <div style={{ padding: '22px', borderRadius: '24px', background: 'rgba(255,255,255,0.92)', border: '1px solid rgba(167,139,250,0.18)' }}>
      <h3 style={{ fontFamily: '"Outfit", sans-serif', fontSize: '1.15rem', color: '#1e1b4b', margin: '0 0 14px' }}>
        Saved papers
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {[...papers].reverse().map((p, i) => {
          const band = bandFor(p.percentage);
          return (
            <div key={p.id || i} style={{
              display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap',
              padding: '14px 16px', borderRadius: '16px', background: '#fff', border: '1px solid #eef2ff',
            }}>
              <div style={{ width: '56px', flexShrink: 0 }}>
                <div style={{ fontSize: '0.78rem', fontWeight: 900, color: '#64748b' }}>{fmtDate(p.examDate)}</div>
              </div>
              <div style={{ flex: '1 1 160px', minWidth: 0 }}>
                <div style={{ fontWeight: 800, color: '#1e1b4b', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{p.paper}</div>
                {p.notes && <div style={{ fontSize: '0.76rem', color: '#94a3b8', fontWeight: 600, marginTop: '2px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{p.notes}</div>}
              </div>
              {p.topics.length > 0 && (
                <div style={{ display: 'flex', gap: '10px', flex: '1 1 200px', flexWrap: 'wrap' }}>
                  {p.topics.map((t, ti) => (
                    <div key={ti} style={{ minWidth: '54px' }}>
                      <div style={{ fontSize: '0.6rem', fontWeight: 900, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{t.name}</div>
                      <div style={{ height: '5px', borderRadius: '999px', background: '#eef2ff', marginTop: '3px', overflow: 'hidden' }}>
                        <div style={{ height: '100%', width: `${Math.max(0, Math.min(100, Number(t.pct) || 0))}%`, background: BAND_COLOR[bandFor(Number(t.pct) || 0)], borderRadius: '999px' }} />
                      </div>
                      <div style={{ fontSize: '0.66rem', fontWeight: 800, color: '#64748b', marginTop: '2px' }}>{Math.round(Number(t.pct) || 0)}%</div>
                    </div>
                  ))}
                </div>
              )}
              <div style={{ textAlign: 'right', flexShrink: 0 }}>
                <div style={{ fontWeight: 900, color: '#4f46e5', fontSize: '1rem' }}>{Number(p.score)}/{Number(p.total)}</div>
                <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#7c3aed' }}>{p.percentage.toFixed(0)}%</div>
              </div>
              <div style={{
                flexShrink: 0, padding: '5px 11px', borderRadius: '999px',
                fontSize: '0.72rem', fontWeight: 900, color: '#fff', background: BAND_COLOR[band],
              }}>
                Band {band}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
      {banner}
      {kpiStrip}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '22px', alignItems: 'stretch', marginBottom: '22px' }}>
        <div style={{ flex: '1 1 440px', minWidth: 0 }}>{chart}</div>
        <div style={{ flex: '1 1 320px', minWidth: 0 }}>{moderationCard}</div>
      </div>
      {list}

      {/* ── Generate Practice Paper ──────────────────────────────────── */}
      <div style={{
        margin: '22px 0 0',
        padding: '22px',
        borderRadius: '24px',
        background: 'linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%)',
        border: '1px solid rgba(167,139,250,0.3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '16px',
      }}>
        <div>
          <div style={{ fontFamily: '"Outfit", sans-serif', fontWeight: 900, color: '#1e1b4b', fontSize: '1.05rem', marginBottom: '4px' }}>
            Generate Practice Paper
          </div>
          <div style={{ fontSize: '0.82rem', color: '#6d5fbd', fontWeight: 600 }}>
            Randomised HSC-style paper from all past papers · includes answer booklet
          </div>
        </div>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <button
            onClick={() => {
              window.open(`/api/generate-past-paper?seed=${paperSeed}&mode=paper`, '_blank');
            }}
            style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              padding: '10px 20px', borderRadius: '999px',
              background: '#4f46e5', color: '#fff',
              border: 'none', cursor: 'pointer',
              fontFamily: '"Outfit", sans-serif', fontWeight: 800, fontSize: '0.88rem',
              boxShadow: '0 4px 14px rgba(79,70,229,0.35)',
              transition: 'transform 0.1s, box-shadow 0.1s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(79,70,229,0.45)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 4px 14px rgba(79,70,229,0.35)'; }}
          >
            <FileText size={15} />
            Question Paper
          </button>
          <button
            onClick={() => {
              window.open(`/api/generate-past-paper?seed=${paperSeed}&mode=answers`, '_blank');
            }}
            style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              padding: '10px 20px', borderRadius: '999px',
              background: '#fff', color: '#4f46e5',
              border: '2px solid #4f46e5', cursor: 'pointer',
              fontFamily: '"Outfit", sans-serif', fontWeight: 800, fontSize: '0.88rem',
              transition: 'transform 0.1s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ''; }}
          >
            <BookOpen size={15} />
            Answer Booklet
          </button>
          <button
            onClick={() => setPaperSeed(Date.now())}
            style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              padding: '10px 16px', borderRadius: '999px',
              background: 'transparent', color: '#9ca3af',
              border: '1.5px solid #d1d5db', cursor: 'pointer',
              fontFamily: '"Outfit", sans-serif', fontWeight: 700, fontSize: '0.82rem',
              transition: 'color 0.15s, border-color 0.15s',
            }}
            onMouseEnter={e => { e.currentTarget.style.color = '#4f46e5'; e.currentTarget.style.borderColor = '#4f46e5'; }}
            onMouseLeave={e => { e.currentTarget.style.color = '#9ca3af'; e.currentTarget.style.borderColor = '#d1d5db'; }}
            title="Generate a new random paper"
          >
            ↻ New Paper
          </button>
        </div>
      </div>

      {/* ── School Rankings Modal ─────────────────────────────────────── */}
      <AnimatePresence>
        {showRankModal && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{
              position: 'fixed', inset: 0, zIndex: 200,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '20px', background: 'rgba(15,10,40,0.55)', backdropFilter: 'blur(6px)',
            }}
            onClick={() => setShowRankModal(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: '#fff', borderRadius: '28px', width: '100%', maxWidth: '520px',
                maxHeight: '80vh', display: 'flex', flexDirection: 'column',
                boxShadow: '0 40px 80px rgba(30,27,75,0.3)',
              }}
            >
              {/* Header */}
              <div style={{ padding: '24px 24px 16px', borderBottom: '1px solid #eef2ff', flexShrink: 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <div>
                    <div style={{ fontFamily: '"Outfit", sans-serif', fontSize: '1.25rem', fontWeight: 900, color: '#1e1b4b' }}>
                      NSW HSC School Rankings
                    </div>
                    <div style={{ fontSize: '0.76rem', color: '#8b7aa7', fontWeight: 600, marginTop: '2px' }}>
                      2025 · Overall Band 6 success rate
                    </div>
                  </div>
                  <button
                    onClick={() => setShowRankModal(false)}
                    style={{ background: '#f1f5f9', border: 'none', borderRadius: '10px', width: '36px', height: '36px', cursor: 'pointer', display: 'grid', placeItems: 'center', color: '#64748b' }}
                  >
                    <X size={18} />
                  </button>
                </div>
                {/* Search */}
                <div style={{ position: 'relative' }}>
                  <Search size={15} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#a78bfa' }} />
                  <input
                    autoFocus
                    placeholder="Search school…"
                    value={rankSearch}
                    onChange={(e) => setRankSearch(e.target.value)}
                    style={{
                      width: '100%', padding: '10px 12px 10px 34px', borderRadius: '12px',
                      border: '1.5px solid #ddd6fe', fontWeight: 700, fontSize: '0.88rem',
                      color: '#1e1b4b', outline: 'none', boxSizing: 'border-box',
                    }}
                  />
                </div>
              </div>

              {/* Student's school highlighted banner */}
              {profile?.school && effectiveSchoolRank && (
                <div style={{
                  margin: '12px 16px 0', padding: '10px 16px', borderRadius: '14px',
                  background: 'linear-gradient(135deg, #1e1b4b, #312e81)',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0,
                }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#c4b5fd' }}>Your student's school</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontWeight: 900, color: '#fff', fontSize: '0.9rem' }}>{profile.school}</span>
                    <span style={{ padding: '2px 10px', borderRadius: '999px', background: 'rgba(196,181,253,0.3)', fontSize: '0.78rem', fontWeight: 900, color: '#e9d5ff' }}>
                      #{effectiveSchoolRank}
                    </span>
                  </div>
                </div>
              )}

              {/* List */}
              <div style={{ overflowY: 'auto', flex: 1, padding: '12px 16px 20px' }}>
                {filteredRankings.map((s) => {
                  const isStudent = studentSchoolNorm && s.school.toLowerCase() === studentSchoolNorm;
                  return (
                    <div
                      key={s.rank}
                      ref={isStudent ? highlightRef : null}
                      style={{
                        display: 'flex', alignItems: 'center', gap: '12px',
                        padding: '10px 12px', borderRadius: '12px', marginBottom: '4px',
                        background: isStudent ? 'linear-gradient(135deg, #f5f3ff, #ede9fe)' : 'transparent',
                        border: isStudent ? '1.5px solid #c4b5fd' : '1.5px solid transparent',
                        transition: 'background 0.1s',
                      }}
                    >
                      <div style={{
                        width: '36px', height: '36px', borderRadius: '10px', flexShrink: 0,
                        display: 'grid', placeItems: 'center',
                        background: isStudent ? '#7c3aed' : s.rank <= 10 ? '#1e1b4b' : s.rank <= 50 ? '#312e81' : '#f1f5f9',
                        fontFamily: '"Outfit", sans-serif', fontSize: '0.8rem', fontWeight: 900,
                        color: isStudent || s.rank <= 50 ? '#fff' : '#64748b',
                      }}>
                        {s.rank}
                      </div>
                      <div style={{ flex: 1, fontWeight: isStudent ? 900 : 700, color: isStudent ? '#4c1d95' : '#1e1b4b', fontSize: '0.88rem' }}>
                        {s.school}
                      </div>
                      {s.change !== null && s.change !== undefined && s.change !== 0 && (
                        <span style={{
                          fontSize: '0.68rem', fontWeight: 800, flexShrink: 0,
                          padding: '2px 6px', borderRadius: '999px',
                          background: s.change > 0 ? '#dcfce7' : '#fee2e2',
                          color: s.change > 0 ? '#15803d' : '#dc2626',
                        }}>
                          {s.change > 0 ? `▲${s.change}` : `▼${Math.abs(s.change)}`}
                        </span>
                      )}
                      {isStudent && (
                        <span style={{ fontSize: '0.7rem', fontWeight: 900, padding: '2px 8px', borderRadius: '999px', background: '#7c3aed', color: '#fff', flexShrink: 0 }}>
                          Your student
                        </span>
                      )}
                    </div>
                  );
                })}
                {filteredRankings.length === 0 && (
                  <div style={{ textAlign: 'center', padding: '30px', color: '#94a3b8', fontWeight: 700 }}>
                    No schools found
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default HscJourney;
