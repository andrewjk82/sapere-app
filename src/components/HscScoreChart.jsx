import React from 'react';

const WIDTH = 760;
const HEIGHT = 280;
const PAD_X = 54;
const PAD_Y = 42;

const HscScoreChart = ({ hscRecords }) => {
  const points = [...(hscRecords || [])]
    .filter((r) => r.examDate && Number(r.total) > 0)
    .sort((a, b) => String(a.examDate).localeCompare(String(b.examDate)))
    .map((r) => ({
      ...r,
      percentage: Number(r.percentage ?? ((Number(r.score) / Number(r.total)) * 100)),
    }));

  if (points.length === 0) {
    return (
      <div style={{
        height: '260px',
        borderRadius: '24px',
        background: 'linear-gradient(135deg, #f8fafc, #eef2ff)',
        border: '1px dashed #c7d2fe',
        display: 'grid',
        placeItems: 'center',
        color: '#64748b',
        fontWeight: 800,
      }}>
        Add HSC results to build a score trend.
      </div>
    );
  }

  const minScore = Math.max(0, Math.min(...points.map((p) => p.percentage)) - 8);
  const maxScore = Math.min(100, Math.max(...points.map((p) => p.percentage)) + 8);
  const range = Math.max(1, maxScore - minScore);
  const xFor = (idx) => points.length === 1
    ? WIDTH / 2
    : PAD_X + (idx * (WIDTH - PAD_X * 2)) / (points.length - 1);
  const yFor = (value) => PAD_Y + ((maxScore - value) / range) * (HEIGHT - PAD_Y * 2);

  const path = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${xFor(i)} ${yFor(p.percentage)}`).join(' ');
  const fillPath = `${path} L ${xFor(points.length - 1)} ${HEIGHT - PAD_Y} L ${xFor(0)} ${HEIGHT - PAD_Y} Z`;
  const latest = points[points.length - 1];

  return (
    <div style={{
      borderRadius: '28px',
      background: 'linear-gradient(135deg, #312e81, #4f46e5 52%, #7c3aed)',
      padding: '24px',
      color: 'white',
      boxShadow: '0 24px 60px rgba(79,70,229,0.22)',
      overflow: 'hidden',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '16px', alignItems: 'flex-start', marginBottom: '12px', flexWrap: 'wrap' }}>
        <div>
          <div style={{ fontSize: '0.75rem', fontWeight: 900, letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.72 }}>
            HSC Score Trend
          </div>
          <div style={{ fontSize: '2.3rem', fontWeight: 950, lineHeight: 1, marginTop: '8px' }}>
            {latest.percentage.toFixed(1)}%
          </div>
        </div>
        <div style={{ textAlign: 'right', fontWeight: 800, opacity: 0.9 }}>
          <div>{latest.paper}</div>
          <div style={{ fontSize: '0.8rem', opacity: 0.72 }}>{latest.examDate}</div>
        </div>
      </div>
      <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} style={{ width: '100%', height: 'auto', display: 'block' }} role="img" aria-label="HSC score trend line chart">
        <defs>
          <linearGradient id="hscLine" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#fef3c7" />
            <stop offset="55%" stopColor="#f9a8d4" />
            <stop offset="100%" stopColor="#c4b5fd" />
          </linearGradient>
          <linearGradient id="hscFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.02" />
          </linearGradient>
        </defs>
        {[0, 1, 2, 3].map((i) => {
          const y = PAD_Y + (i * (HEIGHT - PAD_Y * 2)) / 3;
          const label = Math.round(maxScore - (i * range) / 3);
          return (
            <g key={i}>
              <line x1={PAD_X} x2={WIDTH - PAD_X} y1={y} y2={y} stroke="rgba(255,255,255,0.16)" strokeWidth="1" />
              <text x={20} y={y + 4} fill="rgba(255,255,255,0.58)" fontSize="12" fontWeight="800">{label}%</text>
            </g>
          );
        })}
        {points.length > 1 && <path d={fillPath} fill="url(#hscFill)" />}
        <path d={path} fill="none" stroke="url(#hscLine)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        {points.map((p, i) => (
          <g key={p.id || `${p.examDate}-${i}`}>
            <circle cx={xFor(i)} cy={yFor(p.percentage)} r="8" fill="#ffffff" opacity="0.95" />
            <circle cx={xFor(i)} cy={yFor(p.percentage)} r="4" fill="#7c3aed" />
            <text x={xFor(i)} y={HEIGHT - 14} textAnchor="middle" fill="rgba(255,255,255,0.68)" fontSize="11" fontWeight="800">
              {p.examDate.slice(5)}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
};

export default HscScoreChart;
