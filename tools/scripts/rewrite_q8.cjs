const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');
const { touchChapterIndex } = require('./_lib/touchChapterIndex.js');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // ----- Q8 -----
  const questionText = "The converse of Thales' theorem is established by proving the following result: *The midpoint of the hypotenuse of a right-angled triangle is equidistant from the three vertices of the triangle*.\n\nLet \\(\\triangle ABP\\) be right-angled at \\(P\\), and let \\(O\\) be the midpoint of the hypotenuse \\(AB\\). Draw \\(PO\\) and produce it to \\(Q\\) so that \\(PO = OQ\\). Draw \\(AQ\\) and \\(BQ\\).";
  
  const questionParts = [
    "Explain why \\(APBQ\\) is a parallelogram.",
    "Hence, explain why \\(APBQ\\) is a rectangle.",
    "Hence, explain why \\(AO = BO = PO\\) and why the circle with diameter \\(AB\\) passes through \\(P\\)."
  ];

  const svgQ8 = `<svg viewBox="0 0 300 250" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .line { stroke: #1e293b; stroke-width: 2; fill: none; stroke-linecap: round; stroke-linejoin: round; }
      .line-dashed { stroke: #3b82f6; stroke-width: 1.5; fill: none; stroke-dasharray: 5,5; stroke-linecap: round; }
      .line-thin { stroke: #64748b; stroke-width: 1.5; fill: none; stroke-linecap: round; }
      .text-math { fill: #0f172a; font-family: KaTeX_Math, Times New Roman, serif; font-size: 18px; font-style: italic; }
      .point { fill: #dc2626; }
      .tick { stroke: #dc2626; stroke-width: 2; fill: none; stroke-linecap: round; }
      .right-angle { stroke: #64748b; stroke-width: 1.5; fill: none; }
    </style>
  </defs>

  <!-- P: 50, 200 -->
  <!-- A: 250, 200 -->
  <!-- B: 50, 50 -->
  <!-- Q: 250, 50 -->
  <!-- O: 150, 125 -->

  <!-- Right angle at P -->
  <path d="M 50,185 L 65,185 L 65,200" class="right-angle" />

  <!-- Auxiliary lines (dashed) -->
  <path d="M 250,200 L 250,50" class="line-dashed" /> <!-- AQ -->
  <path d="M 50,50 L 250,50" class="line-dashed" /> <!-- BQ -->
  <path d="M 50,200 L 250,50" class="line-dashed" /> <!-- PQ -->

  <!-- Original Triangle ABP (solid) -->
  <path d="M 50,200 L 250,200" class="line" /> <!-- PA -->
  <path d="M 50,200 L 50,50" class="line" /> <!-- PB -->
  <path d="M 50,50 L 250,200" class="line" /> <!-- AB -->

  <!-- Points -->
  <circle cx="50" cy="200" r="3" class="point" />
  <circle cx="250" cy="200" r="3" class="point" />
  <circle cx="50" cy="50" r="3" class="point" />
  <circle cx="250" cy="50" r="3" class="point" />
  <circle cx="150" cy="125" r="3" class="point" />

  <!-- Ticks for AO = OB (single tick) -->
  <path d="M 197,166.5 L 203,158.5" class="tick" /> <!-- On AO -->
  <path d="M 97,91.5 L 103,83.5" class="tick" /> <!-- On OB -->

  <!-- Ticks for PO = OQ (double tick) -->
  <path d="M 96,159 L 101,165" class="tick" /> <!-- On PO -->
  <path d="M 99,157 L 104,163" class="tick" /> <!-- On PO -->
  <path d="M 196,84 L 201,90" class="tick" /> <!-- On OQ -->
  <path d="M 199,82 L 204,88" class="tick" /> <!-- On OQ -->

  <!-- Labels -->
  <text x="30" y="215" class="text-math">P</text>
  <text x="255" y="215" class="text-math">A</text>
  <text x="30" y="45" class="text-math">B</text>
  <text x="255" y="45" class="text-math">Q</text>
  <text x="145" y="150" class="text-math">O</text>
</svg>`;

  const stepsQ8 = [
    { 
      explanation: "Explain why \\(APBQ\\) is a parallelogram.", 
      workingOut: "The diagonals of the quadrilateral \\(APBQ\\) are \\(AB\\) and \\(PQ\\).\nWe are given that \\(O\\) is the midpoint of \\(AB\\), so \\(AO = OB\\).\nBy construction, \\(PO\\) is produced to \\(Q\\) such that \\(PO = OQ\\).\nSince the diagonals \\(AB\\) and \\(PQ\\) bisect each other at \\(O\\), the quadrilateral \\(APBQ\\) must be a parallelogram.", 
      graphData: null 
    },
    { 
      explanation: "Hence, explain why \\(APBQ\\) is a rectangle.", 
      workingOut: "From part a), \\(APBQ\\) is a parallelogram. A parallelogram with at least one right angle is a rectangle.\nWe are given that \\(\\triangle ABP\\) is right-angled at \\(P\\), meaning \\(\\angle APB = 90^\\circ\\).\nTherefore, the parallelogram \\(APBQ\\) is a rectangle.", 
      graphData: null 
    },
    { 
      explanation: "Hence, explain why \\(AO = BO = PO\\) and why the circle with diameter \\(AB\\) passes through \\(P\\).", 
      workingOut: "The diagonals of a rectangle are equal in length and bisect each other.\nTherefore, the diagonals \\(AB\\) and \\(PQ\\) are equal (\\(AB = PQ\\)), and their halves are all equal, so \\(AO = BO = PO = OQ\\).\nSince \\(O\\) is equidistant from \\(A\\), \\(B\\), and \\(P\\) (\\(OA = OB = OP\\)), a circle centered at \\(O\\) with radius \\(OA\\) will pass through \\(A\\), \\(B\\), and \\(P\\).\nBecause the line segment \\(AB\\) passes through the center \\(O\\), \\(AB\\) is a diameter of this circle.", 
      graphData: null 
    }
  ];

  await db.collection('questions').doc('y10-13a-q8').update({
    question: questionText,
    questionParts: questionParts,
    'graphData.svg': svgQ8,
    solutionSteps: stepsQ8,
    updatedAt: FieldValue.serverTimestamp()
  });
  console.log('Fixed y10-13a-q8 completely');
  
  console.log('Syncing chapter index for y10-13a...');
  await touchChapterIndex(db, 'y10-13a'); 
  console.log('Sync complete.');

  process.exit(0);
}

run().catch(console.error);
