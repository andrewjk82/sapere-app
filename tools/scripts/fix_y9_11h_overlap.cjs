const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const filePath = '/Users/andrewkim/Desktop/sapere1/src/constants/seedYear9Ch11HQuestions.js';
let content = fs.readFileSync(filePath, 'utf8');
const match = content.match(/export const Y9_CH11H_QUESTIONS = (\[[\s\S]*\]);$/m);
let questions = eval(match[1]);

function evalValue(str) {
  if (!str) return 0;
  let valStr = str.replace(/\\\\/g, '\\');
  if (valStr.includes('\\sqrt')) {
    const m = valStr.match(/([-\d]*)\\sqrt\{?(\d+)\}?/);
    if (m) {
      let coeff = 1;
      if (m[1] === '-') coeff = -1;
      else if (m[1] !== '') coeff = parseFloat(m[1]);
      return coeff * Math.sqrt(parseFloat(m[2]));
    }
  }
  return parseFloat(str);
}

function generateSvg(r2, px, py, hasPoint, pointStr) {
  const r = Math.sqrt(r2);
  const scale = 100 / r;
  
  let svg = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300' width='100%' height='100%'>\\n" +
    "  <rect width='300' height='300' fill='#f8fafc' />\\n" +
    "  <!-- Axes -->\\n" +
    "  <line x1='0' y1='150' x2='300' y2='150' stroke='#94a3b8' stroke-width='2' />\\n" +
    "  <line x1='150' y1='0' x2='150' y2='300' stroke='#94a3b8' stroke-width='2' />\\n" +
    "  <!-- Circle -->\\n" +
    "  <circle cx='150' cy='150' r='100' fill='rgba(99, 102, 241, 0.05)' stroke='#6366f1' stroke-width='2' />\\n" +
    "  <circle cx='150' cy='150' r='3' fill='#64748b' />\\n" +
    "  <text x='155' y='145' font-family='sans-serif' font-size='12' fill='#64748b'>O</text>\\n" +
    "  <!-- Moved Equation Label to top left to avoid overlap -->\\n" +
    "  <text x='10' y='20' font-family='sans-serif' font-size='12' font-weight='bold' fill='#4f46e5'>x² + y² = " + r2 + "</text>\\n";
    
  if (hasPoint) {
    const cx = 150 + px * scale;
    const cy = 150 - py * scale;
    const d2 = px*px + py*py;
    let color = '#ef4444';
    if (Math.abs(d2 - r2) < 0.1) color = '#22c55e';
    else if (d2 < r2) color = '#eab308';
    
    svg += "  <circle cx='" + cx + "' cy='" + cy + "' r='5' fill='" + color + "' />\\n" +
           "  <text x='" + (cx + 8) + "' y='" + (cy - 8) + "' font-family='sans-serif' font-size='12' font-weight='bold' fill='" + color + "'>" + pointStr + "</text>\\n";
  } else {
    svg += "  <!-- Intercepts -->\\n" +
           "  <circle cx='250' cy='150' r='4' fill='#3b82f6' />\\n" +
           "  <text x='258' y='145' font-family='sans-serif' font-size='12' font-weight='bold' fill='#0f172a'>(" + (r % 1 === 0 ? r : '√'+r2) + ", 0)</text>\\n" +
           "  <circle cx='50' cy='150' r='4' fill='#3b82f6' />\\n" +
           "  <text x='10' y='145' font-family='sans-serif' font-size='12' font-weight='bold' fill='#0f172a'>(-" + (r % 1 === 0 ? r : '√'+r2) + ", 0)</text>\\n" +
           "  <circle cx='150' cy='50' r='4' fill='#3b82f6' />\\n" +
           "  <text x='158' y='45' font-family='sans-serif' font-size='12' font-weight='bold' fill='#0f172a'>(0, " + (r % 1 === 0 ? r : '√'+r2) + ")</text>\\n" +
           "  <circle cx='150' cy='250' r='4' fill='#3b82f6' />\\n" +
           "  <text x='158' y='265' font-family='sans-serif' font-size='12' font-weight='bold' fill='#0f172a'>(0, -" + (r % 1 === 0 ? r : '√'+r2) + ")</text>\\n";
  }
  
  svg += "</svg>";
  return svg;
}

let modifiedIds = [];

questions.forEach(q => {
  if (q.id.match(/^y9-11h-q[1234][a-i]$/)) {
    const isSketch = q.id.startsWith('y9-11h-q4');
    let r2 = 0, px = 0, py = 0, hasPoint = false, pointStr = "";
    
    const circleMatch = q.question.match(/x\^2 \+ y\^2 = (\d+)/);
    if (circleMatch) r2 = parseInt(circleMatch[1], 10);
    
    if (!isSketch) {
      const pointMatch = q.question.match(/\\\((.*?)\\\)/);
      if (pointMatch) {
        pointStr = pointMatch[1];
        const parts = pointStr.split(',').map(s => s.trim());
        if (parts.length === 2) {
          px = evalValue(parts[0]);
          py = evalValue(parts[1]);
          hasPoint = true;
        }
        pointStr = "(" + pointStr.replace(/\\\\/g, '\\') + ")";
      }
    }
    
    const svg = generateSvg(r2, px, py, hasPoint, pointStr);
    
    if (q.solutionSteps && q.solutionSteps.length > 0) {
      q.solutionSteps[0].graphData = { svg: svg };
    }
    
    modifiedIds.push(q.id);
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
      console.log('Fixed SVG overlap for', id);
    }
  }

  const newArrayStr = JSON.stringify(questions, null, 2)
    .replace(/"([^"]+)":/g, '$1:');
  
  fs.writeFileSync(filePath, content.substring(0, match.index) + 'export const Y9_CH11H_QUESTIONS = ' + newArrayStr + ';\n', 'utf8');
  console.log('Updated local seed file.');
  process.exit(0);
}

run();
