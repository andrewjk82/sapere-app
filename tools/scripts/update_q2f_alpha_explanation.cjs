const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const newExplanation = `**Finding α = ∠PTU**

Since line \\(PQ \\parallel\\) line \\(RS\\), we can draw an auxiliary line through point \\(T\\) that is parallel to both lines. This helps us use alternate interior angles.

The auxiliary line through \\(T\\) is parallel to \\(PQ\\). By the **Alternate Interior Angles** theorem, the angle on the left part of \\(\\angle PTU\\) is equal to \\(\\angle TPQ\\):
$$\\angle \\text{(left part)} = 48^\\circ$$

The auxiliary line is also parallel to \\(RS\\). Since \\(\\angle TUS = 73^\\circ\\), by the **Alternate Interior Angles** theorem, the right part of \\(\\angle PTU\\) is equal to \\(\\angle TUS\\):
$$\\angle \\text{(right part)} = 73^\\circ$$

Adding both parts gives the total angle for \\(\\alpha\\):
$$\\alpha = 48^\\circ + 73^\\circ = \\boxed{121^\\circ}$$`;

  await db.collection('questions').doc('y10-8a-q2f-alpha').update({
    explanation: newExplanation,
    updatedAt: FieldValue.serverTimestamp()
  });
  console.log('Updated explanation for y10-8a-q2f-alpha');

  // Also update parent doc's subQuestions if necessary
  const parentSnap = await db.collection('questions').doc('y10-8a-q2f').get();
  if (parentSnap.exists && parentSnap.data().subQuestions) {
    const newSubQs = await Promise.all(parentSnap.data().subQuestions.map(async sq => {
      if (sq.id === 'y10-8a-q2f-alpha') {
        return { ...sq, explanation: newExplanation };
      }
      return sq;
    }));
    await parentSnap.ref.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
    console.log('Updated parent y10-8a-q2f');
  }

  console.log('Done!');
  process.exit(0);
}

run().catch(console.error);
