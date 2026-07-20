import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// Part 1: Car A's trip (5 sub-questions)
const part1SubQuestions = [
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
        explanation: "Look at the starting coordinate pair (0, 30) for Car A.",
        workingOut: "(t, d) = (0, 30)",
        graphData: null
      },
      {
        explanation: "Thus, the starting distance of Car A from Melbourne is 30 km.",
        workingOut: "d_{\\text{start}} = 30",
        graphData: null
      }
    ]
  },
  {
    id: "y10-4g-q13a_ii_a",
    type: "multiple_choice",
    question: "b) Describe Car A's trip: Where did it finish? (Distance from Melbourne in km)",
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
        explanation: "Read the distance value from the coordinates.",
        workingOut: "d_{\\text{finish}} = 180",
        graphData: null
      }
    ]
  },
  {
    id: "y10-4g-q13a_iii_a",
    type: "multiple_choice",
    question: "c) Describe Car A's trip: What was the time taken in hours?",
    opts: ["1.5", "2.5", "2.0", "3.0"],
    options: ["1.5", "2.5", "2.0", "3.0"],
    a: 1,
    answer: 1,
    solutionSteps: [
      {
        explanation: "Find the time taken by taking the difference between the finish and start times.",
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
    question: "d) Describe Car A's trip: What was the average speed in km/h?",
    opts: ["60", "70", "80", "50"],
    options: ["60", "70", "80", "50"],
    a: 0,
    answer: 0,
    solutionSteps: [
      {
        explanation: "Determine the total distance traveled by Car A.",
        workingOut: "\\text{Distance} = 180 - 30 = 150 \\text{ km}",
        graphData: null
      },
      {
        explanation: "The average speed is the total distance divided by the time taken.",
        workingOut: "\\text{Speed} = \\dfrac{\\text{Distance}}{\\text{Time}} = \\dfrac{150}{2.5}",
        graphData: null
      },
      {
        explanation: "Evaluate the fraction.",
        workingOut: "\\text{Speed} = 60 \\text{ km/h}",
        graphData: null
      }
    ]
  },
  {
    id: "y10-4g-q13b_part1",
    type: "multiple_choice",
    question: "e) Find the equation representing Car A's trip (in terms of \\(d\\) and \\(t\\)).",
    opts: ["d = 60t", "d = 60t + 30", "d = 30t + 60", "d = -60t + 180"],
    options: ["d = 60t", "d = 60t + 30", "d = 30t + 60", "d = -60t + 180"],
    a: 1,
    answer: 1,
    solutionSteps: [
      {
        explanation: "A linear equation is written in the form d = mt + c.",
        workingOut: "d = mt + c",
        graphData: null
      },
      {
        explanation: "Substitute the gradient (speed) m = 60 and initial distance (intercept) c = 30.",
        workingOut: "m = 60, \\; c = 30",
        graphData: null
      },
      {
        explanation: "State the final equation for Car A.",
        workingOut: "d = 60t + 30",
        graphData: null
      }
    ]
  }
];

// Part 2: Car B's trip & Intersection (5 sub-questions)
const part2SubQuestions = [
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
        explanation: "Locate the coordinate pair (0, 120) for Car B.",
        workingOut: "(t, d) = (0, 120)",
        graphData: null
      },
      {
        explanation: "Thus, Car B started 120 km from Melbourne.",
        workingOut: "d_{\\text{start}} = 120",
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
        workingOut: "(t, d) = (1.5, 0)",
        graphData: null
      },
      {
        explanation: "Read the distance d from the coordinate pair.",
        workingOut: "d_{\\text{finish}} = 0",
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
        workingOut: "t_{\\text{taken}} = 1.5 - 0 = 1.5",
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
        workingOut: "\\begin{aligned} 140t &= 90 \\\\ t &= \\dfrac{9}{14} \\approx 0.643 \\text{ hours} \\end{aligned}",
        graphData: null
      },
      {
        explanation: "Convert the fractional hours to minutes (0.643 × 60 = 38.57 minutes) and add it to 9:00 a.m.",
        workingOut: "\\begin{aligned} \\text{Minutes} &\\approx 39 \\\\ \\text{Passing Time} &= 9\\!:\\!39 \\text{ a.m.} \\end{aligned}",
        graphData: null
      }
    ]
  }
];

(async () => {
  try {
    console.log('[Split Hume Highway] Split q13 into two parts...');
    
    // 1. Update existing y10-4g-q13 (Part 1 - Car A)
    const refPart1 = db.collection('questions').doc('y10-4g-q13');
    await refPart1.set({
      year: "Year 10",
      course: "Mathematics",
      chapterId: "y10-4",
      chapterTitle: "Chapter 4: Lines and linear equations",
      topicId: "y10-4g",
      topicCode: "4G",
      topicTitle: "Revision",
      isManual: true,
      difficulty: "medium",
      timeLimit: 180,
      type: "multiple_choice",
      question: "The graph represents the trips of two cars, A and B, along the Hume Highway. Car A goes from \\((0, 30)\\) to \\((2.5, 180)\\). Both start at 9 a.m. Analyze the trip details for **Car A**.",
      subQuestions: part1SubQuestions,
      isNew: true,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    console.log('  [PART 1 SUCCESS] y10-4g-q13 updated.');

    // 2. Create new y10-4g-q13_part2 (Part 2 - Car B & Passing Time)
    const refPart2 = db.collection('questions').doc('y10-4g-q13_part2');
    await refPart2.set({
      year: "Year 10",
      course: "Mathematics",
      chapterId: "y10-4",
      chapterTitle: "Chapter 4: Lines and linear equations",
      topicId: "y10-4g",
      topicCode: "4G",
      topicTitle: "Revision",
      isManual: true,
      difficulty: "medium",
      timeLimit: 180,
      type: "multiple_choice",
      question: "The graph represents the trips of two cars, A and B, along the Hume Highway. Car B goes from \\((0, 120)\\) to \\((1.5, 0)\\). Both start at 9 a.m. Analyze the trip details for **Car B** and find when they pass each other.",
      subQuestions: part2SubQuestions,
      isNew: true,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    console.log('  [PART 2 SUCCESS] y10-4g-q13_part2 created.');

    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
