const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const path1 = './src/constants/seedCaringbah2020Questions.js';
const path2 = './src/constants/seedCaringbah2020SimilarQuestions.js';

let content1 = fs.readFileSync(path1, 'utf8');
let content2 = fs.readFileSync(path2, 'utf8');

const match1 = content1.match(/export const CARINGBAH_2020_QUESTIONS = (\[[\s\S]*?\]);\n/);
const match2 = content2.match(/export const CARINGBAH_2020_SIMILAR_QUESTIONS = (\[[\s\S]*?\]);\n/);

let questions1 = eval(match1[1]);
let questions2 = eval(match2[1]);

// Process car2020-q18
let q18aIdx = questions1.findIndex(x => x.id === 'car2020-q18a');
let q18bIdx = questions1.findIndex(x => x.id === 'car2020-q18b');
let q18cIdx = questions1.findIndex(x => x.id === 'car2020-q18c');

if (q18aIdx !== -1) {
  let qA = questions1[q18aIdx];
  let qB = questions1[q18bIdx];
  let qC = questions1[q18cIdx];

  // Modify question texts slightly for subQuestions
  qA.question = "(a) Find the coordinates of the stationary points and determine their nature.";
  qB.question = "(b) Which of the following is true about its point of inflection?";
  qC.question = "(c) Sketch the graph, indicating clearly all important features.";

  let parent = {
    id: "car2020-q18",
    topicId: "y12a-exam",
    c: "3B",
    t: "Stationary points and turning points",
    type: "multi_part",
    difficulty: "hard",
    timeLimit: 120,
    question: "Consider the curve \\(y = 2x^3 - 9x^2 + 12x\\).",
    a: "",
    solution: "",
    subQuestions: [qA, qB, qC],
    isNew: true,
    requiresManualGrading: false
  };

  // Replace a,b,c with parent
  questions1.splice(q18aIdx, 3, parent);
}

// Process car2020s-q18
let q18saIdx = questions2.findIndex(x => x.id === 'car2020s-q18a');
let q18sbIdx = questions2.findIndex(x => x.id === 'car2020s-q18b');
let q18scIdx = questions2.findIndex(x => x.id === 'car2020s-q18c');

if (q18saIdx !== -1) {
  let sqA = questions2[q18saIdx];
  let sqB = questions2[q18sbIdx];
  let sqC = questions2[q18scIdx];

  sqA.question = "(a) Find the coordinates of the stationary points and determine their nature.";
  sqB.question = "(b) Which of the following is true about its point of inflection?";
  sqC.question = "(c) Sketch the graph, indicating clearly all important features.";

  let parentS = {
    id: "car2020s-q18",
    topicId: "y12a-exam",
    c: "3B",
    t: "Stationary points and turning points",
    type: "multi_part",
    difficulty: "hard",
    timeLimit: 120,
    question: "Consider the curve \\(y = 2x^3 - 3x^2 - 12x + 5\\).",
    a: "",
    solution: "",
    subQuestions: [sqA, sqB, sqC],
    isNew: true,
    requiresManualGrading: false
  };

  questions2.splice(q18saIdx, 3, parentS);
}

fs.writeFileSync(path1, `export const CARINGBAH_2020_QUESTIONS = ${JSON.stringify(questions1, null, 2)};\n`, 'utf8');
fs.writeFileSync(path2, `export const CARINGBAH_2020_SIMILAR_QUESTIONS = ${JSON.stringify(questions2, null, 2)};\n`, 'utf8');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  // Find the new parent objects from arrays
  const parent1 = questions1.find(x => x.id === 'car2020-q18');
  const parent2 = questions2.find(x => x.id === 'car2020s-q18');

  // Firestore operations
  const batch = db.batch();
  
  // Delete a,b,c
  ['car2020-q18a', 'car2020-q18b', 'car2020-q18c', 'car2020s-q18a', 'car2020s-q18b', 'car2020s-q18c'].forEach(id => {
    batch.delete(db.collection('questions').doc(id));
  });

  // Set parent objects
  if (parent1) {
    batch.set(db.collection('questions').doc('car2020-q18'), {
      ...parent1,
      subQuestions: parent1.subQuestions.map(sq => {
        const mappedSq = { ...sq };
        if (sq.opts && sq.opts.length > 0) {
          mappedSq.options = sq.opts.map(text => ({ text, imageUrl: '' }));
        }
        return mappedSq;
      }),
      createdAt: FieldValue.serverTimestamp(),
      updatedAt: FieldValue.serverTimestamp()
    });
  }
  
  if (parent2) {
    batch.set(db.collection('questions').doc('car2020s-q18'), {
      ...parent2,
      subQuestions: parent2.subQuestions.map(sq => {
        const mappedSq = { ...sq };
        if (sq.opts && sq.opts.length > 0) {
          mappedSq.options = sq.opts.map(text => ({ text, imageUrl: '' }));
        }
        return mappedSq;
      }),
      createdAt: FieldValue.serverTimestamp(),
      updatedAt: FieldValue.serverTimestamp()
    });
  }

  await batch.commit();

  await db.doc('sync_meta/questions').update({
    version: Date.now(),
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log('Successfully reverted to subQuestions structure!');
  process.exit(0);
}
run();
