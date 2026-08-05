const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();

  const parentText = "For each pair of perpendicular lines \\(\\ell_1\\) and \\(\\ell_2\\), find the gradient \\(m_2\\) of \\(\\ell_2\\) given the gradient \\(m_1\\) of \\(\\ell_1\\).";
  const title = "For each pair of perpendicular lines \\(\\ell_1\\) and \\(\\ell_2\\)...";

  const baseDocInfo = {
    chapterId: "y9-11",
    chapterTitle: "Chapter 11: Coordinate geometry",
    topicId: "y9-11g",
    topicCode: "11G",
    topicTitle: "Parallel and perpendicular straight lines",
    year: "Year 9",
    isManual: true,
    difficulty: "easy",
    timeLimit: 30,
    isActive: true,
    origin: "seed",
    title: title,
    updatedAt: FieldValue.serverTimestamp()
  };

  const createSubQ = (idLetter, qText, options, answerIdx, m1Value, m2Value) => {
    const steps = [
      { explanation: 'State the relationship between perpendicular gradients.', workingOut: 'm_1 \\times m_2 = -1' },
      { explanation: `Substitute the given gradient $m_1 = ${m1Value}$.`, workingOut: `${m1Value} \\times m_2 = -1` },
      { explanation: 'Solve for $m_2$ by taking the negative reciprocal.', workingOut: `m_2 = ${m2Value}` }
    ];
    
    return {
      id: `y9-11g-q6${idLetter}`,
      type: 'multiple_choice',
      requiresManualGrading: false,
      question: `${idLetter}) \\(m_1 = ${m1Value}\\)`,
      options: options,
      answer: answerIdx.toString(),
      solutionSteps: steps.map(s => ({ ...s, graphData: null })),
      graphData: null
    };
  };

  const subs = [
    createSubQ('a', '', [
      { text: '\\(-3\\)', imageUrl: '' },
      { text: '\\(3\\)', imageUrl: '' },
      { text: '\\(-\\frac{1}{3}\\)', imageUrl: '' },
      { text: '\\(\\frac{1}{3}\\)', imageUrl: '' }
    ], 0, '\\frac{1}{3}', '-3'),
    createSubQ('b', '', [
      { text: '\\(-\\frac{1}{3}\\)', imageUrl: '' },
      { text: '\\(\\frac{1}{3}\\)', imageUrl: '' },
      { text: '\\(-3\\)', imageUrl: '' },
      { text: '\\(3\\)', imageUrl: '' }
    ], 0, '3', '-\\frac{1}{3}'),
    createSubQ('c', '', [
      { text: '\\(-\\frac{2}{5}\\)', imageUrl: '' },
      { text: '\\(\\frac{2}{5}\\)', imageUrl: '' },
      { text: '\\(-\\frac{5}{2}\\)', imageUrl: '' },
      { text: '\\(\\frac{5}{2}\\)', imageUrl: '' }
    ], 0, '\\frac{5}{2}', '-\\frac{2}{5}'),
    createSubQ('d', '', [
      { text: '\\(-\\frac{1}{4}\\)', imageUrl: '' },
      { text: '\\(\\frac{1}{4}\\)', imageUrl: '' },
      { text: '\\(-4\\)', imageUrl: '' },
      { text: '\\(4\\)', imageUrl: '' }
    ], 0, '4', '-\\frac{1}{4}'),
    createSubQ('e', '', [
      { text: '\\(-\\frac{3}{2}\\)', imageUrl: '' },
      { text: '\\(\\frac{3}{2}\\)', imageUrl: '' },
      { text: '\\(-\\frac{2}{3}\\)', imageUrl: '' },
      { text: '\\(\\frac{2}{3}\\)', imageUrl: '' }
    ], 0, '\\frac{2}{3}', '-\\frac{3}{2}'),
    createSubQ('f', '', [
      { text: '\\(\\frac{1}{3}\\)', imageUrl: '' },
      { text: '\\(-\\frac{1}{3}\\)', imageUrl: '' },
      { text: '\\(3\\)', imageUrl: '' },
      { text: '\\(-3\\)', imageUrl: '' }
    ], 0, '-3', '\\frac{1}{3}'),
    createSubQ('g', '', [
      { text: '\\(\\frac{1}{4}\\)', imageUrl: '' },
      { text: '\\(-\\frac{1}{4}\\)', imageUrl: '' },
      { text: '\\(4\\)', imageUrl: '' },
      { text: '\\(-4\\)', imageUrl: '' }
    ], 0, '-4', '\\frac{1}{4}'),
    createSubQ('h', '', [
      { text: '\\(3\\)', imageUrl: '' },
      { text: '\\(-3\\)', imageUrl: '' },
      { text: '\\(\\frac{1}{3}\\)', imageUrl: '' },
      { text: '\\(-\\frac{1}{3}\\)', imageUrl: '' }
    ], 0, '-\\frac{1}{3}', '3'),
    createSubQ('i', '', [
      { text: '\\(-\\frac{5}{3}\\)', imageUrl: '' },
      { text: '\\(\\frac{5}{3}\\)', imageUrl: '' },
      { text: '\\(-\\frac{3}{5}\\)', imageUrl: '' },
      { text: '\\(\\frac{3}{5}\\)', imageUrl: '' }
    ], 0, '\\frac{3}{5}', '-\\frac{5}{3}'),
    createSubQ('j', '', [
      { text: '\\(-\\frac{4}{3}\\)', imageUrl: '' },
      { text: '\\(\\frac{4}{3}\\)', imageUrl: '' },
      { text: '\\(-\\frac{3}{4}\\)', imageUrl: '' },
      { text: '\\(\\frac{3}{4}\\)', imageUrl: '' }
    ], 0, '\\frac{3}{4}', '-\\frac{4}{3}')
  ];

  for (const q of subs) {
    batch.set(db.collection('questions').doc(q.id), { 
      ...baseDocInfo, 
      ...q, 
      question: parentText + '\n' + q.question 
    });
  }

  const parentRef = db.collection('questions').doc('y9-11g-q6');
  batch.update(parentRef, {
    requiresManualGrading: false,
    type: 'teacher_review',
    question: parentText,
    solution: "",
    solutionSteps: [],
    subQuestions: subs,
    topicCode: "11G",
    topicId: "y9-11g",
    topicTitle: "Parallel and perpendicular straight lines",
    updatedAt: FieldValue.serverTimestamp()
  });

  await batch.commit();
  console.log("Updated q6 and its 10 subquestions successfully.");
  process.exit(0);
}

run().catch(console.error);
