import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// y8-5i-q1f_alpha & y8-5i-q1f_beta:
// Removing all angle arc paths completely.
const updates = {
  'y8-5i-q1f_alpha': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Triangle with extended base -->
  <line x1="60" y1="130" x2="340" y2="130" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="90" y1="130" x2="190" y2="50" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="290" y1="130" x2="190" y2="50" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <path d="M 330 125 L 340 130 L 330 135 Z" fill="#475569"/>
  
  <!-- Labels (Arcs removed) -->
  <!-- Top: 2alpha -->
  <text x="190" y="67" text-anchor="middle" fill="#6366f1" font-size="11" font-weight="900" font-family="'Outfit'">2α</text>
  
  <!-- Bottom-left: 3alpha -->
  <text x="114" y="124" text-anchor="middle" fill="#6366f1" font-size="11" font-weight="900" font-family="'Outfit'">3α</text>
  
  <!-- Bottom-right interior: beta -->
  <text x="268" y="124" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="900" font-family="'Outfit'">β</text>
  
  <!-- Bottom-right exterior: 100deg -->
  <text x="314" y="122" text-anchor="middle" fill="#6366f1" font-size="11" font-weight="900" font-family="'Outfit'">100°</text>
</svg>`,

  'y8-5i-q1f_beta': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Triangle with extended base -->
  <line x1="60" y1="130" x2="340" y2="130" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="90" y1="130" x2="190" y2="50" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="290" y1="130" x2="190" y2="50" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <path d="M 330 125 L 340 130 L 330 135 Z" fill="#475569"/>
  
  <!-- Labels (Arcs removed) -->
  <!-- Top: 2alpha -->
  <text x="190" y="67" text-anchor="middle" fill="#6366f1" font-size="11" font-weight="900" font-family="'Outfit'">2α</text>
  
  <!-- Bottom-left: 3alpha -->
  <text x="114" y="124" text-anchor="middle" fill="#6366f1" font-size="11" font-weight="900" font-family="'Outfit'">3α</text>
  
  <!-- Bottom-right interior: beta -->
  <text x="268" y="124" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="900" font-family="'Outfit'">β</text>
  
  <!-- Bottom-right exterior: 100deg -->
  <text x="314" y="122" text-anchor="middle" fill="#6366f1" font-size="11" font-weight="900" font-family="'Outfit'">100°</text>
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
  console.log('Successfully completed Q1f arc removal!');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
