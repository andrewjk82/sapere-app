const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const path = './src/constants/seedYear9Ch16BQuestions.js';
let content = fs.readFileSync(path, 'utf8');

const arrayMatch = content.match(/export const Y9_CH16B_QUESTIONS = (\[[\s\S]*?\]);\n/);
if (!arrayMatch) throw new Error("No array found");

let questions = eval(arrayMatch[1]);
// Note: The question ID is y9-16b-q5e (it was found on line 715)
const qIndex = questions.findIndex(x => x.id === 'y9-16b-q5e');
if (qIndex === -1) throw new Error("Question not found");

// Corrected SVG: 
// 1. Turned hidden internal lines into dashed lines to remove visual clutter and confusion
// 2. Added a right-angle symbol (M116,48 L122,56 L130,50) at the roof apex to clearly show it is right-angled
const correctedSvg = `<svg viewBox="0 0 320 240" width="100%" height="auto" style="max-width:440px;display:block;margin:1rem auto;background-color:#ffffff;border-radius:16px;padding:0.5rem;" xmlns="http://www.w3.org/2000/svg"><path d="M60,170 L160,170 L230,142 L130,142 Z" fill="#e0e7ff" fill-opacity="0.45" stroke="none"/><path d="M160,170 L160,90 L230,62 L230,142 Z" fill="#fef3c7" fill-opacity="0.5" stroke="none"/><path d="M160,90 L124,42 L194,14 L230,62 Z" fill="#fef3c7" fill-opacity="0.45" stroke="none"/><path d="M60,170 L160,170 L160,90 L60,90 Z" fill="#dbeafe" fill-opacity="0.6" stroke="none"/><path d="M60,90 L160,90 L124,42 Z" fill="#dbeafe" fill-opacity="0.7" stroke="none"/><path d="M116,48 L122,56 L130,50" fill="none" stroke="#475569" stroke-width="1.5"/><line x1="60" y1="170" x2="130" y2="142" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/><line x1="60" y1="90" x2="130" y2="62" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/><line x1="124" y1="42" x2="194" y2="14" stroke="#475569" stroke-width="2" stroke-linejoin="round"/><line x1="160" y1="90" x2="230" y2="62" stroke="#475569" stroke-width="2"/><line x1="130" y1="142" x2="230" y2="142" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/><line x1="230" y1="142" x2="230" y2="62" stroke="#475569" stroke-width="2"/><line x1="230" y1="62" x2="194" y2="14" stroke="#475569" stroke-width="2"/><line x1="194" y1="14" x2="130" y2="62" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/><line x1="130" y1="62" x2="130" y2="142" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/><path d="M60,170 L160,170 L160,90 L124,42 L60,90 Z" fill="none" stroke="#475569" stroke-width="2" stroke-linejoin="round"/><line x1="60" y1="90" x2="160" y2="90" stroke="#475569" stroke-width="2"/><line x1="60" y1="170" x2="60" y2="90" stroke="#475569" stroke-width="2"/><line x1="160" y1="170" x2="160" y2="90" stroke="#475569" stroke-width="2"/><line x1="160" y1="170" x2="230" y2="142" stroke="#475569" stroke-width="2"/><text x="110" y="188" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">5 cm</text><text x="32" y="130" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">6 cm</text><text x="80" y="60" font-family="system-ui,-apple-system,sans-serif" font-size="12" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">4 cm</text><text x="156" y="60" font-family="system-ui,-apple-system,sans-serif" font-size="12" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">3 cm</text><text x="205" y="162" font-family="system-ui,-apple-system,sans-serif" font-size="12" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">10 cm</text></svg>`;

questions[qIndex].graphData = { svg: correctedSvg };
questions[qIndex].solutionSteps[0].graphData = { svg: correctedSvg };

const newContent = `export const Y9_CH16B_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
fs.writeFileSync(path, newContent, 'utf8');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  await db.collection('questions').doc('y9-16b-q5e').update({
    graphData: questions[qIndex].graphData,
    solutionSteps: questions[qIndex].solutionSteps,
    updatedAt: FieldValue.serverTimestamp()
  });

  await db.doc('sync_meta/questions').update({
    version: Date.now(),
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log('Successfully corrected house pentagonal prism hidden lines and added right-angle indicator in y9-16b-q5e.');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
