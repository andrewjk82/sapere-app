import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import fs from 'fs';

const sa = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(sa) });
const db = getFirestore();

async function run() {
  await db.collection('questions').doc('qMhtIjv6KKVqG50Lm76l').update({
    solutionSteps: [
      {
        explanation: "Identify the coordinates of the two points given on the line.",
        workingOut: "$(x_1, y_1) = (0, 2)$ \\text{ and } $(x_2, y_2) = (1, -2)$",
        graphData: null
      },
      {
        explanation: "Calculate the gradient (slope) $m$ using the formula $m = \\frac{y_2 - y_1}{x_2 - x_1}$.",
        workingOut: "$m = \\frac{-2 - 2}{1 - 0} = \\frac{-4}{1} = -4$",
        graphData: null
      },
      {
        explanation: "Identify the $y$-intercept ($c$). Since the line passes through $(0, 2)$, the $y$-intercept is directly given as 2.",
        workingOut: "$c = 2$",
        graphData: null
      },
      {
        explanation: "Substitute the gradient $m$ and $y$-intercept $c$ into the slope-intercept form $y = mx + c$ to find the final equation.",
        workingOut: "$y = -4x + 2$",
        graphData: null
      }
    ]
  });
  console.log('Added 4-step detailed solution for the line equation question!');
}

run().catch(console.error);
