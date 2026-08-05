const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');
const { touchChapterIndex } = require('./_lib/touchChapterIndex.js');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const svgQ6a = `<svg viewBox="0 0 350 250" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
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

  const stepsQ6a = [
    {
      explanation: "Identify the shared angle.",
      workingOut: "\\( \\angle C \\) is common to both \\( \\Delta ABC \\) and \\( \\Delta DEC \\).",
      graphData: null
    },
    {
      explanation: "Identify the right angles.",
      workingOut: "\\( \\angle ABC = 90^\\circ \\) and \\( \\angle DEC = 90^\\circ \\) (given in the diagram).",
      graphData: null
    },
    {
      explanation: "Conclude similarity using the AA rule.",
      workingOut: "Since two angles of \\( \\Delta DEC \\) are equal to two angles of \\( \\Delta ABC \\) (\\( \\angle C = \\angle C \\) and \\( \\angle DEC = \\angle B \\)), the triangles are similar by the AA (Angle-Angle) similarity rule. Therefore, \\( \\Delta DEC \\sim \\Delta ABC \\).",
      graphData: null
    }
  ];

  const docRef = db.collection('questions').doc('y10-8e-q6a');
  const docSnap = await docRef.get();
  
  if (docSnap.exists) {
    let updateObj = {
      graphData: { svg: svgQ6a },
      solutionSteps: stepsQ6a,
      updatedAt: FieldValue.serverTimestamp()
    };
    
    if (docSnap.data().type !== 'short_answer') {
      updateObj.type = 'short_answer';
      updateObj.requiresManualGrading = true;
    }
    
    await docRef.update(updateObj);
    console.log('Updated y10-8e-q6a');
    
    console.log('Syncing chapter index for y10-8...');
    await touchChapterIndex(db, 'y10-8');
    console.log('Sync complete.');
  } else {
    console.log('y10-8e-q6a not found');
  }

  console.log('Done!');
  process.exit(0);
}

run().catch(console.error);
