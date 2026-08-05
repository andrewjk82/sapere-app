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

updateQ('y12a-3i-q7a', 'multiple_choice', ['\\( 6x^2 - 18x + 12 \\)', '\\( 12x - 18 \\)', '\\( 6x - 9 \\)', '\\( 12x^2 - 18 \\)'], 1, 1, [
  { explanation: "Find the first derivative f'(x)", workingOut: "f'(x) = 6x^2 - 18x + 12" },
  { explanation: "Differentiate f'(x) to get f''(x)", workingOut: "f''(x) = 12x - 18" }
]);

updateQ('y12a-3i-q7bi', 'multiple_choice', ['\\( x < 1.5 \\)', '\\( x > -1.5 \\)', '\\( x > 1.5 \\)', '\\( x > 3 \\)'], 2, 2, [
  { explanation: "Understand concave up", workingOut: "\\text{A function is concave up when its second derivative is positive: } f''(x) > 0" },
  { explanation: "Set up the inequality", workingOut: "f''(x) > 0 \\implies 12x - 18 > 0" },
  { explanation: "Solve for x", workingOut: "12x > 18 \\implies x > \\frac{18}{12} \\implies x > 1.5" }
]);

updateQ('y12a-3i-q7bii', 'multiple_choice', ['\\( x < -1.5 \\)', '\\( x > 1.5 \\)', '\\( x < 3 \\)', '\\( x < 1.5 \\)'], 3, 3, [
  { explanation: "Understand concave down", workingOut: "\\text{A function is concave down when its second derivative is negative: } f''(x) < 0" },
  { explanation: "Set up the inequality", workingOut: "f''(x) < 0 \\implies 12x - 18 < 0" },
  { explanation: "Solve for x", workingOut: "12x < 18 \\implies x < \\frac{18}{12} \\implies x < 1.5" }
]);

updateQ('y12a-3i-q8a', 'multiple_choice', ['\\( x < -2 \\text{ or } x > 4 \\)', '\\( -2 < x < 4 \\)', '\\( x < -4 \\text{ or } x > 2 \\)', '\\( x < 2 \\text{ or } x > 4 \\)'], 0, 0, [
  { explanation: "Set condition for increasing", workingOut: "\\text{A curve is increasing when its first derivative is strictly positive: } y' > 0" },
  { explanation: "Find the first derivative y'", workingOut: "y' = 3x^2 - 6x - 24" },
  { explanation: "Solve the inequality", workingOut: "3x^2 - 6x - 24 > 0\\\\ 3(x^2 - 2x - 8) > 0\\\\ 3(x-4)(x+2) > 0" },
  { explanation: "Determine valid regions", workingOut: "\\text{The parabola } y = 3(x-4)(x+2) \\text{ opens upwards with roots at } x = 4 \\text{ and } x = -2.\\\\ \\text{It is positive for } x < -2 \\text{ and } x > 4." }
]);

updateQ('y12a-3i-q8b', 'multiple_choice', ['\\( -4 < x < 2 \\)', '\\( x < -2 \\text{ or } x > 4 \\)', '\\( -2 < x < 4 \\)', '\\( -2 \\le x \\le 4 \\)'], 2, 2, [
  { explanation: "Set condition for decreasing", workingOut: "\\text{A curve is decreasing when its first derivative is strictly negative: } y' < 0" },
  { explanation: "Use the factored derivative y'", workingOut: "y' = 3(x-4)(x+2)" },
  { explanation: "Solve the inequality", workingOut: "3(x-4)(x+2) < 0" },
  { explanation: "Determine valid regions", workingOut: "\\text{The parabola } y = 3(x-4)(x+2) \\text{ opens upwards, so it is negative between its roots:}\\\\ -2 < x < 4" }
]);

updateQ('y12a-3i-q8c', 'multiple_choice', ['\\( x < 1 \\)', '\\( x > 1 \\)', '\\( x > -1 \\)', '\\( x < -1 \\)'], 1, 1, [
  { explanation: "Set condition for concave up", workingOut: "\\text{A curve is concave up when its second derivative is positive: } y'' > 0" },
  { explanation: "Find the second derivative y''", workingOut: "y' = 3x^2 - 6x - 24\\\\ y'' = 6x - 6" },
  { explanation: "Solve the inequality", workingOut: "6x - 6 > 0 \\implies 6x > 6 \\implies x > 1" }
]);

updateQ('y12a-3i-q8d', 'multiple_choice', ['\\( x > 1 \\)', '\\( x > -1 \\)', '\\( x < -1 \\)', '\\( x < 1 \\)'], 3, 3, [
  { explanation: "Set condition for concave down", workingOut: "\\text{A curve is concave down when its second derivative is negative: } y'' < 0" },
  { explanation: "Find the second derivative y''", workingOut: "y'' = 6x - 6" },
  { explanation: "Solve the inequality", workingOut: "6x - 6 < 0 \\implies 6x < 6 \\implies x < 1" }
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
  console.log('Successfully updated q7 and q8 in Firestore.');
  process.exit(0);
}
updateDb();
