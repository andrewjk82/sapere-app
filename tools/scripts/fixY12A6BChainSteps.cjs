/**
 * Hand-detailed chain-rule steps for composite exp/trig 6B questions.
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

/** id -> full patch */
const PATCH = {
  'y12a-6b-q11b': {
    // f = e^{sin 2x}
    solutionSteps: [
      S(
        'Given: \\(f(x) = e^{\\sin 2x}\\). This is a composition of three functions: exponential outside, sine in the middle, and linear \\(2x\\) inside. Use the chain rule from the outside in.',
        '\\(f(x) = e^{\\sin 2x}\\)'
      ),
      S(
        'Outer layer: write \\(f = e^{u}\\) with \\(u = \\sin 2x\\). The derivative of \\(e^{u}\\) is \\(e^{u}\\,u\'\\), so \\(f\'(x) = e^{\\sin 2x}\\cdot u\'\\).',
        '\\(f\' = e^{u}\\,u\',\\quad u = \\sin 2x\\)'
      ),
      S(
        'Middle layer: differentiate \\(u = \\sin 2x\\). Write \\(u = \\sin v\\) with \\(v = 2x\\). Then \\(u\' = \\cos v\\cdot v\' = \\cos 2x\\cdot 2 = 2\\cos 2x\\).',
        '\\(u\' = 2\\cos 2x\\)'
      ),
      S(
        'Combine: \\(f\'(x) = e^{\\sin 2x}\\cdot 2\\cos 2x = 2e^{\\sin 2x}\\cos 2x\\). A common slip is forgetting the factor 2 from \\(\\dfrac{d}{dx}(2x)\\), or writing \\(\\sin 2x\\) instead of \\(\\cos 2x\\).',
        '\\(f\'(x) = 2e^{\\sin 2x}\\cos 2x\\)'
      ),
      S('Final answer: \\(2e^{\\sin 2x}\\cos 2x\\).', '\\(2e^{\\sin 2x}\\cos 2x\\)'),
    ],
    solution: 'The correct answer is \\(2e^{\\sin 2x}\\cos 2x\\).',
    hint: 'Chain rule in layers: \\(\\dfrac{d}{dx}e^{u}=e^{u}u\'\\) with \\(u=\\sin 2x\\), and \\(\\dfrac{d}{dx}\\sin 2x=2\\cos 2x\\).',
  },

  'y12a-6b-q11a': {
    // f = e^{tan x}
    solutionSteps: [
      S(
        'Given: \\(f(x) = e^{\\tan x}\\). Composition: exponential outside, tangent inside. Use the chain rule.',
        '\\(f(x) = e^{\\tan x}\\)'
      ),
      S(
        'Write \\(f = e^{u}\\) with \\(u = \\tan x\\). Then \\(f\' = e^{u}\\,u\' = e^{\\tan x}\\,u\'\\).',
        '\\(f\' = e^{\\tan x}\\,u\',\\quad u = \\tan x\\)'
      ),
      S(
        'Differentiate the inside: \\(u\' = \\sec^{2}x\\) (standard form).',
        '\\(u\' = \\sec^{2}x\\)'
      ),
      S(
        'Therefore \\(f\'(x) = e^{\\tan x}\\sec^{2}x\\). A common slip is writing \\(\\sec x\\) instead of \\(\\sec^{2}x\\), or forgetting to multiply by the exponential factor.',
        '\\(f\'(x) = e^{\\tan x}\\sec^{2}x\\)'
      ),
      S('Final answer: \\(e^{\\tan x}\\sec^{2}x\\).', '\\(e^{\\tan x}\\sec^{2}x\\)'),
    ],
    solution: 'The correct answer is \\(e^{\\tan x}\\sec^{2}x\\).',
    hint: 'Chain rule: \\(\\dfrac{d}{dx}e^{\\tan x} = e^{\\tan x}\\cdot\\sec^{2}x\\).',
  },

  'y12a-6b-q11c': {
    // f = sin(e^{2x}) — already improved once; make chain fully explicit
    solutionSteps: [
      S(
        'Given: \\(f(x) = \\sin(e^{2x})\\). Composition: sine outside, exponential in the middle, linear \\(2x\\) inside.',
        '\\(f(x) = \\sin(e^{2x})\\)'
      ),
      S(
        'Outer layer: write \\(f = \\sin u\\) with \\(u = e^{2x}\\). Then \\(f\' = \\cos u\\cdot u\' = \\cos(e^{2x})\\,u\'\\).',
        '\\(f\' = \\cos(e^{2x})\\,u\',\\quad u = e^{2x}\\)'
      ),
      S(
        'Inside: differentiate \\(u = e^{2x}\\). Write \\(u = e^{v}\\) with \\(v = 2x\\). Then \\(u\' = e^{v}\\cdot v\' = e^{2x}\\cdot 2 = 2e^{2x}\\).',
        '\\(u\' = 2e^{2x}\\)'
      ),
      S(
        'Combine: \\(f\'(x) = \\cos(e^{2x})\\cdot 2e^{2x} = 2e^{2x}\\cos(e^{2x})\\). A common slip is forgetting the factor 2, or writing \\(\\sin\\) instead of \\(\\cos\\).',
        '\\(f\'(x) = 2e^{2x}\\cos(e^{2x})\\)'
      ),
      S('Final answer: \\(2e^{2x}\\cos(e^{2x})\\).', '\\(2e^{2x}\\cos(e^{2x})\\)'),
    ],
    solution: 'The correct answer is \\(2e^{2x}\\cos(e^{2x})\\).',
    hint: 'Chain rule: \\(\\dfrac{d}{dx}\\sin(e^{2x}) = \\cos(e^{2x})\\cdot 2e^{2x}\\).',
  },

  'y12a-6b-q11d': {
    // log_e(cos x) → -tan x
    solutionSteps: [
      S(
        'Given: \\(f(x) = \\log_e(\\cos x) = \\ln(\\cos x)\\) (where \\(\\cos x > 0\\)). Strategy: chain rule for natural log.',
        '\\(f(x) = \\ln(\\cos x)\\)'
      ),
      S(
        'Rule: \\(\\dfrac{d}{dx}\\ln u = \\dfrac{1}{u}\\,u\'\\). Let \\(u = \\cos x\\), so \\(u\' = -\\sin x\\).',
        '\\(u = \\cos x,\\quad u\' = -\\sin x\\)'
      ),
      S(
        'Therefore \\(f\'(x) = \\dfrac{1}{\\cos x}\\cdot(-\\sin x) = -\\dfrac{\\sin x}{\\cos x}\\).',
        '\\(f\'(x) = -\\dfrac{\\sin x}{\\cos x}\\)'
      ),
      S(
        'Simplify: \\(-\\dfrac{\\sin x}{\\cos x} = -\\tan x\\). A common slip is dropping the minus sign from \\(\\dfrac{d}{dx}\\cos x\\).',
        '\\(f\'(x) = -\\tan x\\)'
      ),
      S('Final answer: \\(-\\tan x\\).', '\\(-\\tan x\\)'),
    ],
    solution: 'The correct answer is \\(-\\tan x\\).',
    hint: 'Use \\(\\dfrac{d}{dx}\\ln u = \\dfrac{u\'}{u}\\) with \\(u=\\cos x\\).',
  },

  'y12a-6b-q11f': {
    // log_e(cos 4x) → -4 tan 4x
    solutionSteps: [
      S(
        'Given: \\(f(x) = \\log_e(\\cos 4x) = \\ln(\\cos 4x)\\). Strategy: chain rule for \\(\\ln u\\) with a composite inside.',
        '\\(f(x) = \\ln(\\cos 4x)\\)'
      ),
      S(
        'Let \\(u = \\cos 4x\\). Then \\(f\' = \\dfrac{1}{u}\\,u\' = \\dfrac{1}{\\cos 4x}\\,u\'\\).',
        '\\(u = \\cos 4x\\)'
      ),
      S(
        'Differentiate the inside: \\(u = \\cos v\\) with \\(v = 4x\\). So \\(u\' = -\\sin v\\cdot v\' = -\\sin 4x\\cdot 4 = -4\\sin 4x\\).',
        '\\(u\' = -4\\sin 4x\\)'
      ),
      S(
        'Combine: \\(f\'(x) = \\dfrac{1}{\\cos 4x}\\cdot(-4\\sin 4x) = -4\\dfrac{\\sin 4x}{\\cos 4x} = -4\\tan 4x\\).',
        '\\(f\'(x) = -4\\tan 4x\\)'
      ),
      S('Final answer: \\(-4\\tan 4x\\).', '\\(-4\\tan 4x\\)'),
    ],
    solution: 'The correct answer is \\(-4\\tan 4x\\).',
    hint: 'Chain rule twice: log, then cos 4x (factor of 4).',
  },
};

(async () => {
  let batch = db.batch();
  let n = 0;
  const seedPath = path.join(__dirname, '../../src/constants/seedYear12aCh6BQuestions.js');
  delete require.cache[require.resolve(seedPath)];
  const mod = require(seedPath);
  const list = mod.Y12A_CH6B_QUESTIONS;

  for (const [id, patch] of Object.entries(PATCH)) {
    batch.set(
      db.collection('questions').doc(id),
      {
        ...patch,
        updatedAt: FieldValue.serverTimestamp(),
        origin: 'seed',
      },
      { merge: true }
    );
    n++;
    const q = list.find((x) => x.id === id);
    if (q) Object.assign(q, patch);
    console.log('patched', id, 'steps', patch.solutionSteps.length);
  }
  await batch.commit();

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

  const d = (await db.collection('questions').doc('y12a-6b-q11b').get()).data();
  console.log('\n--- q11b preview ---');
  d.solutionSteps.forEach((s, i) =>
    console.log(`${i + 1}. ${s.explanation.slice(0, 100)}\n   → ${s.workingOut}`)
  );
  console.log('version', ver);
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
