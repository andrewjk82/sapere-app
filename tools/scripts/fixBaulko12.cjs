const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const path = './src/constants/seedBaulkham2020Questions.js';
let content = fs.readFileSync(path, 'utf8');

const arrayMatch = content.match(/export const BAULKHAM_2020_QUESTIONS = (\[[\s\S]*?\]);\n/);
if (!arrayMatch) throw new Error("No array found");

let questions = eval(arrayMatch[1]);
const qIndexA = questions.findIndex(x => x.id === 'baulko2020-q12a');
const qIndexAV = questions.findIndex(x => x.id === 'baulko2020-q12av');

// Fix baulko2020-q12a
questions[qIndexA].opts = [
  "\\(b = -11\\)",
  "\\(b = 7\\)",
  "\\(b = -7\\)",
  "\\(b = -3\\)"
];
questions[qIndexA].solutionSteps = [
  {
    explanation: "Step 1: The tangent line \\(y = 2x + b\\) has a gradient of \\(2\\). Find the derivative of the parabola and set it equal to \\(2\\) to find the \\(x\\)-coordinate of the point of contact.",
    workingOut: "$$ \\begin{aligned} y &= 2x^2 + 6x - 5 \\\\\\\\ \\frac{dy}{dx} &= 4x + 6 \\\\\\\\ 4x + 6 &= 2 \\implies 4x = -4 \\implies x = -1 \\end{aligned} $$"
  },
  {
    explanation: "Step 2: Find the \\(y\\)-coordinate of the point of contact on the parabola by substituting \\(x = -1\\).",
    workingOut: "$$ \\begin{aligned} y &= 2(-1)^2 + 6(-1) - 5 \\\\\\\\ &= 2(1) - 6 - 5 = -9 \\\\\\\\ &\\implies \\text{Point of contact is } (-1, -9) \\end{aligned} $$"
  },
  {
    explanation: "Step 3: The tangent line must pass through this point of contact. Substitute \\((-1, -9)\\) into the line's equation to find \\(b\\).",
    workingOut: "$$ \\begin{aligned} y &= 2x + b \\\\\\\\ -9 &= 2(-1) + b \\\\\\\\ -9 &= -2 + b \\implies b = -7 \\end{aligned} $$"
  }
];

// Fix baulko2020-q12av
questions[qIndexAV].opts = [
  "\\(b = -2\\)",
  "\\(b = 2\\)",
  "\\(b = 6\\)",
  "\\(b = 4\\)"
];
questions[qIndexAV].solutionSteps = [
  {
    explanation: "Step 1: The tangent line \\(y = 4x + b\\) has a gradient of \\(4\\). Find the derivative of the parabola and set it equal to \\(4\\) to find the \\(x\\)-coordinate of the point of contact.",
    workingOut: "$$ \\begin{aligned} y &= x^2 + 2x + 3 \\\\\\\\ \\frac{dy}{dx} &= 2x + 2 \\\\\\\\ 2x + 2 &= 4 \\implies 2x = 2 \\implies x = 1 \\end{aligned} $$"
  },
  {
    explanation: "Step 2: Find the \\(y\\)-coordinate of the point of contact on the parabola by substituting \\(x = 1\\).",
    workingOut: "$$ \\begin{aligned} y &= (1)^2 + 2(1) + 3 \\\\\\\\ &= 1 + 2 + 3 = 6 \\\\\\\\ &\\implies \\text{Point of contact is } (1, 6) \\end{aligned} $$"
  },
  {
    explanation: "Step 3: The tangent line must pass through this point of contact. Substitute \\((1, 6)\\) into the line's equation to find \\(b\\).",
    workingOut: "$$ \\begin{aligned} y &= 4x + b \\\\\\\\ 6 &= 4(1) + b \\\\\\\\ 6 &= 4 + b \\implies b = 2 \\end{aligned} $$"
  }
];

const newContent = `export const BAULKHAM_2020_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
fs.writeFileSync(path, newContent, 'utf8');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  await db.collection('questions').doc('baulko2020-q12a').update({
    opts: questions[qIndexA].opts,
    options: questions[qIndexA].opts.map(text => ({ text, imageUrl: '' })),
    solutionSteps: questions[qIndexA].solutionSteps,
    updatedAt: FieldValue.serverTimestamp()
  });

  await db.collection('questions').doc('baulko2020-q12av').update({
    opts: questions[qIndexAV].opts,
    options: questions[qIndexAV].opts.map(text => ({ text, imageUrl: '' })),
    solutionSteps: questions[qIndexAV].solutionSteps,
    updatedAt: FieldValue.serverTimestamp()
  });

  await db.doc('sync_meta/questions').update({
    version: Date.now(),
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log('Successfully updated baulko2020-q12a and baulko2020-q12av!');
  process.exit(0);
}
run();
