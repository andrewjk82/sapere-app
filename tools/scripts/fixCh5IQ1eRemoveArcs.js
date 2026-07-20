import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// y8-5i-q1e_alpha & y8-5i-q1e_beta:
// Removing all angle arc paths completely.
const updates = {
  'y8-5i-q1e_alpha': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Parallel lines -->
  <line x1="50" y1="130" x2="350" y2="130" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="50" y1="50" x2="350" y2="50" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <path d="M 195 45 L 205 50 L 195 55 Z M 195 125 L 205 130 L 195 135 Z" fill="#475569"/>
  
  <!-- Intersecting transversal lines -->
  <line x1="100" y1="130" x2="250" y2="50" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="300" y1="130" x2="150" y2="50" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <!-- Labels (Arcs removed) -->
  <!-- Top-left: 65deg -->
  <text x="132" y="65" text-anchor="middle" fill="#6366f1" font-size="11" font-weight="900" font-family="'Outfit'">65°</text>
  
  <!-- Top-right: beta -->
  <text x="268" y="65" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="900" font-family="'Outfit'">β</text>
  
  <!-- Bottom-left: 115deg -->
  <text x="86" y="118" text-anchor="middle" fill="#6366f1" font-size="11" font-weight="900" font-family="'Outfit'">115°</text>
  
  <!-- Bottom-right: alpha -->
  <text x="302" y="118" text-anchor="middle" fill="#f43f5e" font-size="14" font-weight="900" font-family="'Outfit'">α</text>
  
  <!-- Small bottom angle: 15deg -->
  <text x="180" y="125" text-anchor="middle" fill="#6366f1" font-size="11" font-weight="900" font-family="'Outfit'">15°</text>
</svg>`,

  'y8-5i-q1e_beta': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Parallel lines -->
  <line x1="50" y1="130" x2="350" y2="130" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="50" y1="50" x2="350" y2="50" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <path d="M 195 45 L 205 50 L 195 55 Z M 195 125 L 205 130 L 195 135 Z" fill="#475569"/>
  
  <!-- Intersecting transversal lines -->
  <line x1="100" y1="130" x2="250" y2="50" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="300" y1="130" x2="150" y2="50" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <!-- Labels (Arcs removed) -->
  <!-- Top-left: 65deg -->
  <text x="132" y="65" text-anchor="middle" fill="#6366f1" font-size="11" font-weight="900" font-family="'Outfit'">65°</text>
  
  <!-- Top-right: beta -->
  <text x="268" y="65" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="900" font-family="'Outfit'">β</text>
  
  <!-- Bottom-left: 115deg -->
  <text x="86" y="118" text-anchor="middle" fill="#6366f1" font-size="11" font-weight="900" font-family="'Outfit'">115°</text>
  
  <!-- Bottom-right: alpha -->
  <text x="302" y="118" text-anchor="middle" fill="#f43f5e" font-size="14" font-weight="900" font-family="'Outfit'">α</text>
  
  <!-- Small bottom angle: 15deg -->
  <text x="180" y="125" text-anchor="middle" fill="#6366f1" font-size="11" font-weight="900" font-family="'Outfit'">15°</text>
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
  console.log('Successfully completed Q1e arc removal!');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
