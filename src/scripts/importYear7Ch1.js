import { db } from '../firebase/config.js';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';

export const allQuestions = [
  // 1a. Addition
  {
    chapterId: 'y7-1',
    chapterTitle: 'Chapter 1: Whole numbers',
    topicId: 'y7-1a',
    topicCode: '1A',
    topicTitle: 'Number Operations',
    year: 'Year 7',
    type: 'multiple_choice',
    question: 'Calculate the sum: $345 + 502 + 618$',
    options: ['1465', '1365', '1455', '1565'],
    answer: 0,
    solution: 'To calculate the sum, we add the numbers step-by-step:\n1. $345 + 502 = 847$\n2. $847 + 618 = 1465$\n\nAlternatively, using column addition:\n$$\\begin{array}{c@{\\quad}r} & 345 \\\\ & 502 \\\\ + & 618 \\\\ \\hline & 1465 \\end{array}$$',
    difficulty: 'easy',
    isManual: true
  },
  // 1b. Division
  {
    chapterId: 'y7-1',
    chapterTitle: 'Chapter 1: Whole numbers',
    topicId: 'y7-1a',
    topicCode: '1A',
    topicTitle: 'Number Operations',
    year: 'Year 7',
    type: 'multiple_choice',
    question: 'Find the result of: $84 \\div 4$',
    options: ['21', '22', '18', '24'],
    answer: 0,
    solution: 'To divide 84 by 4:\n1. $8 \\div 4 = 2$\n2. $4 \\div 4 = 1$\nTherefore, $84 \\div 4 = 21$.',
    difficulty: 'easy',
    isManual: true
  },
  // 1c. Subtraction
  {
    chapterId: 'y7-1',
    chapterTitle: 'Chapter 1: Whole numbers',
    topicId: 'y7-1a',
    topicCode: '1A',
    topicTitle: 'Number Operations',
    year: 'Year 7',
    type: 'multiple_choice',
    question: 'Calculate: $254 - 127$',
    options: ['127', '137', '117', '147'],
    answer: 0,
    solution: 'Using column subtraction:\n$$\\begin{array}{c@{\\quad}r} & 254 \\\\ - & 127 \\\\ \\hline & 127 \\end{array}$$\nStep 1: $14 - 7 = 7$ (borrow 1 from 50)\nStep 2: $40 - 20 = 20$\nStep 3: $200 - 100 = 100$\nResult: 127.',
    difficulty: 'easy',
    isManual: true
  },
  // 1d. Order of operations (BODMAS)
  {
    chapterId: 'y7-1',
    chapterTitle: 'Chapter 1: Whole numbers',
    topicId: 'y7-1a',
    topicCode: '1A',
    topicTitle: 'Number Operations',
    year: 'Year 7',
    type: 'multiple_choice',
    question: 'Evaluate the expression: $30 \\div (12 - 7) + 8$',
    options: ['14', '12', '16', '10'],
    answer: 0,
    solution: 'Following the order of operations (BODMAS/BIDMAS):\n1. **Brackets**: $(12 - 7) = 5$\n2. **Division**: $30 \\div 5 = 6$\n3. **Addition**: $6 + 8 = 14$\n\nFinal Result: 14.',
    difficulty: 'medium',
    isManual: true
  },
  // 1e. Multiplication and Addition
  {
    chapterId: 'y7-1',
    chapterTitle: 'Chapter 1: Whole numbers',
    topicId: 'y7-1a',
    topicCode: '1A',
    topicTitle: 'Number Operations',
    year: 'Year 7',
    type: 'multiple_choice',
    question: 'Calculate: $6 \\times 425 + 9$',
    options: ['2559', '2550', '2541', '2568'],
    answer: 0,
    solution: '1. **Multiplication**: $6 \\times 425 = 2550$\n2. **Addition**: $2550 + 9 = 2559$',
    difficulty: 'medium',
    isManual: true
  },
  // 1f. Multiple Operations
  {
    chapterId: 'y7-1',
    chapterTitle: 'Chapter 1: Whole numbers',
    topicId: 'y7-1a',
    topicCode: '1A',
    topicTitle: 'Number Operations',
    year: 'Year 7',
    type: 'multiple_choice',
    question: 'Evaluate: $72 - 36 + 14 \\times 3$',
    options: ['78', '60', '82', '56'],
    answer: 0,
    solution: 'Following order of operations:\n1. **Multiplication**: $14 \\times 3 = 42$\n2. **Operations from left to right**:\n   - $72 - 36 = 36$\n   - $36 + 42 = 78$',
    difficulty: 'medium',
    isManual: true
  },
  // 1g. Subtraction and Division
  {
    chapterId: 'y7-1',
    chapterTitle: 'Chapter 1: Whole numbers',
    topicId: 'y7-1a',
    topicCode: '1A',
    topicTitle: 'Number Operations',
    year: 'Year 7',
    type: 'multiple_choice',
    question: 'Calculate: $425 - 846 \\div 3$',
    options: ['143', '282', '153', '133'],
    answer: 0,
    solution: '1. **Division**: $846 \\div 3 = 282$\n2. **Subtraction**: $425 - 282 = 143$',
    difficulty: 'medium',
    isManual: true
  },
  // 1h. Multiplication with Parentheses
  {
    chapterId: 'y7-1',
    chapterTitle: 'Chapter 1: Whole numbers',
    topicId: 'y7-1a',
    topicCode: '1A',
    topicTitle: 'Number Operations',
    year: 'Year 7',
    type: 'multiple_choice',
    question: 'Calculate: $145 \\times (4 + 6)$',
    options: ['1450', '1454', '1540', '1440'],
    answer: 0,
    solution: '1. **Brackets**: $(4 + 6) = 10$\n2. **Multiplication**: $145 \\times 10 = 1450$',
    difficulty: 'easy',
    isManual: true
  },
  // 1i. Double Division
  {
    chapterId: 'y7-1',
    chapterTitle: 'Chapter 1: Whole numbers',
    topicId: 'y7-1a',
    topicCode: '1A',
    topicTitle: 'Number Operations',
    year: 'Year 7',
    type: 'multiple_choice',
    question: 'Evaluate: $(105 \\div 5) + (312 \\div 4)$',
    options: ['99', '89', '101', '97'],
    answer: 0,
    solution: '1. First bracket: $105 \\div 5 = 21$\n2. Second bracket: $312 \\div 4 = 78$\n3. **Addition**: $21 + 78 = 99$',
    difficulty: 'medium',
    isManual: true
  },
  // 2. Division Word Problem
  {
    chapterId: 'y7-1',
    chapterTitle: 'Chapter 1: Whole numbers',
    topicId: 'y7-1a',
    topicCode: '1A',
    topicTitle: 'Number Operations',
    year: 'Year 7',
    type: 'multiple_choice',
    question: 'A container of sugar weighs 5200 grams. If the sugar is divided into packets of 200 grams each, how many packets are there?',
    options: ['26', '260', '52', '20'],
    answer: 0,
    solution: 'To find the number of packets, divide the total weight by the weight of each packet:\n$$5200 \\div 200 = 52 \\div 2 = 26$$\nThere are 26 packets.',
    difficulty: 'easy',
    isManual: true
  },
  // 3. Division Ceiling Word Problem
  {
    chapterId: 'y7-1',
    chapterTitle: 'Chapter 1: Whole numbers',
    topicId: 'y7-1a',
    topicCode: '1A',
    topicTitle: 'Number Operations',
    year: 'Year 7',
    type: 'multiple_choice',
    question: 'There are 3500 books to be divided into boxes so that each box holds 60 books. How many boxes are required to hold all the books?',
    options: ['59', '58', '60', '57'],
    answer: 0,
    solution: 'Divide the total number of books by the capacity of each box:\n$$3500 \\div 60 \\approx 58.33$$\nSince we cannot have a fraction of a box and all books must be stored, we round up to the nearest whole number:\n$$58 + 1 = 59$$\n59 boxes are required.',
    difficulty: 'medium',
    isManual: true
  },
  // 4. Addition/Subtraction Word Problem
  {
    chapterId: 'y7-1',
    chapterTitle: 'Chapter 1: Whole numbers',
    topicId: 'y7-1a',
    topicCode: '1A',
    topicTitle: 'Number Operations',
    year: 'Year 7',
    type: 'multiple_choice',
    question: 'A club started the year with 150 members. During the year, 35 people left and 82 people joined. How many people belonged to the club at the end of the year?',
    options: ['197', '187', '167', '203'],
    answer: 0,
    solution: '1. Start with 150 members.\n2. Subtract those who left: $150 - 35 = 115$\n3. Add those who joined: $115 + 82 = 197$\nAt the end of the year, there were 197 members.',
    difficulty: 'easy',
    isManual: true
  },
  // 5. Division Ceiling Word Problem 2
  {
    chapterId: 'y7-1',
    chapterTitle: 'Chapter 1: Whole numbers',
    topicId: 'y7-1a',
    topicCode: '1A',
    topicTitle: 'Number Operations',
    year: 'Year 7',
    type: 'multiple_choice',
    question: 'If a bus can carry 52 passengers, how many buses are needed to transport 750 school students to a hockey game?',
    options: ['15', '14', '16', '13'],
    answer: 0,
    solution: 'Divide the total number of students by the bus capacity:\n$$750 \\div 52 \\approx 14.42$$\nSince we need enough buses for everyone, we must round up to the next whole bus:\nResult: 15 buses.',
    difficulty: 'medium',
    isManual: true
  },
  // 6. Multiplication Word Problem
  {
    chapterId: 'y7-1',
    chapterTitle: 'Chapter 1: Whole numbers',
    topicId: 'y7-1a',
    topicCode: '1A',
    topicTitle: 'Number Operations',
    year: 'Year 7',
    type: 'multiple_choice',
    question: 'A supermarket takes delivery of 62 cartons of soft drink cans. Each carton contains 36 cans. How many cans are delivered in total?',
    options: ['2232', '2132', '2242', '2160'],
    answer: 0,
    solution: 'Multiply the number of cartons by the number of cans per carton:\n$$62 \\times 36$$\nUsing long multiplication:\n$62 \\times 30 = 1860$\n$62 \\times 6 = 372$\n$1860 + 372 = 2232$\nTotal: 2232 cans.',
    difficulty: 'easy',
    isManual: true
  },
  // 7. Multiplication Word Problem 2
  {
    chapterId: 'y7-1',
    chapterTitle: 'Chapter 1: Whole numbers',
    topicId: 'y7-1a',
    topicCode: '1A',
    topicTitle: 'Number Operations',
    year: 'Year 7',
    type: 'multiple_choice',
    question: 'On a school excursion, 18 buses each carry 45 students. How many students are transported in total?',
    options: ['810', '720', '820', '790'],
    answer: 0,
    solution: '$$18 \\times 45$$\nCalculation:\n$20 \\times 45 = 900$\n$2 \\times 45 = 90$\n$900 - 90 = 810$\nTotal: 810 students.',
    difficulty: 'easy',
    isManual: true
  },
  // 8. Conversion Word Problem
  {
    chapterId: 'y7-1',
    chapterTitle: 'Chapter 1: Whole numbers',
    topicId: 'y7-1a',
    topicCode: '1A',
    topicTitle: 'Number Operations',
    year: 'Year 7',
    type: 'multiple_choice',
    question: 'A school day is 7 hours long. How many minutes are there in a school day?',
    options: ['420', '360', '480', '400'],
    answer: 0,
    solution: 'There are 60 minutes in 1 hour.\n$$7 \\text{ hours} \\times 60 \\text{ minutes/hour} = 420 \\text{ minutes}$$',
    difficulty: 'easy',
    isManual: true
  },
  // 9. Words to Math
  {
    chapterId: 'y7-1',
    chapterTitle: 'Chapter 1: Whole numbers',
    topicId: 'y7-1a',
    topicCode: '1A',
    topicTitle: 'Number Operations',
    year: 'Year 7',
    type: 'multiple_choice',
    question: 'Find the sum of ninety-two and forty-eight and then subtract fifty-five.',
    options: ['85', '95', '75', '83'],
    answer: 0,
    solution: '1. **Sum**: $92 + 48 = 140$\n2. **Subtract**: $140 - 55 = 85$',
    difficulty: 'easy',
    isManual: true
  },
  // 10. Multi-step Word Problem
  {
    chapterId: 'y7-1',
    chapterTitle: 'Chapter 1: Whole numbers',
    topicId: 'y7-1a',
    topicCode: '1A',
    topicTitle: 'Number Operations',
    year: 'Year 7',
    type: 'multiple_choice',
    question: 'The manager of a school canteen orders 1200 hot dogs for the week. On Monday 415 are sold and on Tuesday 328 are sold. How many hot dogs does the school have left for the rest of the week?',
    options: ['457', '557', '443', '515'],
    answer: 0,
    solution: '1. Total sold: $415 + 328 = 743$\n2. Total remaining: $1200 - 743 = 457$\nThe school has 457 hot dogs left.',
    difficulty: 'medium',
    isManual: true
  }
];

export const importYear7Ch1 = async () => {
  console.log('[Ch1 Year 7 Import] Starting audit...');
  let importedCount = 0;
  
  try {
    const qRef = collection(db, 'questions');
    const existingSnap = await getDocs(query(qRef, where('chapterId', '==', 'y7-1')));
    const existingQuestions = new Set(existingSnap.docs.map(doc => doc.data().question));
    
    console.log(`[Ch1 Year 7 Import] Found ${existingQuestions.size} existing questions in DB.`);

    for (const q of allQuestions) {
      if (!existingQuestions.has(q.question)) {
        await addDoc(collection(db, 'questions'), q);
        importedCount++;
      }
    }
  } catch (error) {
    console.error('[Ch1 Year 7 Import] CRITICAL ERROR:', error);
  }
  
  console.log(`[Ch1 Year 7 Import] Successfully added ${importedCount} NEW questions.`);
  return importedCount;
};
