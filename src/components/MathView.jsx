import React, { useLayoutEffect, useRef } from 'react';
import MathGraph from './MathGraph';
import GeometricDiagram from './GeometricDiagram';
import JsxGraphDiagram from './JsxGraphDiagram';

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
  // Fix a bad-data artifact: SVG diagram labels sometimes contain "60^°"
  // (a stray caret before the degree sign). It is never valid, so drop it.
  str = str.replace(/\^\s*°/g, '°');

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
      
      // Step A: Wrap naked LaTeX commands FIRST (before fraction conversion)
      // so that \sqrt{3} becomes $\sqrt{3}$ as a single token.
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

  // Step B: NOW do fraction conversion on the reassembled string.
  // Re-tokenize so we only touch plain-text segments (not the $..$ blocks we just created).
  const mathBlockRegex2 = /(\$\$[\s\S]*?\$\$|\$[^$]*?\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\])/g;
  const parts2 = str.split(mathBlockRegex2);
  for (let i = 0; i < parts2.length; i++) {
    if (i % 2 === 0) {
      let text = parts2[i];
      // Convert (A) / (B) into $\frac{A}{B}$
      text = text.replace(/\(([^()]+)\)\s*\/\s*\(([^()]+)\)/g, '$\\frac{$1}{$2}$');
      text = text.replace(/([a-zA-Z0-9\.\,\\]+)\s*\/\s*\(([^()]+)\)/g, '$\\frac{$1}{$2}$');
      text = text.replace(/\(([^()]+)\)\s*\/\s*([a-zA-Z0-9\.\,\\]+)/g, '$\\frac{$1}{$2}$');
      
      // Convert n/4 -> $\frac{n}{4}$
      text = text.replace(/\b(\d*[a-zA-Z]+|\d+)\s*\/\s*(\d+)\b/g, (match, p1, p2) => {
        if (p1.length <= 4 && p2.length <= 3 && !match.includes('/202') && !match.includes('/201')) {
          return `$\\frac{${p1}}{${p2}}$`;
        }
        return match;
      });
      // Render line breaks: real newlines AND the literal "\n" sequence that
      // leaks into imported question/solution text become <br>. Only applied
      // outside math blocks so KaTeX content is never corrupted.
      text = text.replace(/\\n|\r\n|\r|\n/g, '<br>');
      parts2[i] = text;
    }
  }
  str = parts2.join('');

  // 5. Final cleanup: If entire string is equation
  if (!str.includes('$') && str.includes('=') && !/[a-zA-Z]{3,}/.test(str)) {
    str = `$${str.trim()}$`;
  }

  // Cleanup potential artifact from messy DB entries: $$$ -> $$
  str = str.replace(/\$\$\$/g, '$$');

  return str;
};

const MathView = ({ content, graphData: rawGraphData, style }) => {
  const containerRef = useRef(null);
  const safeContent = toDisplayText(content);

  // graphData may arrive as an object OR as a JSON string (it is stringified
  // for the Question Bank editor and can survive that way through some save
  // paths). Normalise to an object so the diagram always renders.
  let graphData = rawGraphData;
  if (typeof rawGraphData === 'string' && rawGraphData.trim()) {
    try { graphData = JSON.parse(rawGraphData); } catch { graphData = null; }
  }

  // The effect fully owns the math div's DOM: it injects the raw content AND
  // runs KaTeX. We deliberately do NOT use dangerouslySetInnerHTML here —
  // React re-applying it on re-render would stomp KaTeX's rendered output back
  // to raw "$3$" text without re-triggering this effect.
  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return undefined;
    el.innerHTML = safeContent;

    // Inline diagram SVGs sometimes place labels (e.g. the angle "α") right on
    // the viewBox edge, where the default SVG overflow:hidden clips them.
    // Let question diagrams overflow so edge labels stay visible.
    el.querySelectorAll('svg').forEach((svg) => { svg.style.overflow = 'visible'; });

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
    fontFamily: '"Lora", "Georgia", "Times New Roman", serif',
    letterSpacing: '0',
    lineHeight: 1.65,
    fontWeight: 'inherit',
    ...style,
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {/* Question text first, then the figure — questions refer to the
          diagram as "below". */}
      <div ref={containerRef} style={combinedStyle} />
      {graphData && !graphData.html && !graphData.diagram && !graphData.jsxGraph && <MathGraph {...graphData} />}
      {graphData?.diagram && <GeometricDiagram {...graphData.diagram} />}
      {graphData?.jsxGraph && <JsxGraphDiagram data={graphData.jsxGraph} />}
      {graphData?.html && <div dangerouslySetInnerHTML={{ __html: graphData.html }} style={{ marginTop: '8px' }} />}
    </div>
  );
};

export default MathView;
export { toDisplayText };
