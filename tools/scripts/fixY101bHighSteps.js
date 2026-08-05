import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import fs from 'fs';

const sa = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(sa) });
const db = getFirestore();

async function run() {
  const batch = db.batch();

  // q32
  batch.update(db.collection('questions').doc('y10-1b-high-q32'), {
    solutionSteps: [
      {
        explanation: "First, calculate the new weekly production volume after a 20% increase.",
        workingOut: "\\(5000 \\times (1 + 0.20) = 5000 \\times 1.20 = 6000\\)",
        graphData: null
      },
      {
        explanation: "Determine the proportion of non-defective (functional) shirts. With a 6% defect rate, the non-defective rate is 94%.",
        workingOut: "\\(100\\% - 6\\% = 94\\% = 0.94\\)",
        graphData: null
      },
      {
        explanation: "Multiply the new production volume by the non-defective rate to find the final net output.",
        workingOut: "\\(6000 \\times 0.94 = 5640\\)",
        graphData: null
      }
    ]
  });

  // q33
  batch.update(db.collection('questions').doc('y10-1b-high-q33'), {
    solutionSteps: [
      {
        explanation: "First, calculate the new daily bolt production after a 10% increase.",
        workingOut: "\\(15000 \\times (1 + 0.10) = 15000 \\times 1.10 = 16500\\)",
        graphData: null
      },
      {
        explanation: "Determine the proportion of flawless bolts. With a 3% defect rate, the flawless rate is 97%.",
        workingOut: "\\(100\\% - 3\\% = 97\\% = 0.97\\)",
        graphData: null
      },
      {
        explanation: "Multiply the new production volume by the flawless rate to find the final yield.",
        workingOut: "\\(16500 \\times 0.97 = 16005\\)",
        graphData: null
      }
    ]
  });

  // q34
  batch.update(db.collection('questions').doc('y10-1b-high-q34'), {
    solutionSteps: [
      {
        explanation: "First, calculate the new weekly yield after a 25% increase from the new catalyst.",
        workingOut: "\\(1200 \\times (1 + 0.25) = 1200 \\times 1.25 = 1500\\)",
        graphData: null
      },
      {
        explanation: "Determine the proportion of functional yield. With an 8% defect rate, the functional rate is 92%.",
        workingOut: "\\(100\\% - 8\\% = 92\\% = 0.92\\)",
        graphData: null
      },
      {
        explanation: "Multiply the new yield by the functional rate.",
        workingOut: "\\(1500 \\times 0.92 = 1380\\)",
        graphData: null
      }
    ]
  });

  // q36
  batch.update(db.collection('questions').doc('y10-1b-high-q36'), {
    solutionSteps: [
      {
        explanation: "First, calculate the population after the 8% increase due to economic immigration.",
        workingOut: "\\(36000 \\times (1 + 0.08) = 36000 \\times 1.08 = 38880\\)",
        graphData: null
      },
      {
        explanation: "Next, calculate the population after the subsequent 3% decrease.",
        workingOut: "\\(38880 \\times (1 - 0.03) = 38880 \\times 0.97 = 37713.6\\)",
        graphData: null
      },
      {
        explanation: "Finally, round the result to the nearest whole person.",
        workingOut: "\\(37713.6 \\approx 37714\\)",
        graphData: null
      }
    ]
  });

  await batch.commit();
  console.log('Fixed y10-1b-high step-by-step explanations!');
}

run().catch(console.error);
