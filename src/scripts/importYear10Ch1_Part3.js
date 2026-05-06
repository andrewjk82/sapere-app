import { db } from '../firebase/config.js';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';

const questions = [
  // 1. Waleed's portfolio
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
    solution: `Step 1: Calculate the value after 4 years of appreciation.
V₄ = P(1 + r)⁴ = $38,000(1 + 0.08)⁴ ≈ $51,698.43
Step 2: Calculate the value after 4 years of depreciation starting from V₄.
V₈ = V₄(1 - r)⁴ = $51,698.43(1 - 0.08)⁴ ≈ $51,698.43(0.92)⁴ ≈ $37,014.28
Final Value: $37,014 (to the nearest dollar).`,
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
    answer: '0', // -0.32%
    solution: `Step 1: Calculate the total percentage change.
Final Value = $37,014.28
Initial Value = $38,000
Total Change = ($37,014.28 - $38,000) / $38,000 ≈ -0.02594 (-2.59%)
Step 2: Divide by the number of years (8) for the simple yearly rate.
Rate per year = -2.59% / 8 ≈ -0.324%
The equivalent simple rate is -0.32% per year.`,
    difficulty: 'hard',
    isManual: true
  },
  // 2. Investment packages
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
    answer: '0', // Bank B
    solution: `To compare, we look at the multipliers (1 + r)ⁿ:
Bank A: (1.065)⁶ ≈ 1.4591 (45.91% interest)
Bank B: (1.053)⁸ ≈ 1.5120 (51.20% interest)
Bank B yields greater interest because its cumulative multiplier (1.512) is higher than Bank A's (1.459).`,
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
    solution: `Step 1: Find the amount in Bank A.
Amount A = $10,000 * (1.065)⁶ ≈ $14,591.42
Step 2: Set up the equation for Bank B.
P * (1.053)⁸ = $14,591.42
P * 1.5120 ≈ $14,591.42
P = $14,591.42 / 1.5120 ≈ $9,650.41
Initial investment required for Bank B: $9,650.`,
    difficulty: 'hard',
    isManual: true
  },
  // 3. Grapes Shop
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
    answer: '0', // $50/n
    solution: `Cost = Total Price / Quantity
Price per kg = $50 / n kg
So the cost of 1 kg is 50/n dollars.`,
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
    answer: '0', // $50.51
    solution: `Step 1: Define prices relative to HP price (P = 50/n).
HP = 0.9 * AS => AS = P / 0.9 = (50/n) / 0.9 ≈ 55.56/n
HP = 1.1 * C => C = P / 1.1 = (50/n) / 1.1 ≈ 45.45/n
Step 2: Calculate cost for (n/2) kg from each.
Cost = (n/2 * 55.56/n) + (n/2 * 45.45/n)
Cost = (55.56 / 2) + (45.45 / 2) = 27.78 + 22.73 = $50.51`,
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
    answer: '0', // $47.98
    solution: `Using prices: AS = (50/n)/0.9 and C = (50/n)/1.1
Cost = (n/4 * AS) + (3n/4 * C)
Cost = (1/4 * 50/0.9) + (3/4 * 50/1.1)
Cost = (12.5 / 0.9) + (37.5 / 1.1)
Cost ≈ 13.89 + 34.09 = $47.98`,
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
    answer: '0', // $53.03
    solution: `Using prices: AS = (50/n)/0.9 and C = (50/n)/1.1
Cost = (3n/4 * AS) + (n/4 * C)
Cost = (3/4 * 50/0.9) + (1/4 * 50/1.1)
Cost = (37.5 / 0.9) + (12.5 / 1.1)
Cost ≈ 41.67 + 11.36 = $53.03`,
    difficulty: 'hard',
    isManual: true
  },
  // 4. Population restoration
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
    answer: '0', // 12.36%
    solution: `Step 1: Define initial population as 100.
After 11% decrease, population = 100 * (1 - 0.11) = 89.
Step 2: Find the increase required to get back to 100 from 89.
89 * (1 + x) = 100
1 + x = 100 / 89 ≈ 1.12359
x ≈ 0.1236 = 12.36%
The population must increase by 12.36%.`,
    difficulty: 'hard',
    isManual: true
  }
];

export const importYear10Ch1Part3 = async () => {
  console.log('Starting Year 10 Chapter 1 Part 3 question import...');
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
        console.log(`Skipping duplicate Part 3: ${q.question.slice(0, 30)}...`);
      }
    } catch (error) {
      console.error('Error importing question Part 3:', error);
    }
  }
  
  console.log(`Successfully imported ${importedCount} Part 3 questions.`);
  return importedCount;
};
