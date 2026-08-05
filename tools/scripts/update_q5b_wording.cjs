const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const newQuestionText = "A list of data has 10 entries. Each entry is 2, 3 or 4. Which of the following statements MUST be true about the list if the average (mean) is 3?";
  
  const newOptions = [
    { text: "The number of 2s equals the number of 4s", imageUrl: "" },
    { text: "All ten entries are 3", imageUrl: "" },
    { text: "The number of 2s equals the number of 3s", imageUrl: "" },
    { text: "The number of 3s equals the number of 4s", imageUrl: "" }
  ];

  await db.collection('questions').doc('y8-19a-q5b').update({
    question: newQuestionText,
    options: newOptions,
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log('Updated y8-19a-q5b');
  process.exit(0);
}

run().catch(console.error);
