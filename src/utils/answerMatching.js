// Shared answer-matching utilities. Mirrors the logic that lived inside
// DailyChallenge.jsx so Exam Prep (and any future quiz surface) can grade
// against the exact same normalisation rules.

// Strip LaTeX \text{...} wrappers and common measurement unit suffixes so
// "9355\text{ m}" matches "9355" and "15m" matches "15".
const stripUnits = (s) =>
  s
    // LaTeX \text{ m }, \text{metres}, etc.
    .replace(/\\text\s*\{[^{}]*\}/g, '')
    // Standalone unit words / abbreviations at the end or after a digit
    // Order matters: longer words first to avoid partial matches
    .replace(/\b(kilometres?|meters?|metres?|centimetres?|centimeters?|millimetres?|millimeters?|kilograms?|grams?|litres?|liters?|millilitres?|milliliters?|seconds?|minutes?|hours?|units?|cm²|m²|km²|cm³|m³)\b/gi, '')
    .replace(/(?<=\d)\s*(km²|m²|cm²|mm²|km³|m³|cm³|mm³|km|cm|mm|ml|mg|kg|MJ|kJ)\b/g, '')
    .replace(/(?<=\d)\s*m\b/g, '')   // trailing "m" after a number
    .replace(/(?<=\d)\s*g\b/g, '')   // trailing "g"
    .replace(/(?<=\d)\s*L\b/gi, '')  // trailing "L" / "l"
    .replace(/(?<=\d)\s*s\b/g, '')   // trailing "s" (seconds)
    // LaTeX percent \% → %
    .replace(/\\%/g, '%');

export const robustNormalize = (str) => {
  if (!str) return '';
  let s = String(str)
    .toLowerCase()
    // Strip units before other processing
    .replace(/\\text\s*\{[^{}]*\}/g, '')
    .replace(/\\%/g, '%')
    // \frac{a}{b} → (a)/(b)
    .replace(/\\frac\{([^{}]*)\}\{([^{}]*)\}/g, '($1)/($2)')
    // nested \frac (one level deep)
    .replace(/\\frac\{([^{}]*)\}\{([^{}]*)\}/g, '($1)/($2)')
    // (a)/(b) → a/b  strip outer parens from fraction UI format
    .replace(/\(([^()]+)\)\/\(([^()]+)\)/g, '$1/$2')
    .replace(/⁰/g, '^0').replace(/¹/g, '^1').replace(/²/g, '^2').replace(/³/g, '^3')
    .replace(/⁴/g, '^4').replace(/⁵/g, '^5').replace(/⁶/g, '^6')
    .replace(/⁷/g, '^7').replace(/⁸/g, '^8').replace(/⁹/g, '^9')
    .replace(/\^\{([^{}]*)\}/g, '^$1')
    .replace(/[−–—]/g, '-')
    .replace(/\\cdot|\\times|×|·|⋅|∙|\*/g, '')
    .replace(/\\left|\\right/g, '')
    .replace(/\$/g, '')
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

export const parseNumericAnswer = (value) => {
  if (value === null || value === undefined) return null;
  const raw = String(value).trim();
  if (!raw) return null;

  const cleaned = raw
    .replace(/[−–—]/g, '-')
    .replace(/\$/g, '')
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

export const answersMatch = (studentAnswer, expectedAnswer) => {
  const studentNumeric = parseNumericAnswer(studentAnswer);
  const expectedNumeric = parseNumericAnswer(expectedAnswer);

  if (studentNumeric && expectedNumeric) {
    // Same number, allow % vs no-% mismatch (student may or may not include symbol)
    if (Math.abs(studentNumeric.number - expectedNumeric.number) < 0.000001) {
      return true;
    }
  }

  return robustNormalize(studentAnswer) === robustNormalize(expectedAnswer);
};

/**
 * Grade a single question against a student answer.
 * Returns { correct: boolean, perBlank?: boolean[] } for fill_blank.
 */
export const gradeQuestion = (question, userAnswer) => {
  if (!question) return { correct: false };
  if (question.type === 'multiple_choice') {
    const optText = typeof userAnswer === 'object' && userAnswer !== null ? userAnswer.text : userAnswer;
    return { correct: answersMatch(optText, question.answer) };
  }
  if (question.type === 'fill_blank') {
    const blanks = Array.isArray(question.blanks) ? question.blanks : [];
    const arr = Array.isArray(userAnswer) ? userAnswer : [];
    const perBlank = blanks.map((b, i) => answersMatch(arr[i] || '', b.answer || ''));
    return { correct: blanks.length > 0 && perBlank.every(Boolean), perBlank };
  }
  // short_answer + anything else stringy
  return { correct: answersMatch(userAnswer, question.answer) };
};
