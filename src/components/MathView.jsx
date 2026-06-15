import React, { useLayoutEffect, useRef } from 'react';
import MathGraph from './MathGraph';
import GeometricDiagram from './GeometricDiagram';
import JsxGraphDiagram from './JsxGraphDiagram';
import GeometryRenderer from './GeometryRenderer';
import GeometryFigure from './GeometryFigure';
import { encodeSvgDataUrl } from '../utils/geometrySvg';

/**
 * Minimal safe pre-processing.
 * ONLY replaces unicode math symbols with their LaTeX equivalents.
 * NEVER adds, removes, or mutates $ or \( delimiters — 
 * the database already stores correct LaTeX.
 */
const toDisplayText = (value, fallback = '', { currencyHtml = false } = {}) => {
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
  // Fix unrecognized \Colon macro from MathLive/DB
  str = str.replace(/\\Colon\b/g, '\\colon');
  // Fix a bad-data artifact: SVG diagram labels sometimes contain "60^°"
  // (a stray caret before the degree sign). It is never valid, so drop it.
  str = str.replace(/\^\s*°/g, '°');

  // 1b. Rich HTML content (e.g. a solution with <p>/<strong>/<br>) must NOT
  // go through the math-string transforms below — they corrupt the markup.
  // Return as-is after symbol substitution; KaTeX still renders any $...$.
  if (/<\/(p|div|ul|ol|li|strong|em|h[1-6]|svg)>|<br\s*\/?>/i.test(str)) {
    return str;
  }


  // 2. Safety catches for broken data imports (Double backslashes & excessive dollars)
  // Replaces \\ with \ unless it's a structural newline like \\n
  str = str.replace(/\\\\([a-zA-Z0-9])/g, '\\$1');
  // Also clean up double backslashes before parenthesis / brackets for KaTeX delimiters
  str = str.replace(/\\\\([\(\)\[\]])/g, '\\$1');
  // Fix weird triple dollars that sometimes happen in LLM data
  str = str.replace(/\$\$\$/g, '$$');

  // 3. Fix surd syntax: \sqrt18 -> \sqrt{18}
  str = str.replace(/\\sqrt(\d+)/g, '\\sqrt{$1}');

  // 3a. Wrap LaTeX environments (aligned/cases/matrix/…) in display math so
  // KaTeX renders them. They often arrive as raw LaTeX without $ delimiters
  // (e.g. solution "workingOut" fields), which would otherwise show literally.
  // The lookbehind/ahead avoid double-wrapping an already-delimited block.
  // Also skip environments already inside \(...\) or \[...\] delimiters.
  str = str.replace(
    /(?<!\$|\\\(|\\\[)\\begin\{(aligned|aligned\*|align|align\*|alignedat|array|cases|matrix|pmatrix|bmatrix|vmatrix|Bmatrix|gathered|gather|split)\}[\s\S]*?\\end\{\1\}(?!\$|\\\)|\\\])/g,
    (m) => `$$${m}$$`,
  );

  // 3c. Pure-LaTeX expression with NO delimiters (typical of solution
  // "workingOut" fields). Piecemeal command-wrapping cannot handle
  // \left…\right, \!, or nested \frac, so wrap the WHOLE thing in \(…\) and
  // let KaTeX render it as one unit. Guard so we never wrap real prose:
  //   - no existing math delimiters or environments
  //   - contains a LaTeX command / superscript / spacing macro
  //   - single line, and no 3+ letter "words" once commands/\text are stripped
  if (!/[$]|\\\(|\\\[|\\begin/.test(str) && /\\[a-zA-Z]|\^|_|\\!/.test(str) && !/[\r\n]/.test(str)) {
    // Case A: a SENTENCE written in LaTeX (prose inside \text{…}). Wrapping it
    // whole as inline math would never line-break and overflows its box, so
    // render the \text{} parts as real prose (which wraps) and only the math
    // between them as inline $…$.
    const textProse = (str.match(/\\text\s*\{([^{}]*)\}/g) || []).join(' ');
    const hasSentence = (textProse.match(/[a-zA-Z]{3,}/g) || []).length >= 1;
    if (hasSentence) {
      return str
        .split(/(\\text\s*\{[^{}]*\})/g)
        .map((p) => {
          const m = p.match(/^\\text\s*\{([^{}]*)\}$/);
          if (m) return m[1];          // \text{...} → plain prose (wraps)
          if (p.trim() === '') return p; // whitespace between parts
          return `$${p}$`;             // remaining math → inline math
        })
        .join('');
    }
    // Case B: a pure formula (no prose). Piecemeal wrapping can't handle
    // \left…\right / nested \frac, so wrap the whole thing in \(…\).
    const probe = str
      .replace(/\\(operatorname|mathrm|mathbf|mathbb|mathcal)\s*\{[^{}]*\}/g, '')
      .replace(/\\[a-zA-Z]+/g, '')
      .replace(/\\[!,;:>\s]/g, '');
    const proseWords = (probe.match(/[a-zA-Z]{3,}/g) || []).length;
    if (proseWords === 0) {
      return `\\(${str}\\)`;
    }
  }

  // 3b. Currency protection: a lone "$" immediately before a plain number
  // (e.g. "$37.00", "$ 195") is a dollar sign, NOT a LaTeX math delimiter.
  // Left as-is it would open a spurious math block and swallow the text + $.
  // We swap currency dollars for a private-use placeholder so the tokenizer
  // ignores them, then restore literal "$" before returning.
  //   - lookbehind/ahead keep real "$$...$$" display-math untouched
  //   - the trailing (?![\d.,]*[a-zA-Z^]) ensures "$3x^2$" / "$5y$" stay MATH:
  //     a number followed by a letter/caret is algebra, not money.
  const CURRENCY_PLACEHOLDER = '\uE000';
  // Number must be consumed whole (no backtracking into "$10" + ".75") and a
  // following arithmetic operator (+ \u2212 = ? etc.) is still money, not algebra:
  // generator questions like "$10.75 + $7.75 = ?" must keep BOTH dollar signs.
  str = str.replace(/(?<!\$)\$(?!\$)(\s*\d+(?:[.,]\d+)*)(?![\d.,]?[a-zA-Z^])(?=\s+[a-zA-Z]|\s*$|\s*[.,)?]|\s*[-+\u2212\u2013=<>])/g, CURRENCY_PLACEHOLDER + '$1');

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
      // NOTE: list longer prefixes before shorter ones (geq before ge, leq
      // before le, neq before ne, infty before in, qquad before quad) so the
      // alternation never leaves a dangling tail like the "q" in "\geq".
      const nakedCommandRegex = /\\(sqrt|frac|mathbb|mathrm|operatorname|text|varphi|phi|pi|theta|approx|times|div|cdot|pm|geq|leq|neq|ge|le|ne|infty|in|notin|quad|qquad|forall|exists|Rightarrow|rightarrow|Leftarrow|leftarrow|implies|times|cup|cap|subseteq|to|circ|deg)(?![a-zA-Z])(\{[^{}]*\})*/g;
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
      // Convert caret superscripts that leaked into plain text, e.g.
      // "x^3", "x^{3}", "(3x+4)^2", "a^-2" → real superscript math.
      // Base = a paren group or a single letter/digit; exponent = a braced
      // group, signed integer, or single letter.
      text = text.replace(
        /(\([^()]*\)|[a-zA-Z0-9])\s*\^\s*(\{[^{}]*\}|-?\d+|[a-zA-Z])/g,
        (m, base, exp) => {
          const e = exp.replace(/^\{|\}$/g, '');
          return `$${base}^{${e}}$`;
        },
      );
      // Render line breaks: real newlines AND the literal "\n" sequence that
      // leaks into imported question/solution text become <br>. Only applied
      // outside math blocks so KaTeX content is never corrupted.
      text = text.replace(/\\n|\r\n|\r|\n/g, '<br>');
      parts2[i] = text;
    }
  }
  str = parts2.join('');

  // 5. Final cleanup: If entire string is equation
  if (!str.includes('$') && !str.includes(CURRENCY_PLACEHOLDER) && !str.includes('\\(') && !str.includes('\\[') && str.includes('=') && !/[a-zA-Z]{3,}/.test(str)) {
    str = `$${str.trim()}$`;
  }

  // Cleanup potential artifact from messy DB entries: $$$ -> $$
  str = str.replace(/\$\$\$/g, '$$');

  // Restore currency dollar signs protected from the tokenizer. For HTML
  // consumers, isolate each "$" in its own <span> so KaTeX auto-render
  // (which has NO currency/escape handling) can never pair two currency
  // dollars in the same text node into a spurious math block.
  str = str.replace(/\uE000/g, currencyHtml ? '<span>$</span>' : '$');

  return str;
};

// Convert markdown tables to HTML before line-splitting so the table
// structure is preserved. Called on the full content string.
const convertMarkdownTables = (str) => {
  if (typeof str !== 'string') return str;
  const tableLineRe = /^\s*\|.+\|\s*$/;
  const separatorRe = /^\s*\|[\s|:\-]+\|\s*$/;
  const rawLines = str.split(/\r?\n/);
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
        // Plain text part: split by actual newlines or the literal string "\n"
        const textParts = parts[i].split(/\r?\n|\\n/);
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
    // Match text followed by optional spacing/punctuation and a math block (e.g. \(...\) or $$...$$ or $...$) at the end
    const match = lines[0].match(/^(.*?)(?:\s+|:\s*|,\s*)(\$\$[\s\S]+?\$\$|\$[\s\S]+?\$|\\\([\s\S]+?\\\)|\\\[[\s\S]+?\\\])$/);
    if (match) {
      lines = [match[1].trim(), match[2].trim()];
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
  }, [content]);

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
          const hasMath = /\\\(|\\\[|\$|\\dots/.test(String(line));
          const isCentered = idx > 0 && (isSecondLine || hasMath || String(line).trim().length < 30);
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
          style={{ width: '100%', maxHeight: '320px', objectFit: 'contain', marginTop: '8px' }}
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
                graphData.jsxGraph.elements
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
