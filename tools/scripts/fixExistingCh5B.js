import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
if (getApps().length === 0) {
  initializeApp({ credential: cert(serviceAccount) });
}
const db = getFirestore();

// We will update the 3 existing MCQs in Topic 5B to:
// 1. Remove $ ... $ and wrap in \\( ... \\)
// 2. Format options array to string values instead of objects {text, imageUrl} if they are using object structures, or just standard string array.
// 3. Make sure solutionSteps are detailed 3-step solutions.

const existingUpdates = {
  "10PPDHiS4nKAOd1XMrVK": {
    "question": "Find the function obtained when \\(y = x^3 - 4x + 2\\) is reflected in the \\(y\\)-axis.",
    "opts": [
      "\\(y = -x^3 + 4x + 2\\)",
      "\\(y = -x^3 + 4x - 2\\)",
      "\\(y = x^3 - 4x - 2\\)",
      "\\(y = -x^3 - 4x + 2\\)"
    ],
    "options": [
      "\\(y = -x^3 + 4x + 2\\)",
      "\\(y = -x^3 + 4x - 2\\)",
      "\\(y = x^3 - 4x - 2\\)",
      "\\(y = -x^3 - 4x + 2\\)"
    ],
    "a": 0,
    "answer": 0,
    "hint": "To reflect a function in the \\(y\\)-axis, replace every \\(x\\) with \\(-x\\).",
    "solution": "Substitute \\(-x\\) into the function: \\(y = (-x)^3 - 4(-x) + 2\\). Since \\((-x)^3 = -x^3\\), this simplifies to \\(y = -x^3 + 4x + 2\\).",
    "solutionSteps": [
      {
        "explanation": "We begin by identifying the reflection type. A reflection in the \\(y\\)-axis transforms \\(f(x)\\) into \\(f(-x)\\) by substituting \\(-x\\) for all instances of the horizontal coordinate variable.",
        "workingOut": "Reflected function: \\(y = f(-x)\\)"
      },
      {
        "explanation": "Next, we perform the substitution into the cubic polynomial expression. We group and enclose the negative variable terms inside brackets to ensure exponents are applied correctly.",
        "workingOut": "\\(y = (-x)^3 - 4(-x) + 2\\)"
      },
      {
        "explanation": "Finally, we evaluate the signs. A negative number raised to an odd power remains negative, while multiplying two negative coefficients yields a positive product.",
        "workingOut": "\\(y = -x^3 + 4x + 2\\)"
      }
    ]
  },
  "CbrZewNFJ7XLVY715tqD": {
    "question": "Find the function obtained when \\(y = 3^x - x\\) is rotated \\(180^{\\circ}\\) about the origin.",
    "opts": [
      "\\(y = -3^x + x\\)",
      "\\(y = -3^{-x} - x\\)",
      "\\(y = -3^{-x} + x\\)",
      "\\(y = 3^{-x} + x\\)"
    ],
    "options": [
      "\\(y = -3^x + x\\)",
      "\\(y = -3^{-x} - x\\)",
      "\\(y = -3^{-x} + x\\)",
      "\\(y = 3^{-x} + x\\)"
    ],
    "a": 1,
    "answer": 1,
    "hint": "A rotation of \\(180^{\\circ}\\) about the origin is equivalent to reflecting in the \\(y\\)-axis and then the \\(x\\)-axis, meaning \\(y = -f(-x)\\).",
    "solution": "First, reflect in the \\(y\\)-axis by replacing \\(x\\) with \\(-x\\): \\(y = 3^{-x} - (-x) = 3^{-x} + x\\). Next, reflect in the \\(x\\)-axis by multiplying the entire function by \\(-1\\): \\(y = -(3^{-x} + x) = -3^{-x} - x\\).",
    "solutionSteps": [
      {
        "explanation": "We begin by defining the transformation rules for rotation. A \\(180^{\\circ}\\) rotation about the origin is equivalent to a horizontal reflection followed by a vertical reflection.",
        "workingOut": "Rotation formula: \\(y = -f(-x)\\)"
      },
      {
        "explanation": "Next, we substitute \\(-x\\) for all horizontal variables in the exponential equation to perform the horizontal reflection step.",
        "workingOut": "\\(f(-x) = 3^{-x} - (-x) = 3^{-x} + x\\)"
      },
      {
        "explanation": "Finally, we multiply the entire expression by negative one to perform the vertical reflection step and find the completed equation.",
        "workingOut": "\\(y = -(3^{-x} + x) = -3^{-x} - x\\)"
      }
    ]
  },
  "wgLD5c715cU0ZyaBpvZH": {
    "question": "Find the function obtained when \\(y = x^2 - 5x + 7\\) is reflected in the \\(x\\)-axis.",
    "opts": [
      "\\(y = -x^2 - 5x + 7\\)",
      "\\(y = -x^2 + 5x - 7\\)",
      "\\(y = -x^2 + 5x + 7\\)",
      "\\(y = x^2 + 5x + 7\\)"
    ],
    "options": [
      "\\(y = -x^2 - 5x + 7\\)",
      "\\(y = -x^2 + 5x - 7\\)",
      "\\(y = -x^2 + 5x + 7\\)",
      "\\(y = x^2 + 5x + 7\\)"
    ],
    "a": 1,
    "answer": 1,
    "hint": "To reflect a function in the \\(x\\)-axis, multiply the entire function by \\(-1\\) (i.e., replace \\(y\\) with \\(-y\\)).",
    "solution": "Reflecting in the \\(x\\)-axis means we find \\(-f(x)\\). Thus, \\(y = -(x^2 - 5x + 7) = -x^2 + 5x - 7\\).",
    "solutionSteps": [
      {
        "explanation": "We begin by identifying the reflection type. A reflection in the horizontal \\(x\\)-axis transforms the output coordinates, changing \\(f(x)\\) to \\(-f(x)\\).",
        "workingOut": "Reflected function: \\(y = -f(x)\\)"
      },
      {
        "explanation": "Next, we apply this vertical reflection by multiplying the entire trinomial expression by negative one. We use brackets to ensure the sign change is applied to all terms.",
        "workingOut": "\\(y = -(x^2 - 5x + 7)\\)"
      },
      {
        "explanation": "Finally, we distribute the negative sign to each individual term inside the brackets to obtain the finished reflected parabola equation.",
        "workingOut": "\\(y = -x^2 + 5x - 7\\)"
      }
    ]
  }
};

async function run() {
  console.log('Updating Ch 5B existing MCQ questions...');
  for (const [id, updateData] of Object.entries(existingUpdates)) {
    await db.collection('questions').doc(id).update(updateData);
    console.log(`Updated existing doc ${id} successfully.`);
  }
}

run().catch(console.error);
