import { useId } from 'react';

const W = 640;
const H = 220;
const PAD = { l: 44, r: 18, t: 16, b: 34 };

/**
 * Line chart of test scores over time. `points`: [{ id, pct (0–1), label, current? }] oldest first.
 * Flat on purpose: one line, round dots, hairline grid at 0 / 50 / 100%.
 * Keeps the newest 12 so the labels stay readable.
 */
const ScoreTrendChart = ({ points, ariaLabel = 'Score trend' }) => {
  const uid = useId();
  const pts = points.slice(-12);
  if (!pts.length) return null;
  const x = (i) => (pts.length === 1 ? (W - PAD.l - PAD.r) / 2 + PAD.l : PAD.l + (i * (W - PAD.l - PAD.r)) / (pts.length - 1));
  const y = (v) => PAD.t + (1 - Math.min(1, Math.max(0, v))) * (H - PAD.t - PAD.b);
  const line = pts.map((p, i) => `${i === 0 ? 'M' : 'L'} ${x(i)} ${y(p.pct)}`).join(' ');
  const area = `${line} L ${x(pts.length - 1)} ${y(0)} L ${x(0)} ${y(0)} Z`;
  const every = Math.ceil(pts.length / 6);
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', height: 'auto', display: 'block' }} role="img" aria-label={ariaLabel}>
      {[0, 0.5, 1].map((g) => (
        <g key={g}>
          <line x1={PAD.l} x2={W - PAD.r} y1={y(g)} y2={y(g)} stroke="#e5e7eb" strokeWidth="1" />
          <text x={PAD.l - 8} y={y(g) + 4} textAnchor="end" fontSize="12" fontWeight="700" fill="#9ca3af">{Math.round(g * 100)}%</text>
        </g>
      ))}
      {pts.length > 1 && <path d={area} fill="#ede9fe" opacity="0.7" />}
      {pts.length > 1 && <path d={line} fill="none" stroke="#7c3aed" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />}
      {pts.map((p, i) => (
        <g key={`${uid}-${p.id}`}>
          <circle cx={x(i)} cy={y(p.pct)} r={p.current ? 8 : 5.5} fill={p.current ? '#7c3aed' : '#fff'} stroke="#7c3aed" strokeWidth="3" />
          {p.current && <text x={x(i)} y={y(p.pct) - 14} textAnchor="middle" fontSize="13" fontWeight="800" fill="#1e1b4b">{Math.round(p.pct * 100)}%</text>}
          {(i % every === 0 || i === pts.length - 1) && (
            <text x={x(i)} y={H - 10} textAnchor="middle" fontSize="12" fontWeight="600" fill="#9ca3af">{p.label}</text>
          )}
        </g>
      ))}
    </svg>
  );
};

export default ScoreTrendChart;
