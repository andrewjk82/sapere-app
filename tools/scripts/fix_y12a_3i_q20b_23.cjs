const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const filePath = '/Users/andrewkim/Desktop/sapere1/src/constants/seedYear12aCh3IQuestions.js';
let content = fs.readFileSync(filePath, 'utf8');
const match = content.match(/export const Y12A_CH3I_QUESTIONS = (\[[\s\S]*\]);$/m);
let questions = eval(match[1]);

let q20b = questions.find(x => x.id === 'y12a-3i-q20b');
if (q20b) {
  q20b.type = 'multiple_choice';
  q20b.opts = ['\\( 6(x-2)^5 + C \\)', '\\( \\frac{(x-2)^7}{7} + C \\)', '\\( (x-2)^7 + C \\)', '\\( \\frac{(x-2)^5}{5} + C \\)'];
  q20b.a = 1;
  q20b.answer = 1;
  q20b.solutionSteps = [
    { explanation: "Integrate composite function", workingOut: "\\text{Apply the composite linear integration rule. Increase the power from 6 to 7, and divide by 7(1).}\\\\ \\int (x-2)^6 \\, dx = \\frac{(x-2)^7}{7} + C" }
  ];
}

let q20c = questions.find(x => x.id === 'y12a-3i-q20c');
if (q20c) {
  q20c.type = 'multiple_choice';
  q20c.opts = ['\\( 12(3x-1)^3 + C \\)', '\\( \\frac{(3x-1)^5}{5} + C \\)', '\\( \\frac{(3x-1)^5}{3} + C \\)', '\\( \\frac{(3x-1)^5}{15} + C \\)'];
  q20c.a = 3;
  q20c.answer = 3;
  q20c.solutionSteps = [
    { explanation: "Apply composite linear integration rule", workingOut: "\\text{The coefficient of } x \\text{ is } a = 3\\text{. Increase power to 5, and divide by } a \\times n = 3 \\times 5 = 15.\\\\ \\int (3x-1)^4 \\, dx = \\frac{(3x-1)^5}{3 \\times 5} + C" },
    { explanation: "Simplify denominator", workingOut: "\\frac{(3x-1)^5}{15} + C" }
  ];
}

let q21a = questions.find(x => x.id === 'y12a-3i-q21a');
if (q21a) {
  q21a.type = 'multiple_choice';
  q21a.opts = ['\\( -\\frac{1}{2x^2} + C \\)', '\\( \\frac{1}{4x^4} + C \\)', '\\( -\\frac{3}{x^4} + C \\)', '\\( -\\frac{1}{4x^4} + C \\)'];
  q21a.a = 0;
  q21a.answer = 0;
  q21a.solutionSteps = [
    { explanation: "Rewrite in index form", workingOut: "\\text{Before integrating, move } x^3 \\text{ to the numerator using a negative index:}\\\\ f(x) = x^{-3}" },
    { explanation: "Integrate using power rule", workingOut: "\\text{Increase the power by 1 (-3 + 1 = -2), and divide by the new power -2:}\\\\ \\int x^{-3} \\, dx = \\frac{x^{-2}}{-2} + C" },
    { explanation: "Convert back to positive index", workingOut: "-\\frac{1}{2x^2} + C" }
  ];
}

let q21b = questions.find(x => x.id === 'y12a-3i-q21b');
if (q21b) {
  q21b.type = 'multiple_choice';
  q21b.opts = ['\\( \\frac{1}{3}x^{-\\frac{2}{3}} + C \\)', '\\( \\frac{4}{3}x^{\\frac{4}{3}} + C \\)', '\\( \\frac{3}{4}x^{\\frac{4}{3}} + C \\)', '\\( \\frac{3}{4}x^{\\frac{1}{3}} + C \\)'];
  q21b.a = 2;
  q21b.answer = 2;
  q21b.solutionSteps = [
    { explanation: "Rewrite in index form", workingOut: "\\text{Convert the cube root into a fractional exponent:}\\\\ f(x) = x^{\\frac{1}{3}}" },
    { explanation: "Integrate using power rule", workingOut: "\\text{Increase the power by 1: } \\frac{1}{3} + 1 = \\frac{4}{3}\\text{. Divide by } \\frac{4}{3} \\text{, which is equivalent to multiplying by } \\frac{3}{4}:\\\\ \\int x^{\\frac{1}{3}} \\, dx = \\frac{x^{\\frac{4}{3}}}{\\frac{4}{3}} + C = \\frac{3}{4}x^{\\frac{4}{3}} + C" }
  ];
}

let q22 = questions.find(x => x.id === 'y12a-3i-q22');
if (q22) {
  q22.type = 'multiple_choice';
  q22.opts = ['\\( y = x^3 - 3x^2 + 2x - 4 \\)', '\\( y = x^3 - 3x^2 + 2x + 4 \\)', '\\( y = x^3 - 3x^2 + 2x \\)', '\\( y = 6x - 6 \\)'];
  q22.a = 1;
  q22.answer = 1;
  q22.solutionSteps = [
    { explanation: "Integrate the derivative to find the curve family", workingOut: "\\text{The equation of the curve } y \\text{ is the integral of the gradient function } f'(x):\\\\ y = \\int (3x^2 - 6x + 2) \\, dx = x^3 - 3x^2 + 2x + C" },
    { explanation: "Substitute coordinates to solve for C", workingOut: "\\text{Since the curve passes through } (2, 4)\\text{, substitute } x = 2 \\text{ and } y = 4:\\\\ 4 = (2)^3 - 3(2)^2 + 2(2) + C\\\\ 4 = 8 - 12 + 4 + C \\implies 4 = C" },
    { explanation: "State final curve equation", workingOut: "\\text{Substitute } C = 4 \\text{ back into the original equation:}\\\\ y = x^3 - 3x^2 + 2x + 4" }
  ];
}

let q23 = questions.find(x => x.id === 'y12a-3i-q23');
if (q23) {
  q23.type = 'multiple_choice';
  q23.opts = ['\\( 16 \\)', '\\( 21 \\)', '\\( 27 \\)', '\\( 24 \\)'];
  q23.a = 3;
  q23.answer = 3;
  q23.solutionSteps = [
    { explanation: "Integrate derivative to get function f(x)", workingOut: "\\text{Find the primitive of } f'(x):\\\\ f(x) = \\int (6x - 2) \\, dx = 3x^2 - 2x + C" },
    { explanation: "Substitute x = 2 and f(2) = 11 to solve for C", workingOut: "\\text{We are given } f(2) = 11:\\\\ 11 = 3(2)^2 - 2(2) + C\\\\ 11 = 12 - 4 + C \\implies 11 = 8 + C \\implies C = 3" },
    { explanation: "State complete function f(x)", workingOut: "\\text{The full function is } f(x) = 3x^2 - 2x + 3" },
    { explanation: "Evaluate f(3)", workingOut: "\\text{Substitute } x = 3 \\text{ into the complete function:}\\\\ f(3) = 3(3)^2 - 2(3) + 3 = 27 - 6 + 3 = 24" }
  ];
}

const newArrayStr = JSON.stringify(questions, null, 2).replace(/"([^"]+)":/g, '$1:');
fs.writeFileSync(filePath, content.substring(0, match.index) + 'export const Y12A_CH3I_QUESTIONS = ' + newArrayStr + ';\n', 'utf8');

async function updateDb() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  let convertOpts = (opts) => opts.map(o => ({ text: o, imageUrl: '' }));
  
  const ids = ['y12a-3i-q20b', 'y12a-3i-q20c', 'y12a-3i-q21a', 'y12a-3i-q21b', 'y12a-3i-q22', 'y12a-3i-q23'];
  const qs = [q20b, q20c, q21a, q21b, q22, q23];
  
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

  console.log('Successfully updated q20b-23 in Firestore.');
  process.exit(0);
}
updateDb();
