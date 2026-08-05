const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const sa = require('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json');
initializeApp({ credential: cert(sa) });
const db = getFirestore();

async function check() {
  const ids = [
    '1DNLLn3Ubw5LLqNgehNI',
    '1xVYvG6DuvoTKYDjAWUa',
    '2YJOhUZbkrRDnQZUtuEx',
    '31RBw1HpvxPbaQYwgNtb',
    '3bF6VWvXdXP44LClR8lU',
    '3UG4zn6c2KUzBAJEK1cf',
    '4jyA2WnASxsZnfoAQhWe',
    '6Jk86gEI2DDjihnotmoW',
    '8rQMXg4ewBArDpdjX0Cp'
  ];
  
  for (const id of ids) {
      const doc = await db.collection('questions').doc(id).get();
      if (doc.exists) {
          const d = doc.data();
          if (d.solutionSteps) {
              d.solutionSteps.forEach((step, i) => {
                  if (step.workingOut && step.workingOut.includes('\\)\\(')) {
                      console.log(`ID ${id} Step ${i} has broken delimiter`);
                  }
                  if (step.workingOut && step.workingOut.match(/<li[^>]*>\s*\\\)/)) {
                      console.log(`ID ${id} Step ${i} has broken li delimiter`);
                  }
                  if (step.workingOut && step.workingOut.includes('<div style="text-align: left;"><p>Solving')) {
                      // check what else could be wrong
                  }
              });
          }
      }
  }
}
check().catch(console.error);
