const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const filePath = '/Users/andrewkim/Desktop/sapere1/src/constants/seedYear12aCh3IQuestions.js';
let content = fs.readFileSync(filePath, 'utf8');
const match = content.match(/export const Y12A_CH3I_QUESTIONS = (\[[\s\S]*\]);$/m);
let questions = eval(match[1]);

let qs = [];

function updateQ(id, type, opts, a, answer, steps) {
  let q = questions.find(x => x.id === id);
  if (!q) {
    let parent = questions.find(x => x.subQuestions && x.subQuestions.some(sq => sq.id === id));
    if (parent) q = parent.subQuestions.find(sq => sq.id === id);
  }
  if (q) {
    q.type = type;
    q.opts = opts;
    q.a = a;
    q.answer = answer;
    if (steps) q.solutionSteps = steps;
    qs.push(q);
  }
}

updateQ('y12a-3i-q5a', 'multiple_choice', ['\\( 6x^5 \\)', '\\( 30x^4 \\)', '\\( 120x^3 \\)', '\\( 30x^5 \\)'], 1, 1, [
  { explanation: "Find the first derivative y'", workingOut: "\\text{Apply the power rule to differentiate } x^6:\\\\ y' = 6x^5" },
  { explanation: "Differentiate y' to find the second derivative y''", workingOut: "\\text{Apply the power rule again to } 6x^5:\\\\ y'' = 30x^4" }
]);

updateQ('y12a-3i-q5b', 'multiple_choice', ['\\( 4x^3 - 6x \\)', '\\( 12x^2 - 6x \\)', '\\( 12x^2 - 6 \\)', '\\( 12x^3 - 6 \\)'], 2, 2, [
  { explanation: "Find the first derivative y'", workingOut: "\\text{Differentiate each term:}\\\\ y' = 4x^3 - 6x" },
  { explanation: "Find the second derivative y''", workingOut: "\\text{Differentiate } 4x^3 - 6x \\text{ again:}\\\\ y'' = 12x^2 - 6" }
]);

updateQ('y12a-3i-q5c', 'multiple_choice', ['\\( 12(x-3)^2 \\)', '\\( 4(x-3)^3 \\)', '\\( 12(x-3)^3 \\)', '\\( 24(x-3) \\)'], 0, 0, [
  { explanation: "Find the first derivative y'", workingOut: "\\text{Use the chain rule (or composite linear rule):}\\\\ y' = 4(x-3)^3 \\times 1 = 4(x-3)^3" },
  { explanation: "Find the second derivative y''", workingOut: "\\text{Apply the rule again to } y':\\\\ y'' = 12(x-3)^2 \\times 1 = 12(x-3)^2" }
]);

updateQ('y12a-3i-q5d', 'multiple_choice', ['\\( -\\frac{2}{x^2} \\)', '\\( \\frac{2}{x^3} \\)', '\\( -\\frac{4}{x^3} \\)', '\\( \\frac{4}{x^3} \\)'], 3, 3, [
  { explanation: "Rewrite function in index form", workingOut: "y = 2x^{-1}" },
  { explanation: "Find the first derivative y'", workingOut: "y' = -2x^{-2} = -\\frac{2}{x^2}" },
  { explanation: "Differentiate again to find y''", workingOut: "y'' = -2(-2)x^{-3} = 4x^{-3} = \\frac{4}{x^3}" }
]);

updateQ('y12a-3i-q6a', 'multiple_choice', ['concave down', 'concave up', 'inflection'], 1, 1, [
  { explanation: "Find the first derivative f'(x)", workingOut: "f'(x) = 3x^2 - 4x + 3" },
  { explanation: "Find the second derivative f''(x)", workingOut: "f''(x) = 6x - 4" },
  { explanation: "Evaluate at x = 1", workingOut: "f''(1) = 6(1) - 4 = 2" },
  { explanation: "State concavity state", workingOut: "\\text{Since } f''(1) = 2 > 0 \\text{, the curve is concave up at } x = 1." }
]);

updateQ('y12a-3i-q6b', 'multiple_choice', ['inflection', 'concave up', 'concave down'], 2, 2, [
  { explanation: "Find the first derivative f'(x)", workingOut: "f'(x) = -9x^2 - 8x^3" },
  { explanation: "Find the second derivative f''(x)", workingOut: "f''(x) = -18x - 24x^2" },
  { explanation: "Evaluate f''(1)", workingOut: "f''(1) = -18(1) - 24(1)^2 = -18 - 24 = -42" },
  { explanation: "State concavity state", workingOut: "\\text{Since } f''(1) = -42 < 0 \\text{, the curve is concave down at } x = 1." }
]);

const newArrayStr = JSON.stringify(questions, null, 2).replace(/"([^"]+)":/g, '$1:');
fs.writeFileSync(filePath, content.substring(0, match.index) + 'export const Y12A_CH3I_QUESTIONS = ' + newArrayStr + ';\n', 'utf8');

async function updateDb() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  let convertOpts = (opts) => opts.map(o => ({ text: o, imageUrl: '' }));
  
  for (let q of qs) {
    let isSub = !questions.find(x => x.id === q.id);
    if (!isSub) {
      await db.collection('questions').doc(q.id).update({
        type: 'multiple_choice',
        opts: q.opts,
        options: convertOpts(q.opts),
        a: q.a,
        answer: q.answer,
        solutionSteps: q.solutionSteps
      });
    } else {
      let parent = questions.find(x => x.subQuestions && x.subQuestions.some(sq => sq.id === q.id));
      if (parent) {
        let parentDoc = await db.collection('questions').doc(parent.id).get();
        if (parentDoc.exists) {
          let pData = parentDoc.data();
          let sqIdx = pData.subQuestions.findIndex(sq => sq.id === q.id);
          if (sqIdx > -1) {
            pData.subQuestions[sqIdx].type = 'multiple_choice';
            pData.subQuestions[sqIdx].opts = q.opts;
            pData.subQuestions[sqIdx].options = convertOpts(q.opts);
            pData.subQuestions[sqIdx].a = q.a;
            pData.subQuestions[sqIdx].answer = q.answer;
            pData.subQuestions[sqIdx].solutionSteps = q.solutionSteps;
            await db.collection('questions').doc(parent.id).update({
              subQuestions: pData.subQuestions
            });
          }
        }
      }
    }
  }
  console.log('Successfully updated q5 and q6 in Firestore.');
  process.exit(0);
}
updateDb();
