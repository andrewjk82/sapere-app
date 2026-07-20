import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const targets = {
  // Q1
  "3nfoUmpPlW1JyBj7Be7x": {
    question: "Convert the equation \\(y = 3x - 4\\) into general form \\(ax + by + c = 0\\).",
    opts: [
      "\\(3x - y - 4 = 0\\)", // Correct (Index 0)
      "\\(3x + y - 4 = 0\\)",
      "\\(x - 3y + 4 = 0\\)",
      "\\(3x - y + 4 = 0\\)"
    ],
    a: 0,
    solutionSteps: [
      {
        explanation: "The general form of a linear equation is represented as ax + by + c = 0, where a, b, and c are integers, and a is usually positive.",
        workingOut: "\\(y = 3x - 4\\)",
        graphData: null
      },
      {
        explanation: "To rearrange the equation into this form, subtract y from both sides to group all terms on the right-hand side.",
        workingOut: "\\(0 = 3x - y - 4\\)",
        graphData: null
      },
      {
        explanation: "Rewrite the expression with the variables on the left to obtain the standard general form.",
        workingOut: "\\(3x - y - 4 = 0\\)",
        graphData: null
      }
    ]
  },
  // Q2
  "6ADiAbVnmHpor7amzQcz": {
    question: "Are the points \\(A(2, 5)\\), \\(B(-3, 0)\\), and \\(C(3, 4)\\) the vertices of a right-angled triangle?",
    opts: [
      "Yes, because \\(m_1 \\times m_2 = -1\\)", // Correct (Index 0)
      "No, all gradients are positive",
      "Yes, because all sides are equal",
      "No, they are collinear"
    ],
    a: 0,
    solutionSteps: [
      {
        explanation: "To determine if the points form a right-angled triangle, we check if any two sides are perpendicular. This happens if the product of their gradients is equal to -1.",
        workingOut: "\\(m_1 \\times m_2 = -1\\)",
        graphData: null
      },
      {
        explanation: "Calculate the gradient of side AB and side AC using the gradient formula.",
        workingOut: "\\(m_{AB} = \\dfrac{0 - 5}{-3 - 2} = 1\\text{ and } m_{AC} = \\dfrac{4 - 5}{3 - 2} = -1\\)",
        graphData: null
      },
      {
        explanation: "Multiply the two gradients together to test for perpendicularity.",
        workingOut: "\\(m_{AB} \\times m_{AC} = 1 \\times (-1) = -1\\)",
        graphData: null
      },
      {
        explanation: "Since the product is -1, side AB is perpendicular to side AC, confirming the triangle has a right angle at vertex A.",
        workingOut: "\\(AB \\perp AC\\)",
        graphData: null
      }
    ]
  },
  // Q3 (Duplicate of Q1)
  "6p2RrfZC3fd2p8MV0Sgy": {
    question: "Convert the equation \\(y = 3x - 4\\) into general form \\(ax + by + c = 0\\).",
    opts: [
      "\\(3x - y - 4 = 0\\)", // Correct (Index 0)
      "\\(3x + y - 4 = 0\\)",
      "\\(x - 3y + 4 = 0\\)",
      "\\(3x - y + 4 = 0\\)"
    ],
    a: 0,
    solutionSteps: [
      {
        explanation: "The general form of a linear equation is represented as ax + by + c = 0, where a, b, and c are integers, and a is usually positive.",
        workingOut: "\\(y = 3x - 4\\)",
        graphData: null
      },
      {
        explanation: "To rearrange the equation into this form, subtract y from both sides to group all terms on the right-hand side.",
        workingOut: "\\(0 = 3x - y - 4\\)",
        graphData: null
      },
      {
        explanation: "Rewrite the expression with the variables on the left to obtain the standard general form.",
        workingOut: "\\(3x - y - 4 = 0\\)",
        graphData: null
      }
    ]
  },
  // Q4
  "8zrCEdpwd8E2wBP7I5bL": {
    question: "Find the \\(x\\)-intercept of the line \\(2x - 5y = 10\\).",
    opts: [
      "\\(5\\)", // Correct (Index 0)
      "\\(-2\\)",
      "\\(2\\)",
      "\\(-5\\)"
    ],
    a: 0,
    solutionSteps: [
      {
        explanation: "The x-intercept is the point where the line crosses the x-axis. Since any point on the x-axis has a y-coordinate of 0, we substitute y = 0 into the equation.",
        workingOut: "\\(2x - 5(0) = 10\\)",
        graphData: null
      },
      {
        explanation: "Solve the remaining simplified equation for x.",
        workingOut: "\\(2x = 10 \\;\\Rightarrow\\; x = 5\\)",
        graphData: null
      },
      {
        explanation: "Therefore, the x-intercept of the line is 5.",
        workingOut: "\\(x\\text{-intercept} = 5\\)",
        graphData: null
      }
    ]
  },
  // Q5
  "ABNklZMxAYL9nXsRq4zD": {
    question: "Which of the following lines is parallel to \\(y = 3x - 5\\)?",
    opts: [
      "\\(y = 3x + 10\\)", // Correct (Index 0)
      "\\(y = -3x + 5\\)",
      "\\(y = \\dfrac{1}{3}x - 5\\)",
      "\\(y = -\\dfrac{1}{3}x + 2\\)"
    ],
    a: 0,
    solutionSteps: [
      {
        explanation: "Parallel lines have the same gradient. We first identify the gradient of the given line, which is in gradient-intercept form (y = mx + c).",
        workingOut: "\\(y = 3x - 5 \\;\\Rightarrow\\; m = 3\\)",
        graphData: null
      },
      {
        explanation: "Now we inspect each option to find the line that also has a gradient of 3.",
        workingOut: "\\(y = 3x + 10 \\;\\Rightarrow\\; m = 3\\)",
        graphData: null
      },
      {
        explanation: "Since both lines share the gradient of 3, the line parallel to the given line is y = 3x + 10.",
        workingOut: "\\(y = 3x + 10\\)",
        graphData: null
      }
    ]
  },
  // Q6
  "ANaWm3nkE3M8LPrsLWkY": {
    question: "Find the \\(y\\)-intercept of the line \\(3x + 4y = 12\\).",
    opts: [
      "\\(3\\)", // Correct (Index 0)
      "\\(4\\)",
      "\\(-3\\)",
      "\\(-4\\)"
    ],
    a: 0,
    solutionSteps: [
      {
        explanation: "The y-intercept is the point where the line intersects the y-axis. At this point, the x-coordinate is 0. We substitute x = 0 into the equation.",
        workingOut: "\\(3(0) + 4y = 12\\)",
        graphData: null
      },
      {
        explanation: "Solve the remaining simplified linear equation for y.",
        workingOut: "\\(4y = 12 \\;\\Rightarrow\\; y = 3\\)",
        graphData: null
      },
      {
        explanation: "Therefore, the y-intercept of the line is 3.",
        workingOut: "\\(y\\text{-intercept} = 3\\)",
        graphData: null
      }
    ]
  },
  // Q7
  "FHbdlEmIH8yTLrEpDr7N": {
    question: "The line shown has equation \\(2x + 3y = 6\\). What is its \\(y\\)-intercept?",
    opts: [
      "\\(2\\)", // Correct (Index 0)
      "\\(-2\\)",
      "\\(6\\)",
      "\\(3\\)"
    ],
    a: 0,
    solutionSteps: [
      {
        explanation: "To find the y-intercept of the line from the equation, we substitute x = 0 because the y-intercept occurs where the graph crosses the y-axis.",
        workingOut: "\\(2(0) + 3y = 6\\)",
        graphData: null
      },
      {
        explanation: "Solve the simplified equation for y.",
        workingOut: "\\(3y = 6 \\;\\Rightarrow\\; y = 2\\)",
        graphData: null
      },
      {
        explanation: "Thus, the y-intercept of the line is 2.",
        workingOut: "\\(y\\text{-intercept} = 2\\)",
        graphData: null
      }
    ]
  },
  // Q8
  "Idp5v5rvGtfvm9yJu7Le": {
    question: "Find the gradient and \\(y\\)-intercept of the line \\(4x - 2y + 8 = 0\\).",
    opts: [
      "\\(m = 2, \\; c = 4\\)", // Correct (Index 0)
      "\\(m = -2, \\; c = 8\\)",
      "\\(m = 2, \\; c = -4\\)",
      "\\(m = 4, \\; c = 8\\)"
    ],
    a: 0,
    solutionSteps: [
      {
        explanation: "To easily identify the gradient (m) and y-intercept (c), we rewrite the equation in gradient-intercept form (y = mx + c).",
        workingOut: "\\(4x - 2y + 8 = 0\\)",
        graphData: null
      },
      {
        explanation: "Rearrange the terms to isolate the y-term on one side of the equation.",
        workingOut: "\\(2y = 4x + 8\\)",
        graphData: null
      },
      {
        explanation: "Divide both sides of the equation by 2 to solve for y.",
        workingOut: "\\(y = 2x + 4\\)",
        graphData: null
      },
      {
        explanation: "Compare the final form with y = mx + c. The gradient m is 2 and the y-intercept c is 4.",
        workingOut: "\\(m = 2,\\; c = 4\\)",
        graphData: null
      }
    ]
  },
  // Q9 (Duplicate of Q4)
  "ks60Yc8Cio70KjkmekRT": {
    question: "Find the \\(x\\)-intercept of the line \\(2x - 5y = 10\\).",
    opts: [
      "\\(5\\)", // Correct (Index 0)
      "\\(-2\\)",
      "\\(2\\)",
      "\\(-5\\)"
    ],
    a: 0,
    solutionSteps: [
      {
        explanation: "The x-intercept is the point where the line crosses the x-axis. Since any point on the x-axis has a y-coordinate of 0, we substitute y = 0 into the equation.",
        workingOut: "\\(2x - 5(0) = 10\\)",
        graphData: null
      },
      {
        explanation: "Solve the remaining simplified equation for x.",
        workingOut: "\\(2x = 10 \\;\\Rightarrow\\; x = 5\\)",
        graphData: null
      },
      {
        explanation: "Therefore, the x-intercept of the line is 5.",
        workingOut: "\\(x\\text{-intercept} = 5\\)",
        graphData: null
      }
    ]
  },
  // Q10
  "mbjPxygU2TFsL9y85cT2": {
    question: "Find the equation of the line passing through \\((-2, 1)\\) that is parallel to \\(y = 5x + 3\\).",
    opts: [
      "\\(y = 5x + 11\\)", // Correct (Index 0)
      "\\(y = 5x - 9\\)",
      "\\(y = 5x + 1\\)",
      "\\(y = -0.2x + 1\\)"
    ],
    a: 0,
    solutionSteps: [
      {
        explanation: "Parallel lines have the same gradient. The gradient of the line y = 5x + 3 is 5, so our required line also has a gradient of m = 5.",
        workingOut: "\\(m = 5\\)",
        graphData: null
      },
      {
        explanation: "Use the point-gradient formula to set up the equation with point \\((-2, 1)\\) and gradient 5.",
        workingOut: "\\(y - y_1 = m(x - x_1)\\)",
        graphData: null
      },
      {
        explanation: "Substitute the values into the formula and solve for y.",
        workingOut: "\\(y - 1 = 5(x - (-2)) \\;\\Rightarrow\\; y - 1 = 5(x + 2)\\)",
        graphData: null
      },
      {
        explanation: "Expand and simplify the linear equation to get the final gradient-intercept form.",
        workingOut: "\\(y - 1 = 5x + 10 \\;\\Rightarrow\\; y = 5x + 11\\)",
        graphData: null
      }
    ]
  }
};

(async () => {
  try {
    console.log('[Y10 Ch4C Questions] Syncing target documents directly by ID...');
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

    console.log(`\nSuccessfully updated and verified all ${updatedCount} questions for Year 10 Chapter 4C.`);
    process.exit(0);
  } catch (err) {
    console.error('Fatal error during update/verification:', err.message);
    process.exit(1);
  }
})();
