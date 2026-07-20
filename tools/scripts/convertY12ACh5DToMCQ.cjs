/**
 * Convert Year 12 Adv Ch5D (Integration of exponential functions)
 * short_answer / teacher_review → parent subquestions with MC + detailed steps.
 *
 *   node tools/scripts/convertY12ACh5DToMCQ.cjs              # dry-run
 *   node tools/scripts/convertY12ACh5DToMCQ.cjs --write       # write seed
 *   node tools/scripts/convertY12ACh5DToMCQ.cjs --write --push
 */
const { writeFileSync, readFileSync } = require('fs');
const path = require('path');

const WRITE = process.argv.includes('--write');
const PUSH = process.argv.includes('--push');
const PUSH_ONLY = process.argv.includes('--push-only');
const ROOT = path.resolve(__dirname, '../..');
const SEED_PATH = path.join(ROOT, 'src/constants/seedYear12Ch5DQuestions.js');

// ── helpers ──────────────────────────────────────────────────────────────
const dfrac = (s) => String(s).replace(/\\frac/g, '\\dfrac');

function wrap(tex) {
  let t = dfrac(String(tex).trim());
  if (!t) return t;
  if (/^\\\(|^\\\[|^\$/.test(t)) return t;
  return `\\(${t}\\)`;
}

function S(explanation, workingOut, graphData = null) {
  let w = workingOut == null ? '' : String(workingOut);
  if (w && !/\\\(|\\\[|\$/.test(w)) w = `\\(${dfrac(w)}\\)`;
  else w = dfrac(w);
  return { explanation, workingOut: w, graphData };
}

function hashId(id) {
  let h = 0;
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) >>> 0;
  return h;
}

/** Place correct option at deterministic index 0–3; fill with unique distractors. */
function buildOpts(id, correct, distractors) {
  const c = wrap(correct);
  const dist = distractors.map(wrap).filter((o) => o && o !== c);
  const uniq = [];
  const seen = new Set([c]);
  for (const d of dist) {
    if (seen.has(d)) continue;
    seen.add(d);
    uniq.push(d);
    if (uniq.length === 3) break;
  }
  // pad if needed (should not happen)
  let k = 0;
  while (uniq.length < 3) {
    const pad = wrap(`\\text{alt ${k++}}`);
    if (!seen.has(pad)) {
      seen.add(pad);
      uniq.push(pad);
    }
  }
  const a = hashId(id) % 4;
  const opts = [...uniq];
  opts.splice(a, 0, c);
  if (opts.length !== 4 || new Set(opts).size !== 4) {
    throw new Error(`bad opts for ${id}: ${JSON.stringify(opts)}`);
  }
  if (opts[a] !== c) throw new Error(`correct not at a for ${id}`);
  return { opts, a };
}

function mcSub({ id, question, correct, distractors, steps, difficulty = 'easy', hint = '', solution = '' }) {
  const { opts, a } = buildOpts(id, correct, distractors);
  const solSteps = steps.map((st) =>
    st.graphData !== undefined
      ? { explanation: st.explanation, workingOut: dfrac(st.workingOut || ''), graphData: st.graphData }
      : S(st.explanation, st.workingOut, null)
  );
  // ensure >= 3 steps
  while (solSteps.length < 3) {
    solSteps.push(S('Match the simplified result to the correct option.', wrap(correct)));
  }
  return {
    id,
    difficulty,
    type: 'multiple_choice',
    question,
    opts,
    a,
    answer: String(a),
    hint,
    solution: solution || `The correct antiderivative / value is ${wrap(correct)}.`,
    solutionSteps: solSteps,
    graphData: null,
  };
}

function parent({ id, question, difficulty = 'medium', timeLimit = 240, hint = '', subQuestions }) {
  return {
    topicId: 'y12a-5D',
    c: '5D',
    t: 'Integration of exponential functions',
    graphData: null,
    isNew: true,
    id,
    type: 'subquestions',
    difficulty,
    timeLimit,
    question,
    a: 'See sub-questions.',
    answer: 'See sub-questions.',
    solution: 'See sub-question solutions.',
    solutionSteps: [],
    hint: hint || 'Work through each part carefully; use \\(\\int e^{ax+b}\\,dx=\\dfrac{1}{a}e^{ax+b}+C\\).',
    requiresManualGrading: false,
    subQuestions,
  };
}

// ── per-question conversion data ─────────────────────────────────────────
// correct (unwrapped LaTeX), distractors (3), and detailed steps

const DATA = {
  // ── Q1: basic indefinite ∫ e^{ax} ──────────────────────────────────────
  'y12a-5d-q1a': {
    correct: '\\dfrac{1}{4}e^{4x} + C',
    distractors: ['4e^{4x} + C', 'e^{4x} + C', '\\dfrac{1}{4}e^{x} + C'],
    steps: [
      S('We integrate an exponential of the form \\(e^{ax}\\). The standard result is \\(\\int e^{ax}\\,dx=\\dfrac{1}{a}e^{ax}+C\\) for \\(a\\neq 0\\). Here the exponent is \\(4x\\), so identify \\(a=4\\).', 'a=4'),
      S('Apply the formula: divide by the coefficient of \\(x\\) in the exponent. Do not multiply by 4 (a common slip that produces \\(4e^{4x}\\)).', '\\int e^{4x}\\,dx=\\dfrac{1}{4}e^{4x}+C'),
      S('Therefore the indefinite integral is \\(\\dfrac{1}{4}e^{4x}+C\\). Differentiating recovers \\(e^{4x}\\), confirming the factor \\(\\dfrac{1}{4}\\).', '\\dfrac{1}{4}e^{4x}+C'),
    ],
  },
  'y12a-5d-q1b': {
    correct: '\\dfrac{1}{5}e^{5x} + C',
    distractors: ['5e^{5x} + C', 'e^{5x} + C', '\\dfrac{1}{5}e^{x} + C'],
    steps: [
      S('For \\(\\int e^{ax}\\,dx\\) use \\(\\dfrac{1}{a}e^{ax}+C\\). The exponent is \\(5x\\), so \\(a=5\\).', 'a=5'),
      S('Divide by 5: \\(\\int e^{5x}\\,dx=\\dfrac{1}{5}e^{5x}+C\\). Multiplying by 5 instead would give the wrong answer \\(5e^{5x}+C\\).', '\\dfrac{1}{5}e^{5x}+C'),
      S('Check: \\(\\dfrac{d}{dx}\\!\\left(\\dfrac{1}{5}e^{5x}\\right)=e^{5x}\\). The antiderivative is correct.', '\\dfrac{1}{5}e^{5x}+C'),
    ],
  },
  'y12a-5d-q1c': {
    correct: '4e^{\\dfrac{1}{4}x} + C',
    distractors: ['\\dfrac{1}{4}e^{\\dfrac{1}{4}x} + C', 'e^{\\dfrac{1}{4}x} + C', '4e^{4x} + C'],
    steps: [
      S('Here \\(a=\\dfrac{1}{4}\\). The formula gives a factor of \\(\\dfrac{1}{a}=4\\), not \\(\\dfrac{1}{4}\\). Dividing by a fraction multiplies by its reciprocal.', 'a=\\dfrac{1}{4},\\; \\dfrac{1}{a}=4'),
      S('Integrate: \\(\\int e^{\\frac{1}{4}x}\\,dx=4e^{\\frac{1}{4}x}+C\\).', '4e^{\\dfrac{1}{4}x}+C'),
      S('Differentiate to verify: chain rule multiplies by \\(\\dfrac{1}{4}\\), so \\(4\\cdot\\dfrac{1}{4}e^{\\frac{1}{4}x}=e^{\\frac{1}{4}x}\\).', '4e^{\\dfrac{1}{4}x}+C'),
    ],
  },
  'y12a-5d-q1d': {
    correct: '5e^{\\dfrac{1}{5}x} + C',
    distractors: ['\\dfrac{1}{5}e^{\\dfrac{1}{5}x} + C', 'e^{\\dfrac{1}{5}x} + C', '5e^{5x} + C'],
    steps: [
      S('Coefficient of \\(x\\) is \\(a=\\dfrac{1}{5}\\), so the antiderivative multiplies by 5.', 'a=\\dfrac{1}{5},\\; \\dfrac{1}{a}=5'),
      S('Hence \\(\\int e^{\\frac{1}{5}x}\\,dx=5e^{\\frac{1}{5}x}+C\\).', '5e^{\\dfrac{1}{5}x}+C'),
      S('Check by differentiation: factor 5 times chain-rule factor \\(\\dfrac{1}{5}\\) recovers the integrand.', '5e^{\\dfrac{1}{5}x}+C'),
    ],
  },
  'y12a-5d-q1e': {
    correct: '3e^{2x} + C',
    distractors: ['6e^{2x} + C', '12e^{2x} + C', '3e^{x} + C'],
    steps: [
      S('Pull out the constant 6: \\(\\int 6e^{2x}\\,dx=6\\int e^{2x}\\,dx\\). Constants factor through the integral sign.', '6\\int e^{2x}\\,dx'),
      S('Integrate \\(e^{2x}\\): divide by 2 to get \\(\\dfrac{1}{2}e^{2x}\\). Then multiply by 6.', '6\\cdot\\dfrac{1}{2}e^{2x}+C'),
      S('Simplify \\(6\\cdot\\dfrac{1}{2}=3\\). The result is \\(3e^{2x}+C\\). Equivalently, coefficient over exponent coefficient: \\(\\dfrac{6}{2}=3\\).', '3e^{2x}+C'),
    ],
  },
  'y12a-5d-q1f': {
    correct: '5e^{3x} + C',
    distractors: ['15e^{3x} + C', '45e^{3x} + C', '5e^{x} + C'],
    steps: [
      S('Factor out 15: \\(\\int 15e^{3x}\\,dx=15\\int e^{3x}\\,dx\\).', '15\\int e^{3x}\\,dx'),
      S('Integrate \\(e^{3x}\\) to get \\(\\dfrac{1}{3}e^{3x}\\), then multiply by 15: \\(15\\cdot\\dfrac{1}{3}=5\\).', '15\\cdot\\dfrac{1}{3}e^{3x}+C'),
      S('The indefinite integral is \\(5e^{3x}+C\\).', '5e^{3x}+C'),
    ],
  },

  // ── Q2: e^{ax+b} ───────────────────────────────────────────────────────
  'y12a-5d-q2a': {
    correct: '\\dfrac{1}{3}e^{3x+2} + C',
    distractors: ['3e^{3x+2} + C', '\\dfrac{1}{3}e^{3x} + C', 'e^{3x+2} + C'],
    steps: [
      S('For \\(\\int e^{ax+b}\\,dx\\) the constant \\(b\\) stays in the exponential; only divide by \\(a\\). Here \\(a=3\\), \\(b=2\\).', 'a=3,\\; b=2'),
      S('Apply the formula: \\(\\int e^{3x+2}\\,dx=\\dfrac{1}{3}e^{3x+2}+C\\). Do not drop the +2 from the exponent.', '\\dfrac{1}{3}e^{3x+2}+C'),
      S('Differentiating multiplies by 3 via the chain rule, cancelling \\(\\dfrac{1}{3}\\) and recovering \\(e^{3x+2}\\).', '\\dfrac{1}{3}e^{3x+2}+C'),
    ],
  },
  'y12a-5d-q2b': {
    correct: '\\dfrac{1}{5}e^{5x-4} + C',
    distractors: ['5e^{5x-4} + C', '\\dfrac{1}{5}e^{5x} + C', 'e^{5x-4} + C'],
    steps: [
      S('Identify \\(a=5\\) and constant term \\(-4\\) in the exponent. The formula is still \\(\\dfrac{1}{a}e^{ax+b}+C\\).', 'a=5,\\; b=-4'),
      S('Integrate: \\(\\int e^{5x-4}\\,dx=\\dfrac{1}{5}e^{5x-4}+C\\).', '\\dfrac{1}{5}e^{5x-4}+C'),
      S('The constant \\(-4\\) remains inside the exponential in the answer.', '\\dfrac{1}{5}e^{5x-4}+C'),
    ],
  },
  'y12a-5d-q2c': {
    correct: '4e^{2x+3} + C',
    distractors: ['8e^{2x+3} + C', '4e^{2x} + C', '\\dfrac{1}{4}e^{2x+3} + C'],
    steps: [
      S('Write \\(\\int 8e^{2x+3}\\,dx=8\\int e^{2x+3}\\,dx\\). The inner integral divides by 2.', '8\\int e^{2x+3}\\,dx'),
      S('Compute \\(8\\cdot\\dfrac{1}{2}e^{2x+3}=4e^{2x+3}\\). Keep +3 in the exponent.', '4e^{2x+3}+C'),
      S('Final answer: \\(4e^{2x+3}+C\\).', '4e^{2x+3}+C'),
    ],
  },
  'y12a-5d-q2d': {
    correct: '3e^{4x+1} + C',
    distractors: ['12e^{4x+1} + C', '3e^{4x} + C', '\\dfrac{1}{3}e^{4x+1} + C'],
    steps: [
      S('Factor 12: \\(12\\int e^{4x+1}\\,dx\\). Divide by the exponent coefficient 4.', '12\\int e^{4x+1}\\,dx'),
      S('Simplify \\(12\\cdot\\dfrac{1}{4}=3\\) to obtain \\(3e^{4x+1}+C\\).', '3e^{4x+1}+C'),
      S('Differentiate to check: chain-rule factor 4 times 3 gives 12, recovering the integrand.', '3e^{4x+1}+C'),
    ],
  },
  'y12a-5d-q2e': {
    correct: '-\\dfrac{1}{3}e^{5-3x} + C',
    distractors: ['\\dfrac{1}{3}e^{5-3x} + C', '-3e^{5-3x} + C', '-\\dfrac{1}{3}e^{5+3x} + C'],
    steps: [
      S('The exponent is \\(5-3x\\), so the coefficient of \\(x\\) is \\(a=-3\\). Division by a negative coefficient produces a minus sign.', 'a=-3'),
      S('Integrate: \\(\\int e^{5-3x}\\,dx=\\dfrac{1}{-3}e^{5-3x}+C=-\\dfrac{1}{3}e^{5-3x}+C\\).', '-\\dfrac{1}{3}e^{5-3x}+C'),
      S('Check: derivative multiplies by \\(-3\\), and \\(-3\\cdot\\left(-\\dfrac{1}{3}\\right)=1\\), recovering \\(e^{5-3x}\\).', '-\\dfrac{1}{3}e^{5-3x}+C'),
    ],
  },
  'y12a-5d-q2f': {
    correct: '-\\dfrac{1}{18}e^{2-6x} + C',
    distractors: ['-\\dfrac{1}{6}e^{2-6x} + C', '\\dfrac{1}{18}e^{2-6x} + C', '-\\dfrac{1}{3}e^{2-6x} + C'],
    steps: [
      S('Write \\(\\int \\dfrac{1}{3}e^{2-6x}\\,dx=\\dfrac{1}{3}\\int e^{2-6x}\\,dx\\). The exponent coefficient is \\(a=-6\\).', '\\dfrac{1}{3}\\int e^{2-6x}\\,dx'),
      S('Inner integral: \\(\\dfrac{1}{-6}e^{2-6x}\\). Multiply by \\(\\dfrac{1}{3}\\): \\(\\dfrac{1}{3}\\cdot\\left(-\\dfrac{1}{6}\\right)=-\\dfrac{1}{18}\\).', '-\\dfrac{1}{18}e^{2-6x}+C'),
      S('So the antiderivative is \\(-\\dfrac{1}{18}e^{2-6x}+C\\).', '-\\dfrac{1}{18}e^{2-6x}+C'),
    ],
  },
};

// Continue building DATA for remaining questions in a second module section
// to keep file maintainable — load rest from inline builder below.

function loadOriginal() {
  // Dynamic import of ESM seed via createRequire-style eval of export
  const src = readFileSync(SEED_PATH, 'utf8');
  // strip export and eval as module.exports
  const body = src.replace(/^export const Y12A_CH5D_QUESTIONS = /, 'module.exports = ');
  const tmp = path.join('/tmp', 'ch5d-seed-eval.cjs');
  writeFileSync(tmp, body);
  delete require.cache[require.resolve(tmp)];
  return require(tmp);
}

/** Enrich remaining questions not in DATA with auto distractors + expanded steps. */
function autoConvert(q) {
  if (DATA[q.id]) return DATA[q.id];
  const correct = dfrac(String(q.a).replace(/\s+/g, ' ').trim());
  const distractors = inventDistractors(correct, q);
  const steps = expandFromExisting(q, correct);
  return { correct, distractors, steps, hint: q.hint || '', difficulty: q.difficulty || 'medium' };
}

function inventDistractors(correct, q) {
  const c = dfrac(String(correct).trim());
  const set = new Set();
  const add = (s) => {
    let t = dfrac(String(s).trim());
    if (!t || t === c) return;
    // drop pure +C-less duplicate of indefinite when correct has +C — still OK as distractor
    set.add(t);
  };

  // sign flip of whole expression (leading)
  if (c.startsWith('-')) add(c.replace(/^-/, ''));
  else add('-' + c);

  // flip first fraction 1/k ↔ k
  add(c.replace(/\\dfrac\{1\}\{(\d+)\}(.*)$/g, (_, den, rest) => `${den}${rest}`));
  const mFrac = c.match(/\\dfrac\{([^}]+)\}\{([^}]+)\}/);
  if (mFrac) {
    add(c.replace(`\\dfrac{${mFrac[1]}}{${mFrac[2]}}`, `\\dfrac{${mFrac[2]}}{${mFrac[1]}}`));
    // double numerator mistake
    if (/^\d+$/.test(mFrac[1])) {
      add(c.replace(`\\dfrac{${mFrac[1]}}{${mFrac[2]}}`, `\\dfrac{${2 * Number(mFrac[1])}}{${mFrac[2]}}`));
    }
  }

  // forget +C
  if (c.includes('+ C')) add(c.replace(/\s*\+\s*C\s*$/, ''));

  // coefficient 2/3 style swaps common in integration
  add(c.replace(/\\dfrac\{2\}\{3\}/g, '\\dfrac{3}{2}'));
  add(c.replace(/\\dfrac\{3\}\{2\}/g, '\\dfrac{2}{3}'));
  add(c.replace(/\\dfrac\{1\}\{2\}/g, '\\dfrac{1}{4}'));
  add(c.replace(/\\dfrac\{1\}\{3\}/g, '\\dfrac{1}{6}'));
  add(c.replace(/\\dfrac\{1\}\{4\}/g, '\\dfrac{1}{2}'));
  add(c.replace(/\\dfrac\{1\}\{5\}/g, '5'));
  add(c.replace(/\\dfrac\{3\}\{5\}/g, '\\dfrac{5}{3}'));
  add(c.replace(/\\dfrac\{2\}\{5\}/g, '\\dfrac{5}{2}'));

  // exponent sign errors: e^{-…} ↔ e^{…}
  add(c.replace(/e\^\{-/g, 'e^{'));
  add(c.replace(/e\^\{([0-9])/g, 'e^{-$1'));

  // f(x)= forms: drop constant or flip sign of constant
  if (c.includes('f(x)')) {
    add(c.replace(/-\s*1\s*$/, '+1'));
    add(c.replace(/\+\s*2\s*$/, '-2'));
    add(c.replace(/-\s*1/, '+1'));
    add(c.replace(/\+\s*C/, ''));
  }

  // pure integers
  if (/^-?\d+$/.test(c.replace(/\s/g, ''))) {
    const n = Number(c);
    add(String(n + 1));
    add(String(n - 1));
    add(String(-n));
    add(String(n * 2));
  }

  // definite with e: drop a term
  if (c.includes('e') && !c.includes('+ C')) {
    add(c.replace(/-e\^\{[^}]+\}/g, ''));
    add(c.replace(/e\^\{([^}]+)\}/g, 'e^{$1+1}'));
  }

  // asymptotic / multi-part answers: tweak numbers
  add(c.replace(/\b3\b/g, '2'));
  add(c.replace(/\b2\b/g, '4'));

  // strip any accidental broken dfrac from double-replace
  const pool = [...set].filter((t) => !t.includes('$1') && t.length > 0 && t !== c);

  // guaranteed mathematical fallbacks based on structure
  if (pool.length < 3) {
    if (c.includes('+ C')) {
      const base = c.replace(/\s*\+\s*C\s*$/, '');
      if (!pool.includes(base + ' + 2C')) pool.push(base.replace(/^-/, '') + ' + C');
      if (pool.length < 3) pool.push(`2\\left(${base}\\right) + C`);
      if (pool.length < 3) pool.push(`\\dfrac{1}{2}\\left(${base}\\right) + C`);
    } else {
      pool.push(`-(${c})`);
      pool.push(`2(${c})`);
      pool.push(`\\dfrac{1}{2}(${c})`);
    }
  }

  // final unique slice
  const uniq = [];
  const seen = new Set([c]);
  for (const p of pool) {
    const t = dfrac(p);
    if (seen.has(t)) continue;
    seen.add(t);
    uniq.push(t);
    if (uniq.length === 3) break;
  }
  while (uniq.length < 3) {
    const pad = dfrac(`${c}`.includes('+ C') ? `e^{x} + C`.replace('e^{x}', `e^{${uniq.length}x}`) : String(uniq.length));
    // simpler unique pads
    const pads = ['e^{x}+C', 'e^{2x}+C', '2e^{x}+C', '0', '1', 'e', 'e-1', 'e+1'];
    for (const cand of pads) {
      const t = dfrac(cand);
      if (!seen.has(t) && t !== c) {
        seen.add(t);
        uniq.push(t);
        break;
      }
    }
    if (uniq.length < 3 && uniq.length === seen.size - 1) {
      // force
      const forced = `k_{${uniq.length}}`;
      if (!seen.has(forced)) {
        seen.add(forced);
        uniq.push(forced);
      } else break;
    }
  }
  return uniq.slice(0, 3);
}

function expandFromExisting(q, correct) {
  const orig = Array.isArray(q.solutionSteps) ? q.solutionSteps : [];
  const steps = [];
  if (orig.length === 0) {
    steps.push(
      S(
        'Identify the structure of the integrand and recall the matching integration formula for exponential functions. Plan the algebraic rewrites needed before integrating term by term.',
        String(q.question).match(/\\\([\s\S]*?\\\)/)?.[0] || '\\(\\int \\ldots\\,dx\\)'
      )
    );
    steps.push(S('Carry out the integration carefully, watching signs and coefficients of the exponent.', dfrac(q.solution || correct)));
    steps.push(S('Simplify fully and match the result to the correct option. Include \\(+C\\) for indefinite integrals.', wrap(correct)));
    return steps;
  }
  for (let i = 0; i < orig.length; i++) {
    const st = orig[i];
    let exp = String(st.explanation || '').trim();
    // ensure English multi-sentence feel
    if (exp.length < 40) {
      exp = `${exp} Work carefully with the exponential coefficients and simplify fully before moving on.`;
    }
    if (!exp.endsWith('.') && !exp.endsWith('?')) exp += '.';
    steps.push(S(exp, dfrac(st.workingOut || '')));
  }
  // final check step if short
  if (steps.length < 3) {
    steps.push(S('State the final simplified answer and confirm it matches one of the options.', wrap(correct)));
  }
  if (steps.length < 4 && String(q.solution || '').length > 20) {
    // insert solution summary as middle enrichment
    steps.splice(1, 0, S('Use the given solution pathway: rewrite if needed, integrate each exponential term, then simplify coefficients.', dfrac(String(q.solution).split('\n').pop() || correct)));
  }
  return steps.slice(0, 8);
}

// ── Hand-crafted DATA for definite integrals & harder items ──────────────
Object.assign(DATA, {
  'y12a-5d-q3a': {
    correct: '\\dfrac{e^{2}-1}{2}',
    distractors: ['\\dfrac{e^{2}+1}{2}', 'e^{2}-1', '\\dfrac{e^{2}}{2}'],
    steps: [
      S('The antiderivative of \\(e^{2x}\\) is \\(\\dfrac{1}{2}e^{2x}\\). Evaluate from 0 to 1 using the fundamental theorem.', '\\left[\\dfrac{1}{2}e^{2x}\\right]_{0}^{1}'),
      S('Upper limit \\(x=1\\): \\(\\dfrac{1}{2}e^{2}\\). Lower limit \\(x=0\\): \\(\\dfrac{1}{2}e^{0}=\\dfrac{1}{2}\\).', '\\dfrac{1}{2}e^{2}-\\dfrac{1}{2}'),
      S('Factor: \\(\\dfrac{e^{2}-1}{2}\\). Do not forget to subtract the lower-limit value.', '\\dfrac{e^{2}-1}{2}'),
    ],
  },
  'y12a-5d-q3b': {
    correct: 'e^{2}-e',
    distractors: ['e^{2}+e', 'e^{2}-1', 'e-e^{2}'],
    steps: [
      S('Antiderivative of \\(e^{x}\\) is \\(e^{x}\\). Evaluate from 1 to 2.', '\\left[e^{x}\\right]_{1}^{2}'),
      S('Compute \\(e^{2}-e^{1}=e^{2}-e\\).', 'e^{2}-e'),
      S('The exact value is \\(e^{2}-e\\).', 'e^{2}-e'),
    ],
  },
  'y12a-5d-q3c': {
    correct: 'e-e^{-2}',
    distractors: ['e+e^{-2}', 'e^{-2}-e', '1-e^{-2}'],
    steps: [
      S('Antiderivative of \\(e^{-x}\\) is \\(-e^{-x}\\). Evaluate from \\(-1\\) to 2.', '\\left[-e^{-x}\\right]_{-1}^{2}'),
      S('At 2: \\(-e^{-2}\\). At \\(-1\\): \\(-e^{-(-1)}=-e\\). Difference: \\(-e^{-2}-(-e)=e-e^{-2}\\).', 'e-e^{-2}'),
      S('So \\(\\int_{-1}^{2}e^{-x}\\,dx=e-e^{-2}\\).', 'e-e^{-2}'),
    ],
  },
  'y12a-5d-q3d': {
    correct: 'e^{3}-1',
    distractors: ['1-e^{3}', 'e^{3}+1', 'e^{-3}-1'],
    steps: [
      S('Antiderivative of \\(e^{-x}\\) is \\(-e^{-x}\\). Limits from \\(-3\\) to 0.', '\\left[-e^{-x}\\right]_{-3}^{0}'),
      S('At 0: \\(-e^{0}=-1\\). At \\(-3\\): \\(-e^{3}\\). Difference: \\(-1-(-e^{3})=e^{3}-1\\).', 'e^{3}-1'),
      S('Exact value: \\(e^{3}-1\\).', 'e^{3}-1'),
    ],
  },
  'y12a-5d-q3e': {
    correct: '\\dfrac{e^{6}-1}{3}',
    distractors: ['\\dfrac{e^{6}+1}{3}', 'e^{6}-1', '\\dfrac{e^{6}}{3}'],
    steps: [
      S('Antiderivative of \\(e^{3x}\\) is \\(\\dfrac{1}{3}e^{3x}\\). Evaluate 0 to 2.', '\\left[\\dfrac{1}{3}e^{3x}\\right]_{0}^{2}'),
      S('Upper: \\(\\dfrac{1}{3}e^{6}\\). Lower: \\(\\dfrac{1}{3}\\). Difference: \\(\\dfrac{e^{6}-1}{3}\\).', '\\dfrac{e^{6}-1}{3}'),
      S('Final exact value \\(\\dfrac{e^{6}-1}{3}\\).', '\\dfrac{e^{6}-1}{3}'),
    ],
  },
  'y12a-5d-q3f': {
    correct: '\\dfrac{e^{2}-e^{-2}}{2}',
    distractors: ['\\dfrac{e^{2}+e^{-2}}{2}', 'e^{2}-e^{-2}', '\\dfrac{e^{2}-1}{2}'],
    steps: [
      S('Antiderivative \\(\\dfrac{1}{2}e^{2x}\\) from \\(-1\\) to 1.', '\\left[\\dfrac{1}{2}e^{2x}\\right]_{-1}^{1}'),
      S('Upper \\(\\dfrac{1}{2}e^{2}\\), lower \\(\\dfrac{1}{2}e^{-2}\\). Subtract: \\(\\dfrac{e^{2}-e^{-2}}{2}\\).', '\\dfrac{e^{2}-e^{-2}}{2}'),
      S('This equals \\(\\sinh 2\\) but leave in exponential form as required.', '\\dfrac{e^{2}-e^{-2}}{2}'),
    ],
  },
  'y12a-5d-q3g': {
    correct: '5e^{3}-5e^{-3}',
    distractors: ['5e^{3}+5e^{-3}', '15e^{3}-15e^{-3}', '5e^{3}-5'],
    steps: [
      S('Integrate \\(15e^{-3x}\\): antiderivative \\(15\\cdot\\left(-\\dfrac{1}{3}\\right)e^{-3x}=-5e^{-3x}\\).', '-5e^{-3x}'),
      S('Evaluate from \\(-1\\) to 1: \\([-5e^{-3x}]_{-1}^{1}=-5e^{-3}-(-5e^{3})=-5e^{-3}+5e^{3}\\).', '5e^{3}-5e^{-3}'),
      S('Write as \\(5e^{3}-5e^{-3}\\).', '5e^{3}-5e^{-3}'),
    ],
  },
  'y12a-5d-q3h': {
    correct: '3e^{4}-3',
    distractors: ['3e^{4}+3', '3-3e^{4}', '6e^{4}-6'],
    steps: [
      S('Antiderivative of \\(6e^{-2x}\\) is \\(6\\cdot\\left(-\\dfrac{1}{2}\\right)e^{-2x}=-3e^{-2x}\\).', '-3e^{-2x}'),
      S('From \\(-2\\) to 0: at 0, \\(-3\\); at \\(-2\\), \\(-3e^{4}\\). Difference \\(-3-(-3e^{4})=3e^{4}-3\\).', '3e^{4}-3'),
      S('Exact value \\(3e^{4}-3\\).', '3e^{4}-3'),
    ],
  },
  'y12a-5d-q3i': {
    correct: '2e^{8}-2e^{-4}',
    distractors: ['2e^{8}+2e^{-4}', '2e^{8}-2', '8e^{8}-8e^{-4}'],
    steps: [
      S('Antiderivative of \\(8e^{4x}\\) is \\(8\\cdot\\dfrac{1}{4}e^{4x}=2e^{4x}\\).', '2e^{4x}'),
      S('From \\(-1\\) to 2: \\(2e^{8}-2e^{-4}\\).', '2e^{8}-2e^{-4}'),
      S('Final answer \\(2e^{8}-2e^{-4}\\).', '2e^{8}-2e^{-4}'),
    ],
  },
});

// Parent metadata
const PARENT_META = {
  q1: {
    question: 'Find each indefinite integral.',
    difficulty: 'easy',
    timeLimit: 180,
    hint: 'Use \\(\\int e^{ax}\\,dx=\\dfrac{1}{a}e^{ax}+C\\). Factor constants first when present.',
  },
  q2: {
    question: 'Find each indefinite integral of the form \\(\\int e^{ax+b}\\,dx\\) (or a constant multiple).',
    difficulty: 'easy',
    timeLimit: 180,
    hint: 'Only the coefficient of \\(x\\) appears in the reciprocal factor; keep the constant term inside the exponential.',
  },
  q3: {
    question: 'Evaluate each definite integral exactly.',
    difficulty: 'medium',
    timeLimit: 240,
    hint: 'Find the antiderivative, then use the fundamental theorem. Watch signs carefully at negative limits.',
  },
  q4: {
    question: 'Evaluate each definite integral involving \\(e^{ax+b}\\).',
    difficulty: 'medium',
    timeLimit: 240,
    hint: 'Antiderivative is \\(\\dfrac{1}{a}e^{ax+b}\\). Evaluate upper minus lower carefully.',
  },
  q5: {
    question: 'Express each function using a negative index, then find a primitive (indefinite integral).',
    difficulty: 'easy',
    timeLimit: 180,
    hint: 'Rewrite \\(\\dfrac{k}{e^{ax}}=ke^{-ax}\\) before integrating.',
  },
  q6: {
    question: 'A function \\(f(x)\\) has derivative \\(f\'(x)=e^{3x}\\).',
    difficulty: 'medium',
    timeLimit: 240,
    hint: 'Integrate to introduce \\(C\\), then use \\(f(0)=-3\\) to fix \\(C\\).',
  },
  q7: {
    question: 'Find each function \\(f(x)\\) from the given derivative and initial condition.',
    difficulty: 'medium',
    timeLimit: 240,
    hint: 'Integrate term by term, then substitute the initial condition to solve for \\(C\\).',
  },
  q8: {
    question: 'Expand the brackets where needed, then find each primitive.',
    difficulty: 'medium',
    timeLimit: 240,
    hint: 'Expand first so each term is a standard exponential (or constant) integral.',
  },
  q9: {
    question: 'Find each indefinite integral, treating the named letters as constants.',
    difficulty: 'medium',
    timeLimit: 240,
    hint: 'Treat letter coefficients exactly like numerical ones: divide by the coefficient of \\(x\\).',
  },
  q10: {
    question: 'Express each integrand as a power of \\(e\\), then find a primitive.',
    difficulty: 'medium',
    timeLimit: 200,
    hint: 'Use \\(\\dfrac{1}{e^{u}}=e^{-u}\\) and integrate.',
  },
  q11: {
    question: 'Write each integrand as a sum of powers of \\(e\\), then integrate.',
    difficulty: 'medium',
    timeLimit: 240,
    hint: 'Divide each numerator term by the denominator exponential, then integrate term by term.',
  },
  q12: {
    question: 'Use integration with a given gradient and point to find the curve or a related value.',
    difficulty: 'medium',
    timeLimit: 240,
    hint: 'Integrate \\(y\'\\) to get \\(y+C\\), then apply the given point.',
  },
  q13: {
    question: 'Evaluate each definite integral (expand or rewrite the integrand first if helpful).',
    difficulty: 'hard',
    timeLimit: 300,
    hint: 'Expand or divide to get a sum of exponentials, integrate, then evaluate limits.',
  },
  q14: {
    question: 'Differentiate, then use the result to integrate (or evaluate a related integral).',
    difficulty: 'medium',
    timeLimit: 300,
    hint: 'Part (i) is chain rule on \\(e^{u(x)}\\). Part (ii) reverses that differentiation.',
  },
  q15: {
    question: 'Rewrite each integrand as a power of \\(e\\), then find the indefinite integral.',
    difficulty: 'medium',
    timeLimit: 240,
    hint: 'Use index laws: roots and reciprocals become fractional / negative exponents.',
  },
  q16: {
    question: 'Differentiate the given product forms, then use the results to evaluate related definite integrals.',
    difficulty: 'medium',
    timeLimit: 300,
    hint: 'Product rule first; the integral uses the reverse of that derivative.',
  },
  q17: {
    question: 'Simplify each integrand by dividing through by the root of \\(e\\), then integrate.',
    difficulty: 'hard',
    timeLimit: 300,
    hint: 'Write the root as \\(e^{kx}\\) and subtract exponents before integrating.',
  },
  q18: {
    question: 'Consider the function \\(f(x)=x e^{-x^{2}}\\).',
    difficulty: 'hard',
    timeLimit: 240,
    hint: 'Odd functions satisfy \\(f(-x)=-f(x)\\). Integrals of odd functions over symmetric intervals are zero.',
  },
};

// Special multiparts for q6 and q18 (split teacher_review)
const Q6_SUBS = [
  {
    id: 'y12a-5d-q6a',
    question: 'Find the general equation of \\(f(x)\\) (include the arbitrary constant). Given \\(f\'(x)=e^{3x}\\).',
    correct: 'f(x)=\\dfrac{1}{3}e^{3x}+C',
    distractors: ['f(x)=3e^{3x}+C', 'f(x)=e^{3x}+C', 'f(x)=\\dfrac{1}{3}e^{3x}'],
    difficulty: 'medium',
    hint: 'Integrate \\(e^{3x}\\) and include \\(+C\\).',
    steps: [
      S('Since \\(f\'(x)=e^{3x}\\), integrate both sides: \\(f(x)=\\int e^{3x}\\,dx\\).', 'f(x)=\\int e^{3x}\\,dx'),
      S('Use \\(\\int e^{3x}\\,dx=\\dfrac{1}{3}e^{3x}+C\\).', 'f(x)=\\dfrac{1}{3}e^{3x}+C'),
      S('This is the general antiderivative; the constant is still free until an initial condition is used.', 'f(x)=\\dfrac{1}{3}e^{3x}+C'),
    ],
  },
  {
    id: 'y12a-5d-q6b',
    question: 'Given also \\(f(0)=-3\\), find \\(C\\) and write the particular equation of \\(f(x)\\).',
    correct: 'C=-\\dfrac{10}{3},\\; f(x)=\\dfrac{1}{3}e^{3x}-\\dfrac{10}{3}',
    distractors: [
      'C=-3,\\; f(x)=\\dfrac{1}{3}e^{3x}-3',
      'C=-\\dfrac{8}{3},\\; f(x)=\\dfrac{1}{3}e^{3x}-\\dfrac{8}{3}',
      'C=\\dfrac{10}{3},\\; f(x)=\\dfrac{1}{3}e^{3x}+\\dfrac{10}{3}',
    ],
    difficulty: 'medium',
    hint: 'Substitute \\(x=0\\) into the general solution.',
    steps: [
      S('From part (a), \\(f(x)=\\dfrac{1}{3}e^{3x}+C\\). Use \\(f(0)=-3\\).', 'f(0)=\\dfrac{1}{3}e^{0}+C=-3'),
      S('Since \\(e^{0}=1\\), \\(\\dfrac{1}{3}+C=-3\\), so \\(C=-3-\\dfrac{1}{3}=-\\dfrac{10}{3}\\).', 'C=-\\dfrac{10}{3}'),
      S('Therefore \\(f(x)=\\dfrac{1}{3}e^{3x}-\\dfrac{10}{3}\\).', 'f(x)=\\dfrac{1}{3}e^{3x}-\\dfrac{10}{3}'),
    ],
  },
  {
    id: 'y12a-5d-q6c',
    question: 'With this particular \\(f\\), find the exact values of \\(f(1)\\) and \\(f(2)\\).',
    correct: 'f(1)=\\dfrac{e^{3}-10}{3},\\; f(2)=\\dfrac{e^{6}-10}{3}',
    distractors: [
      'f(1)=\\dfrac{e^{3}+10}{3},\\; f(2)=\\dfrac{e^{6}+10}{3}',
      'f(1)=\\dfrac{e^{3}-10}{3},\\; f(2)=\\dfrac{e^{6}-10}{6}',
      'f(1)=e^{3}-\\dfrac{10}{3},\\; f(2)=e^{6}-\\dfrac{10}{3}',
    ],
    difficulty: 'medium',
    hint: 'Substitute \\(x=1\\) and \\(x=2\\) into \\(f(x)=\\dfrac{1}{3}e^{3x}-\\dfrac{10}{3}\\).',
    steps: [
      S('Use \\(f(x)=\\dfrac{1}{3}e^{3x}-\\dfrac{10}{3}=\\dfrac{e^{3x}-10}{3}\\).', 'f(x)=\\dfrac{e^{3x}-10}{3}'),
      S('At \\(x=1\\): \\(f(1)=\\dfrac{e^{3}-10}{3}\\).', 'f(1)=\\dfrac{e^{3}-10}{3}'),
      S('At \\(x=2\\): \\(f(2)=\\dfrac{e^{6}-10}{3}\\).', 'f(2)=\\dfrac{e^{6}-10}{3}'),
    ],
  },
];

const Q18_SUBS = [
  {
    id: 'y12a-5d-q18a',
    question: 'Which calculation correctly shows that \\(f(x)=x e^{-x^{2}}\\) is an odd function?',
    correct: 'f(-x)=(-x)e^{-(-x)^{2}}=-x e^{-x^{2}}=-f(x)',
    distractors: [
      'f(-x)=(-x)e^{-(-x)^{2}}=x e^{-x^{2}}=f(x)',
      'f(-x)=x e^{-x^{2}}=f(x)',
      'f(-x)=(-x)e^{x^{2}}=-f(x)',
    ],
    difficulty: 'hard',
    hint: 'Compute \\(f(-x)\\) carefully: \\((-x)^{2}=x^{2}\\).',
    steps: [
      S('A function is odd if \\(f(-x)=-f(x)\\) for all \\(x\\) in the domain. Substitute \\(-x\\) into \\(f(x)=x e^{-x^{2}}\\).', 'f(-x)=(-x)\\,e^{-(-x)^{2}}'),
      S('Simplify the exponent: \\((-x)^{2}=x^{2}\\), so \\(e^{-(-x)^{2}}=e^{-x^{2}}\\).', 'f(-x)=(-x)e^{-x^{2}}'),
      S('Factor the minus sign: \\(f(-x)=-x e^{-x^{2}}=-f(x)\\). Hence \\(f\\) is odd.', 'f(-x)=-f(x)'),
    ],
  },
  {
    id: 'y12a-5d-q18b',
    question: 'Hence evaluate \\(\\displaystyle\\int_{-\\sqrt{3}}^{\\sqrt{3}} x e^{-x^{2}}\\,dx\\) without finding a primitive.',
    correct: '0',
    distractors: ['2', '1', '\\sqrt{3}'],
    difficulty: 'hard',
    hint: 'Odd integrand over a symmetric interval.',
    steps: [
      S('From part (a), \\(f(x)=x e^{-x^{2}}\\) is odd. The interval \\([-\\sqrt{3},\\sqrt{3}]\\) is symmetric about 0.', 'f\\text{ odd on }[-a,a]'),
      S('For an integrable odd function, \\(\\int_{-a}^{a}f(x)\\,dx=0\\). Here \\(a=\\sqrt{3}\\).', '\\int_{-\\sqrt{3}}^{\\sqrt{3}}f(x)\\,dx=0'),
      S('Therefore the definite integral equals 0 without computing an antiderivative explicitly.', '0'),
    ],
  },
];

function groupKey(id) {
  // y12a-5d-q12a → q12; y12a-5d-q14ai → q14; y12a-5d-q6 → q6
  const m = id.match(/y12a-5d-(q\d+)/);
  return m ? m[1] : id;
}

function buildAll(originals) {
  const byGroup = {};
  for (const q of originals) {
    if (q.id === 'y12a-5d-q6' || q.id === 'y12a-5d-q18') continue; // replaced by split subs
    const g = groupKey(q.id);
    if (!byGroup[g]) byGroup[g] = [];
    byGroup[g].push(q);
  }

  const parents = [];
  const order = Object.keys(PARENT_META).sort((a, b) => {
    const na = Number(a.slice(1));
    const nb = Number(b.slice(1));
    return na - nb;
  });

  for (const g of order) {
    const meta = PARENT_META[g];
    let subs = [];

    if (g === 'q6') {
      subs = Q6_SUBS.map((s) =>
        mcSub({
          id: s.id,
          question: s.question,
          correct: s.correct,
          distractors: s.distractors,
          steps: s.steps,
          difficulty: s.difficulty,
          hint: s.hint,
        })
      );
    } else if (g === 'q18') {
      subs = Q18_SUBS.map((s) =>
        mcSub({
          id: s.id,
          question: s.question,
          correct: s.correct,
          distractors: s.distractors,
          steps: s.steps,
          difficulty: s.difficulty,
          hint: s.hint,
        })
      );
    } else {
      const items = byGroup[g] || [];
      // stable order by id
      items.sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true }));
      for (const q of items) {
        const conv = autoConvert(q);
        subs.push(
          mcSub({
            id: q.id,
            question: q.question,
            correct: conv.correct,
            distractors: conv.distractors,
            steps: conv.steps,
            difficulty: conv.difficulty || q.difficulty || 'medium',
            hint: conv.hint || q.hint || '',
            solution: q.solution || '',
          })
        );
      }
    }

    if (subs.length === 0) {
      console.warn('empty group', g);
      continue;
    }
    parents.push(
      parent({
        id: `y12a-5d-${g}`,
        question: meta.question,
        difficulty: meta.difficulty,
        timeLimit: meta.timeLimit,
        hint: meta.hint,
        subQuestions: subs,
      })
    );
  }

  return parents;
}

function selfCheck(parents) {
  let subCount = 0;
  const idxHist = [0, 0, 0, 0];
  for (const p of parents) {
    if (p.type !== 'subquestions') throw new Error(`${p.id} not subquestions`);
    for (const sq of p.subQuestions) {
      subCount++;
      if (sq.type !== 'multiple_choice') throw new Error(`${sq.id} not MC`);
      if (!Array.isArray(sq.opts) || sq.opts.length !== 4) throw new Error(`${sq.id} opts len`);
      if (new Set(sq.opts).size !== 4) throw new Error(`${sq.id} dup opts ${JSON.stringify(sq.opts)}`);
      if (!Number.isInteger(sq.a) || sq.a < 0 || sq.a > 3) throw new Error(`${sq.id} bad a`);
      if (String(sq.answer) !== String(sq.a)) throw new Error(`${sq.id} answer/a mismatch`);
      if (sq.solutionSteps.length < 3) throw new Error(`${sq.id} <3 steps`);
      idxHist[sq.a]++;
      const blob = [sq.question, ...sq.opts, ...sq.solutionSteps.flatMap((s) => [s.explanation, s.workingOut])].join(
        '\n'
      );
      const open = (blob.match(/\\\(/g) || []).length;
      const close = (blob.match(/\\\)/g) || []).length;
      if (open !== close) throw new Error(`${sq.id} LaTeX \\( \\) mismatch ${open} vs ${close}`);
      if (blob.includes('\f')) throw new Error(`${sq.id} form feed`);
      // no nested \( inside \(
      // weak check: skip
      for (const st of sq.solutionSteps) {
        if (!st.explanation || st.explanation.length < 15) throw new Error(`${sq.id} thin explanation`);
        if (st.graphData === undefined) throw new Error(`${sq.id} missing graphData key`);
      }
    }
  }
  console.log('self-check OK', { parents: parents.length, subs: subCount, answerIndexHist: idxHist });
}

async function pushFirestore(parents) {
  const { initializeApp, cert, getApps } = require('firebase-admin/app');
  const { getFirestore, FieldValue } = require('firebase-admin/firestore');
  const saPath =
    process.env.GOOGLE_APPLICATION_CREDENTIALS ||
    '/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json';
  const sa = JSON.parse(readFileSync(saPath, 'utf8'));
  if (!getApps().length) initializeApp({ credential: cert(sa) });
  const db = getFirestore();

  const seedIds = new Set(parents.map((p) => p.id));
  // old flat bank docs under y12a-5d-* that are not parents must be deleted
  const existing = await db.collection('questions').where('topicId', '==', 'y12a-5D').get();
  const toDelete = [];
  for (const doc of existing.docs) {
    if (!doc.id.startsWith('y12a-5d-')) continue; // leave exam papers
    if (doc.data()?.origin === 'teacher') {
      console.log('skip teacher', doc.id);
      continue;
    }
    if (!seedIds.has(doc.id)) toDelete.push(doc.id);
  }
  console.log('will delete obsolete flat bank docs:', toDelete.length, toDelete.slice(0, 8).join(', '), '...');

  let batch = db.batch();
  let n = 0;
  const flush = async () => {
    if (!n) return;
    await batch.commit();
    batch = db.batch();
    n = 0;
  };

  for (const id of toDelete) {
    batch.delete(db.collection('questions').doc(id));
    n++;
    if (n >= 400) await flush();
  }
  await flush();

  let ok = 0;
  for (const raw of parents) {
    const ref = db.collection('questions').doc(raw.id);
    const snap = await ref.get();
    if (snap.exists && snap.data()?.origin === 'teacher') {
      console.log('skip teacher parent', raw.id);
      continue;
    }
    const subQuestions = (raw.subQuestions || []).map((sq) => ({
      id: sq.id,
      type: 'multiple_choice',
      question: sq.question,
      options: sq.opts.map((t) => ({ text: t, imageUrl: '' })),
      answer: String(sq.a),
      isManual: true,
      hint: sq.hint || '',
      solution: sq.solution || '',
      solutionSteps: sq.solutionSteps || [],
      graphData: sq.graphData ?? null,
    }));

    const payload = {
      chapterId: 'y12a-5',
      chapterTitle: 'Chapter 5: The exponential and logarithmic functions',
      topicId: 'y12a-5D',
      topicCode: '5D',
      topicTitle: 'Integration of exponential functions',
      year: 'Year 12',
      isManual: true,
      origin: 'seed',
      title: String(raw.question || '').replace(/\\[\(\)\[\]]/g, '').slice(0, 40) + '...',
      question: raw.question,
      difficulty: raw.difficulty || 'medium',
      timeLimit: raw.timeLimit || 240,
      type: 'subquestions',
      requiresManualGrading: false,
      options: [],
      answer: 'See sub-questions.',
      hint: raw.hint || '',
      solution: 'See sub-question solutions.',
      solutionSteps: [],
      subQuestions,
      graphData: null,
      isNew: true,
      updatedAt: FieldValue.serverTimestamp(),
    };
    if (!snap.exists) payload.createdAt = FieldValue.serverTimestamp();
    batch.set(ref, payload, { merge: true });
    n++;
    ok++;
    if (n >= 200) await flush();
  }
  await flush();

  const ver = Date.now();
  await db.collection('sync_meta').doc('questions').set(
    { version: ver, membershipVersion: ver, updatedAt: FieldValue.serverTimestamp() },
    { merge: true }
  );
  console.log('pushed parents', ok, 'deleted', toDelete.length, 'sync version', ver);
}

async function main() {
  const originals = loadOriginal();
  console.log('loaded originals', originals.length);

  // --push-only: seed already converted; just upload parents
  if (PUSH_ONLY) {
    if (!originals.every((q) => q.type === 'subquestions')) {
      console.error('--push-only expects converted parent subquestions seed');
      process.exit(1);
    }
    selfCheck(originals);
    await pushFirestore(originals);
    console.log('NOTE: run  node tools/scripts/rebuildQuestionIndexes.js y12a-5');
    return;
  }

  if (originals.length && originals.every((q) => q.type === 'subquestions')) {
    console.error(
      'Seed already looks converted (all subquestions). Restore the short_answer seed first:\n' +
        '  git checkout HEAD -- src/constants/seedYear12Ch5DQuestions.js\n' +
        'or use --push-only to upload the current converted seed.'
    );
    process.exit(1);
  }
  const flat = originals.filter((q) => q.type !== 'subquestions');
  if (flat.length < 50) {
    console.error('Expected ~109 flat short_answer items, got', flat.length);
    process.exit(1);
  }

  const parents = buildAll(flat);
  selfCheck(parents);

  if (WRITE) {
    const out = `export const Y12A_CH5D_QUESTIONS = ${JSON.stringify(parents, null, 2)};\n`;
    writeFileSync(SEED_PATH, out);
    console.log('wrote', SEED_PATH, 'parents', parents.length);
  } else {
    console.log('dry-run only (pass --write to save seed)');
  }

  if (PUSH) {
    if (!WRITE) {
      console.error('Need --write with --push (or use --push-only)');
      process.exit(1);
    }
    await pushFirestore(parents);
    console.log('NOTE: run  node tools/scripts/rebuildQuestionIndexes.js y12a-5');
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
