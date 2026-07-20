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

  // 1. y9-5a-1
  batch.update(questionsCol.doc('y9-5a-1'), {
    solutionSteps: [
      {
        explanation: "Identify the base value: Daniel's height is given as \\(h\\) cm.",
        workingOut: "\\text{Daniel's Height} = h"
      },
      {
        explanation: "Translate '8 cm taller than Daniel' into a mathematical operation: 'taller' means we add \\(8\\) to Daniel's height.",
        workingOut: "\\text{Chloe's Height} = h + 8"
      }
    ]
  });

  // 2. y9-5a-2
  batch.update(questionsCol.doc('y9-5a-2'), {
    solutionSteps: [
      {
        explanation: "Identify the base value: Lily's weight is given as \\(w\\) kg.",
        workingOut: "\\text{Lily's Weight} = w"
      },
      {
        explanation: "Translate '7 kg more than Lily' into a mathematical operation: 'more than' means we add \\(7\\) to Lily's weight.",
        workingOut: "\\text{Marcus's Weight} = w + 7"
      }
    ]
  });

  // 3. y9-5a-3
  batch.update(questionsCol.doc('y9-5a-3'), {
    solutionSteps: [
      {
        explanation: "Let Bella's age be represented by \\(b\\). Translate 'Bella's age is doubled' to \\(2b\\).",
        workingOut: "\\text{Bella's age doubled} = 2b"
      },
      {
        explanation: "Translate the relation: this doubled age is equal to \\(6\\) years less than her father's age \\(f\\). So: \\(2b = f - 6\\).",
        workingOut: "2b = f - 6"
      },
      {
        explanation: "Isolate \\(b\\) to express Bella's age by dividing both sides of the equation by \\(2\\).",
        workingOut: "b = \\frac{f - 6}{2}"
      }
    ]
  });

  // 4. y9-5a-4 (Multi-part container)
  batch.update(questionsCol.doc('y9-5a-4'), {
    subQuestions: [
      {
        id: "y9-5a-4a",
        type: "multiple_choice",
        question: "a) If \\(w\\) metres is the width of the rectangle, express the length of the rectangle in terms of \\(w\\).",
        ...shuffleOptions(["\\(w - 6\\)", "\\(w + 6\\)", "\\(6w\\)", "\\(6 - w\\)"], "\\(w + 6\\)"),
        solutionSteps: [
          {
            explanation: "Identify the width: \\(w\\) metres.",
            workingOut: "\\text{Width} = w"
          },
          {
            explanation: "Translate '6 metres more than its width' to a mathematical operation: add \\(6\\) to the width.",
            workingOut: "\\text{Length} = w + 6"
          }
        ],
        graphData: null
      },
      {
        id: "y9-5a-4b",
        type: "multiple_choice",
        question: "b) If \\(l\\) metres is the length of the rectangle, express the width of the rectangle in terms of \\(l\\).",
        ...shuffleOptions(["\\(l - 6\\)", "\\(l + 6\\)", "\\(6l\\)", "\\(6 - l\\)"], "\\(l - 6\\)"),
        solutionSteps: [
          {
            explanation: "Write down the relation between length \\(l\\) and width \\(w\\): \\(l = w + 6\\).",
            workingOut: "l = w + 6"
          },
          {
            explanation: "To express the width \\(w\\) in terms of \\(l\\), rearrange the equation by subtracting \\(6\\) from both sides.",
            workingOut: "w = l - 6"
          }
        ],
        graphData: null
      }
    ],
    solutionSteps: [
      {
        explanation: "For part a: Length is 6 metres more than width \\(w\\), so we add \\(6\\) to \\(w\\).",
        workingOut: "l = w + 6"
      },
      {
        explanation: "For part b: Solve for width \\(w\\) by subtracting \\(6\\) from both sides of the equation.",
        workingOut: "w = l - 6"
      }
    ]
  });

  // 5. y9-5a-5 (Multi-part container)
  batch.update(questionsCol.doc('y9-5a-5'), {
    subQuestions: [
      {
        id: "y9-5a-5a",
        type: "multiple_choice",
        question: "a) Express the number of points Alice scored in terms of \\(b\\).",
        ...shuffleOptions(["\\(b - 15\\)", "\\(b + 15\\)", "\\(15b\\)", "\\(15 - b\\)"], "\\(b + 15\\)"),
        solutionSteps: [
          {
            explanation: "Identify Bob's score: \\(b\\) points.",
            workingOut: "\\text{Bob} = b"
          },
          {
            explanation: "Translate 'Alice scored 15 points more than Bob' into an operation: add \\(15\\) to Bob's score.",
            workingOut: "\\text{Alice} = b + 15"
          }
        ],
        graphData: null
      },
      {
        id: "y9-5a-5b",
        type: "multiple_choice",
        question: "b) Express the number of points Charlie scored in terms of \\(b\\).",
        ...shuffleOptions(["\\(2b + 4\\)", "\\(2b - 4\\)", "\\(4 - 2b\\)", "\\(4b - 2\\)"], "\\(2b - 4\\)"),
        solutionSteps: [
          {
            explanation: "Identify twice Bob's score: \\(2 \\times b = 2b\\).",
            workingOut: "\\text{Twice Bob's score} = 2b"
          },
          {
            explanation: "Translate 'Charlie scored 4 points less than twice Bob's score': subtract \\(4\\) from \\(2b\\).",
            workingOut: "\\text{Charlie} = 2b - 4"
          }
        ],
        graphData: null
      }
    ],
    solutionSteps: [
      {
        explanation: "For part a: Alice scored 15 more than Bob (\\(b\\)), which yields \\(b + 15\\).",
        workingOut: "\\text{Alice} = b + 15"
      },
      {
        explanation: "For part b: Twice Bob's score is \\(2b\\). Charlie scored 4 less than this, yielding \\(2b - 4\\).",
        workingOut: "\\text{Charlie} = 2b - 4"
      }
    ]
  });

  // 6. y9-5a-6
  batch.update(questionsCol.doc('y9-5a-6'), {
    solutionSteps: [
      {
        explanation: "Identify the dimensions: Width is \\(w\\). Length is '5 km less than 3 times the width', which is \\(3w - 5\\).",
        workingOut: "\\text{Width} = w, \\quad \\text{Length} = 3w - 5"
      },
      {
        explanation: "Use the perimeter formula for a rectangle: \\(\\text{Perimeter} = 2 \\times (\\text{Length} + \\text{Width})\\).",
        workingOut: "\\text{Perimeter} = 2(w + 3w - 5)"
      },
      {
        explanation: "Combine the like terms inside the bracket and expand the expression.",
        workingOut: "\\text{Perimeter} = 2(4w - 5) = 8w - 10"
      }
    ]
  });

  // 7. y9-5a-7 (Multi-part container)
  batch.update(questionsCol.doc('y9-5a-7'), {
    subQuestions: [
      {
        id: "y9-5a-7a",
        type: "multiple_choice",
        question: "a) Find an expression for his average running speed in terms of \\(x\\).",
        ...shuffleOptions(["\\(x + 4\\)", "\\(x - 4\\)", "\\(4x\\)", "\\(4 - x\\)"], "\\(4x\\)"),
        solutionSteps: [
          {
            explanation: "Identify swimming speed: \\(x\\) km/h.",
            workingOut: "\\text{Swimming Speed} = x"
          },
          {
            explanation: "Translate 'running speed was 4 times swimming speed': multiply swimming speed by \\(4\\).",
            workingOut: "\\text{Running Speed} = 4x"
          }
        ],
        graphData: null
      },
      {
        id: "y9-5a-7b",
        type: "multiple_choice",
        question: "b) Find an expression for his average cycling speed in terms of \\(x\\).",
        ...shuffleOptions(["\\(12x - 5\\)", "\\(12x + 5\\)", "\\(3x + 5\\)", "\\(4x + 5\\)"], "\\(12x + 5\\)"),
        solutionSteps: [
          {
            explanation: "Multiply the running speed \\(4x\\) by \\(3\\) to get \\(3 \\times 4x = 12x\\).",
            workingOut: "\\text{Running Speed} \\times 3 = 12x"
          },
          {
            explanation: "Translate 'this was 5 less than cycling speed (C)': \\(12x = C - 5\\). Rearranging to solve for cycling speed \\(C\\) gives \\(C = 12x + 5\\).",
            workingOut: "C = 12x + 5"
          }
        ],
        graphData: null
      }
    ],
    solutionSteps: [
      {
        explanation: "For part a: Running speed is 4 times swimming speed \\(x\\), which is \\(4x\\).",
        workingOut: "\\text{Running Speed} = 4x"
      },
      {
        explanation: "For part b: Running speed times 3 is \\(12x\\), which is 5 less than cycling speed \\(C\\), so \\(C = 12x + 5\\).",
        workingOut: "\\text{Cycling Speed} = 12x + 5"
      }
    ]
  });

  // 8. y9-5a-8a to y9-5a-8l (Detailed 2-step solutions)
  const q8_phrases = {
    '8a': { p1: "Translate 'three times \\(x\\)' into math symbols: multiply \\(x\\) by \\(3\\).", w1: "3x", p2: "Translate 'Seven less than': subtract \\(7\\) from the expression.", w2: "3x - 7" },
    '8b': { p1: "Translate the sum: 'the sum of \\(x\\) and seven' is written inside brackets.", w1: "x + 7", p2: "Translate 'Three times the sum': multiply the entire bracketed sum by \\(3\\).", w2: "3(x + 7)" },
    '8c': { p1: "Translate 'three times \\(x\\)' to \\(3x\\).", w1: "3x", p2: "Translate 'The sum of... and seven': add \\(7\\) to the expression.", w2: "3x + 7" },
    '8d': { p1: "Translate 'seven times \\(x\\)' to \\(7x\\).", w1: "7x", p2: "Translate 'Three more than': add \\(3\\) to the expression.", w2: "7x + 3" },
    '8e': { p1: "Translate the sum: 'the sum of \\(x\\) and three' is written inside brackets.", w1: "x + 3", p2: "Translate 'Seven times the sum': multiply the entire bracketed sum by \\(7\\).", w2: "7(x + 3)" },
    '8f': { p1: "Translate 'Three times \\(x\\)' to \\(3x\\).", w1: "3x", p2: "Translate 'divided by seven': divide the expression by \\(7\\).", w2: "\\frac{3x}{7}" },
    '8g': { p1: "Translate 'The product of seven and \\(x\\)' to \\(7x\\).", w1: "7x", p2: "Translate 'divided by three': divide the product by \\(3\\).", w2: "\\frac{7x}{3}" },
    '8h': { p1: "Translate 'the product of seven and \\(x\\)' to \\(7x\\).", w1: "7x", p2: "Translate 'Three divided by the product': write \\(3\\) in the numerator and the product in the denominator.", w2: "\\frac{3}{7x}" },
    '8i': { p1: "Translate 'half of \\(x\\)' to \\(\\frac{x}{2}\\).", w1: "\\frac{x}{2}", p2: "Translate 'Seven less than': subtract \\(7\\) from the expression.", w2: "\\frac{x}{2} - 7" },
    '8j': { p1: "Translate the difference: 'seven is subtracted from \\(x\\)' is written inside brackets.", w1: "x - 7", p2: "Translate 'Half of the difference': divide the entire difference by \\(2\\).", w2: "\\frac{x - 7}{2}" },
    '8k': { p1: "Translate 'half of \\(x\\)' to \\(\\frac{x}{2}\\).", w1: "\\frac{x}{2}", p2: "Translate 'The sum of... and seven': add \\(7\\) to the expression.", w2: "\\frac{x}{2} + 7" },
    '8l': { p1: "Translate the sum: 'the sum of \\(x\\) and three' is written in the denominator.", w1: "x + 3", p2: "Translate 'Seven divided by the sum': write \\(7\\) in the numerator and the sum in the denominator.", w2: "\\frac{7}{x + 3}" }
  };

  for (const [suffix, steps] of Object.entries(q8_phrases)) {
    const id = `y9-5a-${suffix}`;
    batch.update(questionsCol.doc(id), {
      solutionSteps: [
        { explanation: steps.p1, workingOut: steps.w1 },
        { explanation: steps.p2, workingOut: steps.w2 }
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
  console.log('Successfully completed detailed step expansion for all Year 9 Chapter 5a questions!');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
