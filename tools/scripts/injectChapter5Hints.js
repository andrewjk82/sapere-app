import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

(async () => {
  try {
    const topics = ['y10-5a', 'y10-5g'];
    let updatedCount = 0;

    for (const topicId of topics) {
      const snap = await db.collection('questions').where('topicId', '==', topicId).get();
      console.log(`Processing hints for ${topicId} (${snap.size} questions)...`);

      for (const doc of snap.docs) {
        const data = doc.data();
        let hint = "";

        // Determine hint text based on question content
        const questionText = data.question || "";
        
        if (topicId === 'y10-5a') {
          if (questionText.includes('factorising') || questionText.includes('factorizing')) {
            hint = "Find factors of the constant term that add up to the coefficient of the middle linear term.";
          } else if (questionText.includes(')(') || questionText.includes(') = 0')) {
            hint = "Use the Null Factor Law: if \\(A \\times B = 0\\), then either \\(A = 0\\) or \\(B = 0\\).";
          } else {
            hint = "Rearrange the equation to make one side zero, factorise out the common term, and solve.";
          }
        } else if (topicId === 'y10-5g') {
          if (questionText.includes('completing the square') || questionText.includes('completing')) {
            hint = "Transpose the constant term, add the square of half the coefficient of x to both sides, and factorise.";
          } else if (questionText.includes('surds')) {
            hint = "Rewrite the constant as the square of a square root and apply the difference of squares: \\(a^2 - b^2 = (a-b)(a+b)\\).";
          } else if (questionText.includes('Pythagoras') || questionText.includes('right-angled') || questionText.includes('triangle')) {
            hint = "Let the shortest side be \\(x\\) and set up the equation using Pythagoras' Theorem: \\(a^2 + b^2 = c^2\\).";
          } else if (questionText.includes('formula') || questionText.includes('quadratic formula')) {
            hint = "Use the quadratic formula: \\(x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}\\).";
          } else if (questionText.includes('repeated root') || questionText.includes('discriminant')) {
            hint = "A quadratic equation has one repeated root when its discriminant is zero: \\(\\Delta = b^2 - 4ac = 0\\).";
          } else if (questionText.includes('bin') || questionText.includes('sculpture') || questionText.includes('lawn') || questionText.includes('box')) {
            hint = "Define variable \\(x\\) for the unknown dimension, set up a quadratic equation based on area/volume, and solve.";
          } else {
            hint = "Use the Null Factor Law or quadratic formula to solve for the unknown variable.";
          }
        }

        if (hint) {
          await db.collection('questions').doc(doc.id).update({
            hint: hint,
            hintText: hint,
            updatedAt: new Date()
          });
          updatedCount++;
        }
      }
    }

    console.log(`\nSuccessfully injected hints for ${updatedCount} questions in Chapter 5!`);
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
