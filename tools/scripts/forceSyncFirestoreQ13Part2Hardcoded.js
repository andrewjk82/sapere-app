import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const part2SubFixed = [
  {
    id: "y10-4g-q13a_i_b",
    type: "multiple_choice",
    question: "a) Describe Car B's trip: Where did it start? (Distance from Melbourne in km)",
    opts: ["30", "120", "0", "180"],
    options: ["30", "120", "0", "180"],
    a: 1,
    answer: 1,
    solutionSteps: [
      {
        explanation: "Car B starts its trip at time t = 0.",
        workingOut: "t = 0",
        graphData: null
      },
      {
        explanation: "Locate the starting coordinate pair (0, 120) for Car B.",
        workingOut: String.raw`(t, \; d) = (0, \; 120)`,
        graphData: null
      },
      {
        explanation: "Thus, Car B started 120 km from Melbourne.",
        workingOut: String.raw`d_{\text{start}} = 120`,
        graphData: null
      }
    ]
  },
  {
    id: "y10-4g-q13a_ii_b",
    type: "multiple_choice",
    question: "b) Describe Car B's trip: Where did it finish? (Distance from Melbourne in km)",
    opts: ["120", "30", "0", "180"],
    options: ["120", "30", "0", "180"],
    a: 2,
    answer: 2,
    solutionSteps: [
      {
        explanation: "Car B finishes its trip at the coordinate point (1.5, 0).",
        workingOut: String.raw`(t, \; d) = (1.5, \; 0)`,
        graphData: null
      },
      {
        explanation: "Read the distance d from the coordinate pair.",
        workingOut: "d_{\text{finish}} = 0",
        graphData: null
      }
    ]
  },
  {
    id: "y10-4g-q13a_iii_b",
    type: "multiple_choice",
    question: "c) Describe Car B's trip: What was the time taken in hours?",
    opts: ["1.5", "2.5", "1.0", "2.0"],
    options: ["1.5", "2.5", "1.0", "2.0"],
    a: 0,
    answer: 0,
    solutionSteps: [
      {
        explanation: "The time taken is the difference in time from start (t = 0) to finish (t = 1.5).",
        workingOut: "t_{\text{taken}} = 1.5 - 0 = 1.5",
        graphData: null
      }
    ]
  },
  {
    id: "y10-4g-q13a_iv_b",
    type: "multiple_choice",
    question: "d) Describe Car B's trip: What was the average speed in km/h?",
    opts: ["60", "70", "90", "80"],
    options: ["60", "70", "90", "80"],
    a: 3,
    answer: 3,
    solutionSteps: [
      {
        explanation: "Determine the total distance traveled by Car B.",
        workingOut: String.raw`\text{Distance} = 120 - 0 = 120`,
        graphData: null
      },
      {
        explanation: "Average speed is total distance divided by time taken.",
        workingOut: String.raw`\text{Speed} = \dfrac{\text{Distance}}{\text{Time}} = \dfrac{120}{1.5}`,
        graphData: null
      },
      {
        explanation: "Evaluate the division.",
        workingOut: String.raw`\text{Speed} = 80`,
        graphData: null
      }
    ]
  },
  {
    id: "y10-4g-q13c_part2",
    type: "multiple_choice",
    question: "e) Find the time at which they passed each other, giving your answer to the nearest minute (assuming they start at 9:00 a.m.).",
    opts: ["9:30 a.m.", "9:39 a.m.", "9:45 a.m.", "10:00 a.m."],
    options: ["9:30 a.m.", "9:39 a.m.", "9:45 a.m.", "10:00 a.m."],
    a: 1,
    answer: 1,
    solutionSteps: [
      {
        explanation: "Equate the distance equations for both cars. Car A is d = 60t + 30 and Car B is d = -80t + 120.",
        workingOut: "60t + 30 = -80t + 120",
        graphData: null
      },
      {
        explanation: "Rearrange the terms to solve for time t.",
        workingOut: String.raw`\begin{aligned} 140t &= 90 \\ t &= \dfrac{9}{14} \approx 0.643 \text{ hours} \end{aligned}`,
        graphData: null
      },
      {
        explanation: "Convert the fractional hours to minutes (0.643 × 60 = 38.57 minutes) and add it to 9:00 a.m.",
        workingOut: String.raw`\begin{aligned} \text{Minutes} &\approx 39 \\ \text{Passing Time} &= 9\!:\!39 \text{ a.m.} \end{aligned}`,
        graphData: null
      }
    ]
  }
];

(async () => {
  try {
    console.log('[Hardcode Overwrite] Overwriting y10-4g-q13_part2 in Firestore...');
    const ref = db.collection('questions').doc('y10-4g-q13_part2');
    
    // Explicitly update subQuestions with absolute raw formatting
    await ref.update({
      subQuestions: part2SubFixed,
      updatedAt: new Date()
    });
    console.log('Successfully completed direct physical database push to y10-4g-q13_part2.');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
