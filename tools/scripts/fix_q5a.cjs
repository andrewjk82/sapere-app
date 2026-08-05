const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');
const { touchChapterIndex } = require('./_lib/touchChapterIndex.js');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // ----- Q5A -----
  const svgQ5a = `<svg viewBox="0 0 300 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
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
  <text x="145" y="140" class="text-math">O</text>

  <!-- AB and FG parallel lines -->
  <path d="M 50,150 L 250,150" class="line" />
  <path d="M 145,145 L 155,150 L 145,155" class="line" />
  
  <path d="M 56,184.2 L 244,184.2" class="line" />
  <path d="M 145,179.2 L 155,184.2 L 145,189.2" class="line" />

  <!-- Segments AF, FB, AG -->
  <path d="M 50,150 L 56,184.2" class="line" />
  <path d="M 56,184.2 L 250,150" class="line" />
  <path d="M 50,150 L 244,184.2" class="line" />

  <!-- 10 deg arc at B -->
  <path d="M 225,150 A 25,25 0 0,0 225.4,154.3" class="arc" />
  <text x="210" y="162" class="text-label">10°</text>

  <!-- alpha arc at F -->
  <path d="M 71,184.2 A 15,15 0 0,0 53.4,169.4" class="arc" />
  <text x="65" y="174" class="text-math" fill="#3b82f6">α</text>

  <!-- beta arc at M (right side) -->
  <path d="M 164.8,165.0 A 15,15 0 0,1 164.8,170.2" class="arc" />
  <text x="170" y="172" class="text-math" fill="#3b82f6">β</text>

  <text x="35" y="145" class="text-math">A</text>
  <text x="255" y="145" class="text-math">B</text>
  <text x="40" y="195" class="text-math">F</text>
  <text x="250" y="195" class="text-math">G</text>
</svg>`;

  const docRef = db.collection('questions').doc('y10-13a-q5a');
  await docRef.update({
    'graphData.svg': svgQ5a,
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log('Fixed y10-13a-q5a');
  
  console.log('Syncing chapter index for y10-13a...');
  await touchChapterIndex(db, 'y10-13a'); 
  console.log('Sync complete.');

  process.exit(0);
}

run().catch(console.error);
