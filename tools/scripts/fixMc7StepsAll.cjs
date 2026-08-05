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

questions[qIndex].solutionSteps = [
  {
    explanation: "In the standard trigonometric function \\(g(x) = a\\cos(bx + c)\\):\n- **Amplitude** is given by \\(|a|\\). It represents the maximum vertical stretch from the center axis.\n- **Period** is calculated using \\(\\frac{2\\pi}{|b|}\\). It represents the length of one complete wave cycle.\n- **Phase shift** (horizontal shift) is calculated using \\(-\\frac{c}{b}\\).\n\nBy comparing our given function \\(g(x) = 2\\cos\\left(\\frac{x}{2} + \\frac{\\pi}{3}\\right)\\) with the standard form, we can extract \\(a\\), \\(b\\), and \\(c\\). Note that \\(\\frac{x}{2}\\) is exactly the same as \\(\\frac{1}{2}x\\).",
    workingOut: "$$\\begin{aligned}\ng(x) &= a\\cos(bx + c) \\\\\ng(x) &= 2\\cos\\left(\\frac{1}{2}x + \\frac{\\pi}{3}\\right) \\\\\n\\\\\na &= 2 \\\\\nb &= \\frac{1}{2} \\\\\nc &= \\frac{\\pi}{3}\n\\end{aligned}$$"
  },
  {
    explanation: "Now, substitute the extracted values of \\(a\\), \\(b\\), and \\(c\\) into our formulas to find the specific properties of this graph:\n- **Amplitude:** \\(|2| = 2\\)\n- **Period:** \\(\\frac{2\\pi}{1/2} = 4\\pi\\)\n- **Phase shift:** \\(-\\frac{\\pi/3}{1/2} = -\\frac{2\\pi}{3}\\) (Since it is negative, the graph is shifted to the left by \\(\\frac{2\\pi}{3}\\)).",
    workingOut: "$$\\begin{aligned}\n\\text{Amplitude} &= 2 \\\\\n\\text{Period} &= \\frac{2\\pi}{1/2} = 4\\pi \\\\\n\\text{Phase shift} &= -\\frac{\\pi/3}{1/2} = -\\frac{2\\pi}{3}\n\\end{aligned}$$"
  },
  {
    explanation: "Finally, check the given options for the graph that matches all three calculated properties: an amplitude of 2, a period of \\(4\\pi\\), and a leftward phase shift of \\(\\frac{2\\pi}{3}\\).\n\nThis perfectly matches Graph (A).",
    workingOut: "\\(\\text{Answer: Graph (A)}\\)"
  }
];

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

  console.log('Successfully updated all solution steps for cths2020-mc7!');
  process.exit(0);
}
run();
