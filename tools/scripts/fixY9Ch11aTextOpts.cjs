const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const pathOrig = './src/constants/seedYear9Ch11Questions.js';
let contentOrig = fs.readFileSync(pathOrig, 'utf8');

const matchOrig = contentOrig.match(/export const Y9_CH11_QUESTIONS = (\[[\s\S]*?\]);\n/);
let qOrig = eval(matchOrig[1]);

let updatedCount = 0;

for (let i = 0; i < qOrig.length; i++) {
  if (qOrig[i].id === 'y9-11a-q6d') {
    qOrig[i].opts = ["Scalene", "Isosceles", "Equilateral", "Right-angled"];
    qOrig[i].a = 1;
    qOrig[i].answer = "1";
    updatedCount++;
  }
  if (qOrig[i].id === 'y9-11a-q7d') {
    qOrig[i].opts = ["Scalene", "Right-angled isosceles", "Equilateral", "Isosceles but not right-angled"];
    qOrig[i].a = 1;
    qOrig[i].answer = "1";
    updatedCount++;
  }
}

fs.writeFileSync(pathOrig, `export const Y9_CH11_QUESTIONS = ${JSON.stringify(qOrig, null, 2)};\n`, 'utf8');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  const batch = db.batch();
  for (const q of qOrig) {
    if (q.id === 'y9-11a-q6d' || q.id === 'y9-11a-q7d') {
      batch.update(db.collection('questions').doc(q.id), {
        opts: q.opts,
        a: q.a,
        answer: q.answer,
        updatedAt: FieldValue.serverTimestamp()
      });
    }
  }

  batch.update(db.doc('sync_meta/questions'), {
    version: Date.now(),
    updatedAt: FieldValue.serverTimestamp()
  });
  
  await batch.commit();

  console.log(`Successfully fixed text options for ${updatedCount} questions!`);
  process.exit(0);
}
run();
