const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const updates = [
    {
      id: 'y10-7h-q5b',
      opts: [
        { text: '\\( y = (x + 2)^2 + 4 \\)', imageUrl: '' },
        { text: '\\( y = -(x - 2)^2 + 4 \\)', imageUrl: '' },
        { text: '\\( y = -(x + 2)^2 + 4 \\)', imageUrl: '' }, // Correct -> 2
        { text: '\\( y = -(x + 2)^2 - 4 \\)', imageUrl: '' }
      ],
      answer: '2',
      optsReordered: [
        { text: '\\( y = (x + 2)^2 + 4 \\)', imageUrl: '' },
        { text: '\\( y = -(x - 2)^2 + 4 \\)', imageUrl: '' },
        { text: '\\( y = -(x + 2)^2 - 4 \\)', imageUrl: '' },
        { text: '\\( y = -(x + 2)^2 + 4 \\)', imageUrl: '' } // Correct -> 3
      ],
      steps: [
        {
          explanation: 'Start with the basic parabola \\( y = x^2 \\). Apply the transformations one by one.',
          workingOut: '',
          graphData: null
        },
        {
          explanation: 'A **reflection in the x-axis** means we multiply the entire function by \\(-1\\).',
          workingOut: '\\( y = -x^2 \\)',
          graphData: null
        },
        {
          explanation: 'A **translation 2 units to the left** means we replace every \\( x \\) with \\( (x + 2) \\).',
          workingOut: '\\( y = -(x + 2)^2 \\)',
          graphData: null
        },
        {
          explanation: 'A **translation 4 units up** means we add \\(4\\) to the end of the entire function.',
          workingOut: '\\( y = -(x + 2)^2 + 4 \\)',
          graphData: null
        }
      ]
    },
    {
      id: 'y10-7h-q5c',
      opts: [
        { text: '\\( y = (x - 4)^2 - 5 \\)', imageUrl: '' }, // Correct -> 0
        { text: '\\( y = (x + 4)^2 - 5 \\)', imageUrl: '' },
        { text: '\\( y = (x - 4)^2 + 5 \\)', imageUrl: '' },
        { text: '\\( y = -(x - 4)^2 - 5 \\)', imageUrl: '' }
      ],
      answer: '0',
      optsReordered: [
        { text: '\\( y = -(x - 4)^2 - 5 \\)', imageUrl: '' },
        { text: '\\( y = (x - 4)^2 - 5 \\)', imageUrl: '' }, // Correct -> 1
        { text: '\\( y = (x + 4)^2 - 5 \\)', imageUrl: '' },
        { text: '\\( y = (x - 4)^2 + 5 \\)', imageUrl: '' }
      ],
      steps: [
        {
          explanation: 'Start with the basic parabola \\( y = x^2 \\). Apply the transformations one by one.',
          workingOut: '',
          graphData: null
        },
        {
          explanation: 'A **translation 4 units to the right** means we replace every \\( x \\) with \\( (x - 4) \\).',
          workingOut: '\\( y = (x - 4)^2 \\)',
          graphData: null
        },
        {
          explanation: 'A **translation 5 units down** means we subtract \\(5\\) from the end of the entire function.',
          workingOut: '\\( y = (x - 4)^2 - 5 \\)',
          graphData: null
        },
        {
          explanation: 'This gives us the final equation of the translated parabola.',
          workingOut: '\\( y = (x - 4)^2 - 5 \\)',
          graphData: null
        }
      ]
    }
  ];

  for (const u of updates) {
    const finalOpts = u.optsReordered || u.opts;
    const finalAns = u.optsReordered ? (u.id === 'y10-7h-q5b' ? '3' : '1') : u.answer;
    
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

  // Update parent subQuestions
  const pRef = db.collection('questions').doc('y10-7h-q5');
  const pSnap = await pRef.get();
  if (pSnap.exists && pSnap.data().subQuestions) {
    const newSubQs = pSnap.data().subQuestions.map(sq => {
      const u = updates.find(x => x.id === sq.id);
      if (u) {
        const finalOpts = u.optsReordered || u.opts;
        const finalAns = u.optsReordered ? (u.id === 'y10-7h-q5b' ? '3' : '1') : u.answer;
        const { graphData, requiresManualGrading, ...rest } = sq;
        return {
          ...rest,
          type: 'multiple_choice',
          options: finalOpts,
          answer: finalAns,
          solutionSteps: u.steps
        };
      }
      return sq;
    });
    await pRef.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
  }

  console.log("Updated q5b, q5c");
  process.exit(0);
}

run().catch(console.error);
