const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // SVG representation
  // 10cm x 6cm outer rectangle. Scale: 30px per cm.
  // 300x180.
  // A(40,210), B(340,210), C(340,30), D(40,30)
  // E is at x=4cm -> 4*30=120px from D. x=160, y=30.
  
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

  <!-- Tick marks for sides -->
  <!-- Top and bottom (2 ticks) -->
  <line x1="185" y1="205" x2="195" y2="215" stroke="#2563eb" stroke-width="2"/>
  <line x1="190" y1="205" x2="200" y2="215" stroke="#2563eb" stroke-width="2"/>
  
  <!-- Actually the top side is split by E, but we can draw ticks near the middle if we want, 
       but there's no line at the top middle since E is at x=160. We'll just put it at x=250 -->
  <line x1="245" y1="25" x2="255" y2="35" stroke="#2563eb" stroke-width="2"/>
  <line x1="250" y1="25" x2="260" y2="35" stroke="#2563eb" stroke-width="2"/>

  <!-- Left and right (1 tick) -->
  <line x1="35" y1="120" x2="45" y2="120" stroke="#2563eb" stroke-width="2"/>
  <line x1="335" y1="120" x2="345" y2="120" stroke="#2563eb" stroke-width="2"/>

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

  const newSteps = [
    {
      explanation: 'First, find the area of the large outer rectangle. The width is 10 cm and the height is 6 cm.',
      workingOut: [
        '\\(\\text{Area of rectangle} = \\text{width} \\times \\text{height}\\)',
        '\\(\\text{Area} = 10 \\times 6 = 60\\text{ cm}^2\\)'
      ].join('\n'),
      graphData: null
    },
    {
      explanation: 'Next, find the area of the unshaded triangle inside the rectangle. The base of the triangle is the same as the rectangle\'s width (10 cm) and its height is the same as the rectangle\'s height (6 cm).',
      workingOut: [
        '\\(\\text{Area of triangle} = \\frac{1}{2} \\times \\text{base} \\times \\text{height}\\)',
        '\\(\\text{Area} = \\frac{1}{2} \\times 10 \\times 6 = 30\\text{ cm}^2\\)'
      ].join('\n'),
      graphData: null
    },
    {
      explanation: 'Finally, subtract the area of the unshaded triangle from the area of the rectangle to find the shaded area.',
      workingOut: [
        '\\(\\text{Shaded Area} = \\text{Total Area} - \\text{Unshaded Area}\\)',
        '\\(\\text{Shaded Area} = 60 - 30 = 30\\text{ cm}^2\\)'
      ].join('\n'),
      graphData: null
    }
  ];

  // Answer is 30. Shuffle to B (index 1).
  const newOpts = [
    { text: '\\(20\\text{ cm}^2\\)', imageUrl: '' },
    { text: '\\(30\\text{ cm}^2\\)', imageUrl: '' }, // Correct
    { text: '\\(60\\text{ cm}^2\\)', imageUrl: '' },
    { text: '\\(40\\text{ cm}^2\\)', imageUrl: '' }
  ];

  const docRef = db.collection('questions').doc('y8-15a-q2b');
  await docRef.update({
    question: questionText,
    type: 'multiple_choice',
    options: newOpts,
    answer: '1',
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
        if (sq.id === 'y8-15a-q2b') {
          return {
            ...sq,
            question: questionText,
            type: 'multiple_choice',
            options: newOpts,
            answer: '1',
            solutionSteps: newSteps,
            graphData: null
          };
        }
        return sq;
      });
      await parentRef.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
    }
  }

  console.log("Updated y8-15a-q2b with SVG, shuffled options, clean steps, removed graphData");
  process.exit(0);
}

run().catch(console.error);
