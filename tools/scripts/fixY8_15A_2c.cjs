const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // SVG representation
  // Outer square: 15 mm. Scale: 15px per mm. 225x225.
  // Inner square: 9 mm. 135x135.
  // ViewBox: 300x300. Center at (150,150)
  // Outer: x=37.5, y=37.5, w=225, h=225
  // Inner: x=82.5, y=82.5, w=135, h=135
  
  const svg = `<div style="text-align:center;margin:16px 0;">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" width="300" height="300" style="font-family:sans-serif;">
  <defs>
    <marker id="arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill="#555"/>
    </marker>
  </defs>

  <!-- Shaded border (evenodd rule for the hole) -->
  <path d="M37.5,37.5 h225 v225 h-225 v-225 z M82.5,82.5 h135 v135 h-135 v-135 z" 
        fill="#bfdbfe" fill-rule="evenodd" stroke="#2563eb" stroke-width="2"/>
        
  <!-- Outer border outline (just to be safe) -->
  <rect x="37.5" y="37.5" width="225" height="225" fill="none" stroke="#2563eb" stroke-width="2"/>
  
  <!-- Inner border outline -->
  <rect x="82.5" y="82.5" width="135" height="135" fill="none" stroke="#2563eb" stroke-width="2"/>
  
  <!-- Right angle markers -->
  <polyline points="37.5,52.5 52.5,52.5 52.5,37.5" fill="none" stroke="#2563eb" stroke-width="1.5"/>
  <polyline points="82.5,97.5 97.5,97.5 97.5,82.5" fill="none" stroke="#2563eb" stroke-width="1.5"/>

  <!-- Labels -->
  <!-- Outer bottom edge (15 mm) -->
  <line x1="37.5" y1="280" x2="262.5" y2="280" stroke="#555" stroke-width="1.5" marker-end="url(#arrow)" marker-start="url(#arrow)"/>
  <text x="150" y="295" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">15 mm</text>
  
  <!-- Inner bottom edge (9 mm) -->
  <line x1="82.5" y1="235" x2="217.5" y2="235" stroke="#555" stroke-width="1.5" marker-end="url(#arrow)" marker-start="url(#arrow)"/>
  <text x="150" y="250" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">9 mm</text>
</svg>
</div>`;

  const questionText = `Find the area of the shaded region (the border) in the figure below.

${svg}

*(Assume both the outer and inner shapes are squares)*`;

  const newSteps = [
    {
      explanation: 'First, find the area of the large outer square. Its side length is 15 mm.',
      workingOut: [
        '\\(\\text{Area of large square} = \\text{side} \\times \\text{side}\\)',
        '\\(\\text{Area} = 15 \\times 15 = 225\\text{ mm}^2\\)'
      ].join('\n'),
      graphData: null
    },
    {
      explanation: 'Next, find the area of the small unshaded inner square. Its side length is 9 mm.',
      workingOut: [
        '\\(\\text{Area of small square} = \\text{side} \\times \\text{side}\\)',
        '\\(\\text{Area} = 9 \\times 9 = 81\\text{ mm}^2\\)'
      ].join('\n'),
      graphData: null
    },
    {
      explanation: 'Finally, subtract the inner square\'s area from the outer square\'s area to find the area of the shaded border.',
      workingOut: [
        '\\(\\text{Shaded Area} = \\text{Outer Area} - \\text{Inner Area}\\)',
        '\\(\\text{Shaded Area} = 225 - 81 = 144\\text{ mm}^2\\)'
      ].join('\n'),
      graphData: null
    }
  ];

  // Answer is 144. Shuffle to A (index 0).
  const newOpts = [
    { text: '\\(144\\text{ mm}^2\\)', imageUrl: '' }, // Correct -> A
    { text: '\\(135\\text{ mm}^2\\)', imageUrl: '' },
    { text: '\\(60\\text{ mm}^2\\)', imageUrl: '' },
    { text: '\\(225\\text{ mm}^2\\)', imageUrl: '' }
  ];

  const docRef = db.collection('questions').doc('y8-15a-q2c');
  await docRef.update({
    question: questionText,
    type: 'multiple_choice',
    options: newOpts,
    answer: '0',
    solutionSteps: newSteps,
    graphData: null,
    updatedAt: FieldValue.serverTimestamp()
  });

  const parentRef = db.collection('questions').doc('y8-15a-q2');
  const parentSnap = await parentRef.get();
  if (parentSnap.exists) {
    const parentData = parentSnap.data();
    if (parentData.subQuestions) {
      const newSubQs = parentData.subQuestions.map(sq => {
        if (sq.id === 'y8-15a-q2c') {
          return {
            ...sq,
            question: questionText,
            type: 'multiple_choice',
            options: newOpts,
            answer: '0',
            solutionSteps: newSteps,
            graphData: null
          };
        }
        return sq;
      });
      await parentRef.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
    }
  }

  console.log("Updated y8-15a-q2c with SVG, clean steps, removed graphData");
  process.exit(0);
}

run().catch(console.error);
