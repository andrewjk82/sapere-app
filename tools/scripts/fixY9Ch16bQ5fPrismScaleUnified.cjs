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

// Corrected SVG V9:
// - Standardized viewBox to 320 220 (same as other questions) and max-width to 440px.
// - Re-centered the L-prism inside this new coordinate space by shifting x by +35 and y by +30.
// - This results in identical canvas margins and scaling factor relative to the house prism (Question 15).
const correctedSvg = `<svg viewBox="0 0 320 220" width="100%" height="auto" style="max-width:440px;display:block;margin:1rem auto;background-color:#ffffff;border-radius:16px;padding:0.5rem;" xmlns="http://www.w3.org/2000/svg"><path d="M85,160 L185,160 L235,140 L135,140 Z" fill="#e0e7ff" fill-opacity="0.4" stroke="none"/><path d="M185,160 L185,120 L235,100 L235,140 Z" fill="#fef3c7" fill-opacity="0.55" stroke="none"/><path d="M185,120 L145,120 L195,100 L235,100 Z" fill="#fef3c7" fill-opacity="0.55" stroke="none"/><path d="M145,120 L145,80 L195,60 L195,100 Z" fill="#fef3c7" fill-opacity="0.55" stroke="none"/><path d="M145,80 L85,80 L135,60 L195,60 Z" fill="#fef3c7" fill-opacity="0.55" stroke="none"/><path d="M85,160 L185,160 L185,120 L145,120 L145,80 L85,80 Z" fill="#dbeafe" fill-opacity="0.75" stroke="none"/><line x1="135" y1="140" x2="235" y2="140" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/><line x1="135" y1="60" x2="135" y2="140" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/><line x1="85" y1="160" x2="135" y2="140" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/><path d="M85,160 L185,160 L185,120 L145,120 L145,80 L85,80 Z" fill="none" stroke="#475569" stroke-width="2" stroke-linejoin="round"/><line x1="135" y1="60" x2="195" y2="60" stroke="#475569" stroke-width="2"/><line x1="195" y1="100" x2="195" y2="60" stroke="#475569" stroke-width="2"/><line x1="145" y1="120" x2="195" y2="100" stroke="#475569" stroke-width="2"/><line x1="145" y1="80" x2="195" y2="60" stroke="#475569" stroke-width="2"/><line x1="235" y1="140" x2="235" y2="100" stroke="#475569" stroke-width="2"/><line x1="235" y1="100" x2="195" y2="100" stroke="#475569" stroke-width="2"/><line x1="185" y1="160" x2="235" y2="140" stroke="#475569" stroke-width="2"/><line x1="185" y1="120" x2="235" y2="100" stroke="#475569" stroke-width="2"/><line x1="85" y1="80" x2="135" y2="60" stroke="#475569" stroke-width="2"/><text x="135" y="180" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">10 cm</text><text x="65" y="120" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">8 cm</text><text x="115" y="66" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">6 cm</text><text x="165" y="110" font-family="system-ui,-apple-system,sans-serif" font-size="12" font-weight="600" fill="#475569" text-anchor="middle" dominant-baseline="central">4 cm</text><text x="198" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="12" font-weight="600" fill="#475569" text-anchor="start" dominant-baseline="central">4 cm</text><text x="218" y="156" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">5 cm</text></svg>`;

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

  console.log('Successfully unified y9-16b-q5f SVG size and scale to match other questions.');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
