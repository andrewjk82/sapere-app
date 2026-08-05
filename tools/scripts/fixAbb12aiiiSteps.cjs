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

// Reuse the SVG generation logic
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
  <line x1="20" y1="150" x2="380" y2="150" stroke="#333" stroke-width="2" />
  <line x1="100" y1="20" x2="100" y2="280" stroke="#333" stroke-width="2" />
  <text x="370" y="140" fill="#333" font-size="14" font-family="sans-serif">x</text>
  <text x="110" y="30" fill="#333" font-size="14" font-family="sans-serif">y</text>
  <text x="85" y="145" fill="#333" font-size="12" font-family="sans-serif">O</text>
  <polyline fill="none" stroke="#2563eb" stroke-width="3" points="${svgPath}" />
  <circle cx="100" cy="230" r="4" fill="#dc2626" />
  <text x="35" y="235" fill="#dc2626" font-size="12" font-family="sans-serif">(0, -2)</text>
  <circle cx="260" cy="150" r="4" fill="#dc2626" />
  <text x="250" y="140" fill="#dc2626" font-size="12" font-family="sans-serif">(2, 0)</text>
  <circle cx="126.7" cy="224.1" r="4" fill="#dc2626" />
  <text x="115" y="215" fill="#dc2626" font-size="12" font-family="sans-serif">Max (1/3, -50/27)</text>
  <circle cx="180" cy="230" r="4" fill="#dc2626" />
  <text x="175" y="245" fill="#dc2626" font-size="12" font-family="sans-serif">Min (1, -2)</text>
</svg>
</div>
`;

questions[qIndex].solutionSteps = [
  {
    explanation: "Step 1: Find the axes intercepts. Set \\(x = 0\\) to find the \\(y\\)-intercept, and set \\(h(x) = 0\\) to find the \\(x\\)-intercepts.",
    workingOut: "$$ \\begin{aligned} h(0) &= (0 - 2)(0^2 + 1) = -2 \\implies y\\text{-intercept at } (0, -2) \\\\\\\\ h(x) &= 0 \\implies (x - 2)(x^2 + 1) = 0 \\implies x = 2 \\implies x\\text{-intercept at } (2, 0) \\end{aligned} $$"
  },
  {
    explanation: "Step 2: Find the stationary points by setting the first derivative \\(h'(x)\\) to zero. It is easier to expand \\(h(x)\\) first before differentiating.",
    workingOut: "$$ \\begin{aligned} h(x) &= x^3 - 2x^2 + x - 2 \\\\\\\\ h'(x) &= 3x^2 - 4x + 1 = 0 \\\\\\\\ (3x - 1)(x - 1) &= 0 \\implies x = \\frac{1}{3} \\text{ or } x = 1 \\end{aligned} $$"
  },
  {
    explanation: "Step 3: Find the \\(y\\)-coordinates of the stationary points and use the second derivative \\(h''(x) = 6x - 4\\) to determine their nature (max or min).",
    workingOut: "$$ \\begin{aligned} x &= \\frac{1}{3}: \\quad h\\left(\\frac{1}{3}\\right) = -\\frac{50}{27}, \\quad h''\\left(\\frac{1}{3}\\right) = -2 < 0 \\implies \\text{Local Max at } \\left(\\frac{1}{3}, -\\frac{50}{27}\\right) \\\\\\\\ x &= 1: \\quad h(1) = -2, \\quad h''(1) = 2 > 0 \\implies \\text{Local Min at } (1, -2) \\end{aligned} $$"
  },
  {
    explanation: "Step 4: Finally, plot the intercepts and stationary points on a Cartesian plane and connect them with a smooth cubic curve. Notice that the local minimum \\((1, -2)\\) shares the exact same \\(y\\)-level as the \\(y\\)-intercept \\((0, -2)\\).",
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
    solutionSteps: questions[qIndex].solutionSteps,
    updatedAt: FieldValue.serverTimestamp()
  });

  await db.doc('sync_meta/questions').update({
    version: Date.now(),
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log('Successfully updated abb2020-q12aiii full steps!');
  process.exit(0);
}
run();
