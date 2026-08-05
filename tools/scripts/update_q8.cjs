const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');
const { touchChapterIndex } = require('./_lib/touchChapterIndex.js');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const svgQ8 = `<svg viewBox="0 0 340 240" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .line { stroke: #1e293b; stroke-width: 1.5; fill: none; stroke-linecap: round; stroke-linejoin: round; }
      .text-math { fill: #0f172a; font-family: KaTeX_Math, Times New Roman, serif; font-size: 16px; font-style: italic; }
      .marker { fill: none; stroke: #3b82f6; stroke-width: 1.5; stroke-linecap: round; stroke-linejoin: round; }
    </style>
  </defs>

  <!-- Triangles -->
  <path d="M 130,60 L 250,60" class="line" /> <!-- PQ -->
  <path d="M 90,180 L 210,180" class="line" /> <!-- ST -->
  <path d="M 130,60 L 210,180" class="line" /> <!-- PT -->
  <path d="M 250,60 L 90,180" class="line" /> <!-- QS -->

  <!-- Parallel markers (arrows) -->
  <polyline points="185,55 195,60 185,65" class="marker" />
  <polyline points="145,175 155,180 145,185" class="marker" />

  <!-- Equality ticks -->
  <line x1="207" y1="86" x2="213" y2="94" class="marker" />
  <line x1="127" y1="146" x2="133" y2="154" class="marker" />

  <!-- Labels -->
  <text x="120" y="50" class="text-math">P</text>
  <text x="260" y="50" class="text-math">Q</text>
  <text x="170" y="110" class="text-math">R</text>
  <text x="80" y="200" class="text-math">S</text>
  <text x="220" y="200" class="text-math">T</text>
</svg>`;

  const stepsQ8 = [
    {
      explanation: "Identify equal angles from parallel lines.",
      workingOut: "Since \\( PQ \\parallel ST \\), the alternate interior angles are equal: \\( \\angle PQR = \\angle TSR \\).",
      graphData: null
    },
    {
      explanation: "Identify vertically opposite angles.",
      workingOut: "The intersecting lines \\( PT \\) and \\( QS \\) form vertically opposite angles at \\( R \\), so \\( \\angle PRQ = \\angle TRS \\).",
      graphData: null
    },
    {
      explanation: "Identify the given equal sides.",
      workingOut: "It is given in the problem that \\( QR = SR \\).",
      graphData: null
    },
    {
      explanation: "Conclude congruence.",
      workingOut: "We have two angles and the included side equal (\\( \\angle PQR = \\angle TSR \\), \\( QR = SR \\), and \\( \\angle PRQ = \\angle TRS \\)). Therefore, \\( \\Delta PQR \\cong \\Delta TSR \\) by the ASA (Angle-Side-Angle) congruence test.",
      graphData: null
    }
  ];

  const options = [
    { text: "ASA (Angle-Side-Angle)", imageUrl: "" },
    { text: "SAS (Side-Angle-Side)", imageUrl: "" },
    { text: "SSS (Side-Side-Side)", imageUrl: "" },
    { text: "RHS (Right angle-Hypotenuse-Side)", imageUrl: "" }
  ];

  const docRef = db.collection('questions').doc('y10-8e-q8');
  const docSnap = await docRef.get();
  
  if (docSnap.exists) {
    let updateObj = {
      graphData: { svg: svgQ8 },
      solutionSteps: stepsQ8,
      type: 'multiple_choice',
      options: options,
      answer: '0',
      requiresManualGrading: false,
      updatedAt: FieldValue.serverTimestamp()
    };
    
    await docRef.update(updateObj);
    console.log('Updated y10-8e-q8');
    
    console.log('Syncing chapter index for y10-8...');
    await touchChapterIndex(db, 'y10-8');
    console.log('Sync complete.');
  } else {
    console.log('y10-8e-q8 not found');
  }

  console.log('Done!');
  process.exit(0);
}

run().catch(console.error);
