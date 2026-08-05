const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const path = './src/constants/seedBlacktownBoys2020SimilarQuestions.js';
let content = fs.readFileSync(path, 'utf8');

const arrayMatch = content.match(/export const BLACKTOWN_BOYS_2020_SIMILAR_QUESTIONS = (\[[\s\S]*?\]);\n/);
if (!arrayMatch) throw new Error("No array found");

let questions = eval(arrayMatch[1]);
const qIndex = questions.findIndex(x => x.id === 'bbhs2020s-mc8');
if (qIndex === -1) throw new Error("Question not found");

// Generate SVG points for increasing concave up curve
let points = [];
for (let x = 0; x <= 3.8; x += 0.1) {
  // y = x^2
  let y = x * x;
  let X = 50 + x * 60;
  let Y = 250 - y * 12.5;
  points.push(`${X.toFixed(1)},${Y.toFixed(1)}`);
}
const svgPath = points.join(' ');

const svgCode = `
<div style="display:flex; justify-content:center; margin: 16px 0;">
<svg viewBox="0 0 300 300" width="100%" style="max-width:300px; background-color:white; border:1px solid #ccc; border-radius:8px;">
  <!-- Axes -->
  <line x1="20" y1="250" x2="280" y2="250" stroke="#333" stroke-width="2" /> <!-- x-axis -->
  <line x1="50" y1="20" x2="50" y2="280" stroke="#333" stroke-width="2" /> <!-- y-axis -->
  
  <!-- Labels -->
  <text x="270" y="240" fill="#333" font-size="14" font-family="sans-serif">x</text>
  <text x="60" y="30" fill="#333" font-size="14" font-family="sans-serif">y</text>
  <text x="35" y="265" fill="#333" font-size="12" font-family="sans-serif">O</text>

  <!-- Curve -->
  <polyline fill="none" stroke="#2563eb" stroke-width="3" points="${svgPath}" />
  
  <!-- Point Q -->
  <circle cx="170" cy="200" r="4" fill="#dc2626" />
  <text x="180" y="205" fill="#dc2626" font-size="14" font-weight="bold" font-family="sans-serif">Q(b, f(b))</text>
</svg>
</div>
`;

questions[qIndex].question = `A graph shows the curve \\(y = f(x)\\) with a point \\(Q(b, f(b))\\) in the first quadrant. At \\(Q\\) the curve is increasing and concave up. Which statement is true?<br/>${svgCode}`;

questions[qIndex].solutionSteps = [
  {
    explanation: "Step 1: First, analyze the 'increasing' condition at point \\(Q\\). If a function is increasing, its graph is sloping upwards from left to right. This means the gradient (first derivative) is positive.",
    workingOut: "$$ \\text{Increasing} \\implies f'(b) > 0 $$"
  },
  {
    explanation: "Step 2: Next, analyze the 'concave up' condition at point \\(Q\\). If a curve is concave up, it bends upwards like a smile (\\(\\smile\\)). This means the rate of change of the gradient (second derivative) is positive.",
    workingOut: "$$ \\text{Concave up} \\implies f''(b) > 0 $$"
  },
  {
    explanation: "Step 3: Combine both mathematical conditions.",
    workingOut: "$$ \\therefore f'(b) > 0 \\text{ and } f''(b) > 0 $$"
  }
];

const newContent = `export const BLACKTOWN_BOYS_2020_SIMILAR_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
fs.writeFileSync(path, newContent, 'utf8');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  await db.collection('questions').doc('bbhs2020s-mc8').update({
    question: questions[qIndex].question,
    solutionSteps: questions[qIndex].solutionSteps,
    updatedAt: FieldValue.serverTimestamp()
  });

  await db.doc('sync_meta/questions').update({
    version: Date.now(),
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log('Successfully updated bbhs2020s-mc8 graph and steps!');
  process.exit(0);
}
run();
