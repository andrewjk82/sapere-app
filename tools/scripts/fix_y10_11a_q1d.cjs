const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const svgCode = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300' width='100%' height='100%'>\\n" +
  "  <!-- Background -->\\n" +
  "  <rect width='300' height='300' fill='#f8fafc' />\\n" +
  "  \\n" +
  "  <!-- Grid lines (scale: 33.33px = 1 unit, radius=3 units = 100px) -->\\n" +
  "  <g stroke='#e2e8f0' stroke-width='1'>\\n" +
  "    <line x1='0' y1='50' x2='300' y2='50' />\\n" +
  "    <line x1='0' y1='100' x2='300' y2='100' />\\n" +
  "    <line x1='0' y1='200' x2='300' y2='200' />\\n" +
  "    <line x1='0' y1='250' x2='300' y2='250' />\\n" +
  "    \\n" +
  "    <line x1='50' y1='0' x2='50' y2='300' />\\n" +
  "    <line x1='100' y1='0' x2='100' y2='300' />\\n" +
  "    <line x1='200' y1='0' x2='200' y2='300' />\\n" +
  "    <line x1='250' y1='0' x2='250' y2='300' />\\n" +
  "  </g>\\n" +
  "  \\n" +
  "  <!-- Axes -->\\n" +
  "  <line x1='0' y1='150' x2='300' y2='150' stroke='#94a3b8' stroke-width='2' />\\n" +
  "  <line x1='150' y1='0' x2='150' y2='300' stroke='#94a3b8' stroke-width='2' />\\n" +
  "  \\n" +
  "  <!-- Circle -->\\n" +
  "  <circle cx='150' cy='150' r='100' fill='none' stroke='#4f46e5' stroke-width='2' />\\n" +
  "  \\n" +
  "  <!-- Points and Labels -->\\n" +
  "  <!-- Center -->\\n" +
  "  <circle cx='150' cy='150' r='4' fill='#ef4444' />\\n" +
  "  <text x='158' y='145' font-family='sans-serif' font-size='12' font-weight='bold' fill='#0f172a'>(0, 0)</text>\\n" +
  "  \\n" +
  "  <!-- (3, 0) -->\\n" +
  "  <circle cx='250' cy='150' r='4' fill='#3b82f6' />\\n" +
  "  <text x='258' y='145' font-family='sans-serif' font-size='12' font-weight='bold' fill='#0f172a'>(3, 0)</text>\\n" +
  "  \\n" +
  "  <!-- (-3, 0) -->\\n" +
  "  <circle cx='50' cy='150' r='4' fill='#3b82f6' />\\n" +
  "  <text x='15' y='145' font-family='sans-serif' font-size='12' font-weight='bold' fill='#0f172a'>(-3, 0)</text>\\n" +
  "  \\n" +
  "  <!-- (0, 3) -->\\n" +
  "  <circle cx='150' cy='50' r='4' fill='#3b82f6' />\\n" +
  "  <text x='158' y='45' font-family='sans-serif' font-size='12' font-weight='bold' fill='#0f172a'>(0, 3)</text>\\n" +
  "  \\n" +
  "  <!-- (0, -3) -->\\n" +
  "  <circle cx='150' cy='250' r='4' fill='#3b82f6' />\\n" +
  "  <text x='158' y='265' font-family='sans-serif' font-size='12' font-weight='bold' fill='#0f172a'>(0, -3)</text>\\n" +
  "</svg>";

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const docRef = db.collection('questions').doc('y10-11a-q1d');
  const doc = await docRef.get();
  
  if (doc.exists) {
    const data = doc.data();
    
    // Fix typos in workingOut. For q1d, it's at index 2
    if (data.solutionSteps && data.solutionSteps[2]) {
      data.solutionSteps[2].workingOut = "\\\\(x\\\\text{-intercepts}: (\\\\pm 3, 0), \\\\quad y\\\\text{-intercepts}: (0, \\\\pm 3)\\\\)";
    }
    
    // Fix graphData in root and step 0
    const newGraphData = { svg: svgCode };
    
    if (data.solutionSteps && data.solutionSteps[0]) {
      data.solutionSteps[0].graphData = newGraphData;
    }
    
    await docRef.update({
      solutionSteps: data.solutionSteps,
      graphData: newGraphData
    });
    
    console.log('Fixed y10-11a-q1d in Firestore');
  }

  // Also update local seed file
  const filePath = '/Users/andrewkim/Desktop/sapere1/src/constants/seedYear10Ch11AQuestions.js';
  let content = fs.readFileSync(filePath, 'utf8');
  
  const Y10_CH11A_QUESTIONS = eval(content.match(/export const Y10_CH11A_QUESTIONS = (\[[\s\S]*\]);$/m)[1]);
  const target = Y10_CH11A_QUESTIONS.find(q => q.id === 'y10-11a-q1d');
  if (target) {
    target.graphData = { svg: svgCode };
    if (target.solutionSteps && target.solutionSteps[0]) {
      target.solutionSteps[0].graphData = { svg: svgCode };
    }
    if (target.solutionSteps && target.solutionSteps[2]) {
      target.solutionSteps[2].workingOut = "\\(x\\text{-intercepts}: (\\pm 3, 0), \\quad y\\text{-intercepts}: (0, \\pm 3)\\)";
    }
    
    const newArrayStr = JSON.stringify(Y10_CH11A_QUESTIONS, null, 2)
      .replace(/"([^"]+)":/g, '$1:');
    
    const match = content.match(/export const Y10_CH11A_QUESTIONS = (\[[\s\S]*\]);$/m);
    fs.writeFileSync(filePath, content.substring(0, match.index) + 'export const Y10_CH11A_QUESTIONS = ' + newArrayStr + ';\n', 'utf8');
    console.log('Updated local seed file.');
  }

  process.exit(0);
}

run();
