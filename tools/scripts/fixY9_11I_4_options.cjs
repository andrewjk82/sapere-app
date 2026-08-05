const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  await db.collection('questions').doc('y9-11i-q4').update({
    type: "multiple_choice",
    options: [
      { text: "\\((-4, 10)\\)", imageUrl: "" },
      { text: "\\((0, -4)\\)", imageUrl: "" },
      { text: "\\((8, 2)\\)", imageUrl: "" },
      { text: "\\((4, 2)\\)", imageUrl: "" }
    ],
    answer: "2", // Index 2 is (8, 2)
    solution: "The correct answer is \\((8, 2)\\).",
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log("Updated multiple choice options for y9-11i-q4");
  process.exit(0);
}

run().catch(console.error);
