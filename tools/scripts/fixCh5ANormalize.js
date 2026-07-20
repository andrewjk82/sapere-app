import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// Helper to shuffle array and return the new array along with correct index
function shuffleOptions(opts, correctVal) {
  const arr = [...opts];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  const idx = arr.indexOf(correctVal);
  return { options: arr, answer: String(idx) };
}

// Convert LaTeX inline delimiters $...$ to \(...\)
function toLaTeX(str) {
  return str.replace(/\$([^\$]+)\$/g, '\\($1\\)');
}

async function run() {
  const batch = db.batch();
  const questionsCol = db.collection('questions');

  // 1. y9-5a-1
  const q1 = {
    chapterId: "y9-5",
    topicId: "y9-5a",
    chapterTitle: "Chapter 5: Linear equations and inequalities",
    topicTitle: "Expressions",
    question: "Chloe is \\(8\\) cm taller than Daniel. Daniel's height is \\(h\\) cm. What is Chloe's height?",
    ...shuffleOptions(["\\(h - 8\\)", "\\(h + 8\\)", "\\(8h\\)", "\\(8 - h\\)"], "\\(h + 8\\)"),
    solutionSteps: [
      { explanation: "Daniel's height is \\(h\\) cm.", workingOut: "Daniel = h" },
      { explanation: "Chloe is \\(8\\) cm taller, so we add \\(8\\) to Daniel's height.", workingOut: "Chloe = h + 8" }
    ]
  };
  batch.update(questionsCol.doc('y9-5a-1'), q1);

  // 2. y9-5a-2
  const q2 = {
    chapterId: "y9-5",
    topicId: "y9-5a",
    chapterTitle: "Chapter 5: Linear equations and inequalities",
    topicTitle: "Expressions",
    question: "Marcus weighs \\(7\\) kg more than his sister Lily. Lily weighs \\(w\\) kg. What is Marcus's weight?",
    ...shuffleOptions(["\\(w - 7\\)", "\\(7w\\)", "\\(w + 7\\)", "\\(7 - w\\)"], "\\(w + 7\\)"),
    solutionSteps: [
      { explanation: "Lily's weight is \\(w\\) kg.", workingOut: "Lily = w" },
      { explanation: "Marcus weighs \\(7\\) kg more, so we add \\(7\\) to Lily's weight.", workingOut: "Marcus = w + 7" }
    ]
  };
  batch.update(questionsCol.doc('y9-5a-2'), q2);

  // 3. y9-5a-3
  const q3 = {
    chapterId: "y9-5",
    topicId: "y9-5a",
    chapterTitle: "Chapter 5: Linear equations and inequalities",
    topicTitle: "Expressions",
    question: "When Bella's age is doubled, the result is \\(6\\) years less than her father's age. Her father is \\(f\\) years old. Express Bella's age in terms of \\(f\\).",
    ...shuffleOptions(["\\(\\frac{f - 6}{2}\\)", "\\(\\frac{f + 6}{2}\\)", "\\(2f - 6\\)", "\\(2(f - 6)\\)"], "\\(\\frac{f - 6}{2}\\)"),
    solutionSteps: [
      { explanation: "Let Bella's age be \\(b\\). Doubling her age gives \\(2b\\).", workingOut: "2b" },
      { explanation: "This is \\(6\\) less than her father's age (\\(f\\)), so: \\(2b = f - 6\\).", workingOut: "2b = f - 6" },
      { explanation: "Divide by \\(2\\) to express Bella's age in terms of \\(f\\).", workingOut: "b = (f - 6) / 2" }
    ]
  };
  batch.update(questionsCol.doc('y9-5a-3'), q3);

  // 4. y9-5a-4 (Convert to Multi-part container)
  const q4 = {
    chapterId: "y9-5",
    topicId: "y9-5a",
    chapterTitle: "Chapter 5: Linear equations and inequalities",
    topicTitle: "Expressions",
    type: "multiple_choice",
    question: "The length of a rectangle is \\(6\\) metres more than its width. Answer the following sub-questions.",
    subQuestions: [
      {
        id: "y9-5a-4a",
        type: "multiple_choice",
        question: "a) If \\(w\\) metres is the width of the rectangle, express the length of the rectangle in terms of \\(w\\).",
        ...shuffleOptions(["\\(w - 6\\)", "\\(w + 6\\)", "\\(6w\\)", "\\(6 - w\\)"], "\\(w + 6\\)"),
        solutionSteps: [
          { explanation: "The length is \\(6\\) metres more than the width \\(w\\). We add \\(6\\) to \\(w\\).", workingOut: "Length = w + 6" }
        ],
        graphData: null
      },
      {
        id: "y9-5a-4b",
        type: "multiple_choice",
        question: "b) If \\(l\\) metres is the length of the rectangle, express the width of the rectangle in terms of \\(l\\).",
        ...shuffleOptions(["\\(l - 6\\)", "\\(l + 6\\)", "\\(6l\\)", "\\(6 - l\\)"], "\\(l - 6\\)"),
        solutionSteps: [
          { explanation: "Since \\(l = w + 6\\), we make \\(w\\) the subject by subtracting \\(6\\) from both sides.", workingOut: "Width = l - 6" }
        ],
        graphData: null
      }
    ],
    options: ["\\(w + 6, l - 6\\)", "\\(w - 6, l + 6\\)", "\\(6w, 6l\\)", "\\(6 - w, 6 - l\\)"],
    answer: 0
  };
  batch.update(questionsCol.doc('y9-5a-4'), q4);

  // 5. y9-5a-5 (Convert to Multi-part container)
  const q5 = {
    chapterId: "y9-5",
    topicId: "y9-5a",
    chapterTitle: "Chapter 5: Linear equations and inequalities",
    topicTitle: "Expressions",
    type: "multiple_choice",
    question: "In a competition, Alice scored \\(15\\) points more than Bob, and Charlie scored \\(4\\) points less than twice the number of points Bob scored. If \\(b\\) is the number of points Bob scored, answer the following sub-questions.",
    subQuestions: [
      {
        id: "y9-5a-5a",
        type: "multiple_choice",
        question: "a) Express the number of points Alice scored in terms of \\(b\\).",
        ...shuffleOptions(["\\(b - 15\\)", "\\(b + 15\\)", "\\(15b\\)", "\\(15 - b\\)"], "\\(b + 15\\)"),
        solutionSteps: [
          { explanation: "Alice scored \\(15\\) more points than Bob (\\(b\\)). We add \\(15\\) to \\(b\\).", workingOut: "Alice = b + 15" }
        ],
        graphData: null
      },
      {
        id: "y9-5a-5b",
        type: "multiple_choice",
        question: "b) Express the number of points Charlie scored in terms of \\(b\\).",
        ...shuffleOptions(["\\(2b + 4\\)", "\\(2b - 4\\)", "\\(4 - 2b\\)", "\\(4b - 2\\)"], "\\(2b - 4\\)"),
        solutionSteps: [
          { explanation: "Twice Bob's score is \\(2b\\). Charlie scored \\(4\\) points less than this, so we subtract \\(4\\).", workingOut: "Charlie = 2b - 4" }
        ],
        graphData: null
      }
    ],
    options: ["\\(b + 15, 2b - 4\\)", "\\(b - 15, 2b + 4\\)", "\\(15b, 4 - 2b\\)", "\\(15 - b, 4b - 2\\)"],
    answer: 0
  };
  batch.update(questionsCol.doc('y9-5a-5'), q5);

  // 6. y9-5a-6
  const q6 = {
    chapterId: "y9-5",
    topicId: "y9-5a",
    chapterTitle: "Chapter 5: Linear equations and inequalities",
    topicTitle: "Expressions",
    question: "The length of a rectangular paddock is \\(5\\) km less than \\(3\\) times its width. If \\(w\\) km represents the width of the paddock, express its perimeter in terms of \\(w\\).",
    ...shuffleOptions(["\\(8w - 10\\)", "\\(8w + 10\\)", "\\(3w - 5\\)", "\\(6w - 10\\)"], "\\(8w - 10\\)"),
    solutionSteps: [
      { explanation: "The width of the paddock is \\(w\\).", workingOut: "Width = w" },
      { explanation: "The length is \\(5\\) km less than \\(3\\) times the width: \\(3w - 5\\).", workingOut: "Length = 3w - 5" },
      { explanation: "The perimeter is \\(2 \\times (\\text{length} + \\text{width}) = 2(w + 3w - 5) = 2(4w - 5) = 8w - 10\\).", workingOut: "Perimeter = 8w - 10" }
    ]
  };
  batch.update(questionsCol.doc('y9-5a-6'), q6);

  // 7. y9-5a-7 (Convert to Multi-part container)
  const q7 = {
    chapterId: "y9-5",
    topicId: "y9-5a",
    chapterTitle: "Chapter 5: Linear equations and inequalities",
    topicTitle: "Expressions",
    type: "multiple_choice",
    question: "In a triathlon race, Liam ran at an average speed \\(4\\) times his average swimming speed. Also, when his average running speed was multiplied by \\(3\\), this number was \\(5\\) less than his average speed for the cycling leg. If \\(x\\) km/h is Liam's average swimming speed, answer the following sub-questions.",
    subQuestions: [
      {
        id: "y9-5a-7a",
        type: "multiple_choice",
        question: "a) Find an expression for his average running speed in terms of \\(x\\).",
        ...shuffleOptions(["\\(x + 4\\)", "\\(x - 4\\)", "\\(4x\\)", "\\(4 - x\\)"], "\\(4x\\)"),
        solutionSteps: [
          { explanation: "His running speed is \\(4\\) times his swimming speed (\\(x\\)).", workingOut: "Running Speed = 4x" }
        ],
        graphData: null
      },
      {
        id: "y9-5a-7b",
        type: "multiple_choice",
        question: "b) Find an expression for his average cycling speed in terms of \\(x\\).",
        ...shuffleOptions(["\\(12x - 5\\)", "\\(12x + 5\\)", "\\(3x + 5\\)", "\\(4x + 5\\)"], "\\(12x + 5\\)"),
        solutionSteps: [
          { explanation: "Running speed multiplied by \\(3\\) is \\(3 \\times 4x = 12x\\). This value is \\(5\\) less than the cycling speed \\(C\\). So: \\(12x = C - 5 \\implies C = 12x + 5\\).", workingOut: "Cycling Speed = 12x + 5" }
        ],
        graphData: null
      }
    ],
    options: ["\\(4x, 12x + 5\\)", "\\(4x, 12x - 5\\)", "\\(x+4, 3x+5\\)", "\\(x-4, 4x+5\\)"],
    answer: 0
  };
  batch.update(questionsCol.doc('y9-5a-7'), q7);

  // 8. y9-5a-8a to y9-5a-8l (Shuffling MCQ options and normalizing metadata)
  const q8_ids = ['8a', '8b', '8c', '8d', '8e', '8f', '8g', '8h', '8i', '8j', '8k', '8l'];
  const q8_data = {
    '8a': { question: "Seven less than three times \\(x\\)", correct: "\\(3x - 7\\)", wrong: ["\\(7 - 3x\\)", "\\(3(x - 7)\\)", "\\(7x - 3\\)"] },
    '8b': { question: "Three times the sum of \\(x\\) and seven", correct: "\\(3(x + 7)\\)", wrong: ["\\(3x + 7\\)", "\\(7x + 3\\)", "\\(3x - 7\\)"] },
    '8c': { question: "The sum of three times \\(x\\) and seven", correct: "\\(3x + 7\\)", wrong: ["\\(3(x + 7)\\)", "\\(7x + 3\\)", "\\(3x - 7\\)"] },
    '8d': { question: "Three more than seven times \\(x\\)", correct: "\\(7x + 3\\)", wrong: ["\\(3x + 7\\)", "\\(7(x + 3)\\)", "\\(7x - 3\\)"] },
    '8e': { question: "Seven times the sum of \\(x\\) and three", correct: "\\(7(x + 3)\\)", wrong: ["\\(7x + 3\\)", "\\(3x + 7\\)", "\\(3(x + 7)\\)"] },
    '8f': { question: "Three times \\(x\\) divided by seven", correct: "\\(\\frac{3x}{7}\\)", wrong: ["\\(\\frac{3}{7x}\\)", "\\(\\frac{7x}{3}\\)", "\\(3x - 7\\)"] },
    '8g': { question: "The product of seven and \\(x\\), divided by three", correct: "\\(\\frac{7x}{3}\\)", wrong: ["\\(\\frac{7}{3x}\\)", "\\(\\frac{3x}{7}\\)", "\\(7(x + 3)\\)"] },
    '8h': { question: "Three divided by the product of seven and \\(x\\)", correct: "\\(\\frac{3}{7x}\\)", wrong: ["\\(\\frac{7x}{3}\\)", "\\(\\frac{3x}{7}\\)", "\\(\\frac{3}{7}x\\)"] },
    '8i': { question: "Seven less than half of \\(x\\)", correct: "\\(\\frac{x}{2} - 7\\)", wrong: ["\\(7 - \\frac{x}{2}\\)", "\\(\\frac{x - 7}{2}\\)", "\\(2x - 7\\)"] },
    '8j': { question: "Half of the difference when seven is subtracted from \\(x\\)", correct: "\\(\\frac{x - 7}{2}\\)", wrong: ["\\(\\frac{x}{2} - 7\\)", "\\(\\frac{7 - x}{2}\\)", "\\(7x - 2\\)"] },
    '8k': { question: "The sum of half of \\(x\\) and seven", correct: "\\(\\frac{x}{2} + 7\\)", wrong: ["\\(\\frac{x + 7}{2}\\)", "\\(2x + 7\\)", "\\(7x + 2\\)"] },
    '8l': { question: "Seven divided by the sum of \\(x\\) and three", correct: "\\(\\frac{7}{x + 3}\\)", wrong: ["\\(\\frac{7}{x} + 3\\)", "\\(\\frac{x+3}{7}\\)", "\\(7x + 3\\)"] }
  };

  for (const suffix of q8_ids) {
    const id = `y9-5a-${suffix}`;
    const info = q8_data[suffix];
    const { options, answer } = shuffleOptions([info.correct, ...info.wrong], info.correct);

    batch.update(questionsCol.doc(id), {
      chapterId: "y9-5",
      topicId: "y9-5a",
      chapterTitle: "Chapter 5: Linear equations and inequalities",
      topicTitle: "Expressions",
      question: `Which mathematical expression represents: "${info.question}"?`,
      options: options,
      answer: answer,
      solutionSteps: [
        {
          explanation: "Break down the English phrase into mathematical operations step-by-step.",
          workingOut: info.correct
        }
      ]
    });
  }

  // Update sync version
  const questionsMetaRef = db.doc('sync_meta/questions');
  const now = Date.now();
  batch.update(questionsMetaRef, {
    version: now,
    membershipVersion: now,
    updatedAt: FieldValue.serverTimestamp()
  });

  await batch.commit();
  console.log('Successfully completed entire Year 9 Chapter 5a normalization, MCQ conversion, and shuffling!');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
