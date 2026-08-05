const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // ====== Update q1c ======
  const svg1c = `<div style="text-align:center;margin:16px 0;">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" width="320" height="200" style="font-family:sans-serif;">
  <defs>
    <marker id="arrow-end" markerWidth="6" markerHeight="4" refX="6" refY="2" orient="auto"><path d="M0,0 L6,2 L0,4 Z" fill="#555"/></marker>
    <marker id="arrow-start" markerWidth="6" markerHeight="4" refX="0" refY="2" orient="auto"><path d="M6,0 L0,2 L6,4 Z" fill="#555"/></marker>
    <marker id="arrow-end-rot" markerWidth="6" markerHeight="4" refX="6" refY="2" orient="auto"><path d="M0,0 L6,2 L0,4 Z" fill="#555"/></marker>
    <marker id="arrow-start-rot" markerWidth="6" markerHeight="4" refX="0" refY="2" orient="auto"><path d="M6,0 L0,2 L6,4 Z" fill="#555"/></marker>
  </defs>

  <!-- Parallelogram ABCD -->
  <!-- A(50,150) B(210,150) C(270,70) D(110,70) -->
  <polygon points="50,150 210,150 270,70 110,70" fill="#bfdbfe" stroke="#2563eb" stroke-width="2"/>
  
  <!-- Height dashed line -->
  <line x1="110" y1="70" x2="110" y2="150" stroke="#2563eb" stroke-width="2" stroke-dasharray="6,4"/>
  
  <!-- Right angle for height -->
  <polyline points="110,135 125,135 125,150" fill="none" stroke="#2563eb" stroke-width="1.5"/>

  <!-- Height label -->
  <text x="120" y="115" font-size="14" font-weight="bold" fill="#1e40af">8 mm</text>

  <!-- Dimension lines -->
  <!-- Base: 16mm -->
  <line x1="50" y1="150" x2="50" y2="175" stroke="#777" stroke-width="1"/>
  <line x1="210" y1="150" x2="210" y2="175" stroke="#777" stroke-width="1"/>
  <line x1="50" y1="165" x2="210" y2="165" stroke="#555" stroke-width="1.5" marker-end="url(#arrow-end)" marker-start="url(#arrow-start)"/>
  <text x="130" y="185" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">16 mm</text>

  <!-- Slanted side: 10mm -->
  <text x="65" y="105" text-anchor="middle" font-size="14" font-weight="bold" fill="#333" transform="rotate(-53.13,65,105)">10 mm</text>
</svg>
</div>`;

  const questionText1c = `Find the perimeter and area of a parallelogram with a base of 16 mm, a slanted side of 10 mm, and a perpendicular height of 8 mm.

${svg1c}`;

  const steps1c = [
    {
      explanation: 'First, find the perimeter. A parallelogram has two pairs of equal opposite sides. The sides are 16 mm (base) and 10 mm (slanted side). Add all four sides together.',
      workingOut: [
        '\\(\\text{Perimeter} = 16 + 10 + 16 + 10\\)',
        '\\(\\text{Perimeter} = 52\\text{ mm}\\)'
      ].join('\n'),
      graphData: null
    },
    {
      explanation: 'Next, find the area. The area of a parallelogram is the base multiplied by the perpendicular height. Do not use the slanted side for the area!',
      workingOut: [
        '\\(\\text{Area} = \\text{base} \\times \\text{height}\\)',
        '\\(\\text{Area} = 16 \\times 8\\)',
        '\\(\\text{Area} = 128\\text{ mm}^2\\)'
      ].join('\n'),
      graphData: null
    }
  ];

  // Answer: Perimeter = 52 mm, Area = 128 mm^2. Put in B (index 1)
  const opts1c = [
    { text: 'Perimeter = \\(52\\text{ mm}\\), Area = \\(160\\text{ mm}^2\\)', imageUrl: '' },
    { text: 'Perimeter = \\(52\\text{ mm}\\), Area = \\(128\\text{ mm}^2\\)', imageUrl: '' }, // Correct -> B
    { text: 'Perimeter = \\(48\\text{ mm}\\), Area = \\(128\\text{ mm}^2\\)', imageUrl: '' },
    { text: 'Perimeter = \\(52\\text{ mm}\\), Area = \\(80\\text{ mm}^2\\)', imageUrl: '' }
  ];

  await db.collection('questions').doc('y8-15i-q1c').update({
    question: questionText1c,
    type: 'multiple_choice',
    options: opts1c,
    answer: '1',
    solutionSteps: steps1c,
    graphData: null,
    requiresManualGrading: FieldValue.delete(),
    updatedAt: FieldValue.serverTimestamp()
  });

  // ====== Update q1d ======
  const svg1d = `<div style="text-align:center;margin:16px 0;">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 320" width="240" height="320" style="font-family:sans-serif;">
  <defs>
    <marker id="arrow-end" markerWidth="6" markerHeight="4" refX="6" refY="2" orient="auto"><path d="M0,0 L6,2 L0,4 Z" fill="#555"/></marker>
    <marker id="arrow-start" markerWidth="6" markerHeight="4" refX="0" refY="2" orient="auto"><path d="M6,0 L0,2 L6,4 Z" fill="#555"/></marker>
    <marker id="arrow-end-rot" markerWidth="6" markerHeight="4" refX="6" refY="2" orient="auto"><path d="M0,0 L6,2 L0,4 Z" fill="#555"/></marker>
    <marker id="arrow-start-rot" markerWidth="6" markerHeight="4" refX="0" refY="2" orient="auto"><path d="M6,0 L0,2 L6,4 Z" fill="#555"/></marker>
  </defs>

  <!-- Composite shape -->
  <!-- A(50,270) B(190,270) C(190,70) D(50,70) -->
  <path d="M 50,70 L 50,270 L 190,270 L 190,70 A 70,70 0 0,0 50,70 Z" fill="#bfdbfe" stroke="#2563eb" stroke-width="2"/>
  
  <!-- Dashed line separating rectangle and semicircle -->
  <line x1="50" y1="70" x2="190" y2="70" stroke="#2563eb" stroke-width="2" stroke-dasharray="6,4"/>

  <!-- Dimension lines -->
  <!-- Base: 14 cm -->
  <line x1="50" y1="270" x2="50" y2="295" stroke="#777" stroke-width="1"/>
  <line x1="190" y1="270" x2="190" y2="295" stroke="#777" stroke-width="1"/>
  <line x1="50" y1="285" x2="190" y2="285" stroke="#555" stroke-width="1.5" marker-end="url(#arrow-end)" marker-start="url(#arrow-start)"/>
  <text x="120" y="305" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">14 cm</text>

  <!-- Left side: 20 cm -->
  <line x1="50" y1="70" x2="25" y2="70" stroke="#777" stroke-width="1"/>
  <line x1="50" y1="270" x2="25" y2="270" stroke="#777" stroke-width="1"/>
  <line x1="35" y1="70" x2="35" y2="270" stroke="#555" stroke-width="1.5" marker-end="url(#arrow-end-rot)" marker-start="url(#arrow-start-rot)"/>
  <text x="25" y="170" text-anchor="middle" font-size="14" font-weight="bold" fill="#333" transform="rotate(-90,25,170)">20 cm</text>
</svg>
</div>`;

  const questionText1d = `Find the perimeter and area of the composite figure consisting of a rectangle with a semicircle on top. The base of the rectangle is 14 cm, and its vertical sides are 20 cm each. Give answers in terms of \\(\\pi\\).

${svg1d}`;

  const steps1d = [
    {
      explanation: 'First, find the perimeter (the total outside boundary). The boundary consists of three straight edges of the rectangle (left, bottom, right) and the curved arc of the semicircle. Note: the top edge of the rectangle is inside the shape and is NOT part of the perimeter.',
      workingOut: [
        'Straight edges: \\(20 + 14 + 20 = 54\\text{ cm}\\)',
        'Semicircle arc: \\(\\frac{1}{2} \\times \\pi \\times d = \\frac{1}{2} \\times \\pi \\times 14 = 7\\pi\\text{ cm}\\)',
        '\\(\\text{Total Perimeter} = (54 + 7\\pi)\\text{ cm}\\)'
      ].join('\n'),
      graphData: null
    },
    {
      explanation: 'Next, find the total area. The shape is made of a rectangle and a semicircle, so calculate their areas separately and add them.',
      workingOut: [
        '\\(\\text{Rectangle Area} = \\text{width} \\times \\text{height} = 14 \\times 20 = 280\\text{ cm}^2\\)'
      ].join('\n'),
      graphData: null
    },
    {
      explanation: 'The semicircle has a diameter of 14 cm, which means its radius (\\(r\\)) is 7 cm. Find the area of the semicircle.',
      workingOut: [
        '\\(\\text{Semicircle Area} = \\frac{1}{2} \\times \\pi \\times r^2\\)',
        '\\(\\text{Semicircle Area} = \\frac{1}{2} \\times \\pi \\times 7^2 = \\frac{49\\pi}{2}\\text{ cm}^2\\)'
      ].join('\n'),
      graphData: null
    },
    {
      explanation: 'Add the two areas together.',
      workingOut: '\\(\\text{Total Area} = \\left(280 + \\frac{49\\pi}{2}\\right)\\text{ cm}^2\\)',
      graphData: null
    }
  ];

  // Answer: Perimeter = 54 + 7pi, Area = 280 + 49pi/2. Put in C (index 2)
  const opts1d = [
    { text: 'Perimeter = \\((68 + 7\\pi)\\text{ cm}\\), Area = \\(\\left(280 + \\frac{49\\pi}{2}\\right)\\text{ cm}^2\\)', imageUrl: '' },
    { text: 'Perimeter = \\((54 + 14\\pi)\\text{ cm}\\), Area = \\((280 + 49\\pi)\\text{ cm}^2\\)', imageUrl: '' },
    { text: 'Perimeter = \\((54 + 7\\pi)\\text{ cm}\\), Area = \\(\\left(280 + \\frac{49\\pi}{2}\\right)\\text{ cm}^2\\)', imageUrl: '' }, // Correct -> C
    { text: 'Perimeter = \\((54 + 7\\pi)\\text{ cm}\\), Area = \\((280 + 49\\pi)\\text{ cm}^2\\)', imageUrl: '' }
  ];

  await db.collection('questions').doc('y8-15i-q1d').update({
    question: questionText1d,
    type: 'multiple_choice',
    options: opts1d,
    answer: '2',
    solutionSteps: steps1d,
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
        if (sq.id === 'y8-15i-q1c') {
          return {
            ...sq,
            question: questionText1c,
            type: 'multiple_choice',
            options: opts1c,
            answer: '1',
            solutionSteps: steps1c,
            graphData: null,
            requiresManualGrading: FieldValue.delete()
          };
        }
        if (sq.id === 'y8-15i-q1d') {
          return {
            ...sq,
            question: questionText1d,
            type: 'multiple_choice',
            options: opts1d,
            answer: '2',
            solutionSteps: steps1d,
            graphData: null,
            requiresManualGrading: FieldValue.delete()
          };
        }
        return sq;
      });
      await parentRef.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
    }
  }

  console.log("Updated y8-15i-q1c and q1d to multiple_choice with SVG, clean steps, shuffled options");
  process.exit(0);
}

run().catch(console.error);
