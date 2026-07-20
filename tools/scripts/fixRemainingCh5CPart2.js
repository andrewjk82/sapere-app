import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
if (getApps().length === 0) {
  initializeApp({ credential: cert(serviceAccount) });
}
const db = getFirestore();

const updates = {
  "y11a-5C-new-3": {
    "type": "multiple_choice",
    "question": "Simplify the expression \\(f(-x)\\) for the function \\(f(x) = x^4 - 3x^2 + 5\\) and classify its symmetry.",
    "opts": [
      "\\(f(-x) = x^4 - 3x^2 + 5\\); Even",
      "\\(f(-x) = -x^4 + 3x^2 - 5\\); Odd",
      "\\(f(-x) = x^4 + 3x^2 + 5\\); Neither",
      "\\(f(-x) = -x^4 - 3x^2 + 5\\); Neither"
    ],
    "options": [
      "\\(f(-x) = x^4 - 3x^2 + 5\\); Even",
      "\\(f(-x) = -x^4 + 3x^2 - 5\\); Odd",
      "\\(f(-x) = x^4 + 3x^2 + 5\\); Neither",
      "\\(f(-x) = -x^4 - 3x^2 + 5\\); Neither"
    ],
    "a": 0,
    "answer": 0,
    "hint": "Substitute \\(-x\\) for \\(x\\) and evaluate the power terms.",
    "solution": "Substitute \\(-x\\): \\(f(-x) = (-x)^4 - 3(-x)^2 + 5 = x^4 - 3x^2 + 5 = f(x)\\). Since \\(f(-x) = f(x)\\), the function is Even.",
    "solutionSteps": [
      {
        "explanation": "We begin with the function \\(f(x) = x^4 - 3x^2 + 5\\). To determine its symmetry algebraically, our strategy is to evaluate \\(f(-x)\\) and check if it equals \\(f(x)\\) (indicating even symmetry) or \\(-f(x)\\) (indicating odd symmetry). This establishes the testing strategy.",
        "workingOut": "\\(f(x) = x^4 - 3x^2 + 5\\)",
        "graphData": null
      },
      {
        "explanation": "We substitute \\(-x\\) for all horizontal variable components. We simplify by evaluating the even exponents, noting that raising a negative base to an even power yields a positive value. A common mistake is changing the constant term's sign. This step gives the simplified form of \\(f(-x)\\).",
        "workingOut": "\\(f(-x) = (-x)^4 - 3(-x)^2 + 5 \\;\\Rightarrow\\; f(-x) = x^4 - 3x^2 + 5\\)",
        "graphData": null
      },
      {
        "explanation": "We compare \\(f(-x)\\) with the original \\(f(x)\\). Since \\(f(-x)\\) is identical to \\(f(x)\\), the function satisfies even symmetry. Therefore, the final answer is that the function is Even, confirming vertical-axis symmetry.",
        "workingOut": "\\(f(-x) = f(x) \\;\\Rightarrow\\; \\text{Even}\\)",
        "graphData": null
      }
    ],
    "isNew": true
  },
  "y11a-5C-new-4": {
    "type": "multiple_choice",
    "question": "Simplify the expression \\(g(-x)\\) for the function \\(g(x) = x^3 - 4x\\) and classify its symmetry.",
    "opts": [
      "\\(g(-x) = x^3 - 4x\\); Even",
      "\\(g(-x) = -x^3 + 4x\\); Odd",
      "\\(g(-x) = -x^3 - 4x\\); Odd",
      "\\(g(-x) = x^3 + 4x\\); Neither"
    ],
    "options": [
      "\\(g(-x) = x^3 - 4x\\); Even",
      "\\(g(-x) = -x^3 + 4x\\); Odd",
      "\\(g(-x) = -x^3 - 4x\\); Odd",
      "\\(g(-x) = x^3 + 4x\\); Neither"
    ],
    "a": 1,
    "answer": 1,
    "hint": "Substitute \\(-x\\) and apply exponent rules.",
    "solution": "Substitute \\(-x\\): \\(g(-x) = (-x)^3 - 4(-x) = -x^3 + 4x = -(x^3 - 4x) = -g(x)\\). Since \\(g(-x) = -g(x)\\), the function is Odd.",
    "solutionSteps": [
      {
        "explanation": "We begin with the cubic function \\(g(x) = x^3 - 4x\\). Our strategy is to algebraically test symmetry by substituting \\(-x\\) into all independent variables. This systematic test helps us find if the function is even or odd.",
        "workingOut": "\\(g(x) = x^3 - 4x\\)",
        "graphData": null
      },
      {
        "explanation": "We substitute \\(-x\\) for \\(x\\) throughout the terms. We simplify odd exponents, noting that negative bases raised to odd powers retain their negative sign. A common mistake is failing to distribute the sign to the linear term. This step produces the simplified expression.",
        "workingOut": "\\(g(-x) = (-x)^3 - 4(-x) \\;\\Rightarrow\\; g(-x) = -x^3 + 4x\\)",
        "graphData": null
      },
      {
        "explanation": "We compare \\(g(-x)\\) with the negative of \\(g(x)\\) by factoring out \\(-1\\). Because \\(g(-x) = -g(x)\\), the function exhibits odd symmetry. Thus, the final answer is that the function is Odd, which corresponds to point symmetry about the origin.",
        "workingOut": "\\(g(-x) = -(x^3 - 4x) = -g(x) \\;\\Rightarrow\\; \\text{Odd}\\)",
        "graphData": null
      }
    ],
    "isNew": true
  },
  "y11a-5C-new-5": {
    "type": "multiple_choice",
    "question": "Simplify the expression \\(h(-x)\\) for the function \\(h(x) = x^3 + 2x^2 - 4\\) and classify its symmetry.",
    "opts": [
      "\\(h(-x) = x^3 - 2x^2 - 4\\); Even",
      "\\(h(-x) = -x^3 - 2x^2 + 4\\); Odd",
      "\\(h(-x) = -x^3 + 2x^2 - 4\\); Neither",
      "\\(h(-x) = x^3 + 2x^2 - 4\\); Even"
    ],
    "options": [
      "\\(h(-x) = x^3 - 2x^2 - 4\\); Even",
      "\\(h(-x) = -x^3 - 2x^2 + 4\\); Odd",
      "\\(h(-x) = -x^3 + 2x^2 - 4\\); Neither",
      "\\(h(-x) = x^3 + 2x^2 - 4\\); Even"
    ],
    "a": 2,
    "answer": 2,
    "hint": "Check the signs after substituting \\(-x\\) into both odd and even exponents.",
    "solution": "Substitute \\(-x\\): \\(h(-x) = (-x)^3 + 2(-x)^2 - 4 = -x^3 + 2x^2 - 4\\). This is not equal to \\(h(x)\\) or \\(-h(x)\\). Thus, it is Neither.",
    "solutionSteps": [
      {
        "explanation": "We begin with the mixed polynomial function \\(h(x) = x^3 + 2x^2 - 4\\). Our strategy is to substitute \\(-x\\) for all occurrences of \\(x\\) and simplify the terms to test for symmetry. This will verify if the mix of odd and even powers breaks symmetry.",
        "workingOut": "\\(h(x) = x^3 + 2x^2 - 4\\)",
        "graphData": null
      },
      {
        "explanation": "We execute the variable substitution. We evaluate \\((-x)^3 = -x^3\\) and \\((-x)^2 = x^2\\) to simplify the terms. A common mistake is changing the constant term's sign. This step yields the simplified horizontal reflection.",
        "workingOut": "\\(h(-x) = (-x)^3 + 2(-x)^2 - 4 \\;\\Rightarrow\\; h(-x) = -x^3 + 2x^2 - 4\\)",
        "graphData": null
      },
      {
        "explanation": "We compare \\(h(-x)\\) with \\(h(x)\\) and \\(-h(x) = -x^3 - 2x^2 + 4\\). Since the resulting expression matches neither of them, the function fails both checks. Therefore, the final answer is that the function is Neither even nor odd.",
        "workingOut": "\\(h(-x) \\neq h(x) \\text{ and } h(-x) \\neq -h(x) \\;\\Rightarrow\\; \\text{Neither}\\)",
        "graphData": null
      }
    ],
    "isNew": true
  },
  "y11a-5C-new-8a": {
    "type": "multiple_choice",
    "question": "Factor the polynomial \\(f(x) = x^2 - 16\\) and determine its zeroes.",
    "opts": [
      "\\((x-8)(x+8)\\); zeroes at \\(x = 8, -8\\)",
      "\\((x-16)(x+16)\\); zeroes at \\(x = 16, -16\\)",
      "\\((x-2)(x+8)\\); zeroes at \\(x = 2, -8\\)",
      "\\((x-4)(x+4)\\); zeroes at \\(x = 4, -4\\)"
    ],
    "options": [
      "\\((x-8)(x+8)\\); zeroes at \\(x = 8, -8\\)",
      "\\((x-16)(x+16)\\); zeroes at \\(x = 16, -16\\)",
      "\\((x-2)(x+8)\\); zeroes at \\(x = 2, -8\\)",
      "\\((x-4)(x+4)\\); zeroes at \\(x = 4, -4\\)"
    ],
    "a": 3,
    "answer": 3,
    "hint": "Use the difference of two squares identity.",
    "solution": "Factor: \\(f(x) = (x-4)(x+4)\\). Zeroes are at \\(x = 4, -4\\).",
    "solutionSteps": [
      {
        "explanation": "We are given the quadratic binomial \\(f(x) = x^2 - 16\\). To factor it, our strategy is to identify it as a difference of two squares and apply the matching algebraic identity. This prepares us to find the zeroes.",
        "workingOut": "\\(f(x) = x^2 - 4^2\\)",
        "graphData": null
      },
      {
        "explanation": "We apply the difference of squares identity, \\(a^2 - b^2 = (a-b)(a+b)\\), to rewrite the binomial in factored form. A common mistake is using incorrect factors like \\((x-8)(x+2)\\). This factorization yields two linear terms.",
        "workingOut": "\\(f(x) = (x - 4)(x + 4)\\)",
        "graphData": null
      },
      {
        "explanation": "We determine the zeroes by setting each factored term equal to zero. Solving these simple linear equations gives \\(x = 4\\) and \\(x = -4\\). Hence, the final answer is that the factors are \\((x-4)(x+4)\\) and the zeroes are \\(x = 4, -4\\).",
        "workingOut": "\\(x - 4 = 0 \\implies x = 4 \\quad \\text{and} \\quad x + 4 = 0 \\implies x = -4\\)",
        "graphData": null
      }
    ],
    "isNew": true
  },
  "y11a-5C-new-8b": {
    "type": "multiple_choice",
    "question": "Factor the polynomial \\(f(x) = x^2 - 4x + 3\\) and determine its zeroes.",
    "opts": [
      "\\((x-1)(x-3)\\); zeroes at \\(x = 1, 3\\)",
      "\\((x-1)(x+3)\\); zeroes at \\(x = 1, -3\\)",
      "\\((x+1)(x-3)\\); zeroes at \\(x = -1, 3\\)",
      "\\((x-2)^2\\); zeroes at \\(x = 2\\)"
    ],
    "options": [
      "\\((x-1)(x-3)\\); zeroes at \\(x = 1, 3\\)",
      "\\((x-1)(x+3)\\); zeroes at \\(x = 1, -3\\)",
      "\\((x+1)(x-3)\\); zeroes at \\(x = -1, 3\\)",
      "\\((x-2)^2\\); zeroes at \\(x = 2\\)"
    ],
    "a": 0,
    "answer": 0,
    "hint": "Find two numbers that multiply to 3 and add to -4.",
    "solution": "Factor: \\(f(x) = (x-1)(x-3)\\). Zeroes are at \\(x = 1, 3\\).",
    "solutionSteps": [
      {
        "explanation": "We are given the trinomial \\(f(x) = x^2 - 4x + 3\\). Our strategy is to factor it by finding two integers that multiply to the constant term \\(+3\\) and add up to the linear coefficient \\(-4\\). This will set up the factoring step.",
        "workingOut": "\\text{Find } p, q \\text{ such that } pq = 3, p+q = -4",
        "graphData": null
      },
      {
        "explanation": "We identify the factors as \\(-1\\) and \\(-3\\) since they satisfy both conditions. We rewrite the quadratic expression in its factored linear binomial form. A common mistake is choosing factors with mixed signs like \\((x-1)(x+3)\\). This gives the factored form.",
        "workingOut": "\\(f(x) = (x - 1)(x - 3)\\)",
        "graphData": null
      },
      {
        "explanation": "We find the zeroes by setting each linear factor equal to zero and solving for \\(x\\). This yields the roots \\(x = 1\\) and \\(x = 3\\). Therefore, the final answer is that the factors are \\((x-1)(x-3)\\) and the zeroes are \\(x = 1, 3\\).",
        "workingOut": "\\(x - 1 = 0 \\implies x = 1 \\quad \\text{and} \\quad x - 3 = 0 \\implies x = 3\\)",
        "graphData": null
      }
    ],
    "isNew": true
  },
  "y11a-5C-new-8c": {
    "type": "multiple_choice",
    "question": "Factor the polynomial \\(f(x) = x^3 - 9x\\) and determine its zeroes.",
    "opts": [
      "\\(x(x-9)(x+9)\\); zeroes at \\(x = 0, 9, -9\\)",
      "\\(x(x-3)(x+3)\\); zeroes at \\(x = 0, 3, -3\\)",
      "\\(x^2(x-9)\\); zeroes at \\(x = 0, 9\\)",
      "\\((x-3)(x+3)\\); zeroes at \\(x = 3, -3\\)"
    ],
    "options": [
      "\\(x(x-9)(x+9)\\); zeroes at \\(x = 0, 9, -9\\)",
      "\\(x(x-3)(x+3)\\); zeroes at \\(x = 0, 3, -3\\)",
      "\\(x^2(x-9)\\); zeroes at \\(x = 0, 9\\)",
      "\\((x-3)(x+3)\\); zeroes at \\(x = 3, -3\\)"
    ],
    "a": 1,
    "answer": 1,
    "hint": "Factor out the common term x first.",
    "solution": "Factor: \\(f(x) = x(x-3)(x+3)\\). Zeroes are at \\(x = 0, 3, -3\\).",
    "solutionSteps": [
      {
        "explanation": "We are given the cubic polynomial \\(f(x) = x^3 - 9x\\). To factor it, our strategy is to first factor out the greatest common variable term \\(x\\) and then evaluate the remaining quadratic binomial. This breaks down the expression.",
        "workingOut": "\\(f(x) = x(x^2 - 9)\\)",
        "graphData": null
      },
      {
        "explanation": "We factor the quadratic expression inside the parentheses as a difference of squares. This step expands \\(x^2 - 9\\) into two linear factors. A common mistake is missing the linear term \\(x\\) outside the parentheses in the final form. This gives the completely factored polynomial.",
        "workingOut": "\\(f(x) = x(x - 3)(x + 3)\\)",
        "graphData": null
      },
      {
        "explanation": "We set the fully factored expression equal to zero to determine the zeroes of the cubic function. Solving these gives us three roots: \\(x = 0\\), \\(x = 3\\), and \\(x = -3\\). Thus, the final answer is that the factors are \\(x(x-3)(x+3)\\) and the zeroes are \\(x = 0, 3, -3\\).",
        "workingOut": "\\(x = 0 \\quad \\text{or} \\quad x - 3 = 0 \\implies x = 3 \\quad \\text{or} \\quad x + 3 = 0 \\implies x = -3\\)",
        "graphData": null
      }
    ],
    "isNew": true
  },
  "y11a-5C-new-8d": {
    "type": "multiple_choice",
    "question": "Factor the polynomial \\(f(x) = x^4 - 16x^2\\) and determine its zeroes.",
    "opts": [
      "\\(x^2(x-16)\\); zeroes at \\(x = 0, 16\\)",
      "\\((x-2)^2(x+2)^2\\); zeroes at \\(x = 2, -2\\)",
      "\\(x^2(x-4)(x+4)\\); zeroes at \\(x = 0, 4, -4\\)",
      "\\(x(x-4)(x+4)\\); zeroes at \\(x = 0, 4, -4\\)"
    ],
    "options": [
      "\\(x^2(x-16)\\); zeroes at \\(x = 0, 16\\)",
      "\\((x-2)^2(x+2)^2\\); zeroes at \\(x = 2, -2\\)",
      "\\(x^2(x-4)(x+4)\\); zeroes at \\(x = 0, 4, -4\\)",
      "\\(x(x-4)(x+4)\\); zeroes at \\(x = 0, 4, -4\\)"
    ],
    "a": 2,
    "answer": 2,
    "hint": "Factor out x^2 first, then factor the quadratic binomial.",
    "solution": "Factor: \\(f(x) = x^2(x-4)(x+4)\\). Zeroes are at \\(x = 0\\) (double root), \\(4, -4\\).",
    "solutionSteps": [
      {
        "explanation": "We are given the quartic polynomial \\(f(x) = x^4 - 16x^2\\). Our strategy is to factor out the common term \\(x^2\\) and then factor the remaining quadratic expression inside the parentheses. This simplifies the terms.",
        "workingOut": "\\(f(x) = x^2(x^2 - 16)\\)",
        "graphData": null
      },
      {
        "explanation": "We factor \\(x^2 - 16\\) as a difference of two squares. We rewrite the quadratic expression as two linear terms, \\((x-4)(x+4)\\). A common mistake is writing the common factor as \\(x\\) instead of \\(x^2\\). This gives the completely factored quartic form.",
        "workingOut": "\\(f(x) = x^2(x - 4)(x + 4)\\)",
        "graphData": null
      },
      {
        "explanation": "We find the zeroes by setting the complete factored equation to zero. This yields roots at \\(x = 0\\), \\(x = 4\\), and \\(x = -4\\). Hence, the final answer is that the factors are \\(x^2(x-4)(x+4)\\) and the zeroes are \\(x = 0, 4, -4\\).",
        "workingOut": "\\(x^2 = 0 \\implies x = 0 \\quad \\text{and} \\quad x - 4 = 0 \\implies x = 4 \\quad \\text{and} \\quad x + 4 = 0 \\implies x = -4\\)",
        "graphData": null
      }
    ],
    "isNew": true
  },
  "y11a-5C-new-8e": {
    "type": "multiple_choice",
    "question": "Factor the polynomial \\(f(x) = x^3 + 2x^2\\) and determine its zeroes.",
    "opts": [
      "\\(x(x^2+2)\\); zeroes at \\(x = 0\\)",
      "\\(x^2(x-2)\\); zeroes at \\(x = 0, 2\\)",
      "\\(x(x-2)(x+2)\\); zeroes at \\(x = 0, 2, -2\\)",
      "\\(x^2(x+2)\\); zeroes at \\(x = 0, -2\\)"
    ],
    "options": [
      "\\(x(x^2+2)\\); zeroes at \\(x = 0\\)",
      "\\(x^2(x-2)\\); zeroes at \\(x = 0, 2\\)",
      "\\(x(x-2)(x+2)\\); zeroes at \\(x = 0, 2, -2\\)",
      "\\(x^2(x+2)\\); zeroes at \\(x = 0, -2\\)"
    ],
    "a": 3,
    "answer": 3,
    "hint": "Identify and factor out the greatest common factor.",
    "solution": "Factor: \\(f(x) = x^2(x+2)\\). Zeroes are at \\(x = 0\\) (double root), \\(-2\\).",
    "solutionSteps": [
      {
        "explanation": "We are given the cubic polynomial \\(f(x) = x^3 + 2x^2\\). Our strategy is to identify the greatest common monomial factor and factor it out of the expression. This will isolate the remaining linear binomial factor.",
        "workingOut": "\\text{Greatest common factor is } x^2",
        "graphData": null
      },
      {
        "explanation": "We factor out \\(x^2\\) from each term, leaving the linear expression \\(x+2\\) inside the parentheses. A common mistake is factoring out only \\(x\\), leaving a quadratic term inside. This step yields the fully factored form.",
        "workingOut": "\\(f(x) = x^2(x + 2)\\)",
        "graphData": null
      },
      {
        "explanation": "We set the factored expression equal to zero to determine the zeroes of the cubic function. Solving these gives us two unique roots: \\(x = 0\\) and \\(x = -2\\). Therefore, the final answer is that the factored form is \\(x^2(x+2)\\) and the zeroes are \\(x = 0, -2\\).",
        "workingOut": "\\(x^2 = 0 \\implies x = 0 \\quad \\text{and} \\quad x + 2 = 0 \\implies x = -2\\)",
        "graphData": null
      }
    ],
    "isNew": true
  },
  "y11a-5C-new-8f": {
    "type": "multiple_choice",
    "question": "Factor the polynomial \\(f(x) = x^5 - 25x\\) and determine its real zeroes.",
    "opts": [
      "\\(x(x^2-5)(x^2+5)\\); real zeroes at \\(x = 0, \\sqrt{5}, -\\sqrt{5}\\)",
      "\\(x(x-5)(x+5)\\); real zeroes at \\(x = 0, 5, -5\\)",
      "\\(x^3(x-5)(x+5)\\); real zeroes at \\(x = 0, 5, -5\\)",
      "\\(x(x^2-25)\\); real zeroes at \\(x = 0, 25\\)"
    ],
    "options": [
      "\\(x(x^2-5)(x^2+5)\\); real zeroes at \\(x = 0, \\sqrt{5}, -\\sqrt{5}\\)",
      "\\(x(x-5)(x+5)\\); real zeroes at \\(x = 0, 5, -5\\)",
      "\\(x^3(x-5)(x+5)\\); real zeroes at \\(x = 0, 5, -5\\)",
      "\\(x(x^2-25)\\); real zeroes at \\(x = 0, 25\\)"
    ],
    "a": 0,
    "answer": 0,
    "hint": "Factor out x first, then apply the difference of squares identity twice.",
    "solution": "Factor: \\(f(x) = x(x^2-5)(x^2+5)\\). Real zeroes are at \\(x = 0, \\sqrt{5}, -\\sqrt{5}\\).",
    "solutionSteps": [
      {
        "explanation": "We are given the quintic polynomial \\(f(x) = x^5 - 25x\\). Our strategy is to factor out the common monomial factor \\(x\\) first, leaving a quartic binomial to evaluate. This breaks down the expression.",
        "workingOut": "\\(f(x) = x(x^4 - 25)\\)",
        "graphData": null
      },
      {
        "explanation": "We recognize \\(x^4 - 25\\) as a difference of two squares and factor it into quadratic binomials, \\((x^2-5)(x^2+5)\\). A common mistake is ignoring the quadratic factor that produces imaginary roots when solving for real roots. This step gives the factored form.",
        "workingOut": "\\(f(x) = x(x^2 - 5)(x^2 + 5)\\)",
        "graphData": null
      },
      {
        "explanation": "We find the real zeroes by setting each real factor to zero. Since \\(x^2 + 5 = 0\\) has no real solutions, the real roots are obtained from \\(x = 0\\) and \\(x^2 - 5 = 0\\). Thus, the final answer is that the factored form is \\(x(x^2-5)(x^2+5)\\) and the real zeroes are \\(x = 0, \\sqrt{5}, -\\sqrt{5}\\).",
        "workingOut": "\\(x = 0 \\quad \\text{or} \\quad x^2 - 5 = 0 \\implies x = \\pm\\sqrt{5}\\)",
        "graphData": null
      }
    ],
    "isNew": true
  },
  "y11a-5C-new-11a": {
    "type": "multiple_choice",
    "question": "Evaluate the expression \\(f(-x)\\) for \\(f(x) = x^2 - 4x - 5\\) and determine whether \\(f(x)\\) is even, odd, or neither.",
    "opts": [
      "\\(f(-x) = x^2 - 4x - 5\\); Even",
      "\\(f(-x) = x^2 + 4x - 5\\); Neither",
      "\\(f(-x) = -x^2 + 4x + 5\\); Odd",
      "\\(f(-x) = -x^2 - 4x + 5\\); Neither"
    ],
    "options": [
      "\\(f(-x) = x^2 - 4x - 5\\); Even",
      "\\(f(-x) = x^2 + 4x - 5\\); Neither",
      "\\(f(-x) = -x^2 + 4x + 5\\); Odd",
      "\\(f(-x) = -x^2 - 4x + 5\\); Neither"
    ],
    "a": 1,
    "answer": 1,
    "hint": "Evaluate the signs of terms when substituting \\(-x\\).",
    "solution": "Substitute \\(-x\\): \\(f(-x) = (-x)^2 - 4(-x) - 5 = x^2 + 4x - 5\\). This is not equal to \\(f(x)\\) or \\(-f(x)\\). Thus, it is Neither.",
    "solutionSteps": [
      {
        "explanation": "We are given the quadratic function \\(f(x) = x^2 - 4x - 5\\). To test its symmetry properties algebraically, our strategy is to substitute \\(-x\\) for \\(x\\) and evaluate the resulting signs. This prepares the expression for analysis.",
        "workingOut": "\\(f(x) = x^2 - 4x - 5\\)",
        "graphData": null
      },
      {
        "explanation": "We substitute \\(-x\\) into every variable term in the equation. We simplify by noting that \\((-x)^2 = x^2\\) and the sign of the linear term changes due to double negatives. A common mistake is changing the constant term's sign. This yields the expression for \\(f(-x)\\).",
        "workingOut": "\\(f(-x) = (-x)^2 - 4(-x) - 5 \\;\\Rightarrow\\; f(-x) = x^2 + 4x - 5\\)",
        "graphData": null
      },
      {
        "explanation": "We compare \\(f(-x)\\) with the original \\(f(x)\\) and its negative, \\(-f(x) = -x^2 + 4x + 5\\). Since the result matches neither of these expressions, the function satisfies neither even nor odd conditions. Therefore, the final answer is that \\(f(-x) = x^2 + 4x - 5\\) and the function is Neither.",
        "workingOut": "\\(f(-x) \\neq f(x) \\text{ and } f(-x) \\neq -f(x) \\;\\Rightarrow\\; \\text{Neither}\\)",
        "graphData": null
      }
    ],
    "isNew": true
  },
  "y11a-5C-new-11b": {
    "type": "multiple_choice",
    "question": "For the function \\(f(x) = x^2 - 4x - 5\\), let \\(g(x) = \\dfrac{1}{2}(f(x) + f(-x))\\). Find the expression for \\(g(x)\\) and classify its symmetry.",
    "opts": [
      "\\(g(x) = x^2 + 5\\); Even",
      "\\(g(x) = -4x\\); Odd",
      "\\(g(x) = x^2 - 5\\); Even",
      "\\(g(x) = x^2 - 4x - 5\\); Neither"
    ],
    "options": [
      "\\(g(x) = x^2 + 5\\); Even",
      "\\(g(x) = -4x\\); Odd",
      "\\(g(x) = x^2 - 5\\); Even",
      "\\(g(x) = x^2 - 4x - 5\\); Neither"
    ],
    "a": 2,
    "answer": 2,
    "hint": "Add the expressions for f(x) and f(-x) first, then divide by 2.",
    "solution": "Sum: \\(f(x) + f(-x) = (x^2-4x-5) + (x^2+4x-5) = 2x^2 - 10\\). Dividing by 2: \\(g(x) = x^2 - 5\\). This is an Even function.",
    "solutionSteps": [
      {
        "explanation": "We are given the function \\(f(x) = x^2 - 4x - 5\\) and its horizontal reflection \\(f(-x) = x^2 + 4x - 5\\). Our strategy is to substitute these expressions into the definition of \\(g(x) = \\dfrac{1}{2}(f(x) + f(-x))\\) and collect like terms. This sets up the algebraic sum.",
        "workingOut": "\\(g(x) = \\dfrac{1}{2}\\left((x^2 - 4x - 5) + (x^2 + 4x - 5)\\right)\\)",
        "graphData": null
      },
      {
        "explanation": "We simplify the sum inside the parentheses. The linear terms \\(-4x\\) and \\(+4x\\) cancel out, while the quadratic and constant terms double. A common mistake is failing to divide all terms inside the parentheses by 2. This step yields the simplified expression for \\(g(x)\\).",
        "workingOut": "\\(g(x) = \\dfrac{1}{2}(2x^2 - 10) \\;\\Rightarrow\\; g(x) = x^2 - 5\\)",
        "graphData": null
      },
      {
        "explanation": "We test \\(g(x)\\) for symmetry by evaluating \\(g(-x)\\). Since \\(g(-x) = (-x)^2 - 5 = x^2 - 5 = g(x)\\), the function is even. Therefore, the final answer is that \\(g(x) = x^2 - 5\\) and the function is Even.",
        "workingOut": "\\(g(-x) = g(x) \\;\\Rightarrow\\; \\text{Even}\\)",
        "graphData": null
      }
    ],
    "isNew": true
  },
  "y11a-5C-new-11c": {
    "type": "multiple_choice",
    "question": "For the function \\(f(x) = x^2 - 4x - 5\\), let \\(h(x) = \\dfrac{1}{2}(f(x) - f(-x))\\). Find the expression for \\(h(x)\\) and classify its symmetry.",
    "opts": [
      "\\(h(x) = 4x\\); Odd",
      "\\(h(x) = x^2 - 5\\); Even",
      "\\(h(x) = -8x\\); Odd",
      "\\(h(x) = -4x\\); Odd"
    ],
    "options": [
      "\\(h(x) = 4x\\); Odd",
      "\\(h(x) = x^2 - 5\\); Even",
      "\\(h(x) = -8x\\); Odd",
      "\\(h(x) = -4x\\); Odd"
    ],
    "a": 3,
    "answer": 3,
    "hint": "Subtract the expression for f(-x) from f(x) first, then divide by 2.",
    "solution": "Difference: \\(f(x) - f(-x) = (x^2-4x-5) - (x^2+4x-5) = -8x\\). Dividing by 2: \\(h(x) = -4x\\). This is an Odd function.",
    "solutionSteps": [
      {
        "explanation": "We are given the functions \\(f(x) = x^2 - 4x - 5\\) and \\(f(-x) = x^2 + 4x - 5\\). Our strategy is to substitute them into the formula \\(h(x) = \\dfrac{1}{2}(f(x) - f(-x))\\) and collect like terms. This sets up the algebraic difference.",
        "workingOut": "\\(h(x) = \\dfrac{1}{2}\\left((x^2 - 4x - 5) - (x^2 + 4x - 5)\\right)\\)",
        "graphData": null
      },
      {
        "explanation": "We simplify the subtraction inside the brackets by distributing the negative sign. The quadratic and constant terms cancel, while the linear terms combine. A common mistake is failing to distribute the negative sign to the second constant term. This step gives the simplified form.",
        "workingOut": "\\(h(x) = \\dfrac{1}{2}(-8x) \\;\\Rightarrow\\; h(x) = -4x\\)",
        "graphData": null
      },
      {
        "explanation": "We test the symmetry of \\(h(x)\\) by substituting \\(-x\\). Since \\(h(-x) = -4(-x) = 4x = -h(x)\\), the function is odd. Thus, the final answer is that \\(h(x) = -4x\\) and the function is Odd.",
        "workingOut": "\\(h(-x) = -h(x) \\;\\Rightarrow\\; \\text{Odd}\\)",
        "graphData": null
      }
    ],
    "isNew": true
  },
  "y11a-5C-new-11d": {
    "type": "multiple_choice",
    "question": "Suppose \\(f(x) = ax^3 + bx^2 + cx + d\\). Find the expressions for the even part \\(g(x) = \\dfrac{1}{2}(f(x) + f(-x))\\) and the odd part \\(h(x) = \\dfrac{1}{2}(f(x) - f(-x))\\).",
    "opts": [
      "\\(g(x) = bx^2 + d\\) and \\(h(x) = ax^3 + cx\\)",
      "\\(g(x) = ax^3 + cx\\) and \\(h(x) = bx^2 + d\\)",
      "\\(g(x) = bx^2\\) and \\(h(x) = ax^3 + cx + d\\)",
      "\\(g(x) = ax^3 + bx^2\\) and \\(h(x) = cx + d\\)"
    ],
    "options": [
      "\\(g(x) = bx^2 + d\\) and \\(h(x) = ax^3 + cx\\)",
      "\\(g(x) = ax^3 + cx\\) and \\(h(x) = bx^2 + d\\)",
      "\\(g(x) = bx^2\\) and \\(h(x) = ax^3 + cx + d\\)",
      "\\(g(x) = ax^3 + bx^2\\) and \\(h(x) = cx + d\\)"
    ],
    "a": 0,
    "answer": 0,
    "hint": "Evaluate f(-x) first, then sum and subtract the polynomials.",
    "solution": "We find \\(f(-x) = -ax^3 + bx^2 - cx + d\\). Adding and dividing by 2: \\(g(x) = bx^2 + d\\). Subtracting and dividing by 2: \\(h(x) = ax^3 + cx\\).",
    "solutionSteps": [
      {
        "explanation": "We are given the general cubic polynomial \\(f(x) = ax^3 + bx^2 + cx + d\\). To find its even and odd components, our strategy is to first write down \\(f(-x)\\) by substituting \\(-x\\) for \\(x\\) and applying exponent rules. This sets up the component terms.",
        "workingOut": "\\(f(-x) = a(-x)^3 + b(-x)^2 + c(-x) + d \\;\\Rightarrow\\; f(-x) = -ax^3 + bx^2 - cx + d\\)",
        "graphData": null
      },
      {
        "explanation": "We calculate the even part \\(g(x)\\) by adding \\(f(x)\\) and \\(f(-x)\\) and dividing the sum by 2. The cubic and linear terms cancel, leaving the even powers. A common mistake is missing the division by 2 for the constant term. This step simplifies the even part.",
        "workingOut": "\\(g(x) = \\dfrac{1}{2}\\left((ax^3+bx^2+cx+d) + (-ax^3+bx^2-cx+d)\\right) \\;\\Rightarrow\\; g(x) = bx^2 + d\\)",
        "graphData": null
      },
      {
        "explanation": "We calculate the odd part \\(h(x)\\) by subtracting \\(f(-x)\\) from \\(f(x)\\) and dividing by 2. The even-power terms and constants cancel out, leaving the odd-power terms. Therefore, the final answer is that \\(g(x) = bx^2 + d\\) and \\(h(x) = ax^3 + cx\\).",
        "workingOut": "\\(h(x) = \\dfrac{1}{2}\\left((ax^3+bx^2+cx+d) - (-ax^3+bx^2-cx+d)\\right) \\;\\Rightarrow\\; h(x) = ax^3 + cx\\)",
        "graphData": null
      }
    ],
    "isNew": true
  },
  "y11a-5C-new-11e": {
    "type": "multiple_choice",
    "question": "For any function \\(f(x)\\), evaluate \\(g(-x)\\) where \\(g(x) = \\dfrac{1}{2}(f(x) + f(-x))\\) to prove its symmetry.",
    "opts": [
      "\\(g(-x) = -g(x)\\); Odd",
      "\\(g(-x) = g(x)\\); Even",
      "\\(g(-x) = \\dfrac{1}{2}(f(-x) - f(x))\\); Neither",
      "\\(g(-x) = 2g(x)\\); Even"
    ],
    "options": [
      "\\(g(-x) = -g(x)\\); Odd",
      "\\(g(-x) = g(x)\\); Even",
      "\\(g(-x) = \\dfrac{1}{2}(f(-x) - f(x))\\); Neither",
      "\\(g(-x) = 2g(x)\\); Even"
    ],
    "a": 1,
    "answer": 1,
    "hint": "Substitute -x into the definition of g(x) and simplify.",
    "solution": "\\(g(-x) = \\frac{1}{2}(f(-x) + f(-(-x))) = \\frac{1}{2}(f(-x) + f(x)) = g(x)\\). This proves \\(g(x)\\) is Even.",
    "solutionSteps": [
      {
        "explanation": "We are given the definition of the function \\(g(x) = \\dfrac{1}{2}(f(x) + f(-x))\\) for any function \\(f(x)\\). Our strategy is to substitute \\(-x\\) for all occurrences of \\(x\\) to check its symmetry properties. This will begin the proof.",
        "workingOut": "\\(g(-x) = \\dfrac{1}{2}(f(-x) + f(-(-x)))\\)",
        "graphData": null
      },
      {
        "explanation": "We simplify the double negative in the second term, noting that \\(-(-x) = x\\). A common mistake is assuming that \\(f(-(-x))\\) changes sign to \\(-f(x)\\) without knowing if \\(f\\) is symmetric. This simplification gives the reflected expression.",
        "workingOut": "\\(g(-x) = \\dfrac{1}{2}(f(-x) + f(x))\\)",
        "graphData": null
      },
      {
        "explanation": "We apply the commutative property of addition to rewrite the terms inside the parentheses. Since the resulting expression is identical to \\(g(x)\\), the function satisfies even symmetry. Therefore, the final answer is that \\(g(-x) = g(x)\\), proving it is Even.",
        "workingOut": "\\(g(-x) = \\dfrac{1}{2}(f(x) + f(-x)) = g(x) \\;\\Rightarrow\\; \\text{Even}\\)",
        "graphData": null
      }
    ],
    "isNew": true
  },
  "y11a-5C-new-12b": {
    "type": "multiple_choice",
    "question": "If \\(f(x)\\) is an even function defined at \\(x = 0\\), must the graph of \\(y = f(x)\\) pass through the origin?",
    "opts": [
      "Yes, because all even functions must pass through the origin.",
      "No, a counter-example is \\(f(x) = x^3\\) which passes through \\((0, 0)\\).",
      "No, a counter-example is \\(f(x) = x^2 + 1\\) which passes through \\((0, 1)\\).",
      "Yes, because \\(f(0) = f(-0) = 0\\)."
    ],
    "options": [
      "Yes, because all even functions must pass through the origin.",
      "No, a counter-example is \\(f(x) = x^3\\) which passes through \\((0, 0)\\).",
      "No, a counter-example is \\(f(x) = x^2 + 1\\) which passes through \\((0, 1)\\).",
      "Yes, because \\(f(0) = f(-0) = 0\\)."
    ],
    "a": 2,
    "answer": 2,
    "hint": "An even function requires f(-x) = f(x). Evaluate this at x = 0.",
    "solution": "No. Even symmetry requires \\(f(-0) = f(0)\\), which is always true. It doesn't constrain \\(f(0)\\) to be 0. A counter-example is \\(f(x) = x^2 + 1\\) where \\(f(0) = 1 \\neq 0\\).",
    "solutionSteps": [
      {
        "explanation": "We are asked if an even function defined at \\(x = 0\\) must satisfy \\(f(0) = 0\\). Our strategy is to evaluate the even function condition at \\(x = 0\\) to see if it restricts the function value. This will test the assertion.",
        "workingOut": "\\text{Even condition: } f(-x) = f(x)",
        "graphData": null
      },
      {
        "explanation": "We substitute \\(x = 0\\) into the even function definition. This yields \\(f(-0) = f(0)\\), which simplifies to the identity \\(f(0) = f(0)\\). A common mistake is assuming that symmetry across the vertical axis forces the function to cross at the origin. This identity does not restrict the value of \\(f(0)\\).",
        "workingOut": "\\(f(-0) = f(0) \\;\\Rightarrow\\; f(0) = f(0)\\)",
        "graphData": null
      },
      {
        "explanation": "We provide a counter-example to disprove the assertion. The function \\(f(x) = x^2 + 1\\) is even because \\(f(-x) = x^2 + 1 = f(x)\\), yet it passes through \\((0, 1)\\) instead of the origin. Therefore, the final answer is that the function does not have to pass through the origin, with \\(f(x) = x^2 + 1\\) as a counter-example.",
        "workingOut": "\\text{Counter-example: } f(x) = x^2 + 1 \\;\\Rightarrow\\; f(0) = 1 \\neq 0\\)",
        "graphData": null
      }
    ],
    "isNew": true
  }
};

async function run() {
  console.log('Transforming 15 more questions in Ch 5C to MCQ...');
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
