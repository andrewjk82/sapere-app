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

const updates = {
  'y12a-6b-q3c': {
    graphData: null,
    solution:
      'The correct answer is \\(\\dfrac{1}{2}\\cos\\dfrac{1}{2}x,\\ -\\dfrac{1}{4}\\sin\\dfrac{1}{2}x,\\ -\\dfrac{1}{8}\\cos\\dfrac{1}{2}x,\\ \\dfrac{1}{16}\\sin\\dfrac{1}{2}x\\).',
    solutionSteps: [
      S(
        'Given: \\(y=\\sin\\dfrac{1}{2}x\\). Differentiate four times with chain factor \\(\\dfrac{1}{2}\\).',
        '\\(y=\\sin\\dfrac{1}{2}x\\)'
      ),
      S(
        'First: \\(\\dfrac{d}{dx}\\sin\\dfrac{1}{2}x=\\dfrac{1}{2}\\cos\\dfrac{1}{2}x\\).',
        '\\(\\dfrac{1}{2}\\cos\\dfrac{1}{2}x\\)'
      ),
      S(
        'Second: derivative of \\(\\dfrac{1}{2}\\cos\\dfrac{1}{2}x\\) is \\(-\\dfrac{1}{4}\\sin\\dfrac{1}{2}x\\).',
        '\\(-\\dfrac{1}{4}\\sin\\dfrac{1}{2}x\\)'
      ),
      S(
        'Third: derivative of \\(-\\dfrac{1}{4}\\sin\\dfrac{1}{2}x\\) is \\(-\\dfrac{1}{8}\\cos\\dfrac{1}{2}x\\).',
        '\\(-\\dfrac{1}{8}\\cos\\dfrac{1}{2}x\\)'
      ),
      S(
        'Fourth: derivative of \\(-\\dfrac{1}{8}\\cos\\dfrac{1}{2}x\\) is \\(\\dfrac{1}{16}\\sin\\dfrac{1}{2}x\\).',
        '\\(\\dfrac{1}{16}\\sin\\dfrac{1}{2}x\\)'
      ),
      S(
        'Final answer: \\(\\dfrac{1}{2}\\cos\\dfrac{1}{2}x,\\ -\\dfrac{1}{4}\\sin\\dfrac{1}{2}x,\\ -\\dfrac{1}{8}\\cos\\dfrac{1}{2}x,\\ \\dfrac{1}{16}\\sin\\dfrac{1}{2}x\\).',
        '\\(\\dfrac{1}{2}\\cos\\dfrac{1}{2}x,\\ -\\dfrac{1}{4}\\sin\\dfrac{1}{2}x,\\ -\\dfrac{1}{8}\\cos\\dfrac{1}{2}x,\\ \\dfrac{1}{16}\\sin\\dfrac{1}{2}x\\)'
      ),
    ],
  },
  'y12a-6b-q3d': {
    graphData: null,
    solution:
      'The correct answer is \\(-\\dfrac{1}{3}\\sin\\dfrac{1}{3}x,\\ -\\dfrac{1}{9}\\cos\\dfrac{1}{3}x,\\ \\dfrac{1}{27}\\sin\\dfrac{1}{3}x,\\ \\dfrac{1}{81}\\cos\\dfrac{1}{3}x\\).',
    solutionSteps: [
      S(
        'Given: \\(y=\\cos\\dfrac{1}{3}x\\). Each derivative multiplies by \\(\\dfrac{1}{3}\\).',
        '\\(y=\\cos\\dfrac{1}{3}x\\)'
      ),
      S('First: \\(-\\dfrac{1}{3}\\sin\\dfrac{1}{3}x\\).', '\\(-\\dfrac{1}{3}\\sin\\dfrac{1}{3}x\\)'),
      S('Second: \\(-\\dfrac{1}{9}\\cos\\dfrac{1}{3}x\\).', '\\(-\\dfrac{1}{9}\\cos\\dfrac{1}{3}x\\)'),
      S('Third: \\(\\dfrac{1}{27}\\sin\\dfrac{1}{3}x\\).', '\\(\\dfrac{1}{27}\\sin\\dfrac{1}{3}x\\)'),
      S('Fourth: \\(\\dfrac{1}{81}\\cos\\dfrac{1}{3}x\\).', '\\(\\dfrac{1}{81}\\cos\\dfrac{1}{3}x\\)'),
      S(
        'Final answer: \\(-\\dfrac{1}{3}\\sin\\dfrac{1}{3}x,\\ -\\dfrac{1}{9}\\cos\\dfrac{1}{3}x,\\ \\dfrac{1}{27}\\sin\\dfrac{1}{3}x,\\ \\dfrac{1}{81}\\cos\\dfrac{1}{3}x\\).',
        '\\(-\\dfrac{1}{3}\\sin\\dfrac{1}{3}x,\\ -\\dfrac{1}{9}\\cos\\dfrac{1}{3}x,\\ \\dfrac{1}{27}\\sin\\dfrac{1}{3}x,\\ \\dfrac{1}{81}\\cos\\dfrac{1}{3}x\\)'
      ),
    ],
  },
  'y12a-6b-q3d_amp': {
    graphData: null,
    solution: 'The correct answer is \\(\\dfrac{1}{3},\\ \\dfrac{1}{9},\\ \\dfrac{1}{27},\\ \\dfrac{1}{81}\\).',
    solutionSteps: [
      S(
        'From part (d), take absolute values of the four coefficients.',
        '\\(\\left|-\\dfrac{1}{3}\\right|,\\ \\left|-\\dfrac{1}{9}\\right|,\\ \\dfrac{1}{27},\\ \\dfrac{1}{81}\\)'
      ),
      S(
        'Amplitudes: \\(\\dfrac{1}{3},\\ \\dfrac{1}{9},\\ \\dfrac{1}{27},\\ \\dfrac{1}{81}\\).',
        '\\(\\dfrac{1}{3},\\ \\dfrac{1}{9},\\ \\dfrac{1}{27},\\ \\dfrac{1}{81}\\)'
      ),
      S(
        'Final answer: \\(\\dfrac{1}{3},\\ \\dfrac{1}{9},\\ \\dfrac{1}{27},\\ \\dfrac{1}{81}\\).',
        '\\(\\dfrac{1}{3},\\ \\dfrac{1}{9},\\ \\dfrac{1}{27},\\ \\dfrac{1}{81}\\)'
      ),
    ],
  },
};

(async () => {
  const seedPath = path.join(__dirname, '../../src/constants/seedYear12aCh6BQuestions.js');
  delete require.cache[require.resolve(seedPath)];
  const list = require(seedPath).Y12A_CH6B_QUESTIONS;

  for (const [id, p] of Object.entries(updates)) {
    await db.collection('questions').doc(id).set(
      { ...p, origin: 'seed', updatedAt: FieldValue.serverTimestamp() },
      { merge: true }
    );
    const q = list.find((x) => x.id === id);
    if (q) Object.assign(q, p);
    console.log('fixed', id);
  }

  writeFileSync(
    seedPath,
    'export const Y12A_CH6B_QUESTIONS = ' +
      JSON.stringify(list, null, 2) +
      ';\n\nexport default Y12A_CH6B_QUESTIONS;\n'
  );

  // final thin scan
  const snap = await db.collection('questions').where('topicId', '==', 'y12a-6B').get();
  let thin = 0;
  for (const doc of snap.docs) {
    const q = doc.data();
    if (q.isActive === false) continue;
    const s = JSON.stringify(q.solutionSteps || []);
    if (/Given the function in the stem|Simplify signs and coefficients/.test(s)) {
      thin++;
      console.log('THIN', doc.id);
    }
  }

  const ver = Date.now();
  await db.collection('sync_meta').doc('questions').set(
    { version: ver, membershipVersion: ver, updatedAt: FieldValue.serverTimestamp() },
    { merge: true }
  );
  console.log('still thin', thin, 'version', ver);
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
