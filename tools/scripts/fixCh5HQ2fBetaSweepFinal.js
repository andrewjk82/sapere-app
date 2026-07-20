import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// y8-5h-q2f_beta:
// Setting R (beta) sweep-flag to 1 so it wraps through the top (270deg is clockwise/upwards in SVG y-down).
const updates = {
  'y8-5h-q2f_beta': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Right-angle triangle and extension line -->
  <line x1="80" y1="130" x2="350" y2="130" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="120" y1="130" x2="120" y2="30" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="120" y1="30" x2="270" y2="130" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <!-- Right angle box at Q -->
  <rect x="120" y="115" width="15" height="15" fill="none" stroke="#64748b" stroke-width="1.5"/>
  
  <!-- Labels -->
  <text x="120" y="20" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">P</text>
  <text x="105" y="145" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">Q</text>
  <text x="270" y="145" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">R</text>
  <text x="350" y="145" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">S</text>
  
  <!-- Angles -->
  <!-- R interior: alpha = 30deg -->
  <text x="240" y="122" text-anchor="middle" fill="#6366f1" font-size="12" font-weight="900" font-family="'Outfit'">30°</text>
  
  <!-- R exterior: beta (perfectly matched at r=22, curves inwards/upwards with sweep-flag 1) -->
  <path d="M 252 118 A 22 22 0 0 1 292 130" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <text x="284" y="108" text-anchor="middle" fill="#f43f5e" font-size="15" font-weight="900" font-family="'Outfit'">β</text>
</svg>`
};

async function run() {
  const batch = db.batch();

  for (const [id, html] of Object.entries(updates)) {
    console.log(`Setting triangle B sweep flag to 1 for: ${id}`);
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
  console.log('Successfully completed Q2F beta arc correction!');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
