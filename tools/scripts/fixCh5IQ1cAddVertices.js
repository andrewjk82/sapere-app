import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// y8-5i-q1c_alpha & y8-5i-q1c_beta:
// Adding vertex labels A, E, F, C to the SVG diagram for perfect reference in the solution steps.
const updates = {
  'y8-5i-q1c_alpha': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Parallel lines -->
  <line x1="50" y1="130" x2="350" y2="130" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="50" y1="50" x2="350" y2="50" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <path d="M 195 45 L 205 50 L 195 55 Z M 195 125 L 205 130 L 195 135 Z" fill="#475569"/>
  
  <!-- Zigzag segments A -> E -> F -> C -->
  <polyline points="90,130 130,90 230,110 260,50" fill="none" stroke="#475569" stroke-width="2.5" stroke-linejoin="round"/>
  
  <!-- Auxiliary horizontal line through E for logical solvability -->
  <line x1="130" y1="90" x2="230" y2="90" stroke="#64748b" stroke-width="1.2" stroke-dasharray="3,3"/>
  <text x="160" y="86" text-anchor="middle" fill="#64748b" font-size="11" font-weight="900" font-family="'Outfit'">30°</text>
  
  <!-- Vertex Labels A, E, F, C -->
  <text x="80" y="146" text-anchor="middle" fill="#1e293b" font-size="13" font-weight="900" font-family="'Outfit'">A</text>
  <text x="130" y="74" text-anchor="middle" fill="#1e293b" font-size="13" font-weight="900" font-family="'Outfit'">E</text>
  <text x="238" y="125" text-anchor="middle" fill="#1e293b" font-size="13" font-weight="900" font-family="'Outfit'">F</text>
  <text x="268" y="42" text-anchor="middle" fill="#1e293b" font-size="13" font-weight="900" font-family="'Outfit'">C</text>
  
  <!-- Angles -->
  <!-- reflex at E: 290deg -->
  <text x="106" y="96" text-anchor="middle" fill="#6366f1" font-size="11" font-weight="900" font-family="'Outfit'">290°</text>
  
  <!-- interior at F: 70deg -->
  <text x="210" y="105" text-anchor="middle" fill="#6366f1" font-size="11" font-weight="900" font-family="'Outfit'">70°</text>
  
  <!-- A: alpha -->
  <text x="108" y="124" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="900" font-family="'Outfit'">α</text>
  
  <!-- C: beta -->
  <text x="246" y="68" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="900" font-family="'Outfit'">β</text>
</svg>`,

  'y8-5i-q1c_beta': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Parallel lines -->
  <line x1="50" y1="130" x2="350" y2="130" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="50" y1="50" x2="350" y2="50" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <path d="M 195 45 L 205 50 L 195 55 Z M 195 125 L 205 130 L 195 135 Z" fill="#475569"/>
  
  <!-- Zigzag segments A -> E -> F -> C -->
  <polyline points="90,130 130,90 230,110 260,50" fill="none" stroke="#475569" stroke-width="2.5" stroke-linejoin="round"/>
  
  <!-- Auxiliary horizontal line through E for logical solvability -->
  <line x1="130" y1="90" x2="230" y2="90" stroke="#64748b" stroke-width="1.2" stroke-dasharray="3,3"/>
  <text x="160" y="86" text-anchor="middle" fill="#64748b" font-size="11" font-weight="900" font-family="'Outfit'">30°</text>
  
  <!-- Vertex Labels A, E, F, C -->
  <text x="80" y="146" text-anchor="middle" fill="#1e293b" font-size="13" font-weight="900" font-family="'Outfit'">A</text>
  <text x="130" y="74" text-anchor="middle" fill="#1e293b" font-size="13" font-weight="900" font-family="'Outfit'">E</text>
  <text x="238" y="125" text-anchor="middle" fill="#1e293b" font-size="13" font-weight="900" font-family="'Outfit'">F</text>
  <text x="268" y="42" text-anchor="middle" fill="#1e293b" font-size="13" font-weight="900" font-family="'Outfit'">C</text>
  
  <!-- Angles -->
  <!-- reflex at E: 290deg -->
  <text x="106" y="96" text-anchor="middle" fill="#6366f1" font-size="11" font-weight="900" font-family="'Outfit'">290°</text>
  
  <!-- interior at F: 70deg -->
  <text x="210" y="105" text-anchor="middle" fill="#6366f1" font-size="11" font-weight="900" font-family="'Outfit'">70°</text>
  
  <!-- A: alpha -->
  <text x="108" y="124" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="900" font-family="'Outfit'">α</text>
  
  <!-- C: beta -->
  <text x="246" y="68" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="900" font-family="'Outfit'">β</text>
</svg>`
};

async function run() {
  const batch = db.batch();

  for (const [id, html] of Object.entries(updates)) {
    console.log(`Adding A, E, F, C vertex labels to: ${id}`);
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
  console.log('Successfully added A, E, F, C vertex labels!');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
