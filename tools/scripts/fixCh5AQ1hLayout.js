import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// Build mathematically perfect SVG for y8-5a-q1h with no floating dots or overlaps
const cleanHtmlQ1h = `<svg viewBox="0 0 400 220" width="100%" height="220" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Rays from O(200, 100) -->
  <!-- Horizontal Right (unlabeled helper ray) -->
  <line x1="200" y1="100" x2="310" y2="100" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <!-- Vertical Up (unlabeled helper ray) -->
  <line x1="200" y1="100" x2="200" y2="15" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <!-- Ray 3 (right-down, labeled B) -->
  <line x1="200" y1="100" x2="242" y2="191" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <!-- Ray 4 (left-down, labeled A) -->
  <line x1="200" y1="100" x2="136" y2="177" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <!-- Right angle indicator -->
  <rect x="200" y="85" width="15" height="15" fill="none" stroke="#64748b" stroke-width="1.5"/>
  
  <!-- Angle Arcs -->
  <!-- Arc 1: 65deg from 0deg to -65deg (Ray 3) -->
  <path d="M 245 100 A 45 45 0 0 1 219 140.8" fill="none" stroke="#3b82f6" stroke-width="1.8"/>
  <!-- Arc 2: 65deg from -65deg to -130deg (Ray 4) -->
  <path d="M 214.8 131.7 A 35 35 0 0 1 177.5 126.8" fill="none" stroke="#3b82f6" stroke-width="1.8"/>
  <!-- Arc 3: x (140deg) from -130deg (Ray 4) to 90deg (Vertical Up) -->
  <path d="M 183.9 119.2 A 25 25 0 0 1 200 75" fill="none" stroke="#f43f5e" stroke-width="2"/>
  
  <!-- Vertices (aligned 100% with the line endpoints) -->
  <circle cx="200" cy="100" r="5.5" fill="#3b82f6" stroke="#fff" stroke-width="1.5"/>
  <circle cx="242" cy="191" r="4.5" fill="#64748b" stroke="#fff" stroke-width="1"/>
  <circle cx="136" cy="177" r="4.5" fill="#64748b" stroke="#fff" stroke-width="1"/>
  
  <!-- Labels (positioned defensively to avoid overlap) -->
  <text x="212" y="88" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">O</text>
  <text x="124" y="182" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">A</text>
  <text x="254" y="196" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">B</text>
  
  <!-- Angle Labels (shifted closer to angles/vertices) -->
  <text x="249" y="128" text-anchor="middle" fill="#3b82f6" font-size="12" font-weight="900" font-family="'Outfit'">65°</text>
  <text x="193" y="150" text-anchor="middle" fill="#3b82f6" font-size="12" font-weight="900" font-family="'Outfit'">65°</text>
  <text x="165" y="87" text-anchor="middle" fill="#f43f5e" font-size="15" font-weight="900" font-family="'Outfit'">x</text>
</svg>`;

async function run() {
  console.log('Updating y8-5a-q1h with clean, aligned layout...');
  await db.collection('questions').doc('y8-5a-q1h').update({
    'graphData.html': cleanHtmlQ1h
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
