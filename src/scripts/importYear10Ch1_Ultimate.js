import { db } from '../firebase/config.js';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';

export const allQuestions = [
  // PART 2 QUESTIONS (from first image)
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
  },

  // PART 3 QUESTIONS (from second image)
  {
    chapterId: 'y10-1',
    chapterTitle: 'Chapter 1: Consumer arithmetic',
    topicId: 'y10-1c',
    topicCode: '1C',
    topicTitle: 'Repeated increases and decreases',
    year: 'Year 10',
    type: 'short_answer',
    question: 'Waleed owns a portfolio of shares purchased for $38,000. For the first four years, it appreciated at 8% p.a. For the next four years, it depreciated at 8% p.a. Calculate the value of the portfolio at the end of these eight years (to the nearest dollar).',
    answer: '37014',
    solution: 'Step 1: Calculate the value after 4 years of appreciation.\nV₄ = P(1 + r)⁴ = $38,000(1 + 0.08)⁴ ≈ $51,698.43\nStep 2: Calculate the value after 4 years of depreciation starting from V₄.\nV₈ = V₄(1 - r)⁴ = $51,698.43(1 - 0.08)⁴ ≈ $37,014.28\nFinal Value: $37,014.',
    difficulty: 'medium',
    isManual: true
  },
  {
    chapterId: 'y10-1',
    chapterTitle: 'Chapter 1: Consumer arithmetic',
    topicId: 'y10-1c',
    topicCode: '1C',
    topicTitle: 'Repeated increases and decreases',
    year: 'Year 10',
    type: 'multiple_choice',
    question: 'Waleed\'s $38,000 portfolio appreciated at 8% p.a. for 4 years, then depreciated at 8% p.a. for 4 years. What was the equivalent simple interest rate of change per year over these eight years? (Round to 2 decimal places)',
    options: ['-0.32%', '-0.26%', '-0.50%', '0.00%'],
    answer: '0',
    solution: 'Total Change = ($37,014.28 - $38,000) / $38,000 ≈ -0.02594 (-2.59%)\nRate per year = -2.59% / 8 ≈ -0.324%',
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
    type: 'multiple_choice',
    question: 'Two banks offer investment packages:\nBank A: 6.5% p.a. compounded annually for six years\nBank B: 5.3% p.a. compounded annually for eight years\nWhich bank\'s package will yield the greater interest?',
    options: ['Bank B', 'Bank A', 'They yield the same', 'Not enough information'],
    answer: '0',
    solution: 'Bank A: (1.065)⁶ ≈ 1.4591\nBank B: (1.053)⁸ ≈ 1.5120\nBank B yields more interest.',
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
    question: 'A customer invests $10,000 in Bank A (6.5% p.a. for 6 years). How much would she have to invest with Bank B (5.3% p.a. for 8 years) to produce the same final amount? (Round to nearest dollar)',
    answer: '9650',
    solution: 'Amount A = $10,000 * (1.065)⁶ ≈ $14,591.42\nP * (1.053)⁸ = $14,591.42\nP ≈ $14,591.42 / 1.5120 ≈ $9,650',
    difficulty: 'hard',
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
    question: 'A customer buys $50 worth of grapes from the Happy Pumpkin fruit shop and obtains n kilograms. What is the cost, in terms of n, of 1 kg of grapes from the Happy Pumpkin shop?',
    options: ['$50/n', '$n/50', '$50n', '$50 - n'],
    answer: '0',
    solution: 'Price per kg = Total Cost / Total Quantity = $50 / n',
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
    type: 'multiple_choice',
    question: 'The Happy Pumpkin (HP) sells grapes 10% cheaper than Akrivo Stafili (AS) and 10% more expensive than Costa (C). A customer buys $50 worth of grapes (n kg) from HP. How much would he pay for n/2 kg from AS and n/2 kg from C?',
    options: ['$50.51', '$50.00', '$49.49', '$51.10'],
    answer: '0',
    solution: 'AS = (50/n)/0.9 ≈ 55.56/n. C = (50/n)/1.1 ≈ 45.45/n.\nCost = (n/2 * 55.56/n) + (n/2 * 45.45/n) = 27.78 + 22.73 = $50.51',
    difficulty: 'hard',
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
    question: 'The Happy Pumpkin (HP) sells grapes 10% cheaper than Akrivo Stafili (AS) and 10% more expensive than Costa (C). If a customer buys n/4 kg from AS and 3n/4 kg from C, how much does he pay?',
    options: ['$47.98', '$50.00', '$52.02', '$45.00'],
    answer: '0',
    solution: 'Cost = (1/4 * 50/0.9) + (3/4 * 50/1.1) ≈ 13.89 + 34.09 = $47.98',
    difficulty: 'hard',
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
    question: 'The Happy Pumpkin (HP) sells grapes 10% cheaper than Akrivo Stafili (AS) and 10% more expensive than Costa (C). If a customer buys 3n/4 kg from AS and n/4 kg from C, how much does he pay?',
    options: ['$53.03', '$50.00', '$55.00', '$48.50'],
    answer: '0',
    solution: 'Cost = (3/4 * 50/0.9) + (1/4 * 50/1.1) ≈ 41.67 + 11.36 = $53.03',
    difficulty: 'hard',
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
    question: 'The population of a town decreases by 11% during 2012. What percentage increase is necessary during 2013 for the population to be restored to its level immediately before 2012?',
    options: ['12.36%', '11.00%', '13.11%', '10.89%'],
    answer: '0',
    solution: '100 * 0.89 = 89. Restoration: 89 * (1+x) = 100. 1+x = 100/89 ≈ 1.1236. Increase = 12.36%',
    difficulty: 'hard',
    isManual: true
  },

  // PART 4 QUESTIONS (from third image)
  {
    chapterId: 'y10-1',
    chapterTitle: 'Chapter 1: Consumer arithmetic',
    topicId: 'y10-1b',
    topicCode: '1B',
    topicTitle: 'Percentage increase and decrease',
    year: 'Year 10',
    type: 'multiple_choice',
    question: 'The length of a rectangle is increased by 12% and the width is decreased by 10%. What is the percentage change in the area?',
    options: ['0.8% increase', '2% increase', '1.2% decrease', '0.8% decrease'],
    answer: '0',
    solution: 'Area Change = 1.12 * 0.90 = 1.008. Increase = 0.8%.',
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
    question: 'A man earns $2440 for a 44-hour week. His weekly salary is increased by 12.5% and his hours are reduced by 10%. Find the percentage increase in his new hourly salary.',
    options: ['25%', '22.5%', '15%', '20%'],
    answer: '0',
    solution: 'New Hourly = (1.125 / 0.90) * Old Hourly = 1.25 * Old Hourly. Increase = 25%.',
    difficulty: 'hard',
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
    question: 'In 2011, 12% of a population was unemployed and 88% was employed. In 2012, 10% of the unemployed became employed, and 10% of the employed became unemployed. What percentage was employed at the end of 2012?',
    options: ['80.4%', '88%', '79.2%', '81.6%'],
    answer: '0',
    solution: 'Final Employed = 88% - (10% of 88%) + (10% of 12%) = 88 - 8.8 + 1.2 = 80.4%.',
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
    type: 'multiple_choice',
    question: 'Andrea buys a house (Price P) and spends 10% of P on repairs. She takes a loan for the total cost at 5% p.a. compound interest. 3 years later, she sells for $565,100 and gains 20% on the whole investment cost (including repairs). How much did she pay for the house (P)?',
    options: ['$428,106', '$378,401', '$400,000', '$470,917'],
    answer: '0',
    solution: 'Selling Price = 1.2 * (1.1P) = 1.32P. $565,100 = 1.32P. P = $565,100 / 1.32 ≈ $428,106.',
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
    type: 'multiple_choice',
    question: 'Anthony invests $P for 2 years at r% p.a. compound interest. At the end, he receives his original $P and $P/10 in interest. Find r (correct to two decimal places).',
    options: ['4.88%', '5.00%', '4.50%', '5.12%'],
    answer: '0',
    solution: '1.1P = P(1 + r/100)². √1.1 ≈ 1.0488. r ≈ 4.88%.',
    difficulty: 'hard',
    isManual: true
  }
];

export const importAllYear10Extra = async () => {
  console.log('Starting Ultimate Year 10 Chapter 1 question import...');
  let importedCount = 0;
  
  for (const q of allQuestions) {
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
  
  console.log(`Successfully imported ${importedCount} total questions.`);
  return importedCount;
};
