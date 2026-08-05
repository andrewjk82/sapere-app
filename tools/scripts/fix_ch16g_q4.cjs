const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');
const { touchChapterIndex } = require('./_lib/touchChapterIndex.js');

const svgs = {
  'y9-16g-q4a': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 250" width="100%" height="100%">
  <polygon points="60,200 240,200 220,100 80,100" fill="#f8fafc" stroke="#334155" stroke-width="2" />
  <line x1="150" y1="100" x2="150" y2="200" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,4" />
  <rect x="150" y="190" width="10" height="10" fill="none" stroke="#94a3b8" stroke-width="1.5" />
  <text x="150" y="80" font-family="sans-serif" font-size="16" fill="#0f172a" text-anchor="middle">7 cm</text>
  <text x="150" y="220" font-family="sans-serif" font-size="16" fill="#0f172a" text-anchor="middle">9 cm</text>
  <text x="160" y="150" font-family="sans-serif" font-size="16" fill="#0f172a" text-anchor="start">5 cm</text>
</svg>`,
  'y9-16g-q4b': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 250" width="100%" height="100%">
  <polygon points="90,100 210,100 210,200 90,200" fill="#f8fafc" stroke="#334155" stroke-width="2" />
  <path d="M 90,100 A 60,60 0 0,1 210,100" fill="#e2e8f0" stroke="#334155" stroke-width="2" />
  <line x1="90" y1="100" x2="210" y2="100" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,4" />
  <line x1="150" y1="100" x2="150" y2="40" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,4" />
  <text x="160" y="70" font-family="sans-serif" font-size="16" fill="#0f172a" text-anchor="start">r = 3 cm</text>
  <text x="150" y="220" font-family="sans-serif" font-size="16" fill="#0f172a" text-anchor="middle">6 cm</text>
  <text x="70" y="150" font-family="sans-serif" font-size="16" fill="#0f172a" text-anchor="end">5 cm</text>
</svg>`,
  'y9-16g-q4c': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 250" width="100%" height="100%">
  <polygon points="90,200 210,200 210,80 150,140 90,80" fill="#f8fafc" stroke="#334155" stroke-width="2" />
  <line x1="90" y1="80" x2="210" y2="80" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,4" />
  <line x1="150" y1="80" x2="150" y2="140" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,4" />
  <text x="150" y="220" font-family="sans-serif" font-size="16" fill="#0f172a" text-anchor="middle">4 cm</text>
  <text x="70" y="140" font-family="sans-serif" font-size="16" fill="#0f172a" text-anchor="end">4 cm</text>
  <text x="160" y="110" font-family="sans-serif" font-size="16" fill="#0f172a" text-anchor="start">2 cm depth</text>
</svg>`,
  'y9-16g-q4d': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 250" width="100%" height="100%">
  <polygon points="150,60 230,100 150,180 70,100" fill="#f8fafc" stroke="#334155" stroke-width="2" />
  <line x1="70" y1="100" x2="230" y2="100" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,4" />
  <line x1="150" y1="60" x2="150" y2="180" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,4" />
  <rect x="150" y="100" width="10" height="10" fill="none" stroke="#94a3b8" stroke-width="1.5" />
  <text x="200" y="90" font-family="sans-serif" font-size="16" fill="#0f172a" text-anchor="middle">8 cm</text>
  <text x="140" y="140" font-family="sans-serif" font-size="16" fill="#0f172a" text-anchor="end">6 cm</text>
</svg>`
};

const solutions = {
  'y9-16g-q4a': [
    { explanation: "Identify the parallel sides (top and bottom) and the height of the trapezoid.", workingOut: "\\\\( a = 7\\\\text{ cm}, \\\\quad b = 9\\\\text{ cm}, \\\\quad h = 5\\\\text{ cm} \\\\)" },
    { explanation: "Write down the formula for the area of a trapezoid.", workingOut: "\\\\( \\\\text{Area} = \\\\frac{1}{2} \\\\times (a + b) \\\\times h \\\\)" },
    { explanation: "Substitute the given values into the formula.", workingOut: "\\\\( \\\\text{Area} = \\\\frac{1}{2} \\\\times (7 + 9) \\\\times 5 \\\\)" },
    { explanation: "Calculate the final area.", workingOut: "\\\\( \\\\text{Area} = \\\\frac{1}{2} \\\\times 16 \\\\times 5 = 40\\\\text{ cm}^2 \\\\)" }
  ],
  'y9-16g-q4b': [
    { explanation: "Split the composite shape into a rectangle and a semicircle.", workingOut: "\\\\text{Total Area} = \\\\text{Area}(\\\\text{rectangle}) + \\\\text{Area}(\\\\text{semicircle})" },
    { explanation: "Calculate the area of the rectangle. The width is 6 cm and the height is 5 cm.", workingOut: "\\\\( \\\\text{Area}_{\\\\text{rect}} = 6 \\\\times 5 = 30\\\\text{ cm}^2 \\\\)" },
    { explanation: "Calculate the area of the semicircle. The radius is half of the width (3 cm).", workingOut: "\\\\( \\\\text{Area}_{\\\\text{semi}} = \\\\frac{1}{2} \\\\times \\\\pi \\\\times r^2 = \\\\frac{1}{2} \\\\times \\\\pi \\\\times 3^2 = 4.5\\\\pi \\\\approx 14.14\\\\text{ cm}^2 \\\\)" },
    { explanation: "Add the two areas together to find the total area.", workingOut: "\\\\( \\\\text{Total Area} = 30 + 14.14 = 44.14\\\\text{ cm}^2 \\\\)" }
  ],
  'y9-16g-q4c': [
    { explanation: "Consider the shape as a large outer square with a triangle cut out from the top.", workingOut: "\\\\text{Total Area} = \\\\text{Area}(\\\\text{outer square}) - \\\\text{Area}(\\\\text{triangular cutout})" },
    { explanation: "Calculate the area of the full outer square.", workingOut: "\\\\( \\\\text{Area}_{\\\\text{outer}} = 4 \\\\times 4 = 16\\\\text{ cm}^2 \\\\)" },
    { explanation: "Calculate the area of the triangular cutout. Its base is 4 cm and depth (height) is 2 cm.", workingOut: "\\\\( \\\\text{Area}_{\\\\text{tri}} = \\\\frac{1}{2} \\\\times 4 \\\\times 2 = 4\\\\text{ cm}^2 \\\\)" },
    { explanation: "Subtract the cutout area from the outer square's area.", workingOut: "\\\\( \\\\text{Total Area} = 16 - 4 = 12\\\\text{ cm}^2 \\\\)" }
  ],
  'y9-16g-q4d': [
    { explanation: "Identify the lengths of the two diagonals of the kite from the diagram.", workingOut: "\\\\( x = 8\\\\text{ cm} \\\\quad \\\\text{(horizontal diagonal)}\\\\\\\\ y = 6\\\\text{ cm} \\\\quad \\\\text{(vertical diagonal)} \\\\)" },
    { explanation: "Write down the formula for the area of a kite.", workingOut: "\\\\( \\\\text{Area} = \\\\frac{1}{2} \\\\times x \\\\times y \\\\)" },
    { explanation: "Substitute the given diagonal lengths into the formula.", workingOut: "\\\\( \\\\text{Area} = \\\\frac{1}{2} \\\\times 8 \\\\times 6 \\\\)" },
    { explanation: "Calculate the final area.", workingOut: "\\\\( \\\\text{Area} = \\\\frac{1}{2} \\\\times 48 = 24\\\\text{ cm}^2 \\\\)" }
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
    if (svgs[q.id]) {
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
