const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');
const { touchChapterIndex } = require('./_lib/touchChapterIndex.js');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const svgQ9 = `<svg viewBox="0 0 300 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .circle { stroke: #334155; stroke-width: 2; fill: none; }
      .line { stroke: #1e293b; stroke-width: 1.5; fill: none; stroke-linecap: round; stroke-linejoin: round; }
      .line-dashed { stroke: #64748b; stroke-width: 1.5; fill: none; stroke-dasharray: 4,4; stroke-linecap: round; }
      .arc { stroke: #3b82f6; stroke-width: 1.5; fill: none; }
      .text-math { fill: #0f172a; font-family: KaTeX_Math, Times New Roman, serif; font-size: 16px; font-style: italic; }
      .text-label { fill: #0f172a; font-family: KaTeX_Main, Times New Roman, serif; font-size: 14px; font-style: normal; }
      .point { fill: #dc2626; }
      .point-horse { fill: #16a34a; }
      .point-punter { fill: #eab308; }
    </style>
  </defs>

  <!-- Track -->
  <circle cx="150" cy="150" r="100" class="circle" />
  
  <!-- O: 150, 150 -->
  <!-- A: 250, 150 -->
  <!-- H: 236.6, 100 -->
  <!-- P: 150, 250 -->

  <path d="M 150,150 L 250,150" class="line-dashed" /> <!-- OA -->
  <path d="M 150,150 L 236.6,100" class="line-dashed" /> <!-- OH -->
  
  <path d="M 150,250 L 250,150" class="line" /> <!-- PA -->
  <path d="M 150,250 L 236.6,100" class="line" /> <!-- PH -->

  <!-- Central Angle AOH -->
  <path d="M 170,150 A 20,20 0 0,0 167.3,140" class="arc" />
  <text x="175" y="145" class="text-math" fill="#3b82f6">θ</text>

  <!-- Circumference Angle APH -->
  <!-- PA slope is -1 (45 deg up-right), normal angle is 45 deg -->
  <!-- PH slope is approx 60 deg up-right -->
  <path d="M 178.3,221.7 A 40,40 0 0,0 170,215.4" class="arc" />
  <text x="185" y="215" class="text-math" fill="#3b82f6">θ/2</text>

  <!-- Points -->
  <circle cx="150" cy="150" r="3" class="point" />
  <circle cx="250" cy="150" r="3" class="point" />
  <circle cx="236.6" cy="100" r="5" class="point-horse" />
  <circle cx="150" cy="250" r="5" class="point-punter" />

  <!-- Labels -->
  <text x="135" y="145" class="text-math">O</text>
  <text x="260" y="155" class="text-math">A</text>
  <text x="245" y="95" class="text-label" fill="#16a34a">Horse (H)</text>
  <text x="120" y="270" class="text-label" fill="#ca8a04">Punter (P)</text>
</svg>`;

  const stepsQ9 = [
    { 
      explanation: "Define the variables for the horse's movement.", 
      workingOut: "Let the circular track have centre \\(O\\) and radius \\(r\\).\nLet \\(A\\) be the starting position of the horse, and \\(H\\) be its position at time \\(t\\).\nLet \\(\\theta = \\angle AOH\\) be the central angle subtended by the arc \\(AH\\).", 
      graphData: null 
    },
    { 
      explanation: "Express the central angle in terms of the horse's constant speed.", 
      workingOut: "The horse travels at a constant speed, meaning the arc length \\(s = AH\\) increases at a constant rate.\nSince arc length is given by \\(s = r\\theta\\), and the radius \\(r\\) is constant, the central angle \\(\\theta\\) must also increase at a constant rate.\nMathematically, \\(\\frac{\\Delta\\theta}{\\Delta t} = k\\) (where \\(k\\) is a constant).", 
      graphData: null 
    },
    { 
      explanation: "Apply the angle at the centre theorem to the punter's line of sight.", 
      workingOut: "The punter is at a fixed point \\(P\\) on the circumference.\nThe angle of the punter's binoculars is \\(\\angle APH\\), which is the angle at the circumference subtended by the same arc \\(AH\\).\nBy the angle at the centre theorem, \\(\\angle APH = \\frac{1}{2} \\angle AOH = \\frac{\\theta}{2}\\).\nThe rate of rotation of the binoculars is \\(\\frac{\\Delta}{\\Delta t}\\left(\\frac{\\theta}{2}\\right) = \\frac{1}{2} \\frac{\\Delta\\theta}{\\Delta t} = \\frac{1}{2} k\\).\nSince \\(\\frac{1}{2} k\\) is a constant, the binoculars rotate at a constant rate.", 
      graphData: null 
    }
  ];

  await db.collection('questions').doc('y10-13a-q9').update({
    'graphData.svg': svgQ9,
    solutionSteps: stepsQ9,
    updatedAt: FieldValue.serverTimestamp()
  });
  console.log('Fixed y10-13a-q9 SVG and solutionSteps');
  
  console.log('Syncing chapter index for y10-13a...');
  await touchChapterIndex(db, 'y10-13a'); 
  console.log('Sync complete.');

  process.exit(0);
}

run().catch(console.error);
