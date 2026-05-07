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
    let hasMath = false;
    let processed = str
      .replace(/√\s*(\d+)/g, (m, d) => { hasMath = true; return `\\sqrt{${d}}`; })
      .replace(/√\s*\(/g, () => { hasMath = true; return '\\sqrt{('; })
      .replace(/√/g, () => { hasMath = true; return '\\sqrt'; })
      .replace(/(\d+)([²³])/g, (m, d, s) => { hasMath = true; return `{${d}}^${s === '²' ? '2' : '3'}`; })
      .replace(/([πθ×÷])/g, (m) => { 
        hasMath = true; 
        if (m === 'π') return '\\pi';
        if (m === 'θ') return '\\theta';
        if (m === '×') return '\\times';
        if (m === '÷') return '\\div';
        return m;
      });

    if (hasMath) {
      // Wrap the entire expression in $ and use \text{} for plain words
      // Heuristic: Wrap sequences of 4+ letters/spaces in \text{}
      str = `$${processed.replace(/([a-zA-Z\s]{4,})/g, '\\text{$1}')}$`;
    }
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
    letterSpacing: '0.02em',
    fontWeight: 'normal',
    ...style
  };

  return (
    <div ref={containerRef} style={combinedStyle}>{safeContent}</div>
  );
};

export default MathView;
export { toDisplayText };
