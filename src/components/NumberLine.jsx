import React from 'react';

const NumberLine = ({ min = 0, max = 10, points = [], rays = [], segments = [] }) => {
  const width = 440;
  const height = 60;
  const padX = 30;
  
  const toX = (val) => padX + ((val - min) / (max - min)) * (width - 2 * padX);
  const y = height / 2;

  const ticks = [];
  for (let i = Math.ceil(min); i <= Math.floor(max); i++) {
    ticks.push(i);
  }

  const uid = Math.random().toString(36).slice(2, 7);

  return (
    <div style={{
      background: 'transparent',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '8px',
      maxWidth: '100%',
      overflowX: 'auto'
    }}>
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} style={{ minWidth: width }}>
        <defs>
          {/* Single arrowhead - orient="auto" auto-rotates to match line direction */}
          <marker id={`arr-${uid}`} markerWidth="6" markerHeight="5" refX="5" refY="2.5" orient="auto">
            <polygon points="0 0, 6 2.5, 0 5" fill="#6366f1" />
          </marker>
        </defs>

        {/* Main axis (gray background line) */}
        <line x1={padX} y1={y} x2={width - padX} y2={y} stroke="#c0c8d8" strokeWidth="1.5" strokeLinecap="round" />

        {/* Ticks and labels */}
        {ticks.map(tick => (
          <g key={tick}>
            <line x1={toX(tick)} y1={y - 5} x2={toX(tick)} y2={y + 5} stroke="#94a3b8" strokeWidth="1.5" />
            <text x={toX(tick)} y={y + 20} fill="#475569" fontSize="12" fontWeight="600" textAnchor="middle" fontFamily="sans-serif">
              {tick}
            </text>
          </g>
        ))}

        {/* Segments (colored line between two points) */}
        {segments.map((seg, i) => (
          <line key={`seg-${i}`} x1={toX(seg.start)} y1={y} x2={toX(seg.end)} y2={y} stroke="#6366f1" strokeWidth="3.5" />
        ))}

        {/* Rays - draw from start toward direction, use markerEnd with auto-orient */}
        {rays.map((ray, i) => {
          if (ray.direction === 'right') {
            return (
              <line
                key={`ray-${i}`}
                x1={toX(ray.start)} y1={y}
                x2={width - padX} y2={y}
                stroke="#6366f1" strokeWidth="3.5"
                markerEnd={`url(#arr-${uid})`}
              />
            );
          } else {
            // Left: draw from start to min — markerEnd auto-points left
            return (
              <line
                key={`ray-${i}`}
                x1={toX(ray.start)} y1={y}
                x2={padX} y2={y}
                stroke="#6366f1" strokeWidth="3.5"
                markerEnd={`url(#arr-${uid})`}
              />
            );
          }
        })}

        {/* Points (open or closed circles) */}
        {points.map((p, i) => (
          <circle
            key={`pt-${i}`}
            cx={toX(p.val)} cy={y} r="6"
            fill={p.type === 'closed' ? '#6366f1' : '#ffffff'}
            stroke="#6366f1" strokeWidth="2.5"
          />
        ))}
      </svg>
    </div>
  );
};

export default NumberLine;
