/**
 * Hand-detailed steps for y12a-6b-q1a … q1u (standard forms).
 * Also clears unnecessary graphs.
 *
 *   node tools/scripts/fixY12A6Bq1Steps.cjs
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

/** id -> { solutionSteps, solution, hint?, graphData: null } */
const PATCH = {
  'y12a-6b-q1a': {
    solution: 'The correct answer is \\(\\cos x\\).',
    hint: 'Standard form: \\(\\dfrac{d}{dx}\\sin x = \\cos x\\).',
    solutionSteps: [
      S('Given: \\(y = \\sin x\\). Strategy: use the standard derivative of sine.', '\\(y = \\sin x\\)'),
      S('Standard form: \\(\\dfrac{d}{dx}\\sin x = \\cos x\\).', '\\(\\dfrac{d}{dx}\\sin x = \\cos x\\)'),
      S('Therefore \\(y\' = \\cos x\\).', '\\(y\' = \\cos x\\)'),
      S('Final answer: \\(\\cos x\\).', '\\(\\cos x\\)'),
    ],
  },
  'y12a-6b-q1b': {
    solution: 'The correct answer is \\(-\\sin x\\).',
    hint: 'Standard form: \\(\\dfrac{d}{dx}\\cos x = -\\sin x\\).',
    solutionSteps: [
      S('Given: \\(y = \\cos x\\). Strategy: use the standard derivative of cosine.', '\\(y = \\cos x\\)'),
      S('Standard form: \\(\\dfrac{d}{dx}\\cos x = -\\sin x\\).', '\\(\\dfrac{d}{dx}\\cos x = -\\sin x\\)'),
      S('Therefore \\(y\' = -\\sin x\\). Watch the minus sign.', '\\(y\' = -\\sin x\\)'),
      S('Final answer: \\(-\\sin x\\).', '\\(-\\sin x\\)'),
    ],
  },
  'y12a-6b-q1c': {
    solution: 'The correct answer is \\(\\sec^{2}x\\).',
    hint: 'Standard form: \\(\\dfrac{d}{dx}\\tan x = \\sec^{2}x\\).',
    solutionSteps: [
      S('Given: \\(y = \\tan x\\). Strategy: use the standard derivative of tangent.', '\\(y = \\tan x\\)'),
      S(
        'Standard form: \\(\\dfrac{d}{dx}\\tan x = \\sec^{2}x\\). (Equivalently, write \\(\\tan x = \\dfrac{\\sin x}{\\cos x}\\) and use the quotient rule to derive the same result.)',
        '\\(\\dfrac{d}{dx}\\tan x = \\sec^{2}x\\)'
      ),
      S('Therefore \\(y\' = \\sec^{2}x\\).', '\\(y\' = \\sec^{2}x\\)'),
      S('Final answer: \\(\\sec^{2}x\\).', '\\(\\sec^{2}x\\)'),
    ],
  },
  'y12a-6b-q1d': {
    solution: 'The correct answer is \\(2\\cos x\\).',
    hint: 'Constant multiple rule: \\(\\dfrac{d}{dx}\\bigl(2\\sin x\\bigr) = 2\\cos x\\).',
    solutionSteps: [
      S('Given: \\(y = 2\\sin x\\). Strategy: constant multiple of the sine standard form.', '\\(y = 2\\sin x\\)'),
      S('Standard form: \\(\\dfrac{d}{dx}\\sin x = \\cos x\\). Multiply by the constant 2.', '\\(\\dfrac{d}{dx}(2\\sin x) = 2\\cos x\\)'),
      S('Therefore \\(y\' = 2\\cos x\\).', '\\(y\' = 2\\cos x\\)'),
      S('Final answer: \\(2\\cos x\\).', '\\(2\\cos x\\)'),
    ],
  },
  'y12a-6b-q1e': {
    solution: 'The correct answer is \\(2\\cos 2x\\).',
    hint: 'Chain rule: \\(\\dfrac{d}{dx}\\sin 2x = \\cos 2x\\cdot 2\\).',
    solutionSteps: [
      S('Given: \\(y = \\sin 2x\\). Strategy: chain rule with inside \\(u = 2x\\).', '\\(y = \\sin 2x\\)'),
      S('Write \\(y = \\sin u\\) with \\(u = 2x\\). Then \\(y\' = \\cos u\\cdot u\'\\) and \\(u\' = 2\\).', '\\(u = 2x,\\quad u\' = 2\\)'),
      S('So \\(y\' = \\cos 2x\\cdot 2 = 2\\cos 2x\\). A common slip is forgetting the factor 2.', '\\(y\' = 2\\cos 2x\\)'),
      S('Final answer: \\(2\\cos 2x\\).', '\\(2\\cos 2x\\)'),
    ],
  },
  'y12a-6b-q1f': {
    solution: 'The correct answer is \\(-3\\sin x\\).',
    hint: 'Constant multiple: \\(\\dfrac{d}{dx}(3\\cos x) = 3(-\\sin x) = -3\\sin x\\).',
    solutionSteps: [
      S('Given: \\(y = 3\\cos x\\). Strategy: constant multiple of the cosine standard form.', '\\(y = 3\\cos x\\)'),
      S('Standard form: \\(\\dfrac{d}{dx}\\cos x = -\\sin x\\). Multiply by 3.', '\\(\\dfrac{d}{dx}(3\\cos x) = 3(-\\sin x)\\)'),
      S('Therefore \\(y\' = -3\\sin x\\).', '\\(y\' = -3\\sin x\\)'),
      S('Final answer: \\(-3\\sin x\\).', '\\(-3\\sin x\\)'),
    ],
  },
  'y12a-6b-q1g': {
    solution: 'The correct answer is \\(-3\\sin 3x\\).',
    hint: 'Chain rule: \\(\\dfrac{d}{dx}\\cos 3x = -\\sin 3x\\cdot 3 = -3\\sin 3x\\).',
    solutionSteps: [
      S('Given: \\(y = \\cos 3x\\). Strategy: chain rule with \\(u = 3x\\).', '\\(y = \\cos 3x\\)'),
      S('Write \\(y = \\cos u\\) with \\(u = 3x\\). Then \\(y\' = -\\sin u\\cdot u\'\\) and \\(u\' = 3\\).', '\\(u = 3x,\\quad u\' = 3\\)'),
      S('So \\(y\' = -\\sin 3x\\cdot 3 = -3\\sin 3x\\).', '\\(y\' = -3\\sin 3x\\)'),
      S('Final answer: \\(-3\\sin 3x\\).', '\\(-3\\sin 3x\\)'),
    ],
  },
  'y12a-6b-q1h': {
    solution: 'The correct answer is \\(4\\sec^{2} 4x\\).',
    hint: 'Chain rule: \\(\\dfrac{d}{dx}\\tan 4x = \\sec^{2} 4x\\cdot 4\\).',
    solutionSteps: [
      S('Given: \\(y = \\tan 4x\\). Strategy: chain rule with \\(u = 4x\\).', '\\(y = \\tan 4x\\)'),
      S('Write \\(y = \\tan u\\) with \\(u = 4x\\). Then \\(y\' = \\sec^{2}u\\cdot u\'\\) and \\(u\' = 4\\).', '\\(u = 4x,\\quad u\' = 4\\)'),
      S('So \\(y\' = \\sec^{2} 4x\\cdot 4 = 4\\sec^{2} 4x\\).', '\\(y\' = 4\\sec^{2} 4x\\)'),
      S('Final answer: \\(4\\sec^{2} 4x\\).', '\\(4\\sec^{2} 4x\\)'),
    ],
  },
  'y12a-6b-q1i': {
    solution: 'The correct answer is \\(4\\sec^{2}x\\).',
    hint: 'Constant multiple: \\(\\dfrac{d}{dx}(4\\tan x) = 4\\sec^{2}x\\).',
    solutionSteps: [
      S('Given: \\(y = 4\\tan x\\). Strategy: constant multiple of the tangent standard form.', '\\(y = 4\\tan x\\)'),
      S('Standard form: \\(\\dfrac{d}{dx}\\tan x = \\sec^{2}x\\). Multiply by 4.', '\\(\\dfrac{d}{dx}(4\\tan x) = 4\\sec^{2}x\\)'),
      S('Therefore \\(y\' = 4\\sec^{2}x\\).', '\\(y\' = 4\\sec^{2}x\\)'),
      S('Final answer: \\(4\\sec^{2}x\\).', '\\(4\\sec^{2}x\\)'),
    ],
  },
  'y12a-6b-q1j': {
    solution: 'The correct answer is \\(6\\cos 3x\\).',
    hint: 'Constant and chain: \\(\\dfrac{d}{dx}(2\\sin 3x) = 2\\cdot\\cos 3x\\cdot 3 = 6\\cos 3x\\).',
    solutionSteps: [
      S('Given: \\(y = 2\\sin 3x\\). Strategy: constant multiple and chain rule.', '\\(y = 2\\sin 3x\\)'),
      S('First, \\(\\dfrac{d}{dx}\\sin 3x = \\cos 3x\\cdot 3 = 3\\cos 3x\\) (chain rule with \\(u = 3x\\)).', '\\(\\dfrac{d}{dx}\\sin 3x = 3\\cos 3x\\)'),
      S('Multiply by the constant 2: \\(y\' = 2\\cdot 3\\cos 3x = 6\\cos 3x\\).', '\\(y\' = 6\\cos 3x\\)'),
      S('Final answer: \\(6\\cos 3x\\).', '\\(6\\cos 3x\\)'),
    ],
  },
  'y12a-6b-q1k': {
    solution: 'The correct answer is \\(4\\sec^{2} 2x\\).',
    hint: 'Constant and chain: \\(\\dfrac{d}{dx}(2\\tan 2x) = 2\\cdot\\sec^{2} 2x\\cdot 2 = 4\\sec^{2} 2x\\).',
    solutionSteps: [
      S('Given: \\(y = 2\\tan 2x\\). Strategy: constant multiple and chain rule.', '\\(y = 2\\tan 2x\\)'),
      S('Inner: \\(\\dfrac{d}{dx}\\tan 2x = \\sec^{2} 2x\\cdot 2 = 2\\sec^{2} 2x\\).', '\\(\\dfrac{d}{dx}\\tan 2x = 2\\sec^{2} 2x\\)'),
      S('Multiply by 2: \\(y\' = 2\\cdot 2\\sec^{2} 2x = 4\\sec^{2} 2x\\).', '\\(y\' = 4\\sec^{2} 2x\\)'),
      S('Final answer: \\(4\\sec^{2} 2x\\).', '\\(4\\sec^{2} 2x\\)'),
    ],
  },
  'y12a-6b-q1l': {
    solution: 'The correct answer is \\(-8\\sin 2x\\).',
    hint: 'Constant and chain: \\(\\dfrac{d}{dx}(4\\cos 2x) = 4(-\\sin 2x)\\cdot 2 = -8\\sin 2x\\).',
    solutionSteps: [
      S('Given: \\(y = 4\\cos 2x\\). Strategy: constant multiple and chain rule.', '\\(y = 4\\cos 2x\\)'),
      S('Inner: \\(\\dfrac{d}{dx}\\cos 2x = -\\sin 2x\\cdot 2 = -2\\sin 2x\\).', '\\(\\dfrac{d}{dx}\\cos 2x = -2\\sin 2x\\)'),
      S('Multiply by 4: \\(y\' = 4\\cdot(-2\\sin 2x) = -8\\sin 2x\\).', '\\(y\' = -8\\sin 2x\\)'),
      S('Final answer: \\(-8\\sin 2x\\).', '\\(-8\\sin 2x\\)'),
    ],
  },
  'y12a-6b-q1m': {
    solution: 'The correct answer is \\(-2\\cos 2x\\).',
    hint: 'Chain rule with a leading minus: \\(\\dfrac{d}{dx}(-\\sin 2x) = -\\cos 2x\\cdot 2 = -2\\cos 2x\\).',
    solutionSteps: [
      S('Given: \\(y = -\\sin 2x\\). Strategy: chain rule, then apply the leading minus.', '\\(y = -\\sin 2x\\)'),
      S('First, \\(\\dfrac{d}{dx}\\sin 2x = 2\\cos 2x\\).', '\\(\\dfrac{d}{dx}\\sin 2x = 2\\cos 2x\\)'),
      S('Multiply by \\(-1\\): \\(y\' = -2\\cos 2x\\).', '\\(y\' = -2\\cos 2x\\)'),
      S('Final answer: \\(-2\\cos 2x\\).', '\\(-2\\cos 2x\\)'),
    ],
  },
  'y12a-6b-q1n': {
    solution: 'The correct answer is \\(2\\sin 2x\\).',
    hint: 'Chain rule with a leading minus: \\(\\dfrac{d}{dx}(-\\cos 2x) = -(-\\sin 2x)\\cdot 2 = 2\\sin 2x\\).',
    solutionSteps: [
      S('Given: \\(y = -\\cos 2x\\). Strategy: chain rule, then apply the leading minus.', '\\(y = -\\cos 2x\\)'),
      S('First, \\(\\dfrac{d}{dx}\\cos 2x = -2\\sin 2x\\).', '\\(\\dfrac{d}{dx}\\cos 2x = -2\\sin 2x\\)'),
      S('Multiply by \\(-1\\): \\(y\' = -(-2\\sin 2x) = 2\\sin 2x\\).', '\\(y\' = 2\\sin 2x\\)'),
      S('Final answer: \\(2\\sin 2x\\).', '\\(2\\sin 2x\\)'),
    ],
  },
  'y12a-6b-q1o': {
    solution: 'The correct answer is \\(-2\\sec^{2} 2x\\).',
    hint: 'Chain rule with a leading minus: \\(\\dfrac{d}{dx}(-\\tan 2x) = -\\sec^{2} 2x\\cdot 2 = -2\\sec^{2} 2x\\).',
    solutionSteps: [
      S('Given: \\(y = -\\tan 2x\\). Strategy: chain rule, then apply the leading minus.', '\\(y = -\\tan 2x\\)'),
      S('First, \\(\\dfrac{d}{dx}\\tan 2x = 2\\sec^{2} 2x\\).', '\\(\\dfrac{d}{dx}\\tan 2x = 2\\sec^{2} 2x\\)'),
      S('Multiply by \\(-1\\): \\(y\' = -2\\sec^{2} 2x\\).', '\\(y\' = -2\\sec^{2} 2x\\)'),
      S('Final answer: \\(-2\\sec^{2} 2x\\).', '\\(-2\\sec^{2} 2x\\)'),
    ],
  },
  'y12a-6b-q1p': {
    solution: 'The correct answer is \\(\\dfrac{1}{2}\\sec^{2}\\dfrac{1}{2}x\\).',
    hint: 'Chain rule: \\(\\dfrac{d}{dx}\\tan\\!\\left(\\dfrac{1}{2}x\\right) = \\sec^{2}\\!\\left(\\dfrac{1}{2}x\\right)\\cdot\\dfrac{1}{2}\\).',
    solutionSteps: [
      S('Given: \\(y = \\tan\\!\\left(\\dfrac{1}{2}x\\right)\\). Strategy: chain rule with \\(u = \\dfrac{1}{2}x\\).', '\\(y = \\tan\\!\\left(\\dfrac{1}{2}x\\right)\\)'),
      S('Then \\(u\' = \\dfrac{1}{2}\\) and \\(y\' = \\sec^{2}u\\cdot u\'\\).', '\\(u = \\dfrac{1}{2}x,\\quad u\' = \\dfrac{1}{2}\\)'),
      S('So \\(y\' = \\sec^{2}\\!\\left(\\dfrac{1}{2}x\\right)\\cdot\\dfrac{1}{2} = \\dfrac{1}{2}\\sec^{2}\\!\\left(\\dfrac{1}{2}x\\right)\\).', '\\(y\' = \\dfrac{1}{2}\\sec^{2}\\dfrac{1}{2}x\\)'),
      S('Final answer: \\(\\dfrac{1}{2}\\sec^{2}\\dfrac{1}{2}x\\).', '\\(\\dfrac{1}{2}\\sec^{2}\\dfrac{1}{2}x\\)'),
    ],
  },
  'y12a-6b-q1q': {
    solution: 'The correct answer is \\(-\\dfrac{1}{2}\\sin\\dfrac{1}{2}x\\).',
    hint: 'Chain rule: \\(\\dfrac{d}{dx}\\cos\\!\\left(\\dfrac{1}{2}x\\right) = -\\sin\\!\\left(\\dfrac{1}{2}x\\right)\\cdot\\dfrac{1}{2}\\).',
    solutionSteps: [
      S('Given: \\(y = \\cos\\!\\left(\\dfrac{1}{2}x\\right)\\). Strategy: chain rule with \\(u = \\dfrac{1}{2}x\\).', '\\(y = \\cos\\!\\left(\\dfrac{1}{2}x\\right)\\)'),
      S('Then \\(u\' = \\dfrac{1}{2}\\) and \\(y\' = -\\sin u\\cdot u\'\\).', '\\(u = \\dfrac{1}{2}x,\\quad u\' = \\dfrac{1}{2}\\)'),
      S('So \\(y\' = -\\sin\\!\\left(\\dfrac{1}{2}x\\right)\\cdot\\dfrac{1}{2} = -\\dfrac{1}{2}\\sin\\dfrac{1}{2}x\\).', '\\(y\' = -\\dfrac{1}{2}\\sin\\dfrac{1}{2}x\\)'),
      S('Final answer: \\(-\\dfrac{1}{2}\\sin\\dfrac{1}{2}x\\).', '\\(-\\dfrac{1}{2}\\sin\\dfrac{1}{2}x\\)'),
    ],
  },
  'y12a-6b-q1r': {
    solution: 'The correct answer is \\(\\dfrac{1}{2}\\cos\\dfrac{x}{2}\\).',
    hint: 'Chain rule: \\(\\dfrac{d}{dx}\\sin\\!\\left(\\dfrac{x}{2}\\right) = \\cos\\!\\left(\\dfrac{x}{2}\\right)\\cdot\\dfrac{1}{2}\\).',
    solutionSteps: [
      S('Given: \\(y = \\sin\\!\\left(\\dfrac{x}{2}\\right)\\). Strategy: chain rule with \\(u = \\dfrac{x}{2}\\).', '\\(y = \\sin\\!\\left(\\dfrac{x}{2}\\right)\\)'),
      S('Then \\(u\' = \\dfrac{1}{2}\\) and \\(y\' = \\cos u\\cdot u\'\\).', '\\(u = \\dfrac{x}{2},\\quad u\' = \\dfrac{1}{2}\\)'),
      S('So \\(y\' = \\cos\\!\\left(\\dfrac{x}{2}\\right)\\cdot\\dfrac{1}{2} = \\dfrac{1}{2}\\cos\\dfrac{x}{2}\\).', '\\(y\' = \\dfrac{1}{2}\\cos\\dfrac{x}{2}\\)'),
      S('Final answer: \\(\\dfrac{1}{2}\\cos\\dfrac{x}{2}\\).', '\\(\\dfrac{1}{2}\\cos\\dfrac{x}{2}\\)'),
    ],
  },
  'y12a-6b-q1s': {
    solution: 'The correct answer is \\(\\dfrac{5}{3}\\sec^{2}\\dfrac{1}{3}x\\).',
    hint: 'Constant and chain: \\(\\dfrac{d}{dx}\\!\\left(5\\tan\\dfrac{x}{3}\\right) = 5\\sec^{2}\\!\\left(\\dfrac{x}{3}\\right)\\cdot\\dfrac{1}{3}\\).',
    solutionSteps: [
      S('Given: \\(y = 5\\tan\\!\\left(\\dfrac{1}{3}x\\right)\\). Strategy: constant multiple and chain rule.', '\\(y = 5\\tan\\!\\left(\\dfrac{1}{3}x\\right)\\)'),
      S('Inner: \\(\\dfrac{d}{dx}\\tan\\!\\left(\\dfrac{x}{3}\\right) = \\sec^{2}\\!\\left(\\dfrac{x}{3}\\right)\\cdot\\dfrac{1}{3}\\).', '\\(\\dfrac{1}{3}\\sec^{2}\\dfrac{x}{3}\\)'),
      S('Multiply by 5: \\(y\' = 5\\cdot\\dfrac{1}{3}\\sec^{2}\\dfrac{x}{3} = \\dfrac{5}{3}\\sec^{2}\\dfrac{1}{3}x\\).', '\\(y\' = \\dfrac{5}{3}\\sec^{2}\\dfrac{1}{3}x\\)'),
      S('Final answer: \\(\\dfrac{5}{3}\\sec^{2}\\dfrac{1}{3}x\\).', '\\(\\dfrac{5}{3}\\sec^{2}\\dfrac{1}{3}x\\)'),
    ],
  },
  'y12a-6b-q1t': {
    solution: 'The correct answer is \\(-2\\sin\\dfrac{x}{3}\\).',
    hint: 'Constant and chain: \\(\\dfrac{d}{dx}\\!\\left(6\\cos\\dfrac{x}{3}\\right) = 6\\left(-\\sin\\dfrac{x}{3}\\right)\\cdot\\dfrac{1}{3} = -2\\sin\\dfrac{x}{3}\\).',
    solutionSteps: [
      S('Given: \\(y = 6\\cos\\!\\left(\\dfrac{x}{3}\\right)\\). Strategy: constant multiple and chain rule.', '\\(y = 6\\cos\\!\\left(\\dfrac{x}{3}\\right)\\)'),
      S('Inner: \\(\\dfrac{d}{dx}\\cos\\!\\left(\\dfrac{x}{3}\\right) = -\\sin\\!\\left(\\dfrac{x}{3}\\right)\\cdot\\dfrac{1}{3} = -\\dfrac{1}{3}\\sin\\dfrac{x}{3}\\).', '\\(-\\dfrac{1}{3}\\sin\\dfrac{x}{3}\\)'),
      S('Multiply by 6: \\(y\' = 6\\cdot\\left(-\\dfrac{1}{3}\\sin\\dfrac{x}{3}\\right) = -2\\sin\\dfrac{x}{3}\\).', '\\(y\' = -2\\sin\\dfrac{x}{3}\\)'),
      S('Final answer: \\(-2\\sin\\dfrac{x}{3}\\).', '\\(-2\\sin\\dfrac{x}{3}\\)'),
    ],
  },
  'y12a-6b-q1u': {
    solution: 'The correct answer is \\(3\\cos\\dfrac{x}{4}\\).',
    hint: 'Constant and chain: \\(\\dfrac{d}{dx}\\!\\left(12\\sin\\dfrac{x}{4}\\right) = 12\\cos\\!\\left(\\dfrac{x}{4}\\right)\\cdot\\dfrac{1}{4} = 3\\cos\\dfrac{x}{4}\\).',
    solutionSteps: [
      S('Given: \\(y = 12\\sin\\!\\left(\\dfrac{x}{4}\\right)\\). Strategy: constant multiple and chain rule.', '\\(y = 12\\sin\\!\\left(\\dfrac{x}{4}\\right)\\)'),
      S('Inner: \\(\\dfrac{d}{dx}\\sin\\!\\left(\\dfrac{x}{4}\\right) = \\cos\\!\\left(\\dfrac{x}{4}\\right)\\cdot\\dfrac{1}{4}\\).', '\\(\\dfrac{1}{4}\\cos\\dfrac{x}{4}\\)'),
      S('Multiply by 12: \\(y\' = 12\\cdot\\dfrac{1}{4}\\cos\\dfrac{x}{4} = 3\\cos\\dfrac{x}{4}\\).', '\\(y\' = 3\\cos\\dfrac{x}{4}\\)'),
      S('Final answer: \\(3\\cos\\dfrac{x}{4}\\).', '\\(3\\cos\\dfrac{x}{4}\\)'),
    ],
  },
};

(async () => {
  const seedPath = path.join(__dirname, '../../src/constants/seedYear12aCh6BQuestions.js');
  delete require.cache[require.resolve(seedPath)];
  const list = require(seedPath).Y12A_CH6B_QUESTIONS;

  for (const [id, patch] of Object.entries(PATCH)) {
    const payload = {
      ...patch,
      graphData: null,
      updatedAt: FieldValue.serverTimestamp(),
      origin: 'seed',
    };
    // clear step graphs
    payload.solutionSteps = patch.solutionSteps.map((s) => ({ ...s, graphData: null }));

    await db.collection('questions').doc(id).set(payload, { merge: true });
    await db.collection('questions').doc(id).update({ graphData: null });

    const q = list.find((x) => x.id === id);
    if (q) {
      q.solutionSteps = payload.solutionSteps;
      q.solution = patch.solution;
      q.hint = patch.hint;
      q.graphData = null;
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
    {
      version: ver,
      membershipVersion: ver,
      updatedAt: FieldValue.serverTimestamp(),
    },
    { merge: true }
  );

  const d = (await db.collection('questions').doc('y12a-6b-q1c').get()).data();
  console.log('\n--- q1c ---');
  d.solutionSteps.forEach((s, i) =>
    console.log(`${i + 1}. ${s.explanation.slice(0, 100)}\n   → ${s.workingOut}`)
  );
  console.log('graphData', d.graphData, 'version', ver);
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
