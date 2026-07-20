import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// Helper to shuffle options and return new array with correct index
function shuffleOptions(opts, correctVal) {
  const arr = [...opts];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  const idx = arr.indexOf(correctVal);
  return { options: arr, answer: String(idx) };
}

async function run() {
  const batch = db.batch();
  const questionsCol = db.collection('questions');

  // 1. y9-5a-4 (Detailed 2-step solutions for sub-questions)
  batch.update(questionsCol.doc('y9-5a-4'), {
    subQuestions: [
      {
        id: "y9-5a-4a",
        type: "multiple_choice",
        question: "a) If \\(w\\) metres is the width of the rectangle, express the length of the rectangle in terms of \\(w\\).",
        ...shuffleOptions(["\\(w - 6\\)", "\\(w + 6\\)", "\\(6w\\)", "\\(6 - w\\)"], "\\(w + 6\\)"),
        solutionSteps: [
          {
            explanation: "Identify the base variable: Let the width of the rectangle be \\(w\\) metres.",
            workingOut: "\\(\\text{Width} = w\\)"
          },
          {
            explanation: "Translate '6 metres more than its width' into a mathematical expression: add \\(6\\) to the width \\(w\\).",
            workingOut: "\\(\\text{Length} = w + 6\\)"
          }
        ],
        graphData: null
      },
      {
        id: "y9-5a-4b",
        type: "multiple_choice",
        question: "b) If \\(l\\) metres is the length of the rectangle, express the width of the rectangle in terms of \\(l\\).",
        ...shuffleOptions(["\\(l - 6\\)", "\\(l + 6\\)", "\\(6l\\)", "\\(6 - l\\)"], "\\(l - 6\\)"),
        solutionSteps: [
          {
            explanation: "Start with the equation representing that length \\(l\\) is \\(6\\) more than width \\(w\\): \\(l = w + 6\\).",
            workingOut: "\\(l = w + 6\\)"
          },
          {
            explanation: "Rearrange the equation to isolate the width \\(w\\) by subtracting \\(6\\) from both sides.",
            workingOut: "\\(w = l - 6\\)"
          }
        ],
        graphData: null
      }
    ]
  });

  // 2. y9-5a-5 (Detailed 2-step solutions for sub-questions)
  batch.update(questionsCol.doc('y9-5a-5'), {
    subQuestions: [
      {
        id: "y9-5a-5a",
        type: "multiple_choice",
        question: "a) Express the number of points Alice scored in terms of \\(b\\).",
        ...shuffleOptions(["\\(b - 15\\)", "\\(b + 15\\)", "\\(15b\\)", "\\(15 - b\\)"], "\\(b + 15\\)"),
        solutionSteps: [
          {
            explanation: "Identify the base variable: Bob's score is represented by \\(b\\) points.",
            workingOut: "\\(\\text{Bob's Score} = b\\)"
          },
          {
            explanation: "Translate 'Alice scored 15 points more than Bob' into a mathematical expression: add \\(15\\) to Bob's score.",
            workingOut: "\\(\\text{Alice's Score} = b + 15\\)"
          }
        ],
        graphData: null
      },
      {
        id: "y9-5a-5b",
        type: "multiple_choice",
        question: "b) Express the number of points Charlie scored in terms of \\(b\\).",
        ...shuffleOptions(["\\(2b + 4\\)", "\\(2b - 4\\)", "\\(4 - 2b\\)", "\\(4b - 2\\)"], "\\(2b - 4\\)"),
        solutionSteps: [
          {
            explanation: "First, express twice Bob's score as \\(2 \\times b = 2b\\).",
            workingOut: "\\(\\text{Twice Bob's Score} = 2b\\)"
          },
          {
            explanation: "Translate 'Charlie scored 4 points less than twice Bob's score': subtract \\(4\\) from \\(2b\\).",
            workingOut: "\\(\\text{Charlie's Score} = 2b - 4\\)"
          }
        ],
        graphData: null
      }
    ]
  });

  // 3. y9-5a-7 (Detailed 2-step solutions for sub-questions)
  batch.update(questionsCol.doc('y9-5a-7'), {
    subQuestions: [
      {
        id: "y9-5a-7a",
        type: "multiple_choice",
        question: "a) Find an expression for his average running speed in terms of \\(x\\).",
        ...shuffleOptions(["\\(x + 4\\)", "\\(x - 4\\)", "\\(4x\\)", "\\(4 - x\\)"], "\\(4x\\)"),
        solutionSteps: [
          {
            explanation: "Identify the base variable: Liam's average swimming speed is \\(x\\) km/h.",
            workingOut: "\\(\\text{Swimming Speed} = x\\)"
          },
          {
            explanation: "Translate 'running speed was 4 times swimming speed': multiply swimming speed \\(x\\) by \\(4\\).",
            workingOut: "\\(\\text{Running Speed} = 4x\\)"
          }
        ],
        graphData: null
      },
      {
        id: "y9-5a-7b",
        type: "multiple_choice",
        question: "b) Find an expression for his average cycling speed in terms of \\(x\\).",
        ...shuffleOptions(["\\(12x - 5\\)", "\\(12x + 5\\)", "\\(3x + 5\\)", "\\(4x + 5\\)"], "\\(12x + 5\\)"),
        solutionSteps: [
          {
            explanation: "Calculate running speed multiplied by \\(3\\): \\(3 \\times 4x = 12x\\).",
            workingOut: "\\(3 \\times \\text{Running Speed} = 12x\\)"
          },
          {
            explanation: "Translate 'this number was 5 less than cycling speed (C)': \\(12x = C - 5\\). Rearrange to solve for cycling speed \\(C\\) by adding \\(5\\) to both sides.",
            workingOut: "\\(C = 12x + 5\\)"
          }
        ],
        graphData: null
      }
    ]
  });

  // Update sync version
  const questionsMetaRef = db.doc('sync_meta/questions');
  const now = Date.now();
  batch.update(questionsMetaRef, {
    version: now,
    membershipVersion: now,
    updatedAt: FieldValue.serverTimestamp()
  });

  await batch.commit();
  console.log('Successfully completed detailed step expansion for all subQuestions in Year 9 Chapter 5a!');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
