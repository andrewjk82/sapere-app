/**
 * Convert Year 11 Adv 5E multi-part teacher_review blobs into Ch5D-style
 * multipart questions with subQuestions.
 *
 * Targets: y11a-5E-new-5, y11a-5E-new-15, y11a-5E-new-16
 *
 *   node tools/scripts/splitY11A5EMultipart.js --firestore
 */
import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '../..');
const SEED_PATH = resolve(ROOT, 'src/constants/seedYear11Ch5Questions.js');
const DO_FIRESTORE = process.argv.includes('--firestore');

const SVG_STYLE =
  'display: block; margin: 0 auto; background: #fafafa; border: 1px solid #e2e8f0; border-radius: 8px;';

function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function step(explanation, workingOut, graphData = null) {
  return { explanation, workingOut, graphData };
}

function place(correct, distractors, aIdx) {
  const opts = [...distractors];
  opts.splice(aIdx, 0, correct);
  if (opts.length !== 4 || opts[aIdx] !== correct || new Set(opts).size !== 4) {
    throw new Error(`bad opts a=${aIdx}: ${JSON.stringify(opts)}`);
  }
  return opts;
}

function mc(id, question, correct, distractors, aIdx, solutionSteps) {
  const opts = place(correct, distractors, aIdx);
  return {
    id,
    type: 'multiple_choice',
    question,
    opts,
    options: opts,
    a: aIdx,
    answer: aIdx,
    solutionSteps,
  };
}

function tr(id, question, answer, solutionSteps) {
  return {
    id,
    type: 'teacher_review',
    question,
    opts: [],
    options: [],
    a: answer,
    answer,
    solutionSteps,
  };
}

// ── SVG helpers (Ch5D style) ────────────────────────────────────────────────

function absValueSvg({ h = 0, k = 0, a = 1, m = 1, label = '', marks = [], xMin, xMax, yMin, yMax, W = 300, H = 240 }) {
  const half = 6 / Math.max(Math.abs(m), 0.25);
  let xmin = xMin ?? h - half;
  let xmax = xMax ?? h + half;
  const yAt = (x) => a * Math.abs(m * (x - h)) + k;
  if (yMin == null || yMax == null) {
    const samples = [];
    for (let i = 0; i <= 20; i++) samples.push(yAt(xmin + ((xmax - xmin) * i) / 20));
    yMin = yMin ?? Math.min(0, ...samples) - 1.5;
    yMax = yMax ?? Math.max(0, ...samples) + 1.5;
  }
  if (xmin > 0) xmin = -0.5;
  if (xmax < 0) xmax = 0.5;
  if (yMin > 0) yMin = -0.5;
  if (yMax < 0) yMax = 0.5;
  const padL = 28, padR = 18, padT = 18, padB = 24;
  const plotW = W - padL - padR, plotH = H - padT - padB;
  const sx = (x) => padL + ((x - xmin) / (xmax - xmin)) * plotW;
  const sy = (y) => padT + ((yMax - y) / (yMax - yMin)) * plotH;
  const ox = sx(0), oy = sy(0);
  const pts = [[xmin, yAt(xmin)], [h, k], [xmax, yAt(xmax)]];
  const pathD = pts.map((p, i) => `${i === 0 ? 'M' : 'L'} ${sx(p[0]).toFixed(1)},${sy(p[1]).toFixed(1)}`).join(' ');
  const markEls = marks.map((mk) => {
    const color = mk.color || '#ef4444';
    const px = sx(mk.x), py = sy(mk.y);
    return `<circle cx="${px.toFixed(1)}" cy="${py.toFixed(1)}" r="3.5" fill="${color}"/>` +
      (mk.label ? `<text x="${(px + 6).toFixed(1)}" y="${(py - 6).toFixed(1)}" font-size="10" fill="${color}" font-weight="bold">${esc(mk.label)}</text>` : '');
  }).join('\n  ');
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" style="${SVG_STYLE}">
  <line x1="${padL}" y1="${oy.toFixed(1)}" x2="${(W - padR).toFixed(1)}" y2="${oy.toFixed(1)}" stroke="#64748b" stroke-width="1.5"/>
  <line x1="${ox.toFixed(1)}" y1="${padT}" x2="${ox.toFixed(1)}" y2="${(H - padB).toFixed(1)}" stroke="#64748b" stroke-width="1.5"/>
  <text x="${(W - padR).toFixed(1)}" y="${(oy + 14).toFixed(1)}" font-size="12" fill="#64748b" font-weight="bold">x</text>
  <text x="${(ox + 6).toFixed(1)}" y="${(padT + 4).toFixed(1)}" font-size="12" fill="#64748b" font-weight="bold">y</text>
  <path d="${pathD}" fill="none" stroke="#6366f1" stroke-width="2.5" stroke-linejoin="round"/>
  <text x="40" y="28" font-size="11" fill="#6366f1" font-weight="bold">${esc(label)}</text>
  ${markEls}
</svg>`;
}

function dualAbsSvg() {
  // y=|x-2| and y=|x|-2
  const W = 300, H = 240;
  const xmin = -4, xmax = 6, ymin = -4, ymax = 5;
  const padL = 28, padR = 18, padT = 18, padB = 24;
  const plotW = W - padL - padR, plotH = H - padT - padB;
  const sx = (x) => padL + ((x - xmin) / (xmax - xmin)) * plotW;
  const sy = (y) => padT + ((ymax - y) / (ymax - ymin)) * plotH;
  const ox = sx(0), oy = sy(0);
  const y1 = (x) => Math.abs(x - 2);
  const y2 = (x) => Math.abs(x) - 2;
  const path = (fn, hx) => {
    const pts = [[xmin, fn(xmin)], [hx, fn(hx)], [xmax, fn(xmax)]];
    return pts.map((p, i) => `${i === 0 ? 'M' : 'L'} ${sx(p[0]).toFixed(1)},${sy(p[1]).toFixed(1)}`).join(' ');
  };
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" style="${SVG_STYLE}">
  <line x1="${padL}" y1="${oy.toFixed(1)}" x2="${(W - padR).toFixed(1)}" y2="${oy.toFixed(1)}" stroke="#64748b" stroke-width="1.5"/>
  <line x1="${ox.toFixed(1)}" y1="${padT}" x2="${ox.toFixed(1)}" y2="${(H - padB).toFixed(1)}" stroke="#64748b" stroke-width="1.5"/>
  <path d="${path(y1, 2)}" fill="none" stroke="#6366f1" stroke-width="2.5" stroke-linejoin="round"/>
  <path d="${path(y2, 0)}" fill="none" stroke="#ef4444" stroke-width="2.5" stroke-dasharray="5 3" stroke-linejoin="round"/>
  <circle cx="${sx(2).toFixed(1)}" cy="${sy(0).toFixed(1)}" r="3.5" fill="#6366f1"/>
  <circle cx="${sx(0).toFixed(1)}" cy="${sy(-2).toFixed(1)}" r="3.5" fill="#ef4444"/>
  <text x="150" y="28" font-size="10" fill="#6366f1" font-weight="bold">y = |x − 2|</text>
  <text x="150" y="44" font-size="10" fill="#ef4444" font-weight="bold">y = |x| − 2</text>
</svg>`;
}

function intersectSvg() {
  // y=|x-4| and y=2, intersections (2,2) and (6,2)
  const W = 300, H = 240;
  const xmin = -1, xmax = 10, ymin = -1, ymax = 7;
  const padL = 28, padR = 18, padT = 18, padB = 24;
  const plotW = W - padL - padR, plotH = H - padT - padB;
  const sx = (x) => padL + ((x - xmin) / (xmax - xmin)) * plotW;
  const sy = (y) => padT + ((ymax - y) / (ymax - ymin)) * plotH;
  const ox = sx(0), oy = sy(0);
  const yAt = (x) => Math.abs(x - 4);
  const pathD = [[xmin, yAt(xmin)], [4, 0], [xmax, yAt(xmax)]]
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${sx(p[0]).toFixed(1)},${sy(p[1]).toFixed(1)}`).join(' ');
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" style="${SVG_STYLE}">
  <line x1="${padL}" y1="${oy.toFixed(1)}" x2="${(W - padR).toFixed(1)}" y2="${oy.toFixed(1)}" stroke="#64748b" stroke-width="1.5"/>
  <line x1="${ox.toFixed(1)}" y1="${padT}" x2="${ox.toFixed(1)}" y2="${(H - padB).toFixed(1)}" stroke="#64748b" stroke-width="1.5"/>
  <path d="${pathD}" fill="none" stroke="#6366f1" stroke-width="2.5" stroke-linejoin="round"/>
  <line x1="${padL}" y1="${sy(2).toFixed(1)}" x2="${(W - padR).toFixed(1)}" y2="${sy(2).toFixed(1)}" stroke="#ef4444" stroke-width="2" stroke-dasharray="5 3"/>
  <circle cx="${sx(2).toFixed(1)}" cy="${sy(2).toFixed(1)}" r="3.5" fill="#ef4444"/>
  <circle cx="${sx(6).toFixed(1)}" cy="${sy(2).toFixed(1)}" r="3.5" fill="#ef4444"/>
  <text x="${sx(2) + 6}" y="${sy(2) - 8}" font-size="10" fill="#ef4444" font-weight="bold">(2,2)</text>
  <text x="${sx(6) + 6}" y="${sy(2) - 8}" font-size="10" fill="#ef4444" font-weight="bold">(6,2)</text>
  <text x="160" y="36" font-size="10" fill="#6366f1" font-weight="bold">y = |x − 4|</text>
  <text x="200" y="${sy(2) - 6}" font-size="10" fill="#ef4444" font-weight="bold">y = 2</text>
</svg>`;
}

function absXSvg() {
  return absValueSvg({
    h: 0, k: 0, label: 'y = |x| (even: mirror in y-axis)',
    marks: [{ x: 0, y: 0, label: 'V(0,0)' }],
  });
}

// ── Multipart payloads ──────────────────────────────────────────────────────

const MULTIPART = {
  'y11a-5E-new-5': {
    difficulty: 'medium',
    t: 'Absolute Value Graphs',
    q: 'Consider the functions \\(y = |x - 2|\\) and \\(y = |x| - 2\\).',
    subQuestions: [
      tr(
        'y11a-5E-new-5a',
        'Copy and complete a table of values for both functions for integer values of \\(x\\) from \\(-2\\) to \\(4\\).',
        'For \\(y = |x-2|\\): at \\(x = -2,-1,0,1,2,3,4\\) values are \\(4,3,2,1,0,1,2\\).\nFor \\(y = |x|-2\\): values are \\(0,-1,-2,-1,0,1,2\\).',
        [
          step(
            'List integer x-values from -2 to 4. For each x, evaluate both |x - 2| and |x| - 2 separately. Absolute value is applied only inside its own bars — do not subtract 2 before taking |x| for the second function.',
            '\\(x \\in \\{-2,-1,0,1,2,3,4\\}\\)'
          ),
          step(
            'Compute y = |x - 2|: distance from x to 2. At the vertex x = 2 the value is 0; values increase by 1 for each unit left or right.',
            '\\(|x-2|:\\ 4,3,2,1,0,1,2\\)'
          ),
          step(
            'Compute y = |x| - 2: take |x| first, then subtract 2. At x = 0 you get -2 (the vertex of this graph). Final tables are ready for sketching in part (b).',
            '\\(|x|-2:\\ 0,-1,-2,-1,0,1,2\\)'
          ),
        ]
      ),
      tr(
        'y11a-5E-new-5b',
        'Draw the graphs of the two functions on separate number planes, and observe the similarities and differences.',
        'Both are V-shaped. \\(y = |x-2|\\) has vertex (2,0); \\(y = |x|-2\\) has vertex (0,-2). Same shape; different vertex positions.',
        [
          step(
            'Plot points from the table for each function. The graph of y = |x - 2| is a V with vertex at (2, 0). The graph of y = |x| - 2 is a V with vertex at (0, -2).',
            '\\(\\text{Vertices: } (2,0)\\text{ and }(0,-2)\\)'
          ),
          step(
            'Compare: both open upwards with slope ±1. The first is shifted right 2 from y = |x|; the second is shifted down 2. A common mistake is treating |x| - 2 as |x - 2|.',
            '\\(\\text{Same shape, different translations}\\)',
            { svg: dualAbsSvg() }
          ),
        ]
      ),
      tr(
        'y11a-5E-new-5c',
        'Explain how each graph is obtained by shifting the basic graph \\(y = |x|\\).',
        '\\(y = |x-2|\\) is \\(y = |x|\\) shifted 2 units right. \\(y = |x|-2\\) is \\(y = |x|\\) shifted 2 units down.',
        [
          step(
            'Recall translations of y = |x|: replacing x by x - h shifts the graph h units right (h > 0). Adding k outside the absolute value shifts k units up.',
            '\\(y = |x - h| + k\\)'
          ),
          step(
            'For y = |x - 2|: h = 2, k = 0, so shift 2 units to the right. For y = |x| - 2: h = 0, k = -2, so shift 2 units down.',
            '\\(|x-2|:\\ right\\ 2;\\quad |x|-2:\\ down\\ 2\\)'
          ),
        ]
      ),
      mc(
        'y11a-5E-new-5d',
        'Write down the domain and range of each function.',
        'Both: domain \\(\\mathbb{R}\\). Range of \\(y=|x-2|\\) is \\([0,\\infty)\\); range of \\(y=|x|-2\\) is \\([-2,\\infty)\\).',
        [
          'Both: domain \\([0,\\infty)\\), range \\(\\mathbb{R}\\)',
          'Both: domain \\(\\mathbb{R}\\), range \\([0,\\infty)\\)',
          'Domain of each is \\([2,\\infty)\\); ranges differ',
        ],
        0,
        [
          step(
            'Domain of any absolute-value expression in x with no further restrictions is all real numbers. Neither function has a denominator or even root that would exclude x-values.',
            '\\(\\text{Domain of both: } \\mathbb{R}\\)'
          ),
          step(
            'Range of y = |x - 2|: values are always ≥ 0, and every y ≥ 0 is achieved. Range is [0, ∞).',
            '\\(y = |x-2| \\ge 0 \\Rightarrow \\text{range } [0,\\infty)\\)'
          ),
          step(
            'Range of y = |x| - 2: minimum is -2 at x = 0, and all y ≥ -2 occur. Range is [-2, ∞). Choose the option that states both domains are R and these two ranges.',
            '\\(y = |x|-2 \\ge -2 \\Rightarrow \\text{range } [-2,\\infty)\\)'
          ),
        ]
      ),
    ],
  },

  'y11a-5E-new-15': {
    difficulty: 'medium',
    t: 'Absolute Value Equations',
    q: 'Use graphical methods to solve absolute value equations. Sketch where asked, then state solutions.',
    subQuestions: [
      tr(
        'y11a-5E-new-15a',
        'Sketch \\(y = |x - 4|\\) and \\(y = 2\\) on the same set of axes, clearly showing the points of intersection. Hence write down the solution of \\(|x - 4| = 2\\).',
        'Intersections at \\((2, 2)\\) and \\((6, 2)\\). Solution: \\(x = 2\\) or \\(x = 6\\).',
        [
          step(
            'Graph y = |x - 4| as a V with vertex (4, 0). Draw the horizontal line y = 2. Intersection x-coordinates solve |x - 4| = 2.',
            '\\(y = |x-4|,\\quad y = 2\\)'
          ),
          step(
            'Solve algebraically to confirm: x - 4 = 2 or x - 4 = -2, so x = 6 or x = 2. Mark both intersection points on the sketch.',
            '\\(x = 6 \\quad \\text{or} \\quad x = 2\\)',
            { svg: intersectSvg() }
          ),
          step(
            'The solution of |x - 4| = 2 is therefore x = 2 or x = 6. Both points lie 2 units above the x-axis on the absolute-value graph.',
            '\\(\\text{Solution: } x = 2 \\text{ or } x = 6\\)'
          ),
        ]
      ),
      mc(
        'y11a-5E-new-15b-i',
        'Use a similar graphical method to solve \\(|x + 2| = 3\\).',
        '\\(x = 1\\) or \\(x = -5\\)',
        ['\\(x = 1\\) only', '\\(x = -5\\) only', 'No solution'],
        0,
        [
          step(
            'Graphically, solve by intersecting y = |x + 2| (vertex (-2, 0)) with y = 3. Algebraically: x + 2 = 3 or x + 2 = -3.',
            '\\(x + 2 = 3 \\quad \\text{or} \\quad x + 2 = -3\\)'
          ),
          step(
            'x = 1 or x = -5. Check: |1+2| = 3 and |-5+2| = 3. Both valid.',
            '\\(x = 1 \\text{ or } x = -5\\)'
          ),
        ]
      ),
      mc(
        'y11a-5E-new-15b-ii',
        'Use a similar graphical method to solve \\(|2x - 3| = 5\\).',
        '\\(x = 4\\) or \\(x = -1\\)',
        ['\\(x = 4\\) only', '\\(x = 1\\) or \\(x = -4\\)', 'No solution'],
        1,
        [
          step(
            'Intersect y = |2x - 3| with y = 5, or solve 2x - 3 = 5 or 2x - 3 = -5.',
            '\\(2x - 3 = 5 \\quad \\text{or} \\quad 2x - 3 = -5\\)'
          ),
          step(
            '2x = 8 → x = 4; 2x = -2 → x = -1. Check both in the original equation.',
            '\\(x = 4 \\text{ or } x = -1\\)'
          ),
        ]
      ),
      mc(
        'y11a-5E-new-15b-iii',
        'Use a similar graphical method to solve \\(|4x - 1| = -3\\).',
        'No solution',
        ['\\(x = 1\\) or \\(x = -\\frac{1}{2}\\)', '\\(x = -1\\) or \\(x = \\frac{1}{2}\\)', '\\(x = 0\\)'],
        2,
        [
          step(
            'The graph of y = |4x - 1| never goes below the x-axis, so it cannot meet the horizontal line y = -3. Absolute value is never negative.',
            '\\(|4x - 1| \\ge 0 \\neq -3\\)'
          ),
          step(
            'Therefore there is no real solution. Do not write 4x - 1 = ±(-3) as if solutions exist.',
            '\\(\\text{No real solution}\\)'
          ),
        ]
      ),
      mc(
        'y11a-5E-new-15b-iv',
        'Use a similar graphical method to solve \\(|3x + 6| = 0\\).',
        '\\(x = -2\\)',
        ['\\(x = 2\\)', '\\(x = 0\\)', 'No solution'],
        0,
        [
          step(
            'The line y = 0 meets y = |3x + 6| only at the vertex, where the expression inside is zero.',
            '\\(3x + 6 = 0\\)'
          ),
          step(
            'x = -2. Check: |3(-2)+6| = 0. Unique solution.',
            '\\(x = -2\\)'
          ),
        ]
      ),
    ],
  },

  'y11a-5E-new-16': {
    difficulty: 'hard',
    t: 'Absolute Value',
    q: 'Consider the absolute value function \\(f(x) = |x|\\).',
    subQuestions: [
      tr(
        'y11a-5E-new-16a',
        'Use the result \\(f(x) = \\sqrt{x^2}\\) to help prove that the absolute value function is even.',
        'Since \\(f(-x) = \\sqrt{(-x)^2} = \\sqrt{x^2} = f(x)\\) for all real \\(x\\), \\(f\\) is even.',
        [
          step(
            'A function is even if f(-x) = f(x) for every x in the domain. Use the identity |x| = √(x²), which is valid for all real x because √ returns the non-negative root.',
            '\\(f(x) = |x| = \\sqrt{x^2}\\)'
          ),
          step(
            'Replace x by -x: f(-x) = √((-x)²) = √(x²) because (-x)² = x². This equals f(x). A common slip is writing √((-x)²) = -√(x²).',
            '\\(f(-x) = \\sqrt{(-x)^2} = \\sqrt{x^2} = f(x)\\)'
          ),
          step(
            'Because f(-x) = f(x) for all real x, f is an even function. This is the required proof.',
            '\\(\\text{Hence } f \\text{ is even.}\\)'
          ),
        ]
      ),
      tr(
        'y11a-5E-new-16b',
        'Why was this result obvious from the graph of \\(y = |x|\\)?',
        'The graph is symmetric about the y-axis (mirror image left and right), which is the geometric definition of an even function.',
        [
          step(
            'Even functions are symmetric in the y-axis: the left and right halves are mirror images. Look at y = |x|.',
            '\\(\\text{Even } \\Leftrightarrow \\text{ reflection symmetry in } y\\text{-axis}\\)'
          ),
          step(
            'The V-shape of y = |x| is clearly mirrored across the y-axis, so the graph alone shows the function is even — matching the algebraic proof.',
            '\\(\\text{Graph of } y = |x| \\text{ is y-axis symmetric}\\)',
            { svg: absXSvg() }
          ),
        ]
      ),
    ],
  },
};

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

function toSeedShape(id, spec) {
  return {
    id,
    c: '5E',
    t: spec.t,
    type: 'multipart',
    difficulty: spec.difficulty,
    q: spec.q,
    question: spec.q,
    a: null,
    answer: null,
    opts: [],
    options: [],
    h: '',
    s: '',
    solutionSteps: [],
    subQuestions: spec.subQuestions,
    isNew: true,
  };
}

function toFirestoreDoc(id, spec) {
  const subQuestions = spec.subQuestions.map((sq) => {
    const isMC = sq.type === 'multiple_choice';
    const options = isMC
      ? (sq.opts || []).map((text) => ({ text: String(text), imageUrl: '' }))
      : [];
    return {
      id: sq.id,
      type: sq.type,
      question: sq.question,
      options,
      answer: isMC ? String(sq.a) : String(sq.answer ?? sq.a ?? ''),
      solutionSteps: sq.solutionSteps || [],
      graphData: null,
    };
  });
  return {
    id,
    chapterId: 'y11a-5',
    chapterTitle: 'Chapter 5: Further graphing and equations',
    year: 'Year 11',
    course: 'Advanced',
    isManual: true,
    topicId: 'y11a-5E',
    topicCode: '5E',
    topicTitle: spec.t,
    difficulty: spec.difficulty,
    type: 'multipart',
    question: spec.q,
    title: spec.q.slice(0, 60),
    options: [],
    answer: null,
    solutionSteps: [],
    subQuestions,
    requiresManualGrading: true,
    isNew: true,
    updatedAt: FieldValue.serverTimestamp(),
  };
}

async function main() {
  // validate MC answers
  for (const [id, spec] of Object.entries(MULTIPART)) {
    for (const sq of spec.subQuestions) {
      if (sq.type === 'multiple_choice') {
        if (sq.opts[sq.a] !== (sq.opts[sq.a])) throw new Error('x');
        const o = (JSON.stringify(sq).match(/\\\(/g) || []).length;
        const c = (JSON.stringify(sq).match(/\\\)/g) || []).length;
        if (o !== c) throw new Error(`${sq.id} latex parity ${o}/${c}`);
      }
    }
    console.log(id, 'parts', spec.subQuestions.map((s) => `${s.id}:${s.type}`).join(', '));
  }

  const { arr, rest } = loadSeed();
  let n = 0;
  const newArr = arr.map((q) => {
    if (!MULTIPART[q.id]) return q;
    n += 1;
    return toSeedShape(q.id, MULTIPART[q.id]);
  });
  console.log('Seed updated', n);
  writeFileSync(
    SEED_PATH,
    `export const CH5_QUESTIONS_Y11A = ${JSON.stringify(newArr, null, 2)};\n\n` + rest,
    'utf8'
  );

  if (!DO_FIRESTORE) {
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
  const batch = db.batch();
  for (const id of Object.keys(MULTIPART)) {
    batch.set(db.collection('questions').doc(id), toFirestoreDoc(id, MULTIPART[id]), { merge: true });
  }
  await batch.commit();
  console.log('Firestore upserted', Object.keys(MULTIPART).length);

  // verify
  const d = await db.collection('questions').doc('y11a-5E-new-15').get();
  const x = d.data();
  console.log('verify 15', {
    type: x.type,
    subs: (x.subQuestions || []).map((s) => ({ id: s.id, type: s.type, ans: s.answer, steps: s.solutionSteps?.length, svg: !!s.solutionSteps?.some((st) => st.graphData?.svg) })),
  });
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
