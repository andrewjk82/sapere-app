const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const path = './src/constants/seedAbbotsleigh2020Questions.js';
let content = fs.readFileSync(path, 'utf8');

const arrayMatch = content.match(/export const ABBOTSLEIGH_2020_QUESTIONS = (\[[\s\S]*?\]);\n/);
if (!arrayMatch) throw new Error("No array found");

let questions = eval(arrayMatch[1]);
const qIndex = questions.findIndex(x => x.id === 'abb2020-mc3');
if (qIndex === -1) throw new Error("Question not found");

questions[qIndex].solutionSteps = [
  {
    explanation: "To determine where a curve is concave down, we need to find its second derivative and set it to be strictly less than zero: \\(f''(x) < 0\\). First, let's find the first derivative \\(f'(x)\\).",
    workingOut: "f'(x) = \\frac{d}{dx}(2x^3 + x^2) = 6x^2 + 2x"
  },
  {
    explanation: "Next, find the second derivative \\(f''(x)\\) by differentiating the first derivative.",
    workingOut: "f''(x) = \\frac{d}{dx}(6x^2 + 2x) = 12x + 2"
  },
  {
    explanation: "Finally, set the second derivative to be less than zero and solve for \\(x\\) to find the interval where the curve is concave down.",
    workingOut: "$$ \\begin{aligned} 12x + 2 &< 0 \\\\\\\\ 12x &< -2 \\\\\\\\ x &< -\\frac{1}{6} \\end{aligned} $$"
  }
];

const newContent = `export const ABBOTSLEIGH_2020_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
fs.writeFileSync(path, newContent, 'utf8');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  await db.collection('questions').doc('abb2020-mc3').update({
    solutionSteps: questions[qIndex].solutionSteps,
    updatedAt: FieldValue.serverTimestamp()
  });

  await db.doc('sync_meta/questions').update({
    version: Date.now(),
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log('Successfully updated abb2020-mc3!');
  process.exit(0);
}
run();
