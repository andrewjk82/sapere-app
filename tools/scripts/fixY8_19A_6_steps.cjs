const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const stepsQ6a = [
    {
      explanation: 'A stem-and-leaf plot already shows the data ordered from smallest to largest! The "stem" is the tens digit, and each "leaf" is the ones digit.',
      workingOut: 'For example, `1 | 2` means 12, and `4 | 7` means 47.',
      graphData: null
    },
    {
      explanation: 'Count the total number of leaves to find how many data points there are.',
      workingOut: [
        'Row 1: 5 leaves',
        'Row 2: 2 leaves',
        'Row 3: 7 leaves',
        'Row 4: 6 leaves',
        '\\(n = 5 + 2 + 7 + 6 = 20\\)'
      ].join('\n'),
      graphData: null
    },
    {
      explanation: 'Since there are 20 values (even number), the median is the average of the 10th and 11th values.',
      workingOut: 'We need to count to the 10th and 11th leaves.',
      graphData: null
    },
    {
      explanation: 'Count from the smallest values until you reach positions 10 and 11.',
      workingOut: [
        'Rows 1 & 2 give us 7 values total.',
        'Counting into Row 3:',
        '  8th: 31',
        '  9th: 31',
        '  10th: 32',
        '  11th: 32'
      ].join('\n'),
      graphData: null
    },
    {
      explanation: 'Calculate the average of the 10th and 11th values.',
      workingOut: [
        '\\(\\text{Median} = \\frac{32 + 32}{2}\\)',
        '\\(\\text{Median} = 32\\)'
      ].join('\n'),
      graphData: null
    }
  ];

  const stepsQ6b = [
    {
      explanation: 'To find the mean, add up all 20 values and divide by 20.',
      workingOut: '\\(\\text{Mean} = \\frac{\\text{Sum of all values}}{20}\\)',
      graphData: null
    },
    {
      explanation: 'Calculate the sum of each row to keep things organised.',
      workingOut: [
        'Row 1 (10s): \\(12 + 12 + 14 + 16 + 18 = 72\\)',
        'Row 2 (20s): \\(22 + 25 = 47\\)'
      ].join('\n'),
      graphData: null
    },
    {
      explanation: 'Continue with the remaining rows.',
      workingOut: [
        'Row 3 (30s): \\(31 + 31 + 32 + 32 + 33 + 34 + 36 = 229\\)',
        'Row 4 (40s): \\(40 + 42 + 43 + 45 + 45 + 47 = 262\\)'
      ].join('\n'),
      graphData: null
    },
    {
      explanation: 'Add all the row totals together.',
      workingOut: '\\(\\text{Total Sum} = 72 + 47 + 229 + 262 = 610\\)',
      graphData: null
    },
    {
      explanation: 'Divide the total sum by the number of values (20).',
      workingOut: [
        '\\(\\text{Mean} = \\frac{610}{20} = 30.5\\)',
        '\\(\\text{Final Answer: } 30.5\\)'
      ].join('\n'),
      graphData: null
    }
  ];

  // Update top-level docs
  await db.collection('questions').doc('y8-19a-q6a').update({ solutionSteps: stepsQ6a, updatedAt: FieldValue.serverTimestamp() });
  await db.collection('questions').doc('y8-19a-q6b').update({ solutionSteps: stepsQ6b, updatedAt: FieldValue.serverTimestamp() });

  // Update parent subQuestions array WITH the steps included
  const parentRef = db.collection('questions').doc('y8-19a-q6');
  const parentSnap = await parentRef.get();
  const parentData = parentSnap.data();

  if (parentData && parentData.subQuestions) {
    const newSubQs = parentData.subQuestions.map(sq => {
      if (sq.id === 'y8-19a-q6a') return { ...sq, solutionSteps: stepsQ6a };
      if (sq.id === 'y8-19a-q6b') return { ...sq, solutionSteps: stepsQ6b };
      return sq;
    });
    await parentRef.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
  }

  console.log("Fixed solutionSteps for y8-19a-q6a and q6b (both top-level and parent array)");
  process.exit(0);
}

run().catch(console.error);
