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

// Corrected SVG V8:
// - Reduced max-width from 440px to 320px (style="max-width:320px;") so the drawing scales down slightly and matches the exact visual proportions of the other prism question cards.
const correctedSvg = `<svg viewBox="0 0 250 170" width="100%" height="auto" style="max-width:320px;display:block;margin:1rem auto;background-color:#ffffff;border-radius:16px;padding:0.5rem;" xmlns="http://www.w3.org/2000/svg"><path d="M50,130 L150,130 L200,110 L100,110 Z" fill="#e0e7ff" fill-opacity="0.4" stroke="none"/><path d="M150,130 L150,90 L200,70 L200,110 Z" fill="#fef3c7" fill-opacity="0.55" stroke="none"/><path d="M150,90 L110,90 L160,70 L200,70 Z" fill="#fef3c7" fill-opacity="0.55" stroke="none"/><path d="M110,90 L110,50 L160,30 L160,70 Z" fill="#fef3c7" fill-opacity="0.55" stroke="none"/><path d="M110,50 L50,50 L100,30 L160,30 Z" fill="#fef3c7" fill-opacity="0.55" stroke="none"/><path d="M50,130 L150,130 L150,90 L110,90 L110,50 L50,50 Z" fill="#dbeafe" fill-opacity="0.75" stroke="none"/><line x1="100" y1="110" x2="200" y2="110" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/><line x1="100" y1="30" x2="100" y2="110" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/><line x1="50" y1="130" x2="100" y2="110" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/><path d="M50,130 L150,130 L150,90 L110,90 L110,50 L50,50 Z" fill="none" stroke="#475569" stroke-width="2" stroke-linejoin="round"/><line x1="100" y1="30" x2="160" y2="30" stroke="#475569" stroke-width="1.5"/><line x1="160" y1="70" x2="160" y2="30" stroke="#475569" stroke-width="1.5"/><line x1="110" y1="90" x2="160" y2="70" stroke="#475569" stroke-width="1.5"/><line x1="110" y1="50" x2="160" y2="30" stroke="#475569" stroke-width="1.5"/><line x1="200" y1="110" x2="200" y2="70" stroke="#475569" stroke-width="2"/><line x1="200" y1="70" x2="160" y2="70" stroke="#475569" stroke-width="1.5"/><line x1="150" y1="130" x2="200" y2="110" stroke="#475569" stroke-width="2"/><line x1="150" y1="90" x2="200" y2="70" stroke="#475569" stroke-width="2"/><line x1="50" y1="50" x2="100" y2="30" stroke="#475569" stroke-width="2"/><text x="100" y="145" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">10 cm</text><text x="32" y="90" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">8 cm</text><text x="80" y="40" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">6 cm</text><text x="130" y="80" font-family="system-ui,-apple-system,sans-serif" font-size="12" font-weight="600" fill="#475569" text-anchor="middle" dominant-baseline="central">4 cm</text><text x="162" y="110" font-family="system-ui,-apple-system,sans-serif" font-size="12" font-weight="600" fill="#475569" text-anchor="start" dominant-baseline="central">4 cm</text><text x="182" y="126" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">5 cm</text></svg>`;

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

  console.log('Successfully adjusted y9-16b-q5f SVG size to max-width 320px.');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
