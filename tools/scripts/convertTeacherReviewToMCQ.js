import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync, writeFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const updates = [
  {
    id: "y7-2j-q25a",
    type: "multiple_choice",
    opts: [
      { text: "\\(2^3 + 2^3 + 1^3 + 1^3\\)", imageUrl: "" },
      { text: "\\(2^3 + 2^3 + 2^3\\)", imageUrl: "" },
      { text: "\\(2^3 + 1^3 + 1^3\\)", imageUrl: "" },
      { text: "\\(2^3 + 2^3 + 2^3 + 1^3\\)", imageUrl: "" }
    ],
    answer: 0
  },
  {
    id: "y7-2j-q25b",
    type: "multiple_choice",
    opts: [
      { text: "\\(10^3 + 9^3 + 2^3\\)", imageUrl: "" },
      { text: "\\(10^3 + 9^3 + 1^3\\)", imageUrl: "" },
      { text: "\\(10^3 + 8^3 + 1^3\\)", imageUrl: "" },
      { text: "\\(9^3 + 9^3 + 9^3 + 1^3\\)", imageUrl: "" }
    ],
    answer: 1
  },
  {
    id: "y7-2j-q25c",
    type: "multiple_choice",
    question: "Write 37 as a sum of no more than 4 cubes.",
    opts: [
      { text: "\\(3^3 + 2^3 + 2^3\\)", imageUrl: "" },
      { text: "\\(3^3 + 2^3 + 1^3\\)", imageUrl: "" },
      { text: "\\(3^3 + 2^3 + 1^3 + 1^3\\)", imageUrl: "" },
      { text: "\\(2^3 + 2^3 + 2^3 + 2^3\\)", imageUrl: "" }
    ],
    answer: 2
  },
  {
    id: "y7-2j-q31a",
    type: "multiple_choice",
    opts: [
      { text: "\\(5^2 + 2^2 + 1^2\\)", imageUrl: "" },
      { text: "\\(4^2 + 3^2 + 2^2 + 1^2\\)", imageUrl: "" },
      { text: "\\(5^2 + 1^2 + 1^2 + 1^2\\)", imageUrl: "" },
      { text: "\\(4^2 + 2^2 + 2^2 + 1^2\\)", imageUrl: "" }
    ],
    answer: 2
  },
  {
    id: "y7-2j-q31b",
    type: "multiple_choice",
    opts: [
      { text: "\\(8^2 + 3^2 + 1^2 + 1^2\\)", imageUrl: "" },
      { text: "\\(8^2 + 3^2 + 2^2\\)", imageUrl: "" },
      { text: "\\(7^2 + 5^2 + 1^2\\)", imageUrl: "" },
      { text: "\\(8^2 + 4^2 + 1^2 + 1^2\\)", imageUrl: "" }
    ],
    answer: 0
  },
  {
    id: "y7-2j-q31c",
    type: "multiple_choice",
    opts: [
      { text: "\\(10^2 + 5^2 + 5^2 + 2^2\\)", imageUrl: "" },
      { text: "\\(10^2 + 6^2 + 2^2 + 0^2\\)", imageUrl: "" },
      { text: "\\(11^2 + 4^2 + 2^2 + 1^2\\)", imageUrl: "" },
      { text: "\\(9^2 + 7^2 + 3^2 + 1^2\\)", imageUrl: "" }
    ],
    answer: 1
  },
  {
    id: "y7-2j-q4a",
    type: "multiple_choice",
    opts: [
      { text: "\\(100, 103, 672\\)", imageUrl: "" },
      { text: "\\(101, 101, 673\\)", imageUrl: "" },
      { text: "\\(99, 105, 671\\)", imageUrl: "" },
      { text: "\\(101, 103, 671\\)", imageUrl: "" }
    ],
    answer: 3
  },
  {
    id: "y7-2j-q4b",
    type: "multiple_choice",
    opts: [
      { text: "\\(101, 103, 701\\)", imageUrl: "" },
      { text: "\\(101, 103, 700\\)", imageUrl: "" },
      { text: "\\(101, 101, 703\\)", imageUrl: "" },
      { text: "\\(99, 105, 701\\)", imageUrl: "" }
    ],
    answer: 0
  },
  {
    id: "y7-2j-q4c",
    type: "multiple_choice",
    opts: [
      { text: "\\(101, 103, 276\\)", imageUrl: "" },
      { text: "\\(101, 103, 277\\)", imageUrl: "" },
      { text: "\\(101, 101, 279\\)", imageUrl: "" },
      { text: "\\(99, 105, 277\\)", imageUrl: "" }
    ],
    answer: 1
  },
  {
    id: "y7-2j-q4d",
    type: "multiple_choice",
    opts: [
      { text: "\\(101, 103, 144\\)", imageUrl: "" },
      { text: "\\(101, 101, 147\\)", imageUrl: "" },
      { text: "\\(101, 103, 145\\)", imageUrl: "" },
      { text: "\\(99, 105, 145\\)", imageUrl: "" }
    ],
    answer: 2
  },
  {
    id: "y7-2j-q4e",
    type: "multiple_choice",
    opts: [
      { text: "\\(501, 503, 832\\)", imageUrl: "" },
      { text: "\\(501, 501, 835\\)", imageUrl: "" },
      { text: "\\(501, 503, 833\\)", imageUrl: "" },
      { text: "\\(99, 905, 833\\)", imageUrl: "" }
    ],
    answer: 2
  },
  {
    id: "y7-2j-q4f",
    type: "multiple_choice",
    opts: [
      { text: "\\(951, 953, 948\\)", imageUrl: "" },
      { text: "\\(951, 951, 951\\)", imageUrl: "" },
      { text: "\\(951, 953, 949\\)", imageUrl: "" },
      { text: "\\(951, 953, 1049\\)", imageUrl: "" }
    ],
    answer: 2
  }
];

async function run() {
  const batch = db.batch();
  for (const q of updates) {
    const ref = db.collection('questions').doc(q.id);
    const updateObj = {
      type: q.type,
      options: q.opts,
      answer: q.answer
    };
    if (q.question) {
      updateObj.question = q.question;
    }
    batch.update(ref, updateObj);
    console.log(`Updated ${q.id} in Firebase`);
  }
  await batch.commit();
  console.log('✅ Firebase direct updates completed!');
}

run().catch(console.error);
