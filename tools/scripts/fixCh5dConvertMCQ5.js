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
    'y9-5d-q7h': {
      question: "Solve the equation for \\(a\\): \\(\\frac{2a - 3}{2} - 3 = \\frac{a + 1}{3}\\)",
      ...shuffleOptions(["\\(\\frac{29}{4}\\)", "\\(-\\frac{29}{4}\\)", "\\(\\frac{27}{4}\\)", "\\(\\frac{15}{2}\\)"], "\\(\\frac{29}{4}\\)"),
      solutionSteps: [
        { explanation: "Multiply every term in the equation by \\(6\\) (the Lowest Common Multiple of \\(2\\) and \\(3\\)) to clear the fractions.", workingOut: "\\(6 \\times \\left(\\frac{2a - 3}{2}\\right) - 6 \\times 3 = 6 \\times \\left(\\frac{a + 1}{3}\\right) \\implies 3(2a - 3) - 18 = 2(a + 1)\\)" },
        { explanation: "Expand the brackets on both sides of the equation.", workingOut: "\\(6a - 9 - 18 = 2a + 2 \\implies 6a - 27 = 2a + 2\\)" },
        { explanation: "Subtract \\(2a\\) from both sides to group the variable terms on the left.", workingOut: "\\(6a - 2a - 27 = 2 \\implies 4a - 27 = 2\\)" },
        { explanation: "Add \\(27\\) to both sides to isolate \\(4a\\), then divide both sides by \\(4\\) to solve for \\(a\\).", workingOut: "\\(4a = 2 + 27 \\implies 4a = 29 \\implies a = \\frac{29}{4}\\)" }
      ]
    },
    'y9-5d-q7i': {
      question: "Solve the equation for \\(a\\): \\(\\frac{3a - 2}{4} + a = 3\\)",
      ...shuffleOptions(["\\(2\\)", "\\(-2\\)", "\\(1.5\\)", "\\(3\\)"], "\\(2\\)"),
      solutionSteps: [
        { explanation: "Multiply every term in the equation by \\(4\\) to clear the fractions.", workingOut: "\\(4 \\times \\left(\\frac{3a - 2}{4}\\right) + 4 \\times a = 4 \\times 3 \\implies (3a - 2) + 4a = 12\\)" },
        { explanation: "Combine the variable terms on the left side of the equation.", workingOut: "\\(7a - 2 = 12\\)" },
        { explanation: "Add \\(2\\) to both sides to isolate \\(7a\\), then divide both sides by \\(7\\) to solve for \\(a\\).", workingOut: "\\(7a = 12 + 2 \\implies 7a = 14 \\implies a = 2\\)" }
      ]
    },
    'y9-5d-q7j': {
      question: "Solve the equation for \\(a\\): \\(\\frac{a}{3} + \\frac{a - 2}{4} = \\frac{a + 2}{6}\\)",
      ...shuffleOptions(["\\(2\\)", "\\(-2\\)", "\\(1.5\\)", "\\(3\\)"], "\\(2\\)"),
      solutionSteps: [
        { explanation: "Find the LCM of the denominators \\(3, 4,\\) and \\(6\\), which is \\(12\\). Multiply every term in the equation by \\(12\\) to clear the fractions.", workingOut: "\\(12 \\times \\left(\\frac{a}{3}\\right) + 12 \\times \\left(\\frac{a - 2}{4}\\right) = 12 \\times \\left(\\frac{a + 2}{6}\\right) \\implies 4a + 3(a - 2) = 2(a + 2)\\)" },
        { explanation: "Expand the brackets on both sides.", workingOut: "\\(4a + 3a - 6 = 2a + 4 \\implies 7a - 6 = 2a + 4\\)" },
        { explanation: "Subtract \\(2a\\) from both sides to group the variable terms on the left.", workingOut: "\\(7a - 2a - 6 = 4 \\implies 5a - 6 = 4\\)" },
        { explanation: "Add \\(6\\) to both sides, then divide by \\(5\\) to solve for \\(a\\).", workingOut: "\\(5a = 4 + 6 \\implies 5a = 10 \\implies a = 2\\)" }
      ]
    },
    'y9-5d-q8a': {
      question: "Solve the equation: \\(4a + 7 = 23\\)",
      ...shuffleOptions(["\\(4\\)", "\\(-4\\)", "\\(3\\)", "\\(5\\)"], "\\(4\\)"),
      solutionSteps: [
        { explanation: "Subtract \\(7\\) from both sides of the equation to isolate the variable term \\(4a\\).", workingOut: "\\(4a = 23 - 7 \\implies 4a = 16\\)" },
        { explanation: "Divide both sides by \\(4\\) to solve for \\(a\\).", workingOut: "\\(a = \\frac{16}{4} \\implies a = 4\\)" }
      ]
    },
    'y9-5d-q8b': {
      question: "Solve the equation: \\(5b - 8 = 37\\)",
      ...shuffleOptions(["\\(9\\)", "\\(-9\\)", "\\(8\\)", "\\(10\\)"], "\\(9\\)"),
      solutionSteps: [
        { explanation: "Add \\(8\\) to both sides of the equation to isolate the variable term \\(5b\\).", workingOut: "\\(5b = 37 + 8 \\implies 5b = 45\\)" },
        { explanation: "Divide both sides by \\(5\\) to solve for \\(b\\).", workingOut: "\\(b = \\frac{45}{5} \\implies b = 9\\)" }
      ]
    },
    'y9-5d-q8c': {
      question: "Solve the equation: \\(\\frac{c}{4} - 3 = 5\\)",
      ...shuffleOptions(["\\(32\\)", "\\(-32\\)", "\\(8\\)", "\\(20\\)"], "\\(32\\)"),
      solutionSteps: [
        { explanation: "Add \\(3\\) to both sides of the equation to isolate the fraction term \\(\\frac{c}{4}\\).", workingOut: "\\(\\frac{c}{4} = 5 + 3 \\implies \\frac{c}{4} = 8\\)" },
        { explanation: "Multiply both sides of the equation by \\(4\\) to solve for \\(c\\).", workingOut: "\\(c = 8 \\times 4 \\implies c = 32\\)" }
      ]
    },
    'y9-5d-q8d': {
      question: "Solve the equation: \\(\\frac{d}{3} + 5 = 2\\)",
      ...shuffleOptions(["\\(-9\\)", "\\(9\\)", "\\(-21\\)", "\\(-6\\)"], "\\(-9\\)"),
      solutionSteps: [
        { explanation: "Subtract \\(5\\) from both sides of the equation to isolate the fraction term \\(\\frac{d}{3}\\).", workingOut: "\\(\\frac{d}{3} = 2 - 5 \\implies \\frac{d}{3} = -3\\)" },
        { explanation: "Multiply both sides of the equation by \\(3\\) to solve for \\(d\\).", workingOut: "\\(d = -3 \\times 3 \\implies d = -9\\)" }
      ]
    },
    'y9-5d-q8e': {
      question: "Solve the equation: \\(\\frac{3e}{2} + \\frac{1}{3} = 3\\)",
      ...shuffleOptions(["\\(\\frac{16}{9}\\)", "\\(-\\frac{16}{9}\\)", "\\(\\frac{14}{9}\\)", "\\(\\frac{17}{9}\\)"], "\\(\\frac{16}{9}\\)"),
      solutionSteps: [
        { explanation: "Find the LCM of the denominators \\(2\\) and \\(3\\), which is \\(6\\). Multiply every term in the equation by \\(6\\) to clear the fractions.", workingOut: "\\(6 \\times \\left(\\frac{3e}{2}\\right) + 6 \\times \\left(\\frac{1}{3}\\right) = 6 \\times 3 \\implies 9e + 2 = 18\\)" },
        { explanation: "Subtract \\(2\\) from both sides of the equation to isolate the term \\(9e\\).", workingOut: "\\(9e = 18 - 2 \\implies 9e = 16\\)" },
        { explanation: "Divide both sides by \\(9\\) to solve for \\(e\\).", workingOut: "\\(e = \\frac{16}{9}\\)" }
      ]
    },
    'y9-5d-q8f': {
      question: "Solve the equation: \\(\\frac{3f}{4} - 2 = \\frac{2}{5}\\)",
      ...shuffleOptions(["\\(\\frac{16}{5}\\)", "\\(-\\frac{16}{5}\\)", "\\(\\frac{14}{5}\\)", "\\(3\\)"], "\\(\\frac{16}{5}\\)"),
      solutionSteps: [
        { explanation: "Find the LCM of the denominators \\(4\\) and \\(5\\), which is \\(20\\). Multiply every term in the equation by \\(20\\) to clear the fractions.", workingOut: "\\(20 \\times \\left(\\frac{3f}{4}\\right) - 20 \\times 2 = 20 \\times \\left(\\frac{2}{5}\\right) \\implies 15f - 40 = 8\\)" },
        { explanation: "Add \\(40\\) to both sides of the equation to isolate the term \\(15f\\).", workingOut: "\\(15f = 8 + 40 \\implies 15f = 48\\)" },
        { explanation: "Divide both sides by \\(15\\) to solve for \\(f\\), then simplify the fraction by dividing the numerator and denominator by their HCF of \\(3\\).", workingOut: "\\(f = \\frac{48}{15} \\implies f = \\frac{16}{5}\\)" }
      ]
    },
    'y9-5d-q8g': {
      question: "Solve the equation: \\(3g + 4 = 8g - 11\\)",
      ...shuffleOptions(["\\(3\\)", "\\(-3\\)", "\\(2.5\\)", "\\(4\\)"], "\\(3\\)"),
      solutionSteps: [
        { explanation: "Subtract \\(3g\\) from both sides to group the variable terms on the right side.", workingOut: "\\(4 = 8g - 3g - 11 \\implies 4 = 5g - 11\\)" },
        { explanation: "Add \\(11\\) to both sides to isolate the variable term \\(5g\\).", workingOut: "\\(4 + 11 = 5g \\implies 15 = 5g\\)" },
        { explanation: "Divide both sides by \\(5\\) to solve for \\(g\\).", workingOut: "\\(g = \\frac{15}{5} \\implies g = 3\\)" }
      ]
    },
    'y9-5d-q8h': {
      question: "Solve the equation: \\(5h - 3 = 7 - 5h\\)",
      ...shuffleOptions(["\\(1\\)", "\\(-1\\)", "\\(0.4\\)", "\\(2\\)"], "\\(1\\)"),
      solutionSteps: [
        { explanation: "Add \\(5h\\) to both sides of the equation to group all variable terms on the left.", workingOut: "\\(5h + 5h - 3 = 7 \\implies 10h - 3 = 7\\)" },
        { explanation: "Add \\(3\\) to both sides to isolate the variable term \\(10h\\).", workingOut: "\\(10h = 7 + 3 \\implies 10h = 10\\)" },
        { explanation: "Divide both sides by \\(10\\) to solve for \\(h\\).", workingOut: "\\(h = \\frac{10}{10} \\implies h = 1\\)" }
      ]
    },
    'y9-5d-q8i': {
      question: "Solve the equation: \\(3(i - 2) = 4(i + 5)\\)",
      ...shuffleOptions(["\\(-26\\)", "\\(26\\)", "\\(-14\\)", "\\(-20\\)"], "\\(-26\\)"),
      solutionSteps: [
        { explanation: "Expand the brackets on both sides of the equation.", workingOut: "\\(3i - 6 = 4i + 20\\)" },
        { explanation: "Subtract \\(3i\\) from both sides to group the variable terms on the right.", workingOut: "\\(-6 = 4i - 3i + 20 \\implies -6 = i + 20\\)" },
        { explanation: "Subtract \\(20\\) from both sides to solve for \\(i\\).", workingOut: "\\(i = -6 - 20 \\implies i = -26\\)" }
      ]
    },
    'y9-5d-q8j': {
      question: "Solve the equation: \\(4(j + 3) = 3(2j - 1)\\)",
      ...shuffleOptions(["\\(7.5\\)", "\\(-7.5\\)", "\\(4.5\\)", "\\(9\\)"], "\\(7.5\\)"),
      solutionSteps: [
        { explanation: "Expand the brackets on both sides of the equation.", workingOut: "\\(4j + 12 = 6j - 3\\)" },
        { explanation: "Subtract \\(4j\\) from both sides to group the variable terms on the right side.", workingOut: "\\(12 = 6j - 4j - 3 \\implies 12 = 2j - 3\\)" },
        { explanation: "Add \\(3\\) to both sides to isolate the variable term \\(2j\\), then divide by \\(2\\) to solve for \\(j\\).", workingOut: "\\(12 + 3 = 2j \\implies 15 = 2j \\implies j = 7.5\\)" }
      ]
    },
    'y9-5d-q8k': {
      question: "Solve the equation: \\(3(k + 2) - 4(k - 1) = 8\\)",
      ...shuffleOptions(["\\(2\\)", "\\(-2\\)", "\\(4\\)", "\\(1.5\\)"], "\\(2\\)"),
      solutionSteps: [
        { explanation: "Expand both brackets. Make sure to distribute the negative sign on the second bracket carefully: \\(-4 \\times (k - 1) = -4k + 4\\).", workingOut: "\\((3k + 6) + (-4k + 4) = 8 \\implies 3k + 6 - 4k + 4 = 8\\)" },
        { explanation: "Combine the like terms (variable terms \\(3k - 4k\\) and constant terms \\(6 + 4\\)).", workingOut: "\\(-k + 10 = 8\\)" },
        { explanation: "Subtract \\(10\\) from both sides to isolate \\(-k\\), then multiply by \\(-1\\) to solve for \\(k\\).", workingOut: "\\(-k = 8 - 10 \\implies -k = -2 \\implies k = 2\\)" }
      ]
    },
    'y9-5d-q8l': {
      question: "Solve the equation: \\(3(\\ell - 2) + 2(\\ell + 3) = 15\\)",
      ...shuffleOptions(["\\(3\\)", "\\(-3\\)", "\\(1.8\\)", "\\(5\\)"], "\\(3\\)"),
      solutionSteps: [
        { explanation: "Expand both brackets on the left side of the equation.", workingOut: "\\((3\\ell - 6) + (2\\ell + 6) = 15 \\implies 3\\ell - 6 + 2\\ell + 6 = 15\\)" },
        { explanation: "Combine like terms on the left side. Note that \\(-6 + 6 = 0\\).", workingOut: "\\(5\\ell = 15\\)" },
        { explanation: "Divide both sides by \\(5\\) to solve for \\(\\ell\\).", workingOut: "\\(\\ell = \\frac{15}{5} \\implies \\ell = 3\\)" }
      ]
    },
    'y9-5d-q8m': {
      question: "Solve the equation: \\(\\frac{m + 2}{4} = \\frac{m - 3}{6}\\)",
      ...shuffleOptions(["\\(-12\\)", "\\(12\\)", "\\(-10\\)", "\\(-15\\)"], "\\(-12\\)"),
      solutionSteps: [
        { explanation: "Multiply both sides of the equation by \\(12\\) (the Lowest Common Multiple of \\(4\\) and \\(6\\)) to clear the fractions.", workingOut: "\\(3(m + 2) = 2(m - 3)\\)" },
        { explanation: "Expand the brackets on both sides.", workingOut: "\\(3m + 6 = 2m - 6\\)" },
        { explanation: "Subtract \\(2m\\) from both sides to group the variable terms on the left side.", workingOut: "\\(3m - 2m + 6 = -6 \\implies m + 6 = -6\\)" },
        { explanation: "Subtract \\(6\\) from both sides to solve for \\(m\\).", workingOut: "\\(m = -6 - 6 \\implies m = -12\\)" }
      ]
    },
    'y9-5d-q8n': {
      question: "Solve the equation: \\(\\frac{2n - 3}{4} = \\frac{3n + 1}{5}\\)",
      ...shuffleOptions(["\\(-\\frac{19}{2}\\)", "\\(\\frac{19}{2}\\)", "\\(-9\\)", "\\(-\\frac{17}{2}\\)"], "\\(-\\frac{19}{2}\\)"),
      solutionSteps: [
        { explanation: "Cross-multiply to eliminate the denominators.", workingOut: "\\(5(2n - 3) = 4(3n + 1)\\)" },
        { explanation: "Expand the brackets on both sides.", workingOut: "\\(10n - 15 = 12n + 4\\)" },
        { explanation: "Subtract \\(10n\\) from both sides to group the variable terms on the right.", workingOut: "\\(-15 = 12n - 10n + 4 \\implies -15 = 2n + 4\\)" },
        { explanation: "Subtract \\(4\\) from both sides to isolate \\(2n\\), then divide by \\(2\\) to solve for \\(n\\).", workingOut: "\\(-15 - 4 = 2n \\implies -19 = 2n \\implies n = -\\frac{19}{2}\\)" }
      ]
    },
    'y9-5d-q8o': {
      question: "Solve the equation: \\(\\frac{3q - 3}{4} + 2 = 3q\\)",
      ...shuffleOptions(["\\(\\frac{5}{9}\\)", "\\(-\\frac{5}{9}\\)", "\\(\\frac{5}{4}\\)", "\\(\\frac{7}{9}\\)"], "\\(\\frac{5}{9}\\)"),
      solutionSteps: [
        { explanation: "Multiply every term in the equation by \\(4\\) to clear the fractions.", workingOut: "\\(4 \\times \\left(\\frac{3q - 3}{4}\\right) + 4 \\times 2 = 4 \\times 3q \\implies (3q - 3) + 8 = 12q\\)" },
        { explanation: "Simplify the constant terms on the left side.", workingOut: "\\(3q + 5 = 12q\\)" },
        { explanation: "Subtract \\(3q\\) from both sides to group the variable terms on the right.", workingOut: "\\(5 = 12q - 3q \\implies 5 = 9q\\)" },
        { explanation: "Divide both sides by \\(9\\) to solve for \\(q\\).", workingOut: "\\(q = \\frac{5}{9}\\)" }
      ]
    },
    'y9-5d-q8p': {
      question: "Solve the equation: \\(\\frac{2r + 3}{5} + 1 = \\frac{3r - 2}{6}\\)",
      ...shuffleOptions(["\\(\\frac{58}{3}\\)", "\\(-\\frac{58}{3}\\)", "\\(19\\)", "\\(\\frac{56}{3}\\)"], "\\(\\frac{58}{3}\\)"),
      solutionSteps: [
        { explanation: "Find the LCM of the denominators \\(5\\) and \\(6\\), which is \\(30\\). Multiply every term in the equation by \\(30\\) to clear the fractions.", workingOut: "\\(30 \\times \\left(\\frac{2r + 3}{5}\\right) + 30 \\times 1 = 30 \\times \\left(\\frac{3r - 2}{6}\\right) \\implies 6(2r + 3) + 30 = 5(3r - 2)\\)" },
        { explanation: "Expand the brackets on both sides.", workingOut: "\\(12r + 18 + 30 = 15r - 10 \\implies 12r + 48 = 15r - 10\\)" },
        { explanation: "Subtract \\(12r\\) from both sides to group the variable terms on the right side.", workingOut: "\\(48 = 15r - 12r - 10 \\implies 48 = 3r - 10\\)" },
        { explanation: "Add \\(10\\) to both sides to isolate \\(3r\\), then divide by \\(3\\) to solve for \\(r\\).", workingOut: "\\(48 + 10 = 3r \\implies 58 = 3r \\implies r = \\frac{58}{3}\\)" }
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
  console.log('Successfully completed detailed step expansion and MCQ conversion for remaining 19 questions in y9-5d!');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
