const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();

  // q13a (target answer: 2)
  const q13aOpts = [
    { text: '\\(-\\frac{3}{4}\\)', imageUrl: '' },
    { text: '\\(\\frac{3}{4}\\)', imageUrl: '' },
    { text: '\\(\\frac{4}{3}\\)', imageUrl: '' },
    { text: '\\(-\\frac{4}{3}\\)', imageUrl: '' }
  ];
  batch.update(db.collection('questions').doc('y9-11g-q13a'), { options: q13aOpts, answer: '2', updatedAt: FieldValue.serverTimestamp() });

  // q13b (target answer: 1)
  const q13bOpts = [
    { text: '\\(\\frac{4}{3}\\)', imageUrl: '' },
    { text: '\\(-\\frac{3}{4}\\)', imageUrl: '' },
    { text: '\\(\\frac{3}{4}\\)', imageUrl: '' },
    { text: '\\(-\\frac{4}{3}\\)', imageUrl: '' }
  ];
  batch.update(db.collection('questions').doc('y9-11g-q13b'), { options: q13bOpts, answer: '1', updatedAt: FieldValue.serverTimestamp() });

  // q13c (target answer: 3)
  const q13cOpts = [
    { text: '\\(0\\)', imageUrl: '' },
    { text: '\\(1\\)', imageUrl: '' },
    { text: '\\(-2\\)', imageUrl: '' },
    { text: '\\(-1\\)', imageUrl: '' }
  ];
  batch.update(db.collection('questions').doc('y9-11g-q13c'), { options: q13cOpts, answer: '3', updatedAt: FieldValue.serverTimestamp() });

  // q13d (target answer: 2)
  const q13dOpts = [
    { text: '\\(Angle\\ A\\ is\\ a\\ right\\ angle\\ (90^\\circ).\\)', imageUrl: '' },
    { text: '\\(Angle\\ C\\ is\\ a\\ right\\ angle\\ (90^\\circ).\\)', imageUrl: '' },
    { text: '\\(Angle\\ B\\ is\\ a\\ right\\ angle\\ (90^\\circ).\\)', imageUrl: '' },
    { text: '\\(The\\ triangle\\ is\\ equilateral.\\)', imageUrl: '' }
  ];
  batch.update(db.collection('questions').doc('y9-11g-q13d'), { options: q13dOpts, answer: '2', updatedAt: FieldValue.serverTimestamp() });

  // Update parent
  const parentRef = db.collection('questions').doc('y9-11g-q13');
  const parentDoc = await parentRef.get();
  let parentData = parentDoc.data();
  
  let newSubQs = parentData.subQuestions;
  newSubQs[0].options = q13aOpts;
  newSubQs[0].answer = '2';
  newSubQs[1].options = q13bOpts;
  newSubQs[1].answer = '1';
  newSubQs[2].options = q13cOpts;
  newSubQs[2].answer = '3';
  newSubQs[3].options = q13dOpts;
  newSubQs[3].answer = '2';
  
  newSubQs.forEach(sq => delete sq.updatedAt);

  batch.update(parentRef, {
    subQuestions: newSubQs,
    solutionSteps: [], // Clear parent solution steps!
    updatedAt: FieldValue.serverTimestamp()
  });

  await batch.commit();
  console.log("Updated q13 parent steps and subquestion options successfully.");
  process.exit(0);
}

run().catch(console.error);
