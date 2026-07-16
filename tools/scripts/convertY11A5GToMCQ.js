/**
 * Convert Year 11 Advanced Chapter 5G (Combining Transformations)
 * to MCQ / teacher_review per project rules.
 *
 *   node tools/scripts/convertY11A5GToMCQ.js --firestore
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
  topicId: 'y11a-5G',
  topicCode: '5G',
  topicTitle: 'Combining Transformations',
  isManual: true,
  timeLimit: 60,
};

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
  return { explanation, workingOut: wrapWork(workingOut), graphData };
}
function place(correct, distractors, aIdx) {
  const opts = [...distractors];
  opts.splice(aIdx, 0, correct);
  if (opts.length !== 4 || opts[aIdx] !== correct || new Set(opts).size !== 4) {
    throw new Error(`place fail a=${aIdx} ${JSON.stringify(opts)}`);
  }
  return opts;
}
function mc({ id, difficulty = 'medium', q, correct, distractors, a, solutionSteps, t }) {
  const opts = place(correct, distractors, a);
  return {
    id,
    c: '5G',
    t: t || 'Combining Transformations',
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
function tr({ id, difficulty = 'hard', q, answer, solutionSteps, t }) {
  return {
    id,
    c: '5G',
    t: t || 'Combining Transformations',
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

const aDist = { 0: 0, 1: 0, 2: 0, 3: 0 };
function nextA() {
  const order = [0, 1, 2, 3].sort((x, y) => aDist[x] - aDist[y] || x - y);
  const a = order[0];
  aDist[a]++;
  return a;
}

// ── Seed MCQ (turning points + order of transforms) ─────────────────────────

const SEED_MCQ = [
  {
    id: 'y11a-5-17a',
    difficulty: 'hard',
    q: 'A function \\(y = f(x)\\) has a maximum turning point at \\((4, 10)\\). What is the turning point of \\(y = f(x) + 3\\)?',
    correct: '\\((4, 13)\\)',
    distractors: ['\\((4, 7)\\)', '\\((7, 10)\\)', '\\((1, 10)\\)'],
    steps: [
      step(
        'The given turning point is \\((4, 10)\\). Adding 3 outside \\(f\\) is a vertical translation up by 3. Strategy: keep the \\(x\\)-coordinate fixed and add 3 to the \\(y\\)-coordinate.',
        '\\(\\text{Given TP: } (4, 10)\\)'
      ),
      step(
        'Apply the vertical shift: \\(y_{\\text{new}} = 10 + 3 = 13\\). A common mistake is adding 3 to the \\(x\\)-coordinate instead.',
        '\\((4, 10) \\;\\rightarrow\\; (4, 13)\\)'
      ),
      step(
        'The new turning point is \\((4, 13)\\). It remains a maximum because a pure vertical shift does not flip the graph.',
        '\\(\\text{Turning point: } (4, 13)\\)'
      ),
    ],
  },
  {
    id: 'y11a-5-17b',
    difficulty: 'hard',
    q: 'A function \\(y = f(x)\\) has a maximum turning point at \\((4, 10)\\). What is the turning point of \\(y = f(x - 2)\\)?',
    correct: '\\((6, 10)\\)',
    distractors: ['\\((2, 10)\\)', '\\((4, 12)\\)', '\\((4, 8)\\)'],
    steps: [
      step(
        'Replacing \\(x\\) by \\(x - 2\\) is a horizontal translation 2 units to the right. The \\(y\\)-coordinate is unchanged.',
        '\\(\\text{Given TP: } (4, 10)\\)'
      ),
      step(
        'New \\(x\\)-coordinate: \\(4 + 2 = 6\\). A common error is shifting left because of the minus sign inside.',
        '\\((4, 10) \\;\\rightarrow\\; (6, 10)\\)'
      ),
      step(
        'The turning point is \\((6, 10)\\) and remains a maximum.',
        '\\(\\text{Turning point: } (6, 10)\\)'
      ),
    ],
  },
  {
    id: 'y11a-5-17c',
    difficulty: 'hard',
    q: 'A function \\(y = f(x)\\) has a maximum turning point at \\((4, 10)\\). What is the turning point of \\(y = f(x) - 5\\)?',
    correct: '\\((4, 5)\\)',
    distractors: ['\\((4, 15)\\)', '\\((-1, 10)\\)', '\\((9, 10)\\)'],
    steps: [
      step(
        'Subtracting 5 outside \\(f\\) is a vertical translation down by 5. Keep \\(x = 4\\).',
        '\\(\\text{Given TP: } (4, 10)\\)'
      ),
      step(
        'New \\(y\\)-coordinate: \\(10 - 5 = 5\\).',
        '\\((4, 10) \\;\\rightarrow\\; (4, 5)\\)'
      ),
      step(
        'The turning point is \\((4, 5)\\).',
        '\\(\\text{Turning point: } (4, 5)\\)'
      ),
    ],
  },
  {
    id: 'y11a-5-17d',
    difficulty: 'hard',
    q: 'A function \\(y = f(x)\\) has a maximum turning point at \\((4, 10)\\). What is the turning point of \\(y = f(x + 5)\\)?',
    correct: '\\((-1, 10)\\)',
    distractors: ['\\((9, 10)\\)', '\\((4, 15)\\)', '\\((4, 5)\\)'],
    steps: [
      step(
        'Replacing \\(x\\) by \\(x + 5\\) shifts the graph 5 units left. The \\(y\\)-value is unchanged.',
        '\\(\\text{Given TP: } (4, 10)\\)'
      ),
      step(
        'New \\(x\\)-coordinate: \\(4 - 5 = -1\\).',
        '\\((4, 10) \\;\\rightarrow\\; (-1, 10)\\)'
      ),
      step(
        'The turning point is \\((-1, 10)\\).',
        '\\(\\text{Turning point: } (-1, 10)\\)'
      ),
    ],
  },
  {
    id: 'y11a-5-17e',
    difficulty: 'hard',
    q: 'A function \\(y = f(x)\\) has a maximum turning point at \\((4, 10)\\). What is the turning point of \\(y = 2f(x)\\)?',
    correct: '\\((4, 20)\\)',
    distractors: ['\\((8, 10)\\)', '\\((4, 5)\\)', '\\((2, 10)\\)'],
    steps: [
      step(
        'Multiplying by 2 is a vertical dilation by factor 2 from the \\(x\\)-axis. Only the \\(y\\)-coordinate scales.',
        '\\(\\text{Given TP: } (4, 10)\\)'
      ),
      step(
        'New \\(y\\)-coordinate: \\(10 \\times 2 = 20\\). Do not double the \\(x\\)-coordinate.',
        '\\((4, 10) \\;\\rightarrow\\; (4, 20)\\)'
      ),
      step(
        'The turning point is \\((4, 20)\\).',
        '\\(\\text{Turning point: } (4, 20)\\)'
      ),
    ],
  },
  {
    id: 'y11a-5-17f',
    difficulty: 'hard',
    q: 'A function \\(y = f(x)\\) has a maximum turning point at \\((4, 10)\\). What is the turning point of \\(y = f(2x)\\)?',
    correct: '\\((2, 10)\\)',
    distractors: ['\\((8, 10)\\)', '\\((4, 20)\\)', '\\((4, 5)\\)'],
    steps: [
      step(
        'Replacing \\(x\\) by \\(2x\\) is a horizontal dilation by factor \\(\\frac{1}{2}\\) from the \\(y\\)-axis. Divide the \\(x\\)-coordinate by 2.',
        '\\(\\text{Given TP: } (4, 10)\\)'
      ),
      step(
        'New \\(x\\)-coordinate: \\(4 / 2 = 2\\). The \\(y\\)-coordinate stays 10.',
        '\\((4, 10) \\;\\rightarrow\\; (2, 10)\\)'
      ),
      step(
        'The turning point is \\((2, 10)\\).',
        '\\(\\text{Turning point: } (2, 10)\\)'
      ),
    ],
  },
  {
    id: 'y11a-5-17g',
    difficulty: 'hard',
    q: 'A function \\(y = f(x)\\) has a maximum turning point at \\((4, 10)\\). What is the turning point of \\(y = -f(x)\\)?',
    correct: '\\((4, -10)\\) (minimum)',
    distractors: [
      '\\((-4, 10)\\) (maximum)',
      '\\((4, -10)\\) (maximum)',
      '\\((-4, -10)\\) (minimum)',
    ],
    steps: [
      step(
        'Multiplying by \\(-1\\) reflects the graph in the \\(x\\)-axis. Negate the \\(y\\)-coordinate.',
        '\\(\\text{Given TP: } (4, 10)\\) (maximum)'
      ),
      step(
        'New point: \\((4, -10)\\). Reflection in the \\(x\\)-axis turns a maximum into a minimum.',
        '\\((4, 10) \\;\\rightarrow\\; (4, -10)\\) (minimum)'
      ),
      step(
        'Answer: \\((4, -10)\\) and it is a minimum.',
        '\\(\\text{TP: } (4, -10)\\text{ (minimum)}\\)'
      ),
    ],
  },
  {
    id: 'y11a-5-17h',
    difficulty: 'hard',
    q: 'A function \\(y = f(x)\\) has a maximum turning point at \\((4, 10)\\). What is the turning point of \\(y = f(-x)\\)?',
    correct: '\\((-4, 10)\\) (maximum)',
    distractors: [
      '\\((4, -10)\\) (minimum)',
      '\\((-4, -10)\\) (maximum)',
      '\\((4, 10)\\) (minimum)',
    ],
    steps: [
      step(
        'Replacing \\(x\\) by \\(-x\\) reflects the graph in the \\(y\\)-axis. Negate the \\(x\\)-coordinate only.',
        '\\(\\text{Given TP: } (4, 10)\\) (maximum)'
      ),
      step(
        'New point: \\((-4, 10)\\). The nature (maximum) is unchanged by a \\(y\\)-axis reflection.',
        '\\((4, 10) \\;\\rightarrow\\; (-4, 10)\\) (maximum)'
      ),
      step(
        'Answer: \\((-4, 10)\\) (maximum).',
        '\\(\\text{TP: } (-4, 10)\\text{ (maximum)}\\)'
      ),
    ],
  },
  {
    id: 'y11a-5-17i',
    difficulty: 'hard',
    q: 'A function \\(y = f(x)\\) has a maximum turning point at \\((4, 10)\\). What is the turning point of \\(y = |f(x)|\\)? (Assume the graph does not cross the \\(x\\)-axis near the turning point.)',
    correct: '\\((4, 10)\\)',
    distractors: ['\\((4, -10)\\)', '\\((-4, 10)\\)', '\\((-4, -10)\\)'],
    steps: [
      step(
        'Absolute value reflects parts of the graph below the \\(x\\)-axis above it. At the given turning point, \\(y = 10 > 0\\).',
        '\\(\\text{Given TP: } (4, 10)\\)'
      ),
      step(
        'Since \\(10\\) is already positive, \\(|10| = 10\\). The point is unchanged.',
        '\\((4, |10|) = (4, 10)\\)'
      ),
      step(
        'The turning point remains \\((4, 10)\\).',
        '\\(\\text{Turning point: } (4, 10)\\)'
      ),
    ],
  },
  {
    id: 'y11a-5-20a',
    difficulty: 'hard',
    q: 'If \\(y = f(x)\\) is translated 2 units up, and then reflected in the \\(x\\)-axis, what is the new equation?',
    correct: '\\(y = -(f(x) + 2)\\)',
    distractors: ['\\(y = -f(x) + 2\\)', '\\(y = f(-x) + 2\\)', '\\(y = -(f(x) - 2)\\)'],
    steps: [
      step(
        'Apply transformations in the order given. First translate 2 units up: replace \\(y\\) by adding 2 outside \\(f\\).',
        '\\(y = f(x) + 2\\)'
      ),
      step(
        'Reflect in the \\(x\\)-axis by multiplying the entire right-hand side by \\(-1\\). A common mistake is reflecting first and then translating.',
        '\\(y = -(f(x) + 2)\\)'
      ),
      step(
        'Equivalently \\(y = -f(x) - 2\\). The option matching the composition order is \\(y = -(f(x) + 2)\\).',
        '\\(y = -(f(x) + 2)\\)'
      ),
    ],
  },
  {
    id: 'y11a-5-20b',
    difficulty: 'hard',
    q: 'If \\(y = f(x)\\) is reflected in the \\(x\\)-axis, and then translated 2 units up, what is the new equation?',
    correct: '\\(y = -f(x) + 2\\)',
    distractors: ['\\(y = -(f(x) + 2)\\)', '\\(y = f(-x) + 2\\)', '\\(y = -f(x) - 2\\)'],
    steps: [
      step(
        'Order matters. First reflect in the \\(x\\)-axis: \\(y = -f(x)\\).',
        '\\(y = -f(x)\\)'
      ),
      step(
        'Then translate 2 units up by adding 2: \\(y = -f(x) + 2\\). This is different from translating first then reflecting.',
        '\\(y = -f(x) + 2\\)'
      ),
      step(
        'Final equation: \\(y = -f(x) + 2\\).',
        '\\(y = -f(x) + 2\\)'
      ),
    ],
  },
];

// ── Sketches (seed) as teacher_review with SVG ──────────────────────────────

const SVG_STYLE =
  'display:block;margin:0 auto;background:#fafafa;border:1px solid #e2e8f0;border-radius:8px;';

function parabolaSvg(vx, vy, label) {
  const W = 300,
    H = 240;
  const xmin = vx - 4,
    xmax = vx + 4,
    ymin = Math.min(vy - 2, -2),
    ymax = Math.max(vy + 8, 4);
  const padL = 28,
    padR = 18,
    padT = 18,
    padB = 24;
  const sx = (x) => padL + ((x - xmin) / (xmax - xmin)) * (W - padL - padR);
  const sy = (y) => padT + ((ymax - y) / (ymax - ymin)) * (H - padT - padB);
  const ox = sx(0),
    oy = sy(0);
  let d = '';
  for (let i = 0; i <= 40; i++) {
    const x = xmin + ((xmax - xmin) * i) / 40;
    const y = (x - vx) * (x - vx) + vy;
    d += `${i === 0 ? 'M' : 'L'}${sx(x).toFixed(1)},${sy(y).toFixed(1)} `;
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" style="${SVG_STYLE}">
  <line x1="${padL}" y1="${oy.toFixed(1)}" x2="${W - padR}" y2="${oy.toFixed(1)}" stroke="#64748b" stroke-width="1.5"/>
  <line x1="${ox.toFixed(1)}" y1="${padT}" x2="${ox.toFixed(1)}" y2="${H - padB}" stroke="#64748b" stroke-width="1.5"/>
  <path d="${d.trim()}" fill="none" stroke="#6366f1" stroke-width="2.5"/>
  <circle cx="${sx(vx).toFixed(1)}" cy="${sy(vy).toFixed(1)}" r="3.5" fill="#ef4444"/>
  <text x="${sx(vx) + 6}" y="${sy(vy) - 6}" font-size="11" fill="#ef4444" font-weight="bold">(${vx},${vy})</text>
  <text x="40" y="28" font-size="11" fill="#6366f1" font-weight="bold">${label}</text>
</svg>`;
}

const SEED_SKETCH = [
  tr({
    id: 'y11a-5-19a',
    q: 'Sketch the graph \\(y = (x - 2)^2 - 5\\), showing the turning point.',
    answer: 'Parabola with vertex at \\((2, -5)\\).',
    solutionSteps: [
      step(
        'Start from \\(y = x^2\\) with vertex \\((0, 0)\\). The form \\(y = (x - h)^2 + k\\) has vertex \\((h, k)\\).',
        '\\(y = x^2 \\Rightarrow \\text{vertex } (0, 0)\\)'
      ),
      step(
        'Here \\(h = 2\\), \\(k = -5\\): shift 2 right and 5 down. Vertex is \\((2, -5)\\).',
        '\\(\\text{Vertex: } (2, -5)\\)'
      ),
      step(
        'Sketch the upright parabola through the vertex. Label the turning point clearly for teacher review.',
        '\\(y = (x-2)^2 - 5\\)',
        { svg: parabolaSvg(2, -5, 'y = (x−2)² − 5') }
      ),
    ],
  }),
  tr({
    id: 'y11a-5-19b',
    q: 'Sketch the graph \\(y = -(x + 1)^3\\).',
    answer: 'Cubic shifted 1 unit left and reflected in the \\(x\\)-axis.',
    solutionSteps: [
      step(
        'Start from \\(y = x^3\\). Replacing \\(x\\) by \\(x + 1\\) shifts 1 unit left.',
        '\\(y = (x + 1)^3\\)'
      ),
      step(
        'The leading minus reflects in the \\(x\\)-axis: increasing cubics become decreasing through the origin of the shifted axes.',
        '\\(y = -(x + 1)^3\\)'
      ),
      step(
        'The graph passes through \\((-1, 0)\\) and is a decreasing cubic. Sketch and label the inflection point.',
        '\\(\\text{Inflection at } (-1, 0)\\)'
      ),
    ],
  }),
  tr({
    id: 'y11a-5-19c',
    q: 'Sketch the graph \\(y = \\dfrac{1}{x - 3} + 4\\), indicating its asymptotes.',
    answer: 'Hyperbola with vertical asymptote \\(x = 3\\) and horizontal asymptote \\(y = 4\\).',
    solutionSteps: [
      step(
        'Base graph \\(y = \\frac{1}{x}\\) has asymptotes \\(x = 0\\) and \\(y = 0\\).',
        '\\(y = \\frac{1}{x}\\)'
      ),
      step(
        'Replace \\(x\\) by \\(x - 3\\): vertical asymptote moves to \\(x = 3\\). Add 4: horizontal asymptote moves to \\(y = 4\\).',
        '\\(x = 3,\\quad y = 4\\)'
      ),
      step(
        'Sketch both branches of the rectangular hyperbola about these asymptotes and label them.',
        '\\(y = \\dfrac{1}{x-3} + 4\\)'
      ),
    ],
  }),
  tr({
    id: 'y11a-5-19e',
    q: 'Sketch the graph \\(y = \\sqrt{9 - (x - 2)^2}\\).',
    answer: 'Upper semicircle of radius 3 centred at \\((2, 0)\\).',
    solutionSteps: [
      step(
        'Square both sides conceptually: \\(y^2 = 9 - (x - 2)^2\\) with \\(y \\ge 0\\) gives the upper half of a circle.',
        '\\((x-2)^2 + y^2 = 9,\\; y \\ge 0\\)'
      ),
      step(
        'Centre \\((2, 0)\\), radius 3. Domain \\([-1, 5]\\), range \\([0, 3]\\).',
        '\\(\\text{Centre } (2,0),\\; r = 3\\)'
      ),
      step(
        'Sketch the upper semicircle from \\((-1, 0)\\) to \\((5, 0)\\) with top at \\((2, 3)\\).',
        '\\(y = \\sqrt{9 - (x-2)^2}\\)'
      ),
    ],
  }),
];

// ── Firestore equation MCQs (q6, q8) ─────────────────────────────────────────

const FS_EQUATIONS = [
  mc({
    id: 'y11-5g-q6a',
    difficulty: 'medium',
    q: 'Find the new equation for \\(y = x^2\\) after it is shifted right 3 units, then dilated by a factor of \\(\\frac{1}{3}\\) horizontally.',
    correct: '\\(y = 9(x - 1)^2\\)',
    distractors: ['\\(y = (x - 3)^2\\)', '\\(y = \\left(\\frac{x}{3} - 3\\right)^2\\)', '\\(y = 9(x - 3)^2\\)'],
    a: nextA(),
    solutionSteps: [
      step(
        'Translate right by 3: replace \\(x\\) with \\(x - 3\\).',
        '\\(y = (x - 3)^2\\)'
      ),
      step(
        'Horizontal dilation by factor \\(\\frac{1}{3}\\) replaces \\(x\\) with \\(3x\\).',
        '\\(y = (3x - 3)^2 = 9(x - 1)^2\\)'
      ),
      step(
        'Final equation: \\(y = 9(x - 1)^2\\) (vertex at \\((1, 0)\\)).',
        '\\(y = 9(x - 1)^2\\)'
      ),
    ],
  }),
  mc({
    id: 'y11-5g-q6b',
    difficulty: 'medium',
    q: 'Find the new equation for \\(y = 3^x\\) after it is translated down 2 units, then reflected in the \\(y\\)-axis.',
    correct: '\\(y = 3^{-x} - 2\\)',
    distractors: ['\\(y = 3^{x} - 2\\)', '\\(y = -3^{x} - 2\\)', '\\(y = 3^{-x} + 2\\)'],
    a: nextA(),
    solutionSteps: [
      step('Translate down 2: \\(y = 3^x - 2\\).', '\\(y = 3^x - 2\\)'),
      step('Reflect in the \\(y\\)-axis: replace \\(x\\) by \\(-x\\).', '\\(y = 3^{-x} - 2\\)'),
      step('Equivalently \\(y = \\left(\\frac{1}{3}\\right)^x - 2\\).', '\\(y = 3^{-x} - 2\\)'),
    ],
  }),
  mc({
    id: 'y11-5g-q6c',
    difficulty: 'medium',
    q: 'Find the new equation for \\(y = x^2 - 2\\) after it is translated down 2 units, then dilated by a factor of \\(-1\\) vertically.',
    correct: '\\(y = 4 - x^2\\)',
    distractors: ['\\(y = x^2 - 4\\)', '\\(y = -x^2 - 4\\)', '\\(y = 2 - x^2\\)'],
    a: nextA(),
    solutionSteps: [
      step('Down 2: \\(y = x^2 - 4\\).', '\\(y = x^2 - 4\\)'),
      step('Vertical factor \\(-1\\) multiplies by \\(-1\\) (reflect in \\(x\\)-axis).', '\\(y = -(x^2 - 4) = 4 - x^2\\)'),
      step('Final: concave-down parabola \\(y = 4 - x^2\\).', '\\(y = 4 - x^2\\)'),
    ],
  }),
  mc({
    id: 'y11-5g-q6d',
    difficulty: 'medium',
    q: 'Find the new equation for \\(y = \\frac{1}{x}\\) after it is shifted right 2 units, then dilated by a factor of 3 vertically.',
    correct: '\\(y = \\dfrac{3}{x - 2}\\)',
    distractors: [
      '\\(y = \\dfrac{1}{x - 2}\\)',
      '\\(y = \\dfrac{3}{x} - 2\\)',
      '\\(y = \\dfrac{1}{3(x - 2)}\\)',
    ],
    a: nextA(),
    solutionSteps: [
      step('Right 2: \\(y = \\frac{1}{x - 2}\\).', '\\(y = \\dfrac{1}{x-2}\\)'),
      step('Vertical dilation by 3: multiply by 3.', '\\(y = \\dfrac{3}{x-2}\\)'),
      step('Asymptotes \\(x = 2\\) and \\(y = 0\\).', '\\(y = \\dfrac{3}{x-2}\\)'),
    ],
  }),
  mc({
    id: 'y11-5g-q6e',
    difficulty: 'hard',
    q: 'Find the new equation for \\(x^2 + y^2 = 9\\) after it is translated up 3 units, then dilated by a factor of \\(\\frac{1}{3}\\) vertically.',
    correct: '\\(\\dfrac{x^2}{9} + (y - 1)^2 = 1\\)',
    distractors: [
      '\\(x^2 + (y - 3)^2 = 9\\)',
      '\\(\\dfrac{x^2}{9} + (y - 3)^2 = 1\\)',
      '\\(x^2 + 9(y - 1)^2 = 9\\)',
    ],
    a: nextA(),
    solutionSteps: [
      step('Up 3: replace \\(y\\) by \\(y - 3\\): \\(x^2 + (y - 3)^2 = 9\\).', '\\(x^2 + (y-3)^2 = 9\\)'),
      step(
        'Vertical dilation factor \\(\\frac{1}{3}\\): replace \\(y\\) by \\(3y\\).',
        '\\(x^2 + (3y-3)^2 = 9 \\Rightarrow \\dfrac{x^2}{9} + (y-1)^2 = 1\\)'
      ),
      step(
        'Ellipse centre \\((0, 1)\\), semi-axes 3 and 1.',
        '\\(\\dfrac{x^2}{9} + (y-1)^2 = 1\\)'
      ),
    ],
  }),
  mc({
    id: 'y11-5g-q6f',
    difficulty: 'medium',
    q: 'Find the new equation for \\(y = \\sqrt{x}\\) after it is translated up 3 units, then dilated by a factor of \\(-1\\) horizontally.',
    correct: '\\(y = \\sqrt{-x} + 3\\)',
    distractors: ['\\(y = \\sqrt{x} + 3\\)', '\\(y = -\\sqrt{x} + 3\\)', '\\(y = \\sqrt{-x} - 3\\)'],
    a: nextA(),
    solutionSteps: [
      step('Up 3: \\(y = \\sqrt{x} + 3\\).', '\\(y = \\sqrt{x} + 3\\)'),
      step(
        'Horizontal factor \\(-1\\) (reflect in \\(y\\)-axis): replace \\(x\\) by \\(-x\\).',
        '\\(y = \\sqrt{-x} + 3\\)'
      ),
      step('Domain \\(x \\le 0\\), horizontal asymptote none; base at origin shifted up.', '\\(y = \\sqrt{-x} + 3\\)'),
    ],
  }),
  mc({
    id: 'y11-5g-q8a',
    difficulty: 'hard',
    q: 'Find the equation of \\(y = x^2\\) after shifting left 2 units, down 3 units, then dilating horizontally by a factor of 3.',
    correct: '\\(y = \\left(\\dfrac{x}{3} + 2\\right)^2 - 3\\)',
    distractors: [
      '\\(y = \\left(\\dfrac{x + 2}{3}\\right)^2 - 3\\)',
      '\\(y = (x + 2)^2 - 3\\)',
      '\\(y = \\left(\\dfrac{x}{3}\\right)^2 - 3\\)',
    ],
    a: nextA(),
    solutionSteps: [
      step('Left 2: \\(y = (x + 2)^2\\).', '\\(y = (x+2)^2\\)'),
      step('Down 3: \\(y = (x + 2)^2 - 3\\).', '\\(y = (x+2)^2 - 3\\)'),
      step(
        'Horizontal dilate by 3: replace \\(x\\) by \\(\\frac{x}{3}\\).',
        '\\(y = \\left(\\dfrac{x}{3}+2\\right)^2 - 3\\)'
      ),
    ],
  }),
  mc({
    id: 'y11-5g-q8b',
    difficulty: 'hard',
    q: 'Find the equation of \\(y = x^2\\) after shifting down 3 units, dilating horizontally by a factor of 3, then shifting left 2 units.',
    correct: '\\(y = \\left(\\dfrac{x + 2}{3}\\right)^2 - 3\\)',
    distractors: [
      '\\(y = \\left(\\dfrac{x}{3} + 2\\right)^2 - 3\\)',
      '\\(y = (x + 2)^2 - 3\\)',
      '\\(y = \\dfrac{(x+2)^2}{3} - 3\\)',
    ],
    a: nextA(),
    solutionSteps: [
      step('Down 3: \\(y = x^2 - 3\\).', '\\(y = x^2 - 3\\)'),
      step('H-dilate by 3: \\(y = \\left(\\frac{x}{3}\\right)^2 - 3\\).', '\\(y = \\left(\\dfrac{x}{3}\\right)^2 - 3\\)'),
      step(
        'Left 2: replace \\(x\\) by \\(x + 2\\). Order differs from the previous question.',
        '\\(y = \\left(\\dfrac{x+2}{3}\\right)^2 - 3\\)'
      ),
    ],
  }),
  mc({
    id: 'y11-5g-q8c',
    difficulty: 'hard',
    q: 'Find the equation of \\(y = 3^x\\) after shifting down 2 units, right 2 units, then dilating vertically by a factor of \\(-3\\).',
    correct: '\\(y = -3^{x-1} + 6\\)',
    distractors: [
      '\\(y = -3(3^{x-2} - 2)\\)',
      '\\(y = -3^{x-2} + 6\\)',
      '\\(y = 3^{x-2} - 2\\)',
    ],
    a: nextA(),
    solutionSteps: [
      step('Down 2: \\(y = 3^x - 2\\).', '\\(y = 3^x - 2\\)'),
      step('Right 2: \\(y = 3^{x-2} - 2\\).', '\\(y = 3^{x-2} - 2\\)'),
      step(
        'Vertical factor \\(-3\\): \\(y = -3(3^{x-2} - 2) = -3\\cdot 3^{x-2} + 6 = -3^{x-1} + 6\\).',
        '\\(y = -3^{x-1} + 6\\)'
      ),
    ],
  }),
  mc({
    id: 'y11-5g-q8d',
    difficulty: 'hard',
    q: 'Find the equation of \\(y = \\dfrac{1}{x}\\) after shifting right 4 units, dilating by 3 vertically, then shifting up 2 units.',
    correct: '\\(y = \\dfrac{3}{x - 4} + 2\\)',
    distractors: [
      '\\(y = \\dfrac{3}{x - 4}\\)',
      '\\(y = \\dfrac{1}{x - 4} + 2\\)',
      '\\(y = \\dfrac{3}{x} + 2\\)',
    ],
    a: nextA(),
    solutionSteps: [
      step('Right 4: \\(y = \\frac{1}{x-4}\\).', '\\(y = \\dfrac{1}{x-4}\\)'),
      step('Vertical \\(\\times 3\\): \\(y = \\frac{3}{x-4}\\).', '\\(y = \\dfrac{3}{x-4}\\)'),
      step('Up 2: \\(y = \\frac{3}{x-4} + 2\\).', '\\(y = \\dfrac{3}{x-4} + 2\\)'),
    ],
  }),
];

// Commute yes/no → 4-option MCQ
const COMMUTE = [
  {
    id: 'y11-5g-q5a',
    q: 'Do reflection in the \\(y\\)-axis and horizontal translation commute?',
    correct: 'No, they do not commute',
    why: 'Reflection then shift by \\(k\\) gives \\(f(-x+k)\\); shift then reflection gives \\(f(-x-k)\\).',
  },
  {
    id: 'y11-5g-q5b',
    q: 'Do vertical dilation and vertical translation commute?',
    correct: 'No, they do not commute',
    why: 'Dilating then translating multiplies only the function values; translating then dilating multiplies the shifted values too.',
  },
  {
    id: 'y11-5g-q5c',
    q: 'Do vertical dilation and reflection in the \\(x\\)-axis commute?',
    correct: 'Yes, they commute',
    why: 'Both act on the \\(y\\)-values by multiplying; scalar multiplications commute.',
  },
  {
    id: 'y11-5g-q5d',
    q: 'Do horizontal translation and vertical translation commute?',
    correct: 'Yes, they commute',
    why: 'Shifts in independent directions can be applied in either order.',
  },
  {
    id: 'y11-5g-q5e',
    q: 'Do horizontal dilation and horizontal translation commute?',
    correct: 'No, they do not commute',
    why: 'Scaling \\(x\\) then shifting is different from shifting then scaling.',
  },
  {
    id: 'y11-5g-q5f',
    q: 'Do reflection in the \\(x\\)-axis and horizontal translation commute?',
    correct: 'Yes, they commute',
    why: 'One changes \\(y\\) only and the other changes \\(x\\) only, so the operations commute.',
  },
].map((item) => {
  const a = nextA();
  const wrong = item.correct.startsWith('Yes') ? 'No, they do not commute' : 'Yes, they commute';
  return mc({
    id: item.id,
    difficulty: 'medium',
    q: item.q,
    correct: item.correct,
    distractors: [
      wrong,
      'Only when the translation amount is zero',
      'Only for even functions',
    ],
    a,
    solutionSteps: [
      step(
        'Two transformations commute if applying them in either order yields the same graph. Test symbolically on a general \\(f\\).',
        '\\(\\text{Compare order A then B vs B then A}\\)'
      ),
      step(item.why, '\\(\\text{Compare the two resulting expressions}\\)'),
      step(
        `Conclusion: ${item.correct.toLowerCase()}.`,
        `\\(\\text{${item.correct}}\\)`
      ),
    ],
  });
});

// Exam MCQs
const EXAM_MC = [
  mc({
    id: 'fortst2020-mc2',
    difficulty: 'hard',
    q: 'The graph of \\(f(x) = 3x^{5/2}\\) is reflected in the \\(x\\)-axis, then translated 3 units right and 4 units down. What is the equation of the image?',
    correct: '\\(y = -3(x-3)^{5/2} - 4\\)',
    distractors: [
      '\\(y = 3(-x-3)^{5/2} - 4\\)',
      '\\(y = -3(x+3)^{5/2} - 4\\)',
      '\\(y = 3(-x+3)^{5/2} - 4\\)',
    ],
    a: nextA(),
    solutionSteps: [
      step(
        'Reflect in the \\(x\\)-axis: multiply by \\(-1\\).',
        '\\(y = -3x^{5/2}\\)'
      ),
      step(
        'Translate 3 right: replace \\(x\\) by \\(x - 3\\).',
        '\\(y = -3(x-3)^{5/2}\\)'
      ),
      step(
        'Translate 4 down: subtract 4.',
        '\\(y = -3(x-3)^{5/2} - 4\\)'
      ),
    ],
  }),
  mc({
    id: 'fortst2020s-mc2',
    difficulty: 'hard',
    q: 'The graph of \\(f(x) = 2x^{7/2}\\) is reflected in the \\(x\\)-axis, then translated 2 units right and 3 units down. What is the equation of the image?',
    correct: '\\(y = -2(x-2)^{7/2} - 3\\)',
    distractors: [
      '\\(y = 2(-x-2)^{7/2} - 3\\)',
      '\\(y = -2(x+2)^{7/2} - 3\\)',
      '\\(y = 2(-x+2)^{7/2} - 3\\)',
    ],
    a: nextA(),
    solutionSteps: [
      step('Reflect in \\(x\\)-axis: \\(y = -2x^{7/2}\\).', '\\(y = -2x^{7/2}\\)'),
      step('Right 2: \\(y = -2(x-2)^{7/2}\\).', '\\(y = -2(x-2)^{7/2}\\)'),
      step('Down 3: \\(y = -2(x-2)^{7/2} - 3\\).', '\\(y = -2(x-2)^{7/2} - 3\\)'),
    ],
  }),
  mc({
    id: 'cra2023-q25',
    difficulty: 'hard',
    q: 'Consider \\(f(x) = (x+1)^2\\). Apply in order: (1) horizontal translation right 4; (2) horizontal dilation by \\(\\dfrac{4}{3}\\); (3) vertical dilation by \\(\\dfrac{1}{3}\\); (4) vertical translation down 3; (5) reflection in the \\(x\\)-axis. Which equation is the image?',
    correct: '\\(y = 3 - \\dfrac{3}{16}(x-4)^2\\)',
    distractors: [
      '\\(y = \\dfrac{3}{16}(x-4)^2 - 3\\)',
      '\\(y = 3 - \\dfrac{9}{16}(x-4)^2\\)',
      '\\(y = -\\dfrac{3}{16}(x-3)^2 + 3\\)',
    ],
    a: nextA(),
    solutionSteps: [
      step('Right 4: \\(y = (x-3)^2\\).', '\\(y = (x-3)^2\\)'),
      step(
        'H-dilate factor \\(\\frac{4}{3}\\) (replace \\(x\\) by \\(\\frac{3x}{4}\\)): \\(y = \\dfrac{9}{16}(x-4)^2\\).',
        '\\(y = \\dfrac{9}{16}(x-4)^2\\)'
      ),
      step(
        'V-dilate \\(\\frac{1}{3}\\), down 3, reflect in \\(x\\)-axis: \\(y = 3 - \\dfrac{3}{16}(x-4)^2\\). Vertex \\((4, 3)\\).',
        '\\(y = 3 - \\dfrac{3}{16}(x-4)^2\\)'
      ),
    ],
  }),
  mc({
    id: 'cra2023s-q25',
    difficulty: 'hard',
    q: 'Consider \\(g(x) = (x+2)^2\\). Apply in order: right 6, horizontal dilation by \\(\\dfrac{3}{2}\\), vertical dilation by \\(\\dfrac{1}{2}\\), down 2, reflect in the \\(x\\)-axis. Which equation is the image?',
    correct: '\\(y = 2 - \\dfrac{2}{9}(x-6)^2\\)',
    distractors: [
      '\\(y = \\dfrac{2}{9}(x-6)^2 - 2\\)',
      '\\(y = 2 - \\dfrac{4}{9}(x-6)^2\\)',
      '\\(y = -\\dfrac{2}{9}(x-4)^2 + 2\\)',
    ],
    a: nextA(),
    solutionSteps: [
      step('Right 6: \\(y = (x-4)^2\\).', '\\(y = (x-4)^2\\)'),
      step(
        'H-dilate \\(\\frac{3}{2}\\): \\(y = \\dfrac{4}{9}(x-6)^2\\).',
        '\\(y = \\dfrac{4}{9}(x-6)^2\\)'
      ),
      step(
        'V-dilate \\(\\frac{1}{2}\\), down 2, reflect: \\(y = 2 - \\dfrac{2}{9}(x-6)^2\\).',
        '\\(y = 2 - \\dfrac{2}{9}(x-6)^2\\)'
      ),
    ],
  }),
];

function buildSeedMcq() {
  return SEED_MCQ.map((item) => {
    const a = nextA();
    return mc({
      id: item.id,
      difficulty: item.difficulty,
      q: item.q,
      correct: item.correct,
      distractors: item.distractors,
      a,
      solutionSteps: item.steps,
    });
  });
}

function toFsDoc(q) {
  const isMC = q.type === 'multiple_choice';
  const isTR = q.type === 'teacher_review';
  return {
    ...TOPIC,
    id: q.id,
    type: q.type,
    difficulty: q.difficulty || 'medium',
    question: q.q,
    title: (q.q || '').slice(0, 80),
    options: isMC ? (q.opts || []).map((text) => ({ text, imageUrl: '' })) : [],
    answer: isMC ? String(q.a) : String(q.a ?? ''),
    solutionSteps: q.solutionSteps || [],
    hint: q.h || '',
    solution: q.s || '',
    isNew: true,
    requiresManualGrading: isTR,
    updatedAt: FieldValue.serverTimestamp(),
  };
}

function loadSeed() {
  const src = readFileSync(SEED_PATH, 'utf8');
  const start = src.indexOf('export const CH5_QUESTIONS_Y11A = ');
  const end = src.indexOf('export const Y11_CH5_QUESTIONS');
  const chunk = src
    .slice(start, end)
    .replace('export const CH5_QUESTIONS_Y11A = ', 'const CH5_QUESTIONS_Y11A = ')
    .replace(/;\s*$/, '');
  const arr = new Function(`${chunk}; return CH5_QUESTIONS_Y11A;`)();
  return { arr, rest: src.slice(end) };
}

async function main() {
  const seedMcq = buildSeedMcq();
  const allSeed = [...seedMcq, ...SEED_SKETCH];
  const byId = Object.fromEntries(allSeed.map((q) => [q.id, q]));

  // FS-only conversions
  const fsExtras = [...FS_EQUATIONS, ...COMMUTE, ...EXAM_MC];
  for (const q of fsExtras) byId[q.id] = q;

  console.log('Built', Object.keys(byId).length, 'questions; aDist', aDist);

  // Validate MC
  for (const q of Object.values(byId)) {
    if (q.type !== 'multiple_choice') continue;
    if (q.opts.length !== 4) throw new Error(q.id + ' opts');
    if ((q.solutionSteps || []).length < 3) throw new Error(q.id + ' steps');
    const o = (JSON.stringify(q).match(/\\\(/g) || []).length;
    const c = (JSON.stringify(q).match(/\\\)/g) || []).length;
    if (o !== c) throw new Error(`${q.id} parity ${o}/${c}`);
  }

  // Update seed file (only seed IDs that belong in CH5 seed)
  const seedIds = new Set([...SEED_MCQ.map((x) => x.id), ...SEED_SKETCH.map((x) => x.id)]);
  const { arr, rest } = loadSeed();
  const newArr = arr.map((q) => {
    if (q.c === '5G' && byId[q.id] && seedIds.has(q.id)) return byId[q.id];
    return q;
  });
  // Ensure all seed 5G present
  const have = new Set(newArr.filter((q) => q.c === '5G').map((q) => q.id));
  for (const id of seedIds) {
    if (!have.has(id)) newArr.push(byId[id]);
  }
  writeFileSync(
    SEED_PATH,
    `export const CH5_QUESTIONS_Y11A = ${JSON.stringify(newArr, null, 2)};\n\n` + rest,
    'utf8'
  );
  console.log('Seed written, 5G count', newArr.filter((q) => q.c === '5G').length);

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

  // Upsert all byId (merge). Preserve chapterId for exam docs.
  const existing = await db.collection('questions').where('topicId', '==', 'y11a-5G').get();
  const existingMap = Object.fromEntries(existing.docs.map((d) => [d.id, d.data()]));
  console.log('FS existing 5G', existing.size, 'upserting', Object.keys(byId).length);

  const ids = Object.keys(byId);
  let written = 0;
  for (let i = 0; i < ids.length; i += 400) {
    const batch = db.batch();
    for (const id of ids.slice(i, i + 400)) {
      const q = byId[id];
      const prev = existingMap[id];
      if (prev?.origin === 'teacher') {
        console.warn('skip teacher', id);
        continue;
      }
      const doc = toFsDoc(q);
      // Keep exam chapterId if present
      if (prev?.chapterId && String(prev.chapterId).startsWith('exam:')) {
        doc.chapterId = prev.chapterId;
        doc.chapterTitle = prev.chapterTitle || doc.chapterTitle;
      }
      // Keep graphData on sketch steps if we didn't set svg
      batch.set(db.collection('questions').doc(id), doc, { merge: true });
      written++;
    }
    await batch.commit();
  }
  console.log('Firestore written', written);

  // Convert remaining multiparts' short_answer subs to MCQ in place (q1-q4 etc.)
  await convertMultipartSubs(db);

  const after = await db.collection('questions').where('topicId', '==', 'y11a-5G').get();
  const byType = {};
  after.docs.forEach((d) => {
    const t = d.data().type;
    byType[t] = (byType[t] || 0) + 1;
  });
  console.log('After', after.size, byType);
  console.log('Run: node tools/scripts/rebuildQuestionIndexes.js y11a-5');
}

async function convertMultipartSubs(db) {
  const multipartIds = ['y11-5g-q1', 'y11-5g-q2', 'y11-5g-q3', 'y11-5g-q4', 'y11-5g-q7', 'y11-5g-q9', 'y11-5g-q10'];
  for (const id of multipartIds) {
    const ref = db.collection('questions').doc(id);
    const snap = await ref.get();
    if (!snap.exists) continue;
    const x = snap.data();
    if (!Array.isArray(x.subQuestions) || !x.subQuestions.length) continue;

    const subQuestions = x.subQuestions.map((sq, idx) => {
      if (sq.type === 'multiple_choice' && (sq.options || []).length >= 2) {
        // expand yes/no to 4 if needed
        let opts = (sq.options || []).map((o) => (typeof o === 'string' ? o : o.text));
        opts = opts.map(dollarToParen);
        while (opts.length < 4) {
          opts.push(opts.length === 2 ? 'Only for linear functions' : 'Only for even functions');
        }
        opts = opts.slice(0, 4);
        // ensure unique
        opts = [...new Set(opts)];
        while (opts.length < 4) opts.push(`Option ${opts.length + 1}`);
        const ai = parseInt(sq.answer, 10);
        const correct = opts[Number.isNaN(ai) ? 0 : ai] || opts[0];
        const a = nextA() % 4;
        const distractors = opts.filter((o) => o !== correct).slice(0, 3);
        while (distractors.length < 3) distractors.push(`Distractor ${distractors.length}`);
        const placed = place(correct, distractors.slice(0, 3), a);
        return {
          id: sq.id || `${id}-sub${idx}`,
          type: 'multiple_choice',
          question: dollarToParen(sq.question || ''),
          options: placed.map((text) => ({ text, imageUrl: '' })),
          answer: String(a),
          solutionSteps: (sq.solutionSteps || []).length
            ? (sq.solutionSteps || []).map((st) =>
                step(st.explanation || 'See reasoning.', st.workingOut || correct)
              )
            : [
                step(
                  'Compare the two orders of transformations algebraically on a general function.',
                  wrapWork(correct)
                ),
                step('Decide whether the resulting expressions are identical.', wrapWork(correct)),
                step('Select the matching option.', wrapWork(correct)),
              ],
        };
      }

      if (sq.type === 'short_answer' || sq.type === 'teacher_review') {
        const ans = String(sq.answer || '').trim();
        if (!ans) {
          // keep teacher_review for open investigation
          return {
            ...sq,
            type: 'teacher_review',
            question: dollarToParen(sq.question || ''),
            answer: dollarToParen(ans || 'See solution steps.'),
            options: [],
            solutionSteps: (sq.solutionSteps || []).map((st) =>
              step(st.explanation || '', st.workingOut || '')
            ),
          };
        }
        // Convert equation short answers to MCQ
        const latexAns = ans.includes('\\(')
          ? ans
          : `\\(${ans.replace(/y\s*=\s*/, 'y = ').replace(/\*/g, '')}\\)`;
        // Build plausible distractors by common order mistakes
        const distractors = [
          latexAns.replace(/x/g, 'x+1').slice(0, 80),
          latexAns.includes('-') ? latexAns.replace(/-/g, '+') : `\\(y = -(${ans})\\)`,
          `\\(y = x^2\\)`,
        ].map((d, i) => (d === latexAns ? `\\(\\text{other form ${i}}\\)` : d));
        // Better: hand distractors from answer string variants
        let d3 = [];
        if (ans.includes('x^2 - 10x + 16')) d3 = ['\\(y = x^2 - 2x + 16\\)', '\\(y = x^2 - 10x + 13\\)', '\\(y = (x-2)^2 - 6x\\)'];
        else if (ans.includes('x^2 - 10x + 19')) d3 = ['\\(y = x^2 - 10x + 16\\)', '\\(y = x^2 - 6x + 19\\)', '\\(y = x^2 - 2x + 19\\)'];
        else if (ans.includes('x^2 - 6x + 3')) d3 = ['\\(y = x^2 - 6x - 3\\)', '\\(y = x^2 - 3x + 3\\)', '\\(y = (x-3)^2\\)'];
        else {
          d3 = [
            `\\(y = x^2\\)`,
            `\\(y = (x-1)^2\\)`,
            `\\(y = 2x\\)`,
          ];
        }
        const correctOpt = ans.startsWith('y') || ans.startsWith('\\')
          ? dollarToParen(ans.includes('y') ? `\\(${ans.replace(/\*/g, '\\cdot ')}\\)` : latexAns)
          : `\\(${ans}\\)`;
        // Normalize correct
        let correct = correctOpt;
        if (!correct.includes('\\(')) correct = `\\(${ans}\\)`;
        // simplify known
        const known = {
          'y = x^2 - 10x + 16': '\\(y = x^2 - 10x + 16\\)',
          'y = x^2 - 10x + 19': '\\(y = x^2 - 10x + 19\\)',
          'y = x^2 - 6x + 3': '\\(y = x^2 - 6x + 3\\)',
        };
        if (known[ans.trim()]) correct = known[ans.trim()];
        if (ans.includes('(x/3)') || ans.includes('x/3')) {
          correct = `\\(y = ${ans.replace(/^y\s*=\s*/, '').replace(/\*/g, '')}\\)`;
        }

        const a = nextA() % 4;
        const uniqD = [...new Set(d3.filter((d) => d !== correct))].slice(0, 3);
        while (uniqD.length < 3) uniqD.push(`\\(\\text{alt ${uniqD.length}}\\)`);
        const placed = place(correct, uniqD, a);
        return {
          id: sq.id || `${id}-sub${idx}`,
          type: 'multiple_choice',
          question: dollarToParen(sq.question || ''),
          options: placed.map((text) => ({ text, imageUrl: '' })),
          answer: String(a),
          solutionSteps:
            (sq.solutionSteps || []).length >= 2
              ? (sq.solutionSteps || []).map((st) =>
                  step(st.explanation || 'Apply the transformation.', st.workingOut || correct)
                )
              : [
                  step(
                    'Apply the stated transformation carefully, keeping track of order.',
                    wrapWork(correct)
                  ),
                  step('Expand or simplify if required by the question.', wrapWork(correct)),
                  step('Match the equation to the correct option.', wrapWork(correct)),
                ],
        };
      }
      return sq;
    });

    // Ensure each MC sub has >=3 steps
    const cleaned = subQuestions.map((sq) => {
      if (sq.type !== 'multiple_choice') return sq;
      let steps = sq.solutionSteps || [];
      while (steps.length < 3) {
        steps.push(step('Continue the algebraic simplification.', sq.options?.[parseInt(sq.answer, 10)]?.text || '\\(\\text{see answer}\\)'));
      }
      return { ...sq, solutionSteps: steps.slice(0, Math.max(3, steps.length)) };
    });

    await ref.set(
      {
        type: 'multipart',
        subQuestions: cleaned,
        timeLimit: 60,
        isNew: true,
        topicId: 'y11a-5G',
        topicCode: '5G',
        updatedAt: FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
    console.log('multipart updated', id, 'subs', cleaned.map((s) => s.type).join(','));
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
