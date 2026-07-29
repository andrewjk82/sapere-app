/**
 * Add varied Year 7 Ch4I — Division of fractions questions
 * (adapted from textbook Exercise examples 5a/5b/6/7 style).
 *
 * Curriculum: y7-4i "Division of fractions" (NOT y7-5b geometry).
 *
 * Usage:
 *   node tools/scripts/addY7Ch4IFractionDivision.js
 *   node tools/scripts/addY7Ch4IFractionDivision.js --seed-only
 */
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import fs from 'fs';
import path from 'path';
import { spawnSync } from 'child_process';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '../..');
const SEED_ONLY = process.argv.includes('--seed-only');
const SEED_PATH = path.join(ROOT, 'src/constants/seedYear7Ch4IQuestions.js');

// ─── Fraction helpers ────────────────────────────────────────────────────────
const gcd = (a, b) => {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b) {
    const t = b;
    b = a % b;
    a = t;
  }
  return a || 1;
};

const simplify = (n, d) => {
  if (d < 0) {
    n = -n;
    d = -d;
  }
  const g = gcd(n, d);
  return [n / g, d / g];
};

const latexFrac = (n, d) => {
  const [a, b] = simplify(n, d);
  if (b === 1) return `${a}`;
  if (a < 0) return `-\\dfrac{${Math.abs(a)}}{${b}}`;
  return `\\dfrac{${a}}{${b}}`;
};

const wrap = (s) => `\\(${s}\\)`;

/** Build 4 unique MC options; correct at random-ish but stable position from id hash */
function mcOpts(correctLatex, distractors) {
  const uniq = [];
  const seen = new Set();
  const add = (s) => {
    if (!seen.has(s)) {
      seen.add(s);
      uniq.push(s);
    }
  };
  add(correctLatex);
  for (const d of distractors) add(d);
  // pad if needed
  let k = 2;
  while (uniq.length < 4) {
    add(wrap(String(k++)));
  }
  const four = uniq.slice(0, 4);
  // Put correct at index derived from content length for variety, but stable
  const correct = correctLatex;
  const others = four.filter((x) => x !== correct);
  const idx = Math.abs(correct.length * 7 + others.length * 3) % 4;
  const opts = [];
  let oi = 0;
  for (let i = 0; i < 4; i++) {
    if (i === idx) opts.push(correct);
    else opts.push(others[oi++]);
  }
  return { opts, a: idx, correct };
}

// ─── SVG helpers (word problems) ─────────────────────────────────────────────
const SVG_STYLE =
  'max-width:420px;display:block;margin:0.75rem auto;background:#f8fafc;border-radius:12px;border:1px solid #e2e8f0;padding:0.4rem;';

function svgWrap(w, h, body) {
  return `<svg viewBox="0 0 ${w} ${h}" width="100%" height="auto" style="${SVG_STYLE}" xmlns="http://www.w3.org/2000/svg">${body}</svg>`;
}

function text(x, y, t, opts = {}) {
  const anchor = opts.anchor || 'middle';
  const size = opts.size || 13;
  const weight = opts.weight || 600;
  const fill = opts.fill || '#1e293b';
  const font = opts.math
    ? 'KaTeX_Math, \"Times New Roman\", serif'
    : 'system-ui,-apple-system,sans-serif';
  return `<text x="${x}" y="${y}" font-family="${font}" font-size="${size}" font-weight="${weight}" fill="${fill}" text-anchor="${anchor}" dominant-baseline="central">${t}</text>`;
}

function chocolateBarsSvg(nBars, pieceLabel) {
  // n whole bars in a row, each split into 3 equal pieces (for 2/3 style)
  const barW = 70;
  const barH = 36;
  const gap = 12;
  const startX = 30;
  const y = 50;
  const parts = [];
  for (let i = 0; i < nBars; i++) {
    const x = startX + i * (barW + gap);
    parts.push(
      `<rect x="${x}" y="${y}" width="${barW}" height="${barH}" rx="4" fill="#fbbf24" stroke="#92400e" stroke-width="1.5"/>`
    );
    // third marks
    parts.push(
      `<line x1="${x + barW / 3}" y1="${y}" x2="${x + barW / 3}" y2="${y + barH}" stroke="#92400e" stroke-width="1" stroke-dasharray="3 2"/>`
    );
    parts.push(
      `<line x1="${x + (2 * barW) / 3}" y1="${y}" x2="${x + (2 * barW) / 3}" y2="${y + barH}" stroke="#92400e" stroke-width="1" stroke-dasharray="3 2"/>`
    );
    // shade two of three
    parts.push(
      `<rect x="${x + 2}" y="${y + 2}" width="${(2 * barW) / 3 - 2}" height="${barH - 4}" rx="2" fill="#f59e0b" fill-opacity="0.55"/>`
    );
  }
  parts.push(text(startX + (nBars * (barW + gap) - gap) / 2, 24, `${nBars} chocolate bars`, { size: 13 }));
  parts.push(text(startX + (nBars * (barW + gap) - gap) / 2, y + barH + 22, `each person gets ${pieceLabel}`, { size: 12, fill: '#64748b', weight: 500 }));
  return svgWrap(startX * 2 + nBars * barW + (nBars - 1) * gap, 130, parts.join(''));
}

function orangesSvg(n, pieceLabel) {
  const r = 18;
  const gap = 10;
  const cols = 6;
  const parts = [];
  for (let i = 0; i < n; i++) {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const cx = 40 + col * (2 * r + gap);
    const cy = 45 + row * (2 * r + gap);
    parts.push(`<circle cx="${cx}" cy="${cy}" r="${r}" fill="#fb923c" stroke="#c2410c" stroke-width="1.5"/>`);
    // quarter marks
    parts.push(`<line x1="${cx}" y1="${cy - r}" x2="${cx}" y2="${cy + r}" stroke="#c2410c" stroke-width="1" opacity="0.5"/>`);
    parts.push(`<line x1="${cx - r}" y1="${cy}" x2="${cx + r}" y2="${cy}" stroke="#c2410c" stroke-width="1" opacity="0.5"/>`);
  }
  const rows = Math.ceil(n / cols);
  parts.push(text(40 + ((Math.min(n, cols) - 1) * (2 * r + gap)) / 2, 18, `${n} oranges`, { size: 13 }));
  parts.push(
    text(
      40 + ((Math.min(n, cols) - 1) * (2 * r + gap)) / 2,
      45 + rows * (2 * r + gap) - 5,
      `share ${pieceLabel} each`,
      { size: 12, fill: '#64748b', weight: 500 }
    )
  );
  const w = 40 + Math.min(n, cols) * (2 * r + gap) + 20;
  const h = 45 + rows * (2 * r + gap) + 20;
  return svgWrap(w, h, parts.join(''));
}

function ribbonSvg(totalM, pieceLabel) {
  const W = 360;
  const y = 55;
  const parts = [
    // ribbon bar
    `<rect x="30" y="${y}" width="300" height="28" rx="4" fill="#a78bfa" stroke="#5b21b6" stroke-width="1.5"/>`,
    // tick marks every 1/8 visual segment (8 pieces of 20 → 2.5m each conceptually)
    ...Array.from({ length: 9 }, (_, i) => {
      const x = 30 + (300 * i) / 8;
      return `<line x1="${x}" y1="${y - 4}" x2="${x}" y2="${y + 32}" stroke="#5b21b6" stroke-width="1.2"/>`;
    }),
    text(180, 28, `ribbon length = ${totalM} m`, { size: 13 }),
    text(180, y + 52, `each piece = ${pieceLabel}`, { size: 12, fill: '#64748b', weight: 500 }),
    // brace under one segment
    `<path d="M30,${y + 36} Q48,${y + 48} 67.5,${y + 36}" fill="none" stroke="#7c3aed" stroke-width="1.5"/>`,
    text(49, y + 58, pieceLabel.replace(/[()]/g, ''), { size: 11, fill: '#6d28d9', math: true }),
  ];
  return svgWrap(W, 130, parts.join(''));
}

// ─── Question builder ────────────────────────────────────────────────────────
function mc({
  id,
  difficulty = 'easy',
  timeLimit = 75,
  question,
  opts,
  a,
  hint,
  solution,
  steps,
  svg = null,
}) {
  if (opts.length !== 4) throw new Error(`${id}: need 4 opts`);
  if (a < 0 || a > 3) throw new Error(`${id}: bad a`);
  if (steps.length < 3) throw new Error(`${id}: need 3+ steps`);
  return {
    id,
    topicId: 'y7-4i',
    chapterId: 'y7-4',
    c: '4I',
    t: 'Division of fractions',
    type: 'multiple_choice',
    difficulty,
    timeLimit,
    question,
    opts,
    a,
    answer: String(a),
    hint,
    solution,
    solutionSteps: steps.map((s) => ({
      explanation: s.e,
      workingOut: s.w,
      graphData: s.svg ? { svg: s.svg } : null,
    })),
    graphData: svg ? { svg } : null,
    isNew: true,
    requiresManualGrading: false,
  };
}

/**
 * whole ÷ (p/q) = whole * q/p
 */
function wholeDivFrac(id, whole, p, q, difficulty = 'easy') {
  const [cn, cd] = simplify(whole * q, p);
  const correct = wrap(latexFrac(cn, cd));
  // distractors: multiply instead, flip wrong, forget whole
  const d1 = wrap(latexFrac(...simplify(whole * p, q))); // multiply
  const d2 = wrap(latexFrac(...simplify(p, whole * q))); // reciprocal of answer
  const d3 = wrap(latexFrac(...simplify(whole, p))); // drop q
  const { opts, a } = mcOpts(correct, [d1, d2, d3]);
  return mc({
    id,
    difficulty,
    timeLimit: 60,
    question: `Calculate:\n\\[${whole} \\div \\dfrac{${p}}{${q}}\\]`,
    opts,
    a,
    hint: `To divide by a fraction, multiply by its reciprocal: \\(\\dfrac{${q}}{${p}}\\).`,
    solution: `\\(${whole} \\div \\dfrac{${p}}{${q}} = ${whole} \\times \\dfrac{${q}}{${p}} = ${latexFrac(cn, cd)}\\).`,
    steps: [
      {
        e: 'Rewrite division as multiplication by the reciprocal of the divisor.',
        w: `\\(${whole} \\div \\dfrac{${p}}{${q}} = ${whole} \\times \\dfrac{${q}}{${p}}\\)`,
      },
      {
        e: 'Write the whole number as a fraction and multiply numerators and denominators.',
        w: `\\(\\dfrac{${whole}}{1} \\times \\dfrac{${q}}{${p}} = \\dfrac{${whole * q}}{${p}}\\)`,
      },
      {
        e: 'Simplify the resulting fraction to lowest terms.',
        w: `\\(\\dfrac{${whole * q}}{${p}} = ${latexFrac(cn, cd)}\\)`,
      },
      {
        e: 'State the final answer.',
        w: correct,
      },
    ],
  });
}

/**
 * (a/b) ÷ (c/d) = (a/b)*(d/c)
 */
function fracDivFrac(id, a, b, c, d, difficulty = 'easy') {
  const [cn, cd] = simplify(a * d, b * c);
  const correct = wrap(latexFrac(cn, cd));
  const d1 = wrap(latexFrac(...simplify(a * c, b * d))); // multiply
  const d2 = wrap(latexFrac(...simplify(b * c, a * d))); // reciprocal
  const d3 = wrap(latexFrac(...simplify(a * d, b))); // drop c
  const { opts, a: ai } = mcOpts(correct, [d1, d2, d3]);
  return mc({
    id,
    difficulty,
    timeLimit: 75,
    question: `Find:\n\\[\\dfrac{${a}}{${b}} \\div \\dfrac{${c}}{${d}}\\]`,
    opts,
    a: ai,
    hint: `Multiply by the reciprocal: \\(\\dfrac{${a}}{${b}} \\times \\dfrac{${d}}{${c}}\\).`,
    solution: `\\(\\dfrac{${a}}{${b}} \\div \\dfrac{${c}}{${d}} = \\dfrac{${a}}{${b}} \\times \\dfrac{${d}}{${c}} = ${latexFrac(cn, cd)}\\).`,
    steps: [
      {
        e: 'Keep the first fraction, change ÷ to ×, and flip the second fraction.',
        w: `\\(\\dfrac{${a}}{${b}} \\div \\dfrac{${c}}{${d}} = \\dfrac{${a}}{${b}} \\times \\dfrac{${d}}{${c}}\\)`,
      },
      {
        e: 'Multiply numerators and denominators (cancel common factors if possible).',
        w: `\\(\\dfrac{${a} \\times ${d}}{${b} \\times ${c}} = \\dfrac{${a * d}}{${b * c}}\\)`,
      },
      {
        e: 'Simplify to lowest terms.',
        w: `\\(\\dfrac{${a * d}}{${b * c}} = ${latexFrac(cn, cd)}\\)`,
      },
      {
        e: 'State the final answer.',
        w: correct,
      },
    ],
  });
}

/**
 * Chain: evaluate expression left to right for × and ÷ of fractions.
 * ops: array of {op:'×'|'÷', n, d} after first fraction (a/b)
 */
function chainEval(id, startN, startD, ops, difficulty = 'medium') {
  // Compute result
  let n = startN;
  let d = startD;
  const parts = [`\\dfrac{${startN}}{${startD}}`];
  for (const step of ops) {
    if (step.op === '×') {
      n = n * step.n;
      d = d * step.d;
      parts.push(`\\times \\dfrac{${step.n}}{${step.d}}`);
    } else if (step.op === '÷') {
      n = n * step.d;
      d = d * step.n;
      parts.push(`\\div \\dfrac{${step.n}}{${step.d}}`);
    } else if (step.op === 'whole÷') {
      // start was whole? handled separately
    }
  }
  const [cn, cd] = simplify(n, d);
  const correct = wrap(latexFrac(cn, cd));

  // Build working steps showing conversion of each ÷
  let workN = startN;
  let workD = startD;
  const stepLines = [];
  stepLines.push(`Start with \\(\\dfrac{${workN}}{${workD}}\\).`);
  let expr = `\\dfrac{${startN}}{${startD}}`;
  for (const step of ops) {
    if (step.op === '×') {
      workN *= step.n;
      workD *= step.d;
      expr += ` \\times \\dfrac{${step.n}}{${step.d}}`;
    } else {
      // ÷ → × reciprocal
      workN *= step.d;
      workD *= step.n;
      expr += ` \\times \\dfrac{${step.d}}{${step.n}}`;
    }
  }
  const [fn, fd] = simplify(workN, workD);

  const d1 = wrap(latexFrac(...simplify(startN * ops.reduce((s, o) => s * o.n, 1), startD * ops.reduce((s, o) => s * o.d, 1))));
  const d2 = wrap(latexFrac(fd, fn)); // reciprocal
  const d3 = wrap(latexFrac(...simplify(workN + 1, workD)));
  const { opts, a } = mcOpts(correct, [d1, d2, d3].filter((x) => x !== correct));

  const display = parts.join(' ');
  return mc({
    id,
    difficulty,
    timeLimit: 100,
    question: `Evaluate:\n\\[${display}\\]`,
    opts,
    a,
    hint: 'Work left to right. Replace every division with multiplication by the reciprocal.',
    solution: `\\(${display} = ${latexFrac(fn, fd)}\\).`,
    steps: [
      {
        e: 'Rewrite every division as multiplication by the reciprocal, working left to right.',
        w: `\\(${expr}\\)`,
      },
      {
        e: 'Multiply all numerators and all denominators.',
        w: `\\(\\dfrac{${workN}}{${workD}}\\)`,
      },
      {
        e: 'Simplify the fraction to lowest terms.',
        w: `\\(\\dfrac{${workN}}{${workD}} = ${latexFrac(fn, fd)}\\)`,
      },
      {
        e: 'State the final answer.',
        w: correct,
      },
    ],
  });
}

function wholeChain(id, whole, ops, difficulty = 'medium') {
  // whole then ×/÷ fractions
  let n = whole;
  let d = 1;
  const parts = [`${whole}`];
  for (const step of ops) {
    if (step.op === '×') {
      n *= step.n;
      d *= step.d;
      parts.push(`\\times \\dfrac{${step.n}}{${step.d}}`);
    } else {
      n *= step.d;
      d *= step.n;
      parts.push(`\\div \\dfrac{${step.n}}{${step.d}}`);
    }
  }
  const [cn, cd] = simplify(n, d);
  const correct = wrap(latexFrac(cn, cd));
  const d1 = wrap(latexFrac(...simplify(n + cd, d)));
  const d2 = wrap(latexFrac(cd, cn));
  const d3 = wrap(latexFrac(...simplify(whole * ops[0].n, ops[0].d)));
  const { opts, a } = mcOpts(correct, [d1, d2, d3]);

  // reciprocal form for working
  let expr = `${whole}`;
  for (const step of ops) {
    if (step.op === '×') expr += ` \\times \\dfrac{${step.n}}{${step.d}}`;
    else expr += ` \\times \\dfrac{${step.d}}{${step.n}}`;
  }

  return mc({
    id,
    difficulty,
    timeLimit: 100,
    question: `Evaluate:\n\\[${parts.join(' ')}\\]`,
    opts,
    a,
    hint: 'Convert each ÷ to × by the reciprocal, then multiply.',
    solution: `\\(${parts.join(' ')} = ${latexFrac(cn, cd)}\\).`,
    steps: [
      {
        e: 'Replace each division with multiplication by the reciprocal.',
        w: `\\(${expr}\\)`,
      },
      {
        e: 'Multiply numerators and denominators.',
        w: `\\(\\dfrac{${n}}{${d}}\\)`,
      },
      {
        e: 'Simplify.',
        w: `\\(\\dfrac{${n}}{${d}} = ${latexFrac(cn, cd)}\\)`,
      },
      {
        e: 'State the final answer.',
        w: correct,
      },
    ],
  });
}

// ─── Build question bank (varied from textbook) ───────────────────────────────
const questions = [];

// Q1 — whole ÷ fraction (varied from Ex 5a style)
const q1 = [
  [6, 2, 5],
  [3, 4, 7],
  [4, 5, 6],
  [7, 3, 5],
  [5, 7, 8],
  [8, 5, 9],
  [9, 3, 4],
  [12, 4, 5],
];
q1.forEach(([w, p, q], i) => {
  questions.push(wholeDivFrac(`y7-4i-q1${String.fromCharCode(97 + i)}`, w, p, q, 'easy'));
});

// Q2 — fraction ÷ fraction (varied from Ex 5b)
const q2 = [
  [2, 5, 3, 7],
  [3, 4, 2, 9],
  [5, 8, 3, 10],
  [4, 9, 2, 5],
  [7, 10, 3, 4],
  [2, 3, 5, 6],
  [5, 6, 4, 9],
  [7, 8, 3, 5],
];
q2.forEach(([a, b, c, d], i) => {
  questions.push(fracDivFrac(`y7-4i-q2${String.fromCharCode(97 + i)}`, a, b, c, d, 'easy'));
});

// Q3 — more fraction ÷ fraction (Ex 6 style, some simplify nicely)
const q3 = [
  [2, 5, 4, 15],
  [3, 7, 9, 14],
  [4, 9, 8, 15],
  [5, 6, 10, 9],
  [3, 8, 9, 16],
  [4, 5, 8, 15],
  [5, 12, 10, 18],
  [7, 9, 14, 15],
  [8, 15, 4, 5],
  [9, 14, 3, 7],
  [6, 25, 9, 10],
  [8, 21, 4, 7],
];
q3.forEach(([a, b, c, d], i) => {
  questions.push(fracDivFrac(`y7-4i-q3${String.fromCharCode(97 + i)}`, a, b, c, d, i < 6 ? 'easy' : 'medium'));
});

// Q4 — mixed × and ÷ chains (Ex 7 style, varied)
questions.push(
  chainEval('y7-4i-q4a', 2, 5, [
    { op: '×', n: 3, d: 4 },
    { op: '÷', n: 1, d: 2 },
  ])
);
questions.push(
  chainEval('y7-4i-q4b', 5, 8, [
    { op: '×', n: 2, d: 3 },
    { op: '÷', n: 5, d: 6 },
  ])
);
questions.push(
  chainEval('y7-4i-q4c', 3, 4, [
    { op: '÷', n: 2, d: 5 },
    { op: '×', n: 8, d: 9 },
  ])
);
questions.push(
  chainEval('y7-4i-q4d', 4, 7, [
    { op: '÷', n: 2, d: 3 },
    { op: '×', n: 7, d: 8 },
  ])
);
questions.push(
  chainEval('y7-4i-q4e', 5, 9, [
    { op: '÷', n: 5, d: 6 },
    { op: '×', n: 3, d: 4 },
  ])
);
questions.push(
  chainEval('y7-4i-q4f', 2, 3, [
    { op: '×', n: 5, d: 8 },
    { op: '÷', n: 5, d: 12 },
  ])
);
questions.push(
  wholeChain('y7-4i-q4g', 6, [
    { op: '÷', n: 3, d: 4 },
    { op: '×', n: 2, d: 5 },
  ])
);
questions.push(
  chainEval('y7-4i-q4h', 3, 5, [
    { op: '÷', n: 6, d: 7 },
    { op: '÷', n: 1, d: 2 },
  ], 'hard')
);
questions.push(
  chainEval('y7-4i-q4i', 1, 2, [
    { op: '÷', n: 1, d: 3 },
    { op: '÷', n: 1, d: 4 },
  ], 'medium')
);
questions.push(
  chainEval('y7-4i-q4j', 2, 3, [
    { op: '×', n: 3, d: 4 },
    { op: '÷', n: 1, d: 2 },
    { op: '×', n: 5, d: 6 },
  ], 'hard')
);

// Q5 — word: chocolate bars (varied: 6 bars, 3/4 each)
{
  // 6 ÷ (3/4) = 6 * 4/3 = 8
  const correct = wrap('8');
  const { opts, a } = mcOpts(correct, [wrap('4'), wrap('\\dfrac{9}{2}'), wrap('6')]);
  const svg = chocolateBarsSvg(6, '3/4 bar');
  questions.push(
    mc({
      id: 'y7-4i-q5',
      difficulty: 'medium',
      timeLimit: 90,
      question:
        'Mia has 6 chocolate bars. She wants to give each person \\(\\dfrac{3}{4}\\) of a chocolate bar. How many people can she give chocolate to?',
      opts,
      a,
      hint: 'This is how many lots of \\(\\dfrac{3}{4}\\) fit into 6, so calculate \\(6 \\div \\dfrac{3}{4}\\).',
      solution: '\\(6 \\div \\dfrac{3}{4} = 6 \\times \\dfrac{4}{3} = 8\\) people.',
      svg,
      steps: [
        {
          e: 'The question asks how many portions of size \\(\\dfrac{3}{4}\\) fit into 6 whole bars.',
          w: '\\(6 \\div \\dfrac{3}{4}\\)',
          svg,
        },
        {
          e: 'Divide by a fraction by multiplying by its reciprocal.',
          w: '\\(6 \\times \\dfrac{4}{3}\\)',
        },
        {
          e: 'Multiply and simplify.',
          w: '\\(\\dfrac{6 \\times 4}{3} = \\dfrac{24}{3} = 8\\)',
        },
        {
          e: 'So Mia can share with 8 people.',
          w: wrap('8'),
        },
      ],
    })
  );
}

// Q6 — oranges (varied: 15 oranges, 3/5 each)
{
  // 15 ÷ 3/5 = 15 * 5/3 = 25
  const correct = wrap('25');
  const { opts, a } = mcOpts(correct, [wrap('9'), wrap('20'), wrap('\\dfrac{45}{5}')]);
  // fix d3 if same as correct after simplify
  const svg = orangesSvg(15, '3/5 of an orange');
  questions.push(
    mc({
      id: 'y7-4i-q6',
      difficulty: 'medium',
      timeLimit: 90,
      question:
        'A fruit bowl has 15 oranges. Each person is given \\(\\dfrac{3}{5}\\) of an orange. How many people can receive an orange share?',
      opts,
      a,
      hint: 'Calculate \\(15 \\div \\dfrac{3}{5}\\).',
      solution: '\\(15 \\div \\dfrac{3}{5} = 15 \\times \\dfrac{5}{3} = 25\\) people.',
      svg,
      steps: [
        {
          e: 'Find how many portions of \\(\\dfrac{3}{5}\\) fit into 15.',
          w: '\\(15 \\div \\dfrac{3}{5}\\)',
          svg,
        },
        {
          e: 'Multiply by the reciprocal of \\(\\dfrac{3}{5}\\).',
          w: '\\(15 \\times \\dfrac{5}{3}\\)',
        },
        {
          e: 'Compute the product.',
          w: '\\(\\dfrac{15 \\times 5}{3} = \\dfrac{75}{3} = 25\\)',
        },
        {
          e: 'Final answer: 25 people.',
          w: wrap('25'),
        },
      ],
    })
  );
}

// Q7 — ribbon (varied: 18 m ribbon, pieces of 3/5 m)
{
  // 18 ÷ 3/5 = 18 * 5/3 = 30
  const correct = wrap('30');
  const { opts, a } = mcOpts(correct, [wrap('10'), wrap('\\dfrac{54}{5}'), wrap('24')]);
  const svg = ribbonSvg(18, '3/5 m');
  questions.push(
    mc({
      id: 'y7-4i-q7',
      difficulty: 'medium',
      timeLimit: 90,
      question:
        'A ribbon that is 18 m long is cut into pieces each of length \\(\\dfrac{3}{5}\\) of a metre. How many such pieces are there?',
      opts,
      a,
      hint: 'Calculate \\(18 \\div \\dfrac{3}{5}\\).',
      solution: '\\(18 \\div \\dfrac{3}{5} = 18 \\times \\dfrac{5}{3} = 30\\) pieces.',
      svg,
      steps: [
        {
          e: 'The number of pieces is the total length divided by the length of one piece.',
          w: '\\(18 \\div \\dfrac{3}{5}\\)',
          svg,
        },
        {
          e: 'Multiply by the reciprocal.',
          w: '\\(18 \\times \\dfrac{5}{3}\\)',
        },
        {
          e: 'Simplify: \\(18\\) and \\(3\\) share a factor of 3.',
          w: '\\(\\dfrac{18}{3} \\times 5 = 6 \\times 5 = 30\\)',
        },
        {
          e: 'There are 30 pieces.',
          w: wrap('30'),
        },
      ],
    })
  );
}

// ─── Validate ────────────────────────────────────────────────────────────────
console.log('Built', questions.length, 'questions');
const ids = new Set();
for (const q of questions) {
  if (ids.has(q.id)) throw new Error('dup ' + q.id);
  ids.add(q.id);
  // no nested \(
  const blob = q.question + q.hint + q.solution + q.solutionSteps.map((s) => s.e + s.w).join('');
  if (/\\\([^)]*\\\(/.test(blob)) throw new Error('nested latex in ' + q.id);
  // correct option present
  if (!q.opts[q.a]) throw new Error('bad a ' + q.id);
}

// ─── Write seed ──────────────────────────────────────────────────────────────
const fileBody =
  'export const Y7_CH4I_QUESTIONS = ' +
  JSON.stringify(questions, null, 2) +
  ';\n\nexport default Y7_CH4I_QUESTIONS;\n';
fs.writeFileSync(SEED_PATH, fileBody);
console.log('Wrote', SEED_PATH, '(' + (fileBody.length / 1024).toFixed(1) + ' KB)');

// Wire curriculumSeeds if not already
const seedsPath = path.join(ROOT, 'src/constants/curriculumSeeds.js');
let seedsSrc = fs.readFileSync(seedsPath, 'utf8');
if (!seedsSrc.includes('Y7_CH4I_QUESTIONS')) {
  // add import near other Y7 imports
  if (seedsSrc.includes("seedYear7Ch6AQuestions.js")) {
    seedsSrc = seedsSrc.replace(
      "import { Y7_CH6A_QUESTIONS } from './seedYear7Ch6AQuestions.js';",
      "import { Y7_CH4I_QUESTIONS } from './seedYear7Ch4IQuestions.js';\nimport { Y7_CH6A_QUESTIONS } from './seedYear7Ch6AQuestions.js';"
    );
  } else {
    seedsSrc = seedsSrc.replace(
      /(import \{ Y7_)/,
      "import { Y7_CH4I_QUESTIONS } from './seedYear7Ch4IQuestions.js';\n$1"
    );
  }
  // add registry entry — find y7-6 or y7 chapter seeds
  if (!seedsSrc.includes("topicId: 'y7-4i'")) {
    const insert = `  { chapterId: 'y7-4', chapterTitle: 'Chapter 4: Fractions', topicId: 'y7-4i', topicCode: '4I', topicTitle: 'Division of fractions', year: 'Year 7', seed: Y7_CH4I_QUESTIONS, label: 'Y7 Ch4 · Division of fractions' },\n`;
    if (seedsSrc.includes("topicId: 'y7-6a'")) {
      seedsSrc = seedsSrc.replace(
        /\{ chapterId: 'y7-6'/,
        insert + `{ chapterId: 'y7-6'`
      );
    } else if (seedsSrc.includes('CHAPTER_SEED_REGISTRY')) {
      // append near end of array — find a y7 entry
      const m = seedsSrc.match(/\{ chapterId: 'y7-[^']+',[^}]+\}/);
      if (m) {
        seedsSrc = seedsSrc.replace(m[0], insert + m[0]);
      }
    }
  }
  if (!seedsSrc.includes('Y7_CH4I_QUESTIONS,')) {
    seedsSrc = seedsSrc.replace(
      /export \{([\s\S]*?)\n\};/,
      (block) => {
        if (block.includes('Y7_CH4I_QUESTIONS')) return block;
        return block.replace(/export \{/, 'export {\n  Y7_CH4I_QUESTIONS,');
      }
    );
  }
  fs.writeFileSync(seedsPath, seedsSrc);
  console.log('Updated curriculumSeeds.js');
}

if (SEED_ONLY) {
  console.log('Seed-only — done');
  process.exit(0);
}

// ─── Push Firestore ──────────────────────────────────────────────────────────
const sa = JSON.parse(
  fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8')
);
initializeApp({ credential: cert(sa) });
const db = getFirestore();

async function push() {
  let batch = db.batch();
  let ops = 0;
  let n = 0;
  for (const q of questions) {
    const ref = db.collection('questions').doc(q.id);
    const options = q.opts.map((text, i) => ({
      text,
      imageUrl: '',
      isCorrect: i === q.a,
    }));
    batch.set(
      ref,
      {
        id: q.id,
        topicId: q.topicId,
        chapterId: q.chapterId,
        topicCode: q.c,
        topicTitle: q.t,
        c: q.c,
        t: q.t,
        type: 'multiple_choice',
        difficulty: q.difficulty,
        timeLimit: q.timeLimit,
        question: q.question,
        opts: q.opts,
        options,
        a: q.a,
        answer: String(q.a),
        hint: q.hint,
        solution: q.solution,
        solutionSteps: q.solutionSteps,
        graphData: q.graphData,
        requiresManualGrading: false,
        isManual: false,
        isNew: true,
        origin: 'seed',
        updatedAt: FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
    ops++;
    n++;
    if (ops >= 400) {
      await batch.commit();
      batch = db.batch();
      ops = 0;
      console.log('committed…', n);
    }
  }
  if (ops) await batch.commit();
  console.log('Firestore wrote', n, 'docs');

  // Membership changed (new question ids) → full index rebuild for the chapter
  const idx = spawnSync(
    'node',
    ['tools/scripts/rebuildQuestionIndexes.js', 'y7-4'],
    { encoding: 'utf8', timeout: 180000, cwd: ROOT }
  );
  console.log(idx.stdout || '');
  if (idx.stderr) console.error(idx.stderr);
  if (idx.status !== 0) console.warn('index rebuild exit', idx.status);

  // Also bump updatedAt via touchChapterIndex for cache freshness
  const { touchChapterIndex } = await import('./_lib/touchChapterIndex.js');
  const touched = await touchChapterIndex(db, 'y7-4');
  console.log('touchChapterIndex y7-4:', touched);

  for (const id of ['y7-4i-q1a', 'y7-4i-q2a', 'y7-4i-q4a', 'y7-4i-q5', 'y7-4i-q7']) {
    const d = (await db.collection('questions').doc(id).get()).data();
    console.log(id, {
      a: d?.a,
      opt: d?.opts?.[d?.a],
      steps: d?.solutionSteps?.length,
      svg: !!(d?.graphData?.svg),
    });
  }
}

await push();
console.log('Done.');
