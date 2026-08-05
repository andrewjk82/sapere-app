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
          console.log(`\n--- ID: ${id} ---`);
          if (d.solution) console.log('Solution:', d.solution.replace(/\n/g, ' '));
      } else {
          console.log(`ID: ${id} not found.`);
      }
  }
}
check().catch(console.error);
