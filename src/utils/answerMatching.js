// Shared answer-matching utilities. Mirrors the logic that lived inside
// DailyChallenge.jsx so Exam Prep (and any future quiz surface) can grade
// against the exact same normalisation rules.

// Strip LaTeX \text{...} wrappers and common measurement unit suffixes so
// "9355\text{ m}" matches "9355" and "15m" matches "15".
// Strip LaTeX \text{...} wrappers and common measurement unit suffixes so
// "9355\text{ m}" matches "9355" and "15m" matches "15".
const stripUnits = (s, isAlgebraic = false) =>
  s
    // LaTeX \text{ m }, \text{metres}, etc. — but only when the content is
    // actually unit-like (short, letters/°/%// only). \text{} is also used
    // to render literal set/list content in math mode (e.g. MC option
    // "\{\text{a, c, l, n, r, u, y}\}"); blindly deleting that content
    // instead of just the wrapper collapsed several distinct MC options to
    // the same empty string, making unrelated options grade/highlight as
    // correct together (2026-07-21 report). Anything that isn't unit-like
    // gets unwrapped (content kept) rather than deleted.
    .replace(/\\text\s*\{([^{}]*)\}/g, (_, inner) => (/^[a-z°%/]{0,15}$/i.test(inner.trim()) ? '' : inner))
    // Standalone unit words / abbreviations at the end or after a digit
    // Order matters: longer words first to avoid partial matches
    .replace(/\b(kilometres?|meters?|metres?|centimetres?|centimeters?|millimetres?|millimeters?|kilograms?|grams?|litres?|liters?|millilitres?|milliliters?|seconds?|minutes?|hours?|units?|cm²|m²|km²|cm³|m³)\b/gi, '')
    .replace(/(\d)\s*(km²|m²|cm²|mm²|km³|m³|cm³|mm³|km|cm|mm|ml|mg|kg|MJ|kJ)\b/g, '$1')
    .replace(/(\d)?\s*(?:celsius|centigrade|fahrenheit)\b/gi, (match, d) => d ? d : '')
    .replace(/(\d)?\s*units?\b/gi, (match, d) => d ? d : '')
    // Only strip single-letter unit suffixes if NOT an algebraic context
    .replace(/(\d)\s*m\b/g, (match, d) => isAlgebraic ? d + 'm' : d)   // trailing "m" after a number
    .replace(/(\d)\s*g\b/g, (match, d) => isAlgebraic ? d + 'g' : d)   // trailing "g"
    .replace(/(\d)\s*L\b/gi, (match, d) => isAlgebraic ? d + (match.trim() === 'l' ? 'l' : 'L') : d)  // trailing "L" / "l"
    .replace(/(\d)\s*s\b/g, (match, d) => isAlgebraic ? d + 's' : d)   // trailing "s" (seconds)
    // LaTeX percent \% → %
    .replace(/\\%/g, '%');

export const robustNormalize = (str, isAlgebraic = false) => {
  if (!str) return '';
  let s = stripUnits(String(str), isAlgebraic)
    .toLowerCase()
    // stripUnits already decided what to delete vs keep for \text{...};
    // anything left here just needs its wrapper removed, not its content
    // (see stripUnits comment — deleting unconditionally here undid that).
    .replace(/\\text\s*\{([^{}]*)\}/g, '$1')
    .replace(/\\%/g, '%')
    // Temperature / degree units: make "12.5", "12.5°c", "12.5^\circ\text{c}",
    // "12.5 celsius" all compare equal (and likewise for angles "60°" == "60").
    .replace(/\\circ/g, '°')
    .replace(/\^\s*°/g, '°')
    .replace(/°\s*[cf]?/g, '')
    .replace(/\b(celsius|centigrade|fahrenheit)\b/g, '')
    // Normalise square roots so "√26", "sqrt26", "\sqrt{26}", "\sqrt26" all
    // compare equal: collapse every form to "sqrt".
    .replace(/√/g, 'sqrt')
    .replace(/\\sqrt/g, 'sqrt')
    // Strip braces from sqrt{...} BEFORE \frac expansion so that
    // \frac{3sqrt{2}}{2} can be parsed by [^{}]* — without this,
    // the inner {2} causes the \frac regex to bail and the answer
    // ends up as "\frac3sqrt22" which never matches "3sqrt2/2".
    .replace(/sqrt\{([^{}]*)\}/g, 'sqrt$1')
    // Normalise the division symbol: getOptionText()/toDisplayText() convert
    // unicode "÷" to LaTeX "\div" for KaTeX rendering, but a raw stored
    // answer (e.g. question.answer = "5 ÷ 6") keeps the unicode character.
    // Without this, a correct "5 ÷ 6" selection compares its rendered form
    // "5\div6" against the raw "5÷6" and never matches. Collapse both forms
    // to a single "÷" token instead of stripping it (unlike ×) so "5÷6"
    // stays distinguishable from "5×6".
    .replace(/\\div/g, '÷')
    // Normalise ratio colons so "1\Colon4", "1\colon4", "1\ratio4" match "1:4"
    .replace(/\\[Cc]olon/g, ':')
    // Strip any leftover "unit"/"units" word, even when concatenated to a
    // number (e.g. "26units") which word-boundary stripping above misses.
    .replace(/units?/gi, '')
    // Normalise \dfrac / \tfrac / \cfrac → \frac
    .replace(/\\dfrac\s*/g, '\\frac')
    .replace(/\\tfrac\s*/g, '\\frac')
    .replace(/\\cfrac\s*/g, '\\frac')
    .replace(/\\frac\s+\{/g, '\\frac{')
    // MathLive emits single-token fractions WITHOUT braces (e.g. "\frac56").
    // Wrap bare args so the brace-based rules below can parse them.
    .replace(/\\frac\s*(\{[^{}]*\})\s*([0-9a-zA-Z])/g, '\\frac$1{$2}')
    .replace(/\\frac\s*([0-9a-zA-Z])\s*(\{[^{}]*\})/g, '\\frac{$1}$2')
    .replace(/\\frac\s*([0-9a-zA-Z])\s*([0-9a-zA-Z])/g, '\\frac{$1}{$2}')
    // \frac{a}{b} → (a)/(b)
    .replace(/\\frac\{([^{}]*)\}\{([^{}]*)\}/g, '($1)/($2)')
    // nested \frac (one level deep)
    .replace(/\\frac\{([^{}]*)\}\{([^{}]*)\}/g, '($1)/($2)')
    // collapse double parens and strip simple term parens from fractions without altering operator precedence
    .replace(/\(\(([^()]+)\)\)/g, '($1)')
    .replace(/\(([^()+\-*/\s]+)\)\//g, '$1/')
    .replace(/\/\(([^()+\-*/\s]+)\)/g, '/$1')
    .replace(/⁰/g, '^0').replace(/¹/g, '^1').replace(/²/g, '^2').replace(/³/g, '^3')
    .replace(/⁴/g, '^4').replace(/⁵/g, '^5').replace(/⁶/g, '^6')
    .replace(/⁷/g, '^7').replace(/⁸/g, '^8').replace(/⁹/g, '^9')
    // ASCII power e^(7x) and LaTeX e^{7x} must grade the same (Ch5 seeds).
    .replace(/\^\{([^{}]*)\}/g, '^$1')
    .replace(/\^\(([^()]*)\)/g, '^$1')
    .replace(/[−–—]/g, '-')
    .replace(/\\cdot|\\times|×|·|⋅|∙|\*/g, '')
    .replace(/\\left|\\right/g, '')
    .replace(/\\\$/g, '').replace(/\$/g, '')
    .replace(/[{}]/g, '')
    .replace(/\s+/g, '')
    .replace(/[,.;]/g, '')
    .replace(/\\ge|\\geq|≥/g, '>=')
    .replace(/\\le|\\leq|≤/g, '<=')
    .trim();

  if (s && /[a-z]/.test(s) && !/[=<>/]/.test(s) && /[+-]/.test(s.slice(1))) {
    const body = (s[0] === '+' || s[0] === '-') ? s : '+' + s;
    const terms = body.match(/[+-][^+-]+/g);
    if (terms && terms.join('') === body) {
      s = terms.slice().sort().join('').replace(/^\+/, '');
    }
  }
  return s;
};

// Evaluate a fraction or mixed number to its decimal value so that
// "1/2", "(1)/(2)", "\frac{1}{2}", "0.5" all compare equal, and mixed
// numbers like "2 1/2", "2 (1)/(2)" evaluate to 2.5 (= "5/2").
// Returns a finite number, or null if the string isn't a (mixed) fraction/number.
export const evalFractionValue = (value) => {
  if (value === null || value === undefined) return null;
  let s = String(value)
    // Normalise \dfrac / \tfrac / \cfrac → \frac
    .replace(/\\dfrac\s*/g, '\\frac')
    .replace(/\\tfrac\s*/g, '\\frac')
    .replace(/\\cfrac\s*/g, '\\frac')
    .replace(/\\frac\s+\{/g, '\\frac{')
    // Wrap brace-less single-token \frac args (MathLive emits "\frac56").
    .replace(/\\frac\s*(\{[^{}]*\})\s*([0-9a-zA-Z])/g, '\\frac$1{$2}')
    .replace(/\\frac\s*([0-9a-zA-Z])\s*(\{[^{}]*\})/g, '\\frac{$1}$2')
    .replace(/\\frac\s*([0-9a-zA-Z])\s*([0-9a-zA-Z])/g, '\\frac{$1}{$2}')
    // Strip \left / \right wrappers before processing
    .replace(/\\left\s*/g, '')
    .replace(/\\right\s*/g, '')
    .replace(/(-?\d+)\s*\\frac\{([^{}]*)\}\{([^{}]*)\}/g, '$1 $2/$3')
    .replace(/\\frac\{([^{}]*)\}\{([^{}]*)\}/g, '($1)/($2)')
    .replace(/\(([^()]+)\)\/\(([^()]+)\)/g, '$1/$2') // (a)/(b) → a/b
    // Strip outer parens: (-5/6) → -5/6
    .replace(/^\((-?[\d./]+)\)$/, '$1')
    .replace(/[−–—]/g, '-')
    .replace(/\\\$|\$|,/g, '')
    // Preserve mixed numbers BEFORE stripping whitespace: "1 13/35" → "1+13/35".
    // Without this, the global whitespace strip below turns "1 13/35" into
    // "113/35" and the mixed-number branch can never match.
    .replace(/^\s*(-?\d+)\s+(\d+\s*\/\s*\d+)\s*$/, '$1+$2')
    .replace(/\s+/g, '')   // strip all whitespace so "- 5/6" → "-5/6"
    .trim();

  // Mixed number: "w a/b" or "w+a/b"  (separator = space or +)
  let m = s.match(/^(-?\d+)\s*[+ ]\s*(\d+)\/(\d+)$/);
  if (m) {
    const w = parseInt(m[1], 10), a = parseInt(m[2], 10), b = parseInt(m[3], 10);
    if (b === 0) return null;
    const sign = w < 0 ? -1 : 1;
    return w + sign * (a / b);
  }
  // Simple fraction: "a/b"
  m = s.match(/^(-?\d+)\/(-?\d+)$/);
  if (m) {
    const a = parseInt(m[1], 10), b = parseInt(m[2], 10);
    if (b === 0) return null;
    return a / b;
  }
  // Plain integer / decimal
  if (/^-?\d+(?:\.\d+)?$/.test(s)) return parseFloat(s);
  return null;
};

/** Strip KaTeX / MathJax wrappers so "\\(15.36\\)" and "15.36" compare equal. */
export const stripLatexWrappers = (value) => {
  let s = String(value ?? '').trim();
  if (!s) return '';
  // Collapse doubled backslashes from over-escaped seeds: \\\\( → \\(
  for (let i = 0; i < 4; i += 1) {
    if (!s.includes('\\\\')) break;
    s = s.replace(/\\\\/g, '\\');
  }
  s = s
    .replace(/\$\$([\s\S]*?)\$\$/g, '$1')
    .replace(/\$([^$]+)\$/g, '$1')
    .replace(/\\\(([\s\S]*?)\\\)/g, '$1')
    .replace(/\\\[([\s\S]*?)\\\]/g, '$1')
    .replace(/\\left|\\right/g, '')
    .replace(/\\,/g, ' ')
    .replace(/\\;/g, ' ')
    .replace(/\\ /g, ' ')
    .trim();
  return s;
};

/**
 * Expand answers like "66 (or 66.0)" / "66 or 66.0" into candidate strings
 * so either form grades as correct.
 */
export const expandAnswerCandidates = (value) => {
  const stripped = stripLatexWrappers(value);
  if (!stripped) return [];
  const stripOuterParens = (p) => {
    let s = p.trim();
    // Only peel balanced outer wrappers like "(66.0)" — never a trailing ")"
    // from a power like e^(7x), which would become the broken "e^(7x".
    while (s.length >= 2 && s[0] === '(' && s[s.length - 1] === ')') {
      let depth = 0;
      let balanced = true;
      for (let i = 0; i < s.length; i += 1) {
        if (s[i] === '(') depth += 1;
        else if (s[i] === ')') {
          depth -= 1;
          if (depth === 0 && i < s.length - 1) {
            balanced = false;
            break;
          }
        }
      }
      if (!balanced || depth !== 0) break;
      s = s.slice(1, -1).trim();
    }
    return s;
  };
  // \b word boundaries are required: without them "or" also matches inside
  // ordinary words ("Horizontal", "forty-two", "before", "proportion"),
  // splitting a single option into two fragments (e.g. "Horizontal dilation…"
  // -> "H" + "izontal dilation…"). Two unrelated options that both start
  // with the same letter before an embedded "or" then both reduce to that
  // one-letter fragment and grade as matching each other — a wrong option
  // silently grades correct (728 seed option/answer strings affected;
  // caught via abb2020e1s-mc10, 2026-07-21).
  const parts = stripped
    .split(/\s*\(?\s*\bor\b\s*\)?\s*/i)
    .map((p) => stripOuterParens(p))
    .filter(Boolean);
  const out = [];
  const seen = new Set();
  for (const p of parts.length > 0 ? parts : [stripped]) {
    if (!seen.has(p)) {
      seen.add(p);
      out.push(p);
    }
  }
  return out;
};

export const parseNumericAnswer = (value) => {
  if (value === null || value === undefined) return null;
  const raw = stripLatexWrappers(value);
  if (!raw) return null;

  // First try pure number (possibly after stripping "or" wrappers by taking first candidate).
  const tryParse = (str) => {
    const cleaned = str
      .replace(/[−–—]/g, '-')
      .replace(/\\\$/g, '').replace(/\$/g, '')
      .replace(/\\%/g, '%')          // LaTeX \% → %
      .replace(/,/g, '')
      .replace(/\b(aud|usd|nzd|dollars?|cents?)\b/gi, '')
      // Strip measurement units so "9355 m" → "9355", "15m" → "15"
      .replace(/\s*(kilometres?|meters?|metres?|centimetres?|centimeters?|millimetres?|millimeters?|kilograms?|grams?|litres?|liters?|millilitres?|milliliters?|seconds?|minutes?|hours?|units?)\s*/gi, '')
      .replace(/\\text\s*\{[^{}]*\}/g, '')
      .replace(/\s*(km²|m²|cm²|mm²|km³|m³|cm³|mm³|km|cm|mm|ml|mg|kg|MJ|kJ)\s*/g, '')
      .replace(/(\d)\s*m\b/, '$1')   // trailing m after digit
      .replace(/(\d)\s*g\b/, '$1')   // trailing g after digit
      .replace(/(\d)\s*[Ll]\b/, '$1') // trailing L after digit
      .replace(/(\d)\s*s\b/, '$1')   // trailing s (seconds) after digit
      .trim();

    if (!/^-?\d+(?:\.\d+)?%?$/.test(cleaned)) return null;
    const isPercent = cleaned.endsWith('%');
    const number = Number(cleaned.replace(/%$/, ''));
    return Number.isFinite(number) ? { number, isPercent } : null;
  };

  const direct = tryParse(raw);
  if (direct) return direct;

  // "66 (or 66.0)" → try each piece
  for (const part of expandAnswerCandidates(raw)) {
    const n = tryParse(part);
    if (n) return n;
  }
  return null;
};

// Extract the numeric (or algebraic) value from an equation like "c = 16" → "16",
// "x = -3" → "-3", "y = 2x + 1" → "2x+1".
// Returns null if the string doesn't look like a simple "var = value" form.
const extractRhs = (s) => {
  if (!s) return null;
  // Match "letter(s) = <rest>", ignoring spaces and LaTeX wrappers
  const m = String(s).replace(/\$/g, '').replace(/\s+/g, '').match(/^[a-zA-Z]+=-?[\d.]+$/);
  if (m) {
    // e.g. "c=16" → "16",  "x=-3" → "-3"
    return String(s).replace(/\$/g, '').replace(/\s+/g, '').replace(/^[a-zA-Z]+=/, '');
  }
  return null;
};

const isAlgebraicStr = (str) => {
  if (!str) return false;
  const s = String(str).toLowerCase().trim();
  // If the entire string is a number followed only by measurement units, it's NOT algebraic.
  // e.g. "15m", "120m", "9355 m", "45°", "30cm²" — these are numeric answers with units.
  // Strip known units and see if only a number remains.
  const unitStripped = s
    .replace(/\\text\s*\{[^{}]*\}/g, '')
    .replace(/\s*(kilometres?|meters?|metres?|centimetres?|centimeters?|millimetres?|millimeters?|kilograms?|grams?|litres?|liters?|millilitres?|milliliters?|seconds?|minutes?|hours?|units?)\s*/gi, '')
    .replace(/\s*(km²|m²|cm²|mm²|km³|m³|cm³|mm³|km|cm|mm|ml|mg|kg|mj|kj)\s*/gi, '')
    .replace(/(\d)\s*m\b/g, '$1')
    .replace(/(\d)\s*g\b/g, '$1')
    .replace(/(\d)\s*[Ll]\b/g, '$1')
    .replace(/(\d)\s*s\b/g, '$1')
    .replace(/[°%]/g, '')
    .trim();
  if (/^-?\d+(?:[.,]\d+)?(?:\/\d+)?$/.test(unitStripped)) return false;

  // If it has any algebraic variable: a, b, c, d, e, f, h, i, j, k, n, o, p, q, r, t, u, v, w, x, y, z
  if (/[a-fh-ik-np-rt-uvw-zθαβ]/.test(s)) return true;
  if (/[\/^*-]/.test(s) && /[a-z]/.test(s)) return true;
  if (/[a-z]/.test(s) && /[()]/.test(s)) return true;
  return false;
};

const isQuestionAlgebraic = (question) => {
  if (!question) return false;
  const answerText = String(question.answer || '').toLowerCase();
  if (isAlgebraicStr(answerText)) return true;
  const qText = String(question.question || question.text || '').toLowerCase();
  if (qText.includes('\\frac') || qText.includes('^') || qText.includes('simplify') || qText.includes('expression') || qText.includes('solve')) {
    return true;
  }
  return false;
};

/**
 * Check if a student answer matches any of the accepted answers.
 * acceptedAnswers can be an array of strings, or a single string.
 * If an array is provided, the student answer is checked against each one.
 */
export const answersMatchAny = (studentAnswer, acceptedAnswers, isAlgebraic = false) => {
  if (!Array.isArray(acceptedAnswers) || acceptedAnswers.length === 0) return false;
  return acceptedAnswers.some((a) => answersMatch(studentAnswer, String(a ?? ''), isAlgebraic));
};

/** Core single-pair match (no "or" expansion). */
const answersMatchOne = (studentAnswer, expectedAnswer, isAlgebraic = false) => {
  if (studentAnswer === null || studentAnswer === undefined || String(studentAnswer ?? '').trim() === '') return false;

  const sStr = stripLatexWrappers(studentAnswer);
  const eStr = stripLatexWrappers(expectedAnswer);
  if (!sStr || !eStr) return false;
  if (sStr === eStr) return true;

  // If the answer is a list of comma-separated items, compare as sets/lists
  // ("3, 5, 7" == "5, 3, 7"). Ensure it's not a coordinate/interval like
  // (1, 2) or [3, 4], AND require every comma-separated piece to look like a
  // single simple token (a number/fraction or a short algebraic/set item) —
  // not a clause. Without this, a full MC option sentence that happens to
  // contain a comma-separated set (e.g. "A ∪ B = {a, c, l, n, r, u, y} and
  // A ∩ B = {y}") gets chopped into single-letter fragments and cross-matches
  // an unrelated option sharing the same letters, lighting up several wrong
  // options as "correct" (2026-07-21 report: 3 of 4 options on a Sets/Venn
  // question all graded/highlighted as correct).
  const isSimpleListItem = (s) => /^-?\d+(?:\.\d+)?(?:\/\d+)?$/.test(s) || /^-?[a-zA-Z](?:\^-?\d+)?$/.test(s);
  const isListLike = (str) => {
    if (!str.includes(',')) return false;
    if (str.startsWith('(') || str.endsWith(')') || str.startsWith('[') || str.endsWith(']')) return false;
    const parts = str.split(/\s*,\s*/).map((x) => x.trim()).filter(Boolean);
    return parts.length > 1 && parts.every(isSimpleListItem);
  };

  if (isListLike(eStr) || isListLike(sStr)) {
    const sParts = sStr.split(/\s*,\s*/).map((x) => x.trim()).filter(Boolean);
    const eParts = eStr.split(/\s*,\s*/).map((x) => x.trim()).filter(Boolean);
    if (sParts.length === eParts.length && sParts.length > 1) {
      const unmatched = [...sParts];
      const allMatched = eParts.every((ep) => {
        const idx = unmatched.findIndex((sp) => answersMatchOne(sp, ep, isAlgebraic));
        if (idx !== -1) {
          unmatched.splice(idx, 1);
          return true;
        }
        return false;
      });
      if (allMatched) return true;
    }
  }

  const isAlg = isAlgebraic || isAlgebraicStr(eStr) || isAlgebraicStr(sStr);

  // Fraction / mixed-number equivalence: "2 1/2" == "5/2" == "2.5".
  const sFrac = evalFractionValue(sStr);
  const eFrac = evalFractionValue(eStr);
  if (sFrac !== null && eFrac !== null && Math.abs(sFrac - eFrac) < 0.000001) {
    return true;
  }

  const studentNumeric = parseNumericAnswer(sStr);
  const expectedNumeric = parseNumericAnswer(eStr);

  if (studentNumeric && expectedNumeric) {
    // Same number, allow % vs no-% mismatch (student may or may not include symbol)
    if (Math.abs(studentNumeric.number - expectedNumeric.number) < 0.000001) {
      return true;
    }
  }

  const sNorm = robustNormalize(sStr, isAlg);
  const eNorm = robustNormalize(eStr, isAlg);
  if (sNorm && eNorm && sNorm === eNorm) return true;

  // Allow "c = 16" to match "16" and vice versa
  const sRhs = extractRhs(sStr);
  const eRhs = extractRhs(eStr);

  if (sRhs === null && eRhs !== null) {
    if (robustNormalize(sStr, isAlg) === robustNormalize(eRhs, isAlg)) return true;
    const sNum = parseNumericAnswer(sStr);
    const eNum = parseNumericAnswer(eRhs);
    if (sNum && eNum && Math.abs(sNum.number - eNum.number) < 0.000001) return true;
  }

  if (sRhs !== null && eRhs === null) {
    if (robustNormalize(sRhs, isAlg) === robustNormalize(eStr, isAlg)) return true;
    const sNum = parseNumericAnswer(sRhs);
    const eNum = parseNumericAnswer(eStr);
    if (sNum && eNum && Math.abs(sNum.number - eNum.number) < 0.000001) return true;
  }

  if (sRhs !== null && eRhs !== null) {
    if (robustNormalize(sRhs, isAlg) === robustNormalize(eRhs, isAlg)) return true;
    const sNum = parseNumericAnswer(sRhs);
    const eNum = parseNumericAnswer(eRhs);
    if (sNum && eNum && Math.abs(sNum.number - eNum.number) < 0.000001) return true;
  }

  return false;
};

export const answersMatch = (studentAnswer, expectedAnswer, isAlgebraic = false) => {
  // Empty student answer is never correct.
  if (studentAnswer === null || studentAnswer === undefined || String(studentAnswer ?? '').trim() === '') return false;
  if (expectedAnswer === null || expectedAnswer === undefined) return false;

  // Expand "66 (or 66.0)" style bank answers — any candidate pair may match.
  const sCands = expandAnswerCandidates(studentAnswer);
  const eCands = expandAnswerCandidates(expectedAnswer);
  for (const sc of sCands) {
    for (const ec of eCands) {
      if (answersMatchOne(sc, ec, isAlgebraic)) return true;
    }
  }
  return false;
};

/**
 * Grade a single question against a student answer.
 * Returns { correct: boolean, perBlank?: boolean[] } for fill_blank.
 */
export const gradeQuestion = (question, userAnswer) => {
  if (!question) return { correct: false };

  const isAlgebraic = isQuestionAlgebraic(question);

  // Empty answer is always wrong — guards against blank matching blank when
  // a question's answer field is missing, and against accidental submission.
  const isEmptyValue = (v) =>
    v === null || v === undefined || String(v ?? '').trim() === '' || v === '__timeout__';

  if (question.type === 'multiple_choice') {
    const optText = typeof userAnswer === 'object' && userAnswer !== null ? userAnswer.text : userAnswer;
    if (isEmptyValue(optText)) return { correct: false };
    return { correct: answersMatch(optText, question.answer, isAlgebraic) };
  }
  if (question.type === 'fill_blank') {
    const blanks = Array.isArray(question.blanks) ? question.blanks : [];
    const arr = Array.isArray(userAnswer) ? userAnswer : [];
    // Any blank left empty → wrong
    if (arr.some((v) => isEmptyValue(v))) return { correct: false, perBlank: blanks.map(() => false) };
    const perBlank = blanks.map((b, i) => answersMatch(arr[i] || '', b.answer || '', isAlgebraic));
    return { correct: blanks.length > 0 && perBlank.every(Boolean), perBlank };
  }
  // short_answer + anything else stringy
  if (isEmptyValue(userAnswer)) return { correct: false };

  // If the question has multiple accepted answers, check against all of them
  if (Array.isArray(question.acceptedAnswers) && question.acceptedAnswers.length > 0) {
    return { correct: answersMatchAny(userAnswer, question.acceptedAnswers, isAlgebraic) };
  }
  return { correct: answersMatch(userAnswer, question.answer, isAlgebraic) };
};
