const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // The issue: We need the context in the TOP-LEVEL docs so students can solve them independently.
  // But we DO NOT want the context in the PARENT doc's subQuestions array, to avoid duplication.
  // My previous script removed it from BOTH. I will now put it back ONLY in the top-level docs.

  const dataContext2 = `The weights of a group of students, in kilograms, are given below:

\\(53, 52, 51, 52, 48, 47, 51, 47, 55, 52, 48, 49\\)

`;
  
  await db.collection('questions').doc('y8-19a-q2a').update({
    question: dataContext2 + 'a) What is the median?',
    updatedAt: FieldValue.serverTimestamp()
  });

  await db.collection('questions').doc('y8-19a-q2b').update({
    question: dataContext2 + 'b) Calculate the mean, correct to two decimal places.',
    updatedAt: FieldValue.serverTimestamp()
  });


  const dataContext10 = `The birth weights, in kilograms, of the first 20 babies born at a hospital in a selected month are as follows:

\\(3.1, 2.9, 3.7, 2.9, 3.7, 3.8, 3.3, 4.0, 3.7, 4.3\\)
\\(3.8, 2.8, 3.2, 3.1, 2.6, 2.7, 3.7, 2.5, 3.0, 3.3\\)

`;

  await db.collection('questions').doc('y8-19a-q10a').update({
    question: dataContext10 + 'a) Which of the following is the correct stem-and-leaf plot for the data?',
    updatedAt: FieldValue.serverTimestamp()
  });

  await db.collection('questions').doc('y8-19a-q10b').update({
    question: dataContext10 + 'b) Find the median birth weight.',
    updatedAt: FieldValue.serverTimestamp()
  });

  await db.collection('questions').doc('y8-19a-q10c').update({
    question: dataContext10 + 'c) Find the mean birth weight.',
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log("Restored data context to top-level docs for y8-19a-q2 and y8-19a-q10");
  process.exit(0);
}

run().catch(console.error);
