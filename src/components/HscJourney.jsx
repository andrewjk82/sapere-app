import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Award, Target, FileText } from 'lucide-react';

/**
 * HscJourney — the HSC past-paper "score graph journey" dashboard.
 *
 * Shown in place of the normal curriculum roadmap for students who have HSC
 * tracking activated (profile.showHscGraph === true). A toggle lets the
 * student switch back to the regular curriculum view.
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
          {val(`Band ${projectedBand}`, true)}
          <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'rgba(255,255,255,0.8)', marginTop: '6px' }}>
            {projectedBand >= 6 ? 'Top band — hold it steady' : `Band ${projectedBand + 1} in reach`}
          </div>
          <div style={{ display: 'flex', gap: '6px', marginTop: '10px' }}>
            {[3, 4, 5, 6].map((b) => (
              <div key={b} style={{
                width: '26px', height: '26px', borderRadius: '8px', display: 'grid', placeItems: 'center',
                fontFamily: '"Outfit", sans-serif', fontSize: '0.72rem', fontWeight: 800,
                background: b === projectedBand
                  ? 'linear-gradient(135deg, #c4b5fd, #f5d0fe)'
                  : b < projectedBand ? 'rgba(245,208,254,0.32)' : 'rgba(255,255,255,0.08)',
                color: b === projectedBand ? '#4c1d95' : b < projectedBand ? '#fff' : 'rgba(255,255,255,0.4)',
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
  const W = 760, H = 300, PX = 46, PY = 34;
  const minY = Math.max(0, Math.min(60, ...papers.map((p) => p.percentage)) - 6);
  const maxY = Math.min(100, Math.max(95, ...papers.map((p) => p.percentage)) + 4);
  const rangeY = Math.max(1, maxY - minY);
  const xFor = (i) => papers.length === 1 ? W / 2 : PX + (i * (W - PX * 2)) / (papers.length - 1);
  const yFor = (v) => PY + ((maxY - v) / rangeY) * (H - PY * 2);
  const linePath = papers.map((p, i) => `${i === 0 ? 'M' : 'L'} ${xFor(i)} ${yFor(p.percentage)}`).join(' ');
  const areaPath = papers.length <= 1 ? '' : `${linePath} L ${xFor(papers.length - 1)} ${H - PY} L ${xFor(0)} ${H - PY} Z`;

  const chart = (
    <div style={{ padding: '24px 26px', borderRadius: '24px', background: 'rgba(255,255,255,0.92)', border: '1px solid rgba(167,139,250,0.18)', boxShadow: '0 22px 50px rgba(91,33,182,0.06)', marginBottom: '22px' }}>
      <div style={{ marginBottom: '12px' }}>
        <h3 style={{ fontFamily: '"Outfit", sans-serif', fontSize: '1.2rem', color: '#1e1b4b', margin: 0 }}>Score trend</h3>
        <div style={{ fontSize: '0.84rem', color: '#6d6a85', fontWeight: 600, marginTop: '2px' }}>
          Every saved past paper, plotted against HSC band thresholds.
        </div>
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
      {chart}
      {list}
    </motion.div>
  );
};

export default HscJourney;
