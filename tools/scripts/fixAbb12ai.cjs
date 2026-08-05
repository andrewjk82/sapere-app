const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const path = './src/constants/seedAbbotsleigh2020Questions.js';
let content = fs.readFileSync(path, 'utf8');

const arrayMatch = content.match(/export const ABBOTSLEIGH_2020_QUESTIONS = (\[[\s\S]*?\]);\n/);
if (!arrayMatch) throw new Error("No array found");

let questions = eval(arrayMatch[1]);
const qIndex = questions.findIndex(x => x.id === 'abb2020-q12ai');
if (qIndex === -1) throw new Error("Question not found");

// Fix LaTeX in opts
questions[qIndex].opts = [
  "\\(x\\)-intercept: \\((2, 0)\\); \\(y\\)-intercept: \\((0, -2)\\)",
  "\\(x\\)-intercept: \\((2, 0)\\); \\(y\\)-intercept: \\((0, 2)\\)",
  "\\(x\\)-intercept: \\((-2, 0)\\); \\(y\\)-intercept: \\((0, -2)\\)",
  "\\(x\\)-intercepts: \\((2, 0)\\) and \\((\\pm i, 0)\\); \\(y\\)-intercept: \\((0, -2)\\)"
];

questions[qIndex].solution = "The correct answer is \\(x\\)-intercept: \\((2, 0)\\); \\(y\\)-intercept: \\((0, -2)\\).";

questions[qIndex].solutionSteps = [
  {
    explanation: "To find the \\(y\\)-intercept, we substitute \\(x = 0\\) into the function \\(h(x)\\).",
    workingOut: "h(0) = (0 - 2)(0^2 + 1) = (-2)(1) = -2"
  },
  {
    explanation: "This means the graph cuts the \\(y\\)-axis at the point \\((0, -2)\\). Next, to find the \\(x\\)-intercepts, we set \\(h(x) = 0\\).",
    workingOut: "(x - 2)(x^2 + 1) = 0"
  },
  {
    explanation: "Using the Null Factor Law, we set each factor equal to zero. The first factor gives \\(x = 2\\).",
    workingOut: "x - 2 = 0 \\implies x = 2"
  },
  {
    explanation: "For the second factor, \\(x^2 + 1 = 0\\) has no real solutions because the square of any real number is always non-negative. Therefore, there is only one \\(x\\)-intercept at \\((2, 0)\\).",
    workingOut: "x^2 + 1 = 0 \\implies \\text{No real solutions}"
  }
];

const newContent = `export const ABBOTSLEIGH_2020_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
fs.writeFileSync(path, newContent, 'utf8');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  await db.collection('questions').doc('abb2020-q12ai').update({
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

  console.log('Successfully updated abb2020-q12ai!');
  process.exit(0);
}
run();
