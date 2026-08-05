const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const path = './src/constants/seedYear9Ch16Questions.js';
let content = fs.readFileSync(path, 'utf8');

const arrayMatch = content.match(/export const Y9_CH16_QUESTIONS = (\[[\s\S]*?\]);\n/);
if (!arrayMatch) throw new Error("No array found");

let questions = eval(arrayMatch[1]);
const qIndex = questions.findIndex(x => x.id === 'y9-16a-q10c');
if (qIndex === -1) throw new Error("Question not found");

// Main graph SVG update
const mainSvg = `<svg viewBox="0 0 240 200" width="250" height="auto" style="max-width:246px;display:block;margin:1rem auto;background-color:#ffffff;border-radius:16px;padding:0.5rem;" xmlns="http://www.w3.org/2000/svg"><path d="M60,156 L168,156 L168,84 L114,30 L60,84 Z" fill="#dbeafe" fill-opacity="0.55" stroke="#475569" stroke-width="2" stroke-linejoin="round" /><line x1="60" y1="84" x2="168" y2="84" stroke="#475569" stroke-width="1.5" stroke-dasharray="4 4"/><line x1="114" y1="30" x2="114" y2="84" stroke="#475569" stroke-width="1.5" stroke-dasharray="3 3"/><rect x="108" y="78" width="6" height="6" fill="none" stroke="#475569" stroke-width="1"/><text x="114" y="170" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">6 cm</text><text x="38" y="120" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">4 cm</text><text x="136" y="57" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">3 cm</text></svg>`;

// Step 1 SVG update (Rectangle highlighted)
const step1Svg = `<svg viewBox="0 0 240 200" width="250" height="auto" style="max-width:246px;display:block;margin:1rem auto;background-color:#ffffff;border-radius:16px;padding:0.5rem;" xmlns="http://www.w3.org/2000/svg"><path d="M60,156 L168,156 L168,84 L114,30 L60,84 Z" fill="#dbeafe" fill-opacity="0.3" stroke="#475569" stroke-width="2" stroke-linejoin="round" /><rect x="60" y="84" width="108" height="72" fill="#fef08a" fill-opacity="0.8" stroke="#475569" stroke-width="2" stroke-linejoin="round" /><line x1="60" y1="84" x2="168" y2="84" stroke="#475569" stroke-width="1.5" stroke-dasharray="4 4"/><line x1="114" y1="30" x2="114" y2="84" stroke="#475569" stroke-width="1.5" stroke-dasharray="3 3"/><rect x="108" y="78" width="6" height="6" fill="none" stroke="#475569" stroke-width="1"/><text x="114" y="170" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">6 cm</text><text x="38" y="120" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">4 cm</text><text x="136" y="57" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">3 cm</text></svg>`;

// Step 2 SVG update (Triangle highlighted)
const step2Svg = `<svg viewBox="0 0 240 200" width="250" height="auto" style="max-width:246px;display:block;margin:1rem auto;background-color:#ffffff;border-radius:16px;padding:0.5rem;" xmlns="http://www.w3.org/2000/svg"><path d="M60,156 L168,156 L168,84 L114,30 L60,84 Z" fill="#dbeafe" fill-opacity="0.3" stroke="#475569" stroke-width="2" stroke-linejoin="round" /><path d="M60,84 L168,84 L114,30 Z" fill="#fef08a" fill-opacity="0.8" stroke="#475569" stroke-width="2" stroke-linejoin="round" /><line x1="60" y1="84" x2="168" y2="84" stroke="#475569" stroke-width="1.5" stroke-dasharray="4 4"/><line x1="114" y1="30" x2="114" y2="84" stroke="#475569" stroke-width="1.5" stroke-dasharray="3 3"/><rect x="108" y="78" width="6" height="6" fill="none" stroke="#475569" stroke-width="1"/><text x="114" y="170" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">6 cm</text><text x="38" y="120" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">4 cm</text><text x="136" y="57" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">3 cm</text></svg>`;

questions[qIndex].graphData = { svg: mainSvg };
questions[qIndex].solutionSteps[0].graphData = { svg: step1Svg };
questions[qIndex].solutionSteps[1].graphData = { svg: step2Svg };

const newContent = `export const Y9_CH16_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
fs.writeFileSync(path, newContent, 'utf8');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  await db.collection('questions').doc('y9-16a-q10c').update({
    graphData: questions[qIndex].graphData,
    solutionSteps: questions[qIndex].solutionSteps,
    updatedAt: FieldValue.serverTimestamp()
  });

  await db.doc('sync_meta/questions').update({
    version: Date.now(),
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log('Successfully updated height representation in y9-16a-q10c SVGs.');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
