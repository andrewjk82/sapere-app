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
    'y9-5d-q2g': {
      question: "Solve the equation: \\(\\frac{3}{4}(m - 4) = 3\\)",
      ...shuffleOptions(["\\(8\\)", "\\(6\\)", "\\(12\\)", "\\(16\\)"], "\\(8\\)"),
      solutionSteps: [
        {
          explanation: "Eliminate the fractional factor outside the bracket by multiplying both sides by \\(\\frac{4}{3}\\) (the reciprocal of \\(\\frac{3}{4}\\)).",
          workingOut: "\\(m - 4 = 3 \\times \\frac{4}{3} \\implies m - 4 = 4\\)"
        },
        {
          explanation: "Add \\(4\\) to both sides of the equation to solve for \\(m\\).",
          workingOut: "\\(m = 4 + 4 \\implies m = 8\\)"
        }
      ]
    },
    'y9-5d-q2h': {
      question: "Solve the equation: \\(2\\left(\\frac{m}{4} + 3\\right) = 5\\)",
      ...shuffleOptions(["\\(-2\\)", "\\(2\\)", "\\(-1\\)", "\\(-4\\)"], "\\(-2\\)"),
      solutionSteps: [
        {
          explanation: "Divide both sides of the equation by \\(2\\) to eliminate the factor outside the brackets.",
          workingOut: "\\(\\frac{m}{4} + 3 = \\frac{5}{2} \\implies \\frac{m}{4} + 3 = 2.5\\)"
        },
        {
          explanation: "Subtract \\(3\\) from both sides to isolate the fraction term.",
          workingOut: "\\(\\frac{m}{4} = 2.5 - 3 \\implies \\frac{m}{4} = -0.5\\)"
        },
        {
          explanation: "Multiply both sides by \\(4\\) to solve for \\(m\\).",
          workingOut: "\\(m = -0.5 \\times 4 \\implies m = -2\\)"
        }
      ]
    },
    'y9-5d-q2i': {
      question: "Solve the equation: \\(-2\\left(\\frac{x}{5} + 2\\right) = 3\\)",
      ...shuffleOptions(["\\(-17.5\\)", "\\(17.5\\)", "\\(-15\\)", "\\(-10.5\\)"], "\\(-17.5\\)"),
      solutionSteps: [
        {
          explanation: "Divide both sides of the equation by \\(-2\\) to eliminate the factor outside the brackets.",
          workingOut: "\\(\\frac{x}{5} + 2 = \\frac{3}{-2} \\implies \\frac{x}{5} + 2 = -1.5\\)"
        },
        {
          explanation: "Subtract \\(2\\) from both sides to isolate the fraction term.",
          workingOut: "\\(\\frac{x}{5} = -1.5 - 2 \\implies \\frac{x}{5} = -3.5\\)"
        },
        {
          explanation: "Multiply both sides by \\(5\\) to solve for \\(x\\).",
          workingOut: "\\(x = -3.5 \\times 5 \\implies x = -17.5\\)"
        }
      ]
    },
    'y9-5d-q3a': {
      question: "Solve the equation: \\(\\frac{3y + 2}{2} + 5 = 9\\)",
      ...shuffleOptions(["\\(2\\)", "\\(4\\)", "\\(-2\\)", "\\(3\\)"], "\\(2\\)"),
      solutionSteps: [
        {
          explanation: "Subtract \\(5\\) from both sides of the equation to isolate the fraction term.",
          workingOut: "\\(\\frac{3y + 2}{2} = 9 - 5 \\implies \\frac{3y + 2}{2} = 4\\)"
        },
        {
          explanation: "Multiply both sides by \\(2\\) to eliminate the denominator.",
          workingOut: "\\(3y + 2 = 4 \\times 2 \\implies 3y + 2 = 8\\)"
        },
        {
          explanation: "Subtract \\(2\\) from both sides to isolate \\(3y\\), then divide by \\(3\\) to solve for \\(y\\).",
          workingOut: "\\(3y = 8 - 2 \\implies 3y = 6 \\implies y = 2\\)"
        }
      ]
    },
    'y9-5d-q3b': {
      question: "Solve the equation: \\(\\frac{3x + 4}{2} = 8\\)",
      ...shuffleOptions(["\\(4\\)", "\\(-4\\)", "\\(6\\)", "\\(5.33\\)"], "\\(4\\)"),
      solutionSteps: [
        {
          explanation: "Multiply both sides of the equation by \\(2\\) to eliminate the denominator.",
          workingOut: "\\(3x + 4 = 8 \\times 2 \\implies 3x + 4 = 16\\)"
        },
        {
          explanation: "Subtract \\(4\\) from both sides to isolate the variable term \\(3x\\).",
          workingOut: "\\(3x = 16 - 4 \\implies 3x = 12\\)"
        },
        {
          explanation: "Divide both sides by \\(3\\) to solve for \\(x\\).",
          workingOut: "\\(x = \\frac{12}{3} \\implies x = 4\\)"
        }
      ]
    },
    'y9-5d-q3c': {
      question: "Solve the equation: \\(\\frac{4p - 3}{5} - 2 = 3\\)",
      ...shuffleOptions(["\\(7\\)", "\\(-7\\)", "\\(8\\)", "\\(6.5\\)"], "\\(7\\)"),
      solutionSteps: [
        {
          explanation: "Add \\(2\\) to both sides of the equation to isolate the fraction term.",
          workingOut: "\\(\\frac{4p - 3}{5} = 3 + 2 \\implies \\frac{4p - 3}{5} = 5\\)"
        },
        {
          explanation: "Multiply both sides by \\(5\\) to eliminate the denominator.",
          workingOut: "\\(4p - 3 = 5 \\times 5 \\implies 4p - 3 = 25\\)"
        },
        {
          explanation: "Add \\(3\\) to both sides to isolate \\(4p\\), then divide by \\(4\\) to solve for \\(p\\).",
          workingOut: "\\(4p = 25 + 3 \\implies 4p = 28 \\implies p = 7\\)"
        }
      ]
    },
    'y9-5d-q3d': {
      question: "Solve the equation: \\(\\frac{2y - 3}{4} + 3 = 7\\)",
      ...shuffleOptions(["\\(9.5\\)", "\\(-9.5\\)", "\\(8.5\\)", "\\(11\\)"], "\\(9.5\\)"),
      solutionSteps: [
        {
          explanation: "Subtract \\(3\\) from both sides of the equation to isolate the fraction term.",
          workingOut: "\\(\\frac{2y - 3}{4} = 7 - 3 \\implies \\frac{2y - 3}{4} = 4\\)"
        },
        {
          explanation: "Multiply both sides by \\(4\\) to eliminate the denominator.",
          workingOut: "\\(2y - 3 = 4 \\times 4 \\implies 2y - 3 = 16\\)"
        },
        {
          explanation: "Add \\(3\\) to both sides to isolate \\(2y\\), then divide by \\(2\\) to solve for \\(y\\).",
          workingOut: "\\(2y = 16 + 3 \\implies 2y = 19 \\implies y = 9.5\\)"
        }
      ]
    },
    'y9-5d-q3e': {
      question: "Solve the equation: \\(\\frac{3x - 2}{4} = 4\\)",
      ...shuffleOptions(["\\(6\\)", "\\(-6\\)", "\\(5.33\\)", "\\(7\\)"], "\\(6\\)"),
      solutionSteps: [
        {
          explanation: "Multiply both sides of the equation by \\(4\\) to eliminate the denominator.",
          workingOut: "\\(3x - 2 = 4 \\times 4 \\implies 3x - 2 = 16\\)"
        },
        {
          explanation: "Add \\(2\\) to both sides to isolate the variable term \\(3x\\).",
          workingOut: "\\(3x = 16 + 2 \\implies 3x = 18\\)"
        },
        {
          explanation: "Divide both sides by \\(3\\) to solve for \\(x\\).",
          workingOut: "\\(x = \\frac{18}{3} \\implies x = 6\\)"
        }
      ]
    },
    'y9-5d-q3f': {
      question: "Solve the equation: \\(\\frac{3a + 5}{4} - 3 = 2\\)",
      ...shuffleOptions(["\\(5\\)", "\\(-5\\)", "\\(4\\)", "\\(6\\)"], "\\(5\\)"),
      solutionSteps: [
        {
          explanation: "Add \\(3\\) to both sides of the equation to isolate the fraction term.",
          workingOut: "\\(\\frac{3a + 5}{4} = 2 + 3 \\implies \\frac{3a + 5}{4} = 5\\)"
        },
        {
          explanation: "Multiply both sides by \\(4\\) to eliminate the denominator.",
          workingOut: "\\(3a + 5 = 5 \\times 4 \\implies 3a + 5 = 20\\)"
        },
        {
          explanation: "Subtract \\(5\\) from both sides to isolate \\(3a\\), then divide by \\(3\\) to solve for \\(a\\).",
          workingOut: "\\(3a = 20 - 5 \\implies 3a = 15 \\implies a = 5\\)"
        }
      ]
    },
    'y9-5d-q3g': {
      question: "Solve the equation: \\(3 + \\frac{3x - 1}{4} = 8\\)",
      ...shuffleOptions(["\\(7\\)", "\\(-7\\)", "\\(6.67\\)", "\\(8\\)"], "\\(7\\)"),
      solutionSteps: [
        {
          explanation: "Subtract \\(3\\) from both sides of the equation to isolate the fraction term.",
          workingOut: "\\(\\frac{3x - 1}{4} = 8 - 3 \\implies \\frac{3x - 1}{4} = 5\\)"
        },
        {
          explanation: "Multiply both sides by \\(4\\) to eliminate the denominator.",
          workingOut: "\\(3x - 1 = 5 \\times 4 \\implies 3x - 1 = 20\\)"
        },
        {
          explanation: "Add \\(1\\) to both sides to isolate \\(3x\\), then divide by \\(3\\) to solve for \\(x\\).",
          workingOut: "\\(3x = 20 + 1 \\implies 3x = 21 \\implies x = 7\\)"
        }
      ]
    },
    'y9-5d-q3h': {
      question: "Solve the equation: \\(15 - \\frac{5x + 3}{2} = 6\\)",
      ...shuffleOptions(["\\(3\\)", "\\(-3\\)", "\\(4.2\\)", "\\(5\\)"], "\\(3\\)"),
      solutionSteps: [
        {
          explanation: "Subtract \\(15\\) from both sides to isolate the fraction term. Keep the negative sign in front of the fraction.",
          workingOut: "\\(-\\frac{5x + 3}{2} = 6 - 15 \\implies -\\frac{5x + 3}{2} = -9\\)"
        },
        {
          explanation: "Multiply both sides by \\(-2\\) to eliminate both the denominator and the negative sign. Note that multiplying negative by negative yields positive.",
          workingOut: "\\(5x + 3 = -9 \\times (-2) \\implies 5x + 3 = 18\\)"
        },
        {
          explanation: "Subtract \\(3\\) from both sides to isolate \\(5x\\), then divide by \\(5\\) to solve for \\(x\\).",
          workingOut: "\\(5x = 18 - 3 \\implies 5x = 15 \\implies x = 3\\)"
        }
      ]
    },
    'y9-5d-q3i': {
      question: "Solve the equation: \\(2 - \\frac{4y - 2}{3} = -4\\)",
      ...shuffleOptions(["\\(5\\)", "\\(-5\\)", "\\(4\\)", "\\(6\\)"], "\\(5\\)"),
      solutionSteps: [
        {
          explanation: "Subtract \\(2\\) from both sides to isolate the fraction term. Keep the negative sign.",
          workingOut: "\\(-\\frac{4y - 2}{3} = -4 - 2 \\implies -\\frac{4y - 2}{3} = -6\\)"
        },
        {
          explanation: "Multiply both sides by \\(-3\\) to eliminate both the denominator and the negative sign.",
          workingOut: "\\(4y - 2 = -6 \\times (-3) \\implies 4y - 2 = 18\\)"
        },
        {
          explanation: "Add \\(2\\) to both sides to isolate \\(4y\\), then divide by \\(4\\) to solve for \\(y\\).",
          workingOut: "\\(4y = 18 + 2 \\implies 4y = 20 \\implies y = 5\\)"
        }
      ]
    },
    'y9-5d-q4a': {
      question: "Solve the equation: \\(e + 2.4 = 5.7\\)",
      ...shuffleOptions(["\\(3.3\\)", "\\(8.1\\)", "\\(2.3\\)", "\\(3.7\\)"], "\\(3.3\\)"),
      solutionSteps: [
        {
          explanation: "To isolate the variable \\(e\\), perform the inverse operation by subtracting \\(2.4\\) from both sides of the equation.",
          workingOut: "\\(e = 5.7 - 2.4\\)"
        },
        {
          explanation: "Calculate the decimal subtraction to solve for \\(e\\).",
          workingOut: "\\(e = 3.3\\)"
        }
      ]
    },
    'y9-5d-q4b': {
      question: "Solve the equation: \\(f + 4.8 = 9.2\\)",
      ...shuffleOptions(["\\(4.4\\)", "\\(14\\)", "\\(5.4\\)", "\\(4.6\\)"], "\\(4.4\\)"),
      solutionSteps: [
        {
          explanation: "To isolate the variable \\(f\\), perform the inverse operation by subtracting \\(4.8\\) from both sides of the equation.",
          workingOut: "\\(f = 9.2 - 4.8\\)"
        },
        {
          explanation: "Calculate the decimal subtraction to solve for \\(f\\).",
          workingOut: "\\(f = 4.4\\)"
        }
      ]
    },
    'y9-5d-q4c': {
      question: "Solve the equation: \\(g - 3.5 = 4.7\\)",
      ...shuffleOptions(["\\(8.2\\)", "\\(1.2\\)", "\\(7.2\\)", "\\(9.2\\)"], "\\(8.2\\)"),
      solutionSteps: [
        {
          explanation: "To isolate the variable \\(g\\), perform the inverse operation by adding \\(3.5\\) to both sides of the equation.",
          workingOut: "\\(g = 4.7 + 3.5\\)"
        },
        {
          explanation: "Calculate the decimal addition to solve for \\(g\\).",
          workingOut: "\\(g = 8.2\\)"
        }
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
  console.log('Successfully completed detailed step expansion and MCQ conversion for next 15 questions in y9-5d!');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
