import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const targetData = {
  // y8-5a-q4b: Symmetrical semicircle arcs for 120, beta, beta
  'y8-5a-q4b': {
    'graphData.html': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Straight line -->
  <line x1="50" y1="130" x2="350" y2="130" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <!-- Ray 1 (120deg) -->
  <line x1="200" y1="130" x2="150" y2="43.4" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <!-- Ray 2 (150deg) -->
  <line x1="200" y1="130" x2="113.4" y2="80" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <!-- Continuous Semicircle Arcs (uniform radius 30) -->
  <path d="M 230 130 A 30 30 0 0 0 185 104" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <path d="M 185 104 A 30 30 0 0 0 174 115" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <path d="M 174 115 A 30 30 0 0 0 170 130" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  
  <!-- Vertices -->
  <circle cx="200" cy="130" r="5.5" fill="#3b82f6" stroke="#fff" stroke-width="1.5"/>
  
  <!-- Labels -->
  <text x="200" y="152" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">O</text>
  
  <!-- Angles (labels shifted closer to angle region) -->
  <text x="224" y="88" text-anchor="middle" fill="#6366f1" font-size="13" font-weight="900" font-family="'Outfit'">120°</text>
  <text x="166" y="96" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="900" font-family="'Outfit'">β</text>
  <text x="153" y="117" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="900" font-family="'Outfit'">β</text>
</svg>`
  },

  // y8-5a-q4e: Symmetrical circular arcs for 100, beta, beta
  'y8-5a-q4e': {
    'graphData.html': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Rays from O(200, 90) -->
  <line x1="200" y1="90" x2="300" y2="90" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <!-- Ray 2 (100deg) -->
  <line x1="200" y1="90" x2="182.6" y2="188.5" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <!-- Ray 3 (230deg) -->
  <line x1="200" y1="90" x2="135.7" y2="13.4" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <!-- Symmetrical Circular Arcs (uniform radius 30) -->
  <path d="M 230 90 A 30 30 0 0 0 194.8 60.5" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <path d="M 194.8 60.5 A 30 30 0 0 0 180.7 113" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <path d="M 180.7 113 A 30 30 0 0 0 230 90" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  
  <!-- Vertices -->
  <circle cx="200" cy="90" r="5.5" fill="#3b82f6" stroke="#fff" stroke-width="1.5"/>
  
  <!-- Labels -->
  <text x="212" y="105" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">O</text>
  
  <!-- Angles (labels shifted closer to angle region) -->
  <text x="231" y="53" text-anchor="middle" fill="#6366f1" font-size="13" font-weight="900" font-family="'Outfit'">100°</text>
  <text x="153" y="77" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="900" font-family="'Outfit'">β</text>
  <text x="220" y="133" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="900" font-family="'Outfit'">β</text>
</svg>`
  },

  // y8-5a-q4f-theta: Crossing lines (theta and 60)
  'y8-5a-q4f-theta': {
    'graphData.html': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Intersecting lines crossing at M(200, 90) -->
  <line x1="145" y1="165.3" x2="255" y2="14.7" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="145" y1="14.7" x2="255" y2="165.3" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <!-- Angle Arcs -->
  <!-- theta (right, 120deg, radius 30) -->
  <path d="M 215 116 A 30 30 0 0 0 215 64" fill="none" stroke="#f43f5e" stroke-width="2"/>
  <!-- 60deg (top, radius 30) -->
  <path d="M 215 64 A 30 30 0 0 0 185 64" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  
  <!-- Vertices -->
  <circle cx="200" cy="90" r="5.5" fill="#3b82f6" stroke="#fff" stroke-width="1.5"/>
  
  <!-- Labels -->
  <text x="200" y="112" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">M</text>
  
  <!-- Angles -->
  <text x="235" y="90" text-anchor="middle" fill="#f43f5e" font-size="15" font-weight="900" font-family="'Outfit'">θ</text>
  <text x="200" y="48" text-anchor="middle" fill="#6366f1" font-size="13" font-weight="900" font-family="'Outfit'">60°</text>
</svg>`
  },

  // y8-5a-q4f-gamma: Crossing lines (3gamma, gamma, 120)
  'y8-5a-q4f-gamma': {
    'graphData.html': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Intersecting lines crossing at M(200, 90) -->
  <line x1="145" y1="165.3" x2="255" y2="14.7" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="145" y1="14.7" x2="255" y2="165.3" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <!-- Middle splitting ray for gamma -->
  <line x1="200" y1="90" x2="104.7" y2="35" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <!-- Angle Arcs -->
  <!-- 120deg (right, radius 30) -->
  <path d="M 215 116 A 30 30 0 0 0 215 64" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <!-- gamma (top-left 30deg, radius 30) -->
  <path d="M 185 64 A 30 30 0 0 0 174 75" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <!-- 3gamma (bottom-left 90deg, radius 45) -->
  <path d="M 161 112.5 A 45 45 0 0 0 177.5 129" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  
  <!-- Vertices -->
  <circle cx="200" cy="90" r="5.5" fill="#3b82f6" stroke="#fff" stroke-width="1.5"/>
  
  <!-- Labels -->
  <text x="200" y="112" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">M</text>
  
  <!-- Angles -->
  <text x="235" y="90" text-anchor="middle" fill="#6366f1" font-size="13" font-weight="900" font-family="'Outfit'">120°</text>
  <text x="176" y="52" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="900" font-family="'Outfit'">γ</text>
  <text x="152" y="120" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="900" font-family="'Outfit'">3γ</text>
</svg>`
  },

  // y8-5a-q4g: Straight line algebra (alpha+40, alpha-20)
  'y8-5a-q4g': {
    'graphData.html': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Straight line -->
  <line x1="50" y1="130" x2="350" y2="130" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <!-- Ray at 120deg -->
  <line x1="200" y1="130" x2="150" y2="43.4" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <!-- Angle Arcs -->
  <!-- alpha+40 (radius 30) -->
  <path d="M 230 130 A 30 30 0 0 0 185 104" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <!-- alpha-20 (radius 30) -->
  <path d="M 185 104 A 30 30 0 0 0 170 130" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  
  <!-- Vertices -->
  <circle cx="200" cy="130" r="5.5" fill="#3b82f6" stroke="#fff" stroke-width="1.5"/>
  
  <!-- Labels -->
  <text x="200" y="152" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">O</text>
  
  <!-- Angles (labels shifted closer to angle region) -->
  <text x="234" y="98" text-anchor="middle" fill="#f43f5e" font-size="12" font-weight="900" font-family="'Outfit'">α - 20°</text>
  <text x="152" y="112" text-anchor="middle" fill="#f43f5e" font-size="12" font-weight="900" font-family="'Outfit'">α + 40°</text>
</svg>`
  }
};

async function run() {
  const batch = db.batch();

  for (const [id, fields] of Object.entries(targetData)) {
    console.log(`Updating graph arcs for: ${id}`);
    const docRef = db.collection('questions').doc(id);
    batch.update(docRef, fields);
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
  console.log('Successfully completed refined symmetrical arc layouts!');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
