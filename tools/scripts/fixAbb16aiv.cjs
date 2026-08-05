const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const path = './src/constants/seedAbbotsleigh2020Questions.js';
let content = fs.readFileSync(path, 'utf8');

const arrayMatch = content.match(/export const ABBOTSLEIGH_2020_QUESTIONS = (\[[\s\S]*?\]);\n/);
if (!arrayMatch) throw new Error("No array found");

let questions = eval(arrayMatch[1]);
const qIndex = questions.findIndex(x => x.id === 'abb2020-q16aiv');
if (qIndex === -1) throw new Error("Question not found");

// Fix LaTeX in opts
questions[qIndex].opts = [
  "\\(r = \\frac{16}{3}\\) m; \\(V_{\\max} = \\frac{512\\pi}{9} \\approx 179\\) m³",
  "\\(r = \\frac{8}{3}\\) m; \\(V_{\\max} \\approx 89\\) m³",
  "\\(r = 4\\) m; \\(V_{\\max} \\approx 151\\) m³",
  "\\(r = \\frac{16}{3}\\) m; \\(V_{\\max} \\approx 90\\) m³"
];

questions[qIndex].solution = "The correct answer is \\(r = \\frac{16}{3}\\) m; \\(V_{\\max} = \\frac{512\\pi}{9} \\approx 179\\) m³.";

questions[qIndex].solutionSteps = [
  {
    explanation: "Step 1: To find the greatest volume, we need to maximize \\(V\\). First, find the first derivative of the volume with respect to the radius \\(r\\).",
    workingOut: "$$ \\begin{aligned} V &= \\frac{3\\pi}{4}(8r^2 - r^3) \\\\\\\\ \\frac{dV}{dr} &= \\frac{3\\pi}{4}(16r - 3r^2) \\end{aligned} $$"
  },
  {
    explanation: "Step 2: Set the derivative equal to zero to find the stationary points. We can factor and solve for \\(r\\). Note that the radius \\(r\\) must be greater than zero.",
    workingOut: "$$ \\begin{aligned} \\frac{3\\pi}{4}(16r - 3r^2) &= 0 \\\\\\\\ r(16 - 3r) &= 0 \\implies r = 0 \\text{ or } r = \\frac{16}{3} \\\\\\\\ \\therefore r &= \\frac{16}{3} \\text{ m (since } r > 0) \\end{aligned} $$"
  },
  {
    explanation: "Step 3: Verify that \\(r = \\frac{16}{3}\\) gives a maximum volume by checking the second derivative. If \\(\\frac{d^2V}{dr^2} < 0\\), it is a local maximum.",
    workingOut: "$$ \\begin{aligned} \\frac{d^2V}{dr^2} &= \\frac{3\\pi}{4}(16 - 6r) \\\\\\\\ \\left. \\frac{d^2V}{dr^2} \\right|_{r=\\frac{16}{3}} &= \\frac{3\\pi}{4}\\left(16 - 6\\left(\\frac{16}{3}\\right)\\right) \\\\\\\\ &= \\frac{3\\pi}{4}(16 - 32) = -12\\pi < 0 \\implies \\text{Maximum} \\end{aligned} $$"
  },
  {
    explanation: "Step 4: Calculate the maximum volume by substituting \\(r = \\frac{16}{3}\\) back into the original volume formula, and evaluate it to the nearest cubic metre.",
    workingOut: "$$ \\begin{aligned} V_{\\max} &= \\frac{3\\pi}{4}\\left(8\\left(\\frac{16}{3}\\right)^2 - \\left(\\frac{16}{3}\\right)^3\\right) \\\\\\\\ &= \\frac{3\\pi}{4}\\left(\\frac{2048}{9} - \\frac{4096}{27}\\right) = \\frac{3\\pi}{4}\\left(\\frac{6144 - 4096}{27}\\right) \\\\\\\\ &= \\frac{3\\pi}{4}\\left(\\frac{2048}{27}\\right) = \\frac{512\\pi}{9} \\approx 178.72 \\approx 179 \\text{ m}^3 \\end{aligned} $$"
  }
];

const newContent = `export const ABBOTSLEIGH_2020_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
fs.writeFileSync(path, newContent, 'utf8');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  await db.collection('questions').doc('abb2020-q16aiv').update({
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

  console.log('Successfully updated abb2020-q16aiv full steps and latex!');
  process.exit(0);
}
run();
