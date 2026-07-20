/**
 * Rebuild Y12A Ch6A — "The behaviour of sin x near the origin"
 * Clean MC + multi_part, detailed steps, pretty geometry graphs.
 *
 * Usage:
 *   node tools/scripts/rebuildY12ACh6A.cjs
 *   node tools/scripts/rebuildY12ACh6A.cjs --push
 */
'use strict';

const { readFileSync, writeFileSync } = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const ROOT = path.join(__dirname, '../..');
const SEED = path.join(ROOT, 'src/constants/seedYear12aCh6Questions.js');
const PUSH = process.argv.includes('--push');

const TOPIC = {
  topicId: 'y12a-6A',
  chapterId: 'y12a-6',
  c: '6A',
  t: 'The behaviour of sin x near the origin',
  origin: 'seed',
  isNew: true,
  requiresManualGrading: false,
};

function S(explanation, workingOut, graphData = null) {
  return { explanation, workingOut, graphData };
}

function opts(list) {
  return list;
}

function optionsFrom(list) {
  return list.map((text) => ({ text, imageUrl: null }));
}

function mc(id, {
  question, choices, a = 0, difficulty = 'easy', timeLimit = 90,
  hint = '', solution, solutionSteps, graphData = null,
}) {
  return {
    id,
    ...TOPIC,
    type: 'multiple_choice',
    difficulty,
    timeLimit,
    question,
    opts: choices,
    options: optionsFrom(choices),
    a,
    answer: String(a),
    hint: hint || 'Use the small-angle approximations \\(\\sin x \\approx x\\) and \\(\\tan x \\approx x\\) when \\(x\\) is in radians and small.',
    solution: solution || `The correct answer is ${choices[a]}.`,
    solutionSteps,
    graphData,
  };
}

// ─── Premium SVG figures (same jsxGraph → SvgGraph pipeline as Ch6B) ───

function jxg(script, { width = 380, height = 260, bb, showAxisLabels = false, showGrid = false } = {}) {
  return {
    jsxGraph: {
      width,
      height,
      boundingbox: bb,
      showAxisLabels,
      showGrid, // geometry diagrams: no coordinate grid (function graphs keep default true)
      script: `board.suspendUpdate(); ${script} board.unsuspendUpdate();`,
    },
  };
}

/** Helper: approximate a filled circle as a dense polygon + outline segments */
function circleScript(cx, cy, r, { fill = '#94a3b8', fillOpacity = 0.14, stroke = '#64748b', dash = false, n = 48 } = {}) {
  return `
    var __circ = [];
    for (var __i = 0; __i <= ${n}; __i++) {
      var __t = 2 * Math.PI * __i / ${n};
      __circ.push([${cx} + ${r} * Math.cos(__t), ${cy} + ${r} * Math.sin(__t)]);
    }
    board.create('polygon', __circ, {fillColor:'${fill}', fillOpacity:${fillOpacity}, strokeWidth:0});
    for (var __j = 0; __j < ${n}; __j++) {
      board.create('segment', [__circ[__j], __circ[__j + 1]], {strokeColor:'${stroke}', strokeWidth:1.8${dash ? ', dash:2' : ''}});
    }
  `;
}

/** Inclined road / vertical climb (q6) — angle 4° between ground & road, inside the wedge */
const GRAPH_ROAD = jxg(
  `
  var A=[0,0], B=[14,0], C=[14,1.2];
  board.create('polygon', [A,B,C], {fillColor:'#818cf8', fillOpacity:0.28, strokeWidth:0});
  board.create('segment', [[-0.6,0],[15.2,0]], {strokeColor:'#94a3b8', strokeWidth:1.6});
  board.create('segment', [A,B], {strokeColor:'#64748b', strokeWidth:2});
  board.create('segment', [B,C], {strokeColor:'#6366f1', strokeWidth:2.6});
  board.create('segment', [C,A], {strokeColor:'#6366f1', strokeWidth:2.6});
  board.create('segment', [[13.35,0],[13.35,0.45]], {strokeColor:'#64748b', strokeWidth:1.5});
  board.create('segment', [[13.35,0.45],[14,0.45]], {strokeColor:'#64748b', strokeWidth:1.5});
  board.create('point', A, {name:'', size:2, color:'#6366f1'});
  board.create('point', B, {name:'', size:2, color:'#6366f1'});
  board.create('point', C, {name:'', size:2, color:'#6366f1'});
  board.create('text', [6.5, 0.85, '2 km (road)'], {fontSize:13, color:'#4f46e5'});
  board.create('text', [14.55, 0.6, 'h'], {fontSize:15, color:'#4f46e5'});
  board.create('text', [1.55, 0.12, '4°'], {fontSize:14, color:'#0f172a'});
  board.create('text', [6.5, -0.45, 'horizontal'], {fontSize:12, color:'#64748b'});
  `,
  { width: 400, height: 220, bb: [-1.2, 2.0, 16.2, -0.9] }
);

/** Tower subtended angle (q7) — θ between ground & line of sight, inside the wedge */
const GRAPH_TOWER = jxg(
  `
  var A=[0,0], B=[14,0], C=[14,1.6];
  board.create('polygon', [A,B,C], {fillColor:'#38bdf8', fillOpacity:0.22, strokeWidth:0});
  board.create('segment', [[-0.5,0],[15.2,0]], {strokeColor:'#94a3b8', strokeWidth:1.6});
  board.create('segment', [A,B], {strokeColor:'#64748b', strokeWidth:2});
  board.create('segment', [B,C], {strokeColor:'#0ea5e9', strokeWidth:3});
  board.create('segment', [A,C], {strokeColor:'#6366f1', strokeWidth:2.4});
  board.create('segment', [[13.35,0],[13.35,0.45]], {strokeColor:'#64748b', strokeWidth:1.5});
  board.create('segment', [[13.35,0.45],[14,0.45]], {strokeColor:'#64748b', strokeWidth:1.5});
  board.create('point', A, {name:'', size:2, color:'#6366f1'});
  board.create('point', B, {name:'', size:2, color:'#0ea5e9'});
  board.create('point', C, {name:'', size:2, color:'#0ea5e9'});
  board.create('text', [6.5, -0.45, '5 km'], {fontSize:13, color:'#64748b'});
  board.create('text', [14.55, 0.8, '40 m'], {fontSize:13, color:'#0369a1'});
  board.create('text', [1.6, 0.12, 'θ'], {fontSize:15, color:'#0f172a'});
  board.create('text', [14.4, 1.95, 'tower'], {fontSize:12, color:'#0369a1'});
  board.create('text', [0.1, -0.5, 'observer'], {fontSize:12, color:'#64748b'});
  `,
  { width: 400, height: 230, bb: [-1.2, 2.5, 16.2, -1.0] }
);

/** Moon diameter (q10) — restored simpler diagram */
const GRAPH_MOON = jxg(
  `
  board.create('polygon', [[0,0],[10,1.9],[10,-1.9]], {fillColor:'#a78bfa', fillOpacity:0.2, strokeWidth:0});
  ${circleScript(10, 0, 1.9, { fill: '#94a3b8', fillOpacity: 0.16, stroke: '#64748b', n: 40 })}
  board.create('segment', [[0,0],[10,1.9]], {strokeColor:'#7c3aed', strokeWidth:2.2});
  board.create('segment', [[0,0],[10,-1.9]], {strokeColor:'#7c3aed', strokeWidth:2.2});
  board.create('segment', [[10,1.9],[10,-1.9]], {strokeColor:'#6366f1', strokeWidth:2.4});
  board.create('segment', [[0,0],[10,0]], {strokeColor:'#94a3b8', strokeWidth:1.4, dash:2});
  board.create('point', [0,0], {name:'', size:3, color:'#7c3aed'});
  board.create('point', [10,1.9], {name:'', size:2, color:'#6366f1'});
  board.create('point', [10,-1.9], {name:'', size:2, color:'#6366f1'});
  board.create('text', [4.6, 0.95, '380 000 km'], {fontSize:12, color:'#64748b'});
  board.create('text', [11.15, 0.05, 'D'], {fontSize:15, color:'#4f46e5'});
  board.create('text', [0.55, 0.55, "32'"], {fontSize:14, color:'#0f172a'});
  board.create('text', [-0.15, -0.75, 'Earth (O)'], {fontSize:12, color:'#64748b'});
  board.create('text', [9.5, 2.55, 'Moon'], {fontSize:13, color:'#475569'});
  `,
  { width: 420, height: 280, bb: [-1.8, 3.4, 13.2, -3.2] }
);

/** Regular 360-gon side (q11) */
const GRAPH_POLYGON = jxg(
  `
  ${circleScript(0, 0, 5, { fill: '#e2e8f0', fillOpacity: 0.25, stroke: '#94a3b8', dash: true, n: 56 })}
  board.create('polygon', [[0,0],[4.85,1.1],[4.85,-1.1]], {fillColor:'#34d399', fillOpacity:0.28, strokeWidth:0});
  board.create('segment', [[0,0],[4.85,1.1]], {strokeColor:'#059669', strokeWidth:2.3});
  board.create('segment', [[0,0],[4.85,-1.1]], {strokeColor:'#059669', strokeWidth:2.3});
  board.create('segment', [[4.85,1.1],[4.85,-1.1]], {strokeColor:'#10b981', strokeWidth:2.8});
  board.create('point', [0,0], {name:'', size:3, color:'#059669'});
  board.create('point', [4.85,1.1], {name:'', size:2, color:'#10b981'});
  board.create('point', [4.85,-1.1], {name:'', size:2, color:'#10b981'});
  board.create('text', [2.0, 1.45, '80 cm'], {fontSize:13, color:'#047857'});
  board.create('text', [5.45, 0.05, 's'], {fontSize:15, color:'#059669'});
  board.create('text', [0.55, 0.35, '1°'], {fontSize:14, color:'#0f172a'});
  board.create('text', [-0.45, -0.45, 'O'], {fontSize:13, color:'#64748b'});
  board.create('text', [0, -5.7, 'circle r = 80 cm'], {fontSize:12, color:'#64748b'});
  `,
  { width: 360, height: 340, bb: [-6.2, 6.2, 6.6, -6.4] }
);

/** Small-angle: unit circle arc ≈ chord (q2 / q3) */
const GRAPH_SMALL_ANGLE = jxg(
  `
  board.create('arrow', [[-0.3,0],[5.8,0]], {strokeColor:'#94a3b8', strokeWidth:1.5});
  board.create('arrow', [[0,-0.3],[0,5.8]], {strokeColor:'#94a3b8', strokeWidth:1.5});
  ${circleScript(0, 0, 5, { fill: '#e0e7ff', fillOpacity: 0.18, stroke: '#94a3b8', n: 56 })}
  board.create('polygon', [[0,0],[5,0],[4.85,1.22]], {fillColor:'#f472b6', fillOpacity:0.25, strokeWidth:0});
  board.create('segment', [[0,0],[5,0]], {strokeColor:'#6366f1', strokeWidth:2.2});
  board.create('segment', [[0,0],[4.85,1.22]], {strokeColor:'#6366f1', strokeWidth:2.2});
  board.create('segment', [[5,0],[4.85,1.22]], {strokeColor:'#f43f5e', strokeWidth:2.4, dash:2});
  board.create('point', [0,0], {name:'', size:3, color:'#6366f1'});
  board.create('point', [5,0], {name:'', size:2, color:'#6366f1'});
  board.create('point', [4.85,1.22], {name:'', size:2, color:'#f43f5e'});
  board.create('text', [2.4, -0.45, '1'], {fontSize:13, color:'#64748b'});
  board.create('text', [0.7, 0.45, 'x'], {fontSize:15, color:'#0f172a'});
  board.create('text', [3.0, 2.15, 'arc ≈ chord ≈ x'], {fontSize:12, color:'#be185d'});
  board.create('text', [5.45, -0.35, 'x'], {fontSize:12, color:'#64748b'});
  board.create('text', [0.2, 5.45, 'y'], {fontSize:12, color:'#64748b'});
  board.create('text', [-0.4, -0.4, 'O'], {fontSize:12, color:'#64748b'});
  `,
  { width: 340, height: 320, bb: [-1.2, 6.2, 6.4, -1.2], showAxisLabels: false }
);

/** Kite / string elevation (q5)
 *  3° is the angle BETWEEN the ground and the string (inside the wedge at the holder).
 *  Label must sit below the hypotenuse, not above it.
 */
const GRAPH_KITE = jxg(
  `
  var A=[0,0], B=[14,0], C=[14,0.95];
  board.create('polygon', [A,B,C], {fillColor:'#fbbf24', fillOpacity:0.28, strokeWidth:0});
  board.create('segment', [[-0.5,0],[15.2,0]], {strokeColor:'#94a3b8', strokeWidth:1.6});
  board.create('segment', [A,B], {strokeColor:'#64748b', strokeWidth:2});
  board.create('segment', [B,C], {strokeColor:'#f59e0b', strokeWidth:2.4});
  board.create('segment', [A,C], {strokeColor:'#f59e0b', strokeWidth:2.6});
  board.create('segment', [[13.4,0],[13.4,0.38]], {strokeColor:'#64748b', strokeWidth:1.5});
  board.create('segment', [[13.4,0.38],[14,0.38]], {strokeColor:'#64748b', strokeWidth:1.5});
  board.create('point', A, {name:'', size:2, color:'#f59e0b'});
  board.create('point', C, {name:'', size:3, color:'#f59e0b'});
  board.create('text', [6.5, 0.72, '80 m'], {fontSize:13, color:'#b45309'});
  board.create('text', [14.55, 0.48, 'h'], {fontSize:15, color:'#b45309'});
  board.create('text', [1.7, 0.1, '3°'], {fontSize:14, color:'#0f172a'});
  board.create('text', [14.3, 1.25, 'kite'], {fontSize:12, color:'#b45309'});
  board.create('text', [0.15, -0.4, 'holder'], {fontSize:11, color:'#64748b'});
  `,
  { width: 400, height: 210, bb: [-1.2, 1.7, 16.2, -0.8] }
);

// ─── Questions ─────────────────────────────────────────────────────────

const sub3a = mc('y12a-6a-q3a', {
  question: 'Express \\(3^\\circ\\) in radians.',
  choices: [
    '\\(\\dfrac{\\pi}{60}\\)',
    '\\(\\dfrac{\\pi}{30}\\)',
    '\\(\\dfrac{3\\pi}{180}\\) simplified as \\(\\dfrac{\\pi}{90}\\)',
    '\\(\\dfrac{60}{\\pi}\\)',
  ],
  a: 0,
  difficulty: 'easy',
  timeLimit: 60,
  solution: 'The correct answer is \\(\\dfrac{\\pi}{60}\\).',
  solutionSteps: [
    S(
      'Given: convert \\(3^\\circ\\) to radians. Strategy: use the exact conversion \\(180^\\circ = \\pi\\) radians, so multiply by \\(\\dfrac{\\pi}{180}\\).',
      '\\(180^\\circ = \\pi\\ \\text{radians}\\'
    ),
    S(
      'Multiply: \\(3^\\circ = 3 \\times \\dfrac{\\pi}{180} = \\dfrac{3\\pi}{180}\\).',
      '\\(\\dfrac{3\\pi}{180}\\)'
    ),
    S(
      'Simplify the fraction: divide numerator and denominator by 3 to get \\(\\dfrac{\\pi}{60}\\). A common slip is writing \\(\\dfrac{\\pi}{30}\\) (as if converting \\(6^\\circ\\)) or inverting the conversion factor.',
      '\\(\\dfrac{\\pi}{60}\\)'
    ),
    S('Final answer: \\(\\dfrac{\\pi}{60}\\).', '\\(\\dfrac{\\pi}{60}\\)'),
  ],
  graphData: null,
});

const sub3b = mc('y12a-6a-q3b', {
  question: 'Which statement correctly explains why \\(\\sin 3^\\circ \\approx \\dfrac{\\pi}{60}\\)?',
  choices: [
    'For small \\(x\\) in radians, \\(\\sin x \\approx x\\). Since \\(3^\\circ = \\dfrac{\\pi}{60}\\) rad, \\(\\sin 3^\\circ \\approx \\dfrac{\\pi}{60}\\).',
    'For small \\(x\\) in degrees, \\(\\sin x \\approx x\\), so \\(\\sin 3^\\circ \\approx 3\\).',
    'Always \\(\\sin \\theta = \\theta\\) in any unit, so the value equals the degree measure.',
    'Use \\(\\sin x \\approx \\dfrac{\\pi}{180}\\) for every angle near the origin.',
  ],
  a: 0,
  difficulty: 'easy',
  timeLimit: 90,
  solution:
    'For small \\(x\\) in radians, \\(\\sin x \\approx x\\). Since \\(3^\\circ = \\dfrac{\\pi}{60}\\) rad, \\(\\sin 3^\\circ \\approx \\dfrac{\\pi}{60}\\).',
  solutionSteps: [
    S(
      'Key fact (small-angle approximation): when \\(x\\) is measured in radians and is close to 0, \\(\\sin x \\approx x\\). (This fails if \\(x\\) is left in degrees.)',
      '\\(\\sin x \\approx x\\quad (x\\text{ small, in radians})\\',
      GRAPH_SMALL_ANGLE
    ),
    S(
      'From the previous part, \\(3^\\circ = \\dfrac{\\pi}{60}\\) radians. The angle is small (about 0.052 rad), so the approximation is appropriate.',
      '\\(3^\\circ = \\dfrac{\\pi}{60}\\)'
    ),
    S(
      'Therefore \\(\\sin 3^\\circ = \\sin\\!\\left(\\dfrac{\\pi}{60}\\right) \\approx \\dfrac{\\pi}{60}\\). A common mistake is applying \\(\\sin x \\approx x\\) with \\(x\\) still in degrees (which would wrongly give 3).',
      '\\(\\sin 3^\\circ \\approx \\dfrac{\\pi}{60}\\)'
    ),
    S(
      'Final answer: the statement that uses radians and \\(\\sin x \\approx x\\).',
      '\\(\\sin 3^\\circ \\approx \\dfrac{\\pi}{60}\\)'
    ),
  ],
  graphData: GRAPH_SMALL_ANGLE,
});

const sub3c = mc('y12a-6a-q3c', {
  question:
    'Taking \\(\\pi = 3.142\\), find \\(\\sin 3^\\circ\\) correct to four decimal places, without using the sine key on a calculator.',
  choices: [
    '\\(0.0524\\)',
    '\\(0.0523\\)',
    '\\(0.0530\\)',
    '\\(0.5240\\)',
  ],
  a: 0,
  difficulty: 'easy',
  timeLimit: 90,
  solution: 'The correct answer is \\(0.0524\\).',
  solutionSteps: [
    S(
      'From the small-angle result: \\(\\sin 3^\\circ \\approx \\dfrac{\\pi}{60}\\). Use the given value \\(\\pi = 3.142\\).',
      '\\(\\sin 3^\\circ \\approx \\dfrac{3.142}{60}\\'
    ),
    S(
      'Divide: \\(\\dfrac{3.142}{60} = 0.0523666\\ldots\\).',
      '\\(0.0523666\\ldots\\)'
    ),
    S(
      'Round to four decimal places: the fifth decimal digit is 6, so round up from 0.0523 to \\(0.0524\\). A common slip is stopping at 0.0523 or shifting the decimal point to 0.524.',
      '\\(0.0524\\)'
    ),
    S('Final answer: \\(0.0524\\).', '\\(0.0524\\)'),
  ],
});

const q3 = {
  id: 'y12a-6a-q3',
  ...TOPIC,
  type: 'multi_part',
  difficulty: 'easy',
  timeLimit: 180,
  question:
    'This question uses the small-angle approximation for sine near the origin.',
  answer: '',
  hint: 'Work through the parts in order. Convert degrees to radians before using \\(\\sin x \\approx x\\).',
  solution: '',
  solutionSteps: [],
  graphData: GRAPH_SMALL_ANGLE,
  subQuestions: [sub3a, sub3b, sub3c],
  requiresManualGrading: false,
};

const q6 = mc('y12a-6a-q6', {
  question:
    'A car travels \\(2\\,\\text{km}\\) up a road inclined at \\(4^\\circ\\) to the horizontal. Through what vertical distance has the car climbed? Use \\(\\sin x \\approx x\\) for small angles in radians, and give your answer correct to the nearest metre.',
  choices: [
    '\\(140\\,\\text{m}\\)',
    '\\(139\\,\\text{m}\\)',
    '\\(280\\,\\text{m}\\)',
    '\\(70\\,\\text{m}\\)',
  ],
  a: 0,
  difficulty: 'medium',
  timeLimit: 120,
  solution: 'The correct answer is \\(140\\,\\text{m}\\).',
  graphData: GRAPH_ROAD,
  solutionSteps: [
    S(
      'Given: road length (hypotenuse) \\(2\\,\\text{km} = 2000\\,\\text{m}\\), inclination \\(4^\\circ\\). Unknown: vertical climb \\(h\\). Sketch a right triangle with hypotenuse along the road.',
      '\\(\\text{hyp} = 2000\\,\\text{m},\\quad \\theta = 4^\\circ\\)',
      GRAPH_ROAD
    ),
    S(
      'In the right triangle, \\(\\sin 4^\\circ = \\dfrac{h}{2000}\\), so \\(h = 2000\\sin 4^\\circ\\).',
      '\\(h = 2000\\sin 4^\\circ\\)'
    ),
    S(
      'Convert the angle to radians: \\(4^\\circ = 4 \\times \\dfrac{\\pi}{180} = \\dfrac{\\pi}{45}\\). For small angles, \\(\\sin x \\approx x\\) (radians), so \\(\\sin 4^\\circ \\approx \\dfrac{\\pi}{45}\\).',
      '\\(\\sin 4^\\circ \\approx \\dfrac{\\pi}{45}\\)'
    ),
    S(
      'Hence \\(h \\approx 2000 \\times \\dfrac{\\pi}{45} = \\dfrac{2000\\pi}{45} = \\dfrac{400\\pi}{9}\\). Using \\(\\pi \\approx 3.1416\\): \\(\\dfrac{400 \\times 3.1416}{9} \\approx 139.63\\,\\text{m}\\).',
      '\\(h \\approx 139.63\\,\\text{m}\\)'
    ),
    S(
      'Nearest metre: \\(140\\,\\text{m}\\). A common slip is leaving the answer in kilometres, or using \\(\\tan\\) instead of \\(\\sin\\) with the road length as the adjacent side.',
      '\\(140\\,\\text{m}\\)'
    ),
    S('Final answer: \\(140\\,\\text{m}\\).', '\\(140\\,\\text{m}\\)'),
  ],
});

const q7 = mc('y12a-6a-q7', {
  question:
    'A tower is \\(40\\,\\text{m}\\) high. What angle, correct to the nearest minute, does it subtend at a point \\(5\\,\\text{km}\\) away on level ground? Use \\(\\tan x \\approx x\\) for small \\(x\\) in radians.',
  choices: [
    "\\(28'\\)",
    "\\(27'\\)",
    "\\(30'\\)",
    "\\(48'\\)",
  ],
  a: 0,
  difficulty: 'medium',
  timeLimit: 120,
  solution: "The correct answer is \\(28'\\).",
  graphData: GRAPH_TOWER,
  solutionSteps: [
    S(
      'Given: tower height \\(40\\,\\text{m}\\), horizontal distance \\(5\\,\\text{km} = 5000\\,\\text{m}\\). Let \\(\\theta\\) be the angle subtended at the observer (angle of elevation of the top of the tower).',
      '\\(\\text{opp} = 40,\\quad \\text{adj} = 5000\\)',
      GRAPH_TOWER
    ),
    S(
      'From the right triangle: \\(\\tan \\theta = \\dfrac{40}{5000} = \\dfrac{1}{125} = 0.008\\).',
      '\\(\\tan \\theta = 0.008\\)'
    ),
    S(
      'The angle is small, so in radians \\(\\tan \\theta \\approx \\theta\\). Therefore \\(\\theta \\approx 0.008\\) radians.',
      '\\(\\theta \\approx 0.008\\ \\text{rad}\\)'
    ),
    S(
      'Convert to degrees: \\(\\theta \\approx 0.008 \\times \\dfrac{180}{\\pi} \\approx 0.008 \\times 57.296 \\approx 0.4584^\\circ\\).',
      '\\(0.4584^\\circ\\)'
    ),
    S(
      "Convert the decimal part of a degree to minutes: \\(0.4584 \\times 60 \\approx 27.5'\\), which rounds to \\(28'\\) to the nearest minute. A common slip is converting to degrees only, or using \\(\\sin\\) with the wrong side ratio.",
      "\\(28'\\)"
    ),
    S("Final answer: \\(28'\\).", "\\(28'\\)"),
  ],
});

const q10 = mc('y12a-6a-q10', {
  question:
    'The moon subtends an angle of \\(32\'\\) at an observation point on Earth, \\(380\\,000\\,\\text{km}\\) away. Treating the moon\'s diameter as approximately an arc of a circle centred at the observer, find the approximate diameter of the moon to the nearest kilometre.',
  choices: [
    '\\(3537\\,\\text{km}\\)',
    '\\(3536\\,\\text{km}\\)',
    '\\(3800\\,\\text{km}\\)',
    '\\(3200\\,\\text{km}\\)',
  ],
  a: 0,
  difficulty: 'hard',
  timeLimit: 180,
  solution: 'The correct answer is \\(3537\\,\\text{km}\\).',
  graphData: GRAPH_MOON,
  solutionSteps: [
    S(
      'Given: subtended angle \\(\\theta = 32\'\\), distance (radius) \\(r = 380\\,000\\,\\text{km}\\). Approximate diameter \\(D\\) by arc length \\(s = r\\theta\\) with \\(\\theta\\) in radians.',
      '\\(r = 380\\,000,\\quad \\theta = 32\'\\)',
      GRAPH_MOON
    ),
    S(
      'Convert minutes to degrees: \\(32\' = \\dfrac{32}{60}^\\circ = \\dfrac{8}{15}^\\circ\\).',
      '\\(\\theta = \\dfrac{8}{15}^\\circ\\)'
    ),
    S(
      'Convert to radians: \\(\\theta = \\dfrac{8}{15} \\times \\dfrac{\\pi}{180} = \\dfrac{8\\pi}{2700} = \\dfrac{2\\pi}{675}\\).',
      '\\(\\theta = \\dfrac{2\\pi}{675}\\ \\text{rad}\\)'
    ),
    S(
      'Arc length (approximate diameter): \\(D \\approx r\\theta = 380\\,000 \\times \\dfrac{2\\pi}{675}\\).',
      '\\(D = \\dfrac{760\\,000\\pi}{675}\\)'
    ),
    S(
      'Simplify: \\(\\dfrac{760\\,000}{675} = \\dfrac{30400}{27}\\approx 1125.926\\), then multiply by \\(\\pi\\approx 3.1416\\) to get \\(D \\approx 3537.4\\,\\text{km}\\). To the nearest kilometre: \\(3537\\,\\text{km}\\).',
      '\\(3537\\,\\text{km}\\)'
    ),
    S(
      'Final answer: \\(3537\\,\\text{km}\\). A common slip is leaving \\(\\theta\\) in degrees when using \\(s = r\\theta\\).',
      '\\(3537\\,\\text{km}\\)'
    ),
  ],
});

const q11 = mc('y12a-6a-q11', {
  question:
    'A regular polygon with \\(360\\) sides is inscribed in a circle of radius \\(80\\,\\text{cm}\\). Find the approximate length of each side, correct to two decimal places. (Use the small-angle arc approximation.)',
  choices: [
    '\\(1.40\\,\\text{cm}\\)',
    '\\(1.39\\,\\text{cm}\\)',
    '\\(2.40\\,\\text{cm}\\)',
    '\\(0.80\\,\\text{cm}\\)',
  ],
  a: 0,
  difficulty: 'hard',
  timeLimit: 150,
  solution: 'The correct answer is \\(1.40\\,\\text{cm}\\).',
  graphData: GRAPH_POLYGON,
  solutionSteps: [
    S(
      'Given: regular 360-gon inscribed in a circle of radius \\(r = 80\\,\\text{cm}\\). Each central angle is \\(\\dfrac{360^\\circ}{360} = 1^\\circ\\). Approximate each side by the corresponding arc length.',
      '\\(\\theta = 1^\\circ,\\quad r = 80\\)',
      GRAPH_POLYGON
    ),
    S(
      'In radians: \\(1^\\circ = \\dfrac{\\pi}{180}\\). Arc length \\(s = r\\theta = 80 \\times \\dfrac{\\pi}{180} = \\dfrac{80\\pi}{180} = \\dfrac{4\\pi}{9}\\).',
      '\\(s = \\dfrac{4\\pi}{9}\\)'
    ),
    S(
      'Numerically: \\(\\dfrac{4\\pi}{9} \\approx \\dfrac{4 \\times 3.1416}{9} \\approx \\dfrac{12.5664}{9} \\approx 1.3963\\,\\text{cm}\\).',
      '\\(1.3963\\,\\text{cm}\\)'
    ),
    S(
      'Correct to two decimal places: \\(1.40\\,\\text{cm}\\). A common slip is using the chord formula with a half-angle without approximating, or forgetting to convert to radians.',
      '\\(1.40\\,\\text{cm}\\)'
    ),
    S('Final answer: \\(1.40\\,\\text{cm}\\).', '\\(1.40\\,\\text{cm}\\)'),
  ],
});

// Extra clean foundation questions (optional fill-out of 6A)
const q1 = mc('y12a-6a-q1', {
  question: 'Convert \\(5^\\circ\\) to radians in exact form.',
  choices: [
    '\\(\\dfrac{\\pi}{36}\\)',
    '\\(\\dfrac{\\pi}{30}\\)',
    '\\(\\dfrac{5\\pi}{180}\\) left unsimplified only',
    '\\(\\dfrac{\\pi}{5}\\)',
  ],
  a: 0,
  difficulty: 'easy',
  timeLimit: 60,
  solution: 'The correct answer is \\(\\dfrac{\\pi}{36}\\).',
  solutionSteps: [
    S(
      'Use \\(180^\\circ = \\pi\\) radians: \\(5^\\circ = 5 \\times \\dfrac{\\pi}{180} = \\dfrac{5\\pi}{180}\\).',
      '\\(\\dfrac{5\\pi}{180}\\)'
    ),
    S(
      'Simplify by dividing numerator and denominator by 5: \\(\\dfrac{\\pi}{36}\\).',
      '\\(\\dfrac{\\pi}{36}\\)'
    ),
    S('Final answer: \\(\\dfrac{\\pi}{36}\\).', '\\(\\dfrac{\\pi}{36}\\)'),
  ],
});

const q2 = mc('y12a-6a-q2', {
  question:
    'Which statement is correct for the small-angle approximations used in this section?',
  choices: [
    'If \\(x\\) is small and measured in radians, then \\(\\sin x \\approx x\\) and \\(\\tan x \\approx x\\).',
    'If \\(x\\) is small and measured in degrees, then \\(\\sin x \\approx x\\).',
    '\\(\\sin x \\approx x\\) is valid for all real \\(x\\).',
    'Only \\(\\cos x \\approx x\\) is used for small angles.',
  ],
  a: 0,
  difficulty: 'easy',
  timeLimit: 60,
  solution:
    'If \\(x\\) is small and measured in radians, then \\(\\sin x \\approx x\\) and \\(\\tan x \\approx x\\).',
  graphData: GRAPH_SMALL_ANGLE,
  solutionSteps: [
    S(
      'On the unit circle, a small central angle \\(x\\) (radians) has arc length \\(x\\). The vertical chord and the tangent segment are both nearly equal to that arc when \\(x\\) is small.',
      '\\(\\text{arc} = x\\ (\\text{radians})\\)',
      GRAPH_SMALL_ANGLE
    ),
    S(
      'Hence the standard approximations: \\(\\sin x \\approx x\\) and \\(\\tan x \\approx x\\) for small \\(x\\) in radians. (Also \\(\\cos x \\approx 1\\), not \\(x\\).)',
      '\\(\\sin x \\approx x,\\quad \\tan x \\approx x\\)'
    ),
    S(
      'These fail if \\(x\\) is left in degrees. Final answer: the statement that requires radians.',
      '\\(\\sin x \\approx x\\ (\\text{radians})\\)'
    ),
  ],
});

const q4 = mc('y12a-6a-q4', {
  question:
    'Using \\(\\sin x \\approx x\\) with \\(x\\) in radians, approximate \\(\\sin 2^\\circ\\) to four decimal places. Take \\(\\pi = 3.142\\).',
  choices: [
    '\\(0.0349\\)',
    '\\(0.0348\\)',
    '\\(0.3490\\)',
    '\\(0.0698\\)',
  ],
  a: 0,
  difficulty: 'easy',
  timeLimit: 90,
  solution: 'The correct answer is \\(0.0349\\).',
  solutionSteps: [
    S(
      'Convert: \\(2^\\circ = 2 \\times \\dfrac{\\pi}{180} = \\dfrac{\\pi}{90}\\).',
      '\\(\\dfrac{\\pi}{90}\\)'
    ),
    S(
      'Approximate: \\(\\sin 2^\\circ \\approx \\dfrac{\\pi}{90} = \\dfrac{3.142}{90} = 0.034911\\ldots\\).',
      '\\(0.034911\\ldots\\)'
    ),
    S(
      'To four decimal places: \\(0.0349\\).',
      '\\(0.0349\\)'
    ),
  ],
});

const q5 = mc('y12a-6a-q5', {
  question:
    'A kite string is \\(80\\,\\text{m}\\) long and makes an angle of \\(3^\\circ\\) with the horizontal. Approximately how high is the kite above the ground? Use \\(\\sin x \\approx x\\) (radians) and give the answer to the nearest metre.',
  choices: [
    '\\(4\\,\\text{m}\\)',
    '\\(3\\,\\text{m}\\)',
    '\\(5\\,\\text{m}\\)',
    '\\(8\\,\\text{m}\\)',
  ],
  a: 0,
  difficulty: 'medium',
  timeLimit: 120,
  solution: 'The correct answer is \\(4\\,\\text{m}\\).',
  graphData: GRAPH_KITE,
  solutionSteps: [
    S(
      'Height \\(h = 80\\sin 3^\\circ\\). Convert: \\(3^\\circ = \\dfrac{\\pi}{60}\\) rad, so \\(\\sin 3^\\circ \\approx \\dfrac{\\pi}{60}\\).',
      '\\(h \\approx 80 \\times \\dfrac{\\pi}{60}\\)',
      GRAPH_KITE
    ),
    S(
      'Simplify: \\(h \\approx \\dfrac{80\\pi}{60} = \\dfrac{4\\pi}{3} \\approx \\dfrac{4 \\times 3.1416}{3} \\approx 4.19\\,\\text{m}\\).',
      '\\(4.19\\,\\text{m}\\)'
    ),
    S(
      'Nearest metre: \\(4\\,\\text{m}\\).',
      '\\(4\\,\\text{m}\\)'
    ),
  ],
});

const QUESTIONS = [q1, q2, q3, q4, q5, q6, q7, q10, q11];

function writeSeed() {
  const body =
    'export const Y12A_CH6_QUESTIONS = ' +
    JSON.stringify(QUESTIONS, null, 2) +
    ';\n\nexport default Y12A_CH6_QUESTIONS;\n';
  writeFileSync(SEED, body, 'utf8');
  console.log('Wrote', SEED, 'count', QUESTIONS.length);
  for (const q of QUESTIONS) {
    console.log(
      q.id,
      q.type,
      'steps',
      (q.solutionSteps || []).length,
      q.graphData ? 'graph✓' : 'nograph',
      q.subQuestions ? `subs=${q.subQuestions.length}` : ''
    );
  }
}

async function pushFirestore() {
  const { initializeApp, cert, getApps } = require('firebase-admin/app');
  const { getFirestore, FieldValue } = require('firebase-admin/firestore');

  const saPath =
    process.env.GOOGLE_APPLICATION_CREDENTIALS ||
    '/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json';
  const sa = JSON.parse(readFileSync(saPath, 'utf8'));
  if (!getApps().length) initializeApp({ credential: cert(sa) });
  const db = getFirestore();

  // Active top-level ids for this topic (parent only for multiparts)
  const activeIds = QUESTIONS.map((q) => q.id);
  const flatChildren = [];

  let batch = db.batch();
  let n = 0;
  const flush = async () => {
    if (!n) return;
    await batch.commit();
    batch = db.batch();
    n = 0;
  };

  const graphOverwrite = []; // {id, graphData} — update() fully replaces the field

  for (const q of QUESTIONS) {
    const { graphData, ...rest } = q;
    const payload = {
      ...rest,
      isActive: true,
      updatedAt: FieldValue.serverTimestamp(),
    };
    batch.set(db.collection('questions').doc(q.id), payload, { merge: true });
    graphOverwrite.push({ id: q.id, graphData: graphData || null });
    n++;
    if (n >= 400) await flush();

    if (q.type === 'multi_part' && Array.isArray(q.subQuestions)) {
      for (const sub of q.subQuestions) {
        flatChildren.push(sub.id);
        const { graphData: subG, ...subRest } = sub;
        batch.set(
          db.collection('questions').doc(sub.id),
          {
            ...subRest,
            topicId: TOPIC.topicId,
            chapterId: TOPIC.chapterId,
            c: TOPIC.c,
            t: TOPIC.t,
            isActive: false,
            updatedAt: FieldValue.serverTimestamp(),
          },
          { merge: true }
        );
        graphOverwrite.push({ id: sub.id, graphData: subG || null });
        n++;
        if (n >= 400) await flush();
      }
    }
  }
  await flush();

  // update() replaces graphData wholesale (merge:true set would deep-merge and keep geometry)
  batch = db.batch();
  n = 0;
  for (const { id, graphData } of graphOverwrite) {
    batch.update(db.collection('questions').doc(id), {
      graphData: graphData,
      updatedAt: FieldValue.serverTimestamp(),
    });
    n++;
    if (n >= 400) await flush();
  }
  await flush();

  // Deactivate any old stray 6A docs not in the new set
  const oldSnap = await db.collection('questions').where('topicId', '==', 'y12a-6A').get();
  const keep = new Set([...activeIds, ...flatChildren]);
  batch = db.batch();
  n = 0;
  for (const doc of oldSnap.docs) {
    if (!keep.has(doc.id)) {
      batch.set(
        db.collection('questions').doc(doc.id),
        { isActive: false, updatedAt: FieldValue.serverTimestamp() },
        { merge: true }
      );
      n++;
      console.log('deactivated orphan', doc.id);
    }
  }
  if (n) await batch.commit();

  const ver = Date.now();
  await db.collection('sync_meta').doc('questions').set(
    {
      version: ver,
      membershipVersion: ver,
      updatedAt: FieldValue.serverTimestamp(),
    },
    { merge: true }
  );
  console.log('Pushed Firestore. version', ver);

  // rebuild indexes for chapter
  console.log('Rebuilding question indexes for y12a-6 ...');
  const r = spawnSync(
    'node',
    [path.join(ROOT, 'tools/scripts/rebuildQuestionIndexes.js'), 'y12a-6'],
    { cwd: ROOT, encoding: 'utf8', timeout: 120000 }
  );
  console.log(r.stdout || '');
  if (r.stderr) console.error(r.stderr);
  if (r.status !== 0) {
    console.error('Index rebuild failed with status', r.status);
    process.exit(r.status || 1);
  }

  // sample
  for (const id of ['y12a-6a-q3', 'y12a-6a-q6', 'y12a-6a-q10', 'y12a-6a-q11']) {
    const d = (await db.collection('questions').doc(id).get()).data();
    console.log(
      id,
      'type',
      d?.type,
      'graph',
      !!d?.graphData?.geometry,
      'opts0',
      d?.opts?.[0] || d?.subQuestions?.[0]?.opts?.[0]
    );
  }
}

writeSeed();
if (PUSH) {
  pushFirestore().catch((e) => {
    console.error(e);
    process.exit(1);
  });
} else {
  console.log('\nSeed only. Re-run with --push to update Firestore + indexes.');
}
