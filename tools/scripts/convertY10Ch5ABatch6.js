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
  "y10-5a-q6f": {
    question: "Solve the quadratic equation by factorising: \\(2m^2 - 11m + 5 = 0\\).",
    correct: "m = \\dfrac{1}{2} \\text{ or } m = 5",
    distractors: [
      "m = -\\dfrac{1}{2} \\text{ or } m = -5",
      "m = 2 \\text{ or } m = 5",
      "m = \\dfrac{1}{2} \\text{ or } m = -5"
    ],
    solutionSteps: [
      {
        explanation: "Identify the quadratic equation where the leading coefficient is 2. We plan to find two negative factors of a*c = 10 that sum to b = -11.",
        workingOut: "2m^2 - 11m + 5 = 0",
        graphData: null
      },
      {
        explanation: "The two negative integers are -1 and -10. Split the middle term.",
        workingOut: "2m^2 - 10m - m + 5 = 0",
        graphData: null
      },
      {
        explanation: "Factorise by grouping in pairs.",
        workingOut: "2m(m - 5) - 1(m - 5) = 0 \\;\\Rightarrow\\; (2m - 1)(m - 5) = 0",
        graphData: null
      },
      {
        explanation: "Apply the Null Factor Law.",
        workingOut: "2m - 1 = 0 \\quad \\text{or} \\quad m - 5 = 0",
        graphData: null
      },
      {
        explanation: "Solve both linear equations for m.",
        workingOut: "m = \\dfrac{1}{2} \\quad \\text{or} \\quad m = 5",
        graphData: null
      }
    ]
  },
  "y10-5a-q6g": {
    question: "Solve the quadratic equation by factorising: \\(6k^2 + 13k + 5 = 0\\).",
    correct: "k = -\\dfrac{1}{2} \\text{ or } k = -\\dfrac{5}{3}",
    distractors: [
      "k = \\dfrac{1}{2} \\text{ or } k = \\dfrac{5}{3}",
      "k = -\\dfrac{1}{3} \\text{ or } k = -\\dfrac{5}{2}",
      "k = -\\dfrac{1}{2} \\text{ or } k = \\dfrac{5}{3}"
    ],
    solutionSteps: [
      {
        explanation: "Observe the quadratic trinomial. We aim to split the middle term using factors of a*c = 30 that sum to 13.",
        workingOut: "6k^2 + 13k + 5 = 0",
        graphData: null
      },
      {
        explanation: "Find two factors of 30 that sum to 13. The integers are 3 and 10.",
        workingOut: "6k^2 + 3k + 10k + 5 = 0",
        graphData: null
      },
      {
        explanation: "Factorise the equation by grouping.",
        workingOut: "3k(2k + 1) + 5(2k + 1) = 0 \\;\\Rightarrow\\; (3k + 5)(2k + 1) = 0",
        graphData: null
      },
      {
        explanation: "Apply the Null Factor Law.",
        workingOut: "3k + 5 = 0 \\quad \\text{or} \\quad 2k + 1 = 0",
        graphData: null
      },
      {
        explanation: "Solve both equations for k.",
        workingOut: "k = -\\dfrac{5}{3} \\quad \\text{or} \\quad k = -\\dfrac{1}{2}",
        graphData: null
      }
    ]
  },
  "y10-5a-q6h": {
    question: "Solve the quadratic equation by factorising: \\(8p^2 - 10p + 3 = 0\\).",
    correct: "p = \\dfrac{1}{2} \\text{ or } p = \\dfrac{3}{4}",
    distractors: [
      "p = -\\dfrac{1}{2} \\text{ or } p = -\\dfrac{3}{4}",
      "p = \\dfrac{1}{2} \\text{ or } p = -\\dfrac{3}{4}",
      "p = 2 \\text{ or } p = 4"
    ],
    solutionSteps: [
      {
        explanation: "Examine the non-monic quadratic trinomial. We plan to find two negative factors of a*c = 24 that sum to -10.",
        workingOut: "8p^2 - 10p + 3 = 0",
        graphData: null
      },
      {
        explanation: "The two negative integers are -4 and -6. Split the middle term.",
        workingOut: "8p^2 - 4p - 6p + 3 = 0",
        graphData: null
      },
      {
        explanation: "Factorise by grouping.",
        workingOut: "4p(2p - 1) - 3(2p - 1) = 0 \\;\\Rightarrow\\; (4p - 3)(2p - 1) = 0",
        graphData: null
      },
      {
        explanation: "Apply the Null Factor Law.",
        workingOut: "4p - 3 = 0 \\quad \\text{or} \\quad 2p - 1 = 0",
        graphData: null
      },
      {
        explanation: "Solve both linear equations for p.",
        workingOut: "p = \\dfrac{3}{4} \\quad \\text{or} \\quad p = \\dfrac{1}{2}",
        graphData: null
      }
    ]
  },
  "y10-5a-q6i": {
    question: "Solve: \\(6y^2 = 7y + 5\\).",
    correct: "y = -\\dfrac{1}{2} \\text{ or } y = \\dfrac{5}{3}",
    distractors: [
      "y = \\dfrac{1}{2} \\text{ or } y = -\\dfrac{5}{3}",
      "y = -\\dfrac{1}{3} \\text{ or } y = \\dfrac{5}{2}",
      "y = -3 \\text{ or } y = 5"
    ],
    solutionSteps: [
      {
        explanation: "Rearrange the given quadratic equation to standard form ax^2 + bx + c = 0 by transposing all terms to the left.",
        workingOut: "6y^2 - 7y - 5 = 0",
        graphData: null
      },
      {
        explanation: "Find two factors of a*c = -30 that sum to b = -7. The integers are -10 and 3. Split the middle term.",
        workingOut: "6y^2 - 10y + 3y - 5 = 0",
        graphData: null
      },
      {
        explanation: "Factorise by grouping.",
        workingOut: "2y(3y - 5) + 1(3y - 5) = 0 \\;\\Rightarrow\\; (2y + 1)(3y - 5) = 0",
        graphData: null
      },
      {
        explanation: "Apply the Null Factor Law.",
        workingOut: "2y + 1 = 0 \\quad \\text{or} \\quad 3y - 5 = 0",
        graphData: null
      },
      {
        explanation: "Solve both linear equations for y.",
        workingOut: "y = -\\dfrac{1}{2} \\quad \\text{or} \\quad y = \\dfrac{5}{3}",
        graphData: null
      }
    ]
  },
  "y10-5a-q6j": {
    question: "Solve: \\(10m^2 = 3m + 4\\).",
    correct: "m = -\\dfrac{1}{2} \\text{ or } m = \\dfrac{4}{5}",
    distractors: [
      "m = \\dfrac{1}{2} \\text{ or } m = -\\dfrac{4}{5}",
      "m = -\\dfrac{2}{5} \\text{ or } m = 1",
      "m = -\\dfrac{1}{2} \\text{ or } m = -\\dfrac{4}{5}"
    ],
    solutionSteps: [
      {
        explanation: "Transpose all terms to the left-hand side to form a standard quadratic equation set to zero.",
        workingOut: "10m^2 - 3m - 4 = 0",
        graphData: null
      },
      {
        explanation: "Find two factors of a*c = -40 that sum to b = -3. The numbers are -8 and 5. Split the middle term.",
        workingOut: "10m^2 - 8m + 5m - 4 = 0",
        graphData: null
      },
      {
        explanation: "Factorise by grouping.",
        workingOut: "2m(5m - 4) + 1(5m - 4) = 0 \\;\\Rightarrow\\; (2m + 1)(5m - 4) = 0",
        graphData: null
      },
      {
        explanation: "Apply the Null Factor Law.",
        workingOut: "2m + 1 = 0 \\quad \\text{or} \\quad 5m - 4 = 0",
        graphData: null
      },
      {
        explanation: "Solve both linear equations.",
        workingOut: "m = -\\dfrac{1}{2} \\quad \\text{or} \\quad m = \\dfrac{4}{5}",
        graphData: null
      }
    ]
  },
  "y10-5a-q6k": {
    question: "Solve: \\(15k^2 = 7k + 2\\).",
    correct: "k = -\\dfrac{1}{5} \\text{ or } k = \\dfrac{2}{3}",
    distractors: [
      "k = \\dfrac{1}{5} \\text{ or } k = -\\dfrac{2}{3}",
      "k = -\\dfrac{1}{3} \\text{ or } k = \\dfrac{2}{5}",
      "k = -5 \\text{ or } k = 3"
    ],
    solutionSteps: [
      {
        explanation: "Transpose all terms to the left-hand side.",
        workingOut: "15k^2 - 7k - 2 = 0",
        graphData: null
      },
      {
        explanation: "Find two factors of a*c = -30 that sum to b = -7. The integers are -10 and 3.",
        workingOut: "15k^2 - 10k + 3k - 2 = 0",
        graphData: null
      },
      {
        explanation: "Factorise by grouping.",
        workingOut: "5k(3k - 2) + 1(3k - 2) = 0 \\;\\Rightarrow\\; (5k + 1)(3k - 2) = 0",
        graphData: null
      },
      {
        explanation: "Apply the Null Factor Law.",
        workingOut: "5k + 1 = 0 \\quad \\text{or} \\quad 3k - 2 = 0",
        graphData: null
      },
      {
        explanation: "Solve both linear equations for k.",
        workingOut: "k = -\\dfrac{1}{5} \\quad \\text{or} \\quad k = \\dfrac{2}{3}",
        graphData: null
      }
    ]
  },
  "y10-5a-q6l": {
    question: "Solve: \\(8p^2 + 10p = 3\\).",
    correct: "p = \\dfrac{1}{4} \\text{ or } p = -\\dfrac{3}{2}",
    distractors: [
      "p = -\\dfrac{1}{4} \\text{ or } p = \\dfrac{3}{2}",
      "p = \\dfrac{1}{2} \\text{ or } p = -3",
      "p = \\dfrac{1}{4} \\text{ or } p = \\dfrac{3}{2}"
    ],
    solutionSteps: [
      {
        explanation: "Transpose the constant 3 to the left-hand side.",
        workingOut: "8p^2 + 10p - 3 = 0",
        graphData: null
      },
      {
        explanation: "Find two factors of a*c = -24 that sum to b = 10. The integers are 12 and -2.",
        workingOut: "8p^2 + 12p - 2p - 3 = 0",
        graphData: null
      },
      {
        explanation: "Factorise by grouping.",
        workingOut: "4p(2p + 3) - 1(2p + 3) = 0 \\;\\Rightarrow\\; (4p - 1)(2p + 3) = 0",
        graphData: null
      },
      {
        explanation: "Apply the Null Factor Law.",
        workingOut: "4p - 1 = 0 \\quad \\text{or} \\quad 2p + 3 = 0",
        graphData: null
      },
      {
        explanation: "Solve both linear equations for p.",
        workingOut: "p = \\dfrac{1}{4} \\quad \\text{or} \\quad p = -\\dfrac{3}{2}",
        graphData: null
      }
    ]
  },
  "y10-5a-q6m": {
    question: "Solve: \\(2y^2 = 11y + 21\\).",
    correct: "y = -\\dfrac{3}{2} \\text{ or } y = 7",
    distractors: [
      "y = \\dfrac{3}{2} \\text{ or } y = -7",
      "y = -\\dfrac{2}{3} \\text{ or } y = 7",
      "y = -3 \\text{ or } y = 7"
    ],
    solutionSteps: [
      {
        explanation: "Transpose all terms to the left-hand side.",
        workingOut: "2y^2 - 11y - 21 = 0",
        graphData: null
      },
      {
        explanation: "Find two factors of a*c = -42 that sum to b = -11. The numbers are -14 and 3.",
        workingOut: "2y^2 - 14y + 3y - 21 = 0",
        graphData: null
      },
      {
        explanation: "Factorise by grouping.",
        workingOut: "2y(y - 7) + 3(y - 7) = 0 \\;\\Rightarrow\\; (2y + 3)(y - 7) = 0",
        graphData: null
      },
      {
        explanation: "Apply the Null Factor Law.",
        workingOut: "2y + 3 = 0 \\quad \\text{or} \\quad y - 7 = 0",
        graphData: null
      },
      {
        explanation: "Solve both linear equations for y.",
        workingOut: "y = -\\dfrac{3}{2} \\quad \\text{or} \\quad y = 7",
        graphData: null
      }
    ]
  },
  "y10-5a-q6n": {
    question: "Solve the quadratic equation by factorising: \\(3m^2 + 14m - 5 = 0\\).",
    correct: "m = \\dfrac{1}{3} \\text{ or } m = -5",
    distractors: [
      "m = -\\dfrac{1}{3} \\text{ or } m = 5",
      "m = \\dfrac{1}{3} \\text{ or } m = 5",
      "m = 3 \\text{ or } m = -5"
    ],
    solutionSteps: [
      {
        explanation: "Examine the non-monic quadratic trinomial. We plan to find factors of a*c = -15 that sum to b = 14.",
        workingOut: "3m^2 + 14m - 5 = 0",
        graphData: null
      },
      {
        explanation: "The integers are 15 and -1. Split the middle term.",
        workingOut: "3m^2 + 15m - m - 5 = 0",
        graphData: null
      },
      {
        explanation: "Factorise by grouping.",
        workingOut: "3m(m + 5) - 1(m + 5) = 0 \\;\\Rightarrow\\; (3m - 1)(m + 5) = 0",
        graphData: null
      },
      {
        explanation: "Apply the Null Factor Law.",
        workingOut: "3m - 1 = 0 \\quad \\text{or} \\quad m + 5 = 0",
        graphData: null
      },
      {
        explanation: "Solve for m.",
        workingOut: "m = \\dfrac{1}{3} \\quad \\text{or} \\quad m = -5",
        graphData: null
      }
    ]
  },
  "y10-5a-q6o": {
    question: "Solve the quadratic equation by factorising: \\(10k^2 - 11k - 6 = 0\\).",
    correct: "k = -\\dfrac{2}{5} \\text{ or } k = \\dfrac{3}{2}",
    distractors: [
      "k = \\dfrac{2}{5} \\text{ or } k = -\\dfrac{3}{2}",
      "k = -\\dfrac{1}{2} \\text{ or } k = \\dfrac{3}{5}",
      "k = -2 \\text{ or } k = 3"
    ],
    solutionSteps: [
      {
        explanation: "Observe the quadratic trinomial. We plan to find factors of a*c = -60 that sum to b = -11.",
        workingOut: "10k^2 - 11k - 6 = 0",
        graphData: null
      },
      {
        explanation: "The integers are -15 and 4. Split the middle term.",
        workingOut: "10k^2 - 15k + 4k - 6 = 0",
        graphData: null
      },
      {
        explanation: "Factorise by grouping.",
        workingOut: "5k(2k - 3) + 2(2k - 3) = 0 \\;\\Rightarrow\\; (5k + 2)(2k - 3) = 0",
        graphData: null
      },
      {
        explanation: "Apply the Null Factor Law.",
        workingOut: "5k + 2 = 0 \\quad \\text{or} \\quad 2k - 3 = 0",
        graphData: null
      },
      {
        explanation: "Solve both equations for k.",
        workingOut: "k = -\\dfrac{2}{5} \\quad \\text{or} \\quad k = \\dfrac{3}{2}",
        graphData: null
      }
    ]
  }
};

(async () => {
  try {
    console.log('[Batch 6 Migration] Upgrading next 10 questions of Year 10 Chapter 5A...');
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
    console.log('\nBatch 6 migration successfully completed.');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
