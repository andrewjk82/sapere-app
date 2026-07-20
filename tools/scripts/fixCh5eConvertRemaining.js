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
    'y9-5e-q5': {
      question: "If the sum of \\(3p\\) and \\(15\\) is the same as the sum of \\(5p\\) and \\(9\\), find the value of \\(p\\).",
      ...shuffleOptions(["\\(3\\)", "\\(-3\\)", "\\(1.5\\)", "\\(12\\)"], "\\(3\\)"),
      solutionSteps: [
        { explanation: "Translate the problem statement: 'The sum of 3p and 15 is equal to the sum of 5p and 9.'", workingOut: "\\(3p + 15 = 5p + 9\\)" },
        { explanation: "Subtract \\(3p\\) from both sides to group the variable terms on the right side.", workingOut: "\\(15 = 5p - 3p + 9 \\implies 15 = 2p + 9\\)" },
        { explanation: "Subtract \\(9\\) from both sides to isolate the variable term \\(2p\\), then divide both sides by \\(2\\) to solve for \\(p\\).", workingOut: "\\(15 - 9 = 2p \\implies 6 = 2p \\implies p = 3\\)" }
      ]
    },
    'y9-5e-q6': {
      question: "If the sum of half of \\(q\\) and \\(8\\) is equal to the sum of one quarter of \\(q\\) and \\(5\\), find the value of \\(q\\).",
      ...shuffleOptions(["\\(-12\\)", "\\(12\\)", "\\(-4\\)", "\\(-16\\)"], "\\(-12\\)"),
      solutionSteps: [
        { explanation: "Write down the equation: the sum of half of \\(q\\) (\\(\\frac{q}{2}\\)) and \\(8\\) equals the sum of one quarter of \\(q\\) (\\(\\frac{q}{4}\\)) and \\(5\\).", workingOut: "\\(\\frac{q}{2} + 8 = \\frac{q}{4} + 5\\)" },
        { explanation: "Multiply every term by \\(4\\) (the Lowest Common Multiple of \\(2\\) and \\(4\\)) to clear the fractions.", workingOut: "\\(4 \\times \\left(\\frac{q}{2}\\right) + 4 \\times 8 = 4 \\times \\left(\\frac{q}{4}\\right) + 4 \\times 5 \\implies 2q + 32 = q + 20\\)" },
        { explanation: "Subtract \\(q\\) from both sides to group the variable terms on the left.", workingOut: "\\(2q - q + 32 = 20 \\implies q + 32 = 20\\)" },
        { explanation: "Subtract \\(32\\) from both sides to solve for \\(q\\).", workingOut: "\\(q = 20 - 32 \\implies q = -12\\)" }
      ]
    },
    'y9-5e-q7ai': {
      question: "Jack is presently \\(24\\text{ years}\\) older than his daughter, Amy. If \\(x\\) represents Amy's present age, express Jack's present age in terms of \\(x\\).",
      ...shuffleOptions(["\\(x + 24\\)", "\\(x - 24\\)", "\\(24x\\)", "\\(24 - x\\)"], "\\(x + 24\\)"),
      solutionSteps: [
        { explanation: "Identify Amy's present age, which is given as \\(x\\) years.", workingOut: "\\(\\text{Amy's Present Age} = x\\)" },
        { explanation: "Translate 'Jack is 24 years older than Amy' to a mathematical expression by adding \\(24\\) to Amy's age.", workingOut: "\\(\\text{Jack's Present Age} = x + 24\\)" }
      ]
    },
    'y9-5e-q7aii': {
      question: "Jack is presently \\(24\\text{ years}\\) older than his daughter, Amy. If \\(x\\) represents Amy's present age, express Amy's age in \\(10\\text{ years}\\) time in terms of \\(x\\).",
      ...shuffleOptions(["\\(x + 10\\)", "\\(x - 10\\)", "\\(10x\\)", "\\(10 - x\\)"], "\\(x + 10\\)"),
      solutionSteps: [
        { explanation: "Amy's present age is \\(x\\) years.", workingOut: "\\(\\text{Amy's Present Age} = x\\)" },
        { explanation: "In \\(10\\text{ years}\\) time, Amy's age will increase by \\(10\\). Add \\(10\\) to her present age.", workingOut: "\\(\\text{Amy's Age in 10 years} = x + 10\\)" }
      ]
    },
    'y9-5e-q7aiii': {
      question: "Jack is presently \\(24\\text{ years}\\) older than his daughter, Amy. If \\(x\\) represents Amy's present age, express Jack's age in \\(10\\text{ years}\\) time in terms of \\(x\\).",
      ...shuffleOptions(["\\(x + 34\\)", "\\(x + 24\\)", "\\(x + 14\\)", "\\(x + 44\\)"], "\\(x + 34\\)"),
      solutionSteps: [
        { explanation: "Identify Jack's present age expression: \\(x + 24\\).", workingOut: "\\(\\text{Jack's Present Age} = x + 24\\)" },
        { explanation: "In \\(10\\text{ years}\\) time, Jack's age will increase by \\(10\\). Add \\(10\\) to his present age expression.", workingOut: "\\(\\text{Jack's Age in 10 years} = (x + 24) + 10 = x + 34\\)" }
      ]
    },
    'y9-5e-q7b': {
      question: "Jack is presently \\(24\\text{ years}\\) older than his daughter, Amy. If Jack's age in \\(10\\text{ years}\\) is twice Amy's age in \\(10\\text{ years}\\), find Amy's present age.",
      ...shuffleOptions(["\\(14\\)", "\\(10\\)", "\\(24\\)", "\\(12\\)"], "\\(14\\)"),
      solutionSteps: [
        { explanation: "Write the equation using the expressions from part a: Jack's age in \\(10\\text{ years}\\) (\\(x + 34\\)) is twice Amy's age in \\(10\\text{ years}\\) (\\(x + 10\\)).", workingOut: "\\(x + 34 = 2(x + 10)\\)" },
        { explanation: "Expand the bracket on the right side of the equation.", workingOut: "\\(x + 34 = 2x + 20\\)" },
        { explanation: "Subtract \\(x\\) from both sides to group variable terms on the right side.", workingOut: "\\(34 = 2x - x + 20 \\implies 34 = x + 20\\)" },
        { explanation: "Subtract \\(20\\) from both sides to solve for Amy's present age \\(x\\).", workingOut: "\\(x = 34 - 20 \\implies x = 14\\)" }
      ]
    },
    'y9-5e-q8ai': {
      question: "Tim, Ben and Chris each have a number of stamps. Ben has \\(8\\text{ more stamps}\\) than Tim, and Chris has three times as many stamps as Tim. If \\(x\\) represents the number of stamps Tim has, express the number of stamps Ben has in terms of \\(x\\).",
      ...shuffleOptions(["\\(x + 8\\)", "\\(x - 8\\)", "\\(8x\\)", "\\(8 - x\\)"], "\\(x + 8\\)"),
      solutionSteps: [
        { explanation: "Tim has \\(x\\) stamps.", workingOut: "\\(\\text{Tim's Stamps} = x\\)" },
        { explanation: "Ben has \\(8\\) more stamps than Tim. Add \\(8\\) to Tim's count \\(x\\).", workingOut: "\\(\\text{Ben's Stamps} = x + 8\\)" }
      ]
    },
    'y9-5e-q8aii': {
      question: "Tim, Ben and Chris each have a number of stamps. Ben has \\(8\\text{ more stamps}\\) than Tim, and Chris has three times as many stamps as Tim. If \\(x\\) represents the number of stamps Tim has, express the number of stamps Chris has in terms of \\(x\\).",
      ...shuffleOptions(["\\(3x\\)", "\\(x + 3\\)", "\\(\\frac{x}{3}\\)", "\\(3 - x\\)"], "\\(3x\\)"),
      solutionSteps: [
        { explanation: "Tim has \\(x\\) stamps.", workingOut: "\\(\\text{Tim's Stamps} = x\\)" },
        { explanation: "Chris has three times as many stamps as Tim. Multiply Tim's count \\(x\\) by \\(3\\).", workingOut: "\\(\\text{Chris's Stamps} = 3x\\)" }
      ]
    },
    'y9-5e-q8aiii': {
      question: "Tim, Ben and Chris each have a number of stamps. Ben has \\(8\\text{ more stamps}\\) than Tim, and Chris has three times as many stamps as Tim. If \\(x\\) represents the number of stamps Tim has, express the total number of stamps the three boys have in terms of \\(x\\).",
      ...shuffleOptions(["\\(5x + 8\\)", "\\(3x + 8\\)", "\\(5x\\)", "\\(4x + 8\\)"], "\\(5x + 8\\)"),
      solutionSteps: [
        { explanation: "Express the total stamps as the sum of Tim's, Ben's, and Chris's stamps.", workingOut: "\\(\\text{Total} = x + (x + 8) + 3x\\)" },
        { explanation: "Combine the like terms (variable terms) to write the final simplified expression.", workingOut: "\\(\\text{Total} = 5x + 8\\)" }
      ]
    },
    'y9-5e-q8b': {
      question: "Tim, Ben and Chris each have a number of stamps. Ben has \\(8\\text{ more stamps}\\) than Tim, and Chris has three times as many stamps as Tim. If the boys have \\(58\\text{ stamps}\\) in total, determine how many stamps Tim has.",
      ...shuffleOptions(["\\(10\\)", "\\(8\\)", "\\(12\\)", "\\(6\\)"], "\\(10\\)"),
      solutionSteps: [
        { explanation: "Set the expression for total stamps (\\(5x + 8\\)) equal to the given total of \\(58\\).", workingOut: "\\(5x + 8 = 58\\)" },
        { explanation: "Subtract \\(8\\) from both sides of the equation to isolate \\(5x\\).", workingOut: "\\(5x = 58 - 8 \\implies 5x = 50\\)" },
        { explanation: "Divide both sides by \\(5\\) to solve for the number of stamps Tim has (\\(x\\)).", workingOut: "\\(x = \\frac{50}{5} \\implies x = 10\\)" }
      ]
    },
    'y9-5e-q9a': {
      question: "The length of a garden bed is \\(3\\text{ m}\\) more than three times its width. If \\(x\\text{ metres}\\) represents the width of the garden bed, express the length in terms of \\(x\\).",
      ...shuffleOptions(["\\(3x + 3\\)", "\\(3x - 3\\)", "\\(x + 3\\)", "\\(3(x + 3)\\)"], "\\(3x + 3\\)"),
      solutionSteps: [
        { explanation: "Identify the width of the garden bed: \\(x\\) metres. Three times the width is \\(3x\\).", workingOut: "\\(\\text{Width} = x, \\quad \\text{Three times width} = 3x\\)" },
        { explanation: "Translate '3 m more than three times its width' to a mathematical expression by adding \\(3\\) to \\(3x\\).", workingOut: "\\(\\text{Length} = 3x + 3\\)" }
      ]
    },
    'y9-5e-q9b': {
      question: "The length of a garden bed is \\(3\\text{ m}\\) more than three times its width. If the perimeter of the garden bed is \\(54\\text{ m}\\), find its width in metres.",
      ...shuffleOptions(["\\(6\\)", "\\(8\\)", "\\(5\\)", "\\(7\\)"], "\\(6\\)"),
      solutionSteps: [
        { explanation: "Write the perimeter formula for a rectangle: \\(\\text{Perimeter} = 2 \\times (\\text{Width} + \\text{Length})\\). Substitute width with \\(x\\) and length with \\(3x + 3\\).", workingOut: "\\(2(x + 3x + 3) = 54\\)" },
        { explanation: "Combine the like terms inside the brackets and expand the equation.", workingOut: "\\(2(4x + 3) = 54 \\implies 8x + 6 = 54\\)" },
        { explanation: "Subtract \\(6\\) from both sides to isolate \\(8x\\), then divide both sides by \\(8\\) to solve for the width \\(x\\).", workingOut: "\\(8x = 54 - 6 \\implies 8x = 48 \\implies x = 6\\)" }
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
  console.log('Successfully completed detailed step expansion and MCQ conversion for final 12 questions in y9-5e!');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
