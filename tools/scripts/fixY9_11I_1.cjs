const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // ─── SVG: Number line / coordinate diagram showing A(-2,5), B(8,0) ───
  // We'll draw both points on a coordinate grid
  const bound = 11;
  let grid = '';
  for (let i = -bound; i <= bound; i++) {
    grid += `<line x1="${-bound}" y1="${i}" x2="${bound}" y2="${i}" stroke="#e2e8f0" stroke-width="0.05"/>`;
    grid += `<line x1="${i}" y1="${-bound}" x2="${i}" y2="${bound}" stroke="#e2e8f0" stroke-width="0.05"/>`;
  }

  // Points: A(-2,5), B(8,0)
  // For SVG, y is flipped (scale(1,-1))
  const svgMain = `
<div style="display:flex;justify-content:center;align-items:center;margin:10px 0;">
<svg width="320" height="320" viewBox="${-bound} ${-bound} ${bound*2} ${bound*2}" xmlns="http://www.w3.org/2000/svg">
  <g transform="scale(1,-1)">
    ${grid}
    <line x1="${-bound}" y1="0" x2="${bound}" y2="0" stroke="#94a3b8" stroke-width="0.12"/>
    <line x1="0" y1="${-bound}" x2="0" y2="${bound}" stroke="#94a3b8" stroke-width="0.12"/>
    <!-- Line AB -->
    <line x1="-2" y1="5" x2="8" y2="0" stroke="#6366f1" stroke-width="0.12"/>
    <!-- A(-2,5) -->
    <circle cx="-2" cy="5" r="0.22" fill="#6366f1"/>
    <!-- B(8,0) -->
    <circle cx="8" cy="0" r="0.22" fill="#6366f1"/>
  </g>
  <!-- Labels (no flip) -->
  <text x="-3.5" y="-5.5" font-size="0.75" font-family="sans-serif" fill="#4f46e5">A(−2, 5)</text>
  <text x="8.3" y="-0.2" font-size="0.75" font-family="sans-serif" fill="#4f46e5">B(8, 0)</text>
  <text x="-10" y="-9.5" font-size="0.75" fill="#94a3b8" font-family="sans-serif">Section Formula: P divides AB in ratio m:n</text>
</svg>
</div>`;

  // ─── Helper SVG with point P marked ───
  function svgWithP(px, py, pxDisplay, pyDisplay, label) {
    return `
<div style="display:flex;justify-content:center;align-items:center;margin:10px 0;">
<svg width="320" height="320" viewBox="${-bound} ${-bound} ${bound*2} ${bound*2}" xmlns="http://www.w3.org/2000/svg">
  <g transform="scale(1,-1)">
    ${grid}
    <line x1="${-bound}" y1="0" x2="${bound}" y2="0" stroke="#94a3b8" stroke-width="0.12"/>
    <line x1="0" y1="${-bound}" x2="0" y2="${bound}" stroke="#94a3b8" stroke-width="0.12"/>
    <line x1="-2" y1="5" x2="8" y2="0" stroke="#6366f1" stroke-width="0.12"/>
    <circle cx="-2" cy="5" r="0.22" fill="#6366f1"/>
    <circle cx="8" cy="0" r="0.22" fill="#6366f1"/>
    <circle cx="${px}" cy="${py}" r="0.25" fill="#ef4444"/>
  </g>
  <text x="-3.5" y="-5.5" font-size="0.75" font-family="sans-serif" fill="#4f46e5">A(−2, 5)</text>
  <text x="8.3" y="-0.2" font-size="0.75" font-family="sans-serif" fill="#4f46e5">B(8, 0)</text>
  <text x="${px + 0.4}" y="${-py - 0.3}" font-size="0.75" font-family="sans-serif" fill="#ef4444">P(${pxDisplay}, ${pyDisplay})</text>
</svg>
</div>`;
  }

  // ─── Sub-question (a): AP:PB = 1:1 (midpoint) ───
  // P = ((-2+8)/2, (5+0)/2) = (3, 2.5)
  const svgA = svgWithP(3, 2.5, '3', '2.5', '');
  const subQA = {
    id: "y9-11i-q1a",
    type: "multiple_choice",
    question: "a) \\(AP : PB = 1 : 1\\)",
    options: [
      { text: "\\(P = (1, 3)\\)", imageUrl: "" },
      { text: "\\(P = (2, 1)\\)", imageUrl: "" },
      { text: "\\(P = (3, 2.5)\\)", imageUrl: "" },
      { text: "\\(P = (5, 2.5)\\)", imageUrl: "" }
    ],
    answer: "\\(P = (3, 2.5)\\)",
    solutionSteps: [
      {
        explanation: "When the ratio is \\(1:1\\), point \\(P\\) is exactly halfway between \\(A\\) and \\(B\\) — this is simply the midpoint formula.",
        workingOut: "\\(P = \\left(\\frac{x_1 + x_2}{2},\\ \\frac{y_1 + y_2}{2}\\right)\\)",
        graphData: { html: svgMain }
      },
      {
        explanation: "Substitute \\(A(-2, 5)\\) and \\(B(8, 0)\\) into the midpoint formula.",
        workingOut: "\\(P = \\left(\\frac{-2 + 8}{2},\\ \\frac{5 + 0}{2}\\right)\\)"
      },
      {
        explanation: "Evaluate each fraction.",
        workingOut: "\\(P = \\left(\\frac{6}{2},\\ \\frac{5}{2}\\right) = (3,\\ 2.5)\\)",
        graphData: { html: svgA }
      }
    ],
    graphData: null
  };

  // ─── Sub-question (b): AP:PB = 2:1 (P closer to B, 2/3 from A) ───
  // x = -2 + (2/3)(8-(-2)) = -2 + (2/3)(10) = -2 + 20/3 = -6/3 + 20/3 = 14/3
  // y = 5 + (2/3)(0-5) = 5 - 10/3 = 15/3 - 10/3 = 5/3
  const pxB = 14/3; const pyB = 5/3;
  const svgB = svgWithP(pxB, pyB, '14/3', '5/3', '');
  const subQB = {
    id: "y9-11i-q1b",
    type: "multiple_choice",
    question: "b) \\(AP : PB = 2 : 1\\) (\\(P\\) is closer to \\(B\\))",
    options: [
      { text: "\\(P = \\left(\\dfrac{14}{3},\\ \\dfrac{5}{3}\\right)\\)", imageUrl: "" },
      { text: "\\(P = (4, 2)\\)", imageUrl: "" },
      { text: "\\(P = \\left(\\dfrac{2}{3},\\ \\dfrac{10}{3}\\right)\\)", imageUrl: "" },
      { text: "\\(P = (6, 1)\\)", imageUrl: "" }
    ],
    answer: "\\(P = \\left(\\dfrac{14}{3},\\ \\dfrac{5}{3}\\right)\\)",
    solutionSteps: [
      {
        explanation: "When \\(AP:PB = 2:1\\), point \\(P\\) divides \\(AB\\) in ratio \\(m:n = 2:1\\). Use the section formula:",
        workingOut: "\\(P = \\left(\\frac{mx_2 + nx_1}{m+n},\\ \\frac{my_2 + ny_1}{m+n}\\right)\\)",
        graphData: { html: svgMain }
      },
      {
        explanation: "Here \\(m = 2\\), \\(n = 1\\), \\(A(-2, 5)\\) and \\(B(8, 0)\\). Substitute into the formula.",
        workingOut: "\\(P = \\left(\\frac{2(8) + 1(-2)}{2+1},\\ \\frac{2(0) + 1(5)}{2+1}\\right)\\)"
      },
      {
        explanation: "Evaluate the numerators and denominators separately.",
        workingOut: "\\(P = \\left(\\frac{16 - 2}{3},\\ \\frac{0 + 5}{3}\\right) = \\left(\\frac{14}{3},\\ \\frac{5}{3}\\right)\\)",
        graphData: { html: svgB }
      }
    ],
    graphData: null
  };

  // ─── Sub-question (c): AP:PB = 2:3 (P closer to A, 2/5 from A) ───
  // x = -2 + (2/5)(10) = -2 + 4 = 2
  // y = 5 + (2/5)(-5) = 5 - 2 = 3
  const svgC = svgWithP(2, 3, '2', '3', '');
  const subQC = {
    id: "y9-11i-q1c",
    type: "multiple_choice",
    question: "c) \\(AP : PB = 2 : 3\\) (\\(P\\) is closer to \\(A\\))",
    options: [
      { text: "\\(P = (4, 1)\\)", imageUrl: "" },
      { text: "\\(P = (3, 2)\\)", imageUrl: "" },
      { text: "\\(P = (0, 4)\\)", imageUrl: "" },
      { text: "\\(P = (2, 3)\\)", imageUrl: "" }
    ],
    answer: "\\(P = (2, 3)\\)",
    solutionSteps: [
      {
        explanation: "When \\(AP:PB = 2:3\\), point \\(P\\) divides \\(AB\\) in ratio \\(m:n = 2:3\\). Use the section formula:",
        workingOut: "\\(P = \\left(\\frac{mx_2 + nx_1}{m+n},\\ \\frac{my_2 + ny_1}{m+n}\\right)\\)",
        graphData: { html: svgMain }
      },
      {
        explanation: "Here \\(m = 2\\), \\(n = 3\\), \\(A(-2, 5)\\) and \\(B(8, 0)\\). Substitute into the formula.",
        workingOut: "\\(P = \\left(\\frac{2(8) + 3(-2)}{2+3},\\ \\frac{2(0) + 3(5)}{2+3}\\right)\\)"
      },
      {
        explanation: "Evaluate the numerators and denominators.",
        workingOut: "\\(P = \\left(\\frac{16 - 6}{5},\\ \\frac{0 + 15}{5}\\right) = \\left(\\frac{10}{5},\\ \\frac{15}{5}\\right)\\)"
      },
      {
        explanation: "Simplify each fraction to get the final answer.",
        workingOut: "\\(P = (2,\\ 3)\\)",
        graphData: { html: svgC }
      }
    ],
    graphData: null
  };

  await db.collection('questions').doc('y9-11i-q1').update({
    type: "multiple_choice",
    subQuestions: [subQA, subQB, subQC],
    solution: "",
    solutionSteps: [],
    graphData: { html: svgMain },
    updatedAt: FieldValue.serverTimestamp()
  });
  console.log("Updated y9-11i-q1 with MCQ subQuestions and step-by-step");
  process.exit(0);
}

run().catch(console.error);
