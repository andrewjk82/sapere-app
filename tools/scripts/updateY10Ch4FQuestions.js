import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const targets = {
  // Q1
  "06pY1NsSVeW4XUdWAlcZ": {
    question: "A shop sells two types of pens. 3 of type A and 5 of type B cost \\(\\$21\\). 6 of type A and 2 of type B cost \\(\\$18\\). Find the cost of type B.",
    opts: ["\\$2.50", "\\$2.00", "\\$3.00", "\\$4.00"],
    a: 2,
    solutionSteps: [
      {
        explanation: "Let x be the cost of type A and y be the cost of type B. Setup two linear equations representing the totals.",
        workingOut: "\\begin{aligned} 3x + 5y &= 21 \\quad \\text{--- (1)} \\\\ 6x + 2y &= 18 \\quad \\text{--- (2)} \\end{aligned}",
        graphData: null
      },
      {
        explanation: "Multiply equation (1) by 2 to align the coefficients of x.",
        workingOut: "2 \\times (3x + 5y) = 2 \\times 21 \\;\\Rightarrow\\; 6x + 10y = 42 \\quad \\text{--- (3)}",
        graphData: null
      },
      {
        explanation: "Subtract equation (2) from equation (3) to eliminate x, then solve for y.",
        workingOut: "\\begin{aligned} (6x + 10y) - (6x + 2y) &= 42 - 18 \\\\ 8y &= 24 \\\\ y &= 3 \\end{aligned}",
        graphData: null
      }
    ]
  },
  // Q2
  "5bTCiDNTkBGgdjUpGtJZ": {
    question: "A rectangle has opposite sides: top of length \\(3x+2y\\), bottom of length \\(x+10\\), left of length \\(2y\\), and right of length \\(x+1\\). Find the perimeter of the rectangle.",
    opts: ["28", "30", "32", "34"],
    a: 3,
    solutionSteps: [
      {
        explanation: "Since opposite sides of a rectangle are equal in length, we can set up two equations.",
        workingOut: "\\begin{aligned} 3x + 2y &= x + 10 \\quad \\text{--- (1)} \\\\ 2y &= x + 1 \\quad \\text{--- (2)} \\end{aligned}",
        graphData: null
      },
      {
        explanation: "Substitute equation (2) into equation (1) to solve for x.",
        workingOut: "\\begin{aligned} 2x + 2y &= 10 \\quad (\\text{rearranged } 1) \\\\ 2x + (x + 1) &= 10 \\\\ 3x + 1 &= 10 \\\\ 3x &= 9 \\;\\Rightarrow\\; x = 3 \\end{aligned}",
        graphData: null
      },
      {
        explanation: "Substitute x = 3 into equation (2) to solve for y.",
        workingOut: "2y = 3 + 1 \\;\\Rightarrow\\; 2y = 4 \\;\\Rightarrow\\; y = 2",
        graphData: null
      },
      {
        explanation: "Calculate the width and length, then calculate the perimeter: 2 × (Width + Length).",
        workingOut: "\\begin{aligned} \\text{Width} &= 2(2) = 4 \\\\ \\text{Length} &= 3 + 10 = 13 \\\\ \\text{Perimeter} &= 2 \\times (4 + 13) = 34 \\end{aligned}",
        graphData: null
      }
    ]
  },
  // Q3
  "6abGOCT2NZDknQ6TlxDl": {
    question: "The sum of two numbers is 25 and their difference is 7. Find the two numbers.",
    opts: ["18 and 11", "16 and 9", "15 and 8", "17 and 10"],
    a: 1,
    solutionSteps: [
      {
        explanation: "Let the two numbers be x (larger) and y (smaller). Create two simultaneous equations.",
        workingOut: "\\begin{aligned} x + y &= 25 \\quad \\text{--- (1)} \\\\ x - y &= 7 \\quad \\text{--- (2)} \\end{aligned}",
        graphData: null
      },
      {
        explanation: "Add equation (1) and equation (2) side-by-side to eliminate y.",
        workingOut: "\\begin{aligned} (x + y) + (x - y) &= 25 + 7 \\\\ 2x &= 32 \\\\ x &= 16 \\end{aligned}",
        graphData: null
      },
      {
        explanation: "Substitute x = 16 back into equation (1) to solve for y.",
        workingOut: "16 + y = 25 \\;\\Rightarrow\\; y = 9",
        graphData: null
      }
    ]
  },
  // Q4
  "8NEwwnDuTZEdFTLGQlxZ": {
    question: "The total cost of 3 coffees and 2 muffins is \\(\\$18\\). The cost of 2 coffees and 4 muffins is \\(\\$20\\). Find the price of one coffee.",
    opts: ["\\$3.00", "\\$2.50", "\\$4.00", "\\$5.00"],
    a: 2,
    solutionSteps: [
      {
        explanation: "Let c represent the price of a coffee and m represent the price of a muffin. Setup two equations.",
        workingOut: "\\begin{aligned} 3c + 2m &= 18 \\quad \\text{--- (1)} \\\\ 2c + 4m &= 20 \\quad \\text{--- (2)} \\end{aligned}",
        graphData: null
      },
      {
        explanation: "Multiply equation (1) by 2 to match the coefficients of m.",
        workingOut: "2 \\times (3c + 2m) = 2 \\times 18 \\;\\Rightarrow\\; 6c + 4m = 36 \\quad \\text{--- (3)}",
        graphData: null
      },
      {
        explanation: "Subtract equation (2) from equation (3) to eliminate m and solve for c.",
        workingOut: "\\begin{aligned} (6c + 4m) - (2c + 4m) &= 36 - 20 \\\\ 4c &= 16 \\\\ c &= 4 \\end{aligned}",
        graphData: null
      }
    ]
  },
  // Q5
  "AlfhliYzIX2pNtKt7kus": {
    question: "A rectangle has a perimeter of 40 cm. The length is 4 cm more than the width. Find the dimensions.",
    opts: ["14 \\times 10", "12 \\times 8", "11 \\times 9", "13 \\times 7"],
    a: 1,
    solutionSteps: [
      {
        explanation: "Let L be the length and W be the width. The perimeter is 2(L + W) = 40, which simplifies to L + W = 20. Setup the equations.",
        workingOut: "\\begin{aligned} L + W &= 20 \\quad \\text{--- (1)} \\\\ L &= W + 4 \\quad \\text{--- (2)} \\end{aligned}",
        graphData: null
      },
      {
        explanation: "Substitute equation (2) into equation (1) and solve for W.",
        workingOut: "\\begin{aligned} (W + 4) + W &= 20 \\\\ 2W + 4 &= 20 \\\\ 2W &= 16 \\;\\Rightarrow\\; W = 8 \\end{aligned}",
        graphData: null
      },
      {
        explanation: "Substitute W = 8 back into equation (2) to calculate L.",
        workingOut: "L = 8 + 4 = 12",
        graphData: null
      }
    ]
  },
  // Q6
  "dmQF1t4DMT9O02BX3OvR": {
    question: "Find two numbers such that five times the first plus the second is 25, and the first minus the second is 5.",
    opts: ["4 and 5", "6 and -5", "3 and 10", "5 and 0"],
    a: 3,
    solutionSteps: [
      {
        explanation: "Let the first number be x and the second number be y. Setup the simultaneous equations.",
        workingOut: "\\begin{aligned} 5x + y &= 25 \\quad \\text{--- (1)} \\\\ x - y &= 5 \\quad \\text{--- (2)} \\end{aligned}",
        graphData: null
      },
      {
        explanation: "Add equation (1) and equation (2) side-by-side to eliminate y.",
        workingOut: "\\begin{aligned} (5x + y) + (x - y) &= 25 + 5 \\\\ 6x &= 30 \\\\ x &= 5 \\end{aligned}",
        graphData: null
      },
      {
        explanation: "Substitute x = 5 back into equation (2) to solve for y.",
        workingOut: "5 - y = 5 \\;\\Rightarrow\\; -y = 0 \\;\\Rightarrow\\; y = 0",
        graphData: null
      }
    ]
  },
  // Q7 (Duplicate of Q3)
  "GrHk5JQeQIEHDnoaWrKn": {
    question: "The sum of two numbers is 25 and their difference is 7. Find the two numbers.",
    opts: ["18 and 11", "16 and 9", "15 and 8", "17 and 10"],
    a: 1,
    solutionSteps: [
      {
        explanation: "Let the two numbers be x (larger) and y (smaller). Create two simultaneous equations.",
        workingOut: "\\begin{aligned} x + y &= 25 \\quad \\text{--- (1)} \\\\ x - y &= 7 \\quad \\text{--- (2)} \\end{aligned}",
        graphData: null
      },
      {
        explanation: "Add equation (1) and equation (2) side-by-side to eliminate y.",
        workingOut: "\\begin{aligned} (x + y) + (x - y) &= 25 + 7 \\\\ 2x &= 32 \\\\ x &= 16 \\end{aligned}",
        graphData: null
      },
      {
        explanation: "Substitute x = 16 back into equation (1) to solve for y.",
        workingOut: "16 + y = 25 \\;\\Rightarrow\\; y = 9",
        graphData: null
      }
    ]
  },
  // Q8
  "lTJcPnhsovlRPajTNN01": {
    question: "A piggy bank contains \\(\\$5\\) and \\(\\$10\\) notes. There are 20 notes in total, with a total value of \\(\\$160\\). How many \\(\\$10\\) notes are there?",
    opts: ["12", "8", "10", "15"],
    a: 0,
    solutionSteps: [
      {
        explanation: "Let x be the number of \\$5 notes and y be the number of \\$10 notes. Set up the equations.",
        workingOut: "\\begin{aligned} x + y &= 20 \\quad \\text{--- (1)} \\\\ 5x + 10y &= 160 \\quad \\text{--- (2)} \\end{aligned}",
        graphData: null
      },
      {
        explanation: "Multiply equation (1) by 5 to align coefficients.",
        workingOut: "5(x + y) = 5(20) \\;\\Rightarrow\\; 5x + 5y = 100 \\quad \\text{--- (3)}",
        graphData: null
      },
      {
        explanation: "Subtract equation (3) from equation (2) to eliminate x, then solve for y.",
        workingOut: "\\begin{aligned} (5x + 10y) - (5x + 5y) &= 160 - 100 \\\\ 5y &= 60 \\\\ y &= 12 \\end{aligned}",
        graphData: null
      }
    ]
  },
  // Q9 (Duplicate of Q6)
  "ndeFFvnTokWAFYkmi8yT": {
    question: "Find two numbers such that five times the first plus the second is 25, and the first minus the second is 5.",
    opts: ["4 and 5", "6 and -5", "3 and 10", "5 and 0"],
    a: 3,
    solutionSteps: [
      {
        explanation: "Let the first number be x and the second number be y. Setup the simultaneous equations.",
        workingOut: "\\begin{aligned} 5x + y &= 25 \\quad \\text{--- (1)} \\\\ x - y &= 5 \\quad \\text{--- (2)} \\end{aligned}",
        graphData: null
      },
      {
        explanation: "Add equation (1) and equation (2) side-by-side to eliminate y.",
        workingOut: "\\begin{aligned} (5x + y) + (x - y) &= 25 + 5 \\\\ 6x &= 30 \\\\ x &= 5 \\end{aligned}",
        graphData: null
      },
      {
        explanation: "Substitute x = 5 back into equation (2) to solve for y.",
        workingOut: "5 - y = 5 \\;\\Rightarrow\\; -y = 0 \\;\\Rightarrow\\; y = 0",
        graphData: null
      }
    ]
  },
  // Q10
  "o2BYDpvSz8F4zEorJIZT": {
    question: "Find two numbers whose sum is 152 and whose difference is 94.",
    opts: ["39 and 113", "34 and 118", "29 and 123", "43 and 109"],
    a: 2,
    solutionSteps: [
      {
        explanation: "Let the two numbers be x (larger) and y (smaller). Create two simultaneous equations.",
        workingOut: "\\begin{aligned} x + y &= 152 \\quad \\text{--- (1)} \\\\ x - y &= 94 \\quad \\text{--- (2)} \\end{aligned}",
        graphData: null
      },
      {
        explanation: "Add the two equations directly to eliminate y, then solve for x.",
        workingOut: "\\begin{aligned} (x + y) + (x - y) &= 152 + 94 \\\\ 2x &= 246 \\\\ x &= 123 \\end{aligned}",
        graphData: null
      },
      {
        explanation: "Substitute x = 123 back into equation (1) to solve for y.",
        workingOut: "123 + y = 152 \\;\\Rightarrow\\; y = 152 - 123 = 29",
        graphData: null
      }
    ]
  },
  // Q11
  "PfPtLJOrp4a4q5qWr6db": {
    question: "Find two numbers whose sum is 160 and difference is 74.",
    opts: ["45 and 115", "43 and 117", "40 and 120", "53 and 107"],
    a: 1,
    solutionSteps: [
      {
        explanation: "Let the two numbers be x (larger) and y (smaller). Create two simultaneous equations.",
        workingOut: "\\begin{aligned} x + y &= 160 \\quad \\text{--- (1)} \\\\ x - y &= 74 \\quad \\text{--- (2)} \\end{aligned}",
        graphData: null
      },
      {
        explanation: "Add the two equations directly to eliminate y, then solve for x.",
        workingOut: "\\begin{aligned} (x + y) + (x - y) &= 160 + 74 \\\\ 2x &= 234 \\\\ x &= 117 \\end{aligned}",
        graphData: null
      },
      {
        explanation: "Substitute x = 117 back into equation (1) to solve for y.",
        workingOut: "117 + y = 160 \\;\\Rightarrow\\; y = 160 - 117 = 43",
        graphData: null
      }
    ]
  },
  // Q12 (Duplicate of Q5)
  "uWGI1YOwQyYumvsr4Nu7": {
    question: "A rectangle has a perimeter of 40 cm. The length is 4 cm more than the width. Find the dimensions.",
    opts: ["14 \\times 10", "12 \\times 8", "11 \\times 9", "13 \\times 7"],
    a: 1,
    solutionSteps: [
      {
        explanation: "Let L be the length and W be the width. The perimeter is 2(L + W) = 40, which simplifies to L + W = 20. Setup the equations.",
        workingOut: "\\begin{aligned} L + W &= 20 \\quad \\text{--- (1)} \\\\ L &= W + 4 \\quad \\text{--- (2)} \\end{aligned}",
        graphData: null
      },
      {
        explanation: "Substitute equation (2) into equation (1) and solve for W.",
        workingOut: "\\begin{aligned} (W + 4) + W &= 20 \\\\ 2W + 4 &= 20 \\\\ 2W &= 16 \\;\\Rightarrow\\; W = 8 \\end{aligned}",
        graphData: null
      },
      {
        explanation: "Substitute W = 8 back into equation (2) to calculate L.",
        workingOut: "L = 8 + 4 = 12",
        graphData: null
      }
    ]
  },
  // Q13 (Duplicate of Q4)
  "VYQ3blOS2uUL71if0EJi": {
    question: "The total cost of 3 coffees and 2 muffins is \\(\\$18\\). The cost of 2 coffees and 4 muffins is \\(\\$20\\). Find the price of one coffee.",
    opts: ["\\$3.00", "\\$2.50", "\\$4.00", "\\$5.00"],
    a: 2,
    solutionSteps: [
      {
        explanation: "Let c represent the price of a coffee and m represent the price of a muffin. Setup two equations.",
        workingOut: "\\begin{aligned} 3c + 2m &= 18 \\quad \\text{--- (1)} \\\\ 2c + 4m &= 20 \\quad \\text{--- (2)} \\end{aligned}",
        graphData: null
      },
      {
        explanation: "Multiply equation (1) by 2 to match the coefficients of m.",
        workingOut: "2 \\times (3c + 2m) = 2 \\times 18 \\;\\Rightarrow\\; 6c + 4m = 36 \\quad \\text{--- (3)}",
        graphData: null
      },
      {
        explanation: "Subtract equation (2) from equation (3) to eliminate m and solve for c.",
        workingOut: "\\begin{aligned} (6c + 4m) - (2c + 4m) &= 36 - 20 \\\\ 4c &= 16 \\\\ c &= 4 \\end{aligned}",
        graphData: null
      }
    ]
  },
  // Q14 (Duplicate of Q8)
  "x7vWahsyVSiWDTlxLvHF": {
    question: "A piggy bank contains \\(\\$5\\) and \\(\\$10\\) notes. There are 20 notes in total, with a total value of \\(\\$160\\). How many \\(\\$10\\) notes are there?",
    opts: ["12", "8", "10", "15"],
    a: 0,
    solutionSteps: [
      {
        explanation: "Let x be the number of \\$5 notes and y be the number of \\$10 notes. Set up the equations.",
        workingOut: "\\begin{aligned} x + y &= 20 \\quad \\text{--- (1)} \\\\ 5x + 10y &= 160 \\quad \\text{--- (2)} \\end{aligned}",
        graphData: null
      },
      {
        explanation: "Multiply equation (1) by 5 to align coefficients.",
        workingOut: "5(x + y) = 5(20) \\;\\Rightarrow\\; 5x + 5y = 100 \\quad \\text{--- (3)}",
        graphData: null
      },
      {
        explanation: "Subtract equation (3) from equation (2) to eliminate x, then solve for y.",
        workingOut: "\\begin{aligned} (5x + 10y) - (5x + 5y) &= 160 - 100 \\\\ 5y &= 60 \\\\ y &= 12 \\end{aligned}",
        graphData: null
      }
    ]
  }
};

(async () => {
  try {
    console.log('[Y10 Ch4F Questions] Syncing, dispersing options and writing aligned solution steps...');
    let success = 0;

    for (const [docId, update] of Object.entries(targets)) {
      const ref = db.collection('questions').doc(docId);
      const doc = await ref.get();
      if (doc.exists) {
        await ref.update({
          type: "multiple_choice",
          question: update.question,
          opts: update.opts,
          options: update.opts,
          a: update.a,
          answer: update.a,
          solutionSteps: update.solutionSteps,
          isNew: true,
          solution: null
        });
        console.log(`  [SHUFFLED & UPDATED] ${docId}`);
        success++;
      }
    }

    console.log(`\nSuccessfully updated and shuffed all ${success} questions for Year 10 Chapter 4F.`);
    process.exit(0);
  } catch (err) {
    console.error('Fatal error during update:', err);
    process.exit(1);
  }
})();
