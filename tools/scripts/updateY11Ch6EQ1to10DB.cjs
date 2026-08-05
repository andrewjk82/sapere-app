const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');
const { readFileSync } = require('fs');

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const fs = require('fs');
const content = fs.readFileSync('./src/constants/seedYear11Ch6EQuestions.js', 'utf8');
const arrayMatch = content.match(/export const Y11_CH6E_QUESTIONS = (\[[\s\S]*?\]);\n/);

async function run() {
  if (!arrayMatch) throw new Error("No array found");
  const questions = eval(arrayMatch[1]);
  
  const batch = db.batch();
  const questionsCol = db.collection('questions');
  let count = 0;
  
  for (const q of questions) {
    const idMatch = q.id.match(/^y11a-6e-q([1-9]|10)([a-z_]+)?/);
    if (idMatch) {
      const docRef = questionsCol.doc(q.id);
      
      const updateData = {
        solutionSteps: q.solutionSteps,
        updatedAt: FieldValue.serverTimestamp()
      };
      if (q.opts !== undefined) {
        updateData.opts = q.opts;
        // Force update options based on opts!
        updateData.options = q.opts.map(text => ({ text, imageUrl: null }));
      }

      batch.update(docRef, updateData);
      count++;
    }
  }

  const questionsMetaRef = db.doc('sync_meta/questions');
  const now = Date.now();
  batch.update(questionsMetaRef, {
    version: now,
    membershipVersion: now,
    updatedAt: FieldValue.serverTimestamp()
  });

  await batch.commit();
  console.log(`Successfully updated ${count} questions options in y11a-6e!`);
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
