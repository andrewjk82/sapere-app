const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const filePath = '/Users/andrewkim/Desktop/sapere1/src/constants/seedYear11Ch5IQuestions.js';
let content = fs.readFileSync(filePath, 'utf8');
const match = content.match(/export const Y11_CH5I_QUESTIONS = (\[[\s\S]*\]);$/m);
let questions = eval(match[1]);

let updatedQs = [];

const updates = {
  'y11a-5i-q14a': {
    opts: [
      "\\(y = (x + 3)^2 + 2\\)", // Distractor: wrong x shift
      "\\(y = (x - 3)^2 - 2\\)", // Distractor: wrong y shift
      "\\(y = (x - 3)^2 + 2\\)", // Correct (C)
      "\\(y = (x + 3)^2 - 2\\)"  // Distractor: both wrong
    ],
    a: 2,
    steps: [
      {
        explanation: "Analyze the horizontal shift. A shift to the right by \\(3\\) units means we replace \\(x\\) with \\((x - 3)\\).",
        workingOut: "y = (x - 3)^2"
      },
      {
        explanation: "Analyze the vertical shift. A shift upwards by \\(2\\) units means we add \\(2\\) to the entire function.",
        workingOut: "y = (x - 3)^2 + 2"
      },
      {
        explanation: "Combine the shifts. A common mistake is using \\(+3\\) for a right shift, remember it's always \\((x - h)\\)!",
        workingOut: "\\text{Final equation: } y = (x - 3)^2 + 2"
      }
    ]
  },
  'y11a-5i-q14b': {
    opts: [
      "\\(y = \\frac{1}{x - 3} - 4\\)", // Distractor: wrong x shift
      "\\(y = \\frac{1}{x - 3} + 4\\)", // Distractor: both wrong
      "\\(y = \\frac{1}{x + 3} + 4\\)", // Distractor: wrong y shift
      "\\(y = \\frac{1}{x + 3} - 4\\)"  // Correct (D)
    ],
    a: 3,
    steps: [
      {
        explanation: "Analyze the horizontal shift. A shift to the left by \\(3\\) units means we replace \\(x\\) with \\((x + 3)\\).",
        workingOut: "y = \\frac{1}{x + 3}"
      },
      {
        explanation: "Analyze the vertical shift. A shift downwards by \\(4\\) units means we subtract \\(4\\) from the entire function.",
        workingOut: "y = \\frac{1}{x + 3} - 4"
      },
      {
        explanation: "Combine the shifts. Be careful: left shift is \\(+3\\) inside the denominator, and down shift is \\(-4\\) outside.",
        workingOut: "\\text{Final equation: } y = \\frac{1}{x + 3} - 4"
      }
    ]
  },
  'y11a-5i-q15a': {
    opts: [
      "\\(11\\)", // Distractor: evaluated g(f(0)) instead
      "\\(5\\)",  // Correct (B)
      "\\(-6\\)", // Distractor: multiplied f(0) * g(0)
      "\\(-3\\)"  // Distractor: evaluated f(0) only
    ],
    a: 1,
    steps: [
      {
        explanation: "To evaluate the composite function \\(f(g(0))\\), we must work from the inside out. First, evaluate \\(g(0)\\).",
        workingOut: "g(x) = x^2 + 2 \\implies g(0) = 0^2 + 2 = 2"
      },
      {
        explanation: "Now substitute this result into the outer function \\(f(x)\\).",
        workingOut: "f(g(0)) = f(2)"
      },
      {
        explanation: "Evaluate \\(f(2)\\) using \\(f(x) = 4x - 3\\). A common mistake is evaluating \\(g(f(0))\\) instead, which gives a completely different answer (11)!",
        workingOut: "f(2) = 4(2) - 3 = 8 - 3 = 5"
      }
    ]
  },
  'y11a-5i-q15b': {
    opts: [
      "\\(11\\)", // Correct (A)
      "\\(5\\)",  // Distractor: evaluated f(g(0)) instead
      "\\(-7\\)", // Distractor: forgot to square negative properly (-9+2)
      "\\(9\\)"   // Distractor: forgot the +2 in g(x)
    ],
    a: 0,
    steps: [
      {
        explanation: "To evaluate \\(g(f(0))\\), work from the inside out. First, find \\(f(0)\\).",
        workingOut: "f(x) = 4x - 3 \\implies f(0) = 4(0) - 3 = -3"
      },
      {
        explanation: "Substitute this result into the outer function \\(g(x)\\).",
        workingOut: "g(f(0)) = g(-3)"
      },
      {
        explanation: "Evaluate \\(g(-3)\\) using \\(g(x) = x^2 + 2\\). Remember that squaring a negative number gives a positive result: \\((-3)^2 = +9\\).",
        workingOut: "g(-3) = (-3)^2 + 2 = 9 + 2 = 11"
      }
    ]
  },
  'y11a-5i-q15c': {
    opts: [
      "\\(171\\)", // Distractor: evaluated g(f(4))
      "\\(234\\)", // Distractor: f(4) * g(4)
      "\\(69\\)",  // Correct (C)
      "\\(21\\)"   // Distractor: arithmetic error g(4)=4+2=6, f(6)=21
    ],
    a: 2,
    steps: [
      {
        explanation: "Evaluate the inner function \\(g(4)\\) first.",
        workingOut: "g(x) = x^2 + 2 \\implies g(4) = 4^2 + 2 = 16 + 2 = 18"
      },
      {
        explanation: "Substitute this result into the outer function \\(f(x)\\).",
        workingOut: "f(g(4)) = f(18)"
      },
      {
        explanation: "Evaluate \\(f(18)\\) using \\(f(x) = 4x - 3\\).",
        workingOut: "f(18) = 4(18) - 3 = 72 - 3 = 69"
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
    q.solution = upd.steps[upd.steps.length - 1].workingOut.replace(/\\text\{Final equation: \} /, '');
    
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
  console.log('Successfully updated q14 and q15 with carefully crafted distractors and detailed step-by-step solutions.');
  process.exit(0);
}
updateDb();
