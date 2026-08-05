import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import fs from 'fs';

const sa = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(sa) });
const db = getFirestore();

const docRef = db.collection('questions').doc('Im3hhX4zl9vb8HthBfuh');

const subQuestions = [
  {
    id: 'sq_a',
    partLabel: 'a',
    question: '\\(\\{x\\}\\)',
    type: 'short_answer',
    answer: '\\(\\emptyset, \\{x\\}\\)',
    solutionSteps: [
      {
        explanation: 'Identify the number of elements in the set to determine the total number of subsets. A set with \\(n\\) elements has \\(2^n\\) subsets.',
        workingOut: 'The set \\(\\{x\\}\\) has \\(1\\) element. Total subsets = \\(2^1 = 2\\).',
        graphData: null
      },
      {
        explanation: 'List the subsets, starting with the empty set (which is a subset of every set) and then the set itself.',
        workingOut: '\\(\\emptyset, \\{x\\}\\)',
        graphData: null
      }
    ],
    options: [],
    hint: ''
  },
  {
    id: 'sq_b',
    partLabel: 'b',
    question: '\\(\\{x, y\\}\\)',
    type: 'short_answer',
    answer: '\\(\\emptyset, \\{x\\}, \\{y\\}, \\{x, y\\}\\)',
    solutionSteps: [
      {
        explanation: 'Calculate the total number of subsets for a set with 2 elements.',
        workingOut: 'Total subsets = \\(2^2 = 4\\).',
        graphData: null
      },
      {
        explanation: 'List all subsets systematically: the empty set, all 1-element subsets, and the set itself.',
        workingOut: '\\(\\emptyset, \\{x\\}, \\{y\\}, \\{x, y\\}\\)',
        graphData: null
      }
    ],
    options: [],
    hint: ''
  },
  {
    id: 'sq_c',
    partLabel: 'c',
    question: '\\(\\{x, y, z\\}\\)',
    type: 'short_answer',
    answer: '\\(\\emptyset, \\{x\\}, \\{y\\}, \\{z\\}, \\{x, y\\}, \\{x, z\\}, \\{y, z\\}, \\{x, y, z\\}\\)',
    solutionSteps: [
      {
        explanation: 'Calculate the total number of subsets for a set with 3 elements.',
        workingOut: 'Total subsets = \\(2^3 = 8\\).',
        graphData: null
      },
      {
        explanation: 'List the empty set, all 1-element subsets, all 2-element subsets, and the set itself.',
        workingOut: 'Empty set: \\(\\emptyset\\)<br />1-element: \\(\\{x\\}, \\{y\\}, \\{z\\}\\)<br />2-element: \\(\\{x, y\\}, \\{x, z\\}, \\{y, z\\}\\)<br />3-element: \\(\\{x, y, z\\}\\)',
        graphData: null
      },
      {
        explanation: 'Combine them for the final list.',
        workingOut: '\\(\\emptyset, \\{x\\}, \\{y\\}, \\{z\\}, \\{x, y\\}, \\{x, z\\}, \\{y, z\\}, \\{x, y, z\\}\\)',
        graphData: null
      }
    ],
    options: [],
    hint: ''
  },
  {
    id: 'sq_d',
    partLabel: 'd',
    question: '\\(\\emptyset\\)',
    type: 'short_answer',
    answer: '\\(\\emptyset\\)',
    solutionSteps: [
      {
        explanation: 'Determine the number of subsets for the empty set.',
        workingOut: 'The empty set has \\(0\\) elements. Total subsets = \\(2^0 = 1\\).',
        graphData: null
      },
      {
        explanation: 'List the only subset, which is the empty set itself.',
        workingOut: '\\(\\emptyset\\)',
        graphData: null
      }
    ],
    options: [],
    hint: ''
  }
];

docRef.update({
  type: 'group',
  question: 'List all the subsets for each of the following sets.',
  options: [],
  answer: '',
  solutionSteps: [],
  subQuestions: subQuestions
}).then(() => {
  console.log('Successfully converted Im3hhX4zl9vb8HthBfuh to a grouped sub-questions format');
}).catch(console.error);
