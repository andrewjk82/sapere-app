const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const filePath = '/Users/andrewkim/Desktop/sapere1/src/constants/seedYear11Ch5IQuestions.js';
let content = fs.readFileSync(filePath, 'utf8');
const match = content.match(/export const Y11_CH5I_QUESTIONS = (\[[\s\S]*\]);$/m);
let questions = eval(match[1]);

let updatedQs = [];

const updates = {
  'y11a-5i-q10a': {
    opts: [
      "\\(x = 7\\)", // student forgets negative case
      "\\(x = -7\\)",
      "\\(x = 7, -7\\)", // Correct (C) - 3rd
      "\\(x = 14, -14\\)"
    ],
    a: 2,
    steps: [
      {
        explanation: "Understand the absolute value equation. An absolute value equation \\(|A| = B\\) splits into two separate cases if \\(B > 0\\): \\(A = B\\) and \\(A = -B\\).",
        workingOut: "|4x| = 28 \\implies 4x = 28 \\text{ or } 4x = -28"
      },
      {
        explanation: "Solve the first case (positive).",
        workingOut: "4x = 28 \\implies x = \\frac{28}{4} = 7"
      },
      {
        explanation: "Solve the second case (negative).",
        workingOut: "4x = -28 \\implies x = \\frac{-28}{4} = -7"
      },
      {
        explanation: "Combine the solutions. Be careful not to miss the negative case, which is a common mistake!",
        workingOut: "\\therefore x = 7, -7"
      }
    ]
  },
  'y11a-5i-q10b': {
    opts: [
      "No solution", // Correct (A) - 1st
      "\\(x = -9\\)", // Distractor: solved x+6 = -3 directly
      "\\(x = -3\\)", // Distractor: solved x+6 = 3 directly
      "\\(x = -3, -9\\)" // Distractor: did standard two cases without checking
    ],
    a: 0,
    steps: [
      {
        explanation: "Analyze the given absolute value equation. Absolute value represents the distance from zero, which must always be non-negative (\\(\\ge 0\\)).",
        workingOut: "|x + 6| = -3"
      },
      {
        explanation: "Check the right-hand side. The right side of the equation is \\(-3\\).",
        workingOut: "\\text{Since } |A| \\ge 0 \\text{ for all real numbers, } |x + 6| \\text{ cannot equal a negative number.}"
      },
      {
        explanation: "Conclude the solution. A common mistake is blindly splitting into two cases (e.g. \\(x+6=-3\\) and \\(x+6=3\\)) without first checking if the equation is mathematically possible.",
        workingOut: "\\text{Therefore, there is no real solution.}"
      }
    ]
  },
  'y11a-5i-q10c': {
    opts: [
      "\\(x = 3, -3\\)",
      "\\(x = 3, \\frac{19}{3}\\)", // Distractor: algebraic error 3x = 14+5 instead of 14-5 for one case
      "\\(x = 3\\)", // Distractor: forgot second case
      "\\(x = 3, -\\frac{19}{3}\\)" // Correct (D) - 4th
    ],
    a: 3,
    steps: [
      {
        explanation: "Set up the two cases for the absolute value equation.",
        workingOut: "|3x + 5| = 14 \\implies 3x + 5 = 14 \\text{ or } 3x + 5 = -14"
      },
      {
        explanation: "Solve the first case. Subtract 5 from both sides, then divide by 3.",
        workingOut: "3x + 5 = 14 \\implies 3x = 9 \\implies x = 3"
      },
      {
        explanation: "Solve the second case. Subtract 5 from both sides (be careful with negative numbers: \\(-14 - 5 = -19\\)).",
        workingOut: "3x + 5 = -14 \\implies 3x = -19 \\implies x = -\\frac{19}{3}"
      },
      {
        explanation: "Combine the solutions. Always double check your sign arithmetic!",
        workingOut: "\\therefore x = 3, -\\frac{19}{3}"
      }
    ]
  },
  'y11a-5i-q10d': {
    opts: [
      "\\(x = \\frac{3}{5}\\)", // Distractor: sign error
      "\\(x = -\\frac{3}{5}\\)", // Correct (B) - 2nd
      "\\(x = \\pm\\frac{3}{5}\\)", // Distractor: unnecessarily created two cases and forced a negative
      "\\(x = 0\\)"
    ],
    a: 1,
    steps: [
      {
        explanation: "Analyze the absolute value equation. Since the right side is 0, there is only one case, because \\(0\\) is neither positive nor negative (\\(+0 = -0\\)).",
        workingOut: "|5x + 3| = 0 \\implies 5x + 3 = 0"
      },
      {
        explanation: "Solve the resulting linear equation. Subtract 3 from both sides.",
        workingOut: "5x = -3"
      },
      {
        explanation: "Divide by 5 to isolate x. A common mistake here is trying to force a 'plus/minus' answer when it's not needed.",
        workingOut: "x = -\\frac{3}{5}"
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
    // update solution string slightly
    q.solution = upd.steps[upd.steps.length - 1].workingOut.replace(/\\therefore /, '');
    
    // make sure graphData is null
    q.graphData = null;
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
        graphData: null
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
            pData.subQuestions[sqIdx].graphData = null;
            await db.collection('questions').doc(parent.id).update({
              subQuestions: pData.subQuestions
            });
          }
        }
      }
    }
  }
  console.log('Successfully updated q10a-d with carefully crafted distractors and detailed step-by-step solutions.');
  process.exit(0);
}
updateDb();
