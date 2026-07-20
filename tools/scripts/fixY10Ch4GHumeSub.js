import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const updatedSubQuestions = [
  {
    id: "y10-4g-q13a_i_a",
    type: "multiple_choice",
    question: "a) Describe Car A's trip: Where did it start? (Distance from Melbourne in km)",
    opts: ["0", "120", "30", "180"],
    options: ["0", "120", "30", "180"],
    a: 2,
    answer: 2,
    solutionSteps: [
      {
        explanation: "Car A starts its trip at time t = 0.",
        workingOut: "t = 0",
        graphData: null
      },
      {
        explanation: "Substitute t = 0 into the coordinate pair (0, 30) representing its initial position.",
        workingOut: "(t, d) = (0, 30)",
        graphData: null
      },
      {
        explanation: "Therefore, Car A started 30 km from Melbourne.",
        workingOut: "d_{\\text{start}} = 30",
        graphData: null
      }
    ]
  },
  {
    id: "y10-4g-q13a_ii_a",
    type: "multiple_choice",
    question: "a) Describe Car A's trip: Where did it finish? (Distance from Melbourne in km)",
    opts: ["30", "120", "0", "180"],
    options: ["30", "120", "0", "180"],
    a: 3,
    answer: 3,
    solutionSteps: [
      {
        explanation: "Car A ends its trip at the coordinate point (2.5, 180).",
        workingOut: "(t, d) = (2.5, 180)",
        graphData: null
      },
      {
        explanation: "Read the distance d from the coordinate pair.",
        workingOut: "d_{\\text{finish}} = 180",
        graphData: null
      }
    ]
  },
  {
    id: "y10-4g-q13a_iii_a",
    type: "multiple_choice",
    question: "a) Describe Car A's trip: What was the time taken in hours?",
    opts: ["1.5", "2.5", "2.0", "3.0"],
    options: ["1.5", "2.5", "2.0", "3.0"],
    a: 1,
    answer: 1,
    solutionSteps: [
      {
        explanation: "Calculate the time taken by taking the difference between the finish and start times.",
        workingOut: "t_{\\text{taken}} = t_{\\text{finish}} - t_{\\text{start}}",
        graphData: null
      },
      {
        explanation: "Substitute the values: t = 2.5 at finish, and t = 0 at start.",
        workingOut: "t_{\\text{taken}} = 2.5 - 0 = 2.5",
        graphData: null
      }
    ]
  },
  {
    id: "y10-4g-q13a_iv_a",
    type: "multiple_choice",
    question: "a) Describe Car A's trip: What was the average speed in km/h?",
    opts: ["60", "70", "80", "50"],
    options: ["60", "70", "80", "50"],
    a: 0,
    answer: 0,
    solutionSteps: [
      {
        explanation: "First, determine the total distance traveled by subtracting start distance from finish distance.",
        workingOut: "\\text{Distance} = 180 - 30 = 150 \\text{ km}",
        graphData: null
      },
      {
        explanation: "The average speed is the total distance divided by the time taken.",
        workingOut: "\\text{Speed} = \\dfrac{\\text{Distance}}{\\text{Time}} = \\dfrac{150}{2.5}",
        graphData: null
      },
      {
        explanation: "Evaluate the division.",
        workingOut: "\\text{Speed} = 60 \\text{ km/h}",
        graphData: null
      }
    ]
  },
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
        workingOut: "(t, d) = (0, 120)",
        graphData: null
      },
      {
        explanation: "Read the starting distance from the coordinates.",
        workingOut: "d_{\\text{start}} = 120 \\text{ km}",
        graphData: null
      }
    ]
  },
  {
    id: "y10-4g-q13a_ii_b",
    type: "multiple_choice",
    question: "a) Describe Car B's trip: Where did it finish? (Distance from Melbourne in km)",
    opts: ["120", "30", "0", "180"],
    options: ["120", "30", "0", "180"],
    a: 2,
    answer: 2,
    solutionSteps: [
      {
        explanation: "Car B finishes its trip at the coordinate point (1.5, 0).",
        workingOut: "(t, d) = (1.5, 0)",
        graphData: null
      },
      {
        explanation: "Read the distance d from the coordinate pair.",
        workingOut: "d_{\\text{finish}} = 0 \\text{ km}",
        graphData: null
      }
    ]
  },
  {
    id: "y10-4g-q13a_iii_b",
    type: "multiple_choice",
    question: "a) Describe Car B's trip: What was the time taken in hours?",
    opts: ["1.5", "2.5", "1.0", "2.0"],
    options: ["1.5", "2.5", "1.0", "2.0"],
    a: 0,
    answer: 0,
    solutionSteps: [
      {
        explanation: "The time taken is the difference in time from start (t = 0) to finish (t = 1.5).",
        workingOut: "t_{\\text{taken}} = 1.5 - 0 = 1.5",
        graphData: null
      }
    ]
  },
  {
    id: "y10-4g-q13a_iv_b",
    type: "multiple_choice",
    question: "a) Describe Car B's trip: What was the average speed in km/h?",
    opts: ["60", "70", "90", "80"],
    options: ["60", "70", "90", "80"],
    a: 3,
    answer: 3,
    solutionSteps: [
      {
        explanation: "Determine the total distance traveled by Car B.",
        workingOut: "\\text{Distance} = 120 - 0 = 120 \\text{ km}",
        graphData: null
      },
      {
        explanation: "Average speed is total distance divided by time taken.",
        workingOut: "\\text{Speed} = \\dfrac{120}{1.5}",
        graphData: null
      },
      {
        explanation: "Evaluate the division.",
        workingOut: "\\text{Speed} = 80 \\text{ km/h}",
        graphData: null
      }
    ]
  },
  {
    id: "y10-4g-q13b",
    type: "multiple_choice",
    question: "b) Find the equation of the graph of each car's trip (in terms of \\(d\\) and \\(t\\)).",
    opts: ["d = 60t and d = -80t", "d = 60t+30 and d = -80t+30", "d = 60t+30 and d = -80t+120", "d = 30t+60 and d = 120t-80"],
    options: ["d = 60t and d = -80t", "d = 60t+30 and d = -80t+30", "d = 60t+30 and d = -80t+120", "d = 30t+60 and d = 120t-80"],
    a: 2,
    answer: 2,
    solutionSteps: [
      {
        explanation: "Write the equation for Car A using its speed (gradient m = 60) and start point (y-intercept c = 30).",
        workingOut: "d_A = 60t + 30",
        graphData: null
      },
      {
        explanation: "Write the equation for Car B using its speed (gradient m = -80, since it drives back towards Melbourne) and start point (y-intercept c = 120).",
        workingOut: "d_B = -80t + 120",
        graphData: null
      }
    ]
  },
  {
    id: "y10-4g-q13c",
    type: "multiple_choice",
    question: "c) Find the time at which they passed each other, giving your answer to the nearest minute (e.g. 9:39 a.m.).",
    opts: ["9:30 a.m.", "9:39 a.m.", "9:45 a.m.", "10:00 a.m."],
    options: ["9:30 a.m.", "9:39 a.m.", "9:45 a.m.", "10:00 a.m."],
    a: 1,
    answer: 1,
    solutionSteps: [
      {
        explanation: "Equate the distance equations for Car A and Car B to find their intersection time.",
        workingOut: "60t + 30 = -80t + 120",
        graphData: null
      },
      {
        explanation: "Rearrange the terms to solve for time t.",
        workingOut: "\\begin{aligned} 140t &= 90 \\\\ t &= \\dfrac{9}{14} \\approx 0.643 \\text{ hours} \\end{aligned}",
        graphData: null
      },
      {
        explanation: "Convert the fractional hours to minutes (0.643 × 60 = 38.57 minutes) and add it to the starting time of 9 a.m.",
        workingOut: "\\begin{aligned} \\text{Minutes} &\\approx 39 \\\\ \\text{Time} &= 9\\!:\\!39 \\text{ a.m.} \\end{aligned}",
        graphData: null
      }
    ]
  }
];

(async () => {
  try {
    console.log('[Hume Highway Sub] Upgrading Car trip sub-questions to MCQ with detailed solutions...');
    const ref = db.collection('questions').doc('y10-4g-q13');
    const doc = await ref.get();
    if (doc.exists) {
      await ref.update({
        subQuestions: updatedSubQuestions,
        type: "multiple_choice",
        question: "The graph represents the trips of two cars, A and B, along the Hume Highway. The vertical axis is the \\(d\\) axis, where \\(d\\) km is the distance from Melbourne. The horizontal axis is \\(t\\) hours. Both start at 9 a.m. Car A goes from \\((0, 30)\\) to \\((2.5, 180)\\). Car B goes from \\((0, 120)\\) to \\((1.5, 0)\\)."
      });
      console.log('Successfully migrated all subQuestions for y10-4g-q13.');
    } else {
      console.log('Error: Document not found.');
    }
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
