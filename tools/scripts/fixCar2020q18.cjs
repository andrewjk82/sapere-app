const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const path = './src/constants/seedCaringbah2020Questions.js';
let content = fs.readFileSync(path, 'utf8');

const arrayMatch = content.match(/export const CARINGBAH_2020_QUESTIONS = (\[[\s\S]*?\]);\n/);
if (!arrayMatch) throw new Error("No array found");

let questions = eval(arrayMatch[1]);
const qIndex = questions.findIndex(x => x.id === 'car2020-q18');
if (qIndex === -1) throw new Error("Question not found");

const baseQuestion = questions[qIndex];

const qA = {
  ...baseQuestion,
  id: "car2020-q18a",
  type: "multiple_choice",
  question: "Consider the curve \\(y = 2x^3 - 9x^2 + 12x\\). Find the coordinates of the stationary points and determine their nature.",
  opts: [
    "Local maximum at \\((1, 5)\\); local minimum at \\((2, 4)\\)",
    "Local minimum at \\((1, 5)\\); local maximum at \\((2, 4)\\)",
    "Local maximum at \\((-1, -23)\\); local minimum at \\((2, 4)\\)",
    "Local minimum at \\((-1, -23)\\); local maximum at \\((2, 4)\\)"
  ],
  a: 0,
  answer: "0",
  hint: "Find \\(y'\\) and set it to zero. Use \\(y''\\) to classify.",
  solution: "The correct answer is Local maximum at \\((1, 5)\\); local minimum at \\((2, 4)\\).",
  solutionSteps: [
    {
      explanation: "Step 1: Differentiate the function to find the first derivative \\(y'\\).",
      workingOut: "$$ y' = 6x^2 - 18x + 12 $$",
      graphData: null
    },
    {
      explanation: "Step 2: Set \\(y' = 0\\) to find the \\(x\\)-coordinates of the stationary points.",
      workingOut: "$$ \\begin{aligned} 6x^2 - 18x + 12 &= 0 \\\\\\\\ 6(x^2 - 3x + 2) &= 0 \\\\\\\\ (x - 1)(x - 2) &= 0 \\implies x = 1, x = 2 \\end{aligned} $$",
      graphData: null
    },
    {
      explanation: "Step 3: Find the corresponding \\(y\\)-coordinates by substituting \\(x = 1\\) and \\(x = 2\\) into the original equation.",
      workingOut: "$$ \\begin{aligned} \\text{For } x = 1: &\\quad y = 2(1)^3 - 9(1)^2 + 12(1) = 5 \\implies (1, 5) \\\\\\\\ \\text{For } x = 2: &\\quad y = 2(2)^3 - 9(2)^2 + 12(2) = 4 \\implies (2, 4) \\end{aligned} $$",
      graphData: null
    },
    {
      explanation: "Step 4: Find the second derivative \\(y''\\) and use it to determine the nature of each stationary point.",
      workingOut: "$$ \\begin{aligned} y'' &= 12x - 18 \\\\\\\\ \\text{At } x = 1: &\\quad y'' = 12(1) - 18 = -6 < 0 \\implies \\text{Local Maximum at } (1, 5) \\\\\\\\ \\text{At } x = 2: &\\quad y'' = 12(2) - 18 = 6 > 0 \\implies \\text{Local Minimum at } (2, 4) \\end{aligned} $$",
      graphData: null
    }
  ]
};

const qB = {
  ...baseQuestion,
  id: "car2020-q18b",
  type: "multiple_choice",
  question: "Consider the curve \\(y = 2x^3 - 9x^2 + 12x\\). Which of the following is true about its point of inflection?",
  opts: [
    "It occurs at \\(x = \\frac{3}{2}\\) because \\(y'' = 0\\) and concavity changes.",
    "It occurs at \\(x = 1\\) because \\(y' = 0\\) and gradient changes.",
    "It occurs at \\(x = 2\\) because \\(y'' = 0\\) and concavity changes.",
    "There is no point of inflection."
  ],
  a: 0,
  answer: "0",
  hint: "Set \\(y'' = 0\\) and verify that the sign of \\(y''\\) changes.",
  solution: "The correct answer is It occurs at \\(x = \\frac{3}{2}\\) because \\(y'' = 0\\) and concavity changes.",
  solutionSteps: [
    {
      explanation: "Step 1: Set the second derivative \\(y''\\) to zero to find the possible point of inflection.",
      workingOut: "$$ \\begin{aligned} y'' &= 12x - 18 \\\\\\\\ 12x - 18 &= 0 \\implies 12x = 18 \\implies x = \\frac{3}{2} \\end{aligned} $$",
      graphData: null
    },
    {
      explanation: "Step 2: Verify that the concavity actually changes at \\(x = \\frac{3}{2}\\) by testing \\(y''\\) on either side.",
      workingOut: "$$ \\begin{aligned} \\text{Test } x = 1: &\\quad y''(1) = -6 < 0 \\quad (\\text{Concave down}) \\\\\\\\ \\text{Test } x = 2: &\\quad y''(2) = 6 > 0 \\quad (\\text{Concave up}) \\end{aligned} $$",
      graphData: null
    },
    {
      explanation: "Step 3: Conclude that a change in concavity confirms a point of inflection.",
      workingOut: "$$ \\text{Since concavity changes, there is a true point of inflection at } x = \\frac{3}{2}. $$",
      graphData: null
    }
  ]
};

const svgCode = `
<div style="display:flex; justify-content:center; margin: 16px 0;">
<svg viewBox="0 0 400 300" width="100%" style="max-width:400px; background-color:white; border:1px solid #ccc; border-radius:8px;">
  <!-- Axes -->
  <line x1="20" y1="250" x2="380" y2="250" stroke="#333" stroke-width="2" /> <!-- x-axis -->
  <line x1="50" y1="20" x2="50" y2="280" stroke="#333" stroke-width="2" /> <!-- y-axis -->
  
  <!-- Labels -->
  <text x="370" y="240" fill="#333" font-size="14" font-family="sans-serif">x</text>
  <text x="60" y="30" fill="#333" font-size="14" font-family="sans-serif">y</text>
  <text x="35" y="265" fill="#333" font-size="12" font-family="sans-serif">O</text>

  <!-- Curve: y = 2x^3 - 9x^2 + 12x -->
  <!-- Map: x from -0.5 to 3.5 -> X = 50 + x*80 -->
  <!-- y from -2 to 10 -> Y = 250 - y*20 -->
  <polyline fill="none" stroke="#2563eb" stroke-width="3" points="
    10,290 
    26,275 
    42,258 
    50,250 
    90,160 
    130,150 
    170,160 
    210,170 
    250,150 
    290,70 
  " />
  
  <!-- Improved Curve -->
  <path d="M 10 290 Q 50 250 90 160 T 130 150 T 170 160 T 210 170 T 290 70" fill="none" stroke="#2563eb" stroke-width="3" />
  
  <!-- Correct calculated path: -->
  <!-- Let's just use exact points -->
  <polyline fill="none" stroke="#2563eb" stroke-width="3" points="
    10,270
    50,250
    90,188
    130,150
    170,160
    210,170
    250,146
    290,50
  " />

  <!-- The exact SVG points generated dynamically -->
</svg>
</div>
`;

// Let's accurately generate the SVG path
let points = [];
for (let x = -0.2; x <= 3.2; x += 0.1) {
  let y = 2*x*x*x - 9*x*x + 12*x;
  let X = 50 + x * 80;
  let Y = 250 - y * 20;
  if(Y > -50 && Y < 350) {
    points.push(`${X.toFixed(1)},${Y.toFixed(1)}`);
  }
}
const exactSvgPath = points.join(' ');

const exactSvgCode = `
<div style="display:flex; justify-content:center; margin: 16px 0;">
<svg viewBox="0 0 400 300" width="100%" style="max-width:400px; background-color:white; border:1px solid #ccc; border-radius:8px;">
  <!-- Axes -->
  <line x1="20" y1="250" x2="380" y2="250" stroke="#333" stroke-width="2" /> <!-- x-axis -->
  <line x1="50" y1="20" x2="50" y2="280" stroke="#333" stroke-width="2" /> <!-- y-axis -->
  
  <!-- Labels -->
  <text x="370" y="240" fill="#333" font-size="14" font-family="sans-serif">x</text>
  <text x="60" y="30" fill="#333" font-size="14" font-family="sans-serif">y</text>
  <text x="35" y="265" fill="#333" font-size="12" font-family="sans-serif">O</text>

  <!-- Curve -->
  <polyline fill="none" stroke="#2563eb" stroke-width="3" points="${exactSvgPath}" />
  
  <!-- Points -->
  <circle cx="130" cy="150" r="4" fill="#dc2626" />
  <text x="110" y="140" fill="#dc2626" font-size="12" font-family="sans-serif">(1, 5)</text>
  
  <circle cx="210" cy="170" r="4" fill="#dc2626" />
  <text x="215" y="185" fill="#dc2626" font-size="12" font-family="sans-serif">(2, 4)</text>
  
  <circle cx="170" cy="160" r="4" fill="#059669" />
  <text x="175" y="155" fill="#059669" font-size="12" font-family="sans-serif">POI (1.5, 4.5)</text>
</svg>
</div>
`;

const qC = {
  ...baseQuestion,
  id: "car2020-q18c",
  type: "teacher_review",
  question: "Consider the curve \\(y = 2x^3 - 9x^2 + 12x\\). Sketch the graph, indicating clearly all important features.",
  opts: [],
  a: 0,
  answer: "See the solution for the full sketch.",
  hint: "Combine the stationary points, point of inflection, and y-intercept \\((0,0)\\) to draw the curve.",
  solution: "The curve passes through the origin, has a local maximum at \\((1, 5)\\), a point of inflection at \\((1.5, 4.5)\\), and a local minimum at \\((2, 4)\\).<br/>" + exactSvgCode,
  solutionSteps: [
    {
      explanation: "Step 1: Identify the \\(y\\)-intercept.",
      workingOut: "$$ \\text{When } x = 0, \\quad y = 2(0)^3 - 9(0)^2 + 12(0) = 0 \\implies (0, 0) $$",
      graphData: null
    },
    {
      explanation: "Step 2: Use the stationary points from part (a).",
      workingOut: "$$ \\text{Local max at } (1, 5) \\text{ and local min at } (2, 4) $$",
      graphData: null
    },
    {
      explanation: "Step 3: Use the point of inflection from part (b).",
      workingOut: "$$ \\text{Point of inflection at } (1.5, 4.5) $$",
      graphData: null
    },
    {
      explanation: "Step 4: Analyze end behavior. As \\(x \\to \\infty\\), \\(y \\to \\infty\\). As \\(x \\to -\\infty\\), \\(y \\to -\\infty\\).",
      workingOut: "$$ \\text{End behavior: cubic with positive leading coefficient} $$",
      graphData: null
    },
    {
      explanation: "Step 5: Sketch the graph smoothly connecting these features.",
      workingOut: exactSvgCode,
      graphData: null
    }
  ]
};

questions.splice(qIndex, 1, qA, qB, qC);

const newContent = `export const CARINGBAH_2020_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
fs.writeFileSync(path, newContent, 'utf8');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  // Delete the old combined question
  await db.collection('questions').doc('car2020-q18').delete();

  // Add the three new sub-questions
  const writeQA = db.collection('questions').doc('car2020-q18a').set({
    ...qA,
    options: qA.opts.map(text => ({ text, imageUrl: '' })),
    createdAt: FieldValue.serverTimestamp(),
    updatedAt: FieldValue.serverTimestamp()
  });

  const writeQB = db.collection('questions').doc('car2020-q18b').set({
    ...qB,
    options: qB.opts.map(text => ({ text, imageUrl: '' })),
    createdAt: FieldValue.serverTimestamp(),
    updatedAt: FieldValue.serverTimestamp()
  });

  const writeQC = db.collection('questions').doc('car2020-q18c').set({
    ...qC,
    options: [],
    createdAt: FieldValue.serverTimestamp(),
    updatedAt: FieldValue.serverTimestamp()
  });

  await Promise.all([writeQA, writeQB, writeQC]);

  await db.doc('sync_meta/questions').update({
    version: Date.now(),
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log('Successfully split car2020-q18 into a, b, c and updated Firestore!');
  process.exit(0);
}
run();
