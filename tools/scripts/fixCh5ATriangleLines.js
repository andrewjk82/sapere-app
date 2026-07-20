import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// Build mathematically perfect aligned triangle SVG
const correctHtml = `<svg viewBox="0 0 400 300" width="100%" height="240" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Dashed triangle background -->
  <polygon points="200,60 100,220 300,220" fill="rgba(99, 102, 241, 0.08)" stroke="rgba(99, 102, 241, 0.3)" stroke-width="1.5" stroke-dasharray="4"/>
  
  <!-- Solid lines forming the intersecting configuration, meeting exactly at P(200,60), Q(100,220), R(300,220) -->
  <!-- Horizontal line QR -->
  <line x1="50" y1="220" x2="350" y2="220" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <!-- Line PR (passes through P(200,60) and R(300,220)) -->
  <line x1="175" y1="20" x2="325" y2="260" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <!-- Line PQ (passes through P(200,60) and Q(100,220)) -->
  <line x1="225" y1="20" x2="75" y2="260" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <!-- Highlighted Vertices -->
  <circle cx="200" cy="60" r="6.5" fill="#f43f5e" stroke="#fff" stroke-width="2"/>
  <circle cx="100" cy="220" r="6.5" fill="#f43f5e" stroke="#fff" stroke-width="2"/>
  <circle cx="300" cy="220" r="6.5" fill="#f43f5e" stroke="#fff" stroke-width="2"/>
  
  <!-- Labels -->
  <text x="200" y="42" text-anchor="middle" fill="#1e293b" font-size="16" font-weight="900" font-family="'Outfit', sans-serif">P</text>
  <text x="80" y="235" text-anchor="middle" fill="#1e293b" font-size="16" font-weight="900" font-family="'Outfit', sans-serif">Q</text>
  <text x="320" y="235" text-anchor="middle" fill="#1e293b" font-size="16" font-weight="900" font-family="'Outfit', sans-serif">R</text>
</svg>`;

async function run() {
  console.log('Updating triangle graph for rFhK4fpV4YFwqMhJUy9b...');
  await db.collection('questions').doc('rFhK4fpV4YFwqMhJUy9b').update({
    'graphData.html': correctHtml,
    isNew: true
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
