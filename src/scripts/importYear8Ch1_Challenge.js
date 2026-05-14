import admin from 'firebase-admin';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}
const db = admin.firestore();

const challengeQuestions = [
  // 1. Towns Distance
  {
    chapterId: 'y8-1',
    chapterTitle: 'Chapter 1: Whole Numbers',
    topicId: 'y8-1a',
    topicCode: '1A',
    topicTitle: 'Addition and subtraction of whole numbers',
    year: 'Year 8',
    type: 'multiple_choice',
    difficulty: 'hard',
    isManual: true,
    title: 'Challenge: Town Distances',
    question: 'The towns Alpha, Beta, Gamma, Delta and Epsilon are located on a straight highway in that order. The distance from Alpha to Epsilon is $30$ km. The distance from Alpha to Delta is $22$ km. The distance from Beta to Epsilon is $16$ km. Gamma is halfway between Beta and Delta. What is the distance from Beta to Gamma?',
    options: ['4 km', '3 km', '5 km', '8 km'],
    answer: 0,
    solution: 'Let the positions be on a number line where Alpha is at $0$.\n1. Alpha $= 0$, Epsilon $= 30$.\n2. Alpha to Delta $= 22 \\Rightarrow$ Delta is at $22$.\n3. Beta to Epsilon $= 16 \\Rightarrow$ Beta is at $30 - 16 = 14$.\n4. Distance Beta to Delta $= 22 - 14 = 8$ km.\n5. Gamma is halfway between Beta and Delta: $8 \\div 2 = 4$ km.\n\nResult: **4 km**'
  },
  // 2. Digits 1-9 once
  {
    chapterId: 'y8-1',
    chapterTitle: 'Chapter 1: Whole Numbers',
    topicId: 'y8-1a',
    topicCode: '1A',
    topicTitle: 'Addition and subtraction of whole numbers',
    year: 'Year 8',
    type: 'multiple_choice',
    difficulty: 'hard',
    isManual: true,
    title: 'Challenge: Digit Puzzle',
    question: 'Using each of the digits 1 to 9 only once, identify a 5-digit number and a 4-digit number that add up to $99,999$. Which of these could be the 4-digit number?',
    options: ['8,642', '7,654', '9,135', '5,432'],
    answer: 0,
    solution: 'We need to use digits $\{1, 2, 3, 4, 5, 6, 7, 8, 9\}$ exactly once.\nTry the combination: $91,357 + 8,642 = 99,999$.\nCheck digits: $9, 1, 3, 5, 7$ (from 1st number) and $8, 6, 4, 2$ (from 2nd number).\nTotal digits used: $\{1, 2, 3, 4, 5, 6, 7, 8, 9\}$. All unique!\n\nResult: **8,642**'
  },
  // 3. Birds and Beasts
  {
    chapterId: 'y8-1',
    chapterTitle: 'Chapter 1: Whole Numbers',
    topicId: 'y8-1a',
    topicCode: '1A',
    topicTitle: 'Addition and subtraction of whole numbers',
    year: 'Year 8',
    type: 'multiple_choice',
    difficulty: 'hard',
    isManual: true,
    title: 'Challenge: Birds and Beasts',
    question: 'A family has a collection of birds and beasts. They have $40$ heads and $110$ feet in total. How many birds and how many beasts do they have? (Note: Birds have 2 feet, beasts have 4 feet).',
    options: ['25 birds and 15 beasts', '20 birds and 20 beasts', '30 birds and 10 beasts', '15 birds and 25 beasts'],
    answer: 0,
    solution: 'Let $x$ be the number of birds and $y$ be the number of beasts.\n1. Heads: $x + y = 40$\n2. Feet: $2x + 4y = 110$\nDivide the second equation by 2: $x + 2y = 55$.\n3. Subtract the first from this: $(x + 2y) - (x + y) = 55 - 40 \\Rightarrow y = 15$.\n4. Find $x$: $x + 15 = 40 \\Rightarrow x = 25$.\n\nResult: **25 birds and 15 beasts**'
  },
  // 4. Number Trick
  {
    chapterId: 'y8-1',
    chapterTitle: 'Chapter 1: Whole Numbers',
    topicId: 'y8-1a',
    topicCode: '1A',
    topicTitle: 'Addition and subtraction of whole numbers',
    year: 'Year 8',
    type: 'multiple_choice',
    difficulty: 'hard',
    isManual: true,
    title: 'Challenge: Number Magic',
    question: 'Pick a number with no zeroes and unique digits. Perform these steps:\n1. Double it and add 4.\n2. Multiply by 5 and add 12.\n3. Multiply by 10 and subtract 320.\n4. Cross out the zeroes.\nIf you start with $123$, what is the final result?',
    options: ['123', '246', '12300', '12'],
    answer: 0,
    solution: 'Let the number be $n$.\n1. $2n + 4$\n2. $(2n + 4) \\times 5 + 12 = 10n + 20 + 12 = 10n + 32$\n3. $(10n + 32) \\times 10 - 320 = 100n + 320 - 320 = 100n$\n4. Crossing out zeroes in $100n$ (where $n$ has no zeroes) always leaves $n$.\nFor $123$, result is $12300$, crossing out zeroes gives $123$.\n\nResult: **123**'
  },
  // 5a. Divisibility
  {
    chapterId: 'y8-1',
    chapterTitle: 'Chapter 1: Whole Numbers',
    topicId: 'y8-1a',
    topicCode: '1A',
    topicTitle: 'Addition and subtraction of whole numbers',
    year: 'Year 8',
    type: 'multiple_choice',
    difficulty: 'hard',
    isManual: true,
    title: 'Challenge: Divisibility',
    question: 'What is the smallest number that must be subtracted from $7,853$ so that the result is exactly divisible by $13$?',
    options: ['1', '2', '3', '12'],
    answer: 0,
    solution: 'Divide $7,853$ by $13$:\n$78 \\div 13 = 6$\n$53 \\div 13 = 4$ with remainder $1$.\nSince the remainder is $1$, we subtract $1$ to make it perfectly divisible.\n\nResult: **1**'
  },
  // 5b. Remainder Theorem
  {
    chapterId: 'y8-1',
    chapterTitle: 'Chapter 1: Whole Numbers',
    topicId: 'y8-1a',
    topicCode: '1A',
    topicTitle: 'Addition and subtraction of whole numbers',
    year: 'Year 8',
    type: 'multiple_choice',
    difficulty: 'hard',
    isManual: true,
    title: 'Challenge: Division Logic',
    question: 'What number divided by $425$ will give $62$ as the quotient and $157$ as the remainder?',
    options: ['26,507', '26,350', '26,664', '26,450'],
    answer: 0,
    solution: 'Use the formula: $\\text{Dividend} = (\\text{Divisor} \\times \\text{Quotient}) + \\text{Remainder}$\nDividend $= (425 \\times 62) + 157$\n1. $425 \\times 62 = 26,350$\n2. $26,350 + 157 = 26,507$\n\nResult: **26,507**'
  },
  // 5c. Two Parts
  {
    chapterId: 'y8-1',
    chapterTitle: 'Chapter 1: Whole Numbers',
    topicId: 'y8-1a',
    topicCode: '1A',
    topicTitle: 'Addition and subtraction of whole numbers',
    year: 'Year 8',
    type: 'multiple_choice',
    difficulty: 'hard',
    isManual: true,
    title: 'Challenge: Splitting Numbers',
    question: 'Divide $1,250$ into two parts such that one part is greater than the other by $216$. What is the smaller part?',
    options: ['517', '733', '525', '625'],
    answer: 0,
    solution: 'Let the parts be $x$ and $y$, where $x$ is larger.\n1. $x + y = 1,250$\n2. $x - y = 216$\nSubtract the equations: $(x + y) - (x - y) = 1,250 - 216$\n$2y = 1,034 \\Rightarrow y = 517$.\nThe smaller part is $517$.\n\nResult: **517**'
  },
  // 6a. Average Change
  {
    chapterId: 'y8-1',
    chapterTitle: 'Chapter 1: Whole Numbers',
    topicId: 'y8-1a',
    topicCode: '1A',
    topicTitle: 'Addition and subtraction of whole numbers',
    year: 'Year 8',
    type: 'multiple_choice',
    difficulty: 'hard',
    isManual: true,
    title: 'Challenge: Averages 1',
    question: 'The average of $8$ numbers is $40$. A $9$th number is chosen so that the average is now $48$. What is the $9$th number?',
    options: ['112', '100', '120', '56'],
    answer: 0,
    solution: '1. Total of 8 numbers: $8 \\times 40 = 320$\n2. Total of 9 numbers: $9 \\times 48 = 432$\n3. 9th number: $432 - 320 = 112$\n\nResult: **112**'
  },
  // 6b. Average Subset
  {
    chapterId: 'y8-1',
    chapterTitle: 'Chapter 1: Whole Numbers',
    topicId: 'y8-1a',
    topicCode: '1A',
    topicTitle: 'Addition and subtraction of whole numbers',
    year: 'Year 8',
    type: 'multiple_choice',
    difficulty: 'hard',
    isManual: true,
    title: 'Challenge: Averages 2',
    question: 'The average of $9$ numbers is $25$ and the average of $5$ of them is $20$. What is the average of the other $4$ numbers?',
    options: ['31.25', '30', '35', '27.5'],
    answer: 0,
    solution: '1. Total of 9 numbers: $9 \\times 25 = 225$\n2. Total of 5 numbers: $5 \\times 20 = 100$\n3. Total of remaining 4 numbers: $225 - 100 = 125$\n4. Average of 4 numbers: $125 \\div 4 = 31.25$\n\nResult: **31.25**'
  },
  // 6c. Combined Averages
  {
    chapterId: 'y8-1',
    chapterTitle: 'Chapter 1: Whole Numbers',
    topicId: 'y8-1a',
    topicCode: '1A',
    topicTitle: 'Addition and subtraction of whole numbers',
    year: 'Year 8',
    type: 'multiple_choice',
    difficulty: 'hard',
    isManual: true,
    title: 'Challenge: Combined Averages',
    question: 'The average of $8$ numbers is $30$ and the average of $6$ other numbers is $45$. What is the average of all $14$ numbers? (Round to 2 decimal places).',
    options: ['36.43', '37.50', '35.00', '38.25'],
    answer: 0,
    solution: '1. Total of 8 numbers: $8 \\times 30 = 240$\n2. Total of 6 numbers: $6 \\times 45 = 270$\n3. Total of all 14: $240 + 270 = 510$\n4. Average: $510 \\div 14 \\approx 36.428... \\approx 36.43$\n\nResult: **36.43**'
  },
  // 6d. Cricket Average
  {
    chapterId: 'y8-1',
    chapterTitle: 'Chapter 1: Whole Numbers',
    topicId: 'y8-1a',
    topicCode: '1A',
    topicTitle: 'Addition and subtraction of whole numbers',
    year: 'Year 8',
    type: 'multiple_choice',
    difficulty: 'hard',
    isManual: true,
    title: 'Challenge: Cricket Stats',
    question: 'A batsman had an average of $42$ runs for $6$ innings. If he scored $84$ in his next innings, what was his new average?',
    options: ['48', '46', '50', '44'],
    answer: 0,
    solution: '1. Total runs in 6 innings: $6 \\times 42 = 252$\n2. Total runs in 7 innings: $252 + 84 = 336$\n3. New average: $336 \\div 7 = 48$\n\nResult: **48**'
  },
  // 7a. Factor Division 1
  {
    chapterId: 'y8-1',
    chapterTitle: 'Chapter 1: Whole Numbers',
    topicId: 'y8-1a',
    topicCode: '1A',
    topicTitle: 'Addition and subtraction of whole numbers',
    year: 'Year 8',
    type: 'multiple_choice',
    difficulty: 'hard',
    isManual: true,
    title: 'Challenge: Factor Division 1',
    question: 'Divide $432,000$ by $54$ by first dividing by $9$ and then by $6$. What is the result?',
    options: ['8,000', '6,000', '7,200', '9,000'],
    answer: 0,
    solution: '1. Step 1: $432,000 \\div 9 = 48,000$\n2. Step 2: $48,000 \\div 6 = 8,000$\nCheck: $54 = 9 \\times 6$, so $432,000 \\div 54 = 8,000$.\n\nResult: **8,000**'
  },
  // 7b. Factor Division 2
  {
    chapterId: 'y8-1',
    chapterTitle: 'Chapter 1: Whole Numbers',
    topicId: 'y8-1a',
    topicCode: '1A',
    topicTitle: 'Addition and subtraction of whole numbers',
    year: 'Year 8',
    type: 'multiple_choice',
    difficulty: 'hard',
    isManual: true,
    title: 'Challenge: Factor Division 2',
    question: 'Divide $104,940$ by $330$ by first dividing by $10$, then by $3$ and finally by $11$. What is the result?',
    options: ['318', '328', '308', '338'],
    answer: 0,
    solution: '1. Step 1: $104,940 \\div 10 = 10,494$\n2. Step 2: $10,494 \\div 3 = 3,498$\n3. Step 3: $3,498 \\div 11 = 318$\nCheck: $10 \\times 3 \\times 11 = 330$, and $104,940 \\div 330 = 318$.\n\nResult: **318**'
  }
];

async function seed() {
  console.log(`[Challenge Import] Seeding ${challengeQuestions.length} HARD questions to 1A...`);
  const batch = db.batch();
  const collRef = db.collection('questions');
  
  challengeQuestions.forEach(q => {
    const docRef = collRef.doc();
    batch.set(docRef, {
      ...q,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      updatedAt: admin.firestore.FieldValue.serverTimestamp()
    });
  });

  await batch.commit();
  console.log(`Successfully added ${challengeQuestions.length} Challenge questions!`);
  process.exit(0);
}

seed().catch(err => {
  console.error(err);
  process.exit(1);
});
