import React, { useEffect, useRef } from 'react';

const toDisplayText = (value, fallback = '') => {
  if (value === null || value === undefined) return fallback;
  if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
    return String(value);
  }
  if (typeof value === 'object') {
    const val = value.text ?? value.label ?? value.question ?? value.value ?? fallback;
    return String(val);
  }
  return fallback;
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

  return (
    <div ref={containerRef} style={style}>{safeContent}</div>
  );
};

export default MathView;
export { toDisplayText };
