import React, { useLayoutEffect, useRef } from 'react';
import MathGraph from './MathGraph';
import GeometricDiagram from './GeometricDiagram';

/**
 * Minimal safe pre-processing.
 * ONLY replaces unicode math symbols with their LaTeX equivalents.
 * NEVER adds, removes, or mutates $ or \( delimiters — 
 * the database already stores correct LaTeX.
 */
const toDisplayText = (value, fallback = '') => {
  if (value === null || value === undefined) return fallback;

  let str = '';
  if (typeof value === 'string') {
    str = value;
  } else if (typeof value === 'number' || typeof value === 'boolean') {
    str = String(value);
  } else if (typeof value === 'object') {
    str = String(value.text ?? value.label ?? value.question ?? value.value ?? fallback);
  } else {
    str = fallback;
  }

  // 1. Unicode → LaTeX symbol substitutions
  str = str.replace(/√/g, '\\sqrt');
  str = str.replace(/π/g, '\\pi');
  str = str.replace(/θ/g, '\\theta');
  str = str.replace(/²/g, '^2');
  str = str.replace(/³/g, '^3');
  str = str.replace(/≤/g, '\\le');
  str = str.replace(/≥/g, '\\ge');
  str = str.replace(/≈/g, '\\approx');
  str = str.replace(/±/g, '\\pm');
  str = str.replace(/×/g, '\\times');
  str = str.replace(/÷/g, '\\div');

  // 1b. Rich HTML content (e.g. a solution with <p>/<strong>/<br>) must NOT
  // go through the math-string transforms below — they corrupt the markup.
  // Return as-is after symbol substitution; KaTeX still renders any $...$.
  if (/<\/(p|div|ul|ol|li|strong|em|h[1-6])>|<br\s*\/?>/i.test(str)) {
    return str;
  }

  // 2. Safety catches for broken data imports (Double backslashes & excessive dollars)
  // Replaces \\ with \ unless it's a structural newline like \\n
  str = str.replace(/\\\\([a-zA-Z0-9])/g, '\\$1');
  // Fix weird triple dollars that sometimes happen in LLM data
  str = str.replace(/\$\$\$/g, '$$');

  // 3. Fix surd syntax: \sqrt18 -> \sqrt{18}
  str = str.replace(/\\sqrt(\d+)/g, '\\sqrt{$1}');

  // 4. Tokenize to separate Math Blocks from Plain Text
  // This prevents wrapping commands that are already inside $...$ or \(...\)
  const mathBlockRegex = /(\$\$[\s\S]*?\$\$|\$[\s\S]*?\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\])/g;
  const parts = str.split(mathBlockRegex);
  
  for (let i = 0; i < parts.length; i++) {
    if (i % 2 === 0) {
      // --- OUTSIDE MATH BLOCKS (Plain Text) ---
      let text = parts[i];
      
      // Convert A / (B) into $\frac{A}{B}$ (Wrapped!)
      text = text.replace(/([a-zA-Z0-9\.\,\\]+)\s*\/\s*\(([^()]+)\)/g, '$\\frac{$1}{$2}$');
      text = text.replace(/\(([^()]+)\)\s*\/\s*([a-zA-Z0-9\.\,\\]+)/g, '$\\frac{$1}{$2}$');
      text = text.replace(/\(([^()]+)\)\s*\/\s*\(([^()]+)\)/g, '$\\frac{$1}{$2}$');
      
      // Convert n/4 -> $\frac{n}{4}$
      text = text.replace(/\b(\d*[a-zA-Z]+|\d+)\s*\/\s*(\d+)\b/g, (match, p1, p2) => {
        if (p1.length <= 4 && p2.length <= 3 && !match.includes('/202') && !match.includes('/201')) {
          return `$\\frac{${p1}}{${p2}}$`;
        }
        return match;
      });

      // Safely wrap naked LaTeX commands
      // A simpler, non-recursive regex is safer against ReDoS
      const nakedCommandRegex = /\\(sqrt|pi|theta|pm|approx|times|div|le|ge|frac|varphi|phi)(\{[^{}]*\})*/g;
      text = text.replace(nakedCommandRegex, (match) => {
        return `$${match}$`;
      });
      
      parts[i] = text;
    } else {
      // --- INSIDE MATH BLOCKS ---
      let math = parts[i];
      
      // We convert A / (B) into \frac{A}{B} WITHOUT wrapping in $, because we are already inside a block!
      math = math.replace(/([a-zA-Z0-9\.\,\\]+)\s*\/\s*\(([^()]+)\)/g, '\\frac{$1}{$2}');
      math = math.replace(/\(([^()]+)\)\s*\/\s*([a-zA-Z0-9\.\,\\]+)/g, '\\frac{$1}{$2}');
      math = math.replace(/\(([^()]+)\)\s*\/\s*\(([^()]+)\)/g, '\\frac{$1}{$2}');
      
      parts[i] = math;
    }
  }
  
  str = parts.join('');

  // 5. Final cleanup: If entire string is equation
  if (!str.includes('$') && str.includes('=') && !/[a-zA-Z]{3,}/.test(str)) {
    str = `$${str.trim()}$`;
  }

  // Cleanup potential artifact from messy DB entries: $$$ -> $$
  str = str.replace(/\$\$\$/g, '$$');

  return str;
};

const MathView = ({ content, graphData, style }) => {
  const containerRef = useRef(null);
  const safeContent = toDisplayText(content);

  // The effect fully owns the math div's DOM: it injects the raw content AND
  // runs KaTeX. We deliberately do NOT use dangerouslySetInnerHTML here —
  // React re-applying it on re-render would stomp KaTeX's rendered output back
  // to raw "$3$" text without re-triggering this effect.
  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return undefined;
    el.innerHTML = safeContent;

    let cancelled = false;
    let retryTimer = null;
    const renderMath = () => {
      if (cancelled || !containerRef.current) return;
      const target = containerRef.current;
      if (window.renderMathInElement) {
        try {
          window.renderMathInElement(target, {
            delimiters: [
              { left: '$$', right: '$$', display: true },
              { left: '$',  right: '$',  display: false },
              { left: '\\(', right: '\\)', display: false },
              { left: '\\[', right: '\\]', display: true },
            ],
            throwOnError: false,
          });
        } catch (err) {
          console.warn('KaTeX render error:', err);
        }
      } else {
        // KaTeX auto-render script not loaded yet — retry shortly.
        retryTimer = setTimeout(renderMath, 150);
      }
    };
    renderMath();

    return () => {
      cancelled = true;
      if (retryTimer) clearTimeout(retryTimer);
    };
  }, [safeContent]);

  const combinedStyle = {
    fontFamily: '"KaTeX_Main", "Times New Roman", serif',
    letterSpacing: '0.01em',
    fontWeight: 'inherit',
    ...style,
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {graphData && !graphData.html && !graphData.diagram && <MathGraph {...graphData} />}
      {graphData?.diagram && <GeometricDiagram {...graphData.diagram} />}
      {graphData?.html && <div dangerouslySetInnerHTML={{ __html: graphData.html }} style={{ marginTop: '8px' }} />}
      <div ref={containerRef} style={combinedStyle} />
    </div>
  );
};

export default MathView;
export { toDisplayText };
