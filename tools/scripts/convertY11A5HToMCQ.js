/**
 * Convert Year 11 Advanced Chapter 5H
 * (Continuity & piecewise-defined functions) → MCQ / teacher_review.
 *
 *   node tools/scripts/convertY11A5HToMCQ.js --seed-only
 *   node tools/scripts/convertY11A5HToMCQ.js --firestore
 */
import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '../..');
const SEED_PATH = resolve(ROOT, 'src/constants/seedYear11Ch5Questions.js');
const DO_FS = process.argv.includes('--firestore');

const TOPIC = {
  chapterId: 'y11a-5',
  chapterTitle: 'Chapter 5: Further graphing and equations',
  year: 'Year 11',
  course: 'Advanced',
  topicId: 'y11a-5H',
  topicCode: '5H',
  topicTitle: 'Continuous Functions',
  isManual: true,
  timeLimit: 60,
};

const SVG_STYLE =
  'display:block;margin:0 auto;background:#fafafa;border:1px solid #e2e8f0;border-radius:8px;';

function dollarToParen(s) {
  if (typeof s !== 'string') return s;
  return s.replace(/\$\$([\s\S]*?)\$\$/g, '\\[$1\\]').replace(/\$([^$]+)\$/g, '\\($1\\)');
}
function wrapWork(s) {
  if (typeof s !== 'string' || !s.trim()) return '\\(\\text{(see solution)}\\)';
  let t = dollarToParen(s.trim());
  if (/\\\(|\\\[|\$/.test(t)) {
    const o = (t.match(/\\\(/g) || []).length;
    const c = (t.match(/\\\)/g) || []).length;
    if (o === c) return t;
    t = t.replace(/\\\(|\\\)/g, '');
  }
  return `\\(${t}\\)`;
}
function step(explanation, workingOut, graphData = null) {
  return { explanation: dollarToParen(explanation), workingOut: wrapWork(workingOut), graphData };
}
function place(correct, distractors, aIdx) {
  const opts = [...distractors];
  opts.splice(aIdx, 0, correct);
  if (opts.length !== 4 || opts[aIdx] !== correct || new Set(opts).size !== 4) {
    throw new Error(`place fail a=${aIdx} ${JSON.stringify(opts)}`);
  }
  return opts;
}

const aDist = { 0: 0, 1: 0, 2: 0, 3: 0 };
function nextA() {
  const order = [0, 1, 2, 3].sort((x, y) => aDist[x] - aDist[y] || x - y);
  const a = order[0];
  aDist[a]++;
  return a;
}

function mc({ id, difficulty = 'medium', q, correct, distractors, a, solutionSteps, t = 'Continuous Functions', c = '5H' }) {
  const opts = place(correct, distractors, a);
  return {
    id,
    c,
    t,
    type: 'multiple_choice',
    difficulty,
    q: dollarToParen(q),
    a: String(a),
    opts,
    options: opts,
    h: '',
    s: '',
    solutionSteps,
    timeLimit: 60,
    isNew: true,
  };
}

function tr({ id, difficulty = 'hard', q, answer, solutionSteps, t = 'Continuous Functions', c = '5H' }) {
  return {
    id,
    c,
    t,
    type: 'teacher_review',
    difficulty,
    q: dollarToParen(q),
    a: dollarToParen(answer),
    opts: [],
    options: [],
    solutionSteps,
    timeLimit: 60,
    isNew: true,
  };
}

// ── SVG helpers for model sketches ──────────────────────────────────────────

function plane(xmin, xmax, ymin, ymax, W = 300, H = 240) {
  const padL = 36,
    padR = 18,
    padT = 22,
    padB = 28;
  const sx = (x) => padL + ((x - xmin) / (xmax - xmin)) * (W - padL - padR);
  const sy = (y) => padT + ((ymax - y) / (ymax - ymin)) * (H - padT - padB);
  let axes = '';
  if (ymin <= 0 && ymax >= 0) {
    const oy = sy(0);
    axes += `<line x1="${padL}" y1="${oy.toFixed(1)}" x2="${W - padR}" y2="${oy.toFixed(1)}" stroke="#64748b" stroke-width="1.5"/>`;
    axes += `<text x="${W - padR - 4}" y="${(oy + 14).toFixed(1)}" font-size="12" fill="#64748b" font-weight="bold">x</text>`;
  }
  if (xmin <= 0 && xmax >= 0) {
    const ox = sx(0);
    axes += `<line x1="${ox.toFixed(1)}" y1="${padT}" x2="${ox.toFixed(1)}" y2="${H - padB}" stroke="#64748b" stroke-width="1.5"/>`;
    axes += `<text x="${(ox + 6).toFixed(1)}" y="${padT + 4}" font-size="12" fill="#64748b" font-weight="bold">y</text>`;
  }
  return { sx, sy, padL, padR, padT, padB, W, H, axes };
}

function samplePath(fn, x0, x1, sx, sy, ymin, ymax, n = 50) {
  let d = '';
  for (let i = 0; i <= n; i++) {
    const x = x0 + ((x1 - x0) * i) / n;
    let y = fn(x);
    if (!Number.isFinite(y)) continue;
    y = Math.max(ymin, Math.min(ymax, y));
    d += `${d ? 'L' : 'M'}${sx(x).toFixed(1)},${sy(y).toFixed(1)} `;
  }
  return d.trim();
}

function piecewiseSvg(pieces, labels = [], marks = []) {
  // pieces: [{fn, x0, x1, openStart?, openEnd?}]
  const xs = pieces.flatMap((p) => [p.x0, p.x1]);
  const ys = [];
  for (const p of pieces) {
    for (let i = 0; i <= 20; i++) {
      const x = p.x0 + ((p.x1 - p.x0) * i) / 20;
      const y = p.fn(x);
      if (Number.isFinite(y)) ys.push(y);
    }
  }
  for (const m of marks) ys.push(m.y);
  const xmin = Math.min(...xs) - 0.5;
  const xmax = Math.max(...xs) + 0.5;
  const ymin = Math.min(...ys, 0) - 1;
  const ymax = Math.max(...ys, 0) + 1;
  const { sx, sy, W, H, axes } = plane(xmin, xmax, ymin, ymax);
  let body = axes;
  for (const p of pieces) {
    const d = samplePath(p.fn, p.x0, p.x1, sx, sy, ymin, ymax);
    if (d) body += `<path d="${d}" fill="none" stroke="#6366f1" stroke-width="2.5"/>`;
    if (p.openStart) {
      body += `<circle cx="${sx(p.x0).toFixed(1)}" cy="${sy(p.fn(p.x0)).toFixed(1)}" r="3.5" fill="#fff" stroke="#6366f1" stroke-width="2"/>`;
    }
    if (p.openEnd) {
      body += `<circle cx="${sx(p.x1).toFixed(1)}" cy="${sy(p.fn(p.x1)).toFixed(1)}" r="3.5" fill="#fff" stroke="#6366f1" stroke-width="2"/>`;
    }
    if (p.closedStart) {
      body += `<circle cx="${sx(p.x0).toFixed(1)}" cy="${sy(p.fn(p.x0)).toFixed(1)}" r="3.5" fill="#6366f1"/>`;
    }
    if (p.closedEnd) {
      body += `<circle cx="${sx(p.x1).toFixed(1)}" cy="${sy(p.fn(p.x1)).toFixed(1)}" r="3.5" fill="#6366f1"/>`;
    }
  }
  for (const m of marks) {
    body += `<circle cx="${sx(m.x).toFixed(1)}" cy="${sy(m.y).toFixed(1)}" r="3.5" fill="${m.color || '#ef4444'}"/>`;
    if (m.label) {
      body += `<text x="${(sx(m.x) + 6).toFixed(1)}" y="${(sy(m.y) - 6).toFixed(1)}" font-size="11" fill="${m.color || '#ef4444'}" font-weight="bold">${m.label}</text>`;
    }
  }
  for (const lb of labels) {
    body += `<text x="${lb.x}" y="${lb.y}" font-size="11" fill="#6366f1" font-weight="bold">${lb.text}</text>`;
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" style="${SVG_STYLE}">${body}</svg>`;
}

// ── Questions ───────────────────────────────────────────────────────────────

const ITEMS = [];

// —— Evaluate piecewise (seed 22) ——
ITEMS.push(
  mc({
    id: 'y11a-5-22a',
    difficulty: 'medium',
    t: 'Piecewise Functions',
    q: 'A piecewise function is defined by \\(f(x) = 2x + 1\\) for \\(x < 0\\) and \\(f(x) = x^2\\) for \\(x \\ge 0\\). Evaluate \\(f(-3)\\).',
    correct: '\\(-5\\)',
    distractors: ['\\(9\\)', '\\(7\\)', '\\(-8\\)'],
    a: nextA(),
    solutionSteps: [
      step('Since \\(-3 < 0\\), use the left branch \\(f(x) = 2x + 1\\).', '\\(-3 < 0 \\implies \\text{use } 2x + 1\\)'),
      step('Substitute: \\(f(-3) = 2(-3) + 1 = -6 + 1\\).', '\\(f(-3) = -6 + 1\\)'),
      step('So \\(f(-3) = -5\\). A common error is using the right branch \\(x^2\\) and getting \\(9\\).', '\\(f(-3) = -5\\)'),
    ],
  }),
  mc({
    id: 'y11a-5-22b',
    difficulty: 'medium',
    t: 'Piecewise Functions',
    q: 'A piecewise function is defined by \\(f(x) = 2x + 1\\) for \\(x < 0\\) and \\(f(x) = x^2\\) for \\(x \\ge 0\\). Evaluate \\(f(4)\\).',
    correct: '\\(16\\)',
    distractors: ['\\(9\\)', '\\(17\\)', '\\(8\\)'],
    a: nextA(),
    solutionSteps: [
      step('Since \\(4 \\ge 0\\), use the right branch \\(f(x) = x^2\\).', '\\(4 \\ge 0 \\implies \\text{use } x^2\\)'),
      step('Substitute: \\(f(4) = 4^2 = 16\\).', '\\(f(4) = 16\\)'),
      step('So \\(f(4) = 16\\). Using the left branch would incorrectly give \\(2(4)+1 = 9\\).', '\\(f(4) = 16\\)'),
    ],
  }),
  mc({
    id: 'y11a-5-23a',
    difficulty: 'hard',
    t: 'Piecewise Functions',
    q: 'Let \\(f(x) = x + 3\\) for \\(x < 2\\), and \\(f(x) = kx^2\\) for \\(x \\ge 2\\). Find the value of \\(k\\) that makes \\(f\\) continuous at \\(x = 2\\).',
    correct: '\\(k = \\dfrac{5}{4}\\)',
    distractors: ['\\(k = 5\\)', '\\(k = 1\\)', '\\(k = \\dfrac{4}{5}\\)'],
    a: nextA(),
    solutionSteps: [
      step('Left limit: \\(\\lim_{x \\to 2^-} (x + 3) = 2 + 3 = 5\\).', '\\(f(2^-) = 5\\)'),
      step('Right value (and limit): \\(f(2) = k(2)^2 = 4k\\).', '\\(f(2) = 4k\\)'),
      step('Continuity requires \\(4k = 5\\), so \\(k = \\dfrac{5}{4}\\).', '\\(k = \\dfrac{5}{4}\\)'),
    ],
  }),
  mc({
    id: 'y11a-5-23b',
    difficulty: 'hard',
    t: 'Piecewise Functions',
    q: 'Let \\(f(x) = -x + 6\\) for \\(x < 3\\), and \\(f(x) = kx + 1\\) for \\(x \\ge 3\\). Find the value of \\(k\\) that makes \\(f\\) continuous at \\(x = 3\\).',
    correct: '\\(k = \\dfrac{2}{3}\\)',
    distractors: ['\\(k = 1\\)', '\\(k = \\dfrac{4}{3}\\)', '\\(k = 3\\)'],
    a: nextA(),
    solutionSteps: [
      step('Left limit: \\(\\lim_{x \\to 3^-} (-x + 6) = -3 + 6 = 3\\).', '\\(f(3^-) = 3\\)'),
      step('Right value: \\(f(3) = 3k + 1\\).', '\\(f(3) = 3k + 1\\)'),
      step('Set equal: \\(3k + 1 = 3 \\implies 3k = 2 \\implies k = \\dfrac{2}{3}\\).', '\\(k = \\dfrac{2}{3}\\)'),
    ],
  })
);

// —— Zeroes & discontinuities (1a–c, 5a–c) ——
const zeroDisc = [
  {
    id: 'y11a-5h-1a',
    difficulty: 'easy',
    q: 'State the zeroes and discontinuities of \\(g(t) = \\dfrac{7}{8 - t}\\).',
    correct: 'Zeroes: none; discontinuities: \\(t = 8\\)',
    distractors: [
      'Zeroes: \\(t = 7\\); discontinuities: \\(t = 8\\)',
      'Zeroes: \\(t = 8\\); discontinuities: none',
      'Zeroes: none; discontinuities: \\(t = -8\\)',
    ],
    steps: [
      step('Zeroes come from numerator \\(= 0\\). Here numerator is the constant \\(7\\), which is never zero.', '\\(7 \\neq 0 \\implies \\text{no zeroes}\\)'),
      step('Discontinuities come from denominator \\(= 0\\): \\(8 - t = 0\\).', '\\(t = 8\\)'),
      step('So there are no zeroes, and a single discontinuity at \\(t = 8\\).', '\\(\\text{disc. at } t = 8\\)'),
    ],
  },
  {
    id: 'y11a-5h-1b',
    difficulty: 'easy',
    q: 'State the zeroes and discontinuities of \\(h(y) = \\dfrac{4y}{(y - 2)(y - 4)(y - 6)}\\).',
    correct: 'Zeroes: \\(y = 0\\); discontinuities: \\(y = 2, 4, 6\\)',
    distractors: [
      'Zeroes: \\(y = 2, 4, 6\\); discontinuities: \\(y = 0\\)',
      'Zeroes: none; discontinuities: \\(y = 2, 4, 6\\)',
      'Zeroes: \\(y = 0\\); discontinuities: \\(y = -2, -4, -6\\)',
    ],
    steps: [
      step('Numerator zero: \\(4y = 0 \\implies y = 0\\) (and it is not cancelled by the denominator).', '\\(y = 0\\)'),
      step('Denominator zero: \\(y = 2\\), \\(y = 4\\), \\(y = 6\\).', '\\(y = 2, 4, 6\\)'),
      step('Zero at \\(y = 0\\); discontinuities at \\(y = 2, 4, 6\\).', '\\(\\text{zero } 0;\\; \\text{disc. } 2,4,6\\)'),
    ],
  },
  {
    id: 'y11a-5h-1c',
    difficulty: 'easy',
    q: 'State the zeroes and discontinuities of \\(p(m) = \\dfrac{m(m + 2)}{(m + 1)(m + 4)}\\).',
    correct: 'Zeroes: \\(m = 0, -2\\); discontinuities: \\(m = -1, -4\\)',
    distractors: [
      'Zeroes: \\(m = -1, -4\\); discontinuities: \\(m = 0, -2\\)',
      'Zeroes: \\(m = 0, 2\\); discontinuities: \\(m = 1, 4\\)',
      'Zeroes: \\(m = 0, -2\\); discontinuities: none',
    ],
    steps: [
      step('Numerator: \\(m(m + 2) = 0 \\implies m = 0\\) or \\(m = -2\\).', '\\(m = 0, -2\\)'),
      step('Denominator: \\((m + 1)(m + 4) = 0 \\implies m = -1\\) or \\(m = -4\\).', '\\(m = -1, -4\\)'),
      step('Neither zero cancels a factor of the denominator, so both are genuine zeroes.', '\\(\\text{zeroes } 0,-2;\\; \\text{disc. } -1,-4\\)'),
    ],
  },
  {
    id: 'y11a-5h-5a',
    difficulty: 'medium',
    q: 'Factor, then state zeroes and discontinuities of \\(f(w) = \\dfrac{1}{w^2 - 6w}\\).',
    correct: 'Zeroes: none; discontinuities: \\(w = 0, 6\\)',
    distractors: [
      'Zeroes: \\(w = 6\\); discontinuities: \\(w = 0\\)',
      'Zeroes: \\(w = 0, 6\\); discontinuities: none',
      'Zeroes: none; discontinuities: \\(w = 6\\)',
    ],
    steps: [
      step('Numerator is \\(1\\): never zero.', '\\(\\text{no zeroes}\\)'),
      step('Factor denominator: \\(w^2 - 6w = w(w - 6)\\).', '\\(w(w - 6)\\)'),
      step('Discontinuities where denominator is zero: \\(w = 0\\) and \\(w = 6\\).', '\\(w = 0, 6\\)'),
    ],
  },
  {
    id: 'y11a-5h-5b',
    difficulty: 'medium',
    q: 'Factor, then state zeroes and discontinuities of \\(f(w) = \\dfrac{w}{w^2 - 7w + 10}\\).',
    correct: 'Zeroes: \\(w = 0\\); discontinuities: \\(w = 2, 5\\)',
    distractors: [
      'Zeroes: \\(w = 2, 5\\); discontinuities: \\(w = 0\\)',
      'Zeroes: \\(w = 0\\); discontinuities: \\(w = -2, -5\\)',
      'Zeroes: none; discontinuities: \\(w = 0, 2, 5\\)',
    ],
    steps: [
      step('Numerator zero: \\(w = 0\\).', '\\(w = 0\\)'),
      step('Factor: \\(w^2 - 7w + 10 = (w - 2)(w - 5)\\).', '\\((w - 2)(w - 5)\\)'),
      step('Discontinuities at \\(w = 2\\) and \\(w = 5\\) (\\(w = 0\\) is a zero, not a hole).', '\\(w = 2, 5\\)'),
    ],
  },
  {
    id: 'y11a-5h-5c',
    difficulty: 'medium',
    q: 'Factor, then state zeroes and discontinuities of \\(f(w) = \\dfrac{w^2 - 25}{w^2 - 4}\\).',
    correct: 'Zeroes: \\(w = 5, -5\\); discontinuities: \\(w = 2, -2\\)',
    distractors: [
      'Zeroes: \\(w = 2, -2\\); discontinuities: \\(w = 5, -5\\)',
      'Zeroes: \\(w = 25\\); discontinuities: \\(w = 4\\)',
      'Zeroes: \\(w = -5, 5\\); discontinuities: none',
    ],
    steps: [
      step('Numerator: \\(w^2 - 25 = (w - 5)(w + 5)\\).', '\\(w = \\pm 5\\)'),
      step('Denominator: \\(w^2 - 4 = (w - 2)(w + 2)\\).', '\\(w = \\pm 2\\)'),
      step('Zeroes at \\(\\pm 5\\); discontinuities at \\(\\pm 2\\) (no common factors).', '\\(\\text{zeroes } \\pm5;\\; \\text{disc. } \\pm2\\)'),
    ],
  },
];
for (const item of zeroDisc) {
  ITEMS.push(
    mc({
      id: item.id,
      difficulty: item.difficulty,
      q: item.q,
      correct: item.correct,
      distractors: item.distractors,
      a: nextA(),
      solutionSteps: item.steps,
    })
  );
}

// —— Continuous + parity (4a–d) ——
const parity = [
  {
    id: 'y11a-5h-4a',
    q: 'For \\(g(z) = \\begin{cases} z^2 + 3z & z < 0 \\\\ z^2 - 3z & z \\ge 0 \\end{cases}\\), which is correct?',
    correct: 'Continuous at \\(z = 0\\); even function',
    distractors: [
      'Continuous at \\(z = 0\\); odd function',
      'Discontinuous at \\(z = 0\\); neither',
      'Continuous at \\(z = 0\\); neither',
    ],
    steps: [
      step('Both one-sided limits at \\(0\\) equal \\(0\\), and \\(g(0) = 0\\), so continuous at \\(z = 0\\).', '\\(g(0^-) = g(0^+) = g(0) = 0\\)'),
      step('For \\(z > 0\\), \\(-z < 0\\), so \\(g(-z) = (-z)^2 + 3(-z) = z^2 - 3z = g(z)\\).', '\\(g(-z) = g(z)\\)'),
      step('Hence \\(g\\) is even (and continuous at \\(0\\)).', '\\(\\text{continuous; even}\\)'),
    ],
  },
  {
    id: 'y11a-5h-4b',
    q: 'For \\(h(z) = \\begin{cases} -2 - \\sqrt{-z} & z < 0 \\\\ 0 & z = 0 \\\\ 2 + \\sqrt{z} & z > 0 \\end{cases}\\), which is correct?',
    correct: 'Discontinuous at \\(z = 0\\); odd function',
    distractors: [
      'Continuous at \\(z = 0\\); odd function',
      'Discontinuous at \\(z = 0\\); even function',
      'Continuous at \\(z = 0\\); neither',
    ],
    steps: [
      step('Left limit \\(-2\\), right limit \\(2\\), value \\(0\\): not continuous at \\(0\\).', '\\(h(0^-) = -2,\\; h(0^+) = 2\\)'),
      step('For \\(z > 0\\), \\(h(-z) = -2 - \\sqrt{z} = -(2 + \\sqrt{z}) = -h(z)\\).', '\\(h(-z) = -h(z)\\)'),
      step('The function is odd but discontinuous at the origin.', '\\(\\text{discontinuous; odd}\\)'),
    ],
  },
  {
    id: 'y11a-5h-4c',
    q: 'For \\(p(z) = \\begin{cases} 1 - z & z < 0 \\\\ z - 1 & z \\ge 0 \\end{cases}\\), which is correct?',
    correct: 'Discontinuous at \\(z = 0\\); neither even nor odd',
    distractors: [
      'Continuous at \\(z = 0\\); neither even nor odd',
      'Discontinuous at \\(z = 0\\); odd function',
      'Continuous at \\(z = 0\\); even function',
    ],
    steps: [
      step('Left limit is \\(1\\), right limit is \\(-1\\): discontinuous at \\(0\\).', '\\(p(0^-) = 1 \\neq -1 = p(0^+)\\)'),
      step('Check: \\(p(1) = 0\\), \\(p(-1) = 2\\). Neither \\(p(-1) = p(1)\\) nor \\(p(-1) = -p(1)\\).', '\\(p(-1) = 2,\\; p(1) = 0\\)'),
      step('So discontinuous and neither even nor odd.', '\\(\\text{discontinuous; neither}\\)'),
    ],
  },
  {
    id: 'y11a-5h-4d',
    q: 'For \\(q(z) = \\begin{cases} z^2 + 4z & z < 0 \\\\ 0 & z = 0 \\\\ 4z - z^2 & z > 0 \\end{cases}\\), which is correct?',
    correct: 'Continuous at \\(z = 0\\); odd function',
    distractors: [
      'Discontinuous at \\(z = 0\\); odd function',
      'Continuous at \\(z = 0\\); even function',
      'Continuous at \\(z = 0\\); neither',
    ],
    steps: [
      step('Both one-sided limits are \\(0\\) and \\(q(0) = 0\\): continuous at \\(0\\).', '\\(q(0^-) = q(0^+) = q(0) = 0\\)'),
      step('For \\(z > 0\\): \\(q(-z) = (-z)^2 + 4(-z) = z^2 - 4z = -(4z - z^2) = -q(z)\\).', '\\(q(-z) = -q(z)\\)'),
      step('Hence continuous at \\(0\\) and odd.', '\\(\\text{continuous; odd}\\)'),
    ],
  },
];
for (const item of parity) {
  ITEMS.push(
    mc({
      id: item.id,
      difficulty: 'easy',
      q: item.q,
      correct: item.correct,
      distractors: item.distractors,
      a: nextA(),
      solutionSteps: item.steps,
    })
  );
}

// —— Continuity parameter b (12a/b SA → MCQ) ——
ITEMS.push(
  mc({
    id: 'y11a-5h-12a',
    difficulty: 'medium',
    q: 'Find the constant \\(b\\) that makes \\(f\\) continuous:\n\\(f(n) = \\begin{cases} b n^2 & n \\le 2 \\\\ 10 - n & n > 2 \\end{cases}\\)',
    correct: '\\(b = 2\\)',
    distractors: ['\\(b = 4\\)', '\\(b = 8\\)', '\\(b = \\dfrac{1}{2}\\)'],
    a: nextA(),
    solutionSteps: [
      step('Left limit at \\(2\\): \\(\\lim_{n \\to 2^-} b n^2 = 4b\\).', '\\(4b\\)'),
      step('Right limit: \\(\\lim_{n \\to 2^+} (10 - n) = 8\\).', '\\(8\\)'),
      step('Continuity: \\(4b = 8 \\implies b = 2\\).', '\\(b = 2\\)'),
    ],
  }),
  mc({
    id: 'y11a-5h-12b',
    difficulty: 'medium',
    q: 'Find the constant \\(b\\) that makes \\(g\\) continuous:\n\\(g(n) = \\begin{cases} \\dfrac{b(n^2 - 16)}{n + 4} & n \\neq -4 \\\\ 16 & n = -4 \\end{cases}\\)',
    correct: '\\(b = -2\\)',
    distractors: ['\\(b = 2\\)', '\\(b = -\\dfrac{1}{2}\\)', '\\(b = 16\\)'],
    a: nextA(),
    solutionSteps: [
      step('For \\(n \\neq -4\\), cancel: \\(\\dfrac{b(n - 4)(n + 4)}{n + 4} = b(n - 4)\\).', '\\(b(n - 4)\\)'),
      step('Limit as \\(n \\to -4\\): \\(b(-4 - 4) = -8b\\).', '\\(-8b\\)'),
      step('Match the defined value: \\(-8b = 16 \\implies b = -2\\).', '\\(b = -2\\)'),
    ],
  })
);

// —— Piecewise continuity MCQ from multiparts 2,3 ——
ITEMS.push(
  mc({
    id: 'y11a-5h-2a',
    difficulty: 'easy',
    q: 'Let \\(g(u) = \\begin{cases} 2 - u & u < 0 \\\\ 2 + u^2 & u \\ge 0 \\end{cases}\\). What is \\(g(0)\\)?',
    correct: '\\(2\\)',
    distractors: ['\\(0\\)', '\\(4\\)', '\\(1\\)'],
    a: nextA(),
    solutionSteps: [
      step('At \\(u = 0\\) the right branch applies: \\(g(0) = 2 + 0^2\\).', '\\(g(0) = 2 + 0^2\\)'),
      step('So \\(g(0) = 2\\).', '\\(g(0) = 2\\)'),
      step('The left branch formula at \\(0\\) also gives \\(2 - 0 = 2\\), matching the function value.', '\\(2 - 0 = 2\\)'),
    ],
  }),
  mc({
    id: 'y11a-5h-2b',
    difficulty: 'easy',
    q: 'Let \\(g(u) = \\begin{cases} 2 - u & u < 0 \\\\ 2 + u^2 & u \\ge 0 \\end{cases}\\). Is \\(g\\) continuous at \\(u = 0\\)?',
    correct: 'Yes — both one-sided limits equal \\(g(0) = 2\\)',
    distractors: [
      'No — left limit is \\(2\\) but right limit is \\(0\\)',
      'No — left limit is \\(0\\) but right limit is \\(2\\)',
      'Yes — but only because \\(g\\) is a polynomial',
    ],
    a: nextA(),
    solutionSteps: [
      step('Left: \\(\\lim_{u \\to 0^-} (2 - u) = 2\\).', '\\(2\\)'),
      step('Right: \\(\\lim_{u \\to 0^+} (2 + u^2) = 2\\), and \\(g(0) = 2\\).', '\\(2\\)'),
      step('Limits and value agree, so continuous at \\(u = 0\\).', '\\(\\text{continuous}\\)'),
    ],
  }),
  mc({
    id: 'y11a-5h-2c',
    difficulty: 'easy',
    q: 'Let \\(g(u) = \\begin{cases} 2 - u & u < 0 \\\\ 2 + u^2 & u \\ge 0 \\end{cases}\\). What are the domain and range of \\(g\\)?',
    correct: 'Domain: all real \\(u\\); range: \\(y \\ge 2\\)',
    distractors: [
      'Domain: \\(u \\ge 0\\); range: \\(y \\ge 2\\)',
      'Domain: all real \\(u\\); range: all real \\(y\\)',
      'Domain: all real \\(u\\); range: \\(y \\le 2\\)',
    ],
    a: nextA(),
    solutionSteps: [
      step('Both pieces are defined for their half-lines and meet at \\(0\\), so domain is \\(\\mathbb{R}\\).', '\\(\\text{domain } \\mathbb{R}\\)'),
      step('Left piece is a line with values \\(> 2\\) for \\(u < 0\\); right piece is a parabola opening up with minimum \\(2\\).', '\\(y \\ge 2\\)'),
      step('Hence domain \\(\\mathbb{R}\\) and range \\(y \\ge 2\\).', '\\(D = \\mathbb{R},\\; R = [2, \\infty)\\)'),
    ],
  }),
  mc({
    id: 'y11a-5h-3a',
    difficulty: 'easy',
    q: 'Let \\(h(v) = \\begin{cases} 3 - v & v \\le 2 \\\\ v - 1 & v > 2 \\end{cases}\\). What is \\(h(2)\\)?',
    correct: '\\(1\\)',
    distractors: ['\\(2\\)', '\\(3\\)', '\\(0\\)'],
    a: nextA(),
    solutionSteps: [
      step('At \\(v = 2\\) the left branch applies: \\(h(2) = 3 - 2\\).', '\\(h(2) = 3 - 2\\)'),
      step('So \\(h(2) = 1\\).', '\\(h(2) = 1\\)'),
      step('The right formula at \\(2\\) also gives \\(2 - 1 = 1\\).', '\\(2 - 1 = 1\\)'),
    ],
  }),
  mc({
    id: 'y11a-5h-3b',
    difficulty: 'easy',
    q: 'Let \\(h(v) = \\begin{cases} 3 - v & v \\le 2 \\\\ v - 1 & v > 2 \\end{cases}\\). Is \\(h\\) continuous at \\(v = 2\\)?',
    correct: 'Yes — both one-sided limits equal \\(h(2) = 1\\)',
    distractors: [
      'No — left limit is \\(1\\) but right limit is \\(3\\)',
      'No — the two pieces have different gradients',
      'Yes — only from the left',
    ],
    a: nextA(),
    solutionSteps: [
      step('Left limit: \\(\\lim_{v \\to 2^-} (3 - v) = 1\\).', '\\(1\\)'),
      step('Right limit: \\(\\lim_{v \\to 2^+} (v - 1) = 1\\), and \\(h(2) = 1\\).', '\\(1\\)'),
      step('Continuous at \\(v = 2\\) (V-shape minimum at \\((2, 1)\\)).', '\\(\\text{continuous}\\)'),
    ],
  }),
  mc({
    id: 'y11a-5h-3c',
    difficulty: 'easy',
    q: 'Let \\(h(v) = \\begin{cases} 3 - v & v \\le 2 \\\\ v - 1 & v > 2 \\end{cases}\\). Domain and range?',
    correct: 'Domain: all real \\(v\\); range: \\(y \\ge 1\\)',
    distractors: [
      'Domain: \\(v \\ge 2\\); range: \\(y \\ge 1\\)',
      'Domain: all real \\(v\\); range: all real \\(y\\)',
      'Domain: all real \\(v\\); range: \\(y \\le 1\\)',
    ],
    a: nextA(),
    solutionSteps: [
      step('Both pieces cover \\(\\mathbb{R}\\) between them, so domain is all real \\(v\\).', '\\(D = \\mathbb{R}\\)'),
      step('The graph is V-shaped with minimum value \\(1\\) at \\(v = 2\\).', '\\(y \\ge 1\\)'),
      step('Domain \\(\\mathbb{R}\\), range \\(y \\ge 1\\).', '\\(D = \\mathbb{R},\\; R = [1, \\infty)\\)'),
    ],
  })
);

// —— y = |2x|/x ——
ITEMS.push(
  mc({
    id: 'y11a-5h-6a',
    difficulty: 'medium',
    q: 'Consider \\(y = \\dfrac{|2x|}{x}\\). Which statement about continuity at \\(x = 0\\) is correct?',
    correct: 'Discontinuous at \\(x = 0\\) (undefined there; left limit \\(-2\\), right limit \\(2\\))',
    distractors: [
      'Continuous at \\(x = 0\\) with value \\(0\\)',
      'Continuous at \\(x = 0\\) with value \\(2\\)',
      'Discontinuous only from the right',
    ],
    a: nextA(),
    solutionSteps: [
      step('For \\(x > 0\\): \\(y = \\dfrac{2x}{x} = 2\\). For \\(x < 0\\): \\(y = \\dfrac{-2x}{x} = -2\\).', '\\(y = 2\\ (x>0),\\; y = -2\\ (x<0)\\)'),
      step('The expression is undefined at \\(x = 0\\).', '\\(x = 0\\text{ undefined}\\)'),
      step('One-sided limits differ (\\(-2\\) vs \\(2\\)), so discontinuous at \\(0\\).', '\\(\\text{discontinuous}\\)'),
    ],
  }),
  mc({
    id: 'y11a-5h-6b',
    difficulty: 'medium',
    q: 'For \\(y = \\dfrac{|2x|}{x}\\), what are the domain and range?',
    correct: 'Domain: \\(x \\neq 0\\); range: \\(\\{-2, 2\\}\\)',
    distractors: [
      'Domain: all real \\(x\\); range: \\(\\{-2, 2\\}\\)',
      'Domain: \\(x \\neq 0\\); range: all real \\(y\\)',
      'Domain: \\(x > 0\\); range: \\(\\{2\\}\\)',
    ],
    a: nextA(),
    solutionSteps: [
      step('Division by \\(x\\) forbids \\(x = 0\\).', '\\(x \\neq 0\\)'),
      step('The only values attained are \\(2\\) (\\(x > 0\\)) and \\(-2\\) (\\(x < 0\\)).', '\\(y \\in \\{-2, 2\\}\\)'),
      step('Domain \\(x \\neq 0\\); range \\(\\{-2, 2\\}\\).', '\\(D = \\mathbb{R}\\setminus\\{0\\},\\; R = \\{-2,2\\}\\)'),
    ],
  })
);

// —— Continuity at x=3 (7a–d) ——
const cont7 = [
  {
    id: 'y11a-5h-7a',
    q: 'Is \\(f(x) = \\begin{cases} x^2 & x \\le 3 \\\\ 12 - x & x > 3 \\end{cases}\\) continuous at \\(x = 3\\)? Domain and range?',
    correct: 'Continuous; domain \\(\\mathbb{R}\\); range \\(y \\ge 0\\)',
    distractors: [
      'Discontinuous; domain \\(\\mathbb{R}\\); range \\(y \\ge 0\\)',
      'Continuous; domain \\(x \\le 3\\); range \\(y \\ge 0\\)',
      'Continuous; domain \\(\\mathbb{R}\\); range \\(y \\le 9\\)',
    ],
    steps: [
      step('Left: \\(3^2 = 9\\). Right: \\(12 - 3 = 9\\). Value \\(f(3) = 9\\).', '\\(9 = 9 = 9\\)'),
      step('Continuous on all of \\(\\mathbb{R}\\) (pieces join smoothly in value).', '\\(D = \\mathbb{R}\\)'),
      step('Parabola piece gives \\(y \\ge 0\\) for \\(x \\le 3\\); line continues from \\(9\\) downward but stays non-negative until \\(x = 12\\); overall range is \\(y \\ge 0\\).', '\\(R = [0, \\infty)\\)'),
    ],
  },
  {
    id: 'y11a-5h-7b',
    q: 'Is \\(f(x) = \\begin{cases} 2^x & x < 3 \\\\ 8 & x = 3 \\\\ 17 - x^2 & x > 3 \\end{cases}\\) continuous at \\(x = 3\\)? Domain and range?',
    correct: 'Continuous; domain \\(\\mathbb{R}\\); range \\(y \\le 8\\)',
    distractors: [
      'Discontinuous; domain \\(\\mathbb{R}\\); range \\(y \\le 8\\)',
      'Continuous; domain \\(x \\ge 3\\); range \\(y \\le 8\\)',
      'Continuous; domain \\(\\mathbb{R}\\); range \\(y \\ge 8\\)',
    ],
    steps: [
      step('Left: \\(2^3 = 8\\). Right: \\(17 - 9 = 8\\). Value \\(f(3) = 8\\).', '\\(8 = 8 = 8\\)'),
      step('Continuous at \\(3\\); domain is all real \\(x\\).', '\\(D = \\mathbb{R}\\)'),
      step('Maximum value is \\(8\\) at the join; range is \\(y \\le 8\\).', '\\(R = (-\\infty, 8]\\)'),
    ],
  },
  {
    id: 'y11a-5h-7c',
    q: 'Is \\(f(x) = \\begin{cases} \\dfrac{2}{x} & 0 < x < 3 \\\\ \\dfrac{2}{3} & x = 3 \\\\ 1 - \\dfrac{x}{9} & x > 3 \\end{cases}\\) continuous at \\(x = 3\\)? Domain and range?',
    correct: 'Continuous; domain \\(x > 0\\); range all real \\(y\\)',
    distractors: [
      'Discontinuous; domain \\(x > 0\\); range all real \\(y\\)',
      'Continuous; domain all real \\(x\\); range all real \\(y\\)',
      'Continuous; domain \\(x > 0\\); range \\(y > 0\\)',
    ],
    steps: [
      step('Left: \\(\\dfrac{2}{3}\\). Right: \\(1 - \\dfrac{3}{9} = \\dfrac{2}{3}\\). Value \\(\\dfrac{2}{3}\\).', '\\(\\dfrac{2}{3}\\)'),
      step('Continuous at \\(3\\). Domain requires \\(x > 0\\) (left piece).', '\\(D = (0, \\infty)\\)'),
      step('As \\(x \\to 0^+\\), \\(y \\to +\\infty\\); as \\(x \\to \\infty\\), line \\(\\to -\\infty\\); range is \\(\\mathbb{R}\\).', '\\(R = \\mathbb{R}\\)'),
    ],
  },
  {
    id: 'y11a-5h-7d',
    q: 'Is \\(f(x) = \\begin{cases} x - 1 & x < 3 \\\\ 2 & x = 3 \\\\ 5 - x & x > 3 \\end{cases}\\) continuous at \\(x = 3\\)? Domain and range?',
    correct: 'Continuous; domain \\(\\mathbb{R}\\); range \\(y \\le 2\\)',
    distractors: [
      'Discontinuous; domain \\(\\mathbb{R}\\); range \\(y \\le 2\\)',
      'Continuous; domain \\(\\mathbb{R}\\); range \\(y \\ge 2\\)',
      'Continuous; domain \\(x \\neq 3\\); range \\(y \\le 2\\)',
    ],
    steps: [
      step('Left: \\(3 - 1 = 2\\). Right: \\(5 - 3 = 2\\). Value \\(2\\).', '\\(2 = 2 = 2\\)'),
      step('Continuous at \\(3\\); domain is all real \\(x\\).', '\\(D = \\mathbb{R}\\)'),
      step('Peak value is \\(2\\) at the join; range \\(y \\le 2\\).', '\\(R = (-\\infty, 2]\\)'),
    ],
  },
];
for (const item of cont7) {
  ITEMS.push(
    mc({
      id: item.id,
      difficulty: 'medium',
      q: item.q,
      correct: item.correct,
      distractors: item.distractors,
      a: nextA(),
      solutionSteps: item.steps,
    })
  );
}

// —— 8, 9 continuity + parity ——
ITEMS.push(
  mc({
    id: 'y11a-5h-8a',
    difficulty: 'medium',
    q: 'Let \\(g(t) = \\begin{cases} t + 4 & t < -2 \\\\ -t & -2 \\le t \\le 2 \\\\ t - 4 & t > 2 \\end{cases}\\). Which is correct?',
    correct: 'Continuous at \\(t = \\pm 2\\); odd function',
    distractors: [
      'Discontinuous at \\(t = 2\\); odd function',
      'Continuous at \\(t = \\pm 2\\); even function',
      'Continuous only at \\(t = -2\\); neither',
    ],
    a: nextA(),
    solutionSteps: [
      step('At \\(t = -2\\): left \\(2\\), right \\(2\\), value \\(2\\). At \\(t = 2\\): left \\(-2\\), right \\(-2\\), value \\(-2\\).', '\\(\\text{cont. at } \\pm 2\\)'),
      step('Check branches: for example if \\(t > 2\\) then \\(-t < -2\\), so \\(g(-t) = -t + 4 = -(t - 4) = -g(t)\\).', '\\(g(-t) = -g(t)\\)'),
      step('Continuous at both joins and odd (rotational symmetry about origin).', '\\(\\text{cont.; odd}\\)'),
    ],
  }),
  mc({
    id: 'y11a-5h-9a',
    difficulty: 'medium',
    q: 'Let \\(h(v) = \\begin{cases} -3v - 2 & v < -1 \\\\ 2v^2 - 1 & -1 \\le v \\le 1 \\\\ 3v - 2 & v > 1 \\end{cases}\\). Which is correct?',
    correct: 'Continuous at \\(v = \\pm 1\\); even function',
    distractors: [
      'Discontinuous at \\(v = 1\\); even function',
      'Continuous at \\(v = \\pm 1\\); odd function',
      'Continuous at \\(v = \\pm 1\\); neither',
    ],
    a: nextA(),
    solutionSteps: [
      step('At \\(v = -1\\) and \\(v = 1\\), one-sided limits and values all equal \\(1\\).', '\\(\\text{cont. at } \\pm 1\\)'),
      step('Outer branches: \\(h(-v)\\) for \\(v > 1\\) uses left formula giving \\(3v - 2 = h(v)\\); middle is even in \\(v\\).', '\\(h(-v) = h(v)\\)'),
      step('Continuous at both joins and even (mirror symmetry in the \\(y\\)-axis).', '\\(\\text{cont.; even}\\)'),
    ],
  }),
  mc({
    id: 'y11a-5h-10a',
    difficulty: 'medium',
    q: 'Is \\(p(m) = \\begin{cases} m - m^3 & m < 0 \\\\ m^3 - m & m \\ge 0 \\end{cases}\\) odd, even, or neither?',
    correct: 'Odd',
    distractors: ['Even', 'Neither', 'Odd for \\(m > 0\\) only'],
    a: nextA(),
    solutionSteps: [
      step('For \\(m > 0\\), \\(-m < 0\\), so \\(p(-m) = (-m) - (-m)^3 = -m + m^3\\).', '\\(p(-m) = -m + m^3\\)'),
      step('And \\(-p(m) = -(m^3 - m) = -m + m^3\\).', '\\(-p(m) = -m + m^3\\)'),
      step('So \\(p(-m) = -p(m)\\): odd. (Graph is rotationally symmetric about origin.)', '\\(\\text{odd}\\)'),
    ],
  }),
  mc({
    id: 'y11a-5h-10b',
    difficulty: 'medium',
    q: 'Is \\(q(m) = \\begin{cases} m^2 + 2 & m < 0 \\\\ m^2 - 2 & m \\ge 0 \\end{cases}\\) odd, even, or neither?',
    correct: 'Neither',
    distractors: ['Odd', 'Even', 'Odd and discontinuous'],
    a: nextA(),
    solutionSteps: [
      step('Evaluate: \\(q(1) = 1 - 2 = -1\\).', '\\(q(1) = -1\\)'),
      step('And \\(q(-1) = 1 + 2 = 3\\).', '\\(q(-1) = 3\\)'),
      step('Neither \\(q(-1) = q(1)\\) nor \\(q(-1) = -q(1)\\), so neither even nor odd.', '\\(\\text{neither}\\)'),
    ],
  })
);

// —— Cancel algebraic fractions (11a–d) ——
const cancel = [
  {
    id: 'y11a-5h-11a',
    q: 'Cancel \\(y = \\dfrac{k^2 + 4k + 4}{k + 2}\\). Which description is correct?',
    correct: 'Simplifies to \\(y = k + 2\\) with a hole at \\((-2, 0)\\); domain \\(k \\neq -2\\); range \\(y \\neq 0\\)',
    distractors: [
      'Simplifies to \\(y = k + 2\\) with no hole; domain all real \\(k\\)',
      'Simplifies to \\(y = k + 2\\); domain \\(k \\neq -2\\); range all real \\(y\\)',
      'Undefined only at \\(k = 2\\); simplifies to \\(y = k - 2\\)',
    ],
    steps: [
      step('Undefined when denominator is zero: \\(k + 2 = 0 \\implies k = -2\\).', '\\(k = -2\\)'),
      step('Numerator \\((k + 2)^2\\), so for \\(k \\neq -2\\): \\(y = k + 2\\).', '\\(y = k + 2\\)'),
      step('Hole at \\((-2, 0)\\); domain \\(k \\neq -2\\); range misses \\(0\\).', '\\(D:\\, k\\neq-2;\\; R:\\, y\\neq 0\\)'),
    ],
  },
  {
    id: 'y11a-5h-11b',
    q: 'Cancel \\(y = \\dfrac{k^4 - 4k^2}{k^2 - 4}\\). Which description is correct?',
    correct: 'Simplifies to \\(y = k^2\\) with holes at \\((\\pm 2, 4)\\); domain \\(k \\neq \\pm 2\\); range \\(y \\ge 0,\\, y \\neq 4\\)',
    distractors: [
      'Simplifies to \\(y = k^2\\) with no holes; domain all real \\(k\\)',
      'Simplifies to \\(y = k^2 - 4\\); domain \\(k \\neq \\pm 2\\)',
      'Simplifies to \\(y = k^2\\); domain \\(k \\neq \\pm 2\\); range \\(y \\ge 0\\) including \\(4\\)',
    ],
    steps: [
      step('Denominator zero: \\(k = \\pm 2\\).', '\\(k = \\pm 2\\)'),
      step('Numerator \\(k^2(k^2 - 4)\\), cancel: \\(y = k^2\\) for \\(k \\neq \\pm 2\\).', '\\(y = k^2\\)'),
      step('Holes at \\((\\pm 2, 4)\\); range is \\(y \\ge 0\\) excluding \\(4\\).', '\\(y \\ge 0,\\, y \\neq 4\\)'),
    ],
  },
  {
    id: 'y11a-5h-11c',
    q: 'Cancel \\(y = \\dfrac{k - 4}{k^2 - 6k + 8}\\). Which description is correct?',
    correct: 'Simplifies to \\(y = \\dfrac{1}{k - 2}\\) (\\(k \\neq 4\\)); domain \\(k \\neq 2, 4\\); vertical asymptote \\(k = 2\\); hole at \\(k = 4\\)',
    distractors: [
      'Simplifies to \\(y = \\dfrac{1}{k - 4}\\); asymptote at \\(k = 4\\)',
      'Simplifies to \\(y = k - 2\\); domain \\(k \\neq 2, 4\\)',
      'No cancellation; discontinuities only at \\(k = 2\\)',
    ],
    steps: [
      step('Factor denominator: \\((k - 4)(k - 2)\\).', '\\((k-4)(k-2)\\)'),
      step('Cancel \\(k - 4\\) (\\(k \\neq 4\\)): \\(y = \\dfrac{1}{k - 2}\\).', '\\(y = \\dfrac{1}{k-2}\\)'),
      step('Asymptote at \\(k = 2\\); hole at \\(k = 4\\) where cancelled factor was zero.', '\\(k \\neq 2, 4\\)'),
    ],
  },
  {
    id: 'y11a-5h-11d',
    q: 'Cancel \\(y = \\dfrac{5k + 10}{k + 2}\\). Which description is correct?',
    correct: 'Simplifies to \\(y = 5\\) with a hole at \\((-2, 5)\\); domain \\(k \\neq -2\\); range \\(\\{5\\}\\)',
    distractors: [
      'Simplifies to \\(y = 5\\) with no hole; domain all real \\(k\\)',
      'Simplifies to \\(y = 5k\\); domain \\(k \\neq -2\\)',
      'Undefined at \\(k = 2\\); simplifies to \\(y = 5\\)',
    ],
    steps: [
      step('Undefined at \\(k + 2 = 0 \\implies k = -2\\).', '\\(k = -2\\)'),
      step('Numerator \\(5(k + 2)\\), so \\(y = 5\\) for \\(k \\neq -2\\).', '\\(y = 5\\)'),
      step('Horizontal line with a hole at \\((-2, 5)\\); range is just \\(\\{5\\}\\).', '\\(R = \\{5\\}\\)'),
    ],
  },
];
for (const item of cancel) {
  ITEMS.push(
    mc({
      id: item.id,
      difficulty: 'medium',
      q: item.q,
      correct: item.correct,
      distractors: item.distractors,
      a: nextA(),
      solutionSteps: item.steps,
    })
  );
}

// —— 13, 14 ——
ITEMS.push(
  mc({
    id: 'y11a-5h-13a',
    difficulty: 'hard',
    q: 'Let \\(p(y) = \\begin{cases} 3^y & y < 1 \\\\ 5 & y = 1 \\\\ 4 - y & y > 1 \\end{cases}\\). Why is \\(p\\) discontinuous at \\(y = 1\\)?',
    correct: 'Both one-sided limits equal \\(3\\), but \\(p(1) = 5 \\neq 3\\)',
    distractors: [
      'Left limit is \\(3\\) but right limit is \\(5\\)',
      'Left limit is \\(5\\) but right limit is \\(3\\)',
      'The function is undefined at \\(y = 1\\)',
    ],
    a: nextA(),
    solutionSteps: [
      step('Left: \\(\\lim_{y \\to 1^-} 3^y = 3^1 = 3\\).', '\\(3\\)'),
      step('Right: \\(\\lim_{y \\to 1^+} (4 - y) = 3\\).', '\\(3\\)'),
      step('But \\(p(1) = 5 \\neq 3\\), so discontinuous (removable by redefining the point).', '\\(p(1) = 5 \\neq 3\\)'),
    ],
  }),
  mc({
    id: 'y11a-5h-13b',
    difficulty: 'hard',
    q: 'For the same \\(p(y)\\) as above, what simple change makes it continuous at \\(y = 1\\)?',
    correct: 'Redefine \\(p(1) = 3\\)',
    distractors: [
      'Redefine \\(p(1) = 4\\)',
      'Remove the left piece entirely',
      'Change the right piece to \\(5 - y\\)',
    ],
    a: nextA(),
    solutionSteps: [
      step('Continuity needs the function value to match the common limit \\(3\\).', '\\(\\text{need } p(1) = 3\\)'),
      step('Set the middle definition from \\(5\\) to \\(3\\).', '\\(p(1) = 3\\)'),
      step('Then limits and value all equal \\(3\\): continuous at \\(y = 1\\).', '\\(\\text{continuous}\\)'),
    ],
  }),
  mc({
    id: 'y11a-5h-14a',
    difficulty: 'hard',
    q: 'Suppose \\(g\\) is discontinuous at \\(x = k\\) but continuous at \\(x = -k\\) (with \\(k \\neq 0\\)). Why can \\(g\\) be neither even nor odd?',
    correct: 'Even/odd functions must have matching discontinuity patterns at \\(x\\) and \\(-x\\)',
    distractors: [
      'Even functions can never be discontinuous',
      'Odd functions must be continuous everywhere',
      'Continuity at \\(-k\\) forces continuity at \\(k\\) for every function',
    ],
    a: nextA(),
    solutionSteps: [
      step('If \\(g\\) is even, \\(g(x) = g(-x)\\): a jump/hole at \\(k\\) forces the same at \\(-k\\).', '\\(g(x)=g(-x)\\)'),
      step('If \\(g\\) is odd, \\(g(-x) = -g(x)\\): again a discontinuity at \\(k\\) implies one at \\(-k\\).', '\\(g(-x)=-g(x)\\)'),
      step('An asymmetric discontinuity pattern therefore rules out both even and odd.', '\\(\\text{neither}\\)'),
    ],
  }),
  mc({
    id: 'y11a-5h-14b',
    difficulty: 'hard',
    q: 'Using symmetry of discontinuities, which of the cancelled rational graphs from Q11 are neither even nor odd?',
    correct: '11a, 11c and 11d',
    distractors: ['11a and 11b only', '11b only', 'All of 11a–11d'],
    a: nextA(),
    solutionSteps: [
      step('11b has holes at both \\(\\pm 2\\) (symmetric) — can still be even after simplifying.', '\\(11b:\\; \\pm 2\\)'),
      step('11a and 11d have a single hole at \\(k = -2\\) only — asymmetric.', '\\(11a, 11d\\)'),
      step('11c has hole at \\(4\\) and asymptote at \\(2\\) — not symmetric about zero. So 11a, 11c, 11d.', '\\(11a, 11c, 11d\\)'),
    ],
  })
);

// —— Baulko exam MCQ ——
ITEMS.push(
  mc({
    id: 'baulko2020-q12di',
    difficulty: 'medium',
    q: 'Consider \\(f(x) = \\begin{cases} x^2 - 1 & x \\le 1 \\\\ 4 - x^2 & x > 1 \\end{cases}\\). Find \\(f(1)\\).',
    correct: '\\(0\\)',
    distractors: ['\\(3\\)', '\\(1\\)', '\\(-1\\)'],
    a: nextA(),
    solutionSteps: [
      step('At \\(x = 1\\) the left branch applies (\\(x \\le 1\\)).', '\\(x = 1 \\le 1\\)'),
      step('So \\(f(1) = 1^2 - 1 = 0\\).', '\\(f(1) = 0\\)'),
      step('Note the right piece at \\(1\\) would give \\(3\\), but that piece is only for \\(x > 1\\).', '\\(f(1) = 0\\)'),
    ],
  }),
  mc({
    id: 'baulko2020-q12dii',
    difficulty: 'hard',
    q: 'For \\(f(x) = \\begin{cases} x^2 - 1 & x \\le 1 \\\\ 4 - x^2 & x > 1 \\end{cases}\\), find all \\(x\\) such that \\(f(x) = 0\\).',
    correct: '\\(x = -1,\\ 1,\\ 2\\)',
    distractors: ['\\(x = -1,\\ 1\\)', '\\(x = 1,\\ 2\\)', '\\(x = -2,\\ -1,\\ 1,\\ 2\\)'],
    a: nextA(),
    solutionSteps: [
      step('Piece 1: \\(x^2 - 1 = 0 \\implies x = \\pm 1\\), both satisfy \\(x \\le 1\\).', '\\(x = -1, 1\\)'),
      step('Piece 2: \\(4 - x^2 = 0 \\implies x = \\pm 2\\); only \\(x = 2 > 1\\) is allowed.', '\\(x = 2\\)'),
      step('Solutions: \\(x = -1, 1, 2\\).', '\\(x = -1, 1, 2\\)'),
    ],
  }),
  mc({
    id: 'baulko2020-q12div',
    difficulty: 'medium',
    q: 'For \\(g(x) = \\begin{cases} x + 2 & x < 0 \\\\ x^2 + 1 & x \\ge 0 \\end{cases}\\), find all \\(x\\) such that \\(g(x) = 2\\).',
    correct: '\\(x = 1\\)',
    distractors: ['\\(x = 0\\)', '\\(x = -1\\)', '\\(x = 0\\) and \\(x = 1\\)'],
    a: nextA(),
    solutionSteps: [
      step('Piece 1: \\(x + 2 = 2 \\implies x = 0\\), but requires \\(x < 0\\) — reject.', '\\(\\text{no sol. from piece 1}\\)'),
      step('Piece 2: \\(x^2 + 1 = 2 \\implies x = \\pm 1\\); only \\(x = 1 \\ge 0\\).', '\\(x = 1\\)'),
      step('Unique solution \\(x = 1\\).', '\\(x = 1\\)'),
    ],
  })
);

// —— Teacher review sketches (model SVG on last step; NO root graphData) ——
const sketches = [
  {
    id: 'y11a-5h-2-sketch',
    q: 'Sketch \\(g(u) = \\begin{cases} 2 - u & u < 0 \\\\ 2 + u^2 & u \\ge 0 \\end{cases}\\), labelling the join at \\(u = 0\\).',
    answer: 'Line of slope \\(-1\\) for \\(u < 0\\) meeting an upright parabola for \\(u \\ge 0\\) at \\((0, 2)\\). Continuous; range \\(y \\ge 2\\).',
    svg: () =>
      piecewiseSvg(
        [
          { fn: (u) => 2 - u, x0: -3, x1: 0, openEnd: false, closedEnd: true },
          { fn: (u) => 2 + u * u, x0: 0, x1: 2.5, closedStart: true },
        ],
        [{ x: 40, y: 28, text: 'g(u)' }],
        [{ x: 0, y: 2, label: '(0, 2)' }]
      ),
    steps: [
      step('For \\(u < 0\\) plot the line \\(y = 2 - u\\) (slope \\(-1\\), open toward the left).', '\\(y = 2 - u\\ (u < 0)\\)'),
      step('For \\(u \\ge 0\\) plot \\(y = 2 + u^2\\), minimum at \\((0, 2)\\).', '\\(y = 2 + u^2\\ (u \\ge 0)\\)'),
      step('Join continuously at \\((0, 2)\\). Domain \\(\\mathbb{R}\\), range \\(y \\ge 2\\).', '\\((0, 2)\\)'),
    ],
  },
  {
    id: 'y11a-5h-3-sketch',
    q: 'Sketch \\(h(v) = \\begin{cases} 3 - v & v \\le 2 \\\\ v - 1 & v > 2 \\end{cases}\\), labelling the minimum.',
    answer: 'V-shaped continuous graph with minimum \\((2, 1)\\). Domain \\(\\mathbb{R}\\), range \\(y \\ge 1\\).',
    svg: () =>
      piecewiseSvg(
        [
          { fn: (v) => 3 - v, x0: -1, x1: 2, closedEnd: true },
          { fn: (v) => v - 1, x0: 2, x1: 5, openStart: true, closedStart: false },
        ],
        [{ x: 40, y: 28, text: 'h(v)' }],
        [{ x: 2, y: 1, label: '(2, 1)' }]
      ),
    steps: [
      step('Left of \\(2\\): line \\(y = 3 - v\\) through \\((2, 1)\\) with filled dot.', '\\(y = 3 - v\\)'),
      step('Right of \\(2\\): line \\(y = v - 1\\) with open/closed matching continuity (value \\(1\\)).', '\\(y = v - 1\\)'),
      step('Minimum at \\((2, 1)\\); range \\(y \\ge 1\\).', '\\((2, 1)\\)'),
    ],
  },
  {
    id: 'y11a-5h-6-sketch',
    q: 'Sketch \\(y = \\dfrac{|2x|}{x}\\), showing behaviour near \\(x = 0\\).',
    answer: 'Horizontal ray \\(y = 2\\) for \\(x > 0\\) and \\(y = -2\\) for \\(x < 0\\); undefined at \\(0\\).',
    svg: () =>
      piecewiseSvg(
        [
          { fn: () => -2, x0: -4, x1: -0.15, openEnd: true },
          { fn: () => 2, x0: 0.15, x1: 4, openStart: true },
        ],
        [{ x: 40, y: 28, text: 'y = |2x|/x' }],
        []
      ),
    steps: [
      step('Simplify: \\(y = 2\\) for \\(x > 0\\), \\(y = -2\\) for \\(x < 0\\).', '\\(y = \\pm 2\\)'),
      step('Leave a gap at \\(x = 0\\) (undefined).', '\\(x \\neq 0\\)'),
      step('Two horizontal half-lines; domain \\(x \\neq 0\\), range \\(\\{-2, 2\\}\\).', '\\(R = \\{-2, 2\\}\\)'),
    ],
  },
  {
    id: 'baulko2020-q12diii',
    q: 'Sketch \\(f(x) = \\begin{cases} x^2 - 1 & x \\le 1 \\\\ 4 - x^2 & x > 1 \\end{cases}\\), showing all intercepts.',
    answer:
      'Left: parabola \\(y = x^2 - 1\\) for \\(x \\le 1\\) with filled \\((1, 0)\\). Right: inverted parabola from open \\((1, 3)\\) through \\((2, 0)\\). Jump discontinuity at \\(x = 1\\).',
    svg: () =>
      piecewiseSvg(
        [
          { fn: (x) => x * x - 1, x0: -2.2, x1: 1, closedEnd: true },
          { fn: (x) => 4 - x * x, x0: 1.05, x1: 2.8, openStart: true },
        ],
        [{ x: 40, y: 28, text: 'f(x)' }],
        [
          { x: -1, y: 0, label: '(-1,0)', color: '#f59e0b' },
          { x: 1, y: 0, label: '(1,0)' },
          { x: 1, y: 3, label: '(1,3) open', color: '#94a3b8' },
          { x: 2, y: 0, label: '(2,0)', color: '#f59e0b' },
        ]
      ),
    steps: [
      step('Left piece \\(y = x^2 - 1\\), \\(x \\le 1\\): intercepts \\(\\pm 1\\) on \\(x\\)-axis, \\(y\\)-int \\(-1\\); filled at \\((1, 0)\\).', '\\((-1,0),\\ (0,-1),\\ (1,0)\\)'),
      step('Right piece \\(y = 4 - x^2\\), \\(x > 1\\): open at \\((1, 3)\\), crosses at \\((2, 0)\\).', '\\((1,3)\\text{ open},\\ (2,0)\\)'),
      step('Jump at \\(x = 1\\): \\(f(1) = 0\\) but right limit is \\(3\\).', '\\(\\text{jump discontinuity}\\)'),
    ],
  },
];

for (const sk of sketches) {
  const svg = sk.svg();
  const steps = sk.steps.map((s, i) =>
    i === sk.steps.length - 1 ? { ...s, graphData: { svg } } : s
  );
  ITEMS.push(
    tr({
      id: sk.id,
      difficulty: 'hard',
      q: sk.q,
      answer: sk.answer,
      solutionSteps: steps,
    })
  );
}

// ── Seed / FS I/O ───────────────────────────────────────────────────────────

function toFsDoc(q) {
  const isMC = q.type === 'multiple_choice';
  const isTR = q.type === 'teacher_review';
  return {
    ...TOPIC,
    id: q.id,
    type: q.type,
    difficulty: q.difficulty || 'medium',
    question: q.q,
    title: (q.q || '').replace(/\s+/g, ' ').slice(0, 80),
    options: isMC ? (q.opts || []).map((text) => ({ text, imageUrl: '' })) : [],
    answer: isMC ? String(q.a) : String(q.a ?? ''),
    solutionSteps: q.solutionSteps || [],
    hint: q.h || '',
    solution: q.s || '',
    graphData: FieldValue.delete(), // never put model graph on stem for these
    isNew: true,
    requiresManualGrading: isTR,
    isActive: true,
    updatedAt: FieldValue.serverTimestamp(),
  };
}

function loadSeed() {
  const src = readFileSync(SEED_PATH, 'utf8');
  const start = src.indexOf('export const CH5_QUESTIONS_Y11A = ');
  const end = src.indexOf('export const Y11_CH5_QUESTIONS');
  if (start < 0 || end < 0) throw new Error('seed markers not found');
  const chunk = src
    .slice(start, end)
    .replace('export const CH5_QUESTIONS_Y11A = ', 'const CH5_QUESTIONS_Y11A = ')
    .replace(/;\s*$/, '');
  const arr = new Function(`${chunk}; return CH5_QUESTIONS_Y11A;`)();
  return { arr, rest: src.slice(end) };
}

function validate(items) {
  for (const q of items) {
    if (q.type === 'multiple_choice') {
      if (!q.opts || q.opts.length !== 4) throw new Error(`${q.id}: need 4 opts`);
      if (q.opts[Number(q.a)] === undefined) throw new Error(`${q.id}: bad a`);
      if ((q.solutionSteps || []).length < 3) throw new Error(`${q.id}: need ≥3 steps`);
    }
    const j = JSON.stringify(q);
    const o = (j.match(/\\\(/g) || []).length;
    const c = (j.match(/\\\)/g) || []).length;
    if (o !== c) throw new Error(`${q.id}: LaTeX parity ${o}/${c}`);
    // no $ dollar math left in question text (allow in SVG unicode)
    if (/\$[^$]+\$/.test(q.q)) throw new Error(`${q.id}: still has $ math`);
  }
}

async function main() {
  console.log('Built', ITEMS.length, 'items; aDist', aDist);
  validate(ITEMS);
  const byId = Object.fromEntries(ITEMS.map((q) => [q.id, q]));

  // IDs that replace legacy seed multiparts
  const removeSeedIds = new Set([
    'y11a-5h-2',
    'y11a-5h-3',
    'y11a-5h-6',
    'y11a-5h-8',
    'y11a-5h-9',
    'y11a-5h-13',
    'y11a-5h-14',
  ]);

  const { arr, rest } = loadSeed();
  let newArr = arr.filter((q) => !(q.c === '5H' && (byId[q.id] || removeSeedIds.has(q.id))));
  // drop old 5H entries that we replaced with split ids
  newArr = newArr.filter((q) => q.c !== '5H' || !removeSeedIds.has(q.id));
  // re-add all non-exam ITEMS that belong in seed (exclude baulko* if preferred — keep exam in seed too for consistency)
  for (const q of ITEMS) {
    if (!newArr.find((x) => x.id === q.id)) newArr.push(q);
    else {
      const i = newArr.findIndex((x) => x.id === q.id);
      newArr[i] = q;
    }
  }
  // strip any remaining 5H short_answer
  newArr = newArr.map((q) => (q.c === '5H' && byId[q.id] ? byId[q.id] : q));

  writeFileSync(
    SEED_PATH,
    `export const CH5_QUESTIONS_Y11A = ${JSON.stringify(newArr, null, 2)};\n\n` + rest,
    'utf8'
  );
  const hCount = newArr.filter((q) => q.c === '5H').length;
  console.log('Seed written; 5H count', hCount, 'types', {
    mc: newArr.filter((q) => q.c === '5H' && q.type === 'multiple_choice').length,
    tr: newArr.filter((q) => q.c === '5H' && q.type === 'teacher_review').length,
  });

  if (!DO_FS) {
    console.log('Seed only. Re-run with --firestore.');
    return;
  }

  const sa = JSON.parse(
    readFileSync(
      process.env.GOOGLE_APPLICATION_CREDENTIALS ||
        '/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json',
      'utf8'
    )
  );
  if (!getApps().length) initializeApp({ credential: cert(sa) });
  const db = getFirestore();

  // Existing 5H + baulko
  const existing = await db.collection('questions').where('topicId', '==', 'y11a-5H').get();
  const existingMap = Object.fromEntries(existing.docs.map((d) => [d.id, d.data()]));
  console.log('FS existing 5H', existing.size);

  // Deactivate replaced multiparts if present
  for (const id of removeSeedIds) {
    if (existingMap[id] && existingMap[id].origin !== 'teacher') {
      await db.collection('questions').doc(id).set(
        { isActive: false, updatedAt: FieldValue.serverTimestamp() },
        { merge: true }
      );
      console.log('deactivated', id);
    }
  }

  let written = 0;
  const ids = Object.keys(byId);
  for (let i = 0; i < ids.length; i += 400) {
    const batch = db.batch();
    for (const id of ids.slice(i, i + 400)) {
      const prev = existingMap[id];
      if (prev?.origin === 'teacher') {
        console.warn('skip teacher', id);
        continue;
      }
      const doc = toFsDoc(byId[id]);
      // preserve exam chapter if any
      if (prev?.chapterId && String(prev.chapterId).startsWith('exam:')) {
        doc.chapterId = prev.chapterId;
        doc.chapterTitle = prev.chapterTitle || doc.chapterTitle;
      }
      // baulko may live on topic 5H already
      batch.set(db.collection('questions').doc(id), doc, { merge: true });
      written++;
    }
    await batch.commit();
  }
  console.log('Firestore written', written);

  // bump version
  const ver = Date.now();
  await db.collection('sync_meta').doc('questions').set(
    { version: ver, membershipVersion: ver, updatedAt: FieldValue.serverTimestamp() },
    { merge: true }
  );

  const after = await db.collection('questions').where('topicId', '==', 'y11a-5H').get();
  const byType = {};
  let active = 0;
  after.docs.forEach((d) => {
    const x = d.data();
    if (x.isActive === false) return;
    active++;
    byType[x.type] = (byType[x.type] || 0) + 1;
  });
  console.log('After active', active, byType, 'aDist', aDist);
  console.log('Run: node tools/scripts/rebuildQuestionIndexes.js y11a-5');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
