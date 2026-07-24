const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const pathOrig = './src/constants/seedCherrybrookTech2020Questions.js';
const pathSim = './src/constants/seedCherrybrookTech2020SimilarQuestions.js';

let contentOrig = fs.readFileSync(pathOrig, 'utf8');
let contentSim = fs.readFileSync(pathSim, 'utf8');

const matchOrig = contentOrig.match(/export const CTHS_2020_QUESTIONS = (\[[\s\S]*?\]);\n/);
const matchSim = contentSim.match(/export const CTHS_2020_SIMILAR_QUESTIONS = (\[[\s\S]*?\]);\n/);

let qOrig = eval(matchOrig[1]);
let qSim = eval(matchSim[1]);

const qIndexOrig = qOrig.findIndex(x => x.id === 'cths2020-q15');
const qIndexSim = qSim.findIndex(x => x.id === 'cths2020s-q15');

// For cths2020-q15 (Max at -0.25, 8.54)
let scriptOrig = qOrig[qIndexOrig].graphData.jsxGraph.script;
scriptOrig = scriptOrig.replace("board.unsuspendUpdate();", "board.create('point', [-0.25, 8.54], {name:'Max', size:2, color:'purple', label:{offset:[-10,15]}});\nboard.unsuspendUpdate();");
qOrig[qIndexOrig].graphData.jsxGraph.script = scriptOrig;
// Also bump boundingbox slightly if needed: boundingbox: [-3, 10, 4, -4],
qOrig[qIndexOrig].graphData.jsxGraph.boundingbox = [-3, 11, 4, -4];

// For cths2020s-q15 (Max at -1.25, 8.54)
let scriptSim = qSim[qIndexSim].graphData.jsxGraph.script;
scriptSim = scriptSim.replace("board.unsuspendUpdate();", "board.create('point', [-1.25, 8.54], {name:'Max', size:2, color:'purple', label:{offset:[-10,15]}});\nboard.unsuspendUpdate();");
qSim[qIndexSim].graphData.jsxGraph.script = scriptSim;
qSim[qIndexSim].graphData.jsxGraph.boundingbox = [-3.5, 11, 3, -3];

fs.writeFileSync(pathOrig, `export const CTHS_2020_QUESTIONS = ${JSON.stringify(qOrig, null, 2)};\n`, 'utf8');
fs.writeFileSync(pathSim, `export const CTHS_2020_SIMILAR_QUESTIONS = ${JSON.stringify(qSim, null, 2)};\n`, 'utf8');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  await db.collection('questions').doc('cths2020-q15').update({
    graphData: qOrig[qIndexOrig].graphData,
    updatedAt: FieldValue.serverTimestamp()
  });

  await db.collection('questions').doc('cths2020s-q15').update({
    graphData: qSim[qIndexSim].graphData,
    updatedAt: FieldValue.serverTimestamp()
  });

  await db.doc('sync_meta/questions').update({
    version: Date.now(),
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log('Successfully updated turning points on graphs!');
  process.exit(0);
}
run();
