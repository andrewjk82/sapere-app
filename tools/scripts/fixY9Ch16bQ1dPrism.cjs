const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const path = './src/constants/seedYear9Ch16BQuestions.js';
let content = fs.readFileSync(path, 'utf8');

const arrayMatch = content.match(/export const Y9_CH16B_QUESTIONS = (\[[\s\S]*?\]);\n/);
if (!arrayMatch) throw new Error("No array found");

let questions = eval(arrayMatch[1]);
const qIndex = questions.findIndex(x => x.id === 'y9-16b-q1d');
if (qIndex === -1) throw new Error("Question not found");

const correctedSvg = `<svg viewBox="0 0 220 200" width="250" height="auto" style="max-width:246px;display:block;margin:1rem auto;background-color:#ffffff;border-radius:16px;padding:0.5rem;" xmlns="http://www.w3.org/2000/svg"><path d="M110,170 L160,140 L160,20 L110,50 Z" fill="#e0e7ff" fill-opacity="0.5" stroke="#475569" stroke-width="2" stroke-linejoin="round"/><path d="M50,50 L110,50 L160,20 L100,20 Z" fill="#fef3c7" fill-opacity="0.55" stroke="#475569" stroke-width="2" stroke-linejoin="round"/><path d="M50,170 L110,170 L110,50 L50,50 Z" fill="#dbeafe" fill-opacity="0.6" stroke="#475569" stroke-width="2" stroke-linejoin="round"/><line x1="50" y1="170" x2="100" y2="140" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/><line x1="100" y1="140" x2="160" y2="140" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/><line x1="100" y1="140" x2="100" y2="20" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/><text x="80" y="185" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">4 cm</text><text x="32" y="110" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">15 cm</text><text x="142" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">8 cm</text></svg>`;

questions[qIndex].graphData = { svg: correctedSvg };
questions[qIndex].solutionSteps[0].graphData = { svg: correctedSvg };

const newContent = `export const Y9_CH16B_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
fs.writeFileSync(path, newContent, 'utf8');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  await db.collection('questions').doc('y9-16b-q1d').update({
    graphData: questions[qIndex].graphData,
    solutionSteps: questions[qIndex].solutionSteps,
    updatedAt: FieldValue.serverTimestamp()
  });

  await db.doc('sync_meta/questions').update({
    version: Date.now(),
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log('Successfully corrected y9-16b-q1d 3D rectangular prism SVG.');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
