const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const path = './src/constants/seedBlacktownBoys2020Questions.js';
let content = fs.readFileSync(path, 'utf8');

const arrayMatch = content.match(/export const BLACKTOWN_BOYS_2020_QUESTIONS = (\[[\s\S]*?\]);\n/);
if (!arrayMatch) throw new Error("No array found");

let questions = eval(arrayMatch[1]);
const qIndexB = questions.findIndex(x => x.id === 'bbhs2020-26b');
const qIndexD = questions.findIndex(x => x.id === 'bbhs2020-26d');

// Fix bbhs2020-26b
questions[qIndexB].opts = [
  "\\((0, 1)\\)",
  "\\((0, -1)\\)",
  "\\((1, 1)\\)",
  "\\((-1, -3)\\)"
];
questions[qIndexB].solution = "The correct answer is \\((0, -1)\\).";
questions[qIndexB].solutionSteps = [
  {
    explanation: "Step 1: Find the first and second derivatives of the function.",
    workingOut: "$$ \\begin{aligned} y &= 3x - x^3 - 1 \\\\\\\\ y' &= 3 - 3x^2 \\\\\\\\ y'' &= -6x \\end{aligned} $$"
  },
  {
    explanation: "Step 2: Set the second derivative to zero to find the possible point of inflection.",
    workingOut: "$$ -6x = 0 \\implies x = 0 $$"
  },
  {
    explanation: "Step 3: Substitute \\(x = 0\\) back into the original equation to find the \\(y\\)-coordinate.",
    workingOut: "$$ y(0) = 3(0) - (0)^3 - 1 = -1 \\implies \\text{Point is } (0, -1) $$"
  },
  {
    explanation: "Step 4: Verify that the concavity changes at \\(x = 0\\) by testing values on either side.",
    workingOut: "$$ \\begin{aligned} \\text{For } x = -1: &\\quad y'' = -6(-1) = 6 > 0 \\quad (\\text{Concave up}) \\\\\\\\ \\text{For } x = 1: &\\quad y'' = -6(1) = -6 < 0 \\quad (\\text{Concave down}) \\end{aligned} $$"
  },
  {
    explanation: "Step 5: Since the concavity changes, it is a valid point of inflection.",
    workingOut: "$$ \\therefore \\text{Point of inflection is } (0, -1) $$"
  }
];

// Fix bbhs2020-26d
questions[qIndexD].opts = [
  "\\(y = 1\\)",
  "\\(y = -3\\)",
  "\\(y = 17\\)",
  "\\(y = -1\\)"
];
questions[qIndexD].solution = "The correct answer is \\(y = 17\\).";
questions[qIndexD].solutionSteps = [
  {
    explanation: "Step 1: To find the global maximum on a closed interval, we must check the \\(y\\)-values at the stationary points and at the endpoints of the domain.",
    workingOut: "$$ \\text{Stationary points are } x = 1 \\text{ and } x = -1 \\quad (\\text{from part a}) $$"
  },
  {
    explanation: "Step 2: Evaluate the function at the stationary points.",
    workingOut: "$$ \\begin{aligned} \\text{At } x = 1: &\\quad y(1) = 3(1) - (1)^3 - 1 = 1 \\\\\\\\ \\text{At } x = -1: &\\quad y(-1) = 3(-1) - (-1)^3 - 1 = -3 \\end{aligned} $$"
  },
  {
    explanation: "Step 3: Evaluate the function at the endpoints of the domain \\(-3 \\leq x \\leq 2\\).",
    workingOut: "$$ \\begin{aligned} \\text{At } x = -3: &\\quad y(-3) = 3(-3) - (-3)^3 - 1 = -9 + 27 - 1 = 17 \\\\\\\\ \\text{At } x = 2: &\\quad y(2) = 3(2) - (2)^3 - 1 = 6 - 8 - 1 = -3 \\end{aligned} $$"
  },
  {
    explanation: "Step 4: Compare all the \\(y\\)-values to find the greatest one.",
    workingOut: "$$ \\begin{aligned} \\text{Values are: } & 1, -3, 17, -3 \\\\\\\\ \\text{Maximum value is } & 17 \\end{aligned} $$"
  }
];

const newContent = `export const BLACKTOWN_BOYS_2020_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
fs.writeFileSync(path, newContent, 'utf8');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  await db.collection('questions').doc('bbhs2020-26b').update({
    opts: questions[qIndexB].opts,
    options: questions[qIndexB].opts.map(text => ({ text, imageUrl: '' })),
    solution: questions[qIndexB].solution,
    solutionSteps: questions[qIndexB].solutionSteps,
    updatedAt: FieldValue.serverTimestamp()
  });

  await db.collection('questions').doc('bbhs2020-26d').update({
    opts: questions[qIndexD].opts,
    options: questions[qIndexD].opts.map(text => ({ text, imageUrl: '' })),
    solution: questions[qIndexD].solution,
    solutionSteps: questions[qIndexD].solutionSteps,
    updatedAt: FieldValue.serverTimestamp()
  });

  await db.doc('sync_meta/questions').update({
    version: Date.now(),
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log('Successfully updated bbhs2020-26b and bbhs2020-26d distractors and steps!');
  process.exit(0);
}
run();
