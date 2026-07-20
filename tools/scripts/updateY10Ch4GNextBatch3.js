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
  // y10-4g-q6b
  "y10-4g-q6b": {
    question: "Find the \\(x\\) and \\(y\\) intercepts of the line: \\(y = 4 - 2x\\).",
    correct: "x = 2, \\; y = 4",
    distractors: ["x = -2, \\; y = 4", "x = 4, \\; y = 2", "x = 2, \\; y = -4"],
    solutionSteps: [
      { explanation: "Find the y-intercept by substituting x = 0.", workingOut: "y = 4 - 2(0) \\;\\Rightarrow\\; y = 4" },
      { explanation: "Find the x-intercept by substituting y = 0.", workingOut: "0 = 4 - 2x \\;\\Rightarrow\\; 2x = 4" },
      { explanation: "Divide both sides by 2 to find x.", workingOut: "x = 2" }
    ]
  },
  // y10-4g-q6c
  "y10-4g-q6c": {
    question: "Find the \\(x\\) and \\(y\\) intercepts of the line: \\(3x + 2y = 6\\).",
    correct: "x = 2, \\; y = 3",
    distractors: ["x = 3, \\; y = 2", "x = -2, \\; y = 3", "x = 2, \\; y = -3"],
    solutionSteps: [
      { explanation: "Find the x-intercept by substituting y = 0.", workingOut: "3x + 2(0) = 6 \\;\\Rightarrow\\; 3x = 6 \\;\\Rightarrow\\; x = 2" },
      { explanation: "Find the y-intercept by substituting x = 0.", workingOut: "3(0) + 2y = 6 \\;\\Rightarrow\\; 2y = 6 \\;\\Rightarrow\\; y = 3" }
    ]
  },
  // y10-4g-q6d
  "y10-4g-q6d": {
    question: "Find the \\(x\\) and \\(y\\) intercepts of the line: \\(4x - 3y = 12\\).",
    correct: "x = 3, \\; y = -4",
    distractors: ["x = -3, \\; y = 4", "x = 4, \\; y = -3", "x = 3, \\; y = 4"],
    solutionSteps: [
      { explanation: "Find the x-intercept by substituting y = 0.", workingOut: "4x - 3(0) = 12 \\;\\Rightarrow\\; 4x = 12 \\;\\Rightarrow\\; x = 3" },
      { explanation: "Find the y-intercept by substituting x = 0.", workingOut: "4(0) - 3y = 12 \\;\\Rightarrow\\; -3y = 12 \\;\\Rightarrow\\; y = -4" }
    ]
  },
  // y10-4g-q6e
  "y10-4g-q6e": {
    question: "Identify the gradient and \\(y\\)-intercept of the line: \\(y = -3x\\).",
    correct: "m = -3, \\; c = 0",
    distractors: ["m = 3, \\; c = 0", "m = -3, \\; c = 3", "m = 0, \\; c = -3"],
    solutionSteps: [
      { explanation: "Compare the given equation with the standard form y = mx + c.", workingOut: "y = -3x + 0" },
      { explanation: "Identify the gradient m (coefficient of x) and vertical intercept c.", workingOut: "m = -3, \\; c = 0" }
    ]
  },
  // y10-4g-q6f
  "y10-4g-q6f": {
    question: "Identify the gradient and \\(y\\)-intercept of the line: \\(y = 2x\\).",
    correct: "m = 2, \\; c = 0",
    distractors: ["m = -2, \\; c = 0", "m = 2, \\; c = 2", "m = 0, \\; c = 2"],
    solutionSteps: [
      { explanation: "Compare the equation with the gradient-intercept form y = mx + c.", workingOut: "y = 2x + 0" },
      { explanation: "Identify the gradient and y-intercept values.", workingOut: "m = 2, \\; c = 0" }
    ]
  },
  // y10-4g-q6g
  "y10-4g-q6g": {
    question: "Identify the gradient and \\(y\\)-intercept of the horizontal line: \\(y = -2\\).",
    correct: "m = 0, \\; c = -2",
    distractors: ["m = -2, \\; c = 0", "m = 0, \\; c = 2", "m = 1, \\; c = -2"],
    solutionSteps: [
      { explanation: "A horizontal line has no steepness (rise = 0), so its gradient is 0. Rewrite the equation.", workingOut: "y = 0x - 2" },
      { explanation: "Identify the gradient and vertical intercept.", workingOut: "m = 0, \\; c = -2" }
    ]
  },
  // y10-4g-q6h
  "y10-4g-q6h": {
    question: "Describe the line represented by the equation: \\(x = 4\\).",
    correct: "A vertical line with undefined gradient and x-intercept at (4, 0)",
    distractors: [
      "A horizontal line with gradient 0 and y-intercept at (0, 4)",
      "A line with gradient 4 passing through the origin",
      "A vertical line with gradient 0 and x-intercept at (4, 0)"
    ],
    solutionSteps: [
      { explanation: "The equation x = c represents a line where every point has an x-coordinate of c. This forms a vertical line.", workingOut: "x = 4" },
      { explanation: "Since a vertical line is parallel to the y-axis, the rise over run has run = 0, making the gradient undefined.", workingOut: "\\text{Gradient} = \\text{undefined}" },
      { explanation: "It intersects the x-axis at the value 4.", workingOut: "\\text{x-intercept} = (4, 0)" }
    ]
  },
  // y10-4g-q7a
  "y10-4g-q7a": {
    question: "Find the equation of the line with a gradient of \\(2\\) passing through \\((0, 3)\\).",
    correct: "y = 2x + 3",
    distractors: ["y = 3x + 2", "y = 2x - 3", "y = -2x + 3"],
    solutionSteps: [
      { explanation: "The point (0, 3) lies on the y-axis, which directly gives the y-intercept c.", workingOut: "c = 3" },
      { explanation: "We are given the gradient m = 2.", workingOut: "m = 2" },
      { explanation: "Substitute m = 2 and c = 3 into the slope-intercept form equation y = mx + c.", workingOut: "y = 2x + 3" }
    ]
  },
  // y10-4g-q7b
  "y10-4g-q7b": {
    question: "Find the equation of the line with a gradient of \\(3\\) passing through \\((0, -1)\\).",
    correct: "y = 3x - 1",
    distractors: ["y = -x + 3", "y = 3x + 1", "y = -3x - 1"],
    solutionSteps: [
      { explanation: "Identify the vertical intercept c from the point (0, -1).", workingOut: "c = -1" },
      { explanation: "Use the given gradient m = 3.", workingOut: "m = 3" },
      { explanation: "Substitute m and c into y = mx + c to obtain the final equation.", workingOut: "y = 3x - 1" }
    ]
  },
  // y10-4g-q7c
  "y10-4g-q7c": {
    question: "Find the equation of the line with a gradient of \\(-2\\) passing through \\((0, 4)\\).",
    correct: "y = -2x + 4",
    distractors: ["y = 2x + 4", "y = -2x - 4", "y = 4x - 2"],
    solutionSteps: [
      { explanation: "Determine the vertical intercept c from the point (0, 4).", workingOut: "c = 4" },
      { explanation: "Use the given gradient m = -2.", workingOut: "m = -2" },
      { explanation: "Substitute m = -2 and c = 4 into the gradient-intercept form.", workingOut: "y = -2x + 4" }
    ]
  },
  // y10-4g-q7d
  "y10-4g-q7d": {
    question: "Find the equation of the line with a gradient of \\(-\\dfrac{1}{3}\\) passing through \\((0, -2)\\).",
    correct: "y = -\\dfrac{1}{3}x - 2",
    distractors: ["y = \\dfrac{1}{3}x - 2", "y = -\\dfrac{1}{3}x + 2", "y = -3x - 2"],
    solutionSteps: [
      { explanation: "The point (0, -2) lies on the vertical axis, giving the y-intercept c.", workingOut: "c = -2" },
      { explanation: "We are given the slope m = -1/3.", workingOut: "m = -\\dfrac{1}{3}" },
      { explanation: "Assemble the equation by substituting the slope and intercept values into y = mx + c.", workingOut: "y = -\\dfrac{1}{3}x - 2" }
    ]
  }
};

(async () => {
  try {
    console.log('[4G Batch 3 Migration] Overwriting targets...');
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
    console.log('\nSuccessfully migrated Batch 3 for Year 10 Chapter 4G.');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
