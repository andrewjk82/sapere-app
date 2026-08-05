const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // SVG for the triangle A(0,0), B(8,0), C(4,6)
  // Midpoints: M(2,3) for AC, N(6,3) for BC
  // Bounding box: x in [-2, 10], y in [-2, 8]
  // SVG viewBox: -2 -8 12 10
  const svg = `
<div style="display:flex;justify-content:center;align-items:center;margin:10px 0;">
<svg width="280" height="240" viewBox="-2 -8 12 10" xmlns="http://www.w3.org/2000/svg">
  <!-- Grid -->
  <g stroke="#e2e8f0" stroke-width="0.06">
    ${Array.from({length:13},(_,i)=>i-2).map(i=>`<line x1="${i}" y1="-8" x2="${i}" y2="2"/>`).join('')}
    ${Array.from({length:11},(_,i)=>i-8).map(i=>`<line x1="-2" y1="${i}" x2="10" y2="${i}"/>`).join('')}
  </g>

  <!-- Axes -->
  <line x1="-2" y1="0" x2="10" y2="0" stroke="#94a3b8" stroke-width="0.12"/>
  <line x1="0" y1="-8" x2="0" y2="2" stroke="#94a3b8" stroke-width="0.12"/>

  <!-- Triangle ABC -->
  <polygon points="0,0 8,0 4,-6" fill="#6366f1" fill-opacity="0.06" stroke="#6366f1" stroke-width="0.14"/>

  <!-- Line MN -->
  <line x1="2" y1="-3" x2="6" y2="-3" stroke="#ef4444" stroke-width="0.12" stroke-dasharray="0.4,0.3"/>

  <!-- Vertices and midpoints -->
  <circle cx="0" cy="0" r="0.2" fill="#4f46e5"/>
  <circle cx="8" cy="0" r="0.2" fill="#4f46e5"/>
  <circle cx="4" cy="-6" r="0.2" fill="#4f46e5"/>
  <circle cx="2" cy="-3" r="0.18" fill="#ef4444"/>
  <circle cx="6" cy="-3" r="0.18" fill="#ef4444"/>

  <!-- Labels -->
  <text x="-1.2" y="0.8" font-size="0.6" font-family="sans-serif" fill="#4f46e5" font-weight="bold">A(0, 0)</text>
  <text x="8.2" y="0.8" font-size="0.6" font-family="sans-serif" fill="#4f46e5" font-weight="bold">B(c, 0)</text>
  <text x="4.2" y="-6.2" font-size="0.6" font-family="sans-serif" fill="#4f46e5" font-weight="bold">C(a, b)</text>
  <text x="0.2" y="-3.2" font-size="0.55" font-family="sans-serif" fill="#ef4444" font-weight="bold">M</text>
  <text x="6.3" y="-3.2" font-size="0.55" font-family="sans-serif" fill="#ef4444" font-weight="bold">N</text>
</svg>
</div>`;

  const steps = [
    {
      explanation: "Following the instructions, place the base of the triangle on the \\(x\\)-axis with one vertex at the origin. Let the vertices be \\(A(0, 0)\\), \\(B(c, 0)\\), and the third vertex be \\(C(a, b)\\).",
      workingOut: "Vertices: \\(A(0, 0)\\), \\(B(c, 0)\\), \\(C(a, b)\\)",
      graphData: { html: svg }
    },
    {
      explanation: "Let \\(M\\) be the midpoint of side \\(AC\\) and \\(N\\) be the midpoint of side \\(BC\\). Use the midpoint formula \\(P = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)\\).",
      workingOut: [
        "Midpoint of \\(AC\\): \\(M = \\left(\\frac{0 + a}{2}, \\frac{0 + b}{2}\\right) = \\left(\\frac{a}{2}, \\frac{b}{2}\\right)\\)",
        "Midpoint of \\(BC\\): \\(N = \\left(\\frac{c + a}{2}, \\frac{0 + b}{2}\\right) = \\left(\\frac{a + c}{2}, \\frac{b}{2}\\right)\\)"
      ].join("\n"),
      graphData: null
    },
    {
      explanation: "First, let's prove that the line \\(MN\\) is parallel to the third side \\(AB\\). To do this, we need to show they have the same gradient.",
      workingOut: "Calculate \\(m_{MN}\\) and \\(m_{AB}\\).",
      graphData: null
    },
    {
      explanation: "Calculate the gradient of \\(MN\\).",
      workingOut: [
        "\\(m_{MN} = \\frac{\\frac{b}{2} - \\frac{b}{2}}{\\frac{a+c}{2} - \\frac{a}{2}}\\)",
        "\\(m_{MN} = \\frac{0}{\\frac{c}{2}} = 0\\)"
      ].join("\n"),
      graphData: null
    },
    {
      explanation: "Calculate the gradient of \\(AB\\).",
      workingOut: [
        "\\(m_{AB} = \\frac{0 - 0}{c - 0} = 0\\)",
        "Since \\(m_{MN} = m_{AB} = 0\\), the lines are parallel (\\(MN \\parallel AB\\))."
      ].join("\n"),
      graphData: null
    },
    {
      explanation: "Next, let's prove that the length of \\(MN\\) is half the length of \\(AB\\). We use the distance formula (or simply recognize that since the \\(y\\)-coordinates are the same, the distance is just the difference in \\(x\\)-coordinates).",
      workingOut: "Calculate \\(MN\\) and \\(AB\\).",
      graphData: null
    },
    {
      explanation: "Calculate the length of \\(MN\\). Both \\(M\\) and \\(N\\) have a \\(y\\)-coordinate of \\(\\frac{b}{2}\\), so it's a horizontal line.",
      workingOut: [
        "\\(MN = \\frac{a + c}{2} - \\frac{a}{2}\\)",
        "\\(MN = \\frac{a + c - a}{2} = \\frac{c}{2}\\)"
      ].join("\n"),
      graphData: null
    },
    {
      explanation: "Calculate the length of \\(AB\\). This is also a horizontal line along the \\(x\\)-axis.",
      workingOut: [
        "\\(AB = c - 0 = c\\)"
      ].join("\n"),
      graphData: null
    },
    {
      explanation: "Conclusion: We have shown that the gradient of both lines is 0 (so they are parallel), and \\(MN = \\frac{c}{2}\\) which is exactly half of \\(AB = c\\). The proof is complete.",
      workingOut: "\\(MN \\parallel AB\\) and \\(MN = \\frac{1}{2}AB \\quad \\blacksquare\\)",
      graphData: null
    }
  ];

  await db.collection('questions').doc('y9-11i-q8').update({
    solutionSteps: steps,
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log("Updated y9-11i-q8");
  process.exit(0);
}

run().catch(console.error);
