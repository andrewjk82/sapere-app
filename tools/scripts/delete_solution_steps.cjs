const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const ids = ['y10-8a-q2f-alpha', 'y10-8a-q2f-beta'];

  for (const id of ids) {
    await db.collection('questions').doc(id).update({
      solutionSteps: FieldValue.delete(),
      updatedAt: FieldValue.serverTimestamp()
    });
    console.log('Deleted solutionSteps from', id);
  }

  // Update parent doc's subQuestions if necessary
  const parentSnap = await db.collection('questions').doc('y10-8a-q2f').get();
  if (parentSnap.exists && parentSnap.data().subQuestions) {
    const newSubQs = parentSnap.data().subQuestions.map(sq => {
      if (ids.includes(sq.id)) {
        const { solutionSteps, ...rest } = sq; // Remove solutionSteps
        return rest;
      }
      return sq;
    });
    await parentSnap.ref.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
    console.log('Updated parent y10-8a-q2f to remove solutionSteps');
  }

  console.log('Done!');
  process.exit(0);
}

run().catch(console.error);
