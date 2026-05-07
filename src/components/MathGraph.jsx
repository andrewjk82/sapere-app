import React from 'react';

const MathGraph = ({ 
  equations = [], 
  points = [], 
  config = { xRange: [-6, 6], yRange: [-6, 6], size: 400 } 
}) => {
  const { xRange, yRange, size } = config;
  const padding = 40;
  const innerSize = size - padding * 2;
  
  const toSvgX = (x) => padding + ((x - xRange[0]) / (xRange[1] - xRange[0])) * innerSize;
  const toSvgY = (y) => padding + ((yRange[1] - y) / (yRange[1] - yRange[0])) * innerSize;

  // Grid lines
  const gridLines = [];
  for (let x = xRange[0]; x <= xRange[1]; x++) {
    const sx = toSvgX(x);
    gridLines.push(
      <line key={`gx-${x}`} x1={sx} y1={padding} x2={sx} y2={size - padding} 
            stroke="#e2e8f0" strokeWidth={x === 0 ? 2 : 1} />
    );
  }
  for (let y = yRange[0]; y <= yRange[1]; y++) {
    const sy = toSvgY(y);
    gridLines.push(
      <line key={`gy-${y}`} x1={padding} y1={sy} x2={size - padding} y2={sy} 
            stroke="#e2e8f0" strokeWidth={y === 0 ? 2 : 1} />
    );
  }

  // Parse linear equations (very simple parser for y = mx + c)
  const renderLine = (eq, index) => {
    try {
      // Simplistic parser for demonstration - ideally use a math library
      const cleanEq = eq.replace(/\s+/g, '').replace('y=', '');
      let m = 1, c = 0;
      if (cleanEq.includes('x')) {
        const parts = cleanEq.split('x');
        m = parts[0] === '' ? 1 : parts[0] === '-' ? -1 : parseFloat(parts[0]);
        c = parts[1] === '' ? 0 : parseFloat(parts[1]);
      } else {
        c = parseFloat(cleanEq);
        m = 0;
      }

      const x1 = xRange[0], y1 = m * x1 + c;
      const x2 = xRange[1], y2 = m * x2 + c;

      return (
        <line 
          key={`line-${index}`}
          x1={toSvgX(x1)} y1={toSvgY(y1)} x2={toSvgX(x2)} y2={toSvgY(y2)}
          stroke={index === 0 ? "#3b82f6" : "#ef4444"} 
          strokeWidth="3"
          strokeLinecap="round"
          filter="drop-shadow(0px 2px 2px rgba(0,0,0,0.1))"
        />
      );
    } catch (e) { return null; }
  };

  return (
    <div className="flex flex-col items-center my-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {/* Defs for gradients/shadows */}
        <defs>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Grid */}
        {gridLines}

        {/* Axis Labels */}
        <text x={size - 25} y={toSvgY(0) - 5} fill="#64748b" fontSize="12" fontWeight="bold">x</text>
        <text x={toSvgX(0) + 5} y={25} fill="#64748b" fontSize="12" fontWeight="bold">y</text>

        {/* Origin Label */}
        <text x={toSvgX(0) - 15} y={toSvgY(0) + 15} fill="#94a3b8" fontSize="10">0</text>

        {/* Render Equations */}
        {equations.map((eq, i) => renderLine(eq, i))}

        {/* Render Points */}
        {points.map((p, i) => (
          <g key={`point-${i}`}>
            <circle 
              cx={toSvgX(p.x)} cy={toSvgY(p.y)} r="5" 
              fill="#1e293b" stroke="#fff" strokeWidth="2" 
            />
            {p.label && (
              <text 
                x={toSvgX(p.x) + 8} y={toSvgY(p.y) - 8} 
                fill="#1e293b" fontSize="11" fontWeight="bold"
                style={{ paintOrder: 'stroke', stroke: '#fff', strokeWidth: 3 }}
              >
                {p.label} ({p.x}, {p.y})
              </text>
            )}
          </g>
        ))}
      </svg>
      {equations.length > 0 && (
        <div className="mt-2 flex gap-4 text-xs font-medium">
          {equations.map((eq, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className={`w-3 h-1 rounded-full ${i === 0 ? 'bg-blue-500' : 'bg-red-500'}`}></div>
              <span className="text-slate-600">${eq}$</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MathGraph;
