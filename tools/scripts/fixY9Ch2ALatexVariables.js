import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// We need to parse questions and replace any template variables like "$hypotenuse$" and "$side$" 
// with the actual values based on the question text.
async function run() {
  const snap = await db.collection('questions')
    .where('topicId', '==', 'y9-2a')
    .get();

  const batch = db.batch();
  let count = 0;

  snap.forEach(doc => {
    const d = doc.data();
    if (!d.solutionSteps) return;

    let modified = false;
    const newSteps = d.solutionSteps.map(step => {
      let working = step.workingOut || "";
      if (working.includes('$hypotenuse$') || working.includes('$side$')) {
        modified = true;
        // Parse the values from the question text
        // Example: "A right-angled triangle has a hypotenuse of 13 cm and one shorter side of 5 cm."
        const qText = d.question;
        const hypMatch = qText.match(/hypotenuse of\s*(\d+)/i) || qText.match(/hypotenuse is\s*(\d+)/i);
        const sideMatch = qText.match(/shorter side of\s*(\d+)/i) || qText.match(/shorter side is\s*(\d+)/i) || qText.match(/slant length of\s*(\d+)/i) || qText.match(/height of\s*(\d+)/i) || qText.match(/base of\s*(\d+)/i);
        
        let hypVal = hypMatch ? hypMatch[1] : "c";
        let sideVal = sideMatch ? sideMatch[1] : "b";

        // For specific isosceles or word problems, customize
        if (d.question.includes("isosceles triangle") && d.question.includes("base of 8") && d.question.includes("height of 5")) {
          // base = 8, half-base = 4, height = 5. Find hypotenuse.
          hypVal = "5";
          sideVal = "4";
        }
        if (d.question.includes("isosceles triangle") && d.question.includes("slant length of 10") && d.question.includes("height of 7")) {
          // slant (hypotenuse) = 10, height = 7. Find half-base.
          hypVal = "10";
          sideVal = "7";
        }
        if (d.question.includes("gate") && d.question.includes("1.8 m") && d.question.includes("0.9 m")) {
          hypVal = "1.8";
          sideVal = "0.9";
        }
        if (d.question.includes("ladder") && d.question.includes("6 m") && d.question.includes("1.5 m")) {
          hypVal = "6";
          sideVal = "1.5";
        }

        working = working
          .replace(/\$hypotenuse\$/g, hypVal)
          .replace(/\$side\$/g, sideVal);
      }
      return {
        ...step,
        workingOut: working
      };
    });

    if (modified) {
      batch.update(db.collection('questions').doc(doc.id), {
        solutionSteps: newSteps
      });
      count++;
    }
  });

  if (count > 0) {
    await batch.commit();
    console.log(`✅ Successfully fixed LaTeX template variables in ${count} questions!`);
  } else {
    console.log('No template variables found to fix.');
  }
}

run().catch(console.error);
