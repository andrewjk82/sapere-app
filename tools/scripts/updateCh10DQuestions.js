import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const questionsToUpdate = [
  {
    "id": "baulko2020-mc5",
    "type": "multiple_choice",
    "question": "Results for a test are given as \\\\(z\\\\)-scores. Angela gained a \\\\(z\\\\)-score of 3. The test has a mean of 55 and standard deviation of 6. What was Angela's actual mark?",
    "opts": [
      "58",
      "73",
      "64",
      "67"
    ],
    "a": 1,
    "solutionSteps": [
      {
        "explanation": "We begin by writing down the z-score transformation formula, which relates the raw mark to the mean, standard deviation, and standard z-score.",
        "workingOut": "x = \\\\mu + z\\\\sigma"
      },
      {
        "explanation": "Next, we substitute Angela's specific values: a mean of fifty-five, standard deviation of six, and z-score of three.",
        "workingOut": "x = 55 + 3 \\\\times 6"
      },
      {
        "explanation": "Finally, we perform the multiplication and addition to find the actual mark.",
        "workingOut": "x = 55 + 18 = 73"
      }
    ]
  },
  {
    "id": "baulko2020-mc5v",
    "type": "multiple_choice",
    "question": "A student scored a \\\\(z\\\\)-score of \\\\(-2\\\\) in a test with mean 70 and standard deviation 8. What was their actual mark?",
    "opts": [
      "54",
      "62",
      "86",
      "72"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by setting up the raw score equation using the mean, z-score, and standard deviation.",
        "workingOut": "x = \\\\mu + z\\\\sigma"
      },
      {
        "explanation": "Next, we substitute the given values into the formula, noting that the negative z-score indicates a score below the mean.",
        "workingOut": "x = 70 + (-2) \\\\times 8"
      },
      {
        "explanation": "Finally, we evaluate the arithmetic expression to determine the student's actual mark.",
        "workingOut": "x = 70 - 16 = 54"
      }
    ]
  },
  {
    "id": "car2020-mc5",
    "type": "multiple_choice",
    "question": "If the \\\\(z\\\\)-scores on an examination are normally distributed and \\\\(P(z \\\\leq N) = 0.6\\\\) for some number \\\\(N\\\\), what is the value of \\\\(P(-N \\\\leq z \\\\leq N)\\\\)?",
    "opts": [
      "0.1",
      "0.3",
      "0.2",
      "0.4"
    ],
    "a": 2,
    "solutionSteps": [
      {
        "explanation": "We begin by identifying the position of N relative to the mean. Since the cumulative probability up to N is greater than zero point five, N must be a positive value above the mean.",
        "workingOut": "N > 0"
      },
      {
        "explanation": "Next, we use the symmetry of the standard normal distribution about zero. The probability of scoring below negative N is equal to the probability of scoring above positive N.",
        "workingOut": "P(z \\\\leq -N) = 1 - P(z \\\\leq N)"
      },
      {
        "explanation": "We calculate the exact numerical probability for the lower tail using the complement of the given value.",
        "workingOut": "P(z \\\\leq -N) = 1 - 0.6 = 0.4"
      },
      {
        "explanation": "We express the probability between negative N and positive N as the difference between their cumulative boundaries.",
        "workingOut": "P(-N \\\\leq z \\\\leq N) = P(z \\\\leq N) - P(z \\\\leq -N)"
      },
      {
        "explanation": "Finally, we subtract the lower tail probability from the upper boundary cumulative probability to find the target value.",
        "workingOut": "= 0.6 - 0.4 = 0.2"
      }
    ]
  },
  {
    "id": "car2020s-mc5",
    "type": "multiple_choice",
    "question": "If the \\\\(z\\\\)-scores on an examination are normally distributed and \\\\(P(z \\\\leq M) = 0.7\\\\) for some number \\\\(M\\\\), what is the value of \\\\(P(-M \\\\leq z \\\\leq M)\\\\)?",
    "opts": [
      "0.1",
      "0.2",
      "0.3",
      "0.4"
    ],
    "a": 3,
    "solutionSteps": [
      {
        "explanation": "We begin by identifying the position of M relative to the mean. Since the cumulative probability up to M is greater than zero point five, M must be positive.",
        "workingOut": "M > 0"
      },
      {
        "explanation": "Next, we use the symmetry of the standard normal distribution. The probability of scoring below negative M is equal to the probability of scoring above positive M.",
        "workingOut": "P(z \\\\leq -M) = 1 - P(z \\\\leq M)"
      },
      {
        "explanation": "We compute the probability of the lower tail boundary by taking the complement of the given value.",
        "workingOut": "P(z \\\\leq -M) = 1 - 0.7 = 0.3"
      },
      {
        "explanation": "We write the interval probability expression as the difference between the upper and lower cumulative probabilities.",
        "workingOut": "P(-M \\\\leq z \\\\leq M) = P(z \\\\leq M) - P(z \\\\leq -M)"
      },
      {
        "explanation": "Finally, we subtract the computed values to obtain the probability of the interval.",
        "workingOut": "= 0.7 - 0.3 = 0.4"
      }
    ]
  }
];

async function main() {
  console.log('Starting Firestore update for Year12 Advanced Ch10D Q1-Q4...');
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
