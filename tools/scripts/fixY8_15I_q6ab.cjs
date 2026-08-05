const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // ================= q6a =================
  const svg6a = `<div style="text-align:center;margin:16px 0;">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 220" width="280" height="220" style="font-family:sans-serif;">
  <defs>
    <marker id="arrow-end" markerWidth="6" markerHeight="4" refX="6" refY="2" orient="auto"><path d="M0,0 L6,2 L0,4 Z" fill="#555"/></marker>
    <marker id="arrow-start" markerWidth="6" markerHeight="4" refX="0" refY="2" orient="auto"><path d="M6,0 L0,2 L6,4 Z" fill="#555"/></marker>
    <marker id="arrow-end-rot" markerWidth="6" markerHeight="4" refX="6" refY="2" orient="auto"><path d="M0,0 L6,2 L0,4 Z" fill="#555"/></marker>
    <marker id="arrow-start-rot" markerWidth="6" markerHeight="4" refX="0" refY="2" orient="auto"><path d="M6,0 L0,2 L6,4 Z" fill="#555"/></marker>
  </defs>

  <!-- Rectangular Prism (open top style container) -->
  <polygon points="50,170 170,170 170,90 50,90" fill="#bfdbfe" stroke="#2563eb" stroke-width="2"/>
  <polygon points="170,170 230,120 230,40 170,90" fill="#93c5fd" stroke="#2563eb" stroke-width="2"/>
  <polygon points="50,90 170,90 230,40 110,40" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
  
  <line x1="50" y1="170" x2="110" y2="120" stroke="#2563eb" stroke-width="2" stroke-dasharray="4,4"/>
  <line x1="110" y1="120" x2="230" y2="120" stroke="#2563eb" stroke-width="2" stroke-dasharray="4,4"/>
  <line x1="110" y1="120" x2="110" y2="40" stroke="#2563eb" stroke-width="2" stroke-dasharray="4,4"/>

  <!-- Dimension lines -->
  <!-- 50 cm width -->
  <line x1="50" y1="170" x2="50" y2="195" stroke="#777" stroke-width="1"/>
  <line x1="170" y1="170" x2="170" y2="195" stroke="#777" stroke-width="1"/>
  <line x1="50" y1="185" x2="170" y2="185" stroke="#555" stroke-width="1.5" marker-end="url(#arrow-end)" marker-start="url(#arrow-start)"/>
  <text x="110" y="205" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">50 cm</text>

  <!-- 40 cm depth -->
  <text x="215" y="160" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">40 cm</text>
  
  <!-- 20 cm height -->
  <text x="35" y="135" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">20 cm</text>
</svg>
</div>`;

  const q6a_text = `Find the capacity of a rectangular container with dimensions 50 cm by 40 cm by 20 cm in Litres.

${svg6a}`;

  const steps6a = [
    {
      explanation: 'First, find the volume of the container in cubic centimetres.',
      workingOut: [
        '\\(\\text{Volume} = \\text{length} \\times \\text{width} \\times \\text{height}\\)',
        '\\(\\text{Volume} = 50 \\times 40 \\times 20 = 40000\\text{ cm}^3\\)'
      ].join('\n'),
      graphData: null
    },
    {
      explanation: 'Convert cubic centimetres to millilitres. Remember that \\(1\\text{ cm}^3\\) is exactly equal to \\(1\\text{ mL}\\).',
      workingOut: '\\(\\text{Capacity} = 40000\\text{ mL}\\)',
      graphData: null
    },
    {
      explanation: 'Convert millilitres to Litres. Divide by 1000 since \\(1\\text{ L} = 1000\\text{ mL}\\).',
      workingOut: '\\(40000 \\div 1000 = 40\\text{ L}\\)',
      graphData: null
    }
  ];

  const opts6a = [
    { text: '\\(400\\text{ L}\\)', imageUrl: '' },
    { text: '\\(4\\text{ L}\\)', imageUrl: '' },
    { text: '\\(40\\text{ L}\\)', imageUrl: '' }, // Correct -> C
    { text: '\\(4000\\text{ L}\\)', imageUrl: '' }
  ];

  // ================= q6b =================
  const svg6b = `<div style="text-align:center;margin:16px 0;">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 300" width="240" height="300" style="font-family:sans-serif;">
  <defs>
    <marker id="arrow-end" markerWidth="6" markerHeight="4" refX="6" refY="2" orient="auto"><path d="M0,0 L6,2 L0,4 Z" fill="#555"/></marker>
    <marker id="arrow-start" markerWidth="6" markerHeight="4" refX="0" refY="2" orient="auto"><path d="M6,0 L0,2 L6,4 Z" fill="#555"/></marker>
    <marker id="arrow-end-rot" markerWidth="6" markerHeight="4" refX="6" refY="2" orient="auto"><path d="M0,0 L6,2 L0,4 Z" fill="#555"/></marker>
    <marker id="arrow-start-rot" markerWidth="6" markerHeight="4" refX="0" refY="2" orient="auto"><path d="M6,0 L0,2 L6,4 Z" fill="#555"/></marker>
  </defs>

  <!-- Cylinder -->
  <path d="M 40,250 A 80 25 0 0 1 200 250" fill="none" stroke="#2563eb" stroke-width="2" stroke-dasharray="4,4"/>
  <path d="M 40,250 A 80 25 0 0 0 200 250" fill="#bfdbfe" stroke="#2563eb" stroke-width="2"/>
  <rect x="40" y="50" width="160" height="200" fill="#dbeafe" opacity="0.6"/>
  <line x1="40" y1="50" x2="40" y2="250" stroke="#2563eb" stroke-width="2"/>
  <line x1="200" y1="50" x2="200" y2="250" stroke="#2563eb" stroke-width="2"/>
  <ellipse cx="120" cy="50" rx="80" ry="25" fill="#bfdbfe" stroke="#2563eb" stroke-width="2"/>
  
  <circle cx="120" cy="50" r="3" fill="#1e40af"/>

  <!-- Dimension line for diameter 20cm at the top -->
  <line x1="40" y1="50" x2="200" y2="50" stroke="#555" stroke-width="1.5" stroke-dasharray="4,4"/>
  <text x="120" y="45" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">20 cm</text>

  <!-- Dimension line for height 30cm -->
  <line x1="200" y1="50" x2="225" y2="50" stroke="#777" stroke-width="1"/>
  <line x1="200" y1="250" x2="225" y2="250" stroke="#777" stroke-width="1"/>
  <line x1="215" y1="60" x2="215" y2="240" stroke="#555" stroke-width="1.5" marker-end="url(#arrow-end-rot)" marker-start="url(#arrow-start-rot)"/>
  <text x="225" y="150" text-anchor="start" font-size="14" font-weight="bold" fill="#333">30 cm</text>
</svg>
</div>`;

  const q6b_text = `Find the capacity of a cylindrical container with a diameter of 20 cm and a height of 30 cm. Leave your answer in terms of \\(\\pi\\) in mL, and give an approximate answer in Litres.

${svg6b}`;

  const steps6b = [
    {
      explanation: 'First, find the radius. The diameter is 20 cm, so the radius is half of that.',
      workingOut: '\\(r = 10\\text{ cm}\\)',
      graphData: null
    },
    {
      explanation: 'Calculate the volume in cubic centimetres.',
      workingOut: [
        '\\(V = \\pi \\times r^2 \\times h\\)',
        '\\(V = \\pi \\times 10^2 \\times 30\\)',
        '\\(V = 3000\\pi\\text{ cm}^3\\)'
      ].join('\n'),
      graphData: null
    },
    {
      explanation: 'Convert the volume to mL (\\(1\\text{ cm}^3 = 1\\text{ mL}\\)).',
      workingOut: '\\(\\text{Capacity} = 3000\\pi\\text{ mL}\\)',
      graphData: null
    },
    {
      explanation: 'To find the approximate capacity in Litres, multiply by \\(\\pi \\approx 3.14159\\) and divide by 1000.',
      workingOut: [
        '\\(3000 \\times 3.14159 \\approx 9424.8\\text{ mL}\\)',
        '\\(9424.8 \\div 1000 \\approx 9.4\\text{ L}\\)'
      ].join('\n'),
      graphData: null
    }
  ];

  const opts6b = [
    { text: '\\(1200\\pi\\text{ mL}\\) (approx \\(3.8\\text{ L}\\))', imageUrl: '' },
    { text: '\\(6000\\pi\\text{ mL}\\) (approx \\(18.8\\text{ L}\\))', imageUrl: '' },
    { text: '\\(300\\pi\\text{ mL}\\) (approx \\(0.9\\text{ L}\\))', imageUrl: '' },
    { text: '\\(3000\\pi\\text{ mL}\\) (approx \\(9.4\\text{ L}\\))', imageUrl: '' } // Correct -> D
  ];

  const updates = [
    { id: 'y8-15i-q6a', opts: opts6a, answer: '2', steps: steps6a, question: q6a_text },
    { id: 'y8-15i-q6b', opts: opts6b, answer: '3', steps: steps6b, question: q6b_text }
  ];

  for (const u of updates) {
    await db.collection('questions').doc(u.id).update({
      question: u.question,
      type: 'multiple_choice',
      options: u.opts,
      answer: u.answer,
      solutionSteps: u.steps.map(s => ({ explanation: s.explanation, workingOut: s.workingOut, graphData: null })),
      graphData: null,
      requiresManualGrading: FieldValue.delete(),
      updatedAt: FieldValue.serverTimestamp()
    });
  }

  const pRef = db.collection('questions').doc('y8-15i-q6');
  const pSnap = await pRef.get();
  if (pSnap.exists) {
    const pData = pSnap.data();
    if (pData.subQuestions) {
      const newSubQs = pData.subQuestions.map(sq => {
        const u = updates.find(x => x.id === sq.id);
        if (u) {
          return {
            ...sq,
            question: u.question,
            type: 'multiple_choice',
            options: u.opts,
            answer: u.answer,
            solutionSteps: u.steps.map(s => ({ explanation: s.explanation, workingOut: s.workingOut, graphData: null })),
            graphData: null,
            requiresManualGrading: FieldValue.delete()
          };
        }
        return sq;
      });
      await pRef.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
    }
  }

  console.log("Updated q6a, q6b");
  process.exit(0);
}

run().catch(console.error);
