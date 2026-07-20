import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// y8-5h-q3d:
// Change D (130deg) sweep-flag to 1 so it curves inwards correctly.
const updates = {
  'y8-5h-q3d': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Parallelogram sides -->
  <polygon points="100,140 140,50 300,50 260,140" fill="none" stroke="#475569" stroke-width="2.5" stroke-linejoin="round"/>
  
  <!-- Labels -->
  <text x="85" y="145" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">A</text>
  <text x="130" y="40" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">B</text>
  <text x="315" y="45" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">C</text>
  <text x="275" y="145" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">D</text>
  
  <!-- Angles (tight corners at R=12) -->
  <!-- A: beta -->
  <path d="M 105 129 A 12 12 0 0 1 112 140" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <text x="117" y="125" text-anchor="middle" fill="#f43f5e" font-size="15" font-weight="900" font-family="'Outfit'">β</text>
  
  <!-- B: 130deg -->
  <path d="M 152 50 A 12 12 0 0 1 135 61" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <text x="150" y="68" text-anchor="middle" fill="#6366f1" font-size="10" font-weight="900" font-family="'Outfit'">130°</text>
  
  <!-- C: beta -->
  <path d="M 288 50 A 12 12 0 0 0 295 61" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <text x="281" y="66" text-anchor="middle" fill="#f43f5e" font-size="14" font-weight="900" font-family="'Outfit'">β</text>
  
  <!-- D: 130deg (sweep flag changed to 1 to curve inwards) -->
  <path d="M 248 140 A 12 12 0 0 1 265 129" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <text x="242" y="122" text-anchor="middle" fill="#6366f1" font-size="10" font-weight="900" font-family="'Outfit'">130°</text>
</svg>`
};

async function run() {
  const batch = db.batch();

  for (const [id, html] of Object.entries(updates)) {
    console.log(`Setting corrected D sweep flag to 1 for: ${id}`);
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
  console.log('Successfully completed final D sweep flag correction!');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
