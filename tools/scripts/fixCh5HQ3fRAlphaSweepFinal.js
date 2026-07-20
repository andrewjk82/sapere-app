import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// y8-5h-q3f:
// Change R (alpha) sweep-flag to 1 so it curves inwards correctly.
const updates = {
  'y8-5h-q3f': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Trapezium sides -->
  <polygon points="80,140 140,50 260,50 320,140" fill="none" stroke="#475569" stroke-width="2.5" stroke-linejoin="round"/>
  
  <!-- Parallel line arrows on PQ and SR -->
  <path d="M 195,50 L 205,45 L 205,55 Z M 195,140 L 205,135 L 205,145 Z" fill="#475569"/>
  
  <!-- Labels -->
  <text x="65" y="145" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">S</text>
  <text x="130" y="40" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">P</text>
  <text x="270" y="40" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">Q</text>
  <text x="335" y="145" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">R</text>
  
  <!-- Angles (tight corners at R=12) -->
  <!-- S: 65deg -->
  <path d="M 92 140 A 12 12 0 0 0 86 130" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <text x="98" y="128" text-anchor="middle" fill="#6366f1" font-size="10" font-weight="900" font-family="'Outfit'">65°</text>
  
  <!-- P: 115deg -->
  <path d="M 135 58 A 12 12 0 0 0 152 50" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <text x="144" y="65" text-anchor="middle" fill="#6366f1" font-size="10" font-weight="900" font-family="'Outfit'">115°</text>
  
  <!-- Q: 100deg -->
  <path d="M 248 50 A 12 12 0 0 0 265 58" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <text x="256" y="65" text-anchor="middle" fill="#6366f1" font-size="10" font-weight="900" font-family="'Outfit'">100°</text>
  
  <!-- R: alpha (sweep-flag changed to 1 to curve inwards) -->
  <path d="M 308 140 A 12 12 0 0 1 314 130" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <text x="301" y="128" text-anchor="middle" fill="#f43f5e" font-size="14" font-weight="900" font-family="'Outfit'">α</text>
</svg>`
};

async function run() {
  const batch = db.batch();

  for (const [id, html] of Object.entries(updates)) {
    console.log(`Setting corrected R sweep flag to 1 for: ${id}`);
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
  console.log('Successfully completed Q3F final R sweep flag correction!');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
