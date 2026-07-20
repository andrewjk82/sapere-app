import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

function shuffleOptions(correctAnswer, distractors) {
  const options = [correctAnswer, ...distractors];
  for (let i = options.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [options[i], options[j]] = [options[j], options[i]];
  }
  const correctIndex = options.indexOf(correctAnswer);
  return { options, correctIndex };
}

const batchQuestions = {
  "y10-5a-q3m": {
    question: "Solve the quadratic equation by factorising: \\(y^2 - 12y + 35 = 0\\).",
    correct: "y = 5 \\text{ or } y = 7",
    distractors: [
      "y = -5 \\text{ or } y = -7",
      "y = -5 \\text{ or } y = 7",
      "y = 5 \\text{ or } y = -7"
    ],
    solutionSteps: [
      {
        explanation: "Identify the quadratic trinomial equation. We aim to find the real roots of y. We plan to find two negative integers that multiply to 35 and sum to -12.",
        workingOut: "y^2 - 12y + 35 = 0",
        graphData: null
      },
      {
        explanation: "Find two negative factors of 35 that add up to -12. The numbers are -5 and -7.",
        workingOut: "(-5) \\times (-7) = 35 \\quad \\text{and} \\quad (-5) + (-7) = -12",
        graphData: null
      },
      {
        explanation: "Factorise the quadratic expression using these numbers.",
        workingOut: "(y - 5)(y - 7) = 0",
        graphData: null
      },
      {
        explanation: "Apply the Null Factor Law.",
        workingOut: "y - 5 = 0 \\quad \\text{or} \\quad y - 7 = 0",
        graphData: null
      },
      {
        explanation: "Solve both linear equations for y by transposing the constants.",
        workingOut: "y = 5 \\quad \\text{or} \\quad y = 7",
        graphData: null
      }
    ]
  },
  "y10-5a-q3n": {
    question: "Solve the quadratic equation by factorising: \\(k^2 - 5k - 14 = 0\\).",
    correct: "k = 7 \\text{ or } k = -2",
    distractors: [
      "k = -7 \\text{ or } k = 2",
      "k = 7 \\text{ or } k = 2",
      "k = -7 \\text{ or } k = -2"
    ],
    solutionSteps: [
      {
        explanation: "Observe the quadratic trinomial equation. We must find the roots of k. We plan to find two numbers that multiply to -14 and sum to -5.",
        workingOut: "k^2 - 5k - 14 = 0",
        graphData: null
      },
      {
        explanation: "Determine the factors of -14 that sum to -5. The numbers are -7 and 2.",
        workingOut: "(-7) \\times 2 = -14 \\quad \\text{and} \\quad (-7) + 2 = -5",
        graphData: null
      },
      {
        explanation: "Factorise the trinomial.",
        workingOut: "(k - 7)(k + 2) = 0",
        graphData: null
      },
      {
        explanation: "Apply the Null Factor Law.",
        workingOut: "k - 7 = 0 \\quad \\text{or} \\quad k + 2 = 0",
        graphData: null
      },
      {
        explanation: "Solve both simple equations.",
        workingOut: "k = 7 \\quad \\text{or} \\quad k = -2",
        graphData: null
      }
    ]
  },
  "y10-5a-q3o": {
    question: "Solve the quadratic equation by factorising: \\(p^2 - 24p - 25 = 0\\).",
    correct: "p = 25 \\text{ or } p = -1",
    distractors: [
      "p = -25 \\text{ or } p = 1",
      "p = 25 \\text{ or } p = 1",
      "p = -25 \\text{ or } p = -1"
    ],
    solutionSteps: [
      {
        explanation: "Examine the quadratic trinomial. We aim to find the roots of p. We plan to identify factors of -25 that sum to -24.",
        workingOut: "p^2 - 24p - 25 = 0",
        graphData: null
      },
      {
        explanation: "Find two factors of -25 that add up to -24. The integers are -25 and 1.",
        workingOut: "(-25) \\times 1 = -25 \\quad \\text{and} \\quad (-25) + 1 = -24",
        graphData: null
      },
      {
        explanation: "Factorise the expression.",
        workingOut: "(p - 25)(p + 1) = 0",
        graphData: null
      },
      {
        explanation: "Apply the Null Factor Law.",
        workingOut: "p - 25 = 0 \\quad \\text{or} \\quad p + 1 = 0",
        graphData: null
      },
      {
        explanation: "Solve both equations.",
        workingOut: "p = 25 \\quad \\text{or} \\quad p = -1",
        graphData: null
      }
    ]
  },
  "y10-5a-q4a": {
    question: "Solve the quadratic equation: \\(x^2 = 6x\\).",
    correct: "x = 0 \\text{ or } x = 6",
    distractors: [
      "x = 6 \\text{ only}",
      "x = 0 \\text{ or } x = -6",
      "x = -6 \\text{ only}"
    ],
    solutionSteps: [
      {
        explanation: "Identify the quadratic relation with terms on opposite sides. We plan to rearrange it so one side is zero and then factorise.",
        workingOut: "x^2 = 6x",
        graphData: null
      },
      {
        explanation: "Subtract 6x from both sides of the equation.",
        workingOut: "x^2 - 6x = 0",
        graphData: null
      },
      {
        explanation: "Factorise the common variable x.",
        workingOut: "x(x - 6) = 0",
        graphData: null
      },
      {
        explanation: "Apply the Null Factor Law to separate the equations.",
        workingOut: "x = 0 \\quad \\text{or} \\quad x - 6 = 0",
        graphData: null
      },
      {
        explanation: "Solve the second linear relation for x.",
        workingOut: "x = 6",
        graphData: null
      }
    ]
  },
  "y10-5a-q4b": {
    question: "Solve the quadratic equation: \\(y^2 - 9y = -14\\).",
    correct: "y = 2 \\text{ or } y = 7",
    distractors: [
      "y = -2 \\text{ or } y = -7",
      "y = -2 \\text{ or } y = 7",
      "y = 2 \\text{ or } y = -7"
    ],
    solutionSteps: [
      {
        explanation: "Observe the quadratic equation where the constant is on the right. We plan to transpose -14 to the left to form a standard quadratic equation set to zero.",
        workingOut: "y^2 - 9y = -14",
        graphData: null
      },
      {
        explanation: "Add 14 to both sides of the equation.",
        workingOut: "y^2 - 9y + 14 = 0",
        graphData: null
      },
      {
        explanation: "Factorise the trinomial by finding two negative factors of 14 that sum to -9. The numbers are -2 and -7.",
        workingOut: "(y - 2)(y - 7) = 0",
        graphData: null
      },
      {
        explanation: "Apply the Null Factor Law.",
        workingOut: "y - 2 = 0 \\quad \\text{or} \\quad y - 7 = 0",
        graphData: null
      },
      {
        explanation: "Solve both linear binomial relations.",
        workingOut: "y = 2 \\quad \\text{or} \\quad y = 7",
        graphData: null
      }
    ]
  },
  "y10-5a-q4c": {
    question: "Solve the quadratic equation by factorising: \\(2m^2 - m - 3 = 0\\).",
    correct: "m = -1 \\text{ or } m = \\dfrac{3}{2}",
    distractors: [
      "m = 1 \\text{ or } m = -\\dfrac{3}{2}",
      "m = -1 \\text{ or } m = -\\dfrac{3}{2}",
      "m = 1 \\text{ or } m = \\dfrac{3}{2}"
    ],
    solutionSteps: [
      {
        explanation: "Examine the non-monic quadratic trinomial. We aim to solve for m. We plan to factorise the expression by splitting the middle term.",
        workingOut: "2m^2 - m - 3 = 0",
        graphData: null
      },
      {
        explanation: "Find two numbers that multiply to a*c = -6 and sum to b = -1. The numbers are -3 and 2. Rewrite the middle term.",
        workingOut: "2m^2 + 2m - 3m - 3 = 0",
        graphData: null
      },
      {
        explanation: "Factorise by grouping the terms in pairs.",
        workingOut: "2m(m + 1) - 3(m + 1) = 0 \\;\\Rightarrow\\; (2m - 3)(m + 1) = 0",
        graphData: null
      },
      {
        explanation: "Apply the Null Factor Law.",
        workingOut: "2m - 3 = 0 \\quad \\text{or} \\quad m + 1 = 0",
        graphData: null
      },
      {
        explanation: "Solve both linear equations for m.",
        workingOut: "m = \\dfrac{3}{2} \\quad \\text{or} \\quad m = -1",
        graphData: null
      }
    ]
  },
  "y10-5a-q4d": {
    question: "Solve the quadratic equation: \\(k^2 + 6k = -9\\).",
    correct: "k = -3 \\text{ only}",
    distractors: [
      "k = 3 \\text{ only}",
      "k = 3 \\text{ or } k = -3",
      "k = 0 \\text{ or } k = -9"
    ],
    solutionSteps: [
      {
        explanation: "Observe the equation with the constant term on the right. We plan to transpose -9 to the left side.",
        workingOut: "k^2 + 6k = -9",
        graphData: null
      },
      {
        explanation: "Add 9 to both sides to form a perfect square trinomial set to zero.",
        workingOut: "k^2 + 6k + 9 = 0",
        graphData: null
      },
      {
        explanation: "Factorise the perfect square trinomial.",
        workingOut: "(k + 3)^2 = 0",
        graphData: null
      },
      {
        explanation: "Apply the Null Factor Law.",
        workingOut: "k + 3 = 0",
        graphData: null
      },
      {
        explanation: "Solve for k. Note that this quadratic equation has a single repeated real root.",
        workingOut: "k = -3",
        graphData: null
      }
    ]
  },
  "y10-5a-q4f": {
    question: "Solve the quadratic equation: \\(p^2 = 64\\).",
    correct: "p = 8 \\text{ or } p = -8",
    distractors: [
      "p = 8 \\text{ only}",
      "p = -8 \\text{ only}",
      "p = 4 \\text{ or } p = -4"
    ],
    solutionSteps: [
      {
        explanation: "Observe the quadratic relation containing a squared variable and a positive constant. We plan to take the square root of both sides, remembering to include both positive and negative roots.",
        workingOut: "p^2 = 64",
        graphData: null
      },
      {
        explanation: "Take the square root of both sides. This yields two possible values: a positive root and a negative root.",
        workingOut: "p = \\pm\\sqrt{64}",
        graphData: null
      },
      {
        explanation: "Evaluate the square root of 64.",
        workingOut: "p = 8 \\quad \\text{or} \\quad p = -8",
        graphData: null
      }
    ]
  },
  "y10-5a-q4g": {
    question: "Solve the quadratic equation: \\(y^2 = -4y\\).",
    correct: "y = 0 \\text{ or } y = -4",
    distractors: [
      "y = 0 \\text{ or } y = 4",
      "y = -4 \\text{ only}",
      "y = 4 \\text{ only}"
    ],
    solutionSteps: [
      {
        explanation: "Given the equation where terms are on separate sides. We plan to transpose all terms to the left side and factorise.",
        workingOut: "y^2 = -4y",
        graphData: null
      },
      {
        explanation: "Add 4y to both sides of the equation.",
        workingOut: "y^2 + 4y = 0",
        graphData: null
      },
      {
        explanation: "Factorise the binomial by extracting the common factor y.",
        workingOut: "y(y + 4) = 0",
        graphData: null
      },
      {
        explanation: "Apply the Null Factor Law.",
        workingOut: "y = 0 \\quad \\text{or} \\quad y + 4 = 0",
        graphData: null
      },
      {
        explanation: "Solve the second linear equation.",
        workingOut: "y = -4",
        graphData: null
      }
    ]
  },
  "y10-5a-q4i": {
    question: "Solve, if possible: \\(x^2 + 16 = 0\\).",
    correct: "\\text{No real solutions}",
    distractors: [
      "x = 4 \\text{ or } x = -4",
      "x = 4 \\text{ only}",
      "x = -4 \\text{ only}"
    ],
    solutionSteps: [
      {
        explanation: "Examine the quadratic equation. We plan to isolate the squared variable term to analyze the existence of real roots.",
        workingOut: "x^2 + 16 = 0",
        graphData: null
      },
      {
        explanation: "Subtract 16 from both sides of the equation.",
        workingOut: "x^2 = -16",
        graphData: null
      },
      {
        explanation: "Take the square root of both sides. A common error is evaluating the square root of a negative number as a negative real number (e.g., -4). Since the square of any real number is always non-negative, a real number cannot square to -16.",
        workingOut: "x = \\pm\\sqrt{-16}",
        graphData: null
      },
      {
        explanation: "Conclude that no real number satisfies this relation.",
        workingOut: "\\text{No real solutions}",
        graphData: null
      }
    ]
  }
};

(async () => {
  try {
    console.log('[Batch 4 Migration] Upgrading next 10 questions of Year 10 Chapter 5A...');
    for (const [id, target] of Object.entries(batchQuestions)) {
      const { options, correctIndex } = shuffleOptions(target.correct, target.distractors);
      const ref = db.collection('questions').doc(id);
      
      const wrappedSteps = target.solutionSteps.map(step => ({
        explanation: step.explanation,
        workingOut: String.raw`\\(${step.workingOut}\\)`,
        graphData: null
      }));

      const wrappedOpts = options.map(opt => String.raw`\\(${opt}\\)`);

      await ref.set({
        year: "Year 10",
        course: "Mathematics",
        chapterId: "y10-5",
        chapterTitle: "Chapter 5: Quadratic equations and graphs",
        topicId: "y10-5a",
        topicCode: "5A",
        topicTitle: "Solving quadratic equations",
        isManual: true,
        difficulty: "easy",
        timeLimit: 120,
        type: "multiple_choice",
        question: target.question,
        opts: wrappedOpts,
        options: wrappedOpts,
        a: correctIndex,
        answer: correctIndex,
        solutionSteps: wrappedSteps,
        isNew: true,
        createdAt: new Date(),
        updatedAt: new Date()
      });
      console.log(`  [MIGRATED] ${id} -> Correct Index: ${correctIndex}`);
    }
    console.log('\nBatch 4 migration successfully completed.');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
