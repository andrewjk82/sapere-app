import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// Compact, premium 1:1 graph showing Car A and Car B
// USING PLAIN TEXT strings to avoid backslash tab escape bugs inside JSXGraph text renderer!
const cleanHumeHighwayGraph = {
  jsxGraph: {
    width: 300,
    height: 300,
    boundingbox: [-0.5, 200, 3.0, -20],
    showAxisLabels: true,
    keepaspectratio: false,
    script: `
      board.suspendUpdate();
      board.options.point.withLabel = false;
      board.options.point.visible = false;
      
      // Draw custom vertical/horizontal axis arrows
      board.create('arrow', [[-0.2, 0], [2.8, 0]], {strokeColor: '#64748b', strokeWidth: 1.5, fixed: true});
      board.create('arrow', [[0, -10], [0, 190]], {strokeColor: '#64748b', strokeWidth: 1.5, fixed: true});
      
      // Add plain text labels for axes (No backslashes!)
      board.create('text', [2.7, 8, 't (h)'], {fontSize: 10, fontFamily: '"Outfit", sans-serif', strokeColor: '#475569', fixed: true});
      board.create('text', [0.1, 185, 'd (km)'], {fontSize: 10, fontFamily: '"Outfit", sans-serif', strokeColor: '#475569', fixed: true});
      
      // Draw grid ticks
      for (var t = 0.5; t <= 2.5; t += 0.5) {
        board.create('segment', [[t, -3], [t, 3]], {strokeColor: '#cbd5e1', strokeWidth: 1, fixed: true});
        board.create('text', [t - 0.08, -12, t.toFixed(1)], {fontSize: 8.5, fontFamily: '"Outfit", sans-serif', strokeColor: '#64748b', fixed: true});
      }
      for (var d = 30; d <= 180; d += 30) {
        board.create('segment', [[-0.05, d], [0.05, d]], {strokeColor: '#cbd5e1', strokeWidth: 1, fixed: true});
        board.create('text', [-0.35, d - 3, d], {fontSize: 8.5, fontFamily: '"Outfit", sans-serif', strokeColor: '#64748b', fixed: true});
      }
      
      // Car A line
      board.create('segment', [[0, 30], [2.5, 180]], {strokeColor: '#3b82f6', strokeWidth: 2.5, fixed: true});
      board.create('text', [1.8, 120, 'Car A'], {fontSize: 10, fontFamily: '"Outfit", sans-serif', strokeColor: '#3b82f6', fixed: true});
      
      // Car B line
      board.create('segment', [[0, 120], [1.5, 0]], {strokeColor: '#ef4444', strokeWidth: 2.5, fixed: true});
      board.create('text', [0.8, 80, 'Car B'], {fontSize: 10, fontFamily: '"Outfit", sans-serif', strokeColor: '#ef4444', fixed: true});
      
      board.unsuspendUpdate();
    `
  }
};

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
        workingOut: "(t, \\; d) = (0, \\; 30)",
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
        workingOut: "(t, \\; d) = (2.5, \\; 180)",
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
        explanation: "First, determine the total distance traveled by Car A.",
        workingOut: "\\text{Distance} = 180 - 30 = 150",
        graphData: null
      },
      {
        explanation: "The average speed is the total distance divided by the time taken.",
        workingOut: "\\text{Speed} = \\dfrac{\\text{Distance}}{\\text{Time}} = \\dfrac{150}{2.5}",
        graphData: null
      },
      {
        explanation: "Evaluate the fraction.",
        workingOut: "\\text{Speed} = 60",
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
        explanation: "Locate the starting coordinate pair (0, 120) for Car B.",
        workingOut: "(t, \\; d) = (0, \\; 120)",
        graphData: null
      },
      {
        explanation: "Read the starting distance from the coordinates.",
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
        workingOut: "(t, \\; d) = (1.5, \\; 0)",
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
        workingOut: "\\text{Distance} = 120 - 0 = 120",
        graphData: null
      },
      {
        explanation: "Average speed is total distance divided by time taken.",
        workingOut: "\\text{Speed} = \\dfrac{\\text{Distance}}{\\text{Time}} = \\dfrac{120}{1.5}",
        graphData: null
      },
      {
        explanation: "Evaluate the division.",
        workingOut: "\\text{Speed} = 80",
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
    console.log('[Fix Hume Highway Latex] Applying clean plain-text graph labels and removing variable dollar LaTeX signs...');
    
    // 1. Update y10-4g-q13
    const ref1 = db.collection('questions').doc('y10-4g-q13');
    await ref1.update({
      graphData: cleanHumeHighwayGraph,
      subQuestions: part1SubQuestions
    });
    console.log('  [y10-4g-q13 CLEANED]');

    // 2. Update y10-4g-q13_part2
    const ref2 = db.collection('questions').doc('y10-4g-q13_part2');
    await ref2.update({
      graphData: cleanHumeHighwayGraph,
      subQuestions: part2SubQuestions
    });
    console.log('  [y10-4g-q13_part2 CLEANED]');

    console.log('\nAll Hume Highway math and graph labels fixed.');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
