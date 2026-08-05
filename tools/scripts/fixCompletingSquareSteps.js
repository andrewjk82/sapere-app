import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import fs from 'fs';

const sa = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(sa) });
const db = getFirestore();

async function run() {
  const batch = db.batch();

  // Question 1
  batch.update(db.collection('questions').doc('2ZcTwwqb6t4psRHuTVDT'), {
    solutionSteps: [
      {
        explanation: "Identify the coefficient of $x$, which is 4. Halve it and square the result to find the term to add to both sides to complete the square.",
        workingOut: "$\\left(\\frac{4}{2}\\right)^2 = 2^2 = 4$",
        graphData: null
      },
      {
        explanation: "Add 4 to both sides of the equation to create a perfect square trinomial on the left side.",
        workingOut: "$x^2 + 4x + 4 = 6 + 4$",
        graphData: null
      },
      {
        explanation: "Factor the perfect square trinomial on the left side and simplify the right side.",
        workingOut: "$(x + 2)^2 = 10$",
        graphData: null
      },
      {
        explanation: "Take the square root of both sides to solve for $x$, remembering to include the $\\pm$ symbol. Finally, isolate $x$.",
        workingOut: "$x + 2 = \\pm\\sqrt{10} \\implies x = -2 \\pm\\sqrt{10}$",
        graphData: null
      }
    ]
  });

  // Question 2
  batch.update(db.collection('questions').doc('FfGH7bZVwZo1KF4IrzGP'), {
    solutionSteps: [
      {
        explanation: "Identify the coefficient of $x$, which is 6. Halve it and square it to find the number needed to complete the square.",
        workingOut: "$\\left(\\frac{6}{2}\\right)^2 = 3^2 = 9$",
        graphData: null
      },
      {
        explanation: "Add and subtract this number inside the expression so that the overall value doesn't change.",
        workingOut: "$(x^2 + 6x + 9) - 9 + 5$",
        graphData: null
      },
      {
        explanation: "Factor the first three terms as a perfect square.",
        workingOut: "$(x + 3)^2 - 9 + 5$",
        graphData: null
      },
      {
        explanation: "Simplify the constant terms outside the bracket to get the final expression.",
        workingOut: "$(x + 3)^2 - 4$",
        graphData: null
      }
    ]
  });

  await batch.commit();
  console.log('Added 4-step detailed solutions for the two completing the square questions!');
}

run().catch(console.error);
