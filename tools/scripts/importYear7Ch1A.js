import admin from 'firebase-admin';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}
const db = admin.firestore();

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
    question: 'Which of the following lists all the whole numbers less than \\(8\\)?',
    options: [
      '\\(0, 1, 2, 3, 4, 5, 6, 7\\)',
      '\\(1, 2, 3, 4, 5, 6, 7\\)',
      '\\(0, 1, 2, 3, 4, 5, 6, 7, 8\\)',
      '\\(1, 2, 3, 4, 5, 6, 7, 8\\)'
    ],
    answer: 0,
    solution: 'The set of whole numbers starts from \\(0\\) and goes up by \\(1\\). The whole numbers strictly less than \\(8\\) are \\(0, 1, 2, 3, 4, 5, 6, 7\\).',
    solutionSteps: [
      {
        explanation: "Understand what whole numbers are.",
        workingOut: "\\text{Whole numbers start from } 0 \\text{ and go up by } 1: \\; 0, 1, 2, 3, \\dots",
        graphData: null
      },
      {
        explanation: "Identify the boundary condition.",
        workingOut: "\\text{We need whole numbers strictly less than } 8 \\text{, which excludes } 8.",
        graphData: null
      },
      {
        explanation: "List the numbers.",
        workingOut: "\\(\\{0, 1, 2, 3, 4, 5, 6, 7\\}\\)",
        graphData: null
      }
    ],
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
    question: 'Which of the following lists all the whole numbers greater than \\(35\\) and less than \\(42\\)?',
    options: [
      '\\(36, 37, 38, 39, 40, 41\\)',
      '\\(35, 36, 37, 38, 39, 40, 41\\)',
      '\\(36, 37, 38, 39, 40, 41, 42\\)',
      '\\(35, 36, 37, 38, 39, 40, 41, 42\\)'
    ],
    answer: 0,
    solution: 'The whole numbers greater than \\(35\\) and less than \\(42\\) are \\(36, 37, 38, 39, 40, 41\\).',
    solutionSteps: [
      {
        explanation: "Identify the lower boundary.",
        workingOut: "\\text{The numbers must be greater than } 35 \\text{, so they start from } 36.",
        graphData: null
      },
      {
        explanation: "Identify the upper boundary.",
        workingOut: "\\text{The numbers must be less than } 42 \\text{, so they end at } 41.",
        graphData: null
      },
      {
        explanation: "List all numbers in between.",
        workingOut: "36, 37, 38, 39, 40, 41",
        graphData: null
      }
    ],
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
    question: 'Consider a number line drawn from \\(0\\) to \\(12\\). Which of the following correctly describes the set of numbers \\(3, 5, 7,\\) and \\(9\\) marked on this line?',
    options: [
      'They are all the odd numbers between \\(2\\) and \\(10\\).',
      'They are all the even numbers between \\(2\\) and \\(10\\).',
      'They are all the prime numbers between \\(0\\) and \\(10\\).',
      'They are all the multiples of \\(3\\) between \\(0\\) and \\(12\\).'
    ],
    answer: 0,
    solution: 'The numbers \\(3, 5, 7, 9\\) are odd numbers strictly between \\(2\\) and \\(10\\).',
    solutionSteps: [
      {
        explanation: "Analyze the given set of numbers.",
        workingOut: "\\text{The set contains the values: } 3, 5, 7, 9",
        graphData: null
      },
      {
        explanation: "Determine their properties.",
        workingOut: "\\text{None of these numbers are divisible by } 2 \\text{, so they are odd numbers.}",
        graphData: null
      },
      {
        explanation: "Check the boundaries.",
        workingOut: "\\text{The values strictly lie between } 2 \\text{ and } 10.",
        graphData: null
      }
    ],
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
    question: 'Consider a number line. Which set of numbers represents all the even numbers greater than \\(3\\) and less than \\(11\\)?',
    options: [
      '\\(4, 6, 8, 10\\)',
      '\\(5, 7, 9\\)',
      '\\(4, 6, 8, 10, 12\\)',
      '\\(2, 4, 6, 8, 10\\)'
    ],
    answer: 0,
    solution: 'The even numbers strictly between \\(3\\) and \\(11\\) are \\(4, 6, 8, 10\\).',
    solutionSteps: [
      {
        explanation: "Identify the boundaries.",
        workingOut: "\\text{The whole numbers between } 3 \\text{ and } 11 \\text{ are } 4, 5, 6, 7, 8, 9, 10.",
        graphData: null
      },
      {
        explanation: "Filter for even numbers.",
        workingOut: "\\text{Filter values divisible by } 2: \\; 4, 6, 8, 10",
        graphData: null
      }
    ],
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
    question: 'Which of the following describes the whole numbers less than \\(6\\)?',
    options: [
      '\\(0, 1, 2, 3, 4, 5\\)',
      '\\(1, 2, 3, 4, 5\\)',
      '\\(0, 1, 2, 3, 4, 5, 6\\)',
      '\\(1, 2, 3, 4, 5, 6\\)'
    ],
    answer: 0,
    solution: 'The whole numbers strictly less than \\(6\\) are \\(0, 1, 2, 3, 4, 5\\).',
    solutionSteps: [
      {
        explanation: "Understand whole numbers.",
        workingOut: "\\text{Whole numbers start from } 0 \\text{ and increase by } 1.",
        graphData: null
      },
      {
        explanation: "Apply the boundary condition.",
        workingOut: "\\text{We need numbers strictly less than } 6 \\text{, which excludes } 6.",
        graphData: null
      },
      {
        explanation: "List the numbers.",
        workingOut: "\\(\\{0, 1, 2, 3, 4, 5\\}\\)",
        graphData: null
      }
    ],
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
    question: 'Which set represents the whole numbers that are less than \\(9\\) and greater than \\(4\\)?',
    options: [
      '\\(5, 6, 7, 8\\)',
      '\\(4, 5, 6, 7, 8\\)',
      '\\(5, 6, 7, 8, 9\\)',
      '\\(4, 5, 6, 7, 8, 9\\)'
    ],
    answer: 0,
    solution: 'The whole numbers greater than \\(4\\) and less than \\(9\\) are \\(5, 6, 7, 8\\).',
    solutionSteps: [
      {
        explanation: "Find numbers greater than 4.",
        workingOut: "\\text{The numbers start from } 5.",
        graphData: null
      },
      {
        explanation: "Find numbers less than 9.",
        workingOut: "\\text{The numbers end at } 8.",
        graphData: null
      },
      {
        explanation: "List the numbers.",
        workingOut: "5, 6, 7, 8",
        graphData: null
      }
    ],
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
    question: 'A bus route has stations numbered from \\(1\\) to \\(20\\), which are \\(1\\text{ km}\\) apart. To save time, an express bus only stops at every fourth station, starting at station \\(4\\) (i.e. station \\(4\\), station \\(8\\), etc.). Which of the following lists all the stations where the express bus stops?',
    options: [
      '\\(4, 8, 12, 16, 20\\)',
      '\\(1, 5, 9, 13, 17\\)',
      '\\(4, 8, 12, 16\\)',
      '\\(0, 4, 8, 12, 16, 20\\)'
    ],
    answer: 0,
    solution: 'The express bus stops at multiples of \\(4\\) up to \\(20\\), which are \\(4, 8, 12, 16, 20\\).',
    solutionSteps: [
      {
        explanation: "Understand the pattern.",
        workingOut: "\\text{The bus starts at station } 4 \\text{ and stops at every fourth station (multiples of } 4\\text{).}",
        graphData: null
      },
      {
        explanation: "List the multiples of 4 up to 20.",
        workingOut: "4, 8, 12, 16, 20",
        graphData: null
      }
    ],
    isActive: true,
    createdAt: new Date().toISOString()
  }
];

export const importYear7Ch1A = async (forceReset = false) => {
  console.log('[Ch1A Year 7 Import] STARTING PHYSICAL SYNC...');
  let importedCount = 0;
  try {
    if (forceReset) {
      const oldSnap = await db.collection('questions').where('topicId', '==', 'y7-1a').get();
      for (const d of oldSnap.docs) {
        await d.ref.delete();
      }
    }
    const existingSnap = await db.collection('questions').where('topicId', '==', 'y7-1a').get();
    const existingQuestions = new Set(existingSnap.docs.map(doc => doc.data().question.trim()));
    
    for (const q of allQuestions) {
      if (!existingQuestions.has(q.question.trim())) {
        await db.collection('questions').add(q);
        importedCount++;
      }
    }
  } catch (error) { 
    console.error(error); 
    throw error; 
  }
  return importedCount;
};
