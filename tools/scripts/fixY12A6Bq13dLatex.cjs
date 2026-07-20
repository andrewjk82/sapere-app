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

const steps = [
  S(
    'Given: \\(f(x) = \\dfrac{\\cos x}{\\cos x + \\sin x}\\). Strategy: quotient rule.',
    '\\(u = \\cos x,\\quad v = \\cos x + \\sin x\\)'
  ),
  S(
    "Differentiate: \\(u' = -\\sin x\\) and \\(v' = -\\sin x + \\cos x\\).",
    "\\(u' = -\\sin x,\\quad v' = \\cos x - \\sin x\\)"
  ),
  S(
    "Quotient rule: \\(f'(x) = \\dfrac{u'v - uv'}{v^{2}} = \\dfrac{(-\\sin x)(\\cos x + \\sin x) - \\cos x(\\cos x - \\sin x)}{(\\cos x + \\sin x)^{2}}\\).",
    "\\(f' = \\dfrac{(-\\sin x)(\\cos x + \\sin x) - \\cos x(\\cos x - \\sin x)}{(\\cos x + \\sin x)^{2}}\\)"
  ),
  S(
    'Expand the numerator carefully:\n' +
      '\\(-\\sin x\\cos x - \\sin^{2}x - \\cos^{2}x + \\cos x\\sin x\\).\n' +
      'The cross terms \\(-\\sin x\\cos x + \\cos x\\sin x\\) cancel, leaving \\(-\\sin^{2}x - \\cos^{2}x = -(\\sin^{2}x + \\cos^{2}x) = -1\\).',
    '\\(-\\sin^{2}x - \\cos^{2}x = -1\\)'
  ),
  S(
    "Therefore \\(f'(x) = \\dfrac{-1}{(\\cos x + \\sin x)^{2}} = -\\dfrac{1}{(\\cos x + \\sin x)^{2}}\\).",
    "\\(f'(x) = -\\dfrac{1}{(\\cos x + \\sin x)^{2}}\\)"
  ),
  S(
    "Final answer: \\(-\\dfrac{1}{(\\cos x + \\sin x)^{2}}\\). A common slip is an algebra error when expanding the numerator.",
    "\\(-\\dfrac{1}{(\\cos x + \\sin x)^{2}}\\)"
  ),
];

(async () => {
  await db.collection('questions').doc('y12a-6b-q13d').set(
    {
      solutionSteps: steps,
      solution: 'The correct answer is \\(-\\dfrac{1}{(\\cos x + \\sin x)^{2}}\\).',
      updatedAt: FieldValue.serverTimestamp(),
    },
    { merge: true }
  );

  // also scan topic for broken workingOut like \text{ without \( or trailing \
  const snap = await db.collection('questions').where('topicId', '==', 'y12a-6B').get();
  let fixed = 0;
  for (const doc of snap.docs) {
    const q = doc.data();
    const steps0 = q.solutionSteps || [];
    let dirty = false;
    const next = steps0.map((s) => {
      let w = s.workingOut || '';
      // broken: \text{... without wrapping, or ends with single \
      if (/^\\text\{/.test(w) || /\\$/.test(w) || w.includes('\\\\text')) {
        dirty = true;
        // try wrap if looks like assignment
        if (/numerator/i.test(w)) {
          return { ...s, workingOut: '\\(-1\\)' };
        }
        w = w.replace(/\\\\/g, '\\').replace(/\\$/, '');
        if (!w.includes('\\(')) w = `\\(${w}\\)`;
        return { ...s, workingOut: w };
      }
      return s;
    });
    if (dirty && doc.id !== 'y12a-6b-q13d') {
      await db.collection('questions').doc(doc.id).set(
        { solutionSteps: next, updatedAt: FieldValue.serverTimestamp() },
        { merge: true }
      );
      fixed++;
      console.log('also fixed broken workingOut on', doc.id);
    }
  }

  const seedPath = path.join(__dirname, '../../src/constants/seedYear12aCh6BQuestions.js');
  delete require.cache[require.resolve(seedPath)];
  const mod = require(seedPath);
  const list = mod.Y12A_CH6B_QUESTIONS;
  const q = list.find((x) => x.id === 'y12a-6b-q13d');
  if (q) {
    q.solutionSteps = steps;
    q.solution = 'The correct answer is \\(-\\dfrac{1}{(\\cos x + \\sin x)^{2}}\\).';
    writeFileSync(
      seedPath,
      'export const Y12A_CH6B_QUESTIONS = ' +
        JSON.stringify(list, null, 2) +
        ';\n\nexport default Y12A_CH6B_QUESTIONS;\n'
    );
  }

  const ver = Date.now();
  await db.collection('sync_meta').doc('questions').set(
    { version: ver, membershipVersion: ver, updatedAt: FieldValue.serverTimestamp() },
    { merge: true }
  );

  const d = (await db.collection('questions').doc('y12a-6b-q13d').get()).data();
  console.log('step4 workingOut:', d.solutionSteps[3].workingOut);
  console.log('step4 explanation ends:', d.solutionSteps[3].explanation.slice(-80));
  console.log('extra fixed', fixed, 'version', ver);
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
