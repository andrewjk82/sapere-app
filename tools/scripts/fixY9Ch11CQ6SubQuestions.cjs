const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const docRef = db.collection('questions').doc('y9-11c-q6');
  const doc = await docRef.get();
  if (!doc.exists) {
    console.error("y9-11c-q6 not found in Firestore!");
    process.exit(1);
  }

  const subQuestions = [
    {
      id: "y9-11c-q6a",
      type: "multiple_choice",
      question: "a) Complete the table for the line passing through \\((0, 0)\\) with gradient 3. Find the missing values in order: \\(y\\) when \\(x = -2\\), \\(x\\) when \\(y = -3\\), \\(y\\) when \\(x = 1\\), and \\(x\\) when \\(y = 9\\). Format: [val1], [val2], [val3], [val4]",
      options: [
        { text: "\\(-6, 1, -3, 3\\)", imageUrl: "" },
        { text: "\\(6, -1, 3, -3\\)", imageUrl: "" },
        { text: "\\(-6, -1, 3, 3\\)", imageUrl: "" },
        { text: "\\(6, 1, 3, 3\\)", imageUrl: "" }
      ],
      answer: "2",
      isManual: true,
      solutionSteps: [
        {
          explanation: "Substitute coordinates into \\(y = 3x\\).",
          workingOut: "-6, -1, 3, 3"
        }
      ],
      graphData: null
    },
    {
      id: "y9-11c-q6b",
      type: "multiple_choice",
      question: "b) Complete the table for the line passing through \\((0, 2)\\) with gradient \\(\\frac{3}{5}\\). Find the missing values: \\(x\\) when \\(y = -4\\), \\(y\\) when \\(x = -5\\), \\(y\\) when \\(x = 5\\), and \\(x\\) when \\(y = 8\\). Format: [val1], [val2], [val3], [val4]",
      options: [
        { text: "\\(-10, -1, 5, 10\\)", imageUrl: "" },
        { text: "\\(10, 1, 5, -10\\)", imageUrl: "" },
        { text: "\\(-10, 1, -5, 10\\)", imageUrl: "" },
        { text: "\\(10, -1, 5, -10\\)", imageUrl: "" }
      ],
      answer: "0",
      isManual: true,
      solutionSteps: [
        {
          explanation: "Substitute coordinates into \\(y = \\frac{3}{5}x + 2\\).",
          workingOut: "-10, -1, 5, 10"
        }
      ],
      graphData: null
    },
    {
      id: "y9-11c-q6c",
      type: "multiple_choice",
      question: "c) Complete the table for the line passing through \\((0, 3)\\) with gradient \\(\\frac{1}{2}\\). Find the missing values: \\(x\\) when \\(y = -4\\), \\(y\\) when \\(x = -4\\), and \\(x\\) when \\(y = 6\\). Format: [val1], [val2], [val3]",
      options: [
        { text: "\\(14, -1, -6\\)", imageUrl: "" },
        { text: "\\(-14, 1, 6\\)", imageUrl: "" },
        { text: "\\(-7, 1, 3\\)", imageUrl: "" },
        { text: "\\(-14, -1, 6\\)", imageUrl: "" }
      ],
      answer: "1",
      isManual: true,
      solutionSteps: [
        {
          explanation: "Substitute coordinates into \\(y = \\frac{1}{2}x + 3\\).",
          workingOut: "-14, 1, 6"
        }
      ],
      graphData: null
    },
    {
      id: "y9-11c-q6d",
      type: "multiple_choice",
      question: "d) Complete the table for the line passing through \\((2, -3)\\) with gradient \\(-3\\). Find the missing values: \\(x\\) when \\(y = 9\\), \\(y\\) when \\(x = -1\\), \\(x\\) when \\(y = 3\\), and \\(y\\) when \\(x = 1\\). Format: [val1], [val2], [val3], [val4]",
      options: [
        { text: "\\(-2, 6, 0, 0\\)", imageUrl: "" },
        { text: "\\(2, -6, 0, 0\\)", imageUrl: "" },
        { text: "\\(-2, 6, 1, 1\\)", imageUrl: "" },
        { text: "\\(2, 6, 0, 1\\)", imageUrl: "" }
      ],
      answer: "0",
      isManual: true,
      solutionSteps: [
        {
          explanation: "Substitute coordinates into \\(y = -3x + 3\\).",
          workingOut: "-2, 6, 0, 0"
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

  console.log("Successfully updated y9-11c-q6 subQuestions to multiple choice!");
  process.exit(0);
}

run().catch(console.error);
