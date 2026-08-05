const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // SVG for the triangle A(2, -2), B(-2, 2), C(-2√3, -2√3) ~ C(-3.46, -3.46)
  const bound = 5;
  let grid = '';
  for (let i = -bound; i <= bound; i++) {
    grid += `<line x1="${-bound}" y1="${i}" x2="${bound}" y2="${i}" stroke="#e2e8f0" stroke-width="0.05"/>`;
    grid += `<line x1="${i}" y1="${-bound}" x2="${i}" y2="${bound}" stroke="#e2e8f0" stroke-width="0.05"/>`;
  }

  const cx = -2 * Math.sqrt(3);
  const cy = -2 * Math.sqrt(3);

  const svg = `
<div style="display:flex;justify-content:center;align-items:center;margin:10px 0;">
<svg width="240" height="240" viewBox="${-bound} -5 10 10" xmlns="http://www.w3.org/2000/svg">
  <g transform="scale(1,-1)">
    ${grid}
    <line x1="${-bound}" y1="0" x2="${bound}" y2="0" stroke="#94a3b8" stroke-width="0.12"/>
    <line x1="0" y1="-5" x2="0" y2="5" stroke="#94a3b8" stroke-width="0.12"/>
    
    <!-- Triangle -->
    <polygon points="2,-2 -2,2 ${cx},${cy}" fill="#6366f1" fill-opacity="0.08" stroke="#6366f1" stroke-width="0.12"/>
    
    <!-- Points -->
    <circle cx="2" cy="-2" r="0.2" fill="#4f46e5"/>
    <circle cx="-2" cy="2" r="0.2" fill="#4f46e5"/>
    <circle cx="${cx}" cy="${cy}" r="0.2" fill="#4f46e5"/>
  </g>
  
  <!-- Labels -->
  <text x="2.3" y="2" font-size="0.6" font-family="sans-serif" fill="#4f46e5">A(2, −2)</text>
  <text x="-1.7" y="-2" font-size="0.6" font-family="sans-serif" fill="#4f46e5">B(−2, 2)</text>
  <!-- cx is approx -3.46, so x=-4.2, math cy is -3.46, so svg y is 3.46 -> 4.2 -->
  <text x="-4.8" y="4.2" font-size="0.6" font-family="sans-serif" fill="#4f46e5">C(−2√3, −2√3)</text>
</svg>
</div>`;

  const steps = [
    {
      explanation: "To prove that the points form an equilateral triangle, we need to show that all three sides are equal in length. Let the points be \\(A(2, -2)\\), \\(B(-2, 2)\\), and \\(C(-2\\sqrt{3}, -2\\sqrt{3})\\). We will use the distance formula: \\(d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}\\).",
      workingOut: "Points: \\(A(2, -2)\\), \\(B(-2, 2)\\), \\(C(-2\\sqrt{3}, -2\\sqrt{3})\\)",
      graphData: { html: svg }
    },
    {
      explanation: "First, find the length of side \\(AB\\). It is easier to calculate the squared length \\(AB^2\\) to avoid writing the square root symbol repeatedly.",
      workingOut: [
        "\\(AB^2 = (-2 - 2)^2 + (2 - (-2))^2\\)",
        "\\(AB^2 = (-4)^2 + (4)^2\\)",
        "\\(AB^2 = 16 + 16 = 32\\)",
        "\\(AB = \\sqrt{32} = 4\\sqrt{2}\\)"
      ].join("\n"),
      graphData: null
    },
    {
      explanation: "Next, find the length of side \\(BC\\).",
      workingOut: [
        "\\(BC^2 = (-2\\sqrt{3} - (-2))^2 + (-2\\sqrt{3} - 2)^2\\)",
        "\\(BC^2 = (2 - 2\\sqrt{3})^2 + (-2 - 2\\sqrt{3})^2\\)"
      ].join("\n"),
      graphData: null
    },
    {
      explanation: "Expand the perfect squares carefully using \\((a \\pm b)^2 = a^2 \\pm 2ab + b^2\\).",
      workingOut: [
        "\\(BC^2 = [2^2 - 2(2)(2\\sqrt{3}) + (2\\sqrt{3})^2] + [(-2)^2 + 2(-2)(-2\\sqrt{3}) + (-2\\sqrt{3})^2]\\)",
        "\\(BC^2 = [4 - 8\\sqrt{3} + 12] + [4 + 8\\sqrt{3} + 12]\\)"
      ].join("\n"),
      graphData: null
    },
    {
      explanation: "Combine like terms. The \\(8\\sqrt{3}\\) and \\(-8\\sqrt{3}\\) cancel each other out.",
      workingOut: [
        "\\(BC^2 = 16 - 8\\sqrt{3} + 16 + 8\\sqrt{3}\\)",
        "\\(BC^2 = 32\\)",
        "\\(BC = \\sqrt{32} = 4\\sqrt{2}\\)"
      ].join("\n"),
      graphData: null
    },
    {
      explanation: "Finally, find the length of side \\(AC\\).",
      workingOut: [
        "\\(AC^2 = (-2\\sqrt{3} - 2)^2 + (-2\\sqrt{3} - (-2))^2\\)",
        "\\(AC^2 = (-2 - 2\\sqrt{3})^2 + (2 - 2\\sqrt{3})^2\\)"
      ].join("\n"),
      graphData: null
    },
    {
      explanation: "Notice that these are the exact same squared expressions we expanded for \\(BC^2\\) (just in reverse order).",
      workingOut: [
        "\\(AC^2 = [4 + 8\\sqrt{3} + 12] + [4 - 8\\sqrt{3} + 12]\\)",
        "\\(AC^2 = 16 + 8\\sqrt{3} + 16 - 8\\sqrt{3}\\)",
        "\\(AC^2 = 32\\)",
        "\\(AC = \\sqrt{32} = 4\\sqrt{2}\\)"
      ].join("\n"),
      graphData: null
    },
    {
      explanation: "Since all three sides have the exact same length, the triangle is equilateral.",
      workingOut: "\\(AB = BC = AC = 4\\sqrt{2}\\) \\n \\(\\therefore\\ \\Delta ABC \\text{ is an equilateral triangle. } \\blacksquare\\)",
      graphData: null
    }
  ];

  await db.collection('questions').doc('y9-11i-q2').update({
    solutionSteps: steps,
    graphData: null, // Clear graph from question body just in case
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log("Updated step-by-step for y9-11i-q2");
  process.exit(0);
}

run().catch(console.error);
