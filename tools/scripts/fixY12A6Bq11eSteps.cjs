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

const opts = [
  '\\(\\cot x\\)',
  '\\(\\cot x + 1\\)',
  '\\(\\tan x\\)',
  '\\(-\\tan x\\)',
];

const solutionSteps = [
  S(
    'Given: \\(f(x) = \\log_e(\\sin x)\\). Why start here? The expression is a composition of the natural logarithm and sine, so we cannot differentiate term-by-term. What we will use is the chain rule for natural log: if \\(f = \\ln u\\) with \\(u > 0\\), then \\(f\' = \\dfrac{1}{u}\\,u\'\\). Note that \\(\\log_e\\) means the same as \\(\\ln\\). A common slip is treating \\(\\log_e(\\sin x)\\) as if the derivative of log were simply \\(\\dfrac{1}{\\sin x}\\) without multiplying by the derivative of the inside.',
    '\\(f(x) = \\ln(\\sin x)\\)'
  ),
  S(
    'Set the inside function carefully: let \\(u = \\sin x\\) (requiring \\(\\sin x > 0\\) for the real logarithm). Why this substitution? It separates the outer log from the inner trig so each piece has a standard derivative. What: differentiate the inside using the standard form \\(\\dfrac{d}{dx}\\sin x = \\cos x\\). This \\(u\'\\) will be multiplied by \\(\\dfrac{1}{u}\\) in the next step.',
    '\\(u = \\sin x,\\quad u\' = \\cos x\\)'
  ),
  S(
    'Apply the log chain rule fully: \\(f\'(x) = \\dfrac{1}{u}\\cdot u\' = \\dfrac{1}{\\sin x}\\cdot\\cos x = \\dfrac{\\cos x}{\\sin x}\\). Why write it as a single fraction? That form matches a standard reciprocal identity. A common mistake is stopping at \\(\\dfrac{1}{\\sin x}\\) (forgetting \\(u\'\\)), or writing \\(\\dfrac{\\sin x}{\\cos x}\\) by inverting the fraction.',
    '\\(f\'(x) = \\dfrac{\\cos x}{\\sin x}\\)'
  ),
  S(
    'Simplify with the identity \\(\\dfrac{\\cos x}{\\sin x} = \\cot x\\). Why name it? The options use \\(\\cot x\\) rather than the fraction form. What this means: the derivative of \\(\\ln(\\sin x)\\) is cot x wherever the log is defined. Connect: this matches option A and is the natural analogue of \\(\\dfrac{d}{dx}\\ln(\\cos x) = -\\tan x\\).',
    '\\(f\'(x) = \\cot x\\)'
  ),
  S(
    'Final answer: \\(\\cot x\\). In context, this is the gradient of \\(y = \\log_e(\\sin x)\\) for \\(\\sin x > 0\\). Check: at a value where \\(\\sin x\\) increases, cot x is positive near acute angles, which is consistent. Reject distractors such as \\(\\tan x\\) (inverted ratio) or \\(-\\tan x\\) (that is for \\(\\ln(\\cos x)\\)).',
    '\\(\\cot x\\)'
  ),
];

(async () => {
  const payload = {
    question: 'Differentiate: \\( f(x) = \\log_e(\\sin x) \\)',
    opts,
    options: opts.map((text) => ({ text, imageUrl: null })),
    a: 0,
    answer: '0',
    solution: 'The correct answer is \\(\\cot x\\).',
    solutionSteps,
    hint:
      'Use the chain rule: \\(\\dfrac{d}{dx}\\ln u = \\dfrac{u\'}{u}\\) with \\(u = \\sin x\\), then simplify to \\(\\cot x\\).',
    graphData: null,
    isNew: true,
    origin: 'seed',
    updatedAt: FieldValue.serverTimestamp(),
  };

  await db.collection('questions').doc('y12a-6b-q11e').set(payload, { merge: true });
  await db.collection('questions').doc('y12a-6b-q11e').update({ graphData: null });

  const seedPath = path.join(__dirname, '../../src/constants/seedYear12aCh6BQuestions.js');
  delete require.cache[require.resolve(seedPath)];
  const list = require(seedPath).Y12A_CH6B_QUESTIONS;
  const q = list.find((x) => x.id === 'y12a-6b-q11e');
  if (q) {
    Object.assign(q, {
      opts,
      options: payload.options,
      a: 0,
      answer: '0',
      solution: payload.solution,
      solutionSteps,
      hint: payload.hint,
      graphData: null,
      isNew: true,
    });
    writeFileSync(
      seedPath,
      'export const Y12A_CH6B_QUESTIONS = ' +
        JSON.stringify(list, null, 2) +
        ';\n\nexport default Y12A_CH6B_QUESTIONS;\n'
    );
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

  const d = (await db.collection('questions').doc('y12a-6b-q11e').get()).data();
  console.log('a=', d.a, 'opts[a]=', d.opts[d.a]);
  d.solutionSteps.forEach((s, i) => {
    console.log('\n' + (i + 1) + '. ' + s.explanation.slice(0, 140));
    console.log('   → ' + s.workingOut);
  });
  console.log('\nversion', ver);
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
