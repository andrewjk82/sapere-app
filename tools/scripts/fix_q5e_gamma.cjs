const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');
const { touchChapterIndex } = require('./_lib/touchChapterIndex.js');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // ----- Q5E -----
  const svgQ5e = `<svg viewBox="0 0 300 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
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
  <text x="145" y="165" class="text-math">O</text>

  <!-- Q(0°): 250, 150 -->
  <!-- P(160°): 56, 115.8 -->
  <!-- R(20°): 244, 115.8 -->

  <path d="M 150,150 L 250,150" class="line" /> <!-- OQ -->
  <path d="M 56,115.8 L 244,115.8" class="line" /> <!-- PR -->
  
  <!-- Parallel arrows -->
  <polygon points="195,150 185,145 185,155" class="parallel-arrow" /> <!-- on OQ -->
  <polygon points="155,115.8 145,110.8 145,120.8" class="parallel-arrow" /> <!-- on PR -->

  <path d="M 150,150 L 56,115.8" class="line" /> <!-- OP -->
  <path d="M 150,150 L 244,115.8" class="line" /> <!-- OR -->
  <path d="M 250,150 L 244,115.8" class="line" /> <!-- QR -->

  <!-- 160 deg arc at O -->
  <path d="M 175,150 A 25,25 0 0,0 126.5,141.5" class="arc" />
  <text x="145" y="130" class="text-label">160°</text>

  <!-- alpha arc at POR -->
  <path d="M 168.8,143.2 A 20,20 0 0,0 131.2,143.2" class="arc" />
  <text x="145" y="120" class="text-math" fill="#3b82f6">α</text>

  <!-- beta arc at OQR -->
  <!-- Q(250,150), QO(-100,0), QR(-6,-34.2) -->
  <path d="M 230,150 A 20,20 0 0,1 246.5,130.1" class="arc" />
  <text x="220" y="145" class="text-math" fill="#3b82f6">β</text>

  <!-- gamma arc at ORP -->
  <!-- R(244,115.8), RO(-94,34.2), RP(-188,0) -->
  <path d="M 224,115.8 A 20,20 0 0,0 225.2,122.6" class="arc" />
  <text x="212" y="123" class="text-math" fill="#3b82f6">γ</text>

  <text x="255" y="155" class="text-math">Q</text>
  <text x="40" y="115" class="text-math">P</text>
  <text x="255" y="115" class="text-math">R</text>
</svg>`;

  await db.collection('questions').doc('y10-13a-q5e').update({
    'graphData.svg': svgQ5e,
    updatedAt: FieldValue.serverTimestamp()
  });
  console.log('Fixed y10-13a-q5e gamma position');
  
  console.log('Syncing chapter index for y10-13a...');
  await touchChapterIndex(db, 'y10-13a'); 
  console.log('Sync complete.');

  process.exit(0);
}

run().catch(console.error);
