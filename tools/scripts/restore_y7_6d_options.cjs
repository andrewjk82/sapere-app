const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const updates = {
    'y7-6d-q11b': {
      correctAnswer: { text: '135' },
      options: [
        { text: '135' },
        { text: '120' },
        { text: '150' },
        { text: '45' }
      ]
    },
    'y7-6d-q12a': {
      correctAnswer: { text: '\\frac{x^2}{2}' },
      options: [
        { text: '\\frac{x^2}{2}' },
        { text: '\\frac{x^2}{4}' },
        { text: '\\frac{4x^2}{3}' },
        { text: '2x^2' }
      ]
    },
    'y7-6d-q12b': {
      correctAnswer: { text: '18' },
      options: [
        { text: '18' },
        { text: '24' },
        { text: '12' },
        { text: '36' }
      ]
    }
  };

  const parentSet = new Set();
  
  for (const [id, update] of Object.entries(updates)) {
    const docRef = db.collection('questions').doc(id);
    const snap = await docRef.get();
    if (snap.exists) {
      await docRef.update({
        correctAnswer: update.correctAnswer,
        options: update.options,
        updatedAt: FieldValue.serverTimestamp()
      });
      console.log(`Updated ${id}`);
      parentSet.add(id.replace(/[a-z]$/, ''));
    }
  }

  for (const parentId of parentSet) {
    const pSnap = await db.collection('questions').doc(parentId).get();
    if (pSnap.exists && pSnap.data().subQuestions) {
      const newSubQs = await Promise.all(pSnap.data().subQuestions.map(async sq => {
        const cSnap = await db.collection('questions').doc(sq.id).get();
        return cSnap.exists ? {
          ...sq,
          options: cSnap.data().options,
          correctAnswer: cSnap.data().correctAnswer
        } : sq;
      }));
      await pSnap.ref.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
      console.log(`Updated parent ${parentId}`);
    }
  }

  console.log('Done.');
  process.exit(0);
}

run().catch(console.error);
