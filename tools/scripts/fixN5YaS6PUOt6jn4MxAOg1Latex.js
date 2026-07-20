import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const updatedSteps = [
  {
    explanation: "Concurrent lines all intersect at a single point. First, find the intersection point of the first two lines by equating their equations.",
    workingOut: "\\begin{aligned} 2x - 1 &= x + 3 \\;\\Rightarrow\\; x = 4 \\\\ y &= 4 + 3 = 7 \\end{aligned}",
    graphData: null
  },
  {
    explanation: "Test if the intersection point (4, 7) lies on the third line by substituting x = 4 and checking if the resulting y equals 7.",
    workingOut: "y = -x + 9 \\;\\Rightarrow\\; 7 = -(4) + 9 \\;\\Rightarrow\\; 7 = 5 \\quad (\\text{False})",
    graphData: null
  },
  {
    explanation: "Since the coordinates (4, 7) do not satisfy the third equation, the three lines do not intersect at a common point. Therefore, they are not concurrent.",
    workingOut: "\\text{The lines are not concurrent.}",
    graphData: null
  }
];

(async () => {
  try {
    console.log('[N5YaS6PUOt6jn4MxAOg1 Fix] Updating solution steps with aligned block...');
    const ref = db.collection('questions').doc('N5YaS6PUOt6jn4MxAOg1');
    const doc = await ref.get();
    if (doc.exists) {
      await ref.update({
        solutionSteps: updatedSteps
      });
      console.log('  [SUCCESS] Successfully fixed N5YaS6PUOt6jn4MxAOg1 solution steps.');
    } else {
      console.log('  [ERROR] Document not found.');
    }
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
