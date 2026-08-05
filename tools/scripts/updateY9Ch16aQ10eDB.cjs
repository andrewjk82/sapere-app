const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');
const { readFileSync } = require('fs');

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const fs = require('fs');
const content = fs.readFileSync('./src/constants/seedYear9Ch16Questions.js', 'utf8');
const arrayMatch = content.match(/export const Y9_CH16_QUESTIONS = (\[[\s\S]*?\]);\n/);

async function run() {
  if (!arrayMatch) throw new Error("No array found");
  const questions = eval(arrayMatch[1]);
  
  const q = questions.find(x => x.id === 'y9-16a-q10e');
  if (!q) throw new Error("Question not found");
  
  await db.collection('questions').doc(q.id).update({
    graphData: q.graphData,
    solutionSteps: q.solutionSteps,
    updatedAt: FieldValue.serverTimestamp()
  });

  await db.doc('sync_meta/questions').update({
    version: Date.now(),
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log(`Successfully updated ${q.id} in Firebase!`);
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
