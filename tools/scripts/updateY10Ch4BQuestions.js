import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const targets = {
  // Q1
  "4uVhKtVz1aX0GaZ3lWKP": {
    question: "Find the gradient of the line passing through \\((2, -1)\\) and \\((5, 5)\\).",
    opts: ["\\(2\\)", "\\(\\dfrac{1}{2}\\)", "\\(-2\\)", "\\(3\\)"],
    a: 0,
    solutionSteps: [
      {
        explanation: "To find the gradient (slope) of a line passing through two coordinates, we use the gradient formula.",
        workingOut: "\\(m = \\dfrac{y_2 - y_1}{x_2 - x_1}\\)",
        graphData: null
      },
      {
        explanation: "Substitute the points \\((2, -1)\\) and \\((5, 5)\\) into the formula.",
        workingOut: "\\(m = \\dfrac{5 - (-1)}{5 - 2}\\)",
        graphData: null
      },
      {
        explanation: "Simplify the numerator and denominator to compute the final gradient.",
        workingOut: "\\(m = \\dfrac{6}{3} = 2\\)",
        graphData: null
      }
    ]
  },
  // Q2 (Collinear)
  "L78zWhgSGVV9J9H7fdnn": {
    question: "Given the collinear points \\(A(3, 2)\\), \\(B(5, 10)\\), and \\(C(p, 6)\\), find the value of \\(p\\).",
    opts: ["\\(4\\)", "\\(3\\)", "\\(4.5\\)", "\\(-4\\)"],
    a: 0,
    solutionSteps: [
      {
        explanation: "Collinear points lie on the same straight line, which means the gradient between any two points must be equal.",
        workingOut: "\\(m_{AB} = m_{AC}\\)",
        graphData: null
      },
      {
        explanation: "Calculate the gradient \\(m_{AB}\\) using coordinates \\(A(3, 2)\\) and \\(B(5, 10)\\).",
        workingOut: "\\(m_{AB} = \\dfrac{10 - 2}{5 - 3} = \\dfrac{8}{2} = 4\\)",
        graphData: null
      },
      {
        explanation: "Set the gradient of \\(AC\\) equal to 4 and solve for the unknown parameter \\(p\\).",
        workingOut: "\\(\\dfrac{6 - 2}{p - 3} = 4 \\;\\Rightarrow\\; \\dfrac{4}{p - 3} = 4 \\;\\Rightarrow\\; p - 3 = 1 \\;\\Rightarrow\\; p = 4\\)",
        graphData: null
      }
    ]
  },
  // Q3
  "P77Io4HuFCespqUjOJSj": {
    question: "Find the gradient of a line that is parallel to the line passing through \\((-2, 4)\\) and \\((4, 1)\\).",
    opts: ["\\(-0.5\\)", "\\(0.5\\)", "\\(-2\\)", "\\(2\\)"],
    a: 0,
    solutionSteps: [
      {
        explanation: "Parallel lines have the same gradient. Our strategy is to find the gradient of the line passing through the points \\((-2, 4)\\) and \\((4, 1)\\).",
        workingOut: "\\(m_1 = m_2\\)",
        graphData: null
      },
      {
        explanation: "Calculate the gradient of the given line using the gradient formula.",
        workingOut: "\\(m = \\dfrac{1 - 4}{4 - (-2)} = \\dfrac{-3}{6} = -0.5\\)",
        graphData: null
      },
      {
        explanation: "Since the required line is parallel to the given line, it shares the exact same gradient.",
        workingOut: "\\(\\text{Parallel gradient} = -0.5\\)",
        graphData: null
      }
    ]
  },
  // Q4
  "Q0PtYieRt8KDwinU7HQi": {
    question: "Given \\(A(5, -2)\\) and \\(B(3, 4)\\), find the gradient of \\(AB\\).",
    opts: ["\\(3\\)", "\\(-3\\)", "\\(-\\dfrac{1}{3}\\)", "\\(\\dfrac{1}{3}\\)"],
    a: 1,
    solutionSteps: [
      {
        explanation: "To find the gradient of the interval \\(AB\\), we substitute the coordinate values into the gradient formula.",
        workingOut: "\\(m = \\dfrac{y_2 - y_1}{x_2 - x_1}\\)",
        graphData: null
      },
      {
        explanation: "Substitute the coordinates \\(A(5, -2)\\) and \\(B(3, 4)\\) into the formula.",
        workingOut: "\\(m = \\dfrac{4 - (-2)}{3 - 5} = \\dfrac{6}{-2}\\)",
        graphData: null
      },
      {
        explanation: "Simplify the division to obtain the final gradient value.",
        workingOut: "\\(m = -3\\)",
        graphData: null
      }
    ]
  },
  // Q5 (Duplicate of Q3)
  "RFAD62SNPkds18V2yUOv": {
    question: "Find the gradient of a line that is parallel to the line passing through \\((-2, 4)\\) and \\((4, 1)\\).",
    opts: ["\\(-0.5\\)", "\\(0.5\\)", "\\(-2\\)", "\\(2\\)"],
    a: 0,
    solutionSteps: [
      {
        explanation: "Parallel lines have the same gradient. Our strategy is to find the gradient of the line passing through the points \\((-2, 4)\\) and \\((4, 1)\\).",
        workingOut: "\\(m_1 = m_2\\)",
        graphData: null
      },
      {
        explanation: "Calculate the gradient of the given line using the gradient formula.",
        workingOut: "\\(m = \\dfrac{1 - 4}{4 - (-2)} = \\dfrac{-3}{6} = -0.5\\)",
        graphData: null
      },
      {
        explanation: "Since the required line is parallel to the given line, it shares the exact same gradient.",
        workingOut: "\\(\\text{Parallel gradient} = -0.5\\)",
        graphData: null
      }
    ]
  },
  // Q6
  "Y709epB9L7BVLeyIw4DK": {
    question: "Find the gradient of the line with equation \\(5x + 2y = 10\\).",
    opts: ["\\(-2.5\\)", "\\(2.5\\)", "\\(-5\\)", "\\(5\\)"],
    a: 0,
    solutionSteps: [
      {
        explanation: "We rewrite the linear equation in gradient-intercept form (y = mx + c), where m represents the gradient of the line.",
        workingOut: "\\(5x + 2y = 10\\)",
        graphData: null
      },
      {
        explanation: "Isolate the term containing y on the left side of the equation.",
        workingOut: "\\(2y = -5x + 10\\)",
        graphData: null
      },
      {
        explanation: "Divide both sides of the equation by 2 to solve for y in terms of x.",
        workingOut: "\\(y = -\\dfrac{5}{2}x + 5 = -2.5x + 5\\)",
        graphData: null
      },
      {
        explanation: "Identify the coefficient of x, which corresponds to the gradient.",
        workingOut: "\\(m = -2.5\\)",
        graphData: null
      }
    ]
  },
  // Q7 (Duplicate of Q1)
  "YMJJAIr2s3EnT4fLDqoV": {
    question: "Find the gradient of the line passing through \\((2, -1)\\) and \\((5, 5)\\).",
    opts: ["\\(2\\)", "\\(\\dfrac{1}{2}\\)", "\\(-2\\)", "\\(3\\)"],
    a: 0,
    solutionSteps: [
      {
        explanation: "To find the gradient (slope) of a line passing through two coordinates, we use the gradient formula.",
        workingOut: "\\(m = \\dfrac{y_2 - y_1}{x_2 - x_1}\\)",
        graphData: null
      },
      {
        explanation: "Substitute the points \\((2, -1)\\) and \\((5, 5)\\) into the formula.",
        workingOut: "\\(m = \\dfrac{5 - (-1)}{5 - 2}\\)",
        graphData: null
      },
      {
        explanation: "Simplify the numerator and denominator to compute the final gradient.",
        workingOut: "\\(m = \\dfrac{6}{3} = 2\\)",
        graphData: null
      }
    ]
  },
  // Q8
  "cmVepyAqurGhBGGrtjTH": {
    question: "Find the gradient of the line passing through \\((0, 4)\\) and \\((2, 0)\\).",
    opts: ["\\(-2\\)", "\\(2\\)", "\\(0\\)", "\\(\\text{Undefined}\\)"],
    a: 0,
    solutionSteps: [
      {
        explanation: "To find the gradient, we use the standard gradient formula for the two given coordinate points.",
        workingOut: "\\(m = \\dfrac{y_2 - y_1}{x_2 - x_1}\\)",
        graphData: null
      },
      {
        explanation: "Substitute the coordinates \\((0, 4)\\) and \\((2, 0)\\) into the equation.",
        workingOut: "\\(m = \\dfrac{0 - 4}{2 - 0}\\)",
        graphData: null
      },
      {
        explanation: "Simplify the fractions to solve for the final gradient.",
        workingOut: "\\(m = \\dfrac{-4}{2} = -2\\)",
        graphData: null
      }
    ]
  },
  // Q9 (Duplicate of Q8)
  "k8ssSgmjzElvtd9BfYDC": {
    question: "Find the gradient of the line passing through \\((0, 4)\\) and \\((2, 0)\\).",
    opts: ["\\(-2\\)", "\\(2\\)", "\\(0\\)", "\\(\\text{Undefined}\\)"],
    a: 0,
    solutionSteps: [
      {
        explanation: "To find the gradient, we use the standard gradient formula for the two given coordinate points.",
        workingOut: "\\(m = \\dfrac{y_2 - y_1}{x_2 - x_1}\\)",
        graphData: null
      },
      {
        explanation: "Substitute the coordinates \\((0, 4)\\) and \\((2, 0)\\) into the equation.",
        workingOut: "\\(m = \\dfrac{0 - 4}{2 - 0}\\)",
        graphData: null
      },
      {
        explanation: "Simplify the fractions to solve for the final gradient.",
        workingOut: "\\(m = \\dfrac{-4}{2} = -2\\)",
        graphData: null
      }
    ]
  },
  // Q10 (Collinear)
  "n7QcD5uQCCk8TN856vh7": {
    question: "Given the collinear points \\(A(2, 3)\\), \\(B(4, 11)\\), and \\(C(p, 9)\\), find the value of \\(p\\).",
    opts: ["\\(3.5\\)", "\\(3\\)", "\\(4.5\\)", "\\(2.5\\)"],
    a: 0,
    solutionSteps: [
      {
        explanation: "Since the three points are collinear, they lie on a single straight line. Thus, the gradient between A and B must equal the gradient between A and C.",
        workingOut: "\\(m_{AB} = m_{AC}\\)",
        graphData: null
      },
      {
        explanation: "Find the gradient \\(m_{AB}\\) using the coordinates \\(A(2, 3)\\) and \\(B(4, 11)\\).",
        workingOut: "\\(m_{AB} = \\dfrac{11 - 3}{4 - 2} = \\dfrac{8}{2} = 4\\)",
        graphData: null
      },
      {
        explanation: "Equate the gradient of AC to 4 and solve for the variable p.",
        workingOut: "\\(\\dfrac{9 - 3}{p - 2} = 4 \\;\\Rightarrow\\; \\dfrac{6}{p - 2} = 4 \\;\\Rightarrow\\; p - 2 = 1.5 \\;\\Rightarrow\\; p = 3.5\\)",
        graphData: null
      }
    ]
  },
  // Q11
  "pYKkC6zTdHrWOq0wEU2g": {
    question: "Find the gradient of the line that is perpendicular to the line with gradient \\(m = \\dfrac{2}{3}\\).",
    opts: ["\\(-\\dfrac{3}{2}\\)", "\\(\\dfrac{3}{2}\\)", "\\(-\\dfrac{2}{3}\\)", "\\(\\dfrac{2}{3}\\)"],
    a: 0,
    solutionSteps: [
      {
        explanation: "Two non-vertical lines are perpendicular if the product of their gradients is equal to -1.",
        workingOut: "\\(m_1 \\times m_2 = -1\\)",
        graphData: null
      },
      {
        explanation: "To find the perpendicular gradient, we calculate the negative reciprocal of the given gradient.",
        workingOut: "\\(m_{\\perp} = -\\dfrac{1}{m}\\)",
        graphData: null
      },
      {
        explanation: "Substitute the given gradient \\(m = \\dfrac{2}{3}\\) into the reciprocal formula.",
        workingOut: "\\(m_{\\perp} = -\\dfrac{1}{2/3} = -\\dfrac{3}{2}\\)",
        graphData: null
      }
    ]
  },
  // Q12 (Duplicate of Q6)
  "rQiowezFppVzeeGc97Kp": {
    question: "Find the gradient of the line with equation \\(5x + 2y = 10\\).",
    opts: ["\\(-2.5\\)", "\\(2.5\\)", "\\(-5\\)", "\\(5\\)"],
    a: 0,
    solutionSteps: [
      {
        explanation: "We rewrite the linear equation in gradient-intercept form (y = mx + c), where m represents the gradient of the line.",
        workingOut: "\\(5x + 2y = 10\\)",
        graphData: null
      },
      {
        explanation: "Isolate the term containing y on the left side of the equation.",
        workingOut: "\\(2y = -5x + 10\\)",
        graphData: null
      },
      {
        explanation: "Divide both sides of the equation by 2 to solve for y in terms of x.",
        workingOut: "\\(y = -\\dfrac{5}{2}x + 5 = -2.5x + 5\\)",
        graphData: null
      },
      {
        explanation: "Identify the coefficient of x, which corresponds to the gradient.",
        workingOut: "\\(m = -2.5\\)",
        graphData: null
      }
    ]
  },
  // Q13 (Duplicate of Q11)
  "xf34iFkj4HMvxlKlBDcs": {
    question: "Find the gradient of the line that is perpendicular to the line with gradient \\(m = \\dfrac{2}{3}\\).",
    opts: ["\\(-\\dfrac{3}{2}\\)", "\\(\\dfrac{3}{2}\\)", "\\(-\\dfrac{2}{3}\\)", "\\(\\dfrac{2}{3}\\)"],
    a: 0,
    solutionSteps: [
      {
        explanation: "Two non-vertical lines are perpendicular if the product of their gradients is equal to -1.",
        workingOut: "\\(m_1 \\times m_2 = -1\\)",
        graphData: null
      },
      {
        explanation: "To find the perpendicular gradient, we calculate the negative reciprocal of the given gradient.",
        workingOut: "\\(m_{\\perp} = -\\dfrac{1}{m}\\)",
        graphData: null
      },
      {
        explanation: "Substitute the given gradient \\(m = \\dfrac{2}{3}\\) into the reciprocal formula.",
        workingOut: "\\(m_{\\perp} = -\\dfrac{1}{2/3} = -\\dfrac{3}{2}\\)",
        graphData: null
      }
    ]
  }
};

(async () => {
  try {
    console.log('[Y10 Ch4B Questions] Synchronizing database entries...');
    let updatedCount = 0;

    for (const [docId, updateData] of Object.entries(targets)) {
      const ref = db.collection('questions').doc(docId);
      const doc = await ref.get();

      if (doc.exists) {
        const currentData = doc.data();

        const updatedDoc = {
          ...currentData,
          type: "multiple_choice",
          question: updateData.question,
          opts: updateData.opts,
          options: updateData.opts, // SYNC options and opts
          a: updateData.a,
          answer: updateData.a,     // SYNC a and answer
          solutionSteps: updateData.solutionSteps,
          isNew: true,
          solution: null
        };

        // Self-Verification Check
        if (updateData.opts[updateData.a] !== updatedDoc.options[updateData.a]) {
          throw new Error(`Self-Verification Failed: Options/Opts mismatch for doc ${docId}`);
        }
        
        // Ensure no Index reference in the last step workingOut
        const lastStepWorkingOut = updateData.solutionSteps[updateData.solutionSteps.length - 1].workingOut;
        if (lastStepWorkingOut.toLowerCase().includes("index") || lastStepWorkingOut.toLowerCase().includes("option")) {
          throw new Error(`Self-Verification Failed: Last step workingOut contains forbidden index references in doc ${docId}`);
        }

        await ref.set(updatedDoc);
        console.log(`  [UPDATED] Doc ID: ${docId}`);
        updatedCount++;
      } else {
        console.log(`  [WARNING] Doc ID: ${docId} not found in Firestore.`);
      }
    }

    console.log(`\nSuccessfully updated and verified all ${updatedCount} questions for Year 10 Chapter 4B.`);
    process.exit(0);
  } catch (err) {
    console.error('Fatal error during update/verification:', err.message);
    process.exit(1);
  }
})();
