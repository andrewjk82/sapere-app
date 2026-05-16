import { db } from '../firebase/config.js';
import { collection, addDoc, getDocs, query, where, deleteDoc } from 'firebase/firestore';

export const allQuestions = [
  {
    chapterId: 'y7-1',
    topicId: 'y7-1a',
    topicCode: '1A',
    topicTitle: 'The number line',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isManual: true,
    question: 'Which of the following lists all the whole numbers less than $8$?',
    options: [
      '$0, 1, 2, 3, 4, 5, 6, 7$',
      '$1, 2, 3, 4, 5, 6, 7$',
      '$0, 1, 2, 3, 4, 5, 6, 7, 8$',
      '$1, 2, 3, 4, 5, 6, 7, 8$'
    ],
    answer: 0,
    solution: '<div style="text-align: left;"><p><strong>Step 1: Understand what whole numbers are.</strong><br>The set of whole numbers starts from $0$ and goes up by $1$. So, whole numbers are $0, 1, 2, 3, \\dots$</p><p><strong>Step 2: Identify the condition.</strong><br>We need the whole numbers that are <em>less than</em> $8$. This means $8$ is not included.</p><p><strong>Step 3: List the numbers.</strong><br>Starting from $0$: $0, 1, 2, 3, 4, 5, 6, 7$.</p></div>',
    isActive: true,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-1',
    topicId: 'y7-1a',
    topicCode: '1A',
    topicTitle: 'The number line',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isManual: true,
    question: 'Which of the following lists all the whole numbers greater than $35$ and less than $42$?',
    options: [
      '$36, 37, 38, 39, 40, 41$',
      '$35, 36, 37, 38, 39, 40, 41$',
      '$36, 37, 38, 39, 40, 41, 42$',
      '$35, 36, 37, 38, 39, 40, 41, 42$'
    ],
    answer: 0,
    solution: '<div style="text-align: left;"><p><strong>Step 1: Identify the lower boundary.</strong><br>The numbers must be <em>greater than</em> $35$. The first whole number greater than $35$ is $36$.</p><p><strong>Step 2: Identify the upper boundary.</strong><br>The numbers must be <em>less than</em> $42$. The last whole number less than $42$ is $41$.</p><p><strong>Step 3: List all numbers in between.</strong><br>From $36$ to $41$: $36, 37, 38, 39, 40, 41$.</p></div>',
    isActive: true,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-1',
    topicId: 'y7-1a',
    topicCode: '1A',
    topicTitle: 'The number line',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isManual: true,
    question: 'Consider a number line drawn from $0$ to $12$. Which of the following correctly describes the set of numbers $3, 5, 7,$ and $9$ marked on this line?',
    options: [
      'They are all the odd numbers between $2$ and $10$.',
      'They are all the even numbers between $2$ and $10$.',
      'They are all the prime numbers between $0$ and $10$.',
      'They are all the multiples of $3$ between $0$ and $12$.'
    ],
    answer: 0,
    solution: '<div style="text-align: left;"><p><strong>Step 1: Analyze the given set of numbers.</strong><br>The numbers are $3, 5, 7, 9$.</p><p><strong>Step 2: Determine their properties.</strong><br>All these numbers are not divisible by $2$, so they are <em>odd numbers</em>.</p><p><strong>Step 3: Check the boundaries.</strong><br>The smallest odd number in the set is $3$ (which is $> 2$) and the largest is $9$ (which is $< 10$). Therefore, they are exactly the odd numbers between $2$ and $10$.</p></div>',
    isActive: true,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-1',
    topicId: 'y7-1a',
    topicCode: '1A',
    topicTitle: 'The number line',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isManual: true,
    question: 'Consider a number line. Which set of numbers represents all the even numbers greater than $3$ and less than $11$?',
    options: [
      '$4, 6, 8, 10$',
      '$5, 7, 9$',
      '$4, 6, 8, 10, 12$',
      '$2, 4, 6, 8, 10$'
    ],
    answer: 0,
    solution: '<div style="text-align: left;"><p><strong>Step 1: Identify the boundaries.</strong><br>The numbers must be greater than $3$ and less than $11$. The available whole numbers are $4, 5, 6, 7, 8, 9, 10$.</p><p><strong>Step 2: Filter for even numbers.</strong><br>Even numbers are those divisible by $2$. From the list, the even numbers are $4, 6, 8, 10$.</p></div>',
    isActive: true,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-1',
    topicId: 'y7-1a',
    topicCode: '1A',
    topicTitle: 'The number line',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isManual: true,
    question: 'Which of the following describes the whole numbers less than $6$?',
    options: [
      '$0, 1, 2, 3, 4, 5$',
      '$1, 2, 3, 4, 5$',
      '$0, 1, 2, 3, 4, 5, 6$',
      '$1, 2, 3, 4, 5, 6$'
    ],
    answer: 0,
    solution: '<div style="text-align: left;"><p><strong>Step 1: Understand whole numbers.</strong><br>Whole numbers start from $0$ ($0, 1, 2, 3, \\dots$).</p><p><strong>Step 2: Apply the condition.</strong><br>We need the numbers to be strictly <em>less than</em> $6$. This means $6$ is excluded.</p><p><strong>Step 3: List the numbers.</strong><br>The set is $0, 1, 2, 3, 4, 5$.</p></div>',
    isActive: true,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-1',
    topicId: 'y7-1a',
    topicCode: '1A',
    topicTitle: 'The number line',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isManual: true,
    question: 'Which set represents the whole numbers that are less than $9$ and greater than $4$?',
    options: [
      '$5, 6, 7, 8$',
      '$4, 5, 6, 7, 8$',
      '$5, 6, 7, 8, 9$',
      '$4, 5, 6, 7, 8, 9$'
    ],
    answer: 0,
    solution: '<div style="text-align: left;"><p><strong>Step 1: Find numbers greater than 4.</strong><br>The first whole number greater than $4$ is $5$.</p><p><strong>Step 2: Find numbers less than 9.</strong><br>The last whole number less than $9$ is $8$.</p><p><strong>Step 3: List the numbers.</strong><br>The numbers between these boundaries are $5, 6, 7, 8$.</p></div>',
    isActive: true,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-1',
    topicId: 'y7-1a',
    topicCode: '1A',
    topicTitle: 'The number line',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isManual: true,
    question: 'A bus route has stations numbered from $1$ to $20$, which are $1\\text{ km}$ apart. To save time, an express bus only stops at every fourth station, starting at station $4$ (i.e. station $4$, station $8$, etc.). Which of the following lists all the stations where the express bus stops?',
    options: [
      '$4, 8, 12, 16, 20$',
      '$1, 5, 9, 13, 17$',
      '$4, 8, 12, 16$',
      '$0, 4, 8, 12, 16, 20$'
    ],
    answer: 0,
    solution: '<div style="text-align: left;"><p><strong>Step 1: Understand the pattern.</strong><br>The bus starts stopping at station $4$ and then stops at every fourth station. This means we are looking for multiples of $4$.</p><p><strong>Step 2: List the multiples of 4 up to 20.</strong><br>$1 \\times 4 = 4$<br>$2 \\times 4 = 8$<br>$3 \\times 4 = 12$<br>$4 \\times 4 = 16$<br>$5 \\times 4 = 20$</p><p><strong>Step 3: Final list.</strong><br>Since the route goes up to station $20$, the stations are $4, 8, 12, 16, 20$.</p></div>',
    isActive: true,
    createdAt: new Date().toISOString()
  }
];

export const importYear7Ch1A = async (forceReset = false) => {
  console.log('[Ch1A Year 7 Import] STARTING PHYSICAL SYNC...');
  let importedCount = 0;
  try {
    const qRef = collection(db, 'questions');
    if (forceReset) {
      const oldSnap = await getDocs(query(qRef, where('topicId', '==', 'y7-1a')));
      for (const d of oldSnap.docs) { await deleteDoc(d.ref); }
    }
    const existingSnap = await getDocs(query(qRef, where('topicId', '==', 'y7-1a')));
    const existingQuestions = new Set(existingSnap.docs.map(doc => doc.data().question.trim()));
    
    for (const q of allQuestions) {
      if (!existingQuestions.has(q.question.trim())) {
        await addDoc(collection(db, 'questions'), q);
        importedCount++;
      }
    }
  } catch (error) { 
    console.error(error); 
    throw error; 
  }
  return importedCount;
};
