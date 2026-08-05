const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // ─── q5a ───
  // Correct answer: All ten entries must be 2. Let's make it C (index 2).
  await db.collection('questions').doc('y8-19a-q5a').update({
    type: 'multiple_choice',
    options: [
      { text: "Five entries are 2, five entries are 3", imageUrl: "" },
      { text: "Nine entries are 2, one entry is 4", imageUrl: "" },
      { text: "All ten entries must be 2", imageUrl: "" }, // Correct
      { text: "Eight entries are 2, two entries are 3", imageUrl: "" }
    ],
    answer: '2',
    solutionSteps: [
      {
        explanation: 'We know that the average (mean) of 10 entries is 2. Let\'s find the required sum of all 10 entries.',
        workingOut: [
          '\\(\\text{Mean} = \\frac{\\text{Sum}}{10} = 2\\)',
          '\\(\\text{Sum} = 2 \\times 10 = 20\\)'
        ].join('\n'),
        graphData: null
      },
      {
        explanation: 'The problem states that every entry in the list can only be 2, 3, or 4. This means the smallest possible number you can choose is 2.',
        workingOut: 'Minimum value = 2',
        graphData: null
      },
      {
        explanation: 'If we choose the smallest possible number (2) for all 10 entries, what is the sum?',
        workingOut: '\\text{Sum of ten 2s} = 2 \\times 10 = 20',
        graphData: null
      },
      {
        explanation: 'This matches our required sum exactly! If we change even a single entry to a 3 or a 4, the total sum will be greater than 20, which would make the average greater than 2.',
        workingOut: 'Therefore, the only way to get an average of 2 is if every single entry is exactly 2.',
        graphData: null
      }
    ],
    updatedAt: FieldValue.serverTimestamp()
  });

  // ─── q5b ───
  // Correct answer: The number of 2s must equal the number of 4s. Let's make it A (index 0).
  await db.collection('questions').doc('y8-19a-q5b').update({
    type: 'multiple_choice',
    options: [
      { text: "The number of 2s must equal the number of 4s", imageUrl: "" }, // Correct
      { text: "All ten entries must be 3", imageUrl: "" },
      { text: "The number of 2s must equal the number of 3s", imageUrl: "" },
      { text: "The number of 3s must equal the number of 4s", imageUrl: "" }
    ],
    answer: '0',
    solutionSteps: [
      {
        explanation: 'If the average of 10 entries is 3, then the total sum of all 10 entries must be \\(3 \\times 10 = 30\\).',
        workingOut: '\\text{Required Sum } = 30',
        graphData: null
      },
      {
        explanation: 'Let\'s think about this logically using "balance". If every entry was a 3, the sum would be 30 and the average would be 3. This is one valid list.',
        workingOut: 'List of ten 3s: Average = 3',
        graphData: null
      },
      {
        explanation: 'What if we change some numbers? The allowed numbers are 2, 3, and 4. Notice that 2 is exactly "one less" than 3, and 4 is exactly "one more" than 3.',
        workingOut: [
          '2 is \\(3 - 1\\)',
          '4 is \\(3 + 1\\)'
        ].join('\n'),
        graphData: null
      },
      {
        explanation: 'If we replace a 3 with a 2, our total sum drops by 1. To get the sum back to 30, we must perfectly balance it by replacing another 3 with a 4 (which adds 1).',
        workingOut: 'Every time we add a 2, we must also add a 4 to keep the balance.',
        graphData: null
      },
      {
        explanation: 'Therefore, to maintain an average of 3, every 2 in the list must be paired with exactly one 4. This means the number of 2s must equal the number of 4s.',
        workingOut: '\\text{Number of 2s} = \\text{Number of 4s}',
        graphData: null
      }
    ],
    updatedAt: FieldValue.serverTimestamp()
  });

  // ─── q5c ───
  // Correct answer: All ten entries must be 4. Let's make it D (index 3).
  await db.collection('questions').doc('y8-19a-q5c').update({
    type: 'multiple_choice',
    options: [
      { text: "Five entries are 3, five entries are 4", imageUrl: "" },
      { text: "Nine entries are 4, one entry is 2", imageUrl: "" },
      { text: "The number of 2s must equal the number of 4s", imageUrl: "" },
      { text: "All ten entries must be 4", imageUrl: "" } // Correct
    ],
    answer: '3',
    solutionSteps: [
      {
        explanation: 'If the average of 10 entries is 4, then the total sum of all 10 entries must be \\(4 \\times 10 = 40\\).',
        workingOut: [
          '\\(\\text{Mean} = \\frac{\\text{Sum}}{10} = 4\\)',
          '\\(\\text{Sum} = 40\\)'
        ].join('\n'),
        graphData: null
      },
      {
        explanation: 'The problem states that every entry in the list can only be 2, 3, or 4. This means the LARGEST possible number you can choose is 4.',
        workingOut: '\\text{Maximum value} = 4',
        graphData: null
      },
      {
        explanation: 'If we choose the largest possible number (4) for all 10 entries, what is the sum?',
        workingOut: '\\text{Sum of ten 4s} = 4 \\times 10 = 40',
        graphData: null
      },
      {
        explanation: 'This matches our required sum exactly! If we change even a single entry to a 3 or a 2, the total sum will drop below 40, which would make the average less than 4.',
        workingOut: 'Therefore, the only way to get an average of 4 is if every single entry is exactly 4.',
        graphData: null
      }
    ],
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log("Updated y8-19a-q5a, q5b, q5c");
  process.exit(0);
}

run().catch(console.error);
