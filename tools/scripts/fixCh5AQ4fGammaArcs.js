import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// y8-5a-q4f-gamma: Re-calculating all lines to be exactly at 60deg/120deg/150deg/240deg/300deg
// and fixing the 3gamma start point y-coordinate from 112.5 to 67.5!
const cleanHtmlQ4fGamma = `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Intersecting lines crossing at M(200, 90) at exact 60 / 120 deg slopes -->
  <line x1="152.5" y1="172.3" x2="247.5" y2="7.7" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="152.5" y1="7.7" x2="247.5" y2="172.3" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <!-- Middle splitting ray for gamma at exact 150 deg -->
  <line x1="200" y1="90" x2="117.7" y2="42.5" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <!-- Angle Arcs (100% matched to ray coordinates) -->
  <!-- 120deg (right, 300 to 60, radius 30) -->
  <path d="M 215 116 A 30 30 0 0 0 215 64" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <!-- gamma (top-left 120 to 150, radius 30) -->
  <path d="M 185 64 A 30 30 0 0 0 174 75" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <!-- 3gamma (bottom-left 150 to 240, radius 45) -->
  <path d="M 161 67.5 A 45 45 0 0 0 177.5 129" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  
  <!-- Vertices -->
  <circle cx="200" cy="90" r="5.5" fill="#3b82f6" stroke="#fff" stroke-width="1.5"/>
  
  <!-- Labels -->
  <text x="200" y="112" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">M</text>
  
  <!-- Angles -->
  <text x="248" y="94" text-anchor="middle" fill="#6366f1" font-size="13" font-weight="900" font-family="'Outfit'">120°</text>
  <text x="176" y="52" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="900" font-family="'Outfit'">γ</text>
  <text x="145" y="110" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="900" font-family="'Outfit'">3γ</text>
</svg>`;

// y8-5a-q4f-theta: Symmetrical crossing lines
const cleanHtmlQ4fTheta = `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Intersecting lines crossing at M(200, 90) at exact 60 / 120 deg slopes -->
  <line x1="152.5" y1="172.3" x2="247.5" y2="7.7" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="152.5" y1="7.7" x2="247.5" y2="172.3" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <!-- Angle Arcs (100% matched to ray coordinates) -->
  <!-- theta (right, 300 to 60, radius 30) -->
  <path d="M 215 116 A 30 30 0 0 0 215 64" fill="none" stroke="#f43f5e" stroke-width="2"/>
  <!-- 60deg (top, 60 to 120, radius 30) -->
  <path d="M 215 64 A 30 30 0 0 0 185 64" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  
  <!-- Vertices -->
  <circle cx="200" cy="90" r="5.5" fill="#3b82f6" stroke="#fff" stroke-width="1.5"/>
  
  <!-- Labels -->
  <text x="200" y="112" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">M</text>
  
  <!-- Angles -->
  <text x="245" y="94" text-anchor="middle" fill="#f43f5e" font-size="15" font-weight="900" font-family="'Outfit'">θ</text>
  <text x="200" y="48" text-anchor="middle" fill="#6366f1" font-size="13" font-weight="900" font-family="'Outfit'">60°</text>
</svg>`;

async function run() {
  console.log('Updating y8-5a-q4f-gamma and theta graphs with aligned arcs...');
  await db.collection('questions').doc('y8-5a-q4f-gamma').update({
    'graphData.html': cleanHtmlQ4fGamma
  });
  await db.collection('questions').doc('y8-5a-q4f-theta').update({
    'graphData.html': cleanHtmlQ4fTheta
  });

  // Update sync version
  const questionsMetaRef = db.doc('sync_meta/questions');
  const now = Date.now();
  await questionsMetaRef.update({
    version: now,
    membershipVersion: now,
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log('Done!');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
