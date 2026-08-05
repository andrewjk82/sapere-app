const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');
const { touchChapterIndex } = require('./_lib/touchChapterIndex.js');

const svgs = {
  'y9-16g-q2a': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 250" width="100%" height="100%">
  <polygon points="60,200 240,200 120,80" fill="#f8fafc" stroke="#334155" stroke-width="2" />
  <line x1="120" y1="80" x2="120" y2="200" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,4" />
  <rect x="120" y="190" width="10" height="10" fill="none" stroke="#94a3b8" stroke-width="1.5" />
  <text x="150" y="220" font-family="sans-serif" font-size="16" fill="#0f172a" text-anchor="middle">9.2 m</text>
  <text x="110" y="140" font-family="sans-serif" font-size="16" fill="#0f172a" text-anchor="end">5 m</text>
</svg>`,
  'y9-16g-q2b': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 250" width="100%" height="100%">
  <polygon points="80,180 230,180 200,100 50,100" fill="#f8fafc" stroke="#334155" stroke-width="2" />
  <line x1="100" y1="100" x2="100" y2="180" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,4" />
  <rect x="100" y="170" width="10" height="10" fill="none" stroke="#94a3b8" stroke-width="1.5" />
  <text x="155" y="200" font-family="sans-serif" font-size="16" fill="#0f172a" text-anchor="middle">2.7 m</text>
  <text x="90" y="140" font-family="sans-serif" font-size="16" fill="#0f172a" text-anchor="end">0.8 m</text>
</svg>`,
  'y9-16g-q2c': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 250" width="100%" height="100%">
  <polygon points="50,220 250,220 250,148 90,148 90,88 50,88" fill="#f8fafc" stroke="#334155" stroke-width="2" />
  <line x1="90" y1="148" x2="90" y2="220" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4" />
  <text x="150" y="240" font-family="sans-serif" font-size="15" fill="#0f172a" text-anchor="middle">5 m (Overall width)</text>
  <text x="70" y="75" font-family="sans-serif" font-size="15" fill="#0f172a" text-anchor="middle">1 m</text>
  <text x="260" y="184" font-family="sans-serif" font-size="15" fill="#0f172a" text-anchor="start">1.8 m</text>
  <text x="40" y="118" font-family="sans-serif" font-size="15" fill="#0f172a" text-anchor="end">1.5 m</text>
</svg>`,
  'y9-16g-q2d': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 250" width="100%" height="100%">
  <polygon points="75,200 225,200 247,120 52,120" fill="#f8fafc" stroke="#334155" stroke-width="2" />
  <line x1="120" y1="120" x2="120" y2="200" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,4" />
  <rect x="120" y="190" width="10" height="10" fill="none" stroke="#94a3b8" stroke-width="1.5" />
  <text x="150" y="110" font-family="sans-serif" font-size="16" fill="#0f172a" text-anchor="middle">13 m</text>
  <text x="150" y="220" font-family="sans-serif" font-size="16" fill="#0f172a" text-anchor="middle">10 m</text>
  <text x="110" y="160" font-family="sans-serif" font-size="16" fill="#0f172a" text-anchor="end">4.5 m</text>
</svg>`
};

const solutions = {
  'y9-16g-q2a': [
    { explanation: "Identify the base and height of the triangle from the diagram.", workingOut: "\\\\( b = 9.2\\\\text{ m}, \\\\quad h = 5\\\\text{ m} \\\\)" },
    { explanation: "Write down the formula for the area of a triangle.", workingOut: "\\\\( \\\\text{Area} = \\\\frac{1}{2} \\\\times \\\\text{base} \\\\times \\\\text{height} \\\\)" },
    { explanation: "Substitute the given values into the formula.", workingOut: "\\\\( \\\\text{Area} = \\\\frac{1}{2} \\\\times 9.2 \\\\times 5 \\\\)" },
    { explanation: "Calculate the final area.", workingOut: "\\\\( \\\\text{Area} = 23\\\\text{ m}^2 \\\\)" }
  ],
  'y9-16g-q2b': [
    { explanation: "Identify the base and height of the parallelogram from the diagram.", workingOut: "\\\\( b = 2.7\\\\text{ m}, \\\\quad h = 0.8\\\\text{ m} \\\\)" },
    { explanation: "Write down the formula for the area of a parallelogram.", workingOut: "\\\\( \\\\text{Area} = \\\\text{base} \\\\times \\\\text{height} \\\\)" },
    { explanation: "Substitute the given values into the formula.", workingOut: "\\\\( \\\\text{Area} = 2.7 \\\\times 0.8 \\\\)" },
    { explanation: "Calculate the final area.", workingOut: "\\\\( \\\\text{Area} = 2.16\\\\text{ m}^2 \\\\)" }
  ],
  'y9-16g-q2c': [
    { explanation: "Split the L-shaped composite figure into two simple rectangles: a left rectangle and a right rectangle.", workingOut: "\\\\text{Total Area} = \\\\text{Area}(\\\\text{left}) + \\\\text{Area}(\\\\text{right})" },
    { explanation: "Calculate the area of the left rectangle. The width is 1 m and the total height is 1.5 m + 1.8 m.", workingOut: "\\\\( \\\\text{Height}_{\\\\text{left}} = 1.5 + 1.8 = 3.3\\\\text{ m} \\\\\\\\ \\\\text{Area}_{\\\\text{left}} = 1 \\\\times 3.3 = 3.3\\\\text{ m}^2 \\\\)" },
    { explanation: "Calculate the area of the right rectangle. The overall width is 5 m, so the right rectangle's width is 5 - 1 = 4 m.", workingOut: "\\\\( \\\\text{Width}_{\\\\text{right}} = 5 - 1 = 4\\\\text{ m} \\\\\\\\ \\\\text{Area}_{\\\\text{right}} = 4 \\\\times 1.8 = 7.2\\\\text{ m}^2 \\\\)" },
    { explanation: "Add the two areas together to find the total area.", workingOut: "\\\\( \\\\text{Total Area} = 3.3 + 7.2 = 10.5\\\\text{ m}^2 \\\\)" }
  ],
  'y9-16g-q2d': [
    { explanation: "Identify the parallel sides (top and bottom) and the height of the trapezoid.", workingOut: "\\\\( a = 13\\\\text{ m}, \\\\quad b = 10\\\\text{ m}, \\\\quad h = 4.5\\\\text{ m} \\\\)" },
    { explanation: "Write down the formula for the area of a trapezoid.", workingOut: "\\\\( \\\\text{Area} = \\\\frac{1}{2} \\\\times (a + b) \\\\times h \\\\)" },
    { explanation: "Substitute the given values into the formula.", workingOut: "\\\\( \\\\text{Area} = \\\\frac{1}{2} \\\\times (13 + 10) \\\\times 4.5 \\\\)" },
    { explanation: "Calculate the final area.", workingOut: "\\\\( \\\\text{Area} = \\\\frac{1}{2} \\\\times 23 \\\\times 4.5 = 51.75\\\\text{ m}^2 \\\\)" }
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
