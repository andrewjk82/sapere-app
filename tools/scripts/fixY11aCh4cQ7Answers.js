import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

async function run() {
  const qRef = db.collection('questions').doc('y11a-4c-q7');
  const doc = await qRef.get();
  const subQuestions = doc.data().subQuestions;

  // Map correct option text to index strings:
  const subAnswersMap = {
    'y11a-4c-q7-sub1': '4g^2 - 12g',
    'y11a-4c-q7-sub2': 'g = 0 \\text{ or } g = 3',
    'y11a-4c-q7-sub3': 'g = 0 is invalid because it ceases to be a quadratic function.',
    'y11a-4c-q7-sub4': 'y = 3x^2 - 6x + 3'
  };

  const updatedSubQuestions = subQuestions.map(sq => {
    const correctText = subAnswersMap[sq.id];
    const index = sq.options.findIndex(opt => opt.text === correctText);
    return {
      ...sq,
      answer: String(index >= 0 ? index : 0)
    };
  });

  await qRef.update({
    subQuestions: updatedSubQuestions
  });

  console.log('Successfully updated y11a-4c-q7 sub-question answer properties to index strings!');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
