const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const bound = 9;
  let grid = '';
  for (let i = -bound; i <= bound; i++) {
    grid += `<line x1="${-bound}" y1="${i}" x2="${bound}" y2="${i}" stroke="#e2e8f0" stroke-width="0.05"/>`;
    grid += `<line x1="${i}" y1="${-bound}" x2="${i}" y2="${bound}" stroke="#e2e8f0" stroke-width="0.05"/>`;
  }

  // SVG for A(2, 1), B(8, 5), C(4, 7), D(-2, 3)
  const svg = `
<div style="display:flex;justify-content:center;align-items:center;margin:10px 0;">
<svg width="280" height="280" viewBox="-4 -2 14 11" xmlns="http://www.w3.org/2000/svg">
  <g transform="scale(1,-1)">
    ${grid}
    <line x1="${-bound}" y1="0" x2="${bound}" y2="0" stroke="#94a3b8" stroke-width="0.12"/>
    <line x1="0" y1="${-bound}" x2="0" y2="${bound}" stroke="#94a3b8" stroke-width="0.12"/>
    
    <!-- Parallelogram ABCD -->
    <polygon points="2,1 8,5 4,7 -2,3" fill="#6366f1" fill-opacity="0.08" stroke="#6366f1" stroke-width="0.12"/>
    
    <!-- Diagonals -->
    <line x1="2" y1="1" x2="4" y2="7" stroke="#ef4444" stroke-width="0.1" stroke-dasharray="0.3,0.3"/>
    <line x1="8" y1="5" x2="-2" y2="3" stroke="#ef4444" stroke-width="0.1" stroke-dasharray="0.3,0.3"/>
    
    <!-- Points -->
    <circle cx="2" cy="1" r="0.2" fill="#4f46e5"/>
    <circle cx="8" cy="5" r="0.2" fill="#4f46e5"/>
    <circle cx="4" cy="7" r="0.2" fill="#4f46e5"/>
    <circle cx="-2" cy="3" r="0.2" fill="#4f46e5"/>
  </g>
  
  <!-- Labels -->
  <text x="2.2" y="-0.3" font-size="0.6" font-family="sans-serif" fill="#4f46e5">A(2, 1)</text>
  <text x="8.2" y="-5.2" font-size="0.6" font-family="sans-serif" fill="#4f46e5">B(8, 5)</text>
  <text x="3.7" y="-7.3" font-size="0.6" font-family="sans-serif" fill="#4f46e5">C(4, 7)</text>
  <text x="-3.5" y="-3.3" font-size="0.6" font-family="sans-serif" fill="#4f46e5">D(−2, 3)</text>
</svg>
</div>`;

  const steps = [
    {
      explanation: "To prove that the quadrilateral is a parallelogram, we can show that its opposite sides are parallel. This means they must have the same gradient. Let's find the gradient \\(m\\) of each side using \\(m = \\frac{y_2 - y_1}{x_2 - x_1}\\).",
      workingOut: "\\(A(2, 1), B(8, 5), C(4, 7), D(-2, 3)\\)",
      graphData: { html: svg }
    },
    {
      explanation: "Calculate the gradients of the opposite sides \\(AB\\) and \\(CD\\).",
      workingOut: [
        "\\(m_{AB} = \\frac{5 - 1}{8 - 2} = \\frac{4}{6} = \\frac{2}{3}\\)",
        "\\(m_{CD} = \\frac{3 - 7}{-2 - 4} = \\frac{-4}{-6} = \\frac{2}{3}\\)"
      ].join("\n"),
      graphData: null
    },
    {
      explanation: "Calculate the gradients of the other pair of opposite sides \\(BC\\) and \\(AD\\).",
      workingOut: [
        "\\(m_{BC} = \\frac{7 - 5}{4 - 8} = \\frac{2}{-4} = -\\frac{1}{2}\\)",
        "\\(m_{AD} = \\frac{3 - 1}{-2 - 2} = \\frac{2}{-4} = -\\frac{1}{2}\\)"
      ].join("\n"),
      graphData: null
    },
    {
      explanation: "Since \\(m_{AB} = m_{CD}\\) and \\(m_{BC} = m_{AD}\\), both pairs of opposite sides are parallel. Therefore, \\(ABCD\\) is a parallelogram.",
      workingOut: "\\(AB \\parallel CD\\) and \\(BC \\parallel AD\\) \\n \\(\\therefore ABCD\\) is a parallelogram. \\(\\blacksquare\\)",
      graphData: null
    },
    {
      explanation: "Next, we need to find the lengths of the diagonals \\(AC\\) and \\(BD\\). Use the distance formula: \\(d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}\\).",
      workingOut: "Diagonals connect opposite vertices: \\(A\\) to \\(C\\), and \\(B\\) to \\(D\\).",
      graphData: null
    },
    {
      explanation: "Calculate the length of the first diagonal \\(AC\\). \\(A = (2, 1)\\) and \\(C = (4, 7)\\).",
      workingOut: [
        "\\(AC = \\sqrt{(4 - 2)^2 + (7 - 1)^2}\\)",
        "\\(AC = \\sqrt{2^2 + 6^2}\\)",
        "\\(AC = \\sqrt{4 + 36} = \\sqrt{40}\\)",
        "\\(AC = \\sqrt{4 \\times 10} = 2\\sqrt{10}\\)"
      ].join("\n"),
      graphData: null
    },
    {
      explanation: "Calculate the length of the second diagonal \\(BD\\). \\(B = (8, 5)\\) and \\(D = (-2, 3)\\).",
      workingOut: [
        "\\(BD = \\sqrt{(-2 - 8)^2 + (3 - 5)^2}\\)",
        "\\(BD = \\sqrt{(-10)^2 + (-2)^2}\\)",
        "\\(BD = \\sqrt{100 + 4} = \\sqrt{104}\\)",
        "\\(BD = \\sqrt{4 \\times 26} = 2\\sqrt{26}\\)"
      ].join("\n"),
      graphData: null
    }
  ];

  await db.collection('questions').doc('y9-11i-q3').update({
    solutionSteps: steps,
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log("Updated step-by-step for y9-11i-q3");
  process.exit(0);
}

run().catch(console.error);
