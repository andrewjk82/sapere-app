import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import fs from 'fs';

const sa = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(sa) });
const db = getFirestore();

const docRef = db.collection('questions').doc('1b94VfH8awfF3NEcHGqh');

const steps = [
  {
    explanation: 'Check if every element of set \\(A\\) is also in set \\(B\\).',
    workingOut: '\\(A = \\{\\text{g, r, a, c, e}\\}\\)<br />\\(B = \\{\\text{c, a, t, e, g, o, r, y}\\}\\)',
    graphData: null
  },
  {
    explanation: 'Check each element of set \\(A\\).',
    workingOut: 'g is in \\(B\\).<br />r is in \\(B\\).<br />a is in \\(B\\).<br />c is in \\(B\\).<br />e is in \\(B\\).',
    graphData: null
  },
  {
    explanation: 'Since every element of \\(A\\) is contained in \\(B\\), \\(A\\) is a subset of \\(B\\).',
    workingOut: '\\(A \\subset B\\)',
    graphData: null
  },
  {
    explanation: 'Therefore, the statement is True.',
    workingOut: 'True',
    graphData: null
  }
];

docRef.update({
  solutionSteps: steps
}).then(() => {
  console.log('Successfully fixed LaTeX for 1b94VfH8awfF3NEcHGqh.');
}).catch(console.error);
