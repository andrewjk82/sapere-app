const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const path = './src/constants/seedYear9Ch16BQuestions.js';
let content = fs.readFileSync(path, 'utf8');

const arrayMatch = content.match(/export const Y9_CH16B_QUESTIONS = (\[[\s\S]*?\]);\n/);
if (!arrayMatch) throw new Error("No array found");

let questions = eval(arrayMatch[1]);
const qIndex = questions.findIndex(x => x.id === 'y9-16b-q2');
if (qIndex === -1) throw new Error("Question not found");

const correctedSvg = `<svg viewBox="0 0 250 210" width="250" height="auto" style="max-width:246px;display:block;margin:1rem auto;background-color:#ffffff;border-radius:16px;padding:0.5rem;" xmlns="http://www.w3.org/2000/svg"><path d="M90,60 L210,60 L210,140 L90,140 Z" fill="#93c5fd" fill-opacity="0.3" stroke="none"/><path d="M50,170 L170,170 L210,140 L90,140 Z" fill="#fde68a" fill-opacity="0.4" stroke="none"/><path d="M50,90 L90,60 L90,140 L50,170 Z" fill="#93c5fd" fill-opacity="0.3" stroke="none"/><path d="M170,90 L210,60 L210,140 L170,170 Z" fill="#bfdbfe" fill-opacity="0.5" stroke="none"/><path d="M50,170 L170,170 L170,90 L50,90 Z" fill="#dbeafe" fill-opacity="0.65" stroke="none"/><path d="M170,170 L210,140 L210,60 L170,90 Z" fill="#bfdbfe" fill-opacity="0.5" stroke="none"/><line x1="90" y1="140" x2="50" y2="170" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/><line x1="90" y1="140" x2="210" y2="140" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/><line x1="90" y1="140" x2="90" y2="60" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/><path d="M50,170 L170,170 L210,140 L210,60 L90,60 L50,90 Z" fill="none" stroke="#475569" stroke-width="2" stroke-linejoin="round"/><line x1="50" y1="90" x2="170" y2="90" stroke="#475569" stroke-width="2" stroke-linejoin="round"/><line x1="170" y1="90" x2="170" y2="170" stroke="#475569" stroke-width="2" stroke-linejoin="round"/><line x1="170" y1="90" x2="210" y2="60" stroke="#475569" stroke-width="2" stroke-linejoin="round"/><text x="110" y="185" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">12 cm</text><text x="32" y="130" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">8 cm</text><text x="195" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">12 cm</text><text x="130" y="45" font-family="system-ui,-apple-system,sans-serif" font-size="11" font-weight="700" fill="#dc2626" text-anchor="middle">OPEN TOP (NO LID)</text></svg>`;

questions[qIndex].graphData = { svg: correctedSvg };
questions[qIndex].solutionSteps[0].graphData = { svg: correctedSvg };

const newContent = `export const Y9_CH16B_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
fs.writeFileSync(path, newContent, 'utf8');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  await db.collection('questions').doc('y9-16b-q2').update({
    graphData: questions[qIndex].graphData,
    solutionSteps: questions[qIndex].solutionSteps,
    updatedAt: FieldValue.serverTimestamp()
  });

  await db.doc('sync_meta/questions').update({
    version: Date.now(),
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log('Successfully corrected y9-16b-q2 open-top box SVG.');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
