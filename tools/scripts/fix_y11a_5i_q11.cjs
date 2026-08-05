const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const filePath = '/Users/andrewkim/Desktop/sapere1/src/constants/seedYear11Ch5IQuestions.js';
let content = fs.readFileSync(filePath, 'utf8');
const match = content.match(/export const Y11_CH5I_QUESTIONS = (\[[\s\S]*\]);$/m);
let questions = eval(match[1]);

let updatedQs = [];

const updates = {
  'y11a-5i-q11a': {
    opts: [
      "\\(f(-x) = -x - 5\\), so the function is Odd", // Distractor: wrong substitution logic
      "\\(f(-x) = -x + 5\\), so the function is Odd", // Distractor: right substitution, wrong conclusion
      "\\(f(-x) = x + 5\\), so the function is Even", // Distractor: forgot to substitute -x
      "\\(f(-x) = -x + 5\\), so the function is Neither" // Correct (D)
    ],
    a: 3,
    steps: [
      {
        explanation: "To determine if a function is odd or even, we must substitute \\(-x\\) into the function in place of \\(x\\).",
        workingOut: "f(-x) = (-x) + 5 = -x + 5"
      },
      {
        explanation: "Check if the function is even. An even function satisfies \\(f(-x) = f(x)\\).",
        workingOut: "f(-x) = -x + 5 \\neq x + 5 = f(x) \\implies \\text{Not even}"
      },
      {
        explanation: "Check if the function is odd. An odd function satisfies \\(f(-x) = -f(x)\\). Be careful! \\(-f(x) = -(x + 5) = -x - 5\\).",
        workingOut: "f(-x) = -x + 5 \\neq -x - 5 = -f(x) \\implies \\text{Not odd}"
      },
      {
        explanation: "Since it is neither even nor odd, conclude the result.",
        workingOut: "\\therefore \\text{Neither}"
      }
    ]
  },
  'y11a-5i-q11b': {
    opts: [
      "\\(f(-x) = 3x^2 - 7\\), so the function is Even", // Correct (A)
      "\\(f(-x) = -3x^2 - 7\\), so the function is Neither", // Distractor: squared the x but left the negative sign
      "\\(f(-x) = -3x^2 + 7\\), so the function is Odd", // Distractor: incorrectly applied negative to whole function
      "\\(f(-x) = 3x^2 - 7\\), so the function is Neither" // Distractor: right substitution, wrong conclusion
    ],
    a: 0,
    steps: [
      {
        explanation: "Substitute \\(-x\\) into the function. Remember that squaring a negative value results in a positive value: \\((-x)^2 = x^2\\).",
        workingOut: "f(-x) = 3(-x)^2 - 7"
      },
      {
        explanation: "Simplify the expression.",
        workingOut: "f(-x) = 3x^2 - 7"
      },
      {
        explanation: "Compare the simplified \\(f(-x)\\) with the original function \\(f(x)\\).",
        workingOut: "f(-x) = 3x^2 - 7 = f(x)"
      },
      {
        explanation: "Since \\(f(-x) = f(x)\\), the function is even.",
        workingOut: "\\therefore \\text{Even}"
      }
    ]
  },
  'y11a-5i-q11c': {
    opts: [
      "\\(f(-x) = \\frac{3}{-x}\\), so the function is Neither", // Distractor: didn't recognize this is -f(x)
      "\\(f(-x) = \\frac{-3}{-x}\\), so the function is Even", // Distractor: applied negative to numerator and denominator
      "\\(f(-x) = -\\frac{3}{x}\\), so the function is Odd", // Correct (C)
      "\\(f(-x) = \\frac{3}{x}\\), so the function is Even" // Distractor: completely dropped the negative
    ],
    a: 2,
    steps: [
      {
        explanation: "Substitute \\(-x\\) into the function in place of \\(x\\).",
        workingOut: "f(-x) = \\frac{3}{(-x)}"
      },
      {
        explanation: "Simplify the expression by moving the negative sign to the front.",
        workingOut: "f(-x) = -\\frac{3}{x}"
      },
      {
        explanation: "Compare the result with \\(-f(x)\\). Notice that \\(-f(x) = -\\left(\\frac{3}{x}\\right) = -\\frac{3}{x}\\).",
        workingOut: "f(-x) = -\\frac{3}{x} = -f(x)"
      },
      {
        explanation: "Since \\(f(-x) = -f(x)\\), the function is odd.",
        workingOut: "\\therefore \\text{Odd}"
      }
    ]
  },
  'y11a-5i-q11d': {
    opts: [
      "\\(f(-x) = \\frac{-2x}{-x^2 + 3}\\), so the function is Neither", // Distractor: forgot that (-x)^2 = x^2
      "\\(f(-x) = \\frac{-2x}{x^2 + 3}\\), so the function is Odd", // Correct (B)
      "\\(f(-x) = \\frac{-2x}{x^2 - 3}\\), so the function is Odd", // Distractor: squaring -x made it -x^2, then pulled - out?
      "\\(f(-x) = \\frac{-2x}{x^2 + 3}\\), so the function is Neither" // Distractor: got right expression but failed to see it's -f(x)
    ],
    a: 1,
    steps: [
      {
        explanation: "Substitute \\(-x\\) for every \\(x\\) in the function. Be careful to apply it to both the numerator and the denominator.",
        workingOut: "f(-x) = \\frac{2(-x)}{(-x)^2 + 3}"
      },
      {
        explanation: "Simplify the numerator and denominator. In the denominator, \\((-x)^2 = x^2\\).",
        workingOut: "f(-x) = \\frac{-2x}{x^2 + 3}"
      },
      {
        explanation: "Check for oddness. Notice that you can pull the negative sign out to the front of the entire fraction.",
        workingOut: "f(-x) = -\\left(\\frac{2x}{x^2 + 3}\\right) = -f(x)"
      },
      {
        explanation: "Since \\(f(-x) = -f(x)\\), the function is odd.",
        workingOut: "\\therefore \\text{Odd}"
      }
    ]
  }
};

for (let id of Object.keys(updates)) {
  let q = questions.find(x => x.id === id);
  if (!q) {
    let parent = questions.find(x => x.subQuestions && x.subQuestions.some(sq => sq.id === id));
    if (parent) q = parent.subQuestions.find(sq => sq.id === id);
  }
  if (q) {
    let upd = updates[id];
    q.type = 'multiple_choice';
    q.opts = upd.opts;
    q.a = upd.a;
    q.answer = upd.a.toString();
    q.solutionSteps = upd.steps;
    q.solution = upd.steps[upd.steps.length - 1].workingOut.replace(/\\therefore /, '');
    
    // Set requiresManualGrading to false if it was true
    q.requiresManualGrading = false;
    
    updatedQs.push(q);
  }
}

const newArrayStr = JSON.stringify(questions, null, 2).replace(/"([a-zA-Z_$][0-9a-zA-Z_$]*)":/g, '$1:');
fs.writeFileSync(filePath, content.substring(0, match.index) + 'export const Y11_CH5I_QUESTIONS = ' + newArrayStr + ';\n', 'utf8');

async function updateDb() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  for (let q of updatedQs) {
    let isSub = !questions.find(x => x.id === q.id);
    if (!isSub) {
      await db.collection('questions').doc(q.id).update({
        type: 'multiple_choice',
        opts: q.opts,
        options: q.opts.map(o => ({ text: o, imageUrl: '' })),
        a: q.a,
        answer: q.answer,
        solution: q.solution,
        solutionSteps: q.solutionSteps,
        requiresManualGrading: false
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
            pData.subQuestions[sqIdx].options = q.opts.map(o => ({ text: o, imageUrl: '' }));
            pData.subQuestions[sqIdx].a = q.a;
            pData.subQuestions[sqIdx].answer = q.answer;
            pData.subQuestions[sqIdx].solution = q.solution;
            pData.subQuestions[sqIdx].solutionSteps = q.solutionSteps;
            pData.subQuestions[sqIdx].requiresManualGrading = false;
            await db.collection('questions').doc(parent.id).update({
              subQuestions: pData.subQuestions
            });
          }
        }
      }
    }
  }
  console.log('Successfully updated q11a-d with carefully crafted distractors and detailed step-by-step solutions.');
  process.exit(0);
}
updateDb();
