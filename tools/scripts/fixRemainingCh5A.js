import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
if (getApps().length === 0) {
  initializeApp({ credential: cert(serviceAccount) });
}
const db = getFirestore();

// Corrected keys to 'y11a-5A-new-10d', 'y11a-5A-new-10e', 'y11a-5A-new-10f' (included the 'A' after chapter ID)
const updates = {
  "y11a-5A-new-10d": {
    "type": "multiple_choice",
    "question": "Complete the square to express \\(y = -x^2 - 2x + 8\\) in vertex form \\(y = -(x-h)^2 + k\\) and identify the translation from \\(y = -x^2\\). Find only the translation description.",
    "opts": [
      "Shifted 1 unit to the left and 9 units upward",
      "Shifted 1 unit to the right and 9 units upward",
      "Shifted 1 unit to the left and 9 units downward",
      "Shifted 1 unit to the right and 9 units downward"
    ],
    "options": [
      "Shifted 1 unit to the left and 9 units upward",
      "Shifted 1 unit to the right and 9 units upward",
      "Shifted 1 unit to the left and 9 units downward",
      "Shifted 1 unit to the right and 9 units downward"
    ],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by writing down the given quadratic equation. We factor out the negative sign from the quadratic and linear terms to prepare for completing the square.",
        "workingOut": "Given: \\(y = -x^2 - 2x + 8 \\;\\Rightarrow\\; y = -(x^2 + 2x) + 8\\)"
      },
      {
        "explanation": "Next, we complete the square inside the parentheses by adding and subtracting one. We must distribute the negative sign correctly when simplifying. A common mistake is subtracting the constant incorrectly.",
        "workingOut": "\\(y = -(x^2 + 2x + 1 - 1) + 8 \\;\\Rightarrow\\; y = -((x + 1)^2 - 1) + 8 \\;\\Rightarrow\\; y = -(x + 1)^2 + 1 + 8\\)"
      },
      {
        "explanation": "Finally, we combine constants and compare the equation to standard vertex form to find the translations. The term \\(x + 1\\) indicates a shift to the left by 1 unit, and the term \\(+ 9\\) indicates a shift upward by 9 units.",
        "workingOut": "Vertex form: \\(y = -(x + 1)^2 + 9 \\;\\Rightarrow\\; \\text{Translation: Left 1, Up 9}\\)"
      }
    ],
    "isNew": true
  },
  "y11a-5A-new-10e": {
    "type": "multiple_choice",
    "question": "Complete the square to express \\(y = x^2 - 10x + 21\\) in vertex form \\(y = (x-h)^2 + k\\) and identify the translation from \\(y = x^2\\). Find only the translation description.",
    "opts": [
      "Shifted 5 units to the right and 4 units downward",
      "Shifted 5 units to the left and 4 units downward",
      "Shifted 5 units to the right and 4 units upward",
      "Shifted 5 units to the left and 4 units upward"
    ],
    "options": [
      "Shifted 5 units to the right and 4 units downward",
      "Shifted 5 units to the left and 4 units downward",
      "Shifted 5 units to the right and 4 units upward",
      "Shifted 5 units to the left and 4 units upward"
    ],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by writing down the given quadratic equation and preparing to complete the square. We group the variable terms to prepare for completing the square.",
        "workingOut": "Given: \\(y = x^2 - 10x + 21\\)"
      },
      {
        "explanation": "Next, we take the coefficient of the linear term, divide it by two, square it, and then add and subtract this value to complete the square. A common mistake is adding the value without subtracting it.",
        "workingOut": "\\(y = (x^2 - 10x + 25) - 25 + 21 \\;\\Rightarrow\\; y = (x - 5)^2 - 4\\)"
      },
      {
        "explanation": "Finally, we compare the equation to standard vertex form to find the translations. The term \\(x - 5\\) indicates a shift to the right by 5 units, and the term \\(- 4\\) indicates a shift downward by 4 units.",
        "workingOut": "Vertex form: \\(y = (x - 5)^2 - 4 \\;\\Rightarrow\\; \\text{Translation: Right 5, Down 4}\\)"
      }
    ],
    "isNew": true
  },
  "y11a-5A-new-10f": {
    "type": "multiple_choice",
    "question": "Complete the square to express \\(y = x^2 + 4x + 6\\) in vertex form \\(y = (x-h)^2 + k\\) and identify the translation from \\(y = x^2\\). Find only the translation description.",
    "opts": [
      "Shifted 2 units to the left and 2 units upward",
      "Shifted 2 units to the right and 2 units upward",
      "Shifted 2 units to the left and 2 units downward",
      "Shifted 2 units to the right and 2 units downward"
    ],
    "options": [
      "Shifted 2 units to the left and 2 units upward",
      "Shifted 2 units to the right and 2 units upward",
      "Shifted 2 units to the left and 2 units downward",
      "Shifted 2 units to the right and 2 units downward"
    ],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by writing down the given quadratic equation and preparing to complete the square. We group the variable terms to prepare for completing the square.",
        "workingOut": "Given: \\(y = x^2 + 4x + 6\\)"
      },
      {
        "explanation": "Next, we take the coefficient of the linear term, divide it by two, square it, and then add and subtract this value to complete the square. A common mistake is adding the value without subtracting it.",
        "workingOut": "\\(y = (x^2 + 4x + 4) - 4 + 6 \\;\\Rightarrow\\; y = (x + 2)^2 + 2\\)"
      },
      {
        "explanation": "Finally, we compare the equation to standard vertex form to find the translations. The term \\(x + 2\\) indicates a shift to the left by 2 units, and the term \\(+ 2\\) indicates a shift upward by 2 units.",
        "workingOut": "Vertex form: \\(y = (x + 2)^2 + 2 \\;\\Rightarrow\\; \\text{Translation: Left 2, Up 2}\\)"
      }
    ],
    "isNew": true
  }
};

async function run() {
  console.log('Transforming first batch of new- series to MCQ...');
  for (const [id, updateData] of Object.entries(updates)) {
    const docRef = db.collection('questions').doc(id);
    const snap = await docRef.get();
    if (snap.exists) {
      await docRef.update(updateData);
      console.log(`Updated ${id} successfully.`);
    } else {
      console.error(`${id} does not exist!`);
    }
  }
}

run().catch(console.error);
