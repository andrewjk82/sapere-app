const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const filePath = '/Users/andrewkim/Desktop/sapere1/src/constants/seedYear9Ch11HQuestions.js';
let content = fs.readFileSync(filePath, 'utf8');
const match = content.match(/export const Y9_CH11H_QUESTIONS = (\[[\s\S]*\]);$/m);
let questions = eval(match[1]);

function generateSvg(r2) {
  const r = Math.sqrt(r2);
  let svg = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300' width='100%' height='100%'>\\n" +
    "  <rect width='300' height='300' fill='#f8fafc' />\\n" +
    "  <!-- Axes -->\\n" +
    "  <line x1='0' y1='150' x2='300' y2='150' stroke='#94a3b8' stroke-width='2' />\\n" +
    "  <line x1='150' y1='0' x2='150' y2='300' stroke='#94a3b8' stroke-width='2' />\\n" +
    "  <!-- Circle -->\\n" +
    "  <circle cx='150' cy='150' r='100' fill='rgba(99, 102, 241, 0.05)' stroke='#6366f1' stroke-width='2' />\\n" +
    "  <circle cx='150' cy='150' r='3' fill='#64748b' />\\n" +
    "  <text x='155' y='145' font-family='sans-serif' font-size='12' fill='#64748b'>O</text>\\n" +
    "  <!-- Equation Label -->\\n" +
    "  <text x='10' y='20' font-family='sans-serif' font-size='12' font-weight='bold' fill='#4f46e5'>x² + y² = " + r2 + "</text>\\n" +
    "  <!-- Intercepts -->\\n" +
    "  <circle cx='250' cy='150' r='4' fill='#3b82f6' />\\n" +
    "  <text x='258' y='145' font-family='sans-serif' font-size='12' font-weight='bold' fill='#0f172a'>(" + (r % 1 === 0 ? r : '√'+r2) + ", 0)</text>\\n" +
    "  <circle cx='50' cy='150' r='4' fill='#3b82f6' />\\n" +
    "  <text text-anchor='end' x='42' y='145' font-family='sans-serif' font-size='12' font-weight='bold' fill='#0f172a'>(-" + (r % 1 === 0 ? r : '√'+r2) + ", 0)</text>\\n" +
    "  <circle cx='150' cy='50' r='4' fill='#3b82f6' />\\n" +
    "  <text x='158' y='45' font-family='sans-serif' font-size='12' font-weight='bold' fill='#0f172a'>(0, " + (r % 1 === 0 ? r : '√'+r2) + ")</text>\\n" +
    "  <circle cx='150' cy='250' r='4' fill='#3b82f6' />\\n" +
    "  <text x='158' y='265' font-family='sans-serif' font-size='12' font-weight='bold' fill='#0f172a'>(0, -" + (r % 1 === 0 ? r : '√'+r2) + ")</text>\\n" +
    "</svg>";
  return svg;
}

let modifiedIds = [];

questions.forEach(q => {
  if (q.id.startsWith('y9-11h-q4')) {
    let r2 = 0;
    
    let match = q.question.match(/x\^2 \+ y\^2 = (\d+)/);
    if (!match) match = q.question.match(/y\^2 = (\d+) - x\^2/);
    if (!match) match = q.question.match(/x\^2 = (\d+) - y\^2/);
    
    if (match) {
      r2 = parseInt(match[1], 10);
    }
    
    // Check if r2 is 0 which shouldn't happen for these questions
    if (r2 !== 0 && q.solutionSteps && q.solutionSteps.length > 0) {
      // let's re-generate and update just to be safe
      const svg = generateSvg(r2);
      q.solutionSteps[0].graphData = { svg: svg };
      modifiedIds.push(q.id);
    }
  }
});

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  for (const id of modifiedIds) {
    const q = questions.find(x => x.id === id);
    const docRef = db.collection('questions').doc(id);
    const doc = await docRef.get();
    
    if (doc.exists) {
      await docRef.update({
        solutionSteps: q.solutionSteps
      });
      console.log('Fixed SVG intercepts for', id, 'with r2 =', q.solutionSteps[0].graphData.svg.match(/x² \+ y² = (\d+)/)[1]);
    }
  }

  const newArrayStr = JSON.stringify(questions, null, 2)
    .replace(/"([^"]+)":/g, '$1:');
  
  fs.writeFileSync(filePath, content.substring(0, match.index) + 'export const Y9_CH11H_QUESTIONS = ' + newArrayStr + ';\n', 'utf8');
  console.log('Updated local seed file.');
  process.exit(0);
}

run();
