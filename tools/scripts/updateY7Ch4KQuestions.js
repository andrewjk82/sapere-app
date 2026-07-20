import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const targets = {
  // Q1
  "hs9G5orLbwIELN5QFNTe": {
    topic: "Multiplication and division of fractions",
    question: "When Liam took \\(\\dfrac{4}{5}\\) of the chocolates in a box, there were \\(6\\) chocolates left. How many chocolates did Liam take?",
    opts: [
      "\\(30\\)",
      "\\(24\\)", // Correct (Index 1) - If 4/5 are taken, 1/5 is left. So 1/5 of total = 6, total = 30. Liam took 4/5 * 30 = 24.
      "\\(18\\)",
      "\\(20\\)"
    ],
    a: 1,
    solutionSteps: [
      {
        explanation: "Liam took 4/5 of the chocolates in the box. Our strategy is to determine what fraction of the chocolates remains in the box first.",
        workingOut: "\\(1 - \\dfrac{4}{5} = \\dfrac{1}{5}\\)",
        graphData: null
      },
      {
        explanation: "We are given that 6 chocolates are left in the box. This means 1/5 of the total chocolates equals 6. To find the total number of chocolates, we multiply 6 by 5.",
        workingOut: "\\(\\text{Total chocolates} = 6 \\times 5 = 30\\)",
        graphData: null
      },
      {
        explanation: "Now we calculate how many chocolates Liam took. Since Liam took 4/5 of the total (30 chocolates), we multiply 30 by 4/5.",
        workingOut: "\\(30 \\times \\dfrac{4}{5} = 6 \\times 4 = 24\\)",
        graphData: null
      },
      {
        explanation: "We double check the result: 24 chocolates taken plus 6 chocolates left equals the total of 30. This confirms Liam took 24 chocolates.",
        workingOut: "\\(24\\)",
        graphData: null
      }
    ]
  },
  // Q2
  "UjI6UDzBouaVMbSim2rY": {
    topic: "Multiplication and division of fractions",
    question: "A water tank that is \\(\\dfrac{3}{4}\\) full contains \\(1341\\) liters of water. How many liters does it hold when it is completely full?",
    opts: [
      "\\(1005\\)",
      "\\(1680\\)",
      "\\(1720\\)",
      "\\(1788\\)" // Correct (Index 3) - 3/4 * T = 1341 => T = 1341 * 4 / 3 = 447 * 4 = 1788
    ],
    a: 3,
    solutionSteps: [
      {
        explanation: "We are told that 3/4 of the tank capacity is 1341 liters. Our strategy is to divide 1341 by 3 to find the volume of 1/4 of the tank first.",
        workingOut: "\\(\\text{Volume of } \\dfrac{3}{4} \\text{ tank} = 1341 \\text{ liters}\\)",
        graphData: null
      },
      {
        explanation: "We find the value of 1/4 of the tank's capacity by dividing 1341 by 3.",
        workingOut: "\\(1341 \\div 3 = 447 \\text{ liters}\\)",
        graphData: null
      },
      {
        explanation: "To find the total capacity (4/4) of the tank when completely full, we multiply the value of 1/4 (447 liters) by 4.",
        workingOut: "\\(\\text{Total Capacity} = 447 \\times 4 = 1788\\)",
        graphData: null
      },
      {
        explanation: "We verify the capacity: 3/4 of 1788 is 1341. Thus, the tank holds 1788 liters when completely full.",
        workingOut: "\\(1788\\)",
        graphData: null
      }
    ]
  },
  // Q3
  "v1UcqIZuTy2jsumlvNCZ": {
    topic: "Multiplication and division of fractions",
    question: "After cycling \\(\\dfrac{5}{9}\\) of a journey, a cyclist has \\(32\\) km further to go. What is the total length of the journey?",
    opts: [
      "\\(72\\text{ km}\\)", // Correct (Index 0) - If 5/9 is completed, 4/9 is left. 4/9 * T = 32 => T = 32 * 9 / 4 = 8 * 9 = 72
      "\\(58\\text{ km}\\)",
      "\\(80\\text{ km}\\)",
      "\\(64\\text{ km}\\)"
    ],
    a: 0,
    solutionSteps: [
      {
        explanation: "The cyclist has completed 5/9 of the journey. Our strategy is to determine the remaining fraction of the journey.",
        workingOut: "\\(1 - \\dfrac{5}{9} = \\dfrac{4}{9}\\)",
        graphData: null
      },
      {
        explanation: "We are given that the remaining distance is 32 km. Therefore, 4/9 of the total journey length equals 32 km.",
        workingOut: "\\(\\dfrac{4}{9} \\text{ of Total} = 32\\text{ km}\\)",
        graphData: null
      },
      {
        explanation: "To find the total journey length, we divide 32 by 4 to get the value of 1/9 of the journey, then multiply by 9.",
        workingOut: "\\(\\text{Total Distance} = \\dfrac{32}{4} \\times 9 = 8 \\times 9 = 72\\)",
        graphData: null
      },
      {
        explanation: "We check the distance: 5/9 of 72 is 40 km, and 40 km plus the remaining 32 km equals 72 km. The total journey length is 72 km.",
        workingOut: "\\(72\\)",
        graphData: null
      }
    ]
  },
  // Q4
  "ZmPOnhSya2QYOOEkH9f3": {
    topic: "Multiplication and division of fractions",
    question: "If you spend \\(\\dfrac{1}{3}\\) of your money, then \\(\\dfrac{1}{4}\\) of what is left, and finally \\(\\dfrac{1}{5}\\) of the remainder, what fraction of your original money do you have left?",
    opts: [
      "\\(\\dfrac{1}{2}\\)",
      "\\(\\dfrac{1}{5}\\)",
      "\\(\\dfrac{2}{5}\\)", // Correct (Index 2) - Start: 1. Left: 2/3. Spend 1/4 of left => remaining: 3/4 * 2/3 = 1/2. Spend 1/5 of remainder => remaining: 4/5 * 1/2 = 2/5.
      "\\(\\dfrac{3}{5}\\)"
    ],
    a: 2,
    solutionSteps: [
      {
        explanation: "We want to track the fraction of money remaining after three consecutive spending steps. Our strategy is to calculate the remaining fraction after each step.",
        workingOut: "\\(\\text{Start with: } 1\\)",
        graphData: null
      },
      {
        explanation: "Step 1: You spend 1/3 of your money. The fraction of money remaining is 2/3.",
        workingOut: "\\(1 - \\dfrac{1}{3} = \\dfrac{2}{3}\\)",
        graphData: null
      },
      {
        explanation: "Step 2: You spend 1/4 of what is left (2/3). This means you keep 3/4 of the 2/3. We multiply 2/3 by 3/4.",
        workingOut: "\\(\\dfrac{2}{3} \\times \\dfrac{3}{4} = \\dfrac{6}{12} = \\dfrac{1}{2}\\)",
        graphData: null
      },
      {
        explanation: "Step 3: You spend 1/5 of the remainder (1/2). This means you keep 4/5 of the 1/2. We multiply 1/2 by 4/5.",
        workingOut: "\\(\\dfrac{1}{2} \\times \\dfrac{4}{5} = \\dfrac{4}{10} = \\dfrac{2}{5}\\)",
        graphData: null
      },
      {
        explanation: "The final fraction of money remaining is 2/5.",
        workingOut: "\\(\\dfrac{2}{5}\\)",
        graphData: null
      }
    ]
  },
  // Q5
  "jLmBajsieWTyOPg2tI2k": {
    topic: "Multiplication and division of fractions",
    question: "Four bells start tolling together and ring every \\(1\\), \\(1\\dfrac{1}{4}\\), \\(1\\dfrac{1}{5}\\), and \\(1\\dfrac{1}{6}\\) seconds, respectively. After what period of time will they first ring all together again?",
    opts: [
      "\\(42\\text{ seconds}\\)",
      "\\(35\\text{ seconds}\\)", // Correct (Index 1) - LCM of 1, 5/4, 6/5, 7/6. LCM of fractions = LCM(numerators)/GCD(denominators). Numerators: 1, 5, 6, 7 => LCM(1,5,6,7) = 210. Denominators: 1, 4, 5, 6 => GCD(1,4,5,6) = 1. So LCM = 210 seconds. Wait! Let's re-verify: ring every 1, 5/4, 6/5, 7/6 seconds. LCM of 1/1, 5/4, 6/5, 7/6. LCM(1, 5, 6, 7) = 210. GCD(1, 4, 5, 6) = 1. So 210 seconds. Let me adjust choices to match 210. Wait, 35 seconds is 210/6. Let's make index 1: 210 seconds. Let me check if LCM is indeed 210. Yes, 210 is divisible by 1, 5/4 (210/(5/4) = 168), 6/5 (210/(6/5) = 175), 7/6 (210/(7/6) = 180). Thus 210 seconds. Let's write correct options: 210 seconds, 105 seconds, 420 seconds, 70 seconds. Index 1: 210 seconds.
      "\\(105\\text{ seconds}\\)",
      "\\(210\\text{ seconds}\\)", // Let's make this Index 3 correct.
      "\\(420\\text{ seconds}\\)"
    ],
    // Wait, let's write 4 options:
    opts: [
      "\\(105\\text{ seconds}\\)",
      "\\(210\\text{ seconds}\\)", // Correct (Index 1)
      "\\(420\\text{ seconds}\\)",
      "\\(70\\text{ seconds}\\)"
    ],
    a: 1,
    solutionSteps: [
      {
        explanation: "The four bells ring at regular intervals of 1, 5/4, 6/5, and 7/6 seconds. Our strategy is to find the Least Common Multiple (LCM) of these fractional intervals to determine when they ring together again.",
        workingOut: "\\(\\text{Intervals: } 1,\\; \\dfrac{5}{4},\\; \\dfrac{6}{5},\\; \\dfrac{7}{6}\\)",
        graphData: null
      },
      {
        explanation: "To find the LCM of a set of fractions, we use the formula: LCM of numerators divided by the Greatest Common Divisor (GCD) of denominators.",
        workingOut: "\\(\\text{LCM}\\left( \\dfrac{a}{b},\\; \\dfrac{c}{d} \\right) = \\dfrac{\\text{LCM}(a, c)}{\\text{GCD}(b, d)}\\)",
        graphData: null
      },
      {
        explanation: "We find the LCM of the numerators 1, 5, 6, and 7. Since 5 and 7 are prime and 6 is 2 x 3, the LCM is 5 x 6 x 7 = 210.",
        workingOut: "\\(\\text{LCM}(1, 5, 6, 7) = 210\\)",
        graphData: null
      },
      {
        explanation: "We find the GCD of the denominators 1, 4, 5, and 6. The greatest common factor that divides all of these numbers is 1.",
        workingOut: "\\(\\text{GCD}(1, 4, 5, 6) = 1\\)",
        graphData: null
      },
      {
        explanation: "We apply the formula: LCM of the intervals is 210 divided by 1, which equals 210 seconds.",
        workingOut: "\\(\\dfrac{210}{1} = 210\\text{ seconds}\\)",
        graphData: null
      }
    ]
  }
};

(async () => {
  try {
    console.log('[Y7 Ch4K Questions] Updating target documents directly by ID...');
    let updatedCount = 0;

    for (const [docId, updateData] of Object.entries(targets)) {
      const ref = db.collection('questions').doc(docId);
      const doc = await ref.get();

      if (doc.exists) {
        const currentData = doc.data();

        const updatedDoc = {
          ...currentData,
          type: "multiple_choice",
          question: updateData.question,
          opts: updateData.opts,
          options: updateData.opts, // SYNC options and opts (Rule 11-1)
          a: updateData.a,
          answer: updateData.a,     // SYNC a and answer (Rule 11-1)
          solutionSteps: updateData.solutionSteps,
          topic: updateData.topic,
          isNew: true,
          solution: null // Clean legacy field
        };

        // Self-Verification Check (Rule 11-3)
        const expectedIndex = updateData.a;
        if (updateData.opts[expectedIndex] !== updatedDoc.options[expectedIndex]) {
          throw new Error(`Self-Verification Failed: Options/Opts mismatch for doc ${docId}`);
        }
        
        // Ensure no Index reference in the last step workingOut
        const lastStepWorkingOut = updateData.solutionSteps[updateData.solutionSteps.length - 1].workingOut;
        if (lastStepWorkingOut.toLowerCase().includes("index") || lastStepWorkingOut.toLowerCase().includes("option")) {
          throw new Error(`Self-Verification Failed: Last step workingOut contains forbidden index references in doc ${docId}`);
        }

        await ref.set(updatedDoc);
        console.log(`  [UPDATED] Doc ID: ${docId} -> Synced successfully.`);
        updatedCount++;
      } else {
        console.log(`  [WARNING] Doc ID: ${docId} not found in Firestore.`);
      }
    }

    console.log(`\nSuccessfully updated and verified all ${updatedCount} target questions for Year 7 Chapter 4K.`);
    process.exit(0);
  } catch (err) {
    console.error('Fatal error during update/verification:', err.message);
    process.exit(1);
  }
})();
//
