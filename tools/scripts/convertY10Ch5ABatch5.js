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
  "y10-5a-q4k": {
    question: "Solve the quadratic equation: \\(6m = m^2 + 5\\).",
    correct: "m = 1 \\text{ or } m = 5",
    distractors: [
      "m = -1 \\text{ or } m = -5",
      "m = 1 \\text{ or } m = -5",
      "m = -1 \\text{ or } m = 5"
    ],
    solutionSteps: [
      {
        explanation: "Observe the given equation where variables and constants are on opposite sides. We plan to rearrange the equation to form a standard quadratic equation set to zero.",
        workingOut: "6m = m^2 + 5",
        graphData: null
      },
      {
        explanation: "Subtract 6m from both sides of the equation to keep the quadratic term positive.",
        workingOut: "0 = m^2 - 6m + 5",
        graphData: null
      },
      {
        explanation: "Factorise the quadratic trinomial by finding two factors of 5 that sum to -6. The numbers are -1 and -5.",
        workingOut: "(m - 1)(m - 5) = 0",
        graphData: null
      },
      {
        explanation: "Apply the Null Factor Law.",
        workingOut: "m - 1 = 0 \\quad \\text{or} \\quad m - 5 = 0",
        graphData: null
      },
      {
        explanation: "Solve both linear equations for m.",
        workingOut: "m = 1 \\quad \\text{or} \\quad m = 5",
        graphData: null
      }
    ]
  },
  "y10-5a-q4l": {
    question: "Solve the quadratic equation by factorising: \\(m^2 - 4 = 0\\).",
    correct: "m = 2 \\text{ or } m = -2",
    distractors: [
      "m = 2 \\text{ only}",
      "m = -2 \\text{ only}",
      "m = 4 \\text{ or } m = -4"
    ],
    solutionSteps: [
      {
        explanation: "Examine the quadratic equation representing a difference of two squares. We need to solve for variable m using the difference of squares identity.",
        workingOut: "m^2 - 4 = 0",
        graphData: null
      },
      {
        explanation: "Apply the difference of squares identity: a^2 - b^2 = (a - b)(a + b). Here, 4 is equal to 2^2.",
        workingOut: "(m - 2)(m + 2) = 0",
        graphData: null
      },
      {
        explanation: "Apply the Null Factor Law.",
        workingOut: "m - 2 = 0 \\quad \\text{or} \\quad m + 2 = 0",
        graphData: null
      },
      {
        explanation: "Solve both linear binomial relations.",
        workingOut: "m = 2 \\quad \\text{or} \\quad m = -2",
        graphData: null
      }
    ]
  },
  "y10-5a-q5a": {
    question: "Solve the quadratic equation by factorising: \\(3y^2 + 12y = 0\\).",
    correct: "y = 0 \\text{ or } y = -4",
    distractors: [
      "y = 0 \\text{ or } y = 4",
      "y = -4 \\text{ only}",
      "y = 4 \\text{ only}"
    ],
    solutionSteps: [
      {
        explanation: "Identify the quadratic equation with a common variable and scalar factor. We plan to extract the highest common factor.",
        workingOut: "3y^2 + 12y = 0",
        graphData: null
      },
      {
        explanation: "Factor out the highest common factor, which is 3y, from the expression.",
        workingOut: "3y(y + 4) = 0",
        graphData: null
      },
      {
        explanation: "Apply the Null Factor Law to separate the factors.",
        workingOut: "3y = 0 \\quad \\text{or} \\quad y + 4 = 0",
        graphData: null
      },
      {
        explanation: "Solve both linear equations for y.",
        workingOut: "y = 0 \\quad \\text{or} \\quad y = -4",
        graphData: null
      }
    ]
  },
  "y10-5a-q5b": {
    question: "Solve the quadratic equation by factorising: \\(2m^2 - 14m = 0\\).",
    correct: "m = 0 \\text{ or } m = 7",
    distractors: [
      "m = 0 \\text{ or } m = -7",
      "m = 7 \\text{ only}",
      "m = -7 \\text{ only}"
    ],
    solutionSteps: [
      {
        explanation: "Observe the quadratic equation. We plan to factorise the binomial by extracting the highest common factor.",
        workingOut: "2m^2 - 14m = 0",
        graphData: null
      },
      {
        explanation: "Factor out the highest common factor 2m from the binomial expression.",
        workingOut: "2m(m - 7) = 0",
        graphData: null
      },
      {
        explanation: "Apply the Null Factor Law.",
        workingOut: "2m = 0 \\quad \\text{or} \\quad m - 7 = 0",
        graphData: null
      },
      {
        explanation: "Solve both equations for m.",
        workingOut: "m = 0 \\quad \\text{or} \\quad m = 7",
        graphData: null
      }
    ]
  },
  "y10-5a-q5c": {
    question: "Solve the quadratic equation by factorising: \\(5p^2 + 15p = 0\\).",
    correct: "p = 0 \\text{ or } p = -3",
    distractors: [
      "p = 0 \\text{ or } p = 3",
      "p = -3 \\text{ only}",
      "p = 3 \\text{ only}"
    ],
    solutionSteps: [
      {
        explanation: "Observe the quadratic trinomial relation without constant term. We plan to extract the highest common factor.",
        workingOut: "5p^2 + 15p = 0",
        graphData: null
      },
      {
        explanation: "Factorise the common expression 5p from both terms.",
        workingOut: "5p(p + 3) = 0",
        graphData: null
      },
      {
        explanation: "Apply the Null Factor Law.",
        workingOut: "5p = 0 \\quad \\text{or} \\quad p + 3 = 0",
        graphData: null
      },
      {
        explanation: "Solve for variable p.",
        workingOut: "p = 0 \\quad \\text{or} \\quad p = -3",
        graphData: null
      }
    ]
  },
  "y10-5a-q6a": {
    question: "Solve the quadratic equation by factorising: \\(3y^2 + 17y + 10 = 0\\).",
    correct: "y = -\\dfrac{2}{3} \\text{ or } y = -5",
    distractors: [
      "y = \\dfrac{2}{3} \\text{ or } y = 5",
      "y = -\\dfrac{3}{2} \\text{ or } y = -5",
      "y = -\\dfrac{2}{3} \\text{ or } y = 5"
    ],
    solutionSteps: [
      {
        explanation: "Examine the non-monic quadratic trinomial. We aim to factorise by splitting the middle term.",
        workingOut: "3y^2 + 17y + 10 = 0",
        graphData: null
      },
      {
        explanation: "Find two numbers that multiply to a*c = 30 and sum to b = 17. The numbers are 2 and 15. Rewrite the middle term.",
        workingOut: "3y^2 + 15y + 2y + 10 = 0",
        graphData: null
      },
      {
        explanation: "Factorise by grouping.",
        workingOut: "3y(y + 5) + 2(y + 5) = 0 \\;\\Rightarrow\\; (3y + 2)(y + 5) = 0",
        graphData: null
      },
      {
        explanation: "Apply the Null Factor Law.",
        workingOut: "3y + 2 = 0 \\quad \\text{or} \\quad y + 5 = 0",
        graphData: null
      },
      {
        explanation: "Solve both linear equations.",
        workingOut: "3y = -2 \\;\\Rightarrow\\; y = -\\dfrac{2}{3} \\quad \\text{and} \\quad y = -5",
        graphData: null
      }
    ]
  },
  "y10-5a-q6b": {
    question: "Solve the quadratic equation by factorising: \\(2m^2 + 13m + 15 = 0\\).",
    correct: "m = -\\dfrac{3}{2} \\text{ or } m = -5",
    distractors: [
      "m = \\dfrac{3}{2} \\text{ or } m = 5",
      "m = -\\dfrac{2}{3} \\text{ or } m = -5",
      "m = -\\dfrac{3}{2} \\text{ or } m = 5"
    ],
    solutionSteps: [
      {
        explanation: "Examine the quadratic equation. We plan to split the middle term of the non-monic trinomial.",
        workingOut: "2m^2 + 13m + 15 = 0",
        graphData: null
      },
      {
        explanation: "Find two numbers that multiply to a*c = 30 and sum to b = 13. The numbers are 3 and 10.",
        workingOut: "2m^2 + 10m + 3m + 15 = 0",
        graphData: null
      },
      {
        explanation: "Factorise by grouping in pairs.",
        workingOut: "2m(m + 5) + 3(m + 5) = 0 \\;\\Rightarrow\\; (2m + 3)(m + 5) = 0",
        graphData: null
      },
      {
        explanation: "Apply the Null Factor Law.",
        workingOut: "2m + 3 = 0 \\quad \\text{or} \\quad m + 5 = 0",
        graphData: null
      },
      {
        explanation: "Solve for m.",
        workingOut: "m = -\\dfrac{3}{2} \\quad \\text{or} \\quad m = -5",
        graphData: null
      }
    ]
  },
  "y10-5a-q6c": {
    question: "Solve the quadratic equation by factorising: \\(3k^2 + 10k + 8 = 0\\).",
    correct: "k = -\\dfrac{4}{3} \\text{ or } k = -2",
    distractors: [
      "k = \\dfrac{4}{3} \\text{ or } k = 2",
      "k = -\\dfrac{3}{4} \\text{ or } k = -2",
      "k = -\\dfrac{4}{3} \\text{ or } k = 2"
    ],
    solutionSteps: [
      {
        explanation: "Identify the quadratic equation. We plan to split the middle term using factors of a*c = 24 that sum to 10.",
        workingOut: "3k^2 + 10k + 8 = 0",
        graphData: null
      },
      {
        explanation: "Find two factors of 24 that sum to 10. The integers are 4 and 6.",
        workingOut: "3k^2 + 6k + 4k + 8 = 0",
        graphData: null
      },
      {
        explanation: "Factorise the equation by grouping.",
        workingOut: "3k(k + 2) + 4(k + 2) = 0 \\;\\Rightarrow\\; (3k + 4)(k + 2) = 0",
        graphData: null
      },
      {
        explanation: "Apply the Null Factor Law.",
        workingOut: "3k + 4 = 0 \\quad \\text{or} \\quad k + 2 = 0",
        graphData: null
      },
      {
        explanation: "Solve both linear equations for k.",
        workingOut: "k = -\\dfrac{4}{3} \\quad \\text{or} \\quad k = -2",
        graphData: null
      }
    ]
  },
  "y10-5a-q6d": {
    question: "Solve the quadratic equation by factorising: \\(3p^2 - 8p + 4 = 0\\).",
    correct: "p = \\dfrac{2}{3} \\text{ or } p = 2",
    distractors: [
      "p = -\\dfrac{2}{3} \\text{ or } p = -2",
      "p = \\dfrac{3}{2} \\text{ or } p = 2",
      "p = \\dfrac{2}{3} \\text{ or } p = -2"
    ],
    solutionSteps: [
      {
        explanation: "Observe the quadratic trinomial. We plan to find two negative factors of a*c = 12 that sum to b = -8.",
        workingOut: "3p^2 - 8p + 4 = 0",
        graphData: null
      },
      {
        explanation: "The two negative integers are -2 and -6. Split the middle term.",
        workingOut: "3p^2 - 6p - 2p + 4 = 0",
        graphData: null
      },
      {
        explanation: "Factorise by grouping.",
        workingOut: "3p(p - 2) - 2(p - 2) = 0 \\;\\Rightarrow\\; (3p - 2)(p - 2) = 0",
        graphData: null
      },
      {
        explanation: "Apply the Null Factor Law.",
        workingOut: "3p - 2 = 0 \\quad \\text{or} \\quad p - 2 = 0",
        graphData: null
      },
      {
        explanation: "Solve both linear binomial relations.",
        workingOut: "p = \\dfrac{2}{3} \\quad \\text{or} \\quad p = 2",
        graphData: null
      }
    ]
  },
  "y10-5a-q6e": {
    question: "Solve the quadratic equation by factorising: \\(3y^2 - 14y + 8 = 0\\).",
    correct: "y = \\dfrac{2}{3} \\text{ or } y = 4",
    distractors: [
      "y = -\\dfrac{2}{3} \\text{ or } y = -4",
      "y = \\dfrac{3}{2} \\text{ or } y = 4",
      "y = \\dfrac{2}{3} \\text{ or } y = -4"
    ],
    solutionSteps: [
      {
        explanation: "Observe the quadratic trinomial equation. We aim to split the middle term using factors of a*c = 24 that sum to -14.",
        workingOut: "3y^2 - 14y + 8 = 0",
        graphData: null
      },
      {
        explanation: "The two negative numbers are -2 and -12. Split the middle term.",
        workingOut: "3y^2 - 12y - 2y + 8 = 0",
        graphData: null
      },
      {
        explanation: "Factorise the quadratic binomials.",
        workingOut: "3y(y - 4) - 2(y - 4) = 0 \\;\\Rightarrow\\; (3y - 2)(y - 4) = 0",
        graphData: null
      },
      {
        explanation: "Apply the Null Factor Law.",
        workingOut: "3y - 2 = 0 \\quad \\text{or} \\quad y - 4 = 0",
        graphData: null
      },
      {
        explanation: "Solve both equations for y.",
        workingOut: "y = \\dfrac{2}{3} \\quad \\text{or} \\quad y = 4",
        graphData: null
      }
    ]
  }
};

(async () => {
  try {
    console.log('[Batch 5 Migration] Upgrading next 10 questions of Year 10 Chapter 5A...');
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
    console.log('\nBatch 5 migration successfully completed.');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
