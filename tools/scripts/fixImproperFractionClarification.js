import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

(async () => {
  try {
    const docId = "b88zApuCGfA8kPbosBzC";
    console.log(`[Clarification] Updating question ${docId} to make 1/2 the correct intuitive answer...`);

    const ref = db.collection('questions').doc(docId);
    const doc = await ref.get();
    
    if (doc.exists) {
      const data = doc.data();

      // Change the question to ask for the fraction of the TOTAL combined area
      const newQuestion = "What fraction of the total combined area of the two squares is shaded?";
      
      // The options are currently: ["1/2", "8/16", "1/4", "1"]. 
      // Shading half of the total combined area is 1/2.
      // Since 8/16 is also mathematically 1/2, it is a duplicate answer representation.
      // We will replace the options so they are distinct:
      const newOpts = [
        "\\(\\dfrac{1}{2}\\)", // Index 0 (Correct)
        "\\(\\dfrac{1}{4}\\)", // Index 1
        "\\(\\dfrac{3}{4}\\)", // Index 2
        "\\(\\dfrac{5}{8}\\)"  // Index 3
      ];
      
      const newSolutionSteps = [
        {
          explanation: "We are asked to find what fraction of the total combined area of the two squares is shaded. Our strategy is to count the total number of equal subdivisions across both squares and compare it with the number of shaded parts.",
          workingOut: "\\(\\text{Total Triangles in 2 Squares} = 8 \\times 2 = 16\\)",
          graphData: null
        },
        {
          explanation: "Next, we count the total number of shaded triangles across both squares. In the first square, there are 4 shaded triangles. In the second square, there are also 4 shaded triangles. Thus, the total number of shaded parts is 8.",
          workingOut: "\\\(\\text{Total Shaded Triangles} = 4 + 4 = 8\\)",
          graphData: null
        },
        {
          explanation: "We write the fraction of the shaded area relative to the total combined area as 8/16. To simplify, we divide both the numerator and the denominator by their greatest common divisor, which is 8.",
          workingOut: "\\(\\dfrac{8 \\div 8}{16 \\div 8} = \\dfrac{1}{2}\\)",
          graphData: null
        },
        {
          explanation: "The simplified fraction is 1/2, representing exactly half of the total combined area of the two squares. This matches Option A (index 0).",
          workingOut: "\\(\\dfrac{1}{2} \\;\\checkmark\\)",
          graphData: null
        }
      ];

      await ref.update({
        question: newQuestion,
        opts: newOpts,
        options: newOpts,
        a: 0,
        answer: 0,
        solutionSteps: newSolutionSteps
      });

      console.log("Successfully updated the question text, options, and solutionSteps to target 1/2.");
    } else {
      console.log("Doc b88zApuCGfA8kPbosBzC not found.");
    }
    process.exit(0);
  } catch (err) {
    console.error("Error during clarification fix:", err);
    process.exit(1);
  }
})();
