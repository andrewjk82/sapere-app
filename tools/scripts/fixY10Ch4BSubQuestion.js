import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

(async () => {
  try {
    console.log('[JSXGraph SubQuestion Update] Updating L78zWhgSGVV9J9H7fdnn with detailed step-by-step solutions...');
    const ref = db.collection('questions').doc('L78zWhgSGVV9J9H7fdnn');
    const doc = await ref.get();

    if (doc.exists) {
      const updatedData = {
        question: "Points \\(A(3, 2)\\), \\(B(5, 10)\\), and \\(C(p, 6)\\) are given.",
        type: "multiple_choice", // Base type fallback
        subQuestions: [
          {
            id: "q19_1",
            type: "multiple_choice",
            question: "Find \\(p\\) if \\(A\\), \\(B\\), and \\(C\\) are collinear.",
            opts: ["4", "3", "4.5", "-4"],
            options: ["4", "3", "4.5", "-4"],
            a: 0,
            answer: 0,
            solutionSteps: [
              {
                explanation: "Collinear points lie on the exact same straight line, which means the gradient (slope) between any two points must be identical.",
                workingOut: "\\(m_{AB} = m_{AC}\\)",
                graphData: null
              },
              {
                explanation: "First, find the gradient \\(m_{AB}\\) using the coordinates \\(A(3, 2)\\) and \\(B(5, 10)\\).",
                workingOut: "\\(m_{AB} = \\dfrac{10 - 2}{5 - 3} = \\dfrac{8}{2} = 4\\)",
                graphData: null
              },
              {
                explanation: "Set the gradient of the segment \\(AC\\) equal to 4 and solve the equation to find the value of \\(p\\).",
                workingOut: "\\(\\dfrac{6 - 2}{p - 3} = 4 \\;\\Rightarrow\\; \\dfrac{4}{p - 3} = 4 \\;\\Rightarrow\\; p - 3 = 1 \\;\\Rightarrow\\; p = 4\\)",
                graphData: null
              }
            ]
          },
          {
            id: "q19_2",
            type: "multiple_choice",
            question: "Find \\(p\\) if \\(AC \\perp AB\\).",
            opts: ["-13", "-15", "-11", "13"],
            options: ["-13", "-15", "-11", "13"],
            a: 0,
            answer: 0,
            solutionSteps: [
              {
                explanation: "Two lines are perpendicular if the product of their gradients equals -1. Thus, the gradient of \\(AC\\) must be the negative reciprocal of the gradient of \\(AB\\) (which is 4).",
                workingOut: "\\(m_{AC} = -\\dfrac{1}{m_{AB}} = -\\dfrac{1}{4}\\)",
                graphData: null
              },
              {
                explanation: "Set up the gradient formula for \\(AC\\) using the points \\(A(3, 2)\\) and \\(C(p, 6)\\), and set it equal to \\(-\\dfrac{1}{4}\\).",
                workingOut: "\\(\\dfrac{6 - 2}{p - 3} = -\\dfrac{1}{4} \\;\\Rightarrow\\; \\dfrac{4}{p - 3} = -\\dfrac{1}{4}\\)",
                graphData: null
              },
              {
                explanation: "Solve the equation by cross-multiplying and isolating \\(p\\).",
                workingOut: "\\(p - 3 = 4 \\times (-4) = -16 \\;\\Rightarrow\\; p = -13\\)",
                graphData: null
              }
            ]
          }
        ],
        isNew: true
      };

      await ref.set(updatedData, { merge: true });
      console.log('  [SUCCESS] Updated L78zWhgSGVV9J9H7fdnn successfully.');
    } else {
      console.log('  [ERROR] Document not found.');
    }
    process.exit(0);
  } catch (err) {
    console.error('Fatal error during subQuestion update:', err);
    process.exit(1);
  }
})();
