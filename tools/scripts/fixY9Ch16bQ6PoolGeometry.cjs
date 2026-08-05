const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const path = './src/constants/seedYear9Ch16BQuestions.js';
let content = fs.readFileSync(path, 'utf8');

const arrayMatch = content.match(/export const Y9_CH16B_QUESTIONS = (\[[\s\S]*?\]);\n/);
if (!arrayMatch) throw new Error("No array found");

let questions = eval(arrayMatch[1]);

// 3D Pool SVG Design:
// - Front face: side profile of pool (trapezoid with top = 25m, left = 1m, right = 2.5m)
// - Projected depth into page: 12m width.
// - Water surface colored beautifully, helper lines for 1.5m drop clearly visible.
// - Perfect coordinates to prevent any labels from getting cut off at the bottom.
const poolSvg = `<svg viewBox="0 0 320 220" width="100%" height="auto" style="max-width:440px;display:block;margin:1rem auto;background-color:#ffffff;border-radius:16px;padding:0.5rem;" xmlns="http://www.w3.org/2000/svg"><path d="M110,40 L270,40 L270,140 L110,80 Z" fill="#e0e7ff" fill-opacity="0.4" stroke="none"/><path d="M210,170 L210,110 L270,80 L270,140 Z" fill="#fef3c7" fill-opacity="0.45" stroke="none"/><path d="M50,110 L210,170 L270,140 L110,80 Z" fill="#fef3c7" fill-opacity="0.4" stroke="none"/><path d="M50,70 L210,70 L270,40 L110,40 Z" fill="#7dd3fc" fill-opacity="0.35" stroke="none"/><path d="M50,110 L50,70 L210,70 L210,170 Z" fill="#dbeafe" fill-opacity="0.6" stroke="none"/><line x1="110" y1="80" x2="270" y2="140" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/><line x1="110" y1="40" x2="110" y2="80" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/><line x1="50" y1="110" x2="110" y2="80" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/><path d="M50,70 L210,70 L210,170 L50,110 Z" fill="none" stroke="#475569" stroke-width="2" stroke-linejoin="round"/><line x1="210" y1="70" x2="270" y2="40" stroke="#475569" stroke-width="2"/><line x1="270" y1="40" x2="270" y2="140" stroke="#475569" stroke-width="2"/><line x1="210" y1="170" x2="270" y2="140" stroke="#475569" stroke-width="2"/><line x1="50" y1="70" x2="110" y2="40" stroke="#475569" stroke-width="2"/><line x1="110" y1="40" x2="270" y2="40" stroke="#475569" stroke-width="2"/><line x1="210" y1="110" x2="210" y2="170" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4 3"/><text x=\"130\" y=\"58\" font-family=\"system-ui,-apple-system,sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#1e293b\" text-anchor=\"middle\" dominant-baseline=\"central\">25 m</text><text x=\"32\" y=\"90\" font-family=\"system-ui,-apple-system,sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#1e293b\" text-anchor=\"middle\" dominant-baseline=\"central\">1 m</text><text x=\"228\" y=\"120\" font-family=\"system-ui,-apple-system,sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#1e293b\" text-anchor=\"start\" dominant-baseline=\"central\">2.5 m</text><text x=\"193\" y=\"140\" font-family=\"system-ui,-apple-system,sans-serif\" font-size=\"11\" font-weight=\"600\" fill=\"#475569\" text-anchor=\"end\" dominant-baseline=\"central\">1.5 m</text><text x=\"120\" y=\"145\" font-family=\"system-ui,-apple-system,sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#1d4ed8\" text-anchor=\"middle\" dominant-baseline=\"central\">EH (slope)</text><text x=\"248\" y=\"50\" font-family=\"system-ui,-apple-system,sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"#1e293b\" text-anchor=\"middle\" dominant-baseline=\"central\">12 m</text></svg>`;

const idsToUpdate = ['y9-16b-q6a', 'y9-16b-q6b'];

idsToUpdate.forEach(id => {
  const qIdx = questions.findIndex(x => x.id === id);
  if (qIdx !== -1) {
    questions[qIdx].graphData = { svg: poolSvg };
    questions[qIdx].solutionSteps[0].graphData = { svg: poolSvg };
  }
});

const newContent = `export const Y9_CH16B_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
fs.writeFileSync(path, newContent, 'utf8');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  for (const id of idsToUpdate) {
    const q = questions.find(x => x.id === id);
    await db.collection('questions').doc(id).update({
      graphData: q.graphData,
      solutionSteps: q.solutionSteps,
      updatedAt: FieldValue.serverTimestamp()
    });
  }

  await db.doc('sync_meta/questions').update({
    version: Date.now(),
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log('Successfully redrew y9-16b-q6a and y9-16b-q6b SVGs in 3D perspective.');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
