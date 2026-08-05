const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');
const { touchChapterIndex } = require('./_lib/touchChapterIndex.js');

const svgs = {
  'y9-16g-q12a': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 250" width="100%" height="100%">
  <!-- Dashed back edges -->
  <line x1="50" y1="200" x2="110" y2="170" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,4" />
  <line x1="110" y1="170" x2="260" y2="170" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,4" />
  <line x1="110" y1="170" x2="110" y2="50" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,4" />
  
  <!-- Faces -->
  <polygon points="50,80 140,80 200,50 110,50" fill="#e2e8f0" stroke="#334155" stroke-width="2" />
  <polygon points="140,80 140,110 200,80 200,50" fill="#cbd5e1" stroke="#334155" stroke-width="2" />
  <polygon points="140,110 200,110 260,80 200,80" fill="#e2e8f0" stroke="#334155" stroke-width="2" />
  <polygon points="200,110 200,200 260,170 260,80" fill="#cbd5e1" stroke="#334155" stroke-width="2" />
  <polygon points="50,200 200,200 200,110 140,110 140,80 50,80" fill="#f8fafc" stroke="#334155" stroke-width="2" />

  <!-- Labels -->
  <text x="35" y="140" font-family="sans-serif" font-size="14" fill="#0f172a" text-anchor="end">20 cm</text>
  <text x="215" y="155" font-family="sans-serif" font-size="14" fill="#0f172a" text-anchor="start">15 cm</text>
  <text x="95" y="70" font-family="sans-serif" font-size="14" fill="#0f172a" text-anchor="middle">15 cm</text>
  <text x="170" y="100" font-family="sans-serif" font-size="14" fill="#0f172a" text-anchor="middle">10 cm</text>
  <text x="240" y="130" font-family="sans-serif" font-size="14" fill="#0f172a" text-anchor="start">50 cm</text>
</svg>`,
  'y9-16g-q12b': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 270" width="100%" height="100%">
  <!-- Dashed back edges -->
  <line x1="40" y1="230" x2="160" y2="210" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,4" />
  <line x1="160" y1="210" x2="250" y2="210" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,4" />
  <line x1="160" y1="210" x2="160" y2="60" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,4" />
  <line x1="40" y1="80" x2="160" y2="60" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,4" />
  <line x1="160" y1="60" x2="205" y2="15" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,4" />

  <!-- Faces -->
  <polygon points="85,35 130,80 250,60 205,15" fill="#cbd5e1" stroke="#334155" stroke-width="2" />
  <polygon points="130,80 250,60 250,210 130,230" fill="#e2e8f0" stroke="#334155" stroke-width="2" />
  <polygon points="40,230 130,230 130,80 85,35 40,80" fill="#f8fafc" stroke="#334155" stroke-width="2" />

  <!-- Internal lines for roof height -->
  <line x1="40" y1="80" x2="130" y2="80" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,4" />
  <line x1="85" y1="80" x2="85" y2="35" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,4" />
  
  <!-- Labels -->
  <text x="85" y="250" font-family="sans-serif" font-size="14" fill="#0f172a" text-anchor="middle">6 m</text>
  <text x="25" y="155" font-family="sans-serif" font-size="14" fill="#0f172a" text-anchor="end">10 m</text>
  <text x="190" y="235" font-family="sans-serif" font-size="14" fill="#0f172a" text-anchor="middle">30 m</text>
  <text x="75" y="65" font-family="sans-serif" font-size="14" fill="#0f172a" text-anchor="end">3 m</text>
</svg>`
};

const solutions = {
  'y9-16g-q12a': [
    {
      explanation: "First, calculate the cross-sectional area of the front L-shaped face. Split it into two rectangles: the left step and the right step.",
      workingOut: "\\\\( \\\\text{Area (left)} = 15 \\\\times 20 = 300\\\\text{ cm}^2 \\\\\\\\ \\\\text{Area (right)} = 10 \\\\times 15 = 150\\\\text{ cm}^2 \\\\)",
      graphData: null
    },
    {
      explanation: "Add the two rectangular areas together to find the total cross-sectional area of the front face.",
      workingOut: "\\\\( \\\\text{Total Area} = 300 + 150 = 450\\\\text{ cm}^2 \\\\)",
      graphData: null
    },
    {
      explanation: "Multiply the total cross-sectional area by the length of the solid to find the volume.",
      workingOut: "\\\\( \\\\text{Volume} = \\\\text{Base Area} \\\\times \\\\text{Length} = 450 \\\\times 50 \\\\)",
      graphData: null
    },
    {
      explanation: "Calculate the final volume and state the units.",
      workingOut: "\\\\( \\\\text{Volume} = 22,500\\\\text{ cm}^3 \\\\)",
      graphData: null
    }
  ],
  'y9-16g-q12b': [
    {
      explanation: "First, calculate the area of the front cross-section (the pentagon). Split it into the main rectangular block and the triangular roof.",
      workingOut: "\\\\( \\\\text{Area (rectangle)} = 6 \\\\times 10 = 60\\\\text{ m}^2 \\\\\\\\ \\\\text{Area (triangle)} = \\\\frac{1}{2} \\\\times 6 \\\\times 3 = 9\\\\text{ m}^2 \\\\)",
      graphData: null
    },
    {
      explanation: "Add the rectangle and triangle areas to find the total cross-sectional area of the front face.",
      workingOut: "\\\\( \\\\text{Total Area} = 60 + 9 = 69\\\\text{ m}^2 \\\\)",
      graphData: null
    },
    {
      explanation: "Multiply the total cross-sectional area by the length of the house to find the volume.",
      workingOut: "\\\\( \\\\text{Volume} = \\\\text{Base Area} \\\\times \\\\text{Length} = 69 \\\\times 30 \\\\)",
      graphData: null
    },
    {
      explanation: "Calculate the final volume and state the units.",
      workingOut: "\\\\( \\\\text{Volume} = 2,070\\\\text{ m}^3 \\\\)",
      graphData: null
    }
  ]
};

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();

  const seedPath = '/Users/andrewkim/Desktop/sapere1/src/constants/seedYear9Ch16GQuestions.js';
  let content = fs.readFileSync(seedPath, 'utf8');
  
  const prefix = 'export const Y9_CH16G_QUESTIONS = ';
  if (!content.startsWith(prefix)) {
    console.error('File does not start with expected prefix.');
    process.exit(1);
  }
  
  const arrayString = content.slice(prefix.length).trim().replace(/;$/, '');
  let questions = JSON.parse(arrayString);
  
  let updatedCount = 0;
  for (let q of questions) {
    if (q.id === 'y9-16g-q12a' || q.id === 'y9-16g-q12b') {
      q.graphData = { svg: svgs[q.id] };
      q.solutionSteps = solutions[q.id];
      
      const docRef = db.collection('questions').doc(q.id);
      batch.update(docRef, { 
        graphData: q.graphData,
        solutionSteps: q.solutionSteps,
        updatedAt: FieldValue.serverTimestamp()
      });
      updatedCount++;
    }
  }

  await batch.commit();
  console.log(`Successfully updated ${updatedCount} questions (SVG and Solutions) in Firestore.`);
  
  await touchChapterIndex(db, 'y9-16g');

  const output = prefix + JSON.stringify(questions, null, 2) + ';\n';
  fs.writeFileSync(seedPath, output);
  console.log('Successfully updated seedYear9Ch16GQuestions.js locally.');

  process.exit(0);
}

run().catch(console.error);
