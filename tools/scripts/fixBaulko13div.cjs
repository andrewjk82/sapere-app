const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const path = './src/constants/seedBaulkham2020Questions.js';
let content = fs.readFileSync(path, 'utf8');

const arrayMatch = content.match(/export const BAULKHAM_2020_QUESTIONS = (\[[\s\S]*?\]);\n/);
if (!arrayMatch) throw new Error("No array found");

let questions = eval(arrayMatch[1]);
const qIndex = questions.findIndex(x => x.id === 'baulko2020-q13div');
if (qIndex === -1) throw new Error("Question not found");

// Re-write the question to remove reference to previous parts
questions[qIndex].question = "Sketch the graph of \\(f(x) = \\ln(x^2+1)\\), clearly labeling any stationary points and points of inflection.";

// Generate SVG points
let points = [];
for (let x = -5; x <= 5; x += 0.1) {
  let y = Math.log(x*x + 1);
  let X = 200 + x * 40;
  let Y = 250 - y * 60;
  points.push(`${X.toFixed(1)},${Y.toFixed(1)}`);
}
const svgPath = points.join(' ');

const svgCode = `
<div style="display:flex; justify-content:center; margin: 16px 0;">
<svg viewBox="0 0 400 300" width="100%" style="max-width:400px; background-color:white; border:1px solid #ccc; border-radius:8px;">
  <!-- Axes -->
  <line x1="20" y1="250" x2="380" y2="250" stroke="#333" stroke-width="2" /> <!-- x-axis -->
  <line x1="200" y1="20" x2="200" y2="280" stroke="#333" stroke-width="2" /> <!-- y-axis -->
  
  <!-- Labels -->
  <text x="370" y="240" fill="#333" font-size="14" font-family="sans-serif">x</text>
  <text x="210" y="30" fill="#333" font-size="14" font-family="sans-serif">y</text>
  <text x="185" y="265" fill="#333" font-size="12" font-family="sans-serif">O</text>

  <!-- Curve -->
  <polyline fill="none" stroke="#2563eb" stroke-width="3" points="${svgPath}" />
  
  <!-- Local Min (0, 0) -->
  <circle cx="200" cy="250" r="4" fill="#dc2626" />
  
  <!-- Inflection Points (-1, ln 2) and (1, ln 2) -->
  <circle cx="160" cy="208.4" r="4" fill="#dc2626" />
  <circle cx="240" cy="208.4" r="4" fill="#dc2626" />
  <text x="60" y="200" fill="#dc2626" font-size="12" font-family="sans-serif">POI (-1, ln 2)</text>
  <text x="250" y="200" fill="#dc2626" font-size="12" font-family="sans-serif">POI (1, ln 2)</text>
</svg>
</div>
`;

questions[qIndex].answer = "See the solution for the full sketch.";
questions[qIndex].solution = "A sketch of \\(f(x) = \\ln(x^2+1)\\) showing a minimum at \\((0, 0)\\) and points of inflection at \\((-1, \\ln 2)\\) and \\((1, \\ln 2)\\).<br/>" + svgCode;

questions[qIndex].solutionSteps = [
  {
    explanation: "Step 1: Locate the stationary points by finding \\(f'(x)\\) and setting it to zero.",
    workingOut: "$$ \\begin{aligned} f'(x) &= \\frac{2x}{x^2+1} \\\\\\\\ \\frac{2x}{x^2+1} &= 0 \\implies x = 0 \\end{aligned} $$"
  },
  {
    explanation: "Step 2: Find the \\(y\\)-coordinate for the stationary point and determine its nature. The gradient is negative for \\(x < 0\\) and positive for \\(x > 0\\), so it is a local minimum.",
    workingOut: "$$ f(0) = \\ln(1) = 0 \\implies \\text{Local minimum at } (0, 0) $$"
  },
  {
    explanation: "Step 3: Locate the points of inflection by finding \\(f''(x)\\) and setting it to zero.",
    workingOut: "$$ \\begin{aligned} f''(x) &= \\frac{2(x^2+1) - 2x(2x)}{(x^2+1)^2} = \\frac{2-2x^2}{(x^2+1)^2} \\\\\\\\ \\frac{2-2x^2}{(x^2+1)^2} &= 0 \\implies 2x^2 = 2 \\implies x = \\pm 1 \\end{aligned} $$"
  },
  {
    explanation: "Step 4: Find the \\(y\\)-coordinates for the points of inflection and verify that concavity changes. \\(f''(0) > 0\\) and \\(f''(\\pm 2) < 0\\), so the concavity does change.",
    workingOut: "$$ f(\\pm 1) = \\ln(2) \\implies \\text{Points of inflection at } (1, \\ln 2) \\text{ and } (-1, \\ln 2) $$"
  },
  {
    explanation: "Step 5: Determine the end behavior of the curve. As \\(x\\) becomes very large, \\(x^2+1\\) approaches infinity, and the natural log approaches infinity, though very slowly.",
    workingOut: "$$ f(x) \\to \\infty \\text{ as } x \\to \\pm\\infty $$"
  },
  {
    explanation: "Step 6: Combine all this information to sketch the curve. The graph passes through the origin, has an upward cup shape between \\(x = -1\\) and \\(x = 1\\), and then bends downwards (concave down) as it continues to rise on both sides.",
    workingOut: svgCode
  }
];

const newContent = `export const BAULKHAM_2020_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
fs.writeFileSync(path, newContent, 'utf8');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  await db.collection('questions').doc('baulko2020-q13div').update({
    question: questions[qIndex].question,
    answer: questions[qIndex].answer,
    solution: questions[qIndex].solution,
    solutionSteps: questions[qIndex].solutionSteps,
    updatedAt: FieldValue.serverTimestamp()
  });

  await db.doc('sync_meta/questions').update({
    version: Date.now(),
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log('Successfully updated baulko2020-q13div!');
  process.exit(0);
}
run();
