const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const sa = require('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json');
initializeApp({ credential: cert(sa) });
const db = getFirestore();

async function fix() {
  const idsToFixStep0 = [
    '1DNLLn3Ubw5LLqNgehNI',
    '2YJOhUZbkrRDnQZUtuEx',
    '31RBw1HpvxPbaQYwgNtb',
    '3bF6VWvXdXP44LClR8lU',
    '3UG4zn6c2KUzBAJEK1cf',
    '4jyA2WnASxsZnfoAQhWe',
    '6Jk86gEI2DDjihnotmoW',
    '8rQMXg4ewBArDpdjX0Cp'
  ];
  
  for (const id of idsToFixStep0) {
      const doc = await db.collection('questions').doc(id).get();
      if (doc.exists) {
          const data = doc.data();
          if (data.solutionSteps && data.solutionSteps.length > 0) {
              data.solutionSteps[0].workingOut = '<div style="text-align: left;"><p>We are asked to evaluate the expression step-by-step. First, identify the operations and any necessary common denominators.</p></div>';
              await db.collection('questions').doc(id).update({
                  solutionSteps: data.solutionSteps
              });
              console.log(`Fixed ${id}`);
          }
      }
  }

  // Fix 1xVYvG6DuvoTKYDjAWUa
  const id1x = '1xVYvG6DuvoTKYDjAWUa';
  const solution1x = `<div style="text-align: left;"><p>Let's convert each number to a decimal to compare their sizes:</p><ul><li>\\(-\\frac{9}{10} = -0.900\\)</li><li>\\(-\\frac{5}{6} \\approx -0.833\\)</li><li>\\(-\\frac{3}{4} = -0.750\\)</li><li>\\(\\frac{10}{11} \\approx 0.909\\)</li></ul><p>Comparing the values:</p><p>\\(-0.900 < -0.833 < -0.750 < 0.909\\)</p><p>Hence, the increasing order is:</p><p>\\(-\\frac{9}{10}, -\\frac{5}{6}, -\\frac{3}{4}, \\frac{10}{11}\\)</p></div>`;
  const steps1x = [
    {
      "explanation": "Identify what the question is asking and note the given information. Choose the appropriate method (calculate, simplify, convert, or list elements).",
      "workingOut": "<div style=\"text-align: left;\"><p>We are asked to arrange the given fractions in increasing order. Converting them to decimals will make comparison easier.</p></div>",
      "graphData": null
    },
    {
      "explanation": "Carry out the calculation or algebraic rearrangement step by step. Watch signs, place value, and order of operations.",
      "workingOut": `<div style="text-align: left;"><p>Let's convert each number to a decimal to compare their sizes:</p><ul><li>\\(-\\frac{9}{10} = -0.900\\)</li><li>\\(-\\frac{5}{6} \\approx -0.833\\)</li><li>\\(-\\frac{3}{4} = -0.750\\)</li><li>\\(\\frac{10}{11} \\approx 0.909\\)</li></ul><p>Comparing the values:</p><p>\\(-0.900 < -0.833 < -0.750 < 0.909\\)</p></div>`,
      "graphData": null
    },
    {
      "explanation": "State the final simplified answer and match it to the correct option.",
      "workingOut": `<div style="text-align: left;"><p>Hence, the increasing order is:</p><p>\\(-\\frac{9}{10}, -\\frac{5}{6}, -\\frac{3}{4}, \\frac{10}{11}\\)</p></div>`,
      "graphData": null
    }
  ];
  
  await db.collection('questions').doc(id1x).update({
      solution: solution1x,
      solutionSteps: steps1x
  });
  console.log(`Fixed ${id1x}`);
}
fix().catch(console.error);
