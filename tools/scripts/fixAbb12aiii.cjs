const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const path = './src/constants/seedAbbotsleigh2020Questions.js';
let content = fs.readFileSync(path, 'utf8');

const arrayMatch = content.match(/export const ABBOTSLEIGH_2020_QUESTIONS = (\[[\s\S]*?\]);\n/);
if (!arrayMatch) throw new Error("No array found");

let questions = eval(arrayMatch[1]);
const qIndex = questions.findIndex(x => x.id === 'abb2020-q12aiii');
if (qIndex === -1) throw new Error("Question not found");

// Generate precise SVG points
let points = [];
for(let x = -0.5; x <= 2.6; x += 0.05) {
  let y = (x - 2) * (x * x + 1);
  let X = 100 + x * 80;
  let Y = 150 - y * 40;
  if(Y >= 0 && Y <= 300) {
    points.push(`${X.toFixed(1)},${Y.toFixed(1)}`);
  }
}
const svgPath = points.join(' ');

const svgCode = `
<div style="display:flex; justify-content:center; margin: 16px 0;">
<svg viewBox="0 0 400 300" width="100%" style="max-width:400px; background-color:white; border:1px solid #ccc; border-radius:8px;">
  <!-- Axes -->
  <line x1="20" y1="150" x2="380" y2="150" stroke="#333" stroke-width="2" />
  <line x1="100" y1="20" x2="100" y2="280" stroke="#333" stroke-width="2" />
  
  <!-- Labels -->
  <text x="370" y="140" fill="#333" font-size="14" font-family="sans-serif">x</text>
  <text x="110" y="30" fill="#333" font-size="14" font-family="sans-serif">y</text>
  <text x="85" y="145" fill="#333" font-size="12" font-family="sans-serif">O</text>

  <!-- Curve -->
  <polyline fill="none" stroke="#2563eb" stroke-width="3" points="${svgPath}" />
  
  <!-- y-intercept (0, -2) -->
  <circle cx="100" cy="230" r="4" fill="#dc2626" />
  <text x="35" y="235" fill="#dc2626" font-size="12" font-family="sans-serif">(0, -2)</text>

  <!-- x-intercept (2, 0) -->
  <circle cx="260" cy="150" r="4" fill="#dc2626" />
  <text x="250" y="140" fill="#dc2626" font-size="12" font-family="sans-serif">(2, 0)</text>

  <!-- local max (1/3, -50/27) -->
  <circle cx="126.7" cy="224.1" r="4" fill="#dc2626" />
  <text x="115" y="215" fill="#dc2626" font-size="12" font-family="sans-serif">Max (1/3, -50/27)</text>

  <!-- local min (1, -2) -->
  <circle cx="180" cy="230" r="4" fill="#dc2626" />
  <text x="175" y="245" fill="#dc2626" font-size="12" font-family="sans-serif">Min (1, -2)</text>
</svg>
</div>
`;

questions[qIndex].type = "short_answer"; // Fix the type
delete questions[qIndex].opts; // Make sure opts is removed
delete questions[qIndex].a;

questions[qIndex].answer = "See the solution for the full sketch.";
questions[qIndex].solution = "A sketch of \\(y = h(x)\\) showing the \\(x\\)-intercept at \\((2, 0)\\), \\(y\\)-intercept at \\((0, -2)\\), local maximum at \\(\\left(\\frac{1}{3}, -\\frac{50}{27}\\right)\\), and local minimum at \\((1, -2)\\).<br/>" + svgCode;

questions[qIndex].solutionSteps = [
  {
    explanation: "From parts (a)(i) and (a)(ii), we have already gathered all the critical points for the curve \\(y = h(x)\\).",
    workingOut: "$\\text{Intercepts: } (2, 0) \\text{ and } (0, -2) \\\\\\\\ \\text{Stationary points: } \\left(\\frac{1}{3}, -\\frac{50}{27}\\right) \\text{ (Max)} \\text{ and } (1, -2) \\text{ (Min)}$"
  },
  {
    explanation: "To sketch the graph, first plot the intercepts and stationary points on a Cartesian plane. The local minimum at \\((1, -2)\\) shares the same \\(y\\)-level as the \\(y\\)-intercept \\((0, -2)\\).",
    workingOut: "$\\text{Plot the four key points.}$"
  },
  {
    explanation: "Connect the points smoothly. Since it is a cubic equation with a positive leading coefficient (\\(x^3\\)), the curve starts from the bottom left, goes up to the local max, down to the local min, and then shoots up to the top right.",
    workingOut: svgCode
  }
];

const newContent = `export const ABBOTSLEIGH_2020_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
fs.writeFileSync(path, newContent, 'utf8');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  await db.collection('questions').doc('abb2020-q12aiii').update({
    type: "short_answer",
    opts: FieldValue.delete(),
    options: FieldValue.delete(),
    a: FieldValue.delete(),
    answer: questions[qIndex].answer,
    solution: questions[qIndex].solution,
    solutionSteps: questions[qIndex].solutionSteps,
    updatedAt: FieldValue.serverTimestamp()
  });

  await db.doc('sync_meta/questions').update({
    version: Date.now(),
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log('Successfully updated abb2020-q12aiii with SVG!');
  process.exit(0);
}
run();
