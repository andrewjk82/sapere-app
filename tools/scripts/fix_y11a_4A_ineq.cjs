const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

async function run() {
  const docRef = db.collection('questions').doc('VClxa4LKWCvbOp0pkDkx');
  await docRef.update({
    answer: "0" // Because options[0] is \(x < -3\)
  });
  
  // Also we should check if there are any other questions that have this error in the same topic. 
  // Let's just fix this one for now, as reported.
  console.log('Fixed answer for VClxa4LKWCvbOp0pkDkx');
  process.exit(0);
}

run();
