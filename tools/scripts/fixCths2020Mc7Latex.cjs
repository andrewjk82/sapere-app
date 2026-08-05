const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const path = './src/constants/seedCherrybrookTech2020Questions.js';
let content = fs.readFileSync(path, 'utf8');

const arrayMatch = content.match(/export const CTHS_2020_QUESTIONS = (\[[\s\S]*?\]);\n/);
if (!arrayMatch) throw new Error("No array found");

let questions = eval(arrayMatch[1]);
const qIndex = questions.findIndex(x => x.id === 'cths2020-mc7');
if (qIndex === -1) throw new Error("Question not found");

// Correct LaTeX formatting for Options, Solution, and Steps:
questions[qIndex].opts = [
  "Graph (A): amplitude 2, period \\(4\\pi\\), shifted left by \\(\\dfrac{2\\pi}{3}\\)",
  "Graph (B): amplitude 2, period \\(4\\pi\\), no phase shift",
  "Graph (C): amplitude 2, period \\(\\pi\\), with phase shift",
  "Graph (D): amplitude 2, period \\(\\pi\\), no phase shift"
];

questions[qIndex].solution = "The correct answer is Graph (A): amplitude 2, period \\(4\\pi\\), shifted left by \\(\\dfrac{2\\pi}{3}\\).";

// Fix double backslash in step 0 workingOut (quad -> \\quad)
questions[qIndex].solutionSteps[0].workingOut = "\\(a = 2, \\\\quad b = \\\\tfrac{1}{2}, \\\\quad c = \\\\tfrac{\\\\pi}{3}\\)";

const newContent = `export const CTHS_2020_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
fs.writeFileSync(path, newContent, 'utf8');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  await db.collection('questions').doc('cths2020-mc7').update({
    opts: questions[qIndex].opts,
    solution: questions[qIndex].solution,
    solutionSteps: questions[qIndex].solutionSteps,
    updatedAt: FieldValue.serverTimestamp()
  });

  await db.doc('sync_meta/questions').update({
    version: Date.now(),
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log('Successfully fixed cths2020-mc7 LaTeX syntax.');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
