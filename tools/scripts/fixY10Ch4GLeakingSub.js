import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const updatedSubQuestions = [
  {
    id: "y10-4g-q12a",
    type: "multiple_choice",
    question: "a) How many litres of water were initially in the tank?",
    opts: ["20000", "30000", "40000", "50000"],
    options: ["20000", "30000", "40000", "50000"],
    a: 2,
    answer: 2,
    solutionSteps: [
      {
        explanation: "The initial volume corresponds to the start of the leak, which is at time t = 0.",
        workingOut: "t = 0",
        graphData: null
      },
      {
        explanation: "Locate the coordinate where time t = 0 on the straight line, which is given as (0, 40000).",
        workingOut: "(t, V) = (0, 40000)",
        graphData: null
      },
      {
        explanation: "Therefore, the initial amount of water in the tank was 40000 litres.",
        workingOut: "V_{\\text{initial}} = 40000",
        graphData: null
      }
    ]
  },
  {
    id: "y10-4g-q12b",
    type: "multiple_choice",
    question: "b) How many litres were leaking from the tank per hour?",
    opts: ["20", "40", "60", "80"],
    options: ["20", "40", "60", "80"],
    a: 1,
    answer: 1,
    solutionSteps: [
      {
        explanation: "The leak rate corresponds to the gradient (slope) of the straight line graph.",
        workingOut: "m = \\dfrac{V_2 - V_1}{t_2 - t_1}",
        graphData: null
      },
      {
        explanation: "Substitute the given points (0, 40000) and (500, 20000) into the gradient formula.",
        workingOut: "m = \\dfrac{20000 - 40000}{500 - 0} = \\dfrac{-20000}{500} = -40",
        graphData: null
      },
      {
        explanation: "The negative sign indicates water is leaving. Thus, the tank leaks at 40 litres per hour.",
        workingOut: "\\text{Leak rate} = 40 \\text{ L/h}",
        graphData: null
      }
    ]
  },
  {
    id: "y10-4g-q12c",
    type: "multiple_choice",
    question: "c) Write a rule for finding the number of litres remaining (\\(V\\)) after \\(t\\) hours.",
    opts: ["V = -20t + 40000", "V = 40t + 20000", "V = -40t + 20000", "V = -40t + 40000"],
    options: ["V = -20t + 40000", "V = 40t + 20000", "V = -40t + 20000", "V = -40t + 40000"],
    a: 3,
    answer: 3,
    solutionSteps: [
      {
        explanation: "A straight line relation is written in the form V = mt + c, where m is the gradient and c is the vertical intercept.",
        workingOut: "V = mt + c",
        graphData: null
      },
      {
        explanation: "Substitute the gradient m = -40 and the initial volume (intercept) c = 40000 into the equation.",
        workingOut: "m = -40, \\; c = 40000",
        graphData: null
      },
      {
        explanation: "State the final equation showing remaining volume V in terms of hours t.",
        workingOut: "V = -40t + 40000",
        graphData: null
      }
    ]
  },
  {
    id: "y10-4g-q12d",
    type: "multiple_choice",
    question: "d) When would the tank be empty if the leaking continued at this rate? Give your answer in hours.",
    opts: ["1000", "800", "1200", "500"],
    options: ["1000", "800", "1200", "500"],
    a: 0,
    answer: 0,
    solutionSteps: [
      {
        explanation: "The tank is empty when the volume V reaches 0 litres.",
        workingOut: "V = 0",
        graphData: null
      },
      {
        explanation: "Substitute V = 0 into the volume rule and solve for time t.",
        workingOut: "0 = -40t + 40000",
        graphData: null
      },
      {
        explanation: "Transpose 40t and divide to find the final hours.",
        workingOut: "40t = 40000 \\;\\Rightarrow\\; t = 1000 \\text{ hours}",
        graphData: null
      }
    ]
  }
];

(async () => {
  try {
    console.log('[Leaking Sub] Upgrading water leaking sub-questions to MCQ with detailed solutions...');
    const ref = db.collection('questions').doc('y10-4g-q12');
    const doc = await ref.get();
    if (doc.exists) {
      await ref.update({
        subQuestions: updatedSubQuestions,
        type: "multiple_choice",
        question: "Water was leaking from a tank at a constant rate. A graph of volume \\(V\\) (litres) against time \\(t\\) (hours) is a straight line passing through \\((0, 40000)\\) and \\((500, 20000)\\)."
      });
      console.log('Successfully migrated all subQuestions for y10-4g-q12.');
    } else {
      console.log('Error: Document not found.');
    }
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
