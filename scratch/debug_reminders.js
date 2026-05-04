import admin from 'firebase-admin';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

const db = admin.firestore();

async function debugReminders() {
  const today = '2026-05-04';
  console.log('Checking sessions for date:', today);
  
  const snap = await db.collection('sessions').where('date', '==', today).get();
  
  if (snap.empty) {
    console.log('No sessions found for today.');
    return;
  }
  
  snap.forEach(doc => {
    const data = doc.data();
    console.log(`--- Session ID: ${doc.id} ---`);
    console.log(`Student: ${data.studentName}`);
    console.log(`Email: ${data.studentEmail}`);
    console.log(`Time: ${data.startTime}`);
    console.log(`Reminder Sent: ${data.reminderSent}`);
    console.log(`Status: ${data.status}`);
  });
}

debugReminders().catch(console.error);
