const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const path = './src/constants/seedCranbrook2023Questions.js';
let content = fs.readFileSync(path, 'utf8');

const arrayMatch = content.match(/export const CRANBROOK_2023_QUESTIONS = (\[[\s\S]*?\]);\n/);
if (!arrayMatch) throw new Error("No array found");

let questions = eval(arrayMatch[1]);
const qIndex = questions.findIndex(x => x.id === 'cra2023-q27b');
if (qIndex === -1) throw new Error("Question not found");

questions[qIndex].opts = [
  "\\(f(5) = -\\dfrac{15}{64} < 0\\) and \\(f(6) = \\dfrac{9}{4} > 0\\); since \\(f\\) is continuous and changes sign, it must cross the \\(x\\)-axis.",
  "\\(f(5) = \\dfrac{49}{64} > 0\\) and \\(f(6) = \\dfrac{5}{4} > 0\\); since the derivative changes sign, it must cross the \\(x\\)-axis.",
  "\\(f(5) = -\\dfrac{49}{64} < 0\\) and \\(f(6) = -\\dfrac{5}{4} < 0\\); since the second derivative is zero, it must cross the \\(x\\)-axis.",
  "\\(f(5) = \\dfrac{49}{64} > 0\\) and \\(f(6) = -\\dfrac{5}{4} < 0\\); since \\(f\\) is continuous and changes sign, it must cross the \\(x\\)-axis."
];

questions[qIndex].solution = "The correct answer is \\(f(5) = \\dfrac{49}{64} > 0\\) and \\(f(6) = -\\dfrac{5}{4} < 0\\); since \\(f\\) is continuous and changes sign, it must cross the \\(x\\)-axis.";

questions[qIndex].solutionSteps = [
  {
    explanation: "Step 1: To show that a curve crosses the \\(x\\)-axis between two points, we must evaluate the function at those points and check for a change in sign.",
    workingOut: "$$ \\text{We need to find } f(5) \\text{ and } f(6). $$",
    graphData: null
  },
  {
    explanation: "Step 2: Substitute \\(x = 5\\) into the given function.",
    workingOut: "$$ \\begin{aligned} f(5) &= 3(5)\\left(1 - \\dfrac{5}{4}\\right)^3 + 1 \\\\\\\\ &= 15\\left(-\\dfrac{1}{4}\\right)^3 + 1 \\\\\\\\ &= 15\\left(-\\dfrac{1}{64}\\right) + 1 \\\\\\\\ &= -\\dfrac{15}{64} + \\dfrac{64}{64} = \\dfrac{49}{64} \\end{aligned} $$",
    graphData: null
  },
  {
    explanation: "Step 3: Substitute \\(x = 6\\) into the given function.",
    workingOut: "$$ \\begin{aligned} f(6) &= 3(6)\\left(1 - \\dfrac{6}{4}\\right)^3 + 1 \\\\\\\\ &= 18\\left(1 - \\dfrac{3}{2}\\right)^3 + 1 \\\\\\\\ &= 18\\left(-\\dfrac{1}{2}\\right)^3 + 1 \\\\\\\\ &= 18\\left(-\\dfrac{1}{8}\\right) + 1 \\\\\\\\ &= -\\dfrac{9}{4} + \\dfrac{4}{4} = -\\dfrac{5}{4} \\end{aligned} $$",
    graphData: null
  },
  {
    explanation: "Step 4: Use the Intermediate Value Theorem. Since polynomials are continuous everywhere and the function values have opposite signs, there must be a root.",
    workingOut: "$$ \\text{Since } f(x) \\text{ is continuous, and } f(5) > 0, f(6) < 0, \\text{ the graph must cross the } x\\text{-axis between } x=5 \\text{ and } x=6. $$",
    graphData: null
  }
];

const newContent = `export const CRANBROOK_2023_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
fs.writeFileSync(path, newContent, 'utf8');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  await db.collection('questions').doc('cra2023-q27b').update({
    opts: questions[qIndex].opts,
    options: questions[qIndex].opts.map(text => ({ text, imageUrl: '' })),
    solution: questions[qIndex].solution,
    solutionSteps: questions[qIndex].solutionSteps,
    updatedAt: FieldValue.serverTimestamp()
  });

  await db.doc('sync_meta/questions').update({
    version: Date.now(),
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log('Successfully updated cra2023-q27b distractors and steps!');
  process.exit(0);
}
run();
