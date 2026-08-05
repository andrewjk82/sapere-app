const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const sa = require('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json');
initializeApp({ credential: cert(sa) });
const db = getFirestore();

async function fix() {
  const docRef = db.collection('questions').doc('04H758knGmmbKjZTXhuE');
  
  const solution = `<div style="text-align: left;"><p>Let's convert each number to a decimal:</p><ul><li>\\(-2 = -2.00\\)</li><li>\\(-1\\frac{7}{9} = -\\frac{16}{9} \\approx -1.78\\)</li><li>\\(-\\frac{11}{9} \\approx -1.22\\)</li><li>\\(-1 = -1.00\\)</li></ul><p>Comparing the values:</p><p>\\(-2.00 < -1.78 < -1.22 < -1.00\\)</p><p>Hence, the increasing order is:</p><p>\\(-2, -1\\frac{7}{9}, -\\frac{11}{9}, -1\\)</p></div>`;

  const solutionSteps = [
    {
      "explanation": "Identify what the question is asking and note the given information. Choose the appropriate method (calculate, simplify, convert, or list elements).",
      "workingOut": "<div style=\"text-align: left;\"><p>We are asked to arrange the given negative fractions and integers in increasing order. Converting them to decimals will make comparison easier.</p></div>",
      "graphData": null
    },
    {
      "explanation": "Carry out the calculation or algebraic rearrangement step by step. Watch signs, place value, and order of operations.",
      "workingOut": "<div style=\"text-align: left;\"><p>Let's convert each number to a decimal:</p><ul><li>\\(-2 = -2.00\\)</li><li>\\(-1\\frac{7}{9} = -\\frac{16}{9} \\approx -1.78\\)</li><li>\\(-\\frac{11}{9} \\approx -1.22\\)</li><li>\\(-1 = -1.00\\)</li></ul><p>Comparing the values:</p><p>\\(-2.00 < -1.78 < -1.22 < -1.00\\)</p></div>",
      "graphData": null
    },
    {
      "explanation": "State the final simplified answer and match it to the correct option.",
      "workingOut": "<div style=\"text-align: left;\"><p>Hence, the increasing order is:</p><p>\\(-2, -1\\frac{7}{9}, -\\frac{11}{9}, -1\\)</p></div>",
      "graphData": null
    }
  ];

  await docRef.update({
      solution: solution,
      solutionSteps: solutionSteps
  });
  console.log('Fixed latex for 04H758knGmmbKjZTXhuE');
}
fix().catch(console.error);
