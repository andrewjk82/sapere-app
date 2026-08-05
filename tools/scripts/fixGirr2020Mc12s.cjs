const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const docRef = db.collection('questions').doc('girr2020-mc12s');
  const doc = await docRef.get();
  if (!doc.exists) {
    console.error("girr2020-mc12s not found in Firestore!");
    process.exit(1);
  }

  const solutionSteps = [
      {
        explanation: 'Identify the known and unknown sides. We know two sides (PQ = 8 cm, PR = 5 cm) and the angle between them (∠QPR = 53°). We need to find the side opposite to this angle, which is QR. This is a classic setup for the cosine rule.',
        workingOut: 'PQ = 8\\text{ cm}, PR = 5\\text{ cm}, \\angle QPR = 53^\\circ'
      },
      {
        explanation: 'The cosine rule states that for any triangle with sides $a$, $b$, $c$ and angle $A$ opposite to side $a$: $a^2 = b^2 + c^2 - 2bc\\cos(A)$. In our case, QR is the side opposite to angle P.',
        workingOut: 'QR^2 = PQ^2 + PR^2 - 2(PQ)(PR)\\cos(P)'
      },
      {
        explanation: 'Substitute the known values. Calculate $PQ^2 = 8^2 = 64$ and $PR^2 = 5^2 = 25$.',
        workingOut: 'QR^2 = 64 + 25 - 2(8)(5)\\cos(53°) = 89 - 80\\cos(53°)'
      },
      {
        explanation: 'Calculate the value of $\\cos(53^\\circ) \\approx 0.6018$. Then $80 \\times 0.6018 \\approx 48.144$.',
        workingOut: '80 \\times 0.6018 \\approx 48.144'
      },
      {
        explanation: 'Substitute back into the equation.',
        workingOut: 'QR^2 = 89 - 48.144 = 40.856'
      },
      {
        explanation: 'Take the square root of both sides.',
        workingOut: 'QR = \\sqrt{40.856} \\approx 6.4\\text{ cm}'
      }
    ];

  await docRef.update({
    graphData: null,
    solutionSteps: solutionSteps,
    updatedAt: FieldValue.serverTimestamp()
  });

  // Update sync version
  const questionsMetaRef = db.doc('sync_meta/questions');
  const now = Date.now();
  await questionsMetaRef.update({
    version: now,
    membershipVersion: now,
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log("Successfully updated girr2020-mc12s (removed graphData and fixed LaTeX)");
  process.exit(0);
}

run().catch(console.error);
