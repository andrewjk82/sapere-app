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
      .replace(/√(\d+)/g, '$\\sqrt{$1}$')  // √150 -> $\sqrt{150}$
      .replace(/√\(/g, '$\\sqrt{(')        // √(...) -> $\sqrt{(...)}$ (partial, hard to match pair)
      .replace(/(\d+)²/g, '$1$^2$')         // 5² -> 5$^2$
      .replace(/(\d+)³/g, '$1$^3$')         // 5³ -> 5$^3$
      .replace(/([πθ])/g, (m) => `$${m === 'π' ? '\\pi' : '\\theta'}$`)
      .replace(/([×÷])/g, (m) => `$${m === '×' ? '\\times' : '\\div'}$`);
      
    // Fix cases where we might have adjacent math blocks like $...$$...$
    str = str.replace(/\$\$/g, '');
    if ((str.match(/\$/g) || []).length % 2 !== 0) {
       str += '$'; // Close if opened but not closed
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
