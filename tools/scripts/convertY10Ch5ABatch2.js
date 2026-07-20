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
  "y10-5a-q1k": {
    question: "Solve the quadratic equation: \\(4(3y - 2)(y + 5) = 0\\).",
    correct: "y = \\dfrac{2}{3} \\text{ or } y = -5",
    distractors: [
      "y = -\\dfrac{2}{3} \\text{ or } y = 5",
      "y = \\dfrac{3}{2} \\text{ or } y = -5",
      "y = \\dfrac{2}{3} \\text{ or } y = 5"
    ],
    solutionSteps: [
      {
        explanation: "Analyze the given quadratic equation containing a constant scalar coefficient of 4. We want to find the real roots for variable y. We plan to divide out the constant coefficient and then apply the Null Factor Law.",
        workingOut: "4(3y - 2)(y + 5) = 0",
        graphData: null
      },
      {
        explanation: "Divide both sides of the equation by 4 to simplify. Note that dividing 0 by any non-zero number remains 0.",
        workingOut: "(3y - 2)(y + 5) = 0",
        graphData: null
      },
      {
        explanation: "Apply the Null Factor Law. Since the product of two binomial factors is zero, we equate each term to zero independently.",
        workingOut: "3y - 2 = 0 \\quad \\text{or} \\quad y + 5 = 0",
        graphData: null
      },
      {
        explanation: "Solve the first linear equation by adding 2 and dividing by 3. Solve the second by transposing 5.",
        workingOut: "3y = 2 \\;\\Rightarrow\\; y = \\dfrac{2}{3} \\quad \\text{and} \\quad y = -5",
        graphData: null
      },
      {
        explanation: "Confirm the final solution set. Substituting both y = 2/3 and y = -5 back into the original quadratic expression yields zero.",
        workingOut: "y = \\dfrac{2}{3} \\quad \\text{or} \\quad y = -5",
        graphData: null
      }
    ]
  },
  "y10-5a-q1l": {
    question: "Solve the quadratic equation: \\(5(-2m + 3)(-2m + 5) = 0\\).",
    correct: "m = \\dfrac{3}{2} \\text{ or } m = \\dfrac{5}{2}",
    distractors: [
      "m = -\\dfrac{3}{2} \\text{ or } m = -\\dfrac{5}{2}",
      "m = \\dfrac{2}{3} \\text{ or } m = \\dfrac{2}{5}",
      "m = \\dfrac{3}{2} \\text{ or } m = -\\dfrac{5}{2}"
    ],
    solutionSteps: [
      {
        explanation: "Note the factorised quadratic equation with leading coefficient variables. We must solve for variable m. We plan to simplify by dividing by 5 first.",
        workingOut: "5(-2m + 3)(-2m + 5) = 0",
        graphData: null
      },
      {
        explanation: "Divide both sides by 5 to isolate the product of the binomials.",
        workingOut: "(-2m + 3)(-2m + 5) = 0",
        graphData: null
      },
      {
        explanation: "Apply the Null Factor Law. Set both binomial factors to zero independently.",
        workingOut: "-2m + 3 = 0 \\quad \\text{or} \\quad -2m + 5 = 0",
        graphData: null
      },
      {
        explanation: "Solve both equations for m by transposing the constants and dividing by -2. Watch the negative signs during division.",
        workingOut: "-2m = -3 \\;\\Rightarrow\\; m = \\dfrac{3}{2} \\quad \\text{and} \\quad -2m = -5 \\;\\Rightarrow\\; m = \\dfrac{5}{2}",
        graphData: null
      },
      {
        explanation: "State the final solutions. Testing both fractions validates that the equation holds true.",
        workingOut: "m = \\dfrac{3}{2} \\quad \\text{or} \\quad m = \\dfrac{5}{2}",
        graphData: null
      }
    ]
  },
  "y10-5a-q2a": {
    question: "Solve the quadratic equation by factorising: \\(y^2 - 6y = 0\\).",
    correct: "y = 0 \\text{ or } y = 6",
    distractors: [
      "y = 0 \\text{ or } y = -6",
      "y = 6 \\text{ only}",
      "y = -6 \\text{ only}"
    ],
    solutionSteps: [
      {
        explanation: "Analyze the quadratic expression lacking a constant term. We need to solve for y. We plan to factorise the common term y first, then apply the Null Factor Law.",
        workingOut: "y^2 - 6y = 0",
        graphData: null
      },
      {
        explanation: "Extract the highest common factor, which is y, from both terms.",
        workingOut: "y(y - 6) = 0",
        graphData: null
      },
      {
        explanation: "Apply the Null Factor Law to separate the factors into linear equations.",
        workingOut: "y = 0 \\quad \\text{or} \\quad y - 6 = 0",
        graphData: null
      },
      {
        explanation: "Solve the second equation by adding 6 to both sides. Do not forget that y = 0 is a critical root.",
        workingOut: "y = 6",
        graphData: null
      },
      {
        explanation: "Confirm the final solution coordinates by verifying each root in the original equation.",
        workingOut: "y = 0 \\quad \\text{or} \\quad y = 6",
        graphData: null
      }
    ]
  },
  "y10-5a-q2b": {
    question: "Solve the quadratic equation by factorising: \\(m^2 + 8m = 0\\).",
    correct: "m = 0 \\text{ or } m = -8",
    distractors: [
      "m = 0 \\text{ or } m = 8",
      "m = -8 \\text{ only}",
      "m = 8 \\text{ only}"
    ],
    solutionSteps: [
      {
        explanation: "Examine the quadratic relation. We aim to find the roots for variable m. Factorisation of the common variable m is the primary strategy.",
        workingOut: "m^2 + 8m = 0",
        graphData: null
      },
      {
        explanation: "Factor out the common term m from the expression.",
        workingOut: "m(m + 8) = 0",
        graphData: null
      },
      {
        explanation: "Utilize the Null Factor Law to form separate equations.",
        workingOut: "m = 0 \\quad \\text{or} \\quad m + 8 = 0",
        graphData: null
      },
      {
        explanation: "Transpose the positive constant 8 in the second equation.",
        workingOut: "m = -8",
        graphData: null
      },
      {
        explanation: "Verify both solutions by substitution: both values return zero.",
        workingOut: "m = 0 \\quad \\text{or} \\quad m = -8",
        graphData: null
      }
    ]
  },
  "y10-5a-q2c": {
    question: "Solve the quadratic equation by factorising: \\(k^2 + 9k = 0\\).",
    correct: "k = 0 \\text{ or } k = -9",
    distractors: [
      "k = 0 \\text{ or } k = 9",
      "k = -9 \\text{ only}",
      "k = 1 \\text{ or } k = -9"
    ],
    solutionSteps: [
      {
        explanation: "Observe the equation containing variable k. The constant term is zero. We plan to extract the common factor k.",
        workingOut: "k^2 + 9k = 0",
        graphData: null
      },
      {
        explanation: "Factorise the common factor k from the quadratic binomial.",
        workingOut: "k(k + 9) = 0",
        graphData: null
      },
      {
        explanation: "Equate each factor to zero using the Null Factor Law.",
        workingOut: "k = 0 \\quad \\text{or} \\quad k + 9 = 0",
        graphData: null
      },
      {
        explanation: "Solve the second linear equation by subtracting 9.",
        workingOut: "k = -9",
        graphData: null
      },
      {
        explanation: "Confirm the final solutions: 0 and -9 are both valid roots.",
        workingOut: "k = 0 \\quad \\text{or} \\quad k = -9",
        graphData: null
      }
    ]
  },
  "y10-5a-q2d": {
    question: "Solve the quadratic equation by factorising: \\(p^2 - 16p = 0\\).",
    correct: "p = 0 \\text{ or } p = 16",
    distractors: [
      "p = 0 \\text{ or } p = -16",
      "p = 16 \\text{ only}",
      "p = -16 \\text{ only}"
    ],
    solutionSteps: [
      {
        explanation: "Analyze the quadratic binomial. We need to solve for variable p. Factorising the common factor p is the planned approach.",
        workingOut: "p^2 - 16p = 0",
        graphData: null
      },
      {
        explanation: "Extract the common factor p.",
        workingOut: "p(p - 16) = 0",
        graphData: null
      },
      {
        explanation: "Apply the Null Factor Law to set each component to zero.",
        workingOut: "p = 0 \\quad \\text{or} \\quad p - 16 = 0",
        graphData: null
      },
      {
        explanation: "Solve the linear binomial equation for p by transposing negative 16.",
        workingOut: "p = 16",
        graphData: null
      },
      {
        explanation: "Verify and present the final root values.",
        workingOut: "p = 0 \\quad \\text{or} \\quad p = 16",
        graphData: null
      }
    ]
  },
  "y10-5a-q2e": {
    question: "Solve the equation: \\(y^2 = -12y\\).",
    correct: "y = 0 \\text{ or } y = -12",
    distractors: [
      "y = 0 \\text{ or } y = 12",
      "y = -12 \\text{ only}",
      "y = 12 \\text{ only}"
    ],
    solutionSteps: [
      {
        explanation: "Given the quadratic relation with terms on opposite sides. We plan to rearrange it so one side is zero, then factorise.",
        workingOut: "y^2 = -12y",
        graphData: null
      },
      {
        explanation: "Add 12y to both sides to form a quadratic binomial equation set to zero.",
        workingOut: "y^2 + 12y = 0",
        graphData: null
      },
      {
        explanation: "Factor out the common term y.",
        workingOut: "y(y + 12) = 0",
        graphData: null
      },
      {
        explanation: "Equate each factor to zero to obtain separate linear equations.",
        workingOut: "y = 0 \\quad \\text{or} \\quad y + 12 = 0",
        graphData: null
      },
      {
        explanation: "Solve the second equation by subtracting 12.",
        workingOut: "y = -12",
        graphData: null
      },
      {
        explanation: "State the final solutions: both roots satisfy the original equation.",
        workingOut: "y = 0 \\quad \\text{or} \\quad y = -12",
        graphData: null
      }
    ]
  },
  "y10-5a-q2f": {
    question: "Solve the equation: \\(n^2 = 7n\\).",
    correct: "n = 0 \\text{ or } n = 7",
    distractors: [
      "n = 0 \\text{ or } n = -7",
      "n = 7 \\text{ only}",
      "n = -7 \\text{ only}"
    ],
    solutionSteps: [
      {
        explanation: "Look at the quadratic equation. We must find the roots of n. We plan to transpose all terms to one side.",
        workingOut: "n^2 = 7n",
        graphData: null
      },
      {
        explanation: "Subtract 7n from both sides to equal the equation to zero.",
        workingOut: "n^2 - 7n = 0",
        graphData: null
      },
      {
        explanation: "Factorise the common factor n from the expression.",
        workingOut: "n(n - 7) = 0",
        graphData: null
      },
      {
        explanation: "Apply the Null Factor Law.",
        workingOut: "n = 0 \\quad \\text{or} \\quad n - 7 = 0",
        graphData: null
      },
      {
        explanation: "Solve the second linear relation by transposing negative 7.",
        workingOut: "n = 7",
        graphData: null
      },
      {
        explanation: "Verify the final roots by substitution.",
        workingOut: "n = 0 \\quad \\text{or} \\quad n = 7",
        graphData: null
      }
    ]
  },
  "y10-5a-q3a": {
    question: "Solve the quadratic equation by factorising: \\(y^2 + 9y + 14 = 0\\).",
    correct: "y = -2 \\text{ or } y = -7",
    distractors: [
      "y = 2 \\text{ or } y = 7",
      "y = -2 \\text{ or } y = 7",
      "y = 2 \\text{ or } y = -7"
    ],
    solutionSteps: [
      {
        explanation: "Observe the quadratic trinomial. We need to solve for y. We plan to find two numbers that multiply to 14 and add to 9 to factorise.",
        workingOut: "y^2 + 9y + 14 = 0",
        graphData: null
      },
      {
        explanation: "Identify the factors of 14 that sum to 9. The numbers are 2 and 7.",
        workingOut: "2 \\times 7 = 14 \\quad \\text{and} \\quad 2 + 7 = 9",
        graphData: null
      },
      {
        explanation: "Rewrite the trinomial in factorised form using these two numbers.",
        workingOut: "(y + 2)(y + 7) = 0",
        graphData: null
      },
      {
        explanation: "Apply the Null Factor Law.",
        workingOut: "y + 2 = 0 \\quad \\text{or} \\quad y + 7 = 0",
        graphData: null
      },
      {
        explanation: "Solve both linear equations for y by transposing the constants.",
        workingOut: "y = -2 \\quad \\text{or} \\quad y = -7",
        graphData: null
      },
      {
        explanation: "Confirm the final solutions by substitution.",
        workingOut: "y = -2 \\quad \\text{or} \\quad y = -7",
        graphData: null
      }
    ]
  },
  "y10-5a-q3b": {
    question: "Solve the quadratic equation by factorising: \\(m^2 + 8m + 12 = 0\\).",
    correct: "m = -2 \\text{ or } m = -6",
    distractors: [
      "m = 2 \\text{ or } m = 6",
      "m = -2 \\text{ or } m = 6",
      "m = 2 \\text{ or } m = -6"
    ],
    solutionSteps: [
      {
        explanation: "Examine the quadratic trinomial equation. We must solve for variable m. We plan to find two factor numbers of 12 that sum to 8.",
        workingOut: "m^2 + 8m + 12 = 0",
        graphData: null
      },
      {
        explanation: "Determine the factors of 12 that sum to 8. The numbers are 2 and 6.",
        workingOut: "2 \\times 6 = 12 \\quad \\text{and} \\quad 2 + 6 = 8",
        graphData: null
      },
      {
        explanation: "Factorise the quadratic expression.",
        workingOut: "(m + 2)(m + 6) = 0",
        graphData: null
      },
      {
        explanation: "Set both binomial factors equal to zero using the Null Factor Law.",
        workingOut: "m + 2 = 0 \\quad \\text{or} \\quad m + 6 = 0",
        graphData: null
      },
      {
        explanation: "Solve for m by transposing the constants.",
        workingOut: "m = -2 \\quad \\text{or} \\quad m = -6",
        graphData: null
      },
      {
        explanation: "Confirm the final roots.",
        workingOut: "m = -2 \\quad \\text{or} \\quad m = -6",
        graphData: null
      }
    ]
  }
};

(async () => {
  try {
    console.log('[Batch 2 Migration] Upgrading next 10 questions of Year 10 Chapter 5A...');
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
    console.log('\nBatch 2 migration successfully completed.');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
