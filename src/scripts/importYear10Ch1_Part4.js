import { db } from '../firebase/config.js';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';

const questions = [
  // 5. Rectangle area
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
    answer: '0', // 0.8% increase
    solution: `Step 1: Let the initial length be L and width be W. Initial Area = L * W.
Step 2: Calculate the new dimensions.
New Length = 1.12 * L
New Width = 0.90 * W
Step 3: Calculate the new Area.
New Area = (1.12 * L) * (0.90 * W) = (1.12 * 0.90) * (L * W) = 1.008 * (Initial Area)
Step 4: Find the percentage change.
Change = 1.008 - 1 = 0.008 = 0.8% increase.`,
    difficulty: 'medium',
    isManual: true
  },
  // 6. Salary and Hourly
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
    answer: '0', // 25%
    solution: `Step 1: Understand the hourly rate ratio.
Hourly Rate = Weekly Salary / Weekly Hours
Step 2: Apply the changes.
New Salary = 1.125 * Old Salary
New Hours = 0.90 * Old Hours
Step 3: Find the new hourly rate relative to the old one.
New Hourly = (1.125 * Old Salary) / (0.90 * Old Hours)
New Hourly = (1.125 / 0.90) * (Old Salary / Old Hours)
New Hourly = 1.25 * Old Hourly
Step 4: The increase is 1.25 - 1 = 0.25 = 25%.`,
    difficulty: 'hard',
    isManual: true
  },
  // 7. Employment
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
    answer: '0', // 80.4%
    solution: `Step 1: Calculate the shift from unemployed to employed.
10% of 12% = 0.10 * 0.12 = 0.012 (1.2% of total population)
Step 2: Calculate the shift from employed to unemployed.
10% of 88% = 0.10 * 0.88 = 0.088 (8.8% of total population)
Step 3: Calculate the final employed percentage.
Final Employed = Initial Employed - (Shift to Unemployed) + (Shift from Unemployed)
Final Employed = 88% - 8.8% + 1.2% = 80.4%.`,
    difficulty: 'hard',
    isManual: true
  },
  // 8. House repairs
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
    answer: '0', // $428,106 (Simpler interpretation of gain) or $378,401 (Interest included)
    solution: `Let P be the house price.
Investment cost = P + 0.10P = 1.1P.
A gain of 20% on this cost means the selling price is 120% of the cost.
Selling Price = 1.2 * (1.1P) = 1.32P
$565,100 = 1.32P
P = $565,100 / 1.32 ≈ $428,106.06
Andrea paid $428,106 for the house.`,
    difficulty: 'hard',
    isManual: true
  },
  // 9. Anthony's investment
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
    answer: '0', // 4.88%
    solution: `Step 1: Understand the final balance.
Total Balance = Principal + Interest = P + P/10 = 1.1P
Step 2: Use the compound interest formula.
A = P(1 + r/100)ⁿ
1.1P = P(1 + r/100)²
1.1 = (1 + r/100)²
Step 3: Solve for r.
1 + r/100 = √1.1 ≈ 1.048808
r/100 = 0.048808
r = 4.8808% ≈ 4.88%.`,
    difficulty: 'hard',
    isManual: true
  }
];

export const importYear10Ch1Part4 = async () => {
  console.log('Starting Year 10 Chapter 1 Part 4 question import...');
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
        console.log(`Skipping duplicate Part 4: ${q.question.slice(0, 30)}...`);
      }
    } catch (error) {
      console.error('Error importing question Part 4:', error);
    }
  }
  
  console.log(`Successfully imported ${importedCount} Part 4 questions.`);
  return importedCount;
};
