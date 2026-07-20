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

const batch_questions = {
  // q10
  "y10-5g-q10": {
    question: "The height, \\( h \\) metres above sea level, to which a rocket rises \\( t \\) seconds after launch is given by \\( h = 80t - 5t^2 \\). Find the times at which the rocket is at a height of \\( 240 \\) m.",
    correct: "t = 4 \\text{ s or } t = 12 \\text{ s}",
    distractors: ["t = 6 \\text{ s or } t = 8 \\text{ s}", "t = 4 \\text{ s only}", "t = 5 \\text{ s or } t = 10 \\text{ s}"],
    steps: [
      { explanation: "We are given the equation for height. Set \\(h = 240\\) to establish the quadratic equation for time \\(t\\).", workingOut: "240 = 80t - 5t^2" },
      { explanation: "Transpose all terms to the left side and divide by 5 to simplify.", workingOut: "5t^2 - 80t + 240 = 0 \\;\\Rightarrow\\; t^2 - 16t + 48 = 0" },
      { explanation: "Factorise the quadratic trinomial by finding factors of 48 that sum to -16. The integers are -4 and -12.", workingOut: "(t - 4)(t - 12) = 0" },
      { explanation: "Apply the Null Factor Law. Explain that the rocket reaches 240m twice: once on the way up (t = 4s) and once on the way down (t = 12s).", workingOut: "t = 4 \\quad \\text{or} \\quad t = 12" }
    ]
  },
  // q11
  "y10-5g-q11": {
    question: "A sheet of cardboard \\( 20 \\) cm long and \\( 15 \\) cm wide has squares of side length \\( x \\) cm cut from each corner. The remaining sides are folded up to form an open box with a base area of \\( 150 \\text{ cm}^2 \\). Find \\( x \\).",
    correct: "x = 2.5 \\text{ cm}",
    distractors: ["x = 5 \\text{ cm}", "x = 1.5 \\text{ cm}", "x = 3 \\text{ cm}"],
    steps: [
      { explanation: "The new base dimensions of the folded box will be \\((20 - 2x)\\) cm and \\((15 - 2x)\\) cm. We plan to write an equation for the base area.", workingOut: "(20 - 2x)(15 - 2x) = 150" },
      { explanation: "Expand the left side of the equation.", workingOut: "300 - 40x - 30x + 4x^2 = 150 \\;\\Rightarrow\\; 4x^2 - 70x + 150 = 0" },
      { explanation: "Divide by the common factor 2 to simplify.", workingOut: "2x^2 - 35x + 75 = 0" },
      { explanation: "Factorise by splitting the middle term. Factors of a*c = 150 that sum to -35 are -30 and -5.", workingOut: "(2x - 5)(x - 15) = 0" },
      { explanation: "Solve for x. Since \\(x = 15\\) is physically impossible (as it exceeds the total width of 15 cm), we discard this root and keep \\(x = 2.5\\).", workingOut: "x = 2.5" }
    ]
  },
  // q12
  "y10-5g-q12": {
    question: "A square lawn is surrounded by a concrete path \\( 3 \\) m wide. If the area of the path is \\( 120 \\text{ m}^2 \\), find the length of a side of the lawn.",
    correct: "7 \\text{ m}",
    distractors: ["5 \\text{ m}", "10 \\text{ m}", "8 \\text{ m}"],
    steps: [
      { explanation: "Let the side length of the square lawn be \\( x \\) m. The outer side length including the path is \\( (x + 6) \\) m. We plan to write an equation where Outer Area minus Lawn Area equals Path Area.", workingOut: "(x + 6)^2 - x^2 = 120" },
      { explanation: "Expand the squared binomial.", workingOut: "x^2 + 12x + 36 - x^2 = 120" },
      { explanation: "Simplify the equation. The quadratic terms cancel out, leaving a linear relation.", workingOut: "12x + 36 = 120" },
      { explanation: "Isolate x to find the lawn's side length.", workingOut: "12x = 84 \\;\\Rightarrow\\; x = 7" }
    ]
  },
  // q13
  "y10-5g-q13": {
    question: "For the quadratic equation \\( x^2 + bx + 9 = 0 \\), find the values of \\( b \\) for which the equation has one repeated root.",
    correct: "b = \\pm 6",
    distractors: ["b = \\pm 3", "b = \\pm 9", "b = \\pm 12"],
    steps: [
      { explanation: "A quadratic equation has one repeated root if and only if its discriminant \\( \\Delta = b^2 - 4ac \\) is equal to zero.", workingOut: "\\Delta = b^2 - 4ac = 0" },
      { explanation: "Substitute the coefficients \\(a = 1\\) and \\(c = 9\\) into the discriminant expression.", workingOut: "b^2 - 4(1)(9) = 0 \\;\\Rightarrow\\; b^2 - 36 = 0" },
      { explanation: "Solve for b by taking the square root.", workingOut: "b^2 = 36 \\;\\Rightarrow\\; b = \\pm 6" }
    ]
  },
  // q14
  "y10-5g-q14": {
    question: "For the quadratic equation \\( ax^2 - 6x + 5 = 0 \\), find the value of \\( a \\) for which the equation has one repeated root.",
    correct: "a = \\dfrac{9}{5}",
    distractors: ["a = \\dfrac{5}{9}", "a = 9", "a = \\dfrac{3}{5}"],
    steps: [
      { explanation: "A quadratic equation has one repeated root when its discriminant \\( \\Delta = b^2 - 4ac \\) is equal to zero.", workingOut: "\\Delta = (-6)^2 - 4(a)(5) = 0" },
      { explanation: "Simplify the equation.", workingOut: "36 - 20a = 0" },
      { explanation: "Isolate the variable a.", workingOut: "20a = 36 \\;\\Rightarrow\\; a = \\dfrac{36}{20} = \\dfrac{9}{5}" }
    ]
  }
};

(async () => {
  try {
    console.log('[Ch5G Batch 5] Upgrading final 5 questions to strict MCQ...');
    let count = 0;
    for (const [id, target] of Object.entries(batch_questions)) {
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
    console.log(`\nBatch 5 successfully migrated ${count} questions.`);
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
