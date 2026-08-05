const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const steps25bs = [
    {
      explanation: 'To solve the absolute value equation, break it down into two cases.',
      workingOut: '|2x + 3| = -x + 5'
    },
    {
      explanation: 'Case 1: The expression inside the absolute value is positive or zero.',
      workingOut: '2x + 3 = -x + 5 \\implies 3x = 2 \\implies x = \\frac{2}{3}'
    },
    {
      explanation: 'Case 2: The expression inside the absolute value is negative.',
      workingOut: '-(2x + 3) = -x + 5 \\implies -2x - 3 = -x + 5 \\implies -x = 8 \\implies x = -8'
    },
    {
      explanation: 'Check both solutions in the original equation to ensure they are valid.',
      workingOut: '\\text{For } x = \\frac{2}{3}: |2(\\frac{2}{3}) + 3| = \\frac{13}{3} \\text{ and } -(\\frac{2}{3}) + 5 = \\frac{13}{3} \\text{ (Valid)}\\\\ \\text{For } x = -8: |2(-8) + 3| = |-13| = 13 \\text{ and } -(-8) + 5 = 13 \\text{ (Valid)}'
    },
    {
      explanation: 'Both solutions are valid.',
      workingOut: 'x = \\frac{2}{3} \\text{ and } x = -8'
    }
  ];

  const steps26as = [
    {
      explanation: 'Identify the two functions to use the product rule: let $u = x^2$ and $v = e^{2x}$.',
      workingOut: 'u = x^2, \\quad v = e^{2x}'
    },
    {
      explanation: 'Differentiate each part using standard rules. Note that differentiating $e^{2x}$ requires the chain rule.',
      workingOut: 'u\' = 2x, \\quad v\' = 2e^{2x}'
    },
    {
      explanation: 'Apply the product rule: $y\' = u\'v + uv\'$.',
      workingOut: 'y\' = (2x)(e^{2x}) + (x^2)(2e^{2x})'
    },
    {
      explanation: 'Factor out the common term $e^{2x}$ to simplify the expression.',
      workingOut: 'y\' = e^{2x}(2x + 2x^2)'
    }
  ];

  const opts26as = [
    '$y\' = 2xe^{2x}$',
    '$y\' = e^{2x}(x^2 + 2x)$',
    '$y\' = e^{2x}(2x + 2x^2)$',
    '$y\' = e^{2x}(2x^2 + 1)$'
  ];

  const steps26bs = [
    {
      explanation: 'From part (a), we found that the derivative of $x^2 e^{2x}$ is $e^{2x}(2x + 2x^2)$. Notice that the integrand is $e^{2x}(2 + 4x)$, which is NOT exactly the same.',
      workingOut: '\\frac{d}{dx}[x^2 e^{2x}] = e^{2x}(2x + 2x^2)'
    },
    {
      explanation: 'Let\'s find the antiderivative of $e^{2x}(2 + 4x)$ by recognizing the product rule on $2x e^{2x}$. Let $y = 2x e^{2x}$.',
      workingOut: 'y = 2x e^{2x}'
    },
    {
      explanation: 'Differentiate $y = 2x e^{2x}$: $y\' = 2(e^{2x}) + 2x(2e^{2x}) = e^{2x}(2 + 4x)$. This perfectly matches our integrand.',
      workingOut: '\\frac{d}{dx}[2x e^{2x}] = e^{2x}(2 + 4x)'
    },
    {
      explanation: 'Therefore, the antiderivative is $2x e^{2x}$. Evaluate the definite integral from $0$ to $1$.',
      workingOut: '\\int_0^1 e^{2x}(2 + 4x) dx = [2x e^{2x}]_0^1'
    },
    {
      explanation: 'Substitute the limits: $(2(1)e^2) - (2(0)e^0)$.',
      workingOut: '= 2e^2 - 0 = 2e^2'
    }
  ];

  const opts26bs = [
    '$e^2 - 1$',
    '$2e^2$',
    '$2e^2 - 2$',
    '$4(e^2 - 1)$'
  ];

  await db.collection('questions').doc('girr2020-mc25bs').update({
    solutionSteps: steps25bs,
    updatedAt: FieldValue.serverTimestamp()
  });

  await db.collection('questions').doc('girr2020-mc26as').update({
    solutionSteps: steps26as,
    opts: opts26as,
    updatedAt: FieldValue.serverTimestamp()
  });

  await db.collection('questions').doc('girr2020-mc26bs').update({
    solutionSteps: steps26bs,
    opts: opts26bs,
    a: '1', // 2e^2
    updatedAt: FieldValue.serverTimestamp()
  });

  const now = Date.now();
  await db.doc('sync_meta/questions').update({
    version: now,
    membershipVersion: now,
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log("Updated 25bs, 26as, 26bs.");
  process.exit(0);
}

run().catch(console.error);
