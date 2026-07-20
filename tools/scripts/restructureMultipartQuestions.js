import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// Helper to convert plain string options to standard { text, imageUrl } objects
function mapOptions(opts) {
  return opts.map(o => ({ text: String(o), imageUrl: '' }));
}

async function run() {
  const batch = db.batch();

  // 1. Restructure: 5mp8RUumG6gnKZWZTFKR (Consider y = 3x - 6)
  const q1Ref = db.collection('questions').doc('5mp8RUumG6gnKZWZTFKR');
  batch.update(q1Ref, {
    type: 'subquestions',
    // Clear root level options and answers since they are moved to subQuestions
    options: FieldValue.delete(),
    answer: FieldValue.delete(),
    solutionSteps: FieldValue.delete(),
    subQuestions: [
      {
        id: '5mp8RUumG6gnKZWZTFKR-sub1',
        type: 'multiple_choice',
        question: 'Part (a)(i): Find the \\(x\\)-intercept of the line \\(y = 3x - 6\\).',
        options: mapOptions(['x = 2', 'x = -2', 'x = 6', 'x = 3']),
        answer: 'x = 2',
        solutionSteps: [
          {
            explanation: 'To find the \\(x\\)-intercept of any line, set \\(y = 0\\) and solve the resulting equation for \\(x\\).',
            workingOut: '\\(0 = 3x - 6\\)'
          },
          {
            explanation: 'Add 6 to both sides of the equation.',
            workingOut: '\\(3x = 6\\)'
          },
          {
            explanation: 'Divide both sides by 3 to isolate \\(x\\).',
            workingOut: '\\(x = 2\\)'
          }
        ]
      },
      {
        id: '5mp8RUumG6gnKZWZTFKR-sub2',
        type: 'multiple_choice',
        question: 'Part (a)(ii): Solve the inequality \\(3x - 6 \\ge 0\\).',
        options: mapOptions(['x \\ge 2', 'x \\le 2', 'x \\ge -2', 'x \\le -2']),
        answer: 'x \\ge 2',
        solutionSteps: [
          {
            explanation: 'Start with the given linear inequality.',
            workingOut: '\\(3x - 6 \\ge 0\\)'
          },
          {
            explanation: 'Add 6 to both sides of the inequality. Since adding a constant preserves the inequality sign, its direction is unchanged.',
            workingOut: '\\(3x \\ge 6\\)'
          },
          {
            explanation: 'Divide both sides by the positive coefficient 3 to solve for \\(x\\). Since 3 is positive, the inequality sign direction remains unchanged.',
            workingOut: '\\(x \\ge 2\\)'
          }
        ]
      }
    ]
  });

  // 2. Restructure: k636TsnDdWnnz9jySLEt (Consider y = 3x - 2 and y = 4 - x)
  const q2Ref = db.collection('questions').doc('k636TsnDdWnnz9jySLEt');
  batch.update(q2Ref, {
    type: 'subquestions',
    options: FieldValue.delete(),
    answer: FieldValue.delete(),
    solutionSteps: FieldValue.delete(),
    subQuestions: [
      {
        id: 'k636TsnDdWnnz9jySLEt-sub1',
        type: 'multiple_choice',
        question: 'Part (b)(i): Find the point of intersection of the lines \\(y = 3x - 2\\) and \\(y = 4 - x\\).',
        options: mapOptions(['x = 1.5', 'x = 2', 'x = 1', 'x = 3']),
        answer: 'x = 1.5',
        solutionSteps: [
          {
            explanation: 'To find the intersection of the two lines, set their equations equal to each other.',
            workingOut: '\\(3x - 2 = 4 - x\\)'
          },
          {
            explanation: 'Group the variable terms by adding \\(x\\) to both sides, and group constants by adding 2 to both sides.',
            workingOut: '\\(3x + x = 4 + 2 \\implies 4x = 6\\)'
          },
          {
            explanation: 'Divide both sides by 4 to solve for \\(x\\).',
            workingOut: '\\(x = 1.5\\)'
          }
        ]
      },
      {
        id: 'k636TsnDdWnnz9jySLEt-sub2',
        type: 'multiple_choice',
        question: 'Part (b)(ii): Solve the inequality \\(3x - 2 < 4 - x\\).',
        options: mapOptions(['x < 1.5', 'x > 1.5', 'x < 1', 'x > 2']),
        answer: 'x < 1.5',
        solutionSteps: [
          {
            explanation: 'Add \\(x\\) to both sides to collect the variable terms on the left side.',
            workingOut: '\\(3x + x - 2 < 4 \\implies 4x - 2 < 4\\)'
          },
          {
            explanation: 'Add 2 to both sides to isolate the term with the variable.',
            workingOut: '\\(4x < 4 + 2 \\implies 4x < 6\\)'
          },
          {
            explanation: 'Divide both sides by the positive number 4.',
            workingOut: '\\(x < 1.5\\)'
          }
        ]
      }
    ]
  });

  // 3. Restructure: GnDb6aFhWOGVJqpDoVK7 (Business cost/revenue)
  const q3Ref = db.collection('questions').doc('GnDb6aFhWOGVJqpDoVK7');
  batch.update(q3Ref, {
    type: 'subquestions',
    options: FieldValue.delete(),
    answer: FieldValue.delete(),
    solutionSteps: FieldValue.delete(),
    subQuestions: [
      {
        id: 'GnDb6aFhWOGVJqpDoVK7-sub1',
        type: 'multiple_choice',
        question: 'Business Part (i): Find the break-even point (number of items where revenue equals cost).',
        options: mapOptions(['40 items', '30 items', '50 items', '45 items']),
        answer: '40 items',
        solutionSteps: [
          {
            explanation: 'The cost function is \\(C = 1200 + 40x\\) and the revenue function is \\(R = 70x\\), where \\(x\\) is the number of items. Set Cost equal to Revenue to find the break-even point.',
            workingOut: '\\(1200 + 40x = 70x\\)'
          },
          {
            explanation: 'Subtract \\(40x\\) from both sides to group variable terms.',
            workingOut: '\\(1200 = 30x\\)'
          },
          {
            explanation: 'Divide both sides by 30 to find \\(x\\).',
            workingOut: '\\(x = 40\\)'
          }
        ]
      },
      {
        id: 'GnDb6aFhWOGVJqpDoVK7-sub2',
        type: 'multiple_choice',
        question: 'Business Part (ii): Find the minimum number of items to cover a loss of at most $500.',
        options: mapOptions(['24 items', '23 items', '25 items', '20 items']),
        answer: '24 items',
        solutionSteps: [
          {
            explanation: 'Profit is given by Revenue minus Cost. We want profit to be at least -500 (meaning loss is at most 500).',
            workingOut: '\\(70x - (1200 + 40x) \\ge -500\\)'
          },
          {
            explanation: 'Simplify the expression on the left side.',
            workingOut: '\\(30x - 1200 \\ge -500\\)'
          },
          {
            explanation: 'Add 1200 to both sides.',
            workingOut: '\\(30x \\ge 700\\)'
          },
          {
            explanation: 'Divide by 30. Since number of items must be a whole integer, we round up 23.33 to the next whole number.',
            workingOut: '\\(x \\ge 23.33 \\implies x = 24\\)'
          }
        ]
      },
      {
        id: 'GnDb6aFhWOGVJqpDoVK7-sub3',
        type: 'multiple_choice',
        question: 'Business Part (iii): Find the number of items needed to make a profit of $1500.',
        options: mapOptions(['90 items', '85 items', '95 items', '80 items']),
        answer: '90 items',
        solutionSteps: [
          {
            explanation: 'Set the profit expression equal to 1500.',
            workingOut: '\\(70x - (1200 + 40x) = 1500\\)'
          },
          {
            explanation: 'Simplify the equation.',
            workingOut: '\\(30x - 1200 = 1500\\)'
          },
          {
            explanation: 'Add 1200 to both sides.',
            workingOut: '\\(30x = 2700\\)'
          },
          {
            explanation: 'Divide both sides by 30 to solve for \\(x\\).',
            workingOut: '\\(x = 90\\)'
          }
        ]
      }
    ]
  });

  const questionsMetaRef = db.doc('sync_meta/questions');
  const now = Date.now();
  batch.update(questionsMetaRef, {
    version: now,
    membershipVersion: now,
    updatedAt: FieldValue.serverTimestamp()
  });

  await batch.commit();
  console.log('Successfully restructured multi-part questions into subquestions with detailed steps and MCQs!');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
