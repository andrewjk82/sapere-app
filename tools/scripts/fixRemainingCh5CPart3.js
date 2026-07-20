import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
if (getApps().length === 0) {
  initializeApp({ credential: cert(serviceAccount) });
}
const db = getFirestore();

const updates = {
  "y11a-5C-new-12a": {
    "type": "multiple_choice",
    "question": "Prove algebraically that if \\(f(x)\\) is an odd function defined at \\(x = 0\\), then the graph of \\(y = f(x)\\) must pass through the origin.",
    "opts": [
      "Since \\(f(-x) = -f(x)\\), substituting \\(x = 0\\) gives \\(f(0) = -f(0) \\implies 2f(0) = 0 \\implies f(0) = 0\\).",
      "Since \\(f(-x) = f(x)\\), substituting \\(x = 0\\) gives \\(f(0) = f(0)\\), which doesn't restrict \\(f(0)\\) to be 0.",
      "Since \\(f(0) = 0\\) is true by definition for all functions.",
      "Since \\(f(-x) = -f(x)\\), substituting \\(x = 0\\) gives \\(f(0) = 0\\) directly without any intermediate algebra."
    ],
    "options": [
      "Since \\(f(-x) = -f(x)\\), substituting \\(x = 0\\) gives \\(f(0) = -f(0) \\implies 2f(0) = 0 \\implies f(0) = 0\\).",
      "Since \\(f(-x) = f(x)\\), substituting \\(x = 0\\) gives \\(f(0) = f(0)\\), which doesn't restrict \\(f(0)\\) to be 0.",
      "Since \\(f(0) = 0\\) is true by definition for all functions.",
      "Since \\(f(-x) = -f(x)\\), substituting \\(x = 0\\) gives \\(f(0) = 0\\) directly without any intermediate algebra."
    ],
    "a": 0,
    "answer": 0,
    "hint": "Start with the defining property of odd functions, \\(f(-x) = -f(x)\\), and substitute \\(x = 0\\).",
    "solution": "An odd function satisfies \\(f(-x) = -f(x)\\). Substituting \\(x = 0\\) yields \\(f(-0) = -f(0)\\), which simplifies to \\(f(0) = -f(0)\\). Adding \\(f(0)\\) to both sides gives \\(2f(0) = 0\\), which implies \\(f(0) = 0\\). Thus, the graph passes through \\((0, 0)\\).",
    "solutionSteps": [
      {
        "explanation": "We are given that \\(f(x)\\) is an odd function defined at \\(x = 0\\). Our strategy is to use the algebraic definition of odd symmetry to analyze the function value at the origin. This provides the starting point for our proof.",
        "workingOut": "\\text{Odd symmetry condition: } f(-x) = -f(x)",
        "graphData": null
      },
      {
        "explanation": "We substitute the value \\(x = 0\\) into the symmetry equation. Since \\(-0 = 0\\), the expression simplifies to \\(f(0) = -f(0)\\). A common mistake is assuming \\(f(-0)\\) is a separate independent variable rather than simplifying it directly to \\(f(0)\\). This step establishes the algebraic identity at the vertical axis.",
        "workingOut": "\\(f(-0) = -f(0) \\;\\Rightarrow\\; f(0) = -f(0)\\)",
        "graphData": null
      },
      {
        "explanation": "We solve the resulting linear equation for the unknown value \\(f(0)\\). Adding \\(f(0)\\) to both sides yields \\(2f(0) = 0\\), which simplifies directly to \\(f(0) = 0\\). This proves that the vertical intercept must be zero, meaning the graph passes through the origin.",
        "workingOut": "\\(f(0) + f(0) = 0 \\implies 2f(0) = 0 \\implies f(0) = 0\\)",
        "graphData": null
      }
    ],
    "isNew": true
  },
  "y11a-5C-new-13a-i": {
    "type": "multiple_choice",
    "question": "Suppose that \\(h(x) = f(x) \\times g(x)\\). Show that if \\(f(x)\\) and \\(g(x)\\) are both even, or if they are both odd, then \\(h(x)\\) is an even function.",
    "opts": [
      "If both are even, \\(h(-x) = f(x)g(x) = h(x)\\); if both are odd, \\(h(-x) = -f(x) \\neq h(x)\\).",
      "If both are even, \\(h(-x) = f(-x)g(-x) = f(x)g(x) = h(x)\\); if both are odd, \\(h(-x) = f(-x)g(-x) = (-f(x))(-g(x)) = f(x)g(x) = h(x)\\).",
      "If both are even, \\(h(-x) = -f(x)g(x)\\); if both are odd, \\(h(-x) = f(x)g(x)\\).",
      "Symmetry is not preserved when multiplying two symmetric functions."
    ],
    "options": [
      "If both are even, \\(h(-x) = f(x)g(x) = h(x)\\); if both are odd, \\(h(-x) = -f(x) \\neq h(x)\\).",
      "If both are even, \\(h(-x) = f(-x)g(-x) = f(x)g(x) = h(x)\\); if both are odd, \\(h(-x) = f(-x)g(-x) = (-f(x))(-g(x)) = f(x)g(x) = h(x)\\).",
      "If both are even, \\(h(-x) = -f(x)g(x)\\); if both are odd, \\(h(-x) = f(x)g(x)\\).",
      "Symmetry is not preserved when multiplying two symmetric functions."
    ],
    "a": 1,
    "answer": 1,
    "hint": "Evaluate \\(h(-x) = f(-x)g(-x)\\) under both scenarios using the properties of even and odd functions.",
    "solution": "If both are even: \\(h(-x) = f(-x)g(-x) = f(x)g(x) = h(x)\\). If both are odd: \\(h(-x) = f(-x)g(-x) = (-f(x))(-g(x)) = f(x)g(x) = h(x)\\). In both cases, \\(h(-x) = h(x)\\), so the function is even.",
    "solutionSteps": [
      {
        "explanation": "We are given the product function \\(h(x) = f(x) \\times g(x)\\). To determine its symmetry properties under horizontal reflection, our strategy is to evaluate \\(h(-x) = f(-x) \\times g(-x)\\) and substitute the properties of even and odd functions. This sets up the algebraic product.",
        "workingOut": "\\(h(-x) = f(-x) \\times g(-x)\\)",
        "graphData": null
      },
      {
        "explanation": "We analyze the first case where both \\(f(x)\\) and \\(g(x)\\) are even functions. By definition, \\(f(-x) = f(x)\\) and \\(g(-x) = g(x)\\). Substituting these yields \\(h(-x) = f(x)g(x) = h(x)\\), which proves even symmetry for this product. A common mistake is assuming that product functions automatically double or cancel their symmetry signs.",
        "workingOut": "\\(f(-x) = f(x) \\text{ and } g(-x) = g(x) \\;\\Rightarrow\\; h(-x) = f(x)g(x) = h(x)\\)",
        "graphData": null
      },
      {
        "explanation": "We analyze the second case where both \\(f(x)\\) and \\(g(x)\\) are odd functions. By definition, \\(f(-x) = -f(x)\\) and \\(g(-x) = -g(x)\\). Substituting these yields \\(h(-x) = (-f(x))(-g(x)) = f(x)g(x) = h(x)\\). Since the product of two negatives is positive, the product is even in both cases, which completes the proof.",
        "workingOut": "\\(f(-x) = -f(x) \\text{ and } g(-x) = -g(x) \\;\\Rightarrow\\; h(-x) = (-f(x))(-g(x)) = f(x)g(x) = h(x)\\)",
        "graphData": null
      }
    ],
    "isNew": true
  },
  "y11a-5C-new-13a-ii": {
    "type": "multiple_choice",
    "question": "Suppose that \\(h(x) = f(x) \\times g(x)\\). Show that if one of \\(f(x)\\) and \\(g(x)\\) is even and the other is odd, then \\(h(x)\\) is an odd function.",
    "opts": [
      "If \\(f\\) is even and \\(g\\) is odd, then \\(h(-x) = f(x)g(x) = h(x)\\).",
      "If \\(f\\) is even and \\(g\\) is odd, then \\(h(-x) = f(x)(-g(x)) = h(x)\\).",
      "If \\(f\\) is even and \\(g\\) is odd, then \\(h(-x) = f(-x)g(-x) = f(x)(-g(x)) = -f(x)g(x) = -h(x)\\).",
      "If \\(f\\) is even and \\(g\\) is odd, then \\(h(-x) = (-f(x))(-g(x)) = h(x)\\)."
    ],
    "options": [
      "If \\(f\\) is even and \\(g\\) is odd, then \\(h(-x) = f(x)g(x) = h(x)\\).",
      "If \\(f\\) is even and \\(g\\) is odd, then \\(h(-x) = f(x)(-g(x)) = h(x)\\).",
      "If \\(f\\) is even and \\(g\\) is odd, then \\(h(-x) = f(-x)g(-x) = f(x)(-g(x)) = -f(x)g(x) = -h(x)\\).",
      "If \\(f\\) is even and \\(g\\) is odd, then \\(h(-x) = (-f(x))(-g(x)) = h(x)\\)."
    ],
    "a": 2,
    "answer": 2,
    "hint": "Assume without loss of generality that f is even and g is odd, then find h(-x).",
    "solution": "Let \\(f\\) be even and \\(g\\) be odd. Then \\(h(-x) = f(-x)g(-x) = f(x)(-g(x)) = -f(x)g(x) = -h(x)\\). Since \\(h(-x) = -h(x)\\), the function is odd.",
    "solutionSteps": [
      {
        "explanation": "We are given the product function \\(h(x) = f(x) \\times g(x)\\) where one component is even and the other is odd. Without loss of generality, our strategy is to assume \\(f\\) is even and \\(g\\) is odd, and evaluate \\(h(-x)\\). This sets up the algebraic reflection product.",
        "workingOut": "\\(h(-x) = f(-x) \\times g(-x)\\)",
        "graphData": null
      },
      {
        "explanation": "We substitute the symmetry definitions: \\(f(-x) = f(x)\\) (even) and \\(g(-x) = -g(x)\\) (odd). We simplify the product by factoring out the negative sign. A common mistake is failing to apply the negative sign to the odd component's factor. This step yields the simplified horizontal reflection.",
        "workingOut": "\\(h(-x) = f(x) \\times (-g(x)) = -f(x)g(x)\\)",
        "graphData": null
      },
      {
        "explanation": "We compare the simplified expression for \\(h(-x)\\) with the original \\(h(x)\\). Since \\(h(-x) = -h(x)\\), the product satisfies the algebraic definition of odd symmetry. Thus, the final answer is that \\(h(x)\\) is an Odd function.",
        "workingOut": "\\(h(-x) = -h(x) \\;\\Rightarrow\\; \\text{Odd}\\)",
        "graphData": null
      }
    ],
    "isNew": true
  },
  "y11a-5C-new-13b-i": {
    "type": "multiple_choice",
    "question": "Suppose that \\(h(x) = f(x) + g(x)\\). Show that if \\(f(x)\\) and \\(g(x)\\) are both even functions, then their sum \\(h(x)\\) is also an even function.",
    "opts": [
      "\\(h(-x) = f(-x) + g(-x) = -f(x) - g(x) = -h(x)\\)",
      "\\(h(-x) = f(-x) - g(-x) = f(x) - g(x) = h(x)\\)",
      "\\(h(-x) = f(-x) + g(-x) = f(x) - g(x) = -h(x)\\)",
      "\\(h(-x) = f(-x) + g(-x) = f(x) + g(x) = h(x)\\)"
    ],
    "options": [
      "\\(h(-x) = f(-x) + g(-x) = -f(x) - g(x) = -h(x)\\)",
      "\\(h(-x) = f(-x) - g(-x) = f(x) - g(x) = h(x)\\)",
      "\\(h(-x) = f(-x) + g(-x) = f(x) - g(x) = -h(x)\\)",
      "\\(h(-x) = f(-x) + g(-x) = f(x) + g(x) = h(x)\\)"
    ],
    "a": 3,
    "answer": 3,
    "hint": "Evaluate h(-x) and substitute the properties of even functions for both terms.",
    "solution": "\\(h(-x) = f(-x) + g(-x)\\). Since both are even, \\(f(-x) = f(x)\\) and \\(g(-x) = g(x)\\). Thus, \\(h(-x) = f(x) + g(x) = h(x)\\), which proves even symmetry.",
    "solutionSteps": [
      {
        "explanation": "We are given the sum function \\(h(x) = f(x) + g(x)\\). To determine its symmetry algebraically, our strategy is to evaluate \\(h(-x) = f(-x) + g(-x)\\) and substitute the given properties of even functions. This establishes the horizontal reflection sum.",
        "workingOut": "\\(h(-x) = f(-x) + g(-x)\\)",
        "graphData": null
      },
      {
        "explanation": "We apply the definition of even functions, which states that \\(f(-x) = f(x)\\) and \\(g(-x) = g(x)\\), to rewrite each term in the sum. A common mistake is changing the addition to subtraction when reflecting variables. This substitution yields the simplified expression.",
        "workingOut": "\\(h(-x) = f(x) + g(x)\\)",
        "graphData": null
      },
      {
        "explanation": "We compare \\(h(-x)\\) with the original sum \\(h(x)\\). Since they are identical, \\(h(-x) = h(x)\\), the sum satisfies even symmetry. Therefore, the final answer is that \\(h(-x) = f(x) + g(x) = h(x)\\), proving the sum is Even.",
        "workingOut": "\\(h(-x) = h(x) \\;\\Rightarrow\\; \\text{Even}\\)",
        "graphData": null
      }
    ],
    "isNew": true
  },
  "y11a-5C-new-13b-ii": {
    "type": "multiple_choice",
    "question": "Suppose that \\(h(x) = f(x) + g(x)\\). Show that if \\(f(x)\\) and \\(g(x)\\) are both odd functions, then their sum \\(h(x)\\) is also an odd function.",
    "opts": [
      "\\(h(-x) = f(-x) + g(-x) = (-f(x)) + (-g(x)) = -(f(x) + g(x)) = -h(x)\\)",
      "\\(h(-x) = f(-x) + g(-x) = f(x) + g(x) = h(x)\\)",
      "\\(h(-x) = f(-x) - g(-x) = -f(x) + g(x) = -h(x)\\)",
      "\\(h(-x) = -f(x) - g(-x) = f(x) + g(x) = -h(x)\\)"
    ],
    "options": [
      "\\(h(-x) = f(-x) + g(-x) = (-f(x)) + (-g(x)) = -(f(x) + g(x)) = -h(x)\\)",
      "\\(h(-x) = f(-x) + g(-x) = f(x) + g(x) = h(x)\\)",
      "\\(h(-x) = f(-x) - g(-x) = -f(x) + g(x) = -h(x)\\)",
      "\\(h(-x) = -f(x) - g(-x) = f(x) + g(x) = -h(x)\\)"
    ],
    "a": 0,
    "answer": 0,
    "hint": "Evaluate h(-x) and substitute the properties of odd functions for both terms, then factor out -1.",
    "solution": "\\(h(-x) = f(-x) + g(-x)\\). Since both are odd, \\(f(-x) = -f(x)\\) and \\(g(-x) = -g(x)\\). Thus, \\(h(-x) = -f(x) - g(x) = -(f(x) + g(x)) = -h(x)\\), proving odd symmetry.",
    "solutionSteps": [
      {
        "explanation": "We are given the sum function \\(h(x) = f(x) + g(x)\\). To determine its symmetry, our strategy is to evaluate the horizontal reflection \\(h(-x) = f(-x) + g(-x)\\) and apply odd symmetry properties. This will begin the proof.",
        "workingOut": "\\(h(-x) = f(-x) + g(-x)\\)",
        "graphData": null
      },
      {
        "explanation": "We substitute the odd function properties \\(f(-x) = -f(x)\\) and \\(g(-x) = -g(x)\\) into the sum. A common mistake is failing to distribute the negative sign or incorrectly changing the addition sign. This gives the sum of negative terms.",
        "workingOut": "\\(h(-x) = (-f(x)) + (-g(x)) = -f(x) - g(x)\\)",
        "graphData": null
      },
      {
        "explanation": "We factor out \\(-1\\) from the expression to compare it directly with the original sum. Since \\(h(-x) = -(f(x) + g(x)) = -h(x)\\), the sum satisfies odd symmetry. Therefore, the final answer is that the sum is Odd.",
        "workingOut": "\\(h(-x) = -(f(x) + g(x)) = -h(x) \\;\\Rightarrow\\; \\text{Odd}\\)",
        "graphData": null
      }
    ],
    "isNew": true
  }
};

async function run() {
  console.log('Transforming 5 final questions in Ch 5C to MCQ...');
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
