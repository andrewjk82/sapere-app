const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();

  // 1. mc33
  const mc33 = {
    q: 'A piece of wire $28$ m long is cut into two pieces. One piece is bent into a square and the other is bent into a circle. What should be the lengths of the two pieces of wire to minimize the combined area of the square and the circle?',
    question: 'A piece of wire $28$ m long is cut into two pieces. One piece is bent into a square and the other is bent into a circle. What should be the lengths of the two pieces of wire to minimize the combined area of the square and the circle?',
    options: [
      { text: 'Square: 10m, Circle: 18m', imageUrl: '' },
      { text: 'Square: $\\frac{112}{\\pi+4}$ m, Circle: $28-\\frac{112}{\\pi+4}$ m', imageUrl: '' },
      { text: 'Square: 8m, Circle: 20m', imageUrl: '' },
      { text: 'Square: 12m, Circle: 16m', imageUrl: '' }
    ],
    answer: '1',
    solutionSteps: [
      {
        explanation: 'Let $x$ be the length of wire used for the square, so $28 - x$ is the length used for the circle.',
        workingOut: '\\text{Wire for square} = x \\\\ \\text{Wire for circle} = 28 - x'
      },
      {
        explanation: 'The perimeter of the square is $x$, so its side length is $\\frac{x}{4}$. The area of the square is therefore $(\\frac{x}{4})^2$.',
        workingOut: 'A_{\\text{square}} = \\left(\\frac{x}{4}\\right)^2 = \\frac{x^2}{16}'
      },
      {
        explanation: 'The circumference of the circle is $28 - x$, so $2\\pi r = 28 - x$, giving $r = \\frac{28-x}{2\\pi}$. The area of the circle is $\\pi r^2$.',
        workingOut: 'A_{\\text{circle}} = \\pi \\left(\\frac{28-x}{2\\pi}\\right)^2 = \\frac{(28-x)^2}{4\\pi}'
      },
      {
        explanation: 'The total area $A$ is the sum of the two areas. To find the minimum area, we differentiate $A$ with respect to $x$ and set it to zero.',
        workingOut: 'A(x) = \\frac{x^2}{16} + \\frac{(28-x)^2}{4\\pi} \\\\ A\'(x) = \\frac{2x}{16} - \\frac{2(28-x)}{4\\pi} = \\frac{x}{8} - \\frac{28-x}{2\\pi}'
      },
      {
        explanation: 'Solve $A\'(x) = 0$ for $x$.',
        workingOut: '\\frac{x}{8} = \\frac{28-x}{2\\pi} \\\\ 2\\pi x = 8(28-x) \\\\ 2\\pi x = 224 - 8x \\\\ x(2\\pi + 8) = 224 \\\\ x = \\frac{224}{2\\pi + 8} = \\frac{112}{\\pi + 4}'
      },
      {
        explanation: 'Thus, the wire used for the square is $\\frac{112}{\\pi + 4}$ m, and the remainder is for the circle.',
        workingOut: '\\text{Square: } \\frac{112}{\\pi + 4} \\text{ m} \\\\ \\text{Circle: } 28 - \\frac{112}{\\pi + 4} \\text{ m}'
      }
    ],
    updatedAt: FieldValue.serverTimestamp()
  };

  // 2. mc33s
  const mc33s = {
    q: 'A $40$ m fence is used to enclose a rectangular garden. What should be the length and width of the garden to maximize its area?',
    question: 'A $40$ m fence is used to enclose a rectangular garden. What should be the length and width of the garden to maximize its area?',
    options: [
      { text: 'Length = 12m, Width = 8m', imageUrl: '' },
      { text: 'Length = 10m, Width = 10m', imageUrl: '' },
      { text: 'Length = 14m, Width = 6m', imageUrl: '' },
      { text: 'Length = 15m, Width = 5m', imageUrl: '' }
    ],
    answer: '1',
    solutionSteps: [
      {
        explanation: 'Let $L$ and $W$ be the length and width of the rectangle. The perimeter is $40$ m.',
        workingOut: '2L + 2W = 40 \\implies L + W = 20 \\implies W = 20 - L'
      },
      {
        explanation: 'Write the area $A$ as a function of $L$.',
        workingOut: 'A = L \\times W = L(20 - L) = 20L - L^2'
      },
      {
        explanation: 'To find the maximum area, take the derivative of $A$ with respect to $L$ and set it to zero.',
        workingOut: '\\frac{dA}{dL} = 20 - 2L = 0'
      },
      {
        explanation: 'Solve for $L$ and find the corresponding $W$.',
        workingOut: '2L = 20 \\implies L = 10 \\text{ m} \\\\ W = 20 - 10 = 10 \\text{ m}'
      }
    ],
    updatedAt: FieldValue.serverTimestamp()
  };

  // 3. mc34 multipart consolidation
  const subQuestions34 = [
    {
      id: 'girr2020-mc34a',
      question: 'When does the car stop?',
      type: 'multiple_choice',
      options: [
        {text: '$t = 2$ s', imageUrl: ''},
        {text: '$t = 3$ s', imageUrl: ''},
        {text: '$t = 4$ s', imageUrl: ''},
        {text: '$t = 6$ s', imageUrl: ''}
      ],
      answer: '2',
      solutionSteps: [
        {
          explanation: 'The car stops when its velocity is zero. First, find the velocity function by differentiating the position function.',
          workingOut: 'x = t^2\\left(2 - \\frac{t}{3}\\right) = 2t^2 - \\frac{t^3}{3} \\\\ v = \\frac{dx}{dt} = 4t - t^2'
        },
        {
          explanation: 'Set the velocity to zero and solve for $t$.',
          workingOut: '4t - t^2 = 0 \\\\ t(4 - t) = 0 \\\\ t = 0 \\text{ or } t = 4'
        },
        {
          explanation: 'Since $t=0$ is the start, the car stops at $t=4$ seconds.',
          workingOut: 't = 4'
        }
      ]
    },
    {
      id: 'girr2020-mc34b',
      question: 'Find the distance from P to Q.',
      type: 'multiple_choice',
      options: [
        {text: '$16$ m', imageUrl: ''},
        {text: '$\\frac{25}{2}$ m', imageUrl: ''},
        {text: '$\\frac{32}{3}$ m', imageUrl: ''},
        {text: '$18$ m', imageUrl: ''}
      ],
      answer: '2',
      solutionSteps: [
        {
          explanation: 'The car travels in one direction from $t=0$ to $t=4$, so the distance is simply the position at $t=4$ minus the position at $t=0$.',
          workingOut: '\\text{Distance} = x(4) - x(0)'
        },
        {
          explanation: 'Calculate the position at $t=4$.',
          workingOut: 'x(4) = 4^2 \\left(2 - \\frac{4}{3}\\right) = 16 \\left(\\frac{6}{3} - \\frac{4}{3}\\right) = 16 \\left(\\frac{2}{3}\\right) = \\frac{32}{3}'
        },
        {
          explanation: 'Since $x(0) = 0$, the distance is $\\frac{32}{3}$ metres.',
          workingOut: '\\text{Distance} = \\frac{32}{3} \\text{ m}'
        }
      ]
    }
  ];

  const main34 = {
    id: 'girr2020-mc34',
    topicId: 'y12a-exam-girr',
    c: '7B',
    t: 'Kinematics',
    source: 'Girraween 2020 Trial Q34',
    type: 'multipart',
    difficulty: 'medium',
    question: 'A car is initially at a point P and travels in a straight line. Its position $x$ metres from P at time $t$ seconds is given by $x = t^2(2 - \\frac{t}{3})$. It comes to rest at a point Q.',
    subQuestions: subQuestions34,
    updatedAt: FieldValue.serverTimestamp()
  };

  // 4. mc34s multipart consolidation
  const subQuestions34s = [
    {
      id: 'girr2020-mc34as',
      question: 'When does the car stop?',
      type: 'multiple_choice',
      options: [
        {text: '$t = 1$ s', imageUrl: ''},
        {text: '$t = 2$ s', imageUrl: ''},
        {text: '$t = 3$ s', imageUrl: ''},
        {text: '$t = 4$ s', imageUrl: ''}
      ],
      answer: '1',
      solutionSteps: [
        {
          explanation: 'The car stops when its velocity is zero. First, find the velocity function by differentiating the position function.',
          workingOut: 'x = t^2(3 - t) = 3t^2 - t^3 \\\\ v = \\frac{dx}{dt} = 6t - 3t^2'
        },
        {
          explanation: 'Set the velocity to zero and solve for $t$.',
          workingOut: '6t - 3t^2 = 0 \\\\ 3t(2 - t) = 0 \\\\ t = 0 \\text{ or } t = 2'
        },
        {
          explanation: 'Since $t=0$ is the starting time, the car stops at $t=2$ seconds.',
          workingOut: 't = 2'
        }
      ]
    },
    {
      id: 'girr2020-mc34bs',
      question: 'Find the distance from A to B.',
      type: 'multiple_choice',
      options: [
        {text: '$2$ m', imageUrl: ''},
        {text: '$3$ m', imageUrl: ''},
        {text: '$4$ m', imageUrl: ''},
        {text: '$5$ m', imageUrl: ''}
      ],
      answer: '2',
      solutionSteps: [
        {
          explanation: 'Since the car moves in a single direction from $t=0$ to $t=2$, the total distance traveled is the position at $t=2$ minus the position at $t=0$.',
          workingOut: '\\text{Distance} = x(2) - x(0)'
        },
        {
          explanation: 'Calculate the position at $t=2$.',
          workingOut: 'x(2) = 2^2(3 - 2) = 4(1) = 4'
        },
        {
          explanation: 'Since $x(0) = 0$, the distance from A to B is $4$ metres.',
          workingOut: '\\text{Distance} = 4 \\text{ m}'
        }
      ]
    }
  ];

  const main34s = {
    id: 'girr2020-mc34s',
    topicId: 'y12a-exam-girr',
    c: '7B',
    t: 'Kinematics',
    source: 'Girraween 2020 Trial Q34 (Similar)',
    type: 'multipart',
    difficulty: 'medium',
    question: 'A car is initially at point A and travels in a straight line. Its position $x$ metres from A at time $t$ seconds is given by $x = t^2(3 - t)$. It comes to rest at a point B.',
    subQuestions: subQuestions34s,
    updatedAt: FieldValue.serverTimestamp()
  };

  batch.update(db.collection('questions').doc('girr2020-mc33'), mc33);
  batch.update(db.collection('questions').doc('girr2020-mc33s'), mc33s);
  
  batch.set(db.collection('questions').doc('girr2020-mc34'), main34);
  batch.set(db.collection('questions').doc('girr2020-mc34s'), main34s);

  // Delete individual 34a,b documents
  const toDelete = ['girr2020-mc34a', 'girr2020-mc34b', 'girr2020-mc34as', 'girr2020-mc34bs'];
  for (let id of toDelete) {
    batch.delete(db.collection('questions').doc(id));
  }

  const now = Date.now();
  batch.update(db.doc('sync_meta/questions'), {
    version: now,
    membershipVersion: now,
    updatedAt: FieldValue.serverTimestamp()
  });

  await batch.commit();
  console.log("Updated mc33 and consolidated mc34 in Firestore.");
  process.exit(0);
}

run().catch(console.error);
