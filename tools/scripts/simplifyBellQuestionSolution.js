import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

(async () => {
  try {
    console.log('[Simplification] Updating solutionSteps for Bell question (jLmBajsieWTyOPg2tI2k)...');
    const ref = db.collection('questions').doc('jLmBajsieWTyOPg2tI2k');
    const doc = await ref.get();

    if (doc.exists) {
      const simplifiedSteps = [
        {
          explanation: "Four bells ring at regular intervals of 1, 1 and 1/4 (which is 5/4), 1 and 1/5 (which is 6/5), and 1 and 1/6 (which is 7/6) seconds. Our strategy is to find a total time T (in seconds) that is a perfect multiple of all these individual intervals.",
          workingOut: "\\(\\text{Intervals: } 1,\\; \\dfrac{5}{4},\\; \\dfrac{6}{5},\\; \\dfrac{7}{6}\\)",
          graphData: null
        },
        {
          explanation: "For the bells to ring together again, the total time T must be a whole number multiple of each interval. Let's analyze what this means for T to be divided by each fraction.",
          workingOut: "\\(T \\div 1 = T\\text{ (must be a whole number)}\\)",
          graphData: null
        },
        {
          explanation: "For the second bell, T divided by 5/4 must be a whole number. Since dividing by 5/4 is the same as multiplying by 4/5, T multiplied by 4/5 must be a whole number. Since 4 and 5 share no common factors, T must be a multiple of 5.",
          workingOut: "\\(T \\div \\dfrac{5}{4} = T \\times \\dfrac{4}{5} \\;\\Rightarrow\\; T \\text{ must be a multiple of } 5\\)",
          graphData: null
        },
        {
          explanation: "Similarly, for the third and fourth bells, T divided by 6/5 and 7/6 must be whole numbers. This means T multiplied by 5/6 and T multiplied by 6/7 must be whole numbers. Therefore, T must also be a multiple of 6 and a multiple of 7.",
          workingOut: "\\(T \\text{ must be a multiple of } 6 \\text{ and } 7\\)",
          graphData: null
        },
        {
          explanation: "To find the first time they all ring together, we need the smallest common multiple (LCM) of 5, 6, and 7. Since they share no common prime factors, we multiply them together: 5 x 6 x 7 = 210.",
          workingOut: "\\(\\text{LCM}(5, 6, 7) = 5 \\times 6 \\times 7 = 210\\)",
          graphData: null
        },
        {
          explanation: "At 210 seconds, all conditions are satisfied: Bell 1 rings 210 times, Bell 2 rings 168 times (210 divided by 5/4), Bell 3 rings 175 times (210 divided by 6/5), and Bell 4 rings 180 times (210 divided by 7/6). Thus, they first ring together again after 210 seconds.",
          workingOut: "\\(210\\text{ seconds}\\)",
          graphData: null
        }
      ];

      await ref.update({
        solutionSteps: simplifiedSteps
      });
      console.log('  [UPDATED] Successfully simplified steps to 7th grade level.');
    } else {
      console.log('  [ERROR] Bell question doc not found.');
    }
    process.exit(0);
  } catch (err) {
    console.error('Fatal error during simplification:', err);
    process.exit(1);
  }
})();
