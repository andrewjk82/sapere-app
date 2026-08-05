import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import fs from 'fs';

const sa = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(sa) });
const db = getFirestore();

const docRef = db.collection('questions').doc('Mlss5QCs71c1ARrP6gGr');

const subQuestions = [
  {
    id: 'sq_a',
    partLabel: 'a',
    question: '\\(A \\cap B\\)',
    type: 'multiple_choice',
    answer: 0,
    options: [
      'students who play both tennis and basketball',
      'students who play tennis or basketball (or both)',
      'students who play tennis but not basketball',
      'students who play neither sport'
    ],
    solutionSteps: [
      {
        explanation: 'Identify the meaning of the intersection of two sets.',
        workingOut: 'The intersection \\(A \\cap B\\) consists of elements that are in BOTH \\(A\\) AND \\(B\\) simultaneously.',
        graphData: null
      },
      {
        explanation: 'Apply this to the given context.',
        workingOut: 'This corresponds to "students who play both tennis and basketball".',
        graphData: null
      }
    ],
    hint: 'The intersection (cap) means "AND".'
  },
  {
    id: 'sq_b',
    partLabel: 'b',
    question: '\\(A \\cup B\\)',
    type: 'multiple_choice',
    answer: 0,
    options: [
      'students who play tennis or basketball (or both)',
      'students who play both tennis and basketball',
      'students who play basketball but not tennis',
      'all students in the school'
    ],
    solutionSteps: [
      {
        explanation: 'Identify the meaning of the union of two sets.',
        workingOut: 'The union \\(A \\cup B\\) consists of elements that are in \\(A\\), in \\(B\\), or in BOTH.',
        graphData: null
      },
      {
        explanation: 'Apply this to the given context.',
        workingOut: 'This corresponds to "students who play tennis or basketball (or both)".',
        graphData: null
      }
    ],
    hint: 'The union (cup) means "OR".'
  }
];

docRef.update({
  type: 'group',
  question: 'Let \\(A = \\{\\text{students who play tennis}\\} \\) and \\(B = \\{\\text{students who play basketball}\\}\\). Identify the correct description for each of the following sets.',
  options: [],
  answer: '',
  solutionSteps: [],
  subQuestions: subQuestions
}).then(() => {
  console.log('Successfully converted Mlss5QCs71c1ARrP6gGr to grouped sub-questions format');
}).catch(console.error);
