const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const filePath = '/Users/andrewkim/Desktop/sapere1/src/constants/seedYear12aCh3IQuestions.js';
let content = fs.readFileSync(filePath, 'utf8');
const match = content.match(/export const Y12A_CH3I_QUESTIONS = (\[[\s\S]*\]);$/m);
let questions = eval(match[1]);

let q13a = questions.find(x => x.id === 'y12a-3i-q13a');
let q13ba = questions.find(x => x.id === 'y12a-3i-q13ba');
let q13bb = questions.find(x => x.id === 'y12a-3i-q13bb');

if (q13a) {
  q13a.type = 'multiple_choice';
  q13a.opts = ['-8', '4', '-4', '-2'];
  q13a.a = 2;
  q13a.answer = 2;
  q13a.solutionSteps = [
    { explanation: "Understand 'horizontal tangent'", workingOut: "\\text{A horizontal tangent means the gradient (or derivative) is zero at that point. So, } y' = 0 \\text{ when } x = -2." },
    { explanation: "Differentiate the function", workingOut: "y' = \\frac{d}{dx}(x^2 - ax + 12) = 2x - a" },
    { explanation: "Apply the horizontal tangent condition", workingOut: "\\text{Substitute } x = -2 \\text{ and set the derivative to zero: }\\\\ 2(-2) - a = 0 \\implies -4 - a = 0" },
    { explanation: "Solve for a", workingOut: "a = -4" }
  ];
}

if (q13ba) {
  q13ba.type = 'multiple_choice';
  q13ba.opts = ['1', '-1', '4', '-\\frac{1}{3}'];
  q13ba.a = 0;
  q13ba.answer = 0;
  q13ba.solutionSteps = [
    { explanation: "Understand 'turning point'", workingOut: "\\text{A turning point at } (-2, 1) \\text{ gives us two pieces of information: the point lies on the curve, and the derivative is zero at } x = -2." },
    { explanation: "Use the derivative condition", workingOut: "\\text{Differentiate the curve: } y' = 2ax + b.\\\\ \\text{Set } y'(-2) = 0 \\implies 2a(-2) + b = 0 \\implies -4a + b = 0 \\implies b = 4a.\\\\ \\text{This is our first equation.}" },
    { explanation: "Use the point condition", workingOut: "\\text{The point } (-2, 1) \\text{ must satisfy the curve's equation. Substitute } x = -2 \\text{ and } y = 1:\\\\ 1 = a(-2)^2 + b(-2) + 5 \\implies 1 = 4a - 2b + 5 \\implies 4a - 2b = -4.\\\\ \\text{Dividing by 2 gives } 2a - b = -2.\\\\ \\text{This is our second equation.}" },
    { explanation: "Solve the simultaneous equations for a", workingOut: "\\text{Substitute } b = 4a \\text{ from the first equation into the second equation:}\\\\ 2a - (4a) = -2 \\implies -2a = -2 \\implies a = 1" }
  ];
}

if (q13bb) {
  q13bb.type = 'multiple_choice';
  q13bb.opts = ['2', '-4', '1', '4'];
  q13bb.a = 3;
  q13bb.answer = 3;
  q13bb.solutionSteps = [
    { explanation: "Set up the simultaneous equations", workingOut: "\\text{As established, a turning point gives two conditions: } y'(-2) = 0 \\text{ and } y(-2) = 1." },
    { explanation: "Equation from the derivative", workingOut: "y' = 2ax + b \\implies 2a(-2) + b = 0 \\implies b = 4a" },
    { explanation: "Equation from the point", workingOut: "y(-2) = 1 \\implies 4a - 2b + 5 = 1 \\implies 4a - 2b = -4" },
    { explanation: "Solve for b", workingOut: "\\text{We know } a = 1 \\text{ from solving the simultaneous equations. Substitute } a = 1 \\text{ into the first equation:}\\\\ b = 4(1) = 4" }
  ];
}

const newArrayStr = JSON.stringify(questions, null, 2).replace(/"([^"]+)":/g, '$1:');
fs.writeFileSync(filePath, content.substring(0, match.index) + 'export const Y12A_CH3I_QUESTIONS = ' + newArrayStr + ';\n', 'utf8');

async function updateDb() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  let convertOpts = (opts) => opts.map(o => ({ text: o, imageUrl: '' }));
  
  const toUpdate = [q13a, q13ba, q13bb].filter(Boolean);
  
  for (let q of toUpdate) {
    await db.collection('questions').doc(q.id).update({
      type: 'multiple_choice',
      opts: q.opts,
      options: convertOpts(q.opts),
      a: q.a,
      answer: q.answer,
      solutionSteps: q.solutionSteps
    });
    console.log('Updated in DB:', q.id);
  }
  
  console.log('Successfully updated q13a, q13ba, q13bb in Firestore.');
  process.exit(0);
}
updateDb();
