/**
 * Convert / repair Year 12 Advanced Chapter 2 exam-bank items
 * (curve sketching, inequations, transforms, trig graphs) → MCQ / teacher_review.
 *
 *   node tools/scripts/convertY12ACh2ToMCQ.js --firestore
 */
import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const DO_FS = process.argv.includes('--firestore');

const META = {
  year: 'Year 12',
  course: 'Advanced',
  isManual: true,
  timeLimit: 60,
  isNew: true,
};

const TOPIC_TITLES = {
  'y12a-2A': 'The sign of a function',
  'y12a-2B': 'Vertical and horizontal asymptotes',
  'y12a-2C': 'A curve-sketching menu',
  'y12a-2D': 'Solving inequations',
  'y12a-2E': 'Using graphs to solve equations and inequations',
  'y12a-2F': 'Review of translations and reflections',
  'y12a-2G': 'Dilations',
  'y12a-2H': 'Combinations of transformations',
  'y12a-2I': 'Trigonometric graphs',
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

function baseMeta(topicId, chapterId, chapterTitle, source) {
  return {
    topicId,
    topicCode: String(topicId).replace('y12a-', ''),
    topicTitle: TOPIC_TITLES[topicId] || '',
    chapterId: chapterId || 'y12a-2',
    chapterTitle: chapterTitle || 'Chapter 2: Graphing techniques',
    source: source || '',
    ...META,
  };
}

/** Short title for UI lists — strip TeX so we never cut mid-delimiter. */
function shortTitle(q) {
  return dollarToParen(q)
    .replace(/\\\(|\\\)|\\\[|\\\]/g, '')
    .replace(/\\[a-zA-Z]+/g, '')
    .replace(/[{}]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 80);
}

function mc({ id, topicId, difficulty = 'medium', q, correct, distractors, a, solutionSteps, chapterId, chapterTitle, source }) {
  const opts = place(correct, distractors, a);
  const question = dollarToParen(q);
  return {
    id,
    ...baseMeta(topicId, chapterId, chapterTitle, source),
    type: 'multiple_choice',
    difficulty,
    question,
    title: shortTitle(q),
    options: opts.map((text) => ({ text, imageUrl: '' })),
    answer: String(a),
    solutionSteps,
    solution: '',
    hint: '',
    requiresManualGrading: false,
    isActive: true,
  };
}

function tr({ id, topicId, difficulty = 'hard', q, answer, solutionSteps, chapterId, chapterTitle, source }) {
  return {
    id,
    ...baseMeta(topicId, chapterId, chapterTitle, source),
    type: 'teacher_review',
    difficulty,
    question: dollarToParen(q),
    title: shortTitle(q),
    options: [],
    answer: dollarToParen(answer),
    solutionSteps,
    solution: '',
    hint: '',
    requiresManualGrading: true,
    isActive: true,
  };
}

const ITEMS = [];

// ═══════════════ 2B ═══════════════
ITEMS.push(
  mc({
    id: 'car2020-mc2',
    topicId: 'y12a-2B',
    difficulty: 'easy',
    source: 'Caringbah 2020',
    q: 'What are the vertical asymptotes of the graph of \\(y = \\dfrac{1}{x^2 - 9}\\)?',
    correct: '\\(x = \\pm 3\\)',
    distractors: ['\\(x = \\pm 9\\)', '\\(y = \\pm 3\\)', '\\(y = \\pm 9\\)'],
    a: nextA(),
    solutionSteps: [
      step('Vertical asymptotes where denominator is zero (numerator nonzero).', '\\(x^2 - 9 = 0\\)'),
      step('Factor: \\((x - 3)(x + 3) = 0\\).', '\\(x = \\pm 3\\)'),
      step('Vertical asymptotes: \\(x = \\pm 3\\) (also \\(y = 0\\) is horizontal).', '\\(x = \\pm 3\\)'),
    ],
  }),
  mc({
    id: 'car2020s-mc2',
    topicId: 'y12a-2B',
    difficulty: 'easy',
    source: 'Caringbah 2020 similar',
    q: 'What are the vertical asymptotes of the graph of \\(y = \\dfrac{1}{x^2 - 16}\\)?',
    correct: '\\(x = \\pm 4\\)',
    distractors: ['\\(x = \\pm 16\\)', '\\(y = \\pm 4\\)', '\\(y = \\pm 16\\)'],
    a: nextA(),
    solutionSteps: [
      step('Set denominator zero: \\(x^2 - 16 = 0\\).', '\\(x^2 = 16\\)'),
      step('Factor: \\((x - 4)(x + 4) = 0\\).', '\\(x = \\pm 4\\)'),
      step('Vertical asymptotes at \\(x = \\pm 4\\).', '\\(x = \\pm 4\\)'),
    ],
  })
);

// ═══════════════ 2C ═══════════════
ITEMS.push(
  tr({
    id: 'baulko2020-q13ai',
    topicId: 'y12a-2C',
    source: 'Baulkham Hills 2020',
    q: 'Sketch the graphs of \\(f(x) = 2x - 2x^2\\) and \\(g(x) = x - 1\\) on the same number plane.',
    answer:
      '\\(f\\): downward parabola, intercepts \\(0,1\\), vertex \\(\\left(\\dfrac{1}{2},\\dfrac{1}{2}\\right)\\). \\(g\\): line through \\((0,-1)\\). Intersect at \\(x=-\\dfrac{1}{2}\\) and \\(x=1\\).',
    solutionSteps: [
      step('Factor \\(f(x) = 2x(1 - x)\\). Opens down; \\(x\\)-intercepts \\(0\\) and \\(1\\).', '\\(f(x) = 2x(1-x)\\)'),
      step('Vertex at mid-root: \\(\\left(\\dfrac{1}{2}, \\dfrac{1}{2}\\right)\\).', '\\(\\left(\\dfrac{1}{2},\\dfrac{1}{2}\\right)\\)'),
      step('Sketch line \\(g(x) = x - 1\\) and mark intersections.', '\\(g(x) = x - 1\\)'),
    ],
  })
);

// ═══════════════ 2D ═══════════════
ITEMS.push(
  mc({
    id: 'asc2020-mc7',
    topicId: 'y12a-2D',
    difficulty: 'medium',
    source: 'Ascham 2020',
    q: 'Solve \\(3 - 2x - x^2 < 3\\).',
    correct: '\\(x < -2\\) or \\(x > 0\\)',
    distractors: ['\\(x < 0\\)', '\\(-2 < x < 0\\)', '\\(x < -3\\) or \\(x > 1\\)'],
    a: nextA(),
    solutionSteps: [
      step('Simplify: \\(-2x - x^2 < 0\\).', '\\(-x^2 - 2x < 0\\)'),
      step('Multiply by \\(-1\\) (reverse): \\(x(x + 2) > 0\\).', '\\(x(x + 2) > 0\\)'),
      step('Outside roots: \\(x < -2\\) or \\(x > 0\\).', '\\(x < -2\\) or \\(x > 0\\)'),
    ],
  }),
  mc({
    id: 'asc2020-mc7v',
    topicId: 'y12a-2D',
    difficulty: 'medium',
    source: 'Ascham 2020 variant',
    q: 'Solve \\(5 - 4x - x^2 < 5\\).',
    correct: '\\(x < -4\\) or \\(x > 0\\)',
    distractors: ['\\(-4 < x < 0\\)', '\\(x < 0\\)', '\\(x > 4\\)'],
    a: nextA(),
    solutionSteps: [
      step('Simplify: \\(-4x - x^2 < 0\\).', '\\(-x(x + 4) < 0\\)'),
      step('Multiply by \\(-1\\): \\(x(x + 4) > 0\\).', '\\(x(x + 4) > 0\\)'),
      step('So \\(x < -4\\) or \\(x > 0\\).', '\\(x < -4\\) or \\(x > 0\\)'),
    ],
  }),
  mc({
    id: 'baulko2020-q13aii',
    topicId: 'y12a-2D',
    difficulty: 'medium',
    source: 'Baulkham Hills 2020',
    q: 'Solve \\(x - 1 < 2x - 2x^2\\).',
    correct: '\\(-\\dfrac{1}{2} < x < 1\\)',
    distractors: ['\\(x < -\\dfrac{1}{2}\\) or \\(x > 1\\)', '\\(-1 < x < 2\\)', '\\(x > 1\\)'],
    a: nextA(),
    solutionSteps: [
      step('Rearrange: \\(2x^2 - x - 1 < 0\\).', '\\(2x^2 - x - 1 < 0\\)'),
      step('Factor: \\((2x + 1)(x - 1) < 0\\).', '\\((2x + 1)(x - 1) < 0\\)'),
      step('Between roots: \\(-\\dfrac{1}{2} < x < 1\\).', '\\(-\\dfrac{1}{2} < x < 1\\)'),
    ],
  }),
  mc({
    id: 'baulko2020-q13aiiv',
    topicId: 'y12a-2D',
    difficulty: 'medium',
    source: 'Baulkham Hills 2020 variant',
    q: 'Solve \\(3x - 2 < 4x - x^2\\).',
    correct: '\\(-1 < x < 2\\)',
    distractors: ['\\(x < -1\\) or \\(x > 2\\)', '\\(-2 < x < 1\\)', '\\(x > 2\\)'],
    a: nextA(),
    solutionSteps: [
      step('Rearrange: \\(x^2 - x - 2 < 0\\).', '\\(x^2 - x - 2 < 0\\)'),
      step('Factor: \\((x - 2)(x + 1) < 0\\).', '\\((x - 2)(x + 1) < 0\\)'),
      step('Solution: \\(-1 < x < 2\\).', '\\(-1 < x < 2\\)'),
    ],
  })
);

// ═══════════════ 2E ═══════════════
ITEMS.push(
  mc({
    id: 'abb2020-q15b',
    topicId: 'y12a-2E',
    difficulty: 'hard',
    source: 'Abbotsleigh 2020',
    q: 'How many solutions does \\(3\\sin x = \\dfrac{x^2}{5} - 3\\) have?',
    correct: '4 solutions',
    distractors: ['2 solutions', '3 solutions', '6 solutions'],
    a: nextA(),
    solutionSteps: [
      step('Compare graphs of \\(y = 3\\sin x\\) and the parabola \\(y = \\dfrac{x^2}{5} - 3\\).', '\\(y = 3\\sin x\\)'),
      step('Parabola vertex \\((0, -3)\\) opens slowly upward.', '\\((0, -3)\\)'),
      step('Counting intersections gives 4 solutions.', '\\(4\\)'),
    ],
  }),
  mc({
    id: 'cths2020-q22a',
    topicId: 'y12a-2E',
    difficulty: 'medium',
    source: 'Cherrybrook Tech 2020',
    q: 'Why does \\(\\sin x = 1 - \\dfrac{x}{4}\\) have three solutions?',
    correct: 'The line \\(y = 1 - \\dfrac{x}{4}\\) intersects \\(y = \\sin x\\) at exactly three points',
    distractors: [
      'The line is tangent to sine three times',
      'Sine always has three roots on \\([0, 2\\pi]\\)',
      'The line only meets sine for \\(x > 0\\)',
    ],
    a: nextA(),
    solutionSteps: [
      step('Rewrite as intersections of \\(y = \\sin x\\) and \\(y = 1 - \\dfrac{x}{4}\\).', '\\(y_1 = \\sin x,\\; y_2 = 1 - \\dfrac{x}{4}\\)'),
      step('Line through \\((0, 1)\\) with slope \\(-\\dfrac{1}{4}\\).', '\\((0, 1)\\)'),
      step('A standard sketch shows three crossings.', '\\(3\\)'),
    ],
  }),
  mc({
    id: 'cths2020-q22b',
    topicId: 'y12a-2E',
    difficulty: 'medium',
    source: 'Cherrybrook Tech 2020',
    q: 'Approximate the largest solution of \\(\\sin x = 1 - \\dfrac{x}{4}\\).',
    correct: '\\(x \\approx 5.8\\)',
    distractors: ['\\(x \\approx 3.1\\)', '\\(x \\approx 1.2\\)', '\\(x \\approx 7.5\\)'],
    a: nextA(),
    solutionSteps: [
      step('Largest root = rightmost intersection of the graphs.', '\\(\\text{rightmost}\\)'),
      step('It lies just before \\(2\\pi \\approx 6.28\\).', '\\(x < 2\\pi\\)'),
      step('A reasonable reading is \\(x \\approx 5.8\\).', '\\(x \\approx 5.8\\)'),
    ],
  }),
  mc({
    id: 'cths2020s-q22a',
    topicId: 'y12a-2E',
    difficulty: 'medium',
    source: 'Cherrybrook Tech 2020 similar',
    q: 'Why does \\(\\cos x = 1 - \\dfrac{x}{5}\\) have three solutions?',
    correct: 'The line \\(y = 1 - \\dfrac{x}{5}\\) intersects \\(y = \\cos x\\) at exactly three points',
    distractors: [
      'Cosine always has three zeros',
      'The line is vertical',
      'There are infinitely many solutions',
    ],
    a: nextA(),
    solutionSteps: [
      step('Compare \\(y = \\cos x\\) and \\(y = 1 - \\dfrac{x}{5}\\).', '\\(y_1 = \\cos x\\)'),
      step('Line through \\((0, 1)\\), slope \\(-\\dfrac{1}{5}\\).', '\\((0, 1)\\)'),
      step('Exactly three intersection points.', '\\(3\\)'),
    ],
  }),
  mc({
    id: 'cths2020s-q22b',
    topicId: 'y12a-2E',
    difficulty: 'medium',
    source: 'Cherrybrook Tech 2020 similar',
    q: 'Approximate the largest solution of \\(\\cos x = 1 - \\dfrac{x}{5}\\).',
    correct: '\\(x \\approx 6.5\\)',
    distractors: ['\\(x \\approx 3.5\\)', '\\(x \\approx 4.5\\)', '\\(x \\approx 8.0\\)'],
    a: nextA(),
    solutionSteps: [
      step('Rightmost intersection is the largest root.', '\\(\\text{rightmost}\\)'),
      step('For this slower line it sits near \\(x \\approx 6.5\\).', '\\(x \\approx 6.5\\)'),
      step('Answer: \\(x \\approx 6.5\\).', '\\(x \\approx 6.5\\)'),
    ],
  }),
  mc({
    id: 'dane2020-q32b',
    topicId: 'y12a-2E',
    difficulty: 'medium',
    source: 'Danebank 2020',
    q: 'How many real solutions does \\(\\cos \\pi x = 1 - |x|\\) have?',
    correct: '5 solutions',
    distractors: ['3 solutions', '4 solutions', '7 solutions'],
    a: nextA(),
    solutionSteps: [
      step('Count intersections of \\(y = \\cos \\pi x\\) and \\(y = 1 - |x|\\).', '\\(\\text{intersections}\\)'),
      step('For \\(|x| > 2\\), \\(1 - |x| < -1\\) (outside cosine range).', '\\(|x| > 2\\): none'),
      step('In \\([-2, 2]\\) there are 5 crossings.', '\\(5\\)'),
    ],
  }),
  mc({
    id: 'dane2020s-q32b',
    topicId: 'y12a-2E',
    difficulty: 'medium',
    source: 'Danebank 2020 similar',
    q: 'How many solutions does \\(\\cos \\pi x = 1 - |x|\\) have on \\((-\\infty, \\infty)\\)?',
    correct: '5 solutions',
    distractors: ['2 solutions', '3 solutions', '6 solutions'],
    a: nextA(),
    solutionSteps: [
      step('Each solution is a graph intersection.', '\\(\\text{intersect}\\)'),
      step('No intersections for \\(|x| > 2\\).', '\\(|x| > 2\\): none'),
      step('Five intersections remain in \\([-2, 2]\\).', '\\(5\\)'),
    ],
  })
);

// ═══════════════ 2F ═══════════════
ITEMS.push(
  mc({
    id: 'asc2020-q22a',
    topicId: 'y12a-2F',
    difficulty: 'medium',
    source: 'ASC 2020',
    q: 'Point \\((-1, 3)\\) on \\(y = f(x)\\) maps under \\(y = -2f(x)\\) to which point, with which transforms?',
    correct: '\\((-1, -6)\\); reflect in \\(x\\)-axis then vertical stretch by 2',
    distractors: [
      '\\((-1, 6)\\); vertical stretch by 2 only',
      '\\((2, -3)\\); reflect in \\(y\\)-axis',
      '\\((-2, -6)\\); horizontal stretch by 2',
    ],
    a: nextA(),
    solutionSteps: [
      step('Map: \\((x, y) \\mapsto (x, -2y)\\).', '\\((x,y)\\to(x,-2y)\\)'),
      step('\\((-1, 3) \\mapsto (-1, -6)\\).', '\\((-1, -6)\\)'),
      step('Reflect in \\(x\\)-axis, then stretch vertically by 2.', '\\(\\text{reflect }x,\\;\\times 2\\)'),
    ],
  }),
  mc({
    id: 'bar2020-mc5',
    topicId: 'y12a-2F',
    difficulty: 'easy',
    source: 'Barker 2020',
    q: 'Reflect \\(f(x) = x^2 - 5x + 1\\) about the \\(y\\)-axis. New equation?',
    correct: '\\(y = x^2 + 5x + 1\\)',
    distractors: ['\\(y = x^2 + 5x - 1\\)', '\\(y = -x^2 + 5x + 1\\)', '\\(y = -x^2 + 5x - 1\\)'],
    a: nextA(),
    solutionSteps: [
      step('Replace \\(x\\) by \\(-x\\).', '\\(f(-x)\\)'),
      step('\\(f(-x) = x^2 + 5x + 1\\).', '\\(x^2 + 5x + 1\\)'),
      step('New equation \\(y = x^2 + 5x + 1\\).', '\\(y = x^2 + 5x + 1\\)'),
    ],
  }),
  mc({
    id: 'bar2020-mc5v',
    topicId: 'y12a-2F',
    difficulty: 'easy',
    source: 'Barker 2020 variant',
    q: 'Reflect \\(f(x) = x^2 - 3x + 4\\) about the \\(y\\)-axis. New equation?',
    correct: '\\(y = x^2 + 3x + 4\\)',
    distractors: ['\\(y = x^2 + 3x - 4\\)', '\\(y = -x^2 + 3x + 4\\)', '\\(y = -x^2 - 3x + 4\\)'],
    a: nextA(),
    solutionSteps: [
      step('Replace \\(x\\) by \\(-x\\).', '\\(f(-x)\\)'),
      step('\\(f(-x) = x^2 + 3x + 4\\).', '\\(x^2 + 3x + 4\\)'),
      step('New equation \\(y = x^2 + 3x + 4\\).', '\\(y = x^2 + 3x + 4\\)'),
    ],
  }),
  mc({
    id: 'cths2020-q24a',
    topicId: 'y12a-2F',
    difficulty: 'hard',
    source: 'Cherrybrook Tech 2020',
    q: '\\(f\\) has local max at \\(x=-3\\), local min at \\(x=-1\\), local max at \\(x=2\\). Where is \\(f^{\\prime}(x) > 0\\)?',
    correct: '\\((-\\infty, -3) \\cup (-1, 2)\\)',
    distractors: ['\\((-3, -1) \\cup (2, \\infty)\\)', '\\((-\\infty, -1)\\)', '\\((-3, 2)\\)'],
    a: nextA(),
    solutionSteps: [
      step('\\(f^{\\prime} = 0\\) at stationary points \\(-3, -1, 2\\).', '\\(f^{\\prime} = 0\\)'),
      step('\\(f^{\\prime} > 0\\) where \\(f\\) increases.', '\\(\\text{increasing}\\)'),
      step('Increasing on \\((-\\infty, -3)\\) and \\((-1, 2)\\).', '\\((-\\infty,-3)\\cup(-1,2)\\)'),
    ],
  }),
  mc({
    id: 'cths2020-q24b',
    topicId: 'y12a-2F',
    difficulty: 'medium',
    source: 'Cherrybrook Tech 2020',
    q: 'Same \\(f\\). Under \\(y = f(-x)\\), the local max at \\(x = -3\\) becomes:',
    correct: 'Local maximum at \\(x = 3\\)',
    distractors: ['Local maximum at \\(x = -3\\)', 'Local minimum at \\(x = 3\\)', 'Local maximum at \\(x = 1\\)'],
    a: nextA(),
    solutionSteps: [
      step('\\(f(-x)\\) reflects in the \\(y\\)-axis.', '\\(x \\to -x\\)'),
      step('\\(-3\\) maps to \\(3\\).', '\\(3\\)'),
      step('A local max remains a local max.', '\\(\\text{max at } 3\\)'),
    ],
  }),
  mc({
    id: 'cths2020s-q24a',
    topicId: 'y12a-2F',
    difficulty: 'hard',
    source: 'Cherrybrook Tech 2020 similar',
    q: '\\(h\\) has local max at \\(x=-4\\), local min at \\(x=-2\\), local max at \\(x=1\\). Where is \\(h^{\\prime}(x) > 0\\)?',
    correct: '\\((-\\infty, -4) \\cup (-2, 1)\\)',
    distractors: ['\\((-4, -2) \\cup (1, \\infty)\\)', '\\((-4, 1)\\)', '\\((-2, \\infty)\\)'],
    a: nextA(),
    solutionSteps: [
      step('Zeros of \\(h^{\\prime}\\) at \\(-4, -2, 1\\).', '\\(h^{\\prime} = 0\\)'),
      step('Positive on increasing intervals.', '\\(\\text{increasing}\\)'),
      step('\\(h^{\\prime} > 0\\) on \\((-\\infty, -4) \\cup (-2, 1)\\).', '\\((-\\infty,-4)\\cup(-2,1)\\)'),
    ],
  }),
  mc({
    id: 'cths2020s-q24b',
    topicId: 'y12a-2F',
    difficulty: 'medium',
    source: 'Cherrybrook Tech 2020 similar',
    q: 'Same \\(h\\). Under \\(y = h(-x)\\), the local max at \\(x = -4\\) becomes:',
    correct: 'Local maximum at \\(x = 4\\)',
    distractors: ['Local minimum at \\(x = 4\\)', 'Local maximum at \\(x = -4\\)', 'Local maximum at \\(x = 2\\)'],
    a: nextA(),
    solutionSteps: [
      step('Reflection in \\(y\\)-axis: \\(x \\mapsto -x\\).', '\\(x \\to -x\\)'),
      step('\\(-4\\) maps to \\(4\\).', '\\(4\\)'),
      step('Remains a local maximum.', '\\(\\text{max at } 4\\)'),
    ],
  })
);

// ═══════════════ 2G ═══════════════
ITEMS.push(
  mc({
    id: 'asc2020-q22b',
    topicId: 'y12a-2G',
    difficulty: 'hard',
    source: 'ASC 2020',
    q: 'Point \\((-1, 3)\\) on \\(y = f(x)\\) maps under \\(y = f\\!\\left(\\dfrac{x}{2} + 2\\right)\\) to:',
    correct: '\\((-6, 3)\\)',
    distractors: ['\\((-1, 6)\\)', '\\((0, 3)\\)', '\\((-0.5, 3)\\)'],
    a: nextA(),
    solutionSteps: [
      step('Require \\(\\dfrac{x}{2} + 2 = -1\\).', '\\(\\dfrac{x}{2} + 2 = -1\\)'),
      step('Solve: \\(x = -6\\).', '\\(x = -6\\)'),
      step('\\(y\\) unchanged: image \\((-6, 3)\\).', '\\((-6, 3)\\)'),
    ],
  }),
  mc({
    id: 'asc2020-q22v',
    topicId: 'y12a-2G',
    difficulty: 'medium',
    source: 'ASC 2020 variant',
    q: '\\(y = f(x)\\) passes through \\((2, 5)\\). Which point is on \\(y = f(2x - 1)\\)?',
    correct: '\\(\\left(\\dfrac{3}{2},\\; 5\\right)\\)',
    distractors: ['\\((5,\\; 5)\\)', '\\((3,\\; 5)\\)', '\\(\\left(\\dfrac{1}{2},\\; 5\\right)\\)'],
    a: nextA(),
    solutionSteps: [
      step('Need \\(2x - 1 = 2\\) so \\(f(2x-1) = f(2) = 5\\).', '\\(2x - 1 = 2\\)'),
      step('\\(x = \\dfrac{3}{2}\\).', '\\(x = \\dfrac{3}{2}\\)'),
      step('Point \\(\\left(\\dfrac{3}{2}, 5\\right)\\).', '\\(\\left(\\dfrac{3}{2}, 5\\right)\\)'),
    ],
  }),
  tr({
    id: 'asc2020-q22',
    topicId: 'y12a-2G',
    source: 'ASC 2020',
    q: 'On separate axes, sketch \\(y = -2f(x)\\) and \\(y = f\\!\\left(\\dfrac{x}{2} + 2\\right)\\) given \\(f\\) is a U-parabola through \\((-1, 3)\\).',
    answer: '\\(y=-2f(x)\\): point maps to \\((-1,-6)\\). \\(y=f(x/2+2)\\): point maps to \\((-6,3)\\).',
    solutionSteps: [
      step('Part (a): reflect in \\(x\\)-axis and stretch vertically by 2; \\((-1,3)\\to(-1,-6)\\).', '\\((-1,-6)\\)'),
      step('Part (b): horizontal stretch by 2 then left 4; \\((-1,3)\\to(-6,3)\\).', '\\((-6,3)\\)'),
      step('Sketch each transformed parabola using the mapped key point.', '\\(\\text{sketch}\\)'),
    ],
  })
);

// ═══════════════ 2H ═══════════════
ITEMS.push(
  mc({
    id: 'abb2020-mc7',
    topicId: 'y12a-2H',
    difficulty: 'medium',
    source: 'Abbotsleigh 2020',
    q: '\\(y = f(x)\\) has stationary point \\((2, -3)\\). A stationary point of \\(y = -f\\!\\left(\\dfrac{x}{2}\\right) - 5\\) is:',
    correct: '\\((4, -2)\\)',
    distractors: ['\\((4, 2)\\)', '\\((1, 2)\\)', '\\((1, -2)\\)'],
    a: nextA(),
    solutionSteps: [
      step('Horizontal dilation by 2: \\(x\\)-coord \\(2 \\times 2 = 4\\).', '\\(x = 4\\)'),
      step('Reflect in \\(x\\)-axis: \\(y\\) from \\(-3\\) becomes \\(3\\); then down 5: \\(3 - 5 = -2\\).', '\\(y = -2\\)'),
      step('Stationary point \\((4, -2)\\).', '\\((4, -2)\\)'),
    ],
  }),
  mc({
    id: 'bar2020-mc10',
    topicId: 'y12a-2H',
    difficulty: 'hard',
    source: 'Barker 2020',
    q: 'Turning point of \\(y = f(x)\\) is \\((6, 2)\\). For \\(y = 3f(-2x + 4) + 2\\), the new turning point is:',
    correct: '\\((-1, 8)\\)',
    distractors: ['\\((-7, 8)\\)', '\\((-10, 8)\\)', '\\((-16, 8)\\)'],
    a: nextA(),
    solutionSteps: [
      step('Set inside = original input: \\(-2x + 4 = 6\\).', '\\(-2x + 4 = 6\\)'),
      step('Solve: \\(x = -1\\).', '\\(x = -1\\)'),
      step('New \\(y = 3 \\cdot 2 + 2 = 8\\). Point \\((-1, 8)\\).', '\\((-1, 8)\\)'),
    ],
  }),
  mc({
    id: 'bar2020-mc10v',
    topicId: 'y12a-2H',
    difficulty: 'hard',
    source: 'Barker 2020 variant',
    q: 'Turning point of \\(y = f(x)\\) is \\((4, 3)\\). For \\(y = 2f(-x + 1) + 5\\), the new turning point is:',
    correct: '\\((-3, 11)\\)',
    distractors: ['\\((5, 11)\\)', '\\((-3, 5)\\)', '\\((3, 11)\\)'],
    a: nextA(),
    solutionSteps: [
      step('Set \\(-x + 1 = 4 \\implies x = -3\\).', '\\(x = -3\\)'),
      step('New \\(y = 2 \\cdot 3 + 5 = 11\\).', '\\(y = 11\\)'),
      step('Point \\((-3, 11)\\).', '\\((-3, 11)\\)'),
    ],
  }),
  mc({
    id: 'cths2020-mc9',
    topicId: 'y12a-2H',
    difficulty: 'hard',
    source: 'Cherrybrook Tech 2020',
    q: 'Transformations in order: left 2, horizontal dilation factor 3, down 4. Image of \\(y = f(x)\\)?',
    correct: '\\(y = f\\!\\left(\\dfrac{x}{3} + 2\\right) - 4\\)',
    distractors: [
      '\\(y = f(3(x + 2)) - 4\\)',
      '\\(y = f\\!\\left(\\dfrac{x + 2}{3}\\right) - 4\\)',
      '\\(y = f(3x + 2) - 4\\)',
    ],
    a: nextA(),
    solutionSteps: [
      step('Left 2: \\(f(x + 2)\\).', '\\(f(x + 2)\\)'),
      step('Horizontal dilation by 3: replace \\(x\\) by \\(\\dfrac{x}{3}\\).', '\\(f\\!\\left(\\dfrac{x}{3} + 2\\right)\\)'),
      step('Down 4: subtract 4.', '\\(f\\!\\left(\\dfrac{x}{3}+2\\right)-4\\)'),
    ],
  }),
  mc({
    id: 'cths2020s-mc9',
    topicId: 'y12a-2H',
    difficulty: 'hard',
    source: 'Cherrybrook Tech 2020 similar',
    q: 'Transformations in order: right 3, horizontal dilation factor 2, up 5. Image of \\(y = f(x)\\)?',
    correct: '\\(y = f\\!\\left(\\dfrac{x}{2} - 3\\right) + 5\\)',
    distractors: [
      '\\(y = f(2(x - 3)) + 5\\)',
      '\\(y = f\\!\\left(\\dfrac{x - 3}{2}\\right) + 5\\)',
      '\\(y = f(2x - 3) + 5\\)',
    ],
    a: nextA(),
    solutionSteps: [
      step('Right 3: \\(f(x - 3)\\).', '\\(f(x - 3)\\)'),
      step('H-dilate by 2: replace \\(x\\) by \\(\\dfrac{x}{2}\\).', '\\(f\\!\\left(\\dfrac{x}{2}-3\\right)\\)'),
      step('Up 5: add 5.', '\\(f\\!\\left(\\dfrac{x}{2}-3\\right)+5\\)'),
    ],
  }),
  mc({
    id: 'car2020-q32',
    topicId: 'y12a-2H',
    difficulty: 'hard',
    source: 'Caringbah 2020',
    q: '\\(f(x) = x^2\\) is transformed to a downward parabola with vertex \\((-1, -3)\\) and \\(y\\)-intercept \\((0, -5)\\). Equation?',
    correct: '\\(g(x) = -2(x + 1)^2 - 3\\)',
    distractors: [
      '\\(g(x) = 2(x + 1)^2 - 3\\)',
      '\\(g(x) = -2(x - 1)^2 - 3\\)',
      '\\(g(x) = -(x + 1)^2 - 5\\)',
    ],
    a: nextA(),
    solutionSteps: [
      step('Vertex form: \\(g(x) = k(x + 1)^2 - 3\\) with \\(k < 0\\).', '\\(g(x) = k(x+1)^2 - 3\\)'),
      step('Use \\(g(0) = -5\\): \\(k - 3 = -5 \\implies k = -2\\).', '\\(k = -2\\)'),
      step('So \\(g(x) = -2(x + 1)^2 - 3\\).', '\\(g(x) = -2(x+1)^2-3\\)'),
    ],
  }),
  mc({
    id: 'car2020s-q32',
    topicId: 'y12a-2H',
    difficulty: 'hard',
    source: 'Caringbah 2020 similar',
    q: '\\(f(x) = x^2\\) transforms to \\(g(x) = k f(x + b) + c\\) with vertex \\((2, -4)\\) and point \\((0, -8)\\). Find \\(g\\).',
    correct: '\\(g(x) = -(x - 2)^2 - 4\\)',
    distractors: [
      '\\(g(x) = (x - 2)^2 - 4\\)',
      '\\(g(x) = -2(x - 2)^2 - 4\\)',
      '\\(g(x) = -(x + 2)^2 - 4\\)',
    ],
    a: nextA(),
    solutionSteps: [
      step('Vertex \\((2, -4)\\): \\(g(x) = k(x - 2)^2 - 4\\).', '\\(g(x) = k(x-2)^2-4\\)'),
      step('Use \\((0, -8)\\): \\(k(4) - 4 = -8 \\implies 4k = -4 \\implies k = -1\\).', '\\(k = -1\\)'),
      step('\\(g(x) = -(x - 2)^2 - 4\\).', '\\(g(x) = -(x-2)^2-4\\)'),
    ],
  }),
  mc({
    id: 'dane2020-q30',
    topicId: 'y12a-2H',
    difficulty: 'hard',
    source: 'Danebank 2020',
    q: '\\(f(x) = x^2\\) → downward parabola vertex \\((-1, -3)\\) through \\((0, -5)\\). Write \\(g(x) = k f(x + b) + c\\).',
    correct: '\\(g(x) = -2f(x + 1) - 3\\)',
    distractors: [
      '\\(g(x) = 2f(x + 1) - 3\\)',
      '\\(g(x) = -2f(x - 1) - 3\\)',
      '\\(g(x) = -f(x + 1) - 5\\)',
    ],
    a: nextA(),
    solutionSteps: [
      step('Left 1 and down 3: \\(g(x) = k f(x + 1) - 3\\).', '\\(g = k f(x+1)-3\\)'),
      step('Point \\((0, -5)\\): \\(-5 = k \\cdot 1 - 3 \\implies k = -2\\).', '\\(k = -2\\)'),
      step('\\(g(x) = -2f(x + 1) - 3\\).', '\\(g = -2f(x+1)-3\\)'),
    ],
  }),
  mc({
    id: 'dane2020s-q30',
    topicId: 'y12a-2H',
    difficulty: 'hard',
    source: 'Danebank 2020 similar',
    q: '\\(f(x) = x^2\\) → vertex \\((2, -4)\\) through \\((0, -8)\\). Write \\(g(x) = k f(x + b) + c\\).',
    correct: '\\(g(x) = -f(x - 2) - 4\\)',
    distractors: [
      '\\(g(x) = f(x - 2) - 4\\)',
      '\\(g(x) = -2f(x - 2) - 4\\)',
      '\\(g(x) = -f(x + 2) - 4\\)',
    ],
    a: nextA(),
    solutionSteps: [
      step('Right 2, down 4: \\(g(x) = k f(x - 2) - 4\\).', '\\(g = k f(x-2)-4\\)'),
      step('\\((0, -8)\\): \\(-8 = k \\cdot 4 - 4 \\implies k = -1\\).', '\\(k = -1\\)'),
      step('\\(g(x) = -f(x - 2) - 4\\).', '\\(g = -f(x-2)-4\\)'),
    ],
  }),
  mc({
    id: 'fortst2020-q10f',
    topicId: 'y12a-2H',
    difficulty: 'medium',
    source: 'Fort Street 2020',
    q: 'In correct order, transforms from \\(y = f(x)\\) to \\(y = f\\!\\left(2\\left(x - \\dfrac{1}{4}\\right)\\right)\\)?',
    correct: 'Horizontal dilation by \\(\\dfrac{1}{2}\\), then translation \\(\\dfrac{1}{4}\\) right',
    distractors: [
      'Translation \\(\\dfrac{1}{4}\\) right, then dilation by \\(\\dfrac{1}{2}\\)',
      'Horizontal dilation by 2, then translation \\(\\dfrac{1}{4}\\) left',
      'Vertical dilation by \\(\\dfrac{1}{2}\\), then right \\(\\dfrac{1}{4}\\)',
    ],
    a: nextA(),
    solutionSteps: [
      step('Factor 2 inside ⇒ horizontal dilation by \\(\\dfrac{1}{2}\\) (closest to \\(x\\) first).', '\\(\\text{h-dilate }\\tfrac{1}{2}\\)'),
      step('Then \\(-\\dfrac{1}{4}\\) gives translation \\(\\dfrac{1}{4}\\) right.', '\\(\\text{right }\\tfrac{1}{4}\\)'),
      step('Order: dilation then translation.', '\\(\\text{dilate then translate}\\)'),
    ],
  }),
  mc({
    id: 'fortst2020s-q10f',
    topicId: 'y12a-2H',
    difficulty: 'medium',
    source: 'Fort Street 2020 similar',
    q: 'Transforms from \\(y = f(x)\\) to \\(y = f\\!\\left(2\\left(x - \\dfrac{1}{4}\\right)\\right)\\), in order?',
    correct: 'Horizontal dilation by \\(\\dfrac{1}{2}\\), then translation \\(\\dfrac{1}{4}\\) right',
    distractors: [
      'Right \\(\\dfrac{1}{4}\\) then dilation by \\(\\dfrac{1}{2}\\)',
      'Dilation by 2 then left \\(\\dfrac{1}{4}\\)',
      'Vertical stretch by 2 then right \\(\\dfrac{1}{4}\\)',
    ],
    a: nextA(),
    solutionSteps: [
      step('Factor 2 ⇒ horizontal dilation factor \\(\\dfrac{1}{2}\\).', '\\(\\text{h-dilate }\\tfrac{1}{2}\\)'),
      step('Then shift \\(\\dfrac{1}{4}\\) right.', '\\(\\text{right }\\tfrac{1}{4}\\)'),
      step('Dilation (inner) first, then translation.', '\\(\\text{order}\\)'),
    ],
  }),
  tr({
    id: 'fortst2020-q10g',
    topicId: 'y12a-2H',
    source: 'Fort Street 2020',
    q: 'Sketch \\(y = f\\!\\left(2\\left(x - \\dfrac{1}{4}\\right)\\right)\\), showing intercepts, stationary and inflection points (from the prior transformed graph of \\(f\\)).',
    answer:
      'Horizontally dilated by \\(\\dfrac{1}{2}\\) and shifted \\(\\dfrac{1}{4}\\) right: e.g. intercepts \\(\\left(-\\dfrac{3}{4},0\\right),\\left(\\dfrac{5}{4},0\\right)\\); min \\(\\left(-\\dfrac{1}{4},-27\\right)\\).',
    solutionSteps: [
      step('Apply horizontal dilation factor \\(\\dfrac{1}{2}\\) to all key \\(x\\)-coordinates of the previous sketch.', '\\(x \\mapsto \\dfrac{x}{2}\\)'),
      step('Then add \\(\\dfrac{1}{4}\\) to each \\(x\\)-coordinate.', '\\(x \\mapsto x + \\dfrac{1}{4}\\)'),
      step('Plot intercepts, stationary and inflection points and join smoothly.', '\\(\\text{sketch}\\)'),
    ],
  }),
  tr({
    id: 'fortst2020s-q10g',
    topicId: 'y12a-2H',
    source: 'Fort Street 2020 similar',
    q: 'Sketch \\(y = f\\!\\left(2\\left(x - \\dfrac{1}{4}\\right)\\right)\\) with intercepts, stationary and inflection points.',
    answer:
      'Dilate horizontally by \\(\\dfrac{1}{2}\\) then right \\(\\dfrac{1}{4}\\): e.g. intercepts \\(\\left(-\\dfrac{5}{4},0\\right),\\left(\\dfrac{3}{4},0\\right)\\); min \\(\\left(-\\dfrac{3}{4},-27\\right)\\).',
    solutionSteps: [
      step('Halve all key \\(x\\)-coordinates (horizontal dilation \\(\\dfrac{1}{2}\\)).', '\\(x \\mapsto \\dfrac{x}{2}\\)'),
      step('Shift every point right by \\(\\dfrac{1}{4}\\).', '\\(x \\mapsto x + \\dfrac{1}{4}\\)'),
      step('Sketch the resulting curve with labelled key points.', '\\(\\text{sketch}\\)'),
    ],
  })
);

// ═══════════════ 2I Trig graphs ═══════════════
ITEMS.push(
  mc({
    id: 'abb2020-mc4',
    topicId: 'y12a-2I',
    difficulty: 'easy',
    source: 'Abbotsleigh 2020',
    q: 'What is the period of \\(y = -3\\cos\\!\\left(2x - \\dfrac{\\pi}{4}\\right)\\)?',
    correct: '\\(\\pi\\)',
    distractors: ['\\(3\\)', '\\(2\\pi\\)', '\\(-3\\)'],
    a: nextA(),
    solutionSteps: [
      step('Period of \\(\\cos(bx)\\) is \\(\\dfrac{2\\pi}{|b|}\\).', '\\(T = \\dfrac{2\\pi}{|b|}\\)'),
      step('Here \\(b = 2\\).', '\\(b = 2\\)'),
      step('\\(T = \\dfrac{2\\pi}{2} = \\pi\\). Amplitude/phase do not affect period.', '\\(T = \\pi\\)'),
    ],
  }),
  mc({
    id: 'abb2020-q16bi',
    topicId: 'y12a-2I',
    difficulty: 'medium',
    source: 'Abbotsleigh 2020',
    q:
      'Sophie models the depth of a river (in metres) by\n' +
      '\\(D = a\\sin\\!\\left(nt + \\dfrac{\\pi}{3}\\right) + c\\),\n' +
      'where \\(t\\) is time in hours. The maximum depth is \\(5\\,\\text{m}\\) and the minimum depth is \\(1\\,\\text{m}\\).\n\n' +
      'What is the amplitude \\(a\\)?',
    correct: '\\(a = 2\\)',
    distractors: ['\\(a = 4\\)', '\\(a = 3\\)', '\\(a = 1\\)'],
    a: nextA(),
    solutionSteps: [
      step(
        'For \\(D = a\\sin(\\ldots) + c\\), the amplitude is half the difference of maximum and minimum depth.',
        '\\(a = \\dfrac{\\text{max} - \\text{min}}{2}\\)'
      ),
      step('Substitute max \\(5\\,\\text{m}\\) and min \\(1\\,\\text{m}\\).', '\\(a = \\dfrac{5 - 1}{2} = 2\\)'),
      step('Therefore the amplitude is \\(a = 2\\) metres.', '\\(a = 2\\)'),
    ],
  }),
  mc({
    id: 'abb2020-q16bii',
    topicId: 'y12a-2I',
    difficulty: 'medium',
    source: 'Abbotsleigh 2020',
    q:
      'Sophie models the depth of a river (in metres) by\n' +
      '\\(D = a\\sin\\!\\left(nt + \\dfrac{\\pi}{3}\\right) + c\\),\n' +
      'where \\(t\\) is time in hours. The maximum depth is \\(5\\,\\text{m}\\) and the minimum depth is \\(1\\,\\text{m}\\).\n\n' +
      'What is the value of the constant \\(c\\)?',
    correct: '\\(c = 3\\)',
    distractors: ['\\(c = 2\\)', '\\(c = 4\\)', '\\(c = 5\\)'],
    a: nextA(),
    solutionSteps: [
      step(
        'The constant \\(c\\) is the centre line (mean depth): the average of the maximum and minimum values.',
        '\\(c = \\dfrac{\\text{max} + \\text{min}}{2}\\)'
      ),
      step('Using max \\(5\\,\\text{m}\\) and min \\(1\\,\\text{m}\\).', '\\(c = \\dfrac{5 + 1}{2} = 3\\)'),
      step('So the mean depth is \\(c = 3\\) metres.', '\\(c = 3\\)'),
    ],
  }),
  mc({
    id: 'abb2020-q16biii',
    topicId: 'y12a-2I',
    difficulty: 'medium',
    source: 'Abbotsleigh 2020',
    q:
      'Sophie models the depth of a river (in metres) by\n' +
      '\\(D = a\\sin\\!\\left(nt + \\dfrac{\\pi}{3}\\right) + c\\),\n' +
      'where \\(t\\) is time in hours.\n\n' +
      'The time between successive maximum depths (the period) is exactly \\(12\\) hours. Find the value of \\(n\\).',
    correct: '\\(n = \\dfrac{\\pi}{6}\\)',
    distractors: ['\\(n = \\dfrac{\\pi}{12}\\)', '\\(n = \\dfrac{\\pi}{3}\\)', '\\(n = \\dfrac{2\\pi}{3}\\)'],
    a: nextA(),
    solutionSteps: [
      step(
        'For \\(D = a\\sin(nt + \\phi) + c\\), the period is \\(T = \\dfrac{2\\pi}{|n|}\\). Here \\(T = 12\\) hours.',
        '\\(\\dfrac{2\\pi}{n} = 12\\quad (n > 0)\\)'
      ),
      step('Solve for \\(n\\).', '\\(n = \\dfrac{2\\pi}{12} = \\dfrac{\\pi}{6}\\)'),
      step('Therefore \\(n = \\dfrac{\\pi}{6}\\).', '\\(n = \\dfrac{\\pi}{6}\\)'),
    ],
  }),
  mc({
    id: 'car2020-q33b',
    topicId: 'y12a-2I',
    difficulty: 'medium',
    source: 'Caringbah 2020',
    q: 'How many solutions does \\(\\cos \\pi x = 1 - |x|\\) have for all real \\(x\\)?',
    correct: '5 solutions',
    distractors: ['3 solutions', '4 solutions', '7 solutions'],
    a: nextA(),
    solutionSteps: [
      step('Count intersections of \\(y = \\cos \\pi x\\) and \\(y = 1 - |x|\\).', '\\(\\text{intersect}\\)'),
      step('For \\(|x| > 2\\) the absolute-value graph is below \\(-1\\).', '\\(|x|>2\\): none'),
      step('Five intersections in \\([-2, 2]\\).', '\\(5\\)'),
    ],
  }),
  mc({
    id: 'car2020s-q33b',
    topicId: 'y12a-2I',
    difficulty: 'medium',
    source: 'Caringbah 2020 similar',
    q: 'How many solutions does \\(\\sin \\pi x = 1 - |x|\\) have for all real \\(x\\)?',
    correct: '3 solutions',
    distractors: ['1 solution', '5 solutions', '7 solutions'],
    a: nextA(),
    solutionSteps: [
      step('Count intersections of sine wave period 2 with inverted-V \\(1-|x|\\).', '\\(\\text{intersect}\\)'),
      step('They meet at the peak \\(x=0\\) and two symmetric side points.', '\\(x=0\\) and two more'),
      step('Total 3 solutions.', '\\(3\\)'),
    ],
  }),
  mc({
    id: 'cra2023-q29a',
    topicId: 'y12a-2I',
    difficulty: 'easy',
    source: 'Cranbrook 2023',
    q: 'Periods of \\(y = 2\\cos x\\) and \\(y = \\cot x\\)?',
    correct: '\\(2\\pi\\) and \\(\\pi\\) respectively',
    distractors: ['\\(\\pi\\) and \\(2\\pi\\)', '\\(2\\pi\\) and \\(2\\pi\\)', '\\(\\pi\\) and \\(\\pi\\)'],
    a: nextA(),
    solutionSteps: [
      step('Vertical stretch does not change period of cosine: still \\(2\\pi\\).', '\\(T_{2\\cos x}=2\\pi\\)'),
      step('Cotangent has period \\(\\pi\\) (same as tan).', '\\(T_{\\cot x}=\\pi\\)'),
      step('Periods: \\(2\\pi\\) and \\(\\pi\\).', '\\(2\\pi,\\;\\pi\\)'),
    ],
  }),
  mc({
    id: 'cra2023s-q29a',
    topicId: 'y12a-2I',
    difficulty: 'easy',
    source: 'Cranbrook 2023 similar',
    q: 'Periods of \\(y = 2\\sin x\\) and \\(y = \\tan x\\)?',
    correct: '\\(2\\pi\\) and \\(\\pi\\) respectively',
    distractors: ['\\(\\pi\\) and \\(2\\pi\\)', '\\(2\\pi\\) and \\(2\\pi\\)', '\\(\\pi\\) and \\(\\pi\\)'],
    a: nextA(),
    solutionSteps: [
      step('Sine period is still \\(2\\pi\\) after vertical stretch.', '\\(T_{2\\sin x}=2\\pi\\)'),
      step('Tangent period is \\(\\pi\\).', '\\(T_{\\tan x}=\\pi\\)'),
      step('Periods: \\(2\\pi\\) and \\(\\pi\\).', '\\(2\\pi,\\;\\pi\\)'),
    ],
  }),
  mc({
    id: 'cths2020-mc7',
    topicId: 'y12a-2I',
    difficulty: 'medium',
    source: 'Cherrybrook Tech 2020',
    q: 'Which best describes \\(g(x) = 2\\cos\\!\\left(\\dfrac{x}{2} + \\dfrac{\\pi}{3}\\right)\\)?',
    correct: 'Amplitude 2, period \\(4\\pi\\), shifted left by \\(\\dfrac{2\\pi}{3}\\)',
    distractors: [
      'Amplitude 2, period \\(4\\pi\\), no phase shift',
      'Amplitude 2, period \\(\\pi\\), with phase shift',
      'Amplitude 2, period \\(\\pi\\), no phase shift',
    ],
    a: nextA(),
    solutionSteps: [
      step('Amplitude \\(|a| = 2\\).', '\\(a = 2\\)'),
      step('Period \\(\\dfrac{2\\pi}{1/2} = 4\\pi\\).', '\\(T = 4\\pi\\)'),
      step('Phase: rewrite as \\(2\\cos\\dfrac{1}{2}\\left(x + \\dfrac{2\\pi}{3}\\right)\\) → left by \\(\\dfrac{2\\pi}{3}\\).', '\\(\\text{left }\\dfrac{2\\pi}{3}\\)'),
    ],
  }),
  mc({
    id: 'cths2020s-mc7',
    topicId: 'y12a-2I',
    difficulty: 'medium',
    source: 'Cherrybrook Tech 2020 similar',
    q: 'Which best describes \\(g(x) = 3\\cos\\!\\left(\\dfrac{x}{3} + \\dfrac{\\pi}{4}\\right)\\)?',
    correct: 'Amplitude 3, period \\(6\\pi\\), shifted left by \\(\\dfrac{3\\pi}{4}\\)',
    distractors: [
      'Amplitude 3, period \\(6\\pi\\), no phase shift',
      'Amplitude 3, period \\(\\pi\\), with phase shift',
      'Amplitude 3, period \\(\\pi\\), no phase shift',
    ],
    a: nextA(),
    solutionSteps: [
      step('Amplitude 3.', '\\(a = 3\\)'),
      step('Period \\(\\dfrac{2\\pi}{1/3} = 6\\pi\\).', '\\(T = 6\\pi\\)'),
      step('Phase left by \\(\\dfrac{\\pi/4}{1/3} = \\dfrac{3\\pi}{4}\\).', '\\(\\text{left }\\dfrac{3\\pi}{4}\\)'),
    ],
  }),
  mc({
    id: 'dane2020-mc8',
    topicId: 'y12a-2I',
    difficulty: 'medium',
    source: 'Danebank 2020',
    q: 'Change in amplitude and period from \\(f(x) = \\tfrac{1}{2}\\sin 4x\\) to \\(g(x) = \\sin 2x\\)?',
    correct: 'The amplitude is doubled and the period is doubled',
    distractors: [
      'The amplitude is halved and the period is halved',
      'The amplitude is halved and the period is doubled',
      'The amplitude is doubled and the period is halved',
    ],
    a: nextA(),
    solutionSteps: [
      step('\\(f\\): amp \\(\\tfrac{1}{2}\\), period \\(\\dfrac{2\\pi}{4} = \\dfrac{\\pi}{2}\\).', '\\(A_f=\\tfrac12,\\; T_f=\\tfrac{\\pi}{2}\\)'),
      step('\\(g\\): amp 1, period \\(\\pi\\).', '\\(A_g=1,\\; T_g=\\pi\\)'),
      step('Amplitude ×2 and period ×2.', '\\(\\times 2,\\;\\times 2\\)'),
    ],
  }),
  mc({
    id: 'dane2020s-mc8',
    topicId: 'y12a-2I',
    difficulty: 'medium',
    source: 'Danebank 2020 similar',
    q: 'Change in amplitude and period from \\(f(x) = \\tfrac{1}{2}\\sin 6x\\) to \\(g(x) = \\sin 3x\\)?',
    correct: 'The amplitude is doubled and the period is doubled',
    distractors: [
      'The amplitude is halved and the period is halved',
      'The amplitude is halved and the period is doubled',
      'The amplitude is doubled and the period is halved',
    ],
    a: nextA(),
    solutionSteps: [
      step('\\(f\\): amp \\(\\tfrac{1}{2}\\), period \\(\\dfrac{\\pi}{3}\\).', '\\(A_f=\\tfrac12,\\; T_f=\\tfrac{\\pi}{3}\\)'),
      step('\\(g\\): amp 1, period \\(\\dfrac{2\\pi}{3}\\).', '\\(A_g=1,\\; T_g=\\tfrac{2\\pi}{3}\\)'),
      step('Both amplitude and period double.', '\\(\\times 2,\\;\\times 2\\)'),
    ],
  }),
  // sketches
  tr({
    id: 'car2020-q33',
    topicId: 'y12a-2I',
    source: 'Caringbah 2020',
    q: '(a) Sketch \\(y = \\cos \\pi x\\) and \\(y = 1 - |x|\\) for \\(-3 \\le x \\le 3\\).\n(b) Hence state the number of solutions of \\(\\cos \\pi x = 1 - |x|\\).',
    answer: '(a) Cosine period 2; inverted-V apex \\((0,1)\\). (b) 5 solutions.',
    solutionSteps: [
      step('\\(y=\\cos\\pi x\\): period 2, amplitude 1. \\(y=1-|x|\\): apex \\((0,1)\\), intercepts \\(\\pm1\\).', '\\(T=2\\)'),
      step('Intersections only for \\(|x|\\le 2\\).', '\\(|x|\\le 2\\)'),
      step('Count gives 5 solutions.', '\\(5\\)'),
    ],
  }),
  tr({
    id: 'car2020s-q33',
    topicId: 'y12a-2I',
    source: 'Caringbah 2020 similar',
    q: '(a) Sketch \\(y = \\sin \\pi x\\) and \\(y = 1 - |x|\\) for \\(-3 \\le x \\le 3\\).\n(b) Number of solutions of \\(\\sin \\pi x = 1 - |x|\\)?',
    answer: '(a) Sine period 2; inverted-V apex \\((0,1)\\). (b) 3 solutions.',
    solutionSteps: [
      step('Sketch both graphs on \\([-3,3]\\).', '\\(\\text{sketch}\\)'),
      step('Count intersections for all real \\(x\\).', '\\(\\text{count}\\)'),
      step('There are 3 solutions.', '\\(3\\)'),
    ],
  }),
  tr({
    id: 'dane2020-q32a',
    topicId: 'y12a-2I',
    source: 'Danebank 2020',
    q: 'On the same diagram, draw \\(y = \\cos \\pi x\\) and \\(y = 1 - |x|\\) for \\(-3 \\le x \\le 3\\).',
    answer: 'Cosine wave amp 1 period 2; inverted-V apex \\((0,1)\\), intercepts \\((\\pm1,0)\\).',
    solutionSteps: [
      step('Plot cosine: period 2, through \\((0,1)\\), \\((\\pm1,0)\\), \\((\\pm2,-1)\\).', '\\(T=2\\)'),
      step('Plot inverted-V: apex \\((0,1)\\), intercepts \\(\\pm1\\).', '\\((0,1)\\)'),
      step('Label key points clearly.', '\\(\\text{label}\\)'),
    ],
  }),
  tr({
    id: 'dane2020s-q32a',
    topicId: 'y12a-2I',
    source: 'Danebank 2020 similar',
    q: 'On the same diagram, draw \\(y = \\cos \\pi x\\) and \\(y = 1 - |x|\\) for \\(-3 \\le x \\le 3\\).',
    answer: 'Cosine amp 1 period 2; inverted-V apex \\((0,1)\\), intercepts \\((\\pm1,0)\\).',
    solutionSteps: [
      step('Sketch cosine wave period 2.', '\\(T=2\\)'),
      step('Sketch inverted-V with apex \\((0,1)\\).', '\\((0,1)\\)'),
      step('Mark intercepts and intersections for part (b).', '\\(\\text{marks}\\)'),
    ],
  }),
  tr({
    id: 'fortst2020-q18d',
    topicId: 'y12a-2I',
    source: 'Fort Street 2020',
    q: 'Graph \\(T = 7\\sin\\!\\left(\\dfrac{\\pi}{6}x + 1.5\\right) + 13\\) for \\(1 \\le x \\le 12\\).',
    answer: 'Sine period 12, amp 7, mean 13; starts near \\((1,20)\\), min near \\((6,6)\\), back near \\((12,20)\\).',
    solutionSteps: [
      step('Amplitude 7, centre \\(T=13\\), period \\(\\dfrac{2\\pi}{\\pi/6} = 12\\).', '\\(A=7,\\; c=13,\\; T=12\\)'),
      step('Mark max \\(20\\) and min \\(6\\) over one period in the given window.', '\\(6 \\le T \\le 20\\)'),
      step('Sketch a smooth sine curve through these features.', '\\(\\text{sketch}\\)'),
    ],
  }),
  tr({
    id: 'fortst2020s-q18d',
    topicId: 'y12a-2I',
    source: 'Fort Street 2020 similar',
    q: 'Graph \\(T = 8\\sin\\!\\left(\\dfrac{\\pi}{6}x + 1\\right) + 15\\) for \\(1 \\le x \\le 12\\).',
    answer: 'Sine period 12, amp 8, mean 15; max 23, min 7 over the interval.',
    solutionSteps: [
      step('Amplitude 8, centre 15, period 12.', '\\(A=8,\\; c=15,\\; T=12\\)'),
      step('Range of values: \\(7 \\le T \\le 23\\).', '\\([7,23]\\)'),
      step('Sketch one period in \\([1,12]\\).', '\\(\\text{sketch}\\)'),
    ],
  })
);

// IDs that were multiparts replaced by splits — deactivate shells if present
const DEACTIVATE = new Set(['cths2020-q22', 'cths2020s-q22', 'cths2020-q24', 'cths2020s-q24']);

function validate(items) {
  for (const q of items) {
    if (q.type === 'multiple_choice') {
      if (!q.options || q.options.length !== 4) throw new Error(`${q.id}: opts`);
      if ((q.solutionSteps || []).length < 3) throw new Error(`${q.id}: steps ${q.solutionSteps?.length}`);
    }
    const j = JSON.stringify(q);
    const o = (j.match(/\\\(/g) || []).length;
    const c = (j.match(/\\\)/g) || []).length;
    if (o !== c) {
      // show offending fragments
      const bad = [];
      for (const [k, v] of Object.entries(q)) {
        if (typeof v === 'string') {
          const oo = (v.match(/\\\(/g) || []).length;
          const cc = (v.match(/\\\)/g) || []).length;
          if (oo !== cc) bad.push(`${k}:${oo}/${cc}:${v.slice(0, 120)}`);
        }
      }
      (q.solutionSteps || []).forEach((s, i) => {
        for (const k of ['explanation', 'workingOut']) {
          const v = s[k] || '';
          const oo = (v.match(/\\\(/g) || []).length;
          const cc = (v.match(/\\\)/g) || []).length;
          if (oo !== cc) bad.push(`step${i}.${k}:${oo}/${cc}:${v}`);
        }
      });
      (q.options || []).forEach((opt, i) => {
        const v = opt.text || '';
        const oo = (v.match(/\\\(/g) || []).length;
        const cc = (v.match(/\\\)/g) || []).length;
        if (oo !== cc) bad.push(`opt${i}:${oo}/${cc}:${v}`);
      });
      throw new Error(`${q.id}: parity ${o}/${c} :: ${bad.join(' | ')}`);
    }
  }
}

async function main() {
  console.log('Built', ITEMS.length, 'items; aDist', aDist);
  validate(ITEMS);
  const byId = Object.fromEntries(ITEMS.map((q) => [q.id, q]));

  if (!DO_FS) {
    console.log('Dry-run OK. Re-run with --firestore.');
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

  // Load existing to preserve exam chapterId / origin
  const snap = await db.collection('questions').where('topicId', '>=', 'y12a-2').where('topicId', '<', 'y12a-3').get();
  const existing = Object.fromEntries(snap.docs.map((d) => [d.id, d.data()]));
  console.log('FS existing y12a-2*', snap.size);

  for (const id of DEACTIVATE) {
    if (existing[id] && existing[id].origin !== 'teacher') {
      // only deactivate if we replaced with splits and shell still short_answer multipart
      if (existing[id].type === 'short_answer' || (existing[id].subQuestions || []).length) {
        await db.collection('questions').doc(id).set(
          { isActive: false, updatedAt: FieldValue.serverTimestamp() },
          { merge: true }
        );
        console.log('deactivated', id);
      }
    }
  }

  let written = 0;
  const ids = Object.keys(byId);
  for (let i = 0; i < ids.length; i += 400) {
    const batch = db.batch();
    for (const id of ids.slice(i, i + 400)) {
      const prev = existing[id];
      if (prev?.origin === 'teacher') {
        console.warn('skip teacher', id);
        continue;
      }
      const doc = { ...byId[id], updatedAt: FieldValue.serverTimestamp() };
      // preserve exam chapter placement
      if (prev?.chapterId && String(prev.chapterId).startsWith('exam:')) {
        doc.chapterId = prev.chapterId;
        doc.chapterTitle = prev.chapterTitle || doc.chapterTitle;
      }
      // preserve stem graphData if we didn't set one (given diagrams)
      if (prev?.graphData && !doc.graphData) {
        doc.graphData = prev.graphData;
      }
      batch.set(db.collection('questions').doc(id), doc, { merge: true });
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

  // rebuild-style topic counts for y12a-2*
  const after = await db.collection('questions').where('topicId', '>=', 'y12a-2').where('topicId', '<', 'y12a-3').get();
  const byType = {};
  const byTopic = {};
  let active = 0;
  after.docs.forEach((d) => {
    const x = d.data();
    if (x.isActive === false) return;
    active++;
    byType[x.type] = (byType[x.type] || 0) + 1;
    byTopic[x.topicId] = (byTopic[x.topicId] || 0) + 1;
  });
  console.log('After active', active, byType);
  console.log('byTopic', byTopic);
  console.log('aDist', aDist);
  console.log('Run: node tools/scripts/rebuildQuestionIndexes.js y12a-2');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
