const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const path = './src/constants/seedCherrybrookTech2020Questions.js';
let content = fs.readFileSync(path, 'utf8');

const match = content.match(/export const CTHS_2020_QUESTIONS = (\[[\s\S]*?\]);\n/);
if (!match) throw new Error("Not found");

let questions = eval(match[1]);
const qIndex = questions.findIndex(x => x.id === 'cths2020-mc10');
if (qIndex === -1) throw new Error("Question not found");

questions[qIndex].solutionSteps = [
  {
    explanation: "Step 1: The condition \\(f'(x) < 0\\) means that the gradient of the curve is negative, so the function is strictly decreasing. From the graph, the curve decreases from the local maximum at \\(A\\) down to the local minimum at \\(C\\).",
    workingOut: "$$ \\text{For } f'(x) < 0, \\quad x \\in (A, C) $$",
    graphData: null
  },
  {
    explanation: "Step 2: The condition \\(f''(x) > 0\\) means that the curve is concave up (shaped like a cup). The point \\(B\\) is the point of inflection where concavity changes. From the graph, the curve is concave up everywhere to the right of \\(B\\).",
    workingOut: "$$ \\text{For } f''(x) > 0, \\quad x \\in (B, \\infty) $$",
    graphData: null
  },
  {
    explanation: "Step 3: To satisfy both conditions simultaneously, we must find the intersection of the two domains found in Step 1 and Step 2. Since \\(A < B < C\\), the overlapping interval is between \\(B\\) and \\(C\\).",
    workingOut: "$$ \\begin{aligned} \\text{Required Domain} &= (A, C) \\cap (B, \\infty) \\\\\\\\ &= (B, C) \\end{aligned} $$",
    graphData: null
  }
];

fs.writeFileSync(path, `export const CTHS_2020_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`, 'utf8');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  await db.collection('questions').doc('cths2020-mc10').update({
    solutionSteps: questions[qIndex].solutionSteps,
    updatedAt: FieldValue.serverTimestamp()
  });

  await db.doc('sync_meta/questions').update({
    version: Date.now(),
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log('Successfully fixed cths2020-mc10 steps!');
  process.exit(0);
}
run();
