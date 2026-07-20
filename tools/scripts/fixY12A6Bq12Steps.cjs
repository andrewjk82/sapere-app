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
  'y12a-6b-q12a': {
    // y = sin x cos x → cos²x - sin²x
    opts: [
      '\\(\\cos^{2}x + \\sin^{2}x\\)',
      '\\(\\cos x - \\sin x\\)',
      '\\(\\cos^{2}x - \\sin^{2}x\\)',
      '\\(2\\sin x\\cos x\\)',
    ],
    a: 2,
    answer: '2',
    solution: 'The correct answer is \\(\\cos^{2}x - \\sin^{2}x\\).',
    hint: 'Use the product rule with \\(u = \\sin x\\) and \\(v = \\cos x\\).',
    graphData: null,
    solutionSteps: [
      S(
        'Given: \\(y = \\sin x\\cos x\\). Strategy: product rule \\((uv)\' = u\'v + uv\'\\).',
        '\\(y = \\sin x\\,\\cos x\\)'
      ),
      S(
        'Set \\(u = \\sin x\\) and \\(v = \\cos x\\). Then \\(u\' = \\cos x\\) and \\(v\' = -\\sin x\\).',
        '\\(u\' = \\cos x,\\quad v\' = -\\sin x\\)'
      ),
      S(
        'Product rule: \\(y\' = \\cos x\\cdot\\cos x + \\sin x\\cdot(-\\sin x) = \\cos^{2}x - \\sin^{2}x\\).',
        '\\(y\' = \\cos^{2}x - \\sin^{2}x\\)'
      ),
      S(
        'Note: this is also equal to \\(\\cos 2x\\) by the double-angle identity. Final answer: \\(\\cos^{2}x - \\sin^{2}x\\).',
        '\\(\\cos^{2}x - \\sin^{2}x\\)'
      ),
    ],
  },

  'y12a-6b-q12b': {
    // y = sin² 7x → 14 sin 7x cos 7x
    opts: [
      '\\(-14\\sin 7x\\cos 7x\\)',
      '\\(14\\sin 7x\\)',
      '\\(14\\sin 7x\\cos 7x\\)',
      '\\(14\\sin^{2} 7x\\)',
    ],
    a: 2,
    answer: '2',
    solution: 'The correct answer is \\(14\\sin 7x\\cos 7x\\).',
    hint: 'Write as \\((\\sin 7x)^{2}\\) and use the chain rule twice.',
    graphData: null,
    solutionSteps: [
      S(
        'Given: \\(y = \\sin^{2} 7x = (\\sin 7x)^{2}\\). Strategy: chain rule for a power of a composite sine.',
        '\\(y = (\\sin 7x)^{2}\\)'
      ),
      S(
        'Outer power: if \\(y = u^{2}\\) with \\(u = \\sin 7x\\), then \\(y\' = 2u\\,u\'\\).',
        '\\(y\' = 2\\sin 7x\\cdot u\'\\)'
      ),
      S(
        'Differentiate the inside: \\(u = \\sin v\\) with \\(v = 7x\\). So \\(u\' = \\cos v\\cdot v\' = \\cos 7x\\cdot 7 = 7\\cos 7x\\).',
        '\\(u\' = 7\\cos 7x\\)'
      ),
      S(
        'Combine: \\(y\' = 2\\sin 7x\\cdot 7\\cos 7x = 14\\sin 7x\\cos 7x\\). A common slip is forgetting the factor 7 from \\(\\dfrac{d}{dx}(7x)\\).',
        '\\(y\' = 14\\sin 7x\\cos 7x\\)'
      ),
      S('Final answer: \\(14\\sin 7x\\cos 7x\\).', '\\(14\\sin 7x\\cos 7x\\)'),
    ],
  },

  'y12a-6b-q12c': {
    // y = cos^5 3x → -15 cos^4 3x sin 3x
    opts: [
      '\\(-15\\cos 3x\\sin 3x\\)',
      '\\(-15\\cos^{4} 3x\\,\\sin 3x\\)',
      '\\(-15\\sin^{4} 3x\\,\\sin 3x\\)',
      '\\(15\\cos^{4} 3x\\,\\sin 3x\\)',
    ],
    a: 1,
    answer: '1',
    solution: 'The correct answer is \\(-15\\cos^{4} 3x\\,\\sin 3x\\).',
    hint: 'Write as \\((\\cos 3x)^{5}\\). Chain rule: power, then cosine, then the 3 from \\(3x\\).',
    graphData: null,
    solutionSteps: [
      S(
        'Given: \\(y = \\cos^{5} 3x = (\\cos 3x)^{5}\\). Strategy: chain rule in layers — power outside, then cosine, then the linear angle \\(3x\\).',
        '\\(y = (\\cos 3x)^{5}\\)'
      ),
      S(
        'Outer power: let \\(u = \\cos 3x\\), so \\(y = u^{5}\\). Then \\(y\' = 5u^{4}\\,u\' = 5(\\cos 3x)^{4}\\,u\'\\).',
        '\\(y\' = 5\\cos^{4} 3x\\cdot u\'\\)'
      ),
      S(
        'Middle: differentiate \\(u = \\cos 3x\\). Let \\(v = 3x\\), so \\(u = \\cos v\\). Then \\(u\' = -\\sin v\\cdot v\' = -\\sin 3x\\cdot 3 = -3\\sin 3x\\).',
        '\\(u\' = -3\\sin 3x\\)'
      ),
      S(
        'Combine: \\(y\' = 5\\cos^{4} 3x\\cdot(-3\\sin 3x) = -15\\cos^{4} 3x\\,\\sin 3x\\).',
        '\\(y\' = -15\\cos^{4} 3x\\,\\sin 3x\\)'
      ),
      S(
        'Final answer: \\(-15\\cos^{4} 3x\\,\\sin 3x\\). A common slip is forgetting the factor 3, or missing the minus from the derivative of cosine.',
        '\\(-15\\cos^{4} 3x\\,\\sin 3x\\)'
      ),
    ],
  },

  'y12a-6b-q12d': {
    // y = (1 - cos 3x)^3 → 9(1-cos 3x)^2 sin 3x
    opts: [
      '\\(9(1 - \\cos 3x)^{2}\\cos 3x\\)',
      '\\(9(1 - \\cos 3x)\\sin 3x\\)',
      '\\(9(1 - \\cos 3x)^{2}\\sin 3x\\)',
      '\\(9(1 - \\sin 3x)^{2}\\sin 3x\\)',
    ],
    a: 2,
    answer: '2',
    solution: 'The correct answer is \\(9(1 - \\cos 3x)^{2}\\sin 3x\\).',
    hint: 'Chain rule: power of \\(1 - \\cos 3x\\), then differentiate the inside.',
    graphData: null,
    solutionSteps: [
      S(
        'Given: \\(y = (1 - \\cos 3x)^{3}\\). Strategy: chain rule with outer power 3.',
        '\\(y = (1 - \\cos 3x)^{3}\\)'
      ),
      S(
        'Let \\(u = 1 - \\cos 3x\\), so \\(y = u^{3}\\). Then \\(y\' = 3u^{2}\\,u\' = 3(1 - \\cos 3x)^{2}\\,u\'\\).',
        '\\(y\' = 3(1 - \\cos 3x)^{2}\\,u\'\\)'
      ),
      S(
        'Differentiate the inside: \\(u\' = 0 - (-\\sin 3x)\\cdot 3 = 3\\sin 3x\\) (chain rule on \\(\\cos 3x\\)).',
        '\\(u\' = 3\\sin 3x\\)'
      ),
      S(
        'Combine: \\(y\' = 3(1 - \\cos 3x)^{2}\\cdot 3\\sin 3x = 9(1 - \\cos 3x)^{2}\\sin 3x\\).',
        '\\(y\' = 9(1 - \\cos 3x)^{2}\\sin 3x\\)'
      ),
      S('Final answer: \\(9(1 - \\cos 3x)^{2}\\sin 3x\\).', '\\(9(1 - \\cos 3x)^{2}\\sin 3x\\)'),
    ],
  },

  'y12a-6b-q12e': {
    // y = sin 2x sin 4x → 2 cos 2x sin 4x + 4 sin 2x cos 4x
    opts: [
      '\\(-2\\cos 2x\\sin 4x + 4\\sin 2x\\cos 4x\\)',
      '\\(2\\cos 2x\\sin 4x - 4\\sin 2x\\cos 4x\\)',
      '\\(2\\cos 2x\\sin 4x + 4\\sin 2x\\cos 4x\\)',
      '\\(2\\sin 2x\\sin 4x + 4\\sin 2x\\sin 4x\\)',
    ],
    a: 2,
    answer: '2',
    solution: 'The correct answer is \\(2\\cos 2x\\sin 4x + 4\\sin 2x\\cos 4x\\).',
    hint: 'Product rule; each factor also needs a chain-rule factor (2 and 4).',
    graphData: null,
    solutionSteps: [
      S(
        'Given: \\(y = \\sin 2x\\,\\sin 4x\\). Strategy: product rule, and chain rule on each sine.',
        '\\(y = \\sin 2x\\,\\sin 4x\\)'
      ),
      S(
        'Set \\(u = \\sin 2x\\) and \\(v = \\sin 4x\\). Then \\(u\' = 2\\cos 2x\\) and \\(v\' = 4\\cos 4x\\).',
        '\\(u\' = 2\\cos 2x,\\quad v\' = 4\\cos 4x\\)'
      ),
      S(
        'Product rule: \\(y\' = u\'v + uv\' = (2\\cos 2x)(\\sin 4x) + (\\sin 2x)(4\\cos 4x)\\).',
        '\\(y\' = 2\\cos 2x\\sin 4x + 4\\sin 2x\\cos 4x\\)'
      ),
      S(
        'Final answer: \\(2\\cos 2x\\sin 4x + 4\\sin 2x\\cos 4x\\). A common slip is forgetting the chain factors 2 or 4.',
        '\\(2\\cos 2x\\sin 4x + 4\\sin 2x\\cos 4x\\)'
      ),
    ],
  },

  'y12a-6b-q12f': {
    // y = tan^3(5x-4) → 15 tan^2(5x-4) sec^2(5x-4)
    opts: [
      '\\(-15\\tan^{2}(5x-4)\\sec^{2}(5x-4)\\)',
      '\\(15\\tan^{2}(5x-4)\\sec(5x-4)\\)',
      '\\(15\\tan(5x-4)\\sec^{2}(5x-4)\\)',
      '\\(15\\tan^{2}(5x-4)\\sec^{2}(5x-4)\\)',
    ],
    a: 3,
    answer: '3',
    solution: 'The correct answer is \\(15\\tan^{2}(5x-4)\\sec^{2}(5x-4)\\).',
    hint: 'Write as \\([\\tan(5x-4)]^{3}\\). Chain: power, then tan, then factor 5.',
    graphData: null,
    solutionSteps: [
      S(
        'Given: \\(y = \\tan^{3}(5x - 4) = \\bigl(\\tan(5x - 4)\\bigr)^{3}\\). Strategy: chain rule in layers.',
        '\\(y = \\bigl(\\tan(5x - 4)\\bigr)^{3}\\)'
      ),
      S(
        'Outer power: let \\(u = \\tan(5x - 4)\\), so \\(y = u^{3}\\). Then \\(y\' = 3u^{2}\\,u\' = 3\\tan^{2}(5x - 4)\\,u\'\\).',
        '\\(y\' = 3\\tan^{2}(5x - 4)\\,u\'\\)'
      ),
      S(
        'Middle: \\(\\dfrac{d}{dx}\\tan w = \\sec^{2}w\\cdot w\'\\) with \\(w = 5x - 4\\). So \\(u\' = \\sec^{2}(5x - 4)\\cdot 5 = 5\\sec^{2}(5x - 4)\\).',
        '\\(u\' = 5\\sec^{2}(5x - 4)\\)'
      ),
      S(
        'Combine: \\(y\' = 3\\tan^{2}(5x - 4)\\cdot 5\\sec^{2}(5x - 4) = 15\\tan^{2}(5x - 4)\\sec^{2}(5x - 4)\\).',
        '\\(y\' = 15\\tan^{2}(5x - 4)\\sec^{2}(5x - 4)\\)'
      ),
      S(
        'Final answer: \\(15\\tan^{2}(5x - 4)\\sec^{2}(5x - 4)\\). A common slip is forgetting the factor 5 from \\(w\'\\).',
        '\\(15\\tan^{2}(5x - 4)\\sec^{2}(5x - 4)\\)'
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
      graphData: null,
      updatedAt: FieldValue.serverTimestamp(),
      origin: 'seed',
    };
    await db.collection('questions').doc(id).set(payload, { merge: true });
    await db.collection('questions').doc(id).update({ graphData: null });
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
        graphData: null,
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

  const d = (await db.collection('questions').doc('y12a-6b-q12c').get()).data();
  console.log('\n--- q12c ---');
  d.solutionSteps.forEach((s, i) =>
    console.log(`${i + 1}. ${s.explanation.slice(0, 95)}\n   → ${s.workingOut}`)
  );
  console.log('version', ver);
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
