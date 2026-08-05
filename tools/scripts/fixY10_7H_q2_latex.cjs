const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const fixSteps = async (id, a) => {
    const docRef = db.collection('questions').doc(id);
    const snap = await docRef.get();
    if (!snap.exists) return;
    const data = snap.data();
    if (data.solutionSteps && data.solutionSteps.length > 0) {
      const steps = [...data.solutionSteps];
      // Fix step 0 explanation
      steps[0].explanation = `To express the equation in vertex form \\( y = a(x - h)^2 + k \\), we use a method called **completing the square**. First, factor out the coefficient of \\(x^2\\) (which is \\(${a}\\)) from the first two terms.`;
      
      await docRef.update({
        solutionSteps: steps,
        updatedAt: FieldValue.serverTimestamp()
      });
      return steps;
    }
  };

  const steps2c = await fixSteps('y10-7h-q2c', 2);
  const steps2d = await fixSteps('y10-7h-q2d', 3);

  // Update parent
  const pRef = db.collection('questions').doc('y10-7h-q2');
  const pSnap = await pRef.get();
  if (pSnap.exists && pSnap.data().subQuestions) {
    const newSubQs = pSnap.data().subQuestions.map(sq => {
      if (sq.id === 'y10-7h-q2c' && steps2c) {
        return { ...sq, solutionSteps: steps2c };
      }
      if (sq.id === 'y10-7h-q2d' && steps2d) {
        return { ...sq, solutionSteps: steps2d };
      }
      return sq;
    });
    await pRef.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
  }

  console.log("Fixed broken template literals in q2c and q2d");
  process.exit(0);
}

run().catch(console.error);
