const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const path = './src/constants/seedYear9Ch16Questions.js';
let content = fs.readFileSync(path, 'utf8');

const arrayMatch = content.match(/export const Y9_CH16_QUESTIONS = (\[[\s\S]*?\]);\n/);
if (!arrayMatch) throw new Error("No array found");

let questions = eval(arrayMatch[1]);
const qIndex = questions.findIndex(x => x.id === 'y9-16a-q10a');
if (qIndex === -1) throw new Error("Question not found");

const step1Svg = `<svg viewBox="0 0 260 200" width="250" height="auto" style="max-width:246px;display:block;margin:1rem auto;background-color:#ffffff;border-radius:16px;padding:0.5rem;" xmlns="http://www.w3.org/2000/svg"><path d="M40,170 L208,170 L208,86 L124,86 L124,30 L40,30 Z" fill="#dbeafe" fill-opacity="0.55" stroke="#475569" stroke-width="2" stroke-linejoin="round" /><rect x="40" y="30" width="84" height="140" fill="#fef08a" fill-opacity="0.8" stroke="#475569" stroke-width="2" stroke-linejoin="round" /><line x1="124" y1="86" x2="124" y2="170" stroke="#475569" stroke-width="2" stroke-dasharray="4 4" /><text x="124" y="186" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">12 cm</text><text x="18" y="100" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">10 cm</text><text x="82" y="22" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">6 cm</text><text x="226" y="128" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">6 cm</text></svg>`;

const step2Svg = `<svg viewBox="0 0 260 200" width="250" height="auto" style="max-width:246px;display:block;margin:1rem auto;background-color:#ffffff;border-radius:16px;padding:0.5rem;" xmlns="http://www.w3.org/2000/svg"><path d="M40,170 L208,170 L208,86 L124,86 L124,30 L40,30 Z" fill="#dbeafe" fill-opacity="0.55" stroke="#475569" stroke-width="2" stroke-linejoin="round" /><rect x="124" y="86" width="84" height="84" fill="#fef08a" fill-opacity="0.8" stroke="#475569" stroke-width="2" stroke-linejoin="round" /><line x1="124" y1="86" x2="124" y2="170" stroke="#475569" stroke-width="2" stroke-dasharray="4 4" /><text x="124" y="186" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">12 cm</text><text x="18" y="100" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">10 cm</text><text x="82" y="22" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">6 cm</text><text x="226" y="128" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">6 cm</text></svg>`;

if (questions[qIndex].solutionSteps && questions[qIndex].solutionSteps.length > 1) {
  questions[qIndex].solutionSteps[0].graphData = { svg: step1Svg };
  questions[qIndex].solutionSteps[1].graphData = { svg: step2Svg };
}

const newContent = `export const Y9_CH16_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
fs.writeFileSync(path, newContent, 'utf8');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  await db.collection('questions').doc('y9-16a-q10a').update({
    solutionSteps: questions[qIndex].solutionSteps,
    updatedAt: FieldValue.serverTimestamp()
  });

  await db.doc('sync_meta/questions').update({
    version: Date.now(),
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log('Successfully updated solution steps SVGs with highlights.');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
