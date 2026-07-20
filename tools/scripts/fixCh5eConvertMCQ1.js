import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// Helper to shuffle options and return new array with correct index
function shuffleOptions(opts, correctVal) {
  const arr = [...opts];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  const idx = arr.indexOf(correctVal);
  return { options: arr, answer: String(idx) };
}

async function run() {
  const batch = db.batch();
  const questionsCol = db.collection('questions');

  const updates = {
    'y9-5e-q1': {
      question: "A boy thinks of a number \\(x\\). When he adds \\(13\\) to his number, the result is \\(29\\). What is the value of \\(x\\)?",
      ...shuffleOptions(["\\(16\\)", "\\(12\\)", "\\(15\\)", "\\(42\\)"], "\\(16\\)"),
      solutionSteps: [
        { explanation: "Translate the word problem into a mathematical equation: 'When he adds 13 to his number x, the result is 29.'", workingOut: "\\(x + 13 = 29\\)" },
        { explanation: "Solve for \\(x\\) by performing the inverse operation. Subtract \\(13\\) from both sides of the equation.", workingOut: "\\(x = 29 - 13 \\implies x = 16\\)" }
      ]
    },
    'y9-5e-q10ai': {
      question: "Sarah earns \\(\\$4500\\) more than David, and John earns \\(\\$1500\\) less than David. If David's salary is \\(\\$x\\), express Sarah's salary in terms of \\(x\\).",
      ...shuffleOptions(["\\(x + 4500\\)", "\\(x - 4500\\)", "\\(4500x\\)", "\\(x + 1500\\)"], "\\(x + 4500\\)"),
      solutionSteps: [
        { explanation: "Identify David's salary, which is given as \\(x\\) dollars.", workingOut: "\\(\\text{David's Salary} = x\\)" },
        { explanation: "Translate 'Sarah earns \\(\\$4500\\) more than David' into a mathematical expression: add \\(4500\\) to David's salary \\(x\\).", workingOut: "\\(\\text{Sarah's Salary} = x + 4500\\)" }
      ]
    },
    'y9-5e-q10aii': {
      question: "Sarah earns \\(\\$4500\\) more than David, and John earns \\(\\$1500\\) less than David. If David's salary is \\(\\$x\\), express John's salary in terms of \\(x\\).",
      ...shuffleOptions(["\\(x - 1500\\)", "\\(x + 1500\\)", "\\(1500 - x\\)", "\\(1500x\\)"], "\\(x - 1500\\)"),
      solutionSteps: [
        { explanation: "Identify David's salary, which is given as \\(x\\) dollars.", workingOut: "\\(\\text{David's Salary} = x\\)" },
        { explanation: "Translate 'John earns \\(\\$1500\\) less than David' into a mathematical expression: subtract \\(1500\\) from David's salary \\(x\\).", workingOut: "\\(\\text{John's Salary} = x - 1500\\)" }
      ]
    },
    'y9-5e-q10b': {
      question: "Sarah earns \\(\\$4500\\) more than David, and John earns \\(\\$1500\\) less than David. If the total of the three incomes is \\(\\$147\\,000\\), find David's salary in dollars.",
      ...shuffleOptions(["\\(48\\,000\\)", "\\(50\\,000\\)", "\\(45\\,000\\)", "\\(52\\,000\\)"], "\\(48\\,000\\)"),
      solutionSteps: [
        { explanation: "Write an expression for the sum of the three incomes: David's (\\(x\\)), Sarah's (\\(x + 4500\\)), and John's (\\(x - 1500\\)). Set this sum equal to the total of \\(147\\,000\\).", workingOut: "\\(x + (x + 4500) + (x - 1500) = 147\\,000\\)" },
        { explanation: "Combine the like terms on the left side of the equation.", workingOut: "\\(3x + 3000 = 147\\,000\\)" },
        { explanation: "Subtract \\(3000\\) from both sides to isolate the variable term \\(3x\\).", workingOut: "\\(3x = 147\\,000 - 3000 \\implies 3x = 144\\,000\\)" },
        { explanation: "Divide both sides by \\(3\\) to solve for David's salary \\(x\\).", workingOut: "\\(x = \\frac{144\\,000}{3} \\implies x = 48\\,000\\)" }
      ]
    },
    'y9-5e-q11a': {
      question: "Leo has an equal number of 10-cent and 20-cent coins. If their total value is \\(\\$9\\), how many of each coin does he have?",
      ...shuffleOptions(["\\(30\\)", "\\(20\\)", "\\(45\\)", "\\(15\\)"], "\\(30\\)"),
      solutionSteps: [
        { explanation: "Let \\(x\\) be the number of each coin. Express the total value in dollars. 10 cents is \\(0.10\\) dollars and 20 cents is \\(0.20\\) dollars.", workingOut: "\\(0.10x + 0.20x = 9\\)" },
        { explanation: "Combine the decimal terms on the left side.", workingOut: "\\(0.30x = 9\\)" },
        { explanation: "Divide both sides by \\(0.30\\) to solve for the number of coins \\(x\\).", workingOut: "\\(x = \\frac{9}{0.30} \\implies x = 30\\)" }
      ]
    },
    'y9-5e-q11b': {
      question: "Leo has a number of 10-cent and 20-cent coins. If their total value is \\(\\$8\\), and there are twice as many 10-cent coins as 20-cent coins, how many 20-cent coins are there?",
      ...shuffleOptions(["\\(20\\)", "\\(40\\)", "\\(15\\)", "\\(30\\)"], "\\(20\\)"),
      solutionSteps: [
        { explanation: "Let \\(x\\) be the number of 20-cent coins. Since there are twice as many 10-cent coins, their number is \\(2x\\). Write the total value equation in dollars.", workingOut: "\\(0.20x + 0.10(2x) = 8\\)" },
        { explanation: "Simplify the equation by combining the terms.", workingOut: "\\(0.20x + 0.20x = 8 \\implies 0.40x = 8\\)" },
        { explanation: "Divide both sides by \\(0.40\\) to solve for the number of 20-cent coins \\(x\\).", workingOut: "\\(x = \\frac{8}{0.40} \\implies x = 20\\)" }
      ]
    },
    'y9-5e-q11c': {
      question: "Leo has a number of 10-cent and 20-cent coins. If their total value is \\(\\$10\\), and there are twice as many 20-cent coins as 10-cent coins, how many 10-cent coins are there?",
      ...shuffleOptions(["\\(20\\)", "\\(40\\)", "\\(15\\)", "\\(30\\)"], "\\(20\\)"),
      solutionSteps: [
        { explanation: "Let \\(x\\) be the number of 10-cent coins. Since there are twice as many 20-cent coins, their number is \\(2x\\). Write the total value equation in dollars.", workingOut: "\\(0.10x + 0.20(2x) = 10\\)" },
        { explanation: "Simplify the equation by combining the terms.", workingOut: "\\(0.10x + 0.40x = 10 \\implies 0.50x = 10\\)" },
        { explanation: "Divide both sides by \\(0.50\\) to solve for the number of 10-cent coins \\(x\\).", workingOut: "\\(x = \\frac{10}{0.50} \\implies x = 20\\)" }
      ]
    },
    'y9-5e-q12a': {
      question: "The distance between two towns is \\(480\\text{ km}\\). Find \\(x\\) if the trip takes \\(x\\text{ hours}\\) at an average speed of \\(60\\text{ km/h}\\).",
      ...shuffleOptions(["\\(8\\)", "\\(6\\)", "\\(10\\)", "\\(12\\)"], "\\(8\\)"),
      solutionSteps: [
        { explanation: "Use the relationship: \\(\\text{Distance} = \\text{Speed} \\times \\text{Time}\\). Plug in the given values: Distance is \\(480\\text{ km}\\), Speed is \\(60\\text{ km/h}\\), and Time is \\(x\\text{ hours}\\).", workingOut: "\\(480 = 60x\\)" },
        { explanation: "Divide both sides of the equation by \\(60\\) to solve for the time \\(x\\).", workingOut: "\\(x = \\frac{480}{60} \\implies x = 8\\)" }
      ]
    },
    'y9-5e-q12b': {
      question: "The distance between two towns is \\(320\\text{ km}\\). Find \\(x\\) if the trip takes \\(4\\text{ hours}\\) at an average speed of \\(x\\text{ km/h}\\).",
      ...shuffleOptions(["\\(80\\)", "\\(60\\)", "\\(70\\)", "\\(90\\)"], "\\(80\\)"),
      solutionSteps: [
        { explanation: "Use the formula: \\(\\text{Distance} = \\text{Speed} \\times \\text{Time}\\). Substitute Distance with \\(320\\text{ km}\\), Time with \\(4\\text{ hours}\\), and Speed with \\(x\\text{ km/h}\\).", workingOut: "\\(320 = 4x\\)" },
        { explanation: "Divide both sides of the equation by \\(4\\) to solve for the speed \\(x\\).", workingOut: "\\(x = \\frac{320}{4} \\implies x = 80\\)" }
      ]
    },
    'y9-5e-q12c': {
      question: "The distance between two towns is \\(360\\text{ km}\\). Find \\(x\\) if the trip takes \\(4\\text{ hours}\\), travelling \\(x\\text{ hours}\\) at \\(100\\text{ km/h}\\) and the remaining time at \\(60\\text{ km/h}\\).",
      ...shuffleOptions(["\\(3\\)", "\\(2\\)", "\\(1\\)", "\\(2.5\\)"], "\\(3\\)"),
      solutionSteps: [
        { explanation: "Express the distance for each part of the trip. The first part is \\(100x\\text{ km}\\). The remaining time is \\(4 - x\\text{ hours}\\), so the second part distance is \\(60(4 - x)\\text{ km}\\). Set their sum equal to the total distance of \\(360\\text{ km}\\).", workingOut: "\\(100x + 60(4 - x) = 360\\)" },
        { explanation: "Expand the bracket and combine like terms.", workingOut: "\\(100x + 240 - 60x = 360 \\implies 40x + 240 = 360\\)" },
        { explanation: "Subtract \\(240\\) from both sides to isolate \\(40x\\).", workingOut: "\\(40x = 360 - 240 \\implies 40x = 120\\)" },
        { explanation: "Divide both sides by \\(40\\) to solve for \\(x\\).", workingOut: "\\(x = \\frac{120}{40} \\implies x = 3\\)" }
      ]
    }
  };

  for (const [id, data] of Object.entries(updates)) {
    console.log(`Converting ${id} to multiple_choice with shuffled options and highly detailed steps...`);
    const docRef = questionsCol.doc(id);
    batch.update(docRef, {
      type: 'multiple_choice',
      question: data.question,
      options: data.options,
      answer: data.answer,
      solutionSteps: data.solutionSteps
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
  console.log('Successfully completed detailed step expansion and MCQ conversion for first 10 questions in y9-5e!');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
