const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // q7c: diameter = 5, r = 5/2, r² = 25/4
  {
    const docRef = db.collection('questions').doc('y9-11h-q7c');
    const d = 5;
    const steps = [
      {
        explanation: "The general equation for a circle centered at the origin \\((0, 0)\\) is \\(x^2 + y^2 = r^2\\). The question gives us the **diameter**, so we must first find the radius.",
        workingOut: "\\(x^2 + y^2 = r^2\\)"
      },
      {
        explanation: "The radius is always half the diameter. Divide the diameter by 2.",
        workingOut: `\\(r = \\dfrac{d}{2} = \\dfrac{${d}}{2} = \\dfrac{5}{2}\\)`
      },
      {
        explanation: "Square the radius to find \\(r^2\\). Remember: \\(\\left(\\dfrac{a}{b}\\right)^2 = \\dfrac{a^2}{b^2}\\).",
        workingOut: `\\(r^2 = \\left(\\dfrac{5}{2}\\right)^2 = \\dfrac{25}{4}\\)`
      },
      {
        explanation: "Substitute \\(r^2\\) into the standard equation to state the final answer.",
        workingOut: `\\(x^2 + y^2 = \\dfrac{25}{4}\\)`
      }
    ];
    await docRef.update({
      solution: "",
      solutionSteps: steps,
      answer: "\\(x^2 + y^2 = \\frac{25}{4}\\)",
      options: [
        "\\(x^2 + y^2 = \\frac{25}{4}\\)",
        "\\(x^2 + y^2 = 25\\)",
        "\\(x^2 + y^2 = \\frac{5}{2}\\)",
        "\\(-x^2 + y^2 = \\frac{25}{4}\\)"
      ],
      opts: FieldValue.delete(),
      updatedAt: FieldValue.serverTimestamp()
    });
    console.log("Updated y9-11h-q7c");
  }

  // q7d: diameter = 9, r = 9/2, r² = 81/4
  {
    const docRef = db.collection('questions').doc('y9-11h-q7d');
    const d = 9;
    const steps = [
      {
        explanation: "The general equation for a circle centered at the origin \\((0, 0)\\) is \\(x^2 + y^2 = r^2\\). The question gives us the **diameter**, so we must first find the radius.",
        workingOut: "\\(x^2 + y^2 = r^2\\)"
      },
      {
        explanation: "The radius is always half the diameter. Divide the diameter by 2.",
        workingOut: `\\(r = \\dfrac{d}{2} = \\dfrac{${d}}{2} = \\dfrac{9}{2}\\)`
      },
      {
        explanation: "Square the radius to find \\(r^2\\). Remember: \\(\\left(\\dfrac{a}{b}\\right)^2 = \\dfrac{a^2}{b^2}\\).",
        workingOut: `\\(r^2 = \\left(\\dfrac{9}{2}\\right)^2 = \\dfrac{81}{4}\\)`
      },
      {
        explanation: "Substitute \\(r^2\\) into the standard equation to state the final answer.",
        workingOut: `\\(x^2 + y^2 = \\dfrac{81}{4}\\)`
      }
    ];
    await docRef.update({
      solution: "",
      solutionSteps: steps,
      answer: "\\(x^2 + y^2 = \\frac{81}{4}\\)",
      options: [
        "\\(x^2 + y^2 = \\frac{81}{4}\\)",
        "\\(x^2 + y^2 = 81\\)",
        "\\(x^2 + y^2 = \\frac{9}{2}\\)",
        "\\(-x^2 + y^2 = \\frac{81}{4}\\)"
      ],
      opts: FieldValue.delete(),
      updatedAt: FieldValue.serverTimestamp()
    });
    console.log("Updated y9-11h-q7d");
  }

  // q7e: diameter = 5/6, r = 5/12, r² = 25/144
  {
    const docRef = db.collection('questions').doc('y9-11h-q7e');
    const steps = [
      {
        explanation: "The general equation for a circle centered at the origin \\((0, 0)\\) is \\(x^2 + y^2 = r^2\\). The question gives us the **diameter**, so we must first find the radius.",
        workingOut: "\\(x^2 + y^2 = r^2\\)"
      },
      {
        explanation: "The radius is always half the diameter. To divide a fraction by 2, multiply the denominator by 2.",
        workingOut: "\\(r = \\dfrac{d}{2} = \\dfrac{5/6}{2} = \\dfrac{5}{6 \\times 2} = \\dfrac{5}{12}\\)"
      },
      {
        explanation: "Square the radius to find \\(r^2\\). Square both the numerator and the denominator.",
        workingOut: "\\(r^2 = \\left(\\dfrac{5}{12}\\right)^2 = \\dfrac{5^2}{12^2} = \\dfrac{25}{144}\\)"
      },
      {
        explanation: "Substitute \\(r^2\\) into the standard equation to state the final answer.",
        workingOut: "\\(x^2 + y^2 = \\dfrac{25}{144}\\)"
      }
    ];
    await docRef.update({
      solution: "",
      solutionSteps: steps,
      answer: "\\(x^2 + y^2 = \\frac{25}{144}\\)",
      options: [
        "\\(x^2 + y^2 = \\frac{25}{144}\\)",
        "\\(x^2 + y^2 = \\frac{25}{36}\\)",
        "\\(x^2 + y^2 = \\frac{5}{12}\\)",
        "\\(-x^2 + y^2 = \\frac{25}{144}\\)"
      ],
      opts: FieldValue.delete(),
      updatedAt: FieldValue.serverTimestamp()
    });
    console.log("Updated y9-11h-q7e");
  }

  console.log("All done.");
  process.exit(0);
}

run().catch(console.error);
