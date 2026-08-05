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

// Re-use SVG
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
  <line x1="20" y1="220" x2="380" y2="220" stroke="#333" stroke-width="2" />
  <line x1="140" y1="20" x2="140" y2="280" stroke="#333" stroke-width="2" />
  <text x="370" y="210" fill="#333" font-size="14" font-family="sans-serif">x</text>
  <text x="150" y="30" fill="#333" font-size="14" font-family="sans-serif">y</text>
  <text x="125" y="235" fill="#333" font-size="12" font-family="sans-serif">O</text>
  <polyline fill="none" stroke="#2563eb" stroke-width="3" points="${svgPath}" />
  <circle cx="140" cy="172" r="4" fill="#dc2626" />
  <text x="75" y="165" fill="#dc2626" font-size="12" font-family="sans-serif">POI (0, 6)</text>
  <circle cx="280" cy="296" r="4" fill="#dc2626" />
  <text x="285" y="285" fill="#dc2626" font-size="12" font-family="sans-serif">Min (2, -10)</text>
</svg>
</div>
`;

questions[qIndex].solutionSteps = [
  {
    explanation: "Step 1: To sketch the graph, we first need to locate the stationary points by finding \\(f'(x)\\) and setting it to zero.",
    workingOut: "$$ \\begin{aligned} f(x) &= 3x^4 - 8x^3 + 6 \\\\\\\\ f'(x) &= 12x^3 - 24x^2 \\\\\\\\ 12x^2(x - 2) &= 0 \\implies x = 0 \\text{ or } x = 2 \\end{aligned} $$"
  },
  {
    explanation: "Step 2: Find the \\(y\\)-coordinates of these points by substituting the \\(x\\)-values back into \\(f(x)\\).",
    workingOut: "$$ \\begin{aligned} f(0) &= 3(0)^4 - 8(0)^3 + 6 = 6 \\implies (0, 6) \\\\\\\\ f(2) &= 3(2)^4 - 8(2)^3 + 6 = -10 \\implies (2, -10) \\end{aligned} $$"
  },
  {
    explanation: "Step 3: Determine the nature of each stationary point using the first or second derivative. At \\(x = 2\\), \\(f''(2) = 48 > 0\\), so it is a local minimum. At \\(x = 0\\), the gradient is negative on both sides (e.g., \\(f'(-1) = -36\\) and \\(f'(1) = -12\\)), meaning it is a horizontal point of inflection.",
    workingOut: "$$ \\text{Stationary points: } (0, 6) \\text{ (Horizontal POI) and } (2, -10) \\text{ (Local Minimum)} $$"
  },
  {
    explanation: "Step 4: Determine the end behavior of the curve. Since the highest power term is \\(3x^4\\), as \\(x\\) becomes very large (positive or negative), \\(y\\) approaches positive infinity.",
    workingOut: "$$ f(x) \\to +\\infty \\text{ as } x \\to \\pm\\infty $$"
  },
  {
    explanation: "Step 5: Plot the points \\((0, 6)\\) and \\((2, -10)\\) on a Cartesian plane. The curve descends from the left, briefly flattens at \\((0, 6)\\) without turning, continues down to the minimum at \\((2, -10)\\), and then rises steeply to the right.",
    workingOut: svgCode
  }
];

const newContent = `export const BARKER_2020_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
fs.writeFileSync(path, newContent, 'utf8');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  await db.collection('questions').doc('bar2020-q15aii').update({
    solutionSteps: questions[qIndex].solutionSteps,
    updatedAt: FieldValue.serverTimestamp()
  });

  await db.doc('sync_meta/questions').update({
    version: Date.now(),
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log('Successfully updated bar2020-q15aii full steps!');
  process.exit(0);
}
run();
