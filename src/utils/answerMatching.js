// Shared answer-matching utilities. Mirrors the logic that lived inside
// DailyChallenge.jsx so Exam Prep (and any future quiz surface) can grade
// against the exact same normalisation rules.

export const robustNormalize = (str) => {
  if (!str) return '';
  let s = String(str)
    .toLowerCase()
    // \frac{a}{b} → (a)/(b)
    .replace(/\\frac\{([^{}]*)\}\{([^{}]*)\}/g, '($1)/($2)')
    // nested \frac (one level deep)
    .replace(/\\frac\{([^{}]*)\}\{([^{}]*)\}/g, '($1)/($2)')
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
    .replace(/,/g, '')
    .replace(/\b(aud|usd|nzd|dollars?|cents?)\b/gi, '')
    .trim();

  if (!/^-?\d+(?:\.\d+)?%?$/.test(cleaned)) return null;
  const isPercent = cleaned.endsWith('%');
  const number = Number(cleaned.replace(/%$/, ''));
  return Number.isFinite(number) ? { number, isPercent } : null;
};

export const answersMatch = (studentAnswer, expectedAnswer) => {
  const studentNumeric = parseNumericAnswer(studentAnswer);
  const expectedNumeric = parseNumericAnswer(expectedAnswer);
  if (studentNumeric && expectedNumeric && studentNumeric.isPercent === expectedNumeric.isPercent) {
    return Math.abs(studentNumeric.number - expectedNumeric.number) < 0.000001;
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
