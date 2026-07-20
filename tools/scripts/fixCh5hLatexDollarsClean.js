import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

async function run() {
  const batch = db.batch();
  const questionsCol = db.collection('questions');

  // Fix q14ai: use "dollars" / "cents" in workingOut and remove Korean from explanation
  const q14aiRef = questionsCol.doc('y9-5h-q14ai');
  batch.update(q14aiRef, {
    solutionSteps: [
      {
        explanation: "Convert the variable cost per kilometer from cents to dollars. Since there are 100 cents in a dollar, 5 cents is equal to $0.05.",
        workingOut: "5\\text{ cents} = \\frac{5}{100}\\text{ dollars} = 0.05\\text{ dollars}"
      },
      {
        explanation: "Form the expression by adding the fixed cost of $30 to the variable cost for x kilometers.",
        workingOut: "\\text{Cost} = 30 + 0.05x"
      }
    ]
  });

  // Fix q14aii: use "dollars" / "cents" in workingOut
  const q14aiiRef = questionsCol.doc('y9-5h-q14aii');
  batch.update(q14aiiRef, {
    solutionSteps: [
      {
        explanation: "Convert 7 cents to dollars to maintain consistent units.",
        workingOut: "7\\text{ cents} = \\frac{7}{100}\\text{ dollars} = 0.07\\text{ dollars}"
      },
      {
        explanation: "Write the expression adding the flat rate of $25 and the per-kilometer cost.",
        workingOut: "\\text{Cost} = 25 + 0.07x"
      }
    ]
  });

  // Fix q14b
  const q14bRef = questionsCol.doc('y9-5h-q14b');
  batch.update(q14bRef, {
    solutionSteps: [
      {
        explanation: "Set up the inequality where GoCar is cheaper (better deal) than DriveSafe.",
        workingOut: "\\text{Cost of GoCar} < \\text{Cost of DriveSafe} \\implies 30 + 0.05x < 25 + 0.07x"
      },
      {
        explanation: "Subtract 25 from both sides of the inequality.",
        workingOut: "5 + 0.05x < 0.07x"
      },
      {
        explanation: "Subtract 0.05x from both sides to group variable terms on the right side.",
        workingOut: "5 < 0.02x"
      },
      {
        explanation: "Divide both sides by 0.02 to solve for x. Note that dividing by 0.02 is equivalent to multiplying by 50.",
        workingOut: "x > \\frac{5}{0.02} \\implies x > 250"
      }
    ]
  });

  // Bump sync version
  const questionsMetaRef = db.doc('sync_meta/questions');
  const now = Date.now();
  batch.update(questionsMetaRef, {
    version: now,
    membershipVersion: now,
    updatedAt: FieldValue.serverTimestamp()
  });

  await batch.commit();
  console.log('Successfully fixed LaTeX dollars and removed Korean from q14ai, q14aii, q14b in Firestore!');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
