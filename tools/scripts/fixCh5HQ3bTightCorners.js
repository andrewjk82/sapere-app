import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// y8-5h-q3b:
// 1. Correct A and C red arcs to curve inwards at tight radius 16.
// 2. Raise the blue arc at B closer to the corner using radius 16.
const updates = {
  'y8-5h-q3b': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Triangle sides -->
  <line x1="80" y1="130" x2="320" y2="130" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="100" y1="130" x2="200" y2="50" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="200" y1="50" x2="300" y2="130" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <!-- Labels -->
  <text x="85" y="135" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">A</text>
  <text x="200" y="35" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">B</text>
  <text x="315" y="135" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">C</text>
  
  <!-- Angles (tight corners at r=16) -->
  <!-- A: alpha (sweep-flag 0 curves inwards) -->
  <path d="M 116 130 A 16 16 0 0 0 113 120" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <text x="123" y="124" text-anchor="middle" fill="#f43f5e" font-size="15" font-weight="900" font-family="'Outfit'">α</text>
  
  <!-- B: 50deg (raised closer to corner, r=16, sweep-flag 0) -->
  <path d="M 187 60 A 16 16 0 0 0 213 60" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <text x="200" y="68" text-anchor="middle" fill="#6366f1" font-size="11" font-weight="900" font-family="'Outfit'">50°</text>
  
  <!-- C: alpha (sweep-flag 1 curves inwards) -->
  <path d="M 284 130 A 16 16 0 0 1 287 120" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <text x="277" y="124" text-anchor="middle" fill="#f43f5e" font-size="15" font-weight="900" font-family="'Outfit'">α</text>
</svg>`
};

async function run() {
  const batch = db.batch();

  for (const [id, html] of Object.entries(updates)) {
    console.log(`Updating triangle sweep flags and tight arcs for: ${id}`);
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
  console.log('Successfully completed Q3B tight corner and sweep corrections!');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
