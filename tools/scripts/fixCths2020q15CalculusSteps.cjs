const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const path = './src/constants/seedCherrybrookTech2020Questions.js';
let content = fs.readFileSync(path, 'utf8');

const match = content.match(/export const CTHS_2020_QUESTIONS = (\[[\s\S]*?\]);\n/);
if (!match) throw new Error("Not found");

let questions = eval(match[1]);
const qIndex = questions.findIndex(x => x.id === 'cths2020-q15');
if (qIndex === -1) throw new Error("Question not found");

// Rewrite solutionSteps with calculus
questions[qIndex].solutionSteps = [
  {
    explanation: "Step 1: Differentiate to find the stationary points by setting the first derivative \\(y' = 0\\). Use the product rule.",
    workingOut: "$$ \\begin{aligned} y' &= -\\left[ 1 \\cdot (x-2)^3 + (x+1) \\cdot 3(x-2)^2 \\right] \\\\\\\\ &= -(x-2)^2 \\left[ (x-2) + 3(x+1) \\right] \\\\\\\\ &= -(x-2)^2 (4x + 1) \\\\\\\\ y' &= 0 \\implies x = 2 \\text{ or } x = -\\dfrac{1}{4} \\end{aligned} $$",
    graphData: null
  },
  {
    explanation: "Step 2: Find the second derivative \\(y''\\) to classify the stationary points and find possible points of inflection.",
    workingOut: "$$ \\begin{aligned} y'' &= -\\left[ 2(x-2) \\cdot (4x+1) + (x-2)^2 \\cdot 4 \\right] \\\\\\\\ &= -2(x-2) \\left[ (4x+1) + 2(x-2) \\right] \\\\\\\\ &= -2(x-2)(6x - 3) = -6(x-2)(2x-1) \\\\\\\\ y'' &= 0 \\implies x = 2 \\text{ or } x = \\dfrac{1}{2} \\end{aligned} $$",
    graphData: null
  },
  {
    explanation: "Step 3: Classify the stationary point at \\(x = -\\dfrac{1}{4}\\) using the second derivative test, and calculate its \\(y\\)-coordinate.",
    workingOut: "$$ y''\\left(-\\dfrac{1}{4}\\right) = -6\\left(-2\\dfrac{1}{4}\\right)\\left(-\\dfrac{3}{2}\\right) < 0 \\implies \\text{Local Maximum at } \\left(-\\dfrac{1}{4}, 8.54\\right) $$",
    graphData: null
  },
  {
    explanation: "Step 4: Classify \\(x = 2\\). Since \\(y'(2) = 0\\) and \\(y''(2) = 0\\), check for a change in concavity using test points.",
    workingOut: "$$ \\begin{aligned} y''(1) &= -6(-1)(1) = 6 > 0 \\quad (\\text{Concave up}) \\\\\\\\ y''(3) &= -6(1)(5) = -30 < 0 \\quad (\\text{Concave down}) \\end{aligned} $$ \n Since concavity changes, \\((2, 0)\\) is a horizontal point of inflection.",
    graphData: null
  },
  {
    explanation: "Step 5: Check the other possible POI at \\(x = 1/2\\). Using test points \\(x=0\\) and \\(x=1\\).",
    workingOut: "$$ \\begin{aligned} y''(0) &= -6(-2)(-1) = -12 < 0 \\quad (\\text{Concave down}) \\\\\\\\ y''(1) &= 6 > 0 \\quad (\\text{Concave up}) \\end{aligned} $$ \n Concavity changes, so there is a non-horizontal point of inflection at \\(x = 1/2\\).",
    graphData: null
  },
  {
    explanation: "Step 6: Finally, find the \\(x\\) and \\(y\\) intercepts to complete the sketch.",
    workingOut: "$$ \\begin{aligned} x\\text{-intercepts: } y=0 &\\implies x = -1, \\; x = 2 \\\\\\\\ y\\text{-intercept: } x=0 &\\implies y = -(1)(-2)^3 = 8 \\end{aligned} $$",
    graphData: questions[qIndex].graphData
  }
];

fs.writeFileSync(path, `export const CTHS_2020_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`, 'utf8');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  await db.collection('questions').doc('cths2020-q15').update({
    solutionSteps: questions[qIndex].solutionSteps,
    updatedAt: FieldValue.serverTimestamp()
  });

  await db.doc('sync_meta/questions').update({
    version: Date.now(),
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log('Successfully updated cths2020-q15 with calculus steps!');
  process.exit(0);
}
run();
