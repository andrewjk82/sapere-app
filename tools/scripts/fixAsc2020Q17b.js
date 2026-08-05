import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import fs from 'fs';

const sa = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(sa) });
const db = getFirestore();

async function run() {
  const docRef = db.collection('questions').doc('asc2020-q17b');
  
  const updateData = {
    question: "Figtree Syndrome is a rare disease. The table shows research spending (% of GDP) $x$ and cases of Figtree Syndrome (1000s) $y$ for 10 countries.\n\n| $x$ | 2.0 | 2.4 | 3.0 | 3.2 | 3.5 | 3.8 | 4.1 | 4.5 | 4.6 | 5.0 |\n|---|---|---|---|---|---|---|---|---|---|---|\n| $y$ | 7.8 | 6.8 | 7.2 | 6.6 | 5.8 | 5.6 | 4.6 | 5.0 | 4.0 | 4.2 |",
    type: "short_answer", // The parent doc type is usually short_answer when it has subQuestions
    answer: "See subquestion",
    solutionSteps: [],
    subQuestions: [
      {
        id: "asc2020-q17b-a",
        type: "multiple_choice",
        question: "Find the least squares regression line for this data. Round your values to 3 significant figures.",
        options: [
          { text: "$\\hat{y} = -1.07x + 9.63$" },
          { text: "$\\hat{y} = -1.07x + 5.76$" },
          { text: "$\\hat{y} = -0.98x + 9.63$" },
          { text: "$\\hat{y} = 1.07x + 9.63$" }
        ],
        answer: "0",
        solutionSteps: [
          {
            explanation: "Use the calculator's linear regression (LinReg) function by entering the data pairs $(x, y)$.",
            workingOut: "b = \\frac{\\sum(x_i - \\bar{x})(y_i - \\bar{y})}{\\sum(x_i - \\bar{x})^2}",
            graphData: null
          },
          {
            explanation: "Read the slope $b$ from the calculator, rounding to 3 significant figures.",
            workingOut: "b \\approx -1.07",
            graphData: null
          },
          {
            explanation: "Read the $y$-intercept $a$ from the calculator, rounding to 3 significant figures.",
            workingOut: "a \\approx 9.63",
            graphData: null
          },
          {
            explanation: "Construct the regression equation in the form $\\hat{y} = a + bx$.",
            workingOut: "\\hat{y} = -1.07x + 9.63",
            graphData: null
          }
        ],
        graphData: null
      }
    ]
  };

  await docRef.update(updateData);
  console.log('Restructured asc2020-q17b to have the table and a multiple-choice subquestion!');
}

run().catch(console.error);
