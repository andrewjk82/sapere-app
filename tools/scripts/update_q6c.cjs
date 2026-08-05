const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');
const { touchChapterIndex } = require('./_lib/touchChapterIndex.js');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const svgQ6c = `<svg viewBox="0 0 350 250" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .line { stroke: #1e293b; stroke-width: 1.5; fill: none; stroke-linecap: round; stroke-linejoin: round; }
      .text-label { fill: #0f172a; font-family: KaTeX_Main, Times New Roman, serif; font-size: 14px; }
      .text-math { fill: #0f172a; font-family: KaTeX_Math, Times New Roman, serif; font-size: 16px; font-style: italic; }
      .angle-text { fill: #3b82f6; font-family: KaTeX_Main, Times New Roman, serif; font-size: 14px; }
      .right-angle { fill: none; stroke: #94a3b8; stroke-width: 1.5; }
      .arc { stroke: #3b82f6; stroke-width: 1.5; fill: none; }
    </style>
  </defs>

  <path d="M 50,20 L 50,200 L 290,200 Z" class="line" fill="#f8fafc" />
  
  <line x1="90" y1="200" x2="162" y2="104" class="line" />
  
  <polyline points="50,185 65,185 65,200" class="right-angle" />
  <polyline points="174,113 165,125 153,116" class="right-angle" />
  
  <path d="M 110,200 A 20,20 0 0,0 102,184" class="arc" />
  <text x="115" y="193" class="angle-text">α</text>

  <text x="45" y="15" class="text-math" text-anchor="middle">A</text>
  <text x="40" y="215" class="text-math" text-anchor="end">B</text>
  <text x="300" y="215" class="text-math" text-anchor="start">C</text>
  <text x="90" y="220" class="text-math" text-anchor="middle">D</text>
  <text x="155" y="95" class="text-math" text-anchor="middle">E</text>
  
  <text x="40" y="110" class="text-label" text-anchor="end">9 cm</text>
  <text x="190" y="220" class="text-label" text-anchor="middle">x cm</text>
  <text x="170" y="240" class="text-label" text-anchor="middle">12 cm (BC)</text>
  <text x="235" y="165" class="text-label" text-anchor="middle">8 cm</text>
</svg>`;

  const stepsQ6c = [
    {
      explanation: "Identify the relevant right-angled triangle.",
      workingOut: "We can use the small right-angled triangle \\( \\Delta DEC \\) where \\( \\angle E = 90^\\circ \\). The angle we want to find is \\( \\alpha = \\angle CDE \\).",
      graphData: null
    },
    {
      explanation: "Identify the known sides relative to the angle.",
      workingOut: "For angle \\( \\alpha \\), the Opposite side is \\( EC = 8 \\). The Hypotenuse is \\( DC = x \\), which we calculated to be \\( 10 \\) in the previous part.",
      graphData: null
    },
    {
      explanation: "Choose the correct trigonometric ratio.",
      workingOut: "Since we know the Opposite side and the Hypotenuse, we use the sine ratio: \\( \\sin(\\alpha) = \\frac{\\text{Opposite}}{\\text{Hypotenuse}} = \\frac{8}{10} = 0.8 \\).",
      graphData: null
    },
    {
      explanation: "Calculate the angle.",
      workingOut: "Taking the inverse sine, we get \\( \\alpha = \\sin^{-1}(0.8) \\approx 53.1301^\\circ \\). Rounding to two decimal places gives \\( 53.13 \\).",
      graphData: null
    }
  ];

  const docRef = db.collection('questions').doc('y10-8e-q6c');
  const docSnap = await docRef.get();
  
  if (docSnap.exists) {
    let updateObj = {
      graphData: { svg: svgQ6c },
      solutionSteps: stepsQ6c,
      updatedAt: FieldValue.serverTimestamp()
    };
    
    await docRef.update(updateObj);
    console.log('Updated y10-8e-q6c');
    
    console.log('Syncing chapter index for y10-8...');
    await touchChapterIndex(db, 'y10-8');
    console.log('Sync complete.');
  } else {
    console.log('y10-8e-q6c not found');
  }

  console.log('Done!');
  process.exit(0);
}

run().catch(console.error);
