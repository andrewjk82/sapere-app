const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const path = './src/constants/seedCherrybrookTech2020SimilarQuestions.js';
let content = fs.readFileSync(path, 'utf8');

const match = content.match(/export const CTHS_2020_SIMILAR_QUESTIONS = (\[[\s\S]*?\]);\n/);
if (!match) throw new Error("Not found");

let questions = eval(match[1]);
const qIndex = questions.findIndex(x => x.id === 'cths2020s-mc1');
if (qIndex === -1) throw new Error("Question not found");

questions[qIndex].solutionSteps = [
  {
    explanation: "Step 1: To perform a full calculus analysis of the curve \\(f(x) = 3x^3 + x^2\\), we first find the first derivative to identify any turning points (stationary points).",
    workingOut: "$$ \\begin{aligned} f'(x) &= 9x^2 + 2x \\\\\\\\ 9x^2 + 2x &= 0 \\\\\\\\ x(9x + 2) &= 0 \\implies x = 0 \\text{ or } x = -\\dfrac{2}{9} \\end{aligned} $$",
    graphData: null
  },
  {
    explanation: "Step 2: Next, find the second derivative \\(f''(x)\\). This will allow us to classify the turning points as maximum or minimum, find any points of inflection (POI), and determine the concavity.",
    workingOut: "$$ f''(x) = 18x + 2 $$",
    graphData: null
  },
  {
    explanation: "Step 3: Classify the turning points using the second derivative.",
    workingOut: "$$ \\begin{aligned} \\text{At } x = 0, \\; f''(0) &= 18(0) + 2 = 2 > 0 \\implies \\text{Local Minimum} \\\\\\\\ \\text{At } x = -\\dfrac{2}{9}, \\; f''\\left(-\\dfrac{2}{9}\\right) &= 18\\left(-\\dfrac{2}{9}\\right) + 2 = -2 < 0 \\implies \\text{Local Maximum} \\end{aligned} $$",
    graphData: null
  },
  {
    explanation: "Step 4: Find the point of inflection by setting \\(f''(x) = 0\\). A point of inflection occurs where concavity changes.",
    workingOut: "$$ \\begin{aligned} 18x + 2 &= 0 \\\\\\\\ 18x &= -2 \\implies x = -\\dfrac{1}{9} \\text{ (Point of Inflection)} \\end{aligned} $$",
    graphData: null
  },
  {
    explanation: "Step 5: Finally, answer the specific question: For what values of \\(x\\) is the curve concave down? A curve is concave down when \\(f''(x) < 0\\).",
    workingOut: "$$ \\begin{aligned} f''(x) &< 0 \\\\\\\\ 18x + 2 &< 0 \\\\\\\\ 18x &< -2 \\implies x < -\\dfrac{1}{9} \\end{aligned} $$",
    graphData: null
  }
];

fs.writeFileSync(path, `export const CTHS_2020_SIMILAR_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`, 'utf8');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  await db.collection('questions').doc('cths2020s-mc1').update({
    solutionSteps: questions[qIndex].solutionSteps,
    updatedAt: FieldValue.serverTimestamp()
  });

  await db.doc('sync_meta/questions').update({
    version: Date.now(),
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log('Successfully updated cths2020s-mc1 with full calculus explanation!');
  process.exit(0);
}
run();
