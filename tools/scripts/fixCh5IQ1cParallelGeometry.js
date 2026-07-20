import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// y8-5i-q1c_alpha & y8-5i-q1c_beta:
// 1. Redraw diagram coordinates so AE and FC are EXACTLY parallel (both having slope -1/45°).
//    A(90, 130), E(130, 90), F(220, 115), C(285, 50).
// 2. Put parallel tick marks back on AE and FC for complete clarity.
// 3. Rewrite solution steps to be mathematically clean, solving alpha directly at E without variable cancellation.
const updates = {
  'y8-5i-q1c_alpha': {
    html: `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Parallel lines (Top & Bottom) -->
  <line x1="50" y1="130" x2="350" y2="130" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="50" y1="50" x2="350" y2="50" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <path d="M 195 45 L 205 50 L 195 55 Z M 195 125 L 205 130 L 195 135 Z" fill="#475569"/>
  
  <!-- Zigzag segments A(90,130) -> E(130,90) -> F(220,115) -> C(285,50) -->
  <polyline points="90,130 130,90 220,115 285,50" fill="none" stroke="#475569" stroke-width="2.5" stroke-linejoin="round"/>
  
  <!-- Double tick marks indicating AE || FC (exactly parallel at slope -1/45°) -->
  <path d="M 106 114 L 114 106 M 110 118 L 118 110" fill="none" stroke="#64748b" stroke-width="2"/>
  <path d="M 248 87 L 256 79 M 252 91 L 260 83" fill="none" stroke="#64748b" stroke-width="2"/>
  
  <!-- Auxiliary horizontal line through E -->
  <line x1="130" y1="90" x2="230" y2="90" stroke="#64748b" stroke-width="1.2" stroke-dasharray="3,3"/>
  <text x="160" y="86" text-anchor="middle" fill="#64748b" font-size="11" font-weight="900" font-family="'Outfit'">30°</text>
  
  <!-- Vertex Labels A, E, F, C -->
  <text x="80" y="146" text-anchor="middle" fill="#1e293b" font-size="13" font-weight="900" font-family="'Outfit'">A</text>
  <text x="130" y="74" text-anchor="middle" fill="#1e293b" font-size="13" font-weight="900" font-family="'Outfit'">E</text>
  <text x="228" y="130" text-anchor="middle" fill="#1e293b" font-size="13" font-weight="900" font-family="'Outfit'">F</text>
  <text x="293" y="42" text-anchor="middle" fill="#1e293b" font-size="13" font-weight="900" font-family="'Outfit'">C</text>
  
  <!-- Angles -->
  <!-- reflex at E: 290deg -->
  <text x="106" y="96" text-anchor="middle" fill="#6366f1" font-size="11" font-weight="900" font-family="'Outfit'">290°</text>
  
  <!-- interior at F: 70deg -->
  <text x="210" y="105" text-anchor="middle" fill="#6366f1" font-size="11" font-weight="900" font-family="'Outfit'">70°</text>
  
  <!-- A: alpha -->
  <text x="108" y="124" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="900" font-family="'Outfit'">α</text>
  
  <!-- C: beta -->
  <text x="271" y="68" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="900" font-family="'Outfit'">β</text>
</svg>`,
    solutionSteps: [
      {
        explanation: 'The reflex angle at E is \\(290^\\circ\\), which means the interior angle at E is \\(360^\\circ - 290^\\circ = 70^\\circ\\).',
        workingOut: '\\text{Interior angle at E} = 70^\\circ'
      },
      {
        explanation: 'By drawing a horizontal auxiliary parallel line through E, the interior angle is split. The top part is given as \\(30^\\circ\\). Therefore, the bottom part of E is \\(70^\\circ - 30^\\circ = 40^\\circ\\).',
        workingOut: '\\text{Bottom part of E} = 40^\\circ'
      },
      {
        explanation: 'By alternate interior angles, the acute angle at A (which is \\(180^\\circ - \\alpha\\)) is equal to the bottom part of E, which is \\(40^\\circ\\).',
        workingOut: '180^\\circ - \\alpha = 40^\\circ'
      },
      {
        explanation: 'Solving the equation for \\(\\alpha\\) gives \\(140^\\circ\\).',
        workingOut: '\\alpha = 140'
      }
    ]
  },

  'y8-5i-q1c_beta': {
    html: `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Parallel lines (Top & Bottom) -->
  <line x1="50" y1="130" x2="350" y2="130" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="50" y1="50" x2="350" y2="50" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <path d="M 195 45 L 205 50 L 195 55 Z M 195 125 L 205 130 L 195 135 Z" fill="#475569"/>
  
  <!-- Zigzag segments A(90,130) -> E(130,90) -> F(220,115) -> C(285,50) -->
  <polyline points="90,130 130,90 220,115 285,50" fill="none" stroke="#475569" stroke-width="2.5" stroke-linejoin="round"/>
  
  <!-- Double tick marks indicating AE || FC (exactly parallel at slope -1/45°) -->
  <path d="M 106 114 L 114 106 M 110 118 L 118 110" fill="none" stroke="#64748b" stroke-width="2"/>
  <path d="M 248 87 L 256 79 M 252 91 L 260 83" fill="none" stroke="#64748b" stroke-width="2"/>
  
  <!-- Auxiliary horizontal line through E -->
  <line x1="130" y1="90" x2="230" y2="90" stroke="#64748b" stroke-width="1.2" stroke-dasharray="3,3"/>
  <text x="160" y="86" text-anchor="middle" fill="#64748b" font-size="11" font-weight="900" font-family="'Outfit'">30°</text>
  
  <!-- Vertex Labels A, E, F, C -->
  <text x="80" y="146" text-anchor="middle" fill="#1e293b" font-size="13" font-weight="900" font-family="'Outfit'">A</text>
  <text x="130" y="74" text-anchor="middle" fill="#1e293b" font-size="13" font-weight="900" font-family="'Outfit'">E</text>
  <text x="228" y="130" text-anchor="middle" fill="#1e293b" font-size="13" font-weight="900" font-family="'Outfit'">F</text>
  <text x="293" y="42" text-anchor="middle" fill="#1e293b" font-size="13" font-weight="900" font-family="'Outfit'">C</text>
  
  <!-- Angles -->
  <!-- reflex at E: 290deg -->
  <text x="106" y="96" text-anchor="middle" fill="#6366f1" font-size="11" font-weight="900" font-family="'Outfit'">290°</text>
  
  <!-- interior at F: 70deg -->
  <text x="210" y="105" text-anchor="middle" fill="#6366f1" font-size="11" font-weight="900" font-family="'Outfit'">70°</text>
  
  <!-- A: alpha -->
  <text x="108" y="124" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="900" font-family="'Outfit'">α</text>
  
  <!-- C: beta -->
  <text x="271" y="68" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="900" font-family="'Outfit'">β</text>
</svg>`,
    solutionSteps: [
      {
        explanation: 'Since the segment AE is parallel to FC (indicated by matching parallel ticks), the angles they make with the parallel horizontal lines are equal.',
        workingOut: '\\beta = \\alpha'
      },
      {
        explanation: 'We solved \\(\\alpha = 140^\\circ\\) in the previous part, which directly gives \\(\\beta = 140^\\circ\\).',
        workingOut: '\\beta = 140'
      }
    ]
  }
};

async function run() {
  const batch = db.batch();

  for (const [id, data] of Object.entries(updates)) {
    console.log(`Applying parallel geometry and clean steps to: ${id}`);
    const docRef = db.collection('questions').doc(id);
    batch.update(docRef, {
      'graphData.html': data.html,
      solutionSteps: data.solutionSteps
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
  console.log('Successfully completed Q1c parallel and clean steps updates!');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
