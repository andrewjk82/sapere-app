const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');
const { touchChapterIndex } = require('./_lib/touchChapterIndex.js');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // ----- Q5D -----
  const svgQ5d = `<svg viewBox="0 0 300 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .circle { stroke: #334155; stroke-width: 2; fill: none; }
      .line { stroke: #1e293b; stroke-width: 1.5; fill: none; stroke-linecap: round; stroke-linejoin: round; }
      .arc { stroke: #3b82f6; stroke-width: 1.5; fill: none; }
      .text-math { fill: #0f172a; font-family: KaTeX_Math, Times New Roman, serif; font-size: 16px; font-style: italic; }
      .text-label { fill: #0f172a; font-family: KaTeX_Main, Times New Roman, serif; font-size: 14px; }
      .point { fill: #dc2626; }
    </style>
  </defs>

  <circle cx="150" cy="150" r="100" class="circle" />
  <circle cx="150" cy="150" r="3" class="point" />
  <text x="145" y="165" class="text-math">O</text>

  <!-- A(160): 56, 115.8 -->
  <!-- B(20): 244, 115.8 -->
  <!-- C(280): 167.4, 248.5 -->

  <path d="M 56,115.8 L 244,115.8 L 167.4,248.5 Z" class="line" />
  <path d="M 150,150 L 56,115.8" class="line" />
  <path d="M 150,150 L 244,115.8" class="line" />
  <path d="M 150,150 L 167.4,248.5" class="line" />

  <!-- 140 deg arc -->
  <path d="M 168.8,143.2 A 20,20 0 0,0 131.2,143.2" class="arc" />
  <text x="135" y="135" class="text-label">140°</text>

  <!-- 50 deg arc -->
  <path d="M 81,115.8 A 25,25 0 0,0 72.1,135.0" class="arc" />
  <text x="75" y="130" class="text-label">50°</text>

  <!-- alpha arc -->
  <path d="M 131.2,143.2 A 20,20 0 0,0 153.5,169.7" class="arc" />
  <text x="125" y="170" class="text-math" fill="#3b82f6">α</text>

  <!-- beta arc -->
  <path d="M 231.5,137.5 A 25,25 0 0,0 219,115.8" class="arc" />
  <text x="222" y="133" class="text-math" fill="#3b82f6">β</text>

  <!-- gamma arc -->
  <path d="M 151.3,229.4 A 25,25 0 0,0 179.9,226.9" class="arc" />
  <text x="160" y="235" class="text-math" fill="#3b82f6">γ</text>

  <text x="40" y="115" class="text-math">A</text>
  <text x="255" y="115" class="text-math">B</text>
  <text x="175" y="265" class="text-math">C</text>
</svg>`;

  await db.collection('questions').doc('y10-13a-q5d').update({
    'graphData.svg': svgQ5d,
    updatedAt: FieldValue.serverTimestamp()
  });
  console.log('Fixed y10-13a-q5d arcs');
  
  console.log('Syncing chapter index for y10-13a...');
  await touchChapterIndex(db, 'y10-13a'); 
  console.log('Sync complete.');

  process.exit(0);
}

run().catch(console.error);
