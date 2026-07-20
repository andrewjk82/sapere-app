import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const questionsToUpdate = [
  {
    "id": "bbhs2020s-23",
    "type": "multiple_choice",
    "question": "A discrete random variable \\\\(X\\\\) has the probability distribution:\\\\n\\\\n| \\\\(X = x\\\\) | 10 | 11 | 12 | 13 |\\\\n|---|---|---|---|---|\\\\n| \\\\(P(x)\\\\) | 0.30 | 0.25 | \\\\(m\\\\) | 0.35 |\\\\n\\\\nFind \\\\(m\\\\), the expected value \\\\(E(X)\\\\), and the variance \\\\(\\\\text{Var}(X)\\\\).",
    "opts": [
      "\\\\(m = 0.10\\\\), \\\\(E(X) = 11.5\\\\), \\\\(\\\\text{Var}(X) = 1.55\\\\)",
      "\\\\(m = 0.10\\\\), \\\\(E(X) = 11.5\\\\), \\\\(\\\\text{Var}(X) = 1.35\\\\)",
      "\\\\(m = 0.15\\\\), \\\\(E(X) = 11.8\\\\), \\\\(\\\\text{Var}(X) = 1.55\\\\)",
      "\\\\(m = 0.10\\\\), \\\\(E(X) = 11.2\\\\), \\\\(\\\\text{Var}(X) = 1.45\\\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by finding the missing probability value m. Since the sum of all probabilities in a valid distribution must equal exactly one, we set up an addition equation.",
        "workingOut": "0.30 + 0.25 + m + 0.35 = 1 \\\\implies m = 0.10"
      },
      {
        "explanation": "Next, we calculate the expected value E(X) by summing the products of the variable outcomes and their probabilities.",
        "workingOut": "E(X) = 10(0.30) + 11(0.25) + 12(0.10) + 13(0.35) = 11.5"
      },
      {
        "explanation": "We compute the expected value of X squared to prepare for calculating the variance.",
        "workingOut": "E(X^2) = 100(0.30) + 121(0.25) + 144(0.10) + 169(0.35) = 133.80"
      },
      {
        "explanation": "Finally, we compute the variance using the expectation of X squared and the squared expectation value.",
        "workingOut": "\\\\text{Var}(X) = E(X^2) - [E(X)]^2 = 133.80 - (11.5)^2 = 1.55"
      }
    ]
  },
  {
    "id": "cra2023-q17b",
    "type": "multiple_choice",
    "question": "Using the lottery distribution with \\\\(m = 0.2169\\\\) (prizes 0, 20, 100, 500, 5000, 10000 with probabilities 0.75, 0.2169, 0.03, 0.002, 0.001, 0.0001) and a ticket price of \\\\(\\$20\\\\), find the expected net loss or gain for a single play.",
    "opts": [
      "Expected gain of 14.34",
      "Expected loss of 5.66",
      "Expected loss of 4.34",
      "Expected loss of 3.66"
    ],
    "a": 1,
    "solutionSteps": [
      {
        "explanation": "We begin by writing the formula for the expected value of a discrete random variable: multiply each prize value by its probability and sum.",
        "workingOut": "E(X) = \\\\sum x\\\\,P(X = x)"
      },
      {
        "explanation": "Substitute each prize-probability pair into the formula.",
        "workingOut": "E(X) = 0(0.75) + 20(0.2169) + 100(0.03) + 500(0.002) + 5000(0.001) + 10000(0.0001)"
      },
      {
        "explanation": "Evaluate each term separately and sum them up to find the expected prize return.",
        "workingOut": "= 0 + 4.338 + 3 + 1 + 5 + 1 = 14.338"
      },
      {
        "explanation": "Finally, calculate the expected loss by subtracting the expected return from the ticket price.",
        "workingOut": "\\\\text{Expected loss} = 20 - 14.338 = 5.662 \\\\approx 5.66"
      }
    ]
  },
  {
    "id": "cra2023-q17c",
    "type": "multiple_choice",
    "question": "Find the variance of the lottery prize distribution (prizes 0, 20, 100, 500, 5000, 10000 with probabilities 0.75, 0.2169, 0.03, 0.002, 0.001, 0.0001), given \\\\(E(X) = 14.338\\\\).",
    "opts": [
      "\\\\(\\\\text{Var}(X) \\\\approx 35681.18\\\\)",
      "\\\\(\\\\text{Var}(X) \\\\approx 35886.76\\\\)",
      "\\\\(\\\\text{Var}(X) \\\\approx 32456.24\\\\)",
      "\\\\(\\\\text{Var}(X) \\\\approx 38920.48\\\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by writing the computational formula for variance.",
        "workingOut": "\\\\text{Var}(X) = E(X^2) - [E(X)]^2"
      },
      {
        "explanation": "Square each prize value and multiply by its probability to calculate expectation of X squared.",
        "workingOut": "E(X^2) = 0^2(0.75) + 20^2(0.2169) + 100^2(0.03) + 500^2(0.002) + 5000^2(0.001) + 10000^2(0.0001)"
      },
      {
        "explanation": "Evaluate each squared product term and sum them up.",
        "workingOut": "= 86.76 + 300 + 500 + 25000 + 10000 = 35886.76"
      },
      {
        "explanation": "Finally, subtract the squared expectation mean from the expectation of X squared.",
        "workingOut": "\\\\text{Var}(X) = 35886.76 - (14.338)^2 \\\\approx 35681.18"
      }
    ]
  },
  {
    "id": "cra2023s-q17b",
    "type": "multiple_choice",
    "question": "Using the raffle distribution with \\\\(m = 0.2674\\\\) (prizes 0, 25, 100, 500, 5000, 20000 with probabilities 0.7, 0.2674, 0.03, 0.002, 0.0005, 0.0001) and a ticket price of \\\\(\\$25\\\\), find the expected net loss or gain for a single play.",
    "opts": [
      "Expected loss of 15.19",
      "Expected loss of 9.82",
      "Expected loss of 8.82",
      "Expected gain of 15.19"
    ],
    "a": 1,
    "solutionSteps": [
      {
        "explanation": "We begin by writing the expected value formula for a discrete random variable.",
        "workingOut": "E(X) = \\\\sum x\\\\,P(X = x)"
      },
      {
        "explanation": "Substitute each prize-probability pair into the formula.",
        "workingOut": "E(X) = 0(0.7) + 25(0.2674) + 100(0.03) + 500(0.002) + 5000(0.0005) + 20000(0.0001)"
      },
      {
        "explanation": "Evaluate each term and sum them up to calculate expected winnings.",
        "workingOut": "= 0 + 6.685 + 3 + 1 + 2.5 + 2 = 15.185"
      },
      {
        "explanation": "Finally, calculate expected loss by subtracting the return from the ticket price.",
        "workingOut": "\\\\text{Expected loss} = 25 - 15.185 = 9.815 \\\\approx 9.82"
      }
    ]
  },
  {
    "id": "cra2023s-q17c",
    "type": "multiple_choice",
    "question": "Find the variance of the raffle prize distribution (prizes 0, 25, 100, 500, 5000, 20000 with probabilities 0.7, 0.2674, 0.03, 0.002, 0.0005, 0.0001), given \\\\(E(X) = 15.185\\\\).",
    "opts": [
      "\\\\(\\\\text{Var}(X) \\\\approx 53467.13\\\\)",
      "\\\\(\\\\text{Var}(X) \\\\approx 53236.54\\\\)",
      "\\\\(\\\\text{Var}(X) \\\\approx 52185.34\\\\)",
      "\\\\(\\\\text{Var}(X) \\\\approx 55024.12\\\\)"
    ],
    "a": 1,
    "solutionSteps": [
      {
        "explanation": "We begin by writing the computational formula for variance.",
        "workingOut": "\\\\text{Var}(X) = E(X^2) - [E(X)]^2"
      },
      {
        "explanation": "Square each prize value and multiply by its probability to calculate the expectation of X squared.",
        "workingOut": "E(X^2) = 25^2(0.2674) + 100^2(0.03) + 500^2(0.002) + 5000^2(0.0005) + 20000^2(0.0001)"
      },
      {
        "explanation": "Evaluate each squared product term and sum them up.",
        "workingOut": "= 167.125 + 300 + 500 + 12500 + 40000 = 53467.125"
      },
      {
        "explanation": "Finally, subtract the squared expectation mean from the expectation of X squared.",
        "workingOut": "\\\\text{Var}(X) = 53467.125 - (15.185)^2 \\\\approx 53236.54"
      }
    ]
  },
  {
    "id": "cths2020-mc4",
    "type": "multiple_choice",
    "question": "The variance of a discrete random variable \\\\(X\\\\) is \\\\(\\\\text{Var}(X) = 2.6\\\\). Calculate \\\\(\\\\text{Var}(3X - 1)\\\\).",
    "opts": [
      "\\\\(6.8\\\\)",
      "\\\\(7.8\\\\)",
      "\\\\(23.4\\\\)",
      "\\\\(22.4\\\\)"
    ],
    "a": 2,
    "solutionSteps": [
      {
        "explanation": "Recall the variance rule for a linear transformation: \\\\(\\\\text{Var}(aX + b) = a^2 \\\\cdot \\\\text{Var}(X)\\\\). The constant shift \\\\(b\\\\) does not affect the spread.",
        "workingOut": "\\\\text{Var}(aX + b) = a^2 \\\\cdot \\\\text{Var}(X)"
      },
      {
        "explanation": "Identify the values \\\\(a = 3\\\\) and \\\\(b = -1\\\\) in the linear expression \\\\(3X - 1\\\\).",
        "workingOut": "a = 3, \\\\; b = -1"
      },
      {
        "explanation": "Square the coefficient \\\\(a\\\\) to find the variance multiplication factor.",
        "workingOut": "a^2 = 3^2 = 9"
      },
      {
        "explanation": "Multiply the squared factor by the given variance of X.",
        "workingOut": "\\\\text{Var}(3X-1) = 9 \\\\times 2.6 = 23.4"
      }
    ]
  },
  {
    "id": "cths2020-q33",
    "type": "multiple_choice",
    "question": "A six-sided die is biased as shown in the probability distribution below.\\\\n\\\\n| \\\\(x\\\\) | 1 | 2 | 3 | 4 | 5 | 6 |\\\\n|---|---|---|---|---|---|---|\\\\n| \\\\(P(X=x)\\\\) | 0.1 | 0.2 | 0.1 | \\\\(a\\\\) | 0.2 | 0.1 |\\\\n\\\\nFind \\\\(a\\\\), \\\\(P(X \\\\leq 4)\\\\), \\\\(P(X \\\\leq 4 \\\\mid X > 1)\\\\), and expected value \\\\(E(X)\\\\).",
    "opts": [
      "\\\\(a = 0.3\\\\), \\\\(P(X \\\\leq 4) = 0.7\\\\), \\\\(P(X \\\\leq 4 \\\\mid X > 1) = \\\\dfrac{2}{3}\\\\), \\\\(E(X) = 3.4\\\\)",
      "\\\\(a = 0.3\\\\), \\\\(P(X \\\\leq 4) = 0.6\\\\), \\\\(P(X \\\\leq 4 \\\\mid X > 1) = \\\\dfrac{2}{3}\\\\), \\\\(E(X) = 3.5\\\\)",
      "\\\\(a = 0.25\\\\), \\\\(P(X \\\\leq 4) = 0.75\\\\), \\\\(P(X \\\\leq 4 \\\\mid X > 1) = \\\\dfrac{1}{2}\\\\), \\\\(E(X) = 3.2\\\\)",
      "\\\\(a = 0.3\\\\), \\\\(P(X \\\\leq 4) = 0.7\\\\), \\\\(P(X \\\\leq 4 \\\\mid X > 1) = \\\\dfrac{1}{2}\\\\), \\\\(E(X) = 3.4\\\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by finding the value of a. Since all probabilities in the distribution must sum to exactly one, we set up an addition equation.",
        "workingOut": "0.1 + 0.2 + 0.1 + a + 0.2 + 0.1 = 1 \\\\implies 0.7 + a = 1 \\\\implies a = 0.3"
      },
      {
        "explanation": "Next, we calculate the cumulative probability of X being less than or equal to four by summing the individual probabilities up to four.",
        "workingOut": "P(X \\\\leq 4) = P(1) + P(2) + P(3) + P(4) = 0.1 + 0.2 + 0.1 + 0.3 = 0.7"
      },
      {
        "explanation": "We calculate the conditional probability of X being less than or equal to four given X is greater than one.",
        "workingOut": "P(X \\\\leq 4 \\\\mid X > 1) = \\\\dfrac{P(1 < X \\\\leq 4)}{P(X > 1)} = \\\\dfrac{0.2 + 0.1 + 0.3}{1 - 0.1} = \\\\dfrac{0.6}{0.9} = \\\\dfrac{2}{3}"
      },
      {
        "explanation": "Finally, we compute the expected value E(X) by summing the products of each outcome and its corresponding probability.",
        "workingOut": "E(X) = 1(0.1) + 2(0.2) + 3(0.1) + 4(0.3) + 5(0.2) + 6(0.1) = 0.1 + 0.4 + 0.3 + 1.2 + 1.0 + 0.6 = 3.4"
      }
    ]
  },
  {
    "id": "cths2020s-mc4",
    "type": "multiple_choice",
    "question": "The variance of a discrete random variable \\\\(X\\\\) is \\\\(\\\\text{Var}(X) = 3.5\\\\). Calculate \\\\(\\\\text{Var}(4X - 2)\\\\).",
    "opts": [
      "\\\\(12.0\\\\)",
      "\\\\(14.0\\\\)",
      "\\\\(56.0\\\\)",
      "\\\\(54.0\\\\)"
    ],
    "a": 2,
    "solutionSteps": [
      {
        "explanation": "Recall the variance rule for a linear transformation: \\\\(\\\\text{Var}(aX + b) = a^2 \\\\cdot \\\\text{Var}(X)\\\\). The constant shift \\\\(b\\\\) does not affect the spread.",
        "workingOut": "\\\\text{Var}(aX + b) = a^2 \\\\cdot \\\\text{Var}(X)"
      },
      {
        "explanation": "Identify the values \\\\(a = 4\\\\) and \\\\(b = -2\\\\) in the linear expression \\\\(4X - 2\\\\).",
        "workingOut": "a = 4, \\\\; b = -2"
      },
      {
        "explanation": "Square the coefficient \\\\(a\\\\) to find the variance multiplication factor.",
        "workingOut": "a^2 = 4^2 = 16"
      },
      {
        "explanation": "Multiply the squared factor by the given variance of X.",
        "workingOut": "\\\\text{Var}(4X-2) = 16 \\\\times 3.5 = 56"
      }
    ]
  },
  {
    "id": "cths2020s-q33",
    "type": "multiple_choice",
    "question": "A spinner is biased as shown in the probability distribution below.\\\\n\\\\n| \\\\(x\\\\) | 1 | 2 | 3 | 4 | 5 | 6 |\\\\n|---|---|---|---|---|---|---|\\\\n| \\\\(P(X=x)\\\\) | 0.2 | 0.15 | 0.08 | \\\\(b\\\\) | 0.12 | 0.10 |\\\\n\\\\nFind \\\\(b\\\\), \\\\(P(1 < X \\\\leq 4)\\\\), \\\\(P(X \\\\leq 4 \\\\mid X > 1)\\\\), and expected value \\\\(E(X)\\\\).",
    "opts": [
      "\\\\(b = 0.35\\\\), \\\\(P(1 < X \\\\leq 4) = 0.58\\\\), \\\\(P(X \\\\leq 4 \\\\mid X > 1) = \\\\dfrac{29}{40}\\\\), \\\\(E(X) = 3.34\\\\)",
      "\\\\(b = 0.35\\\\), \\\\(P(1 < X \\\\leq 4) = 0.58\\\\), \\\\(P(X \\\\leq 4 \\\\mid X > 1) = \\\\dfrac{29}{40}\\\\), \\\\(E(X) = 3.50\\\\)",
      "\\\\(b = 0.30\\\\), \\\\(P(1 < X \\\\leq 4) = 0.53\\\\), \\\\(P(X \\\\leq 4 \\\\mid X > 1) = \\\\dfrac{27}{40}\\\\), \\\\(E(X) = 3.34\\\\)",
      "\\\\(b = 0.35\\\\), \\\\(P(1 < X \\\\leq 4) = 0.50\\\\), \\\\(P(X \\\\leq 4 \\\\mid X > 1) = \\\\dfrac{29}{40}\\\\), \\\\(E(X) = 3.34\\\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by finding the value of b. Since all probabilities in the distribution must sum to exactly one, we set up an addition equation.",
        "workingOut": "0.2 + 0.15 + 0.08 + b + 0.12 + 0.10 = 1 \\\\implies 0.65 + b = 1 \\\\implies b = 0.35"
      },
      {
        "explanation": "Next, we calculate the probability of X being strictly between one and four (inclusive of four) by summing probabilities for two, three, and four.",
        "workingOut": "P(1 < X \\\\leq 4) = P(2) + P(3) + P(4) = 0.15 + 0.08 + 0.35 = 0.58"
      },
      {
        "explanation": "We calculate the conditional probability of X being less than or equal to four given X is greater than one.",
        "workingOut": "P(X \\\\leq 4 \\\\mid X > 1) = \\\\dfrac{P(1 < X \\\\leq 4)}{P(X > 1)} = \\\\dfrac{0.58}{1 - 0.20} = \\\\dfrac{0.58}{0.80} = \\\\dfrac{29}{40}"
      },
      {
        "explanation": "Finally, we compute the expected value E(X) by summing the products of each outcome and its corresponding probability.",
        "workingOut": "E(X) = 1(0.2) + 2(0.15) + 3(0.08) + 4(0.35) + 5(0.12) + 6(0.10) = 0.2 + 0.30 + 0.24 + 1.40 + 0.60 + 0.60 = 3.34"
      }
    ]
  }
];

async function main() {
  console.log('Starting Firestore update for Year12 Advanced Ch10C Q11-Q21...');
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
