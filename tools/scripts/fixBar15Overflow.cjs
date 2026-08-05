const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const path = './src/constants/seedBarker2020Questions.js';
let content = fs.readFileSync(path, 'utf8');

const arrayMatch = content.match(/export const BARKER_2020_QUESTIONS = (\[[\s\S]*?\]);\n/);
if (!arrayMatch) throw new Error("No array found");

let questions = eval(arrayMatch[1]);
const qIndexAI = questions.findIndex(x => x.id === 'bar2020-q15ai');
const qIndexAIV = questions.findIndex(x => x.id === 'bar2020-q15aiv');

// Fix bar2020-q15ai
questions[qIndexAI].solutionSteps[1].workingOut = "$$ \\begin{aligned} f(0) &= 3(0)^4 - 8(0)^3 + 6 = 6 \\implies (0, 6) \\\\\\\\ f(2) &= 3(2)^4 - 8(2)^3 + 6 \\\\\\\\ &= 3(16) - 8(8) + 6 \\\\\\\\ &= 48 - 64 + 6 = -10 \\implies (2, -10) \\end{aligned} $$";
questions[qIndexAI].solutionSteps[2].workingOut = "$$ \\begin{aligned} f''(x) &= \\frac{d}{dx}(12x^3 - 24x^2) = 36x^2 - 48x \\\\\\\\ \\text{At } x = 2: \\quad f''(2) &= 36(2)^2 - 48(2) \\\\\\\\ &= 144 - 96 = 48 > 0 \\\\\\\\ &\\implies \\text{Local Minimum at } (2, -10) \\end{aligned} $$";

// Fix bar2020-q15aiv
questions[qIndexAIV].solutionSteps[1].workingOut = "$$ \\begin{aligned} f(0) &= 2(0)^4 - 8(0)^3 + 5 = 5 \\implies (0, 5) \\\\\\\\ f(3) &= 2(3)^4 - 8(3)^3 + 5 \\\\\\\\ &= 2(81) - 8(27) + 5 \\\\\\\\ &= 162 - 216 + 5 = -49 \\implies (3, -49) \\end{aligned} $$";
questions[qIndexAIV].solutionSteps[2].workingOut = "$$ \\begin{aligned} f''(x) &= \\frac{d}{dx}(8x^3 - 24x^2) = 24x^2 - 48x \\\\\\\\ \\text{At } x = 3: \\quad f''(3) &= 24(3)^2 - 48(3) \\\\\\\\ &= 216 - 144 = 72 > 0 \\\\\\\\ &\\implies \\text{Local Minimum at } (3, -49) \\end{aligned} $$";

const newContent = `export const BARKER_2020_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
fs.writeFileSync(path, newContent, 'utf8');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  await db.collection('questions').doc('bar2020-q15ai').update({
    solutionSteps: questions[qIndexAI].solutionSteps,
    updatedAt: FieldValue.serverTimestamp()
  });

  await db.collection('questions').doc('bar2020-q15aiv').update({
    solutionSteps: questions[qIndexAIV].solutionSteps,
    updatedAt: FieldValue.serverTimestamp()
  });

  await db.doc('sync_meta/questions').update({
    version: Date.now(),
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log('Successfully updated bar2020-q15ai and bar2020-q15aiv line wraps!');
  process.exit(0);
}
run();
