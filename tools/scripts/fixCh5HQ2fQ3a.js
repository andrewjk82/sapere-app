import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// Updates:
// 1. y8-5h-q2f_beta: Change beta (R exterior) sweep-flag to 0.
// 2. y8-5h-q3a: Correct C (gamma) arc coordinates to touch boundaries and curve inwards (sweep-flag 1).
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
  
  <!-- R exterior: beta (curves inwards with sweep-flag 0) -->
  <path d="M 252 118 A 22 22 0 0 0 292 130" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <text x="284" y="108" text-anchor="middle" fill="#f43f5e" font-size="15" font-weight="900" font-family="'Outfit'">β</text>
</svg>`,

  'y8-5h-q3a': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Quadrilateral sides -->
  <polygon points="90,140 120,40 280,40 250,140" fill="none" stroke="#475569" stroke-width="2.5" stroke-linejoin="round"/>
  
  <!-- Labels -->
  <text x="75" y="145" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">A</text>
  <text x="110" y="32" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">B</text>
  <text x="290" y="32" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">C</text>
  <text x="265" y="145" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">D</text>
  
  <!-- Angles (radius 22) -->
  <!-- A: 65deg -->
  <path d="M 112 135 A 22 22 0 0 0 99 119" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <text x="115" y="123" text-anchor="middle" fill="#6366f1" font-size="11" font-weight="900" font-family="'Outfit'">65°</text>
  
  <!-- B: 120deg -->
  <path d="M 111 60 A 22 22 0 0 0 138 48" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <text x="127" y="65" text-anchor="middle" fill="#6366f1" font-size="11" font-weight="900" font-family="'Outfit'">120°</text>
  
  <!-- C: gamma (curves inwards with sweep-flag 1, perfect concentric points r=22) -->
  <path d="M 258 40 A 22 22 0 0 1 274 61" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <text x="254" y="66" text-anchor="middle" fill="#f43f5e" font-size="15" font-weight="900" font-family="'Outfit'">γ</text>
  
  <!-- D: 70deg -->
  <path d="M 241 119 A 22 22 0 0 0 228 135" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <text x="232" y="123" text-anchor="middle" fill="#6366f1" font-size="11" font-weight="900" font-family="'Outfit'">70°</text>
</svg>`
};

async function run() {
  const batch = db.batch();

  for (const [id, html] of Object.entries(updates)) {
    console.log(`Applying corrected sweep flags and coordinates to: ${id}`);
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
  console.log('Successfully completed Q2F and Q3A adjustments!');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
