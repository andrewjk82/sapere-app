const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const path = './src/constants/seedYear9Ch16Questions.js';
let content = fs.readFileSync(path, 'utf8');

const arrayMatch = content.match(/export const Y9_CH16_QUESTIONS = (\[[\s\S]*?\]);\n/);
if (!arrayMatch) throw new Error("No array found");

let questions = eval(arrayMatch[1]);
const qIndex = questions.findIndex(x => x.id === 'y9-16a-q4');
if (qIndex === -1) throw new Error("Question not found");

// Fix SVG code: correct path typo, adjust second trapezium to be a mathematically rotated copy
const correctedSvg = `<svg viewBox="0 0 340 220" width="250" height="auto" style="max-width:246px;display:block;margin:1rem auto;background-color:#ffffff;border-radius:16px;padding:0.5rem;" xmlns="http://www.w3.org/2000/svg"><path d="M50,170 L170,170 L150,80 L90,80 Z" fill="#dbeafe" fill-opacity="0.55" stroke="#475569" stroke-width="2" stroke-linejoin="round" /><path d="M170,170 L230,170 L270,80 L150,80 Z" fill="#fef3c7" fill-opacity="0.55" stroke="#475569" stroke-width="2" stroke-linejoin="round" stroke-dasharray="6 4"/><text x=\"140\" y=\"195\" font-family=\"system-ui,-apple-system,sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#1e293b\" text-anchor=\"middle\" dominant-baseline=\"central\">b₁ + b₂</text><text x=\"40\" y=\"125\" font-family=\"system-ui,-apple-system,sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#1e293b\" text-anchor=\"middle\" dominant-baseline=\"central\">h</text><text x=\"120\" y=\"60\" font-family=\"system-ui,-apple-system,sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#1e293b\" text-anchor=\"middle\" dominant-baseline=\"central\">b₁</text><text x=\"110\" y=\"155\" font-family=\"system-ui,-apple-system,sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#1e293b\" text-anchor=\"middle\" dominant-baseline=\"central\">b₂</text></svg>`;

questions[qIndex].solutionSteps[0].graphData = { svg: correctedSvg };

const newContent = `export const Y9_CH16_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
fs.writeFileSync(path, newContent, 'utf8');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  await db.collection('questions').doc('y9-16a-q4').update({
    solutionSteps: questions[qIndex].solutionSteps,
    updatedAt: FieldValue.serverTimestamp()
  });

  await db.doc('sync_meta/questions').update({
    version: Date.now(),
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log('Successfully corrected y9-16a-q4 SVG geometry.');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
