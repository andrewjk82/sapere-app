import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import fs from 'fs';

const sa = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(sa) });
const db = getFirestore();

const docRef = db.collection('questions').doc('BUda5VwB9FTy9VXLJZyf');

const steps = [
  {
    explanation: 'Find the union \\(A \\cup B\\) by combining all elements from both sets without duplicates.',
    workingOut: '\\(A \\cup B = \\{2, 4, 6\\} \\cup \\{4, 6, 8\\} = \\{2, 4, 6, 8\\}\\)',
    graphData: null
  },
  {
    explanation: 'Find the intersection \\(A \\cap B\\) by identifying elements that are in BOTH sets.',
    workingOut: '\\(A \\cap B = \\{2, 4, 6\\} \\cap \\{4, 6, 8\\} = \\{4, 6\\}\\)',
    graphData: null
  },
  {
    explanation: 'Therefore, the final answer is:',
    workingOut: '\\(A \\cup B = \\{2, 4, 6, 8\\}\\) and \\(A \\cap B = \\{4, 6\\}\\)',
    graphData: null
  }
];

docRef.update({
  solutionSteps: steps
}).then(() => {
  console.log('Successfully fixed LaTeX for BUda5VwB9FTy9VXLJZyf.');
}).catch(console.error);
