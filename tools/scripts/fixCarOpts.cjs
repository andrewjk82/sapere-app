const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const path1 = './src/constants/seedCaringbah2020Questions.js';
const path2 = './src/constants/seedCaringbah2020SimilarQuestions.js';

let content1 = fs.readFileSync(path1, 'utf8');
let content2 = fs.readFileSync(path2, 'utf8');

const match1 = content1.match(/export const CARINGBAH_2020_QUESTIONS = (\[[\s\S]*?\]);\n/);
const match2 = content2.match(/export const CARINGBAH_2020_SIMILAR_QUESTIONS = (\[[\s\S]*?\]);\n/);

let questions1 = eval(match1[1]);
let questions2 = eval(match2[1]);

let parent1 = questions1.find(x => x.id === 'car2020-q18');
let parent2 = questions2.find(x => x.id === 'car2020s-q18');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();

  if (parent1) {
    let subQuestionsWithOpts = parent1.subQuestions.map(sq => {
      const mapped = { ...sq };
      if (sq.opts && sq.opts.length > 0) {
        mapped.options = sq.opts.map(text => ({ text, imageUrl: '' }));
      }
      return mapped;
    });
    batch.update(db.collection('questions').doc('car2020-q18'), {
      subQuestions: subQuestionsWithOpts,
      updatedAt: FieldValue.serverTimestamp()
    });
  }

  if (parent2) {
    let subQuestionsWithOpts = parent2.subQuestions.map(sq => {
      const mapped = { ...sq };
      if (sq.opts && sq.opts.length > 0) {
        mapped.options = sq.opts.map(text => ({ text, imageUrl: '' }));
      }
      return mapped;
    });
    batch.update(db.collection('questions').doc('car2020s-q18'), {
      subQuestions: subQuestionsWithOpts,
      updatedAt: FieldValue.serverTimestamp()
    });
  }

  await batch.commit();

  await db.doc('sync_meta/questions').update({
    version: Date.now(),
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log('Successfully restored options arrays for car2020-q18 and car2020s-q18!');
  process.exit(0);
}
run();
