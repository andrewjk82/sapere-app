import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// y8-5a-q1d: Corrected geometries to match all adjacent rays perfectly at radius 30.
const cleanHtmlQ1d = `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Straight line -->
  <line x1="50" y1="130" x2="350" y2="130" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <!-- Ray 45deg -->
  <line x1="200" y1="130" x2="285" y2="45" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <!-- Ray 145deg (45 + 100) -->
  <line x1="200" y1="130" x2="102" y2="61" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <!-- Continuous Semicircle Arcs (uniform radius 30, perfectly touching all rays) -->
  <!-- 45deg arc (0 to 45) -->
  <path d="M 230 130 A 30 30 0 0 0 221.2 108.8" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <!-- 100deg arc (45 to 145) -->
  <path d="M 221.2 108.8 A 30 30 0 0 0 175.4 112.8" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <!-- x arc (145 to 180) -->
  <path d="M 175.4 112.8 A 30 30 0 0 0 170 130" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  
  <!-- Vertices -->
  <circle cx="200" cy="130" r="5.5" fill="#3b82f6" stroke="#fff" stroke-width="1.5"/>
  <circle cx="50" cy="130" r="4.5" fill="#64748b" stroke="#fff" stroke-width="1"/>
  <circle cx="350" cy="130" r="4.5" fill="#64748b" stroke="#fff" stroke-width="1"/>
  
  <!-- Labels -->
  <text x="200" y="152" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">O</text>
  <text x="350" y="152" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">A</text>
  <text x="105" y="50" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">B</text>
  
  <!-- Angles (positioned close to vertices without overlaps) -->
  <text x="244" y="112" text-anchor="middle" fill="#6366f1" font-size="13" font-weight="900" font-family="'Outfit'">45°</text>
  <text x="196" y="82" text-anchor="middle" fill="#6366f1" font-size="13" font-weight="900" font-family="'Outfit'">100°</text>
  <text x="154" y="116" text-anchor="middle" fill="#f43f5e" font-size="16" font-weight="900" font-family="'Outfit'">x</text>
</svg>`;

async function run() {
  console.log('Updating y8-5a-q1d graph with perfectly matched arcs...');
  await db.collection('questions').doc('y8-5a-q1d').update({
    'graphData.html': cleanHtmlQ1d
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
