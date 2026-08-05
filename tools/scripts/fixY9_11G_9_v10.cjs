const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();

  // 1. Remove the parent solution text
  batch.update(db.collection('questions').doc('y9-11g-q9'), {
    solution: "",
    updatedAt: FieldValue.serverTimestamp()
  });

  const updateOpts = (id, options, answerIdx) => {
    batch.update(db.collection('questions').doc(id), {
      options: options.map(opt => ({ text: opt, imageUrl: '' })),
      answer: answerIdx.toString(),
      updatedAt: FieldValue.serverTimestamp()
    });
  };

  // 9a
  updateOpts('y9-11g-q9a', [
    '\\((3, 3.5)\\)',
    '\\((3, 4.5)\\)', // correct
    '\\((2.5, 4.5)\\)',
    '\\((6, 9)\\)'
  ], 1);

  // 9b
  updateOpts('y9-11g-q9b', [
    '\\((5, 3)\\)',
    '\\((12, 6)\\)',
    '\\((6, 4)\\)',
    '\\((6, 3)\\)' // correct
  ], 3);

  // 9c
  updateOpts('y9-11g-q9c', [
    '\\(\\dfrac{1}{2}\\)',
    '\\(-2\\)',
    '\\(2\\)',
    '\\(-\\dfrac{1}{2}\\)' // correct
  ], 3);

  // 9d
  updateOpts('y9-11g-q9d', [
    '\\(-\\dfrac{1}{2}\\)', // correct
    '\\(\\dfrac{1}{2}\\)',
    '\\(-2\\)',
    '\\(2\\)'
  ], 0);

  // 9e
  updateOpts('y9-11g-q9e', [
    'They are perpendicular',
    'They are parallel', // correct
    'They intersect but are not parallel',
    'They are the same line'
  ], 1);

  // 9f
  updateOpts('y9-11g-q9f', [
    '\\(-4.5\\) and \\(4.5\\)',
    '\\(4.5\\) and \\(4.5\\)',
    '\\(-4.5\\) and \\(-4.5\\)', // correct
    '\\(-\\dfrac{2}{9}\\) and \\(-\\dfrac{2}{9}\\)'
  ], 2);

  // 9g
  updateOpts('y9-11g-q9g', [
    'Rectangle',
    'Rhombus',
    'Trapezium',
    'Parallelogram' // correct
  ], 3);

  await batch.commit();

  // 3. Update parent subQuestions array
  const subIds = ['y9-11g-q9a', 'y9-11g-q9b', 'y9-11g-q9c', 'y9-11g-q9d', 'y9-11g-q9e', 'y9-11g-q9f', 'y9-11g-q9g'];
  const subQuestions = [];
  for (const id of subIds) {
    const doc = await db.collection('questions').doc(id).get();
    if (doc.exists) {
      subQuestions.push({
        id: id,
        ...doc.data(),
      });
    }
  }
  
  await db.collection('questions').doc('y9-11g-q9').update({
    subQuestions: subQuestions,
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log("Removed parent solution text and shuffled multiple choice options.");
  process.exit(0);
}

run().catch(console.error);
