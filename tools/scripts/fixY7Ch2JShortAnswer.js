import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const updates = [
  {
    id: "y7-2j-q7a",
    type: "multiple_choice",
    options: [
      { text: "2^2 \\times 5^2", imageUrl: "" },
      { text: "2^{4 \\times 5^{3", imageUrl: "" },
      { text: "2^4 + 5^3", imageUrl: "" },
      { text: "2^4 \\times 5^3", imageUrl: "" }
    ],
    answer: 3,
    hint: "Count the number of 2s and the number of 5s.",
    solution: "The correct answer is 2^4 \\times 5^3.",
    solutionSteps: [
      { explanation: "Count the factor 2.", workingOut: "2 \\text{ is repeated } 4 \\text{ times} \\implies 2^4", graphData: null },
      { explanation: "Count the factor 5.", workingOut: "5 \\text{ is repeated } 3 \\text{ times} \\implies 5^3", graphData: null },
      { explanation: "Combine using multiplication.", workingOut: "2^4 \\times 5^3", graphData: null }
    ]
  },
  {
    id: "y7-2j-q7d",
    type: "multiple_choice",
    options: [
      { text: "5^2 \\times 3^2", imageUrl: "" },
      { text: "5^{4 \\times 3^2", imageUrl: "" },
      { text: "5^4 + 3^2", imageUrl: "" },
      { text: "5^4 \\times 3^2", imageUrl: "" }
    ],
    answer: 3,
    hint: "Group the identical factors and count them.",
    solution: "The correct answer is 5^4 \\times 3^2.",
    solutionSteps: [
      { explanation: "Count the factor 5.", workingOut: "5 \\text{ is repeated } 4 \\text{ times} \\implies 5^4", graphData: null },
      { explanation: "Count the factor 3.", workingOut: "3 \\text{ is repeated } 2 \\text{ times} \\implies 3^2", graphData: null },
      { explanation: "Write as a product.", workingOut: "5^4 \\times 3^2", graphData: null }
    ]
  },
  {
    id: "y7-2j-q15d",
    type: "multiple_choice",
    options: [
      { text: "2^3 \\times 3 \\times 5^2", imageUrl: "" },
      { text: "2^3 + 3 \\times 5^2", imageUrl: "" },
      { text: "2^{3 \\times 3 \\times 5^{2", imageUrl: "" },
      { text: "2^4 \\times 3 \\times 5^2", imageUrl: "" }
    ],
    answer: 0,
    hint: "Perform a prime factor tree for 600.",
    solution: "The correct answer is 2^3 \\times 3 \\times 5^2.",
    solutionSteps: [
      { explanation: "Separate into factors.", workingOut: "600 = 6 \\times 100 = (2 \\times 3) \\times (2^2 \\times 5^2)", graphData: null },
      { explanation: "Group the prime factors.", workingOut: "2^3 \\times 3 \\times 5^2", graphData: null }
    ]
  },
  {
    id: "y7-2j-q15h",
    type: "multiple_choice",
    options: [
      { text: "2^6 \\times 5^3", imageUrl: "" },
      { text: "2^6 \\times 5^4", imageUrl: "" },
      { text: "2^6 + 5^3", imageUrl: "" },
      { text: "2^{6 \\times 5^{3", imageUrl: "" }
    ],
    answer: 0,
    hint: "Write 8000 as \\(8 \\times 1000\\).",
    solution: "The correct answer is 2^6 \\times 5^3.",
    solutionSteps: [
      { explanation: "Separate into powers of 10.", workingOut: "8000 = 8 \\times 10^3", graphData: null },
      { explanation: "Express 8 and 10 in prime factor form.", workingOut: "8 = 2^3, \\quad 10^3 = (2 \\times 5)^3 = 2^3 \\times 5^3", graphData: null },
      { explanation: "Combine the powers of 2.", workingOut: "2^3 \\times 2^3 \\times 5^3 = 2^6 \\times 5^3", graphData: null }
    ]
  },
  {
    id: "y7-2j-q15i",
    type: "multiple_choice",
    options: [
      { text: "2^{11} + 5", imageUrl: "" },
      { text: "2^{{11} \\times 5", imageUrl: "" },
      { text: "2^{11} \\times 5", imageUrl: "" },
      { text: "2^{10} \\times 5", imageUrl: "" }
    ],
    answer: 2,
    hint: "Separate into \\(1024 \\times 10\\).",
    solution: "The correct answer is 2^{11} \\times 5.",
    solutionSteps: [
      { explanation: "Factor the number.", workingOut: "10240 = 1024 \\times 10", graphData: null },
      { explanation: "Write 1024 and 10 as prime factors.", workingOut: "1024 = 2^{10}, \\quad 10 = 2 \\times 5", graphData: null },
      { explanation: "Combine using exponents.", workingOut: "2^{10} \\times 2 \\times 5 = 2^{11} \\times 5", graphData: null }
    ]
  },
  {
    id: "y7-2j-q15k",
    type: "multiple_choice",
    options: [
      { text: "3^4 \\times 5^2", imageUrl: "" },
      { text: "3^2 \\times 5^2", imageUrl: "" },
      { text: "3^4 + 5^2", imageUrl: "" },
      { text: "3^4 \\times 5^{2", imageUrl: "" }
    ],
    answer: 0,
    hint: "First divide by 25.",
    solution: "The correct answer is 3^4 \\times 5^2.",
    solutionSteps: [
      { explanation: "Divide by 25 (which is \\(5^2\\)).", workingOut: "2025 \\div 25 = 81", graphData: null },
      { explanation: "Express 81 as a power of 3.", workingOut: "81 = 3^4", graphData: null },
      { explanation: "Combine the factors.", workingOut: "3^4 \\times 5^2", graphData: null }
    ]
  },
  {
    id: "y7-2j-q15l",
    type: "multiple_choice",
    options: [
      { text: "2^{3 \\times 19^2", imageUrl: "" },
      { text: "2^3 + 19^2", imageUrl: "" },
      { text: "2^4 \\times 19^2", imageUrl: "" },
      { text: "2^3 \\times 19^2", imageUrl: "" }
    ],
    answer: 3,
    hint: "Divide by 8 and check if the result is a perfect square.",
    solution: "The correct answer is 2^3 \\times 19^2.",
    solutionSteps: [
      { explanation: "Divide by 8 (which is \\(2^3\\)).", workingOut: "2888 \\div 8 = 361", graphData: null },
      { explanation: "Identify 361 as a square of a prime number.", workingOut: "361 = 19^2", graphData: null },
      { explanation: "Combine the prime factors.", workingOut: "2^3 \\times 19^2", graphData: null }
    ]
  }
];

async function run() {
  const batch = db.batch();

  for (const q of updates) {
    const ref = db.collection('questions').doc(q.id);
    batch.update(ref, {
      type: q.type,
      options: q.options,
      answer: q.answer,
      hint: q.hint,
      solution: q.solution,
      solutionSteps: q.solutionSteps
    });
    console.log(`Queued update for ${q.id}`);
  }

  await batch.commit();
  console.log('\n✅ All 7 questions updated to multiple_choice directly in Firebase!');

  // Verify
  for (const q of updates) {
    const doc = await db.collection('questions').doc(q.id).get();
    console.log(`${q.id}: type=${doc.data().type}, options=${doc.data().options.length}`);
  }
}
run().catch(console.error);
