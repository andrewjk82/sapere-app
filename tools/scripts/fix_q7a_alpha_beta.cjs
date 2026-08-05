const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');
const { touchChapterIndex } = require('./_lib/touchChapterIndex.js');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // ----- Q7A -----
  const svgQ7a = `<svg viewBox="0 0 300 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
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
  <text x="155" y="150" class="text-math">O</text>

  <!-- P(90° up): 150, 50 -->
  <!-- A(220° down-left): 73.4, 214.3 -->
  <!-- B(320° down-right): 226.6, 214.3 -->
  <!-- X: 150, 250 -->

  <path d="M 150,50 L 73.4,214.3" class="line" /> <!-- PA -->
  <path d="M 150,50 L 226.6,214.3" class="line" /> <!-- PB -->
  
  <path d="M 150,150 L 73.4,214.3" class="line-dashed" /> <!-- OA -->
  <path d="M 150,150 L 226.6,214.3" class="line-dashed" /> <!-- OB -->
  <path d="M 150,50 L 150,250" class="line-dashed" /> <!-- POX -->

  <!-- alpha arc at OPA (sweep flag 1, text moved right) -->
  <path d="M 150,75 A 25,25 0 0,1 139.4,72.7" class="arc" />
  <text x="138" y="85" class="text-math" fill="#3b82f6">α</text>

  <!-- beta arc at OPB (sweep flag 1, text moved left) -->
  <path d="M 160.6,72.7 A 25,25 0 0,1 150,75" class="arc" />
  <text x="153" y="85" class="text-math" fill="#3b82f6">β</text>

  <text x="145" y="40" class="text-math">P</text>
  <text x="55" y="225" class="text-math">A</text>
  <text x="235" y="225" class="text-math">B</text>
  <text x="155" y="260" class="text-math">X</text>
</svg>`;

  await db.collection('questions').doc('y10-13a-q7a').update({
    'graphData.svg': svgQ7a,
    updatedAt: FieldValue.serverTimestamp()
  });
  console.log('Fixed y10-13a-q7a alpha/beta texts and arcs');
  
  console.log('Syncing chapter index for y10-13a...');
  await touchChapterIndex(db, 'y10-13a'); 
  console.log('Sync complete.');

  process.exit(0);
}

run().catch(console.error);
