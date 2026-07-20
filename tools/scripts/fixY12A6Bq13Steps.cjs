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

const PATCH = {
  'y12a-6b-q13a': {
    opts: [
      '\\(\\dfrac{\\cos x}{(1 + \\sin x)^{2}}\\)',
      '\\(-\\dfrac{(1 + \\sin x)^{2}}{\\cos x}\\)',
      '\\(-\\dfrac{1}{(1 + \\sin x)^{2}}\\)',
      '\\(-\\dfrac{\\cos x}{(1 + \\sin x)^{2}}\\)',
    ],
    a: 3,
    answer: '3',
    solution: 'The correct answer is \\(-\\dfrac{\\cos x}{(1 + \\sin x)^{2}}\\).',
    hint: 'Rewrite as \\((1+\\sin x)^{-1}\\) and use the chain rule, or use the quotient rule.',
    solutionSteps: [
      S(
        'Given: \\(f(x) = \\dfrac{1}{1 + \\sin x}\\). Strategy: rewrite as a power and use the chain rule (or use the quotient rule).',
        '\\(f(x) = (1 + \\sin x)^{-1}\\)'
      ),
      S(
        'Chain rule for powers: \\(\\dfrac{d}{dx}[u^{n}] = n u^{n-1} u\'\\). Here \\(u = 1 + \\sin x\\) and \\(n = -1\\), so \\(u\' = \\cos x\\).',
        '\\(u = 1 + \\sin x,\\quad u\' = \\cos x\\)'
      ),
      S(
        'Differentiate: \\(f\'(x) = -1\\cdot(1 + \\sin x)^{-2}\\cdot\\cos x = -\\dfrac{\\cos x}{(1 + \\sin x)^{2}}\\).',
        '\\(f\'(x) = -\\dfrac{\\cos x}{(1 + \\sin x)^{2}}\\)'
      ),
      S(
        'Alternatively by quotient rule with \\(u = 1\\), \\(v = 1 + \\sin x\\): \\(f\' = \\dfrac{0\\cdot v - 1\\cdot\\cos x}{v^{2}} = -\\dfrac{\\cos x}{(1 + \\sin x)^{2}}\\) (same result).',
        '\\(f\'(x) = -\\dfrac{\\cos x}{(1 + \\sin x)^{2}}\\)'
      ),
      S(
        'Final answer: \\(-\\dfrac{\\cos x}{(1 + \\sin x)^{2}}\\). A common slip is forgetting the minus from the power \\(-1\\), or missing the chain factor \\(\\cos x\\).',
        '\\(-\\dfrac{\\cos x}{(1 + \\sin x)^{2}}\\)'
      ),
    ],
  },

  'y12a-6b-q13b': {
    opts: [
      '\\(-\\dfrac{1}{1 + \\cos x}\\)',
      '\\(1 + \\cos x\\)',
      '\\(\\dfrac{1}{1 + \\cos x}\\)',
      '\\(\\dfrac{1}{1 + \\sin x}\\)',
    ],
    a: 2,
    answer: '2',
    solution: 'The correct answer is \\(\\dfrac{1}{1 + \\cos x}\\).',
    hint: 'Use the quotient rule with \\(u = \\sin x\\) and \\(v = 1 + \\cos x\\), then simplify.',
    solutionSteps: [
      S(
        'Given: \\(f(x) = \\dfrac{\\sin x}{1 + \\cos x}\\). Strategy: quotient rule \\(\\left(\\dfrac{u}{v}\\right)\' = \\dfrac{u\'v - uv\'}{v^{2}}\\).',
        '\\(u = \\sin x,\\quad v = 1 + \\cos x\\)'
      ),
      S(
        'Differentiate: \\(u\' = \\cos x\\) and \\(v\' = -\\sin x\\).',
        '\\(u\' = \\cos x,\\quad v\' = -\\sin x\\)'
      ),
      S(
        'Substitute: \\(f\'(x) = \\dfrac{\\cos x(1 + \\cos x) - (\\sin x)(-\\sin x)}{(1 + \\cos x)^{2}} = \\dfrac{\\cos x + \\cos^{2}x + \\sin^{2}x}{(1 + \\cos x)^{2}}\\).',
        '\\(f\' = \\dfrac{\\cos x + \\cos^{2}x + \\sin^{2}x}{(1 + \\cos x)^{2}}\\)'
      ),
      S(
        'Use \\(\\sin^{2}x + \\cos^{2}x = 1\\): numerator becomes \\(\\cos x + 1\\). So \\(f\'(x) = \\dfrac{1 + \\cos x}{(1 + \\cos x)^{2}} = \\dfrac{1}{1 + \\cos x}\\) (for \\(1 + \\cos x \\neq 0\\)).',
        '\\(f\'(x) = \\dfrac{1}{1 + \\cos x}\\)'
      ),
      S(
        'Final answer: \\(\\dfrac{1}{1 + \\cos x}\\). A common slip is stopping before cancelling the factor \\(1 + \\cos x\\).',
        '\\(\\dfrac{1}{1 + \\cos x}\\)'
      ),
    ],
  },

  'y12a-6b-q13c': {
    opts: [
      '\\(\\dfrac{1}{1 + \\sin x}\\)',
      '\\(-(1 + \\sin x)\\)',
      '\\(-\\dfrac{1}{1 - \\sin x}\\)',
      '\\(-\\dfrac{1}{1 + \\sin x}\\)',
    ],
    a: 3,
    answer: '3',
    solution: 'The correct answer is \\(-\\dfrac{1}{1 + \\sin x}\\).',
    hint: 'Quotient rule, or rewrite as \\(\\sec x - \\tan x\\) and differentiate.',
    solutionSteps: [
      S(
        'Given: \\(f(x) = \\dfrac{1 - \\sin x}{\\cos x}\\). Strategy: quotient rule, or split into two fractions.',
        '\\(f(x) = \\dfrac{1 - \\sin x}{\\cos x}\\)'
      ),
      S(
        'Split: \\(f(x) = \\dfrac{1}{\\cos x} - \\dfrac{\\sin x}{\\cos x} = \\sec x - \\tan x\\).',
        '\\(f(x) = \\sec x - \\tan x\\)'
      ),
      S(
        'Differentiate standard forms: \\(\\dfrac{d}{dx}\\sec x = \\sec x\\tan x\\) and \\(\\dfrac{d}{dx}\\tan x = \\sec^{2}x\\).',
        '\\(f\'(x) = \\sec x\\tan x - \\sec^{2}x\\)'
      ),
      S(
        'Factor: \\(f\'(x) = \\sec x(\\tan x - \\sec x)\\). Equivalently, after algebra this simplifies to \\(-\\dfrac{1}{1 + \\sin x}\\).',
        '\\(f\'(x) = \\sec x\\tan x - \\sec^{2}x\\)'
      ),
      S(
        'Check by quotient rule: \\(u = 1 - \\sin x\\), \\(v = \\cos x\\) gives the same simplified result \\(-\\dfrac{1}{1 + \\sin x}\\).',
        '\\(f\'(x) = -\\dfrac{1}{1 + \\sin x}\\)'
      ),
      S('Final answer: \\(-\\dfrac{1}{1 + \\sin x}\\).', '\\(-\\dfrac{1}{1 + \\sin x}\\)'),
    ],
  },

  'y12a-6b-q13d': {
    opts: [
      '\\(\\dfrac{1}{(\\cos x + \\sin x)^{2}}\\)',
      '\\(-(\\cos x + \\sin x)^{2}\\)',
      '\\(-\\dfrac{1}{(\\cos x + \\sin x)^{2}}\\)',
      '\\(-\\dfrac{1}{(\\sin x)^{2}}\\)',
    ],
    a: 2,
    answer: '2',
    solution: 'The correct answer is \\(-\\dfrac{1}{(\\cos x + \\sin x)^{2}}\\).',
    hint: 'Use the quotient rule with \\(u = \\cos x\\) and \\(v = \\cos x + \\sin x\\).',
    solutionSteps: [
      S(
        'Given: \\(f(x) = \\dfrac{\\cos x}{\\cos x + \\sin x}\\). Strategy: quotient rule.',
        '\\(u = \\cos x,\\quad v = \\cos x + \\sin x\\)'
      ),
      S(
        'Differentiate: \\(u\' = -\\sin x\\) and \\(v\' = -\\sin x + \\cos x\\).',
        '\\(u\' = -\\sin x,\\quad v\' = \\cos x - \\sin x\\)'
      ),
      S(
        'Quotient rule: \\(f\'(x) = \\dfrac{(-\\sin x)v - u(\\cos x - \\sin x)}{v^{2}}\\).',
        '\\(f\' = \\dfrac{(-\\sin x)(\\cos x + \\sin x) - \\cos x(\\cos x - \\sin x)}{(\\cos x + \\sin x)^{2}}\\)'
      ),
      S(
        'Expand the numerator: \\(-\\sin x\\cos x - \\sin^{2}x - \\cos^{2}x + \\cos x\\sin x = -(\\sin^{2}x + \\cos^{2}x) = -1\\).',
        '\\(\\text{numerator} = -1\\)'
      ),
      S(
        'Therefore \\(f\'(x) = \\dfrac{-1}{(\\cos x + \\sin x)^{2}} = -\\dfrac{1}{(\\cos x + \\sin x)^{2}}\\).',
        '\\(f\'(x) = -\\dfrac{1}{(\\cos x + \\sin x)^{2}}\\)'
      ),
      S(
        'Final answer: \\(-\\dfrac{1}{(\\cos x + \\sin x)^{2}}\\). A common slip is an algebra error in the numerator expansion.',
        '\\(-\\dfrac{1}{(\\cos x + \\sin x)^{2}}\\)'
      ),
    ],
  },
};

(async () => {
  const seedPath = path.join(__dirname, '../../src/constants/seedYear12aCh6BQuestions.js');
  delete require.cache[require.resolve(seedPath)];
  const mod = require(seedPath);
  const list = mod.Y12A_CH6B_QUESTIONS;

  for (const [id, patch] of Object.entries(PATCH)) {
    const payload = {
      ...patch,
      options: patch.opts.map((text) => ({ text, imageUrl: null })),
      updatedAt: FieldValue.serverTimestamp(),
      origin: 'seed',
    };
    await db.collection('questions').doc(id).set(payload, { merge: true });
    const q = list.find((x) => x.id === id);
    if (q) {
      Object.assign(q, {
        opts: patch.opts,
        options: payload.options,
        a: patch.a,
        answer: patch.answer,
        solution: patch.solution,
        solutionSteps: patch.solutionSteps,
        hint: patch.hint,
      });
    }
    console.log('fixed', id, 'steps', patch.solutionSteps.length);
  }

  writeFileSync(
    seedPath,
    'export const Y12A_CH6B_QUESTIONS = ' +
      JSON.stringify(list, null, 2) +
      ';\n\nexport default Y12A_CH6B_QUESTIONS;\n'
  );

  const ver = Date.now();
  await db.collection('sync_meta').doc('questions').set(
    { version: ver, membershipVersion: ver, updatedAt: FieldValue.serverTimestamp() },
    { merge: true }
  );

  const d = (await db.collection('questions').doc('y12a-6b-q13a').get()).data();
  console.log('\n--- q13a ---');
  d.solutionSteps.forEach((s, i) =>
    console.log(`${i + 1}. ${s.explanation.slice(0, 90)}\n   → ${s.workingOut}`)
  );
  console.log('version', ver);
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
