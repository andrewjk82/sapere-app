/**
 * Convert Year 12 Adv Ch5E (Applications of integration)
 * short_answer / multi_part → FLAT top-level multiple_choice.
 *
 * Lessons from 5C/5D:
 *  - Do NOT nest everything as parent subquestions (hides from bank/counts)
 *  - Coefficient fractions: \dfrac ; exponents: \frac (never \dfrac in e^{})
 *  - Detailed solutionSteps (≥3), varied answer index, isNew:true
 *
 *   node tools/scripts/convertY12ACh5EToMCQ.cjs
 *   node tools/scripts/convertY12ACh5EToMCQ.cjs --write
 *   node tools/scripts/convertY12ACh5EToMCQ.cjs --write --push
 */
const { readFileSync, writeFileSync } = require('fs');
const path = require('path');

const WRITE = process.argv.includes('--write');
const PUSH = process.argv.includes('--push');
const ROOT = path.resolve(__dirname, '../..');
const SEED = path.join(ROOT, 'src/constants/seedYear12Ch5EQuestions.js');

const dfrac = (s) => String(s).replace(/\\frac/g, '\\dfrac');

function wrap(tex) {
  let t = String(tex).trim();
  if (!t) return t;
  // Already a full math group or already contains \(...\) — never double-wrap
  // (nested \( breaks KaTeX: "The ... \(y\)-axis" → \(The ... \(y\)-axis\)).
  if (/^\\\(|^\\\[|^\$/.test(t)) return t;
  if (/\\\(|\\\[|(^|[^\\])\$/.test(t)) return t;
  // Pure prose (starts with capital word / sentence) — leave as plain text
  if (/^[A-Z][a-z]/.test(t) && !/\\[a-zA-Z]/.test(t)) return t;
  return `\\(${t}\\)`;
}

function S(explanation, workingOut, graphData = null) {
  let w = workingOut == null ? '' : String(workingOut);
  if (w && !/\\\(|\\\[|\$/.test(w)) w = `\\(${w}\\)`;
  return { explanation, workingOut: w, graphData };
}

function hashId(id) {
  let h = 0;
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) >>> 0;
  return h;
}

function buildOpts(id, correct, distractors) {
  const c = wrap(correct);
  const seen = new Set([c]);
  const dist = [];
  for (const d of distractors) {
    const w = wrap(d);
    if (!w || seen.has(w)) continue;
    seen.add(w);
    dist.push(w);
    if (dist.length === 3) break;
  }
  let k = 0;
  while (dist.length < 3) {
    const pad = wrap(`e^{${k + 2}} - 1`);
    if (!seen.has(pad)) {
      seen.add(pad);
      dist.push(pad);
    }
    k++;
  }
  const a = hashId(id) % 4;
  const opts = [...dist];
  opts.splice(a, 0, c);
  if (opts.length !== 4 || new Set(opts).size !== 4) {
    throw new Error(`bad opts ${id}: ${JSON.stringify(opts)}`);
  }
  return { opts, a };
}

function mc({
  id,
  question,
  correct,
  distractors,
  steps,
  difficulty = 'medium',
  hint = '',
  solution = '',
  timeLimit = 120,
}) {
  const { opts, a } = buildOpts(id, correct, distractors);
  const solutionSteps = steps.map((st) =>
    st.graphData !== undefined
      ? { explanation: st.explanation, workingOut: st.workingOut || '', graphData: st.graphData }
      : S(st.explanation, st.workingOut, null)
  );
  while (solutionSteps.length < 3) {
    solutionSteps.push(S('Match the simplified result to the correct option.', wrap(correct)));
  }
  for (const st of solutionSteps) {
    if (!st.explanation || st.explanation.length < 20) {
      throw new Error(`thin explanation ${id}`);
    }
  }
  return {
    id,
    topicId: 'y12a-5E',
    c: '5E',
    t: 'Applications of integration',
    type: 'multiple_choice',
    difficulty,
    timeLimit,
    question,
    opts,
    a,
    answer: String(a),
    hint:
      hint ||
      'Set up a definite integral for the area, integrate the exponential, then evaluate at the limits.',
    solution: solution || `The exact value is ${wrap(correct)}.`,
    solutionSteps,
    graphData: null,
    isNew: true,
    requiresManualGrading: false,
  };
}

// ── Hand-crafted conversions ─────────────────────────────────────────────

const ITEMS = [];

// Q1a — definite integrals of e^x
const q1a = [
  {
    id: 'y12a-5e-q1ai',
    lim: '[0,1]',
    integral: '\\int_{0}^{1} e^{x}\\,dx',
    correct: 'e-1',
    dist: ['e+1', '1-e', 'e'],
    F: 'e^{x}',
    work: ['[e^{x}]_{0}^{1}', 'e^{1}-e^{0}', 'e-1'],
  },
  {
    id: 'y12a-5e-q1aii',
    lim: '[-1,0]',
    integral: '\\int_{-1}^{0} e^{x}\\,dx',
    correct: '1-e^{-1}',
    dist: ['e^{-1}-1', '1-e', 'e-1'],
    F: 'e^{x}',
    work: ['[e^{x}]_{-1}^{0}', 'e^{0}-e^{-1}', '1-e^{-1}'],
  },
  {
    id: 'y12a-5e-q1aiii',
    lim: '[-2,0]',
    integral: '\\int_{-2}^{0} e^{x}\\,dx',
    correct: '1-e^{-2}',
    dist: ['e^{-2}-1', '1-e^{-1}', 'e^{2}-1'],
    F: 'e^{x}',
    work: ['[e^{x}]_{-2}^{0}', 'e^{0}-e^{-2}', '1-e^{-2}'],
  },
  {
    id: 'y12a-5e-q1aiv',
    lim: '[-3,0]',
    integral: '\\int_{-3}^{0} e^{x}\\,dx',
    correct: '1-e^{-3}',
    dist: ['e^{-3}-1', '1-e^{-2}', 'e^{3}-1'],
    F: 'e^{x}',
    work: ['[e^{x}]_{-3}^{0}', 'e^{0}-e^{-3}', '1-e^{-3}'],
  },
];

for (const it of q1a) {
  ITEMS.push(
    mc({
      id: it.id,
      difficulty: 'easy',
      timeLimit: 90,
      question: `Evaluate the definite integral exactly.\n\\(${it.integral}\\)`,
      correct: it.correct,
      distractors: it.dist,
      hint: 'Antiderivative of \\(e^{x}\\) is \\(e^{x}\\). Evaluate upper minus lower.',
      steps: [
        S(
          `The integrand is \\(e^{x}\\). Its antiderivative is \\(e^{x}\\) (the chain-rule factor is 1). We will evaluate this from the given limits ${it.lim}.`,
          `F(x)=${it.F}`
        ),
        S(
          'Apply the fundamental theorem: substitute the upper limit, then subtract the value at the lower limit.',
          it.work[0]
        ),
        S('Simplify using \\(e^{0}=1\\) where needed.', it.work[1]),
        S('The exact value of the definite integral is the simplified expression below.', it.work[2]),
      ],
    })
  );
}

// Q1b–d: square counting → exact-value / comparison MC (no diagram dependency)
ITEMS.push(
  mc({
    id: 'y12a-5e-q1b',
    difficulty: 'easy',
    question:
      'The area under \\(y=e^{x}\\) from \\(x=-5\\) to \\(x=1\\) equals which exact value?',
    correct: 'e-e^{-5}',
    distractors: ['e+e^{-5}', 'e-e^{-1}', '1-e^{-5}'],
    steps: [
      S('The area under \\(y=e^{x}\\) (always positive) is \\(\\int_{-5}^{1}e^{x}\\,dx\\).', '\\int_{-5}^{1}e^{x}\\,dx'),
      S('Antiderivative \\(e^{x}\\). Evaluate: \\(e^{1}-e^{-5}\\).', 'e-e^{-5}'),
      S('So the exact area is \\(e-e^{-5}\\). Counting squares would only approximate this.', 'e-e^{-5}'),
    ],
  })
);

const q1c = [
  { id: 'y12a-5e-q1ci', integral: '\\int_{-1}^{0}e^{x}\\,dx', correct: '1-e^{-1}', dist: ['e^{-1}', 'e-1', '1-e'] },
  { id: 'y12a-5e-q1cii', integral: '\\int_{-2}^{0}e^{x}\\,dx', correct: '1-e^{-2}', dist: ['e^{-2}', '1-e^{-1}', 'e^{2}-1'] },
  { id: 'y12a-5e-q1ciii', integral: '\\int_{-3}^{0}e^{x}\\,dx', correct: '1-e^{-3}', dist: ['e^{-3}', '1-e^{-2}', 'e^{3}-1'] },
];
for (const it of q1c) {
  ITEMS.push(
    mc({
      id: it.id,
      difficulty: 'easy',
      question: `The exact value of \\(${it.integral}\\) (which a square-count would approximate) is:`,
      correct: it.correct,
      distractors: it.dist,
      steps: [
        S('Use antiderivative \\(e^{x}\\) and the fundamental theorem.', it.integral),
        S('Evaluate the limits carefully (watch the negative lower limit).', it.correct),
        S('This is the exact area under \\(y=e^{x}\\) on that interval.', it.correct),
      ],
    })
  );
}

ITEMS.push(
  mc({
    id: 'y12a-5e-q1d',
    difficulty: 'medium',
    question:
      'As the left endpoint \\(a\\to -\\infty\\), the improper integral \\(\\displaystyle\\int_{a}^{0}e^{x}\\,dx\\) approaches:',
    correct: '1',
    distractors: ['0', 'e', '\\infty'],
    steps: [
      S(
        'For finite \\(a<0\\), \\(\\int_{a}^{0}e^{x}\\,dx=[e^{x}]_{a}^{0}=1-e^{a}\\).',
        '1-e^{a}'
      ),
      S('As \\(a\\to-\\infty\\), \\(e^{a}\\to 0\\), so the expression tends to 1.', '\\lim_{a\\to-\\infty}(1-e^{a})=1'),
      S(
        'Geometrically, the total area under \\(y=e^{x}\\) to the left of the \\(y\\)-axis is 1.',
        '1'
      ),
    ],
  })
);

// Q2 areas under e^x
const q2 = [
  { id: 'y12a-5e-q2a', q: 'Find the area between \\(y=e^{x}\\) and the \\(x\\)-axis for \\(-1\\le x\\le 0\\).', c: '1-e^{-1}', d: ['e^{-1}-1', 'e-1', '1-e'] },
  { id: 'y12a-5e-q2b', q: 'Find the area between \\(y=e^{x}\\) and the \\(x\\)-axis for \\(1\\le x\\le 3\\).', c: 'e^{3}-e', d: ['e^{3}+e', 'e^{3}-1', 'e-e^{3}'] },
  { id: 'y12a-5e-q2c', q: 'Find the area between \\(y=e^{x}\\) and the \\(x\\)-axis for \\(-1\\le x\\le 1\\).', c: 'e-e^{-1}', d: ['e+e^{-1}', 'e-1', '1-e^{-1}'] },
  { id: 'y12a-5e-q2d', q: 'Find the area between \\(y=e^{x}\\) and the \\(x\\)-axis for \\(-2\\le x\\le 1\\).', c: 'e-e^{-2}', d: ['e+e^{-2}', 'e-e^{-1}', '1-e^{-2}'] },
];
for (const it of q2) {
  ITEMS.push(
    mc({
      id: it.id,
      difficulty: 'easy',
      question: it.q,
      correct: it.c,
      distractors: it.d,
      steps: [
        S(
          'Since \\(e^{x}>0\\) for all \\(x\\), the area is simply the definite integral of \\(e^{x}\\) over the given interval.',
          '\\text{Area}=\\int e^{x}\\,dx'
        ),
        S('The antiderivative is \\(e^{x}\\). Evaluate upper limit minus lower limit.', it.c),
        S('Simplify the exact expression; do not approximate unless asked.', it.c),
      ],
    })
  );
}

// Q3 scaled exponentials
const q3 = [
  {
    id: 'y12a-5e-q3ai',
    q: 'Find the area between \\(y=e^{2x}\\) and the \\(x\\)-axis from \\(x=0\\) to \\(x=3\\).',
    c: '\\dfrac{1}{2}(e^{6}-1)',
    d: ['\\dfrac{1}{2}(e^{6}+1)', 'e^{6}-1', '2(e^{6}-1)'],
    steps: [
      S('Area = \\(\\int_{0}^{3}e^{2x}\\,dx\\). Antiderivative of \\(e^{2x}\\) is \\(\\dfrac{1}{2}e^{2x}\\).', '\\dfrac{1}{2}e^{2x}'),
      S('Evaluate: \\(\\dfrac{1}{2}e^{6}-\\dfrac{1}{2}e^{0}=\\dfrac{1}{2}(e^{6}-1)\\).', '\\dfrac{1}{2}(e^{6}-1)'),
      S('The exact area is \\(\\dfrac{1}{2}(e^{6}-1)\\).', '\\dfrac{1}{2}(e^{6}-1)'),
    ],
  },
  {
    id: 'y12a-5e-q3aii',
    q: 'Find the area between \\(y=e^{2x}\\) and the \\(x\\)-axis from \\(x=-3\\) to \\(x=0\\).',
    c: '\\dfrac{1}{2}(1-e^{-6})',
    d: ['\\dfrac{1}{2}(1+e^{-6})', '\\dfrac{1}{2}(e^{6}-1)', '1-e^{-6}'],
    steps: [
      S('Area = \\(\\int_{-3}^{0}e^{2x}\\,dx=\\left[\\dfrac{1}{2}e^{2x}\\right]_{-3}^{0}\\).', '\\dfrac{1}{2}e^{2x}'),
      S('At 0: \\(\\dfrac{1}{2}\\). At \\(-3\\): \\(\\dfrac{1}{2}e^{-6}\\). Difference: \\(\\dfrac{1}{2}(1-e^{-6})\\).', '\\dfrac{1}{2}(1-e^{-6})'),
      S('Exact area: \\(\\dfrac{1}{2}(1-e^{-6})\\).', '\\dfrac{1}{2}(1-e^{-6})'),
    ],
  },
  {
    id: 'y12a-5e-q3bi',
    q: 'Find the area between \\(y=e^{-x}\\) and the \\(x\\)-axis from \\(x=0\\) to \\(x=1\\).',
    c: '1-e^{-1}',
    d: ['e^{-1}-1', 'e-1', '1-e'],
    steps: [
      S('Antiderivative of \\(e^{-x}\\) is \\(-e^{-x}\\).', '-e^{-x}'),
      S('\\([-e^{-x}]_{0}^{1}=-e^{-1}-(-e^{0})=-e^{-1}+1=1-e^{-1}\\).', '1-e^{-1}'),
      S('Exact area: \\(1-e^{-1}\\).', '1-e^{-1}'),
    ],
  },
  {
    id: 'y12a-5e-q3bii',
    q: 'Find the area between \\(y=e^{-x}\\) and the \\(x\\)-axis from \\(x=-1\\) to \\(x=0\\).',
    c: 'e-1',
    d: ['1-e', 'e^{-1}-1', '1-e^{-1}'],
    steps: [
      S('Evaluate \\(\\int_{-1}^{0}e^{-x}\\,dx=[-e^{-x}]_{-1}^{0}\\).', '[-e^{-x}]_{-1}^{0}'),
      S('At 0: \\(-1\\). At \\(-1\\): \\(-e^{1}=-e\\). Difference: \\(-1-(-e)=e-1\\).', 'e-1'),
      S('Exact area: \\(e-1\\).', 'e-1'),
    ],
  },
  {
    id: 'y12a-5e-q3ci',
    q: 'Find the area between \\(y=e^{\\frac{1}{3}x}\\) and the \\(x\\)-axis from \\(x=0\\) to \\(x=3\\).',
    c: '3(e-1)',
    d: ['3(e+1)', 'e-1', '\\dfrac{1}{3}(e-1)'],
    steps: [
      S(
        'Antiderivative of \\(e^{\\frac{1}{3}x}\\) is \\(3e^{\\frac{1}{3}x}\\) (divide by \\(\\frac{1}{3}\\)).',
        '3e^{\\frac{x}{3}}'
      ),
      S('\\([3e^{\\frac{x}{3}}]_{0}^{3}=3e-3e^{0}=3(e-1)\\).', '3(e-1)'),
      S('Exact area: \\(3(e-1)\\).', '3(e-1)'),
    ],
  },
  {
    id: 'y12a-5e-q3cii',
    q: 'Find the area between \\(y=e^{\\frac{1}{3}x}\\) and the \\(x\\)-axis from \\(x=-3\\) to \\(x=0\\).',
    c: '3(1-e^{-1})',
    d: ['3(1+e^{-1})', '3(e-1)', '1-e^{-1}'],
    steps: [
      S('Antiderivative \\(3e^{\\frac{x}{3}}\\). Evaluate from \\(-3\\) to 0.', '3e^{\\frac{x}{3}}'),
      S('At 0: 3. At \\(-3\\): \\(3e^{-1}\\). Difference: \\(3-3e^{-1}=3(1-e^{-1})\\).', '3(1-e^{-1})'),
      S('Exact area: \\(3(1-e^{-1})\\).', '3(1-e^{-1})'),
    ],
  },
];
for (const it of q3) {
  ITEMS.push(
    mc({
      id: it.id,
      difficulty: 'medium',
      question: it.q,
      correct: it.c,
      distractors: it.d,
      steps: it.steps,
    })
  );
}

// Q4 — need full questions from seed; load and map
function loadOriginal() {
  const src = readFileSync(SEED, 'utf8');
  // If already converted, abort
  writeFileSync('/tmp/ch5e-orig.cjs', src.replace(/^export const Y12A_CH5E_QUESTIONS = /, 'module.exports = '));
  delete require.cache[require.resolve('/tmp/ch5e-orig.cjs')];
  return require('/tmp/ch5e-orig.cjs');
}

// Continue with data from dump for q4–q8, q14 and multiparts

const MORE = [
  // q4
  { id: 'y12a-5e-q4a', c: 'e^{3}-e', d: ['e^{3}+e', 'e^{3}-1', 'e-e^{3}'] },
  { id: 'y12a-5e-q4b', c: 'e^{3}-e', d: ['e^{3}+e', 'e^{2}-e', 'e^{3}-e^{2}'] },
  { id: 'y12a-5e-q4c', c: '\\dfrac{1}{2}(e-e^{-1})', d: ['\\dfrac{1}{2}(e+e^{-1})', 'e-e^{-1}', '2(e-e^{-1})'] },
  { id: 'y12a-5e-q4d', c: '\\dfrac{1}{3}(e-e^{-2})', d: ['\\dfrac{1}{3}(e+e^{-2})', 'e-e^{-2}', '3(e-e^{-2})'] },
  { id: 'y12a-5e-q4e', c: 'e^{2}-1', d: ['e^{2}+1', 'e^{2}-e', '1-e^{2}'] },
  { id: 'y12a-5e-q4f', c: '\\dfrac{1}{2}(e^{3}-e)', d: ['\\dfrac{1}{2}(e^{3}+e)', 'e^{3}-e', '2(e^{3}-e)'] },
  { id: 'y12a-5e-q4g', c: '2(e^{\\frac{7}{2}}-e^{2})', d: ['2(e^{\\frac{7}{2}}+e^{2})', 'e^{\\frac{7}{2}}-e^{2}', '\\dfrac{1}{2}(e^{\\frac{7}{2}}-e^{2})'] },
  { id: 'y12a-5e-q4h', c: '2(1-e^{-2})', d: ['2(1+e^{-2})', '1-e^{-2}', '2(e^{-2}-1)'] },
  // q5
  { id: 'y12a-5e-q5a', c: 'e^{2}-1', d: ['e^{2}+1', 'e^{2}-e', 'e-1'] },
  { id: 'y12a-5e-q5b', c: '2(e-e^{-\\frac{1}{2}})', d: ['2(e+e^{-\\frac{1}{2}})', 'e-e^{-\\frac{1}{2}}', '2(e-1)'] },
  { id: 'y12a-5e-q5c', c: '1-e^{-1}', d: ['e^{-1}-1', 'e-1', '1-e'] },
  { id: 'y12a-5e-q5d', c: '2(e^{\\frac{1}{2}}-e^{-1})', d: ['2(e^{\\frac{1}{2}}+e^{-1})', 'e^{\\frac{1}{2}}-e^{-1}', '2(e-e^{-1})'] },
  // q6
  { id: 'y12a-5e-q6a', c: '3-e^{-2}', d: ['3+e^{-2}', '2-e^{-2}', 'e^{-2}-3'] },
  { id: 'y12a-5e-q6b', c: 'e^{-1}', d: ['1-e^{-1}', 'e', '1-e'] },
  { id: 'y12a-5e-q6c', c: '2(e^{2}-e^{-2})', d: ['2(e^{2}+e^{-2})', 'e^{2}-e^{-2}', '2(e^{2}-1)'] },
  { id: 'y12a-5e-q6d', c: '18+e^{3}-e^{-3}', d: ['18+e^{3}+e^{-3}', '18+e^{3}', 'e^{3}-e^{-3}'] },
  // q7
  { id: 'y12a-5e-q7a', c: '1+e^{-2}', d: ['1-e^{-2}', 'e^{-2}', '2+e^{-2}'] },
  { id: 'y12a-5e-q7b', c: '1', d: ['e-1', 'e', '0'] },
  { id: 'y12a-5e-q7c', c: 'e^{-1}', d: ['1-e^{-1}', 'e-1', '1'] },
  { id: 'y12a-5e-q7d', c: '3+e^{-2}', d: ['3-e^{-2}', '2+e^{-2}', 'e^{-2}'] },
  { id: 'y12a-5e-q7e', c: '1', d: ['e-1', 'e', '0'] },
  { id: 'y12a-5e-q7f', c: '9-e+e^{-2}', d: ['9-e-e^{-2}', '9+e-e^{-2}', '9-e'] },
  // q8
  { id: 'y12a-5e-q8a', c: 'e-\\dfrac{5}{2}', d: ['e-\\dfrac{3}{2}', 'e-\\dfrac{1}{2}', '\\dfrac{5}{2}-e'] },
  { id: 'y12a-5e-q8b', c: 'e-\\dfrac{3}{2}', d: ['e-\\dfrac{5}{2}', 'e-\\dfrac{1}{2}', '\\dfrac{3}{2}-e'] },
  // q14
  { id: 'y12a-5e-q14', c: 'e^{2}-3', d: ['e^{2}+3', 'e^{2}-2', '3-e^{2}'] },
];

function genericAreaSteps(correct) {
  return [
    S(
      'Identify the curves/lines that bound the region and write the area as one or more definite integrals. For a curve above the axis, the area is the integral of the function between the endpoints.',
      '\\text{Area}=\\int_{a}^{b}f(x)\\,dx'
    ),
    S(
      'Find an antiderivative of each exponential (or polynomial) term. For \\(e^{kx}\\) use \\(\\dfrac{1}{k}e^{kx}\\).',
      '\\int e^{kx}\\,dx=\\dfrac{1}{k}e^{kx}'
    ),
    S(
      'Evaluate the antiderivative at the upper limit and subtract its value at the lower limit, then simplify exactly.',
      correct
    ),
  ];
}

// ── Build remaining from original questions ──────────────────────────────

function mainBuild() {
  const originals = loadOriginal();
  if (originals.length && originals.every((q) => q.type === 'multiple_choice')) {
    console.error('Seed already fully MC. Aborting.');
    process.exit(1);
  }

  const byId = Object.fromEntries(originals.map((q) => [q.id, q]));
  const done = new Set(ITEMS.map((q) => q.id));

  // Attach original questions for q4+
  for (const m of MORE) {
    if (done.has(m.id)) continue;
    const orig = byId[m.id];
    if (!orig) {
      console.warn('missing original', m.id);
      continue;
    }
    // Fix $ in hints
    const hint = String(orig.hint || '')
      .replace(/\$([^$]+)\$/g, '\\($1\\)')
      .replace(/\$/g, '');
    ITEMS.push(
      mc({
        id: m.id,
        question: orig.question,
        correct: m.c,
        distractors: m.d,
        difficulty: orig.difficulty || 'medium',
        timeLimit: orig.timeLimit || 120,
        hint,
        steps: genericAreaSteps(m.c),
        solution: orig.solution || '',
      })
    );
    done.add(m.id);
  }

  // Multi-part → flat MC subs
  const multiparts = {
    'y12a-5e-q9': {
      stem: 'The diagram shows the region above the \\(x\\)-axis, below both \\(y=e^{x}\\) and \\(y=e^{-x}\\).',
      subs: [
        {
          id: 'y12a-5e-q9a',
          q: 'Why may the area be written as \\(2\\int_{0}^{1}e^{-x}\\,dx\\)?',
          c: 'The region is symmetric about the \\(y\\)-axis',
          d: [
            'The region is symmetric about the \\(x\\)-axis',
            'The integrand is an odd function',
            'The curves do not meet the axes',
          ],
          steps: [
            S(
              'The curves \\(y=e^{x}\\) and \\(y=e^{-x}\\) are reflections of each other in the \\(y\\)-axis, so the region is symmetric about the \\(y\\)-axis.',
              'f(-x)\\text{ reflection}'
            ),
            S(
              'Therefore the total area is twice the area to the right of the \\(y\\)-axis under the lower envelope. For \\(x\\ge 0\\), the lower curve is \\(e^{-x}\\).',
              '2\\int_{0}^{1}e^{-x}\\,dx'
            ),
            S('Hence the area formula uses the factor 2 and the integral of \\(e^{-x}\\) from 0 to 1.', '2\\int_{0}^{1}e^{-x}\\,dx'),
          ],
        },
        {
          id: 'y12a-5e-q9b',
          q: 'Hence find the area of this region.',
          c: '2(1-e^{-1})',
          d: ['2(1+e^{-1})', '1-e^{-1}', '2(e-1)'],
          steps: [
            S('Compute \\(2\\int_{0}^{1}e^{-x}\\,dx=2[-e^{-x}]_{0}^{1}\\).', '2[-e^{-x}]_{0}^{1}'),
            S('Inner value: \\(-e^{-1}-(-1)=1-e^{-1}\\). Multiply by 2.', '2(1-e^{-1})'),
            S('Exact area: \\(2(1-e^{-1})\\).', '2(1-e^{-1})'),
          ],
        },
      ],
    },
    'y12a-5e-q10': {
      stem: 'The diagram shows the region above the \\(x\\)-axis, below both \\(y=e-e^{-x}\\) and \\(y=e-e^{x}\\).',
      subs: [
        {
          id: 'y12a-5e-q10a',
          q: 'Why may the area be written as \\(2\\int_{0}^{1}(e-e^{x})\\,dx\\)?',
          c: 'The region is symmetric about the \\(y\\)-axis',
          d: [
            'The region is symmetric about the line \\(y=x\\)',
            'Both curves are odd functions',
            'The area to the left of the \\(y\\)-axis is zero',
          ],
          steps: [
            S(
              'Replacing \\(x\\) by \\(-x\\) swaps the two upper boundaries in a way that leaves the region symmetric about the \\(y\\)-axis.',
              '\\text{symmetry in }y\\text{-axis}'
            ),
            S(
              'For \\(x\\ge 0\\) the lower of the two upper curves is \\(e-e^{x}\\). Double that half-area.',
              '2\\int_{0}^{1}(e-e^{x})\\,dx'
            ),
            S('So the factor 2 and the integral of \\(e-e^{x}\\) from 0 to 1 are justified by symmetry.', '2\\int_{0}^{1}(e-e^{x})\\,dx'),
          ],
        },
        {
          id: 'y12a-5e-q10b',
          q: 'Hence find the area of this region.',
          c: '2',
          d: ['e-1', '2e', '1'],
          steps: [
            S('Evaluate \\(2\\int_{0}^{1}(e-e^{x})\\,dx=2[ex-e^{x}]_{0}^{1}\\).', '2[ex-e^{x}]_{0}^{1}'),
            S('At 1: \\(e-e=0\\). At 0: \\(0-1=-1\\). Difference: \\(0-(-1)=1\\). Times 2 gives 2.', '2\\cdot 1=2'),
            S('The exact area is 2.', '2'),
          ],
        },
      ],
    },
    'y12a-5e-q11': {
      stem: 'Consider the curve \\(y=e^{x}-e^{-x}\\) and the lines \\(x=-3\\), \\(x=3\\).',
      subs: [
        {
          id: 'y12a-5e-q11a',
          q: 'Which calculation shows that \\(f(x)=e^{x}-e^{-x}\\) is odd?',
          c: 'f(-x)=e^{-x}-e^{x}=-(e^{x}-e^{-x})=-f(x)',
          d: [
            'f(-x)=e^{-x}-e^{x}=e^{x}-e^{-x}=f(x)',
            'f(-x)=e^{x}-e^{-x}=f(x)',
            'f(-x)=-e^{-x}+e^{x}=f(x)',
          ],
          steps: [
            S('Substitute \\(-x\\) into \\(f(x)=e^{x}-e^{-x}\\).', 'f(-x)=e^{-x}-e^{x}'),
            S('Factor out a minus sign: \\(e^{-x}-e^{x}=-(e^{x}-e^{-x})\\).', 'f(-x)=-f(x)'),
            S('Therefore \\(f\\) is an odd function.', 'f\\text{ odd}'),
          ],
        },
        {
          id: 'y12a-5e-q11b',
          q: 'Hence \\(\\displaystyle\\int_{-3}^{3}(e^{x}-e^{-x})\\,dx\\) equals:',
          c: '0',
          d: ['2', 'e^{3}-e^{-3}', '2(e^{3}-e^{-3})'],
          steps: [
            S('An odd integrable function over a symmetric interval has integral zero.', '\\int_{-a}^{a}f=0'),
            S('Here \\(a=3\\) and \\(f\\) is odd, so the signed integral is 0.', '0'),
            S('Note: the geometric area is not zero — only the signed integral is.', '0'),
          ],
        },
        {
          id: 'y12a-5e-q11c',
          q: 'Why is the geometric area equal to \\(2\\int_{0}^{3}(e^{x}-e^{-x})\\,dx\\)?',
          c: 'The graph is odd, so the areas left and right of the \\(y\\)-axis are equal',
          d: [
            'The graph is even, so the areas are equal',
            'The function is always negative on \\([-3,0]\\)',
            'The integral from \\(-3\\) to 3 is already the area',
          ],
          steps: [
            S('For an odd function, the graph is rotationally symmetric 180° about the origin, so the absolute areas on each side match.', '\\text{odd symmetry}'),
            S('On \\([0,3]\\), \\(e^{x}-e^{-x}\\ge 0\\), so that half-area can be doubled.', '2\\int_{0}^{3}(e^{x}-e^{-x})\\,dx'),
            S('This gives the total geometric area of the region.', '2\\int_{0}^{3}f'),
          ],
        },
        {
          id: 'y12a-5e-q11d',
          q: 'Hence find the area of this region.',
          c: '2(e^{3}+e^{-3}-2)',
          d: ['2(e^{3}-e^{-3}-2)', 'e^{3}+e^{-3}-2', '2(e^{3}+e^{-3})'],
          steps: [
            S(
              '\\(\\int(e^{x}-e^{-x})\\,dx=e^{x}+e^{-x}\\). Evaluate from 0 to 3: \\((e^{3}+e^{-3})-(1+1)=e^{3}+e^{-3}-2\\).',
              'e^{3}+e^{-3}-2'
            ),
            S('Double for both sides: \\(2(e^{3}+e^{-3}-2)\\).', '2(e^{3}+e^{-3}-2)'),
            S('Exact area: \\(2(e^{3}+e^{-3}-2)\\).', '2(e^{3}+e^{-3}-2)'),
          ],
        },
      ],
    },
    'y12a-5e-q12': {
      stem: 'Consider the curves \\(y=x^{2}\\) and \\(y=e^{x+1}\\).',
      subs: [
        {
          id: 'y12a-5e-q12a',
          q: 'Which calculation shows the curves meet at \\(x=-1\\)?',
          c: '(-1)^{2}=1 and e^{-1+1}=e^{0}=1',
          d: [
            '(-1)^{2}=-1 and e^{0}=1',
            '(-1)^{2}=1 and e^{-1}=1',
            '1^{2}=1 and e^{1+1}=e^{2}',
          ],
          steps: [
            S('At \\(x=-1\\), the parabola gives \\(y=(-1)^{2}=1\\).', 'y=1'),
            S('The exponential: \\(y=e^{-1+1}=e^{0}=1\\). Same point.', 'e^{0}=1'),
            S('Therefore the curves intersect at \\((-1,1)\\).', '(-1,1)'),
          ],
        },
        {
          id: 'y12a-5e-q12b',
          q: 'In the second quadrant between the curves and the \\(y\\)-axis, which is true?',
          c: 'For \\(-1\\le x\\le 0\\), \\(e^{x+1}\\ge x^{2}\\)',
          d: [
            'For \\(-1\\le x\\le 0\\), \\(x^{2}\\ge e^{x+1}\\)',
            'The curves do not meet the \\(y\\)-axis',
            'The region has zero area',
          ],
          steps: [
            S('At the endpoints \\(x=-1\\) and \\(x=0\\) the curves meet or bound the region with the axis. Between them the exponential sits above the parabola.', 'e^{x+1}\\ge x^{2}'),
            S('So the area is \\(\\int_{-1}^{0}(e^{x+1}-x^{2})\\,dx\\).', '\\int_{-1}^{0}(e^{x+1}-x^{2})\\,dx'),
            S('This matches the standard setup for this textbook region.', 'e^{x+1}\\ge x^{2}'),
          ],
        },
        {
          id: 'y12a-5e-q12c',
          q: 'Find the area of the region in the second quadrant between the curves and the \\(y\\)-axis.',
          c: 'e-\\dfrac{4}{3}',
          d: ['e-\\dfrac{2}{3}', 'e+\\dfrac{4}{3}', '\\dfrac{4}{3}-e'],
          steps: [
            S(
              'Area = \\(\\int_{-1}^{0}(e^{x+1}-x^{2})\\,dx=\\left[e^{x+1}-\\dfrac{x^{3}}{3}\\right]_{-1}^{0}\\).',
              'e^{x+1}-\\dfrac{x^{3}}{3}'
            ),
            S('At 0: \\(e-0=e\\). At \\(-1\\): \\(e^{0}-\\dfrac{(-1)}{3}=1+\\dfrac{1}{3}=\\dfrac{4}{3}\\).', 'e-\\dfrac{4}{3}'),
            S('Difference: \\(e-\\dfrac{4}{3}\\).', 'e-\\dfrac{4}{3}'),
          ],
        },
      ],
    },
    'y12a-5e-q13': {
      stem: 'Consider \\(y=e^{x}\\) and the line \\(y=(e-1)x+1\\).',
      subs: [
        {
          id: 'y12a-5e-q13a',
          q: 'The curves meet at which pair of points?',
          c: 'A(0,1) and B(1,e)',
          d: ['A(0,0) and B(1,e)', 'A(0,1) and B(1,1)', 'A(1,0) and B(e,1)'],
          steps: [
            S('At \\(x=0\\): exponential gives 1; line gives 1. Point \\(A(0,1)\\).', 'A(0,1)'),
            S('At \\(x=1\\): exponential gives \\(e\\); line gives \\((e-1)+1=e\\). Point \\(B(1,e)\\).', 'B(1,e)'),
            S('They meet at \\(A(0,1)\\) and \\(B(1,e)\\).', 'A(0,1),\\,B(1,e)'),
          ],
        },
        {
          id: 'y12a-5e-q13b',
          q: 'Find the area between the line and the curve from \\(x=0\\) to \\(x=1\\).',
          c: '\\dfrac{3}{2}-\\dfrac{e}{2}',
          d: ['\\dfrac{e}{2}-\\dfrac{3}{2}', '\\dfrac{3}{2}+\\dfrac{e}{2}', 'e-\\dfrac{3}{2}'],
          steps: [
            S(
              'On \\([0,1]\\) the line lies above \\(e^{x}\\). Area = \\(\\int_{0}^{1}\\big((e-1)x+1-e^{x}\\big)\\,dx\\).',
              '\\int_{0}^{1}((e-1)x+1-e^{x})\\,dx'
            ),
            S(
              'Antiderivative: \\(\\dfrac{e-1}{2}x^{2}+x-e^{x}\\). Evaluate 0 to 1: \\(\\dfrac{e-1}{2}+1-e- (0-1)\\).',
              '\\dfrac{e-1}{2}+1-e+1'
            ),
            S(
              'Simplify: \\(\\dfrac{e-1}{2}+2-e=\\dfrac{e-1+4-2e}{2}=\\dfrac{3-e}{2}=\\dfrac{3}{2}-\\dfrac{e}{2}\\).',
              '\\dfrac{3}{2}-\\dfrac{e}{2}'
            ),
          ],
        },
      ],
    },
    'y12a-5e-q15': {
      stem: 'Give approximations correct to four decimal places where needed.',
      subs: [
        {
          id: 'y12a-5e-q15a',
          q: 'The area between \\(y=e^{x}\\) and the \\(x\\)-axis for \\(0\\le x\\le 1\\), to 4 d.p., is:',
          c: '1.7183',
          d: ['1.7182', '1.7283', '2.7183'],
          steps: [
            S('Exact area: \\(\\int_{0}^{1}e^{x}\\,dx=e-1\\).', 'e-1'),
            S('Numerically \\(e\\approx 2.7182818\\), so \\(e-1\\approx 1.7182818\\).', '1.7182818'),
            S('To four decimal places: 1.7183.', '1.7183'),
          ],
        },
        {
          id: 'y12a-5e-q15b',
          q: 'Trapezoidal rule with two subintervals for the same area (to 4 d.p.):',
          c: '1.7539',
          d: ['1.7183', '1.8591', '1.5431'],
          steps: [
            S(
              'Nodes \\(x=0,0.5,1\\). Values: \\(e^{0}=1\\), \\(e^{0.5}\\approx 1.6487\\), \\(e^{1}\\approx 2.7183\\).',
              'h=0.5'
            ),
            S(
              'Trapezoidal: \\(\\dfrac{h}{2}(y_0+2y_1+y_2)=\\dfrac{0.5}{2}(1+2\\cdot 1.6487+2.7183)\\).',
              '0.25(1+3.2974+2.7183)'
            ),
            S('Compute \\(0.25\\times 7.0157\\approx 1.7539\\).', '1.7539'),
          ],
        },
        {
          id: 'y12a-5e-q15c',
          q: 'Compared with the exact value, the trapezoidal estimate is:',
          c: 'Greater, because \\(y=e^{x}\\) is concave up (trapezoids sit above the curve)',
          d: [
            'Less, because \\(y=e^{x}\\) is concave up',
            'Greater, because \\(y=e^{x}\\) is concave down',
            'Exactly equal to the true area',
          ],
          steps: [
            S(
              'The second derivative of \\(e^{x}\\) is \\(e^{x}>0\\), so the graph is concave up.',
              "y''=e^{x}>0"
            ),
            S(
              'For a concave-up graph, chords (trapezoid tops) lie above the curve, so the trapezoidal rule overestimates the integral.',
              'T>\\int'
            ),
            S('Indeed 1.7539 > 1.7183.', '1.7539>1.7183'),
          ],
        },
      ],
    },
  };

  for (const [pid, data] of Object.entries(multiparts)) {
    for (const sub of data.subs) {
      if (done.has(sub.id)) continue;
      const question = `${data.stem}\n\n${sub.q}`;
      ITEMS.push(
        mc({
          id: sub.id,
          question,
          correct: sub.c,
          distractors: sub.d,
          difficulty: 'medium',
          timeLimit: 150,
          steps: sub.steps,
        })
      );
      done.add(sub.id);
    }
  }

  // Any remaining short_answer not yet converted
  for (const orig of originals) {
    if (orig.type === 'multi_part') continue;
    if (done.has(orig.id)) continue;
    const ans = String(orig.a || '').trim();
    if (!ans || /approximation by counting|sketch required/i.test(ans)) {
      console.warn('skip leftover', orig.id, ans.slice(0, 40));
      continue;
    }
    const correct = ans.replace(/\\frac/g, '\\dfrac');
    // weak auto distractors
    const d = [];
    if (correct.startsWith('-')) d.push(correct.slice(1));
    else d.push(`-${correct}`);
    d.push(correct.replace(/e\^\{?(\d+)/, 'e^{$1+1}'));
    d.push(correct.includes('-') ? correct.replace(/-/g, '+') : correct + '+1');
    ITEMS.push(
      mc({
        id: orig.id,
        question: orig.question,
        correct,
        distractors: d.slice(0, 3),
        difficulty: orig.difficulty || 'medium',
        steps: genericAreaSteps(correct),
      })
    );
  }

  return ITEMS;
}

function selfCheck(items) {
  const ids = new Set();
  const hist = [0, 0, 0, 0];
  for (const q of items) {
    if (ids.has(q.id)) throw new Error(`dup id ${q.id}`);
    ids.add(q.id);
    if (q.type !== 'multiple_choice') throw new Error(`not MC ${q.id}`);
    if (q.opts.length !== 4 || new Set(q.opts).size !== 4) throw new Error(`opts ${q.id}`);
    if (!Number.isInteger(q.a) || q.opts[q.a] == null) throw new Error(`a ${q.id}`);
    hist[q.a]++;
    if (q.solutionSteps.length < 3) throw new Error(`steps ${q.id}`);
    const blob = [q.question, ...q.opts, ...q.solutionSteps.flatMap((s) => [s.explanation, s.workingOut])].join(
      '\n'
    );
    const open = (blob.match(/\\\(/g) || []).length;
    const close = (blob.match(/\\\)/g) || []).length;
    if (open !== close) throw new Error(`paren ${q.id} ${open}/${close}`);
    // no dfrac inside e^{
    if (/e\^\{[^}]*\\dfrac/.test(blob)) throw new Error(`dfrac in exp ${q.id}`);
    // no slash exponents preferred but allow if leftover
  }
  console.log('self-check OK', { total: items.length, answerIndexHist: hist });
}

async function push(items) {
  const { initializeApp, cert, getApps } = require('firebase-admin/app');
  const { getFirestore, FieldValue } = require('firebase-admin/firestore');
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
  const existing = await db.collection('questions').where('topicId', '==', 'y12a-5E').get();
  const toDelete = [];
  for (const doc of existing.docs) {
    if (!doc.id.startsWith('y12a-5e-')) continue;
    if (doc.data()?.origin === 'teacher') continue;
    if (!seedIds.has(doc.id)) toDelete.push(doc.id);
  }
  console.log('delete obsolete', toDelete.length, toDelete.slice(0, 10).join(', '));

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
  for (const raw of items) {
    const ref = db.collection('questions').doc(raw.id);
    const snap = await ref.get();
    if (snap.exists && snap.data()?.origin === 'teacher') continue;
    batch.set(
      ref,
      {
        chapterId: 'y12a-5',
        chapterTitle: 'Chapter 5: The exponential and logarithmic functions',
        topicId: 'y12a-5E',
        topicCode: '5E',
        topicTitle: 'Applications of integration',
        year: 'Year 12',
        isManual: true,
        origin: 'seed',
        title: String(raw.question || '').replace(/\\[\(\)\[\]]/g, '').slice(0, 40) + '...',
        question: raw.question,
        difficulty: raw.difficulty || 'medium',
        timeLimit: raw.timeLimit || 120,
        type: 'multiple_choice',
        requiresManualGrading: false,
        options: raw.opts.map((t) => ({ text: t, imageUrl: '' })),
        answer: String(raw.a),
        hint: raw.hint || '',
        solution: raw.solution || '',
        solutionSteps: raw.solutionSteps || [],
        subQuestions: [],
        graphData: null,
        isNew: true,
        updatedAt: FieldValue.serverTimestamp(),
        ...(snap.exists ? {} : { createdAt: FieldValue.serverTimestamp() }),
      },
      { merge: true }
    );
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
  console.log('pushed', ok, 'version', ver);
}

async function main() {
  const items = mainBuild();
  selfCheck(items);

  if (WRITE) {
    writeFileSync(SEED, `export const Y12A_CH5E_QUESTIONS = ${JSON.stringify(items, null, 2)};\n`);
    console.log('wrote', SEED, items.length);
  } else {
    console.log('dry-run', items.length, '(pass --write)');
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
