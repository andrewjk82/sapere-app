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
    'y9-5f-q1a': {
      question: "Solve the equation for \\(x\\): \\(x + a = d\\)",
      ...shuffleOptions(["\\(d - a\\)", "\\(d + a\\)", "\\(a - d\\)", "\\(\\frac{d}{a}\\)"], "\\(d - a\\)"),
      solutionSteps: [
        { explanation: "Identify the term added to \\(x\\), which is \\(a\\). To isolate \\(x\\), perform the inverse operation by subtracting \\(a\\) from both sides of the equation.", workingOut: "\\(x = d - a\\)" }
      ]
    },
    'y9-5f-q1b': {
      question: "Solve the equation for \\(x\\): \\(x - c = f\\)",
      ...shuffleOptions(["\\(f + c\\)", "\\(f - c\\)", "\\(c - f\\)", "\\(fc\\)"], "\\(f + c\\)"),
      solutionSteps: [
        { explanation: "Identify the term subtracted from \\(x\\), which is \\(c\\). To isolate \\(x\\), perform the inverse operation by adding \\(c\\) to both sides of the equation.", workingOut: "\\(x = f + c\\)" }
      ]
    },
    'y9-5f-q1c': {
      question: "Solve the equation for \\(x\\): \\(m - x = n\\)",
      ...shuffleOptions(["\\(m - n\\)", "\\(m + n\\)", "\\(n - m\\)", "\\(mn\\)"], "\\(m - n\\)"),
      solutionSteps: [
        { explanation: "To make the variable term positive, add \\(x\\) to both sides of the equation.", workingOut: "\\(m = n + x\\)" },
        { explanation: "Now, isolate the variable \\(x\\) by performing the inverse operation on the constant term. Subtract \\(n\\) from both sides.", workingOut: "\\(x = m - n\\)" }
      ]
    },
    'y9-5f-q1d': {
      question: "Solve the equation for \\(x\\): \\(-x + p = q\\)",
      ...shuffleOptions(["\\(p - q\\)", "\\(q - p\\)", "\\(p + q\\)", "\\(-q + p\\)"], "\\(p - q\\)"),
      solutionSteps: [
        { explanation: "To make the variable term positive, add \\(x\\) to both sides of the equation.", workingOut: "\\(p = q + x\\)" },
        { explanation: "Now, isolate the variable \\(x\\) by performing the inverse operation on the constant term. Subtract \\(q\\) from both sides.", workingOut: "\\(x = p - q\\)" }
      ]
    },
    'y9-5f-q1e': {
      question: "Solve the equation for \\(x\\): \\(ax = d\\)",
      ...shuffleOptions(["\\(\\frac{d}{a}\\)", "\\(d - a\\)", "\\(ad\\)", "\\(\\frac{a}{d}\\)"], "\\(\\frac{d}{a}\\)"),
      solutionSteps: [
        { explanation: "Identify the coefficient of \\(x\\), which is \\(a\\). To isolate \\(x\\), perform the inverse operation by dividing both sides of the equation by \\(a\\).", workingOut: "\\(x = \\frac{d}{a}\\)" }
      ]
    },
    'y9-5f-q1f': {
      question: "Solve the equation for \\(x\\): \\(d - ax = f\\)",
      ...shuffleOptions(["\\(\\frac{d - f}{a}\\)", "\\(\\frac{f - d}{a}\\)", "\\(\\frac{d + f}{a}\\)", "\\(d - f - a\\)"], "\\(\\frac{d - f}{a}\\)"),
      solutionSteps: [
        { explanation: "To make the variable term positive, add \\(ax\\) to both sides of the equation.", workingOut: "\\(d = f + ax\\)" },
        { explanation: "Subtract \\(f\\) from both sides to isolate the variable term \\(ax\\).", workingOut: "\\(d - f = ax\\)" },
        { explanation: "Divide both sides by \\(a\\) to solve for \\(x\\).", workingOut: "\\(x = \\frac{d - f}{a}\\)" }
      ]
    },
    'y9-5f-q1g': {
      question: "Solve the equation for \\(x\\): \\(p(x + q) = r\\)",
      ...shuffleOptions(["\\(\\frac{r - pq}{p}\\)", "\\(\\frac{r + pq}{p}\\)", "\\(\\frac{r - q}{p}\\)", "\\(r - q - p\\)"], "\\(\\frac{r - pq}{p}\\)"),
      solutionSteps: [
        { explanation: "Divide both sides of the equation by \\(p\\) to eliminate the factor outside the brackets.", workingOut: "\\(x + q = \\frac{r}{p}\\)" },
        { explanation: "Subtract \\(q\\) from both sides to isolate \\(x\\). To write it as a single fraction, find a common denominator of \\(p\\).", workingOut: "\\(x = \\frac{r}{p} - q \\implies x = \\frac{r}{p} - \\frac{pq}{p} \\implies x = \\frac{r - pq}{p}\\)" }
      ]
    },
    'y9-5f-q1h': {
      question: "Solve the equation for \\(x\\): \\(a(bx + c) = d\\)",
      ...shuffleOptions(["\\(\\frac{d - ac}{ab}\\)", "\\(\\frac{d + ac}{ab}\\)", "\\(\\frac{d - c}{ab}\\)", "\\(\\frac{d - ac}{a}\\)"], "\\(\\frac{d - ac}{ab}\\)"),
      solutionSteps: [
        { explanation: "Divide both sides of the equation by \\(a\\) to eliminate the factor outside the brackets.", workingOut: "\\(bx + c = \\frac{d}{a}\\)" },
        { explanation: "Subtract \\(c\\) from both sides to isolate the variable term \\(bx\\). Convert \\(c\\) to a fraction with a denominator of \\(a\\).", workingOut: "\\(bx = \\frac{d}{a} - c \\implies bx = \\frac{d - ac}{a}\\)" },
        { explanation: "Divide both sides by \\(b\\) (which multiplies the denominator by \\(b\\)) to solve for \\(x\\).", workingOut: "\\(x = \\frac{d - ac}{ab}\\)" }
      ]
    },
    'y9-5f-q1i': {
      question: "Solve the equation for \\(x\\): \\(\\frac{x}{m} = n\\)",
      ...shuffleOptions(["\\(mn\\)", "\\(\\frac{n}{m}\\)", "\\(m + n\\)", "\\(n - m\\)"], "\\(mn\\)"),
      solutionSteps: [
        { explanation: "To eliminate the denominator \\(m\\) and isolate \\(x\\), perform the inverse operation by multiplying both sides of the equation by \\(m\\).", workingOut: "\\(x = mn\\)" }
      ]
    },
    'y9-5f-q1j': {
      question: "Solve the equation for \\(x\\): \\(\\frac{x + p}{q} = r\\)",
      ...shuffleOptions(["\\(qr - p\\)", "\\(qr + p\\)", "\\(\\frac{r - p}{q}\\)", "\\(q(r - p)\\)"], "\\(qr - p\\)"),
      solutionSteps: [
        { explanation: "Multiply both sides of the equation by \\(q\\) to eliminate the denominator.", workingOut: "\\(x + p = qr\\)" },
        { explanation: "Subtract \\(p\\) from both sides to isolate \\(x\\).", workingOut: "\\(x = qr - p\\)" }
      ]
    },
    'y9-5f-q1k': {
      question: "Solve the equation for \\(x\\): \\(\\frac{x}{p} + q = r\\)",
      ...shuffleOptions(["\\(p(r - q)\\)", "\\(pr - q\\)", "\\(p(r + q)\\)", "\\(\\frac{r - q}{p}\\)"], "\\(p(r - q)\\)"),
      solutionSteps: [
        { explanation: "Subtract \\(q\\) from both sides to isolate the fraction term \\(\\frac{x}{p}\\).", workingOut: "\\(\\frac{x}{p} = r - q\\)" },
        { explanation: "Multiply both sides of the equation by \\(p\\) to solve for \\(x\\).", workingOut: "\\(x = p(r - q)\\)" }
      ]
    },
    'y9-5f-q1l': {
      question: "Solve the equation for \\(x\\): \\(\\frac{ax}{b} = c\\)",
      ...shuffleOptions(["\\(\\frac{bc}{a}\\)", "\\(\\frac{ac}{b}\\)", "\\(abc\\)", "\\(\\frac{a}{bc}\\)"], "\\(\\frac{bc}{a}\\)"),
      solutionSteps: [
        { explanation: "Multiply both sides of the equation by \\(b\\) to eliminate the denominator.", workingOut: "\\(ax = bc\\)" },
        { explanation: "Divide both sides by \\(a\\) to solve for \\(x\\).", workingOut: "\\(x = \\frac{bc}{a}\\)" }
      ]
    },
    'y9-5f-q1m': {
      question: "Solve the equation for \\(x\\): \\(\\frac{px}{q} + r = s\\)",
      ...shuffleOptions(["\\(\\frac{q(s - r)}{p}\\)", "\\(\\frac{q(s + r)}{p}\\)", "\\(\\frac{qs - r}{p}\\)", "\\(\\frac{s - r}{pq}\\)"], "\\(\\frac{q(s - r)}{p}\\)"),
      solutionSteps: [
        { explanation: "Subtract \\(r\\) from both sides to isolate the fraction term \\(\\frac{px}{q}\\).", workingOut: "\\(\\frac{px}{q} = s - r\\)" },
        { explanation: "Multiply both sides by \\(q\\) to isolate the variable term \\(px\\).", workingOut: "\\(px = q(s - r)\\)" },
        { explanation: "Divide both sides by \\(p\\) to solve for \\(x\\).", workingOut: "\\(x = \\frac{q(s - r)}{p}\\)" }
      ]
    },
    'y9-5f-q1n': {
      question: "Solve the equation for \\(x\\): \\(\\frac{mx + n}{p} = q\\)",
      ...shuffleOptions(["\\(\\frac{pq - n}{m}\\)", "\\(\\frac{pq + n}{m}\\)", "\\(\\frac{q - n}{mp}\\)", "\\(pq - n - m\\)"], "\\(\\frac{pq - n}{m}\\)"),
      solutionSteps: [
        { explanation: "Multiply both sides of the equation by \\(p\\) to eliminate the denominator.", workingOut: "\\(mx + n = pq\\)" },
        { explanation: "Subtract \\(n\\) from both sides to isolate the variable term \\(mx\\).", workingOut: "\\(mx = pq - n\\)" },
        { explanation: "Divide both sides by \\(m\\) to solve for \\(x\\).", workingOut: "\\(x = \\frac{pq - n}{m}\\)" }
      ]
    },
    'y9-5f-q1o': {
      question: "Solve the equation for \\(x\\): \\(\\frac{ax - b}{b} = a\\)",
      ...shuffleOptions(["\\(\\frac{ab + b}{a}\\)", "\\(\\frac{ab - b}{a}\\)", "\\(ab + 1\\)", "\\(\\frac{a + b}{b}\\)"], "\\(\\frac{ab + b}{a}\\)"),
      solutionSteps: [
        { explanation: "Multiply both sides of the equation by \\(b\\) to eliminate the denominator.", workingOut: "\\(ax - b = ab\\)" },
        { explanation: "Add \\(b\\) to both sides to isolate the variable term \\(ax\\).", workingOut: "\\(ax = ab + b\\)" },
        { explanation: "Divide both sides by \\(a\\) to solve for \\(x\\).", workingOut: "\\(x = \\frac{ab + b}{a}\\)" }
      ]
    },
    'y9-5f-q1p': {
      question: "Solve the equation for \\(x\\): \\(\\frac{x}{a} + \\frac{b}{c} = d\\)",
      ...shuffleOptions(["\\(\\frac{a(cd - b)}{c}\\)", "\\(\\frac{a(cd + b)}{c}\\)", "\\(\\frac{cd - ab}{c}\\)", "\\(a(d - bc)\\)"], "\\(\\frac{a(cd - b)}{c}\\)"),
      solutionSteps: [
        { explanation: "Subtract the fraction \\(\\frac{b}{c}\\) from both sides to isolate the term \\(\\frac{x}{a}\\). Express the right side as a single fraction with denominator \\(c\\).", workingOut: "\\(\\frac{x}{a} = d - \\frac{b}{c} \\implies \\frac{x}{a} = \\frac{cd}{c} - \\frac{b}{c} \\implies \\frac{x}{a} = \\frac{cd - b}{c}\\)" },
        { explanation: "Multiply both sides of the equation by \\(a\\) to solve for \\(x\\).", workingOut: "\\(x = \\frac{a(cd - b)}{c}\\)" }
      ]
    },
    'y9-5f-q1q': {
      question: "Solve the equation for \\(x\\): \\(\\frac{x}{p} - \\frac{p}{q} = q\\)",
      ...shuffleOptions(["\\(\\frac{p(q^2 + p)}{q}\\)", "\\(\\frac{p(q^2 - p)}{q}\\)", "\\(\\frac{pq^2 + p^2}{q}\\)", "\\(p(q^2 + 1)\\)"], "\\(\\frac{p(q^2 + p)}{q}\\)"),
      solutionSteps: [
        { explanation: "Add the fraction \\(\\frac{p}{q}\\) to both sides to isolate the term \\(\\frac{x}{p}\\). Express the right side as a single fraction with denominator \\(q\\).", workingOut: "\\(\\frac{x}{p} = q + \\frac{p}{q} \\implies \\frac{x}{p} = \\frac{q^2}{q} + \\frac{p}{q} \\implies \\frac{x}{p} = \\frac{q^2 + p}{q}\\)" },
        { explanation: "Multiply both sides of the equation by \\(p\\) to solve for \\(x\\).", workingOut: "\\(x = \\frac{p(q^2 + p)}{q}\\)" }
      ]
    },
    'y9-5f-q1r': {
      question: "Solve the equation for \\(x\\): \\(\\frac{x}{a} - a = \\frac{b}{a}\\)",
      ...shuffleOptions(["\\(a^2 + b\\)", "\\(a^2 - b\\)", "\\(a(a + b)\\)", "\\(\\frac{b + a^2}{a^2}\\)"], "\\(a^2 + b\\)"),
      solutionSteps: [
        { explanation: "Add \\(a\\) to both sides to isolate the fraction term \\(\\frac{x}{a}\\).", workingOut: "\\(\\frac{x}{a} = \\frac{b}{a} + a\\)" },
        { explanation: "Multiply both sides of the equation by \\(a\\) to solve for \\(x\\). Distribute \\(a\\) into both terms: \\(a \\times \\frac{b}{a} = b\\) and \\(a \\times a = a^2\\).", workingOut: "\\(x = a \\left(\\frac{b}{a} + a\\right) \\implies x = b + a^2\\)" }
      ]
    },
    'y9-5f-q2a': {
      question: "Solve the equation for \\(x\\): \\(px + q = rx + s\\)",
      ...shuffleOptions(["\\(\\frac{s - q}{p - r}\\)", "\\(\\frac{s + q}{p - r}\\)", "\\(\\frac{q - s}{p - r}\\)", "\\(\\frac{s - q}{p + r}\\)"], "\\(\\frac{s - q}{p - r}\\)"),
      solutionSteps: [
        { explanation: "Group the variable terms containing \\(x\\) on the left side and constant terms on the right side by subtracting \\(rx\\) and \\(q\\) from both sides.", workingOut: "\\(px - rx = s - q\\)" },
        { explanation: "Factor out the common variable \\(x\\) on the left side.", workingOut: "\\(x(p - r) = s - q\\)" },
        { explanation: "Divide both sides by the binomial expression \\(p - r\\) to solve for \\(x\\).", workingOut: "\\(x = \\frac{s - q}{p - r}\\)" }
      ]
    },
    'y9-5f-q2b': {
      question: "Solve the equation for \\(x\\): \\(ax + b = bx - a\\)",
      ...shuffleOptions(["\\(\\frac{a + b}{b - a}\\)", "\\(\\frac{a + b}{a - b}\\)", "\\(\\frac{a - b}{b - a}\\)", "\\(\\frac{-a - b}{a + b}\\)"], "\\(\\frac{a + b}{b - a}\\)"),
      solutionSteps: [
        { explanation: "Group the variable terms containing \\(x\\) on the left side and constant terms on the right side by subtracting \\(bx\\) and \\(b\\) from both sides.", workingOut: "\\(ax - bx = -a - b\\)" },
        { explanation: "Factor out the common variable \\(x\\) on the left side.", workingOut: "\\(x(a - b) = -(a + b)\\)" },
        { explanation: "Divide both sides by \\(a - b\\) to solve for \\(x\\), then multiply the numerator and denominator by \\(-1\\) to rewrite the expression.", workingOut: "\\(x = \\frac{-(a + b)}{a - b} \\implies x = \\frac{a + b}{b - a}\\)" }
      ]
    },
    'y9-5f-q2c': {
      question: "Solve the equation for \\(x\\): \\(p(x + q) = rx + s\\)",
      ...shuffleOptions(["\\(\\frac{s - pq}{p - r}\\)", "\\(\\frac{s + pq}{p - r}\\)", "\\(\\frac{pq - s}{p - r}\\)", "\\(\\frac{s - pq}{p + r}\\)"], "\\(\\frac{s - pq}{p - r}\\)"),
      solutionSteps: [
        { explanation: "Expand the bracket on the left side of the equation.", workingOut: "\\(px + pq = rx + s\\)" },
        { explanation: "Subtract \\(rx\\) and \\(pq\\) from both sides to group the variable terms on the left side.", workingOut: "\\(px - rx = s - pq\\)" },
        { explanation: "Factor out the common variable \\(x\\) on the left side, then divide both sides by \\(p - r\\) to solve for \\(x\\).", workingOut: "\\(x(p - r) = s - pq \\implies x = \\frac{s - pq}{p - r}\\)" }
      ]
    },
    'y9-5f-q2d': {
      question: "Solve the equation for \\(x\\): \\(p(x - q) = r(x - s)\\)",
      ...shuffleOptions(["\\(\\frac{pq - rs}{p - r}\\)", "\\(\\frac{pq + rs}{p - r}\\)", "\\(\\frac{rs - pq}{p - r}\\)", "\\(\\frac{pq - rs}{p + r}\\)"], "\\(\\frac{pq - rs}{p - r}\\)"),
      solutionSteps: [
        { explanation: "Expand the brackets on both sides of the equation.", workingOut: "\\(px - pq = rx - rs\\)" },
        { explanation: "Subtract \\(rx\\) and add \\(pq\\) to both sides to group all variable terms on the left.", workingOut: "\\(px - rx = pq - rs\\)" },
        { explanation: "Factor out the common variable \\(x\\) on the left side, then divide both sides by \\(p - r\\) to solve for \\(x\\).", workingOut: "\\(x(p - r) = pq - rs \\implies x = \\frac{pq - rs}{p - r}\\)" }
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
  console.log('Successfully completed detailed step expansion and MCQ conversion for all 22 questions in y9-5f!');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
