const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const path = './src/constants/seedYear9Ch16BQuestions.js';
let content = fs.readFileSync(path, 'utf8');

const arrayMatch = content.match(/export const Y9_CH16B_QUESTIONS = (\[[\s\S]*?\]);\n/);
if (!arrayMatch) throw new Error("No array found");

let questions = eval(arrayMatch[1]);
const qIndex = questions.findIndex(x => x.id === 'y9-16b-q3');
if (qIndex === -1) throw new Error("Question not found");

const correctedSvg = `<svg viewBox="0 0 250 200" width="250" height="auto" style="max-width:246px;display:block;margin:1rem auto;background-color:#ffffff;border-radius:16px;padding:0.5rem;" xmlns="http://www.w3.org/2000/svg"><path d="M90,80 L220,80 L220,130 L90,130 Z" fill="#93c5fd" fill-opacity="0.3" stroke="none"/><path d="M50,160 L180,160 L220,130 L90,130 Z" fill="#fde68a" fill-opacity="0.4" stroke="none"/><path d="M50,110 L90,80 L90,130 L50,160 Z" fill="#93c5fd" fill-opacity="0.3" stroke="none"/><path d="M180,110 L220,80 L220,130 L180,160 Z" fill="#bfdbfe" fill-opacity="0.5" stroke="none"/><path d="M50,160 L180,160 L180,110 L50,110 Z" fill="#dbeafe" fill-opacity="0.65" stroke="none"/><path d="M180,160 L220,130 L220,80 L180,110 Z" fill="#bfdbfe" fill-opacity="0.5" stroke="none"/><line x1="90" y1="130" x2="50" y2="160" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/><line x1="90" y1="130" x2="220" y2="130" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/><line x1="90" y1="130" x2="90" y2="80" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/><path d="M50,160 L180,160 L220,130 L220,80 L90,80 L50,110 Z" fill="none" stroke="#475569" stroke-width="2" stroke-linejoin="round"/><line x1="50" y1="110" x2="180" y2="110" stroke="#475569" stroke-width="2" stroke-linejoin="round"/><line x1="180" y1="110" x2="180" y2="160" stroke="#475569" stroke-width="2" stroke-linejoin="round"/><line x1="180" y1="110" x2="220" y2="80" stroke="#475569" stroke-width="2" stroke-linejoin="round"/><text x="115" y="175" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">30 cm</text><text x="25" y="135" font-family="system-ui,-apple-system,sans-serif" font-size="12" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">10.5 cm</text><text x="205" y="150" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">20 cm</text><text x="135" y="65" font-family="system-ui,-apple-system,sans-serif" font-size="11" font-weight="700" fill="#dc2626" text-anchor="middle">OPEN TOP (NO LID)</text></svg>`;

questions[qIndex].graphData = { svg: correctedSvg };
questions[qIndex].solutionSteps[0].graphData = { svg: correctedSvg };

const newContent = `export const Y9_CH16B_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
fs.writeFileSync(path, newContent, 'utf8');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  await db.collection('questions').doc('y9-16b-q3').update({
    graphData: questions[qIndex].graphData,
    solutionSteps: questions[qIndex].solutionSteps,
    updatedAt: FieldValue.serverTimestamp()
  });

  await db.doc('sync_meta/questions').update({
    version: Date.now(),
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log('Successfully corrected y9-16b-q3 open-top box SVG.');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
