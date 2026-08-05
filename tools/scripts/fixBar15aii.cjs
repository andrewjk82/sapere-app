const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const path = './src/constants/seedBarker2020Questions.js';
let content = fs.readFileSync(path, 'utf8');

const arrayMatch = content.match(/export const BARKER_2020_QUESTIONS = (\[[\s\S]*?\]);\n/);
if (!arrayMatch) throw new Error("No array found");

let questions = eval(arrayMatch[1]);
const qIndex = questions.findIndex(x => x.id === 'bar2020-q15aii');
if (qIndex === -1) throw new Error("Question not found");

// Generate SVG points
let points = [];
for (let x = -1.2; x <= 3.2; x += 0.05) {
  let y = 3 * Math.pow(x, 4) - 8 * Math.pow(x, 3) + 6;
  let X = 140 + x * 70;
  let Y = 220 - y * 8;
  if (Y >= 0 && Y <= 300) {
    points.push(`${X.toFixed(1)},${Y.toFixed(1)}`);
  }
}
const svgPath = points.join(' ');

const svgCode = `
<div style="display:flex; justify-content:center; margin: 16px 0;">
<svg viewBox="0 0 400 300" width="100%" style="max-width:400px; background-color:white; border:1px solid #ccc; border-radius:8px;">
  <!-- Axes -->
  <line x1="20" y1="220" x2="380" y2="220" stroke="#333" stroke-width="2" />
  <line x1="140" y1="20" x2="140" y2="280" stroke="#333" stroke-width="2" />
  
  <!-- Labels -->
  <text x="370" y="210" fill="#333" font-size="14" font-family="sans-serif">x</text>
  <text x="150" y="30" fill="#333" font-size="14" font-family="sans-serif">y</text>
  <text x="125" y="235" fill="#333" font-size="12" font-family="sans-serif">O</text>

  <!-- Curve -->
  <polyline fill="none" stroke="#2563eb" stroke-width="3" points="${svgPath}" />
  
  <!-- Horizontal POI (0, 6) -->
  <circle cx="140" cy="172" r="4" fill="#dc2626" />
  <text x="75" y="165" fill="#dc2626" font-size="12" font-family="sans-serif">POI (0, 6)</text>

  <!-- Local Min (2, -10) -->
  <circle cx="280" cy="300" r="4" fill="#dc2626" /> <!-- Note: (2,-10) maps to Y=300 exactly. Let's adjust slightly for text -->
  <text x="285" y="290" fill="#dc2626" font-size="12" font-family="sans-serif">Min (2, -10)</text>
</svg>
</div>
`;

// Adjust SVG for better visibility of the minimum since Y=300 is the bottom edge
const svgCodeFixed = svgCode.replace('<circle cx="280" cy="300" r="4" fill="#dc2626" />', '<circle cx="280" cy="296" r="4" fill="#dc2626" />').replace('y="290"', 'y="285"');

questions[qIndex].answer = "See the solution for the full sketch.";
questions[qIndex].solution = "A sketch of \\(y = f(x)\\) showing a horizontal point of inflection at \\((0, 6)\\) and a local minimum at \\((2, -10)\\). The curve decreases for \\(x < 2\\) and increases for \\(x > 2\\).<br/>" + svgCodeFixed;

questions[qIndex].solutionSteps = [
  {
    explanation: "Step 1: From part (a)(i), gather the critical points we found. We have a horizontal point of inflection at \\((0, 6)\\) and a local minimum at \\((2, -10)\\).",
    workingOut: "$$ \\text{Stationary points: } (0, 6) \\text{ (Horizontal POI) and } (2, -10) \\text{ (Local Minimum)} $$"
  },
  {
    explanation: "Step 2: Determine the behavior of the curve as \\(x \\to \\pm\\infty\\). Since the leading term is \\(3x^4\\) (which has an even power and positive coefficient), the curve will go to \\(+\\infty\\) on both sides.",
    workingOut: "$$ f(x) \\to +\\infty \\text{ as } x \\to \\pm\\infty $$"
  },
  {
    explanation: "Step 3: Plot the points \\((0, 6)\\) and \\((2, -10)\\) on a Cartesian plane. The curve comes down from the left, flattens out temporarily at \\((0, 6)\\) but continues downwards, reaches the minimum at \\((2, -10)\\), and then rises steeply to the right.",
    workingOut: svgCodeFixed
  }
];

const newContent = `export const BARKER_2020_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
fs.writeFileSync(path, newContent, 'utf8');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  await db.collection('questions').doc('bar2020-q15aii').update({
    answer: questions[qIndex].answer,
    solution: questions[qIndex].solution,
    solutionSteps: questions[qIndex].solutionSteps,
    updatedAt: FieldValue.serverTimestamp()
  });

  await db.doc('sync_meta/questions').update({
    version: Date.now(),
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log('Successfully updated bar2020-q15aii!');
  process.exit(0);
}
run();
