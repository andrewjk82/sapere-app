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
  // Let's standardise the view. We want the circle to fit well within 300x300.
  // Center is 150, 150. Max radius we can comfortably fit is 100px.
  // So scale = 100 / r;
  const scale = 100 / r;
  
  // Grid lines: every r/2 units? Or just a few lines.
  // We can just draw basic axes to keep it simple, since the specific grid isn't crucial as long as axes and points are clear.
  let svg = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300' width='100%' height='100%'>\\n" +
    "  <rect width='300' height='300' fill='#f8fafc' />\\n" +
    "  <!-- Axes -->\\n" +
    "  <line x1='0' y1='150' x2='300' y2='150' stroke='#94a3b8' stroke-width='2' />\\n" +
    "  <line x1='150' y1='0' x2='150' y2='300' stroke='#94a3b8' stroke-width='2' />\\n" +
    "  <!-- Circle -->\\n" +
    "  <circle cx='150' cy='150' r='100' fill='rgba(99, 102, 241, 0.05)' stroke='#6366f1' stroke-width='2' />\\n" +
    "  <circle cx='150' cy='150' r='3' fill='#64748b' />\\n" +
    "  <text x='155' y='145' font-family='sans-serif' font-size='12' fill='#64748b'>O</text>\\n" +
    "  <text x='160' y='45' font-family='sans-serif' font-size='12' font-weight='bold' fill='#4f46e5'>x² + y² = " + r2 + "</text>\\n";
    
  if (hasPoint) {
    const cx = 150 + px * scale;
    const cy = 150 - py * scale;
    // Check if on circle
    const d2 = px*px + py*py;
    let color = '#ef4444'; // Red if outside
    if (Math.abs(d2 - r2) < 0.1) color = '#22c55e'; // Green if on
    else if (d2 < r2) color = '#eab308'; // Yellow if inside
    
    svg += "  <circle cx='" + cx + "' cy='" + cy + "' r='5' fill='" + color + "' />\\n" +
           "  <text x='" + (cx + 8) + "' y='" + (cy - 8) + "' font-family='sans-serif' font-size='12' font-weight='bold' fill='" + color + "'>" + pointStr + "</text>\\n";
  } else {
    // If it's q4 (sketching circle), label the intercepts
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
      // e.g. point with the coordinates \((5, 0)\)
      const pointMatch = q.question.match(/\\\((.*?)\\\)/);
      if (pointMatch) {
        pointStr = pointMatch[1]; // e.g. "5, 0" or "5\sqrt{2}, 0"
        const parts = pointStr.split(',').map(s => s.trim());
        if (parts.length === 2) {
          px = evalValue(parts[0]);
          py = evalValue(parts[1]);
          hasPoint = true;
        }
        pointStr = "(" + pointStr.replace(/\\\\/g, '\\') + ")";
      }
      
      // Fix opts and a
      const isYes = Math.abs(px*px + py*py - r2) < 0.1;
      q.opts = ['Yes', 'No', 'Cannot be determined', 'None of the above'];
      q.a = isYes ? 0 : 1;
      q.answer = isYes ? '0' : '1';
      q.solution = 'The correct answer is ' + (isYes ? 'Yes' : 'No') + '.';
      
      // Fix solutionSteps explanation texts if they are hallucinated
      if (q.solutionSteps) {
        q.solutionSteps = q.solutionSteps.map((step, i) => {
          let text = step.explanation;
          if (text.includes('Given: read the full stem') || text.includes('What rule or formula applies')) {
            if (i === 0) text = "Identify the coordinates of the point to be checked.";
            else if (i === 1) text = "Substitute the x and y coordinates of the point into the left side of the circle equation.";
            else if (i === 2) text = "Calculate the result.";
            else if (i === 3) text = "Compare the result with the radius squared (the right side of the equation) to determine if the point is on the circle.";
          }
          return { ...step, explanation: text };
        });
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
      const payload = {
        solutionSteps: q.solutionSteps
      };
      if (!q.id.startsWith('y9-11h-q4')) {
        payload.opts = q.opts;
        payload.a = q.a;
        payload.answer = q.answer;
        payload.solution = q.solution;
      }
      
      await docRef.update(payload);
      console.log('Fixed', id, 'in Firestore');
    }
  }

  const newArrayStr = JSON.stringify(questions, null, 2)
    .replace(/"([^"]+)":/g, '$1:');
  
  fs.writeFileSync(filePath, content.substring(0, match.index) + 'export const Y9_CH11H_QUESTIONS = ' + newArrayStr + ';\n', 'utf8');
  console.log('Updated local seed file.');
  process.exit(0);
}

run();
