const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const filePath = '/Users/andrewkim/Desktop/sapere1/src/constants/seedYear11Ch5IQuestions.js';
let content = fs.readFileSync(filePath, 'utf8');
const match = content.match(/export const Y11_CH5I_QUESTIONS = (\[[\s\S]*\]);$/m);
let questions = eval(match[1]);

let updatedQs = [];

const updates = {
  'y11a-5i-q16aii': {
    type: 'multiple_choice',
    opts: [
      "Domain \\(x \\ge 0\\), Range \\(y \\ge -2\\)", // Distractor: Domain/range of f(g(x))
      "Domain \\(x \\ge 2\\), Range \\(y \\ge 0\\)", // Correct (B)
      "Domain \\(x \\in \\mathbb{R}\\), Range \\(y \\in \\mathbb{R}\\)", // Distractor: Ignored sqrt restrictions
      "Domain \\(x \\ge -2\\), Range \\(y \\ge 0\\)" // Distractor: Wrong sign when solving x-2 >= 0
    ],
    a: 1,
    steps: [
      {
        explanation: "First, find the expression for the composite function \\(g(f(x))\\).",
        workingOut: "f(x) = x - 2 \\implies g(f(x)) = g(x - 2) = \\sqrt{x - 2}"
      },
      {
        explanation: "Determine the Domain. The expression inside the square root must be non-negative.",
        workingOut: "x - 2 \\ge 0 \\implies x \\ge 2"
      },
      {
        explanation: "Determine the Range. The principal square root function always produces a non-negative result.",
        workingOut: "\\sqrt{x - 2} \\ge 0 \\implies y \\ge 0"
      },
      {
        explanation: "State the final domain and range. A common mistake is finding the domain and range of \\(f(g(x))\\) instead, which gives a different answer!",
        workingOut: "\\text{Domain } x \\ge 2, \\text{ Range } y \\ge 0"
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
    q.graphData = null; // No graph needed
    
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
        type: q.type,
        opts: q.opts,
        options: q.opts.map(o => ({ text: o, imageUrl: '' })),
        a: q.a,
        answer: q.answer,
        solution: q.solution,
        solutionSteps: q.solutionSteps,
        requiresManualGrading: q.requiresManualGrading
      });
    } else {
      let parent = questions.find(x => x.subQuestions && x.subQuestions.some(sq => sq.id === q.id));
      if (parent) {
        let parentDoc = await db.collection('questions').doc(parent.id).get();
        if (parentDoc.exists) {
          let pData = parentDoc.data();
          let sqIdx = pData.subQuestions.findIndex(sq => sq.id === q.id);
          if (sqIdx > -1) {
            pData.subQuestions[sqIdx].type = q.type;
            pData.subQuestions[sqIdx].opts = q.opts;
            pData.subQuestions[sqIdx].options = q.opts.map(o => ({ text: o, imageUrl: '' }));
            pData.subQuestions[sqIdx].a = q.a;
            pData.subQuestions[sqIdx].answer = q.answer;
            pData.subQuestions[sqIdx].solution = q.solution;
            pData.subQuestions[sqIdx].solutionSteps = q.solutionSteps;
            pData.subQuestions[sqIdx].requiresManualGrading = q.requiresManualGrading;
            await db.collection('questions').doc(parent.id).update({
              subQuestions: pData.subQuestions
            });
          }
        }
      }
    }
  }
  console.log('Successfully updated y11a-5i-q16aii.');
  process.exit(0);
}
updateDb();
