import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
if (getApps().length === 0) {
  initializeApp({ credential: cert(serviceAccount) });
}
const db = getFirestore();

// Updating the first 15 questions of Ch 5C:
// 3PYBrM3cjmrXk3PUrckG, YNPlVW2QDBw6Gtnld7KZ, dd7VoQweyP9oQxokENA3, y11a-5C-new-1a, 1b, 1c, 1d, 1e, 1f, 2a-i, 2a-ii, 2b-i, 2b-ii, 2c-i, 2c-ii

const updates = {
  "3PYBrM3cjmrXk3PUrckG": {
    "question": "Classify the function \\(f(x) = x^3 - 4x\\) as even, odd, or neither.",
    "opts": ["Odd", "Even", "Neither", "Both"],
    "options": ["Odd", "Even", "Neither", "Both"],
    "a": 0,
    "answer": 0,
    "hint": "Evaluate \\(f(-x)\\) and check if it equals \\(-f(x)\\) or \\(f(x)\\).",
    "solution": "We substitute \\(-x\\) into the equation: \\(f(-x) = (-x)^3 - 4(-x) = -x^3 + 4x = -(x^3 - 4x) = -f(x)\\). Since \\(f(-x) = -f(x)\\), the function is odd.",
    "solutionSteps": [
      {
        "explanation": "We are given the polynomial function \\(f(x) = x^3 - 4x\\). To classify its symmetry, our strategy is to algebraically evaluate \\(f(-x)\\) and check if it equals \\(f(x)\\) (even symmetry) or \\(-f(x)\\) (odd symmetry). This systematic approach helps distinguish geometric behavior.",
        "workingOut": "\\(f(x) = x^3 - 4x\\)",
        "graphData": null
      },
      {
        "explanation": "We substitute \\(-x\\) in place of \\(x\\) throughout the expression. We then apply exponential rules, noting that negative bases raised to odd powers retain their negative sign. A common mistake here is neglecting to distribute the negative sign to all terms, particularly linear terms like \\(-4x\\). This step produces a simplified expression for \\(f(-x)\\) to be analyzed next.",
        "workingOut": "\\(f(-x) = (-x)^3 - 4(-x) \\;\\Rightarrow\\; f(-x) = -x^3 + 4x\\)",
        "graphData": null
      },
      {
        "explanation": "We factor out \\(-1\\) from the simplified terms to compare the result with the original function. Since we find that \\(f(-x) = -f(x)\\), the function possesses origin symmetry. Thus, the final classification is that \\(f(x)\\) is an odd function, which matches our verification. This result indicates that rotating the curve by \\(180^{\\circ}\\) around the origin maps it onto itself.",
        "workingOut": "\\(-f(x) = -(x^3 - 4x) = -x^3 + 4x \\;\\Rightarrow\\; f(-x) = -f(x) \\implies \\text{Odd}\\)",
        "graphData": null
      }
    ],
    "isNew": true
  },
  "YNPlVW2QDBw6Gtnld7KZ": {
    "question": "Classify the function \\(f(x) = \\dfrac{x}{x^2 + 4}\\) as even, odd, or neither.",
    "opts": ["Even", "Odd", "Neither", "Both"],
    "options": ["Even", "Odd", "Neither", "Both"],
    "a": 1,
    "answer": 1,
    "hint": "Substitute \\(-x\\) into the numerator and denominator.",
    "solution": "Evaluating \\(f(-x) = \\frac{-x}{(-x)^2 + 4} = \\frac{-x}{x^2 + 4} = -f(x)\\). Since \\(f(-x) = -f(x)\\), the function is odd.",
    "solutionSteps": [
      {
        "explanation": "We are given the rational function \\(f(x) = \\dfrac{x}{x^2 + 4}\\). To determine its symmetry, we will evaluate \\(f(-x)\\) and compare it to both \\(f(x)\\) and \\(-f(x)\\). This will allow us to classify it as even, odd, or neither based on standard algebraic conditions.",
        "workingOut": "\\(f(x) = \\dfrac{x}{x^2 + 4}\\)",
        "graphData": null
      },
      {
        "explanation": "We substitute \\(-x\\) for all occurrences of \\(x\\) in both the numerator and the denominator. We simplify the denominator by noting that squaring a negative quantity yields a positive result, \\((-x)^2 = x^2\\). A common mistake is changing the sign of the constant term in the denominator. This simplification yields the expression for \\(f(-x)\\).",
        "workingOut": "\\(f(-x) = \\dfrac{-x}{(-x)^2 + 4} \\;\\Rightarrow\\; f(-x) = -\\dfrac{x}{x^2 + 4}\\)",
        "graphData": null
      },
      {
        "explanation": "We compare the resulting expression for \\(f(-x)\\) with the original \\(f(x)\\). Since \\(f(-x)\\) is equal to \\(-f(x)\\), the function satisfies the algebraic condition for an odd function. Therefore, the final answer is that the function is odd. This confirms the function's point symmetry about the origin.",
        "workingOut": "\\(f(-x) = -f(x) \\;\\Rightarrow\\; \\text{Odd}\\)",
        "graphData": null
      }
    ],
    "isNew": true
  },
  "dd7VoQweyP9oQxokENA3": {
    "question": "Classify the function \\(f(x) = x^4 - 3x^2 + 1\\) as even, odd, or neither.",
    "opts": ["Neither", "Odd", "Even", "Both"],
    "options": ["Neither", "Odd", "Even", "Both"],
    "a": 2,
    "answer": 2,
    "hint": "Check the powers of \\(x\\) in the function.",
    "solution": "Substitute \\(-x\\) into the equation: \\(f(-x) = (-x)^4 - 3(-x)^2 + 1 = x^4 - 3x^2 + 1 = f(x)\\). Since \\(f(-x) = f(x)\\), the function is even.",
    "solutionSteps": [
      {
        "explanation": "We are given the function \\(f(x) = x^4 - 3x^2 + 1\\) containing even powers of \\(x\\). To analyze its symmetry, we will algebraically substitute \\(-x\\) for \\(x\\) and evaluate the outcome. This strategy will determine whether the graph is symmetric about the vertical axis or the origin.",
        "workingOut": "\\(f(x) = x^4 - 3x^2 + 1\\)",
        "graphData": null
      },
      {
        "explanation": "We substitute \\(-x\\) into every term with the variable \\(x\\) in the function. We then simplify the expression by applying exponent rules, noting that any real number raised to an even power becomes positive. A common mistake is mistakenly altering the sign of the constant term \\(+1\\). This step gives us the simplified expression for \\(f(-x)\\).",
        "workingOut": "\\(f(-x) = (-x)^4 - 3(-x)^2 + 1 \\;\\Rightarrow\\; f(-x) = x^4 - 3x^2 + 1\\)",
        "graphData": null
      },
      {
        "explanation": "We compare the simplified expression for \\(f(-x)\\) with our original function \\(f(x)\\). Since they are identical, \\(f(-x) = f(x)\\), the algebraic condition for even symmetry is satisfied. Thus, the final answer is that the function is even. This result confirms that the graph is symmetric when reflected across the vertical \\(y\\)-axis.",
        "workingOut": "\\(f(-x) = f(x) \\;\\Rightarrow\\; \\text{Even}\\)",
        "graphData": null
      }
    ],
    "isNew": true
  },
  "y11a-5C-new-1a": {
    "type": "multiple_choice",
    "question": "A function \\(y = f(x)\\) is represented by a parabola that opens upwards and has its vertex on the \\(y\\)-axis. Classify this function as even, odd, or neither.",
    "opts": ["Odd", "Neither", "Both", "Even"],
    "options": ["Odd", "Neither", "Both", "Even"],
    "a": 3,
    "answer": 3,
    "solutionSteps": [
      {
        "explanation": "We are given a parabola opening upwards with its vertex positioned on the vertical \\(y\\)-axis. To classify this function, we will write its general algebraic form and test it for symmetry. This strategy will help us determine if the geometric symmetry corresponds to even or odd behavior.",
        "workingOut": "\\(f(x) = ax^2 + k\\)",
        "graphData": null
      },
      {
        "explanation": "We test the algebraic symmetry by substituting \\(-x\\) for \\(x\\). Squaring the negative variable returns a positive term. A common mistake is assuming that any parabola represents an even function, which is only true if its vertex lies on the \\(y\\)-axis. This substitution yields \\(f(-x) = a(-x)^2 + k\\).",
        "workingOut": "\\(f(-x) = a(-x)^2 + k \\;\\Rightarrow\\; f(-x) = ax^2 + k\\)",
        "graphData": null
      },
      {
        "explanation": "We compare the substituted expression with our original function \\(f(x)\\). Since they are identical, \\(f(-x) = f(x)\\), the algebraic condition for even symmetry is met. Therefore, the final answer is that the function is even. This algebraically confirms the mirror symmetry across the vertical \\(y\\)-axis.",
        "workingOut": "\\(f(-x) = f(x) \\;\\Rightarrow\\; \\text{Even}\\)",
        "graphData": null
      }
    ],
    "isNew": true
  },
  "y11a-5C-new-1b": {
    "type": "multiple_choice",
    "question": "A function \\(y = f(x)\\) is represented by a straight line that has a positive gradient and a non-zero \\(y\\)-intercept. Classify this function as even, odd, or neither.",
    "opts": ["Neither", "Even", "Odd", "Both"],
    "options": ["Neither", "Even", "Odd", "Both"],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We are given a linear function represented by a straight line with a positive slope and a non-zero vertical intercept. To determine its symmetry, we will formulate its algebraic equation and test it for even and odd conditions. This method will mathematically classify the function.",
        "workingOut": "\\(f(x) = mx + c\\)",
        "graphData": null
      },
      {
        "explanation": "We substitute \\(-x\\) into the equation, yielding \\(f(-x) = m(-x) + c\\). A common mistake is believing that all linear equations are odd, ignoring the effect of a non-zero constant intercept. This step provides the negative-variable form.",
        "workingOut": "\\(f(-x) = m(-x) + c \\;\\Rightarrow\\; f(-x) = -mx + c\\)",
        "graphData": null
      },
      {
        "explanation": "We compare the result with \\(f(x) = mx + c\\) and \\(-f(x) = -mx - c\\). Since \\(f(-x)\\) is equal to neither of these, the conditions for even and odd symmetry both fail. Hence, the final classification is that the function is neither. This aligns with the geometric observation that the line is not symmetric about the vertical axis or the origin.",
        "workingOut": "\\(f(-x) \\neq f(x) \\text{ and } f(-x) \\neq -f(x) \\;\\Rightarrow\\; \\text{Neither}\\)",
        "graphData": null
      }
    ],
    "isNew": true
  },
  "y11a-5C-new-1c": {
    "type": "multiple_choice",
    "question": "A function \\(y = f(x)\\) is represented by a cubic curve that passes through the origin and exhibits \\(180^{\\circ}\\) point symmetry about the origin. Classify this function.",
    "opts": ["Even", "Odd", "Neither", "Both"],
    "options": ["Even", "Odd", "Neither", "Both"],
    "a": 1,
    "answer": 1,
    "solutionSteps": [
      {
        "explanation": "We are given a cubic curve passing through the origin that possesses \\(180^{\\circ}\\) rotational symmetry about the origin. To classify this function, we will translate this geometric description into its algebraic definition. This strategy will allow us to identify the symmetry class.",
        "workingOut": "\\(\\text{Rotation of } 180^{\\circ} \\text{ about } (0,0)\\)",
        "graphData": null
      },
      {
        "explanation": "We express this geometric property algebraically. A rotation about the origin maps any point \\((x, y)\\) on the graph to \\((-x, -y)\\). A common mistake is confusing vertical axis symmetry with origin symmetry. This coordinate mapping implies that the function satisfies \\(f(-x) = -f(x)\\).",
        "workingOut": "\\((x, y) \\;\u2192\\; (-x, -y) \\;\\Rightarrow\\; f(-x) = -f(x)\\)",
        "graphData": null
      },
      {
        "explanation": "We identify the class of functions that satisfy this algebraic condition. Functions satisfying \\(f(-x) = -f(x)\\) are classified as odd. Therefore, the final answer is that the function is odd. This confirms the function's point symmetry about the origin.",
        "workingOut": "\\(f(-x) = -f(x) \\;\\Rightarrow\\; \\text{Odd}\\)",
        "graphData": null
      }
    ],
    "isNew": true
  },
  "y11a-5C-new-1d": {
    "type": "multiple_choice",
    "question": "A function \\(y = f(x)\\) is represented by a straight line that passes directly through the origin. Classify this function.",
    "opts": ["Even", "Neither", "Odd", "Both"],
    "options": ["Even", "Neither", "Odd", "Both"],
    "a": 2,
    "answer": 2,
    "solutionSteps": [
      {
        "explanation": "We are given a straight line passing through the origin. To classify its symmetry, we will write its equation in slope-intercept form and algebraically test the symmetry properties. This strategy will determine whether it is even, odd, or neither.",
        "workingOut": "\\(f(x) = mx\\)",
        "graphData": null
      },
      {
        "explanation": "We test for algebraic symmetry by substituting \\(-x\\) in place of \\(x\\). A common mistake is failing to simplify the negative product. This gives us the expression \\(f(-x) = -mx\\).",
        "workingOut": "\\(f(-x) = m(-x) \\;\\Rightarrow\\; f(-x) = -mx\\)",
        "graphData": null
      },
      {
        "explanation": "We compare \\(f(-x)\\) with the negative of the original function. Since \\(f(-x) = -f(x)\\), the function is odd. Thus, the final answer is that the function is odd. This confirms the line is symmetric under a \\(180^{\\circ}\\) rotation about the origin.",
        "workingOut": "\\(f(-x) = -f(x) \\;\\Rightarrow\\; \\text{Odd}\\)",
        "graphData": null
      }
    ],
    "isNew": true
  },
  "y11a-5C-new-1e": {
    "type": "multiple_choice",
    "question": "A function \\(y = f(x)\\) has a graph that looks like a wave passing through the origin, and if you rotate it \\(180^{\\circ}\\) about the origin, it looks identical. Classify this function.",
    "opts": ["Even", "Neither", "Both", "Odd"],
    "options": ["Even", "Neither", "Both", "Odd"],
    "a": 3,
    "answer": 3,
    "solutionSteps": [
      {
        "explanation": "We are given a wave-like function passing through the origin that remains unchanged when rotated by \\(180^{\\circ}\\) around the origin. To classify this function, we will translate this geometric rotation into its algebraic definition and identify the category it fits. This strategy will mathematically prove its symmetry.",
        "workingOut": "\\(\\text{Rotation of } 180^{\\circ} \\text{ symmetry about } (0,0)\\)",
        "graphData": null
      },
      {
        "explanation": "We translate this geometric condition to its algebraic equivalent. Origin symmetry corresponds to the relation \\(f(-x) = -f(x)\\). A common mistake is assuming all waves are even, neglecting that waves can have origin symmetry.",
        "workingOut": "\\(f(-x) = -f(x)\\)",
        "graphData": null
      },
      {
        "explanation": "We state the definition. Functions that satisfy the relation \\(f(-x) = -f(x)\\) are classified as odd functions. Thus, the final answer is that the function is odd, which is verified by its geometric origin symmetry.",
        "workingOut": "\\(f(-x) = -f(x) \\;\\Rightarrow\\; \\text{Odd}\\)",
        "graphData": null
      }
    ],
    "isNew": true
  },
  "y11a-5C-new-1f": {
    "type": "multiple_choice",
    "question": "A function \\(y = f(x)\\) has a 'W' shape and is perfectly mirrored across the \\(y\\)-axis. Classify this function.",
    "opts": ["Even", "Odd", "Neither", "Both"],
    "options": ["Even", "Odd", "Neither", "Both"],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We are given a function with a 'W' shape that has perfect reflectional symmetry across the vertical \\(y\\)-axis. To classify this function, we will express this mirror symmetry algebraically and determine its classification. This approach connects the geometric shape to its algebraic definition.",
        "workingOut": "\\(\\text{Reflectional symmetry across the } y\\text{-axis}\\)",
        "graphData": null
      },
      {
        "explanation": "We translate this geometric symmetry to its algebraic equivalent. A vertical axis reflection is represented by the equation \\(f(-x) = f(x)\\). A common mistake is confusing vertical axis symmetry with horizontal axis symmetry.",
        "workingOut": "\\((x, y) \\;\u2192\\; (-x, y) \\;\\Rightarrow\\; f(-x) = f(x)\\)",
        "graphData": null
      },
      {
        "explanation": "We state the classification name. Functions that satisfy the relation \\(f(-x) = f(x)\\) are classified as even functions. Therefore, the final answer is that the function is even, which mathematically confirms the y-axis reflection symmetry.",
        "workingOut": "\\(f(-x) = f(x) \\;\\Rightarrow\\; \\text{Even}\\)",
        "graphData": null
      }
    ],
    "isNew": true
  },
  "y11a-5C-new-2a-i": {
    "type": "multiple_choice",
    "question": "The graph of \\(y = f(x)\\) for \\(x \\ge 0\\) is a quarter-circle in the first quadrant, ending at \\((2, 0)\\). If the function is even, find the coordinate of the other endpoint of the semicircle in the second quadrant.",
    "opts": ["\\((0, 2)\\)", "\\((-2, 0)\\)", "\\((2, 0)\\)", "\\((0, -2)\\)"],
    "options": ["\\((0, 2)\\)", "\\((-2, 0)\\)", "\\((2, 0)\\)", "\\((0, -2)\\)"],
    "a": 1,
    "answer": 1,
    "solutionSteps": [
      {
        "explanation": "We are given a quarter-circle graph in the first quadrant for \\(x \\ge 0\\) with an endpoint at \\((2, 0)\\). Knowing the function is even, our strategy is to use the reflection property of even functions across the vertical \\(y\\)-axis to find the coordinates of the other endpoint. This will complete the symmetric curve.",
        "workingOut": "\\((x, y) \\;\u2192\\; (-x, y)\\)",
        "graphData": null
      },
      {
        "explanation": "We apply this horizontal reflection to the endpoint of the given quarter-circle. The endpoint at the positive horizontal axis is mapped across the vertical axis. A common mistake is changing the sign of the vertical coordinate instead of the horizontal coordinate.",
        "workingOut": "\\((2, 0) \\;\u2192\\; (-2, 0)\\)",
        "graphData": null
      },
      {
        "explanation": "We combine the two quarter-circles to find the boundary of the complete semicircle. The reflected endpoint is located at \\((-2, 0)\\) in the second quadrant. Thus, the final answer is \\((-2, 0)\\), completing the semicircle.",
        "workingOut": "\\(\\text{Endpoint in quadrant 2: } (-2, 0)\\)",
        "graphData": null
      }
    ],
    "isNew": true
  },
  "y11a-5C-new-2a-ii": {
    "type": "multiple_choice",
    "question": "The graph of \\(y = f(x)\\) for \\(x \\ge 0\\) is a quarter-circle in the first quadrant, ending at \\((2, 0)\\). If the function is odd, find the coordinate of the other endpoint of the curve in the third quadrant.",
    "opts": ["\\((2, 0)\\)", "\\((0, -2)\\)", "\\((-2, 0)\\)", "\\((0, 2)\\)"],
    "options": ["\\((2, 0)\\)", "\\((0, -2)\\)", "\\((-2, 0)\\)", "\\((0, 2)\\)"],
    "a": 2,
    "answer": 2,
    "solutionSteps": [
      {
        "explanation": "We are given a quarter-circle graph in the first quadrant for \\(x \\ge 0\\) with an endpoint at \\((2, 0)\\). Since the function is odd, our strategy is to use origin symmetry to determine the coordinates of the matching endpoint on the left side. This mapping will complete the rotational symmetry.",
        "workingOut": "\\((x, y) \\;\u2192\\; (-x, -y)\\)",
        "graphData": null
      },
      {
        "explanation": "We apply this rotational mapping to the endpoint of the given quarter-circle. The endpoint is mapped through the origin. A common mistake is only changing the sign of the horizontal coordinate, which would represent an even reflection.",
        "workingOut": "\\((2, 0) \\;\u2192\\; (-2, -0) = (-2, 0)\\)",
        "graphData": null
      },
      {
        "explanation": "We evaluate the resulting point \\((-2, 0)\\), which lies on the horizontal axis. Although the curve extends into the third quadrant, the endpoint itself lies on the boundary at \\((-2, 0)\\). Thus, the final answer is \\((-2, 0)\\), which satisfies the rotational symmetry.",
        "workingOut": "\\(\\text{Endpoint: } (-2, 0)\\)",
        "graphData": null
      }
    ],
    "isNew": true
  },
  "y11a-5C-new-2b-i": {
    "type": "multiple_choice",
    "question": "The graph of \\(y = f(x)\\) for \\(x \\le 0\\) is a decaying curve in the second quadrant that ends at \\((0, 1)\\). If \\(f(x)\\) is an even function, what point on the vertical axis does the right half of the curve connect to?",
    "opts": ["\\((1, 0)\\)", "\\((0, -1)\\)", "\\((-1, 0)\\)", "\\((0, 1)\\)"],
    "options": ["\\((1, 0)\\)", "\\((0, -1)\\)", "\\((-1, 0)\\)", "\\((0, 1)\\)"],
    "a": 3,
    "answer": 3,
    "solutionSteps": [
      {
        "explanation": "We are given a left-hand decaying curve defined for \\(x \\le 0\\) that terminates at the vertical intercept \\((0, 1)\\). Knowing that the function is even, our strategy is to analyze how vertical reflection affects the boundary point at \\(x = 0\\). This will determine the connecting point for the right-hand side.",
        "workingOut": "\\(f(-x) = f(x)\\)",
        "graphData": null
      },
      {
        "explanation": "We analyze the intersection with the vertical axis. For \\(x = 0\\), the horizontal coordinate is zero, meaning its reflection is identical. A common mistake is assuming the curve must jump or change value at the axis boundary.",
        "workingOut": "\\(f(-0) = f(0) = 1 \\;\\Rightarrow\\; (0, f(0)) = (0, 1)\\)",
        "graphData": null
      },
      {
        "explanation": "We conclude that both the left and right halves must connect at the exact same vertical axis coordinate, maintaining continuity. The right half of the curve must start at the exact same vertical coordinate. Therefore, the final answer is that it connects to \\((0, 1)\\).",
        "workingOut": "\\(\\text{Connection point: } (0, 1)\\)",
        "graphData": null
      }
    ],
    "isNew": true
  },
  "y11a-5C-new-2b-ii": {
    "type": "multiple_choice",
    "question": "The graph of \\(y = f(x)\\) for \\(x < 0\\) is in the second quadrant and approaches \\((0, 1)\\). If \\(f(x)\\) is an odd function, what value does the right-hand half of the graph approach as \\(x\\) approaches 0 from the positive side?",
    "opts": ["\\(-1\\)", "\\(1\\)", "\\(0\\)", "\\(\\infty\\)"],
    "options": ["\\(-1\\)", "\\(1\\)", "\\(0\\)", "\\(\\infty\\)"],
    "a": 0,
    "answer": 0,
    "solutionSteps": [
      {
        "explanation": "We are given a curve in the second quadrant for \\(x < 0\\) that approaches the limit value of \\(1\\) as \\(x\\) approaches \\(0\\). Since the function is odd, our strategy is to use the algebraic relation \\(f(-x) = -f(x)\\) to determine the limiting behavior from the positive side. This will identify the vertical value approached by the right half.",
        "workingOut": "\\(f(-x) = -f(x)\\)",
        "graphData": null
      },
      {
        "explanation": "We evaluate the limit as the independent variable approaches zero from the positive side. We translate this to the corresponding limit on the negative side. A common mistake is assuming that odd functions can be continuous at a non-zero vertical intercept.",
        "workingOut": "\\(\\lim_{x \\to 0^-} f(x) = 1 \\;\\Rightarrow\\; \\lim_{x \\to 0^+} f(x) = \\lim_{x \\to 0^-} -f(-x) = -1\\)",
        "graphData": null
      },
      {
        "explanation": "We state the limiting value. The right half of the curve must approach the negative of the left half's vertical limit. This creates a jump discontinuity at the vertical axis since \\(f(0)\\) would have to be \\(0\\) for an odd function defined there. Therefore, the final answer is \\(-1\\).",
        "workingOut": "\\(\\text{Limit from positive side: } -1\\)",
        "graphData": null
      }
    ],
    "isNew": true
  },
  "y11a-5C-new-2c-i": {
    "type": "multiple_choice",
    "question": "The graph of \\(y = f(x)\\) for \\(x \\ge 0\\) is a parabola-like curve starting at \\((0, 2)\\) and dipping to a minimum at \\((1, -1)\\). If the function is even, find the coordinates of the matching minimum point on the left half of the curve.",
    "opts": ["\\((1, -1)\\)", "\\((-1, -1)\\)", "\\((-1, 1)\\)", "\\((1, 1)\\)"],
    "options": ["\\((1, -1)\\)", "\\((-1, -1)\\)", "\\((-1, 1)\\)", "\\((1, 1)\\)"],
    "a": 1,
    "answer": 1,
    "solutionSteps": [
      {
        "explanation": "We are given the right half of a function with a minimum at \\((1, -1)\\) and a starting point at \\((0, 2)\\). Knowing the function is even, our strategy is to apply reflection across the vertical \\(y\\)-axis to find the corresponding minimum. This will determine the coordinate of the turning point on the left half.",
        "workingOut": "\\((x, y) \\;\u2192\\; (-x, y)\\)",
        "graphData": null
      },
      {
        "explanation": "We apply this horizontal reflection to the coordinates of the minimum point. The horizontal coordinate sign is inverted, while the vertical coordinate value is preserved. A common mistake is changing the signs of both coordinates, which corresponds to odd symmetry instead.",
        "workingOut": "\\((1, -1) \\;\u2192\\; (-1, -1)\\)",
        "graphData": null
      },
      {
        "explanation": "We evaluate the resulting coordinates of the reflected turning point. The horizontal coordinate sign is inverted while the vertical coordinate remains unchanged, placing it in the third quadrant. Therefore, the final answer is \\((-1, -1)\\).",
        "workingOut": "\\(\\text{Left minimum: } (-1, -1)\\)",
        "graphData": null
      }
    ],
    "isNew": true
  },
  "y11a-5C-new-2c-ii": {
    "type": "multiple_choice",
    "question": "The graph of \\(y = f(x)\\) for \\(x \\ge 0\\) starts at the origin \\((0, 0)\\) and dips to a minimum at \\((1, -1)\\). If the function is odd, find the coordinates of the matching turning point (maximum) on the left half of the curve.",
    "opts": ["\\((-1, -1)\\)", "\\((1, 1)\\)", "\\((-1, 1)\\)", "\\((1, -1)\\)"],
    "options": ["\\((-1, -1)\\)", "\\((1, 1)\\)", "\\((-1, 1)\\)", "\\((1, -1)\\)"],
    "a": 2,
    "answer": 2,
    "solutionSteps": [
      {
        "explanation": "We are given a curve starting at the origin \\((0, 0)\\) that has a local minimum at \\((1, -1)\\) for \\(x \\ge 0\\). Knowing the function is odd, our strategy is to apply origin symmetry to determine the coordinates of the corresponding local maximum on the left half. This completes the rotational profile.",
        "workingOut": "\\((x, y) \\;\u2192\\; (-x, -y)\\)",
        "graphData": null
      },
      {
        "explanation": "We apply this rotational symmetry mapping to the coordinates of the local minimum point. Both coordinate signs are inverted. A common mistake is reflecting only across the vertical axis, which would yield a minimum instead of a maximum.",
        "workingOut": "\\((1, -1) \\;\u2192\\; (-1, -(-1)) = (-1, 1)\\)",
        "graphData": null
      },
      {
        "explanation": "We evaluate the resulting coordinates, which represents a local maximum point located in the second quadrant. The double negative makes the vertical coordinate positive. Thus, the final answer is \\((-1, 1)\\).",
        "workingOut": "\\(\\text{Left maximum: } (-1, 1)\\)",
        "graphData": null
      }
    ],
    "isNew": true
  }
};

async function run() {
  console.log('Transforming first 15 questions in Ch 5C to MCQ...');
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
