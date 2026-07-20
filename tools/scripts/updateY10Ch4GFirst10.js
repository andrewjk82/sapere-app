import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const targets = {
  // Q1
  "y10-4g-q1a_i": {
    question: "Find the distance between the points \\((1, 2)\\) and \\((4, 6)\\).",
    opts: ["\\(4\\)", "\\(\\sqrt{13}\\)", "\\(5\\)", "\\(\\sqrt{17}\\)"],
    a: 2,
    solutionSteps: [
      {
        explanation: "Write down the coordinate distance formula.",
        workingOut: "\\(d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}\\)",
        graphData: null
      },
      {
        explanation: "Substitute the given points \\((1, 2)\\) and \\((4, 6)\\) into the formula.",
        workingOut: "\\(d = \\sqrt{(4 - 1)^2 + (6 - 2)^2}\\)",
        graphData: null
      },
      {
        explanation: "Evaluate the squares and simplify the radical.",
        workingOut: "\\(d = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5\\)",
        graphData: null
      }
    ]
  },
  // Q2
  "y10-4g-q1a_ii": {
    question: "Find the midpoint of the line segment joining \\((1, 2)\\) and \\((4, 6)\\).",
    opts: ["(2.5, 4)", "(3, 4)", "(2.5, 3.5)", "(3, 4.5)"],
    a: 0,
    solutionSteps: [
      {
        explanation: "Write down the coordinate midpoint formula.",
        workingOut: "\\(M = \\left( \\dfrac{x_1 + x_2}{2}, \\; \\dfrac{y_1 + y_2}{2} \\right)\\)",
        graphData: null
      },
      {
        explanation: "Substitute the coordinates \\((1, 2)\\) and \\((4, 6)\\) into the formula.",
        workingOut: "\\(M = \\left( \\dfrac{1 + 4}{2}, \\; \\dfrac{2 + 6}{2} \\right)\\)",
        graphData: null
      },
      {
        explanation: "Calculate the average values for both coordinates.",
        workingOut: "\\(M = \\left( \\dfrac{5}{2}, \\; \\dfrac{8}{2} \\right) = (2.5, 4)\\)",
        graphData: null
      }
    ]
  },
  // Q3
  "y10-4g-q1b_i": {
    question: "Find the distance between the points \\((-2, 5)\\) and \\((4, -3)\\).",
    opts: ["\\(8\\)", "\\(2\\sqrt{10}\\)", "\\(6\\)", "\\(10\\)"],
    a: 3,
    solutionSteps: [
      {
        explanation: "Write down the distance formula.",
        workingOut: "\\(d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}\\)",
        graphData: null
      },
      {
        explanation: "Substitute the coordinate values of \\((-2, 5)\\) and \\((4, -3)\\).",
        workingOut: "\\(d = \\sqrt{(4 - (-2))^2 + (-3 - 5)^2}\\)",
        graphData: null
      },
      {
        explanation: "Evaluate the squares under the square root and simplify.",
        workingOut: "\\(d = \\sqrt{6^2 + (-8)^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10\\)",
        graphData: null
      }
    ]
  },
  // Q4
  "y10-4g-q1b_ii": {
    question: "Find the midpoint of the line segment joining \\((-2, 5)\\) and \\((4, -3)\\).",
    opts: ["(2, 1)", "(1, 1)", "(1, 2)", "(0.5, 1)"],
    a: 1,
    solutionSteps: [
      {
        explanation: "Write down the midpoint formula.",
        workingOut: "\\(M = \\left( \\dfrac{x_1 + x_2}{2}, \\; \\dfrac{y_1 + y_2}{2} \\right)\\)",
        graphData: null
      },
      {
        explanation: "Substitute the coordinate points \\((-2, 5)\\) and \\((4, -3)\\).",
        workingOut: "\\(M = \\left( \\dfrac{-2 + 4}{2}, \\; \\dfrac{5 + (-3)}{2} \\right)\\)",
        graphData: null
      },
      {
        explanation: "Simplify the fractions to solve for the midpoint coordinates.",
        workingOut: "\\(M = \\left( \\dfrac{2}{2}, \\; \\dfrac{2}{2} \\right) = (1, 1)\\)",
        graphData: null
      }
    ]
  },
  // Q5
  "y10-4g-q1c_i": {
    question: "Find the distance between the points \\((-1, -3)\\) and \\((2, 5)\\).",
    opts: ["\\(5\\)", "\\(\\sqrt{65}\\)", "\\(\\sqrt{73}\\)", "\\(9\\)"],
    a: 2,
    solutionSteps: [
      {
        explanation: "Apply the distance formula to compute the length of the segment.",
        workingOut: "\\(d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}\\)",
        graphData: null
      },
      {
        explanation: "Substitute the coordinate points \\((-1, -3)\\) and \\((2, 5)\\).",
        workingOut: "\\(d = \\sqrt{(2 - (-1))^2 + (5 - (-3))^2}\\)",
        graphData: null
      },
      {
        explanation: "Simplify the arithmetic calculations to find the exact surd value.",
        workingOut: "\\(d = \\sqrt{3^2 + 8^2} = \\sqrt{9 + 64} = \\sqrt{73}\\)",
        graphData: null
      }
    ]
  },
  // Q6
  "y10-4g-q1c_ii": {
    question: "Find the midpoint of the line segment joining \\((-1, -3)\\) and \\((2, 5)\\).",
    opts: ["(1, 1)", "(0.5, 1.5)", "(0, 1)", "(0.5, 1)"],
    a: 3,
    solutionSteps: [
      {
        explanation: "Write down the midpoint formula.",
        workingOut: "\\(M = \\left( \\dfrac{x_1 + x_2}{2}, \\; \\dfrac{y_1 + y_2}{2} \\right)\\)",
        graphData: null
      },
      {
        explanation: "Substitute the coordinates \\((-1, -3)\\) and \\((2, 5)\\).",
        workingOut: "\\(M = \\left( \\dfrac{-1 + 2}{2}, \\; \\dfrac{-3 + 5}{2} \\right)\\)",
        graphData: null
      },
      {
        explanation: "Calculate the average values for both coordinates.",
        workingOut: "\\(M = \\left( \\dfrac{1}{2}, \\; \\dfrac{2}{2} \\right) = (0.5, 1)\\)",
        graphData: null
      }
    ]
  },
  // Q7
  "y10-4g-q1d_i": {
    question: "Find the distance between the points \\((-4, -2)\\) and \\((-1, 3)\\).",
    opts: ["\\(\\sqrt{30}\\)", "\\(\\sqrt{34}\\)", "\\(6\\)", "\\(\\sqrt{26}\\)"],
    a: 1,
    solutionSteps: [
      {
        explanation: "Set up the distance formula.",
        workingOut: "\\(d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}\\)",
        graphData: null
      },
      {
        explanation: "Substitute the coordinates \\((-4, -2)\\) and \\((-1, 3)\\).",
        workingOut: "\\(d = \\sqrt{(-1 - (-4))^2 + (3 - (-2))^2}\\)",
        graphData: null
      },
      {
        explanation: "Evaluate the squared differences and sum them to obtain the exact distance.",
        workingOut: "\\(d = \\sqrt{3^2 + 5^2} = \\sqrt{9 + 25} = \\sqrt{34}\\)",
        graphData: null
      }
    ]
  },
  // Q8
  "y10-4g-q1d_ii": {
    question: "Find the midpoint of the line segment joining \\((-4, -2)\\) and \\((-1, 3)\\).",
    opts: ["(-2.5, 0.5)", "(-2.5, 1)", "(-3, 0.5)", "(-2, 0.5)"],
    a: 0,
    solutionSteps: [
      {
        explanation: "State the midpoint formula.",
        workingOut: "\\(M = \\left( \\dfrac{x_1 + x_2}{2}, \\; \\dfrac{y_1 + y_2}{2} \\right)\\)",
        graphData: null
      },
      {
        explanation: "Substitute the points \\((-4, -2)\\) and \\((-1, 3)\\).",
        workingOut: "\\(M = \\left( \\dfrac{-4 + (-1)}{2}, \\; \\dfrac{-2 + 3}{2} \\right)\\)",
        graphData: null
      },
      {
        explanation: "Simplify the results into decimal coordinate representation.",
        workingOut: "\\(M = \\left( \\dfrac{-5}{2}, \\; \\dfrac{1}{2} \\right) = (-2.5, 0.5)\\)",
        graphData: null
      }
    ]
  },
  // Q9
  "y10-4g-q2a": {
    question: "Find the gradient of the line passing through: \\((1, 3)\\) and \\((4, 9)\\).",
    opts: ["\\(\\dfrac{1}{2}\\)", "\\(-2\\)", "\\(2\\)", "\\(3\\)"],
    a: 2,
    solutionSteps: [
      {
        explanation: "State the gradient formula.",
        workingOut: "\\(m = \\dfrac{y_2 - y_1}{x_2 - x_1}\\)",
        graphData: null
      },
      {
        explanation: "Substitute the given coordinates \\((1, 3)\\) and \\((4, 9)\\).",
        workingOut: "\\(m = \\dfrac{9 - 3}{4 - 1}\\)",
        graphData: null
      },
      {
        explanation: "Divide the differences to solve for the gradient m.",
        workingOut: "\\(m = \\dfrac{6}{3} = 2\\)",
        graphData: null
      }
    ]
  },
  // Q10
  "y10-4g-q2b": {
    question: "Find the gradient of the line passing through: \\((-2, 5)\\) and \\((1, -1)\\).",
    opts: ["\\(2\\)", "\\(-2\\)", "\\(\\dfrac{1}{2}\\)", "\\(-\\dfrac{1}{2}\\)"],
    a: 1,
    solutionSteps: [
      {
        explanation: "State the gradient formula.",
        workingOut: "\\(m = \\dfrac{y_2 - y_1}{x_2 - x_1}\\)",
        graphData: null
      },
      {
        explanation: "Substitute the coordinate values of \\((-2, 5)\\) and \\((1, -1)\\).",
        workingOut: "\\(m = \\dfrac{-1 - 5}{1 - (-2)}\\)",
        graphData: null
      },
      {
        explanation: "Perform the arithmetic division to find the gradient.",
        workingOut: "\\(m = \\dfrac{-6}{3} = -2\\)",
        graphData: null
      }
    ]
  }
};

(async () => {
  try {
    console.log('[Y10 Ch4G First 10] Migrating first 10 revision questions to MCQ with dispersed answers...');
    let success = 0;

    for (const [docId, update] of Object.entries(targets)) {
      const ref = db.collection('questions').doc(docId);
      const doc = await ref.get();
      if (doc.exists) {
        await ref.update({
          type: "multiple_choice",
          question: update.question,
          opts: update.opts,
          options: update.opts,
          a: update.a,
          answer: update.a,
          solutionSteps: update.solutionSteps,
          isNew: true,
          solution: null
        });
        console.log(`  [UPDATED & SHUFFLED] ${docId}`);
        success++;
      }
    }

    console.log(`\nSuccessfully updated and shuffed first 10 questions for Year 10 Chapter 4G.`);
    process.exit(0);
  } catch (err) {
    console.error('Fatal error during update:', err);
    process.exit(1);
  }
})();
