import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import fs from 'fs';

const sa = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(sa) });
const db = getFirestore();

const docRef = db.collection('questions').doc('DezURalw61NDJ8MxiuX5');

const steps = [
  {
    explanation: 'Check if every element of set \\(A\\) is also in set \\(B\\).',
    workingOut: '\\(A = \\{2, 4, 6, 8\\}\\)<br />\\(B = \\{2, 3, 6, 7, 9\\}\\)',
    graphData: null
  },
  {
    explanation: 'Check each element of set \\(A\\).',
    workingOut: '2 is in \\(B\\).<br />4 is NOT in \\(B\\).',
    graphData: null
  },
  {
    explanation: 'Since 4 is in \\(A\\) but not in \\(B\\), \\(A\\) is not a subset of \\(B\\).',
    workingOut: '\\(A \\not\\subset B\\)',
    graphData: null
  },
  {
    explanation: 'Therefore, the statement is False.',
    workingOut: 'False',
    graphData: null
  }
];

docRef.update({
  type: 'multiple_choice',
  options: ['True', 'False'],
  answer: 1,
  solutionSteps: steps,
  requiresManualGrading: false
}).then(() => {
  console.log('Successfully converted DezURalw61NDJ8MxiuX5 to multiple choice');
}).catch(console.error);
