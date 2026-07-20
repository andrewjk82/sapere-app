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
    'y9-5e-q13': {
      question: "A rectangular room has a length \\(4\\text{ m}\\) shorter than its width and a perimeter of \\(36\\text{ m}\\). Find the width of the room in metres.",
      ...shuffleOptions(["\\(11\\)", "\\(7\\)", "\\(15\\)", "\\(10\\)"], "\\(11\\)"),
      solutionSteps: [
        { explanation: "Let the width of the room be \\(w\\) metres. Since the length is \\(4\\text{ m}\\) shorter than the width, the length can be expressed as \\(w - 4\\) metres. Write the perimeter equation: \\(\\text{Perimeter} = 2 \\times (\\text{Width} + \\text{Length})\\).", workingOut: "\\(2(w + w - 4) = 36\\)" },
        { explanation: "Simplify the expression inside the brackets and expand the equation.", workingOut: "\\(2(2w - 4) = 36 \\implies 4w - 8 = 36\\)" },
        { explanation: "Add \\(8\\) to both sides to isolate \\(4w\\), then divide both sides by \\(4\\) to solve for the width \\(w\\).", workingOut: "\\(4w = 36 + 8 \\implies 4w = 44 \\implies w = 11\\)" }
      ]
    },
    'y9-5e-q14': {
      question: "A woman gave one-third of her savings to her daughter and one-fifth to her son. After this, she had \\(\\$560\\) left. How much savings did she originally have in dollars?",
      ...shuffleOptions(["\\(1200\\)", "\\(1000\\)", "\\(1500\\)", "\\(1600\\)"], "\\(1200\\)"),
      solutionSteps: [
        { explanation: "Let her original savings be \\(S\\) dollars. Write the equation representing her spending and remaining savings: \\(S - \\frac{1}{3}S - \\frac{1}{5}S = 560\\).", workingOut: "\\(S\\left(1 - \\frac{1}{3} - \\frac{1}{5}\\right) = 560\\)" },
        { explanation: "Find a common denominator (\\(15\\)) to simplify the fraction inside the brackets.", workingOut: "\\(S\\left(\\frac{15}{15} - \\frac{5}{15} - \\frac{3}{15}\\right) = 560 \\implies \\frac{7}{15}S = 560\\)" },
        { explanation: "Multiply both sides of the equation by the reciprocal \\(\\frac{15}{7}\\) to solve for the original savings \\(S\\).", workingOut: "\\(S = 560 \\times \\frac{15}{7} \\implies S = 80 \\times 15 \\implies S = 1200\\)" }
      ]
    },
    'y9-5e-q15': {
      question: "A student has an average mark of \\(72\\) from \\(8\\) tests. What mark must be gained in the next test to raise the average to \\(75\\)?",
      ...shuffleOptions(["\\(99\\)", "\\(96\\)", "\\(90\\)", "\\(100\\)"], "\\(99\\)"),
      solutionSteps: [
        { explanation: "Calculate the total sum of marks from the first \\(8\\) tests using: \\(\\text{Total Sum} = \\text{Average} \\times \\text{Count}\\). Let \\(x\\) be the mark of the 9th test.", workingOut: "\\(\\text{Sum of 8 tests} = 72 \\times 8 = 576\\)" },
        { explanation: "Write the equation for the new average of \\(9\\) tests, which needs to equal \\(75\\).", workingOut: "\\(\\frac{576 + x}{9} = 75\\)" },
        { explanation: "Multiply both sides by \\(9\\) to eliminate the denominator.", workingOut: "\\(576 + x = 675\\)" },
        { explanation: "Subtract \\(576\\) from both sides to solve for the required score \\(x\\).", workingOut: "\\(x = 675 - 576 \\implies x = 99\\)" }
      ]
    },
    'y9-5e-q17': {
      question: "A mother is three times as old as her daughter. In twelve years she will be only twice as old as her daughter. What is the mother's present age?",
      ...shuffleOptions(["\\(36\\)", "\\(12\\)", "\\(48\\)", "\\(45\\)"], "\\(36\\)"),
      solutionSteps: [
        { explanation: "Let the daughter's present age be \\(d\\) years. The mother's present age is therefore \\(3d\\) years. In \\(12\\) years, the daughter will be \\(d + 12\\) and the mother will be \\(3d + 12\\). Write the relation for \\(12\\) years from now.", workingOut: "\\(3d + 12 = 2(d + 12)\\)" },
        { explanation: "Expand the bracket on the right side of the equation.", workingOut: "\\(3d + 12 = 2d + 24\\)" },
        { explanation: "Subtract \\(2d\\) and \\(12\\) from both sides to solve for the daughter's present age \\(d\\).", workingOut: "\\(d = 12\\)" },
        { explanation: "Calculate the mother's present age by multiplying the daughter's age by \\(3\\).", workingOut: "\\(\\text{Mother's age} = 3 \\times 12 = 36\\)" }
      ]
    },
    'y9-5e-q18': {
      question: "A container holds \\(8\\text{ litres}\\) of a juice drink, of which \\(15\\%\\) is pure fruit juice. How many litres of water must be added to dilute it to \\(10\\%\\) fruit juice?",
      ...shuffleOptions(["\\(4\\)", "\\(2\\)", "\\(3\\)", "\\(5\\)"], "\\(4\\)"),
      solutionSteps: [
        { explanation: "Find the initial volume of pure fruit juice in the container.", workingOut: "\\(\\text{Pure juice} = 8 \\times 0.15 = 1.2\\text{ litres}\\)" },
        { explanation: "Let \\(x\\) be the volume of water added. The new total volume of the mixture will be \\(8 + x\\) litres. Set up the equation knowing that the pure juice volume remains \\(1.2\\text{ litres}\\) and represents \\(10\\%\\) (or \\(0.10\\)) of the new mixture.", workingOut: "\\(1.2 = 0.10(8 + x)\\)" },
        { explanation: "Multiply both sides by \\(10\\) to clear the decimal coefficient, then solve for \\(x\\).", workingOut: "\\(12 = 8 + x \\implies x = 4\\)" }
      ]
    },
    'y9-5e-q19': {
      question: "A merchant mixes nuts. Peanuts cost \\(\\$10\\) per kg and cashews cost \\(\\$15\\) per kg. How many grams of peanuts should be used to make a \\(1\\text{ kg}\\) mixture that costs \\(\\$12\\)?",
      ...shuffleOptions(["\\(600\\)", "\\(400\\)", "\\(500\\)", "\\(300\\)"], "\\(600\\)"),
      solutionSteps: [
        { explanation: "Let \\(x\\text{ kg}\\) be the mass of peanuts in the mixture. Since the total mixture weighs \\(1\\text{ kg}\\), the mass of cashews is \\(1 - x\\text{ kg}\\). Write the cost equation.", workingOut: "\\(10x + 15(1 - x) = 12\\)" },
        { explanation: "Expand the brackets and combine the variable terms.", workingOut: "\\(10x + 15 - 15x = 12 \\implies -5x + 15 = 12\\)" },
        { explanation: "Subtract \\(15\\) from both sides to isolate \\(-5x\\).", workingOut: "\\(-5x = 12 - 15 \\implies -5x = -3\\)" },
        { explanation: "Divide both sides by \\(-5\\) to find the mass of peanuts in kg, then convert to grams.", workingOut: "\\(x = \\frac{-3}{-5} = 0.6\\text{ kg} \\implies 0.6 \\times 1000 = 600\\text{ g}\\)" }
      ]
    },
    'y9-5e-q2': {
      question: "When \\(12\\) is added to twice Leo's age, the answer is \\(38\\). How old is Leo?",
      ...shuffleOptions(["\\(13\\)", "\\(15\\)", "\\(26\\)", "\\(10\\)"], "\\(13\\)"),
      solutionSteps: [
        { explanation: "Let Leo's age be \\(y\\) years. Translate the word problem: 'When 12 is added to twice Leo's age (\\(2y\\)), the answer is 38.'", workingOut: "\\(2y + 12 = 38\\)" },
        { explanation: "Subtract \\(12\\) from both sides to isolate \\(2y\\).", workingOut: "\\(2y = 38 - 12 \\implies 2y = 26\\)" },
        { explanation: "Divide both sides by \\(2\\) to solve for Leo's age \\(y\\).", workingOut: "\\(y = \\frac{26}{2} \\implies y = 13\\)" }
      ]
    },
    'y9-5e-q20': {
      question: "A collection of 10-cent, 20-cent and 50-cent coins has a total value of \\(\\$8.00\\). The number of 20-cent coins is three times the number of 10-cent coins. The number of 50-cent coins is 1 less than twice the number of 10-cent coins. How many 10-cent coins are there?",
      ...shuffleOptions(["\\(5\\)", "\\(10\\)", "\\(4\\)", "\\(6\\)"], "\\(5\\)"),
      solutionSteps: [
        { explanation: "Let \\(x\\) be the number of 10-cent coins. The number of 20-cent coins is \\(3x\\), and the number of 50-cent coins is \\(2x - 1\\). Write the total value equation in dollars.", workingOut: "\\(0.10x + 0.20(3x) + 0.50(2x - 1) = 8\\)" },
        { explanation: "Multiply every term by \\(10\\) to clear the decimal coefficients.", workingOut: "\\(x + 2(3x) + 5(2x - 1) = 80\\)" },
        { explanation: "Expand the brackets and combine like terms.", workingOut: "\\(x + 6x + 10x - 5 = 80 \\implies 17x - 5 = 80\\)" },
        { explanation: "Add \\(5\\) to both sides, then divide by \\(17\\) to solve for \\(x\\).", workingOut: "\\(17x = 85 \\implies x = 5\\)" }
      ]
    },
    'y9-5e-q21': {
      question: "If \\(3\\text{ litres}\\) of a chemical mixture contains \\(70\\%\\) acid, how many litres of water must be added so that the resulting mixture contains \\(30\\%\\) acid?",
      ...shuffleOptions(["\\(4\\)", "\\(3\\)", "\\(5\\)", "\\(2\\)"], "\\(4\\)"),
      solutionSteps: [
        { explanation: "Find the initial volume of pure acid in the mixture.", workingOut: "\\(\\text{Pure acid} = 3 \\times 0.70 = 2.1\\text{ litres}\\)" },
        { explanation: "Let \\(w\\) be the volume of water added. The new total volume of the mixture will be \\(3 + w\\) litres. Set up the equation knowing that the pure acid volume remains \\(2.1\\text{ litres}\\) and represents \\(30\\%\\) (or \\(0.30\\)) of the new mixture.", workingOut: "\\(2.1 = 0.30(3 + w)\\)" },
        { explanation: "Multiply both sides by \\(10\\) to clear the decimal coefficient.", workingOut: "\\(21 = 3(3 + w)\\)" },
        { explanation: "Divide both sides by \\(3\\), then subtract \\(3\\) to solve for \\(w\\).", workingOut: "\\(7 = 3 + w \\implies w = 4\\)" }
      ]
    },
    'y9-5e-q22a': {
      question: "A rectangular pond has a length \\(40\\text{ cm}\\) more than its width \\(w\\text{ cm}\\). Find the length of the pond in terms of \\(w\\).",
      ...shuffleOptions(["\\(w + 40\\)", "\\(w - 40\\)", "\\(40w\\)", "\\(2w + 40\\)"], "\\(w + 40\\)"),
      solutionSteps: [
        { explanation: "Identify the width of the pond, which is given as \\(w\\) cm.", workingOut: "\\(\\text{Width} = w\\)" },
        { explanation: "Translate 'length is 40 cm more than its width' into a mathematical expression by adding \\(40\\) to \\(w\\).", workingOut: "\\(\\text{Length} = w + 40\\)" }
      ]
    },
    'y9-5e-q22b': {
      question: "A rectangular pond has a length \\(40\\text{ cm}\\) more than its width \\(w\\text{ cm}\\). If the length of the pond is \\(120\\text{ cm}\\), find the width of the pond in cm.",
      ...shuffleOptions(["\\(80\\)", "\\(160\\)", "\\(60\\)", "\\(100\\)"], "\\(80\\)"),
      solutionSteps: [
        { explanation: "Write the equation relating the length (\\(w + 40\\)) to its given value of \\(120\\text{ cm}\\).", workingOut: "\\(w + 40 = 120\\)" },
        { explanation: "Subtract \\(40\\) from both sides to solve for the width \\(w\\).", workingOut: "\\(w = 120 - 40 \\implies w = 80\\)" }
      ]
    },
    'y9-5e-q22c': {
      question: "A rectangular pond has a length \\(40\\text{ cm}\\) more than its width \\(w\\text{ cm}\\). If the perimeter of the pond is \\(480\\text{ cm}\\), find the width of the pond in cm.",
      ...shuffleOptions(["\\(100\\)", "\\(120\\)", "\\(80\\)", "\\(140\\)"], "\\(100\\)"),
      solutionSteps: [
        { explanation: "Write the perimeter formula for a rectangle: \\(\\text{Perimeter} = 2 \\times (\\text{Width} + \\text{Length})\\). Substitute width with \\(w\\) and length with \\(w + 40\\).", workingOut: "\\(2(w + w + 40) = 480\\)" },
        { explanation: "Combine the like terms inside the brackets and expand the equation.", workingOut: "\\(2(2w + 40) = 480 \\implies 4w + 80 = 480\\)" },
        { explanation: "Subtract \\(80\\) from both sides to isolate \\(4w\\), then divide both sides by \\(4\\) to solve for the width \\(w\\).", workingOut: "\\(4w = 480 - 80 \\implies 4w = 400 \\implies w = 100\\)" }
      ]
    },
    'y9-5e-q22di': {
      question: "A rectangular pond of width \\(w\\text{ cm}\\) and length \\(w + 40\\text{ cm}\\) has a \\(30\\text{ cm}\\) wide path around its perimeter. Express the length of the outer rectangle formed by the path in terms of \\(w\\).",
      ...shuffleOptions(["\\(w + 100\\)", "\\(w + 70\\)", "\\(w + 40\\)", "\\(w + 60\\)"], "\\(w + 100\\)"),
      solutionSteps: [
        { explanation: "The outer length is formed by adding the path width (\\(30\\text{ cm}\\)) to both the left and right ends of the pond's length.", workingOut: "\\(\\text{Outer Length} = \\text{Inner Length} + 2 \\times 30\\)" },
        { explanation: "Substitute the inner length \\(w + 40\\) into the equation and simplify.", workingOut: "\\(\\text{Outer Length} = (w + 40) + 60 = w + 100\\)" }
      ]
    },
    'y9-5e-q22dii': {
      question: "A rectangular pond of width \\(w\\text{ cm}\\) and length \\(w + 40\\text{ cm}\\) has a \\(30\\text{ cm}\\) wide path around its perimeter. Express the width of the outer rectangle formed by the path in terms of \\(w\\).",
      ...shuffleOptions(["\\(w + 60\\)", "\\(w + 30\\)", "\\(w + 100\\)", "\\(w + 40\\)"], "\\(w + 60\\)"),
      solutionSteps: [
        { explanation: "The outer width is formed by adding the path width (\\(30\\text{ cm}\\)) to both the top and bottom ends of the pond's width.", workingOut: "\\(\\text{Outer Width} = \\text{Inner Width} + 2 \\times 30\\)" },
        { explanation: "Substitute the inner width \\(w\\) into the equation and simplify.", workingOut: "\\(\\text{Outer Width} = w + 60\\)" }
      ]
    },
    'y9-5e-q22e': {
      question: "A rectangular pond of width \\(w\\text{ cm}\\) and length \\(w + 40\\text{ cm}\\) has a \\(30\\text{ cm}\\) wide path around its perimeter. Express the area of the path in terms of \\(w\\).",
      ...shuffleOptions(["\\(120w + 6000\\)", "\\(120w + 3000\\)", "\\(60w + 6000\\)", "\\(120w\\)"], "\\(120w + 6000\\)"),
      solutionSteps: [
        { explanation: "The area of the path is calculated by subtracting the area of the inner pond from the area of the outer rectangle.", workingOut: "\\(\\text{Area of path} = \\text{Outer Area} - \\text{Inner Area}\\)" },
        { explanation: "Express the outer area as \\((w + 100)(w + 60)\\) and the inner area as \\(w(w + 40)\\). Expand both expressions.", workingOut: "\\(\\text{Outer Area} = w^2 + 160w + 6000, \\quad \\text{Inner Area} = w^2 + 40w\\)" },
        { explanation: "Subtract the inner area from the outer area to find the final expression for the path area.", workingOut: "\\(\\text{Area of path} = (w^2 + 160w + 6000) - (w^2 + 40w) = 120w + 6000\\)" }
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
  console.log('Successfully completed detailed step expansion and MCQ conversion for next 15 questions in y9-5e!');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
