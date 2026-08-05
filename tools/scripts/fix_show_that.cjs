const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const filePath = '/Users/andrewkim/Desktop/sapere1/src/constants/seedYear12aCh3IQuestions.js';
let content = fs.readFileSync(filePath, 'utf8');
const match = content.match(/export const Y12A_CH3I_QUESTIONS = (\[[\s\S]*\]);$/m);
let questions = eval(match[1]);

let q16 = questions.find(x => x.id === 'y12a-3i-q16');
let q17 = questions.find(x => x.id === 'y12a-3i-q17');

let q16a = q16.subQuestions.find(x => x.id === 'y12a-3i-q16a');
if (q16a) {
  q16a.question = "a) What is the equation for the volume \\( V \\) of the box in terms of \\( x \\)?";
  q16a.type = 'multiple_choice';
  q16a.opts = [
    'V = x^3 - 32x^2 + 240x',
    'V = 4x^3 - 64x^2 + 240x',
    'V = 4x^3 + 64x^2 + 240x',
    'V = 240x - 64x^2'
  ];
  q16a.a = 1;
  q16a.answer = 1;
  // Steps can remain mostly the same, just slightly tweaked for the new question format
  q16a.solutionSteps = [
    { explanation: "Write expression for dimensions of the box", workingOut: "\\text{The sheet is } 20 \\text{ by } 12 \\text{. Cutting squares of side } x \\text{ means:}\\\\ \\text{Height } = x, \\, \\text{Length } = 20 - 2x, \\, \\text{Width } = 12 - 2x" },
    { explanation: "Write down the volume product and expand", workingOut: "V = x(20 - 2x)(12 - 2x) = x(240 - 40x - 24x + 4x^2)\\\\ V = x(240 - 64x + 4x^2)" },
    { explanation: "Distribute x to get final expression", workingOut: "V = 4x^3 - 64x^2 + 240x" }
  ];
}

let q17a = q17.subQuestions.find(x => x.id === 'y12a-3i-q17a');
if (q17a) {
  q17a.question = "a) What is the equation for the volume \\( V \\) of the coal chute in terms of \\( r \\)?";
  q17a.type = 'multiple_choice';
  q17a.opts = [
    'V = 15\\pi r^2 - \\pi r^3',
    'V = 5\\pi r^2 + \\frac{1}{3}\\pi r^3',
    'V = 15\\pi r^2 - \\frac{1}{3}\\pi r^3',
    'V = 5\\pi r^2 - \\frac{1}{3}\\pi r^3'
  ];
  q17a.a = 3;
  q17a.answer = 3;
  q17a.solutionSteps = [
    { explanation: "Relate radius and height using the sum condition", workingOut: "r + h = 15 \\implies h = 15 - r" },
    { explanation: "Substitute height into the cone volume formula", workingOut: "V = \\frac{1}{3}\\pi r^2 h = \\frac{1}{3}\\pi r^2 (15 - r)" },
    { explanation: "Expand the expression", workingOut: "V = \\frac{1}{3}\\pi r^2(15) - \\frac{1}{3}\\pi r^2(r) = 5\\pi r^2 - \\frac{1}{3}\\pi r^3" }
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
      if (sq.id === 'y12a-3i-q16a') return { ...q16a, options: convertOpts(q16a.opts) };
      return sq;
    });
    await db.collection('questions').doc('y12a-3i-q16').update({ subQuestions: db_q16.subQuestions });
  }

  let doc17 = await db.collection('questions').doc('y12a-3i-q17').get();
  if (doc17.exists) {
    let db_q17 = doc17.data();
    db_q17.subQuestions = db_q17.subQuestions.map(sq => {
      if (sq.id === 'y12a-3i-q17a') return { ...q17a, options: convertOpts(q17a.opts) };
      return sq;
    });
    await db.collection('questions').doc('y12a-3i-q17').update({ subQuestions: db_q17.subQuestions });
  }

  console.log('Successfully updated q16a and q17a in Firestore.');
  process.exit(0);
}
updateDb();
