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

const qIndexOrig = qOrig.findIndex(x => x.id === 'dane2020-q21b');
const qIndexSim = qSim.findIndex(x => x.id === 'dane2020s-q21b');

// Move graphData from question level to solution step 6 (index 5)
if (qOrig[qIndexOrig].graphData) {
  qOrig[qIndexOrig].solutionSteps[5].graphData = qOrig[qIndexOrig].graphData;
  qOrig[qIndexOrig].graphData = null;
}

if (qSim[qIndexSim].graphData) {
  qSim[qIndexSim].solutionSteps[5].graphData = qSim[qIndexSim].graphData;
  qSim[qIndexSim].graphData = null;
}

fs.writeFileSync(pathOrig, `export const DANEBANK_2020_QUESTIONS = ${JSON.stringify(qOrig, null, 2)};\n`, 'utf8');
fs.writeFileSync(pathSim, `export const DANEBANK_2020_SIMILAR_QUESTIONS = ${JSON.stringify(qSim, null, 2)};\n`, 'utf8');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  await db.collection('questions').doc('dane2020-q21b').update({
    graphData: null,
    solutionSteps: qOrig[qIndexOrig].solutionSteps,
    updatedAt: FieldValue.serverTimestamp()
  });

  await db.collection('questions').doc('dane2020s-q21b').update({
    graphData: null,
    solutionSteps: qSim[qIndexSim].solutionSteps,
    updatedAt: FieldValue.serverTimestamp()
  });

  await db.doc('sync_meta/questions').update({
    version: Date.now(),
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log('Successfully moved graphData to solutionSteps for both questions!');
  process.exit(0);
}
run();
