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
  const q4cText = dataContext + 'c) Compare the median and mean and comment on which is the better indicator of how much Sue usually spent on her daily lunch.';

  const sampleAnswer = "The median ($10.75) is a better indicator of Sue's usual spending. This is because the mean ($14.95) is heavily skewed upwards by an outlier ($49.50), which is much higher than her other daily lunch costs.";

  const solutionSteps = [
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
  ];

  await db.collection('questions').doc('y8-19a-q4c').update({
    type: 'teacher_review',
    question: q4cText,
    options: [], // Clear options
    answer: sampleAnswer,
    solution: sampleAnswer,
    solutionSteps: solutionSteps,
    updatedAt: FieldValue.serverTimestamp()
  });

  // Update parent document's subQuestions array just in case
  const parentRef = db.collection('questions').doc('y8-19a-q4');
  const parentSnap = await parentRef.get();
  const parentData = parentSnap.data();

  if (parentData && parentData.subQuestions) {
    const newSubQs = parentData.subQuestions.map(sq => {
      if (sq.id === 'y8-19a-q4c') {
        return {
          ...sq,
          question: q4cText,
          type: 'teacher_review',
          options: [],
          answer: sampleAnswer,
          solutionSteps: solutionSteps
        };
      }
      return sq;
    });

    await parentRef.update({
      subQuestions: newSubQs,
      updatedAt: FieldValue.serverTimestamp()
    });
  }

  console.log("Reverted y8-19a-q4c to teacher_review");
  process.exit(0);
}

run().catch(console.error);
