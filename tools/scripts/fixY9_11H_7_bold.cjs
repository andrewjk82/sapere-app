const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // q7a: d=8, r=4, r²=16
  await db.collection('questions').doc('y9-11h-q7a').update({
    solutionSteps: [
      { explanation: "The general equation for a circle centered at the origin \\((0, 0)\\) is \\(x^2 + y^2 = r^2\\). The question gives us the diameter, so we must first find the radius.", workingOut: "\\(x^2 + y^2 = r^2\\)" },
      { explanation: "The radius is always half the diameter. Divide the diameter by 2.", workingOut: "\\(r = \\dfrac{d}{2} = \\dfrac{8}{2} = 4\\)" },
      { explanation: "Now square the radius to find \\(r^2\\).", workingOut: "\\(r^2 = (4)^2 = 16\\)" },
      { explanation: "Substitute \\(r^2\\) into the standard equation to get the final answer.", workingOut: "\\(x^2 + y^2 = 16\\)" }
    ],
    updatedAt: FieldValue.serverTimestamp()
  });
  console.log("Updated y9-11h-q7a");

  // q7b: d=14, r=7, r²=49
  await db.collection('questions').doc('y9-11h-q7b').update({
    solutionSteps: [
      { explanation: "The general equation for a circle centered at the origin \\((0, 0)\\) is \\(x^2 + y^2 = r^2\\). The question gives us the diameter, so we must first find the radius.", workingOut: "\\(x^2 + y^2 = r^2\\)" },
      { explanation: "The radius is always half the diameter. Divide the diameter by 2.", workingOut: "\\(r = \\dfrac{d}{2} = \\dfrac{14}{2} = 7\\)" },
      { explanation: "Now square the radius to find \\(r^2\\).", workingOut: "\\(r^2 = (7)^2 = 49\\)" },
      { explanation: "Substitute \\(r^2\\) into the standard equation to get the final answer.", workingOut: "\\(x^2 + y^2 = 49\\)" }
    ],
    updatedAt: FieldValue.serverTimestamp()
  });
  console.log("Updated y9-11h-q7b");

  // q7c: d=5, r=5/2, r²=25/4
  await db.collection('questions').doc('y9-11h-q7c').update({
    solutionSteps: [
      { explanation: "The general equation for a circle centered at the origin \\((0, 0)\\) is \\(x^2 + y^2 = r^2\\). The question gives us the diameter, so we must first find the radius.", workingOut: "\\(x^2 + y^2 = r^2\\)" },
      { explanation: "The radius is always half the diameter. Divide the diameter by 2.", workingOut: "\\(r = \\dfrac{d}{2} = \\dfrac{5}{2}\\)" },
      { explanation: "Square the radius to find \\(r^2\\). Remember: \\(\\left(\\dfrac{a}{b}\\right)^2 = \\dfrac{a^2}{b^2}\\).", workingOut: "\\(r^2 = \\left(\\dfrac{5}{2}\\right)^2 = \\dfrac{25}{4}\\)" },
      { explanation: "Substitute \\(r^2\\) into the standard equation to get the final answer.", workingOut: "\\(x^2 + y^2 = \\dfrac{25}{4}\\)" }
    ],
    updatedAt: FieldValue.serverTimestamp()
  });
  console.log("Updated y9-11h-q7c");

  // q7d: d=9, r=9/2, r²=81/4
  await db.collection('questions').doc('y9-11h-q7d').update({
    solutionSteps: [
      { explanation: "The general equation for a circle centered at the origin \\((0, 0)\\) is \\(x^2 + y^2 = r^2\\). The question gives us the diameter, so we must first find the radius.", workingOut: "\\(x^2 + y^2 = r^2\\)" },
      { explanation: "The radius is always half the diameter. Divide the diameter by 2.", workingOut: "\\(r = \\dfrac{d}{2} = \\dfrac{9}{2}\\)" },
      { explanation: "Square the radius to find \\(r^2\\). Remember: \\(\\left(\\dfrac{a}{b}\\right)^2 = \\dfrac{a^2}{b^2}\\).", workingOut: "\\(r^2 = \\left(\\dfrac{9}{2}\\right)^2 = \\dfrac{81}{4}\\)" },
      { explanation: "Substitute \\(r^2\\) into the standard equation to get the final answer.", workingOut: "\\(x^2 + y^2 = \\dfrac{81}{4}\\)" }
    ],
    updatedAt: FieldValue.serverTimestamp()
  });
  console.log("Updated y9-11h-q7d");

  // q7e: d=5/6, r=5/12, r²=25/144
  await db.collection('questions').doc('y9-11h-q7e').update({
    solutionSteps: [
      { explanation: "The general equation for a circle centered at the origin \\((0, 0)\\) is \\(x^2 + y^2 = r^2\\). The question gives us the diameter, so we must first find the radius.", workingOut: "\\(x^2 + y^2 = r^2\\)" },
      { explanation: "The radius is half the diameter. To divide a fraction by 2, multiply the denominator by 2.", workingOut: "\\(r = \\dfrac{d}{2} = \\dfrac{5/6}{2} = \\dfrac{5}{6 \\times 2} = \\dfrac{5}{12}\\)" },
      { explanation: "Square the radius to find \\(r^2\\). Square both the numerator and the denominator separately.", workingOut: "\\(r^2 = \\left(\\dfrac{5}{12}\\right)^2 = \\dfrac{5^2}{12^2} = \\dfrac{25}{144}\\)" },
      { explanation: "Substitute \\(r^2\\) into the standard equation to get the final answer.", workingOut: "\\(x^2 + y^2 = \\dfrac{25}{144}\\)" }
    ],
    updatedAt: FieldValue.serverTimestamp()
  });
  console.log("Updated y9-11h-q7e");

  console.log("All done.");
  process.exit(0);
}

run().catch(console.error);
