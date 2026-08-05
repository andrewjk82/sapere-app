const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const docRef = db.collection('questions').doc('f573d76a8590a1e0e6be70e2ed45828b');
  
  await docRef.update({
    options: [
      { text: "\\( x = 5, \\; y = 0 \\) and \\( x = \\frac{5}{2}, \\; y = \\frac{5}{2} \\)", imageUrl: "" },
      { text: "\\( x = -5, \\; y = 0 \\) and \\( x = -\\frac{5}{2}, \\; y = -\\frac{5}{2} \\)", imageUrl: "" },
      { text: "\\( x = 0, \\; y = 5 \\) and \\( x = \\frac{5}{2}, \\; y = \\frac{5}{2} \\)", imageUrl: "" },
      { text: "\\( x = 6, \\; y = -1 \\) and \\( x = 4, \\; y = 1 \\)", imageUrl: "" }
    ],
    answer: "0",
    solution: "\\( x = 5, \\; y = 0 \\) and \\( x = \\frac{5}{2}, \\; y = \\frac{5}{2} \\)",
    solutionSteps: [
      {
        explanation: "From the linear equation, express x in terms of y.",
        workingOut: "\\( x = 5 - y \\)",
        graphData: null
      },
      {
        explanation: "Substitute this expression for x into the quadratic equation.",
        workingOut: "\\( (5 - y)^2 + 3y^2 = 25 \\)",
        graphData: null
      },
      {
        explanation: "Expand the squared term and simplify the equation.",
        workingOut: "\\( 25 - 10y + y^2 + 3y^2 = 25 \\implies 4y^2 - 10y = 0 \\)",
        graphData: null
      },
      {
        explanation: "Factorise and solve for y, then substitute back to find x.",
        workingOut: "\\( 2y(2y - 5) = 0 \\implies y = 0 \\text{ or } y = \\frac{5}{2} \\)\\nIf \\( y = 0, x = 5 \\)\\nIf \\( y = \\frac{5}{2}, x = \\frac{5}{2} \\)",
        graphData: null
      }
    ]
  });

  console.log('Fixed simultaneous equations problem in DB!');
}

run().catch(console.error);
