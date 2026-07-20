import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// We will update y8-5h-q2a_alpha, beta, gamma with perfectly matching arc coordinates
const updates = {
  'y8-5h-q2a_alpha': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Parallelogram sides -->
  <polygon points="100,140 140,50 300,50 260,140" fill="none" stroke="#475569" stroke-width="2.5" stroke-linejoin="round"/>
  
  <!-- Parallel line arrows -->
  <!-- AB and DC (single arrow) -->
  <path d="M 122 105 L 118 95 L 128 99" fill="none" stroke="#475569" stroke-width="2" stroke-linejoin="round"/>
  <path d="M 282 105 L 278 95 L 288 99" fill="none" stroke="#475569" stroke-width="2" stroke-linejoin="round"/>
  
  <!-- Vertices circles -->
  <circle cx="100" cy="140" r="4.5" fill="#64748b" stroke="#fff" stroke-width="1"/>
  <circle cx="140" cy="50" r="4.5" fill="#64748b" stroke="#fff" stroke-width="1"/>
  <circle cx="300" cy="50" r="4.5" fill="#64748b" stroke="#fff" stroke-width="1"/>
  <circle cx="260" cy="140" r="4.5" fill="#64748b" stroke="#fff" stroke-width="1"/>
  
  <!-- Labels -->
  <text x="85" y="145" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">A</text>
  <text x="130" y="40" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">B</text>
  <text x="315" y="45" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">C</text>
  <text x="275" y="145" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">D</text>
  
  <!-- Angles (perfectly calculated arcs & labels) -->
  <!-- A: 40deg -->
  <path d="M 109 120 A 22 22 0 0 0 122 140" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <text x="127" y="123" text-anchor="middle" fill="#6366f1" font-size="12" font-weight="900" font-family="'Outfit'">40°</text>
  
  <!-- B: alpha -->
  <path d="M 162 50 A 22 22 0 0 1 131 70" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <text x="156" y="80" text-anchor="middle" fill="#f43f5e" font-size="15" font-weight="900" font-family="'Outfit'">α</text>
</svg>`,

  'y8-5h-q2a_beta': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Parallelogram sides -->
  <polygon points="100,140 140,50 300,50 260,140" fill="none" stroke="#475569" stroke-width="2.5" stroke-linejoin="round"/>
  
  <!-- Vertices circles -->
  <circle cx="100" cy="140" r="4.5" fill="#64748b" stroke="#fff" stroke-width="1"/>
  <circle cx="140" cy="50" r="4.5" fill="#64748b" stroke="#fff" stroke-width="1"/>
  <circle cx="300" cy="50" r="4.5" fill="#64748b" stroke="#fff" stroke-width="1"/>
  <circle cx="260" cy="140" r="4.5" fill="#64748b" stroke="#fff" stroke-width="1"/>
  
  <!-- Labels -->
  <text x="85" y="145" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">A</text>
  <text x="130" y="40" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">B</text>
  <text x="315" y="45" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">C</text>
  <text x="275" y="145" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">D</text>
  
  <!-- Angles -->
  <!-- A: 40deg -->
  <path d="M 109 120 A 22 22 0 0 0 122 140" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <text x="127" y="123" text-anchor="middle" fill="#6366f1" font-size="12" font-weight="900" font-family="'Outfit'">40°</text>
  
  <!-- C: beta -->
  <path d="M 278 50 A 22 22 0 0 0 291 70" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <text x="273" y="67" text-anchor="middle" fill="#f43f5e" font-size="15" font-weight="900" font-family="'Outfit'">β</text>
</svg>`,

  'y8-5h-q2a_gamma': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Parallelogram sides -->
  <polygon points="100,140 140,50 300,50 260,140" fill="none" stroke="#475569" stroke-width="2.5" stroke-linejoin="round"/>
  
  <!-- Vertices circles -->
  <circle cx="100" cy="140" r="4.5" fill="#64748b" stroke="#fff" stroke-width="1"/>
  <circle cx="140" cy="50" r="4.5" fill="#64748b" stroke="#fff" stroke-width="1"/>
  <circle cx="300" cy="50" r="4.5" fill="#64748b" stroke="#fff" stroke-width="1"/>
  <circle cx="260" cy="140" r="4.5" fill="#64748b" stroke="#fff" stroke-width="1"/>
  
  <!-- Labels -->
  <text x="85" y="145" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">A</text>
  <text x="130" y="40" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">B</text>
  <text x="315" y="45" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">C</text>
  <text x="275" y="145" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">D</text>
  
  <!-- Angles -->
  <!-- A: 40deg -->
  <path d="M 109 120 A 22 22 0 0 0 122 140" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <text x="127" y="123" text-anchor="middle" fill="#6366f1" font-size="12" font-weight="900" font-family="'Outfit'">40°</text>
  
  <!-- D: gamma -->
  <path d="M 238 140 A 22 22 0 0 1 269 120" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <text x="241" y="111" text-anchor="middle" fill="#f43f5e" font-size="15" font-weight="900" font-family="'Outfit'">γ</text>
</svg>`
};

async function run() {
  const batch = db.batch();

  for (const [id, html] of Object.entries(updates)) {
    console.log(`Applying refined parallelogram arcs to: ${id}`);
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
  console.log('Successfully refined all parallelogram geometries on Firestore!');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
