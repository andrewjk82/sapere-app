const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const path = './src/constants/seedBlacktownBoys2020SimilarQuestions.js';
let content = fs.readFileSync(path, 'utf8');

const arrayMatch = content.match(/export const BLACKTOWN_BOYS_2020_SIMILAR_QUESTIONS = (\[[\s\S]*?\]);\n/);
if (!arrayMatch) throw new Error("No array found");

let questions = eval(arrayMatch[1]);
const qIndex = questions.findIndex(x => x.id === 'bbhs2020s-26a');
if (qIndex === -1) throw new Error("Question not found");

questions[qIndex].opts = [
  "Local maximum at \\((-1, 4)\\); local minimum at \\((1, 0)\\)",
  "Local minimum at \\((-1, 4)\\); local maximum at \\((1, 0)\\)",
  "Local maximum at \\((-1, 0)\\); local minimum at \\((1, 4)\\)",
  "Local minimum at \\((-1, 0)\\); local maximum at \\((1, 4)\\)"
];

questions[qIndex].solution = "The correct answer is Local maximum at \\((-1, 4)\\); local minimum at \\((1, 0)\\).";

questions[qIndex].solutionSteps = [
  {
    explanation: "Step 1: Find the first derivative \\(y'\\) and set it equal to zero to find the \\(x\\)-coordinates of the stationary points.",
    workingOut: "$$ \\begin{aligned} y &= x^3 - 3x + 2 \\\\\\\\ y' &= 3x^2 - 3 \\\\\\\\ 3x^2 - 3 &= 0 \\implies 3(x^2 - 1) = 0 \\implies x^2 = 1 \\implies x = \\pm 1 \\end{aligned} $$"
  },
  {
    explanation: "Step 2: Substitute \\(x = 1\\) and \\(x = -1\\) into the original function to find the corresponding \\(y\\)-coordinates.",
    workingOut: "$$ \\begin{aligned} \\text{For } x = 1: &\\quad y = (1)^3 - 3(1) + 2 = 1 - 3 + 2 = 0 \\implies \\text{Point at } (1, 0) \\\\\\\\ \\text{For } x = -1: &\\quad y = (-1)^3 - 3(-1) + 2 = -1 + 3 + 2 = 4 \\implies \\text{Point at } (-1, 4) \\end{aligned} $$"
  },
  {
    explanation: "Step 3: Find the second derivative \\(y''\\) and use it to determine the nature of each stationary point.",
    workingOut: "$$ \\begin{aligned} y'' &= 6x \\\\\\\\ \\text{At } x = 1: &\\quad y'' = 6(1) = 6 > 0 \\implies \\text{Local Minimum at } (1, 0) \\\\\\\\ \\text{At } x = -1: &\\quad y'' = 6(-1) = -6 < 0 \\implies \\text{Local Maximum at } (-1, 4) \\end{aligned} $$"
  }
];

const newContent = `export const BLACKTOWN_BOYS_2020_SIMILAR_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
fs.writeFileSync(path, newContent, 'utf8');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  await db.collection('questions').doc('bbhs2020s-26a').update({
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

  console.log('Successfully updated bbhs2020s-26a distractors and steps!');
  process.exit(0);
}
run();
