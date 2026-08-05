const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const svg = `<div style="text-align:center;margin:16px 0;">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 320" width="300" height="320" style="font-family:sans-serif;">
  <defs>
    <!-- Scaled down arrows -->
    <marker id="arrow-end" markerWidth="6" markerHeight="4" refX="6" refY="2" orient="auto">
      <path d="M0,0 L6,2 L0,4 Z" fill="#555"/>
    </marker>
    <marker id="arrow-start" markerWidth="6" markerHeight="4" refX="0" refY="2" orient="auto">
      <path d="M6,0 L0,2 L6,4 Z" fill="#555"/>
    </marker>
  </defs>

  <!-- Shaded border (evenodd rule for the hole) -->
  <path d="M37.5,37.5 h225 v225 h-225 v-225 z M82.5,82.5 h135 v135 h-135 v-135 z" 
        fill="#bfdbfe" fill-rule="evenodd" stroke="#2563eb" stroke-width="2"/>
        
  <!-- Outer border outline -->
  <rect x="37.5" y="37.5" width="225" height="225" fill="none" stroke="#2563eb" stroke-width="2"/>
  
  <!-- Inner border outline -->
  <rect x="82.5" y="82.5" width="135" height="135" fill="none" stroke="#2563eb" stroke-width="2"/>
  
  <!-- Right angle markers -->
  <polyline points="37.5,52.5 52.5,52.5 52.5,37.5" fill="none" stroke="#2563eb" stroke-width="1.5"/>
  <polyline points="82.5,97.5 97.5,97.5 97.5,82.5" fill="none" stroke="#2563eb" stroke-width="1.5"/>

  <!-- Dimension lines for 15 mm -->
  <!-- Extension lines -->
  <line x1="37.5" y1="262.5" x2="37.5" y2="305" stroke="#777" stroke-width="1"/>
  <line x1="262.5" y1="262.5" x2="262.5" y2="305" stroke="#777" stroke-width="1"/>
  <!-- Dimension line with arrows -->
  <line x1="37.5" y1="295" x2="262.5" y2="295" stroke="#555" stroke-width="1.5" marker-end="url(#arrow-end)" marker-start="url(#arrow-start)"/>
  <!-- Text placed above the dimension line -->
  <text x="150" y="288" text-anchor="middle" font-size="14" fill="#333">15 mm</text>
  
  <!-- Dimension lines for 9 mm -->
  <line x1="82.5" y1="82.5" x2="82.5" y2="60" stroke="#777" stroke-width="1"/>
  <line x1="217.5" y1="82.5" x2="217.5" y2="60" stroke="#777" stroke-width="1"/>
  <line x1="82.5" y1="70" x2="217.5" y2="70" stroke="#555" stroke-width="1.5" marker-end="url(#arrow-end)" marker-start="url(#arrow-start)"/>
  <text x="150" y="63" text-anchor="middle" font-size="14" fill="#333">9 mm</text>
  
</svg>
</div>`;

  const questionText = `Find the area of the shaded region (the border) in the figure below.

${svg}

*(Assume both the outer and inner shapes are squares)*`;

  const docRef = db.collection('questions').doc('y8-15a-q2c');
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
        if (sq.id === 'y8-15a-q2c') {
          return { ...sq, question: questionText };
        }
        return sq;
      });
      await parentRef.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
    }
  }

  console.log("Resized arrows for y8-15a-q2c");
  process.exit(0);
}

run().catch(console.error);
