import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import fs from 'fs';

const sa = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(sa) });
const db = getFirestore();

async function run() {
  await db.collection('questions').doc('UzcJdw7b7UyEu7fDi0M9').update({
    solutionSteps: [
      {
        explanation: "Identify the coefficients $a$, $b$, and $c$ from the standard quadratic equation $ax^2 + bx + c = 0$.",
        workingOut: "$a = 2, \\quad b = -3, \\quad c = -4$",
        graphData: null
      },
      {
        explanation: "Write down the quadratic formula to solve for $x$.",
        workingOut: "$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$",
        graphData: null
      },
      {
        explanation: "Substitute the values of $a$, $b$, and $c$ into the formula and calculate the discriminant ($b^2 - 4ac$).",
        workingOut: "$\\begin{aligned} x &= \\frac{-(-3) \\pm \\sqrt{(-3)^2 - 4(2)(-4)}}{2(2)} \\\\ &= \\frac{3 \\pm \\sqrt{9 + 32}}{4} \\end{aligned}$",
        graphData: null
      },
      {
        explanation: "Simplify the expression under the square root to find the final solutions.",
        workingOut: "$x = \\frac{3 \\pm \\sqrt{41}}{4}$",
        graphData: null
      }
    ]
  });
  console.log('Added 4-step detailed solution for the quadratic formula question!');
}

run().catch(console.error);
