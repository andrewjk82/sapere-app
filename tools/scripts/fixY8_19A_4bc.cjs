const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const dataContext = `Sue spent the following amounts on her lunch each day over the course of two working weeks:

\\(\\$16, \\$8, \\$13, \\$49.50, \\$9.50, \\$13.50, \\$9, \\$11, \\$9.50, \\$10.50\\)

`;

  // ─── q4b ───
  // Mean = 14.95. Make it B (index 1).
  const q4bText = dataContext + 'b) Calculate the mean for these data (in dollars).';
  await db.collection('questions').doc('y8-19a-q4b').update({
    type: 'multiple_choice',
    question: q4bText,
    options: [
      { text: '\\(\\$14.50\\)', imageUrl: '' },
      { text: '\\(\\$14.95\\)', imageUrl: '' }, // Correct
      { text: '\\(\\$15.95\\)', imageUrl: '' },
      { text: '\\(\\$10.75\\)', imageUrl: '' }
    ],
    answer: '1',
    solutionSteps: [
      {
        explanation: 'To find the mean (average), we need to add up all of Sue\'s daily lunch amounts and then divide by the total number of days.',
        workingOut: '\\(\\text{Mean} = \\frac{\\text{Sum of all values}}{\\text{Total number of values}}\\)',
        graphData: null
      },
      {
        explanation: 'First, let\'s calculate the sum of all 10 amounts.',
        workingOut: [
          '\\(16 + 8 + 13 + 49.50 + 9.50 + 13.50 + 9 + 11 + 9.50 + 10.50\\)',
          '\\text{Sum} = 149.50'
        ].join('\n'),
        graphData: null
      },
      {
        explanation: 'Now, divide the total sum (\\(\\$149.50\\)) by the number of days (10).',
        workingOut: [
          '\\(\\text{Mean} = \\frac{149.50}{10}\\)',
          '\\(\\text{Mean} = 14.95\\)'
        ].join('\n'),
        graphData: null
      },
      {
        explanation: 'Therefore, the mean amount Sue spent on lunch is \\(\\$14.95\\).',
        workingOut: '\\(\\text{Final Answer: } \\$14.95\\)',
        graphData: null
      }
    ],
    updatedAt: FieldValue.serverTimestamp()
  });


  // ─── q4c ───
  // Correct answer: Median is better because of outlier. Make it A (index 0).
  const q4cText = dataContext + 'c) Compare the median and mean and comment on which is the better indicator of how much Sue usually spent on her daily lunch.';
  await db.collection('questions').doc('y8-19a-q4c').update({
    type: 'multiple_choice',
    question: q4cText,
    options: [
      { text: 'The median (\\(\\$10.75\\)) is better because the mean is heavily skewed upwards by an outlier (\\(\\$49.50\\)).', imageUrl: '' }, // Correct
      { text: 'The mean (\\(\\$14.95\\)) is better because it takes every single value into account.', imageUrl: '' },
      { text: 'Both are equally good indicators of her daily lunch cost.', imageUrl: '' },
      { text: 'The median (\\(\\$10.75\\)) is better because the mean is heavily skewed downwards by an outlier (\\(\\$8.00\\)).', imageUrl: '' }
    ],
    answer: '0',
    solutionSteps: [
      {
        explanation: 'Let\'s review the two values we calculated in parts a) and b).',
        workingOut: [
          '\\(\\text{Median} = \\$10.75\\)',
          '\\(\\text{Mean} = \\$14.95\\)'
        ].join('\n'),
        graphData: null
      },
      {
        explanation: 'Look closely at the original data. Most days, Sue spends between \\(\\$8\\) and \\(\\$16\\) on lunch. However, on one day she spent \\(\\$49.50\\). This unusually high number is called an **outlier**.',
        workingOut: '\\text{Outlier: } \\$49.50',
        graphData: null
      },
      {
        explanation: 'The mean calculates the average using the total sum, so this single huge outlier (\\(\\$49.50\\)) artificially pulls the mean way up to \\(\\$14.95\\). But if you look at the data, Sue rarely spends that much on a normal day.',
        workingOut: '\\text{The mean is heavily skewed upwards by the outlier.}',
        graphData: null
      },
      {
        explanation: 'The median (\\(\\$10.75\\)) only cares about the middle numbers when ordered, so it completely ignores how extreme the outlier is. Therefore, \\(\\$10.75\\) is a much better reflection of her "usual" daily spending.',
        workingOut: '\\text{The median is a better indicator.}',
        graphData: null
      }
    ],
    updatedAt: FieldValue.serverTimestamp()
  });

  // Update parent document's subQuestions array just in case
  const parentRef = db.collection('questions').doc('y8-19a-q4');
  const parentSnap = await parentRef.get();
  const parentData = parentSnap.data();

  if (parentData && parentData.subQuestions) {
    const newSubQs = parentData.subQuestions.map(sq => {
      if (sq.id === 'y8-19a-q4b') {
        return {
          ...sq,
          question: q4bText,
          type: 'multiple_choice',
          options: [
            { text: '\\(\\$14.50\\)', imageUrl: '' },
            { text: '\\(\\$14.95\\)', imageUrl: '' },
            { text: '\\(\\$15.95\\)', imageUrl: '' },
            { text: '\\(\\$10.75\\)', imageUrl: '' }
          ],
          answer: '1'
        };
      }
      if (sq.id === 'y8-19a-q4c') {
        return {
          ...sq,
          question: q4cText,
          type: 'multiple_choice',
          options: [
            { text: 'The median (\\(\\$10.75\\)) is better because the mean is heavily skewed upwards by an outlier (\\(\\$49.50\\)).', imageUrl: '' },
            { text: 'The mean (\\(\\$14.95\\)) is better because it takes every single value into account.', imageUrl: '' },
            { text: 'Both are equally good indicators of her daily lunch cost.', imageUrl: '' },
            { text: 'The median (\\(\\$10.75\\)) is better because the mean is heavily skewed downwards by an outlier (\\(\\$8.00\\)).', imageUrl: '' }
          ],
          answer: '0'
        };
      }
      return sq;
    });

    await parentRef.update({
      subQuestions: newSubQs,
      updatedAt: FieldValue.serverTimestamp()
    });
  }

  console.log("Updated y8-19a-q4b and y8-19a-q4c");
  process.exit(0);
}

run().catch(console.error);
