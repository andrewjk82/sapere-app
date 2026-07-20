import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

(async () => {
  try {
    console.log('[JSXGraph SubQuestion Update] Updating n7QcD5uQCCk8TN856vh7 with detailed step-by-step solutions...');
    const ref = db.collection('questions').doc('n7QcD5uQCCk8TN856vh7');
    const doc = await ref.get();

    if (doc.exists) {
      const updatedData = {
        question: "Three points have coordinates \\(A(2, 3)\\), \\(B(4, 11)\\), and \\(C(p, 9)\\).",
        type: "multiple_choice",
        subQuestions: [
          {
            id: "q19a",
            type: "multiple_choice",
            question: "Find the value of \\(p\\) if \\(A\\), \\(B\\) and \\(C\\) are collinear.",
            opts: ["3.5", "3", "4.5", "2.5"],
            options: ["3.5", "3", "4.5", "2.5"],
            a: 0,
            answer: 0,
            solutionSteps: [
              {
                explanation: "Collinear points lie on the same straight line, meaning the gradient between any pair of these points must be identical.",
                workingOut: "\\(m_{AB} = m_{AC}\\)",
                graphData: null
              },
              {
                explanation: "Calculate the gradient \\(m_{AB}\\) using the coordinates of \\(A(2, 3)\\) and \\(B(4, 11)\\).",
                workingOut: "\\(m_{AB} = \\dfrac{11 - 3}{4 - 2} = \\dfrac{8}{2} = 4\\)",
                graphData: null
              },
              {
                explanation: "Express the gradient of \\(AC\\) in terms of \\(p\\), set it equal to 4, and solve the equation.",
                workingOut: "\\(\\dfrac{9 - 3}{p - 2} = 4 \\;\\Rightarrow\\; \\dfrac{6}{p - 2} = 4 \\;\\Rightarrow\\; p - 2 = 1.5 \\;\\Rightarrow\\; p = 3.5\\)",
                graphData: null
              }
            ]
          },
          {
            id: "q19b",
            type: "multiple_choice",
            question: "Find the value of \\(p\\) if \\(AC\\) is perpendicular to \\(AB\\).",
            opts: ["-22", "-24", "-20", "22"],
            options: ["-22", "-24", "-20", "22"],
            a: 0,
            answer: 0,
            solutionSteps: [
              {
                explanation: "Perpendicular lines have gradients that multiply to -1. Therefore, the gradient of \\(AC\\) is the negative reciprocal of the gradient of \\(AB\\) (which we found is 4).",
                workingOut: "\\(m_{AC} = -\\dfrac{1}{m_{AB}} = -\\dfrac{1}{4}\\)",
                graphData: null
              },
              {
                explanation: "Set the gradient expression for \\(AC\\) equal to \\(-\\dfrac{1}{4}\\).",
                workingOut: "\\(\\dfrac{9 - 3}{p - 2} = -\\dfrac{1}{4} \\;\\Rightarrow\\; \\dfrac{6}{p - 2} = -\\dfrac{1}{4}\\)",
                graphData: null
              },
              {
                explanation: "Cross-multiply and isolate the unknown parameter \\(p\\) to calculate the final answer.",
                workingOut: "\\(p - 2 = 6 \\times (-4) = -24 \\;\\Rightarrow\\; p = -22\\)",
                graphData: null
              }
            ]
          }
        ],
        isNew: true
      };

      await ref.set(updatedData, { merge: true });
      console.log('  [SUCCESS] Updated n7QcD5uQCCk8TN856vh7 successfully.');
    } else {
      console.log('  [ERROR] Document not found.');
    }
    process.exit(0);
  } catch (err) {
    console.error('Fatal error during subQuestion update:', err);
    process.exit(1);
  }
})();
