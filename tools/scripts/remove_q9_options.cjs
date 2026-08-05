const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function fixOptions() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  const qIds = ['y12a-3i-q9a', 'y12a-3i-q9b', 'y12a-3i-q9c', 'y12a-3i-q9d'];
  
  for (let id of qIds) {
    let docRef = db.collection('questions').doc(id);
    let doc = await docRef.get();
    
    if (doc.exists) {
      await docRef.update({
        options: FieldValue.delete(),
        opts: FieldValue.delete(),
        a: FieldValue.delete(),
        answer: FieldValue.delete()
      });
      console.log(`Deleted options for flat question ${id}`);
    } else {
      // Check if it's a subQuestion
      // Normally we'd query all docs but we know the parent might be y12a-3i-q9
      let parentRef = db.collection('questions').doc('y12a-3i-q9');
      let parentDoc = await parentRef.get();
      if (parentDoc.exists) {
        let pData = parentDoc.data();
        let sqIdx = pData.subQuestions.findIndex(sq => sq.id === id);
        if (sqIdx > -1) {
          delete pData.subQuestions[sqIdx].options;
          delete pData.subQuestions[sqIdx].opts;
          delete pData.subQuestions[sqIdx].a;
          delete pData.subQuestions[sqIdx].answer;
          await parentRef.update({
            subQuestions: pData.subQuestions
          });
          console.log(`Deleted options for subQuestion ${id}`);
        }
      }
    }
  }
  
  console.log('Successfully removed all leftover options from q9a-d in Firestore.');
  process.exit(0);
}
fixOptions();
