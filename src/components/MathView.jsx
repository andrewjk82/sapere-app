import React, { useLayoutEffect, useRef } from 'react';
import MathGraph from './MathGraph';
import GeometricDiagram from './GeometricDiagram';
import JsxGraphDiagram from './JsxGraphDiagram';
import GeometryRenderer from './GeometryRenderer';
import GeometryFigure from './GeometryFigure';
import { encodeSvgDataUrl } from '../utils/geometrySvg';
import { toDisplayText } from '../utils/mathPreprocess';

// toDisplayText lives in a React-free module so the seed/seeder LaTeX
// validators (scripts/validateSeeds.mjs, latexValidate.js) can reuse the
// exact same preprocessing the renderer applies.

// Convert markdown tables to HTML before line-splitting so the table
// structure is preserved. Called on the full content string.
const convertMarkdownTables = (str) => {
  if (typeof str !== 'string') return str;
  const tableLineRe = /^\s*\|.+\|\s*$/;
  const separatorRe = /^\s*\|[\s|:\-]+\|\s*$/;
  const rawLines = str.split(/\\+n|\r?\n/);
  const out = [];
  let i = 0;
  while (i < rawLines.length) {
    const line = rawLines[i];
    if (tableLineRe.test(line) && i + 1 < rawLines.length && separatorRe.test(rawLines[i + 1])) {
      const parseCells = (l) => l.replace(/^\s*\||\|\s*$/g, '').split('|').map(c => c.trim());
      const headers = parseCells(line);
      i += 2;
      const rows = [];
      while (i < rawLines.length && tableLineRe.test(rawLines[i])) {
        rows.push(parseCells(rawLines[i]));
        i++;
      }
      let html = '<table style="border-collapse:collapse;margin:8px auto;font-family:inherit">';
      html += '<thead><tr>' + headers.map(h => `<th style="border:1px solid #cbd5e1;padding:6px 12px;background:#f1f5f9;text-align:center">${h}</th>`).join('') + '</tr></thead>';
      if (rows.length) {
        html += '<tbody>' + rows.map(r => '<tr>' + r.map(c => `<td style="border:1px solid #cbd5e1;padding:6px 12px;min-width:40px;text-align:center">${c}</td>`).join('') + '</tr>').join('') + '</tbody>';
      }
      html += '</table>';
      out.push(html);
    } else {
      out.push(line);
      i++;
    }
  }
  return out.join('\n');
};

const MathView = ({ content, graphData: rawGraphData, style }) => {
  const containerRef = useRef(null);

  // Pre-process: convert markdown tables to HTML before line-splitting
  const processedContent = typeof content === 'string' ? convertMarkdownTables(content) : content;

  let lines = [];
  if (typeof processedContent === 'string') {
    // If it looks like block HTML (contains block tags), don't split by newline, treat as one block
    if (/<(div|p|ul|ol|table|svg|h[1-6]|pre)[>\s]/i.test(processedContent)) {
      lines = [processedContent];
    } else {
      // Only split on newlines that are OUTSIDE of math blocks.
      const mathBlockRegex = /(\$\$[\s\S]*?\$\$|\$[\s\S]*?\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\])/g;
      const parts = processedContent.split(mathBlockRegex);
    let currentLine = "";
    for (let i = 0; i < parts.length; i++) {
      if (i % 2 === 0) {
        // Plain text part: split by actual newlines or the literal string "\n" (handling double-escaped newlines)
        const textParts = parts[i].split(/\\+n|\r?\n/);
        for (let j = 0; j < textParts.length; j++) {
          if (j > 0) {
            lines.push(currentLine);
            currentLine = "";
          }
          currentLine += textParts[j];
        }
      } else {
        // Math block: keep it intact on the current line
        currentLine += parts[i];
      }
    }
    lines.push(currentLine);
    }
  } else {
    lines = [processedContent];
  }

  // Auto-split trailing math block at the end of a single-line question to center it
  if (lines.length === 1 && typeof lines[0] === 'string') {
    // Only auto-split if the preceding text ends with a colon (:) or the math block is a block math block ($$ or \[)
    const match = lines[0].match(/^(.*?:)(?:\s+)(\$\$[\s\S]+?\$\$|\$[\s\S]+?\$|\\\([\s\S]+?\\\)|\\\[[\s\S]+?\\\])([.?!]*)$/) ||
                  lines[0].match(/^(.*?(?::|,)?)(?:\s+)(\$\$[\s\S]+?\$\$|\\\[[\s\S]+?\\\])([.?!]*)$/);
    if (match) {
      lines = [match[1].trim(), (match[2] + match[3]).trim()];
    }
  }

  // graphData may arrive as an object OR as a JSON string (it is stringified
  // for the Question Bank editor and can survive that way through some save
  // paths). Normalise to an object so the diagram always renders.
  let graphData = rawGraphData;
  if (typeof rawGraphData === 'string' && rawGraphData.trim()) {
    try { graphData = JSON.parse(rawGraphData); } catch { graphData = null; }
  }
  const diagramSvg = graphData?.diagramSvg || graphData?.svgSnapshot || graphData?.svg;
  const diagramSvgSrc = typeof diagramSvg === 'string' && diagramSvg.trim().startsWith('<svg')
    ? encodeSvgDataUrl(diagramSvg)
    : diagramSvg;

  // The effect fully owns the math div's DOM: it injects the raw content AND
  // runs KaTeX. We deliberately do NOT use dangerouslySetInnerHTML here —
  // React re-applying it on re-render would stomp KaTeX's rendered output back
  // to raw "$3$" text without re-triggering this effect.
  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return undefined;

    lines.forEach((line, idx) => {
      const childEl = el.querySelector(`.math-view-line-${idx}`);
      if (childEl) {
        childEl.innerHTML = toDisplayText(line, '', { currencyHtml: true });
      }
    });

    // Inline diagram SVGs sometimes place labels (e.g. the angle "α") right on
    // the viewBox edge, where the default SVG overflow:hidden clips them.
    // Let question diagrams overflow so edge labels stay visible.
    el.querySelectorAll('svg').forEach((svg) => { svg.style.overflow = 'visible'; });

    // SVG <text> elements don't go through KaTeX, so authors who write
    // "\theta" or "60^\circ" inside inline SVG would see the literal LaTeX
    // string. We post-process every text node inside any rendered SVG and
    // swap the common LaTeX greek/math commands for their unicode glyph.
    // This is a pure visual fix — the underlying string in the DB is left
    // alone so it remains editable.
    const LATEX_TO_UNICODE = [
      [/\\theta\b/g, 'θ'], [/\\Theta\b/g, 'Θ'],
      [/\\alpha\b/g, 'α'], [/\\beta\b/g, 'β'],
      [/\\gamma\b/g, 'γ'], [/\\Gamma\b/g, 'Γ'],
      [/\\delta\b/g, 'δ'], [/\\Delta\b/g, 'Δ'],
      [/\\phi\b/g, 'φ'], [/\\Phi\b/g, 'Φ'],
      [/\\varphi\b/g, 'φ'],
      [/\\pi\b/g, 'π'], [/\\Pi\b/g, 'Π'],
      [/\\mu\b/g, 'μ'], [/\\lambda\b/g, 'λ'],
      [/\\omega\b/g, 'ω'], [/\\Omega\b/g, 'Ω'],
      [/\\sigma\b/g, 'σ'], [/\\Sigma\b/g, 'Σ'],
      [/\\epsilon\b/g, 'ε'], [/\\rho\b/g, 'ρ'],
      [/\\circ\b/g, '°'], [/\^\s*\\?circ\b/g, '°'],
      [/\\pm\b/g, '±'], [/\\mp\b/g, '∓'],
      [/\\times\b/g, '×'], [/\\div\b/g, '÷'],
      [/\\le\b|\\leq\b/g, '≤'], [/\\ge\b|\\geq\b/g, '≥'],
      [/\\neq\b|\\ne\b/g, '≠'], [/\\approx\b/g, '≈'],
      [/\\cdot\b/g, '·'], [/\\sqrt\b/g, '√'],
      [/\\infty\b/g, '∞'],
    ];
    el.querySelectorAll('svg text').forEach((node) => {
      let original = node.textContent;
      if (!original) return;

      // Clean up math delimiters if they leaked into SVG text nodes
      original = original.replace(/^\$|\$$/g, '');

      // Replace \sqrt{...} with √(...)
      original = original.replace(/\\sqrt\s*\{([^}]+)\}/g, '√$1');
      original = original.replace(/\\sqrt\s*([a-zA-Z0-9])/g, '√$1');

      if (original.indexOf('\\') < 0) {
        node.textContent = original;
        return;
      }

      let next = original;
      LATEX_TO_UNICODE.forEach(([re, glyph]) => { next = next.replace(re, glyph); });
      if (next !== original) node.textContent = next;
    });

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
            macros: {
              "\\hexagon": "\\text{⬡}"
            },
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
  }, [content, rawGraphData]);

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
      <div ref={containerRef} style={combinedStyle}>
        {lines.map((line, idx) => {
          const isSecondLine = idx === 1;
          const hasDisplayMath = /\\+\[|\$\$/.test(String(line));
          const isPureMath = /^\s*(?:\$\$|\\+\[|\$|\\+\()[\s\S]+?(?:\$\$|\\+\]|\$|\\+\))[\s,;:?.!]*$/.test(String(line).trim());
          const isCentered = idx > 0 && (hasDisplayMath || isPureMath);
          return (
            <div
              key={idx}
              className={`math-view-line-${idx}`}
              style={{
                textAlign: isCentered ? 'center' : 'inherit',
                width: '100%',
                display: 'block',
                marginTop: idx > 0 ? '8px' : '0px'
              }}
            />
          );
        })}
      </div>
      {diagramSvgSrc && !graphData?.geometry ? (
        <img
          src={diagramSvgSrc}
          alt="Diagram"
          style={{ width: 'auto', maxHeight: '320px', objectFit: 'contain', marginTop: '16px', alignSelf: 'center', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
        />
      ) : (
        <>
          {graphData?.geometry ? (
            <GeometryFigure {...graphData.geometry} />
          ) : (
            <>
              {graphData && !graphData.html && !graphData.diagram && !graphData.jsxGraph && <MathGraph {...graphData} />}
              {graphData?.diagram && <GeometricDiagram {...graphData.diagram} />}
              {graphData?.jsxGraph && (
                (graphData.jsxGraph.elements && !graphData.jsxGraph.script)
                  ? <GeometryRenderer data={graphData.jsxGraph} />
                  : <JsxGraphDiagram data={graphData.jsxGraph} />
              )}
              {graphData?.html && <div dangerouslySetInnerHTML={{ __html: graphData.html }} style={{ marginTop: '8px' }} />}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default MathView;
export { toDisplayText };
