const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const path = './src/constants/seedAbbotsleigh2020Questions.js';
let content = fs.readFileSync(path, 'utf8');

const arrayMatch = content.match(/export const ABBOTSLEIGH_2020_QUESTIONS = (\[[\s\S]*?\]);\n/);
if (!arrayMatch) throw new Error("No array found");

let questions = eval(arrayMatch[1]);
const qIndex = questions.findIndex(x => x.id === 'abb2020-q12aii');
if (qIndex === -1) throw new Error("Question not found");

// Fix LaTeX in opts
questions[qIndex].opts = [
  "Local max at \\(\\left(\\frac{1}{3}, -\\frac{50}{27}\\right)\\) and local min at \\((1, -2)\\)",
  "Local min at \\(\\left(\\frac{1}{3}, -\\frac{50}{27}\\right)\\) and local max at \\((1, -2)\\)",
  "Local max at \\(\\left(\\frac{1}{3}, \\frac{50}{27}\\right)\\) and local min at \\((1, 2)\\)",
  "Stationary points at \\(x = \\frac{1}{3}\\) and \\(x = 1\\), both are inflection points"
];

questions[qIndex].solution = "The correct answer is Local max at \\(\\left(\\frac{1}{3}, -\\frac{50}{27}\\right)\\) and local min at \\((1, -2)\\).";

questions[qIndex].solutionSteps = [
  {
    explanation: "To find the stationary points, we first need to find the derivative \\(h'(x)\\). Expanding the original function makes it much easier to differentiate.",
    workingOut: "$$ \\begin{aligned} h(x) &= (x - 2)(x^2 + 1) \\\\\\\\ &= x^3 - 2x^2 + x - 2 \\\\\\\\ h'(x) &= 3x^2 - 4x + 1 \\end{aligned} $$"
  },
  {
    explanation: "Next, we set \\(h'(x) = 0\\) to find the \\(x\\)-coordinates of the stationary points. We can factorise the quadratic equation to solve for \\(x\\).",
    workingOut: "$$ \\begin{aligned} 3x^2 - 4x + 1 &= 0 \\\\\\\\ (3x - 1)(x - 1) &= 0 \\\\\\\\ x &= \\frac{1}{3} \\text{ or } x = 1 \\end{aligned} $$"
  },
  {
    explanation: "Now we determine the nature of each stationary point using the second derivative test. First, find \\(h''(x)\\).",
    workingOut: "h''(x) = 6x - 4"
  },
  {
    explanation: "Test \\(x = \\frac{1}{3}\\): The second derivative is negative, indicating a local maximum. Substitute \\(x = \\frac{1}{3}\\) back into the original function \\(h(x)\\) to find the \\(y\\)-coordinate.",
    workingOut: "$$ \\begin{aligned} h''\\left(\\frac{1}{3}\\right) &= 6\\left(\\frac{1}{3}\\right) - 4 = -2 < 0 \\implies \\text{Local Maximum} \\\\\\\\ h\\left(\\frac{1}{3}\\right) &= \\left(\\frac{1}{3} - 2\\right)\\left(\\left(\\frac{1}{3}\\right)^2 + 1\\right) = \\left(-\\frac{5}{3}\\right)\\left(\\frac{10}{9}\\right) = -\\frac{50}{27} \\end{aligned} $$"
  },
  {
    explanation: "Test \\(x = 1\\): The second derivative is positive, indicating a local minimum. Substitute \\(x = 1\\) into \\(h(x)\\) to find its \\(y\\)-coordinate.",
    workingOut: "$$ \\begin{aligned} h''(1) &= 6(1) - 4 = 2 > 0 \\implies \\text{Local Minimum} \\\\\\\\ h(1) &= (1 - 2)(1^2 + 1) = (-1)(2) = -2 \\end{aligned} $$"
  }
];

const newContent = `export const ABBOTSLEIGH_2020_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
fs.writeFileSync(path, newContent, 'utf8');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  await db.collection('questions').doc('abb2020-q12aii').update({
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

  console.log('Successfully updated abb2020-q12aii!');
  process.exit(0);
}
run();
