import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import fs from 'fs';

const sa = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(sa) });
const db = getFirestore();

const docRef = db.collection('questions').doc('k1SNd5nbMWNz1qRFbLBQ');

const subQuestions = [
  {
    id: 'sq_a',
    partLabel: 'a',
    question: '\\(\\overline{A}\\)',
    type: 'multiple_choice',
    answer: 1,
    options: [
      'students who play violin',
      'students who do not play violin',
      'students who do not sing in the choir',
      'students who do neither'
    ],
    solutionSteps: [
      {
        explanation: 'Identify the meaning of the complement of a set.',
        workingOut: 'The complement \\(\\overline{A}\\) consists of all elements in the universal set \\(E\\) that are NOT in set \\(A\\).',
        graphData: null
      },
      {
        explanation: 'Apply this to the given context.',
        workingOut: 'Since \\(A\\) is "students who play violin", \\(\\overline{A}\\) must be "students who do not play violin".',
        graphData: null
      }
    ],
    hint: 'The complement of a set means "everything NOT in that set".'
  },
  {
    id: 'sq_b',
    partLabel: 'b',
    question: '\\(\\overline{B}\\)',
    type: 'multiple_choice',
    answer: 0,
    options: [
      'students who do not sing in the choir',
      'students who sing in the choir',
      'students who do not play violin',
      'students who play violin or sing in the choir'
    ],
    solutionSteps: [
      {
        explanation: 'Identify the meaning of the complement of a set.',
        workingOut: 'The complement \\(\\overline{B}\\) consists of all elements in the universal set \\(E\\) that are NOT in set \\(B\\).',
        graphData: null
      },
      {
        explanation: 'Apply this to the given context.',
        workingOut: 'Since \\(B\\) is "students who sing in the choir", \\(\\overline{B}\\) must be "students who do not sing in the choir".',
        graphData: null
      }
    ],
    hint: 'The complement of a set means "everything NOT in that set".'
  },
  {
    id: 'sq_c',
    partLabel: 'c',
    question: '\\(A \\cup B\\)',
    type: 'multiple_choice',
    answer: 1,
    options: [
      'students who play violin AND sing in the choir',
      'students who play violin OR sing in the choir (or both)',
      'students who do not play violin and do not sing in the choir',
      'students who do neither'
    ],
    solutionSteps: [
      {
        explanation: 'Identify the meaning of the union of two sets.',
        workingOut: 'The union \\(A \\cup B\\) consists of elements that are in \\(A\\), in \\(B\\), or in BOTH.',
        graphData: null
      },
      {
        explanation: 'Apply this to the given context.',
        workingOut: 'This corresponds to "students who play violin OR sing in the choir (or both)".',
        graphData: null
      }
    ],
    hint: 'The union (cup) means "OR".'
  },
  {
    id: 'sq_d',
    partLabel: 'd',
    question: '\\(A \\cap B\\)',
    type: 'multiple_choice',
    answer: 2,
    options: [
      'students who play violin OR sing in the choir',
      'students who do not play violin',
      'students who play violin AND sing in the choir',
      'students who do neither'
    ],
    solutionSteps: [
      {
        explanation: 'Identify the meaning of the intersection of two sets.',
        workingOut: 'The intersection \\(A \\cap B\\) consists of elements that are in BOTH \\(A\\) AND \\(B\\) simultaneously.',
        graphData: null
      },
      {
        explanation: 'Apply this to the given context.',
        workingOut: 'This corresponds to "students who play violin AND sing in the choir".',
        graphData: null
      }
    ],
    hint: 'The intersection (cap) means "AND".'
  }
];

docRef.update({
  type: 'group',
  question: 'Let \\(A = \\{\\text{students who play violin}\\}\\) and \\(B = \\{\\text{students who sing in the choir}\\}\\) with the universal set \\(E = \\{\\text{all students at Oakridge Academy}\\}\\). Identify the correct description for each of the following sets.',
  options: [],
  answer: '',
  solutionSteps: [],
  subQuestions: subQuestions
}).then(() => {
  console.log('Successfully converted k1SNd5nbMWNz1qRFbLBQ to grouped sub-questions format');
}).catch(console.error);
