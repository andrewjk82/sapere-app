import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// y8-5h-q2d_alpha and beta:
// Correcting Q (alpha) and R (beta) arcs.
const updates = {
  'y8-5h-q2d_alpha': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Triangle sides and extended line -->
  <line x1="100" y1="130" x2="350" y2="130" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="200" y1="40" x2="140" y2="130" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="200" y1="40" x2="260" y2="130" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <!-- Equal side ticks -->
  <path d="M 166,80 L 174,90" stroke="#475569" stroke-width="2"/>
  <path d="M 234,80 L 226,90" stroke="#475569" stroke-width="2"/>
  
  <!-- Labels -->
  <text x="200" y="25" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">P</text>
  <text x="130" y="150" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">Q</text>
  <text x="260" y="150" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">R</text>
  <text x="350" y="150" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">S</text>
  
  <!-- Angles -->
  <!-- P: 40deg (radius 20) -->
  <path d="M 189 57 A 20 20 0 0 0 211 57" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <text x="200" y="72" text-anchor="middle" fill="#6366f1" font-size="11" font-weight="900" font-family="'Outfit'">40°</text>
  
  <!-- Q: alpha (curves inwards with sweep-flag 1) -->
  <path d="M 152 112 A 22 22 0 0 1 162 130" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <text x="165" y="118" text-anchor="middle" fill="#f43f5e" font-size="15" font-weight="900" font-family="'Outfit'">α</text>
</svg>`,

  'y8-5h-q2d_beta': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Triangle sides and extended line -->
  <line x1="100" y1="130" x2="350" y2="130" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="200" y1="40" x2="140" y2="130" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="200" y1="40" x2="260" y2="130" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <!-- Labels -->
  <text x="200" y="25" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">P</text>
  <text x="130" y="150" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">Q</text>
  <text x="260" y="150" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">R</text>
  <text x="350" y="150" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">S</text>
  
  <!-- Angles -->
  <!-- R interior: alpha = 70deg -->
  <text x="240" y="122" text-anchor="middle" fill="#6366f1" font-size="12" font-weight="900" font-family="'Outfit'">70°</text>
  
  <!-- R exterior: beta (from slanted side PR (248, 112) to extended side RS (282, 130)) -->
  <path d="M 248 112 A 22 22 0 0 1 282 130" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <text x="278" y="112" text-anchor="middle" fill="#f43f5e" font-size="15" font-weight="900" font-family="'Outfit'">β</text>
</svg>`
};

async function run() {
  const batch = db.batch();

  for (const [id, html] of Object.entries(updates)) {
    console.log(`Updating y8-5h-q2d arcs for: ${id}`);
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
  console.log('Successfully refined y8-5h-q2d arcs on Firestore!');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
