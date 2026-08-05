const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // SVG without tick marks
  const svg = `<div style="text-align:center;margin:16px 0;">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 250" width="400" height="250" style="font-family:sans-serif;">
  <defs>
    <marker id="arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill="#555"/>
    </marker>
  </defs>

  <!-- Shaded Rectangle -->
  <rect x="40" y="30" width="300" height="180" fill="#bfdbfe" stroke="#2563eb" stroke-width="2"/>
  
  <!-- Unshaded Triangle ABE -->
  <polygon points="40,210 340,210 160,30" fill="#ffffff" stroke="#2563eb" stroke-width="2"/>
  
  <!-- Right angle markers -->
  <polyline points="40,195 55,195 55,210" fill="none" stroke="#2563eb" stroke-width="1.5"/>
  <polyline points="340,195 325,195 325,210" fill="none" stroke="#2563eb" stroke-width="1.5"/>
  <polyline points="340,45 325,45 325,30" fill="none" stroke="#2563eb" stroke-width="1.5"/>
  <polyline points="40,45 55,45 55,30" fill="none" stroke="#2563eb" stroke-width="1.5"/>

  <!-- Labels -->
  <!-- 10 cm width at bottom -->
  <line x1="40" y1="230" x2="340" y2="230" stroke="#555" stroke-width="1.5" marker-end="url(#arrow)" marker-start="url(#arrow)"/>
  <text x="190" y="245" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">10 cm</text>
  
  <!-- 6 cm height at left -->
  <line x1="20" y1="30" x2="20" y2="210" stroke="#555" stroke-width="1.5" marker-end="url(#arrow)" marker-start="url(#arrow)"/>
  <text x="12" y="120" text-anchor="middle" font-size="14" font-weight="bold" fill="#333" transform="rotate(-90,12,120)">6 cm</text>
</svg>
</div>`;

  const questionText = `Find the area of the shaded region in the figure below.

${svg}
`;

  const docRef = db.collection('questions').doc('y8-15a-q2b');
  await docRef.update({
    question: questionText,
    updatedAt: FieldValue.serverTimestamp()
  });

  const parentRef = db.collection('questions').doc('y8-15a-q2');
  const parentSnap = await parentRef.get();
  if (parentSnap.exists) {
    const parentData = parentSnap.data();
    if (parentData.subQuestions) {
      const newSubQs = parentData.subQuestions.map(sq => {
        if (sq.id === 'y8-15a-q2b') {
          return {
            ...sq,
            question: questionText
          };
        }
        return sq;
      });
      await parentRef.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
    }
  }

  console.log("Removed tick marks from y8-15a-q2b SVG");
  process.exit(0);
}

run().catch(console.error);
