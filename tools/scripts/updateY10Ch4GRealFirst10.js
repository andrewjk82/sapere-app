import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const targets = {
  // 1
  "y10-4g-q1a": {
    question: "Find the distance between the pair of points: \\((8, 6)\\) and \\((0, 0)\\).",
    opts: ["\\(8\\)", "\\(12\\)", "\\(10\\)", "\\(14\\)"],
    a: 2,
    solutionSteps: [
      {
        explanation: "Recall the coordinate distance formula.",
        workingOut: "\\(d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}\\)",
        graphData: null
      },
      {
        explanation: "Substitute the points \\((8, 6)\\) and \\((0, 0)\\) into the formula.",
        workingOut: "\\(d = \\sqrt{(8 - 0)^2 + (6 - 0)^2}\\)",
        graphData: null
      },
      {
        explanation: "Evaluate the squares under the square root and solve.",
        workingOut: "\\(d = \\sqrt{64 + 36} = \\sqrt{100} = 10\\)",
        graphData: null
      }
    ]
  },
  // 2
  "y10-4g-q1b": {
    question: "Find the distance between the pair of points: \\((2, 1)\\) and \\((6, 4)\\).",
    opts: ["\\(5\\)", "\\(4\\)", "\\(6\\)", "\\(\\sqrt{17}\\)"],
    a: 0,
    solutionSteps: [
      {
        explanation: "Recall the coordinate distance formula.",
        workingOut: "\\(d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}\\)",
        graphData: null
      },
      {
        explanation: "Substitute the points \\((2, 1)\\) and \\((6, 4)\\) into the formula.",
        workingOut: "\\(d = \\sqrt{(6 - 2)^2 + (4 - 1)^2}\\)",
        graphData: null
      },
      {
        explanation: "Evaluate the squares under the square root and simplify to find the distance.",
        workingOut: "\\(d = \\sqrt{4^2 + 3^2} = \\sqrt{16 + 9} = \\sqrt{25} = 5\\)",
        graphData: null
      }
    ]
  },
  // 3
  "y10-4g-q1c": {
    question: "Find the distance between the pair of points: \\((-2, 1)\\) and \\((2, 4)\\).",
    opts: ["\\(\\sqrt{13}\\)", "\\(4\\)", "\\(\\sqrt{21}\\)", "\\(5\\)"],
    a: 3,
    solutionSteps: [
      {
        explanation: "Apply the coordinate distance formula.",
        workingOut: "\\(d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}\\)",
        graphData: null
      },
      {
        explanation: "Substitute the coordinate values of \\((-2, 1)\\) and \\((2, 4)\\).",
        workingOut: "\\(d = \\sqrt{(2 - (-2))^2 + (4 - 1)^2}\\)",
        graphData: null
      },
      {
        explanation: "Perform the arithmetic operations to solve for the final distance.",
        workingOut: "\\(d = \\sqrt{4^2 + 3^2} = \\sqrt{16 + 9} = \\sqrt{25} = 5\\)",
        graphData: null
      }
    ]
  },
  // 4
  "y10-4g-q1d": {
    question: "Find the distance between the pair of points: \\((-3, -2)\\) and \\((1, 1)\\).",
    opts: ["\\(4\\)", "\\(5\\)", "\\(\\sqrt{13}\\)", "\\(\\sqrt{23}\\)"],
    a: 1,
    solutionSteps: [
      {
        explanation: "Recall the coordinate distance formula.",
        workingOut: "\\(d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}\\)",
        graphData: null
      },
      {
        explanation: "Substitute the points \\((-3, -2)\\) and \\((1, 1)\\) into the formula.",
        workingOut: "\\(d = \\sqrt{(1 - (-3))^2 + (1 - (-2))^2}\\)",
        graphData: null
      },
      {
        explanation: "Simplify the values to find the exact distance.",
        workingOut: "\\(d = \\sqrt{4^2 + 3^2} = \\sqrt{16 + 9} = \\sqrt{25} = 5\\)",
        graphData: null
      }
    ]
  },
  // 5 (Duplicate check, ensure y10-4g-q2a matches)
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
  // 6 (Duplicate check, ensure y10-4g-q2b matches)
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
  },
  // 7
  "y10-4g-q3a": {
    question: "Find the gradient of the line that passes through the points: \\((8, 6)\\) and \\((0, 0)\\).",
    opts: ["\\(1.33\\)", "\\(-0.75\\)", "\\(-1.33\\)", "\\(0.75\\)"],
    a: 3,
    solutionSteps: [
      {
        explanation: "Recall the gradient formula.",
        workingOut: "\\(m = \\dfrac{y_2 - y_1}{x_2 - x_1}\\)",
        graphData: null
      },
      {
        explanation: "Substitute the points \\((8, 6)\\) and \\((0, 0)\\).",
        workingOut: "\\(m = \\dfrac{6 - 0}{8 - 0}\\)",
        graphData: null
      },
      {
        explanation: "Simplify the fraction to get the final gradient.",
        workingOut: "\\(m = \\dfrac{6}{8} = 0.75\\)",
        graphData: null
      }
    ]
  },
  // 8
  "y10-4g-q3b": {
    question: "Find the gradient of the line that passes through the points: \\((2, 1)\\) and \\((6, 5)\\).",
    opts: ["\\(1\\)", "\\(-1\\)", "\\(2\\)", "\\(-2\\)"],
    a: 0,
    solutionSteps: [
      {
        explanation: "Recall the gradient formula.",
        workingOut: "\\(m = \\dfrac{y_2 - y_1}{x_2 - x_1}\\)",
        graphData: null
      },
      {
        explanation: "Substitute the points \\((2, 1)\\) and \\((6, 5)\\).",
        workingOut: "\\(m = \\dfrac{5 - 1}{6 - 2}\\)",
        graphData: null
      },
      {
        explanation: "Simplify the fraction to get the final gradient.",
        workingOut: "\\(m = \\dfrac{4}{4} = 1\\)",
        graphData: null
      }
    ]
  },
  // 9
  "y10-4g-q3c": {
    question: "Find the gradient of the line that passes through the points: \\((-2, 1)\\) and \\((2, 5)\\).",
    opts: ["\\(-1\\)", "\\(0.5\\)", "\\(1\\)", "\\(2\\)"],
    a: 2,
    solutionSteps: [
      {
        explanation: "Apply the gradient formula.",
        workingOut: "\\(m = \\dfrac{y_2 - y_1}{x_2 - x_1}\\)",
        graphData: null
      },
      {
        explanation: "Substitute the points \\((-2, 1)\\) and \\((2, 5)\\).",
        workingOut: "\\(m = \\dfrac{5 - 1}{2 - (-2)}\\)",
        graphData: null
      },
      {
        explanation: "Simplify the result to find the gradient.",
        workingOut: "\\(m = \\dfrac{4}{4} = 1\\)",
        graphData: null
      }
    ]
  },
  // 10
  "y10-4g-q3d": {
    question: "Find the gradient of the line that passes through the points: \\((-4, -2)\\) and \\((0, 4)\\).",
    opts: ["\\(0.67\\)", "\\(1.5\\)", "\\(-1.5\\)", "\\(-0.67\\)"],
    a: 1,
    solutionSteps: [
      {
        explanation: "Recall the gradient formula.",
        workingOut: "\\(m = \\dfrac{y_2 - y_1}{x_2 - x_1}\\)",
        graphData: null
      },
      {
        explanation: "Substitute the points \\((-4, -2)\\) and \\((0, 4)\\) into the formula.",
        workingOut: "\\(m = \\dfrac{4 - (-2)}{0 - (-4)}\\)",
        graphData: null
      },
      {
        explanation: "Simplify the fraction to solve for the gradient.",
        workingOut: "\\(m = \\dfrac{6}{4} = 1.5\\)",
        graphData: null
      }
    ]
  }
};

(async () => {
  try {
    console.log('[Y10 Ch4G Real First 10] Migrating actual 10 questions to MCQ with dispersed answers...');
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
        console.log(`  [MIGRATED] ${docId} -> Answer Index: ${update.a}`);
        success++;
      }
    }

    console.log(`\nSuccessfully updated and shuffed all ${success} questions for Year 10 Chapter 4G.`);
    process.exit(0);
  } catch (err) {
    console.error('Fatal error during update:', err);
    process.exit(1);
  }
})();
