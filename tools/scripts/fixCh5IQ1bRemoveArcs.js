import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// y8-5i-q1b_alpha & y8-5i-q1b_gamma:
// Removing the angle arc paths completely to make the diagram clean and clear.
const updates = {
  'y8-5i-q1b_alpha': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Parallel lines -->
  <line x1="50" y1="130" x2="350" y2="130" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="50" y1="50" x2="350" y2="50" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <path d="M 195 45 L 205 50 L 195 55 Z M 195 125 L 205 130 L 195 135 Z" fill="#475569"/>
  
  <!-- Transversal -->
  <line x1="120" y1="130" x2="280" y2="50" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <!-- Labels -->
  <text x="242" y="66" text-anchor="middle" fill="#6366f1" font-size="13" font-weight="900" font-family="'Outfit'">76°</text>
  <text x="114" y="112" text-anchor="middle" fill="#f43f5e" font-size="15" font-weight="900" font-family="'Outfit'">α</text>
</svg>`,

  'y8-5i-q1b_gamma': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Parallel lines -->
  <line x1="50" y1="130" x2="350" y2="130" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="50" y1="50" x2="350" y2="50" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <path d="M 195 45 L 205 50 L 195 55 Z M 195 125 L 205 130 L 195 135 Z" fill="#475569"/>
  
  <!-- Transversal -->
  <line x1="120" y1="130" x2="280" y2="50" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <!-- Labels -->
  <text x="242" y="66" text-anchor="middle" fill="#6366f1" font-size="13" font-weight="900" font-family="'Outfit'">76°</text>
  <text x="114" y="112" text-anchor="middle" fill="#f43f5e" font-size="15" font-weight="900" font-family="'Outfit'">γ</text>
</svg>`
};

async function run() {
  const batch = db.batch();

  for (const [id, html] of Object.entries(updates)) {
    console.log(`Removing arc path elements for: ${id}`);
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
  console.log('Successfully removed arc path elements from Q1b!');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
