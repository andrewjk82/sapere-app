const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');
const { touchChapterIndex } = require('./_lib/touchChapterIndex.js');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // ----- Q5C -----
  const svgQ5c = `<svg viewBox="0 0 300 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .circle { stroke: #334155; stroke-width: 2; fill: none; }
      .line { stroke: #1e293b; stroke-width: 1.5; fill: none; stroke-linecap: round; stroke-linejoin: round; }
      .arc { stroke: #3b82f6; stroke-width: 1.5; fill: none; }
      .text-math { fill: #0f172a; font-family: KaTeX_Math, Times New Roman, serif; font-size: 16px; font-style: italic; }
      .text-label { fill: #0f172a; font-family: KaTeX_Main, Times New Roman, serif; font-size: 14px; }
      .point { fill: #dc2626; }
      .parallel-arrow { fill: #1e293b; stroke: none; }
    </style>
  </defs>

  <circle cx="150" cy="150" r="100" class="circle" />
  <circle cx="150" cy="150" r="3" class="point" />
  <text x="140" y="145" class="text-math">O</text>

  <!-- P(150): 63.4, 100 -->
  <!-- Q(250): 115.8, 244 -->
  <!-- R(290): 184.2, 244 -->
  
  <path d="M 63.4,100 L 115.8,244 L 184.2,244 Z" class="line" />
  <path d="M 150,150 L 63.4,100" class="line" />
  <path d="M 150,150 L 184.2,244" class="line" />

  <!-- Parallel arrow on PQ (filled triangle) -->
  <polygon points="89.6,172 81.5,164.3 90.9,160.9" class="parallel-arrow" />
  
  <!-- Parallel arrow on OR (filled triangle) -->
  <polygon points="167.1,197 159.0,189.3 168.4,185.9" class="parallel-arrow" />

  <!-- 20 deg arc at ORP -->
  <text x="155" y="225" class="text-label">20°</text>

  <!-- gamma arc at POR -->
  <path d="M 132.7,140 A 20,20 0 0,0 156.8,168.8" class="arc" />
  <text x="120" y="180" class="text-math" fill="#3b82f6">γ</text>

  <!-- alpha arc at OPQ (vertex P) -->
  <path d="M 70.2,118.8 A 20,20 0 0,0 80.7,110.0" class="arc" />
  <text x="75" y="127" class="text-math" fill="#3b82f6">α</text>

  <!-- beta arc at PQR (vertex Q) - Changed sweep-flag to 1 -->
  <path d="M 108.9,225.1 A 20,20 0 0,1 135.8,244" class="arc" />
  <text x="115" y="225" class="text-math" fill="#3b82f6">β</text>

  <text x="50" y="95" class="text-math">P</text>
  <text x="105" y="260" class="text-math">Q</text>
  <text x="195" y="260" class="text-math">R</text>
</svg>`;

  await db.collection('questions').doc('y10-13a-q5c').update({
    'graphData.svg': svgQ5c,
    updatedAt: FieldValue.serverTimestamp()
  });
  console.log('Fixed y10-13a-q5c beta arc sweep-flag');
  
  console.log('Syncing chapter index for y10-13a...');
  await touchChapterIndex(db, 'y10-13a'); 
  console.log('Sync complete.');

  process.exit(0);
}

run().catch(console.error);
