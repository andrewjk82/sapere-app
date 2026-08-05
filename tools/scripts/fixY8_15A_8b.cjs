const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // Same rectangle as q8a but now x=15 is known
  // Rectangle: width=15, height=8, diagonal=17
  // Scale: 14px/unit -> width=210px, height=112px
  // A(50,180) B(260,180) C(260,68) D(50,68)

  const svg = `<div style="text-align:center;margin:16px 0;">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 260" width="330" height="260" style="font-family:sans-serif;">
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

  <!-- Rectangle ABCD -->
  <rect x="50" y="68" width="210" height="112" fill="#bfdbfe" stroke="#2563eb" stroke-width="2"/>
  
  <!-- Diagonal from A(50,180) to C(260,68) -->
  <line x1="50" y1="180" x2="260" y2="68" stroke="#1e40af" stroke-width="2" stroke-dasharray="7,4"/>

  <!-- Right angle markers -->
  <polyline points="50,165 65,165 65,180" fill="none" stroke="#2563eb" stroke-width="1.5"/>
  <polyline points="260,165 245,165 245,180" fill="none" stroke="#2563eb" stroke-width="1.5"/>
  <polyline points="260,83 245,83 245,68" fill="none" stroke="#2563eb" stroke-width="1.5"/>
  <polyline points="50,83 65,83 65,68" fill="none" stroke="#2563eb" stroke-width="1.5"/>

  <!-- Label diagonal = 17 -->
  <text x="155" y="118" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e40af" transform="rotate(-28,155,118)">17</text>

  <!-- Dimension line for width x=15 (bottom) -->
  <line x1="50" y1="180" x2="50" y2="225" stroke="#777" stroke-width="1"/>
  <line x1="260" y1="180" x2="260" y2="225" stroke="#777" stroke-width="1"/>
  <line x1="50" y1="215" x2="260" y2="215" stroke="#555" stroke-width="1.5" marker-end="url(#arrow-end)" marker-start="url(#arrow-start)"/>
  <text x="155" y="208" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">x = 15</text>

  <!-- Dimension line for height 8 (right side) -->
  <line x1="260" y1="68" x2="305" y2="68" stroke="#777" stroke-width="1"/>
  <line x1="260" y1="180" x2="305" y2="180" stroke="#777" stroke-width="1"/>
  <line x1="295" y1="68" x2="295" y2="180" stroke="#555" stroke-width="1.5" marker-end="url(#arrow-end-rot)" marker-start="url(#arrow-start-rot)"/>
  <text x="287" y="124" text-anchor="middle" font-size="14" font-weight="bold" fill="#333" transform="rotate(-90,287,124)">8</text>
</svg>
</div>`;

  const questionText = `Find \\(x\\) and hence find the area of the rectangle shown.

b) Hence find the area of the rectangle.

${svg}`;

  const newSteps = [
    {
      explanation: 'From part a), we found that \\(x = 15\\). This means the rectangle has a width of 15 and a height of 8.',
      workingOut: '\\(\\text{Width} = x = 15, \\quad \\text{Height} = 8\\)',
      graphData: null
    },
    {
      explanation: 'Now use the area formula for a rectangle.',
      workingOut: [
        '\\(\\text{Area} = \\text{width} \\times \\text{height}\\)',
        '\\(\\text{Area} = 15 \\times 8\\)',
        '\\(\\text{Area} = 120\\)'
      ].join('\n'),
      graphData: null
    }
  ];

  // Answer is 120. Shuffle to B (index 1).
  const newOpts = [
    { text: '\\(119\\)', imageUrl: '' },
    { text: '\\(120\\)', imageUrl: '' }, // Correct -> B
    { text: '\\(121\\)', imageUrl: '' },
    { text: '\\(-120\\)', imageUrl: '' }
  ];

  await db.collection('questions').doc('y8-15a-q8b').update({
    question: questionText,
    type: 'multiple_choice',
    options: newOpts,
    answer: '1',
    solutionSteps: newSteps,
    graphData: null,
    updatedAt: FieldValue.serverTimestamp()
  });

  const parentRef = db.collection('questions').doc('y8-15a-q8');
  const parentSnap = await parentRef.get();
  if (parentSnap.exists) {
    const parentData = parentSnap.data();
    if (parentData.subQuestions) {
      const newSubQs = parentData.subQuestions.map(sq => {
        if (sq.id === 'y8-15a-q8b') {
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

  console.log("Updated y8-15a-q8b with SVG, clean steps, shuffled options");
  process.exit(0);
}

run().catch(console.error);
