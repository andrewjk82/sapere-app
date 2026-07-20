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

const q3_q4_questions = {
  // q3a
  "y10-5g-q3a": {
    question: "Solve the quadratic equation by factorising: \\(m^2 - m - 20 = 0\\).",
    correct: "m = 5 \\text{ or } m = -4",
    distractors: ["m = -5 \\text{ or } m = 4", "m = 5 \\text{ or } m = 4", "m = -5 \\text{ or } m = -4"],
    steps: [
      { explanation: "We plan to find two integers that multiply to -20 and sum to -1.", workingOut: "m^2 - m - 20 = 0" },
      { explanation: "Identify the factors of -20. The numbers are -5 and 4.", workingOut: "-5 \\times 4 = -20 \\quad \\text{and} \\quad -5 + 4 = -1" },
      { explanation: "Factorise the trinomial.", workingOut: "(m - 5)(m + 4) = 0" },
      { explanation: "Apply the Null Factor Law to determine the roots.", workingOut: "m = 5 \\quad \\text{or} \\quad m = -4" }
    ]
  },
  // q3b
  "y10-5g-q3b": {
    question: "Solve the quadratic equation by factorising: \\(p^2 + 7p + 10 = 0\\).",
    correct: "p = -2 \\text{ or } p = -5",
    distractors: ["p = 2 \\text{ or } p = 5", "p = -2 \\text{ or } p = 5", "p = 2 \\text{ or } p = -5"],
    steps: [
      { explanation: "We plan to find two integers that multiply to 10 and sum to 7.", workingOut: "p^2 + 7p + 10 = 0" },
      { explanation: "Identify the factors of 10. The numbers are 2 and 5.", workingOut: "2 \\times 5 = 10 \\quad \\text{and} \\quad 2 + 5 = 7" },
      { explanation: "Factorise the quadratic expression.", workingOut: "(p + 2)(p + 5) = 0" },
      { explanation: "Apply the Null Factor Law.", workingOut: "p = -2 \\quad \\text{or} \\quad p = -5" }
    ]
  },
  // q3c
  "y10-5g-q3c": {
    question: "Solve the quadratic equation by factorising: \\(k^2 + 3k - 18 = 0\\).",
    correct: "k = 3 \\text{ or } k = -6",
    distractors: ["k = -3 \\text{ or } k = 6", "k = 3 \\text{ or } k = 6", "k = -3 \\text{ or } k = -6"],
    steps: [
      { explanation: "We plan to find factors of -18 that sum to 3.", workingOut: "k^2 + 3k - 18 = 0" },
      { explanation: "Determine the factors of -18. The numbers are 6 and -3.", workingOut: "6 \\times (-3) = -18 \\quad \\text{and} \\quad 6 + (-3) = 3" },
      { explanation: "Factorise the trinomial equation.", workingOut: "(k - 3)(k + 6) = 0" },
      { explanation: "Apply the Null Factor Law to determine the roots.", workingOut: "k = 3 \\quad \\text{or} \\quad k = -6" }
    ]
  },
  // q3d
  "y10-5g-q3d": {
    question: "Solve the quadratic equation by factorising: \\(y^2 - 2y - 8 = 0\\).",
    correct: "y = 4 \\text{ or } y = -2",
    distractors: ["y = -4 \\text{ or } y = 2", "y = 4 \\text{ or } y = 2", "y = -4 \\text{ or } y = -2"],
    steps: [
      { explanation: "We plan to find two factors of -8 that sum to -2.", workingOut: "y^2 - 2y - 8 = 0" },
      { explanation: "Determine the factors of -8. The integers are -4 and 2.", workingOut: "-4 \\times 2 = -8 \\quad \\text{and} \\quad -4 + 2 = -2" },
      { explanation: "Factorise the quadratic expression.", workingOut: "(y - 4)(y + 2) = 0" },
      { explanation: "Apply the Null Factor Law.", workingOut: "y = 4 \\quad \\text{or} \\quad y = -2" }
    ]
  },
  // q3e
  "y10-5g-q3e": {
    question: "Solve the quadratic equation: \\(x^2 - 10x + 25 = 0\\).",
    correct: "x = 5 \\text{ only}",
    distractors: ["x = -5 \\text{ only}", "x = 5 \\text{ or } x = -5", "x = 0 \\text{ or } x = 10"],
    steps: [
      { explanation: "Observe the perfect square trinomial structure.", workingOut: "x^2 - 10x + 25 = 0" },
      { explanation: "Factorise the expression as a perfect square.", workingOut: "(x - 5)^2 = 0" },
      { explanation: "Apply the Null Factor Law.", workingOut: "x - 5 = 0 \\;\\Rightarrow\\; x = 5" }
    ]
  },
  // q3f
  "y10-5g-q3f": {
    question: "Solve the quadratic equation: \\(c^2 - 4c = 21\\).",
    correct: "c = 7 \\text{ or } c = -3",
    distractors: ["c = -7 \\text{ or } c = 3", "c = 7 \\text{ or } c = 3", "c = -7 \\text{ or } c = -3"],
    steps: [
      { explanation: "Transpose 21 to the left side to equal the relation to zero.", workingOut: "c^2 - 4c - 21 = 0" },
      { explanation: "Find factors of -21 that sum to -4. The integers are -7 and 3.", workingOut: "-7 \\times 3 = -21 \\quad \\text{and} \\quad -7 + 3 = -4" },
      { explanation: "Factorise the binomials.", workingOut: "(c - 7)(c + 3) = 0" },
      { explanation: "Apply the Null Factor Law.", workingOut: "c = 7 \\quad \\text{or} \\quad c = -3" }
    ]
  },
  // q4a
  "y10-5g-q4a": {
    question: "Solve the quadratic equation by factorising: \\(2x^2 - 13x + 15 = 0\\).",
    correct: "x = \\dfrac{3}{2} \\text{ or } x = 5",
    distractors: ["x = -\\dfrac{3}{2} \\text{ or } x = -5", "x = \\dfrac{3}{2} \\text{ or } x = -5", "x = -\\dfrac{3}{2} \\text{ or } x = 5"],
    steps: [
      { explanation: "Identify the non-monic quadratic trinomial. We plan to split the middle term using factors of a*c = 30 that sum to -13.", workingOut: "2x^2 - 13x + 15 = 0" },
      { explanation: "The two negative integers are -3 and -10. Split the middle term.", workingOut: "2x^2 - 10x - 3x + 15 = 0" },
      { explanation: "Factorise by grouping.", workingOut: "2x(x - 5) - 3(x - 5) = 0 \\;\\Rightarrow\\; (2x - 3)(x - 5) = 0" },
      { explanation: "Apply the Null Factor Law.", workingOut: "2x - 3 = 0 \\quad \\text{or} \\quad x - 5 = 0 \\;\\Rightarrow\\; x = \\dfrac{3}{2} \\quad \\text{or} \\quad x = 5" }
    ]
  },
  // q4b
  "y10-5g-q4b": {
    question: "Solve the quadratic equation by factorising: \\(4y^2 - 16y + 15 = 0\\).",
    correct: "y = \\dfrac{3}{2} \\text{ or } y = \\dfrac{5}{2}",
    distractors: ["y = -\\dfrac{3}{2} \\text{ or } y = -\\dfrac{5}{2}", "y = \\dfrac{2}{3} \\text{ or } y = \\dfrac{2}{5}", "y = \\dfrac{3}{2} \\text{ or } y = -\\dfrac{5}{2}"],
    steps: [
      { explanation: "Identify the non-monic quadratic trinomial. We plan to find factors of a*c = 60 that sum to -16.", workingOut: "4y^2 - 16y + 15 = 0" },
      { explanation: "The negative factors are -6 and -10. Split the middle term.", workingOut: "4y^2 - 6y - 10y + 15 = 0" },
      { explanation: "Factorise by grouping.", workingOut: "2y(2y - 3) - 5(2y - 3) = 0 \\;\\Rightarrow\\; (2y - 5)(2y - 3) = 0" },
      { explanation: "Apply the Null Factor Law.", workingOut: "2y - 5 = 0 \\quad \\text{or} \\quad 2y - 3 = 0 \\;\\Rightarrow\\; y = \\dfrac{5}{2} \\quad \\text{or} \\quad y = \\dfrac{3}{2}" }
    ]
  },
  // q4c
  "y10-5g-q4c": {
    question: "Solve: \\(-2x^2 - 15x + 8 = 0\\).",
    correct: "x = \\dfrac{1}{2} \\text{ or } x = -8",
    distractors: ["x = -\\dfrac{1}{2} \\text{ or } x = 8", "x = \\dfrac{1}{2} \\text{ or } x = 8", "x = -\\dfrac{1}{2} \\text{ or } x = -8"],
    steps: [
      { explanation: "Multiply the entire equation by -1 to make the leading coefficient positive.", workingOut: "2x^2 + 15x - 8 = 0" },
      { explanation: "Find factors of a*c = -16 that sum to b = 15. The integers are 16 and -1. Split the middle term.", workingOut: "2x^2 + 16x - x - 8 = 0" },
      { explanation: "Factorise by grouping.", workingOut: "2x(x + 8) - 1(x + 8) = 0 \\;\\Rightarrow\\; (2x - 1)(x + 8) = 0" },
      { explanation: "Apply the Null Factor Law.", workingOut: "2x - 1 = 0 \\quad \\text{or} \\quad x + 8 = 0 \\;\\Rightarrow\\; x = \\dfrac{1}{2} \\quad \\text{or} \\quad x = -8" }
    ]
  },
  // q4d
  "y10-5g-q4d": {
    question: "Solve: \\(6y^2 + 15 = -19y\\).",
    correct: "y = -\\dfrac{5}{3} \\text{ or } y = -\\dfrac{3}{2}",
    distractors: ["y = \\dfrac{5}{3} \\text{ or } y = \\dfrac{3}{2}", "y = -\\dfrac{5}{3} \\text{ or } y = \\dfrac{3}{2}", "y = \\dfrac{5}{3} \\text{ or } y = -\\dfrac{3}{2}"],
    steps: [
      { explanation: "Transpose -19y to the left side to write the equation in standard form.", workingOut: "6y^2 + 19y + 15 = 0" },
      { explanation: "Find factors of a*c = 90 that sum to 19. The integers are 9 and 10. Split the middle term.", workingOut: "6y^2 + 9y + 10y + 15 = 0" },
      { explanation: "Factorise by grouping.", workingOut: "3y(2y + 3) + 5(2y + 3) = 0 \\;\\Rightarrow\\; (3y + 5)(2y + 3) = 0" },
      { explanation: "Apply the Null Factor Law.", workingOut: "3y + 5 = 0 \\quad \\text{or} \\quad 2y + 3 = 0 \\;\\Rightarrow\\; y = -\\dfrac{5}{3} \\quad \\text{or} \\quad y = -\\dfrac{3}{2}" }
    ]
  },
  // q4e
  "y10-5g-q4e": {
    question: "Solve: \\(5x^2 - 4x - 1 = 0\\).",
    correct: "x = 1 \\text{ or } x = -\\dfrac{1}{5}",
    distractors: ["x = -1 \\text{ or } x = \\dfrac{1}{5}", "x = 1 \\text{ or } x = \\dfrac{1}{5}", "x = -1 \\text{ or } x = -\\dfrac{1}{5}"],
    steps: [
      { explanation: "Observe the non-monic quadratic. We plan to find factors of a*c = -5 that sum to -4.", workingOut: "5x^2 - 4x - 1 = 0" },
      { explanation: "The factors are -5 and 1. Split the middle term.", workingOut: "5x^2 - 5x + x - 1 = 0" },
      { explanation: "Factorise by grouping.", workingOut: "5x(x - 1) + 1(x - 1) = 0 \\;\\Rightarrow\\; (5x + 1)(x - 1) = 0" },
      { explanation: "Apply the Null Factor Law.", workingOut: "5x + 1 = 0 \\quad \\text{or} \\quad x - 1 = 0 \\;\\Rightarrow\\; x = -\\dfrac{1}{5} \\quad \\text{or} \\quad x = 1" }
    ]
  },
  // q4f
  "y10-5g-q4f": {
    question: "Solve: \\(10x^2 + 9x = 9\\).",
    correct: "x = \\dfrac{3}{5} \\text{ or } x = -\\dfrac{3}{2}",
    distractors: ["x = -\\dfrac{3}{5} \\text{ or } x = \\dfrac{3}{2}", "x = \\dfrac{3}{5} \\text{ or } x = \\dfrac{3}{2}", "x = -\\dfrac{3}{5} \\text{ or } x = -\\dfrac{3}{2}"],
    steps: [
      { explanation: "Transpose 9 to the left side.", workingOut: "10x^2 + 9x - 9 = 0" },
      { explanation: "Find factors of a*c = -90 that sum to 9. The integers are 15 and -6. Split the middle term.", workingOut: "10x^2 + 15x - 6x - 9 = 0" },
      { explanation: "Factorise by grouping.", workingOut: "5x(2x + 3) - 3(2x + 3) = 0 \\;\\Rightarrow\\; (5x - 3)(2x + 3) = 0" },
      { explanation: "Apply the Null Factor Law.", workingOut: "5x - 3 = 0 \\quad \\text{or} \\quad 2x + 3 = 0 \\;\\Rightarrow\\; x = \\dfrac{3}{5} \\quad \\text{or} \\quad x = -\\dfrac{3}{2}" }
    ]
  },
  // q4g
  "y10-5g-q4g": {
    question: "Solve the quadratic equation: \\(-3x^2 - 5x + 12 = 0\\).",
    correct: "x = \\dfrac{4}{3} \\text{ or } x = -3",
    distractors: ["x = -\\dfrac{4}{3} \\text{ or } x = 3", "x = \\dfrac{4}{3} \\text{ or } x = 3", "x = -\\dfrac{4}{3} \\text{ or } x = -3"],
    steps: [
      { explanation: "Multiply the entire equation by -1 to make the leading coefficient positive.", workingOut: "3x^2 + 5x - 12 = 0" },
      { explanation: "Find factors of a*c = -36 that sum to 5. The integers are 9 and -4. Split the middle term.", workingOut: "3x^2 + 9x - 4x - 12 = 0" },
      { explanation: "Factorise by grouping.", workingOut: "3x(x + 3) - 4(x + 3) = 0 \\;\\Rightarrow\\; (3x - 4)(x + 3) = 0" },
      { explanation: "Apply the Null Factor Law.", workingOut: "3x - 4 = 0 \\quad \\text{or} \\quad x + 3 = 0 \\;\\Rightarrow\\; x = \\dfrac{4}{3} \\quad \\text{or} \\quad x = -3" }
    ]
  },
  // q4h
  "y10-5g-q4h": {
    question: "Solve the quadratic equation: \\(2x^2 = 16x - 32\\).",
    correct: "x = 4 \\text{ only}",
    distractors: ["x = -4 \\text{ only}", "x = 4 \\text{ or } x = -4", "x = 0 \\text{ or } x = 8"],
    steps: [
      { explanation: "Transpose all terms to the left-hand side.", workingOut: "2x^2 - 16x + 32 = 0" },
      { explanation: "Divide all terms of the equation by the common factor 2 to simplify.", workingOut: "x^2 - 8x + 16 = 0" },
      { explanation: "Factorise the perfect square trinomial.", workingOut: "(x - 4)^2 = 0" },
      { explanation: "Apply the Null Factor Law.", workingOut: "x - 4 = 0 \\;\\Rightarrow\\; x = 4" }
    ]
  }
};

(async () => {
  try {
    console.log('[Ch5G Batch 2] Upgrading next 14 questions to strict MCQ...');
    let count = 0;
    for (const [id, target] of Object.entries(q3_q4_questions)) {
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
    console.log(`\nBatch 2 successfully migrated ${count} questions.`);
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
