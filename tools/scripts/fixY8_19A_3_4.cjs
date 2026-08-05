const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // ─── q3 ───
  // N = 96 / 6.4 = 15. Let's make it D (index 3).
  await db.collection('questions').doc('y8-19a-q3').update({
    type: 'multiple_choice',
    options: [
      { text: '\\(14\\)', imageUrl: '' },
      { text: '\\(16\\)', imageUrl: '' },
      { text: '\\(12\\)', imageUrl: '' },
      { text: '\\(15\\)', imageUrl: '' } // Correct
    ],
    answer: '3',
    solutionSteps: [
      {
        explanation: 'We know the formula for the mean (average):',
        workingOut: '\\(\\text{Mean} = \\frac{\\text{Sum of all values}}{\\text{Total number of values}}\\(',
        graphData: null
      },
      {
        explanation: 'The question gives us the Mean (\\(\\$6.40\\)) and the Sum of the data (\\(\\$96.00\\)). Let \\(N\\) be the number of bags of apples (the total number of values). Substitute the known values into the formula.',
        workingOut: '\\(6.40 = \\frac{96.00}{N}\\)',
        graphData: null
      },
      {
        explanation: 'Rearrange the equation to solve for \\(N\\). Multiply both sides by \\(N\\) and divide by \\(6.40\\).',
        workingOut: [
          '\\(6.40 \\times N = 96.00\\)',
          '\\(N = \\frac{96.00}{6.40}\\)'
        ].join('\n'),
        graphData: null
      },
      {
        explanation: 'Calculate the division to find the total number of bags.',
        workingOut: '\\(N = 15\\)',
        graphData: null
      }
    ],
    updatedAt: FieldValue.serverTimestamp()
  });

  // ─── q4a ───
  // Median = 10.75. Let's make it C (index 2).
  const q4aContext = `Sue spent the following amounts on her lunch each day over the course of two working weeks:

\\(\\$16, \\$8, \\$13, \\$49.50, \\$9.50, \\$13.50, \\$9, \\$11, \\$9.50, \\$10.50\\)

`;

  await db.collection('questions').doc('y8-19a-q4a').update({
    type: 'multiple_choice',
    question: q4aContext + 'a) Calculate the median for these data (in dollars).',
    options: [
      { text: '\\(\\$9.75\\)', imageUrl: '' },
      { text: '\\(\\$11.75\\)', imageUrl: '' },
      { text: '\\(\\$10.75\\)', imageUrl: '' }, // Correct
      { text: '\\(\\$10.50\\)', imageUrl: '' }
    ],
    answer: '2',
    solutionSteps: [
      {
        explanation: 'To find the median, you must first sort all the lunch amounts from smallest to largest.',
        workingOut: [
          'Given: 16, 8, 13, 49.5, 9.5, 13.5, 9, 11, 9.5, 10.5',
          'Sorted: 8, 9, 9.5, 9.5, 10.5, 11, 13, 13.5, 16, 49.5'
        ].join('\n'),
        graphData: null
      },
      {
        explanation: 'Count the number of days (data points). There are 10 numbers in total. Since 10 is an even number, the median will be the average of the two middle numbers.',
        workingOut: [
          'Total values \\(n = 10\\).',
          'The middle values are the 5th and 6th numbers.'
        ].join('\n'),
        graphData: null
      },
      {
        explanation: 'Find the 5th and 6th numbers from your sorted list.',
        workingOut: [
          '5th value: \\(\\$10.50\\)',
          '6th value: \\(\\$11.00\\)'
        ].join('\n'),
        graphData: null
      },
      {
        explanation: 'Calculate the average of these two numbers to find the median.',
        workingOut: [
          '\\(\\text{Median} = \\frac{10.50 + 11.00}{2}\\)',
          '\\(\\text{Median} = \\frac{21.50}{2} = 10.75\\)',
          '\\(\\text{Final Answer: } \\$10.75\\)'
        ].join('\n'),
        graphData: null
      }
    ],
    updatedAt: FieldValue.serverTimestamp()
  });

  // Clear redundant parent steps for y8-19a-q4 just in case
  await db.collection('questions').doc('y8-19a-q4').update({
    solutionSteps: [],
    solution: '',
    updatedAt: FieldValue.serverTimestamp()
  });

  // Update q4 parent subQuestions array if it exists
  const p4Snap = await db.collection('questions').doc('y8-19a-q4').get();
  const p4Data = p4Snap.data();
  if (p4Data && p4Data.subQuestions) {
    const newSq = p4Data.subQuestions.map(sq => {
      if (sq.id === 'y8-19a-q4a') {
        return {
          ...sq,
          question: q4aContext + 'a) Calculate the median for these data (in dollars).',
          options: [
            { text: '\\(\\$9.75\\)', imageUrl: '' },
            { text: '\\(\\$11.75\\)', imageUrl: '' },
            { text: '\\(\\$10.75\\)', imageUrl: '' },
            { text: '\\(\\$10.50\\)', imageUrl: '' }
          ],
          answer: '2',
          type: 'multiple_choice'
        };
      }
      return sq;
    });
    await db.collection('questions').doc('y8-19a-q4').update({ subQuestions: newSq });
  }

  console.log("Updated y8-19a-q3 and y8-19a-q4a");
  process.exit(0);
}

run().catch(console.error);
