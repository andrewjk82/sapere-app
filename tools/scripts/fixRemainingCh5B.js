import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
if (getApps().length === 0) {
  initializeApp({ credential: cert(serviceAccount) });
}
const db = getFirestore();

// Transforming the 14 graph_sketch questions in Ch 5B into 4지선다 객관식 (MCQ) format.
const updates = {
  "y11a-5B-new-1": {
    "type": "multiple_choice",
    "question": "Consider the parabola \\(y = x^2 - 4x\\). Find the equation obtained when the parabola is reflected in the \\(x\\)-axis.",
    "opts": [
      "\\(y = 4x - x^2\\)",
      "\\(y = x^2 + 4x\\)",
      "\\(y = -x^2 - 4x\\)",
      "\\(y = 4x + x^2\\)"
    ],
    "options": [
      "\\(y = 4x - x^2\\)",
      "\\(y = x^2 + 4x\\)",
      "\\(y = -x^2 - 4x\\)",
      "\\(y = 4x + x^2\\)"
    ],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by identifying the equation of the original parabola and the type of reflection. A reflection in the \\(x\\)-axis modifies the vertical coordinate output of the function.",
        "workingOut": "Given: \\(y = x^2 - 4x\\) and reflection: \\(x\\)-axis"
      },
      {
        "explanation": "Next, we apply the transformation by replacing \\(y\\) with \\(-y\\) (or multiplying the right-hand side expression by negative one). A common mistake is only changing the sign of the leading quadratic term.",
        "workingOut": "\\(-y = x^2 - 4x \\;\\Rightarrow\\; y = -(x^2 - 4x)\\)"
      },
      {
        "explanation": "Finally, we distribute the negative sign through the expression and rearrange the terms to simplify the quadratic equation.",
        "workingOut": "\\(y = -x^2 + 4x \\;\\Rightarrow\\; y = 4x - x^2\\)"
      }
    ],
    "isNew": true
  },
  "y11a-5B-new-2": {
    "type": "multiple_choice",
    "question": "Consider the hyperbola \\(y = \\frac{3}{x - 1}\\). Find the equation obtained when the hyperbola is reflected in the \\(y\\)-axis.",
    "opts": [
      "\\(y = -\\frac{3}{x + 1}\\)",
      "\\(y = \\frac{3}{x + 1}\\)",
      "\\(y = -\\frac{3}{x - 1}\\)",
      "\\(y = \\frac{3}{x - 3}\\)"
    ],
    "options": [
      "\\(y = -\\frac{3}{x + 1}\\)",
      "\\(y = \\frac{3}{x + 1}\\)",
      "\\(y = -\\frac{3}{x - 1}\\)",
      "\\(y = \\frac{3}{x - 3}\\)"
    ],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by writing down the initial rational function and the reflection type. A reflection in the vertical \\(y\\)-axis is achieved by replacing the independent variable \\(x\\) with \\(-x\\).",
        "workingOut": "Given: \\(y = \\frac{3}{x - 1}\\) and reflection: \\(y\\)-axis"
      },
      {
        "explanation": "Next, we perform the variable substitution inside the denominator. We enclose the substituted term to keep track of signs. A common mistake is changing the sign outside the rational expression instead of the variable term itself.",
        "workingOut": "\\(x \\;\u2192\\; -x \\;\\Rightarrow\\; y = \\frac{3}{-x - 1}\\)"
      },
      {
        "explanation": "Finally, we factor out a negative one from the denominator terms and place the negative sign in front of the rational fraction to simplify.",
        "workingOut": "\\(y = \\frac{3}{-(x + 1)} \\;\\Rightarrow\\; y = -\\frac{3}{x + 1}\\)"
      }
    ],
    "isNew": true
  },
  "y11a-5B-new-5": {
    "type": "multiple_choice",
    "question": "The graph of a function \\(y = f(x)\\) has zeroes at \\(x=1\\) and \\(x=3\\), and a local minimum at \\((2, -1)\\). Find the coordinates of the turning point (local maximum) on the graph of \\(y = -f(x)\\).",
    "opts": [
      "\\((2, 1)\\)",
      "\\((-2, -1)\\)",
      "\\((-2, 1)\\)",
      "\\((2, -1)\\)"
    ],
    "options": [
      "\\((2, 1)\\)",
      "\\((-2, -1)\\)",
      "\\((-2, 1)\\)",
      "\\((2, -1)\\)"
    ],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by analyzing the coordinate transformation rule. The equation \\(y = -f(x)\\) represents a reflection in the horizontal \\(x\\)-axis.",
        "workingOut": "Given: Local minimum at \\((2, -1)\\) and transformation: \\(y = -f(x)\\)"
      },
      {
        "explanation": "Next, we apply this horizontal reflection. Reflecting in the \\(x\\)-axis multiplies all vertical coordinates by negative one while keeping the horizontal coordinates unchanged. A common mistake is changing the sign of the horizontal coordinate.",
        "workingOut": "\\((x, y) \\;\u2192\\; (x, -y) \\;\\Rightarrow\\; (2, -1) \\;\u2192\\; (2, -(-1))\\)"
      },
      {
        "explanation": "Finally, we compute the double negative to find the new turning point coordinates. Since the original point was a local minimum, the reflected point becomes a local maximum.",
        "workingOut": "New turning point: \\((2, 1)\\)"
      }
    ],
    "isNew": true
  },
  "y11a-5B-new-6a": {
    "type": "multiple_choice",
    "question": "Write down the new equation for the function \\(y = x^2 + 1\\) after it is reflected in the \\(x\\)-axis.",
    "opts": [
      "\\(y = -x^2 - 1\\)",
      "\\(y = -x^2 + 1\\)",
      "\\(y = x^2 - 1\\)",
      "\\(y = -(x^2 - 1)\\)"
    ],
    "options": [
      "\\(y = -x^2 - 1\\)",
      "\\(y = -x^2 + 1\\)",
      "\\(y = x^2 - 1\\)",
      "\\(y = -(x^2 - 1)\\)"
    ],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by writing down the initial function and identifying the reflection type. A reflection in the \\(x\\)-axis modifies the vertical coordinate output of the function.",
        "workingOut": "Given: \\(y = x^2 + 1\\) and reflection: \\(x\\)-axis"
      },
      {
        "explanation": "Next, we apply the transformation by multiplying the entire right-hand side expression by negative one. A common mistake is only changing the sign of the quadratic term while leaving the constant unchanged.",
        "workingOut": "\\(y_{\\text{new}} = -(x^2 + 1)\\)"
      },
      {
        "explanation": "Finally, we distribute the negative sign through the binomial expression to obtain the simplified function.",
        "workingOut": "\\(y = -x^2 - 1\\)"
      }
    ],
    "isNew": true
  },
  "y11a-5B-new-6b": {
    "type": "multiple_choice",
    "question": "Write down the new equation for the function \\(y = x^3 - 2\\) after it is reflected in the \\(y\\)-axis.",
    "opts": [
      "\\(y = -x^3 - 2\\)",
      "\\(y = -x^3 + 2\\)",
      "\\(y = x^3 + 2\\)",
      "\\(y = -(x^3 - 2)\\)"
    ],
    "options": [
      "\\(y = -x^3 - 2\\)",
      "\\(y = -x^3 + 2\\)",
      "\\(y = x^3 + 2\\)",
      "\\(y = -(x^3 - 2)\\)"
    ],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by writing down the initial cubic function and the reflection type. A reflection in the vertical \\(y\\)-axis is achieved by replacing the independent variable \\(x\\) with \\(-x\\).",
        "workingOut": "Given: \\(y = x^3 - 2\\) and reflection: \\(y\\)-axis"
      },
      {
        "explanation": "Next, we perform the variable substitution. We enclose the substituted term to keep track of exponents. A common mistake is multiplying the entire expression by negative one instead of substituting into the variable.",
        "workingOut": "\\(x \\;\u2192\\; -x \\;\\Rightarrow\\; y = (-x)^3 - 2\\)"
      },
      {
        "explanation": "Finally, we evaluate the exponent. A negative variable raised to an odd power retains its negative sign, yielding the simplified equation.",
        "workingOut": "\\((-x)^3 = -x^3 \\;\\Rightarrow\\; y = -x^3 - 2\\)"
      }
    ],
    "isNew": true
  },
  "y11a-5B-new-6c": {
    "type": "multiple_choice",
    "question": "Write down the new equation for the function \\(y = 3^x\\) after it is rotated by \\(180^{\\circ}\\) about the origin.",
    "opts": [
      "\\(y = -3^{-x}\\)",
      "\\(y = 3^{-x}\\)",
      "\\(y = -3^x\\)",
      "\\(y = -3^{x - 1}\\)"
    ],
    "options": [
      "\\(y = -3^{-x}\\)",
      "\\(y = 3^{-x}\\)",
      "\\(y = -3^x\\)",
      "\\(y = -3^{x - 1}\\)"
    ],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by defining the transformation rules for rotation. A \\(180^{\\circ}\\) rotation about the origin is equivalent to a horizontal reflection followed by a vertical reflection.",
        "workingOut": "Rotation formula: \\(y = -f(-x)\\)"
      },
      {
        "explanation": "Next, we substitute \\(-x\\) for all horizontal variables in the exponential equation to perform the horizontal reflection step.",
        "workingOut": "\\(f(-x) = 3^{-x}\\)"
      },
      {
        "explanation": "Finally, we multiply the entire expression by negative one to perform the vertical reflection step and find the completed equation.",
        "workingOut": "\\(y = -3^{-x}\\)"
      }
    ],
    "isNew": true
  },
  "y11a-5B-new-6d": {
    "type": "multiple_choice",
    "question": "Write down the new equation for the function \\(y = 6x - x^2\\) after it is rotated by \\(180^{\\circ}\\) about the origin.",
    "opts": [
      "\\(y = 6x + x^2\\)",
      "\\(y = -6x + x^2\\)",
      "\\(y = -6x - x^2\\)",
      "\\(y = 6x - x^2\\)"
    ],
    "options": [
      "\\(y = 6x + x^2\\)",
      "\\(y = -6x + x^2\\)",
      "\\(y = -6x - x^2\\)",
      "\\(y = 6x - x^2\\)"
    ],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by defining the transformation rules for rotation. A \\(180^{\\circ}\\) rotation about the origin is equivalent to a horizontal reflection followed by a vertical reflection.",
        "workingOut": "Rotation formula: \\(y = -f(-x)\\)"
      },
      {
        "explanation": "Next, we substitute \\(-x\\) for all horizontal variables in the equation and evaluate the terms inside the parentheses.",
        "workingOut": "\\(f(-x) = 6(-x) - (-x)^2 = -6x - x^2\\)"
      },
      {
        "explanation": "Finally, we multiply the entire expression by negative one to perform the vertical reflection step and find the completed equation.",
        "workingOut": "\\(y = -(-6x - x^2) = 6x + x^2\\)"
      }
    ],
    "isNew": true
  },
  "y11a-5B-new-6e": {
    "type": "multiple_choice",
    "question": "Write down the new equation for the relation \\(x^2 + (y-2)^2 = 16\\) after it is reflected in the \\(y\\)-axis.",
    "opts": [
      "\\(x^2 + (y-2)^2 = 16\\)",
      "\\(x^2 + (y+2)^2 = 16\\)",
      "\\((x-2)^2 + y^2 = 16\\)",
      "\\((x+2)^2 + y^2 = 16\\)"
    ],
    "options": [
      "\\(x^2 + (y-2)^2 = 16\\)",
      "\\(x^2 + (y+2)^2 = 16\\)",
      "\\((x-2)^2 + y^2 = 16\\)",
      "\\((x+2)^2 + y^2 = 16\\)"
    ],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by identifying the equation of the circle and the type of reflection. A reflection in the vertical \\(y\\)-axis is achieved by replacing the independent variable \\(x\\) with \\(-x\\).",
        "workingOut": "Given: \\(x^2 + (y-2)^2 = 16\\) and reflection: \\(y\\)-axis"
      },
      {
        "explanation": "Next, we substitute \\(-x\\) in place of the horizontal coordinate variable. A common mistake is assuming the sign changes outside the squared term.",
        "workingOut": "\\(x \\;\u2192\\; -x \\;\\Rightarrow\\; (-x)^2 + (y-2)^2 = 16\\)"
      },
      {
        "explanation": "Finally, we evaluate the squared term. Since squaring a negative value yields a positive output, the equation remains completely unchanged.",
        "workingOut": "\\((-x)^2 = x^2 \\;\\Rightarrow\\; x^2 + (y-2)^2 = 16\\)"
      }
    ],
    "isNew": true
  },
  "y11a-5B-new-6f": {
    "type": "multiple_choice",
    "question": "Write down the new equation for the function \\(y = -\\frac{2}{x}\\) after it is reflected in the \\(x\\)-axis.",
    "opts": [
      "\\(y = \\frac{2}{x}\\)",
      "\\(y = -\\frac{2}{x}\\)",
      "\\(y = \\frac{2}{-x}\\)",
      "\\(y = -\\frac{x}{2}\\)"
    ],
    "options": [
      "\\(y = \\frac{2}{x}\\)",
      "\\(y = -\\frac{2}{x}\\)",
      "\\(y = \\frac{2}{-x}\\)",
      "\\(y = -\\frac{x}{2}\\)"
    ],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by writing down the initial reciprocal function and the reflection type. A reflection in the \\(x\\)-axis modifies the vertical coordinate output of the function.",
        "workingOut": "Given: \\(y = -\\frac{2}{x}\\) and reflection: \\(x\\)-axis"
      },
      {
        "explanation": "Next, we apply the transformation by multiplying the entire function expression by negative one. A common mistake is changing the signs in both the numerator and denominator.",
        "workingOut": "\\(y_{\\text{new}} = -\\left(-\\frac{2}{x}\\right)\\)"
      },
      {
        "explanation": "Finally, we resolve the signs to simplify the equation. The product of two negatives is positive, yielding the final equation.",
        "workingOut": "\\(y = \\frac{2}{x}\\)"
      }
    ],
    "isNew": true
  },
  "y11a-5B-new-7a": {
    "type": "multiple_choice",
    "question": "Consider the hyperbola \\(y = \\frac{1}{x - 3} + 2\\). Find the equations of its vertical and horizontal asymptotes.",
    "opts": [
      "Vertical: \\(x = 3\\), Horizontal: \\(y = 2\\)",
      "Vertical: \\(x = -3\\), Horizontal: \\(y = 2\\)",
      "Vertical: \\(x = 3\\), Horizontal: \\(y = -2\\)",
      "Vertical: \\(x = -3\\), Horizontal: \\(y = -2\\)"
    ],
    "options": [
      "Vertical: \\(x = 3\\), Horizontal: \\(y = 2\\)",
      "Vertical: \\(x = -3\\), Horizontal: \\(y = 2\\)",
      "Vertical: \\(x = 3\\), Horizontal: \\(y = -2\\)",
      "Vertical: \\(x = -3\\), Horizontal: \\(y = -2\\)"
    ],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by writing down the hyperbola equation and identifying its translations. The vertical asymptote occurs where the denominator is zero, and the horizontal asymptote corresponds to the vertical translation.",
        "workingOut": "Given: \\(y = \\frac{1}{x - 3} + 2\\)"
      },
      {
        "explanation": "Next, we determine the vertical asymptote by finding the value of the independent variable that makes the rational fraction undefined. A common mistake is reversing the sign of the shift.",
        "workingOut": "Set denominator to zero: \\(x - 3 = 0 \\;\u2192\\; x = 3\\)"
      },
      {
        "explanation": "Finally, we determine the horizontal asymptote by analyzing the behavior of the output as the horizontal coordinate becomes extremely large. The fractional term approaches zero, leaving only the constant.",
        "workingOut": "As \\(x \\;\u2192\\; \\pm\\infty\\), \\(\\frac{1}{x - 3} \\;\u2192\\; 0 \\;\u2192\\; y \\;\u2192\\; 2\\)"
      }
    ],
    "isNew": true
  },
  "y11a-5B-new-7b-i": {
    "type": "multiple_choice",
    "question": "The hyperbola \\(y = \\frac{1}{x - 3} + 2\\) is transformed such that its vertical asymptote is unchanged, but its horizontal asymptote changes sign. Determine the new equation.",
    "opts": [
      "\\(y = -\\frac{1}{x - 3} - 2\\)",
      "\\(y = \\frac{1}{x + 3} - 2\\)",
      "\\(y = \\frac{1}{x - 3} - 2\\)",
      "\\(y = -\\frac{1}{x + 3} - 2\\)"
    ],
    "options": [
      "\\(y = -\\frac{1}{x - 3} - 2\\)",
      "\\(y = \\frac{1}{x + 3} - 2\\)",
      "\\(y = \\frac{1}{x - 3} - 2\\)",
      "\\(y = -\\frac{1}{x + 3} - 2\\)"
    ],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by analyzing the requirements. The vertical asymptote at \\(x = 3\\) must remain unchanged, meaning the denominator factor \\(x - 3\\) cannot be modified. The horizontal asymptote must change from \\(y = 2\\) to \\(y = -2\\).",
        "workingOut": "Target: Vertical asymptote: \\(x = 3\\), Horizontal asymptote: \\(y = -2\\)"
      },
      {
        "explanation": "Next, we identify the transformation. Reflecting the entire function in the horizontal \\(x\\)-axis multiplies the output by negative one. This shifts the horizontal asymptote from \\(y = 2\\) to \\(y = -2\\) while keeping the vertical asymptote unchanged.",
        "workingOut": "Apply vertical reflection: \\(y_{\\text{new}} = -f(x) = -\\left(\\frac{1}{x - 3} + 2\\right)\\)"
      },
      {
        "explanation": "Finally, we distribute the negative sign through the expression terms to obtain the new hyperbola equation.",
        "workingOut": "\\(y = -\\frac{1}{x - 3} - 2\\)"
      }
    ],
    "isNew": true
  },
  "y11a-5B-new-7b-ii": {
    "type": "multiple_choice",
    "question": "The hyperbola \\(y = \\frac{1}{x - 3} + 2\\) has positive intercepts on both axes. Find the equation obtained when the hyperbola is rotated \\(180^{\\circ}\\) about the origin.",
    "opts": [
      "\\(y = \\frac{1}{x + 3} - 2\\)",
      "\\(y = -\\frac{1}{x + 3} - 2\\)",
      "\\(y = -\\frac{1}{x - 3} - 2\\)",
      "\\(y = \\frac{1}{x - 3} - 2\\)"
    ],
    "options": [
      "\\(y = \\frac{1}{x + 3} - 2\\)",
      "\\(y = -\\frac{1}{x + 3} - 2\\)",
      "\\(y = -\\frac{1}{x - 3} - 2\\)",
      "\\(y = \\frac{1}{x - 3} - 2\\)"
    ],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by defining the transformation rules for rotation. A \\(180^{\\circ}\\) rotation about the origin is equivalent to a horizontal reflection followed by a vertical reflection.",
        "workingOut": "Rotation formula: \\(y = -f(-x)\\)"
      },
      {
        "explanation": "Next, we substitute \\(-x\\) for all horizontal variables in the hyperbola equation and simplify the denominator term.",
        "workingOut": "\\(f(-x) = \frac{1}{-x - 3} + 2 = -\\frac{1}{x + 3} + 2\\)"
      },
      {
        "explanation": "Finally, we multiply the entire expression by negative one to perform the vertical reflection step and find the completed equation.",
        "workingOut": "\\(y = -\\left(-\\frac{1}{x + 3} + 2\\right) = \\frac{1}{x + 3} - 2\\)"
      }
    ],
    "isNew": true
  },
  "y11a-5B-new-9": {
    "type": "multiple_choice",
    "question": "Consider the circle equation \\(x^2 + y^2 = r^2\\). Determine which transformation leaves the equation completely unchanged.",
    "opts": [
      "Reflection in either the \\(x\\)-axis or the \\(y\\)-axis",
      "Reflection in the \\(x\\)-axis only",
      "Reflection in the \\(y\\)-axis only",
      "Translation by 1 unit vertically"
    ],
    "options": [
      "Reflection in either the \\(x\\)-axis or the \\(y\\)-axis",
      "Reflection in the \\(x\\)-axis only",
      "Reflection in the \\(y\\)-axis only",
      "Translation by 1 unit vertically"
    ],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by analyzing the circle equation centered at the origin. We evaluate the algebraic effects of coordinate reflections.",
        "workingOut": "Circle relation: \\(x^2 + y^2 = r^2\\)"
      },
      {
        "explanation": "Next, we substitute the transformations. Reflecting in the \\(y\\)-axis replaces \\(x\\) with \\(-x\\), and reflecting in the \\(x\\)-axis replaces \\(y\\) with \\(-y\\). A common mistake is neglecting that squaring negative terms yields positive terms.",
        "workingOut": "\\((-x)^2 + y^2 = x^2 + y^2\\) and \\(x^2 + (-y)^2 = x^2 + y^2\\)"
      },
      {
        "explanation": "Finally, we conclude that both variables are squared, so replacing either coordinate with its negative value results in the exact same original relation, proving symmetry.",
        "workingOut": "Both substitutions yield: \\(x^2 + y^2 = r^2\\)"
      }
    ],
    "isNew": true
  },
  "y11a-5B-new-12": {
    "type": "multiple_choice",
    "question": "Let \\(c(x) = \\frac{3^x + 3^{-x}}{2}\\). State whether this function is even, odd, or neither, and what symmetry it possesses.",
    "opts": [
      "Even function, symmetric about the \\(y\\)-axis",
      "Odd function, symmetric about the origin",
      "Even function, symmetric about the \\(x\\)-axis",
      "Odd function, symmetric about the \\(y\\)-axis"
    ],
    "options": [
      "Even function, symmetric about the \\(y\\)-axis",
      "Odd function, symmetric about the origin",
      "Even function, symmetric about the \\(x\\)-axis",
      "Odd function, symmetric about the \\(y\\)-axis"
    ],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by reviewing the algebraic conditions for function symmetry. An even function satisfies \\(f(-x) = f(x)\\), which corresponds to symmetry about the vertical axis.",
        "workingOut": "Condition check: \\(c(-x) = \\frac{3^{-x} + 3^{-(-x)}}{2}\\)"
      },
      {
        "explanation": "Next, we simplify the exponents. The double negative becomes positive, and addition is commutative, allowing us to rearrange the terms inside the numerator. A common mistake is reversing the signs incorrectly.",
        "workingOut": "\\(c(-x) = \\frac{3^{-x} + 3^x}{2} = \\frac{3^x + 3^{-x}}{2}\\)"
      },
      {
        "explanation": "Finally, we compare the result with the original function definition. Since they are identical, the function is even and has symmetry about the vertical coordinate axis.",
        "workingOut": "Since \\(c(-x) = c(x)\\), the function is even."
      }
    ],
    "isNew": true
  }
};

async function run() {
  console.log('Transforming graph_sketch questions in Ch 5B to MCQ...');
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
