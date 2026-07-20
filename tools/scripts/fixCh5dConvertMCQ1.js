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
    'y9-5d-q1a': {
      question: "Solve the equation: \\(3x - \\frac{1}{3} = \\frac{1}{6}\\)",
      ...shuffleOptions(["\\(\\frac{1}{6}\\)", "\\(\\frac{1}{2}\\)", "\\(\\frac{5}{6}\\)", "\\(\\frac{1}{3}\\)"], "\\(\\frac{1}{6}\\)"),
      solutionSteps: [
        {
          explanation: "Add \\(\\frac{1}{3}\\) to both sides to isolate the variable term \\(3x\\). Find a common denominator (\\(6\\)) to add the fractions: \\(\\frac{1}{6} + \\frac{1}{3} = \\frac{1}{6} + \\frac{2}{6} = \\frac{3}{6} = \\frac{1}{2}\\).",
          workingOut: "\\(3x = \\frac{1}{6} + \\frac{1}{3} \\implies 3x = \\frac{1}{2}\\)"
        },
        {
          explanation: "Divide both sides by \\(3\\) (which multiplies the denominator on the right by \\(3\\)) to solve for \\(x\\).",
          workingOut: "\\(x = \\frac{1}{2 \\times 3} \\implies x = \\frac{1}{6}\\)"
        }
      ]
    },
    'y9-5d-q1b': {
      question: "Solve the equation: \\(2x + \\frac{1}{2} = \\frac{3}{4}\\)",
      ...shuffleOptions(["\\(\\frac{1}{8}\\)", "\\(\\frac{1}{4}\\)", "\\(\\frac{5}{8}\\)", "\\(\\frac{1}{2}\\)"], "\\(\\frac{1}{8}\\)"),
      solutionSteps: [
        {
          explanation: "Subtract \\(\\frac{1}{2}\\) from both sides to isolate the variable term \\(2x\\). Rewrite \\(\\frac{1}{2}\\) with a common denominator of \\(4\\) as \\(\\frac{2}{4}\\).",
          workingOut: "\\(2x = \\frac{3}{4} - \\frac{1}{2} \\implies 2x = \\frac{1}{4}\\)"
        },
        {
          explanation: "Divide both sides by \\(2\\) (multiply the denominator by \\(2\\)) to solve for \\(x\\).",
          workingOut: "\\(x = \\frac{1}{4 \\times 2} \\implies x = \\frac{1}{8}\\)"
        }
      ]
    },
    'y9-5d-q1c': {
      question: "Solve the equation: \\(\\frac{5}{4} - 3y = \\frac{1}{2}\\)",
      ...shuffleOptions(["\\(\\frac{1}{4}\\)", "\\(-\\frac{1}{4}\\)", "\\(\\frac{3}{4}\\)", "\\(\\frac{7}{12}\\)"], "\\(\\frac{1}{4}\\)"),
      solutionSteps: [
        {
          explanation: "Subtract \\(\\frac{5}{4}\\) from both sides to isolate the variable term \\(-3y\\). Note that \\(\\frac{1}{2} = \\frac{2}{4}\\), so \\(\\frac{2}{4} - \\frac{5}{4} = -\\frac{3}{4}\\).",
          workingOut: "\\(-3y = \\frac{1}{2} - \\frac{5}{4} \\implies -3y = -\\frac{3}{4}\\)"
        },
        {
          explanation: "Divide both sides by \\(-3\\) to solve for \\(y\\). Dividing negative by negative yields positive, and the \\(3\\)s simplify.",
          workingOut: "\\(y = \\frac{-3}{4 \\times (-3)} \\implies y = \\frac{1}{4}\\)"
        }
      ]
    },
    'y9-5d-q1d': {
      question: "Solve the equation: \\(\\frac{5}{2} - 2y = \\frac{3}{4}\\)",
      ...shuffleOptions(["\\(\\frac{7}{8}\\)", "\\(-\\frac{7}{8}\\)", "\\(\\frac{7}{4}\\)", "\\(\\frac{13}{8}\\)"], "\\(\\frac{7}{8}\\)"),
      solutionSteps: [
        {
          explanation: "Subtract \\(\\frac{5}{2}\\) from both sides to isolate the variable term \\(-2y\\). Note that \\(\\frac{5}{2} = \\frac{10}{4}\\), so \\(\\frac{3}{4} - \\frac{10}{4} = -\\frac{7}{4}\\).",
          workingOut: "\\(-2y = \\frac{3}{4} - \\frac{5}{2} \\implies -2y = -\\frac{7}{4}\\)"
        },
        {
          explanation: "Divide both sides by \\(-2\\) to solve for \\(y\\).",
          workingOut: "\\(y = \\frac{-7}{4 \\times (-2)} \\implies y = \\frac{7}{8}\\)"
        }
      ]
    },
    'y9-5d-q1e': {
      question: "Solve the equation: \\(\\frac{3}{4} + 2x = \\frac{4}{5}\\)",
      ...shuffleOptions(["\\(\\frac{1}{40}\\)", "\\(\\frac{1}{20}\\)", "\\(\\frac{31}{40}\\)", "\\(\\frac{1}{10}\\)"], "\\(\\frac{1}{40}\\)"),
      solutionSteps: [
        {
          explanation: "Subtract \\(\\frac{3}{4}\\) from both sides to isolate the variable term \\(2x\\). Find a common denominator of \\(20\\): \\(\\frac{16}{20} - \\frac{15}{20} = \\frac{1}{20}\\).",
          workingOut: "\\(2x = \\frac{4}{5} - \\frac{3}{4} \\implies 2x = \\frac{1}{20}\\)"
        },
        {
          explanation: "Divide both sides by \\(2\\) to solve for \\(x\\).",
          workingOut: "\\(x = \\frac{1}{20 \\times 2} \\implies x = \\frac{1}{40}\\)"
        }
      ]
    },
    'y9-5d-q1f': {
      question: "Solve the equation: \\(-\\frac{2}{3} - 4y = \\frac{1}{4}\\)",
      ...shuffleOptions(["\\(-\\frac{11}{48}\\)", "\\(\\frac{11}{48}\\)", "\\(-\\frac{11}{12}\\)", "\\(-\\frac{5}{48}\\)"], "\\(-\\frac{11}{48}\\)"),
      solutionSteps: [
        {
          explanation: "Add \\(\\frac{2}{3}\\) to both sides to isolate the variable term \\(-4y\\). Find a common denominator of \\(12\\): \\(\\frac{3}{12} + \\frac{8}{12} = \\frac{11}{12}\\).",
          workingOut: "\\(-4y = \\frac{1}{4} + \\frac{2}{3} \\implies -4y = \\frac{11}{12}\\)"
        },
        {
          explanation: "Divide both sides by \\(-4\\) to solve for \\(y\\).",
          workingOut: "\\(y = \\frac{11}{12 \\times (-4)} \\implies y = -\\frac{11}{48}\\)"
        }
      ]
    },
    'y9-5d-q1g': {
      question: "Solve the equation: \\(-3x + \\frac{1}{2} = \\frac{1}{3}\\)",
      ...shuffleOptions(["\\(\\frac{1}{18}\\)", "\\(-\\frac{1}{18}\\)", "\\(\\frac{5}{18}\\)", "\\(\\frac{1}{9}\\)"], "\\(\\frac{1}{18}\\)"),
      solutionSteps: [
        {
          explanation: "Subtract \\(\\frac{1}{2}\\) from both sides to isolate the variable term \\(-3x\\). Find a common denominator of \\(6\\): \\(\\frac{2}{6} - \\frac{3}{6} = -\\frac{1}{6}\\).",
          workingOut: "\\(-3x = \\frac{1}{3} - \\frac{1}{2} \\implies -3x = -\\frac{1}{6}\\)"
        },
        {
          explanation: "Divide both sides by \\(-3\\) to solve for \\(x\\).",
          workingOut: "\\(x = \\frac{-1}{6 \\times (-3)} \\implies x = \\frac{1}{18}\\)"
        }
      ]
    },
    'y9-5d-q1h': {
      question: "Solve the equation: \\(-\\frac{3}{4} + 2x = \\frac{1}{3}\\)",
      ...shuffleOptions(["\\(\\frac{13}{24}\\)", "\\(\\frac{13}{12}\\)", "\\(\\frac{5}{24}\\)", "\\(\\frac{7}{24}\\)"], "\\(\\frac{13}{24}\\)"),
      solutionSteps: [
        {
          explanation: "Add \\(\\frac{3}{4}\\) to both sides to isolate the variable term \\(2x\\). Find a common denominator of \\(12\\): \\(\\frac{4}{12} + \\frac{9}{12} = \\frac{13}{12}\\).",
          workingOut: "\\(2x = \\frac{1}{3} + \\frac{3}{4} \\implies 2x = \\frac{13}{12}\\)"
        },
        {
          explanation: "Divide both sides by \\(2\\) to solve for \\(x\\).",
          workingOut: "\\(x = \\frac{13}{12 \\times 2} \\implies x = \\frac{13}{24}\\)"
        }
      ]
    },
    'y9-5d-q1i': {
      question: "Solve the equation: \\(-2y - \\frac{1}{3} = \\frac{1}{5}\\)",
      ...shuffleOptions(["\\(-\\frac{4}{15}\\)", "\\(\\frac{4}{15}\\)", "\\(-\\frac{8}{15}\\)", "\\(-\\frac{2}{15}\\)"], "\\(-\\frac{4}{15}\\)"),
      solutionSteps: [
        {
          explanation: "Add \\(\\frac{1}{3}\\) to both sides to isolate the variable term \\(-2y\\). Find a common denominator of \\(15\\): \\(\\frac{3}{15} + \\frac{5}{15} = \\frac{8}{15}\\).",
          workingOut: "\\(-2y = \\frac{1}{5} + \\frac{1}{3} \\implies -2y = \\frac{8}{15}\\)"
        },
        {
          explanation: "Divide both sides by \\(-2\\) to solve for \\(y\\).",
          workingOut: "\\(y = \\frac{8}{15 \\times (-2)} \\implies y = -\\frac{4}{15}\\)"
        }
      ]
    },
    'y9-5d-q2a': {
      question: "Solve the equation: \\(\\frac{a}{4} + 6 = 2\\)",
      ...shuffleOptions(["\\(-16\\)", "\\(16\\)", "\\(-8\\)", "\\(-24\\)"], "\\(-16\\)"),
      solutionSteps: [
        {
          explanation: "Subtract \\(6\\) from both sides of the equation to isolate the fraction term \\(\\frac{a}{4}\\).",
          workingOut: "\\(\\frac{a}{4} = 2 - 6 \\implies \\frac{a}{4} = -4\\)"
        },
        {
          explanation: "Multiply both sides of the equation by \\(4\\) to eliminate the denominator and solve for \\(a\\).",
          workingOut: "\\(a = -4 \\times 4 \\implies a = -16\\)"
        }
      ]
    },
    'y9-5d-q2b': {
      question: "Solve the equation: \\(\\frac{2a}{3} - \\frac{3}{4} = \\frac{1}{2}\\)",
      ...shuffleOptions(["\\(\\frac{15}{8}\\)", "\\(\\frac{15}{4}\\)", "\\(\\frac{5}{4}\\)", "\\(\\frac{9}{8}\\)"], "\\(\\frac{15}{8}\\)"),
      solutionSteps: [
        {
          explanation: "Add \\(\\frac{3}{4}\\) to both sides of the equation to isolate the term \\(\\frac{2a}{3}\\). Rewrite \\(\\frac{1}{2}\\) as \\(\\frac{2}{4}\\) to add.",
          workingOut: "\\(\\frac{2a}{3} = \\frac{1}{2} + \\frac{3}{4} \\implies \\frac{2a}{3} = \\frac{5}{4}\\)"
        },
        {
          explanation: "Multiply both sides by \\(3\\) to eliminate the denominator of the variable term.",
          workingOut: "\\(2a = \\frac{5}{4} \\times 3 \\implies 2a = \\frac{15}{4}\\)"
        },
        {
          explanation: "Divide both sides by \\(2\\) to solve for \\(a\\).",
          workingOut: "\\(a = \\frac{15}{4 \\times 2} \\implies a = \\frac{15}{8}\\)"
        }
      ]
    },
    'y9-5d-q2c': {
      question: "Solve the equation: \\(\\frac{b}{5} - 4 = 2\\)",
      ...shuffleOptions(["\\(30\\)", "\\(-30\\)", "\\(10\\)", "\\(35\\)"], "\\(30\\)"),
      solutionSteps: [
        {
          explanation: "Add \\(4\\) to both sides of the equation to isolate the fraction term \\(\\frac{b}{5}\\).",
          workingOut: "\\(\\frac{b}{5} = 2 + 4 \\implies \\frac{b}{5} = 6\\)"
        },
        {
          explanation: "Multiply both sides of the equation by \\(5\\) to eliminate the denominator and solve for \\(b\\).",
          workingOut: "\\(b = 6 \\times 5 \\implies b = 30\\)"
        }
      ]
    },
    'y9-5d-q2d': {
      question: "Solve the equation: \\(\\frac{2b}{5} + 8 = 4\\)",
      ...shuffleOptions(["\\(-10\\)", "\\(10\\)", "\\(-20\\)", "\\(-5\\)"], "\\(-10\\)"),
      solutionSteps: [
        {
          explanation: "Subtract \\(8\\) from both sides of the equation to isolate the term \\(\\frac{2b}{5}\\).",
          workingOut: "\\(\\frac{2b}{5} = 4 - 8 \\implies \\frac{2b}{5} = -4\\)"
        },
        {
          explanation: "Multiply both sides by \\(5\\) to eliminate the denominator of the variable term.",
          workingOut: "\\(2b = -4 \\times 5 \\implies 2b = -20\\)"
        },
        {
          explanation: "Divide both sides by \\(2\\) to solve for \\(b\\).",
          workingOut: "\\(b = \\frac{-20}{2} \\implies b = -10\\)"
        }
      ]
    },
    'y9-5d-q2e': {
      question: "Solve the equation: \\(3 - \\frac{x}{4} = 6\\)",
      ...shuffleOptions(["\\(-12\\)", "\\(12\\)", "\\(-3\\)", "\\(-36\\)"], "\\(-12\\)"),
      solutionSteps: [
        {
          explanation: "Subtract \\(3\\) from both sides of the equation to isolate the fraction term \\(-\\frac{x}{4}\\). Keep the negative sign with the fraction.",
          workingOut: "\\(-\\frac{x}{4} = 6 - 3 \\implies -\\frac{x}{4} = 3\\)"
        },
        {
          explanation: "Multiply both sides of the equation by \\(-4\\) to eliminate the denominator and solve for \\(x\\).",
          workingOut: "\\(x = 3 \\times (-4) \\implies x = -12\\)"
        }
      ]
    },
    'y9-5d-q2f': {
      question: "Solve the equation: \\(4 - \\frac{2x}{3} = 8\\)",
      ...shuffleOptions(["\\(-6\\)", "\\(6\\)", "\\(-12\\)", "\\(-3\\)"], "\\(-6\\)"),
      solutionSteps: [
        {
          explanation: "Subtract \\(4\\) from both sides of the equation to isolate the fraction term \\(-\\frac{2x}{3}\\). Keep the negative sign.",
          workingOut: "\\(-\\frac{2x}{3} = 8 - 4 \\implies -\\frac{2x}{3} = 4\\)"
        },
        {
          explanation: "Multiply both sides by \\(3\\) to eliminate the denominator.",
          workingOut: "\\(-2x = 4 \\times 3 \\implies -2x = 12\\)"
        },
        {
          explanation: "Divide both sides by \\(-2\\) to solve for \\(x\\).",
          workingOut: "\\(x = \\frac{12}{-2} \\implies x = -6\\)"
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
  console.log('Successfully completed detailed step expansion and MCQ conversion for first 15 questions in y9-5d!');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
