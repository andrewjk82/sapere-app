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

const ch5b_questions = {
  // Existing Q1 (FCvBZHU5LbTANyghKsjY) -> Upgraded to strict format
  "y10-5b-q1": {
    question: "Factorise the quadratic expression: \\(100 - 9x^2\\).",
    correct: "(10 - 3x)(10 + 3x)",
    distractors: ["(10 - 3x)^2", "(10 - 9x)(10 + x)", "(3x - 10)(3x + 10)"],
    steps: [
      { explanation: "Identify the structure of the quadratic binomial expression. We plan to apply the difference of two squares identity, which states that \\(a^2 - b^2 = (a - b)(a + b)\\).", workingOut: "100 - 9x^2" },
      { explanation: "Rewrite both terms as perfect squares of their factors: 100 is \\(10^2\\) and \\(9x^2\\) is \\((3x)^2\\).", workingOut: "10^2 - (3x)^2" },
      { explanation: "Apply the difference of two squares identity to complete the factorisation.", workingOut: "(10 - 3x)(10 + 3x)" }
    ],
    hint: "Recognise the expression as a difference of two squares: \\(a^2 - b^2 = (a-b)(a+b)\\)."
  },
  // Existing Q2 (mHQkfJwdFxrWlt5TP7H0) -> Upgraded to strict format
  "y10-5b-q2": {
    question: "Factorise the trinomial expression: \\(m^2 + 4m - 32\\).",
    correct: "(m + 8)(m - 4)",
    distractors: ["(m + 16)(m - 2)", "(m + 4)(m - 8)", "(m - 4)(m - 8)"],
    steps: [
      { explanation: "Examine the quadratic trinomial. We plan to find two integers that multiply to the constant term -32 and add up to the linear coefficient 4.", workingOut: "m^2 + 4m - 32" },
      { explanation: "Identify the integer factors of -32. The numbers 8 and -4 satisfy both conditions.", workingOut: "8 \\times (-4) = -32 \\quad \\text{and} \\quad 8 + (-4) = 4" },
      { explanation: "Rewrite the trinomial in factorised form using these two numbers.", workingOut: "(m + 8)(m - 4)" }
    ],
    hint: "Find two numbers that multiply to \\(-32\\) and add up to \\(4\\)."
  },
  // New Q3 (Rearranging to standard form)
  "y10-5b-q3": {
    question: "Rearrange the quadratic equation \\(3x(x - 2) = 8 - x\\) into standard form \\(ax^2 + bx + c = 0\\), and state the values of \\(a\\), \\(b\\), and \\(c\\).",
    correct: "3x^2 - 5x - 8 = 0 \\quad (a = 3, \\; b = -5, \\; c = -8)",
    distractors: [
      "3x^2 - 7x - 8 = 0 \\quad (a = 3, \\; b = -7, \\; c = -8)",
      "3x^2 - 5x + 8 = 0 \\quad (a = 3, \\; b = -5, \\; c = 8)",
      "3x^2 + 5x - 8 = 0 \\quad (a = 3, \\; b = 5, \\; c = -8)"
    ],
    steps: [
      { explanation: "Identify the equation. We plan to expand the brackets on the left-hand side first to simplify the terms.", workingOut: "3x(x - 2) = 8 - x" },
      { explanation: "Distribute the term \\(3x\\) across the brackets.", workingOut: "3x^2 - 6x = 8 - x" },
      { explanation: "Transpose all terms to the left-hand side by adding \\(x\\) and subtracting 8 to set the right-hand side to zero.", workingOut: "3x^2 - 6x + x - 8 = 0" },
      { explanation: "Combine the linear like terms to obtain the final standard form equation.", workingOut: "3x^2 - 5x - 8 = 0" }
    ],
    hint: "Expand the bracket on the left side first, then transpose all terms to the left side."
  },
  // New Q4 (Rearranging to standard form)
  "y10-5b-q4": {
    question: "Solve the equation by first rearranging it into standard form: \\(x(x + 5) = 2(3x + 10)\\).",
    correct: "x = 5 \\text{ or } x = -4",
    distractors: ["x = -5 \\text{ or } x = 4", "x = 5 \\text{ or } x = 4", "x = -5 \\text{ or } x = -4"],
    steps: [
      { explanation: "Identify the quadratic equation. We plan to expand both sides of the relation to simplify the terms.", workingOut: "x(x + 5) = 2(3x + 10)" },
      { explanation: "Expand both brackets independently.", workingOut: "x^2 + 5x = 6x + 20" },
      { explanation: "Transpose all terms to the left-hand side to equal the equation to zero.", workingOut: "x^2 + 5x - 6x - 20 = 0 \\;\\Rightarrow\\; x^2 - x - 20 = 0" },
      { explanation: "Factorise the resulting standard quadratic trinomial.", workingOut: "(x - 5)(x + 4) = 0" },
      { explanation: "Apply the Null Factor Law to determine the final roots.", workingOut: "x = 5 \\quad \\text{or} \\quad x = -4" }
    ],
    hint: "Expand both sides, group all terms on the left side, and factorise the resulting trinomial."
  },
  // New Q5 (Rearranging to standard form)
  "y10-5b-q5": {
    question: "Rearrange the equation \\(\\dfrac{x + 2}{x} = 2x - 1\\) into standard form \\(ax^2 + bx + c = 0\\).",
    correct: "2x^2 - 2x - 2 = 0",
    distractors: ["2x^2 - 2x + 2 = 0", "2x^2 - x - 2 = 0", "2x^2 + 2x - 2 = 0"],
    steps: [
      { explanation: "We plan to multiply the entire equation by the denominator \\(x\\) to clear the fraction.", workingOut: "\\dfrac{x + 2}{x} = 2x - 1" },
      { explanation: "Multiply both sides of the equation by \\(x\\) (where \\(x \\neq 0\\)).", workingOut: "x + 2 = x(2x - 1)" },
      { explanation: "Expand the right-hand side binomial.", workingOut: "x + 2 = 2x^2 - x" },
      { explanation: "Transpose all terms to the right side to keep the leading quadratic coefficient positive.", workingOut: "0 = 2x^2 - x - x - 2 \\;\\Rightarrow\\; 2x^2 - 2x - 2 = 0" }
    ],
    hint: "Multiply both sides of the equation by the denominator \\(x\\) first, then transpose all terms."
  }
};

(async () => {
  try {
    console.log('[Ch5B Migration] Rebuilding and expanding 5B questions...');

    // Delete legacy docs to prevent duplicates
    console.log('  Deleting old 5B documents...');
    const snap = await db.collection('questions').where('topicId', '==', 'y10-5b').get();
    for (const d of snap.docs) {
      await db.collection('questions').doc(d.id).delete();
    }

    // Set new clean docs
    for (const [id, target] of Object.entries(ch5b_questions)) {
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
        topicId: "y10-5b",
        topicCode: "5B",
        topicTitle: "Rearranging to standard form",
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
        hint: target.hint,
        hintText: target.hint,
        isNew: true,
        createdAt: new Date(),
        updatedAt: new Date()
      });
      console.log(`  [UPDATED & SYNCD] ${id} -> Correct Index: ${correctIndex}`);
    }

    console.log('\nChapter 5B migration successfully completed.');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
