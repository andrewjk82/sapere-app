import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import fs from 'fs';

const sa = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(sa) });
const db = getFirestore();

// Hardcoded step generators for precision
const customSteps = {
  'y7-23f-q1a': [ // 6x, x=4
    { e: 'Substitute \\(x = 4\\) into the expression.', w: '\\( 6(4) \\)' },
    { e: 'Multiply to find the final value.', w: '\\( 24 \\)' }
  ],
  'y7-23f-q1b': [ // 8x + 3, x=4
    { e: 'Substitute \\(x = 4\\) into the expression.', w: '\\( 8(4) + 3 \\)' },
    { e: 'Multiply first.', w: '\\( 32 + 3 \\)' },
    { e: 'Add to find the final value.', w: '\\( 35 \\)' }
  ],
  'y7-23f-q1c': [ // 8x - 3, x=4
    { e: 'Substitute \\(x = 4\\) into the expression.', w: '\\( 8(4) - 3 \\)' },
    { e: 'Multiply first.', w: '\\( 32 - 3 \\)' },
    { e: 'Subtract to find the final value.', w: '\\( 29 \\)' }
  ],
  'y7-23f-q1d': [ // x^2, x=4
    { e: 'Substitute \\(x = 4\\) into the expression.', w: '\\( (4)^2 \\)' },
    { e: 'Evaluate the square to find the final value.', w: '\\( 16 \\)' }
  ],
  'y7-23f-q1e': [ // 3x^2, x=4
    { e: 'Substitute \\(x = 4\\) into the expression.', w: '\\( 3(4)^2 \\)' },
    { e: 'Evaluate the square first.', w: '\\( 3(16) \\)' },
    { e: 'Multiply to find the final value.', w: '\\( 48 \\)' }
  ],
  'y7-23f-q1f': [ // (x + 2)(x - 2), x=4
    { e: 'Substitute \\(x = 4\\) into the expression.', w: '\\( (4 + 2)(4 - 2) \\)' },
    { e: 'Evaluate inside the brackets.', w: '\\( (6)(2) \\)' },
    { e: 'Multiply to find the final value.', w: '\\( 12 \\)' }
  ],
  'y7-23f-q1g': [ // x^3, x=4
    { e: 'Substitute \\(x = 4\\) into the expression.', w: '\\( (4)^3 \\)' },
    { e: 'Evaluate the cube to find the final value.', w: '\\( 64 \\)' }
  ],
  'y7-23f-q1h': [ // x^2 - 3x, x=4
    { e: 'Substitute \\(x = 4\\) into the expression.', w: '\\( (4)^2 - 3(4) \\)' },
    { e: 'Evaluate each part.', w: '\\( 16 - 12 \\)' },
    { e: 'Subtract to find the final value.', w: '\\( 4 \\)' }
  ],
  'y7-23f-q1i': [ // (3x + 5) \times 2x, x=4
    { e: 'Substitute \\(x = 4\\) into the expression.', w: '\\( (3(4) + 5) \\times 2(4) \\)' },
    { e: 'Evaluate the multiplication inside the brackets and the standalone term.', w: '\\( (12 + 5) \\times 8 \\)' },
    { e: 'Add inside the brackets.', w: '\\( 17 \\times 8 \\)' },
    { e: 'Multiply to find the final value.', w: '\\( 136 \\)' }
  ],
  'y7-23f-q1j': [ // 5x - 7, x=4
    { e: 'Substitute \\(x = 4\\) into the expression.', w: '\\( 5(4) - 7 \\)' },
    { e: 'Multiply first.', w: '\\( 20 - 7 \\)' },
    { e: 'Subtract to find the final value.', w: '\\( 13 \\)' }
  ],
  'y7-23f-q1k': [ // 120 \div 5x, x=4
    { e: 'Substitute \\(x = 4\\) into the expression.', w: '\\( 120 \\div (5 \\times 4) \\)' },
    { e: 'Evaluate the multiplication.', w: '\\( 120 \\div 20 \\)' },
    { e: 'Divide to find the final value.', w: '\\( 6 \\)' }
  ],
  'y7-23f-q1l': [ // (x - 1) \div 3, x=4
    { e: 'Substitute \\(x = 4\\) into the expression.', w: '\\( (4 - 1) \\div 3 \\)' },
    { e: 'Evaluate inside the brackets.', w: '\\( 3 \\div 3 \\)' },
    { e: 'Divide to find the final value.', w: '\\( 1 \\)' }
  ],
  
  // p = 2, q = 4, r = 6, s = 12
  'y7-23f-q2a': [ // p + q
    { e: 'Substitute the given values (\\(p = 2\\), \\(q = 4\\)).', w: '\\( 2 + 4 \\)' },
    { e: 'Add to find the final value.', w: '\\( 6 \\)' }
  ],
  'y7-23f-q2b': [ // p + q + r + s
    { e: 'Substitute the given values (\\(p = 2, q = 4, r = 6, s = 12\\)).', w: '\\( 2 + 4 + 6 + 12 \\)' },
    { e: 'Add to find the final value.', w: '\\( 24 \\)' }
  ],
  'y7-23f-q2c': [ // pqr - s^2
    { e: 'Substitute the given values.', w: '\\( (2)(4)(6) - (12)^2 \\)' },
    { e: 'Evaluate the multiplication and the square.', w: '\\( 48 - 144 \\)' },
    { e: 'Subtract to find the final value.', w: '\\( -96 \\)' }
  ],
  'y7-23f-q2d': [ // pqr
    { e: 'Substitute the given values.', w: '\\( (2)(4)(6) \\)' },
    { e: 'Multiply to find the final value.', w: '\\( 48 \\)' }
  ],
  'y7-23f-q2e': [ // 3p + 2q + 5r
    { e: 'Substitute the given values.', w: '\\( 3(2) + 2(4) + 5(6) \\)' },
    { e: 'Multiply each part.', w: '\\( 6 + 8 + 30 \\)' },
    { e: 'Add to find the final value.', w: '\\( 44 \\)' }
  ],
  'y7-23f-q2f': [ // 4q + 3r - s
    { e: 'Substitute the given values.', w: '\\( 4(4) + 3(6) - 12 \\)' },
    { e: 'Multiply each part.', w: '\\( 16 + 18 - 12 \\)' },
    { e: 'Calculate the final value.', w: '\\( 22 \\)' }
  ],
  'y7-23f-q2g': [ // 10qr
    { e: 'Substitute the given values.', w: '\\( 10(4)(6) \\)' },
    { e: 'Multiply to find the final value.', w: '\\( 240 \\)' }
  ],
  'y7-23f-q2h': [ // 5r - s
    { e: 'Substitute the given values.', w: '\\( 5(6) - 12 \\)' },
    { e: 'Multiply first.', w: '\\( 30 - 12 \\)' },
    { e: 'Subtract to find the final value.', w: '\\( 18 \\)' }
  ],
  'y7-23f-q2i': [ // 6s \div q
    { e: 'Substitute the given values.', w: '\\( 6(12) \\div 4 \\)' },
    { e: 'Multiply first.', w: '\\( 72 \\div 4 \\)' },
    { e: 'Divide to find the final value.', w: '\\( 18 \\)' }
  ],
  'y7-23f-q2j': [ // 7p - p^2
    { e: 'Substitute \\(p = 2\\).', w: '\\( 7(2) - (2)^2 \\)' },
    { e: 'Evaluate the multiplication and the square.', w: '\\( 14 - 4 \\)' },
    { e: 'Subtract to find the final value.', w: '\\( 10 \\)' }
  ],
  'y7-23f-q2k': [ // (r + s) - p^2
    { e: 'Substitute the given values.', w: '\\( (6 + 12) - (2)^2 \\)' },
    { e: 'Evaluate the brackets and the square.', w: '\\( 18 - 4 \\)' },
    { e: 'Subtract to find the final value.', w: '\\( 14 \\)' }
  ],
  'y7-23f-q2l': [ // q^2 + s^2 - pqr
    { e: 'Substitute the given values.', w: '\\( (4)^2 + (12)^2 - (2)(4)(6) \\)' },
    { e: 'Evaluate the squares and the multiplication.', w: '\\( 16 + 144 - 48 \\)' },
    { e: 'Calculate the final value.', w: '\\( 112 \\)' }
  ],

  // Q3: y = mx + c
  'y7-23f-q3a_0': [ // y = 3x + 2, x=0
    { e: 'Substitute \\(x = 0\\) into the equation.', w: '\\( y = 3(0) + 2 \\)' },
    { e: 'Multiply first.', w: '\\( y = 0 + 2 \\)' },
    { e: 'Add to find the final value.', w: '\\( y = 2 \\)' }
  ],
  'y7-23f-q3a_1': [ // y = 3x + 2, x=1
    { e: 'Substitute \\(x = 1\\) into the equation.', w: '\\( y = 3(1) + 2 \\)' },
    { e: 'Multiply first.', w: '\\( y = 3 + 2 \\)' },
    { e: 'Add to find the final value.', w: '\\( y = 5 \\)' }
  ],
  'y7-23f-q3a_2': [ // y = 3x + 2, x=2
    { e: 'Substitute \\(x = 2\\) into the equation.', w: '\\( y = 3(2) + 2 \\)' },
    { e: 'Multiply first.', w: '\\( y = 6 + 2 \\)' },
    { e: 'Add to find the final value.', w: '\\( y = 8 \\)' }
  ],
  'y7-23f-q3b_1': [ // y = 4x - 3, x=1
    { e: 'Substitute \\(x = 1\\) into the equation.', w: '\\( y = 4(1) - 3 \\)' },
    { e: 'Multiply first.', w: '\\( y = 4 - 3 \\)' },
    { e: 'Subtract to find the final value.', w: '\\( y = 1 \\)' }
  ],
  'y7-23f-q3b_3': [ // y = 4x - 3, x=3
    { e: 'Substitute \\(x = 3\\) into the equation.', w: '\\( y = 4(3) - 3 \\)' },
    { e: 'Multiply first.', w: '\\( y = 12 - 3 \\)' },
    { e: 'Subtract to find the final value.', w: '\\( y = 9 \\)' }
  ],
  'y7-23f-q3c_2': [ // y = 20 - 3x, x=2
    { e: 'Substitute \\(x = 2\\) into the equation.', w: '\\( y = 20 - 3(2) \\)' },
    { e: 'Multiply first.', w: '\\( y = 20 - 6 \\)' },
    { e: 'Subtract to find the final value.', w: '\\( y = 14 \\)' }
  ],
  'y7-23f-q3c_4': [ // y = 20 - 3x, x=4
    { e: 'Substitute \\(x = 4\\) into the equation.', w: '\\( y = 20 - 3(4) \\)' },
    { e: 'Multiply first.', w: '\\( y = 20 - 12 \\)' },
    { e: 'Subtract to find the final value.', w: '\\( y = 8 \\)' }
  ],
  'y7-23f-q3d_3': [ // y = 5x - 1, x=3
    { e: 'Substitute \\(x = 3\\) into the equation.', w: '\\( y = 5(3) - 1 \\)' },
    { e: 'Multiply first.', w: '\\( y = 15 - 1 \\)' },
    { e: 'Subtract to find the final value.', w: '\\( y = 14 \\)' }
  ],
  'y7-23f-q3d_5': [ // y = 5x - 1, x=5
    { e: 'Substitute \\(x = 5\\) into the equation.', w: '\\( y = 5(5) - 1 \\)' },
    { e: 'Multiply first.', w: '\\( y = 25 - 1 \\)' },
    { e: 'Subtract to find the final value.', w: '\\( y = 24 \\)' }
  ],
  'y7-23f-q3e_4': [ // y = 6x + 5, x=4
    { e: 'Substitute \\(x = 4\\) into the equation.', w: '\\( y = 6(4) + 5 \\)' },
    { e: 'Multiply first.', w: '\\( y = 24 + 5 \\)' },
    { e: 'Add to find the final value.', w: '\\( y = 29 \\)' }
  ],
  'y7-23f-q3f_6': [ // y = 40 - 6x, x=6
    { e: 'Substitute \\(x = 6\\) into the equation.', w: '\\( y = 40 - 6(6) \\)' },
    { e: 'Multiply first.', w: '\\( y = 40 - 36 \\)' },
    { e: 'Subtract to find the final value.', w: '\\( y = 4 \\)' }
  ],
  
  // Q4
  'y7-23f-q4a': [ // x=4, y=3, x+y
    { e: 'Substitute the given values (\\(x = 4\\), \\(y = 3\\)).', w: '\\( 4 + 3 \\)' },
    { e: 'Add to find the final value.', w: '\\( 7 \\)' }
  ],
  'y7-23f-q4b': [ // x=4, y=3, x-y
    { e: 'Substitute the given values (\\(x = 4\\), \\(y = 3\\)).', w: '\\( 4 - 3 \\)' },
    { e: 'Subtract to find the final value.', w: '\\( 1 \\)' }
  ],
  'y7-23f-q4c': [ // x=4, y=3, xy
    { e: 'Substitute the given values.', w: '\\( (4)(3) \\)' },
    { e: 'Multiply to find the final value.', w: '\\( 12 \\)' }
  ],
  'y7-23f-q4d': [ // x=4, y=3, x^2
    { e: 'Substitute \\(x = 4\\).', w: '\\( (4)^2 \\)' },
    { e: 'Evaluate the square to find the final value.', w: '\\( 16 \\)' }
  ],
  'y7-23f-q4e': [ // x=4, y=3, y^2
    { e: 'Substitute \\(y = 3\\).', w: '\\( (3)^2 \\)' },
    { e: 'Evaluate the square to find the final value.', w: '\\( 9 \\)' }
  ],
  'y7-23f-q4f': [ // x=4, y=3, 3x+4y
    { e: 'Substitute the given values.', w: '\\( 3(4) + 4(3) \\)' },
    { e: 'Multiply each part.', w: '\\( 12 + 12 \\)' },
    { e: 'Add to find the final value.', w: '\\( 24 \\)' }
  ],
  'y7-23f-q4g': [ // x=7, y=2, xy
    { e: 'Substitute the given values.', w: '\\( (7)(2) \\)' },
    { e: 'Multiply to find the final value.', w: '\\( 14 \\)' }
  ],
  'y7-23f-q4h': [ // x=7, y=2, x-y
    { e: 'Substitute the given values.', w: '\\( 7 - 2 \\)' },
    { e: 'Subtract to find the final value.', w: '\\( 5 \\)' }
  ],
  'y7-23f-q4i': [ // x=7, y=2, 3x+4y
    { e: 'Substitute the given values.', w: '\\( 3(7) + 4(2) \\)' },
    { e: 'Multiply each part.', w: '\\( 21 + 8 \\)' },
    { e: 'Add to find the final value.', w: '\\( 29 \\)' }
  ],
  'y7-23f-q4j': [ // x=5, y=4, x^2 + y^2
    { e: 'Substitute the given values.', w: '\\( (5)^2 + (4)^2 \\)' },
    { e: 'Evaluate the squares.', w: '\\( 25 + 16 \\)' },
    { e: 'Add to find the final value.', w: '\\( 41 \\)' }
  ]
};

async function run() {
  const snap = await db.collection('questions').where('topicId', '==', 'y7-23f').get();
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
    } else {
      console.log('No custom steps for:', doc.id);
    }
  }
  console.log(`Updated ${updatedCount} questions in y7-23f.`);
}
run().catch(console.error);
