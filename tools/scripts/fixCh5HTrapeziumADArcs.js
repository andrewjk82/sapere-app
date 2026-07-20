import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// y8-5h-q2c_alpha and beta:
// Correcting the A (65deg) and D (55deg) arcs to touch the horizontal lines exactly and curve inwards.
const updates = {
  'y8-5h-q2c_alpha': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Trapezium sides -->
  <polygon points="80,140 130,50 270,50 320,140" fill="none" stroke="#475569" stroke-width="2.5" stroke-linejoin="round"/>
  
  <!-- Parallel line arrows on BC and AD -->
  <path d="M 195,50 L 205,45 L 205,55 Z M 195,140 L 205,135 L 205,145 Z" fill="#475569"/>
  
  <!-- Labels -->
  <text x="65" y="145" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">A</text>
  <text x="120" y="40" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">B</text>
  <text x="280" y="40" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">C</text>
  <text x="335" y="145" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">D</text>
  
  <!-- Angles (perfectly matched & curved inwards) -->
  <!-- A: 65deg (ends exactly at y=140 on AD and y=119 on AB, curves inwards with sweep-flag 0) -->
  <path d="M 104 140 A 24 24 0 0 0 92 119" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <text x="110" y="122" text-anchor="middle" fill="#6366f1" font-size="12" font-weight="900" font-family="'Outfit'">65°</text>
  
  <!-- B: alpha (curves inwards with sweep-flag 0) -->
  <path d="M 120 69 A 22 22 0 0 0 152 50" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <text x="142" y="78" text-anchor="middle" fill="#f43f5e" font-size="15" font-weight="900" font-family="'Outfit'">α</text>
</svg>`,

  'y8-5h-q2c_beta': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Trapezium sides -->
  <polygon points="80,140 130,50 270,50 320,140" fill="none" stroke="#475569" stroke-width="2.5" stroke-linejoin="round"/>
  
  <!-- Parallel line arrows -->
  <path d="M 195,50 L 205,45 L 205,55 Z M 195,140 L 205,135 L 205,145 Z" fill="#475569"/>
  
  <!-- Labels -->
  <text x="65" y="145" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">A</text>
  <text x="120" y="40" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">B</text>
  <text x="280" y="40" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">C</text>
  <text x="335" y="145" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">D</text>
  
  <!-- Angles -->
  <!-- D: 55deg (ends exactly at y=140 on AD and y=119 on CD, curves inwards with sweep-flag 1) -->
  <path d="M 296 140 A 24 24 0 0 1 308 119" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <text x="292" y="122" text-anchor="middle" fill="#6366f1" font-size="12" font-weight="900" font-family="'Outfit'">55°</text>
  
  <!-- C: beta (curves inwards with sweep-flag 0) -->
  <path d="M 258 50 A 22 22 0 0 0 289 70" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <text x="258" y="78" text-anchor="middle" fill="#f43f5e" font-size="15" font-weight="900" font-family="'Outfit'">β</text>
</svg>`
};

async function run() {
  const batch = db.batch();

  for (const [id, html] of Object.entries(updates)) {
    console.log(`Updating trapezium A/D arcs for: ${id}`);
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
  console.log('Successfully refined trapezium A/D arcs on Firestore!');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
