const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');
const { touchChapterIndex } = require('./_lib/touchChapterIndex.js');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // ----- Q5F -----
  const svgQ5f = `<svg viewBox="0 0 300 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .circle { stroke: #334155; stroke-width: 2; fill: none; }
      .line { stroke: #1e293b; stroke-width: 1.5; fill: none; stroke-linecap: round; stroke-linejoin: round; }
      .arc { stroke: #3b82f6; stroke-width: 1.5; fill: none; }
      .text-math { fill: #0f172a; font-family: KaTeX_Math, Times New Roman, serif; font-size: 16px; font-style: italic; }
      .text-label { fill: #0f172a; font-family: KaTeX_Main, Times New Roman, serif; font-size: 14px; }
      .point { fill: #dc2626; }
      .tick { stroke: #1e293b; stroke-width: 1.5; fill: none; }
    </style>
  </defs>

  <circle cx="150" cy="150" r="100" class="circle" />
  <circle cx="150" cy="150" r="3" class="point" />
  <text x="145" y="165" class="text-math">O</text>

  <!-- A(170°): 51.5, 132.6 -->
  <!-- B(70°): 184.2, 56.0 -->
  <!-- C(330°): 236.6, 200.0 -->

  <path d="M 150,150 L 51.5,132.6" class="line" />
  <path d="M 150,150 L 184.2,56.0" class="line" />
  <path d="M 150,150 L 236.6,200.0" class="line" />
  <path d="M 51.5,132.6 L 184.2,56.0 L 236.6,200.0 Z" class="line" />
  <path d="M 51.5,132.6 L 236.6,200.0" class="line" />

  <!-- Ticks on AB and BC -->
  <path d="M 113.8,92 L 121.8,96.6" class="tick" />
  <path d="M 206.8,126.7 L 214,129.3" class="tick" />

  <!-- Reflex angle AOC (200 deg) -->
  <path d="M 167.3,160 A 20,20 0 1,0 130.3,146.5" class="arc" />
  <text x="140" y="115" class="text-label">200°</text>

  <!-- alpha arc at OAB (sweep flag changed back to 1) -->
  <path d="M 73.15,120.1 A 25,25 0 0,1 76.1,136.95" class="arc" />
  <text x="85" y="130" class="text-math" fill="#3b82f6">α</text>

  <!-- beta arc at OBC -->
  <path d="M 175.65,79.5 A 25,25 0 0,0 192.75,79.5" class="arc" />
  <text x="178" y="95" class="text-math" fill="#3b82f6">β</text>

  <!-- gamma arc at OCA -->
  <path d="M 213.1,191.5 A 25,25 0 0,0 215.0,187.5" class="arc" />
  <text x="200" y="190" class="text-math" fill="#3b82f6">γ</text>

  <text x="35" y="135" class="text-math">A</text>
  <text x="195" y="50" class="text-math">B</text>
  <text x="245" y="215" class="text-math">C</text>
</svg>`;

  await db.collection('questions').doc('y10-13a-q5f').update({
    'graphData.svg': svgQ5f,
    updatedAt: FieldValue.serverTimestamp()
  });
  console.log('Fixed y10-13a-q5f alpha sweep flag');
  
  console.log('Syncing chapter index for y10-13a...');
  await touchChapterIndex(db, 'y10-13a'); 
  console.log('Sync complete.');

  process.exit(0);
}

run().catch(console.error);
