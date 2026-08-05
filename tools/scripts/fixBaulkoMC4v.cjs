const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const path = './src/constants/seedBaulkham2020Questions.js';
let content = fs.readFileSync(path, 'utf8');

const arrayMatch = content.match(/export const BAULKHAM_2020_QUESTIONS = (\[[\s\S]*?\]);\n/);
if (!arrayMatch) throw new Error("No array found");

let questions = eval(arrayMatch[1]);
const qIndex = questions.findIndex(x => x.id === 'baulko2020-mc4v');
if (qIndex === -1) throw new Error("Question not found");

// Generate SVG points for increasing concave down curve
let points = [];
for (let x = 0; x <= 200; x += 5) {
  // y = 100 * (1 - e^(-x/50))
  let y = 100 * (1 - Math.exp(-x / 50));
  let X = 50 + x;
  let Y = 150 - y;
  points.push(`${X.toFixed(1)},${Y.toFixed(1)}`);
}
const svgPath = points.join(' ');

const svgCode = `
<div style="display:flex; justify-content:center; margin: 16px 0;">
<svg viewBox="0 0 300 200" width="100%" style="max-width:300px; background-color:white; border:1px solid #ccc; border-radius:8px;">
  <!-- Axes -->
  <line x1="20" y1="150" x2="280" y2="150" stroke="#333" stroke-width="2" /> <!-- x-axis -->
  <line x1="50" y1="20" x2="50" y2="180" stroke="#333" stroke-width="2" /> <!-- y-axis -->
  
  <!-- Labels -->
  <text x="270" y="140" fill="#333" font-size="14" font-family="sans-serif">x</text>
  <text x="60" y="30" fill="#333" font-size="14" font-family="sans-serif">y</text>
  <text x="35" y="165" fill="#333" font-size="12" font-family="sans-serif">O</text>

  <!-- Curve -->
  <polyline fill="none" stroke="#2563eb" stroke-width="3" points="${svgPath}" />
</svg>
</div>
`;

questions[qIndex].question = `A curve is increasing and concave down. Which inequalities are correct?<br/>${svgCode}`;

questions[qIndex].solutionSteps = [
  {
    explanation: "Step 1: The problem states that the curve is increasing. This means that as \\(x\\) moves from left to right, the \\(y\\)-values go up.",
    workingOut: "$$ \\text{Increasing function} \\implies \\frac{dy}{dx} > 0 $$"
  },
  {
    explanation: "Step 2: The problem also states that the curve is concave down. This means the curve bends downwards, similar to the shape of an umbrella (\\(\\cap\\)).",
    workingOut: "$$ \\text{Concave down} \\implies \\frac{d^2y}{dx^2} < 0 $$"
  },
  {
    explanation: "Step 3: Combine both observations to find the correct pair of inequalities.",
    workingOut: "$$ \\therefore \\frac{dy}{dx} > 0 \\text{ and } \\frac{d^2y}{dx^2} < 0 $$"
  }
];

const newContent = `export const BAULKHAM_2020_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
fs.writeFileSync(path, newContent, 'utf8');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  await db.collection('questions').doc('baulko2020-mc4v').update({
    question: questions[qIndex].question,
    solutionSteps: questions[qIndex].solutionSteps,
    updatedAt: FieldValue.serverTimestamp()
  });

  await db.doc('sync_meta/questions').update({
    version: Date.now(),
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log('Successfully updated baulko2020-mc4v graph and steps!');
  process.exit(0);
}
run();
