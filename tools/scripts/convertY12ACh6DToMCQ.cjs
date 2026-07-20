/**
 * Rebuild Y12A 6D "Integrating the trigonometric functions":
 *  - All numeric/indefinite/definite items → multiple_choice
 *  - Clean LaTeX opts (no --sin, broken frac, finance templates)
 *  - Detailed English solutionSteps (Why / What / common slip)
 *  - Natural option order; answer = String(a); isNew; origin seed
 *
 *   node tools/scripts/convertY12ACh6DToMCQ.cjs
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

const TOPIC = {
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
  isActive: true,
  requiresManualGrading: false,
  graphData: null,
  subQuestions: [],
  blanks: [],
  questionImage: '',
  examPaper: '',
};

function S(explanation, workingOut) {
  return { explanation, workingOut, graphData: null };
}

function mc(id, question, opts, a, steps, extra = {}) {
  if (!Array.isArray(opts) || opts.length !== 4) {
    throw new Error(`${id}: need 4 opts, got ${opts?.length}`);
  }
  if (!(Number.isInteger(a) && a >= 0 && a <= 3)) {
    throw new Error(`${id}: a must be 0–3, got ${a}`);
  }
  const correct = opts[a];
  return {
    id,
    ...TOPIC,
    type: 'multiple_choice',
    difficulty: extra.difficulty || 'easy',
    timeLimit: extra.timeLimit || 90,
    title: question.replace(/\\\(|\\\)/g, '').slice(0, 60) + '…',
    question,
    opts,
    options: opts.map((text) => ({ text, imageUrl: null })),
    a,
    answer: String(a),
    hint: extra.hint || 'Find an antiderivative, then simplify (add \\(+C\\) if indefinite).',
    solution: `The correct answer is ${correct}.`,
    solutionSteps: steps,
  };
}

/** Standard indefinite integral of k * f(ax+b) style helpers */
function stepsIndef(given, standard, work, result, slips) {
  return [
    S(
      `Given: ${given}. Why start with a standard antiderivative? Integration reverses differentiation of the basic trig forms. What we use is ${standard}. A common slip is treating this as differentiation.`,
      given.includes('\\int') ? given : `\\(${given}\\)`
    ),
    S(
      `Apply the rule carefully. ${work} Why the coefficient? If the argument is a linear function of \\(x\\), divide by the inner derivative (chain rule in reverse). ${slips || 'A common slip is forgetting the constant of integration or the chain-rule factor.'}`,
      result.includes('+ C') || result.includes('+C')
        ? result.startsWith('\\(')
          ? result
          : `\\(${result}\\)`
        : `\\(${result}\\)`
    ),
    S(
      `Check by differentiating the answer: the derivative should recover the integrand. This connects the antiderivative to the original integral.`,
      result.startsWith('\\(') ? result : `\\(${result}\\)`
    ),
    S(
      `Final answer: ${result.startsWith('\\(') ? result : `\\(${result}\\)`}. Include \\(+C\\) for indefinite integrals.`,
      result.startsWith('\\(') ? result : `\\(${result}\\)`
    ),
  ];
}

function stepsDef(integrand, F, lower, upper, Flower, Fupper, value, slip) {
  return [
    S(
      `Given the definite integral of ${integrand} from ${lower} to ${upper}. Why an antiderivative first? The fundamental theorem says \\(\\int_{a}^{b} f = F(b)-F(a)\\) for continuous \\(f\\) on \\([a,b]\\).`,
      `\\(\\int_{${lower}}^{${upper}} ${integrand}\\,dx\\)`
    ),
    S(
      `Find an antiderivative: \\(F(x) = ${F}\\). ${slip || 'A common slip is evaluating the integrand at the endpoints instead of the antiderivative.'}`,
      `\\(F(x) = ${F}\\)`
    ),
    S(
      `Evaluate: \\(F(${upper}) - F(${lower}) = (${Fupper}) - (${Flower})\\). Simplify carefully (exact values preferred).`,
      `\\(F(${upper})-F(${lower}) = ${value}\\)`
    ),
    S(`Final answer: \\(${value}\\).`, `\\(${value}\\)`),
  ];
}

// ── Build all questions ───────────────────────────────────────────────

function buildAll() {
  const Q = [];

  // ── Q1 indefinite basic ────────────────────────────────────────────
  Q.push(
    mc(
      'y12a-6d-q1a',
      'Find the indefinite integral: \\( \\int \\sec^{2} x \\,dx \\).',
      ['\\(\\sin x + C\\)', '\\(\\tan x\\)', '\\(\\tan x + C\\)', '\\(\\sec x + C\\)'],
      2,
      stepsIndef(
        '\\(\\int\\sec^{2}x\\,dx\\)',
        'the reverse of \\(\\dfrac{d}{dx}\\tan x = \\sec^{2}x\\)',
        'So \\(\\int\\sec^{2}x\\,dx = \\tan x + C\\).',
        '\\(\\tan x + C\\)',
        'A common slip is omitting \\(+C\\) or writing \\(\\sin x\\).'
      ),
      { hint: 'Derivative of \\(\\tan x\\) is \\(\\sec^{2}x\\).' }
    )
  );

  Q.push(
    mc(
      'y12a-6d-q1b',
      'Find the indefinite integral: \\( \\int \\cos x \\,dx \\).',
      ['\\(-\\sin x + C\\)', '\\(\\sin x\\)', '\\(\\sin x + C\\)', '\\(\\cos x + C\\)'],
      2,
      stepsIndef(
        '\\(\\int\\cos x\\,dx\\)',
        '\\(\\dfrac{d}{dx}\\sin x = \\cos x\\)',
        'So \\(\\int\\cos x\\,dx = \\sin x + C\\).',
        '\\(\\sin x + C\\)'
      )
    )
  );

  Q.push(
    mc(
      'y12a-6d-q1c',
      'Find the indefinite integral: \\( \\int \\sin x \\,dx \\).',
      ['\\(\\cos x + C\\)', '\\(-\\cos x + C\\)', '\\(-\\sin x + C\\)', '\\(\\sin x + C\\)'],
      1,
      stepsIndef(
        '\\(\\int\\sin x\\,dx\\)',
        '\\(\\dfrac{d}{dx}(-\\cos x) = \\sin x\\)',
        'So \\(\\int\\sin x\\,dx = -\\cos x + C\\).',
        '\\(-\\cos x + C\\)',
        'A common slip is dropping the minus sign.'
      )
    )
  );

  Q.push(
    mc(
      'y12a-6d-q1d',
      'Find the indefinite integral: \\( \\int -\\sin x \\,dx \\).',
      ['\\(-\\cos x + C\\)', '\\(\\cos x\\)', '\\(\\cos x + C\\)', '\\(\\sin x + C\\)'],
      2,
      stepsIndef(
        '\\(\\int-\\sin x\\,dx\\)',
        'factor out the constant \\(-1\\), or note \\(\\dfrac{d}{dx}\\cos x = -\\sin x\\)',
        '\\(\\int-\\sin x\\,dx = \\cos x + C\\).',
        '\\(\\cos x + C\\)'
      )
    )
  );

  Q.push(
    mc(
      'y12a-6d-q1e',
      'Find the indefinite integral: \\( \\int 2\\cos x \\,dx \\).',
      ['\\(-2\\sin x + C\\)', '\\(2\\cos x + C\\)', '\\(2\\sin x\\)', '\\(2\\sin x + C\\)'],
      3,
      stepsIndef(
        '\\(\\int 2\\cos x\\,dx\\)',
        'constants factor out: \\(2\\int\\cos x\\,dx\\)',
        '\\(2\\sin x + C\\).',
        '\\(2\\sin x + C\\)'
      )
    )
  );

  Q.push(
    mc(
      'y12a-6d-q1f',
      'Find the indefinite integral: \\( \\int \\cos 2x \\,dx \\).',
      [
        '\\(-\\dfrac{1}{2}\\sin 2x + C\\)',
        '\\(2\\sin 2x + C\\)',
        '\\(\\dfrac{1}{2}\\sin 2x + C\\)',
        '\\(\\sin 2x + C\\)',
      ],
      2,
      stepsIndef(
        '\\(\\int\\cos 2x\\,dx\\)',
        'chain rule reverse: if \\(u=2x\\) then \\(du=2\\,dx\\)',
        '\\(\\int\\cos 2x\\,dx = \\dfrac{1}{2}\\sin 2x + C\\).',
        '\\(\\dfrac{1}{2}\\sin 2x + C\\)',
        'A common slip is forgetting to divide by 2.'
      ),
      { hint: 'Inner derivative of \\(2x\\) is 2; divide by 2.' }
    )
  );

  Q.push(
    mc(
      'y12a-6d-q1g',
      'Find the indefinite integral: \\( \\int \\dfrac{1}{2}\\cos x \\,dx \\).',
      [
        '\\(-\\dfrac{1}{2}\\sin x + C\\)',
        '\\(2\\sin x + C\\)',
        '\\(\\dfrac{1}{2}\\sin x + C\\)',
        '\\(\\sin x + C\\)',
      ],
      2,
      stepsIndef(
        '\\(\\int\\dfrac{1}{2}\\cos x\\,dx\\)',
        'constant factor \\(\\dfrac{1}{2}\\)',
        '\\(\\dfrac{1}{2}\\sin x + C\\).',
        '\\(\\dfrac{1}{2}\\sin x + C\\)'
      )
    )
  );

  Q.push(
    mc(
      'y12a-6d-q1h',
      'Find the indefinite integral: \\( \\int \\cos\\dfrac{x}{2} \\,dx \\).',
      [
        '\\(-2\\sin\\dfrac{x}{2} + C\\)',
        '\\(\\dfrac{1}{2}\\sin\\dfrac{x}{2} + C\\)',
        '\\(2\\sin\\dfrac{x}{2} + C\\)',
        '\\(\\sin\\dfrac{x}{2} + C\\)',
      ],
      2,
      stepsIndef(
        '\\(\\int\\cos\\dfrac{x}{2}\\,dx\\)',
        'inner derivative of \\(\\dfrac{x}{2}\\) is \\(\\dfrac{1}{2}\\)',
        'Multiply by 2: \\(2\\sin\\dfrac{x}{2} + C\\).',
        '\\(2\\sin\\dfrac{x}{2} + C\\)'
      )
    )
  );

  Q.push(
    mc(
      'y12a-6d-q1i',
      'Find the indefinite integral: \\( \\int \\sin 2x \\,dx \\).',
      [
        '\\(\\dfrac{1}{2}\\cos 2x + C\\)',
        '\\(-\\dfrac{1}{2}\\cos 2x + C\\)',
        '\\(-\\dfrac{1}{2}\\sin 2x + C\\)',
        '\\(-2\\cos 2x + C\\)',
      ],
      1,
      stepsIndef(
        '\\(\\int\\sin 2x\\,dx\\)',
        '\\(\\int\\sin u\\,du = -\\cos u\\) with \\(u=2x\\)',
        '\\(-\\dfrac{1}{2}\\cos 2x + C\\).',
        '\\(-\\dfrac{1}{2}\\cos 2x + C\\)'
      )
    )
  );

  Q.push(
    mc(
      'y12a-6d-q1j',
      'Find the indefinite integral: \\( \\int \\sec^{2} 5x \\,dx \\).',
      [
        '\\(-\\dfrac{1}{5}\\tan 5x + C\\)',
        '\\(\\dfrac{1}{5}\\sin 5x + C\\)',
        '\\(\\dfrac{1}{5}\\tan 5x + C\\)',
        '\\(5\\tan 5x + C\\)',
      ],
      2,
      stepsIndef(
        '\\(\\int\\sec^{2}5x\\,dx\\)',
        '\\(\\int\\sec^{2}u\\,du=\\tan u\\), \\(u=5x\\)',
        '\\(\\dfrac{1}{5}\\tan 5x + C\\).',
        '\\(\\dfrac{1}{5}\\tan 5x + C\\)'
      )
    )
  );

  Q.push(
    mc(
      'y12a-6d-q1k',
      'Find the indefinite integral: \\( \\int \\cos 3x \\,dx \\).',
      [
        '\\(-\\dfrac{1}{3}\\sin 3x + C\\)',
        '\\(3\\sin 3x + C\\)',
        '\\(\\dfrac{1}{3}\\sin 3x + C\\)',
        '\\(\\sin 3x + C\\)',
      ],
      2,
      stepsIndef(
        '\\(\\int\\cos 3x\\,dx\\)',
        'divide by 3',
        '\\(\\dfrac{1}{3}\\sin 3x + C\\).',
        '\\(\\dfrac{1}{3}\\sin 3x + C\\)'
      )
    )
  );

  Q.push(
    mc(
      'y12a-6d-q1l',
      'Find the indefinite integral: \\( \\int \\sec^{2}\\dfrac{x}{3} \\,dx \\).',
      [
        '\\(-3\\tan\\dfrac{x}{3} + C\\)',
        '\\(3\\sin\\dfrac{x}{3} + C\\)',
        '\\(3\\tan\\dfrac{x}{3} + C\\)',
        '\\(\\dfrac{1}{3}\\tan\\dfrac{x}{3} + C\\)',
      ],
      2,
      stepsIndef(
        '\\(\\int\\sec^{2}\\dfrac{x}{3}\\,dx\\)',
        'inner derivative \\(\\dfrac{1}{3}\\); multiply by 3',
        '\\(3\\tan\\dfrac{x}{3} + C\\).',
        '\\(3\\tan\\dfrac{x}{3} + C\\)'
      )
    )
  );

  Q.push(
    mc(
      'y12a-6d-q1m',
      'Find the indefinite integral: \\( \\int \\sin\\dfrac{x}{2} \\,dx \\).',
      [
        '\\(2\\cos\\dfrac{x}{2} + C\\)',
        '\\(-\\dfrac{1}{2}\\cos\\dfrac{x}{2} + C\\)',
        '\\(-2\\cos x + C\\)',
        '\\(-2\\cos\\dfrac{x}{2} + C\\)',
      ],
      3,
      stepsIndef(
        '\\(\\int\\sin\\dfrac{x}{2}\\,dx\\)',
        '\\(\\int\\sin u\\,du=-\\cos u\\), \\(u=\\dfrac{x}{2}\\), factor 2',
        '\\(-2\\cos\\dfrac{x}{2} + C\\).',
        '\\(-2\\cos\\dfrac{x}{2} + C\\)'
      )
    )
  );

  Q.push(
    mc(
      'y12a-6d-q1n',
      'Find the indefinite integral: \\( \\int -\\cos\\dfrac{x}{5} \\,dx \\).',
      [
        '\\(5\\sin\\dfrac{x}{5} + C\\)',
        '\\(-\\dfrac{1}{5}\\sin\\dfrac{x}{5} + C\\)',
        '\\(-5\\sin\\dfrac{x}{5} + C\\)',
        '\\(-5\\sin 5x + C\\)',
      ],
      2,
      stepsIndef(
        '\\(\\int-\\cos\\dfrac{x}{5}\\,dx\\)',
        '\\(\\int\\cos\\dfrac{x}{5}\\,dx = 5\\sin\\dfrac{x}{5}\\), then multiply by \\(-1\\)',
        '\\(-5\\sin\\dfrac{x}{5} + C\\).',
        '\\(-5\\sin\\dfrac{x}{5} + C\\)'
      )
    )
  );

  Q.push(
    mc(
      'y12a-6d-q1o',
      'Find the indefinite integral: \\( \\int -4\\sin 2x \\,dx \\).',
      [
        '\\(-2\\cos 2x + C\\)',
        '\\(-8\\cos 2x + C\\)',
        '\\(2\\cos 2x + C\\)',
        '\\(2\\sin 2x + C\\)',
      ],
      2,
      stepsIndef(
        '\\(\\int-4\\sin 2x\\,dx\\)',
        '\\(\\int\\sin 2x\\,dx = -\\dfrac{1}{2}\\cos 2x\\), times \\(-4\\)',
        '\\((-4)\\left(-\\dfrac{1}{2}\\cos 2x\\right)+C = 2\\cos 2x + C\\).',
        '\\(2\\cos 2x + C\\)'
      )
    )
  );

  Q.push(
    mc(
      'y12a-6d-q1p',
      'Find the indefinite integral: \\( \\int \\dfrac{1}{4}\\sin\\dfrac{x}{4} \\,dx \\).',
      [
        '\\(\\cos\\dfrac{x}{4} + C\\)',
        '\\(-\\cos\\dfrac{x}{4} + C\\)',
        '\\(-4\\cos\\dfrac{x}{4} + C\\)',
        '\\(-\\sin\\dfrac{x}{4} + C\\)',
      ],
      1,
      stepsIndef(
        '\\(\\int\\dfrac{1}{4}\\sin\\dfrac{x}{4}\\,dx\\)',
        '\\(\\int\\sin\\dfrac{x}{4}\\,dx = -4\\cos\\dfrac{x}{4}\\), times \\(\\dfrac{1}{4}\\)',
        '\\(-\\cos\\dfrac{x}{4} + C\\).',
        '\\(-\\cos\\dfrac{x}{4} + C\\)'
      )
    )
  );

  Q.push(
    mc(
      'y12a-6d-q1q',
      'Find the indefinite integral: \\( \\int 12\\sec^{2}\\dfrac{x}{3} \\,dx \\).',
      [
        '\\(4\\tan\\dfrac{x}{3} + C\\)',
        '\\(36\\sin\\dfrac{x}{3} + C\\)',
        '\\(36\\tan\\dfrac{x}{3} + C\\)',
        '\\(4\\tan 3x + C\\)',
      ],
      2,
      stepsIndef(
        '\\(\\int 12\\sec^{2}\\dfrac{x}{3}\\,dx\\)',
        '\\(\\int\\sec^{2}\\dfrac{x}{3}\\,dx = 3\\tan\\dfrac{x}{3}\\), times 12',
        '\\(36\\tan\\dfrac{x}{3} + C\\).',
        '\\(36\\tan\\dfrac{x}{3} + C\\)'
      )
    )
  );

  Q.push(
    mc(
      'y12a-6d-q1r',
      'Find the indefinite integral: \\( \\int 2\\cos\\dfrac{x}{3} \\,dx \\).',
      [
        '\\(-6\\sin\\dfrac{x}{3} + C\\)',
        '\\(\\dfrac{2}{3}\\sin\\dfrac{x}{3} + C\\)',
        '\\(6\\sin x + C\\)',
        '\\(6\\sin\\dfrac{x}{3} + C\\)',
      ],
      3,
      stepsIndef(
        '\\(\\int 2\\cos\\dfrac{x}{3}\\,dx\\)',
        '\\(\\int\\cos\\dfrac{x}{3}\\,dx = 3\\sin\\dfrac{x}{3}\\), times 2',
        '\\(6\\sin\\dfrac{x}{3} + C\\).',
        '\\(6\\sin\\dfrac{x}{3} + C\\)'
      )
    )
  );

  // ── Q2 definite ────────────────────────────────────────────────────
  Q.push(
    mc(
      'y12a-6d-q2a',
      'Find the value of: \\( \\int_{0}^{\\frac{\\pi}{2}} \\cos x \\,dx \\).',
      ['\\(0\\)', '\\(1\\)', '\\(-1\\)', '\\(\\dfrac{\\pi}{2}\\)'],
      1,
      stepsDef(
        '\\cos x',
        '\\sin x',
        '0',
        '\\pi/2',
        '0',
        '1',
        '1',
        'A common slip is writing \\(\\cos\\dfrac{\\pi}{2}-\\cos 0\\) without integrating.'
      )
    )
  );

  Q.push(
    mc(
      'y12a-6d-q2b',
      'Find the value of: \\( \\int_{0}^{\\frac{\\pi}{6}} \\cos x \\,dx \\).',
      ['\\(0\\)', '\\(\\dfrac{1}{2}\\)', '\\(1\\)', '\\(\\dfrac{\\sqrt{3}}{2}\\)'],
      1,
      stepsDef('\\cos x', '\\sin x', '0', '\\pi/6', '0', '1/2', '\\dfrac{1}{2}')
    )
  );

  Q.push(
    mc(
      'y12a-6d-q2c',
      'Find the value of: \\( \\int_{0}^{\\frac{\\pi}{4}} \\sin x \\,dx \\).',
      [
        '\\(1 + \\dfrac{1}{\\sqrt{2}}\\)',
        '\\(1 - \\dfrac{1}{\\sqrt{2}}\\)',
        '\\(\\dfrac{1}{\\sqrt{2}}\\)',
        '\\(-\\dfrac{1}{\\sqrt{2}}\\)',
      ],
      1,
      stepsDef(
        '\\sin x',
        '-\\cos x',
        '0',
        '\\pi/4',
        '-1',
        '-1/\\sqrt{2}',
        '1-\\dfrac{1}{\\sqrt{2}}',
        'Remember the minus from the antiderivative of sine.'
      )
    )
  );

  Q.push(
    mc(
      'y12a-6d-q2d',
      'Find the value of: \\( \\int_{0}^{\\frac{\\pi}{3}} \\sec^{2} x \\,dx \\).',
      ['\\(\\sqrt{3}\\)', '\\(1\\)', '\\(\\dfrac{\\sqrt{3}}{3}\\)', '\\(2\\)'],
      0,
      stepsDef('\\sec^{2}x', '\\tan x', '0', '\\pi/3', '0', '\\sqrt{3}', '\\sqrt{3}')
    )
  );

  Q.push(
    mc(
      'y12a-6d-q2e',
      'Find the value of: \\( \\int_{0}^{\\frac{\\pi}{4}} 2\\cos 2x \\,dx \\).',
      ['\\(0\\)', '\\(1\\)', '\\(2\\)', '\\(\\dfrac{1}{2}\\)'],
      1,
      [
        S(
          'Given: \\(\\int_{0}^{\\pi/4} 2\\cos 2x\\,dx\\). Factor: \\(2\\int\\cos 2x\\,dx\\). Antiderivative of \\(\\cos 2x\\) is \\(\\dfrac{1}{2}\\sin 2x\\), so overall antiderivative is \\(\\sin 2x\\).',
          '\\(F(x)=\\sin 2x\\)'
        ),
        S(
          'Evaluate: \\(\\sin\\dfrac{\\pi}{2} - \\sin 0 = 1 - 0 = 1\\).',
          '\\(1\\)'
        ),
        S('Final answer: \\(1\\).', '\\(1\\)'),
        S('Check: the constant 2 cancels the chain factor \\(\\dfrac{1}{2}\\).', '\\(1\\)'),
      ]
    )
  );

  Q.push(
    mc(
      'y12a-6d-q2f',
      'Find the value of: \\( \\int_{0}^{\\frac{\\pi}{3}} \\sin 2x \\,dx \\).',
      ['\\(\\dfrac{1}{4}\\)', '\\(\\dfrac{1}{2}\\)', '\\(\\dfrac{3}{4}\\)', '\\(1\\)'],
      2,
      [
        S(
          'Antiderivative of \\(\\sin 2x\\) is \\(-\\dfrac{1}{2}\\cos 2x\\).',
          '\\(F(x)=-\\dfrac{1}{2}\\cos 2x\\)'
        ),
        S(
          'At limits: \\(-\\dfrac{1}{2}\\cos\\dfrac{2\\pi}{3} - \\left(-\\dfrac{1}{2}\\cos 0\\right) = -\\dfrac{1}{2}\\left(-\\dfrac{1}{2}\\right) + \\dfrac{1}{2}(1) = \\dfrac{1}{4}+\\dfrac{1}{2}=\\dfrac{3}{4}\\).',
          '\\(\\dfrac{3}{4}\\)'
        ),
        S('Final answer: \\(\\dfrac{3}{4}\\).', '\\(\\dfrac{3}{4}\\)'),
        S('A common slip uses \\(\\cos\\dfrac{\\pi}{3}\\) instead of \\(\\cos\\dfrac{2\\pi}{3}\\).', '\\(\\dfrac{3}{4}\\)'),
      ]
    )
  );

  Q.push(
    mc(
      'y12a-6d-q2g',
      'Find the value of: \\( \\int_{0}^{\\frac{\\pi}{2}} \\sec^{2}\\!\\left(\\dfrac{x}{2}\\right)\\,dx \\).',
      ['\\(0\\)', '\\(1\\)', '\\(2\\)', '\\(\\sqrt{3}\\)'],
      2,
      [
        S(
          'Antiderivative: \\(\\int\\sec^{2}\\dfrac{x}{2}\\,dx = 2\\tan\\dfrac{x}{2}\\).',
          '\\(F(x)=2\\tan\\dfrac{x}{2}\\)'
        ),
        S(
          'Evaluate: \\(2\\tan\\dfrac{\\pi}{4} - 2\\tan 0 = 2\\cdot 1 - 0 = 2\\).',
          '\\(2\\)'
        ),
        S('Final answer: \\(2\\).', '\\(2\\)'),
        S('Domain note: \\(\\sec\\dfrac{x}{2}\\) is continuous on \\([0,\\pi/2]\\).', '\\(2\\)'),
      ]
    )
  );

  Q.push(
    mc(
      'y12a-6d-q2h',
      'Find the value of: \\( \\int_{0}^{\\frac{\\pi}{3}} \\cos\\!\\left(\\dfrac{x}{2}\\right)\\,dx \\).',
      ['\\(0\\)', '\\(1\\)', '\\(2\\)', '\\(\\dfrac{1}{2}\\)'],
      1,
      [
        S(
          'Antiderivative: \\(2\\sin\\dfrac{x}{2}\\).',
          '\\(F(x)=2\\sin\\dfrac{x}{2}\\)'
        ),
        S(
          '\\(2\\sin\\dfrac{\\pi}{6} - 2\\sin 0 = 2\\cdot\\dfrac{1}{2} = 1\\).',
          '\\(1\\)'
        ),
        S('Final answer: \\(1\\).', '\\(1\\)'),
        S('Check: do not use \\(\\sin\\dfrac{\\pi}{3}\\) without the half-angle argument.', '\\(1\\)'),
      ]
    )
  );

  Q.push(
    mc(
      'y12a-6d-q2i',
      'Find the value of: \\( \\int_{0}^{\\pi} (2\\sin x - \\sin 2x)\\,dx \\).',
      ['\\(0\\)', '\\(2\\)', '\\(4\\)', '\\(1\\)'],
      2,
      [
        S(
          'Integrate term by term: antiderivative \\(-2\\cos x + \\dfrac{1}{2}\\cos 2x\\).',
          '\\(F(x)=-2\\cos x + \\dfrac{1}{2}\\cos 2x\\)'
        ),
        S(
          'At \\(\\pi\\): \\(-2(-1)+\\dfrac{1}{2}(1)=2+\\dfrac{1}{2}=\\dfrac{5}{2}\\). At 0: \\(-2(1)+\\dfrac{1}{2}(1)=-2+\\dfrac{1}{2}=-\\dfrac{3}{2}\\).',
          '\\(F(\\pi)=\\dfrac{5}{2},\\ F(0)=-\\dfrac{3}{2}\\)'
        ),
        S(
          'Difference: \\(\\dfrac{5}{2}-\\left(-\\dfrac{3}{2}\\right)=4\\).',
          '\\(4\\)'
        ),
        S('Final answer: \\(4\\).', '\\(4\\)'),
      ],
      { difficulty: 'medium', timeLimit: 120 }
    )
  );

  // ── Q3 curves from gradient ────────────────────────────────────────
  Q.push(
    mc(
      'y12a-6d-q3a_i',
      'The gradient function of a certain curve is \\(\\dfrac{dy}{dx}=\\sin x\\). If the curve passes through the origin, find its equation.',
      [
        '\\(y = 1 + \\cos x\\)',
        '\\(y = 1 - \\cos x\\)',
        '\\(y = -\\cos x\\)',
        '\\(y = \\sin x\\)',
      ],
      1,
      [
        S(
          'Integrate the gradient: \\(y = \\int\\sin x\\,dx = -\\cos x + C\\). Why \\(+C\\)? The family of antiderivatives differs by a constant.',
          '\\(y=-\\cos x + C\\)'
        ),
        S(
          'Through the origin \\((0,0)\\): \\(0 = -\\cos 0 + C = -1 + C\\), so \\(C=1\\).',
          '\\(C=1\\)'
        ),
        S('Equation: \\(y = -\\cos x + 1 = 1 - \\cos x\\).', '\\(y=1-\\cos x\\)'),
        S('Final answer: \\(y=1-\\cos x\\).', '\\(y=1-\\cos x\\)'),
      ],
      { difficulty: 'medium', hint: 'Integrate, then use the point to find \\(C\\).' }
    )
  );

  Q.push(
    mc(
      'y12a-6d-q3a_ii',
      'The gradient function is \\(\\dfrac{dy}{dx}=\\sin x\\). If the curve passes through \\(\\left(\\dfrac{\\pi}{2},\\,3\\right)\\), find its equation.',
      [
        '\\(y = 2 - \\cos x\\)',
        '\\(y = 3 - \\cos x\\)',
        '\\(y = 3 + \\cos x\\)',
        '\\(y = -\\cos x\\)',
      ],
      1,
      [
        S('Again \\(y=-\\cos x + C\\).', '\\(y=-\\cos x + C\\)'),
        S(
          'At \\(\\left(\\dfrac{\\pi}{2},3\\right)\\): \\(3=-\\cos\\dfrac{\\pi}{2}+C=0+C\\), so \\(C=3\\).',
          '\\(C=3\\)'
        ),
        S('\\(y=3-\\cos x\\).', '\\(y=3-\\cos x\\)'),
        S('Final answer: \\(y=3-\\cos x\\).', '\\(y=3-\\cos x\\)'),
      ],
      { difficulty: 'medium' }
    )
  );

  Q.push(
    mc(
      'y12a-6d-q3a_iii',
      'What translation moves the curve \\(y=1-\\cos x\\) (part i) to the curve \\(y=3-\\cos x\\) (part ii)?',
      [
        'Translation 2 units to the right',
        'Translation 2 units upwards',
        'Translation 2 units downwards',
        'Translation 2 units to the left',
      ],
      1,
      [
        S(
          'Compare: \\(y=3-\\cos x = (1-\\cos x)+2\\). The graph is the same shape shifted vertically by 2.',
          '\\(y_{\\text{ii}} = y_{\\text{i}} + 2\\)'
        ),
        S(
          'A vertical shift of \\(+2\\) is a translation 2 units upwards. Horizontal shifts would change the argument of cos.',
          '\\(+2\\ \\text{vertically}\\)'
        ),
        S('Final answer: translation 2 units upwards.', '\\text{2 units up}'),
        S('Check: at \\(x=0\\), part i has \\(y=0\\) and part ii has \\(y=2\\).', '\\text{2 units up}'),
      ],
      { difficulty: 'easy', hint: 'Compare the constants in the two equations.' }
    )
  );

  Q.push(
    mc(
      'y12a-6d-q3b',
      'A curve passing through the origin has gradient function \\(y\'=\\cos x - 2\\sin 2x\\). Find its equation.',
      [
        '\\(y = \\sin x - \\cos 2x\\)',
        '\\(y = \\sin x + \\cos 2x - 1\\)',
        '\\(y = \\sin x + \\cos 2x\\)',
        '\\(y = \\sin x - 2\\cos 2x\\)',
      ],
      1,
      [
        S(
          'Integrate: \\(\\int\\cos x\\,dx=\\sin x\\), \\(\\int-2\\sin 2x\\,dx = -2\\left(-\\dfrac{1}{2}\\cos 2x\\right)=\\cos 2x\\). So \\(y=\\sin x + \\cos 2x + C\\).',
          '\\(y=\\sin x + \\cos 2x + C\\)'
        ),
        S(
          'Through origin: \\(0=\\sin 0 + \\cos 0 + C = 0+1+C\\), so \\(C=-1\\).',
          '\\(C=-1\\)'
        ),
        S('\\(y=\\sin x + \\cos 2x - 1\\).', '\\(y=\\sin x+\\cos 2x-1\\)'),
        S('Final answer: \\(y=\\sin x + \\cos 2x - 1\\).', '\\(y=\\sin x+\\cos 2x-1\\)'),
      ],
      { difficulty: 'medium', timeLimit: 120 }
    )
  );

  Q.push(
    mc(
      'y12a-6d-q3c',
      'If \\(\\dfrac{dy}{dx}=\\sin x + \\cos x\\) and \\(y=-2\\) when \\(x=\\pi\\), find \\(y\\) as a function of \\(x\\).',
      [
        '\\(y = -\\cos x + \\sin x\\)',
        '\\(y = -\\cos x + \\sin x - 3\\)',
        '\\(y = -\\cos x + \\sin x + 3\\)',
        '\\(y = \\cos x + \\sin x - 3\\)',
      ],
      1,
      [
        S(
          'Integrate: \\(y=-\\cos x + \\sin x + C\\).',
          '\\(y=-\\cos x+\\sin x+C\\)'
        ),
        S(
          'At \\(x=\\pi\\), \\(y=-2\\): \\(-2=-\\cos\\pi + \\sin\\pi + C = -(-1)+0+C=1+C\\), so \\(C=-3\\).',
          '\\(C=-3\\)'
        ),
        S('\\(y=-\\cos x + \\sin x - 3\\).', '\\(y=-\\cos x+\\sin x-3\\)'),
        S('Final answer: \\(y=-\\cos x + \\sin x - 3\\).', '\\(y=-\\cos x+\\sin x-3\\)'),
      ],
      { difficulty: 'medium' }
    )
  );

  // ── Q6 composite linear arguments ──────────────────────────────────
  const q6 = [
    [
      'y12a-6d-q6a',
      '\\( \\int \\cos(x+2)\\,dx \\)',
      ['\\(-\\sin(x+2)+C\\)', '\\(\\sin(x+2)\\)', '\\(\\sin(x+2)+C\\)', '\\(\\cos(x+2)+C\\)'],
      2,
      '\\(\\sin(x+2)+C\\)',
      'inner derivative 1',
    ],
    [
      'y12a-6d-q6b',
      '\\( \\int \\cos(2x+1)\\,dx \\)',
      [
        '\\(-\\dfrac{1}{2}\\sin(2x+1)+C\\)',
        '\\(2\\sin(2x+1)+C\\)',
        '\\(\\dfrac{1}{2}\\sin(2x+1)+C\\)',
        '\\(\\sin(2x+1)+C\\)',
      ],
      2,
      '\\(\\dfrac{1}{2}\\sin(2x+1)+C\\)',
      'divide by 2',
    ],
    [
      'y12a-6d-q6c',
      '\\( \\int \\sin(x+2)\\,dx \\)',
      ['\\(\\cos(x+2)+C\\)', '\\(-\\cos(x+2)+C\\)', '\\(-\\sin(x+2)+C\\)', '\\(\\sin(x+2)+C\\)'],
      1,
      '\\(-\\cos(x+2)+C\\)',
      'minus from sine',
    ],
    [
      'y12a-6d-q6d',
      '\\( \\int \\sin(2x+1)\\,dx \\)',
      [
        '\\(\\dfrac{1}{2}\\cos(2x+1)+C\\)',
        '\\(-\\dfrac{1}{2}\\cos(2x+1)+C\\)',
        '\\(-\\dfrac{1}{2}\\sin(2x+1)+C\\)',
        '\\(-2\\cos(2x+1)+C\\)',
      ],
      1,
      '\\(-\\dfrac{1}{2}\\cos(2x+1)+C\\)',
      'factor \\(-1/2\\)',
    ],
    [
      'y12a-6d-q6e',
      '\\( \\int \\cos(3x-2)\\,dx \\)',
      [
        '\\(-\\dfrac{1}{3}\\sin(3x-2)+C\\)',
        '\\(3\\sin(3x-2)+C\\)',
        '\\(\\dfrac{1}{3}\\sin(3x-2)+C\\)',
        '\\(\\sin(3x-2)+C\\)',
      ],
      2,
      '\\(\\dfrac{1}{3}\\sin(3x-2)+C\\)',
      'divide by 3',
    ],
    [
      'y12a-6d-q6f',
      '\\( \\int \\sin(7-5x)\\,dx \\)',
      [
        '\\(-\\dfrac{1}{5}\\cos(7-5x)+C\\)',
        '\\(\\dfrac{1}{5}\\cos(7-5x)+C\\)',
        '\\(\\dfrac{1}{5}\\sin(7-5x)+C\\)',
        '\\(-5\\cos(7-5x)+C\\)',
      ],
      1,
      '\\(\\dfrac{1}{5}\\cos(7-5x)+C\\)',
      'inner derivative is \\(-5\\); \\(\\int\\sin u\\,du=-\\cos u\\) and divide by \\(-5\\) gives \\(+\\dfrac{1}{5}\\cos u\\)',
    ],
    [
      'y12a-6d-q6g',
      '\\( \\int \\sec^{2}(4-x)\\,dx \\)',
      [
        '\\(-\\sin(4-x)+C\\)',
        '\\(\\tan(4-x)+C\\)',
        '\\(-\\tan(4-x)+C\\)',
        '\\(\\sec(4-x)+C\\)',
      ],
      2,
      '\\(-\\tan(4-x)+C\\)',
      'inner derivative \\(-1\\) introduces a minus',
    ],
    [
      'y12a-6d-q6h',
      '\\( \\int \\sec^{2}\\!\\left(1-\\dfrac{x}{3}\\right)\\,dx \\)',
      [
        '\\(3\\tan\\!\\left(1-\\dfrac{x}{3}\\right)+C\\)',
        '\\(-\\dfrac{1}{3}\\tan\\!\\left(1-\\dfrac{x}{3}\\right)+C\\)',
        '\\(\\tan\\!\\left(1-\\dfrac{x}{3}\\right)+C\\)',
        '\\(-3\\tan\\!\\left(1-\\dfrac{x}{3}\\right)+C\\)',
      ],
      3,
      '\\(-3\\tan\\!\\left(1-\\dfrac{x}{3}\\right)+C\\)',
      'inner derivative \\(-1/3\\); divide by \\(-1/3\\) multiplies by \\(-3\\)',
    ],
    [
      'y12a-6d-q6i',
      '\\( \\int \\sin\\!\\left(1-\\dfrac{x}{3}\\right)\\,dx \\)',
      [
        '\\(-3\\cos\\!\\left(1-\\dfrac{x}{3}\\right)+C\\)',
        '\\(-\\dfrac{1}{3}\\cos\\!\\left(1-\\dfrac{x}{3}\\right)+C\\)',
        '\\(\\dfrac{1}{3}\\cos\\!\\left(1-\\dfrac{x}{3}\\right)+C\\)',
        '\\(3\\cos\\!\\left(1-\\dfrac{x}{3}\\right)+C\\)',
      ],
      3,
      '\\(3\\cos\\!\\left(1-\\dfrac{x}{3}\\right)+C\\)',
      '\\(\\int\\sin u\\,du=-\\cos u\\) and divide by \\(-1/3\\) gives \\(+3\\cos u\\)',
    ],
  ];
  for (const [id, qstem, opts, a, result, note] of q6) {
    Q.push(
      mc(
        id,
        `Find the indefinite integral: ${qstem}.`,
        opts,
        a,
        stepsIndef(qstem, `chain-rule reverse (${note})`, `Obtain ${result}.`, result),
        { difficulty: 'medium' }
      )
    );
  }

  // ── Q7 sums ────────────────────────────────────────────────────────
  Q.push(
    mc(
      'y12a-6d-q7a',
      'Find \\( \\int\\!\\left(6\\cos 3x - 4\\sin\\dfrac{x}{2}\\right)\\,dx \\).',
      [
        '\\(-2\\sin 3x + 8\\cos\\dfrac{x}{2} + C\\)',
        '\\(2\\sin 3x + 8\\cos\\dfrac{x}{2} + C\\)',
        '\\(2\\sin 3x - 8\\cos\\dfrac{x}{2} + C\\)',
        '\\(2\\sin 3x + 8\\sin\\dfrac{x}{2} + C\\)',
      ],
      1,
      [
        S(
          'Integrate term by term. \\(\\int 6\\cos 3x\\,dx = 6\\cdot\\dfrac{1}{3}\\sin 3x = 2\\sin 3x\\).',
          '\\(2\\sin 3x\\)'
        ),
        S(
          '\\(\\int -4\\sin\\dfrac{x}{2}\\,dx = -4\\cdot\\left(-2\\cos\\dfrac{x}{2}\\right) = 8\\cos\\dfrac{x}{2}\\).',
          '\\(8\\cos\\dfrac{x}{2}\\)'
        ),
        S(
          'Combine with \\(+C\\): \\(2\\sin 3x + 8\\cos\\dfrac{x}{2} + C\\).',
          '\\(2\\sin 3x + 8\\cos\\dfrac{x}{2} + C\\)'
        ),
        S('Final answer as above.', '\\(2\\sin 3x + 8\\cos\\dfrac{x}{2} + C\\)'),
      ],
      { difficulty: 'medium', timeLimit: 120 }
    )
  );

  Q.push(
    mc(
      'y12a-6d-q7b',
      'Find \\( \\int\\!\\left(8\\sec^{2} 2x - 10\\cos\\dfrac{x}{4} + 12\\sin\\dfrac{x}{3}\\right)\\,dx \\).',
      [
        '\\(4\\tan 2x - 40\\sin\\dfrac{x}{4} + 36\\cos\\dfrac{x}{3} + C\\)',
        '\\(4\\tan 2x - 40\\sin\\dfrac{x}{4} - 36\\cos\\dfrac{x}{3} + C\\)',
        '\\(4\\tan 2x + 40\\sin\\dfrac{x}{4} - 36\\cos\\dfrac{x}{3} + C\\)',
        '\\(16\\tan 2x - 40\\sin\\dfrac{x}{4} - 36\\cos\\dfrac{x}{3} + C\\)',
      ],
      1,
      [
        S(
          '\\(\\int 8\\sec^{2}2x\\,dx = 8\\cdot\\dfrac{1}{2}\\tan 2x = 4\\tan 2x\\).',
          '\\(4\\tan 2x\\)'
        ),
        S(
          '\\(\\int -10\\cos\\dfrac{x}{4}\\,dx = -10\\cdot 4\\sin\\dfrac{x}{4} = -40\\sin\\dfrac{x}{4}\\).',
          '\\(-40\\sin\\dfrac{x}{4}\\)'
        ),
        S(
          '\\(\\int 12\\sin\\dfrac{x}{3}\\,dx = 12\\cdot\\left(-3\\cos\\dfrac{x}{3}\\right) = -36\\cos\\dfrac{x}{3}\\).',
          '\\(-36\\cos\\dfrac{x}{3}\\)'
        ),
        S(
          'Sum: \\(4\\tan 2x - 40\\sin\\dfrac{x}{4} - 36\\cos\\dfrac{x}{3} + C\\).',
          '\\(4\\tan 2x - 40\\sin\\dfrac{x}{4} - 36\\cos\\dfrac{x}{3} + C\\)'
        ),
      ],
      { difficulty: 'hard', timeLimit: 150 }
    )
  );

  // ── Q8 IVP ─────────────────────────────────────────────────────────
  Q.push(
    mc(
      'y12a-6d-q8a_1',
      'If \\(f\'(x)=\\pi\\cos\\pi x\\) and \\(f(0)=0\\), find \\(f(x)\\).',
      ['\\(-\\sin\\pi x\\)', '\\(\\cos\\pi x\\)', '\\(\\sin\\pi x\\)', '\\(\\pi\\sin\\pi x\\)'],
      2,
      [
        S(
          'Integrate: \\(\\int\\pi\\cos\\pi x\\,dx = \\pi\\cdot\\dfrac{1}{\\pi}\\sin\\pi x = \\sin\\pi x + C\\).',
          '\\(f(x)=\\sin\\pi x + C\\)'
        ),
        S('\\(f(0)=0\\): \\(\\sin 0 + C = 0\\) so \\(C=0\\).', '\\(C=0\\)'),
        S('\\(f(x)=\\sin\\pi x\\).', '\\(f(x)=\\sin\\pi x\\)'),
        S('Final answer: \\(\\sin\\pi x\\).', '\\(\\sin\\pi x\\)'),
      ]
    )
  );

  Q.push(
    mc(
      'y12a-6d-q8a_2',
      'If \\(f\'(x)=\\pi\\cos\\pi x\\) and \\(f(0)=0\\), find \\(f\\!\\left(\\dfrac{1}{3}\\right)\\).',
      ['\\(-\\dfrac{\\sqrt{3}}{2}\\)', '\\(\\dfrac{\\sqrt{3}}{2}\\)', '\\(\\dfrac{1}{2}\\)', '\\(1\\)'],
      1,
      [
        S('From part (i), \\(f(x)=\\sin\\pi x\\).', '\\(f(x)=\\sin\\pi x\\)'),
        S(
          '\\(f\\!\\left(\\dfrac{1}{3}\\right)=\\sin\\dfrac{\\pi}{3}=\\dfrac{\\sqrt{3}}{2}\\).',
          '\\(\\dfrac{\\sqrt{3}}{2}\\)'
        ),
        S('Final answer: \\(\\dfrac{\\sqrt{3}}{2}\\).', '\\(\\dfrac{\\sqrt{3}}{2}\\)'),
        S('A common slip uses degrees instead of radians.', '\\(\\dfrac{\\sqrt{3}}{2}\\)'),
      ]
    )
  );

  Q.push(
    mc(
      'y12a-6d-q8b_1',
      'If \\(f\'(x)=\\cos\\pi x\\) and \\(f(0)=\\dfrac{1}{2\\pi}\\), find \\(f(x)\\).',
      [
        '\\(\\dfrac{1}{\\pi}\\sin\\pi x\\)',
        '\\(-\\dfrac{1}{\\pi}\\sin\\pi x + \\dfrac{1}{2\\pi}\\)',
        '\\(\\dfrac{1}{\\pi}\\sin\\pi x + \\dfrac{1}{2\\pi}\\)',
        '\\(\\sin\\pi x + \\dfrac{1}{2\\pi}\\)',
      ],
      2,
      [
        S(
          '\\(\\int\\cos\\pi x\\,dx = \\dfrac{1}{\\pi}\\sin\\pi x + C\\).',
          '\\(f(x)=\\dfrac{1}{\\pi}\\sin\\pi x + C\\)'
        ),
        S(
          '\\(f(0)=\\dfrac{1}{2\\pi}\\): \\(0+C=\\dfrac{1}{2\\pi}\\), so \\(C=\\dfrac{1}{2\\pi}\\).',
          '\\(C=\\dfrac{1}{2\\pi}\\)'
        ),
        S(
          '\\(f(x)=\\dfrac{1}{\\pi}\\sin\\pi x + \\dfrac{1}{2\\pi}\\).',
          '\\(\\dfrac{1}{\\pi}\\sin\\pi x + \\dfrac{1}{2\\pi}\\)'
        ),
        S('Final answer as above.', '\\(\\dfrac{1}{\\pi}\\sin\\pi x + \\dfrac{1}{2\\pi}\\)'),
      ],
      { difficulty: 'medium' }
    )
  );

  Q.push(
    mc(
      'y12a-6d-q8b_2',
      'If \\(f\'(x)=\\cos\\pi x\\) and \\(f(0)=\\dfrac{1}{2\\pi}\\), find \\(f\\!\\left(\\dfrac{1}{6}\\right)\\).',
      ['\\(0\\)', '\\(\\dfrac{1}{\\pi}\\)', '\\(\\dfrac{1}{2\\pi}\\)', '\\(\\dfrac{\\sqrt{3}}{2\\pi}\\)'],
      1,
      [
        S(
          'Using \\(f(x)=\\dfrac{1}{\\pi}\\sin\\pi x + \\dfrac{1}{2\\pi}\\):',
          '\\(f\\!\\left(\\dfrac{1}{6}\\right)\\)'
        ),
        S(
          '\\(\\dfrac{1}{\\pi}\\sin\\dfrac{\\pi}{6} + \\dfrac{1}{2\\pi} = \\dfrac{1}{\\pi}\\cdot\\dfrac{1}{2} + \\dfrac{1}{2\\pi} = \\dfrac{1}{\\pi}\\).',
          '\\(\\dfrac{1}{\\pi}\\)'
        ),
        S('Final answer: \\(\\dfrac{1}{\\pi}\\).', '\\(\\dfrac{1}{\\pi}\\)'),
        S('Check arithmetic with common denominator \\(2\\pi\\).', '\\(\\dfrac{1}{\\pi}\\)'),
      ]
    )
  );

  Q.push(
    mc(
      'y12a-6d-q8c',
      'If \\(f\'\'(x)=18\\cos 3x\\), \\(f\'(0)=1\\) and \\(f\\!\\left(\\dfrac{\\pi}{2}\\right)=1\\), find \\(f(x)\\).',
      [
        '\\(-2\\cos 3x + x\\)',
        '\\(-2\\cos 3x + x + 1\\)',
        '\\(-2\\cos 3x + x - \\dfrac{\\pi}{2}\\)',
        '\\(-2\\cos 3x + x + 1 - \\dfrac{\\pi}{2}\\)',
      ],
      3,
      [
        S(
          'Integrate once: \\(f\'(x)=18\\cdot\\dfrac{1}{3}\\sin 3x + A = 6\\sin 3x + A\\).',
          '\\(f\'(x)=6\\sin 3x + A\\)'
        ),
        S(
          '\\(f\'(0)=1\\): \\(0+A=1\\), so \\(A=1\\). Thus \\(f\'(x)=6\\sin 3x + 1\\).',
          '\\(f\'(x)=6\\sin 3x + 1\\)'
        ),
        S(
          'Integrate again: \\(f(x)=6\\cdot\\left(-\\dfrac{1}{3}\\cos 3x\\right) + x + B = -2\\cos 3x + x + B\\).',
          '\\(f(x)=-2\\cos 3x + x + B\\)'
        ),
        S(
          '\\(f\\!\\left(\\dfrac{\\pi}{2}\\right)=1\\): \\(-2\\cos\\dfrac{3\\pi}{2} + \\dfrac{\\pi}{2} + B = 1\\). Since \\(\\cos\\dfrac{3\\pi}{2}=0\\), \\(B=1-\\dfrac{\\pi}{2}\\). Final: \\(-2\\cos 3x + x + 1 - \\dfrac{\\pi}{2}\\).',
          '\\(-2\\cos 3x + x + 1 - \\dfrac{\\pi}{2}\\)'
        ),
      ],
      { difficulty: 'hard', timeLimit: 180 }
    )
  );

  // ── Q9 parameters ──────────────────────────────────────────────────
  Q.push(
    mc(
      'y12a-6d-q9a',
      'Find the indefinite integral (\\(a,b\\) constants): \\( \\int a\\sin(ax+b)\\,dx \\).',
      [
        '\\(\\cos(ax+b)+C\\)',
        '\\(-\\cos(ax+b)+C\\)',
        '\\(-a\\cos(ax+b)+C\\)',
        '\\(\\sin(ax+b)+C\\)',
      ],
      1,
      stepsIndef(
        '\\(\\int a\\sin(ax+b)\\,dx\\)',
        'let \\(u=ax+b\\); \\(a\\) cancels the chain factor',
        '\\(-\\cos(ax+b)+C\\).',
        '\\(-\\cos(ax+b)+C\\)'
      ),
      { difficulty: 'medium' }
    )
  );

  Q.push(
    mc(
      'y12a-6d-q9b',
      'Find the indefinite integral: \\( \\int \\pi^{2}\\cos\\pi x\\,dx \\).',
      [
        '\\(\\pi\\sin\\pi x\\)',
        '\\(\\pi^{2}\\sin\\pi x + C\\)',
        '\\(\\pi\\sin\\pi x + C\\)',
        '\\(-\\pi\\sin\\pi x + C\\)',
      ],
      2,
      stepsIndef(
        '\\(\\int\\pi^{2}\\cos\\pi x\\,dx\\)',
        '\\(\\pi^{2}\\cdot\\dfrac{1}{\\pi}\\sin\\pi x = \\pi\\sin\\pi x\\)',
        '\\(\\pi\\sin\\pi x + C\\).',
        '\\(\\pi\\sin\\pi x + C\\)'
      )
    )
  );

  Q.push(
    mc(
      'y12a-6d-q9c',
      'Find the indefinite integral (\\(u,v\\) constants, \\(u\\neq 0\\)): \\( \\int \\dfrac{1}{u}\\sec^{2}(v+ux)\\,dx \\).',
      [
        '\\(\\dfrac{1}{u}\\tan(v+ux)+C\\)',
        '\\(u\\tan(v+ux)+C\\)',
        '\\(\\dfrac{1}{u^{2}}\\tan(v+ux)+C\\)',
        '\\(\\tan(v+ux)+C\\)',
      ],
      2,
      stepsIndef(
        '\\(\\int\\dfrac{1}{u}\\sec^{2}(v+ux)\\,dx\\)',
        'inner derivative is \\(u\\); overall factor \\(\\dfrac{1}{u}\\cdot\\dfrac{1}{u}=\\dfrac{1}{u^{2}}\\)',
        '\\(\\dfrac{1}{u^{2}}\\tan(v+ux)+C\\).',
        '\\(\\dfrac{1}{u^{2}}\\tan(v+ux)+C\\)'
      ),
      { difficulty: 'medium' }
    )
  );

  Q.push(
    mc(
      'y12a-6d-q9d',
      'Find the indefinite integral (\\(a\\) constant, \\(a\\neq 0\\)): \\( \\int \\dfrac{a}{\\cos^{2} ax}\\,dx \\).',
      ['\\(\\sin ax + C\\)', '\\(\\sec ax + C\\)', '\\(\\tan ax + C\\)', '\\(a\\tan ax + C\\)'],
      2,
      [
        S(
          'Rewrite: \\(\\dfrac{a}{\\cos^{2} ax} = a\\sec^{2} ax\\).',
          '\\(a\\sec^{2} ax\\)'
        ),
        S(
          '\\(\\int a\\sec^{2} ax\\,dx = a\\cdot\\dfrac{1}{a}\\tan ax + C = \\tan ax + C\\).',
          '\\(\\tan ax + C\\)'
        ),
        S('Final answer: \\(\\tan ax + C\\).', '\\(\\tan ax + C\\)'),
        S('The constant \\(a\\) cancels the chain factor from \\(ax\\).', '\\(\\tan ax + C\\)'),
      ],
      { difficulty: 'medium' }
    )
  );

  // ── Q10 identities ─────────────────────────────────────────────────
  Q.push(
    mc(
      'y12a-6d-q10a',
      'Using \\(1+\\tan^{2}x=\\sec^{2}x\\), find \\( \\int \\tan^{2} x \\,dx \\).',
      [
        '\\(\\sin x - x + C\\)',
        '\\(\\tan x + x + C\\)',
        '\\(\\tan x - x + C\\)',
        '\\(\\sec x - x + C\\)',
      ],
      2,
      [
        S(
          'Write \\(\\tan^{2}x = \\sec^{2}x - 1\\). Why? Direct antiderivative of \\(\\tan^{2}x\\) is not a standard form, but \\(\\sec^{2}x\\) is.',
          '\\(\\tan^{2}x=\\sec^{2}x-1\\)'
        ),
        S(
          '\\(\\int(\\sec^{2}x-1)\\,dx = \\tan x - x + C\\).',
          '\\(\\tan x - x + C\\)'
        ),
        S('Final answer: \\(\\tan x - x + C\\).', '\\(\\tan x - x + C\\)'),
        S('A common slip integrates tan as sec without the identity.', '\\(\\tan x - x + C\\)'),
      ],
      { difficulty: 'medium', hint: 'Use \\(\\tan^{2}x=\\sec^{2}x-1\\).' }
    )
  );

  Q.push(
    mc(
      'y12a-6d-q10b',
      'Simplify \\(1-\\sin^{2}x\\), and hence find \\( \\int_{0}^{\\frac{\\pi}{3}} \\dfrac{2}{1-\\sin^{2}x}\\,dx \\).',
      ['\\(\\sqrt{3}\\)', '\\(2\\sqrt{3}\\)', '\\(2\\)', '\\(4\\)'],
      1,
      [
        S(
          '\\(1-\\sin^{2}x=\\cos^{2}x\\), so \\(\\dfrac{2}{1-\\sin^{2}x}=2\\sec^{2}x\\).',
          '\\(2\\sec^{2}x\\)'
        ),
        S(
          '\\(\\int_{0}^{\\pi/3} 2\\sec^{2}x\\,dx = 2\\tan x\\Big|_{0}^{\\pi/3} = 2\\tan\\dfrac{\\pi}{3}-0 = 2\\sqrt{3}\\).',
          '\\(2\\sqrt{3}\\)'
        ),
        S('Final answer: \\(2\\sqrt{3}\\).', '\\(2\\sqrt{3}\\)'),
        S('Domain: cos x ≠ 0 on the open interval; endpoints are fine here.', '\\(2\\sqrt{3}\\)'),
      ],
      { difficulty: 'medium', timeLimit: 120 }
    )
  );

  // ── Q11 log form ───────────────────────────────────────────────────
  Q.push(
    mc(
      'y12a-6d-q11a',
      'Copy and complete: \\( \\int \\dfrac{f\'(x)}{f(x)}\\,dx = \\dots \\)',
      [
        '\\(-\\ln|f(x)| + C\\)',
        '\\(\\ln|f(x)| + C\\)',
        '\\(\\dfrac{1}{f(x)} + C\\)',
        '\\(f(x) + C\\)',
      ],
      1,
      [
        S(
          'If \\(u=f(x)\\) then \\(du=f\'(x)\\,dx\\), so the integral is \\(\\int\\dfrac{1}{u}\\,du=\\ln|u|+C\\).',
          '\\(\\ln|f(x)|+C\\)'
        ),
        S('Absolute value is required for a real logarithm of a possibly negative \\(f\\).', '\\(\\ln|f(x)|+C\\)'),
        S('Final answer: \\(\\ln|f(x)|+C\\).', '\\(\\ln|f(x)|+C\\)'),
        S('A common slip writes \\(\\ln f(x)\\) without absolute values.', '\\(\\ln|f(x)|+C\\)'),
      ]
    )
  );

  Q.push(
    mc(
      'y12a-6d-q11b',
      'Hence find \\( \\int_{0}^{\\frac{\\pi}{6}} \\dfrac{\\cos x}{1+\\sin x}\\,dx \\) (exact value).',
      [
        '\\(\\ln\\dfrac{3}{2}\\)',
        '\\(\\ln 2\\)',
        '\\(\\ln\\dfrac{1}{2}\\)',
        '\\(\\dfrac{1}{2}\\ln 2\\)',
      ],
      0,
      [
        S(
          'Recognise \\(\\dfrac{\\cos x}{1+\\sin x}=\\dfrac{f\'}{f}\\) with \\(f=1+\\sin x\\). Antiderivative \\(\\ln|1+\\sin x|\\).',
          '\\(\\ln|1+\\sin x|\\)'
        ),
        S(
          'Evaluate: \\(\\ln\\!\\left(1+\\sin\\dfrac{\\pi}{6}\\right)-\\ln(1+\\sin 0)=\\ln\\!\\left(1+\\dfrac{1}{2}\\right)-\\ln 1=\\ln\\dfrac{3}{2}\\).',
          '\\(\\ln\\dfrac{3}{2}\\)'
        ),
        S(
          'Numerically \\(\\ln\\dfrac{3}{2}\\approx 0.405\\approx 0.4\\) (as a check). Exact answer is \\(\\ln\\dfrac{3}{2}\\).',
          '\\(\\ln\\dfrac{3}{2}\\)'
        ),
        S('Final answer: \\(\\ln\\dfrac{3}{2}\\).', '\\(\\ln\\dfrac{3}{2}\\)'),
      ],
      { difficulty: 'medium', timeLimit: 120, hint: 'Use \\(\\int f\'/f = \\ln|f|\\).' }
    )
  );

  // ── Q12 tan / cot ──────────────────────────────────────────────────
  Q.push(
    mc(
      'y12a-6d-q12a',
      'Using \\(\\tan x=\\dfrac{\\sin x}{\\cos x}\\), the value of \\( \\int_{0}^{\\frac{\\pi}{4}} \\tan x \\,dx \\) is:',
      [
        '\\(\\ln 2\\)',
        '\\(\\dfrac{1}{2}\\ln 2\\)',
        '\\(-\\dfrac{1}{2}\\ln 2\\)',
        '\\(1\\)',
      ],
      1,
      [
        S(
          'Write \\(\\tan x=\\dfrac{\\sin x}{\\cos x}\\). Let \\(u=\\cos x\\), then \\(du=-\\sin x\\,dx\\), so \\(\\int\\tan x\\,dx=-\\ln|\\cos x|+C=\\ln|\\sec x|+C\\).',
          '\\(\\int\\tan x\\,dx=-\\ln|\\cos x|+C\\)'
        ),
        S(
          'Definite: \\([-\\ln|\\cos x|]_{0}^{\\pi/4}=-\\ln\\dfrac{1}{\\sqrt{2}}-(-\\ln 1)= -\\ln 2^{-1/2}=\\dfrac{1}{2}\\ln 2\\).',
          '\\(\\dfrac{1}{2}\\ln 2\\)'
        ),
        S('Final answer: \\(\\dfrac{1}{2}\\ln 2\\).', '\\(\\dfrac{1}{2}\\ln 2\\)'),
        S('A common slip forgets the absolute value or the sign from \\(du\\).', '\\(\\dfrac{1}{2}\\ln 2\\)'),
      ],
      { difficulty: 'medium', timeLimit: 120 }
    )
  );

  Q.push(
    mc(
      'y12a-6d-q12b',
      'Using \\(\\cot x=\\dfrac{\\cos x}{\\sin x}\\), find \\( \\int_{\\frac{\\pi}{6}}^{\\frac{\\pi}{2}} \\cot x \\,dx \\).',
      ['\\(-\\ln 2\\)', '\\(\\ln 2\\)', '\\(\\dfrac{1}{2}\\ln 2\\)', '\\(1\\)'],
      1,
      [
        S(
          '\\(\\int\\cot x\\,dx=\\ln|\\sin x|+C\\) (substitute \\(u=\\sin x\\)).',
          '\\(\\ln|\\sin x|\\)'
        ),
        S(
          '\\(\\ln\\sin\\dfrac{\\pi}{2}-\\ln\\sin\\dfrac{\\pi}{6}=\\ln 1 - \\ln\\dfrac{1}{2}=\\ln 2\\).',
          '\\(\\ln 2\\)'
        ),
        S('Final answer: \\(\\ln 2\\).', '\\(\\ln 2\\)'),
        S('Check: cot is positive on \\((\\pi/6,\\pi/2)\\), so the integral is positive.', '\\(\\ln 2\\)'),
      ],
      { difficulty: 'medium' }
    )
  );

  // ── Q13 reverse chain ──────────────────────────────────────────────
  Q.push(
    mc(
      'y12a-6d-q13a_i',
      'Find \\( \\dfrac{d}{dx}(\\sin x^{2}) \\).',
      ['\\(2x\\sin x^{2}\\)', '\\(2x\\cos x\\)', '\\(2x\\cos x^{2}\\)', '\\(\\cos x^{2}\\)'],
      2,
      [
        S('Chain rule: outer cos of the same argument, times derivative of \\(x^{2}\\).', '\\(\\cos x^{2}\\cdot 2x\\)'),
        S('\\(\\dfrac{d}{dx}(\\sin x^{2})=2x\\cos x^{2}\\).', '\\(2x\\cos x^{2}\\)'),
        S('Final answer: \\(2x\\cos x^{2}\\).', '\\(2x\\cos x^{2}\\)'),
        S('Do not confuse \\(\\sin x^{2}\\) with \\(\\sin^{2}x\\).', '\\(2x\\cos x^{2}\\)'),
      ]
    )
  );

  Q.push(
    mc(
      'y12a-6d-q13a_ii',
      'Hence find \\( \\int 2x\\cos x^{2}\\,dx \\).',
      ['\\(-\\sin x^{2}+C\\)', '\\(\\sin x + C\\)', '\\(\\cos x^{2}+C\\)', '\\(\\sin x^{2}+C\\)'],
      3,
      [
        S(
          'From part (i), \\(2x\\cos x^{2}\\) is exactly the derivative of \\(\\sin x^{2}\\).',
          '\\(\\dfrac{d}{dx}(\\sin x^{2})=2x\\cos x^{2}\\)'
        ),
        S('Therefore the integral is \\(\\sin x^{2}+C\\).', '\\(\\sin x^{2}+C\\)'),
        S('Final answer: \\(\\sin x^{2}+C\\).', '\\(\\sin x^{2}+C\\)'),
        S('This is reverse chain rule / recognition.', '\\(\\sin x^{2}+C\\)'),
      ]
    )
  );

  Q.push(
    mc(
      'y12a-6d-q13b_i',
      'Find \\( \\dfrac{d}{dx}(\\cos x^{3}) \\).',
      ['\\(-3x\\sin x^{3}\\)', '\\(-3x^{2}\\cos x^{3}\\)', '\\(-3x^{2}\\sin x^{3}\\)', '\\(3x^{2}\\sin x^{3}\\)'],
      2,
      [
        S('Chain: \\(-\\sin(x^{3})\\cdot 3x^{2}=-3x^{2}\\sin x^{3}\\).', '\\(-3x^{2}\\sin x^{3}\\)'),
        S('Final answer: \\(-3x^{2}\\sin x^{3}\\).', '\\(-3x^{2}\\sin x^{3}\\)'),
        S('Keep the minus from differentiating cos.', '\\(-3x^{2}\\sin x^{3}\\)'),
        S('Power on \\(x\\) is 2, not 1.', '\\(-3x^{2}\\sin x^{3}\\)'),
      ]
    )
  );

  Q.push(
    mc(
      'y12a-6d-q13b_ii',
      'Hence find \\( \\int x^{2}\\sin x^{3}\\,dx \\).',
      [
        '\\(\\dfrac{1}{3}\\cos x^{3}+C\\)',
        '\\(-\\dfrac{1}{3}\\cos x^{3}+C\\)',
        '\\(-\\cos x^{3}+C\\)',
        '\\(-3\\cos x^{3}+C\\)',
      ],
      1,
      [
        S(
          'Part (i): \\(\\dfrac{d}{dx}(\\cos x^{3})=-3x^{2}\\sin x^{3}\\), so \\(x^{2}\\sin x^{3}=-\\dfrac{1}{3}\\dfrac{d}{dx}(\\cos x^{3})\\).',
          '\\(\\int x^{2}\\sin x^{3}\\,dx=-\\dfrac{1}{3}\\cos x^{3}+C\\)'
        ),
        S('Final answer: \\(-\\dfrac{1}{3}\\cos x^{3}+C\\).', '\\(-\\dfrac{1}{3}\\cos x^{3}+C\\)'),
        S('Check by differentiating.', '\\(-\\dfrac{1}{3}\\cos x^{3}+C\\)'),
        S('A common slip drops the minus or the factor \\(1/3\\).', '\\(-\\dfrac{1}{3}\\cos x^{3}+C\\)'),
      ]
    )
  );

  Q.push(
    mc(
      'y12a-6d-q13c_i',
      'Find \\( \\dfrac{d}{dx}(\\tan\\sqrt{x}) \\).',
      [
        '\\(-\\dfrac{1}{2\\sqrt{x}}\\sec^{2}\\sqrt{x}\\)',
        '\\(\\dfrac{1}{2\\sqrt{x}}\\sec^{2}\\sqrt{x}\\)',
        '\\(\\sec^{2}\\sqrt{x}\\)',
        '\\(\\dfrac{1}{\\sqrt{x}}\\sec^{2}\\sqrt{x}\\)',
      ],
      1,
      [
        S(
          'Chain: \\(\\sec^{2}\\sqrt{x}\\cdot\\dfrac{1}{2\\sqrt{x}}\\).',
          '\\(\\dfrac{1}{2\\sqrt{x}}\\sec^{2}\\sqrt{x}\\)'
        ),
        S('Final answer: \\(\\dfrac{\\sec^{2}\\sqrt{x}}{2\\sqrt{x}}\\).', '\\(\\dfrac{1}{2\\sqrt{x}}\\sec^{2}\\sqrt{x}\\)'),
        S('Derivative of \\(\\sqrt{x}\\) is essential.', '\\(\\dfrac{1}{2\\sqrt{x}}\\sec^{2}\\sqrt{x}\\)'),
        S('No automatic minus on tan.', '\\(\\dfrac{1}{2\\sqrt{x}}\\sec^{2}\\sqrt{x}\\)'),
      ]
    )
  );

  Q.push(
    mc(
      'y12a-6d-q13c_ii',
      'Hence find \\( \\int \\dfrac{1}{\\sqrt{x}}\\sec^{2}\\sqrt{x}\\,dx \\).',
      [
        '\\(\\tan\\sqrt{x}+C\\)',
        '\\(\\dfrac{1}{2}\\tan\\sqrt{x}+C\\)',
        '\\(\\sec\\sqrt{x}+C\\)',
        '\\(2\\tan\\sqrt{x}+C\\)',
      ],
      3,
      [
        S(
          'Part (i): \\(\\dfrac{d}{dx}(\\tan\\sqrt{x})=\\dfrac{1}{2\\sqrt{x}}\\sec^{2}\\sqrt{x}\\), so \\(\\dfrac{1}{\\sqrt{x}}\\sec^{2}\\sqrt{x}=2\\dfrac{d}{dx}(\\tan\\sqrt{x})\\).',
          '\\(2\\tan\\sqrt{x}+C\\)'
        ),
        S('Final answer: \\(2\\tan\\sqrt{x}+C\\).', '\\(2\\tan\\sqrt{x}+C\\)'),
        S('The factor 2 undoes the \\(1/2\\) in the derivative.', '\\(2\\tan\\sqrt{x}+C\\)'),
        S('Domain: \\(x>0\\) where tan is defined.', '\\(2\\tan\\sqrt{x}+C\\)'),
      ]
    )
  );

  // ── Q14 powers ─────────────────────────────────────────────────────
  Q.push(
    mc(
      'y12a-6d-q14a_i',
      'Find \\( \\dfrac{d}{dx}(\\sin^{5} x) \\).',
      [
        '\\(5\\sin^{4}x\\)',
        '\\(5\\sin^{4}x\\sin x\\)',
        '\\(5\\sin^{4}x\\cos x\\)',
        '\\(5\\cos^{5}x\\)',
      ],
      2,
      [
        S('Power chain: \\(5(\\sin x)^{4}\\cdot\\cos x=5\\sin^{4}x\\cos x\\).', '\\(5\\sin^{4}x\\cos x\\)'),
        S('Final answer: \\(5\\sin^{4}x\\cos x\\).', '\\(5\\sin^{4}x\\cos x\\)'),
        S('Must multiply by the derivative of the inside (cos).', '\\(5\\sin^{4}x\\cos x\\)'),
        S('Not \\(5\\sin^{5}x\\).', '\\(5\\sin^{4}x\\cos x\\)'),
      ]
    )
  );

  Q.push(
    mc(
      'y12a-6d-q14a_ii',
      'Hence find \\( \\int \\sin^{4}x\\cos x\\,dx \\).',
      [
        '\\(-\\dfrac{1}{5}\\sin^{5}x+C\\)',
        '\\(\\sin^{5}x+C\\)',
        '\\(\\dfrac{1}{5}\\sin^{5}x+C\\)',
        '\\(\\dfrac{1}{5}\\cos^{5}x+C\\)',
      ],
      2,
      [
        S(
          'From part (i), divide by 5: integral is \\(\\dfrac{1}{5}\\sin^{5}x+C\\).',
          '\\(\\dfrac{1}{5}\\sin^{5}x+C\\)'
        ),
        S('Final answer: \\(\\dfrac{1}{5}\\sin^{5}x+C\\).', '\\(\\dfrac{1}{5}\\sin^{5}x+C\\)'),
        S('Substitution \\(u=\\sin x\\) gives the same result.', '\\(\\dfrac{1}{5}\\sin^{5}x+C\\)'),
        S('Include \\(+C\\).', '\\(\\dfrac{1}{5}\\sin^{5}x+C\\)'),
      ]
    )
  );

  Q.push(
    mc(
      'y12a-6d-q14b_i',
      'Find \\( \\dfrac{d}{dx}(\\tan^{3} x) \\).',
      [
        '\\(3\\tan^{2}x\\)',
        '\\(3\\tan x\\sec^{2}x\\)',
        '\\(3\\tan^{2}x\\sec x\\)',
        '\\(3\\tan^{2}x\\sec^{2}x\\)',
      ],
      3,
      [
        S('Power chain: \\(3(\\tan x)^{2}\\cdot\\sec^{2}x=3\\tan^{2}x\\sec^{2}x\\).', '\\(3\\tan^{2}x\\sec^{2}x\\)'),
        S('Final answer: \\(3\\tan^{2}x\\sec^{2}x\\).', '\\(3\\tan^{2}x\\sec^{2}x\\)'),
        S('Derivative of tan is sec squared.', '\\(3\\tan^{2}x\\sec^{2}x\\)'),
        S('Not \\(3\\tan^{2}x\\) alone.', '\\(3\\tan^{2}x\\sec^{2}x\\)'),
      ]
    )
  );

  Q.push(
    mc(
      'y12a-6d-q14b_ii',
      'Hence find \\( \\int \\tan^{2}x\\sec^{2}x\\,dx \\).',
      [
        '\\(-\\dfrac{1}{3}\\tan^{3}x+C\\)',
        '\\(\\tan^{3}x+C\\)',
        '\\(\\dfrac{1}{3}\\tan^{3}x+C\\)',
        '\\(\\dfrac{1}{3}\\sec^{3}x+C\\)',
      ],
      2,
      [
        S(
          'Part (i) says the integrand is one-third of the derivative of \\(\\tan^{3}x\\).',
          '\\(\\dfrac{1}{3}\\tan^{3}x+C\\)'
        ),
        S('Final answer: \\(\\dfrac{1}{3}\\tan^{3}x+C\\).', '\\(\\dfrac{1}{3}\\tan^{3}x+C\\)'),
        S('Or substitute \\(u=\\tan x\\).', '\\(\\dfrac{1}{3}\\tan^{3}x+C\\)'),
        S('Include \\(+C\\).', '\\(\\dfrac{1}{3}\\tan^{3}x+C\\)'),
      ]
    )
  );

  // ── Q15 exponential ────────────────────────────────────────────────
  Q.push(
    mc(
      'y12a-6d-q15a_i',
      'Differentiate \\( e^{\\sin x} \\).',
      [
        '\\(e^{-\\sin x}\\cos x\\)',
        '\\(e^{\\sin x}\\)',
        '\\(e^{\\sin x}\\cos x\\)',
        '\\(e^{\\sin x}\\sin x\\)',
      ],
      2,
      [
        S('Chain rule: \\(e^{u}\\cdot u\'\\) with \\(u=\\sin x\\).', '\\(e^{\\sin x}\\cos x\\)'),
        S('Final answer: \\(e^{\\sin x}\\cos x\\).', '\\(e^{\\sin x}\\cos x\\)'),
        S('Derivative of exponential is itself times inside derivative.', '\\(e^{\\sin x}\\cos x\\)'),
        S('Not multiplied by sin.', '\\(e^{\\sin x}\\cos x\\)'),
      ]
    )
  );

  Q.push(
    mc(
      'y12a-6d-q15a_ii',
      'Hence find \\( \\int_{0}^{\\frac{\\pi}{2}} \\cos x\\, e^{\\sin x}\\,dx \\).',
      ['\\(e\\)', '\\(e-1\\)', '\\(e+1\\)', '\\(1\\)'],
      1,
      [
        S(
          'Part (i): the integrand is the derivative of \\(e^{\\sin x}\\).',
          '\\(e^{\\sin x}\\Big|_{0}^{\\pi/2}\\)'
        ),
        S(
          '\\(e^{\\sin(\\pi/2)}-e^{\\sin 0}=e^{1}-e^{0}=e-1\\).',
          '\\(e-1\\)'
        ),
        S('Final answer: \\(e-1\\).', '\\(e-1\\)'),
        S('No \\(+C\\) on a definite integral.', '\\(e-1\\)'),
      ],
      { difficulty: 'medium' }
    )
  );

  Q.push(
    mc(
      'y12a-6d-q15b_i',
      'Differentiate \\( e^{\\tan x} \\).',
      [
        '\\(e^{\\sin x}\\sec^{2}x\\)',
        '\\(e^{\\tan x}\\)',
        '\\(e^{\\tan x}\\sec x\\)',
        '\\(e^{\\tan x}\\sec^{2}x\\)',
      ],
      3,
      [
        S('Chain: \\(e^{\\tan x}\\cdot\\sec^{2}x\\).', '\\(e^{\\tan x}\\sec^{2}x\\)'),
        S('Final answer: \\(e^{\\tan x}\\sec^{2}x\\).', '\\(e^{\\tan x}\\sec^{2}x\\)'),
        S('sec must be squared.', '\\(e^{\\tan x}\\sec^{2}x\\)'),
        S('Not sec alone.', '\\(e^{\\tan x}\\sec^{2}x\\)'),
      ]
    )
  );

  Q.push(
    mc(
      'y12a-6d-q15b_ii',
      'Hence find \\( \\int_{0}^{\\frac{\\pi}{4}} \\sec^{2}x\\, e^{\\tan x}\\,dx \\).',
      ['\\(e\\)', '\\(e-1\\)', '\\(e+1\\)', '\\(1\\)'],
      1,
      [
        S('Integrand is the derivative of \\(e^{\\tan x}\\).', '\\(e^{\\tan x}\\Big|_{0}^{\\pi/4}\\)'),
        S('\\(e^{\\tan(\\pi/4)}-e^{\\tan 0}=e^{1}-e^{0}=e-1\\).', '\\(e-1\\)'),
        S('Final answer: \\(e-1\\).', '\\(e-1\\)'),
        S('Endpoint \\(\\pi/4\\) is where tan is 1.', '\\(e-1\\)'),
      ],
      { difficulty: 'medium' }
    )
  );

  // ── Q16 integration by recognition ─────────────────────────────────
  Q.push(
    mc(
      'y12a-6d-q16a',
      'Given that \\(\\dfrac{d}{dx}(\\sin x - x\\cos x)=x\\sin x\\), find \\( \\int_{0}^{\\frac{\\pi}{2}} x\\sin x \\,dx \\).',
      ['\\(0\\)', '\\(1\\)', '\\(\\dfrac{\\pi}{2}\\)', '\\(\\pi\\)'],
      1,
      [
        S(
          'The given identity shows that an antiderivative of \\(x\\sin x\\) is \\(\\sin x - x\\cos x\\). (You can verify by product rule if required.)',
          '\\(F(x)=\\sin x - x\\cos x\\)'
        ),
        S(
          'Evaluate: \\(F\\!\\left(\\dfrac{\\pi}{2}\\right)-F(0)=\\left(\\sin\\dfrac{\\pi}{2}-\\dfrac{\\pi}{2}\\cos\\dfrac{\\pi}{2}\\right)-(\\sin 0 - 0\\cdot\\cos 0)= (1-0)-(0)=1\\).',
          '\\(1\\)'
        ),
        S('Final answer: \\(1\\).', '\\(1\\)'),
        S('A common slip forgets the \\(-x\\cos x\\) term at the lower limit.', '\\(1\\)'),
      ],
      { difficulty: 'medium', timeLimit: 120 }
    )
  );

  Q.push(
    mc(
      'y12a-6d-q16b',
      'Given that \\(\\dfrac{d}{dx}\\!\\left(\\dfrac{1}{3}\\cos^{3}x - \\cos x\\right)=\\sin^{3}x\\), find \\( \\int_{0}^{\\frac{\\pi}{3}} \\sin^{3}x \\,dx \\).',
      [
        '\\(\\dfrac{1}{8}\\)',
        '\\(\\dfrac{5}{24}\\)',
        '\\(\\dfrac{1}{3}\\)',
        '\\(\\dfrac{1}{2}\\)',
      ],
      1,
      [
        S(
          'Antiderivative \\(F(x)=\\dfrac{1}{3}\\cos^{3}x - \\cos x\\).',
          '\\(F(x)=\\dfrac{1}{3}\\cos^{3}x-\\cos x\\)'
        ),
        S(
          '\\(F\\!\\left(\\dfrac{\\pi}{3}\\right)=\\dfrac{1}{3}\\left(\\dfrac{1}{2}\\right)^{3}-\\dfrac{1}{2}=\\dfrac{1}{24}-\\dfrac{1}{2}\\).',
          '\\(F(\\pi/3)=\\dfrac{1}{24}-\\dfrac{1}{2}\\)'
        ),
        S(
          '\\(F(0)=\\dfrac{1}{3}-1=-\\dfrac{2}{3}\\). Difference: \\(\\dfrac{1}{24}-\\dfrac{1}{2}-\\left(-\\dfrac{2}{3}\\right)=\\dfrac{1}{24}-\\dfrac{12}{24}+\\dfrac{16}{24}=\\dfrac{5}{24}\\).',
          '\\(\\dfrac{5}{24}\\)'
        ),
        S('Final answer: \\(\\dfrac{5}{24}\\).', '\\(\\dfrac{5}{24}\\)'),
      ],
      { difficulty: 'hard', timeLimit: 150 }
    )
  );

  // ── Q17 ────────────────────────────────────────────────────────────
  Q.push(
    mc(
      'y12a-6d-q17a',
      'Given \\(\\dfrac{d}{dx}\\!\\left(\\dfrac{1}{2}x\\sin 2x + \\dfrac{1}{4}\\cos 2x\\right)=x\\cos 2x\\), find \\( \\int_{0}^{\\frac{\\pi}{4}} x\\cos 2x \\,dx \\).',
      [
        '\\(-\\dfrac{\\pi}{8}-\\dfrac{1}{4}\\)',
        '\\(\\dfrac{1}{8}-\\dfrac{1}{4}\\)',
        '\\(\\dfrac{\\pi}{8}+\\dfrac{1}{4}\\)',
        '\\(\\dfrac{\\pi}{8}-\\dfrac{1}{4}\\)',
      ],
      3,
      [
        S(
          'Antiderivative \\(F(x)=\\dfrac{1}{2}x\\sin 2x + \\dfrac{1}{4}\\cos 2x\\).',
          '\\(F(x)=\\dfrac{1}{2}x\\sin 2x + \\dfrac{1}{4}\\cos 2x\\)'
        ),
        S(
          '\\(F\\!\\left(\\dfrac{\\pi}{4}\\right)=\\dfrac{1}{2}\\cdot\\dfrac{\\pi}{4}\\cdot\\sin\\dfrac{\\pi}{2}+\\dfrac{1}{4}\\cos\\dfrac{\\pi}{2}=\\dfrac{\\pi}{8}+0\\).',
          '\\(F(\\pi/4)=\\dfrac{\\pi}{8}\\)'
        ),
        S(
          '\\(F(0)=0+\\dfrac{1}{4}\\cos 0=\\dfrac{1}{4}\\). Difference: \\(\\dfrac{\\pi}{8}-\\dfrac{1}{4}\\).',
          '\\(\\dfrac{\\pi}{8}-\\dfrac{1}{4}\\)'
        ),
        S('Final answer: \\(\\dfrac{\\pi}{8}-\\dfrac{1}{4}\\).', '\\(\\dfrac{\\pi}{8}-\\dfrac{1}{4}\\)'),
      ],
      { difficulty: 'hard', timeLimit: 150 }
    )
  );

  // ── Q18 improper / discontinuous ───────────────────────────────────
  Q.push(
    mc(
      'y12a-6d-q18a',
      'Does the definite integral \\( \\int_{0}^{\\pi} \\sec^{2} x \\,dx \\) exist? If so, find its value; if not, choose the correct reason.',
      [
        'Exists and equals 0',
        'Exists and equals \\(\\tan\\pi-\\tan 0=0\\)',
        'Does not exist: \\(\\sec^{2}x\\) has a vertical asymptote at \\(x=\\dfrac{\\pi}{2}\\) in the interval',
        'Does not exist: the antiderivative is undefined at 0',
      ],
      2,
      [
        S(
          'The formal antiderivative is \\(\\tan x\\). But on \\([0,\\pi]\\) the integrand \\(\\sec^{2}x\\) is discontinuous at \\(x=\\dfrac{\\pi}{2}\\) (vertical asymptote).',
          '\\(x=\\pi/2\\ \\text{singularity}\\)'
        ),
        S(
          'A definite integral requires the integrand to be continuous (or at least integrable) on the closed interval. Here it is not.',
          '\\text{not integrable on }[0,\\pi]'
        ),
        S(
          'Naively writing \\(\\tan\\pi-\\tan 0=0\\) is invalid because the FTC does not apply across the asymptote.',
          '\\text{FTC fails}\\)'
        ),
        S(
          'Final answer: the integral does not exist (discontinuity at \\(\\pi/2\\)).',
          '\\text{does not exist}\\)'
        ),
      ],
      {
        difficulty: 'medium',
        timeLimit: 120,
        hint: 'Check continuity of the integrand on the interval of integration.',
      }
    )
  );

  // Fix step 3-4 workingOut typos with proper delimiters for 18a
  Q[Q.length - 1].solutionSteps[2].workingOut = '\\(\\text{FTC does not apply}\\)';
  Q[Q.length - 1].solutionSteps[3].workingOut = '\\(\\text{does not exist}\\)';

  Q.push(
    mc(
      'y12a-6d-q18b',
      'Does the definite integral \\( \\int_{0}^{\\pi} \\tan x \\,dx \\) exist?',
      [
        'Exists and equals 0',
        'Exists and equals \\(\\ln|\\sec\\pi|-\\ln|\\sec 0|\\)',
        'Does not exist: \\(\\tan x\\) is discontinuous at \\(x=\\dfrac{\\pi}{2}\\) in the interval',
        'Does not exist: tan is odd',
      ],
      2,
      [
        S(
          'On \\([0,\\pi]\\), \\(\\tan x\\) has a vertical asymptote at \\(x=\\dfrac{\\pi}{2}\\).',
          '\\(x=\\pi/2\\ \\text{singularity}\\)'
        ),
        S('The integrand is not continuous on the whole interval, so the integral does not exist as an ordinary definite integral.', '\\text{discontinuous}\\)'),
        S('Final: does not exist.', '\\(\\text{does not exist}\\)'),
        S('Improper principal-value interpretations are not required here.', '\\(\\text{does not exist}\\)'),
      ],
      { difficulty: 'medium', timeLimit: 90 }
    )
  );
  Q[Q.length - 1].solutionSteps[1].workingOut = '\\(\\text{discontinuous}\\)';

  Q.push(
    mc(
      'y12a-6d-q18c',
      'Does the definite integral \\( \\int_{-\\frac{\\pi}{2}}^{\\frac{\\pi}{2}} \\cot x \\,dx \\) exist?',
      [
        'Exists and equals 0 (odd function)',
        'Exists and equals \\(\\ln|\\sin x|\\) evaluated at the ends',
        'Does not exist: \\(\\cot x\\) is discontinuous at \\(x=0\\) in the interval',
        'Does not exist: cot is undefined at both endpoints only',
      ],
      2,
      [
        S(
          'Cotangent has a vertical asymptote at \\(x=0\\), which lies inside \\(\\left[-\\dfrac{\\pi}{2},\\dfrac{\\pi}{2}\\right]\\).',
          '\\(x=0\\ \\text{singularity}\\)'
        ),
        S(
          'Although cot is odd, an odd singularity in the middle does not automatically make the improper integral exist.',
          '\\text{not continuous}\\)'
        ),
        S('Final: the integral does not exist.', '\\(\\text{does not exist}\\)'),
        S('Also note endpoints where cos = 0: cot is undefined at \\(\\pm\\pi/2\\) as well.', '\\(\\text{does not exist}\\)'),
      ],
      { difficulty: 'medium', timeLimit: 90 }
    )
  );
  Q[Q.length - 1].solutionSteps[1].workingOut = '\\(\\text{not continuous}\\)';

  return Q;
}

(async () => {
  const questions = buildAll();
  console.log('built', questions.length, 'questions');

  // validate
  for (const q of questions) {
    if (q.type !== 'multiple_choice') throw new Error(q.id + ' not mc');
    if (q.opts.length !== 4) throw new Error(q.id + ' opts');
    if (q.solutionSteps.length < 3) throw new Error(q.id + ' steps');
    for (const s of q.solutionSteps) {
      if (!s.workingOut || /finance|Apply the appropriate/i.test(s.explanation || '')) {
        throw new Error(q.id + ' bad step: ' + (s.explanation || '').slice(0, 60));
      }
      // workingOut should be wrapped
      if (s.workingOut.includes('\\') && !s.workingOut.includes('\\(') && !s.workingOut.includes('\\[')) {
        console.warn('unwrap WO', q.id, s.workingOut);
      }
    }
  }

  const seedPath = path.resolve('src/constants/seedYear12aCh6DQuestions.js');
  writeFileSync(
    seedPath,
    'export const Y12A_CH6D_QUESTIONS = ' +
      JSON.stringify(questions, null, 2) +
      ';\n\nexport default Y12A_CH6D_QUESTIONS;\n'
  );
  console.log('wrote seed', seedPath);

  // Firestore batch
  let batch = db.batch();
  let n = 0;
  let ops = 0;
  for (const q of questions) {
    const ref = db.collection('questions').doc(q.id);
    batch.set(
      ref,
      {
        ...q,
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
      console.log('committed batch…', n);
    }
  }
  if (ops) await batch.commit();
  console.log('Firestore updated', n);

  const ver = Date.now();
  await db.collection('sync_meta').doc('questions').set(
    {
      version: ver,
      membershipVersion: ver,
      updatedAt: FieldValue.serverTimestamp(),
    },
    { merge: true }
  );
  console.log('sync_meta', ver);

  // rebuild indexes
  const idx = spawnSync(
    'node',
    ['tools/scripts/rebuildQuestionIndexes.js', 'y12a-6'],
    { encoding: 'utf8', timeout: 120000 }
  );
  console.log(idx.stdout || '');
  if (idx.stderr) console.error(idx.stderr);
  if (idx.status !== 0) {
    console.warn('index rebuild exit', idx.status);
  }

  // sample
  for (const id of ['y12a-6d-q1a', 'y12a-6d-q2a', 'y12a-6d-q18a', 'y12a-6d-q16b']) {
    const d = (await db.collection('questions').doc(id).get()).data();
    console.log('\n', id, 'type', d.type, 'a', d.a, 'opts0', d.opts?.[0]);
    console.log('  step1', d.solutionSteps?.[0]?.explanation?.slice(0, 90));
  }
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
