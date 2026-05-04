import admin from 'firebase-admin';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

const db = admin.firestore();

async function listManualStudents() {
  console.log("Fetching all manual students from Firestore...");
  const snapshot = await db.collection('students').get();
  
  if (snapshot.empty) {
    console.log("No manual students found.");
    return;
  }

  snapshot.forEach(doc => {
    const data = doc.data();
    console.log(`ID: ${doc.id} | Name: ${data.name || 'N/A'} | TutorId: ${data.tutorId || 'N/A'}`);
  });
}

listManualStudents().catch(console.error);
