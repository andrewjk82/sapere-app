const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const svgCode = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300' width='100%' height='100%'>\\n" +
  "  <!-- Background -->\\n" +
  "  <rect width='300' height='300' fill='#f8fafc' />\\n" +
  "  \\n" +
  "  <!-- Grid (10px = 1 unit) -->\\n" +
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
  "  \\n" +
  "  <!-- Axes -->\\n" +
  "  <line x1='0' y1='150' x2='300' y2='150' stroke='#94a3b8' stroke-width='2' />\\n" +
  "  <line x1='150' y1='0' x2='150' y2='300' stroke='#94a3b8' stroke-width='2' />\\n" +
  "  \\n" +
  "  <!-- Circle (r=10 -> 100px) -->\\n" +
  "  <circle cx='150' cy='150' r='100' fill='rgba(99, 102, 241, 0.05)' stroke='#6366f1' stroke-width='2' />\\n" +
  "  <text x='160' y='55' font-family='sans-serif' font-size='12' font-weight='bold' fill='#4f46e5'>x² + y² = 100</text>\\n" +
  "  \\n" +
  "  <!-- Square ABCD -->\\n" +
  "  <polygon points='230,210 210,70 70,90 90,230' fill='none' stroke='#1e293b' stroke-width='2' />\\n" +
  "  \\n" +
  "  <!-- Points -->\\n" +
  "  <!-- A(8, -6) -> x=150+80=230, y=150+60=210 -->\\n" +
  "  <circle cx='230' cy='210' r='4' fill='#ef4444' />\\n" +
  "  <text x='238' y='215' font-family='sans-serif' font-size='12' font-weight='bold' fill='#0f172a'>A(8, -6)</text>\\n" +
  "  \\n" +
  "  <!-- B(6, 8) -> x=150+60=210, y=150-80=70 -->\\n" +
  "  <circle cx='210' cy='70' r='4' fill='#ef4444' />\\n" +
  "  <text x='218' y='65' font-family='sans-serif' font-size='12' font-weight='bold' fill='#0f172a'>B(6, 8)</text>\\n" +
  "  \\n" +
  "  <!-- C(-8, 6) -> x=150-80=70, y=150-60=90 -->\\n" +
  "  <circle cx='70' cy='90' r='4' fill='#ef4444' />\\n" +
  "  <text x='15' y='85' font-family='sans-serif' font-size='12' font-weight='bold' fill='#0f172a'>C(-8, 6)</text>\\n" +
  "  \\n" +
  "  <!-- D(-6, -8) -> x=150-60=90, y=150+80=230 -->\\n" +
  "  <circle cx='90' cy='230' r='4' fill='#ef4444' />\\n" +
  "  <text x='20' y='235' font-family='sans-serif' font-size='12' font-weight='bold' fill='#0f172a'>D(-6, -8)</text>\\n" +
  "  \\n" +
  "  <!-- Origin -->\\n" +
  "  <circle cx='150' cy='150' r='3' fill='#64748b' />\\n" +
  "  <text x='155' y='145' font-family='sans-serif' font-size='12' fill='#64748b'>O</text>\\n" +
  "</svg>";

const subData = {
  'y9-11h-q10a': {
    type: 'multiple_choice',
    opts: ["-7", "7", "-\\\\frac{1}{7}", "\\\\frac{1}{7}"],
    a: 0,
    answer: "0",
    solutionSteps: [
      {
        explanation: "To find the gradient (slope) of the line segment AB, we use the gradient formula: \\\\(m = \\\\frac{y_2 - y_1}{x_2 - x_1}\\\\).",
        workingOut: "A(8, -6) \\\\text{ and } B(6, 8)",
        graphData: null
      },
      {
        explanation: "Substitute the coordinates of A and B into the formula.",
        workingOut: "m = \\\\frac{8 - (-6)}{6 - 8} = \\\\frac{8 + 6}{-2}",
        graphData: null
      },
      {
        explanation: "Simplify the fraction to find the final gradient.",
        workingOut: "m = \\\\frac{14}{-2} = -7",
        graphData: null
      }
    ]
  },
  'y9-11h-q10b': {
    type: 'multiple_choice',
    opts: ["\\\\(y = -7x + 50\\\\)", "\\\\(y = 7x + 50\\\\)", "\\\\(y = -7x - 50\\\\)", "\\\\(y = 7x - 50\\\\)"],
    a: 0,
    answer: "0",
    solutionSteps: [
      {
        explanation: "To find the equation of the line passing through A and B, we can use the point-gradient formula: \\\\(y - y_1 = m(x - x_1)\\\\).",
        workingOut: "m = -7 \\\\text{ (from previous part)}",
        graphData: null
      },
      {
        explanation: "Substitute the gradient and the coordinates of point B (or A) into the formula.",
        workingOut: "y - 8 = -7(x - 6)",
        graphData: null
      },
      {
        explanation: "Expand the brackets and simplify to write the equation in the form \\\\(y = mx + c\\\\).",
        workingOut: "y - 8 = -7x + 42 \\\\ y = -7x + 42 + 8 \\\\ y = -7x + 50",
        graphData: null
      }
    ]
  },
  'y9-11h-q10c': {
    type: 'multiple_choice',
    opts: ["\\\\(10\\\\sqrt{2}\\\\)", "\\\\(100\\\\)", "\\\\(20\\\\sqrt{2}\\\\)", "\\\\(14\\\\)"],
    a: 0,
    answer: "0",
    solutionSteps: [
      {
        explanation: "The distance between two points \\\\((x_1, y_1)\\\\) and \\\\((x_2, y_2)\\\\) is given by the distance formula: \\\\(d = \\\\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}\\\\).",
        workingOut: "A(8, -6) \\\\text{ and } B(6, 8)",
        graphData: null
      },
      {
        explanation: "Substitute the coordinates of A and B and calculate the differences.",
        workingOut: "AB = \\\\sqrt{(6 - 8)^2 + (8 - (-6))^2} \\\\ AB = \\\\sqrt{(-2)^2 + 14^2}",
        graphData: null
      },
      {
        explanation: "Square the values and add them together.",
        workingOut: "AB = \\\\sqrt{4 + 196} = \\\\sqrt{200}",
        graphData: null
      },
      {
        explanation: "Simplify the surd by finding the largest perfect square factor of 200.",
        workingOut: "AB = \\\\sqrt{100 \\\\times 2} = 10\\\\sqrt{2}",
        graphData: null
      }
    ]
  },
  'y9-11h-q10d': {
    type: 'multiple_choice',
    opts: ["200", "400", "100", "\\\\(100\\\\sqrt{2}\\\\)"],
    a: 0,
    answer: "0",
    solutionSteps: [
      {
        explanation: "The area of a square is simply its side length squared.",
        workingOut: "\\\\text{Area} = (\\\\text{side length})^2",
        graphData: null
      },
      {
        explanation: "The side length is the distance AB, which we found in the previous part.",
        workingOut: "\\\\text{Side length } AB = \\\\sqrt{200}",
        graphData: null
      },
      {
        explanation: "Square the side length to find the exact area.",
        workingOut: "\\\\text{Area} = (\\\\sqrt{200})^2 = 200",
        graphData: null
      }
    ]
  }
};

async function run() {
  const filePath = '/Users/andrewkim/Desktop/sapere1/src/constants/seedYear9Ch11HQuestions.js';
  let content = fs.readFileSync(filePath, 'utf8');
  
  const match = content.match(/export const Y9_CH11H_QUESTIONS = (\[[\s\S]*\]);$/m);
  let questions = eval(match[1]);
  
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // Root question
  const rootIdx = questions.findIndex(q => q.id === 'y9-11h-q10');
  if (rootIdx !== -1) {
    questions[rootIdx].graphData = { svg: svgCode };
    const docRef = db.collection('questions').doc('y9-11h-q10');
    const doc = await docRef.get();
    if (doc.exists) {
      await docRef.update({ graphData: { svg: svgCode } });
    }
    
    // Subquestions
    for (let i = 0; i < questions[rootIdx].subQuestions.length; i++) {
      const sub = questions[rootIdx].subQuestions[i];
      if (subData[sub.id]) {
        Object.assign(sub, subData[sub.id]);
        
        const subRef = db.collection('questions').doc(sub.id);
        const subDoc = await subRef.get();
        if (subDoc.exists) {
          await subRef.update({
            type: sub.type,
            opts: sub.opts,
            a: sub.a,
            answer: sub.answer,
            solutionSteps: sub.solutionSteps
          });
        }
      }
    }
  }

  const newArrayStr = JSON.stringify(questions, null, 2)
    .replace(/"([^"]+)":/g, '$1:');
  
  fs.writeFileSync(filePath, content.substring(0, match.index) + 'export const Y9_CH11H_QUESTIONS = ' + newArrayStr + ';\n', 'utf8');
  console.log('Fixed y9-11h-q10 and subquestions in DB and seed file.');
  process.exit(0);
}

run();
