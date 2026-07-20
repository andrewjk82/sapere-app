import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// y8-5i-q1b_beta:
// Removing all angle arc paths completely.
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
  
  <!-- Labels (Arcs removed completely) -->
  <text x="168" y="66" text-anchor="middle" fill="#6366f1" font-size="11" font-weight="900" font-family="'Outfit'">108°</text>
  <text x="124" y="139" text-anchor="middle" fill="#f43f5e" font-size="11" font-weight="900" font-family="'Outfit'">β</text>
  <text x="131" y="130" text-anchor="middle" fill="#f43f5e" font-size="11" font-weight="900" font-family="'Outfit'">β</text>
  <text x="133" y="117" text-anchor="middle" fill="#f43f5e" font-size="11" font-weight="900" font-family="'Outfit'">β</text>
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
  console.log('Successfully completed Q1b_beta arc removal!');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
