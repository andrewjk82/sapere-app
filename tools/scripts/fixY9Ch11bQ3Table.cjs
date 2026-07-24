const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const pathOrig = './src/constants/seedYear9Ch11BQuestions.js';
let contentOrig = fs.readFileSync(pathOrig, 'utf8');
const matchOrig = contentOrig.match(/export const Y9_CH11B_QUESTIONS = (\[[\s\S]*?\]);\n/);
let qOrig = eval(matchOrig[1]);

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();
  let updatedCount = 0;
  
  const toFix = ['y9-11b-q3a', 'y9-11b-q3b', 'y9-11b-q3c', 'y9-11b-q3d', 'y9-11b-q3e', 'y9-11b-q3f'];

  for (let i = 0; i < qOrig.length; i++) {
    const q = qOrig[i];
    
    if (toFix.includes(q.id)) {
      // Replace ** with nothing
      qOrig[i].question = qOrig[i].question.replace(/\*\*/g, '');

      batch.update(db.collection('questions').doc(qOrig[i].id), {
        question: qOrig[i].question,
        updatedAt: FieldValue.serverTimestamp()
      });
      updatedCount++;
    }
  }

  batch.update(db.doc('sync_meta/questions'), {
    version: Date.now(),
    updatedAt: FieldValue.serverTimestamp()
  });

  await batch.commit();

  fs.writeFileSync(pathOrig, `export const Y9_CH11B_QUESTIONS = ${JSON.stringify(qOrig, null, 2)};\n`, 'utf8');

  console.log(`Successfully updated ${updatedCount} questions!`);
  process.exit(0);
}

run().catch(console.error);
