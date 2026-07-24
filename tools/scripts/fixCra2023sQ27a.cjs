const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const path = './src/constants/seedCranbrook2023SimilarQuestions.js';
let content = fs.readFileSync(path, 'utf8');

const match = content.match(/export const CRANBROOK_2023_SIMILAR_QUESTIONS = (\[[\s\S]*?\]);\n/);
if (!match) throw new Error("Not found");

let questions = eval(match[1]);
const qIndex = questions.findIndex(x => x.id === 'cra2023s-q27a');
if (qIndex === -1) throw new Error("Question not found");

questions[qIndex].opts = [
  "Local minimum at \\(\\left(\\dfrac{3}{4}, \\dfrac{209}{128}\\right)\\); local maximum at \\((3, 1)\\).",
  "Local maximum at \\(\\left(\\dfrac{3}{4}, \\dfrac{209}{128}\\right)\\); local minimum at \\((3, 1)\\).",
  "Local minimum at \\(\\left(\\dfrac{3}{4}, \\dfrac{209}{128}\\right)\\); horizontal point of inflection at \\((3, 1)\\).",
  "Local maximum at \\(\\left(\\dfrac{3}{4}, \\dfrac{209}{128}\\right)\\); horizontal point of inflection at \\((3, 1)\\)."
];
questions[qIndex].a = 3;
questions[qIndex].answer = "3";
questions[qIndex].solution = "The correct answer is Local maximum at \\(\\left(\\dfrac{3}{4}, \\dfrac{209}{128}\\right)\\); horizontal point of inflection at \\((3, 1)\\).";

questions[qIndex].solutionSteps = [
  {
    explanation: "Step 1: Differentiate using the product rule with \\(u = 2x\\) and \\(v = \\left(1-\\dfrac{x}{3}\\right)^3\\).",
    workingOut: "$$ g'(x) = 2\\left(1-\\dfrac{x}{3}\\right)^3 + 2x \\cdot 3\\left(1-\\dfrac{x}{3}\\right)^2\\left(-\\dfrac{1}{3}\\right) $$",
    graphData: null
  },
  {
    explanation: "Step 2: Factor out the common factor \\(2\\left(1-\\dfrac{x}{3}\\right)^2\\) and simplify the expression.",
    workingOut: "$$ g'(x) = 2\\left(1-\\dfrac{x}{3}\\right)^2\\left[ \\left(1 - \\dfrac{x}{3}\\right) - x \\right] = 2\\left(1-\\dfrac{x}{3}\\right)^2\\left(1 - \\dfrac{4x}{3}\\right) $$",
    graphData: null
  },
  {
    explanation: "Step 3: Find the stationary points by setting \\(g'(x) = 0\\).",
    workingOut: "$$ 2\\left(1-\\dfrac{x}{3}\\right)^2\\left(1 - \\dfrac{4x}{3}\\right) = 0 \\implies x = 3 \\text{ (double root)} \\quad \\text{or} \\quad x = \\dfrac{3}{4} $$",
    graphData: null
  },
  {
    explanation: "Step 4: Classify \\(x = \\dfrac{3}{4}\\) using a sign test. Since the squared factor is always non-negative, the sign of \\(g'(x)\\) follows \\(\\left(1-\\dfrac{4x}{3}\\right)\\). For \\(x < \\dfrac{3}{4}\\), \\(g' > 0\\); for \\(\\dfrac{3}{4} < x < 3\\), \\(g' < 0\\). Thus, the gradient changes from positive to negative, making it a local maximum.",
    workingOut: "$$ g\\left(\\dfrac{3}{4}\\right) = 2\\left(\\dfrac{3}{4}\\right)\\left(1 - \\dfrac{3/4}{3}\\right)^3 + 1 = \\dfrac{3}{2}\\left(\\dfrac{3}{4}\\right)^3 + 1 = \\dfrac{81}{128} + 1 = \\dfrac{209}{128} \\implies \\text{Local max at } \\left(\\dfrac{3}{4}, \\dfrac{209}{128}\\right) $$",
    graphData: null
  },
  {
    explanation: "Step 5: Classify \\(x = 3\\). Since \\(\\left(1-\\dfrac{x}{3}\\right)^2\\) does not change sign across \\(x = 3\\), the derivative \\(g'(x)\\) remains negative on both sides. A stationary point with no sign change is a horizontal point of inflection.",
    workingOut: "$$ g(3) = 2(3)\\left(1 - \\dfrac{3}{3}\\right)^3 + 1 = 0 + 1 = 1 \\implies \\text{Horizontal point of inflection at } (3, 1) $$",
    graphData: null
  }
];

fs.writeFileSync(path, `export const CRANBROOK_2023_SIMILAR_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`, 'utf8');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  await db.collection('questions').doc('cra2023s-q27a').update({
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

  console.log('Successfully fixed cra2023s-q27a!');
  process.exit(0);
}
run();
