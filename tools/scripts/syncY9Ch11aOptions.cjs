const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const pathOrig = './src/constants/seedYear9Ch11Questions.js';
let contentOrig = fs.readFileSync(pathOrig, 'utf8');

const matchOrig = contentOrig.match(/export const Y9_CH11_QUESTIONS = (\[[\s\S]*?\]);\n/);
let qOrig = eval(matchOrig[1]);

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  const batch = db.batch();
  let updatedCount = 0;
  
  for (const q of qOrig) {
    if (q.topicId === 'y9-11a' && q.type === 'multiple_choice') {
      const optionsArray = q.opts.map(opt => ({
        text: opt,
        imageUrl: ""
      }));
      
      batch.update(db.collection('questions').doc(q.id), {
        opts: q.opts,
        options: optionsArray,
        a: q.a,
        answer: q.answer || q.a.toString(),
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

  console.log(`Successfully synced Firestore 'options' field from 'opts' for ${updatedCount} questions!`);
  process.exit(0);
}
run();
