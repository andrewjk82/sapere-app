const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');
const { touchChapterIndex } = require('./_lib/touchChapterIndex.js');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // ----- Q4E -----
  // Q and S on the same side of PR.
  // P at 250 deg, R at 290 deg. (Arc PR is 40 deg).
  // Q at 90 deg. S at 150 deg.
  // P(250): 150 + 100*cos(250) = 115.8, 150 - 100*sin(250) = 244
  // R(290): 150 + 100*cos(290) = 184.2, 150 - 100*sin(290) = 244
  // Q(90): 150 + 100*cos(90) = 150, 150 - 100*sin(90) = 50
  // S(150): 150 + 100*cos(150) = 63.4, 150 - 100*sin(150) = 100

  const svgQ4e = `<svg viewBox="0 0 300 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .circle { stroke: #334155; stroke-width: 2; fill: none; }
      .line { stroke: #1e293b; stroke-width: 1.5; fill: none; stroke-linecap: round; stroke-linejoin: round; }
      .text-math { fill: #0f172a; font-family: KaTeX_Math, Times New Roman, serif; font-size: 16px; font-style: italic; }
      .text-label { fill: #0f172a; font-family: KaTeX_Main, Times New Roman, serif; font-size: 14px; }
      .point { fill: #dc2626; }
    </style>
  </defs>

  <circle cx="150" cy="150" r="100" class="circle" />
  <circle cx="150" cy="150" r="3" class="point" />
  <text x="145" y="145" class="text-math">O</text>

  <!-- P(250): 115.8, 244 -->
  <!-- R(290): 184.2, 244 -->
  <!-- Q(90): 150, 50 -->
  <!-- S(150): 63.4, 100 -->
  
  <path d="M 115.8,244 L 150,50 L 184.2,244 Z" class="line" />
  <path d="M 115.8,244 L 63.4,100 L 184.2,244 Z" class="line" />
  <path d="M 150,150 L 115.8,244" class="line" />
  <path d="M 150,150 L 184.2,244" class="line" />

  <text x="75" y="115" class="text-label">20°</text>
  <text x="145" y="75" class="text-math" fill="#3b82f6">α</text>
  <text x="145" y="225" class="text-math" fill="#3b82f6">θ</text>

  <text x="100" y="260" class="text-math">P</text>
  <text x="190" y="260" class="text-math">R</text>
  <text x="145" y="40" class="text-math">Q</text>
  <text x="45" y="95" class="text-math">S</text>
</svg>`;

  const stepsQ4e = [
    { explanation: "Find \\( \\alpha \\).", workingOut: "The angles \\( \\alpha = \\angle PQR \\) and \\( \\angle PSR = 20^\\circ \\) both subtend the same minor arc \\( PR \\) at the circumference. Angles subtended by the same arc are equal, so \\( \\alpha = 20^\\circ \\).", graphData: null },
    { explanation: "Find \\( \\theta \\).", workingOut: "The central angle \\( \\theta = \\angle POR \\) subtends the same minor arc \\( PR \\) as the inscribed angle \\( \\angle PSR = 20^\\circ \\). The angle at the centre is twice the angle at the circumference, so \\( \\theta = 2 \\times 20^\\circ = 40^\\circ \\).", graphData: null }
  ];

  const optionsQ4e = [
    { text: "\\( \\alpha = 19^\\circ, \\theta = 40^\\circ \\)", imageUrl: "" },
    { text: "\\( \\alpha = 20^\\circ, \\theta = 39^\\circ \\)", imageUrl: "" },
    { text: "\\( \\alpha = 20^\\circ, \\theta = 40^\\circ \\)", imageUrl: "" },
    { text: "\\( \\alpha = 20^\\circ, \\theta = 41^\\circ \\)", imageUrl: "" }
  ];

  const docRef = db.collection('questions').doc('y10-13a-q4e');
  await docRef.update({
    'graphData.svg': svgQ4e,
    solutionSteps: stepsQ4e,
    options: optionsQ4e,
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log('Fixed y10-13a-q4e again');
  
  console.log('Syncing chapter index for y10-13a...');
  await touchChapterIndex(db, 'y10-13a'); 
  console.log('Sync complete.');

  process.exit(0);
}

run().catch(console.error);
