const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const filePath = '/Users/andrewkim/Desktop/sapere1/src/constants/seedYear12aCh3IQuestions.js';
let content = fs.readFileSync(filePath, 'utf8');
const match = content.match(/export const Y12A_CH3I_QUESTIONS = (\[[\s\S]*\]);$/m);
let questions = eval(match[1]);

function generateSteps(qId) {
  let steps = [];
  if (qId === 'y12a-3i-q11a') {
    steps = [
      { explanation: "1. Domain", workingOut: "\\text{The function } f(x) = x^2 - 4x - 5 \\text{ is a polynomial, so the domain is all real } x." },
      { explanation: "2. Symmetry", workingOut: "f(-x) = (-x)^2 - 4(-x) - 5 = x^2 + 4x - 5. \\text{ This is neither } f(x) \\text{ nor } -f(x)\\text{, so it is neither even nor odd.}" },
      { explanation: "3. Intercepts and Sign", workingOut: "\\textbf{y-intercept:} f(0) = -5.\\\\ \\textbf{x-intercepts:} \\text{Set } y = 0 \\implies x^2 - 4x - 5 = 0 \\implies (x-5)(x+1) = 0 \\implies x = -1 \\text{ or } x = 5." },
      { explanation: "4. Asymptotes", workingOut: "\\text{Since } f(x) \\text{ is a polynomial, there are no vertical or horizontal asymptotes. As } x \\to \\pm\\infty, y \\to \\infty." },
      { explanation: "5. The first derivative", workingOut: "y' = 2x - 4.\\text{ Set } y' = 0 \\implies x = 2.\\\\ \\text{When } x=2, y = (2)^2 - 4(2) - 5 = -9. \\text{ Stationary point at } (2, -9).\\\\ y' < 0 \\text{ for } x < 2 \\text{ (decreasing) and } y' > 0 \\text{ for } x > 2 \\text{ (increasing). Thus, } (2, -9) \\text{ is a local minimum.}" },
      { explanation: "6. The second derivative", workingOut: "y'' = 2.\\text{ Since } y'' > 0 \\text{ for all } x\\text{, the curve is everywhere concave up. There are no points of inflection.}" },
      { explanation: "7. Any other features", workingOut: "\\text{The curve is a parabola opening upwards with its vertex at } (2, -9)." }
    ];
  } else if (qId === 'y12a-3i-q11b') {
    steps = [
      { explanation: "1. Domain", workingOut: "\\text{The function } f(x) = x^3 - 3x^2 + 4 \\text{ is a polynomial, so the domain is all real } x." },
      { explanation: "2. Symmetry", workingOut: "f(-x) = -x^3 - 3x^2 + 4. \\text{ This is neither even nor odd.}" },
      { explanation: "3. Intercepts and Sign", workingOut: "\\textbf{y-intercept:} f(0) = 4.\\\\ \\textbf{x-intercepts:} \\text{By testing factors of 4, } f(-1) = -1 - 3 + 4 = 0. \\text{ Thus, } (x+1) \\text{ is a factor.}\\\\ x^3 - 3x^2 + 4 = (x+1)(x^2 - 4x + 4) = (x+1)(x-2)^2.\\text{ Intercepts at } x = -1 \\text{ and } x = 2." },
      { explanation: "4. Asymptotes", workingOut: "\\text{No asymptotes. As } x \\to \\infty, y \\to \\infty. \\text{ As } x \\to -\\infty, y \\to -\\infty." },
      { explanation: "5. The first derivative", workingOut: "y' = 3x^2 - 6x = 3x(x - 2).\\text{ Set } y' = 0 \\implies x = 0 \\text{ or } x = 2.\\\\ \\text{When } x=0, y=4. \\text{ When } x=2, y=0. \\text{ Stationary points at } (0, 4) \\text{ and } (2, 0).\\\\ \\text{Using a table of slopes: } (0, 4) \\text{ is a local maximum and } (2, 0) \\text{ is a local minimum.}" },
      { explanation: "6. The second derivative", workingOut: "y'' = 6x - 6 = 6(x - 1).\\text{ Set } y'' = 0 \\implies x = 1.\\\\ \\text{When } x=1, y=2. \\text{ The concavity changes from down } (y'' < 0) \\text{ to up } (y'' > 0) \\text{ at } x=1\\text{, so } (1, 2) \\text{ is a point of inflection.}" },
      { explanation: "7. Any other features", workingOut: "\\text{The } x\\text{-intercept at } x=2 \\text{ is also a stationary point, confirming it is a double root.}" }
    ];
  } else if (qId === 'y12a-3i-q11c') {
    steps = [
      { explanation: "1. Domain", workingOut: "\\text{The function } f(x) = 2x^3 - 6x^2 - 18x + 5 \\text{ is a polynomial, so the domain is all real } x." },
      { explanation: "2. Symmetry", workingOut: "\\text{The function contains both odd and even powers of } x \\text{, plus a constant, so it is neither even nor odd.}" },
      { explanation: "3. Intercepts and Sign", workingOut: "\\textbf{y-intercept:} f(0) = 5.\\\\ \\textbf{x-intercepts:} \\text{There are no obvious rational roots, so we approximate or leave them unmarked unless required.}" },
      { explanation: "4. Asymptotes", workingOut: "\\text{No asymptotes. As } x \\to \\infty, y \\to \\infty. \\text{ As } x \\to -\\infty, y \\to -\\infty." },
      { explanation: "5. The first derivative", workingOut: "y' = 6x^2 - 12x - 18 = 6(x^2 - 2x - 3) = 6(x - 3)(x + 1).\\text{ Set } y' = 0 \\implies x = -1 \\text{ or } x = 3.\\\\ \\text{At } x = -1, y = 2(-1) - 6(1) - 18(-1) + 5 = 15.\\\\ \\text{At } x = 3, y = 2(27) - 6(9) - 18(3) + 5 = -49.\\\\ \\text{Stationary points at } (-1, 15) \\text{ (local max) and } (3, -49) \\text{ (local min).}" },
      { explanation: "6. The second derivative", workingOut: "y'' = 12x - 12 = 12(x - 1).\\text{ Set } y'' = 0 \\implies x = 1.\\\\ \\text{When } x=1, y = 2 - 6 - 18 + 5 = -17. \\text{ Since } y'' \\text{ changes sign across } x=1\\text{, } (1, -17) \\text{ is a point of inflection.}" },
      { explanation: "7. Any other features", workingOut: "\\text{Because the local maximum is positive (15) and the local minimum is negative (-49), the curve crosses the } x\\text{-axis three times.}" }
    ];
  } else if (qId === 'y12a-3i-q12a') {
    steps = [
      { explanation: "1. Domain", workingOut: "\\text{The problem specifies a restricted domain: } -3 \\le x \\le 6." },
      { explanation: "2. Symmetry", workingOut: "\\text{The function } f(x) = x^3 - 3x^2 - 24x + 28 \\text{ is neither even nor odd.}" },
      { explanation: "3. Intercepts and Sign", workingOut: "\\textbf{y-intercept:} f(0) = 28.\\\\ \\textbf{x-intercepts:} \\text{Difficult to factorize simply, but we know where the curve generally lies based on endpoints and turning points.}" },
      { explanation: "4. Asymptotes", workingOut: "\\text{No asymptotes for a polynomial.}" },
      { explanation: "5. The first derivative", workingOut: "y' = 3x^2 - 6x - 24 = 3(x^2 - 2x - 8) = 3(x - 4)(x + 2).\\text{ Set } y' = 0 \\implies x = -2 \\text{ or } x = 4.\\\\ \\text{At } x = -2, y = 56 \\implies (-2, 56) \\text{ is a local maximum.}\\\\ \\text{At } x = 4, y = -52 \\implies (4, -52) \\text{ is a local minimum.}" },
      { explanation: "6. The second derivative", workingOut: "y'' = 6x - 6 = 6(x - 1).\\text{ Set } y'' = 0 \\implies x = 1.\\\\ \\text{When } x=1, y = 2. \\text{ The point of inflection is at } (1, 2)." },
      { explanation: "7. Any other features (Endpoints)", workingOut: "\\text{We must evaluate the function at the boundaries of the domain.}\\\\ y(-3) = (-3)^3 - 3(-3)^2 - 24(-3) + 28 = -27 - 27 + 72 + 28 = 46.\\\\ y(6) = 6^3 - 3(6)^2 - 24(6) + 28 = 216 - 108 - 144 + 28 = -8.\\\\ \\text{The curve starts at } (-3, 46) \\text{ and ends at } (6, -8)." }
    ];
  }
  return steps;
}

let q11 = questions.find(x => x.id === 'y12a-3i-q11');
if (!q11) {
  // If it's a flat structure
  let q11a = questions.find(x => x.id === 'y12a-3i-q11a');
  let q11b = questions.find(x => x.id === 'y12a-3i-q11b');
  let q11c = questions.find(x => x.id === 'y12a-3i-q11c');
  
  if (q11a) {
    let newSteps = generateSteps('y12a-3i-q11a');
    let oldGraph = q11a.solutionSteps[q11a.solutionSteps.length - 1].graphData;
    newSteps[newSteps.length - 1].graphData = oldGraph;
    q11a.solutionSteps = newSteps;
  }
  if (q11b) {
    let newSteps = generateSteps('y12a-3i-q11b');
    let oldGraph = q11b.solutionSteps[q11b.solutionSteps.length - 1].graphData;
    newSteps[newSteps.length - 1].graphData = oldGraph;
    q11b.solutionSteps = newSteps;
  }
  if (q11c) {
    let newSteps = generateSteps('y12a-3i-q11c');
    let oldGraph = q11c.solutionSteps[q11c.solutionSteps.length - 1].graphData;
    newSteps[newSteps.length - 1].graphData = oldGraph;
    q11c.solutionSteps = newSteps;
  }
} else {
  // If q11 is the parent doc, wait, we checked this and q11 is NOT in seed file.
  // The questions exist directly as q11a, q11b, q11c.
}

let q11a = questions.find(x => x.id === 'y12a-3i-q11a');
let q11b = questions.find(x => x.id === 'y12a-3i-q11b');
let q11c = questions.find(x => x.id === 'y12a-3i-q11c');

if (q11a) {
  let newSteps = generateSteps('y12a-3i-q11a');
  let oldGraph = q11a.solutionSteps[q11a.solutionSteps.length - 1].graphData;
  newSteps[newSteps.length - 1].graphData = oldGraph;
  q11a.solutionSteps = newSteps;
}
if (q11b) {
  let newSteps = generateSteps('y12a-3i-q11b');
  let oldGraph = q11b.solutionSteps[q11b.solutionSteps.length - 1].graphData;
  newSteps[newSteps.length - 1].graphData = oldGraph;
  q11b.solutionSteps = newSteps;
}
if (q11c) {
  let newSteps = generateSteps('y12a-3i-q11c');
  let oldGraph = q11c.solutionSteps[q11c.solutionSteps.length - 1].graphData;
  newSteps[newSteps.length - 1].graphData = oldGraph;
  q11c.solutionSteps = newSteps;
}

let q12 = questions.find(x => x.id === 'y12a-3i-q12');
let q12a = null;
if (q12 && q12.subQuestions) {
  q12a = q12.subQuestions.find(x => x.id === 'y12a-3i-q12a');
  if (q12a) {
    let newSteps = generateSteps('y12a-3i-q12a');
    let oldGraph = q12a.solutionSteps[q12a.solutionSteps.length - 1].graphData;
    newSteps[newSteps.length - 1].graphData = oldGraph;
    q12a.solutionSteps = newSteps;
  }
}

const newArrayStr = JSON.stringify(questions, null, 2).replace(/"([^"]+)":/g, '$1:');
fs.writeFileSync(filePath, content.substring(0, match.index) + 'export const Y12A_CH3I_QUESTIONS = ' + newArrayStr + ';\n', 'utf8');

async function updateDb() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  if (q11a) await db.collection('questions').doc('y12a-3i-q11a').update({ solutionSteps: q11a.solutionSteps });
  if (q11b) await db.collection('questions').doc('y12a-3i-q11b').update({ solutionSteps: q11b.solutionSteps });
  if (q11c) await db.collection('questions').doc('y12a-3i-q11c').update({ solutionSteps: q11c.solutionSteps });
  
  if (q12) {
    let doc12 = await db.collection('questions').doc('y12a-3i-q12').get();
    if (doc12.exists) {
      let db_q12 = doc12.data();
      db_q12.subQuestions = db_q12.subQuestions.map(sq => {
        if (sq.id === 'y12a-3i-q12a') return q12a;
        return sq;
      });
      await db.collection('questions').doc('y12a-3i-q12').update({ subQuestions: db_q12.subQuestions });
    }
  }

  console.log('Successfully updated 7-step solutions in Firestore.');
  process.exit(0);
}
updateDb();
