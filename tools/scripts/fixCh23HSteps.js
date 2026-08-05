import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import fs from 'fs';

const sa = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(sa) });
const db = getFirestore();

const customSteps = {
  // Q3: p = 2, q = 3
  'y7-23h-q3a': [
    { e: 'Substitute \\(p = 2\\) into the expression.', w: '\\( (2)^3 \\)' },
    { e: 'Evaluate the cube to find the final value.', w: '\\( 8 \\)' }
  ],
  'y7-23h-q3b': [
    { e: 'Substitute \\(p = 2\\) into the expression.', w: '\\( (2)^5 \\)' },
    { e: 'Evaluate the power to find the final value.', w: '\\( 32 \\)' }
  ],
  'y7-23h-q3c': [
    { e: 'Substitute the given values (\\(p = 2\\), \\(q = 3\\)).', w: '\\( (2)(3)^2 \\)' },
    { e: 'Evaluate the square first.', w: '\\( (2)(9) \\)' },
    { e: 'Multiply to find the final value.', w: '\\( 18 \\)' }
  ],
  'y7-23h-q3d': [
    { e: 'Substitute \\(p = 2\\) into the expression.', w: '\\( (2)^4 \\)' },
    { e: 'Evaluate the power to find the final value.', w: '\\( 16 \\)' }
  ],
  'y7-23h-q3e': [
    { e: 'Substitute \\(q = 3\\) into the expression.', w: '\\( (3)^3 \\)' },
    { e: 'Evaluate the cube to find the final value.', w: '\\( 27 \\)' }
  ],
  'y7-23h-q3f': [
    { e: 'Substitute the given values (\\(p = 2\\), \\(q = 3\\)).', w: '\\( (2)^3(3)^2 \\)' },
    { e: 'Evaluate the powers.', w: '\\( (8)(9) \\)' },
    { e: 'Multiply to find the final value.', w: '\\( 72 \\)' }
  ],
  'y7-23h-q3g': [
    { e: 'Substitute \\(q = 3\\) into the expression.', w: '\\( (3)^4 \\)' },
    { e: 'Evaluate the power to find the final value.', w: '\\( 81 \\)' }
  ],
  'y7-23h-q3h': [
    { e: 'Substitute \\(p = 2\\) into the expression.', w: '\\( (2)^6 \\)' },
    { e: 'Evaluate the power to find the final value.', w: '\\( 64 \\)' }
  ],
  'y7-23h-q3i': [
    { e: 'Substitute the given values (\\(p = 2\\), \\(q = 3\\)).', w: '\\( 4(2)(3) \\)' },
    { e: 'Multiply to find the final value.', w: '\\( 24 \\)' }
  ],
  'y7-23h-q3j': [
    { e: 'Substitute \\(q = 3\\) into the expression.', w: '\\( (3)^2 \\)' },
    { e: 'Evaluate the square to find the final value.', w: '\\( 9 \\)' }
  ],
  'y7-23h-q3k': [
    { e: 'Substitute the given values (\\(p = 2\\), \\(q = 3\\)).', w: '\\( (2)^2(3)^2 \\)' },
    { e: 'Evaluate the squares.', w: '\\( (4)(9) \\)' },
    { e: 'Multiply to find the final value.', w: '\\( 36 \\)' }
  ],
  'y7-23h-q3l': [
    { e: 'Substitute the given values (\\(p = 2\\), \\(q = 3\\)).', w: '\\( 5(2)^2(3) \\)' },
    { e: 'Evaluate the square first.', w: '\\( 5(4)(3) \\)' },
    { e: 'Multiply to find the final value.', w: '\\( 60 \\)' }
  ],

  // Q6: x = 4, y = 5
  'y7-23h-q6a': [
    { e: 'Substitute the given values (\\(x = 4\\), \\(y = 5\\)).', w: '\\( (4)^2 + 5 \\)' },
    { e: 'Evaluate the square first.', w: '\\( 16 + 5 \\)' },
    { e: 'Add to find the final value.', w: '\\( 21 \\)' }
  ],
  'y7-23h-q6b': [
    { e: 'Substitute the given values.', w: '\\( (4)^2(5) \\)' },
    { e: 'Evaluate the square first.', w: '\\( (16)(5) \\)' },
    { e: 'Multiply to find the final value.', w: '\\( 80 \\)' }
  ],
  'y7-23h-q6c': [
    { e: 'Substitute the given values.', w: '\\( (4)^2 + (5)^2 \\)' },
    { e: 'Evaluate the squares.', w: '\\( 16 + 25 \\)' },
    { e: 'Add to find the final value.', w: '\\( 41 \\)' }
  ],
  'y7-23h-q6d': [
    { e: 'Substitute the given values.', w: '\\( (4)(5)^2 \\)' },
    { e: 'Evaluate the square first.', w: '\\( (4)(25) \\)' },
    { e: 'Multiply to find the final value.', w: '\\( 100 \\)' }
  ],
  'y7-23h-q6e': [
    { e: 'Substitute the given values.', w: '\\( (4)^3 + (5)^2 \\)' },
    { e: 'Evaluate the powers.', w: '\\( 64 + 25 \\)' },
    { e: 'Add to find the final value.', w: '\\( 89 \\)' }
  ],
  'y7-23h-q6f': [
    { e: 'Substitute the given values.', w: '\\( (4)^2(5)^2 \\)' },
    { e: 'Evaluate the squares.', w: '\\( (16)(25) \\)' },
    { e: 'Multiply to find the final value.', w: '\\( 400 \\)' }
  ]
};

async function run() {
  const snap = await db.collection('questions').where('topicId', '==', 'y7-23h').get();
  let updatedCount = 0;
  for (const doc of snap.docs) {
    const custom = customSteps[doc.id];
    if (custom) {
      const steps = custom.map(s => ({
        explanation: s.e,
        workingOut: s.w,
        graphData: null
      }));
      await db.collection('questions').doc(doc.id).update({ solutionSteps: steps });
      updatedCount++;
    }
  }
  console.log(`Updated ${updatedCount} evaluation questions in y7-23h.`);
}
run().catch(console.error);
