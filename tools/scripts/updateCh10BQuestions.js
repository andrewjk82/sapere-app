import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const updatedQuestions = [
  {
    "id": "asc2020-mc10",
    "type": "multiple_choice",
    "difficulty": "hard",
    "topicId": "y12a-10B",
    "question": "Consider the cumulative distribution function:\n\n\\(F(x) = \\begin{cases} 0 & x < 0 \\\\ \\sin\\!\\left(\\dfrac{x}{2}\\right) & 0 \\leq x \\leq b \\\\ 1 & x > b \\end{cases}\\)\n\nFind the value of \\(b\\).",
    "opts": [
      "\\(b = 2\\pi\\)",
      "\\(b = \\dfrac{\\pi}{2}\\)",
      "\\(b = \\pi\\)",
      "\\(b = 4\\pi\\)"
    ],
    "a": 2,
    "solutionSteps": [
      {
        "explanation": "We begin by analyzing the properties of a cumulative distribution function. A valid cumulative distribution function must start at zero and continuously accumulate probability to reach a maximum value of one at the upper boundary of its domain. Therefore, at the boundary point where the function transitions to a constant value of one, the expression must evaluate to exactly one.",
        "workingOut": "\\text{Given CDF must satisfy: } F(b) = 1",
        "graphData": null
      },
      {
        "explanation": "Next, we set up the equation using the given definition of the cumulative distribution function for the interval containing the upper boundary. We substitute the boundary value into the sine function expression and set the entire expression equal to one.",
        "workingOut": "\\sin\\!\\left(\\dfrac{b}{2}\\right) = 1",
        "graphData": null
      },
      {
        "explanation": "Now we solve the trigonometric equation. We recall that the sine of an angle is equal to one when the angle is equal to pi divided by two plus any integer multiple of two pi. Since the cumulative distribution function must be non-decreasing, we find the first positive value for the angle.",
        "workingOut": "\\dfrac{b}{2} = \\dfrac{\\pi}{2}",
        "graphData": null
      },
      {
        "explanation": "We isolate the variable by multiplying both sides of the equation by two. This gives us the boundary value, which we then check to ensure the function is non-decreasing over the entire interval from zero to this boundary point.",
        "workingOut": "b = \\pi",
        "graphData": null
      },
      {
        "explanation": "Finally, we state the completed solution and confirm its validity. Substituting our boundary value back into the original function yields exactly one, confirming that the function is a valid cumulative distribution function reaching its maximum at this point.",
        "workingOut": "\\text{The value is } b = \\pi",
        "graphData": null
      }
    ],
    "isNew": true
  },
  {
    "id": "asc2020-mc10v",
    "type": "multiple_choice",
    "difficulty": "hard",
    "topicId": "y12a-10B",
    "question": "A continuous random variable \\(X\\) has the cumulative distribution function:\n\n\\(F(x) = \\begin{cases} 0 & x < 0 \\\\ \\sin(x) & 0 \\leq x \\leq c \\\\ 1 & x > c \\end{cases}\\)\n\nFind the value of \\(c\\).",
    "opts": [
      "\\(c = \\pi\\)",
      "\\(c = \\dfrac{\\pi}{2}\\)",
      "\\(c = \\dfrac{\\pi}{4}\\)",
      "\\(c = 2\\pi\\)"
    ],
    "a": 1,
    "solutionSteps": [
      {
        "explanation": "We begin by recalling that a cumulative distribution function must approach a value of one as the variable increases. Specifically, at the transition boundary where the function becomes constant, the functional value must equal exactly one to prevent any jump discontinuity and satisfy the definition of a cumulative distribution function.",
        "workingOut": "\\text{Set boundary condition: } F(c) = 1",
        "graphData": null
      },
      {
        "explanation": "We substitute the boundary variable into the active non-zero piece of the cumulative distribution function. This sets up a basic trigonometric equation where the sine of the variable is set equal to one.",
        "workingOut": "\\sin(c) = 1",
        "graphData": null
      },
      {
        "explanation": "We solve the trigonometric equation for the smallest positive angle. We know that the sine function attains its maximum value of one at an angle of pi divided by two radians. A common mistake is to select other angles where sine is not equal to one, so we verify this value carefully.",
        "workingOut": "c = \\dfrac{\\pi}{2}",
        "graphData": null
      },
      {
        "explanation": "Finally, we confirm the validity of this solution by checking that the derivative of the cumulative distribution function is non-negative on the given interval, ensuring the function is non-decreasing. Since the derivative is cosine, which is non-negative on this interval, the solution is correct.",
        "workingOut": "F'\\!(x) = \\cos(x) \\geq 0 \\text{ on } \\left[0, \\dfrac{\\pi}{2}\\right]",
        "graphData": null
      }
    ],
    "isNew": true
  },
  {
    "id": "asc2020-q31",
    "type": "multiple_choice",
    "difficulty": "hard",
    "topicId": "y12a-10B",
    "question": "The wait time (in minutes) for an ambulance is modelled by a continuous probability distribution function:\n\n\\(f(x) = \\begin{cases} ax(10-x) & 0 \\leq x \\leq 10 \\\\ 0 & \\text{otherwise} \\end{cases}\\)\n\nDetermine the value of the constant \\(a\\) that makes this a valid probability density function.",
    "opts": [
      "\\(a = \\dfrac{3}{500}\\)",
      "\\(a = \\dfrac{1}{500}\\)",
      "\\(a = \\dfrac{3}{250}\\)",
      "\\(a = \\dfrac{3}{1000}\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by stating the normalization condition for any continuous probability density function. The total area under the probability density curve over its entire domain must equal exactly one, which mathematically corresponds to the definite integral of the function over the support interval being equal to one.",
        "workingOut": "\\int_{0}^{10} ax(10-x)\\,dx = 1",
        "graphData": null
      },
      {
        "explanation": "Next, we factor the constant coefficient out of the integral and expand the polynomial integrand to prepare it for integration. Expanding the terms ensures we can apply the power rule of integration term by term.",
        "workingOut": "a \\int_{0}^{10} (10x - x^2)\\,dx = 1",
        "graphData": null
      },
      {
        "explanation": "We integrate the expanded terms using the power rule. We find the antiderivative of each term and set up the expression to evaluate it at the upper and lower integration limits of ten and zero.",
        "workingOut": "a \\left[ 5x^2 - \\dfrac{x^3}{3} \\right]_{0}^{10} = 1",
        "graphData": null
      },
      {
        "explanation": "We evaluate the antiderivative at the limits by substituting ten and zero into the expression. A common mistake is arithmetic errors when cubing ten, so we proceed carefully to calculate the resulting fractional value.",
        "workingOut": "a \\left( 5(100) - \\dfrac{1000}{3} - 0 \\right) = 1 \\;\\Rightarrow\\; a \\left( 500 - \\dfrac{1000}{3} \\right) = 1",
        "graphData": null
      },
      {
        "explanation": "We find a common denominator for the terms inside the parentheses to simplify the equation, and then solve for the constant coefficient by multiplying by the reciprocal of the fraction.",
        "workingOut": "a \\left( \\dfrac{1500 - 1000}{3} \\right) = 1 \\;\\Rightarrow\\; a \\left( \\dfrac{500}{3} \\right) = 1 \\;\\Rightarrow\\; a = \\dfrac{3}{500}",
        "graphData": null
      }
    ],
    "isNew": true
  },
  {
    "id": "asc2020-q31a",
    "type": "multiple_choice",
    "difficulty": "hard",
    "topicId": "y12a-10B",
    "question": "A continuous random variable \\(X\\) has a probability density function defined by:\n\n\\(f(x) = \\begin{cases} ax(10-x) & 0 \\leq x \\leq 10 \\\\ 0 & \\text{otherwise} \\end{cases}\\)\n\nIf the total probability is normalized, which of the following expressions correctly verifies the value of \\(a\\)?",
    "opts": [
      "\\(a \\int_{0}^{10} (10x - x^2)\\,dx = a \\cdot \\dfrac{1000}{3} = 1 \\implies a = \\dfrac{3}{1000}\\)",
      "\\(a \\int_{0}^{10} (10x - x^2)\\,dx = a \\cdot \\dfrac{500}{3} = 1 \\implies a = \\dfrac{3}{500}\\)",
      "\\(a \\int_{0}^{10} (10x - x^2)\\,dx = a \\cdot \\dfrac{250}{3} = 1 \\implies a = \\dfrac{3}{250}\\)",
      "\\(a \\int_{0}^{10} (10x - x^2)\\,dx = a \\cdot \\dfrac{500}{7} = 1 \\implies a = \\dfrac{7}{500}\\)"
    ],
    "a": 1,
    "solutionSteps": [
      {
        "explanation": "We begin by setting up the integral equation for a normalized probability density function. The total probability over the domain of the random variable must equal one, which is expressed as the definite integral of the function from zero to ten.",
        "workingOut": "\\int_{0}^{10} ax(10-x)\\,dx = 1",
        "graphData": null
      },
      {
        "explanation": "Next, we factor out the constant parameter and find the antiderivative of the quadratic polynomial term by term using standard power integration rules.",
        "workingOut": "a \\left[ 5x^2 - \\dfrac{x^3}{3} \\right]_{0}^{10} = 1",
        "graphData": null
      },
      {
        "explanation": "We substitute the limits of integration into the antiderivative to find the definite value. Subtracting the lower limit of zero from the evaluated upper limit of ten gives the simplified coefficient equation.",
        "workingOut": "a \\left( 500 - \\dfrac{1000}{3} \\right) = 1 \\;\\Rightarrow\\; a \\left( \\dfrac{500}{3} \\right) = 1",
        "graphData": null
      },
      {
        "explanation": "Finally, we solve the algebraic equation for the parameter by taking the reciprocal of the fraction on the left side, which establishes the correct verified value.",
        "workingOut": "a = \\dfrac{3}{500}",
        "graphData": null
      }
    ],
    "isNew": true
  },
  {
    "id": "asc2020-q31b",
    "type": "multiple_choice",
    "difficulty": "hard",
    "topicId": "y12a-10B",
    "question": "Using the probability density function \\(f(x) = \\dfrac{3}{500}x(10-x)\\) for \\(0 \\leq x \\leq 10\\), find the cumulative distribution function \\(F(x)\\) within this domain.",
    "opts": [
      "\\(F(x) = \\dfrac{x^2(15-x)}{500}\\)",
      "\\(F(x) = \\dfrac{x^2(10-x)}{500}\\)",
      "\\(F(x) = \\dfrac{x(15-x^2)}{500}\\)",
      "\\(F(x) = \\dfrac{3x^2(5-x)}{500}\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by defining the relationship between a cumulative distribution function and a probability density function. The cumulative distribution function is obtained by integrating the probability density function from the lower limit of its support up to a variable point.",
        "workingOut": "F(x) = \\int_{0}^{x} \\dfrac{3}{500}t(10-t)\\,dt",
        "graphData": null
      },
      {
        "explanation": "Next, we factor the constant coefficient out of the integral and expand the polynomial inside the integrand to simplify the application of integration rules.",
        "workingOut": "F(x) = \\dfrac{3}{500} \\int_{0}^{x} (10t - t^2)\\,dt",
        "graphData": null
      },
      {
        "explanation": "We perform the integration by applying the power rule to each term of the polynomial, finding the antiderivative and preparing it to be evaluated at the boundary limits.",
        "workingOut": "F(x) = \\dfrac{3}{500} \\left[ 5t^2 - \\dfrac{t^3}{3} \\right]_{0}^{x}",
        "graphData": null
      },
      {
        "explanation": "We substitute the variable limit into the antiderivative expression, simplify the constants by distributing the coefficient, and factor the expression to find the final algebraic form.",
        "workingOut": "F(x) = \\dfrac{3}{500} \\left( 5x^2 - \\dfrac{x^3}{3} \\right) = \\dfrac{15x^2 - x^3}{500} = \\dfrac{x^2(15-x)}{500}",
        "graphData": null
      }
    ],
    "isNew": true
  },
  {
    "id": "asc2020-q31c",
    "type": "multiple_choice",
    "difficulty": "medium",
    "topicId": "y12a-10B",
    "question": "Using the cumulative distribution function \\(F(x) = \\dfrac{x^2(15-x)}{500}\\) for \\(0 \\leq x \\leq 10\\), find the probability that a randomly selected wait time is more than 7 minutes.",
    "opts": [
      "\\(0.784\\)",
      "\\(0.256\\)",
      "\\(0.216\\)",
      "\\(0.316\\)"
    ],
    "a": 2,
    "solutionSteps": [
      {
        "explanation": "We begin by setting up the equation for the probability of an event exceeding a certain value. Using the complement rule, the probability that the random variable is greater than seven is equal to one minus the probability that it is less than or equal to seven, which is represented by the cumulative distribution function evaluated at seven.",
        "workingOut": "P(X > 7) = 1 - F(7)",
        "graphData": null
      },
      {
        "explanation": "Next, we substitute the value of seven into the expression for the cumulative distribution function to compute the accumulated probability up to that point.",
        "workingOut": "F(7) = \\dfrac{7^2(15-7)}{500}",
        "graphData": null
      },
      {
        "explanation": "We simplify the numerical expression. We square seven, subtract seven from fifteen, and multiply the resulting values in the numerator before dividing by the denominator.",
        "workingOut": "F(7) = \\dfrac{49 \\times 8}{500} = \\dfrac{392}{500} = 0.784",
        "graphData": null
      },
      {
        "explanation": "Finally, we subtract the evaluated cumulative probability from one to find the final complement probability. A common mistake here is subtracting incorrectly from one, so we double-check the subtraction to ensure decimal accuracy.",
        "workingOut": "P(X > 7) = 1 - 0.784 = 0.216",
        "graphData": null
      }
    ],
    "isNew": true
  },
  {
    "id": "asc2020-q31v",
    "type": "multiple_choice",
    "difficulty": "hard",
    "topicId": "y12a-10B",
    "question": "A continuous random variable \\(X\\) has the probability density function:\n\n\\(f(x) = \\begin{cases} kx(4-x) & 0 \\leq x \\leq 4 \\\\ 0 & \\text{otherwise} \\end{cases}\\)\n\nFind the probability \\(P(X > 3)\\).",
    "opts": [
      "\\(P(X > 3) = \\dfrac{5}{32}\\)",
      "\\(P(X > 3) = \\dfrac{3}{32}\\)",
      "\\(P(X > 3) = \\dfrac{1}{8}\\)",
      "\\(P(X > 3) = \\dfrac{7}{32}\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by stating the requirement that the total area under the probability density function must equal one. We will first integrate the function over its support interval from zero to four to solve for the normalization constant.",
        "workingOut": "\\int_{0}^{4} kx(4-x)\\,dx = 1",
        "graphData": null
      },
      {
        "explanation": "We expand the integrand and integrate term by term. Substituting the boundary limits of four and zero into the antiderivative allows us to solve for the constant coefficient.",
        "workingOut": "k \\left[ 2x^2 - \\dfrac{x^3}{3} \\right]_{0}^{4} = 1 \\;\\Rightarrow\\; k \\left( 32 - \\dfrac{64}{3} \\right) = 1 \\;\\Rightarrow\\; k = \\dfrac{3}{32}",
        "graphData": null
      },
      {
        "explanation": "Next, we set up the definite integral to find the probability of the random variable exceeding three. We integrate the fully determined probability density function from three to the upper support boundary of four.",
        "workingOut": "P(X > 3) = \\int_{3}^{4} \\dfrac{3}{32}x(4-x)\\,dx",
        "graphData": null
      },
      {
        "explanation": "We compute the definite integral by evaluating the antiderivative at the upper limit of four and subtracting the value of the antiderivative at the lower limit of three.",
        "workingOut": "P(X > 3) = \\dfrac{3}{32} \\left[ 2x^2 - \\dfrac{x^3}{3} \\right]_{3}^{4} = \\dfrac{3}{32} \\left( \\left(32 - \\dfrac{64}{3}\\right) - \\left(18 - 9\\right) \\right)",
        "graphData": null
      },
      {
        "explanation": "Finally, we simplify the fractions inside the brackets. Subtracting the evaluated terms and multiplying by the external coefficient yields the exact probability.",
        "workingOut": "P(X > 3) = \\dfrac{3}{32} \\times \\dfrac{5}{3} = \\dfrac{5}{32}",
        "graphData": null
      }
    ],
    "isNew": true
  },
  {
    "id": "baulko2020-q11fi",
    "type": "multiple_choice",
    "difficulty": "medium",
    "topicId": "y12a-10B",
    "question": "Which of the following conditions and definite integrals correctly verifies that \\(f(x) = \\begin{cases} 6x-6x^2 & 0 \\leq x \\leq 1 \\\\ 0 & \\text{otherwise} \\end{cases}\\) is a valid probability density function?",
    "opts": [
      "\\(f(x) \\geq 0\\) on \\([0, 1]\\) and \\(\\int_{0}^{1} (6x - 6x^2)\\,dx = [3x^2 - 2x^3]_0^1 = 1\\)",
      "\\(f(x) \\geq 0\\) on \\([0, 1]\\) and \\(\\int_{0}^{1} (6x - 6x^2)\\,dx = [3x^2 - 3x^3]_0^1 = 0\\)",
      "\\(f(x) \\geq 0\\) on \\([0, 1]\\) and \\(\\int_{0}^{1} (6x - 6x^2)\\,dx = [6x^2 - 2x^3]_0^1 = 4\\)",
      "\\(f(x) \\geq 0\\) on \\([0, 1]\\) and \\(\\int_{0}^{1} (6x - 6x^2)\\,dx = [2x^2 - 3x^3]_0^1 = -1\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by stating the two fundamental requirements for a function to be a valid probability density function. First, the function must be non-negative for all real numbers in its domain. Second, the total area under the function over its support interval must equal exactly one.",
        "workingOut": "f(x) \\geq 0 \\text{ for all } x \\in [0, 1] \\quad\\text{and}\\quad \\int_{0}^{1} f(x)\\,dx = 1",
        "graphData": null
      },
      {
        "explanation": "Next, we verify the non-negativity condition. We factor the quadratic term to analyze its sign on the interval from zero to one. Since both factored terms are non-negative on this interval, the function is non-negative.",
        "workingOut": "f(x) = 6x(1-x) \\geq 0 \\quad\\text{for } 0 \\leq x \\leq 1",
        "graphData": null
      },
      {
        "explanation": "Now we compute the definite integral over the support interval to verify the area condition. We find the antiderivative of the terms using standard integration rules.",
        "workingOut": "\\int_{0}^{1} (6x - 6x^2)\\,dx = \\left[ 3x^2 - 2x^3 \\right]_{0}^{1}",
        "graphData": null
      },
      {
        "explanation": "Finally, we evaluate the antiderivative at the boundary limits of one and zero. Substituting these values confirms that the total integral is equal to exactly one, establishing that the function is a valid probability density function.",
        "workingOut": "\\left( 3(1)^2 - 2(1)^3 \\right) - 0 = 3 - 2 = 1",
        "graphData": null
      }
    ],
    "isNew": true
  },
  {
    "id": "baulko2020-q11fii",
    "type": "multiple_choice",
    "difficulty": "easy",
    "topicId": "y12a-10B",
    "question": "Find the mode of the probability density function \\(f(x) = 6x - 6x^2\\) for \\(0 \\leq x \\leq 1\\).",
    "opts": [
      "\\(x = \\dfrac{1}{3}\\)",
      "\\(x = \\dfrac{1}{4}\\)",
      "\\(x = \\dfrac{1}{2}\\)",
      "\\(x = \\dfrac{2}{3}\\)"
    ],
    "a": 2,
    "solutionSteps": [
      {
        "explanation": "We begin by defining the mode of a continuous probability distribution. The mode corresponds to the value of the variable where the probability density function achieves its maximum value. For a differentiable function, this point can be found by setting the first derivative of the function equal to zero.",
        "workingOut": "\\text{Set } f'(x) = 0 \\text{ to find critical points.}",
        "graphData": null
      },
      {
        "explanation": "Next, we differentiate the given quadratic probability density function with respect to the variable. We apply the power rule of differentiation term by term.",
        "workingOut": "f'(x) = \\dfrac{d}{dx}(6x - 6x^2) = 6 - 12x",
        "graphData": null
      },
      {
        "explanation": "We set the derivative equal to zero and solve the resulting linear equation to find the critical value of the variable.",
        "workingOut": "6 - 12x = 0 \\;\\Rightarrow\\; 12x = 6 \\;\\Rightarrow\\; x = \\dfrac{1}{2}",
        "graphData": null
      },
      {
        "explanation": "Finally, we verify that this critical point represents a maximum by calculating the second derivative. Since the second derivative is constant and negative, the function is concave down, confirming a local and global maximum at this point.",
        "workingOut": "f''(x) = -12 < 0 \\quad\\text{confirms a maximum at } x = \\dfrac{1}{2}",
        "graphData": null
      }
    ],
    "isNew": true
  },
  {
    "id": "baulko2020-q11fiiv",
    "type": "multiple_choice",
    "difficulty": "easy",
    "topicId": "y12a-10B",
    "question": "Find the mode of the probability density function \\(f(x) = 12x^2(1-x)\\) for \\(0 \\leq x \\leq 1\\).",
    "opts": [
      "\\(x = \\dfrac{1}{2}\\)",
      "\\(x = \\dfrac{2}{3}\\)",
      "\\(x = \\dfrac{3}{4}\\)",
      "\\(x = \\dfrac{1}{3}\\)"
    ],
    "a": 1,
    "solutionSteps": [
      {
        "explanation": "We begin by recalling that the mode of a continuous probability density function is the value in the domain where the function reaches its absolute maximum. To locate this maximum, we will differentiate the function and identify its critical points within the interval.",
        "workingOut": "\\text{Set } f'(x) = 0 \\text{ on the interval } [0, 1]",
        "graphData": null
      },
      {
        "explanation": "We expand the algebraic expression of the probability density function to make differentiation more straightforward, and then apply the power rule of differentiation.",
        "workingOut": "f(x) = 12x^2 - 12x^3 \\;\\Rightarrow\\; f'(x) = 24x - 36x^2",
        "graphData": null
      },
      {
        "explanation": "Next, we set the derivative equal to zero and factor the expression to find the roots of the equation, which represent our critical points.",
        "workingOut": "12x(2 - 3x) = 0 \\;\\Rightarrow\\; x = 0 \\quad\\text{or}\\quad x = \\dfrac{2}{3}",
        "graphData": null
      },
      {
        "explanation": "Finally, we evaluate the function at the critical points and the boundaries. The boundaries yield a value of zero, while the critical point at two-thirds yields the maximum value, confirming it as the mode.",
        "workingOut": "f(0) = 0, \\quad f(1) = 0, \\quad f\\left(\\dfrac{2}{3}\\right) = 12\\left(\\dfrac{4}{9}\\right)\\left(\\dfrac{1}{3}\\right) = \\dfrac{16}{9} > 0",
        "graphData": null
      }
    ],
    "isNew": true
  }
];

async function main() {
  console.log('Starting Firestore update for Year12 Advanced Ch10B Q1-Q10...');
  for (const q of updatedQuestions) {
    const docRef = db.doc(`questions/${q.id}`);
    await docRef.update({
      type: q.type,
      question: q.question,
      opts: q.opts,
      a: q.a,
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
