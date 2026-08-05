const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const bound = 11;
  let grid = '';
  for (let i = -bound; i <= bound; i++) {
    grid += `<line x1="${-bound}" y1="${i}" x2="${bound}" y2="${i}" stroke="#e2e8f0" stroke-width="0.05"/>`;
    grid += `<line x1="${i}" y1="${-bound}" x2="${i}" y2="${bound}" stroke="#e2e8f0" stroke-width="0.05"/>`;
  }

  // SVG for A(4, -1), B(-2, 3), C(2, 6), and possible D's: (8,2), (0,-4), (-4,10)
  // Let's use viewBox to cover x from -6 to 10, y from -6 to 12
  const svg = `
<div style="display:flex;justify-content:center;align-items:center;margin:10px 0;">
<svg width="320" height="340" viewBox="-6 -6 16 18" xmlns="http://www.w3.org/2000/svg">
  <g transform="scale(1,-1)">
    ${grid}
    <line x1="${-bound}" y1="0" x2="${bound}" y2="0" stroke="#94a3b8" stroke-width="0.12"/>
    <line x1="0" y1="${-bound}" x2="0" y2="${bound}" stroke="#94a3b8" stroke-width="0.12"/>
    
    <!-- Original points triangle -->
    <polygon points="4,-1 -2,3 2,6" fill="none" stroke="#94a3b8" stroke-width="0.1" stroke-dasharray="0.3,0.3"/>
    
    <!-- Parallelogram 1 (Valid: AC diagonal, D1=(8,2)) -->
    <polygon points="4,-1 8,2 2,6 -2,3" fill="#6366f1" fill-opacity="0.08" stroke="#6366f1" stroke-width="0.12"/>
    
    <!-- Other possible D points (D2=(0,-4), D3=(-4,10)) -->
    <line x1="4" y1="-1" x2="0" y2="-4" stroke="#f87171" stroke-width="0.08" stroke-dasharray="0.2,0.2"/>
    <line x1="2" y1="6" x2="0" y2="-4" stroke="#f87171" stroke-width="0.08" stroke-dasharray="0.2,0.2"/>
    
    <line x1="-2" y1="3" x2="-4" y2="10" stroke="#f87171" stroke-width="0.08" stroke-dasharray="0.2,0.2"/>
    <line x1="2" y1="6" x2="-4" y2="10" stroke="#f87171" stroke-width="0.08" stroke-dasharray="0.2,0.2"/>
    
    <!-- Points -->
    <circle cx="4" cy="-1" r="0.2" fill="#4f46e5"/>
    <circle cx="-2" cy="3" r="0.2" fill="#4f46e5"/>
    <circle cx="2" cy="6" r="0.2" fill="#4f46e5"/>
    
    <!-- Valid D1 -->
    <circle cx="8" cy="2" r="0.25" fill="#10b981"/>
    
    <!-- Invalid D2, D3 -->
    <circle cx="0" cy="-4" r="0.15" fill="#f87171"/>
    <circle cx="-4" cy="10" r="0.15" fill="#f87171"/>
  </g>
  
  <!-- Labels -->
  <text x="4.3" y="1.4" font-size="0.6" font-family="sans-serif" fill="#4f46e5">A(4, −1)</text>
  <text x="-3.8" y="-3.3" font-size="0.6" font-family="sans-serif" fill="#4f46e5">B(−2, 3)</text>
  <text x="2.3" y="-6.3" font-size="0.6" font-family="sans-serif" fill="#4f46e5">C(2, 6)</text>
  
  <!-- Correct D1 -->
  <text x="8.3" y="-2.3" font-size="0.65" font-family="sans-serif" fill="#10b981" font-weight="bold">D(8, 2)</text>
  
  <!-- Invalid ones -->
  <text x="-1.7" y="4.5" font-size="0.5" font-family="sans-serif" fill="#ef4444">D₂(0, −4)</text>
  <text x="-3.5" y="-10.3" font-size="0.5" font-family="sans-serif" fill="#ef4444">D₃(−4, 10)</text>
</svg>
</div>`;

  const steps = [
    {
      explanation: "Let the three given vertices be \\(A(4, -1)\\), \\(B(-2, 3)\\), and \\(C(2, 6)\\), and let the unknown fourth vertex be \\(D(x, y)\\). Since the order of the vertices is not specified, there are 3 possible parallelograms depending on which two vertices form a diagonal. We can find \\(D\\) using the property that the diagonals of a parallelogram bisect each other (their midpoints are the same).",
      workingOut: "Midpoint of diagonal 1 = Midpoint of diagonal 2",
      graphData: { html: svg }
    },
    {
      explanation: "Case 1: Assume \\(AC\\) and \\(BD\\) are the diagonals. The midpoint of \\(AC\\) must equal the midpoint of \\(BD\\).",
      workingOut: [
        "\\(\\text{Midpoint of } AC = \\left(\\frac{4 + 2}{2},\\ \\frac{-1 + 6}{2}\\right) = \\left(3,\\ 2.5\\right)\\)",
        "\\(\\text{Midpoint of } BD = \\left(\\frac{-2 + x}{2},\\ \\frac{3 + y}{2}\\right)\\)",
        "\\(\\left(\\frac{-2 + x}{2},\\ \\frac{3 + y}{2}\\right) = \\left(3,\\ 2.5\\right)\\)"
      ].join("\n"),
      graphData: null
    },
    {
      explanation: "Solve for \\(x\\) and \\(y\\) in Case 1.",
      workingOut: [
        "\\frac{-2 + x}{2} = 3 \\implies -2 + x = 6 \\implies x = 8",
        "\\frac{3 + y}{2} = 2.5 \\implies 3 + y = 5 \\implies y = 2",
        "\\therefore D_1 = (8, 2)"
      ].join("\n"),
      graphData: null
    },
    {
      explanation: "Case 2: Assume \\(AB\\) and \\(CD\\) are the diagonals. Set their midpoints equal.",
      workingOut: [
        "\\(\\text{Midpoint of } AB = \\left(\\frac{4 - 2}{2},\\ \\frac{-1 + 3}{2}\\right) = \\left(1,\\ 1\\right)\\)",
        "\\(\\text{Midpoint of } CD = \\left(\\frac{2 + x}{2},\\ \\frac{6 + y}{2}\\right)\\)",
        "\\frac{2 + x}{2} = 1 \\implies 2 + x = 2 \\implies x = 0",
        "\\frac{6 + y}{2} = 1 \\implies 6 + y = 2 \\implies y = -4",
        "\\therefore D_2 = (0, -4)"
      ].join("\n"),
      graphData: null
    },
    {
      explanation: "Case 3: Assume \\(BC\\) and \\(AD\\) are the diagonals. Set their midpoints equal.",
      workingOut: [
        "\\(\\text{Midpoint of } BC = \\left(\\frac{-2 + 2}{2},\\ \\frac{3 + 6}{2}\\right) = \\left(0,\\ 4.5\\right)\\)",
        "\\(\\text{Midpoint of } AD = \\left(\\frac{4 + x}{2},\\ \\frac{-1 + y}{2}\\right)\\)",
        "\\frac{4 + x}{2} = 0 \\implies 4 + x = 0 \\implies x = -4",
        "\\frac{-1 + y}{2} = 4.5 \\implies -1 + y = 9 \\implies y = 10",
        "\\therefore D_3 = (-4, 10)"
      ].join("\n"),
      graphData: null
    },
    {
      explanation: "The question specifies that the fourth vertex lies strictly in the first quadrant. This means both its \\(x\\) and \\(y\\) coordinates must be positive (\\(x > 0, y > 0\\)). Let's check our three candidates:",
      workingOut: [
        "\\(D_1(8, 2)\\): \\(x > 0\\) and \\(y > 0\\) (First quadrant) \\(\\checkmark\\)",
        "\\(D_2(0, -4)\\): \\(x = 0, y < 0\\) (On the y-axis, not in first quadrant) \\(\\times\\)",
        "\\(D_3(-4, 10)\\): \\(x < 0, y > 0\\) (Second quadrant) \\(\\times\\)"
      ].join("\n"),
      graphData: null
    },
    {
      explanation: "Therefore, \\(D_1(8, 2)\\) is the only valid vertex.",
      workingOut: "\\(D = (8, 2)\\)",
      graphData: null
    }
  ];

  await db.collection('questions').doc('y9-11i-q4').update({
    solutionSteps: steps,
    graphData: null,
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log("Updated step-by-step for y9-11i-q4");
  process.exit(0);
}

run().catch(console.error);
