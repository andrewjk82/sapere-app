const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const svgs = {
  'y9-16g-q8': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" width="100%" height="100%">
  <!-- Shaded corners using evenodd fill -->
  <path d="M70,70 L230,70 L230,230 L70,230 Z M150,150 m-80,0 a80,80 0 1,0 160,0 a80,80 0 1,0 -160,0 Z" 
        fill="#cbd5e1" stroke="#334155" stroke-width="2" fill-rule="evenodd" />
  
  <text x="150" y="155" font-family="sans-serif" font-size="16" fill="#0f172a" text-anchor="middle">Area = 64 cm²</text>
  <text x="150" y="55" font-family="sans-serif" font-size="16" fill="#0f172a" text-anchor="middle">Square</text>
  <!-- Indicate shading -->
  <text x="90" y="90" font-family="sans-serif" font-size="14" fill="#0f172a" text-anchor="middle">?</text>
  <text x="210" y="90" font-family="sans-serif" font-size="14" fill="#0f172a" text-anchor="middle">?</text>
  <text x="90" y="215" font-family="sans-serif" font-size="14" fill="#0f172a" text-anchor="middle">?</text>
  <text x="210" y="215" font-family="sans-serif" font-size="14" fill="#0f172a" text-anchor="middle">?</text>
</svg>`,
  'y9-16g-q9a': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 250" width="100%" height="100%">
  <!-- Shaded path using evenodd fill -->
  <path d="M46,71 L254,71 L254,179 L46,179 Z M70,95 L70,155 L230,155 L230,95 Z" 
        fill="#e2e8f0" stroke="#334155" stroke-width="2" fill-rule="evenodd" />
  
  <rect x="70" y="95" width="160" height="60" fill="#f8fafc" stroke="#334155" stroke-width="2" />
  
  <text x="150" y="130" font-family="sans-serif" font-size="16" fill="#0f172a" text-anchor="middle">Garden</text>
  <text x="150" y="175" font-family="sans-serif" font-size="14" fill="#0f172a" text-anchor="middle">8 m</text>
  <text x="55" y="130" font-family="sans-serif" font-size="14" fill="#0f172a" text-anchor="end">3 m</text>
  
  <!-- Path width indicators -->
  <line x1="230" y1="125" x2="254" y2="125" stroke="#0f172a" stroke-width="1.5" />
  <text x="260" y="130" font-family="sans-serif" font-size="14" fill="#0f172a" text-anchor="start">1.2 m</text>
  
  <line x1="150" y1="71" x2="150" y2="95" stroke="#0f172a" stroke-width="1.5" />
  <text x="155" y="88" font-family="sans-serif" font-size="14" fill="#0f172a" text-anchor="start">1.2 m</text>
</svg>`
};

const solutions = {
  'y9-16g-q8': [
    { explanation: "First, find the side length of the square from its area.", workingOut: "\\\\( \\\\text{Side length } (s) = \\\\sqrt{64} = 8\\\\text{ cm} \\\\)" },
    { explanation: "The circle fits perfectly inside the square, so its diameter is equal to the side length of the square. Find its radius.", workingOut: "\\\\( \\\\text{Diameter} = 8\\\\text{ cm} \\\\\\\\ \\\\text{Radius } (r) = \\\\frac{8}{2} = 4\\\\text{ cm} \\\\)" },
    { explanation: "Calculate the area of the inscribed circle.", workingOut: "\\\\( \\\\text{Area}_{\\\\text{circle}} = \\\\pi \\\\times r^2 = \\\\pi \\\\times 4^2 = 16\\\\pi \\\\approx 50.27\\\\text{ cm}^2 \\\\)" },
    { explanation: "Subtract the circle's area from the square's area to find the shaded area of the four corners.", workingOut: "\\\\( \\\\text{Shaded Area} = 64 - 50.27 = 13.73\\\\text{ cm}^2 \\\\)" }
  ],
  'y9-16g-q9a': [
    { explanation: "Calculate the area of the inner garden plot.", workingOut: "\\\\( \\\\text{Area}_{\\\\text{garden}} = 8 \\\\times 3 = 24\\\\text{ m}^2 \\\\)" },
    { explanation: "Determine the dimensions of the entire outer rectangle, which includes the 1.2 m path on all sides. Note that the path is on both the left and right, and top and bottom.", workingOut: "\\\\( \\\\text{Outer Width} = 3 + 1.2 + 1.2 = 5.4\\\\text{ m} \\\\\\\\ \\\\text{Outer Length} = 8 + 1.2 + 1.2 = 10.4\\\\text{ m} \\\\)" },
    { explanation: "Calculate the area of the entire outer rectangle.", workingOut: "\\\\( \\\\text{Area}_{\\\\text{outer}} = 10.4 \\\\times 5.4 = 56.16\\\\text{ m}^2 \\\\)" },
    { explanation: "Subtract the area of the garden from the total outer area to find the area of the path.", workingOut: "\\\\( \\\\text{Path Area} = 56.16 - 24 = 32.16\\\\text{ m}^2 \\\\)" }
  ]
};

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const seedPath = '/Users/andrewkim/Desktop/sapere1/src/constants/seedYear9Ch16GQuestions.js';
  let content = fs.readFileSync(seedPath, 'utf8');
  
  const prefixMatch = content.match(/export const \w+\s*=\s*/);
  const matchIndex = prefixMatch.index;
  const prefix = prefixMatch[0];
  const arrayString = content.slice(matchIndex + prefix.length).trim().replace(/;$/, '');
  
  const questions = JSON.parse(arrayString);
  let updatedCount = 0;
  
  const batch = db.batch();
  for (let q of questions) {
    if (svgs[q.id]) {
      q.graphData = { svg: svgs[q.id] };
      q.solutionSteps = solutions[q.id];
      
      const docRef = db.collection('questions').doc(q.id);
      batch.set(docRef, { 
        graphData: q.graphData,
        solutionSteps: q.solutionSteps,
        updatedAt: FieldValue.serverTimestamp()
      }, { merge: true });
      updatedCount++;
    }
  }

  await batch.commit();
  console.log(`Successfully updated ${updatedCount} questions in Firestore.`);
  
  const output = content.slice(0, matchIndex + prefix.length) + JSON.stringify(questions, null, 2) + ';\n';
  fs.writeFileSync(seedPath, output);
  
  const { touchChapterIndex } = require('./_lib/touchChapterIndex.js');
  await touchChapterIndex(db, 'y9-16g');

  process.exit(0);
}

run().catch(console.error);
