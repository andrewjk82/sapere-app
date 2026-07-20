import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// Defining all Q3 questions (y8-5h-q3a to q3f) with R=15 or 16 and perfect inwards curvature.
const updates = {
  'y8-5h-q3a': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Quadrilateral sides -->
  <polygon points="90,140 120,40 280,40 250,140" fill="none" stroke="#475569" stroke-width="2.5" stroke-linejoin="round"/>
  
  <!-- Labels -->
  <text x="75" y="145" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">A</text>
  <text x="110" y="32" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">B</text>
  <text x="290" y="32" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">C</text>
  <text x="265" y="145" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">D</text>
  
  <!-- Angles (R=15 for tight, elegant corners) -->
  <!-- A: 65deg -->
  <path d="M 105 140 A 15 15 0 0 0 95 126" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <text x="111" y="125" text-anchor="middle" fill="#6366f1" font-size="11" font-weight="900" font-family="'Outfit'">65°</text>
  
  <!-- B: 120deg -->
  <path d="M 135 40 A 15 15 0 0 1 115 54" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <text x="135" y="62" text-anchor="middle" fill="#6366f1" font-size="11" font-weight="900" font-family="'Outfit'">120°</text>
  
  <!-- C: gamma -->
  <path d="M 265 40 A 15 15 0 0 0 275 54" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <text x="259" y="58" text-anchor="middle" fill="#f43f5e" font-size="15" font-weight="900" font-family="'Outfit'">γ</text>
  
  <!-- D: 70deg -->
  <path d="M 235 140 A 15 15 0 0 1 255 126" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <text x="235" y="122" text-anchor="middle" fill="#6366f1" font-size="11" font-weight="900" font-family="'Outfit'">70°</text>
</svg>`,

  'y8-5h-q3b': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Triangle sides -->
  <line x1="80" y1="130" x2="320" y2="130" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="100" y1="130" x2="200" y2="50" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="200" y1="50" x2="300" y2="130" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
  
  <!-- Labels -->
  <text x="85" y="135" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">A</text>
  <text x="200" y="35" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">B</text>
  <text x="315" y="135" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">C</text>
  
  <!-- Angles (tight corners at R=15) -->
  <!-- A: alpha -->
  <path d="M 115 130 A 15 15 0 0 0 112 121" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <text x="123" y="124" text-anchor="middle" fill="#f43f5e" font-size="15" font-weight="900" font-family="'Outfit'">α</text>
  
  <!-- B: 50deg -->
  <path d="M 188 60 A 15 15 0 0 0 212 60" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <text x="200" y="68" text-anchor="middle" fill="#6366f1" font-size="11" font-weight="900" font-family="'Outfit'">50°</text>
  
  <!-- C: alpha -->
  <path d="M 285 130 A 15 15 0 0 1 288 121" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <text x="277" y="124" text-anchor="middle" fill="#f43f5e" font-size="15" font-weight="900" font-family="'Outfit'">α</text>
</svg>`,

  'y8-5h-q3c': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Quadrilateral sides -->
  <polygon points="90,140 110,40 280,50 240,140" fill="none" stroke="#475569" stroke-width="2.5" stroke-linejoin="round"/>
  
  <!-- Labels -->
  <text x="75" y="145" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">A</text>
  <text x="100" y="32" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">B</text>
  <text x="290" y="42" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">C</text>
  <text x="255" y="145" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">D</text>
  
  <!-- Angles (tight corners at R=15) -->
  <!-- A: 70deg (concentric, curves inwards with sweep-flag 0) -->
  <path d="M 105 140 A 15 15 0 0 0 97 126" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <text x="110" y="123" text-anchor="middle" fill="#6366f1" font-size="11" font-weight="900" font-family="'Outfit'">70°</text>
  
  <!-- B: 2alpha (concentric, curves inwards with sweep-flag 1) -->
  <path d="M 125 41 A 15 15 0 0 1 113 54" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <text x="127" y="60" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="900" font-family="'Outfit'">2α</text>
  
  <!-- C: 110deg (concentric, curves inwards with sweep-flag 0) -->
  <path d="M 265 49 A 15 15 0 0 0 274 57" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <text x="260" y="65" text-anchor="middle" fill="#6366f1" font-size="11" font-weight="900" font-family="'Outfit'">110°</text>
  
  <!-- D: alpha (concentric, curves inwards with sweep-flag 1) -->
  <path d="M 225 140 A 15 15 0 0 1 243 126" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <text x="227" y="122" text-anchor="middle" fill="#f43f5e" font-size="15" font-weight="900" font-family="'Outfit'">α</text>
</svg>`,

  'y8-5h-q3d': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Parallelogram sides -->
  <polygon points="100,140 140,50 300,50 260,140" fill="none" stroke="#475569" stroke-width="2.5" stroke-linejoin="round"/>
  
  <!-- Labels -->
  <text x="85" y="145" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">A</text>
  <text x="130" y="40" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">B</text>
  <text x="315" y="45" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">C</text>
  <text x="275" y="145" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">D</text>
  
  <!-- Angles (tight corners at R=15) -->
  <!-- A: beta -->
  <path d="M 106 126 A 15 15 0 0 1 115 140" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <text x="120" y="124" text-anchor="middle" fill="#f43f5e" font-size="15" font-weight="900" font-family="'Outfit'">β</text>
  
  <!-- B: 130deg -->
  <path d="M 155 50 A 15 15 0 0 0 134 64" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <text x="150" y="70" text-anchor="middle" fill="#6366f1" font-size="11" font-weight="900" font-family="'Outfit'">130°</text>
  
  <!-- C: beta -->
  <path d="M 285 50 A 15 15 0 0 0 294 64" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <text x="278" y="68" text-anchor="middle" fill="#f43f5e" font-size="15" font-weight="900" font-family="'Outfit'">β</text>
  
  <!-- D: 130deg -->
  <path d="M 245 140 A 15 15 0 0 1 254 126" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <text x="240" y="122" text-anchor="middle" fill="#6366f1" font-size="11" font-weight="900" font-family="'Outfit'">130°</text>
</svg>`,

  'y8-5h-q3e': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Quadrilateral sides -->
  <polygon points="90,140 90,50 270,40 300,140" fill="none" stroke="#475569" stroke-width="2.5" stroke-linejoin="round"/>
  
  <!-- Labels -->
  <text x="75" y="145" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">P</text>
  <text x="75" y="42" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">Q</text>
  <text x="280" y="32" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">R</text>
  <text x="315" y="145" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">S</text>
  
  <!-- Angles (tight corners at R=15) -->
  <!-- P: 70deg -->
  <path d="M 105 140 A 15 15 0 0 0 90 125" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <text x="106" y="128" text-anchor="middle" fill="#6366f1" font-size="11" font-weight="900" font-family="'Outfit'">70°</text>
  
  <!-- Q: theta -->
  <path d="M 90 65 A 15 15 0 0 0 105 50" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <text x="105" y="65" text-anchor="middle" fill="#f43f5e" font-size="15" font-weight="900" font-family="'Outfit'">θ</text>
  
  <!-- R: theta -->
  <path d="M 255 41 A 15 15 0 0 0 270 55" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <text x="254" y="58" text-anchor="middle" fill="#f43f5e" font-size="15" font-weight="900" font-family="'Outfit'">θ</text>
  
  <!-- S: 50deg -->
  <path d="M 285 140 A 15 15 0 0 0 295 125" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <text x="281" y="128" text-anchor="middle" fill="#6366f1" font-size="11" font-weight="900" font-family="'Outfit'">50°</text>
</svg>`,

  'y8-5h-q3f': `<svg viewBox="0 0 400 180" width="100%" height="180" style="background:#f8fafc; border-radius:16px; display:block; margin:0 auto;">
  <!-- Trapezium sides -->
  <polygon points="80,140 140,50 260,50 320,140" fill="none" stroke="#475569" stroke-width="2.5" stroke-linejoin="round"/>
  
  <!-- Parallel line arrows on PQ and SR -->
  <path d="M 195,50 L 205,45 L 205,55 Z M 195,140 L 205,135 L 205,145 Z" fill="#475569"/>
  
  <!-- Labels -->
  <text x="65" y="145" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">S</text>
  <text x="130" y="40" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">P</text>
  <text x="270" y="40" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">Q</text>
  <text x="335" y="145" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="900" font-family="'Outfit'">R</text>
  
  <!-- Angles (tight corners at R=15) -->
  <!-- S: 65deg -->
  <path d="M 95 140 A 15 15 0 0 0 87 127" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <text x="101" y="127" text-anchor="middle" fill="#6366f1" font-size="12" font-weight="900" font-family="'Outfit'">65°</text>
  
  <!-- P: 115deg -->
  <path d="M 133 60 A 15 15 0 0 0 155 50" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <text x="145" y="68" text-anchor="middle" fill="#6366f1" font-size="11" font-weight="900" font-family="'Outfit'">115°</text>
  
  <!-- Q: 100deg -->
  <path d="M 245 50 A 15 15 0 0 0 267 60" fill="none" stroke="#6366f1" stroke-width="1.8"/>
  <text x="255" y="68" text-anchor="middle" fill="#6366f1" font-size="11" font-weight="900" font-family="'Outfit'">100°</text>
  
  <!-- R: alpha -->
  <path d="M 305 140 A 15 15 0 0 0 313 127" fill="none" stroke="#f43f5e" stroke-width="1.8"/>
  <text x="299" y="127" text-anchor="middle" fill="#f43f5e" font-size="15" font-weight="900" font-family="'Outfit'">α</text>
</svg>`
};

async function run() {
  const batch = db.batch();

  for (const [id, html] of Object.entries(updates)) {
    console.log(`Applying tight corner refactor (R=15) and corrected sweep flags to: ${id}`);
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
  console.log('Successfully refactored all Q3 questions to have tight, inward-curving arcs!');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
