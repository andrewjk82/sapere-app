const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();

  // Helper to generate distinct options
  function updateOptions(docId, answerText, optionTexts, answerIndex) {
    batch.update(db.collection('questions').doc(docId), {
      options: [
        { text: optionTexts[0], imageUrl: '' },
        { text: optionTexts[1], imageUrl: '' },
        { text: optionTexts[2], imageUrl: '' },
        { text: optionTexts[3], imageUrl: '' }
      ],
      answer: answerIndex.toString(),
      updatedAt: FieldValue.serverTimestamp()
    });
  }

  // 1a: y = 2x + 2
  updateOptions('y9-11f-q1a', '\\(y = 2x + 2\\)', [
    '\\(y = -3x + 5\\)',
    '\\(y = 2x + 2\\)', // correct (1)
    '\\(y = x - 7\\)',
    '\\(y = 5x + 1\\)'
  ], 1);

  // 1b: y = 3x - 1
  updateOptions('y9-11f-q1b', '\\(y = 3x - 1\\)', [
    '\\(y = -2x + 4\\)',
    '\\(y = 4x - 5\\)',
    '\\(y = 3x - 1\\)', // correct (2)
    '\\(y = 6x + 2\\)'
  ], 2);

  // 1c: y = 5x + 7
  updateOptions('y9-11f-q1c', '\\(y = 5x + 7\\)', [
    '\\(y = -x + 3\\)',
    '\\(y = 5x + 7\\)', // correct (1)
    '\\(y = 2x - 4\\)',
    '\\(y = 3x + 2\\)'
  ], 1);

  // 1d: y = 3x + 1
  updateOptions('y9-11f-q1d', '\\(y = 3x + 1\\)', [
    '\\(y = -4x + 6\\)',
    '\\(y = -x - 2\\)',
    '\\(y = 3x + 1\\)', // correct (2)
    '\\(y = 5x - 7\\)'
  ], 2);

  // 1e: y = 1/2x + 9/2
  updateOptions('y9-11f-q1e', '\\(y = \\frac{1}{2}x + \\frac{9}{2}\\)', [
    '\\(y = -\\frac{2}{3}x - 1\\)',
    '\\(y = \\frac{1}{2}x + \\frac{9}{2}\\)', // correct (1)
    '\\(y = 3x - 4\\)',
    '\\(y = -\\frac{1}{4}x + 2\\)'
  ], 1);

  // 1f: y = 2/3x - 4
  updateOptions('y9-11f-q1f', '\\(y = \\frac{2}{3}x - 4\\)', [
    '\\(y = 5x + 1\\)',
    '\\(y = \\frac{2}{3}x - 4\\)', // correct (1)
    '\\(y = -\\frac{1}{2}x + 3\\)',
    '\\(y = -3x - 2\\)'
  ], 1);

  // 1g: y = -1/3x - 2/3
  updateOptions('y9-11f-q1g', '\\(y = -\\frac{1}{3}x - \\frac{2}{3}\\)', [
    '\\(y = 2x - 5\\)',
    '\\(y = -\\frac{1}{3}x - \\frac{2}{3}\\)', // correct (1)
    '\\(y = \\frac{1}{4}x + 3\\)',
    '\\(y = -4x + 1\\)'
  ], 1);

  // 1h: y = -2/5x - 17/5
  updateOptions('y9-11f-q1h', '\\(y = -\\frac{2}{5}x - \\frac{17}{5}\\)', [
    '\\(y = 3x + 2\\)',
    '\\(y = -\\frac{2}{5}x - \\frac{17}{5}\\)', // correct (1)
    '\\(y = \\frac{1}{2}x - 6\\)',
    '\\(y = -x + 4\\)'
  ], 1);

  // 2a: 6
  updateOptions('y9-11f-q2a', '\\(6\\)', [
    '\\(3\\)',
    '\\(-2\\)',
    '\\(6\\)', // correct (2)
    '\\(-8\\)'
  ], 2);

  // 2b: 2
  updateOptions('y9-11f-q2b', '\\(2\\)', [
    '\\(-5\\)',
    '\\(2\\)', // correct (1)
    '\\(7\\)',
    '\\(-3\\)'
  ], 1);

  // 2c: y = 1/3x + 6
  updateOptions('y9-11f-q2c', '\\(y = \\frac{1}{3}x + 6\\)', [
    '\\(y = 4x - 2\\)',
    '\\(y = \\frac{1}{3}x + 6\\)', // correct (1)
    '\\(y = -\\frac{1}{2}x - 3\\)',
    '\\(y = 5x + 1\\)'
  ], 1);

  // 2d: y = 2x - 4
  updateOptions('y9-11f-q2d', '\\(y = 2x - 4\\)', [
    '\\(y = -3x + 7\\)',
    '\\(y = 2x - 4\\)', // correct (1)
    '\\(y = 5x + 2\\)',
    '\\(y = -x - 1\\)'
  ], 1);

  // 3a: 3
  updateOptions('y9-11f-q3a', '\\(3\\)', [
    '\\(-4\\)',
    '\\(7\\)',
    '\\(3\\)', // correct (2)
    '\\(-1\\)'
  ], 2);

  // 3b: y = 3x - 2
  updateOptions('y9-11f-q3b', '\\(y = 3x - 2\\)', [
    '\\(y = -4x + 5\\)',
    '\\(y = 3x - 2\\)', // correct (1)
    '\\(y = 2x + 7\\)',
    '\\(y = -x - 6\\)'
  ], 1);

  // 3c: y = 3x - 2
  updateOptions('y9-11f-q3c', '\\(y = 3x - 2\\)', [
    '\\(y = 5x - 4\\)',
    '\\(y = 3x - 2\\)', // correct (1)
    '\\(y = -2x + 1\\)',
    '\\(y = x + 8\\)'
  ], 1);

  await batch.commit();
  console.log("Updated options for 15 questions with entirely different numbers.");
  process.exit(0);
}

run().catch(console.error);
