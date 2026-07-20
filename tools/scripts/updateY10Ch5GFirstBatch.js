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

const q1_q2_questions = {
  // q1a
  "y10-5g-q1a": {
    question: "Solve the quadratic equation: \\(x^2 = 25\\).",
    correct: "x = 5 \\text{ or } x = -5",
    distractors: ["x = 5 \\text{ only}", "x = -5 \\text{ only}", "x = 25 \\text{ or } x = -25"],
    steps: [
      { explanation: "Identify the simple quadratic equation. We plan to take the square root of both sides, keeping both positive and negative roots.", workingOut: "x^2 = 25" },
      { explanation: "Apply the square root operation to solve for x.", workingOut: "x = \\pm\\sqrt{25}" },
      { explanation: "Evaluate the square root of 25 to find the final two solutions.", workingOut: "x = 5 \\quad \\text{or} \\quad x = -5" }
    ]
  },
  // q1b
  "y10-5g-q1b": {
    question: "Solve the quadratic equation: \\(5x^2 = 45\\).",
    correct: "x = 3 \\text{ or } x = -3",
    distractors: ["x = 9 \\text{ or } x = -9", "x = 3 \\text{ only}", "x = 9 \\text{ only}"],
    steps: [
      { explanation: "Identify the equation. We plan to divide both sides by 5 first to isolate the squared term.", workingOut: "5x^2 = 45" },
      { explanation: "Divide both sides of the equation by 5.", workingOut: "x^2 = 9" },
      { explanation: "Take the square root of both sides, obtaining both positive and negative results.", workingOut: "x = \\pm\\sqrt{9} \\;\\Rightarrow\\; x = 3 \\quad \\text{or} \\quad x = -3" }
    ]
  },
  // q1c
  "y10-5g-q1c": {
    question: "Solve the quadratic equation: \\(3x^2 - 48 = 0\\).",
    correct: "x = 4 \\text{ or } x = -4",
    distractors: ["x = 16 \\text{ or } x = -16", "x = 4 \\text{ only}", "x = 8 \\text{ or } x = -8"],
    steps: [
      { explanation: "Identify the binomial equation. We plan to transpose -48 to the right side and isolate x^2.", workingOut: "3x^2 - 48 = 0" },
      { explanation: "Add 48 to both sides of the equation.", workingOut: "3x^2 = 48" },
      { explanation: "Divide by 3 to isolate the x^2 term.", workingOut: "x^2 = 16" },
      { explanation: "Take the square root of both sides to find the solutions.", workingOut: "x = \\pm\\sqrt{16} \\;\\Rightarrow\\; x = 4 \\quad \\text{or} \\quad x = -4" }
    ]
  },
  // q1d
  "y10-5g-q1d": {
    question: "Solve the quadratic equation: \\(9x^2 - 16 = 0\\).",
    correct: "x = \\dfrac{4}{3} \\text{ or } x = -\\dfrac{4}{3}",
    distractors: ["x = \\dfrac{16}{9} \\text{ or } x = -\\dfrac{16}{9}", "x = \\dfrac{4}{3} \\text{ only}", "x = \\dfrac{3}{4} \\text{ or } x = -\\dfrac{3}{4}"],
    steps: [
      { explanation: "We plan to transpose -16 and divide by 9 to isolate the variable squared.", workingOut: "9x^2 - 16 = 0" },
      { explanation: "Add 16 to both sides of the equation.", workingOut: "9x^2 = 16" },
      { explanation: "Divide by 9 to isolate the x^2 term.", workingOut: "x^2 = \\dfrac{16}{9}" },
      { explanation: "Take the square root of both sides.", workingOut: "x = \\pm\\sqrt{\\dfrac{16}{9}} \\;\\Rightarrow\\; x = \\dfrac{4}{3} \\quad \\text{or} \\quad x = -\\dfrac{4}{3}" }
    ]
  },
  // q1e
  "y10-5g-q1e": {
    question: "Solve the quadratic equation: \\(9x^2 - 1 = 0\\).",
    correct: "x = \\dfrac{1}{3} \\text{ or } x = -\\dfrac{1}{3}",
    distractors: ["x = 3 \\text{ or } x = -3", "x = \\dfrac{1}{9} \\text{ or } x = -\\dfrac{1}{9}", "x = \\dfrac{1}{3} \\text{ only}"],
    steps: [
      { explanation: "We plan to isolate x^2 by transposing the constant and dividing by the leading coefficient.", workingOut: "9x^2 - 1 = 0" },
      { explanation: "Add 1 to both sides of the relation.", workingOut: "9x^2 = 1" },
      { explanation: "Divide by 9 to solve for the squared term.", workingOut: "x^2 = \\dfrac{1}{9}" },
      { explanation: "Take the square root of both sides.", workingOut: "x = \\pm\\sqrt{\\dfrac{1}{9}} \\;\\Rightarrow\\; x = \\dfrac{1}{3} \\quad \\text{or} \\quad x = -\\dfrac{1}{3}" }
    ]
  },
  // q1f
  "y10-5g-q1f": {
    question: "Solve the quadratic equation: \\(8x^2 - 50 = 0\\).",
    correct: "x = \\dfrac{5}{2} \\text{ or } x = -\\dfrac{5}{2}",
    distractors: ["x = \\dfrac{25}{4} \\text{ or } x = -\\dfrac{25}{4}", "x = \\dfrac{5}{2} \\text{ only}", "x = \\dfrac{25}{8} \\text{ or } x = -\\dfrac{25}{8}"],
    steps: [
      { explanation: "We plan to transpose -50 and divide by 8 to isolate x^2.", workingOut: "8x^2 - 50 = 0" },
      { explanation: "Add 50 to both sides of the equation.", workingOut: "8x^2 = 50" },
      { explanation: "Divide by 8 and simplify the fraction.", workingOut: "x^2 = \\dfrac{50}{8} = \\dfrac{25}{4}" },
      { explanation: "Take the square root of both sides.", workingOut: "x = \\pm\\sqrt{\\dfrac{25}{4}} \\;\\Rightarrow\\; x = \\dfrac{5}{2} \\quad \\text{or} \\quad x = -\\dfrac{5}{2}" }
    ]
  },
  // q2a
  "y10-5g-q2a": {
    question: "Solve the quadratic equation: \\(6x^2 - 9x = 0\\).",
    correct: "x = 0 \\text{ or } x = \\dfrac{3}{2}",
    distractors: ["x = 0 \\text{ or } x = -\\dfrac{3}{2}", "x = \\dfrac{3}{2} \\text{ only}", "x = 0 \\text{ or } x = \\dfrac{2}{3}"],
    steps: [
      { explanation: "We plan to factorise the binomial by extracting the highest common factor.", workingOut: "6x^2 - 9x = 0" },
      { explanation: "Extract the common factor 3x from both terms.", workingOut: "3x(2x - 3) = 0" },
      { explanation: "Apply the Null Factor Law.", workingOut: "3x = 0 \\quad \\text{or} \\quad 2x - 3 = 0" },
      { explanation: "Solve both linear equations for x.", workingOut: "x = 0 \\quad \\text{or} \\quad x = \\dfrac{3}{2}" }
    ]
  },
  // q2b
  "y10-5g-q2b": {
    question: "Solve the quadratic equation: \\(16x^2 + 8x = 0\\).",
    correct: "x = 0 \\text{ or } x = -\\dfrac{1}{2}",
    distractors: ["x = 0 \\text{ or } x = \\dfrac{1}{2}", "x = -\\dfrac{1}{2} \\text{ only}", "x = 0 \\text{ or } x = -2"],
    steps: [
      { explanation: "We plan to factorise the binomial by extracting the highest common factor 8x.", workingOut: "16x^2 + 8x = 0" },
      { explanation: "Factor out the common term 8x from both terms.", workingOut: "8x(2x + 1) = 0" },
      { explanation: "Apply the Null Factor Law.", workingOut: "8x = 0 \\quad \\text{or} \\quad 2x + 1 = 0" },
      { explanation: "Solve both linear equations for x.", workingOut: "x = 0 \\quad \\text{or} \\quad x = -\\dfrac{1}{2}" }
    ]
  },
  // q2c
  "y10-5g-q2c": {
    question: "Solve the quadratic equation: \\(7x^2 - 2x = 0\\).",
    correct: "x = 0 \\text{ or } x = \\dfrac{2}{7}",
    distractors: ["x = 0 \\text{ or } x = -\\dfrac{2}{7}", "x = \\dfrac{2}{7} \\text{ only}", "x = 0 \\text{ or } x = \\dfrac{7}{2}"],
    steps: [
      { explanation: "Extract the highest common factor, which is x, from both terms.", workingOut: "7x^2 - 2x = 0" },
      { explanation: "Factor out the common term x.", workingOut: "x(7x - 2) = 0" },
      { explanation: "Apply the Null Factor Law to set factors to zero.", workingOut: "x = 0 \\quad \\text{or} \\quad 7x - 2 = 0" },
      { explanation: "Solve the second linear relation for x.", workingOut: "x = \\dfrac{2}{7}" }
    ]
  },
  // q2d
  "y10-5g-q2d": {
    question: "Solve the quadratic equation: \\(12x^2 = 4x\\).",
    correct: "x = 0 \\text{ or } x = \\dfrac{1}{3}",
    distractors: ["x = 0 \\text{ or } x = -\\dfrac{1}{3}", "x = \\dfrac{1}{3} \\text{ only}", "x = 0 \\text{ or } x = 3"],
    steps: [
      { explanation: "We plan to transpose 4x to the left-hand side so one side equals zero.", workingOut: "12x^2 = 4x" },
      { explanation: "Subtract 4x from both sides of the equation.", workingOut: "12x^2 - 4x = 0" },
      { explanation: "Factor out the highest common factor 4x from the binomial.", workingOut: "4x(3x - 1) = 0" },
      { explanation: "Apply the Null Factor Law.", workingOut: "4x = 0 \\quad \\text{or} \\quad 3x - 1 = 0 \\;\\Rightarrow\\; x = 0 \\quad \\text{or} \\quad x = \\dfrac{1}{3}" }
    ]
  },
  // q2e
  "y10-5g-q2e": {
    question: "Solve the quadratic equation: \\(10x = 35x^2\\).",
    correct: "x = 0 \\text{ or } x = \\dfrac{2}{7}",
    distractors: ["x = 0 \\text{ or } x = -\\dfrac{2}{7}", "x = \\dfrac{2}{7} \\text{ only}", "x = 0 \\text{ or } x = \\dfrac{7}{2}"],
    steps: [
      { explanation: "We plan to transpose 10x to the right-hand side to keep the quadratic term positive.", workingOut: "10x = 35x^2" },
      { explanation: "Subtract 10x from both sides of the equation.", workingOut: "0 = 35x^2 - 10x" },
      { explanation: "Factor out the highest common factor 5x from the binomial.", workingOut: "5x(7x - 2) = 0" },
      { explanation: "Apply the Null Factor Law to determine the roots.", workingOut: "5x = 0 \\quad \\text{or} \\quad 7x - 2 = 0 \\;\\Rightarrow\\; x = 0 \\quad \\text{or} \\quad x = \\dfrac{2}{7}" }
    ]
  },
  // q2f
  "y10-5g-q2f": {
    question: "Solve the quadratic equation: \\(-4x^2 - 20x = 0\\).",
    correct: "x = 0 \\text{ or } x = -5",
    distractors: ["x = 0 \\text{ or } x = 5", "x = -5 \\text{ only}", "x = 0 \\text{ or } x = -\\dfrac{1}{5}"],
    steps: [
      { explanation: "We plan to factor out the highest common factor including the negative coefficient.", workingOut: "-4x^2 - 20x = 0" },
      { explanation: "Factor out -4x from both terms of the binomial.", workingOut: "-4x(x + 5) = 0" },
      { explanation: "Apply the Null Factor Law to solve for the roots.", workingOut: "-4x = 0 \\quad \\text{or} \\quad x + 5 = 0 \\;\\Rightarrow\\; x = 0 \\quad \\text{or} \\quad x = -5" }
    ]
  },
  // q2g
  "y10-5g-q2g": {
    question: "Solve the quadratic equation: \\(15x - 3x^2 = 0\\).",
    correct: "x = 0 \\text{ or } x = 5",
    distractors: ["x = 0 \\text{ or } x = -5", "x = 5 \\text{ only}", "x = 0 \\text{ or } x = \\dfrac{1}{5}"],
    steps: [
      { explanation: "We plan to extract the common factor 3x.", workingOut: "15x - 3x^2 = 0" },
      { explanation: "Factor out 3x from the expression.", workingOut: "3x(5 - x) = 0" },
      { explanation: "Apply the Null Factor Law.", workingOut: "3x = 0 \\quad \\text{or} \\quad 5 - x = 0 \\;\\Rightarrow\\; x = 0 \\quad \\text{or} \\quad x = 5" }
    ]
  },
  // q2h
  "y10-5g-q2h": {
    question: "Solve the quadratic equation: \\(\\dfrac{1}{3}x^2 - 4x = 0\\).",
    correct: "x = 0 \\text{ or } x = 12",
    distractors: ["x = 0 \\text{ or } x = -12", "x = 0 \\text{ or } x = 4", "x = 12 \\text{ only}"],
    steps: [
      { explanation: "We plan to multiply all terms by 3 to clear the fraction.", workingOut: "\\dfrac{1}{3}x^2 - 4x = 0" },
      { explanation: "Multiply both sides of the equation by 3.", workingOut: "x^2 - 12x = 0" },
      { explanation: "Factor out the common term x.", workingOut: "x(x - 12) = 0" },
      { explanation: "Apply the Null Factor Law to find both roots.", workingOut: "x = 0 \\quad \\text{or} \\quad x - 12 = 0 \\;\\Rightarrow\\; x = 0 \\quad \\text{or} \\quad x = 12" }
    ]
  },
  // q2i
  "y10-5g-q2i": {
    question: "Solve the quadratic equation: \\(18x^2 = -3x\\).",
    correct: "x = 0 \\text{ or } x = -\\dfrac{1}{6}",
    distractors: ["x = 0 \\text{ or } x = \\dfrac{1}{6}", "x = -\\dfrac{1}{6} \\text{ only}", "x = 0 \\text{ or } x = -6"],
    steps: [
      { explanation: "We plan to transpose -3x to the left-hand side.", workingOut: "18x^2 = -3x" },
      { explanation: "Add 3x to both sides of the equation.", workingOut: "18x^2 + 3x = 0" },
      { explanation: "Factorise the common factor 3x.", workingOut: "3x(6x + 1) = 0" },
      { explanation: "Apply the Null Factor Law.", workingOut: "3x = 0 \\quad \\text{or} \\quad 6x + 1 = 0 \\;\\Rightarrow\\; x = 0 \\quad \\text{or} \\quad x = -\\dfrac{1}{6}" }
    ]
  }
};

(async () => {
  try {
    console.log('[Ch5G Batch 1] Upgrading first 15 questions to strict MCQ...');
    let count = 0;
    for (const [id, target] of Object.entries(q1_q2_questions)) {
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
    console.log(`\nBatch 1 successfully migrated ${count} questions.`);
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
