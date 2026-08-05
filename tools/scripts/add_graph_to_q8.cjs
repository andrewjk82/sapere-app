const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const filePath = '/Users/andrewkim/Desktop/sapere1/src/constants/seedYear12aCh3IQuestions.js';
let content = fs.readFileSync(filePath, 'utf8');
const match = content.match(/export const Y12A_CH3I_QUESTIONS = (\[[\s\S]*\]);$/m);
let questions = eval(match[1]);

const graphData = {
  geometry: {
    width: 350,
    boundingBox: [-6, 50, 8, -80],
    functions: [
      {
        expression: "x^3 - 3*x^2 - 24*x + 10",
        color: "blue"
      }
    ],
    points: {
      "Max(-2,38)": [-2, 38],
      "Min(4,-70)": [4, -70],
      "Inflection(1,-16)": [1, -16]
    },
    labelOffsets: {
      "Max(-2,38)": [-30, 20],
      "Min(4,-70)": [10, -20],
      "Inflection(1,-16)": [20, 10]
    }
  }
};

let qs = [];
const qIds = ['y12a-3i-q8a', 'y12a-3i-q8b', 'y12a-3i-q8c', 'y12a-3i-q8d'];

for (let id of qIds) {
  let q = questions.find(x => x.id === id);
  if (!q) {
    let parent = questions.find(x => x.subQuestions && x.subQuestions.some(sq => sq.id === id));
    if (parent) q = parent.subQuestions.find(sq => sq.id === id);
  }
  if (q && q.solutionSteps && q.solutionSteps.length > 0) {
    // Add graphData to the last step
    q.solutionSteps[q.solutionSteps.length - 1].graphData = graphData;
    // Also tweak the explanation slightly to mention the graph
    let exp = q.solutionSteps[q.solutionSteps.length - 1].explanation;
    if (!exp.includes('graph')) {
      q.solutionSteps[q.solutionSteps.length - 1].explanation = exp + " (See graph of original function)";
    }
    qs.push(q);
  }
}

const newArrayStr = JSON.stringify(questions, null, 2).replace(/"([^"]+)":/g, '$1:');
fs.writeFileSync(filePath, content.substring(0, match.index) + 'export const Y12A_CH3I_QUESTIONS = ' + newArrayStr + ';\n', 'utf8');

async function updateDb() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  for (let q of qs) {
    let isSub = !questions.find(x => x.id === q.id);
    if (!isSub) {
      await db.collection('questions').doc(q.id).update({
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
            pData.subQuestions[sqIdx].solutionSteps = q.solutionSteps;
            await db.collection('questions').doc(parent.id).update({
              subQuestions: pData.subQuestions
            });
          }
        }
      }
    }
  }
  console.log('Successfully updated q8a-d with graphData in Firestore.');
  process.exit(0);
}
updateDb();
