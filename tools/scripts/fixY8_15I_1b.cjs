const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const svg = `<div style="text-align:center;margin:16px 0;">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 260" width="280" height="260" style="font-family:sans-serif;">
  <defs>
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

  <!-- L-shape polygon -->
  <!-- A(30,210) B(30,30) C(130,30) D(130,110) E(230,110) F(230,210) -->
  <polygon points="30,210 30,30 130,30 130,110 230,110 230,210" fill="#bfdbfe" stroke="#2563eb" stroke-width="2"/>
  
  <!-- Dashed line showing the split for area calculation -->
  <line x1="130" y1="110" x2="130" y2="210" stroke="#2563eb" stroke-width="2" stroke-dasharray="6,4"/>

  <!-- Dimension lines -->
  
  <!-- Left edge: 18m -->
  <line x1="30" y1="30" x2="15" y2="30" stroke="#777" stroke-width="1"/>
  <line x1="30" y1="210" x2="15" y2="210" stroke="#777" stroke-width="1"/>
  <line x1="20" y1="30" x2="20" y2="210" stroke="#555" stroke-width="1.5" marker-end="url(#arrow-end-rot)" marker-start="url(#arrow-start-rot)"/>
  <text x="12" y="120" text-anchor="middle" font-size="14" font-weight="bold" fill="#333" transform="rotate(-90,12,120)">18 m</text>

  <!-- Top edge: 10m -->
  <line x1="30" y1="30" x2="30" y2="15" stroke="#777" stroke-width="1"/>
  <line x1="130" y1="30" x2="130" y2="15" stroke="#777" stroke-width="1"/>
  <line x1="30" y1="20" x2="130" y2="20" stroke="#555" stroke-width="1.5" marker-end="url(#arrow-end)" marker-start="url(#arrow-start)"/>
  <text x="80" y="13" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">10 m</text>

  <!-- Inner vertical edge: 8m -->
  <line x1="130" y1="30" x2="145" y2="30" stroke="#777" stroke-width="1"/>
  <line x1="130" y1="110" x2="145" y2="110" stroke="#777" stroke-width="1"/>
  <line x1="140" y1="30" x2="140" y2="110" stroke="#555" stroke-width="1.5" marker-end="url(#arrow-end-rot)" marker-start="url(#arrow-start-rot)"/>
  <text x="148" y="70" text-anchor="start" font-size="14" font-weight="bold" fill="#333">8 m</text>

  <!-- Inner horizontal edge: 10m -->
  <line x1="130" y1="110" x2="130" y2="95" stroke="#777" stroke-width="1"/>
  <line x1="230" y1="110" x2="230" y2="95" stroke="#777" stroke-width="1"/>
  <line x1="130" y1="100" x2="230" y2="100" stroke="#555" stroke-width="1.5" marker-end="url(#arrow-end)" marker-start="url(#arrow-start)"/>
  <text x="180" y="93" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">10 m</text>

  <!-- Right edge: 10m -->
  <line x1="230" y1="110" x2="245" y2="110" stroke="#777" stroke-width="1"/>
  <line x1="230" y1="210" x2="245" y2="210" stroke="#777" stroke-width="1"/>
  <line x1="240" y1="110" x2="240" y2="210" stroke="#555" stroke-width="1.5" marker-end="url(#arrow-end-rot)" marker-start="url(#arrow-start-rot)"/>
  <text x="248" y="160" text-anchor="start" font-size="14" font-weight="bold" fill="#333">10 m</text>

  <!-- Bottom edge: 20m -->
  <line x1="30" y1="210" x2="30" y2="225" stroke="#777" stroke-width="1"/>
  <line x1="230" y1="210" x2="230" y2="225" stroke="#777" stroke-width="1"/>
  <line x1="30" y1="220" x2="230" y2="220" stroke="#555" stroke-width="1.5" marker-end="url(#arrow-end)" marker-start="url(#arrow-start)"/>
  <text x="130" y="235" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">20 m</text>
</svg>
</div>`;

  const questionText = `Find the perimeter and area of the rectilinear figure with the following given dimensions.

${svg}`;

  const newSteps = [
    {
      explanation: 'First, find the perimeter. The perimeter is the total length of the outside boundary of the shape. Add all six outer side lengths together.',
      workingOut: [
        '\\(\\text{Perimeter} = 18 + 10 + 8 + 10 + 10 + 20\\)',
        '\\(\\text{Perimeter} = 76\\text{ m}\\)'
      ].join('\n'),
      graphData: null
    },
    {
      explanation: 'Next, to find the area, split the complex shape into two simple rectangles (as shown by the dashed line).',
      workingOut: 'We now have a left rectangle and a right rectangle.',
      graphData: null
    },
    {
      explanation: 'Calculate the area of the left rectangle. Its width is 10 m and its total height is 18 m.',
      workingOut: [
        '\\(\\text{Left Area} = 10 \\times 18\\)',
        '\\(\\text{Left Area} = 180\\text{ m}^2\\)'
      ].join('\n'),
      graphData: null
    },
    {
      explanation: 'Calculate the area of the right rectangle. Its width is 10 m and its height is 10 m.',
      workingOut: [
        '\\(\\text{Right Area} = 10 \\times 10\\)',
        '\\(\\text{Right Area} = 100\\text{ m}^2\\)'
      ].join('\n'),
      graphData: null
    },
    {
      explanation: 'Finally, add the two areas together to find the total area of the figure.',
      workingOut: [
        '\\(\\text{Total Area} = 180 + 100\\)',
        '\\(\\text{Total Area} = 280\\text{ m}^2\\)'
      ].join('\n'),
      graphData: null
    }
  ];

  // Answer is Perimeter=76, Area=280. Shuffle to D (index 3).
  const newOpts = [
    { text: 'Perimeter = \\(76\\text{ m}\\), Area = \\(260\\text{ m}^2\\)', imageUrl: '' },
    { text: 'Perimeter = \\(74\\text{ m}\\), Area = \\(280\\text{ m}^2\\)', imageUrl: '' },
    { text: 'Perimeter = \\(80\\text{ m}\\), Area = \\(300\\text{ m}^2\\)', imageUrl: '' },
    { text: 'Perimeter = \\(76\\text{ m}\\), Area = \\(280\\text{ m}^2\\)', imageUrl: '' } // Correct -> D
  ];

  await db.collection('questions').doc('y8-15i-q1b').update({
    question: questionText,
    type: 'multiple_choice',
    options: newOpts,
    answer: '3',
    solutionSteps: newSteps,
    graphData: null,
    requiresManualGrading: FieldValue.delete(),
    updatedAt: FieldValue.serverTimestamp()
  });

  const parentRef = db.collection('questions').doc('y8-15i-q1');
  const parentSnap = await parentRef.get();
  if (parentSnap.exists) {
    const parentData = parentSnap.data();
    if (parentData.subQuestions) {
      const newSubQs = parentData.subQuestions.map(sq => {
        if (sq.id === 'y8-15i-q1b') {
          return {
            ...sq,
            question: questionText,
            type: 'multiple_choice',
            options: newOpts,
            answer: '3',
            solutionSteps: newSteps,
            graphData: null,
            requiresManualGrading: FieldValue.delete()
          };
        }
        return sq;
      });
      await parentRef.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
    }
  }

  console.log("Updated y8-15i-q1b to multiple_choice with SVG, clean steps, shuffled options");
  process.exit(0);
}

run().catch(console.error);
