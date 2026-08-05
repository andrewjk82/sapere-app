const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // SVG for the circle + inscribed square
  const bound = 9, r = 6;
  let grid = '';
  for (let i = -bound; i <= bound; i++) {
    grid += `<line x1="${-bound}" y1="${i}" x2="${bound}" y2="${i}" stroke="#e2e8f0" stroke-width="0.05"/>`;
    grid += `<line x1="${i}" y1="${-bound}" x2="${i}" y2="${bound}" stroke="#e2e8f0" stroke-width="0.05"/>`;
  }
  const svgQ9 = `
<div style="display:flex;justify-content:center;align-items:center;margin:10px 0;">
<svg width="300" height="300" viewBox="${-bound} ${-bound} ${bound*2} ${bound*2}" xmlns="http://www.w3.org/2000/svg">
  <g transform="scale(1,-1)">
    ${grid}
    <line x1="${-bound}" y1="0" x2="${bound}" y2="0" stroke="#94a3b8" stroke-width="0.12"/>
    <line x1="0" y1="${-bound}" x2="0" y2="${bound}" stroke="#94a3b8" stroke-width="0.12"/>
    <circle cx="0" cy="0" r="${r}" fill="none" stroke="#6366f1" stroke-width="0.1"/>
    <polygon points="0,6 6,0 0,-6 -6,0" fill="#6366f1" fill-opacity="0.08" stroke="#6366f1" stroke-width="0.12"/>
    <circle cx="0" cy="-6" r="0.2" fill="#ef4444"/>
    <circle cx="6" cy="0" r="0.2" fill="#ef4444"/>
    <circle cx="0" cy="6" r="0.2" fill="#ef4444"/>
    <circle cx="-6" cy="0" r="0.2" fill="#ef4444"/>
  </g>
  <text x="0.4" y="-6.4" font-size="0.65" font-family="sans-serif" fill="#ef4444">A(0, 6)</text>
  <text x="6.2" y="-0.2" font-size="0.65" font-family="sans-serif" fill="#ef4444">B(6, 0)</text>
  <text x="0.4" y="7.2" font-size="0.65" font-family="sans-serif" fill="#ef4444">C(0, −6)</text>
  <text x="-8.8" y="-0.2" font-size="0.65" font-family="sans-serif" fill="#ef4444">D(−6, 0)</text>
  <text x="-8.8" y="-7.5" font-size="0.8" fill="#4f46e5" font-family="sans-serif">x²+y²=36</text>
</svg>
</div>`;

  // ─── Sub-question (a): Find AB ───
  // A(0,6) → B(6,0): AB = √(6²+6²) = √72 = 6√2
  // Options shuffled so correct answer (6√2) is at index 1 → answer B
  const subQA = {
    id: "y9-11h-q9a",
    type: "multiple_choice",
    question: "a) Find the distance \\(AB\\), where \\(A(0, 6)\\) and \\(B(6, 0)\\).",
    options: [
      { text: "\\(6\\)", imageUrl: "" },
      { text: "\\(6\\sqrt{2}\\)", imageUrl: "" },
      { text: "\\(\\sqrt{2}\\)", imageUrl: "" },
      { text: "\\(12\\)", imageUrl: "" }
    ],
    answer: "\\(6\\sqrt{2}\\)",
    solutionSteps: [
      {
        explanation: "Use the distance formula between two points \\((x_1, y_1)\\) and \\((x_2, y_2)\\):",
        workingOut: "\\(d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}\\)"
      },
      {
        explanation: "Substitute \\(A(0, 6)\\) and \\(B(6, 0)\\) into the formula.",
        workingOut: "\\(AB = \\sqrt{(6 - 0)^2 + (0 - 6)^2}\\)"
      },
      {
        explanation: "Compute each term inside the square root. Note that \\((-6)^2 = 36\\).",
        workingOut: "\\(AB = \\sqrt{36 + 36} = \\sqrt{72}\\)"
      },
      {
        explanation: "Simplify the surd: \\(72 = 36 \\times 2\\), so \\(\\sqrt{72} = \\sqrt{36 \\times 2} = \\sqrt{36} \\times \\sqrt{2} = 6\\sqrt{2}\\).",
        workingOut: "\\(AB = 6\\sqrt{2}\\)"
      }
    ],
    graphData: null
  };

  // ─── Sub-question (b): Find area of square ABCD ───
  // side = 6√2, area = (6√2)² = 72
  // Options shuffled so correct answer (72) is at index 2 → answer C
  const subQB = {
    id: "y9-11h-q9b",
    type: "multiple_choice",
    question: "b) Find the area of the square \\(ABCD\\).",
    options: [
      { text: "\\(36\\)", imageUrl: "" },
      { text: "\\(6\\sqrt{2}\\)", imageUrl: "" },
      { text: "\\(72\\)", imageUrl: "" },
      { text: "\\(144\\)", imageUrl: "" }
    ],
    answer: "\\(72\\)",
    solutionSteps: [
      {
        explanation: "The area of a square is the side length squared. From part (a), the side length is \\(AB = 6\\sqrt{2}\\).",
        workingOut: "\\(\\text{Area} = AB^2 = (6\\sqrt{2})^2\\)"
      },
      {
        explanation: "Expand the square. Use the rule \\((a\\sqrt{b})^2 = a^2 \\times b\\).",
        workingOut: "\\((6\\sqrt{2})^2 = 6^2 \\times (\\sqrt{2})^2 = 36 \\times 2\\)"
      },
      {
        explanation: "Multiply to get the final answer.",
        workingOut: "\\(\\text{Area} = 72 \\text{ square units}\\)"
      }
    ],
    graphData: null
  };

  await db.collection('questions').doc('y9-11h-q9').update({
    type: "multiple_choice",
    subQuestions: [subQA, subQB],
    solution: "",
    solutionSteps: [],
    graphData: { html: svgQ9 },
    updatedAt: FieldValue.serverTimestamp()
  });
  console.log("Updated y9-11h-q9 with MCQ subQuestions");

  process.exit(0);
}

run().catch(console.error);
