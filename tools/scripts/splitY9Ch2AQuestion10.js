import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// Fisher-Yates shuffle
function shuffle(array) {
  let currentIndex = array.length;
  let randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}

const commonContext = `A boat builder needs to calculate the lengths of the stays needed to support a mast on a yacht. The mast is supported by two identical side stays ($AB$ and $AD$) going from point $A$ on the mast to each side of the boat, and a front stay ($AE$) going to the front of the boat. The base of the mast is $C$.
Given $AC = 4$ m, $CB = CD = 1.5$ m, and $CE = 2.2$ m:`;

const subQuestions = [
  {
    id: "y9-2a-10a",
    question: `${commonContext}\n\nFind the length, to the nearest centimetre, of one of the side stays, $AB$ or $AD$.`,
    options: ["427 cm", "457 cm", "415 cm", "438 cm"],
    answerIndex: 0,
    hint: "Use Pythagoras' theorem in triangle ACB: AB = sqrt(AC^2 + CB^2).",
    solution: "The correct answer is 427 cm.",
    solutionSteps: [
      {
        explanation: "Set up the Pythagoras formula in right-angled triangle ACB.",
        workingOut: "AB = \\sqrt{AC^2 + CB^2}",
        graphData: null
      },
      {
        explanation: "Substitute the given lengths (AC = 4 m, CB = 1.5 m).",
        workingOut: "AB = \\sqrt{4^2 + 1.5^2} = \\sqrt{16 + 2.25} = \\sqrt{18.25}",
        graphData: null
      },
      {
        explanation: "Calculate the value and round to the nearest centimetre.",
        workingOut: "AB \\approx 4.272 \\text{ m} = 427.2 \\text{ cm} \\approx 427 \\text{ cm}",
        graphData: null
      }
    ]
  },
  {
    id: "y9-2a-10b",
    question: `${commonContext}\n\nFind the length, to the nearest centimetre, of the front stay, $AE$.`,
    options: ["457 cm", "427 cm", "445 cm", "472 cm"],
    answerIndex: 0,
    hint: "Use Pythagoras' theorem in triangle ACE: AE = sqrt(AC^2 + CE^2).",
    solution: "The correct answer is 457 cm.",
    solutionSteps: [
      {
        explanation: "Set up the Pythagoras formula in right-angled triangle ACE.",
        workingOut: "AE = \\sqrt{AC^2 + CE^2}",
        graphData: null
      },
      {
        explanation: "Substitute the given lengths (AC = 4 m, CE = 2.2 m).",
        workingOut: "AE = \\sqrt{4^2 + 2.2^2} = \\sqrt{16 + 4.84} = \\sqrt{20.84}",
        graphData: null
      },
      {
        explanation: "Calculate and round to the nearest centimetre.",
        workingOut: "AE \\approx 4.565 \\text{ m} = 456.5 \\text{ cm} \\approx 457 \\text{ cm}",
        graphData: null
      }
    ]
  },
  {
    id: "y9-2a-10c",
    question: `${commonContext}\n\nFind the total length of stainless steel wire needed to make the three stays (2 side stays + 1 front stay).`,
    options: ["1311 cm", "1341 cm", "1298 cm", "1325 cm"],
    answerIndex: 0,
    hint: "Sum the lengths of the two side stays (AB + AD) and the front stay (AE).",
    solution: "The correct answer is 1311 cm.",
    solutionSteps: [
      {
        explanation: "Recall the lengths calculated in the previous steps.",
        workingOut: "Side stays (AB and AD) \\approx 4.272 \\text{ m}. Front stay (AE) \\approx 4.565 \\text{ m}.",
        graphData: null
      },
      {
        explanation: "Calculate the total sum of the three stays.",
        "workingOut": "Total = 2 \\times 4.272 + 4.565 = 8.544 + 4.565 = 13.109 \\text{ m}",
        graphData: null
      },
      {
        explanation: "Convert the total length to centimetres.",
        "workingOut": "13.109 \\text{ m} = 1310.9 \\text{ cm} \\approx 1311 \\text{ cm}",
        graphData: null
      }
    ]
  }
];

async function run() {
  const batch = db.batch();

  // 1. Delete original parent question y9-2a-10
  const origRef = db.collection('questions').doc('y9-2a-10');
  batch.delete(origRef);
  console.log('Queued deletion of y9-2a-10');

  // 2. Add y9-2a-10a, y9-2a-10b, y9-2a-10c as multiple_choice with randomized answers
  for (const sq of subQuestions) {
    const ref = db.collection('questions').doc(sq.id);
    
    // Shuffle options
    const paired = sq.options.map((opt, index) => ({
      text: `\\(${opt}\\)`,
      isCorrect: index === sq.answerIndex
    }));
    shuffle(paired);

    const shuffledOptions = paired.map(p => p.text);
    const newAnswerIndex = paired.findIndex(p => p.isCorrect);

    batch.set(ref, {
      chapterId: "y9-2",
      topicId: "y9-2a",
      topicCode: "2A",
      topicTitle: "Pythagoras' Theorem",
      chapterTitle: "Chapter 2: Pythagoras' theorem and surds",
      year: "Year 9",
      difficulty: "medium",
      timeLimit: 120,
      isManual: true,
      type: "multiple_choice",
      question: sq.question,
      options: shuffledOptions,
      answer: newAnswerIndex,
      hint: sq.hint,
      solution: sq.solution,
      solutionSteps: sq.solutionSteps,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    console.log(`Queued creation of subquestion ${sq.id}`);
  }

  await batch.commit();
  console.log('\n✅ Successfully split y9-2a-10 into 3 distinct multiple_choice questions in Firebase!');
}

run().catch(console.error);
