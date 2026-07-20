/**
 * Clear graphs + fix LaTeX + detailed steps for q3a/amp/b and q5c/d (broken opts).
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

function mcFields(opts, a) {
  return {
    opts,
    options: opts.map((text) => ({ text, imageUrl: null })),
    a,
    answer: String(a),
    graphData: null,
  };
}

const PATCH = {
  'y12a-6b-q3a': {
    ...mcFields(
      [
        '\\(-2\\cos 2x,\\ -4\\sin 2x,\\ -8\\cos 2x,\\ 16\\sin 2x\\)',
        '\\(2\\cos 2x,\\ 4\\sin 2x,\\ 8\\cos 2x,\\ 16\\sin 2x\\)',
        '\\(2\\cos 2x,\\ -4\\sin 2x,\\ -8\\cos 2x,\\ 16\\sin 2x\\)',
        '\\(2\\sin 2x,\\ -4\\sin 2x,\\ -8\\sin 2x,\\ 16\\sin 2x\\)',
      ],
      2
    ),
    solution:
      'The correct answer is \\(2\\cos 2x,\\ -4\\sin 2x,\\ -8\\cos 2x,\\ 16\\sin 2x\\).',
    hint: 'Differentiate repeatedly: each step multiplies by 2 and cycles sine/cosine with the correct sign.',
    solutionSteps: [
      S(
        'Given: \\(y = \\sin 2x\\). Strategy: differentiate four times using the chain rule.',
        '\\(y = \\sin 2x\\)'
      ),
      S(
        'First: \\(y\' = \\cos 2x\\cdot 2 = 2\\cos 2x\\).',
        '\\(y\' = 2\\cos 2x\\)'
      ),
      S(
        'Second: \\(y\'\' = -2\\sin 2x\\cdot 2 = -4\\sin 2x\\).',
        '\\(y\'\' = -4\\sin 2x\\)'
      ),
      S(
        'Third: \\(y\'\'\' = -4\\cos 2x\\cdot 2 = -8\\cos 2x\\).',
        '\\(y\'\'\' = -8\\cos 2x\\)'
      ),
      S(
        'Fourth: \\(y\'\'\'\' = 8\\sin 2x\\cdot 2 = 16\\sin 2x\\).',
        '\\(y\'\'\'\' = 16\\sin 2x\\)'
      ),
      S(
        'Final answer: \\(2\\cos 2x,\\ -4\\sin 2x,\\ -8\\cos 2x,\\ 16\\sin 2x\\).',
        '\\(2\\cos 2x,\\ -4\\sin 2x,\\ -8\\cos 2x,\\ 16\\sin 2x\\)'
      ),
    ],
  },

  'y12a-6b-q3a_amp': {
    ...mcFields(
      [
        '\\(2,\\ 4,\\ 8,\\ 16\\)',
        '\\(1,\\ 2,\\ 4,\\ 8\\)',
        '\\(2,\\ -4,\\ -8,\\ 16\\)',
        '\\(4,\\ 8,\\ 16,\\ 32\\)',
      ],
      0
    ),
    solution: 'The correct answer is \\(2,\\ 4,\\ 8,\\ 16\\).',
    hint: 'Amplitude of \\(A\\sin(kx)\\) or \\(A\\cos(kx)\\) is \\(|A|\\).',
    solutionSteps: [
      S(
        'From part (a), the four derivatives are \\(2\\cos 2x\\), \\(-4\\sin 2x\\), \\(-8\\cos 2x\\), \\(16\\sin 2x\\).',
        '\\(2\\cos 2x,\\ -4\\sin 2x,\\ -8\\cos 2x,\\ 16\\sin 2x\\)'
      ),
      S(
        'The amplitude of \\(A\\sin(kx)\\) or \\(A\\cos(kx)\\) is the absolute value \\(|A|\\).',
        '\\text{amplitude } = |A|'
      ),
      S(
        'So the amplitudes are \\(|2| = 2\\), \\(|-4| = 4\\), \\(|-8| = 8\\), \\(|16| = 16\\).',
        '\\(2,\\ 4,\\ 8,\\ 16\\)'
      ),
      S('Final answer: \\(2,\\ 4,\\ 8,\\ 16\\).', '\\(2,\\ 4,\\ 8,\\ 16\\)'),
    ],
  },

  'y12a-6b-q3b': {
    ...mcFields(
      [
        '\\(-10\\sin 10x,\\ -100\\cos 10x,\\ 1000\\sin 10x,\\ 10000\\cos 10x\\)',
        '\\(-10\\sin 10x,\\ -100\\sin 10x,\\ 1000\\sin 10x,\\ 10000\\sin 10x\\)',
        '\\(10\\sin 10x,\\ -100\\cos 10x,\\ 1000\\sin 10x,\\ 10000\\cos 10x\\)',
        '\\(-10\\cos 10x,\\ -100\\sin 10x,\\ 1000\\cos 10x,\\ 10000\\sin 10x\\)',
      ],
      0
    ),
    // Wait - original a was 1 with answer -10 sin, -100 cos, 1000 sin, 10000 cos
    // I put that as index 0. Good.
    solution:
      'The correct answer is \\(-10\\sin 10x,\\ -100\\cos 10x,\\ 1000\\sin 10x,\\ 10000\\cos 10x\\).',
    hint: 'Each derivative multiplies by 10 and cycles cosine/sine with the correct sign.',
    solutionSteps: [
      S(
        'Given: \\(y = \\cos 10x\\). Strategy: differentiate four times with chain factor 10.',
        '\\(y = \\cos 10x\\)'
      ),
      S(
        'First: \\(y\' = -\\sin 10x\\cdot 10 = -10\\sin 10x\\).',
        '\\(y\' = -10\\sin 10x\\)'
      ),
      S(
        'Second: \\(y\'\' = -10\\cos 10x\\cdot 10 = -100\\cos 10x\\).',
        '\\(y\'\' = -100\\cos 10x\\)'
      ),
      S(
        'Third: \\(y\'\'\' = 100\\sin 10x\\cdot 10 = 1000\\sin 10x\\).',
        '\\(y\'\'\' = 1000\\sin 10x\\)'
      ),
      S(
        'Fourth: \\(y\'\'\'\' = 1000\\cos 10x\\cdot 10 = 10000\\cos 10x\\).',
        '\\(y\'\'\'\' = 10000\\cos 10x\\)'
      ),
      S(
        'Final answer: \\(-10\\sin 10x,\\ -100\\cos 10x,\\ 1000\\sin 10x,\\ 10000\\cos 10x\\).',
        '\\(-10\\sin 10x,\\ -100\\cos 10x,\\ 1000\\sin 10x,\\ 10000\\cos 10x\\)'
      ),
    ],
  },

  // Image: q5c broken option D + thin steps
  'y12a-6b-q5c': {
    ...mcFields(
      [
        '\\(-\\dfrac{1}{4\\sqrt{2}}\\)',
        '\\(\\dfrac{1}{4\\sqrt{2}}\\)',
        '\\(\\dfrac{1}{4}\\)',
        '\\(\\dfrac{\\sqrt{2}}{4}\\)',
      ],
      1
    ),
    solution: 'The correct answer is \\(\\dfrac{1}{4\\sqrt{2}}\\).',
    hint: "Find \\(f'(x)\\), then substitute \\(x = -\\pi\\). Use exact values.",
    solutionSteps: [
      S(
        'Given: \\(f(x) = \\sin\\!\\left(\\dfrac{x}{4} + \\dfrac{\\pi}{2}\\right)\\). Strategy: differentiate, then evaluate at \\(x = -\\pi\\).',
        '\\(f(x) = \\sin\\!\\left(\\dfrac{x}{4} + \\dfrac{\\pi}{2}\\right)\\)'
      ),
      S(
        'Chain rule: \\(f\'(x) = \\cos\\!\\left(\\dfrac{x}{4} + \\dfrac{\\pi}{2}\\right)\\cdot\\dfrac{1}{4}\\). Note also \\(\\sin(\\theta+\\pi/2)=\\cos\\theta\\), so \\(f(x)=\\cos\\dfrac{x}{4}\\) and \\(f\'(x)=-\\dfrac{1}{4}\\sin\\dfrac{x}{4}\\).',
        '\\(f\'(x) = -\\dfrac{1}{4}\\sin\\dfrac{x}{4}\\)'
      ),
      S(
        'At \\(x = -\\pi\\): \\(f\'(-\\pi) = -\\dfrac{1}{4}\\sin\\!\\left(-\\dfrac{\\pi}{4}\\right) = -\\dfrac{1}{4}\\left(-\\sin\\dfrac{\\pi}{4}\\right) = \\dfrac{1}{4}\\cdot\\dfrac{\\sqrt{2}}{2} = \\dfrac{\\sqrt{2}}{8}\\).',
        '\\(f\'(-\\pi) = \\dfrac{\\sqrt{2}}{8}\\)'
      ),
      S(
        'Rewrite: \\(\\dfrac{\\sqrt{2}}{8} = \\dfrac{1}{4\\sqrt{2}}\\) (rationalise denominator if preferred).',
        '\\(\\dfrac{1}{4\\sqrt{2}}\\)'
      ),
      S('Final answer: \\(\\dfrac{1}{4\\sqrt{2}}\\).', '\\(\\dfrac{1}{4\\sqrt{2}}\\)'),
    ],
  },

  'y12a-6b-q5d': {
    ...mcFields(
      [
        '\\(\\dfrac{1}{4\\sqrt{2}}\\)',
        '\\(-\\dfrac{1}{4\\sqrt{2}}\\)',
        '\\(-\\dfrac{1}{4}\\)',
        '\\(\\dfrac{\\sqrt{2}}{4}\\)',
      ],
      1
    ),
    solution: 'The correct answer is \\(-\\dfrac{1}{4\\sqrt{2}}\\).',
    hint: "Use \\(f'(x) = -\\dfrac{1}{4}\\sin\\dfrac{x}{4}\\), then substitute \\(x = \\pi\\).",
    solutionSteps: [
      S(
        'Given: \\(f(x) = \\sin\\!\\left(\\dfrac{x}{4} + \\dfrac{\\pi}{2}\\right)\\). As before, \\(f\'(x) = -\\dfrac{1}{4}\\sin\\dfrac{x}{4}\\).',
        '\\(f\'(x) = -\\dfrac{1}{4}\\sin\\dfrac{x}{4}\\)'
      ),
      S(
        'At \\(x = \\pi\\): \\(f\'(\\pi) = -\\dfrac{1}{4}\\sin\\dfrac{\\pi}{4} = -\\dfrac{1}{4}\\cdot\\dfrac{\\sqrt{2}}{2} = -\\dfrac{\\sqrt{2}}{8} = -\\dfrac{1}{4\\sqrt{2}}\\).',
        '\\(f\'(\\pi) = -\\dfrac{1}{4\\sqrt{2}}\\)'
      ),
      S('Final answer: \\(-\\dfrac{1}{4\\sqrt{2}}\\).', '\\(-\\dfrac{1}{4\\sqrt{2}}\\)'),
    ],
  },
};

// Fix amp workingOut LaTeX wrap
PATCH['y12a-6b-q3a_amp'].solutionSteps[1].workingOut = '\\(\\text{amplitude } = |A|\\)';

(async () => {
  const seedPath = path.join(__dirname, '../../src/constants/seedYear12aCh6BQuestions.js');
  delete require.cache[require.resolve(seedPath)];
  const list = require(seedPath).Y12A_CH6B_QUESTIONS;

  for (const [id, patch] of Object.entries(PATCH)) {
    const payload = {
      ...patch,
      graphData: null,
      origin: 'seed',
      updatedAt: FieldValue.serverTimestamp(),
    };
    payload.solutionSteps = (patch.solutionSteps || []).map((s) => ({
      ...s,
      graphData: null,
    }));
    await db.collection('questions').doc(id).set(payload, { merge: true });
    await db.collection('questions').doc(id).update({ graphData: null });

    const q = list.find((x) => x.id === id);
    if (q) {
      Object.assign(q, {
        opts: patch.opts,
        options: patch.options,
        a: patch.a,
        answer: patch.answer,
        solution: patch.solution,
        solutionSteps: payload.solutionSteps,
        hint: patch.hint,
        graphData: null,
      });
    }
    console.log('fixed', id, 'a=', patch.a, 'steps', payload.solutionSteps.length);
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

  for (const id of Object.keys(PATCH)) {
    const d = (await db.collection('questions').doc(id).get()).data();
    console.log(id, 'graph=', d.graphData, 'optsD=', d.opts?.[3] || d.options?.[3]?.text);
  }
  console.log('version', ver);
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
