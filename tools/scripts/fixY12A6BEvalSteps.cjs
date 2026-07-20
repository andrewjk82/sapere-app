/**
 * Fix remaining thin/template steps for 6B evaluate + product/quotient/chain series.
 * Focus: q2*, q4*, q5*, q6*, q7*, q8* and any "Given the function in the stem" leftovers.
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

function S(explanation, workingOut) {
  return { explanation, workingOut, graphData: null };
}

function mcOpts(opts, a) {
  return {
    opts,
    options: opts.map((text) => ({ text, imageUrl: null })),
    a,
    answer: String(a),
  };
}

/** Hand-detailed patches keyed by id */
const PATCH = {
  // ── q4: f(x)=cos 2x ───────────────────────────────────────────────
  'y12a-6b-q4a': {
    ...mcOpts(['\\(0\\)', '\\(-1\\)', '\\(-2\\)', '\\(1\\)'], 0),
    solution: 'The correct answer is \\(0\\).',
    hint: "Differentiate first: \\(f'(x)=-2\\sin 2x\\), then substitute.",
    solutionSteps: [
      S('Given: \\(f(x)=\\cos 2x\\). Find \\(f\'(0)\\).', '\\(f(x)=\\cos 2x\\)'),
      S('Chain rule: \\(f\'(x)=-\\sin 2x\\cdot 2=-2\\sin 2x\\).', '\\(f\'(x)=-2\\sin 2x\\)'),
      S('Substitute \\(x=0\\): \\(f\'(0)=-2\\sin 0=-2\\cdot 0=0\\).', '\\(f\'(0)=0\\)'),
      S('Final answer: \\(0\\).', '\\(0\\)'),
    ],
  },
  'y12a-6b-q4b': {
    ...mcOpts(['\\(-1\\)', '\\(-2\\)', '\\(0\\)', '\\(1\\)'], 0),
    solution: 'The correct answer is \\(-1\\).',
    hint: "\\(f'(x)=-2\\sin 2x\\). Use \\(\\sin(\\pi/6)=1/2\\).",
    solutionSteps: [
      S('Given: \\(f(x)=\\cos 2x\\). Find \\(f\'(\\pi/12)\\).', '\\(f(x)=\\cos 2x\\)'),
      S('Differentiate: \\(f\'(x)=-2\\sin 2x\\).', '\\(f\'(x)=-2\\sin 2x\\)'),
      S(
        'At \\(x=\\dfrac{\\pi}{12}\\): \\(2x=\\dfrac{\\pi}{6}\\), so \\(f\'\\!\\left(\\dfrac{\\pi}{12}\\right)=-2\\sin\\dfrac{\\pi}{6}=-2\\cdot\\dfrac{1}{2}=-1\\).',
        '\\(f\'(\\pi/12)=-1\\)'
      ),
      S('Final answer: \\(-1\\).', '\\(-1\\)'),
    ],
  },
  'y12a-6b-q4c': {
    ...mcOpts(['\\(-\\sqrt{3}\\)', '\\(-1\\)', '\\(0\\)', '\\(\\sqrt{3}\\)'], 0),
    solution: 'The correct answer is \\(-\\sqrt{3}\\).',
    hint: "\\(f'(x)=-2\\sin 2x\\). Use \\(\\sin(\\pi/3)=\\sqrt{3}/2\\).",
    solutionSteps: [
      S('Given: \\(f(x)=\\cos 2x\\). Find \\(f\'(\\pi/6)\\).', '\\(f(x)=\\cos 2x\\)'),
      S('Differentiate: \\(f\'(x)=-2\\sin 2x\\).', '\\(f\'(x)=-2\\sin 2x\\)'),
      S(
        'At \\(x=\\dfrac{\\pi}{6}\\): \\(2x=\\dfrac{\\pi}{3}\\), so \\(f\'\\!\\left(\\dfrac{\\pi}{6}\\right)=-2\\sin\\dfrac{\\pi}{3}=-2\\cdot\\dfrac{\\sqrt{3}}{2}=-\\sqrt{3}\\).',
        '\\(f\'(\\pi/6)=-\\sqrt{3}\\)'
      ),
      S('Final answer: \\(-\\sqrt{3}\\).', '\\(-\\sqrt{3}\\)'),
    ],
  },
  'y12a-6b-q4d': {
    ...mcOpts(['\\(-1\\)', '\\(-2\\)', '\\(-3\\)', '\\(2\\)'], 1),
    solution: 'The correct answer is \\(-2\\).',
    hint: "\\(f'(x)=-2\\sin 2x\\). Use \\(\\sin(\\pi/2)=1\\).",
    solutionSteps: [
      S('Given: \\(f(x)=\\cos 2x\\). Find \\(f\'(\\pi/4)\\).', '\\(f(x)=\\cos 2x\\)'),
      S('Differentiate: \\(f\'(x)=-2\\sin 2x\\).', '\\(f\'(x)=-2\\sin 2x\\)'),
      S(
        'At \\(x=\\dfrac{\\pi}{4}\\): \\(2x=\\dfrac{\\pi}{2}\\), so \\(f\'\\!\\left(\\dfrac{\\pi}{4}\\right)=-2\\sin\\dfrac{\\pi}{2}=-2\\cdot 1=-2\\).',
        '\\(f\'(\\pi/4)=-2\\)'
      ),
      S('Final answer: \\(-2\\).', '\\(-2\\)'),
    ],
  },

  // ── q5: f(x)=sin(x/4+π/2) ─────────────────────────────────────────
  'y12a-6b-q5a': {
    ...mcOpts(['\\(0\\)', '\\(\\dfrac{1}{4}\\)', '\\(-\\dfrac{1}{4}\\)', '\\(1\\)'], 0),
    solution: 'The correct answer is \\(0\\).',
    hint: "\\(f'(x)=-\\dfrac{1}{4}\\sin\\dfrac{x}{4}\\) (or equivalent). Evaluate at 0.",
    solutionSteps: [
      S(
        'Given: \\(f(x)=\\sin\\!\\left(\\dfrac{x}{4}+\\dfrac{\\pi}{2}\\right)\\). Find \\(f\'(0)\\).',
        '\\(f(x)=\\sin\\!\\left(\\dfrac{x}{4}+\\dfrac{\\pi}{2}\\right)\\)'
      ),
      S(
        'Note \\(\\sin(\\theta+\\pi/2)=\\cos\\theta\\), so \\(f(x)=\\cos\\dfrac{x}{4}\\). Then \\(f\'(x)=-\\dfrac{1}{4}\\sin\\dfrac{x}{4}\\).',
        '\\(f\'(x)=-\\dfrac{1}{4}\\sin\\dfrac{x}{4}\\)'
      ),
      S('At \\(x=0\\): \\(f\'(0)=-\\dfrac{1}{4}\\sin 0=0\\).', '\\(f\'(0)=0\\)'),
      S('Final answer: \\(0\\).', '\\(0\\)'),
    ],
  },
  'y12a-6b-q5b': {
    ...mcOpts(
      ['\\(-\\dfrac{1}{4}\\)', '\\(0\\)', '\\(\\dfrac{1}{4}\\)', '\\(-\\dfrac{1}{2}\\)'],
      0
    ),
    solution: 'The correct answer is \\(-\\dfrac{1}{4}\\).',
    hint: "\\(f'(x)=-\\dfrac{1}{4}\\sin\\dfrac{x}{4}\\). At \\(x=2\\pi\\): \\(\\sin(\\pi/2)=1\\).",
    solutionSteps: [
      S(
        'Given: \\(f(x)=\\sin\\!\\left(\\dfrac{x}{4}+\\dfrac{\\pi}{2}\\right)=\\cos\\dfrac{x}{4}\\). Find \\(f\'(2\\pi)\\).',
        '\\(f\'(x)=-\\dfrac{1}{4}\\sin\\dfrac{x}{4}\\)'
      ),
      S(
        'At \\(x=2\\pi\\): \\(f\'(2\\pi)=-\\dfrac{1}{4}\\sin\\dfrac{2\\pi}{4}=-\\dfrac{1}{4}\\sin\\dfrac{\\pi}{2}=-\\dfrac{1}{4}\\cdot 1=-\\dfrac{1}{4}\\).',
        '\\(f\'(2\\pi)=-\\dfrac{1}{4}\\)'
      ),
      S('Final answer: \\(-\\dfrac{1}{4}\\).', '\\(-\\dfrac{1}{4}\\)'),
    ],
  },
  'y12a-6b-q5c': {
    ...mcOpts(
      [
        '\\(-\\dfrac{1}{4\\sqrt{2}}\\)',
        '\\(\\dfrac{1}{4\\sqrt{2}}\\)',
        '\\(\\dfrac{1}{4}\\)',
        '\\(\\dfrac{\\sqrt{2}}{4}\\)',
      ],
      1
    ),
    solution: 'The correct answer is \\(\\dfrac{1}{4\\sqrt{2}}\\).',
    hint: "\\(f'(x)=-\\dfrac{1}{4}\\sin\\dfrac{x}{4}\\). Use \\(\\sin(-\\pi/4)=-\\sin(\\pi/4)\\).",
    solutionSteps: [
      S(
        'Given \\(f(x)=\\cos\\dfrac{x}{4}\\), so \\(f\'(x)=-\\dfrac{1}{4}\\sin\\dfrac{x}{4}\\). Find \\(f\'(-\\pi)\\).',
        '\\(f\'(x)=-\\dfrac{1}{4}\\sin\\dfrac{x}{4}\\)'
      ),
      S(
        'At \\(x=-\\pi\\): \\(f\'(-\\pi)=-\\dfrac{1}{4}\\sin\\!\\left(-\\dfrac{\\pi}{4}\\right)=-\\dfrac{1}{4}\\left(-\\sin\\dfrac{\\pi}{4}\\right)=\\dfrac{1}{4}\\cdot\\dfrac{\\sqrt{2}}{2}=\\dfrac{\\sqrt{2}}{8}=\\dfrac{1}{4\\sqrt{2}}\\).',
        '\\(f\'(-\\pi)=\\dfrac{1}{4\\sqrt{2}}\\)'
      ),
      S('Final answer: \\(\\dfrac{1}{4\\sqrt{2}}\\).', '\\(\\dfrac{1}{4\\sqrt{2}}\\)'),
    ],
  },
  'y12a-6b-q5d': {
    ...mcOpts(
      [
        '\\(\\dfrac{1}{4\\sqrt{2}}\\)',
        '\\(-\\dfrac{1}{4\\sqrt{2}}\\)',
        '\\(-\\dfrac{1}{4}\\)',
        '\\(\\dfrac{\\sqrt{2}}{4}\\)',
      ],
      1
    ),
    solution: 'The correct answer is \\(-\\dfrac{1}{4\\sqrt{2}}\\).',
    hint: "\\(f'(x)=-\\dfrac{1}{4}\\sin\\dfrac{x}{4}\\). At \\(x=\\pi\\): \\(\\sin(\\pi/4)=\\sqrt{2}/2\\).",
    solutionSteps: [
      S(
        'Given \\(f\'(x)=-\\dfrac{1}{4}\\sin\\dfrac{x}{4}\\). Find \\(f\'(\\pi)\\).',
        '\\(f\'(x)=-\\dfrac{1}{4}\\sin\\dfrac{x}{4}\\)'
      ),
      S(
        'At \\(x=\\pi\\): \\(f\'(\\pi)=-\\dfrac{1}{4}\\sin\\dfrac{\\pi}{4}=-\\dfrac{1}{4}\\cdot\\dfrac{\\sqrt{2}}{2}=-\\dfrac{\\sqrt{2}}{8}=-\\dfrac{1}{4\\sqrt{2}}\\).',
        '\\(f\'(\\pi)=-\\dfrac{1}{4\\sqrt{2}}\\)'
      ),
      S('Final answer: \\(-\\dfrac{1}{4\\sqrt{2}}\\).', '\\(-\\dfrac{1}{4\\sqrt{2}}\\)'),
    ],
  },

  // ── q6 product ────────────────────────────────────────────────────
  'y12a-6b-q6a': {
    solution: 'The correct answer is \\(\\sin x + x\\cos x\\).',
    hint: 'Product rule with \\(u=x\\), \\(v=\\sin x\\).',
    solutionSteps: [
      S('Given: \\(y=x\\sin x\\). Strategy: product rule.', '\\(y=x\\sin x\\)'),
      S('Let \\(u=x\\), \\(v=\\sin x\\). Then \\(u\'=1\\), \\(v\'=\\cos x\\).', '\\(u\'=1,\\ v\'=\\cos x\\)'),
      S('So \\(y\'=1\\cdot\\sin x + x\\cdot\\cos x=\\sin x + x\\cos x\\).', '\\(y\'=\\sin x + x\\cos x\\)'),
      S('Final answer: \\(\\sin x + x\\cos x\\).', '\\(\\sin x + x\\cos x\\)'),
    ],
  },
  'y12a-6b-q6b': {
    solution: 'The correct answer is \\(2\\tan 2x + 4x\\sec^{2} 2x\\).',
    hint: 'Product rule; chain rule on \\(\\tan 2x\\).',
    solutionSteps: [
      S('Given: \\(y=2x\\tan 2x\\). Strategy: product rule + chain rule.', '\\(y=2x\\tan 2x\\)'),
      S(
        'Let \\(u=2x\\), \\(v=\\tan 2x\\). Then \\(u\'=2\\) and \\(v\'=\\sec^{2} 2x\\cdot 2=2\\sec^{2} 2x\\).',
        '\\(u\'=2,\\ v\'=2\\sec^{2} 2x\\)'
      ),
      S(
        'So \\(y\'=2\\cdot\\tan 2x + 2x\\cdot 2\\sec^{2} 2x=2\\tan 2x + 4x\\sec^{2} 2x\\).',
        '\\(y\'=2\\tan 2x + 4x\\sec^{2} 2x\\)'
      ),
      S('Final answer: \\(2\\tan 2x + 4x\\sec^{2} 2x\\).', '\\(2\\tan 2x + 4x\\sec^{2} 2x\\)'),
    ],
  },
  'y12a-6b-q6c': {
    solution: 'The correct answer is \\(2x\\cos 2x - 2x^{2}\\sin 2x\\).',
    hint: 'Product rule with \\(u=x^{2}\\), \\(v=\\cos 2x\\).',
    solutionSteps: [
      S('Given: \\(y=x^{2}\\cos 2x\\). Strategy: product rule + chain rule.', '\\(y=x^{2}\\cos 2x\\)'),
      S(
        'Let \\(u=x^{2}\\), \\(v=\\cos 2x\\). Then \\(u\'=2x\\) and \\(v\'=-2\\sin 2x\\).',
        '\\(u\'=2x,\\ v\'=-2\\sin 2x\\)'
      ),
      S(
        'So \\(y\'=2x\\cos 2x + x^{2}(-2\\sin 2x)=2x\\cos 2x - 2x^{2}\\sin 2x\\).',
        '\\(y\'=2x\\cos 2x - 2x^{2}\\sin 2x\\)'
      ),
      S('Final answer: \\(2x\\cos 2x - 2x^{2}\\sin 2x\\).', '\\(2x\\cos 2x - 2x^{2}\\sin 2x\\)'),
    ],
  },
  'y12a-6b-q6d': {
    solution: 'The correct answer is \\(3x^{2}\\sin 3x + 3x^{3}\\cos 3x\\).',
    hint: 'Product rule with \\(u=x^{3}\\), \\(v=\\sin 3x\\).',
    solutionSteps: [
      S('Given: \\(y=x^{3}\\sin 3x\\). Strategy: product rule + chain rule.', '\\(y=x^{3}\\sin 3x\\)'),
      S(
        'Let \\(u=x^{3}\\), \\(v=\\sin 3x\\). Then \\(u\'=3x^{2}\\) and \\(v\'=3\\cos 3x\\).',
        '\\(u\'=3x^{2},\\ v\'=3\\cos 3x\\)'
      ),
      S(
        'So \\(y\'=3x^{2}\\sin 3x + x^{3}\\cdot 3\\cos 3x=3x^{2}\\sin 3x + 3x^{3}\\cos 3x\\).',
        '\\(y\'=3x^{2}\\sin 3x + 3x^{3}\\cos 3x\\)'
      ),
      S('Final answer: \\(3x^{2}\\sin 3x + 3x^{3}\\cos 3x\\).', '\\(3x^{2}\\sin 3x + 3x^{3}\\cos 3x\\)'),
    ],
  },

  // ── q7 quotient ───────────────────────────────────────────────────
  'y12a-6b-q7a': {
    solution: 'The correct answer is \\(\\dfrac{x\\cos x - \\sin x}{x^{2}}\\).',
    hint: 'Quotient rule: \\(u=\\sin x\\), \\(v=x\\).',
    solutionSteps: [
      S('Given: \\(y=\\dfrac{\\sin x}{x}\\). Strategy: quotient rule.', '\\(y=\\dfrac{\\sin x}{x}\\)'),
      S('Let \\(u=\\sin x\\), \\(v=x\\). Then \\(u\'=\\cos x\\), \\(v\'=1\\).', '\\(u\'=\\cos x,\\ v\'=1\\)'),
      S(
        'So \\(y\'=\\dfrac{\\cos x\\cdot x - \\sin x\\cdot 1}{x^{2}}=\\dfrac{x\\cos x - \\sin x}{x^{2}}\\).',
        '\\(y\'=\\dfrac{x\\cos x - \\sin x}{x^{2}}\\)'
      ),
      S('Final answer: \\(\\dfrac{x\\cos x - \\sin x}{x^{2}}\\).', '\\(\\dfrac{x\\cos x - \\sin x}{x^{2}}\\)'),
    ],
  },
  'y12a-6b-q7b': {
    solution: 'The correct answer is \\(\\dfrac{-x\\sin x - \\cos x}{x^{2}}\\).',
    hint: 'Quotient rule: \\(u=\\cos x\\), \\(v=x\\).',
    solutionSteps: [
      S('Given: \\(y=\\dfrac{\\cos x}{x}\\). Strategy: quotient rule.', '\\(y=\\dfrac{\\cos x}{x}\\)'),
      S('Let \\(u=\\cos x\\), \\(v=x\\). Then \\(u\'=-\\sin x\\), \\(v\'=1\\).', '\\(u\'=-\\sin x,\\ v\'=1\\)'),
      S(
        'So \\(y\'=\\dfrac{(-\\sin x)x - \\cos x\\cdot 1}{x^{2}}=\\dfrac{-x\\sin x - \\cos x}{x^{2}}\\).',
        '\\(y\'=\\dfrac{-x\\sin x - \\cos x}{x^{2}}\\)'
      ),
      S('Final answer: \\(\\dfrac{-x\\sin x - \\cos x}{x^{2}}\\).', '\\(\\dfrac{-x\\sin x - \\cos x}{x^{2}}\\)'),
    ],
  },
  'y12a-6b-q7c': {
    solution: 'The correct answer is \\(\\dfrac{2x\\cos x + x^{2}\\sin x}{\\cos^{2}x}\\).',
    hint: 'Quotient rule: \\(u=x^{2}\\), \\(v=\\cos x\\).',
    solutionSteps: [
      S('Given: \\(y=\\dfrac{x^{2}}{\\cos x}\\). Strategy: quotient rule.', '\\(y=\\dfrac{x^{2}}{\\cos x}\\)'),
      S('Let \\(u=x^{2}\\), \\(v=\\cos x\\). Then \\(u\'=2x\\), \\(v\'=-\\sin x\\).', '\\(u\'=2x,\\ v\'=-\\sin x\\)'),
      S(
        'So \\(y\'=\\dfrac{2x\\cos x - x^{2}(-\\sin x)}{\\cos^{2}x}=\\dfrac{2x\\cos x + x^{2}\\sin x}{\\cos^{2}x}\\).',
        '\\(y\'=\\dfrac{2x\\cos x + x^{2}\\sin x}{\\cos^{2}x}\\)'
      ),
      S(
        'Final answer: \\(\\dfrac{2x\\cos x + x^{2}\\sin x}{\\cos^{2}x}\\).',
        '\\(\\dfrac{2x\\cos x + x^{2}\\sin x}{\\cos^{2}x}\\)'
      ),
    ],
  },
  'y12a-6b-q7d': {
    solution: 'The correct answer is \\(\\dfrac{1+\\sin x - x\\cos x}{(1+\\sin x)^{2}}\\).',
    hint: 'Quotient rule: \\(u=x\\), \\(v=1+\\sin x\\).',
    solutionSteps: [
      S(
        'Given: \\(y=\\dfrac{x}{1+\\sin x}\\). Strategy: quotient rule.',
        '\\(y=\\dfrac{x}{1+\\sin x}\\)'
      ),
      S(
        'Let \\(u=x\\), \\(v=1+\\sin x\\). Then \\(u\'=1\\), \\(v\'=\\cos x\\).',
        '\\(u\'=1,\\ v\'=\\cos x\\)'
      ),
      S(
        'So \\(y\'=\\dfrac{1\\cdot(1+\\sin x) - x\\cos x}{(1+\\sin x)^{2}}=\\dfrac{1+\\sin x - x\\cos x}{(1+\\sin x)^{2}}\\).',
        '\\(y\'=\\dfrac{1+\\sin x - x\\cos x}{(1+\\sin x)^{2}}\\)'
      ),
      S(
        'Final answer: \\(\\dfrac{1+\\sin x - x\\cos x}{(1+\\sin x)^{2}}\\).',
        '\\(\\dfrac{1+\\sin x - x\\cos x}{(1+\\sin x)^{2}}\\)'
      ),
    ],
  },

  // ── q8 chain ──────────────────────────────────────────────────────
  'y12a-6b-q8a': {
    solution: 'The correct answer is \\(2x\\cos(x^{2})\\).',
    hint: 'Chain rule: outer sin, inner \\(x^{2}\\).',
    solutionSteps: [
      S('Given: \\(y=\\sin(x^{2})\\). Strategy: chain rule.', '\\(y=\\sin(x^{2})\\)'),
      S('Let \\(u=x^{2}\\). Then \\(y=\\sin u\\) and \\(y\'=\\cos u\\cdot u\'\\) with \\(u\'=2x\\).', '\\(u=x^{2},\\ u\'=2x\\)'),
      S('So \\(y\'=\\cos(x^{2})\\cdot 2x=2x\\cos(x^{2})\\).', '\\(y\'=2x\\cos(x^{2})\\)'),
      S('Final answer: \\(2x\\cos(x^{2})\\).', '\\(2x\\cos(x^{2})\\)'),
    ],
  },
  'y12a-6b-q8b': {
    solution: 'The correct answer is \\(-2x\\cos(1-x^{2})\\).',
    hint: 'Chain rule: outer sin, inner \\(1-x^{2}\\).',
    solutionSteps: [
      S('Given: \\(y=\\sin(1-x^{2})\\). Strategy: chain rule.', '\\(y=\\sin(1-x^{2})\\)'),
      S(
        'Let \\(u=1-x^{2}\\). Then \\(u\'=-2x\\) and \\(y\'=\\cos u\\cdot u\'=\\cos(1-x^{2})\\cdot(-2x)\\).',
        '\\(u\'=-2x\\)'
      ),
      S('So \\(y\'=-2x\\cos(1-x^{2})\\).', '\\(y\'=-2x\\cos(1-x^{2})\\)'),
      S('Final answer: \\(-2x\\cos(1-x^{2})\\).', '\\(-2x\\cos(1-x^{2})\\)'),
    ],
  },
  'y12a-6b-q8c': {
    solution: 'The correct answer is \\(-3x^{2}\\sin(x^{3}+1)\\).',
    hint: 'Chain rule: outer cos, inner \\(x^{3}+1\\).',
    solutionSteps: [
      S('Given: \\(y=\\cos(x^{3}+1)\\). Strategy: chain rule.', '\\(y=\\cos(x^{3}+1)\\)'),
      S(
        'Let \\(u=x^{3}+1\\). Then \\(u\'=3x^{2}\\) and \\(y\'=-\\sin u\\cdot u\'\\).',
        '\\(u\'=3x^{2}\\)'
      ),
      S('So \\(y\'=-\\sin(x^{3}+1)\\cdot 3x^{2}=-3x^{2}\\sin(x^{3}+1)\\).', '\\(y\'=-3x^{2}\\sin(x^{3}+1)\\)'),
      S('Final answer: \\(-3x^{2}\\sin(x^{3}+1)\\).', '\\(-3x^{2}\\sin(x^{3}+1)\\)'),
    ],
  },
  'y12a-6b-q8d': {
    solution: 'The correct answer is \\(-\\dfrac{1}{x^{2}}\\cos\\dfrac{1}{x}\\).',
    hint: 'Chain rule: outer sin, inner \\(1/x\\).',
    solutionSteps: [
      S('Given: \\(y=\\sin\\dfrac{1}{x}\\). Strategy: chain rule.', '\\(y=\\sin\\dfrac{1}{x}\\)'),
      S(
        'Let \\(u=x^{-1}\\). Then \\(u\'=-x^{-2}\\) and \\(y\'=\\cos u\\cdot u\'\\).',
        '\\(u\'=-\\dfrac{1}{x^{2}}\\)'
      ),
      S(
        'So \\(y\'=\\cos\\dfrac{1}{x}\\cdot\\left(-\\dfrac{1}{x^{2}}\\right)=-\\dfrac{1}{x^{2}}\\cos\\dfrac{1}{x}\\).',
        '\\(y\'=-\\dfrac{1}{x^{2}}\\cos\\dfrac{1}{x}\\)'
      ),
      S(
        'Final answer: \\(-\\dfrac{1}{x^{2}}\\cos\\dfrac{1}{x}\\).',
        '\\(-\\dfrac{1}{x^{2}}\\cos\\dfrac{1}{x}\\)'
      ),
    ],
  },
  'y12a-6b-q8e': {
    solution: 'The correct answer is \\(-2\\cos x\\sin x\\).',
    hint: 'Write \\(\\cos^{2}x=(\\cos x)^{2}\\) and use the chain rule.',
    solutionSteps: [
      S('Given: \\(y=\\cos^{2}x=(\\cos x)^{2}\\). Strategy: chain rule for a power.', '\\(y=(\\cos x)^{2}\\)'),
      S(
        'Let \\(u=\\cos x\\). Then \\(y=u^{2}\\), so \\(y\'=2u\\,u\'=2\\cos x\\cdot(-\\sin x)\\).',
        '\\(y\'=2\\cos x(-\\sin x)\\)'
      ),
      S('So \\(y\'=-2\\cos x\\sin x\\) (also equal to \\(-\\sin 2x\\)).', '\\(y\'=-2\\cos x\\sin x\\)'),
      S('Final answer: \\(-2\\cos x\\sin x\\).', '\\(-2\\cos x\\sin x\\)'),
    ],
  },
  'y12a-6b-q8f': {
    solution: 'The correct answer is \\(3\\sin^{2}x\\cos x\\).',
    hint: 'Write \\(\\sin^{3}x=(\\sin x)^{3}\\) and use the chain rule.',
    solutionSteps: [
      S('Given: \\(y=\\sin^{3}x=(\\sin x)^{3}\\). Strategy: chain rule for a power.', '\\(y=(\\sin x)^{3}\\)'),
      S(
        'Let \\(u=\\sin x\\). Then \\(y=u^{3}\\), so \\(y\'=3u^{2}\\,u\'=3\\sin^{2}x\\cdot\\cos x\\).',
        '\\(y\'=3\\sin^{2}x\\cos x\\)'
      ),
      S('Final answer: \\(3\\sin^{2}x\\cos x\\).', '\\(3\\sin^{2}x\\cos x\\)'),
    ],
  },
  'y12a-6b-q8g': {
    solution: 'The correct answer is \\(2\\tan x\\sec^{2}x\\).',
    hint: 'Write \\(\\tan^{2}x=(\\tan x)^{2}\\) and use the chain rule.',
    solutionSteps: [
      S('Given: \\(y=\\tan^{2}x=(\\tan x)^{2}\\). Strategy: chain rule for a power.', '\\(y=(\\tan x)^{2}\\)'),
      S(
        'Let \\(u=\\tan x\\). Then \\(y=u^{2}\\), so \\(y\'=2u\\,u\'=2\\tan x\\cdot\\sec^{2}x\\).',
        '\\(y\'=2\\tan x\\sec^{2}x\\)'
      ),
      S('Final answer: \\(2\\tan x\\sec^{2}x\\).', '\\(2\\tan x\\sec^{2}x\\)'),
    ],
  },
  'y12a-6b-q8h': {
    solution: 'The correct answer is \\(\\dfrac{\\sec^{2}\\sqrt{x}}{2\\sqrt{x}}\\).',
    hint: 'Chain rule: outer tan, inner \\(\\sqrt{x}\\).',
    solutionSteps: [
      S('Given: \\(y=\\tan\\sqrt{x}\\). Strategy: chain rule with \\(u=\\sqrt{x}\\).', '\\(y=\\tan\\sqrt{x}\\)'),
      S(
        'Then \\(u\'=\\dfrac{1}{2\\sqrt{x}}\\) and \\(y\'=\\sec^{2}u\\cdot u\'=\\sec^{2}\\sqrt{x}\\cdot\\dfrac{1}{2\\sqrt{x}}\\).',
        '\\(y\'=\\dfrac{\\sec^{2}\\sqrt{x}}{2\\sqrt{x}}\\)'
      ),
      S(
        'Final answer: \\(\\dfrac{\\sec^{2}\\sqrt{x}}{2\\sqrt{x}}\\).',
        '\\(\\dfrac{\\sec^{2}\\sqrt{x}}{2\\sqrt{x}}\\)'
      ),
    ],
  },
};

// q2 series — build programmatically with real detail
const Q2 = {
  'y12a-6b-q2a': {
    y: '\\sin 2\\pi x',
    steps: (A) => [
      S('Given: \\(y=\\sin 2\\pi x\\). Strategy: chain rule with linear angle \\(2\\pi x\\).', '\\(y=\\sin 2\\pi x\\)'),
      S(
        'Let \\(u=2\\pi x\\). Then \\(u\'=2\\pi\\) and \\(y\'=\\cos u\\cdot u\'=2\\pi\\cos 2\\pi x\\).',
        A
      ),
      S(`Final answer: ${A}.`, A),
    ],
  },
  'y12a-6b-q2b': {
    y: '\\tan\\dfrac{\\pi}{2}x',
    steps: (A) => [
      S(
        'Given: \\(y=\\tan\\!\\left(\\dfrac{\\pi}{2}x\\right)\\). Strategy: chain rule.',
        '\\(y=\\tan\\!\\left(\\dfrac{\\pi}{2}x\\right)\\)'
      ),
      S(
        'Let \\(u=\\dfrac{\\pi}{2}x\\). Then \\(u\'=\\dfrac{\\pi}{2}\\) and \\(y\'=\\sec^{2}u\\cdot u\'\\).',
        A
      ),
      S(`Final answer: ${A}.`, A),
    ],
  },
  'y12a-6b-q2c': {
    y: '3\\sin x+\\cos 5x',
    steps: (A) => [
      S('Given: \\(y=3\\sin x+\\cos 5x\\). Strategy: differentiate term by term.', '\\(y=3\\sin x+\\cos 5x\\)'),
      S(
        'First term: \\(3\\cos x\\). Second: \\(-\\sin 5x\\cdot 5=-5\\sin 5x\\).',
        '\\(3\\cos x-5\\sin 5x\\)'
      ),
      S(`Final answer: ${A}.`, A),
    ],
  },
  'y12a-6b-q2d': {
    y: '4\\sin\\pi x+3\\cos\\pi x',
    steps: (A) => [
      S(
        'Given: \\(y=4\\sin\\pi x+3\\cos\\pi x\\). Strategy: term by term with chain factor \\(\\pi\\).',
        '\\(y=4\\sin\\pi x+3\\cos\\pi x\\)'
      ),
      S(
        'First: \\(4\\cos\\pi x\\cdot\\pi=4\\pi\\cos\\pi x\\). Second: \\(3(-\\sin\\pi x)\\cdot\\pi=-3\\pi\\sin\\pi x\\).',
        A
      ),
      S(`Final answer: ${A}.`, A),
    ],
  },
  'y12a-6b-q2e': {
    y: '\\sin(2x-1)',
    steps: (A) => [
      S('Given: \\(y=\\sin(2x-1)\\). Strategy: chain rule with \\(u=2x-1\\).', '\\(y=\\sin(2x-1)\\)'),
      S('Then \\(u\'=2\\) and \\(y\'=\\cos(2x-1)\\cdot 2=2\\cos(2x-1)\\).', A),
      S(`Final answer: ${A}.`, A),
    ],
  },
  'y12a-6b-q2f': {
    y: '\\tan(1+3x)',
    steps: (A) => [
      S('Given: \\(y=\\tan(1+3x)\\). Strategy: chain rule with \\(u=1+3x\\).', '\\(y=\\tan(1+3x)\\)'),
      S('Then \\(u\'=3\\) and \\(y\'=\\sec^{2}(1+3x)\\cdot 3=3\\sec^{2}(1+3x)\\).', A),
      S(`Final answer: ${A}.`, A),
    ],
  },
  'y12a-6b-q2g': {
    y: '2\\cos(1-x)',
    steps: (A) => [
      S('Given: \\(y=2\\cos(1-x)\\). Strategy: constant multiple and chain rule.', '\\(y=2\\cos(1-x)\\)'),
      S(
        'Inner: \\(\\dfrac{d}{dx}\\cos(1-x)=-\\sin(1-x)\\cdot(-1)=\\sin(1-x)\\). Then multiply by 2.',
        A
      ),
      S(`Final answer: ${A}.`, A),
    ],
  },
  'y12a-6b-q2h': {
    y: '\\cos(5x+4)',
    steps: (A) => [
      S('Given: \\(y=\\cos(5x+4)\\). Strategy: chain rule with \\(u=5x+4\\).', '\\(y=\\cos(5x+4)\\)'),
      S('Then \\(u\'=5\\) and \\(y\'=-\\sin(5x+4)\\cdot 5=-5\\sin(5x+4)\\).', A),
      S(`Final answer: ${A}.`, A),
    ],
  },
  'y12a-6b-q2i': {
    y: '7\\sin(2-3x)',
    steps: (A) => [
      S('Given: \\(y=7\\sin(2-3x)\\). Strategy: constant multiple and chain rule.', '\\(y=7\\sin(2-3x)\\)'),
      S(
        'Inner: \\(\\dfrac{d}{dx}\\sin(2-3x)=\\cos(2-3x)\\cdot(-3)=-3\\cos(2-3x)\\). Multiply by 7: \\(-21\\cos(2-3x)\\).',
        A
      ),
      S(`Final answer: ${A}.`, A),
    ],
  },
  'y12a-6b-q2j': {
    y: '10\\tan(10-x)',
    steps: (A) => [
      S('Given: \\(y=10\\tan(10-x)\\). Strategy: constant multiple and chain rule.', '\\(y=10\\tan(10-x)\\)'),
      S(
        'Inner: \\(\\dfrac{d}{dx}\\tan(10-x)=\\sec^{2}(10-x)\\cdot(-1)=-\\sec^{2}(10-x)\\). Multiply by 10.',
        A
      ),
      S(`Final answer: ${A}.`, A),
    ],
  },
  'y12a-6b-q2k': {
    y: '6\\sin\\!\\left(\\dfrac{x+1}{2}\\right)',
    steps: (A) => [
      S(
        'Given: \\(y=6\\sin\\!\\left(\\dfrac{x+1}{2}\\right)\\). Strategy: constant multiple and chain rule.',
        '\\(y=6\\sin\\!\\left(\\dfrac{x+1}{2}\\right)\\)'
      ),
      S(
        'Inner derivative of \\(\\dfrac{x+1}{2}\\) is \\(\\dfrac{1}{2}\\). So factor is \\(6\\cdot\\cos(\\cdots)\\cdot\\dfrac{1}{2}=3\\cos\\!\\left(\\dfrac{x+1}{2}\\right)\\).',
        A
      ),
      S(`Final answer: ${A}.`, A),
    ],
  },
  'y12a-6b-q2l': {
    y: '15\\cos\\!\\left(\\dfrac{2x+1}{5}\\right)',
    steps: (A) => [
      S(
        'Given: \\(y=15\\cos\\!\\left(\\dfrac{2x+1}{5}\\right)\\). Strategy: constant multiple and chain rule.',
        '\\(y=15\\cos\\!\\left(\\dfrac{2x+1}{5}\\right)\\)'
      ),
      S(
        'Inner derivative of \\(\\dfrac{2x+1}{5}\\) is \\(\\dfrac{2}{5}\\). So \\(y\'=15\\left(-\\sin(\\cdots)\\right)\\cdot\\dfrac{2}{5}=-6\\sin\\!\\left(\\dfrac{2x+1}{5}\\right)\\).',
        A
      ),
      S(`Final answer: ${A}.`, A),
    ],
  },
};

(async () => {
  // Load current answers for q2 from FS
  for (const id of Object.keys(Q2)) {
    const d = (await db.collection('questions').doc(id).get()).data();
    if (!d) continue;
    const opts = d.opts || (d.options || []).map((o) => o.text);
    const i = Number(d.a != null ? d.a : d.answer);
    const ans = opts[i];
    if (!ans) continue;
    const A = ans.includes('\\(') ? ans : `\\(${ans}\\)`;
    PATCH[id] = {
      solution: `The correct answer is ${A}.`,
      solutionSteps: Q2[id].steps(A),
      graphData: null,
    };
  }

  // also fix q3c, q3d if thin
  const more = ['y12a-6b-q3c', 'y12a-6b-q3d', 'y12a-6b-q3d_amp'];
  // handled if needed below by scanning

  const seedPath = path.join(__dirname, '../../src/constants/seedYear12aCh6BQuestions.js');
  delete require.cache[require.resolve(seedPath)];
  const list = require(seedPath).Y12A_CH6B_QUESTIONS;

  let n = 0;
  for (const [id, patch] of Object.entries(PATCH)) {
    const steps = (patch.solutionSteps || []).map((s) => ({ ...s, graphData: null }));
    const payload = {
      ...patch,
      solutionSteps: steps,
      graphData: null,
      origin: 'seed',
      updatedAt: FieldValue.serverTimestamp(),
    };
    if (patch.opts) {
      payload.opts = patch.opts;
      payload.options = patch.opts.map((text) => ({ text, imageUrl: null }));
      payload.a = patch.a;
      payload.answer = String(patch.a);
    }
    await db.collection('questions').doc(id).set(payload, { merge: true });
    await db.collection('questions').doc(id).update({ graphData: null }).catch(() => {});

    const q = list.find((x) => x.id === id);
    if (q) {
      q.solutionSteps = steps;
      q.solution = patch.solution;
      q.graphData = null;
      if (patch.hint) q.hint = patch.hint;
      if (patch.opts) {
        q.opts = patch.opts;
        q.options = payload.options;
        q.a = patch.a;
        q.answer = String(patch.a);
      }
    }
    n++;
    console.log('patched', id);
  }

  writeFileSync(
    seedPath,
    'export const Y12A_CH6B_QUESTIONS = ' +
      JSON.stringify(list, null, 2) +
      ';\n\nexport default Y12A_CH6B_QUESTIONS;\n'
  );

  // Scan remaining thin templates
  const snap = await db.collection('questions').where('topicId', '==', 'y12a-6B').get();
  let still = 0;
  for (const doc of snap.docs) {
    const q = doc.data();
    if (q.isActive === false) continue;
    const s = JSON.stringify(q.solutionSteps || []);
    if (
      /Given the function in the stem|Simplify signs and coefficients|Include constant factors in front/.test(
        s
      )
    ) {
      still++;
      console.log('STILL THIN', doc.id);
    }
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

  const d = (await db.collection('questions').doc('y12a-6b-q4d').get()).data();
  console.log('\n--- q4d preview ---');
  d.solutionSteps.forEach((s, i) =>
    console.log(`${i + 1}. ${s.explanation}\n   → ${s.workingOut}`)
  );
  console.log('patched', n, 'still thin', still, 'version', ver);
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
