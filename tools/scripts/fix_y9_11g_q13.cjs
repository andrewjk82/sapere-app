const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const filePath = '/Users/andrewkim/Desktop/sapere1/src/constants/seedYear9Ch11GQuestions.js';
let content = fs.readFileSync(filePath, 'utf8');
const match = content.match(/export const Y9_CH11G_QUESTIONS = (\[[\s\S]*\]);$/m);
let questions = eval(match[1]);

// A(2, 1) -> (80, 200)
// B(5, 5) -> (170, 80)
// C(9, 2) -> (290, 170)
const svg = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 350 250' width='100%' height='100%'>\\n" +
  "  <rect width='350' height='250' fill='#f8fafc' />\\n" +
  "  <!-- Grid (optional, skipping to keep clean) -->\\n" +
  "  <!-- Axes -->\\n" +
  "  <line x1='20' y1='230' x2='330' y2='230' stroke='#94a3b8' stroke-width='2' />\\n" +
  "  <line x1='20' y1='20' x2='20' y2='230' stroke='#94a3b8' stroke-width='2' />\\n" +
  "  <text x='325' y='245' font-family='sans-serif' font-size='12' fill='#64748b'>x</text>\\n" +
  "  <text x='5' y='30' font-family='sans-serif' font-size='12' fill='#64748b'>y</text>\\n" +
  "  <!-- Triangle -->\\n" +
  "  <polygon points='80,200 170,80 290,170' fill='rgba(99, 102, 241, 0.1)' stroke='#6366f1' stroke-width='2' />\\n" +
  "  <!-- Points -->\\n" +
  "  <!-- A(2, 1) -->\\n" +
  "  <circle cx='80' cy='200' r='4' fill='#ef4444' />\\n" +
  "  <text text-anchor='end' x='72' y='204' font-family='sans-serif' font-size='12' font-weight='bold' fill='#0f172a'>A(2, 1)</text>\\n" +
  "  <!-- B(5, 5) -->\\n" +
  "  <circle cx='170' cy='80' r='4' fill='#ef4444' />\\n" +
  "  <text x='170' y='70' text-anchor='middle' font-family='sans-serif' font-size='12' font-weight='bold' fill='#0f172a'>B(5, 5)</text>\\n" +
  "  <!-- C(9, 2) -->\\n" +
  "  <circle cx='290' cy='170' r='4' fill='#ef4444' />\\n" +
  "  <text x='298' y='174' font-family='sans-serif' font-size='12' font-weight='bold' fill='#0f172a'>C(9, 2)</text>\\n" +
  "</svg>";

let q = questions.find(x => x.id === 'y9-11g-q13');
if (q && q.graphData) {
  q.graphData = { svg: svg };
}

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const docRef = db.collection('questions').doc('y9-11g-q13');
  const doc = await docRef.get();
  
  if (doc.exists) {
    await docRef.update({
      graphData: { svg: svg }
    });
    console.log('Fixed SVG for y9-11g-q13');
  }

  const newArrayStr = JSON.stringify(questions, null, 2).replace(/"([^"]+)":/g, '$1:');
  fs.writeFileSync(filePath, content.substring(0, match.index) + 'export const Y9_CH11G_QUESTIONS = ' + newArrayStr + ';\n', 'utf8');
  console.log('Updated local seed file.');
  process.exit(0);
}

run();
