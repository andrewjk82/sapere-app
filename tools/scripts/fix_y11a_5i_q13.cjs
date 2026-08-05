const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const filePath = '/Users/andrewkim/Desktop/sapere1/src/constants/seedYear11Ch5IQuestions.js';
let content = fs.readFileSync(filePath, 'utf8');
const match = content.match(/export const Y11_CH5I_QUESTIONS = (\[[\s\S]*\]);$/m);
let questions = eval(match[1]);

let updatedQs = [];

const updates = {
  'y11a-5i-q13a': {
    opts: [
      "Centre \\((0, -2)\\), Radius \\(3\\)", // Distractor: wrong sign
      "Centre \\((0, 2)\\), Radius \\(3\\)", // Correct (B)
      "Centre \\((0, -2)\\), Radius \\(9\\)", // Distractor: wrong sign, forgot sqrt
      "Centre \\((0, 2)\\), Radius \\(9\\)" // Distractor: forgot sqrt
    ],
    a: 1,
    steps: [
      {
        explanation: "Group the \\(y\\) terms together and prepare to complete the square. The \\(x^2\\) term is already a perfect square \\((x - 0)^2\\).",
        workingOut: "x^2 + (y^2 - 4y) = 5"
      },
      {
        explanation: "Complete the square for \\(y\\). Take half of the \\(y\\)-coefficient (\\(-4 / 2 = -2\\)), square it (\\(4\\)), and add it to BOTH sides.",
        workingOut: "x^2 + (y^2 - 4y + 4) = 5 + 4"
      },
      {
        explanation: "Write the equation in standard circle form \\((x - h)^2 + (y - k)^2 = r^2\\).",
        workingOut: "x^2 + (y - 2)^2 = 9"
      },
      {
        explanation: "Identify the centre \\((h, k)\\) and radius \\(r\\). Be careful: the formula has negative signs, so \\((y - 2)\\) means \\(k = 2\\), not \\(-2\\). Also, \\(r^2 = 9\\), so \\(r = 3\\).",
        workingOut: "\\text{Centre } (0, 2), \\text{ Radius } 3"
      }
    ]
  },
  'y11a-5i-q13b': {
    opts: [
      "Centre \\((-4, 0)\\), Radius \\(2\\)", // Correct (A)
      "Centre \\((4, 0)\\), Radius \\(4\\)", // Distractor: wrong sign, forgot sqrt
      "Centre \\((-4, 0)\\), Radius \\(4\\)", // Distractor: forgot sqrt
      "Centre \\((4, 0)\\), Radius \\(2\\)" // Distractor: wrong sign
    ],
    a: 0,
    steps: [
      {
        explanation: "Group the \\(x\\) terms together and move the constant to the right-hand side.",
        workingOut: "(x^2 + 8x) + y^2 = -12"
      },
      {
        explanation: "Complete the square for \\(x\\). Half of \\(8\\) is \\(4\\), and \\(4^2 = 16\\). Add \\(16\\) to BOTH sides.",
        workingOut: "(x^2 + 8x + 16) + y^2 = -12 + 16"
      },
      {
        explanation: "Write the equation in standard circle form.",
        workingOut: "(x + 4)^2 + y^2 = 4"
      },
      {
        explanation: "Identify the centre \\((h, k)\\) and radius \\(r\\). The expression \\((x + 4)\\) means \\(h = -4\\). The right side is \\(r^2 = 4\\), so \\(r = 2\\).",
        workingOut: "\\text{Centre } (-4, 0), \\text{ Radius } 2"
      }
    ]
  },
  'y11a-5i-q13c': {
    opts: [
      "Centre \\((-3, 4)\\), Radius \\(6\\)", // Distractor: wrong signs
      "Centre \\((-3, -4)\\), Radius \\(6\\)", // Distractor: wrong sign for x
      "Centre \\((3, -4)\\), Radius \\(36\\)", // Distractor: forgot sqrt
      "Centre \\((3, -4)\\), Radius \\(6\\)" // Correct (D)
    ],
    a: 3,
    steps: [
      {
        explanation: "Group the \\(x\\) terms and \\(y\\) terms together, and move the constant to the right-hand side.",
        workingOut: "(x^2 - 6x) + (y^2 + 8y) = 11"
      },
      {
        explanation: "Complete the square for both \\(x\\) and \\(y\\). For \\(x\\), add \\((-3)^2 = 9\\). For \\(y\\), add \\(4^2 = 16\\). Remember to add these to BOTH sides.",
        workingOut: "(x^2 - 6x + 9) + (y^2 + 8y + 16) = 11 + 9 + 16"
      },
      {
        explanation: "Write the equation in standard circle form.",
        workingOut: "(x - 3)^2 + (y + 4)^2 = 36"
      },
      {
        explanation: "Identify the centre \\((h, k)\\) and radius \\(r\\). Be mindful of the signs: \\(-3\\) gives \\(h=3\\), and \\(+4\\) gives \\(k=-4\\).",
        workingOut: "\\text{Centre } (3, -4), \\text{ Radius } 6"
      }
    ]
  },
  'y11a-5i-q13d': {
    opts: [
      "Centre \\((-5, 6)\\), Radius \\(81\\)", // Distractor: wrong signs, forgot sqrt
      "Centre \\((-5, 6)\\), Radius \\(9\\)", // Distractor: wrong signs
      "Centre \\((5, -6)\\), Radius \\(9\\)", // Correct (C)
      "Centre \\((5, -6)\\), Radius \\(81\\)" // Distractor: forgot sqrt
    ],
    a: 2,
    steps: [
      {
        explanation: "Group the \\(x\\) terms and \\(y\\) terms together.",
        workingOut: "(x^2 - 10x) + (y^2 + 12y) = 20"
      },
      {
        explanation: "Complete the square for both variables. Add \\((-5)^2 = 25\\) for \\(x\\), and \\(6^2 = 36\\) for \\(y\\) to BOTH sides.",
        workingOut: "(x^2 - 10x + 25) + (y^2 + 12y + 36) = 20 + 25 + 36"
      },
      {
        explanation: "Write the equation in standard circle form.",
        workingOut: "(x - 5)^2 + (y + 6)^2 = 81"
      },
      {
        explanation: "Identify the centre \\((h, k)\\) and radius \\(r\\). A common mistake is leaving the radius as \\(81\\) instead of taking the square root \\(r = \\sqrt{81} = 9\\).",
        workingOut: "\\text{Centre } (5, -6), \\text{ Radius } 9"
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
    q.solution = upd.steps[upd.steps.length - 1].workingOut;
    
    // Set requiresManualGrading to false
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
  console.log('Successfully updated q13a-d with carefully crafted distractors and detailed step-by-step solutions.');
  process.exit(0);
}
updateDb();
