/**
 * Fix multiparts:
 *  - y12a-6d-q10 / q11 / q12 parents → multi_part with MC children
 *  - expand detailed steps on a/b parts
 *  - asc2020-q34 → multi_part MC a/b/c with proper steps + clean opts
 *
 *   node tools/scripts/fixY12A6D_q10_12_and_asc34.cjs
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

function S(explanation, workingOut) {
  return { explanation, workingOut, graphData: null };
}

function mcPart(id, question, opts, a, steps, extra = {}) {
  const correct = opts[a];
  return {
    id,
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
    graphData: null,
    requiresManualGrading: false,
    isActive: false, // embedded under multi_part parent
    origin: 'seed',
    isNew: true,
    topicId: extra.topicId || 'y12a-6D',
    chapterId: extra.chapterId || 'y12a-6',
    c: extra.c || '6D',
    t: extra.t || 'Integrating the trigonometric functions',
  };
}

// ── 6D q10–q12 parts with detailed steps ─────────────────────────────

const q10a = mcPart(
  'y12a-6d-q10a',
  '(a) Copy and complete \\(1 + \\tan^{2}x = \\dots\\), and hence find \\(\\int \\tan^{2}x\\,dx\\).',
  [
    '\\(\\sin x - x + C\\)',
    '\\(\\tan x + x + C\\)',
    '\\(\\tan x - x + C\\)',
    '\\(\\sec x - x + C\\)',
  ],
  2,
  [
    S(
      'Start from the Pythagorean identity: \\(1 + \\tan^{2}x = \\sec^{2}x\\). Why this identity? There is no elementary standard form for \\(\\int\\tan^{2}x\\,dx\\) by itself, but \\(\\sec^{2}x\\) is the derivative of \\(\\tan x\\).',
      '\\(1 + \\tan^{2}x = \\sec^{2}x\\)'
    ),
    S(
      'Rearrange for the integrand: \\(\\tan^{2}x = \\sec^{2}x - 1\\). What this does: rewrites the integral as a sum of two standard pieces.',
      '\\(\\tan^{2}x = \\sec^{2}x - 1\\)'
    ),
    S(
      'Integrate term by term: \\(\\int\\tan^{2}x\\,dx = \\int(\\sec^{2}x - 1)\\,dx = \\tan x - x + C\\). Why \\(+C\\)? Indefinite integrals always include an arbitrary constant.',
      '\\(\\int(\\sec^{2}x - 1)\\,dx = \\tan x - x + C\\)'
    ),
    S(
      'Check by differentiating: \\(\\dfrac{d}{dx}(\\tan x - x) = \\sec^{2}x - 1 = \\tan^{2}x\\). A common slip is writing \\(\\tan x + x + C\\) (wrong sign on \\(x\\)) or integrating tan as if it were sec.',
      '\\(\\dfrac{d}{dx}(\\tan x - x) = \\tan^{2}x\\)'
    ),
    S(
      'Final answer: \\(\\tan x - x + C\\). The completed identity is \\(1+\\tan^{2}x=\\sec^{2}x\\).',
      '\\(\\tan x - x + C\\)'
    ),
  ],
  { hint: 'Use \\(1+\\tan^{2}x=\\sec^{2}x\\), then integrate \\(\\sec^{2}x-1\\).' }
);

const q10b = mcPart(
  'y12a-6d-q10b',
  '(b) Simplify \\(1 - \\sin^{2}x\\), and hence find the value of \\(\\int_{0}^{\\frac{\\pi}{3}} \\dfrac{2}{1-\\sin^{2}x}\\,dx\\).',
  ['\\(\\sqrt{3}\\)', '\\(2\\sqrt{3}\\)', '\\(2\\)', '\\(4\\)'],
  1,
  [
    S(
      'Simplify the denominator using a Pythagorean identity: \\(1 - \\sin^{2}x = \\cos^{2}x\\). Why? Then the fraction becomes a multiple of a standard derivative.',
      '\\(1 - \\sin^{2}x = \\cos^{2}x\\)'
    ),
    S(
      'Rewrite the integrand: \\(\\dfrac{2}{1-\\sin^{2}x} = \\dfrac{2}{\\cos^{2}x} = 2\\sec^{2}x\\). What this means: the integral is twice the integral of \\(\\sec^{2}x\\).',
      '\\(2\\sec^{2}x\\)'
    ),
    S(
      'Antiderivative: \\(\\int 2\\sec^{2}x\\,dx = 2\\tan x\\). A common slip forgets the factor 2 or uses \\(\\sin\\) instead of \\(\\tan\\).',
      '\\(F(x) = 2\\tan x\\)'
    ),
    S(
      'Evaluate from 0 to \\(\\dfrac{\\pi}{3}\\): \\(2\\tan\\dfrac{\\pi}{3} - 2\\tan 0 = 2\\sqrt{3} - 0 = 2\\sqrt{3}\\).',
      '\\(2\\sqrt{3}\\)'
    ),
    S(
      'Final answer: \\(2\\sqrt{3}\\). Domain note: on \\([0,\\pi/3]\\), \\(\\cos x \\neq 0\\), so the integrand is continuous.',
      '\\(2\\sqrt{3}\\)'
    ),
  ],
  { hint: 'Rewrite as \\(2\\sec^{2}x\\), then evaluate \\(2\\tan x\\) at the limits.' }
);

const q11a = mcPart(
  'y12a-6d-q11a',
  '(a) Copy and complete: \\(\\displaystyle\\int \\dfrac{f\'(x)}{f(x)}\\,dx = \\dots\\)',
  [
    '\\(-\\ln|f(x)| + C\\)',
    '\\(\\ln|f(x)| + C\\)',
    '\\(\\dfrac{1}{f(x)} + C\\)',
    '\\(f(x) + C\\)',
  ],
  1,
  [
    S(
      'This is the standard log form of the chain rule in reverse. Why? If \\(u = f(x)\\), then \\(du = f\'(x)\\,dx\\), so the integrand becomes \\(\\dfrac{1}{u}\\,du\\).',
      '\\(u = f(x),\\quad du = f\'(x)\\,dx\\)'
    ),
    S(
      'Integrate: \\(\\int\\dfrac{1}{u}\\,du = \\ln|u| + C\\). Substituting back gives \\(\\ln|f(x)| + C\\).',
      '\\(\\ln|f(x)| + C\\)'
    ),
    S(
      'Why absolute value? The logarithm of a real number requires a positive argument; \\(|f(x)|\\) covers intervals where \\(f\\) is negative (and nonzero).',
      '\\(\\ln|f(x)| + C\\)'
    ),
    S(
      'A common slip writes \\(\\dfrac{1}{f(x)}\\) (confusing with the power rule) or drops the absolute value and the constant \\(C\\).',
      '\\(\\ln|f(x)| + C\\)'
    ),
    S(
      'Final answer: \\(\\ln|f(x)| + C\\).',
      '\\(\\ln|f(x)| + C\\)'
    ),
  ],
  { hint: 'Substitute \\(u=f(x)\\) so the integral becomes \\(\\int\\dfrac{1}{u}\\,du\\).' }
);

const q11b = mcPart(
  'y12a-6d-q11b',
  '(b) Hence find the exact value of \\(\\displaystyle\\int_{0}^{\\frac{\\pi}{6}} \\dfrac{\\cos x}{1+\\sin x}\\,dx\\).',
  [
    '\\(\\ln\\dfrac{3}{2}\\)',
    '\\(\\ln 2\\)',
    '\\(\\ln\\dfrac{1}{2}\\)',
    '\\(\\dfrac{1}{2}\\ln 2\\)',
  ],
  0,
  [
    S(
      'From part (a), look for the form \\(\\dfrac{f\'}{f}\\). Here the denominator is \\(1+\\sin x\\) and its derivative is \\(\\cos x\\), which is exactly the numerator. So \\(f(x)=1+\\sin x\\).',
      '\\(f(x)=1+\\sin x,\\quad f\'(x)=\\cos x\\)'
    ),
    S(
      'Therefore the indefinite integral is \\(\\ln|1+\\sin x| + C\\). On \\([0,\\pi/6]\\), \\(1+\\sin x > 0\\), so absolute values may be dropped for evaluation.',
      '\\(\\ln(1+\\sin x)\\)'
    ),
    S(
      'Evaluate: \\(\\ln\\!\\left(1+\\sin\\dfrac{\\pi}{6}\\right) - \\ln(1+\\sin 0) = \\ln\\!\\left(1+\\dfrac{1}{2}\\right) - \\ln(1+0) = \\ln\\dfrac{3}{2} - \\ln 1 = \\ln\\dfrac{3}{2}\\).',
      '\\(\\ln\\dfrac{3}{2}\\)'
    ),
    S(
      'Numerical check: \\(\\ln\\dfrac{3}{2} \\approx 0.405 \\approx 0.4\\), matching the “approximately 0.4” form of the original show-that statement. The exact value is preferred.',
      '\\(\\ln\\dfrac{3}{2} \\approx 0.4\\)'
    ),
    S(
      'Final answer: \\(\\ln\\dfrac{3}{2}\\). A common slip uses \\(f=\\sin x\\) only and gets the wrong limits.',
      '\\(\\ln\\dfrac{3}{2}\\)'
    ),
  ],
  { hint: 'Use part (a) with \\(f(x)=1+\\sin x\\).', difficulty: 'medium' }
);

const q12a = mcPart(
  'y12a-6d-q12a',
  '(a) Using \\(\\tan x = \\dfrac{\\sin x}{\\cos x}\\), the value of \\(\\displaystyle\\int_{0}^{\\frac{\\pi}{4}} \\tan x\\,dx\\) is:',
  [
    '\\(\\ln 2\\)',
    '\\(\\dfrac{1}{2}\\ln 2\\)',
    '\\(-\\dfrac{1}{2}\\ln 2\\)',
    '\\(1\\)',
  ],
  1,
  [
    S(
      'Rewrite the integrand: \\(\\tan x = \\dfrac{\\sin x}{\\cos x}\\). Strategy: substitute so that the numerator is (up to a sign) the derivative of the denominator.',
      '\\(\\tan x = \\dfrac{\\sin x}{\\cos x}\\)'
    ),
    S(
      'Let \\(u = \\cos x\\). Then \\(du = -\\sin x\\,dx\\), so \\(\\sin x\\,dx = -\\,du\\). The integral becomes \\(\\int\\dfrac{-du}{u} = -\\ln|u| + C = -\\ln|\\cos x| + C\\) (equivalently \\(\\ln|\\sec x| + C\\)).',
      '\\(\\int\\tan x\\,dx = -\\ln|\\cos x| + C\\)'
    ),
    S(
      'Definite integral from 0 to \\(\\dfrac{\\pi}{4}\\): \\([-\\ln|\\cos x|]_{0}^{\\pi/4} = \\left(-\\ln\\cos\\dfrac{\\pi}{4}\\right) - \\left(-\\ln\\cos 0\\right)\\).',
      '\\(-\\ln\\dfrac{1}{\\sqrt{2}} + \\ln 1\\)'
    ),
    S(
      'Simplify: \\(-\\ln 2^{-1/2} = \\dfrac{1}{2}\\ln 2\\) (since \\(\\ln 1 = 0\\)). Why positive? On \\((0,\\pi/4)\\), tan is positive, so the integral must be positive — reject \\(-\\dfrac{1}{2}\\ln 2\\).',
      '\\(\\dfrac{1}{2}\\ln 2\\)'
    ),
    S(
      'Final answer: \\(\\dfrac{1}{2}\\ln 2\\). A common slip drops the factor \\(\\dfrac{1}{2}\\) from \\(\\ln\\sqrt{2}\\).',
      '\\(\\dfrac{1}{2}\\ln 2\\)'
    ),
  ],
  { hint: 'Substitute \\(u=\\cos x\\); remember the minus from \\(du\\).', difficulty: 'medium' }
);

const q12b = mcPart(
  'y12a-6d-q12b',
  '(b) Using \\(\\cot x = \\dfrac{\\cos x}{\\sin x}\\), find \\(\\displaystyle\\int_{\\frac{\\pi}{6}}^{\\frac{\\pi}{2}} \\cot x\\,dx\\).',
  ['\\(-\\ln 2\\)', '\\(\\ln 2\\)', '\\(\\dfrac{1}{2}\\ln 2\\)', '\\(1\\)'],
  1,
  [
    S(
      'Rewrite: \\(\\cot x = \\dfrac{\\cos x}{\\sin x}\\). Let \\(u = \\sin x\\), then \\(du = \\cos x\\,dx\\). So \\(\\int\\cot x\\,dx = \\int\\dfrac{1}{u}\\,du = \\ln|u| + C = \\ln|\\sin x| + C\\).',
      '\\(\\int\\cot x\\,dx = \\ln|\\sin x| + C\\)'
    ),
    S(
      'Why no extra minus here? Unlike tan, the numerator is already the derivative of the denominator (with a plus). A common slip copies the tan substitution and inserts a false minus.',
      '\\(\\ln|\\sin x|\\)'
    ),
    S(
      'Evaluate from \\(\\dfrac{\\pi}{6}\\) to \\(\\dfrac{\\pi}{2}\\): \\(\\ln\\sin\\dfrac{\\pi}{2} - \\ln\\sin\\dfrac{\\pi}{6} = \\ln 1 - \\ln\\dfrac{1}{2} = 0 - (-\\ln 2) = \\ln 2\\).',
      '\\(\\ln 2\\)'
    ),
    S(
      'Sign check: on \\(\\left(\\dfrac{\\pi}{6},\\dfrac{\\pi}{2}\\right)\\), cot is positive, so the integral is positive. Reject \\(-\\ln 2\\).',
      '\\(\\ln 2 > 0\\)'
    ),
    S(
      'Final answer: \\(\\ln 2\\).',
      '\\(\\ln 2\\)'
    ),
  ],
  { hint: 'Substitute \\(u=\\sin x\\).', difficulty: 'medium' }
);

function multiParent(id, stem, subs, extra = {}) {
  const embedded = subs.map((s) => ({ ...s }));
  return {
    id,
    topicId: 'y12a-6D',
    chapterId: 'y12a-6',
    chapterTitle: 'Chapter 6: The trigonometric functions',
    topicCode: '6D',
    topicTitle: 'Integrating the trigonometric functions',
    c: '6D',
    t: 'Integrating the trigonometric functions',
    year: 'Year 12',
    type: 'multi_part',
    difficulty: extra.difficulty || 'medium',
    timeLimit: extra.timeLimit || 300,
    question: stem,
    answer: '',
    hint: extra.hint || 'Work through the parts in order.',
    solution: '',
    solutionSteps: [],
    graphData: null,
    subQuestions: embedded,
    requiresManualGrading: false,
    isActive: true,
    origin: 'seed',
    isNew: true,
    isManual: true,
  };
}

const parent10 = multiParent(
  'y12a-6d-q10',
  'Use trigonometric identities to evaluate the following integrals.',
  [q10a, q10b],
  { hint: 'Part (a) uses \\(1+\\tan^{2}x=\\sec^{2}x\\). Part (b) uses \\(1-\\sin^{2}x=\\cos^{2}x\\).' }
);

const parent11 = multiParent(
  'y12a-6d-q11',
  'The standard form \\(\\displaystyle\\int \\dfrac{f\'(x)}{f(x)}\\,dx = \\ln|f(x)| + C\\) is useful for many trig integrals.',
  [q11a, q11b],
  { hint: 'Identify \\(f\\) so that the numerator is \\(f\'\\).' }
);

const parent12 = multiParent(
  'y12a-6d-q12',
  'Integrals of tan and cot can be found by rewriting as quotients of sine and cosine.',
  [q12a, q12b],
  { hint: 'Use the substitutions \\(u=\\cos x\\) for tan and \\(u=\\sin x\\) for cot.' }
);

// ── Ascham 2020 q34 ──────────────────────────────────────────────────

const STEM34 =
  'A small-sized home swimming pool contains \\(100\\) kL of water when full. The flow rate of the volume of water that the pump filters (in kL/min) is given by\n\n' +
  '\\[\\dfrac{dV}{dt} = -0.3\\sin\\dfrac{\\pi t}{30}.\\]\n\n' +
  'At 9:45 am the swimming pool is full and the pump is switched on. Time \\(t\\) is measured in minutes after 9:45 am.';

const a34a = mcPart(
  'asc2020-q34-a',
  '(a) What is the first time after 9:45 am at which the flow rate is zero?',
  [
    '\\(t = 30\\) minutes after 9:45 am (10:15 am)',
    '\\(t = 15\\) minutes after 9:45 am (10:00 am)',
    '\\(t = 60\\) minutes after 9:45 am (10:45 am)',
    '\\(t = 0\\) (already zero when the pump starts)',
  ],
  0,
  [
    S(
      'Flow rate zero means \\(\\dfrac{dV}{dt} = 0\\). Given \\(\\dfrac{dV}{dt} = -0.3\\sin\\dfrac{\\pi t}{30}\\), and \\(-0.3 \\neq 0\\), we need \\(\\sin\\dfrac{\\pi t}{30} = 0\\).',
      '\\(\\sin\\dfrac{\\pi t}{30} = 0\\)'
    ),
    S(
      'Sine is zero when its argument is an integer multiple of \\(\\pi\\): \\(\\dfrac{\\pi t}{30} = n\\pi\\) for integer \\(n\\), so \\(t = 30n\\).',
      '\\(t = 30n\\)'
    ),
    S(
      'The first time after 9:45 am is the first positive solution: \\(n = 1\\) gives \\(t = 30\\) minutes. (\\(n = 0\\) is the switch-on instant, not “after”.)',
      '\\(t = 30\\)'
    ),
    S(
      'Clock time: 9:45 am plus 30 minutes is 10:15 am. A common slip solves \\(\\cos\\dfrac{\\pi t}{30}=0\\) (that would be extrema of volume, not zero flow).',
      '\\(10{:}15\\ \\text{am}\\)'
    ),
    S(
      'Final answer: \\(t = 30\\) minutes after 9:45 am (10:15 am).',
      '\\(t = 30\\ \\text{min (10:15 am)}\\)'
    ),
  ],
  {
    topicId: 'y12a-exam',
    chapterId: 'y12a-exam',
    c: 'EXAM',
    t: 'Ascham 2020 Trial Exam',
    hint: 'Set the sine factor equal to zero and take the first positive \\(t\\).',
    difficulty: 'medium',
  }
);

const a34b = mcPart(
  'asc2020-q34-b',
  '(b) Find an expression for the volume \\(V\\) of water in the pool after \\(t\\) minutes.',
  [
    '\\(V = 100 - \\dfrac{9}{\\pi}\\!\\left(\\cos\\dfrac{\\pi t}{30} - 1\\right)\\)',
    '\\(V = 100 + \\dfrac{9}{\\pi}\\!\\left(\\cos\\dfrac{\\pi t}{30} - 1\\right)\\)',
    '\\(V = 100 + \\dfrac{1}{\\pi}\\!\\left(\\cos\\dfrac{\\pi t}{30} - 1\\right)\\)',
    '\\(V = 100 + \\dfrac{\\pi}{9}\\!\\left(\\cos\\dfrac{\\pi t}{30} - 1\\right)\\)',
  ],
  1,
  [
    S(
      'Volume is the integral of flow rate: \\(V(t) = \\int -0.3\\sin\\dfrac{\\pi t}{30}\\,dt\\). Why integrate? Flow rate is \\(\\dfrac{dV}{dt}\\), so volume is an antiderivative of the given rate.',
      '\\(V = \\int -0.3\\sin\\dfrac{\\pi t}{30}\\,dt\\)'
    ),
    S(
      'Chain rule reverse: let \\(u = \\dfrac{\\pi t}{30}\\), then \\(du = \\dfrac{\\pi}{30}\\,dt\\). \\(\\int\\sin\\dfrac{\\pi t}{30}\\,dt = -\\dfrac{30}{\\pi}\\cos\\dfrac{\\pi t}{30}\\).',
      '\\(\\int\\sin\\dfrac{\\pi t}{30}\\,dt = -\\dfrac{30}{\\pi}\\cos\\dfrac{\\pi t}{30}\\)'
    ),
    S(
      'Therefore \\(\\int -0.3\\sin\\dfrac{\\pi t}{30}\\,dt = -0.3\\left(-\\dfrac{30}{\\pi}\\cos\\dfrac{\\pi t}{30}\\right) + C = \\dfrac{9}{\\pi}\\cos\\dfrac{\\pi t}{30} + C\\) (since \\(0.3\\times 30 = 9\\)).',
      '\\(V(t) = \\dfrac{9}{\\pi}\\cos\\dfrac{\\pi t}{30} + C\\)'
    ),
    S(
      'Initial condition: pool full at \\(t = 0\\), so \\(V(0) = 100\\). Then \\(100 = \\dfrac{9}{\\pi}\\cos 0 + C = \\dfrac{9}{\\pi} + C\\), hence \\(C = 100 - \\dfrac{9}{\\pi}\\).',
      '\\(C = 100 - \\dfrac{9}{\\pi}\\)'
    ),
    S(
      'Combine: \\(V(t) = \\dfrac{9}{\\pi}\\cos\\dfrac{\\pi t}{30} + 100 - \\dfrac{9}{\\pi} = 100 + \\dfrac{9}{\\pi}\\left(\\cos\\dfrac{\\pi t}{30} - 1\\right)\\).',
      '\\(V = 100 + \\dfrac{9}{\\pi}\\left(\\cos\\dfrac{\\pi t}{30} - 1\\right)\\)'
    ),
    S(
      'Final answer: \\(V = 100 + \\dfrac{9}{\\pi}\\left(\\cos\\dfrac{\\pi t}{30} - 1\\right)\\). Check: at \\(t=0\\), cos = 1 so \\(V=100\\). A common slip flips the sign in front of the cosine term.',
      '\\(V = 100 + \\dfrac{9}{\\pi}\\left(\\cos\\dfrac{\\pi t}{30} - 1\\right)\\)'
    ),
  ],
  {
    topicId: 'y12a-exam',
    chapterId: 'y12a-exam',
    c: 'EXAM',
    t: 'Ascham 2020 Trial Exam',
    hint: 'Integrate \\(dV/dt\\) and use \\(V(0)=100\\).',
    difficulty: 'hard',
    timeLimit: 150,
  }
);

const a34c = mcPart(
  'asc2020-q34-c',
  '(c) Find the minimum volume of water in the pool during the pumping cycle. Leave your answer in terms of \\(\\pi\\).',
  [
    '\\(V_{\\min} = 100 - \\dfrac{9}{\\pi}\\) kL',
    '\\(V_{\\min} = 100 - \\dfrac{18}{\\pi}\\) kL',
    '\\(V_{\\min} = 100 + \\dfrac{18}{\\pi}\\) kL',
    '\\(V_{\\min} = 100 - \\dfrac{\\pi}{18}\\) kL',
  ],
  1,
  [
    S(
      'From part (b): \\(V(t) = 100 + \\dfrac{9}{\\pi}\\left(\\cos\\dfrac{\\pi t}{30} - 1\\right)\\). The constant 100 and \\(-\\dfrac{9}{\\pi}\\) do not change which cos value minimises \\(V\\).',
      '\\(V = 100 + \\dfrac{9}{\\pi}\\left(\\cos\\dfrac{\\pi t}{30} - 1\\right)\\)'
    ),
    S(
      'Since \\(\\dfrac{9}{\\pi} > 0\\), \\(V\\) is minimised when \\(\\cos\\dfrac{\\pi t}{30}\\) is minimised. The minimum of cosine is \\(-1\\).',
      '\\(\\cos\\dfrac{\\pi t}{30} = -1\\)'
    ),
    S(
      'Substitute: \\(V_{\\min} = 100 + \\dfrac{9}{\\pi}(-1 - 1) = 100 + \\dfrac{9}{\\pi}(-2) = 100 - \\dfrac{18}{\\pi}\\) kL.',
      '\\(V_{\\min} = 100 - \\dfrac{18}{\\pi}\\)'
    ),
    S(
      'When does this occur? \\(\\cos\\dfrac{\\pi t}{30} = -1 \\Rightarrow \\dfrac{\\pi t}{30} = \\pi \\Rightarrow t = 30\\) min (same instant as zero flow in part (a) for the first cycle trough).',
      '\\(t = 30\\)'
    ),
    S(
      'Final answer: \\(V_{\\min} = 100 - \\dfrac{18}{\\pi}\\) kL. A common slip uses \\(\\cos = 0\\) or forgets the \\(-1\\) inside the brackets and gets \\(100 - \\dfrac{9}{\\pi}\\).',
      '\\(100 - \\dfrac{18}{\\pi}\\ \\text{kL}\\)'
    ),
  ],
  {
    topicId: 'y12a-exam',
    chapterId: 'y12a-exam',
    c: 'EXAM',
    t: 'Ascham 2020 Trial Exam',
    hint: 'Minimise the cosine term in the expression from (b).',
    difficulty: 'hard',
    timeLimit: 120,
  }
);

const parent34 = {
  id: 'asc2020-q34',
  topicId: 'y12a-exam',
  chapterId: 'y12a-exam',
  c: 'EXAM',
  t: 'Ascham 2020 Trial Exam',
  type: 'multi_part',
  difficulty: 'hard',
  timeLimit: 400,
  question: STEM34,
  answer: '',
  hint: 'Set flow rate to zero for (a); integrate with \\(V(0)=100\\) for (b); minimise cosine for (c).',
  solution: '',
  solutionSteps: [],
  graphData: null,
  subQuestions: [a34a, a34b, a34c].map((s) => ({ ...s })),
  requiresManualGrading: false,
  isActive: true,
  origin: 'seed',
  isNew: true,
};

(async () => {
  // ── Update 6D seed: replace flat q10a..q12b with parents + keep children flat as inactive copies
  const seedPath = path.resolve('src/constants/seedYear12aCh6DQuestions.js');
  delete require.cache[require.resolve(seedPath)];
  let list = require(seedPath).Y12A_CH6D_QUESTIONS || require(seedPath).default;

  const partMap = {
    'y12a-6d-q10a': { ...q10a, isActive: true }, // also store flat active for bank browse? Prefer parent multi only
    'y12a-6d-q10b': { ...q10b, isActive: true },
    'y12a-6d-q11a': { ...q11a, isActive: true },
    'y12a-6d-q11b': { ...q11b, isActive: true },
    'y12a-6d-q12a': { ...q12a, isActive: true },
    'y12a-6d-q12b': { ...q12b, isActive: true },
  };

  // For multiparts: children inactive flat, parents active
  for (const k of Object.keys(partMap)) {
    partMap[k].isActive = false;
    partMap[k].topicId = 'y12a-6D';
    partMap[k].chapterId = 'y12a-6';
  }

  list = list.filter(
    (q) =>
      !['y12a-6d-q10', 'y12a-6d-q11', 'y12a-6d-q12'].includes(q.id) &&
      !Object.keys(partMap).includes(q.id)
  );

  // Insert parents then inactive children near end of related section — append parents first then children
  list.push(parent10, parent11, parent12, ...Object.values(partMap));

  writeFileSync(
    seedPath,
    'export const Y12A_CH6D_QUESTIONS = ' +
      JSON.stringify(list, null, 2) +
      ';\n\nexport default Y12A_CH6D_QUESTIONS;\n'
  );
  console.log('6D seed count', list.length);

  // ── Update Ascham seed parts
  const ascPath = path.resolve('src/constants/seedAscham2020Questions.js');
  delete require.cache[require.resolve(ascPath)];
  // file may export array differently
  let ascRaw = readFileSync(ascPath, 'utf8');
  // safer: require
  const ascMod = require(ascPath);
  const ascList = ascMod.ASCHAM_2020_QUESTIONS || ascMod.default || ascMod.Y12A_ASCHAM || null;
  if (!ascList) {
    console.warn('Ascham export keys', Object.keys(ascMod));
  }

  // Push FS for all
  const toWrite = [
    parent10,
    parent11,
    parent12,
    ...Object.values(partMap),
    parent34,
    { ...a34a, isActive: false },
    { ...a34b, isActive: false },
    { ...a34c, isActive: false },
  ];

  // Deactivate broken variant
  toWrite.push({
    id: 'asc2020-q34v',
    isActive: false,
    isNew: true,
    origin: 'seed',
  });

  let batch = db.batch();
  let ops = 0;
  for (const q of toWrite) {
    const { id, ...data } = q;
    batch.set(
      db.collection('questions').doc(id),
      { ...data, id, updatedAt: FieldValue.serverTimestamp() },
      { merge: true }
    );
    ops++;
    if (ops >= 400) {
      await batch.commit();
      batch = db.batch();
      ops = 0;
    }
    console.log('OK', id, q.type || 'patch');
  }
  if (ops) await batch.commit();

  // Patch Ascham seed file for a/b/c and parent if present
  if (Array.isArray(ascList)) {
    const byId = Object.fromEntries(ascList.map((q, i) => [q.id, i]));
    const upsert = (doc) => {
      if (byId[doc.id] != null) ascList[byId[doc.id]] = { ...ascList[byId[doc.id]], ...doc };
      else ascList.push(doc);
    };
    upsert(parent34);
    upsert({ ...a34a, isActive: false });
    upsert({ ...a34b, isActive: false });
    upsert({ ...a34c, isActive: false });
    if (byId['asc2020-q34v'] != null) {
      ascList[byId['asc2020-q34v']].isActive = false;
      ascList[byId['asc2020-q34v']].isNew = true;
    }
    // detect export name
    const exportName =
      ascRaw.match(/export const (\w+)\s*=/)?.[1] || 'ASCHAM_2020_QUESTIONS';
    writeFileSync(
      ascPath,
      `export const ${exportName} = ` +
        JSON.stringify(ascList, null, 2) +
        `;\n\nexport default ${exportName};\n`
    );
    console.log('Ascham seed updated', exportName, ascList.length);
  }

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

  // previews
  for (const id of ['y12a-6d-q10', 'y12a-6d-q12b', 'asc2020-q34', 'asc2020-q34-b']) {
    const d = (await db.collection('questions').doc(id).get()).data();
    console.log(
      '\n',
      id,
      'type',
      d.type,
      'subs',
      d.subQuestions?.length,
      'active',
      d.isActive
    );
    if (d.subQuestions?.[0]) {
      console.log(
        '  first sub',
        d.subQuestions[0].id,
        d.subQuestions[0].type,
        'steps',
        d.subQuestions[0].solutionSteps?.length
      );
    }
    if (d.solutionSteps?.[0]) {
      console.log('  step1', d.solutionSteps[0].explanation?.slice(0, 100));
    }
  }
  console.log('version', ver);
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
