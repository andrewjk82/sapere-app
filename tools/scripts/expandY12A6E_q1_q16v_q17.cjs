/**
 * Expand steps + add jsxGraph solution graphs for:
 *   y12a-6e-q1a, q1b, q16b_v, q17a, q17b
 *
 *   node tools/scripts/expandY12A6E_q1_q16v_q17.cjs
 */
'use strict';

const { initializeApp, cert, getApps } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');
const { readFileSync, writeFileSync } = require('fs');
const path = require('path');

const sa = JSON.parse(
  readFileSync(
    '/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json',
    'utf8'
  )
);
if (!getApps().length) initializeApp({ credential: cert(sa) });
const db = getFirestore();

function S(explanation, workingOut, graphData = null) {
  return { explanation, workingOut, graphData };
}

function jxg(bb, script, w = 400, h = 260) {
  return {
    jsxGraph: {
      width: w,
      height: h,
      boundingbox: bb,
      showAxisLabels: false,
      showGrid: false,
      script:
        "board.suspendUpdate(); " +
        script +
        " board.unsuspendUpdate();",
    },
  };
}

function axes(xmin, xmax, ymin, ymax) {
  return (
    `board.create('arrow', [[${xmin},0],[${xmax},0]], {strokeColor:'#94a3b8', strokeWidth:1.5});` +
    `board.create('arrow', [[0,${ymin}],[0,${ymax}]], {strokeColor:'#94a3b8', strokeWidth:1.5});` +
    `board.create('text', [${xmax * 0.85}, ${ymin * 0.35}, 'x'], {fontSize:13, color:'#64748b'});` +
    `board.create('text', [0.15, ${ymax * 0.9}, 'y'], {fontSize:13, color:'#64748b'});`
  );
}

// cos x with shade [a,b]
function graphCosShaded(a, b, label) {
  const xmin = -0.4;
  const xmax = Math.max(b + 0.6, 2.2);
  const ymin = -0.5;
  const ymax = 1.4;
  const script =
    axes(xmin, xmax, ymin, ymax) +
    `var f = board.create('functiongraph', [function(x){ return Math.cos(x); }, ${xmin + 0.05}, ${xmax - 0.05}], {strokeColor:'#6366f1', strokeWidth:2.6});` +
    `board.create('integral', [[${a}, ${b}], f], {fillColor:'#93c5fd', fillOpacity:0.45, strokeWidth:0});` +
    `board.create('line', [[${a},0],[${a},Math.cos(${a})]], {straightFirst:false, straightLast:false, strokeColor:'#64748b', strokeWidth:1.2, dash:2});` +
    `board.create('line', [[${b},0],[${b},Math.cos(${b})]], {straightFirst:false, straightLast:false, strokeColor:'#64748b', strokeWidth:1.2, dash:2});` +
    `board.create('text', [${(a + b) / 2}, 0.55, ${JSON.stringify(label)}], {fontSize:12, color:'#4f46e5', anchorX:'middle'});` +
    `board.create('text', [1.4, 1.15, 'y = cos x'], {fontSize:12, color:'#4f46e5'});`;
  return jxg([xmin, ymax, xmax, ymin], script, 400, 250);
}

// |cos x| style for n=2 example on [0,2π]
function graphCosNxArea() {
  const xmin = -0.4;
  const xmax = 2 * Math.PI + 0.5;
  const ymin = -1.35;
  const ymax = 1.45;
  // shade each absolute lobe for cos(2x) using polygons approx via multiple integrals of abs
  // Use cos(2x) and shade positive and negative parts separately via two integrals of the function
  // for negative lobes use -cos by flipping - actually integral shades under curve to axis including negative.
  // For absolute area visual, shade |cos 2x| as positive lobes: integrate cos2x on intervals where positive, -cos2x where negative.
  const script =
    axes(xmin, xmax, ymin, ymax) +
    `var f = board.create('functiongraph', [function(x){ return Math.cos(2*x); }, 0, ${2 * Math.PI}], {strokeColor:'#6366f1', strokeWidth:2.5});` +
    // positive lobes of cos2x: [0,π/4], [3π/4,5π/4], [7π/4,2π] wait cos2x > 0 when |2x| mod 2π in (-π/2,π/2)...
    // cos2x > 0 on [0, π/4], [3π/4, 5π/4]? 2x in [0,π/2] => [0,π/4]; 2x in [3π/2, 2π] => [3π/4, π]; ...
    // Positive: 2x ∈ (-π/2+2kπ, π/2+2kπ)
    // k=0: 2x ∈ (0,π/2) for x>0 → [0,π/4]
    // k=1: 2x ∈ (3π/2, 5π/2) → x ∈ (3π/4, 5π/4)
    // k=2: 2x ∈ (7π/2, 9π/2) → x ∈ (7π/4, 9π/4) cap at 2π → [7π/4, 2π]
    `board.create('integral', [[0, Math.PI/4], f], {fillColor:'#93c5fd', fillOpacity:0.4, strokeWidth:0});` +
    `board.create('integral', [[3*Math.PI/4, 5*Math.PI/4], f], {fillColor:'#93c5fd', fillOpacity:0.4, strokeWidth:0});` +
    `board.create('integral', [[7*Math.PI/4, 2*Math.PI], f], {fillColor:'#93c5fd', fillOpacity:0.4, strokeWidth:0});` +
    // negative lobes - shade with absolute: use g = -cos2x on those intervals... better create second function
    `var g = board.create('functiongraph', [function(x){ return -Math.cos(2*x); }, 0, 0.01], {strokeWidth:0, visible:false});` +
    // Actually for negative regions of f, integral still draws to axis. Use fill on negative lobes too with same integral on f (goes below)
    `board.create('integral', [[Math.PI/4, 3*Math.PI/4], f], {fillColor:'#fca5a5', fillOpacity:0.35, strokeWidth:0});` +
    `board.create('integral', [[5*Math.PI/4, 7*Math.PI/4], f], {fillColor:'#fca5a5', fillOpacity:0.35, strokeWidth:0});` +
    `board.create('text', [3.2, 1.15, 'y = cos 2x  (example n=2)'], {fontSize:12, color:'#4f46e5'});` +
    `board.create('text', [1.2, -1.15, 'shaded = absolute area'], {fontSize:11, color:'#64748b'});`;
  return jxg([xmin, ymax, xmax, ymin], script, 440, 260);
}

// y = 1 + sin(2πx) on [0,3]
function graphOnePlusSin() {
  const xmin = -0.25;
  const xmax = 3.3;
  const ymin = -0.35;
  const ymax = 2.35;
  const script =
    axes(xmin, xmax, ymin, ymax) +
    `board.create('functiongraph', [function(x){ return 1; }, 0, 3], {strokeColor:'#94a3b8', strokeWidth:1.2, dash:2});` +
    `var f = board.create('functiongraph', [function(x){ return 1 + Math.sin(2*Math.PI*x); }, 0, 3], {strokeColor:'#6366f1', strokeWidth:2.6});` +
    `board.create('integral', [[0, 3], f], {fillColor:'#93c5fd', fillOpacity:0.35, strokeWidth:0});` +
    `board.create('line', [[1,0],[1,2]], {straightFirst:false, straightLast:false, strokeColor:'#cbd5e1', strokeWidth:1, dash:2});` +
    `board.create('line', [[2,0],[2,2]], {straightFirst:false, straightLast:false, strokeColor:'#cbd5e1', strokeWidth:1, dash:2});` +
    `board.create('text', [1.5, 2.05, 'y = 1 + sin 2πx'], {fontSize:12, color:'#4f46e5', anchorX:'middle'});` +
    `board.create('text', [2.6, 1.15, 'y = 1'], {fontSize:11, color:'#64748b'});` +
    `board.create('text', [0.5, 0.2, 'period 1'], {fontSize:11, color:'#64748b'});` +
    `board.create('text', [1.5, 0.2, 'area 1'], {fontSize:11, color:'#64748b'});` +
    `board.create('text', [2.5, 0.2, 'area 1'], {fontSize:11, color:'#64748b'});`;
  return jxg([xmin, ymax, xmax, ymin], script, 440, 260);
}

const PATCH = {
  // ── q1a: convert to MC + graph + detailed steps ────────────────────
  'y12a-6e-q1a': {
    type: 'multiple_choice',
    requiresManualGrading: false,
    difficulty: 'easy',
    timeLimit: 90,
    question:
      'Find the exact area between the curve \\( y = \\cos x \\) and the \\(x\\)-axis from \\( x = 0 \\) to \\( x = \\dfrac{\\pi}{2} \\).',
    opts: ['\\(0\\)', '\\(1\\)', '\\(\\dfrac{\\pi}{2}\\)', '\\(\\dfrac{1}{2}\\)'],
    a: 1,
    answer: '1',
    hint: 'On this interval \\(\\cos x \\ge 0\\), so area equals \\(\\int_{0}^{\\pi/2}\\cos x\\,dx\\).',
    solution: 'The correct answer is \\(1\\).',
    graphData: graphCosShaded(0, Math.PI / 2, 'area'),
    solutionSteps: [
      S(
        'Given: area between \\(y = \\cos x\\) and the \\(x\\)-axis from \\(0\\) to \\(\\dfrac{\\pi}{2}\\). Why area, not a signed integral worry? On \\([0,\\pi/2]\\), cosine is non-negative, so the curve lies above the axis and area equals the definite integral.',
        '\\(A = \\int_{0}^{\\pi/2}\\cos x\\,dx\\)',
        graphCosShaded(0, Math.PI / 2, 'A')
      ),
      S(
        'Standard antiderivative: \\(\\int\\cos x\\,dx = \\sin x + C\\). No chain factor is needed because the argument is simply \\(x\\).',
        '\\(F(x) = \\sin x\\)'
      ),
      S(
        'Evaluate: \\(F\\!\\left(\\dfrac{\\pi}{2}\\right) - F(0) = \\sin\\dfrac{\\pi}{2} - \\sin 0 = 1 - 0 = 1\\).',
        '\\(1\\)'
      ),
      S(
        'Check: the graph is a quarter-cycle of cosine from height 1 down to 0; the enclosed region has area 1. A common slip writes \\(\\cos\\dfrac{\\pi}{2} - \\cos 0 = -1\\) (forgetting to integrate).',
        '\\(A = 1\\)'
      ),
      S(
        'Final answer: \\(1\\).',
        '\\(1\\)'
      ),
    ],
  },

  'y12a-6e-q1b': {
    type: 'multiple_choice',
    requiresManualGrading: false,
    difficulty: 'easy',
    timeLimit: 90,
    question:
      'Find the exact area between the curve \\( y = \\cos x \\) and the \\(x\\)-axis from \\( x = 0 \\) to \\( x = \\dfrac{\\pi}{6} \\).',
    opts: ['\\(0\\)', '\\(\\dfrac{1}{2}\\)', '\\(1\\)', '\\(\\dfrac{\\sqrt{3}}{2}\\)'],
    a: 1,
    answer: '1',
    hint: 'Area = \\(\\int_{0}^{\\pi/6}\\cos x\\,dx = \\sin x\\) evaluated at the limits.',
    solution: 'The correct answer is \\(\\dfrac{1}{2}\\).',
    graphData: graphCosShaded(0, Math.PI / 6, 'area'),
    solutionSteps: [
      S(
        'Given: area under \\(y = \\cos x\\) from \\(0\\) to \\(\\dfrac{\\pi}{6}\\). On this short interval cosine is positive, so\\[A = \\int_{0}^{\\pi/6}\\cos x\\,dx.\\]',
        '\\(A = \\int_{0}^{\\pi/6}\\cos x\\,dx\\)',
        graphCosShaded(0, Math.PI / 6, 'A')
      ),
      S(
        'Antiderivative: \\(F(x) = \\sin x\\).',
        '\\(F(x) = \\sin x\\)'
      ),
      S(
        'Evaluate: \\(F\\!\\left(\\dfrac{\\pi}{6}\\right) - F(0) = \\sin\\dfrac{\\pi}{6} - \\sin 0 = \\dfrac{1}{2} - 0 = \\dfrac{1}{2}\\).',
        '\\(\\dfrac{1}{2}\\)'
      ),
      S(
        'Why not \\(\\dfrac{\\sqrt{3}}{2}\\)? That is \\(\\cos\\dfrac{\\pi}{6}\\) or \\(\\sin\\dfrac{\\pi}{3}\\), not \\(\\sin\\dfrac{\\pi}{6}\\). A common slip confuses these exact values.',
        '\\(\\sin\\dfrac{\\pi}{6} = \\dfrac{1}{2}\\)'
      ),
      S(
        'Final answer: \\(\\dfrac{1}{2}\\).',
        '\\(\\dfrac{1}{2}\\)'
      ),
    ],
  },

  'y12a-6e-q16b_v': {
    solution: 'The correct answer is \\(4\\).',
    hint: 'Absolute area of \\(|\\cos nx|\\) on \\([0,2\\pi]\\) equals 4 for every positive integer \\(n\\).',
    graphData: graphCosNxArea(),
    solutionSteps: [
      S(
        'Given: area between \\(y = \\cos nx\\) and the \\(x\\)-axis from 0 to \\(2\\pi\\) (\\(n\\) a positive integer). Why absolute value? The signed integral is 0 (part a), but area counts every lobe above and below the axis as positive.',
        '\\(A = \\int_{0}^{2\\pi}|\\cos nx|\\,dx\\)',
        graphCosNxArea()
      ),
      S(
        'Zeros of \\(\\cos nx\\): \\(nx = \\dfrac{\\pi}{2} + k\\pi \\Rightarrow x = \\dfrac{(2k+1)\\pi}{2n}\\). These cut \\([0,2\\pi]\\) into \\(2n\\) half-waves (absolute lobes), the same count as for \\(|\\sin nx|\\).',
        '\\(2n\\ \\text{half-waves}\\)'
      ),
      S(
        'Area of one absolute half-wave of \\(\\cos nx\\): e.g. where cos is positive on the first lobe,\\[\\int_{0}^{\\pi/(2n)}\\cos nx\\,dx = \\left[\\dfrac{1}{n}\\sin nx\\right]_{0}^{\\pi/(2n)} = \\dfrac{1}{n}\\sin\\dfrac{\\pi}{2} - 0 = \\dfrac{1}{n}.\\]Wait — half-wave of cos from max to zero is only quarter period... Correct full half-period of period \\(\\dfrac{2\\pi}{n}\\) has length \\(\\dfrac{\\pi}{n}\\).',
        '\\(\\text{half-period length } = \\dfrac{\\pi}{n}\\)'
      ),
      S(
        'On an interval of length \\(\\dfrac{\\pi}{n}\\) where \\(\\cos nx\\) does not change sign,\\[\\int|\\cos nx|\\,dx = \\dfrac{2}{n}.\\](Same calculation as for \\(|\\sin nx|\\): one full arch of absolute cosine integrates to \\(\\dfrac{2}{n}\\).)',
        '\\(\\text{each half-wave area } = \\dfrac{2}{n}\\)'
      ),
      S(
        'Total: \\(A = 2n \\cdot \\dfrac{2}{n} = 4\\). Alternatively, \\(|\\cos nx| = \\left|\\sin\\!\\left(nx+\\dfrac{\\pi}{2}\\right)\\right|\\) has the same integral as \\(|\\sin nx|\\) on a full number of periods.',
        '\\(A = 4\\)'
      ),
      S(
        'The graph (example \\(n=2\\)) shows multiple equal absolute lobes; their areas sum to 4, independent of \\(n\\). Final answer: \\(4\\). A common slip answers 0 from the signed integral.',
        '\\(4\\)'
      ),
    ],
  },

  'y12a-6e-q17a': {
    solution: 'The correct answer is \\(n\\).',
    hint: 'Antiderivative \\(x - \\dfrac{1}{2\\pi}\\cos 2\\pi x\\); for integer \\(n\\) the cosine terms cancel.',
    graphData: graphOnePlusSin(),
    solutionSteps: [
      S(
        'Given: \\(\\displaystyle\\int_{0}^{n}(1 + \\sin 2\\pi x)\\,dx\\) for positive integer \\(n\\). The integrand is always at least 0 (sine ≥ −1), so the integral equals the area under the elevated sine wave.',
        '\\(\\int_{0}^{n}(1 + \\sin 2\\pi x)\\,dx\\)',
        graphOnePlusSin()
      ),
      S(
        'Integrate term by term. \\(\\int 1\\,dx = x\\). For the sine term, chain reverse: \\(\\int\\sin 2\\pi x\\,dx = -\\dfrac{1}{2\\pi}\\cos 2\\pi x\\).',
        '\\(F(x) = x - \\dfrac{1}{2\\pi}\\cos 2\\pi x\\)'
      ),
      S(
        'Evaluate: \\(F(n) - F(0) = \\left(n - \\dfrac{1}{2\\pi}\\cos 2\\pi n\\right) - \\left(0 - \\dfrac{1}{2\\pi}\\cos 0\\right) = n - \\dfrac{1}{2\\pi}\\cos(2\\pi n) + \\dfrac{1}{2\\pi}\\).',
        '\\(n - \\dfrac{1}{2\\pi}\\cos(2\\pi n) + \\dfrac{1}{2\\pi}\\)'
      ),
      S(
        'For integer \\(n\\), \\(\\cos(2\\pi n) = 1 = \\cos 0\\). The cosine terms cancel: \\(n - \\dfrac{1}{2\\pi} + \\dfrac{1}{2\\pi} = n\\).',
        '\\(n\\)'
      ),
      S(
        'Geometric reading (see graph for \\(n = 3\\)): the wave has period 1 about the line \\(y = 1\\). Over each unit interval the net area is 1, so over \\([0,n]\\) the total area is \\(n\\).',
        '\\(\\text{area per period } = 1\\)'
      ),
      S(
        'Final answer: \\(n\\).',
        '\\(n\\)'
      ),
    ],
  },

  'y12a-6e-q17b': {
    type: 'teacher_review',
    requiresManualGrading: true,
    answer:
      'Sketch of \\(y = 1 + \\sin 2\\pi x\\): period 1, range \\([0,2]\\), about the line \\(y=1\\). Each unit interval has area 1 under the curve, so total area from 0 to \\(n\\) is \\(n\\), matching part (a).',
    solution:
      'The graph is a sine wave of period 1 shifted up by 1 (range \\([0,2]\\)). It never goes below the \\(x\\)-axis. Over each interval \\([k,k+1]\\) the area under the curve is 1. Hence from 0 to \\(n\\) the total area is \\(n\\), which is exactly the value of the integral in part (a).',
    hint: 'Period is 1; sketch a few periods and link each unit area to part (a).',
    graphData: graphOnePlusSin(),
    solutionSteps: [
      S(
        'Rewrite the function: \\(y = 1 + \\sin 2\\pi x\\). Amplitude 1, vertical shift +1, so the range is \\([0,2]\\). Period: argument \\(2\\pi x\\) has period 1.',
        '\\(\\text{period }1,\\ \\text{range }[0,2]\\)',
        graphOnePlusSin()
      ),
      S(
        'Sketch on \\([0,n]\\) (the graph shows \\(n = 3\\) as a typical case): start at \\((0,1)\\), rise to 2 at \\(x = \\dfrac{1}{4}\\), return to 1 at \\(x = \\dfrac{1}{2}\\), down to 0 at \\(x = \\dfrac{3}{4}\\), back to 1 at \\(x = 1\\), and repeat.',
        '\\(y = 1 + \\sin 2\\pi x\\)'
      ),
      S(
        'Because \\(y \\ge 0\\) everywhere, the definite integral equals geometric area under the curve. From part (a), that area from 0 to \\(n\\) is exactly \\(n\\).',
        '\\(\\int_{0}^{n} y\\,dx = n\\)'
      ),
      S(
        'Per-period interpretation: each interval of length 1 contributes area 1 (the average height of one period of \\(1+\\sin\\) is 1). After \\(n\\) periods the total area is \\(n\\).',
        '\\(\\text{area per period } = 1\\)'
      ),
      S(
        'Final: labelled sketch with midline \\(y=1\\), period marks, and the statement that the integral equals the total shaded area \\(n\\).',
        '\\(\\text{sketch + geometric link to part (a)}\\)'
      ),
    ],
  },
};

// Fix the messy step 3 in q16b_v - rewrite more cleanly
PATCH['y12a-6e-q16b_v'].solutionSteps[2] = S(
  'The period of \\(\\cos nx\\) is \\(\\dfrac{2\\pi}{n}\\), so a half-period (one absolute lobe) has length \\(\\dfrac{\\pi}{n}\\). On \\([0,2\\pi]\\) there are exactly \\(2n\\) such lobes.',
  '\\(2n\\ \\text{lobes of length }\\dfrac{\\pi}{n}\\)'
);
PATCH['y12a-6e-q16b_v'].solutionSteps[3] = S(
  'Area of one absolute lobe of \\(\\cos nx\\):\\[\\int_{0}^{\\pi/n}|\\cos nx|\\,dx = \\dfrac{2}{n}.\\](For example, with \\(n=1\\): \\(\\int_{0}^{\\pi}|\\cos x|\\,dx = 2\\).)',
  '\\(\\text{each lobe area } = \\dfrac{2}{n}\\)'
);

(async () => {
  const seedPath = path.resolve('src/constants/seedYear12aCh6EQuestions.js');
  delete require.cache[require.resolve(seedPath)];
  const list = require(seedPath).Y12A_CH6E_QUESTIONS || require(seedPath).default;

  for (const [id, patch] of Object.entries(PATCH)) {
    const q = list.find((x) => x.id === id);
    if (!q) {
      console.warn('missing', id);
      continue;
    }

    if (patch.opts) {
      q.opts = patch.opts;
      q.options = patch.opts.map((text) => ({ text, imageUrl: null }));
      q.a = patch.a;
      q.answer = String(patch.a);
    }
    if (patch.type) q.type = patch.type;
    if (patch.question) q.question = patch.question;
    if (patch.requiresManualGrading != null) q.requiresManualGrading = patch.requiresManualGrading;
    if (patch.difficulty) q.difficulty = patch.difficulty;
    if (patch.timeLimit) q.timeLimit = patch.timeLimit;
    if (patch.answer && !patch.opts) q.answer = patch.answer;
    if (patch.solution) q.solution = patch.solution;
    if (patch.hint) q.hint = patch.hint;
    q.solutionSteps = patch.solutionSteps;
    q.graphData = patch.graphData || null;
    q.isNew = true;
    q.origin = 'seed';
    q.isActive = true;
    q.topicId = q.topicId || 'y12a-6E';
    q.chapterId = q.chapterId || 'y12a-6';

    await db.collection('questions').doc(id).set(
      {
        type: q.type,
        question: q.question,
        opts: q.opts || null,
        options: q.options || null,
        a: q.a != null ? q.a : null,
        answer: q.answer,
        solution: q.solution,
        hint: q.hint || '',
        solutionSteps: q.solutionSteps,
        graphData: q.graphData,
        requiresManualGrading: q.requiresManualGrading,
        difficulty: q.difficulty,
        timeLimit: q.timeLimit,
        isNew: true,
        origin: 'seed',
        isActive: true,
        topicId: 'y12a-6E',
        chapterId: 'y12a-6',
        updatedAt: FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
    console.log(
      'OK',
      id,
      q.type,
      'steps',
      q.solutionSteps.length,
      'graph',
      !!q.graphData
    );
  }

  writeFileSync(
    seedPath,
    'export const Y12A_CH6E_QUESTIONS = ' +
      JSON.stringify(list, null, 2) +
      ';\n\nexport default Y12A_CH6E_QUESTIONS;\n'
  );

  const ver = Date.now();
  await db.collection('sync_meta').doc('questions').set(
    {
      version: ver,
      membershipVersion: ver,
      updatedAt: FieldValue.serverTimestamp(),
    },
    { merge: true }
  );

  for (const id of ['y12a-6e-q1a', 'y12a-6e-q16b_v', 'y12a-6e-q17b']) {
    const d = (await db.collection('questions').doc(id).get()).data();
    console.log(
      '\n',
      id,
      'type',
      d.type,
      'steps',
      d.solutionSteps?.length,
      'step0graph',
      !!d.solutionSteps?.[0]?.graphData,
      'qGraph',
      !!d.graphData
    );
    console.log('  s1', d.solutionSteps[0].explanation.slice(0, 90));
  }
  console.log('\nversion', ver);
  process.exit(0);
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
