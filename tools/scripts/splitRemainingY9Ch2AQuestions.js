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

const subQuestions = [
  // y9-2a-11a
  {
    id: "y9-2a-11a",
    question: "As part of a design, an artist draws a circle passing through the four corners (vertices) of a square.\n\nIf the square has side lengths of 6 cm, what is the radius, to the nearest millimetre, of the circle?",
    options: ["42 mm", "45 mm", "38 mm", "40 mm"],
    answerIndex: 0,
    hint: "The diagonal of the square is the diameter of the circle. Calculate the diagonal first.",
    solution: "The correct answer is 42 mm.",
    solutionSteps: [
      {
        explanation: "Calculate the diagonal of the square using Pythagoras' theorem.",
        workingOut: "\\text{Diagonal} = \\sqrt{6^2 + 6^2} = \\sqrt{72} \\approx 8.485 \\text{ cm}",
        graphData: null
      },
      {
        explanation: "The radius of the circle is half of the diagonal (diameter).",
        "workingOut": "\\text{Radius} = 8.485 / 2 = 4.243 \\text{ cm} = 42.43 \\text{ mm}",
        graphData: null
      },
      {
        explanation: "Round the result to the nearest millimetre.",
        "workingOut": "42.43 \\text{ mm} \\approx 42 \\text{ mm}",
        graphData: null
      }
    ]
  },
  // y9-2a-11b
  {
    id: "y9-2a-11b",
    question: "As part of a design, an artist draws a circle passing through the four corners (vertices) of a square.\n\nIf the circle has a radius of 5 cm, what are the side lengths, to the nearest millimetre, of the square?",
    options: ["71 mm", "68 mm", "75 mm", "65 mm"],
    answerIndex: 0,
    hint: "The diagonal of the square is the diameter of the circle. If the radius is 5 cm, the diagonal is 10 cm.",
    solution: "The correct answer is 71 mm.",
    solutionSteps: [
      {
        explanation: "Determine the diagonal of the square.",
        "workingOut": "\\text{Diagonal} = 2 \\times 5 = 10 \\text{ cm}",
        graphData: null
      },
      {
        explanation: "Set up the Pythagoras formula for the square sides (s).",
        "workingOut": "s^2 + s^2 = 10^2 \\Rightarrow 2s^2 = 100 \\Rightarrow s^2 = 50",
        graphData: null
      },
      {
        explanation: "Solve for s and round to the nearest millimetre.",
        "workingOut": "s = \\sqrt{50} \\approx 7.071 \\text{ cm} = 70.71 \\text{ mm} \\approx 71 \\text{ mm}",
        graphData: null
      }
    ]
  },
  // y9-2a-15a
  {
    id: "y9-2a-15a",
    question: "In triangle $PQR$, the angle at $Q$ is a right angle. The line $QS$ is drawn perpendicular to $PR$. Given $PQ = 15$ and $QR = 8$:\n\nFind the length of $PR$.",
    options: ["17", "19", "16", "18"],
    answerIndex: 0,
    hint: "Use Pythagoras' theorem on the right-angled triangle PQR: PR = sqrt(PQ^2 + QR^2).",
    solution: "The correct answer is 17.",
    solutionSteps: [
      {
        explanation: "Apply Pythagoras' theorem to find the hypotenuse PR.",
        "workingOut": "PR^2 = PQ^2 + QR^2 = 15^2 + 8^2 = 225 + 64 = 289",
        graphData: null
      },
      {
        explanation: "Calculate the square root of 289.",
        "workingOut": "PR = \\sqrt{289} = 17",
        graphData: null
      }
    ]
  },
  // y9-2a-15b
  {
    id: "y9-2a-15b",
    question: "In triangle $PQR$, the angle at $Q$ is a right angle. The line $QS$ is drawn perpendicular to $PR$. $h$ is the length of $QS$.\nGiven $PQ = 15$ and $QR = 8$:\n\nFind the value of $h$ to 2 decimal places.",
    options: ["7.06", "7.25", "6.85", "7.12"],
    answerIndex: 0,
    hint: "Express the area of triangle PQR in two ways: using bases PQ and base PR.",
    solution: "The correct answer is 7.06.",
    solutionSteps: [
      {
        explanation: "Calculate the area using the shorter sides (PQ and QR).",
        "workingOut": "\\text{Area} = \\frac{1}{2} \\times PQ \\times QR = \\frac{1}{2} \\times 15 \\times 8 = 60",
        graphData: null
      },
      {
        explanation: "Express the area using base PR and height QS (h).",
        "workingOut": "\\text{Area} = \\frac{1}{2} \\times PR \\times h = \\frac{1}{2} \\times 17 \\times h = 8.5h",
        graphData: null
      },
      {
        explanation: "Equate the two areas and solve for h.",
        "workingOut": "8.5h = 60 \\Rightarrow h = \\frac{60}{8.5} = \\frac{120}{17} \\approx 7.0588 \\approx 7.06",
        graphData: null
      }
    ]
  },
  // y9-2a-15c
  {
    id: "y9-2a-15c",
    question: "In triangle $PQR$, the angle at $Q$ is a right angle. The line $QS$ is drawn perpendicular to $PR$. $x$ is the length of $RS$.\nGiven $PQ = 15$ and $QR = 8$:\n\nUse Pythagoras' theorem to find $x$ to 2 decimal places.",
    options: ["3.76", "3.95", "3.54", "3.82"],
    answerIndex: 0,
    hint: "Use Pythagoras' theorem in right-angled triangle QSR: x = sqrt(QR^2 - h^2).",
    solution: "The correct answer is 3.76.",
    solutionSteps: [
      {
        explanation: "Set up the Pythagoras formula in triangle QSR to find side RS (x).",
        "workingOut": "x^2 + h^2 = QR^2 \\Rightarrow x^2 + \\left(\\frac{120}{17}\\right)^2 = 8^2",
        graphData: null
      },
      {
        explanation: "Solve for x^2.",
        "workingOut": "x^2 = 64 - \\frac{14400}{289} = \\frac{18496 - 14400}{289} = \\frac{4096}{289}",
        graphData: null
      },
      {
        explanation: "Calculate the square root and round to 2 decimal places.",
        "workingOut": "x = \\frac{64}{17} \\approx 3.7647 \\approx 3.76",
        graphData: null
      }
    ]
  }
];

async function run() {
  const batch = db.batch();

  // 1. Delete original parent questions y9-2a-11 and y9-2a-15
  batch.delete(db.collection('questions').doc('y9-2a-11'));
  batch.delete(db.collection('questions').doc('y9-2a-15'));
  console.log('Queued deletion of y9-2a-11 and y9-2a-15');

  // 2. Add the subquestions
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
  console.log('\n✅ Successfully split y9-2a-11 and y9-2a-15 in Firebase!');
}

run().catch(console.error);
