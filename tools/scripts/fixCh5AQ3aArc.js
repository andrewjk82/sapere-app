import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// Build corrected SVG for y8-5a-q3a
// The red arc (α) must connect (175, 130) on the left to (211.7, 108) on the ray BE.
// Path: M 175 130 A 25 25 0 0 1 211.7 108
const cleanHtmlQ3a = `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Straight line -->
  <line x1="50" y1="130" x2="350" y2="130" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <!-- Ray BE at 62deg -->
  <line x1="200" y1="130" x2="252" y2="33" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <!-- Angle Arcs -->
  <!-- 62deg (right, radius 30) -->
  <path d="M 230 130 A 30 30 0 0 0 214.1 103.5" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <!-- alpha (left, radius 25, connects horizontal left to the ray BE) -->
  <path d="M 175 130 A 25 25 0 0 1 211.7 108" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  
  <!-- Vertices -->
  <circle cx="200" cy="130" r="5.5" fill="#3b82f6" stroke="#fff" stroke-width="1.5"/>
  <circle cx="50" cy="130" r="4.5" fill="#64748b" stroke="#fff" stroke-width="1"/>
  <circle cx="350" cy="130" r="4.5" fill="#64748b" stroke="#fff" stroke-width="1"/>
  <circle cx="252" cy="33" r="4.5" fill="#64748b" stroke="#fff" stroke-width="1"/>
  
  <!-- Labels -->
  <text x="200" y="152" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">B</text>
  <text x="50" y="152" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">A</text>
  <text x="350" y="152" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">C</text>
  <text x="260" y="25" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">E</text>
  
  <!-- Angles -->
  <text x="245" y="120" text-anchor="middle" fill="#6366f1" font-size="13" font-weight="900" font-family="'Outfit'">62°</text>
  <text x="162" y="112" text-anchor="middle" fill="#f43f5e" font-size="16" font-weight="900" font-family="'Outfit'">α</text>
</svg>`;

async function run() {
  console.log('Updating y8-5a-q3a graph arcs...');
  await db.collection('questions').doc('y8-5a-q3a').update({
    'graphData.html': cleanHtmlQ3a
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
