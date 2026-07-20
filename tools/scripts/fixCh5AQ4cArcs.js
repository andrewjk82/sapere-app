import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// Build corrected SVG for y8-5a-q4c
// Adjacent angles (0-45, 45-90, 90-135, 135-180) should have the exact same radius 30
// to form a perfect, unified semicircle.
const cleanHtmlQ4c = `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Straight line -->
  <line x1="50" y1="130" x2="350" y2="130" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <!-- 45deg ray -->
  <line x1="200" y1="130" x2="285" y2="45" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <!-- 90deg ray -->
  <line x1="200" y1="130" x2="200" y2="30" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <!-- 135deg ray -->
  <line x1="200" y1="130" x2="115" y2="45" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <!-- Symmetrical Angle Arcs (uniform radius 30) -->
  <path d="M 230 130 A 30 30 0 0 0 221.2 108.8" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <path d="M 221.2 108.8 A 30 30 0 0 0 200 100" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <path d="M 200 100 A 30 30 0 0 0 178.8 108.8" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <path d="M 178.8 108.8 A 30 30 0 0 0 170 130" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  
  <!-- Vertices -->
  <circle cx="200" cy="130" r="5.5" fill="#3b82f6" stroke="#fff" stroke-width="1.5"/>
  <circle cx="50" cy="130" r="4.5" fill="#64748b" stroke="#fff" stroke-width="1"/>
  <circle cx="350" cy="130" r="4.5" fill="#64748b" stroke="#fff" stroke-width="1"/>
  
  <!-- Labels -->
  <text x="200" y="152" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">O</text>
  
  <!-- Angles (symmetrically positioned outside the radius 30 arcs) -->
  <text x="242" y="115" text-anchor="middle" fill="#f43f5e" font-size="15" font-weight="900" font-family="'Outfit'">α</text>
  <text x="217" y="92" text-anchor="middle" fill="#f43f5e" font-size="15" font-weight="900" font-family="'Outfit'">α</text>
  <text x="183" y="92" text-anchor="middle" fill="#f43f5e" font-size="15" font-weight="900" font-family="'Outfit'">α</text>
  <text x="158" y="115" text-anchor="middle" fill="#f43f5e" font-size="15" font-weight="900" font-family="'Outfit'">α</text>
</svg>`;

async function run() {
  console.log('Updating y8-5a-q4c graph with symmetrical arcs...');
  await db.collection('questions').doc('y8-5a-q4c').update({
    'graphData.html': cleanHtmlQ4c
  });

  // Update sync version
  const questionsMetaRef = db.doc('sync_meta/questions');
  const now = Date.now();
  await questionsMetaRef.update({
    version: now,
    membershipVersion: now,
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log('Done!');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
