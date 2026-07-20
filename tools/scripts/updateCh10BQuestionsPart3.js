import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const questionsToUpdate = [
  {
    "id": "car2020s-q35",
    "type": "multiple_choice",
    "question": "The continuous random variable \\\\(Y\\\\) has probability density function \\\\(f(y) = \\\\cos y\\\\) for \\\\(0 \\\\leq y \\\\leq \\\\dfrac{\\\\pi}{2}\\\\). Find the cumulative distribution function \\\\(F(y)\\\\) and the median of the distribution.",
    "opts": [
      "\\\\(F(y) = \\\\sin y\\\\) and Median \\\\(y = \\\\dfrac{\\\\pi}{6}\\\\)",
      "\\\\(F(y) = \\\\cos y\\\\) and Median \\\\(y = \\\\dfrac{\\\\pi}{3}\\\\)",
      "\\\\(F(y) = \\\\sin y\\\\) and Median \\\\(y = \\\\dfrac{\\\\pi}{4}\\\\)",
      "\\\\(F(y) = 1 - \\\\cos y\\\\) and Median \\\\(y = \\\\dfrac{\\\\pi}{6}\\\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by setting up the integral of the probability density function from zero to y to obtain the cumulative distribution function.",
        "workingOut": "F(y) = \\\\int_{0}^{y} \\\\cos t\\\\,dt",
        "graphData": null
      },
      {
        "explanation": "We evaluate the definite integral. The antiderivative of cosine is sine, and evaluating it at the boundaries yields the function expression.",
        "workingOut": "= \\\\left[ \\\\sin t \\\\right]_{0}^{y} = \\\\sin y",
        "graphData": null
      },
      {
        "explanation": "Next, we set up the equation for the median. The median is the value where the cumulative distribution function is equal to exactly one half.",
        "workingOut": "F(y) = \\\\sin y = \\\\dfrac{1}{2}",
        "graphData": null
      },
      {
        "explanation": "Finally, we solve the basic trigonometric equation for the variable within the given domain to find the median value.",
        "workingOut": "y = \\\\dfrac{\\\\pi}{6}",
        "graphData": null
      }
    ]
  },
  {
    "id": "cra2023-q28a",
    "type": "teacher_review",
    "question": "A continuous random variable \\\\(X\\\\) has probability density function \\\\(f(x) = e^{-\\\\frac{1}{2}x}\\\\) for \\\\(0 \\\\leq x \\\\leq \\\\ln 4\\\\), and \\\\(f(x) = 0\\\\) otherwise. Show that \\\\(f(x)\\\\) is a valid probability density function.",
    "opts": [],
    "a": 0,
    "answer": "1. \\\\(f(x) = e^{-x/2} > 0\\\\) for all \\\\(x\\\\) in the domain.\\\\n2. The total area is: \\\\n\\\\int_{0}^{\\\\ln 4} e^{-x/2}\\\\,dx = \\\\left[ -2e^{-x/2} \\\\right]_{0}^{\\\\ln 4} = -2e^{-\\\\frac{1}{2}\\\\ln 4} - (-2) = -2\\\\left(\\\\dfrac{1}{2}\\\\right) + 2 = 1. \\\\nTherefore, both requirements are satisfied and \\\\(f(x)\\\\) represents a valid PDF.",
    "solutionSteps": [
      {
        "explanation": "We begin by stating the two requirements a function must satisfy to represent a valid probability density function: non-negativity across the entire support, and the total integral of the function being equal to exactly one.",
        "workingOut": "f(x) \\\\geq 0 \\\\quad\\\\text{and}\\\\quad \\\\int_{0}^{\\\\ln 4} f(x)\\\\,dx = 1",
        "graphData": null
      },
      {
        "explanation": "We check the non-negativity condition. Since the exponential function is positive for all real exponents, the function is positive on the support domain.",
        "workingOut": "e^{-x/2} > 0 \\\\quad\\\\checkmark",
        "graphData": null
      },
      {
        "explanation": "Next, we integrate the function over the support interval. The antiderivative of e raised to the power of negative half x is negative two e raised to the power of negative half x.",
        "workingOut": "\\\\int_{0}^{\\\\ln 4} e^{-x/2}\\\\,dx = \\\\left[ -2e^{-x/2} \\\\right]_{0}^{\\\\ln 4}",
        "graphData": null
      },
      {
        "explanation": "Finally, we evaluate the definite integral by substituting the limits. Simplifying the exponential term yields a value of exactly one, confirming that the function is normalized.",
        "workingOut": "= -2e^{-\\\\ln 2} - (-2) = -2\\\\left(\\\\dfrac{1}{2}\\\\right) + 2 = 1 \\\\quad\\\\checkmark",
        "graphData": null
      }
    ]
  },
  {
    "id": "cra2023-q28b",
    "type": "multiple_choice",
    "question": "For the probability density function \\\\(f(x) = e^{-\\\\frac{1}{2}x}\\\\) on \\\\(0 \\\\leq x \\\\leq \\\\ln 4\\\\), find the cumulative distribution function \\\\(F(x)\\\\) for all real numbers.",
    "opts": [
      "\\\\(F(x) = \\\\begin{cases} 0 & x < 0 \\\\\\\\ 2 - 2e^{-x/2} & 0 \\\\leq x \\\\leq \\\\ln 4 \\\\\\\\ 1 & x > \\\\ln 4 \\\\end{cases}\\\\)",
      "\\\\(F(x) = \\\\begin{cases} 0 & x < 0 \\\\\\\\ 1 - e^{-x/2} & 0 \\\\leq x \\\\leq \\\\ln 4 \\\\\\\\ 1 & x > \\\\ln 4 \\\\end{cases}\\\\)",
      "\\\\(F(x) = \\\\begin{cases} 0 & x < 0 \\\\\\\\ 2 - e^{-x/2} & 0 \\\\leq x \\\\leq \\\\ln 4 \\\\\\\\ 1 & x > \\\\ln 4 \\\\end{cases}\\\\)",
      "\\\\(F(x) = \\\\begin{cases} 0 & x < 0 \\\\\\\\ 1 - 2e^{-x/2} & 0 \\\\leq x \\\\leq \\\\ln 4 \\\\\\\\ 1 & x > \\\\ln 4 \\\\end{cases}\\\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by setting up the integral for the cumulative distribution function on the support. The cumulative distribution function is defined as the integral of the probability density function from the lower bound of zero up to the variable x.",
        "workingOut": "F(x) = \\\\int_{0}^{x} e^{-t/2}\\\\,dt",
        "graphData": null
      },
      {
        "explanation": "Next, we find the antiderivative and evaluate it at our boundaries, keeping in mind that e to the power of zero is equal to one.",
        "workingOut": "= \\\\left[ -2e^{-t/2} \\\\right]_{0}^{x} = -2e^{-x/2} - (-2) = 2 - 2e^{-x/2}",
        "graphData": null
      },
      {
        "explanation": "Finally, we specify the values of the function outside the support boundaries to define the full piecewise cumulative distribution function. Below zero it is zero, and above ln 4 it is constant at one.",
        "workingOut": "F(x) = \\\\begin{cases} 0 & x < 0 \\\\\\\\ 2 - 2e^{-x/2} & 0 \\\\leq x \\\\leq \\\\ln 4 \\\\\\\\ 1 & x > \\\\ln 4 \\\\end{cases}",
        "graphData": null
      }
    ]
  },
  {
    "id": "cra2023-q28c",
    "type": "multiple_choice",
    "question": "For the distribution with cumulative distribution function \\\\(F(x) = 2 - 2e^{-x/2}\\\\) on \\\\(0 \\\\leq x \\\\leq \\\\ln 4\\\\), find the median of the distribution.",
    "opts": [
      "\\\\(x = \\\\ln\\\\!\\\\left(\\\\dfrac{16}{9}\\\\right)\\\\)",
      "\\\\(x = \\\\ln\\\\!\\\\left(\\\\dfrac{4}{3}\\\\right)\\\\)",
      "\\\\(x = 2\\\\ln\\\\!\\\\left(\\\\dfrac{16}{9}\\\\right)\\\\)",
      "\\\\(x = \\\\ln\\\\!\\\\left(\\\\dfrac{3}{2}\\\\right)\\\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by stating the equation for the median, which is the value m of the variable where the cumulative distribution function is equal to exactly one half.",
        "workingOut": "2 - 2e^{-m/2} = \\\\dfrac{1}{2}",
        "graphData": null
      },
      {
        "explanation": "Next, we perform the algebraic steps to isolate the exponential term on one side of the equation.",
        "workingOut": "2e^{-m/2} = 2 - \\\\dfrac{1}{2} = \\\\dfrac{3}{2} \\\\;\\\\Rightarrow\\\\; e^{-m/2} = \\\\dfrac{3}{4}",
        "graphData": null
      },
      {
        "explanation": "We take the natural logarithm of both sides to remove the base e and solve for the median variable.",
        "workingOut": "-\\\\dfrac{m}{2} = \\\\ln\\\\!\\\\left(\\\\dfrac{3}{4}\\\\right) \\\\;\\\\Rightarrow\\\\; m = -2\\\\ln\\\\!\\\\left(\\\\dfrac{3}{4}\\\\right) = 2\\\\ln\\\\!\\\\left(\\\\dfrac{4}{3}\\\\right)",
        "graphData": null
      },
      {
        "explanation": "Finally, we apply the power law of logarithms to simplify the expression into a single logarithm term, and verify it lies inside our support domain.",
        "workingOut": "m = \\\\ln\\\\!\\\\left(\\\\left(\\\\dfrac{4}{3}\\\\right)^2\\\\right) = \\\\ln\\\\!\\\\left(\\\\dfrac{16}{9}\\\\right)",
        "graphData": null
      }
    ]
  },
  {
    "id": "cra2023-q30a",
    "type": "teacher_review",
    "question": "The time taken, \\\\(t\\\\) minutes, for a machine to produce car parts is modelled by a continuous random variable with probability density function \\\\(f(t) = k(t-1)^2\\\\) for \\\\(1 \\\\leq t \\\\leq 2\\\\), \\\\(f(t) = k\\\\left(2 - \\\\dfrac{t}{2}\\\\right)\\\\) for \\\\(2 \\\\leq t \\\\leq 4\\\\), and \\\\(f(t) = 0\\\\) otherwise. Show that the value of \\\\(k\\\\) is \\\\(\\\\dfrac{3}{4}\\\\).",
    "opts": [],
    "a": 0,
    "answer": "\\\\int_1^2 k(t-1)^2\\\\,dt + \\\\int_2^4 k\\\\left(2 - \\\\dfrac{t}{2}\\\\right)dt = 1\\\\n\\\\implies k\\\\left[\\\\dfrac{(t-1)^3}{3}\\\\right]_1^2 + k\\\\left[2t - \\\\dfrac{t^2}{4}\\\\right]_2^4 = 1\\\\n\\\\implies k\\\\left(\\\\dfrac{1}{3}\\\\right) + k(4 - 3) = 1\\\\n\\\\implies \\\\dfrac{k}{3} + k = \\\\dfrac{4k}{3} = 1 \\\\implies k = \\\\dfrac{3}{4}.",
    "solutionSteps": [
      {
        "explanation": "We begin by setting up the equation for the total area under the piecewise probability density function, which must sum to exactly one over the entire domain.",
        "workingOut": "\\\\int_{1}^{2} k(t-1)^2\\\\,dt + \\\\int_{2}^{4} k\\\\left(2 - \\\\dfrac{t}{2}\\\\right)dt = 1",
        "graphData": null
      },
      {
        "explanation": "Next, we integrate the first piece. The antiderivative of k times t minus one squared is k times t minus one cubed divided by three, which we evaluate at the boundary limits.",
        "workingOut": "k\\\\left[ \\\\dfrac{(t-1)^3}{3} \\\\right]_{1}^{2} = k\\\\left( \\\\dfrac{1}{3} - 0 \\\\right) = \\\\dfrac{k}{3}",
        "graphData": null
      },
      {
        "explanation": "We integrate the second piece term by term. The antiderivative is k times two t minus t squared divided by four, which we evaluate at its limits of four and two.",
        "workingOut": "k\\\\left[ 2t - \\\\dfrac{t^2}{4} \\\\right]_{2}^{4} = k\\\\left( (8 - 4) - (4 - 1) \\right) = k(4 - 3) = k",
        "graphData": null
      },
      {
        "explanation": "Finally, we add the two evaluated area pieces together, set the sum equal to one, and solve the resulting linear equation for the constant parameter.",
        "workingOut": "\\\\dfrac{k}{3} + k = \\\\dfrac{4k}{3} = 1 \\\\;\\\\Rightarrow\\\\; k = \\\\dfrac{3}{4} \\\\quad\\\\checkmark",
        "graphData": null
      }
    ]
  },
  {
    "id": "cra2023-q30b",
    "type": "multiple_choice",
    "question": "For the production-time distribution with \\\\(k = \\\\dfrac{3}{4}\\\\), let \\\\(F(t)\\\\) be the cumulative distribution function, where \\\\(F(2.16) = 0.3652\\\\). Find the least amount of time taken to produce 88% of the parts.",
    "opts": [
      "\\\\(t = 2.8\\\\text{ minutes}\\\\)",
      "\\\\(t = 3.2\\\\text{ minutes}\\\\)",
      "\\\\(t = 3.6\\\\text{ minutes}\\\\)",
      "\\\\(t = 3.0\\\\text{ minutes}\\\\)"
    ],
    "a": 1,
    "solutionSteps": [
      {
        "explanation": "We begin by identifying which piece of the piecewise cumulative distribution function contains the eighty-eighth percentile. We calculate the accumulated probability up to the first boundary point of two, which is one fourth, and since this is less than zero point eight eight, the value lies in the second interval.",
        "workingOut": "F(2) = \\\\dfrac{1}{4} = 0.25 < 0.88",
        "graphData": null
      },
      {
        "explanation": "Next, we set up the equation for the cumulative distribution function on the second interval by adding the initial probability to the definite integral from the boundary two up to a general variable point t.",
        "workingOut": "F(t) = \\\\dfrac{1}{4} + \\\\int_{2}^{t} \\\\dfrac{3}{4}\\\\left(2 - \\\\dfrac{s}{2}\\\\right)ds",
        "graphData": null
      },
      {
        "explanation": "We perform the integration, substitute the boundaries, and simplify the algebraic expression to find the quadratic form of the cumulative distribution function.",
        "workingOut": "F(t) = \\\\dfrac{1}{4} + \\\\dfrac{3}{4}\\\\left( 2t - \\\\dfrac{t^2}{4} - 3 \\right) = \\\\dfrac{3t}{2} - \\\\dfrac{3t^2}{16} - 2",
        "graphData": null
      },
      {
        "explanation": "We set the cumulative function equal to zero point eight eight, multiply through by the denominator factor to clear fractions, and formulate a standard quadratic equation.",
        "workingOut": "\\\\dfrac{3t}{2} - \\\\dfrac{3t^2}{16} - 2 = 0.88 \\\\;\\\\Rightarrow\\\\; t^2 - 8t + 15.36 = 0",
        "graphData": null
      },
      {
        "explanation": "Finally, we solve the quadratic equation using the quadratic formula, and choose the root that lies within our interval domain of two to four.",
        "workingOut": "t = \\\\dfrac{8 \\\\pm 1.6}{2} \\\\;\\\\Rightarrow\\\\; t = 3.2 \\\\quad\\\\text{or}\\\\quad t = 4.8 \\\\;\\\\Rightarrow\\\\; t = 3.2\\\\text{ minutes}",
        "graphData": null
      }
    ]
  },
  {
    "id": "cra2023s-q28a",
    "type": "teacher_review",
    "question": "A continuous random variable \\\\(X\\\\) has probability density function \\\\(f(x) = e^{-\\\\frac{1}{3}x}\\\\) for \\\\(0 \\\\leq x \\\\leq \\\\ln\\\\!\\\\left(\\\\dfrac{27}{8}\\\\right)\\\\), and \\\\(f(x) = 0\\\\) otherwise. Show that \\\\(f(x)\\\\) is a valid probability density function.",
    "opts": [],
    "a": 0,
    "answer": "1. \\\\(f(x) = e^{-x/3} > 0\\\\) for all \\\\(x\\\\).\\\\n2. The total area is: \\\\n\\\\int_{0}^{\\\\ln(27/8)} e^{-x/3}\\\\,dx = \\\\left[ -3e^{-x/3} \\\\right]_{0}^{\\\\ln(27/8)} = -3e^{-\\\\frac{1}{3}\\\\ln(27/8)} - (-3) = -3\\\\left(\\\\dfrac{2}{3}\\\\right) + 3 = -2 + 3 = 1. \\\\nTherefore, both requirements are satisfied and \\\\(f(x)\\\\) represents a valid PDF.",
    "solutionSteps": [
      {
        "explanation": "We begin by stating the two conditions required for a function to be a valid probability density function: non-negativity on its support, and the definite integral over the entire domain being equal to exactly one.",
        "workingOut": "f(x) \\\\geq 0 \\\\quad\\\\text{and}\\\\quad \\\\int_{0}^{\\\\ln(27/8)} f(x)\\\\,dx = 1",
        "graphData": null
      },
      {
        "explanation": "We check the non-negativity condition. Since the exponential function is positive for all exponents, the function is positive on the interval.",
        "workingOut": "e^{-x/3} > 0 \\\\quad\\\\checkmark",
        "graphData": null
      },
      {
        "explanation": "Next, we integrate the function over the support interval. The antiderivative of e raised to the power of negative one third x is negative three e raised to the power of negative one third x.",
        "workingOut": "\\\\int_{0}^{\\\\ln(27/8)} e^{-x/3}\\\\,dx = \\\\left[ -3e^{-x/3} \\\\right]_{0}^{\\\\ln(27/8)}",
        "graphData": null
      },
      {
        "explanation": "Finally, we evaluate the definite integral by substituting the boundaries. Simplifying the exponential term yields a value of exactly one, confirming that the function is normalized.",
        "workingOut": "= -3\\\\left(\\\\dfrac{2}{3}\\\\right) + 3 = 1 \\\\quad\\\\checkmark",
        "graphData": null
      }
    ]
  },
  {
    "id": "cra2023s-q28b",
    "type": "multiple_choice",
    "question": "For the probability density function \\\\(f(x) = e^{-\\\\frac{1}{3}x}\\\\) on \\\\(0 \\\\leq x \\\\leq \\\\ln\\\\!\\\\left(\\\\dfrac{27}{8}\\\\right)\\\\), find the cumulative distribution function \\\\(F(x)\\\\) for all real numbers.",
    "opts": [
      "\\\\(F(x) = \\\\begin{cases} 0 & x < 0 \\\\ 3 - 3e^{-x/3} & 0 \\\\leq x \\\\leq \\\\ln\\\\dfrac{27}{8} \\\\ 1 & x > \\\\ln\\\\dfrac{27}{8} \\\\end{cases}\\\\)",
      "\\\\(F(x) = \\\\begin{cases} 0 & x < 0 \\\\ 1 - e^{-x/3} & 0 \\\\leq x \\\\leq \\\\ln\\\\dfrac{27}{8} \\\\ 1 & x > \\\\ln\\\\dfrac{27}{8} \\\\end{cases}\\\\)",
      "\\\\(F(x) = \\\\begin{cases} 0 & x < 0 \\\\ 3 - e^{-x/3} & 0 \\\\leq x \\\\leq \\\\ln\\\\dfrac{27}{8} \\\\ 1 & x > \\\\ln\\\\dfrac{27}{8} \\\\end{cases}\\\\)",
      "\\\\(F(x) = \\\\begin{cases} 0 & x < 0 \\\\ 1 - 3e^{-x/3} & 0 \\\\leq x \\\\leq \\\\ln\\\\dfrac{27}{8} \\\\ 1 & x > \\\\ln\\\\dfrac{27}{8} \\\\end{cases}\\\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by setting up the integral for the cumulative distribution function on the support. The cumulative distribution function is defined as the integral of the probability density function from the lower bound of zero up to the variable x.",
        "workingOut": "F(x) = \\\\int_{0}^{x} e^{-t/3}\\\\,dt",
        "graphData": null
      },
      {
        "explanation": "Next, we find the antiderivative and evaluate it at our boundaries, keeping in mind that e to the power of zero is equal to one.",
        "workingOut": "= \\\\left[ -3e^{-t/3} \\\\right]_{0}^{x} = -3e^{-x/3} - (-3) = 3 - 3e^{-x/3}",
        "graphData": null
      },
      {
        "explanation": "Finally, we specify the values of the function outside the support boundaries to define the full piecewise cumulative distribution function. Below zero it is zero, and above the log term it is constant at one.",
        "workingOut": "F(x) = \\\\begin{cases} 0 & x < 0 \\\\ 3 - 3e^{-x/3} & 0 \\\\leq x \\\\leq \\\\ln\\\\frac{27}{8} \\\\ 1 & x > \\\\ln\\\\frac{27}{8} \\\\end{cases}",
        "graphData": null
      }
    ]
  },
  {
    "id": "cra2023s-q28c",
    "type": "multiple_choice",
    "question": "For the distribution with cumulative distribution function \\\\(F(x) = 3 - 3e^{-x/3}\\\\) on \\\\(0 \\\\leq x \\\\leq \\\\ln\\\\!\\\\left(\\\\dfrac{27}{8}\\\\right)\\\\), find the median of the distribution.",
    "opts": [
      "\\\\(x = \\\\ln\\\\!\\\\left(\\\\dfrac{216}{125}\\\\right)\\\\)",
      "\\\\(x = 3\\\\ln\\\\!\\\\left(\\\\dfrac{6}{5}\\\\right)\\\\)",
      "\\\\(x = \\\\ln\\\\!\\\\left(\\\\dfrac{6}{5}\\\\right)\\\\)",
      "\\\\(x = 3\\\\ln\\\\!\\\\left(\\\\dfrac{216}{125}\\\\right)\\\\)"
    ],
    "a": 1,
    "solutionSteps": [
      {
        "explanation": "We begin by stating the equation for the median, which is the value m of the variable where the cumulative distribution function is equal to exactly one half.",
        "workingOut": "3 - 3e^{-m/3} = \\\\dfrac{1}{2}",
        "graphData": null
      },
      {
        "explanation": "Next, we perform the algebraic steps to isolate the exponential term on one side of the equation.",
        "workingOut": "3e^{-m/3} = 3 - \\\\dfrac{1}{2} = \\\\dfrac{5}{2} \\\\;\\\\Rightarrow\\\\; e^{-m/3} = \\\\dfrac{5}{6}",
        "graphData": null
      },
      {
        "explanation": "We take the natural logarithm of both sides to remove the base e and solve for the median variable.",
        "workingOut": "-\\\\dfrac{m}{3} = \\\\ln\\\\!\\\\left(\\\\dfrac{5}{6}\\\\right) \\\\;\\\\Rightarrow\\\\; m = -3\\\\ln\\\\!\\\\left(\\\\dfrac{5}{6}\\\\right) = 3\\\\ln\\\\!\\\\left(\\\\dfrac{6}{5}\\\\right)",
        "graphData": null
      },
      {
        "explanation": "Finally, we apply the power law of logarithms to simplify the expression into a single logarithm term, and verify it lies inside our support domain.",
        "workingOut": "m = \\\\ln\\\\!\\\\left(\\\\left(\\\\dfrac{6}{5}\\\\right)^3\\\\right) = \\\\ln\\\\!\\\\left(\\\\dfrac{216}{125}\\\\right)",
        "graphData": null
      }
    ]
  },
  {
    "id": "cra2023s-q30a",
    "type": "teacher_review",
    "question": "The time taken, \\\\(t\\\\) minutes, for a machine to package boxes is modelled by a continuous random variable with probability density function \\\\(f(t) = k(t-2)^2\\\\) for \\\\(2 \\\\leq t \\\\leq 3\\\\), \\\\(f(t) = k\\\\left(\\\\dfrac{5}{2} - \\\\dfrac{t}{2}\\\\right)\\\\) for \\\\(3 \\\\leq t \\\\leq 5\\\\), and \\\\(f(t) = 0\\\\) otherwise. Show that the value of \\\\(k\\\\) is \\\\(\\\\dfrac{3}{4}\\\\).",
    "opts": [],
    "a": 0,
    "answer": "\\\\int_2^3 k(t-2)^2\\\\,dt + \\\\int_3^5 k\\\\left(\\\\dfrac{5}{2} - \\\\dfrac{t}{2}\\\\right)dt = 1\\\\n\\\\implies k\\\\left[\\\\dfrac{(t-2)^3}{3}\\\\right]_2^3 + k\\\\left[\\\\dfrac{5t}{2} - \\\\dfrac{t^2}{4}\\\\right]_3^5 = 1\\\\n\\\\implies k\\\\left(\\\\dfrac{1}{3}\\\\right) + k(1) = 1\\\\n\\\\implies \\\\dfrac{4k}{3} = 1 \\\\implies k = \\\\dfrac{3}{4}.",
    "solutionSteps": [
      {
        "explanation": "We begin by setting up the equation for the total area under the piecewise probability density function, which must sum to exactly one over the entire domain.",
        "workingOut": "\\\\int_{2}^{3} k(t-2)^2\\\\,dt + \\\\int_{3}^{5} k\\\\left(\\\\dfrac{5}{2} - \\\\dfrac{t}{2}\\\\right)dt = 1",
        "graphData": null
      },
      {
        "explanation": "Next, we integrate the first piece. The antiderivative of k times t minus two squared is k times t minus two cubed divided by three, which we evaluate at the boundary limits.",
        "workingOut": "k\\\\left[ \\\\dfrac{(t-2)^3}{3} \\\\right]_{2}^{3} = \\\\dfrac{k}{3}",
        "graphData": null
      },
      {
        "explanation": "We integrate the second piece term by term. The antiderivative is evaluated at its limits of five and three.",
        "workingOut": "k\\\\left[ \\\\dfrac{5t}{2} - \\\\dfrac{t^2}{4} \\\\right]_{3}^{5} = k\\\\left( \\\\dfrac{25}{4} - \\\\dfrac{21}{4} \\right) = k",
        "graphData": null
      },
      {
        "explanation": "Finally, we add the two evaluated area pieces together, set the sum equal to one, and solve the resulting linear equation for the constant parameter.",
        "workingOut": "\\\\dfrac{k}{3} + k = \\\\dfrac{4k}{3} = 1 \\\\;\\\\Rightarrow\\\\; k = \\\\dfrac{3}{4} \\\\quad\\\\checkmark",
        "graphData": null
      }
    ]
  },
  {
    "id": "cra2023s-q30b",
    "type": "multiple_choice",
    "question": "For the packaging-time distribution with \\\\(k = \\\\dfrac{3}{4}\\\\), let \\\\(F(t)\\\\) be the cumulative distribution function. Find the least amount of time taken to package 88% of the boxes.",
    "opts": [
      "\\\\(t = 4.2\\\\text{ minutes}\\\\)",
      "\\\\(t = 3.8\\\\text{ minutes}\\\\)",
      "\\\\(t = 4.0\\\\text{ minutes}\\\\)",
      "\\\\(t = 4.5\\\\text{ minutes}\\\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by identifying which piece of the piecewise cumulative distribution function contains the eighty-eighth percentile. We calculate the accumulated probability up to the first boundary point of three, which is one fourth, and since this is less than zero point eight eight, the value lies in the second interval.",
        "workingOut": "F(3) = \\\\dfrac{1}{4} = 0.25 < 0.88",
        "graphData": null
      },
      {
        "explanation": "Next, we set up the equation for the cumulative distribution function on the second interval by adding the initial probability to the definite integral from the boundary three up to a general variable point t.",
        "workingOut": "F(t) = \\\\dfrac{1}{4} + \\\\int_{3}^{t} \\\\dfrac{3}{4}\\\\left(\\\\dfrac{5}{2} - \\\\dfrac{s}{2}\\\\right)ds",
        "graphData": null
      },
      {
        "explanation": "We perform the integration, substitute the boundaries, and simplify the algebraic expression to find the quadratic form of the cumulative distribution function.",
        "workingOut": "F(t) = \\\\dfrac{1}{4} + \\\\dfrac{3}{4}\\\\left( \\\\dfrac{5t}{2} - \\\\dfrac{t^2}{4} - \\\\dfrac{21}{4} \\right) = \\\\dfrac{15t}{8} - \\\\dfrac{3t^2}{16} - \\\\dfrac{59}{16}",
        "graphData": null
      },
      {
        "explanation": "We set the cumulative function equal to zero point eight eight, multiply through by the denominator factor to clear fractions, and formulate a standard quadratic equation.",
        "workingOut": "\\\\dfrac{15t}{8} - \\\\dfrac{3t^2}{16} - \\\\dfrac{59}{16} = 0.88 \\\\;\\\\Rightarrow\\\\; t^2 - 10t + 24.36 = 0",
        "graphData": null
      },
      {
        "explanation": "Finally, we solve the quadratic equation using the quadratic formula, and choose the root that lies within our interval domain of three to five.",
        "workingOut": "t = \\\\dfrac{10 \\\\pm 1.6}{2} \\\\;\\\\Rightarrow\\\\; t = 4.2 \\\\quad\\\\text{or}\\\\quad t = 5.8 \\\\;\\\\Rightarrow\\\\; t = 4.2\\\\text{ minutes}",
        "graphData": null
      }
    ]
  },
  {
    "id": "cths2020-q27",
    "type": "multiple_choice",
    "question": "The probability density function for the continuous random variable \\\\(X\\\\) is given by \\\\(f(x) = \\\\begin{cases} |1-x| & 0 \\\\leq x \\\\leq 2 \\\\\\\\ 0 & \\\\text{otherwise} \\\\end{cases}\\\\). Find \\\\(P(X \\\\leq 1.5)\\\\).",
    "opts": [
      "\\\\(P(X \\\\leq 1.5) = \\\\dfrac{5}{8}\\\\)",
      "\\\\(P(X \\\\leq 1.5) = \\\\dfrac{3}{8}\\\\)",
      "\\\\(P(X \\\\leq 1.5) = \\\\dfrac{7}{8}\\\\)",
      "\\\\(P(X \\\\leq 1.5) = \\\\dfrac{1}{2}\\\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by handling the absolute value function. The function is defined piece-wise depending on whether x is less than or greater than one.",
        "workingOut": "|1-x| = \\\\begin{cases} 1-x & x \\\\leq 1 \\\\\\\\ x-1 & x > 1 \\\\end{cases}",
        "graphData": null
      },
      {
        "explanation": "To find the probability, we integrate the function from the lower boundary of zero to one point five. Since the function changes definition at one, we split the integral into two pieces.",
        "workingOut": "P(X \\\\leq 1.5) = \\\\int_{0}^{1} (1-x)\\\\,dx + \\\\int_{1}^{1.5} (x-1)\\\\,dx",
        "graphData": null
      },
      {
        "explanation": "We compute the first definite integral on the interval from zero to one.",
        "workingOut": "\\\\int_{0}^{1} (1-x)\\\\,dx = \\\\left[ x - \\\\dfrac{x^2}{2} \\\\right]_{0}^{1} = 1 - \\\\dfrac{1}{2} = \\\\dfrac{1}{2}",
        "graphData": null
      },
      {
        "explanation": "We compute the second definite integral on the interval from one to one point five.",
        "workingOut": "\\\\int_{1}^{1.5} (x-1)\\\\,dx = \\\\left[ \\\\dfrac{x^2}{2} - x \\\\right]_{1}^{1.5} = \\\\left( \\\\dfrac{2.25}{2} - 1.5 \\\\right) - \\\\left( \\\\dfrac{1}{2} - 1 \\\\right) = -0.375 - (-0.5) = 0.125 = \\\\dfrac{1}{8}",
        "graphData": null
      },
      {
        "explanation": "Finally, we add the values of the two integrals together to find the unified total probability.",
        "workingOut": "P(X \\\\leq 1.5) = \\\\dfrac{1}{2} + \\\\dfrac{1}{8} = \\\\dfrac{5}{8}",
        "graphData": null
      }
    ]
  },
  {
    "id": "cths2020-q32",
    "type": "multiple_choice",
    "question": "A probability density function is defined as \\\\(f(x) = ke^{-x}\\\\) in the domain \\\\([0, 3]\\\\). Find the value of \\\\(k\\\\) (to 4 decimal places) and the median value of the distribution (to 3 decimal places).",
    "opts": [
      "\\\\(k \\\\approx 1.0524\\\\) and Median \\\\(\\\\approx 0.645\\\\)",
      "\\\\(k \\\\approx 1.0524\\\\) and Median \\\\(\\\\approx 0.500\\\\)",
      "\\\\(k \\\\approx 1.0000\\\\) and Median \\\\(\\\\approx 0.693\\\\)",
      "\\\\(k \\\\approx 1.1524\\\\) and Median \\\\(\\\\approx 0.585\\\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by setting the definite integral of the density function over the domain [0, 3] equal to one to solve for the normalization constant k.",
        "workingOut": "\\\\int_{0}^{3} ke^{-x}\\\\,dx = 1 \\\\;\\\\Rightarrow\\\\; k \\\\left[ -e^{-x} \\\\right]_{0}^{3} = 1",
        "graphData": null
      },
      {
        "explanation": "We evaluate the antiderivative at the limits and solve for k to four decimal places.",
        "workingOut": "k(1 - e^{-3}) = 1 \\\\;\\\\Rightarrow\\\\; k = \\\\dfrac{1}{1-e^{-3}} \\\\approx 1.0524",
        "graphData": null
      },
      {
        "explanation": "Next, we set up the equation for the median, let's call it m. The integral of the function from zero to the median must equal exactly zero point five.",
        "workingOut": "\\\\int_{0}^{m} 1.0524e^{-x}\\\\,dx = 0.5 \\\\;\\\\Rightarrow\\\\; 1.0524(1 - e^{-m}) = 0.5",
        "graphData": null
      },
      {
        "explanation": "Finally, we isolate the exponential term and take the natural logarithm to solve for the median value to three decimal places.",
        "workingOut": "1 - e^{-m} = \\\\dfrac{0.5}{1.0524} \\\\approx 0.4751 \\\\;\\\\Rightarrow\\\\; e^{-m} \\\\approx 0.5249 \\\\;\\\\Rightarrow\\\\; m = -\\\\ln(0.5249) \\\\approx 0.645",
        "graphData": null
      }
    ]
  },
  {
    "id": "cths2020s-q27",
    "type": "multiple_choice",
    "question": "The probability density function for the continuous random variable \\\\(Y\\\\) is given by \\\\(f(y) = \\\\begin{cases} \\\\dfrac{1}{4}|2-y| & 0 \\\\leq y \\\\leq 4 \\\\\\\\ 0 & \\\\text{otherwise} \\\\end{cases}\\\\). Find \\\\(P(Y \\\\leq 3)\\\\).",
    "opts": [
      "\\\\(P(Y \\\\leq 3) = \\\\dfrac{5}{8}\\\\)",
      "\\\\(P(Y \\\\leq 3) = \\\\dfrac{3}{4}\\\\)",
      "\\\\(P(Y \\\\leq 3) = \\\\dfrac{1}{2}\\\\)",
      "\\\\(P(Y \\\\leq 3) = \\\\dfrac{7}{8}\\\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by splitting the absolute value expression based on its critical value of two.",
        "workingOut": "|2-y| = \\\\begin{cases} 2-y & y \\\\leq 2 \\\\\\\\ y-2 & y > 2 \\\\end{cases}",
        "graphData": null
      },
      {
        "explanation": "To find the probability, we integrate the piecewise function from zero to three, splitting it into two separate intervals.",
        "workingOut": "P(Y \\\\leq 3) = \\\\dfrac{1}{4} \\\\int_{0}^{2} (2-y)\\\\,dy + \\\\dfrac{1}{4} \\\\int_{2}^{3} (y-2)\\\\,dy",
        "graphData": null
      },
      {
        "explanation": "We evaluate the first definite integral on the interval from zero to two.",
        "workingOut": "\\\\int_{0}^{2} (2-y)\\\\,dy = \\\\left[ 2y - \\\\dfrac{y^2}{2} \\\\right]_{0}^{2} = 4 - 2 = 2",
        "graphData": null
      },
      {
        "explanation": "We evaluate the second definite integral on the interval from two to three.",
        "workingOut": "\\\\int_{2}^{3} (y-2)\\\\,dy = \\\\left[ \\\\dfrac{y^2}{2} - 2y \\\\right]_{2}^{3} = \\\\left( \\\\dfrac{9}{2} - 6 \\\\right) - (2 - 4) = -1.5 - (-2) = 0.5 = \\\\dfrac{1}{2}",
        "graphData": null
      },
      {
        "explanation": "Finally, we sum the two results and multiply by the scale factor of one fourth to find the final probability.",
        "workingOut": "P(Y \\\\leq 3) = \\\\dfrac{1}{4} \\\\left( 2 + \\\\dfrac{1}{2} \\\\right) = \\\\dfrac{1}{4} \\\\left( \\\\dfrac{5}{2} \\\\right) = \\\\dfrac{5}{8}",
        "graphData": null
      }
    ]
  },
  {
    "id": "cths2020s-q32",
    "type": "multiple_choice",
    "question": "A probability density function is defined as \\\\(f(x) = ke^{-2x}\\\\) in the domain \\\\([0, 4]\\\\). Find the value of \\\\(k\\\\) (to 4 decimal places) and the median value of the distribution (to 3 decimal places).",
    "opts": [
      "\\\\(k \\\\approx 2.0007\\\\) and Median \\\\(\\\\approx 0.347\\\\)",
      "\\\\(k \\\\approx 2.0007\\\\) and Median \\\\(\\\\approx 0.500\\\\)",
      "\\\\(k \\\\approx 2.0000\\\\) and Median \\\\(\\\\approx 0.347\\\\)",
      "\\\\(k \\\\approx 1.0007\\\\) and Median \\\\(\\\\approx 0.693\\\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by setting the definite integral of the density function over the domain [0, 4] equal to one to solve for the normalization constant k.",
        "workingOut": "\\\\int_{0}^{4} ke^{-2x}\\\\,dx = 1 \\\\;\\\\Rightarrow\\\\; k \\\\left[ -\\\\dfrac{e^{-2x}}{2} \\\\right]_{0}^{4} = 1",
        "graphData": null
      },
      {
        "explanation": "We evaluate the antiderivative at the limits and solve for k to four decimal places.",
        "workingOut": "k \\\\cdot \\\\dfrac{1 - e^{-8}}{2} = 1 \\\\;\\\\Rightarrow\\\\; k = \\\\dfrac{2}{1-e^{-8}} \\\\approx 2.0007",
        "graphData": null
      },
      {
        "explanation": "Next, we set up the equation for the median, let's call it m. The integral of the function from zero to the median must equal exactly zero point five.",
        "workingOut": "\\\\int_{0}^{m} ke^{-2x}\\\\,dx = 0.5 \\\\;\\\\Rightarrow\\\\; \\\\dfrac{k}{2}(1 - e^{-2m}) = 0.5",
        "graphData": null
      },
      {
        "explanation": "Finally, we isolate the exponential term and take the natural logarithm to solve for the median value to three decimal places.",
        "workingOut": "1 - e^{-2m} = \\\\dfrac{1}{k} \\\\approx 0.4998 \\\\;\\\\Rightarrow\\\\; e^{-2m} \\\\approx 0.5002 \\\\;\\\\Rightarrow\\\\; m \\\\approx \\\\dfrac{-\\\\ln(0.5002)}{2} \\\\approx 0.347",
        "graphData": null
      }
    ]
  }
];

async function main() {
  console.log('Starting Firestore update for Year12 Advanced Ch10B Q21-Q35...');
  for (const q of questionsToUpdate) {
    const docRef = db.doc(`questions/${q.id}`);
    await docRef.update({
      type: q.type,
      question: q.question,
      opts: q.opts,
      options: q.opts,
      a: q.a,
      answer: String(q.a),
      solutionSteps: q.solutionSteps,
      isNew: true
    });
    console.log(`Successfully updated ${q.id}`);
  }
  console.log('Update complete!');
  process.exit(0);
}

main().catch(err => {
  console.error('Update failed:', err);
  process.exit(1);
});
