const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const path = './src/constants/seedYear9Ch16BQuestions.js';
let content = fs.readFileSync(path, 'utf8');

const arrayMatch = content.match(/export const Y9_CH16B_QUESTIONS = (\[[\s\S]*?\]);\n/);
if (!arrayMatch) throw new Error("No array found");

let questions = eval(arrayMatch[1]);
const qIndex = questions.findIndex(x => x.id === 'y9-16b-q4a');
if (qIndex === -1) throw new Error("Question not found");

// Corrected SVG: Removed the words 'length', 'height', 'width' from labels, keeping only numerical measurements (e.g. 4.0 m, 3.0 m, 3.5 m)
const correctedSvg = `<svg viewBox="0 0 340 250" width="100%" height="auto" style="max-width:440px;display:block;margin:1rem auto;background-color:#ffffff;border-radius:16px;padding:0.5rem;" xmlns="http://www.w3.org/2000/svg"><path d="M50,200 L190,200 L260,158 L120,158 Z" fill="#e2e8f0" fill-opacity="0.85" stroke="#475569" stroke-width="2" stroke-linejoin="round"/><line x1="65" y1="195" x2="135" y2="153" stroke="#cbd5e1" stroke-width="1" stroke-linecap="round" stroke-dasharray="3 3"/><line x1="90" y1="195" x2="160" y2="153" stroke="#cbd5e1" stroke-width="1" stroke-linecap="round" stroke-dasharray="3 3"/><line x1="120" y1="195" x2="190" y2="153" stroke="#cbd5e1" stroke-width="1" stroke-linecap="round" stroke-dasharray="3 3"/><line x1="150" y1="195" x2="220" y2="153" stroke="#cbd5e1" stroke-width="1" stroke-linecap="round" stroke-dasharray="3 3"/><path d="M120,158 L260,158 L260,53 L120,53 Z" fill="#60a5fa" fill-opacity="0.75" stroke="#475569" stroke-width="2" stroke-linejoin="round"/><path d="M50,200 L50,95 L120,53 L120,158 Z" fill="#93c5fd" fill-opacity="0.8" stroke="#475569" stroke-width="2" stroke-linejoin="round"/><path d="M190,200 L190,95 L260,53 L260,158 Z" fill="#3b82f6" fill-opacity="0.55" stroke="#475569" stroke-width="2" stroke-linejoin="round"/><path d="M50,200 L190,200 L190,95 L50,95 Z" fill="#60a5fa" fill-opacity="0.55" stroke="#475569" stroke-width="2" stroke-linejoin="round"/><line x1="50" y1="95" x2="190" y2="95" stroke="#64748b" stroke-width="1.6" stroke-linecap="round" stroke-dasharray="6 4"/><line x1="190" y1="95" x2="260" y2="53" stroke="#64748b" stroke-width="1.6" stroke-linecap="round" stroke-dasharray="6 4"/><line x1="260" y1="53" x2="120" y2="53" stroke="#64748b" stroke-width="1.6" stroke-linecap="round" stroke-dasharray="6 4"/><line x1="120" y1="53" x2="50" y2="95" stroke="#64748b" stroke-width="1.6" stroke-linecap="round" stroke-dasharray="6 4"/><text x="155" y="68" font-family="system-ui,-apple-system,sans-serif" font-size="11" font-weight="600" fill="#64748b" text-anchor="middle" dominant-baseline="central">ceiling (not painted)</text><line x1="50" y1="200" x2="190" y2="200" stroke="#475569" stroke-width="2" stroke-linecap="round"/><line x1="190" y1="200" x2="260" y2="158" stroke="#475569" stroke-width="2" stroke-linecap="round"/><line x1="260" y1="158" x2="120" y2="158" stroke="#475569" stroke-width="2" stroke-linecap="round"/><line x1="120" y1="158" x2="50" y2="200" stroke="#475569" stroke-width="2" stroke-linejoin="round"/><line x1="50" y1="200" x2="50" y2="95" stroke="#475569" stroke-width="2.2" stroke-linecap="round"/><line x1="190" y1="200" x2="190" y2="95" stroke="#475569" stroke-width="2.2" stroke-linecap="round"/><line x1="120" y1="158" x2="120" y2="53" stroke="#475569" stroke-width="2.2" stroke-linecap="round"/><line x1="260" y1="158" x2="260" y2="53" stroke="#475569" stroke-width="2.2" stroke-linecap="round"/><line x1="50" y1="95" x2="120" y2="53" stroke="#475569" stroke-width="2" stroke-linejoin="round"/><line x1="190" y1="95" x2="260" y2="53" stroke="#475569" stroke-width="2" stroke-linejoin="round"/><line x1="50" y1="95" x2="190" y2="95" stroke="#64748b" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="6 4"/><line x1="120" y1="53" x2="260" y2="53" stroke="#64748b" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="6 4"/><text x="120" y="215" font-family="system-ui,-apple-system,sans-serif" font-size="12" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">4.0 m</text><text x="278" y="105" font-family="system-ui,-apple-system,sans-serif" font-size="12" font-weight="600" fill="#1e293b" text-anchor="start" dominant-baseline="central">3.0 m</text><text x="235" y="185" font-family="system-ui,-apple-system,sans-serif" font-size="12" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">3.5 m</text><text x="145" y="187" font-family="system-ui,-apple-system,sans-serif" font-size="11" font-weight="600" fill="#64748b" text-anchor="middle" dominant-baseline="central">floor (not painted)</text><rect x="40" y="18" width="14" height="14" rx="3" fill="#60a5fa" stroke="#475569" stroke-width="1"/><text x="60" y="25" font-family="system-ui,-apple-system,sans-serif" font-size="12" font-weight="700" fill="#1e293b" text-anchor="start" dominant-baseline="central">paint: 4 walls only</text></svg>`;

questions[qIndex].graphData = { svg: correctedSvg };
questions[qIndex].solutionSteps[0].graphData = { svg: correctedSvg };

const newContent = `export const Y9_CH16B_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
fs.writeFileSync(path, newContent, 'utf8');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  await db.collection('questions').doc('y9-16b-q4a').update({
    graphData: questions[qIndex].graphData,
    solutionSteps: questions[qIndex].solutionSteps,
    updatedAt: FieldValue.serverTimestamp()
  });

  await db.doc('sync_meta/questions').update({
    version: Date.now(),
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log('Successfully removed height, width, length texts from y9-16b-q4a.');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
