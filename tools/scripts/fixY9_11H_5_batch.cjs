const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const questionsToUpdate = [
    'y9-11h-q5a', 'y9-11h-q5b', 'y9-11h-q5c', 'y9-11h-q5d'
  ];

  for (const qId of questionsToUpdate) {
    const docRef = db.collection('questions').doc(qId);
    const doc = await docRef.get();
    
    if (!doc.exists) {
      console.log(`Missing ${qId}, skipping.`);
      continue;
    }

    const data = doc.data();
    
    let rMatch = data.question.match(/radius\s*\\\((.*?)\\\)/);
    if (!rMatch) {
      console.log(`Could not parse radius for ${qId}: ${data.question}`);
      continue;
    }

    let rStr = rMatch[1].trim(); // e.g., "11", "\\sqrt{7}", "2\\sqrt{3}", "5\\sqrt{3}"

    let rSqCalculation = "";
    let finalRSqStr = "";

    if (rStr === "11") {
      rSqCalculation = `r^2 = (11)^2 = 121`;
      finalRSqStr = "121";
    } else if (rStr === "\\sqrt{7}") {
      rSqCalculation = `r^2 = (\\sqrt{7})^2 = 7`;
      finalRSqStr = "7";
    } else if (rStr === "2\\sqrt{3}") {
      rSqCalculation = `r^2 = (2\\sqrt{3})^2 = 2^2 \\times (\\sqrt{3})^2 = 4 \\times 3 = 12`;
      finalRSqStr = "12";
    } else if (rStr === "5\\sqrt{3}") {
      rSqCalculation = `r^2 = (5\\sqrt{3})^2 = 5^2 \\times (\\sqrt{3})^2 = 25 \\times 3 = 75`;
      finalRSqStr = "75";
    }

    const steps = [
      {
        "explanation": "The general equation for a circle centered at the origin \\((0, 0)\\) is \\(x^2 + y^2 = r^2\\), where \\(r\\) is the radius.",
        "workingOut": "\\(x^2 + y^2 = r^2\\)"
      },
      {
        "explanation": "Identify the radius \\(r\\) given in the question.",
        "workingOut": `\\(r = ${rStr}\\)`
      },
      {
        "explanation": "Square the radius to find \\(r^2\\). (For surds, remember to square both the outside number and the square root).",
        "workingOut": `\\(${rSqCalculation}\\)`
      },
      {
        "explanation": "Substitute \\(r^2\\) back into the general equation to get your final answer.",
        "workingOut": `\\(x^2 + y^2 = ${finalRSqStr}\\)`
      }
    ];

    await docRef.update({
      solution: "",
      solutionSteps: steps,
      updatedAt: FieldValue.serverTimestamp()
    });
    
    console.log(`Updated ${qId}`);
  }

  console.log("Batch update completed.");
  process.exit(0);
}

run().catch(console.error);
