const admin = require('firebase-admin');
const { readFileSync } = require('fs');
const { FieldValue } = require('firebase-admin/firestore');
const sa = JSON.parse(
  readFileSync(
    '/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json',
    'utf8'
  )
);
if (!admin.apps.length) admin.initializeApp({ credential: admin.credential.cert(sa) });
const db = admin.firestore();

const opts = [
  '\\(2e^{2x} -\\cos(e^{2x})\\)',
  '\\(2e^{2x} \\cos(e^{2x})\\)',
  '\\(2e^{2x} \\sin(e^{2x})\\)',
  '\\(e^{2x}\\cos(e^{2x})\\)',
];
const options = opts.map((text) => ({ text, imageUrl: '' }));
const solutionSteps = [
  {
    explanation:
      'Given: \\(f(x) = \\sin(e^{2x})\\). Strategy: chain rule. Let \\(u = e^{2x}\\), so \\(f = \\sin u\\).',
    workingOut: '\\(u = e^{2x}\\)',
    graphData: null,
  },
  {
    explanation:
      "Differentiate the outer function: \\(\\dfrac{d}{du}(\\sin u) = \\cos u\\). Differentiate the inside: \\(u' = 2e^{2x}\\) (chain rule on the exponential).",
    workingOut: "\\(f' = \\cos(e^{2x})\\cdot 2e^{2x}\\)",
    graphData: null,
  },
  {
    explanation:
      "Multiply: \\(f'(x) = 2e^{2x}\\cos(e^{2x})\\). A common slip is forgetting the factor 2 from \\(\\dfrac{d}{dx}e^{2x}\\), or writing \\(\\sin\\) instead of \\(\\cos\\).",
    workingOut: '\\(2e^{2x}\\cos(e^{2x})\\)',
    graphData: null,
  },
  {
    explanation: 'Final answer: \\(2e^{2x}\\cos(e^{2x})\\).',
    workingOut: '\\(2e^{2x}\\cos(e^{2x})\\)',
    graphData: null,
  },
];

(async () => {
  await db.collection('questions').doc('y12a-6b-q11c').set(
    {
      opts,
      options,
      a: 1,
      answer: '1',
      solution: 'The correct answer is \\(2e^{2x} \\cos(e^{2x})\\).',
      solutionSteps,
      hint: "Use the chain rule twice: derivative of \\(\\sin u\\) is \\(\\cos u\\cdot u'\\), and derivative of \\(e^{2x}\\) is \\(2e^{2x}\\).",
      updatedAt: FieldValue.serverTimestamp(),
    },
    { merge: true }
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
  const d = (await db.collection('questions').doc('y12a-6b-q11c').get()).data();
  console.log('fixed options:');
  d.options.forEach((o, i) => console.log(String.fromCharCode(65 + i), o.text));
  console.log('version', ver);
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
