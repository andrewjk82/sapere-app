const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // ─── q1a: Median of 25, 58, 38, 31, 62, 146 ───
  // Sorted: 25, 31, 38, 58, 62, 146
  // Median: (38+58)/2 = 48
  // Options: A) 38, B) 60, C) 48, D) 58. Correct: C (index 2)
  await db.collection('questions').doc('y8-19a-q1a').update({
    type: 'multiple_choice',
    options: [
      { text: '\\(38\\)', imageUrl: '' },
      { text: '\\(60\\)', imageUrl: '' },
      { text: '\\(48\\)', imageUrl: '' },
      { text: '\\(58\\)', imageUrl: '' }
    ],
    answer: '2',
    solution: 'The correct answer is 48.',
    solutionSteps: [
      {
        explanation: 'The median is the middle value of a data set. To find the median, the very first step is **always** to arrange the numbers in ascending order (from smallest to largest).',
        workingOut: 'Data given: \\(25, 58, 38, 31, 62, 146\\)',
        graphData: null
      },
      {
        explanation: 'Sort the numbers in ascending order.',
        workingOut: 'Sorted data: \\(25, 31, 38, 58, 62, 146\\)',
        graphData: null
      },
      {
        explanation: 'Count how many numbers there are. Since there are 6 numbers (an even number), there is no single middle number. We must find the two middle numbers.',
        workingOut: [
          'There are \\(n = 6\\) numbers.',
          'The middle numbers are the 3rd and 4th values in the sorted list.',
          'The 3rd value is 38.',
          'The 4th value is 58.'
        ].join('\n'),
        graphData: null
      },
      {
        explanation: 'The median is the average (mean) of these two middle numbers.',
        workingOut: [
          '\\(\\text{Median} = \\frac{38 + 58}{2}\\)',
          '\\(\\text{Median} = \\frac{96}{2} = 48\\)'
        ].join('\n'),
        graphData: null
      },
      {
        explanation: 'Note: The question states that the "mean is 60", but this information is completely unnecessary to find the median! It is just a distractor to test if you know the difference between mean and median.',
        workingOut: '\\(\\text{Final Answer: } 48\\)',
        graphData: null
      }
    ],
    updatedAt: FieldValue.serverTimestamp()
  });

  // ─── q1b: Median of 43, 44, 45, 45, 46, 47 ───
  // Sorted: 43, 44, 45, 45, 46, 47
  // Median: (45+45)/2 = 45
  // Options: A) 45, B) 44.5, C) 45.5, D) 46. Correct: A (index 0)
  await db.collection('questions').doc('y8-19a-q1b').update({
    type: 'multiple_choice',
    options: [
      { text: '\\(45\\)', imageUrl: '' },
      { text: '\\(44.5\\)', imageUrl: '' },
      { text: '\\(45.5\\)', imageUrl: '' },
      { text: '\\(46\\)', imageUrl: '' }
    ],
    answer: '0',
    solution: 'The correct answer is 45.',
    solutionSteps: [
      {
        explanation: 'First, check if the data is arranged in ascending order. In this case, it already is!',
        workingOut: 'Sorted data: \\(43, 44, 45, 45, 46, 47\\)',
        graphData: null
      },
      {
        explanation: 'Since there are 6 numbers (an even amount), the median is the average of the two numbers in the middle (the 3rd and 4th values).',
        workingOut: [
          'The 3rd value is 45.',
          'The 4th value is also 45.'
        ].join('\n'),
        graphData: null
      },
      {
        explanation: 'Calculate the average of the two middle numbers.',
        workingOut: [
          '\\(\\text{Median} = \\frac{45 + 45}{2}\\)',
          '\\(\\text{Median} = \\frac{90}{2} = 45\\)'
        ].join('\n'),
        graphData: null
      }
    ],
    updatedAt: FieldValue.serverTimestamp()
  });

  // ─── q1c: Median of 0, 144, 82, 94, 98, 2 ───
  // Sorted: 0, 2, 82, 94, 98, 144
  // Median: (82+94)/2 = 88
  // Options: A) 70, B) 82, C) 94, D) 88. Correct: D (index 3)
  await db.collection('questions').doc('y8-19a-q1c').update({
    type: 'multiple_choice',
    options: [
      { text: '\\(70\\)', imageUrl: '' },
      { text: '\\(82\\)', imageUrl: '' },
      { text: '\\(94\\)', imageUrl: '' },
      { text: '\\(88\\)', imageUrl: '' }
    ],
    answer: '3',
    solution: 'The correct answer is 88.',
    solutionSteps: [
      {
        explanation: 'Always start by arranging the given data in ascending order (smallest to largest).',
        workingOut: [
          'Original: \\(0, 144, 82, 94, 98, 2\\)',
          'Sorted: \\(0, 2, 82, 94, 98, 144\\)'
        ].join('\n'),
        graphData: null
      },
      {
        explanation: 'There are 6 numbers, so the median will be exactly halfway between the 3rd and 4th numbers.',
        workingOut: [
          'The 3rd number is 82.',
          'The 4th number is 94.'
        ].join('\n'),
        graphData: null
      },
      {
        explanation: 'Find the average of these two middle numbers.',
        workingOut: [
          '\\(\\text{Median} = \\frac{82 + 94}{2}\\)',
          '\\(\\text{Median} = \\frac{176}{2} = 88\\)'
        ].join('\n'),
        graphData: null
      },
      {
        explanation: 'Again, the given "mean is 70" is extra information meant to trick you. You do not need it to find the median.',
        workingOut: '\\(\\text{Final Answer: } 88\\)',
        graphData: null
      }
    ],
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log("Updated y8-19a-q1a, q1b, q1c");
  process.exit(0);
}

run().catch(console.error);
