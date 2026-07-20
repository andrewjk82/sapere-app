import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// High-quality options shuffler ensuring index balance.
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
  "y10-5a-q1a": {
    question: "Solve the quadratic equation: \\(y(y + 4) = 0\\).",
    correct: "y = 0 \\text{ or } y = -4",
    distractors: [
      "y = 0 \\text{ or } y = 4",
      "y = 1 \\text{ or } y = -4",
      "y = -4 \\text{ only}"
    ],
    solutionSteps: [
      {
        explanation: "Identify the given quadratic equation in factorised form. The goal is to determine the values of variable y that satisfy this relation. We will plan to apply the Null Factor Law which states that if the product of factors is zero, then at least one factor must equal zero.",
        workingOut: "y(y + 4) = 0",
        graphData: null
      },
      {
        explanation: "Apply the Null Factor Law. Set each independent linear factor equal to zero to form separate solvable equations. This step transforms a product into distinct possibilities.",
        workingOut: "y = 0 \\quad \\text{or} \\quad y + 4 = 0",
        graphData: null
      },
      {
        explanation: "Solve the second linear equation for y by transposing 4 to the right-hand side. A common mistake here is failing to invert the sign when moving the constant, resulting in positive 4 instead of negative 4.",
        workingOut: "y = -4",
        graphData: null
      },
      {
        explanation: "Consolidate the final set of solutions. We check by substituting y = 0 and y = -4 back into the original expression: both yield zero, confirming the results are mathematically sound in this context.",
        workingOut: "y = 0 \\quad \\text{or} \\quad y = -4",
        graphData: null
      }
    ]
  },
  "y10-5a-q1b": {
    question: "Solve the quadratic equation: \\(m(m - 5) = 0\\).",
    correct: "m = 0 \\text{ or } m = 5",
    distractors: [
      "m = 0 \\text{ or } m = -5",
      "m = 5 \\text{ only}",
      "m = 1 \\text{ or } m = 5"
    ],
    solutionSteps: [
      {
        explanation: "Write down the given factorised expression. We want to find the real values of variable m that balance this equation. We will apply the Null Factor Law.",
        workingOut: "m(m - 5) = 0",
        graphData: null
      },
      {
        explanation: "Invoke the Null Factor Law by equating both factors to zero independently. This converts the system into simple linear relations.",
        workingOut: "m = 0 \\quad \\text{or} \\quad m - 5 = 0",
        graphData: null
      },
      {
        explanation: "Isolate m in the second factor by adding 5 to both sides. A typical mistake is writing negative 5 as the final solution because the factor contained minus 5.",
        workingOut: "m = 5",
        graphData: null
      },
      {
        explanation: "State the final solution set. Verifying by substitution confirms that either value satisfies the original quadratic equation.",
        workingOut: "m = 0 \\quad \\text{or} \\quad m = 5",
        graphData: null
      }
    ]
  },
  "y10-5a-q1c": {
    question: "Solve the quadratic equation: \\(2p(p + 6) = 0\\).",
    correct: "p = 0 \\text{ or } p = -6",
    distractors: [
      "p = 0 \\text{ or } p = 6",
      "p = -2 \\text{ or } p = -6",
      "p = -6 \\text{ only}"
    ],
    solutionSteps: [
      {
        explanation: "Note the quadratic equation with a scalar factor of 2. We aim to find the values of variable p that yield zero. We plan to divide the constant out and use the Null Factor Law.",
        workingOut: "2p(p + 6) = 0",
        graphData: null
      },
      {
        explanation: "Divide both sides of the equation by 2 to simplify the expression. A common pitfall is thinking the scalar 2 leads to a solution of p = 2 or p = -2.",
        workingOut: "p(p + 6) = 0",
        graphData: null
      },
      {
        explanation: "Apply the Null Factor Law. Equate each variable factor to zero to separate the equations.",
        workingOut: "p = 0 \\quad \\text{or} \\quad p + 6 = 0",
        graphData: null
      },
      {
        explanation: "Solve the remaining linear equation for p by subtracting 6 from both sides.",
        workingOut: "p = -6",
        graphData: null
      },
      {
        explanation: "Compile the final valid roots. Checking with the original equation confirms both roots are correct.",
        workingOut: "p = 0 \\quad \\text{or} \\quad p = -6",
        graphData: null
      }
    ]
  },
  "y10-5a-q1d": {
    question: "Solve the quadratic equation: \\((y - 2)(y + 7) = 0\\).",
    correct: "y = 2 \\text{ or } y = -7",
    distractors: [
      "y = -2 \\text{ or } y = 7",
      "y = 2 \\text{ or } y = 7",
      "y = -2 \\text{ or } y = -7"
    ],
    solutionSteps: [
      {
        explanation: "Examine the quadratic equation expressed as a product of two linear binomials. We need to solve for variable y. We plan to utilize the Null Factor Law.",
        workingOut: "(y - 2)(y + 7) = 0",
        graphData: null
      },
      {
        explanation: "Equate each binomial factor to zero. This yields two basic equations that can be solved independently.",
        workingOut: "y - 2 = 0 \\quad \\text{or} \\quad y + 7 = 0",
        graphData: null
      },
      {
        explanation: "Transpose the constant terms in both equations to solve for y. Ensure signs are inverted correctly (minus 2 becomes positive 2, and plus 7 becomes negative 7). Failing to switch signs is the most common student error here.",
        workingOut: "y = 2 \\quad \\text{or} \\quad y = -7",
        graphData: null
      },
      {
        explanation: "Present the final answers. Substitution of both values back into the factorized binomials confirms the validity of the roots.",
        workingOut: "y = 2 \\quad \\text{or} \\quad y = -7",
        graphData: null
      }
    ]
  },
  "y10-5a-q1e": {
    question: "Solve the quadratic equation: \\((k + 5)(k + 8) = 0\\).",
    correct: "k = -5 \\text{ or } k = -8",
    distractors: [
      "k = 5 \\text{ or } k = 8",
      "k = -5 \\text{ or } k = 8",
      "k = 5 \\text{ or } k = -8"
    ],
    solutionSteps: [
      {
        explanation: "Analyze the given quadratic equation. We must find the values of variable k. The Null Factor Law will be applied directly.",
        workingOut: "(k + 5)(k + 8) = 0",
        graphData: null
      },
      {
        explanation: "Set both linear binomial factors to zero. This sets up two linear relations.",
        workingOut: "k + 5 = 0 \\quad \\text{or} \\quad k + 8 = 0",
        graphData: null
      },
      {
        explanation: "Solve both simple equations by transposing the positive values, inverting their signs to negative numbers.",
        workingOut: "k = -5 \\quad \\text{or} \\quad k = -8",
        graphData: null
      },
      {
        explanation: "Conclude with the calculated roots. Verification shows both -5 and -8 evaluate the quadratic expression to zero.",
        workingOut: "k = -5 \\quad \\text{or} \\quad k = -8",
        graphData: null
      }
    ]
  },
  "y10-5a-q1f": {
    question: "Solve the quadratic equation: \\((n - 8)(n - 3) = 0\\).",
    correct: "n = 8 \\text{ or } n = 3",
    distractors: [
      "n = -8 \\text{ or } n = -3",
      "n = 8 \\text{ or } n = -3",
      "n = -8 \\text{ or } n = 3"
    ],
    solutionSteps: [
      {
        explanation: "Examine the factorised quadratic equation. We need to solve for variable n. The Null Factor Law will be used.",
        workingOut: "(n - 8)(n - 3) = 0",
        graphData: null
      },
      {
        explanation: "Set both factors equal to zero.",
        workingOut: "n - 8 = 0 \\quad \\text{or} \\quad n - 3 = 0",
        graphData: null
      },
      {
        explanation: "Solve for n in each relation by transposing the negative constants, making them positive values on the right side.",
        workingOut: "n = 8 \\quad \\text{or} \\quad n = 3",
        graphData: null
      },
      {
        explanation: "Confirm the final solutions. Checking by substituting the values into the original expression validates the correctness of the results.",
        workingOut: "n = 8 \\quad \\text{or} \\quad n = 3",
        graphData: null
      }
    ]
  },
  "y10-5a-q1g": {
    question: "Solve the quadratic equation: \\(3m(2m + 5) = 0\\).",
    correct: "m = 0 \\text{ or } m = -\\dfrac{5}{2}",
    distractors: [
      "m = 3 \\text{ or } m = -\\dfrac{5}{2}",
      "m = 0 \\text{ or } m = \\dfrac{5}{2}",
      "m = 0 \\text{ or } m = -\\dfrac{2}{5}"
    ],
    solutionSteps: [
      {
        explanation: "Identify the quadratic equation containing a monomial and a binomial factor. We aim to solve for variable m. The Null Factor Law will be applied.",
        workingOut: "3m(2m + 5) = 0",
        graphData: null
      },
      {
        explanation: "Divide both sides of the equation by 3 to eliminate the scalar coefficient, simplifying the equations.",
        workingOut: "m(2m + 5) = 0",
        graphData: null
      },
      {
        explanation: "Set both variable factors equal to zero independently.",
        workingOut: "m = 0 \\quad \\text{or} \\quad 2m + 5 = 0",
        graphData: null
      },
      {
        explanation: "Solve the second linear equation by subtracting 5 and then dividing by 2.",
        workingOut: "2m = -5 \\;\\Rightarrow\\; m = -\\dfrac{5}{2}",
        graphData: null
      },
      {
        explanation: "Summarize the final solution set. Substituting these values into the original expression verifies both are valid solutions.",
        workingOut: "m = 0 \\quad \\text{or} \\quad m = -\\dfrac{5}{2}",
        graphData: null
      }
    ]
  },
  "y10-5a-q1h": {
    question: "Solve the quadratic equation: \\((5y + 2)(2y - 3) = 0\\).",
    correct: "y = -\\dfrac{2}{5} \\text{ or } y = \\dfrac{3}{2}",
    distractors: [
      "y = \\dfrac{2}{5} \\text{ or } y = -\\dfrac{3}{2}",
      "y = -\\dfrac{5}{2} \\text{ or } y = \\dfrac{2}{3}",
      "y = -2 \\text{ or } y = 3"
    ],
    solutionSteps: [
      {
        explanation: "Observe the quadratic equation consisting of two linear binomial factors with non-unit leading coefficients. We need to solve for variable y using the Null Factor Law.",
        workingOut: "(5y + 2)(2y - 3) = 0",
        graphData: null
      },
      {
        explanation: "Set each independent factor equal to zero to create two linear equations.",
        workingOut: "5y + 2 = 0 \\quad \\text{or} \\quad 2y - 3 = 0",
        graphData: null
      },
      {
        explanation: "Solve the first linear equation by transposing 2 and then dividing by 5.",
        workingOut: "5y = -2 \\;\\Rightarrow\\; y = -\\dfrac{2}{5}",
        graphData: null
      },
      {
        explanation: "Solve the second linear equation by transposing -3 and dividing by 2.",
        workingOut: "2y = 3 \\;\\Rightarrow\\; y = \\dfrac{3}{2}",
        graphData: null
      },
      {
        explanation: "State the complete solution set. Both rational roots are verified as correct by back-substitution.",
        workingOut: "y = -\\dfrac{2}{5} \\quad \\text{or} \\quad y = \\dfrac{3}{2}",
        graphData: null
      }
    ]
  },
  "y10-5a-q1i": {
    question: "Solve the quadratic equation: \\((3x + 5)(x + 2) = 0\\).",
    correct: "x = -\\dfrac{5}{3} \\text{ or } x = -2",
    distractors: [
      "x = \\dfrac{5}{3} \\text{ or } x = 2",
      "x = -\\dfrac{3}{5} \\text{ or } x = -2",
      "x = -5 \\text{ or } x = -2"
    ],
    solutionSteps: [
      {
        explanation: "Examine the quadratic equation. We must calculate the values of variable x that satisfy it. We plan to utilize the Null Factor Law.",
        workingOut: "(3x + 5)(x + 2) = 0",
        graphData: null
      },
      {
        explanation: "Equate each binomial factor to zero.",
        workingOut: "3x + 5 = 0 \\quad \\text{or} \\quad x + 2 = 0",
        graphData: null
      },
      {
        explanation: "Solve the first equation for x by transposing 5 and dividing by 3.",
        workingOut: "3x = -5 \\;\\Rightarrow\\; x = -\\dfrac{5}{3}",
        graphData: null
      },
      {
        explanation: "Solve the second equation for x by subtracting 2.",
        workingOut: "x = -2",
        graphData: null
      },
      {
        explanation: "Verify and state the final roots. Both solutions successfully satisfy the original relation.",
        workingOut: "x = -\\dfrac{5}{3} \\quad \\text{or} \\quad x = -2",
        graphData: null
      }
    ]
  },
  "y10-5a-q1j": {
    question: "Solve the quadratic equation: \\((3k - 4)(2k + 5) = 0\\).",
    correct: "k = \\dfrac{4}{3} \\text{ or } k = -\\dfrac{5}{2}",
    distractors: [
      "k = -\\dfrac{4}{3} \\text{ or } k = \\dfrac{5}{2}",
      "k = \\dfrac{3}{4} \\text{ or } k = -\\dfrac{2}{5}",
      "k = 4 \\text{ or } k = -5"
    ],
    solutionSteps: [
      {
        explanation: "Observe the quadratic equation in factorized form. We aim to solve for variable k. The Null Factor Law will be applied.",
        workingOut: "(3k - 4)(2k + 5) = 0",
        graphData: null
      },
      {
        explanation: "Separate the binomial factors into two linear equations set to zero.",
        workingOut: "3k - 4 = 0 \\quad \\text{or} \\quad 2k + 5 = 0",
        graphData: null
      },
      {
        explanation: "Solve the first equation by transposing -4 and dividing by 3.",
        workingOut: "3k = 4 \\;\\Rightarrow\\; k = \\dfrac{4}{3}",
        graphData: null
      },
      {
        explanation: "Solve the second equation by transposing 5 and dividing by 2.",
        workingOut: "2k = -5 \\;\\Rightarrow\\; k = -\\dfrac{5}{2}",
        graphData: null
      },
      {
        explanation: "State the final verified fractional roots.",
        workingOut: "k = \\dfrac{4}{3} \\quad \\text{or} \\quad k = -\\dfrac{5}{2}",
        graphData: null
      }
    ]
  }
};

(async () => {
  try {
    console.log('[Batch 1 Migration] Upgrading first 10 questions of Year 10 Chapter 5A...');
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
    console.log('\nBatch 1 migration successfully completed.');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
