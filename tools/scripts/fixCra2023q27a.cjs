const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const path = './src/constants/seedCranbrook2023Questions.js';
let content = fs.readFileSync(path, 'utf8');

const arrayMatch = content.match(/export const CRANBROOK_2023_QUESTIONS = (\[[\s\S]*?\]);\n/);
if (!arrayMatch) throw new Error("No array found");

let questions = eval(arrayMatch[1]);
const qIndex = questions.findIndex(x => x.id === 'cra2023-q27a');
if (qIndex === -1) throw new Error("Question not found");

questions[qIndex].opts = [
  "Local minimum at \\(\\left(1, \\dfrac{145}{64}\\right)\\); local maximum at \\((4, 1)\\).",
  "Local maximum at \\(\\left(1, \\dfrac{145}{64}\\right)\\); local minimum at \\((4, 1)\\).",
  "Local minimum at \\(\\left(1, \\dfrac{145}{64}\\right)\\); horizontal point of inflection at \\((4, 1)\\).",
  "Local maximum at \\(\\left(1, \\dfrac{145}{64}\\right)\\); horizontal point of inflection at \\((4, 1)\\)."
];
questions[qIndex].a = 3;
questions[qIndex].answer = "3";
questions[qIndex].solution = "The correct answer is Local maximum at \\(\\left(1, \\dfrac{145}{64}\\right)\\); horizontal point of inflection at \\((4, 1)\\).";

questions[qIndex].solutionSteps = [
  {
    explanation: "Step 1: Differentiate using the product rule with \\(u = 3x\\) and \\(v = \\left(1-\\dfrac{x}{4}\\right)^3\\).",
    workingOut: "$$ f'(x) = 3\\left(1-\\dfrac{x}{4}\\right)^3 + 3x \\cdot 3\\left(1-\\dfrac{x}{4}\\right)^2\\left(-\\dfrac{1}{4}\\right) $$",
    graphData: null
  },
  {
    explanation: "Step 2: Factor out the common factor \\(3\\left(1-\\dfrac{x}{4}\\right)^2\\) and simplify the expression.",
    workingOut: "$$ f'(x) = 3\\left(1-\\dfrac{x}{4}\\right)^2\\left[ \\left(1 - \\dfrac{x}{4}\\right) - \\dfrac{3x}{4} \\right] = 3\\left(1-\\dfrac{x}{4}\\right)^2(1 - x) $$",
    graphData: null
  },
  {
    explanation: "Step 3: Find the stationary points by setting \\(f'(x) = 0\\).",
    workingOut: "$$ 3\\left(1-\\dfrac{x}{4}\\right)^2(1 - x) = 0 \\implies x = 4 \\text{ (double root)} \\quad \\text{or} \\quad x = 1 $$",
    graphData: null
  },
  {
    explanation: "Step 4: Classify \\(x = 1\\) using a sign test. Since the squared factor is always non-negative, the sign of \\(f'(x)\\) follows \\((1-x)\\). For \\(x < 1\\), \\(f' > 0\\); for \\(1 < x < 4\\), \\(f' < 0\\). Thus, the gradient changes from positive to negative, making it a local maximum.",
    workingOut: "$$ f(1) = 3(1)\\left(1 - \\dfrac{1}{4}\\right)^3 + 1 = 3\\left(\\dfrac{3}{4}\\right)^3 + 1 = \\dfrac{81}{64} + 1 = \\dfrac{145}{64} \\implies \\text{Local max at } \\left(1, \\dfrac{145}{64}\\right) $$",
    graphData: null
  },
  {
    explanation: "Step 5: Classify \\(x = 4\\). Since \\(\\left(1-\\dfrac{x}{4}\\right)^2\\) does not change sign across \\(x = 4\\), the derivative \\(f'(x)\\) remains negative on both sides. A stationary point with no sign change is a horizontal point of inflection.",
    workingOut: "$$ f(4) = 3(4)\\left(1 - \\dfrac{4}{4}\\right)^3 + 1 = 0 + 1 = 1 \\implies \\text{Horizontal point of inflection at } (4, 1) $$",
    graphData: null
  }
];

const newContent = `export const CRANBROOK_2023_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
fs.writeFileSync(path, newContent, 'utf8');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  await db.collection('questions').doc('cra2023-q27a').update({
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

  console.log('Successfully updated cra2023-q27a distractors and steps!');
  process.exit(0);
}
run();
