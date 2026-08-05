const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');
const { touchChapterIndex } = require('./_lib/touchChapterIndex.js');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const svgQ9 = `<svg viewBox="0 0 320 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .line { stroke: #1e293b; stroke-width: 1.5; fill: none; stroke-linecap: round; stroke-linejoin: round; }
      .text-math { fill: #0f172a; font-family: KaTeX_Math, Times New Roman, serif; font-size: 16px; font-style: italic; }
      .marker { fill: none; stroke: #3b82f6; stroke-width: 1.5; stroke-linecap: round; stroke-linejoin: round; }
    </style>
  </defs>

  <!-- Triangles -->
  <path d="M 30,260 L 270,260" class="line" /> <!-- AC -->
  <path d="M 30,260 L 190,20" class="line" /> <!-- AN -->
  <path d="M 150,260 L 110,140" class="line" /> <!-- BM -->
  <path d="M 270,260 L 190,20" class="line" /> <!-- CN -->

  <!-- Equality ticks for AB = BC -->
  <line x1="90" y1="253" x2="90" y2="267" class="marker" />
  <line x1="210" y1="253" x2="210" y2="267" class="marker" />

  <!-- Parallel markers for BM and CN -->
  <polyline points="138,208 130,200 128,211" class="marker" />
  <polyline points="238,148 230,140 228,151" class="marker" />

  <!-- Labels -->
  <text x="15" y="270" class="text-math">A</text>
  <text x="150" y="285" class="text-math">B</text>
  <text x="280" y="270" class="text-math">C</text>
  <text x="90" y="140" class="text-math">M</text>
  <text x="180" y="15" class="text-math">N</text>
</svg>`;

  const stepsQ9 = [
    {
      explanation: "Identify the similar triangles.",
      workingOut: "In \\( \\Delta ABM \\) and \\( \\Delta ACN \\), \\( \\angle A \\) is common to both triangles. Since \\( BM \\parallel CN \\), the corresponding angles are equal: \\( \\angle ABM = \\angle ACN \\). Therefore, \\( \\Delta ACN ||| \\Delta ABM \\) by the AA similarity test.",
      graphData: null
    },
    {
      explanation: "Establish the ratio of corresponding sides.",
      workingOut: "Because the triangles are similar, the ratio of their corresponding sides is equal: \\( \\frac{AC}{AB} = \\frac{CN}{BM} \\).",
      graphData: null
    },
    {
      explanation: "Use the given equality to find the ratio.",
      workingOut: "It is given that \\( AB = BC \\). This means that \\( B \\) is the midpoint of \\( AC \\), so the total length \\( AC = AB + BC = 2AB \\). Therefore, the ratio \\( \\frac{AC}{AB} = \\frac{2AB}{AB} = 2 \\).",
      graphData: null
    },
    {
      explanation: "Solve for CN.",
      workingOut: "Substituting this ratio into our similarity equation gives \\( 2 = \\frac{CN}{BM} \\). Multiplying both sides by \\( BM \\), we prove that \\( CN = 2BM \\).",
      graphData: null
    }
  ];

  const docRef = db.collection('questions').doc('y10-8e-q9');
  const docSnap = await docRef.get();
  
  if (docSnap.exists) {
    let updateObj = {
      graphData: { svg: svgQ9 },
      solutionSteps: stepsQ9,
      type: 'short_answer',
      requiresManualGrading: true,
      options: [],
      answer: 'See solution',
      updatedAt: FieldValue.serverTimestamp()
    };
    
    await docRef.update(updateObj);
    console.log('Updated y10-8e-q9');
    
    console.log('Syncing chapter index for y10-8...');
    await touchChapterIndex(db, 'y10-8');
    console.log('Sync complete.');
  } else {
    console.log('y10-8e-q9 not found');
  }

  console.log('Done!');
  process.exit(0);
}

run().catch(console.error);
