const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const bound = 10;
  let grid = '';
  for (let i = -bound; i <= bound; i++) {
    if (i >= -2 && i <= 10) {
      grid += `<line x1="${-2}" y1="${i}" x2="${10}" y2="${i}" stroke="#e2e8f0" stroke-width="0.05"/>`;
    }
    if (i >= -2 && i <= 10) {
      grid += `<line x1="${i}" y1="${-10}" x2="${i}" y2="${2}" stroke="#e2e8f0" stroke-width="0.05"/>`;
    }
  }

  // math x: [-2, 10], math y: [-10, 2]
  // SVG y = -math_y -> SVG y: [-2, 10]
  // viewBox min-x = -2, min-y = -2, width = 12, height = 12
  const svg = `
<div style="display:flex;justify-content:center;align-items:center;margin:10px 0;">
<svg width="280" height="280" viewBox="-2 -2 12 12" xmlns="http://www.w3.org/2000/svg">
  <!-- grid -->
  <g stroke="#e2e8f0" stroke-width="0.05">
    <line x1="-2" y1="-2" x2="10" y2="-2"/>
    <line x1="-2" y1="-1" x2="10" y2="-1"/>
    <line x1="-2" y1="0" x2="10" y2="0"/>
    <line x1="-2" y1="1" x2="10" y2="1"/>
    <line x1="-2" y1="2" x2="10" y2="2"/>
    <line x1="-2" y1="3" x2="10" y2="3"/>
    <line x1="-2" y1="4" x2="10" y2="4"/>
    <line x1="-2" y1="5" x2="10" y2="5"/>
    <line x1="-2" y1="6" x2="10" y2="6"/>
    <line x1="-2" y1="7" x2="10" y2="7"/>
    <line x1="-2" y1="8" x2="10" y2="8"/>
    <line x1="-2" y1="9" x2="10" y2="9"/>
    <line x1="-2" y1="10" x2="10" y2="10"/>
    <line x1="-2" y1="-2" x2="-2" y2="10"/>
    <line x1="-1" y1="-2" x2="-1" y2="10"/>
    <line x1="0" y1="-2" x2="0" y2="10"/>
    <line x1="1" y1="-2" x2="1" y2="10"/>
    <line x1="2" y1="-2" x2="2" y2="10"/>
    <line x1="3" y1="-2" x2="3" y2="10"/>
    <line x1="4" y1="-2" x2="4" y2="10"/>
    <line x1="5" y1="-2" x2="5" y2="10"/>
    <line x1="6" y1="-2" x2="6" y2="10"/>
    <line x1="7" y1="-2" x2="7" y2="10"/>
    <line x1="8" y1="-2" x2="8" y2="10"/>
    <line x1="9" y1="-2" x2="9" y2="10"/>
    <line x1="10" y1="-2" x2="10" y2="10"/>
  </g>
  
  <!-- axes (SVG y=0 is math y=0) -->
  <line x1="-2" y1="0" x2="10" y2="0" stroke="#94a3b8" stroke-width="0.12"/>
  <line x1="0" y1="-2" x2="0" y2="10" stroke="#94a3b8" stroke-width="0.12"/>
  
  <!-- Original Line (intercepts 4, -3 => SVG y=3) -->
  <!-- extended from x=-1 (math y = 3/4*(-1)-3 = -3.75 => SVG y=3.75) to x=6 (math y= 3/4*6-3 = 1.5 => SVG y=-1.5) -->
  <line x1="-1" y1="3.75" x2="6" y2="-1.5" stroke="#94a3b8" stroke-width="0.1" stroke-dasharray="0.3,0.3"/>
  <circle cx="4" cy="0" r="0.15" fill="#94a3b8"/>
  <circle cx="0" cy="3" r="0.15" fill="#94a3b8"/>
  
  <!-- New Line (intercepts 8, -6 => SVG y=6) -->
  <!-- extended from x=-1 (math y = 3/4*(-1)-6 = -6.75 => SVG y=6.75) to x=10 (math y=3/4*10-6 = 1.5 => SVG y=-1.5) -->
  <line x1="-1" y1="6.75" x2="10" y2="-1.5" stroke="#6366f1" stroke-width="0.12"/>
  <circle cx="8" cy="0" r="0.2" fill="#6366f1"/>
  <circle cx="0" cy="6" r="0.2" fill="#6366f1"/>
  
  <!-- Labels -->
  <text x="3.7" y="-0.4" font-size="0.6" font-family="sans-serif" fill="#64748b">(4, 0)</text>
  <text x="0.3" y="3.2" font-size="0.6" font-family="sans-serif" fill="#64748b">(0, −3)</text>
  <text x="7.7" y="-0.4" font-size="0.6" font-family="sans-serif" fill="#4f46e5" font-weight="bold">(8, 0)</text>
  <text x="0.4" y="6.2" font-size="0.6" font-family="sans-serif" fill="#4f46e5" font-weight="bold">(0, −6)</text>
  
  <text x="5.5" y="-1.5" font-size="0.5" font-family="sans-serif" fill="#94a3b8" transform="rotate(-36 6 -1.5)">3x - 4y - 12 = 0</text>
  <text x="8.5" y="-0.5" font-size="0.5" font-family="sans-serif" fill="#6366f1" transform="rotate(-36 8 -0.5)">3x - 4y - 24 = 0</text>
</svg>
</div>`;

  const steps = [
    {
      explanation: "First, let's find the \\(x\\) and \\(y\\)-intercepts of the original line: \\(3x - 4y - 12 = 0\\).",
      workingOut: "Original line: \\(3x - 4y - 12 = 0\\)",
      graphData: { html: svg }
    },
    {
      explanation: "To find the \\(x\\)-intercept, substitute \\(y = 0\\) and solve for \\(x\\).",
      workingOut: [
        "\\(3x - 4(0) - 12 = 0\\)",
        "\\(3x = 12\\)",
        "\\(x = 4\\)",
        "\\(\\therefore \\text{ Original } x\\text{-intercept is } (4, 0)\\)"
      ].join("\n"),
      graphData: null
    },
    {
      explanation: "To find the \\(y\\)-intercept, substitute \\(x = 0\\) and solve for \\(y\\).",
      workingOut: [
        "\\(3(0) - 4y - 12 = 0\\)",
        "\\(-4y = 12\\)",
        "\\(y = -3\\)",
        "\\(\\therefore \\text{ Original } y\\text{-intercept is } (0, -3)\\)"
      ].join("\n"),
      graphData: null
    },
    {
      explanation: "The new line has intercepts that are exactly **twice** the original intercepts. Let's multiply them by 2.",
      workingOut: [
        "\\(\\text{New } x\\text{-intercept} = 4 \\times 2 = 8 \\implies (8, 0)\\)",
        "\\(\\text{New } y\\text{-intercept} = -3 \\times 2 = -6 \\implies (0, -6)\\)"
      ].join("\n"),
      graphData: null
    },
    {
      explanation: "Now we need to find the equation of the line passing through \\((8, 0)\\) and \\((0, -6)\\). First, find the gradient \\(m\\).",
      workingOut: "\\(m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{-6 - 0}{0 - 8} = \\frac{-6}{-8} = \\frac{3}{4}\\)",
      graphData: null
    },
    {
      explanation: "Use the gradient-intercept form \\(y = mx + c\\). We already know the \\(y\\)-intercept \\(c = -6\\).",
      workingOut: "\\(y = \\frac{3}{4}x - 6\\)",
      graphData: null
    },
    {
      explanation: "The question asks for the answer in General Form: \\(Ax + By + C = 0\\) with \\(A > 0\\). Let's multiply the entire equation by 4 to remove the fraction, and then rearrange it.",
      workingOut: [
        "\\(4 \\times y = 4 \\times \\left(\\frac{3}{4}x - 6\\right)\\)",
        "\\(4y = 3x - 24\\)",
        "\\(3x - 4y - 24 = 0\\)"
      ].join("\n"),
      graphData: null
    }
  ];

  await db.collection('questions').doc('y9-11i-q5').update({
    options: [
      { text: "\\(3x - 4y - 6 = 0\\)", imageUrl: "" },
      { text: "\\(4x - 3y - 24 = 0\\)", imageUrl: "" },
      { text: "\\(6x - 8y - 12 = 0\\)", imageUrl: "" },
      { text: "\\(3x - 4y - 24 = 0\\)", imageUrl: "" }
    ],
    answer: "3", // Index 3 is the correct one
    solutionSteps: steps,
    graphData: null,
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log("Updated y9-11i-q5");
  process.exit(0);
}

run().catch(console.error);
