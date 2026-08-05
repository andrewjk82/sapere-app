const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const path = './src/constants/seedBaulkham2020Questions.js';
let content = fs.readFileSync(path, 'utf8');

const arrayMatch = content.match(/export const BAULKHAM_2020_QUESTIONS = (\[[\s\S]*?\]);\n/);
if (!arrayMatch) throw new Error("No array found");

let questions = eval(arrayMatch[1]);
const qIndexII = questions.findIndex(x => x.id === 'baulko2020-q13dii');
const qIndexIII = questions.findIndex(x => x.id === 'baulko2020-q13diii');

// Fix baulko2020-q13dii
questions[qIndexII].opts = [
  "Local minimum at \\((0, 0)\\)",
  "Local maximum at \\((0, 0)\\)",
  "Horizontal point of inflection at \\((0, 0)\\)",
  "Local minimum at \\((1, \\ln 2)\\)"
];
questions[qIndexII].solution = "The correct answer is Local minimum at \\((0, 0)\\).";
questions[qIndexII].solutionSteps = [
  {
    explanation: "Step 1: Find the first derivative \\(f'(x)\\) using the chain rule and set it equal to zero to find stationary points.",
    workingOut: "$$ \\begin{aligned} f(x) &= \\ln(x^2+1) \\\\\\\\ f'(x) &= \\frac{1}{x^2+1} \\cdot 2x = \\frac{2x}{x^2+1} \\\\\\\\ \\frac{2x}{x^2+1} &= 0 \\implies 2x = 0 \\implies x = 0 \\end{aligned} $$"
  },
  {
    explanation: "Step 2: Find the \\(y\\)-coordinate by substituting \\(x = 0\\) back into the original function.",
    workingOut: "$$ f(0) = \\ln(0^2+1) = \\ln(1) = 0 \\implies \\text{Stationary point at } (0, 0) $$"
  },
  {
    explanation: "Step 3: Determine the nature of the stationary point using the first derivative test.",
    workingOut: "$$ \\begin{aligned} \\text{For } x < 0: &\\quad f'(x) = \\frac{2x}{x^2+1} < 0 \\quad (\\text{Decreasing}) \\\\\\\\ \\text{For } x > 0: &\\quad f'(x) = \\frac{2x}{x^2+1} > 0 \\quad (\\text{Increasing}) \\\\\\\\ \\end{aligned} $$"
  },
  {
    explanation: "Step 4: Since the gradient changes from negative to positive, \\((0,0)\\) is a local minimum.",
    workingOut: "$$ \\therefore \\text{Local minimum at } (0,0) $$"
  }
];

// Fix baulko2020-q13diii
questions[qIndexIII].opts = [
  "\\((1, \\ln 2)\\) and \\((-1, \\ln 2)\\)",
  "\\((1, \\ln 2)\\) and \\((0, 0)\\)",
  "\\((2, \\ln 5)\\) and \\((-2, \\ln 5)\\)",
  "\\((1, \\log 2)\\) and \\((-1, \\log 2)\\)"
];
questions[qIndexIII].solution = "The correct answer is \\((1, \\ln 2)\\) and \\((-1, \\ln 2)\\).";
questions[qIndexIII].solutionSteps = [
  {
    explanation: "Step 1: To find points of inflection, we need the second derivative \\(f''(x)\\). Differentiate \\(f'(x) = \\frac{2x}{x^2+1}\\) using the quotient rule.",
    workingOut: "$$ \\begin{aligned} f''(x) &= \\frac{v u' - u v'}{v^2} \\\\\\\\ &= \\frac{(x^2+1)(2) - (2x)(2x)}{(x^2+1)^2} \\\\\\\\ &= \\frac{2x^2 + 2 - 4x^2}{(x^2+1)^2} = \\frac{2 - 2x^2}{(x^2+1)^2} \\end{aligned} $$"
  },
  {
    explanation: "Step 2: Set \\(f''(x) = 0\\) to find the possible points of inflection.",
    workingOut: "$$ \\begin{aligned} \\frac{2 - 2x^2}{(x^2+1)^2} &= 0 \\\\\\\\ 2 - 2x^2 &= 0 \\implies x^2 = 1 \\implies x = \\pm 1 \\end{aligned} $$"
  },
  {
    explanation: "Step 3: Find the corresponding \\(y\\)-coordinates by substituting \\(x = \\pm 1\\) into the original function \\(f(x)\\).",
    workingOut: "$$ f(\\pm 1) = \\ln((\\pm 1)^2+1) = \\ln(2) \\implies (1, \\ln 2) \\text{ and } (-1, \\ln 2) $$"
  },
  {
    explanation: "Step 4: Verify that a change in concavity occurs across \\(x = \\pm 1\\) by testing values of \\(x\\) in \\(f''(x)\\).",
    workingOut: "$$ \\begin{aligned} \\text{Test } x = 0: &\\quad f''(0) = \\frac{2}{1} = 2 > 0 \\quad (\\text{Concave up}) \\\\\\\\ \\text{Test } x = 2: &\\quad f''(2) = \\frac{2 - 8}{(5)^2} = -\\frac{6}{25} < 0 \\quad (\\text{Concave down}) \\end{aligned} $$"
  },
  {
    explanation: "Step 5: Since \\(f''(x)\\) changes sign, these are true points of inflection.",
    workingOut: "$$ \\therefore \\text{Points of inflection at } (1, \\ln 2) \\text{ and } (-1, \\ln 2) $$"
  }
];

const newContent = `export const BAULKHAM_2020_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
fs.writeFileSync(path, newContent, 'utf8');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  await db.collection('questions').doc('baulko2020-q13dii').update({
    opts: questions[qIndexII].opts,
    options: questions[qIndexII].opts.map(text => ({ text, imageUrl: '' })),
    solution: questions[qIndexII].solution,
    solutionSteps: questions[qIndexII].solutionSteps,
    updatedAt: FieldValue.serverTimestamp()
  });

  await db.collection('questions').doc('baulko2020-q13diii').update({
    opts: questions[qIndexIII].opts,
    options: questions[qIndexIII].opts.map(text => ({ text, imageUrl: '' })),
    solution: questions[qIndexIII].solution,
    solutionSteps: questions[qIndexIII].solutionSteps,
    updatedAt: FieldValue.serverTimestamp()
  });

  await db.doc('sync_meta/questions').update({
    version: Date.now(),
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log('Successfully updated baulko2020-q13dii and baulko2020-q13diii!');
  process.exit(0);
}
run();
