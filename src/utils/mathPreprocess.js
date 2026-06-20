/**
 * Math string pre-processing shared by the renderer (MathView) and the
 * seed/seeder LaTeX validators.
 *
 * Kept React-free and side-effect-free so it can be imported from a plain
 * Node script (scripts/validateSeeds.mjs) as well as the browser.
 *
 * ONLY normalises content (unicode → LaTeX, delimiter healing, naked-command
 * wrapping). It NEVER renders. The database already stores correct LaTeX in the
 * common case; this layer papers over the messy imports.
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

  // 3-pre. Heal \(...\) blocks with unclosed braces so KaTeX auto-render can
  // locate the closing \) delimiter. Broken imports sometimes truncate content
  // mid-\frac, e.g. "\frac{5 \pm 1\)" — the { is never closed so the scanner
  // never finds \) at brace-depth 0 and leaves raw text. We close any
  // outstanding open braces right before the \) so KaTeX at least attempts
  // to render (it will show a styled error for missing args, not raw source).
  str = str.replace(/\\\(([\s\S]*?)\\\)/g, (match, inner) => {
    let depth = 0;
    for (const ch of inner) {
      if (ch === '{') depth++;
      else if (ch === '}') depth--;
    }
    return depth > 0 ? `\\(${inner}${'}'.repeat(depth)}\\)` : match;
  });

  // 3a. Wrap LaTeX environments (aligned/cases/matrix/…) in display math so
  // KaTeX renders them. They often arrive as raw LaTeX without $ delimiters
  // (e.g. solution "workingOut" fields), which would otherwise show literally.
  // We match them and check the preceding and succeeding characters manually to avoid lookbehinds/lookaheads.
  // Precompute existing math-delimiter spans so we never wrap an environment
  // that is ALREADY inside \(…\)/$…$ (e.g. "\( f(x) = \begin{cases}…\end{cases} \)").
  // The old adjacency-only check missed this because the delimiter isn't
  // immediately before \begin, which then nested $$ inside \( … \) and broke.
  const mathSpans = [];
  const spanRe = /\$\$[\s\S]*?\$\$|\$[\s\S]*?\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]/g;
  let spanMatch;
  while ((spanMatch = spanRe.exec(str)) !== null) {
    mathSpans.push([spanMatch.index, spanMatch.index + spanMatch[0].length]);
  }
  const insideMathSpan = (pos) => mathSpans.some(([a, b]) => pos >= a && pos < b);

  const envRegex = /\\begin\{(aligned|aligned\*|align|align\*|alignedat|array|cases|matrix|pmatrix|bmatrix|vmatrix|Bmatrix|gathered|gather|split)\}[\s\S]*?\\end\{\1\}/g;
  str = str.replace(envRegex, (match, envName, offset, fullStr) => {
    if (insideMathSpan(offset)) {
      return match;
    }
    const before = fullStr.slice(Math.max(0, offset - 3), offset);
    if (before.endsWith('$') || before.endsWith('\\(') || before.endsWith('\\[')) {
      return match;
    }
    const after = fullStr.slice(offset + match.length, offset + match.length + 3);
    if (after.startsWith('$') || after.startsWith('\\)') || after.startsWith('\\]')) {
      return match;
    }
    return `$$${match}$$`;
  });

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
    const textInner = (str.match(/\\text\s*\{([^{}]*)\}/g) || [])
      .map((t) => t.replace(/^\\text\s*\{|\}$/g, ''))
      .join(' ');
    // A genuine prose SENTENCE has at least two consecutive words. A lone
    // subscript/unit label like \text{tangent} or a connector like
    // \text{ or } is PART of the formula — splitting on it would fragment the
    // surrounding math (e.g. "m_{\text{tangent}} = …" → "$m_{$tangent$}…$").
    // Those fall through to Case B and get wrapped whole, which KaTeX renders
    // correctly including the \text.
    const hasSentence = /[a-zA-Z]{3,}\s+[a-zA-Z]+/.test(textInner);
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
      .replace(/\\(operatorname|mathrm|mathbf|mathbb|mathcal|text)\s*\{[^{}]*\}/g, '')
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
  //   - we inspect the surrounding characters manually to avoid regex lookbehinds/lookaheads
  //   - the trailing (?![\d.,]*[a-zA-Z^]) ensures "$3x^2$" / "$5y$" stay MATH:
  //     a number followed by a letter/caret is algebra, not money.
  const CURRENCY_PLACEHOLDER = '\uE000';
  // Number must be consumed whole (no backtracking into "$10" + ".75") and a
  // following arithmetic operator (+ − = ? etc.) is still money, not algebra:
  // generator questions like "$10.75 + $7.75 = ?" must keep BOTH dollar signs.
  str = str.replace(/\$(\s*\d+(?:[.,]\d+)*)/g, (match, numGroup, offset, fullStr) => {
    const beforeChar = offset > 0 ? fullStr[offset - 1] : '';
    if (beforeChar === '$' || beforeChar === '\\') {
      return match;
    }
    const afterIndex = offset + match.length;
    const afterChar = afterIndex < fullStr.length ? fullStr[afterIndex] : '';
    if (afterChar === '$') {
      return match;
    }
    const rest = fullStr.slice(afterIndex);
    if (/^[\d.,]?[a-zA-Z^]/.test(rest)) {
      return match;
    }
    // Currency contexts: followed by a word ("$5 each"), end/punctuation, OR an
    // arithmetic operator — BUT the operator case only counts as money when
    // ANOTHER "$<digit>" follows (real money arithmetic like "$10.75 + $7.75").
    // Otherwise "$1 + \dfrac{2}{x}…$" or "$0 < x < …$" is a MATH block whose
    // opening "$" must be preserved (stripping it unbalances and breaks it).
    const wordOrEnd = /^(?:\s+[a-zA-Z]|\s*$|\s*[.,)?])/.test(rest);
    // Money arithmetic only when the NEXT "$" in rest is itself an amount
    // ($<digit>), e.g. "$10.75 + $7.75". If the next "$" is a closing delimiter
    // (as in the math block "$30 - 6 = 24$"), this is math — keep the "$".
    const moneyArithmetic = /^\s*[-+−–=]/.test(rest) && /^[^$]*\$\s*\d/.test(rest);
    if (!wordOrEnd && !moneyArithmetic) {
      return match;
    }
    return CURRENCY_PLACEHOLDER + numGroup;
  });

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
      // Argument groups allow ONE level of nesting so "\frac{\sqrt{2}}{3}" is
      // captured whole (a flat [^{}]* would stop at the inner "{" and wrap only
      // "\frac", fragmenting the expression).
      const nakedCommandRegex = /\\(sqrt|frac|mathbb|mathrm|operatorname|text|varphi|phi|pi|theta|approx|times|div|cdot|pm|geq|leq|neq|ge|le|ne|infty|in|notin|quad|qquad|forall|exists|Rightarrow|rightarrow|Leftarrow|leftarrow|implies|times|cup|cap|subseteq|to|circ|deg)(?![a-zA-Z])(\{(?:[^{}]|\{[^{}]*\})*\})*/g;
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

      // Heal double superscripts: "x^2^{2}" is invalid in KaTeX but authors
      // write it to mean (x^2)^2. Re-group the base + first exponent so it
      // renders exactly as intended: x^2^{2} → {x^2}^{2}. Loop for chains.
      let prevMath;
      do {
        prevMath = math;
        math = math.replace(/([A-Za-z0-9)\]])\^(\{[^{}]*\}|[A-Za-z0-9])\^/g, '{$1^$2}^');
      } while (math !== prevMath);

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
      // Re-split first so fraction-conversion's new $...$ blocks are excluded.
      const caretRegex = /(\([^()]*\)|[a-zA-Z0-9])\s*\^\s*(\{[^{}]*\}|-?\d+|[a-zA-Z])/g;
      const innerMathRe = /(\$\$[^$]*?\$\$|\$[^$]+?\$)/g;
      const innerParts = text.split(innerMathRe);
      for (let j = 0; j < innerParts.length; j++) {
        if (j % 2 === 0) {
          innerParts[j] = innerParts[j].replace(caretRegex, (m, base, exp) => {
            const e = exp.replace(/^\{|\}$/g, '');
            return `$${base}^{${e}}$`;
          });
        }
      }
      text = innerParts.join('');
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

export { toDisplayText };
export default toDisplayText;
