const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');
const { touchChapterIndex } = require('./_lib/touchChapterIndex.js');

const svgs = {
  'y9-16g-q5bii': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 250" width="100%" height="100%">
  <!-- Dashed back edges -->
  <line x1="40" y1="200" x2="90" y2="160" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,4" />
  <line x1="90" y1="160" x2="230" y2="160" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,4" />
  <line x1="90" y1="160" x2="130" y2="100" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,4" />
  
  <!-- Faces -->
  <polygon points="80,140 220,140 270,100 130,100" fill="#cbd5e1" stroke="#334155" stroke-width="2" />
  <polygon points="180,200 230,160 270,100 220,140" fill="#e2e8f0" stroke="#334155" stroke-width="2" />
  <polygon points="40,200 180,200 220,140 80,140" fill="#f8fafc" stroke="#334155" stroke-width="2" />

  <!-- Height -->
  <line x1="80" y1="140" x2="80" y2="200" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4" />
  <rect x="80" y="190" width="10" height="10" fill="none" stroke="#94a3b8" stroke-width="1.5" />
  <text x="75" y="180" font-family="sans-serif" font-size="14" fill="#0f172a" text-anchor="end">5 cm</text>
  
  <!-- Labels -->
  <text x="110" y="220" font-family="sans-serif" font-size="14" fill="#0f172a" text-anchor="middle">20 cm</text>
  <text x="255" y="160" font-family="sans-serif" font-size="14" fill="#0f172a" text-anchor="start">12 cm (length)</text>
</svg>`,
  'y9-16g-q6b': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 250" width="100%" height="100%">
  <!-- Dashed back edges -->
  <line x1="80" y1="200" x2="140" y2="160" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,4" />
  <line x1="140" y1="160" x2="220" y2="160" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,4" />
  <line x1="140" y1="160" x2="180" y2="100" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,4" />

  <!-- Faces -->
  <polygon points="120,140 160,200 220,160 180,100" fill="#cbd5e1" stroke="#334155" stroke-width="2" />
  <polygon points="80,200 160,200 120,140" fill="#f8fafc" stroke="#334155" stroke-width="2" />

  <!-- Height -->
  <line x1="120" y1="140" x2="120" y2="200" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4" />
  <rect x="120" y="190" width="10" height="10" fill="none" stroke="#94a3b8" stroke-width="1.5" />
  
  <!-- Labels -->
  <text x="120" y="220" font-family="sans-serif" font-size="14" fill="#0f172a" text-anchor="middle">4 cm</text>
  <text x="115" y="180" font-family="sans-serif" font-size="14" fill="#0f172a" text-anchor="end">3 cm</text>
  <text x="90" y="160" font-family="sans-serif" font-size="14" fill="#0f172a" text-anchor="end">3.61 cm</text>
  <text x="195" y="190" font-family="sans-serif" font-size="14" fill="#0f172a" text-anchor="start">6 cm</text>
</svg>`
};

const solutions = {
  'y9-16g-q5bii': [
    { explanation: "Identify the dimensions to calculate the volume. You need the area of the cross-sectional base and the length of the prism.", workingOut: "\\\\( \\\\text{Length} = 12\\\\text{ cm} \\\\)" },
    { explanation: "Calculate the area of the cross-sectional front face (a parallelogram).", workingOut: "\\\\( \\\\text{Base Area} = \\\\text{base} \\\\times \\\\text{height} = 20 \\\\times 5 = 100\\\\text{ cm}^2 \\\\)" },
    { explanation: "Multiply the cross-sectional area by the length of the prism.", workingOut: "\\\\( \\\\text{Volume} = \\\\text{Base Area} \\\\times \\\\text{Length} = 100 \\\\times 12 \\\\)" },
    { explanation: "Calculate the final volume and state the units.", workingOut: "\\\\( \\\\text{Volume} = 1,200\\\\text{ cm}^3 \\\\)" }
  ],
  'y9-16g-q6b': [
    { explanation: "Calculate the area of the two triangular bases (front and back).", workingOut: "\\\\( \\\\text{Area}_{\\\\text{tri}} = \\\\frac{1}{2} \\\\times 4 \\\\times 3 = 6\\\\text{ cm}^2 \\\\\\\\ \\\\text{Total Base Area} = 2 \\\\times 6 = 12\\\\text{ cm}^2 \\\\)" },
    { explanation: "Calculate the perimeter of the front triangular face using the given slanted edges.", workingOut: "\\\\( s = \\\\sqrt{2^2 + 3^2} = \\\\sqrt{13} \\\\approx 3.61\\\\text{ cm} \\\\\\\\ \\\\text{Perimeter} = 4 + 3.61 + 3.61 = 11.22\\\\text{ cm} \\\\)" },
    { explanation: "Calculate the total area of the rectangular sides wrapping around the prism.", workingOut: "\\\\( \\\\text{Sides Area} = \\\\text{Perimeter} \\\\times \\\\text{Length} = 11.22 \\\\times 6 = 67.32\\\\text{ cm}^2 \\\\)" },
    { explanation: "Add the base areas and the sides area to find the Total Surface Area.", workingOut: "\\\\( \\\\text{Total Surface Area} = 12 + 67.32 = 79.32 \\\\approx 79.3\\\\text{ cm}^2 \\\\)" }
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

      // Fix q6b final answer from 79.3 to 79.3 if needed
      // Actually it's already 79.3 cm^2 in the seed
      
      const docRef = db.collection('questions').doc(q.id);
      batch.update(docRef, { 
        graphData: q.graphData,
        solutionSteps: q.solutionSteps,
        opts: q.opts,
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
