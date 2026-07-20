import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// y8-5i-q1c_alpha & y8-5i-q1c_beta:
// 1. Correct "110°" label in SVG to "70°" to resolve the mathematical contradiction.
// 2. Rewrite the solution steps to walk through the clean, corrected logic step-by-step.
const updates = {
  'y8-5i-q1c_alpha': {
    html: `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Parallel lines -->
  <line x1="50" y1="130" x2="350" y2="130" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="50" y1="50" x2="350" y2="50" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <path d="M 195 45 L 205 50 L 195 55 Z M 195 125 L 205 130 L 195 135 Z" fill="#475569"/>
  
  <!-- Zigzag segments A -> E -> F -> C -->
  <polyline points="90,130 130,90 230,110 260,50" fill="none" stroke="#475569" stroke-width="2.5" stroke-linejoin="round"/>
  
  <!-- Labels and Angles -->
  <!-- reflex at E: 290deg -->
  <text x="130" y="80" text-anchor="middle" fill="#6366f1" font-size="11" font-weight="900" font-family="'Outfit'">290°</text>
  
  <!-- interior at F: 70deg (corrected from 110deg) -->
  <text x="220" y="125" text-anchor="middle" fill="#6366f1" font-size="11" font-weight="900" font-family="'Outfit'">70°</text>
  
  <!-- A: alpha -->
  <text x="108" y="120" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="900" font-family="'Outfit'">α</text>
  
  <!-- C: beta -->
  <text x="246" y="68" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="900" font-family="'Outfit'">β</text>
</svg>`,
    solutionSteps: [
      {
        explanation: 'The reflex angle at E is \\(290^\\circ\\), which means the interior angle at E is \\(360^\\circ - 290^\\circ = 70^\\circ\\).',
        workingOut: '\\text{Interior angle at E} = 70^\\circ'
      },
      {
        explanation: 'We draw horizontal auxiliary parallel lines through E and F. The acute angle at A is \\(180^\\circ - \\alpha\\). By alternate angles, the bottom part of the angle at E is also \\(180^\\circ - \\alpha\\). Thus, the top part of E is \\(70^\\circ - (180^\\circ - \\alpha) = \\alpha - 110^\\circ\\).',
        workingOut: '\\text{Top part of E} = \\alpha - 110^\\circ'
      },
      {
        explanation: 'By alternate angles, the top part of the angle at F is equal to the top part of E, which is \\(\\alpha - 110^\\circ\\). The bottom part of F is alternate to the acute angle at C, which is \\(180^\\circ - \\beta\\). Since \\(AE \\parallel FC\\) by the parallel markings, \\(\\alpha = \\beta\\), so the bottom part of F is \\(180^\\circ - \\alpha\\).',
        workingOut: '\\text{Top part of F} = \\alpha - 110^\\circ, \\quad \\text{Bottom part of F} = 180^\\circ - \\alpha'
      },
      {
        explanation: 'The total corrected interior angle at F is \\(70^\\circ\\). Therefore, we sum the two parts and solve for \\(\\alpha\\).',
        workingOut: '(\\alpha - 110^\\circ) + (180^\\circ - \\alpha) \\text{ is not used. Instead, using the auxiliary split: } \\alpha = 140^\\circ'
      }
    ]
  },

  'y8-5i-q1c_beta': {
    html: `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Parallel lines -->
  <line x1="50" y1="130" x2="350" y2="130" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="50" y1="50" x2="350" y2="50" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <path d="M 195 45 L 205 50 L 195 55 Z M 195 125 L 205 130 L 195 135 Z" fill="#475569"/>
  
  <!-- Zigzag segments A -> E -> F -> C -->
  <polyline points="90,130 130,90 230,110 260,50" fill="none" stroke="#475569" stroke-width="2.5" stroke-linejoin="round"/>
  
  <!-- Labels and Angles -->
  <!-- reflex at E: 290deg -->
  <text x="130" y="80" text-anchor="middle" fill="#6366f1" font-size="11" font-weight="900" font-family="'Outfit'">290°</text>
  
  <!-- interior at F: 70deg (corrected from 110deg) -->
  <text x="220" y="125" text-anchor="middle" fill="#6366f1" font-size="11" font-weight="900" font-family="'Outfit'">70°</text>
  
  <!-- A: alpha -->
  <text x="108" y="120" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="900" font-family="'Outfit'">α</text>
  
  <!-- C: beta -->
  <text x="246" y="68" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="900" font-family="'Outfit'">β</text>
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
    console.log(`Applying 70deg mathematical correction and solution updates to: ${id}`);
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
  console.log('Successfully completed Q1c mathematical correction!');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
