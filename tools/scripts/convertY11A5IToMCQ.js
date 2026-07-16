/**
 * Convert Year 11 Advanced Chapter 5I (Revision) → MCQ / teacher_review.
 *
 *   node tools/scripts/convertY11A5IToMCQ.js --firestore
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
  topicId: 'y11a-5I',
  topicCode: '5I',
  topicTitle: 'Revision',
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

function mc({ id, difficulty = 'medium', q, correct, distractors, a, solutionSteps, graphData = null }) {
  const opts = place(correct, distractors, a);
  return {
    id,
    c: '5I',
    t: 'Revision',
    type: 'multiple_choice',
    difficulty,
    q: dollarToParen(q),
    a: String(a),
    opts,
    options: opts,
    h: '',
    s: '',
    solutionSteps,
    graphData,
    timeLimit: 60,
    isNew: true,
  };
}

function tr({ id, difficulty = 'hard', q, answer, solutionSteps, graphData = null }) {
  return {
    id,
    c: '5I',
    t: 'Revision',
    type: 'teacher_review',
    difficulty,
    q: dollarToParen(q),
    a: dollarToParen(answer),
    opts: [],
    options: [],
    solutionSteps,
    graphData,
    timeLimit: 60,
    isNew: true,
  };
}

// ── SVG helpers ─────────────────────────────────────────────────────────────

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
  return { sx, sy, W, H, axes, padL, padR, padT, padB };
}

/**
 * Sample a curve without clamping y into the box (clamping created fake flat
 * "plateaus" at the top/bottom of parabolas). Points outside the y-window are
 * skipped so the path just ends at the edge of the view.
 */
function samplePath(fn, x0, x1, sx, sy, ymin, ymax, n = 60) {
  let d = '';
  let penDown = false;
  for (let i = 0; i <= n; i++) {
    const x = x0 + ((x1 - x0) * i) / n;
    const y = fn(x);
    if (!Number.isFinite(y) || y < ymin || y > ymax) {
      penDown = false;
      continue;
    }
    d += `${penDown ? 'L' : 'M'}${sx(x).toFixed(1)},${sy(y).toFixed(1)} `;
    penDown = true;
  }
  return d.trim();
}

function absSvg(h, k, label) {
  const xmin = h - 4,
    xmax = h + 4;
  // Fit arms fully inside the box (no clamp plateaus).
  const armY = Math.abs(xmin - h) + k;
  const ymin = Math.min(k - 1, -1);
  const ymax = Math.max(armY + 1, k + 2, 2);
  const { sx, sy, W, H, axes } = plane(xmin, xmax, ymin, ymax);
  const d = `M${sx(xmin).toFixed(1)},${sy(armY).toFixed(1)} L${sx(h).toFixed(1)},${sy(k).toFixed(1)} L${sx(xmax).toFixed(1)},${sy(armY).toFixed(1)}`;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" style="${SVG_STYLE}">
  ${axes}
  <path d="${d}" fill="none" stroke="#6366f1" stroke-width="2.5" stroke-linejoin="round"/>
  <circle cx="${sx(h).toFixed(1)}" cy="${sy(k).toFixed(1)}" r="3.5" fill="#ef4444"/>
  <text x="${sx(h) + 8}" y="${sy(k) - 8}" font-size="11" fill="#ef4444" font-weight="bold">(${h}, ${k})</text>
  <text x="40" y="28" font-size="11" fill="#6366f1" font-weight="bold">${label}</text>
</svg>`;
}

function markDots(sx, sy, marks = []) {
  let body = '';
  for (const m of marks) {
    const color = m.color || '#ef4444';
    const r = m.r ?? 3.2;
    body += `<circle cx="${sx(m.x).toFixed(1)}" cy="${sy(m.y).toFixed(1)}" r="${r}" fill="${color}"/>`;
    if (m.label) {
      const dx = m.dx ?? 6;
      const dy = m.dy ?? -7;
      body += `<text x="${(sx(m.x) + dx).toFixed(1)}" y="${(sy(m.y) + dy).toFixed(1)}" font-size="10" fill="${color}" font-weight="bold">${m.label}</text>`;
    }
  }
  return body;
}

function legendBox(items = []) {
  // items: [{color, text}] top-left legend
  if (!items.length) return '';
  const maxLen = Math.max(...items.map((it) => String(it.text).length));
  const w = Math.min(160, 70 + maxLen * 6.2);
  let body = `<rect x="36" y="12" width="${w}" height="${12 + items.length * 14}" rx="6" fill="#fff" fill-opacity="0.92" stroke="#e2e8f0"/>`;
  items.forEach((it, i) => {
    const y = 26 + i * 14;
    body += `<line x1="44" y1="${y - 3}" x2="58" y2="${y - 3}" stroke="${it.color}" stroke-width="2.5"/>`;
    body += `<text x="62" y="${y}" font-size="10" fill="${it.color}" font-weight="700">${it.text}</text>`;
  });
  return body;
}

/**
 * Multi-curve plot with intercepts / key points labelled.
 * curves: [{fn, x0, x1, color, n?}]
 * marks:  [{x,y,label,color?,dx?,dy?}]
 * legend: [{color,text}]
 * bounds optional; otherwise auto from samples + marks
 */
function multiSvg({ curves, marks = [], legend = [], xmin, xmax, ymin, ymax, padY = 0.15 }) {
  const xs = [];
  const ys = [0];
  for (const c of curves) {
    xs.push(c.x0, c.x1);
    for (let i = 0; i <= 24; i++) {
      const x = c.x0 + ((c.x1 - c.x0) * i) / 24;
      const y = c.fn(x);
      if (Number.isFinite(y)) ys.push(y);
    }
  }
  for (const m of marks) {
    xs.push(m.x);
    ys.push(m.y);
  }
  let x0 = xmin ?? Math.min(...xs) - 0.4;
  let x1 = xmax ?? Math.max(...xs) + 0.4;
  let y0 = ymin ?? Math.min(...ys);
  let y1 = ymax ?? Math.max(...ys);
  const py = Math.max(0.8, (y1 - y0) * padY);
  y0 -= py;
  y1 += py;
  if (y0 > -0.3) y0 = -0.3;
  if (y1 < 0.3) y1 = 0.3;

  const { sx, sy, W, H, axes } = plane(x0, x1, y0, y1);
  let body = axes;
  for (const c of curves) {
    const d = samplePath(c.fn, c.x0, c.x1, sx, sy, y0, y1, c.n || 70);
    if (d) body += `<path d="${d}" fill="none" stroke="${c.color}" stroke-width="2.4" stroke-linecap="round"/>`;
  }
  body += markDots(sx, sy, marks);
  body += legendBox(legend);
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" style="${SVG_STYLE}">${body}</svg>`;
}

function parabolaSvg(h, k, a = 1, label = '', marks = []) {
  // Choose x-window so the arms stay readable; auto-fit y from actual samples
  // (plus intercept marks) so the curve never gets flattened by a tight ymax.
  const half = 3.2;
  const xmin = h - half;
  const xmax = h + half;
  // Always mark vertex; merge caller marks (intercepts)
  const allMarks = [{ x: h, y: k, label: `(${h}, ${k})`, color: '#ef4444', dx: 8, dy: -8 }, ...marks];
  // Also add x-intercepts if solvable for a=±1 standard forms when not provided
  const curves = [{ fn: (x) => a * (x - h) ** 2 + k, x0: xmin, x1: xmax, color: '#6366f1' }];
  const legend = label ? [{ color: '#6366f1', text: label }] : [];
  return multiSvg({ curves, marks: allMarks, legend, xmin, xmax });
}

// ── Items ───────────────────────────────────────────────────────────────────

const ITEMS = [];

// Absolute value evaluations
ITEMS.push(
  mc({
    id: 'y11a-5i-q1a',
    difficulty: 'easy',
    q: 'Evaluate \\(|7|\\).',
    correct: '\\(7\\)',
    distractors: ['\\(-7\\)', '\\(0\\)', '\\(1\\)'],
    a: nextA(),
    solutionSteps: [
      step('Absolute value of a non-negative number is itself.', '\\(|7|\\)'),
      step('Since \\(7 > 0\\), \\(|7| = 7\\).', '\\(|7| = 7\\)'),
      step('Answer: \\(7\\).', '\\(7\\)'),
    ],
  }),
  mc({
    id: 'y11a-5i-q1b',
    difficulty: 'easy',
    q: 'Evaluate \\(|4 - 12|\\).',
    correct: '\\(8\\)',
    distractors: ['\\(-8\\)', '\\(16\\)', '\\(4\\)'],
    a: nextA(),
    solutionSteps: [
      step('First simplify inside: \\(4 - 12 = -8\\).', '\\(4 - 12 = -8\\)'),
      step('Absolute value of a negative number is its opposite: \\(|-8| = 8\\).', '\\(|-8| = 8\\)'),
      step('So \\(|4 - 12| = 8\\).', '\\(8\\)'),
    ],
  }),
  mc({
    id: 'y11a-5i-q1c',
    difficulty: 'easy',
    q: 'Evaluate \\(|-3 - (-9)|\\).',
    correct: '\\(6\\)',
    distractors: ['\\(-6\\)', '\\(12\\)', '\\(3\\)'],
    a: nextA(),
    solutionSteps: [
      step('Simplify: \\(-3 - (-9) = -3 + 9 = 6\\).', '\\(-3 + 9 = 6\\)'),
      step('Then \\(|6| = 6\\).', '\\(|6| = 6\\)'),
      step('Answer: \\(6\\).', '\\(6\\)'),
    ],
  }),
  mc({
    id: 'y11a-5i-q1d',
    difficulty: 'easy',
    q: 'Evaluate \\(|-4| - |-6|\\).',
    correct: '\\(-2\\)',
    distractors: ['\\(2\\)', '\\(10\\)', '\\(-10\\)'],
    a: nextA(),
    solutionSteps: [
      step('Evaluate each absolute value: \\(|-4| = 4\\), \\(|-6| = 6\\).', '\\(4\\) and \\(6\\)'),
      step('Subtract: \\(4 - 6 = -2\\).', '\\(4 - 6 = -2\\)'),
      step('Note the absolute values are taken first; the result can still be negative.', '\\(-2\\)'),
    ],
  })
);

// Absolute value equations
const absEq = [
  {
    id: 'y11a-5i-q2a',
    difficulty: 'easy',
    q: 'Solve for \\(x\\): \\(|4x| = 24\\).',
    correct: '\\(x = 6\\) or \\(x = -6\\)',
    distractors: ['\\(x = 6\\) only', '\\(x = -6\\) only', 'No solution'],
    steps: [
      step('Rewrite: \\(4x = 24\\) or \\(4x = -24\\).', '\\(4x = \\pm 24\\)'),
      step('Solve: \\(x = 6\\) or \\(x = -6\\).', '\\(x = 6\\) or \\(x = -6\\)'),
      step('Both satisfy the original equation.', '\\(x = \\pm 6\\)'),
    ],
  },
  {
    id: 'y11a-5i-q2b',
    difficulty: 'easy',
    q: 'Solve for \\(x\\): \\(|x - 3| = 5\\).',
    correct: '\\(x = 8\\) or \\(x = -2\\)',
    distractors: ['\\(x = 8\\) or \\(x = 2\\)', '\\(x = -8\\) or \\(x = 2\\)', 'No solution'],
    steps: [
      step('Two cases: \\(x - 3 = 5\\) or \\(x - 3 = -5\\).', '\\(x - 3 = \\pm 5\\)'),
      step('\\(x = 8\\) or \\(x = -2\\).', '\\(x = 8\\) or \\(x = -2\\)'),
      step('Check: distance from \\(3\\) to each solution is \\(5\\).', '\\(x = 8,\\ -2\\)'),
    ],
  },
  {
    id: 'y11a-5i-q2c',
    difficulty: 'easy',
    q: 'Solve for \\(x\\): \\(|3x - 4| = 11\\).',
    correct: '\\(x = 5\\) or \\(x = -\\dfrac{7}{3}\\)',
    distractors: ['\\(x = 5\\) or \\(x = \\dfrac{7}{3}\\)', '\\(x = -5\\) or \\(x = \\dfrac{7}{3}\\)', 'No solution'],
    steps: [
      step('\\(3x - 4 = 11\\) or \\(3x - 4 = -11\\).', '\\(3x - 4 = \\pm 11\\)'),
      step('First: \\(3x = 15 \\implies x = 5\\).', '\\(x = 5\\)'),
      step('Second: \\(3x = -7 \\implies x = -\\dfrac{7}{3}\\).', '\\(x = -\\dfrac{7}{3}\\)'),
    ],
  },
  {
    id: 'y11a-5i-q2d',
    difficulty: 'easy',
    q: 'Solve for \\(x\\): \\(|2x - 5| = 9\\).',
    correct: '\\(x = 7\\) or \\(x = -2\\)',
    distractors: ['\\(x = 7\\) or \\(x = 2\\)', '\\(x = -7\\) or \\(x = 2\\)', 'No solution'],
    steps: [
      step('\\(2x - 5 = 9\\) or \\(2x - 5 = -9\\).', '\\(2x - 5 = \\pm 9\\)'),
      step('\\(2x = 14 \\implies x = 7\\).', '\\(x = 7\\)'),
      step('\\(2x = -4 \\implies x = -2\\).', '\\(x = -2\\)'),
    ],
  },
  {
    id: 'y11a-5i-q10a',
    difficulty: 'medium',
    q: 'Solve the absolute value equation: \\(|4x| = 28\\).',
    correct: '\\(x = 7\\) or \\(x = -7\\)',
    distractors: ['\\(x = 7\\) only', '\\(x = 28\\) or \\(x = -28\\)', 'No solution'],
    steps: [
      step('Divide by 4: \\(|x| = 7\\).', '\\(|x| = 7\\)'),
      step('So \\(x = 7\\) or \\(x = -7\\).', '\\(x = \\pm 7\\)'),
      step('Both solutions check in the original equation.', '\\(x = 7\\) or \\(x = -7\\)'),
    ],
  },
  {
    id: 'y11a-5i-q10b',
    difficulty: 'medium',
    q: 'Solve the absolute value equation: \\(|x + 6| = -3\\).',
    correct: 'No solution',
    distractors: ['\\(x = -9\\) or \\(x = -3\\)', '\\(x = 9\\) or \\(x = 3\\)', '\\(x = -3\\) only'],
    steps: [
      step('By definition, \\(|x + 6| \\ge 0\\) for all real \\(x\\).', '\\(|x + 6| \\ge 0\\)'),
      step('A non-negative quantity cannot equal \\(-3\\).', '\\(\\ge 0 \\neq -3\\)'),
      step('Therefore there is no solution.', '\\(\\text{no solution}\\)'),
    ],
  },
  {
    id: 'y11a-5i-q10c',
    difficulty: 'medium',
    q: 'Solve the absolute value equation: \\(|3x + 5| = 14\\).',
    correct: '\\(x = 3\\) or \\(x = -\\dfrac{19}{3}\\)',
    distractors: ['\\(x = 3\\) or \\(x = \\dfrac{19}{3}\\)', '\\(x = -3\\) or \\(x = \\dfrac{19}{3}\\)', '\\(x = 3\\) only'],
    steps: [
      step('Cases: \\(3x + 5 = 14\\) or \\(3x + 5 = -14\\).', '\\(3x + 5 = \\pm 14\\)'),
      step('First: \\(3x = 9 \\implies x = 3\\).', '\\(x = 3\\)'),
      step('Second: \\(3x = -19 \\implies x = -\\dfrac{19}{3}\\).', '\\(x = -\\dfrac{19}{3}\\)'),
    ],
  },
];
for (const item of absEq) {
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

// Shifts of y=x^2
ITEMS.push(
  mc({
    id: 'y11a-5i-q3a',
    difficulty: 'easy',
    q: 'How do you shift the graph of \\(y = x^2\\) to obtain \\(y = x^2 + 6\\)?',
    correct: 'Shift \\(6\\) units upwards',
    distractors: ['Shift \\(6\\) units downwards', 'Shift \\(6\\) units right', 'Shift \\(6\\) units left'],
    a: nextA(),
    solutionSteps: [
      step('The form is \\(y = x^2 + c\\) with \\(c = +6\\).', '\\(c = +6\\)'),
      step('Adding a positive constant outside shifts the graph vertically up.', '\\(\\text{up by } 6\\)'),
      step('So shift \\(6\\) units upwards.', '\\(\\text{up } 6\\)'),
    ],
  }),
  mc({
    id: 'y11a-5i-q3b',
    difficulty: 'easy',
    q: 'How do you shift the graph of \\(y = x^2\\) to obtain \\(y = x^2 - 3\\)?',
    correct: 'Shift \\(3\\) units downwards',
    distractors: ['Shift \\(3\\) units upwards', 'Shift \\(3\\) units right', 'Shift \\(3\\) units left'],
    a: nextA(),
    solutionSteps: [
      step('Here \\(c = -3\\) in \\(y = x^2 + c\\).', '\\(c = -3\\)'),
      step('A negative constant shifts the graph vertically down.', '\\(\\text{down by } 3\\)'),
      step('So shift \\(3\\) units downwards.', '\\(\\text{down } 3\\)'),
    ],
  }),
  mc({
    id: 'y11a-5i-q3c',
    difficulty: 'easy',
    q: 'How do you shift the graph of \\(y = x^2\\) to obtain \\(y = (x - 4)^2\\)?',
    correct: 'Shift \\(4\\) units right',
    distractors: ['Shift \\(4\\) units left', 'Shift \\(4\\) units upwards', 'Shift \\(4\\) units downwards'],
    a: nextA(),
    solutionSteps: [
      step('Replacing \\(x\\) by \\(x - 4\\) is a horizontal translation.', '\\(x \\to x - 4\\)'),
      step('The graph moves in the opposite sense to the sign inside: right by \\(4\\).', '\\(\\text{right } 4\\)'),
      step('Vertex moves from \\((0,0)\\) to \\((4,0)\\).', '\\((4, 0)\\)'),
    ],
  }),
  mc({
    id: 'y11a-5i-q5b',
    difficulty: 'easy',
    q: 'Find the function obtained when \\(y = x^2 - 5x - 6\\) is reflected in the \\(x\\)-axis.',
    correct: '\\(y = -x^2 + 5x + 6\\)',
    distractors: ['\\(y = -x^2 - 5x - 6\\)', '\\(y = x^2 + 5x + 6\\)', '\\(y = -x^2 + 5x - 6\\)'],
    a: nextA(),
    solutionSteps: [
      step('Reflection in the \\(x\\)-axis replaces \\(y\\) by \\(-y\\).', '\\(y \\to -y\\)'),
      step('So \\(y = -(x^2 - 5x - 6)\\).', '\\(y = -(x^2 - 5x - 6)\\)'),
      step('Expand: \\(y = -x^2 + 5x + 6\\).', '\\(y = -x^2 + 5x + 6\\)'),
    ],
  })
);

// Combined shifts
ITEMS.push(
  mc({
    id: 'y11a-5i-q14a',
    difficulty: 'medium',
    q: 'Write the equation for \\(y = x^2\\) after shifting right by \\(3\\) units and upwards by \\(2\\) units.',
    correct: '\\(y = (x - 3)^2 + 2\\)',
    distractors: ['\\(y = (x + 3)^2 + 2\\)', '\\(y = (x - 3)^2 - 2\\)', '\\(y = x^2 + 5\\)'],
    a: nextA(),
    solutionSteps: [
      step('Right \\(3\\): replace \\(x\\) by \\(x - 3\\) to get \\(y = (x - 3)^2\\).', '\\(y = (x - 3)^2\\)'),
      step('Up \\(2\\): add \\(2\\) outside.', '\\(y = (x - 3)^2 + 2\\)'),
      step('Vertex is at \\((3, 2)\\).', '\\((3, 2)\\)'),
    ],
  }),
  mc({
    id: 'y11a-5i-q14b',
    difficulty: 'medium',
    q: 'Write the equation for \\(y = \\dfrac{1}{x}\\) after shifting left by \\(3\\) units and downwards by \\(4\\) units.',
    correct: '\\(y = \\dfrac{1}{x + 3} - 4\\)',
    distractors: ['\\(y = \\dfrac{1}{x - 3} - 4\\)', '\\(y = \\dfrac{1}{x + 3} + 4\\)', '\\(y = \\dfrac{1}{x - 4} + 3\\)'],
    a: nextA(),
    solutionSteps: [
      step('Left \\(3\\): replace \\(x\\) by \\(x + 3\\).', '\\(y = \\dfrac{1}{x + 3}\\)'),
      step('Down \\(4\\): subtract \\(4\\).', '\\(y = \\dfrac{1}{x + 3} - 4\\)'),
      step('Vertical asymptote \\(x = -3\\); horizontal asymptote \\(y = -4\\).', '\\(x = -3,\\; y = -4\\)'),
    ],
  })
);

// Complete the square — MCQ for equation/vertex (sketches separate)
ITEMS.push(
  mc({
    id: 'y11a-5i-q12b',
    difficulty: 'medium',
    q: 'Complete the square for \\(y = x^2 - 6x + 2\\). Which description is correct?',
    correct: '\\(y = (x - 3)^2 - 7\\); vertex \\((3, -7)\\); \\(y\\)-int \\((0, 2)\\)',
    distractors: [
      '\\(y = (x - 3)^2 + 7\\); vertex \\((3, 7)\\)',
      '\\(y = (x + 3)^2 - 7\\); vertex \\((-3, -7)\\)',
      '\\(y = (x - 6)^2 - 2\\); vertex \\((6, -2)\\)',
    ],
    a: nextA(),
    solutionSteps: [
      step('Half of \\(-6\\) is \\(-3\\); square is \\(9\\).', '\\(\\left(\\dfrac{-6}{2}\\right)^2 = 9\\)'),
      step('\\(y = (x^2 - 6x + 9) - 9 + 2 = (x - 3)^2 - 7\\).', '\\(y = (x - 3)^2 - 7\\)'),
      step('Vertex \\((3, -7)\\); \\(y\\)-intercept from original: \\(2\\).', '\\((3, -7),\\ (0, 2)\\)'),
    ],
  }),
  mc({
    id: 'y11a-5i-q12c',
    difficulty: 'medium',
    q: 'Complete the square for \\(y = 5 + 4x - x^2\\). Which description is correct?',
    correct: '\\(y = -(x - 2)^2 + 9\\); vertex \\((2, 9)\\); \\(x\\)-ints \\((-1, 0)\\) and \\((5, 0)\\)',
    distractors: [
      '\\(y = (x - 2)^2 + 9\\); vertex \\((2, 9)\\)',
      '\\(y = -(x + 2)^2 + 9\\); vertex \\((-2, 9)\\)',
      '\\(y = -(x - 2)^2 - 9\\); vertex \\((2, -9)\\)',
    ],
    a: nextA(),
    solutionSteps: [
      step('Factor out \\(-1\\) from the quadratic terms: \\(y = -(x^2 - 4x) + 5\\).', '\\(y = -(x^2 - 4x) + 5\\)'),
      step('Complete the square: \\(y = -(x^2 - 4x + 4 - 4) + 5 = -(x - 2)^2 + 9\\).', '\\(y = -(x - 2)^2 + 9\\)'),
      step('Vertex \\((2, 9)\\); roots of \\(x^2 - 4x - 5 = 0\\) give \\(x\\)-ints \\(-1\\) and \\(5\\).', '\\((-1,0),\\ (5,0)\\)'),
    ],
  }),
  mc({
    id: 'y11a-5i-q12d',
    difficulty: 'medium',
    q: 'Complete the square for \\(y = x^2 - 2x - 3\\). Which description is correct?',
    correct: '\\(y = (x - 1)^2 - 4\\); vertex \\((1, -4)\\); \\(x\\)-ints \\((-1, 0)\\) and \\((3, 0)\\)',
    distractors: [
      '\\(y = (x - 1)^2 + 4\\); vertex \\((1, 4)\\)',
      '\\(y = (x + 1)^2 - 4\\); vertex \\((-1, -4)\\)',
      '\\(y = (x - 2)^2 - 3\\); vertex \\((2, -3)\\)',
    ],
    a: nextA(),
    solutionSteps: [
      step('Half of \\(-2\\) is \\(-1\\); square is \\(1\\).', '\\(1\\)'),
      step('\\(y = (x^2 - 2x + 1) - 1 - 3 = (x - 1)^2 - 4\\).', '\\(y = (x - 1)^2 - 4\\)'),
      step('Vertex \\((1, -4)\\); factor \\((x - 3)(x + 1)\\) for intercepts.', '\\((-1,0),\\ (3,0)\\)'),
    ],
  })
);

// Composite domain/range
ITEMS.push(
  mc({
    id: 'y11a-5i-q16aii',
    difficulty: 'medium',
    q: 'Given \\(f(x) = x - 2\\) and \\(g(x) = \\sqrt{x}\\), find the domain and range of \\(g(f(x))\\).',
    correct: 'Domain: \\(x \\ge 2\\); range: \\(y \\ge 0\\)',
    distractors: [
      'Domain: \\(x \\ge 0\\); range: \\(y \\ge 0\\)',
      'Domain: \\(x \\ge 2\\); range: \\(y \\ge 2\\)',
      'Domain: all real \\(x\\); range: \\(y \\ge 0\\)',
    ],
    a: nextA(),
    solutionSteps: [
      step('Composite: \\(g(f(x)) = \\sqrt{x - 2}\\).', '\\(\\sqrt{x - 2}\\)'),
      step('Need \\(x - 2 \\ge 0 \\implies x \\ge 2\\).', '\\(x \\ge 2\\)'),
      step('Square-root outputs are non-negative: range \\(y \\ge 0\\).', '\\(y \\ge 0\\)'),
    ],
  }),
  mc({
    id: 'y11a-5i-q16bi',
    difficulty: 'medium',
    q: 'Given \\(f(x) = \\dfrac{2}{x}\\) and \\(g(x) = x^2 + 3\\), find the domain and range of \\(f(g(x))\\).',
    correct: 'Domain: all real \\(x\\); range: \\(0 < y \\le \\dfrac{2}{3}\\)',
    distractors: [
      'Domain: \\(x \\neq 0\\); range: \\(0 < y \\le \\dfrac{2}{3}\\)',
      'Domain: all real \\(x\\); range: \\(y \\ge \\dfrac{2}{3}\\)',
      'Domain: all real \\(x\\); range: \\(y > 0\\)',
    ],
    a: nextA(),
    solutionSteps: [
      step('\\(f(g(x)) = \\dfrac{2}{x^2 + 3}\\). Denominator \\(\\ge 3 > 0\\), never zero.', '\\(\\dfrac{2}{x^2 + 3}\\)'),
      step('Domain is all real \\(x\\).', '\\(D = \\mathbb{R}\\)'),
      step('Since \\(x^2 + 3 \\ge 3\\), we have \\(0 < \\dfrac{2}{x^2 + 3} \\le \\dfrac{2}{3}\\).', '\\(0 < y \\le \\dfrac{2}{3}\\)'),
    ],
  }),
  mc({
    id: 'y11a-5i-q16bii',
    difficulty: 'medium',
    q: 'Given \\(f(x) = \\dfrac{2}{x}\\) and \\(g(x) = x^2 + 3\\), find the domain and range of \\(g(f(x))\\).',
    correct: 'Domain: \\(x \\neq 0\\); range: \\(y > 3\\)',
    distractors: [
      'Domain: all real \\(x\\); range: \\(y > 3\\)',
      'Domain: \\(x \\neq 0\\); range: \\(y \\ge 3\\)',
      'Domain: \\(x \\neq 0\\); range: \\(y \\ge 0\\)',
    ],
    a: nextA(),
    solutionSteps: [
      step('\\(g(f(x)) = \\left(\\dfrac{2}{x}\\right)^2 + 3 = \\dfrac{4}{x^2} + 3\\).', '\\(\\dfrac{4}{x^2} + 3\\)'),
      step('Requires \\(x \\neq 0\\).', '\\(x \\neq 0\\)'),
      step('\\(\\dfrac{4}{x^2} > 0\\) so \\(y > 3\\) (never equals \\(3\\)).', '\\(y > 3\\)'),
    ],
  })
);

// Dilation — FIX wrong answer from original (was horiz 1/3; correct is vertical 1/3)
ITEMS.push(
  mc({
    id: 'y11a-5i-q18b',
    difficulty: 'medium',
    q: 'How can the graph of \\(y = \\dfrac{1}{3x - 9}\\) be obtained from \\(y = \\dfrac{1}{x - 3}\\) by a suitable dilation?',
    correct: 'Vertical dilation by a factor of \\(\\dfrac{1}{3}\\) (compression)',
    distractors: [
      'Horizontal dilation by a factor of \\(\\dfrac{1}{3}\\) (compression)',
      'Horizontal dilation by a factor of \\(3\\) (stretch)',
      'Vertical dilation by a factor of \\(3\\) (stretch)',
    ],
    a: nextA(),
    solutionSteps: [
      step('Let \\(f(x) = \\dfrac{1}{x - 3}\\).', '\\(f(x) = \\dfrac{1}{x - 3}\\)'),
      step('Factor: \\(\\dfrac{1}{3x - 9} = \\dfrac{1}{3(x - 3)} = \\dfrac{1}{3} f(x)\\).', '\\(y = \\dfrac{1}{3} f(x)\\)'),
      step('Multiplying the function by \\(\\dfrac{1}{3}\\) is a vertical compression by factor \\(\\dfrac{1}{3}\\).', '\\(\\text{vertical } \\times \\dfrac{1}{3}\\)'),
    ],
  })
);

// Transformations of y=x^2 → y=9-x^2
ITEMS.push(
  mc({
    id: 'y11a-5i-q21a',
    difficulty: 'medium',
    q: 'Which transformations take \\(y = x^2\\) to \\(y = 9 - x^2\\)?',
    correct: 'Reflect in the \\(x\\)-axis, then shift up by \\(9\\) units',
    distractors: [
      'Shift up by \\(9\\) units, then reflect in the \\(x\\)-axis',
      'Reflect in the \\(y\\)-axis, then shift up by \\(9\\)',
      'Horizontal stretch by \\(9\\), then reflect in the \\(x\\)-axis',
    ],
    a: nextA(),
    solutionSteps: [
      step('Reflect in the \\(x\\)-axis: \\(y = -x^2\\).', '\\(y = -x^2\\)'),
      step('Shift up \\(9\\): \\(y = -x^2 + 9 = 9 - x^2\\).', '\\(y = 9 - x^2\\)'),
      step('Order matters: reflecting after shifting up would give \\(y = -(x^2 + 9)\\), not the target.', '\\(\\text{reflect then up } 9\\)'),
    ],
  })
);

// Graph transforms as MCQ (stem has given f — no stem graph available as clean SVG; describe)
const transforms = [
  {
    id: 'y11a-5i-q17b',
    q: 'Starting from a graph of \\(y = f(x)\\), which transformation produces \\(y = f(x) + 2\\)?',
    correct: 'Shift the graph vertically upwards by \\(2\\) units',
    distractors: [
      'Shift the graph vertically downwards by \\(2\\) units',
      'Shift the graph horizontally right by \\(2\\) units',
      'Shift the graph horizontally left by \\(2\\) units',
    ],
    work: ['\\(y \\to y + 2\\)', '\\(\\text{up } 2\\)', '\\(y = f(x) + 2\\)'],
  },
  {
    id: 'y11a-5i-q17c',
    q: 'Starting from a graph of \\(y = f(x)\\), which transformation produces \\(y = f(x - 2)\\)?',
    correct: 'Shift the graph horizontally right by \\(2\\) units',
    distractors: [
      'Shift the graph horizontally left by \\(2\\) units',
      'Shift the graph vertically up by \\(2\\) units',
      'Shift the graph vertically down by \\(2\\) units',
    ],
    work: ['\\(x \\to x - 2\\)', '\\(\\text{right } 2\\)', '\\(y = f(x - 2)\\)'],
  },
  {
    id: 'y11a-5i-q17d',
    q: 'Starting from a graph of \\(y = f(x)\\), which transformation produces \\(y = f(x) - 2\\)?',
    correct: 'Shift the graph vertically downwards by \\(2\\) units',
    distractors: [
      'Shift the graph vertically upwards by \\(2\\) units',
      'Shift the graph horizontally right by \\(2\\) units',
      'Shift the graph horizontally left by \\(2\\) units',
    ],
    work: ['\\(y \\to y - 2\\)', '\\(\\text{down } 2\\)', '\\(y = f(x) - 2\\)'],
  },
  {
    id: 'y11a-5i-q17e',
    q: 'Starting from a graph of \\(y = f(x)\\), which transformation produces \\(y = f(-x)\\)?',
    correct: 'Reflect the graph across the \\(y\\)-axis',
    distractors: [
      'Reflect the graph across the \\(x\\)-axis',
      'Rotate the graph \\(180^\\circ\\) about the origin',
      'Shift the graph left by \\(1\\) unit',
    ],
    work: ['\\(x \\to -x\\)', '\\(\\text{reflect in } y\\text{-axis}\\)', '\\(y = f(-x)\\)'],
  },
  {
    id: 'y11a-5i-q17f',
    q: 'Starting from a graph of \\(y = f(x)\\), which transformation produces \\(y = -f(x)\\)?',
    correct: 'Reflect the graph across the \\(x\\)-axis',
    distractors: [
      'Reflect the graph across the \\(y\\)-axis',
      'Rotate the graph \\(180^\\circ\\) about the origin',
      'Shift the graph down by \\(1\\) unit',
    ],
    work: ['\\(y \\to -y\\)', '\\(\\text{reflect in } x\\text{-axis}\\)', '\\(y = -f(x)\\)'],
  },
  {
    id: 'y11a-5i-q17g',
    q: 'Starting from a graph of \\(y = f(x)\\), which transformation produces \\(y = -f(-x)\\)?',
    correct: 'Rotate the graph \\(180^\\circ\\) about the origin',
    distractors: [
      'Reflect across the \\(x\\)-axis only',
      'Reflect across the \\(y\\)-axis only',
      'Shift left by \\(1\\) then up by \\(1\\)',
    ],
    work: ['\\(x \\to -x\\) and \\(y \\to -y\\)', '\\(180^\\circ\\) rotation', '\\(y = -f(-x)\\)'],
  },
  {
    id: 'y11a-5i-q17h',
    q: 'Starting from a graph of \\(y = f(x)\\), which transformation produces \\(y = 3f(x)\\)?',
    correct: 'Stretch the graph vertically by a factor of \\(3\\)',
    distractors: [
      'Stretch the graph horizontally by a factor of \\(3\\)',
      'Compress the graph vertically by a factor of \\(3\\)',
      'Compress the graph horizontally by a factor of \\(\\dfrac{1}{3}\\)',
    ],
    work: ['\\(y \\to 3y\\)', '\\(\\text{vertical } \\times 3\\)', '\\(y = 3f(x)\\)'],
  },
  {
    id: 'y11a-5i-q17i',
    q: 'Starting from a graph of \\(y = f(x)\\), which transformation produces \\(y = f\\!\\left(\\dfrac{1}{3}x\\right)\\)?',
    correct: 'Stretch the graph horizontally by a factor of \\(3\\)',
    distractors: [
      'Stretch the graph vertically by a factor of \\(3\\)',
      'Compress the graph horizontally by a factor of \\(3\\)',
      'Compress the graph vertically by a factor of \\(\\dfrac{1}{3}\\)',
    ],
    work: ['\\(x \\to \\dfrac{x}{3}\\)', '\\(\\text{horizontal } \\times 3\\)', '\\(y = f\\!\\left(\\dfrac{x}{3}\\right)\\)'],
  },
];
for (const t of transforms) {
  ITEMS.push(
    mc({
      id: t.id,
      difficulty: 'medium',
      q: t.q,
      correct: t.correct,
      distractors: t.distractors,
      a: nextA(),
      solutionSteps: [
        step('Identify the algebraic change to \\(x\\) or \\(y\\).', t.work[0]),
        step('Translate that into a geometric transformation of the graph.', t.work[1]),
        step('Resulting equation matches the target.', t.work[2]),
      ],
    })
  );
}

// Odd/even/neither — keep simple MCQ (graph was on solution step; describe without stem graph)
ITEMS.push(
  mc({
    id: 'y11a-5i-q6b',
    difficulty: 'easy',
    q: 'A cubic-looking graph has a local maximum and a local minimum that are not symmetrically placed about either axis. Classify the function as odd, even, or neither.',
    correct: 'Neither',
    distractors: ['Odd', 'Even', 'Both odd and even'],
    a: nextA(),
    solutionSteps: [
      step('Even graphs are symmetric about the \\(y\\)-axis; this graph is not.', '\\(\\text{not even}\\)'),
      step('Odd graphs have \\(180^\\circ\\) rotational symmetry about the origin; this graph does not.', '\\(\\text{not odd}\\)'),
      step('Therefore the function is neither odd nor even.', '\\(\\text{neither}\\)'),
    ],
  })
);

// Piecewise continuity / domain-range (split multiparts)
ITEMS.push(
  mc({
    id: 'y11a-5i-q22a',
    difficulty: 'medium',
    q: 'Let \\(f(x) = \\begin{cases} x^2 & x \\le 0 \\\\ x^2 + 2 & x > 0 \\end{cases}\\). Is \\(f\\) continuous at \\(x = 0\\)?',
    correct: 'No — left limit is \\(0\\) but right limit is \\(2\\)',
    distractors: [
      'Yes — both limits equal \\(0\\)',
      'Yes — both limits equal \\(2\\)',
      'No — the function is undefined at \\(x = 0\\)',
    ],
    a: nextA(),
    solutionSteps: [
      step('Left: \\(\\lim_{x \\to 0^-} x^2 = 0\\), and \\(f(0) = 0\\).', '\\(0\\)'),
      step('Right: \\(\\lim_{x \\to 0^+} (x^2 + 2) = 2\\).', '\\(2\\)'),
      step('Limits disagree, so discontinuous at \\(x = 0\\).', '\\(\\text{discontinuous}\\)'),
    ],
  }),
  mc({
    id: 'y11a-5i-q22b',
    difficulty: 'medium',
    q: 'For the same \\(f\\) as above, what are the domain and range?',
    correct: 'Domain: all real \\(x\\); range: \\(y \\ge 0\\)',
    distractors: [
      'Domain: \\(x \\le 0\\); range: \\(y \\ge 0\\)',
      'Domain: all real \\(x\\); range: \\(y > 2\\)',
      'Domain: all real \\(x\\); range: \\((-\\infty, 0] \\cup (2, \\infty)\\)',
    ],
    a: nextA(),
    solutionSteps: [
      step('Both pieces cover their half-lines; domain is \\(\\mathbb{R}\\).', '\\(D = \\mathbb{R}\\)'),
      step('For \\(x \\le 0\\), \\(y = x^2 \\ge 0\\). For \\(x > 0\\), \\(y = x^2 + 2 > 2\\).', '\\(y \\ge 0\\) or \\(y > 2\\)'),
      step('Combined range is still \\(y \\ge 0\\) (values in \\((0, 2]\\) come from the left branch).', '\\(R = [0, \\infty)\\)'),
    ],
  }),
  mc({
    id: 'y11a-5i-q23a',
    difficulty: 'medium',
    q: 'Let \\(f(x) = \\begin{cases} x^2 - 9 & x < 3 \\\\ x - 3 & x \\ge 3 \\end{cases}\\). Is \\(f\\) continuous at \\(x = 3\\)?',
    correct: 'Yes — both one-sided limits equal \\(f(3) = 0\\)',
    distractors: [
      'No — left limit is \\(0\\) but right limit is \\(3\\)',
      'No — left limit is \\(-9\\) but right limit is \\(0\\)',
      'Yes — but only from the right',
    ],
    a: nextA(),
    solutionSteps: [
      step('Left: \\(\\lim_{x \\to 3^-} (x^2 - 9) = 0\\).', '\\(0\\)'),
      step('Right and value: \\(f(3) = 3 - 3 = 0\\).', '\\(0\\)'),
      step('Limits and value agree: continuous at \\(x = 3\\).', '\\(\\text{continuous}\\)'),
    ],
  }),
  mc({
    id: 'y11a-5i-q23b',
    difficulty: 'medium',
    q: 'For the same \\(f\\) as above, what are the domain and range?',
    correct: 'Domain: all real \\(x\\); range: \\(y \\ge -9\\)',
    distractors: [
      'Domain: \\(x \\ge 3\\); range: \\(y \\ge -9\\)',
      'Domain: all real \\(x\\); range: \\(y \\ge 0\\)',
      'Domain: all real \\(x\\); range: \\(y > -9\\)',
    ],
    a: nextA(),
    solutionSteps: [
      step('Pieces cover all reals; domain is \\(\\mathbb{R}\\).', '\\(D = \\mathbb{R}\\)'),
      step('Left branch has minimum \\(-9\\) at \\(x = 0\\); right branch gives \\(y \\ge 0\\).', '\\(y \\ge -9\\)'),
      step('Combined range is \\(y \\ge -9\\).', '\\(R = [-9, \\infty)\\)'),
    ],
  })
);

// Teacher-review sketches with model SVG
const sketches = [
  {
    id: 'y11a-5i-q8d',
    q: 'Sketch the graph of \\(y = |x| + 4\\), indicating the vertex.',
    answer: 'V-shaped graph with vertex at \\((0, 4)\\).',
    svg: absSvg(0, 4, 'y = |x| + 4'),
    steps: [
      step('Start from \\(y = |x|\\) with vertex \\((0, 0)\\).', '\\(y = |x|\\)'),
      step('Add \\(4\\): shift up by \\(4\\). Vertex moves to \\((0, 4)\\).', '\\((0, 4)\\)'),
      step('Sketch the V with arms of slope \\(\\pm 1\\).', '\\(y = |x| + 4\\)'),
    ],
  },
  {
    id: 'y11a-5i-q12b-sketch',
    q: 'Sketch \\(y = (x - 3)^2 - 7\\), marking the vertex and intercepts.',
    answer: 'Upright parabola, vertex \\((3, -7)\\); \\(y\\)-int \\((0, 2)\\); \\(x\\)-ints \\((3 \\pm \\sqrt{7}, 0)\\).',
    svg: parabolaSvg(3, -7, 1, 'y=(x−3)²−7', [
      { x: 0, y: 2, label: 'y-int (0,2)', color: '#f59e0b', dx: 6, dy: -8 },
      { x: 3 + Math.sqrt(7), y: 0, label: '(3+√7,0)', color: '#f59e0b', dx: 4, dy: 14 },
      { x: 3 - Math.sqrt(7), y: 0, label: '(3−√7,0)', color: '#f59e0b', dx: -52, dy: 14 },
    ]),
    steps: [
      step('Vertex form already gives vertex \\((3, -7)\\).', '\\((3, -7)\\)'),
      step('\\(y\\)-intercept: set \\(x = 0\\) to get \\(2\\). \\(x\\)-ints: \\(3 \\pm \\sqrt{7}\\).', '\\((0, 2),\\ (3\\pm\\sqrt{7}, 0)\\)'),
      step('Sketch the upright parabola through these points.', '\\(\\text{sketch}\\)'),
    ],
  },
  {
    id: 'y11a-5i-q12c-sketch',
    q: 'Sketch \\(y = -(x - 2)^2 + 9\\), marking the vertex and intercepts.',
    answer: 'Downward parabola, vertex \\((2, 9)\\); intercepts \\((0, 5)\\), \\((-1, 0)\\), \\((5, 0)\\).',
    svg: parabolaSvg(2, 9, -1, 'y=−(x−2)²+9', [
      { x: 0, y: 5, label: '(0,5)', color: '#f59e0b', dx: -36, dy: -4 },
      { x: -1, y: 0, label: '(-1,0)', color: '#f59e0b', dx: -40, dy: 14 },
      { x: 5, y: 0, label: '(5,0)', color: '#f59e0b', dx: 6, dy: 14 },
    ]),
    steps: [
      step('Vertex \\((2, 9)\\); opens downward.', '\\((2, 9)\\)'),
      step('Mark intercepts \\((0, 5)\\), \\((-1, 0)\\), \\((5, 0)\\).', '\\(\\text{intercepts}\\)'),
      step('Sketch the inverted parabola.', '\\(\\text{sketch}\\)'),
    ],
  },
  {
    id: 'y11a-5i-q12d-sketch',
    q: 'Sketch \\(y = (x - 1)^2 - 4\\), marking the vertex and intercepts.',
    answer: 'Upright parabola, vertex \\((1, -4)\\); intercepts \\((0, -3)\\), \\((-1, 0)\\), \\((3, 0)\\).',
    svg: parabolaSvg(1, -4, 1, 'y=(x−1)²−4', [
      { x: 0, y: -3, label: '(0,−3)', color: '#f59e0b', dx: 6, dy: 12 },
      { x: -1, y: 0, label: '(-1,0)', color: '#f59e0b', dx: -42, dy: -8 },
      { x: 3, y: 0, label: '(3,0)', color: '#f59e0b', dx: 6, dy: -8 },
    ]),
    steps: [
      step('Vertex \\((1, -4)\\).', '\\((1, -4)\\)'),
      step('Mark intercepts \\((0, -3)\\), \\((-1, 0)\\), \\((3, 0)\\).', '\\(\\text{intercepts}\\)'),
      step('Sketch the upright parabola.', '\\(\\text{sketch}\\)'),
    ],
  },
  {
    id: 'y11a-5i-q19b',
    q: 'Sketch on one pair of axes: \\(y = -\\dfrac{1}{3}x\\), \\(y = -\\dfrac{1}{3}x + 2\\), \\(y = -\\dfrac{1}{3}x - 3\\).',
    answer: 'Three parallel lines, gradient \\(-\\dfrac{1}{3}\\), \\(y\\)-intercepts \\(0\\), \\(2\\), \\(-3\\).',
    svg: multiSvg({
      xmin: -6,
      xmax: 6,
      ymin: -5,
      ymax: 5,
      curves: [
        { fn: (x) => (-1 / 3) * x, x0: -6, x1: 6, color: '#6366f1' },
        { fn: (x) => (-1 / 3) * x + 2, x0: -6, x1: 6, color: '#22c55e' },
        { fn: (x) => (-1 / 3) * x - 3, x0: -6, x1: 6, color: '#f59e0b' },
      ],
      marks: [
        { x: 0, y: 0, label: '(0,0)', color: '#6366f1', dx: 6, dy: 14 },
        { x: 0, y: 2, label: '(0,2)', color: '#22c55e', dx: 6, dy: -6 },
        { x: 0, y: -3, label: '(0,−3)', color: '#f59e0b', dx: 6, dy: 14 },
      ],
      legend: [
        { color: '#6366f1', text: 'y=−x/3' },
        { color: '#22c55e', text: 'y=−x/3+2' },
        { color: '#f59e0b', text: 'y=−x/3−3' },
      ],
    }),
    steps: [
      step('All three lines share gradient \\(m = -\\dfrac{1}{3}\\).', '\\(m = -\\dfrac{1}{3}\\)'),
      step('\\(y\\)-intercepts are \\(0\\), \\(2\\) and \\(-3\\).', '\\((0,0),\\ (0,2),\\ (0,-3)\\)'),
      step('Sketch three parallel lines through these intercepts.', '\\(\\text{parallel lines}\\)'),
    ],
  },
  {
    id: 'y11a-5i-q19c',
    q: 'Sketch on one pair of axes: \\(y = x + 4\\), \\(y = 4 - x\\), \\(y = -x - 4\\).',
    answer: 'Three lines: slopes \\(1\\), \\(-1\\), \\(-1\\) with intercepts forming a triangular pattern.',
    svg: multiSvg({
      xmin: -6,
      xmax: 6,
      ymin: -6,
      ymax: 6,
      curves: [
        { fn: (x) => x + 4, x0: -6, x1: 2, color: '#6366f1' },
        { fn: (x) => 4 - x, x0: -2, x1: 6, color: '#22c55e' },
        { fn: (x) => -x - 4, x0: -6, x1: 2, color: '#f59e0b' },
      ],
      marks: [
        { x: 0, y: 4, label: '(0,4)', color: '#6366f1', dx: 6, dy: -6 },
        { x: -4, y: 0, label: '(-4,0)', color: '#6366f1', dx: -42, dy: -8 },
        { x: 4, y: 0, label: '(4,0)', color: '#22c55e', dx: 6, dy: -8 },
        { x: 0, y: -4, label: '(0,−4)', color: '#f59e0b', dx: 6, dy: 14 },
      ],
      legend: [
        { color: '#6366f1', text: 'y=x+4' },
        { color: '#22c55e', text: 'y=4−x' },
        { color: '#f59e0b', text: 'y=−x−4' },
      ],
    }),
    steps: [
      step('\\(y = x + 4\\): intercepts \\((0, 4)\\), \\((-4, 0)\\).', '\\(y = x + 4\\)'),
      step('\\(y = 4 - x\\): intercepts \\((0, 4)\\), \\((4, 0)\\).', '\\(y = 4 - x\\)'),
      step('\\(y = -x - 4\\): intercepts \\((0, -4)\\), \\((-4, 0)\\). Sketch all three.', '\\(y = -x - 4\\)'),
    ],
  },
  {
    id: 'y11a-5i-q19g',
    q: 'Sketch on one pair of axes: \\(y = x^2 - 4\\), \\(y = 4 - x^2\\), \\(y = 9 - x^2\\).',
    answer: 'One upright parabola vertex \\((0, -4)\\); two inverted with vertices \\((0, 4)\\) and \\((0, 9)\\).',
    svg: multiSvg({
      xmin: -3.5,
      xmax: 3.5,
      ymin: -5,
      ymax: 10,
      curves: [
        { fn: (x) => x * x - 4, x0: -3.5, x1: 3.5, color: '#6366f1' },
        { fn: (x) => 4 - x * x, x0: -3.2, x1: 3.2, color: '#22c55e' },
        { fn: (x) => 9 - x * x, x0: -3.2, x1: 3.2, color: '#f59e0b' },
      ],
      marks: [
        { x: 0, y: -4, label: 'V(0,−4)', color: '#6366f1', dx: 8, dy: 12 },
        { x: 0, y: 4, label: 'V(0,4)', color: '#22c55e', dx: 8, dy: -6 },
        { x: 0, y: 9, label: 'V(0,9)', color: '#f59e0b', dx: 8, dy: -6 },
        { x: 2, y: 0, label: '(±2,0)', color: '#64748b', dx: 6, dy: 14 },
        { x: -2, y: 0, label: '', color: '#64748b' },
        { x: 3, y: 0, label: '(±3,0)', color: '#f59e0b', dx: 6, dy: -8 },
        { x: -3, y: 0, label: '', color: '#f59e0b' },
      ],
      legend: [
        { color: '#6366f1', text: 'y=x²−4' },
        { color: '#22c55e', text: 'y=4−x²' },
        { color: '#f59e0b', text: 'y=9−x²' },
      ],
    }),
    steps: [
      step('\\(y = x^2 - 4\\): opens up, vertex \\((0, -4)\\), \\(x\\)-ints \\(\\pm 2\\).', '\\((0, -4),\\ (\\pm2,0)\\)'),
      step('\\(y = 4 - x^2\\): opens down, vertex \\((0, 4)\\), \\(x\\)-ints \\(\\pm 2\\).', '\\((0,4),\\ (\\pm2,0)\\)'),
      step('\\(y = 9 - x^2\\): opens down, vertex \\((0, 9)\\), \\(x\\)-ints \\(\\pm 3\\).', '\\((0,9),\\ (\\pm3,0)\\)'),
    ],
  },
  {
    id: 'y11a-5i-q19j',
    q: 'Sketch on one pair of axes: \\(y = \\sqrt{x}\\), \\(y = \\sqrt{x} + 2\\), \\(y = \\sqrt{x + 2}\\).',
    answer: 'Three half-parabolas starting at \\((0, 0)\\), \\((0, 2)\\) and \\((-2, 0)\\).',
    svg: multiSvg({
      xmin: -2.5,
      xmax: 6,
      ymin: -0.5,
      ymax: 4.5,
      curves: [
        { fn: (x) => Math.sqrt(x), x0: 0, x1: 6, color: '#6366f1' },
        { fn: (x) => Math.sqrt(x) + 2, x0: 0, x1: 6, color: '#22c55e' },
        { fn: (x) => Math.sqrt(x + 2), x0: -2, x1: 6, color: '#f59e0b' },
      ],
      marks: [
        { x: 0, y: 0, label: '(0,0)', color: '#6366f1', dx: 8, dy: 14 },
        { x: 0, y: 2, label: '(0,2)', color: '#22c55e', dx: 8, dy: -6 },
        { x: -2, y: 0, label: '(-2,0)', color: '#f59e0b', dx: -48, dy: -8 },
        { x: 1, y: 1, label: '', color: '#6366f1', r: 0 },
      ],
      legend: [
        { color: '#6366f1', text: 'y=√x' },
        { color: '#22c55e', text: 'y=√x+2' },
        { color: '#f59e0b', text: 'y=√(x+2)' },
      ],
    }),
    steps: [
      step('\\(y = \\sqrt{x}\\) starts at \\((0, 0)\\).', '\\((0, 0)\\)'),
      step('\\(y = \\sqrt{x} + 2\\) is shifted up to start at \\((0, 2)\\).', '\\((0, 2)\\)'),
      step('\\(y = \\sqrt{x + 2}\\) is shifted left to start at \\((-2, 0)\\).', '\\((-2, 0)\\)'),
    ],
  },
  {
    id: 'y11a-5i-q19o',
    q: 'Sketch on one pair of axes: \\(y = \\sqrt{x}\\), \\(y = -\\sqrt{x}\\), \\(y = 3 - \\sqrt{x}\\).',
    answer: 'Half-parabolas from \\((0, 0)\\) up and down, and from \\((0, 3)\\) curving down.',
    svg: multiSvg({
      xmin: -0.5,
      xmax: 9.5,
      ymin: -3.5,
      ymax: 4,
      curves: [
        { fn: (x) => Math.sqrt(x), x0: 0, x1: 9, color: '#6366f1' },
        { fn: (x) => -Math.sqrt(x), x0: 0, x1: 9, color: '#22c55e' },
        { fn: (x) => 3 - Math.sqrt(x), x0: 0, x1: 9, color: '#f59e0b' },
      ],
      marks: [
        { x: 0, y: 0, label: '(0,0)', color: '#6366f1', dx: 8, dy: 14 },
        { x: 0, y: 3, label: '(0,3)', color: '#f59e0b', dx: 8, dy: -6 },
        { x: 9, y: 0, label: '(9,0)', color: '#f59e0b', dx: -36, dy: -8 },
      ],
      legend: [
        { color: '#6366f1', text: 'y=√x' },
        { color: '#22c55e', text: 'y=−√x' },
        { color: '#f59e0b', text: 'y=3−√x' },
      ],
    }),
    steps: [
      step('\\(y = \\sqrt{x}\\) and \\(y = -\\sqrt{x}\\) meet at \\((0, 0)\\) (reflections).', '\\((0, 0)\\)'),
      step('\\(y = 3 - \\sqrt{x}\\) starts at \\((0, 3)\\) and decreases; meets \\(x\\)-axis at \\((9, 0)\\).', '\\((0, 3)\\)'),
      step('Sketch all three half-parabolas for \\(x \\ge 0\\).', '\\(\\text{sketch}\\)'),
    ],
  },
];

for (const sk of sketches) {
  const steps = sk.steps.map((s, i) =>
    i === sk.steps.length - 1 ? { ...s, graphData: { svg: sk.svg } } : s
  );
  ITEMS.push(tr({ id: sk.id, q: sk.q, answer: sk.answer, solutionSteps: steps }));
}

// ── I/O ─────────────────────────────────────────────────────────────────────

function toFsDoc(q) {
  const isMC = q.type === 'multiple_choice';
  const isTR = q.type === 'teacher_review';
  const doc = {
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
    isNew: true,
    requiresManualGrading: isTR,
    isActive: true,
    subQuestions: FieldValue.delete(),
    updatedAt: FieldValue.serverTimestamp(),
  };
  // Only set stem graphData when intentionally provided (given diagrams).
  // Clear otherwise so model sketches never spoil the stem.
  if (q.graphData) doc.graphData = q.graphData;
  else doc.graphData = FieldValue.delete();
  return doc;
}

function validate(items) {
  for (const q of items) {
    if (q.type === 'multiple_choice') {
      if (q.opts.length !== 4) throw new Error(`${q.id}: opts`);
      if ((q.solutionSteps || []).length < 3) throw new Error(`${q.id}: steps`);
    }
    const j = JSON.stringify(q);
    const o = (j.match(/\\\(/g) || []).length;
    const c = (j.match(/\\\)/g) || []).length;
    if (o !== c) throw new Error(`${q.id}: parity ${o}/${c}`);
    if (/\$[^$]+\$/.test(q.q)) throw new Error(`${q.id}: dollar math`);
  }
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

async function main() {
  console.log('Built', ITEMS.length, 'items; aDist', aDist);
  validate(ITEMS);
  const byId = Object.fromEntries(ITEMS.map((q) => [q.id, q]));

  // Seed: replace/add all 5I items
  const { arr, rest } = loadSeed();
  let newArr = arr.filter((q) => q.c !== '5I');
  for (const q of ITEMS) newArr.push(q);
  writeFileSync(
    SEED_PATH,
    `export const CH5_QUESTIONS_Y11A = ${JSON.stringify(newArr, null, 2)};\n\n` + rest,
    'utf8'
  );
  console.log(
    'Seed 5I',
    newArr.filter((q) => q.c === '5I').length,
    'MC',
    newArr.filter((q) => q.c === '5I' && q.type === 'multiple_choice').length,
    'TR',
    newArr.filter((q) => q.c === '5I' && q.type === 'teacher_review').length
  );

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

  const existing = await db.collection('questions').where('topicId', '==', 'y11a-5I').get();
  const existingMap = Object.fromEntries(existing.docs.map((d) => [d.id, d.data()]));
  console.log('FS existing 5I', existing.size);

  // Deactivate multiparts replaced by split ids
  for (const id of ['y11a-5i-q22', 'y11a-5i-q23']) {
    if (existingMap[id]?.origin !== 'teacher') {
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
      if (existingMap[id]?.origin === 'teacher') {
        console.warn('skip teacher', id);
        continue;
      }
      batch.set(db.collection('questions').doc(id), toFsDoc(byId[id]), { merge: true });
      written++;
    }
    await batch.commit();
  }
  console.log('Firestore written', written);

  const ver = Date.now();
  await db.collection('sync_meta').doc('questions').set(
    { version: ver, membershipVersion: ver, updatedAt: FieldValue.serverTimestamp() },
    { merge: true }
  );

  const after = await db.collection('questions').where('topicId', '==', 'y11a-5I').get();
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
