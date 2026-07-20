import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const questionsToUpdate = [
  {
    "id": "asc2020-mc9",
    "type": "multiple_choice",
    "question": "There will be 90 000 students sitting an examination. If their examination results form a normal distribution, how many students are expected to score within 1 standard deviation of the mean?",
    "opts": [
      "61 200",
      "85 500",
      "30 600",
      "45 000"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by recalling the empirical rule (68-95-99.7 rule) for any normal distribution. According to this rule, approximately sixty-eight percent of all observations fall within one standard deviation of the mean.",
        "workingOut": "P(\\\\mu - \\\\sigma < X < \\\\mu + \\\\sigma) \\\\approx 0.68"
      },
      {
        "explanation": "Next, we multiply the total number of students sitting the exam by the decimal equivalent of sixty-eight percent to find the expected count.",
        "workingOut": "90000 \\\\times 0.68 = 61200"
      }
    ]
  },
  {
    "id": "asc2020-mc9v",
    "type": "multiple_choice",
    "question": "In a school of 2 000 students, test scores are normally distributed. How many students are expected to score within 1 standard deviation of the mean?",
    "opts": [
      "680",
      "950",
      "1360",
      "1900"
    ],
    "a": 2,
    "solutionSteps": [
      {
        "explanation": "We begin by applying the 68-95-99.7 rule. For any standard normal distribution, the probability of falling within one standard deviation of the mean is approximately sixty-eight percent.",
        "workingOut": "P(\\\\mu - \\\\sigma < X < \\\\mu + \\\\sigma) \\\\approx 0.68"
      },
      {
        "explanation": "Next, we multiply the total student population of two thousand by zero point six eight to calculate the expected number of students.",
        "workingOut": "2000 \\\\times 0.68 = 1360"
      }
    ]
  },
  {
    "id": "asc2020-q33",
    "type": "multiple_choice",
    "question": "A number of people participated in a Swimming Championship. Swimmers who took longer than 16.5 minutes to complete the swim were disqualified. About 16% of swimmers were disqualified. The mean time to complete the race was 15 minutes. Solve the following sub-questions.",
    "opts": [],
    "options": [],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "Since sixteen percent of the swimmers are disqualified for exceeding sixteen point five minutes, this boundary represents exactly one standard deviation above the mean of fifteen.",
        "workingOut": "P(X > 16.5) \\\\approx 0.16 \\\\implies \\\\mu + \\\\sigma = 16.5"
      },
      {
        "explanation": "We calculate the standard deviation by subtracting the mean of fifteen from the boundary threshold.",
        "workingOut": "\\\\sigma = 16.5 - 15 = 1.5\\\\text{ minutes}"
      }
    ],
    "subQuestions": [
      {
        "id": "asc2020-q33-a",
        "type": "multiple_choice",
        "question": "(a) Find the standard deviation of swim times for this race.",
        "options": [
          "\\\\(\\\\sigma = 1.5\\\\text{ minutes}\\\\)",
          "\\\\(\\\\sigma = 1.0\\\\text{ minute}\\\\)",
          "\\\\(\\\\sigma = 2.0\\\\text{ minutes}\\\\)",
          "\\\\(\\\\sigma = 1.2\\\\text{ minutes}\\\\)"
        ],
        "answer": "0",
        "solutionSteps": [
          {
            "explanation": "Recall that in a normal distribution, approximately 16% of data lies above one standard deviation from the mean.",
            "workingOut": "P(Z > 1) \\\\approx 0.16"
          },
          {
            "explanation": "Identify the relationship between the disqualification threshold and the standard deviation.",
            "workingOut": "\\\\mu + \\\\sigma = 16.5"
          },
          {
            "explanation": "Substitute the mean value of fifteen and isolate the standard deviation.",
            "workingOut": "15 + \\\\sigma = 16.5 \\\\implies \\\\sigma = 1.5\\\\text{ minutes}"
          }
        ],
        "graphData": null
      },
      {
        "id": "asc2020-q33-b",
        "type": "teacher_review",
        "question": "(b) Sketch the normal distribution curve for this information, labelling the mean and the disqualification threshold.",
        "options": [],
        "answer": "Bell curve centred at 15, with 16.5 marked as \\\\(\\mu + \\sigma\\\\) and the tail beyond 16.5 shaded (16%).",
        "solutionSteps": [
          {
            "explanation": "Draw a symmetric bell curve centered at the mean value of fifteen.",
            "workingOut": "\\\\text{Centre } = 15"
          },
          {
            "explanation": "Mark the boundary point 16.5 on the right, which corresponds to one standard deviation above the mean.",
            "workingOut": "\\\\mu + \\\\sigma = 16.5"
          },
          {
            "explanation": "Shade the upper tail region above 16.5, which represents the sixteen percent of disqualified swimmers.",
            "workingOut": "P(X > 16.5) \\\\approx 16\\\\%"
          }
        ],
        "graphData": null
      },
      {
        "id": "asc2020-q33-c",
        "type": "multiple_choice",
        "question": "(c) The fastest 1% of swimmers immediately qualify for the next level. Use probability tables to determine the qualifying time.",
        "options": [
          "Qualifying time \\\\(\approx 11.51\\\\text{ minutes}\\\\)",
          "Qualifying time \\\\(\approx 12.01\\\\text{ minutes}\\\\)",
          "Qualifying time \\\\(\approx 10.98\\\\text{ minutes}\\\\)",
          "Qualifying time \\\\(\approx 11.82\\\\text{ minutes}\\\\)"
        ],
        "answer": "0",
        "solutionSteps": [
          {
            "explanation": "Find the z-score corresponding to the fastest one percent, which represents the lower one percent tail of the distribution.",
            "workingOut": "P(Z < z) = 0.01 \\\\implies z \\\\approx -2.33"
          },
          {
            "explanation": "Convert this standard z-score back to the raw swim time scale using the mean and standard deviation.",
            "workingOut": "t = \\\\mu + z\\\\sigma = 15 + (-2.33)(1.5) = 11.505"
          },
          {
            "explanation": "Round the value to two decimal places to obtain the qualifying limit time.",
            "workingOut": "t \\\\approx 11.51\\\\text{ minutes}"
          }
        ],
        "graphData": null
      }
    ]
  },
  {
    "id": "asc2020-q33a",
    "type": "multiple_choice",
    "question": "Swimmers who took longer than 16.5 minutes were disqualified. About 16% of swimmers were disqualified. The mean time was 15 minutes. Find the standard deviation of swim times for this race.",
    "opts": [
      "1.5 minutes",
      "1.0 minute",
      "2.0 minutes",
      "1.2 minutes"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "Recall the empirical rule of standard normal distributions: approximately sixteen percent of observations lie more than one standard deviation above the mean.",
        "workingOut": "P(Z > 1) \\\\approx 0.16"
      },
      {
        "explanation": "Identify the relationship between the disqualification threshold and the standard deviation.",
        "workingOut": "\\\\mu + \\\\sigma = 16.5"
      },
      {
        "explanation": "Substitute the mean value of fifteen and isolate the standard deviation.",
        "workingOut": "15 + \\\\sigma = 16.5 \\\\implies \\\\sigma = 1.5\\\\text{ minutes}"
      }
    ]
  },
  {
    "id": "asc2020-q33b",
    "type": "teacher_review",
    "question": "(b) Sketch the normal distribution curve for the swim time data, with \\\\(\\mu = 15\\\\) min and \\\\(\\sigma = 1.5\\\\) min. Label the mean and mark the disqualification threshold at 16.5 min.",
    "opts": [],
    "a": 0,
    "answer": "Bell curve centred at 15, with 16.5 marked as \\\\(\\mu + \\sigma\\\\) and the tail beyond 16.5 shaded (16%).",
    "solutionSteps": [
      {
        "explanation": "Draw a symmetric bell curve centered at the mean value of fifteen.",
        "workingOut": "\\\\text{Centre } = 15"
      },
      {
        "explanation": "Mark the boundary point 16.5 on the right, which corresponds to one standard deviation above the mean.",
        "workingOut": "\\\\mu + \\\\sigma = 16.5"
      },
      {
        "explanation": "Shade the upper tail region above 16.5, which represents the sixteen percent of disqualified swimmers.",
        "workingOut": "P(X > 16.5) \\\\approx 16\\\\%"
      }
    ]
  },
  {
    "id": "bbhs2020-mc6",
    "type": "multiple_choice",
    "question": "The time taken to travel between two regional cities is approximately normally distributed with mean 85 minutes and standard deviation 4 minutes. The percentage of travel times that fall between 81 minutes and 93 minutes is closest to:",
    "opts": [
      "68%",
      "70.5%",
      "81.5%",
      "95%"
    ],
    "a": 2,
    "solutionSteps": [
      {
        "explanation": "We begin by calculating the standard z-scores corresponding to the travel time boundaries of eighty-one and ninety-three minutes.",
        "workingOut": "z_{81} = \\\\dfrac{81-85}{4} = -1, \\\\quad z_{93} = \\\\dfrac{93-85}{4} = 2"
      },
      {
        "explanation": "We apply the 68-95-99.7 rule. The area from negative one standard deviation to the mean is half of sixty-eight percent, and the area from the mean to positive two standard deviations is half of ninety-five percent.",
        "workingOut": "P(-1 < Z < 2) = \\\\dfrac{68\\\\%}{2} + \\\\dfrac{95\\\\%}{2}"
      },
      {
        "explanation": "Finally, we sum these two region percentages to calculate the total percentage of travel times within the interval.",
        "workingOut": "= 34\\\\% + 47.5\\\\% = 81.5\\\\%"
      }
    ]
  },
  {
    "id": "bbhs2020s-mc6",
    "type": "multiple_choice",
    "question": "The time (in seconds) to complete an online task is normally distributed with mean 100 seconds and standard deviation 15 seconds. The percentage of times that fall between 85 seconds and 130 seconds is closest to:",
    "opts": [
      "68%",
      "70.5%",
      "81.5%",
      "95%"
    ],
    "a": 2,
    "solutionSteps": [
      {
        "explanation": "We begin by calculating the standard z-scores corresponding to the task completion time boundaries of eighty-five and one hundred thirty seconds.",
        "workingOut": "z_{85} = \\\\dfrac{85-100}{15} = -1, \\\\quad z_{130} = \\\\dfrac{130-100}{15} = 2"
      },
      {
        "explanation": "We apply the 68-95-99.7 rule. The area from negative one standard deviation to the mean is half of sixty-eight percent, and the area from the mean to positive two standard deviations is half of ninety-five percent.",
        "workingOut": "P(-1 < Z < 2) = \\\\dfrac{68\\\\%}{2} + \\\\dfrac{95\\\\%}{2}"
      },
      {
        "explanation": "Finally, we sum these two region percentages to calculate the total percentage of times within the interval.",
        "workingOut": "= 34\\\\% + 47.5\\\\% = 81.5\\\\%"
      }
    ]
  },
  {
    "id": "cths2020-q28",
    "type": "multiple_choice",
    "question": "A soft drink company produces a bottled drink. The amount of liquid poured into each bottle by the bottling machine is normally distributed, with a mean of 300 mL and a standard deviation of 10 mL. Solve the following sub-questions.",
    "opts": [],
    "options": [],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by identifying the distribution parameters: a mean of three hundred milliliters, and a standard deviation of ten milliliters.",
        "workingOut": "\\\\mu = 300\\\\text{ mL}, \\\\quad \\\\sigma = 10\\\\text{ mL}"
      }
    ],
    "subQuestions": [
      {
        "id": "cths2020-q28-a",
        "type": "multiple_choice",
        "question": "(a) A bottle has a z-score of -1.2. How many mL below the mean is this bottle?",
        "options": [
          "12 mL",
          "10 mL",
          "8 mL",
          "15 mL"
        ],
        "answer": "0",
        "solutionSteps": [
          {
            "explanation": "A z-score of -1.2 means the bottle volume is exactly 1.2 standard deviations below the mean.",
            "workingOut": "\\\\text{mL below mean} = |z| \\\\times \\\\sigma = 1.2 \\\\times 10 = 12\\\\text{ mL}"
          }
        ],
        "graphData": null
      },
      {
        "id": "cths2020-q28-b",
        "type": "multiple_choice",
        "question": "(b) At least 97.5% of bottles must contain more liquid than indicated on the label. What is the largest label value the company should use?",
        "options": [
          "280 mL",
          "290 mL",
          "275 mL",
          "285 mL"
        ],
        "answer": "0",
        "solutionSteps": [
          {
            "explanation": "If 97.5% must be above, then 2.5% are below. By empirical rule, this lower tail limit corresponds to exactly two standard deviations below the mean.",
            "workingOut": "P(X < \\\\text{label}) = 0.025 \\\\implies z = -2"
          },
          {
            "explanation": "Convert this standard z-score back to the volume scale to find the maximum label value.",
            "workingOut": "x = \\\\mu + z\\\\sigma = 300 + (-2)(10) = 280\\\\text{ mL}"
          }
        ],
        "graphData": null
      }
    ]
  },
  {
    "id": "cths2020s-q28",
    "type": "multiple_choice",
    "question": "A juice company fills bottles using a machine. The volume poured is normally distributed, with a mean of 500 mL and a standard deviation of 15 mL. Solve the following sub-questions.",
    "opts": [],
    "options": [],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by identifying the distribution parameters: a mean of five hundred milliliters, and a standard deviation of fifteen milliliters.",
        "workingOut": "\\\\mu = 500\\\\text{ mL}, \\\\quad \\\\sigma = 15\\\\text{ mL}"
      }
    ],
    "subQuestions": [
      {
        "id": "cths2020s-q28-a",
        "type": "multiple_choice",
        "question": "(a) A bottle has a z-score of -1.4. How many mL below the mean is this bottle?",
        "options": [
          "21 mL",
          "15 mL",
          "20 mL",
          "25 mL"
        ],
        "answer": "0",
        "solutionSteps": [
          {
            "explanation": "A z-score of -1.4 means the bottle volume is exactly 1.4 standard deviations below the mean.",
            "workingOut": "\\\\text{mL below mean} = |z| \\\\times \\\\sigma = 1.4 \\\\times 15 = 21\\\\text{ mL}"
          }
        ],
        "graphData": null
      },
      {
        "id": "cths2020s-q28-b",
        "type": "multiple_choice",
        "question": "(b) At least 97.5% of bottles must contain more liquid than shown on the label. What is the largest label value the company should use?",
        "options": [
          "470 mL",
          "485 mL",
          "460 mL",
          "475 mL"
        ],
        "answer": "0",
        "solutionSteps": [
          {
            "explanation": "97.5% above means 2.5% are below the label. According to the empirical rule, this corresponds to exactly two standard deviations below the mean.",
            "workingOut": "P(X < \\\\text{label}) = 0.025 \\\\implies z = -2"
          },
          {
            "explanation": "Convert this standard z-score back to the volume scale to find the maximum label value.",
            "workingOut": "x = \\\\mu + z\\\\sigma = 500 + (-2)(15) = 470\\\\text{ mL}"
          }
        ],
        "graphData": null
      }
    ]
  }
];

async function main() {
  console.log('Starting Firestore update for Year12 Advanced Ch10E Q1-Q9...');
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
  console.log('Update complete!');
  process.exit(0);
}

main().catch(err => {
  console.error('Update failed:', err);
  process.exit(1);
});
