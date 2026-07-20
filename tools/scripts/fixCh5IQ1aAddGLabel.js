import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// y8-5i-q1a_alpha & y8-5i-q1a_beta:
// Adding the missing 'G' label at (330, 42) to make the vertex visible.
const updates = {
  'y8-5i-q1a_alpha': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Parallel lines (Top & Bottom) -->
  <line x1="50" y1="130" x2="350" y2="130" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="50" y1="50" x2="350" y2="50" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <!-- Parallel arrows -->
  <path d="M 195 45 L 205 50 L 195 55 Z M 195 125 L 205 130 L 195 135 Z" fill="#475569"/>
  
  <!-- Vertical transversal line FB -->
  <line x1="170" y1="50" x2="170" y2="130" stroke="#475569" stroke-width="2" stroke-dasharray="3,3"/>
  <rect x="170" y="115" width="15" height="15" fill="none" stroke="#64748b" stroke-width="1.5"/>
  
  <!-- Slanted parallel lines AF & CG -->
  <line x1="90" y1="130" x2="170" y2="50" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="250" y1="130" x2="330" y2="50" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <!-- Double tick marks indicating parallel lines (rotated 90 degrees/perpendicular) -->
  <path d="M 122 88 L 132 98 M 128 82 L 138 92" fill="none" stroke="#64748b" stroke-width="2.5"/>
  <path d="M 282 88 L 292 98 M 288 82 L 298 92" fill="none" stroke="#64748b" stroke-width="2.5"/>
  
  <!-- Labels -->
  <text x="170" y="42" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">F</text>
  <text x="170" y="146" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">B</text>
  <text x="85" y="146" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">A</text>
  <text x="250" y="146" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">C</text>
  <text x="330" y="42" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">G</text>
  
  <!-- Angles (tight R=12) -->
  <!-- F: 4alpha -->
  <path d="M 170 62 A 12 12 0 0 1 161 58" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <text x="150" y="74" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="900" font-family="'Outfit'">4α</text>
  
  <!-- C: alpha -->
  <path d="M 262 130 A 12 12 0 0 0 258 122" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <text x="274" y="118" text-anchor="middle" fill="#f43f5e" font-size="14" font-weight="900" font-family="'Outfit'">α</text>
</svg>`,

  'y8-5i-q1a_beta': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Parallel lines (Top & Bottom) -->
  <line x1="50" y1="130" x2="350" y2="130" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="50" y1="50" x2="350" y2="50" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <!-- Parallel arrows -->
  <path d="M 195 45 L 205 50 L 195 55 Z M 195 125 L 205 130 L 195 135 Z" fill="#475569"/>
  
  <!-- Vertical transversal line FB -->
  <line x1="170" y1="50" x2="170" y2="130" stroke="#475569" stroke-width="2" stroke-dasharray="3,3"/>
  <rect x="170" y="115" width="15" height="15" fill="none" stroke="#64748b" stroke-width="1.5"/>
  
  <!-- Slanted parallel lines AF & CG -->
  <line x1="90" y1="130" x2="170" y2="50" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="250" y1="130" x2="330" y2="50" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <!-- Third line FC -->
  <line x1="170" y1="50" x2="250" y2="130" stroke="#f43f5e" stroke-width="1.5" stroke-linecap="round"/>
  
  <!-- Double tick marks indicating parallel lines (rotated 90 degrees/perpendicular) -->
  <path d="M 122 88 L 132 98 M 128 82 L 138 92" fill="none" stroke="#64748b" stroke-width="2.5"/>
  <path d="M 282 88 L 292 98 M 288 82 L 298 92" fill="none" stroke="#64748b" stroke-width="2.5"/>
  
  <!-- Labels -->
  <text x="170" y="42" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">F</text>
  <text x="170" y="146" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">B</text>
  <text x="85" y="146" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">A</text>
  <text x="250" y="146" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">C</text>
  <text x="330" y="42" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">G</text>
  
  <!-- Angles (tight R=12) -->
  <!-- F: 130deg -->
  <path d="M 170 62 A 12 12 0 0 1 158 58" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <text x="145" y="70" text-anchor="middle" fill="#6366f1" font-size="11" font-weight="900" font-family="'Outfit'">130°</text>
  
  <!-- C: beta -->
  <path d="M 238 130 A 12 12 0 0 1 242 122" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <text x="232" y="118" text-anchor="middle" fill="#f43f5e" font-size="12" font-weight="900" font-family="'Outfit'">β</text>
  
  <!-- C: alpha -->
  <path d="M 262 130 A 12 12 0 0 0 258 122" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <text x="270" y="122" text-anchor="middle" fill="#f43f5e" font-size="12" font-weight="900" font-family="'Outfit'">α</text>
</svg>`
};

async function run() {
  const batch = db.batch();

  for (const [id, html] of Object.entries(updates)) {
    console.log(`Adding missing G label for: ${id}`);
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
  console.log('Successfully added missing G label!');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
