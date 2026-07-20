import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

function shuffleOptions(correct, distractors) {
  const options = [correct, ...distractors];
  for (let i = options.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [options[i], options[j]] = [options[j], options[i]];
  }
  return { options, correctIndex: options.indexOf(correct) };
}

const q5_q6_q7_questions = {
  // q5a
  "y10-5g-q5a": {
    question: "Solve the quadratic equation: \\(a^2 - 8a + 16 = 0\\).",
    correct: "a = 4 \\text{ only}",
    distractors: ["a = -4 \\text{ only}", "a = 4 \\text{ or } a = -4", "a = 0 \\text{ or } a = 8"],
    steps: [
      { explanation: "Observe the perfect square trinomial structure.", workingOut: "a^2 - 8a + 16 = 0" },
      { explanation: "Factorise using the perfect square identity.", workingOut: "(a - 4)^2 = 0" },
      { explanation: "Apply the Null Factor Law.", workingOut: "a - 4 = 0 \\;\\Rightarrow\\; a = 4" }
    ]
  },
  // q5b
  "y10-5g-q5b": {
    question: "Solve the quadratic equation: \\(x^2 + 12x + 36 = 0\\).",
    correct: "x = -6 \\text{ only}",
    distractors: ["x = 6 \\text{ only}", "x = 6 \\text{ or } x = -6", "x = 0 \\text{ or } x = -12"],
    steps: [
      { explanation: "Observe the quadratic trinomial.", workingOut: "x^2 + 12x + 36 = 0" },
      { explanation: "Factorise the perfect square expression.", workingOut: "(x + 6)^2 = 0" },
      { explanation: "Apply the Null Factor Law.", workingOut: "x + 6 = 0 \\;\\Rightarrow\\; x = -6" }
    ]
  },
  // q5c
  "y10-5g-q5c": {
    question: "Solve the quadratic equation: \\(3x^2 + 6x + 3 = 0\\).",
    correct: "x = -1 \\text{ only}",
    distractors: ["x = 1 \\text{ only}", "x = 1 \\text{ or } x = -1", "x = 0 \\text{ or } x = -3"],
    steps: [
      { explanation: "Divide all terms of the equation by 3 to simplify.", workingOut: "x^2 + 2x + 1 = 0" },
      { explanation: "Factorise the perfect square trinomial.", workingOut: "(x + 1)^2 = 0" },
      { explanation: "Apply the Null Factor Law.", workingOut: "x + 1 = 0 \\;\\Rightarrow\\; x = -1" }
    ]
  },
  // q5d
  "y10-5g-q5d": {
    question: "Solve the quadratic equation: \\(2y^2 - 20y + 50 = 0\\).",
    correct: "y = 5 \\text{ only}",
    distractors: ["y = -5 \\text{ only}", "y = 5 \\text{ or } y = -5", "y = 0 \\text{ or } y = 10"],
    steps: [
      { explanation: "Divide all terms of the equation by 2.", workingOut: "y^2 - 10y + 25 = 0" },
      { explanation: "Factorise the perfect square trinomial expression.", workingOut: "(y - 5)^2 = 0" },
      { explanation: "Apply the Null Factor Law.", workingOut: "y - 5 = 0 \\;\\Rightarrow\\; y = 5" }
    ]
  },
  // q5e
  "y10-5g-q5e": {
    question: "Solve the quadratic equation: \\(9x^2 + 12x + 4 = 0\\).",
    correct: "x = -\\dfrac{2}{3} \\text{ only}",
    distractors: ["x = \\dfrac{2}{3} \\text{ only}", "x = \\dfrac{2}{3} \\text{ or } x = -\\dfrac{2}{3}", "x = -\\dfrac{3}{2} \\text{ only}"],
    steps: [
      { explanation: "Observe the perfect square trinomial.", workingOut: "9x^2 + 12x + 4 = 0" },
      { explanation: "Factorise using the identity (ax+b)^2. Here, 9x^2 = (3x)^2 and 4 = 2^2.", workingOut: "(3x + 2)^2 = 0" },
      { explanation: "Apply the Null Factor Law.", workingOut: "3x + 2 = 0 \\;\\Rightarrow\\; 3x = -2 \\;\\Rightarrow\\; x = -\\dfrac{2}{3}" }
    ]
  },
  // q5f
  "y10-5g-q5f": {
    question: "Solve the quadratic equation: \\(5z^2 - 30z + 45 = 0\\).",
    correct: "z = 3 \\text{ only}",
    distractors: ["z = -3 \\text{ only}", "z = 3 \\text{ or } z = -3", "z = 0 \\text{ or } z = 9"],
    steps: [
      { explanation: "Divide all terms of the equation by 5.", workingOut: "z^2 - 6z + 9 = 0" },
      { explanation: "Factorise the perfect square trinomial.", workingOut: "(z - 3)^2 = 0" },
      { explanation: "Apply the Null Factor Law.", workingOut: "z - 3 = 0 \\;\\Rightarrow\\; z = 3" }
    ]
  },
  // q6a
  "y10-5g-q6a": {
    question: "Factorise using surds: \\(x^2 - 7\\).",
    correct: "(x - \\sqrt{7})(x + \\sqrt{7})",
    distractors: [
      "(x - 7)(x + 7)",
      "(x - \\sqrt{7})^2",
      "\\text{Cannot be factorised}"
    ],
    steps: [
      { explanation: "We plan to treat 7 as the square of its square root to apply the difference of squares identity.", workingOut: "x^2 - 7" },
      { explanation: "Rewrite the constant term 7 as a square.", workingOut: "x^2 - (\\sqrt{7})^2" },
      { explanation: "Apply the difference of squares identity: a^2 - b^2 = (a - b)(a + b).", workingOut: "(x - \\sqrt{7})(x + \\sqrt{7})" }
    ]
  },
  // q6b
  "y10-5g-q6b": {
    question: "Factorise using surds: \\((x+3)^2 - 12\\).",
    correct: "(x + 3 - 2\\sqrt{3})(x + 3 + 2\\sqrt{3})",
    distractors: [
      "(x + 3 - 12)(x + 3 + 12)",
      "(x + 3 - \\sqrt{12})^2",
      "(x - 2\\sqrt{3})(x + 2\\sqrt{3})"
    ],
    steps: [
      { explanation: "We plan to express 12 as a square of its simplified surd root.", workingOut: "(x+3)^2 - 12" },
      { explanation: "Simplify the square root of 12.", workingOut: "\\sqrt{12} = \\sqrt{4 \\times 3} = 2\\sqrt{3}" },
      { explanation: "Rewrite the expression as a difference of squares.", workingOut: "(x+3)^2 - (2\\sqrt{3})^2" },
      { explanation: "Apply the difference of squares identity.", workingOut: "(x + 3 - 2\\sqrt{3})(x + 3 + 2\\sqrt{3})" }
    ]
  },
  // q6c
  "y10-5g-q6c": {
    question: "Factorise using surds: \\(3(x-1)^2 - 15\\).",
    correct: "3(x - 1 - \\sqrt{5})(x - 1 + \\sqrt{5})",
    distractors: [
      "3(x - 1 - 5)(x - 1 + 5)",
      "3(x - 1 - \\sqrt{15})(x - 1 + \\sqrt{15})",
      "3(x - \\sqrt{5})(x + \\sqrt{5})"
    ],
    steps: [
      { explanation: "Factor out the common scalar factor 3 first.", workingOut: "3[(x-1)^2 - 5]" },
      { explanation: "Rewrite 5 as a squared surd.", workingOut: "3[(x-1)^2 - (\\sqrt{5})^2]" },
      { explanation: "Apply the difference of squares identity inside the bracket.", workingOut: "3(x - 1 - \\sqrt{5})(x - 1 + \\sqrt{5})" }
    ]
  },
  // q7a
  "y10-5g-q7a": {
    question: "Solve the quadratic equation by completing the square: \\(x^2 + 4x - 2 = 0\\).",
    correct: "x = -2 \\pm \\sqrt{6}",
    distractors: ["x = 2 \\pm \\sqrt{6}", "x = -2 \\pm \\sqrt{2}", "x = -4 \\pm \\sqrt{6}"],
    steps: [
      { explanation: "We plan to move the constant to the right and add the square of half the coefficient of x.", workingOut: "x^2 + 4x = 2" },
      { explanation: "Calculate half of 4, square it (2^2 = 4), and add it to both sides.", workingOut: "x^2 + 4x + 4 = 2 + 4 \\;\\Rightarrow\\; (x + 2)^2 = 6" },
      { explanation: "Take the square root of both sides.", workingOut: "x + 2 = \\pm\\sqrt{6}" },
      { explanation: "Isolate x by subtracting 2.", workingOut: "x = -2 \\pm \\sqrt{6}" }
    ]
  },
  // q7b
  "y10-5g-q7b": {
    question: "Solve the quadratic equation by completing the square: \\(p^2 - 6p - 3 = 0\\).",
    correct: "p = 3 \\pm 2\\sqrt{3}",
    distractors: ["p = -3 \\pm 2\\sqrt{3}", "p = 3 \\pm \\sqrt{12}", "p = 6 \\pm 2\\sqrt{3}"],
    steps: [
      { explanation: "Move the constant term to the right side.", workingOut: "p^2 - 6p = 3" },
      { explanation: "Add the square of half of -6 (i.e. (-3)^2 = 9) to both sides.", workingOut: "p^2 - 6p + 9 = 3 + 9 \\;\\Rightarrow\\; (p - 3)^2 = 12" },
      { explanation: "Take the square root of both sides.", workingOut: "p - 3 = \\pm\\sqrt{12} = \\pm 2\\sqrt{3}" },
      { explanation: "Solve for p.", workingOut: "p = 3 \\pm 2\\sqrt{3}" }
    ]
  },
  // q7c
  "y10-5g-q7c": {
    question: "Solve the quadratic equation by completing the square: \\(x^2 - 4x = 1\\).",
    correct: "x = 2 \\pm \\sqrt{5}",
    distractors: ["x = -2 \\pm \\sqrt{5}", "x = 2 \\pm \\sqrt{3}", "x = 4 \\pm \\sqrt{5}"],
    steps: [
      { explanation: "The equation is already rearranged. We plan to complete the square by adding (-2)^2 = 4.", workingOut: "x^2 - 4x = 1" },
      { explanation: "Add 4 to both sides of the equation.", workingOut: "x^2 - 4x + 4 = 1 + 4 \\;\\Rightarrow\\; (x - 2)^2 = 5" },
      { explanation: "Take the square root of both sides.", workingOut: "x - 2 = \\pm\\sqrt{5}" },
      { explanation: "Transpose 2 to solve for x.", workingOut: "x = 2 \\pm \\sqrt{5}" }
    ]
  },
  // q7d
  "y10-5g-q7d": {
    question: "Solve the quadratic equation by completing the square: \\(x^2 - 5x + 3 = 0\\).",
    correct: "x = \\dfrac{5 \\pm \\sqrt{13}}{2}",
    distractors: ["x = \\dfrac{-5 \\pm \\sqrt{13}}{2}", "x = \\dfrac{5 \\pm \\sqrt{7}}{2}", "x = 5 \\pm \\sqrt{13}"],
    steps: [
      { explanation: "Transpose the constant 3 to the right-hand side.", workingOut: "x^2 - 5x = -3" },
      { explanation: "Add the square of half of -5 (i.e. 25/4) to both sides.", workingOut: "x^2 - 5x + \\dfrac{25}{4} = -3 + \\dfrac{25}{4} \\;\\Rightarrow\\; \\left(x - \\dfrac{5}{2}\\right)^2 = \\dfrac{13}{4}" },
      { explanation: "Take the square root of both sides.", workingOut: "x - \\dfrac{5}{2} = \\pm\\dfrac{\\sqrt{13}}{2}" },
      { explanation: "Solve for x.", workingOut: "x = \\dfrac{5 \\pm \\sqrt{13}}{2}" }
    ]
  }
};

(async () => {
  try {
    console.log('[Ch5G Batch 3] Upgrading next 13 questions to strict MCQ...');
    let count = 0;
    for (const [id, target] of Object.entries(q5_q6_q7_questions)) {
      const { options, correctIndex } = shuffleOptions(target.correct, target.distractors);
      const ref = db.collection('questions').doc(id);

      const wrappedSteps = target.steps.map(step => ({
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
        topicId: "y10-5g",
        topicCode: "5G",
        topicTitle: "Revision",
        isManual: true,
        difficulty: "medium",
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
      count++;
    }
    console.log(`\nBatch 3 successfully migrated ${count} questions.`);
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
