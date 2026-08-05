const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const path = './src/constants/seedYear9Ch16BQuestions.js';
let content = fs.readFileSync(path, 'utf8');

const arrayMatch = content.match(/export const Y9_CH16B_QUESTIONS = (\[[\s\S]*?\]);\n/);
if (!arrayMatch) throw new Error("No array found");

let questions = eval(arrayMatch[1]);
const qIndex = questions.findIndex(x => x.id === 'y9-16b-q5a');
if (qIndex === -1) throw new Error("Question not found");

// Corrected SVG: Moved 20 cm label to the correct oblique edge (dx shift) instead of overlapping with the 6 cm base label
const correctedSvg = `<svg viewBox="0 0 320 220" width="100%" height="auto" style="max-width:440px;display:block;margin:1rem auto;background-color:#ffffff;border-radius:16px;padding:0.5rem;" xmlns="http://www.w3.org/2000/svg"><path d="M50,170 L150,170 L240,140 L140,140 Z" fill="#e0e7ff" fill-opacity="0.5" stroke="#475569" stroke-width="2" stroke-linejoin="round"/><path d="M150,170 L50,70 L140,40 L240,140 Z" fill="#fef3c7" fill-opacity="0.5" stroke="#475569" stroke-width="2" stroke-linejoin="round"/><path d="M50,170 L150,170 L50,70 Z" fill="#dbeafe" fill-opacity="0.65" stroke="#475569" stroke-width="2" stroke-linejoin="round"/><line x1="50" y1="170" x2="140" y2="140" stroke="#475569" stroke-width="2" stroke-linecap="round"/><line x1="50" y1="70" x2="140" y2="40" stroke="#475569" stroke-width="2" stroke-linecap="round"/><line x1="140" y1="140" x2="240" y2="140" stroke="#475569" stroke-width="2" stroke-linecap="round"/><line x1="240" y1="140" x2="140" y2="40" stroke="#475569" stroke-width="2" stroke-linecap="round"/><line x1="140" y1="140" x2="140" y2="40" stroke="#475569" stroke-width="2" stroke-linecap="round"/><text x="100" y="185" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">6 cm</text><text x="28" y="120" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">8 cm</text><text x="115" y="115" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">10 cm</text><text x="205" y="162" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">20 cm</text></svg>`;

questions[qIndex].graphData = { svg: correctedSvg };
questions[qIndex].solutionSteps[0].graphData = { svg: correctedSvg };

const newContent = `export const Y9_CH16B_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
fs.writeFileSync(path, newContent, 'utf8');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  await db.collection('questions').doc('y9-16b-q5a').update({
    graphData: questions[qIndex].graphData,
    solutionSteps: questions[qIndex].solutionSteps,
    updatedAt: FieldValue.serverTimestamp()
  });

  await db.doc('sync_meta/questions').update({
    version: Date.now(),
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log('Successfully corrected overlapping 20 cm label in y9-16b-q5a.');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
