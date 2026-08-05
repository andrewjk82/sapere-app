const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const path = './src/constants/seedAbbotsleigh2020Questions.js';
let content = fs.readFileSync(path, 'utf8');

const arrayMatch = content.match(/export const ABBOTSLEIGH_2020_QUESTIONS = (\[[\s\S]*?\]);\n/);
if (!arrayMatch) throw new Error("No array found");

let questions = eval(arrayMatch[1]);
const qIndex = questions.findIndex(x => x.id === 'abb2020-q15aii');
if (qIndex === -1) throw new Error("Question not found");

questions[qIndex].solutionSteps = [
  {
    explanation: "Step 1: To find the points of inflection, we first need to find the second derivative \\(y''\\). Let's start by finding the first derivative using the chain rule.",
    workingOut: "$$ \\begin{aligned} y &= e^{-x^2} \\\\\\\\ y' &= -2xe^{-x^2} \\end{aligned} $$"
  },
  {
    explanation: "Step 2: Now, find the second derivative by applying the product rule and chain rule to \\(y'\\).",
    workingOut: "$$ \\begin{aligned} y'' &= \\frac{d}{dx}(-2x) \\cdot e^{-x^2} + (-2x) \\cdot \\frac{d}{dx}(e^{-x^2}) \\\\\\\\ &= -2e^{-x^2} + (-2x)(-2xe^{-x^2}) \\\\\\\\ &= -2e^{-x^2} + 4x^2e^{-x^2} \\\\\\\\ &= 2e^{-x^2}(2x^2 - 1) \\end{aligned} $$"
  },
  {
    explanation: "Step 3: Set \\(y'' = 0\\) to find the possible points of inflection. Since the exponential function \\(e^{-x^2}\\) is strictly positive and never zero, we only need to solve the quadratic part.",
    workingOut: "$$ \\begin{aligned} 2x^2 - 1 &= 0 \\\\\\\\ x^2 &= \\frac{1}{2} \\implies x = \\pm \\frac{1}{\\sqrt{2}} \\end{aligned} $$"
  },
  {
    explanation: "Step 4: Substitute these \\(x\\)-values back into the original equation \\(y = e^{-x^2}\\) to find the corresponding \\(y\\)-coordinates.",
    workingOut: "$$ y = e^{-\\left(\\pm \\frac{1}{\\sqrt{2}}\\right)^2} = e^{-\\frac{1}{2}} = \\frac{1}{\\sqrt{e}} $$"
  },
  {
    explanation: "Step 5: A quick test of intervals (e.g., \\(x=0\\) and \\(x=\\pm 1\\)) confirms that \\(y''\\) changes sign across these points. Therefore, both points are true points of inflection.",
    workingOut: "$$ \\text{Points of inflection: } \\left(\\pm \\frac{1}{\\sqrt{2}}, e^{-1/2}\\right) $$"
  }
];

const newContent = `export const ABBOTSLEIGH_2020_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
fs.writeFileSync(path, newContent, 'utf8');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  await db.collection('questions').doc('abb2020-q15aii').update({
    solutionSteps: questions[qIndex].solutionSteps,
    updatedAt: FieldValue.serverTimestamp()
  });

  await db.doc('sync_meta/questions').update({
    version: Date.now(),
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log('Successfully updated abb2020-q15aii full steps!');
  process.exit(0);
}
run();
