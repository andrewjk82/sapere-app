import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// y8-5h-q3a:
// 1. Move all blue arcs closer (radius 16 instead of 22) and make sure they touch the boundary lines exactly.
// 2. Invert red arc C (gamma) sweep-flag to 0 and match radius 16 to curve inwards.
const updates = {
  'y8-5h-q3a': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Quadrilateral sides -->
  <polygon points="90,140 120,40 280,40 250,140" fill="none" stroke="#475569" stroke-width="2.5" stroke-linejoin="round"/>
  
  <!-- Labels -->
  <text x="75" y="145" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">A</text>
  <text x="110" y="32" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">B</text>
  <text x="290" y="32" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">C</text>
  <text x="265" y="145" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">D</text>
  
  <!-- Angles (perfectly calculated at r=16 for maximum elegance & tight corners) -->
  <!-- A: 65deg (sweep-flag 0 curves inwards) -->
  <path d="M 106 140 A 16 16 0 0 0 95 125" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <text x="110" y="125" text-anchor="middle" fill="#6366f1" font-size="11" font-weight="900" font-family="'Outfit'">65°</text>
  
  <!-- B: 120deg (sweep-flag 1 curves inwards) -->
  <path d="M 136 40 A 16 16 0 0 1 115 55" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <text x="136" y="64" text-anchor="middle" fill="#6366f1" font-size="11" font-weight="900" font-family="'Outfit'">120°</text>
  
  <!-- C: gamma (sweep-flag 0 curves inwards at r=16) -->
  <path d="M 264 40 A 16 16 0 0 0 275 55" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <text x="259" y="58" text-anchor="middle" fill="#f43f5e" font-size="15" font-weight="900" font-family="'Outfit'">γ</text>
  
  <!-- D: 70deg (sweep-flag 1 curves inwards) -->
  <path d="M 234 140 A 16 16 0 0 1 255 125" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <text x="234" y="122" text-anchor="middle" fill="#6366f1" font-size="11" font-weight="900" font-family="'Outfit'">70°</text>
</svg>`
};

async function run() {
  const batch = db.batch();

  for (const [id, html] of Object.entries(updates)) {
    console.log(`Updating quadrilateral sweep flags and uniform arcs for: ${id}`);
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
  console.log('Successfully completed Q3A tight corner and sweep corrections!');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
