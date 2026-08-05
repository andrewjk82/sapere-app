import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import fs from 'fs';

const sa = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(sa) });
const db = getFirestore();

const docRef = db.collection('questions').doc('DvpYSV8I0JYMnT6fYqba');

const steps = [
  {
    explanation: 'Recall the property of the empty set regarding subsets.',
    workingOut: 'The empty set \\(\\emptyset\\) contains no elements.',
    graphData: null
  },
  {
    explanation: 'Check if there are any elements in \\(A\\) that are not in \\(B\\).',
    workingOut: 'Since \\(A\\) has no elements, there is no element in \\(A\\) that is missing from \\(B\\).',
    graphData: null
  },
  {
    explanation: 'Conclusion based on the subset rule.',
    workingOut: 'Therefore, the empty set is a subset of every set. \\(A \\subset B\\)',
    graphData: null
  },
  {
    explanation: 'State the final answer.',
    workingOut: 'True',
    graphData: null
  }
];

docRef.update({
  type: 'multiple_choice',
  options: ['True', 'False'],
  answer: 0,
  solutionSteps: steps,
  requiresManualGrading: false
}).then(() => {
  console.log('Successfully converted DvpYSV8I0JYMnT6fYqba to multiple choice');
}).catch(console.error);
