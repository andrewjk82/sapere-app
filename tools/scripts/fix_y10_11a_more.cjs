const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const svgCode2c = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300' width='100%' height='100%'>\\n" +
  "  <rect width='300' height='300' fill='#f8fafc' />\\n" +
  "  <g stroke='#e2e8f0' stroke-width='1'>\\n" +
  "    <line x1='0' y1='50' x2='300' y2='50' />\\n" +
  "    <line x1='0' y1='100' x2='300' y2='100' />\\n" +
  "    <line x1='0' y1='200' x2='300' y2='200' />\\n" +
  "    <line x1='0' y1='250' x2='300' y2='250' />\\n" +
  "    <line x1='50' y1='0' x2='50' y2='300' />\\n" +
  "    <line x1='100' y1='0' x2='100' y2='300' />\\n" +
  "    <line x1='200' y1='0' x2='200' y2='300' />\\n" +
  "    <line x1='250' y1='0' x2='250' y2='300' />\\n" +
  "  </g>\\n" +
  "  <line x1='0' y1='150' x2='300' y2='150' stroke='#94a3b8' stroke-width='2' />\\n" +
  "  <line x1='150' y1='0' x2='150' y2='300' stroke='#94a3b8' stroke-width='2' />\\n" +
  "  <circle cx='150' cy='150' r='100' fill='none' stroke='#4f46e5' stroke-width='2' />\\n" +
  "  <circle cx='150' cy='150' r='4' fill='#ef4444' />\\n" +
  "  <text x='158' y='145' font-family='sans-serif' font-size='12' font-weight='bold' fill='#0f172a'>(0, 0)</text>\\n" +
  "  <circle cx='250' cy='150' r='4' fill='#3b82f6' />\\n" +
  "  <text x='258' y='145' font-family='sans-serif' font-size='12' font-weight='bold' fill='#0f172a'>(√6, 0)</text>\\n" +
  "  <circle cx='50' cy='150' r='4' fill='#3b82f6' />\\n" +
  "  <text x='5' y='145' font-family='sans-serif' font-size='12' font-weight='bold' fill='#0f172a'>(-√6, 0)</text>\\n" +
  "  <circle cx='150' cy='50' r='4' fill='#3b82f6' />\\n" +
  "  <text x='158' y='45' font-family='sans-serif' font-size='12' font-weight='bold' fill='#0f172a'>(0, √6)</text>\\n" +
  "  <circle cx='150' cy='250' r='4' fill='#3b82f6' />\\n" +
  "  <text x='158' y='265' font-family='sans-serif' font-size='12' font-weight='bold' fill='#0f172a'>(0, -√6)</text>\\n" +
  "</svg>";

const svgCode2d = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300' width='100%' height='100%'>\\n" +
  "  <rect width='300' height='300' fill='#f8fafc' />\\n" +
  "  <g stroke='#e2e8f0' stroke-width='1'>\\n" +
  "    <line x1='0' y1='50' x2='300' y2='50' />\\n" +
  "    <line x1='0' y1='100' x2='300' y2='100' />\\n" +
  "    <line x1='0' y1='200' x2='300' y2='200' />\\n" +
  "    <line x1='0' y1='250' x2='300' y2='250' />\\n" +
  "    <line x1='50' y1='0' x2='50' y2='300' />\\n" +
  "    <line x1='100' y1='0' x2='100' y2='300' />\\n" +
  "    <line x1='200' y1='0' x2='200' y2='300' />\\n" +
  "    <line x1='250' y1='0' x2='250' y2='300' />\\n" +
  "  </g>\\n" +
  "  <line x1='0' y1='150' x2='300' y2='150' stroke='#94a3b8' stroke-width='2' />\\n" +
  "  <line x1='150' y1='0' x2='150' y2='300' stroke='#94a3b8' stroke-width='2' />\\n" +
  "  <circle cx='150' cy='150' r='100' fill='none' stroke='#4f46e5' stroke-width='2' />\\n" +
  "  <circle cx='150' cy='150' r='4' fill='#ef4444' />\\n" +
  "  <text x='158' y='145' font-family='sans-serif' font-size='12' font-weight='bold' fill='#0f172a'>(0, 0)</text>\\n" +
  "  <circle cx='250' cy='150' r='4' fill='#3b82f6' />\\n" +
  "  <text x='258' y='145' font-family='sans-serif' font-size='12' font-weight='bold' fill='#0f172a'>(2√3, 0)</text>\\n" +
  "  <circle cx='50' cy='150' r='4' fill='#3b82f6' />\\n" +
  "  <text x='5' y='145' font-family='sans-serif' font-size='12' font-weight='bold' fill='#0f172a'>(-2√3, 0)</text>\\n" +
  "  <circle cx='150' cy='50' r='4' fill='#3b82f6' />\\n" +
  "  <text x='158' y='45' font-family='sans-serif' font-size='12' font-weight='bold' fill='#0f172a'>(0, 2√3)</text>\\n" +
  "  <circle cx='150' cy='250' r='4' fill='#3b82f6' />\\n" +
  "  <text x='158' y='265' font-family='sans-serif' font-size='12' font-weight='bold' fill='#0f172a'>(0, -2√3)</text>\\n" +
  "</svg>";

// For 3a, radius = sqrt(50). Let's say 100px = 10 units. Then r = 70.7px.
// 3a point is (5, 5) -> x = 50px, y = 50px (relative to center).
const svgCode3a = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300' width='100%' height='100%'>\\n" +
  "  <rect width='300' height='300' fill='#f8fafc' />\\n" +
  "  <g stroke='#e2e8f0' stroke-width='1'>\\n" +
  "    <!-- 10px per unit. grid every 5 units = 50px -->\\n" +
  "    <line x1='0' y1='50' x2='300' y2='50' />\\n" +
  "    <line x1='0' y1='100' x2='300' y2='100' />\\n" +
  "    <line x1='0' y1='200' x2='300' y2='200' />\\n" +
  "    <line x1='0' y1='250' x2='300' y2='250' />\\n" +
  "    <line x1='50' y1='0' x2='50' y2='300' />\\n" +
  "    <line x1='100' y1='0' x2='100' y2='300' />\\n" +
  "    <line x1='200' y1='0' x2='200' y2='300' />\\n" +
  "    <line x1='250' y1='0' x2='250' y2='300' />\\n" +
  "  </g>\\n" +
  "  <line x1='0' y1='150' x2='300' y2='150' stroke='#94a3b8' stroke-width='2' />\\n" +
  "  <line x1='150' y1='0' x2='150' y2='300' stroke='#94a3b8' stroke-width='2' />\\n" +
  "  <!-- Circle r = sqrt(50) = 7.07 units = 70.7px -->\\n" +
  "  <circle cx='150' cy='150' r='70.7' fill='none' stroke='#4f46e5' stroke-width='2' />\\n" +
  "  <circle cx='150' cy='150' r='4' fill='#ef4444' />\\n" +
  "  <text x='158' y='145' font-family='sans-serif' font-size='12' font-weight='bold' fill='#0f172a'>(0, 0)</text>\\n" +
  "  <!-- Point (5, 5) -> x=150+50=200, y=150-50=100. Actually lies on the circle exactly since 5^2+5^2=50 -->\\n" +
  "  <circle cx='200' cy='100' r='5' fill='#22c55e' />\\n" +
  "  <text x='210' y='95' font-family='sans-serif' font-size='12' font-weight='bold' fill='#15803d'>(5, 5)</text>\\n" +
  "</svg>";

// For 3b, point (7, 1) -> x = 150+70=220, y = 150-10=140. 7^2+1^2 = 50, so on the circle.
const svgCode3b = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300' width='100%' height='100%'>\\n" +
  "  <rect width='300' height='300' fill='#f8fafc' />\\n" +
  "  <g stroke='#e2e8f0' stroke-width='1'>\\n" +
  "    <line x1='0' y1='50' x2='300' y2='50' />\\n" +
  "    <line x1='0' y1='100' x2='300' y2='100' />\\n" +
  "    <line x1='0' y1='200' x2='300' y2='200' />\\n" +
  "    <line x1='0' y1='250' x2='300' y2='250' />\\n" +
  "    <line x1='50' y1='0' x2='50' y2='300' />\\n" +
  "    <line x1='100' y1='0' x2='100' y2='300' />\\n" +
  "    <line x1='200' y1='0' x2='200' y2='300' />\\n" +
  "    <line x1='250' y1='0' x2='250' y2='300' />\\n" +
  "  </g>\\n" +
  "  <line x1='0' y1='150' x2='300' y2='150' stroke='#94a3b8' stroke-width='2' />\\n" +
  "  <line x1='150' y1='0' x2='150' y2='300' stroke='#94a3b8' stroke-width='2' />\\n" +
  "  <circle cx='150' cy='150' r='70.7' fill='none' stroke='#4f46e5' stroke-width='2' />\\n" +
  "  <circle cx='150' cy='150' r='4' fill='#ef4444' />\\n" +
  "  <text x='158' y='145' font-family='sans-serif' font-size='12' font-weight='bold' fill='#0f172a'>(0, 0)</text>\\n" +
  "  <!-- Point (7, 1) -> x=150+70=220, y=150-10=140. On the circle -->\\n" +
  "  <circle cx='220' cy='140' r='5' fill='#22c55e' />\\n" +
  "  <text x='228' y='135' font-family='sans-serif' font-size='12' font-weight='bold' fill='#15803d'>(7, 1)</text>\\n" +
  "</svg>";

// For 3c, point (6, 4) -> x = 150+60=210, y = 150-40=110. 6^2+4^2 = 52 > 50, so outside circle.
const svgCode3c = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300' width='100%' height='100%'>\\n" +
  "  <rect width='300' height='300' fill='#f8fafc' />\\n" +
  "  <g stroke='#e2e8f0' stroke-width='1'>\\n" +
  "    <line x1='0' y1='50' x2='300' y2='50' />\\n" +
  "    <line x1='0' y1='100' x2='300' y2='100' />\\n" +
  "    <line x1='0' y1='200' x2='300' y2='200' />\\n" +
  "    <line x1='0' y1='250' x2='300' y2='250' />\\n" +
  "    <line x1='50' y1='0' x2='50' y2='300' />\\n" +
  "    <line x1='100' y1='0' x2='100' y2='300' />\\n" +
  "    <line x1='200' y1='0' x2='200' y2='300' />\\n" +
  "    <line x1='250' y1='0' x2='250' y2='300' />\\n" +
  "  </g>\\n" +
  "  <line x1='0' y1='150' x2='300' y2='150' stroke='#94a3b8' stroke-width='2' />\\n" +
  "  <line x1='150' y1='0' x2='150' y2='300' stroke='#94a3b8' stroke-width='2' />\\n" +
  "  <circle cx='150' cy='150' r='70.7' fill='none' stroke='#4f46e5' stroke-width='2' />\\n" +
  "  <circle cx='150' cy='150' r='4' fill='#ef4444' />\\n" +
  "  <text x='158' y='145' font-family='sans-serif' font-size='12' font-weight='bold' fill='#0f172a'>(0, 0)</text>\\n" +
  "  <!-- Point (6, 4) -> x=150+60=210, y=150-40=110. Outside the circle -->\\n" +
  "  <circle cx='210' cy='110' r='5' fill='#eab308' />\\n" +
  "  <text x='218' y='105' font-family='sans-serif' font-size='12' font-weight='bold' fill='#a16207'>(6, 4)</text>\\n" +
  "</svg>";

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const updates = [
    { id: 'y10-11a-q2c', svg: svgCode2c, typoIdx: 2, typoVal: "\\\\(x\\\\text{-intercepts}: (\\\\pm \\\\sqrt{6}, 0), \\\\quad y\\\\text{-intercepts}: (0, \\\\pm \\\\sqrt{6})\\\\)" },
    { id: 'y10-11a-q2d', svg: svgCode2d, typoIdx: 2, typoVal: "\\\\(x\\\\text{-intercepts}: (\\\\pm 2\\\\sqrt{3}, 0), \\\\quad y\\\\text{-intercepts}: (0, \\\\pm 2\\\\sqrt{3})\\\\)" },
    { id: 'y10-11a-q3a', svg: svgCode3a },
    { id: 'y10-11a-q3b', svg: svgCode3b },
    { id: 'y10-11a-q3c', svg: svgCode3c }
  ];

  for (const item of updates) {
    const docRef = db.collection('questions').doc(item.id);
    const doc = await docRef.get();
    if (doc.exists) {
      const data = doc.data();
      if (item.typoIdx !== undefined && data.solutionSteps && data.solutionSteps[item.typoIdx]) {
        data.solutionSteps[item.typoIdx].workingOut = item.typoVal;
      }
      
      const newGraphData = { svg: item.svg };
      if (data.solutionSteps && data.solutionSteps[0]) {
        data.solutionSteps[0].graphData = newGraphData;
      }
      
      await docRef.update({
        solutionSteps: data.solutionSteps,
        graphData: newGraphData
      });
      console.log('Fixed ' + item.id + ' in Firestore');
    }
  }

  const filePath = '/Users/andrewkim/Desktop/sapere1/src/constants/seedYear10Ch11AQuestions.js';
  let content = fs.readFileSync(filePath, 'utf8');
  const Y10_CH11A_QUESTIONS = eval(content.match(/export const Y10_CH11A_QUESTIONS = (\[[\s\S]*\]);$/m)[1]);
  
  for (const item of updates) {
    const target = Y10_CH11A_QUESTIONS.find(q => q.id === item.id);
    if (target) {
      target.graphData = { svg: item.svg };
      if (target.solutionSteps && target.solutionSteps[0]) {
        target.solutionSteps[0].graphData = { svg: item.svg };
      }
      if (item.typoIdx !== undefined && target.solutionSteps && target.solutionSteps[item.typoIdx]) {
        target.solutionSteps[item.typoIdx].workingOut = item.typoVal.replace(/\\\\/g, '\\\\');
      }
    }
  }

  const newArrayStr = JSON.stringify(Y10_CH11A_QUESTIONS, null, 2)
    .replace(/"([^"]+)":/g, '$1:');
  
  const match = content.match(/export const Y10_CH11A_QUESTIONS = (\[[\s\S]*\]);$/m);
  fs.writeFileSync(filePath, content.substring(0, match.index) + 'export const Y10_CH11A_QUESTIONS = ' + newArrayStr + ';\n', 'utf8');
  console.log('Updated local seed file.');
  process.exit(0);
}

run();
