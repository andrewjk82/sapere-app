const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const pathOrig = './src/constants/seedDanebank2020Questions.js';
const pathSim = './src/constants/seedDanebank2020SimilarQuestions.js';

let contentOrig = fs.readFileSync(pathOrig, 'utf8');
let contentSim = fs.readFileSync(pathSim, 'utf8');

const matchOrig = contentOrig.match(/export const DANEBANK_2020_QUESTIONS = (\[[\s\S]*?\]);\n/);
const matchSim = contentSim.match(/export const DANEBANK_2020_SIMILAR_QUESTIONS = (\[[\s\S]*?\]);\n/);

let qOrig = eval(matchOrig[1]);
let qSim = eval(matchSim[1]);

const qIndexOrig = qOrig.findIndex(x => x.id === 'dane2020-mc6');
const qIndexSim = qSim.findIndex(x => x.id === 'dane2020s-mc6');

const optsFixed = [
  "\\(f'(x) < 0\\) and \\(f''(x) > 0\\)",
  "\\(f'(x) < 0\\) and \\(f''(x) < 0\\)",
  "\\(f'(x) > 0\\) and \\(f''(x) > 0\\)",
  "\\(f'(x) > 0\\) and \\(f''(x) < 0\\)"
];

// Fix Original
qOrig[qIndexOrig].opts = [...optsFixed];
qOrig[qIndexOrig].solution = "The correct answer is \\(f'(x) < 0\\) and \\(f''(x) < 0\\).";
qOrig[qIndexOrig].solutionSteps = [
  {
    explanation: "Step 1: Determine the sign of the first derivative \\(f'(x)\\). Between \\(A\\) (local maximum) and \\(B\\) (point of inflection), the curve is strictly decreasing. Therefore, \\(f'(x) < 0\\).",
    workingOut: "$$ f'(x) < 0 \\text{ for } x \\in (A, B) $$",
    graphData: qOrig[qIndexOrig].solutionSteps[0].graphData
  },
  {
    explanation: "Step 2: Determine the sign of the second derivative \\(f''(x)\\). Between \\(A\\) and \\(B\\), the curve forms the top half of a downward bend, which means it is concave down. Therefore, \\(f''(x) < 0\\).",
    workingOut: "$$ f''(x) < 0 \\text{ for } x \\in (A, B) $$",
    graphData: null
  },
  {
    explanation: "Step 3: Combine both conditions to find the correct statement.",
    workingOut: "$$ \\text{Both } f'(x) < 0 \\text{ and } f''(x) < 0 \\text{ are true.} $$",
    graphData: null
  }
];

// Fix Similar
qSim[qIndexSim].opts = [...optsFixed];
qSim[qIndexSim].solution = "The correct answer is \\(f'(x) < 0\\) and \\(f''(x) > 0\\).";
qSim[qIndexSim].solutionSteps = [
  {
    explanation: "Step 1: Determine the sign of the first derivative \\(f'(x)\\). Between \\(B\\) (point of inflection) and \\(C\\) (local minimum), the curve is still strictly decreasing. Therefore, \\(f'(x) < 0\\).",
    workingOut: "$$ f'(x) < 0 \\text{ for } x \\in (B, C) $$",
    graphData: qSim[qIndexSim].solutionSteps[0].graphData
  },
  {
    explanation: "Step 2: Determine the sign of the second derivative \\(f''(x)\\). After the point of inflection at \\(B\\), the curve begins to bend upwards towards the local minimum at \\(C\\), meaning it is concave up. Therefore, \\(f''(x) > 0\\).",
    workingOut: "$$ f''(x) > 0 \\text{ for } x \\in (B, C) $$",
    graphData: null
  },
  {
    explanation: "Step 3: Combine both conditions to find the correct statement.",
    workingOut: "$$ \\text{Both } f'(x) < 0 \\text{ and } f''(x) > 0 \\text{ are true.} $$",
    graphData: null
  }
];


fs.writeFileSync(pathOrig, `export const DANEBANK_2020_QUESTIONS = ${JSON.stringify(qOrig, null, 2)};\n`, 'utf8');
fs.writeFileSync(pathSim, `export const DANEBANK_2020_SIMILAR_QUESTIONS = ${JSON.stringify(qSim, null, 2)};\n`, 'utf8');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  await db.collection('questions').doc('dane2020-mc6').update({
    opts: qOrig[qIndexOrig].opts,
    options: qOrig[qIndexOrig].opts.map(text => ({ text, imageUrl: '' })),
    solution: qOrig[qIndexOrig].solution,
    solutionSteps: qOrig[qIndexOrig].solutionSteps,
    updatedAt: FieldValue.serverTimestamp()
  });

  await db.collection('questions').doc('dane2020s-mc6').update({
    opts: qSim[qIndexSim].opts,
    options: qSim[qIndexSim].opts.map(text => ({ text, imageUrl: '' })),
    solution: qSim[qIndexSim].solution,
    solutionSteps: qSim[qIndexSim].solutionSteps,
    updatedAt: FieldValue.serverTimestamp()
  });

  await db.doc('sync_meta/questions').update({
    version: Date.now(),
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log('Successfully fixed LaTeX and steps for dane2020-mc6 and dane2020s-mc6!');
  process.exit(0);
}
run();
