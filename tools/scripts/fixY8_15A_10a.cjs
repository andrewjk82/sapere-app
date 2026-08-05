const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // Scale: 1 cm = 3 m
  // House: 10 cm × 7 cm → 30 m × 21 m
  // Family room: 5 cm × 3.5 cm → 15 m × 10.5 m
  // Kitchen: 3.5 cm × 3 cm → 10.5 m × 9 m → area = 94.5 m²
  // Hall: 1.5 cm × 3.5 cm → 4.5 m × 10.5 m
  // Lounge: width 5 cm → 15 m
  // Patio: 5 cm × 3.5 cm → 15 m × 10.5 m → area = 157.5 m²

  // SVG floor plan (viewBox 0 0 400 280)
  // Scale: 1 cm on paper = 28px in SVG (280px total height for 10cm, but house is 10×7)
  // Let's use scale factor: 1 cm = 30px
  // House: 300 × 210 px
  // Layout (paper cm, y from top):
  //   Family room: x=0..5, y=0..3.5
  //   Kitchen:     x=5..8.5, y=0..3
  //   Hall:        x=8.5..10, y=0..3.5
  //   Lounge:      x=5..10, y=3..7  (irregular shape at top-right)
  //   Patio:       x=0..5, y=3.5..7

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 260" width="380" height="260" style="font-family:sans-serif;background:#f8f9fa;border-radius:8px;">
  <!-- Background -->
  <rect width="380" height="260" fill="#f8f9fa"/>
  
  <!-- Scale: 1 cm = 30px. House origin at (30, 20) -->
  <!-- House outer border -->
  <rect x="30" y="20" width="300" height="210" fill="none" stroke="#333" stroke-width="2.5"/>
  
  <!-- Internal walls -->
  <!-- Vertical wall between family room/patio and kitchen/hall/lounge at x=5cm (150px from left) -->
  <line x1="180" y1="20" x2="180" y2="230" stroke="#333" stroke-width="1.5"/>
  
  <!-- Horizontal wall separating top row from bottom row at y=3.5cm for left side -->
  <!-- Family room bottom edge at y=3.5cm (105px from top) -->
  <line x1="30" y1="125" x2="180" y2="125" stroke="#333" stroke-width="1.5"/>
  
  <!-- Kitchen top right portion: x=5cm to x=8.5cm, height 3cm -->
  <!-- Vertical wall between kitchen and hall at x=8.5cm (255px from left) -->
  <line x1="255" y1="20" x2="255" y2="110" stroke="#333" stroke-width="1.5"/>
  <!-- Horizontal wall below kitchen and hall at y=3cm (90px from top) -->
  <line x1="180" y1="110" x2="330" y2="110" stroke="#333" stroke-width="1.5"/>
  
  <!-- Room fills -->
  <!-- Family Room (top-left) -->
  <rect x="30" y="20" width="150" height="105" fill="#dbeafe" opacity="0.7"/>
  <!-- Kitchen (top-right upper part) -->
  <rect x="180" y="20" width="75" height="90" fill="#dcfce7" opacity="0.7"/>
  <!-- Hall (top-right corner) -->
  <rect x="255" y="20" width="75" height="90" fill="#fef9c3" opacity="0.7"/>
  <!-- Lounge (right lower area) -->
  <rect x="180" y="110" width="150" height="120" fill="#f3e8ff" opacity="0.7"/>
  <!-- Patio (bottom-left) -->
  <rect x="30" y="125" width="150" height="105" fill="#ffe4e6" opacity="0.7"/>
  
  <!-- Room Labels -->
  <text x="105" y="72" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e40af">Family Room</text>
  <text x="105" y="88" text-anchor="middle" font-size="11" fill="#1e40af">5 cm × 3.5 cm</text>
  
  <text x="218" y="62" text-anchor="middle" font-size="12" font-weight="bold" fill="#166534">Kitchen</text>
  <text x="218" y="76" text-anchor="middle" font-size="10" fill="#166534">3.5 × 3 cm</text>
  
  <text x="293" y="62" text-anchor="middle" font-size="12" font-weight="bold" fill="#854d0e">Hall</text>
  <text x="293" y="76" text-anchor="middle" font-size="10" fill="#854d0e">1.5 × 3.5 cm</text>
  
  <text x="255" y="168" text-anchor="middle" font-size="13" font-weight="bold" fill="#6b21a8">Lounge</text>
  <text x="255" y="184" text-anchor="middle" font-size="11" fill="#6b21a8">width 5 cm</text>
  
  <text x="105" y="175" text-anchor="middle" font-size="13" font-weight="bold" fill="#9f1239">Patio</text>
  <text x="105" y="191" text-anchor="middle" font-size="11" fill="#9f1239">5 cm × 3.5 cm</text>
  
  <!-- Dimension arrows and labels -->
  <!-- Total width: 10 cm at bottom -->
  <line x1="30" y1="245" x2="330" y2="245" stroke="#555" stroke-width="1.5" marker-end="url(#arrow)" marker-start="url(#arrow)"/>
  <text x="180" y="258" text-anchor="middle" font-size="12" fill="#555">10 cm (total length)</text>
  
  <!-- Total height: 7 cm on right -->
  <line x1="348" y1="20" x2="348" y2="230" stroke="#555" stroke-width="1.5" marker-end="url(#arrow)" marker-start="url(#arrow)"/>
  <text x="360" y="128" text-anchor="middle" font-size="12" fill="#555" transform="rotate(90,360,128)">7 cm (total width)</text>
  
  <!-- Arrow markers -->
  <defs>
    <marker id="arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill="#555"/>
    </marker>
  </defs>
  
  <!-- Title -->
  <text x="180" y="13" text-anchor="middle" font-size="12" fill="#666" font-style="italic">Floor Plan (Scale: 1 cm = 3 m)</text>
</svg>`;

  const question = `This diagram is the ground floor plan of a house drawn to a scale of \\(1\\text{ cm}\\) to represent \\(3\\text{ m}\\).

${svg}

The measured dimensions on the paper are:
- Total length of the house: \\(10\\text{ cm}\\), Total width: \\(7\\text{ cm}\\)
- Family room: \\(5\\text{ cm} \\times 3.5\\text{ cm}\\)
- Kitchen: \\(3.5\\text{ cm} \\times 3\\text{ cm}\\)
- Hall: \\(1.5\\text{ cm} \\times 3.5\\text{ cm}\\)
- Lounge: width \\(5\\text{ cm}\\) at its widest point
- Patio: \\(5\\text{ cm} \\times 3.5\\text{ cm}\\)

a) What is the length of the house (in metres)?`;

  const solutionSteps = [
    {
      explanation: 'Identify the scale. The scale tells you: every 1 cm on the plan represents 3 m in real life.',
      workingOut: '\\(\\text{Scale: } 1\\text{ cm} = 3\\text{ m}\\)',
      graphData: null
    },
    {
      explanation: 'Find the length of the house on the plan. Looking at the diagram, the total length of the house is measured as 10 cm.',
      workingOut: '\\(\\text{Length on plan} = 10\\text{ cm}\\)',
      graphData: null
    },
    {
      explanation: 'Convert the plan measurement to the real-life measurement by multiplying by the scale factor.',
      workingOut: [
        '\\(\\text{Real length} = 10\\text{ cm} \\times 3\\text{ m/cm}\\)',
        '\\(\\text{Real length} = 30\\text{ m}\\)'
      ].join('\n'),
      graphData: null
    }
  ];

  await db.collection('questions').doc('y8-15a-q10a').update({
    type: 'multiple_choice',
    question: question,
    options: [
      { text: '\\(27\\text{ m}\\)', imageUrl: '' },
      { text: '\\(31\\text{ m}\\)', imageUrl: '' },
      { text: '\\(30\\text{ m}\\)', imageUrl: '' }, // Correct → C
      { text: '\\(10\\text{ m}\\)', imageUrl: '' }
    ],
    answer: '2',
    solutionSteps: solutionSteps,
    updatedAt: FieldValue.serverTimestamp()
  });

  // Update parent subQuestions array
  const parentRef = db.collection('questions').doc('y8-15a-q10');
  const parentSnap = await parentRef.get();
  const parentData = parentSnap.data();
  if (parentData && parentData.subQuestions) {
    const newSubQs = parentData.subQuestions.map(sq => {
      if (sq.id === 'y8-15a-q10a') {
        return {
          ...sq,
          question: question,
          type: 'multiple_choice',
          options: [
            { text: '\\(27\\text{ m}\\)', imageUrl: '' },
            { text: '\\(31\\text{ m}\\)', imageUrl: '' },
            { text: '\\(30\\text{ m}\\)', imageUrl: '' },
            { text: '\\(10\\text{ m}\\)', imageUrl: '' }
          ],
          answer: '2',
          solutionSteps: solutionSteps
        };
      }
      return sq;
    });
    await parentRef.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
  }

  console.log("Updated y8-15a-q10a with SVG floor plan");
  process.exit(0);
}

run().catch(console.error);
