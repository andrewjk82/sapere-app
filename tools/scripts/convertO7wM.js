import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import fs from 'fs';

const sa = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(sa) });
const db = getFirestore();

async function run() {
  const batch = db.batch();

  // 1. O7nYfyXtA4UEZXZU3ONl
  const doc1 = db.collection('questions').doc('O7nYfyXtA4UEZXZU3ONl');
  batch.update(doc1, {
    type: 'group',
    question: 'Given the sets \\(A = \\{\\text{r, y, a, n}\\}\\) and \\(B = \\{\\text{l, u, c, y}\\}\\), answer the following:',
    options: [],
    answer: '',
    solutionSteps: [],
    subQuestions: [
      {
        id: 'sq_a',
        partLabel: 'a',
        question: 'Find \\(A \\cup B\\).',
        type: 'multiple_choice',
        answer: 0,
        options: [
          '\\(\\{\\text{a, c, l, n, r, u, y}\\}\\)',
          '\\(\\{\\text{y}\\}\\)',
          '\\(\\{\\text{r, y, a, n, l, u, c}\\}\\)',
          '\\(\\emptyset\\)'
        ],
        solutionSteps: [
          {
            explanation: 'Find the union \\(A \\cup B\\) by combining all unique elements from both sets.',
            workingOut: '\\(A \\cup B = \\{\\text{r, y, a, n}\\} \\cup \\{\\text{l, u, c, y}\\} = \\{\\text{a, c, l, n, r, u, y}\\}\\)',
            graphData: null
          }
        ],
        hint: 'Union combines all elements.'
      },
      {
        id: 'sq_b',
        partLabel: 'b',
        question: 'Find \\(A \\cap B\\).',
        type: 'multiple_choice',
        answer: 1,
        options: [
          '\\(\\{\\text{a, c, l, n, r, u, y}\\}\\)',
          '\\(\\{\\text{y}\\}\\)',
          '\\(\\{\\text{r, y, a, n}\\}\\)',
          '\\(\\emptyset\\)'
        ],
        solutionSteps: [
          {
            explanation: 'Find the intersection \\(A \\cap B\\) by identifying elements that appear in BOTH sets.',
            workingOut: '\\(A \\cap B = \\{\\text{r, y, a, n}\\} \\cap \\{\\text{l, u, c, y}\\} = \\{\\text{y}\\}\\)',
            graphData: null
          }
        ],
        hint: 'Intersection is the shared elements.'
      }
    ]
  });

  // 2. wMR73GwHSJ8TmF4QWKNZ
  const doc2 = db.collection('questions').doc('wMR73GwHSJ8TmF4QWKNZ');
  batch.update(doc2, {
    type: 'group',
    question: 'Given the sets \\(A = \\{\\text{s, y, d, n, e}\\}\\) and \\(B = \\{\\text{m, e, l, b, o, u, r, n}\\}\\), answer the following:',
    options: [],
    answer: '',
    solutionSteps: [],
    subQuestions: [
      {
        id: 'sq_a',
        partLabel: 'a',
        question: 'Find \\(A \\cup B\\).',
        type: 'multiple_choice',
        answer: 0,
        options: [
          '\\(\\{\\text{b, d, e, l, m, n, o, r, s, u, y}\\}\\)',
          '\\(\\{\\text{e, n}\\}\\)',
          '\\(\\{\\text{s, y, d, n, e, m, l, b, o, u, r}\\}\\)',
          '\\(\\emptyset\\)'
        ],
        solutionSteps: [
          {
            explanation: 'Find the union \\(A \\cup B\\) by combining all unique elements from both sets.',
            workingOut: '\\(A \\cup B = \\{\\text{s, y, d, n, e}\\} \\cup \\{\\text{m, e, l, b, o, u, r, n}\\} = \\{\\text{b, d, e, l, m, n, o, r, s, u, y}\\}\\)',
            graphData: null
          }
        ],
        hint: 'Union combines all elements.'
      },
      {
        id: 'sq_b',
        partLabel: 'b',
        question: 'Find \\(A \\cap B\\).',
        type: 'multiple_choice',
        answer: 1,
        options: [
          '\\(\\{\\text{b, d, e, l, m, n, o, r, s, u, y}\\}\\)',
          '\\(\\{\\text{e, n}\\}\\)',
          '\\(\\{\\text{s, y, d, n, e}\\}\\)',
          '\\(\\emptyset\\)'
        ],
        solutionSteps: [
          {
            explanation: 'Find the intersection \\(A \\cap B\\) by identifying elements that appear in BOTH sets.',
            workingOut: '\\(A \\cap B = \\{\\text{s, y, d, n, e}\\} \\cap \\{\\text{m, e, l, b, o, u, r, n}\\} = \\{\\text{e, n}\\}\\)',
            graphData: null
          }
        ],
        hint: 'Intersection is the shared elements.'
      }
    ]
  });

  await batch.commit();
  console.log('Successfully converted both questions to sub-questions format.');
}

run().catch(console.error);
