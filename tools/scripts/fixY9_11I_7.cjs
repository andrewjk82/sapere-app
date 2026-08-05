const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // Apollonius' theorem: AB² + AC² = 2AO² + 2OC²
  // Generic triangle: B(-c, 0), C(c, 0), A(a, b), O(0,0) midpoint of BC

  const svg = `
<div style="display:flex;justify-content:center;align-items:center;margin:10px 0;">
<svg width="300" height="240" viewBox="-8 -8 16 10" xmlns="http://www.w3.org/2000/svg">
  <!-- Grid -->
  <g stroke="#e2e8f0" stroke-width="0.06">
    ${Array.from({length:17},(_,i)=>i-8).map(i=>`<line x1="${i}" y1="-8" x2="${i}" y2="2"/>`).join('')}
    ${Array.from({length:11},(_,i)=>i-8).map(i=>`<line x1="-8" y1="${i}" x2="8" y2="${i}"/>`).join('')}
  </g>

  <!-- Axes -->
  <line x1="-8" y1="0" x2="8" y2="0" stroke="#94a3b8" stroke-width="0.12"/>
  <line x1="0" y1="-8" x2="0" y2="2" stroke="#94a3b8" stroke-width="0.12"/>

  <!-- Triangle B(-5,0), C(5,0), A(2,-6) -->
  <polygon points="-5,0 5,0 2,-6" fill="#6366f1" fill-opacity="0.06" stroke="#6366f1" stroke-width="0.14"/>

  <!-- Median AO: from A(2,-6) to O(0,0) -->
  <line x1="2" y1="-6" x2="0" y2="0" stroke="#ef4444" stroke-width="0.12" stroke-dasharray="0.4,0.3"/>

  <!-- Right angle at O indicator (y-axis is perpendicular to BC) -->
  <polyline points="-0.4,0 -0.4,-0.4 0,-0.4" fill="none" stroke="#f59e0b" stroke-width="0.1"/>

  <!-- Vertices -->
  <circle cx="-5" cy="0"  r="0.22" fill="#4f46e5"/>
  <circle cx="5"  cy="0"  r="0.22" fill="#4f46e5"/>
  <circle cx="2"  cy="-6" r="0.22" fill="#4f46e5"/>
  <circle cx="0"  cy="0"  r="0.22" fill="#10b981"/>

  <!-- Labels -->
  <text x="-5.8" y="0.8" font-size="0.7" font-family="sans-serif" fill="#4f46e5" font-weight="bold">B(−c, 0)</text>
  <text x="5.2"  y="0.8" font-size="0.7" font-family="sans-serif" fill="#4f46e5" font-weight="bold">C(c, 0)</text>
  <text x="2.3"  y="-6.2" font-size="0.7" font-family="sans-serif" fill="#4f46e5" font-weight="bold">A(a, b)</text>
  <text x="0.3"  y="-0.4" font-size="0.7" font-family="sans-serif" fill="#10b981" font-weight="bold">O(0, 0)</text>

  <!-- Side labels -->
  <text x="-2.0" y="-3.3" font-size="0.58" font-family="sans-serif" fill="#6366f1">AB</text>
  <text x="3.7"  y="-3.3" font-size="0.58" font-family="sans-serif" fill="#6366f1">AC</text>
  <text x="1.2"  y="-3.0" font-size="0.58" font-family="sans-serif" fill="#ef4444">AO</text>
  <text x="2.7"  y="0.8"  font-size="0.58" font-family="sans-serif" fill="#10b981">OC</text>
</svg>
</div>`;

  const steps = [
    {
      explanation: "Set up coordinates strategically. Place the x-axis along \\(BC\\) and the y-axis through the midpoint \\(O\\) of \\(BC\\), perpendicular to \\(BC\\). This means \\(O\\) is at the origin. Since \\(O\\) is the midpoint of \\(BC\\), we can let \\(B = (-c, 0)\\) and \\(C = (c, 0)\\) for some value \\(c > 0\\). Let \\(A = (a, b)\\) be any point.",
      workingOut: "\\(B = (-c,\\ 0), \\quad C = (c,\\ 0), \\quad O = (0,\\ 0), \\quad A = (a,\\ b)\\)",
      graphData: { html: svg }
    },
    {
      explanation: "Calculate the **Left Hand Side (LHS)**: \\(AB^2 + AC^2\\). Use the distance formula \\(d^2 = (x_2-x_1)^2 + (y_2-y_1)^2\\).",
      workingOut: [
        "\\(AB^2 = (a - (-c))^2 + (b - 0)^2 = (a+c)^2 + b^2\\)",
        "\\(AC^2 = (a - c)^2 + (b - 0)^2 = (a-c)^2 + b^2\\)"
      ].join("\n"),
      graphData: null
    },
    {
      explanation: "Add them together, expanding each perfect square using \\((a \\pm c)^2 = a^2 \\pm 2ac + c^2\\).",
      workingOut: [
        "\\(AB^2 + AC^2 = (a^2 + 2ac + c^2 + b^2) + (a^2 - 2ac + c^2 + b^2)\\)",
        "\\(= 2a^2 + 2b^2 + 2c^2\\)"
      ].join("\n"),
      graphData: null
    },
    {
      explanation: "Calculate the **Right Hand Side (RHS)**: \\(2AO^2 + 2OC^2\\). Find \\(AO^2\\) and \\(OC^2\\) using the distance formula.",
      workingOut: [
        "\\(AO^2 = (a - 0)^2 + (b - 0)^2 = a^2 + b^2\\)",
        "\\(OC^2 = (c - 0)^2 + (0 - 0)^2 = c^2\\)"
      ].join("\n"),
      graphData: null
    },
    {
      explanation: "Substitute into the RHS expression.",
      workingOut: [
        "\\(2AO^2 + 2OC^2 = 2(a^2 + b^2) + 2c^2\\)",
        "\\(= 2a^2 + 2b^2 + 2c^2\\)"
      ].join("\n"),
      graphData: null
    },
    {
      explanation: "Since LHS = RHS, the theorem is proved.",
      workingOut: [
        "\\(\\text{LHS} = 2a^2 + 2b^2 + 2c^2 = \\text{RHS}\\)",
        "\\(\\therefore\\ AB^2 + AC^2 = 2AO^2 + 2OC^2 \\quad \\blacksquare\\)"
      ].join("\n"),
      graphData: null
    }
  ];

  await db.collection('questions').doc('y9-11i-q7').update({
    solutionSteps: steps,
    graphData: null,
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log("Updated y9-11i-q7");
  process.exit(0);
}

run().catch(console.error);
