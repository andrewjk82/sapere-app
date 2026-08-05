const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const docRef = db.collection('questions').doc('y9-11c-q8');
  const doc = await docRef.get();
  if (!doc.exists) {
    console.error("y9-11c-q8 not found in Firestore!");
    process.exit(1);
  }

  const subQuestions = [
    {
      id: "y9-11c-q8a",
      type: "multiple_choice",
      difficulty: "medium",
      timeLimit: 90,
      question: "a) Find the coordinates of the point where the line crosses the \\(x\\)-axis.",
      options: [
        { text: "(-1, 0)", imageUrl: "" },
        { text: "(1, 0)", imageUrl: "" },
        { text: "(0, -1)", imageUrl: "" },
        { text: "(-2, 0)", imageUrl: "" }
      ],
      answer: "0",
      isManual: true,
      solutionSteps: [
        {
          explanation: "Set \\(y = 0\\) in the line equation \\(y = 2x + 2\\).",
          workingOut: "0 = 2x + 2 \\implies x = -1 \\implies (-1, 0)"
        }
      ],
      graphData: null
    },
    {
      id: "y9-11c-q8b",
      type: "multiple_choice",
      difficulty: "medium",
      timeLimit: 90,
      question: "b) Find the coordinates of the point where the line crosses the \\(y\\)-axis.",
      options: [
        { text: "(0, 2)", imageUrl: "" },
        { text: "(2, 0)", imageUrl: "" },
        { text: "(0, -2)", imageUrl: "" },
        { text: "(0, 1)", imageUrl: "" }
      ],
      answer: "0",
      isManual: true,
      solutionSteps: [
        {
          explanation: "Set \\(x = 0\\) in the line equation \\(y = 2x + 2\\).",
          workingOut: "y = 2(0) + 2 = 2 \\implies (0, 2)"
        }
      ],
      graphData: null
    }
  ];

  await docRef.update({
    subQuestions: subQuestions,
    updatedAt: FieldValue.serverTimestamp()
  });

  // Update sync version
  const questionsMetaRef = db.doc('sync_meta/questions');
  const now = Date.now();
  await questionsMetaRef.update({
    version: now,
    membershipVersion: now,
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log("Successfully updated y9-11c-q8 subQuestions to multiple choice!");
  process.exit(0);
}

run().catch(console.error);
