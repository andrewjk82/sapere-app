const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const path = './src/constants/seedBaulkham2020Questions.js';
let content = fs.readFileSync(path, 'utf8');

const arrayMatch = content.match(/export const BAULKHAM_2020_QUESTIONS = (\[[\s\S]*?\]);\n/);
if (!arrayMatch) throw new Error("No array found");

let questions = eval(arrayMatch[1]);
const qIndex = questions.findIndex(x => x.id === 'baulko2020-q13divv');
if (qIndex === -1) throw new Error("Question not found");

questions[qIndex].opts = [
  "Local maximum at \\((1, e^{-1})\\); point of inflection at \\((2, 2e^{-2})\\)",
  "Local minimum at \\((1, e^{-1})\\); point of inflection at \\((2, 2e^{-2})\\)",
  "Local maximum at \\((1, e^{-1})\\); point of inflection at \\((0, 0)\\)",
  "Local minimum at \\((1, e^{-1})\\); point of inflection at \\((-2, -2e^2)\\)"
];

questions[qIndex].solution = "The correct answer is Local maximum at \\((1, e^{-1})\\); point of inflection at \\((2, 2e^{-2})\\).";

questions[qIndex].solutionSteps = [
  {
    explanation: "Step 1: Use the product rule to find the first derivative \\(f'(x)\\) and set it to zero to locate the stationary point.",
    workingOut: "$$ \\begin{aligned} f(x) &= x e^{-x} \\\\\\\\ f'(x) &= (1)(e^{-x}) + (x)(-e^{-x}) = e^{-x}(1-x) \\\\\\\\ e^{-x}(1-x) &= 0 \\implies x = 1 \\quad (\\text{since } e^{-x} > 0 \\text{ for all } x) \\end{aligned} $$"
  },
  {
    explanation: "Step 2: Find the \\(y\\)-coordinate of the stationary point.",
    workingOut: "$$ f(1) = 1 \\cdot e^{-1} = e^{-1} \\implies \\text{Stationary point at } (1, e^{-1}) $$"
  },
  {
    explanation: "Step 3: Find the second derivative \\(f''(x)\\) using the product rule to determine the nature of the stationary point.",
    workingOut: "$$ \\begin{aligned} f''(x) &= (-e^{-x})(1-x) + (e^{-x})(-1) \\\\\\\\ &= -e^{-x} + x e^{-x} - e^{-x} = e^{-x}(x-2) \\\\\\\\ f''(1) &= e^{-1}(1-2) = -e^{-1} < 0 \\implies \\text{Local maximum at } (1, e^{-1}) \\end{aligned} $$"
  },
  {
    explanation: "Step 4: Set the second derivative to zero to find the possible point of inflection.",
    workingOut: "$$ \\begin{aligned} e^{-x}(x-2) &= 0 \\implies x = 2 \\\\\\\\ f(2) &= 2e^{-2} \\implies \\text{Possible POI at } (2, 2e^{-2}) \\end{aligned} $$"
  },
  {
    explanation: "Step 5: Verify that the concavity changes at \\(x = 2\\) by testing values on either side.",
    workingOut: "$$ \\begin{aligned} \\text{Test } x = 1: &\\quad f''(1) = -e^{-1} < 0 \\quad (\\text{Concave down}) \\\\\\\\ \\text{Test } x = 3: &\\quad f''(3) = e^{-3}(3-2) = e^{-3} > 0 \\quad (\\text{Concave up}) \\end{aligned} $$"
  },
  {
    explanation: "Step 6: Since \\(f''(x)\\) changes sign, \\((2, 2e^{-2})\\) is a true point of inflection.",
    workingOut: "$$ \\therefore \\text{Local maximum at } (1, e^{-1}) \\text{ and POI at } (2, 2e^{-2}) $$"
  }
];

const newContent = `export const BAULKHAM_2020_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
fs.writeFileSync(path, newContent, 'utf8');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  await db.collection('questions').doc('baulko2020-q13divv').update({
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

  console.log('Successfully updated baulko2020-q13divv distractors and steps!');
  process.exit(0);
}
run();
