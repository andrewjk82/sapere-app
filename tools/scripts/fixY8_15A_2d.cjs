const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const svg = `<div style="text-align:center;margin:16px 0;">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 270" width="400" height="270" style="font-family:sans-serif;">
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

  <!-- Outer rectangle (just for background and borders) -->
  <rect x="30" y="40" width="320" height="180" fill="#ffffff" stroke="#2563eb" stroke-width="2"/>
  
  <!-- Shaded Trapezoid ABEF -->
  <!-- A(30,220), B(350,220), F(270,40), E(150,40) -->
  <polygon points="30,220 350,220 270,40 150,40" fill="#bfdbfe" stroke="#2563eb" stroke-width="2"/>
  
  <!-- Right angle markers -->
  <polyline points="30,205 45,205 45,220" fill="none" stroke="#2563eb" stroke-width="1.5"/>
  <polyline points="350,205 335,205 335,220" fill="none" stroke="#2563eb" stroke-width="1.5"/>
  <polyline points="350,55 335,55 335,40" fill="none" stroke="#2563eb" stroke-width="1.5"/>
  <polyline points="30,55 45,55 45,40" fill="none" stroke="#2563eb" stroke-width="1.5"/>

  <!-- Dimension lines -->
  <!-- Bottom: 16 cm -->
  <line x1="30" y1="220" x2="30" y2="255" stroke="#777" stroke-width="1"/>
  <line x1="350" y1="220" x2="350" y2="255" stroke="#777" stroke-width="1"/>
  <line x1="30" y1="245" x2="350" y2="245" stroke="#555" stroke-width="1.5" marker-end="url(#arrow-end)" marker-start="url(#arrow-start)"/>
  <text x="190" y="238" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">16 cm</text>
  
  <!-- Left: 9 cm -->
  <line x1="30" y1="40" x2="10" y2="40" stroke="#777" stroke-width="1"/>
  <line x1="30" y1="220" x2="10" y2="220" stroke="#777" stroke-width="1"/>
  <line x1="20" y1="40" x2="20" y2="220" stroke="#555" stroke-width="1.5" marker-end="url(#arrow-end-rot)" marker-start="url(#arrow-start-rot)"/>
  <text x="12" y="130" text-anchor="middle" font-size="14" font-weight="bold" fill="#333" transform="rotate(-90,12,130)">9 cm</text>

  <!-- Top Left: 6 cm -->
  <line x1="30" y1="40" x2="30" y2="15" stroke="#777" stroke-width="1"/>
  <line x1="150" y1="40" x2="150" y2="15" stroke="#777" stroke-width="1"/>
  <line x1="30" y1="25" x2="150" y2="25" stroke="#555" stroke-width="1.5" marker-end="url(#arrow-end)" marker-start="url(#arrow-start)"/>
  <text x="90" y="18" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">6 cm</text>

  <!-- Top Right: 4 cm -->
  <line x1="270" y1="40" x2="270" y2="15" stroke="#777" stroke-width="1"/>
  <line x1="350" y1="40" x2="350" y2="15" stroke="#777" stroke-width="1"/>
  <line x1="270" y1="25" x2="350" y2="25" stroke="#555" stroke-width="1.5" marker-end="url(#arrow-end)" marker-start="url(#arrow-start)"/>
  <text x="310" y="18" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">4 cm</text>

</svg>
</div>`;

  const questionText = `Find the area of the shaded region in the figure below.

${svg}
`;

  const newSteps = [
    {
      explanation: 'First, recognize that the shaded shape is a trapezoid. The bottom base is given as 16 cm, and the height is given as 9 cm.',
      workingOut: '\\(\\text{Bottom base} (a) = 16\\text{ cm}, \\quad \\text{Height} (h) = 9\\text{ cm}\\)',
      graphData: null
    },
    {
      explanation: 'Next, find the length of the top base of the shaded trapezoid. The total width of the top is also 16 cm (same as the bottom). Subtract the two unshaded white pieces (6 cm and 4 cm) from the total width.',
      workingOut: [
        '\\(\\text{Top base} (b) = 16 - 6 - 4\\)',
        '\\(\\text{Top base} (b) = 6\\text{ cm}\\)'
      ].join('\n'),
      graphData: null
    },
    {
      explanation: 'Finally, use the area formula for a trapezoid: \\(\\text{Area} = \\frac{(a + b)}{2} \\times h\\). Add the two parallel bases together, divide by 2, and multiply by the height.',
      workingOut: [
        '\\(\\text{Area} = \\frac{(16 + 6)}{2} \\times 9\\)',
        '\\(\\text{Area} = \\frac{22}{2} \\times 9\\)',
        '\\(\\text{Area} = 11 \\times 9 = 99\\text{ cm}^2\\)'
      ].join('\n'),
      graphData: null
    }
  ];

  // Answer is 99. Shuffle to B (index 1).
  const newOpts = [
    { text: '\\(100\\text{ cm}^2\\)', imageUrl: '' },
    { text: '\\(99\\text{ cm}^2\\)', imageUrl: '' }, // Correct -> B
    { text: '\\(54\\text{ cm}^2\\)', imageUrl: '' },
    { text: '\\(72\\text{ cm}^2\\)', imageUrl: '' }
  ];

  const docRef = db.collection('questions').doc('y8-15a-q2d');
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
        if (sq.id === 'y8-15a-q2d') {
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

  console.log("Updated y8-15a-q2d with SVG, clean steps, removed graphData");
  process.exit(0);
}

run().catch(console.error);
