const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();

  // 1. mc31
  const mc31 = {
    q: 'For what values of $k$ is the function $f(x) = x^3 - 3x^2 + kx + 5$ increasing for all real $x$?',
    question: 'For what values of $k$ is the function $f(x) = x^3 - 3x^2 + kx + 5$ increasing for all real $x$?',
    options: [
      { text: '$k > 0$', imageUrl: '' },
      { text: '$k > 1$', imageUrl: '' },
      { text: '$k > 2$', imageUrl: '' },
      { text: '$k \\geq 3$', imageUrl: '' }
    ],
    answer: '3',
    solutionSteps: [
      {
        explanation: 'A function $f(x)$ is increasing for all real $x$ if its derivative $f\'(x)$ is greater than or equal to zero for all $x$.',
        workingOut: 'f\'(x) \\geq 0 \\quad \\text{for all } x'
      },
      {
        explanation: 'First, find the derivative of the function.',
        workingOut: 'f\'(x) = \\frac{d}{dx}(x^3 - 3x^2 + kx + 5) = 3x^2 - 6x + k'
      },
      {
        explanation: 'The derivative $f\'(x) = 3x^2 - 6x + k$ is a quadratic function opening upwards (since $a=3>0$). For this quadratic to be greater than or equal to zero for all $x$, its discriminant must be less than or equal to zero.',
        workingOut: '\\Delta = b^2 - 4ac \\leq 0 \\\\ (-6)^2 - 4(3)(k) \\leq 0'
      },
      {
        explanation: 'Solve the inequality for $k$.',
        workingOut: '36 - 12k \\leq 0 \\\\ 36 \\leq 12k \\\\ k \\geq 3'
      }
    ],
    updatedAt: FieldValue.serverTimestamp()
  };

  // 2. mc31s
  const mc31s = {
    q: 'For $f(x) = x^3 - 3x^2 + mx - 2$, find the values of $m$ so that $f(x)$ is increasing everywhere.',
    question: 'For $f(x) = x^3 - 3x^2 + mx - 2$, find the values of $m$ so that $f(x)$ is increasing everywhere.',
    options: [
      { text: '$m \\geq 0$', imageUrl: '' },
      { text: '$m \\geq 1$', imageUrl: '' },
      { text: '$m \\geq 3$', imageUrl: '' },
      { text: '$m \\geq 4$', imageUrl: '' }
    ],
    answer: '2',
    solutionSteps: [
      {
        explanation: 'A function $f(x)$ is increasing everywhere if its derivative $f\'(x) \\geq 0$ for all real numbers.',
        workingOut: 'f\'(x) \\geq 0'
      },
      {
        explanation: 'Differentiate $f(x)$ with respect to $x$.',
        workingOut: 'f\'(x) = 3x^2 - 6x + m'
      },
      {
        explanation: 'Since $f\'(x)$ is a quadratic with a positive leading coefficient ($a=3$), $f\'(x) \\geq 0$ for all $x$ if and only if the discriminant $\\Delta \\leq 0$.',
        workingOut: '\\Delta = b^2 - 4ac \\leq 0 \\\\ (-6)^2 - 4(3)(m) \\leq 0'
      },
      {
        explanation: 'Solve for $m$.',
        workingOut: '36 - 12m \\leq 0 \\\\ 36 \\leq 12m \\\\ m \\geq 3'
      }
    ],
    updatedAt: FieldValue.serverTimestamp()
  };

  // 3. mc32
  const mc32 = {
    q: 'Find the integers $a$ and $b$ such that $\\frac{1}{\\sqrt{5}-2} = a + b\\sqrt{5}$.',
    question: 'Find the integers $a$ and $b$ such that $\\frac{1}{\\sqrt{5}-2} = a + b\\sqrt{5}$.',
    options: [
      { text: '$a=2, b=1$', imageUrl: '' },
      { text: '$a=1, b=2$', imageUrl: '' },
      { text: '$a=-2, b=1$', imageUrl: '' },
      { text: '$a=-2, b=-1$', imageUrl: '' }
    ],
    answer: '0',
    solutionSteps: [
      {
        explanation: 'To rationalise the denominator, multiply both the numerator and the denominator by the conjugate of the denominator, which is $\\sqrt{5}+2$.',
        workingOut: '\\frac{1}{\\sqrt{5}-2} = \\frac{1}{\\sqrt{5}-2} \\times \\frac{\\sqrt{5}+2}{\\sqrt{5}+2}'
      },
      {
        explanation: 'Expand the denominator using the difference of two squares formula: $(x-y)(x+y) = x^2 - y^2$.',
        workingOut: 'Denominator = (\\sqrt{5})^2 - (2)^2 = 5 - 4 = 1'
      },
      {
        explanation: 'Simplify the expression.',
        workingOut: '\\frac{\\sqrt{5}+2}{1} = 2 + \\sqrt{5}'
      },
      {
        explanation: 'By equating this to $a + b\\sqrt{5}$, we can identify $a$ and $b$.',
        workingOut: '2 + 1\\sqrt{5} = a + b\\sqrt{5} \\implies a=2, \\; b=1'
      }
    ],
    updatedAt: FieldValue.serverTimestamp()
  };

  // 4. mc32s
  const mc32s = {
    q: 'Express $\\frac{2}{\\sqrt{3} + 1}$ in the form $a + b\\sqrt{3}$, where $a$ and $b$ are rational numbers.',
    question: 'Express $\\frac{2}{\\sqrt{3} + 1}$ in the form $a + b\\sqrt{3}$, where $a$ and $b$ are rational numbers.',
    options: [
      { text: '$1 - \\sqrt{3}$', imageUrl: '' },
      { text: '$\\sqrt{3} - 1$', imageUrl: '' },
      { text: '$1 + \\sqrt{3}$', imageUrl: '' },
      { text: '$2 - \\sqrt{3}$', imageUrl: '' }
    ],
    answer: '1',
    solutionSteps: [
      {
        explanation: 'Multiply the numerator and denominator by the conjugate of the denominator, $\\sqrt{3}-1$.',
        workingOut: '\\frac{2}{\\sqrt{3}+1} = \\frac{2}{\\sqrt{3}+1} \\times \\frac{\\sqrt{3}-1}{\\sqrt{3}-1}'
      },
      {
        explanation: 'Expand the denominator using $(x+y)(x-y) = x^2 - y^2$.',
        workingOut: '\\text{Denominator} = (\\sqrt{3})^2 - (1)^2 = 3 - 1 = 2'
      },
      {
        explanation: 'Simplify the expression by dividing the numerator by the denominator.',
        workingOut: '\\frac{2(\\sqrt{3}-1)}{2} = \\sqrt{3}-1'
      },
      {
        explanation: 'The result is in the required form $a + b\\sqrt{3}$ with $a=-1$ and $b=1$.',
        workingOut: '\\sqrt{3} - 1'
      }
    ],
    updatedAt: FieldValue.serverTimestamp()
  };

  batch.update(db.collection('questions').doc('girr2020-mc31'), mc31);
  batch.update(db.collection('questions').doc('girr2020-mc31s'), mc31s);
  batch.update(db.collection('questions').doc('girr2020-mc32'), mc32);
  batch.update(db.collection('questions').doc('girr2020-mc32s'), mc32s);

  const now = Date.now();
  batch.update(db.doc('sync_meta/questions'), {
    version: now,
    membershipVersion: now,
    updatedAt: FieldValue.serverTimestamp()
  });

  await batch.commit();
  console.log("Updated mc31, mc31s, mc32, mc32s in Firestore.");
  process.exit(0);
}

run().catch(console.error);
