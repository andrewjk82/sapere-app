import React from 'react';
import { motion } from 'framer-motion';

const InteractiveFractionGrid = ({ gridConfig, selectedCells = [], onChange, disabled }) => {
  const { type = 'rect', rows = 1, cols = 1, totalCells } = gridConfig;

  const handleCellClick = (cellIndex) => {
    if (disabled) return;
    const isSelected = selectedCells.includes(cellIndex);
    if (isSelected) {
      onChange(selectedCells.filter(id => id !== cellIndex));
    } else {
      onChange([...selectedCells, cellIndex]);
    }
  };

  if (type === 'rect') {
    return (
      <div 
        style={{
          display: 'grid',
          gridTemplateRows: `repeat(${rows}, 1fr)`,
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gap: '2px',
          width: 'fit-content',
          margin: '0 auto',
          background: '#cbd5e1',
          border: '2px solid #94a3b8',
          borderRadius: '4px',
          overflow: 'hidden'
        }}
      >
        {Array.from({ length: rows * cols }).map((_, i) => {
          const isSelected = selectedCells.includes(i);
          return (
            <motion.div
              key={i}
              onClick={() => handleCellClick(i)}
              whileHover={!disabled ? { scale: 0.98 } : {}}
              whileTap={!disabled ? { scale: 0.95 } : {}}
              style={{
                width: '50px',
                height: '50px',
                background: isSelected ? '#60a5fa' : 'white',
                cursor: disabled ? 'default' : 'pointer',
                transition: 'background 0.2s ease'
              }}
            />
          );
        })}
      </div>
    );
  }

  if (type === 'triangle_split') {
    // A grid of squares, where each square is split diagonally into two triangles.
    // Total cells = rows * cols * 2
    return (
      <div 
        style={{
          display: 'grid',
          gridTemplateRows: `repeat(${rows}, 1fr)`,
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gap: '2px',
          width: 'fit-content',
          margin: '0 auto',
          background: '#cbd5e1',
          border: '2px solid #94a3b8',
          borderRadius: '4px',
          overflow: 'hidden'
        }}
      >
        {Array.from({ length: rows * cols }).map((_, i) => {
          const topTriangleIdx = i * 2;
          const bottomTriangleIdx = i * 2 + 1;
          const topSelected = selectedCells.includes(topTriangleIdx);
          const bottomSelected = selectedCells.includes(bottomTriangleIdx);

          return (
            <div
              key={i}
              style={{
                width: '60px',
                height: '60px',
                position: 'relative',
                background: 'white',
                overflow: 'hidden'
              }}
            >
              {/* Top-Left Triangle */}
              <div 
                onClick={() => handleCellClick(topTriangleIdx)}
                style={{
                  position: 'absolute',
                  top: 0, left: 0, right: 0, bottom: 0,
                  clipPath: 'polygon(0 0, 100% 0, 0 100%)',
                  background: topSelected ? '#60a5fa' : 'white',
                  cursor: disabled ? 'default' : 'pointer',
                  borderRight: '1px solid #cbd5e1', // To visualize split
                  borderBottom: '1px solid #cbd5e1'
                }}
              />
              {/* Bottom-Right Triangle */}
              <div 
                onClick={() => handleCellClick(bottomTriangleIdx)}
                style={{
                  position: 'absolute',
                  top: 0, left: 0, right: 0, bottom: 0,
                  clipPath: 'polygon(100% 100%, 100% 0, 0 100%)',
                  background: bottomSelected ? '#60a5fa' : 'white',
                  cursor: disabled ? 'default' : 'pointer'
                }}
              />
              {/* Diagonal Line Separator */}
              <svg style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} width="100%" height="100%">
                <line x1="0" y1="100%" x2="100%" y2="0" stroke="#cbd5e1" strokeWidth="2" />
              </svg>
            </div>
          );
        })}
      </div>
    );
  }

  return <div>Unsupported grid type</div>;
};

export default InteractiveFractionGrid;
