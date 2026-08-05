import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import fs from 'fs';

const sa = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(sa) });
const db = getFirestore();

async function run() {
  const docRef = db.collection('questions').doc('A1s22EGzMFqbHSmEs7Vw');
  const steps = [
    {
      explanation: 'Check if every element of set \\(A\\) is also in set \\(B\\).',
      workingOut: '\\(A = \\{\\text{t, o, n, y}\\}\\)<br />\\(B = \\{\\text{s, t, o, n, e}\\}\\)',
      graphData: null
    },
    {
      explanation: 'Check each element of set \\(A\\).',
      workingOut: 't is in \\(B\\).<br />o is in \\(B\\).<br />n is in \\(B\\).<br />y is NOT in \\(B\\).',
      graphData: null
    },
    {
      explanation: 'Since y is in \\(A\\) but not in \\(B\\), \\(A\\) is not a subset of \\(B\\).',
      workingOut: '\\(A \\not\\subset B\\)',
      graphData: null
    },
    {
      explanation: 'Therefore, the statement is False.',
      workingOut: 'False',
      graphData: null
    }
  ];

  await docRef.update({
    type: 'multiple_choice',
    options: ['True', 'False'],
    answer: 1, // False
    solutionSteps: steps,
    requiresManualGrading: false
  });
  console.log('Fixed A1s22EGzMFqbHSmEs7Vw');

  // Now let's find the broken latex one
  const snap = await db.collection('questions').where('topicId', '==', 'y11a-12A').get();
  snap.forEach(doc => {
    const data = doc.data();
    const str = JSON.stringify(data.solutionSteps || []);
    if (str.includes('2, 4, 6, 8') || str.includes('4, 6')) {
      console.log('Found candidate:', doc.id, data.question);
    }
  });
}

run().catch(console.error);
