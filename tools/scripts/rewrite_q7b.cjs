const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');
const { touchChapterIndex } = require('./_lib/touchChapterIndex.js');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // ----- Q7B -----
  const questionText = "Prove that: *An angle at the centre subtended by an arc is twice an angle at the circumference subtended by the same arc*.\nUsing the provided diagram where the centre \\(O\\) lies outside the angle \\(\\angle APB\\), and the line \\(PO\\) is produced to a point \\(X\\) on the circle.\nLet \\(\\angle OPA = \\alpha\\) and \\(\\angle OPB = \\beta\\).";
  
  const questionParts = [
    "Prove that \\(\\angle APB = \\beta - \\alpha\\).",
    "Prove that \\(\\angle AOB = 2(\\beta - \\alpha) = 2\\angle APB\\)."
  ];

  const svgQ7b = `<svg viewBox="0 0 300 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .circle { stroke: #334155; stroke-width: 2; fill: none; }
      .line { stroke: #1e293b; stroke-width: 1.5; fill: none; stroke-linecap: round; stroke-linejoin: round; }
      .line-dashed { stroke: #dc2626; stroke-width: 1.5; fill: none; stroke-dasharray: 4,4; stroke-linecap: round; }
      .arc { stroke: #3b82f6; stroke-width: 1.5; fill: none; }
      .text-math { fill: #0f172a; font-family: KaTeX_Math, Times New Roman, serif; font-size: 16px; font-style: italic; }
      .point { fill: #dc2626; }
    </style>
  </defs>

  <circle cx="150" cy="150" r="100" class="circle" />
  <circle cx="150" cy="150" r="3" class="point" />
  <text x="135" y="150" class="text-math">O</text>

  <!-- P: 150, 50 -->
  <!-- A: 220.7, 220.7 -->
  <!-- B: 246.6, 175.9 -->
  <!-- X: 150, 250 -->

  <path d="M 150,50 L 220.7,220.7" class="line" /> <!-- PA -->
  <path d="M 150,50 L 246.6,175.9" class="line" /> <!-- PB -->
  
  <path d="M 150,150 L 220.7,220.7" class="line-dashed" /> <!-- OA -->
  <path d="M 150,150 L 246.6,175.9" class="line-dashed" /> <!-- OB -->
  <path d="M 150,50 L 150,250" class="line-dashed" /> <!-- POX -->

  <!-- alpha arc at OPA (radius 35) -->
  <path d="M 150,85 A 35,35 0 0,0 163.4,82.3" class="arc" />
  <text x="153" y="94" class="text-math" fill="#3b82f6">α</text>

  <!-- beta arc at OPB (radius 45) -->
  <path d="M 150,95 A 45,45 0 0,0 177.4,85.7" class="arc" />
  <text x="162" y="104" class="text-math" fill="#3b82f6">β</text>

  <text x="145" y="40" class="text-math">P</text>
  <text x="215" y="235" class="text-math">A</text>
  <text x="255" y="180" class="text-math">B</text>
  <text x="145" y="265" class="text-math">X</text>
</svg>`;

  const stepsQ7b = [
    { explanation: "Express the angle \\(\\angle APB\\) in terms of \\(\\alpha\\) and \\(\\beta\\).", workingOut: "From the diagram, the angle \\(\\angle OPB\\) is composed of two adjacent angles: \\(\\angle OPA\\) and \\(\\angle APB\\).\nTherefore, \\(\\angle OPB = \\angle OPA + \\angle APB\\).\nRearranging this gives \\(\\angle APB = \\angle OPB - \\angle OPA = \\beta - \\alpha\\).", graphData: null },
    { explanation: "Use the exterior angle theorem on the two isosceles triangles.", workingOut: "In \\(\\triangle OPA\\), \\(OA = OP\\) (radii), so \\(\\angle OAP = \\alpha\\). Producing \\(PO\\) to \\(X\\) creates the exterior angle \\(\\angle AOX = \\angle OAP + \\angle OPA = 2\\alpha\\).\nSimilarly, in \\(\\triangle OPB\\), \\(OB = OP\\) (radii), so \\(\\angle OBP = \\beta\\). The exterior angle \\(\\angle BOX = \\angle OBP + \\angle OPB = 2\\beta\\).", graphData: null },
    { explanation: "Combine the central angles to find \\(\\angle AOB\\).", workingOut: "From the diagram, the central angle \\(\\angle AOB\\) is the difference between \\(\\angle BOX\\) and \\(\\angle AOX\\):\n\\(\\angle AOB = \\angle BOX - \\angle AOX\\).\nSubstituting the expressions from the previous step, \\(\\angle AOB = 2\\beta - 2\\alpha = 2(\\beta - \\alpha)\\).\nSince we know \\(\\angle APB = \\beta - \\alpha\\), we conclude that \\(\\angle AOB = 2\\angle APB\\).", graphData: null }
  ];

  await db.collection('questions').doc('y10-13a-q7b').update({
    question: questionText,
    questionParts: questionParts,
    'graphData.svg': svgQ7b,
    solutionSteps: stepsQ7b,
    updatedAt: FieldValue.serverTimestamp()
  });
  console.log('Fixed y10-13a-q7b everything');
  
  console.log('Syncing chapter index for y10-13a...');
  await touchChapterIndex(db, 'y10-13a'); 
  console.log('Sync complete.');

  process.exit(0);
}

run().catch(console.error);
