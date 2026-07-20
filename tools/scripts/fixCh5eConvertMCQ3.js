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
    'y9-5e-q22f': {
      question: "A rectangular pond of width \\(w\\text{ cm}\\) and length \\(w + 40\\text{ cm}\\) has a \\(30\\text{ cm}\\) wide path around its perimeter. If the width of the pond is \\(80\\text{ cm}\\), find the area of the path in \\(\\text{cm}^2\\).",
      ...shuffleOptions(["\\(15\\,600\\)", "\\(14\\,000\\)", "\\(16\\,000\\)", "\\(12\\,000\\)"], "\\(15\\,600\\)"),
      solutionSteps: [
        { explanation: "Write down the area expression for the path (derived from subtracting the inner pond area from the outer rectangle area): \\(\\text{Area} = 120w + 6000\\). Substitute the given width \\(w = 80\\) into the expression.", workingOut: "\\(\\text{Area} = 120(80) + 6000\\)" },
        { explanation: "Calculate the product and add \\(6000\\) to find the final path area.", workingOut: "\\(\\text{Area} = 9600 + 6000 = 15\\,600\\text{ cm}^2\\)" }
      ]
    },
    'y9-5e-q22g': {
      question: "A rectangular pond of width \\(w\\text{ cm}\\) and length \\(w + 40\\text{ cm}\\) has a \\(30\\text{ cm}\\) wide path around its perimeter. If the area of the path is \\(2.4\\text{ m}^2\\) (which is \\(24\\,000\\text{ cm}^2\\)), find the width of the pond in cm.",
      ...shuffleOptions(["\\(150\\)", "\\(120\\)", "\\(180\\)", "\\(100\\)"], "\\(150\\)"),
      solutionSteps: [
        { explanation: "Use the path area expression \\(120w + 6000\\) and set it equal to the given area of \\(24\\,000\\text{ cm}^2\\).", workingOut: "\\(120w + 6000 = 24\\,000\\)" },
        { explanation: "Subtract \\(6000\\) from both sides to isolate the variable term \\(120w\\).", workingOut: "\\(120w = 24\\,000 - 6000 \\implies 120w = 18\\,000\\)" },
        { explanation: "Divide both sides by \\(120\\) to solve for the width \\(w\\).", workingOut: "\\(w = \\frac{18\\,000}{120} \\implies w = 150\\)" }
      ]
    },
    'y9-5e-q23a': {
      question: "A mother gives her son \\(20\\text{ cents}\\) for every correct math problem and penalises him \\(10\\text{ cents}\\) for every incorrect one. The boy completed \\(30\\text{ problems}\\). If he got \\(20\\text{ problems}\\) correct, how many did he get incorrect?",
      ...shuffleOptions(["\\(10\\)", "\\(20\\)", "\\(5\\)", "\\(15\\)"], "\\(10\\)"),
      solutionSteps: [
        { explanation: "Identify the total number of problems completed, which is \\(30\\).", workingOut: "\\(\\text{Total problems} = 30\\)" },
        { explanation: "Subtract the number of correct problems (\\(20\\)) from the total to find the number of incorrect problems.", workingOut: "\\(\\text{Incorrect problems} = 30 - 20 = 10\\)" }
      ]
    },
    'y9-5e-q23b': {
      question: "A mother gives her son \\(20\\text{ cents}\\) for every correct math problem and penalises him \\(10\\text{ cents}\\) for every incorrect one. The boy completed \\(30\\text{ problems}\\). If he got \\(x\\text{ problems}\\) correct, express the number of incorrect problems in terms of \\(x\\).",
      ...shuffleOptions(["\\(30 - x\\)", "\\(x - 30\\)", "\\(30x\\)", "\\(30 + x\\)"], "\\(30 - x\\)"),
      solutionSteps: [
        { explanation: "The total number of problems is \\(30\\). Let \\(x\\) be the number of correct problems.", workingOut: "\\(\\text{Total} = 30, \\quad \\text{Correct} = x\\)" },
        { explanation: "Subtract the correct problems from the total to get the number of incorrect problems.", workingOut: "\\(\\text{Incorrect} = 30 - x\\)" }
      ]
    },
    'y9-5e-q23c': {
      question: "A mother gives her son \\(20\\text{ cents}\\) for every correct math problem and penalises him \\(10\\text{ cents}\\) for every incorrect one. The boy completed \\(30\\text{ problems}\\). If he got \\(x\\text{ problems}\\) correct, express the amount of money he receives for correct questions in cents.",
      ...shuffleOptions(["\\(20x\\)", "\\(\\frac{x}{20}\\)", "\\(20 + x\\)", "\\(20 - x\\)"], "\\(20x\\)"),
      solutionSteps: [
        { explanation: "Identify the reward for each correct problem, which is \\(20\\text{ cents}\\).", workingOut: "\\(\\text{Reward per correct problem} = 20\\text{ cents}\\)" },
        { explanation: "Multiply this reward by the number of correct problems \\(x\\) to express the total earnings.", workingOut: "\\(\\text{Total earnings} = 20 \\times x = 20x\\text{ cents}\\)" }
      ]
    },
    'y9-5e-q23d': {
      question: "A mother gives her son \\(20\\text{ cents}\\) for every correct math problem and penalises him \\(10\\text{ cents}\\) for every incorrect one. The boy completed \\(30\\text{ problems}\\). If he got \\(x\\text{ problems}\\) correct, express the total penalties for incorrect questions in cents.",
      ...shuffleOptions(["\\(10(30 - x)\\)", "\\(10x\\)", "\\(10(x - 30)\\)", "\\(30 - 10x\\)"], "\\(10(30 - x)\\)"),
      solutionSteps: [
        { explanation: "The number of incorrect problems is expressed as \\(30 - x\\).", workingOut: "\\(\\text{Incorrect} = 30 - x\\)" },
        { explanation: "Multiply the penalty per incorrect problem (\\(10\\text{ cents}\\)) by the number of incorrect problems.", workingOut: "\\(\\text{Total penalty} = 10 \\times (30 - x) = 10(30 - x)\\text{ cents}\\)" }
      ]
    },
    'y9-5e-q23e': {
      question: "A mother gives her son \\(20\\text{ cents}\\) for every correct math problem and penalises him \\(10\\text{ cents}\\) for every incorrect one. The boy completed \\(30\\text{ problems}\\). If the boy made a net profit of \\(\\$3.00\\) (300 cents), write down an equation involving \\(x\\).",
      ...shuffleOptions(["\\(20x - 10(30 - x) = 300\\)", "\\(20x + 10(30 - x) = 300\\)", "\\(10x - 20(30 - x) = 300\\)", "\\(20x - 10(30 - x) = 3\\)"], "\\(20x - 10(30 - x) = 300\\)"),
      solutionSteps: [
        { explanation: "Understand that net profit is equal to the total reward for correct questions minus the total penalty for incorrect questions.", workingOut: "\\(\\text{Net Profit} = \\text{Total Earnings} - \\text{Total Penalty}\\)" },
        { explanation: "Substitute the expressions: Total Earnings is \\(20x\\) cents, Total Penalty is \\(10(30 - x)\\) cents, and Net Profit is \\(300\\) cents.", workingOut: "\\(20x - 10(30 - x) = 300\\)" }
      ]
    },
    'y9-5e-q23f': {
      question: "A mother gives her son \\(20\\text{ cents}\\) for every correct math problem and penalises him \\(10\\text{ cents}\\) for every incorrect one. The boy completed \\(30\\text{ problems}\\). If the boy made a net profit of \\(\\$3.00\\) (300 cents), how many problems did he get correct?",
      ...shuffleOptions(["\\(20\\)", "\\(10\\)", "\\(15\\)", "\\(25\\)"], "\\(20\\)"),
      solutionSteps: [
        { explanation: "Start with the net profit equation: \\(20x - 10(30 - x) = 300\\).", workingOut: "\\(20x - 10(30 - x) = 300\\)" },
        { explanation: "Expand the bracket on the left side.", workingOut: "\\(20x - 300 + 10x = 300\\)" },
        { explanation: "Combine the like terms (variable terms) and add \\(300\\) to both sides.", workingOut: "\\(30x - 300 = 300 \\implies 30x = 600\\)" },
        { explanation: "Divide both sides by \\(30\\) to solve for the number of correct problems \\(x\\).", workingOut: "\\(x = \\frac{600}{30} \\implies x = 20\\)" }
      ]
    },
    'y9-5e-q24a': {
      question: "Two identical candles of length \\(12\\text{ cm}\\) are lit at 6 p.m. One candle burns out by 10 p.m. and the other by 12 midnight. Assume constant burning rates. How high in cm is the faster-burning candle at 7 p.m.?",
      ...shuffleOptions(["\\(9\\)", "\\(8\\)", "\\(10\\)", "\\(6\\)"], "\\(9\\)"),
      solutionSteps: [
        { explanation: "Calculate the burning rate of the faster candle, which burns for \\(4\\text{ hours}\\) (from 6 p.m. to 10 p.m.) to consume the full length of \\(12\\text{ cm}\\).", workingOut: "\\(\\text{Rate} = \\frac{12\\text{ cm}}{4\\text{ hours}} = 3\\text{ cm/h}\\)" },
        { explanation: "Find the height at 7 p.m., which is \\(1\\text{ hour}\\) after lighting, by subtracting the burnt length from the original height.", workingOut: "\\(\\text{Height} = 12 - 3 \\times 1 = 9\\text{ cm}\\)" }
      ]
    },
    'y9-5e-q24b': {
      question: "Two identical candles of length \\(12\\text{ cm}\\) are lit at 6 p.m. One candle burns out by 10 p.m. and the other by 12 midnight. Assume constant burning rates. How high in cm is the slower-burning candle at 8 p.m.?",
      ...shuffleOptions(["\\(8\\)", "\\(9\\)", "\\(10\\)", "\\(6\\)"], "\\(8\\)"),
      solutionSteps: [
        { explanation: "Calculate the burning rate of the slower candle, which burns for \\(6\\text{ hours}\\) (from 6 p.m. to 12 midnight) to consume the full length of \\(12\\text{ cm}\\).", workingOut: "\\(\\text{Rate} = \\frac{12\\text{ cm}}{6\\text{ hours}} = 2\\text{ cm/h}\\)" },
        { explanation: "Find the height at 8 p.m., which is \\(2\\text{ hours}\\) after lighting, by subtracting the burnt length from the original height.", workingOut: "\\(\\text{Height} = 12 - 2 \\times 2 = 8\\text{ cm}\\)" }
      ]
    },
    'y9-5e-q24c': {
      question: "Two identical candles of length \\(12\\text{ cm}\\) are lit at 6 p.m. One candle burns out by 10 p.m. and the other by 12 midnight. Assume constant burning rates. Express the height of the slower-burning candle in terms of time \\(t\\text{ hours}\\) after 6 p.m.",
      ...shuffleOptions(["\\(12 - 2t\\)", "\\(12 - 3t\\)", "\\(2t\\)", "\\(12 - t\\)"], "\\(12 - 2t\\)"),
      solutionSteps: [
        { explanation: "Identify the slower candle's initial height (\\(12\\text{ cm}\\)) and its burning rate (\\(2\\text{ cm/h}\\)).", workingOut: "\\(\\text{Initial Height} = 12, \\quad \\text{Rate} = 2\\text{ cm/h}\\)" },
        { explanation: "Write the expression for height after \\(t\\) hours by subtracting the burnt amount (\\(2t\\)) from the initial height.", workingOut: "\\(\\text{Height} = 12 - 2t\\)" }
      ]
    },
    'y9-5e-q24d': {
      question: "Two identical candles of length \\(12\\text{ cm}\\) are lit at 6 p.m. One candle burns out by 10 p.m. and the other by 12 midnight. Assume constant burning rates. At what time (in p.m., just write the hour number) is one candle twice as high as the other?",
      ...shuffleOptions(["\\(9\\)", "\\(8\\)", "\\(10\\)", "\\(11\\)"], "\\(9\\)"),
      solutionSteps: [
        { explanation: "Write the height equations for both candles. Slower candle: \\(12 - 2t\\), Faster candle: \\(12 - 3t\\). Set up the equation where the slower candle is twice the height of the faster candle.", workingOut: "\\(12 - 2t = 2(12 - 3t)\\)" },
        { explanation: "Expand the bracket on the right and solve for \\(t\\).", workingOut: "\\(12 - 2t = 24 - 6t \\implies 4t = 12 \\implies t = 3\\text{ hours}\\)" },
        { explanation: "Add \\(3\\text{ hours}\\) to the starting time of 6 p.m. to get the final time.", workingOut: "\\(\\text{Time} = 6\\text{ p.m.} + 3\\text{ hours} = 9\\text{ p.m.}\\)" }
      ]
    },
    'y9-5e-q3': {
      question: "When \\(18\\) is added to half of Mark's weight in kilograms, the result is \\(52\\). How much does Mark weigh?",
      ...shuffleOptions(["\\(68\\)", "\\(70\\)", "\\(80\\)", "\\(64\\)"], "\\(68\\)"),
      solutionSteps: [
        { explanation: "Let Mark's weight be \\(w\\text{ kg}\\). Write the equation representing the problem: '18 added to half of Mark's weight is 52.'", workingOut: "\\(\\frac{w}{2} + 18 = 52\\)" },
        { explanation: "Subtract \\(18\\) from both sides of the equation to isolate the fraction term.", workingOut: "\\(\\frac{w}{2} = 52 - 18 \\implies \\frac{w}{2} = 34\\)" },
        { explanation: "Multiply both sides by \\(2\\) to solve for Mark's weight \\(w\\).", workingOut: "\\(w = 34 \\times 2 \\implies w = 68\\)" }
      ]
    },
    'y9-5e-q4': {
      question: "Anna buys \\(6\\text{ notebooks}\\) and receives \\(\\$1.20\\) change from a \\(\\$15.00\\) note. How much does a notebook cost in dollars?",
      ...shuffleOptions(["\\(2.30\\)", "\\(2.50\\)", "\\(2.20\\)", "\\(2.40\\)"], "\\(2.30\\)"),
      solutionSteps: [
        { explanation: "Let the cost of one notebook be \\(n\\) dollars. Write the equation representing the purchase and change.", workingOut: "\\(6n + 1.20 = 15.00\\)" },
        { explanation: "Subtract \\(1.20\\) from both sides to isolate the cost of the notebooks.", workingOut: "\\(6n = 15.00 - 1.20 \\implies 6n = 13.80\\)" },
        { explanation: "Divide both sides by \\(6\\) to solve for the price of a single notebook \\(n\\).", workingOut: "\\(n = \\frac{13.80}{6} \\implies n = 2.30\\)" }
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
  console.log('Successfully completed detailed step expansion and MCQ conversion for 14 questions in y9-5e!');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
