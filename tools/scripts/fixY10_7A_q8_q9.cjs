const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const getSteps8 = (y_int, a_val) => [
    {
      explanation: 'The \\(y\\)-intercept of a graph is the value of \\(y\\) when \\(x = 0\\).',
      workingOut: '\\(x = 0\\)',
      graphData: null
    },
    {
      explanation: `Substitute \\(x = 0\\) and \\(y = ${y_int}\\) into the equation \\(y = (x - 1)^2 + a\\).`,
      workingOut: [
        `\\(${y_int} = (0 - 1)^2 + a\\)`,
        `\\(${y_int} = (-1)^2 + a\\)`
      ].join('\n'),
      graphData: null
    },
    {
      explanation: 'Simplify the equation. Remember that \\((-1)^2 = 1\\).',
      workingOut: `\\(${y_int} = 1 + a\\)`,
      graphData: null
    },
    {
      explanation: `Solve for \\(a\\) by subtracting 1 from both sides.`,
      workingOut: `\\(a = ${a_val}\\)`,
      graphData: null
    }
  ];

  const getSteps9 = (y_int, b_val) => [
    {
      explanation: 'The \\(y\\)-intercept of a graph is the value of \\(y\\) when \\(x = 0\\).',
      workingOut: '\\(x = 0\\)',
      graphData: null
    },
    {
      explanation: `Substitute \\(x = 0\\) and \\(y = ${y_int}\\) into the equation \\(y = -(x - 2)^2 + b\\).`,
      workingOut: [
        `\\(${y_int} = -(0 - 2)^2 + b\\)`,
        `\\(${y_int} = -(-2)^2 + b\\)`
      ].join('\n'),
      graphData: null
    },
    {
      explanation: 'Simplify the equation. Be careful with the negative sign outside the parenthesis: \\(-(-2)^2 = -(4) = -4\\).',
      workingOut: `\\(${y_int} = -4 + b\\)`,
      graphData: null
    },
    {
      explanation: `Solve for \\(b\\) by adding 4 to both sides.`,
      workingOut: `\\(b = ${b_val}\\)`,
      graphData: null
    }
  ];

  const updates = [
    {
      id: 'y10-7a-q8a',
      opts: [
        { text: '\\(a = 1\\)', imageUrl: '' },
        { text: '\\(a = -1\\)', imageUrl: '' },
        { text: '\\(a = 2\\)', imageUrl: '' },
        { text: '\\(a = 0\\)', imageUrl: '' } // Correct -> 3
      ],
      answer: '3',
      steps: getSteps8(1, 0)
    },
    {
      id: 'y10-7a-q8b',
      opts: [
        { text: '\\(a = 3\\)', imageUrl: '' },
        { text: '\\(a = 2\\)', imageUrl: '' }, // Correct -> 1
        { text: '\\(a = 4\\)', imageUrl: '' },
        { text: '\\(a = -2\\)', imageUrl: '' }
      ],
      answer: '1',
      steps: getSteps8(3, 2)
    },
    {
      id: 'y10-7a-q8c',
      opts: [
        { text: '\\(a = 0\\)', imageUrl: '' },
        { text: '\\(a = 1\\)', imageUrl: '' },
        { text: '\\(a = -1\\)', imageUrl: '' }, // Correct -> 2
        { text: '\\(a = -2\\)', imageUrl: '' }
      ],
      answer: '2',
      steps: getSteps8(0, -1)
    },
    {
      id: 'y10-7a-q8d',
      opts: [
        { text: '\\(a = -8\\)', imageUrl: '' }, // Correct -> 0
        { text: '\\(a = -7\\)', imageUrl: '' },
        { text: '\\(a = -6\\)', imageUrl: '' },
        { text: '\\(a = 8\\)', imageUrl: '' }
      ],
      answer: '0',
      optsReordered: [
        { text: '\\(a = -7\\)', imageUrl: '' },
        { text: '\\(a = -8\\)', imageUrl: '' }, // Correct -> 1
        { text: '\\(a = -6\\)', imageUrl: '' },
        { text: '\\(a = 8\\)', imageUrl: '' }
      ],
      steps: getSteps8(-7, -8)
    },
    {
      id: 'y10-7a-q9a',
      opts: [
        { text: '\\(b = -3\\)', imageUrl: '' },
        { text: '\\(b = 3\\)', imageUrl: '' },
        { text: '\\(b = 5\\)', imageUrl: '' }, // Correct -> 2
        { text: '\\(b = -5\\)', imageUrl: '' }
      ],
      answer: '2',
      steps: getSteps9(1, 5)
    },
    {
      id: 'y10-7a-q9b',
      opts: [
        { text: '\\(b = -1\\)', imageUrl: '' },
        { text: '\\(b = 1\\)', imageUrl: '' },
        { text: '\\(b = -7\\)', imageUrl: '' },
        { text: '\\(b = 7\\)', imageUrl: '' } // Correct -> 3
      ],
      answer: '3',
      steps: getSteps9(3, 7)
    },
    {
      id: 'y10-7a-q9c',
      opts: [
        { text: '\\(b = -4\\)', imageUrl: '' },
        { text: '\\(b = -8\\)', imageUrl: '' },
        { text: '\\(b = 0\\)', imageUrl: '' }, // Correct -> 2
        { text: '\\(b = 4\\)', imageUrl: '' }
      ],
      answer: '2',
      steps: getSteps9(-4, 0)
    },
    {
      id: 'y10-7a-q9d',
      opts: [
        { text: '\\(b = -11\\)', imageUrl: '' },
        { text: '\\(b = -3\\)', imageUrl: '' }, // Correct -> 1
        { text: '\\(b = 3\\)', imageUrl: '' },
        { text: '\\(b = 11\\)', imageUrl: '' }
      ],
      answer: '1',
      steps: getSteps9(-7, -3)
    }
  ];

  for (const u of updates) {
    const finalOpts = u.optsReordered || u.opts;
    const finalAns = u.optsReordered ? '1' : u.answer;
    await db.collection('questions').doc(u.id).update({
      type: 'multiple_choice',
      options: finalOpts,
      answer: finalAns,
      solutionSteps: u.steps,
      graphData: FieldValue.delete(),
      requiresManualGrading: FieldValue.delete(),
      updatedAt: FieldValue.serverTimestamp()
    });
  }

  // Update parent subQuestions for q8
  const pRef8 = db.collection('questions').doc('y10-7a-q8');
  const pSnap8 = await pRef8.get();
  if (pSnap8.exists && pSnap8.data().subQuestions) {
    const newSubQs = pSnap8.data().subQuestions.map(sq => {
      const u = updates.find(x => x.id === sq.id);
      if (u) {
        return {
          ...sq,
          type: 'multiple_choice',
          options: u.optsReordered || u.opts,
          answer: u.optsReordered ? '1' : u.answer,
          solutionSteps: u.steps,
          requiresManualGrading: FieldValue.delete()
        };
      }
      return sq;
    });
    await pRef8.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
  }

  // Update parent subQuestions for q9
  const pRef9 = db.collection('questions').doc('y10-7a-q9');
  const pSnap9 = await pRef9.get();
  if (pSnap9.exists && pSnap9.data().subQuestions) {
    const newSubQs = pSnap9.data().subQuestions.map(sq => {
      const u = updates.find(x => x.id === sq.id);
      if (u) {
        return {
          ...sq,
          type: 'multiple_choice',
          options: u.optsReordered || u.opts,
          answer: u.optsReordered ? '1' : u.answer,
          solutionSteps: u.steps,
          requiresManualGrading: FieldValue.delete()
        };
      }
      return sq;
    });
    await pRef9.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
  }

  console.log("Updated q8a-q8d, q9a-q9d");
  process.exit(0);
}

run().catch(console.error);
