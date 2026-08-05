import fs from 'fs';
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';

const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

async function run() {
  const snapshot = await db.collection('questions')
    .where('chapterId', '==', 'y10-11')
    .get();
    
  let count = 0;
  
  for (let doc of snapshot.docs) {
    let data = doc.data();
    let updated = false;
    
    // Fix standalone or parent
    if (data.type === 'multiple_choice' && data.isManual === true) {
      data.isManual = false;
      updated = true;
    }
    
    // Fix subQuestions
    if (data.subQuestions && data.subQuestions.length > 0) {
      for (let i = 0; i < data.subQuestions.length; i++) {
        if (data.subQuestions[i].type === 'multiple_choice' && data.subQuestions[i].isManual === true) {
          data.subQuestions[i].isManual = false;
          updated = true;
        }
      }
    }
    
    if (updated) {
      await db.collection('questions').doc(doc.id).update({
        isManual: data.isManual,
        subQuestions: data.subQuestions || FieldValue.delete(),
        updatedAt: FieldValue.serverTimestamp()
      });
      count++;
    }
  }
  
  console.log(`Successfully fixed isManual for ${count} documents in y10-11.`);
}

run().catch(console.error);
