import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// y8-5i-q1b_alpha & y8-5i-q1b_gamma:
// 1. Changing top 76deg sweep-flag to 1 to curve inwards.
// 2. Changing bottom alpha/gamma sweep-flag to 1 to curve inwards.
const updates = {
  'y8-5i-q1b_alpha': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Parallel lines -->
  <line x1="50" y1="130" x2="350" y2="130" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="50" y1="50" x2="350" y2="50" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <path d="M 195 45 L 205 50 L 195 55 Z M 195 125 L 205 130 L 195 135 Z" fill="#475569"/>
  
  <!-- Transversal -->
  <line x1="120" y1="130" x2="280" y2="50" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <!-- Angles (tight R=12) -->
  <!-- Top: 76deg (sweep flag changed to 1 to curve inwards) -->
  <path d="M 268 50 A 12 12 0 0 1 256 56" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <text x="250" y="66" text-anchor="middle" fill="#6366f1" font-size="11" font-weight="900" font-family="'Outfit'">76°</text>
  
  <!-- Bottom: alpha (sweep flag changed to 1 to curve inwards) -->
  <path d="M 132 130 A 12 12 0 0 1 144 124" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <text x="150" y="118" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="900" font-family="'Outfit'">α</text>
</svg>`,

  'y8-5i-q1b_gamma': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Parallel lines -->
  <line x1="50" y1="130" x2="350" y2="130" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="50" y1="50" x2="350" y2="50" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <path d="M 195 45 L 205 50 L 195 55 Z M 195 125 L 205 130 L 195 135 Z" fill="#475569"/>
  
  <!-- Transversal -->
  <line x1="120" y1="130" x2="280" y2="50" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <!-- Angles (tight R=12) -->
  <!-- Top: 76deg (sweep flag changed to 1 to curve inwards) -->
  <path d="M 268 50 A 12 12 0 0 1 256 56" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <text x="250" y="66" text-anchor="middle" fill="#6366f1" font-size="11" font-weight="900" font-family="'Outfit'">76°</text>
  
  <!-- Bottom: gamma (sweep flag is 1 to curve inwards) -->
  <path d="M 132 130 A 12 12 0 0 1 144 124" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <text x="148" y="120" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="900" font-family="'Outfit'">γ</text>
</svg>`
};

async function run() {
  const batch = db.batch();

  for (const [id, html] of Object.entries(updates)) {
    console.log(`Setting corrected Q1b sweep flags to 1 for: ${id}`);
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
  console.log('Successfully completed Q1b arc sweep flag corrections!');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
