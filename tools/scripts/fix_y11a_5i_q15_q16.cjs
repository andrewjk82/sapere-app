const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const filePath = '/Users/andrewkim/Desktop/sapere1/src/constants/seedYear11Ch5IQuestions.js';
let content = fs.readFileSync(filePath, 'utf8');
const match = content.match(/export const Y11_CH5I_QUESTIONS = (\[[\s\S]*\]);$/m);
let questions = eval(match[1]);

let updatedQs = [];

const updates = {
  'y11a-5i-q15d': {
    opts: [
      "\\(69\\)", // Distractor: evaluated f(g(4)) instead
      "\\(169\\)", // Distractor: forgot +2 at the end
      "\\(234\\)", // Distractor: multiplied f(4)*g(4)
      "\\(171\\)" // Correct (D)
    ],
    a: 3,
    steps: [
      {
        explanation: "To evaluate \\(g(f(4))\\), work from the inside out. First, find \\(f(4)\\).",
        workingOut: "f(x) = 4x - 3 \\implies f(4) = 4(4) - 3 = 16 - 3 = 13"
      },
      {
        explanation: "Now substitute this result into the outer function \\(g(x)\\).",
        workingOut: "g(f(4)) = g(13)"
      },
      {
        explanation: "Evaluate \\(g(13)\\) using \\(g(x) = x^2 + 2\\). A common mistake is evaluating \\(f(g(4))\\) which gives \\(69\\), so be careful with the order!",
        workingOut: "g(13) = 13^2 + 2 = 169 + 2 = 171"
      }
    ]
  },
  'y11a-5i-q15e': {
    opts: [
      "\\(16a^2 - 24a + 11\\)", // Distractor: g(f(a)) instead of f(g(a))
      "\\(4a^2 - 1\\)", // Distractor: didn't distribute the 4 correctly: 4(a^2)+2-3
      "\\(4a^2 + 5\\)", // Correct (C)
      "\\(4a^2 + 2\\)" // Distractor: forgot the -3
    ],
    a: 2,
    steps: [
      {
        explanation: "To find the expression for \\(f(g(a))\\), start by identifying the inner expression \\(g(a)\\).",
        workingOut: "g(a) = a^2 + 2"
      },
      {
        explanation: "Substitute \\(g(a)\\) into the outer function \\(f(x) = 4x - 3\\) in place of \\(x\\).",
        workingOut: "f(g(a)) = f(a^2 + 2) = 4(a^2 + 2) - 3"
      },
      {
        explanation: "Expand and simplify. A common mistake here is forgetting to distribute the \\(4\\) to the \\(+2\\).",
        workingOut: "4(a^2) + 4(2) - 3 = 4a^2 + 8 - 3 = 4a^2 + 5"
      }
    ]
  },
  'y11a-5i-q15f': {
    opts: [
      "\\(16a^2 - 7\\)", // Distractor: expanded (4a-3)^2 as 16a^2 - 9
      "\\(16a^2 - 24a + 11\\)", // Correct (B)
      "\\(16a^2 - 24a + 9\\)", // Distractor: forgot the +2
      "\\(4a^2 + 5\\)" // Distractor: f(g(a)) instead of g(f(a))
    ],
    a: 1,
    steps: [
      {
        explanation: "To find \\(g(f(a))\\), start with the inner expression \\(f(a)\\).",
        workingOut: "f(a) = 4a - 3"
      },
      {
        explanation: "Substitute \\(f(a)\\) into the outer function \\(g(x) = x^2 + 2\\) in place of \\(x\\).",
        workingOut: "g(f(a)) = g(4a - 3) = (4a - 3)^2 + 2"
      },
      {
        explanation: "Expand the perfect square. Remember that \\((A-B)^2 = A^2 - 2AB + B^2\\). Do not just square the terms individually!",
        workingOut: "(16a^2 - 24a + 9) + 2"
      },
      {
        explanation: "Combine the constant terms.",
        workingOut: "16a^2 - 24a + 11"
      }
    ]
  },
  'y11a-5i-q16ai': {
    opts: [
      "Domain \\(x \\ge 0\\), Range \\(y \\ge -2\\)", // Correct (A)
      "Domain \\(x \\in \\mathbb{R}\\), Range \\(y \\ge -2\\)", // Distractor: forgot domain of sqrt(x)
      "Domain \\(x \\ge 2\\), Range \\(y \\ge 0\\)", // Distractor: domain/range of g(f(x))
      "Domain \\(x \\ge 0\\), Range \\(y \\ge 0\\)" // Distractor: just gave range of g(x)
    ],
    a: 0,
    steps: [
      {
        explanation: "First, find the expression for the composite function \\(f(g(x))\\).",
        workingOut: "g(x) = \\sqrt{x} \\implies f(g(x)) = f(\\sqrt{x}) = \\sqrt{x} - 2"
      },
      {
        explanation: "Determine the Domain. The domain is restricted by the inner function \\(g(x) = \\sqrt{x}\\). We cannot take the square root of a negative number.",
        workingOut: "\\text{Domain: } x \\ge 0"
      },
      {
        explanation: "Determine the Range. Knowing the domain \\(x \\ge 0\\), we know that \\(\\sqrt{x} \\ge 0\\). Substitute this minimum value into the composite function.",
        workingOut: "\\sqrt{x} \\ge 0 \\implies \\sqrt{x} - 2 \\ge -2"
      },
      {
        explanation: "State the final domain and range. A common mistake is evaluating the range of the outer function without considering the restricted output of the inner function.",
        workingOut: "\\text{Domain } x \\ge 0, \\text{ Range } y \\ge -2"
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
  console.log('Successfully updated the remaining q15 and q16ai to multiple choice with detailed steps.');
  process.exit(0);
}
updateDb();
