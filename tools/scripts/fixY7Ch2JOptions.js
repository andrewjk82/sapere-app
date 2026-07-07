import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const updates = [
  {
    id: "y7-2j-q7b",
    options: [
      { text: "7^7", imageUrl: "" },
      { text: "7^2", imageUrl: "" },
      { text: "7^4", imageUrl: "" },
      { text: "7^{12}", imageUrl: "" }
    ],
    answer: 0
  },
  {
    id: "y7-2j-q7c",
    options: [
      { text: "20^4", imageUrl: "" },
      { text: "20^2", imageUrl: "" },
      { text: "20^3", imageUrl: "" },
      { text: "4^{20}", imageUrl: "" }
    ],
    answer: 0
  },
  {
    id: "y7-2j-q15a",
    options: [
      { text: "2^8", imageUrl: "" },
      { text: "2^2", imageUrl: "" },
      { text: "2^6", imageUrl: "" },
      { text: "4^4", imageUrl: "" }
    ],
    answer: 0
  },
  {
    id: "y7-2j-q15b",
    options: [
      { text: "2^{10}", imageUrl: "" },
      { text: "2^{11}", imageUrl: "" },
      { text: "2^{12}", imageUrl: "" },
      { text: "4^5 \\times 2", imageUrl: "" }
    ],
    answer: 1
  },
  {
    id: "y7-2j-q15c",
    options: [
      { text: "7^2", imageUrl: "" },
      { text: "7^4", imageUrl: "" },
      { text: "7^3", imageUrl: "" },
      { text: "3 \\times 7^2", imageUrl: "" }
    ],
    answer: 2
  },
  {
    id: "y7-2j-q15e",
    options: [
      { text: "2 + 7 \\times 11 \\times 13", imageUrl: "" },
      { text: "2 \\times 7 \\times 11 \\times 13^2", imageUrl: "" },
      { text: "2 \\times 7 \\times 11 \\times 13", imageUrl: "" },
      { text: "2^2 \\times 7 \\times 11 \\times 13", imageUrl: "" }
    ],
    answer: 2
  },
  {
    id: "y7-2j-q15f",
    options: [
      { text: "2 \\times 7 \\times 11 \\times 13 \\times 17^2", imageUrl: "" },
      { text: "2 \\times 7 \\times 11 \\times 13 \\times 17", imageUrl: "" },
      { text: "2 + 7 \\times 11 \\times 13 \\times 17", imageUrl: "" },
      { text: "2^2 \\times 7 \\times 11 \\times 13 \\times 17", imageUrl: "" }
    ],
    answer: 1
  },
  {
    id: "y7-2j-q15g",
    options: [
      { text: "2 \\times 7 \\times 11 \\times 13 \\times 19^2", imageUrl: "" },
      { text: "2 \\times 7 \\times 11 \\times 13 \\times 19", imageUrl: "" },
      { text: "2 + 7 \\times 11 \\times 13 \\times 19", imageUrl: "" },
      { text: "2 \\times 7^2 \\times 11 \\times 13 \\times 19", imageUrl: "" }
    ],
    answer: 1
  },
  {
    id: "y7-2j-q15i",
    options: [
      { text: "2^{11} + 5", imageUrl: "" },
      { text: "2^{10} \\times 5^2", imageUrl: "" },
      { text: "2^{11} \\times 5", imageUrl: "" },
      { text: "2^{12} \\times 5", imageUrl: "" }
    ],
    answer: 2
  },
  {
    id: "y7-2j-q15j",
    options: [
      { text: "3^6", imageUrl: "" },
      { text: "3^2", imageUrl: "" },
      { text: "3^5", imageUrl: "" },
      { text: "9^3", imageUrl: "" }
    ],
    answer: 0
  }
];

async function run() {
  const batch = db.batch();

  for (const q of updates) {
    const ref = db.collection('questions').doc(q.id);
    batch.update(ref, {
      options: q.options,
      answer: q.answer
    });
    console.log(`Queued update for ${q.id} -> ${q.options.length} options`);
  }

  await batch.commit();
  console.log('\n✅ All questions updated to 4 options in Firebase!');

  // Verify
  for (const q of updates) {
    const doc = await db.collection('questions').doc(q.id).get();
    const data = doc.data();
    console.log(`${q.id}: type=${data.type}, options=${data.options.length}`);
  }
}
run().catch(console.error);
