const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const filePath = '/Users/andrewkim/Desktop/sapere1/src/constants/seedYear12aCh3IQuestions.js';
let content = fs.readFileSync(filePath, 'utf8');
const match = content.match(/export const Y12A_CH3I_QUESTIONS = (\[[\s\S]*\]);$/m);
let questions = eval(match[1]);

let q1a = questions.find(x => x.id === 'y12a-3i-q1a');
if (q1a) {
  q1a.type = 'multiple_choice';
  q1a.opts = ['A, E, F', 'B, D, G', 'C, F', 'C, H'];
  q1a.a = 3;
  q1a.answer = 3;
  q1a.solutionSteps = [
    { explanation: "Understand f'(x) > 0", workingOut: "\\text{The first derivative } f'(x) \\text{ represents the gradient of the curve. When } f'(x) > 0 \\text{, the curve is sloping upwards (increasing) from left to right.}" },
    { explanation: "Analyze the graph visually", workingOut: "\\text{Identify the sections of the curve that are going up. This happens between the local minimum B and the local maximum D, and also to the right of the local minimum G.}" },
    { explanation: "Select the correct points", workingOut: "\\text{Point C is located between B and D. Point H is located after G. Both lie on the upward-sloping sections, so their gradients are positive.}" }
  ];
}

let q19a = questions.find(x => x.id === 'y12a-3i-q19a');
if (q19a) {
  q19a.type = 'multiple_choice';
  q19a.opts = ['2x^3 - 6x^2 + C', '4x - 6 + C', '\\frac{2x^3}{3} - 3x^2 + C', '\\frac{2x^3}{3} - \\frac{3x^2}{2} + C'];
  q19a.a = 2;
  q19a.answer = 2;
  q19a.solutionSteps = [
    { explanation: "Expand the brackets", workingOut: "\\text{Before integrating, expand the expression } 2x(x - 3) \\text{ by distributing } 2x:\\\\ 2x^2 - 6x" },
    { explanation: "Integrate term by term", workingOut: "\\text{Apply the power rule to each term.}\\\\ \\text{For } 2x^2 \\text{, the integral is } \\frac{2x^3}{3}.\\\\ \\text{For } -6x \\text{, the integral is } -\\frac{6x^2}{2} = -3x^2." },
    { explanation: "Add the constant of integration", workingOut: "\\text{Since this is an indefinite integral, add } + C \\text{ at the end:}\\\\ \\frac{2x^3}{3} - 3x^2 + C" }
  ];
}

let q19b = questions.find(x => x.id === 'y12a-3i-q19b');
if (q19b) {
  q19b.type = 'multiple_choice';
  q19b.opts = ['\\frac{x^3}{3} - x^2 - 8x + C', '\\frac{x^3}{3} + x^2 - 8x + C', '2x - 2 + C', '\\frac{x^3}{3} - x^2 - 8'];
  q19b.a = 0;
  q19b.answer = 0;
  q19b.solutionSteps = [
    { explanation: "Expand the brackets", workingOut: "\\text{Use the FOIL method to expand } (x + 2)(x - 4):\\\\ x^2 - 4x + 2x - 8 = x^2 - 2x - 8" },
    { explanation: "Integrate term by term", workingOut: "\\text{Apply the power rule.}\\\\ \\text{The integral of } x^2 \\text{ is } \\frac{x^3}{3}.\\\\ \\text{The integral of } -2x \\text{ is } -x^2.\\\\ \\text{The integral of } -8 \\text{ is } -8x." },
    { explanation: "Add the constant of integration", workingOut: "\\text{Always add } + C \\text{ for indefinite integrals:}\\\\ \\frac{x^3}{3} - x^2 - 8x + C" }
  ];
}

let q19c = questions.find(x => x.id === 'y12a-3i-q19c');
if (q19c) {
  q19c.type = 'multiple_choice';
  q19c.opts = ['3x^3 + 4x + C', '3x^3 - 6x^2 + 4x + C', '18x - 12 + C', '9x^3 - 6x^2 + 4x + C'];
  q19c.a = 1;
  q19c.answer = 1;
  q19c.solutionSteps = [
    { explanation: "Expand the perfect square", workingOut: "\\text{Use the formula } (a - b)^2 = a^2 - 2ab + b^2 \\text{ to expand } (3x - 2)^2:\\\\ (3x)^2 - 2(3x)(2) + 2^2 = 9x^2 - 12x + 4" },
    { explanation: "Integrate term by term", workingOut: "\\text{Apply the power rule.}\\\\ \\int 9x^2 \\, dx = 9\\left(\\frac{x^3}{3}\\right) = 3x^3\\\\ \\int -12x \\, dx = -12\\left(\\frac{x^2}{2}\\right) = -6x^2\\\\ \\int 4 \\, dx = 4x" },
    { explanation: "Combine and add constant", workingOut: "3x^3 - 6x^2 + 4x + C" }
  ];
}

const newArrayStr = JSON.stringify(questions, null, 2).replace(/"([^"]+)":/g, '$1:');
fs.writeFileSync(filePath, content.substring(0, match.index) + 'export const Y12A_CH3I_QUESTIONS = ' + newArrayStr + ';\n', 'utf8');

async function updateDb() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  let convertOpts = (opts) => opts.map(o => ({ text: o, imageUrl: '' }));
  
  const ids = ['y12a-3i-q1a', 'y12a-3i-q19a', 'y12a-3i-q19b', 'y12a-3i-q19c'];
  const qs = [q1a, q19a, q19b, q19c];
  
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

  console.log('Successfully updated q1a, q19a, q19b, q19c in Firestore.');
  process.exit(0);
}
updateDb();
