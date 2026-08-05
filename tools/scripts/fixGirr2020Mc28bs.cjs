const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const steps28b = [
    {
      explanation: 'From part (a), we know the distance from the further point B to the base is $BY = h \\cot 12^\\circ$.',
      workingOut: 'BY = h \\cot 12^\\circ'
    },
    {
      explanation: 'Similarly, for the closer point A with an angle of elevation of $15^\\circ$, the distance to the base is $AY = h \\cot 15^\\circ$.',
      workingOut: 'AY = h \\cot 15^\\circ'
    },
    {
      explanation: 'Since A, B, and Y are collinear and on the same side, the distance $AB$ is the difference between $BY$ and $AY$.',
      workingOut: 'AB = BY - AY'
    },
    {
      explanation: 'Substitute the expressions for $BY$ and $AY$ and factor out $h$.',
      workingOut: '\\begin{aligned} 500 &= h \\cot 12^\\circ - h \\cot 15^\\circ \\\\ 500 &= h(\\cot 12^\\circ - \\cot 15^\\circ) \\end{aligned}'
    },
    {
      explanation: 'Calculate the value of $h$.',
      workingOut: '\\begin{aligned} h &= \\frac{500}{\\cot 12^\\circ - \\cot 15^\\circ} \\\\ h &\\approx \\frac{500}{4.7046 - 3.7321} \\\\ h &\\approx \\frac{500}{0.9725} \\approx 514.1 \\end{aligned}'
    }
  ];

  const steps28as = [
    {
      explanation: 'Let the height of the tower be $h$ and its base be $Y$. From the closer point A, we form a right-angled triangle. Using trigonometry, the distance $AY = h \\cot \\alpha$.',
      workingOut: '\\tan \\alpha = \\frac{h}{AY} \\implies AY = \\frac{h}{\\tan \\alpha} = h \\cot \\alpha'
    },
    {
      explanation: 'Similarly, from the further point B, we have a right-angled triangle where the distance $BY = h \\cot \\beta$.',
      workingOut: '\\tan \\beta = \\frac{h}{BY} \\implies BY = \\frac{h}{\\tan \\beta} = h \\cot \\beta'
    },
    {
      explanation: 'Since they are on the same side of the tower, the distance between the two observers $d$ is the difference $BY - AY$.',
      workingOut: 'd = BY - AY'
    },
    {
      explanation: 'Substitute the expressions for $BY$ and $AY$ into the equation for $d$.',
      workingOut: 'd = h \\cot \\beta - h \\cot \\alpha'
    },
    {
      explanation: 'Factor out $h$ and rearrange to make $h$ the subject of the formula.',
      workingOut: '\\begin{aligned} d &= h(\\cot \\beta - \\cot \\alpha) \\\\ h &= \\frac{d}{\\cot \\beta - \\cot \\alpha} \\end{aligned}'
    }
  ];

  const steps28bs = [
    {
      explanation: 'Identify the given values from the question to substitute into the formula derived in part (a).',
      workingOut: 'd = 100, \\quad \\alpha = 20^\\circ, \\quad \\beta = 15^\\circ'
    },
    {
      explanation: 'Substitute these values into the formula $h = \\frac{d}{\\cot \\beta - \\cot \\alpha}$.',
      workingOut: 'h = \\frac{100}{\\cot 15^\\circ - \\cot 20^\\circ}'
    },
    {
      explanation: 'Calculate the values of the cotangents.',
      workingOut: '\\cot 15^\\circ \\approx 3.7321, \\quad \\cot 20^\\circ \\approx 2.7475'
    },
    {
      explanation: 'Subtract the cotangent values.',
      workingOut: '\\cot 15^\\circ - \\cot 20^\\circ \\approx 3.7321 - 2.7475 = 0.9846'
    },
    {
      explanation: 'Divide the distance $d$ by the difference to find $h$.',
      workingOut: 'h = \\frac{100}{0.9846} \\approx 101.56 \\approx 102 \\text{ m}'
    }
  ];

  await db.collection('questions').doc('girr2020-mc28b').update({
    q: 'In the same setup as part (a), another observer is at point $A$ such that $A, B, Y$ are collinear and on the same side of the tower, with $A$ closer to the tower. The angle of elevation from $A$ to $Z$ is $15^\\circ$. If the distance $AB = 500$ m, find the value of $h$.',
    question: 'In the same setup as part (a), another observer is at point $A$ such that $A, B, Y$ are collinear and on the same side of the tower, with $A$ closer to the tower. The angle of elevation from $A$ to $Z$ is $15^\\circ$. If the distance $AB = 500$ m, find the value of $h$.',
    opts: [
      '$h \\approx 514$ m',
      '$h \\approx 400$ m',
      '$h \\approx 650$ m',
      '$h \\approx 800$ m'
    ],
    a: '0',
    solutionSteps: steps28b,
    updatedAt: FieldValue.serverTimestamp()
  });

  await db.collection('questions').doc('girr2020-mc28as').update({
    q: 'Two observers at points $A$ and $B$ are on the same side of a tower of height $h$. They are in a straight line with the base of the tower. The distance between them is $d$. The angle of elevation from $A$ (closer) is $\\alpha$ and from $B$ (further) is $\\beta$. Show that $h = \\frac{d}{\\cot \\beta - \\cot \\alpha}$. **(Teacher-graded proof)**',
    question: 'Two observers at points $A$ and $B$ are on the same side of a tower of height $h$. They are in a straight line with the base of the tower. The distance between them is $d$. The angle of elevation from $A$ (closer) is $\\alpha$ and from $B$ (further) is $\\beta$. Show that $h = \\frac{d}{\\cot \\beta - \\cot \\alpha}$. **(Teacher-graded proof)**',
    solutionSteps: steps28as,
    updatedAt: FieldValue.serverTimestamp()
  });

  await db.collection('questions').doc('girr2020-mc28bs').update({
    q: 'Using the formula from part (a), if $d = 100$ m, $\\alpha = 20^\\circ$, $\\beta = 15^\\circ$, find $h$.',
    question: 'Using the formula from part (a), if $d = 100$ m, $\\alpha = 20^\\circ$, $\\beta = 15^\\circ$, find $h$.',
    opts: [
      '$h \\approx 102$ m',
      '$h \\approx 300$ m',
      '$h \\approx 480$ m',
      '$h \\approx 600$ m'
    ],
    a: '0',
    solutionSteps: steps28bs,
    updatedAt: FieldValue.serverTimestamp()
  });

  const now = Date.now();
  await db.doc('sync_meta/questions').update({
    version: now,
    membershipVersion: now,
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log("Updated 28b, 28as, 28bs.");
  process.exit(0);
}

run().catch(console.error);
