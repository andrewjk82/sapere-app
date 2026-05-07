import React, { useEffect, useRef } from 'react';

const toDisplayText = (value, fallback = '') => {
  if (value === null || value === undefined) return fallback;
  let str = '';
  if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
    str = String(value);
  } else if (typeof value === 'object') {
    str = String(value.text ?? value.label ?? value.question ?? value.value ?? fallback);
  } else {
    str = fallback;
  }

  // Auto-format symbols if no delimiters are present
  if (!str.includes('$') && !str.includes('\\(') && !str.includes('\\[')) {
    // Surgically replace symbols with delimited LaTeX
    str = str
      .replace(/√\s*(\d+)/g, '$\\sqrt{$1}$')
      .replace(/√\s*\((.*?)\)/g, '$\\sqrt{$1}$')
      .replace(/√/g, '$\\sqrt{}$')
      .replace(/(\d+)\s+(\d+)\s*\/\s*(\d+)/g, '$1 $\\frac{$2}{$3}$') // Mixed numbers: 5 1/4
      .replace(/(\d+)\s*\/\s*(\d+)/g, '$\\frac{$1}{$2}$') // Simple fractions: 1/4
      .replace(/(\d+)([²³])/g, (m, d, s) => `$${d}^${s === '²' ? '2' : '3'}$`)
      .replace(/([πθ×÷])/g, (m) => {
        if (m === 'π') return '$\\pi$';
        if (m === 'θ') return '$\\theta$';
        if (m === '×') return '$\\times$';
        if (m === '÷') return '$\\div$';
        return m;
      });

    // Handle percentage signs if they are adjacent to math
    str = str.replace(/(\$)\s*%/g, '$1\\%');

    // Clean up any double dollars or spaces that might have been created
    str = str.replace(/\$\$/g, '').replace(/\$\s+\$/g, ' ');
  }

  // Clean up LaTeX escapes if not in math mode
  if (!str.includes('$') && !str.includes('\\(') && !str.includes('\\[')) {
    str = str.replace(/\\%/g, '%').replace(/\\\$/g, '$');
  }
  
  return str;
};

const MathView = ({ content, style }) => {
  const containerRef = useRef(null);
  const safeContent = toDisplayText(content);

  useEffect(() => {
    if (containerRef.current && window.renderMathInElement) {
      try {
        window.renderMathInElement(containerRef.current, {
          delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '$', right: '$', display: false },
            { left: '\\(', right: '\\)', display: false },
            { left: '\\[', right: '\\]', display: true }
          ],
          throwOnError: false
        });
      } catch (err) {
        console.warn("Katex error:", err);
      }
    }
  }, [safeContent]);

  const combinedStyle = {
    fontFamily: '"KaTeX_Main", "Times New Roman", serif',
    letterSpacing: '0.01em',
    fontWeight: 'inherit',
    ...style
  };

  return (
    <div ref={containerRef} style={combinedStyle}>{safeContent}</div>
  );
};

export default MathView;
export { toDisplayText };
