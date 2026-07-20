import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// y8-5h-q3e:
// Change S (50deg) sweep-flag to 1 so it curves inwards correctly.
const updates = {
  'y8-5h-q3e': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Quadrilateral sides -->
  <polygon points="90,140 90,50 270,40 300,140" fill="none" stroke="#475569" stroke-width="2.5" stroke-linejoin="round"/>
  
  <!-- Labels -->
  <text x="75" y="145" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">P</text>
  <text x="75" y="42" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">Q</text>
  <text x="280" y="32" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">R</text>
  <text x="315" y="145" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">S</text>
  
  <!-- Angles (tight corners at R=12) -->
  <!-- P: 70deg -->
  <path d="M 102 140 A 12 12 0 0 0 90 128" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <text x="104" y="129" text-anchor="middle" fill="#6366f1" font-size="10" font-weight="900" font-family="'Outfit'">70°</text>
  
  <!-- Q: theta -->
  <path d="M 90 62 A 12 12 0 0 0 102 50" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <text x="103" y="63" text-anchor="middle" fill="#f43f5e" font-size="14" font-weight="900" font-family="'Outfit'">θ</text>
  
  <!-- R: theta -->
  <path d="M 255 41 A 12 12 0 0 0 270 52" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <text x="256" y="56" text-anchor="middle" fill="#f43f5e" font-size="14" font-weight="900" font-family="'Outfit'">θ</text>
  
  <!-- S: 50deg (sweep flag changed to 1 to curve inwards) -->
  <path d="M 288 140 A 12 12 0 0 1 296 128" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <text x="283" y="129" text-anchor="middle" fill="#6366f1" font-size="10" font-weight="900" font-family="'Outfit'">50°</text>
</svg>`
};

async function run() {
  const batch = db.batch();

  for (const [id, html] of Object.entries(updates)) {
    console.log(`Setting corrected S sweep flag to 1 for: ${id}`);
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
  console.log('Successfully completed Q3E final S sweep flag correction!');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
