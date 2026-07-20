import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const updatedSubQuestions = [
  {
    id: "y10-4g-q11a",
    type: "multiple_choice",
    question: "a) If \\(a = 7\\), find the length of \\(BC\\).",
    opts: ["2", "3", "4", "5"],
    options: ["2", "3", "4", "5"],
    a: 2,
    answer: 2,
    solutionSteps: [
      {
        explanation: "Identify the coordinates of B and C. With a = 7, point B is (3, 5) and point C is (7, 5).",
        workingOut: "B(3, 5), \\; C(7, 5)",
        graphData: null
      },
      {
        explanation: "Notice that both points share the same y-coordinate (5), meaning the segment BC is completely horizontal.",
        workingOut: "y_B = y_C = 5",
        graphData: null
      },
      {
        explanation: "Calculate the horizontal distance by subtracting their x-coordinates.",
        workingOut: "d = x_C - x_B = 7 - 3 = 4",
        graphData: null
      }
    ]
  },
  {
    id: "y10-4g-q11b_i",
    type: "multiple_choice",
    question: "b) i) Find, in terms of \\(a\\), the length \\(BC\\).",
    opts: ["a - 2", "a - 3", "a + 3", "3a"],
    options: ["a - 2", "a - 3", "a + 3", "3a"],
    a: 1,
    answer: 1,
    solutionSteps: [
      {
        explanation: "Points B and C are B(3, 5) and C(a, 5) which lie on the same horizontal line.",
        workingOut: "B(3, 5), \\; C(a, 5)",
        graphData: null
      },
      {
        explanation: "Since the line is horizontal and a > 3, the length is the difference of their x-coordinates.",
        workingOut: "\\text{Length} = x_C - x_B",
        graphData: null
      },
      {
        explanation: "Substitute the x-values to find the expression in terms of a.",
        workingOut: "\\text{Length} = a - 3",
        graphData: null
      }
    ]
  },
  {
    id: "y10-4g-q11b_ii",
    type: "multiple_choice",
    question: "b) ii) Write down the length of \\(AD\\) in terms of \\(a\\).",
    opts: ["a - 3", "a - 2", "a + 3", "2a"],
    options: ["a - 3", "a - 2", "a + 3", "2a"],
    a: 0,
    answer: 0,
    solutionSteps: [
      {
        explanation: "Recall the key property of a parallelogram: opposite sides are equal in length.",
        workingOut: "AD = BC",
        graphData: null
      },
      {
        explanation: "Since opposite sides are equal, side AD must have the exact same length as side BC.",
        workingOut: "BC = a - 3",
        graphData: null
      },
      {
        explanation: "State the final expression for the length of side AD.",
        workingOut: "AD = a - 3",
        graphData: null
      }
    ]
  },
  {
    id: "y10-4g-q11b_iii",
    type: "multiple_choice",
    question: "b) iii) Find the coordinates of \\(D\\) in terms of \\(a\\).",
    opts: ["(a, 2)", "(3, 2)", "(a-3, 5)", "(a-3, 2)"],
    options: ["(a, 2)", "(3, 2)", "(a-3, 5)", "(a-3, 2)"],
    a: 3,
    answer: 3,
    solutionSteps: [
      {
        explanation: "Point D lies on the horizontal segment AD starting from A(0, 2). Thus, the y-coordinate of D is 2.",
        workingOut: "y_D = 2",
        graphData: null
      },
      {
        explanation: "The segment AD has length a - 3, so point D's x-coordinate is shifted right from A(0, 2) by this length.",
        workingOut: "x_D = x_A + \\text{Length} = 0 + (a - 3)",
        graphData: null
      },
      {
        explanation: "Combine the coordinates to state the final position of D.",
        workingOut: "D(a - 3, 2)",
        graphData: null
      }
    ]
  }
];

(async () => {
  try {
    console.log('[Parallelogram Sub] Upgrading parallelogram sub-questions to MCQ with detailed solutions...');
    const ref = db.collection('questions').doc('y10-4g-q11');
    const doc = await ref.get();
    if (doc.exists) {
      await ref.update({
        subQuestions: updatedSubQuestions,
        type: "multiple_choice" // Set root type
      });
      console.log('Successfully migrated all subQuestions for y10-4g-q11.');
    } else {
      console.log('Error: Document not found.');
    }
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
