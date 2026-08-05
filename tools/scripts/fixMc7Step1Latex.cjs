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

questions[qIndex].solutionSteps[0] = {
  explanation: "Compare the given function \\(g(x) = 2\\cos\\left(\\frac{x}{2} + \\frac{\\pi}{3}\\right)\\) with the standard trigonometric form \\(g(x) = a\\cos(bx + c)\\).\n\nFirst, rewrite \\(\\frac{x}{2}\\) as \\(\\frac{1}{2}x\\) to easily identify the coefficient \\(b\\). Then, match the corresponding parts of the equations to extract the values for \\(a\\), \\(b\\), and \\(c\\).",
  workingOut: "$$\\begin{aligned}\ng(x) &= a\\cos(bx + c) \\\\\ng(x) &= 2\\cos\\left(\\frac{1}{2}x + \\frac{\\pi}{3}\\right) \\\\\n\\\\\na &= 2 \\\\\nb &= \\frac{1}{2} \\\\\nc &= \\frac{\\pi}{3}\n\\end{aligned}$$"
};

const newContent = `export const CTHS_2020_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
fs.writeFileSync(path, newContent, 'utf8');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  await db.collection('questions').doc('cths2020-mc7').update({
    solutionSteps: questions[qIndex].solutionSteps,
    updatedAt: FieldValue.serverTimestamp()
  });

  await db.doc('sync_meta/questions').update({
    version: Date.now(),
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log('Successfully fixed cths2020-mc7 step 1 LaTeX wrapper!');
  process.exit(0);
}
run();
