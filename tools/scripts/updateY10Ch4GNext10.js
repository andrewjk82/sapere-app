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

const updates = {
  // 1. y10-4g-q4f
  "y10-4g-q4f": {
    question: "Identify the gradient (\\(m\\)) and \\(y\\)-intercept (\\(c\\)) of the line: \\(4x - 3y = 12\\).",
    correct: "m = \\dfrac{4}{3}, \\; c = -4",
    distractors: [
      "m = -\\dfrac{4}{3}, \\; c = 4",
      "m = 4, \\; c = -12",
      "m = \\dfrac{3}{4}, \\; c = -4"
    ],
    solutionSteps: [
      {
        explanation: "To easily determine the gradient and vertical intercept, rearrange the linear equation into gradient-intercept form (y = mx + c).",
        workingOut: "4x - 3y = 12"
      },
      {
        explanation: "Subtract 4x from both sides of the equation.",
        workingOut: "-3y = -4x + 12"
      },
      {
        explanation: "Divide all terms on both sides by -3 to isolate y.",
        workingOut: "y = \\dfrac{4}{3}x - 4"
      },
      {
        explanation: "Identify m and c by comparing the equation with y = mx + c.",
        workingOut: "m = \\dfrac{4}{3}, \\; c = -4"
      }
    ]
  },
  // 2. y10-4g-q5a_i
  "y10-4g-q5a_i": {
    question: "Find the gradient of a line that is parallel to the line: \\(y = 2x + 1\\).",
    correct: "2",
    distractors: ["-2", "\\dfrac{1}{2}", "-\\dfrac{1}{2}"],
    solutionSteps: [
      {
        explanation: "The equation is already in gradient-intercept form y = mx + c. Identify its gradient.",
        workingOut: "y = 2x + 1 \\;\\Rightarrow\\; m_1 = 2"
      },
      {
        explanation: "Parallel lines have identical gradients (m_2 = m_1).",
        workingOut: "m_2 = m_1"
      },
      {
        explanation: "Therefore, the gradient of the parallel line is 2.",
        workingOut: "m = 2"
      }
    ]
  },
  // 3. y10-4g-q5a_ii
  "y10-4g-q5a_ii": {
    question: "Find the gradient of a line that is perpendicular to the line: \\(y = 2x + 1\\).",
    correct: "-\\dfrac{1}{2}",
    distractors: ["\\dfrac{1}{2}", "-2", "2"],
    solutionSteps: [
      {
        explanation: "Identify the gradient of the original line y = 2x + 1.",
        workingOut: "m_1 = 2"
      },
      {
        explanation: "The gradient of a perpendicular line is the negative reciprocal of the original gradient.",
        workingOut: "m_2 = -\\dfrac{1}{m_1}"
      },
      {
        explanation: "Substitute m_1 = 2 into the formula to find the perpendicular gradient.",
        workingOut: "m = -\\dfrac{1}{2}"
      }
    ]
  },
  // 4. y10-4g-q5b_i
  "y10-4g-q5b_i": {
    question: "Find the gradient of a line that is parallel to the line: \\(y = 3 - 4x\\).",
    correct: "-4",
    distractors: ["4", "\\dfrac{1}{4}", "-\\dfrac{1}{4}"],
    solutionSteps: [
      {
        explanation: "Identify the gradient by looking at the coefficient of x in the equation y = 3 - 4x.",
        workingOut: "m_1 = -4"
      },
      {
        explanation: "Since parallel lines have the same gradient, the required gradient is also -4.",
        workingOut: "m = -4"
      }
    ]
  },
  // 5. y10-4g-q5b_ii
  "y10-4g-q5b_ii": {
    question: "Find the gradient of a line that is perpendicular to the line: \\(y = 3 - 4x\\).",
    correct: "\\dfrac{1}{4}",
    distractors: ["-\\dfrac{1}{4}", "4", "-4"],
    solutionSteps: [
      {
        explanation: "Identify the gradient of the original line y = 3 - 4x.",
        workingOut: "m_1 = -4"
      },
      {
        explanation: "Perpendicular gradients multiply to give -1. Hence, calculate the negative reciprocal.",
        workingOut: "m_2 = -\\dfrac{1}{m_1} = -\\dfrac{1}{-4}"
      },
      {
        explanation: "Simplify the fraction.",
        workingOut: "m = \\dfrac{1}{4}"
      }
    ]
  },
  // 6. y10-4g-q5c_i
  "y10-4g-q5c_i": {
    question: "Find the gradient of a line that is parallel to the line: \\(y = \\dfrac{1}{3}x + 2\\).",
    correct: "\\dfrac{1}{3}",
    distractors: ["-\\dfrac{1}{3}", "3", "-3"],
    solutionSteps: [
      {
        explanation: "Identify the gradient of the given line.",
        workingOut: "m_1 = \\dfrac{1}{3}"
      },
      {
        explanation: "Since parallel lines share the exact same slope, the gradient is 1/3.",
        workingOut: "m = \\dfrac{1}{3}"
      }
    ]
  },
  // 7. y10-4g-q5c_ii
  "y10-4g-q5c_ii": {
    question: "Find the gradient of a line that is perpendicular to the line: \\(y = \\dfrac{1}{3}x + 2\\).",
    correct: "-3",
    distractors: ["3", "\\dfrac{1}{3}", "-\\dfrac{1}{3}"],
    solutionSteps: [
      {
        explanation: "Identify the gradient of the given line.",
        workingOut: "m_1 = \\dfrac{1}{3}"
      },
      {
        explanation: "The perpendicular gradient is the negative reciprocal of 1/3.",
        workingOut: "m_2 = -\\dfrac{1}{m_1} = -\\dfrac{1}{1/3}"
      },
      {
        explanation: "Simplify the expression to find the final gradient.",
        workingOut: "m = -3"
      }
    ]
  },
  // 8. y10-4g-q5d_i
  "y10-4g-q5d_i": {
    question: "Find the gradient of a line that is parallel to the line: \\(y = -\\dfrac{3}{4}x + 1\\).",
    correct: "-\\dfrac{3}{4}",
    distractors: ["\\dfrac{3}{4}", "\\dfrac{4}{3}", "-\\dfrac{4}{3}"],
    solutionSteps: [
      {
        explanation: "Identify the slope from the coefficient of x.",
        workingOut: "m_1 = -\\dfrac{3}{4}"
      },
      {
        explanation: "Parallel lines have the same gradient.",
        workingOut: "m = -\\dfrac{3}{4}"
      }
    ]
  },
  // 9. y10-4g-q5d_ii
  "y10-4g-q5d_ii": {
    question: "Find the gradient of a line that is perpendicular to the line: \\(y = -\\dfrac{3}{4}x + 1\\).",
    correct: "\\dfrac{4}{3}",
    distractors: ["-\\dfrac{4}{3}", "-\\dfrac{3}{4}", "\\dfrac{3}{4}"],
    solutionSteps: [
      {
        explanation: "Find the gradient of the given line.",
        workingOut: "m_1 = -\\dfrac{3}{4}"
      },
      {
        explanation: "Perpendicular gradient is the negative reciprocal.",
        workingOut: "m_2 = -\\dfrac{1}{m_1} = -\\dfrac{1}{-3/4}"
      },
      {
        explanation: "Simplify the double fraction.",
        workingOut: "m = \\dfrac{4}{3}"
      }
    ]
  },
  // 10. y10-4g-q6a
  "y10-4g-q6a": {
    question: "Find the \\(x\\) and \\(y\\) intercepts of the line: \\(y = 3x + 2\\).",
    correct: "x = -\\dfrac{2}{3}, \\; y = 2",
    distractors: [
      "x = \\dfrac{2}{3}, \\; y = -2",
      "x = -2, \\; y = 3",
      "x = -\\dfrac{3}{2}, \\; y = 2"
    ],
    solutionSteps: [
      {
        explanation: "To find the y-intercept, substitute x = 0 into the equation.",
        workingOut: "y = 3(0) + 2 \\;\\Rightarrow\\; y = 2"
      },
      {
        explanation: "To find the x-intercept, substitute y = 0 and solve for x.",
        workingOut: "0 = 3x + 2 \\;\\Rightarrow\\; 3x = -2"
      },
      {
        explanation: "Divide by 3 to find x.",
        workingOut: "x = -\\dfrac{2}{3}"
      }
    ]
  }
};

(async () => {
  try {
    console.log('[4G Next 10 Migration] Overwriting targets...');
    for (const [id, update] of Object.entries(updates)) {
      const { options, correctIndex } = shuffleOptions(update.correct, update.distractors);
      
      const ref = db.collection('questions').doc(id);
      await ref.set({
        year: "Year 10",
        course: "Mathematics",
        chapterId: "y10-4",
        chapterTitle: "Chapter 4: Lines and linear equations",
        topicId: "y10-4g",
        topicCode: "4G",
        topicTitle: "Revision",
        isManual: true,
        difficulty: "medium",
        timeLimit: 120,
        type: "multiple_choice",
        question: update.question,
        opts: options,
        options: options,
        a: correctIndex,
        answer: correctIndex,
        solutionSteps: update.solutionSteps.map(step => ({
          explanation: step.explanation,
          workingOut: String.raw`${step.workingOut}`,
          graphData: null
        })),
        isNew: true,
        createdAt: new Date(),
        updatedAt: new Date()
      });
      console.log(`  [UPDATED] ${id} -> Correct Index: ${correctIndex}`);
    }
    console.log('\nSuccessfully migrated next 10 questions for Year 10 Chapter 4G.');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
