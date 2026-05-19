import { db } from '../firebase/config';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';

const questions = [
  // 1. Find the simple interest payable in each case.
  {
    chapterId: 'y10-1',
    chapterTitle: 'Chapter 1: Consumer arithmetic',
    topicId: 'y10-1a',
    topicCode: '1A',
    topicTitle: 'Review of percentages',
    year: 'Year 10',
    type: 'short_answer',
    question: 'Find the simple interest payable: $10,000 borrowed for six years at 9% p.a.',
    answer: '5400',
    solution: 'Interest = Principal × Rate × Time = $10,000 × 0.09 × 6 = $5,400',
    difficulty: 'easy',
    isManual: true
  },
  {
    chapterId: 'y10-1',
    chapterTitle: 'Chapter 1: Consumer arithmetic',
    topicId: 'y10-1a',
    topicCode: '1A',
    topicTitle: 'Review of percentages',
    year: 'Year 10',
    type: 'short_answer',
    question: 'Find the simple interest payable: $3,000 borrowed for 15 years at 6% p.a.',
    answer: '2700',
    solution: 'Interest = Principal × Rate × Time = $3,000 × 0.06 × 15 = $2,700',
    difficulty: 'easy',
    isManual: true
  },
  {
    chapterId: 'y10-1',
    chapterTitle: 'Chapter 1: Consumer arithmetic',
    topicId: 'y10-1a',
    topicCode: '1A',
    topicTitle: 'Review of percentages',
    year: 'Year 10',
    type: 'short_answer',
    question: 'Find the simple interest payable: $1,500 borrowed for 40 years at 2.5% p.a.',
    answer: '1500',
    solution: 'Interest = Principal × Rate × Time = $1,500 × 0.025 × 40 = $1,500',
    difficulty: 'easy',
    isManual: true
  },
  // 2. What principal will earn $1,000 simple interest at:
  {
    chapterId: 'y10-1',
    chapterTitle: 'Chapter 1: Consumer arithmetic',
    topicId: 'y10-1a',
    topicCode: '1A',
    topicTitle: 'Review of percentages',
    year: 'Year 10',
    type: 'short_answer',
    question: 'What principal will earn $1,000 simple interest at 4% p.a. over five years?',
    answer: '5000',
    solution: 'Principal = Interest / (Rate × Time) = $1,000 / (0.04 × 5) = $1,000 / 0.2 = $5,000',
    difficulty: 'medium',
    isManual: true
  },
  {
    chapterId: 'y10-1',
    chapterTitle: 'Chapter 1: Consumer arithmetic',
    topicId: 'y10-1a',
    topicCode: '1A',
    topicTitle: 'Review of percentages',
    year: 'Year 10',
    type: 'short_answer',
    question: 'What principal will earn $1,000 simple interest at 10% p.a. over three years?',
    answer: '3333.33',
    solution: 'Principal = Interest / (Rate × Time) = $1,000 / (0.10 × 3) = $1,000 / 0.3 ≈ $3,333.33',
    difficulty: 'medium',
    isManual: true
  },
  {
    chapterId: 'y10-1',
    chapterTitle: 'Chapter 1: Consumer arithmetic',
    topicId: 'y10-1a',
    topicCode: '1A',
    topicTitle: 'Review of percentages',
    year: 'Year 10',
    type: 'short_answer',
    question: 'What principal will earn $1,000 simple interest at 6% p.a. over eight years?',
    answer: '2083.33',
    solution: 'Principal = Interest / (Rate × Time) = $1,000 / (0.06 × 8) = $1,000 / 0.48 ≈ $2,083.33',
    difficulty: 'medium',
    isManual: true
  },
  {
    chapterId: 'y10-1',
    chapterTitle: 'Chapter 1: Consumer arithmetic',
    topicId: 'y10-1a',
    topicCode: '1A',
    topicTitle: 'Review of percentages',
    year: 'Year 10',
    type: 'short_answer',
    question: 'What principal will earn $1,000 simple interest at 2.5% p.a. over 10 years?',
    answer: '4000',
    solution: 'Principal = Interest / (Rate × Time) = $1,000 / (0.025 × 10) = $1,000 / 0.25 = $4,000',
    difficulty: 'medium',
    isManual: true
  },
  // 3. At what rate of simple interest will:
  {
    chapterId: 'y10-1',
    chapterTitle: 'Chapter 1: Consumer arithmetic',
    topicId: 'y10-1a',
    topicCode: '1A',
    topicTitle: 'Review of percentages',
    year: 'Year 10',
    type: 'short_answer',
    question: 'At what rate of simple interest will $10,000 grow to $14,000 over a five-year period? (Enter as percentage, e.g., 8)',
    answer: '8',
    solution: 'Interest = $14,000 - $10,000 = $4,000. Rate = Interest / (Principal × Time) = $4,000 / ($10,000 × 5) = 0.08 = 8%',
    difficulty: 'medium',
    isManual: true
  },
  {
    chapterId: 'y10-1',
    chapterTitle: 'Chapter 1: Consumer arithmetic',
    topicId: 'y10-1a',
    topicCode: '1A',
    topicTitle: 'Review of percentages',
    year: 'Year 10',
    type: 'short_answer',
    question: 'At what rate of simple interest will $8,000 grow to $10,000 over a two-year period? (Enter as percentage, e.g., 12.5)',
    answer: '12.5',
    solution: 'Interest = $10,000 - $8,000 = $2,000. Rate = Interest / (Principal × Time) = $2,000 / ($8,000 × 2) = 0.125 = 12.5%',
    difficulty: 'medium',
    isManual: true
  },
  {
    chapterId: 'y10-1',
    chapterTitle: 'Chapter 1: Consumer arithmetic',
    topicId: 'y10-1a',
    topicCode: '1A',
    topicTitle: 'Review of percentages',
    year: 'Year 10',
    type: 'short_answer',
    question: 'At what rate of simple interest will $1,500 grow to $2,000 over a three-year period? (Enter as percentage rounded to 2 decimal places)',
    answer: '11.11',
    solution: 'Interest = $2,000 - $1,500 = $500. Rate = Interest / (Principal × Time) = $500 / ($1,500 × 3) = $500 / $4,500 ≈ 0.1111 = 11.11%',
    difficulty: 'medium',
    isManual: true
  },
  // 4. If a woman borrows $750 to buy a television and agrees to pay back $870 in one year's time, what annual rate of simple interest is she being charged?
  {
    chapterId: 'y10-1',
    chapterTitle: 'Chapter 1: Consumer arithmetic',
    topicId: 'y10-1a',
    topicCode: '1A',
    topicTitle: 'Review of percentages',
    year: 'Year 10',
    type: 'short_answer',
    question: 'If a woman borrows $750 to buy a television and agrees to pay back $870 in one year\'s time, what annual rate of simple interest is she being charged? (Enter as percentage)',
    answer: '16',
    solution: 'Interest = $870 - $750 = $120. Rate = Interest / (Principal × Time) = $120 / ($750 × 1) = 0.16 = 16%',
    difficulty: 'medium',
    isManual: true
  },
  // 5. An investor bought an antique table for $6,000. He paid 5% as a deposit and borrowed the remainder from a bank for two years at 18% p.a. simple interest, payable monthly. How much interest does he have to pay each month?
  {
    chapterId: 'y10-1',
    chapterTitle: 'Chapter 1: Consumer arithmetic',
    topicId: 'y10-1a',
    topicCode: '1A',
    topicTitle: 'Review of percentages',
    year: 'Year 10',
    type: 'short_answer',
    question: 'An investor bought an antique table for $6,000. He paid 5% as a deposit and borrowed the remainder for two years at 18% p.a. simple interest. How much interest does he have to pay each month?',
    answer: '85.5',
    solution: 'Deposit = 0.05 × $6,000 = $300. Loan amount = $6,000 - $300 = $5,700. Total interest = $5,700 × 0.18 × 2 = $2,052. Interest per month = $2,052 / 24 months = $85.50',
    difficulty: 'hard',
    isManual: true
  },
  // 6. Find the new value if:
  {
    chapterId: 'y10-1',
    chapterTitle: 'Chapter 1: Consumer arithmetic',
    topicId: 'y10-1b',
    topicCode: '1B',
    topicTitle: 'Percentage increase and decrease',
    year: 'Year 10',
    type: 'short_answer',
    question: 'Find the new value if 60 is increased by 10%',
    answer: '66',
    solution: 'New value = 60 × (1 + 0.10) = 60 × 1.1 = 66',
    difficulty: 'easy',
    isManual: true
  },
  {
    chapterId: 'y10-1',
    chapterTitle: 'Chapter 1: Consumer arithmetic',
    topicId: 'y10-1b',
    topicCode: '1B',
    topicTitle: 'Percentage increase and decrease',
    year: 'Year 10',
    type: 'short_answer',
    question: 'Find the new value if 50 is increased by 150%',
    answer: '125',
    solution: 'New value = 50 × (1 + 1.50) = 50 × 2.5 = 125',
    difficulty: 'easy',
    isManual: true
  },
  {
    chapterId: 'y10-1',
    chapterTitle: 'Chapter 1: Consumer arithmetic',
    topicId: 'y10-1b',
    topicCode: '1B',
    topicTitle: 'Percentage increase and decrease',
    year: 'Year 10',
    type: 'short_answer',
    question: 'Find the new value if 80 is decreased by 20%',
    answer: '64',
    solution: 'New value = 80 × (1 - 0.20) = 80 × 0.8 = 64',
    difficulty: 'easy',
    isManual: true
  },
  {
    chapterId: 'y10-1',
    chapterTitle: 'Chapter 1: Consumer arithmetic',
    topicId: 'y10-1b',
    topicCode: '1B',
    topicTitle: 'Percentage increase and decrease',
    year: 'Year 10',
    type: 'short_answer',
    question: 'Find the new value if 200 is increased by 12 1/2%',
    answer: '225',
    solution: 'New value = 200 × (1 + 0.125) = 200 × 1.125 = 225',
    difficulty: 'easy',
    isManual: true
  },
  {
    chapterId: 'y10-1',
    chapterTitle: 'Chapter 1: Consumer arithmetic',
    topicId: 'y10-1b',
    topicCode: '1B',
    topicTitle: 'Percentage increase and decrease',
    year: 'Year 10',
    type: 'short_answer',
    question: 'Find the new value if 400 is decreased by 2.5%',
    answer: '390',
    solution: 'New value = 400 × (1 - 0.025) = 400 × 0.975 = 390',
    difficulty: 'easy',
    isManual: true
  },
  {
    chapterId: 'y10-1',
    chapterTitle: 'Chapter 1: Consumer arithmetic',
    topicId: 'y10-1b',
    topicCode: '1B',
    topicTitle: 'Percentage increase and decrease',
    year: 'Year 10',
    type: 'short_answer',
    question: 'Find the new value if 312 is decreased by 5 1/4%',
    answer: '295.62',
    solution: 'New value = 312 × (1 - 0.0525) = 312 × 0.9475 = 295.62',
    difficulty: 'medium',
    isManual: true
  },
  // 7. A clothing store offers a 15% discount on all its summer stock. How much will I need to pay in total if I buy a shirt with a marked price of $35, a pair of shorts with a marked price of $25, and a cotton sweater with a marked price of $50?
  {
    chapterId: 'y10-1',
    chapterTitle: 'Chapter 1: Consumer arithmetic',
    topicId: 'y10-1b',
    topicCode: '1B',
    topicTitle: 'Percentage increase and decrease',
    year: 'Year 10',
    type: 'multiple_choice',
    question: 'A clothing store offers a 15% discount. How much will I pay in total for a shirt ($35), shorts ($25), and a sweater ($50)?',
    options: ['$93.50', '$110.00', '$126.50', '$85.00'],
    answer: '$93.50',
    solution: 'Total marked price = $35 + $25 + $50 = $110. Discount = 0.15 × $110 = $16.50. Total to pay = $110 - $16.50 = $93.50',
    difficulty: 'medium',
    isManual: true
  },
  // 8. A general store in a country town adds 8% to the recommended retail price of all its stock due to transport costs. What will be the total charge if I buy a torch with a retail price of $9.50, a tin of coffee with a retail price of $11.30, and a hat with a retail price of $42.00?
  {
    chapterId: 'y10-1',
    chapterTitle: 'Chapter 1: Consumer arithmetic',
    topicId: 'y10-1b',
    topicCode: '1B',
    topicTitle: 'Percentage increase and decrease',
    year: 'Year 10',
    type: 'multiple_choice',
    question: 'A store adds 8% for transport. What is the total charge for a torch ($9.50), coffee ($11.30), and a hat ($42.00)?',
    options: ['$67.82', '$62.80', '$57.78', '$68.50'],
    answer: '$67.82',
    solution: 'Total retail price = $9.50 + $11.30 + $42.00 = $62.80. Transport cost = 0.08 × $62.80 = $5.024. Total charge = $62.80 + $5.02 = $67.82',
    difficulty: 'medium',
    isManual: true
  }
];

export const importYear10Ch1Questions = async () => {
  console.log('Starting Year 10 Chapter 1 question import...');
  let importedCount = 0;
  
  for (const q of questions) {
    try {
      // Basic duplicate check
      const qRef = collection(db, 'questions');
      const dupQuery = query(qRef, where('question', '==', q.question));
      const dupSnap = await getDocs(dupQuery);
      
      if (dupSnap.empty) {
        await addDoc(collection(db, 'questions'), q);
        importedCount++;
      }
    } catch (error) {
      console.error('Error importing question:', error);
    }
  }
  
  console.log(`Successfully imported ${importedCount} questions.`);
  return importedCount;
};
