const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // Same triangle as q7a but now h=12 is known, show dimension lines for both h and base
  const svg = `<div style="text-align:center;margin:16px 0;">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 290" width="380" height="290" style="font-family:sans-serif;">
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

  <!-- Triangle A(50,220) B(310,220) C(115,64) -->
  <polygon points="50,220 310,220 115,64" fill="#bfdbfe" stroke="#2563eb" stroke-width="2"/>
  
  <!-- Dashed height line C(115,64) -> H(115,220) -->
  <line x1="115" y1="64" x2="115" y2="220" stroke="#2563eb" stroke-width="2" stroke-dasharray="6,4"/>
  
  <!-- Right angle at H(115,220) -->
  <polyline points="115,205 130,205 130,220" fill="none" stroke="#2563eb" stroke-width="1.5"/>

  <!-- Label 13 on hypotenuse AC -->
  <text x="72" y="152" text-anchor="middle" font-size="14" font-weight="bold" fill="#333" transform="rotate(-67,72,152)">13</text>

  <!-- Dimension line for height h=12 (right side of dashed line) -->
  <line x1="115" y1="64" x2="340" y2="64" stroke="#777" stroke-width="1"/>
  <line x1="115" y1="220" x2="340" y2="220" stroke="#777" stroke-width="1"/>
  <line x1="330" y1="64" x2="330" y2="220" stroke="#555" stroke-width="1.5" marker-end="url(#arrow-end-rot)" marker-start="url(#arrow-start-rot)"/>
  <text x="322" y="142" text-anchor="middle" font-size="14" font-weight="bold" fill="#333" transform="rotate(-90,322,142)">h = 12</text>

  <!-- Dimension line for base 20 -->
  <line x1="50" y1="220" x2="50" y2="265" stroke="#777" stroke-width="1"/>
  <line x1="310" y1="220" x2="310" y2="265" stroke="#777" stroke-width="1"/>
  <line x1="50" y1="255" x2="310" y2="255" stroke="#555" stroke-width="1.5" marker-end="url(#arrow-end)" marker-start="url(#arrow-start)"/>
  <text x="180" y="248" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">20</text>
</svg>
</div>`;

  const questionText = `Use Pythagoras' theorem to find \\(h\\) and hence find the area of the triangle in the diagram.

b) Hence find the area of the triangle.

${svg}`;

  const newSteps = [
    {
      explanation: 'From part a), we found that \\(h = 12\\). Now we use the area formula for a triangle. The base of the whole triangle is 20 and the perpendicular height is \\(h = 12\\).',
      workingOut: '\\(\\text{Area} = \\frac{1}{2} \\times \\text{base} \\times \\text{height}\\)',
      graphData: null
    },
    {
      explanation: 'Substitute the values for the base and height into the formula.',
      workingOut: [
        '\\(\\text{Area} = \\frac{1}{2} \\times 20 \\times 12\\)',
        '\\(\\text{Area} = \\frac{1}{2} \\times 240\\)',
        '\\(\\text{Area} = 120\\)'
      ].join('\n'),
      graphData: null
    }
  ];

  // Answer is 120. Shuffle to D (index 3).
  const newOpts = [
    { text: '\\(119\\)', imageUrl: '' },
    { text: '\\(121\\)', imageUrl: '' },
    { text: '\\(-120\\)', imageUrl: '' },
    { text: '\\(120\\)', imageUrl: '' } // Correct -> D
  ];

  await db.collection('questions').doc('y8-15a-q7b').update({
    question: questionText,
    type: 'multiple_choice',
    options: newOpts,
    answer: '3',
    solutionSteps: newSteps,
    graphData: null,
    updatedAt: FieldValue.serverTimestamp()
  });

  const parentRef = db.collection('questions').doc('y8-15a-q7');
  const parentSnap = await parentRef.get();
  if (parentSnap.exists) {
    const parentData = parentSnap.data();
    if (parentData.subQuestions) {
      const newSubQs = parentData.subQuestions.map(sq => {
        if (sq.id === 'y8-15a-q7b') {
          return {
            ...sq,
            question: questionText,
            type: 'multiple_choice',
            options: newOpts,
            answer: '3',
            solutionSteps: newSteps,
            graphData: null
          };
        }
        return sq;
      });
      await parentRef.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
    }
  }

  console.log("Updated y8-15a-q7b with SVG, clean steps, shuffled options");
  process.exit(0);
}

run().catch(console.error);
