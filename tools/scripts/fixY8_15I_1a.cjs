const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const svg = `<div style="text-align:center;margin:16px 0;">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 360" width="400" height="360" style="font-family:sans-serif;">
  <defs>
    <marker id="arrow-end" markerWidth="6" markerHeight="4" refX="6" refY="2" orient="auto">
      <path d="M0,0 L6,2 L0,4 Z" fill="#555"/>
    </marker>
    <marker id="arrow-start" markerWidth="6" markerHeight="4" refX="0" refY="2" orient="auto">
      <path d="M6,0 L0,2 L6,4 Z" fill="#555"/>
    </marker>
  </defs>

  <!-- Kite ABCD -->
  <!-- O(200,160) -->
  <!-- A(104,160) B(296,160) C(200,88) D(200,288) -->
  <polygon points="104,160 200,88 296,160 200,288" fill="#bfdbfe" stroke="#2563eb" stroke-width="2"/>
  
  <!-- Diagonals -->
  <line x1="104" y1="160" x2="296" y2="160" stroke="#2563eb" stroke-width="2" stroke-dasharray="6,4"/>
  <line x1="200" y1="88" x2="200" y2="288" stroke="#2563eb" stroke-width="2" stroke-dasharray="6,4"/>

  <!-- Right angle at O(200,160) -->
  <polyline points="200,145 215,145 215,160" fill="none" stroke="#2563eb" stroke-width="1.5"/>

  <!-- Side labels -->
  <!-- AC (top-left) -->
  <text x="135" y="115" text-anchor="middle" font-size="14" font-weight="bold" fill="#333" transform="rotate(-36.87,135,115)">15 cm</text>
  <!-- BC (top-right) -->
  <text x="265" y="115" text-anchor="middle" font-size="14" font-weight="bold" fill="#333" transform="rotate(36.87,265,115)">15 cm</text>
  <!-- AD (bottom-left) -->
  <text x="135" y="235" text-anchor="middle" font-size="14" font-weight="bold" fill="#333" transform="rotate(53.13,135,235)">20 cm</text>
  <!-- BD (bottom-right) -->
  <text x="265" y="235" text-anchor="middle" font-size="14" font-weight="bold" fill="#333" transform="rotate(-53.13,265,235)">20 cm</text>

  <!-- Dimension line for horizontal diagonal (24) -->
  <line x1="104" y1="160" x2="104" y2="330" stroke="#777" stroke-width="1"/>
  <line x1="296" y1="160" x2="296" y2="330" stroke="#777" stroke-width="1"/>
  <line x1="104" y1="320" x2="296" y2="320" stroke="#555" stroke-width="1.5" marker-end="url(#arrow-end)" marker-start="url(#arrow-start)"/>
  <text x="200" y="313" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">24 cm</text>
</svg>
</div>`;

  const questionText = `Find the perimeter and area of the composite figure. It is formed by two isosceles triangles joining at a horizontal line of symmetry. The top triangle has side lengths of 15 cm, and the bottom triangle has side lengths of 20 cm. The horizontal diagonal measures \\(12 + 12 = 24\\) cm.

${svg}`;

  const newSteps = [
    {
      explanation: 'First, find the perimeter. The perimeter is the total length of the outside boundary of the shape. Add the four outer sides together.',
      workingOut: [
        '\\(\\text{Perimeter} = 15 + 15 + 20 + 20\\)',
        '\\(\\text{Perimeter} = 70\\text{ cm}\\)'
      ].join('\n'),
      graphData: null
    },
    {
      explanation: "Next, find the heights of the two triangles to calculate their areas. The horizontal diagonal (24 cm) is split into two 12 cm parts by the vertical line. Use Pythagoras' theorem (\\(c^2 = a^2 + b^2\\)) on the top and bottom right-angled triangles.",
      workingOut: [
        'Top triangle height (\\(h_1\\)):',
        '\\(15^2 = 12^2 + h_1^2 \\implies 225 = 144 + h_1^2 \\implies h_1^2 = 81 \\implies h_1 = 9\\text{ cm}\\)',
        '',
        'Bottom triangle height (\\(h_2\\)):',
        '\\(20^2 = 12^2 + h_2^2 \\implies 400 = 144 + h_2^2 \\implies h_2^2 = 256 \\implies h_2 = 16\\text{ cm}\\)'
      ].join('\n'),
      graphData: null
    },
    {
      explanation: 'Now, calculate the area of the top and bottom triangles using the formula \\(\\text{Area} = \\frac{1}{2} \\times \\text{base} \\times \\text{height}\\).',
      workingOut: [
        '\\(\\text{Top Area} = \\frac{1}{2} \\times 24 \\times 9 = 108\\text{ cm}^2\\)',
        '\\(\\text{Bottom Area} = \\frac{1}{2} \\times 24 \\times 16 = 192\\text{ cm}^2\\)'
      ].join('\n'),
      graphData: null
    },
    {
      explanation: 'Finally, add the two areas together to find the total area of the composite figure.',
      workingOut: [
        '\\(\\text{Total Area} = 108 + 192\\)',
        '\\(\\text{Total Area} = 300\\text{ cm}^2\\)'
      ].join('\n'),
      graphData: null
    }
  ];

  // Answer is Perimeter=70, Area=300. Shuffle to C (index 2).
  const newOpts = [
    { text: 'Perimeter = \\(70\\text{ cm}\\), Area = \\(290\\text{ cm}^2\\)', imageUrl: '' },
    { text: 'Perimeter = \\(65\\text{ cm}\\), Area = \\(300\\text{ cm}^2\\)', imageUrl: '' },
    { text: 'Perimeter = \\(70\\text{ cm}\\), Area = \\(300\\text{ cm}^2\\)', imageUrl: '' }, // Correct -> C
    { text: 'Perimeter = \\(80\\text{ cm}\\), Area = \\(310\\text{ cm}^2\\)', imageUrl: '' }
  ];

  await db.collection('questions').doc('y8-15i-q1a').update({
    question: questionText,
    type: 'multiple_choice',
    options: newOpts,
    answer: '2',
    solutionSteps: newSteps,
    graphData: null,
    requiresManualGrading: FieldValue.delete(),
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log("Updated y8-15i-q1a to multiple_choice with SVG, clean steps, shuffled options");
  process.exit(0);
}

run().catch(console.error);
