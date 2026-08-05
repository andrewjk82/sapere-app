const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const svg = `<div style="text-align:center;margin:16px 0;">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" width="320" height="200" style="font-family:sans-serif;">
  <defs>
    <!-- Scaled down arrows -->
    <marker id="arrow-end" markerWidth="6" markerHeight="4" refX="6" refY="2" orient="auto">
      <path d="M0,0 L6,2 L0,4 Z" fill="#555"/>
    </marker>
    <marker id="arrow-start" markerWidth="6" markerHeight="4" refX="0" refY="2" orient="auto">
      <path d="M6,0 L0,2 L6,4 Z" fill="#555"/>
    </marker>
    <marker id="arrow-end-rot" markerWidth="6" markerHeight="4" refX="6" refY="2" orient="auto">
      <path d="M0,0 L6,2 L0,4 Z" fill="#555"/>
    </marker>
    <marker id="arrow-start-rot" markerWidth="6" markerHeight="4" refX="0" refY="2" orient="auto">
      <path d="M6,0 L0,2 L6,4 Z" fill="#555"/>
    </marker>
  </defs>

  <!-- Rectangle -->
  <rect x="20" y="20" width="240" height="120" fill="#bfdbfe" stroke="#2563eb" stroke-width="2"/>
  
  <!-- Right angle marker at bottom-left -->
  <polyline points="20,125 35,125 35,140" fill="none" stroke="#2563eb" stroke-width="1.5"/>

  <!-- Dimension lines -->
  <!-- Bottom: 3x -->
  <line x1="20" y1="140" x2="20" y2="185" stroke="#777" stroke-width="1"/>
  <line x1="260" y1="140" x2="260" y2="185" stroke="#777" stroke-width="1"/>
  <line x1="20" y1="175" x2="260" y2="175" stroke="#555" stroke-width="1.5" marker-end="url(#arrow-end)" marker-start="url(#arrow-start)"/>
  <text x="140" y="168" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">3x</text>
  
  <!-- Right: 5y -->
  <line x1="260" y1="20" x2="305" y2="20" stroke="#777" stroke-width="1"/>
  <line x1="260" y1="140" x2="305" y2="140" stroke="#777" stroke-width="1"/>
  <line x1="295" y1="20" x2="295" y2="140" stroke="#555" stroke-width="1.5" marker-end="url(#arrow-end-rot)" marker-start="url(#arrow-start-rot)"/>
  <text x="287" y="80" text-anchor="middle" font-size="14" font-weight="bold" fill="#333" transform="rotate(-90,287,80)">5y</text>
</svg>
</div>`;

  const questionText = `Write down an algebraic formula, in simplest form, for the area of the rectangle shown.

${svg}`;

  const newSteps = [
    {
      explanation: 'First, recall the formula for the area of a rectangle.',
      workingOut: '\\(\\text{Area} = \\text{width} \\times \\text{height}\\)',
      graphData: null
    },
    {
      explanation: 'Substitute the algebraic expressions given for the sides. The width is \\(3x\\) and the height is \\(5y\\).',
      workingOut: '\\(\\text{Area} = 3x \\times 5y\\)',
      graphData: null
    },
    {
      explanation: 'Multiply the numbers together (\\(3 \\times 5 = 15\\)) and write the variables next to each other to express multiplication in algebra.',
      workingOut: [
        '\\(\\text{Area} = (3 \\times 5) \\times (x \\times y)\\)',
        '\\(\\text{Area} = 15xy\\)'
      ].join('\n'),
      graphData: null
    }
  ];

  // Answer is 15xy. Shuffle to C (index 2).
  const newOpts = [
    { text: '\\(-15xy\\)', imageUrl: '' },
    { text: '\\(15xy + 1\\)', imageUrl: '' },
    { text: '\\(15xy\\)', imageUrl: '' }, // Correct -> C
    { text: '\\(\\dfrac{13}{6}\\)', imageUrl: '' }
  ];

  const docRef = db.collection('questions').doc('y8-15a-q5a');
  await docRef.update({
    question: questionText,
    type: 'multiple_choice',
    options: newOpts,
    answer: '2',
    solutionSteps: newSteps,
    graphData: null,
    updatedAt: FieldValue.serverTimestamp()
  });

  const parentRef = db.collection('questions').doc('y8-15a-q5');
  const parentSnap = await parentRef.get();
  if (parentSnap.exists) {
    const parentData = parentSnap.data();
    if (parentData.subQuestions) {
      const newSubQs = parentData.subQuestions.map(sq => {
        if (sq.id === 'y8-15a-q5a') {
          return {
            ...sq,
            question: questionText,
            type: 'multiple_choice',
            options: newOpts,
            answer: '2',
            solutionSteps: newSteps,
            graphData: null
          };
        }
        return sq;
      });
      await parentRef.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
    }
  }

  console.log("Updated y8-15a-q5a with SVG, clean steps, removed graphData");
  process.exit(0);
}

run().catch(console.error);
