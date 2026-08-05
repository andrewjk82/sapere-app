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

// Corrected SVG V2:
// - Shifted everything up to prevent bottom labels (10 cm) from being cut off.
// - Increased viewBox height/width to give plenty of breathing room.
// - Adjusted label positions to avoid overlaps or cluttered areas.
const correctedSvg = `<svg viewBox="0 0 300 220" width="100%" height="auto" style="max-width:320px;display:block;margin:1rem auto;background-color:#ffffff;border-radius:16px;padding:0.5rem;" xmlns="http://www.w3.org/2000/svg"><path d="M50,160 L150,160 L200,140 L100,140 Z" fill="#e0e7ff" fill-opacity="0.4" stroke="none"/><path d="M150,160 L150,120 L200,100 L200,140 Z" fill="#fef3c7" fill-opacity="0.45" stroke="none"/><path d="M150,120 L110,120 L160,100 L200,100 Z" fill="#fef3c7" fill-opacity="0.4" stroke="none"/><path d="M110,120 L110,80 L160,60 L160,100 Z" fill="#e0e7ff" fill-opacity="0.4" stroke="none"/><path d="M110,80 L50,80 L100,60 L160,60 Z" fill="#fef3c7" fill-opacity="0.45" stroke="none"/><path d="M50,160 L150,160 L150,120 L110,120 L110,80 L50,80 Z" fill="#dbeafe" fill-opacity="0.65" stroke="none"/><line x1="100" y1="140" x2="200" y2="140" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/><line x1="100" y1="60" x2="100" y2="140" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/><line x1="100" y1="60" x2="160" y2="60" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/><line x1="160" y1="100" x2="160" y2="60" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/><line x1="50" y1="160" x2="100" y2="140" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/><line x1="110" y1="120" x2="160" y2="100" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/><line x1="110" y1="80" x2="160" y2="60" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/><path d="M50,160 L150,160 L150,120 L110,120 L110,80 L50,80 Z" fill="none" stroke="#475569" stroke-width="2" stroke-linejoin="round"/><line x1="200" y1="140" x2="200" y2="100" stroke="#475569" stroke-width="2"/><line x1="200" y1="100" x2="160" y2="100" stroke="#475569" stroke-width="2"/><line x1="150" y1="160" x2="200" y2="140" stroke="#475569" stroke-width="2"/><line x1="150" y1="120" x2="200" y2="100" stroke="#475569" stroke-width="2"/><line x1="50" y1="80" x2="100" y2="60" stroke="#475569" stroke-width="2"/><text x="100" y="180" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">10 cm</text><text x="25" y="120" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">8 cm</text><text x="80" y="66" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">6 cm</text><text x="130" y="105" font-family="system-ui,-apple-system,sans-serif" font-size="12" font-weight="600" fill="#475569" text-anchor="middle" dominant-baseline="central">4 cm</text><text x="165" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="12" font-weight="600" fill="#475569" text-anchor="start" dominant-baseline="central">4 cm</text><text x="185" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">5 cm</text></svg>`;

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

  console.log('Successfully corrected y9-16b-q5f L-prism layout and margins.');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
