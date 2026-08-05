const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // ─── SVG: semicircle with O at origin, A(-R,0), B(R,0), P(x,y) ───
  // Use concrete R=5, P at roughly (3,4) for illustration
  const R = 5;
  const px = 3, py = 4; // on circle since 9+16=25=R²
  const bound = 8;

  let grid = '';
  for (let i = -bound; i <= bound; i++) {
    grid += `<line x1="${-bound}" y1="${i}" x2="${bound}" y2="${i}" stroke="#e2e8f0" stroke-width="0.05"/>`;
    grid += `<line x1="${i}" y1="${-bound}" x2="${i}" y2="${bound}" stroke="#e2e8f0" stroke-width="0.05"/>`;
  }

  const svg = `
<div style="display:flex;justify-content:center;align-items:center;margin:10px 0;">
<svg width="320" height="200" viewBox="${-bound} -${bound*0.6} ${bound*2} ${bound}" xmlns="http://www.w3.org/2000/svg">
  <g transform="scale(1,-1) translate(0, ${bound*0.6})">
    ${grid}
    <!-- x-axis -->
    <line x1="${-bound}" y1="0" x2="${bound}" y2="0" stroke="#94a3b8" stroke-width="0.12"/>
    <!-- semicircle (upper half) -->
    <path d="M ${-R} 0 A ${R} ${R} 0 0 1 ${R} 0" fill="#6366f1" fill-opacity="0.06" stroke="#6366f1" stroke-width="0.1"/>
    <!-- lines PA and PB -->
    <line x1="${px}" y1="${py}" x2="${-R}" y2="0" stroke="#ef4444" stroke-width="0.1"/>
    <line x1="${px}" y1="${py}" x2="${R}" y2="0" stroke="#10b981" stroke-width="0.1"/>
    <!-- right angle marker at P -->
    <polyline points="${px-0.4},${py-0.2} ${px-0.2},${py+0.2} ${px+0.2},${py}" fill="none" stroke="#f59e0b" stroke-width="0.1"/>
    <!-- Points -->
    <circle cx="${-R}" cy="0" r="0.2" fill="#4f46e5"/>
    <circle cx="${R}" cy="0" r="0.2" fill="#4f46e5"/>
    <circle cx="${px}" cy="${py}" r="0.2" fill="#ef4444"/>
    <circle cx="0" cy="0" r="0.15" fill="#94a3b8"/>
  </g>
  <!-- Labels (no flip) -->
  <text x="${-R-1.5}" y="${bound*0.6+0.5}" font-size="0.75" font-family="sans-serif" fill="#4f46e5">A(−R, 0)</text>
  <text x="${R+0.3}" y="${bound*0.6+0.5}" font-size="0.75" font-family="sans-serif" fill="#4f46e5">B(R, 0)</text>
  <text x="${px+0.3}" y="${-py + bound*0.6 - 0.3}" font-size="0.75" font-family="sans-serif" fill="#ef4444">P(x, y)</text>
  <text x="-0.5" y="${bound*0.6+0.5}" font-size="0.75" font-family="sans-serif" fill="#94a3b8">O</text>
</svg>
</div>`;

  // ─── Sub-question (a): Show x² + y² = R² ───
  // Options shuffled — correct at index C (index 2)
  const subQA = {
    id: "y9-11i-q11a",
    type: "multiple_choice",
    question: "a) Show that \\(x^2 + y^2 = R^2\\). Which of the following correctly proves this?",
    options: [
      { text: "\\(OP = x + y = R\\)", imageUrl: "" },
      { text: "\\(OP^2 = x^2 - y^2 = R^2\\)", imageUrl: "" },
      { text: "\\(OP = \\sqrt{x^2 + y^2} = R \\implies x^2 + y^2 = R^2\\)", imageUrl: "" },
      { text: "\\(OP = 2x + 2y = 2R\\)", imageUrl: "" }
    ],
    answer: "\\(OP = \\sqrt{x^2 + y^2} = R \\implies x^2 + y^2 = R^2\\)",
    solutionSteps: [
      {
        explanation: "Point \\(P(x, y)\\) lies on the semicircle with centre \\(O(0, 0)\\) and radius \\(R\\). By definition, every point on a circle is exactly \\(R\\) units from the centre.",
        workingOut: "\\(OP = R\\)",
        graphData: { html: svg }
      },
      {
        explanation: "Use the distance formula to write \\(OP\\) in terms of coordinates.",
        workingOut: "\\(OP = \\sqrt{(x-0)^2 + (y-0)^2} = \\sqrt{x^2 + y^2}\\)"
      },
      {
        explanation: "Set \\(OP = R\\) and square both sides to remove the square root.",
        workingOut: "\\(\\sqrt{x^2 + y^2} = R \\implies x^2 + y^2 = R^2 \\quad \\blacksquare\\)"
      }
    ],
    graphData: null
  };

  // ─── Sub-question (b): Show PA ⊥ PB ───
  // m_PA × m_PB = -1
  // Correct at index D (index 3)
  const subQB = {
    id: "y9-11i-q11b",
    type: "multiple_choice",
    question: "b) Show that \\(PA\\) is perpendicular to \\(PB\\). Which step correctly uses the gradient product?",
    options: [
      { text: "\\(m_{PA} + m_{PB} = 0\\)", imageUrl: "" },
      { text: "\\(m_{PA} \\times m_{PB} = 1\\)", imageUrl: "" },
      { text: "\\(m_{PA} = m_{PB}\\)", imageUrl: "" },
      { text: "\\(m_{PA} \\times m_{PB} = \\dfrac{y^2}{x^2 - R^2} = -1\\)", imageUrl: "" }
    ],
    answer: "\\(m_{PA} \\times m_{PB} = \\dfrac{y^2}{x^2 - R^2} = -1\\)",
    solutionSteps: [
      {
        explanation: "Two lines are perpendicular if and only if the product of their gradients is \\(-1\\). Find the gradient of \\(PA\\), where \\(P(x, y)\\) and \\(A(-R, 0)\\).",
        workingOut: "\\(m_{PA} = \\frac{y - 0}{x - (-R)} = \\frac{y}{x + R}\\)",
        graphData: { html: svg }
      },
      {
        explanation: "Find the gradient of \\(PB\\), where \\(P(x, y)\\) and \\(B(R, 0)\\).",
        workingOut: "\\(m_{PB} = \\frac{y - 0}{x - R} = \\frac{y}{x - R}\\)"
      },
      {
        explanation: "Multiply the two gradients together.",
        workingOut: "\\(m_{PA} \\times m_{PB} = \\frac{y}{x+R} \\times \\frac{y}{x-R} = \\frac{y^2}{x^2 - R^2}\\)"
      },
      {
        explanation: "From part (a) we know \\(x^2 + y^2 = R^2\\), so \\(y^2 = R^2 - x^2\\). Substitute this into the product.",
        workingOut: "\\(= \\frac{R^2 - x^2}{x^2 - R^2} = \\frac{-(x^2 - R^2)}{x^2 - R^2} = -1 \\quad \\blacksquare\\)"
      },
      {
        explanation: "Since \\(m_{PA} \\times m_{PB} = -1\\), the lines \\(PA\\) and \\(PB\\) are perpendicular. This proves the angle in a semicircle is \\(90°\\).",
        workingOut: "\\(\\therefore\\ \\angle APB = 90^\\circ\\)"
      }
    ],
    graphData: null
  };

  // ─── Sub-question (c): Show PA² + PB² = 4R² ───
  // Correct at index B (index 1)
  const subQC = {
    id: "y9-11i-q11c",
    type: "multiple_choice",
    question: "c) Show that \\(PA^2 + PB^2 = 4R^2\\). Which is the correct simplified result?",
    options: [
      { text: "\\(PA^2 + PB^2 = 2R^2\\)", imageUrl: "" },
      { text: "\\(PA^2 + PB^2 = 2x^2 + 2y^2 + 2R^2 = 4R^2\\)", imageUrl: "" },
      { text: "\\(PA^2 + PB^2 = x^2 + y^2 = R^2\\)", imageUrl: "" },
      { text: "\\(PA^2 + PB^2 = 4x^2 + 4y^2\\)", imageUrl: "" }
    ],
    answer: "\\(PA^2 + PB^2 = 2x^2 + 2y^2 + 2R^2 = 4R^2\\)",
    solutionSteps: [
      {
        explanation: "Use the distance formula to find \\(PA^2\\). \\(P = (x, y)\\) and \\(A = (-R, 0)\\).",
        workingOut: "\\(PA^2 = (x-(-R))^2 + (y-0)^2 = (x+R)^2 + y^2\\)",
        graphData: { html: svg }
      },
      {
        explanation: "Expand \\((x+R)^2\\).",
        workingOut: "\\(PA^2 = x^2 + 2xR + R^2 + y^2\\)"
      },
      {
        explanation: "Use the distance formula to find \\(PB^2\\). \\(P = (x, y)\\) and \\(B = (R, 0)\\).",
        workingOut: "\\(PB^2 = (x-R)^2 + (y-0)^2 = (x-R)^2 + y^2\\)"
      },
      {
        explanation: "Expand \\((x-R)^2\\).",
        workingOut: "\\(PB^2 = x^2 - 2xR + R^2 + y^2\\)"
      },
      {
        explanation: "Add \\(PA^2 + PB^2\\). Notice that the \\(+2xR\\) and \\(-2xR\\) terms cancel out.",
        workingOut: "\\(PA^2 + PB^2 = (x^2 + 2xR + R^2 + y^2) + (x^2 - 2xR + R^2 + y^2)\\)"
      },
      {
        explanation: "Simplify and substitute \\(x^2 + y^2 = R^2\\) from part (a).",
        workingOut: "\\(= 2x^2 + 2y^2 + 2R^2 = 2(x^2 + y^2) + 2R^2 = 2R^2 + 2R^2 = 4R^2 \\quad \\blacksquare\\)"
      }
    ],
    graphData: null
  };

  await db.collection('questions').doc('y9-11i-q11').update({
    type: "multiple_choice",
    subQuestions: [subQA, subQB, subQC],
    solution: "",
    solutionSteps: [],
    graphData: { html: svg },
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log("Updated y9-11i-q11 with MCQ subQuestions and full step-by-step");
  process.exit(0);
}

run().catch(console.error);
