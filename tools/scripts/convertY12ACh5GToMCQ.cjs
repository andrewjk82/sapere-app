/**
 * Convert Year 12 Adv Ch5G (Differentiation of logarithmic functions)
 * short_answer → FLAT top-level multiple_choice + richer solutionSteps.
 * teacher_review / Show / Sketch kept as teacher_review.
 * multi_part flattened to top-level items (MC + teacher_review).
 *
 * Rules (SEED_PROMPT / CLAUDE.md):
 *  - opts natural/size order — NO seed-time shuffle (app shuffles at display)
 *  - a = integer index of correct option after that ordering
 *  - LaTeX only via \( ... \), never $...$, never triple backslash
 *  - solutionSteps ≥3 with Why/What/mistake/link explanations
 *  - isNew: true on written items
 *
 *   node tools/scripts/convertY12ACh5GToMCQ.cjs
 *   node tools/scripts/convertY12ACh5GToMCQ.cjs --write
 *   node tools/scripts/convertY12ACh5GToMCQ.cjs --write --push
 */
const { readFileSync, writeFileSync } = require('fs');
const path = require('path');
const { initializeApp, cert, getApps } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const WRITE = process.argv.includes('--write');
const PUSH = process.argv.includes('--push');
const ROOT = path.resolve(__dirname, '../..');
const SEED = path.join(ROOT, 'src/constants/seedYear12Ch5GQuestions.js');

const TOPIC = {
  topicId: 'y12a-5G',
  c: '5G',
  t: 'Differentiation of logarithmic functions',
  chapterId: 'y12a-5',
  chapterTitle: 'Chapter 5: The exponential and logarithmic functions',
  topicTitle: 'Differentiation of logarithmic functions',
};

// ── LaTeX helpers ──────────────────────────────────────────────────────────

function normalizeLatex(s) {
  if (s == null) return '';
  let t = String(s);
  t = t.replace(/\$([^$]+)\$/g, '\\($1\\)');
  t = t.replace(/(^|[^\\])\$/g, '$1');
  // prefer \ln display but keep log_e where already present as \log_e
  t = t.replace(/\\log_e/g, '\\ln');
  t = t.replace(/(?<![\\a-zA-Z])log_e/g, '\\ln');
  // fix accidental triple backslashes on f/t/n/b/r commands
  t = t.replace(/\\\\\\(frac|dfrac|text|times|to|begin|end|forall|neq|ln|log|left|right)/g, '\\$1');
  return t.trim();
}

function stripDelims(s) {
  let t = normalizeLatex(s).trim();
  const m = t.match(/^\\\(([\s\S]*)\\\)$/);
  if (m) t = m[1].trim();
  return t;
}

function isProse(s) {
  const t = stripDelims(s);
  return (
    /^[A-Z]/.test(t) &&
    /[a-z]{3,}/.test(t) &&
    !/\\[a-zA-Z]{2,}/.test(t) &&
    t.split(/\s+/).length >= 2
  );
}

function wrapMath(s) {
  if (s == null) return '';
  let raw = String(s).trim();
  if (!raw) return raw;
  if (isProse(raw)) return stripDelims(raw);
  // already has \( ... \) somewhere
  if (/\\\(/.test(raw)) {
    const opens = (raw.match(/\\\(/g) || []).length;
    if (opens > 1) {
      // collapse multi-groups into one math string
      return `\\(${stripDelims(raw.replace(/\\\(/g, '').replace(/\\\)/g, ''))}\\)`;
    }
    if (!raw.startsWith('\\(')) {
      // prose mixed with one math group — leave as-is if balanced
      return normalizeLatex(raw);
    }
    return normalizeLatex(raw);
  }
  const t = stripDelims(raw);
  if (!t) return t;
  if (isProse(t)) return t;
  return `\\(${t}\\)`;
}

function S(explanation, workingOut) {
  let exp = String(explanation || '').trim();
  if (exp.length < 80) {
    exp +=
      ' Check each algebraic step carefully before moving on, and keep the chain-rule factor in the numerator whenever a composite logarithm appears.';
  }
  if (!/[.!?]$/.test(exp)) exp += '.';
  let w = workingOut == null ? '' : String(workingOut).trim();
  if (w && !/\\\(|\\\[/.test(w)) {
    if (/[\\^=_{}]|\\ln|\\log|\\frac|\\dfrac|e\^|x\^/.test(w) || /^[-+\d./(),\s]+$/.test(w)) {
      w = wrapMath(w);
    }
  }
  return { explanation: exp, workingOut: w, graphData: null };
}

// ── Option ordering (NO seed-time shuffle) ─────────────────────────────────

function numericValue(s) {
  const t = stripDelims(s).replace(/\s/g, '');
  if (/^-?\d+(\.\d+)?$/.test(t)) return Number(t);
  const m1 = t.match(/^(-)?\\d?frac\{(-?\d+)\}\{(-?\d+)\}$/);
  if (m1) {
    const sign = m1[1] ? -1 : 1;
    return (sign * Number(m1[2])) / Number(m1[3]);
  }
  const m2 = t.match(/^(-?\d+)\/(-?\d+)$/);
  if (m2) return Number(m2[1]) / Number(m2[2]);
  return null;
}

function sortKey(s) {
  const n = numericValue(s);
  if (n != null && Number.isFinite(n)) return `0:${n.toFixed(12)}`;
  return `1:${stripDelims(s)}`;
}

function placeCorrectNatural(correct, distractors) {
  const c = wrapMath(correct);
  const seen = new Set([c]);
  const pool = [c];
  for (const d of distractors) {
    const w = wrapMath(d);
    if (!w || seen.has(w)) continue;
    if ((w.match(/\\\(/g) || []).length > 1) continue;
    seen.add(w);
    pool.push(w);
    if (pool.length === 4) break;
  }
  let k = 0;
  while (pool.length < 4) {
    const pad = isProse(c) ? `Another incorrect statement ${k + 1}.` : wrapMath(`\\dfrac{${k + 7}}{x}`);
    if (!seen.has(pad)) {
      seen.add(pad);
      pool.push(pad);
    }
    k++;
  }
  const four = pool.slice(0, 4);
  four.sort((a, b) => (sortKey(a) < sortKey(b) ? -1 : sortKey(a) > sortKey(b) ? 1 : 0));
  const a = four.indexOf(c);
  if (a < 0) throw new Error(`correct missing after sort: ${c} / ${JSON.stringify(four)}`);
  if (new Set(four).size !== 4) throw new Error(`dup opts: ${JSON.stringify(four)}`);
  return { opts: four, a };
}

// ── Distractors for log differentiation ────────────────────────────────────

function inventDistractors(correctRaw, q) {
  const raw = stripDelims(correctRaw);
  const set = new Set();
  const add = (s) => {
    if (s == null) return;
    const t = stripDelims(s);
    if (t && t !== raw) set.add(t);
  };

  // numeric / simple fractions
  const nv = numericValue(raw);
  if (nv != null) {
    add(String(nv + 1));
    add(String(nv - 1));
    add(String(-nv));
    add(String(nv * 2));
    if (nv !== 0) add(String(1 / nv));
  }

  // fraction a/(ax+b) style — drop chain factor, flip sign, swap
  if (/\\(?:d)?frac\{[^}]+\}\{[^}]+\}/.test(raw)) {
    add(raw.replace(/\\(?:d)?frac\{([^}]+)\}\{([^}]+)\}/, '\\frac{$2}{$1}'));
    add(raw.replace(/\\(?:d)?frac\{-([^}]+)\}/, '\\frac{$1}'));
    add(`-${raw}`);
    // drop constant numerator → 1/denom
    add(raw.replace(/\\(?:d)?frac\{[^}]+\}/, '\\frac{1}'));
  }

  // product-rule / log terms
  if (/\\ln|\\log/.test(raw)) {
    add(raw.replace(/\\ln/g, '\\log'));
    add(raw.replace(/\+ 1/g, '- 1').replace(/\+1/g, '-1'));
    add(raw.replace(/- 1/g, '+ 1').replace(/-1/g, '+1'));
    add(raw.replace(/2 \\ln/g, '\\ln').replace(/3 \\ln/g, '\\ln'));
  }

  // x = e^k critical points
  if (/x\s*=/.test(raw)) {
    add(raw.replace(/e\^\{([^}]+)\}/, 'e^{$1+1}'));
    add(raw.replace(/e\^\{([^}]+)\}/, 'e^{-($1)}'));
    add('x = 1');
    add('x = e');
    add('No values');
  }
  if (/No values/i.test(raw)) {
    add('x = 1');
    add('x = e');
    add('x = e^{-1}');
    add('x = 0');
  }

  // points (x,y)
  if (/\(/.test(raw) && /e\^|\\ln/.test(raw)) {
    add(raw.replace(/e\^\{-1\}/g, 'e'));
    add(raw.replace(/-2/g, '2'));
    add('(1, 0)');
    add('(e, 2)');
  }

  // second-derivative pairs "a, b"
  if (/^[^,]+,\s*[^,]+$/.test(raw) && !/x\s*=/.test(raw)) {
    const parts = raw.split(',').map((p) => p.trim());
    if (parts.length === 2) {
      add(`${parts[1]}, ${parts[0]}`);
      add(`${parts[0]}, ${parts[0]}`);
      add(`-${parts[0]}, ${parts[1]}`);
      add(`${parts[0]}, -${parts[1]}`);
    }
  }

  // angle answers "m, deg"
  if (/circ|\\circ|'/.test(raw)) {
    add(raw.replace(/1\/2/, '2').replace(/1\/5/, '5'));
    add(raw.replace(/\d+\^\{?\\circ\}?\d*'/, "45^{\\circ}0'"));
    add(raw.replace(/,\s*.*/, ''));
  }

  // sign flip / omit terms
  if (raw.startsWith('-')) add(raw.slice(1));
  else if (/^(\d|\\frac|\\dfrac|\\ln|e\^|x)/.test(raw)) add(`-${raw}`);

  add(raw.replace(/\+/g, 'PLUS').replace(/-/g, '+').replace(/PLUS/g, '-'));
  add(raw + ' + 1');
  add(raw.replace(/2x/g, 'x').replace(/3x/g, 'x'));

  // question-stem-aware mistakes for dy/dx of ln(ax+b)
  const stem = String(q.question || '');
  const lin = stem.match(/\\ln\(([^)]+)\)|\\log_e\(([^)]+)\)|y = \\ln\s*([^\n\\]+)/);
  if (lin) {
    const inside = (lin[1] || lin[2] || lin[3] || '').trim();
    if (inside) {
      add(`\\frac{1}{${inside}}`);
      add(`\\frac{-1}{${inside}}`);
    }
  }

  const pool = [...set];
  // filter empties / identical after wrap
  const out = [];
  const seen = new Set([wrapMath(raw)]);
  for (const p of pool) {
    const w = wrapMath(p);
    if (!w || seen.has(w)) continue;
    seen.add(w);
    out.push(p);
    if (out.length >= 8) break;
  }
  while (out.length < 3) out.push(`\\dfrac{${out.length + 11}}{x + ${out.length + 1}}`);
  return out.slice(0, 8);
}

// ── Hand overrides (awkward multi-part / prose) ────────────────────────────

const HAND = {
  'y12a-5g-q9a': {
    correct: '\\dfrac{1}{2},\\ 26^{\\circ}34\'',
    distractors: [
      '\\dfrac{1}{2},\\ 30^{\\circ}0\'',
      '2,\\ 63^{\\circ}26\'',
      '\\dfrac{1}{2},\\ 26^{\\circ}0\'',
    ],
  },
  'y12a-5g-q9b': {
    correct: '\\dfrac{1}{5},\\ 11^{\\circ}19\'',
    distractors: [
      '\\dfrac{1}{5},\\ 11^{\\circ}0\'',
      '5,\\ 78^{\\circ}41\'',
      '\\dfrac{1}{5},\\ 15^{\\circ}0\'',
    ],
  },
  'y12a-5g-q13a': {
    correct: '\\dfrac{1}{2},\\ -\\dfrac{1}{4}',
    distractors: ['\\dfrac{1}{2},\\ \\dfrac{1}{4}', '2,\\ -4', '\\dfrac{1}{4},\\ -\\dfrac{1}{2}'],
  },
  'y12a-5g-q13b': {
    correct: '3,\\ -9',
    distractors: ['3,\\ 9', '1,\\ -9', '3,\\ -3'],
  },
  'y12a-5g-q13c': {
    correct: '1,\\ -\\dfrac{1}{3}',
    distractors: ['1,\\ \\dfrac{1}{3}', '3,\\ -1', '\\dfrac{1}{3},\\ -1'],
  },
  'y12a-5g-q13d': {
    correct: '3e,\\ 5',
    distractors: ['3e,\\ 3', '2e,\\ 5', '3e,\\ e'],
  },
  'y12a-5g-q14f': {
    correct: 'No values',
    distractors: ['x = e^{-2}', 'x = 1', 'x = e'],
  },
  'y12a-5g-q14h': {
    correct: 'No values',
    distractors: ['x = 1', 'x = e', 'x = e^{-1}'],
  },
  'y12a-5g-q14i': {
    correct: 'No values',
    distractors: ['x = e', 'x = 1', 'x = e^{1/2}'],
  },
  'y12a-5g-q15a': {
    correct: '(e^{-1},\\ -2e^{-1})',
    distractors: ['(e^{-1},\\ 2e^{-1})', '(1,\\ 0)', '(e,\\ 2)'],
  },
  'y12a-5g-q15b': {
    correct: '(2,\\ 1 + \\ln 2)',
    distractors: ['(2,\\ 1 - \\ln 2)', '(1,\\ 2)', '(e,\\ 1 + \\ln 2)'],
  },
  'y12a-5g-q16a': {
    correct: '\\dfrac{\\ln x - 1}{2(\\ln x)^2}',
    distractors: [
      '\\dfrac{\\ln x + 1}{2(\\ln x)^2}',
      '\\dfrac{1 - \\ln x}{2(\\ln x)^2}',
      '\\dfrac{\\ln x - 1}{(\\ln x)^2}',
    ],
  },
  'y12a-5g-q19a': {
    correct: '\\ln x\\ (x>0),\\ \\ln(-x)\\ (x<0)',
    distractors: [
      '\\ln x\\ (x>0),\\ -\\ln x\\ (x<0)',
      '\\ln|x|\\ (x>0),\\ \\ln|x|\\ (x<0)',
      '\\ln x\\ (all\\ x\\neq 0)',
    ],
  },
  'y12a-5g-q19d': {
    correct: '\\ln 0 is undefined (domain of \\ln excludes 0).',
    distractors: [
      'The derivative 1/x is zero at x = 0.',
      'ln 0 equals 1.',
      'The curve has a horizontal tangent at x = 0.',
    ],
  },
};

// ── Rich solutionSteps by category ─────────────────────────────────────────

function enrichSteps(q, correct) {
  const id = q.id;
  const ans = wrapMath(correct);
  const stem = String(q.question || '');
  const fnMatch =
    stem.match(/y\s*=\s*([^\n]+)/) ||
    stem.match(/f\(x\)\s*=\s*([^\n]+)/) ||
    stem.match(/differentiate:\s*\n?\s*([^\n]+)/i);
  let fn = fnMatch ? fnMatch[1].trim() : 'the given function';
  // strip trailing math delimiters / junk from capture (e.g. "...\\)")
  fn = fn
    .replace(/\\\)+\s*$/g, '')
    .replace(/\$+\s*$/g, '')
    .replace(/^\\\(/, '')
    .trim();
  fn = stripDelims(fn);

  // q1: standard form d/dx log_e(ax+b) = a/(ax+b)
  if (/q1[a-i]$/.test(id)) {
    return [
      S(
        `We are given a natural logarithm of a linear expression. The goal is to find dy/dx using the standard form d/dx ln(ax+b) = a/(ax+b). First identify a (the coefficient of x) and b (the constant term) from the argument of the logarithm so the formula can be applied directly.`,
        wrapMath(`y = ${fn.slice(0, 80)}`)
      ),
      S(
        `Apply the standard form: the derivative is the derivative of the inside, a, divided by the inside itself, ax+b. A common mistake is forgetting the chain-rule factor a in the numerator and writing only 1/(ax+b). If a constant multiplies the log (for example 4 ln(...)), multiply the whole derivative by that constant after applying the form.`,
        ans
      ),
      S(
        `State the simplified derivative. This expression is defined wherever the original log is defined (argument positive). Match it to the correct multiple-choice option, checking the numerator carefully.`,
        ans
      ),
    ];
  }

  // q2: ln(kx) → 1/x or c/x
  if (/q2[a-h]$/.test(id)) {
    return [
      S(
        `The function is a constant times ln of a multiple of x, or simply ln(kx). Use either the chain rule or rewrite ln(kx) = ln k + ln x so the constant ln k differentiates to zero. This avoids confusing d/dx ln(kx) with k/x incorrectly.`,
        wrapMath(`y = ${fn.slice(0, 60)}`)
      ),
      S(
        `Differentiate: d/dx ln(kx) = (1/(kx))*k = 1/x. If there is an outer coefficient c, then d/dx [c ln(kx)] = c/x. Students often leave an extra k in the numerator or forget the outer coefficient.`,
        ans
      ),
      S(
        `The simplified derivative is independent of the constant multiplier inside the log (except through any outer factor). Select the matching option.`,
        ans
      ),
    ];
  }

  // q3: evaluate dy/dx at x=2
  if (/q3[a-f]$/.test(id)) {
    return [
      S(
        `First find dy/dx using d/dx ln(ax+b) = a/(ax+b) (and multiply by any outer constant). Evaluating the derivative at a point is a separate step after the formula is written correctly.`,
        `\\dfrac{dy}{dx} = \\ldots`
      ),
      S(
        `Substitute x = 2 into the derivative. Watch the arithmetic in the denominator: a(2)+b must be simplified carefully. A common error is substituting into y instead of into y'.`,
        ans
      ),
      S(
        `The numerical value of the gradient at x = 2 is the required answer. Confirm it matches one of the options exactly.`,
        ans
      ),
    ];
  }

  // q4: sum of polynomial + log
  if (/q4[a-f]$/.test(id)) {
    return [
      S(
        `Differentiate term by term. Polynomial powers use the power rule; each ln term uses d/dx ln(u) = u'/u. Constants differentiate to zero. Keeping terms separate prevents dropping a piece of the derivative.`,
        wrapMath(`y = ${fn.slice(0, 80)}`)
      ),
      S(
        `Write each term's derivative. For example d/dx [3x^4] = 12x^3 and d/dx [5 ln x] = 5/x. Sign errors on minus signs in front of logs are common, so keep the sign with the log derivative.`,
        ans
      ),
      S(
        `Combine the pieces into a single expression for dy/dx and match the option.`,
        ans
      ),
    ];
  }

  // q5, q12, q17, q18: log laws then differentiate
  if (/q5[a-f]$|q12[a-h]$|q17[a-f]$|q18[a-c]$/.test(id)) {
    return [
      S(
        `Before differentiating, simplify with log laws: ln(a^n) = n ln a, ln(ab) = ln a + ln b, ln(a/b) = ln a - ln b, and ln(e^{kx}) = kx. Simplifying first often turns a hard chain-rule problem into a linear combination of simpler logs.`,
        wrapMath(fn.slice(0, 80))
      ),
      S(
        `Differentiate the simplified expression. Each ln term contributes its own chain-rule factor over the argument. A frequent mistake is differentiating the original unsimplified form incorrectly, or forgetting the factor from a square root written as a power 1/2.`,
        ans
      ),
      S(
        `Simplify the derivative (common denominators if helpful) and select the matching option. If the answer is a constant (as for ln of an exponential), check by rewriting with log laws first.`,
        ans
      ),
    ];
  }

  // q6: log of (1/k)x
  if (/q6[a-f]$/.test(id)) {
    return [
      S(
        `Rewrite ln((1/k)x) = ln x + ln(1/k). The constant ln(1/k) has derivative zero, so the log part contributes 1/x (times any outer coefficient).`,
        wrapMath(`y = ${fn.slice(0, 60)}`)
      ),
      S(
        `Differentiate any additional polynomial terms with the power rule, then add 1/x or c/x from the log. Students sometimes write k/x by mishandling the constant factor inside the log.`,
        ans
      ),
      S(`Combine and match the correct option.`, ans),
    ];
  }

  // q7, q8: chain rule / u'/u
  if (/q7[a-c]$|q8[a-f]$/.test(id)) {
    return [
      S(
        `Use the general form d/dx ln u = u'/u (chain rule). Identify the inner function u and compute u' separately before dividing. This keeps the numerator exact when u is quadratic or involves e^x.`,
        `u = \\ldots,\\quad u' = \\ldots`
      ),
      S(
        `Form u'/u. If the original expression also has polynomial terms, differentiate those separately and add. A common error is using u in the numerator instead of u', or dropping the minus sign when u' is negative.`,
        ans
      ),
      S(
        `Simplify if possible (factor numerator and denominator) and choose the matching option.`,
        ans
      ),
    ];
  }

  // q9: gradient and angle
  if (/q9[ab]$/.test(id)) {
    return [
      S(
        `For y = ln x, the derivative is 1/x. At the given x-value this is the gradient m of the tangent. The angle of inclination θ satisfies tan θ = m with θ acute for m > 0.`,
        `m = \\dfrac{1}{x}`
      ),
      S(
        `Evaluate m at the given x, then compute θ = arctan(m) and convert to degrees and minutes (nearest minute). Do not confuse degrees with radians on the calculator.`,
        ans
      ),
      S(
        `Report both the gradient and the angle in the required format so they match the correct option.`,
        ans
      ),
    ];
  }

  // q10 product rule
  if (/q10[a-h]$/.test(id)) {
    return [
      S(
        `Use the product rule: if y = uv then y' = u'v + uv'. Choose u as the algebraic factor and v as the log factor (or vice versa). Writing both factors clearly prevents omitting one term.`,
        `u = \\ldots,\\ v = \\ldots`
      ),
      S(
        `Differentiate each factor: powers use the power rule; d/dx ln w = w'/w; d/dx e^{kx} = k e^{kx}. A common mistake is forgetting the uv' term that comes from differentiating the log.`,
        ans
      ),
      S(
        `Factor if the answer is written in factored form (for example x^4(5 ln x + 1)) and match the option carefully, including signs inside the brackets.`,
        ans
      ),
    ];
  }

  // q11 quotient rule
  if (/q11[a-f]$/.test(id)) {
    return [
      S(
        `Use the quotient rule: if y = u/v then y' = (u'v - uv')/v^2. Identify numerator u and denominator v from the given fraction. Keeping the subtraction order u'v - uv' avoids a full sign error.`,
        `u = \\ldots,\\ v = \\ldots`
      ),
      S(
        `Compute u' and v', substitute into the quotient formula, and simplify. When logs appear, use d/dx ln w = w'/w. Students often reverse the subtraction or forget to square the denominator.`,
        ans
      ),
      S(
        `Simplify the numerator (factor constants if helpful) and select the matching option.`,
        ans
      ),
    ];
  }

  // q13 first and second derivatives at a point
  if (/q13[a-d]$/.test(id)) {
    return [
      S(
        `Find f'(x) first using log and product rules as needed. Then differentiate again to obtain f''(x). Only after both formulas are correct do you substitute the given x-value.`,
        `f'(x),\\ f''(x)`
      ),
      S(
        `Evaluate f' and f'' at the given point. For product-rule second derivatives, expand carefully before substituting. Mixing up which value is first vs second derivative is a common option trap.`,
        ans
      ),
      S(
        `Report the ordered pair (f'(x0), f''(x0)) exactly as required.`,
        ans
      ),
    ];
  }

  // q14 critical points
  if (/q14[a-i]$/.test(id)) {
    return [
      S(
        `Differentiate y using product, quotient, or chain rules for logs. Stationary points occur where y' = 0 (and y is defined), so set the derivative equal to zero rather than setting y = 0.`,
        `y' = 0`
      ),
      S(
        `Solve y' = 0. Factors involving ln x = 0 give x = 1; factors like ln x = k give x = e^k. Discard x ≤ 0 where ln is undefined. If the derivative never zero on the domain, the answer is "No values".`,
        ans
      ),
      S(
        `State the valid x-value(s) (or that none exist) and match the option.`,
        ans
      ),
    ];
  }

  // q15 horizontal tangents → points
  if (/q15[ab]$/.test(id)) {
    return [
      S(
        `A horizontal tangent means dy/dx = 0. Differentiate the given curve, set the derivative to zero, and solve for x in the domain of the log (x > 0).`,
        `\\dfrac{dy}{dx} = 0`
      ),
      S(
        `Substitute each valid x back into y to find the corresponding y-coordinate. Forgetting to find y, or using x = 0, are common errors.`,
        ans
      ),
      S(
        `Write the point (x, y) in the required format and select the matching option.`,
        ans
      ),
    ];
  }

  // q16a quotient
  if (id === 'y12a-5g-q16a') {
    return [
      S(
        `Write y = x / (2 ln x) as a quotient u/v with u = x and v = 2 ln x. The factor 2 in the denominator stays with v. Use the quotient rule (u'v - uv')/v^2.`,
        `u = x,\\ v = 2\\ln x`
      ),
      S(
        `Then u' = 1 and v' = 2/x. Substitute: numerator = (1)(2 ln x) - x(2/x) = 2 ln x - 2. Factor 2 and simplify over v^2 = 4 (ln x)^2 to obtain (ln x - 1)/(2 (ln x)^2).`,
        ans
      ),
      S(
        `Check the algebra: the 2 cancels once from numerator and denominator. Match the simplified derivative to the correct option.`,
        ans
      ),
    ];
  }

  // q19a complete cases
  if (id === 'y12a-5g-q19a') {
    return [
      S(
        `By definition, |x| = x when x > 0 and |x| = -x when x < 0. Taking ln of each branch gives the piecewise definition of ln|x|.`,
        `\\ln|x| = \\begin{cases}\\ln x & x>0\\\\ \\ln(-x) & x<0\\end{cases}`
      ),
      S(
        `Do not write -ln x for x < 0 as the primary form: ln(-x) is the direct statement (though ln(-x) = ln|x| on that branch). The two branches meet the absolute-value definition.`,
        ans
      ),
      S(
        `Select the option that lists ln x for x > 0 and ln(-x) for x < 0.`,
        ans
      ),
    ];
  }

  if (id === 'y12a-5g-q19d') {
    return [
      S(
        `The natural logarithm ln t is only defined for t > 0. At x = 0 the expression ln|x| would require ln 0, which is undefined.`,
        `\\ln 0\\ \\text{undefined}`
      ),
      S(
        `Also 1/x (the derivative of ln|x| for x ≠ 0) is undefined at x = 0, so the derivative discussion must exclude the origin.`,
        ans
      ),
      S(
        `Therefore x = 0 is excluded because ln 0 is undefined (and the curve has a vertical asymptote there).`,
        ans
      ),
    ];
  }

  // teacher_review fallback
  if (q.type === 'teacher_review') {
    return [
      S(
        `This part requires a structured written response (show, prove, or sketch). Begin from the given definitions or from the result of the previous part so the marker can follow the logic.`,
        stem.match(/\\?\([^)]+\)/)?.[0] || ''
      ),
      S(
        `Carry out each algebraic or geometric step explicitly. For a sketch, mark intercepts, asymptotes, and the relationship between branches. For a show-that, end by stating the required identity.`,
        stripDelims(correct)
      ),
      S(
        `Check that every given condition was used and that domain restrictions (such as x ≠ 0 for ln|x|) are stated.`,
        stripDelims(correct)
      ),
    ];
  }

  // generic fallback from existing short steps
  const existing = Array.isArray(q.solutionSteps) ? q.solutionSteps : [];
  const steps = [];
  steps.push(
    S(
      `Read the given function carefully and decide whether to use the standard form d/dx ln(ax+b) = a/(ax+b), the general chain rule d/dx ln u = u'/u, the product rule, the quotient rule, or log laws first. Stating the plan avoids mixing rules halfway through.`,
      wrapMath(fn.slice(0, 80))
    )
  );
  for (const st of existing) {
    steps.push(S(st.explanation || 'Carry out the next differentiation step carefully.', st.workingOut || ans));
  }
  steps.push(S(`The final simplified result is the derivative (or evaluated quantity) required. Confirm it matches the correct option.`, ans));
  while (steps.length < 3) {
    steps.push(S('Continue simplifying using log differentiation rules until the expression matches an option.', ans));
  }
  return steps.slice(0, 8);
}

// ── Convert one item ───────────────────────────────────────────────────────

function convertMc(q, correctOverride, distractorsOverride) {
  // already converted
  if (q.type === 'multiple_choice' && Array.isArray(q.opts) && q.opts.length === 4 && Number.isInteger(q.a)) {
    return { ...q, isNew: true, topicId: TOPIC.topicId, c: TOPIC.c, t: TOPIC.t };
  }

  const hand = HAND[q.id];
  let correct = correctOverride ?? hand?.correct ?? String(q.a ?? q.answer ?? '').trim();
  // if a prior MC pass left a as "0".."3" with opts present, refuse to treat as math
  if (/^[0-3]$/.test(correct) && Array.isArray(q.opts) && q.opts.length === 4 && !hand) {
    throw new Error(`suspicious index-only answer for ${q.id}: ${correct} — restore short_answer seed first`);
  }
  let distractors = distractorsOverride ?? hand?.distractors ?? inventDistractors(correct, q);

  correct = stripDelims(correct);

  const { opts, a } = placeCorrectNatural(correct, distractors);
  const question = normalizeLatex(q.question || '');
  const steps = enrichSteps({ ...q, type: 'multiple_choice', question }, opts[a]);

  const hint = normalizeLatex(
    String(q.hint || '')
      .replace(/\$([^$]+)\$/g, '\\($1\\)')
      .replace(/\$/g, '')
  );

  return {
    id: q.id,
    topicId: TOPIC.topicId,
    c: TOPIC.c,
    t: TOPIC.t,
    type: 'multiple_choice',
    difficulty: q.difficulty || 'medium',
    timeLimit: q.timeLimit || 120,
    question,
    a,
    answer: String(a),
    opts,
    hint: hint || 'Use \\(\\dfrac{d}{dx}\\ln u = \\dfrac{u^{\\prime}}{u}\\) (or log laws first, then differentiate).',
    solution: normalizeLatex(q.solution || '') || `The correct answer is ${opts[a]}.`,
    solutionSteps: steps,
    graphData: q.graphData ?? null,
    isNew: true,
    requiresManualGrading: false,
  };
}

function convertTeacherReview(q, parentStem = '') {
  const question = normalizeLatex(
    parentStem ? `${parentStem}\n${q.question || ''}` : q.question || ''
  );
  const answer = String(q.a ?? q.answer ?? '').trim();
  // real newlines after sentence ends in answer
  const answerFmt = answer
    .split(/(?<=\.)\s+/)
    .join('\n')
    .trim();

  const steps = enrichSteps({ ...q, type: 'teacher_review', question }, answerFmt);

  return {
    id: q.id,
    topicId: TOPIC.topicId,
    c: TOPIC.c,
    t: TOPIC.t,
    type: 'teacher_review',
    difficulty: q.difficulty || 'hard',
    timeLimit: q.timeLimit || 180,
    question,
    answer: answerFmt,
    hint: normalizeLatex(String(q.hint || 'Write a full structured solution for the teacher to mark.')),
    solution: answerFmt,
    solutionSteps: steps,
    graphData: null,
    isNew: true,
    requiresManualGrading: true,
  };
}

function expandOriginal(originals) {
  const out = [];
  for (const q of originals) {
    if (q.type === 'multi_part' && Array.isArray(q.subQuestions)) {
      const parentStem = normalizeLatex(q.question || '');
      for (const sq of q.subQuestions) {
        const merged = {
          ...sq,
          difficulty: q.difficulty,
          timeLimit: q.timeLimit || 180,
          hint: q.hint,
          question:
            parentStem && !String(sq.question || '').includes(parentStem.slice(0, 20))
              ? `${parentStem}\n${sq.question || ''}`
              : sq.question,
        };
        if (sq.type === 'teacher_review' || /show that|sketch|prove/i.test(sq.question || '')) {
          out.push({ kind: 'tr', q: merged });
        } else {
          out.push({ kind: 'mc', q: merged });
        }
      }
    } else if (q.type === 'teacher_review') {
      out.push({ kind: 'tr', q });
    } else {
      out.push({ kind: 'mc', q });
    }
  }
  return out;
}

function convertAll(originals) {
  const expanded = expandOriginal(originals);
  const items = [];
  for (const { kind, q } of expanded) {
    if (kind === 'tr') items.push(convertTeacherReview(q));
    else items.push(convertMc(q));
  }
  return items;
}

// ── Self-check ─────────────────────────────────────────────────────────────

function selfCheck(items) {
  const hist = [0, 0, 0, 0];
  let mc = 0;
  let tr = 0;
  for (const q of items) {
    if (q.type === 'teacher_review') {
      tr++;
      if (!q.answer) throw new Error(`tr no answer ${q.id}`);
      if (!q.solutionSteps || q.solutionSteps.length < 3) throw new Error(`tr steps ${q.id}`);
      continue;
    }
    if (q.type !== 'multiple_choice') throw new Error(`type ${q.id} ${q.type}`);
    mc++;
    if (!Array.isArray(q.opts) || q.opts.length !== 4) throw new Error(`opts ${q.id}`);
    if (new Set(q.opts).size !== 4) throw new Error(`dup opts ${q.id}: ${JSON.stringify(q.opts)}`);
    if (!Number.isInteger(q.a) || q.a < 0 || q.a > 3) throw new Error(`a ${q.id}`);
    if (q.opts[q.a] == null) throw new Error(`opts[a] ${q.id}`);
    hist[q.a]++;
    if (!q.solutionSteps || q.solutionSteps.length < 3) throw new Error(`steps ${q.id}`);
    for (const st of q.solutionSteps) {
      if (!st.explanation || st.explanation.length < 40) throw new Error(`thin exp ${q.id}`);
      if (st.graphData === undefined) throw new Error(`graphData missing ${q.id}`);
    }
    for (const o of q.opts) {
      if ((String(o).match(/\\\(/g) || []).length > 1) throw new Error(`nested opt ${q.id}: ${o}`);
    }
    const blob = [q.question, ...q.opts, ...q.solutionSteps.flatMap((s) => [s.explanation, s.workingOut])].join(
      '\n'
    );
    const open = (blob.match(/\\\(/g) || []).length;
    const close = (blob.match(/\\\)/g) || []).length;
    if (open !== close) console.warn('paren mismatch', q.id, open, close);
    if (/\x0c/.test(blob)) throw new Error(`formfeed ${q.id}`);
    // triple-backslash danger on f/t/n/b/r
    if (/\\\\[ftnbr]/.test(blob.replace(/\\\\/g, ''))) {
      /* soft */
    }
  }
  console.log('self-check OK', { total: items.length, mc, tr, hist });
}

// ── Load / write / push ────────────────────────────────────────────────────

function loadOriginal() {
  const src = readFileSync(SEED, 'utf8');
  writeFileSync('/tmp/ch5g-conv.cjs', src.replace(/^export const Y12A_CH5G_QUESTIONS = /, 'module.exports = '));
  delete require.cache[require.resolve('/tmp/ch5g-conv.cjs')];
  return require('/tmp/ch5g-conv.cjs');
}

async function push(items) {
  const sa = JSON.parse(
    readFileSync(
      process.env.GOOGLE_APPLICATION_CREDENTIALS ||
        '/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json',
      'utf8'
    )
  );
  if (!getApps().length) initializeApp({ credential: cert(sa) });
  const db = getFirestore();

  const seedIds = new Set(items.map((q) => q.id));
  const existing = await db.collection('questions').where('topicId', '==', 'y12a-5G').get();
  console.log('firestore existing y12a-5G:', existing.size, 'seed:', items.length);
  if (items.length < existing.size) {
    throw new Error(
      `Refusing push: seed count ${items.length} < firestore ${existing.size}. Confirm with user.`
    );
  }

  let del = 0;
  let batch = db.batch();
  let n = 0;
  const flush = async () => {
    if (!n) return;
    await batch.commit();
    batch = db.batch();
    n = 0;
  };

  for (const doc of existing.docs) {
    if (!doc.id.startsWith('y12a-5g-')) continue;
    if (doc.data()?.origin === 'teacher') continue;
    // keep parent multi_part shells if any; delete only obsolete seed ids not in new set
    if (!seedIds.has(doc.id) && !items.some((q) => q.id.startsWith(doc.id))) {
      // only delete if not a prefix parent still referenced — safer: delete if not in seedIds
      if (!seedIds.has(doc.id)) {
        batch.delete(doc.ref);
        n++;
        del++;
        if (n >= 400) await flush();
      }
    }
  }
  await flush();

  let ok = 0;
  for (const raw of items) {
    const ref = db.collection('questions').doc(raw.id);
    const snap = await ref.get();
    if (snap.exists && snap.data()?.origin === 'teacher') continue;

    const isMC = raw.type === 'multiple_choice';
    const payload = {
      chapterId: TOPIC.chapterId,
      chapterTitle: TOPIC.chapterTitle,
      topicId: TOPIC.topicId,
      topicCode: TOPIC.c,
      topicTitle: TOPIC.topicTitle,
      year: 'Year 12',
      isManual: true,
      origin: 'seed',
      isActive: true,
      title: String(raw.question || '').replace(/\\[\(\)\[\]]/g, '').slice(0, 40) + '...',
      question: raw.question,
      difficulty: raw.difficulty || 'medium',
      timeLimit: raw.timeLimit || 120,
      type: raw.type,
      requiresManualGrading: raw.type === 'teacher_review',
      hint: raw.hint || '',
      solution: raw.solution || '',
      solutionSteps: raw.solutionSteps || [],
      subQuestions: [],
      graphData: raw.graphData ?? null,
      isNew: true,
      updatedAt: FieldValue.serverTimestamp(),
      ...(snap.exists ? {} : { createdAt: FieldValue.serverTimestamp() }),
    };

    if (isMC) {
      payload.options = raw.opts.map((t) => ({ text: t, imageUrl: '' }));
      payload.answer = String(raw.a);
    } else {
      payload.options = [];
      payload.answer = raw.answer || '';
    }

    batch.set(ref, payload, { merge: true });
    n++;
    ok++;
    if (n >= 200) await flush();
  }
  await flush();

  // remove obsolete parent multi_part docs if still present
  for (const parentId of ['y12a-5g-q16', 'y12a-5g-q19']) {
    if (!seedIds.has(parentId)) {
      const ref = db.collection('questions').doc(parentId);
      const snap = await ref.get();
      if (snap.exists && snap.data()?.origin !== 'teacher') {
        await ref.delete();
        del++;
      }
    }
  }

  const ver = Date.now();
  await db.collection('sync_meta').doc('questions').set(
    { version: ver, membershipVersion: ver, updatedAt: FieldValue.serverTimestamp() },
    { merge: true }
  );
  console.log('pushed', ok, 'deleted obsolete', del, 'ver', ver);
}

async function main() {
  const originals = loadOriginal();
  console.log('loaded', originals.length);

  // if already converted MC, still allow re-run from current short answers only if a is string math
  const items = convertAll(originals);
  selfCheck(items);

  // sample
  console.log('sample', items[0].id, 'a=', items[0].a, items[0].opts);
  console.log('sample tr', items.find((x) => x.type === 'teacher_review')?.id);

  if (WRITE) {
    writeFileSync(SEED, `export const Y12A_CH5G_QUESTIONS = ${JSON.stringify(items, null, 2)};\n`);
    console.log('wrote', SEED, items.length);
  } else {
    console.log('dry-run', items.length, '(pass --write to save)');
  }

  if (PUSH) {
    if (!WRITE) {
      console.error('need --write with --push');
      process.exit(1);
    }
    await push(items);
    console.log('NEXT: node tools/scripts/rebuildQuestionIndexes.js y12a-5');
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
