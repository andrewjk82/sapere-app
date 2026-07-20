/**
 * Fix y12a-6d-q3 multiparts → MC + detailed steps
 * Expand y12a-6d-q6a–f detailed steps (+ multi_part parent for q6 a–f)
 *
 *   node tools/scripts/fixY12A6Dq3q6Steps.cjs
 */
'use strict';

const { initializeApp, cert, getApps } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');
const { readFileSync, writeFileSync } = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const sa = JSON.parse(
  readFileSync(
    '/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json',
    'utf8'
  )
);
if (!getApps().length) initializeApp({ credential: cert(sa) });
const db = getFirestore();

const META = {
  topicId: 'y12a-6D',
  chapterId: 'y12a-6',
  chapterTitle: 'Chapter 6: The trigonometric functions',
  topicCode: '6D',
  topicTitle: 'Integrating the trigonometric functions',
  c: '6D',
  t: 'Integrating the trigonometric functions',
  year: 'Year 12',
  origin: 'seed',
  isNew: true,
  isManual: true,
  graphData: null,
  requiresManualGrading: false,
};

function S(explanation, workingOut) {
  return { explanation, workingOut, graphData: null };
}

function mc(id, question, opts, a, steps, extra = {}) {
  const correct = opts[a];
  return {
    id,
    ...META,
    type: 'multiple_choice',
    difficulty: extra.difficulty || 'medium',
    timeLimit: extra.timeLimit || 120,
    question,
    opts,
    options: opts.map((text) => ({ text, imageUrl: null })),
    a,
    answer: String(a),
    hint: extra.hint || '',
    solution: `The correct answer is ${correct}.`,
    solutionSteps: steps,
    isActive: extra.isActive !== undefined ? extra.isActive : true,
    title: question.replace(/\\\(|\\\)/g, '').slice(0, 55) + '…',
  };
}

// ── Q3 parts ─────────────────────────────────────────────────────────

const q3a_i = mc(
  'y12a-6d-q3a_i',
  '(a)(i) The gradient function of a certain curve is \\(\\dfrac{dy}{dx} = \\sin x\\). If the curve passes through the origin, find its equation.',
  [
    '\\(y = 1 + \\cos x\\)',
    '\\(y = 1 - \\cos x\\)',
    '\\(y = -\\cos x\\)',
    '\\(y = \\sin x\\)',
  ],
  1,
  [
    S(
      'Given: \\(\\dfrac{dy}{dx} = \\sin x\\), and the curve passes through the origin \\((0,0)\\). Why integrate? The gradient function is the derivative; recovering \\(y\\) means finding an antiderivative.',
      '\\(\\dfrac{dy}{dx} = \\sin x\\)'
    ),
    S(
      'Integrate: \\(y = \\int\\sin x\\,dx = -\\cos x + C\\). Why the minus? The derivative of \\(-\\cos x\\) is \\(\\sin x\\). The constant \\(C\\) is still unknown.',
      '\\(y = -\\cos x + C\\)'
    ),
    S(
      'Use the point \\((0,0)\\): substitute \\(x = 0\\), \\(y = 0\\).\\[0 = -\\cos 0 + C = -1 + C.\\]Hence \\(C = 1\\).',
      '\\(C = 1\\)'
    ),
    S(
      'Equation: \\(y = -\\cos x + 1\\), which is usually written \\(y = 1 - \\cos x\\). Check: at \\(x = 0\\), \\(y = 1 - 1 = 0\\); derivative is \\(\\sin x\\).',
      '\\(y = 1 - \\cos x\\)'
    ),
    S(
      'Final answer: \\(y = 1 - \\cos x\\). A common slip writes \\(y = 1 + \\cos x\\) (wrong sign of cos) or forgets \\(C\\) entirely (\\(y = -\\cos x\\)).',
      '\\(y = 1 - \\cos x\\)'
    ),
  ],
  {
    hint: 'Integrate \\(\\sin x\\), then use \\((0,0)\\) to find \\(C\\).',
    isActive: false,
  }
);

const q3a_ii = mc(
  'y12a-6d-q3a_ii',
  '(a)(ii) The same gradient function \\(\\dfrac{dy}{dx} = \\sin x\\) is used, but now the curve passes through \\(\\left(\\dfrac{\\pi}{2},\\, 3\\right)\\). Find its equation.',
  [
    '\\(y = 2 - \\cos x\\)',
    '\\(y = 3 - \\cos x\\)',
    '\\(y = 3 + \\cos x\\)',
    '\\(y = -\\cos x\\)',
  ],
  1,
  [
    S(
      'Again integrate the gradient: \\(y = \\int\\sin x\\,dx = -\\cos x + C\\). The family of curves is the same; only the constant changes with the new point.',
      '\\(y = -\\cos x + C\\)'
    ),
    S(
      'Substitute the point \\(\\left(\\dfrac{\\pi}{2},\\, 3\\right)\\):\\[3 = -\\cos\\dfrac{\\pi}{2} + C = -0 + C.\\]So \\(C = 3\\).',
      '\\(C = 3\\)'
    ),
    S(
      'Therefore \\(y = -\\cos x + 3 = 3 - \\cos x\\). Check: at \\(x = \\dfrac{\\pi}{2}\\), \\(y = 3 - 0 = 3\\); derivative is still \\(\\sin x\\).',
      '\\(y = 3 - \\cos x\\)'
    ),
    S(
      'A common slip uses \\(\\cos\\dfrac{\\pi}{2} = 1\\) and gets the wrong constant, or confuses with part (i) and keeps \\(C = 1\\).',
      '\\(y = 3 - \\cos x\\)'
    ),
    S(
      'Final answer: \\(y = 3 - \\cos x\\).',
      '\\(y = 3 - \\cos x\\)'
    ),
  ],
  {
    hint: 'Integrate, then substitute \\(\\left(\\pi/2,\\,3\\right)\\) for \\(C\\).',
    isActive: false,
  }
);

const q3a_iii = mc(
  'y12a-6d-q3a_iii',
  '(a)(iii) What translation moves the curve in part (i), \\(y = 1 - \\cos x\\), to the curve in part (ii), \\(y = 3 - \\cos x\\)?',
  [
    'Translation 2 units to the right',
    'Translation 2 units upwards',
    'Translation 2 units downwards',
    'Translation 2 units to the left',
  ],
  1,
  [
    S(
      'Compare the two equations: part (i) is \\(y = 1 - \\cos x\\) and part (ii) is \\(y = 3 - \\cos x\\). The trig part \\(-\\cos x\\) is identical; only the constant term differs.',
      '\\(y_{\\text{i}} = 1 - \\cos x,\\quad y_{\\text{ii}} = 3 - \\cos x\\)'
    ),
    S(
      'Rewrite: \\(y_{\\text{ii}} = (1 - \\cos x) + 2 = y_{\\text{i}} + 2\\). Adding 2 to every \\(y\\)-value is a vertical translation of 2 units upwards.',
      '\\(y_{\\text{ii}} = y_{\\text{i}} + 2\\)'
    ),
    S(
      'Why not horizontal? A horizontal shift would replace \\(x\\) by \\(x - a\\) inside cos, changing the phase. Here the argument of cos is still just \\(x\\).',
      '\\text{vertical shift only}\\)'
    ),
    S(
      'Check at \\(x = 0\\): part (i) gives \\(y = 0\\); part (ii) gives \\(y = 2\\). The graph has moved up by 2. Downwards would decrease the constant; left/right would not match these equations.',
      '\\(0 \\mapsto 2\\)'
    ),
    S(
      'Final answer: translation 2 units upwards.',
      '\\(\\text{2 units upwards}\\)'
    ),
  ],
  {
    hint: 'Compare the constant terms in the two equations.',
    difficulty: 'easy',
    isActive: false,
  }
);
// fix broken workingOut on step 3
q3a_iii.solutionSteps[2].workingOut = '\\(\\text{vertical shift only}\\)';

const q3b = mc(
  'y12a-6d-q3b',
  '(b) Another curve passing through the origin has gradient function \\(y\' = \\cos x - 2\\sin 2x\\). Find its equation.',
  [
    '\\(y = \\sin x - \\cos 2x\\)',
    '\\(y = \\sin x + \\cos 2x - 1\\)',
    '\\(y = \\sin x + \\cos 2x\\)',
    '\\(y = \\sin x - 2\\cos 2x\\)',
  ],
  1,
  [
    S(
      'Given: \\(y\' = \\cos x - 2\\sin 2x\\), and the curve passes through the origin. Integrate term by term to find the general solution, then fix \\(C\\).',
      '\\(y\' = \\cos x - 2\\sin 2x\\)'
    ),
    S(
      'First term: \\(\\int\\cos x\\,dx = \\sin x\\). Second term: \\(\\int -2\\sin 2x\\,dx\\). Since \\(\\int\\sin 2x\\,dx = -\\dfrac{1}{2}\\cos 2x\\), we get \\(-2\\cdot\\left(-\\dfrac{1}{2}\\cos 2x\\right) = \\cos 2x\\).',
      '\\(\\int -2\\sin 2x\\,dx = \\cos 2x\\)'
    ),
    S(
      'General solution: \\(y = \\sin x + \\cos 2x + C\\). Why plus cos? The minus in front of \\(2\\sin 2x\\) and the minus from integrating sine cancel.',
      '\\(y = \\sin x + \\cos 2x + C\\)'
    ),
    S(
      'Through the origin \\((0,0)\\): \\(0 = \\sin 0 + \\cos 0 + C = 0 + 1 + C\\), so \\(C = -1\\).',
      '\\(C = -1\\)'
    ),
    S(
      'Equation: \\(y = \\sin x + \\cos 2x - 1\\). Check derivative: \\(\\cos x - 2\\sin 2x\\). A common slip keeps \\(C = 0\\) or writes \\(-\\cos 2x\\) from a sign error.',
      '\\(y = \\sin x + \\cos 2x - 1\\)'
    ),
  ],
  {
    hint: 'Integrate term by term (watch the chain factor on \\(\\sin 2x\\)), then use \\((0,0)\\).',
    timeLimit: 150,
    isActive: false,
  }
);

const q3c = mc(
  'y12a-6d-q3c',
  '(c) If \\(\\dfrac{dy}{dx} = \\sin x + \\cos x\\) and \\(y = -2\\) when \\(x = \\pi\\), find \\(y\\) as a function of \\(x\\).',
  [
    '\\(y = -\\cos x + \\sin x\\)',
    '\\(y = -\\cos x + \\sin x - 3\\)',
    '\\(y = -\\cos x + \\sin x + 3\\)',
    '\\(y = \\cos x + \\sin x - 3\\)',
  ],
  1,
  [
    S(
      'Integrate the gradient: \\(\\int(\\sin x + \\cos x)\\,dx = -\\cos x + \\sin x + C\\).',
      '\\(y = -\\cos x + \\sin x + C\\)'
    ),
    S(
      'Apply \\(y = -2\\) at \\(x = \\pi\\):\\[-2 = -\\cos\\pi + \\sin\\pi + C.\\]Since \\(\\cos\\pi = -1\\) and \\(\\sin\\pi = 0\\): \\(-2 = -(-1) + 0 + C = 1 + C\\).',
      '\\(-2 = 1 + C\\)'
    ),
    S(
      'Solve: \\(C = -3\\). Therefore \\(y = -\\cos x + \\sin x - 3\\).',
      '\\(y = -\\cos x + \\sin x - 3\\)'
    ),
    S(
      'Check: derivative is \\(\\sin x + \\cos x\\); at \\(x = \\pi\\), \\(y = -(-1) + 0 - 3 = 1 - 3 = -2\\). A common slip uses \\(\\cos\\pi = 1\\) and gets \\(C = -1\\) or \\(+3\\).',
      '\\(y(\\pi) = -2\\)'
    ),
    S(
      'Final answer: \\(y = -\\cos x + \\sin x - 3\\).',
      '\\(y = -\\cos x + \\sin x - 3\\)'
    ),
  ],
  {
    hint: 'Integrate, then use \\(y(\\pi) = -2\\). Remember \\(\\cos\\pi = -1\\).',
    isActive: false,
  }
);

const parent3 = {
  id: 'y12a-6d-q3',
  ...META,
  type: 'multi_part',
  difficulty: 'medium',
  timeLimit: 480,
  title: 'Curves from gradient functions…',
  question:
    'These questions recover equations of curves from their gradient functions by integration, using a given point to find the constant of integration.',
  answer: '',
  hint: 'Integrate the gradient, then substitute the given point to find \\(C\\).',
  solution: '',
  solutionSteps: [],
  subQuestions: [q3a_i, q3a_ii, q3a_iii, q3b, q3c],
  isActive: true,
};

// Flat active copies for bank (also embedded inactive under parent)
const q3flat = [q3a_i, q3a_ii, q3a_iii, q3b, q3c].map((q) => ({
  ...q,
  isActive: true,
  // strip leading (a) labels for standalone? keep for consistency with multiparts display
}));

// ── Q6a–f detailed ───────────────────────────────────────────────────

const q6a = mc(
  'y12a-6d-q6a',
  'Find the indefinite integral: \\( \\int \\cos(x + 2)\\,dx \\).',
  [
    '\\(-\\sin(x + 2) + C\\)',
    '\\(\\sin(x + 2)\\)',
    '\\(\\sin(x + 2) + C\\)',
    '\\(\\cos(x + 2) + C\\)',
  ],
  2,
  [
    S(
      'Given: \\(\\int\\cos(x + 2)\\,dx\\). Why chain reverse? Cosine of a linear expression in \\(x\\). The standard form is \\(\\int\\cos u\\,du = \\sin u\\).',
      '\\(\\int\\cos(x + 2)\\,dx\\)'
    ),
    S(
      'Let \\(u = x + 2\\). Then \\(du = 1\\,dx\\), so \\(dx = du\\). The inner derivative is 1 — no extra constant factor appears.',
      '\\(u = x + 2,\\quad du = dx\\)'
    ),
    S(
      'Therefore \\(\\int\\cos(x + 2)\\,dx = \\sin(x + 2) + C\\). Why not minus sin? Differentiating cos gives \\(-\\sin\\); integrating cos gives \\(+\\sin\\).',
      '\\(\\sin(x + 2) + C\\)'
    ),
    S(
      'Check: \\(\\dfrac{d}{dx}\\sin(x + 2) = \\cos(x + 2)\\cdot 1 = \\cos(x + 2)\\). A common slip omits \\(+C\\) or writes \\(-\\sin(x + 2)\\).',
      '\\(\\dfrac{d}{dx}\\sin(x + 2) = \\cos(x + 2)\\)'
    ),
    S(
      'Final answer: \\(\\sin(x + 2) + C\\).',
      '\\(\\sin(x + 2) + C\\)'
    ),
  ],
  { difficulty: 'easy', hint: 'Inner derivative of \\(x+2\\) is 1.', isActive: false }
);

const q6b = mc(
  'y12a-6d-q6b',
  'Find the indefinite integral: \\( \\int \\cos(2x + 1)\\,dx \\).',
  [
    '\\(-\\dfrac{1}{2}\\sin(2x + 1) + C\\)',
    '\\(2\\sin(2x + 1) + C\\)',
    '\\(\\dfrac{1}{2}\\sin(2x + 1) + C\\)',
    '\\(\\sin(2x + 1) + C\\)',
  ],
  2,
  [
    S(
      'Given: \\(\\int\\cos(2x + 1)\\,dx\\). The argument is linear with slope 2, so a chain factor is required.',
      '\\(\\int\\cos(2x + 1)\\,dx\\)'
    ),
    S(
      'Let \\(u = 2x + 1\\). Then \\(du = 2\\,dx\\), so \\(dx = \\dfrac{1}{2}\\,du\\).',
      '\\(u = 2x + 1,\\quad dx = \\dfrac{1}{2}\\,du\\)'
    ),
    S(
      'Substitute: \\(\\int\\cos u\\cdot\\dfrac{1}{2}\\,du = \\dfrac{1}{2}\\sin u + C = \\dfrac{1}{2}\\sin(2x + 1) + C\\). Why divide by 2? The inner derivative is 2.',
      '\\(\\dfrac{1}{2}\\sin(2x + 1) + C\\)'
    ),
    S(
      'Check: \\(\\dfrac{d}{dx}\\left(\\dfrac{1}{2}\\sin(2x + 1)\\right) = \\dfrac{1}{2}\\cos(2x + 1)\\cdot 2 = \\cos(2x + 1)\\). A common slip multiplies by 2 instead of dividing, or forgets the chain factor entirely.',
      '\\(\\dfrac{d}{dx}\\left(\\dfrac{1}{2}\\sin(2x + 1)\\right) = \\cos(2x + 1)\\)'
    ),
    S(
      'Final answer: \\(\\dfrac{1}{2}\\sin(2x + 1) + C\\).',
      '\\(\\dfrac{1}{2}\\sin(2x + 1) + C\\)'
    ),
  ],
  { difficulty: 'medium', hint: 'Divide by the coefficient of \\(x\\) in the argument.', isActive: false }
);

const q6c = mc(
  'y12a-6d-q6c',
  'Find the indefinite integral: \\( \\int \\sin(x + 2)\\,dx \\).',
  [
    '\\(\\cos(x + 2) + C\\)',
    '\\(-\\cos(x + 2) + C\\)',
    '\\(-\\sin(x + 2) + C\\)',
    '\\(\\sin(x + 2) + C\\)',
  ],
  1,
  [
    S(
      'Given: \\(\\int\\sin(x + 2)\\,dx\\). Standard form: \\(\\int\\sin u\\,du = -\\cos u\\). Inner derivative of \\(x + 2\\) is 1.',
      '\\(\\int\\sin(x + 2)\\,dx\\)'
    ),
    S(
      'Let \\(u = x + 2\\), \\(du = dx\\). Then \\(\\int\\sin u\\,du = -\\cos u + C\\).',
      '\\(u = x + 2\\)'
    ),
    S(
      'Back-substitute: \\(-\\cos(x + 2) + C\\). Why the minus? Differentiating \\(-\\cos u\\) gives \\(\\sin u\\).',
      '\\(-\\cos(x + 2) + C\\)'
    ),
    S(
      'Check: \\(\\dfrac{d}{dx}\\bigl(-\\cos(x + 2)\\bigr) = \\sin(x + 2)\\). A common slip drops the minus and writes \\(+\\cos(x + 2)\\).',
      '\\(\\dfrac{d}{dx}\\bigl(-\\cos(x + 2)\\bigr) = \\sin(x + 2)\\)'
    ),
    S(
      'Final answer: \\(-\\cos(x + 2) + C\\).',
      '\\(-\\cos(x + 2) + C\\)'
    ),
  ],
  { difficulty: 'easy', hint: 'Integral of sin is \\(-\\cos\\); chain factor is 1.', isActive: false }
);

const q6d = mc(
  'y12a-6d-q6d',
  'Find the indefinite integral: \\( \\int \\sin(2x + 1)\\,dx \\).',
  [
    '\\(\\dfrac{1}{2}\\cos(2x + 1) + C\\)',
    '\\(-\\dfrac{1}{2}\\cos(2x + 1) + C\\)',
    '\\(-\\dfrac{1}{2}\\sin(2x + 1) + C\\)',
    '\\(-2\\cos(2x + 1) + C\\)',
  ],
  1,
  [
    S(
      'Given: \\(\\int\\sin(2x + 1)\\,dx\\). Combine the sine integral with a chain factor of 2.',
      '\\(\\int\\sin(2x + 1)\\,dx\\)'
    ),
    S(
      'Let \\(u = 2x + 1\\), \\(du = 2\\,dx\\), so \\(dx = \\dfrac{1}{2}\\,du\\). Then \\(\\int\\sin u\\cdot\\dfrac{1}{2}\\,du = -\\dfrac{1}{2}\\cos u + C\\).',
      '\\(-\\dfrac{1}{2}\\cos u + C\\)'
    ),
    S(
      'Back-substitute: \\(-\\dfrac{1}{2}\\cos(2x + 1) + C\\). Both the minus (from integrating sine) and the \\(\\dfrac{1}{2}\\) (from the chain) are required.',
      '\\(-\\dfrac{1}{2}\\cos(2x + 1) + C\\)'
    ),
    S(
      'Check: \\(\\dfrac{d}{dx}\\left(-\\dfrac{1}{2}\\cos(2x + 1)\\right) = -\\dfrac{1}{2}\\cdot\\bigl(-\\sin(2x + 1)\\cdot 2\\bigr) = \\sin(2x + 1)\\). A common slip flips the overall sign or multiplies by 2.',
      '\\(\\dfrac{d}{dx}\\left(-\\dfrac{1}{2}\\cos(2x + 1)\\right) = \\sin(2x + 1)\\)'
    ),
    S(
      'Final answer: \\(-\\dfrac{1}{2}\\cos(2x + 1) + C\\).',
      '\\(-\\dfrac{1}{2}\\cos(2x + 1) + C\\)'
    ),
  ],
  { difficulty: 'medium', hint: 'Minus cos, then divide by 2.', isActive: false }
);

const q6e = mc(
  'y12a-6d-q6e',
  'Find the indefinite integral: \\( \\int \\cos(3x - 2)\\,dx \\).',
  [
    '\\(-\\dfrac{1}{3}\\sin(3x - 2) + C\\)',
    '\\(3\\sin(3x - 2) + C\\)',
    '\\(\\dfrac{1}{3}\\sin(3x - 2) + C\\)',
    '\\(\\sin(3x - 2) + C\\)',
  ],
  2,
  [
    S(
      'Given: \\(\\int\\cos(3x - 2)\\,dx\\). Inner derivative of \\(3x - 2\\) is 3, so divide by 3 when integrating cos.',
      '\\(\\int\\cos(3x - 2)\\,dx\\)'
    ),
    S(
      'Let \\(u = 3x - 2\\), \\(du = 3\\,dx\\), \\(dx = \\dfrac{1}{3}\\,du\\). Then \\(\\int\\cos u\\cdot\\dfrac{1}{3}\\,du = \\dfrac{1}{3}\\sin u + C\\).',
      '\\(\\dfrac{1}{3}\\sin(3x - 2) + C\\)'
    ),
    S(
      'The constant \\(-2\\) inside the argument does not change the chain factor (its derivative is 0). Only the coefficient of \\(x\\) matters.',
      '\\(\\dfrac{1}{3}\\sin(3x - 2) + C\\)'
    ),
    S(
      'Check: \\(\\dfrac{d}{dx}\\left(\\dfrac{1}{3}\\sin(3x - 2)\\right) = \\dfrac{1}{3}\\cos(3x - 2)\\cdot 3 = \\cos(3x - 2)\\). A common slip multiplies by 3 or puts a false minus.',
      '\\(\\dfrac{d}{dx}\\left(\\dfrac{1}{3}\\sin(3x - 2)\\right) = \\cos(3x - 2)\\)'
    ),
    S(
      'Final answer: \\(\\dfrac{1}{3}\\sin(3x - 2) + C\\).',
      '\\(\\dfrac{1}{3}\\sin(3x - 2) + C\\)'
    ),
  ],
  { difficulty: 'medium', hint: 'Divide by 3 (coefficient of \\(x\\)).', isActive: false }
);

const q6f = mc(
  'y12a-6d-q6f',
  'Find the indefinite integral: \\( \\int \\sin(7 - 5x)\\,dx \\).',
  [
    '\\(-\\dfrac{1}{5}\\cos(7 - 5x) + C\\)',
    '\\(\\dfrac{1}{5}\\cos(7 - 5x) + C\\)',
    '\\(\\dfrac{1}{5}\\sin(7 - 5x) + C\\)',
    '\\(-5\\cos(7 - 5x) + C\\)',
  ],
  1,
  [
    S(
      'Given: \\(\\int\\sin(7 - 5x)\\,dx\\). The inner derivative is \\(-5\\) (negative slope). Both the sine integral minus and this negative chain factor matter.',
      '\\(\\int\\sin(7 - 5x)\\,dx\\)'
    ),
    S(
      'Let \\(u = 7 - 5x\\). Then \\(du = -5\\,dx\\), so \\(dx = -\\dfrac{1}{5}\\,du\\).',
      '\\(u = 7 - 5x,\\quad dx = -\\dfrac{1}{5}\\,du\\)'
    ),
    S(
      'Substitute: \\(\\int\\sin u\\cdot\\left(-\\dfrac{1}{5}\\right)\\,du = -\\dfrac{1}{5}\\int\\sin u\\,du = -\\dfrac{1}{5}(-\\cos u) + C = \\dfrac{1}{5}\\cos u + C\\).',
      '\\(\\dfrac{1}{5}\\cos(7 - 5x) + C\\)'
    ),
    S(
      'Why a plus overall? Integrating sine gives \\(-\\cos\\); the chain contributes another minus (from \\(-5\\)); two minuses make a plus. A common slip keeps only one minus and answers \\(-\\dfrac{1}{5}\\cos(7 - 5x)\\).',
      '\\(\\dfrac{d}{dx}\\left(\\dfrac{1}{5}\\cos(7 - 5x)\\right) = \\dfrac{1}{5}\\cdot\\bigl(-\\sin(7 - 5x)\\cdot(-5)\\bigr) = \\sin(7 - 5x)\\)'
    ),
    S(
      'Final answer: \\(\\dfrac{1}{5}\\cos(7 - 5x) + C\\).',
      '\\(\\dfrac{1}{5}\\cos(7 - 5x) + C\\)'
    ),
  ],
  {
    difficulty: 'medium',
    hint: 'Inner derivative is \\(-5\\); two minuses give a positive cos answer.',
    timeLimit: 120,
    isActive: false,
  }
);

const parent6 = {
  id: 'y12a-6d-q6',
  ...META,
  type: 'multi_part',
  difficulty: 'medium',
  timeLimit: 360,
  title: 'Indefinite integrals of sin/cos of linear arguments…',
  question:
    'Find the following indefinite integrals. Use the reverse chain rule carefully when the argument is a linear function of \\(x\\).',
  answer: '',
  hint: 'If the argument is \\(ax + b\\), divide by \\(a\\) (and watch the sign of \\(a\\)).',
  solution: '',
  solutionSteps: [],
  subQuestions: [q6a, q6b, q6c, q6d, q6e, q6f],
  isActive: true,
};

const q6flat = [q6a, q6b, q6c, q6d, q6e, q6f].map((q) => ({ ...q, isActive: true }));

(async () => {
  const seedPath = path.resolve('src/constants/seedYear12aCh6DQuestions.js');
  delete require.cache[require.resolve(seedPath)];
  let list = require(seedPath).Y12A_CH6D_QUESTIONS || require(seedPath).default;

  const replaceIds = new Set([
    'y12a-6d-q3',
    'y12a-6d-q3a_i',
    'y12a-6d-q3a_ii',
    'y12a-6d-q3a_iii',
    'y12a-6d-q3b',
    'y12a-6d-q3c',
    'y12a-6d-q6',
    'y12a-6d-q6a',
    'y12a-6d-q6b',
    'y12a-6d-q6c',
    'y12a-6d-q6d',
    'y12a-6d-q6e',
    'y12a-6d-q6f',
  ]);

  list = list.filter((q) => !replaceIds.has(q.id));

  // Insert parents then flat children near start of related content
  const insertDocs = [parent3, ...q3flat, parent6, ...q6flat];
  // place after q2i if present
  const after2i = list.findIndex((q) => q.id === 'y12a-6d-q2i');
  if (after2i >= 0) {
    list.splice(after2i + 1, 0, ...insertDocs);
  } else {
    list.push(...insertDocs);
  }

  writeFileSync(
    seedPath,
    'export const Y12A_CH6D_QUESTIONS = ' +
      JSON.stringify(list, null, 2) +
      ';\n\nexport default Y12A_CH6D_QUESTIONS;\n'
  );
  console.log('seed count', list.length);

  const toWrite = [parent3, ...q3flat, parent6, ...q6flat];
  let batch = db.batch();
  let ops = 0;
  for (const q of toWrite) {
    batch.set(
      db.collection('questions').doc(q.id),
      { ...q, updatedAt: FieldValue.serverTimestamp() },
      { merge: true }
    );
    ops++;
    console.log('OK', q.id, q.type, 'steps', (q.solutionSteps || []).length || 'parent');
    if (ops >= 400) {
      await batch.commit();
      batch = db.batch();
      ops = 0;
    }
  }
  if (ops) await batch.commit();

  const ver = Date.now();
  await db.collection('sync_meta').doc('questions').set(
    {
      version: ver,
      membershipVersion: ver,
      updatedAt: FieldValue.serverTimestamp(),
    },
    { merge: true }
  );

  const idx = spawnSync('node', ['tools/scripts/rebuildQuestionIndexes.js', 'y12a-6'], {
    encoding: 'utf8',
    timeout: 120000,
  });
  console.log(idx.stdout || '');
  if (idx.status !== 0) console.warn(idx.stderr);

  for (const id of ['y12a-6d-q3', 'y12a-6d-q3b', 'y12a-6d-q6', 'y12a-6d-q6f']) {
    const d = (await db.collection('questions').doc(id).get()).data();
    console.log(
      '\n',
      id,
      d.type,
      'subs',
      d.subQuestions?.length,
      'a',
      d.a,
      'steps',
      d.solutionSteps?.length
    );
    if (d.solutionSteps?.[0]) console.log('  s1', d.solutionSteps[0].explanation.slice(0, 90));
    if (d.subQuestions?.[0])
      console.log('  sub0', d.subQuestions[0].id, d.subQuestions[0].type, d.subQuestions[0].a);
  }
  console.log('version', ver);
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
