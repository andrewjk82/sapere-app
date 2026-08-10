import React, { useState } from 'react';

const TrigonometricBoundaryAnglesTable = () => {
  const [selectedCell, setSelectedCell] = useState(null);

  const calculations = {
    sin: {
      0: {
        formula: 'sin θ = y/r',
        variables: 'θ = 0° 일 때\ny = 0  (점의 y좌표)\nr = 1  (반지름)',
        calculation: '0/1 = 0'
      },
      90: {
        formula: 'sin θ = y/r',
        variables: 'θ = 90° 일 때\ny = 1  (점의 y좌표)\nr = 1  (반지름)',
        calculation: '1/1 = 1'
      },
      180: {
        formula: 'sin θ = y/r',
        variables: 'θ = 180° 일 때\ny = 0  (점의 y좌표)\nr = 1  (반지름)',
        calculation: '0/1 = 0'
      },
      270: {
        formula: 'sin θ = y/r',
        variables: 'θ = 270° 일 때\ny = −1  (점의 y좌표)\nr = 1  (반지름)',
        calculation: '(−1)/1 = −1'
      }
    },
    cos: {
      0: {
        formula: 'cos θ = x/r',
        variables: 'θ = 0° 일 때\nx = 1  (점의 x좌표)\nr = 1  (반지름)',
        calculation: '1/1 = 1'
      },
      90: {
        formula: 'cos θ = x/r',
        variables: 'θ = 90° 일 때\nx = 0  (점의 x좌표)\nr = 1  (반지름)',
        calculation: '0/1 = 0'
      },
      180: {
        formula: 'cos θ = x/r',
        variables: 'θ = 180° 일 때\nx = −1  (점의 x좌표)\nr = 1  (반지름)',
        calculation: '(−1)/1 = −1'
      },
      270: {
        formula: 'cos θ = x/r',
        variables: 'θ = 270° 일 때\nx = 0  (점의 x좌표)\nr = 1  (반지름)',
        calculation: '0/1 = 0'
      }
    },
    tan: {
      0: {
        formula: 'tan θ = y/x',
        variables: 'θ = 0° 일 때\ny = 0  (점의 y좌표)\nx = 1  (점의 x좌표)',
        calculation: '0/1 = 0'
      },
      90: {
        formula: 'tan θ = y/x',
        variables: 'θ = 90° 일 때\ny = 1  (점의 y좌표)\nx = 0  (점의 x좌표)',
        calculation: '1/0 = undefined  (0으로 나눔)'
      },
      180: {
        formula: 'tan θ = y/x',
        variables: 'θ = 180° 일 때\ny = 0  (점의 y좌표)\nx = −1  (점의 x좌표)',
        calculation: '0/(−1) = 0'
      },
      270: {
        formula: 'tan θ = y/x',
        variables: 'θ = 270° 일 때\ny = −1  (점의 y좌표)\nx = 0  (점의 x좌표)',
        calculation: '(−1)/0 = undefined  (0으로 나눔)'
      }
    }
  };

  const values = {
    sin: { 0: '0', 90: '1', 180: '0', 270: '−1' },
    cos: { 0: '1', 90: '0', 180: '−1', 270: '0' },
    tan: { 0: '0', 90: 'undefined', 180: '0', 270: 'undefined' }
  };

  const handleCellClick = (angle, func) => {
    setSelectedCell({ angle, func });
  };

  const handleGraphClick = (angle, func) => {
    setSelectedCell({ angle, func });
  };

  return (
    <div style={{ padding: '1.5rem', fontFamily: 'var(--font-sans, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif)' }}>
      <div style={{
        color: 'var(--text-secondary, #666)',
        fontSize: '14px',
        marginBottom: '1.5rem',
        textAlign: 'center'
      }}>
        그래프나 테이블의 빈칸을 클릭해서 계산 과정을 확인하세요.
      </div>

      {selectedCell && (
        <div style={{
          background: 'var(--surface-1, #f8f7f4)',
          border: '0.5px solid var(--border, #e5e7eb)',
          borderRadius: 'var(--radius, 8px)',
          padding: '1.5rem',
          marginBottom: '1.5rem',
          textAlign: 'center'
        }}>
          <div style={{
            fontSize: '18px',
            fontWeight: '500',
            color: 'var(--text-primary, #000)',
            marginBottom: '0.75rem'
          }}>
            {calculations[selectedCell.func][selectedCell.angle].formula}
          </div>
          <div style={{
            background: 'var(--surface-2, #fff)',
            borderRadius: '6px',
            padding: '0.75rem 1rem',
            margin: '0.75rem 0',
            display: 'inline-block',
            fontFamily: 'var(--font-mono, monospace)',
            fontSize: '13px',
            color: 'var(--text-primary, #000)',
            lineHeight: '1.6',
            whiteSpace: 'pre-line'
          }}>
            {calculations[selectedCell.func][selectedCell.angle].variables}
          </div>
          <div style={{
            fontSize: '16px',
            fontWeight: '500',
            color: 'var(--text-primary, #000)',
            marginTop: '0.75rem',
            fontFamily: 'var(--font-mono, monospace)'
          }}>
            ∴ {calculations[selectedCell.func][selectedCell.angle].calculation}
          </div>
        </div>
      )}

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1.5rem',
        marginBottom: '2rem'
      }}>
        {/* sin graph */}
        <GraphCard
          title="sin θ = y/r"
          func="sin"
          selectedCell={selectedCell}
          onGraphClick={handleGraphClick}
          color="#7F77DD"
        />

        {/* cos graph */}
        <GraphCard
          title="cos θ = x/r"
          func="cos"
          selectedCell={selectedCell}
          onGraphClick={handleGraphClick}
          color="#1D9E75"
        />

        {/* tan graph */}
        <GraphCard
          title="tan θ = y/x"
          func="tan"
          selectedCell={selectedCell}
          onGraphClick={handleGraphClick}
          color="#D85A30"
        />
      </div>

      <div style={{ overflowX: 'auto' }}>
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          border: '0.5px solid var(--border, #e5e7eb)',
          borderRadius: 'var(--radius, 8px)',
          overflow: 'hidden'
        }}>
          <thead>
            <tr>
              <th style={{
                background: 'var(--surface-1, #f8f7f4)',
                border: '0.5px solid var(--border, #e5e7eb)',
                padding: '0.75rem',
                fontWeight: '500',
                fontSize: '14px',
                textAlign: 'center',
                color: 'var(--text-primary, #000)'
              }}>θ</th>
              <th style={{
                background: 'var(--surface-1, #f8f7f4)',
                border: '0.5px solid var(--border, #e5e7eb)',
                padding: '0.75rem',
                fontWeight: '500',
                fontSize: '14px',
                textAlign: 'center',
                color: 'var(--text-primary, #000)'
              }}>sin θ</th>
              <th style={{
                background: 'var(--surface-1, #f8f7f4)',
                border: '0.5px solid var(--border, #e5e7eb)',
                padding: '0.75rem',
                fontWeight: '500',
                fontSize: '14px',
                textAlign: 'center',
                color: 'var(--text-primary, #000)'
              }}>cos θ</th>
              <th style={{
                background: 'var(--surface-1, #f8f7f4)',
                border: '0.5px solid var(--border, #e5e7eb)',
                padding: '0.75rem',
                fontWeight: '500',
                fontSize: '14px',
                textAlign: 'center',
                color: 'var(--text-primary, #000)'
              }}>tan θ</th>
            </tr>
          </thead>
          <tbody>
            {[0, 90, 180, 270].map(angle => (
              <tr key={angle}>
                <td style={{
                  background: 'var(--surface-1, #f8f7f4)',
                  border: '0.5px solid var(--border, #e5e7eb)',
                  padding: '0.75rem',
                  textAlign: 'center',
                  fontWeight: '500',
                  color: 'var(--text-primary, #000)',
                  height: '44px'
                }}>
                  {angle}°
                </td>
                {['sin', 'cos', 'tan'].map(func => {
                  const isHighlighted = selectedCell?.angle === angle && selectedCell?.func === func;
                  return (
                    <td
                      key={`${angle}-${func}`}
                      onClick={() => handleCellClick(angle, func)}
                      style={{
                        border: '0.5px solid var(--border, #e5e7eb)',
                        padding: '0.75rem',
                        textAlign: 'center',
                        color: isHighlighted ? 'white' : 'var(--text-primary, #000)',
                        height: '44px',
                        cursor: 'pointer',
                        background: isHighlighted
                          ? 'var(--fill-accent, #2563eb)'
                          : 'var(--surface-2, #fff)',
                        transition: 'all 0.2s',
                        fontWeight: isHighlighted ? '500' : '400'
                      }}
                      onMouseEnter={(e) => {
                        if (!isHighlighted) {
                          e.target.style.background = 'var(--bg-accent, #e0e7ff)';
                          e.target.style.color = 'var(--text-accent, #1e40af)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isHighlighted) {
                          e.target.style.background = 'var(--surface-2, #fff)';
                          e.target.style.color = 'var(--text-primary, #000)';
                        }
                      }}
                    >
                      {values[func][angle]}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const GraphCard = ({ title, func, selectedCell, onGraphClick, color }) => {
  const angles = [0, 90, 180, 270];
  const coords = {
    0: { x: 60, y: 0 },
    90: { x: 0, y: -60 },
    180: { x: -60, y: 0 },
    270: { x: 0, y: 60 }
  };

  return (
    <div style={{
      textAlign: 'center',
      padding: '1rem',
      border: '0.5px solid var(--border, #e5e7eb)',
      borderRadius: 'var(--radius, 8px)',
      background: 'var(--surface-1, #f8f7f4)'
    }}>
      <div style={{
        fontWeight: '500',
        fontSize: '14px',
        marginBottom: '0.75rem',
        color: 'var(--text-primary, #000)'
      }}>
        {title}
      </div>
      <svg width="140" height="140" viewBox="-80 -80 160 160" style={{ display: 'block', margin: '0 auto', cursor: 'pointer' }}>
        {/* Unit circle */}
        <circle cx="0" cy="0" r="60" stroke="var(--border-strong, #cbd5e1)" strokeWidth="1.5" fill="none" />

        {/* Axes */}
        <line x1="-70" y1="0" x2="70" y2="0" stroke="var(--text-secondary, #999)" strokeWidth="1" />
        <line x1="0" y1="-70" x2="0" y2="70" stroke="var(--text-secondary, #999)" strokeWidth="1" />

        {/* Points and highlights */}
        {angles.map(angle => {
          const { x, y } = coords[angle];
          const isActive = selectedCell?.angle === angle && selectedCell?.func === func;
          return (
            <g key={angle}>
              <circle
                cx={x}
                cy={y}
                r={isActive ? 6 : 3}
                fill={color}
                stroke={isActive ? color : 'none'}
                strokeWidth={isActive ? 2 : 0}
                style={{ cursor: 'pointer', transition: 'r 0.2s' }}
                onClick={() => onGraphClick(angle, func)}
              />
              <text
                x={angle === 0 ? 65 : angle === 90 ? 8 : angle === 180 ? -68 : 8}
                y={angle === 90 ? -65 : angle === 270 ? 75 : -8}
                style={{
                  fontSize: '12px',
                  fill: 'var(--text-secondary, #999)',
                  textAnchor: 'middle',
                  pointerEvents: 'none'
                }}
              >
                {angle}°
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default TrigonometricBoundaryAnglesTable;
