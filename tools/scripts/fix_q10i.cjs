const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const doc = await db.collection('questions').doc('y10-9a-q10i').get();
  const data = doc.data();

  // Remove 13/6 and add a new smart distractor
  let newOptions = data.options.filter(o => !o.text.includes('13}{6'));
  
  if (newOptions.length < 4) {
     newOptions.push({ text: '\\(\\frac{a^9b^6}{c^{15}}\\)', imageUrl: '' });
  }

  // Find correct answer index
  let newAnswerIdx = newOptions.findIndex(o => o.text.includes('b^6c^{15}'));
  
  await doc.ref.update({
    options: newOptions,
    answer: String(newAnswerIdx),
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log('Fixed y10-9a-q10i options');
  
  // parent
  const parentId = 'y10-9a-q10';
  const pSnap = await db.collection('questions').doc(parentId).get();
  if (pSnap.exists && pSnap.data().subQuestions) {
    const newSubQs = await Promise.all(pSnap.data().subQuestions.map(async sq => {
      const cSnap = await db.collection('questions').doc(sq.id).get();
      return cSnap.exists ? { ...sq, options: cSnap.data().options, answer: cSnap.data().answer } : sq;
    }));
    await pSnap.ref.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
  }

  process.exit(0);
}

run().catch(console.error);
