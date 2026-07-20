import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const questionsToUpdate = [
  {
    "id": "asc2020-q33c",
    "type": "multiple_choice",
    "question": "The fastest 1% of swimmers immediately qualify for the next competition. Using the standard normal distribution tables, determine the qualifying time, given \\\\(\\mu = 15\\\\) min and \\\\(\\sigma = 1.5\\\\) min.",
    "opts": [
      "11.51 minutes",
      "12.05 minutes",
      "10.98 minutes",
      "11.82 minutes"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by expressing the fastest one percent threshold as a cumulative probability statement for time, where shorter times represent the fastest swimmers.",
        "workingOut": "P(X < t) = 0.01"
      },
      {
        "explanation": "Next, we find the corresponding standard normal z-score from probability tables.",
        "workingOut": "P(Z < z) = 0.01 \\\\implies z \\\\approx -2.33"
      },
      {
        "explanation": "Convert this standard z-score back to the swim time scale using the mean and standard deviation.",
        "workingOut": "t = \\\\mu + z\\\\sigma = 15 + (-2.33)(1.5) = 11.505"
      },
      {
        "explanation": "Finally, we round the value to two decimal places to obtain the qualifying limit time.",
        "workingOut": "t \\\\approx 11.51\\\\text{ minutes}"
      }
    ]
  },
  {
    "id": "asc2020-q33v",
    "type": "multiple_choice",
    "question": "The heights of students at a school are normally distributed with mean 165 cm and standard deviation 8 cm. Students taller than a certain height are selected for the basketball team. If the top 5% are selected, find the minimum height to be selected.",
    "opts": [
      "178.2 cm",
      "175.5 cm",
      "181.2 cm",
      "176.8 cm"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by setting up the upper tail probability statement, where the top five percent correspond to a cumulative probability of ninety-five percent.",
        "workingOut": "P(X > h) = 0.05 \\\\implies P(Z < z) = 0.95"
      },
      {
        "explanation": "Next, we lookup the corresponding z-score for the ninety-five percent cumulative threshold.",
        "workingOut": "z \\\\approx 1.645"
      },
      {
        "explanation": "Finally, we convert this standard z-score back to the student height scale using the mean and standard deviation.",
        "workingOut": "h = 165 + 1.645 \\\\times 8 \\\\approx 178.2\\\\text{ cm}"
      }
    ]
  },
  {
    "id": "baulko2020-mc7",
    "type": "multiple_choice",
    "question": "The time \\\\(T\\\\) in seconds that divers can hold their breath is normally distributed with \\\\(\\mu = 120\\\\) and \\\\(\\\\text{Var}(T) = 400\\\\). In what range of time would you expect to find the middle 95%?",
    "opts": [
      "100 to 140 seconds",
      "80 to 160 seconds",
      "60 to 180 seconds",
      "40 to 200 seconds"
    ],
    "a": 1,
    "solutionSteps": [
      {
        "explanation": "We begin by calculating the standard deviation from the variance.",
        "workingOut": "\\\\sigma = \\\\sqrt{\\\\text{Var}(T)} = \\\\sqrt{400} = 20"
      },
      {
        "explanation": "According to the empirical rule (68-95-99.7 rule), the middle ninety-five percent of any normal distribution lies within exactly two standard deviations of the mean.",
        "workingOut": "\\\\mu \\\\pm 2\\\\sigma = 120 \\\\pm 2(20) = 120 \\\\pm 40"
      },
      {
        "explanation": "Finally, we evaluate this interval to find the lower and upper boundaries.",
        "workingOut": "80 \\\\leq T \\\\leq 160"
      }
    ]
  },
  {
    "id": "baulko2020-mc7v",
    "type": "multiple_choice",
    "question": "Heights of students are normally distributed with \\\\(\\mu = 165\\\\) cm and \\\\(\\\\text{Var} = 25\\\\). In what range would you expect the middle 68%?",
    "opts": [
      "155 to 175 cm",
      "160 to 170 cm",
      "150 to 180 cm",
      "163 to 167 cm"
    ],
    "a": 1,
    "solutionSteps": [
      {
        "explanation": "We begin by calculating the standard deviation from the variance.",
        "workingOut": "\\\\sigma = \\\\sqrt{25} = 5"
      },
      {
        "explanation": "According to the empirical rule, the middle sixty-eight percent of any normal distribution lies within one standard deviation of the mean.",
        "workingOut": "\\\\mu \\\\pm \\\\sigma = 165 \\\\pm 5"
      },
      {
        "explanation": "Finally, we evaluate this interval to find the lower and upper boundaries.",
        "workingOut": "160 \\\\leq x \\\\leq 170"
      }
    ]
  },
  {
    "id": "bbhs2020-27a",
    "type": "multiple_choice",
    "question": "Chocolate consumption per person per day is normally distributed with mean 68.95 g and standard deviation 18.45 g. Solve the following sub-questions.",
    "opts": [],
    "options": [],
    "a": 0,
    "answer": "See parts",
    "solutionSteps": [
      {
        "explanation": "Identify the distribution parameters.",
        "workingOut": "\\\\mu = 68.95\\\\text{ g}, \\\\quad \\\\sigma = 18.45\\\\text{ g}"
      }
    ],
    "subQuestions": [
      {
        "id": "bbhs2020-27a-a",
        "type": "multiple_choice",
        "question": "(a) Above what chocolate consumption does 2.5% of this population lie?",
        "options": [
          "105.85 g",
          "87.40 g",
          "98.50 g",
          "112.30 g"
        ],
        "answer": "0",
        "solutionSteps": [
          {
            "explanation": "2.5% in the upper tail corresponds to exactly two standard deviations above the mean (since the middle 95% lies within 2 SDs).",
            "workingOut": "z = 2"
          },
          {
            "explanation": "Convert to raw value.",
            "workingOut": "\\\\mu + 2\\\\sigma = 68.95 + 2(18.45) = 105.85\\\\text{ g}"
          }
        ]
      },
      {
        "id": "bbhs2020-27a-b",
        "type": "multiple_choice",
        "question": "(b) Rahul consumed 50.5 g of chocolate in one day. What percentage of this population has a chocolate consumption rate more than Rahul's?",
        "options": [
          "84%",
          "68%",
          "95%",
          "74%"
        ],
        "answer": "0",
        "solutionSteps": [
          {
            "explanation": "Calculate the z-score for 50.5 g.",
            "workingOut": "z = \\\\dfrac{50.5 - 68.95}{18.45} = -1"
          },
          {
            "explanation": "The proportion above z = -1 is half of the 68% range (34%) plus the upper 50% of the normal curve.",
            "workingOut": "P(Z > -1) = 50\\\\% + 34\\\\% = 84\\\\%"
          }
        ]
      },
      {
        "id": "bbhs2020-27a-c",
        "type": "multiple_choice",
        "question": "(c) Ben takes a sample of people and finds that 6 of them consumed less than 13.6 g per day. If Ben's sample matches this population distribution, what is his sample size?",
        "options": [
          "4000",
          "2000",
          "3000",
          "1500"
        ],
        "answer": "0",
        "solutionSteps": [
          {
            "explanation": "Find the z-score for 13.6 g.",
            "workingOut": "z = \\\\dfrac{13.6 - 68.95}{18.45} = -3"
          },
          {
            "explanation": "A z-score of -3 corresponds to the bottom 0.15% (half of the remaining 0.3% from 99.7% range).",
            "workingOut": "P(X < 13.6) = 0.15\\\\%"
          },
          {
            "explanation": "Solve the sample size equation.",
            "workingOut": "0.0015 \\\\times n = 6 \\\\implies n = 4000"
          }
        ]
      }
    ]
  },
  {
    "id": "bbhs2020s-27a",
    "type": "multiple_choice",
    "question": "Daily screen time for adults is normally distributed with mean 75 minutes and standard deviation 10 minutes. Solve the following sub-questions.",
    "opts": [],
    "options": [],
    "a": 0,
    "answer": "See parts",
    "solutionSteps": [
      {
        "explanation": "Identify the distribution parameters.",
        "workingOut": "\\\\mu = 75\\\\text{ min}, \\\\quad \\\\sigma = 10\\\\text{ min}"
      }
    ],
    "subQuestions": [
      {
        "id": "bbhs2020s-27a-a",
        "type": "multiple_choice",
        "question": "(a) Above what screen time does 2.5% of this population lie?",
        "options": [
          "95 minutes",
          "85 minutes",
          "90 minutes",
          "100 minutes"
        ],
        "answer": "0",
        "solutionSteps": [
          {
            "explanation": "2.5% in the upper tail corresponds to 2 standard deviations above the mean.",
            "workingOut": "z = 2"
          },
          {
            "explanation": "Convert to raw score.",
            "workingOut": "\\\\mu + 2\\\\sigma = 75 + 2(10) = 95\\\\text{ minutes}"
          }
        ]
      },
      {
        "id": "bbhs2020s-27a-b",
        "type": "multiple_choice",
        "question": "(b) Priya has a daily screen time of 55 minutes. What percentage of this population has a screen time more than Priya's?",
        "options": [
          "97.5%",
          "84%",
          "95%",
          "99%"
        ],
        "answer": "0",
        "solutionSteps": [
          {
            "explanation": "Calculate the z-score for 55 minutes.",
            "workingOut": "z = \\\\dfrac{55 - 75}{10} = -2"
          },
          {
            "explanation": "The proportion above z = -2 is half of the 95% range (47.5%) plus the upper 50% of the normal curve.",
            "workingOut": "P(Z > -2) = 50\\\\% + 47.5\\\\% = 97.5\\\\%"
          }
        ]
      },
      {
        "id": "bbhs2020s-27a-c",
        "type": "multiple_choice",
        "question": "(c) Liam finds that 3 people had screen times below 45 minutes. If Liam's sample matches this population distribution, what is his sample size?",
        "options": [
          "2000",
          "1500",
          "1000",
          "3000"
        ],
        "answer": "0",
        "solutionSteps": [
          {
            "explanation": "Find the z-score for 45 minutes.",
            "workingOut": "z = \\\\dfrac{45 - 75}{10} = -3"
          },
          {
            "explanation": "A z-score of -3 corresponds to the bottom 0.15% (from the 99.7% rule).",
            "workingOut": "P(X < 45) = 0.15\\\\%"
          },
          {
            "explanation": "Solve the sample size equation.",
            "workingOut": "0.0015 \\\\times n = 3 \\\\implies n = 2000"
          }
        ]
      }
    ]
  },
  {
    "id": "car2020-q22",
    "type": "multiple_choice",
    "question": "The completion times for the Oztown triathlon race were normally distributed with mean 60 minutes and standard deviation 5 minutes. Using the empirical rule, find Ozzie's completion time if he finished ahead of 84% of competitors.",
    "opts": [
      "55 minutes",
      "50 minutes",
      "65 minutes",
      "57.5 minutes"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by analyzing Ozzie's percentile rank. Finishing ahead of eighty-four percent means eighty-four percent of values lie above Ozzie's time, placing him in the bottom sixteen percent (16th percentile).",
        "workingOut": "P(X > t) = 0.84"
      },
      {
        "explanation": "Using the empirical rule, eighty-four percent of the distribution lies above negative one standard deviation.",
        "workingOut": "P(X > \\\\mu - \\\\sigma) = 50\\\\% + 34\\\\% = 84\\\\%"
      },
      {
        "explanation": "Therefore, Ozzie's time corresponds exactly to one standard deviation below the mean.",
        "workingOut": "t = \\\\mu - \\\\sigma = 60 - 5 = 55\\\\text{ minutes}"
      }
    ]
  },
  {
    "id": "car2020s-q22",
    "type": "multiple_choice",
    "question": "The delivery times for packages from a courier service are normally distributed with mean 45 minutes and standard deviation 8 minutes. Using the empirical rule, find the delivery time corresponding to finishing faster than 84% of all deliveries.",
    "opts": [
      "53 minutes",
      "37 minutes",
      "49 minutes",
      "41 minutes"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "Finishing faster than eighty-four percent means this delivery time is longer than only sixteen percent of deliveries, placing it at the eighty-four percentile.",
        "workingOut": "P(X < t) = 0.84"
      },
      {
        "explanation": "Using the empirical rule, eighty-four percent of the distribution lies below positive one standard deviation.",
        "workingOut": "P(X < \\\\mu + \\\\sigma) = 50\\\\% + 34\\\\% = 84\\\\%"
      },
      {
        "explanation": "Convert this to the actual delivery time.",
        "workingOut": "t = \\\\mu + \\\\sigma = 45 + 8 = 53\\\\text{ minutes}"
      }
    ]
  }
];

async function main() {
  console.log('Starting Firestore update for Year12 Advanced Ch10F Q1-Q12...');
  for (const q of questionsToUpdate) {
    const docRef = db.doc(`questions/${q.id}`);
    await docRef.update({
      type: q.type,
      question: q.question,
      opts: q.opts,
      options: q.opts,
      a: q.a,
      answer: String(q.a),
      solutionSteps: q.solutionSteps,
      isNew: true,
      subQuestions: q.subQuestions || []
    });
    console.log(`Successfully updated ${q.id}`);
  }
  
  // Deactivate duplicate sub-records to prevent standalone leaks in Chapter 10F
  const duplicatesToDeactivate = [
    'bbhs2020-27b', 'bbhs2020-27c',
    'bbhs2020s-27b', 'bbhs2020s-27c'
  ];
  for (const id of duplicatesToDeactivate) {
    await db.doc(`questions/${id}`).update({ isActive: false });
    console.log(`Deactivated duplicate standalone question: ${id}`);
  }
  
  console.log('Update complete!');
  process.exit(0);
}

main().catch(err => {
  console.error('Update failed:', err);
  process.exit(1);
});
