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
    // ==========================================
    // Group 1: 1 Bracket, Integer answers (q1a to q1l)
    // ==========================================
    'y9-5c-q1a': {
      question: "Solve the equation: \\(3(x + 2) = 15\\)",
      ...shuffleOptions(["\\(3\\)", "\\(7\\)", "\\(5\\)", "\\(1\\)"], "\\(3\\)"),
      solutionSteps: [
        { explanation: "Divide both sides by \\(3\\) to eliminate the factor outside the brackets.", workingOut: "\\(x + 2 = \\frac{15}{3} \\implies x + 2 = 5\\)" },
        { explanation: "Subtract \\(2\\) from both sides to solve for \\(x\\).", workingOut: "\\(x = 5 - 2 \\implies x = 3\\)" }
      ]
    },
    'y9-5c-q1b': {
      question: "Solve the equation: \\(2(x - 4) = 10\\)",
      ...shuffleOptions(["\\(9\\)", "\\(1\\)", "\\(5\\)", "\\(14\\)"], "\\(9\\)"),
      solutionSteps: [
        { explanation: "Divide both sides by \\(2\\) to eliminate the factor outside the brackets.", workingOut: "\\(x - 4 = \\frac{10}{2} \\implies x - 4 = 5\\)" },
        { explanation: "Add \\(4\\) to both sides to solve for \\(x\\).", workingOut: "\\(x = 5 + 4 \\implies x = 9\\)" }
      ]
    },
    'y9-5c-q1c': {
      question: "Solve the equation: \\(5(x - 1) = 20\\)",
      ...shuffleOptions(["\\(5\\)", "\\(3\\)", "\\(4\\)", "\\(21\\)"], "\\(5\\)"),
      solutionSteps: [
        { explanation: "Divide both sides by \\(5\\) to eliminate the factor outside the brackets.", workingOut: "\\(x - 1 = \\frac{20}{5} \\implies x - 1 = 4\\)" },
        { explanation: "Add \\(1\\) to both sides to solve for \\(x\\).", workingOut: "\\(x = 4 + 1 \\implies x = 5\\)" }
      ]
    },
    'y9-5c-q1d': {
      question: "Solve the equation: \\(4(x + 2) = 16\\)",
      ...shuffleOptions(["\\(2\\)", "\\(6\\)", "\\(4\\)", "\\(14\\)"], "\\(2\\)"),
      solutionSteps: [
        { explanation: "Divide both sides by \\(4\\) to eliminate the factor outside the brackets.", workingOut: "\\(x + 2 = \\frac{16}{4} \\implies x + 2 = 4\\)" },
        { explanation: "Subtract \\(2\\) from both sides to solve for \\(x\\).", workingOut: "\\(x = 4 - 2 \\implies x = 2\\)" }
      ]
    },
    'y9-5c-q1e': {
      question: "Solve the equation: \\(2(x - 5) = 12\\)",
      ...shuffleOptions(["\\(11\\)", "\\(1\\)", "\\(6\\)", "\\(17\\)"], "\\(11\\)"),
      solutionSteps: [
        { explanation: "Divide both sides by \\(2\\) to eliminate the factor outside the brackets.", workingOut: "\\(x - 5 = \\frac{12}{2} \\implies x - 5 = 6\\)" },
        { explanation: "Add \\(5\\) to both sides to solve for \\(x\\).", workingOut: "\\(x = 6 + 5 \\implies x = 11\\)" }
      ]
    },
    'y9-5c-q1f': {
      question: "Solve the equation: \\(3(x + 3) = 18\\)",
      ...shuffleOptions(["\\(3\\)", "\\(9\\)", "\\(6\\)", "\\(15\\)"], "\\(3\\)"),
      solutionSteps: [
        { explanation: "Divide both sides by \\(3\\) to eliminate the factor outside the brackets.", workingOut: "\\(x + 3 = \\frac{18}{3} \\implies x + 3 = 6\\)" },
        { explanation: "Subtract \\(3\\) from both sides to solve for \\(x\\).", workingOut: "\\(x = 6 - 3 \\implies x = 3\\)" }
      ]
    },
    'y9-5c-q1g': {
      question: "Solve the equation: \\(3(4 - x) = 6\\)",
      ...shuffleOptions(["\\(2\\)", "\\(-2\\)", "\\(6\\)", "\\(10\\)"], "\\(2\\)"),
      solutionSteps: [
        { explanation: "Divide both sides by \\(3\\) to eliminate the factor outside the brackets.", workingOut: "\\(4 - x = \\frac{6}{3} \\implies 4 - x = 2\\)" },
        { explanation: "Subtract \\(4\\) from both sides to isolate \\(-x\\).", workingOut: "\\(-x = 2 - 4 \\implies -x = -2\\)" },
        { explanation: "Multiply or divide both sides by \\(-1\\) to solve for \\(x\\).", workingOut: "\\(x = 2\\)" }
      ]
    },
    'y9-5c-q1h': {
      question: "Solve the equation: \\(2(6 - x) = 8\\)",
      ...shuffleOptions(["\\(2\\)", "\\(-2\\)", "\\(4\\)", "\\(10\\)"], "\\(2\\)"),
      solutionSteps: [
        { explanation: "Divide both sides by \\(2\\) to eliminate the factor outside the brackets.", workingOut: "\\(6 - x = \\frac{8}{2} \\implies 6 - x = 4\\)" },
        { explanation: "Subtract \\(6\\) from both sides to isolate \\(-x\\).", workingOut: "\\(-x = 4 - 6 \\implies -x = -2\\)" },
        { explanation: "Multiply or divide both sides by \\(-1\\) to solve for \\(x\\).", workingOut: "\\(x = 2\\)" }
      ]
    },
    'y9-5c-q1i': {
      question: "Solve the equation: \\(5(7 - x) = 25\\)",
      ...shuffleOptions(["\\(2\\)", "\\(-2\\)", "\\(5\\)", "\\(12\\)"], "\\(2\\)"),
      solutionSteps: [
        { explanation: "Divide both sides by \\(5\\) to eliminate the factor outside the brackets.", workingOut: "\\(7 - x = \\frac{25}{5} \\implies 7 - x = 5\\)" },
        { explanation: "Subtract \\(7\\) from both sides to isolate \\(-x\\).", workingOut: "\\(-x = 5 - 7 \\implies -x = -2\\)" },
        { explanation: "Multiply or divide both sides by \\(-1\\) to solve for \\(x\\).", workingOut: "\\(x = 2\\)" }
      ]
    },
    'y9-5c-q1j': {
      question: "Solve the equation: \\(-3(2x - 4) = 18\\)",
      ...shuffleOptions(["\\(-1\\)", "\\(1\\)", "\\(-3\\)", "\\(-5\\)"], "\\(-1\\)"),
      solutionSteps: [
        { explanation: "Divide both sides by \\(-3\\) to eliminate the factor outside the brackets.", workingOut: "\\(2x - 4 = \\frac{18}{-3} \\implies 2x - 4 = -6\\)" },
        { explanation: "Add \\(4\\) to both sides to isolate the variable term \\(2x\\).", workingOut: "\\(2x = -6 + 4 \\implies 2x = -2\\)" },
        { explanation: "Divide both sides by \\(2\\) to solve for \\(x\\).", workingOut: "\\(x = \\frac{-2}{2} \\implies x = -1\\)" }
      ]
    },
    'y9-5c-q1k': {
      question: "Solve the equation: \\(-5(2x - 7) = -15\\)",
      ...shuffleOptions(["\\(5\\)", "\\(-5\\)", "\\(2\\)", "\\(3.5\\)"], "\\(5\\)"),
      solutionSteps: [
        { explanation: "Divide both sides by \\(-5\\) to eliminate the factor outside the brackets. Note that dividing negative by negative yields positive.", workingOut: "\\(2x - 7 = \\frac{-15}{-5} \\implies 2x - 7 = 3\\)" },
        { explanation: "Add \\(7\\) to both sides to isolate the variable term \\(2x\\).", workingOut: "\\(2x = 3 + 7 \\implies 2x = 10\\)" },
        { explanation: "Divide both sides by \\(2\\) to solve for \\(x\\).", workingOut: "\\(x = \\frac{10}{2} \\implies x = 5\\)" }
      ]
    },
    'y9-5c-q1l': {
      question: "Solve the equation: \\(-3(4x + 5) = 57\\)",
      ...shuffleOptions(["\\(-6\\)", "\\(6\\)", "\\(-8\\)", "\\(-5.5\\)"], "\\(-6\\)"),
      solutionSteps: [
        { explanation: "Divide both sides by \\(-3\\) to eliminate the factor outside the brackets.", workingOut: "\\(4x + 5 = \\frac{57}{-3} \\implies 4x + 5 = -19\\)" },
        { explanation: "Subtract \\(5\\) from both sides to isolate the variable term \\(4x\\).", workingOut: "\\(4x = -19 - 5 \\implies 4x = -24\\)" },
        { explanation: "Divide both sides by \\(4\\) to solve for \\(x\\).", workingOut: "\\(x = \\frac{-24}{4} \\implies x = -6\\)" }
      ]
    },

    // ==========================================
    // Group 2: Fractional/Decimal answers (q2a to q2i)
    // ==========================================
    'y9-5c-q2a': {
      question: "Solve the equation: \\(3(x + 2) = 14\\)",
      ...shuffleOptions(["\\(\\frac{8}{3}\\)", "\\(\\frac{14}{3}\\)", "\\(2\\)", "\\(\\frac{20}{3}\\)"], "\\(\\frac{8}{3}\\)"),
      solutionSteps: [
        { explanation: "Expand the bracket on the left side of the equation.", workingOut: "\\(3x + 6 = 14\\)" },
        { explanation: "Subtract \\(6\\) from both sides to isolate the variable term \\(3x\\).", workingOut: "\\(3x = 14 - 6 \\implies 3x = 8\\)" },
        { explanation: "Divide both sides by \\(3\\) to solve for \\(x\\).", workingOut: "\\(x = \\frac{8}{3}\\)" }
      ]
    },
    'y9-5c-q2b': {
      question: "Solve the equation: \\(4(x - 3) = 15\\)",
      ...shuffleOptions(["\\(\\frac{27}{4}\\)", "\\(\\frac{15}{4}\\)", "\\(6\\)", "\\(\\frac{3}{4}\\)"], "\\(\\frac{27}{4}\\)"),
      solutionSteps: [
        { explanation: "Expand the bracket on the left side of the equation.", workingOut: "\\(4x - 12 = 15\\)" },
        { explanation: "Add \\(12\\) to both sides to isolate the variable term \\(4x\\).", workingOut: "\\(4x = 15 + 12 \\implies 4x = 27\\)" },
        { explanation: "Divide both sides by \\(4\\) to solve for \\(x\\).", workingOut: "\\(x = \\frac{27}{4}\\)" }
      ]
    },
    'y9-5c-q2c': {
      question: "Solve the equation: \\(6(2 - x) = 15\\)",
      ...shuffleOptions(["\\(-0.5\\)", "\\(0.5\\)", "\\(-1.5\\)", "\\(2.5\\)"], "\\(-0.5\\)"),
      solutionSteps: [
        { explanation: "Expand the bracket on the left side of the equation.", workingOut: "\\(12 - 6x = 15\\)" },
        { explanation: "Subtract \\(12\\) from both sides to isolate the variable term \\(-6x\\).", workingOut: "\\(-6x = 15 - 12 \\implies -6x = 3\\)" },
        { explanation: "Divide both sides by \\(-6\\) to solve for \\(x\\). Simplification yields \\(-0.5\\).", workingOut: "\\(x = \\frac{3}{-6} \\implies x = -0.5\\)" }
      ]
    },
    'y9-5c-q2d': {
      question: "Solve the equation: \\(5(5 - x) = 8\\)",
      ...shuffleOptions(["\\(3.4\\)", "\\(-3.4\\)", "\\(1.6\\)", "\\(4.2\\)"], "\\(3.4\\)"),
      solutionSteps: [
        { explanation: "Expand the bracket on the left side of the equation.", workingOut: "\\(25 - 5x = 8\\)" },
        { explanation: "Subtract \\(25\\) from both sides to isolate the variable term \\(-5x\\).", workingOut: "\\(-5x = 8 - 25 \\implies -5x = -17\\)" },
        { explanation: "Divide both sides by \\(-5\\) to solve for \\(x\\). Note that dividing negative by negative yields a positive decimal.", workingOut: "\\(x = \\frac{-17}{-5} \\implies x = 3.4\\)" }
      ]
    },
    'y9-5c-q2e': {
      question: "Solve the equation: \\(-3(x - 4) = 8\\)",
      ...shuffleOptions(["\\(\\frac{4}{3}\\)", "\\(-\\frac{4}{3}\\)", "\\(4\\)", "\\(\\frac{20}{3}\\)"], "\\(\\frac{4}{3}\\)"),
      solutionSteps: [
        { explanation: "Expand the bracket on the left side of the equation, paying attention to the negative sign.", workingOut: "\\(-3x + 12 = 8\\)" },
        { explanation: "Subtract \\(12\\) from both sides to isolate the variable term \\(-3x\\).", workingOut: "\\(-3x = 8 - 12 \\implies -3x = -4\\)" },
        { explanation: "Divide both sides by \\(-3\\) to solve for \\(x\\).", workingOut: "\\(x = \\frac{-4}{-3} \\implies x = \\frac{4}{3}\\)" }
      ]
    },
    'y9-5c-q2f': {
      question: "Solve the equation: \\(-2(3x - 1) = 5\\)",
      ...shuffleOptions(["\\(-\\frac{1}{2}\\)", "\\(\\frac{1}{2}\\)", "\\(-1\\)", "\\(-\\frac{7}{6}\\)"], "\\(-\\frac{1}{2}\\)"),
      solutionSteps: [
        { explanation: "Expand the bracket on the left side of the equation.", workingOut: "\\(-6x + 2 = 5\\)" },
        { explanation: "Subtract \\(2\\) from both sides to isolate the variable term \\(-6x\\).", workingOut: "\\(-6x = 5 - 2 \\implies -6x = 3\\)" },
        { explanation: "Divide both sides by \\(-6\\) to solve for \\(x\\) and reduce the fraction.", workingOut: "\\(x = \\frac{3}{-6} \\implies x = -\\frac{1}{2}\\)" }
      ]
    },
    'y9-5c-q2g': {
      question: "Solve the equation: \\(4(x - 2) = \\frac{1}{3}\\)",
      ...shuffleOptions(["\\(\\frac{25}{12}\\)", "\\(\\frac{23}{12}\\)", "\\(\\frac{25}{3}\\)", "\\(\\frac{7}{3}\\)"], "\\(\\frac{25}{12}\\)"),
      solutionSteps: [
        { explanation: "Divide both sides by \\(4\\) (which multiplies the denominator on the right by \\(4\\)) to eliminate the constant outside the bracket.", workingOut: "\\(x - 2 = \\frac{1}{3 \\times 4} \\implies x - 2 = \frac{1}{12}\\)" },
        { explanation: "Add \\(2\\) (which is \\(\\frac{24}{12}\\)) to both sides to solve for \\(x\\).", workingOut: "\\(x = \\frac{1}{12} + \\frac{24}{12} \\implies x = \\frac{25}{12}\\)" }
      ]
    },
    'y9-5c-q2h': {
      question: "Solve the equation: \\(3(2x - 5) = \\frac{2}{5}\\)",
      ...shuffleOptions(["\\(\\frac{77}{30}\\)", "\\(\\frac{77}{15}\\)", "\\(\\frac{23}{30}\\)", "\\(\\frac{73}{30}\\)"], "\\(\\frac{77}{30}\\)"),
      solutionSteps: [
        { explanation: "Divide both sides by \\(3\\) to isolate the bracketed term \\(2x - 5\\).", workingOut: "\\(2x - 5 = \\frac{2}{5 \\times 3} \\implies 2x - 5 = \\frac{2}{15}\\)" },
        { explanation: "Add \\(5\\) (which is \\(\\frac{75}{15}\\)) to both sides to isolate the variable term \\(2x\\).", workingOut: "\\(2x = \\frac{2}{15} + \\frac{75}{15} \\implies 2x = \\frac{77}{15}\\)" },
        { explanation: "Divide both sides by \\(2\\) to solve for \\(x\\).", workingOut: "\\(x = \\frac{77}{15 \\times 2} \\implies x = \\frac{77}{30}\\)" }
      ]
    },
    'y9-5c-q2i': {
      question: "Solve the equation: \\(-2(4x + 3) = \\frac{1}{5}\\)",
      ...shuffleOptions(["\\(-\\frac{31}{40}\\)", "\\(\\frac{31}{40}\\)", "\\(-\\frac{29}{40}\\)", "\\(-\\frac{31}{20}\\)"], "\\(-\\frac{31}{40}\\)"),
      solutionSteps: [
        { explanation: "Divide both sides by \\(-2\\) to isolate the bracketed term \\(4x + 3\\).", workingOut: "\\(4x + 3 = \\frac{1}{5 \\times (-2)} \\implies 4x + 3 = -\\frac{1}{10}\\)" },
        { explanation: "Subtract \\(3\\) (which is \\(\\frac{30}{10}\\)) from both sides to isolate the variable term \\(4x\\).", workingOut: "\\(4x = -\\frac{1}{10} - \\frac{30}{10} \\implies 4x = -\\frac{31}{10}\\)" },
        { explanation: "Divide both sides by \\(4\\) to solve for \\(x\\).", workingOut: "\\(x = \\frac{-31}{10 \\times 4} \\implies x = -\\frac{31}{40}\\)" }
      ]
    },

    // ==========================================
    // Group 3: Multiple Brackets / Brackets on both sides (q3a to q3n)
    // ==========================================
    'y9-5c-q3a': {
      question: "Solve the equation: \\(3(a + 2) + 2(a + 3) = 22\\)",
      ...shuffleOptions(["\\(2\\)", "\\(-2\\)", "\\(4\\)", "\\(3\\)"], "\\(2\\)"),
      solutionSteps: [
        { explanation: "Expand both brackets on the left side of the equation.", workingOut: "\\((3a + 6) + (2a + 6) = 22 \\implies 3a + 6 + 2a + 6 = 22\\)" },
        { explanation: "Combine the like terms (variable terms \\(3a + 2a\\) and constant terms \\(6 + 6\\)).", workingOut: "\\(5a + 12 = 22\\)" },
        { explanation: "Subtract \\(12\\) from both sides to isolate the variable term \\(5a\\).", workingOut: "\\(5a = 22 - 12 \\implies 5a = 10\\)" },
        { explanation: "Divide both sides by \\(5\\) to solve for \\(a\\).", workingOut: "\\(a = \\frac{10}{5} \\implies a = 2\\)" }
      ]
    },
    'y9-5c-q3b': {
      question: "Solve the equation: \\(3(b - 2) + 4(b + 1) = 26\\)",
      ...shuffleOptions(["\\(4\\)", "\\(-4\\)", "\\(5\\)", "\\(6\\)"], "\\(4\\)"),
      solutionSteps: [
        { explanation: "Expand both brackets on the left side of the equation.", workingOut: "\\((3b - 6) + (4b + 4) = 26 \\implies 3b - 6 + 4b + 4 = 26\\)" },
        { explanation: "Combine the like terms (variable terms \\(3b + 4b\\) and constant terms \\(-6 + 4\\)).", workingOut: "\\(7b - 2 = 26\\)" },
        { explanation: "Add \\(2\\) to both sides to isolate the variable term \\(7b\\).", workingOut: "\\(7b = 26 + 2 \\implies 7b = 28\\)" },
        { explanation: "Divide both sides by \\(7\\) to solve for \\(b\\).", workingOut: "\\(b = \\frac{28}{7} \\implies b = 4\\)" }
      ]
    },
    'y9-5c-q3c': {
      question: "Solve the equation: \\(4(c + 3) - 3(c + 1) = 16\\)",
      ...shuffleOptions(["\\(7\\)", "\\(-7\\)", "\\(1\\)", "\\(5\\)"], "\\(7\\)"),
      solutionSteps: [
        { explanation: "Expand both brackets, taking special care with the negative sign on the second bracket: \\(-3 \\times (c + 1) = -3c - 3\\).", workingOut: "\\((4c + 12) - (3c + 3) = 16 \\implies 4c + 12 - 3c - 3 = 16\\)" },
        { explanation: "Combine the like terms (variable terms \\(4c - 3c\\) and constant terms \\(12 - 3\\)).", workingOut: "\\(c + 9 = 16\\)" },
        { explanation: "Subtract \\(9\\) from both sides to solve for \\(c\\).", workingOut: "\\(c = 16 - 9 \\implies c = 7\\)" }
      ]
    },
    'y9-5c-q3d': {
      question: "Solve the equation: \\(3(3d + 1) - 4(d - 2) = 21\\)",
      ...shuffleOptions(["\\(2\\)", "\\(-2\\)", "\\(3\\)", "\\(1\\)"], "\\(2\\)"),
      solutionSteps: [
        { explanation: "Expand both brackets, distributing the negative sign over the second bracket: \\(-4 \\times (d - 2) = -4d + 8\\).", workingOut: "\\((9d + 3) - (4d - 8) = 21 \\implies 9d + 3 - 4d + 8 = 21\\)" },
        { explanation: "Combine the like terms (variable terms \\(9d - 4d\\) and constant terms \\(3 + 8\\)).", workingOut: "\\(5d + 11 = 21\\)" },
        { explanation: "Subtract \\(11\\) from both sides to isolate the variable term \\(5d\\).", workingOut: "\\(5d = 21 - 11 \\implies 5d = 10\\)" },
        { explanation: "Divide both sides by \\(5\\) to solve for \\(d\\).", workingOut: "\\(d = \\frac{10}{5} \\implies d = 2\\)" }
      ]
    },
    'y9-5c-q3e': {
      question: "Solve the equation: \\(3(x + 2) - 2(x - 5) = 24\\)",
      ...shuffleOptions(["\\(8\\)", "\\(-8\\)", "\\(4\\)", "\\(10\\)"], "\\(8\\)"),
      solutionSteps: [
        { explanation: "Expand both brackets, distributing the negative sign over the second bracket: \\(-2 \\times (x - 5) = -2x + 10\\).", workingOut: "\\((3x + 6) - (2x - 10) = 24 \\implies 3x + 6 - 2x + 10 = 24\\)" },
        { explanation: "Combine the like terms (variable terms \\(3x - 2x\\) and constant terms \\(6 + 10\\)).", workingOut: "\\(x + 16 = 24\\)" },
        { explanation: "Subtract \\(16\\) from both sides to solve for \\(x\\).", workingOut: "\\(x = 24 - 16 \\implies x = 8\\)" }
      ]
    },
    'y9-5c-q3f': {
      question: "Solve the equation: \\(4(y - 2) - 2(y - 6) = 18\\)",
      ...shuffleOptions(["\\(7\\)", "\\(-7\\)", "\\(9\\)", "\\(5\\)"], "\\(7\\)"),
      solutionSteps: [
        { explanation: "Expand both brackets, distributing the negative sign over the second bracket: \\(-2 \\times (y - 6) = -2y + 12\\).", workingOut: "\\((4y - 8) - (2y - 12) = 18 \\implies 4y - 8 - 2y + 12 = 18\\)" },
        { explanation: "Combine the like terms (variable terms \\(4y - 2y\\) and constant terms \\(-8 + 12\\)).", workingOut: "\\(2y + 4 = 18\\)" },
        { explanation: "Subtract \\(4\\) from both sides to isolate the variable term \\(2y\\).", workingOut: "\\(2y = 18 - 4 \\implies 2y = 14\\)" },
        { explanation: "Divide both sides by \\(2\\) to solve for \\(y\\).", workingOut: "\\(y = \\frac{14}{2} \\implies y = 7\\)" }
      ]
    },
    'y9-5c-q3g': {
      question: "Solve the equation: \\(4(a + 1) = 3(a + 3)\\)",
      ...shuffleOptions(["\\(5\\)", "\\(-5\\)", "\\(13\\)", "\\(2\\)"], "\\(5\\)"),
      solutionSteps: [
        { explanation: "Expand the brackets on both sides of the equation.", workingOut: "\\(4a + 4 = 3a + 9\\)" },
        { explanation: "Subtract \\(3a\\) from both sides to group all variable terms on the left.", workingOut: "\\(4a - 3a + 4 = 9 \\implies a + 4 = 9\\)" },
        { explanation: "Subtract \\(4\\) from both sides to solve for \\(a\\).", workingOut: "\\(a = 9 - 4 \\implies a = 5\\)" }
      ]
    },
    'y9-5c-q3h': {
      question: "Solve the equation: \\(4(a + 2) = 2(3a + 1)\\)",
      ...shuffleOptions(["\\(3\\)", "\\(-3\\)", "\\(5\\)", "\\(2\\)"], "\\(3\\)"),
      solutionSteps: [
        { explanation: "Expand the brackets on both sides of the equation.", workingOut: "\\(4a + 8 = 6a + 2\\)" },
        { explanation: "Subtract \\(4a\\) from both sides to group the variable terms on the right (or subtract \\(6a\\) to group on the left). Here, we group on the right.", workingOut: "\\(8 = 6a - 4a + 2 \\implies 8 = 2a + 2\\)" },
        { explanation: "Subtract \\(2\\) from both sides to isolate the variable term \\(2a\\).", workingOut: "\\(8 - 2 = 2a \\implies 6 = 2a\\)" },
        { explanation: "Divide both sides by \\(2\\) to solve for \\(a\\).", workingOut: "\\(a = \\frac{6}{2} \\implies a = 3\\)" }
      ]
    },
    'y9-5c-q3i': {
      question: "Solve the equation: \\(3(a + 5) = 6(a + 6)\\)",
      ...shuffleOptions(["\\(-7\\)", "\\(7\\)", "\\(-3\\)", "\\(-17\\)"], "\\(-7\\)"),
      solutionSteps: [
        { explanation: "Expand the brackets on both sides of the equation.", workingOut: "\\(3a + 15 = 6a + 36\\)" },
        { explanation: "Subtract \\(3a\\) from both sides to group the variable terms on the right.", workingOut: "\\(15 = 6a - 3a + 36 \\implies 15 = 3a + 36\\)" },
        { explanation: "Subtract \\(36\\) from both sides to isolate the variable term \\(3a\\).", workingOut: "\\(15 - 36 = 3a \\implies -21 = 3a\\)" },
        { explanation: "Divide both sides by \\(3\\) to solve for \\(a\\).", workingOut: "\\(a = \\frac{-21}{3} \\implies a = -7\\)" }
      ]
    },
    'y9-5c-q3j': {
      question: "Solve the equation: \\(4(2a - 1) = 3(2a + 2)\\)",
      ...shuffleOptions(["\\(5\\)", "\\(-5\\)", "\\(1\\)", "\\(10\\)"], "\\(5\\)"),
      solutionSteps: [
        { explanation: "Expand the brackets on both sides of the equation.", workingOut: "\\(8a - 4 = 6a + 6\\)" },
        { explanation: "Subtract \\(6a\\) from both sides to group the variable terms on the left.", workingOut: "\\(8a - 6a - 4 = 6 \\implies 2a - 4 = 6\\)" },
        { explanation: "Add \\(4\\) to both sides to isolate the variable term \\(2a\\).", workingOut: "\\(2a = 6 + 4 \\implies 2a = 10\\)" },
        { explanation: "Divide both sides by \\(2\\) to solve for \\(a\\).", workingOut: "\\(a = \\frac{10}{2} \\implies a = 5\\)" }
      ]
    },
    'y9-5c-q3k': {
      question: "Solve the equation: \\(-3(x + 2) + 4(x - 1) = 12\\)",
      ...shuffleOptions(["\\(22\\)", "\\(-22\\)", "\\(10\\)", "\\(14\\)"], "\\(22\\)"),
      solutionSteps: [
        { explanation: "Expand both brackets, distributing the negative sign carefully: \\(-3 \\times (x + 2) = -3x - 6\\).", workingOut: "\\((-3x - 6) + (4x - 4) = 12 \\implies -3x - 6 + 4x - 4 = 12\\)" },
        { explanation: "Combine the like terms (variable terms \\(-3x + 4x\\) and constant terms \\(-6 - 4\\)).", workingOut: "\\(x - 10 = 12\\)" },
        { explanation: "Add \\(10\\) to both sides to solve for \\(x\\).", workingOut: "\\(x = 12 + 10 \\implies x = 22\\)" }
      ]
    },
    'y9-5c-q3l': {
      question: "Solve the equation: \\(-4(x + 2) - 3(x + 1) = 17\\)",
      ...shuffleOptions(["\\(-4\\)", "\\(4\\)", "\\(-6\\)", "\\(-2\\)"], "\\(-4\\)"),
      solutionSteps: [
        { explanation: "Expand both brackets, distributing the negative signs carefully over both sets.", workingOut: "\\((-4x - 8) + (-3x - 3) = 17 \\implies -4x - 8 - 3x - 3 = 17\\)" },
        { explanation: "Combine the like terms (variable terms \\(-4x - 3x\\) and constant terms \\(-8 - 3\\)).", workingOut: "\\(-7x - 11 = 17\\)" },
        { explanation: "Add \\(11\\) to both sides to isolate the variable term \\(-7x\\).", workingOut: "\\(-7x = 17 + 11 \\implies -7x = 28\\)" },
        { explanation: "Divide both sides by \\(-7\\) to solve for \\(x\\).", workingOut: "\\(x = \\frac{28}{-7} \\implies x = -4\\)" }
      ]
    },
    'y9-5c-q3m': {
      question: "Solve the equation: \\(\\frac{1}{2}(4x + 6) + 5(x - 1) = 8\\frac{1}{2}\\)",
      ...shuffleOptions(["\\(1.5\\)", "\\(-1.5\\)", "\\(2.5\\)", "\\(0.5\\)"], "\\(1.5\\)"),
      solutionSteps: [
        { explanation: "Expand both brackets. Note that \\(\\frac{1}{2} \\times 4x = 2x\\) and \\(\\frac{1}{2} \\times 6 = 3\\). Also convert \\(8\\frac{1}{2}\\) to \\(8.5\\).", workingOut: "\\((2x + 3) + (5x - 5) = 8.5 \\implies 2x + 3 + 5x - 5 = 8.5\\)" },
        { explanation: "Combine the like terms (variable terms \\(2x + 5x\\) and constant terms \\(3 - 5\\)).", workingOut: "\\(7x - 2 = 8.5\\)" },
        { explanation: "Add \\(2\\) to both sides to isolate the variable term \\(7x\\).", workingOut: "\\(7x = 8.5 + 2 \\implies 7x = 10.5\\)" },
        { explanation: "Divide both sides by \\(7\\) to solve for \\(x\\).", workingOut: "\\(x = \\frac{10.5}{7} \\implies x = 1.5\\)" }
      ]
    },
    'y9-5c-q3n': {
      question: "Solve the equation: \\(\\frac{1}{2}(2x + 4) + 3(x - 3) = 11\\)",
      ...shuffleOptions(["\\(4.5\\)", "\\(-4.5\\)", "\\(3.5\\)", "\\(5.5\\)"], "\\(4.5\\)"),
      solutionSteps: [
        { explanation: "Expand both brackets. Note that \\(\\frac{1}{2} \\times 2x = x\\) and \\(\\frac{1}{2} \\times 4 = 2\\).", workingOut: "\\((x + 2) + (3x - 9) = 11 \\implies x + 2 + 3x - 9 = 11\\)" },
        { explanation: "Combine the like terms (variable terms \\(x + 3x\\) and constant terms \\(2 - 9\\)).", workingOut: "\\(4x - 7 = 11\\)" },
        { explanation: "Add \\(7\\) to both sides to isolate the variable term \\(4x\\).", workingOut: "\\(4x = 11 + 7 \\implies 4x = 18\\)" },
        { explanation: "Divide both sides by \\(4\\) to solve for \\(x\\) and express the result as a decimal.", workingOut: "\\(x = \\frac{18}{4} \\implies x = 4.5\\)" }
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
  console.log('Successfully completed detailed step expansion and MCQ conversion for all 35 questions in y9-5c!');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
