const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const filePath = '/Users/andrewkim/Desktop/sapere1/src/constants/seedYear12aCh3IQuestions.js';
let content = fs.readFileSync(filePath, 'utf8');
const match = content.match(/export const Y12A_CH3I_QUESTIONS = (\[[\s\S]*\]);$/m);
let questions = eval(match[1]);

let q16 = questions.find(x => x.id === 'y12a-3i-q16');
let q17 = questions.find(x => x.id === 'y12a-3i-q17');
let q18 = questions.find(x => x.id === 'y12a-3i-q18a') || questions.find(x => x.id === 'y12a-3i-q18'); 

// If q18 is flat, handle it. Wait, the output earlier showed q18a is a flat question, not a subQuestion!
// Let's verify structure based on previous output. 
// "id": "y12a-3i-q18a" was a main question in the array!

let q16b = q16.subQuestions.find(x => x.id === 'y12a-3i-q16b');
if (q16b) {
  q16b.type = 'multiple_choice';
  q16b.opts = ['\\frac{3200}{27}', '\\frac{10}{3}', '\\frac{6400}{9}', '\\frac{6400}{27}'];
  q16b.a = 3;
  q16b.answer = 3;
  q16b.solutionSteps = [
    { explanation: "Understand the goal", workingOut: "\\text{We need to find the maximum value of the volume } V = 4x^3 - 64x^2 + 240x \\text{ for valid values of } x." },
    { explanation: "Differentiate the volume function", workingOut: "\\text{To find the maximum, we first find the derivative } \\frac{dV}{dx}:\\\\ \\frac{dV}{dx} = 12x^2 - 128x + 240" },
    { explanation: "Find stationary points", workingOut: "\\text{Set the derivative to zero and factorise to solve for } x:\\\\ 12x^2 - 128x + 240 = 0\\\\ \\text{Divide by 4: } 3x^2 - 32x + 60 = 0\\\\ (3x - 10)(x - 6) = 0 \\implies x = \\frac{10}{3} \\text{ or } x = 6" },
    { explanation: "Determine the valid x value", workingOut: "\\text{The width of the box is } 12 - 2x \\text{. If } x = 6 \\text{, the width becomes 0. Thus, we must use } x = \\frac{10}{3}." },
    { explanation: "Calculate the maximum volume", workingOut: "\\text{Substitute } x = \\frac{10}{3} \\text{ back into the factored volume formula:}\\\\ V = \\frac{10}{3}\\left(20 - 2\\left(\\frac{10}{3}\\right)\\right)\\left(12 - 2\\left(\\frac{10}{3}\\right)\\right)\\\\ V = \\frac{10}{3}\\left(\\frac{40}{3}\\right)\\left(\\frac{16}{3}\\right) = \\frac{6400}{27}" }
  ];
}

let q17b = q17.subQuestions.find(x => x.id === 'y12a-3i-q17b');
if (q17b) {
  q17b.type = 'multiple_choice';
  q17b.opts = ['10', '5', '15', '7.5'];
  q17b.a = 0;
  q17b.answer = 0;
  q17b.solutionSteps = [
    { explanation: "Understand the goal", workingOut: "\\text{We are looking for the radius } r \\text{ that gives the maximum volume } V = 5\\pi r^2 - \\frac{1}{3}\\pi r^3." },
    { explanation: "Differentiate the volume function", workingOut: "\\text{Find the derivative } \\frac{dV}{dr} \\text{ with respect to } r:\\\\ \\frac{dV}{dr} = 10\\pi r - \\pi r^2" },
    { explanation: "Find stationary points", workingOut: "\\text{Set the derivative to zero:}\\\\ 10\\pi r - \\pi r^2 = 0\\\\ \\pi r(10 - r) = 0\\\\ \\text{Since a cone must have a positive radius } (r > 0)\\text{, we divide by } \\pi r \\text{ to get:}\\\\ 10 - r = 0 \\implies r = 10" }
  ];
}

let q18a = questions.find(x => x.id === 'y12a-3i-q18a');
if (q18a) {
  q18a.type = 'multiple_choice';
  q18a.opts = ['8x^7 + C', '\\frac{x^9}{9} + C', 'x^9 + C', '\\frac{x^9}{9}'];
  q18a.a = 1;
  q18a.answer = 1;
  q18a.solutionSteps = [
    { explanation: "Understand 'primitive'", workingOut: "\\text{The primitive of a function is its antiderivative (or indefinite integral).}" },
    { explanation: "Apply the power rule for integration", workingOut: "\\text{To integrate } x^n \\text{, we increase the power by 1 and divide by the new power:}\\\\ \\int x^8 \\, dx = \\frac{x^{8+1}}{8+1} = \\frac{x^9}{9}" },
    { explanation: "Add the constant of integration", workingOut: "\\text{Since it is an indefinite integral, we must add the arbitrary constant } C:\\\\ \\frac{x^9}{9} + C" }
  ];
}

const newArrayStr = JSON.stringify(questions, null, 2).replace(/"([^"]+)":/g, '$1:');
fs.writeFileSync(filePath, content.substring(0, match.index) + 'export const Y12A_CH3I_QUESTIONS = ' + newArrayStr + ';\n', 'utf8');

async function updateDb() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  let convertOpts = (opts) => opts.map(o => ({ text: o, imageUrl: '' }));
  
  let doc16 = await db.collection('questions').doc('y12a-3i-q16').get();
  if (doc16.exists) {
    let db_q16 = doc16.data();
    db_q16.subQuestions = db_q16.subQuestions.map(sq => {
      if (sq.id === 'y12a-3i-q16b') return { ...q16b, options: convertOpts(q16b.opts) };
      return sq;
    });
    await db.collection('questions').doc('y12a-3i-q16').update({ subQuestions: db_q16.subQuestions });
  }

  let doc17 = await db.collection('questions').doc('y12a-3i-q17').get();
  if (doc17.exists) {
    let db_q17 = doc17.data();
    db_q17.subQuestions = db_q17.subQuestions.map(sq => {
      if (sq.id === 'y12a-3i-q17b') return { ...q17b, options: convertOpts(q17b.opts) };
      return sq;
    });
    await db.collection('questions').doc('y12a-3i-q17').update({ subQuestions: db_q17.subQuestions });
  }

  if (q18a) {
    await db.collection('questions').doc('y12a-3i-q18a').update({
      type: 'multiple_choice',
      opts: q18a.opts,
      options: convertOpts(q18a.opts),
      a: q18a.a,
      answer: q18a.answer,
      solutionSteps: q18a.solutionSteps
    });
  }

  console.log('Successfully updated q16, q17, and q18a in Firestore.');
  process.exit(0);
}
updateDb();
