import admin from 'firebase-admin';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
if (!admin.apps.length) admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
const db = admin.firestore();

const fixes = {
  '7BGQVE7o8pj3MmMx83gS': { // Multiples of 6 between 10 and 40
    question: 'List the elements {multiples of 6 between 10 and 40} in ascending order. Example: 1,2,3 (without spaces)',
    options: [
      { text: '{12,18,24,30,36}', imageUrl: '' },
      { text: '{18,24,30,36}', imageUrl: '' },
      { text: '{18,24,30}', imageUrl: '' },
      { text: '{12,18,24,30}', imageUrl: '' }
    ],
    answer: '0',
    solution: 'The multiples of 6 between 10 and 40 are 12, 18, 24, 30, 36.',
    solutionSteps: [
      { explanation: 'Identify the multiples of 6.', workingOut: '6, 12, 18, 24, 30, 36, 42...', graphData: null },
      { explanation: 'Select the multiples that are strictly between 10 and 40.', workingOut: '12, 18, 24, 30, 36', graphData: null },
      { explanation: 'Format as a set without spaces.', workingOut: '{12,18,24,30,36}', graphData: null }
    ]
  },
  '8LZ8gHkGd3moFrEQCZGN': { // Odd whole numbers between 0 and 12
    question: 'List the elements of {odd whole numbers between 0 and 12} in ascending order. Example: 1,2,3 (without spaces)',
    options: [
      { text: '{1,3,5,7,9,11}', imageUrl: '' },
      { text: '{1,2,3,5,7,9,11}', imageUrl: '' },
      { text: '{3,5,7,9,11}', imageUrl: '' },
      { text: '{1,3,5,7,9}', imageUrl: '' }
    ],
    answer: '0',
    solution: 'The odd whole numbers between 0 and 12 are 1, 3, 5, 7, 9, 11.',
    solutionSteps: [
      { explanation: 'Identify all whole numbers between 0 and 12.', workingOut: '1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11', graphData: null },
      { explanation: 'Select only the odd numbers.', workingOut: '1, 3, 5, 7, 9, 11', graphData: null },
      { explanation: 'Format as a set without spaces.', workingOut: '{1,3,5,7,9,11}', graphData: null }
    ]
  },
  'AzFRPzaEQQsRpx6BWd3M': { // Perfect squares less than 50
    question: 'List the elements {perfect squares less than 50} in ascending order. Example: 1,2,3 (without spaces)',
    options: [
      { text: '{1,4,9,16,25,36,49}', imageUrl: '' },
      { text: '{0,1,4,9,16,25,36,49}', imageUrl: '' },
      { text: '{4,9,16,25,36,49}', imageUrl: '' },
      { text: '{1,4,9,16,25,36}', imageUrl: '' }
    ],
    answer: '0', // 1,4,9,16,25,36,49
    solution: 'The perfect squares less than 50 are 1, 4, 9, 16, 25, 36, and 49.',
    solutionSteps: [
      { explanation: 'Identify the perfect squares.', workingOut: '1, 4, 9, 16, 25, 36, 49, 64...', graphData: null },
      { explanation: 'Select the perfect squares that are strictly less than 50.', workingOut: '1, 4, 9, 16, 25, 36, 49', graphData: null },
      { explanation: 'Format as a set without spaces.', workingOut: '{1,4,9,16,25,36,49}', graphData: null }
    ]
  },
  'XDSBqLiQC431NkIxJFW2': { // Multiples of 7 between 10 and 40
    question: 'List the elements {multiples of 7 between 10 and 40} in ascending order. Example: 1,2,3 (without spaces)',
    options: [
      { text: '{14,21,28,35}', imageUrl: '' },
      { text: '{7,14,21,28,35}', imageUrl: '' },
      { text: '{14,21,28,35,42}', imageUrl: '' },
      { text: '{21,28,35}', imageUrl: '' }
    ],
    answer: '0',
    solution: 'The multiples of 7 between 10 and 40 are 14, 21, 28, and 35.',
    solutionSteps: [
      { explanation: 'Identify the multiples of 7.', workingOut: '7, 14, 21, 28, 35, 42...', graphData: null },
      { explanation: 'Select the multiples that are strictly between 10 and 40.', workingOut: '14, 21, 28, 35', graphData: null },
      { explanation: 'Format as a set without spaces.', workingOut: '{14,21,28,35}', graphData: null }
    ]
  },
  'i9KgZsTNFMWwSsfkU1qR': { // Two digit numbers ending with 3
    question: 'List the elements of {two digit numbers ending with 3} in ascending order. Example: 13,23,33 (without spaces)',
    options: [
      { text: '{13,23,33,43,53,63,73,83,93}', imageUrl: '' },
      { text: '{03,13,23,33,43,53,63,73,83,93}', imageUrl: '' },
      { text: '{13,23,33,43,53,63,73,83}', imageUrl: '' },
      { text: '{3,13,23,33,43,53,63,73,83,93}', imageUrl: '' }
    ],
    answer: '0',
    solution: 'The two-digit numbers ending with 3 are 13, 23, 33, 43, 53, 63, 73, 83, and 93.',
    solutionSteps: [
      { explanation: 'Identify all numbers ending with 3.', workingOut: '3, 13, 23, 33...', graphData: null },
      { explanation: 'Select only the two-digit numbers.', workingOut: '13, 23, 33, 43, 53, 63, 73, 83, 93', graphData: null },
      { explanation: 'Format as a set without spaces.', workingOut: '{13,23,33,43,53,63,73,83,93}', graphData: null }
    ]
  },
  'mbHEpWsILBdaUorEyUiB': { // Prime numbers less than 30
    question: 'List the elements {prime numbers less than 30} in ascending order. Example: 2,3,5 (without spaces)',
    options: [
      { text: '{2,3,5,7,11,13,17,19,23,29}', imageUrl: '' },
      { text: '{2,3,7,11,13,17,19,23,29}', imageUrl: '' },
      { text: '{1,2,3,5,7,11,13,17,19,23,29}', imageUrl: '' },
      { text: '{3,5,7,11,13,17,19,23,29}', imageUrl: '' }
    ],
    answer: '0',
    solution: 'The prime numbers less than 30 are 2, 3, 5, 7, 11, 13, 17, 19, 23, and 29.',
    solutionSteps: [
      { explanation: 'Identify the prime numbers.', workingOut: '2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31...', graphData: null },
      { explanation: 'Select the prime numbers that are strictly less than 30.', workingOut: '2, 3, 5, 7, 11, 13, 17, 19, 23, 29', graphData: null },
      { explanation: 'Format as a set without spaces.', workingOut: '{2,3,5,7,11,13,17,19,23,29}', graphData: null }
    ]
  }
};

const run = async () => {
  console.log('Updating 6 broken questions in Firestore...');
  const batch = db.batch();
  
  for (const [id, data] of Object.entries(fixes)) {
    const docRef = db.collection('questions').doc(id);
    batch.update(docRef, data);
    console.log(`Prepared update for ${id}`);
  }
  
  await batch.commit();
  console.log('Successfully committed updates to Firestore!');
  process.exit(0);
};

run();
