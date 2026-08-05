const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const path = './src/constants/seedYear9Ch16Questions.js';
let content = fs.readFileSync(path, 'utf8');

const arrayMatch = content.match(/export const Y9_CH16_QUESTIONS = (\[[\s\S]*?\]);\n/);
if (!arrayMatch) throw new Error("No array found");

let questions = eval(arrayMatch[1]);
const qIndex = questions.findIndex(x => x.id === 'y9-16a-q10h');
if (qIndex === -1) throw new Error("Question not found");

// Updated Main Graph SVG
const mainSvg = `<svg viewBox="0 -50 280 280" width="250" height="auto" style="max-width:246px;display:block;margin:1rem auto;background-color:#ffffff;border-radius:16px;padding:0.5rem;" xmlns="http://www.w3.org/2000/svg"><path d="M 50,100 L 218,100 L 134,160 Z" fill="#dbeafe" fill-opacity="0.55" stroke="#475569" stroke-width="2"/><rect x="50" y="28" width="168" height="72" fill="#dbeafe" fill-opacity="0.55" stroke="#475569" stroke-width="2"/><path d="M 74,28 A 60,60 0 0,1 194,28" fill="#dbeafe" fill-opacity="0.55" stroke="#475569" stroke-width="2"/><line x1="74" y1="28" x2="194" y2="28" stroke="#475569" stroke-width="1.5" stroke-dasharray="3 3"/><line x1="134" y1="100" x2="134" y2="160" stroke="#475569" stroke-width="1.5" stroke-dasharray="3 3"/><rect x="128" y="100" width="6" height="6" fill="none" stroke="#475569" stroke-width="1"/><text x="134" y="174" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">14 cm</text><text x="28" y="64" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">6 cm</text><text x="134" y="14" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">10 cm</text><text x="154" y="130" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">5 cm</text></svg>`;

// Step 1: Rectangle highlighted
const step1Svg = `<svg viewBox="0 -50 280 280" width="250" height="auto" style="max-width:246px;display:block;margin:1rem auto;background-color:#ffffff;border-radius:16px;padding:0.5rem;" xmlns="http://www.w3.org/2000/svg"><path d="M 50,100 L 218,100 L 134,160 Z" fill="#dbeafe" fill-opacity="0.3" stroke="#475569" stroke-width="2"/><rect x="50" y="28" width="168" height="72" fill="#fef08a" fill-opacity="0.8" stroke="#475569" stroke-width="2"/><path d="M 74,28 A 60,60 0 0,1 194,28" fill="#dbeafe" fill-opacity="0.3" stroke="#475569" stroke-width="2"/><line x1="74" y1="28" x2="194" y2="28" stroke="#475569" stroke-width="1.5" stroke-dasharray="3 3"/><line x1="134" y1="100" x2="134" y2="160" stroke="#475569" stroke-width="1.5" stroke-dasharray="3 3"/><rect x="128" y="100" width="6" height="6" fill="none" stroke="#475569" stroke-width="1"/><text x="134" y="174" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">14 cm</text><text x="28" y="64" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">6 cm</text><text x="134" y="14" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">10 cm</text><text x="154" y="130" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">5 cm</text></svg>`;

// Step 2: Semicircle highlighted
const step2Svg = `<svg viewBox="0 -50 280 280" width="250" height="auto" style="max-width:246px;display:block;margin:1rem auto;background-color:#ffffff;border-radius:16px;padding:0.5rem;" xmlns="http://www.w3.org/2000/svg"><path d="M 50,100 L 218,100 L 134,160 Z" fill="#dbeafe" fill-opacity="0.3" stroke="#475569" stroke-width="2"/><rect x="50" y="28" width="168" height="72" fill="#dbeafe" fill-opacity="0.3" stroke="#475569" stroke-width="2"/><path d="M 74,28 A 60,60 0 0,1 194,28 Z" fill="#fef08a" fill-opacity="0.8" stroke="#475569" stroke-width="2"/><line x1="74" y1="28" x2="194" y2="28" stroke="#475569" stroke-width="1.5" stroke-dasharray="3 3"/><line x1="134" y1="100" x2="134" y2="160" stroke="#475569" stroke-width="1.5" stroke-dasharray="3 3"/><rect x="128" y="100" width="6" height="6" fill="none" stroke="#475569" stroke-width="1"/><text x="134" y="174" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">14 cm</text><text x="28" y="64" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">6 cm</text><text x="134" y="14" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">10 cm</text><text x="154" y="130" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">5 cm</text></svg>`;

// Step 3: Triangle highlighted
const step3Svg = `<svg viewBox="0 -50 280 280" width="250" height="auto" style="max-width:246px;display:block;margin:1rem auto;background-color:#ffffff;border-radius:16px;padding:0.5rem;" xmlns="http://www.w3.org/2000/svg"><path d="M 50,100 L 218,100 L 134,160 Z" fill="#fef08a" fill-opacity="0.8" stroke="#475569" stroke-width="2"/><rect x="50" y="28" width="168" height="72" fill="#dbeafe" fill-opacity="0.3" stroke="#475569" stroke-width="2"/><path d="M 74,28 A 60,60 0 0,1 194,28" fill="#dbeafe" fill-opacity="0.3" stroke="#475569" stroke-width="2"/><line x1="74" y1="28" x2="194" y2="28" stroke="#475569" stroke-width="1.5" stroke-dasharray="3 3"/><line x1="134" y1="100" x2="134" y2="160" stroke="#475569" stroke-width="1.5" stroke-dasharray="3 3"/><rect x="128" y="100" width="6" height="6" fill="none" stroke="#475569" stroke-width="1"/><text x="134" y="174" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">14 cm</text><text x="28" y="64" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">6 cm</text><text x="134" y="14" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">10 cm</text><text x="154" y="130" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">5 cm</text></svg>`;

questions[qIndex].graphData = { svg: mainSvg };
if (questions[qIndex].solutionSteps && questions[qIndex].solutionSteps.length > 2) {
  questions[qIndex].solutionSteps[0].graphData = { svg: step1Svg };
  questions[qIndex].solutionSteps[1].graphData = { svg: step2Svg };
  questions[qIndex].solutionSteps[2].graphData = { svg: step3Svg };
}

const newContent = `export const Y9_CH16_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
fs.writeFileSync(path, newContent, 'utf8');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  await db.collection('questions').doc('y9-16a-q10h').update({
    graphData: questions[qIndex].graphData,
    solutionSteps: questions[qIndex].solutionSteps,
    updatedAt: FieldValue.serverTimestamp()
  });

  await db.doc('sync_meta/questions').update({
    version: Date.now(),
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log('Successfully updated height and diameter indicators in y9-16a-q10h SVGs.');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
