const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const filePath = '/Users/andrewkim/Desktop/sapere1/src/constants/seedYear12aCh3IQuestions.js';
let content = fs.readFileSync(filePath, 'utf8');
const match = content.match(/export const Y12A_CH3I_QUESTIONS = (\[[\s\S]*\]);$/m);
let questions = eval(match[1]);

let q1b = questions.find(x => x.id === 'y12a-3i-q1b');
if (q1b) {
  q1b.type = 'multiple_choice';
  q1b.opts = ['C, H', 'A, E, F', 'B, D, G', 'D, E'];
  q1b.a = 1;
  q1b.answer = 1;
  q1b.solutionSteps = [
    { explanation: "Understand f'(x) < 0", workingOut: "\\text{The first derivative } f'(x) < 0 \\text{ when the curve is sloping downwards (decreasing) from left to right.}" },
    { explanation: "Analyze the graph visually", workingOut: "\\text{Identify the sections of the curve that are going down. This happens to the left of turning point B, and between turning points D and G.}" },
    { explanation: "Select the correct points", workingOut: "\\text{Point A is to the left of B. Points E and F are between D and G. Thus, } f'(x) < 0 \\text{ at A, E, F.}" }
  ];
}

let q1c = questions.find(x => x.id === 'y12a-3i-q1c');
if (q1c) {
  q1c.type = 'multiple_choice';
  q1c.opts = ['A, E, F', 'C, F', 'B, D, G', 'C, H'];
  q1c.a = 2;
  q1c.answer = 2;
  q1c.solutionSteps = [
    { explanation: "Understand f'(x) = 0", workingOut: "\\text{The first derivative } f'(x) = 0 \\text{ at stationary points (turning points or horizontal points of inflection).}" },
    { explanation: "Analyze the graph visually", workingOut: "\\text{Identify the turning points: local minima are at B and G, and a local maximum is at D.}" },
    { explanation: "Select the correct points", workingOut: "\\text{The stationary points are exactly at B, D, and G.}" }
  ];
}

let q1d = questions.find(x => x.id === 'y12a-3i-q1d');
if (q1d) {
  q1d.type = 'multiple_choice';
  q1d.opts = ['A, B, G, H', 'D, E', 'C, F', 'B, D, G'];
  q1d.a = 0;
  q1d.answer = 0;
  q1d.solutionSteps = [
    { explanation: "Understand f''(x) > 0", workingOut: "\\text{The second derivative } f''(x) > 0 \\text{ when the curve is concave up (shaped like a cup holding water).}" },
    { explanation: "Analyze the graph visually", workingOut: "\\text{Identify the concave up regions. The curve is concave up on the far left (before inflection point C) and on the far right (after inflection point F).}" },
    { explanation: "Select the correct points", workingOut: "\\text{Points A and B are in the left concave up region. Points G and H are in the right concave up region. Thus, A, B, G, H.}" }
  ];
}

let q1e = questions.find(x => x.id === 'y12a-3i-q1e');
if (q1e) {
  q1e.type = 'multiple_choice';
  q1e.opts = ['A, B, G, H', 'C, F', 'C, H', 'D, E'];
  q1e.a = 3;
  q1e.answer = 3;
  q1e.solutionSteps = [
    { explanation: "Understand f''(x) < 0", workingOut: "\\text{The second derivative } f''(x) < 0 \\text{ when the curve is concave down (shaped like an umbrella spilling water).}" },
    { explanation: "Analyze the graph visually", workingOut: "\\text{Identify the concave down region. The curve is concave down between the two inflection points C and F.}" },
    { explanation: "Select the correct points", workingOut: "\\text{Points D and E lie between C and F, inside the concave down region. Thus, D, E.}" }
  ];
}

let q1f = questions.find(x => x.id === 'y12a-3i-q1f');
if (q1f) {
  q1f.type = 'multiple_choice';
  q1f.opts = ['C, F', 'B, D, G', 'D, E', 'A, B, G, H'];
  q1f.a = 0;
  q1f.answer = 0;
  q1f.solutionSteps = [
    { explanation: "Understand f''(x) = 0", workingOut: "\\text{The second derivative } f''(x) = 0 \\text{ typically occurs at points of inflection, where the concavity changes from up to down, or down to up.}" },
    { explanation: "Analyze the graph visually", workingOut: "\\text{Identify where concavity changes. It changes from concave up to down at C, and from down to up at F.}" },
    { explanation: "Select the correct points", workingOut: "\\text{The points of inflection are C and F.}" }
  ];
}

let q20a = questions.find(x => x.id === 'y12a-3i-q20a');
if (q20a) {
  q20a.type = 'multiple_choice';
  q20a.opts = ['4(x+3)^3 + C', '(x+3)^5 + C', '\\frac{(x+3)^5}{5} + C', '\\frac{(x+3)^4}{5} + C'];
  q20a.a = 2;
  q20a.answer = 2;
  q20a.solutionSteps = [
    { explanation: "Use the composite integration rule", workingOut: "\\text{For a linear function to a power } (ax+b)^n \\text{, the integral is } \\frac{(ax+b)^{n+1}}{a(n+1)}." },
    { explanation: "Apply the rule to the function", workingOut: "\\text{Here } a = 1\\text{, } b = 3\\text{, and } n = 4\\text{. Increase the power from 4 to 5, and divide by } 5 \\times 1 = 5.\\\\ \\int (x+3)^4 \\, dx = \\frac{(x+3)^5}{5}" },
    { explanation: "Add the constant of integration", workingOut: "\\text{Always add } + C \\text{ for indefinite integrals:}\\\\ \\frac{(x+3)^5}{5} + C" }
  ];
}

const newArrayStr = JSON.stringify(questions, null, 2).replace(/"([^"]+)":/g, '$1:');
fs.writeFileSync(filePath, content.substring(0, match.index) + 'export const Y12A_CH3I_QUESTIONS = ' + newArrayStr + ';\n', 'utf8');

async function updateDb() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  let convertOpts = (opts) => opts.map(o => ({ text: o, imageUrl: '' }));
  
  const ids = ['y12a-3i-q1b', 'y12a-3i-q1c', 'y12a-3i-q1d', 'y12a-3i-q1e', 'y12a-3i-q1f', 'y12a-3i-q20a'];
  const qs = [q1b, q1c, q1d, q1e, q1f, q20a];
  
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

  console.log('Successfully updated q1b-f and q20a in Firestore.');
  process.exit(0);
}
updateDb();
