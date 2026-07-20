import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const targets = {
  // Q11
  "PfW4xtaz8LTfXETwlgxV": {
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
  // Q12
  "QS4lOH091ZmDRMzZ6zgi": {
    question: "Given \\(A(5, -2)\\) and \\(B(3, 4)\\), find the midpoint of \\(AB\\).",
    opts: [
      "\\((1, 4)\\)",
      "\\((4, 1)\\)", // Correct (Index 1)
      "\\((8, 2)\\)",
      "\\((2, 6)\\)"
    ],
    a: 1,
    solutionSteps: [
      {
        explanation: "The midpoint of an interval is found by taking the average of the endpoints' x-coordinates and the average of their y-coordinates.",
        workingOut: "\\(M = \\left( \\dfrac{x_1 + x_2}{2}, \\; \\dfrac{y_1 + y_2}{2} \\right)\\)",
        graphData: null
      },
      {
        explanation: "Substitute the endpoints \\(A(5, -2)\\) and \\(B(3, 4)\\) into the midpoint formula.",
        workingOut: "\\(M = \\left( \\dfrac{5 + 3}{2}, \\; \\dfrac{-2 + 4}{2} \\right)\\)",
        graphData: null
      },
      {
        explanation: "Perform the addition and simplify the fractions to determine the final coordinates.",
        workingOut: "\\(M = \\left( \\dfrac{8}{2}, \\; \\dfrac{2}{2} \\right) = (4, 1)\\)",
        graphData: null
      }
    ]
  },
  // Q13
  "UVdH7sbgjanJ5GmeAUd2": {
    question: "Find the distance between the points \\(A(2, 3)\\) and \\(B(5, 7)\\).",
    opts: [
      "\\(5\\) units", // Correct (Index 0)
      "\\(\\sqrt{13}\\) units",
      "\\(\\sqrt{7}\\) units",
      "\\(6\\) units"
    ],
    a: 0,
    solutionSteps: [
      {
        explanation: "To find the distance between the two points, we substitute their coordinates into the distance formula.",
        workingOut: "\\(d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}\\)",
        graphData: null
      },
      {
        explanation: "Substitute \\(A(2, 3)\\) and \\(B(5, 7)\\) into the formula.",
        workingOut: "\\(d = \\sqrt{(5 - 2)^2 + (7 - 3)^2}\\)",
        graphData: null
      },
      {
        explanation: "Simplify the differences, square them, and find the square root of the sum.",
        workingOut: "\\(d = \\sqrt{(3)^2 + (4)^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5\\)",
        graphData: null
      }
    ]
  },
  // Q14
  "WwGNAWG2mkEmUzAbI2pC": {
    question: "Find the distance between the points \\(A(2, 3)\\) and \\(B(5, 7)\\).",
    opts: [
      "\\(5\\) units", // Correct (Index 0)
      "\\(\\sqrt{13}\\) units",
      "\\(\\sqrt{7}\\) units",
      "\\(6\\) units"
    ],
    a: 0,
    solutionSteps: [
      {
        explanation: "To find the distance between the two points, we substitute their coordinates into the distance formula.",
        workingOut: "\\(d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}\\)",
        graphData: null
      },
      {
        explanation: "Substitute \\(A(2, 3)\\) and \\(B(5, 7)\\) into the formula.",
        workingOut: "\\(d = \\sqrt{(5 - 2)^2 + (7 - 3)^2}\\)",
        graphData: null
      },
      {
        explanation: "Simplify the differences, square them, and find the square root of the sum.",
        workingOut: "\\(d = \\sqrt{(3)^2 + (4)^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5\\)",
        graphData: null
      }
    ]
  }
};

(async () => {
  try {
    console.log('[Y10 Ch4A Remaining] Updating database documents directly by ID...');
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

    console.log(`\nSuccessfully updated and verified all ${updatedCount} remaining questions for Year 10 Chapter 4A.`);
    process.exit(0);
  } catch (err) {
    console.error('Fatal error during update/verification:', err.message);
    process.exit(1);
  }
})();
