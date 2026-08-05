const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const docRef = db.collection('questions').doc('y10-9a-q10r');
  
  const options = [
    { text: '\\(\\frac{9x^{21}}{y^6}\\)', imageUrl: '' }, // Forgot to cube the 3 (used 3 * 3 = 9)
    { text: '\\(\\frac{81x^{21}}{y^6}\\)', imageUrl: '' }, // Correct answer
    { text: '\\(\\frac{81x^9}{y^6}\\)', imageUrl: '' }, // Added exponents instead of multiplying (x^5)^3 -> x^8
    { text: '\\(\\frac{27x^{21}}{y^6}\\)', imageUrl: '' } // Forgot to multiply by 3 from the denominator (just 27)
  ];

  await docRef.update({
    options: options,
    answer: "1", // index 1 is correct
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log('Fixed options for y10-9a-q10r');
  
  // also update parent
  const parentId = 'y10-9a-q10';
  const pSnap = await db.collection('questions').doc(parentId).get();
  if (pSnap.exists && pSnap.data().subQuestions) {
    const newSubQs = await Promise.all(pSnap.data().subQuestions.map(async sq => {
      const cSnap = await db.collection('questions').doc(sq.id).get();
      return cSnap.exists ? { ...sq, options: cSnap.data().options, answer: cSnap.data().answer } : sq;
    }));
    await pSnap.ref.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
    console.log(`Updated parent ${parentId}`);
  }

  process.exit(0);
}

run().catch(console.error);
