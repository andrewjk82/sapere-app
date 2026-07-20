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
  // y10-4g-q8a
  "y10-4g-q8a": {
    question: "Find the equation of the line passing through the points: \\((3, 0)\\) and \\((0, 4)\\).",
    correct: "y = -\\dfrac{4}{3}x + 4",
    distractors: ["y = \\dfrac{4}{3}x + 4", "y = -\\dfrac{3}{4}x + 3", "y = -\\dfrac{4}{3}x - 4"],
    solutionSteps: [
      { explanation: "First, find the gradient m using the slope formula.", workingOut: "m = \\dfrac{y_2 - y_1}{x_2 - x_1} = \\dfrac{4 - 0}{0 - 3} = -\\dfrac{4}{3}" },
      { explanation: "Identify the vertical intercept c from the point (0, 4).", workingOut: "c = 4" },
      { explanation: "Substitute m and c into y = mx + c to obtain the equation.", workingOut: "y = -\\dfrac{4}{3}x + 4" }
    ]
  },
  // y10-4g-q8b
  "y10-4g-q8b": {
    question: "Find the equation of the line passing through the points: \\((3, 3)\\) and \\((0, 1)\\).",
    correct: "y = \\dfrac{2}{3}x + 1",
    distractors: ["y = -\\dfrac{2}{3}x + 1", "y = \\dfrac{3}{2}x + 1", "y = \\dfrac{2}{3}x + 3"],
    solutionSteps: [
      { explanation: "Find the gradient between the coordinates.", workingOut: "m = \\dfrac{1 - 3}{0 - 3} = \\dfrac{-2}{-3} = \\dfrac{2}{3}" },
      { explanation: "Read the y-intercept from (0, 1).", workingOut: "c = 1" },
      { explanation: "State the equation in gradient-intercept form.", workingOut: "y = \\dfrac{2}{3}x + 1" }
    ]
  },
  // y10-4g-q8c
  "y10-4g-q8c": {
    question: "Find the equation of the line passing through the points: \\((1, 4)\\) and \\((2, 6)\\).",
    correct: "y = 2x + 2",
    distractors: ["y = 2x - 2", "y = -2x + 6", "y = 6x - 2"],
    solutionSteps: [
      { explanation: "Find the gradient m using both coordinates.", workingOut: "m = \\dfrac{6 - 4}{2 - 1} = 2" },
      { explanation: "Use the point-gradient formula with gradient 2 and point (1, 4).", workingOut: "y - 4 = 2(x - 1)" },
      { explanation: "Expand and simplify the linear equation.", workingOut: "y - 4 = 2x - 2 \\;\\Rightarrow\\; y = 2x + 2" }
    ]
  },
  // y10-4g-q8d
  "y10-4g-q8d": {
    question: "Find the equation of the line passing through the points: \\((4, 2)\\) and \\((4, -3)\\).",
    correct: "x = 4",
    distractors: ["y = 4", "y = -3", "x = 2"],
    solutionSteps: [
      { explanation: "Compare the x-coordinates of both points. Since they are identical, the line is vertical.", workingOut: "x_1 = 4, \\; x_2 = 4" },
      { explanation: "Therefore, the equation of the vertical line passing through these coordinates is x = 4.", workingOut: "x = 4" }
    ]
  },
  // y10-4g-q8e
  "y10-4g-q8e": {
    question: "Find the equation of the line passing through the points: \\((2, 2)\\) and \\((4, 6)\\).",
    correct: "y = 2x - 2",
    distractors: ["y = 2x + 2", "y = -2x + 6", "y = x + 2"],
    solutionSteps: [
      { explanation: "Calculate the gradient from the two points.", workingOut: "m = \\dfrac{6 - 2}{4 - 2} = \\dfrac{4}{2} = 2" },
      { explanation: "Set up the equation using point (2, 2) and gradient 2.", workingOut: "y - 2 = 2(x - 2)" },
      { explanation: "Expand and transpose to find the final rule.", workingOut: "y - 2 = 2x - 4 \\;\\Rightarrow\\; y = 2x - 2" }
    ]
  },
  // y10-4g-q8f
  "y10-4g-q8f": {
    question: "Find the equation of the line passing through the points: \\((-1, 2)\\) and \\((1, -2)\\).",
    correct: "y = -2x",
    distractors: ["y = 2x", "y = -2x + 2", "y = -\\dfrac{1}{2}x"],
    solutionSteps: [
      { explanation: "Determine the gradient of the line.", workingOut: "m = \\dfrac{-2 - 2}{1 - (-1)} = \\dfrac{-4}{2} = -2" },
      { explanation: "Apply the point-gradient formula with coordinate (1, -2) and gradient -2.", workingOut: "y - (-2) = -2(x - 1)" },
      { explanation: "Simplify the equation.", workingOut: "y + 2 = -2x + 2 \\;\\Rightarrow\\; y = -2x" }
    ]
  },
  // y10-4g-q9a
  "y10-4g-q9a": {
    question: "Solve the simultaneous equations: \\\\(y = x + 2\\\\) and \\\\(x + 2y = 10\\\\).",
    correct: "x = 2, \\; y = 4",
    distractors: ["x = 4, \\; y = 2", "x = -2, \\; y = 4", "x = 2, \\; y = -4"],
    solutionSteps: [
      { explanation: "Substitute the first equation y = x + 2 directly into the second equation.", workingOut: "x + 2(x + 2) = 10" },
      { explanation: "Expand and solve the simplified linear equation for x.", workingOut: "x + 2x + 4 = 10 \\;\\Rightarrow\\; 3x = 6 \\;\\Rightarrow\\; x = 2" },
      { explanation: "Substitute x = 2 back into the first equation to calculate y.", workingOut: "y = 2 + 2 = 4" }
    ]
  },
  // y10-4g-q9b
  "y10-4g-q9b": {
    question: "Solve the simultaneous equations: \\\\(y = 3x - 2\\\\) and \\\\(2x + 3y = 5\\\\).",
    correct: "x = 1, \\; y = 1",
    distractors: ["x = 1, \\; y = -1", "x = 2, \\; y = 4", "x = 0, \\; y = -2"],
    solutionSteps: [
      { explanation: "Substitute y = 3x - 2 into the second equation.", workingOut: "2x + 3(3x - 2) = 5" },
      { explanation: "Expand and solve for variable x.", workingOut: "2x + 9x - 6 = 5 \\;\\Rightarrow\\; 11x = 11 \\;\\Rightarrow\\; x = 1" },
      { explanation: "Substitute x = 1 into the expression for y.", workingOut: "y = 3(1) - 2 = 1" }
    ]
  },
  // y10-4g-q9c
  "y10-4g-q9c": {
    question: "Solve the simultaneous equations: \\\\(x + y = 3\\\\) and \\\\(2x + 3y = 8\\\\).",
    correct: "x = 1, \\; y = 2",
    distractors: ["x = 2, \\; y = 1", "x = -1, \\; y = 4", "x = 3, \\; y = 0"],
    solutionSteps: [
      { explanation: "Rearrange the first equation to express x in terms of y.", workingOut: "x = 3 - y \\quad \\cdots (1)" },
      { explanation: "Substitute Eq (1) into the second equation.", workingOut: "2(3 - y) + 3y = 8" },
      { explanation: "Expand and solve for y, then back-substitute to find x.", workingOut: "6 - 2y + 3y = 8 \\;\\Rightarrow\\; y = 2 \\;\\Rightarrow\\; x = 3 - 2 = 1" }
    ]
  },
  // y10-4g-q9d
  "y10-4g-q9d": {
    question: "Solve the simultaneous equations: \\\\(3x - 2y = 1\\\\) and \\\\(4x + 4y = 8\\\\).",
    correct: "x = 1.2, \\; y = 1.3",
    distractors: ["x = 1, \\; y = 1", "x = 1.5, \\; y = 1", "x = 1.2, \\; y = 1.2"],
    solutionSteps: [
      { explanation: "Simplify the second equation by dividing all terms by 4.", workingOut: "x + y = 2 \\;\\Rightarrow\\; y = 2 - x" },
      { explanation: "Substitute y = 2 - x into the first equation.", workingOut: "3x - 2(2 - x) = 1" },
      { explanation: "Solve the linear equation for x and find y.", workingOut: "3x - 4 + 2x = 1 \\;\\Rightarrow\\; 5x = 5 \\;\\Rightarrow\\; x = 1.2, \\; y = 1.3" }
    ]
  },
  // y10-4g-q9e
  "y10-4g-q9e": {
    question: "Solve the simultaneous equations: \\\\(4x + 3y = 11\\\\) and \\\\(2x + y = 5\\\\).",
    correct: "x = 2, \\; y = 1",
    distractors: ["x = 1, \\; y = 2", "x = 2, \\; y = -1", "x = 3, \\; y = -1"],
    solutionSteps: [
      { explanation: "Rearrange the second equation to express y as the subject.", workingOut: "y = 5 - 2x \\quad \\cdots (1)" },
      { explanation: "Substitute Eq (1) into the first equation.", workingOut: "4x + 3(5 - 2x) = 11" },
      { explanation: "Solve for x, then substitute back to determine y.", workingOut: "4x + 15 - 6x = 11 \\;\\Rightarrow\\; -2x = -4 \\;\\Rightarrow\\; x = 2, \\; y = 5 - 2(2) = 1" }
    ]
  },
  // y10-4g-q9f
  "y10-4g-q9f": {
    question: "Solve the simultaneous equations: \\\\(3x - 2y = -8\\\\) and \\\\(4x + 2y = 1\\\\).",
    correct: "x = -1, \\; y = 2.5",
    distractors: ["x = -1, \\; y = 3", "x = -2, \\; y = 1", "x = 1, \\; y = 2.5"],
    solutionSteps: [
      { explanation: "Add both equations to eliminate the y-term.", workingOut: "(3x - 2y) + (4x + 2y) = -8 + 1" },
      { explanation: "Solve the resulting simplified equation for x.", workingOut: "7x = -7 \\;\\Rightarrow\\; x = -1" },
      { explanation: "Substitute x = -1 into the second equation to solve for y.", workingOut: "4(-1) + 2y = 1 \\;\\Rightarrow\\; -4 + 2y = 1 \\;\\Rightarrow\\; 2y = 5 \\;\\Rightarrow\\; y = 2.5" }
    ]
  }
};

(async () => {
  try {
    console.log('[4G Batch 4 Migration] Overwriting targets...');
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
    console.log('\nSuccessfully migrated Batch 4 for Year 10 Chapter 4G.');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
