import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const questionsToUpdate = [
  {
    "id": "baulko2020-q15ci",
    "type": "multiple_choice",
    "question": "Given the probability density function \\\\(f(x) = \\\\begin{cases} 2e^{-2x} & x \\geq 0 \\\\\\\\ 0 & \\\\text{otherwise} \\\\end{cases}\\\\), find the cumulative distribution function \\\\(F(x)\\\\) for \\\\(x \\geq 0\\\\).",
    "opts": [
      "\\\\(F(x) = 1 - e^{-2x}\\\\)",
      "\\\\(F(x) = e^{-2x} - 1\\\\)",
      "\\\\(F(x) = 2 - 2e^{-2x}\\\\)",
      "\\\\(F(x) = 1 - 2e^{-2x}\\\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by recalling the relationship between the cumulative distribution function and the probability density function. The cumulative distribution function is defined as the definite integral of the probability density function from the lower bound of the support, which is zero in this case, up to a variable boundary limit.",
        "workingOut": "F(x) = \\\\int_{0}^{x} 2e^{-2t}\\\\,dt",
        "graphData": null
      },
      {
        "explanation": "Next, we find the antiderivative of the exponential function. The antiderivative of two times e raised to the power of negative two t is negative e raised to the power of negative two t. We prepare to evaluate this at our limits.",
        "workingOut": "= \\\\left[ -e^{-2t} \\\\right]_{0}^{x}",
        "graphData": null
      },
      {
        "explanation": "Finally, we evaluate the antiderivative at the upper limit and subtract the value at the lower limit. Remembering that e to the power of zero is one, we simplify the terms to obtain our final expression.",
        "workingOut": "= \\\\left( -e^{-2x} \\\\right) - \\\\left( -e^{0} \\\\right) = 1 - e^{-2x}",
        "graphData": null
      }
    ]
  },
  {
    "id": "baulko2020-q15cii",
    "type": "multiple_choice",
    "question": "For the continuous distribution with cumulative distribution function \\\\(F(x) = 1 - e^{-2x}\\\\) for \\\\(x \\geq 0\\\\), find the median of the distribution.",
    "opts": [
      "\\\\(x = \\\\ln 2\\\\)",
      "\\\\(x = \\\\dfrac{\\\\ln 2}{2}\\\\)",
      "\\\\(x = 2\\\\ln 2\\\\)",
      "\\\\(x = \\\\dfrac{\\\\ln 3}{2}\\\\)"
    ],
    "a": 1,
    "solutionSteps": [
      {
        "explanation": "We begin by defining the median of a continuous probability distribution. The median is the value of the variable, let's call it m, where exactly half of the total probability lies below it. This corresponds to setting the cumulative distribution function equal to one half.",
        "workingOut": "F(m) = \\\\dfrac{1}{2}",
        "graphData": null
      },
      {
        "explanation": "Next, we set up the algebraic equation by substituting the cumulative distribution function with our specific function and isolating the exponential term on one side.",
        "workingOut": "1 - e^{-2m} = \\\\dfrac{1}{2} \\\\;\\\\Rightarrow\\\\; e^{-2m} = \\\\dfrac{1}{2}",
        "graphData": null
      },
      {
        "explanation": "We take the natural logarithm of both sides of the equation to eliminate the base e, and then solve the resulting linear equation for the median. We recall that the logarithm of one half is equal to negative logarithm of two.",
        "workingOut": "-2m = \\\\ln\\\\!\\\\left(\\\\dfrac{1}{2}\\\\right) = -\\\\ln 2 \\\\;\\\\Rightarrow\\\\; m = \\\\dfrac{\\\\ln 2}{2}",
        "graphData": null
      }
    ]
  },
  {
    "id": "baulko2020-q15ciiv",
    "type": "multiple_choice",
    "question": "A continuous probability distribution has cumulative distribution function \\\\(F(x) = 1 - e^{-3x}\\\\) for \\\\(x \\geq 0\\\\). Find the median of this distribution.",
    "opts": [
      "\\\\(x = \\\\dfrac{\\\\ln 2}{3}\\\\)",
      "\\\\(x = \\\\ln 3\\\\)",
      "\\\\(x = \\\\dfrac{\\\\ln 3}{2}\\\\)",
      "\\\\(x = 3\\\\ln 2\\\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by defining the median for the cumulative distribution function. The median corresponds to the value of the variable where the cumulative probability reaches exactly zero point five.",
        "workingOut": "F(m) = 1 - e^{-3m} = \\\\dfrac{1}{2}",
        "graphData": null
      },
      {
        "explanation": "Next, we isolate the exponential term by subtracting one from both sides and multiplying by negative one, preparing to solve for the variable using logarithms.",
        "workingOut": "e^{-3m} = \\\\dfrac{1}{2}",
        "graphData": null
      },
      {
        "explanation": "Finally, we take the natural logarithm of both sides to extract the exponent. Solving the resulting linear equation gives the exact value of the median.",
        "workingOut": "-3m = -\\\\ln 2 \\\\;\\\\Rightarrow\\\\; m = \\\\dfrac{\\\\ln 2}{3}",
        "graphData": null
      }
    ]
  },
  {
    "id": "bbhs2020-28a",
    "type": "multiple_choice",
    "question": "The time (in minutes) a customer waits in a queue has a probability density function defined by \\\\(f(x) = k(64 - x^2)\\\\) for \\\\(0 \\leq x \\leq 8\\\\), and 0 otherwise. Show the integration steps to find the value of the normalization constant \\\\(k\\\\).",
    "opts": [
      "\\\\(k\\\\int_{0}^{8} (64-x^2)\\\\,dx = k \\\\cdot \\\\dfrac{512}{3} = 1 \\\\implies k = \\\\dfrac{3}{512}\\\\)",
      "\\\\(k\\\\int_{0}^{8} (64-x^2)\\\\,dx = k \\\\cdot \\\\dfrac{1024}{3} = 1 \\\\implies k = \\\\dfrac{3}{1024}\\\\)",
      "\\\\(k\\\\int_{0}^{8} (64-x^2)\\\\,dx = k \\\\cdot \\\\dfrac{1024}{5} = 1 \\\\implies k = \\\\dfrac{5}{1024}\\\\)",
      "\\\\(k\\\\int_{0}^{8} (64-x^2)\\\\,dx = k \\\\cdot 512 = 1 \\\\implies k = \\\\dfrac{1}{512}\\\\)"
    ],
    "a": 1,
    "solutionSteps": [
      {
        "explanation": "We begin by stating the requirement that the total probability density must integrate to one over the entire domain, setting up a definite integral equation.",
        "workingOut": "\\\\int_{0}^{8} k(64 - x^2)\\\\,dx = 1",
        "graphData": null
      },
      {
        "explanation": "We pull the constant parameter k out of the integral and evaluate the antiderivative of the terms inside. We prepare to substitute the limits of eight and zero.",
        "workingOut": "k \\\\left[ 64x - \\\\dfrac{x^3}{3} \\right]_{0}^{8} = 1",
        "graphData": null
      },
      {
        "explanation": "Next, we substitute the boundary limits into the antiderivative. Cubing eight yields five hundred twelve, which we write as a fraction over three, and then combine the terms.",
        "workingOut": "k \\\\left( 64(8) - \\\\dfrac{512}{3} \\right) = 1 \\\\;\\\\Rightarrow\\\\; k \\\\left( 512 - \\\\dfrac{512}{3} \\right) = 1",
        "graphData": null
      },
      {
        "explanation": "Finally, we simplify the terms inside the parentheses to find the unified fraction coefficient and multiply by its reciprocal to find the exact value.",
        "workingOut": "k \\\\left( \\\\dfrac{1536 - 512}{3} \\right) = 1 \\\\;\\\\Rightarrow\\\\; k \\\\left( \\\\dfrac{1024}{3} \\right) = 1 \\\\;\\\\Rightarrow\\\\; k = \\\\dfrac{3}{1024}",
        "graphData": null
      }
    ]
  },
  {
    "id": "bbhs2020-28b",
    "type": "multiple_choice",
    "question": "For the probability density function \\\\(f(x) = \\\\dfrac{3}{1024}(64 - x^2)\\\\) for \\\\(0 \\leq x \\leq 8\\\\), find the cumulative distribution function \\\\(F(x)\\\\) within the support.",
    "opts": [
      "\\\\(F(x) = \\\\dfrac{3x}{16} - \\\\dfrac{x^3}{1024}\\\\)",
      "\\\\(F(x) = \\\\dfrac{3x}{32} - \\\\dfrac{x^3}{512}\\\\)",
      "\\\\(F(x) = \\\\dfrac{x^2}{16} - \\\\dfrac{x^3}{1024}\\\\)",
      "\\\\(F(x) = \\\\dfrac{3x}{16} - \\\\dfrac{x^2}{1024}\\\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by writing down the integral definition of the cumulative distribution function, which accumulates probability density from the lower bound of zero up to a variable value x.",
        "workingOut": "F(x) = \\\\int_{0}^{x} \\\\dfrac{3}{1024}(64 - t^2)\\\\,dt",
        "graphData": null
      },
      {
        "explanation": "Next, we pull out the constant coefficient and evaluate the definite integral of the polynomial term by term using the power rule.",
        "workingOut": "F(x) = \\\\dfrac{3}{1024} \\\\left[ 64t - \\\\dfrac{t^3}{3} \\\\right]_{0}^{x}",
        "graphData": null
      },
      {
        "explanation": "Finally, we substitute the variable limit x, evaluate at zero, and distribute the multiplier to find the simplified piecewise cumulative distribution function.",
        "workingOut": "F(x) = \\\\dfrac{3}{1024} \\\\left( 64x - \\\\dfrac{x^3}{3} \\\\right) = \\\\dfrac{3 \\\\times 64x}{1024} - \\\\dfrac{3x^3}{3 \\\\times 1024} = \\\\dfrac{3x}{16} - \\\\dfrac{x^3}{1024}",
        "graphData": null
      }
    ]
  },
  {
    "id": "bbhs2020-28c",
    "type": "multiple_choice",
    "question": "Using the cumulative distribution function \\\\(F(x) = \\\\dfrac{3x}{16} - \\\\dfrac{x^3}{1024}\\\\), find the probability that a customer will wait in the queue for longer than 5 minutes. Round your final answer to 4 significant figures.",
    "opts": [
      "\\\\(0.8154\\\\)",
      "\\\\(0.1846\\\\)",
      "\\\\(0.2184\\\\)",
      "\\\\(0.1546\\\\)"
    ],
    "a": 1,
    "solutionSteps": [
      {
        "explanation": "We begin by expressing the required probability using the complement rule. The probability of waiting longer than five minutes is equal to one minus the probability of waiting five minutes or less, which is represented by the cumulative distribution function evaluated at five.",
        "workingOut": "P(X > 5) = 1 - F(5)",
        "graphData": null
      },
      {
        "explanation": "Next, we substitute the value of five into the cumulative distribution function and compute the numerical values by finding a common denominator.",
        "workingOut": "F(5) = \\\\dfrac{3(5)}{16} - \\\\dfrac{5^3}{1024} = \\\\dfrac{15}{16} - \\\\dfrac{125}{1024}",
        "graphData": null
      },
      {
        "explanation": "We find a common denominator of one thousand twenty-four to combine the fractions, checking our multiplication carefully.",
        "workingOut": "F(5) = \\\\dfrac{960 - 125}{1024} = \\\\dfrac{835}{1024} \\\\approx 0.81543",
        "graphData": null
      },
      {
        "explanation": "Finally, we subtract this value from one to find the complement, rounding the final decimal answer to four significant figures.",
        "workingOut": "P(X > 5) = 1 - \\\\dfrac{835}{1024} = \\\\dfrac{189}{1024} \\\\approx 0.1846",
        "graphData": null
      }
    ]
  },
  {
    "id": "bbhs2020s-28a",
    "type": "multiple_choice",
    "question": "The time (in minutes) spent at a self-serve checkout is modeled by a continuous probability density function \\\\(f(x) = k(25 - x^2)\\\\) for \\\\(0 \\leq x \\leq 5\\\\), and 0 otherwise. Show the integration steps to find the value of \\(k\\).",
    "opts": [
      "\\\\(k\\\\int_{0}^{5} (25-x^2)\\\\,dx = k \\\\cdot \\\\dfrac{250}{3} = 1 \\\\implies k = \\\\dfrac{3}{250}\\\\)",
      "\\\\(k\\\\int_{0}^{5} (25-x^2)\\\\,dx = k \\\\cdot \\\\dfrac{125}{3} = 1 \\\\implies k = \\\\dfrac{3}{125}\\\\)",
      "\\\\(k\\\\int_{0}^{5} (25-x^2)\\\\,dx = k \\\\cdot \\\\dfrac{500}{3} = 1 \\\\implies k = \\\\dfrac{3}{500}\\\\)",
      "\\\\(k\\\\int_{0}^{5} (25-x^2)\\\\,dx = k \\\\cdot 250 = 1 \\\\implies k = \\\\dfrac{1}{250}\\\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by setting the definite integral of the density function over the interval equal to one to ensure the total probability is normalized.",
        "workingOut": "\\\\int_{0}^{5} k(25 - x^2)\\\\,dx = 1",
        "graphData": null
      },
      {
        "explanation": "We integrate the function term by term, keeping the constant parameter factored out. We set up the boundaries to evaluate the expression.",
        "workingOut": "k \\\\left[ 25x - \\\\dfrac{x^3}{3} \\\\right]_{0}^{5} = 1",
        "graphData": null
      },
      {
        "explanation": "Next, we substitute the limits of integration. Cubing five gives one hundred twenty-five, which we subtract from the first term.",
        "workingOut": "k \\\\left( 25(5) - \\\\dfrac{125}{3} - 0 \\right) = 1 \\\\;\\\\Rightarrow\\\\; k \\\\left( 125 - \\\\dfrac{125}{3} \\right) = 1",
        "graphData": null
      },
      {
        "explanation": "Finally, we simplify the fraction on the left side of the equation and solve for our parameter by multiplying by the reciprocal.",
        "workingOut": "k \\\\left( \\\\dfrac{375 - 125}{3} \\right) = 1 \\\\;\\\\Rightarrow\\\\; k \\\\left( \\\\dfrac{250}{3} \\right) = 1 \\\\;\\\\Rightarrow\\\\; k = \\\\dfrac{3}{250}",
        "graphData": null
      }
    ]
  },
  {
    "id": "bbhs2020s-28b",
    "type": "multiple_choice",
    "question": "For the probability density function \\\\(f(x) = \\\\dfrac{3}{250}(25 - x^2)\\\\) for \\\\(0 \\leq x \\leq 5\\\\), find the cumulative distribution function \\\\(F(x)\\\\) within the support.",
    "opts": [
      "\\(F(x) = \\\\dfrac{3x}{5} - \\\\dfrac{x^3}{250}\\\\)",
      "\\(F(x) = \\\\dfrac{3x}{10} - \\\\dfrac{x^3}{250}\\\\)",
      "\\(F(x) = \\\\dfrac{3x}{10} - \\\\dfrac{x^2}{250}\\\\)",
      "\\(F(x) = \\\\dfrac{x^2}{10} - \\\\dfrac{x^3}{250}\\\\)"
    ],
    "a": 1,
    "solutionSteps": [
      {
        "explanation": "We begin by setting up the integral of the probability density function from zero to a general variable point x to define the cumulative distribution function.",
        "workingOut": "F(x) = \\\\int_{0}^{x} \\\\dfrac{3}{250}(25 - t^2)\\,dt",
        "graphData": null
      },
      {
        "explanation": "Next, we integrate the terms using the power rule, keeping the coefficient factored outside of the expression.",
        "workingOut": "= \\\\dfrac{3}{250} \\\\left[ 25t - \\\\dfrac{t^3}{3} \\\\right]_{0}^{x}",
        "graphData": null
      },
      {
        "explanation": "Finally, we substitute the boundaries and simplify the constants by distributing the fraction to get our final simplified form.",
        "workingOut": "= \\\\dfrac{3}{250} \\\\left( 25x - \\\\dfrac{x^3}{3} \\\\right) = \\\\dfrac{3 \\\\times 25x}{250} - \\\\dfrac{3x^3}{3 \\\\times 250} = \\\\dfrac{3x}{10} - \\\\dfrac{x^3}{250}",
        "graphData": null
      }
    ]
  },
  {
    "id": "bbhs2020s-28c",
    "type": "multiple_choice",
    "question": "Using the cumulative distribution function \\\\(F(x) = \\\\dfrac{3x}{10} - \\\\dfrac{x^3}{250}\\\\) for \\\\(0 \\leq x \\leq 5\\\\), find the probability that a customer spends longer than 4 minutes at the checkout. Express your answer as a simplified fraction.",
    "opts": [
      "\\\\(\\dfrac{7}{125}\\\\)",
      "\\\\(\\dfrac{118}{125}\\\\)",
      "\\\\(\\dfrac{3}{125}\\\\)",
      "\\\\(\\dfrac{9}{125}\\\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by setting up the equation for the probability of the random variable exceeding four. Using the complement rule, we rewrite it in terms of the cumulative distribution function evaluated at four.",
        "workingOut": "P(X > 4) = 1 - F(4)",
        "graphData": null
      },
      {
        "explanation": "Next, we evaluate the cumulative distribution function at four by substituting four into the formula and finding a common denominator.",
        "workingOut": "F(4) = \\\\dfrac{3(4)}{10} - \\\\dfrac{4^3}{250} = \\\\dfrac{12}{10} - \\\\dfrac{64}{250}",
        "graphData": null
      },
      {
        "explanation": "We convert the fractions to have a common denominator of two hundred fifty and perform the subtraction.",
        "workingOut": "F(4) = \\\\dfrac{300 - 64}{250} = \\\\dfrac{236}{250} = \\\\dfrac{118}{125}",
        "graphData": null
      },
      {
        "explanation": "Finally, we subtract the cumulative probability from one to find the exact probability of waiting longer than four minutes.",
        "workingOut": "P(X > 4) = 1 - \\\\dfrac{118}{125} = \\\\dfrac{7}{125}",
        "graphData": null
      }
    ]
  },
  {
    "id": "car2020-q35",
    "type": "multiple_choice",
    "question": "A continuous random variable \\(X\\) has the probability density function \\(f(x) = \\dfrac{1}{2}\\sin x\\) for \\(0 \\leq x \\leq \\pi\\). Find the cumulative distribution function \\(F(x)\\) and the first quartile \\(Q_1\\) of the distribution.",
    "opts": [
      "\\(F(x) = \\dfrac{1}{2}(1 - \\cos x)\\) and \\(Q_1 = \\dfrac{\\pi}{6}\\)",
      "\\(F(x) = \\dfrac{1}{2}(1 - \\cos x)\\) and \\(Q_1 = \\dfrac{\\pi}{3}\\)",
      "\\(F(x) = \\dfrac{1}{2}\\cos x\\) and \\(Q_1 = \\dfrac{\\pi}{3}\\)",
      "\\(F(x) = \\dfrac{1}{2}(1 + \\cos x)\\) and \\(Q_1 = \\dfrac{\\pi}{4}\\)"
    ],
    "a": 1,
    "solutionSteps": [
      {
        "explanation": "We begin by integrating the probability density function from the lower bound of zero to a variable point x to determine the cumulative distribution function.",
        "workingOut": "F(x) = \\int_{0}^{x} \\dfrac{1}{2}\\sin t\\,dt",
        "graphData": null
      },
      {
        "explanation": "We evaluate the definite integral. The antiderivative of sine is negative cosine, and we evaluate it at our boundaries.",
        "workingOut": "= \\left[ -\\dfrac{1}{2}\\cos t \\right]_{0}^{x} = -\\dfrac{1}{2}\\cos x - \\left( -\\dfrac{1}{2}\\cos 0 \\right) = \\dfrac{1}{2}(1 - \\cos x)",
        "graphData": null
      },
      {
        "explanation": "Next, we state the definition of the first quartile Q1, which is the value where the cumulative distribution function is equal to exactly zero point two five.",
        "workingOut": "F(Q_1) = \\dfrac{1}{2}(1 - \\cos Q_1) = \\dfrac{1}{4}",
        "graphData": null
      },
      {
        "explanation": "Finally, we solve the trigonometric equation. We multiply by two, isolate the cosine term, and find the corresponding angle within the support domain.",
        "workingOut": "1 - \\cos Q_1 = \\dfrac{1}{2} \\implies \\cos Q_1 = \\dfrac{1}{2} \\implies Q_1 = \\dfrac{\\pi}{3}",
        "graphData": null
      }
    ]
  }
];

async function main() {
  console.log('Starting Firestore update for Year12 Advanced Ch10B Q11-Q20...');
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
