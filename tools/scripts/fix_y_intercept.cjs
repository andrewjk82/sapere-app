const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const snap = await db.collection('questions')
    .where('chapterId', '==', 'y10-7')
    .get();

  let updateCount = 0;
  const parentSet = new Set();

  for (const doc of snap.docs) {
    const data = doc.data();
    if (data.type !== 'multiple_choice' || !data.options) continue;
    if (!data.question || !data.question.includes('y-intercept')) continue;

    let needsUpdate = false;
    let newOptions = [];

    for (let i = 0; i < data.options.length; i++) {
      let text = data.options[i].text;
      if (text.includes('y = ')) {
        // Remove the 'y = ' part
        let newText = text.replace(/y\s*=\s*/, '');
        newOptions.push({ ...data.options[i], text: newText });
        needsUpdate = true;
      } else {
        newOptions.push(data.options[i]);
      }
    }

    if (needsUpdate) {
      await doc.ref.update({
        options: newOptions,
        updatedAt: FieldValue.serverTimestamp()
      });
      console.log(`Fixed y-intercept options for ${doc.id}`);
      updateCount++;
      parentSet.add(doc.id.replace(/[a-z]$/, ''));
    }
  }

  for (const parentId of parentSet) {
    const pSnap = await db.collection('questions').doc(parentId).get();
    if (pSnap.exists && pSnap.data().subQuestions) {
      const newSubQs = await Promise.all(pSnap.data().subQuestions.map(async sq => {
        const cSnap = await db.collection('questions').doc(sq.id).get();
        return cSnap.exists ? { ...sq, options: cSnap.data().options } : sq;
      }));
      await pSnap.ref.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
    }
  }

  console.log('\\nTotal y-intercept questions fixed:', updateCount);
  process.exit(0);
}

run().catch(console.error);
