import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// y8-5i-q1b_beta:
// 1. Re-layout the entire diagram to use a 45-degree slanted line for maximum clarity.
// 2. Draw three concentric arcs of different radii (R=16, 24, 32) for the trisected beta angle.
// 3. Position the three beta labels next to their respective arcs.
// 4. Invert and adjust the top 108-degree arc and label.
const updates = {
  'y8-5i-q1b_beta': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Parallel lines -->
  <line x1="50" y1="140" x2="350" y2="140" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="50" y1="40" x2="350" y2="40" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <path d="M 195 35 L 205 40 L 195 45 Z M 195 135 L 205 140 L 195 145 Z" fill="#475569"/>
  
  <!-- Transversal and dividing rays (Vertex at 100, 140) -->
  <line x1="100" y1="140" x2="200" y2="40" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="100" y1="140" x2="230" y2="65" stroke="#64748b" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="100" y1="140" x2="255" y2="99" stroke="#64748b" stroke-width="1.5" stroke-linecap="round"/>
  
  <!-- Angles (Top: 108deg, R=25, curves inwards with sweep-flag 1) -->
  <path d="M 175 40 A 25 25 0 0 1 182 58" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <text x="168" y="66" text-anchor="middle" fill="#6366f1" font-size="11" font-weight="900" font-family="'Outfit'">108°</text>
  
  <!-- Bottom: 3 Concentric beta Arcs (R=16, 24, 32) and labels offset for readability -->
  <!-- Sector 1: Ray 0 to Ray 1 (R=16) -->
  <path d="M 116 140 A 16 16 0 0 0 115 136" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <text x="124" y="139" text-anchor="middle" fill="#f43f5e" font-size="11" font-weight="900" font-family="'Outfit'">β</text>
  
  <!-- Sector 2: Ray 1 to Ray 2 (R=24) -->
  <path d="M 123 134 A 24 24 0 0 0 121 128" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <text x="131" y="130" text-anchor="middle" fill="#f43f5e" font-size="11" font-weight="900" font-family="'Outfit'">β</text>
  
  <!-- Sector 3: Ray 2 to Ray 3 (R=32) -->
  <path d="M 128 124 A 32 32 0 0 0 123 117" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <text x="133" y="117" text-anchor="middle" fill="#f43f5e" font-size="11" font-weight="900" font-family="'Outfit'">β</text>
</svg>`
};

async function run() {
  const batch = db.batch();

  for (const [id, html] of Object.entries(updates)) {
    console.log(`Setting concentric readability updates for: ${id}`);
    const docRef = db.collection('questions').doc(id);
    batch.update(docRef, {
      'graphData.html': html
    });
  }

  // Update sync version
  const questionsMetaRef = db.doc('sync_meta/questions');
  const now = Date.now();
  batch.update(questionsMetaRef, {
    version: now,
    membershipVersion: now,
    updatedAt: FieldValue.serverTimestamp()
  });

  await batch.commit();
  console.log('Successfully completed Q1b concentric beta readability overhaul!');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
