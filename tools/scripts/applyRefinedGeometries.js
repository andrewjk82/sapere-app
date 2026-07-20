import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const targetData = {
  // y8-5a-q2c: Vertically opposite (PQR and AQC)
  'y8-5a-q2c': {
    'graphData.html': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Crossing lines PC and AR -->
  <line x1="80" y1="40" x2="320" y2="140" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="80" y1="140" x2="320" y2="40" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <!-- Vertices (aligned 100%) -->
  <circle cx="200" cy="90" r="5.5" fill="#3b82f6" stroke="#fff" stroke-width="1.5"/>
  <circle cx="80" cy="40" r="4.5" fill="#64748b" stroke="#fff" stroke-width="1"/>
  <circle cx="320" cy="140" r="4.5" fill="#64748b" stroke="#fff" stroke-width="1"/>
  <circle cx="80" cy="140" r="4.5" fill="#64748b" stroke="#fff" stroke-width="1"/>
  <circle cx="320" cy="40" r="4.5" fill="#64748b" stroke="#fff" stroke-width="1"/>
  
  <!-- Labels -->
  <text x="200" y="112" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">Q</text>
  <text x="70" y="40" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">A</text>
  <text x="330" y="145" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">C</text>
  <text x="70" y="145" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">B</text>
  <text x="330" y="40" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">P</text>
  <text x="330" y="145" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">R</text>
</svg>`
  },

  // y8-5a-q3c-alpha: Vertically opposite (52)
  'y8-5a-q3c-alpha': {
    'graphData.html': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Intersecting lines crossing at V(200, 90) -->
  <line x1="92" y1="143" x2="308" y2="37" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="92" y1="37" x2="308" y2="143" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <!-- Angle Arcs -->
  <!-- 52deg (right, radius 40) -->
  <path d="M 236 107.5 A 40 40 0 0 0 236 72.5" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <!-- alpha (left, radius 40) -->
  <path d="M 164 107.5 A 40 40 0 0 1 164 72.5" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  
  <!-- Vertices -->
  <circle cx="200" cy="90" r="5.5" fill="#3b82f6" stroke="#fff" stroke-width="1.5"/>
  
  <!-- Labels -->
  <text x="200" y="112" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">V</text>
  
  <!-- Angles (positioned close to vertices without overlaps) -->
  <text x="252" y="94" text-anchor="middle" fill="#6366f1" font-size="13" font-weight="900" font-family="'Outfit'">52°</text>
  <text x="148" y="94" text-anchor="middle" fill="#f43f5e" font-size="16" font-weight="900" font-family="'Outfit'">α</text>
</svg>`
  },

  // y8-5a-q3c-beta: Straight line (128)
  'y8-5a-q3c-beta': {
    'graphData.html': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Intersecting lines crossing at V(200, 90) -->
  <line x1="92" y1="143" x2="308" y2="37" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="92" y1="37" x2="308" y2="143" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <!-- Angle Arcs -->
  <!-- 52deg (right, radius 40) -->
  <path d="M 236 107.5 A 40 40 0 0 0 236 72.5" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <!-- beta (top, radius 30) -->
  <path d="M 227 76.9 A 30 30 0 0 0 173 76.9" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  
  <!-- Vertices -->
  <circle cx="200" cy="90" r="5.5" fill="#3b82f6" stroke="#fff" stroke-width="1.5"/>
  
  <!-- Labels -->
  <text x="200" y="112" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">V</text>
  
  <!-- Angles -->
  <text x="252" y="94" text-anchor="middle" fill="#6366f1" font-size="13" font-weight="900" font-family="'Outfit'">52°</text>
  <text x="200" y="58" text-anchor="middle" fill="#f43f5e" font-size="16" font-weight="900" font-family="'Outfit'">β</text>
</svg>`
  },

  // y8-5a-q4a: Find theta (42)
  'y8-5a-q4a': {
    'graphData.html': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Intersecting lines crossing at V(200, 90) -->
  <line x1="88" y1="133" x2="312" y2="47" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="88" y1="47" x2="312" y2="133" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <!-- Angle Arcs -->
  <!-- 42deg (right, radius 40) -->
  <path d="M 237.3 104.3 A 40 40 0 0 0 237.3 75.7" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <!-- theta (left, radius 40) -->
  <path d="M 162.7 104.3 A 40 40 0 0 1 162.7 75.7" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  
  <!-- Vertices -->
  <circle cx="200" cy="90" r="5.5" fill="#3b82f6" stroke="#fff" stroke-width="1.5"/>
  
  <!-- Labels -->
  <text x="200" y="112" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">V</text>
  
  <!-- Angles -->
  <text x="252" y="94" text-anchor="middle" fill="#6366f1" font-size="13" font-weight="900" font-family="'Outfit'">42°</text>
  <text x="148" y="94" text-anchor="middle" fill="#f43f5e" font-size="16" font-weight="900" font-family="'Outfit'">θ</text>
</svg>`
  },

  // y8-5a-q4b: Find beta (30)
  'y8-5a-q4b': {
    'graphData.html': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Straight line -->
  <line x1="50" y1="130" x2="350" y2="130" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <!-- Ray 1 (120deg) -->
  <line x1="200" y1="130" x2="150" y2="43.4" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <!-- Ray 2 (150deg) -->
  <line x1="200" y1="130" x2="113.4" y2="80" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <!-- Angle Arcs -->
  <!-- 120deg (right, radius 40) -->
  <path d="M 240 130 A 40 40 0 0 0 180 95.4" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <!-- beta 1 (middle, radius 60) -->
  <path d="M 170 78 A 60 60 0 0 0 148 100" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <!-- beta 2 (left, radius 40) -->
  <path d="M 165.4 110 A 40 40 0 0 0 160 130" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  
  <!-- Vertices -->
  <circle cx="200" cy="130" r="5.5" fill="#3b82f6" stroke="#fff" stroke-width="1.5"/>
  
  <!-- Labels -->
  <text x="200" y="152" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">O</text>
  
  <!-- Angles (labels shifted closer to angle region) -->
  <text x="227.5" y="82.4" text-anchor="middle" fill="#6366f1" font-size="13" font-weight="900" font-family="'Outfit'">120°</text>
  <text x="149" y="79" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="900" font-family="'Outfit'">β</text>
  <text x="150" y="116.5" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="900" font-family="'Outfit'">β</text>
</svg>`
  },

  // y8-5a-q4c: Find alpha (45)
  'y8-5a-q4c': {
    'graphData.html': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Straight line -->
  <line x1="50" y1="130" x2="350" y2="130" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <!-- 45deg ray -->
  <line x1="200" y1="130" x2="285" y2="45" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <!-- 90deg ray -->
  <line x1="200" y1="130" x2="200" y2="30" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <!-- 135deg ray -->
  <line x1="200" y1="130" x2="115" y2="45" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <!-- Angle Arcs -->
  <path d="M 230 130 A 30 30 0 0 0 221.2 108.8" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <path d="M 231.8 98.2 A 45 45 0 0 0 200 85" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <path d="M 200 100 A 30 30 0 0 0 178.8 108.8" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <path d="M 168.2 98.2 A 45 45 0 0 0 155 130" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  
  <!-- Vertices -->
  <circle cx="200" cy="130" r="5.5" fill="#3b82f6" stroke="#fff" stroke-width="1.5"/>
  
  <!-- Labels -->
  <text x="200" y="152" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">O</text>
  
  <!-- Angles (labels shifted closer to angle region) -->
  <text x="234" y="117" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="900" font-family="'Outfit'">α</text>
  <text x="222" y="85" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="900" font-family="'Outfit'">α</text>
  <text x="182" y="95" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="900" font-family="'Outfit'">α</text>
  <text x="166" y="117" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="900" font-family="'Outfit'">α</text>
</svg>`
  },

  // y8-5a-q4d: Find alpha (60)
  'y8-5a-q4d': {
    'graphData.html': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- 6 crossing rays from V(200, 90) -->
  <line x1="100" y1="90" x2="300" y2="90" stroke="#475569" stroke-width="2" stroke-linecap="round"/>
  <line x1="150" y1="3.4" x2="250" y2="176.6" stroke="#475569" stroke-width="2" stroke-linecap="round"/>
  <line x1="150" y1="176.6" x2="250" y2="3.4" stroke="#475569" stroke-width="2" stroke-linecap="round"/>
  
  <!-- Angle Arcs -->
  <path d="M 225 90 A 25 25 0 0 0 212.5 68.3" fill="none" stroke="#f43f5e" stroke-width="1.5"/>
  <path d="M 212.5 68.3 A 25 25 0 0 0 187.5 68.3" fill="none" stroke="#f43f5e" stroke-width="1.5"/>
  <path d="M 187.5 68.3 A 25 25 0 0 0 175 90" fill="none" stroke="#f43f5e" stroke-width="1.5"/>
  <path d="M 175 90 A 25 25 0 0 0 187.5 111.7" fill="none" stroke="#f43f5e" stroke-width="1.5"/>
  <path d="M 187.5 111.7 A 25 25 0 0 0 212.5 111.7" fill="none" stroke="#f43f5e" stroke-width="1.5"/>
  <path d="M 212.5 111.7 A 25 25 0 0 0 225 90" fill="none" stroke="#f43f5e" stroke-width="1.5"/>
  
  <!-- Vertices -->
  <circle cx="200" cy="90" r="5.5" fill="#3b82f6" stroke="#fff" stroke-width="1.5"/>
  
  <!-- Labels -->
  <text x="215" y="105" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">V</text>
  
  <!-- Angles (labels shifted closer to angle region) -->
  <text x="230" y="75" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="900" font-family="'Outfit'">α</text>
  <text x="200" y="58" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="900" font-family="'Outfit'">α</text>
  <text x="170" y="75" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="900" font-family="'Outfit'">α</text>
  <text x="170" y="105" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="900" font-family="'Outfit'">α</text>
  <text x="200" y="122" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="900" font-family="'Outfit'">α</text>
  <text x="230" y="105" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="900" font-family="'Outfit'">α</text>
</svg>`
  },

  // y8-5a-q4e: Find beta (130)
  'y8-5a-q4e': {
    'graphData.html': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Rays from O(200, 90) -->
  <line x1="200" y1="90" x2="300" y2="90" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <!-- Ray 2 (100deg) -->
  <line x1="200" y1="90" x2="182.6" y2="188.5" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <!-- Ray 3 (230deg) -->
  <line x1="200" y1="90" x2="135.7" y2="13.4" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <!-- Angle Arcs -->
  <!-- 100deg (radius 30) -->
  <path d="M 230 90 A 30 30 0 0 1 194.8 60.5" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <!-- beta 1 (radius 40) -->
  <path d="M 193 50.6 A 40 40 0 0 1 174.3 120.6" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <!-- beta 2 (radius 30) -->
  <path d="M 180.7 113 A 30 30 0 0 1 230 90" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  
  <!-- Vertices -->
  <circle cx="200" cy="90" r="5.5" fill="#3b82f6" stroke="#fff" stroke-width="1.5"/>
  
  <!-- Labels -->
  <text x="212" y="105" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">O</text>
  
  <!-- Angles (labels shifted closer to angle region) -->
  <text x="222" y="62" text-anchor="middle" fill="#6366f1" font-size="13" font-weight="900" font-family="'Outfit'">100°</text>
  <text x="158" y="85" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="900" font-family="'Outfit'">β</text>
  <text x="210" y="115" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="900" font-family="'Outfit'">β</text>
</svg>`
  }
};

async function run() {
  const batch = db.batch();

  for (const [id, fields] of Object.entries(targetData)) {
    console.log(`Updating graph for: ${id}`);
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
  console.log('Successfully applied all refined geometry layouts in Firestore!');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
