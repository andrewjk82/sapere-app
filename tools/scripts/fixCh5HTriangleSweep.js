import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// y8-5h-q2e_alpha and beta:
// Correcting sweep flags to curve inwards.
const updates = {
  'y8-5h-q2e_alpha': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Right-angle triangle and extension line -->
  <line x1="100" y1="130" x2="350" y2="130" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="150" y1="130" x2="150" y2="30" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="150" y1="30" x2="250" y2="130" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <!-- Right angle box at C -->
  <rect x="150" y="115" width="15" height="15" fill="none" stroke="#64748b" stroke-width="1.5"/>
  
  <!-- Ticks on CA and CB -->
  <path d="M 145,75 L 155,85" stroke="#475569" stroke-width="2"/>
  <path d="M 195,125 L 205,135" stroke="#475569" stroke-width="2"/>
  
  <!-- Labels -->
  <text x="150" y="20" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">A</text>
  <text x="135" y="145" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">C</text>
  <text x="250" y="145" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">B</text>
  
  <!-- Angles -->
  <!-- A: alpha (sweep-flag 0 curves inward) -->
  <path d="M 150 48 A 18 18 0 0 0 163 43" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <text x="160" y="58" text-anchor="middle" fill="#f43f5e" font-size="15" font-weight="900" font-family="'Outfit'">α</text>
</svg>`,

  'y8-5h-q2e_beta': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Right-angle triangle and extension line -->
  <line x1="100" y1="130" x2="350" y2="130" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="150" y1="130" x2="150" y2="30" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="150" y1="30" x2="250" y2="130" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <!-- Right angle box at C -->
  <rect x="150" y="115" width="15" height="15" fill="none" stroke="#64748b" stroke-width="1.5"/>
  
  <!-- Ticks on CA and CB -->
  <path d="M 145,75 L 155,85" stroke="#475569" stroke-width="2"/>
  <path d="M 195,125 L 205,135" stroke="#475569" stroke-width="2"/>
  
  <!-- Labels -->
  <text x="150" y="20" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">A</text>
  <text x="135" y="145" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">C</text>
  <text x="250" y="145" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">B</text>
  
  <!-- Angles -->
  <!-- B: beta (sweep-flag 0 curves inward) -->
  <path d="M 232 130 A 18 18 0 0 0 237 117" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <text x="228" y="114" text-anchor="middle" fill="#f43f5e" font-size="15" font-weight="900" font-family="'Outfit'">β</text>
</svg>`
};

async function run() {
  const batch = db.batch();

  for (const [id, html] of Object.entries(updates)) {
    console.log(`Updating triangle sweep flags for: ${id}`);
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
  console.log('Successfully corrected triangle sweep flags on Firestore!');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
