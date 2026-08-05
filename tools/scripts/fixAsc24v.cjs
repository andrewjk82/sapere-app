const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const path = './src/constants/seedAscham2020Questions.js';
let content = fs.readFileSync(path, 'utf8');

const arrayMatch = content.match(/export const ASCHAM_2020_QUESTIONS = (\[[\s\S]*?\]);\n/);
if (!arrayMatch) throw new Error("No array found");

let questions = eval(arrayMatch[1]);
const qIndex = questions.findIndex(x => x.id === 'asc2020-q24v');
if (qIndex === -1) throw new Error("Question not found");

questions[qIndex].opts = [
  "Local maximum at \\((0, 3)\\); local minima at \\((2, -13)\\) and \\((-2, -13)\\)",
  "Local minimum at \\((0, 3)\\); local maxima at \\((2, -13)\\) and \\((-2, -13)\\)",
  "Local maximum at \\((0, 3)\\); local minima at \\((2, 19)\\) and \\((-2, 19)\\)",
  "Local minimum at \\((0, 3)\\) only"
];

questions[qIndex].solution = "The correct answer is Local maximum at \\((0, 3)\\); local minima at \\((2, -13)\\) and \\((-2, -13)\\).";

questions[qIndex].solutionSteps = [
  {
    explanation: "Step 1: To find the stationary points, we first find the derivative \\(y'\\) and set it to zero.",
    workingOut: "$$ \\begin{aligned} y &= x^4 - 8x^2 + 3 \\\\\\\\ y' &= 4x^3 - 16x \\\\\\\\ 4x(x^2 - 4) &= 0 \\implies x = 0 \\text{ or } x = \\pm 2 \\end{aligned} $$"
  },
  {
    explanation: "Step 2: Substitute these \\(x\\)-values back into the original function \\(y\\) to find the corresponding \\(y\\)-coordinates of the stationary points.",
    workingOut: "$$ \\begin{aligned} y(0) &= 0^4 - 8(0)^2 + 3 = 3 \\implies (0, 3) \\\\\\\\ y(2) &= 2^4 - 8(2)^2 + 3 = 16 - 32 + 3 = -13 \\implies (2, -13) \\\\\\\\ y(-2) &= (-2)^4 - 8(-2)^2 + 3 = 16 - 32 + 3 = -13 \\implies (-2, -13) \\end{aligned} $$"
  },
  {
    explanation: "Step 3: Find the second derivative \\(y''\\) to determine the nature of each stationary point.",
    workingOut: "y'' = \\frac{d}{dx}(4x^3 - 16x) = 12x^2 - 16"
  },
  {
    explanation: "Step 4: Evaluate \\(y''\\) at each \\(x\\)-value to determine whether it is a local maximum or minimum.",
    workingOut: "$$ \\begin{aligned} y''(0) &= -16 < 0 \\implies \\text{Local Maximum at } (0, 3) \\\\\\\\ y''(2) &= 12(2)^2 - 16 = 32 > 0 \\implies \\text{Local Minimum at } (2, -13) \\\\\\\\ y''(-2) &= 12(-2)^2 - 16 = 32 > 0 \\implies \\text{Local Minimum at } (-2, -13) \\end{aligned} $$"
  }
];

const newContent = `export const ASCHAM_2020_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
fs.writeFileSync(path, newContent, 'utf8');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  await db.collection('questions').doc('asc2020-q24v').update({
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

  console.log('Successfully updated asc2020-q24v distractors and steps!');
  process.exit(0);
}
run();
