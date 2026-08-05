const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // Isosceles trapezium ABCD. A(0,0), B(a,0), D(b,c), C(a-b, c)
  // For SVG: A(0,0), B(8,0), D(2,4), C(6,4)
  // viewBox: x in [-2, 10], y in [-2, 6] => SVG y in [-6, 2]
  // viewBox minx=-2, miny=-6, w=12, h=8

  const svg = `
<div style="display:flex;justify-content:center;align-items:center;margin:10px 0;">
<svg width="300" height="200" viewBox="-2 -6 12 8" xmlns="http://www.w3.org/2000/svg">
  <!-- Grid -->
  <g stroke="#e2e8f0" stroke-width="0.06">
    ${Array.from({length:13},(_,i)=>i-2).map(i=>`<line x1="${i}" y1="-6" x2="${i}" y2="2"/>`).join('')}
    ${Array.from({length:9},(_,i)=>i-6).map(i=>`<line x1="-2" y1="${i}" x2="10" y2="${i}"/>`).join('')}
  </g>

  <!-- Axes -->
  <line x1="-2" y1="0" x2="10" y2="0" stroke="#94a3b8" stroke-width="0.12"/>
  <line x1="0" y1="-6" x2="0" y2="2" stroke="#94a3b8" stroke-width="0.12"/>

  <!-- Trapezium ABCD: A(0,0), B(8,0), C(6,4), D(2,4) -->
  <polygon points="0,0 8,0 6,-4 2,-4" fill="#6366f1" fill-opacity="0.06" stroke="#6366f1" stroke-width="0.14"/>

  <!-- Diagonals AC and BD -->
  <line x1="0" y1="0" x2="6" y2="-4" stroke="#ef4444" stroke-width="0.1" stroke-dasharray="0.3,0.3"/>
  <line x1="8" y1="0" x2="2" y2="-4" stroke="#ef4444" stroke-width="0.1" stroke-dasharray="0.3,0.3"/>

  <!-- Vertices -->
  <circle cx="0" cy="0" r="0.2" fill="#4f46e5"/>
  <circle cx="8" cy="0" r="0.2" fill="#4f46e5"/>
  <circle cx="6" cy="-4" r="0.2" fill="#4f46e5"/>
  <circle cx="2" cy="-4" r="0.2" fill="#4f46e5"/>

  <!-- Labels -->
  <text x="-1.2" y="0.7" font-size="0.6" font-family="sans-serif" fill="#4f46e5" font-weight="bold">A(0, 0)</text>
  <text x="7.8" y="0.7" font-size="0.6" font-family="sans-serif" fill="#4f46e5" font-weight="bold">B(a, 0)</text>
  <text x="6.3" y="-4.2" font-size="0.6" font-family="sans-serif" fill="#4f46e5" font-weight="bold">C(a-b, c)</text>
  <text x="0.2" y="-4.2" font-size="0.6" font-family="sans-serif" fill="#4f46e5" font-weight="bold">D(b, c)</text>
</svg>
</div>`;

  const steps = [
    {
      explanation: "To prove this using coordinate geometry, we first need to set up the coordinates for an isosceles trapezium strategically. Place the longer base \\(AB\\) on the \\(x\\)-axis with \\(A\\) at the origin \\((0, 0)\\). Let the length of the base be \\(a\\), so \\(B = (a, 0)\\).",
      workingOut: "Base \\(AB\\) on \\(x\\)-axis: \\(A(0, 0)\\), \\(B(a, 0)\\).",
      graphData: { html: svg }
    },
    {
      explanation: "The top base \\(CD\\) must be parallel to \\(AB\\), so \\(C\\) and \\(D\\) must have the same \\(y\\)-coordinate, let's call it \\(c\\). In an isosceles trapezium, the non-parallel sides (\\(AD\\) and \\(BC\\)) are equal in length, meaning the top base is perfectly centered over the bottom base.",
      workingOut: "\\(C\\) and \\(D\\) have a \\(y\\)-coordinate of \\(c\\).",
      graphData: null
    },
    {
      explanation: "If we let \\(D = (b, c)\\), the horizontal distance from the left edge \\(A\\) is \\(b\\). Because it's symmetrical, \\(C\\) must be the same horizontal distance \\(b\\) from the right edge \\(B(a, 0)\\). Therefore, the \\(x\\)-coordinate of \\(C\\) is \\(a - b\\).",
      workingOut: "Vertices: \\(A(0, 0), B(a, 0), C(a-b, c), D(b, c)\\)",
      graphData: null
    },
    {
      explanation: "We are asked to prove that the diagonals are equal in length. The diagonals are \\(AC\\) and \\(BD\\). Let's use the distance formula: \\(d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}\\).",
      workingOut: "Calculate \\(AC\\) and \\(BD\\).",
      graphData: null
    },
    {
      explanation: "First, find the length of the diagonal \\(AC\\) using \\(A(0, 0)\\) and \\(C(a-b, c)\\).",
      workingOut: [
        "\\(AC = \\sqrt{( (a-b) - 0 )^2 + (c - 0)^2}\\)",
        "\\(AC = \\sqrt{(a-b)^2 + c^2}\\)"
      ].join("\n"),
      graphData: null
    },
    {
      explanation: "Next, find the length of the diagonal \\(BD\\) using \\(B(a, 0)\\) and \\(D(b, c)\\).",
      workingOut: [
        "\\(BD = \\sqrt{(b - a)^2 + (c - 0)^2}\\)",
        "\\(BD = \\sqrt{(b-a)^2 + c^2}\\)"
      ].join("\n"),
      graphData: null
    },
    {
      explanation: "Notice that \\((b-a)^2\\) is exactly the same as \\((a-b)^2\\), because squaring a number removes any negative sign (e.g., \\((-5)^2 = 5^2\\)).",
      workingOut: [
        "\\((b-a)^2 = (-(a-b))^2 = (a-b)^2\\)",
        "\\(\\therefore BD = \\sqrt{(a-b)^2 + c^2}\\)"
      ].join("\n"),
      graphData: null
    },
    {
      explanation: "Since both expressions are identical, we have proved that the two diagonals are equal in length.",
      workingOut: "\\(AC = BD \\quad \\blacksquare\\)",
      graphData: null
    }
  ];

  await db.collection('questions').doc('y9-11i-q9').update({
    solutionSteps: steps,
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log("Updated y9-11i-q9");
  process.exit(0);
}

run().catch(console.error);
