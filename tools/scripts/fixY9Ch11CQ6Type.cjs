const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const pathOrig = './src/constants/seedYear9Ch11CQuestions.js';
let contentOrig = fs.readFileSync(pathOrig, 'utf8');
const matchOrig = contentOrig.match(/export const Y9_CH11C_QUESTIONS = (\[[\s\S]*?\]);\n/);
let qOrig = eval(matchOrig[1]);

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();
  let updatedCount = 0;

  for (let i = 0; i < qOrig.length; i++) {
    if (['y9-11c-q6a', 'y9-11c-q6b', 'y9-11c-q6c', 'y9-11c-q6d'].includes(qOrig[i].id)) {
      qOrig[i].type = 'multiple_choice';
      qOrig[i].requiresManualGrading = false;
      
      batch.update(db.collection('questions').doc(qOrig[i].id), {
        type: 'multiple_choice',
        requiresManualGrading: false,
        updatedAt: FieldValue.serverTimestamp()
      });
      updatedCount++;
    }
  }

  if (updatedCount > 0) {
    batch.update(db.doc('sync_meta/questions'), {
      version: Date.now(),
      updatedAt: FieldValue.serverTimestamp()
    });
    await batch.commit();
    fs.writeFileSync(pathOrig, `export const Y9_CH11C_QUESTIONS = ${JSON.stringify(qOrig, null, 2)};\n`, 'utf8');
    console.log(`Successfully updated ${updatedCount} question(s)!`);
  }
  process.exit(0);
}

run().catch(console.error);
