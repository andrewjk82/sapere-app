const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const path = './src/constants/seedYear9Ch16Questions.js';
let content = fs.readFileSync(path, 'utf8');

const arrayMatch = content.match(/export const Y9_CH16_QUESTIONS = (\[[\s\S]*?\]);\n/);
if (!arrayMatch) throw new Error("No array found");

let questions = eval(arrayMatch[1]);
const qIndex = questions.findIndex(x => x.id === 'y9-16a-q10e');
if (qIndex === -1) throw new Error("Question not found");

const svgStr = '<svg viewBox="0 0 320 180" width="100%" height="auto" style="max-width:440px;display:block;margin:1rem auto;background-color:#f8fafc;border-radius:16px;border:1px solid #e2e8f0;padding:0.5rem;" xmlns="http://www.w3.org/2000/svg"><path d="M 50,40 L 200,40 A 50,50 0 0,1 200,140 L 50,140 A 50,50 0 0,1 50,40 Z" fill="#dbeafe" fill-opacity="0.55" stroke="#475569" stroke-width="2"/><line x1="50" y1="40" x2="50" y2="140" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 4"/><line x1="200" y1="40" x2="200" y2="140" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 4"/><line x1="50" y1="155" x2="50" y2="165" stroke="#475569" stroke-width="1.5"/><line x1="200" y1="155" x2="200" y2="165" stroke="#475569" stroke-width="1.5"/><line x1="50" y1="160" x2="200" y2="160" stroke="#475569" stroke-width="1.5"/><path d="M 50,160 L 56,157 L 56,163 Z" fill="#475569"/><path d="M 200,160 L 194,157 L 194,163 Z" fill="#475569"/><text x="125" y="172" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">15 m</text><line x1="125" y1="40" x2="125" y2="140" stroke="#475569" stroke-width="1.5"/><path d="M 125,40 L 122,46 L 128,46 Z" fill="#475569"/><path d="M 125,140 L 122,134 L 128,134 Z" fill="#475569"/><rect x="130" y="80" width="38" height="20" fill="#f8fafc" rx="4"/><text x="149" y="90" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">10 m</text></svg>';

// Update MAIN graphData
questions[qIndex].graphData = { svg: svgStr };
// Update solutionSteps[0] graphData to match, because they should be consistent and this new one is much better.
if (questions[qIndex].solutionSteps && questions[qIndex].solutionSteps[0]) {
  questions[qIndex].solutionSteps[0].graphData = { svg: svgStr };
}

const newContent = `export const Y9_CH16_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
fs.writeFileSync(path, newContent, 'utf8');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  await db.collection('questions').doc('y9-16a-q10e').update({
    graphData: questions[qIndex].graphData,
    solutionSteps: questions[qIndex].solutionSteps,
    updatedAt: FieldValue.serverTimestamp()
  });

  await db.doc('sync_meta/questions').update({
    version: Date.now(),
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log('Successfully updated main graph and DB.');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
