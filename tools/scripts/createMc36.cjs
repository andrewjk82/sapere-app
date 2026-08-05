const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();

  // 1. mc36
  const subQuestions36 = [
    {
      id: 'girr2020-mc36a',
      question: 'Find the number of strings.',
      type: 'multiple_choice',
      options: [
        { text: '31', imageUrl: '' },
        { text: '30', imageUrl: '' },
        { text: '29', imageUrl: '' },
        { text: '32', imageUrl: '' }
      ],
      answer: '0',
      solutionSteps: [
        {
          explanation: 'The lengths of the strings form an arithmetic series. We know the first term $a = 30$, the last term $l = 48$, and the sum $S_n = 1209$.',
          workingOut: 'a = 30, \\quad l = 48, \\quad S_n = 1209'
        },
        {
          explanation: 'Use the formula for the sum of an arithmetic series: $S_n = \\frac{n}{2}(a + l)$.',
          workingOut: '1209 = \\frac{n}{2}(30 + 48)'
        },
        {
          explanation: 'Solve for $n$.',
          workingOut: '1209 = \\frac{n}{2}(78) \\\\ 1209 = 39n \\\\ n = \\frac{1209}{39} = 31'
        }
      ]
    },
    {
      id: 'girr2020-mc36b',
      question: 'Find the difference in length between adjacent strings.',
      type: 'multiple_choice',
      options: [
        { text: '0.5 cm', imageUrl: '' },
        { text: '0.6 cm', imageUrl: '' },
        { text: '0.8 cm', imageUrl: '' },
        { text: '0.75 cm', imageUrl: '' }
      ],
      answer: '1',
      solutionSteps: [
        {
          explanation: 'Use the formula for the $n$-th term of an arithmetic sequence: $T_n = a + (n - 1)d$.',
          workingOut: 'T_n = a + (n - 1)d'
        },
        {
          explanation: 'Substitute the known values ($T_{31} = 48, a = 30, n = 31$) and solve for the common difference $d$.',
          workingOut: '48 = 30 + (31 - 1)d \\\\ 48 = 30 + 30d \\\\ 18 = 30d \\\\ d = \\frac{18}{30} = \\frac{3}{5} = 0.6 \\text{ cm}'
        }
      ]
    },
    {
      id: 'girr2020-mc36c',
      question: 'There is a large sheet of paper which is $0.1$ mm thick that is cut in half. Then one piece is placed on top of the other. This pile is again cut in half and one pile is placed on top of the other. This process is repeated 40 times. How high is the pile of the sheets?',
      type: 'multiple_choice',
      options: [
        { text: '$1.1 \\times 10^{11}$ mm', imageUrl: '' },
        { text: '$1.1 \\times 10^{10}$ mm', imageUrl: '' },
        { text: '$2.2 \\times 10^{11}$ mm', imageUrl: '' },
        { text: '$2.2 \\times 10^{10}$ mm', imageUrl: '' }
      ],
      answer: '0',
      solutionSteps: [
        {
          explanation: 'The thickness of the pile after each successive cut forms a geometric progression (G.P). After 1 cut, the thickness is $0.2$ mm.',
          workingOut: '0.2, \\, 0.4, \\, 0.8, \\dots'
        },
        {
          explanation: 'Identify the first term $a$ and common ratio $r$ of this G.P.',
          workingOut: 'a = 0.2 \\text{ mm}, \\quad r = 2'
        },
        {
          explanation: 'We need to find the thickness after 40 cuts, which corresponds to the 40th term of this sequence.',
          workingOut: 'T_{40} = a r^{39} = 0.2 \\times 2^{39}'
        },
        {
          explanation: 'Calculate the final thickness.',
          workingOut: 'T_{40} = 1.0995 \\times 10^{11} \\approx 1.1 \\times 10^{11} \\text{ mm}'
        }
      ]
    }
  ];

  const main36 = {
    id: 'girr2020-mc36',
    topicId: 'y12a-exam-girr',
    c: '8A',
    t: 'Arithmetic and geometric sequences',
    source: 'Girraween 2020 Trial Q36',
    type: 'multipart',
    difficulty: 'hard',
    question: 'A simple musical instrument has many strings. The difference between the lengths of adjacent strings is constant, so that the lengths of the strings are the terms of an arithmetic series. The shortest string is $30$ cm long and the longest string is $48$ cm. The sum of the lengths of all the strings is $1209$ cm.',
    subQuestions: subQuestions36,
    updatedAt: FieldValue.serverTimestamp()
  };

  // 2. mc36s
  const subQuestions36s = [
    {
      id: 'girr2020-mc36as',
      question: 'Find the number of strings.',
      type: 'multiple_choice',
      options: [
        { text: '28', imageUrl: '' },
        { text: '30', imageUrl: '' },
        { text: '32', imageUrl: '' },
        { text: '34', imageUrl: '' }
      ],
      answer: '1',
      solutionSteps: [
        {
          explanation: 'The lengths form an arithmetic series with $a = 20$, $l = 50$, and sum $S_n = 1050$.',
          workingOut: 'a = 20, \\quad l = 50, \\quad S_n = 1050'
        },
        {
          explanation: 'Use the formula $S_n = \\frac{n}{2}(a + l)$ to find $n$.',
          workingOut: '1050 = \\frac{n}{2}(20 + 50)'
        },
        {
          explanation: 'Solve for $n$.',
          workingOut: '1050 = \\frac{n}{2}(70) \\\\ 1050 = 35n \\\\ n = \\frac{1050}{35} = 30'
        }
      ]
    },
    {
      id: 'girr2020-mc36bs',
      question: 'Find the difference in length between adjacent strings.',
      type: 'multiple_choice',
      options: [
        { text: '$\\frac{28}{29}$ cm', imageUrl: '' },
        { text: '$\\frac{30}{29}$ cm', imageUrl: '' },
        { text: '$\\frac{32}{29}$ cm', imageUrl: '' },
        { text: '$\\frac{29}{30}$ cm', imageUrl: '' }
      ],
      answer: '1',
      solutionSteps: [
        {
          explanation: 'Use the formula $T_n = a + (n - 1)d$.',
          workingOut: 'T_{30} = 20 + (30 - 1)d'
        },
        {
          explanation: 'Substitute $T_{30} = 50$ and solve for $d$.',
          workingOut: '50 = 20 + 29d \\\\ 30 = 29d \\\\ d = \\frac{30}{29} \\text{ cm}'
        }
      ]
    },
    {
      id: 'girr2020-mc36cs',
      question: 'A sheet of paper $0.2$ mm thick is cut in half and stacked. This cutting and stacking process is repeated 30 times. How high is the final pile?',
      type: 'multiple_choice',
      options: [
        { text: '$2.15 \\times 10^7$ mm', imageUrl: '' },
        { text: '$2.15 \\times 10^8$ mm', imageUrl: '' },
        { text: '$1.07 \\times 10^8$ mm', imageUrl: '' },
        { text: '$4.29 \\times 10^8$ mm', imageUrl: '' }
      ],
      answer: '1',
      solutionSteps: [
        {
          explanation: 'After 1 cut, the thickness doubles to $0.4$ mm. This forms a geometric progression.',
          workingOut: '0.4, \\, 0.8, \\, 1.6, \\dots \\\\ a = 0.4 \\text{ mm}, \\quad r = 2'
        },
        {
          explanation: 'Find the 30th term of this sequence.',
          workingOut: 'T_{30} = a r^{29} = 0.4 \\times 2^{29}'
        },
        {
          explanation: 'Calculate the final thickness.',
          workingOut: 'T_{30} \\approx 2.147 \\times 10^8 \\approx 2.15 \\times 10^8 \\text{ mm}'
        }
      ]
    }
  ];

  const main36s = {
    id: 'girr2020-mc36s',
    topicId: 'y12a-exam-girr',
    c: '8A',
    t: 'Arithmetic and geometric sequences',
    source: 'Girraween 2020 Trial Q36 (Similar)',
    type: 'multipart',
    difficulty: 'hard',
    question: 'A simple musical instrument has many strings. The difference between the lengths of adjacent strings is constant, so that the lengths of the strings are the terms of an arithmetic series. The shortest string is $20$ cm long and the longest string is $50$ cm. The sum of the lengths of all the strings is $1050$ cm.',
    subQuestions: subQuestions36s,
    updatedAt: FieldValue.serverTimestamp()
  };

  batch.set(db.collection('questions').doc('girr2020-mc36'), main36);
  batch.set(db.collection('questions').doc('girr2020-mc36s'), main36s);

  // Note: there might not be a 'girr2020-mc36as' but 'girr2020-mc36a' definitely exists as a placeholder
  const toDelete = ['girr2020-mc36a', 'girr2020-mc36as'];
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
  console.log("Created mc36 and mc36s multi-part questions in Firestore.");
  process.exit(0);
}

run().catch(console.error);
