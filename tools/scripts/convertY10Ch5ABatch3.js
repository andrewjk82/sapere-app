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
  "y10-5a-q3c": {
    question: "Solve the quadratic equation by factorising: \\(p^2 + 12p + 35 = 0\\).",
    correct: "p = -5 \\text{ or } p = -7",
    distractors: [
      "p = 5 \\text{ or } p = 7",
      "p = -5 \\text{ or } p = 7",
      "p = 5 \\text{ or } p = -7"
    ],
    solutionSteps: [
      {
        explanation: "Identify the quadratic trinomial equation where we need to find the roots of p. We plan to find two factors of 35 that add up to the coefficient of the linear term, 12.",
        workingOut: "p^2 + 12p + 35 = 0",
        graphData: null
      },
      {
        explanation: "Find two numbers that multiply to 35 and add up to 12. The required integers are 5 and 7.",
        workingOut: "5 \\times 7 = 35 \\quad \\text{and} \\quad 5 + 7 = 12",
        graphData: null
      },
      {
        explanation: "Factorise the quadratic expression using the discovered factor numbers.",
        workingOut: "(p + 5)(p + 7) = 0",
        graphData: null
      },
      {
        explanation: "Apply the Null Factor Law. Set both binomial factors to zero independently.",
        workingOut: "p + 5 = 0 \\quad \\text{or} \\quad p + 7 = 0",
        graphData: null
      },
      {
        explanation: "Solve the separate linear equations by transposing the positive values, inverting their signs to negative.",
        workingOut: "p = -5 \\quad \\text{or} \\quad p = -7",
        graphData: null
      }
    ]
  },
  "y10-5a-q3d": {
    question: "Solve the quadratic equation by factorising: \\(y^2 + 10y + 9 = 0\\).",
    correct: "y = -1 \\text{ or } y = -9",
    distractors: [
      "y = 1 \\text{ or } y = 9",
      "y = -1 \\text{ or } y = 9",
      "y = 1 \\text{ or } y = -9"
    ],
    solutionSteps: [
      {
        explanation: "Observe the quadratic trinomial. We need to find the roots of y. We plan to find two numbers that multiply to 9 and add up to 10.",
        workingOut: "y^2 + 10y + 9 = 0",
        graphData: null
      },
      {
        explanation: "Determine two integers that multiply to 9 and sum to 10. The numbers are 1 and 9.",
        workingOut: "1 \\times 9 = 9 \\quad \\text{and} \\quad 1 + 9 = 10",
        graphData: null
      },
      {
        explanation: "Factorise the trinomial equation using the factors.",
        workingOut: "(y + 1)(y + 9) = 0",
        graphData: null
      },
      {
        explanation: "Utilize the Null Factor Law.",
        workingOut: "y + 1 = 0 \\quad \\text{or} \\quad y + 9 = 0",
        graphData: null
      },
      {
        explanation: "Solve for y by subtracting the constants from both sides.",
        workingOut: "y = -1 \\quad \\text{or} \\quad y = -9",
        graphData: null
      }
    ]
  },
  "y10-5a-q3e": {
    question: "Solve the quadratic equation by factorising: \\(n^2 - 6n + 8 = 0\\).",
    correct: "n = 2 \\text{ or } n = 4",
    distractors: [
      "n = -2 \\text{ or } n = -4",
      "n = -2 \\text{ or } n = 4",
      "n = 2 \\text{ or } n = -4"
    ],
    solutionSteps: [
      {
        explanation: "Examine the trinomial with a negative linear term and a positive constant. We plan to find two negative integers that multiply to positive 8 and sum to negative 6.",
        workingOut: "n^2 - 6n + 8 = 0",
        graphData: null
      },
      {
        explanation: "Find two factors of 8 that sum to -6. Both must be negative. The numbers are -2 and -4.",
        workingOut: "(-2) \\times (-4) = 8 \\quad \\text{and} \\quad (-2) + (-4) = -6",
        graphData: null
      },
      {
        explanation: "Factorise the quadratic expression with the negative values.",
        workingOut: "(n - 2)(n - 4) = 0",
        graphData: null
      },
      {
        explanation: "Apply the Null Factor Law.",
        workingOut: "n - 2 = 0 \\quad \\text{or} \\quad n - 4 = 0",
        graphData: null
      },
      {
        explanation: "Solve for n by adding 2 and 4 respectively to the right-hand side.",
        workingOut: "n = 2 \\quad \\text{or} \\quad n = 4",
        graphData: null
      }
    ]
  },
  "y10-5a-q3f": {
    question: "Solve the quadratic equation by factorising: \\(x^2 + 2x - 15 = 0\\).",
    correct: "x = 3 \\text{ or } x = -5",
    distractors: [
      "x = -3 \\text{ or } x = 5",
      "x = 3 \\text{ or } x = 5",
      "x = -3 \\text{ or } x = -15"
    ],
    solutionSteps: [
      {
        explanation: "Examine the trinomial with a positive linear term and a negative constant. We plan to find two integers with opposite signs that multiply to -15 and sum to 2.",
        workingOut: "x^2 + 2x - 15 = 0",
        graphData: null
      },
      {
        explanation: "Determine the factors of -15 that sum to 2. The numbers are 5 and -3.",
        workingOut: "5 \\times (-3) = -15 \\quad \\text{and} \\quad 5 + (-3) = 2",
        graphData: null
      },
      {
        explanation: "Factorise the expression.",
        workingOut: "(x - 3)(x + 5) = 0",
        graphData: null
      },
      {
        explanation: "Apply the Null Factor Law.",
        workingOut: "x - 3 = 0 \\quad \\text{or} \\quad x + 5 = 0",
        graphData: null
      },
      {
        explanation: "Solve both linear equations, taking care to invert the signs correctly.",
        workingOut: "x = 3 \\quad \\text{or} \\quad x = -5",
        graphData: null
      }
    ]
  },
  "y10-5a-q3g": {
    question: "Solve the quadratic equation by factorising: \\(m^2 + m - 12 = 0\\).",
    correct: "m = 3 \\text{ or } m = -4",
    distractors: [
      "m = -3 \\text{ or } m = 4",
      "m = 3 \\text{ or } m = 4",
      "m = -3 \\text{ or } m = -4"
    ],
    solutionSteps: [
      {
        explanation: "Note the quadratic trinomial equation. We aim to find the roots of m. We plan to identify factors of -12 that add up to positive 1.",
        workingOut: "m^2 + m - 12 = 0",
        graphData: null
      },
      {
        explanation: "Find two numbers that multiply to -12 and add up to 1. The integers are 4 and -3.",
        workingOut: "4 \\times (-3) = -12 \\quad \\text{and} \\quad 4 + (-3) = 1",
        graphData: null
      },
      {
        explanation: "Factorise the trinomial using these values.",
        workingOut: "(m - 3)(m + 4) = 0",
        graphData: null
      },
      {
        explanation: "Apply the Null Factor Law.",
        workingOut: "m - 3 = 0 \\quad \\text{or} \\quad m + 4 = 0",
        graphData: null
      },
      {
        explanation: "Solve both simple equations by transposing constants.",
        workingOut: "m = 3 \\quad \\text{or} \\quad m = -4",
        graphData: null
      }
    ]
  },
  "y10-5a-q3h": {
    question: "Solve the quadratic equation by factorising: \\(y^2 + y - 20 = 0\\).",
    correct: "y = 4 \\text{ or } y = -5",
    distractors: [
      "y = -4 \\text{ or } y = 5",
      "y = 4 \\text{ or } y = 5",
      "y = -4 \\text{ or } y = -5"
    ],
    solutionSteps: [
      {
        explanation: "Identify the quadratic trinomial with linear coefficient 1 and constant -20. We plan to find two integers that multiply to -20 and add up to 1.",
        workingOut: "y^2 + y - 20 = 0",
        graphData: null
      },
      {
        explanation: "Determine the factors of -20 that sum to 1. The numbers are 5 and -4.",
        workingOut: "5 \\times (-4) = -20 \\quad \\text{and} \\quad 5 + (-4) = 1",
        graphData: null
      },
      {
        explanation: "Factorise the trinomial expression.",
        workingOut: "(y - 4)(y + 5) = 0",
        graphData: null
      },
      {
        explanation: "Apply the Null Factor Law.",
        workingOut: "y - 4 = 0 \\quad \\text{or} \\quad y + 5 = 0",
        graphData: null
      },
      {
        explanation: "Solve for y by isolating the variable in both equations.",
        workingOut: "y = 4 \\quad \\text{or} \\quad y = -5",
        graphData: null
      }
    ]
  },
  "y10-5a-q3i": {
    question: "Solve the quadratic equation by factorising: \\(k^2 + 5k - 24 = 0\\).",
    correct: "k = 3 \\text{ or } k = -8",
    distractors: [
      "k = -3 \\text{ or } k = 8",
      "k = 3 \\text{ or } k = 8",
      "k = -3 \\text{ or } k = -8"
    ],
    solutionSteps: [
      {
        explanation: "Examine the quadratic equation. We must solve for k. We plan to find factors of -24 that add up to 5.",
        workingOut: "k^2 + 5k - 24 = 0",
        graphData: null
      },
      {
        explanation: "Identify two integers that multiply to -24 and sum to 5. The values are 8 and -3.",
        workingOut: "8 \\times (-3) = -24 \\quad \\text{and} \\quad 8 + (-3) = 5",
        graphData: null
      },
      {
        explanation: "Factorise the trinomial equation.",
        workingOut: "(k - 3)(k + 8) = 0",
        graphData: null
      },
      {
        explanation: "Invoke the Null Factor Law.",
        workingOut: "k - 3 = 0 \\quad \\text{or} \\quad k + 8 = 0",
        graphData: null
      },
      {
        explanation: "Solve both linear binomial relations.",
        workingOut: "k = 3 \\quad \\text{or} \\quad k = -8",
        graphData: null
      }
    ]
  },
  "y10-5a-q3j": {
    question: "Solve the quadratic equation by factorising: \\(p^2 - 8p + 12 = 0\\).",
    correct: "p = 2 \\text{ or } p = 6",
    distractors: [
      "p = -2 \\text{ or } p = -6",
      "p = -2 \\text{ or } p = 6",
      "p = 2 \\text{ or } p = -6"
    ],
    solutionSteps: [
      {
        explanation: "Examine the trinomial with a negative linear term and a positive constant. We need to solve for variable p. We plan to find two negative factors of 12 that sum to -8.",
        workingOut: "p^2 - 8p + 12 = 0",
        graphData: null
      },
      {
        explanation: "Find two negative numbers that multiply to 12 and sum to -8. The integers are -2 and -6.",
        workingOut: "(-2) \\times (-6) = 12 \\quad \\text{and} \\quad (-2) + (-6) = -8",
        graphData: null
      },
      {
        explanation: "Factorise the quadratic expression.",
        workingOut: "(p - 2)(p - 6) = 0",
        graphData: null
      },
      {
        explanation: "Apply the Null Factor Law.",
        workingOut: "p - 2 = 0 \\quad \\text{or} \\quad p - 6 = 0",
        graphData: null
      },
      {
        explanation: "Solve both simple equations.",
        workingOut: "p = 2 \\quad \\text{or} \\quad p = 6",
        graphData: null
      }
    ]
  },
  "y10-5a-q3k": {
    question: "Solve the quadratic equation by factorising: \\(x^2 - 8x + 15 = 0\\).",
    correct: "x = 3 \\text{ or } x = 5",
    distractors: [
      "x = -3 \\text{ or } x = -5",
      "x = -3 \\text{ or } x = 5",
      "x = 3 \\text{ or } x = -5"
    ],
    solutionSteps: [
      {
        explanation: "Observe the quadratic trinomial. We must calculate the values of x. We plan to find two negative factors of 15 that sum to -8.",
        workingOut: "x^2 - 8x + 15 = 0",
        graphData: null
      },
      {
        explanation: "Identify two negative integers that multiply to 15 and sum to -8. The numbers are -3 and -5.",
        workingOut: "(-3) \\times (-5) = 15 \\quad \\text{and} \\quad (-3) + (-5) = -8",
        graphData: null
      },
      {
        explanation: "Factorise the trinomial.",
        workingOut: "(x - 3)(x - 5) = 0",
        graphData: null
      },
      {
        explanation: "Apply the Null Factor Law.",
        workingOut: "x - 3 = 0 \\quad \\text{or} \\quad x - 5 = 0",
        graphData: null
      },
      {
        explanation: "Solve both linear equations.",
        workingOut: "x = 3 \\quad \\text{or} \\quad x = 5",
        graphData: null
      }
    ]
  },
  "y10-5a-q3l": {
    question: "Solve the quadratic equation by factorising: \\(m^2 - 12m + 20 = 0\\).",
    correct: "m = 2 \\text{ or } m = 10",
    distractors: [
      "m = -2 \\text{ or } m = -10",
      "m = -2 \\text{ or } m = 10",
      "m = 2 \\text{ or } m = -10"
    ],
    solutionSteps: [
      {
        explanation: "Examine the quadratic trinomial. We aim to find the roots of m. We plan to identify two negative factors of 20 that sum to -12.",
        workingOut: "m^2 - 12m + 20 = 0",
        graphData: null
      },
      {
        explanation: "Determine the factors of 20 that sum to -12. The numbers are -2 and -10.",
        workingOut: "(-2) \\times (-10) = 20 \\quad \\text{and} \\quad (-2) + (-10) = -12",
        graphData: null
      },
      {
        explanation: "Factorise the quadratic expression.",
        workingOut: "(m - 2)(m - 10) = 0",
        graphData: null
      },
      {
        explanation: "Apply the Null Factor Law.",
        workingOut: "m - 2 = 0 \\quad \\text{or} \\quad m - 10 = 0",
        graphData: null
      },
      {
        explanation: "Solve both linear binomial relations by transposing coordinates.",
        workingOut: "m = 2 \\quad \\text{or} \\quad m = 10",
        graphData: null
      }
    ]
  }
};

(async () => {
  try {
    console.log('[Batch 3 Migration] Upgrading next 10 questions of Year 10 Chapter 5A...');
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
    console.log('\nBatch 3 migration successfully completed.');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
