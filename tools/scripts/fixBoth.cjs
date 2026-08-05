const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const sa = require('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json');
initializeApp({ credential: cert(sa) });
const db = getFirestore();

async function run() {
  // 1. Restore subquestions for asc2020-q16
  await db.collection('questions').doc('asc2020-q16').update({
    type: 'sub_question',
    subQuestions: [
      {
        id: 'asc2020-q16a',
        label: '(a)',
        question: 'Write an equation for Ali\'s total cost \\(C\\) in terms of the number of dolls \\(x\\) she manufactures.',
        type: 'short_answer',
        answer: 'C = 60 + 16x',
        solution: '\\(C = 60 + 16x\\)',
        solutionSteps: [
          {
            explanation: 'Identify the fixed cost and variable cost.',
            workingOut: '<div style="text-align: left;"><p>Fixed cost (equipment) = \\($60\\)</p><p>Variable cost per doll = \\($16\\)</p><p>So the cost equation is: \\(C = 60 + 16x\\)</p></div>',
            graphData: null
          }
        ],
        hint: 'Cost = fixed cost + (cost per doll × number of dolls)',
        requiresManualGrading: false
      },
      {
        id: 'asc2020-q16b',
        label: '(b)',
        question: 'Write an equation for Ali\'s total income \\(I\\) in terms of the number of dolls \\(x\\) she sells.',
        type: 'short_answer',
        answer: 'I = 20x',
        solution: '\\(I = 20x\\)',
        solutionSteps: [
          {
            explanation: 'Identify the selling price per doll.',
            workingOut: '<div style="text-align: left;"><p>Selling price per doll = \\($20\\)</p><p>So the income equation is: \\(I = 20x\\)</p></div>',
            graphData: null
          }
        ],
        hint: 'Income = selling price × number of dolls sold',
        requiresManualGrading: false
      },
      {
        id: 'asc2020-q16c',
        label: '(c)',
        question: 'How many dolls does Ali need to sell to break even?',
        type: 'short_answer',
        answer: '15',
        solution: '\\(x = 15\\) dolls',
        solutionSteps: [
          {
            explanation: 'Set cost equal to income and solve.',
            workingOut: '<div style="text-align: left;"><p>At break-even, \\(C = I\\):</p><p>\\(60 + 16x = 20x\\)</p><p>\\(60 = 4x\\)</p><p>\\(x = 15\\)</p><p>Ali needs to sell <strong>15 dolls</strong> to break even.</p></div>',
            graphData: null
          }
        ],
        hint: 'Set C = I and solve for x.',
        requiresManualGrading: false
      }
    ],
    answer: 'See parts (a), (b) and (c)'
  });
  console.log('Fixed asc2020-q16: restored 3 subquestions');

  // 2. Convert a68a344d... to multiple choice
  await db.collection('questions').doc('a68a344d83f2ed38d93e5170c749407e').update({
    type: 'multiple_choice',
    requiresManualGrading: false,
    options: [
      { text: '\\(x = \\frac{1}{3},\\ y = 2\\)', imageUrl: '' },
      { text: '\\(x = \\frac{1}{3},\\ y = -2\\)', imageUrl: '' },
      { text: '\\(x = 3,\\ y = -14\\)', imageUrl: '' },
      { text: '\\(x = -\\frac{1}{3},\\ y = 6\\)', imageUrl: '' }
    ],
    answer: '0'
  });
  console.log('Fixed a68a344d...: converted to multiple choice');
}
run().catch(console.error);
