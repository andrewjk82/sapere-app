const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // Triangle A(30,220) B(290,220) C(95,64)
  // Dashed line: x=95, from y=64 to y=220
  // h label: right next to the dashed line (x=105, midpoint y=142)

  const svg = `<div style="text-align:center;margin:16px 0;">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 280" width="340" height="280" style="font-family:sans-serif;">
  <defs>
    <marker id="arrow-end" markerWidth="6" markerHeight="4" refX="6" refY="2" orient="auto">
      <path d="M0,0 L6,2 L0,4 Z" fill="#555"/>
    </marker>
    <marker id="arrow-start" markerWidth="6" markerHeight="4" refX="0" refY="2" orient="auto">
      <path d="M6,0 L0,2 L6,4 Z" fill="#555"/>
    </marker>
  </defs>

  <!-- Triangle A(30,220) B(290,220) C(95,64) -->
  <polygon points="30,220 290,220 95,64" fill="#bfdbfe" stroke="#2563eb" stroke-width="2"/>
  
  <!-- Dashed height line C(95,64) -> H(95,220) -->
  <line x1="95" y1="64" x2="95" y2="220" stroke="#2563eb" stroke-width="2" stroke-dasharray="6,4"/>
  
  <!-- Right angle at H(95,220) -->
  <polyline points="95,205 110,205 110,220" fill="none" stroke="#2563eb" stroke-width="1.5"/>

  <!-- Label h immediately to the RIGHT of the dashed line, at its midpoint -->
  <text x="105" y="147" text-anchor="start" font-size="15" font-style="italic" font-weight="bold" fill="#1e40af">h</text>

  <!-- Label 13 on hypotenuse AC (rotated along AC) -->
  <text x="53" y="148" text-anchor="middle" font-size="14" font-weight="bold" fill="#333" transform="rotate(-67,53,148)">13</text>

  <!-- Dimension line for base 20 -->
  <line x1="30" y1="220" x2="30" y2="258" stroke="#777" stroke-width="1"/>
  <line x1="290" y1="220" x2="290" y2="258" stroke="#777" stroke-width="1"/>
  <line x1="30" y1="248" x2="290" y2="248" stroke="#555" stroke-width="1.5" marker-end="url(#arrow-end)" marker-start="url(#arrow-start)"/>
  <text x="160" y="241" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">20</text>
</svg>
</div>`;

  const questionText = `Use Pythagoras' theorem to find \\(h\\).

${svg}`;

  const docRef = db.collection('questions').doc('y8-15a-q7a');
  await docRef.update({
    question: questionText,
    updatedAt: FieldValue.serverTimestamp()
  });

  const parentRef = db.collection('questions').doc('y8-15a-q7');
  const parentSnap = await parentRef.get();
  if (parentSnap.exists) {
    const parentData = parentSnap.data();
    if (parentData.subQuestions) {
      const newSubQs = parentData.subQuestions.map(sq => {
        if (sq.id === 'y8-15a-q7a') {
          return { ...sq, question: questionText };
        }
        return sq;
      });
      await parentRef.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
    }
  }

  console.log("Moved h label next to the dashed line in y8-15a-q7a");
  process.exit(0);
}

run().catch(console.error);
