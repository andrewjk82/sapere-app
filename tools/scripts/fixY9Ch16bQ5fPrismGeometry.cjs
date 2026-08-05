const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const path = './src/constants/seedYear9Ch16BQuestions.js';
let content = fs.readFileSync(path, 'utf8');

const arrayMatch = content.match(/export const Y9_CH16B_QUESTIONS = (\[[\s\S]*?\]);\n/);
if (!arrayMatch) throw new Error("No array found");

let questions = eval(arrayMatch[1]);
const qIndex = questions.findIndex(x => x.id === 'y9-16b-q5f');
if (qIndex === -1) throw new Error("Question not found");

// Corrected SVG:
// 1. Replaced hidden internal wireframe solid lines with dashed lines to create a clean, non-overlapping 3D projection.
// 2. Verified and aligned labels correctly.
const correctedSvg = `<svg viewBox="0 0 250 210" width="100%" height="auto" style="max-width:246px;display:block;margin:1rem auto;background-color:#ffffff;border-radius:16px;padding:0.5rem;" xmlns="http://www.w3.org/2000/svg"><path d="M50,180 L150,180 L200,160 L100,160 Z" fill="#e0e7ff" fill-opacity="0.4" stroke="none"/><path d="M150,180 L150,140 L200,120 L200,160 Z" fill="#fef3c7" fill-opacity="0.45" stroke="none"/><path d="M150,140 L110,140 L160,120 L200,120 Z" fill="#fef3c7" fill-opacity="0.4" stroke="none"/><path d="M110,140 L110,100 L160,80 L160,120 Z" fill="#e0e7ff" fill-opacity="0.4" stroke="none"/><path d="M110,100 L50,100 L100,80 L160,80 Z" fill="#fef3c7" fill-opacity="0.45" stroke="none"/><path d="M50,180 L150,180 L150,140 L110,140 L110,100 L50,100 Z" fill="#dbeafe" fill-opacity="0.65" stroke="none"/><line x1="100" y1="160" x2="200" y2="160" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/><line x1="100" y1="80" x2="100" y2="160" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/><line x1="100" y1="80" x2="160" y2="80" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/><line x1="160" y1="120" x2="160" y2="80" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/><line x1="50" y1="180" x2="100" y2="160" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/><line x1="110" y1="140" x2="160" y2="120" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/><line x1="110" y1="100" x2="160" y2="80" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/><path d="M50,180 L150,180 L150,140 L110,140 L110,100 L50,100 Z" fill="none" stroke="#475569" stroke-width="2" stroke-linejoin="round"/><line x1="200" y1="160" x2="200" y2="120" stroke="#475569" stroke-width="2"/><line x1="200" y1="120" x2="160" y2="120" stroke="#475569" stroke-width="2"/><line x1="150" y1="180" x2="200" y2="160" stroke="#475569" stroke-width="2"/><line x1="150" y1="140" x2="200" y2="120" stroke="#475569" stroke-width="2"/><line x1="50" y1="100" x2="100" y2="80" stroke="#475569" stroke-width="2"/><text x="100" y="196" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">10 cm</text><text x="25" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">8 cm</text><text x="80" y="86" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">6 cm</text><text x="168" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="start" dominant-baseline="central">4 cm</text><text x="185" y="180" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">5 cm</text></svg>`;

questions[qIndex].graphData = { svg: correctedSvg };
questions[qIndex].solutionSteps[0].graphData = { svg: correctedSvg };

const newContent = `export const Y9_CH16B_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
fs.writeFileSync(path, newContent, 'utf8');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  await db.collection('questions').doc('y9-16b-q5f').update({
    graphData: questions[qIndex].graphData,
    solutionSteps: questions[qIndex].solutionSteps,
    updatedAt: FieldValue.serverTimestamp()
  });

  await db.doc('sync_meta/questions').update({
    version: Date.now(),
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log('Successfully corrected y9-16b-q5f L-prism hidden lines.');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
