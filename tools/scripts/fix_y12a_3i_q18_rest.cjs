const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const filePath = '/Users/andrewkim/Desktop/sapere1/src/constants/seedYear12aCh3IQuestions.js';
let content = fs.readFileSync(filePath, 'utf8');
const match = content.match(/export const Y12A_CH3I_QUESTIONS = (\[[\s\S]*\]);$/m);
let questions = eval(match[1]);

let q18b = questions.find(x => x.id === 'y12a-3i-q18b');
if (q18b) {
  q18b.type = 'multiple_choice';
  q18b.opts = ['4x^2 + C', '4 + C', '2x^2 + C', '2x + C'];
  q18b.a = 2;
  q18b.answer = 2;
  q18b.solutionSteps = [
    { explanation: "Understand 'primitive'", workingOut: "\\text{The primitive is the antiderivative, or indefinite integral, of the function.}" },
    { explanation: "Apply the power rule", workingOut: "\\text{For a term } kx^n \\text{, the integral is } k\\left(\\frac{x^{n+1}}{n+1}\\right).\\text{ Here } n=1 \\text{, so we increase the power to 2 and divide by 2:}\\\\ \\int 4x \\, dx = 4\\left(\\frac{x^2}{2}\\right)" },
    { explanation: "Simplify and add constant", workingOut: "\\text{Simplify the coefficient and add the constant of integration } C:\\\\ 2x^2 + C" }
  ];
}

let q18c = questions.find(x => x.id === 'y12a-3i-q18c');
if (q18c) {
  q18c.type = 'multiple_choice';
  q18c.opts = ['6x', '3x^2 + C', 'C', '6x + C'];
  q18c.a = 3;
  q18c.answer = 3;
  q18c.solutionSteps = [
    { explanation: "Understand the integral of a constant", workingOut: "\\text{A constant } k \\text{ can be thought of as } kx^0\\text{. Integrating it yields } \\frac{kx^1}{1} = kx." },
    { explanation: "Integrate", workingOut: "\\int 6 \\, dx = 6x" },
    { explanation: "Add constant of integration", workingOut: "\\text{Always add } C \\text{ for indefinite integrals:}\\\\ 6x + C" }
  ];
}

let q18d = questions.find(x => x.id === 'y12a-3i-q18d');
if (q18d) {
  q18d.type = 'multiple_choice';
  q18d.opts = ['3x^5 + C', '60x^3 + C', '15x^5 + C', '\\frac{15}{4}x^5 + C'];
  q18d.a = 0;
  q18d.answer = 0;
  q18d.solutionSteps = [
    { explanation: "Apply the power rule", workingOut: "\\text{Increase the power of } x \\text{ from 4 to 5, then divide the term by the new power 5:}\\\\ \\int 15x^4 \\, dx = 15\\left(\\frac{x^5}{5}\\right)" },
    { explanation: "Simplify and add constant", workingOut: "\\text{Simplify the coefficient and add } C:\\\\ 3x^5 + C" }
  ];
}

let q18e = questions.find(x => x.id === 'y12a-3i-q18e');
if (q18e) {
  q18e.type = 'multiple_choice';
  q18e.opts = ['6x^2 + 6x^3 - 4x^4 + C', '3x^2 + 2x^3 - x^4 + C', '6 + 12x - 12x^2 + C', '6x^2 + 3x^3 - \\frac{4}{3}x^4 + C'];
  q18e.a = 1;
  q18e.answer = 1;
  q18e.solutionSteps = [
    { explanation: "Integrate term by term", workingOut: "\\text{Apply the power rule to each term individually. Increase each power by 1 and divide by the new power.}" },
    { explanation: "First term", workingOut: "\\int 6x \\, dx = 6\\left(\\frac{x^2}{2}\\right) = 3x^2" },
    { explanation: "Second term", workingOut: "\\int 6x^2 \\, dx = 6\\left(\\frac{x^3}{3}\\right) = 2x^3" },
    { explanation: "Third term", workingOut: "\\int -4x^3 \\, dx = -4\\left(\\frac{x^4}{4}\\right) = -x^4" },
    { explanation: "Combine and add constant", workingOut: "3x^2 + 2x^3 - x^4 + C" }
  ];
}

const newArrayStr = JSON.stringify(questions, null, 2).replace(/"([^"]+)":/g, '$1:');
fs.writeFileSync(filePath, content.substring(0, match.index) + 'export const Y12A_CH3I_QUESTIONS = ' + newArrayStr + ';\n', 'utf8');

async function updateDb() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  let convertOpts = (opts) => opts.map(o => ({ text: o, imageUrl: '' }));
  
  const ids = ['y12a-3i-q18b', 'y12a-3i-q18c', 'y12a-3i-q18d', 'y12a-3i-q18e'];
  const qs = [q18b, q18c, q18d, q18e];
  
  for (let i = 0; i < ids.length; i++) {
    if (qs[i]) {
      await db.collection('questions').doc(ids[i]).update({
        type: 'multiple_choice',
        opts: qs[i].opts,
        options: convertOpts(qs[i].opts),
        a: qs[i].a,
        answer: qs[i].answer,
        solutionSteps: qs[i].solutionSteps
      });
    }
  }

  console.log('Successfully updated q18b-e in Firestore.');
  process.exit(0);
}
updateDb();
