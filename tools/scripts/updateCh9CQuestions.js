import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// ────────────────────────────────────────────────────────────────────────────
// Ch9C: Year 12 Advanced — Quartiles and interquartile range (MCQ)
// All options mapped to flat string arrays.
// All workingOut strings fully wrapped in \\( ... \\).
// Full explanation enhancement applying: Given/Strategy (Step 1),
// Why/What/Mistake/Connection, and final meaning contextual check.
// ────────────────────────────────────────────────────────────────────────────

const updates = [
  // 1. abb2020-q11bi
  {
    id: 'abb2020-q11bi',
    opts: ['50%', '25%', '75%', '100%'],
    a: 0,
    solutionSteps: [
      {
        explanation: 'We begin by summarizing the given boxplot parameters and declaring our strategy. The median height of the Year 11 students is given as 160 cm, and we need to determine the percentage of students falling below this height threshold. Our strategy relies on using the fundamental definition of the median in a box-and-whisker plot.',
        workingOut: '\\(\\text{Given: Median} = 160\\\\text{ cm}, \\\\quad \\\\text{Minimum} = 150\\\\text{ cm}\\)'
      },
      {
        explanation: 'We apply the mathematical definition of the median. The median is the second quartile (Q2), which by definition splits any ordered dataset exactly in half. A common mistake here is to assume that the distance from the minimum (150 cm) to the median affects this percentage — regardless of how spread out the boxplot is, the proportion below the median line remains constant.',
        workingOut: '\\(\\text{Median (Q2)} \\\\Rightarrow 50\\\\% \\\\text{ of data below, } 50\\\\% \\\\text{ above}\\)'
      },
      {
        explanation: 'Finally, we state our conclusion for this specific question. Since the median line on the boxplot is at 160 cm, exactly half of the student population falls below this value. Thus, the percentage of Year 11 students with heights below 160 cm is exactly 50%.',
        workingOut: '\\(\\text{Percentage below 160 cm} = 50\\\\%\\)'
      }
    ]
  },
  // 2. abb2020-q11bii
  {
    id: 'abb2020-q11bii',
    opts: ['100', '140', '75', '120'],
    a: 0,
    solutionSteps: [
      {
        explanation: 'We start by extracting the given proportions and quantities to lay out our calculation strategy. We are given that 25% of Year 11 students are taller than 175 cm, and the total Year 11 cohort is 140. We also know that 35% of Year 12 students are taller than 175 cm, and this absolute number is identical to that of Year 11. Our strategy is to calculate the absolute count for Year 11 first, set it equal to the Year 12 count, and solve for the total Year 12 population.',
        workingOut: '\\(\\text{Year 11 Total} = 140, \\\\quad \\\\text{Pct}_{11} = 25\\\\%, \\\\quad \\\\text{Pct}_{12} = 35\\\\%\\)'
      },
      {
        explanation: 'We calculate the absolute number of Year 11 students taller than 175 cm. We do this by multiplying the total number of students by 25% (or 0.25). A common mistake is to invert the percentage — remember that 25% corresponds to one-quarter of the cohort.',
        workingOut: '\\(140 \\\\times 0.25 = 35\\\\text{ students}\\)'
      },
      {
        explanation: 'We set up the equation for Year 12. Since the number of students above 175 cm is the same, Year 12 also has exactly 35 students in this height category. These 35 students represent 35% of the total Year 12 cohort. Let N be the total number of Year 12 students.',
        workingOut: '\\(0.35 \\\\times N = 35\\)'
      },
      {
        explanation: 'Finally, we solve for N by dividing both sides of the equation by 0.35. This yields the total number of Year 12 students, which is 100. This is a realistic cohort size, and we can check that 35% of 100 is indeed 35, confirming our calculation is correct.',
        workingOut: '\\(N = \\\\dfrac{35}{0.35} = 100\\\\text{ students}\\)'
      }
    ]
  },
  // 3. asc2020-mc4
  {
    id: 'asc2020-mc4',
    opts: ['47', '32', '37', '45'],
    a: 0,
    solutionSteps: [
      {
        explanation: 'We begin by identifying the given quartile values and setting up our outlier detection strategy. We are given a lower quartile of 22 and an upper quartile of 32. We want to find the maximum possible value in the data set that is not considered an outlier. Our strategy is to first compute the interquartile range (IQR) and then determine the upper outlier fence.',
        workingOut: '\\(\\text{Given: } Q_1 = 22, \\\\quad Q_3 = 32\\)'
      },
      {
        explanation: 'We calculate the interquartile range (IQR) by subtracting the lower quartile from the upper quartile. The IQR represents the spread of the middle 50% of the dataset. A common mistake here is to subtract in the wrong order, which would result in a negative spread.',
        workingOut: '\\(\\text{IQR} = Q_3 - Q_1 = 32 - 22 = 10\\)'
      },
      {
        explanation: 'Next, we compute the upper fence for outliers. According to the outlier rule, any data point larger than Q3 plus 1.5 times the IQR is classified as an outlier. Therefore, the boundary of the upper fence represents the largest possible non-outlier value. A frequent mistake is using Q1 instead of Q3 as the baseline for this upper limit.',
        workingOut: '\\(\\text{Upper Fence} = Q_3 + 1.5 \\\\times \\\\text{IQR} = 32 + 1.5(10) = 47\\)'
      },
      {
        explanation: 'Finally, we conclude our analysis. Since the upper fence is 47, any value up to and including 47 is not an outlier, while anything greater than 47 is an outlier. Therefore, the maximum possible non-outlier value is 47. In context, this boundary defines the maximum length of the right whisker in a standard boxplot representation.',
        workingOut: '\\(\\text{Max non-outlier value} = 47\\)'
      }
    ]
  },
  // 4. asc2020-mc4v
  {
    id: 'asc2020-mc4v',
    opts: ['45', '27', '33', '42'],
    a: 0,
    solutionSteps: [
      {
        explanation: 'We begin by stating the given quartile values and defining our path to find the maximum possible non-outlier value. We have a lower quartile of 15 and an upper quartile of 27. Our plan is to calculate the interquartile range (IQR) and then construct the upper outlier threshold (upper fence).',
        workingOut: '\\(\\text{Given: } Q_1 = 15, \\\\quad Q_3 = 27\\)'
      },
      {
        explanation: 'We calculate the interquartile range (IQR) by finding the difference between the upper and lower quartiles. The IQR is the foundation for defining outlier fences. A common error is using the median instead of the quartiles to find this range.',
        workingOut: '\\(\\text{IQR} = Q_3 - Q_1 = 27 - 15 = 12\\)'
      },
      {
        explanation: 'We find the upper fence value. The standard formula is the upper quartile plus 1.5 times the IQR. This defines the limit beyond which any value is statistically flagged as anomalous (an outlier). A common mistake is multiplying the IQR by 1.0 or 2.0 instead of the standard 1.5 factor.',
        workingOut: '\\(\\text{Upper Fence} = Q_3 + 1.5 \\\\times \\\\text{IQR} = 27 + 1.5(12) = 45\\)'
      },
      {
        explanation: 'Finally, we state the maximum value. Any data value up to 45 is not an outlier, so the maximum possible value without outliers is 45. This represents the upper boundary of the dataset when no outliers are plotted as separate points on a boxplot.',
        workingOut: '\\(\\text{Max non-outlier value} = 45\\)'
      }
    ]
  },
  // 5. car2020-mc7
  {
    id: 'car2020-mc7',
    opts: [
      'The largest possible range is 2 times the IQR',
      'The largest possible range is 3 times the IQR',
      'The largest possible range is 4 times the IQR',
      'The largest possible range is 5 times the IQR'
    ],
    a: 2,
    solutionSteps: [
      {
        explanation: 'We begin by setting up the relationship between range, quartiles, and the outlier rules. In any dataset with no outliers, all values must fall within the lower and upper fences. Our strategy is to express the maximum possible range as the difference between these two theoretical fences, writing the equation in terms of the quartiles and the interquartile range (IQR).',
        workingOut: '\\(\\text{Given: No outliers} \\\\Rightarrow \\\\text{Minimum} \\\\geq Q_1 - 1.5\\\\,\\\\text{IQR}, \\\\quad \\\\text{Maximum} \\\\leq Q_3 + 1.5\\\\,\\\\text{IQR}\\)'
      },
      {
        explanation: 'We calculate the maximum possible range by finding the difference between the absolute upper limit (upper fence) and the absolute lower limit (lower fence). A common mistake is forgetting that both the lower and upper ends can expand simultaneously by 1.5 times the IQR.',
        workingOut: '\\(\\text{Max range} = (Q_3 + 1.5\\\\,\\\\text{IQR}) - (Q_1 - 1.5\\\\,\\\\text{IQR})\\)'
      },
      {
        explanation: 'We simplify the algebraic expression. Grouping the quartile terms and the IQR terms together allows us to see how they combine. Be careful with the double negative when subtracting the lower fence: subtracting negative 1.5 IQR becomes adding 1.5 IQR.',
        workingOut: '\\(\\text{Max range} = (Q_3 - Q_1) + 1.5\\\\,\\\\text{IQR} + 1.5\\\\,\\\\text{IQR} = (Q_3 - Q_1) + 3\\\\,\\\\text{IQR}\\)'
      },
      {
        explanation: 'Finally, we substitute the definition of IQR. Since the interquartile range is defined as the upper quartile minus the lower quartile, we substitute Q3 - Q1 with IQR. This simplifies the formula to exactly 4 times the IQR. Thus, the largest possible range for a dataset without outliers is 4 times the IQR, which corresponds to option (C).',
        workingOut: '\\(\\text{Max range} = \\\\text{IQR} + 3\\\\,\\\\text{IQR} = 4\\\\,\\\\text{IQR}\\)'
      }
    ]
  },
  // 6. car2020s-mc7
  {
    id: 'car2020s-mc7',
    opts: [
      'The range is at most 2 times the IQR',
      'The range is at most 3 times the IQR',
      'The range is at most 4 times the IQR',
      'The range is at most 5 times the IQR'
    ],
    a: 2,
    solutionSteps: [
      {
        explanation: 'We begin by outlining our mathematical strategy. To find the maximum possible range of a dataset with no outliers, we determine the maximum distance between the lowest possible value (lower fence) and the highest possible value (upper fence). We will express this distance in terms of the interquartile range (IQR).',
        workingOut: '\\(\\text{Fences: } [Q_1 - 1.5\\\\,\\\\text{IQR}, \\\\; Q_3 + 1.5\\\\,\\\\text{IQR}]\\)'
      },
      {
        explanation: 'We write down the equation for the maximum range. The range is the maximum minus the minimum. A common mistake is subtracting the terms incorrectly and getting a multiplier of 2 instead of 4.',
        workingOut: '\\(\\text{Max range} = (Q_3 + 1.5\\\\,\\\\text{IQR}) - (Q_1 - 1.5\\\\,\\\\text{IQR})\\)'
      },
      {
        explanation: 'We expand and simplify. Grouping the quartiles together allows us to rewrite them as the interquartile range. Notice that the two 1.5 factors add up to 3.',
        workingOut: '\\(\\text{Max range} = (Q_3 - Q_1) + 3\\\\,\\\\text{IQR}\\)'
      },
      {
        explanation: 'We substitute Q3 - Q1 with IQR to complete the proof. This shows that the range can be at most 4 times the IQR. Any larger range would require at least one data point to fall outside the fences, making it an outlier.',
        workingOut: '\\(\\text{Max range} = \\\\text{IQR} + 3\\\\,\\\\text{IQR} = 4\\\\,\\\\text{IQR}\\)'
      }
    ]
  },
  // 7. cra2023-mc3
  {
    id: 'cra2023-mc3',
    opts: [
      'Lowest mark = 30, Median = 63',
      'Lowest mark = 30, Median = 68',
      'Lowest mark = 36, Median = 63',
      'Lowest mark = 36, Median = 68'
    ],
    a: 0,
    solutionSteps: [
      {
        explanation: 'We begin by translating the given percentages into quartile definitions and stating our strategy. We are told that 25% of students scored below 40 (which defines Q1 = 40), 75% scored below 86 (which defines Q3 = 86), and the maximum score is 96. Since the distribution is symmetric with no outliers, our strategy is to find the median as the midpoint of the quartiles, and then use symmetry to project the minimum score.',
        workingOut: '\\(\\text{Given: } Q_1 = 40, \\\\quad Q_3 = 86, \\\\quad \\\\text{Max} = 96\\)'
      },
      {
        explanation: 'We calculate the median. In a perfectly symmetrical distribution, the median (Q2) lies exactly halfway between the lower quartile (Q1) and the upper quartile (Q3). We find this by taking the average of Q1 and Q3. A common error is averaging the maximum and Q1 instead — always average the quartiles to find the median in a symmetric boxplot.',
        workingOut: '\\(\\text{Median} = \\\\dfrac{Q_1 + Q_3}{2} = \\\\dfrac{40 + 86}{2} = 63\\)'
      },
      {
        explanation: 'Next, we analyze the symmetry of the extremes. Symmetrical distribution implies that the distance from the median to the maximum value is identical to the distance from the median to the minimum value. We calculate this distance by subtracting the median from the maximum.',
        workingOut: '\\(\\text{Distance} = \\\\text{Max} - \\\\text{Median} = 96 - 63 = 33\\)'
      },
      {
        explanation: 'Finally, we determine the lowest mark by subtracting this same distance of 33 from the median. This gives us a minimum score of 30. Therefore, the lowest mark is 30 and the median is 63, which matches option (A). We double check that the range (96 - 30 = 66) is indeed centered at the median (63 - 33 = 30 and 63 + 33 = 96), confirming our logic.',
        workingOut: '\\(\\text{Lowest mark} = 63 - 33 = 30\\)'
      }
    ]
  },
  // 8. cra2023s-mc3
  {
    id: 'cra2023s-mc3',
    opts: [
      'Lowest mark = 40, Median = 70',
      'Lowest mark = 40, Median = 65',
      'Lowest mark = 45, Median = 70',
      'Lowest mark = 45, Median = 65'
    ],
    a: 0,
    solutionSteps: [
      {
        explanation: 'We begin by translating the percentages to quartiles and setting up our path. We have Q1 = 50 (since 25% are below 50), Q3 = 90 (since 75% are below 90), and a maximum of 100. Our strategy is to exploit the symmetry of the distribution to find both the median and the minimum score.',
        workingOut: '\\(\\text{Given: } Q_1 = 50, \\\\quad Q_3 = 90, \\\\quad \\\\text{Max} = 100\\)'
      },
      {
        explanation: 'We calculate the median. Because the distribution is symmetric, the median is located exactly at the midpoint of Q1 and Q3. A common mistake is averaging Q3 and the maximum instead of Q1 and Q3.',
        workingOut: '\\(\\text{Median} = \\\\dfrac{Q_1 + Q_3}{2} = \\\\dfrac{50 + 90}{2} = 70\\)'
      },
      {
        explanation: 'We determine the distance from the median to the extremes. The maximum score of 100 is 30 marks above the median. Due to symmetry, the minimum score must be exactly 30 marks below the median.',
        workingOut: '\\(\\text{Distance} = 100 - 70 = 30\\)'
      },
      {
        explanation: 'We calculate the lowest mark. Subtracting 30 from the median of 70 yields 40. Thus, the lowest mark is 40 and the median is 70, which corresponds to option (A). We verify that 40 is a plausible exam mark and fits the symmetry.',
        workingOut: '\\(\\text{Lowest mark} = 70 - 30 = 40\\)'
      }
    ]
  },
  // 9. dane2020-mc9
  {
    id: 'dane2020-mc9',
    opts: [
      'The largest possible range is 2 times the interquartile range.',
      'The largest possible range is 3 times the interquartile range.',
      'The largest possible range is 4 times the interquartile range.',
      'The largest possible range is 5 times the interquartile range.'
    ],
    a: 2,
    solutionSteps: [
      {
        explanation: 'We begin by defining our algebraic variables and strategy. For a dataset with no outliers, the minimum possible value must be greater than or equal to the lower fence, and the maximum value must be less than or equal to the upper fence. Our strategy is to calculate the maximum range as the difference between these two fences.',
        workingOut: '\\(\\text{Given: No outliers} \\\\Rightarrow \\\\text{Min} \\\\geq Q_1 - 1.5\\\\,\\\\text{IQR}, \\\\quad \\\\text{Max} \\\\leq Q_3 + 1.5\\\\,\\\\text{IQR}\\)'
      },
      {
        explanation: 'We express each whisker length. In a boxplot, the whiskers extend from the quartiles to the minimum and maximum values. Without outliers, the maximum length of each whisker is 1.5 times the IQR. A common mistake is thinking the whisker can only extend 1.0 times the IQR.',
        workingOut: '\\(\\text{Whisker length} \\\\leq 1.5 \\\\times \\\\text{IQR}\\)'
      },
      {
        explanation: 'We write the formula for the maximum range. The total range is the sum of the lower whisker, the middle box, and the upper whisker. The middle box represents the distance between Q1 and Q3, which is exactly 1 IQR. A frequent mistake is omitting the box width (1 IQR) from the total range calculation.',
        workingOut: '\\(\\text{Max range} = 1.5\\\\,\\\\text{IQR} + 1\\\\,\\\\text{IQR} + 1.5\\\\,\\\\text{IQR}\\)'
      },
      {
        explanation: 'Finally, we add these parts together. Combining 1.5, 1, and 1.5 gives a total multiplier of 4. Therefore, the largest possible range is 4 times the interquartile range (IQR), which matches option (C). This rule holds true for all boxplots without outliers.',
        workingOut: '\\(\\text{Max range} = 4 \\\\times \\\\text{IQR}\\)'
      }
    ]
  },
  // 10. dane2020s-mc9
  {
    id: 'dane2020s-mc9',
    opts: [
      '2 times',
      '3 times',
      '4 times',
      '5 times'
    ],
    a: 2,
    solutionSteps: [
      {
        explanation: 'We begin by establishing the mathematical framework. For any dataset with no outliers, the data points cannot extend past the outlier boundaries. Our strategy is to sum the maximum possible lengths of the components of a boxplot: the two whiskers and the central box.',
        workingOut: '\\(\\text{Components: Lower Whisker, Central Box, Upper Whisker}\\)'
      },
      {
        explanation: 'We define the maximum length of the whiskers and the box in terms of the IQR. Each whisker can extend at most 1.5 times the IQR. The central box represents the middle 50% of the data, which spans exactly 1 IQR.',
        workingOut: '\\(\\text{Whiskers} \\\\leq 1.5\\\\,\\\\text{IQR}, \\\\quad \\\\text{Box} = 1\\\\,\\\\text{IQR}\\)'
      },
      {
        explanation: 'We sum these components to find the maximum possible range. A common mistake is adding only one whisker, resulting in 2.5 IQR instead of 4.',
        workingOut: '\\(\\text{Max range} = 1.5\\\\,\\\\text{IQR} + 1\\\\,\\\\text{IQR} + 1.5\\\\,\\\\text{IQR}\\)'
      },
      {
        explanation: 'We conclude the calculation. The sum equals 4 times the IQR. This means that for any dataset without outliers, the range is at most 4 times the IQR. This corresponds to option (C).',
        workingOut: '\\(1.5 + 1 + 1.5 = 4 \\\\Rightarrow 4 \\\\times \\\\text{IQR}\\)'
      }
    ]
  }
];

async function main() {
  console.log('Starting Ch9C targeted update — no full collection scan...');
  for (const q of updates) {
    const updateObj = {
      solutionSteps: q.solutionSteps,
      opts: q.opts,
      options: q.opts,
      a: q.a,
      answer: String(q.a),
      isNew: true
    };
    await db.doc(`questions/${q.id}`).update(updateObj);
    console.log(`Updated ${q.id}`);
  }
  console.log('Ch9C update complete!');
  process.exit(0);
}

main().catch(err => {
  console.error('Update failed:', err);
  process.exit(1);
});
