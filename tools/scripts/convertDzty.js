import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import fs from 'fs';

const sa = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(sa) });
const db = getFirestore();

const docRef = db.collection('questions').doc('DztytMoe0P2ZS3qtZZyp');

const subQuestions = [
  {
    id: 'sq_a',
    partLabel: 'a',
    question: 'Find \\(|A|\\) and \\(|B|\\).',
    type: 'multiple_choice',
    answer: 0,
    options: [
      '\\(|A| = 3\\) and \\(|B| = 2\\)',
      '\\(|A| = 4\\) and \\(|B| = 3\\)',
      '\\(|A| = 2\\) and \\(|B| = 2\\)',
      '\\(|A| = 3\\) and \\(|B| = 5\\)'
    ],
    solutionSteps: [
      {
        explanation: 'The absolute value symbol around a set denotes its cardinality (the number of elements).',
        workingOut: '\\(A\\) has 3 elements: 1, 2, 4.<br />\\(B\\) has 2 elements: 2, 5.',
        graphData: null
      },
      {
        explanation: 'State the final answer.',
        workingOut: '\\(|A| = 3\\) and \\(|B| = 2\\)',
        graphData: null
      }
    ],
    hint: '|A| means the number of elements in set A.'
  },
  {
    id: 'sq_b',
    partLabel: 'b',
    question: 'Find \\(A \\cup B\\) and \\(|A \\cup B|\\).',
    type: 'multiple_choice',
    answer: 1,
    options: [
      '\\(A \\cup B = \\{1, 2, 4, 5\\}\\) and \\(|A \\cup B| = 5\\)',
      '\\(A \\cup B = \\{1, 2, 4, 5\\}\\) and \\(|A \\cup B| = 4\\)',
      '\\(A \\cup B = \\{1, 2, 5\\}\\) and \\(|A \\cup B| = 3\\)',
      '\\(A \\cup B = \\{2\\}\\) and \\(|A \\cup B| = 1\\)'
    ],
    solutionSteps: [
      {
        explanation: 'Find the union \\(A \\cup B\\) by combining all unique elements from both sets.',
        workingOut: '\\(A \\cup B = \\{1, 2, 4\\} \\cup \\{2, 5\\} = \\{1, 2, 4, 5\\}\\)',
        graphData: null
      },
      {
        explanation: 'Count the number of elements in the union.',
        workingOut: 'The set \\(\\{1, 2, 4, 5\\}\\) has 4 elements, so \\(|A \\cup B| = 4\\).',
        graphData: null
      }
    ],
    hint: 'Union means combining elements without duplicates.'
  },
  {
    id: 'sq_c',
    partLabel: 'c',
    question: 'Find \\(A \\cap B\\) and \\(|A \\cap B|\\).',
    type: 'multiple_choice',
    answer: 2,
    options: [
      '\\(A \\cap B = \\{1, 2, 4, 5\\}\\) and \\(|A \\cap B| = 4\\)',
      '\\(A \\cap B = \\{4, 5\\}\\) and \\(|A \\cap B| = 2\\)',
      '\\(A \\cap B = \\{2\\}\\) and \\(|A \\cap B| = 1\\)',
      '\\(A \\cap B = \\emptyset\\) and \\(|A \\cap B| = 0\\)'
    ],
    solutionSteps: [
      {
        explanation: 'Find the intersection \\(A \\cap B\\) by identifying shared elements.',
        workingOut: '\\(A \\cap B = \\{1, 2, 4\\} \\cap \\{2, 5\\} = \\{2\\}\\)',
        graphData: null
      },
      {
        explanation: 'Count the number of elements in the intersection.',
        workingOut: 'The set \\(\\{2\\}\\) has 1 element, so \\(|A \\cap B| = 1\\).',
        graphData: null
      }
    ],
    hint: 'Intersection means finding elements common to both.'
  },
  {
    id: 'sq_d',
    partLabel: 'd',
    question: 'Find \\(\\overline{A}\\) and \\(\\overline{B}\\).',
    type: 'multiple_choice',
    answer: 0,
    options: [
      '\\(\\overline{A} = \\{3, 5, 6\\}\\) and \\(\\overline{B} = \\{1, 3, 4, 6\\}\\)',
      '\\(\\overline{A} = \\{1, 2, 4\\}\\) and \\(\\overline{B} = \\{2, 5\\}\\)',
      '\\(\\overline{A} = \\{3, 6\\}\\) and \\(\\overline{B} = \\{1, 3, 4\\}\\)',
      '\\(\\overline{A} = \\{1, 3, 4, 6\\}\\) and \\(\\overline{B} = \\{3, 5, 6\\}\\)'
    ],
    solutionSteps: [
      {
        explanation: 'Find the complement of \\(A\\) by taking elements in the universal set \\(E\\) that are not in \\(A\\).',
        workingOut: '\\(\\overline{A} = E \\setminus A = \\{1, 2, 3, 4, 5, 6\\} \\setminus \\{1, 2, 4\\} = \\{3, 5, 6\\}\\)',
        graphData: null
      },
      {
        explanation: 'Find the complement of \\(B\\) similarly.',
        workingOut: '\\(\\overline{B} = E \\setminus B = \\{1, 2, 3, 4, 5, 6\\} \\setminus \\{2, 5\\} = \\{1, 3, 4, 6\\}\\)',
        graphData: null
      }
    ],
    hint: 'The complement contains elements of E not in the given set.'
  }
];

docRef.update({
  type: 'group',
  question: 'Let \\(A = \\{1, 2, 4\\}\\) and \\(B = \\{2, 5\\}\\) with the universal set \\(E = \\{1, 2, 3, 4, 5, 6\\}\\). Evaluate the following:',
  options: [],
  answer: '',
  solutionSteps: [],
  subQuestions: subQuestions
}).then(() => {
  console.log('Successfully updated DztytMoe0P2ZS3qtZZyp to sub-questions format');
}).catch(console.error);
