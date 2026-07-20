import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const targets = {
  // Q1
  "1lpsySlhscARtuDqtc5P": {
    question: "Given \\(A(5, -2)\\) and \\(B(3, 4)\\), find the distance \\(AB\\).",
    opts: [
      "\\(\\sqrt{20}\\)",
      "\\(6\\)",
      "\\(2\\sqrt{10}\\)", // Correct (Index 2)
      "\\(2\\sqrt{5}\\)"
    ],
    a: 2,
    solutionSteps: [
      {
        explanation: "To find the distance between two points, we use the distance formula. Our strategy is to substitute the given coordinates into this formula.",
        workingOut: "\\(d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}\\)",
        graphData: null
      },
      {
        explanation: "Substitute the coordinates \\(A(5, -2)\\) and \\(B(3, 4)\\) into the formula. Calculate the difference in x-values and y-values.",
        workingOut: "\\(d = \\sqrt{(3 - 5)^2 + (4 - (-2))^2} = \\sqrt{(-2)^2 + (6)^2}\\)",
        graphData: null
      },
      {
        explanation: "Square the differences, add them together, and simplify the square root.",
        workingOut: "\\(d = \\sqrt{4 + 36} = \\sqrt{40} = \\sqrt{4 \\times 10} = 2\\sqrt{10}\\)",
        graphData: null
      }
    ]
  },
  // Q2
  "2tuklIGBWXnWMcf7haLz": {
    question: "Find the midpoint of the interval joining \\(P(-1, 4)\\) and \\(Q(3, -2)\\).",
    opts: [
      "\\((1, 1)\\)", // Correct (Index 0)
      "\\((2, 2)\\)",
      "\\((1, 3)\\)",
      "\\((2, 1)\\)"
    ],
    a: 0,
    solutionSteps: [
      {
        explanation: "The midpoint of an interval is the average of the coordinates of the endpoints. We use the midpoint formula.",
        workingOut: "\\(M = \\left( \\dfrac{x_1 + x_2}{2}, \\; \\dfrac{y_1 + y_2}{2} \\right)\\)",
        graphData: null
      },
      {
        explanation: "Substitute the coordinates \\(P(-1, 4)\\) and \\(Q(3, -2)\\) into the formula.",
        workingOut: "\\(M = \\left( \\dfrac{-1 + 3}{2}, \\; \\dfrac{4 + (-2)}{2} \\right)\\)",
        graphData: null
      },
      {
        explanation: "Simplify the fractions to find the final coordinates of the midpoint.",
        workingOut: "\\(M = \\left( \\dfrac{2}{2}, \\; \\dfrac{2}{2} \\right) = (1, 1)\\)",
        graphData: null
      }
    ]
  },
  // Q3
  "5Ugm5xJLl2kKTczUjidb": {
    question: "Find the midpoint of the interval joining \\(A(-3, 5)\\) and \\(B(1, -1)\\).",
    opts: [
      "\\((-1, 2)\\)", // Correct (Index 0)
      "\\((-2, 4)\\)",
      "\\((0, 2)\\)",
      "\\((-1, 3)\\)"
    ],
    a: 0,
    solutionSteps: [
      {
        explanation: "To find the midpoint of the interval, we take the average of the x-coordinates and the average of the y-coordinates of the endpoints.",
        workingOut: "\\(M = \\left( \\dfrac{x_1 + x_2}{2}, \\; \\dfrac{y_1 + y_2}{2} \\right)\\)",
        graphData: null
      },
      {
        explanation: "Substitute \\(A(-3, 5)\\) and \\(B(1, -1)\\) into the midpoint formula.",
        workingOut: "\\(M = \\left( \\dfrac{-3 + 1}{2}, \\; \\dfrac{5 + (-1)}{2} \\right)\\)",
        graphData: null
      },
      {
        explanation: "Simplify the arithmetic to find the final coordinates of the midpoint.",
        workingOut: "\\(M = \\left( \\dfrac{-2}{2}, \\; \\dfrac{4}{2} \\right) = (-1, 2)\\)",
        graphData: null
      }
    ]
  },
  // Q4
  "8fHR8PudwUqGmas4j3TA": {
    question: "\\(M(2, 3)\\) is the midpoint of the interval \\(AB\\). If \\(A\\) is \\((1, 1)\\), find the coordinates of \\(B\\).",
    opts: [
      "\\((3, 5)\\)", // Correct (Index 0)
      "\\((4, 6)\\)",
      "\\((3, 4)\\)",
      "\\((2.5, 4.5)\\)"
    ],
    a: 0,
    solutionSteps: [
      {
        explanation: "We are given the midpoint \\(M(2, 3)\\) and one endpoint \\(A(1, 1)\\). Let the coordinates of \\(B\\) be \\((x_B, y_B)\\). We set up equations using the midpoint formula.",
        workingOut: "\\(2 = \\dfrac{1 + x_B}{2}\\text{ and } 3 = \\dfrac{1 + y_B}{2}\\)",
        graphData: null
      },
      {
        explanation: "Solve the x-coordinate equation by multiplying by 2 and then subtracting 1.",
        workingOut: "\\(1 + x_B = 4 \\;\\Rightarrow\\; x_B = 3\\)",
        graphData: null
      },
      {
        explanation: "Solve the y-coordinate equation by multiplying by 2 and then subtracting 1.",
        workingOut: "\\(1 + y_B = 6 \\;\\Rightarrow\\; y_B = 5\\)",
        graphData: null
      },
      {
        explanation: "Therefore, the coordinates of the endpoint \\(B\\) are \\((3, 5)\\).",
        workingOut: "\\(B(3, 5)\\)",
        graphData: null
      }
    ]
  },
  // Q5
  "8O1sGBIlADyujoK4HNbr": {
    question: "Find the midpoint of the interval joining \\(P(-1, 4)\\) and \\(Q(3, -2)\\).",
    opts: [
      "\\((1, 1)\\)", // Correct (Index 0)
      "\\((2, 2)\\)",
      "\\((1, 3)\\)",
      "\\((2, 1)\\)"
    ],
    a: 0,
    solutionSteps: [
      {
        explanation: "The midpoint of an interval is the average of the coordinates of the endpoints. We use the midpoint formula.",
        workingOut: "\\(M = \\left( \\dfrac{x_1 + x_2}{2}, \\; \\dfrac{y_1 + y_2}{2} \\right)\\)",
        graphData: null
      },
      {
        explanation: "Substitute the coordinates \\(P(-1, 4)\\) and \\(Q(3, -2)\\) into the formula.",
        workingOut: "\\(M = \\left( \\dfrac{-1 + 3}{2}, \\; \\dfrac{4 + (-2)}{2} \\right)\\)",
        graphData: null
      },
      {
        explanation: "Simplify the fractions to find the final coordinates of the midpoint.",
        workingOut: "\\(M = \\left( \\dfrac{2}{2}, \\; \\dfrac{2}{2} \\right) = (1, 1)\\)",
        graphData: null
      }
    ]
  },
  // Q6
  "BnbB6tjtaipdC5OG8Cpt": {
    question: "\\(M(2, 3)\\) is the midpoint of the interval \\(AB\\). If \\(A\\) is \\((1, 1)\\), find the coordinates of \\(B\\).",
    opts: [
      "\\((3, 5)\\)", // Correct (Index 0)
      "\\((4, 6)\\)",
      "\\((3, 4)\\)",
      "\\((2.5, 4.5)\\)"
    ],
    a: 0,
    solutionSteps: [
      {
        explanation: "We are given the midpoint \\(M(2, 3)\\) and one endpoint \\(A(1, 1)\\). Let the coordinates of \\(B\\) be \\((x_B, y_B)\\). We set up equations using the midpoint formula.",
        workingOut: "\\(2 = \\dfrac{1 + x_B}{2}\\text{ and } 3 = \\dfrac{1 + y_B}{2}\\)",
        graphData: null
      },
      {
        explanation: "Solve the x-coordinate equation by multiplying by 2 and then subtracting 1.",
        workingOut: "\\(1 + x_B = 4 \\;\\Rightarrow\\; x_B = 3\\)",
        graphData: null
      },
      {
        explanation: "Solve the y-coordinate equation by multiplying by 2 and then subtracting 1.",
        workingOut: "\\(1 + y_B = 6 \\;\\Rightarrow\\; y_B = 5\\)",
        graphData: null
      },
      {
        explanation: "Therefore, the coordinates of the endpoint \\(B\\) are \\((3, 5)\\).",
        workingOut: "\\(B(3, 5)\\)",
        graphData: null
      }
    ]
  },
  // Q7
  "D6q69EtDOSyZtgXZPlVj": {
    question: "Find the distance between \\((-3, 2)\\) and \\((1, -1)\\).",
    opts: [
      "\\(5\\) units", // Correct (Index 0)
      "\\(\\sqrt{7}\\) units",
      "\\(4\\) units",
      "\\(\\sqrt{15}\\) units"
    ],
    a: 0,
    solutionSteps: [
      {
        explanation: "To find the distance between the two coordinates, we use the standard distance formula.",
        workingOut: "\\(d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}\\)",
        graphData: null
      },
      {
        explanation: "Substitute the points \\((-3, 2)\\) and \\((1, -1)\\) into the formula.",
        workingOut: "\\(d = \\sqrt{(1 - (-3))^2 + (-1 - 2)^2}\\)",
        graphData: null
      },
      {
        explanation: "Simplify the terms inside the square root to calculate the final distance.",
        workingOut: "\\(d = \\sqrt{(4)^2 + (-3)^2} = \\sqrt{16 + 9} = \\sqrt{25} = 5\\)",
        graphData: null
      }
    ]
  },
  // Q8
  "DOrklzzUTiKVF8ZO1Pax": {
    question: "Find the distance between \\((-3, 2)\\) and \\((1, -1)\\).",
    opts: [
      "\\(5\\) units", // Correct (Index 0)
      "\\(\\sqrt{7}\\) units",
      "\\(4\\) units",
      "\\(\\sqrt{15}\\) units"
    ],
    a: 0,
    solutionSteps: [
      {
        explanation: "To find the distance between the two coordinates, we use the standard distance formula.",
        workingOut: "\\(d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}\\)",
        graphData: null
      },
      {
        explanation: "Substitute the points \\((-3, 2)\\) and \\((1, -1)\\) into the formula.",
        workingOut: "\\(d = \\sqrt{(1 - (-3))^2 + (-1 - 2)^2}\\)",
        graphData: null
      },
      {
        explanation: "Simplify the terms inside the square root to calculate the final distance.",
        workingOut: "\\(d = \\sqrt{(4)^2 + (-3)^2} = \\sqrt{16 + 9} = \\sqrt{25} = 5\\)",
        graphData: null
      }
    ]
  },
  // Q9
  "hx59l8yW3b0akUHuz8Hn": {
    question: "Find the distance between \\((-5, -2)\\) and \\((7, 3)\\).",
    opts: [
      "\\(13\\) units", // Correct (Index 0)
      "\\(12\\) units",
      "\\(15\\) units",
      "\\(\\sqrt{119}\\) units"
    ],
    a: 0,
    solutionSteps: [
      {
        explanation: "To find the distance between the two points, we substitute their coordinates into the distance formula.",
        workingOut: "\\(d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}\\)",
        graphData: null
      },
      {
        explanation: "Substitute \\((-5, -2)\\) and \\((7, 3)\\) into the formula.",
        workingOut: "\\(d = \\sqrt{(7 - (-5))^2 + (3 - (-2))^2}\\)",
        graphData: null
      },
      {
        explanation: "Simplify the squares and calculate the final result.",
        workingOut: "\\(d = \\sqrt{(12)^2 + (5)^2} = \\sqrt{144 + 25} = \\sqrt{169} = 13\\)",
        graphData: null
      }
    ]
  },
  // Q10
  "iTyMYXt5AwzD21xqDNNT": {
    question: "Find the distance between \\((-5, -2)\\) and \\((7, 3)\\).",
    opts: [
      "\\(13\\) units", // Correct (Index 0)
      "\\(12\\) units",
      "\\(15\\) units",
      "\\(\\sqrt{119}\\) units"
    ],
    a: 0,
    solutionSteps: [
      {
        explanation: "To find the distance between the two points, we substitute their coordinates into the distance formula.",
        workingOut: "\\(d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}\\)",
        graphData: null
      },
      {
        explanation: "Substitute \\((-5, -2)\\) and \\((7, 3)\\) into the formula.",
        workingOut: "\\(d = \\sqrt{(7 - (-5))^2 + (3 - (-2))^2}\\)",
        graphData: null
      },
      {
        explanation: "Simplify the squares and calculate the final result.",
        workingOut: "\\(d = \\sqrt{(12)^2 + (5)^2} = \\sqrt{144 + 25} = \\sqrt{169} = 13\\)",
        graphData: null
      }
    ]
  }
};

(async () => {
  try {
    console.log('[Y10 Ch4A Questions] Updating target documents directly by ID...');
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
          solution: null // clean legacy field
        };

        // Self-Verification Check (Rule 11-3)
        if (updateData.opts[updateData.a] !== updatedDoc.options[updateData.a]) {
          throw new Error(`Self-Verification Failed: Options/Opts mismatch for doc ${docId}`);
        }
        
        // Ensure no Index reference in the last step workingOut
        const lastStepWorkingOut = updateData.solutionSteps[updateData.solutionSteps.length - 1].workingOut;
        if (lastStepWorkingOut.toLowerCase().includes("index") || lastStepWorkingOut.toLowerCase().includes("option")) {
          throw new Error(`Self-Verification Failed: Last step workingOut contains forbidden index references in doc ${docId}`);
        }

        await ref.set(updatedDoc);
        console.log(`  [UPDATED] Doc ID: ${docId} -> Synced successfully.`);
        updatedCount++;
      } else {
        console.log(`  [WARNING] Doc ID: ${docId} not found in Firestore.`);
      }
    }

    console.log(`\nSuccessfully updated and verified all ${updatedCount} target questions for Year 10 Chapter 4A.`);
    process.exit(0);
  } catch (err) {
    console.error('Fatal error during update/verification:', err.message);
    process.exit(1);
  }
})();
