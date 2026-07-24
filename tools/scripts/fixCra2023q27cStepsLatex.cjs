const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const path = './src/constants/seedCranbrook2023Questions.js';
let content = fs.readFileSync(path, 'utf8');

const arrayMatch = content.match(/export const CRANBROOK_2023_QUESTIONS = (\[[\s\S]*?\]);\n/);
if (!arrayMatch) throw new Error("No array found");

let questions = eval(arrayMatch[1]);
const qIndex = questions.findIndex(x => x.id === 'cra2023-q27c');
if (qIndex === -1) throw new Error("Question not found");

questions[qIndex].solutionSteps = [
  {
    explanation: "Mark the stationary points found in part (a): the local maximum at \\(\\left(1, \\dfrac{145}{64}\\right) \\approx (1, 2.27)\\) and the horizontal point of inflection at \\((4, 1)\\), where the tangent is horizontal but the curve keeps decreasing through it.",
    workingOut: "$$ \\left(1, \\dfrac{145}{64}\\right) \\text{ max}, \\quad (4, 1) \\text{ horizontal POI} $$",
    graphData: null
  },
  {
    explanation: "Mark the approximate \\(x\\)-intercept between \\(x = 5\\) and \\(x = 6\\) (part (b)), and the right endpoint \\(f(6) = -\\dfrac{5}{4}\\).",
    workingOut: "$$ x\\text{-intercept} \\in (5, 6), \\quad f(6) = -\\dfrac{5}{4} $$",
    graphData: null
  },
  {
    explanation: "Join the points smoothly: increasing on \\((0,1)\\), decreasing on \\((1, 4)\\), flattening momentarily at \\((4,1)\\), then decreasing through the \\(x\\)-axis to \\((6, -\\dfrac{5}{4})\\).",
    workingOut: "$$ \\text{smooth curve through } (0,1) \\nearrow (1, 2.27) \\searrow (4,1) \\searrow (6, -1.25) $$",
    graphData: null
  },
  {
    explanation: "Sketch \\(y = 3x\\left(1 - \\dfrac{x}{4}\\right)^3 + 1\\) on \\([0, 6]\\): start at \\((0,1)\\), rise to the local maximum \\(\\left(1, \\dfrac{145}{64}\\right)\\), fall through the horizontal point of inflection \\((4, 1)\\), then cross the \\(x\\)-axis between \\(5\\) and \\(6\\), ending at \\((6, -\\dfrac{5}{4})\\).",
    workingOut: "Curve starts at (0, 1), rises to the local maximum (1, 145/64), falls through the horizontal point of inflection (4, 1), continues falling and crosses the x-axis between x = 5 and x = 6, ending at (6, -5/4).",
    graphData: questions[qIndex].solutionSteps[3].graphData
  }
];

const newContent = `export const CRANBROOK_2023_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
fs.writeFileSync(path, newContent, 'utf8');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  await db.collection('questions').doc('cra2023-q27c').update({
    solutionSteps: questions[qIndex].solutionSteps,
    updatedAt: FieldValue.serverTimestamp()
  });

  await db.doc('sync_meta/questions').update({
    version: Date.now(),
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log('Successfully fixed LaTeX errors in cra2023-q27c solutionSteps!');
  process.exit(0);
}
run();
