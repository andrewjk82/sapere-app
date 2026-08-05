import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import fs from 'fs';

const sa = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(sa) });
const db = getFirestore();

async function run() {
  const batch = db.batch();

  // 1. KiYaBpLA9Qam0cnriduS
  const q1Ref = db.collection('questions').doc('KiYaBpLA9Qam0cnriduS');
  batch.update(q1Ref, {
    type: 'multiple_choice',
    options: ['True', 'False'],
    answer: 0,
    requiresManualGrading: false,
    solutionSteps: [
      {
        explanation: 'Check if every element of set \\(A\\) is also in set \\(B\\).',
        workingOut: '\\(A = \\{3, 5, 7\\}\\)<br />\\(B = \\{1, 2, 3, 4, 5, 6, 7, 8, 10\\}\\)',
        graphData: null
      },
      {
        explanation: 'Check each element of set \\(A\\).',
        workingOut: '3 is in \\(B\\).<br />5 is in \\(B\\).<br />7 is in \\(B\\).',
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
    ]
  });

  // 2. Mlss5QCs71c1ARrP6gGr
  const q2Ref = db.collection('questions').doc('Mlss5QCs71c1ARrP6gGr');
  batch.update(q2Ref, {
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
      },
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
    ]
  });

  // 3. V8NTiMnMRP3qY3dWxYjF
  const q3Ref = db.collection('questions').doc('V8NTiMnMRP3qY3dWxYjF');
  batch.update(q3Ref, {
    solutionSteps: [
      {
        explanation: 'Identify all the positive integers that divide \\(18\\) without a remainder.',
        workingOut: 'The factors of \\(18\\) are \\(1, 2, 3, 6, 9, 18\\).',
        graphData: null
      },
      {
        explanation: 'Write these factors in set notation using curly braces.',
        workingOut: '\\(\\{1, 2, 3, 6, 9, 18\\}\\)',
        graphData: null
      }
    ]
  });

  // 4. wMR73GwHSJ8TmF4QWKNZ
  const q4Ref = db.collection('questions').doc('wMR73GwHSJ8TmF4QWKNZ');
  batch.update(q4Ref, {
    solutionSteps: [
      {
        explanation: 'Find the union \\(A \\cup B\\) by combining all unique elements from both sets.',
        workingOut: '\\(A \\cup B = \\{\\text{s, y, d, n, e}\\} \\cup \\{\\text{m, e, l, b, o, u, r, n}\\} = \\{\\text{b, d, e, l, m, n, o, r, s, u, y}\\}\\)',
        graphData: null
      },
      {
        explanation: 'Find the intersection \\(A \\cap B\\) by identifying elements that appear in BOTH sets.',
        workingOut: '\\(A \\cap B = \\{\\text{s, y, d, n, e}\\} \\cap \\{\\text{m, e, l, b, o, u, r, n}\\} = \\{\\text{e, n}\\}\\)',
        graphData: null
      },
      {
        explanation: 'State the final sets.',
        workingOut: '\\(A \\cup B = \\{\\text{b, d, e, l, m, n, o, r, s, u, y}\\}\\) and \\(A \\cap B = \\{\\text{e, n}\\}\\)',
        graphData: null
      }
    ]
  });

  // 5. xzVx2ZMFp3NccykPkz50
  const q5Ref = db.collection('questions').doc('xzVx2ZMFp3NccykPkz50');
  batch.update(q5Ref, {
    solutionSteps: [
      {
        explanation: 'Find the union \\(A \\cup B\\) by combining all unique elements from both sets.',
        workingOut: '\\(A \\cup B = \\{1, 2, 5, 7, 8\\} \\cup \\{3, 5, 6, 7, 8, 9\\} = \\{1, 2, 3, 5, 6, 7, 8, 9\\}\\)',
        graphData: null
      },
      {
        explanation: 'Find the intersection \\(A \\cap B\\) by identifying elements that appear in BOTH sets.',
        workingOut: '\\(A \\cap B = \\{1, 2, 5, 7, 8\\} \\cap \\{3, 5, 6, 7, 8, 9\\} = \\{5, 7, 8\\}\\)',
        graphData: null
      },
      {
        explanation: 'State the final sets.',
        workingOut: '\\(A \\cup B = \\{1, 2, 3, 5, 6, 7, 8, 9\\}\\) and \\(A \\cap B = \\{5, 7, 8\\}\\)',
        graphData: null
      }
    ]
  });

  await batch.commit();
  console.log('Successfully applied all fixes to the 5 questions.');
}

run().catch(console.error);
