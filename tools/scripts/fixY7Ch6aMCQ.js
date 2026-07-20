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

  // Let's load all Year 7 Chapter 6A questions
  const snap = await questionsCol.orderBy('__name__').startAt('y7-6a').endAt('y7-6a\uf8ff').get();
  console.log(`Loaded ${snap.size} questions from y7-6a. Starting MCQ conversion...`);

  const configs = {
    // Q1a ~ Q1e
    'y7-6a-q1a': {
      correct: '\\frac{y}{4}',
      wrong1: '4y',
      wrong2: 'y - 4',
      wrong3: '\\frac{4}{y}',
      steps: [
        {
          explanation: "Identify the operation for 'divided by'. Divison in algebra is written in fractional form.",
          workingOut: "y \\div 4 = \\frac{y}{4}"
        }
      ]
    },
    'y7-6a-q1b': {
      correct: '\\frac{y}{4} + 5',
      wrong1: '\\frac{y+5}{4}',
      wrong2: '4y + 5',
      wrong3: '\\frac{4}{y} + 5',
      steps: [
        {
          explanation: "Write the division part first: 'y is divided by 4'.",
          workingOut: "\\frac{y}{4}"
        },
        {
          explanation: "Add 5 to the result.",
          workingOut: "\\frac{y}{4} + 5"
        }
      ]
    },
    'y7-6a-q1c': {
      correct: '\\frac{k+8}{5}',
      wrong1: '\\frac{k}{5} + 8',
      wrong2: '5(k+8)',
      wrong3: '\\frac{5}{k+8}',
      steps: [
        {
          explanation: "Write the addition part first: '8 is added to k'.",
          workingOut: "k + 8"
        },
        {
          explanation: "Divide the entire result by 5. In algebra, this means putting the whole expression over a denominator of 5.",
          workingOut: "\\frac{k+8}{5}"
        }
      ]
    },
    'y7-6a-q1d': {
      correct: '\\frac{w-9}{6}',
      wrong1: '\\frac{w}{6} - 9',
      wrong2: '6(w-9)',
      wrong3: '\\frac{6}{w-9}',
      steps: [
        {
          explanation: "Write the subtraction part first: '9 is subtracted from w'.",
          workingOut: "w - 9"
        },
        {
          explanation: "Divide the entire result by 6. This places the subtraction expression over a denominator of 6.",
          workingOut: "\\frac{w-9}{6}"
        }
      ]
    },
    'y7-6a-q1e': {
      correct: '5\\left(\\frac{h}{9} - 2\\right)',
      wrong1: '5\\left(\\frac{h-2}{9}\\right)',
      wrong2: '5\\left(\\frac{9}{h} - 2\\right)',
      wrong3: '\\frac{5h}{9} - 2',
      steps: [
        {
          explanation: "Write the first step: 'h is divided by 9'.",
          workingOut: "\\frac{h}{9}"
        },
        {
          explanation: "Subtract 2 from the result.",
          workingOut: "\\frac{h}{9} - 2"
        },
        {
          explanation: "Multiply the entire result by 5. We use parentheses to show the whole expression is multiplied.",
          workingOut: "5\\left(\\frac{h}{9} - 2\\right)"
        }
      ]
    },

    // Q2a ~ Q2d
    'y7-6a-q2a': {
      correct: '\\frac{a+4}{4}',
      wrong1: '\\frac{a}{4} + 4',
      wrong2: '4(a+4)',
      wrong3: '\\frac{4}{a+4}',
      steps: [
        {
          explanation: "Express the division of the group \\(a+4\\) by 4 as a fraction. The group becomes the numerator.",
          workingOut: "(a+4) \\div 4 = \\frac{a+4}{4}"
        }
      ]
    },
    'y7-6a-q2b': {
      correct: '\\frac{b-6}{5}',
      wrong1: '\\frac{b}{5} - 6',
      wrong2: '5(b-6)',
      wrong3: '\\frac{5}{b-6}',
      steps: [
        {
          explanation: "Express the division of the group \\(b-6\\) by 5 as a fraction.",
          workingOut: "(b-6) \\div 5 = \\frac{b-6}{5}"
        }
      ]
    },
    'y7-6a-q2c': {
      correct: '\\frac{z+15}{8}',
      wrong1: '\\frac{z}{8} + 15',
      wrong2: '8(z+15)',
      wrong3: '\\frac{8}{z+15}',
      steps: [
        {
          explanation: "Express the division of the group \\(z+15\\) by 8 as a fraction.",
          workingOut: "(z+15) \\div 8 = \\frac{z+15}{8}"
        }
      ]
    },
    'y7-6a-q2d': {
      correct: '\\frac{32-w}{9}',
      wrong1: '\\frac{32}{9} - w',
      wrong2: '9(32-w)',
      wrong3: '\\frac{9}{32-w}',
      steps: [
        {
          explanation: "Express the division of the group \\(32-w\\) by 9 as a fraction.",
          workingOut: "(32-w) \\div 9 = \\frac{32-w}{9}"
        }
      ]
    },

    // Q3a ~ Q3d (Evaluate for y = 18)
    'y7-6a-q3a': {
      correct: '6',
      wrong1: '54',
      wrong2: '3',
      wrong3: '12',
      steps: [
        {
          explanation: "Substitute \\(y = 18\\) into the expression.",
          workingOut: "\\frac{18}{3}"
        },
        {
          explanation: "Simplify the division.",
          workingOut: "18 \\div 3 = 6"
        }
      ]
    },
    'y7-6a-q3b': {
      correct: '12',
      wrong1: '10',
      wrong2: '15',
      wrong3: '6',
      steps: [
        {
          explanation: "Substitute \\(y = 18\\) into the expression.",
          workingOut: "\\frac{18}{6} + 9"
        },
        {
          explanation: "Perform the division first according to order of operations.",
          workingOut: "3 + 9"
        },
        {
          explanation: "Perform the addition.",
          workingOut: "12"
        }
      ]
    },
    'y7-6a-q3c': {
      correct: '6',
      wrong1: '15',
      wrong2: '30',
      wrong3: '5',
      steps: [
        {
          explanation: "Substitute \\(y = 18\\) into the numerator.",
          workingOut: "\\frac{18 + 12}{5}"
        },
        {
          explanation: "Evaluate the addition in the numerator first.",
          workingOut: "\\frac{30}{5}"
        },
        {
          explanation: "Divide to find the final value.",
          workingOut: "30 \\div 5 = 6"
        }
      ]
    },
    'y7-6a-q3d': {
      correct: '11',
      wrong1: '22',
      wrong2: '29',
      wrong3: '12',
      steps: [
        {
          explanation: "Substitute \\(y = 18\\) into the expression.",
          workingOut: "\\frac{40 - 18}{2}"
        },
        {
          explanation: "Evaluate the subtraction in the numerator.",
          workingOut: "\\frac{22}{2}"
        },
        {
          explanation: "Divide to find the value.",
          workingOut: "22 \\div 2 = 11"
        }
      ]
    },

    // Q4a ~ Q4d (Evaluate for a = 4, b = 12)
    'y7-6a-q4a': {
      correct: '\\frac{1}{3}',
      wrong1: '3',
      wrong2: '8',
      wrong3: '\\frac{1}{4}',
      steps: [
        {
          explanation: "Substitute \\(a = 4\\) and \\(b = 12\\) into the fraction.",
          workingOut: "\\frac{4}{12}"
        },
        {
          explanation: "Simplify the fraction by dividing the numerator and denominator by their greatest common divisor 4.",
          workingOut: "\\frac{4 \\div 4}{12 \\div 4} = \\frac{1}{3}"
        }
      ]
    },
    'y7-6a-q4b': {
      correct: '2',
      wrong1: '4',
      wrong2: '3',
      wrong3: '1',
      steps: [
        {
          explanation: "Substitute \\(a = 4\\) and \\(b = 12\\) into the expression.",
          workingOut: "\\frac{12 - 4}{4}"
        },
        {
          explanation: "Calculate the numerator first.",
          workingOut: "\\frac{8}{4}"
        },
        {
          explanation: "Divide to find the final value.",
          workingOut: "8 \\div 4 = 2"
        }
      ]
    },
    'y7-6a-q4c': {
      correct: '11',
      wrong1: '7',
      wrong2: '17',
      wrong3: '9',
      steps: [
        {
          explanation: "Substitute \\(a = 4\\) into the expression.",
          workingOut: "\\frac{24}{4} + 5"
        },
        {
          explanation: "Evaluate the division part first.",
          workingOut: "6 + 5"
        },
        {
          explanation: "Add to find the final value.",
          workingOut: "11"
        }
      ]
    },
    'y7-6a-q4d': {
      correct: '1',
      wrong1: '4',
      wrong2: '0',
      wrong3: '2',
      steps: [
        {
          explanation: "Substitute \\(a = 4\\) and \\(b = 12\\) into the expression.",
          workingOut: "\\frac{4(4) - 12}{4}"
        },
        {
          explanation: "Perform the multiplication in the numerator first.",
          workingOut: "\\frac{16 - 12}{4}"
        },
        {
          explanation: "Calculate the subtraction in the numerator.",
          workingOut: "\\frac{4}{4}"
        },
        {
          explanation: "Divide to find the final value.",
          workingOut: "4 \\div 4 = 1"
        }
      ]
    },

    // Q5a ~ Q5b
    'y7-6a-q5a': {
      correct: '\\frac{x}{4}',
      wrong1: '4x',
      wrong2: 'x - 4',
      wrong3: '\\frac{4}{x}',
      steps: [
        {
          explanation: "Write the division representing the sharing of \\(x\\) oranges equally among 4 boxes.",
          workingOut: "x \\div 4 = \\frac{x}{4}"
        }
      ]
    },
    'y7-6a-q5b': {
      correct: '\\frac{x}{4} + 7',
      wrong1: '\\frac{x+7}{4}',
      wrong2: '4x + 7',
      wrong3: '\\frac{x}{7} + 4',
      steps: [
        {
          explanation: "Write the expression for the initial oranges in each box.",
          workingOut: "\\frac{x}{4}"
        },
        {
          explanation: "Add 7 oranges to each box.",
          workingOut: "\\frac{x}{4} + 7"
        }
      ]
    },

    // Q6a ~ Q6b
    'y7-6a-q6a': {
      correct: 'w + 800',
      wrong1: 'w - 800',
      wrong2: '800w',
      wrong3: '\\frac{w}{800}',
      steps: [
        {
          explanation: "Represent the addition of an extra 800 litres of water to \\(w\\) litres.",
          workingOut: "w + 800"
        }
      ]
    },
    'y7-6a-q6b': {
      correct: '\\frac{w+800}{8}',
      wrong1: '\\frac{w}{8} + 800',
      wrong2: '8(w+800)',
      wrong3: '\\frac{w-800}{8}',
      steps: [
        {
          explanation: "Write the expression for the total volume of water after adding 800 litres.",
          workingOut: "w + 800"
        },
        {
          explanation: "Distribute the total water equally into 8 containers by dividing the entire expression by 8.",
          workingOut: "\\frac{w+800}{8}"
        }
      ]
    },

    // Q7a ~ Q7b
    'y7-6a-q7a': {
      correct: 'n - 4',
      wrong1: 'n + 4',
      wrong2: '\\frac{n}{4}',
      wrong3: '4 - n',
      steps: [
        {
          explanation: "Subtract the 4 removed questions from the initial \\(n\\) questions.",
          workingOut: "n - 4"
        }
      ]
    },
    'y7-6a-q7b': {
      correct: '\\frac{50}{n-4}',
      wrong1: '\\frac{n-4}{50}',
      wrong2: '50(n-4)',
      wrong3: '\\frac{50}{n} - 4',
      steps: [
        {
          explanation: "Represent the number of questions students must complete.",
          workingOut: "n - 4"
        },
        {
          explanation: "Divide the total time of 50 minutes by the number of questions to find the average time per question.",
          workingOut: "\\frac{50}{n-4}"
        }
      ]
    },

    // Q8a ~ Q8b
    'y7-6a-q8a': {
      correct: '\\frac{w}{6}',
      wrong1: '\\frac{w}{5}',
      wrong2: '6w',
      wrong3: 'w - 6',
      steps: [
        {
          explanation: "Identify the total number of people sharing the bill: John plus his 5 friends.",
          workingOut: "\\text{Total people} = 1 + 5 = 6"
        },
        {
          explanation: "Divide the total bill of \\(w\\) dollars equally among 6 people.",
          workingOut: "\\frac{w}{6}"
        }
      ]
    },
    'y7-6a-q8b': {
      correct: '100 - \\frac{w}{6}',
      wrong1: '\\frac{100-w}{6}',
      wrong2: '100 - \\frac{w}{5}',
      wrong3: '\\frac{w}{6} - 100',
      steps: [
        {
          explanation: "Recall John's share of the bill.",
          workingOut: "\\frac{w}{6}"
        },
        {
          explanation: "Subtract his share from the 100-dollar note he had.",
          workingOut: "100 - \\frac{w}{6}"
        }
      ]
    }
  };

  for (const [id, cfg] of Object.entries(configs)) {
    const docRef = questionsCol.doc(id);

    // Make options using LaTeX wrapper formatting
    const rawOptions = makeOptions(`\\(${cfg.correct}\\)`, `\\(${cfg.wrong1}\\)`, `\\(${cfg.wrong2}\\)`, `\\(${cfg.wrong3}\\)`);
    const { options, answer } = shuffleOptions(rawOptions, `\\(${cfg.correct}\\)`);

    // Ensure all workingOut steps are wrapped in \(\) delimiters
    const wrappedSteps = cfg.steps.map(step => {
      let wo = step.workingOut || "";
      if (wo.trim() && !wo.startsWith('\\(') && !wo.startsWith('$$') && !wo.startsWith('$')) {
        wo = `\\(${wo}\\)`;
      }
      return {
        ...step,
        workingOut: wo
      };
    });

    console.log(`Directly converting and updating ${id} on Firestore...`);
    batch.update(docRef, {
      type: 'multiple_choice',
      options,
      answer,
      solutionSteps: wrappedSteps,
      requiresManualGrading: false
    });
  }

  // Bump sync version
  const questionsMetaRef = db.doc('sync_meta/questions');
  const now = Date.now();
  batch.update(questionsMetaRef, {
    version: now,
    membershipVersion: now,
    updatedAt: FieldValue.serverTimestamp()
  });

  await batch.commit();
  console.log('Successfully completed Chapter 6A direct database updates!');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
