import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// y8-5i-q1b_alpha:
// Move red arc to the obtuse angle sector on the left of the transversal.
// Start (95, 130), End (142, 119), sweep-flag 0.
const updates = {
  'y8-5i-q1b_alpha': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Parallel lines -->
  <line x1="50" y1="130" x2="350" y2="130" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="50" y1="50" x2="350" y2="50" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <path d="M 195 45 L 205 50 L 195 55 Z M 195 125 L 205 130 L 195 135 Z" fill="#475569"/>
  
  <!-- Transversal -->
  <line x1="120" y1="130" x2="280" y2="50" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <!-- Angles (large R=25) -->
  <!-- Top: 76deg (curves inwards with sweep-flag 1) -->
  <path d="M 255 50 A 25 25 0 0 1 258 61" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <text x="242" y="66" text-anchor="middle" fill="#6366f1" font-size="11" font-weight="900" font-family="'Outfit'">76°</text>
  
  <!-- Bottom: alpha (moved to obtuse/wide angle sector on the left, curves inwards with sweep-flag 0) -->
  <path d="M 95 130 A 25 25 0 0 0 142 119" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <text x="114" y="112" text-anchor="middle" fill="#f43f5e" font-size="14" font-weight="900" font-family="'Outfit'">α</text>
</svg>`
};

async function run() {
  const batch = db.batch();

  for (const [id, html] of Object.entries(updates)) {
    console.log(`Updating Q1b_alpha to obtuse angle sector: ${id}`);
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
  console.log('Successfully moved alpha arc to the obtuse angle sector!');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
