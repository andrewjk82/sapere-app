const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const filePath = '/Users/andrewkim/Desktop/sapere1/src/constants/seedYear9Ch11HQuestions.js';
let content = fs.readFileSync(filePath, 'utf8');
const match = content.match(/export const Y9_CH11H_QUESTIONS = (\[[\s\S]*\]);$/m);
let questions = eval(match[1]);

// Scale: r = 13, so 100px = 13 units. scale = 100/13 = 7.692px per unit.
// A(5, 12) -> x = 150 + 5*7.692 = 188.46, y = 150 - 12*7.692 = 57.69
// B(5, -12) -> x = 150 + 5*7.692 = 188.46, y = 150 + 12*7.692 = 242.31
// C(-5, -12) -> x = 150 - 5*7.692 = 111.54, y = 150 + 12*7.692 = 242.31
// D(-5, 12) -> x = 150 - 5*7.692 = 111.54, y = 150 - 12*7.692 = 57.69

const svg = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300' width='100%' height='100%'>\\n" +
  "  <rect width='300' height='300' fill='#f8fafc' />\\n" +
  "  <!-- Axes -->\\n" +
  "  <line x1='0' y1='150' x2='300' y2='150' stroke='#94a3b8' stroke-width='2' />\\n" +
  "  <line x1='150' y1='0' x2='150' y2='300' stroke='#94a3b8' stroke-width='2' />\\n" +
  "  <!-- Circle -->\\n" +
  "  <circle cx='150' cy='150' r='100' fill='rgba(99, 102, 241, 0.05)' stroke='#6366f1' stroke-width='2' />\\n" +
  "  <circle cx='150' cy='150' r='3' fill='#64748b' />\\n" +
  "  <text x='155' y='145' font-family='sans-serif' font-size='12' fill='#64748b'>O</text>\\n" +
  "  <text x='10' y='20' font-family='sans-serif' font-size='12' font-weight='bold' fill='#4f46e5'>x² + y² = 169</text>\\n" +
  "  <!-- Rectangle -->\\n" +
  "  <polygon points='188.46,57.69 111.54,57.69 111.54,242.31 188.46,242.31' fill='none' stroke='#1e293b' stroke-width='2' />\\n" +
  "  <!-- Points -->\\n" +
  "  <!-- A(5, 12) -->\\n" +
  "  <circle cx='188.46' cy='57.69' r='4' fill='#ef4444' />\\n" +
  "  <text x='194' y='52' font-family='sans-serif' font-size='12' font-weight='bold' fill='#0f172a'>A(5, 12)</text>\\n" +
  "  <!-- D(-5, 12) -->\\n" +
  "  <circle cx='111.54' cy='57.69' r='4' fill='#ef4444' />\\n" +
  "  <text text-anchor='end' x='105' y='52' font-family='sans-serif' font-size='12' font-weight='bold' fill='#0f172a'>(-5, 12)</text>\\n" +
  "  <!-- C(-5, -12) -->\\n" +
  "  <circle cx='111.54' cy='242.31' r='4' fill='#ef4444' />\\n" +
  "  <text text-anchor='end' x='105' y='250' font-family='sans-serif' font-size='12' font-weight='bold' fill='#0f172a'>(-5, -12)</text>\\n" +
  "  <!-- B(5, -12) -->\\n" +
  "  <circle cx='188.46' cy='242.31' r='4' fill='#ef4444' />\\n" +
  "  <text x='194' y='250' font-family='sans-serif' font-size='12' font-weight='bold' fill='#0f172a'>(5, -12)</text>\\n" +
  "</svg>";

let q = questions.find(x => x.id === 'y9-11h-q8');
if (q && q.solutionSteps && q.solutionSteps[0]) {
  q.solutionSteps[0].graphData = { svg: svg };
}

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const docRef = db.collection('questions').doc('y9-11h-q8');
  const doc = await docRef.get();
  
  if (doc.exists) {
    await docRef.update({
      solutionSteps: q.solutionSteps
    });
    console.log('Fixed SVG for y9-11h-q8');
  }

  const newArrayStr = JSON.stringify(questions, null, 2).replace(/"([^"]+)":/g, '$1:');
  fs.writeFileSync(filePath, content.substring(0, match.index) + 'export const Y9_CH11H_QUESTIONS = ' + newArrayStr + ';\n', 'utf8');
  console.log('Updated local seed file.');
  process.exit(0);
}

run();
