import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// Helper to shuffle options array and return new array with correct answer index
function shuffleOptions(options, correctValue) {
  const arr = [...options];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  const correctIdx = arr.findIndex(opt => {
    const val = typeof opt === 'object' ? opt.text : opt;
    return val === correctValue;
  });
  return { options: arr, answer: String(correctIdx) };
}

function makeOptions(correctVal, wrong1, wrong2, wrong3) {
  return [correctVal, wrong1, wrong2, wrong3];
}

async function run() {
  const batch = db.batch();
  const questionsCol = db.collection('questions');

  const configs = {
    'y9-5h-q11': {
      correct: 'p \\le 3',
      wrong1: 'p \\ge 3',
      wrong2: 'p \\le -3',
      wrong3: 'p > 3',
      steps: [
        {
          explanation: "Formulate the inequality from the verbal description. '3p subtracted from 15' is \\(15 - 3p\\), and 'greater than or equal to 6' is \\(\\ge 6\\).",
          workingOut: "15 - 3p \\ge 6"
        },
        {
          explanation: "Subtract 15 from both sides to isolate the variable term.",
          workingOut: "-3p \\ge 6 - 15 \\implies -3p \\ge -9"
        },
        {
          explanation: "Divide both sides by \\(-3\\). **Remember to flip the inequality sign** from \\(\\ge\\) to \\(\\le\\) because we are dividing by a negative number.",
          workingOut: "p \\le \\frac{-9}{-3} \\implies p \\le 3"
        }
      ]
    },
    'y9-5h-q12': {
      correct: 'd > 6',
      wrong1: 'd < 6',
      wrong2: 'd > 14',
      wrong3: 'd \\ge 6',
      steps: [
        {
          explanation: "Write down the inequality representing the statement: the sum of \\(5d\\) and 8 is greater than the sum of \\(3d\\) and 20.",
          workingOut: "5d + 8 > 3d + 20"
        },
        {
          explanation: "Subtract \\(3d\\) from both sides to group the variable terms.",
          workingOut: "2d + 8 > 20"
        },
        {
          explanation: "Subtract 8 from both sides.",
          workingOut: "2d > 12"
        },
        {
          explanation: "Divide both sides by 2 to find the solution.",
          workingOut: "d > 6"
        }
      ]
    },
    'y9-5h-q13': {
      correct: 'a > -7.5',
      wrong1: 'a < -7.5',
      wrong2: 'a > -2.5',
      wrong3: 'a > 7.5',
      steps: [
        {
          explanation: "Formulate the inequality: 'a number \\(a\\) increased by 5' is \\(a + 5\\). 'This amount tripled' is \\(3(a + 5)\\). This is greater than \\(a\\).",
          workingOut: "3(a + 5) > a"
        },
        {
          explanation: "Expand the left side of the inequality.",
          workingOut: "3a + 15 > a"
        },
        {
          explanation: "Subtract \\(a\\) from both sides to collect variables on one side.",
          workingOut: "2a + 15 > 0"
        },
        {
          explanation: "Subtract 15 from both sides.",
          workingOut: "2a > -15"
        },
        {
          explanation: "Divide by 2 to obtain the solution.",
          workingOut: "a > -7.5"
        }
      ]
    },
    'y9-5h-q14ai': {
      correct: '30 + 0.05x',
      wrong1: '30 + 5x',
      wrong2: '30 + 0.5x',
      wrong3: '30 - 0.05x',
      steps: [
        {
          explanation: "Convert the variable cost per kilometer from cents to dollars. Since there are 100 cents in a dollar, 5 cents is equal to \\(\\$0.05\\).",
          workingOut: "5\\text{ cents} = \\$\\frac{5}{100} = \\$0.05"
        },
        {
          explanation: "Form the expression by adding the fixed cost to the variable cost for \\(x\\) kilometers.",
          workingOut: "\\text{Cost} = 30 + 0.05x"
        }
      ]
    },
    'y9-5h-q14aii': {
      correct: '25 + 0.07x',
      wrong1: '25 + 7x',
      wrong2: '25 + 0.7x',
      wrong3: '25 - 0.07x',
      steps: [
        {
          explanation: "Convert 7 cents to dollars to maintain consistent units.",
          workingOut: "7\\text{ cents} = \\$\\frac{7}{100} = \\$0.07"
        },
        {
          explanation: "Write the expression adding the flat rate of \\(\\$25\\) and the per-kilometer cost.",
          workingOut: "\\text{Cost} = 25 + 0.07x"
        }
      ]
    },
    'y9-5h-q14b': {
      correct: 'x > 250',
      wrong1: 'x < 250',
      wrong2: 'x > 25',
      wrong3: 'x > 500',
      steps: [
        {
          explanation: "Set up the inequality where GoCar is cheaper (better deal) than DriveSafe.",
          workingOut: "\\text{Cost}_{\\text{GoCar}} < \\text{Cost}_{\\text{DriveSafe}} \\implies 30 + 0.05x < 25 + 0.07x"
        },
        {
          explanation: "Subtract 25 from both sides of the inequality.",
          workingOut: "5 + 0.05x < 0.07x"
        },
        {
          explanation: "Subtract \\(0.05x\\) from both sides to group variable terms on the right side.",
          workingOut: "5 < 0.02x"
        },
        {
          explanation: "Divide both sides by 0.02 to solve for \\(x\\). Note that dividing by 0.02 is equivalent to multiplying by 50.",
          workingOut: "x > \\frac{5}{0.02} \\implies x > 250"
        }
      ]
    }
  };

  for (const [id, cfg] of Object.entries(configs)) {
    const docRef = questionsCol.doc(id);

    const rawOptions = makeOptions(`\\(${cfg.correct}\\)`, `\\(${cfg.wrong1}\\)`, `\\(${cfg.wrong2}\\)`, `\\(${cfg.wrong3}\\)`);
    const { options, answer } = shuffleOptions(rawOptions, `\\(${cfg.correct}\\)`);

    console.log(`Updating ${id} directly to Firestore database...`);
    batch.update(docRef, {
      type: 'multiple_choice',
      options,
      answer,
      solutionSteps: cfg.steps,
      requiresManualGrading: false
    });
  }

  // Update sync metadata
  const questionsMetaRef = db.doc('sync_meta/questions');
  const now = Date.now();
  batch.update(questionsMetaRef, {
    version: now,
    membershipVersion: now,
    updatedAt: FieldValue.serverTimestamp()
  });

  await batch.commit();
  console.log('Successfully completed conversion for the remaining questions of Year 9 Chapter 5H!');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
