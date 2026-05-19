import { db } from '../firebase/config.js';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';

const questions = [
  // 9. Final value
  {
    chapterId: 'y10-1',
    chapterTitle: 'Chapter 1: Consumer arithmetic',
    topicId: 'y10-1b',
    topicCode: '1B',
    topicTitle: 'Percentage increase and decrease',
    year: 'Year 10',
    type: 'short_answer',
    question: 'What is the final value if 90 is increased by 10%?',
    answer: '99',
    solution: '90 + (0.10 * 90) = 90 + 9 = 99',
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
    question: 'What is the final value if 120 is decreased by 20%?',
    answer: '96',
    solution: '120 - (0.20 * 120) = 120 - 24 = 96',
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
    question: 'What is the final value if 96 is increased by 4%?',
    answer: '99.84',
    solution: '96 * 1.04 = 99.84',
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
    question: 'What is the final value if 108 is decreased by 8%?',
    answer: '99.36',
    solution: '108 * 0.92 = 99.36',
    difficulty: 'easy',
    isManual: true
  },
  // 10. Computer store price reduction
  {
    chapterId: 'y10-1',
    chapterTitle: 'Chapter 1: Consumer arithmetic',
    topicId: 'y10-1b',
    topicCode: '1B',
    topicTitle: 'Percentage increase and decrease',
    year: 'Year 10',
    type: 'short_answer',
    question: 'A computer store reduces the price of a $2500 computer by 10% each day. What is the sale price after the first reduction?',
    answer: '2250',
    solution: 'First reduction: $2500 * 0.90 = $2250',
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
    question: 'A computer store reduces the price of a $2500 computer by 10% each day. What is the sale price after the second reduction?',
    answer: '2025',
    solution: 'Second reduction: $2250 * 0.90 = $2025',
    difficulty: 'medium',
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
    question: 'A computer store reduces the price of a $2500 computer by 10% each day. What is the sale price after the third reduction?',
    answer: '1822.50',
    solution: 'Third reduction: $2025 * 0.90 = $1822.50',
    difficulty: 'medium',
    isManual: true
  },
  {
    chapterId: 'y10-1',
    chapterTitle: 'Chapter 1: Consumer arithmetic',
    topicId: 'y10-1b',
    topicCode: '1B',
    topicTitle: 'Percentage increase and decrease',
    year: 'Year 10',
    type: 'multiple_choice',
    question: 'A computer store reduces the price of a computer by 10% each day. What single percentage decrease has the same effect as three 10% reductions?',
    options: ['27.1%', '30%', '25%', '33.1%'],
    answer: '0', // 27.1%
    solution: 'Combined effect = 1 - (0.90 * 0.90 * 0.90) = 1 - 0.729 = 0.271 = 27.1%',
    difficulty: 'hard',
    isManual: true
  },
  // 11. Manufacturer suits
  {
    chapterId: 'y10-1',
    chapterTitle: 'Chapter 1: Consumer arithmetic',
    topicId: 'y10-1b',
    topicCode: '1B',
    topicTitle: 'Percentage increase and decrease',
    year: 'Year 10',
    type: 'short_answer',
    question: 'A suit costs $250 to produce. The manufacturer sells it with a 20% profit. The store owner then increases the cost by a further 30%. For what price does the store owner sell the suit?',
    answer: '390',
    solution: 'Manufacturer price = $250 * 1.20 = $300. Store price = $300 * 1.30 = $390',
    difficulty: 'medium',
    isManual: true
  },
  {
    chapterId: 'y10-1',
    chapterTitle: 'Chapter 1: Consumer arithmetic',
    topicId: 'y10-1b',
    topicCode: '1B',
    topicTitle: 'Percentage increase and decrease',
    year: 'Year 10',
    type: 'multiple_choice',
    question: 'A suit cost $250 to produce. After a 20% profit by the manufacturer and a further 30% increase by the store owner, what is the total percentage increase in the cost of the suit?',
    options: ['56%', '50%', '46%', '60%'],
    answer: '0', // 56%
    solution: 'Total multiplier = 1.20 * 1.30 = 1.56. Increase = 56%',
    difficulty: 'hard',
    isManual: true
  },
  // 12. Population increase
  {
    chapterId: 'y10-1',
    chapterTitle: 'Chapter 1: Consumer arithmetic',
    topicId: 'y10-1c',
    topicCode: '1C',
    topicTitle: 'Repeated increases and decreases',
    year: 'Year 10',
    type: 'multiple_choice',
    question: 'The population of a country increased by 3%, 2.6% and 1.8% in three successive years. What was the total percentage increase over the three-year period?',
    options: ['7.58%', '7.4%', '8.2%', '7.6%'],
    answer: '0', // 7.58%
    solution: 'Total multiplier = 1.03 * 1.026 * 1.018 ≈ 1.0758. Total increase = 7.58%',
    difficulty: 'hard',
    isManual: true
  },
  // 13. Compound Balance
  {
    chapterId: 'y10-1',
    chapterTitle: 'Chapter 1: Consumer arithmetic',
    topicId: 'y10-1d',
    topicCode: '1D',
    topicTitle: 'Compound interest',
    year: 'Year 10',
    type: 'short_answer',
    question: 'Find the balance if $2000 is invested for 10 years at 8% p.a. compounded annually. (Round to 2 decimal places)',
    answer: '4317.85',
    solution: 'Balance = $2000 * (1 + 0.08)^10 ≈ $4317.85',
    difficulty: 'medium',
    isManual: true
  },
  {
    chapterId: 'y10-1',
    chapterTitle: 'Chapter 1: Consumer arithmetic',
    topicId: 'y10-1d',
    topicCode: '1D',
    topicTitle: 'Compound interest',
    year: 'Year 10',
    type: 'short_answer',
    question: 'Find the balance if $5000 is invested for 6 years at 1% per month compound interest. (Round to 2 decimal places)',
    answer: '10235.50',
    solution: 'Total months = 6 * 12 = 72. Balance = $5000 * (1 + 0.01)^72 ≈ $10235.50',
    difficulty: 'hard',
    isManual: true
  },
  {
    chapterId: 'y10-1',
    chapterTitle: 'Chapter 1: Consumer arithmetic',
    topicId: 'y10-1d',
    topicCode: '1D',
    topicTitle: 'Compound interest',
    year: 'Year 10',
    type: 'short_answer',
    question: 'Find the balance if $500 is invested for 40 years at 3% per six-month period compound interest. (Round to 2 decimal places)',
    answer: '5281.13',
    solution: 'Total periods = 40 * 2 = 80. Balance = $500 * (1 + 0.03)^80 ≈ $5281.13',
    difficulty: 'hard',
    isManual: true
  },
  // 14. Machinery depreciation
  {
    chapterId: 'y10-1',
    chapterTitle: 'Chapter 1: Consumer arithmetic',
    topicId: 'y10-1e',
    topicCode: '1E',
    topicTitle: 'Compound depreciation',
    year: 'Year 10',
    type: 'short_answer',
    question: 'A piece of machinery starts at $25,000 and depreciates by 8% each year. Find its value after 3 years. (Round to nearest dollar)',
    answer: '19467',
    solution: 'Value = $25000 * (0.92)^3 ≈ $19467.20',
    difficulty: 'medium',
    isManual: true
  },
  {
    chapterId: 'y10-1',
    chapterTitle: 'Chapter 1: Consumer arithmetic',
    topicId: 'y10-1e',
    topicCode: '1E',
    topicTitle: 'Compound depreciation',
    year: 'Year 10',
    type: 'short_answer',
    question: 'A piece of machinery starts at $25,000 and depreciates by 8% each year. Find its value after 10 years. (Round to nearest dollar)',
    answer: '10860',
    solution: 'Value = $25000 * (0.92)^10 ≈ $10859.71',
    difficulty: 'medium',
    isManual: true
  },
  {
    chapterId: 'y10-1',
    chapterTitle: 'Chapter 1: Consumer arithmetic',
    topicId: 'y10-1e',
    topicCode: '1E',
    topicTitle: 'Compound depreciation',
    year: 'Year 10',
    type: 'multiple_choice',
    question: 'A piece of machinery with initial value $V_0$ depreciates by 8% each year. Which formula gives the value V after n years?',
    options: ['V = V₀(0.92)ⁿ', 'V = V₀(1.08)ⁿ', 'V = V₀(0.08)ⁿ', 'V = V₀ - (0.08)ⁿ'],
    answer: '0', // V = V0(0.92)^n
    solution: 'A reduction of 8% means 92% remains. So V = V0 * (1 - 0.08)^n = V0 * (0.92)^n',
    difficulty: 'hard',
    isManual: true
  },
  // 15. Car depreciation
  {
    chapterId: 'y10-1',
    chapterTitle: 'Chapter 1: Consumer arithmetic',
    topicId: 'y10-1e',
    topicCode: '1E',
    topicTitle: 'Compound depreciation',
    year: 'Year 10',
    type: 'short_answer',
    question: 'A new car is valued at $26,000 and depreciates by 12% each year. Find its depreciated value after 5 years. (Round to nearest dollar)',
    answer: '13720',
    solution: 'Value = $26000 * (0.88)^5 ≈ $13720.21',
    difficulty: 'medium',
    isManual: true
  },
  {
    chapterId: 'y10-1',
    chapterTitle: 'Chapter 1: Consumer arithmetic',
    topicId: 'y10-1e',
    topicCode: '1E',
    topicTitle: 'Compound depreciation',
    year: 'Year 10',
    type: 'multiple_choice',
    question: 'A car is valued at $26,000 and depreciates by 12% each year. How many years does it take for its value to fall below $11,000?',
    options: ['7 years', '6 years', '8 years', '10 years'],
    answer: '0', // 7 years
    solution: 'V(6) = 26000*0.88^6 ≈ 12073. V(7) = 26000*0.88^7 ≈ 10625. So 7 years.',
    difficulty: 'hard',
    isManual: true
  },
  // 16. Jo car initial value
  {
    chapterId: 'y10-1',
    chapterTitle: 'Chapter 1: Consumer arithmetic',
    topicId: 'y10-1e',
    topicCode: '1E',
    topicTitle: 'Compound depreciation',
    year: 'Year 10',
    type: 'short_answer',
    question: 'Jo bought a four-year old car for $20,880.25. If the car has a depreciation rate of 15% p.a., what was the value of the car when it was brand new?',
    answer: '40000',
    solution: 'Value = P * (1 - r)^n. $20880.25 = P * (0.85)^4. P = $20880.25 / (0.85^4) = $20880.25 / 0.52200625 = $40,000',
    difficulty: 'hard',
    isManual: true
  }
];

export const importYear10Ch1Part2 = async () => {
  console.log('Starting Year 10 Chapter 1 Part 2 question import...');
  let importedCount = 0;
  
  for (const q of questions) {
    try {
      const qRef = collection(db, 'questions');
      const dupQuery = query(qRef, where('question', '==', q.question));
      const dupSnap = await getDocs(dupQuery);
      
      if (dupSnap.empty) {
        await addDoc(collection(db, 'questions'), q);
        importedCount++;
      } else {
        console.log(`Skipping duplicate: ${q.question.slice(0, 30)}...`);
      }
    } catch (error) {
      console.error('Error importing question:', error);
    }
  }
  
  console.log(`Successfully imported ${importedCount} Part 2 questions.`);
  return importedCount;
};
