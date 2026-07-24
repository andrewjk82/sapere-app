const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const path = './src/constants/seedCherrybrookTech2020Questions.js';
let content = fs.readFileSync(path, 'utf8');

const match = content.match(/export const CTHS_2020_QUESTIONS = (\[[\s\S]*?\]);\n/);
if (!match) throw new Error("Not found");

let questions = eval(match[1]);
const qIndex = questions.findIndex(x => x.id === 'cths2020-mc1');
if (qIndex === -1) throw new Error("Question not found");

questions[qIndex].solutionSteps = [
  {
    explanation: "Step 1: Differentiate \\(f(x)\\) using the power rule to find the first derivative \\(f'(x)\\).",
    workingOut: "$$ f'(x) = 6x^2 + 2x $$",
    graphData: null
  },
  {
    explanation: "Step 2: Differentiate again to find the second derivative \\(f''(x)\\).",
    workingOut: "$$ f''(x) = 12x + 2 $$",
    graphData: null
  },
  {
    explanation: "Step 3: A curve is concave down when its second derivative is strictly less than zero. Set up the inequality.",
    workingOut: "$$ f''(x) < 0 \\implies 12x + 2 < 0 $$",
    graphData: null
  },
  {
    explanation: "Step 4: Solve the inequality for \\(x\\).",
    workingOut: "$$ \\begin{aligned} 12x &< -2 \\\\\\\\ x &< -\\dfrac{2}{12} \\\\\\\\ x &< -\\dfrac{1}{6} \\end{aligned} $$",
    graphData: null
  }
];

fs.writeFileSync(path, `export const CTHS_2020_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`, 'utf8');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  await db.collection('questions').doc('cths2020-mc1').update({
    solutionSteps: questions[qIndex].solutionSteps,
    updatedAt: FieldValue.serverTimestamp()
  });

  await db.doc('sync_meta/questions').update({
    version: Date.now(),
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log('Successfully fixed cths2020-mc1!');
  process.exit(0);
}
run();
