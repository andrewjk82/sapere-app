const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const path = './src/constants/seedYear9Ch16Questions.js';
let content = fs.readFileSync(path, 'utf8');

const arrayMatch = content.match(/export const Y9_CH16_QUESTIONS = (\[[\s\S]*?\]);\n/);
if (!arrayMatch) throw new Error("No array found");

let questions = eval(arrayMatch[1]);
const qIndex = questions.findIndex(x => x.id === 'y9-16a-q10g');
if (qIndex === -1) throw new Error("Question not found");

// Main graph SVG update (add top 12 cm labels for left/right sections)
const mainSvg = `<svg viewBox="0 0 260 160" width="250" height="auto" style="max-width:246px;display:block;margin:1rem auto;background-color:#ffffff;border-radius:16px;padding:0.5rem;" xmlns="http://www.w3.org/2000/svg"><path d="M30,126 L222,126 L222,46 L126,46 L126,30 L30,30 Z" fill="#dbeafe" fill-opacity="0.55" stroke="#475569" stroke-width="2" stroke-linejoin="round" /><text x="126" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">24 cm</text><text x="12" y="78" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">12 cm</text><text x="78" y="16" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">12 cm</text><text x="174" y="32" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">12 cm</text><text x="238" y="86" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">10 cm</text></svg>`;

// Step 1 SVG update (Left rectangle highlighted)
const step1Svg = `<svg viewBox="0 0 260 160" width="250" height="auto" style="max-width:246px;display:block;margin:1rem auto;background-color:#ffffff;border-radius:16px;padding:0.5rem;" xmlns="http://www.w3.org/2000/svg"><path d="M30,126 L222,126 L222,46 L126,46 L126,30 L30,30 Z" fill="#dbeafe" fill-opacity="0.3" stroke="#475569" stroke-width="2" stroke-linejoin="round" /><rect x="30" y="30" width="96" height="96" fill="#fef08a" fill-opacity="0.8" stroke="#475569" stroke-width="2" stroke-linejoin="round" /><line x1="126" y1="30" x2="126" y2="126" stroke="#475569" stroke-width="2" stroke-dasharray="4 4" /><text x="126" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">24 cm</text><text x="12" y="78" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">12 cm</text><text x="78" y="16" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">12 cm</text><text x="174" y="32" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">12 cm</text><text x="238" y="86" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">10 cm</text></svg>`;

// Step 2 SVG update (Right rectangle highlighted)
const step2Svg = `<svg viewBox="0 0 260 160" width="250" height="auto" style="max-width:246px;display:block;margin:1rem auto;background-color:#ffffff;border-radius:16px;padding:0.5rem;" xmlns="http://www.w3.org/2000/svg"><path d="M30,126 L222,126 L222,46 L126,46 L126,30 L30,30 Z" fill="#dbeafe" fill-opacity="0.3" stroke="#475569" stroke-width="2" stroke-linejoin="round" /><rect x="126" y="46" width="96" height="80" fill="#fef08a" fill-opacity="0.8" stroke="#475569" stroke-width="2" stroke-linejoin="round" /><line x1="126" y1="30" x2="126" y2="126" stroke="#475569" stroke-width="2" stroke-dasharray="4 4" /><text x="126" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">24 cm</text><text x="12" y="78" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">12 cm</text><text x="78" y="16" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">12 cm</text><text x="174" y="32" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">12 cm</text><text x="238" y="86" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle" dominant-baseline="central">10 cm</text></svg>`;

questions[qIndex].graphData = { svg: mainSvg };
if (questions[qIndex].solutionSteps && questions[qIndex].solutionSteps.length > 2) {
  questions[qIndex].solutionSteps[0].graphData = { svg: mainSvg };
  questions[qIndex].solutionSteps[1].graphData = { svg: step1Svg };
  questions[qIndex].solutionSteps[2].graphData = { svg: step2Svg };
}

const newContent = `export const Y9_CH16_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
fs.writeFileSync(path, newContent, 'utf8');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  await db.collection('questions').doc('y9-16a-q10g').update({
    graphData: questions[qIndex].graphData,
    solutionSteps: questions[qIndex].solutionSteps,
    updatedAt: FieldValue.serverTimestamp()
  });

  await db.doc('sync_meta/questions').update({
    version: Date.now(),
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log('Successfully updated split horizontal width labels in y9-16a-q10g.');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
