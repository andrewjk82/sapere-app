import React from 'react';

const GeometricDiagram = ({ type, data, config = { size: 300 } }) => {
  const { size } = config;
  const padding = 60;
  const innerSize = size - padding * 2;

  if (type === 'rectangle') {
    const { widthLabel, heightLabel, labels = {} } = data;
    // We'll draw a rectangle that fits nicely
    const rectWidth = innerSize * 0.8;
    const rectHeight = innerSize * 0.5;
    const x = (size - rectWidth) / 2;
    const y = (size - rectHeight) / 2;

    return (
      <div className="flex flex-col items-center my-6 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          {/* Main Rectangle */}
          <rect 
            x={x} y={y} width={rectWidth} height={rectHeight} 
            fill="#f8fafc" stroke="#334155" strokeWidth="2.5" 
          />
          
          {/* Labels */}
          {/* Top Label (Width) */}
          <text 
            x={size / 2} y={y - 15} 
            textAnchor="middle" fill="#0f172a" fontSize="14" fontWeight="bold"
          >
            {widthLabel}
          </text>
          
          {/* Left Label (Height) */}
          <text 
            x={x - 10} y={size / 2} 
            textAnchor="end" dominantBaseline="middle" fill="#0f172a" fontSize="14" fontWeight="bold"
          >
            {heightLabel}
          </text>

          {/* Vertex Labels (A, B, C, D) */}
          <text x={x - 15} y={y - 10} fill="#64748b" fontSize="13" fontWeight="bold">A</text>
          <text x={x + rectWidth + 5} y={y - 10} fill="#64748b" fontSize="13" fontWeight="bold">B</text>
          <text x={x + rectWidth + 5} y={y + rectHeight + 20} fill="#64748b" fontSize="13" fontWeight="bold">C</text>
          <text x={x - 15} y={y + rectHeight + 20} fill="#64748b" fontSize="13" fontWeight="bold">D</text>

          {/* Right Angle Markers */}
          <polyline points={`${x},${y+10} ${x+10},${y+10} ${x+10},${y}`} fill="none" stroke="#94a3b8" strokeWidth="1" />
          <polyline points={`${x+rectWidth-10},${y} ${x+rectWidth-10},${y+10} ${x+rectWidth},${y+10}`} fill="none" stroke="#94a3b8" strokeWidth="1" />
          <polyline points={`${x+rectWidth},${y+rectHeight-10} ${x+rectWidth-10},${y+rectHeight-10} ${x+rectWidth-10},${y+rectHeight}`} fill="none" stroke="#94a3b8" strokeWidth="1" />
          <polyline points={`${x+10},${y+rectHeight} ${x+10},${y+rectHeight-10} ${x},${y+rectHeight-10}`} fill="none" stroke="#94a3b8" strokeWidth="1" />
        </svg>
      </div>
    );
  }

  if (type === 'nested_rectangles') {
    const { innerLabelW, innerLabelH, outerLabelW, outerLabelH } = data;
    const outerW = innerSize * 0.9;
    const outerH = innerSize * 0.6;
    const innerW = outerW * 0.66;
    const innerH = outerH * 0.66;
    const x = (size - outerW) / 2;
    const y = (size - outerH) / 2;

    return (
      <div className="flex flex-col items-center my-6 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          {/* Outer Rectangle APQR */}
          <rect 
            x={x} y={y} width={outerW} height={outerH} 
            fill="none" stroke="#334155" strokeWidth="2" strokeDasharray="4 2"
          />
          
          {/* Inner Rectangle ABCD */}
          <rect 
            x={x} y={y} width={innerW} height={innerH} 
            fill="#f1f5f9" stroke="#334155" strokeWidth="2.5" 
          />

          {/* Labels for Inner Rectangle */}
          <text x={x + innerW / 2} y={y - 8} textAnchor="middle" fill="#1e293b" fontSize="12" fontWeight="bold">{innerLabelW}</text>
          <text x={x - 8} y={y + innerH / 2} textAnchor="end" dominantBaseline="middle" fill="#1e293b" fontSize="12" fontWeight="bold">{innerLabelH}</text>

          {/* Labels for Outer Rectangle */}
          <text x={x + outerW / 2} y={y + outerH + 20} textAnchor="middle" fill="#3b82f6" fontSize="13" fontWeight="900">{outerLabelW}</text>
          <text x={x + outerW + 10} y={y + outerH / 2} dominantBaseline="middle" fill="#3b82f6" fontSize="13" fontWeight="900">{outerLabelH}</text>

          {/* Vertex Labels */}
          <text x={x - 15} y={y - 10} fill="#64748b" fontSize="12" fontWeight="bold">A</text>
          <text x={x + innerW + 5} y={y - 10} fill="#64748b" fontSize="12" fontWeight="bold">B</text>
          <text x={x + outerW + 5} y={y - 10} fill="#3b82f6" fontSize="12" fontWeight="bold">P</text>
          <text x={x + innerW + 5} y={y + innerH + 15} fill="#64748b" fontSize="12" fontWeight="bold">C</text>
          <text x={x + outerW + 5} y={y + outerH + 15} fill="#3b82f6" fontSize="12" fontWeight="bold">Q</text>
          <text x={x - 15} y={y + innerH + 15} fill="#64748b" fontSize="12" fontWeight="bold">D</text>
          <text x={x - 15} y={y + outerH + 15} fill="#3b82f6" fontSize="12" fontWeight="bold">R</text>

          {/* Right Angles */}
          <polyline points={`${x},${y+8} ${x+8},${y+8} ${x+8},${y}`} fill="none" stroke="#94a3b8" strokeWidth="1" />
        </svg>
      </div>
    );
  }

  return null;
};

export default GeometricDiagram;
